const multer = require("multer");

// storage config
const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    const filename = `image-${Date.now()}.${file.originalname}`;
    callback(null, filename);
  },
});

// filter
const isImage = (req, file, callback) => {
  // console.log(file.mimetype);
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    // console.log("e part");
    callback(null, true);
  } else {
    callback(null, false);
    return callback(new Error("only .png .jpg & .jpeg formatted Allowed"));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

module.exports = upload;
