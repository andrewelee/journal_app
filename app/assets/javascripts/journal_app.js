window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var posts = new JournalApp.Collections.Posts();
    posts.fetch({
      success: function(){

        var postsView = new JournalApp.Views.PostsIndex({collection: posts});
        $('#sidebar').html(postsView.render().$el);

        var element = $('#content');
        new JournalApp.Routers.Posts(posts, element);
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
