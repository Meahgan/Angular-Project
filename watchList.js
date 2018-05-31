"use strict";
{

  let watchList = {
    template: `
          <h1>My Movie List</h1>
            <div ng-repeat="wm in movieService.movieDetails">
              <h2 ng-model="title">{{wm.title}}</h2>
              <p>{{wm.overview}}</p>
              <p>ID:{{wm.id}}</p>
              <p>Vote Average:{{wm.vote_average}}</p>
            </div>`,

    controller: function (watchList) {
      let vm = this;
      vm.list = watchList.getData();
      console.log(vm.list);
    }

  }

  watchList.$inject = ["movieService"];
  angular
    .module("app")
    .component("watchList", watchList);
}
