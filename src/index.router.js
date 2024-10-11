const initApp = (app, express) => {
    app.use(express.json())
    app.get('/', (req, res) => res.json({ message: 'Welcome to Hotel Project' }))
    app.use("*", (req, res, next) => {
        return res.status(404).json({ message: "IN-VALID ROUTING" })
    })
}
export default initApp