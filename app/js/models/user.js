BM.User = DS.Model.extend({
	name: DS.attr('string'),
	password: DS.attr('string'),
	recipes: DS.hasMany('recipe', { async: true })
});


// Todos.Todo = DS.Model.extend({
// 	title: DS.attr('string'),
// 	isCompleted: DS.attr('bbolean')
// });

// Todos.Todo.FIXTURES = [
//  {
//    id: 1,
//    title: 'Teach Ember.js',
//    isCompleted: true
//  },
//  {
//    id: 2,
//    title: '...',
//    isCompleted: false
//  },
//  {
//    id: 3,
//    title: 'Profit!',
//    isCompleted: false
//  }
// ];