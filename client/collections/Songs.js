// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var that = this;

    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      success: function(data) {
        _.each(data.results, function(song) {
          that.add(song);
        });
        
      },
      error: function() {
        console.log('YOU FAIL SIR');
      }
    });
  }
});