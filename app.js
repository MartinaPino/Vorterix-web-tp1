const handleClick = () =>{
    console.log("apreto");
    let inputName = document.getElementById("name").value;
    let finalMessageElement = document.getElementById("finalMessageContainer");

    let finalMessage =  `<h5 class="modal-title2" id="exampleModalLabel">¡Gracias ${inputName} por participar en nuestro sorteo!</h5>`;
   
    finalMessageElement.innerHTML = finalMessage;

}

