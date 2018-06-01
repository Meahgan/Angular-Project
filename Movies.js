"use strict";
{
    let movie = {
        controller: function (movieService) {
            let vm = this;
            vm.movies = movieService.getData();
            console.log(vm.movies);
            vm.listInfo = function (index) {
                let x = {
                    title: vm.movies[index].title,
                    overview: vm.movies[index].overview,
                    ratings: vm.movies[index].vote_average
                }
                vm.addWatch = movieService.watchList(x);
            }
        },

        template: `<p>Search here to filter</p>
            <input ng-model="searchText.title">
            <div ng-repeat="m in $ctrl.movies | filter: movieFilter track by $index">
            <img src="http://image.tmdb.org/t/p/w185{{m.poster_path}}" >
            <h2 ng-model="title">{{m.title}}</h2>
            <p>{{m.overview}}</p>
            <p>ID:{{m.id}}</p>
            <p>Vote Average:{{m.vote_average}}</p>
            <button class="button" ng-click="$ctrl.listInfo($index)">Add</button>
            </div>
            `
    };

    movie.$inject = ["movieService"];
    angular
        .module("app")
        .component("movie", movie);
}
