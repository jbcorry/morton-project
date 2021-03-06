angular.module('myApp')
.controller('groupCtrl', function($scope, groupSvc, loginSvc, $state){

//toggle html

  $scope.newGroup = false;
    $scope.toggleGroup = function() {
      $scope.newGroup = !$scope.newGroup;
    };

//group stuff

$scope.getGroups = function(){
  return groupSvc.getGroups().then(function(data){
      if(!data){
        return [];
      }else{
        $scope.groups = data;
        return $scope.groups;
      }
    });
};

$scope.groups= $scope.getGroups().then(function(data) {
  $scope.loading = false;
  $scope.groups = data;
});


$scope.createGroup = function(group){
    if (group) {
        group.messages = [];
        group.user = loginSvc.getCurrentUser();
        groupSvc.createGroup(group);
        $scope.$emit('client message', group);
        groupSvc.getGroups();
    } else {
      return;
    }
};

// if (messageText) {
// messageText.user = loginSvc.getCurrentUser();
// console.log('this is the groupId', groupId);
// var data = {
//   groupId: groupId,
//   message: messageText
// };
// chatSvc.postMessage(data);
// $scope.$emit('client message', messageText);
// messageText = {};
// } else{
// return;
// }

$scope.$on('new message', function(event, msg){
  // console.log('almost there!');
  // console.log(msg);
  $scope.getGroups();
});


$scope.joinGroup = function(group, password) {
  var pw = prompt('Enter this groups password to access feed', 'Password');
  if (pw === password) {
    groupSvc.currentGroup = group;
    // $scope.currentGroup = group;
    // groupSvc.getCurrentGroup(group);
    $state.go('chat');
  } else {
    alert('Incorrect Group Password');
  }
};

$scope.deleteGroup = function(id, index) {
    console.log('in ctrl');
    groupSvc.deleteGroup(id);
    $scope.groups.splice(index, 1);
    $scope.$emit('delete message', index);
    $scope.getGroups();

};


});
