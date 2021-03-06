"use strict";
{
    let movie = {
        controller: function (movieService) {
            let vm = this;
            vm.movies = movieService.getData();
            console.log(vm.movies);
            vm.listInfo = function (index) {
                let x = {
                    img: vm.movies[index].poster_path,
                    title: vm.movies[index].title,
                    overview: vm.movies[index].overview,
                    ratings: vm.movies[index].vote_average,
                    date: vm.movies[index].release_date,
                    popularity: vm.movies[index].popularity,
                    language: vm.movies[index].original_language
                }
                vm.addWatch = movieService.watchList(x);
            }

        },

        template: `<div class="search"> <p>Search here to filter</p>
            <div class="filter"><input ng-model="searchText.title"></div>
            <div class="moviesList" ng-repeat="m in $ctrl.movies | filter: searchText.title track by $index">
            <img ng-if="m.poster_path != null" ng-src="http://image.tmdb.org/t/p/w185{{m.poster_path}}">
            <h2 class="movieTitle" ng-model="title">{{m.title}}</h2>
            <p>{{m.overview}}</p>

            <p>Vote Average:  {{m.vote_average}}</p>
            <div ng-show="details">
            <p>Date:  {{m.release_date}}</p>
            <p>Popularity:  {{m.popularity}}</p>
            <p>Language:  {{m.original_language}}</p>
            </div>
            <button class="button" ng-click="$ctrl.listInfo($index)">Add</button>
            <button class="buttonDetails" ng-click="details =! details">Details</button>
            </div>
            </div>
            `
    };

    movie.$inject = ["movieService"];
    angular
        .module("app")
        .component("movie", movie);
}
