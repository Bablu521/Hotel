import express from 'express'
import dotenv from 'dotenv'
import initApp from './src/index.router.js'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
initApp(app, express)

app.listen(PORT, () => console.log(`Server is Running on Port ${PORT}!`))