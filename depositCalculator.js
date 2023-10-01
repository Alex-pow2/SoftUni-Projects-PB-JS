function depositCalculator (input){
let deposit = Number(input[0])
let time = Number (input [1])
let intrestrate = Number(input[2])

let totalForOneYear = deposit * ( intrestrate / 100 )
let totalForOneMonth = totalForOneYear / 12 
let totalMoney = deposit + (time*totalForOneMonth)

console.log(totalMoney)
}
depositCalculator (["200 ",
"3 ",
"5.7 "]
)