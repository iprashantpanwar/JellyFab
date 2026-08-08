(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['androidx-lifecycle-lifecycle-viewmodel-savedstate'] = factory(typeof globalThis['androidx-lifecycle-lifecycle-viewmodel-savedstate'] === 'undefined' ? {} : globalThis['androidx-lifecycle-lifecycle-viewmodel-savedstate']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-lifecycle-lifecycle-viewmodel-savedstate.js.map
