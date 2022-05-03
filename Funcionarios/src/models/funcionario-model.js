class Funcionario{
    constructor(nome, sobrenome, matricula, senha){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.matricula = matricula;
        this.senha = this.verificasenha(senha);
    }
    verificasenha(senha){
        if(senha.length >= 4){
              return senha
        }else{
            throw new Error("Senha deve ter no minimo 4 caracteres")
        }
    }
}
module.exports = Funcionario;