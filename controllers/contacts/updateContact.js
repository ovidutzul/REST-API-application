const { HttpError } = require("../../helpers/HttpError");
const contactsOperations = require("../../models/contacts");

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contactsOperations.updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    status: "success",
    code: 200,
    message: "contact updated",
    data: {
      result,
    },
  });
};

module.exports = updateContact;
