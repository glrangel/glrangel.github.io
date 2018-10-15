		var slideout = new Slideout({
		    'panel': document.getElementById('panel'),
		    'menu': document.getElementById('menu'),
		    'padding': 256,
		    'tolerance': 70
		  });

		  // Toggle button
		  document.querySelector('.toggle-button').addEventListener('click', function() {
		    slideout.toggle();
		  });
		  var fixed = document.querySelector('.fixed-header');

		  slideout.on('translate', function(translated) {
		    fixed.style.transform = 'translateX(' + translated + 'px)';
		  });

		  slideout.on('beforeopen', function () {
		    fixed.style.transition = 'transform 300ms ease';
		    fixed.style.transform = 'translateX(256px)';
		  });

		  slideout.on('beforeclose', function () {
		    fixed.style.transition = 'transform 300ms ease';
		    fixed.style.transform = 'translateX(0px)';
		  });

		  slideout.on('open', function () {
		    fixed.style.transition = '';
		  });

		  slideout.on('close', function () {
		    fixed.style.transition = '';
		  });

		  function close(eve) {
		    eve.preventDefault();
		    slideout.close();
		  }

		  slideout
		    .on('beforeopen', function() {
		      this.panel.classList.add('panel-open');
		    })
		    .on('open', function() {
		      this.panel.addEventListener('click', close);
		    })
		    .on('beforeclose', function() {
		      this.panel.classList.remove('panel-open');
		      this.panel.removeEventListener('click', close);
		    });