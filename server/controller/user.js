const User = require("../model/user");
const bcrypt = require("bcrypt");

const create = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!(email || password))
      return res.status(400).json({
        msg: "User email or password field is empty",
      });

    password = bcrypt.hashSync(password, bcrypt.genSaltSync());
    let user = await User.create(
      {
        email,
        password,
      },
      {
        upsert: true,
        new: true,
      }
    ).select("-password");
    return res.status(200).json({
      msg: "Success!",
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      msg: `User creation failed ${err}`,
    });
  }
};
const get = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    return res.status(200).json({
      msg: user,
    });
  } catch (err) {
    return res.status(400).json({
      msg: `User not found failed ${err}`,
    });
  }
};
module.exports = {
  create,
  get,
};
