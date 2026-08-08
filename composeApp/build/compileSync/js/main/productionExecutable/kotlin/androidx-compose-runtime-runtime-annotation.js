(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['androidx-compose-runtime-runtime-annotation'] = factory(typeof globalThis['androidx-compose-runtime-runtime-annotation'] === 'undefined' ? {} : globalThis['androidx-compose-runtime-runtime-annotation']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-compose-runtime-runtime-annotation.js.map
