import { createContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormGetValues, UseFormRegister, useForm } from "react-hook-form";
import { experimentFormSchema , ExperimentFormTypeSchema } from "../libs/zod/forms/expFormSchema";


interface IFormContext {
    nextForm: () => void,
    prevForm: () => void,
    currentForm: number,
    register: UseFormRegister<ExperimentFormTypeSchema>,
    getValues: UseFormGetValues<ExperimentFormTypeSchema>,
    handleSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
    errors: any
}

export const FormContext = createContext({} as IFormContext)

export function FormProvider({ children }: any) {
    const [currentForm, setCurrentForm] = useState<number>(1)

    const {
        register,
        handleSubmit: hookFormSubmit,
        getValues,
        formState: { errors }
    } = useForm<ExperimentFormTypeSchema>({
        resolver: zodResolver(experimentFormSchema)
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
        <FormContext.Provider value={{ 
            currentForm,
            nextForm,
            prevForm,
            register,
            handleSubmit,
            getValues,
            errors
        }}>
            {children}
        </FormContext.Provider>
    )
}