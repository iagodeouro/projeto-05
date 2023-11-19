$(function(){

    //alert('funcionando');

    var currentValue = 0;
    var isDrag = false;
    var preco_maximo = 70000;
    var preco_atual = 0;

    // validação verdadeira a partir do mover do mouse no pointer barra
    $('.pointer-barra').mousedown(function() {
        isDrag = true;
    });

    $(document).mouseup(function() {
        isDrag = false;
    });

    // função de exibir os valores do carro de acordo com a barra de preço
    $('.barra-preco').mousemove(function(e) {
        if (isDrag) {
            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left;
            if (mouseX < 0) {
                mouseX = 0;
            }
            if (mouseX > elBase.width()) {
                mouseX = elBase.width();
            }

            // executando a função - mover a barra de acordo com o mouse
            $('.pointer-barra').css('left', (mouseX - 13) + 'px');
            currentValue = (mouseX / elBase.width()) * 100;
            $('.barra-preco-fill').css('width', currentValue + '%');

            preco_atual = (currentValue / 100) * preco_maximo;
            $('.preco-pesquisa').html('R$' + preco_atual.toFixed(2));
        }
    });






    
   

    


    

    
   






});