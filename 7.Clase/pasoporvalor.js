//paso por valor
let x=1
let y='Hola'
let z=null

let a=x
let b=y
let c=z

console.log(x,y,z,a,b,c)

a=12
b='Platzi'
c=undefined

//paso por referencia
let frutas=['manzana']
frutas.push('pera')
console.log(frutas)
let panes=['ðŸ¥']
let copiaDePanes=panes
panes.push('ðŸ¥–')
console.log(panes,copiaDePanes)