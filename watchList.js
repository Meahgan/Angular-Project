"use strict";
{

  let watchList = {
    template: `<p>My Watch List</p>
                <div ng-repeat="md in $ctrl.movieDetails">
                <h2>{{m.title}}</h2>
                </div>
                `,

    controller: function (movieService) {
      let vm = this;
      vm.list = movieService.getData();
      console.log(vm.list);
    },

  }

  watchList.$inject = ["movieService"];
  angular
    .module("app")
    .component("watchList", watchList);
}
