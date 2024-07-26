const mongoose = require("mongoose");
const user = require("../models/users.model");

exports.createuser = async (req, res) => {
  try {
    const userRequest = req.body;
    console.log(userRequest);
    const userData = new user(userRequest);
    await userData.save();
    return res.status(201).json(userData);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const dbData = await user.find();
    console.log(dbData);
    return res.status(200).json(dbData);
  } catch (err) {
    console.log(err);
    return res.status(501).json({ message: err.message });
  }
};
