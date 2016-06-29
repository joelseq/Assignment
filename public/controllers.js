assignmentApp
  .controller('mainCtrl', ['$scope', 'User', function($scope, User) {
    $scope.users = [];


    $scope.populateUsers = function() {
      return User.query();
    };

    $scope.users = $scope.populateUsers();

    $scope.addUser = function() {
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
    };


    $scope.deleteUser = function(user) {
      User.delete({ _id: user._id }).$promise
        .then(function() {
          $scope.users = $scope.populateUsers();
        });
    };


  }]);
