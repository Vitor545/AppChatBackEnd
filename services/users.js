const { ChatBox } = require('../models');

const create = async (fistername, lastname, email, password, image) => {
    const verificaUser = await ChatBox.findOne({ where: { email } });
    if (verificaUser) return 'Usuário já existe.'
    const create = await ChatBox.create({ fistername, lastname, email, password, image });
    return create;
};

module.exports = {
create
};