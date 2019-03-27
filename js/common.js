// JavaScript Document

//change navbar on scrol
$(function () {
	$(document).scroll(function () {
		var $nav = $(".navbar-fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

$(document).ready(function(){
	var views = window.localStorage.getItem("pgView");
	$('#pgView').html(parseInt(views)+1);
	window.localStorage.setItem("pgView",parseInt(views)+1);
	
	$('#date').html(new Date().getFullYear() +"-"+(parseInt(new Date().getMonth())+1)+"-"+new Date().getDate());
	
   var auth = window.localStorage.getItem("auth");
   var name = window.localStorage.getItem("name");
    if(auth == "true"){
        $('#navRegister').html('<li class="nav-item sign ml-auto"><a href="#" class="nav-link">Welcome '+name+'</a></li><li onClick="signOut()" class="nav-item sign ml-auto"><a href="" class="nav-link">Sign out</a></li>');
    }
    else{
		$('#startPanel').css("display","block");
    }
    
});

function signOut(){
	window.localStorage.removeItem("auth");
	window.localStorage.removeItem("name");
	window.localStorage.removeItem("type");
}