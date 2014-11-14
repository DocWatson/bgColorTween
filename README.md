bgColorTween
============

A simple JavaScript class that works in concert with CSS3 to update elements on scroll.

Installation
============

Download the source and include the library in your project. It requires jQuery.

```
<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="bgColorTween.js"></script>
```

A complete demo is included in this repository. Simply open the `index.html` file in your browser to see this code in action

Usage
============
Somewhere in your application, call `bgColorTween.init()` and then add a scroll event to the `window`. Use the `bgColorTween.updateContainerClass();` method to apply a prefixed class to the container element. A complete example would look like:

```
<script>
  $(function(){
    bgColorTween.init();

    $(window).scroll(function(){
      bgColorTween.updateContainerClass();
    });
  });
</script>
```

### Defaults
By default, this class assumes the container to update is the `<body>` element. It also assumes the elements we are waiting to be in view are `<section>` elements. When a `<section>` comes in view, the bgColorTween will update the CSS class on the body element. It will remove any classes it has added and then add the appropriate class to the container. To prevent collisions with other classes, bgColorTween uses a prefix `bgct-`.

The container element, section element and prefix can be overridden by passing an object to the init function. For example, you could change the container to be the `<main>` tag, the section identifier to be `<div>`s, and the prefix to be `scroller` by doing this:

```
bgColorTween.init({
  containerElement: 'main',
  sectionElement: 'div',
  prefix: 'scroller'
});
```

### Caveats
Namespacing the CSS prevents collisions with other classes you may have added. Unfortunately, this requires discipline when setting your styles. Using the demo files as reference, since the default CSS prefix is `bgct-` all of the classes to update in `styles.css` use that prefix.

This demo uses the `transition` CSS property. You may need to add vendor prefixes for better browser compatibility.
