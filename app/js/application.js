window.BM = Ember.Application.create();

filepicker.setKey("AJE3cnY7SdaNS7tkXqQwgz");

BM.ApplicationAdapter = DS.FirebaseAdapter.extend({
  	firebase: new Firebase("https://plovebatchmaker.firebaseio.com/"),
	// pathForType: function(type) {
 //    	return "users";
 //  	}
});



// Todos.ApplicationAdapter = DS.FixtureAdapter.extend();
