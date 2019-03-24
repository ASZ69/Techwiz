// JavaScript Document

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

    //	check url to get specific result
//	$scope.eventsArray = $filter('filter')(dataList, { name: 'ICC ODI WorldCup' });
//    $scope.categoryArray = dataList;
    $scope.spinnerArray = [{id: '1',name: "Software Enginear"},{id: '2',name: "Hardware Enginear"},{id: '3',name: "Extra Enginear"}];

});