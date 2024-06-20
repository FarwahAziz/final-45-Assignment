//assignment 24

import { toASCII } from "punycode"

//equality and unequlity test
console.log("equality test with string" ,'Apple' === 'Apple')
//inequality test
console.log("inequality test with string" ,"Apple" as string != 'orange')
//testing lower case function
console.log("Testing lower case test" ,"HELLO".toLowerCase() === 'hello')
console.log("Testing lower case test" ,"HELLO".toLowerCase() != 'HELLO')
//numerical test
console.log("testing inequality with numbers:", '26'=== '26')
console.log("testing inequality with numbers:", 26!= 26)
//greater and less than test
console.log("testing number greater or lesser;", 10 > 5)
console.log("testing greater than and equal to:",'10'>='10')

//testing 'and' 'or' operator
console.log("And operator testz:", 5 ===5 && 10>5)
console.log("or operator test: ",2===2|| false)

//tst weather statement is array

let fruits:string[]=["apple","orange","banana"]
console.log('test "apple" in the array', fruits.includes("apple"));
console.log('testing "peach" is not in array:' , fruits.includes('peach'))

