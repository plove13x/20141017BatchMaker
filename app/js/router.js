BM.Router.map(function(){
	this.route('login', { path: '/'});
	this.resource('home');
});

// 	this.resource('todos', { path: '/' });


// Todos.TodosRoute = Ember.Route.extend({
//   model: function() {
//     return this.store.find('todo');
//   }
// });