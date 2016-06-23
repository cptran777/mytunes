var CurrentPlayingView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>Currently Playing: <%= title %> by <%= artist %><br><br></td>'),

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes)); 
  }

});