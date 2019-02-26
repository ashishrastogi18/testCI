'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);
//added for Continous Integration
require('./gulpfile-deploy-app-package');
require('./gulpfile-serve-info');
require('./gulpfile-update-manifest');
require('./gulpfile-upload-to-sharepoint');
require('./gulpfile-upload-app-package');
build.initialize(gulp);
