// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  events: {

  },

  _storage: [],

  initialize: function() {
    var that = this;

    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      success: function(data) {
        _.each(data.results, function(song) {
          that.add(song);
        });

        that.each(function(song) {
          that._storage.push(song);
        });
      },
      error: function() {
        console.log('YOU FAIL SIR');
      }
    });

    this.on('playlist', function(e) {
      var pl = e.get('playlist');
      var index = this.indexOf(e);

      this.at(index).set('playlist', pl);
    });
  },

  search: function(value) {
    var that = this;
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      data: 'where={"$or":[{"title":{"$regex":"(?i)' + value + '"}},' +
                          '{"artist":{"$regex":"(?i)' + value + '"}}]}',
      success: function(data) {
        if (data.results.length === 0) {
          console.log('search returned nothing');
          that.reset();
          that.trigger('add');
        } 

        that.reset();
        _.each(data.results, function(song) {
          that.add(song);
        });
      },
      error: function() {
        console.log('YOU FAIL SIR');
      }
    });    
  },

  showPlaylist: function(playlist) {
    var pl = new RegExp(playlist, 'g');
    var plSongs = this._storage.filter(function(song) {
      return song.get('playlist').match(pl);
    });

    this.reset();
    
    for (var i = 0; i < plSongs.length; i++) {
      this.add(plSongs[i]);
    }
  }
});