let myDom = document;

let myApp = document.getElementById("app");

myApp.innerHTML = "Estoy modificando el palceholder...";


const myDog ={
    name:"pichicho"
}
const myCat = {
    "name": "sasha"
}

console.log(myDog);
console.log(myCat);

class Mouse {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

const myMouse = new Mouse("simon",3)