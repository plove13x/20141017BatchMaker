BM.Router.map(function(){
	this.resource('index', {path: '/:user_name'});
	// this.resource('userPage', {path: ':user_name'});


	this.resource('cool', {path: '/cool/:id'});


	this.route('login');
	this.route('settings');

	this.resource('recipes', function(){
		this.route('create');
		this.route('display', {path: ':recipe_id'});
		this.route('edit', {path: ':recipe_id/edit'});
	});


});



BM.CoolRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('user', params.id);
	}
});


BM.ApplicationRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('user', 'user_id_p');
		// return rooms.findBy('id', params.room_id);
		// console.log(params);
		// return this.store.findBy('id', params.id);		/* params.user_name */
	}
});

BM.IndexRoute = Ember.Route.extend({
	beforeModel: function() {
		console.log(this.controllerFor('application').get('user'));
		console.log(this.modelFor('application'));
		if (!this.modelFor('application')){
			//!this.get('controllers.application.user')) {
			this.transitionTo('login');
		} 
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


// In IndexRoute!!!
// setupController
// controller.set(my recipes, modelfor my recipes);
// controller.set(popular recipes, modelfor)