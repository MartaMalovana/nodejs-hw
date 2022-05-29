const {Contact} = require("../../models");

async function listContacts (req, res, next) {
    const {_id} = req.user;
    const {page = 1, limit = 5, ...filters } = req.query;
    const skip = (page - 1) * limit;
    
    const contacts = filters 
      ? await Contact.find({owner: _id, ...filters}, "", {skip, limit: Number(limit)}).populate("owner", "email")
      : await Contact.find({owner: _id}, "", {skip, limit: Number(limit)}).populate("owner", "email");
    
    return res.json({
      status: "200",
      data: {
        result: contacts
      }
    });
};

module.exports = listContacts;