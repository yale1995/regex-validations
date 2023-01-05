const regexCNPJ = new RegExp("([0-9]{2}[\\.]?[0-9]{3}[\\.]?[0-9]{3}[\\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\\.]?[0-9]{3}[\\.]?[0-9]{3}[-]?[0-9]{2})")
const cnpj = '09890109450'
const result = regexCNPJ.test(cnpj)

console.log(result) // ==> this needs to return true when realy is a cpf