// JavaScript Document

//change navbar on scrol
$(function () {
	$(document).scroll(function () {
		var $nav = $(".navbar-fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
    
});

$(document).ready(function(){
   var auth = window.localStorage.getItem("auth");
    if(auth == "true"){
        $('#navRegister').html('<li class="nav-item sign ml-auto"><a href="view/auth.html" class="nav-link">Sign out</a></li>');
       
    }
    else{
        $('#navRegister').html(' <li class="nav-item sign ml-auto"><a href="view/auth.html" class="nav-link">Sign in</a></li><li class="nav-item sign ml-auto"> <a href="view/auth.html" class="nav-link">Sign up</a></li>');
    }
    
});