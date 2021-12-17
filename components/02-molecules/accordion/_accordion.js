(function ($, Drupal) {
  Drupal.behaviors.jsAccordion = {
    attach(context) {
      const accordion = $('.accordion', context);

      $('.accordion-content').once('jsAccordion').each(function () {
          $(this).css('height', $(this).height() + 'px');
          $(this).prev().children('.toggle-sign').addClass('closed');
          $(this).addClass('v-hidden');

          // $('.accordion-content').first().removeClass('v-hidden');
          // $('.toggle-bar').first().addClass('open');
        });

      //   $(window).resize(function () {
      //     $('.accordion-content')
      //       .not('.v-hidden')
      //       .each(function () {
      //           console.log($(this).height());
      //         $(this).css('height', $(this).height() + 'px');
      //       });
      //   });

      // accordion.once('jsAccordion').bind('click', (event) => {
      //   if (event.target.className === 'toggle-sign closed') {
      //     $('.accordion-content').addClass('v-hidden');
      //     $('.toggle-sign').addClass('closed');
      //     $(event.target).parent().next().removeClass('v-hidden');
      //     $(event.target).removeClass('closed');
      //   } else if (event.target.className === 'toggle-bar') {
      //     $('.accordion-content').addClass('v-hidden');
      //     $('.toggle-sign').addClass('closed');
      //     $(event.target).next().removeClass('v-hidden');
      //     $(event.target).children('.toggle-sign').removeClass('closed');
      //   }
      // });

      $('.toggle-bar').on('click', function(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();

        if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $(this).next('.accordion-content').addClass('v-hidden');

        } else {
          $('.toggle-bar').removeClass('open');
          $('.accordion-content').addClass('v-hidden');
          $(this).addClass('open');
          $(this).next('.accordion-content').removeClass('v-hidden');
        }
      });

    },
  };
})(jQuery, Drupal);
