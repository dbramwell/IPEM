describe("Main Button Tests", function () {    
  
  var ipem = new IPEM();

  it("Default button has the right text", function () {
    ipem.mainButton("#content");
    expect(document.getElementsByTagName('button')[0].innerHTML).to.equal("Info");
  });

  it("Default button has the right class", function () {
    ipem.mainButton("#content");
    expect(document.getElementsByTagName('button')[0].classList.contains("btn-info")).to.equal(true);
  });

  it("Change model text changes button text", function () {
    var button = ipem.mainButton("#content");
    button.model.set({ text: "New Text"});
    expect(document.getElementsByTagName('button')[0].innerHTML).to.equal("New Text");
  });

  it("Change model type changes button type", function () {
    var button = ipem.mainButton("#content");
    button.model.set({ type: "btn-success"});
    expect(document.getElementsByTagName('button')[0].classList.contains("btn-success")).to.equal(true);
  });

  afterEach(function () {
    if (this.currentTest.state == 'failed') {
      takeScreenshot()
    }
  })
});