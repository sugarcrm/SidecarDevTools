(function() {
    var BDT = window.BDT;

    BDT.views.Structure = Backbone.View.extend({

        className: 'structure',
        template: BDT.templates['structure'],
        events: {
            'click #expandAll': 'expandAll',
            'click #collapseAll': 'collapseAll'
        },

        initialize: function() {
            var self = this;
            chrome.devtools.inspectedWindow.eval(
                'App.controller.layout.printStructure()',
                function(result, isException) {
                    if (isException) {
                    }
                    else {
                        if (result) {
                            self.component = result;
                            self.render();
                        }
                    }
                }
            );
        },

        render: function() {
            if (this.component) {
                this.$el.empty().append(this.template());
                this.$('.accordion').append(this.printComponent(this.component));
            }

            $(document).foundation({
                accordion: {
                    multi_expand: true
                }
            });
            return this;
        },

        printComponent: function(comp) {
            var $el = $('<li class="accordion-navigation panel-accordion-navigation"></li>')
                .append('<a href="#' + comp.cid + '" class="comp-link" name="' + comp.cid + '">' +
                    '<span class="name">' + comp.name + '</span>' +
                    ' - type: ' + comp.type +
                    '</a>');

            if (comp.compType === 'layout') {
                $el.addClass('layout');
            } else {
                $el.addClass('view');
            }

            if (comp.components && comp.components.length > 0) {
                $el.append('<div id="' + comp.cid + '" class="content"></div>');
                $el.find('#'.concat(comp.cid)).append('<ul class="accordion panel-accordion" data-accordion></ul>');
                for (var i in comp.components) {
                    $el.find('#'.concat(comp.cid) + '> .accordion').append(this.printComponent(comp.components[i]));
                }
            }
            return $el;
        },

        expandAll: function() {
            this.$('.accordion li').removeClass('active').addClass('active');
            this.$('.accordion li > .content').removeClass('active').addClass('active');
            return false;
        },

        collapseAll: function() {
            $('.accordion li').removeClass('active');
            $('.accordion li > .content').removeClass('active');
            return false;
        }
    });
})();
