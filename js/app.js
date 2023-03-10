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

// class Mouse {
//     constructor(name, age){
//         this.nombre = name; //this. -->puede tener cualquier valor
//         this.age = age;
//     }
// }

function Mouse(name,age){
    this.name = name;
    this.age = age;
}

const myMouse = new Mouse("simon",3);
console.log(myMouse);

class Input{
    constructor(parentId,text){
        this.parentId = parentId;
        this.text = text;
    }
    render(){
        let sitio = document.getElementById(this.parentId);
        let inputHtml ="<input type='email'  id='email' placeholder='Ingrese email'>";
        sitio.innerHTML = inputHtml;
    }
}

class Boton{
    constructor(parentId,text){
        this.parentId = parentId;
        this.text = text;
    }
    render(){
        let sitio = document.getElementById(this.parentId);
        let botonHtml ="<button>Boton JS</button>";
        sitio.innerHTML = botonHtml;
        // sitio.parentId="boton";
        // sitio.text="boton JS";
    }
}
function botonCancelar(parentId,text){
    this.parentId = parentId;
    this.text = text;
    let sitio = document.getElementById(this.parentId);
    let botonHtml ="<button>Cancelar JS</button>";
    sitio.innerHTML = botonHtml;    
}

const unInput = new Input("input");
unInput.render();

const myBoton = new Boton("boton");
myBoton.render();

const cancelar = new botonCancelar("botonC","Cancelar JS");
