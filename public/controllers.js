assignmentApp
  .controller('mainCtrl', ['$scope', 'ServerService', '$rootScope', function($scope,
     ServerService, $rootScope) {

    $scope.users = [];

    $scope.populateUsers = function() {
      ServerService.sendGet({}, "", SUCCESS_MESSAGE, FAILURE_MESSAGE)
        .then( function(response) {
          $scope.users = response.data;
        });
    };

    $scope.populateUsers();

    $scope.editable = false;

    $scope.addUser = function() {
       ServerService.sendPost({ fname: $scope.fname, lname: $scope.lname }, "", SUCCESS_MESSAGE, FAILURE_MESSAGE);
    };


    $scope.deleteUser = function(user) {
      ServerService.sendDelete("/" + user._id, SUCCESS_MESSAGE, FAILURE_MESSAGE);
    };

    $scope.updatedUser = {};

    $scope.updateUser = function(user) {
      ServerService.sendPut({fname: $scope.updatedUser.fname, lname: $scope.updatedUser.lname}, "/" + user._id, SUCCESS_MESSAGE, FAILURE_MESSAGE);
      $scope.updatedUser = {};
    };

    $rootScope.$on(SUCCESS_MESSAGE, function(msg, data) {
      console.log("The request was successful! Object received: " + JSON.stringify(data));
      $scope.populateUsers();
    });

    $rootScope.$on(FAILURE_MESSAGE, function(msg, data) {
      console.log("Failed request! Object received: " + JSON.stringify(data));
      $scope.populateUsers();
    });

  }]);
