//const comoConoce = document.getElementById("comoConoce");  
//ASÍ FUNCIONA, PERO NO ENTIENDO PORQUÉ 

const otro = document.getElementById("otro");
const enviar = document.getElementById("enviar");
const formulario = document.getElementsByClassName("formulario");
const agradecimiento = document.getElementById("gracias");
console.log(agradecimiento);

comoConoce.addEventListener("change", function(){
     const opcion = this.value;
     if(opcion == "3"){
        otro.classList.remove("otros");
    }else{
        otro.classList.add("otros");
    }
})

enviar.addEventListener("click", function(event){
    event.preventDefault();

    alert('Mensaje enviado');

    if(comoConoce.value != ""){ //COMPLETAR CON LÓGICA PARA QUE MAIL Y NOMBRE NO QUEDEN VACÍOS
        for(let i = 0; i < formulario.length; i++){
        formulario[i].classList.add("otros");
        } 

        agradecimiento.classList.remove("agradecimiento");
        //agradecimiento.classList.add("finalizado");
        //REVISAR CÓMO DARLE ESTILO (MÁS LUGAR) AL MENSAJE DE AGRADECIMIENTO

        //PODRÍA USARSE UN AVISO DE QUE EL FORMULARIO ESTÁ INCOMPLETO
    }
})
