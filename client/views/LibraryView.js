// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();

    this.collection.on('add', function() {
      this.render();
    }, this);

    this.collection.on('play', function() {
      this.render();
    }, this);
  },

  events: {
    click: function(e) {
      if (e.target.className === 'search-button') {
        console.log('searching for ' + $('.search-value').val());
        this.collection.search($('.search-value').val());
      }
    }
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Library</th>').append(
      '<br><div><form>Title:<input type="text" name"titleSearch" class="search-value">' + 
      '<input type="button" value="search" class="search-button"></form></div>'
      );

    this.$el.append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
