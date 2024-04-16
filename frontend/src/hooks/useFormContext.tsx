import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

export const useFormContext = () => useContext(FormContext);