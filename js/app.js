$(document).ready(function(){
    $(".komi").on('click','img',function(){
        $('.content').addClass('hide');
        $('body').innerHTML = '<img src="../img/venusaur.png" alt="venusaur" />';
    });
});