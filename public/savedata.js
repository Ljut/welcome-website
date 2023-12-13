var base62 = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

var index62 = Array.from({ length: 62 }, (_, index) => index);

function getIndexByValue(arr, value) {
    return arr.indexOf(value);
}

function transform10to62(passwd62) {
    let passwd10 = 0
    for(let i=0;i<passwd62.length;i++) {
        passwd10 += passwd62[i]*Math.pow(62,passwd62.length-i-1)
        console.log(passwd10 + " " + passwd62[i] + "*" + (passwd62.length-i-1))
    }
    return passwd10
}

function transform62to10(passwd) {
    let passwd62 = []
    let base62as10 = ""
    for(let i=0;i<passwd.length;i++) {
        passwd62.push(getIndexByValue(base62,passwd[i]))
        //base62as10 +=passwd62[i] + " "
    }
    //console.log(passwd62)
    return passwd62
}

console.log(index62.length);

function load() {
    let passwd = document.getElementById("passkey").value
    let base62as10 = ""
    let passwd62 = []
    let passwd10 = 0

    //code
    console.log(passwd)
    //localStorage.setItem

    document.getElementById("id").innerHTML = getIndexByValue(base62,passwd[0])
    document.getElementById("name").innerHTML = getIndexByValue(base62,passwd[1])
    document.getElementById("date").innerHTML = getIndexByValue(base62,passwd[2])

    // transfrom10to62(passwd);

    
    //passwd=transform62to10(passwd);


    //transformfrom62to10()
    for(let i=0;i<passwd.length;i++) {
        passwd62.push(getIndexByValue(base62,passwd[i]))
        base62as10 +=passwd62[i] + " "
    }
    console.log(passwd62)
    document.getElementById("base62").innerHTML = base62as10

    //let passwd10 = transform10to62(passwd62)
    
    //transformfrom10to62()
    for(let i=0;i<passwd62.length;i++) {
        passwd10 += passwd62[i]*Math.pow(62,passwd62.length-i-1)
        console.log(passwd10 + " " + passwd62[i] + "*" + (passwd62.length-i-1))
    }
    
    document.getElementById("base10").innerHTML = passwd10
}

document.addEventListener('DOMContentLoaded', function () {
    let ids = ["f","f1"]
    document.getElementById("f").innerHTML = "A____"
    document.getElementById("f1").innerHTML = "A___"
})//9 618 827