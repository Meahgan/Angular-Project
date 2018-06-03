"use strict";
{
    function movieService($http) {
        let data = [{
            title: "Eggage",
            length: "32 days"
        },
    {
        title: "Honk",
        length: "12 seconds"
    },
{
    title: "Trailer Trash Barbie",
    length: "32 minutes"
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

      let movieDetails = [];

      //search API by title
        const searchMovies = function (title) {
            let url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${title}`;
            console.log(url);
            return $http.get(url).then(function (response) {
                console.log(response.data.results);
                setData(response.data.results);
            });
          };
      //search API by rating
        const searchRatings = function (ratings) {
            let url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&vote_average.gte=${ratings}&sort_by=vote_average.asc`;
            console.log(url);
            return $http.get(url).then(function (response) {
                console.log(response.data.results);
                setData(response.data.results);
              });
            };
      //search API by genre
      const searchYear = function (date) {
          let url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&release_date.lte=${date}&sort_by=release_date.desc`;
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
            searchRatings,
            searchYear,
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
