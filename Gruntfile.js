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
  
  function appendMetadata(metedata) {
    for (var key in metadata) {
      if (metadata.hasOwnProperty(key)) {
        metadataConfig[key] = metadata[key];
      }
    }
  }
  
  /* External libs */
  var metadata = require("./vendor/nodejs/metadata.js");
  
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
  
  /* Variables */
  var metadataConfig = appConfig.metadata.default;
  
  /* Crowdin START */
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
  /* Crowdin END */
  
  grunt.initConfig({
    "exec": {
      "build-language": {
        cmd: createCommandString("java", crowdinUpdateArgs)
      },
      "upload-language": {
        cmd: createCommandString("java", crowdinUploadArgs)
      }
    },
    "copy": {
      "content-script": {
        "files": [
          { expand: true, cwd: "./src", dest: "./build/", src: ["main.js"] }
        ]
      }
    },
    "concat": {
      "userscript": {
        "files": {
          "./dist/YouTubeCenter.user.js": [ "./build/license.js", "./build/metadata.js", "./build/main.js" ]
        }
      }
    },
    "clean": {
      "pre": ["./build/", "./dist/"],
      "after": ["./build/"]
    }
  });
  
  grunt.registerTask("build:license", function(){
    var content = grunt.file.read("./LICENSE");
    
    content = "/**\r\n" + content + "\r\n**/\r\n";
    
    grunt.file.write("./build/license.js", content);
  });
  
  grunt.registerTask("build:userscript-meta", function(){
    var content = metadata.createUserScript(metadataConfig);
    grunt.file.write("./build/metadata.js", content);
  });
  
  grunt.registerTask("config:replace", function(){
    appConfig["language"] = grunt.file.read("./language.json");
    
    grunt.file.recurse("./build/", function(abspath, rootdir, subdir, filename){
      var ext = filename.substring(filename.lastIndexOf("."));
      
      if (ext === "js") {
        var content = grunt.file.read(abspath);
        content = content.replace(/\$\{([0-9a-zA-Z\.\-\_]+)\}/g, function(match, $1){
          if ($1 in appConfig) {
            return appConfig[$1];
          } else {
            return "${" + $1 + "}";
          }
        });
        grunt.file.write(abspath, content);
      }
    });
  });
  
  grunt.registerTask("userscript", [
    "clean:pre",
    "copy:content-script",
    "build:license",
    "build:userscript-meta",
    "config:replace",
    "concat:userscript",
    "clean:after"
  ]);
  
  grunt.registerTask("language-download", [
    "exec:build-language"
  ]);
  
  grunt.registerTask("language-upload", [
    "exec:upload-language"
  ]);
};