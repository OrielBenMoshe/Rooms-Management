const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const fileFilter = (req, file, callBack) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    callBack(null, true);
  }
  callBack(null, false);
} 

const upload = multer({
  // dest: 'uploads/',
  storage,
  limits: {
    fileSize: 1024*1024 *2
  },
  fileFilter
})

module.exports = upload;