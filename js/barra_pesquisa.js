$(function(){

    /*alert('funcionando');*/

    //declarando as váriaveis que serão utilizadas
    var currentValue = 0;
    var isDrag = false;
    var preco_maximo = 70000;
    var preco_atual = 0;

    //validação verdadeira a partir do mever do mouse no pointer barra
    $('.pointer-barra').mousedown(function(){
        isDrag = true;
    });


    //
    $(document).mouseup(function(){
        isDrag = false;
        enableTextSelection();
    });


    // função de exibir os valores do carro de acordo com a barra de preço
    $('.barra-preco').mousemove(function(e){
        if(isDrag){
            disableTextSelection();
            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left;
            if(mouseX < 0)
                mouseX = 0;
            if(mouseX > elBase.width())
                mouseX = elBase.width();

            //executando a função - mover a barra de acordo com o mouse
            $('.pointer-barra').css('left',(mouseX-13)+'px');
            currentValue = (mouseX / elBase.width()) * 100;
            $('.barra-preco-fill').css('width',currentValue+'%');

            //Ajustar preço da barra de pesquisa para o R$-RB 
            preco_atual = (currentValue/100) * preco_maximo;
            preco_atual = formatarPreco(preco_atual);
            $('.valor-pesquisa').html('R$'+preco_atual);
        };
    });


    //realizando função de reajuste do preço de acordo com a barra de pesquisa - BR$ 
    //primeira função
    function formatarPreco(preco_atual){
        preco_atual = preco_atual.toFixed(2);
        preco_arr = preco_atual.split('.');

        var novo_preco = formatarTotal(preco_arr);

        return novo_preco;

    };

    //segunda função
    function formatarTotal(preco_arr){
        if(preco_arr[0] < 1000){
            return preco_arr[0]+','+preco_arr[1];
        }else if(preco_arr[0] < 10000){
            return preco_arr[0][0]+'.'+preco_arr[0].substr(1,preco_arr[0].length)+','+preco_arr[1];
        }else{
            return preco_arr[0][0]+preco_arr[0][1]+'.'+preco_arr[0].substr(2,preco_arr[0].length)+','+preco_arr[1];
        }
    };
    


    /*Evitando problemas de bug na barra de pesquisa*/
    function disableTextSelection(){
        $('body').css('-webkit-user-select','none');
        $('body').css('-moz-user-select','none');
        $('body').css('-ms-user-select','none');
        $('body').css('-o-user-select','none');
        $('body').css('-select','none');
    };


    function enableTextSelection(){
        $('body').css('-webkit-user-select','auto');
        $('body').css('-moz-user-select','auto');
        $('body').css('-ms-user-select','auto');
        $('body').css('-o-user-select','auto');
        $('body').css('-select','auto');
    };



    
   

    


    

    
   






});