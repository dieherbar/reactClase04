function resetear() {
    document.getElementById("app2").innerHTML=0;
}

function limpiar(){
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
}

function botonCancelar(parentId, text) {
    this.parentId = parentId;
    this.text = text;
    let sitio = document.getElementById(this.parentId);
    let botonHtml = '<button type="reset" onclick="limpiar()">Cancelar JS</button>';
    sitio.innerHTML = botonHtml;
}
function parrafo(parentId,text){
    this.parentId = parentId;
    this.text = text;
    let sitio = document.getElementById(this.parentId);
    let contenido = '<h2>JavaScript makes HTML pages more dynamic and interactive.</h2>';
    sitio.innerHTML = contenido;
}
function cambio(){
    // document.getElementsById("body").classList.remove('dark');
    document.getElementById("body").className +='dark';
}