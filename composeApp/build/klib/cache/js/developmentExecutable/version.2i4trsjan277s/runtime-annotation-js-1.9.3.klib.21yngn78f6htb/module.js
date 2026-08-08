(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-annotation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-compose-runtime-runtime-annotation'.");
    }
    globalThis['androidx-compose-runtime-runtime-annotation'] = factory(typeof globalThis['androidx-compose-runtime-runtime-annotation'] === 'undefined' ? {} : globalThis['androidx-compose-runtime-runtime-annotation'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var THROW_CCE = kotlin_kotlin.$_$.vl;
  var protoOf = kotlin_kotlin.$_$.yg;
  var Annotation = kotlin_kotlin.$_$.al;
  var initMetadataForClass = kotlin_kotlin.$_$.vf;
  var VOID = kotlin_kotlin.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Immutable, 'Immutable', VOID, VOID, [Annotation]);
  initMetadataForClass(Stable, 'Stable', VOID, VOID, [Annotation]);
  initMetadataForClass(StableMarker, 'StableMarker', VOID, VOID, [Annotation]);
  initMetadataForClass(FrequentlyChangingValue, 'FrequentlyChangingValue', VOID, VOID, [Annotation]);
  initMetadataForClass(RememberInComposition, 'RememberInComposition', VOID, VOID, [Annotation]);
  //endregion
  function Immutable() {
  }
  protoOf(Immutable).equals = function (other) {
    if (!(other instanceof Immutable))
      return false;
    other instanceof Immutable || THROW_CCE();
    return true;
  };
  protoOf(Immutable).hashCode = function () {
    return 0;
  };
  protoOf(Immutable).toString = function () {
    return '@androidx.compose.runtime.Immutable(' + ')';
  };
  function Stable() {
  }
  protoOf(Stable).equals = function (other) {
    if (!(other instanceof Stable))
      return false;
    other instanceof Stable || THROW_CCE();
    return true;
  };
  protoOf(Stable).hashCode = function () {
    return 0;
  };
  protoOf(Stable).toString = function () {
    return '@androidx.compose.runtime.Stable(' + ')';
  };
  function StableMarker() {
  }
  protoOf(StableMarker).equals = function (other) {
    if (!(other instanceof StableMarker))
      return false;
    other instanceof StableMarker || THROW_CCE();
    return true;
  };
  protoOf(StableMarker).hashCode = function () {
    return 0;
  };
  protoOf(StableMarker).toString = function () {
    return '@androidx.compose.runtime.StableMarker(' + ')';
  };
  function FrequentlyChangingValue() {
  }
  protoOf(FrequentlyChangingValue).equals = function (other) {
    if (!(other instanceof FrequentlyChangingValue))
      return false;
    other instanceof FrequentlyChangingValue || THROW_CCE();
    return true;
  };
  protoOf(FrequentlyChangingValue).hashCode = function () {
    return 0;
  };
  protoOf(FrequentlyChangingValue).toString = function () {
    return '@androidx.compose.runtime.annotation.FrequentlyChangingValue(' + ')';
  };
  function RememberInComposition() {
  }
  protoOf(RememberInComposition).equals = function (other) {
    if (!(other instanceof RememberInComposition))
      return false;
    other instanceof RememberInComposition || THROW_CCE();
    return true;
  };
  protoOf(RememberInComposition).hashCode = function () {
    return 0;
  };
  protoOf(RememberInComposition).toString = function () {
    return '@androidx.compose.runtime.annotation.RememberInComposition(' + ')';
  };
  return _;
}));
