import { useFormContext } from "../../hooks/useFormContext"

export function PrintForm() {
    const { getValues } = useFormContext()
    const values = getValues()

    return (
        <div className="flex flex-col justify-center items-center align-middle">
            <p className="pb-4 pt-2 text-blue-600 text-2xl">Experiment METADATA </p>
            <div>{JSON.stringify(values, null, 2)}</div>
        </div>
    )
}