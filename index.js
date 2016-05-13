/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-slippry',
  included: function(app){
    this._super.included(app);

    app.import(app.bowerDirectory + "/slippry/dist/slippry.min.js");
    app.import(app.bowerDirectory + "/slippry/dist/slippry.css");

    app.import(app.bowerDirectory + "/slippry/images/arrows.svg", {
      destDir: "images"
    });
    app.import(app.bowerDirectory + "/slippry/images/sy-loader.gif", {
      destDir: "images"
    });

    
  }
};
