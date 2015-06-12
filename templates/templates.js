(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<label>Choose a module :</label>\n<select name=\"Module\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" name=\"currentContext\">\n<label>Generate records in current context</label>\n<br>\n    \n<label>Choose a module :</label>\n<select name=\"Module\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" name=\"currentContext\">\n<label>Generate records in current context</label>\n<br>\n\n<div class=\"left\">\n    <label>Choose a module :</label>\n    <select name=\"Module\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" name=\"currentContext\">\n<label>Generate records in current context</label>\n<br>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" name=\"currentContext\">\n<label>Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" name=\"currentContext\">\n<label>Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked=\"checked\"";
},"3":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"5":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" name=\"currentContext\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label>Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"5":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" name=\"currentContext\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label>Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"5":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" name=\"currentContext\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label>Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" name=\"currentContext\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label>Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return " disabled=\"disabled\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.currentModule || (depth0 != null ? depth0.currentModule : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"currentModule","hash":{},"data":data}) : helper)))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" name=\"currentContext\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label>Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" name=\"currentContext\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label>Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" name=\"currentContext\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label>Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" name=\"currentContext\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label>Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['breakpoints'] = template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"3":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"5":function(depth0,helpers,partials,data) {
    return "        <li><input type=\"checkbox\"><label>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</label></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Add breakpoints:</h3>\n\n<div class=\"left-block\">\n    <label>Select a component:</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n\n<h5>Break on:</h5>\n<ul name=\"methods\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.methods : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true,"useDepths":true});
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" id=\"currentContext\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label for=\"currentContext\">Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n  <li><a href=\"#breakpoints\">Easy breakpoints</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['breakpoints'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h3>Add breakpoints:</h3>\n\n";
},"useData":true});
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" id=\"currentContext\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label for=\"currentContext\">Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n  <li><a href=\"#breakpoints\">Easy breakpoints</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['breakpoints'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"5":function(depth0,helpers,partials,data) {
    return "        <li><input type=\"checkbox\"><label>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</label></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Add breakpoints:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<h5>Break on:</h5>\n<ul name=\"methods\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.methods : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" id=\"currentContext\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label for=\"currentContext\">Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n  <li><a href=\"#breakpoints\">Easy breakpoints</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['breakpoints'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n";
},"useData":true});
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" id=\"currentContext\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label for=\"currentContext\">Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n  <li><a href=\"#breakpoints\">Easy breakpoints</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['breakpoints'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n";
},"useData":true});
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" id=\"currentContext\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label for=\"currentContext\">Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"2":function(depth0,helpers,partials,data) {
    return " selected=\"selected\"";
},"4":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n  <li><a href=\"#breakpoints\">Easy breakpoints</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['breakpoints'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n";
},"useData":true});
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" id=\"currentContext\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label for=\"currentContext\">Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"2":function(depth0,helpers,partials,data) {
    return " selected=\"selected\"";
},"4":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n  <li><a href=\"#breakpoints\">Easy breakpoints</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['breakpoints'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n";
},"useData":true});
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" id=\"currentContext\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label for=\"currentContext\">Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "            <option value=\""
    + alias1(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias1(this.lambda(depth0, depth0))
    + "</option>\n";
},"2":function(depth0,helpers,partials,data) {
    return " selected=\"selected\"";
},"4":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n  <li><a href=\"#breakpoints\">Easy breakpoints</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['breakpoints'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n";
},"useData":true});
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" id=\"currentContext\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label for=\"currentContext\">Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"2":function(depth0,helpers,partials,data) {
    return " selected=\"selected\"";
},"4":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n  <li><a href=\"#breakpoints\">Easy breakpoints</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['breakpoints'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n";
},"useData":true});
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" id=\"currentContext\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label for=\"currentContext\">Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"2":function(depth0,helpers,partials,data) {
    return " selected=\"selected\"";
},"4":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"8":function(depth0,helpers,partials,data) {
    return "    <label>Template to use:</label>\n    <select name=\"template\">\n        <option value=\"detail\">detail</option>\n        <option value=\"list\">list</option>\n        <option value=\"edit\">edit</option>\n    </select>\n";
},"10":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the method:</label>\n    <select name=\"Method\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.methods : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.renderSelected : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n  <li><a href=\"#breakpoints\">Easy breakpoints</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['breakpoints'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n";
},"useData":true});
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" id=\"currentContext\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label for=\"currentContext\">Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"2":function(depth0,helpers,partials,data) {
    return " selected=\"selected\"";
},"4":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"8":function(depth0,helpers,partials,data) {
    return "    <label>Template to use:</label>\n    <select name=\"template\">\n        <option value=\"detail\">detail</option>\n        <option value=\"list\">list</option>\n        <option value=\"edit\">edit</option>\n    </select>\n";
},"10":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the method:</label>\n    <select name=\"Method\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.methods : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.renderSelected : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Performance tools</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n  <li><a href=\"#breakpoints\">Easy breakpoints</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['breakpoints'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"2":function(depth0,helpers,partials,data) {
    return " selected=\"selected\"";
},"4":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"8":function(depth0,helpers,partials,data) {
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

  return "<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the method:</label>\n    <select name=\"Method\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.methods : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<div>\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>";
},"useData":true});
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" id=\"currentContext\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label for=\"currentContext\">Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"2":function(depth0,helpers,partials,data) {
    return " selected=\"selected\"";
},"4":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"8":function(depth0,helpers,partials,data) {
    return "    <label>Template to use:</label>\n    <select name=\"template\">\n        <option value=\"detail\">detail</option>\n        <option value=\"list\">list</option>\n        <option value=\"edit\">edit</option>\n    </select>\n";
},"10":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the method:</label>\n    <select name=\"Method\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.methods : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.renderSelected : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Render times</a></li>\n  <li><a href=\"#breakpoints\">Metrics</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['breakpoints'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"2":function(depth0,helpers,partials,data) {
    return " selected=\"selected\"";
},"4":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"8":function(depth0,helpers,partials,data) {
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

  return "<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the method:</label>\n    <select name=\"Method\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.methods : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n<div style=\"float: left; margin-right: 20px;\">\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<div>\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<hr>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>";
},"useData":true});
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" id=\"currentContext\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label for=\"currentContext\">Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"2":function(depth0,helpers,partials,data) {
    return " selected=\"selected\"";
},"4":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"8":function(depth0,helpers,partials,data) {
    return "    <label>Template to use:</label>\n    <select name=\"template\">\n        <option value=\"detail\">detail</option>\n        <option value=\"list\">list</option>\n        <option value=\"edit\">edit</option>\n    </select>\n";
},"10":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the method:</label>\n    <select name=\"Method\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.methods : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.renderSelected : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Render times</a></li>\n  <li><a href=\"#breakpoints\">Metrics</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['breakpoints'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"2":function(depth0,helpers,partials,data) {
    return " selected=\"selected\"";
},"4":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"8":function(depth0,helpers,partials,data) {
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

  return "<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the method:</label>\n    <select name=\"Method\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.methods : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n<div style=\"float: left; margin-right: 20px;\">\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<div>\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<hr>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>";
},"useData":true});
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" id=\"currentContext\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label for=\"currentContext\">Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Render times</a></li>\n  <li><a href=\"#breakpoints\">Metrics</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" id=\"currentContext\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label for=\"currentContext\">Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.\nIf it's an object instead of an array, it will be use for all the records.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.\nIf it's an object instead of an array, it will be use for all the records.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['metrics'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"2":function(depth0,helpers,partials,data) {
    return " selected=\"selected\"";
},"4":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"8":function(depth0,helpers,partials,data) {
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

  return "<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the method:</label>\n    <select name=\"Method\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.methods : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n<div style=\"float: left; margin-right: 20px;\">\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<div>\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<hr>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Render times</a></li>\n  <li><a href=\"#metrics\">Metrics</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" id=\"currentContext\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label for=\"currentContext\">Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.\nIf it's an object instead of an array, it will be use for all the records.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.\nIf it's an object instead of an array, it will be use for all the records.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['metrics'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"2":function(depth0,helpers,partials,data) {
    return " selected=\"selected\"";
},"4":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"8":function(depth0,helpers,partials,data) {
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

  return "<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the method:</label>\n    <select name=\"Method\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.methods : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n\n<div style=\"float: left; margin-right: 20px;\">\n    <input id=\"trackMethod\" type=\"button\" value=\"Track method\">\n</div>\n<div>\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<hr>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Render times</a></li>\n  <li><a href=\"#metrics\">Metrics</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['general'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";
},"useData":true});
templates['generate'] = template({"1":function(depth0,helpers,partials,data) {
    return " checked";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return " disabled=\"disabled\" value=\""
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].currentModule : depths[1]), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h3>Generate records:</h3>\n\n<input type=\"checkbox\" id=\"currentContext\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n<label for=\"currentContext\">Generate records in current context</label>\n<hr>\n\n<div class=\"left-block\">\n    <label>Choose a module :</label>\n    <select name=\"Module\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.modules : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Choose a subpanel :</label>\n    <select name=\"Subpanel\""
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.useCurrentContext : depth0),{"name":"unless","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <option value=\"\">No subpanel</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.subpanels : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.\nIf it's an object instead of an array, it will be use for all the records.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.\nIf it's an object instead of an array, it will be use for all the records.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
},"useData":true,"useDepths":true});
templates['list'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <th class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table class=\"headers\">\n  <thead>\n";
  stack1 = ((helper = (helper = helpers.headers || (depth0 != null ? depth0.headers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"headers","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.headers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <th></th>\n  </thead>\n</table>\n\n<div class=\"scrollable-data\">\n  <table class=\"data\">\n    <tbody></tbody>\n  </table>\n</div>\n";
},"useData":true});
templates['list_item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<tr>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.t : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c1 : stack1), depth0))
    + "</td>\n  <td class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1['class'] : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.c2 : stack1), depth0))
    + "</td>\n  <td></td>\n</tr>\n";
},"useData":true});
templates['metrics'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"2":function(depth0,helpers,partials,data) {
    return " selected=\"selected\"";
},"4":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"8":function(depth0,helpers,partials,data) {
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

  return "<h3>Measure method time:</h3>\n<div class=\"left-block\">\n    <label>Select a component type:</label>\n    <select name=\"Type\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the component:</label>\n    <select name=\"Component\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n<div class=\"right-block\">\n    <label>Select the method:</label>\n    <select name=\"Method\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.methods : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n</div>\n\n<div style=\"float: left; margin-right: 20px;\">\n    <input id=\"trackMethod\" type=\"button\" value=\"Track method\">\n</div>\n<div>\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<hr>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>";
},"useData":true});
templates['performance'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.totalTime || (depth0 != null ? depth0.totalTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.averageTime || (depth0 != null ? depth0.averageTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"averageTime","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\" selected=\"selected\">50</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Total time (ms)\n        </th>\n        <th>\n            Average time (ms)\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  <li class=\"selected\"><a href=\"#general\">General</a></li>\n  <li><a href=\"#events\">Events</a></li>\n  <li><a href=\"#syncs\">Syncs</a></li>\n  <li><a href=\"#views\">View-DOM Binding</a></li>\n  <li><a href=\"#instances\">Instantiated Objects</a></li>\n  <li><a href=\"#structure\">Structure</a></li>\n  <li><a href=\"#performance\">Render times</a></li>\n  <li><a href=\"#metrics\">Metrics</a></li>\n  <li><a href=\"#generate\">Generate records</a></li>\n</ul>\n";
},"useData":true});
templates['structure'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tabs-content\">\n    <div class=\"content active\" id=\"layout\">\n        <div class=\"button-bar panel-layout-button-bar\">\n            <ul class=\"button-group round\">\n                <li><a id=\"expandAll\" class=\"button tiny\">Expand all</a></li>\n                <li><a id=\"collapseAll\" class=\"button tiny\">Collapse all</a></li>\n            </ul>\n        <a id=\"toggleAllCtx\" href=\"#\" class=\"button tiny round\">Display all contexts</a>\n        </div>\n        <ul class=\"accordion panel-accordion\" data-accordion>\n        </ul>\n    </div>\n</div>\n";
},"useData":true});
templates['toolbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"clear\" title=\"Clear\"></button>\n";
},"useData":true});
})();
