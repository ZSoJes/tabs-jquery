$(document).ready(function () {
    $('#tab1').show();

     $('.tabs > li').click( function(){
        var id = $(this).find("a").attr("href");

        $('.tabs > li').removeClass('active');
        $(this).addClass('active');

        $('.tab').hide();
        $(id).toggle();
     });
});