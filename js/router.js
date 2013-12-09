App.Router.map(function () {
	this.resource('main', { path: '/'});
  this.resource('about');
  this.resource('consults');
});

App.ConsultsRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('consult');
	}
});

