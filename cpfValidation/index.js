const regexCPF = new RegExp("[0-9]{3}\\.?[0-9]{3}\\.?[0-9]{3}\\-?[0-9]{2}")
const cpf = '098.901.094-50'
const result = regexCPF.test(cpf)

console.log(result) // ==> this needs to return true when realy is a cpf