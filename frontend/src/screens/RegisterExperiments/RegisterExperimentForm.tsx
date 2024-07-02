import { MainLayout } from "../../layouts/screens/MainLayout";

import { ExperimentLayout } from "../../layouts/forms/ExperimentLayout";
import { RenderExperimentForm } from "./RenderExperimentForm";
import { FormProvider } from "../../contexts/FormContext";


export function RegisterExperimentForm() {

    return (
        <MainLayout>
            <ExperimentLayout>
                <FormProvider>
                    <RenderExperimentForm />
                </FormProvider>
            </ExperimentLayout>
        </MainLayout>
    )
}