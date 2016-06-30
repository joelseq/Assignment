(function() {
  'use strict';

  assignmentApp
    .factory('ServerService', ServerService);

  ServerService.$inject = ['$http', '$rootScope'];

  function ServerService($http, $rootScope) {
    let self = this;

    /* Get Request */
    self.sendGet = function(param, url, successMessage, failureMessage) {

      $http.get(SERVER_DOMAIN + url)
        .then(function successCallback(data) {
          $rootScope.$broadcast(successMessage, data);
        },
        function errorCallback(data) {
          $rootScope.$broadcast(failureMessage, data);
        });

    };

    /* Post Request */
    self.sendPost = function(param, url, successMessage, failureMessage) {

        $http.post(SERVER_DOMAIN + url , param)
          .then(function successCallback(data) {
            $rootScope.$broadcast(successMessage, data);
          },
          function errorCallback(data) {
            $rootScope.$broadcast(failureMessage, data);
          });

    };

    /* Put Request */
    self.sendPut = function(param, url, successMessage, failureMessage) {

      $http.put(SERVER_DOMAIN + url , param)
        .then(function successCallback(data) {
          $rootScope.$broadcast(successMessage, data);
        },
        function errorCallback(data) {
          $rootScope.$broadcast(failureMessage, data);
        });

    };

    /* Delete Request */
    self.sendDelete = function(param, url, successMessage, failureMessage) {

      $http.post(SERVER_DOMAIN + url, param)
        .then(function successCallback(data) {
          $rootScope.$broadcast(successMessage, data);
        },
        function errorCallback(data) {
          $rootScope.$broadcast(failureMessage, data);
        });

    };

  }
})();
