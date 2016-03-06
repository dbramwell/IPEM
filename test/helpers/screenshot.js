function takeScreenshot() {
  if (window.callPhantom) {
    var date = new Date()
    var filename = "build/tests/screenshots/" + date.getTime()
    callPhantom({'screenshot': filename})
  }
}