import connectDB from './connection.js';
import { globalErrorHandling } from './utils/errorHandling.js';

const initApp = (app, express) => {
    app.use(express.json())
    connectDB()
    app.get('/', (req, res) => res.json({ message: 'Welcome to Hotel Project' }))
    app.use("*", (req, res, next) => {
        return res.status(404).json({ message: "IN-VALID ROUTING" })
    })
    app.use(globalErrorHandling)
}
export default initApp