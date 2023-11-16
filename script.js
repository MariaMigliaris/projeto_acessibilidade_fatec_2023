new window.VLibras.Widget();


function scrollToTitulo(event) {
    event.preventDefault();
    console.log("Clicou no botão");

    var titulo = document.getElementById('sobre');
    titulo.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.getElementById('botao-inicial').addEventListener('click', function(event) {
    scrollToTitulo(event);
});


