(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['generate'] = template(function (Handlebars,depth0,helpers,partials,data) {
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

  buffer += "<h3>Generate records:</h3>\n\n<label>Choose a module :</label>\n<select name=\"Module\">\n    ";
  stack1 = depth0.modules;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</select>\n\n<label>How many records to generate?</label>\n<input type=\"number\" name=\"numberOfRecords\" value=\"1\">\n\n<label>Add your own attributes:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"attributes\"></textarea>\n\n<label>Add options:</label>\n<p class=\"format-help\">It should be an array of objects. Each object being the attributes of a record to be created.\nIt should respect JSON format with double quotes.</p>\n<textarea name=\"options\"></textarea>\n\n<input type=\"button\" name=\"submitGenerate\" value=\"Generate!\">\n";
  return buffer;});
})();