angular.module ('bankApp.controllers')

.controller('BoardPageCtrl', ['$scope', 
	function ($scope) {
	    $scope.getButtonData = function(obj) {
	        // alert(obj.target.attributes.data.value);
	    }
	    $scope.advstatus = true;
	    
	}

])
