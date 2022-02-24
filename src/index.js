import { StrictMode } from "react"
import ReactDOM from "react-dom"
import './styles/global.css'

import { Home } from "./templates/Home/Home.jsx"

const rootElement = document.getElementById("root")
ReactDOM.render(
  <StrictMode>
    <Home />
  </StrictMode>,
  rootElement
);