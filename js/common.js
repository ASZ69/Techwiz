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
	
	var text = "";
	var text2 = "";
	var url = "";
	if(window.localStorage.getItem("type") == "I'm a Job Seeker"){
		text = "View Jobs";
		text2 = "Find Jobs";
		url = "jobs.html";
	}else{
		text = "View Candidates";
		text2 = "Find Candidates";
		url = "candidate.html";
	}
	
	var line = '<a href="view/'+url+'" class="nav-link">'+text+'</a>';
	var line2 = '<a href="'+url+'" class="nav-link">'+text+'</a>';
	
	$('#navJob').html(line);
	$('#navJob2').html(line2);
	
	$('#mainHead').html(text2+" Easily");
	
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
	window.location.href = window.location.hostname;
}

function doSearch(ref){
	var url = "";
	if(window.localStorage.getItem("type") == "I'm a Job Seeker"){
		url = "jobs.html";
	}else{
		url = "candidate.html";
	}
	
	var inp = $('#searchInp').val();
	window.location.href = "view/"+url+"?search="+inp;
}