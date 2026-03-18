function editar() {
    var boton = document.getElementById("boton");
    var parrafo = document.getElementById("parrafo");

    // Agregamos el evento directamente al botón
    boton.addEventListener("click", function() {
        // Corregido: innerHTML en mayúsculas
        parrafo.innerHTML = "El texto ha cambiado completamente";
    });
}

editar();


function mensaje(){

    alert("click en el botón")
}

let contador = 0
function contadorClick(){

    contador++;
    document.getElementById("contador").textContent=contador;
}


function opcion() {
    var seleccionar = document.getElementById("opciones").value;
    var texto = document.getElementById("ch");

    switch (seleccionar) {
        case "opcion1":
            texto.innerText = "Escogió la opción A";
            break;
        case "opcion2":
            texto.innerText = "Escogió la opción B";
            break;
        case "opcion3":
            texto.innerText = "Escogió la opción C";
            break;
        case "opcion4":
            texto.innerText = "Escogió la opción D";
            break;
    }
}


function cambio(){
    var parrafo= document.getElementById("parra")
    var text= document.getElementById("texto")
    parrafo.innerHTML = text.value;
}

function foco(){
    element=document.getElementById("texto2")
    element.style.backgroundColor = "aquamarine";

}

function campo(){
    var texto3 = document.getElementById("b4");
    texto3.innerHTML = "Ejemplo: usuario@correo.com";

}

function validarCorreo(){
     var correo = document.getElementById("correo");
    var texto3 = document.getElementById("b4")
    if (correo.value == ""){
        texto3.innerHTML="No puede dejar esa tawel vacía";
        
    }else{

        texto3.innerHTML = "Correo ingresado correctamente";

    }
    
}

function salirCampoNombre(){
    var nombre = document.getElementById("x")
    if (nombre.value==""){
        alert("Digite por favor un nombre")
    }
}

function validarContra(){
    var contrase = document.getElementById("contra");

    if (contrase.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres");
    } else {
        alert("Contraseña escrita correctamente");
    }
}

function verificarName(){
    var name= document.getElementById("nombre")
    var txt = document.getElementById("xd")
    if(name.value==""){
        txt.innerHTML= "Por favor llene el campo de nombre"       
    }else{
        txt.innerHTML= "Correcto!"
    }
}


function sumar(){
    var n1 = document.getElementById("numero1");
    var n2 = document.getElementById("numero2");
    var opcion = document.getElementById("operacion");
    var resultado = document.getElementById("resultado");

    if(opcion.value == "suma"){
        resultado.innerHTML = "Suma: " + (Number(n1.value) + Number(n2.value));
    }
}