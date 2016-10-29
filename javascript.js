angular.module('portalApp')
.controller('restaurantInformationCtrl', ['$scope', function ($scope) {
	
	// restaurant list - hardcoded
	$scope.items = [
		{
			title:'East Side Marios',
			tags: ['Take-Out'],
			details: 'Menu: \n test',
            schedule: "9 - 5"
		},
		{
			title:'Wild Wing',
			tags: ['Take-Out'],
			details: 'Mauris cursus, sapien et malesuada ultrices, purus sapien iaculis tellus, quis semper magna est at leo.'
		},
		{
			title:'Swiss Chalet',
			tags: ['Take-Out', 'Fast Food', 'Sit-Down'],
			details: 'Donec id quam eu odio feugiat sagittis. Duis a tempus neque. Praesent elementum quis ante quis commodo. Sed tincidunt aliquet dolor sit amet laoreet. '
		},
		{
			title:'Manchu Wok',
			tags: ['Take-out'],
			details: 'Proin sem quam, rutrum id ante id, scelerisque tempor quam. Curabitur pharetra turpis at sem placerat, non vehicula ligula tincidunt.'
		},
		{
			title:'Spring Rolls',
			tags: ['Take-out', 'Fast food'],
			details: 'Mauris nec ultricies metus. Cras et dictum justo. Nam a ullamcorper dolor. Cras fringilla metus vel facilisis vehicula.'
		},
		{
			title:'',
			tags: [''],
			details: 'Curabitur scelerisque lorem risus, in luctus orci hendrerit non. Praesent quis tellus dapibus dolor consectetur volutpat.'
		}
	];
	
	// Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('restaurantInformationMain.html', 1);
	
	// This function gets called when user clicks an item in the list
	$scope.showDetails = function(item){
		// Make the item that user clicked available to the template
		$scope.detailsItem = item;		
		$scope.portalHelpers.showView('restaurantInformationDetails.html', 2);
	}
}]);