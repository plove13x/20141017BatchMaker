window.BM = Ember.Application.create();

filepicker.setKey("AJE3cnY7SdaNS7tkXqQwgz");

BM.ref = new Firebase('https://plovebatchmaker.firebaseio.com/');

BM.ApplicationAdapter = DS.FirebaseAdapter.extend({
  	firebase: BM.ref,
	// pathForType: function(type) {
 //    	return "users";
 //  	}
});


// Todos.ApplicationAdapter = DS.FixtureAdapter.extend();
