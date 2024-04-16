import { createContext, useState } from "react";

export const FormContext = createContext<any>({})

export function FormProvider({children}: any) {
    const [values, setValues] = useState<any>({})

    return (
        <FormContext.Provider value={{ values, setValues }}>
            {children}
        </FormContext.Provider>
    )
}