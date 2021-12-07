(function ($, Drupal) {
  Drupal.behaviors.jsAccordion = {
    attach(context) {
      const accordion = $('.accordion', context);

      $('.accordion-content')
        .once('jsAccordion')
        .each(function () {
          $(this).css('height', $(this).height() + 'px');
          $(this).prev().children('.toggle-sign').addClass('closed');
          $(this).addClass('v-hidden');

          $('.accordion-content').first().removeClass('v-hidden');
          $('.toggle-sign').first().removeClass('closed');
        });

    //   $(window).resize(function () {
    //     $('.accordion-content')
    //       .not('.v-hidden')
    //       .each(function () {
    //           console.log($(this).height());
    //         $(this).css('height', $(this).height() + 'px');
    //       });
    //   });

      accordion.once('jsAccordion').bind('click', (event) => {
        if (event.target.className === 'toggle-bar') {
          $('.accordion-content').addClass('v-hidden');
          $('.toggle-sign').addClass('closed');
          $(event.target).next().removeClass('v-hidden');
          $(event.target).children('.toggle-sign').removeClass('closed');
        }
      });

    },
  };
})(jQuery, Drupal);
