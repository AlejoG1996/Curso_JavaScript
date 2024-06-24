const fruits=Array('apple','banana','orange')
console.log(fruits)
const justOneNumber=Array(12)
console.log(justOneNumber)
const number=Array(1,2,3,4,5)
console.log(number)
const oneNumber=[4]
console.log(oneNumber)
const emptyArray=[]
console.log(emptyArray)
const sports=['soccer','tennis','rugby']
console.log(sports)
const recipeIngredients=['Flour',true,2,{ingredient:'Milk',quantity:'1 cup'},false]
console.log(recipeIngredients)
const firstFruit=fruits[0]
console.log(firstFruit)
const numberOfFruits=fruits.length
console.log(numberOfFruits)

/*mutabilida e immutabilidad */
fruits.push('watermelon')
console.log(fruits)
const newFruits=fruits.concat(['grape','kiwi'])
console.log(fruits)
console.log(newFruits)
const isArray=Array.isArray(fruits)
console.log(isArray)
const numbersArray=[1,2,3,4,5]
let sum=0
for(let i=0;i<numbersArray.length;i++){sum+=numbersArray[i]}
console.log(sum)