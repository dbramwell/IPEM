var MainButton = require("./modules/main-button/main-button-view");

module.exports = IPEM;

function IPEM() {}

IPEM.prototype.mainButton = function(selector) {
  return new MainButton({el: selector});
};