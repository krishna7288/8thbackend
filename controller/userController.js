const userData = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const { userName, DOB, age } = req.body;
    const saveUser = new userData({
      userName: userName,
      DOB: DOB,
      age: age,
    });
    await saveUser.save();
    res.json({
      Data: saveUser,
      Message: "Data saved...",
    });
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};

const getUserData = async (req, res) => {
  try {

    const getUserData = await userData.find();

    res.json({
      UserData: getUserData,
    });
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};

const editData = async (req, res) => {
  try {
    const objectId = req.params.name;
    const { userName, DOB } = req.body;
    const editData = await userData.findByIdAndUpdate(
      objectId,
      { userName: userName, DOB: DOB },
      { new: true }
    );
    res.json({
      Data: editData,
    });
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};

const deleteUserData = async (req, res) => {
  try {
    const objectId = req.params.id;
    const deleteData = await userData.findByIdAndDelete(objectId);
    res.json({
      Data: deleteData,
      Message: "Data deleted..",
    });
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};

const fileUpload = async (req, res) => {
  try {
    const file = req.file;

    const saveFile = new userData({
      profile: file.filename,
    });

    await saveFile.save();

    res.json({
      Data: saveFile,
    });
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};

module.exports = {
  createUser,
  getUserData,
  editData,
  deleteUserData,
  fileUpload,
};
