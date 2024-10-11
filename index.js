import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import initApp from './src/index.router.js'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const app = express()
const PORT = process.env.PORT || 5000
initApp(app, express)





app.listen(PORT, () => console.log(`Server is Running on Port ${PORT}!`))