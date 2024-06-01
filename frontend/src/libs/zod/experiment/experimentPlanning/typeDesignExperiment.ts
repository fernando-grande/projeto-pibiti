import { z } from "zod";

export const typeDesignExperimentSchema = z.object({
    oneFactorWithTwoTreatments: z.boolean(),
    oneFactorWithMoreThanTwoTreatments: z.boolean(),
    twoFactorsWithTwoTreatments: z.boolean(),
    moreThanTwoFactorsEachTwoTreatments: z.boolean()
})