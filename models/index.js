const {Contact, joiContactSchema, joiStatusSchema} = require("./contact");
const {User, joiUserSchema, joiSubscriptionSchema, joiAvatarsSchema} = require("./user");

module.exports = {
    Contact,
    joiContactSchema,
    joiStatusSchema,
    User,
    joiUserSchema,
    joiSubscriptionSchema,
    joiAvatarsSchema
}