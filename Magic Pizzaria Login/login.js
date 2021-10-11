//Animação com flip

function goback(){
    document.querySelector("#box")
    .style.transform = "rotatey(180deg)"
}
function gofront(){
    document.querySelector("#box")
    .style.transform = "rotatey(0deg)"
}

//Código de validação de usuário e senha

function validUserForm(){
    let login = document.querySelector("#Usuario").value;
    let senha = document.querySelector("#Senha").value;
    let modal = document.querySelector(".modal");
    modal.style.display = 'block';
   
    if(login  && senha){
        document.getElementById('mensagem').innerHTML = "BEM VINDO AO MAGIC PIZZARIA";
        document.getElementById('botao').setAttribute('href', '/tela-de-cardapio/cardapio.html')
    }
    else {
        document.getElementById('mensagem').innerHTML = "Por favor verifique se todos os dados foram preenchidos";
    }
}

function esqueceuSenha(){
    let modal1 = document.querySelector(".modal1");
    modal1.style.display = 'block';
       
    document.getElementById('mensagemtext').innerHTML = "Para recuperar a senha, entre em contato com o restaurante";
   
   
}

//Código do botão de fechar o modal

function fechar(){
    let modal = document.querySelector('.modal');
    let modal1 = document.querySelector('.modal1');
    modal.style.display='none';
    modal1.style.display='none';
}