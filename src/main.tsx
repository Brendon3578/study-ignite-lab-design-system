import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

/*
  OBS: no Github Pages o MSW apresenta um erro
  (é possível vê-lo dentro do console, apontando que o script
  "mockServiceWorker.js não foi encontrado")
*/
async function main() {
  if (process.env.NODE_ENV === "development") {
    if (window.location.pathname === "/study-ignite-lab-design-system") {
      window.location.pathname = "/study-ignite-lab-design-system";
      return;
    }
    const { worker } = require("./mocks/browser");
    await worker.start({
      serviceWorker: {
        url: "/study-ignite-lab-design-system/mockServiceWorker.js",
      },
    });
  }
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
main();
