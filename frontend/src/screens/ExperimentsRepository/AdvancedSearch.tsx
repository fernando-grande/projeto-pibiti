// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { ExperimentTypeSchema, experimentSchema } from "../../libs/zod/experiment/experiment";
// import { getAdvancedSearchData } from "./getSimpleSearchData";

// export function AdvancedSearchBar () {

//     const  { register, handleSubmit } = useForm<ExperimentTypeSchema>({
//         resolver: zodResolver(experimentSchema),
//       })

//     const onSubmitAdvancedSearch = async (data: ExperimentTypeSchema) => {
//       // Filtra os dados para considerar apenas os campos booleanos marcados
//       const filteredData = Object.entries(data).reduce((acc, [key, value]) => {
//         if (typeof value === "object" && value !== null) {
//           const nestedFields = Object.entries(value).reduce((nestedAcc, [nestedKey, nestedValue]) => {
//             if (typeof nestedValue === "boolean" && nestedValue === true) {
//               (nestedAcc as any)[nestedKey] = nestedValue;
//             }
//             return nestedAcc;
//           }, {} as Record<string, boolean>);
//           if (Object.keys(nestedFields).length > 0) {
//             (acc as any)[key] = nestedFields;
//           }
//         }
//         return acc;
//       }, {} as Partial<ExperimentTypeSchema>);
  
//       try {
//         await getAdvancedSearchData(filteredData);
//       } catch (error) {
//         console.error("Error in advanced search!", error);
//       }
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmitAdvancedSearch)}>
//             <label htmlFor="experimentPlanning-isAQuasiExperiment">Is it a Quasi Experiment?</label>
//             <input id="experimentPlanning-isAQuasiExperiment" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.isAQuasiExperiment')} />
            
//             <label htmlFor="experimentPlanning-isExplicitsAQuasiExperimentInStudy">Is Explicits a Quasi Experiment In Study?</label>
//             <input id="experimentPlanning-isExplicitsAQuasiExperimentInStudy" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.isExplicitsAQuasiExperimentInStudy')} />

//             <p>Experiment Type: </p>

//             <label htmlFor="experimentPlanning-typeExperiment-original">Original</label>
//             <input id="experimentPlanning-typeExperiment-original" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeExperiment.original')} />

//             <label htmlFor="experimentPlanning-typeExperiment-replicated">Replicated</label>
//             <input id="experimentPlanning-typeExperiment-replicated" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeExperiment.replicated')} />
            
//             <label htmlFor="experimentPlanning-typeExperiment-repeated">Repeated</label>
//             <input id="experimentPlanning-typeExperiment-repeated" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeExperiment.repeated')} />

//             <label htmlFor="experimentPlanning-typeExperiment-reproduced">Reproduced</label>
//             <input id="experimentPlanning-typeExperiment-reproduced" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeExperiment.reproduced')} />

//             <p>Experiment Context Type: </p>

//             <label htmlFor="experimentPlanning-typeContextExperiment-inVivo">IN VIVO</label>
//             <input id="experimentPlanning-typeContextExperiment-inVivo" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextExperiment.inVivo')} />

//             <label htmlFor="experimentPlanning-typeContextExperiment-inVitro">IN VITRO</label>
//             <input id="experimentPlanning-typeContextExperiment-inVitro" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextExperiment.inVitro')} />

//             <p>Experiment Desgin Type: </p>

//             <label htmlFor="experimentPlanning-typeDesignExperiment-oneFactorWithTwoTreatments">One Factor with Two Treatments</label>
//             <input id="experimentPlanning-typeDesignExperiment-oneFactorWithTwoTreatments" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeDesignExperiment.oneFactorWithTwoTreatments')} />

//             <label htmlFor="experimentPlanning-typeDesignExperiment-oneFactorWithMoreThanTwoTreatments">One Factor with More Than Two Treatments</label>
//             <input id="experimentPlanning-typeDesignExperiment-oneFactorWithMoreThanTwoTreatments" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeDesignExperiment.oneFactorWithMoreThanTwoTreatments')} />

//             <label htmlFor="experimentPlanning-typeDesignExperiment-twoFactorsWithTwoTreatments">Two Factors with Two Treatments</label>
//             <input id="experimentPlanning-typeDesignExperiment-twoFactorsWithTwoTreatments" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeDesignExperiment.twoFactorsWithTwoTreatments')} />

//             <label htmlFor="experimentPlanning-typeDesignExperiment-moreThanTwoFactorsEachTwoTreatments">More than Two Factors each with Two Treatments</label>
//             <input id="experimentPlanning-typeDesignExperiment-moreThanTwoFactorsEachTwoTreatments" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeDesignExperiment.moreThanTwoFactorsEachTwoTreatments')} />

//             <p>Objects & Participants Type Selection</p>

//             <label htmlFor="experimentPlanning-typeSelectionParticipantsObjects-simpleRandomSampling">Simple Random Sampling</label>
//             <input id="experimentPlanning-typeSelectionParticipantsObjects-simpleRandomSampling" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeSelectionParticipantsObjects.simpleRandomSampling')} />

//             <label htmlFor="experimentPlanning-typeSelectionParticipantsObjects-systematicSampling">Systematic Sampling</label>
//             <input id="experimentPlanning-typeSelectionParticipantsObjects-systematicSampling" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeSelectionParticipantsObjects.systematicSampling')} />

//             <label htmlFor="experimentPlanning-typeSelectionParticipantsObjects-stratifiedRandomSampling">Stratified Random Sampling</label>
//             <input id="experimentPlanning-typeSelectionParticipantsObjects-stratifiedRandomSampling" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeSelectionParticipantsObjects.stratifiedRandomSampling')} />

//             <label htmlFor="experimentPlanning-typeSelectionParticipantsObjects-convenienceSampling">Convenience Sampling</label>
//             <input id="experimentPlanning-typeSelectionParticipantsObjects-convenienceSampling" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeSelectionParticipantsObjects.convenienceSampling')} />

//             <label htmlFor="experimentPlanning-typeSelectionParticipantsObjects-quotaSampling">Quota Sampling</label>
//             <input id="experimentPlanning-typeSelectionParticipantsObjects-quotaSampling" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeSelectionParticipantsObjects.quotaSampling')} />

//             <p>Context Selection Type</p>

//             <label htmlFor="experimentPlanning-typeContextSelection-online">Online </label>
//             <input id="experimentPlanning-typeContextSelection-online" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextSelection.online')} />

//             <label htmlFor="experimentPlanning-typeContextSelection-offline">Offline </label>
//             <input id="experimentPlanning-typeContextSelection-offline" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextSelection.offline')} />

//             <label htmlFor="experimentPlanning-typeContextSelection-student">Student </label>
//             <input id="experimentPlanning-typeContextSelection-student" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextSelection.student')} />

//             <label htmlFor="experimentPlanning-typeContextSelection-professional">Professional </label>
//             <input id="experimentPlanning-typeContextSelection-professional" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextSelection.professional')} />

//             <label htmlFor="experimentPlanning-typeContextSelection-toy">Toy </label>
//             <input id="experimentPlanning-typeContextSelection-toy" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextSelection.toy')} />

//             <label htmlFor="experimentPlanning-typeContextSelection-realProblems">Real </label>
//             <input id="experimentPlanning-typeContextSelection-realProblems" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextSelection.realProblems')} />

//             <label htmlFor="experimentPlanning-typeContextSelection-specific">Specific </label>
//             <input id="experimentPlanning-typeContextSelection-specific" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextSelection.specific')} />

//             <label htmlFor="experimentPlanning-typeContextSelection-general">General </label>
//             <input id="experimentPlanning-typeContextSelection-general" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.typeContextSelection.general')} />


//             <p>Execution</p>

//             <label htmlFor="executionSelection-pilotProjectCarriedOut">Pilot Project was carried out? </label>
//             <input id="executionSelection-pilotProjectCarriedOut" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('executionSelection.pilotProjectCarriedOut')} />


//             <p>Analysis</p>

//             <label htmlFor="analysis-hasQualitativeAnalysisOfExperiment">Has Qualitative Analysis of Experiment? </label>
//             <input id="analysis-hasQualitativeAnalysisOfExperiment" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.hasQualitativeAnalysisOfExperiment')} />

//             <label htmlFor="analysis-experimentAnalysisBasedPValue">The Experiment Analysis was based on P value? </label>
//             <input id="analysis-experimentAnalysisBasedPValue" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.experimentAnalysisBasedPValue')} />

//             <label htmlFor="analysis-studyHasPerformedMetaAnalysis">The study has performed Meta Analysis? </label>
//             <input id="analysis-studyHasPerformedMetaAnalysis" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.studyHasPerformedMetaAnalysis')} />

//             <p>Discussion</p>

//             <label htmlFor="discussion-isFollowThreatsByWohlin">Follow threats by Wohlin? </label>
//             <input id="discussion-isFollowThreatsByWohlin" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('discussion.isFollowThreatsByWohlin')} />

//             <p>Evaluation</p>

//             <label htmlFor="evaluation-theAuthorsConcernedEvaluatingTheQuality">The Authors Concerned Evaluating the Quality? </label>
//             <input id="evaluation-theAuthorsConcernedEvaluatingTheQuality" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('evaluation.theAuthorsConcernedEvaluatingTheQuality')} />

//             <p>Documentation</p>

//             <label htmlFor="documentation-useTemplate">The Experiment use Template? </label>
//             <input id="documentation-useTemplate" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.useTemplate')} />

//             <p>Package</p>

//             <label htmlFor="package-isExperimentalPackageInformed">The Experimental Package is Informed? </label>
//             <input id="package-isExperimentalPackageInformed" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('package.isExperimentalPackageInformed')} />

//             <button type="submit">FILTER</button>
//           </form>
//     )
// }