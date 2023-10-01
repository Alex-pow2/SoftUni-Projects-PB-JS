function architecht(input){
    let name=(input[0])
    let projects=(input[1])
   
    let hours= projects * 3
    console.log (`The architect ${name} will need ${hours} to complete ${projects}project/s.`)
}
architecht(["George","9"])