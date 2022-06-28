const express = require('express');
const cors = require('cors');
const { ChatBox } = require('./models')

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.post('/create', async (req, res) => {

    const { fistername, lastname, email, password, image } = req.body;
  
    const create = await ChatBox.create({ fistername, lastname, email, password, image });
  
    return res.status(201).json(create);
  });

app.listen(PORT, () => console.log(`executando na porta 3001.`));
