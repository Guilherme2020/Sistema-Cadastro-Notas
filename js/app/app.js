angular.module("meuModulo",['ngRoute'])

.config(function($routeProvider){
	$routeProvider
	.when("/home",{
		templateUrl:"templates/home.html",
		controller:"indexController"
	})
	.when("/contato",{
		templateUrl:"templates/contato.html",
		controller:"contatoController"
	});

	$routeProvider.otherwise({redirectTo:"/home"});

})