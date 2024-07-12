import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "../../layouts/screens/MainLayout";
import { getExperimentById } from "./getSimpleSearchData";
import { ExperimentTypeSchema } from "../../libs/zod/experiment/experiment";

export function ExperimentDetails() {
  const { id } = useParams<{ id?: string }>();
  const [experiment, setExperiment] = useState<ExperimentTypeSchema | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchExperiment = async () => {
      if (id) {
        setLoading(true);
        try {
          const experimentData = await getExperimentById(id);
          console.log(experimentData)
          setExperiment(experimentData);
        } catch (error) {
          setError("Error fetching experiment data");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchExperiment();
  }, [id]);

  if (!id) {
    return <div>No experiment ID provided</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!experiment) {
    return <div>Experiment not found</div>;
  }

  return (
    <MainLayout>
      <div className="text-justify">
        <strong>Title:</strong> {experiment.title} <br />
        <strong>Authoship:</strong> {experiment.authorship} <br />
        <strong>Publication Year:</strong> {experiment.publicationYear} <br />
        <strong>Publication Type:</strong> {experiment.publicationType} <br />
        <strong>Publication Venue:</strong> {experiment.publicationVenue} <br />
        <strong>Pages Number:</strong> {experiment.pagesNumber} <br /> <br />

        <h2 className="text-lg font-semibold"> EXPERIMENT PLANNING </h2>
        <strong> Goals: </strong> {experiment.experimentPlanning.goals} <br />
        <strong> Experimental Units: </strong> {experiment.experimentPlanning.experimentalUnits} <br />
        <strong> Experimental Material: </strong> {experiment.experimentPlanning.experimentalMaterial} <br />
        <strong> Tasks: </strong> {experiment.experimentPlanning.tasks} <br />
        <strong> Hypotheses: </strong> {experiment.experimentPlanning.hypotheses} <br />
        <strong> Parameters: </strong> {experiment.experimentPlanning.parameters} <br />
        <strong> Variables: </strong> {experiment.experimentPlanning.variables} <br />
        <strong> ExperimentDesign: </strong> {experiment.experimentPlanning.experimentDesign} <br />
        <strong> Procedure: </strong> {experiment.experimentPlanning.procedure} <br />
        <strong> Analysis Procedure: </strong> {experiment.experimentPlanning.analysisProcedure} <br />
        <strong> Is it a Quasi-Experiment? </strong> {experiment.experimentPlanning.isAQuasiExperiment.toString()} <br />
        <strong> Is it Explicits a Quasi-Experiment Study? </strong> {experiment.experimentPlanning.isExplicitsAQuasiExperimentInStudy.toString()} <br /> <br />

        <h3 className="text-lg font-semibold"> Experiment Type </h3>
        <strong>Original: </strong> {experiment.experimentPlanning.typeExperiment.original.toString()} <br />
        <strong>Replicated: </strong> {experiment.experimentPlanning.typeExperiment.replicated.toString()} <br />
        <strong>Repeated: </strong> {experiment.experimentPlanning.typeExperiment.repeated.toString()} <br />
        <strong>Reproduced: </strong> {experiment.experimentPlanning.typeExperiment.reproduced.toString()} <br /> <br />

        <h3 className="text-lg font-semibold"> Experiment Context Type </h3>
        <strong>In Vivo: </strong> {experiment.experimentPlanning.typeContextExperiment.inVivo.toString()} <br />
        <strong>In Vitro: </strong> {experiment.experimentPlanning.typeContextExperiment.inVitro.toString()} <br /> <br />

        <h3 className="text-lg font-semibold">Experiment Design Type</h3>
        <strong>One Factor with Two Treatments:</strong> {experiment.experimentPlanning.typeDesignExperiment.oneFactorWithTwoTreatments.toString()} <br />
        <strong>One Factor with More Than Two Treatments:</strong> {experiment.experimentPlanning.typeDesignExperiment.oneFactorWithMoreThanTwoTreatments.toString()} <br />
        <strong>Two Factors with Two Treatments:</strong> {experiment.experimentPlanning.typeDesignExperiment.twoFactorsWithTwoTreatments.toString()} <br />
        <strong>More Than Two Factors each with Two Treatments: </strong> {experiment.experimentPlanning.typeDesignExperiment.moreThanTwoFactorsEachTwoTreatments.toString()} <br /> <br />

        <h3 className="text-lg font-semibold">Objects & Participants Selection</h3>
        <strong>Simple Random Sampling: </strong> {experiment.experimentPlanning.typeSelectionParticipantsObjects.simpleRandomSampling.toString()} <br />
        <strong>Systematic Sampling: </strong> {experiment.experimentPlanning.typeSelectionParticipantsObjects.systematicSampling.toString()} <br />
        <strong>Stratified Random Sampling:</strong> {experiment.experimentPlanning.typeSelectionParticipantsObjects.stratifiedRandomSampling.toString()} <br />
        <strong>Convenience Sampling:</strong> {experiment.experimentPlanning.typeSelectionParticipantsObjects.convenienceSampling.toString()} <br />
        <strong>Quota Sampling:</strong> {experiment.experimentPlanning.typeSelectionParticipantsObjects.quotaSampling.toString()} <br /> <br />

        <h3 className="text-lg font-semibold">Context Selection Type</h3>
        <strong>Online: </strong> {experiment.experimentPlanning.typeContextSelection.online.toString()} <br />
        <strong>Offline:</strong> {experiment.experimentPlanning.typeContextSelection.offline.toString()} <br />
        <strong>Student:</strong> {experiment.experimentPlanning.typeContextSelection.student.toString()} <br />
        <strong>Professional:</strong> {experiment.experimentPlanning.typeContextSelection.professional.toString()} <br />
        <strong>Toy:</strong> {experiment.experimentPlanning.typeContextSelection.toy.toString()} <br />
        <strong>Real:</strong> {experiment.experimentPlanning.typeContextSelection.realProblems.toString()} <br />
        <strong>Specific:</strong> {experiment.experimentPlanning.typeContextSelection.specific.toString()} <br />
        <strong>General:</strong> {experiment.experimentPlanning.typeContextSelection.general.toString()} <br /> <br />

        <h2 className="text-lg font-semibold">EXECUTION</h2>
        <strong>Preparation:</strong> {experiment.executionSelection.preparation} <br />
        <strong>Deviations:</strong> {experiment.executionSelection.deviations} <br />
        <strong>Pilot Project was carried out?</strong> {experiment.executionSelection.pilotProjectCarriedOut.toString()} <br />
        <strong>How many Pilot Projects were carried out?</strong> {experiment.executionSelection.howManyPilotProjectCarriedOut} <br /> <br />

        <h2 className="text-lg font-semibold">ANALYSIS</h2>
        <strong>How many Pilot Projects were carried out?</strong> {experiment.executionSelection.howManyPilotProjectCarriedOut} <br />
        <strong>Descriptive Statistics:</strong> {experiment.analysis.descriptiveStatistics} <br />
        <strong>Data Set Preparation:</strong> {experiment.analysis.dataSetPreparation} <br />
        <strong>Hypothesis Test:</strong> {experiment.analysis.hypothesisTesting} <br />
        <strong>Has Qualitative Analysis of Experiment:</strong> {experiment.analysis.hasQualitativeAnalysisOfExperiment.toString()} <br />
        <strong>What Qualitative Analysis was Performed:</strong> {experiment.analysis.whatQualitativeAnalysisPerformed} <br />
        <strong>The Experiment Analysis was based on P value?</strong> {experiment.analysis.experimentAnalysisBasedPValue.toString()} <br />
        <strong>Describe how data has been analyzed:</strong> {experiment.analysis.howDataHasBeenAnalyzed} <br />
        <strong>The study has performed Meta Analysis?</strong> {experiment.analysis.studyHasPerformedMetaAnalysis.toString()} <br /> <br />

        <h2 className="text-lg font-semibold">DISCUSSION</h2>
        <strong>Evaluation of Results and Implications:</strong> {experiment.discussion.evaluationOfResultsAndImplications} <br />
        <strong>Threats to Validity:</strong> {experiment.discussion.threatsValidity} <br />
        <strong>Follow threats by Wohlin?</strong> {experiment.discussion.isFollowThreatsByWohlin.toString()} <br />
        <strong>Inferences:</strong> {experiment.discussion.inferences} <br />
        <strong>Lessons Learned:</strong> {experiment.discussion.lessonsLearned} <br /> <br />

        <h2 className="text-lg font-semibold">EVALUATION</h2>
        <strong>The Authors Concerned Evaluating the Quality?</strong> {experiment.evaluation.theAuthorsConcernedEvaluatingTheQuality.toString()} <br /> <br />

        <h2 className="text-lg font-semibold">DOCUMENTATION</h2>
        <strong>Use Template?</strong> {experiment.documentation.useTemplate.toString()} <br />
        <strong>Template Used:</strong> {experiment.documentation.template} <br />
        <strong>Observations about the template used:</strong> {experiment.documentation.observationsAboutTemplateUsed} <br /> <br />

        <h3 className="text-lg font-semibold">Abstract</h3>
        <strong>Objective:</strong> {experiment.documentation.abstract.objective} <br />
        <strong>Abstract backgound:</strong> {experiment.documentation.abstract.abstractBackground} <br />
        <strong>Methods:</strong> {experiment.documentation.abstract.methods} <br />
        <strong>Results:</strong> {experiment.documentation.abstract.results} <br />
        <strong>Limitations:</strong> {experiment.documentation.abstract.limitations} <br />
        <strong>Conclusions:</strong> {experiment.documentation.abstract.conclusions} <br />
        <strong>Keywords:</strong> {experiment.documentation.abstract.keywords} <br /> <br />

        <h3 className="text-lg font-semibold">Introduction</h3>
        <strong>Problem Statement:</strong> {experiment.documentation.introduction.problemStatement} <br />
        <strong>Research Objectives:</strong> {experiment.documentation.introduction.researchObjectives} <br />
        <strong>Context:</strong> {experiment.documentation.introduction.context} <br /> <br />

        <h3 className="text-lg font-semibold">Related Work</h3>
        <strong>Technology Under Investigation:</strong> {experiment.documentation.relatedWork.technologyUnderInvestigation} <br />
        <strong>Alternative Technologies:</strong> {experiment.documentation.relatedWork.alternativeTechnologies} <br />
        <strong>Related Studies:</strong> {experiment.documentation.relatedWork.relatedStudies} <br />
        <strong>Relevance Practice:</strong> {experiment.documentation.relatedWork.relevancePractice} <br /> <br />

        <h2 className="text-lg font-semibold">ACKNOWLEDGEMENTS</h2>
        <strong>Text: </strong> {experiment.acknowledgements.text} <br /> <br />

        <h2 className="text-lg font-semibold">APPENDICES</h2>
        <strong>Appendices: </strong> {experiment.appendices.appendices} <br /> <br />

        <h2 className="text-lg font-semibold">CONCLUSIONS AND FUTURE WORK</h2>
        <strong>Summary:</strong> {experiment.conclusionsFutureWork.summary} <br />
        <strong>Impact:</strong> {experiment.conclusionsFutureWork.impact} <br />
        <strong>Future Work:</strong> {experiment.conclusionsFutureWork.futureWork} <br /> <br />

        <h2 className="text-lg font-semibold">REFERENCES</h2>
        <strong>References: </strong> {experiment.references.references} <br /> <br />

        <h2 className="text-lg font-semibold">PACKAGE</h2>
        <strong>The Experimental Package is Informed?</strong> {experiment.package.isExperimentalPackageInformed.toString()} <br />
        <strong>Package url:</strong> {experiment.package.url} <br /> <br />

        {JSON.stringify(experiment, null, 2)}
      </div>
    </MainLayout>
  );
}
