var components = components || {};

jQuery(document).on('ready', function() {
	jQuery('[data-component="maintain-aspect"]').each(function() {
		var maintainAspect = new components.maintainAspect(this);
	});
});

components.maintainAspect = function(el) {
	var self = this;
	self.el = jQuery(el);
	self.image = new Image();
	self.image.src = self.el.data('ma-image');
	self.image.onload = function() {
		self.init();
	};
};
components.maintainAspect.prototype = {
	init: function() {
		var self = this;
		self.aspect = self.image.width / self.image.height
		jQuery(window).on('resize.aspect', function() {
			self.resize();
		});
		self.resize();
	},
	resize: function() {
		var self = this;
		self.el.css('height', (self.el.width() * (1 / aspect)));
	},
	destroy: function() {
		jQuery(window).off('.aspect');
	}
};
