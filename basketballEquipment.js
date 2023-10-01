function basketballEquipment(input){
let annualTax = Number(input[0])

let sneackers = annualTax * 0.6 // 219 !!!!!!!!!!
let clothing = sneackers * 0.8 // 175 !!!!!!!!!
let ball = clothing * 0.25 // 43.80 !!!!!!
let acc = ball * 0.20 // 8.76 !!!!!

let total = sneackers+clothing+ball+acc+annualTax

console.log (total)

}
basketballEquipment(["365 "])