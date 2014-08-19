JournalApp.Views.PostsIndex = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, "sync remove reset add change:title", this.render);
  },

  events: {
    "click button.delete" : "deletePost",
    "click a.show" : "showPost"
  },

  template: JST['posts/index'],

  render: function(){
    var content = this.template({ posts: this.collection });
    this.$el.html(content);
    return this;
  },

  deletePost: function(){
    event.preventDefault();
    var id = $(event.target).attr("data-id");
    this.collection.get(id).destroy();
    this.collection.remove({id: id});
  },

  showPost: function(){
    event.preventDefault();
    var id = $(event.target).attr("data-id");
    console.log(id);
    Backbone.history.navigate("#/posts/" + id, {trigger: true, replace: true});
  }

});
