(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['performance'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n        <option value=\"";
  depth0 = typeof depth0 === functionType ? depth0() : depth0;
  buffer += escapeExpression(depth0) + "\">";
  depth0 = typeof depth0 === functionType ? depth0() : depth0;
  buffer += escapeExpression(depth0) + "</option>\n    ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    <tr>\n        <td>";
  foundHelper = helpers.fieldType;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.fieldType; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n        <td>";
  foundHelper = helpers.result;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.result; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n    </tr>\n    ";
  return buffer;}

  buffer += "<h3>Measure fields render duration:</h3>\n<label>Choose field type:</label>\n<select name=\"fieldType\">\n    ";
  stack1 = depth0.fields;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</select>\n\n<label>Number of simulated 'render' calls to calculate the average time:</label>\n<select name=\"iterations\">\n    <option value=\"10\">10</option>\n    <option value=\"20\">20</option>\n    <option value=\"50\">50</option>\n    <option value=\"100\">100</option>\n</select>\n\n<label>Template to use:</label>\n<select name=\"template\">\n    <option value=\"detail\">detail</option>\n    <option value=\"list\">list</option>\n    <option value=\"edit\">edit</option>\n</select>\n<div>\n    <input id=\"simulate\" type=\"button\" value=\"Simulate render\">\n</div>\n<label class=\"result-label\"><strong>Average time (ms): </strong><span id=\"render-result\"></span></label>\n<hr>\n<div>\n    <input id=\"simulateAll\" type=\"button\" value=\"Simulate render all fields\">\n    <input id=\"clearAll\" type=\"button\" value=\"clear results\">\n</div>\n<table id=\"results-table\" class=\"tablesorter\">\n    <thead>\n    <tr>\n        <th>\n            Field type\n        </th>\n        <th>\n            Average time\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n    ";
  stack1 = depth0.rows;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n</table>\n";
  return buffer;});
})();