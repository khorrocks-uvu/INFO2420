	PrintButton1 = new Image
	PrintButton2 = new Image
	logo1 = new Image
	logo2 = new Image
if (document.images) {
	PrintButton1.src = "images/print5.gif"
	PrintButton2.src = "images/print6.gif"
	logo1.src = "Images/logo1.jpg"
	logo2.src = "Images/logo2.jpg"
}


		var imgArray = new Array(
			'img1lg.jpg',
			'img2lg.jpg',
			'img3lg.jpg',
			'img4lg.jpg'
			

		);


		var titleArray = new Array(
			'Quail',
			'Heron',
			'Pigeon',
			'Bald Eagle'
			
		);
			
		var imgPath = "Images/Fullsize/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}
		
