// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    'playCount': 0,
    'playlist': 'all'
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.set('playCount', this.get('playCount') + 1);
    this.trigger('play', this);
  },

  ended: function() {
    this.trigger('ended', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  addToPlaylist: function(playlist) {
    this.set('playlist', this.get('playlist') + ', ' + playlist);
    this.trigger('playlist', this);
  }
  
});
