import { useState } from "react"

export function useFormSteps(){
    const [currentForm, setCurrentForm] = useState<number>(1)

    const nextForm = () => {
        setCurrentForm((currentForm) => currentForm + 1)
    }

    const prevForm = () => {
        setCurrentForm((currentForm) => currentForm - 1)
    }

    return {
        currentForm,
        nextForm,
        prevForm
    }

}