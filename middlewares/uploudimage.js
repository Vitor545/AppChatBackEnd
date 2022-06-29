const multer = require('multer');

module.exports = (multer({
    storage: multer.diskStorage({
        destination: (_req, _file, cb) => {
            cb(null, './uploads')
        },
        filename: (_req, file, cb) => {
            cb(null, Date.now().toString() + "_" + file.originalname)  
        }
    }),
    fileFilter: (_req, file, cb) => {
        const typeTrue = ['image/png', 'image/jpg', 'image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype);

        if(typeTrue){
            return cb(null, true);
        }

        return cb(null, false);
    }
}));