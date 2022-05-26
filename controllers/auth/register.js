const {User} = require("../../models");
const {Conflict} = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const register = async (req, res) => {
    const {email, password} = req.body;
    
    const user = await User.findOne({email});
    if(user) {
        throw new Conflict("Email in use");
    };
    
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    const avatarURL = gravatar.url(email);

    const newUser = await User.create({email, password: hashPassword, avatarURL});
   console.log(newUser);
    res.status(201).json({
        data: {
            user: {
                email: email,
                subscription: newUser.subscription
            }
        }
    });
};

module.exports = register;