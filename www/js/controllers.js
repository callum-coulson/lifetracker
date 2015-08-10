angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Stats) {

  $scope.stats = Stats.all();
  $scope.remove = function(stat) {
    Stats.remove(stat);
  };
})
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('StatDetailCtrl', function($scope, $stateParams, Stats) {
  $scope.stat = Stats.get($stateParams.statID);
})




.controller('NewStatCtrl', function($scope, Stats) {
  $scope.createStat = function(stat) {
    Stats.createStat(stat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatID);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
