import { MainLayout } from "../../layouts/screens/MainLayout";
import { ExperimentInformation } from "../../forms/experiment/ExperimentInformation";
import { ExperimentPlanning } from "../../forms/experiment/ExperimentPlanning";
import { ExecutionSelection } from "../../forms/experiment/Execution";
import { Analysis } from "../../forms/experiment/Analysis";
import { Documentation } from "../../forms/experiment/Documentation";

import { PrintForm } from "./printForm";
import { useFormContext } from "../../hooks/useFormContext";


export function RegisterExperimentForm() {

    const { currentForm } = useFormContext()

    const renderForm = () => {
        switch(currentForm) {
            case 1: return <ExperimentInformation />
            case 2: return <ExperimentPlanning />
            case 3: return <ExecutionSelection />
            case 4: return <Analysis />
            case 5: return <Documentation />
            case 6: return <PrintForm />
        }
    }

    return (
        <MainLayout>
            <div>
                {renderForm()}
            </div>
        </MainLayout>
    )
}