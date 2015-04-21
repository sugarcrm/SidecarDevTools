(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['structure'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<ul class=\"accordion panel-accordion\" data-accordion>\n    <li class=\"accordion-navigation panel-accordion-navigation\">\n        <a href=\"#";
  stack1 = depth0.comp;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.cid;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" class=\"comp-link\" name=\"";
  stack1 = depth0.comp;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.cid;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">\n            <span class=\"name\">";
  stack1 = depth0.comp;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span>\n            <span class=\"name\">- type: ";
  stack1 = depth0.comp;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.type;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span>\n        </a>\n    </li>\n</ul>\n\n<h3>";
  stack1 = depth0.component;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</h3>";
  return buffer;});
})();