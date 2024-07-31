import { MainLayout } from "../../layouts/screens/MainLayout"
import { ExperimentsList } from "./ShowExperiments"

export function ExperimentRepository() {

    return (
        <MainLayout>
            <ExperimentsList />
        </MainLayout>
    )
}