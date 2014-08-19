JournalApp.Routers.Posts = Backbone.Router.extend({
  initialize: function(posts, element){
    this.posts = posts;
    this.$element = $(element);
  },

  routes: {
    'posts/:id' : 'show',
    'post' : 'post',
    'posts/new' : 'newPost'
  },

  // index: function(){
  //   var postsView = new JournalApp.Views.PostsIndex({collection: this.posts});
  //   this.$('#sidebar').html(postsView.render().$el);
  // },

  show: function(id){
    var post = this.posts.get({id: id});
    var postView = new JournalApp.Views.PostShow({model: post});
    this.$element.html(postView.render().$el);
  },

  post: function(){
    var post = new JournalApp.Models.Post();
    var postForm = new JournalApp.Views.PostForm(
      {model : post, collection: this.posts});
    this.$element.html(postForm.render().$el);
  }
});
