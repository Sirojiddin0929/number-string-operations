function time(a){
    if(a>0){
        return `${parseInt(a/60)} soat ${a%60} daqiqa`
    }
    return "Xato son kiritdiz"

}
let a=+prompt("Necha daqiqa")
alert(time(a))