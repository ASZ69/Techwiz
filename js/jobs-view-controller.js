// JavaScript Document

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

var dataList = data;

var jobs = angular.module("jobView", []);

jobs.controller("jobViewController", function ($scope, $filter) {
	
	var url = window.location.search.replace("?", "").replaceAll("%22", "").replaceAll("%20", " ");
    if (url == "") {
        $('body').append('<h1>You cannot access this page directly...</h1>');
    } else {
        var parts = url.split("&");
        $scope.mainCat = parts[0].split("=")[1];
        $scope.subCat = parts[1].split("=")[1];
        var company = parts[2].split("=")[1];

        $scope.subCats = $filter('filter')(dataList, { mainCat: $scope.mainCat })[0].subCats;
        $scope.companiesData = $filter('filter')($scope.subCats, { name: $scope.subCat })[0].data;
        $scope.jobData = $filter('filter')($scope.companiesData, { companyTitle: company })[0];
    }

});