$(document).ready(function(){
    $("#nav").autoHidingNavbar();
});

function setUpHome(){
    stopAnimations();
    removeAllActive();
    document.title = 'Vincent Xie - Developer'; 
    $("#home-button").addClass('active');
}

function setUpAbout(){
    stopAnimations();
    removeAllActive();
    document.title = 'About me'; 
    $("#about-button").addClass('active');
    resetAbout();
}

function setUpProjects(){
    stopAnimations();
    removeAllActive();
    document.title = 'Projects'; 
    $("#projects-button").addClass('active');
}

function setUpContact(){
    stopAnimations();
    removeAllActive();
    document.title = 'Contact me'; 
    $("#contact-button").addClass('active');
    setContactForm();
}

$(document).scroll(function() {
    if($(document).scrollTop() > 120){
        $("#scroll").fadeOut(500);
        $("#about section:nth-of-type(2)").animate({'opacity': 'show', 'top': 50}, 1000);
        $("#tech-container").fadeIn(1000);
    }
});

function stopAnimations(){
    $("html, body").stop(true, true);
    $("#welcome-video").stop(true, true);
    $("#index").stop(true, true);
    $("#about").stop(true, true);
    $('#me').stop(true, true);
    $("#about section:nth-of-type(2)").stop(true, true);
    $("#tech-container").stop(true, true);
    $("#projects").stop(true, true);
    $("#contact").stop(true, true);
    $("#footer").stop(true, true);
}

function removeAllActive(){
    $("#home-button").removeClass('active');
    $("#about-button").removeClass('active')
    $("#projects-button").removeClass('active');
    $("#contact-button").removeClass('active');
}

function resetAbout(){
    $("#tech-container").hide();
    $("#about").css("margin-top", "45px");
    $("#me").css('opacity', '0');
    $("#me").css('margin-left', '-2vw');
    $("#me").css('margin-right', '6vw');    
    $("#about section:nth-of-type(2)").hide();
    $("#about section:nth-of-type(2)").css("top", "150px");
}

function setContactForm(){
    if($.browser.mozilla){
        $(".mozilla-form").show();
    } else{
        $(".form").show();
    }    
}