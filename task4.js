function fullName(str){
    let a=str.split(' ')
    if (a.length<2){
        return "Xato ism va familya to'liq bo'lsin"

    }
    for (let i=0; i<a.length; i++){
        if(a[0]){
            c=a[i].slice(0,1)
            return `${c}.${a[1]}`

        }


    }

}
let str=prompt("Ism va familiyangizni kiriting")
alert(fullName(str))