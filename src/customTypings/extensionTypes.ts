import "@svgdotjs/svg.js";

declare module "@svgdotjs/svg.js" {
  interface Element {
    draw(event: Event | string, options?: object, value?: any): this;
  }
}
