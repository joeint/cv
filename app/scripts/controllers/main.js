'use strict';

function randomRange(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

angular.module('joeintApp').controller('MainCtrl', function ($scope, $http) {
    // Pick between images 1 - 4 since only 4 images exists
    //
    $scope.profileImg = 'joe' + randomRange(1, 6) + '.png';

    $scope.myInterval = 3000;
    $scope.slides = [];
    $scope.slides.push({profileImg: 'joe1.png'});
    $scope.slides.push({profileImg: 'joe2.png'});
    $scope.slides.push({profileImg: 'joe3.png'});
    $scope.slides.push({profileImg: 'joe4.png'});
    $scope.slides.push({profileImg: 'joe5.png'});
    $scope.slides.push({profileImg: 'joe6.png'});

    $http.get('/json/workHistory.json').success(function(data){
        $scope.history = data;
    });

    $http.get('/json/aboutMe.json').success(function(data){
        $scope.aboutMe = data;
    });

    $http.get('/json/project.json').success(function(data){
        $scope.project = data;
    });

    $scope.currentYear = new Date().getFullYear();
});
