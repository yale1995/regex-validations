const brazilianCpf = '111.111.111-11'
const brazilianCpfRegex = /^(\d{3}\.){2}(\d{3}-)(\d{2})$/g
const removingNotNumberCPF = /\D/g

console.log(brazilianCpf.match(brazilianCpfRegex))
console.log(brazilianCpf.replace(/\D/g, ''))
