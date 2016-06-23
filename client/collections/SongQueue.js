// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.listenTo(Backbone, 'enqueue', this.add);
  },

  events: {
    'enqueue': 'add'
  },

  add: function() {
    console.log('tired of listening to yo shit');
  }

});