import { useState } from "react"

export function useFormSteps(){
    const [currentForm, setCurrentForm] = useState<number>(1)

    const nextForm = () => {
        setCurrentForm((currentForm) => currentForm + 1)
    }

    const prevForm = () => {
        setCurrentForm((currentForm) => currentForm - 1)
    }

    const handleSubmit = () => {
        console.log("submited!!")
    }


    return {
        currentForm,
        nextForm,
        prevForm,
        handleSubmit
    }

}