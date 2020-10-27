$(function(){
    abrirjanela();
    verificarCliqueFechar()
    function abrirjanela(){
        $('.btn').click(function(e){
            e.stopPropagation();//impede que o evento se propague e va pro elemento pai usado pro fadeOut funcionar direito
            $('.bg').fadeIn();//ao clicar no btn vai acontecer uma animacao do bg aparecendo
        });
    }
    function verificarCliqueFechar(){
        var el = $('body');
        el.click(function(){
            $('.bg').fadeOut();
            $('.form').click(function(e){
                e.stopPropagation();//mesma ideia do stopPropagation anterior
            })
        })
    }

});