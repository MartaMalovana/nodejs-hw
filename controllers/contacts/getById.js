const createError = require("http-errors");
const {Contact} = require("../../models");

async function getById (req, res, next) {
      const {_id} = req.user;
      const {contactId} = req.params;
      const result = await Contact.find({_id: contactId, owner: _id}).populate("owner", "email");
      if(!result) {
        throw createError(404, `Contact with id=${contactId} not found`);
      }
      
      res.json({
        status: "200",
        data: {
          result
        }
      })
  };

  module.exports = getById;