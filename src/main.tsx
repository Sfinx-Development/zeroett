import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation.tsx";
import { CustomerProvider } from "./contexts/customerContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomerProvider>
        <Navigation />
      </CustomerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
