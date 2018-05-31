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
        const getData = function () {
            return data;
        };
        //Update data
        const setData = function (newData) {
            data = newData;
        };
      }
      let movieDetails = [{
        title: "Tommy Boi",
        length: "2 hours" 
      }];

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
            movieDetails
        };
    }
    angular
        .module("app")
        .factory("movieService", movieService)
}
