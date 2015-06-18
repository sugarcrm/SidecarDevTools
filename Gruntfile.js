module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files:  [{
                    expand: true,
                    cwd: 'scss',
                    src: ['**/*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: "Handlebars.templates",
                    processName: function(filePath) {
                        return filePath.slice(filePath.indexOf('/')+1, filePath.indexOf('.'));
                    }
                },
                files: {
                    "templates/templates.js": ["templates/*.handlebars"]
                }
            }
        },
        watch: {
            sass: {
                files: ['scss/*.scss'],
                tasks: ['sass']
            },
            hbs: {
                files: ['templates/*.handlebars'],
                tasks: ['handlebars']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.registerTask('default', ['watch']);
};
