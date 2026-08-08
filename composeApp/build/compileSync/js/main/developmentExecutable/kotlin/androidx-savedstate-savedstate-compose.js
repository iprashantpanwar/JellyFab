(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-savedstate-savedstate-compose'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-savedstate-savedstate-compose'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-savedstate-savedstate-compose'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'androidx-savedstate-savedstate-compose'.");
    }
    globalThis['androidx-savedstate-savedstate-compose'] = factory(typeof globalThis['androidx-savedstate-savedstate-compose'] === 'undefined' ? {} : globalThis['androidx-savedstate-savedstate-compose'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var toString = kotlin_kotlin.$_$.bh;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.n2;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_LocalSavedStateRegistryOwner() {
    _init_properties_LocalSavedStateRegistryOwner_nonAndroid_kt__xfxntp();
    return LocalSavedStateRegistryOwner;
  }
  var LocalSavedStateRegistryOwner;
  function LocalSavedStateRegistryOwner$lambda() {
    _init_properties_LocalSavedStateRegistryOwner_nonAndroid_kt__xfxntp();
    // Inline function 'kotlin.error' call
    var message = 'CompositionLocal LocalSavedStateRegistryOwner not present';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var properties_initialized_LocalSavedStateRegistryOwner_nonAndroid_kt_iav4gv;
  function _init_properties_LocalSavedStateRegistryOwner_nonAndroid_kt__xfxntp() {
    if (!properties_initialized_LocalSavedStateRegistryOwner_nonAndroid_kt_iav4gv) {
      properties_initialized_LocalSavedStateRegistryOwner_nonAndroid_kt_iav4gv = true;
      LocalSavedStateRegistryOwner = staticCompositionLocalOf(LocalSavedStateRegistryOwner$lambda);
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalSavedStateRegistryOwner;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-savedstate-savedstate-compose.js.map
