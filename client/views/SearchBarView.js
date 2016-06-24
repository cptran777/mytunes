var SearchBarView = Backbone.View.extend({

  el: '<div><form><input type="text" name"titleSearch" class="search-value">' +
      '<input type="button" value="search" class="search-button"></form></div><br>',

  initialize: function() {
    this.render();
  },

  events: {
    click: function(e) {
      if (e.target.className === 'search-button') {
        this.collection.search($('.search-value').val());
        $('.search-value').val('');
      }
    }
  },

  render: function() {

  }
});