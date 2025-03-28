if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}
const { storage } = require('./cloudinary/images')
const express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())
const port = 8080
const multer = require('multer')
const upload = multer({ storage })
const Photo = require('./models/photo')

const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/image-gallery');
  console.log("Database connected...");
}

app.post('/', upload.single('image'), async (req, res, next) => {
  try {
    console.log(req.file);
    const { title } = req.body;
    const { path, filename } = req.file;
    const image = new Photo({
      title: title,
      url: path,
      filename: filename
    });
    await image.save();
  } catch (e) {
    console.log(e);
  }
})

app.get('/', async (req,res) =>{
  const images = await Photo.find();
 res.json(images);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});