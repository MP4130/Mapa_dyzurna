var size = 0;
var placement = 'point';

var style_entitiesL_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("var value = '';");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
        function rules_entitiesL_7(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_entitiesL_7rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,255,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,255,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,255,255,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule4_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule5_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule6_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule7_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule8_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule9_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule10_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(127,63,0,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule11_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(127,63,0,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule12_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(127,63,0,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule13_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(127,63,0,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule14_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(127,63,0,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule15_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(127,63,0,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule16_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(152,152,152,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule17_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(165,165,0,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule18_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(191,0,255,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule19_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(191,191,191,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule20_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(220,220,220,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule21_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(220,220,220,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule22_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(220,220,220,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule23_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(220,220,220,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule24_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(220,220,220,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule25_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(220,220,220,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule26_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,0,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule27_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,0,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule28_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,0,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_entitiesL_7rule29_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,127,0,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_entitiesL_7(feature, value);
        ;

    return style;
};

/* === GESUT2WEB_LABEL_START === */

/*
GESUT2Web Tools:
dynamiczne etykiety DXF/GPKG dla OpenLayers.
*/

var __GESUT2WEB_BASE_style_entitiesL_7 = style_entitiesL_7;

style_entitiesL_7 = function(feature, resolution) {

    var base = __GESUT2WEB_BASE_style_entitiesL_7(feature, resolution);
    var result = [];

    if (base) {
        var arr = Array.isArray(base) ? base : [base];

        for (var i = 0; i < arr.length; i++) {
            if (!arr[i]) continue;

            var s = (
                typeof arr[i].clone === 'function'
            ) ? arr[i].clone() : arr[i];

            if (
                s &&
                typeof s.getText === 'function' &&
                typeof s.setText === 'function' &&
                s.getText()
            ) {
                s.setText(null);
            }

            result.push(s);
        }
    }

    var txt = feature.get('plaintext');

    if (txt === null || txt === undefined || txt === '') {
        txt = feature.get('Text');
    }

    if (txt === null || txt === undefined || txt === '') {
        return result;
    }

    var angle = parseFloat(feature.get('angle'));
    var size = parseFloat(feature.get('size'));
    var dx = parseFloat(feature.get('dx'));
    var dy = parseFloat(feature.get('dy'));
    var anchor = parseInt(feature.get('anchor'));

    if (!isFinite(angle)) angle = 0.0;
    if (!isFinite(size) || size <= 0) size = 0.75;
    if (!isFinite(dx)) dx = 0.0;
    if (!isFinite(dy)) dy = 0.0;
    if (!isFinite(anchor)) anchor = 4;

    var color = feature.get('color') || '#000000';
    var family = feature.get('font') || 'Arial';

    var isBold = feature.get('bold');
    var isItalic = feature.get('italic');

    var weight = (
        isBold === 1 ||
        isBold === true ||
        isBold === '1'
    ) ? 'bold ' : '';

    var italic = (
        isItalic === 1 ||
        isItalic === true ||
        isItalic === '1'
    ) ? 'italic ' : '';

    /*
    Rozmiar ekranowy niezależny od zoomu.
    Oryginalne size=0.75 -> 12 px.
    Inne rozmiary zachowują wzajemne proporcje.
    */
    var sizePx =
        12.0 * (size / 0.75) * 1.00000000;

    sizePx = Math.max(
        1.0,
        Math.min(sizePx, 160.0)
    );

    var angleRad =
        angle * Math.PI / 180.0;

    var rotation =
        (360.0 - angle) * Math.PI / 180.0;

    var offsetXMap =
        dx +
        1.3 * size / 4.0 * Math.sin(angleRad);

    var offsetYMap =
        -dy +
        1.3 * size / 4.0 * Math.cos(angleRad);

    var offsetX =
        (offsetXMap / resolution)
        * 1.00000000;

    var offsetY =
        (offsetYMap / resolution)
        * 1.00000000;

    var aligns = {
        0: 'right',
        1: 'center',
        2: 'left',
        3: 'right',
        4: 'center',
        5: 'left',
        6: 'right',
        7: 'center',
        8: 'left'
    };

    var baselines = {
        0: 'bottom',
        1: 'bottom',
        2: 'bottom',
        3: 'middle',
        4: 'middle',
        5: 'middle',
        6: 'top',
        7: 'top',
        8: 'top'
    };

    var textAlign =
        aligns.hasOwnProperty(anchor)
        ? aligns[anchor]
        : 'center';

    var textBaseline =
        baselines.hasOwnProperty(anchor)
        ? baselines[anchor]
        : 'middle';

    var label = new ol.style.Text({
        text: String(txt),

        font:
            italic +
            weight +
            sizePx.toFixed(2) +
            'px "' +
            family +
            '"',

        fill: new ol.style.Fill({
            color: color
        }),

        placement: 'point',
        textAlign: textAlign,
        textBaseline: textBaseline,
        offsetX: offsetX,
        offsetY: offsetY,
        rotation: rotation,
        rotateWithView: false,
        keepUpright: false,
        overflow: true
    });

    result.push(
        new ol.style.Style({
            text: label,
            zIndex: 100000
        })
    );

    return result;
};

/* === GESUT2WEB_LABEL_END === */


/* === MIGRACJA_20260904_PEN_FALLBACK_START === */
/*
Fallback PEN ograniczony wyłącznie do obiektów faktycznie migrowanych
z USUNIETE.geojson do entitiesL_7.
*/
var __MIGRATION_20260904_L7_HANDLES = Object.create(null);
["4B4725", "561A92", "561A96", "56214C", "56A2CB", "59B4EB", "59B4EF", "59B4F4", "59EADA", "59EAE0", "59EAE6", "59EAFE", "59EB0A", "5AC4F9", "5CBBB5", "5CBBB6", "5CBBB7", "5CBBBB", "5CBBBD", "5E82CB", "5E82D6", "5F2897", "5F650A", "5F650C", "5F6513", "5F651F", "5F657A", "5F657C", "5F657E", "5F6580", "5F6581", "5F6582", "5F6583", "5F6585", "5F6586", "5F6587", "5F6589", "5F658A", "5F658B", "5F658D", "5F658E", "5F658F", "5F6591", "5F6592", "5F6595", "5F6596", "5F6597", "5F8493", "5F85CB", "5F8665", "5FB551", "5FB554", "5FDBDC", "5FDBF6"].forEach(function(h) {
    __MIGRATION_20260904_L7_HANDLES[h] = true;
});

var __MIGRATION_BASE_style_entitiesL_7 = style_entitiesL_7;

style_entitiesL_7 = function(feature, resolution) {
    var base = __MIGRATION_BASE_style_entitiesL_7(feature, resolution);

    // Jeśli oryginalny renderer repo 09.04 zna obiekt, zostawiamy go bez zmian.
    if (base && (!Array.isArray(base) || base.length > 0)) return base;

    // Fallback tylko dla 54 obiektów z migracji.
    var handle = String(feature.get('EntityHandle') || '').toUpperCase();
    if (!__MIGRATION_20260904_L7_HANDLES[handle]) return base || [];

    var pen = feature.get('ogr_style') || '';
    var cm = /c:(#[0-9A-Fa-f]{6})/.exec(pen);
    if (!cm) return base || [];

    var hex = cm[1];
    var r = parseInt(hex.substr(1,2),16);
    var g = parseInt(hex.substr(3,2),16);
    var b = parseInt(hex.substr(5,2),16);

    var lineDash = null;
    var pm = /p:"([^"]+)"/.exec(pen);
    if (pm) {
        var nums = pm[1].match(/[0-9.]+/g);
        if (nums && nums.length) {
            lineDash = nums.map(function(v) { return parseFloat(v); });
        }
    }

    return [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(' + r + ',' + g + ',' + b + ',0.5)',
            lineDash: lineDash,
            lineCap: 'square',
            lineJoin: 'bevel',
            width: 0.988
        })
    })];
};
/* === MIGRACJA_20260904_PEN_FALLBACK_END === */
