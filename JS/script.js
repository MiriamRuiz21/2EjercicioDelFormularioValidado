var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var regexTelefonoNacional = /^\d{10}$/;
var enviarDatos=0;

//____________________Nomrbe_____________________
var nombre=document.getElementById("nombre");
var xmarkErrorNombre=document.getElementsByClassName("xmarkErrorNombre")[0];
var mensajeNombre=document.getElementsByClassName("errorNombre")[0];
var checkMarkNombre=document.getElementsByClassName("checkMarkNombre")[0];

nombre.addEventListener("blur",()=>{
    if(!regexNombre.test(nombre.value)){
        mensajeNombre.classList.remove("ocultar");
        document.getElementById("nombre").classList.add("errorInput");
        xmarkErrorNombre.classList.remove("ocultar");
        checkMarkNombre.classList.add("ocultar");
    }
    else{
        mensajeNombre.classList.add("ocultar");
        document.getElementById("nombre").classList.add("correctoInput");
        xmarkErrorNombre.classList.add("ocultar");
        checkMarkNombre.classList.remove("ocultar");
        enviarDatos++;
    }
    if(enviarDatos==3){
        formulario.Submit();
    }
    else{
        enviarDatos=0;
    }
});

//____________________Celular____________________
var celular=document.getElementById("celular");
var mensajeCelular=document.getElementsByClassName("errorCelular")[0];
var xmarkErrorCelular=document.getElementsByClassName("xmarkErrorCelular")[0];
var checkMarkCelular=document.getElementsByClassName("checkMarkCelular")[0];
celular.addEventListener("blur",()=>{
    if(!regexTelefonoNacional.test(celular.value)) {
        mensajeCelular.classList.remove("ocultar");
        document.getElementById("celular").classList.add("errorInput");
        xmarkErrorCelular.classList.remove("ocultar");
        checkMarkCelular.classList.add("ocultar");
    }
    else{
        mensajeCelular.classList.add("ocultar");
        document.getElementById("celular").classList.add("correctoInput");
        xmarkErrorCelular.classList.add("ocultar");
        checkMarkCelular.classList.remove("ocultar");
        enviarDatos++;
    }
    if(enviarDatos==3){
        formulario.Submit();
    }
    else{
        enviarDatos=0;
    }
}); 

//_______________________correo___________________
var correo=document.getElementById("correo");
var mensajeCorreo=document.getElementsByClassName("errorCorreo")[0];
var xmarkErrorCorreo=document.getElementsByClassName("xmarkErrorCorreo")[0];
var checkMarkCorreo=document.getElementsByClassName("checkMarkCorreo")[0];
correo.addEventListener("blur",()=>{
    if(!regexCorreo.test(correo.value)){
        mensajeCorreo.classList.remove("ocultar");
        document.getElementById("correo").classList.add("errorInput");
        xmarkErrorCorreo.classList.remove("ocultar");
        checkMarkCorreo.classList.add("ocultar");
    }
    else{
        mensajeCorreo.classList.add("ocultar");
        document.getElementById("correo").classList.add("correctoInput");
        xmarkErrorCorreo.classList.add("ocultar");
        checkMarkCorreo.classList.remove("ocultar");
        enviarDatos++;
    }
});