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
    "$state",
    GirlIndexControllerFunction
  ])
  .controller("GirlShowController", [
    "GirlFactory",
    "$stateParams",
    GirlShowControllerFunction
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
    })
    .state("show", {
      url: "/girls/:id",
      templateUrl: "../html/girls-show.html",
      controller: "GirlShowController",
      controllerAs: "GirlShowControllerVM"
    });
  }

  function GirlFactoryFunction($resource){
    var GFF = $resource("/api/girls/:id", {}, {
      update: {method: "PUT"}
    });
    GFF.all = GFF.query();
    return GFF
  }

  function GirlIndexControllerFunction(GirlFactory, $state){
    var vm = this;
    vm.girls = GirlFactory.all;
    vm.newgirl = new GirlFactory();

    vm.create = function($state) {
      vm.newgirl.$save().then(function(res){
        vm.girls.push(res)
      })
    };
  }

  function GirlShowControllerFunction(GirlFactory, $stateParams){
  var vm = this;
  vm.girl = GirlFactory.get({id: $stateParams.id})
  console.log("Girl!: ", vm.girl);

  vm.update = function() {
    vm.girl.$update({id: $stateParams.id});
    console.log(vm.girl);
  };

  vm.delete = function() {
    vm.girl.$delete({id: $stateParams.id})
  };
}

})();
