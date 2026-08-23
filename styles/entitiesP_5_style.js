var size = 0;
var placement = 'point';
function categories_entitiesP_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'SUPW_O':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(152,125,183,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0070_12_2025_POMIAR_WPIEC_NA_W12___GRANICZNA':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(231,113,72,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'SUPE_O':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(183,72,75,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'SUL':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,158,23,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'SUK':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(232,113,141,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'SUTP_O':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(141,90,153,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'D19_UZBROJENIE_ENK':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(243,166,178,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0 Opis rur oslonowych':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(114,155,111,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0240_08_2025_POMIAR_TT_STUDNIE_1_1__1_7':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(213,180,60,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'D19_UZBROJENIE_SRK':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(164,113,88,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'SUK_O':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(133,182,111,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0082_02_2025_OPISY':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(125,139,143,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0415_04_2026_opisy':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(145,82,45,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(190,178,151,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'SUW_O':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'SUS_O':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(229,182,54,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0714_07_2026_POMIAR_TRASOWANYCH_KABLI_LIGOTA':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(225,89,137,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0225_07_2026_POMIAR_WODY_PERON_3_OSOBOWA':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(190,207,80,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0961_07_2025_POMIAR_PRZEPUSTU_EN___PRZODOWNIKOW':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(152,125,183,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0379_07_2025_pomiar_przepustu__LPN_POD_NASYPEM_WK_20':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(231,113,72,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Etykiety__opisy':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(183,72,75,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'SUPG_O':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,158,23,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Opisy_etykiety':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(232,113,141,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'opis_etykiety':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(141,90,153,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'SUT_O':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(243,166,178,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'SUC_O':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(114,155,111,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'SUE_O':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(213,180,60,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'SUG_O':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(164,113,88,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '00__OBIEKTY NIE OBJETE OPERATEM':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(133,182,111,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0461_07_2026_POMIAR_TT___CSDIP___PERON2_UNIWEREK':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(125,139,143,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'SUN_O':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(145,82,45,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0170_12_2025_POMIAR_ES_EN_KONTYNUACJA_DO_0365_11':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(190,178,151,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'dren kamienny':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0907_06_2025_POMIAR_OSWIETLENIA_BAGIENNA':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(229,182,54,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'SUL_O':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(225,89,137,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0185_11_2024_WLACZENIA_DO_ISTNIEJACEJSIECI_W_4':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(190,207,80,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'D19_UZBROJENIE_KOO':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(152,125,183,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0313_03_2026_POMIAR_TT_PRZY_ICC':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(231,113,72,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0124_03_2025_POMIAR_W19___CIAG_DALSZY':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(183,72,75,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'D19_Uzbrojenie':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,158,23,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0252_04_2026_PRZEBUDOWA_WEZLA_ZASUW_PRZY_W26a':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(232,113,141,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0499_09_2025_POMIAR_KOLIZJI_ENN_20':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(141,90,153,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '0773_07_2025_POMIAR_PRZEPUSTOW_SRK':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(243,166,178,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'SUP_O':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(114,155,111,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'SUPS_O':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(213,180,60,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_entitiesP_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Layer");
    var labelFont = "10.4px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'center';
    var offsetX = 0;
    var offsetY = 0;
    var overflow = true;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("plaintext") !== null) {
        labelText = String(feature.get("plaintext"));
    }
    
    var style = categories_entitiesP_5(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};

/* === GESUT2WEB_LABEL_START === */

/*
GESUT2Web Tools:
dynamiczne etykiety DXF/GPKG dla OpenLayers.
*/

var __GESUT2WEB_BASE_style_entitiesP_5 = style_entitiesP_5;

style_entitiesP_5 = function(feature, resolution) {

    var base = __GESUT2WEB_BASE_style_entitiesP_5(feature, resolution);
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
