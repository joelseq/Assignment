assignmentApp.factory('User', ['$resource', function($resource) {
  return $resource('/users/:_id', null,
    {
      'update': { method:'PUT' }
    });
}]);
