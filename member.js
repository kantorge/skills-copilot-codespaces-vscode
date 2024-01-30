function skillsMember() {
    // Path: member.js
    function skillsMemberController($scope, $http, $location, $rootScope, $timeout, $window, $filter, $state, $stateParams, $interval, $sce) {
        $scope.skills = [];
        $scope.skills = $rootScope.skills;
        $scope.skills = $filter('orderBy')($scope.skills, 'name');
        $scope.skills = $filter('filter')($scope.skills, { 'type': 'skill' });
        $scope.skills = $filter('filter')($scope.skills, { 'skill': true });
        $scope.skills = $filter('filter')($scope.skills, { 'skill': true });
        $scope.skills = $filter('filter')($scope.skills, { 'skill': true });
        $scope.skills = $filter('filter')($scope.skills, { 'skill': true });
        $scope.skills = $filter('filter')($scope.skills, { 'skill': true });
        $scope.skills = $filter('filter')($scope.skills, { 'skill': true });
        $scope.skills = $filter('filter')($scope.skills, { 'skill': true });
        $scope.skills = $filter('filter')($scope.skills, { 'skill': true });
        $scope.skills = $filter('filter')($scope.skills, { 'skill': true });
    }
    angular.module('app').controller('skillsMemberController', ['$scope', '$http', '$location', '$rootScope', '$timeout', '$window', '$filter', '$state', '$stateParams', '$interval', '$sce', skillsMemberController]);
}