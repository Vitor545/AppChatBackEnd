const multer = require('multer');

module.exports = (multer({
    storage: multer.diskStorage({
        destination: (_req, _file, cb) => {
            cb(null, '../uploads')
          },
          filename: (_req, file, cb) => {
            cb(null, Date.now().toString() + "_" + file.originalname);
          }
    }),
    fileFilter: (_req, file, cb) => {
        const tiposAceitos = ['image/png', 'image/jpeg', 'image/gif', 'image/jpg'].find(tiposAceitos => tiposAceitos === file.mimetype);
        if(tiposAceitos) {
            return cb(null, true);
        }
        return cb(null, false);
    }
  })   
)