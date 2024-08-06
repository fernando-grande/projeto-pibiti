const express = require('express');
import {Request, Response} from "express"
const cors = require('cors')
const bodyParser = require('body-parser')
import dotenv from "dotenv"
import mongoose from "mongoose";

const corsOptions = {
    origin: 'https://experiment-portal.netlify.app',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type',
};

import { dataBaseConnection } from "./dataBaseConnection";

const { experimentSchema } = require('./zod/experiment/experiment');
import { ExperimentModel } from "./schemaMongoose";

dotenv.config()

const app = express()
const port = 3000

dataBaseConnection()

app.use(cors(corsOptions));

app.use(bodyParser.json())

app.post('/experiments', async (req: Request, res: Response) => {
    const experimentFormData = req.body;

    try {
        const validExperimentData = experimentSchema.parse(experimentFormData)

        const insertExperimentData = new ExperimentModel(validExperimentData)
        await insertExperimentData.save()

        console.log("Data was inserted!")

        return res.status(201).json(insertExperimentData)
    } catch (error: any) {
        console.error("Error in data validation!", error.errors)
        const validationErrors = error?.errors || [];

        return res.status(400).json({ error: 'Invalid data!', details: validationErrors });
    }

})

app.get('/search/all', async (req: Request, res: Response) => {
    try {
      const experiments = await ExperimentModel.find(); 
      res.json(experiments); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });



  app.get('/experiment/:id', async (req: Request, res: Response) => {
    const experimentId = req.params.id

    try {
        const experiment = await ExperimentModel.findById(experimentId)
        console.log(experiment)
        if (!experiment) {
            return res.status(404).json({ error: 'Experiment not found' });
        }

        res.json(experiment);
    } catch (error) {
        console.error('Error fetching experiment:', error);
        res.status(500).json({ error: 'Server error' });
    }
  })

// -------------------- SIMPLE SEARCH ------------------------------ //

app.get('/search/simple', async (req: Request, res: Response) => {
    const searchString = req.query.q as string

    try {
        const regex = new RegExp(searchString, 'i')

        const simpleSearch = await ExperimentModel.find({
            $or: [
                { title: { $regex: regex } },
                { authorship: { $regex: regex } },
                { publicationType: { $regex: regex } },
                { publicationVenue: { $regex: regex } },
                { 'experimentPlanning.goals': { $regex: regex } },
                { 'experimentPlanning.experimentalUnits': { $regex: regex } },
                { 'experimentPlanning.experimentalMaterial': { $regex: regex } },
                { 'experimentPlanning.tasks': { $regex: regex } },
                { 'experimentPlanning.hypotheses': { $regex: regex } },
                { 'experimentPlanning.parameters': { $regex: regex } },
                { 'experimentPlanning.variables': { $regex: regex } },
                { 'experimentPlanning.experimentDesign': { $regex: regex } },
                { 'experimentPlanning.analysisProcedure': { $regex: regex } },
                { 'executionSelection.preparation': { $regex: regex } },
                { 'executionSelection.deviations': { $regex: regex } },
                { 'analysis.descriptiveStatistics': { $regex: regex } },
                { 'analysis.dataSetPreparation': { $regex: regex } },
                { 'analysis.hypothesisTesting': { $regex: regex } },
                { 'analysis.whatQualitativeAnalysisPerformed': { $regex: regex } },
                { 'analysis.howDataHasBeenAnalyzed': { $regex: regex } },
                { 'discussion.evaluationOfResultsAndImplications': { $regex: regex } },
                { 'discussion.threatsValidity': { $regex: regex } },
                { 'discussion.inferences': { $regex: regex } },
                { 'discussion.lessonsLearned': { $regex: regex } },
                { 'documentation.template': { $regex: regex } },
                { 'documentation.observationsAboutTemplateUsed': { $regex: regex } },
                { 'documentation.abstract.objective': { $regex: regex } },
                { 'documentation.abstract.abstractBackground': { $regex: regex } },
                { 'documentation.abstract.methods': { $regex: regex } },
                { 'documentation.abstract.results': { $regex: regex } },
                { 'documentation.abstract.limitations': { $regex: regex } },
                { 'documentation.abstract.conclusions': { $regex: regex } },
                { 'documentation.abstract.keywords': { $regex: regex } },
                { 'documentation.introduction.problemStatement': { $regex: regex } },
                { 'documentation.introduction.researchObjectives': { $regex: regex } },
                { 'documentation.introduction.context': { $regex: regex } },
                { 'documentation.relatedWork.technologyUnderInvestigation': { $regex: regex } },
                { 'documentation.relatedWork.alternativeTechnologies': { $regex: regex } },
                { 'documentation.relatedWork.relatedStudies': { $regex: regex } },
                { 'documentation.relatedWork.relevancePractice': { $regex: regex } },
                { 'acknowledgements.text': { $regex: regex } },
                { 'appendices.appendices': { $regex: regex } },
                { 'conclusionsFutureWork.summary': { $regex: regex } },
                { 'conclusionsFutureWork.impact': { $regex: regex } },
                { 'conclusionsFutureWork.futureWork': { $regex: regex } },
                { 'references.references': { $regex: regex } },
            ]
        }).exec()
        return res.json(simpleSearch)
    } catch(error) {
        console.error("Error in simple search!")
        return res.status(500).json({ error: 'Error in simple Search!' })
    }
})

// ----------------------------------------------------------------- //

app.post('/search/advanced', async (req: Request, res: Response) => {
    try {
        const filter = req.body
        console.log(filter)

        const query = {}
        for (const key in filter) {
            if (typeof filter[key] === 'object') {
                for (const nestedKey in filter[key]) {
                    // @ts-ignore
                    query[`${key}.${nestedKey}`] = filter[key][nestedKey]
                }
            } else {
                // @ts-ignore
                query[key] = filter[key]
            }
        }

        const experiments = await ExperimentModel.find(query)
        res.status(200).json(experiments)
    } catch (error) {
        res.status(500).json({ error: 'Error in advanced search!' })
    }
})

const server = app.listen(port, () => {
    console.log('App running!')
})

process.on('SIGINT', async () => {
    console.log("Closing server!")
    await mongoose.disconnect()
    server.close(() => {
        console.log("Server closed!")
        process.exit(0)
    })
})