const HttpError = require("../../helpers/HttpError");
const sendEmail = require("../../helpers/sendEmail");
const { User } = require("../../models/user");

const resentVerifyEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw HttpError(401, "Email not found");
    }
    if (user.verify) {
      throw HttpError(400, "Verification has already been passed");
    }
    const verifyEmail = {
      to: email,
      subject: "Verify email",
      html: `<a target='_blank' href='${process.env.BASE_URL}/users/verify/${user.verificationToken}'>Click to verify email</a>`,
    };
    await sendEmail(verifyEmail);
    res.status(200).json({ message: "Verification email sent" });
  } catch (error) {
    next(error);
  }
};

module.exports = resentVerifyEmail;
