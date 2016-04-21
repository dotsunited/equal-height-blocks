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

```less
@import "~dotsunited-equal-height-blocks/lib/mixins";

.list {
    .dotsunited-equal-height-blocks-container();
    
    // If the list item is not a direct descendant if the list element, apply
    // the item wrapper mixin to all wrapper elements, eg. for a html
    // structure like:
    //
    // <ul class="list">
    //   <li>
    //     <div class="list__item">...</div>
    //   </li>
    // </ul>
    /*li {
        .dotsunited-equal-height-blocks-item-wrapper();
    }*/
}

.list__item {
    background: #eee;
}
```

License
-------

Copyright (c) 2015-2016 Dots United GmbH.
Released under the [MIT](LICENSE?raw=1) license.
