const {Unauthorized} = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {User} = require("../../models");
const {SECRET_KEY} = process.env;

const login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    const passCompare = bcrypt.compareSync(password, user.password);

    if(!user || !passCompare) {
        throw new Unauthorized("Email or password is wrong");
    };

    if(!user.verify) {
        throw new Unauthorized("Not verified");
    };
    
    const payload = {
        id: user._id
    };
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "2h"});
    await User.findByIdAndUpdate(user._id, {token});
console.log(res.status);
    res.status(200).json({
        data: {
            token,
            user: {
                email: user.email,
                subscription: user.subscription
            }
        }
    })
};

module.exports = login;