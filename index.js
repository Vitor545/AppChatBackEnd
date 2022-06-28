const express = require('express');
const cors = require('cors');
const { ChatBox } = require('./models')

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.listen(PORT, () => console.log(`executando na porta 3001.`));
