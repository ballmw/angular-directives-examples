angular.module("app").config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/presentation', {
        templateUrl: 'presentation.html',
        controller: 'PresPageController'
    });

    $routeProvider.when('/form', {
        templateUrl: 'form.html',
        controller: 'FormController'
    });

    $routeProvider.when('/anchor', {
        templateUrl: 'anchor.html',
        controller: 'AnchorController'
    });

    $routeProvider.when('/repeat', {
        templateUrl: 'repeat.html',
        controller: 'RepeatController'
    });
    $routeProvider.when('/transclude', {
        templateUrl: 'transclude.html',
        controller: 'TranscludeController'
    });
    $routeProvider.when('/switch', {
        templateUrl: 'switch.html',
        controller: 'SwitchController'
    });

    $routeProvider.otherwise({ redirectTo: '/presentation' });

});
