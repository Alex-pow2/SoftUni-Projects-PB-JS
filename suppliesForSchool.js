function suppliesForSchool (input){
let countPencil = Number(input[0])
let countSharpie = Number (input[1])
let literCleaner = Number (input[2])
let discount = Number (input[3])

let pencilPrice = countPencil * 5.80
let sharpiePrice = countSharpie * 7.20
let cleanerPrice = literCleaner * 1.20
totalPrice = pencilPrice + sharpiePrice + cleanerPrice


console.log (totalPrice - (totalPrice *(discount /100 )))


}

suppliesForSchool(["2 ","3 ","4 ","25 "])