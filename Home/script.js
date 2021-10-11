function modal(){
    var x = "";
    x = document.getElementById("newUni").href;
    console.log(x)
    if(x.endsWith("")){
        let pagina = document.getElementById("msg")
        pagina.innerText = "Está pagina ainda não foi criada.";
    } else {
        window.location.href = "http://127.0.0.1:5500/index.html"
    }
}