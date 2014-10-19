# YouTube Center [![Crowdin](https://d322cqt584bo4o.cloudfront.net/youtube-center/localized.png)](https://crowdin.net/project/youtube-center)
YouTube Center is an extension for the browser that will enhance the
experience on YouTube by adding tons of new and useful features.

## Requirements
The general requirements for this project are:
* [NodeJS](http://nodejs.org/)
* [Grunt](http://gruntjs.com/)

There are some extra requirements if you want to build a specific extension.

**Chrome CRX Extension** only has a Windows binary file at the moment, but
it is possible to build your own [buildcrx](https://github.com/kylehuff/buildcrx)
binary file for your OS.

**Maxthon Extension** has only released a binary file for Windows and as such requires Windows
to build the Maxthon extension. You can read more [here](http://forum.maxthon.com/thread-801-1-1.html).

**Safari Extension** can be built with the Safari browser or automatically by using
the build system. Currently there is only a Windows binary file for building
the Safari extension as `xar` is required. It's possible to build your own
binary file for your OS by going to the project [here](http://mackyle.github.io/xar/).

## Get Started
To get started, clone the project, build the project, and install it on your
browser:

```shell
$ git clone https://github.com/YePpHa/YouTubeCenter.git
$ cd YouTubeCenter
$ npm install
$ grunt userscript
```

You will need to make sure that you have [NodeJS](http://nodejs.org/)
and [Grunt](http://gruntjs.com/) installed.

## Contribute
You can contribute to YouTube Center by different means. You can help find bugs
(and report them in the issue tracker), help with the translation to different
languages or try to implement things yourself.

## Translation
YouTube Center uses Crowdin to better mangage the translations. If you want to
help with the translation of YouTube Center you can find the project page at
https://crowdin.net/project/youtube-center.

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
 
