import { Route, Routes } from "react-router-dom";
import { Home } from "../screens/Home";
import { RegisterExperiment } from "../screens/Experiments/RegisterExperiment";
import { RegisterExperimentForm } from "../screens/Experiments/RegisterExperimentForm";
import { PrintForm } from "../screens/Experiments/printForm";

export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register-experiment" element={<RegisterExperiment/>} />
            <Route path="/register-experiment-form" element={<RegisterExperimentForm/>} />
            <Route path="/printForm" element={<PrintForm/>} />
        </Routes>
    );
};