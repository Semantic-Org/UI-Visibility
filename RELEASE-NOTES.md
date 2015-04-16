### Version 1.12.0 - April 13, 2015

- **Visibility** - Adds updated visibility module from `2.x` channel. Visibility will automatically refresh by default after images load on page refresh. Fixes issues with element positions after image loading.
- **Visibility** - Fixed issue where `precache` behavior was missing from visibility causing `image` lazy loading to fail

### Version 1.11.0 - March 3, 2015

- **Visibiliity** - Attach callbacks to elements visibility conditions like `top visible` `bottom visible`, `passing`. Useful for things like: image lazy loading, infinite scroll content, and recording tracking metrics.

[See the examples](http://www.semantic-ui.com/behaviors/visibility.html#/examples) online for a demonstration.

### Version 1.1.0 - December 02, 2014

- **Transition** now has ``useFailSafe`` parameter (off by default) to ensure transition callback fires even if native ``onAnimationEnd`` event does not fire due to element visibility. [Chromium Bug Report by Product Manager @ Mozilla](https://code.google.com/p/chromium/issues/detail?id=135350#c2) and [this open issue](https://code.google.com/p/chromium/issues/detail?id=437860)

### Version 1.0.0 - November 24, 2014

- **Transition** - Transition will now keep block position of elements hidden with visibility hidden

### Version 0.1.0 - Sep 25, 2013