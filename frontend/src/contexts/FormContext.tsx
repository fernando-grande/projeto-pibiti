import { createContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, UseFormGetValues, UseFormRegister, UseFormTrigger, useForm } from "react-hook-form";
import { experimentSchema, ExperimentTypeSchema } from "../libs/zod/experiment/experiment";

import axios from "axios";


interface IExperimentFormContext {
    nextForm: () => void,
    handleNextForm: () => void,
    prevForm: () => void,
    currentForm: number,
    trigger: UseFormTrigger<ExperimentTypeSchema>
    register: UseFormRegister<ExperimentTypeSchema>,
    getValues: UseFormGetValues<ExperimentTypeSchema>,
    handleSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>,
    errors: FieldErrors<ExperimentTypeSchema>
}

export const ExperimentFormContext = createContext({} as IExperimentFormContext)

export function FormProvider({ children }: any) {
    const formNames = [
        "experiment",
        "documentation",
        "experimentPlanning",
        "discussion",
        "executionSelection",
        "evaluation",
        "conclusionsFutureWork",
        "references",
        "appendices",
        "acknowledgements",
        "package",
        "analysis"
    ]

    const totalForms = formNames.length

    const [currentForm, setCurrentForm] = useState<number>(1)

    const {
        register,
        handleSubmit: hookFormSubmit,
        getValues,
        trigger,
        formState: { errors }
    } = useForm<ExperimentTypeSchema>({
        resolver: zodResolver(experimentSchema)
    })
    
    const nextForm = () => {
        setCurrentForm((currentForm) => currentForm + 1)
    }
    
    const handleNextForm = async () => {
        const validForm = await trigger()
        if (validForm) {
            nextForm()
        }
    }

    const prevForm = () => {
        setCurrentForm((currentForm) => currentForm - 1)
    }

    const handleSubmit = (hookFormSubmit(async (data) => {
        await sendExperimentDataBackend(data)
        console.log(data)
        nextForm()
    }))

    const verifyHandleSubmit = async (e: React.BaseSyntheticEvent<object, any, any> | undefined) => {
        if (e) {
            e.preventDefault()
        }
        if (currentForm === totalForms) {
            try {
                await handleSubmit()

            } catch (error) {
                console.error("Erro!", error)
            }
        } else {
            handleNextForm()
        }
    }

    const sendExperimentDataBackend = async (data: ExperimentTypeSchema) => {
        try {
            const response = await axios.post('http://localhost:3000/experiments', data)

            console.log("Data sent to backend!", response.data)

        } catch(error) {
            console.error('Error: ', error)
        }
    }
    
    return (
        <ExperimentFormContext.Provider value={{ 
            currentForm,
            nextForm,
            handleNextForm,
            prevForm,
            register,
            handleSubmit: verifyHandleSubmit,
            trigger,
            getValues,
            errors
        }}>
            <form onSubmit={verifyHandleSubmit} className="flex flex-col m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
            {children}
            </form>
        </ExperimentFormContext.Provider>
    )
}