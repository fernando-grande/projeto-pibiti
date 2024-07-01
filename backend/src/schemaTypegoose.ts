import { prop, getModelForClass, modelOptions, Severity } from '@typegoose/typegoose';

// Abstract
class Abstract {
  @prop()
  objective!: string;

  @prop()
  abstractBackground!: string;

  @prop()
  methods!: string;

  @prop()
  results!: string;

  @prop()
  limitations!: string;

  @prop()
  conclusions!: string;

  @prop()
  keywords!: string;
}

// Introduction
class Introduction {
  @prop()
  problemStatement!: string;

  @prop()
  researchObjectives!: string;

  @prop()
  context!: string;
}

// RelatedWork
class RelatedWork {
  @prop()
  technologyUnderInvestigation!: string;

  @prop()
  alternativeTechnologies!: string;

  @prop()
  relatedStudies!: string;

  @prop()
  relevancePractice!: string;
}

// Acknowledgements
class Acknowledgements {
  @prop()
  text!: string;
}

// Appendices
class Appendices {
  @prop()
  appendices!: string;
}

// ConclusionsFutureWork
class ConclusionsFutureWork {
  @prop()
  summary!: string;

  @prop()
  impact!: string;

  @prop()
  futureWork!: string;
}

// References
class References {
  @prop()
  references!: string;
}

// Package
class Package {
  @prop()
  isExperimentalPackageInformed!: boolean;

  @prop()
  url!: string;
}

// Type Context Selection
class TypeContextSelection {
  @prop()
  offline!: boolean;

  @prop()
  online!: boolean;

  @prop()
  student!: boolean;

  @prop()
  professional!: boolean;

  @prop()
  toy!: boolean;

  @prop()
  realProblems!: boolean;

  @prop()
  specific!: boolean;

  @prop()
  general!: boolean;
}

// Type Selection Participants Objects
class TypeSelectionParticipantsObjects {
  @prop()
  simpleRandomSampling!: boolean;

  @prop()
  systematicSampling!: boolean;

  @prop()
  stratifiedRandomSampling!: boolean;

  @prop()
  convenienceSampling!: boolean;

  @prop()
  quotaSampling!: boolean;
}

// Type Design Experiment
class TypeDesignExperiment {
  @prop()
  oneFactorWithTwoTreatments!: boolean;

  @prop()
  oneFactorWithMoreThanTwoTreatments!: boolean;

  @prop()
  twoFactorsWithTwoTreatments!: boolean;

  @prop()
  moreThanTwoFactorsEachTwoTreatments!: boolean;
}

// Type Context Experiment
class TypeContextExperiment {
  @prop()
  inVivo!: boolean;

  @prop()
  inVitro!: boolean;
}

// Type Experiment
class TypeExperiment {
  @prop()
  original!: boolean;

  @prop()
  replicated!: boolean;

  @prop()
  repeated!: boolean;

  @prop()
  reproduced!: boolean;
}

// Analysis
class Analysis {
  @prop()
  descriptiveStatistics!: string;

  @prop()
  dataSetPreparation!: string;

  @prop()
  hypothesisTesting!: string;

  @prop()
  hasQualitativeAnalysisOfExperiment!: boolean;

  @prop()
  whatQualitativeAnalysisPerformed!: string;

  @prop()
  experimentAnalysisBasedPValue!: boolean;

  @prop()
  howDataHasBeenAnalyzed!: string;

  @prop()
  studyHasPerformedMetaAnalysis!: boolean;
}

// Discussion
class Discussion {
  @prop()
  evaluationOfResultsAndImplications!: string;

  @prop()
  threatsValidity!: string;

  @prop()
  isFollowThreatsByWohlin!: boolean;

  @prop()
  inferences!: string;

  @prop()
  lessonsLearned!: string;
}

// Evaluation
class Evaluation {
  @prop()
  theAuthorsConcernedEvaluatingTheQuality!: boolean;
}

// Execution Selection
class ExecutionSelection {
  @prop()
  preparation!: string;

  @prop()
  deviations!: string;

  @prop()
  pilotProjectCarriedOut!: boolean;

  @prop()
  howManyPilotProjectCarriedOut!: number;
}

// Documentation
class Documentation {
  @prop()
  useTemplate!: boolean;

  @prop()
  template!: string;

  @prop()
  observationsAboutTemplateUsed!: string;

  @prop({ type: () => Abstract })
  abstract!: Abstract;

  @prop({ type: () => Introduction })
  introduction!: Introduction;

  @prop({ type: () => RelatedWork })
  relatedWork!: RelatedWork;
}

// Experiment Planning
class ExperimentPlanning {
  @prop()
  goals!: string;

  @prop()
  experimentalUnits!: string;

  @prop()
  experimentalMaterial!: string;

  @prop()
  tasks!: string;

  @prop()
  hypotheses!: string;

  @prop()
  parameters!: string;

  @prop()
  variables!: string;

  @prop()
  experimentDesign!: string;

  @prop()
  procedure!: string;

  @prop()
  analysisProcedure!: string;

  @prop()
  isAQuasiExperiment!: boolean;

  @prop()
  isExplicitsAQuasiExperimentInStudy!: boolean;

  @prop({ type: () => TypeExperiment })
  typeExperiment!: TypeExperiment;

  @prop({ type: () => TypeContextExperiment })
  typeContextExperiment!: TypeContextExperiment;

  @prop({ type: () => TypeDesignExperiment })
  typeDesignExperiment!: TypeDesignExperiment;

  @prop({ type: () => TypeSelectionParticipantsObjects })
  typeSelectionParticipantsObjects!: TypeSelectionParticipantsObjects;

  @prop({ type: () => TypeContextSelection })
  typeContextSelection!: TypeContextSelection;
}

// ExperimentFormData
@modelOptions({ 
    options: { allowMixed: Severity.ALLOW } ,
    schemaOptions: { collection: 'experimentFormData' }
})
class ExperimentFormData {
  @prop({ required: true, index: true, unique: true })
  id!: string;

  @prop({ required: true })
  title!: string;

  @prop({ required: true })
  authorship!: string;

  @prop({ required: true })
  publicationYear!: number;

  @prop({ required: true })
  publicationType!: string;

  @prop({ required: true })
  publicationVenue!: string;

  @prop({ required: true })
  pagesNumber!: number;

  @prop({ type: () => Documentation })
  documentation!: Documentation;

  @prop({ type: () => ExperimentPlanning })
  experimentPlanning!: ExperimentPlanning;

  @prop({ type: () => Discussion })
  discussion!: Discussion;

  @prop({ type: () => ExecutionSelection })
  executionSelection!: ExecutionSelection;

  @prop({ type: () => Evaluation })
  evaluation!: Evaluation;

  @prop({ type: () => ConclusionsFutureWork })
  conclusionsFutureWork!: ConclusionsFutureWork;

  @prop({ type: () => References })
  references!: References;

  @prop({ type: () => Appendices })
  appendices!: Appendices;

  @prop({ type: () => Acknowledgements })
  acknowledgements!: Acknowledgements;

  @prop({ type: () => Package })
  package!: Package;

  @prop({ type: () => Analysis })
  analysis!: Analysis;
}

const ExperimentFormDataModel = getModelForClass(ExperimentFormData);

export { ExperimentFormDataModel, ExperimentFormData };
