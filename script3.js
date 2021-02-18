// if bedingung

let a = 10;

if (a < 10) {

    console.log("a ist kleiner als 10");

} else {

    console.log("a ist größer gleich als 10");

}


// for schleife

for (let count = 10; count >= 0; count--) {
    console.log(count);
}

// von 15 bis 27

// von 111 bis 101

let random = Math.random() * 1000;
let randomAsInteger = Math.round(random);
console.log(randomAsInteger);

if (randomAsInteger > 500) {
    console.log("Bigger than 500");
}

// wenn größer als 800 
// wenn zw. 500 und 800
// wenn zw. 200 und 500
// wenn zw. 0 und 200

if (randomAsInteger > 800) {

} else if (randomAsInteger > 500) {
    // zw 500 und 800
} else if (randomAsInteger> 200){

} else{
    
}