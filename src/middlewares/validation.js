export const validation = (joiSchema) => {
    return (req, res, next) => {
        const Data = { ...req.body, ...req.query, ...req.params }
        const validationResult = joiSchema.validate(Data, { abortEarly: false })
        if (validationResult.error) {
            return res.status(400).json({ message: "validationError", validationError: validationResult.error.details })
        }
        return next()
    }
}