"use strict";
{
    function movieService($http) {
        let data = [{
            title: "Eggage",
            length: "32 days"
        }];


        let APIKey = "a53a6bc42972a9ac76757aa3b5089827";
        //Give me data
        const getData = function () {
            return data;
        };
        //Update data
        const setData = function (newData) {
            data = newData;
        };

      //-----watchList array-------//

      function watchList(md) {
        console.log(movieDetails);
        movieDetails.push(md);
      }

        const getMovie = function () {
            return movieDetails;
        };  
          

        const removie = function(index){
            movieDetails.splice(index, 1);
        };

      let movieDetails = [{
        title: "THE Movie",
        length: "13m" 
      },
      {
        title: "Egg Movie",
        overview: "13m",
        ratings: 4.5
      },
      {
          title: "Foodfight!",
          overview: "Dex, a superdog sleuth, is the law of the land whe…e on the forces of evil and the devilish Brand X.",
          ratings: 2.3
      }
    ];

      //search API by title
        const searchMovies = function (title) {
            let url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${title}`;
            console.log(url);
            return $http.get(url).then(function (response) {
                console.log(response.data.results);
                setData(response.data.results);
            });
        };

        const getMovieDetail = function (movieId) {
            let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKey}`;
            return $http.get(url).then(function (response) {
                console.log(response);

            });

            const getDetails = function () {
                return details;
            }

            const setDetails = function (d) {
                let details = d;
            }

        }

        return {
            getData,
            setData,
            searchMovies,
            watchList,
            movieDetails,
            getMovie,
            removie
        };
    }
    angular
        .module("app")
        .factory("movieService", movieService)
}
