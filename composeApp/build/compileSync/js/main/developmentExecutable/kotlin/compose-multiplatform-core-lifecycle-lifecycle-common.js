(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] = factory(typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-lifecycle-lifecycle-common']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-common.js.map
