const createError = require("http-errors");

function validation (schema) {
    return ((req, res, next) => {
        const {error} = schema.validate(req.body);
        if(error) {
            throw createError(400, "Ошибка от Joi или другой библиотеки валидации");
        }
        next();
    })
};

module.exports = validation;