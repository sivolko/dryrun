(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();

	// Dark mode toggle logic
	document.addEventListener('DOMContentLoaded', function () {
		var toggle = document.getElementById('darkModeToggle');
		var icon = document.getElementById('darkModeIcon');
		var darkClass = 'dark-mode';
		var sunClass = 'fa-sun';
		var moonClass = 'fa-moon';
		var body = document.body;

		// Apply saved theme
		var savedTheme = localStorage.getItem('theme');
		if (savedTheme === 'dark') {
			body.classList.add(darkClass);
			icon.classList.remove(moonClass);
			icon.classList.add(sunClass);
			icon.setAttribute('aria-label', 'Switch to light mode');
		} else {
			body.classList.remove(darkClass);
			icon.classList.remove(sunClass);
			icon.classList.add(moonClass);
			icon.setAttribute('aria-label', 'Switch to dark mode');
		}

		if (toggle) {
			toggle.addEventListener('click', function () {
				var isDark = body.classList.toggle(darkClass);
				if (isDark) {
					icon.classList.remove(moonClass);
					icon.classList.add(sunClass);
					icon.setAttribute('aria-label', 'Switch to light mode');
					localStorage.setItem('theme', 'dark');
				} else {
					icon.classList.remove(sunClass);
					icon.classList.add(moonClass);
					icon.setAttribute('aria-label', 'Switch to dark mode');
					localStorage.setItem('theme', 'light');
				}
			});
		}
	});

	})();