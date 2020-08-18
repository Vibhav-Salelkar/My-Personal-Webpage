$('.navbar a').on('click', function (e) {
      if (this.hash !== '') {
        e.preventDefault();
    
        const hash = this.hash;
        
        $('html, body').animate({
            scrollTop: $(hash).offset().top-50
          },900);
          $(hash).css({opacity: 0, visibility: "visible"}).animate({opacity: 1.0}, 2500);

      }});


$(document).ready(function(){
        $(".hitem p,.hitem a").animate({
            left: 20
        },1000);
    });

    $(document).ready(function(){
        $('.headcontainer img').css({opacity: 0, visibility: "visible"}).animate({opacity: 1.0}, 2000);
    });

    $(document).ready(function(){
        $('.aboutContainer').css({opacity: 0, visibility: "visible"}).animate({opacity: 1.0}, 2000);
    });

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });