BM.LoginController = Ember.Controller.extend({
	needs: 'application',
	actions:{
		logIn: function(){
			// if(!this.get('controllers.application.user')) {
				// console.log(this.get('user'));
				console.log(this.get('username'), this.get('password'));
				//if (this.get('userName') && this.get('email')){
					this.set('controllers.application.user', {
						username: this.get('username'),
						password: this.get('password')
					});
			// }
					this.transitionToRoute('index');
			//}
		}
	},
});