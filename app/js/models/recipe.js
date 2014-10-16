BM.Recipe = DS.Model.extend({
	name: DS.attr('string'),
	recipeDetails: DS.attr('string'),
	user: DS.belongsTo('user'),
	isPublic: DS.attr('boolean')
});

// remove recipe details!?



// BM.RecipeAdapter = BM.ApplicationAdapter.extend({
// 	pathForType: function(type){
// 		console.log(this);
// 		return 'recipes';
// 	}
// });