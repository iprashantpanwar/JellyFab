(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'components-ui-tooling-preview-library'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'components-ui-tooling-preview-library'.");
    }
    globalThis['components-ui-tooling-preview-library'] = factory(typeof globalThis['components-ui-tooling-preview-library'] === 'undefined' ? {} : globalThis['components-ui-tooling-preview-library'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.e;
  var Long = kotlin_kotlin.$_$.ol;
  var protoOf = kotlin_kotlin.$_$.yg;
  var THROW_CCE = kotlin_kotlin.$_$.vl;
  var equalsLong = kotlin_kotlin.$_$.me;
  var getStringHashCode = kotlin_kotlin.$_$.tf;
  var getBooleanHashCode = kotlin_kotlin.$_$.pf;
  var Annotation = kotlin_kotlin.$_$.al;
  var initMetadataForClass = kotlin_kotlin.$_$.vf;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Preview, 'Preview', VOID, VOID, [Annotation]);
  //endregion
  function Preview(name, group, widthDp, heightDp, locale, showBackground, backgroundColor) {
    name = name === VOID ? '' : name;
    group = group === VOID ? '' : group;
    widthDp = widthDp === VOID ? -1 : widthDp;
    heightDp = heightDp === VOID ? -1 : heightDp;
    locale = locale === VOID ? '' : locale;
    showBackground = showBackground === VOID ? false : showBackground;
    backgroundColor = backgroundColor === VOID ? new Long(0, 0) : backgroundColor;
    this.name_1 = name;
    this.group_1 = group;
    this.widthDp_1 = widthDp;
    this.heightDp_1 = heightDp;
    this.locale_1 = locale;
    this.showBackground_1 = showBackground;
    this.backgroundColor_1 = backgroundColor;
  }
  protoOf(Preview).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Preview).get_group_is3eja_k$ = function () {
    return this.group_1;
  };
  protoOf(Preview).get_widthDp_nfsd8p_k$ = function () {
    return this.widthDp_1;
  };
  protoOf(Preview).get_heightDp_om8qn0_k$ = function () {
    return this.heightDp_1;
  };
  protoOf(Preview).get_locale_g9dqar_k$ = function () {
    return this.locale_1;
  };
  protoOf(Preview).get_showBackground_xc7u24_k$ = function () {
    return this.showBackground_1;
  };
  protoOf(Preview).get_backgroundColor_a0bggk_k$ = function () {
    return this.backgroundColor_1;
  };
  protoOf(Preview).equals = function (other) {
    if (!(other instanceof Preview))
      return false;
    var tmp0_other_with_cast = other instanceof Preview ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!(this.group_1 === tmp0_other_with_cast.group_1))
      return false;
    if (!(this.widthDp_1 === tmp0_other_with_cast.widthDp_1))
      return false;
    if (!(this.heightDp_1 === tmp0_other_with_cast.heightDp_1))
      return false;
    if (!(this.locale_1 === tmp0_other_with_cast.locale_1))
      return false;
    if (!(this.showBackground_1 === tmp0_other_with_cast.showBackground_1))
      return false;
    if (!equalsLong(this.backgroundColor_1, tmp0_other_with_cast.backgroundColor_1))
      return false;
    return true;
  };
  protoOf(Preview).hashCode = function () {
    var result = imul(getStringHashCode('name'), 127) ^ getStringHashCode(this.name_1);
    result = result + (imul(getStringHashCode('group'), 127) ^ getStringHashCode(this.group_1)) | 0;
    result = result + (imul(getStringHashCode('widthDp'), 127) ^ this.widthDp_1) | 0;
    result = result + (imul(getStringHashCode('heightDp'), 127) ^ this.heightDp_1) | 0;
    result = result + (imul(getStringHashCode('locale'), 127) ^ getStringHashCode(this.locale_1)) | 0;
    result = result + (imul(getStringHashCode('showBackground'), 127) ^ getBooleanHashCode(this.showBackground_1)) | 0;
    result = result + (imul(getStringHashCode('backgroundColor'), 127) ^ this.backgroundColor_1.hashCode()) | 0;
    return result;
  };
  protoOf(Preview).toString = function () {
    return '@org.jetbrains.compose.ui.tooling.preview.Preview(' + 'name=' + this.name_1 + ', ' + 'group=' + this.group_1 + ', ' + 'widthDp=' + this.widthDp_1 + ', ' + 'heightDp=' + this.heightDp_1 + ', ' + 'locale=' + this.locale_1 + ', ' + 'showBackground=' + this.showBackground_1 + ', ' + 'backgroundColor=' + this.backgroundColor_1.toString() + ')';
  };
  return _;
}));

//# sourceMappingURL=components-ui-tooling-preview-library.js.map
