const express = require("express")
const rotas = require("./server/rotas")
const bodyParser = require('body-parser')
const app = express();
const PORT = 3010;
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json()); 
app.use(rotas)

app.listen(PORT, () => {
    console.log("API Aberta Porta -> " + PORT)
    console.log()
})