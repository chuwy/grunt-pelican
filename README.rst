#############
grunt-pelican
#############

Grunt plugin for build Pelican static blog.

===============
Getting Started
===============

This plugin requires Grunt `~0.4.1`

If you haven't used `Grunt <http://gruntjs.com/>`_ before,
be sure to check out the `Getting Started <http://gruntjs.com/getting-started>`_ guide,
as it explains how to create a `Gruntfile <http://gruntjs.com/sample-gruntfile>`_ as well as install and use Grunt plugins.

Once you're familiar with that process, you may install this plugin with this command:

.. code-block:: sh
  npm install grunt-pelican --save-dev


Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

.. code-block:: javascript
  grunt.loadNpmTasks('grunt-pelican');


==================
The "pelican" task
==================

Overview
========
In your project's Gruntfile, add a section named `pelican` to the data object passed into `grunt.initConfig()`.

.. code-block:: javascript
  grunt.initConfig({
      pelican: {
          options: {
              contentDir: '../output',
              configPath: 'settings.py',
              outputDir: '/var/www/blog'
          }
      },
  });


Options
=======

options.contentDir
------------------
Type: ``String``

Pelican's default value: ``.``

Directory with all your ReST, Markdown, whatever else files.

options.configPath
------------------
Type: ``String``

Pelican's default value: ``pelicanconf.py``

Path to file with your pelican's settings.

options.outputDir
-----------------
Type: ``String``

Pelican's default value: ``output``

Directory where pelican will put all your HTML, CSS etc.
Usually your web server should point location to this dir.
