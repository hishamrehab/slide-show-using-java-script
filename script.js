let myImage = document.getElementById("slideshow");
let Images = ["images/1.jpg","images/10.jpg","images/11.jpg","images/12.jpg","images/13.jpg",
"images/14.jpg","images/16.jpg","images/2.jpg","images/3.jpg","images/4.jpg"];
let i=0;


function slideshow() {
    myImage.setAttribute('src',Images[i]);
 
    
   if(i == Images.length - 1){
    i = 0; 
   }else {
    i++;
   }
    setTimeout(function() {
        slideshow();
    },2000);
}
slideshow();
