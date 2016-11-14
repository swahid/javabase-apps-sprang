'use strict';

sprang.controller('indexController', ['$scope', 'indexService', function($scope, indexService) {
	var me  = this;
	me.user = 'Saurav Wahid ';
	
	function fetchAllUsers(){
		indexService.fetchAllUsers()
            .then(
            function(d) {
                self.users = d;
            },
            function(errResponse){
                console.error('Error while fetching Users');
            }
        );
    }
	
	
}]);
