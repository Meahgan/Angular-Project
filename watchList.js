"use strict";
{

  let watchList = {
    template: `<div id="listContainer">
    <div id="movies">
          <h1>My Movie List</h1>
          <div class="homeLink"><a href="index.html">Add Some Movies!</a></div>
            <div class="list" ng-repeat="wm in $ctrl.list">
            <img ng-src="http://image.tmdb.org/t/p/w185{{wm.img}}">
              <h2 ng-model="title">{{wm.title}}</h2>
              <p>{{wm.overview}}</p>
              <p>Vote Average:</p><p class="ratings">{{wm.ratings}}</p>
              <p>Date:</p><p class="date"> {{wm.date}}</p>
              <p>Popularity:</p><p class="popularity" {{wm.popularity}}</p>
              <p>Language: {{wm.language}}</p>
              <button class="buttonX" ng-click="$ctrl.removie($index)">X</button>
            </div>
            </div>
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
