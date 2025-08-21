function conversition(son){
    if(isNaN(son)){
        return "Xatolik"
    }
    let b=+prompt("Dollar kursi qancha")
    a=parseInt(son)*b
    return a.toFixed(2)

}
let son=+prompt("Pul miqdori qancha")
alert(conversition(son))
