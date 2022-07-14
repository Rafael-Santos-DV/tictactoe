import md5 from "md5";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { register } from "../../Features/Players";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Container, HaveCharacter, InitGame } from "./style";

const time = Number(new Date());

type ResponseCharacter = {
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export const CardRegister: React.FC = () => {
  const [getForm, setForm] = useState({ name: "", character: "" });

  const [getResponse, setResponse] = useState<"erro" | "sucess">();

  const store = useAppSelector((state) => state.Players);

  const dispatch = useAppDispatch();

  function activeStatusResponse(response: typeof getResponse, time = 1000) {
    setResponse(response);

    const clearTime = setTimeout(() => {
      setResponse(undefined);
    }, time);

    return () => clearTimeout(clearTime);
  }

  async function createPlayer(id: number) {
    if (store.isRunning) {
      return;
    }

    if (!getForm.character || !getForm.name) {
      return;
    }

    try {
      const hash = md5(
        time +
          String(process.env.REACT_APP_API_PRIVATE) +
          String(process.env.REACT_APP_API_PUBLIC)
      );

      const {
        data: {
          data: { results },
        },
      } = await axios.get(`${process.env.REACT_APP_END_POINT}/characters`, {
        params: {
          name: getForm.character,
          ts: time,
          apikey: process.env.REACT_APP_API_PUBLIC,
          limit: 1,
          hash,
        },
      });

      const {
        name: character,
        thumbnail: { extension, path },
      } = results[0] as ResponseCharacter;

      if (!character) {
        activeStatusResponse("erro", 3000);
        return;
      }

      dispatch(
        register({
          name: getForm.name,
          character,
          id,
          thumbnail: `${path}.${extension}`,
        })
      );
      activeStatusResponse("sucess", 3000);
      setForm({ name: "", character: "" });
    } catch (err) {
      activeStatusResponse("erro", 3000);
      alert(err);
    }
  }

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <Container>
      <h2>Player {store.rowID}</h2>

      <input
        type="text"
        name="name"
        placeholder="Seu nome"
        value={getForm.name}
        onChange={handleChangeInput}
      />
      <p>Abaixo, informe o nome do seu personagem da Marvel favorito</p>
      <input
        type="text"
        name="character"
        placeholder="Personagem da Marvel"
        value={getForm.character}
        onChange={handleChangeInput}
      />

      <button onClick={() => createPlayer(store.rowID)}>Confirmar</button>

      <HaveCharacter>
        {getResponse === "sucess" && (
          <p className="character-sucess">Personagem encontrado</p>
        )}
        {getResponse === "erro" && (
          <p className="character-failed">
            Personagem não encontrado, por favor, informe um personagem válido.
          </p>
        )}
        {store.isRunning && (
          <InitGame>
            <span>Iniciando partida</span>
            <span className="circle-animate"></span>
            <span className="circle-animate"></span>
            <span className="circle-animate"></span>
          </InitGame>
        )}
      </HaveCharacter>
    </Container>
  );
};
