function exchange(str){
    for (let i=0; i<str.length; i++){
        if(/[0-9]/.test(str[i])){
            str=str.replace(str[i],'*')

        }
    }
    return str

}
let str=prompt("Stringni kirit")
alert(exchange(str))