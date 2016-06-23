// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td class="queue-entry"><%= title %>  ' +
                       '<span><img src="assets/button-remove.png" class="button button-remove"></span>'),

  events: {
    click: function(e) {
      if (e.target.className === 'button button-remove') {
        console.log('manually removing from queue');
        this.model.dequeue(); 
      } else if (e.target.className === 'queue-entry') {
        this.model.play();
        this.model.trigger('dequeueUntil', this);
      }
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
