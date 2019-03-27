// JavaScript Document

var dataList = candidates;

var jobs = angular.module("candidate", []);

jobs.controller("candidateController", function ($scope, $filter) {
	
    $scope.cards = dataList;
	
	$scope.getRandomNo = function(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	$scope.colors = function(i){
		var colors = ["red","blue","orange","yellow","hotpink","skyblue","orangered","green","white"];
		return colors[i];
	}
	
	$scope.cardClick = function(event){
		var clickedRefer = event.currentTarget;
		var company = clickedRefer.parentElement.parentElement.getElementsByClassName('card-head')[0].innerHTML;
		window.location.href = 'viewJob.html?mainCat=%22'+$scope.mainCat+'%22&subCat=%22'+$scope.subCat+'%22&company=%22'+company+'%22';
	}	

});