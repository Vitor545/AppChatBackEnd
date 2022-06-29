const Users = require("../services/users");

const createUsers = async (req, res, _next) => {
    const { fistername, lastname, email, password, image } = req.body;
    const create = await Users.create( fistername, lastname, email, password, image );
    if(typeof create === 'string') return res.status(401).json({message: create});
    return res.status(201).json(create);
};

const getUsers = async (req, res, next) => {
    
};

module.exports = {
createUsers,
getUsers
};