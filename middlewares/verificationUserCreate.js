const passwordRegexp = require("password-regexp")();
var emailValidator = require("email-validator");

const verificationUserCreate = (req, res, next) => {
    try {
        const { fistername, lastname, email, password } = req.body;
        if(!fistername) return res.status(401).send({message:'Primeiro nome é necessário'});
        if(typeof fistername !== 'string') return res.status(401).send({message:'Primeiro nome inválido'});
        if(!lastname) return res.status(401).send({message:'Último nome é necessário'});
        if(typeof lastname !== 'string') return res.status(401).send({message:'Último nome inválido'});
        if(!email) return res.status(401).send({message:'Email é necessário'});
        if(!password) return res.status(401).send({message:'Senha é necessário'});
        if(!image) return res.status(401).send({message:'Imagem é necessário'});
        const passwordValidator = passwordRegexp.test(password);
        const emailvalidator = emailValidator.validate(email);
        if(!emailvalidator) return res.status(401).send({message:'Email inválido, formato aceito teste@teste.com'});
        if(!passwordValidator) return res.status(401).send({message:'Senha inválida, digite uma senha mais forte'});
        next();
    } catch (err) {
        return res.status(401).send({message:'Error: ' + err.message})
    }
};

module.exports = verificationUserCreate;