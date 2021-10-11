// Validação do formulário para ENVIAR

function validador() {
    let name = document.getElementById("name").value 
    let email = document.getElementById("email").value 
    let telefone = document.getElementById("telefone").value 
    let dataHora = document.getElementById("dataHora").value 
    let quantidade = document.getElementById("quantidade").value


    if (name == ""|| email == "" || telefone == "" || dataHora == "" || quantidade == ""){
        let modal = document.querySelector(".modal");
        modal.classList.toggle("active");
        let p = document.getElementById("mensagemtext").innerText = "Por favor verifique se todos os dados foram preechidos."
    }else{
        document.getElementById("mensagemtext").innerHTML = "Sua Reserva foi salva, estamos te aguardando na Magic Pizzaria!"
    }
}
// Função caso a reserva seja cancelada

function apagar(){
    document.getElementById("modal").innerText = "Sua reserva foi cancelada!"
}