'use strict';

angular.module('joeintApp').controller('MainCtrl', function ($scope, $http) {
    // Pick between images 1 - 4 since only 4 images exists
    //
    $scope.profileImg = 'joe' + randomRange(1, 4) + ".png";
    $http.get("/json/workHistory.json").success(function(data){
        $scope.history = data;
    })

    $http.get("/json/aboutMe.json").success(function(data){
        $scope.aboutMe = data;
    })

    $http.get("/json/project.json").success(function(data){
        $scope.project = data;
    })

    // TODO: mintraka get from javascript
    $scope.currentYear = 2014;
});

function randomRange(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
