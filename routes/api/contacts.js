const express = require('express')
const router = express.Router()
const {contactsCtrl} = require("../../controllers");
const {validation, ctrlWrapper, auth} = require("../../middewares");

const {joiContactSchema, joiStatusSchema} = require("../../models");

router.get('/', auth, ctrlWrapper(contactsCtrl.listContacts));

router.get('/:contactId', auth, ctrlWrapper(contactsCtrl.getById));

router.post('/', auth, validation(joiContactSchema), ctrlWrapper(contactsCtrl.addContact));

router.delete('/:contactId', auth, ctrlWrapper(contactsCtrl.removeContact));

router.put('/:contactId', auth, validation(joiContactSchema), ctrlWrapper(contactsCtrl.updateContact));

router.patch('/:contactId/favorite', auth, validation(joiStatusSchema), ctrlWrapper(contactsCtrl.updateStatusContact));

module.exports = router;
