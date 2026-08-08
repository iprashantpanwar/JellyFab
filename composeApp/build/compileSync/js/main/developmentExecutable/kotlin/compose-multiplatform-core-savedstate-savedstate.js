(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['compose-multiplatform-core-savedstate-savedstate'] = factory(typeof globalThis['compose-multiplatform-core-savedstate-savedstate'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-savedstate-savedstate']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-savedstate-savedstate.js.map
