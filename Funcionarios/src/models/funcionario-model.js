class Funcionario{
    constructor(nome, sobrenome, matricula, senha){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.matricula = matricula;
        this.senha = this.verificaSenha(senha);
    }
    verificaSenha(senha){
        if(senha.length >= 5){
              return senha
        }else{
            throw new Error("Senha deve ter no minimo 5 caracteres")
        }
    }
}

module.exports = Funcionario;