angular.module('myApp')
.controller('mainCtrl', function($scope, mainSvc) {

  $scope.tabs = mainSvc.getTabs();
  $scope.submit = {
    name: 'submit',
    view: 'submit'
  };

$scope.show = true;

  $scope.toggle = function() {
    $scope.show = !$scope.show;
  };
  $scope.groups = mainSvc.getGroups();

$scope.contactList = mainSvc.getContactList();

});
