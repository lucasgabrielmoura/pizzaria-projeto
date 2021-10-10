// Validação do formulário para ENVIAR

function validador() {
    let name = document.getElementById("name").value 
    let email = document.getElementById("email").value 
    let telefone = document.getElementById("telefone").value 
    let dataHora = document.getElementById("dataHora").value 
    let quantidade = document.getElementById("quantidade").value

    if (name == ""|| email == "" || telefone == "" || dataHora == "" || quantidade == ""){
        document.getElementById("modal").innerText = "Por favor verifique se todos os dados foram preenchidos."
    }else{
        document.getElementById("modal").innerText = "Sua Reserva foi salva, estamos te aguardando na Magic Pizzaria!"
    }
}
// Função caso a reserva seja cancelada

function apagar(){
    document.getElementById("modal").innerText = "Sua reserva foi cancelada!"
}