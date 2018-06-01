"use strict";
{
    let home = {
        template: `<div class="welcome"> Welcome to the MOVIE page! </div>
        <p>Please type in a movie to search for here:</p>
        <input ng-model="$ctrl.title" placeholder="Movie Title"/>
        <input ng-model="$ctrl.ratings" placeholder="Movie Rating (0-10)"/>
        <input ng-model="$ctrl.date" placeholder="Year"/>
        <button class="button" ng-click="$ctrl.getMovie()"> Grab a movie! </button>
        <button class="button" ng-click="$ctrl.searchRatings()"> Search Rated Movies! </button>
        <button class="button" ng-click="$ctrl.searchYear()"> Search Year! </button>

        `,
        controller: function (movieService, $location) {
            let vm = this;
            vm.title = "";
            vm.getMovie = function () {
                vm.movie = movieService.searchMovies(vm.title)
                    .then(function () {
                        $location.path("/movie");
                    });
            }
              vm.ratings = "";
              vm.searchRatings = function () {
                vm.movie = movieService.searchRatings(vm.ratings)
                  .then(function () {
                    $location.path("/movie");
                  });
            }
              vm.date = "";
              vm.searchYear = function () {
                vm.movie = movieService.searchYear(vm.date)
                  .then(function () {
                    $location.path("/movie");
                  });
              }
        }
    };
    home.$inject = ["movieService", "$location"];
    angular
        .module("app")
        .component("home", home);
}
