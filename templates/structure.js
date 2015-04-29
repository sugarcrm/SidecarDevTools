(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['structure'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";});
})();