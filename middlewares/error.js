const error = (err, req, res, next) => {
    if(err.message === 'File too large') return res.status(500).send({message:'Imagem deve ser menor que 2 MB'});
    return res.status(500).send(err.message);
};

module.exports = error;