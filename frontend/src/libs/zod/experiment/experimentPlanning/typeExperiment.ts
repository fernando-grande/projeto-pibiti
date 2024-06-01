import { z } from "zod";

export const typeExperimentSchema = z.object({
    original: z.boolean(),
    replicated: z.boolean(),
    repeated: z.boolean(),
    reproduced: z.boolean(),
}).refine(data => { //verify if just one option was selected
    const { original, replicated, repeated, reproduced } = data
    const verifyTypeExperimentSelected = [ original, replicated, repeated, reproduced ].filter(option => option)
    return verifyTypeExperimentSelected.length === 1
}, {
    message: "Please, select just one option!",
    path: [ 'original', 'replicated', 'repeated', 'reproduced' ]
})