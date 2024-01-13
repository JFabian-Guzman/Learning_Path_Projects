import path from 'path'
import express from 'express'
import multer from 'multer'
const router = express.Router();

// Note: You can use other proveider's storage
const storage = multer.diskStorage({
  // Describe where we want to save
  destination( req, file, cb/*callback*/) {
    cb(null/*Errors*/, 'uploads/'/*Place we want uploads to go*/)
  },
  filename( req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.
      originalname)}`)
  }
});

function checkFileType(file, cb) {
  // What we want to allow
  const filetypes = /jpg|jpeg|png/;
  // Check if extention name match
  const extname = filetypes.test(path.extname(file.originalname).
  toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only!');
  }
}

const upload = multer({
  storage,
});

router.post('/', upload.single('image'/*Fieldname*/), (req, res) => {
  res.send({
    message: 'Image Uploaded',
    image: `/${req.file.path}`,
  });
});


export default router;