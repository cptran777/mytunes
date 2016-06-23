// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    'playCount': 0
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.set('playCount', this.get('playCount') + 1);
    this.trigger('play', this);
  },

  enqueue: function() {
    console.log('songmodel enqueue triggered');
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    console.log('songmodel dequeue triggered');
    this.trigger('dequeue', this);
  },

  ended: function() {
    console.log('songmodel ended triggered');
    this.trigger('ended', this);
  }
});
