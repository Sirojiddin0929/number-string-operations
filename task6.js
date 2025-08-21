function commence(str,char) {
    let obj = {}
    if(char.length>1){
        return "Xatolik"

    }
    for (let i = 0; i < str.length; i++) {
        let a = str[i].toLowerCase()
        obj[a] = (obj[a] || 0) + 1
    }
    
    for(let key in obj){
        if(char.toLowerCase()===key){
            return obj[key]

    }
    return 0
    
}
}
let str=prompt("Stringni kirit")
let char=prompt("Belgini kirit")
alert(commence(str,char))