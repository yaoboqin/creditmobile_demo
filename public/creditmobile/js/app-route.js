define("js/app-route", function (require) {
    var app = require('js/app');

    app.run(['$state', '$stateParams', '$rootScope', function ($state, $stateParams, $rootScope) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);

    app.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.platform.android.navBar.alignTitle('center'); 

        $urlRouterProvider.otherwise('/index');

        $stateProvider
            .state('list', {
                url: '/list',
                templateUrl: 'creditmobile/tpl/list.html',
                controllerUrl: 'controllers/listCtrl',
                controller: 'listCtrl',
                dependencies: ['services/listService']
            })
    }]);
});