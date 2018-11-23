(function(){
    var app = angular.module('store');
    app.Controller('ScoreController', function($http, $scope){
        $http.get('http://localhost:8000/api/scores').success(function(data){
            $scope.scores = data;
        });
        error(function(error){
            debugger;
        });
    });
})();