function foodDelivery(input){
let chicken = Number(input[0])
let fish = Number(input[1])
let vegi = Number(input[2])

let chickenPrice = chicken * 10.35
let fishPrice = fish * 12.40
let vegiPrice = vegi * 8.15

let foodPrice = chickenPrice + fishPrice + vegiPrice
let desert = foodPrice * 0.20

let totalPrice = foodPrice + desert + 2.50

console.log(totalPrice)

}

foodDelivery(["2 ","4 ","3 "])