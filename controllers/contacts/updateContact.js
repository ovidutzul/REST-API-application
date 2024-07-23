const { HttpError } = require("../../helpers/HttpError");
const Contact = require("../../models/contact");

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
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
