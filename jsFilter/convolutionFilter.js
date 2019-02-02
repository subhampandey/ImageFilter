function convolutionFilter(imgData,kernal){
  this.imgData = imgData;
  this.kernal = kernal ;
  this.data = imgData.data;
  this.height = imgData.height;
  this.width = imgData.width;
}
convolutionFilter.prototype.kernalMul = function(x,y){
var color = new Color(0,0,0);
for(var i=-1;i<=1;i++){
  for(var j=-1;j<=1;j++){
    // indexK
    var indexK = ((x+i) + (y+j) * this.width)*4;

    color.r += this.data[indexK]*this.kernal[i+1][j+1];
    color.g += this.data[indexK+1]*this.kernal[i+1][j+1];
    color.b += this.data[indexK+2]*this.kernal[i+1][j+1];

  }
}
return color;
}
convolutionFilter.prototype.transformImage = function (bias){
  for(var x = 0; x < this.width; x++){
    for(var y = 0; y < this.height; y++){
     var index = (x+y*this.width)*4;

  var color = this.kernalMul(x,y);
      this.data[index] = color.r+bias;
      this.data[index+1] = color.g+bias;
      this.data[index+2] = color.b+bias;


    }
  }
return this.data;
}
convolutionFilter.prototype.print = function(){

  console.log(this.data);
}
