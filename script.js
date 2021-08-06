const arrayCollors = ["yellow", "blue", "red", "orange"]
let i = 0

while( i < arrayCollors.length){
    console.log(arrayCollors[i])
    i++;
}

for (let i = 0; i < arrayCollors.length; i++){
    console.log(arrayCollors[i])
}


arrayCollors.forEach(color => console.log(color))


// while loop neemt 4 regels in beslag
// for loop neemt 2 regels in beslag
// forEach neemt maar 1 regel in beslag


// minder kans op fouten forEach is makkelijker leesbaar

const object = { 
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5 };


    for (const property in object) {
        console.log(object[property]);}


