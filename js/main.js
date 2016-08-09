(function ($) {
    "use strict";
    var $filters = $('.js-filters');
    var $portfolioList = $('.js-portfolio-list');
    var $item = $portfolioList.find('.item');
    var filter;
    
    $filters.on('click', 'a', function(e) {
        var $this = $(this);
        filter = $this.data('filter');

        if($this.hasClass('active')) {
            return;
        }

        $filters.find('a').removeClass('active');
        $this.addClass('active');

        if(filter === 'all') {
            $item.show();
            return;
        }

        $item.each(function () {
            var $this = $(this);
            $this.hide();
            var tags = $this.find('figcaption').data('tags');
            if (!((tags.indexOf(filter) > -1) === false)) {
                $this.show();
            }
        });
        e.preventDefault();
    });
}(jQuery));