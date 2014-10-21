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
		addStep: function(){
      		var step = this.store.createRecord('step', {});
      		this.get('steps').addObject(step);

      		var ingredient = this.store.createRecord('ingredientFood', {});
   			step.get('ingredients').addObject(ingredient);

    	},
		createRecipe: function() {
			var user = this.get('user');
			// this.store.createRecord('user');
			console.log(user);
			var recipe = this.store.createRecord('recipe', {
				name: this.get('recipeName'),
				recipeDetails: this.get('recipeDetails'),
				prepTime: this.get('prepTime'),
				cookTime: this.get('cookTime'),
				user: user,
			});
			recipe.get('steps').addObjects( this.get('steps') );
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
