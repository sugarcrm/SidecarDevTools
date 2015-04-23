(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['general'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<h2>Sidecar Debugger Tool</h2>\n\n<form>\n    <input type=\"checkbox\" name=\"inject\" id=\"inject_checkbox\" /><label for=\"inject_checkbox\">Start Sidecar Debug Mode (changing this will cause a page reload)</label><br>\n</form>\n\n<h2>Features</h2>\n<ul>\n    <li>$view console variable after inspecting a DOM Element (points to the closest View instance)</li>\n    <li>In <strong>Elements panel</strong>, you'll find a Sugar Components sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.</li>\n    <li>In this Panel, you will find:\n        <ul>\n            <li><strong><i>Events:</i></strong> You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.</li>\n            <li><strong><i>Instanciated Objects :</i></strong> The list of instanciated Sugar Beans and Bean collections.</li>\n            <li><strong><i>View-DOM Binding:</i></strong> The of components present on the page with their corresponding DOM element.</li>\n            <li><strong><i>Sync:</i></strong></li>\n            <li><strong><i>Structure:</i></strong> A hierarchical tree representing the Sugar components of the current page.</li>\n        </ul>\n    </li>\n</ul>\n";});
})();