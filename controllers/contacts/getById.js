const createError = require("http-errors");
const contactsOperations = require("../../models");

async function getById (req, res, next) {
      const {contactId} = req.params;
      const result = await contactsOperations.getById(contactId);
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