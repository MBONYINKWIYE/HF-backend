const multer = require('multer');
const path = require('path')

const upload = multer.diskStorage({
   storage:multer.diskStorage({}),
   fileFilter:(req, file, cb) =>{
    let ext = path.extname(file.originalname);
    if(ext !== '.jpg' && ext !== '.png'&& ext !=='.gif' && ext !== '.jpeg'){
        cb(new Error('File type not supported'), false);
    }
    cb(null, true);
   }
});

module.exports = upload;