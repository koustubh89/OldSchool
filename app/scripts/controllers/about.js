'use strict';

/**
 * @ngdoc function
 * @name schoolApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the schoolApp
 */
angular.module('schoolApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
