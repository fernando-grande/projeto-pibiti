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
        console.log(data)
        nextForm()
    }))
    
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
            {children}
        </ExperimentFormContext.Provider>
    )
}