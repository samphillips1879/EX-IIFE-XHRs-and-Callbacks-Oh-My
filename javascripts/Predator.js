"use strict";

var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function(callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText).carnivores.join(", ");

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        callbackToInvoke(carnivores);

      });

      	loader.open("GET", "javascripts/carnivores.json");
		loader.send();
    },
	loadHerbivores: function(callbackToInvoke) {
		var loader = new XMLHttpRequest();

		loader.addEventListener("load", function () {

			herbivores = JSON.parse(this.responseText).herbivores.join(", ");
			callbackToInvoke(herbivores);
		});

		loader.open("GET", "javascripts/herbivores.json");
		loader.send();
	}
  };
})();