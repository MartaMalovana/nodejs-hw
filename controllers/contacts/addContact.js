const {Contact} = require("../../models");

async function addContact (req, res, next) {
    const {_id} = req.user;
    console.log(req.user._id);
    const newContact = await Contact.create({...req.body, owner: _id});
    res.status(201).json({
      status: "201",
      data: {
        newContact
      }
    })
  };

  module.exports = addContact;
