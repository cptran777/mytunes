// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.queueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.currentPlayingView = new CurrentPlayingView({model: this.model.get('currentSong')});
    this.searchBarView = new SearchBarView({collection: this.model.get('library')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
      this.currentPlayingView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function() {
    var divClassContainer = $('<div class="container"></div>');
    
    var divClassRowTop = $('<div class="row row-top row-centered"></div>');
    divClassRowTop.append(this.currentPlayingView.$el);
    divClassRowTop.append(this.playerView.$el);
    divClassRowTop.append(this.searchBarView.$el);

    var divClassRowBottom = $('<div class="row row-bottom"></div>');
    
    var divClassColOne = $('<div class="col-md-6"></div>');
    divClassColOne.append(this.libraryView.$el);
    
    var divClassColTwo = $('<div class="col-md-6"></div>');
    divClassColTwo.append(this.queueView.$el);

    divClassRowBottom.append(divClassColOne);
    divClassRowBottom.append(divClassColTwo);

    divClassContainer.append(divClassRowTop);
    divClassContainer.append(divClassRowBottom);

    

    return this.$el.html(divClassContainer);

    // return this.$el.html([
    //   '<div class="container">',
    //       '<div class="row row-top centered">',
    //           '<div class="col-md-1>', 
    //             this.currentPlayingView.$el, '<br>',
    //             this.playerView.$el,
    //           '</div>', 
    //       '</div>',
    //       '<div class="row row-bottom">',
    //          '<div class="col-md-2">',
    //             this.libraryView.$el, '</div>',
    //          '<div class="col-md-2">',
    //             this.queueView.$el, '</div>',
    //       '</div>',
    //   '</div>'    
    // ]);
    // return this.$el.html([
    //   this.currentPlayingView.$el,
    //   this.playerView.$el,
    //   this.libraryView.$el,
    //   this.queueView.$el
    // ]);
  }
});
