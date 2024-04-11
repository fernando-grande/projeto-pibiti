import { createContext, useState } from "react";

// interface FormContextType {
//     values: { [key: string]: any }
//     setValues: (values: { [key: string]: any }) => void
// }

export const FormContext = createContext({} as any)

export function FormProvider({children}: any) {
    const [values, setValues] = useState<any>({});

    return (
        <FormContext.Provider value={{ values, setValues }}>
            {children}
        </FormContext.Provider>
    )
}