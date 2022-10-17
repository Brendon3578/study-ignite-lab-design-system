import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

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
