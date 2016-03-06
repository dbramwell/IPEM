 'use strict';

 var $ = require('jquery');
 var Backbone = require('backbone');
 Backbone.$ = $;

 module.exports = Backbone.View.extend({
 	initialize: function(){
      this.render();
    },

    render: function() {
    	this.$el.html("Hello World");
    }
 });