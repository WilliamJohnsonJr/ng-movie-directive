function CardController(SERVER, $http, $scope){

	let vm = this;

	vm.movieIds=['tt1386697', 'tt4196776', 'tt2660888', 'tt1289401', 'tt2277860'];

	init();

	function init(){
		return $http.get(SERVER.URL + "?i="+ $scope.movieid).then((res)=>{
			vm.movie = res.data;
		});
	};
}

CardController.$inject = ['SERVER', '$http', '$scope'];

export { CardController };