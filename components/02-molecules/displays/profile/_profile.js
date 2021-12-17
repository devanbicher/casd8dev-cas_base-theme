(function ($, Drupal) {
  Drupal.behaviors.jsProfile = {
    attach(context) {
      const accordion = $('.accordion', context);
      if (accordion) {
        if (window.location.href.indexOf('#') > -1) {
          $('.accordion-content')
            .once('jsProfile')
            .first()
            .removeClass('v-hidden');
          $('.toggle-bar').once('jsProfile').first().addClass('open');
        } else if ((location.pathname.split("/").length) == 4 ) {
          $('.accordion-content')
            .once('jsProfile')
            .last()
            .removeClass('v-hidden');
          $('.toggle-bar').once('jsProfile').last().addClass('open');
        }

        accordion.find('a').each(function() {
          $(this).toggleClass('active', $(this).attr('href') == window.location.pathname);
       });

      }
    },
  };
})(jQuery, Drupal);
