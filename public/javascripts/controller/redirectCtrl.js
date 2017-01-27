 angular.module('dogApp').controller('RedirectCtrl', function($scope, RedirectService, $timeout, $window) {

     $scope.redirect = (function() {
         $window.location.href = '/game';
     });

     $timeout($scope.redirect, 3000);
});