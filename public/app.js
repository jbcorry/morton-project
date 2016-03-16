angular.module('myApp', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/views/home.html',
    controller: 'mainCtrl'
  })

  .state('groups', {
    url: '/groups',
    templateUrl: '/views/groups.html',
    controller: 'mainCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: '/views/about.html',
    controller: 'mainCtrl'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: '/views/contact.html',
    controller: 'mainCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/views/login.html',
    controller: 'mainCtrl'
  });

$urlRouterProvider.otherwise('/home');


});
