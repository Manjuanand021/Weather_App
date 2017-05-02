# Weather_App

#### Setup
```
$ npm i
```

#### Run
```
$ npm build - Create Webpack build
$ npm clean - Clean build folder
$ npm dev - Run Webapck dev server
$ npm prod - Create Webpack prod build

Open http://localhost:3000/ in browser.

```

#### Changes Made
```
$ Configured webpack to create dev and prod builds
$ Javascript code written is in ES6 and used BABEL to transpile code from Es6  to ES5
$ Implemented tree-shaking to not to include unused exports
$ USED SCSS tp write style
$ Implemented cache busting to help fresh prod build
$ Webpack web server runs on port 3000 and has zgip compression enabled
$ Could not get time to change CSS and HTML. Given time I can re-structure both
$ .eslintsrc can be included for code quality. I have not put .eslintsrc file
$ Have implemented client side mvc style code structure to seperate data, ui related stuff and main controller
