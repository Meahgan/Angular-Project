"use strict";
{

  let watchList = {
    template: `
          <h1>My Movie List</h1>
            <div ng-repeat="wm in $ctrl.list">
              <h2 ng-model="title">{{wm.title}}</h2>
              <p>{{wm.overview}}</p>
              <p>ID:{{wm.id}}</p>
              <p>Vote Average:{{wm.vote_average}}</p>
              <p>Date: {{wm.release_date}}</p>
              <p>Popularity: {{wm.popularity}}</p>
              <p>Language: {{wm.original_language}}</p>
              <button class="button" ng-click="$ctrl.removie($index)">Remove Movie</button>
            </div>`,

    controller: function (movieService) {
      let vm = this;
      vm.list = movieService.getMovie();
      vm.removie = function(index){
        vm.remove = movieService.removie(index);
      }

      console.log(vm.list);
    }

  }

  watchList.$inject = ["movieService"];

  angular
    .module("app")
    .component("watchList", watchList);
}
