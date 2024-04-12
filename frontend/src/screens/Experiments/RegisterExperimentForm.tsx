import { MainLayout } from "../../layouts/screens/MainLayout";
import { useFormSteps } from "../../hooks/useFormSteps";
import { GeneralInformation } from "../../forms/experiment/GeneralInformation";
import { Execution } from "../../forms/experiment/Execution";
import { ExperimentPlanning } from "../../forms/experiment/ExperimentPlanning";
import { FormProvider } from "../../contexts/FormContext";

export function RegisterExperimentForm() {
    const { currentForm, nextForm, prevForm } = useFormSteps()

    const renderForm = () => {
        switch(currentForm) {
            case 1:
                return (
                    <GeneralInformation onNext={nextForm}/>
                )
            case 2:
                return (
                    <ExperimentPlanning onNext={nextForm} onPrev={prevForm}/>
                )
            case 3:
                return (
                    <Execution onNext={nextForm} onPrev={prevForm}/>
                )
        }
    }

    return (
        <MainLayout>
            <FormProvider>
                <div>{renderForm()}</div>
            </FormProvider>
        </MainLayout>
    )
}