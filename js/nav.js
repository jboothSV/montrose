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
        if(window.innerWidth < 641) {
            $(this).closest(".has-submenu").toggleClass("active");
        }
    });
