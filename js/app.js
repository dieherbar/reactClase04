let myDom = document;

let myApp = document.getElementById("app");

myApp.innerHTML = "Estoy modificando el palceholder...";


const myDog = {
    name: "pichicho"
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

function Mouse(name, age) {
    this.name = name;
    this.age = age;
}

const myMouse = new Mouse("simon", 3);
console.log(myMouse);

class Input {
    constructor(parentId, text) {
        this.parentId = parentId;
        this.text = text;
    }
    render() {
        let sitio = document.getElementById(this.parentId);
        let inputHtml = "<input type='email'  id='email' placeholder='Ingrese email'>";
        sitio.innerHTML = inputHtml;
    }
}

class InputPass {
    constructor(parentId, text) {
        this.parentId = parentId;
        this.text = text;
    }
    render() {
        let sitio = document.getElementById(this.parentId);
        let inputHtml2 = "<input type='password'  id='pass' name='pass' placeholder='Contraseña'>";
        sitio.innerHTML = inputHtml2;
    }
}

class Boton {
    constructor(parentId, text) {
        this.parentId = parentId;
        this.text = text;
    }
    render() {
        let sitio = document.getElementById(this.parentId);
        let botonHtml = '<button onclick="cambio()">Boton JS</button>';
        sitio.innerHTML = botonHtml;
        // sitio.parentId="boton";
        // sitio.text="boton JS";
    }
}
class Texto {
    constructor(parentId, text) {
        this.parentId = parentId;
        this.text = text;
    }
    render() {
        let sitio = document.getElementById(this.parentId);
        let textoHtml = "<p>Creado por JS</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum vel laboriosam dolore voluptatibus voluptas         adipisci fugiat, assumenda atque ad voluptatum quaerat placeat veritatis modi optio eius. Neque eligendi         quia eius!         Xorro, delectus dignissimos. Eos quaerat hic id deleniti impedit quis, dolores excepturi officia, magni         autem modi quae possimus asperiores, perspiciatis laudantium corrupti! Inventore sit perspiciatis nam ea,         autem laudantium et!         Neque magni enim aspernatur asperiores dolorum omnis sapiente, deleniti adipisci eligendi nulla consequuntur         amet, ducimus dolor accusantium aut, sunt dolore qui error beatae id eum debitis labore cumque assumenda?</p>";
        sitio.innerHTML = textoHtml;
    }
}
// function botonCancelar(parentId, text) {
//     this.parentId = parentId;
//     this.text = text;
//     let sitio = document.getElementById(this.parentId);
//     let botonHtml = '<button type="reset" onclick="limpiar()">Cancelar JS</button>';
//     sitio.innerHTML = botonHtml;
// }
const unInput = new Input("input");
unInput.render();
const otroInput = new InputPass("input2");
otroInput.render();

const myBoton = new Boton("boton");
myBoton.render();
// const cancelar = new botonCancelar("botonC", "Cancelar JS");

const elTexto = new Texto("texto");
elTexto.render();