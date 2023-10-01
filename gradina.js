function gradina(input){
    let area =Number(input[0])
    let price =area * 7.61
    let discount = price * 0.18
    let totalprice = price-discount
    
console.log(`The final price is: ${totalprice} lv.`)
    console.log(`The discount is: ${discount} lv.`)


}


gradina([550])