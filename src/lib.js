module.exports = IPEM;

function IPEM() {
  this.aSetting = true;
};

IPEM.prototype.doWork = function() {
  console.log(this.aSetting);
}