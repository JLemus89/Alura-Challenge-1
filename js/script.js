var btnEncriptar = document.querySelector(".btn_encriptar");
var btnDesencriptar = document.querySelector(".btn_desencriptar");
var btnCopiar = document.querySelector(".btn_copiar");
var contenedor_img = document.querySelector(".contenedor_img");
var contenedor_subtit = document.querySelector(".contenedor_subtit");
var contenedor_p = document.querySelector(".contenedor_p");
var resultado_texto = document.querySelector(".resultado_texto");


btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;

function encriptar() {
    esconder();
    resultado_texto.textContent = textoACodigo(capturarTexto());

}

function desencriptar() {
    esconder();
    resultado_texto.textContent = codigoATexto(capturarTexto());
}

function copiar() {
    var texto = resultado_texto.textContent;
    var aux = document.createElement("input");
    aux.setAttribute("value", texto);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("Texto copiado");
}

function textoACodigo (texto){
    var mensaje = texto;
    var encriptado = "";

    for (var i = 0; i < mensaje.length; i++) {
        if(mensaje[i] =="a"){
            encriptado = encriptado + "ai";
        }
        else if(mensaje[i] =="e"){
            encriptado = encriptado + "enter";
        }
        else if(mensaje[i] =="i"){
            encriptado = encriptado + "imes";
        }
        else if(mensaje[i] =="o"){
            encriptado = encriptado + "ober";
        }
        else if(mensaje[i] =="u"){
            encriptado = encriptado + "ufat";
        }
        else{
            encriptado = encriptado + mensaje[i];
        }
    }
    return encriptado;
}

function codigoATexto (codigo) {
    var mensaje = codigo;
    var desencriptado = "";

    for (var i = 0; i < mensaje.length; i++) {
        if(mensaje[i] =="a"){
            desencriptado = desencriptado + "a";
            i = i + 1;
        }
        else if(mensaje[i] =="e"){
            desencriptado = desencriptado + "e";
            i = i + 4;
        }
        else if(mensaje[i] =="i"){
            desencriptado = desencriptado + "i";
            i = i + 3;
        }
        else if(mensaje[i] =="o"){
            desencriptado = desencriptado + "o";
            i = i + 3;
        }
        else if(mensaje[i] =="u"){
            desencriptado = desencriptado + "u";
            i = i + 3;
        }
        else{
            desencriptado = desencriptado + mensaje[i];
        }
    }
    return desencriptado;

}

function capturarTexto (){
    var texto = document.querySelector(".text_area").value;
    return texto;
}

function esconder(){
    contenedor_img.classList.add("esconder");
    contenedor_subtit.classList.add("esconder");
    contenedor_p.classList.add("esconder");
}




