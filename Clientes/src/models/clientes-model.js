// Initializing id numbers
let id = 0;

class Cliente {
    constructor(nome, cpf, email, endereco) {
        // Auto-generating client ID
        this.id = ++id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.endereco = endereco;
    }

    // Inserir validações: CPF e email
}

module.exports = Cliente;