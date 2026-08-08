(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-runtime-compose'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-lifecycle-lifecycle-runtime-compose'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-runtime-compose'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'androidx-lifecycle-lifecycle-runtime-compose'.");
    }
    globalThis['androidx-lifecycle-lifecycle-runtime-compose'] = factory(typeof globalThis['androidx-lifecycle-lifecycle-runtime-compose'] === 'undefined' ? {} : globalThis['androidx-lifecycle-lifecycle-runtime-compose'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime']);
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
  var androidx_lifecycle_compose_LifecycleStartStopEffectScope$stable;
  var androidx_lifecycle_compose_LifecycleResumePauseEffectScope$stable;
  function get_LocalLifecycleOwner() {
    _init_properties_LocalLifecycleOwner_nonAndroid_kt__hguocc();
    return LocalLifecycleOwner;
  }
  var LocalLifecycleOwner;
  function LocalLifecycleOwner$lambda() {
    _init_properties_LocalLifecycleOwner_nonAndroid_kt__hguocc();
    // Inline function 'kotlin.error' call
    var message = 'CompositionLocal LocalLifecycleOwner not present';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var properties_initialized_LocalLifecycleOwner_nonAndroid_kt_9cr6oy;
  function _init_properties_LocalLifecycleOwner_nonAndroid_kt__hguocc() {
    if (!properties_initialized_LocalLifecycleOwner_nonAndroid_kt_9cr6oy) {
      properties_initialized_LocalLifecycleOwner_nonAndroid_kt_9cr6oy = true;
      LocalLifecycleOwner = staticCompositionLocalOf(LocalLifecycleOwner$lambda);
    }
  }
  //region block: init
  androidx_lifecycle_compose_LifecycleStartStopEffectScope$stable = 8;
  androidx_lifecycle_compose_LifecycleResumePauseEffectScope$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalLifecycleOwner;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-lifecycle-lifecycle-runtime-compose.js.map
