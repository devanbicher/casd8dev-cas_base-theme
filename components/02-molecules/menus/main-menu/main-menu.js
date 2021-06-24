//Functionality for menu link expansion
(function ($, Drupal) {
Drupal.behaviors.mainMenu = {
  attach(context) {

    const menu = $('#main-nav', context);
    if (menu.is($('#main-nav'))) {
        const expandBtns = $('#main-nav .expand-sub', context);

        Array.from(expandBtns).forEach((item) => {
          const menuParent = $(item).parent().parent();
          if (menuParent.hasClass('main-menu__item--open')) {
            $(menuParent).find('.main-menu--sub').eq(0).css("display", "block"); //fastest performance for child selection
          }
          else {
            $(menuParent).find('.main-menu--sub').eq(0).css("display", "none");
          }
          item.addEventListener('click', () => {
            $(item).toggleClass('expand-sub--close');
            if (!menuParent.hasClass('main-menu__item--open')) {
              $(menuParent).find('.main-menu--sub').eq(0).css("display", "block");
            }
            else {
              $(menuParent).find('.main-menu--sub').eq(0).css("display", "none");
            }
            menuParent.toggleClass('main-menu__item--open');
          });
        });
      }
   },
};
})(jQuery, Drupal);


//function to move menu on media query
(function ($, Drupal) {
  Drupal.behaviors.mainMenuMobile = {
    attach(context) {
      const menu = $('#main-nav', context);
      const minWidth = window.matchMedia("(min-width: 920px)");
      const menuWrap = $('#block-main-menu-wrap', context);
      if (minWidth.matches) {
        if (menu.hasClass("main-nav--page-top")) {
          menuWrap.removeClass("block-main-menu-wrap--top")
          menu.removeClass("main-nav--page-top");
          menuWrap.appendTo($('#sidebar'));
        }
      }
        else if (!menu.hasClass("main-nav--page-top")) {
          menuWrap.addClass("block-main-menu-wrap--top")
          menu.addClass("main-nav--page-top");
          menuWrap.prependTo($('.layout-container')[0]);
        }
      
      $(window).resize(function() {
        if (minWidth.matches) {
          if (menu.hasClass("main-nav--page-top")) {
            menuWrap.removeClass("block-main-menu-wrap--top")
            menu.removeClass("main-nav--page-top");
            menuWrap.appendTo($('#sidebar'));
          }
        }
        else if (!menu.hasClass("main-nav--page-top")) {
          menuWrap.addClass("block-main-menu-wrap--top")
          menu.addClass("main-nav--page-top");
          menuWrap.prependTo($('.layout-container')[0]);
        }       

      });

      if (menu.is($('#main-nav'))) {
        const toggleExpand = $('.toggle-expand', context);

        // Mobile Menu Show/Hide.
        toggleExpand[0].addEventListener('click', (e) => {
          toggleExpand.toggleClass('toggle-expand--open');
          menu.toggleClass('main-nav--open');
          e.preventDefault();
        });
      }

    },
  };
})(jQuery, Drupal);