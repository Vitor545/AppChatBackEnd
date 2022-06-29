const passwordRegexp = require("password-regexp")();
var emailValidator = require("email-validator");

const verificationUserCreate = (req, res, next) => {
        console.log(req.file)
        const { fistername, lastname, email, password } = req.body;
        if(!fistername) return res.status(401).send({message:'Primeiro nome é necessário'});
        if(typeof fistername !== 'string') return res.status(401).send({message:'Primeiro nome inválido'});
        if(!lastname) return res.status(401).send({message:'Último nome é necessário'});
        if(typeof lastname !== 'string') return res.status(401).send({message:'Último nome inválido'});
        if(!email) return res.status(401).send({message:'Email é necessário'});
        const emailvalidator = emailValidator.validate(email);
        if(!emailvalidator) return res.status(401).send({message:'Email inválido, formato aceito teste@teste.com'});
        if(!password) return res.status(401).send({message:'Senha é necessária'});
        const passwordValidator = passwordRegexp.test(password);
        if(!passwordValidator) return res.status(401).send({message:'Senha inválida, digite uma senha mais forte'});
        if(!req.file) return res.status(401).send({message:'Imagem é necessária, os formatos aceitos são png, gif, jpg e jpeg'});
        next();
};

module.exports = verificationUserCreate;