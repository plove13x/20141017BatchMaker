// BM.LoginController = Ember.Controller.extend({
// 	needs: 'application',
// 	actions:{
// 		logIn: function(){
// 			// if(!this.get('controllers.application.user')) {
// 				// console.log(this.get('user'));
// 				console.log(this.get('username'), this.get('password'));
// 				//if (this.get('userName') && this.get('email')){
// 					this.set('controllers.application.user', {
// 						username: this.get('username'),
// 						id: this.get('id')
// 					});
// 			// }
// 					this.transitionToRoute('index');
// 			//}
// 		}
// 	},
// });


BM.LoginController = Ember.Controller.extend({
  needs: ['session'],
  actions: {
    logIn: function(){
    	console.log(this.get('controllers.session.currentUser'));
      var credentials = this.getProperties('email', 'password');
      this.get('controllers.session').authenticate(credentials);
      // this.set('controllers.session.currentUser', credentials);
      console.log(this.get('controllers.session.currentUser'));
      this.transitionToRoute('recipes');
    }
  }
});

