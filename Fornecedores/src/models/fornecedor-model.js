let id = 0

class fornecedor {
    constructor(categoria, razaoSocial, nomeFantasia, cnpj, endereco, email, telefone, status) {
        this.id = id++;
        this.categoria = categoria;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
        this.status = this.validaStatus(status);
    }

    validaStatus(status){
        const statusValidos = ["ATIVO", "INATIVO", "EM NEGOCIAÇÃO"]
        if (statusValidos.indexOf(status) > -1) {
            return status
        } else {
            throw new Error("O status deve ser igual a: ATIVO, INATIVO, EM NEGOCIAÇÃO")
        }
    }
}
module.exports = fornecedor