import { ExperimentData } from "@prisma/client";

const express = require('express');
const bodyParser = require('body-parser')
const { PrismaClient } = require('@prisma/client')
const { experimentSchema } = require('../../frontend/src/libs/zod/experiment/experiment')

const app = express();
const port = 3000

const prisma = new PrismaClient()

app.use(bodyParser.json())

app.post('/experiments', async (req: any, res: any) => {
    const experimentData = req.body;

    try {
        const validExperimentData = experimentSchema.parse(experimentData)

        const insertExperimentData = await prisma.experiment.create({
            data: validExperimentData,
        })
        res.status(201).json(validExperimentData)
    } catch (error: any) {
        console.error("Error in data validation!", error.errors)
        res.status(400).json({ error: 'Invalid data!', details: error.errors });
    }

})

const server = app.listen(port, () => {
    console.log('App running!')
})

process.on('SIGINT', async () => {
    console.log("Closing server!")
    await prisma.$disconnect()
    server.close(() => {
        console.log("Server closed!")
        process.exit(1)
    })
})