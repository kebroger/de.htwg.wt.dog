angular.module('dogApp').controller('AuthCtrl', function($scope, $rootScope, $state) {

    /**
        * @desc: Fake login user if email and password is correct.
        * @param: string name - the email-adress of the user
        * @param: string password - the password of the user
    **/
    $scope.login = function(name, password) {
        $rootScope.userMail = password;
        
        $.ajax({
            type: "GET",
            url: "/signIn/" + name + "/" + password
        }).success(function(data) {
            $state.go('redirect');
        });
    };
});