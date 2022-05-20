const {User} = require("../../models");
const {Unauthorized} = require("http-errors");

async function logout (req, res) {
    const {_id} = req.user;
    const user = await User.findByIdAndUpdate(_id, {token: null});

    if(!user) {
        throw new Unauthorized;
    };

    res.status(204).json();
};

module.exports = logout;