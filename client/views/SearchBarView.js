var SearchBarView = Backbone.View.extend({

  el: '<div><form><input type="text" name"titleSearch" class="search-value">' +
      '<input type="button" value="search" class="search-button"></form></div><br>' +
      'Playlist: <select class="select-playlist"><option value="all">All Songs</option></select>',

  initialize: function() {
    this.render();

    this.collection.on('playlist', function(e) {
      var playListAttr = e.attributes.playlist.split(', ');
      var playListName = playListAttr[playListAttr.length - 1]; 

      this.addPlayList(playListName);
    }, this);
  },

  playlists: {

  },

  events: {
    click: function(e) {
      if (e.target.className === 'search-button') {
        this.collection.search($('.search-value').val());
        $('.search-value').val('');
      }
    },
    change: function(e) {
      if (e.target.className === 'select-playlist') {
        this.collection.showPlaylist($('.select-playlist').val());
      }
    }
  },

  addPlayList: function(name) {
    if (!this.playlists[name]) {
      this.playlists[name] = true;
      $('.select-playlist').append('<option value=' + name + '>' + name + '</option>');
    } 
  },

  render: function() {

  }
});