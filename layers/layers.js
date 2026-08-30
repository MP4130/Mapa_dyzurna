ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2177").setExtent([6568149.982693, 5564033.447323, 6580553.649360, 5570573.947323]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_orto_google_1 = new ol.layer.Tile({
            className: 'google-pale',
            'title': 'orto_google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_entitiesL_2 = new ol.format.GeoJSON();
var features_entitiesL_2 = format_entitiesL_2.readFeatures(json_entitiesL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesL_2.addFeatures(features_entitiesL_2);
var lyr_entitiesL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesL_2,
maxResolution:1.9603126306583372,
 
                style: style_entitiesL_2,
                popuplayertitle: 'entitiesL',
                interactive: false,
    title: 'Linie' });
var format_entitiesP_3 = new ol.format.GeoJSON();
var features_entitiesP_3 = format_entitiesP_3.readFeatures(json_entitiesP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesP_3.addFeatures(features_entitiesP_3);
var lyr_entitiesP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesP_3,
maxResolution:0.14002233076130982,
 
                style: style_entitiesP_3,
                popuplayertitle: 'entitiesP',
                interactive: false,
    title: 'Opisy / punkty' });
var format_entitiesL_4 = new ol.format.GeoJSON();
var features_entitiesL_4 = format_entitiesL_4.readFeatures(json_entitiesL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesL_4.addFeatures(features_entitiesL_4);
var lyr_entitiesL_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesL_4,
maxResolution:1.9603126306583372,
 
                style: style_entitiesL_4,
                popuplayertitle: 'entitiesL',
                interactive: false,
    title: 'Linie' });
var format_entitiesP_5 = new ol.format.GeoJSON();
var features_entitiesP_5 = format_entitiesP_5.readFeatures(json_entitiesP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesP_5.addFeatures(features_entitiesP_5);
var lyr_entitiesP_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesP_5,
maxResolution:0.14002233076130982,
 
                style: style_entitiesP_5,
                popuplayertitle: 'entitiesP',
                interactive: false,
    title: 'Opisy / punkty' });
var format_entitiesL_6 = new ol.format.GeoJSON();
var features_entitiesL_6 = format_entitiesL_6.readFeatures(json_entitiesL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesL_6.addFeatures(features_entitiesL_6);
var lyr_entitiesL_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesL_6,
maxResolution:1.9603126306583372,
 
                style: style_entitiesL_6,
                popuplayertitle: 'entitiesL',
                interactive: false,
    title: 'Linie' });
var format_entitiesP_7 = new ol.format.GeoJSON();
var features_entitiesP_7 = format_entitiesP_7.readFeatures(json_entitiesP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesP_7.addFeatures(features_entitiesP_7);
var lyr_entitiesP_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesP_7,
maxResolution:0.14002233076130982,
 
                style: style_entitiesP_7,
                popuplayertitle: 'entitiesP',
                interactive: false,
    title: 'Opisy / punkty' });
var format_entitiesL_8 = new ol.format.GeoJSON();
var features_entitiesL_8 = format_entitiesL_8.readFeatures(json_entitiesL_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesL_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesL_8.addFeatures(features_entitiesL_8);
var lyr_entitiesL_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesL_8,
maxResolution:1.9603126306583372,
 
                style: style_entitiesL_8,
                popuplayertitle: 'entitiesL',
                interactive: false,
    title: 'Linie' });
var format_entitiesP_9 = new ol.format.GeoJSON();
var features_entitiesP_9 = format_entitiesP_9.readFeatures(json_entitiesP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesP_9.addFeatures(features_entitiesP_9);
var lyr_entitiesP_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesP_9,
maxResolution:0.14002233076130982,
 
                style: style_entitiesP_9,
                popuplayertitle: 'entitiesP',
                interactive: false,
    title: 'Opisy / punkty' });
var format_akt20260826_10 = new ol.format.GeoJSON();
var features_akt20260826_10 = format_akt20260826_10.readFeatures(json_akt20260826_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_akt20260826_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_akt20260826_10.addFeatures(features_akt20260826_10);
var lyr_akt20260826_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_akt20260826_10, 
                style: style_akt20260826_10,
                popuplayertitle: 'akt. 2026.08.26',
                interactive: false,
                title: '<img src="styles/legend/akt20260826_10.png" /> akt. 2026.08.26'
            });
var group_MDCP_1 = new ol.layer.Group({
                                layers: [lyr_entitiesL_8,lyr_entitiesP_9,],
                                fold: 'close',
                                title: 'MDCP_1'});
var group_MDCP_2 = new ol.layer.Group({
                                layers: [lyr_entitiesL_6,lyr_entitiesP_7,],
                                fold: 'close',
                                title: 'MDCP_2'});
var group_noweobiekty = new ol.layer.Group({
                                layers: [lyr_entitiesL_4,lyr_entitiesP_5,],
                                fold: 'close',
                                title: 'nowe obiekty'});
var group_istniejceobiekty = new ol.layer.Group({
                                layers: [lyr_entitiesL_2,lyr_entitiesP_3,],
                                fold: 'close',
                                title: 'istniejące obiekty'});

lyr_OpenStreetMap_0.setVisible(false);lyr_orto_google_1.setVisible(true);lyr_entitiesL_2.setVisible(true);lyr_entitiesP_3.setVisible(true);lyr_entitiesL_4.setVisible(true);lyr_entitiesP_5.setVisible(true);lyr_entitiesL_6.setVisible(true);lyr_entitiesP_7.setVisible(true);lyr_entitiesL_8.setVisible(true);lyr_entitiesP_9.setVisible(true);lyr_akt20260826_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_orto_google_1,group_istniejceobiekty,group_noweobiekty,group_MDCP_2,group_MDCP_1,lyr_akt20260826_10];
lyr_entitiesL_2.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitiesP_3.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitiesL_4.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitiesP_5.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitiesL_6.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitiesP_7.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitiesL_8.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitiesP_9.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_akt20260826_10.set('fieldAliases', {'fid': 'fid', });
lyr_entitiesL_2.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_entitiesP_3.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_entitiesL_4.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_entitiesP_5.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_entitiesL_6.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_entitiesP_7.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_entitiesL_8.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_entitiesP_9.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_akt20260826_10.set('fieldImages', {'fid': 'TextEdit', });
lyr_entitiesL_2.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_entitiesP_3.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_entitiesL_4.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_entitiesP_5.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_entitiesL_6.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_entitiesP_7.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_entitiesL_8.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_entitiesP_9.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_akt20260826_10.set('fieldLabels', {'fid': 'no label', });
lyr_akt20260826_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});