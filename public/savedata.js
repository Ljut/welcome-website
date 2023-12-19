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
/**
 * This function searches through an array of values and returns the index of the first element that matches a given value. 
 * If no matching elements are found, it returns -1.
 * 
 * @param arr An array of values to search through.
 * @param value The value to search for in the array.
 * @return The index of the first matching element, or -1 if no such elements are found.
 */
function getIndexByValue(arr, value) {
    return arr.indexOf(value);
}

/*Transforms passwd62(array) to word10(int) as number with base10. it should return Integer*/
/**
 * Transforms a base 62 encoded alphanumeric password into its equivalent decimal representation.
 * @param {string} passwd62 - The input password in base 62 encoding.
 * @returns {string} A string representing the transformed password in base 10 (decimal).
 */
function convert62toInt(passwd62) {
    console.log(passwd62)
    let passwd10 = 0
    for(let i=0;i<passwd62.length;i++) {
        passwd10 += passwd62[i]*Math.pow(62,passwd62.length-i-1)
    }
    return passwd10
}
/*Puts all characters from passwd(String) to passwd62(array) in base62(int) format*/
/**
 * Transforms a base 62 encoded alphanumeric password into its equivalent decimal representation.
 * @param {string} passwd - The input password in base 62 encoding.
 * @returns {Array<number>} An array of numbers representing the transformed password in base 10 (decimal).
 */
function convert62to10Array(passwd) {
    let passwd62 = []
    for(let i=0;i<passwd.length;i++) {
        passwd62.push(getIndexByValue(base62,passwd[i]))
    }
    return passwd62
}

function convert10to62(base10) {
    let word62 = []
    let base = 62;
    while(base10>base) {
        let kolicnik = parseInt(base10/base);
        let ostatak = base10%base;
        word62.push(base62[ostatak]);
        base10=kolicnik;
    }
    word62.push(base62[parseInt(base10)])
    word62.reverse()
    return word62
}

//Pogresno###
/**
 * Converts a base 62 encoded alphanumeric password into its equivalent decimal representation.
 * @param {string} passwd - The input password in base 62 encoding.
 * @param {Array<number>} passwd62 - An array of numbers representing the transformed password in base 10 (decimal).
 * @returns {string} A string representing the transformed password in decimal form.
 */
//Pogresno###
function convert62toString(passwd,passwd62) {
    let base62as10 = ""
    for(let i=0;i<passwd.length;i++) {
        //passwd62.push(getIndexByValue(base62,passwd[i]))
        base62as10 +=passwd62[i] + " "
    }
    return base62as10
}

function Stringof(word62, seperator="") {
    let text = word62[0]
    for(let i=1;i<word62.length;i++) {
        text += seperator + word62[i]
    }
    return text
}

function load() {
    let passwd = document.getElementById("passkey").value
    let base62as10 = ""
    let passwd62 = []
    let passwd10 = 0

    passwd62=convert62to10Array(passwd)
    base62as10 = convert62toString(passwd,passwd62)
    passwd10=convert62toInt(passwd62)

    
    document.getElementById("id").innerHTML = getIndexByValue(base62,passwd[0])
    document.getElementById("name").innerHTML = getIndexByValue(base62,passwd[1])
    document.getElementById("date").innerHTML = getIndexByValue(base62,passwd[2])
    document.getElementById("base62").innerHTML = base62as10
    document.getElementById("base10").innerHTML = passwd10
}

function load10() {
    let base10 = parseInt(document.getElementById("passkey10").value)
    
    let word62 = []

    word62 = convert10to62(base10)

    document.getElementById("id10").innerHTML = word62[0]
    document.getElementById("name10").innerHTML = word62[1]
    document.getElementById("date10").innerHTML = word62[2]
    document.getElementById("base6210").innerHTML = Stringof(word62, " ")
    document.getElementById("base1062").innerHTML = Stringof(word62)
}

document.addEventListener('DOMContentLoaded', function () {
    const ids = [
        {id:["title"],word:"Welcome F",base:62},
        {id:["f1","f2"],word:"A____",base:62}
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