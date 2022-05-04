// Initializing id numbers
let id = 0;

class Client {
    constructor(name, cpf, email, address) {
        // Auto-generating client ID
        this.id = ++id;
        this.name = name;
        this.cpf = cpf;
        this.email = this.validateEmail(email);
        this.address = address;
    }

    validateEmail(email) {
        // Using regex to validate email form
        if (email.match(
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        )) {
            return email;
        } else {
            throw new Error("Incorrect email")
        }
    }
    
}

// module.exports = Client;