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
    let contenido = '<p>JavaScript makes HTML pages more dynamic and interactive.</p>';
    sitio.innerHTML = contenido;
}