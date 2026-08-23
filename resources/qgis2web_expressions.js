// Aggregates

// Color

// Conditionals

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.LN10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return Math.round(values[0]);
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return Math.min(Math.max(values[0],values[1]),values[2]);
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return Math.floor(values[0]);
};

function fnc_ceil(values, context) {
    return Math.ceil(values[0]);
};

function fnc_pi(values, context) {
    return Math.PI;
};

function fnc_to_int(values, context) {
    var intVal = parseInt(values[0],10);
    if ( isNaN(intVal) ) { return false };
    return intVal;
};

function fnc_to_real(values, context) {
    var realVal = parseFloat(values[0]);
    if ( isNaN(realVal) ) { return false };
    return realVal;
};

function fnc_to_string(values, context) {
    return String(values[0]);
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_coalesce(values, context) {
    return false;
};

function fnc_if(values, context) {
    return values[0] ? values[1] : values[2];
}

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return new Date().toISOString();
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return values[0].toUpperCase();
};

function fnc_title(values, context) {
    if ( typeof values[0] != "string" ) { return false; }
    return values[0].toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
};

function fnc_trim(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return String(values[0]).trim();
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    if ( isNaN(values[0]) || !values[0]) { return null; } return String.fromCodePoint(values[0]);
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    if ( !values[0] ) { return null; } return String(values[0]).replace(RegExp(values[1]),values[2]);
};

function fnc_regexp_substr(values, context) {
    if ( !values[0] ) { return null; }
    return String(values[0]).match(RegExp(values[1]))[0];
};

function fnc_substr(values, context) {
    var length = values[2]
    if ( !values[0] || isNaN(values[1])) { return false; }
    return String(values[0]).substr(values[1], length);
};

function fnc_concat(values, context) {
    return values.join(''); 
};

function fnc_strpos(values, context) {
   if (!values[0] || !values[1]) {return null}
   return String(values[0]).indexOf(String(values[1]))+1;
};

function fnc_left(values, context) {
    return String(values[0]).substr(0, values[1]);
};

function fnc_right(values, context) {
     return String(values[0]).substr(0, values[1]);
};

function fnc_rpad(values, context) {
    return String(values[0]).padEnd(values[1], values[2]);
};

function fnc_lpad(values, context) {
    return String(values[0]).padStart(values[1], values[2]);
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_entitiesL_2rule0_eval_expression(context) {
    // ogr_style = 'PEN(c:#000000,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#000000,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#000000,w:0.13g)');
    }
}


function exp_entitiesL_2rule1_eval_expression(context) {
    // ogr_style = 'PEN(c:#000000,w:0.4g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#000000,w:0.4g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#000000,w:0.4g)');
    }
}


function exp_entitiesL_2rule2_eval_expression(context) {
    // ogr_style = 'PEN(c:#0000ff,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#0000ff,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#0000ff,w:0.13g)');
    }
}


function exp_entitiesL_2rule3_eval_expression(context) {
    // ogr_style = 'PEN(c:#260000)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#260000)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#260000)');
    }
}


function exp_entitiesL_2rule4_eval_expression(context) {
    // ogr_style = 'PEN(c:#260000,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#260000,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#260000,w:0.13g)');
    }
}


function exp_entitiesL_2rule5_eval_expression(context) {
    // ogr_style = 'PEN(c:#260000,w:0.3g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#260000,w:0.3g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#260000,w:0.3g)');
    }
}


function exp_entitiesL_2rule6_eval_expression(context) {
    // ogr_style = 'PEN(c:#260000,w:0.4g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#260000,w:0.4g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#260000,w:0.4g)');
    }
}


function exp_entitiesL_2rule7_eval_expression(context) {
    // ogr_style = 'PEN(c:#4c3900)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#4c3900)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#4c3900)');
    }
}


function exp_entitiesL_2rule8_eval_expression(context) {
    // ogr_style = 'PEN(c:#4c3900,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#4c3900,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#4c3900,w:0.13g)');
    }
}


function exp_entitiesL_2rule9_eval_expression(context) {
    // ogr_style = 'PEN(c:#a5a500,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#a5a500,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#a5a500,w:0.13g)');
    }
}


function exp_entitiesL_2rule10_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff0000,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.13g)');
    }
}


function exp_entitiesL_2rule11_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff7f00,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff7f00,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff7f00,w:0.13g)');
    }
}


function exp_entitiesL_4rule0_eval_expression(context) {
    // ogr_style = 'PEN(c:#000000)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#000000)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#000000)');
    }
}


function exp_entitiesL_4rule1_eval_expression(context) {
    // ogr_style = 'PEN(c:#000000,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#000000,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#000000,w:0.13g)');
    }
}


function exp_entitiesL_4rule2_eval_expression(context) {
    // ogr_style = 'PEN(c:#000000,w:0.3g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#000000,w:0.3g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#000000,w:0.3g)');
    }
}


function exp_entitiesL_4rule3_eval_expression(context) {
    // ogr_style = 'PEN(c:#0000ff,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#0000ff,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#0000ff,w:0.13g)');
    }
}


function exp_entitiesL_4rule4_eval_expression(context) {
    // ogr_style = 'PEN(c:#0000ff,w:0.3g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#0000ff,w:0.3g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#0000ff,w:0.3g)');
    }
}


function exp_entitiesL_4rule5_eval_expression(context) {
    // ogr_style = 'PEN(c:#004c00,w:0.3g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#004c00,w:0.3g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#004c00,w:0.3g)');
    }
}


function exp_entitiesL_4rule6_eval_expression(context) {
    // ogr_style = 'PEN(c:#00ff00)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#00ff00)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#00ff00)');
    }
}


function exp_entitiesL_4rule7_eval_expression(context) {
    // ogr_style = 'PEN(c:#00ffff,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#00ffff,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#00ffff,w:0.13g)');
    }
}


function exp_entitiesL_4rule8_eval_expression(context) {
    // ogr_style = 'PEN(c:#260000)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#260000)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#260000)');
    }
}


function exp_entitiesL_4rule9_eval_expression(context) {
    // ogr_style = 'PEN(c:#260000,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#260000,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#260000,w:0.13g)');
    }
}


function exp_entitiesL_4rule10_eval_expression(context) {
    // ogr_style = 'PEN(c:#260000,w:0.13g,p:"3g 1g")'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#260000,w:0.13g,p:"3g 1g")');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#260000,w:0.13g,p:"3g 1g")');
    }
}


function exp_entitiesL_4rule11_eval_expression(context) {
    // ogr_style = 'PEN(c:#260000,w:0.3g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#260000,w:0.3g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#260000,w:0.3g)');
    }
}


function exp_entitiesL_4rule12_eval_expression(context) {
    // ogr_style = 'PEN(c:#4c3900)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#4c3900)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#4c3900)');
    }
}


function exp_entitiesL_4rule13_eval_expression(context) {
    // ogr_style = 'PEN(c:#4c3900,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#4c3900,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#4c3900,w:0.13g)');
    }
}


function exp_entitiesL_4rule14_eval_expression(context) {
    // ogr_style = 'PEN(c:#4c3900,w:0.3g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#4c3900,w:0.3g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#4c3900,w:0.3g)');
    }
}


function exp_entitiesL_4rule15_eval_expression(context) {
    // ogr_style = 'PEN(c:#7f3f00,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#7f3f00,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#7f3f00,w:0.13g)');
    }
}


function exp_entitiesL_4rule16_eval_expression(context) {
    // ogr_style = 'PEN(c:#989898,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#989898,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#989898,w:0.13g)');
    }
}


function exp_entitiesL_4rule17_eval_expression(context) {
    // ogr_style = 'PEN(c:#a500a5,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#a500a5,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#a500a5,w:0.13g)');
    }
}


function exp_entitiesL_4rule18_eval_expression(context) {
    // ogr_style = 'PEN(c:#a500a5,w:0.3g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#a500a5,w:0.3g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#a500a5,w:0.3g)');
    }
}


function exp_entitiesL_4rule19_eval_expression(context) {
    // ogr_style = 'PEN(c:#a5a500,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#a5a500,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#a5a500,w:0.13g)');
    }
}


function exp_entitiesL_4rule20_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff0000)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000)');
    }
}


function exp_entitiesL_4rule21_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff0000,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.13g)');
    }
}


function exp_entitiesL_4rule22_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff0000,w:0.13g,p:"3g 1g")'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.13g,p:"3g 1g")');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.13g,p:"3g 1g")');
    }
}


function exp_entitiesL_4rule23_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff7f00,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff7f00,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff7f00,w:0.13g)');
    }
}


function exp_entitiesL_4rule24_eval_expression(context) {
    // ogr_style = 'PEN(c:#ffff00)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ffff00)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ffff00)');
    }
}


function exp_entitiesL_4rule25_eval_expression(context) {
    // ogr_style = 'PEN(c:#ffff00,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ffff00,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ffff00,w:0.13g)');
    }
}


function exp_entitiesL_6rule0_eval_expression(context) {
    // ogr_style = 'PEN(c:#000000)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#000000)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#000000)');
    }
}


function exp_entitiesL_6rule1_eval_expression(context) {
    // ogr_style = 'PEN(c:#000000,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#000000,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#000000,w:0.13g)');
    }
}


function exp_entitiesL_6rule2_eval_expression(context) {
    // ogr_style = 'PEN(c:#000000,w:0.18g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#000000,w:0.18g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#000000,w:0.18g)');
    }
}


function exp_entitiesL_6rule3_eval_expression(context) {
    // ogr_style = 'PEN(c:#000000,w:0.18g,p:"0.5g 0.5g")'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#000000,w:0.18g,p:"0.5g 0.5g")');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#000000,w:0.18g,p:"0.5g 0.5g")');
    }
}


function exp_entitiesL_6rule4_eval_expression(context) {
    // ogr_style = 'PEN(c:#000000,w:0.25g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#000000,w:0.25g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#000000,w:0.25g)');
    }
}


function exp_entitiesL_6rule5_eval_expression(context) {
    // ogr_style = 'PEN(c:#0000ff,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#0000ff,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#0000ff,w:0.13g)');
    }
}


function exp_entitiesL_6rule6_eval_expression(context) {
    // ogr_style = 'PEN(c:#0000ff,w:0.18g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#0000ff,w:0.18g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#0000ff,w:0.18g)');
    }
}


function exp_entitiesL_6rule7_eval_expression(context) {
    // ogr_style = 'PEN(c:#260000,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#260000,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#260000,w:0.13g)');
    }
}


function exp_entitiesL_6rule8_eval_expression(context) {
    // ogr_style = 'PEN(c:#260000,w:0.4g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#260000,w:0.4g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#260000,w:0.4g)');
    }
}


function exp_entitiesL_6rule9_eval_expression(context) {
    // ogr_style = 'PEN(c:#4c2600,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#4c2600,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#4c2600,w:0.13g)');
    }
}


function exp_entitiesL_6rule10_eval_expression(context) {
    // ogr_style = 'PEN(c:#4c2600,w:0.18g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#4c2600,w:0.18g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#4c2600,w:0.18g)');
    }
}


function exp_entitiesL_6rule11_eval_expression(context) {
    // ogr_style = 'PEN(c:#7f4f3f,w:0.18g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#7f4f3f,w:0.18g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#7f4f3f,w:0.18g)');
    }
}


function exp_entitiesL_6rule12_eval_expression(context) {
    // ogr_style = 'PEN(c:#a500a5,w:0.18g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#a500a5,w:0.18g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#a500a5,w:0.18g)');
    }
}


function exp_entitiesL_6rule13_eval_expression(context) {
    // ogr_style = 'PEN(c:#a5a500,w:0.18g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#a5a500,w:0.18g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#a5a500,w:0.18g)');
    }
}


function exp_entitiesL_6rule14_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff0000)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000)');
    }
}


function exp_entitiesL_6rule15_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff0000,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.13g)');
    }
}


function exp_entitiesL_6rule16_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff0000,w:0.18g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.18g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.18g)');
    }
}


function exp_entitiesL_6rule17_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff0000,w:0.18g,p:"2g 0.5g")'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.18g,p:"2g 0.5g")');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.18g,p:"2g 0.5g")');
    }
}


function exp_entitiesL_6rule18_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff7f00,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff7f00,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff7f00,w:0.13g)');
    }
}


function exp_entitiesL_6rule19_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff7f00,w:0.18g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff7f00,w:0.18g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff7f00,w:0.18g)');
    }
}


function exp_entitiesL_6rule20_eval_expression(context) {
    // ogr_style = 'PEN(c:#ffbf00,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ffbf00,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ffbf00,w:0.13g)');
    }
}


function exp_entitiesL_8rule0_eval_expression(context) {
    // ogr_style = 'PEN(c:#0000ff,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#0000ff,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#0000ff,w:0.13g)');
    }
}


function exp_entitiesL_8rule1_eval_expression(context) {
    // ogr_style = 'PEN(c:#0000ff,w:0.4g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#0000ff,w:0.4g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#0000ff,w:0.4g)');
    }
}


function exp_entitiesL_8rule2_eval_expression(context) {
    // ogr_style = 'PEN(c:#4c3900,w:0.13g,p:"2g 0.5g")'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#4c3900,w:0.13g,p:"2g 0.5g")');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#4c3900,w:0.13g,p:"2g 0.5g")');
    }
}


function exp_entitiesL_8rule3_eval_expression(context) {
    // ogr_style = 'PEN(c:#767676)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#767676)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#767676)');
    }
}


function exp_entitiesL_8rule4_eval_expression(context) {
    // ogr_style = 'PEN(c:#767676,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.13g)');
    }
}


function exp_entitiesL_8rule5_eval_expression(context) {
    // ogr_style = 'PEN(c:#767676,w:0.13g,p:"0.5g 0.5g 0.5g 0.25g")'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.13g,p:"0.5g 0.5g 0.5g 0.25g")');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.13g,p:"0.5g 0.5g 0.5g 0.25g")');
    }
}


function exp_entitiesL_8rule6_eval_expression(context) {
    // ogr_style = 'PEN(c:#767676,w:0.13g,p:"0.5g 0.5g")'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.13g,p:"0.5g 0.5g")');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.13g,p:"0.5g 0.5g")');
    }
}


function exp_entitiesL_8rule7_eval_expression(context) {
    // ogr_style = 'PEN(c:#767676,w:0.13g,p:"0g 0.001g")'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.13g,p:"0g 0.001g")');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.13g,p:"0g 0.001g")');
    }
}


function exp_entitiesL_8rule8_eval_expression(context) {
    // ogr_style = 'PEN(c:#767676,w:0.13g,p:"0g 1g")'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.13g,p:"0g 1g")');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.13g,p:"0g 1g")');
    }
}


function exp_entitiesL_8rule9_eval_expression(context) {
    // ogr_style = 'PEN(c:#767676,w:0.13g,p:"1g 0.5g")'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.13g,p:"1g 0.5g")');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.13g,p:"1g 0.5g")');
    }
}


function exp_entitiesL_8rule10_eval_expression(context) {
    // ogr_style = 'PEN(c:#767676,w:0.13g,p:"1g 1g")'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.13g,p:"1g 1g")');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.13g,p:"1g 1g")');
    }
}


function exp_entitiesL_8rule11_eval_expression(context) {
    // ogr_style = 'PEN(c:#767676,w:0.13g,p:"2g 0.5g")'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.13g,p:"2g 0.5g")');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.13g,p:"2g 0.5g")');
    }
}


function exp_entitiesL_8rule12_eval_expression(context) {
    // ogr_style = 'PEN(c:#767676,w:0.13g,p:"500g 500g")'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.13g,p:"500g 500g")');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.13g,p:"500g 500g")');
    }
}


function exp_entitiesL_8rule13_eval_expression(context) {
    // ogr_style = 'PEN(c:#767676,w:0.3g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.3g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.3g)');
    }
}


function exp_entitiesL_8rule14_eval_expression(context) {
    // ogr_style = 'PEN(c:#767676,w:0.4g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.4g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#767676,w:0.4g)');
    }
}


function exp_entitiesL_8rule15_eval_expression(context) {
    // ogr_style = 'PEN(c:#7f3f00)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#7f3f00)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#7f3f00)');
    }
}


function exp_entitiesL_8rule16_eval_expression(context) {
    // ogr_style = 'PEN(c:#7f3f00,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#7f3f00,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#7f3f00,w:0.13g)');
    }
}


function exp_entitiesL_8rule17_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff0000)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000)');
    }
}


function exp_entitiesL_8rule18_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff0000,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.13g)');
    }
}


function exp_entitiesL_8rule19_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff0000,w:0.13g,p:"0.5g 0.5g")'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.13g,p:"0.5g 0.5g")');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.13g,p:"0.5g 0.5g")');
    }
}


function exp_entitiesL_8rule20_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff0000,w:0.13g,p:"1g 0.25g")'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.13g,p:"1g 0.25g")');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.13g,p:"1g 0.25g")');
    }
}


function exp_entitiesL_8rule21_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff0000,w:0.13g,p:"2g 1g")'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.13g,p:"2g 1g")');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.13g,p:"2g 1g")');
    }
}


function exp_entitiesL_8rule22_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff0000,w:0.3g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.3g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff0000,w:0.3g)');
    }
}


function exp_entitiesL_8rule23_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff7f00)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff7f00)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff7f00)');
    }
}


function exp_entitiesL_8rule24_eval_expression(context) {
    // ogr_style = 'PEN(c:#ff7f00,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ff7f00,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ff7f00,w:0.13g)');
    }
}


function exp_entitiesL_8rule25_eval_expression(context) {
    // ogr_style = 'PEN(c:#ffff00,w:0.13g)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.get('ogr_style')  == 'PEN(c:#ffff00,w:0.13g)');
    } else {
        return (feature.get('ogr_style')  == 'PEN(c:#ffff00,w:0.13g)');
    }
}