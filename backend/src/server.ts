const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const { PrismaClient } = require('@prisma/client')
const { experimentSchema } = require('../../frontend/src/libs/zod/experiment/experiment')

const app = express();
const port = 3000

const prisma = new PrismaClient()

app.use(cors())

app.use(bodyParser.json())

app.post('/experiments', async (req: any, res: any) => {
    const experimentFormData = req.body;
    console.log(req.body)

    try {
        const validExperimentData = experimentSchema.parse(experimentFormData)

        const insertExperimentData = await prisma.experimentFormData.create({
            data: validExperimentData,
        })

        console.log("Data was inserted!")
        return res.status(201).json(insertExperimentData)
    } catch (error: any) {
        console.error("Error in data validation!", error.errors)

        const validationErrors = error?.errors || [];
        return res.status(400).json({ error: 'Invalid data!', details: validationErrors });
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
        process.exit(0)
    })
})