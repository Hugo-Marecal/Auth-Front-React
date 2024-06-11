import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/style.css";
import "./Api/axiosInterceptor";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
