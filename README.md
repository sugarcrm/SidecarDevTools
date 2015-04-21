Sidecar Debugger Tool
========================
This is an Google Chrome devtools extension that will help you to debug Sugar 7.

Installing
----------

1. Clone this repo
2. Go to *Tools -> Extensions* in Google Chrome
3. Check *Developer mode* and click *Load unpacked extension*
4. Choose the cloned repo directory

Features
----------

* $view console variable after inspecting a DOM Element (it points to the closest View instance object).
* In *Elements* panel, you'll find a **Sugar Components** sidebar which give you access to the View object corresponding to the selected DOM element as well as its parent Layouts.
* In **SugarDebug Panel**, you will find:
  * ***Events:*** You get a real-time list of events that are triggered, showing for each event its name and information on the Sugar component which triggered it.
  * ***Instanciated Objects :*** The list of instanciated Sugar Beans and Bean collections.
  * ***View-DOM Binding:*** The of components present on the page with their corresponding DOM element.
  * ***Sync:*** 
  * ***Structure:*** A hierarchical tree representing the Sugar components of the current page.

Features to implement
---------------------------

* Metadata: Ability to see the metadata for a given View or Layout.
* Contexts: Ability to display contexts on the inspected page, for example by coloring the elements.

Notes
-------

This extension is based on the [backbone-devtools](https://github.com/spect88/backbone-devtools) extension.
