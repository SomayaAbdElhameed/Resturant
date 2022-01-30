
"use strict";


jQuery(document).ready(function ($) {

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});




	jQuery('.scrollup').click(function () {
		$("html, body").animate({scrollTop: 0}, 2000);
		return false;
	});

	jQuery('.nav a').bind('click', function () {
		$('html , body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 80
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
	
	
	jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var height = 300;
	  //alert(batas);
	  
	  if (top > height) {
		jQuery('.navbar-fixed-top').addClass('menu-scroll');
	  } else {
	   jQuery('.navbar-fixed-top').removeClass('menu-scroll');
	  }
	});	
 // Scroll up 

    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    }); 
 
 new WOW().init();

});





////////////////////////////get api/////////////////////





                           
   async function getApi (){
    var response = await fetch("https://forkify-api.herokuapp.com/api/search?&q=pizza");    
    var data = await response.json(); 

    document.querySelector(".test img").src=data.recipes[0].image_url;
    document.querySelector(".test h2").innerHTML=data.recipes[0].title;
    document.querySelector(".test h5").innerHTML=data.recipes[0].publisher;
    document.querySelector(".test p").innerHTML="Read Details";

    document.querySelector(".test1 img").src=data.recipes[1].image_url;
    document.querySelector(".test1 h2").innerHTML=data.recipes[1].title;
    document.querySelector(".test1 h5").innerHTML=data.recipes[1].publisher;
    document.querySelector(".test1 p").innerHTML="Read Details";


    document.querySelector(".test2 img").src=data.recipes[2].image_url;
    document.querySelector(".test2 h2").innerHTML=data.recipes[2].title;
    document.querySelector(".test2 h5").innerHTML=data.recipes[2].publisher;
    document.querySelector(".test2 p").innerHTML="Read Details";

    document.querySelector(".test3 img").src=data.recipes[3].image_url;
    document.querySelector(".test3 h2").innerHTML=data.recipes[3].title;
    document.querySelector(".test3 h5").innerHTML=data.recipes[3].publisher;
    document.querySelector(".test3 p").innerHTML="Read Details";


    document.querySelector(".test4 img").src=data.recipes[4].image_url;
    document.querySelector(".test4 h2").innerHTML=data.recipes[4].title;
    document.querySelector(".test4 h5").innerHTML=data.recipes[4].publisher;
    document.querySelector(".test4 p").innerHTML="Read Details";


    document.querySelector(".test5 img").src=data.recipes[5].image_url;
    document.querySelector(".test5 h2").innerHTML=data.recipes[5].title;
    document.querySelector(".test5 h5").innerHTML=data.recipes[5].publisher;
    document.querySelector(".test5 p").innerHTML="Read Details";

    document.querySelector(".test6 img").src=data.recipes[6].image_url;
    document.querySelector(".test6 h2").innerHTML=data.recipes[6].title;
    document.querySelector(".test6 h5").innerHTML=data.recipes[6].publisher;
    document.querySelector(".test6 p").innerHTML="Read Details";

    document.querySelector(".test7 img").src=data.recipes[7].image_url;
    document.querySelector(".test7 h2").innerHTML=data.recipes[7].title;
    document.querySelector(".test7 h5").innerHTML=data.recipes[7].publisher;
    document.querySelector(".test7 p").innerHTML="Read Details";


    document.querySelector(".test8 img").src=data.recipes[8].image_url;
    document.querySelector(".test8 h2").innerHTML=data.recipes[8].title;
    document.querySelector(".test8 h5").innerHTML=data.recipes[8].publisher;
    document.querySelector(".test8 p").innerHTML="Read Details";

    
    document.querySelector(".test9 img").src=data.recipes[9].image_url;
    document.querySelector(".test9 h2").innerHTML=data.recipes[9].title;
    document.querySelector(".test9 h5").innerHTML=data.recipes[9].publisher;
    document.querySelector(".test9 p").innerHTML="Read Details";

     
    document.querySelector(".test10 img").src=data.recipes[10].image_url;
    document.querySelector(".test10 h2").innerHTML=data.recipes[10].title;
    document.querySelector(".test10 h5").innerHTML=data.recipes[10].publisher;
    document.querySelector(".test10 p").innerHTML="Read Details";

     
    document.querySelector(".test11 img").src=data.recipes[11].image_url;
    document.querySelector(".test11 h2").innerHTML=data.recipes[11].title;
    document.querySelector(".test11 h5").innerHTML=data.recipes[11].publisher;
    document.querySelector(".test11 p").innerHTML="Read Details";

     
    document.querySelector(".test12 img").src=data.recipes[12].image_url;
    document.querySelector(".test12 h2").innerHTML=data.recipes[12].title;
    document.querySelector(".test12 h5").innerHTML=data.recipes[12].publisher;
    document.querySelector(".test12 p").innerHTML="Read Details";

     
    document.querySelector(".test13 img").src=data.recipes[13].image_url;
    document.querySelector(".test13 h2").innerHTML=data.recipes[13].title;
    document.querySelector(".test13 h5").innerHTML=data.recipes[13].publisher;
    document.querySelector(".test13 p").innerHTML="Read Details";

     
    document.querySelector(".test14 img").src=data.recipes[14].image_url;
    document.querySelector(".test14 h2").innerHTML=data.recipes[14].title;
    document.querySelector(".test14 h5").innerHTML=data.recipes[14].publisher;
    document.querySelector(".test14 p").innerHTML="Read Details";

  }

  getApi();





// const api ="https://forkify-api.herokuapp.com/api/search?&q=pizza";

//  async function getData(){
//     const response = await fetch (api)
//     const data = await response.json();
//   printData(data)


// }

// function printData(data){
//     const Header = document.querySelector("#header")
//     const Content document.querySelector("#header")

// }

// getData()









/*---------------------------------------------*
     * Counter 
---------------------------------------------*/

	 $('.statistic-counter').counterUp({
        delay: 8,
        time: 4000
    });
    $('.statistic').counterUp({
        delay: 8,
        time: 4000
    });



    // -------------------------- validate------------------------

    function validate (){
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var messagee = document.getElementById("error");
        messagee.style.textAlign = "center";
        messagee.style.color = "#dd4b39";
        messagee.style.fontFamily =  "cursive";
        messagee.style.padding = "10px";
        messagee.style.transition = "all 1s ease-in-out";
        messagee.style.marginBottom = "10px";
      var text;
      
    
        var text;
        if (email.indexOf("@") == -1 && phone==="") {
            text = "please Enter Valid Email and valid phone";
            messagee.innerHTML = text;
            return false;
          
       
           }
    
       else if (email.indexOf("@") == -1) {
         text = "please Enter Valid Email";
         messagee.innerHTML = text;
         return false;
       
    
        }else if (phone===""){
            text = "please Enter Valid phone";
            messagee.innerHTML = text;
            return false;
        }else {
            alert("succes");
            return true;
        }
        
    }


/////////////////////////////////////////////////////////////
    // stor


    //Use an IIFE to avoid contanminating global namespce
(function(){
  //Grab stores items from the DOM
  let storeItems = document.querySelectorAll('.store-item');
  //grab lightbox container 
  let lightBox = document.querySelector('.lightbox-container');
   //grab the div with the lightbox item
  let lightBoxItem = document.querySelector('.lightbox-item');
  //grab all the images from the store items
  let images = document.querySelectorAll('.store-img');
  
  
  // set up an array for the items
  let imageList = [];
  //set up a counter to run through the list of images
  let imageCounter = 0;
  //use a forEach loop to get a copy of all the images and push into an array of items
  images.forEach(function(image){
    //push each imageto the array of images
    imageList.push(image.src);
  })
  
  //Add an a click event listener to each store item
  storeItems.forEach(function(item) {
    //On click, allow the model container to show 
    //Change css class from display none to display block
    item.addEventListener('click', function(e){
    //grab the image of the item that was clicked
    let image = e.target.src;
    //change the background img property of the lightbox item
    lightBoxItem.style.backgroundImage = `url(${image})`;
    //show the modal with the selected image
    lightBox.classList.add('show');
    //get the array index number for the image that was selected
    imageCounter = imageList.indexOf(image);
    });
  }); 
  
  //wire up the left and right buttons
  //select left button from the DOM
  let btnLeft = document.querySelector('.btnLeft');
  btnLeft.addEventListener('click', function(){
    imageCounter--;
    if (imageCounter < 0){
      imageCounter = imageList.length -1;
    }
    lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`
  });
    //select left button from the DOM
  let btnRight = document.querySelector('.btnRight');
  btnRight.addEventListener('click', function(){
    imageCounter++;
    if (imageCounter >= imageList.length){
      imageCounter = 0;
    }
    lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
  });
  
  //wire up the modal's close button
    let lightBoxClose = document.querySelector('.lightbox-close');
    lightBoxClose.addEventListener('click', function(){
    lightBox.classList.remove('show');
    });
  
  
})();

