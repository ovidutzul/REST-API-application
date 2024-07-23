const Contact = require("../../models/contact");

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json({
    status: "succes",
    code: 201,
    message: "new contact added",
    data: {
      result,
    },
  });
};

module.exports = addContact;
