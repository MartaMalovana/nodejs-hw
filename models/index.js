const {Contact, joiContactSchema, joiStatusSchema} = require("./contact");
const {User, joiUserSchema, joiSubscriptionSchema} = require("./user");

module.exports = {
    Contact,
    joiContactSchema,
    joiStatusSchema,
    User,
    joiUserSchema,
    joiSubscriptionSchema
}