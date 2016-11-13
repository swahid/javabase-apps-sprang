'use strict';

sprang.controller('homeController2', ['$scope', 'homeService2', function($scope, homeService2) {
	var me  = this;
	me.user = 'Wahid ';
	
	function fetchAllUsers(){
		homeService2.fetchAllUsers()
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
