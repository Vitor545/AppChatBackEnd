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
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (_req, file, cb) => {
        const typeTrue = ['image/png', 'image/jpg', 'image/jpeg'];

        if(typeTrue.includes(file.mimetype)){
            return cb(null, true);
        }

        return cb(null, false);
    },
    onError : function(err, next) {
        next(err);
      }
}));