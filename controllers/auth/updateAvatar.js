const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");

const { User } = require("../../models");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalName } = req.file;

  const filename = `${_id}_${originalName}`;
  const resultUpload = path.join(avatarDir, filename);

  Jimp.read(tempUpload, (_, filename) => {
    filename.resize(250, 250).write(resultUpload);
  });

  await fs.rename(tempUpload, resultUpload);
  const avatarUrl = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarUrl });

  res.json({
    message: "Your avatar uploaded",
    avatarUrl,
  });
};

module.exports = updateAvatar;
