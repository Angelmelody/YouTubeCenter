(function(){
  function createUserScript(metadata) {
    function getTab(key, tabLength) {
      var len = tabLength - key.length;
      if (len < 1) len = 1;
      var idents = "";
      for (var i = 0; i < len; i++) {
        idents += " ";
      }
      return idents;
    }
    
    var start = "// ==UserScript==";
    var end = "// ==/UserScript==";
    var lineStart = "// ";
    var propertyToken = "@";
    var newLine = "\r\n";
    var tabLength = 16;
    
    var content = start + newLine;
    for (var key in metadata) {
      if (metadata.hasOwnProperty(key)) {
        var obj = metadata[key];
        if (util.isArray(obj)) {
          for (var i = 0, len = obj.length; i < len; i++) {
            content += lineStart + propertyToken + key + getTab(key, tabLength) + obj[i] + newLine;
          }
        } else {
          content += lineStart + propertyToken + key + getTab(key, tabLength) + obj + newLine;
        }
      }
    }
    content += end + newLine;
    return content;
  }
  
  var util = require("util");
  
  exports.createUserScript = createUserScript;
  
})();