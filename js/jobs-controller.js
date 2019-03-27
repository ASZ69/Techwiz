// JavaScript Document

var dataList = data;

var jobs = angular.module("jobs", []);

jobs.controller("jobsController", function ($scope, $filter) {
	
    $scope.spinnerArray = dataList;
	$scope.mainCat = dataList[0].mainCat;
	$scope.subCat = dataList[0].subCats[0].name;
	
	$scope.mainSpChange = function(){
		$scope.subSpinnerItems = $filter('filter')(dataList, { mainCat: $scope.mainCat })[0].subCats;
		$scope.subCat = $scope.subSpinnerItems[0].name;
	}
	
	$scope.subSpinnerItems = $filter('filter')(dataList, { mainCat: $scope.mainCat })[0].subCats;
	
	$scope.getCards = function(mainCat,subCat){
		var filteredSubData = $filter('filter')(dataList, { mainCat: mainCat });
		var data = filteredSubData[0].subCats;
		
		var cards = $filter('filter')(data, { name: subCat });
		return cards[0].data;
	}
	
	$scope.getRandomNo = function(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	$scope.colors = function(i){
		var colors = ["red","blue","orange","yellow","hotpink","skyblue","orangered","green","white"];
		return colors[i];
	}
	
	$scope.setCatsData = function(mainCat,subCat){
		$scope.mainCat = mainCat;
		$scope.mainSpChange();
		$scope.subCat = subCat;
	}
	
	$scope.cardClick = function(event){
		var clickedRefer = event.currentTarget;
		var company = clickedRefer.parentElement.parentElement.getElementsByClassName('card-head')[0].innerHTML;
		window.location.href = 'viewJob.html?mainCat=%22'+$scope.mainCat+'%22&subCat=%22'+$scope.subCat+'%22&company=%22'+company+'%22';
	}	

});

function left(){
	var vidF = document.getElementById('firstVid');
	vidF.style.marginLeft = "40px";
}

function right(){
	var vidF = document.getElementById('firstVid');
	vidF.style.marginLeft = "-95%";
}