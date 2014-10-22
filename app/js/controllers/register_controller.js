BM.RegisterController = Ember.Controller.extend({
  needs: ['session'],
  actions: {
    createUser: function(){
      var credentials = this.getProperties('email', 'password');
      var self = this;
      BM.ref.createUser(credentials, function(error){
        if( ! error ){
          self.get('controllers.session').authenticate(credentials).then(function(authData){
            var user = self.store.createRecord('user', {
              id: authData.uid,
              email: credentials.email
            });
            user.save();
          });
        }
      });
    }
  }
});
