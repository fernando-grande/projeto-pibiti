import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { ExperimentTypeSchema } from '../../libs/zod/experiment/experiment'


export function ExperimentsList() {
    const [experimentsData, setExperimentsData] = useState<ExperimentTypeSchema[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getExperimentsData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/experimentsData')
                console.log(response)
                setExperimentsData(response.data)
            } catch(error) {
                const axiosError = error as AxiosError
                setError(axiosError.message)
            }
        }

        getExperimentsData()
    }, [])

    if (error) {
        return <pre>Erro ao buscar usuários: {error}</pre>
    }

    return (
        <div>
            <h1>Experiments Data:</h1>
            <pre>
            <div>{JSON.stringify(experimentsData, null, 2)}</div>
            </pre>

            {/* <ul>
                {experimentsData.map(experimentsData => (
                    <li key={experimentsData.id}>
                        {Object.keys(experimentsData).map(key => (
                            <div key={key}>
                                <strong>{key}:</strong>{experimentsData[key as keyof ExperimentTypeSchema]}
                            </div>
                        ))}
                    </li>
                ))}
            </ul> */}
        </div>
    )
}