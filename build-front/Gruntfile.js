module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    paths: ['less'],
                    compress: true,
                    sourceMap: true,
                    cleancss: true,
                    //dumpLineNumbers: 'comments'
                },
                files: {
                    '../themes/azp/css/style.css': '../themes/azp/less/main.less'
                }
            }
        },

        bake: {
            your_target: {
                options: {
                    // Task-specific options go here.
                },

                files: {
                    "../themes/azp/templates/page--type-landing.tpl.php": "_templates_src/page--type-landing.tpl.php",
                    "../themes/azp/templates/page--events.tpl.php": "_templates_src/page--events.tpl.php",
                    "../themes/azp/templates/page--news.tpl.php": "_templates_src/page--news.tpl.php",
                    "../themes/azp/templates/page.tpl.php": "_templates_src/page.tpl.php",
                    //map
                    "../themes/azp/templates/page--node--293.tpl.php": "_templates_src/page--node--293.tpl.php",
                    "../themes/azp/templates/page--node--414.tpl.php": "_templates_src/page--node--414.tpl.php",
                    "../themes/azp/templates/page--node--558.tpl.php": "_templates_src/page--node--558.tpl.php"
                    //contacts
                    //"../themes/azp/templates/page--node--419.tpl.php": "../themes/azp/_templates_src/page--node--419.tpl.php",
                   //"../themes/azp/templates/page--node--590.tpl.php": "../themes/azp/_templates_src/page--node--590.tpl.php"
                }
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },

            less: {
                files: [
                    '../themes/azp/less/**/*.less'
                ],
                tasks: ['less', 'postcss']
            },

            bake: {
                files: [
                    '_templates_src/**/*.php'
                ],
                tasks: ['bake']
            }

        },

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({browsers: ['last 2 versions', 'ie 10']})
                ]
            },
            dist: {
                src: '../themes/azp/css/style.css'
            }
        }
    });

    // load npm modules
    grunt.loadNpmTasks('grunt-bake');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');

    // register tasks
    grunt.registerTask('default', ['bake', 'less', 'postcss', 'watch']);
    grunt.registerTask('jenkins', ['bake', 'less', 'postcss']);

    //grunt.registerTask('default', ['less', 'postcss', 'copy:main', 'watch']);
    // grunt.registerTask('jenkins', ['less', 'postcss', 'copy:main']);
};


