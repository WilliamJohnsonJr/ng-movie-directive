import angular from 'angular';

import { CardController } from "./card.controller";

import { SERVER } from "./server";

import { MovieCard } from "./movie-card-directive";

angular
	.module('app', [])
	.constant ('SERVER', SERVER)
	.controller('CardController', CardController)
	.directive('movieCard', MovieCard)
	;