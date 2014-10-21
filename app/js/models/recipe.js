BM.Recipe = DS.Model.extend({
	name: DS.attr('string'),
	recipeDetails: DS.attr('string'),
	user: DS.belongsTo('user'),
	isPublic: DS.attr('boolean'),
	prepTime: DS.attr('string'),
	cookTime: DS.attr('string'),
	steps: DS.hasMany('step', {embedded: true})
});

// remove recipe details!?



// BM.RecipeAdapter = BM.ApplicationAdapter.extend({
// 	pathForType: function(type){
// 		console.log(this);
// 		return 'recipes';
// 	}
// });