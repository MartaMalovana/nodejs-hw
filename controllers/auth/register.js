const {User} = require("../../models");
const {Conflict} = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const {v4} = require("uuid");
const sendEmail = require("./sendEmail");

const register = async (req, res) => {
    const {email, password} = req.body;
    
    const user = await User.findOne({email});
    if(user) {
        throw new Conflict("Email in use");
    };

    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const verificationToken = v4();
    const newUser = await User.create({
        email, 
        password: hashPassword, 
        avatarURL: gravatar.url(email), 
        verificationToken
    });
    
    await sendEmail({
        to: email,
        from: "mmalovana@ukr.net",
        subject: "Finish your verification",
        html: `<a 
                target="_blank" 
                href="http://localhost:3000/api/users/verify/${verificationToken}"
               >
                Click here to confirm your email
               </a>`
    });

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