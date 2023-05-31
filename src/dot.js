import { Circle, Container, extend } from "@svgdotjs/svg.js";
import { registerPlugin } from "./svg.draw.js";

class Dot extends Circle {}

extend(Container, {
  dot: function() {
    const option = {};
    return this.put(new Dot()).attr(option);
  }
});

registerPlugin("circle", {
  // eslint-disable-next-line no-unused-vars
  init: function(e) {
    var p = this.startPoint;
    if (!(this.el instanceof Dot)) {
      this.el.attr({ cx: p.x, cy: p.y, r: 1 });
    }
  },

  // We determine the radius by the cursor position
  // eslint-disable-next-line no-unused-vars
  calc: function(e) {
    var x, y;
    if (event.changedTouches && event.changedTouches.length) {
      x = event.changedTouches[0].clientX;
      y = event.changedTouches[0].clientY;
    } else {
      x = event.clientX;
      y = event.clientY;
    }
    var p = this.transformPoint(x, y);
    var circle = {
      cx: this.startPoint.x,
      cy: this.startPoint.y,

      // calculating the radius
      r: Math.sqrt(
        (p.x - this.startPoint.x) * (p.x - this.startPoint.x) +
          (p.y - this.startPoint.y) * (p.y - this.startPoint.y)
      )
    };

    this.snapToGrid(circle);
    if (!(this.el instanceof Dot)) {
      this.el.attr(circle);
    } else {
      circle.r = undefined;
      this.el.attr(circle);
    }
  }
});
