(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
            return factory(window, $);
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(window, require('jquery'));
    } else {
        window.dotsunitedEqualHeightBlocks = factory(window, window.jQuery || window.Zepto);
    }
}(typeof window !== 'undefined' ? window : this, function(window, $) {
    return function(containerSelector, itemSelector) {
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
}));
