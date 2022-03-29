$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    let equipo = $('#equip').offset().top,
        servicio = $('#serveis').offset().top,
        contacto = $('#contacte').offset().top;

    window.addEventListener('resize', function(){
        let equipo = $('#equip').offset().top,
        servicio = $('#serveis').offset().top,
        contacto = $('#contacte').offset().top;
    });

    $('#enlace-equipo').on('click', function(e){
        location.href = "membres.html";
    });

    $('#enlace-servicio').on('click', function(e){
            location.href = "obres.html";
    });
});