var i = 0 ;
var image = [];  //creating an array of images
var time = 3000; //3 second

//image List
image[0]= 'image1.jpeg';
image[1]= 'image2.jpeg';
image[2]= 'image3.jpeg'; 
image[3]= 'image4.jpeg'; 
image[4]= 'image6.jpeg'; 



//change image
function changeImage() {
	document.slide.src = image[i]; //setting to first image

	if (i<image.length -1) {
		i++; 
		} else {
			i=0; 
		}

	setTimeout("changeImage()", time);
	console.log(123);
}


window.onload = changeImage; 




