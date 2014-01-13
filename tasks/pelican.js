/*
 * grunt-pelican
 * https://github.com/chuwy/grunt-pelican
 *
 * Copyright (c) 2014 Anton Parkhomenko
 * Licensed under the MIT license.
 */

'use strict';

var exec = require('child_process').exec;

module.exports = function(grunt) {
    grunt.registerMultiTask('pelican', 'Grunt plugin for build Pelican static blog', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var done = this.async()

        var options = this.options({
            punctuation: '.',
            separator: ', '
        });

        var cmd = 'pelican ';
        var contentDir = '';
        var configFile = '';
        var outputDir = '';

        if ('contentDir' in options && typeof options.contentDir === 'string') {
            contentDir = options.contentDir;
        }
        if ('contneDir' in this.data && typeof this.data.contentDir === 'string') {
            contnetDir = this.data.contentDir;
        }
        cmd += contentDir;

        if ('configFile' in options && typeof options.configFile === 'string') {
            configFile = options.configFile;
        }
        if ('configFile' in this.data && typeof this.data.configFile === 'string') {
            configFile = this.data.configFile;
        }
        cmd += ' --settings ' + configFile;

        if ('outputDir' in options && typeof options.outputDir === 'string') {
            outputDir = options.outputDir;
        }
        if ('outputDir' in this.data && typeof this.data.outputDir === 'string') {
            outputDir = this.data.outputDir;
        }
        cmd += ' --output ' + outputDir;

        var cp = exec(cmd, function (err, stdout, stderr) {

            grunt.log.writeln('INFO: ' + cmd);

            if (typeof options.callback === 'function') {
                options.callback.call(this, err, stdout, stderr, done)
            } else {
                if (err && options.failOnError) {
                    grunt.warn(err);
                }
            }
            grunt.log.errorlns(stderr);
            grunt.log.oklns(stdout);
        }.bind(this));

    });

};
