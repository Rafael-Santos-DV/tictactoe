import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  gap: 20px;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
`;

export const BoxImage = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 25px;
  }

  @media screen and (max-width: 768px) {
    & > div:nth-of-type(1) {
      order: 1;
    }

    & > div:nth-of-type(2) {
      order: 3;
      margin: 0 auto;
    }

    & > div:nth-of-type(3) {
      order: 2;
    }
  }

  @media screen and (max-width: 480px) {
    gap: 2px;
  }
`;
