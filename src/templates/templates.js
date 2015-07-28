this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["appstream-item"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <tr data-type=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" data-filterType=\""
    + alias3(((helper = (helper = helpers.filterType || (depth0 != null ? depth0.filterType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"filterType","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.display : depth0),{"name":"unless","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n            <td class=\"td-label\">\n        <span\n                class=\"label radius secondary label-"
    + alias3(((helper = (helper = helpers.label_class || (depth0 != null ? depth0.label_class : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label_class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</span>\n            </td>\n            <td class=\"td-time"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.is0ms : depth0),{"name":"unless","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.hasPerformance : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "\n            </td>\n            <td class=\"td-text "
    + alias3(((helper = (helper = helpers.css_class || (depth0 != null ? depth0.css_class : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"css_class","hash":{},"data":data}) : helper)))
    + "\">\n                "
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\n            </td>\n            <td class=\"td-args\">\n                "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.instance : depth0),{"name":"if","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n            </td>\n            <td class=\"td-args\">\n                "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.args : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n            </td>\n        </tr>\n";
},"2":function(depth0,helpers,partials,data) {
    return " style=\"display: none;\"";
},"4":function(depth0,helpers,partials,data) {
    return " td-has-time";
},"6":function(depth0,helpers,partials,data) {
    var helper;

  return "("
    + this.escapeExpression(((helper = (helper = helpers.performance || (depth0 != null ? depth0.performance : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"performance","hash":{},"data":data}) : helper)))
    + "ms)";
},"8":function(depth0,helpers,partials,data) {
    return "&nbsp;";
},"10":function(depth0,helpers,partials,data) {
    var helper;

  return "<a data-consolecomp=\""
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">component</a>";
},"12":function(depth0,helpers,partials,data) {
    var helper;

  return "<a data-console=\""
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">arguments</a>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<table>\n    <tr data-role=\"itemset\" data-date=\""
    + alias3(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "\" class=\"activities-date\">\n        <td colspan=\"5\">"
    + alias3(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</table>\n";
},"useData":true});

this["Handlebars"]["templates"]["appstream-table"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <label><input type=\"checkbox\" name=\"toggle-"
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.display : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "> "
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</label>\n";
},"2":function(depth0,helpers,partials,data) {
    return " checked=\"checked\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"panel filters-panel\" data-role=\"selection\">\n    <p><strong>Filters</strong></p>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.filters : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<div data-role=\"tablelist\">\n </div>";
},"useData":true});

this["Handlebars"]["templates"]["appstream"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return " style=\"display: none;\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3 class=\"text-center\">Application Stream<i class=\"fi-lightbulb help-button\" data-action=\"toggleHelp\"></i></h3>\n\n<div class=\"panel callout radius\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.displayHelp : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " data-panel=\"help\">\n    This panel logs the activities of the app in real-time. It shows the events that are triggered, as well as the initialize and render of each component.\n    For each activity, you can log in the console the component object and the passed arguments simply by clicking on 'component' or 'arguments'.\n</div>\n<!--<div class=\"text-right\">-->\n<button data-action=\"clear\" type=\"button\" class=\"secondary round right\">Clear activity</button>\n<!--</div>-->\n\n<div data-view=\"chart\"></div>\n<div data-view=\"table\"></div>\n<style>\n  [data-view=\"table\"] .label {\n    display: block;\n  }\n  [data-view=\"table\"] table tr:nth-child(odd) {\n    background-color: white;\n  }\n\n  [data-view=\"table\"] .td-label{ width: 100px; }\n  [data-view=\"table\"] .td-time { width: 50px; color: rgba(0,0,0,.3); }\n  [data-view=\"table\"] .td-has-time { color: rgba(0,0,0,1); }\n  [data-view=\"table\"] .td-text { width: auto; max-width: 450px; white-space: inherit; }\n  [data-view=\"table\"] .td-args { width: 70px; }\n\n  [data-view=\"table\"] table tr.activities-date {\n    background-color: rgba(0, 0, 0, 0.05) !important;\n    font-weight: bold;\n  }\n\n  .label-activity-layout {\n    background-color: rgb(31, 119, 180) !important;\n  }\n\n  .label-activity-view {\n    background-color: rgb(174, 199, 232) !important;\n  }\n\n  .label-activity-field {\n    background-color: rgb(255, 187, 120) !important;\n  }\n\n  .label-controller {\n    background-color: #3de2ff !important;\n  }\n\n  .activity-layout {\n    padding-left: 1em;\n  }\n\n  .activity-view {\n    padding-left: 2em;\n  }\n\n  .activity-field {\n    padding-left: 3em;\n  }\n  .filters-panel {\n      clear:both;\n  }\n</style>";
},"useData":true});

this["Handlebars"]["templates"]["general"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (it points to the closest parent Sidecar Component).</li>\n    <li>In <strong>SugarDebug Panel</strong>, you will find different several tabs:\n        <ul>\n            <li><strong><i>Application Stream: </i></strong>A timeline of what is happening in the app. It shows the methods that are called and the events that are triggered. For each of them, you have access to the passed arguments and the component object.</li>\n            <li><strong><i>Structure: </i></strong>A hierarchical tree representing the Sugar components of the current page.</li>\n            <li><strong><i>Render times: </i></strong>Allows you to measure the render duration of the different fields.</li>\n            <!--<li><strong><i>Metrics: </i></strong>Allows you to track any method of any sugar component to capture its duration and detect performance lacks.</li>-->\n            <li><strong><i>Generate records: </i></strong>An easy way to generate records in your SugarCRM instance.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});

this["Handlebars"]["templates"]["generate"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return " style=\"display: none;\"";
},"3":function(depth0,helpers,partials,data) {
    return " checked";
},"5":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"7":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"9":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3 class=\"text-center\">Generate records<i class=\"fi-lightbulb help-button\" data-action=\"toggleHelp\"></i></h3>\n\n<div class=\"panel callout radius\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.displayHelp : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " data-panel=\"help\">\n    This panel allows you to generate records in your instance easily.\n</div>\n\n<input type=\"checkbox\" id=\"currentContext\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label for=\"currentContext\">Generate in current page</label>\n<hr>\n\n<label>Choose a module :</label>\n<select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n<label>Choose a subpanel :</label>\n<p class=\"format-help\">Possible only if the current page is a record view and\nyou checked 'Generate in current page'.</p>\n<select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n    <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the\nattributes of a record to be created. It should respect JSON format with double quotes.\nIf it's an object instead of an array, it will be use for all the records.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the\nattributes of a record to be created. It should respect JSON format with double quotes.\nIf it's an object instead of an array, it will be use for all the records.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["metrics"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return " style=\"display: none;\"";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"4":function(depth0,helpers,partials,data) {
    return " selected=\"selected\"";
},"6":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"8":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"10":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <tr>\n            <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n        </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3 class=\"text-center\">Measure method time<i class=\"fi-lightbulb help-button\" data-action=\"toggleHelp\"></i></h3>\n\n<div class=\"panel callout radius\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.displayHelp : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " data-panel=\"help\">\n    This panel allows you to track any method of any sugar component to capture its duration and detect performance lacks.\n    Everytime the tracked method is called, it will be logged in the table with its duration.\n</div>\n\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the method:</label>\n    <select name=\"Method\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.methods : depth0),{"name":"each","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n\n<div style=\"float: left; margin-right: 20px;\">\n    <input id=\"trackMethod\" type=\"button\" value=\"Track method\">\n</div>\n<div>\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<hr>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>";
},"useData":true});

this["Handlebars"]["templates"]["performance"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return " style=\"display: none;\"";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\" "
    + ((stack1 = (helpers.eq || (depth0 && depth0.eq) || helpers.helperMissing).call(depth0,(depths[1] != null ? depths[1].module : depths[1]),depth0,{"name":"eq","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"4":function(depth0,helpers,partials,data) {
    return " selected=\"selected\" ";
},"6":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"8":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3 class=\"text-center\">Render times<i class=\"fi-lightbulb help-button\" data-action=\"toggleHelp\"></i></h3>\n\n<div class=\"panel callout radius\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.displayHelp : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " data-panel=\"help\">\n    This panel allows you to measure the render time of any field. Simply choose a field type, the number of simulations and the template to use and click on 'simulate render'.\n    'Simulate render all fields' will measure the render time for each available field and will log all results in the table.\n</div>\n\n<label>Choose module:</label>\n<select name=\"module\" data-action=\"selectModule\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Choose field type:</label>\n<select name=\"fieldType\" data-action=\"selectField\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\" selected=\"selected\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n\n<label>JSON Data to use (optional):</label>\n<textarea data-field=\"jsonAttributes\" rows=\"4\" cols=\"20\"></textarea>\n\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time (ms)\n        </th>\n        <th>\n            Average time (ms)\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["sidebar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">Settings</a></li>\n  <li><a href=\"#appstream\">Application Stream</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Render times</a></li>\n  <!--<li><a href=\"#metrics\">Metrics</a></li>-->\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});

this["Handlebars"]["templates"]["structure"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return " style=\"display: none;\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3 class=\"text-center\">Page structure<i class=\"fi-lightbulb help-button\" data-action=\"toggleHelp\"></i></h3>\n\n<div class=\"panel callout radius\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.displayHelp : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " data-panel=\"help\">\n    This panel shows the hierarchical tree of the Sugar components in the current page. You can highlight a component by clicking on its the checkbox to the right.\n    The highlighting colors match the context of the components.\n</div>\n\n<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <!--<a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>-->\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["toolbar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});