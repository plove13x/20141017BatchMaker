window.BM = Ember.Application.create();


BM.ApplicationAdapter = DS.FirebaseAdapter.extend({
  	firebase: new Firebase("https://plovebatchmaker.firebaseio.com/"),
	// pathForType: function(type) {
 //    	return "users";
 //  	}
});



// Todos.ApplicationAdapter = DS.FixtureAdapter.extend();
