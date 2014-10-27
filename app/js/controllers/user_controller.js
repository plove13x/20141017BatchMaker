BM.UserController = Ember.Controller.extend({
	// recipes: [{id: 1, name: 'add'}, {id: 2, name: 'minus'}]
	needs: 'session',
	currentUser: Ember.computed.alias('controllers.session.currentUser'),
});

// BM.UserController = Ember.ObjectController.extend({
// 	user: Ember.computed.alias('model')
// });
