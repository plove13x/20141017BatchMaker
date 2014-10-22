BM.RecipesCreateController = Ember.Controller.extend({
	
	needs: 'application',
	recipeName: '',
	recipeDetails: '',
	user: Ember.computed.alias('controllers.application.user'),
	
	rTypes: ["Breakfast", "Lunch", "Dinner", "Dessert"],
	degreeScale: ["°Fahrenheit", "°Celsius"],

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

		addImage: function() {
		      var self = this;
		      filepicker.pickAndStore({mimetype:"image/*"},{},
		      function(InkBlobs){
		        var url = InkBlobs[0].url;
		        self.set('url', url)
		      });
		},

   //  	addImage: function(){
   //  		filepicker.pick(
	  //   		{
			// 	    mimetypes: ['image/*', 'text/plain'],
			// 	    container: 'window',
			// 	    services: ['COMPUTER', 'FACEBOOK', 'GMAIL'],
	  // 			},
	  // 			function(Blob){
	  //   			console.log(JSON.stringify(Blob));
	  //   			// var imgUrl = JSON.stringify(Blob).get('url');
	  //   			// console.log(imgUrl);
	  // 			},

	  // 			function(FPError){
	  //   			console.log(FPError.toString());
	  // 			}
			// );

			// // filepicker.read(
			// //   Blob,
			// //   function(data){
			// //     console.log(data);
			// //   }
			// // );

   //  	},

		createRecipe: function() {
			var user = this.get('user');
			// this.store.createRecord('user');
			console.log(user);
			var recipe = this.store.createRecord('recipe', {
				name: this.get('recipeName'),
				// recipeDetails: this.get('recipeDetails'),
				isPrivate: this.get('isPrivate'),
				rType: this.get('rType'),
				prepTime: this.get('prepTime'),
				cookTime: this.get('cookTime'),
				cookTemp: this.get('cookTemp'),
				dScale: this.get('dScale'),
				rQty: this.get('rQty'),
				qtyType: this.get('qtyType'),
				pNotes: this.get('pNotes'),
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
			this.set('prepTime', '');
			this.set('cookTime', '');
			this.set('cookTemp', '');
			this.set('rQty', '');
			this.set('qtyType', '');
			this.set('pNotes', '');
			this.set('ingrAmnt', '');
		
		}
	},

});
