"use strict";
{
  angular
    .module("app")
    .config(($routeProvider) => {
      $routeProvider
        .when("/home", {
          template: "<home></home>"
        })
        .when("/movie", {
          template: "<movie></movie>"
        })
        .when("/watchList", {
          template: "<watch-list></watch-list>"
        })
        .when("/details", {
          template: "<details></details>"
        })
        .otherwise({ redirectTo: "/home" });
    });
}
