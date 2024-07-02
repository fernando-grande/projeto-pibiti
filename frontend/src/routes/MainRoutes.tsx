import { Route, Routes } from "react-router-dom";
import { Home } from "../screens/Home";
import { RegisterExperiment } from "../screens/RegisterExperiments/RegisterExperiment";
import { RegisterExperimentForm } from "../screens/RegisterExperiments/RegisterExperimentForm";
import { ExperimentsRepository } from "../screens/ExperimentsRepository/ExperimentsRepository";

export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register-experiment" element={<RegisterExperiment/>} />
            <Route path="/register-experiment-form" element={<RegisterExperimentForm/>} />
            <Route path="/experiments-repository" element={<ExperimentsRepository/>}/>
            <Route path="/experiments-repository/:searchString" element={<ExperimentsRepository/>}/>
        </Routes>
    );
};