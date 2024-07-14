const { HttpError } = require("../../helpers/HttpError");
const contactsOperations = require("../../models/contacts");

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.removeContact(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
    data: {
      result: result,
    },
  });
};

module.exports = deleteContact;
