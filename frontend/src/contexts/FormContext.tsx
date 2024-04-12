import { createContext, useState } from "react";

export const FormContext = createContext<any>({})

export function FormProvider({children}: any) {
    const [values, setValues] = useState<any>({});

    const handleSubmit = (onSubmit: any) => (data: any) => {
        setValues((prevData: any) => ({...prevData, ...data}))
        onSubmit(data)
    }

    return (
        <FormContext.Provider value={{ values, handleSubmit }}>
            {children}
        </FormContext.Provider>
    )
}