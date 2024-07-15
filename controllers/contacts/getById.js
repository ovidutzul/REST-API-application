const contactsOperations = require("../../models/contacts");
const { HttpError } = require("../../helpers/HttpError");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contactsOperations.getContactById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    status: "success",
    code: 200,
    message: "contact found",
    data: {
      result: result,
    },
  });
};

module.exports = getById;
