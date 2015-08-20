angular.module('sub').filter('shipsFilter', function($sce) {
    return function(input){
        return $sce.trustAsHtml("<p class=\"ship\" style=\"width: "+input*50+"px; height: 50px; \"></p>");
    }
});