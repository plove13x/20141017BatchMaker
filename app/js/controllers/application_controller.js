BM.ApplicationController = Ember.ObjectController.extend({
	user: Ember.computed.alias('model')
});