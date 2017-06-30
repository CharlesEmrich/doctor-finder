# Doctor Finder

#### Adventures with the BetterDoctorAPI.

#### By Charles Emrich
#### CharlesEmrich @ gitHub for any questions.

## Description
An app using the BetterDoctorAPI to list nearby doctors who can treat a user's submitted symptoms.

## Planning

### Dependencies
## Can be found in bower.json and package.json files, but are listed here for convenience.
* gulp-babel, babel-preset-es2015
  * Prevents ES6 features from breaking gulp-uglify
* bower-files
  * Compacts front-end dependencies into a single vendor file
* browser-sync
  * An auto-reloading local server for development purposes
* browserify
  * Allows code utilizing node.js features to run in-browser
* gulp
  * Development task runner/automator
* del
  * Deletion utility used in gulp tasks
* gulp-concat
  * Gulp library to concatenate dev files into single files for production builds
* gulp-jshint, jshint
  * JSHint does JSLint things
* gulp-sass, gulp-sourcemaps
  * Compiles separate sass files into unified CSS files for production builds
* gulp-uglify
  * Minify concatenated files for production builds
* jQuery
  * The one, the only. Used here primarily for DOM manipulation and simplified AJAX calls.

## Specs
| Behavior | Input | Output |
| - | - | - |
| User enters a malady | *submits forms* | User receives back a list of doctors. |
| User clicks on a doctor's name | *clicks name* | Displays phone number and bio. |

## Installation

* Clone the repository (https://github.com/CharlesEmrich/doctor-finder.git)
* Run 'npm install' in terminal to install development dependencies
* Run 'bower install' in terminal to install runtime dependencies
* Create a .env file with your BetterDoctorAPI key exported to "apiKey" and Google Geocode API key exported to "geoApiKey"
* Run 'gulp serve' to start the local server

## Known Bugs

There are no known bugs at this time.

## Technologies Used

* HTML
* JavaScript
* jQuery
* CSS
* Sass
* NPM
* Bower
* Gulp

### License

MIT

Copyright (c) 2017 Charles Emrich
