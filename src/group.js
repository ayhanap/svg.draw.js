import { registerPlugin } from "./svg.draw.js";

registerPlugin("g", {
  // eslint-disable-next-line no-unused-vars
  init: function(e) {
    var p = this.startPoint;
    this.el.translate(p.x, p.y);
  },

  // We determine the radius by the cursor position
  // eslint-disable-next-line no-unused-vars
  calc: function(e) {}
});
