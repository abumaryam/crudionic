// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$urlRouterProvider){
//  $ionicConfigProvider.views.maxCache(0);

  $stateProvider
  .state('tab',{
    url:'/tab',
    abstract:true,
    controller:'tabCtrl',
    templateUrl:'templates/tab.html'
  })

  .state('tab.home',{
    url:'/home',
    views:{
      'tab-home':{
        templateUrl:'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tab.teman',{
    url:'/teman',
    views:{
      'tab-teman':{
        templateUrl:'templates/daftarteman.html',
        controller: 'dataTemanCtrl'
        
      }
    }
  })

.state('tab.teman-detail', {
        url: '/teman/:temanId',
        views: {
          'tab-teman': {
            templateUrl: 'templates/temanDetail.html',
            controller: 'temanDetailCtrl'
          }
        }
      })
 .state('tab.tambah', {
      url: '/tambah',
      views: {
        'tab-tambah': {
          templateUrl: 'templates/tambahTeman.html',
          controller: 'tambahTemanCtrl'
        }
      }
    })
  .state('tab.about', {
      url: '/about',
      views: {
        'tab-about': {
          templateUrl: 'templates/about.html',
          controller: 'aboutCtrl'
        }
      }
    });
  

  $urlRouterProvider.otherwise('/tab/home')
})

.directive("initFromForm", function ($parse) {
    return {
        link: function (scope, element, attrs) {
            var attr = attrs.initFromForm || attrs.ngModel || element.attrs('name'),
            val = attrs.value;
            $parse(attr).assign(scope, val);
        }
    };
});