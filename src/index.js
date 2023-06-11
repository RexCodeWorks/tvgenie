import React from "react";
import { createRoot } from "react-dom/client";
import 'bulma/css/bulma.min.css';
import './styles.css';
import App from "./App";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(<React.StrictMode>
    <App />
</React.StrictMode>);