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
  ])
  .factory("GirlFactory", [
    "$resource",
    GirlFactoryFunction
  ])
  .controller("GirlIndexController", [
    "GirlFactory",
    GirlIndexControllerFunction
  ]);

  function Router($stateProvider){
    console.log("router hit");
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "../html/girls-welcome.html"
    })
    .state("index", {
      url: "/burnbook",
      templateUrl: "../html/girls-index.html",
      controller: "GirlIndexController",
      controllerAs: "GirlIndexControllerVM"
    });
  }

  function GirlFactoryFunction($resource){
    var GFF = $resource("/api/girls/:id", {}, {
      update: {method: "PUT"}
    });
    GFF.all = GFF.query();
    return GFF
  }

  function GirlIndexControllerFunction(GirlFactory){
    var vm = this;
    vm.girls = GirlFactory.all;
  }

})();
