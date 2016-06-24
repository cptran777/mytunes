// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();

    this.collection.on('add', function() {
      this.render();
    }, this);

    this.collection.on('ended', function() {
      console.log('song ended');
      this.render();
    }, this);

    this.collection.on('dequeue', function() {
      this.render();
    }, this);

    this.collection.on('dequeueUntil', function() {
      this.render();
    }, this);
  },

  events: {
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<div class="span6"><th>Queue</th></div>').append(
      this.collection.map(function(song) {
        console.log('adding to the queue');
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
