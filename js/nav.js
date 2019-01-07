
 $('body').on('click','[data-menuid]', function() {
    $(this).toggleClass('active');
})

// Mobile Nav

     $('body').on('click','.mobilenav .controls', function() {
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
    });


     $('body').on('click','.mobilenav .toggle-menu',function(){
        $(this).closest('li.has-submenu').toggleClass('active');
    });
