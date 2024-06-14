import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.experimentFormData.create({
        data: {
            "title": "dasdsadas",
            "authorship": "dsadassd",
            "publicationYear": 11,
            "publicationType": "dasdsa",
            "publicationVenue": "dasdasads",
            "pagesNumber": 11,
            "documentation": {
              "useTemplate": true,
              "template": "adsdas",
              "observationsAboutTemplateUsed": "dasds",
              "introduction": {
                "problemStatement": "dsadsa",
                "researchObjectives": "dsadsa",
                "context": "dsa"
              },
              "relatedWork": {
                "technologyUnderInvestigation": "dsdsa",
                "alternativeTechnologies": "ddsd",
                "relatedStudies": "sad",
                "relevancePractice": "ssda"
              },
              "abstract": {
                "objective": "dsads",
                "abstractBackground": "das",
                "methods": "dasds",
                "results": "dsadsa",
                "limitations": "dasdas",
                "conclusions": "dsa",
                "keywords": "dsaads"
              }
            },
            "experimentPlanning": {
              "goals": "dsadasdas",
              "experimentalUnits": "adsdsadsa",
              "experimentalMaterial": "dasdasads",
              "tasks": "dsadsa",
              "hypotheses": "dsadasdsa",
              "parameters": "dsadas",
              "experimentDesign": "dsa",
              "procedure": "ds",
              "analysisProcedure": "dsadsa",
              "isAQuasiExperiment": true,
              "isExplicitsAQuasiExperimentInStudy": true,
              "typeExperiment": {
                "original": false,
                "replicated": true,
                "repeated": false,
                "reproduced": false
              },
              "typeContextExperiment": {
                "inVivo": false,
                "inVitro": true
              },
              "typeDesignExperiment": {
                "oneFactorWithTwoTreatments": true,
                "oneFactorWithMoreThanTwoTreatments": false,
                "twoFactorsWithTwoTreatments": false,
                "moreThanTwoFactorsEachTwoTreatments": false
              },
              "typeSelectionParticipantsObjects": {
                "simpleRandomSampling": false,
                "systematicSampling": false,
                "stratifiedRandomSampling": true,
                "convenienceSampling": false,
                "quotaSampling": false
              },
              "typeContextSelection": {
                "offline": true,
                "online": false,
                "student": false,
                "professional": false,
                "toy": false,
                "realProblems": false,
                "specific": false,
                "general": false
              }
            },
            "discussion": {
              "evaluationOfResultsAndImplications": "dsaadsads",
              "threatsValidity": "dsadasds",
              "isFollowThreatsByWohlin": true,
              "inferences": "dsadsads",
              "lessonsLearned": "dsadassad"
            },
            "executionSelection": {
              "preparation": "adsdsadsa",
              "deviations": "dasadssda",
              "pilotProjectCarriedOut": true,
              "howManyPilotProjectCarriedOut": 23
            },
            "evaluation": {
              "theAuthorsConcernedEvaluatingTheQuality": true
            },
            "conclusionsFutureWork": {
              "summary": "dsadsds",
              "impact": "dsa",
              "futureWork": "dsdsad"
            },
            "references": {
              "references": "dsadsdsdsa"
            },
            "appendices": {
              "appendices": "adas"
            },
            "acknowledgements": {
              "text": "dsadsdsadasdsa"
            },
            "package": {
              "isExperimentalPackageInformed": true,
              "url": "sdadasdsdsdas"
            },
            "analysis": {
              "descriptiveStatistics": "dsadsads",
              "dataSetPreparation": "dsaads",
              "hypothesisTesting": "dasads",
              "hasQualitativeAnalysisOfExperiment": true,
              "whatQualitativeAnalysisPerformed": "dsaadsdas",
              "experimentAnalysisBasedPValue": true,
              "howDataHasBeenAnalyzed": "dsaadsdsds",
              "studyHasPerformedMetaAnalysis": true
            }
          }
          
    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })