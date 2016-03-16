angular.module('myApp')
.directive('group', function(){

  return {
    templateUrl: '/directives/groupTemp.html',
    restrict: 'E',
    scope: {
      group:'=',
    },
    controller: 'mainCtrl',
    link: function(scope, element, attributes) {
      scope.toggle = function() {
        scope.show = !scope.show;
      };

    }
  };


});
