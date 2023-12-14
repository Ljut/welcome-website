const base = 62
const base62 = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

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

function base62toString(passwd,passwd62) {
    let base62as10 = ""
    for(let i=0;i<passwd.length;i++) {
        //passwd62.push(getIndexByValue(base62,passwd[i]))
        base62as10 +=passwd62[i] + " "
    }
    return base62as10
}


function load() {
    let passwd = document.getElementById("passkey").value
    console.log(passwd)
    let base62as10 = ""
    let passwd62 = []
    let passwd10 = 0

    passwd62=transform62to10(passwd)
    base62as10 = base62toString(passwd,passwd62)
    passwd10=transform10to62(passwd62)

    
    document.getElementById("id").innerHTML = getIndexByValue(base62,passwd[0])
    document.getElementById("name").innerHTML = getIndexByValue(base62,passwd[1])
    document.getElementById("date").innerHTML = getIndexByValue(base62,passwd[2])
    document.getElementById("base62").innerHTML = base62as10
    document.getElementById("base10").innerHTML = passwd10
}

document.addEventListener('DOMContentLoaded', function () {
    const ids = [
        {id:["title"],word:"Welcome F"},
        {id:["f1","f2"],word:"A____"}
    ]

    for(let i=0;i<ids.length;i++) {
        for(let j=0;j<ids[i].id.length;j++) {
            try {   
                document.getElementById(ids[i].id[j]).innerHTML = ids[i].word
            } catch(err) {
                console.error("Error cought on id: " + ids[i].id[j])
            }
        }
    }
})