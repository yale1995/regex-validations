const brazilianPhoneNumber = '(99)99999-9999'
const brazilianPhoneNumberRegex = /^\(\d{2}\)(\d{5}-)(\d{4})$/g
const gettingJustPhoneNumber = /\D/g

console.log(brazilianPhoneNumber.match(brazilianPhoneNumberRegex))
console.log(brazilianPhoneNumber.replace(gettingJustPhoneNumber, ''))

