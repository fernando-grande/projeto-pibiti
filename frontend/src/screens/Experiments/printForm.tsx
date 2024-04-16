import { useFormContext } from "../../hooks/useFormContext";

export function PrintForm() {
    const { values } = useFormContext()

    return (
        <pre>{JSON.stringify(values, null, 2)}</pre>
    )
}