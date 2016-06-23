// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      console.log('song over');
      this.dequeueFirst();
      console.log(this);
    }, this);

    this.on('dequeue', function(song) {
      console.log('dequeuing song...');
      this.dequeueAt(song);
    }, this);
  },

  events: {
  },
  // This of playFirst as playNext
  playFirst: function() {
    console.log('checking the queue, it is ');
    console.log(this.length);
    this.at(0).play();
  },

  dequeueFirst: function() {
    console.log('removing first item from queue');
    this.shift();
    if (this.length > 0) {
      this.playFirst();
    }
  },

  dequeueAt: function(song) {
    this.remove(song);
  }

});