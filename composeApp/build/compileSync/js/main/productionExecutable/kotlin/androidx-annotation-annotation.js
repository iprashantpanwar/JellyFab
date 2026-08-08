(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['androidx-annotation-annotation'] = factory(typeof globalThis['androidx-annotation-annotation'] === 'undefined' ? {} : globalThis['androidx-annotation-annotation']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-annotation-annotation.js.map
