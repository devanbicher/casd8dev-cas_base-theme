(function ($, Drupal) {
    Drupal.behaviors.lightbox = {
      attach: function(context) {
        $('.lightbox-parent', context).once('lb-listener').each(function() {
            var parent = $(this);
            parent.find('.lightbox-trigger button').click(function() {
                parent.find('.lightbox').addClass('lightbox--visible');
                $('body').css({'overflow':'hidden'});
                $(document).bind('scroll',function () { 
                     window.scrollTo(0,0); 
                });
                parent.find('.lightbox-close button').focus();
                $(document).on('keyup', function(e) {
                    if (e.key == 'Escape') {
                        parent.find('.lightbox').removeClass('lightbox--visible');
                        $(document).unbind('scroll'); 
                        $('body').css({'overflow':'visible'});
                    }
                });
            });
            parent.find('.lightbox-close button').click(function() {
                parent.find('.lightbox').removeClass('lightbox--visible');
                $(document).unbind('scroll'); 
                $('body').css({'overflow':'visible'});
            });
        });
      },
      detach: function(context) {
        $('.lightbox-parent', context).removeOnce('lb-listener');
      }
    }
})(jQuery, Drupal);
