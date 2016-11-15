'use strict';

sprang.factory('indexService', ['$http', '$q', '$location', function($http, $q, $location){
	
	var REST_SERVICE_URI= $location.absUrl();
	REST_SERVICE_URI = getProjectName(REST_SERVICE_URI);
	
	console.log(REST_SERVICE_URI);
	
	function getProjectName(url){
		var index,int;
		for (int = 0; int <3; int++) {
			 index = url.indexOf("/");
			 url= url.substring(index+1);
		}
		var index = url.indexOf("/");
		url = url.slice(0, index);
		
		return url;
	}
	
	
	
	 var factory = {
		        fetchAllUsers: fetchAllUsers
		        
		    };

		    return factory;

		    function fetchAllUsers() {
		        var deferred = $q.defer();
		        $http.get(REST_SERVICE_URI)
		            .then(
		            function (response) {
		                deferred.resolve(response.data);
		            },
		            function(errResponse){
		                console.error('Error while fetching Users');
		                deferred.reject(errResponse);
		            }
		        );
		        return deferred.promise;
		    }
}]);