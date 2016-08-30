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
    console.log("router hit");
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "../html/girls-welcome.html"
    });
  }
})();
