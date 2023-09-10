// 1 variabel
var nama = "Putri Indah";
let umur = 21;
const alamat = "Banyuwangi";
console.log(nama);
console.log(umur);
console.log(alamat);

// 2 tipe data
let n = 25 //number
let inf = 100/0; //infinity
console.log(inf);
let bigInt = 123454873487487378; //bigInt
const kelas = "bunga"; //string

let oke = true; //boolean
let ya = 10 < 5;

let pacar = null; //null
let name; //undifined

//object
console.log(name);
let employee = {
    age: "20",
    job: "web developer",
    hobby:["makan", 'rebahan'],
}
console.log(employee);

// 3 tipe conversi
//string
umur = String(umur);
console.log(typeof umur);

// numeric
let str = "123";
console.log(typeof str);
let num = Number(str);
console.log(typeof str);

//boolean
// Nilai 0, String yang kosong, null, undefined, and NaN, menjadi false.
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("Hello"));
console.log(Boolean(""));

// 4 opertator js
// aritmatika
let a = 10;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// operator penugasan
a+=5;
console.log(a);

// operator perbandingan
console.log(a == b);
console.log(a < b);
console.log(a > b);
console.log(a != b);

//operator logika
let c = true;
let d = false;
console.log(c && d);
console.log(c || d);
console.log(!c);

//operator bitwise
console.log(a & b);
console.log(a | b);
console.log(a ^ b);
console.log(~a);

//operator ternary
let e = 1;
let f = 1;
console.log(e == f ? "yes" : "no");

//5 pop up box
//alert
alert("selamat datang");

//prompt
let response = prompt("apakah kamu akan keluar?");
alert("jawabannya adalah " + response);

// confirm
let respon = confirm("mau dinner ngga?");
alert("jawabannya : " + respon);

// 6 kondisional / percabangan
// if
let bunga = prompt("1 + 1 =")
if (bunga == 2) {
    alert("correct!");
}
// else if
else if(bunga < 2){
    alert("to low!");
}
// if else
else {
    alert("wrong!");
}

//switch
let color = "red";
switch(color) {
    case "red":
        alert("i love red");
        break;
    case "blue":
        alert("i love blue");
        break;
    default:
        alert("i don't know what color it is!");
        break;
}

// 7 looping / perulangan
// for
let i = 10;
for (let i = 0; i < 5; i++) {
    console.log(`iterasi ke ${i}`);
}

// do while
do{
    console.log(`iterasi ke ${i}`);
    i+=1;
} while(i < 5);

// while
while(i < 5) {
    console.log(`iterasi ke ${i}`);
    i++;
}

// break
for (let i = 0; i < 5; i++) {
    if (i==3) {
        break;
    }
    console.log(`iterasi ke ${i}`);
}

//continue
for (let i = 0; i < 5; i++) {
    if (i==3) {
        continue;
    }
    console.log(`iterasi ke ${i}`);
}
