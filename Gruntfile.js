module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files:  [{
                    expand: true,
                    cwd: 'src/scss',
                    src: ['**/*.scss'],
                    dest: 'src/css',
                    ext: '.css'
                }]
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: "Handlebars.templates",
                    processName: function(filePath) {
                        // The filePath follows this structure: `src/templates/[templateName]`.
                        // We parse it below in order to return only the template name.
                        return filePath.slice(filePath.indexOf('/', 4)+1, filePath.indexOf('.'));
                    }
                },
                files: {
                    "src/templates/templates.js": ["src/templates/*.handlebars"]
                }
            }
        },
        watch: {
            sass: {
                files: ['src/scss/*.scss'],
                tasks: ['sass']
            },
            hbs: {
                files: ['src/templates/*.handlebars'],
                tasks: ['handlebars']
            }
        },
        crx: {
            sidecarDevTools: {
                "src": [
                    "src/",
                    "!.{git,svn}"
                ],
                "dest": "dist/crx/SidecarDevTools.1.0.alpha.crx",
                "privateKey": "~/.ssh/sidecarDevTools.pem"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-crx');

    grunt.registerTask('default', ['watch']);
};
