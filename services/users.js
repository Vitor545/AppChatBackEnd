const { ChatBox } = require('../models');
const imgbbUploader = require("imgbb-uploader");

const create = async (fistername, lastname, email, password, image) => {
    const verificaUser = await ChatBox.findOne({ where: { email } });
    if (verificaUser) return 'Usuário já existe.'
    imgbbUploader("3590c2770054d47be40842aacedc8afa", `./uploads/${image}`)
    .then(async (response) => {
        const create = await ChatBox.create({ fistername, lastname, email, password, image: response.url });
        return create;
    })
    .catch((error) => console.error(error));
    return {create: 'create'};
};

module.exports = {
create
};