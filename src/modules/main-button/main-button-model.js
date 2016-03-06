 'use strict';

 var $ = require('jquery');
 var Backbone = require('backbone');
 Backbone.$ = $;

 module.exports = Backbone.Model.extend({
 	defaults: {
        type: 'btn-info',
        text: 'Info'
    },

    initialize: function(){
    }
});