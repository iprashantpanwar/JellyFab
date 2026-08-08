(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['components-ui-tooling-preview-library'] = factory(typeof globalThis['components-ui-tooling-preview-library'] === 'undefined' ? {} : globalThis['components-ui-tooling-preview-library']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=components-ui-tooling-preview-library.js.map
