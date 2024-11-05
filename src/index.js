const express = require('express')
require('dotenv').config()
const { connectToDatabase } = require('./db/mongo.db')
const seedDatabase = require('./utils/seedDatabase')

const app = express()

app.use(express.json())

const PORT = process.env.PORT ?? 3000

app.listen(PORT, async () => {
    await connectToDatabase()
    await seedDatabase()
    console.log('Aplicación corriendo en el puerto: ', PORT)
})