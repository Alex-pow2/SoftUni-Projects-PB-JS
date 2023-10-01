function repainting (input){
let nylonAmount = Number(input[0])
let paintAmount = Number(input[1])
let paintThinnerAmount = Number (input[2])
let labourHours = Number (input[3])

let nylonPrice = (nylonAmount + 2) * 1.50
let paintPrice = (paintAmount * 1.1) * 14.50
let paintThinnerPrice = paintThinnerAmount * 5
let bagPrice = 0.40
let materialPrice = nylonPrice + paintPrice + paintThinnerPrice + bagPrice
let labourHoursPrice = materialPrice * 0.30
let labourPrice = labourHoursPrice * labourHours
let totalPrice = labourPrice + materialPrice

console.log (totalPrice)

}

repainting (["10 ","11 ","4 ","8 "])