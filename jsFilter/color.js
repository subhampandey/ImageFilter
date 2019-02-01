function Color (r,g,b) {

    this.r=r;
    this.g=g;
    this.b=b;
  }

Color.prototype.calculateDistanceTo = function(color){
  return Math.sqrt(
                    (this.r - color.r) * (this.r - color.r) +
                    (this.g - color.g) * (this.g - color.g) +
                    (this.b - color.b) * (this.b - color.b)
                );
}
Color.prototype.toGrayscale = function (){
  return (this.r+this.g+this.b)/3;
}
Color.prototype.areTooDifferentPerComponent = function (color1, color2, threshold) {
       threshold = threshold || 0.1 * 255; // Default value

       return Math.abs(color1.r - color2.r) >= threshold ||
           Math.abs(color1.g - color2.g) >= threshold ||
           Math.abs(color1.b - color2.b) >= threshold;
   }
