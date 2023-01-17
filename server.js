const express = require("express");
const admin = require("firebase-admin");
const bcrypt = require("bcrypt");
const path = require("path");

let staticPath = path.join(__dirname, 'public')

const app = express()



app.use(express.static(staticPath));
app.use(express.json());


app.get("/inscrição", (req,res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

app.get('/inscrição', (req,res) => {
    res.sendFile(path.join(staticPath, 'inscrição.html'))
})

app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, '404.html'));
})

app.use((req, res) => {
    res.redirect('404.html');
})

app.listen(3000, () => {
    console.log('listening on port 3000......')
})

app.post('/inscrição', (req, res) => {
    let {Nome, Email, Senha, Número} = req.body
    res.json('data received')
})