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
        if ('contentDir' in options && typeof options.contentDir === 'string') {
            cmd += options.contentDir;
        }
        if ('configFile' in options && typeof options.configFile === 'string') {
            cmd += ' --settings ' + options.configFile;
        }
        if ('outputDir' in options && typeof options.outputDir === 'string') {
            cmd += ' --output ' + options.outputDir;
        }

        var cp = exec(cmd, function (err, stdout, stderr) {

            grunt.log.writeln(cmd);

            if (typeof options.callback === 'function') {
                options.callback.call(this, err, stdout, stderr, done)
            } else {
                if (err && options.failOnError) {
                    grunt.warn(err);
                }
                done();
            }
            grunt.log.writeln(stdout);
        }.bind(this));

    });

};
