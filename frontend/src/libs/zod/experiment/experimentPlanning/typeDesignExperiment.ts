import { z } from "zod";

export const typeDesignExperimentSchema = z.object({
    oneFactorWithTwoTreatments: z.boolean().optional().default(false),
    oneFactorWithMoreThanTwoTreatments: z.boolean().optional().default(false),
    twoFactorsWithTwoTreatments: z.boolean().optional().default(false),
    moreThanTwoFactorsEachTwoTreatments: z.boolean().optional().default(false)
})