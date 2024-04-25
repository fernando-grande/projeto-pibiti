import { useFormContext } from "../../hooks/useFormContext"

export function PrintForm() {
    const { values } = useFormContext()

    const { email } = values

    return (
        <div className="flex justify-center items-center align-middle">
            <p className="pb-4 pt-2 text-blue-600 text-2xl">Experiment METADATA </p>
            <pre>{JSON.stringify(values.email, null, 2)}</pre>
            <pre>{JSON.stringify(values, null, 2)}</pre>
        </div>
    )
}