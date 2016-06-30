assignmentApp
  .controller('mainCtrl', ['$scope', 'ServerService', '$rootScope', function($scope,
     ServerService, $rootScope) {

    $scope.users = [];

    $scope.populateUsers = function() {
      return ServerService.sendGet({}, "/users", SUCCESS_MESSAGE, FAILURE_MESSAGE);
    };

    $scope.users = $scope.populateUsers();

    $scope.editable = false;

    $scope.addUser = function() {
      /*
      User.save({ fname: $scope.fname, lname: $scope.lname }).$promise
        .then(function() {
          $scope.fname = '';
          $scope.lname = '';
          $scope.addForm.$setPristine();
          $scope.users = $scope.populateUsers();
        })
        .catch(function(response) {
          $scope.fname = '';
          $scope.lname = '';
          $scope.addForm.$setPristine();
        });
        */
    };


    $scope.deleteUser = function(user) {
      /*
      User.delete({ _id: user._id }).$promise
        .then(function() {
          $scope.users = $scope.populateUsers();
        });
      */
    };

    $scope.updatedUser = {};

    $scope.updateUser = function(user) {
      /*
      User.update({ _id: user._id}, {fname: $scope.updatedUser.fname, lname: $scope.updatedUser.lname }).$promise
        .then(function() {
          $scope.updatedUser = {};
          $scope.users = $scope.populateUsers();
        });
        */
    };

  }]);
