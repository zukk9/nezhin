// For v2 [data-toggle="dropdown"] is required for [data-submenu].
// For v2 .dropdown-submenu > [data-toggle="dropdown"] is forbidden.
 // submenu (верхнее топ-меню)
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
    // Avoid following the href location when clicking
      event.preventDefault(); 
      // Avoid having the menu to close when clicking
      event.stopPropagation(); 
      // If a menu is already open we close it
      //$('ul.dropdown-menu [data-toggle=dropdown]').parent().removeClass('open');
      // opening the one you clicked on
      $(this).parent().addClass('open');

      var menu = $(this).parent().find("ul");
      var menupos = menu.offset();
    
      if ((menupos.left + menu.width()) + 30 > $(window).width()) {
          var newpos = - menu.width();      
      } else {
          var newpos = $(this).parent().width();
      }
      menu.css({ left:newpos });

  });
    // $('[data-submenu]').submenupicker();