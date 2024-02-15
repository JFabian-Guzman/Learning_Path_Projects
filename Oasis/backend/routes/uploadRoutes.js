import path from 'path';
import express from 'express';
import multer from 'multer';
const router = express.Router();

const storage = multer.diskStorage({
  // Where to save the file
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    // Create a unique name for the file
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

// Check if the file is an image
function fileFilter(req, file, cb) {
  const filetypes = /jpe?g|png|webp/;
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = mimetypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Images only!'), false);
  }
}

const upload = multer({ storage, fileFilter });
const uploadManyImages = upload.array('images', 10);

router.post('/', (req, res) => {
  uploadManyImages(req, res, function (err) {
    if (err) {
      res.status(400).send({ message: err.message });
    }

    console.log(req.files);
    res.status(200).send({
      message: 'Images uploaded successfully',
      images: req.files,
    });
  });
});

export default router;