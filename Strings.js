String methods 
===========================================

const message = '    Hello Javascript Students     '
const msgToLowerCase = message.toLowerCase()
const msgToUpperCase = message.toUpperCase()
const messageNoSpaces = message.trim()
const newMessage = message.replace('Students', 'Engineers')
const withSubString = message.substring(9, 14)
message.startsWith('Hello')

console.log(message)
console.log(msgToLowerCase)
console.log(msgToUpperCase)
console.log(messageNoSpaces)
console.log(newMessage)
console.log(withSubString)
console.log(messageNoSpaces.startsWith('Hello')) // true
console.log(messageNoSpaces.endsWith('Students')) // true
console.log(message.includes('Javascript')) // true

const mySchool = 'Boca Code'
const myIndex =  mySchool.indexOf('Code')
console.log(myIndex)

const myString = 'Hello-level-up-students!'
const newString =  myString.split('l')
console.log(newString.reverse())



/******Comparisons */

// let isEqual = 78 < 90 // true
// isEqual = 78 <= 78 // true
// isEqual = 78 >= 100 // true
// isEqual = 78 != 100 // false
// console.log(isEqual)






























