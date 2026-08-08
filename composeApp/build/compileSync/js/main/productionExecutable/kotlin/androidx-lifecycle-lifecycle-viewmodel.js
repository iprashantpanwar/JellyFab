(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-viewmodel'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-lifecycle-lifecycle-viewmodel'.");
    }
    globalThis['androidx-lifecycle-lifecycle-viewmodel'] = factory(typeof globalThis['androidx-lifecycle-lifecycle-viewmodel'] === 'undefined' ? {} : globalThis['androidx-lifecycle-lifecycle-viewmodel'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var protoOf = kotlin_kotlin.$_$.z9;
  var initMetadataForClass = kotlin_kotlin.$_$.h9;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ViewModelStore, 'ViewModelStore', ViewModelStore);
  //endregion
  function ViewModelStore() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.o6a_1 = LinkedHashMap_init_$Create$();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ViewModelStore;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-lifecycle-lifecycle-viewmodel.js.map
