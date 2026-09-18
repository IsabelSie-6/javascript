let a = (1 < 2) || (3 > 4)  // true || false = true 
let b = ( 1 > 2 ) || (3 > 4) // false || FALSE = false
let c = (10 < 20) && (30 > 40) // true && false = false
let d = (20 < 30) && !(30 > 40) // true && !false = true 
console.log(a,b,c,d) 