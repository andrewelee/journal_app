JournalApp.Views.PostShow = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, "remove reset change:title", this.render);
  },

  events: { 'dblclick .title' : 'editTitle',
            'dblclick .body' : 'editBody',
            'blur .title-edit' : 'updateTitle',
            'blur .body-edit' : 'updateBody'
  },

  template: JST['posts/show'],

  render: function(){
    var content = this.template({post: this.model });
    this.$el.html(content);
    return this;
  },

  editTitle: function(){
    var text = $(event.target).html();
    $(event.target).html('<input class="title-edit" type="text" value=' + text + '></input>');

  },

  editBody: function(){
    var text = $(event.target).html();
    $(event.target).html('<textarea class="body-edit">' + text + '</textarea>');

  },

  updateTitle: function(){
    var text = $(event.target).val();
    $(event.target).parent().html(text);
    this.model.save({title: text});
  },

  updateBody: function(){
    var text = $(event.target).val();
    console.log("updating");
    $(event.target).parent().html(text);
    this.model.save({body: text});
  }

});