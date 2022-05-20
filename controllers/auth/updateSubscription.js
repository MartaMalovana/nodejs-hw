const {User} = require("../../models");
const createError = require("http-errors");

async function updateSubscription (req, res) {
    const {_id} = req.user;
    const {subscription} = req.body;
    
    if(!req.body){
        throw createError(400, "Missing field subscription"); 
    };

    const result = await User.findByIdAndUpdate(_id, {subscription}, {new: true});

    if(!result) {
        throw createError(404, "Not found");
    };

    res.status(200).json({
        data: result
    })
};

module.exports = updateSubscription;