'use strict';

/**
 * @ngdoc function
 * @name schoolApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the schoolApp
 */
angular.module('schoolApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
