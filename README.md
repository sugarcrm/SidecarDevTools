Sidecar Debugger Tool
========================
Copyright 2015 SugarCRM

This is an Google Chrome devtools extension that will help you to be more productive when developing on Sugar 7.x.  Based on the [backbone devtools](https://github.com/spect88/backbone-devtools) project by Tomasz Szczęśniak-Szlagowski.

## Installing

1. Clone this repo
2. Go to *Tools -> Extensions* in Google Chrome
3. Check *Developer mode* and click *Load unpacked extension*
4. Go to the cloned repo directory and choose the 'src' folder.

## Using

1. Once in your SugarCRM instance, click on the `Sidecar Developer Tool` icon.
2. Open Chrome Developer Tools and select the new tab called `SugarDebug`.
4. Enjoy!

## Developing the Sidecar Dev Tool

#### Requirement:
You need to have installed: [node.js](https://nodejs.org/), [handlebars](http://handlebarsjs.com/) and [sass](http://sass-lang.com/)

#### Steps:
1. Once the extension is installed, navigate to the repo folder (SidecarDevTools) via terminal.
2. Run 'npm install'
3. Run 'grunt' to watch templates and scss files and automatically compile them.

### Contributing:
See [CONTRIBUTING](CONTRIBUTING.md) for how you can contribute changes back into this project.

## Features

* $view console variable after inspecting a DOM Element (it points to the closest parent Sidecar Component).
* In **SugarDebug Panel**, you will find different several tabs:
  - ***Application Stream:*** A timeline of what is happening in the app. It shows the methods that are called and the events that are triggered. For each of them, you have access to the passed arguments and the component object.
  - ***Structure:*** A hierarchical tree representing the Sugar components of the current page.
  - ***Render times:*** Allows you to measure the render duration of the different fields.
  - ***Perf reports:*** A table showing the rendered components on the current page, with the average render times.
  - ***Generate records:*** An easy way to generate records in your SugarCRM instance.

## Notes

This extension is based on the [backbone-devtools](https://github.com/spect88/backbone-devtools) extension.
