"use strict";
{
    let movie = {
        controller: function (movieService) {
            let vm = this;
            vm.movies = movieService.getData();
            console.log(vm.movies);
            vm.listInfo = function (index) {
                let m = {
                    title: vm.movies[index].title
                }
                vm.addWatch = movieService.watchList(m);
            }
            
        },

        template: `<p>Search here to filter</p>
            <input ng-model="searchText.title">
            <div ng-repeat="m in $ctrl.movies | filter: movieFilter track by $index">
            <h2 ng-model="title">{{m.title}}</h2>
            <p>{{m.overview}}</p>
            <p>ID:{{m.id}}</p>
            <p>Vote Average:{{m.vote_average}}</p>
            <button ng-click="$ctrl.listInfo($index)">Add</button>
            </div>
            `
    };

    movie.$inject = ["movieService"];
    angular
        .module("app")
        .component("movie", movie);
}
