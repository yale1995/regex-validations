const brazilianCNPJ = '42.332.359/0001-06'
const brazilianCNPJRegex = /^(\d{2}\.)(\d{3}\.)(\d{3}\/)(\d{4}-)(\d{2})$/g
const removingNotNumberFromCNPJ = /\D/g

console.log(brazilianCNPJ.match(brazilianCNPJRegex))
console.log(brazilianCNPJ.replace(/\D/g, ''))
console.log(brazilianCNPJRegex.test(brazilianCNPJ))
