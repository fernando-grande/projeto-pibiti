import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes/MainRoutes";
import { FormProvider } from "./contexts/FormContext";

export function App() {
  return (
      <BrowserRouter>
        <FormProvider>
          <MainRoutes/>
        </FormProvider>
      </BrowserRouter>
  )
}

