(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Annotation = (function () {
    function Annotation() {
        _classCallCheck(this, Annotation);

        console.log(789);
    }

    Annotation.prototype.getNameX = function getNameX() {
        console.log(456);
    };

    return Annotation;
})();

exports.Annotation = Annotation;

},{}],2:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Taglet = function Taglet(name) {
    _classCallCheck(this, Taglet);

    this.name = name;
};

exports.Taglet = Taglet;

},{}]},{},[1,2]);
