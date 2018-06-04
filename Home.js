"use strict";
{
    let home = {
        template: `
        <div class="welcome"> WELCOME TO THE MOVIE HUB! </div>

        <div class="searchMovies"><p>Search movies by title, ratings, or date!</p></div>
        <div id="searchInputs">
        <div class="searchTitle">
        <input ng-model="$ctrl.title" placeholder="Movie Title"/>
        <button class="button" ng-click="$ctrl.getMovie()">GO</button>
        </div>

        <div class="searchRatings">
        <input ng-model="$ctrl.ratings" placeholder="Movie Rating (0-10)"/>
        <button class="button" ng-click="$ctrl.searchRatings()">GO</button>
        </div>

        <div class="searchYear">
        <input ng-model="$ctrl.date" placeholder="Year"/>
        <button class="button" ng-click="$ctrl.searchYear()">GO</button>
        </div>
        </div>

        `,

//-------functions for search settings and retrieving movies----//

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
