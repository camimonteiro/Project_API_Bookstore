// Initializing id numbers
let id = 0;

class Client {
    constructor(name, cpf, email, address) {
        // Auto-generating client ID
        this.id = ++id;
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.address = address;
    }

    // Inserir validações: CPF e email
}

module.exports = Client;