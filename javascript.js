angular.module('portalApp')
.controller('restaurantInformationCtrl', ['$scope', function ($scope) {
	
	// restaurant list - hardcoded
	$scope.items = [
        {
			title:'Aunty\'s Kitchen',
			tags: ['Sit-in'],
			details: 'Informal counter-serve nook providing familiar Indian & Canadian comfort eats in a minimalist space.',
            address: '160 University Ave W, Waterloo, ON N2L 3E9',
			menu: 'http://www.auntyskitchen.ca/catering-1/',
			schedule: '11:30 - 11, Sun: 1-10'
		},
		{
			title:'Jack\'s Family Restaurant',
			tags: ['Sit-in'],
			details: 'Spacious establishment serving an array of standard homestyle dishes in a contemporary interior.',
            address: '20 Benjamin Rd, Waterloo, ON N2V 2G8',
			menu: 'http://www.jacksfamilyrestaurant.ca/',
			schedule: '7-9, Sun: 7-8'
		},
		{
			title:'Bhima\'s Warung',
			tags: ['Sit-in'],
			details: 'Garden tables & creative Southeast Asian fare featuring Indonesian, Vietnamese & Thai dishes.',
			address: '262 King St N, Waterloo, ON N2J 2Y8',
            menu: 'http://www.bhimaswarung.com/menu',
			schedule: '5-9'
		},
        {
			title:'Crystal Palace Restaurant',
			tags: ['Sit-in'],
			details: 'Roomy, informal establishment with classic Chinese fare, combo meals & a lunch buffet.',
			address: '10 King St S, Waterloo, ON N2J',
            menu: 'https://www.just-eat.ca/restaurants-crystal-palace/menu?utm_source=crystalpalacemenu.ca&utm_medium=referral&utm_campaign=b2b',
			schedule: '11-10, Tues: Closed'
		},
        {
			title:'Mediterraneo Restaurant',
			tags: ['Sit-in'],
			details: 'Colourful booth-lined cafe offering familiar Greek & Mediterranean meals for lunch & dinner.',
			address: '425 University Ave E, Waterloo, ON N2K 4C9',
            menu: 'http://www.mediterraneokw.com/menu.php',
			schedule: '11:30 - 2:30, 5 - 10, Sat: 11:30 - 10, Sun: 5-10'
		},
        {
			title:'Marbles Restaurant',
			tags: ['Sit-in'],
			details: 'Comfy eatery serving a diverse menu of mains like ratatouille, burgers, steak & raw vegan pad Thai.',
			address: '8 William St E, Waterloo, ON N2J 1J9',
            menu: 'https://marblesuptown.com/menu-dinner.html',
			schedule: '11:30 - 10, Fri: 11:30 - 11, Sun: 11:30 - 9'
		},
        {
			title:'East Side Mario\'s',
			tags: ['Take-Out'],
			details: 'East Side Mario\'s is a Canadian chain of casual dining restaurants, managed by its parent holding company Prime Restaurants, which operates in Canada and the United States. The restaurant specializes in Italian-American cuisine.',
            address: 'University Shops Plaza, 170 University Ave W, Camrose, ON N2L 3E9',
            schedule: '11 am - 11pm everyday',
            menu:'http://www.eastsidemarios.com/menu/main/starters/'
		},
		{
			title:'Wild Wing',
			tags: ['Take-Out'],
			details: 'Chain of family restaurant franchises across Ontario featuring chicken wings in a wide variety of flavours, as well as ribs, fries and salads.',
			address: 'Food Basics, 600 Laurelwood Dr, Waterloo, ON N2V 0A2',
            schedule: 'M - Thurs: 11am to 11pm, F-Sat: 11am to 12am, Sun: 12pm to 10pm',
            menu: 'http://www.wildwingrestaurants.com/wp-content/uploads/2015/11/WW-TakeOutMenu-ON.pdf'
        },
		{
			title:'Swiss Chalet',
			tags: ['Take-Out', 'Fast Food', 'Sit-Down'],
			menu: 'https://www.swisschalet.com/menu',
            address: '267 Weber St N, Waterloo, ON N2J 3H7',
            schedule: 'M - Sat: 11:30am - 10pm, Sun: 11am - 9:30pm',
            details: 'Swiss Chalet is a Canadian chain of casual dining restaurants founded in 1954 in Toronto. As of 2008, there are over 200 Swiss Chalet restaurants in Canada.'
		},
		{
			title:'Manchu Wok',
			tags: ['Take-out'],
            menu: 'http://manchuwok.com/menu/',
            address: 'Conestoga Mall, 550 King St N, Waterloo, ON N2L 5W6',
            schedule: '10Am - 8Pm everyday',
			details: 'Counter-serve chain specializing in build-your-own stir-fries & other classic Chinese dishes'
		},
		{
			title:'Spring Rolls',
			tags: ['Take-out', 'Fast food'],
            schedule: 'Sun - Thurs: 11am - 10pm, F-Sat.: 11am - 11pm',
            address: 'Conestoga Mall, 550 King St N, Waterloo, ON N2L 5W6',
            menu: 'http://www.springrolls.ca/menu.php',
			details: 'Where You Can Enjoy Best, Delicious And Sizzling Food Dining With Your Loved Ones.'
		},
		{
			title:'China Legend',
			tags: ['Take-out', 'Sit-Down'],
            menu: 'http://www.chinalegend.ca/menu.asp',
            address: '160 University Ave W #9, Waterloo, ON N2L 3E9',
            schedule: '11am - 10pm M-Thurs., 11am - 10:30pm F, 12-10:30pm S - Sun',
			details: 'Located in the beautiful city of Waterloo, our restaurant has been dedicated to offering the most memorable dining experience for you.'
		},
        {
			title:'Empress of India',
			tags: ['Take-out', 'Sit-Down'],
            schedule: '11:30am - 2pm then 5pm-10pm M-Thurs., 11:30am - 2pm then 5pm-10:30pm F-Sat, 4-9pm Sun',
			address: '103 King St N, Waterloo, ON N2J 2X5',
            details: 'Casual restaurant with classic Indian dishes, a bar serving cocktails & a weekday lunch buffet.',
            menu: 'http://empressofindia.ca/menu/main-menu/appetizers'
		},
        {
            title:'Mudies',
            tags: ['Sit-Down', 'Fast food'],
            details:  "This is a great place to meet your friends!"+
                      "The aroma of fresh baked breads and pastries from our"+
                      "in-house UW Bakery will surely make you take a deep"+
                      "breath. Mudie’s offers a large selection of vegetarian"+
                      "foods, grab n’ go items, salad bar, grill items,"+
                      "made-to-order deli sandwiches and pitas, full breakfast,"+
                      "and convenience foods. A hot entrée item and side dishes"+
                      "are available every lunch and dinner hour.",
            schedule: 'Monday-Firday: 7:00am - 8:00pm\nWeekends: 8:00am - 6:00pm',
            address: 'V1 UWaterloo',
            menu: 'http://www.uwmenu.com/#r5'
        },
        {
            title:'Party Plus',
            tags: ['Sit-Down', 'Fast food'],
            details: 'One of the most delicious in uwaterloo ever! Do not miss it.',
            address: 'NH UWaterloo',
            menu: 'http://www.uwmenu.com/#r23',
            schedule: "Monday-Friday: 7:00am - 8:00pm"+
                       "Weekends: 8:00am - 6:00pm"
        },   
		{
            title:'REVelation',
            tags: ['Sit-Down', 'Fast food'],
            details: 'Meet your friends and have a fantastic meal at the same time. Our stir-fry meals will entice your taste buds, made-to-order deli sandwiches will be hard to resist, fantastic hot entrées will lure you, and a great full breakfast will get your day off to a great start. A vegetarian hot entrée is available every lunch and dinner plus there’s a large selection of grab n’ go items to ensure you can always find something to eat.',
            menu: 'http://www.uwmenu.com/#r7',
            address: 'REV UWaterloo',
            schedule: "Monday-Firday: 7:00am - 8:00pm"+
                      "Weekends: 8:00am - 6:00pm"
        }
    ];
	
	// Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('restaurantInformationMain.html', 1);// Show main view in the first column as soon as controller loads
	
	// This function gets called when user clicks an item in the list
	$scope.showDetails = function(item){
		// Make the item that user clicked available to the template
		$scope.detailsItem = item;		
		$scope.portalHelpers.showView('restaurantInformationDetails.html', 2);
	};
}]);