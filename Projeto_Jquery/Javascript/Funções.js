$(function(){
    $('section#ocult article div.btn').click(function(){
        $(this).siblings('div.registerAll').slideToggle();
    });
});