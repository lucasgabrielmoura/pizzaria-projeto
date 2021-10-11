   
    var x = document.getElementById("enviar");
    function modal() {
        let nome = document.getElementById("txtn").value;
        let email = document.getElementById("txte").value;
        let telefone = document.getElementById("numbert").value;
        let mensagem = document.getElementById("mensagem").value;

    /* Validador de email */
        let testRegex = function () {  
        let regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
            return regex.test(email);
    } 

    
    /* Validador para saber se todos os campos estão preenchidos corretamente */
        if(nome == "" || email == "" || telefone == "" || mensagem == "") {
            let msgModal = document.getElementById("msg");
            let modal = document.querySelector(".modal");
            modal.classList.toggle("active");
            msgModal.innerText = "Por favor verifique se todos os dados foram preechidos.";
        } else if(testRegex() === true) {
            let msgModal = document.getElementById("msg");
            let modal = document.querySelector(".modal");
            modal.classList.toggle("active");
            msgModal.innerText = "Sua mensagem foi enviada a Magic Pizzaria!";
            document.getElementById("botao").setAttribute("href","/Home/index.html");
            } else {
                let msgModal = document.getElementById("msg");
                let modal = document.querySelector(".modal");
                modal.classList.toggle("active");
                msgModal.innerText = "Email inválido";
            }
    }

    
    


