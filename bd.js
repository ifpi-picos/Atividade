class BancoDeDados {
  constructor(){
    this.alunos = [];
    this.professores = [];
  };

getAlunos() {
  return this.alunos;
}

getAlunosPorId (id) {

}

addAluno(aluno){
  this.alunos.push(aluno);
}

getProfessores() {
  return this.professores;
}

getProfessoresPorId (id) {

}

addProfessores(Professor){
  this.professores.push(professor);
}
}

module.exports = new BancoDeDados();