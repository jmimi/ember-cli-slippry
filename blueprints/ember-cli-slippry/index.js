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
    var self = this;
    return this.addBowerPackagesToProject([{name: "slippry", target: "^1.3.1"}]).then(function(){
      return self.addPackagesToProject([{name: 'ember-cli-sass', target: 'latest'}]);
    });
  }
};
