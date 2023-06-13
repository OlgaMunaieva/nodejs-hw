const { writeUpdatedContact } = require("../models/contacts");
const { HttpError } = require("../helpers");

const updateContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await writeUpdatedContact(contactId, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateContact;