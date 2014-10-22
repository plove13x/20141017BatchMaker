BM.Recipe = DS.Model.extend({
	name: DS.attr('string'),
	// recipeDetails: DS.attr('string'),
	user: DS.belongsTo('user'),
	isPrivate: DS.attr('boolean'),
	rType: DS.attr('string'),
	prepTime: DS.attr('string'),
	cookTime: DS.attr('string'),
	cookTemp: DS.attr('number'),
	dScale: DS.attr('string'),
	rQty: DS.attr('number'),
	qtyType: DS.attr('string'),
	pNotes: DS.attr('string'),
	steps: DS.hasMany('step', {embedded: true})
});

// remove recipe details!?



// BM.RecipeAdapter = BM.ApplicationAdapter.extend({
// 	pathForType: function(type){
// 		console.log(this);
// 		return 'recipes';
// 	}
// });