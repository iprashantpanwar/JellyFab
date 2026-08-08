(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-lifecycle-lifecycle-viewmodel.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-lifecycle-lifecycle-viewmodel.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    if (typeof globalThis['androidx-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'androidx-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'androidx-lifecycle-lifecycle-viewmodel' is loaded prior to 'androidx-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    globalThis['androidx-lifecycle-lifecycle-viewmodel-savedstate'] = factory(typeof globalThis['androidx-lifecycle-lifecycle-viewmodel-savedstate'] === 'undefined' ? {} : globalThis['androidx-lifecycle-lifecycle-viewmodel-savedstate'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-lifecycle-lifecycle-viewmodel']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_lifecycle_lifecycle_viewmodel) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.yg;
  var Key = kotlin_androidx_lifecycle_lifecycle_viewmodel.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.vf;
  var VOID = kotlin_kotlin.$_$.e;
  var Companion_getInstance = kotlin_androidx_lifecycle_lifecycle_viewmodel.$_$.d;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(SAVED_STATE_REGISTRY_OWNER_KEY$$inlined$Key$1, VOID, VOID, VOID, [Key]);
  initMetadataForClass(VIEW_MODEL_STORE_OWNER_KEY$$inlined$Key$1, VOID, VOID, VOID, [Key]);
  initMetadataForClass(DEFAULT_ARGS_KEY$$inlined$Key$1, VOID, VOID, VOID, [Key]);
  //endregion
  function get_SAVED_STATE_REGISTRY_OWNER_KEY() {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    return SAVED_STATE_REGISTRY_OWNER_KEY;
  }
  var SAVED_STATE_REGISTRY_OWNER_KEY;
  function get_VIEW_MODEL_STORE_OWNER_KEY() {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    return VIEW_MODEL_STORE_OWNER_KEY;
  }
  var VIEW_MODEL_STORE_OWNER_KEY;
  function get_DEFAULT_ARGS_KEY() {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    return DEFAULT_ARGS_KEY;
  }
  var DEFAULT_ARGS_KEY;
  function SAVED_STATE_REGISTRY_OWNER_KEY$$inlined$Key$1() {
  }
  function VIEW_MODEL_STORE_OWNER_KEY$$inlined$Key$1() {
  }
  function DEFAULT_ARGS_KEY$$inlined$Key$1() {
  }
  var properties_initialized_SavedStateHandleSupport_kt_6hqgvh;
  function _init_properties_SavedStateHandleSupport_kt__nxqisr() {
    if (!properties_initialized_SavedStateHandleSupport_kt_6hqgvh) {
      properties_initialized_SavedStateHandleSupport_kt_6hqgvh = true;
      // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
      Companion_getInstance();
      SAVED_STATE_REGISTRY_OWNER_KEY = new SAVED_STATE_REGISTRY_OWNER_KEY$$inlined$Key$1();
      // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
      Companion_getInstance();
      VIEW_MODEL_STORE_OWNER_KEY = new VIEW_MODEL_STORE_OWNER_KEY$$inlined$Key$1();
      // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
      Companion_getInstance();
      DEFAULT_ARGS_KEY = new DEFAULT_ARGS_KEY$$inlined$Key$1();
    }
  }
  return _;
}));

//# sourceMappingURL=androidx-lifecycle-lifecycle-viewmodel-savedstate.js.map
