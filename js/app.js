document.onload = carregarAutomaticamente();
var menu = true;
document.getElementById('btnMenu').addEventListener('click',alternarMenu);

function carregarAutomaticamente(){
    mostrarOCopyrightNoRodape();
    mostrarMenu();
    esconderSecoes();
    atribuirLinks();
    mostrarSecao(document.getElementsByName('Bem-vindo')[0]);
}
function mostrarOCopyrightNoRodape() {
    var data = new Date();
    data = String(data.getFullYear());

    document.getElementById('rodapeAutoral').innerHTML = `&copy 2017-${data} - Estúdio do Luk`;
}
function mostrarMenu(){
    var menuMovel = document.getElementById('menuDeSelecao');
    var tituloDoCabecalho = document.querySelector("header h1");
    var sectionsLength = document.getElementsByTagName('section').length;
    
    document.getElementById('btnMenu').innerText = "X";

    menuMovel.style.transition = "transform 1s";
    menuMovel.style.transform = "translateX(0%)";
    tituloDoCabecalho.style.transition = "all 1s";
    tituloDoCabecalho.style.marginLeft = "20%";

    for(let i=0;i<sectionsLength;i++){
        document.getElementsByTagName('section')[i].style.transition = "all 1s";
        document.getElementsByTagName('section')[i].style.marginLeft = "25%";
    }
    menu = true;
}

function esconderMenu() {
    var menuMovel = document.getElementById('menuDeSelecao');
    var tituloDoCabecalho = document.querySelector("header h1");
    var sectionsLength = document.getElementsByTagName('section').length;
    
    document.getElementById('btnMenu').innerText = "☰";

    menuMovel.style.transition = "transform 1s";
    menuMovel.style.transform = "translateX(-100%)";
    tituloDoCabecalho.style.transition = "all 1s";
    tituloDoCabecalho.style.marginLeft = "0";

    for(let i=0;i<sectionsLength;i++){
        document.getElementsByTagName('section')[i].style.transition = "all 1s";
        document.getElementsByTagName('section')[i].style.marginLeft = "3%";
    }
    menu = false;
}
function alternarMenu() {
    menu == true ? esconderMenu() : mostrarMenu();
}
function alterarTituloDaPagina(secao) {
    let titulo = secao.name;
    titulo = titulo.replace("-"," ");

    if (titulo == "Bem vindo") {
        document.title = "Luk's Room"
    } 
    else {
        document.title = "Luk's Room - " + titulo;
    }

    document.querySelector("header h1").innerText = titulo;
}
function esconderSecoes(){
    var secoes = document.querySelectorAll('section');
    var TAM = secoes.length;
    for(let i=0;i < TAM; i++) {
        secoes[i].style.display = "none";
    }
}
function mostrarSecao(obj) {
    esconderSecoes();
    alterarTituloDaPagina(obj);
    
    let nossoId = atribuirLinkIndividual(obj);

    document.getElementById(nossoId).style.display = "block";
}
function atribuirLinks(){
    var links = document.querySelectorAll('#menuDeSelecao ul li a');
    for(let i=0;i < links.length; i++) {
        links[i].setAttribute('onclick','mostrarSecao(this)');
    }
}
function atribuirLinkIndividual(url){
    let nossoId = String(url.href);
    let find = nossoId.search("#",nossoId);
    nossoId = nossoId.slice(find);

    nossoId = nossoId.replace("#","");
    return nossoId;
}
function pesquisaAjax(){
    
}