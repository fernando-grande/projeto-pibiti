import { modelOptions } from '@typegoose/typegoose';
import mongoose, { Schema, Document } from 'mongoose';

// Define interfaces para cada tipo de documento
interface Abstract {
  objective: string;
  abstractBackground: string;
  methods: string;
  results: string;
  limitations: string;
  conclusions: string;
  keywords: string;
}

interface Introduction {
  problemStatement: string;
  researchObjectives: string;
  context: string;
}

interface RelatedWork {
  technologyUnderInvestigation: string;
  alternativeTechnologies: string;
  relatedStudies: string;
  relevancePractice: string;
}

interface Acknowledgements {
  text: string;
}

interface Appendices {
  appendices: string;
}

interface ConclusionsFutureWork {
  summary: string;
  impact: string;
  futureWork: string;
}

interface References {
  references: string;
}

interface Package {
  isExperimentalPackageInformed: boolean;
  url: string;
}

interface TypeContextSelection {
  offline: boolean;
  online: boolean;
  student: boolean;
  professional: boolean;
  toy: boolean;
  realProblems: boolean;
  specific: boolean;
  general: boolean;
}

interface TypeSelectionParticipantsObjects {
  simpleRandomSampling: boolean;
  systematicSampling: boolean;
  stratifiedRandomSampling: boolean;
  convenienceSampling: boolean;
  quotaSampling: boolean;
}

interface TypeDesignExperiment {
  oneFactorWithTwoTreatments: boolean;
  oneFactorWithMoreThanTwoTreatments: boolean;
  twoFactorsWithTwoTreatments: boolean;
  moreThanTwoFactorsEachTwoTreatments: boolean;
}

interface TypeContextExperiment {
  inVivo: boolean;
  inVitro: boolean;
}

interface TypeExperiment {
  original: boolean;
  replicated: boolean;
  repeated: boolean;
  reproduced: boolean;
}

interface Analysis {
  descriptiveStatistics: string;
  dataSetPreparation: string;
  hypothesisTesting: string;
  hasQualitativeAnalysisOfExperiment: boolean;
  whatQualitativeAnalysisPerformed: string;
  experimentAnalysisBasedPValue: boolean;
  howDataHasBeenAnalyzed: string;
  studyHasPerformedMetaAnalysis: boolean;
}

interface Discussion {
  evaluationOfResultsAndImplications: string;
  threatsValidity: string;
  isFollowThreatsByWohlin: boolean;
  inferences: string;
  lessonsLearned: string;
}

interface Evaluation {
  theAuthorsConcernedEvaluatingTheQuality: boolean;
}

interface ExecutionSelection {
  preparation: string;
  deviations: string;
  pilotProjectCarriedOut: boolean;
  howManyPilotProjectCarriedOut: number;
}

interface Documentation {
  useTemplate: boolean;
  template: string;
  observationsAboutTemplateUsed: string;
  abstract: Abstract;
  introduction: Introduction;
  relatedWork: RelatedWork;
}

interface ExperimentPlanning {
  goals: string;
  experimentalUnits: string;
  experimentalMaterial: string;
  tasks: string;
  hypotheses: string;
  parameters: string;
  variables: string;
  experimentDesign: string;
  procedure: string;
  analysisProcedure: string;
  isAQuasiExperiment: boolean;
  isExplicitsAQuasiExperimentInStudy: boolean;
  typeExperiment: TypeExperiment;
  typeContextExperiment: TypeContextExperiment;
  typeDesignExperiment: TypeDesignExperiment;
  typeSelectionParticipantsObjects: TypeSelectionParticipantsObjects;
  typeContextSelection: TypeContextSelection;
}

interface IExperiment extends Document {
  _id?: mongoose.Types.ObjectId;
  title: string;
  authorship: string;
  publicationYear: number;
  publicationType: string;
  publicationVenue: string;
  pagesNumber: number;
  documentation: Documentation;
  experimentPlanning: ExperimentPlanning;
  discussion: Discussion;
  executionSelection: ExecutionSelection;
  evaluation: Evaluation;
  conclusionsFutureWork: ConclusionsFutureWork;
  references: References;
  appendices: Appendices;
  acknowledgements: Acknowledgements;
  package: Package;
  analysis: Analysis;
}

// Defina os schemas do Mongoose
const AbstractSchema = new Schema<Abstract>({
  objective: String,
  abstractBackground: String,
  methods: String,
  results: String,
  limitations: String,
  conclusions: String,
  keywords: String,
}, { _id: false });

const IntroductionSchema = new Schema<Introduction>({
  problemStatement: String,
  researchObjectives: String,
  context: String,
}, { _id: false });

const RelatedWorkSchema = new Schema<RelatedWork>({
  technologyUnderInvestigation: String,
  alternativeTechnologies: String,
  relatedStudies: String,
  relevancePractice: String,
}, { _id: false });

const AcknowledgementsSchema = new Schema<Acknowledgements>({
  text: String,
}, { _id: false });

const AppendicesSchema = new Schema<Appendices>({
  appendices: String,
}, { _id: false });

const ConclusionsFutureWorkSchema = new Schema<ConclusionsFutureWork>({
  summary: String,
  impact: String,
  futureWork: String,
}, { _id: false });

const ReferencesSchema = new Schema<References>({
  references: String,
}, { _id: false });

const PackageSchema = new Schema<Package>({
  isExperimentalPackageInformed: Boolean,
  url: String,
}, { _id: false });

const TypeContextSelectionSchema = new Schema<TypeContextSelection>({
  offline: Boolean,
  online: Boolean,
  student: Boolean,
  professional: Boolean,
  toy: Boolean,
  realProblems: Boolean,
  specific: Boolean,
  general: Boolean,
}, { _id: false });

const TypeSelectionParticipantsObjectsSchema = new Schema<TypeSelectionParticipantsObjects>({
  simpleRandomSampling: Boolean,
  systematicSampling: Boolean,
  stratifiedRandomSampling: Boolean,
  convenienceSampling: Boolean,
  quotaSampling: Boolean,
}, { _id: false });

const TypeDesignExperimentSchema = new Schema<TypeDesignExperiment>({
  oneFactorWithTwoTreatments: Boolean,
  oneFactorWithMoreThanTwoTreatments: Boolean,
  twoFactorsWithTwoTreatments: Boolean,
  moreThanTwoFactorsEachTwoTreatments: Boolean,
}, { _id: false });

const TypeContextExperimentSchema = new Schema<TypeContextExperiment>({
  inVivo: Boolean,
  inVitro: Boolean,
}, { _id: false });

const TypeExperimentSchema = new Schema<TypeExperiment>({
  original: Boolean,
  replicated: Boolean,
  repeated: Boolean,
  reproduced: Boolean,
}, { _id: false });

const AnalysisSchema = new Schema<Analysis>({
  descriptiveStatistics: String,
  dataSetPreparation: String,
  hypothesisTesting: String,
  hasQualitativeAnalysisOfExperiment: Boolean,
  whatQualitativeAnalysisPerformed: String,
  experimentAnalysisBasedPValue: Boolean,
  howDataHasBeenAnalyzed: String,
  studyHasPerformedMetaAnalysis: Boolean,
}, { _id: false });

const DiscussionSchema = new Schema<Discussion>({
  evaluationOfResultsAndImplications: String,
  threatsValidity: String,
  isFollowThreatsByWohlin: Boolean,
  inferences: String,
  lessonsLearned: String,
}, { _id: false });

const EvaluationSchema = new Schema<Evaluation>({
  theAuthorsConcernedEvaluatingTheQuality: Boolean,
}, { _id: false });

const ExecutionSelectionSchema = new Schema<ExecutionSelection>({
  preparation: String,
  deviations: String,
  pilotProjectCarriedOut: Boolean,
  howManyPilotProjectCarriedOut: Number,
}, { _id: false });

const DocumentationSchema = new Schema<Documentation>({
  useTemplate: Boolean,
  template: String,
  observationsAboutTemplateUsed: String,
  abstract: AbstractSchema,
  introduction: IntroductionSchema,
  relatedWork: RelatedWorkSchema,
}, { _id: false });

const ExperimentPlanningSchema = new Schema<ExperimentPlanning>({
  goals: String,
  experimentalUnits: String,
  experimentalMaterial: String,
  tasks: String,
  hypotheses: String,
  parameters: String,
  variables: String,
  experimentDesign: String,
  procedure: String,
  analysisProcedure: String,
  isAQuasiExperiment: Boolean,
  isExplicitsAQuasiExperimentInStudy: Boolean,
  typeExperiment: TypeExperimentSchema,
  typeContextExperiment: TypeContextExperimentSchema,
  typeDesignExperiment: TypeDesignExperimentSchema,
  typeSelectionParticipantsObjects: TypeSelectionParticipantsObjectsSchema,
  typeContextSelection: TypeContextSelectionSchema,
}, { _id: false });

const ExperimentSchema = new Schema<IExperiment>({
  title: { type: String, required: true },
  authorship: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  publicationType: { type: String, required: true },
  publicationVenue: { type: String, required: true },
  pagesNumber: { type: Number, required: true },
  documentation: {type: DocumentationSchema, required: true },
  experimentPlanning: {type: ExperimentPlanningSchema, required: true },
  discussion: {type: DiscussionSchema, required: true },
  executionSelection: {type: ExecutionSelectionSchema, required: true },
  evaluation: {type: EvaluationSchema, required: true },
  conclusionsFutureWork: {type: ConclusionsFutureWorkSchema, required: true },
  references: {type: ReferencesSchema, required: true },
  appendices: {type: AppendicesSchema, required: true },
  acknowledgements: {type: AcknowledgementsSchema, required: true },
  package: {type: PackageSchema, required: true },
  analysis: {type: AnalysisSchema, required: true },
}, {collection: 'ExperimentData'});

// Crie o modelo baseado no schema
const ExperimentModel = mongoose.model<IExperiment>('ExperimentData', ExperimentSchema);

export { ExperimentModel };
