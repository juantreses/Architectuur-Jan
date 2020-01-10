// JS voor Examen Jan


function openNav() {
    document.getElementById("myNav").style.transition = "0.5s";
  document.getElementById("myNav").style.opacity = "1";
    document.getElementById("myNav").style.visibility = "visible";
}


function closeNav() {
  document.getElementById("myNav").style.visibility = "hidden";
    document.getElementById("myNav").style.opacity = "0";
    setTimeout(function() {
        document.getElementById("myNav").style.transition = "0s";
    }, 500);
}

//Scroll To Top
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#goToTop').fadeIn();
        } else {
            $('#goToTop').fadeOut();
        }
    });
    var duration_ms = 800;
    $('#goToTop').click(function () {
        //var last_scroll = $(window).scrollTop();
        $('html, body').animate({ scrollTop: 0 }, duration_ms, function(){
        	setTimeout(function(){
            	    $('html, body').animate({ scrollTop: last_scroll }, duration_ms);
          	}, duration_ms);
        });
    });
});

