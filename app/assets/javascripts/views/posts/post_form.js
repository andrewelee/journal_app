JournalApp.Views.PostForm = Backbone.View.extend({
  initialize: function(){
  },

  events: { 'submit #post-form' : 'submit'},

  template: JST['posts/form'],

  render: function(attributes){
    var attributes = attributes || {title: "", body: ""};
    var content = this.template(attributes);
    this.$el.html(content);
    return this;
  },

  submit: function(){
    event.preventDefault();
    var that = this;
    var postVals = $(event.target).serializeJSON();
    if (this.model.isNew() == false){
      this.model.save(postVals, {
        success: function(post){
          Backbone.history.navigate("/", {trigger: true, replace: true});
        },
        error: function(post){
          that.model.set(post.attributes.post);
          that.render(post.attributes.post);
        }
      });
    } else {
      this.collection.create(postVals, {
        success: function(post){
          Backbone.history.navigate("/", {trigger: true, replace: true});
        },
        error: function(post){
          that.model.set(post.attributes.post);
          that.render(post.attributes.post);
        }
      });
    }
  }

})