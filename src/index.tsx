import React from "react";
import ReactDOM from "react-dom";
import App from "./routers/App";
import "./assets/styles.css";
import reportWebVitals from "./reportWebVitals";
import GlobalProviders from "./global_providers/GlobalProviders";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProviders>
      <App />
    </GlobalProviders>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
