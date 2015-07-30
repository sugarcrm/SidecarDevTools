$(function() {

    var BDT = window.BDT;

    var panel = new BDT.views.Panel({ el: $('body') });

    /**
     * Executes a given block if a given values are equal.
     * @method eq
     * @param {String} val1 first value to compare
     * @param {String} val2 second value to compare.
     * @return {String} Result of the `block` execution if the given values are equal or the result of the inverse block.
     */
    window.Handlebars.registerHelper('eq', function(val1, val2, options) {
        return val1 == val2 ? options.fn(this) : options.inverse(this);
    });
});
