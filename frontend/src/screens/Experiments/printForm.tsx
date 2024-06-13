import { useFormContext } from "../../hooks/useFormContext"

export function PrintForm() {
    const { getValues } = useFormContext()
    console.log(getValues)

    return (
        <div className="flex flex-col justify-center items-center align-middle">
            <p className="pb-4 pt-2 text-blue-600 text-2xl">Experiment METADATA </p>
            <div>{JSON.stringify(getValues, null, 2)}</div>
        </div>
    )
}