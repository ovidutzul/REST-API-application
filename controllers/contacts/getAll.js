const { Contact } = require("../../models");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;

  let contacts;
  if (favorite) {
    contacts = await Contact.find({ owner, favorite }, "", {
      skip,
      limit,
    }).populate("owner", "email subscription");
  } else {
    contacts = await Contact.find({ owner }, "", {
      skip,
      limit,
    }).populate("owner", "email subscription");
  }

  res.json({
    status: "success",
    code: 200,
    contacts,
  });
};

module.exports = getAll;
