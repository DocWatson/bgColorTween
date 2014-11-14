var bgColorTween = {
  //the element to apply classes too
  containerElement: 'body',
  //custom prefix (for namespacing purposes)
  prefix: 'bgct',
  //array to hold all the section elements
  sections: [],
  //the type of elements we are basing transitions on
  sectionElement: 'section',

  /**
   * cleanUpClasses
   * helper function that cleans up classes on the container elements
   *
   * @return void
   */
  cleanUpClasses: function() {
    $(bgColorTween.containerElement).removeClassWithPrefix(bgColorTween.prefix);
  },
  /**
   * init
   * initialization function. Finds the desired sections and stores them in an
   * array. Updates class options if any are provided.
   *
   * @return void
   */
  init: function(options) {
    bgColorTween.setupSections();
    for(key in options) {
      if(this.hasOwnProperty(key)) {
        this[key] = options[key];
      }
    }
  },
  /**
   * isInView
   * function that calculates window and element size and determines if the
   * target element is within view
   *
   * @return void
   */
  isInView: function(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  },
  /**
   * setupSections
   * function that finds each of the chosen sections and stores them in an array
   *
   * @return void
   */
  setupSections: function() {
    $(bgColorTween.sectionElement).each(function() {
      bgColorTween.sections.push($(this).attr("id"));
    });
  },
  /**
   * updateContainerClass
   * function that updates the container's class when one of the sections
   * is within view
   *
   * @return void
   */
  updateContainerClass: function() {
    $.each(bgColorTween.sections, function(index, value){
      if (bgColorTween.isInView("#" + value)) {
        if(!$(bgColorTween.containerElement).hasClass(bgColorTween.prefix + "-" + value)) {
          bgColorTween.cleanUpClasses();
          $(bgColorTween.containerElement).addClass(bgColorTween.prefix + "-" + value);
        }
      }
    });
  }
}

/******************
* jQuery extension
* removes classes with a certain prefix type
*
*	used to target the classes added by this library for smooth transitions
*
*	@return DOM element
* *****************/
$.fn.removeClassWithPrefix = function(prefix) {
    this.each(function(i, el) {
        var classes = el.className.split(" ").filter(function(c) {
            return c.lastIndexOf(prefix, 0) !== 0;
        });
        el.className = $.trim(classes.join(" "));
    });
    return this;
};
