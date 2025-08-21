function shopping(a,b){
    if(a*b>=100000){
        return `Chegirma qilindi: ${parseInt(0.9*a*b)}`

    }
    if(isNaN(a) || isNaN(b)){
        return "Tentakmisan"
    }
    return parseInt(a*b)

}
let a=+prompt("Necha kg")
let b=+prompt("Narxi qancha")
alert(shopping(a,b))