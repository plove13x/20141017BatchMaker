BM.Router.map(function(){
	this.resource('index', {path: '/'});
	this.route('login');
	this.route('settings');

	this.resource('user', {path: '/:id'});		/* {path: ':user_name'})? */

	this.resource('recipes', function(){
		this.route('create');
		this.route('display', {path: ':recipe_id'});
		this.route('edit', {path: ':recipe_id/edit'});
	});


});



BM.ApplicationRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('user', 'user_id_ollie');
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
	},

	model: function(){
    	return Ember.RSVP.hash({
      		recipes: this.store.find('recipe'),
      		// popular: this.store.find('popularRecipe')			/* YOU WON'T WANT THIS TO TRY TO AUTHENTICATE IF USER ISN'T LOGGED IN THO... */
    	});
  	},

	setupController: function(controller, model) {
		this._super(controller, model);
		// var myRecipes = this.modelFor('recipes');		 shouldn't actually be the public recipes until u do setup controller for Public Recipes 
		// console.log(myRecipes);
		controller.set('recipes', model.recipes);			/* 1st argument is property name, 2nd is variable set above as its value */
		controller.set('myRecipes', model.recipes);			/* This is obviously not targeting the user's personal recipes yet */
		// this.controllerFor('recipes').set()
		// controller.set('recipes', modelFor('recipes'));
		// this.controllerFor('recipes').set(this.store.find('recipe'), model);
    	// this.controllerFor('user').set(this.modelFor('user'), model);
  	}

});
// In IndexRoute!!!
// setupController
// controller.set(my recipes, modelfor my recipes);
// controller.set(popular recipes, modelfor)




BM.UserRoute = Ember.Route.extend({	
	model: function() {
		// console.log(this.store.find('user_id_ollie'));
  //   	return this.store.find('recipe');

    	return this.store.find('user', 'user_id_ollie').then(function(user) {
    		return user.get('recipes');
    	});

	// model: function(params) {							// THESE TWO LINES WERE IN HERE IF IT BREAKS!
	// 	return this.store.find('user', params.id);
	},

	// setupController: function(controller, model) {
	// 	var myRecipes = this.modelFor('recipes');					 shouldn't actually be this public model... 
	// 	console.log(myRecipes);
	// 	controller.set('myRecipes', myRecipes)
	// }
});


BM.RecipesRoute = Ember.Route.extend({
  	model: function() {
  		// var a = this.modelFor('application');
    	return this.store.find('recipe');
  	}
});