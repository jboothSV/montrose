// Mobile Nav

     $('body').on('click','.mobilenav .controls', function() {
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
    });


     $('body').on('click','.mobilenav .toggle-menu',function(){
        $(this).closest('li.has-submenu').toggleClass('active');
    });

// Industry nav 

    $("body").on("click", "[data-toggle-industry]", function(){
        if(window.innerWidth < 1025) {
            $(this).closest(".has-submenu").toggleClass("active");
        }
    });

// Sticky header

    var st;
    $(window).on("scroll", function(e){
        this.st = this.scrollY || document.documentElement.scrollTop;
        if(this.st > 120){
            $("[data-sv-header-section-fixed]").addClass("active");
        }
        if(this.st <= 120){
            $("[data-sv-header-section-fixed]").removeClass("active");
        }
    });
