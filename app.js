angular.module('firstwords', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('firstwords').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('shop', {
            url: '/shop',
            templateUrl: 'partials/shop.html'
        })
        .state('frames', {
            url: '/frames',
            templateUrl: 'partials/frames.html'
        })
        .state('service', {
            url: '/service',
            templateUrl: 'partials/service.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'partials/contact.html'
        })
        .state('policies', {
            url: '/policies',
            templateUrl: 'partials/policies.html'
        })
        .state('news', {
            url: '/news',
            templateUrl: 'partials/news.html'
        });

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('firstwords').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});

angular.directive('videoPlayer', function() {
    return {
        restrict: "E",
        play: function() {
            // play video
        }
    };
});

angular.directive('carousel', function ($scope) {
    return {
        restrict: "E",
        move: function($scope, target, direction) {
            $($scope + ' ' + target).addClass('move' + direction);
        }
    };
});