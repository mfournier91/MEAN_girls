"use strict";
  console.log("App file");
(function(){
  angular
  .module("girls", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    Router
  ]);

  function Router($stateProvider){
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "assets/html/girls-welcome.html"
    });
  }
})();
