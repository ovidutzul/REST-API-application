const Contact = require("../../models/contact");
const { HttpError } = require("../../helpers/HttpError");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true }
  );
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json({
    status: "success",
    code: 200,
    message: "status updated",
    data: {
      result,
    },
  });
};

module.exports = updateStatusContact;
