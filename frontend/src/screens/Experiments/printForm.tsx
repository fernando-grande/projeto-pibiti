import { useFormContext } from "../../hooks/useFormContext"

export function PrintForm() {
    const { getValues } = useFormContext()

    return (
        <div className="flex flex-col justify-center items-center align-middle">
            <p className="pb-4 pt-2 text-blue-600 text-2xl">Experiment METADATA </p>
            <pre>{JSON.stringify(getValues, null, 2)}</pre>
        </div>
    )
}