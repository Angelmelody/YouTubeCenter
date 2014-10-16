module.exports = function(grunt) {
  function getDataURL(file) {
    var content = grunt.file.read(file);
    var base64 = new Buffer(content).toString("base64");
    
    return "data:image/png;base64," + base64;
  }
  
  function getCrowdinKey() {
    return grunt.file.read("crowdin.key");
  }
  
  function createCommandString(file, args) {
    var cmd = file;
    for (var i = 0, len = args.length; i < len; i++) {
      cmd += " " + args[i];
    }
    return cmd;
  }
  
  /* Libraries */
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-compress");
  grunt.loadNpmTasks("grunt-replace");
  grunt.loadNpmTasks("grunt-exec");
  grunt.loadNpmTasks("grunt-contrib-compress");
  
  /* Loading YouTube Center configurations */
  var appConfig = grunt.file.readJSON("./config.json");
  
  var crowdinUpdateArgs = [
    "-Dfile.encoding=UTF-8",
    "-jar", appConfig.crowdin.jar,
    "-m", "update",
    "--key", getCrowdinKey(),
    "--identifier", appConfig.crowdin.identifier,
    "--file", appConfig.crowdin.base,
    "--filename", appConfig.crowdin["server-base"]
  ];
  var crowdinUploadArgs = [
    "-Dfile.encoding=UTF-8",
    "-jar", appConfig.crowdin.jar,
    "-m", "build",
    "--key", getCrowdinKey(),
    "--identifier", appConfig.crowdin.identifier,
    "--include", appConfig.crowdin.base,
    "--include-language", appConfig.crowdin["base-language"],
    "--minify",
    "--o", appConfig.crowdin.output
  ];
  
  grunt.initConfig({
    "exec": {
      "build-language": {
        cmd: createCommandString("java", crowdinUpdateArgs)
      },
      "upload-language": {
        cmd: createCommandString("java", crowdinUploadArgs)
      }
    }
  });
};