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
  }

});