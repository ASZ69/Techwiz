// JavaScript Document

var dataList = data;

var jobs = angular.module("jobs", []);

jobs.controller("jobsController", function ($scope, $filter) {
	
//    $scope.showCat = function (event) {
//        var clickedRefer = event.currentTarget;
//        var category = clickedRefer.innerHTML;
//
//        $scope.eventsArray = $filter('filter')(dataList, { name: category });
//        initHover();
//    };

//    $scope.viewMore = function (event) {
//        var clickedRefer = event.currentTarget;
//        var sessionName = clickedRefer.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("h3")[0].innerHTML;
//
//        $(".scroll-container h2").addClass("mr-r-30p");
//        $(".right-page h3").css("animation", "2s top-to-down-margin");
//
//        $scope.moreDetailsArray = $filter('filter')($scope.eventsArray[0].seasons, { name: sessionName });
//        $("#frame").hide();
//
//        setTimeout(function () {
//            var data = $("#vidData").html().trim();
//            $("#frame").attr("src", data);
//            $("#frame").show();
//        }, 1000);
//
//        $(".right-view").css("display", "none");
//        $(".right-page").css("display", "block");
//
//        initHover();
//
//    };

//    $scope.viewSubCategory = function (event) {
//        var clickedRefer = event.currentTarget;
//        var sessionName = clickedRefer.innerHTML;
//
//        var leagueName = clickedRefer.parentElement.parentElement.getElementsByTagName("h3")[0].innerHTML;
//        $scope.eventsArray = $filter('filter')(dataList, { name: leagueName });
//
//        $(".scroll-container h2").addClass("mr-r-30p");
//        $(".right-page h3").css("animation", "2s top-to-down-margin");
//
//        $scope.moreDetailsArray = $filter('filter')($scope.eventsArray[0].seasons, { name: sessionName });
//        $("#frame").hide();
//
//        setTimeout(function () {
//            var data = $("#vidData").html().trim();
//            $("#frame").attr("src", data);
//            $("#frame").show();
//        }, 1000);
//
//
//        $(".right-view").css("display", "none");
//        $(".right-page").css("display", "block");
//
//        initHover();
//
//    };
	
    $scope.spinnerArray = dataList;
	$scope.mainCat = dataList[0].mainCat;
	$scope.subCat = dataList[0].subCats[0].name;
	
	$scope.getSubSpItems = function(selectedMain){
		var filteredSubSpinner = $filter('filter')(dataList, { mainCat: selectedMain });
		return filteredSubSpinner[0].subCats;
	}
	
	$scope.getRandomNo = function(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	$scope.getCards = function(mainCat,subCat){
		var filteredSubData = $filter('filter')(dataList, { mainCat: mainCat });
		var data = filteredSubData[0].subCats;
		
		var cards = $filter('filter')(data, { name: subCat });
		return cards[0].data;
	}
	
	$scope.showCards = function(mainCat,subCat){
		
	}
	
	$scope.colors = function(i){
		var colors = ["red","blue","orange","yellow","hotpink","skyblue","orangered","green","white"];
		return colors[i];
	}

});