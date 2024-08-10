const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  // const result = await Contact.findOne({ _id: contactId });
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, `Contact with id=${contactId} not found`);
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
