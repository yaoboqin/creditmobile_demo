define("js/app-route", function (require) {
    var app = require('js/app');

    app.run(['$state', '$stateParams', '$rootScope', function ($state, $stateParams, $rootScope) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);

    app.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.platform.android.navBar.alignTitle('center'); 

        $urlRouterProvider.otherwise('/tab/home');

        $stateProvider
            .state('list', {
                url: '/list',
                templateUrl: 'creditmobile/tpl/list.html',
                controllerUrl: 'controllers/listCtrl',
                controller: 'listCtrl',
                dependencies: ['services/listService']
            })
            .state('tabs', {
              url: "/tab",
              abstract: true,
              templateUrl: "creditmobile/tpl/tabs.html"
            })
            .state('tabs.home', {
              url: "/home",
              views: {
                'home-tab': {
                  templateUrl: "creditmobile/tpl/home.html",
                  controllerUrl: 'controllers/homeCtrl',
                  controller: 'HomeTabCtrl'
                }
              }
            })
            .state('tabs.facts', {
              url: "/facts",
              views: {
                'home-tab': {
                  templateUrl: "creditmobile/tpl/facts.html"
                }
              }
            })
            .state('tabs.facts2', {
              url: "/facts2",
              views: {
                'home-tab': {
                  templateUrl: "creditmobile/tpl/facts2.html"
                }
              }
            })
            .state('tabs.about', {
              url: "/about",
              views: {
                'about-tab': {
                  templateUrl: "creditmobile/tpl/about.html"
                }
              }
            })
            .state('tabs.navstack', {
              url: "/navstack",
              views: {
                'about-tab': {
                  templateUrl: "creditmobile/tpl/nav-stack.html"
                }
              }
            })
            .state('tabs.contact', {
              url: "/contact",
              views: {
                'contact-tab': {
                  templateUrl: "creditmobile/tpl/contact.html"
                }
              }
            });
    }]);
});