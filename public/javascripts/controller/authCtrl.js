angular.module('dogApp').controller('AuthCtrl', function($scope, $rootScope, $state, AuthService) {

    $scope.login = function() {
        $rootScope.userMail =  $scope.mail;

        AuthService.loginWithCredentials($scope.mail, $scope.pwd).success(function(data) {
            $state.go('redirect');
        });
    };
});