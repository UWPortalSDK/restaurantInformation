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
		},
        {
			title:'Aunty\'s Kitchen',
			tags: ['Sit-in'],
			details: 'Informal counter-serve nook providing familiar Indian & Canadian comfort eats in a minimalist space.',
			menu: 'http://www.auntyskitchen.ca/catering-1/',
			schedule: '11:30 - 11, Sun: 1-10'
		},
		{
			title:'Jack\'s Family Restaurant',
			tags: ['Sit-in'],
			details: 'Spacious establishment serving an array of standard homestyle dishes in a contemporary interior.',
			menu: 'http://www.jacksfamilyrestaurant.ca/',
			schedule: '7-9, Sun: 7-8'
		},
		{
			title:'Bhima\'s Warung',
			tags: ['Sit-in'],
			details: 'Garden tables & creative Southeast Asian fare featuring Indonesian, Vietnamese & Thai dishes.',
			menu: 'http://www.bhimaswarung.com/menu',
			schedule: '5-9'
		},
        {
			title:'Crystal Palace Restaurant',
			tags: ['Sit-in'],
			details: 'Roomy, informal establishment with classic Chinese fare, combo meals & a lunch buffet.',
			menu: 'https://www.just-eat.ca/restaurants-crystal-palace/menu?utm_source=crystalpalacemenu.ca&utm_medium=referral&utm_campaign=b2b',
			schedule: '11-10, Tues: Closed'
		},
        {
			title:'Mediterraneo Restaurant',
			tags: ['Sit-in'],
			details: 'Colourful booth-lined cafe offering familiar Greek & Mediterranean meals for lunch & dinner.',
			menu: 'http://www.mediterraneokw.com/menu.php',
			schedule: '11:30 - 2:30, 5 - 10, Sat: 11:30 - 10, Sun: 5-10'
		},
        {
			title:'Marbles Restaurant',
			tags: ['Sit-in'],
			details: 'Comfy eatery serving a diverse menu of mains like ratatouille, burgers, steak & raw vegan pad Thai.',
			menu: 'https://marblesuptown.com/menu-dinner.html',
			schedule: '11:30 - 10, Fri: 11:30 - 11, Sun: 11:30 - 9'
		},
        {
			title:'East Side Marios',
			tags: ['Take-Out'],
			details: '',
            schedule: '11 am - 11pm everyday',
            menu:'http://www.eastsidemarios.com/menu/main/starters/'
		},
		{
			title:'Wild Wing',
			tags: ['Take-Out'],
			details: 'Mauris cursus, sapien et malesuada ultrices, purus sapien iaculis tellus, quis semper magna est at leo.',
			schedule: ""
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
            schedule: '',
            menu: 'http://www.springrolls.ca/menu.php',
			details: 'Mauris nec ultricies metus. Cras et dictum justo. Nam a ullamcorper dolor. Cras fringilla metus vel facilisis vehicula.'
		},
		{
			title:'China Legend',
			tags: ['Take-out', 'Sit-Down'],
            schedule: '11am - 10pm M-Thurs., 11am - 10:30pm F, 12-10:30pm S - Sun',
			details: 'Located in the beautiful city of Waterloo, our restaurant has been dedicated to offering the most memorable dining experience for you.'
		},
        {
			title:'Empress of India',
			tags: ['Take-out', 'Sit-Down'],
            schedule: '11:30am - 2pm then 5pm-10pm M-Thurs., 11:30am - 2pm then 5pm-10:30pm F-Sat, 4-9pm Sun',
			details: 'Casual restaurant with classic Indian dishes, a bar serving cocktails & a weekday lunch buffet.',
            menu: 'http://empressofindia.ca/menu/main-menu/appetizers'
		},
        {
            title:'Mudies',
            tags: ['Sit-Down', 'Fast food'],
            details: 'Menue: http://www.uwmenu.com/#r5',
            shedule: 'Monday-Firday: 7:00am - 10:00pm\nWeekends: 8:00am - 6:00pm'
        },
        {
            title:'Party Plus',
            tags: ['Sit-Down', 'Fast food'],
            details: 'Menue: http://www.uwmenu.com/#r23',
            shedule: 'Monday-Firday: 7:00am - 10:00pm\nWeekends: 8:00am - 6:00pm'
        },   
		{
            title:'REVelation',
            tags: ['Sit-Down', 'Fast food'],
            details: 'Menue: http://www.uwmenu.com/#r7',
            shedule: 'Monday-Firday: 7:00am - 10:00pm\nWeekends: 8:00am - 6:00pm'
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