//Selecionar todos os itens do menu
var linksParent = $('.links_tabs');
var links = linksParent.find('a');

var linksParentRespons = $('.lista-menu');

//Selecionar todas as seções
var items = $('section');

//Tornar invisivel todas as classes
links.eq(0).add(items.eq(0).addClass('ativo'));

//Capturar click e exibir section atual

linksParent.on('click', 'li', function(){
    var t = $(this);
    var i = t.index();
    t.addClass('ativo').siblings().removeClass('ativo');
    items.eq(i).addClass('ativo').siblings().removeClass('ativo');
});

linksParentRespons.on('click', 'li', function(){
    var t = $(this);
    var i = t.index();
    t.addClass('ativo').siblings().removeClass('ativo');
    items.eq(i).addClass('ativo').siblings().removeClass('ativo');
    
    $('#menu-1').prop('checked', false);
});


$('#navicon').click(function(){
   $('.lista-menu').slideToggle(); 
});