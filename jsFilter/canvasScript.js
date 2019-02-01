
function getImgFrmCanvas(){
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var imgData = ctx.getImageData(0,0,c.width,c.height);
  return imgData ;
}
function putImgInCanvas(imgData){
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  ctx.putImageData(imgData,0,0);
}
function ConvolutionF(){
 var x = document.getElementById("convo").value;
 if (x=="Sharpen") {
   var imgData = getImgFrmCanvas();
   var targrtColor = new Color(255,153,153);
   var filter = new EmphasizeColorFilter(targrtColor,200);
  var data = filter.transformImage(imgData);
imgData.data=data;
putImgInCanvas(imgData);
  }
  else{
      alert("working: "+x);
  }
}
function colorSwapF(){
  var x = document.getElementById("colorSwap").value;
  if(x=="red"){
  var imgData = getImgFrmCanvas();
  for(var i=0;i<imgData.data.length;i+=4){
    var avg = imgData.data[i]  +   imgData.data[i + 1] +   imgData.data[i + 2];
    avg = avg/3;
//    imgData.data[i+1] = avg;
    imgData.data[i+1] = avg;
    imgData.data[i+2] = avg;
    }
  putImgInCanvas(imgData);
}
else if(x=="green") {
  var imgData = getImgFrmCanvas();
  for(var i=0;i<imgData.data.length;i+=4){
    var avg = imgData.data[i]  +   imgData.data[i + 1] +   imgData.data[i + 2];
    avg = avg/3;
    imgData.data[i+0] = avg;
    //imgData.data[i+1] = avg;
    imgData.data[i+2] = avg;
    }
  putImgInCanvas(imgData)
}
else if(x=="blue"){
  var imgData = getImgFrmCanvas();
  for(var i=0;i<imgData.data.length;i+=4){
    var avg = imgData.data[i]  +   imgData.data[i + 1] +   imgData.data[i + 2];
    avg = avg/3;
    imgData.data[i+0] = avg;
    imgData.data[i+1] = avg;
  //  imgData.data[i+2] = avg;
    }
  putImgInCanvas(imgData)
}
}
function MyFunction(){
  var x = document.getElementById("selector").value;
  if(x=="Grayscale"){
    var imgData = getImgFrmCanvas();
    console.log(imgData);
    var i;
    var avg =0 ;
    for(i=0;i<imgData.data.length;i+=4){
      avg = imgData.data[i]  +   imgData.data[i + 1] +   imgData.data[i + 2] ;
      avg = avg / 3;
      imgData.data[i] = imgData.data[i + 1] = imgData.data[i + 2] = avg;
    }
    putImgInCanvas(imgData);
  }
  else if (x=="Native") {
    var imgData = getImgFrmCanvas();
    for(var i=0;i<imgData.data.length;i+=4){
      imgData.data[i] = 255-imgData.data[i];
      imgData.data[i+1] = 255-imgData.data[i+1];
      imgData.data[i+2] = 255-imgData.data[i+2];
      }
    putImgInCanvas(imgData);
  }
  else if (x=="Blur") {
    var imgData = getImgFrmCanvas();
 var kernal  = [[0,0.2,0],[0.2,0.2,0.2],[0,0.2,0]];
    for(var x = 0; x < imgData.width; x++){
      for(var y = 0; y < imgData.height; y++){
        var red =0 ;
        var green =0;
        var blue =0;
var index = (x+y*imgData.width)*4;
        for(var i=-1;i<=1;i++){
          for(var j=-1;j<=1;j++){
            var index1 = ((x+i) + (y+j) * imgData.width)*4;
          red +=  imgData.data[index1]*kernal[i+1][j+1] ;
          green +=  imgData.data[index1+1]*kernal[i+1][j+1];
          blue +=  imgData.data[index1+2]*kernal[i+1][j+1];
          }
        }

        imgData.data[index] =red;
        imgData.data[index+1] = green;
        imgData.data[index+2] = blue;

      }
    }
putImgInCanvas(imgData);
  }
  else {
    alert("working: "+x);
  }

}




function loadImage() {
        var input, file, fr, img;

        input = document.getElementById('upload');
        if (!input) {
            write("Um, couldn't find the imgfile element.");
        }
        else if (!input.files) {
            write("This browser doesn't seem to support the `files` property of file inputs.");
        }
        else if (!input.files[0]) {
            write("Please select a file before clicking 'Load'");
        }
        else {
            file = input.files[0];
            fr = new FileReader();
            fr.onload = createImage;
            fr.readAsDataURL(file);
        }

        function createImage() {
            img = new Image();
            img.onload = imageLoaded;
            img.src = fr.result;
        }

        function imageLoaded() {
            var canvas = document.getElementById("canvas")
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img,0,0);
            alert(canvas.toDataURL("image/jpg"));
        }

        function write(msg) {
            var p = document.createElement('p');
            p.innerHTML = msg;
            document.body.appendChild(p);
        }
    }
