const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const {User} = require("../../models");

async function updateAvatar (req, res) {
    const {path: tempUpload, originalname} = req.file;
    const {_id: id} = req.user;
    const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

    try {
        const imageName = `${id}_${originalname}`;
        const resultUpload = path.join(avatarsDir, imageName);
        await fs.rename(tempUpload, resultUpload); 
        const avatarURL = path.join("public", "avatars", imageName);
        Jimp.read(avatarURL)
            .then(res => res.resize(250, 250).write(avatarURL))
            .catch(err => console.log(err));

        await User.findByIdAndUpdate(req.user._id, {avatarURL});
        
        res.status(200).json({
            avatarURL
        });
    } catch (error) {
        await fs.unlink(tempUpload);
        throw error;
    };
};

module.exports = updateAvatar;