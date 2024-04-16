const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  createUser,
  getUserData,
  editData,
  deleteUserData,
  fileUpload,
} = require("../controller/userController");

const storage = multer.diskStorage({
  destination: "./public/userProfile",
  filename: (req, file, cb) => {
    const uniqueId = Date.now();
    const fileFormate = file.originalname.split(".").pop();
    const fileName = file.originalname;
    cb(null, `${fileName}-${uniqueId}.${fileFormate}`);
  },
});

const upload = multer({ storage: storage });

const singleUpload = upload.single("profile");

router.post("/post", createUser);

router.get("/getdata", getUserData);

router.put("/put/:name", editData);

router.delete("/delete/:id", deleteUserData);

router.post("/file", singleUpload, fileUpload);

module.exports = router;
