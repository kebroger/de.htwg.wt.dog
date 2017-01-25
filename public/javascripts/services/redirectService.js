angular.module('dogApp')

.service('RedirectService', function($http) {
    return {
        game: function() {
            return $http.get('/game');
        }
    };
});