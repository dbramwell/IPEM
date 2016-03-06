describe("DOM Tests", function () {    
    
      it("has the right text", function () {
        expect(document.getElementById('header').innerHTML).to.equal("Hello");
      });

    function takeScreenshot() {
      if (window.callPhantom) {
        var date = new Date()
        var filename = "build/tests/screenshots/" + date.getTime()
        callPhantom({'screenshot': filename})
      }
    }

      afterEach(function () {
    if (this.currentTest.state == 'failed') {
      takeScreenshot()
    }
  })
});