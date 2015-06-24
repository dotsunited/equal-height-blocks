var $ = require('jquery');

module.exports = function(containerSelector, itemSelector) {
    function reload() {
        var list = $(this), items = list.find(itemSelector);

        items.css('height', 'auto');

        var perRow = Math.floor(list.width() / items.width());

        if (perRow < 2) {
            return;
        }

        for (var i = 0, j = items.length; i < j; i += perRow) {
            var maxHeight = 0, row = items.slice(i, i + perRow);

            row.each(function() {
                var itemHeight = parseFloat($(this).outerHeight());

                if (itemHeight > maxHeight) {
                    maxHeight = itemHeight;
                }
            });

            row.css('height', maxHeight);
        }
    }

    $(function() {
        var list = $(containerSelector)
            .on('reload', reload)
            .trigger('reload')
            .find('img')
            .on('load', function() {
                $(this)
                    .closest(containerSelector)
                    .trigger('reload')
                ;
            })
        ;

        $(window).on('resize', function() {
            list.trigger('reload');
        });
    });
};
