// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    console.log('Playing some music');
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
