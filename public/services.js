(function() {
  'use strict';

  assignmentApp
    .factory('ServerService', ServerService);

  ServerService.$inject = ['$http', '$rootScope'];

  function ServerService($http, $rootScope) {
    let self = this;

    function appendTransform(defaults, transform) {

      // We can't guarantee that the default transformation is an array
      defaults = angular.isArray(defaults) ? defaults : [defaults];

      // Append the new transformation to the defaults
      return defaults.concat(transform);
    }

    /* Get Request */
    self.sendGet = function(param, url, successMessage, failureMessage) {

      return $http.get(SERVER_DOMAIN + url , param);

    };

    /* Post Request */
    self.sendPost = function(param, url, successMessage, failureMessage) {

        $http.post(SERVER_DOMAIN + url , param)
          .success(function (data) {
            $rootScope.$broadcast(successMessage, data);
          })
          .error(function (data) {
            $rootScope.$broadcast(failureMessage, data)
          });
    };

    /* Put Request */
    self.sendPut = function(param, url, successMessage, failureMessage) {

      $http.put(SERVER_DOMAIN + url, param)
        .success(function (data) {
          $rootScope.$broadcast(successMessage, data);
        })
        .error(function (data) {
          $rootScope.$broadcast(failureMessage, data);
        });
    };

    /* Delete Request */
    self.sendDelete = function(url, successMessage, failureMessage) {

      $http.delete(SERVER_DOMAIN + url)
        .success(function(data) {
          $rootScope.$broadcast(successMessage, data);
        })
        .error(function(data) {
          $rootScope.$broadcast(failureMessage, data);
        });
    }


    return self;

  }
})();
