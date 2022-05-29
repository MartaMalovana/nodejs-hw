const express = require('express')
const router = express.Router()
const {validation, ctrlWrapper, auth, upload} = require("../../middewares");
const {joiUserSchema, joiSubscriptionSchema, joiAvatarsSchema} = require("../../models");
const {authCtrl} = require("../../controllers");

router.post("/signup", validation(joiUserSchema), ctrlWrapper(authCtrl.register));
router.post("/login", validation(joiUserSchema), ctrlWrapper(authCtrl.login));
router.get("/current", auth, authCtrl.getCurrent);
router.get("/logout", auth, authCtrl.logout);
router.patch("", auth, validation(joiSubscriptionSchema), ctrlWrapper(authCtrl.updateSubscription));
router.patch("/avatars", auth, upload.single("image"), validation(joiAvatarsSchema), ctrlWrapper(authCtrl.updateAvatar))

module.exports = router;