angular.module("route",["ngRoute"])
.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"/tpl/index.html",
        controller:"index"
    }).when("/login",{
        templateUrl:"/tpl/login.html"
    }).when("/login/:id",{
        templateUrl:"/tpl/stulogin.html",
        controller:"login"
    }).when("/teach",{
            templateUrl:"/tpl/indexTeach.html",
            controller:"indexTeach"
    }).when("/zuti",{
        templateUrl:"/tpl/zuti.html",
        controller:"zuti"
    }).when("/tests",{
        templateUrl:"/tpl/test.html",
        controller:"test"
    }).when("/tests/:id",{
        templateUrl:"/tpl/testList.html",
        controller:"testList"
    })
}])