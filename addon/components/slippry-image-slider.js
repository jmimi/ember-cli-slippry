import Ember from 'ember';
import layout from '../templates/components/slippry-image-slider';

export default Ember.Component.extend({
  layout: layout,
  tagName: "ul",

  /**
   * Array of images url.
   * Url should be absolute.
   */
  images: [],
  isInfinite: true,
  pager: true,
  controls: false,
  height: "200px",
  pagerFromBottom: null,

  slippryElSelector: Ember.computed(function(){
    return "#" + this.get('elementId');
  }),
  slippryBoxId: Ember.computed(function(){
    return `${this.get('elementId')}_slippry_box`;
  }),
  slippryBox: Ember.computed(function(){
    return `<div id="${this.get('slippryBoxId')}" class='sy-box sy-image-slider' style="height: ${this.get('height')}" />`;
  }),

  didInsertElement() {
    this._super(...arguments);
    Ember.$(this.get('slippryElSelector')).slippry({
      slippryWrapper: this.get('slippryBox'),
      pager: this.get('pager'),
      controls: this.get('controls'),
      loop: this.get('isInfinite'),
      transition: "fade",
      speed: 1500,
      adaptiveHeight: false,
      pagerClass: "pager"

    });
    Ember.$(this.get('slippryElSelector')).css('height', this.get('height'));

    //manipulate pager position
    let pagerSelector = `#${this.get('slippryBoxId')} .pager`;
    let pagerFromBottom = this.get('pagerFromBottom') || "30px";
    Ember.$(pagerSelector).css('position', 'relative');
    Ember.$(pagerSelector).css('top', '-' + pagerFromBottom);
  },

  willDestroyElement() {
    Ember.$(this.get('slippryElSelector')).destroySlider();
    this._super(...arguments);
  }
});
