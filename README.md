# YouTube Center [![Crowdin](https://d322cqt584bo4o.cloudfront.net/youtube-center/localized.png)](https://crowdin.net/project/youtube-center)
YouTube Center is an extension for the browser that will enhance the experience on YouTube by adding tons of new and useful features.

## Contribute
You can contribute to YouTube Center by different means. You can help find bugs (and report them in the [issue tracker](https://github.com/YePpHa/YouTubeCenter/issues)), help with the translation to different languages or you can try and implement new things yourself.

### Translation
YouTube Center uses Crowdin to better manage the translations. If you want to help with the translation of YouTube Center you can find the project page on [Crowdin](https://crowdin.net/project/youtube-center).

## Build
YouTube Center is using the build system [Ant](http://ant.apache.org/).

### Base requirements
 * Desktop Computer
 * [Java SDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
 * [Ant](http://ant.apache.org/)

### Optional requirements
To build the Chrome or Maxthon extension it is required to be able to run executable, which can be done in Wine on Linux or on a Windows computer.

It is possible to build the unpacked version of the Chrome or Maxthon extension without the need to run executables:
 * `ant copy-chrome` -- Makes the required files to build the extension file (.crx) ready in the build directory.
 * `ant copy-maxthon` -- Makes the required files to build the extension file (.mxaddon) ready in the build directory.

### Signing
The certificates for signing the extensions have to be provided by yourself and have to be placed in:
 * `/.cert/chrome/`
 * `/.cert/safari/`
 
It should be noted that the Ant build will create a new signing key for Chrome if it's missing from `/.cert/chrome/` (Running executables is required).
 
### Ant
The build system is made in Ant and requires both Ant and Java to be installed.

 * `ant all` -- Build everything below except for the styles.
 * `ant devnumber` -- Increment the build number.
 * `ant firefox` -- Build the Firefox addon (.xpi)
 * `ant chrome` -- Build the Chrome extension (.crx)
 * `ant maxthon` -- Build the Maxthon extension (.mxaddon)
 * `ant opera` -- Build the Opera extension (.oex)
 * `ant userscript` -- Build the userscript (.user.js)
 * `ant safari` -- Makes everything ready for Safari to finish building YouTube Center.
 * `ant styles` -- Minifies the styles used. This is needed to be called everytime a change in the styles is made.
 * `ant language` -- Retrieves the newest translations for YouTube Center and stores it as a JSON file.

### Build Properties (build.properties)
The keys in this file have the prefix and suffix `@`.

 * `devbuild` -- Set to true if you want to create a developer build and false if it's a stable release.
 * `ant-version` -- The stable version.
 * `ant-revision` -- The stable revision used to check if it's a newer version.
 * `pastebin-api-key` -- The pastebin API key used by YouTube Center to post the debug log on pastebin.
 * `name-stable` -- The name of the extensions for the stable version.
 * `name-dev` -- The name of the extensions for the developer version.
 * `stable-downloadURL` -- The location of the newest version of YouTube Center for the stable version.
 * `stable-updateURL` -- The location of the userscript header to check if a new version of YouTube Center is available for the stable version.
 * `dev-downloadURL` -- The location of the newest version of YouTube Center for the developer version.
 * `dev-updateURL` -- The location of the userscript header to check if a new version of YouTube Center is available for the developer version.
 * `firefox-target-id` -- Used in the Firefox extension manifest to specify which platform the extension is targeted towards.
 * `firefox-target-min-version` -- The minimum version of the targeted platform.
 * `firefox-target-max-version` -- The maximum version of the targeted platform.
 * `firefox-target-mobile-id` -- The mobile platform id.
 * `firefox-target-mobile-min-version` -- The minimum version of the mobile platform.
 * `firefox-target-mobile-max-version` -- The maximum version of the mobile platform.
 * `firefox-update-link` -- The location of the newest version of the developer version of YouTube Center for Firefox is located.
 * `firefox-update-rdf` -- The location of the file, which Firefox uses to check if a new version of the developer version of YouTube Center is available.
 * `chrome-id` -- The id of the Chrome extension. The id can be found in `chrome://extensions/` or calculated from the signing key.
 * `chrome-update-xml` -- The location of the file, which Chrome uses to check if a new version of the developer version of YouTube Center is available.
 * `chrome-update-file` -- The location of the newest version of the developer version of YouTube Center for Chrome is located.

## License
The MIT License (MIT)

Copyright (c) 2014 Jeppe Rune Mortensen

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

插件:
Download

YouTube Center is available as the following extensions: Userscript, Firefox, Chrome, Opera, Safari and Maxthon.

Current version: 2.1.7.
Userscript

Standard: yeppha.github.io
OpenUserJS: https://openuserjs.org/scripts/YePpHa/YouTube_Center
Mirror: Mega
Firefox Extension

AMO: https://addons.mozilla.org/en-us/firefox/addon/youtube-center/
Standard: yeppha.github.io
Mirror: Mega
Mirror: computerbild.de
Chrome & Opera 15+ Extension

This is for both Chrome and Opera.

Chrome Webstore Page: page (taken down by Google, currently being reviewed)
Opera Extension Page: https://addons.opera.com/en/extensions/details/youtube-center/
Standard: yeppha.github.io
Mirror: Mega
Mirror: computerbild.de
Opera 14 or older Extension

Standard: yeppha.github.io
Mirror: Mega
Safari Extension

Standard: yeppha.github.io
Mirror: Mega
Maxthon Extension

Extension Page (Maintained by KDASOFT): http://extension.maxthon.com/detail/index.php?view_id=1201
Standard: yeppha.github.io
Mirror: Mega
Internet Explorer

How to install YouTube Center on Internet Explorer
Latest Changelog
 
