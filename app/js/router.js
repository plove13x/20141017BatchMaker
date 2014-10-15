BM.Router.map(function(){
	this.resource('index', { path: '/'});

	this.route('login');
	this.route('settings');

	this.resource('recipes', function(){
		this.route('create');
		this.route('display', {path: ':recipe_id'});
		this.route('edit', {path: ':recipe_id/edit'});
	});
});


BM.ApplicationRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('user', 'user_id_p');
	}
});

// BM.IndexRoute = Ember.Route.extend({
//   	model: function() {
//     	return this.store.find('recipe');
//   	}
// });

BM.RecipesRoute = Ember.Route.extend({
  	model: function() {
    	return this.store.find('recipe');
  	}
});