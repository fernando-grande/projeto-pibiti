import { useFormExperiment } from "../../hooks/useFormExperiment";
import { MainLayout } from "../../layouts/screens/MainLayout";

export function PrintForm() {
    const { values } = useFormExperiment()

    return (
        <MainLayout>
            <pre>{JSON.stringify(values, null, 2)}</pre>
        </MainLayout>
    )
}