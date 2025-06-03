const seleccion = document.getElementById("seleccion");  
const otro = document.getElementById("otro");

comoConoce.addEventListener("change", function(){
     const opcion = this.value;
     if(opcion == "3"){
        otro.classList.remove("otros");
    }else{
        otro.classList.add("otros");
    }
})