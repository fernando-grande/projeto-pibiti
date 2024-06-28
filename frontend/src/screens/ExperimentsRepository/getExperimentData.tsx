import { useEffect, useState } from "react";
import { ExperimentTypeSchema } from "../../libs/zod/experiment/experiment";
import axios, { AxiosError } from "axios";

export function ExperimentData() {
    const [experimentsData, setExperimentsData] = useState<ExperimentTypeSchema[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getExperimentData = async () => {
            try {
                const response = await axios.get<ExperimentTypeSchema[]>('http://localhost:3000/experimentsData')
                setExperimentsData(response.data)
            } catch(error) {
                const axiosError = error as AxiosError
                setError(axiosError.message)
            }
        }

        getExperimentData()
    }, [])

    if (error) {
        return <pre>Error in experiment search: {error}</pre>
    }

    return (
        <div>
            <h1>Experiments Data: </h1>
            <pre>{JSON.stringify(experimentsData, null, 2)}</pre>
        </div>
    )
}