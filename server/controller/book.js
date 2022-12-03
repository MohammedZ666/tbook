const Book = require("../model/book");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const publish = async (req, res) => {
  try {
    const editor = await User.findOne({
      email: req.body.email,
    });

    if (!editor || !bcrypt.compareSync(req.body.password, editor.password))
      return res.status(400).json({
        msg: "User not authorized, contact admin",
      });

    let keys = Object.keys(req.body);
    keys.forEach((item) => {
      if (!req.body[item])
        return res.status(400).json({
          msg: `${item} is empty`,
        });
    });
    const book = await Book.create(req.body);
    return res.status(200).json({
      msg: "Success!",
    });
  } catch (err) {
    res.status(400).json({
      msg: `Book publication failed${err}`,
    });
  }
};

const get_list = async (req, res) => {
  try {
    const articles = await Book.find({});
    return res.status(200).json({
      articles,
    });
  } catch (error) {
    res.status(400).json({
      msg: `No book found ${err}`,
    });
  }
};
const get = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findById({
      _id: id,
    });
    return res.status(200).json({
      book,
    });
  } catch (err) {
    res.status(400).json({
      msg: `No book found ${err}`,
    });
  }
};
module.exports = {
  publish,
  get_list,
  get,
};
