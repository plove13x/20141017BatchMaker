BM.RegisterController = Ember.Controller.extend({
  needs: ['session'],
  actions: {
    createUser: function(){
      var credentials = this.getProperties('email', 'password');
      var self = this;

        return new Ember.RSVP.Promise(function(resolve, reject){

          BM.ref.createUser(credentials, function(error){
            if( ! error ){

            BM.ref.authWithPassword(credentials, function(error, authData){
              var user = self.store.createRecord('user', {
                  id: authData.uid,
                  email: credentials.email
              });
              user.save();
              localStorage.setItem('currentUser', user);
              self.controllerFor('session').set('currentUser', user);
              // self.get('controllers.session').set('currentUser', user);
              
              resolve(authData);
              
              console.log(user);
              console.log(self.controllerFor('session').get('currentUser'));
            });


          // self.get('controllers.session').authenticate(credentials).then(function(authData){
          //   var user = self.store.createRecord('user', {
          //     id: authData.uid,
          //     email: credentials.email
          //   });
          //   user.save();
          // });
            }
          });

        });

    }
  }
});
