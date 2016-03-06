 'use strict';

 var $ = require('jquery');
 var Backbone = require('backbone');
 Backbone.$ = $;
 var template = require('./main-button-template');
 var Model = require('./main-button-model');

 module.exports = Backbone.View.extend({
 	initialize: function(){
 		this.model = new Model();
 		this.model.on("change", this.render, this);
        this.render();
    },

    render: function() {
    	this.$el.html(template({type: this.model.get('type'), text: this.model.get('text')}));
    }

 });