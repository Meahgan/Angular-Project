"use strict";
{

  let watchList = {
    template: `
          <h1>My Movie List</h1>
            <div ng-repeat="wm in $ctrl.list">
            <img ng-src="http://image.tmdb.org/t/p/w185{{wm.img}}">
              <h2 ng-model="title">{{wm.title}}</h2>
              <p>{{wm.overview}}</p>
              <p>Vote Average: {{wm.ratings}}</p>
              <p>Date: {{wm.date}}</p>
              <p>Popularity: {{wm.popularity}}</p>
              <p>Language: {{wm.language}}</p>
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
