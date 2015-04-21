(function() {
    var BDT = window.BDT;

    BDT.views.Structure = Backbone.View.extend({

        className: 'structure',
        template: BDT.templates['structure'],

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
            this.$el.empty().append(this.template(
                {
                    comp: {cid: '2', name: 'testName', type: 'testType'},
                    component: this.component
                }
            ));
            return this;
        }

    });
})();
