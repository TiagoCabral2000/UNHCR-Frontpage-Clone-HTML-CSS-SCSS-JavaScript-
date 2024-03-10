// BLUENAV -> BLUENAV FIXA *****************************************************************************************
var blueNav = document.querySelector('.blue-nav');
var whiteNav = document.querySelector('.white-nav');  

function checkScroll() {
    var scrollPosition = window.scrollY; // Verifica a posição vertical do site em que o utilizador está

    var whiteNavHeight = whiteNav.offsetHeight; //retorna a altura da whitenav, incluindo altura, margens e bordas (exclui padding)

    if (scrollPosition >= whiteNavHeight) { // Verifica se a posição de rolagem ultrapassou a altura da .white-nav
        blueNav.classList.add('blue-nav-fixa'); // Adiciona a classe .blue-nav-fixa quando descer além da .white-nav
    }
    else {
        blueNav.classList.remove('blue-nav-fixa'); // Remove a classe .blue-nav-fixa quando voltar acima da .white-nav
    }
}

window.addEventListener('scroll', checkScroll); // Invoca a função sempre que o scroll muda

// Abrir/Fechar Div  Mensal *************************************************************************
let unica = document.querySelector('#unica');
let mensal = document.querySelector('#mensal');
let mensalDiv = document.querySelector('.Mensal');
let checkmensal = 0


function Display(doacao, divX) {
    if (doacao === 'Mensal'){
        divX.style.display = 'block';
    }
    else{
        divX.style.display = 'none'
    }
}

unica.addEventListener('click', function() {
   Display('unica', mensalDiv);
   return checkmensal = 0;
});
mensal.addEventListener('click', function() {
    Display('Mensal', mensalDiv);
    return checkmensal = 1;
 });

 // Abrir/Fechar Divs  Pagamento Unico/Mensal *************************************************************************
 let PagamentoUnicoDiv = document.querySelector('#PagamentoUnico');
 let PagamentoMensalDiv = document.querySelector('#PagamentoMensal');

 function DisplayDuplo(doacao, divX, divY) {
    if (doacao === 'Mensal'){
        divX.style.display = 'block';
        divY.style.display = 'none';
    }
    else{
        divX.style.display = 'none';
        divY.style.display = 'block';
    }
}
 
 unica.addEventListener('click', function() {
    DisplayDuplo('unica', PagamentoMensalDiv, PagamentoUnicoDiv)
 });
 mensal.addEventListener('click', function() {
     DisplayDuplo('Mensal', PagamentoMensalDiv, PagamentoUnicoDiv);
  });

// Abrir/Fechar Divs Particular/Empresa*************************************************************************
let particular = document.querySelector('#particular');
let empresa = document.querySelector('#empresa');
let particularDiv = document.querySelector('.Particular');
let empresaDiv = document.querySelector('.Empresa');

function toggleFields(tipo) {
    if (tipo === 'Particular') {
        particularDiv.style.display = 'block';
        empresaDiv.style.display = 'none';
    }
    else {
        particularDiv.style.display = 'none';
        empresaDiv.style.display = 'block';
    }
}

particular.addEventListener('click', function() {
    toggleFields('Particular');
}); 
empresa.addEventListener('click', function() {
    toggleFields('Empresa');
});

// Botoes preenchem input valor*************************************************************************
let valorInput = document.querySelector('#valor');
let botoes_blocoB = document.querySelectorAll('.BlocoBotoes button'); //buscar todos os elementos que correspondem ao seletor CSS especificado ('.BlocoB button')
//cria uma NodeList (uma lista de nós) que contém todos os botões dentro dos elementos com a classe .BlocoB
  
botoes_blocoB.forEach(function(botao) { //Para cada elemento da NodeList (elementos a que chamaremos de botao) faz:
    botao.addEventListener('click', function(event) {
        event.preventDefault(); // Para evitar a navegação ao clicar no link dentro do botão
        var valorbotao = parseInt(botao.id); // Obtém o valor do ID do botão em questão como um número
        valorInput.value = valorbotao;
    });
});

// Número de Refeições*************************************************************************

var form = document.querySelector('form');
var resultadoDiv = document.getElementById('resultado'); // Elemento para exibir a mensagem

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para evitar recarregar a página

    var valorDoacao = parseFloat(valorInput.value); // Converte o valor do input para um número real

    const custoRefeicao = 1.5;
    var numeroRefeicoes = Math.floor(valorDoacao / custoRefeicao); // número de refeições que a doação permite comprar

    // Cria uma mensagem com o número de refeições

    if (checkmensal==0){
        if (valorDoacao > 40) {
            var numeroPessoas = Math.floor(numeroRefeicoes / 2); // Duas refeições por dia
            var mensagem = "O seu donativo permitirá alimentar diariamente aproximadamente " + numeroPessoas + " pessoas";
        } else {
            var mensagem = "O seu donativo permitirá fornecer aproximadamente " + numeroRefeicoes + " refeições";
        }
    }

    else{
        if (valorDoacao < 90) {
            var numeroDias = Math.floor(numeroRefeicoes / 2);
            var mensagem = "O seu donativo permitirá alimentar uma pessoa durante " + numeroDias + " dias";
        }else{
            var numeroPessoasMensal = Math.floor(numeroRefeicoes / 60)
            var mensagem = "O seu donativo permitirá alimentar " + numeroPessoasMensal + " pessoas durante este mês";
        }
    }

    // Exibe a mensagem no console (substitua isso pela sua lógica de exibição real)
    resultadoDiv.style.display = 'block';
    resultadoDiv.textContent = mensagem;
});

function showmainmenu(){
    document.getElementById('dropdown-minimized').style.display="flex"
    document.getElementById('dropdown-minimized-mainmenu').style.display="flex"
    document.getElementById('dropdown-minimized-about').style.display="none" 
    document.getElementById('dropdown-minimized-whatwedo').style.display="none" 
    document.getElementById('dropdown-minimized-emergencies').style.display="none" 
    document.getElementById('dropdown-minimized-newsandstories').style.display="none" 
    document.getElementById('dropdown-minimized-getinvolved').style.display="none"
    document.getElementById('dropdown-minimized-overview').style.display="none"
    document.getElementById('dropdown-minimized-wherewework').style.display="none"
    document.getElementById('dropdown-minimized-whoweprotect').style.display="none"
    document.getElementById('dropdown-minimized-ourpartners').style.display="none"
    document.getElementById('dropdown-minimized-governanceandoversight').style.display="none"
    
    document.getElementById('dropdown-minimized-respondtoemergencies').style.display="none"
    document.getElementById('dropdown-minimized-protecthumanrights').style.display="none"
    document.getElementById('dropdown-minimized-buildbetterfutures').style.display="none"
    document.getElementById('dropdown-minimized-forumsandcomittes').style.display="none"
    document.getElementById('dropdown-minimized-reportsandpublications').style.display="none"

}
function showabout(){
    document.getElementById('dropdown-minimized').style.display="flex"
    document.getElementById('dropdown-minimized-mainmenu').style.display="none"
    document.getElementById('dropdown-minimized-about').style.display="flex" 
    document.getElementById('dropdown-minimized-whatwedo').style.display="none" 
    document.getElementById('dropdown-minimized-emergencies').style.display="none" 
    document.getElementById('dropdown-minimized-newsandstories').style.display="none" 
    document.getElementById('dropdown-minimized-getinvolved').style.display="none"
    document.getElementById('dropdown-minimized-overview').style.display="none"
    document.getElementById('dropdown-minimized-wherewework').style.display="none"
    document.getElementById('dropdown-minimized-whoweprotect').style.display="none"
    document.getElementById('dropdown-minimized-ourpartners').style.display="none"
    document.getElementById('dropdown-minimized-governanceandoversight').style.display="none"
    document.getElementById('dropdown-minimized-respondtoemergencies').style.display="none"
    document.getElementById('dropdown-minimized-protecthumanrights').style.display="none"
    document.getElementById('dropdown-minimized-buildbetterfutures').style.display="none"
    document.getElementById('dropdown-minimized-forumsandcomittes').style.display="none"
    document.getElementById('dropdown-minimized-reportsandpublications').style.display="none"
}
function showwhatwedo(){
    document.getElementById('dropdown-minimized').style.display="flex"
    document.getElementById('dropdown-minimized-mainmenu').style.display="none"
    document.getElementById('dropdown-minimized-about').style.display="none" 
    document.getElementById('dropdown-minimized-whatwedo').style.display="flex" 
    document.getElementById('dropdown-minimized-emergencies').style.display="none" 
    document.getElementById('dropdown-minimized-newsandstories').style.display="none" 
    document.getElementById('dropdown-minimized-getinvolved').style.display="none"
    document.getElementById('dropdown-minimized-overview').style.display="none"
    document.getElementById('dropdown-minimized-wherewework').style.display="none"
    document.getElementById('dropdown-minimized-whoweprotect').style.display="none"
    document.getElementById('dropdown-minimized-ourpartners').style.display="none"
    document.getElementById('dropdown-minimized-governanceandoversight').style.display="none"
    document.getElementById('dropdown-minimized-respondtoemergencies').style.display="none"
    document.getElementById('dropdown-minimized-protecthumanrights').style.display="none"
    document.getElementById('dropdown-minimized-buildbetterfutures').style.display="none"
    document.getElementById('dropdown-minimized-forumsandcomittes').style.display="none"
    document.getElementById('dropdown-minimized-reportsandpublications').style.display="none"
}
function showemergencies(){
    document.getElementById('dropdown-minimized').style.display="flex"
    document.getElementById('dropdown-minimized-mainmenu').style.display="none"
    document.getElementById('dropdown-minimized-about').style.display="none" 
    document.getElementById('dropdown-minimized-whatwedo').style.display="none" 
    document.getElementById('dropdown-minimized-emergencies').style.display="flex" 
    document.getElementById('dropdown-minimized-newsandstories').style.display="none" 
    document.getElementById('dropdown-minimized-getinvolved').style.display="none"
    document.getElementById('dropdown-minimized-overview').style.display="none"
    document.getElementById('dropdown-minimized-wherewework').style.display="none"
    document.getElementById('dropdown-minimized-whoweprotect').style.display="none"
    document.getElementById('dropdown-minimized-ourpartners').style.display="none"
    document.getElementById('dropdown-minimized-governanceandoversight').style.display="none"
    document.getElementById('dropdown-minimized-respondtoemergencies').style.display="none"
    document.getElementById('dropdown-minimized-protecthumanrights').style.display="none"
    document.getElementById('dropdown-minimized-buildbetterfutures').style.display="none"
    document.getElementById('dropdown-minimized-forumsandcomittes').style.display="none"
    document.getElementById('dropdown-minimized-reportsandpublications').style.display="none"
}
function shownewsandstories(){
    document.getElementById('dropdown-minimized').style.display="flex"
    document.getElementById('dropdown-minimized-mainmenu').style.display="none"
    document.getElementById('dropdown-minimized-about').style.display="none" 
    document.getElementById('dropdown-minimized-whatwedo').style.display="none" 
    document.getElementById('dropdown-minimized-emergencies').style.display="none" 
    document.getElementById('dropdown-minimized-newsandstories').style.display="flex" 
    document.getElementById('dropdown-minimized-getinvolved').style.display="none"
    document.getElementById('dropdown-minimized-overview').style.display="none"
    document.getElementById('dropdown-minimized-wherewework').style.display="none"
    document.getElementById('dropdown-minimized-whoweprotect').style.display="none"
    document.getElementById('dropdown-minimized-ourpartners').style.display="none"
    document.getElementById('dropdown-minimized-governanceandoversight').style.display="none"
    document.getElementById('dropdown-minimized-respondtoemergencies').style.display="none"
    document.getElementById('dropdown-minimized-protecthumanrights').style.display="none"
    document.getElementById('dropdown-minimized-buildbetterfutures').style.display="none"
    document.getElementById('dropdown-minimized-forumsandcomittes').style.display="none"
    document.getElementById('dropdown-minimized-reportsandpublications').style.display="none"
}
function showgetinvolved(){
    document.getElementById('dropdown-minimized').style.display="flex"
    document.getElementById('dropdown-minimized-mainmenu').style.display="none"
    document.getElementById('dropdown-minimized-about').style.display="none" 
    document.getElementById('dropdown-minimized-whatwedo').style.display="none" 
    document.getElementById('dropdown-minimized-emergencies').style.display="none" 
    document.getElementById('dropdown-minimized-newsandstories').style.display="none" 
    document.getElementById('dropdown-minimized-getinvolved').style.display="flex"
    document.getElementById('dropdown-minimized-overview').style.display="none"
    document.getElementById('dropdown-minimized-wherewework').style.display="none"
    document.getElementById('dropdown-minimized-whoweprotect').style.display="none"
    document.getElementById('dropdown-minimized-ourpartners').style.display="none"
    document.getElementById('dropdown-minimized-governanceandoversight').style.display="none"
    document.getElementById('dropdown-minimized-respondtoemergencies').style.display="none"
    document.getElementById('dropdown-minimized-protecthumanrights').style.display="none"
    document.getElementById('dropdown-minimized-buildbetterfutures').style.display="none"
    document.getElementById('dropdown-minimized-forumsandcomittes').style.display="none"
    document.getElementById('dropdown-minimized-reportsandpublications').style.display="none"
}
function show_overview(){
    document.getElementById('dropdown-minimized').style.display="flex"
    document.getElementById('dropdown-minimized-mainmenu').style.display="none"
    document.getElementById('dropdown-minimized-about').style.display="none" 
    document.getElementById('dropdown-minimized-whatwedo').style.display="none" 
    document.getElementById('dropdown-minimized-emergencies').style.display="none" 
    document.getElementById('dropdown-minimized-newsandstories').style.display="none" 
    document.getElementById('dropdown-minimized-getinvolved').style.display="none"
    document.getElementById('dropdown-minimized-overview').style.display="flex"
    document.getElementById('dropdown-minimized-wherewework').style.display="none"
    document.getElementById('dropdown-minimized-whoweprotect').style.display="none"
    document.getElementById('dropdown-minimized-ourpartners').style.display="none"
    document.getElementById('dropdown-minimized-governanceandoversight').style.display="none"
    document.getElementById('dropdown-minimized-respondtoemergencies').style.display="none"
    document.getElementById('dropdown-minimized-protecthumanrights').style.display="none"
    document.getElementById('dropdown-minimized-buildbetterfutures').style.display="none"
    document.getElementById('dropdown-minimized-forumsandcomittes').style.display="none"
    document.getElementById('dropdown-minimized-reportsandpublications').style.display="none"

}
////// ajs"""//
function show_wherewework(){
    document.getElementById('dropdown-minimized').style.display="flex"
    document.getElementById('dropdown-minimized-mainmenu').style.display="none"
    document.getElementById('dropdown-minimized-about').style.display="none" 
    document.getElementById('dropdown-minimized-whatwedo').style.display="none" 
    document.getElementById('dropdown-minimized-emergencies').style.display="none" 
    document.getElementById('dropdown-minimized-newsandstories').style.display="none" 
    document.getElementById('dropdown-minimized-getinvolved').style.display="none"
    document.getElementById('dropdown-minimized-overview').style.display="none"

    document.getElementById('dropdown-minimized-wherewework').style.display="flex"
    document.getElementById('dropdown-minimized-whoweprotect').style.display="none"
    document.getElementById('dropdown-minimized-ourpartners').style.display="none"
    document.getElementById('dropdown-minimized-governanceandoversight').style.display="none"
    document.getElementById('dropdown-minimized-respondtoemergencies').style.display="none"
    document.getElementById('dropdown-minimized-protecthumanrights').style.display="none"
    document.getElementById('dropdown-minimized-buildbetterfutures').style.display="none"
    document.getElementById('dropdown-minimized-forumsandcomittes').style.display="none"
    document.getElementById('dropdown-minimized-reportsandpublications').style.display="none"
}
function show_whoweprotect(){
    document.getElementById('dropdown-minimized').style.display="flex"
    document.getElementById('dropdown-minimized-mainmenu').style.display="none"
    document.getElementById('dropdown-minimized-about').style.display="none" 
    document.getElementById('dropdown-minimized-whatwedo').style.display="none" 
    document.getElementById('dropdown-minimized-emergencies').style.display="none" 
    document.getElementById('dropdown-minimized-newsandstories').style.display="none" 
    document.getElementById('dropdown-minimized-getinvolved').style.display="none"
    document.getElementById('dropdown-minimized-overview').style.display="none"
    document.getElementById('dropdown-minimized-wherewework').style.display="none"
    document.getElementById('dropdown-minimized-whoweprotect').style.display="flex"
    document.getElementById('dropdown-minimized-ourpartners').style.display="none"
    document.getElementById('dropdown-minimized-governanceandoversight').style.display="none"
    document.getElementById('dropdown-minimized-respondtoemergencies').style.display="none"
    document.getElementById('dropdown-minimized-protecthumanrights').style.display="none"
    document.getElementById('dropdown-minimized-buildbetterfutures').style.display="none"
    document.getElementById('dropdown-minimized-forumsandcomittes').style.display="none"
    document.getElementById('dropdown-minimized-reportsandpublications').style.display="none"

}
function show_ourpartners(){
    document.getElementById('dropdown-minimized').style.display="flex"
    document.getElementById('dropdown-minimized-mainmenu').style.display="none"
    document.getElementById('dropdown-minimized-about').style.display="none" 
    document.getElementById('dropdown-minimized-whatwedo').style.display="none" 
    document.getElementById('dropdown-minimized-emergencies').style.display="none" 
    document.getElementById('dropdown-minimized-newsandstories').style.display="none" 
    document.getElementById('dropdown-minimized-getinvolved').style.display="none"
    document.getElementById('dropdown-minimized-overview').style.display="none"
    document.getElementById('dropdown-minimized-wherewework').style.display="none"
    document.getElementById('dropdown-minimized-whoweprotect').style.display="none"
    document.getElementById('dropdown-minimized-ourpartners').style.display="flex"
    document.getElementById('dropdown-minimized-governanceandoversight').style.display="none"
    document.getElementById('dropdown-minimized-respondtoemergencies').style.display="none"
    document.getElementById('dropdown-minimized-protecthumanrights').style.display="none"
    document.getElementById('dropdown-minimized-buildbetterfutures').style.display="none"
    document.getElementById('dropdown-minimized-forumsandcomittes').style.display="none"
    document.getElementById('dropdown-minimized-reportsandpublications').style.display="none"

}
function show_governanceandoversight(){
    document.getElementById('dropdown-minimized').style.display="flex"
    document.getElementById('dropdown-minimized-mainmenu').style.display="none"
    document.getElementById('dropdown-minimized-about').style.display="none" 
    document.getElementById('dropdown-minimized-whatwedo').style.display="none" 
    document.getElementById('dropdown-minimized-emergencies').style.display="none" 
    document.getElementById('dropdown-minimized-newsandstories').style.display="none" 
    document.getElementById('dropdown-minimized-getinvolved').style.display="none"
    document.getElementById('dropdown-minimized-overview').style.display="none"
    document.getElementById('dropdown-minimized-wherewework').style.display="none"
    document.getElementById('dropdown-minimized-whoweprotect').style.display="none"
    document.getElementById('dropdown-minimized-ourpartners').style.display="none"
    document.getElementById('dropdown-minimized-governanceandoversight').style.display="flex"
    document.getElementById('dropdown-minimized-respondtoemergencies').style.display="none"
    document.getElementById('dropdown-minimized-protecthumanrights').style.display="none"
    document.getElementById('dropdown-minimized-buildbetterfutures').style.display="none"
    document.getElementById('dropdown-minimized-forumsandcomittes').style.display="none"
    document.getElementById('dropdown-minimized-reportsandpublications').style.display="none"

}
function show_respondtoemergencies(){
    document.getElementById('dropdown-minimized').style.display="flex"
    document.getElementById('dropdown-minimized-mainmenu').style.display="none"
    document.getElementById('dropdown-minimized-about').style.display="none" 
    document.getElementById('dropdown-minimized-whatwedo').style.display="none" 
    document.getElementById('dropdown-minimized-emergencies').style.display="none" 
    document.getElementById('dropdown-minimized-newsandstories').style.display="none" 
    document.getElementById('dropdown-minimized-getinvolved').style.display="none"
    document.getElementById('dropdown-minimized-overview').style.display="none"
    document.getElementById('dropdown-minimized-wherewework').style.display="none"
    document.getElementById('dropdown-minimized-whoweprotect').style.display="none"
    document.getElementById('dropdown-minimized-ourpartners').style.display="none"
    document.getElementById('dropdown-minimized-governanceandoversight').style.display="none"
    document.getElementById('dropdown-minimized-respondtoemergencies').style.display="flex"
    document.getElementById('dropdown-minimized-protecthumanrights').style.display="none"
    document.getElementById('dropdown-minimized-buildbetterfutures').style.display="none"
    document.getElementById('dropdown-minimized-forumsandcomittes').style.display="none"
    document.getElementById('dropdown-minimized-reportsandpublications').style.display="none"
    

}
function show_protecthumanrights(){
    document.getElementById('dropdown-minimized').style.display="flex"
    document.getElementById('dropdown-minimized-mainmenu').style.display="none"
    document.getElementById('dropdown-minimized-about').style.display="none" 
    document.getElementById('dropdown-minimized-whatwedo').style.display="none" 
    document.getElementById('dropdown-minimized-emergencies').style.display="none" 
    document.getElementById('dropdown-minimized-newsandstories').style.display="none" 
    document.getElementById('dropdown-minimized-getinvolved').style.display="none"
    document.getElementById('dropdown-minimized-overview').style.display="none"
    document.getElementById('dropdown-minimized-wherewework').style.display="none"
    document.getElementById('dropdown-minimized-whoweprotect').style.display="none"
    document.getElementById('dropdown-minimized-ourpartners').style.display="none"
    document.getElementById('dropdown-minimized-governanceandoversight').style.display="none"
    document.getElementById('dropdown-minimized-respondtoemergencies').style.display="none"
    document.getElementById('dropdown-minimized-protecthumanrights').style.display="flex"
    document.getElementById('dropdown-minimized-buildbetterfutures').style.display="none"
    document.getElementById('dropdown-minimized-forumsandcomittes').style.display="none"
    document.getElementById('dropdown-minimized-reportsandpublications').style.display="none"   

}
function show_buildbetterfutures(){
    document.getElementById('dropdown-minimized').style.display="flex"
    document.getElementById('dropdown-minimized-mainmenu').style.display="none"
    document.getElementById('dropdown-minimized-about').style.display="none" 
    document.getElementById('dropdown-minimized-whatwedo').style.display="none" 
    document.getElementById('dropdown-minimized-emergencies').style.display="none" 
    document.getElementById('dropdown-minimized-newsandstories').style.display="none" 
    document.getElementById('dropdown-minimized-getinvolved').style.display="none"
    document.getElementById('dropdown-minimized-overview').style.display="none"
    document.getElementById('dropdown-minimized-wherewework').style.display="none"
    document.getElementById('dropdown-minimized-whoweprotect').style.display="none"
    document.getElementById('dropdown-minimized-ourpartners').style.display="none"
    document.getElementById('dropdown-minimized-governanceandoversight').style.display="none"
    document.getElementById('dropdown-minimized-respondtoemergencies').style.display="none"
    document.getElementById('dropdown-minimized-protecthumanrights').style.display="none"
    document.getElementById('dropdown-minimized-buildbetterfutures').style.display="flex"
    document.getElementById('dropdown-minimized-forumsandcomittes').style.display="none"
    document.getElementById('dropdown-minimized-reportsandpublications').style.display="none"   

}
function show_forumsandcomittes(){
    document.getElementById('dropdown-minimized').style.display="flex"
    document.getElementById('dropdown-minimized-mainmenu').style.display="none"
    document.getElementById('dropdown-minimized-about').style.display="none" 
    document.getElementById('dropdown-minimized-whatwedo').style.display="none" 
    document.getElementById('dropdown-minimized-emergencies').style.display="none" 
    document.getElementById('dropdown-minimized-newsandstories').style.display="none" 
    document.getElementById('dropdown-minimized-getinvolved').style.display="none"
    document.getElementById('dropdown-minimized-overview').style.display="none"
    document.getElementById('dropdown-minimized-wherewework').style.display="none"
    document.getElementById('dropdown-minimized-whoweprotect').style.display="none"
    document.getElementById('dropdown-minimized-ourpartners').style.display="none"
    document.getElementById('dropdown-minimized-governanceandoversight').style.display="none"
    document.getElementById('dropdown-minimized-respondtoemergencies').style.display="none"
    document.getElementById('dropdown-minimized-protecthumanrights').style.display="none"
    document.getElementById('dropdown-minimized-buildbetterfutures').style.display="none"
    document.getElementById('dropdown-minimized-forumsandcomittes').style.display="flex"
    document.getElementById('dropdown-minimized-reportsandpublications').style.display="none" 
    

}
function show_reportsandpublications(){
    document.getElementById('dropdown-minimized').style.display="flex"
    document.getElementById('dropdown-minimized-mainmenu').style.display="none"
    document.getElementById('dropdown-minimized-about').style.display="none" 
    document.getElementById('dropdown-minimized-whatwedo').style.display="none" 
    document.getElementById('dropdown-minimized-emergencies').style.display="none" 
    document.getElementById('dropdown-minimized-newsandstories').style.display="none" 
    document.getElementById('dropdown-minimized-getinvolved').style.display="none"
    document.getElementById('dropdown-minimized-overview').style.display="none"
    document.getElementById('dropdown-minimized-wherewework').style.display="none"
    document.getElementById('dropdown-minimized-whoweprotect').style.display="none"
    document.getElementById('dropdown-minimized-ourpartners').style.display="none"
    document.getElementById('dropdown-minimized-governanceandoversight').style.display="none"
    document.getElementById('dropdown-minimized-respondtoemergencies').style.display="none"
    document.getElementById('dropdown-minimized-protecthumanrights').style.display="none"
    document.getElementById('dropdown-minimized-buildbetterfutures').style.display="none"
    document.getElementById('dropdown-minimized-forumsandcomittes').style.display="none"
    document.getElementById('dropdown-minimized-reportsandpublications').style.display="flex" 
}

function closeall(){
    document.getElementById('dropdown-minimized').style.display="none"
    document.getElementById('dropdown-minimized-mainmenu').style.display="none"
    document.getElementById('dropdown-minimized-about').style.display="none" 
    document.getElementById('dropdown-minimized-whatwedo').style.display="none" 
    document.getElementById('dropdown-minimized-emergencies').style.display="none" 
    document.getElementById('dropdown-minimized-newsandstories').style.display="none" 
    document.getElementById('dropdown-minimized-getinvolved').style.display="none"
    document.getElementById('dropdown-minimized-overview').style.display="none"
    document.getElementById('dropdown-minimized-wherewework').style.display="none"
    document.getElementById('dropdown-minimized-whoweprotect').style.display="none"
    document.getElementById('dropdown-minimized-ourpartners').style.display="none"
    document.getElementById('dropdown-minimized-governanceandoversight').style.display="none"
    document.getElementById('dropdown-minimized-respondtoemergencies').style.display="none"
    document.getElementById('dropdown-minimized-protecthumanrights').style.display="none"
    document.getElementById('dropdown-minimized-buildbetterfutures').style.display="none"
    document.getElementById('dropdown-minimized-forumsandcomittes').style.display="none"
    document.getElementById('dropdown-minimized-reportsandpublications').style.display="none"
}
