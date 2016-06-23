// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td class="library-entry"><%= title %> ' + 
              '<span><img src="assets/button-queue.png" class="button button-queue"></span> ' +
              '<span><img src="assets/button-play.png" class="button button-play"></span></td>'),

  events: {
    click: function(e) {
      if (e.target.className === 'library-entry') {
        console.log('clicked on song');
        this.model.ended();   // Ugly hack to get ended to fire
      } else if (e.target.className === 'button button-queue') {
        console.log('queued up!');
        this.model.enqueue();
      } else if (e.target.className === 'button button-play') {
        console.log('playing song!');
        this.model.play();
      }
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});


