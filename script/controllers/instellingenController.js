/*global app, data*/

app.controller('instellingenController', ['$scope', 'settings',  function ($scope, settings) {
    "use strict";
    settings.success(function (data) {
        $scope.settings = data.users;
        console.log(settings.$$state.value.data.users[0].instellingen.geluiden.eetgeluiden);
        $scope.checkbox = $("input[name='geluidencheck']:checked").map(function(){return this.value;}).get();
        console.log($scope.checkbox);
        $scope.save = function(){
            
        }
    });
    
}]);