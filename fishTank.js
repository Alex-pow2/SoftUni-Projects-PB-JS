function fishTank(input){
    let lenght = Number(input[0])
    let widht = Number(input[1])
    let height = Number (input[2])
    let pr = Number (input[3])
    
    let cubicCm = lenght*widht*height
    let cubicM =cubicCm /1000
    let usedSpace = cubicM * 0.17
    let totalSpace = cubicM-usedSpace


    console.log (totalSpace)
}

fishTank(["85 ","75 ","47 ","17 "])