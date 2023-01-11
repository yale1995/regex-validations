const brazilianCPF = '111.111.111-11'
const brazilianCPFRegex = /^(\d{3}\.){2}(\d{3}-)(\d{2})$/g
const removingNotNumberFromCPF = /\D/g

console.log(brazilianCPF.match(brazilianCPFRegex))
console.log(brazilianCPF.replace(/\D/g, ''))
console.log(brazilianCPFRegex.test(brazilianCPF))
