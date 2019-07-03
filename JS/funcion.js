
var cont = 1;
var mensaje="";
function tempo() {
    if(cont == 5){
        cont = 1;
    }
    public();
    setTimeout(tempo, 3000);
    cont++;
}
function public(){
    if(cont == 1){
        document.getElementById("img").src="IMG/pc.png";        
    }else if(cont == 2){
        document.getElementById("img").src="IMG/movil.jpg" ;
         
    }else if(cont == 3){
        document.getElementById("img").src="IMG/impresora.jpg";
        
    }else if(cont == 4){
        document.getElementById("img").src="IMG/teclado.png";
    }
}
    

function validarFormu(){
    if (document.formul.nombre.value==null){
        alert("Introduzca su nombre");
        return  false;
    }
    if (document.formul.email.value==null){
        alert("Introduzca su email");
        return false;
    }
    if(document.formul.telef.value==null){
       alert("Introduzca su teléfono");
        return false;
       }
    if(document.formul.asunto.value==null){
       alert("Debe marcar el asunto");
    return false;
       }
    alert("En breves recibirá respuesta del equipo de atención al cliente de MCH, muchas gracias.");
    return true;
}



function validarCompra(){
     if (document.compra.portatil.checked==false && document.compra.movil.checked==false && document.compra.impresora.checked==false && document.compra.teclado.checked==false){
        alert("Debe seleccionar que producto desea");
        return false;
        }
    if (document.compra.prod1.value==0 && document.compra.prod2.value==0 && document.compra.prod3.value==0 && document.compra.prod4.value==0){
        alert("Selecciona la cantidad que deseas");
        return false;
        }
    
    if(document.compra.portatil.checked==false && document.compra.prod1.value!=0) {
        alert("Algo no cuadra, revise su pedido");
        return false;
    }
    if(document.compra.movil.checked==false && document.compra.prod2.value!=0) {
        alert("Algo no cuadra, revise su pedido");
        return false;
    }
    if(document.compra.impresora.checked==false && document.compra.prod3.value!=0) {
        alert("Algo no cuadra, revise su pedido");
        return false;
    }
    if(document.compra.teclado.checked==false && document.compra.prod4.value!=0) {
        alert("Algo no cuadra, revise su pedido");
        return false;
    }
    alert(document.compra.nombre.value + " con email: " + document.compra.email.value + ". Su pedido estará en su domicilio en 48h");
    return true;
}