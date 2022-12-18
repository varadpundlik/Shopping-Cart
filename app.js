const express = require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const routes=require('./routes/api/routes')

const app = express()
const port = 5000

app.use(express.json());
app.use(cors());

app.use('/',routes);
app.use("*", (req, res) => res.status(404).json({ error: "not found"}));

mongoose.connect("mongodb://localhost:27017/shopDB")
.then(console.log("DB connected"))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
