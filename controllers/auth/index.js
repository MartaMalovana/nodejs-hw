const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const verificationEmail = require("./verificationEmail");
const sendEmail = require("./sendEmail");
const verifyRequest = require("./verifyRequest");

module.exports = {
    register,
    login,
    getCurrent,
    logout,
    updateSubscription,
    updateAvatar,
    verificationEmail,
    sendEmail,
    verifyRequest
}