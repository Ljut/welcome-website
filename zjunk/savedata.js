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


class Person {
    constructor(id, name, date) {
        this.id = id;
        this.name = name;
        this.date = date;
    }
}

//1.Ime.1990.01.01
//1.19 23 15.01.01
//1

console.log(index62);

function load() {
    let passwd = document.getElementById("passkey").value
    
    //code
    console.log(passwd)
    //localStorage.setItem

    document.getElementById("id").innerHTML = passwd[0]
    document.getElementById("name").innerHTML = passwd[1]
    document.getElementById("date").innerHTML = passwd[2]

}

let id;
let name;
let date;