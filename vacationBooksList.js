function vacationBooksList (input){

    let bookPages = Number(input[0])
    let pagesPerHour = Number(input[1])
    let daysPerBook = Number(input[2])

    let totalTime = bookPages / pagesPerHour
    let hoursPerDay = totalTime / 2



    console.log (hoursPerDay)

}


vacationBooksList (["212 ","20 ","2 "])