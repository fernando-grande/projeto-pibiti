import { useForm } from "react-hook-form";
import { ExperimentLayout } from "../../layouts/forms/ExperimentLayout";
import { documentationSchema, DocumentationTypeSchema } from "../../libs/zod/experiments/documentation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export function Documentation() {
    const [output, setOutput] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm<DocumentationTypeSchema>({
        resolver: zodResolver(documentationSchema),
    })

    function createData(data: any) {
        setOutput(JSON.stringify(data, null, 2))
    }

    return (
        <ExperimentLayout>
            <form onSubmit={handleSubmit(createData)} className="flex flex-col m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
                <p className="font-bold text-2xl mb-6">DOCUMENTATION</p>

                <label htmlFor="domain">Domain:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('domain')} />
                {errors.domain && <span>{errors.domain.message}</span>}

                <label htmlFor="goal">Goal:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('goal')} />
                {errors.goal && <span>{errors.goal.message}</span>}

                <label htmlFor="result">Result:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('result')} />
                {errors.result && <span>{errors.result.message}</span>}

                <label htmlFor="experimentalTemplate">Experimental Template:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentalTemplate')} />
                {errors.experimentalTemplate && <span>{errors.experimentalTemplate.message}</span>}

                <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    PRINT DATA
                </button>

                <pre>{output}</pre>
            </form>
        </ExperimentLayout>
    )
}