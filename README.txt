# README – Standalone qgis2web Export

This export is completely "self-contained".

To view the map, simply open "index.html" by double-clicking it.
No web server or additional software is required.

The map works because all the required JavaScript libraries are included
in the export. The application loads the GeoJSON layer data and their styles
directly from the local files.

## Publishing on a Website

If you upload the entire folder to a web server, the map will work 
immediately by opening the "index.html" file.

Example:

"https://www.example.com/my-map/index.html"


## GitHub file-size fix

The original layers/entitiesL_8.js exceeded GitHub's 100 MB per-file limit.
It has been split into an init file and sequential data parts. index.html was updated
to load them in order. The map data and layer logic are unchanged.
