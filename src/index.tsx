import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { StylesGlobal } from "./Global/styleGlobal";
import theme from "./Global/theme";
import Game from "./Pages/Game";
import store from "./Store/Store";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StylesGlobal />
        <Game />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
