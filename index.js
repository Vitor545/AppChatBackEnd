const express = require('express');
const cors = require('cors');
const { createUsers } = require('./controllers/users');
const verificationUserCreate = require('./middlewares/verificationUserCreate');
const uploudimage = require('./middlewares/uploudimage');

const app = express();
app.use(express.json());
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization');
    app.use(cors());
    next();
});

const PORT = 3001;

app.post('/create', verificationUserCreate, uploudimage.single('image'), createUsers);

app.listen(PORT, () => console.log(`executando na porta 3001.`));
