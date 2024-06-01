import { useContext } from "react";
import { ExperimentFormContext } from "../contexts/FormContext";

export const useFormContext = () => useContext(ExperimentFormContext);