BM.Step = DS.Model.extend({
	ingredients: DS.hasMany('ingredientFood', {embedded: true}),
	description: DS.attr('string')
});