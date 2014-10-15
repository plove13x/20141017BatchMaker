BM.Router.map(function(){
	//this.route('login', { path: '/'});
	this.resource('index');
});


BM.ApplicationRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('user', 'user_id_plove');
	}
});

BM.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('recipe');
  }
});