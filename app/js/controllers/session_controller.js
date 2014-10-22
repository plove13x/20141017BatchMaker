BM.SessionController = Ember.Controller.extend({
  currentUser: null,
  authenticate: function(credentials){
  	var self = this;
    return new Ember.RSVP.Promise(function(resolve, reject){
      BM.ref.authWithPassword(credentials, function(error, authData){
        // resolve(authData);
        console.log(authData);
        // this.set('currentUser', authData.uid);
        self.store.find('user', authData.uid).then(function(user){
        self.set('currentUser', user);
        resolve(user);
        console.log(self.get('currentUser'));
        })

      });
    })
  }
});