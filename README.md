# ImageFilter
Implementation of various type Insta Image Filter.

This is a javascript project . beside that i used little bit HTML and CSS.
To use any Filter we first need to input imageData object to be manipulated.To get ImageData of an image it need to be drawn on HTML5 canvas object, from where we can use getImageData func to retrive the Image Data.


THE FOLLOWING FILTER ARE IMPLEMENTED.............
1.IMG_FILTER_NEGATE: Reverses all colors of the image.
2.IMG_FILTER_GRAYSCALE: Converts the image into grayscale.
3.IMG_FILTER_BRIGHTNESS: Changes the brightness of the image. Use arg1 to set the level of brightness. The range for the brightness is -255 to 255.
4.IMG_FILTER_CONTRAST: Changes the contrast of the image. Use arg1 to set the level of contrast.
5.IMG_FILTER_COLORIZE: Like IMG_FILTER_GRAYSCALE, except you can specify the color. Use arg1, arg2 and arg3 in the form of red, green, blue and arg4 for the alpha channel. The range for each color is 0 to 255.
6.IMG_FILTER_EDGEDETECT: Uses edge detection to highlight the edges in the image.
7.IMG_FILTER_EMBOSS: Embosses the image.
8.IMG_FILTER_GAUSSIAN_BLUR: Blurs the image using the Gaussian method.
9.IMG_FILTER_SELECTIVE_BLUR: Blurs the image.
10.IMG_FILTER_MEAN_REMOVAL: Uses mean removal to achieve a "sketchy" effect.
11.IMG_FILTER_SMOOTH: Makes the image smoother. Use arg1 to set the level of smoothness.
12.IMG_FILTER_PIXELATE: Applies pixelation effect to the image, use arg1 to set the block size and arg2 to set the pixelation effect mode.
.........................................................................
 Firstly, here the  changing task is selecting image file from local machine ..
 here used a file type button for choose a file and a load button to load the img file in canvas.
