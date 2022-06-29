const express = require('express');
const cors = require('cors');
const app = express();
const { createUsers } = require('./controllers/users');
const verificationUserCreate = require('./middlewares/verificationUserCreate');
const uploadImage = require('./middlewares/uploudImage');

app.use(express.json());

app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

const PORT = 3001;

app.post('/create', uploadImage.single('image'), verificationUserCreate, createUsers);

app.listen(PORT, () => console.log(`executando na porta 3001.`));
