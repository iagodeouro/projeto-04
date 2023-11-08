$(function(){

    /*alert('funcionando');*/

    $('nav a').click(function() {
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top; // Correção: é offset() em vez de offSet()
    
        $('html, body').animate({ 'scrollTop': offSetTop });
    
        return false;
    });
    

   

    


    

    
   






});