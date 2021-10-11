// Validação do formulário para ENVIAR

function validador() {
    let name = document.getElementById("name").value 
    let email = document.getElementById("email").value 
    let telefone = document.getElementById("telefone").value 
    let dataHora = document.getElementById("dataHora").value 


    if (name == ""|| email == "" || telefone == "" || dataHora == ""){
        document.querySelector(".modal").classList.toggle("active");
        document.getElementById("mensagemtext").innerHTML = "Por favor verifique se todos os dados foram preechidos."
    }else{
        document.querySelector(".modal").classList.toggle("active");
        document.getElementById("mensagemtext").innerHTML = "Sua Reserva foi salva, estamos te aguardando na Magic Pizzaria!"
    }
}
// Função caso a reserva seja cancelada

function apagar(){
    document.querySelector(".modal").classList.toggle("active");
    document.getElementById("mensagemtext").innerHTML = "Sua reserva foi cancelada!"
}