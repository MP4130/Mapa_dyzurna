ol.proj.proj4.register(proj4);
// Widok mapy: PL-2000 strefa 6 / EPSG:2177 — zgodnie z repo 08.28.
var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            source: new ol.source.XYZ({
                attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });



        var lyr_google_0 = new ol.layer.Tile({
            className: 'google-pale',
            'title': 'google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_entitiesL_1 = new ol.format.GeoJSON();
var features_entitiesL_1 = format_entitiesL_1.readFeatures(json_entitiesL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesL_1.addFeatures(features_entitiesL_1);
var lyr_entitiesL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesL_1,
maxResolution:1.9603126306583372,
 
                style: style_entitiesL_1,
                popuplayertitle: 'entitiesL',
                interactive: true,
    title: 'Linie' });
var format_entitiesP_2 = new ol.format.GeoJSON();
var features_entitiesP_2 = format_entitiesP_2.readFeatures(json_entitiesP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesP_2.addFeatures(features_entitiesP_2);
var lyr_entitiesP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesP_2,
maxResolution:0.14002233076130982,
 
                style: style_entitiesP_2,
                popuplayertitle: 'entitiesP',
                interactive: true,
    title: 'Opisy / punkty' });
var format_entitiesL_3 = new ol.format.GeoJSON();
var features_entitiesL_3 = format_entitiesL_3.readFeatures(json_entitiesL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesL_3.addFeatures(features_entitiesL_3);
var lyr_entitiesL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesL_3,
maxResolution:1.9603126306583372,
 
                style: style_entitiesL_3,
                popuplayertitle: 'entitiesL',
                interactive: true,
    title: 'Linie' });
var format_entitiesP_4 = new ol.format.GeoJSON();
var features_entitiesP_4 = format_entitiesP_4.readFeatures(json_entitiesP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesP_4.addFeatures(features_entitiesP_4);
var lyr_entitiesP_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesP_4,
maxResolution:0.14002233076130982,
 
                style: style_entitiesP_4,
                popuplayertitle: 'entitiesP',
                interactive: true,
    title: 'Opisy / punkty' });
var format_entitiesL_5 = new ol.format.GeoJSON();
var features_entitiesL_5 = format_entitiesL_5.readFeatures(json_entitiesL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesL_5.addFeatures(features_entitiesL_5);
var lyr_entitiesL_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesL_5,
maxResolution:1.9603126306583372,
 
                style: style_entitiesL_5,
                popuplayertitle: 'entitiesL',
                interactive: true,
    title: 'Linie' });
var format_entitiesP_6 = new ol.format.GeoJSON();
var features_entitiesP_6 = format_entitiesP_6.readFeatures(json_entitiesP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesP_6.addFeatures(features_entitiesP_6);
var lyr_entitiesP_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesP_6,
maxResolution:0.14002233076130982,
 
                style: style_entitiesP_6,
                popuplayertitle: 'entitiesP',
                interactive: true,
    title: 'Opisy / punkty' });
var format_entitiesL_7 = new ol.format.GeoJSON();
var features_entitiesL_7 = format_entitiesL_7.readFeatures(json_entitiesL_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesL_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesL_7.addFeatures(features_entitiesL_7);
var lyr_entitiesL_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesL_7,
maxResolution:1.9603126306583372,
 
                style: style_entitiesL_7,
                popuplayertitle: 'entitiesL',
                interactive: true,
    title: 'Linie' });
var format_entitiesP_8 = new ol.format.GeoJSON();
var features_entitiesP_8 = format_entitiesP_8.readFeatures(json_entitiesP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesP_8.addFeatures(features_entitiesP_8);
var lyr_entitiesP_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesP_8,
maxResolution:0.14002233076130982,
 
                style: style_entitiesP_8,
                popuplayertitle: 'entitiesP',
                interactive: true,
    title: 'Opisy / punkty' });

var format_akt260904_9 = new ol.format.GeoJSON();
var features_akt260904_9 = format_akt260904_9.readFeatures(json_akt260904_9,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_akt260904_9 = new ol.source.Vector({attributions: ' '});
jsonSource_akt260904_9.addFeatures(features_akt260904_9);
var lyr_akt260904_9 = new ol.layer.Vector({
    declutter: false, source: jsonSource_akt260904_9, style: style_akt260904_9,
    popuplayertitle: 'akt. 26.09.04', interactive: false,
    title: '<img src="styles/legend/akt260904_9.png" /> akt. 26.09.04'
});

var group_pomiarynowychobiektw = new ol.layer.Group({
                                layers: [lyr_entitiesL_7,lyr_entitiesP_8,],
                                fold: 'close',
                                title: 'pomiary nowych obiektów'});
var group_pomiaryistniejcychobiektw = new ol.layer.Group({
                                layers: [lyr_entitiesL_5,lyr_entitiesP_6,],
                                fold: 'close',
                                title: 'pomiary istniejących obiektów'});
var group_Katowiceszara = new ol.layer.Group({
                                layers: [lyr_entitiesL_3,lyr_entitiesP_4,],
                                fold: 'close',
                                title: 'Katowice szara'});
var group_Katowiceszara2 = new ol.layer.Group({
                                layers: [lyr_entitiesL_1,lyr_entitiesP_2,],
                                fold: 'close',
                                title: 'Katowice szara 2'});

lyr_OpenStreetMap_0.setVisible(false);lyr_google_0.setVisible(true);lyr_entitiesL_1.setVisible(true);lyr_entitiesP_2.setVisible(true);lyr_entitiesL_3.setVisible(true);lyr_entitiesP_4.setVisible(true);lyr_entitiesL_5.setVisible(true);lyr_entitiesP_6.setVisible(true);lyr_entitiesL_7.setVisible(true);lyr_entitiesP_8.setVisible(true);lyr_akt260904_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_google_0,group_Katowiceszara2,group_Katowiceszara,group_pomiaryistniejcychobiektw,group_pomiarynowychobiektw,lyr_akt260904_9];
lyr_entitiesL_1.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitiesP_2.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitiesL_3.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitiesP_4.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitiesL_5.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitiesP_6.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitiesL_7.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitiesP_8.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitiesL_1.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_entitiesP_2.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_entitiesL_3.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_entitiesP_4.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_entitiesL_5.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_entitiesP_6.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_entitiesL_7.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_entitiesP_8.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_entitiesL_1.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_entitiesP_2.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_entitiesL_3.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_entitiesP_4.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_entitiesL_5.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_entitiesP_6.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_entitiesL_7.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_entitiesP_8.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_entitiesP_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
lyr_akt260904_9.set('fieldAliases', {'fid': 'fid', });
lyr_akt260904_9.set('fieldImages', {'fid': '', });
lyr_akt260904_9.set('fieldLabels', {'fid': 'no label', });
lyr_akt260904_9.on('precompose', function(evt) { evt.context.globalCompositeOperation = 'normal'; });
