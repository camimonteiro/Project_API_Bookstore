var id = 0;
class funcionarios{
    constructor(nome, senha){
        this.id = id++;
        this.nome = nome;
        this.senha = this.validarsenha(senha);
    }
    validarsenha(senha){
        if(senha.length >= 8){
            return (senha)
        }else{
            throw new Error("Senha deve ter no minimo 8 caractres")
        }
    }
}
