/*jshint node:true*/
module.exports = {
  description: '',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }

  afterInstall: function(options){
    return _this.addPackagesToProject([{name: 'ember-cli-sass', target: 'latest'}]);
  }
};