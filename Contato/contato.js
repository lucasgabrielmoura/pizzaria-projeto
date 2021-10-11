   
    var x = document.getElementById("enviar").getAttributeNode("data-bs-target");
    function modal() {
    let nome = document.getElementById("txtn").value;
    let email = document.getElementById("txte").value;
    let telefone = document.getElementById("numbert").value;
    let mensagem = document.getElementById("mensagem").value;

    let testRegex = function () {  
    let regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
        return regex.test(email);
    } 

    if(nome == "" || email == "" || telefone == "" || mensagem == "") {
        let testando = document.getElementById("msg")
            testando.innerText = "Por favor verifique se todos os dados foram preechidos.";
    } else if(testRegex() === true) {
        let testando = document.getElementById("msg")
        testando.innerText = "Sua mensagem foi enviada a Magic Pizzaria!"
        } else {
            let testando = document.getElementById("msg")
            testando.innerText = "Email inválido";
        }
    }











    /* if(testRegex() === true) {
        if(nome == "" || email == "" || telefone == "" || mensagem == "") {
            let testando = document.getElementById("msg")
            testando.innerText = "Por favor verifique se todos os dados foram preechidos.";
        } else {
            let testando = document.getElementById("msg")
            testando.innerText = "Sua mensagem foi enviada a Magic Pizzaria!"
        }
    }  else {
        let testando = document.getElementById("msg")
            testando.innerText = "Email invalido";
    }
    }
 */

    
    


