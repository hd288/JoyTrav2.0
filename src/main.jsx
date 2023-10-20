import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientGoogleId = "964701967230-4ks7tdspbgq6abqgsm99drib520v4bo6.apps.googleusercontent.com";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <GoogleOAuthProvider clientId={clientGoogleId}>
          <App />
        </GoogleOAuthProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
