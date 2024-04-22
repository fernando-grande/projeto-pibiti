import { MainLayout } from "../../layouts/screens/MainLayout";
import { useFormSteps } from "../../hooks/useFormSteps";
import { GeneralInformation } from "../../forms/experiment/GeneralInformation";
import { Execution } from "../../forms/experiment/Execution";
import { ExperimentPlanning } from "../../forms/experiment/ExperimentPlanning";
import { PrintForm } from "./printForm";
import { useFormContext } from "../../hooks/useFormContext";
import { Analysis } from "../../forms/experiment/Analysis";
import { Documentation } from "../../forms/experiment/Documentation";

export function RegisterExperimentForm() {
    const { currentForm, nextForm, prevForm } = useFormSteps()

    const { values, setValues } = useFormContext()

    const submitForm = (data: any) => {
        setValues((prevValues: any) => ({
            ...prevValues,
            ...data
        }));
    }

    const renderForm = () => {
        switch(currentForm) {
            case 1:
                return (
                    <GeneralInformation onNext={nextForm} submitForm={submitForm} formData={values}/>
                )
            case 2:
                return (
                    <ExperimentPlanning onNext={nextForm} onPrev={prevForm} submitForm={submitForm} formData={values}/>
                )
            case 3:
                return (
                    <Execution onNext={nextForm} onPrev={prevForm} submitForm={submitForm} formData={values}/>
                )
            case 4:
                return (
                    <Analysis onNext={nextForm} onPrev={prevForm} submitForm={submitForm} formData={values}/>
                )
            case 5:
                return (
                    <Documentation onNext={nextForm} onPrev={prevForm} submitForm={submitForm} formData={values}/>
                )
            case 6:
                return (
                    <PrintForm/>
                )
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