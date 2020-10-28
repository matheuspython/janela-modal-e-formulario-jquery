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
        var el = $('body,.closeBtn');
        el.click(function(){
            $('.bg').fadeOut();
        })
            $('.form').click(function(e){
                e.stopPropagation();//mesma ideia do stopPropagation anterior
            })
     
    }
    $('form#form1').submit(function(e){
        e.preventDefault()
        var nome = $('input[name=nome]').val()
        var telefone = $('input[name=telefone]').val()
        var email = $('input[name=email]').val()
        
        var amount = nome.split(' ').length//contando a quantidade de espaços e seus valores
        var amounts = nome.split(' ')
        if(amount >= 2){//o split ta dividindo a var nome em arrays e o leng ta contando quantos elementos tem nesse array e se tiver mais de 2 entra no if
            for(i=0;i<amount;i++){
                if(amounts[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                 
                }else{
                    aplicarCamploInvalido($('input[name=nome]'))
                    return false
                }
            }

        }else{
            aplicarCamploInvalido($('input[name=nome]'))
            return false
        }


   
    })
function aplicarCamploInvalido(el){
    el.css('border','2px solid red')
                    
    el.data('invalido','targetTouches')
    el.val('campo invalido1')      
}
});