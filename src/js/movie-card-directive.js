function MovieCard () {
  return {
    restrict: 'E',
    scope: {
      movieid: '@'
    },
    controller: 'CardController',
    controllerAs: 'vm',
    template: `<div class="card">
      <div class="posterBox">
        <img ng-src={{vm.movie.Poster}}>
      </div>
      <h2>{{vm.movie.Title}}</h2>
      <h4>Rated {{vm.movie.Rated}}</h4>
      <h6>Released: {{vm.movie.Released}}</h6>
    </div>`
  };
}

MovieCard.$inject = [];
export { MovieCard };