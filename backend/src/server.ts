const express = require('express');
import {Request, Response} from "express"
const cors = require('cors')
const bodyParser = require('body-parser')
import dotenv from "dotenv"
import mongoose from "mongoose";

import { dataBaseConnection } from "./dataBaseConnection";

const { experimentSchema } = require('../../frontend/src/libs/zod/experiment/experiment')
import { ExperimentFormData, ExperimentFormDataModel } from "./schemaTypegoose";

dotenv.config()

const app = express()
const port = 3000

dataBaseConnection()

app.use(cors())

app.use(bodyParser.json())

app.post('/experiments', async (req: Request, res: Response) => {
    const experimentFormData = req.body;

    try {
        const validExperimentData = experimentSchema.parse(experimentFormData)

        const insertExperimentData = new ExperimentFormDataModel(validExperimentData)
        await insertExperimentData.save()

        console.log("Data was inserted!")

        return res.status(201).json(insertExperimentData)
    } catch (error: any) {
        console.error("Error in data validation!", error.errors)
        const validationErrors = error?.errors || [];

        return res.status(400).json({ error: 'Invalid data!', details: validationErrors });
    }

})

app.get('/serach/simple', async (req: Request, res: Response) => {
    const searchString = req.query.q as string

    try {
        const regex = new RegExp(searchString, 'i')

        const simpleSearch = await ExperimentFormDataModel.find({
            $or: [

            ]
        }).exec()
        return res.json(simpleSearch)
    } catch(error) {
        console.error("Error in simple search!")
        return res.status(500).json({ error: 'Error in simple Search!' })
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