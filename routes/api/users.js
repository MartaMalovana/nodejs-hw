const express = require('express')
const router = express.Router()
const {validation} = require("../../middewares");
const {ctrlWrapper, auth} = require("../../middewares");
const {joiUserSchema, joiSubscriptionSchema} = require("../../models");
const {authCtrl} = require("../../controllers");

router.post("/signup", validation(joiUserSchema), ctrlWrapper(authCtrl.register));
router.post("/login", validation(joiUserSchema), ctrlWrapper(authCtrl.login));
router.get("/current", auth, authCtrl.getCurrent);
router.get("/logout", auth, authCtrl.logout);
router.patch("", auth, validation(joiSubscriptionSchema), ctrlWrapper(authCtrl.updateSubscription));

module.exports = router;