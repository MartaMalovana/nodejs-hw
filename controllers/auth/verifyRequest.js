const {createError} = require("http-errors");
const {User} = require("../../models");
const sendEmail = require("./sendEmail");

async function verifyRequest (req, res) {
    const {email} = req.body;
    if(!email){
        throw createError(400, "Missing required field email");
    };

    const user = await User.findOne({email});
    if(user.verify){
        throw createError(400, "Verification has already been passed");
    };
    sendEmail({
        to: email,
        from: "mmalovana@ukr.net",
        subject: "Finish your verification",
        html: `<a 
                target="_blank" 
                href="http://localhost:3000/api/users/verify/${user.verificationToken}"
               >
                Click here to confirm your email
               </a>`
    });
};

module.exports = verifyRequest;