angular.module('dogApp')

.service('RedirectService', function($http) {
    return {
        goToGame: function() {
            return $http.get('/game');
        }
    };
});