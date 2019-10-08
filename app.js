const express = require('express');
const bodyParser = require('body-parser')
const bd = require('./bd');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.send('<h1>app Online!<h1>')
});

app.get('/alunos', (req, res) => {
    res.json(bd.getAluno());
});

app.get('/alunos/:id', (req, res) => {
    bd.addAluno(req.body);
    res.send('aluno adicionado com sucesso!');
});

app.get('/professores', (req, res)=> {
    res.json(bd.getProfessores());
});

app.listen(3000, () => console.log('servidor online'));