angular.module('dogApp')

.service('AuthService', function($http) {
    return {
        loginWithCredentials: function(email, password) {
            return $http.get('/signIn/' + email + '/' + password);
        }
    };
});

