$(function(){


	/* ========================================================================= */
	/*  Init WOW js for css3 animation
	/* ========================================================================= */

	var wow = new WOW({
	    mobile: false // trigger animations on mobile devices (default is true)
	});
	wow.init();
	
    var windowHeight = $(window).height();

    $(".fullscreen").css("height", windowHeight);

    $(window).scroll(function() {
    	if ($(window).scrollTop() >= 85) {
    		$(".site-header").addClass("fixed");
    	}else {
    		$(".site-header").removeClass("fixed");
    	}
    });


    $(".testimonial-slider").owlCarousel({
        singleItem : true,
        autoPlay:true,
    });


    // menu toggle 
    $(".toggle-btn").on("click", function() {
    	$(this).toggleClass("active");
    	$(".site-header").toggleClass("active");
    });

    $('#mygallery').justifiedGallery({
        rowHeight : 240,
        lastRow : 'nojustify',
        margins : 6,
        captions: false,
        sizeRangeSuffixes: {
            100 : '_t', // used with images which are less than 100px on the longest side
            240 : '_m', // used with images which are between 100px and 240px on the longest side
            320 : '_n', // ...
            500 : '',
            640 : '_z',
            1024 : '_b' // used which images that are more than 640px on the longest side
        }
    });
    
});



$(window).load(function() {

    $("#preloader").fadeOut("slow");
});


                    

function addElement () { 
    // create a new div element 
    var newDiv = document.createElement("div"); 
    newDiv.className += "form-group";
    // and give it some content 
    var newLable = document.createElement("LABEL")
    newLable.textContent = "Build your question";
    
    var newQuestion = document.createElement("TEXTAREA"); 
    newQuestion.className += "form-control";
    newQuestion.placeholder = "Your question here";
    newQuestion.rows = "1";

    var qTypeOptions = document.createElement("SELECT");
    qTypeOptions.className += "form-control";

    var op1 = document.createElement("option");
    var ty1 = document.createTextNode("**Select response type");
    op1.appendChild(ty1);

    var op2 = document.createElement("option");
    var ty2 = document.createTextNode("Multipal choice");
    op2.appendChild(ty2);

    var op3 = document.createElement("option");
    var ty3 = document.createTextNode("Scale 1 to 5");
    op3.appendChild(ty3);

    var op4 = document.createElement("option");
    var ty4 = document.createTextNode("Fill in the blank");
    op4.appendChild(ty4);

    var op5 = document.createElement("option");
    var ty5 = document.createTextNode("Clickable image");
    op5.appendChild(ty5);


    qTypeOptions.appendChild(op1);
    qTypeOptions.appendChild(op2);
    qTypeOptions.appendChild(op3);
    qTypeOptions.appendChild(op4);
    qTypeOptions.appendChild(op5);

    // // add the text node to the newly created div
    newDiv.appendChild(newLable);  
    newDiv.appendChild(newQuestion);
    newDiv.appendChild(qTypeOptions);

    // add the newly created element and its content into the DOM 
    document.getElementById("newSurvey").appendChild(newDiv);
}






