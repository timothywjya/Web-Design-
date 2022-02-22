var fancyHover = function () {
var init = function (parentUL) {
$(window).load(function(){
goGrayscale(parentUL); //Uses canvas to create grayscale copies of the image and fade it in and out
});
//On hover, animate caption in and out
$('li', parentUL).hover(
function () {
$('figcaption', this).show().animate({ 'left': '0px', 'opacity': 1 }, 'fast', 'easeOutQuart');
},
function () {
$('figcaption', this).animate({ 'left': '-300px', 'opacity': 0 }, 'fast', 'easeInQuart');
}
);
}
//GRAYSCALING IMAGES ON HOVER
//function goGrayscale(parentUL, fadeInSpeed, fadeOutSpeed) {
//fadeInSpeed = fadeInSpeed == null ? 1400 : fadeInSpeed; //checks if fadeInSpeed was passed in the fuction call, if not, sets default
//fadeOutSpeed = fadeOutSpeed == null ? 1500 : fadeOutSpeed; //checks if fadeOutSpeed was passed in the fuction call, if not, sets default
//parentUL.css("position", "relative");
//Create grayscale clone of each image
//$('img', parentUL).each(function () {
//var el = $(this);
//el.css({ "position": "absolute" }).wrap("<div class='grayscaleWrapper'>").clone().css({ "position": "absolute", "z-index": "5", "opacity": "0" }).insertBefore(el);
//el.parent().css({ "width": this.width, "height": this.height });
//this.src = grayscale(this.src);
//Show color initially
//$(this).parent().find('img:first').stop().animate({ opacity: 1 }, fadeInSpeed);
//});
// Fade color image on hover for all other images
//$('li', parentUL).mouseover(function () {
//$('img', parentUL).each(function () {
//$(this).parent().find('img:first').stop().animate({ opacity: 0 }, fadeOutSpeed);
//});
//$(this).find('img:first').stop().animate({ opacity: 1 }, fadeInSpeed); //Keep hovered image in color
//});
// On mouseout restore color to all images
//$('li', parentUL).mouseout(function () {
//$('img', parentUL).each(function () {
//$(this).parent().find('img:first').stop().animate({ opacity: 1 }, fadeOutSpeed);
//});
//});
//}
// Grayscale img passed here
function grayscale(src) {
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var imgObj = new Image();
var pHeight, pWidth;
imgObj.src = src;
canvas.width = imgObj.width;
canvas.height = imgObj.height;
ctx.drawImage(imgObj, 0, 0);
var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
for (var y = 0, pHeight = imgPixels.height; y < pHeight; y++) {
for (var x = 0, pWidth = imgPixels.width; x < pWidth; x++) {
var i = (y * 4) * imgPixels.width + x * 4;
//revised grayscale coefficients
var avg = ((imgPixels.data[i] * .2989 + imgPixels.data[i + 1] * .5870 + imgPixels.data[i + 2] * .114));
imgPixels.data[i] = avg; //red
imgPixels.data[i + 1] = avg; //green
imgPixels.data[i + 2] = avg; //blue
}
}
ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
return canvas.toDataURL();
}
return {
init: init
};
}();