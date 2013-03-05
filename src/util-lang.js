/**
 * util-lang.js - The minimal language enhancement
 */

function isType(type) {
  return function(obj) {
    return Object.prototype.toString.call(obj) === "[object " + type + "]"
  }
}

var isObject = isType("Object")
var isArray = Array.isArray || isType("Array")
var isFunction = isType("Function")

function hasOwn(obj, key) {
  return obj && obj.hasOwnProperty(key)
}

