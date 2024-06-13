import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes/MainRoutes";

export function App() {
  return (
      <BrowserRouter>
          <MainRoutes/>
      </BrowserRouter>
  )
}

