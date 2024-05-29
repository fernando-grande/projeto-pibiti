import { MainLayout } from "../../layouts/screens/MainLayout";
import { GeneralInformation } from "../../forms/experiment/GeneralInformation";
import { Execution } from "../../forms/experiment/Execution";
import { ExperimentPlanning } from "../../forms/experiment/ExperimentPlanning";
import { PrintForm } from "./printForm";
import { useFormContext } from "../../hooks/useFormContext";
import { Analysis } from "../../forms/experiment/Analysis";
import { Documentation } from "../../forms/experiment/Documentation";

export function RegisterExperimentForm() {

    const { currentForm } = useFormContext()

    const renderForm = () => {
        switch(currentForm) {
            case 1: return <GeneralInformation />
            case 2: return <ExperimentPlanning />
            case 3: return <Execution />
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