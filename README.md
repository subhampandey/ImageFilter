# ImageFilter
Implementation of various type Insta Image Filter.

This is a javascript project . beside that i used little bit HTML and CSS.
To use any Filter we first need to input imageData object to be manipulated.To get ImageData of an image it need to be drawn on HTML5 canvas object, from where we can use getImageData func to retrive the Image Data.


THE FOLLOWING FILTER ARE IMPLEMENTED.............
1. BOX-BLUR ---> mul kernal[0,0.2,0,0.2,0.2,0.2,0,0.2,0] with imgData.data and update it(more convolutionFilter)
2. EmphasizeColor --> take target color . if a pixels color less than target color grayscale it.
3. ColorSwap --> take a pixel .. grascale any two value ( like red or green) and leave the other on as it is. 
.........................................................................
 Firstly, here the  changing task is selecting image file from local machine ..
 here used a file type button for choose a file and a load button to load the img file in canvas.
