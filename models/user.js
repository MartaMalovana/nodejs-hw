const {Schema, model} = require("mongoose");
const Joi = require("joi");

const userSchema = Schema({
        password: {
          type: String,
          required: [true, 'Password is required'],
        },
        email: {
          type: String,
          required: [true, 'Email is required'],
          unique: true,
        },
        subscription: {
          type: String,
          enum: ["starter", "pro", "business"],
          default: "starter"
        },
        token: {
          type: String,
          default: null,
        },
        avatarURL: {
          type: String
        }
}, {versionKey: false, timestamps: true});

const User = model("user", userSchema);

const joiUserSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().required()
});

const joiSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid('starter', 'pro', 'business').required()
})

const joiAvatarsSchema = Joi.object({
  avatarURL: Joi.string()
})

module.exports = {
    User,
    joiUserSchema,
    joiSubscriptionSchema,
    joiAvatarsSchema
}