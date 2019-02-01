function EmphasizeColorFilter (targetColor,threshold){
  this.targetColor = targetColor;
  this.threshold = threshold ;
}

EmphasizeColorFilter.prototype.targetColorPredicate = function(color){
  return this.targetColor.calculateDistanceTo(color)>=this.threshold;
}

EmphasizeColorFilter.prototype.transformImage = function(imgData){
  var data = imgData.data;
  for(var i=0;i<data.length;i+=4){
    var color = new Color(data[i],data[i+1],data[i+2]);
    if(this.targetColorPredicate(color)){
      var grayscale = color.toGrayscale();
      data[i]=data[i+1]=data[i+2]=grayscale;
    }
  }
  return data;
}
