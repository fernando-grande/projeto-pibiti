import { createContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, UseFormGetValues, UseFormRegister, useForm } from "react-hook-form";
import { experimentSchema, ExperimentTypeSchema } from "../libs/zod/experiment/experiment";


interface IExperimentFormContext {
    nextForm: () => void,
    prevForm: () => void,
    currentForm: number,
    register: UseFormRegister<ExperimentTypeSchema>,
    getValues: UseFormGetValues<ExperimentTypeSchema>,
    handleSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>,
    errors: FieldErrors<ExperimentTypeSchema>
}

export const ExperimentFormContext = createContext({} as IExperimentFormContext)

export function FormProvider({ children }: any) {
    const totalForms = 5

    const [currentForm, setCurrentForm] = useState<number>(1)

    const {
        register,
        handleSubmit: hookFormSubmit,
        getValues,
        formState: { errors }
    } = useForm<ExperimentTypeSchema>({
        resolver: zodResolver(experimentSchema)
    })

    const nextForm = () => {
        setCurrentForm((currentForm) => currentForm + 1)
    }

    const prevForm = () => {
        setCurrentForm((currentForm) => currentForm - 1)
    }

    const handleSubmit = (hookFormSubmit((data) => {
        nextForm()
        console.log(data)
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
            nextForm()
        }
    }
    
    return (
        <ExperimentFormContext.Provider value={{ 
            currentForm,
            nextForm,
            prevForm,
            register,
            handleSubmit,
            getValues,
            errors
        }}>
            <form onSubmit={verifyHandleSubmit} className="flex flex-col m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
            {children}
            </form>
        </ExperimentFormContext.Provider>
    )
}