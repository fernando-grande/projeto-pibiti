const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const { PrismaClient } = require('@prisma/client')
const { experimentSchema } = require('../../frontend/src/libs/zod/experiment/experiment')

const app = express();
const port = 3000

const prisma = new PrismaClient()

const corsOptions = {
    origin: 'http://localhost:5173', // URL do seu frontend
    methods: ['POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type'], // Headers permitidos
};
app.use(cors(corsOptions))

app.use(bodyParser.json())

app.post('/experiments', async (req: any, res: any) => {
    const experimentFormData = req.body;
    console.log(req.body)

    try {
        const validExperimentData = experimentSchema.parse(experimentFormData)
        console.log(validExperimentData)

        const insertExperimentData = await prisma.ExperimentData.create({
            data: validExperimentData,
        })

        console.log(insertExperimentData)
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