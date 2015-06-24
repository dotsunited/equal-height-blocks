Equal Height Blocks
===================

Flexbox Based Responsive Equal Height Blocks With JavaScript Fallback.

Based on http://osvaldas.info/flexbox-based-responsive-equal-height-blocks-with-javascript-fallback

Usage
-----

With webpack:

```javascript
if (!Modernizr.testAllProps('flexWrap')) {
    require.ensure(['dotsunited-equal-height-blocks/lib/fallback'], function() {
        var equalHeightBlocks = require('dotsunited-equal-height-blocks/lib/fallback');
        equalHeightBlocks('.list', '.list__item');
    });
}
```

```css
@import "~dotsunited-equal-height-blocks/lib/mixins";

.list {
    .equal-height-blocks-container();
}

.list__item {
    .equal-height-blocks-item();
}
```

Dependencies
------------

* jQuery
* Modernizr (See [modernizr-config.json](modernizr-config.json))

License
-------

Copyright (c) 2015 Dots United GmbH.
Released under the [MIT](LICENSE?raw=1) license.
