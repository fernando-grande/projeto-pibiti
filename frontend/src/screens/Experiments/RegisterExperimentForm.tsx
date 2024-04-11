import { MainLayout } from "../../layouts/screens/MainLayout";
import { useFormSteps } from "../../hooks/useFormSteps";
import { GeneralInformation } from "../../forms/experiment/GeneralInformation";

export function RegisterExperimentForm() {
    const { currentForm, nextForm, prevForm, handleSubmit } = useFormSteps()

    const renderForm = () => {
        switch(currentForm) {
            case 1:
                return (
                    <GeneralInformation/>
                )
        }
    }

    return (
        <MainLayout>
            <div>{renderForm()}</div>
        </MainLayout>
    )
}