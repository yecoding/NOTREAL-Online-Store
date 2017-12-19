var chart = angular.module('chartApp', []);
chart.controller('chartController', function($scope){
	$scope.items = [
		{
			title: 'Two Cats Plate',
			image: 'graphics/items/twocatsplate.jpg',
			description:'A 100mm x 100mm mini plate with two cuties saying hi to you. The box-shape plate is perfect for small jwellery storage',
			price: 60,
			select:false,
			status:'Add to Chart'
		},
		{
			title: 'Mom Cat Plate',
			image: 'graphics/items/momcatplate.jpg',
			description:'A mom cat is with her kid cat standing on the plate.',
			price: 50,
			select:false,
			status:'Add to Chart'
		},
		{
			title: 'Elephants Plate',
			image: 'graphics/items/elephantplate.jpg',
			description:'Many cultures revere elephants as a symbol of honor and good luck.',
			price: 50,
			select:false,
			status:'Add to Chart'
		},
		{
			title: 'Panda Brooch',
			image: 'graphics/items/pandabrooch.jpg',
			description:'Pink might be the best color for sunglasses of a panda.',
			price: 25,
			select:false,
			status:'Add to Chart'
		},
		{
			title: 'Plants Girl Shadowbox',
			image: 'graphics/items/plantsgirlshadowbox.jpg',
			description:'This is a customized shadowbox for my dear friend Agnes who is a big fan of succulents and cats.',
			price: 116,
			select:false,
			status:'Add to Chart'
		},
		{
			title: 'Lotus Incense Holder',
			image: 'graphics/items/lotusincenseholder.jpg',
			description:'A lotus incense holder, all handpainted.',
			price: 80,
			select:false,
			status:'Add to Chart'
		},
		]

		$scope.total = 0;
		$scope.count = 0;

		$scope.calculation = function(e){
			e.select = !e.select;
			if(e.select){
				$scope.total = $scope.total + e.price;
				$scope.count = $scope.count + 1;
				e.status = 'Remove item';
			}else{
				$scope.count = $scope.count - 1;
				$scope.total = $scope.total - e.price;
				e.status = 'Add to Chart';
			}
		}

		$scope.removeItem = function(e){
			e.select = !e.select;
			$scope.count = $scope.count - 1;
			$scope.total = $scope.total - e.price;
			e.status = 'Add to Chart';
		}


});