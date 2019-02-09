'use strict';
 
angular.module('Home')
 
.controller('HomeController',
    ['$scope', '$rootScope', '$location','$http',
    function ($scope, $rootScope, $location,$http) {

        
    	$scope.sections = [
        {name: 'My Accounts'},
        {name: 'Team Accounts'}
       ];


	   

	    $scope.isSelected = function(section) {
	        return $scope.selected === section;
	    }

    	$scope.accounts=function(section){
            
    		
    		$scope.selected = section;
    		
    		$http({
			    method : "get",
			    url : "accounts.json",
			    dataType: 'json',
                contentType: "application/json"
			  }).then(function mySuccess(response) {
			     if(section.name == "My Accounts"){
                 	$scope.list = response.data.Myaccounts;
                 }else{
                 	$scope.list = response.data.Teamaccounts;
                 }
                 
                
			  }, function myError(response) {
			    $scope.myWelcome = response.statusText;
			  });

    	};
}]);