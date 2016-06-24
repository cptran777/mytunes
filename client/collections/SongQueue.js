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
      this.dequeueFirst();
    }, this);

    this.on('dequeue', function(song) {
      this.dequeueAt(song);
    }, this);

    this.on('dequeueUntil', function(song) {
      this.dequeueUntil(song);
    }, this);
  },

  events: {
  },
  // This of playFirst as playNext
  playFirst: function() {
    console.log(this.length);
    this.at(0).play();
  },

  dequeueFirst: function() {
    this.shift();
    if (this.length > 0) {
      this.playFirst();
    }
  },

  dequeueAt: function(song) {
    this.remove(song);
  },

  dequeueUntil: function(song) {
    var index = this.indexOf(song);

    for (var i = 0; i < index; i++) {
      this.shift();
    }
  }
});