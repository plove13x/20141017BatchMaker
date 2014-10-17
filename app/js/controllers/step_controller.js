BM.StepController = Ember.ObjectController.extend({
  actions: {
    addIngredient: function(){
      var ingredient = this.store.createRecord('ingredientFood', {});
      this.get('ingredients').addObject(ingredient);
    }
  }
});