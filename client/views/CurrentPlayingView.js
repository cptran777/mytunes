var CurrentPlayingView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<div class="centered">Currently Playing: <%= title %> by <%= artist %><br><br></div>'),

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes)); 
  }

});