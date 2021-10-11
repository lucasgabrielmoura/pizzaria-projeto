/* function modal(){
    var x = "";
    x = document.getElementById("newUni").href;
    console.log(x)
    if(x.endsWith("#")){
        let pagina = document.getElementById("msg")
        let modal = document.querySelector(".modal");
        modal.StyleSheet.display = 'block';
        pagina.innerText = "Está pagina ainda não foi criada.";
    } 
} */


function modal() {
    test = document.getElementById("testando").getAttribute("href");
    let modal = document.querySelector(".modal");
        
    if(test == "#") {
        modal.classList.toggle('active');
    }
}