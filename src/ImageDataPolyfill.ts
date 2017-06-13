export class ImageDataPolyfill {
  public width: number;
  public height: number;
  public data: Uint8ClampedArray;
  constructor(
    arrayOrWidth: Uint8ClampedArray | number,
    widthOrHeight: number,
    height?: number
  ) {
    if (height !== undefined && typeof arrayOrWidth !== "number") {
      this.width = widthOrHeight;
      this.height = height;
      this.data = arrayOrWidth;
    } else if (typeof arrayOrWidth === "number") {
      this.width = arrayOrWidth;
      this.height = widthOrHeight;
      this.data = new Uint8ClampedArray(this.width * this.height * 4);
    }
  }
}

(function polyfillImageData(self: any) {
  if (!self.ImageData) {
    self.ImageData = ImageDataPolyfill;
  }
})(
  typeof process !== "undefined" &&
    {}.toString.call(process) === "[object process]"
    ? global
    : self
);
