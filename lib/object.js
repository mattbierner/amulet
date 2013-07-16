/**
 * 
 */
define(function(){
"use strict";

/* 
 ******************************************************************************/
/**
 * 
 */
var copy = function(obj) {
    var out = new (Object.getPrototypeOf(obj).constructor)();
    for (var i in obj)
        out[i] = obj[i];
    return out;
};

/*
 ******************************************************************************/
/**
 * Create a new copy of 'obj' with a property 'prop' with descriptor 'descriptor'.
 */
var defineProperty = function(obj, prop, descriptor) {
    return Object.defineProperty(copy(obj), prop, descriptor);
};

/**
 * Create a new copy of 'obj' with properties 'properties'.
 */
var defineProperties = function(obj, properties) {
    return Object.keys(obj).reduce(function(p, c) {
        return defineProperty(p, c, properties[c]);
    }, obj);
};

/**
 * Create a new copy of 'obj' with property 'prop' deleted.
 */
var deleteProperty = function(obj, prop) {
    return defineProperty(obj, prop, {
        'value': undefined,
        'enumerable': false,
        'configurable': true,
        'writable': true
    });
};

/* Export
 ******************************************************************************/
return {
    'defineProperty': defineProperty,
    'defineProperties': defineProperties,
    'deleteProperty': deleteProperty
};

});