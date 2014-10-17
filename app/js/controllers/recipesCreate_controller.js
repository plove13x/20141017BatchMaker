BM.RecipesCreateController = Ember.Controller.extend({
	
	needs: 'application',
	recipeName: '',
	recipeDetails: '',
	user: Ember.computed.alias('controllers.application.user'),
	
	rTypes: ["Breakfast", "Lunch", "Dinner", "Dessert"],
	degreeScale: ["Fahrenheit", "Celsius"],

	init: function() {
		console.log(this.get('user'));
		console.log(this.get('controllers.application.user.data'));
	},

	actions: {
		createRecipe: function() {
			var user = this.get('user');
			// this.store.createRecord('user');
			console.log(user);
			var recipe = this.store.createRecord('recipe', {
				name: this.get('recipeName'),
				recipeDetails: this.get('recipeDetails'),
				user: user
			});
			recipe.save().then(function(){
				user.get('recipes').then(function(f){
					f.addObject(recipe);
					user.save();
				});
			});
			// user.get('recipes').addObject(recipe);
			this.set('recipeName', '');
			this.set('recipeDetails', '');
		

		}
	},

});
