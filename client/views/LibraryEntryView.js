// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="library-entry">(<%= artist %>)<%= title %> ' + 
              '<span><img src="assets/button-queue.png" class="button button-queue"></span> ' +
              '<span><img src="assets/button-play.png" class="button button-play"></span>' + 
              '<span><img src="assets/button-playlist.png" class="button button-playlist"></span>' +
              '<span><%= playCount %></span></td>'),

  events: {
    click: function(e) {
      if (e.target.className === 'button button-queue') {
        this.model.enqueue();
      } else if (e.target.className === 'button button-play') {
        this.model.play();
      } else if (e.target.className === 'button button-playlist') {
        var playlistName = prompt('What playlist would you like to add this song to?');
        this.model.addToPlaylist(playlistName);
      }
    },
    dblclick: function(e) {
      if (e.target.className === 'library-entry') {
        this.model.play();
      }
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});


