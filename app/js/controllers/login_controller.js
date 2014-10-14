BM.LoginController = Ember.Controller.extend({
	needs: 'application',
	actions:{
		logIn: function(){
			console.log(this.get('username'), this.get('email'));
			//if (this.get('userName') && this.get('email')){
				this.set('controllers.application.user', {
					name: this.get('username'),
					email: this.get('email')
				})
				this.transitionToRoute('home');
			//}
		}
	},
});