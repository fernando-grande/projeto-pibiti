import { useFormContext } from "../../hooks/useFormContext";

export function ExperimentPlanning() {

    const { register, prevForm, errors } = useFormContext()

    return (
        <div className="flex flex-col">
            <p className="font-bold text-2xl mb-6">EXPERIMENT PLANNING</p>

            <label htmlFor="experimentPlanning-goals">Goals:</label>
            <input id="experimentPlanning-goals" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.goals')} />
            {errors.experimentPlanning?.goals && <span>{errors.experimentPlanning.goals.message}</span>}

            <label htmlFor="experimentPlanning-experimentalUnits">Experimental Units: </label>
            <input id="experimentPlanning-experimentalUnits" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.experimentalUnits')} />
            {errors.experimentPlanning?.experimentalUnits && <span>{errors.experimentPlanning.experimentalUnits.message}</span>}

            <label htmlFor="experimentPlanning-experimentalMaterial">Experimental Material: </label>
            <input id="experimentPlanning-experimentalMaterial" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.experimentalMaterial')} />
            {errors.experimentPlanning?.experimentalMaterial && <span>{errors.experimentPlanning.experimentalMaterial.message}</span>}

            <label htmlFor="experimentPlanning-tasks">Tasks: </label>
            <input id="experimentPlanning-tasks" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.tasks')} />
            {errors.experimentPlanning?.tasks && <span>{errors.experimentPlanning.tasks.message}</span>}

            <label htmlFor="experimentPlanning-hypotheses">Hypotheses: </label>
            <input id="experimentPlanning-hypotheses" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.hypotheses')} />
            {errors.experimentPlanning?.hypotheses && <span>{errors.experimentPlanning.hypotheses.message}</span>}

            <label htmlFor="experimentPlanning-parameters">Parameters: </label>
            <input id="experimentPlanning-parameters" className="w-96 bexperimentPlanning.parametersorder-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.parameters')} />
            {errors.experimentPlanning?.parameters && <span>{errors.experimentPlanning.parameters.message}</span>}

            <label htmlFor="experimentPlanning-experimentDesign">Experiment Design: </label>
            <input id="experimentPlanning-experimentDesign" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.experimentDesign')} />
            {errors.experimentPlanning?.experimentDesign && <span>{errors.experimentPlanning.experimentDesign.message}</span>}

            <label htmlFor="experimentPlanning-procedure">Procedure: </label>
            <input id="experimentPlanning-procedure" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.procedure')} />
            {errors.experimentPlanning?.procedure && <span>{errors.experimentPlanning.procedure.message}</span>}

            <label htmlFor="experimentPlanning-analysisProcedure">Analysis Procedure: </label>
            <input id="experimentPlanning-analysisProcedure" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.analysisProcedure')} />
            {errors.experimentPlanning?.analysisProcedure && <span>{errors.experimentPlanning.analysisProcedure.message}</span>}

            <label htmlFor="experimentPlanning-isAQuasiExperiment">Is it a Quasi-Experiment? </label>
            <input id="experimentPlanning-isAQuasiExperiment" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.isAQuasiExperiment')} />
            {errors.experimentPlanning?.isAQuasiExperiment && <span>{errors.experimentPlanning.isAQuasiExperiment.message}</span>}

            <label htmlFor="experimentPlanning-isExplicitsAQuasiExperimentInStudy">Is it Explicits a Quasi-Experiment Study? </label>
            <input id="experimentPlanning-isExplicitsAQuasiExperimentInStudy" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.isExplicitsAQuasiExperimentInStudy')} />
            {errors.experimentPlanning?.isExplicitsAQuasiExperimentInStudy && <span>{errors.experimentPlanning.isExplicitsAQuasiExperimentInStudy.message}</span>}

            <p className="text-xl font-semibold pb-2">Experiment Type </p>

            <label htmlFor="experimentPlanning-typeExperiment-original">Original </label>
            <input id="experimentPlanning-typeExperiment.original" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeExperiment.original')} />
            {errors.experimentPlanning?.typeExperiment?.original && <span>{errors.experimentPlanning.typeExperiment.original.message}</span>}

            <label htmlFor="experimentPlanning-typeExperiment-replicated">Replicated </label>
            <input id="experimentPlanning-typeExperiment-replicated" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeExperiment.replicated')} />
            {errors.experimentPlanning?.typeExperiment?.replicated && <span>{errors.experimentPlanning.typeExperiment.replicated.message}</span>}

            <label htmlFor="experimentPlanning-typeExperiment-repeated">Repeated </label>
            <input  id="experimentPlanning-typeExperiment-repeated" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeExperiment.repeated')} />
            {errors.experimentPlanning?.typeExperiment?.repeated && <span>{errors.experimentPlanning.typeExperiment.repeated.message}</span>}

            <label htmlFor="experimentPlanning-typeExperiment-reproduced">Reproduced </label>
            <input id="experimentPlanning-typeExperiment-reproduced" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeExperiment.reproduced')} />
            {errors.experimentPlanning?.typeExperiment?.reproduced && <span>{errors.experimentPlanning.typeExperiment.reproduced.message}</span>}

            <p className="text-xl font-semibold pb-2">Experiment Context Type </p>

            <label htmlFor="experimentPlanning-typeContextExperiment-inVivo">In Vivo </label>
            <input id="experimentPlanning-typeContextExperiment-inVivo" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextExperiment.inVivo')} />
            {errors.experimentPlanning?.typeContextExperiment?.inVivo && <span>{errors.experimentPlanning.typeContextExperiment.inVivo.message}</span>}

            <label htmlFor="experimentPlanning-typeContextExperiment-inVitro">In Vitro</label>
            <input id="experimentPlanning-typeContextExperiment-inVitro" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextExperiment.inVitro')} />
            {errors.experimentPlanning?.typeContextExperiment?.inVitro && <span>{errors.experimentPlanning.typeContextExperiment.inVitro.message}</span>}

            <p className="text-xl font-semibold pb-2">Experiment Design Type</p>

            <label htmlFor="experimentPlanning-typeDesignExperiment-oneFactorWithTwoTreatments">One Factor with Two Treatments</label>
            <input id="experimentPlanning-typeDesignExperiment-oneFactorWithTwoTreatments" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeDesignExperiment.oneFactorWithTwoTreatments')} />
            {errors.experimentPlanning?.typeDesignExperiment?.oneFactorWithTwoTreatments && <span>{errors.experimentPlanning.typeDesignExperiment.oneFactorWithTwoTreatments.message}</span>}

            <label htmlFor="experimentPlanning-typeDesignExperiment-oneFactorWithMoreThanTwoTreatments">One Factor with more than Two Treatments</label>
            <input id="experimentPlanning-typeDesignExperiment-oneFactorWithMoreThanTwoTreatments" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeDesignExperiment.oneFactorWithMoreThanTwoTreatments')} />
            {errors.experimentPlanning?.typeDesignExperiment?.oneFactorWithMoreThanTwoTreatments && <span>{errors.experimentPlanning.typeDesignExperiment.oneFactorWithMoreThanTwoTreatments.message}</span>}

            <label htmlFor="experimentPlanning-typeDesignExperiment-twoFactorsWithTwoTreatments">Two Factors with Two Treatments</label>
            <input id="experimentPlanning-typeDesignExperiment-twoFactorsWithTwoTreatments" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeDesignExperiment.twoFactorsWithTwoTreatments')} />
            {errors.experimentPlanning?.typeDesignExperiment?.twoFactorsWithTwoTreatments && <span>{errors.experimentPlanning.typeDesignExperiment.twoFactorsWithTwoTreatments.message}</span>}

            <label htmlFor="experimentPlanning-typeDesignExperiment-moreThanTwoFactorsEachTwoTreatments">More than Two Factors each Two Treatments</label>
            <input id="experimentPlanning-typeDesignExperiment-moreThanTwoFactorsEachTwoTreatments" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeDesignExperiment.moreThanTwoFactorsEachTwoTreatments')} />
            {errors.experimentPlanning?.typeDesignExperiment?.moreThanTwoFactorsEachTwoTreatments && <span>{errors.experimentPlanning.typeDesignExperiment.moreThanTwoFactorsEachTwoTreatments.message}</span>}

            <p className="text-xl font-semibold pb-2">Objects & Participants Type Selection</p>

            <label htmlFor="experimentPlanning-typeSelectionParticipantsObjects-simpleRandomSampling">Simple Random Sampling</label>
            <input id="experimentPlanning-typeSelectionParticipantsObjects-simpleRandomSampling" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeSelectionParticipantsObjects.simpleRandomSampling')} />
            {errors.experimentPlanning?.typeSelectionParticipantsObjects?.simpleRandomSampling && <span>{errors.experimentPlanning.typeSelectionParticipantsObjects.simpleRandomSampling.message}</span>}

            <label htmlFor="experimentPlanning-typeSelectionParticipantsObjects-systematicSampling">Systematic Sampling</label>
            <input id="experimentPlanning-typeSelectionParticipantsObjects-systematicSampling" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeSelectionParticipantsObjects.systematicSampling')} />
            {errors.experimentPlanning?.typeSelectionParticipantsObjects?.systematicSampling && <span>{errors.experimentPlanning.typeSelectionParticipantsObjects.systematicSampling.message}</span>}

            <label htmlFor="experimentPlanning-typeSelectionParticipantsObjects-stratifiedRandomSampling">Stratified Random Sampling</label>
            <input id="experimentPlanning-typeSelectionParticipantsObjects-stratifiedRandomSampling" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeSelectionParticipantsObjects.stratifiedRandomSampling')} />
            {errors.experimentPlanning?.typeSelectionParticipantsObjects?.stratifiedRandomSampling && <span>{errors.experimentPlanning.typeSelectionParticipantsObjects.stratifiedRandomSampling.message}</span>}

            <label htmlFor="experimentPlanning-typeSelectionParticipantsObjects-convenienceSampling">Convenience Sampling</label>
            <input id="experimentPlanning-typeSelectionParticipantsObjects-convenienceSampling" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeSelectionParticipantsObjects.convenienceSampling')} />
            {errors.experimentPlanning?.typeSelectionParticipantsObjects?.convenienceSampling && <span>{errors.experimentPlanning.typeSelectionParticipantsObjects.convenienceSampling.message}</span>}

            <label htmlFor="experimentPlanning-typeSelectionParticipantsObjects-quotaSampling">Quota Sampling</label>
            <input id="experimentPlanning-typeSelectionParticipantsObjects-quotaSampling" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeSelectionParticipantsObjects.quotaSampling')} />
            {errors.experimentPlanning?.typeSelectionParticipantsObjects?.quotaSampling && <span>{errors.experimentPlanning.typeSelectionParticipantsObjects.quotaSampling.message}</span>}

            <p className="text-xl font-semibold pb-2">Context Selection Type</p>

            <label htmlFor="experimentPlanning-typeContextSelection-offline">Offline </label>
            <input id="experimentPlanning-typeContextSelection-offline" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextSelection.offline')} />
            {errors.experimentPlanning?.typeContextSelection?.offline && <span>{errors.experimentPlanning.typeContextSelection.offline.message}</span>}

            <label htmlFor="experimentPlanning-typeContextSelection-online">Online </label>
            <input id="experimentPlanning-typeContextSelection-online" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextSelection.online')} />
            {errors.experimentPlanning?.typeContextSelection?.online && <span>{errors.experimentPlanning.typeContextSelection.online.message}</span>}

            <label htmlFor="experimentPlanning-typeContextSelection-student">Student </label>
            <input id="experimentPlanning-typeContextSelection-student" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextSelection.student')} />
            {errors.experimentPlanning?.typeContextSelection?.student && <span>{errors.experimentPlanning.typeContextSelection.student.message}</span>}

            <label htmlFor="experimentPlanning-typeContextSelection-professional">Professional </label>
            <input id="experimentPlanning-typeContextSelection-professional" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextSelection.professional')} />
            {errors.experimentPlanning?.typeContextSelection?.professional && <span>{errors.experimentPlanning.typeContextSelection.professional.message}</span>}

            <label htmlFor="experimentPlanning-typeContextSelection-toy">Toy </label>
            <input id="experimentPlanning-typeContextSelection-toy" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextSelection.toy')} />
            {errors.experimentPlanning?.typeContextSelection?.toy && <span>{errors.experimentPlanning.typeContextSelection.toy.message}</span>}

            <label htmlFor="experimentPlanning-typeContextSelection-realProblems">Real </label>
            <input id="experimentPlanning-typeContextSelection-realProblems" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextSelection.realProblems')} />
            {errors.experimentPlanning?.typeContextSelection?.realProblems && <span>{errors.experimentPlanning.typeContextSelection.realProblems.message}</span>}

            <label htmlFor="experimentPlanning-typeContextSelection-specific">Specific </label>
            <input id="experimentPlanning-typeContextSelection-realProblems" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextSelection.specific')} />
            {errors.experimentPlanning?.typeContextSelection?.specific && <span>{errors.experimentPlanning.typeContextSelection.specific.message}</span>}

            <label htmlFor="experimentPlanning-typeContextSelection-general">General </label>
            <input id="experimentPlanning-typeContextSelection-general" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextSelection.general')} />
            {errors.experimentPlanning?.typeContextSelection?.general && <span>{errors.experimentPlanning.typeContextSelection.general.message}</span>}

            <button type="button" onClick={prevForm} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                PREV
            </button>

            <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                NEXT
            </button>
        </div>
    )
}