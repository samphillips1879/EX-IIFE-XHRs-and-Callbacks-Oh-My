"use strict";

function showCarnivores (carnivores) {
	document.getElementById("carnEl").innerHTML += carnivores;
}

function showHerbivores (herbivores) {
	document.getElementById("herbEl").innerHTML += herbivores;
}

Predator.loadCarnivores(showCarnivores);

Predator.loadHerbivores(showHerbivores);