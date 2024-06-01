import { z } from "zod";

export const typeContextExperimentSchema = z.object({
    inVivo: z.boolean(),
    inVitro: z.boolean()
}).refine(data => {
    return (data.inVivo && !data.inVitro) || (!data.inVivo && data.inVitro);
}, {
    message: "Please select only one option (inVivo or inVitro).",
    path: [ 'inVivo', 'inVitro' ]
})