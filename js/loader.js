$(document).ready(function(){
    $("#nav").autoHidingNavbar();
	
	scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
});

function setUpHome(){
    //stopAnimations();
    //removeAllActive();
    document.title = 'Jacob Rizer - Software Developer'; 
    $("#home-button").addClass('active');
}

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
/*
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
*/
/*
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
/*
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