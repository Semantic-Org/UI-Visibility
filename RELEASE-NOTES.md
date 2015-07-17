### Version 2.0.4 - July 17, 2015

- **Visibility** - `refreshOnResize` now correctly includes a default value [#2615](https://github.com/Semantic-Org/Semantic-UI/issues/2615)

### Version 2.0.2 - July 7, 2015

- **Dropdown** - Dropdown icon will now always toggle menu visibility [#2510](https://github.com/Semantic-Org/Semantic-UI/issues/2510)

### Version 2.0.0 - June 30, 2015

- **Visibility** - Using `.visibility({ type: 'fixed'})` will now automatically add a placeholder element which will swap places with an element when it is attached to the viewport. This should make fixed content drastically simpler.
- **Visibility** - Visibility and sticky now use a more performant [pub/sub pattern](http://davidwalsh.name/pubsub-javascript) that will only attach a single event to context `scroll`.
- **Visibility** - Added two new visibility callbacks `onOnScreen` and `onOffScreen`, which occur, most obviously when an element first appears in or out of a browser's viewport.
- **Transition** - Transition will no longer force visible/hidden with inline styles if `onComplete` callback sets visibility.
- **Visibility/Sticky** - Visibility and sticky now refresh automatically after page content loading to deal with changes in position from images loading
- **Visibility/Sticky** - Visibility now uses pub/sub pattern to greatly improve scroll performance when attaching multiple events
- **Visibility** - Visiblity includes a new setting `checkOnRefresh` which detemrines whether visibility callbacks should occur on resize or refresh
- **Visibility** - Visibility `image` will now wait to lazy load images that are *above* the current screen position, not just below.
- **Visibility** - In returned `calculations` object, `visible` and `hidden` are renamed to `onScreen` and `offScreen`, since this describes more accurately what the value represents.

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

### Version 0.7.0 - Oct 22, 2013

- **Transition** - onShow and onHide callbacks for visibility changing transitions

### Version 0.1.0 - Sep 25, 2013