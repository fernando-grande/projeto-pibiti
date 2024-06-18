import { z } from "zod";

export const typeContextExperimentSchema = z.object({
    inVivo: z.boolean().optional().default(false),
    inVitro: z.boolean().optional().default(false)
}).refine(data => {
    return (data.inVivo && !data.inVitro) || (!data.inVivo && data.inVitro);
}, {
    message: "Please select only one option (inVivo or inVitro).",
    path: [ 'inVivo', 'inVitro' ]
})