"use strict";
{
    let home = {
        template: `<div class="welcome"> Welcome to the MOVIE page! </div>
        <p>Please type in a movie to search for here:</p>
        <input ng-model="$ctrl.title" placeholder="Movie Title"/>
        <input ng-model="$ctrl.overview" placeholder="Movie Genre"/>
        <button class="button" ng-click="$ctrl.getMovie()"> Grab a movie! </button>
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
        }
    };
    home.$inject = ["movieService", "$location"];
    angular
        .module("app")
        .component("home", home);
}
