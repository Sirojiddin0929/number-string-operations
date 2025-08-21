function password(str){
    if(str.length<8){
        return "Kuchsiz parol chunki 8 ta belgidan kam"

    }
    if(!/[A-Z]/.test(str)){
        return "Kuchsiz parol chunki katta harflar yo'q"
    }
    if(!/[a-z]/.test(str)){
        return "Kuchsiz parol chunki kichik harflar yo'q" 

    }
    if(!/[0-9]/.test(str)){
        return "Kuchsiz parol chunki raqamlar yoq"

    }
    return "Kuchli parol"

}
let str=prompt("Parolni kirit")
alert(password(str))