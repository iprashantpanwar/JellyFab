(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-unit'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-unit'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-unit'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-unit'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-unit'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-unit'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-unit'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-util']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Long = kotlin_kotlin.$_$.ol;
  var bitwiseAnd = kotlin_kotlin.$_$.fe;
  var convertToInt = kotlin_kotlin.$_$.je;
  var shiftRight = kotlin_kotlin.$_$.ve;
  var Unit_getInstance = kotlin_kotlin.$_$.n5;
  var VOID = kotlin_kotlin.$_$.e;
  var protoOf = kotlin_kotlin.$_$.yg;
  var initMetadataForCompanion = kotlin_kotlin.$_$.wf;
  var THROW_CCE = kotlin_kotlin.$_$.vl;
  var equalsLong = kotlin_kotlin.$_$.me;
  var initMetadataForClass = kotlin_kotlin.$_$.vf;
  var fromInt = kotlin_kotlin.$_$.ne;
  var shiftLeft = kotlin_kotlin.$_$.te;
  var bitwiseOr = kotlin_kotlin.$_$.ge;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var roundToInt = kotlin_kotlin.$_$.fh;
  var isInfinite = kotlin_kotlin.$_$.rm;
  var equals = kotlin_kotlin.$_$.nf;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var toRawBits = kotlin_kotlin.$_$.gn;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.v4;
  var floatFromBits = kotlin_kotlin.$_$.of;
  var initMetadataForInterface = kotlin_kotlin.$_$.zf;
  var getNumberHashCode = kotlin_kotlin.$_$.rf;
  var compareTo = kotlin_kotlin.$_$.jf;
  var isNaN_0 = kotlin_kotlin.$_$.sm;
  var Comparable = kotlin_kotlin.$_$.gl;
  var coerceAtLeast = kotlin_kotlin.$_$.ph;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var objectCreate = kotlin_kotlin.$_$.xg;
  var toString = kotlin_kotlin.$_$.bh;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s;
  var abs = kotlin_kotlin.$_$.dh;
  var numberToInt = kotlin_kotlin.$_$.wg;
  var THROW_IAE = kotlin_kotlin.$_$.wl;
  var enumEntries = kotlin_kotlin.$_$.be;
  var Enum = kotlin_kotlin.$_$.il;
  var shiftRightUnsigned = kotlin_kotlin.$_$.ue;
  var bitwiseXor = kotlin_kotlin.$_$.he;
  var Annotation = kotlin_kotlin.$_$.al;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Constraints, 'Constraints');
  function toSp(_this__u8e3s4) {
    return get_sp_1(_Dp___get_value__impl__geb1vb(_this__u8e3s4) / this.get_fontScale_h56n3i_k$());
  }
  function toDp(_this__u8e3s4) {
    // Inline function 'kotlin.check' call
    if (!equals(_TextUnit___get_type__impl__uc2olt(_this__u8e3s4), Companion_getInstance_9().get_Sp_88j2da_k$())) {
      var message = 'Only Sp can convert to Px';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _Dp___init__impl__ms3zkb(_TextUnit___get_value__impl__hpbx0k(_this__u8e3s4) * this.get_fontScale_h56n3i_k$());
  }
  initMetadataForInterface(FontScalingLinear, 'FontScalingLinear');
  function toPx(_this__u8e3s4) {
    return _Dp___get_value__impl__geb1vb(_this__u8e3s4) * this.get_density_qy0267_k$();
  }
  function roundToPx(_this__u8e3s4) {
    var px = this.toPx_mycba2_k$(_this__u8e3s4);
    var tmp;
    if (isInfinite(px)) {
      tmp = 2147483647;
    } else {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      tmp = roundToInt(px);
    }
    return tmp;
  }
  function toPx_0(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.unit.checkPrecondition' call
    if (!equals(_TextUnit___get_type__impl__uc2olt(_this__u8e3s4), Companion_getInstance_9().get_Sp_88j2da_k$())) {
      var tmp$ret$0 = 'Only Sp can convert to Px';
      throwIllegalStateException(tmp$ret$0);
    }
    return this.toPx_mycba2_k$(this.toDp_m8rr7q_k$(_this__u8e3s4));
  }
  function roundToPx_0(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = this.toPx_plt68j_k$(_this__u8e3s4);
    return roundToInt(this_0);
  }
  function toDp_0(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = _this__u8e3s4 / this.get_density_qy0267_k$();
    return _Dp___init__impl__ms3zkb(this_0);
  }
  function toSp_0(_this__u8e3s4) {
    return this.toSp_apeb1_k$(this.toDp_fjakf4_k$(_this__u8e3s4));
  }
  function toDp_1(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = _this__u8e3s4 / this.get_density_qy0267_k$();
    return _Dp___init__impl__ms3zkb(this_0);
  }
  function toSp_1(_this__u8e3s4) {
    return this.toSp_apeb1_k$(this.toDp_hs0w0_k$(_this__u8e3s4));
  }
  function toRect(_this__u8e3s4) {
    return new Rect(this.toPx_mycba2_k$(_this__u8e3s4.get_left_n04ytv_k$()), this.toPx_mycba2_k$(_this__u8e3s4.get_top_t6yz49_k$()), this.toPx_mycba2_k$(_this__u8e3s4.get_right_hyw4hc_k$()), this.toPx_mycba2_k$(_this__u8e3s4.get_bottom_sk2u7j_k$()));
  }
  function toSize(_this__u8e3s4) {
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!equalsLong(_DpSize___get_packedValue__impl__jx4au8(_this__u8e3s4), new Long(2143289344, 2143289344))) {
      var tmp0 = this.toPx_mycba2_k$(_DpSize___get_width__impl__o3d5gt(_this__u8e3s4));
      // Inline function 'androidx.compose.ui.geometry.Size' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = this.toPx_mycba2_k$(_DpSize___get_height__impl__5xueo2(_this__u8e3s4));
      var v1 = fromInt(toRawBits(tmp0));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      tmp = _Size___init__impl__aywn0g(tmp$ret$1);
    } else {
      tmp = Companion_getInstance().get_Unspecified_3ttj0y_k$();
    }
    return tmp;
  }
  function toDpSize(_this__u8e3s4) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    if (!equalsLong(_Size___get_packedValue__impl__7rlt1o(_this__u8e3s4), new Long(2143289344, 2143289344))) {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$4 = floatFromBits(bits);
      var tmp_0 = this.toDp_hs0w0_k$(tmp$ret$4);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$8 = floatFromBits(bits_0);
      tmp = DpSize_0(tmp_0, this.toDp_hs0w0_k$(tmp$ret$8));
    } else {
      tmp = Companion_getInstance_2().get_Unspecified_cemiqc_k$();
    }
    return tmp;
  }
  initMetadataForInterface(Density, 'Density', VOID, VOID, [FontScalingLinear]);
  initMetadataForClass(DensityImpl, 'DensityImpl', VOID, VOID, [Density]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Dp, 'Dp', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(DpSize, 'DpSize');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(DpRect, 'DpRect');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(DpOffset, 'DpOffset');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(IntOffset, 'IntOffset');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(IntRect, 'IntRect');
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(IntSize, 'IntSize');
  initMetadataForClass(LayoutDirection, 'LayoutDirection', VOID, Enum);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(TextUnit, 'TextUnit');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(TextUnitType, 'TextUnitType');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(Velocity, 'Velocity');
  initMetadataForClass(NoOp, 'NoOp', VOID, VOID, [Annotation]);
  //endregion
  function _Constraints___init__impl__v8ud31(value) {
    return value;
  }
  function _Constraints___get_value__impl__3ah2ax($this) {
    return $this;
  }
  function _get_focusIndex__7g9rf3($this) {
    return convertToInt(bitwiseAnd(_Constraints___get_value__impl__3ah2ax($this), new Long(3, 0)));
  }
  function _Constraints___get_minWidth__impl__hi9lfi($this) {
    // Inline function 'androidx.compose.ui.unit.Constraints.focusIndex' call
    // Inline function 'androidx.compose.ui.unit.indexToBitOffset' call
    var index = convertToInt(bitwiseAnd(_Constraints___get_value__impl__3ah2ax($this), new Long(3, 0)));
    // Inline function 'androidx.compose.ui.unit.widthMask' call
    var mask = (1 << (13 + (((index & 1) << 1) + imul((index & 2) >> 1, 3) | 0) | 0)) - 1 | 0;
    return convertToInt(shiftRight(_Constraints___get_value__impl__3ah2ax($this), 2)) & mask;
  }
  function _Constraints___get_maxWidth__impl__uuyqc($this) {
    // Inline function 'androidx.compose.ui.unit.Constraints.focusIndex' call
    // Inline function 'androidx.compose.ui.unit.indexToBitOffset' call
    var index = convertToInt(bitwiseAnd(_Constraints___get_value__impl__3ah2ax($this), new Long(3, 0)));
    // Inline function 'androidx.compose.ui.unit.widthMask' call
    var mask = (1 << (13 + (((index & 1) << 1) + imul((index & 2) >> 1, 3) | 0) | 0)) - 1 | 0;
    var width = convertToInt(shiftRight(_Constraints___get_value__impl__3ah2ax($this), 33)) & mask;
    return width === 0 ? 2147483647 : width - 1 | 0;
  }
  function _Constraints___get_minHeight__impl__ev4bgx($this) {
    // Inline function 'androidx.compose.ui.unit.Constraints.focusIndex' call
    // Inline function 'androidx.compose.ui.unit.indexToBitOffset' call
    var index = convertToInt(bitwiseAnd(_Constraints___get_value__impl__3ah2ax($this), new Long(3, 0)));
    var bitOffset = ((index & 1) << 1) + imul((index & 2) >> 1, 3) | 0;
    // Inline function 'androidx.compose.ui.unit.heightMask' call
    var mask = (1 << (18 - bitOffset | 0)) - 1 | 0;
    // Inline function 'androidx.compose.ui.unit.minHeightOffsets' call
    var offset = 15 + bitOffset | 0;
    return convertToInt(shiftRight(_Constraints___get_value__impl__3ah2ax($this), offset)) & mask;
  }
  function _Constraints___get_maxHeight__impl__dt3e8z($this) {
    // Inline function 'androidx.compose.ui.unit.Constraints.focusIndex' call
    // Inline function 'androidx.compose.ui.unit.indexToBitOffset' call
    var index = convertToInt(bitwiseAnd(_Constraints___get_value__impl__3ah2ax($this), new Long(3, 0)));
    var bitOffset = ((index & 1) << 1) + imul((index & 2) >> 1, 3) | 0;
    // Inline function 'androidx.compose.ui.unit.heightMask' call
    var mask = (1 << (18 - bitOffset | 0)) - 1 | 0;
    // Inline function 'androidx.compose.ui.unit.minHeightOffsets' call
    var offset = (15 + bitOffset | 0) + 31 | 0;
    var height = convertToInt(shiftRight(_Constraints___get_value__impl__3ah2ax($this), offset)) & mask;
    return height === 0 ? 2147483647 : height - 1 | 0;
  }
  function _Constraints___get_hasBoundedWidth__impl__7hd0wr($this) {
    // Inline function 'androidx.compose.ui.unit.Constraints.focusIndex' call
    // Inline function 'androidx.compose.ui.unit.indexToBitOffset' call
    var index = convertToInt(bitwiseAnd(_Constraints___get_value__impl__3ah2ax($this), new Long(3, 0)));
    // Inline function 'androidx.compose.ui.unit.widthMask' call
    var mask = (1 << (13 + (((index & 1) << 1) + imul((index & 2) >> 1, 3) | 0) | 0)) - 1 | 0;
    return !((convertToInt(shiftRight(_Constraints___get_value__impl__3ah2ax($this), 33)) & mask) === 0);
  }
  function _Constraints___get_hasBoundedHeight__impl__bsh4rw($this) {
    // Inline function 'androidx.compose.ui.unit.Constraints.focusIndex' call
    // Inline function 'androidx.compose.ui.unit.indexToBitOffset' call
    var index = convertToInt(bitwiseAnd(_Constraints___get_value__impl__3ah2ax($this), new Long(3, 0)));
    var bitOffset = ((index & 1) << 1) + imul((index & 2) >> 1, 3) | 0;
    // Inline function 'androidx.compose.ui.unit.heightMask' call
    var mask = (1 << (18 - bitOffset | 0)) - 1 | 0;
    // Inline function 'androidx.compose.ui.unit.minHeightOffsets' call
    var offset = (15 + bitOffset | 0) + 31 | 0;
    return !((convertToInt(shiftRight(_Constraints___get_value__impl__3ah2ax($this), offset)) & mask) === 0);
  }
  function _Constraints___get_hasFixedWidth__impl__4p17wc($this) {
    // Inline function 'androidx.compose.ui.unit.Constraints.focusIndex' call
    // Inline function 'androidx.compose.ui.unit.indexToBitOffset' call
    var index = convertToInt(bitwiseAnd(_Constraints___get_value__impl__3ah2ax($this), new Long(3, 0)));
    // Inline function 'androidx.compose.ui.unit.widthMask' call
    var mask = (1 << (13 + (((index & 1) << 1) + imul((index & 2) >> 1, 3) | 0) | 0)) - 1 | 0;
    var minWidth = convertToInt(shiftRight(_Constraints___get_value__impl__3ah2ax($this), 2)) & mask;
    // Inline function 'kotlin.let' call
    var it = convertToInt(shiftRight(_Constraints___get_value__impl__3ah2ax($this), 33)) & mask;
    var maxWidth = it === 0 ? 2147483647 : it - 1 | 0;
    return minWidth === maxWidth;
  }
  function _Constraints___get_hasFixedHeight__impl__y56fxx($this) {
    // Inline function 'androidx.compose.ui.unit.Constraints.focusIndex' call
    // Inline function 'androidx.compose.ui.unit.indexToBitOffset' call
    var index = convertToInt(bitwiseAnd(_Constraints___get_value__impl__3ah2ax($this), new Long(3, 0)));
    var bitOffset = ((index & 1) << 1) + imul((index & 2) >> 1, 3) | 0;
    // Inline function 'androidx.compose.ui.unit.heightMask' call
    var mask = (1 << (18 - bitOffset | 0)) - 1 | 0;
    // Inline function 'androidx.compose.ui.unit.minHeightOffsets' call
    var offset = 15 + bitOffset | 0;
    var minHeight = convertToInt(shiftRight(_Constraints___get_value__impl__3ah2ax($this), offset)) & mask;
    // Inline function 'kotlin.let' call
    var it = convertToInt(shiftRight(_Constraints___get_value__impl__3ah2ax($this), offset + 31 | 0)) & mask;
    var maxHeight = it === 0 ? 2147483647 : it - 1 | 0;
    return minHeight === maxHeight;
  }
  function _Constraints___get_isZero__impl__fm0efw($this) {
    // Inline function 'androidx.compose.ui.unit.Constraints.focusIndex' call
    // Inline function 'androidx.compose.ui.unit.indexToBitOffset' call
    var index = convertToInt(bitwiseAnd(_Constraints___get_value__impl__3ah2ax($this), new Long(3, 0)));
    var bitOffset = ((index & 1) << 1) + imul((index & 2) >> 1, 3) | 0;
    var tmp = convertToInt(shiftRight(_Constraints___get_value__impl__3ah2ax($this), 33));
    // Inline function 'androidx.compose.ui.unit.widthMask' call
    var maxWidth = (tmp & ((1 << (13 + bitOffset | 0)) - 1 | 0)) - 1 | 0;
    // Inline function 'androidx.compose.ui.unit.minHeightOffsets' call
    var offset = (15 + bitOffset | 0) + 31 | 0;
    var tmp_0 = convertToInt(shiftRight(_Constraints___get_value__impl__3ah2ax($this), offset));
    // Inline function 'androidx.compose.ui.unit.heightMask' call
    var maxHeight = (tmp_0 & ((1 << (18 - bitOffset | 0)) - 1 | 0)) - 1 | 0;
    return !!(maxWidth === 0 | maxHeight === 0);
  }
  function Constraints__copy_impl_ivfv3y($this, minWidth, maxWidth, minHeight, maxHeight) {
    // Inline function 'androidx.compose.ui.unit.requirePrecondition' call
    if (!(maxWidth >= minWidth && maxHeight >= minHeight && minWidth >= 0 && minHeight >= 0)) {
      var tmp$ret$0 = 'maxWidth must be >= than minWidth,\nmaxHeight must be >= than minHeight,\nminWidth and minHeight must be >= 0';
      throwIllegalArgumentException(tmp$ret$0);
    }
    return createConstraints(minWidth, maxWidth, minHeight, maxHeight);
  }
  function Constraints__copy$default_impl_f452rp($this, minWidth, maxWidth, minHeight, maxHeight, $super) {
    minWidth = minWidth === VOID ? _Constraints___get_minWidth__impl__hi9lfi($this) : minWidth;
    maxWidth = maxWidth === VOID ? _Constraints___get_maxWidth__impl__uuyqc($this) : maxWidth;
    minHeight = minHeight === VOID ? _Constraints___get_minHeight__impl__ev4bgx($this) : minHeight;
    maxHeight = maxHeight === VOID ? _Constraints___get_maxHeight__impl__dt3e8z($this) : maxHeight;
    var tmp;
    if ($super === VOID) {
      tmp = Constraints__copy_impl_ivfv3y($this, minWidth, maxWidth, minHeight, maxHeight);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Constraints(tmp_0)).copy_8a9gi8_k$.call(new Constraints($this), minWidth, maxWidth, minHeight, maxHeight).value_1;
    }
    return tmp;
  }
  function Constraints__copyMaxDimensions_impl_smewkn($this) {
    return _Constraints___init__impl__v8ud31(bitwiseAnd(_Constraints___get_value__impl__3ah2ax($this), new Long(3, -2)));
  }
  function Constraints__toString_impl_37yskr($this) {
    var maxWidth = _Constraints___get_maxWidth__impl__uuyqc($this);
    var maxWidthStr = maxWidth === 2147483647 ? 'Infinity' : maxWidth.toString();
    var maxHeight = _Constraints___get_maxHeight__impl__dt3e8z($this);
    var maxHeightStr = maxHeight === 2147483647 ? 'Infinity' : maxHeight.toString();
    return 'Constraints(minWidth = ' + _Constraints___get_minWidth__impl__hi9lfi($this) + ', maxWidth = ' + maxWidthStr + ', ' + ('minHeight = ' + _Constraints___get_minHeight__impl__ev4bgx($this) + ', maxHeight = ' + maxHeightStr + ')');
  }
  function Companion() {
    Companion_instance = this;
    this.Infinity_1 = 2147483647;
  }
  protoOf(Companion).get_Infinity_rvchkf_k$ = function () {
    return this.Infinity_1;
  };
  protoOf(Companion).fixed_rd8fwx_k$ = function (width, height) {
    // Inline function 'androidx.compose.ui.unit.requirePrecondition' call
    if (!!!(width >= 0 & height >= 0)) {
      var tmp$ret$0 = 'width and height must be >= 0';
      throwIllegalArgumentException(tmp$ret$0);
    }
    return createConstraints(width, width, height, height);
  };
  protoOf(Companion).fixedWidth_sctdsx_k$ = function (width) {
    // Inline function 'androidx.compose.ui.unit.requirePrecondition' call
    if (!(width >= 0)) {
      var tmp$ret$0 = 'width must be >= 0';
      throwIllegalArgumentException(tmp$ret$0);
    }
    return createConstraints(width, width, 0, 2147483647);
  };
  protoOf(Companion).fixedHeight_x1j7yw_k$ = function (height) {
    // Inline function 'androidx.compose.ui.unit.requirePrecondition' call
    if (!(height >= 0)) {
      var tmp$ret$0 = 'height must be >= 0';
      throwIllegalArgumentException(tmp$ret$0);
    }
    return createConstraints(0, 2147483647, height, height);
  };
  protoOf(Companion).restrictConstraints_uvk53u_k$ = function (minWidth, maxWidth, minHeight, maxHeight, prioritizeWidth) {
    var tmp;
    if (prioritizeWidth) {
      tmp = this.fitPrioritizingWidth_o0ab04_k$(minWidth, maxWidth, minHeight, maxHeight);
    } else {
      tmp = this.fitPrioritizingHeight_cdcbfz_k$(minWidth, maxWidth, minHeight, maxHeight);
    }
    return tmp;
  };
  protoOf(Companion).restrictConstraints$default_isbo6q_k$ = function (minWidth, maxWidth, minHeight, maxHeight, prioritizeWidth, $super) {
    prioritizeWidth = prioritizeWidth === VOID ? true : prioritizeWidth;
    return $super === VOID ? this.restrictConstraints_uvk53u_k$(minWidth, maxWidth, minHeight, maxHeight, prioritizeWidth) : $super.restrictConstraints_uvk53u_k$.call(this, minWidth, maxWidth, minHeight, maxHeight, prioritizeWidth).value_1;
  };
  protoOf(Companion).fitPrioritizingWidth_o0ab04_k$ = function (minWidth, maxWidth, minHeight, maxHeight) {
    // Inline function 'kotlin.math.min' call
    var minW = Math.min(minWidth, 262142);
    var tmp;
    if (maxWidth === 2147483647) {
      tmp = 2147483647;
    } else {
      // Inline function 'kotlin.math.min' call
      tmp = Math.min(maxWidth, 262142);
    }
    var maxW = tmp;
    var consumed = maxW === 2147483647 ? minW : maxW;
    // Inline function 'androidx.compose.ui.unit.maxAllowedForSize' call
    var tmp_0;
    if (consumed < 8191) {
      tmp_0 = 262142;
    } else if (consumed < 32767) {
      tmp_0 = 65534;
    } else if (consumed < 65535) {
      tmp_0 = 32766;
    } else if (consumed < 262143) {
      tmp_0 = 8190;
    } else {
      throwInvalidConstraintsSizeException(consumed);
    }
    var maxAllowed = tmp_0;
    var tmp_1;
    if (maxHeight === 2147483647) {
      tmp_1 = 2147483647;
    } else {
      // Inline function 'kotlin.math.min' call
      tmp_1 = Math.min(maxAllowed, maxHeight);
    }
    var maxH = tmp_1;
    // Inline function 'kotlin.math.min' call
    var minH = Math.min(maxAllowed, minHeight);
    return Constraints_0(minW, maxW, minH, maxH);
  };
  protoOf(Companion).fitPrioritizingHeight_cdcbfz_k$ = function (minWidth, maxWidth, minHeight, maxHeight) {
    // Inline function 'kotlin.math.min' call
    var minH = Math.min(minHeight, 262142);
    var tmp;
    if (maxHeight === 2147483647) {
      tmp = 2147483647;
    } else {
      // Inline function 'kotlin.math.min' call
      tmp = Math.min(maxHeight, 262142);
    }
    var maxH = tmp;
    var consumed = maxH === 2147483647 ? minH : maxH;
    // Inline function 'androidx.compose.ui.unit.maxAllowedForSize' call
    var tmp_0;
    if (consumed < 8191) {
      tmp_0 = 262142;
    } else if (consumed < 32767) {
      tmp_0 = 65534;
    } else if (consumed < 65535) {
      tmp_0 = 32766;
    } else if (consumed < 262143) {
      tmp_0 = 8190;
    } else {
      throwInvalidConstraintsSizeException(consumed);
    }
    var maxAllowed = tmp_0;
    var tmp_1;
    if (maxWidth === 2147483647) {
      tmp_1 = 2147483647;
    } else {
      // Inline function 'kotlin.math.min' call
      tmp_1 = Math.min(maxAllowed, maxWidth);
    }
    var maxW = tmp_1;
    // Inline function 'kotlin.math.min' call
    var minW = Math.min(maxAllowed, minWidth);
    return Constraints_0(minW, maxW, minH, maxH);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Constraints__hashCode_impl_ij7484($this) {
    return $this.hashCode();
  }
  function Constraints__equals_impl_33vs20($this, other) {
    if (!(other instanceof Constraints))
      return false;
    var tmp0_other_with_cast = other instanceof Constraints ? other.value_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Constraints(value) {
    Companion_getInstance_0();
    this.value_1 = value;
  }
  protoOf(Constraints).toString = function () {
    return Constraints__toString_impl_37yskr(this.value_1);
  };
  protoOf(Constraints).hashCode = function () {
    return Constraints__hashCode_impl_ij7484(this.value_1);
  };
  protoOf(Constraints).equals = function (other) {
    return Constraints__equals_impl_33vs20(this.value_1, other);
  };
  function constrain(_this__u8e3s4, otherConstraints) {
    var minWidth = _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4);
    var maxWidth = _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4);
    var minHeight = _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4);
    var maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = _Constraints___get_minWidth__impl__hi9lfi(otherConstraints);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = this_0 < minWidth ? minWidth : this_0;
    var tmp = this_1 > maxWidth ? maxWidth : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = _Constraints___get_maxWidth__impl__uuyqc(otherConstraints);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_3 = this_2 < minWidth ? minWidth : this_2;
    var tmp_0 = this_3 > maxWidth ? maxWidth : this_3;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_4 = _Constraints___get_minHeight__impl__ev4bgx(otherConstraints);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_5 = this_4 < minHeight ? minHeight : this_4;
    var tmp_1 = this_5 > maxHeight ? maxHeight : this_5;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_6 = _Constraints___get_maxHeight__impl__dt3e8z(otherConstraints);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_7 = this_6 < minHeight ? minHeight : this_6;
    var tmp$ret$11 = this_7 > maxHeight ? maxHeight : this_7;
    return Constraints_0(tmp, tmp_0, tmp_1, tmp$ret$11);
  }
  function offset(_this__u8e3s4, horizontal, vertical) {
    horizontal = horizontal === VOID ? 0 : horizontal;
    vertical = vertical === VOID ? 0 : vertical;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4) + horizontal | 0;
    var tmp = this_0 < 0 ? 0 : this_0;
    // Inline function 'androidx.compose.ui.unit.addMaxWithMinimum' call
    var max = _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4);
    var tmp_0;
    if (max === 2147483647) {
      tmp_0 = max;
    } else {
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_1 = max + horizontal | 0;
      tmp_0 = this_1 < 0 ? 0 : this_1;
    }
    var tmp_1 = tmp_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4) + vertical | 0;
    var tmp_2 = this_2 < 0 ? 0 : this_2;
    // Inline function 'androidx.compose.ui.unit.addMaxWithMinimum' call
    var max_0 = _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4);
    var tmp_3;
    if (max_0 === 2147483647) {
      tmp_3 = max_0;
    } else {
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_3 = max_0 + vertical | 0;
      tmp_3 = this_3 < 0 ? 0 : this_3;
    }
    var tmp$ret$5 = tmp_3;
    return Constraints_0(tmp, tmp_1, tmp_2, tmp$ret$5);
  }
  function Constraints_0(minWidth, maxWidth, minHeight, maxHeight) {
    minWidth = minWidth === VOID ? 0 : minWidth;
    maxWidth = maxWidth === VOID ? 2147483647 : maxWidth;
    minHeight = minHeight === VOID ? 0 : minHeight;
    maxHeight = maxHeight === VOID ? 2147483647 : maxHeight;
    // Inline function 'androidx.compose.ui.unit.requirePrecondition' call
    if (!!!(!!(!!(maxWidth >= minWidth & maxHeight >= minHeight) & minWidth >= 0) & minHeight >= 0)) {
      var tmp$ret$0 = 'maxWidth must be >= than minWidth,\nmaxHeight must be >= than minHeight,\nminWidth and minHeight must be >= 0';
      throwIllegalArgumentException(tmp$ret$0);
    }
    return createConstraints(minWidth, maxWidth, minHeight, maxHeight);
  }
  function constrainWidth(_this__u8e3s4, width) {
    var tmp2 = _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = width < tmp2 ? tmp2 : width;
    return this_0 > maximumValue ? maximumValue : this_0;
  }
  function constrainHeight(_this__u8e3s4, height) {
    var tmp2 = _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = height < tmp2 ? tmp2 : height;
    return this_0 > maximumValue ? maximumValue : this_0;
  }
  function constrain_0(_this__u8e3s4, size) {
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(size);
    var tmp0 = convertToInt(shiftRight(value, 32));
    var tmp2 = _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = tmp0 < tmp2 ? tmp2 : tmp0;
    var tmp0_0 = this_0 > maximumValue ? maximumValue : this_0;
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf(size);
    var tmp0_1 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp2_0 = _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue_0 = _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = tmp0_1 < tmp2_0 ? tmp2_0 : tmp0_1;
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = this_1 > maximumValue_0 ? maximumValue_0 : this_1;
    var tmp$ret$10 = bitwiseOr(shiftLeft(fromInt(tmp0_0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntSize___init__impl__emcjft(tmp$ret$10);
  }
  function widthMask(bitOffset) {
    return (1 << (13 + bitOffset | 0)) - 1 | 0;
  }
  function indexToBitOffset(index) {
    return ((index & 1) << 1) + imul((index & 2) >> 1, 3) | 0;
  }
  function heightMask(bitOffset) {
    return (1 << (18 - bitOffset | 0)) - 1 | 0;
  }
  function minHeightOffsets(bitOffset) {
    return 15 + bitOffset | 0;
  }
  function createConstraints(minWidth, maxWidth, minHeight, maxHeight) {
    var heightVal = maxHeight === 2147483647 ? minHeight : maxHeight;
    var heightBits = bitsNeedForSizeUnchecked(heightVal);
    var widthVal = maxWidth === 2147483647 ? minWidth : maxWidth;
    var widthBits = bitsNeedForSizeUnchecked(widthVal);
    if ((widthBits + heightBits | 0) > 31) {
      throwInvalidConstraintException(widthVal, heightVal);
    }
    var maxWidthValue = maxWidth + 1 | 0;
    maxWidthValue = maxWidthValue & ~(maxWidthValue >> 31);
    var maxHeightValue = maxHeight + 1 | 0;
    maxHeightValue = maxHeightValue & ~(maxHeightValue >> 31);
    var bitOffset = widthBits - 13 | 0;
    // Inline function 'androidx.compose.ui.unit.bitOffsetToIndex' call
    var focus = (bitOffset >> 1) + (bitOffset & 1) | 0;
    // Inline function 'androidx.compose.ui.unit.minHeightOffsets' call
    var minHeightOffset = 15 + bitOffset | 0;
    var maxHeightOffset = minHeightOffset + 31 | 0;
    var value = bitwiseOr(bitwiseOr(bitwiseOr(bitwiseOr(fromInt(focus), shiftLeft(fromInt(minWidth), 2)), shiftLeft(fromInt(maxWidthValue), 33)), shiftLeft(fromInt(minHeight), minHeightOffset)), shiftLeft(fromInt(maxHeightValue), maxHeightOffset));
    return _Constraints___init__impl__v8ud31(value);
  }
  function maxAllowedForSize(size) {
    var tmp;
    if (size < 8191) {
      tmp = 262142;
    } else if (size < 32767) {
      tmp = 65534;
    } else if (size < 65535) {
      tmp = 32766;
    } else if (size < 262143) {
      tmp = 8190;
    } else {
      throwInvalidConstraintsSizeException(size);
    }
    return tmp;
  }
  function addMaxWithMinimum(max, value) {
    var tmp;
    if (max === 2147483647) {
      tmp = max;
    } else {
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_0 = max + value | 0;
      tmp = this_0 < 0 ? 0 : this_0;
    }
    return tmp;
  }
  function bitsNeedForSizeUnchecked(size) {
    return size < 8191 ? 13 : size < 32767 ? 15 : size < 65535 ? 16 : size < 262143 ? 18 : 255;
  }
  function throwInvalidConstraintException(widthVal, heightVal) {
    throw IllegalArgumentException_init_$Create$("Can't represent a width of " + widthVal + ' and height of ' + heightVal + ' in Constraints');
  }
  function bitOffsetToIndex(bits) {
    return (bits >> 1) + (bits & 1) | 0;
  }
  function throwInvalidConstraintsSizeException(size) {
    throw IllegalArgumentException_init_$Create$("Can't represent a size of " + size + ' in Constraints');
  }
  function Density() {
  }
  function Density_0(density, fontScale) {
    fontScale = fontScale === VOID ? 1.0 : fontScale;
    return new DensityImpl(density, fontScale);
  }
  function DensityImpl(density, fontScale) {
    this.density_1 = density;
    this.fontScale_1 = fontScale;
  }
  protoOf(DensityImpl).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(DensityImpl).get_fontScale_h56n3i_k$ = function () {
    return this.fontScale_1;
  };
  protoOf(DensityImpl).component1_7eebsc_k$ = function () {
    return this.density_1;
  };
  protoOf(DensityImpl).component2_7eebsb_k$ = function () {
    return this.fontScale_1;
  };
  protoOf(DensityImpl).copy_4tzoad_k$ = function (density, fontScale) {
    return new DensityImpl(density, fontScale);
  };
  protoOf(DensityImpl).copy$default_hyedea_k$ = function (density, fontScale, $super) {
    density = density === VOID ? this.density_1 : density;
    fontScale = fontScale === VOID ? this.fontScale_1 : fontScale;
    return $super === VOID ? this.copy_4tzoad_k$(density, fontScale) : $super.copy_4tzoad_k$.call(this, density, fontScale);
  };
  protoOf(DensityImpl).toString = function () {
    return 'DensityImpl(density=' + this.density_1 + ', fontScale=' + this.fontScale_1 + ')';
  };
  protoOf(DensityImpl).hashCode = function () {
    var result = getNumberHashCode(this.density_1);
    result = imul(result, 31) + getNumberHashCode(this.fontScale_1) | 0;
    return result;
  };
  protoOf(DensityImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DensityImpl))
      return false;
    var tmp0_other_with_cast = other instanceof DensityImpl ? other : THROW_CCE();
    if (!equals(this.density_1, tmp0_other_with_cast.density_1))
      return false;
    if (!equals(this.fontScale_1, tmp0_other_with_cast.fontScale_1))
      return false;
    return true;
  };
  var androidx_compose_ui_unit_DpRect$stable;
  function _Dp___init__impl__ms3zkb(value) {
    return value;
  }
  function _Dp___get_value__impl__geb1vb($this) {
    return $this;
  }
  function Dp__plus_impl_jccqqv($this, other) {
    return _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb($this) + _Dp___get_value__impl__geb1vb(other));
  }
  function Dp__minus_impl_9d2wwn($this, other) {
    return _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb($this) - _Dp___get_value__impl__geb1vb(other));
  }
  function Dp__unaryMinus_impl_vjy6lc($this) {
    return _Dp___init__impl__ms3zkb(-_Dp___get_value__impl__geb1vb($this));
  }
  function Dp__div_impl_4wp0uw($this, other) {
    return _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb($this) / other);
  }
  function Dp__div_impl_4wp0uw_0($this, other) {
    return _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb($this) / other);
  }
  function Dp__div_impl_4wp0uw_1($this, other) {
    return _Dp___get_value__impl__geb1vb($this) / _Dp___get_value__impl__geb1vb(other);
  }
  function Dp__times_impl_bnlh65($this, other) {
    return _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb($this) * other);
  }
  function Dp__times_impl_bnlh65_0($this, other) {
    return _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb($this) * other);
  }
  function Dp__compareTo_impl_tlg3dl($this, other) {
    return compareTo(_Dp___get_value__impl__geb1vb($this), _Dp___get_value__impl__geb1vb(other));
  }
  function Dp__compareTo_impl_tlg3dl_0($this, other) {
    return Dp__compareTo_impl_tlg3dl($this.value_1, other instanceof Dp ? other.value_1 : THROW_CCE());
  }
  function Dp__toString_impl_kcddez($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (isNaN_0(_Dp___get_value__impl__geb1vb($this))) {
      tmp = 'Dp.Unspecified';
    } else {
      tmp = '' + _Dp___get_value__impl__geb1vb($this) + '.dp';
    }
    return tmp;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.Hairline_1 = _Dp___init__impl__ms3zkb(0.0);
    this.Infinity_1 = _Dp___init__impl__ms3zkb(Infinity);
    this.Unspecified_1 = _Dp___init__impl__ms3zkb(NaN);
  }
  protoOf(Companion_0).get_Hairline_cy72lg_k$ = function () {
    return this.Hairline_1;
  };
  protoOf(Companion_0).get_Infinity_kvyweq_k$ = function () {
    return this.Infinity_1;
  };
  protoOf(Companion_0).get_Unspecified_9b9rm3_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Dp__hashCode_impl_sxkrra($this) {
    return getNumberHashCode($this);
  }
  function Dp__equals_impl_bc4gpq($this, other) {
    if (!(other instanceof Dp))
      return false;
    var tmp0_other_with_cast = other instanceof Dp ? other.value_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Dp(value) {
    Companion_getInstance_1();
    this.value_1 = value;
  }
  protoOf(Dp).compareTo_uev4ll_k$ = function (other) {
    return Dp__compareTo_impl_tlg3dl(this.value_1, other);
  };
  protoOf(Dp).compareTo_hpufkf_k$ = function (other) {
    return Dp__compareTo_impl_tlg3dl_0(this, other);
  };
  protoOf(Dp).toString = function () {
    return Dp__toString_impl_kcddez(this.value_1);
  };
  protoOf(Dp).hashCode = function () {
    return Dp__hashCode_impl_sxkrra(this.value_1);
  };
  protoOf(Dp).equals = function (other) {
    return Dp__equals_impl_bc4gpq(this.value_1, other);
  };
  function get_dp(_this__u8e3s4) {
    return _Dp___init__impl__ms3zkb(_this__u8e3s4);
  }
  function get_isSpecified(_this__u8e3s4) {
    return !isNaN_0(_Dp___get_value__impl__geb1vb(_this__u8e3s4));
  }
  function get_isFinite(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    var this_0 = _Dp___get_value__impl__geb1vb(_this__u8e3s4);
    return (toRawBits(this_0) & 2147483647) < 2139095040;
  }
  function _DpSize___init__impl__t4mur0(packedValue) {
    return packedValue;
  }
  function _DpSize___get_packedValue__impl__jx4au8($this) {
    return $this;
  }
  function _DpSize___get_width__impl__o3d5gt($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _DpSize___get_packedValue__impl__jx4au8($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = floatFromBits(bits);
    return _Dp___init__impl__ms3zkb(this_0);
  }
  function _DpSize___get_height__impl__5xueo2($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _DpSize___get_packedValue__impl__jx4au8($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = floatFromBits(bits);
    return _Dp___init__impl__ms3zkb(this_0);
  }
  function DpSize__copy_impl_bqu9ud($this, width, height) {
    var tmp0 = _Dp___get_value__impl__geb1vb(width);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Dp___get_value__impl__geb1vb(height);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _DpSize___init__impl__t4mur0(tmp$ret$0);
  }
  function DpSize__copy$default_impl_lb23f6($this, width, height, $super) {
    width = width === VOID ? _DpSize___get_width__impl__o3d5gt($this) : width;
    height = height === VOID ? _DpSize___get_height__impl__5xueo2($this) : height;
    var tmp;
    if ($super === VOID) {
      tmp = DpSize__copy_impl_bqu9ud($this, width, height);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new DpSize(tmp_0)).copy_hizzfx_k$.call(new DpSize($this), new Dp(width), new Dp(height)).packedValue_1;
    }
    return tmp;
  }
  function DpSize__minus_impl_h9olfa($this, other) {
    var tmp0 = _DpSize___get_width__impl__o3d5gt($this);
    // Inline function 'androidx.compose.ui.unit.Dp.minus' call
    var other_0 = _DpSize___get_width__impl__o3d5gt(other);
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0) - _Dp___get_value__impl__geb1vb(other_0));
    var tmp0_0 = _Dp___get_value__impl__geb1vb(tmp$ret$0);
    var tmp0_1 = _DpSize___get_height__impl__5xueo2($this);
    // Inline function 'androidx.compose.ui.unit.Dp.minus' call
    var other_1 = _DpSize___get_height__impl__5xueo2(other);
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_1) - _Dp___get_value__impl__geb1vb(other_1));
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Dp___get_value__impl__geb1vb(tmp$ret$1);
    var v1 = fromInt(toRawBits(tmp0_0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _DpSize___init__impl__t4mur0(tmp$ret$2);
  }
  function DpSize__plus_impl_9x81ba($this, other) {
    var tmp0 = _DpSize___get_width__impl__o3d5gt($this);
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var other_0 = _DpSize___get_width__impl__o3d5gt(other);
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0) + _Dp___get_value__impl__geb1vb(other_0));
    var tmp0_0 = _Dp___get_value__impl__geb1vb(tmp$ret$0);
    var tmp0_1 = _DpSize___get_height__impl__5xueo2($this);
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var other_1 = _DpSize___get_height__impl__5xueo2(other);
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_1) + _Dp___get_value__impl__geb1vb(other_1));
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Dp___get_value__impl__geb1vb(tmp$ret$1);
    var v1 = fromInt(toRawBits(tmp0_0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _DpSize___init__impl__t4mur0(tmp$ret$2);
  }
  function DpSize__component1_impl_uakewc($this) {
    return _DpSize___get_width__impl__o3d5gt($this);
  }
  function DpSize__component2_impl_urm1aj($this) {
    return _DpSize___get_height__impl__5xueo2($this);
  }
  function DpSize__times_impl_jk75os($this, other) {
    // Inline function 'androidx.compose.ui.unit.Dp.times' call
    var this_0 = _DpSize___get_width__impl__o3d5gt($this);
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_0) * other);
    var tmp0 = _Dp___get_value__impl__geb1vb(tmp$ret$0);
    // Inline function 'androidx.compose.ui.unit.Dp.times' call
    var this_1 = _DpSize___get_height__impl__5xueo2($this);
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_1) * other);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Dp___get_value__impl__geb1vb(tmp$ret$1);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _DpSize___init__impl__t4mur0(tmp$ret$2);
  }
  function DpSize__times_impl_jk75os_0($this, other) {
    // Inline function 'androidx.compose.ui.unit.Dp.times' call
    var this_0 = _DpSize___get_width__impl__o3d5gt($this);
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_0) * other);
    var tmp0 = _Dp___get_value__impl__geb1vb(tmp$ret$0);
    // Inline function 'androidx.compose.ui.unit.Dp.times' call
    var this_1 = _DpSize___get_height__impl__5xueo2($this);
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_1) * other);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Dp___get_value__impl__geb1vb(tmp$ret$1);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _DpSize___init__impl__t4mur0(tmp$ret$2);
  }
  function DpSize__div_impl_vg5y6h($this, other) {
    // Inline function 'androidx.compose.ui.unit.Dp.div' call
    var this_0 = _DpSize___get_width__impl__o3d5gt($this);
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_0) / other);
    var tmp0 = _Dp___get_value__impl__geb1vb(tmp$ret$0);
    // Inline function 'androidx.compose.ui.unit.Dp.div' call
    var this_1 = _DpSize___get_height__impl__5xueo2($this);
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_1) / other);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Dp___get_value__impl__geb1vb(tmp$ret$1);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _DpSize___init__impl__t4mur0(tmp$ret$2);
  }
  function DpSize__div_impl_vg5y6h_0($this, other) {
    // Inline function 'androidx.compose.ui.unit.Dp.div' call
    var this_0 = _DpSize___get_width__impl__o3d5gt($this);
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_0) / other);
    var tmp0 = _Dp___get_value__impl__geb1vb(tmp$ret$0);
    // Inline function 'androidx.compose.ui.unit.Dp.div' call
    var this_1 = _DpSize___get_height__impl__5xueo2($this);
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_1) / other);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Dp___get_value__impl__geb1vb(tmp$ret$1);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _DpSize___init__impl__t4mur0(tmp$ret$2);
  }
  function DpSize__toString_impl_1vggic($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!equalsLong(_DpSize___get_packedValue__impl__jx4au8($this), new Long(2143289344, 2143289344))) {
      tmp = Dp__toString_impl_kcddez(_DpSize___get_width__impl__o3d5gt($this)) + ' x ' + Dp__toString_impl_kcddez(_DpSize___get_height__impl__5xueo2($this));
    } else {
      tmp = 'DpSize.Unspecified';
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.Zero_1 = _DpSize___init__impl__t4mur0(new Long(0, 0));
    this.Unspecified_1 = _DpSize___init__impl__t4mur0(new Long(2143289344, 2143289344));
  }
  protoOf(Companion_1).get_Zero_r8kb5d_k$ = function () {
    return this.Zero_1;
  };
  protoOf(Companion_1).get_Unspecified_cemiqc_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function DpSize__hashCode_impl_jvpgaj($this) {
    return $this.hashCode();
  }
  function DpSize__equals_impl_rpnn4x($this, other) {
    if (!(other instanceof DpSize))
      return false;
    var tmp0_other_with_cast = other instanceof DpSize ? other.packedValue_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function DpSize(packedValue) {
    Companion_getInstance_2();
    this.packedValue_1 = packedValue;
  }
  protoOf(DpSize).toString = function () {
    return DpSize__toString_impl_1vggic(this.packedValue_1);
  };
  protoOf(DpSize).hashCode = function () {
    return DpSize__hashCode_impl_jvpgaj(this.packedValue_1);
  };
  protoOf(DpSize).equals = function (other) {
    return DpSize__equals_impl_rpnn4x(this.packedValue_1, other);
  };
  function DpSize_0(width, height) {
    var tmp0 = _Dp___get_value__impl__geb1vb(width);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Dp___get_value__impl__geb1vb(height);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _DpSize___init__impl__t4mur0(tmp$ret$0);
  }
  function get_dp_0(_this__u8e3s4) {
    return _Dp___init__impl__ms3zkb(_this__u8e3s4);
  }
  function coerceAtLeast_0(_this__u8e3s4, minimumValue) {
    return _Dp___init__impl__ms3zkb(coerceAtLeast(_Dp___get_value__impl__geb1vb(_this__u8e3s4), _Dp___get_value__impl__geb1vb(minimumValue)));
  }
  function lerp_0(start, stop, fraction) {
    return _Dp___init__impl__ms3zkb(lerp(_Dp___get_value__impl__geb1vb(start), _Dp___get_value__impl__geb1vb(stop), fraction));
  }
  function get_isUnspecified(_this__u8e3s4) {
    return isNaN_0(_Dp___get_value__impl__geb1vb(_this__u8e3s4));
  }
  function DpRect_init_$Init$(origin, size, $this) {
    var tmp = _DpOffset___get_x__impl__uauqb5(origin);
    var tmp_0 = _DpOffset___get_y__impl__1h898y(origin);
    var tmp0 = _DpOffset___get_x__impl__uauqb5(origin);
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var other = _DpSize___get_width__impl__o3d5gt(size);
    var tmp_1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0) + _Dp___get_value__impl__geb1vb(other));
    var tmp0_0 = _DpOffset___get_y__impl__1h898y(origin);
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var other_0 = _DpSize___get_height__impl__5xueo2(size);
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_0) + _Dp___get_value__impl__geb1vb(other_0));
    DpRect.call($this, tmp, tmp_0, tmp_1, tmp$ret$1);
    return $this;
  }
  function DpRect_init_$Create$(origin, size) {
    return DpRect_init_$Init$(origin, size, objectCreate(protoOf(DpRect)));
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function DpRect(left, top, right, bottom) {
    Companion_getInstance_3();
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
  }
  protoOf(DpRect).get_left_n04ytv_k$ = function () {
    return this.left_1;
  };
  protoOf(DpRect).get_top_t6yz49_k$ = function () {
    return this.top_1;
  };
  protoOf(DpRect).get_right_hyw4hc_k$ = function () {
    return this.right_1;
  };
  protoOf(DpRect).get_bottom_sk2u7j_k$ = function () {
    return this.bottom_1;
  };
  protoOf(DpRect).component1_k79ve9_k$ = function () {
    return this.left_1;
  };
  protoOf(DpRect).component2_fwtwi6_k$ = function () {
    return this.top_1;
  };
  protoOf(DpRect).component3_j06dkj_k$ = function () {
    return this.right_1;
  };
  protoOf(DpRect).component4_h3xebw_k$ = function () {
    return this.bottom_1;
  };
  protoOf(DpRect).copy_kb0r7v_k$ = function (left, top, right, bottom) {
    return new DpRect(left, top, right, bottom);
  };
  protoOf(DpRect).copy$default_o6aux2_k$ = function (left, top, right, bottom, $super) {
    left = left === VOID ? this.left_1 : left;
    top = top === VOID ? this.top_1 : top;
    right = right === VOID ? this.right_1 : right;
    bottom = bottom === VOID ? this.bottom_1 : bottom;
    return $super === VOID ? this.copy_kb0r7v_k$(left, top, right, bottom) : $super.copy_kb0r7v_k$.call(this, new Dp(left), new Dp(top), new Dp(right), new Dp(bottom));
  };
  protoOf(DpRect).toString = function () {
    return 'DpRect(left=' + Dp__toString_impl_kcddez(this.left_1) + ', top=' + Dp__toString_impl_kcddez(this.top_1) + ', right=' + Dp__toString_impl_kcddez(this.right_1) + ', bottom=' + Dp__toString_impl_kcddez(this.bottom_1) + ')';
  };
  protoOf(DpRect).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.left_1);
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.top_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.right_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
    return result;
  };
  protoOf(DpRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DpRect))
      return false;
    var tmp0_other_with_cast = other instanceof DpRect ? other : THROW_CCE();
    if (!equals(this.left_1, tmp0_other_with_cast.left_1))
      return false;
    if (!equals(this.top_1, tmp0_other_with_cast.top_1))
      return false;
    if (!equals(this.right_1, tmp0_other_with_cast.right_1))
      return false;
    if (!equals(this.bottom_1, tmp0_other_with_cast.bottom_1))
      return false;
    return true;
  };
  function _DpOffset___init__impl__yq36wy(packedValue) {
    return packedValue;
  }
  function _DpOffset___get_packedValue__impl__7zqn8y($this) {
    return $this;
  }
  function _DpOffset___get_x__impl__uauqb5($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _DpOffset___get_packedValue__impl__7zqn8y($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = floatFromBits(bits);
    return _Dp___init__impl__ms3zkb(this_0);
  }
  function _DpOffset___get_y__impl__1h898y($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _DpOffset___get_packedValue__impl__7zqn8y($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = floatFromBits(bits);
    return _Dp___init__impl__ms3zkb(this_0);
  }
  function DpOffset__copy_impl_z860gp($this, x, y) {
    var tmp0 = _Dp___get_value__impl__geb1vb(x);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Dp___get_value__impl__geb1vb(y);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _DpOffset___init__impl__yq36wy(tmp$ret$0);
  }
  function DpOffset__copy$default_impl_98vijo($this, x, y, $super) {
    x = x === VOID ? _DpOffset___get_x__impl__uauqb5($this) : x;
    y = y === VOID ? _DpOffset___get_y__impl__1h898y($this) : y;
    var tmp;
    if ($super === VOID) {
      tmp = DpOffset__copy_impl_z860gp($this, x, y);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new DpOffset(tmp_0)).copy_bt2dy3_k$.call(new DpOffset($this), new Dp(x), new Dp(y)).packedValue_1;
    }
    return tmp;
  }
  function DpOffset__minus_impl_i9b6l8($this, other) {
    var tmp0 = _DpOffset___get_x__impl__uauqb5($this);
    // Inline function 'androidx.compose.ui.unit.Dp.minus' call
    var other_0 = _DpOffset___get_x__impl__uauqb5(other);
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0) - _Dp___get_value__impl__geb1vb(other_0));
    var tmp0_0 = _Dp___get_value__impl__geb1vb(tmp$ret$0);
    var tmp0_1 = _DpOffset___get_y__impl__1h898y($this);
    // Inline function 'androidx.compose.ui.unit.Dp.minus' call
    var other_1 = _DpOffset___get_y__impl__1h898y(other);
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_1) - _Dp___get_value__impl__geb1vb(other_1));
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Dp___get_value__impl__geb1vb(tmp$ret$1);
    var v1 = fromInt(toRawBits(tmp0_0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _DpOffset___init__impl__yq36wy(tmp$ret$2);
  }
  function DpOffset__plus_impl_e4vqcs($this, other) {
    var tmp0 = _DpOffset___get_x__impl__uauqb5($this);
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var other_0 = _DpOffset___get_x__impl__uauqb5(other);
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0) + _Dp___get_value__impl__geb1vb(other_0));
    var tmp0_0 = _Dp___get_value__impl__geb1vb(tmp$ret$0);
    var tmp0_1 = _DpOffset___get_y__impl__1h898y($this);
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var other_1 = _DpOffset___get_y__impl__1h898y(other);
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_1) + _Dp___get_value__impl__geb1vb(other_1));
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Dp___get_value__impl__geb1vb(tmp$ret$1);
    var v1 = fromInt(toRawBits(tmp0_0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _DpOffset___init__impl__yq36wy(tmp$ret$2);
  }
  function DpOffset__toString_impl_qqhvsu($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!equalsLong(_DpOffset___get_packedValue__impl__7zqn8y($this), new Long(2143289344, 2143289344))) {
      tmp = '(' + Dp__toString_impl_kcddez(_DpOffset___get_x__impl__uauqb5($this)) + ', ' + Dp__toString_impl_kcddez(_DpOffset___get_y__impl__1h898y($this)) + ')';
    } else {
      tmp = 'DpOffset.Unspecified';
    }
    return tmp;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.Zero_1 = _DpOffset___init__impl__yq36wy(new Long(0, 0));
    this.Unspecified_1 = _DpOffset___init__impl__yq36wy(new Long(2143289344, 2143289344));
  }
  protoOf(Companion_3).get_Zero_wu8ckh_k$ = function () {
    return this.Zero_1;
  };
  protoOf(Companion_3).get_Unspecified_8tkwou_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function DpOffset__hashCode_impl_mjg9df($this) {
    return $this.hashCode();
  }
  function DpOffset__equals_impl_7fc41d($this, other) {
    if (!(other instanceof DpOffset))
      return false;
    var tmp0_other_with_cast = other instanceof DpOffset ? other.packedValue_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function DpOffset(packedValue) {
    Companion_getInstance_4();
    this.packedValue_1 = packedValue;
  }
  protoOf(DpOffset).toString = function () {
    return DpOffset__toString_impl_qqhvsu(this.packedValue_1);
  };
  protoOf(DpOffset).hashCode = function () {
    return DpOffset__hashCode_impl_mjg9df(this.packedValue_1);
  };
  protoOf(DpOffset).equals = function (other) {
    return DpOffset__equals_impl_7fc41d(this.packedValue_1, other);
  };
  function DpOffset_0(x, y) {
    var tmp0 = _Dp___get_value__impl__geb1vb(x);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Dp___get_value__impl__geb1vb(y);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _DpOffset___init__impl__yq36wy(tmp$ret$0);
  }
  function get_dp_1(_this__u8e3s4) {
    return _Dp___init__impl__ms3zkb(_this__u8e3s4);
  }
  function get_isSpecified_0(_this__u8e3s4) {
    return !equalsLong(_DpSize___get_packedValue__impl__jx4au8(_this__u8e3s4), new Long(2143289344, 2143289344));
  }
  function get_isSpecified_1(_this__u8e3s4) {
    return !equalsLong(_DpOffset___get_packedValue__impl__7zqn8y(_this__u8e3s4), new Long(2143289344, 2143289344));
  }
  function get_size(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.unit.width' call
    var tmp0 = _this__u8e3s4.right_1;
    // Inline function 'androidx.compose.ui.unit.Dp.minus' call
    var other = _this__u8e3s4.left_1;
    var tmp = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0) - _Dp___get_value__impl__geb1vb(other));
    // Inline function 'androidx.compose.ui.unit.height' call
    var tmp0_0 = _this__u8e3s4.bottom_1;
    // Inline function 'androidx.compose.ui.unit.Dp.minus' call
    var other_0 = _this__u8e3s4.top_1;
    var tmp$ret$3 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_0) - _Dp___get_value__impl__geb1vb(other_0));
    return DpSize_0(tmp, tmp$ret$3);
  }
  function get_width(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.right_1;
    // Inline function 'androidx.compose.ui.unit.Dp.minus' call
    var other = _this__u8e3s4.left_1;
    return _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0) - _Dp___get_value__impl__geb1vb(other));
  }
  function get_height(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.bottom_1;
    // Inline function 'androidx.compose.ui.unit.Dp.minus' call
    var other = _this__u8e3s4.top_1;
    return _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0) - _Dp___get_value__impl__geb1vb(other));
  }
  function FontScalingLinear() {
  }
  function requirePrecondition(value, lazyMessage) {
    if (!value) {
      throwIllegalArgumentException(lazyMessage());
    }
  }
  function checkPrecondition(value, lazyMessage) {
    if (!value) {
      throwIllegalStateException(lazyMessage());
    }
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function _IntOffset___init__impl__rq8h7b(packedValue) {
    return packedValue;
  }
  function _IntOffset___get_packedValue__impl__982pbx($this) {
    return $this;
  }
  function _IntOffset___get_x__impl__qiqr5o($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntOffset___get_packedValue__impl__982pbx($this);
    return convertToInt(shiftRight(value, 32));
  }
  function _IntOffset___get_y__impl__2avpwj($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value = _IntOffset___get_packedValue__impl__982pbx($this);
    return convertToInt(bitwiseAnd(value, new Long(-1, 0)));
  }
  function IntOffset__component1_impl_z0xjzd($this) {
    return _IntOffset___get_x__impl__qiqr5o($this);
  }
  function IntOffset__component2_impl_yjvxl6($this) {
    return _IntOffset___get_y__impl__2avpwj($this);
  }
  function IntOffset__copy_impl_pmdgk6($this, x, y) {
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$2 = bitwiseOr(shiftLeft(fromInt(x), 32), bitwiseAnd(fromInt(y), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$2);
  }
  function IntOffset__copy$default_impl_1y5pbb($this, x, y, $super) {
    var tmp;
    if (x === VOID) {
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntOffset___get_packedValue__impl__982pbx($this);
      tmp = convertToInt(shiftRight(value, 32));
    } else {
      tmp = x;
    }
    x = tmp;
    var tmp_0;
    if (y === VOID) {
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntOffset___get_packedValue__impl__982pbx($this);
      tmp_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    } else {
      tmp_0 = y;
    }
    y = tmp_0;
    var tmp_1;
    if ($super === VOID) {
      tmp_1 = IntOffset__copy_impl_pmdgk6($this, x, y);
    } else {
      var tmp_2 = $super;
      tmp_1 = (tmp_2 == null ? null : new IntOffset(tmp_2)).copy_p71esc_k$.call(new IntOffset($this), x, y).packedValue_1;
    }
    return tmp_1;
  }
  function IntOffset__minus_impl_4m69hb($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntOffset___get_packedValue__impl__982pbx($this);
    var tmp = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value_0 = _IntOffset___get_packedValue__impl__982pbx(other);
    var tmp0 = tmp - convertToInt(shiftRight(value_0, 32)) | 0;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_1 = _IntOffset___get_packedValue__impl__982pbx($this);
    var tmp_0 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_2 = _IntOffset___get_packedValue__impl__982pbx(other);
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = tmp_0 - convertToInt(bitwiseAnd(value_2, new Long(-1, 0))) | 0;
    var tmp$ret$4 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$4);
  }
  function IntOffset__plus_impl_nqoa9b($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntOffset___get_packedValue__impl__982pbx($this);
    var tmp = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value_0 = _IntOffset___get_packedValue__impl__982pbx(other);
    var tmp0 = tmp + convertToInt(shiftRight(value_0, 32)) | 0;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_1 = _IntOffset___get_packedValue__impl__982pbx($this);
    var tmp_0 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_2 = _IntOffset___get_packedValue__impl__982pbx(other);
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = tmp_0 + convertToInt(bitwiseAnd(value_2, new Long(-1, 0))) | 0;
    var tmp$ret$4 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$4);
  }
  function IntOffset__unaryMinus_impl_7xzl6y($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntOffset___get_packedValue__impl__982pbx($this);
    var tmp0 = -convertToInt(shiftRight(value, 32)) | 0;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntOffset___get_packedValue__impl__982pbx($this);
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = -convertToInt(bitwiseAnd(value_0, new Long(-1, 0))) | 0;
    var tmp$ret$2 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$2);
  }
  function IntOffset__times_impl_2bnp7t($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntOffset___get_packedValue__impl__982pbx($this);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = convertToInt(shiftRight(value, 32)) * operand;
    var tmp0 = roundToInt(this_0);
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntOffset___get_packedValue__impl__982pbx($this);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0))) * operand;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = roundToInt(this_1);
    var tmp$ret$6 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$6);
  }
  function IntOffset__div_impl_wnk4u6($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntOffset___get_packedValue__impl__982pbx($this);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = convertToInt(shiftRight(value, 32)) / operand;
    var tmp0 = roundToInt(this_0);
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntOffset___get_packedValue__impl__982pbx($this);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0))) / operand;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = roundToInt(this_1);
    var tmp$ret$6 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$6);
  }
  function IntOffset__rem_impl_i1qrdh($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntOffset___get_packedValue__impl__982pbx($this);
    var tmp0 = convertToInt(shiftRight(value, 32)) % operand | 0;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntOffset___get_packedValue__impl__982pbx($this);
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0))) % operand | 0;
    var tmp$ret$2 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$2);
  }
  function IntOffset__toString_impl_h46d8h($this) {
    return '(' + _IntOffset___get_x__impl__qiqr5o($this) + ', ' + _IntOffset___get_y__impl__2avpwj($this) + ')';
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.Zero_1 = _IntOffset___init__impl__rq8h7b(new Long(0, 0));
    this.Max_1 = _IntOffset___init__impl__rq8h7b(new Long(2147483647, 2147483647));
  }
  protoOf(Companion_4).get_Zero_6hc3i8_k$ = function () {
    return this.Zero_1;
  };
  protoOf(Companion_4).get_Max_xekafe_k$ = function () {
    return this.Max_1;
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function IntOffset__hashCode_impl_w5rrxs($this) {
    return $this.hashCode();
  }
  function IntOffset__equals_impl_45wak4($this, other) {
    if (!(other instanceof IntOffset))
      return false;
    var tmp0_other_with_cast = other instanceof IntOffset ? other.packedValue_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function IntOffset(packedValue) {
    Companion_getInstance_5();
    this.packedValue_1 = packedValue;
  }
  protoOf(IntOffset).toString = function () {
    return IntOffset__toString_impl_h46d8h(this.packedValue_1);
  };
  protoOf(IntOffset).hashCode = function () {
    return IntOffset__hashCode_impl_w5rrxs(this.packedValue_1);
  };
  protoOf(IntOffset).equals = function (other) {
    return IntOffset__equals_impl_45wak4(this.packedValue_1, other);
  };
  function round(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = floatFromBits(bits);
    var tmp0 = roundToInt(this_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = roundToInt(this_1);
    var tmp$ret$12 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$12);
  }
  function IntOffset_0(x, y) {
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(x), 32), bitwiseAnd(fromInt(y), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$0);
  }
  function toOffset(_this__u8e3s4) {
    var tmp0 = _IntOffset___get_x__impl__qiqr5o(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _IntOffset___get_y__impl__2avpwj(_this__u8e3s4);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  function plus(_this__u8e3s4, offset) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = floatFromBits(bits) + _IntOffset___get_x__impl__qiqr5o(offset);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) + _IntOffset___get_y__impl__2avpwj(offset);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$8 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$8);
  }
  function minus(_this__u8e3s4, offset) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = floatFromBits(bits) - _IntOffset___get_x__impl__qiqr5o(offset);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) - _IntOffset___get_y__impl__2avpwj(offset);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$8 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$8);
  }
  var androidx_compose_ui_unit_IntRect$stable;
  function Companion_5() {
    Companion_instance_5 = this;
    this.Zero_1 = new IntRect(0, 0, 0, 0);
  }
  protoOf(Companion_5).get_Zero_woe9zl_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function IntRect(left, top, right, bottom) {
    Companion_getInstance_6();
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
  }
  protoOf(IntRect).get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  protoOf(IntRect).get_top_18ivbo_k$ = function () {
    return this.top_1;
  };
  protoOf(IntRect).get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  protoOf(IntRect).get_bottom_bj8ras_k$ = function () {
    return this.bottom_1;
  };
  protoOf(IntRect).get_width_j0q4yl_k$ = function () {
    return this.right_1 - this.left_1 | 0;
  };
  protoOf(IntRect).get_height_e7t92o_k$ = function () {
    return this.bottom_1 - this.top_1 | 0;
  };
  protoOf(IntRect).get_size_kd98kr_k$ = function () {
    var tmp0 = this.get_width_j0q4yl_k$();
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = this.get_height_e7t92o_k$();
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntSize___init__impl__emcjft(tmp$ret$0);
  };
  protoOf(IntRect).get_isEmpty_zauvru_k$ = function () {
    return this.left_1 >= this.right_1 || this.top_1 >= this.bottom_1;
  };
  protoOf(IntRect).translate_xoyiyr_k$ = function (offset) {
    return new IntRect(this.left_1 + _IntOffset___get_x__impl__qiqr5o(offset) | 0, this.top_1 + _IntOffset___get_y__impl__2avpwj(offset) | 0, this.right_1 + _IntOffset___get_x__impl__qiqr5o(offset) | 0, this.bottom_1 + _IntOffset___get_y__impl__2avpwj(offset) | 0);
  };
  protoOf(IntRect).translate_d1svym_k$ = function (translateX, translateY) {
    return new IntRect(this.left_1 + translateX | 0, this.top_1 + translateY | 0, this.right_1 + translateX | 0, this.bottom_1 + translateY | 0);
  };
  protoOf(IntRect).inflate_1wnjap_k$ = function (delta) {
    return new IntRect(this.left_1 - delta | 0, this.top_1 - delta | 0, this.right_1 + delta | 0, this.bottom_1 + delta | 0);
  };
  protoOf(IntRect).deflate_u3lcfn_k$ = function (delta) {
    return this.inflate_1wnjap_k$(-delta | 0);
  };
  protoOf(IntRect).intersect_myjf6r_k$ = function (other) {
    var tmp0 = this.left_1;
    // Inline function 'kotlin.math.max' call
    var b = other.left_1;
    var tmp = Math.max(tmp0, b);
    var tmp0_0 = this.top_1;
    // Inline function 'kotlin.math.max' call
    var b_0 = other.top_1;
    var tmp_0 = Math.max(tmp0_0, b_0);
    var tmp0_1 = this.right_1;
    // Inline function 'kotlin.math.min' call
    var b_1 = other.right_1;
    var tmp_1 = Math.min(tmp0_1, b_1);
    var tmp0_2 = this.bottom_1;
    // Inline function 'kotlin.math.min' call
    var b_2 = other.bottom_1;
    var tmp$ret$3 = Math.min(tmp0_2, b_2);
    return new IntRect(tmp, tmp_0, tmp_1, tmp$ret$3);
  };
  protoOf(IntRect).overlaps_zck2k0_k$ = function (other) {
    if (this.right_1 <= other.left_1 || other.right_1 <= this.left_1)
      return false;
    if (this.bottom_1 <= other.top_1 || other.bottom_1 <= this.top_1)
      return false;
    return true;
  };
  protoOf(IntRect).get_minDimension_t9b43n_k$ = function () {
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = this.get_width_j0q4yl_k$();
    var tmp0 = abs(this_0);
    // Inline function 'kotlin.math.absoluteValue' call
    var this_1 = this.get_height_e7t92o_k$();
    // Inline function 'kotlin.math.min' call
    var b = abs(this_1);
    return Math.min(tmp0, b);
  };
  protoOf(IntRect).get_maxDimension_xxccdn_k$ = function () {
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = this.get_width_j0q4yl_k$();
    var tmp0 = abs(this_0);
    // Inline function 'kotlin.math.absoluteValue' call
    var this_1 = this.get_height_e7t92o_k$();
    // Inline function 'kotlin.math.max' call
    var b = abs(this_1);
    return Math.max(tmp0, b);
  };
  protoOf(IntRect).get_topLeft_bl1fcy_k$ = function () {
    var tmp0 = this.left_1;
    // Inline function 'androidx.compose.ui.unit.IntOffset' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = this.top_1;
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$0);
  };
  protoOf(IntRect).get_topCenter_pd33lc_k$ = function () {
    var tmp0 = this.left_1 + (this.get_width_j0q4yl_k$() / 2 | 0) | 0;
    // Inline function 'androidx.compose.ui.unit.IntOffset' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = this.top_1;
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$0);
  };
  protoOf(IntRect).get_topRight_if8std_k$ = function () {
    var tmp0 = this.right_1;
    // Inline function 'androidx.compose.ui.unit.IntOffset' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = this.top_1;
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$0);
  };
  protoOf(IntRect).get_centerLeft_fb1wac_k$ = function () {
    var tmp0 = this.left_1;
    // Inline function 'androidx.compose.ui.unit.IntOffset' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = this.top_1 + (this.get_height_e7t92o_k$() / 2 | 0) | 0;
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$0);
  };
  protoOf(IntRect).get_center_nqar3h_k$ = function () {
    var tmp0 = this.left_1 + (this.get_width_j0q4yl_k$() / 2 | 0) | 0;
    // Inline function 'androidx.compose.ui.unit.IntOffset' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = this.top_1 + (this.get_height_e7t92o_k$() / 2 | 0) | 0;
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$0);
  };
  protoOf(IntRect).get_centerRight_py1pyl_k$ = function () {
    var tmp0 = this.right_1;
    // Inline function 'androidx.compose.ui.unit.IntOffset' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = this.top_1 + (this.get_height_e7t92o_k$() / 2 | 0) | 0;
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$0);
  };
  protoOf(IntRect).get_bottomLeft_259mly_k$ = function () {
    var tmp0 = this.left_1;
    // Inline function 'androidx.compose.ui.unit.IntOffset' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = this.bottom_1;
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$0);
  };
  protoOf(IntRect).get_bottomCenter_8v8giw_k$ = function () {
    var tmp0 = this.left_1 + (this.get_width_j0q4yl_k$() / 2 | 0) | 0;
    // Inline function 'androidx.compose.ui.unit.IntOffset' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = this.bottom_1;
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$0);
  };
  protoOf(IntRect).get_bottomRight_hw3609_k$ = function () {
    var tmp0 = this.right_1;
    // Inline function 'androidx.compose.ui.unit.IntOffset' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = this.bottom_1;
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$0);
  };
  protoOf(IntRect).contains_8sm25o_k$ = function (offset) {
    return _IntOffset___get_x__impl__qiqr5o(offset) >= this.left_1 && _IntOffset___get_x__impl__qiqr5o(offset) < this.right_1 && _IntOffset___get_y__impl__2avpwj(offset) >= this.top_1 && _IntOffset___get_y__impl__2avpwj(offset) < this.bottom_1;
  };
  protoOf(IntRect).toString = function () {
    return 'IntRect.fromLTRB(' + ('' + this.left_1 + ', ') + ('' + this.top_1 + ', ') + ('' + this.right_1 + ', ') + ('' + this.bottom_1 + ')');
  };
  protoOf(IntRect).component1_7eebsc_k$ = function () {
    return this.left_1;
  };
  protoOf(IntRect).component2_7eebsb_k$ = function () {
    return this.top_1;
  };
  protoOf(IntRect).component3_7eebsa_k$ = function () {
    return this.right_1;
  };
  protoOf(IntRect).component4_7eebs9_k$ = function () {
    return this.bottom_1;
  };
  protoOf(IntRect).copy_my5h57_k$ = function (left, top, right, bottom) {
    return new IntRect(left, top, right, bottom);
  };
  protoOf(IntRect).copy$default_ul4fpx_k$ = function (left, top, right, bottom, $super) {
    left = left === VOID ? this.left_1 : left;
    top = top === VOID ? this.top_1 : top;
    right = right === VOID ? this.right_1 : right;
    bottom = bottom === VOID ? this.bottom_1 : bottom;
    return $super === VOID ? this.copy_my5h57_k$(left, top, right, bottom) : $super.copy_my5h57_k$.call(this, left, top, right, bottom);
  };
  protoOf(IntRect).hashCode = function () {
    var result = this.left_1;
    result = imul(result, 31) + this.top_1 | 0;
    result = imul(result, 31) + this.right_1 | 0;
    result = imul(result, 31) + this.bottom_1 | 0;
    return result;
  };
  protoOf(IntRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IntRect))
      return false;
    var tmp0_other_with_cast = other instanceof IntRect ? other : THROW_CCE();
    if (!(this.left_1 === tmp0_other_with_cast.left_1))
      return false;
    if (!(this.top_1 === tmp0_other_with_cast.top_1))
      return false;
    if (!(this.right_1 === tmp0_other_with_cast.right_1))
      return false;
    if (!(this.bottom_1 === tmp0_other_with_cast.bottom_1))
      return false;
    return true;
  };
  function IntRect_0(offset, size) {
    var tmp = _IntOffset___get_x__impl__qiqr5o(offset);
    var tmp_0 = _IntOffset___get_y__impl__2avpwj(offset);
    var tmp_1 = _IntOffset___get_x__impl__qiqr5o(offset);
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(size);
    var tmp_2 = tmp_1 + convertToInt(shiftRight(value, 32)) | 0;
    var tmp_3 = _IntOffset___get_y__impl__2avpwj(offset);
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf(size);
    var tmp$ret$3 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    return new IntRect(tmp, tmp_0, tmp_2, tmp_3 + tmp$ret$3 | 0);
  }
  function roundToIntRect(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = _this__u8e3s4.get_left_woprgw_k$();
    var tmp = roundToInt(this_0);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = _this__u8e3s4.get_top_18ivbo_k$();
    var tmp_0 = roundToInt(this_1);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_2 = _this__u8e3s4.get_right_ixz7xv_k$();
    var tmp_1 = roundToInt(this_2);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_3 = _this__u8e3s4.get_bottom_bj8ras_k$();
    var tmp$ret$7 = roundToInt(this_3);
    return new IntRect(tmp, tmp_0, tmp_1, tmp$ret$7);
  }
  function toRect_0(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.left_1, _this__u8e3s4.top_1, _this__u8e3s4.right_1, _this__u8e3s4.bottom_1);
  }
  function _IntSize___init__impl__emcjft(packedValue) {
    return packedValue;
  }
  function _IntSize___get_packedValue__impl__uho7jf($this) {
    return $this;
  }
  function _IntSize___get_width__impl__d9yl4o($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf($this);
    return convertToInt(shiftRight(value, 32));
  }
  function _IntSize___get_height__impl__prv63b($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value = _IntSize___get_packedValue__impl__uho7jf($this);
    return convertToInt(bitwiseAnd(value, new Long(-1, 0)));
  }
  function IntSize__component1_impl_v484if($this) {
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf($this);
    return convertToInt(shiftRight(value, 32));
  }
  function IntSize__component2_impl_un6i48($this) {
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value = _IntSize___get_packedValue__impl__uho7jf($this);
    return convertToInt(bitwiseAnd(value, new Long(-1, 0)));
  }
  function IntSize__times_impl_8ewz1l($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf($this);
    var tmp$ret$0 = convertToInt(shiftRight(value, 32));
    var tmp0 = imul(tmp$ret$0, other);
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf($this);
    var tmp$ret$1 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = imul(tmp$ret$1, other);
    var tmp$ret$2 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntSize___init__impl__emcjft(tmp$ret$2);
  }
  function IntSize__div_impl_a85o7o($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf($this);
    var tmp0 = convertToInt(shiftRight(value, 32)) / other | 0;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf($this);
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0))) / other | 0;
    var tmp$ret$2 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntSize___init__impl__emcjft(tmp$ret$2);
  }
  function IntSize__toString_impl_54w9zl($this) {
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf($this);
    var tmp = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf($this);
    return '' + tmp + ' x ' + convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.Zero_1 = _IntSize___init__impl__emcjft(new Long(0, 0));
  }
  protoOf(Companion_6).get_Zero_9we0a6_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function IntSize__hashCode_impl_gm9mta($this) {
    return $this.hashCode();
  }
  function IntSize__equals_impl_i3v38e($this, other) {
    if (!(other instanceof IntSize))
      return false;
    var tmp0_other_with_cast = other instanceof IntSize ? other.packedValue_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function IntSize(packedValue) {
    Companion_getInstance_7();
    this.packedValue_1 = packedValue;
  }
  protoOf(IntSize).toString = function () {
    return IntSize__toString_impl_54w9zl(this.packedValue_1);
  };
  protoOf(IntSize).hashCode = function () {
    return IntSize__hashCode_impl_gm9mta(this.packedValue_1);
  };
  protoOf(IntSize).equals = function (other) {
    return IntSize__equals_impl_i3v38e(this.packedValue_1, other);
  };
  function IntSize_0(width, height) {
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(width), 32), bitwiseAnd(fromInt(height), new Long(-1, 0)));
    return _IntSize___init__impl__emcjft(tmp$ret$0);
  }
  function toSize_0(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(_this__u8e3s4);
    var tmp0 = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$4 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$4);
  }
  function get_center(_this__u8e3s4) {
    return _IntOffset___init__impl__rq8h7b(bitwiseOr(shiftLeft(shiftRight(_IntSize___get_packedValue__impl__uho7jf(_this__u8e3s4), 33), 32), bitwiseAnd(shiftRight(shiftLeft(_IntSize___get_packedValue__impl__uho7jf(_this__u8e3s4), 32), 33), new Long(-1, 0))));
  }
  function roundToIntSize(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = floatFromBits(bits);
    var tmp0 = roundToInt(this_0);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = roundToInt(this_1);
    var tmp$ret$12 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntSize___init__impl__emcjft(tmp$ret$12);
  }
  function toIntSize(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$3 = floatFromBits(bits);
    var tmp0 = numberToInt(tmp$ret$3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$7 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = numberToInt(tmp$ret$7);
    var tmp$ret$8 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntSize___init__impl__emcjft(tmp$ret$8);
  }
  function toIntRect(_this__u8e3s4) {
    return IntRect_0(Companion_getInstance_5().get_Zero_6hc3i8_k$(), _this__u8e3s4);
  }
  var LayoutDirection_Ltr_instance;
  var LayoutDirection_Rtl_instance;
  function values() {
    return [LayoutDirection_Ltr_getInstance(), LayoutDirection_Rtl_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Ltr':
        return LayoutDirection_Ltr_getInstance();
      case 'Rtl':
        return LayoutDirection_Rtl_getInstance();
      default:
        LayoutDirection_initEntries();
        THROW_IAE('No enum constant androidx.compose.ui.unit.LayoutDirection.' + value);
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var LayoutDirection_entriesInitialized;
  function LayoutDirection_initEntries() {
    if (LayoutDirection_entriesInitialized)
      return Unit_getInstance();
    LayoutDirection_entriesInitialized = true;
    LayoutDirection_Ltr_instance = new LayoutDirection('Ltr', 0);
    LayoutDirection_Rtl_instance = new LayoutDirection('Rtl', 1);
  }
  var $ENTRIES;
  function LayoutDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LayoutDirection_Ltr_getInstance() {
    LayoutDirection_initEntries();
    return LayoutDirection_Ltr_instance;
  }
  function LayoutDirection_Rtl_getInstance() {
    LayoutDirection_initEntries();
    return LayoutDirection_Rtl_instance;
  }
  function _TextUnit___init__impl__r5fj1s(packedValue) {
    return packedValue;
  }
  function _TextUnit___get_packedValue__impl__it60w4($this) {
    return $this;
  }
  function TextUnit__unaryMinus_impl_yh8f5n($this) {
    checkArithmetic($this);
    return pack(_TextUnit___get_rawType__impl__tu8yq5($this), -_TextUnit___get_value__impl__hpbx0k($this));
  }
  function TextUnit__div_impl_ql36z7($this, other) {
    checkArithmetic($this);
    return pack(_TextUnit___get_rawType__impl__tu8yq5($this), _TextUnit___get_value__impl__hpbx0k($this) / other);
  }
  function TextUnit__div_impl_ql36z7_0($this, other) {
    checkArithmetic($this);
    return pack(_TextUnit___get_rawType__impl__tu8yq5($this), _TextUnit___get_value__impl__hpbx0k($this) / other);
  }
  function TextUnit__div_impl_ql36z7_1($this, other) {
    checkArithmetic($this);
    return pack(_TextUnit___get_rawType__impl__tu8yq5($this), _TextUnit___get_value__impl__hpbx0k($this) / other);
  }
  function TextUnit__times_impl_vrurc8($this, other) {
    checkArithmetic($this);
    return pack(_TextUnit___get_rawType__impl__tu8yq5($this), _TextUnit___get_value__impl__hpbx0k($this) * other);
  }
  function TextUnit__times_impl_vrurc8_0($this, other) {
    checkArithmetic($this);
    return pack(_TextUnit___get_rawType__impl__tu8yq5($this), _TextUnit___get_value__impl__hpbx0k($this) * other);
  }
  function TextUnit__times_impl_vrurc8_1($this, other) {
    checkArithmetic($this);
    return pack(_TextUnit___get_rawType__impl__tu8yq5($this), _TextUnit___get_value__impl__hpbx0k($this) * other);
  }
  function TextUnit__compareTo_impl_6ryuvy($this, other) {
    checkArithmetic_0($this, other);
    return compareTo(_TextUnit___get_value__impl__hpbx0k($this), _TextUnit___get_value__impl__hpbx0k(other));
  }
  function TextUnit__toString_impl_51ghw0($this) {
    var tmp0_subject = _TextUnit___get_type__impl__uc2olt($this);
    return equals(tmp0_subject, Companion_getInstance_9().Unspecified_1) ? 'Unspecified' : equals(tmp0_subject, Companion_getInstance_9().Sp_1) ? '' + _TextUnit___get_value__impl__hpbx0k($this) + '.sp' : equals(tmp0_subject, Companion_getInstance_9().Em_1) ? '' + _TextUnit___get_value__impl__hpbx0k($this) + '.em' : 'Invalid';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.TextUnitTypes_1 = [new TextUnitType(Companion_getInstance_9().Unspecified_1), new TextUnitType(Companion_getInstance_9().Sp_1), new TextUnitType(Companion_getInstance_9().Em_1)];
    this.Unspecified_1 = pack(new Long(0, 0), NaN);
  }
  protoOf(Companion_7).get_TextUnitTypes_5rrd8j_k$ = function () {
    return this.TextUnitTypes_1;
  };
  protoOf(Companion_7).get_Unspecified_r048kw_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function _TextUnit___get_rawType__impl__tu8yq5($this) {
    return bitwiseAnd(_TextUnit___get_packedValue__impl__it60w4($this), new Long(0, 255));
  }
  function _TextUnit___get_type__impl__uc2olt($this) {
    return Companion_getInstance_8().TextUnitTypes_1[convertToInt(shiftRightUnsigned(_TextUnit___get_rawType__impl__tu8yq5($this), 32))].type_1;
  }
  function _TextUnit___get_isSp__impl__8c3r6q($this) {
    return equalsLong(_TextUnit___get_rawType__impl__tu8yq5($this), new Long(0, 1));
  }
  function _TextUnit___get_isEm__impl__esrmtl($this) {
    return equalsLong(_TextUnit___get_rawType__impl__tu8yq5($this), new Long(0, 2));
  }
  function _TextUnit___get_value__impl__hpbx0k($this) {
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(_TextUnit___get_packedValue__impl__it60w4($this), new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function TextUnit__hashCode_impl_qsmeov($this) {
    return $this.hashCode();
  }
  function TextUnit__equals_impl_49w9tp($this, other) {
    if (!(other instanceof TextUnit))
      return false;
    var tmp0_other_with_cast = other instanceof TextUnit ? other.packedValue_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextUnit(packedValue) {
    Companion_getInstance_8();
    this.packedValue_1 = packedValue;
  }
  protoOf(TextUnit).toString = function () {
    return TextUnit__toString_impl_51ghw0(this.packedValue_1);
  };
  protoOf(TextUnit).hashCode = function () {
    return TextUnit__hashCode_impl_qsmeov(this.packedValue_1);
  };
  protoOf(TextUnit).equals = function (other) {
    return TextUnit__equals_impl_49w9tp(this.packedValue_1, other);
  };
  function get_sp(_this__u8e3s4) {
    return pack(new Long(0, 1), _this__u8e3s4);
  }
  function get_sp_0(_this__u8e3s4) {
    return pack(new Long(0, 1), _this__u8e3s4);
  }
  function get_sp_1(_this__u8e3s4) {
    return pack(new Long(0, 1), _this__u8e3s4);
  }
  function _TextUnitType___init__impl__br87qi(type) {
    return type;
  }
  function _TextUnitType___get_type__impl__sa627r($this) {
    return $this;
  }
  function TextUnitType__toString_impl_x93gyy($this) {
    return equals($this, Companion_getInstance_9().Unspecified_1) ? 'Unspecified' : equals($this, Companion_getInstance_9().Sp_1) ? 'Sp' : equals($this, Companion_getInstance_9().Em_1) ? 'Em' : 'Invalid';
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.Unspecified_1 = _TextUnitType___init__impl__br87qi(new Long(0, 0));
    this.Sp_1 = _TextUnitType___init__impl__br87qi(new Long(0, 1));
    this.Em_1 = _TextUnitType___init__impl__br87qi(new Long(0, 2));
  }
  protoOf(Companion_8).get_Unspecified_bqs4bu_k$ = function () {
    return this.Unspecified_1;
  };
  protoOf(Companion_8).get_Sp_88j2da_k$ = function () {
    return this.Sp_1;
  };
  protoOf(Companion_8).get_Em_wuhg6r_k$ = function () {
    return this.Em_1;
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function TextUnitType__hashCode_impl_g0uo7b($this) {
    return $this.hashCode();
  }
  function TextUnitType__equals_impl_nrbaqr($this, other) {
    if (!(other instanceof TextUnitType))
      return false;
    var tmp0_other_with_cast = other instanceof TextUnitType ? other.type_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextUnitType(type) {
    Companion_getInstance_9();
    this.type_1 = type;
  }
  protoOf(TextUnitType).toString = function () {
    return TextUnitType__toString_impl_x93gyy(this.type_1);
  };
  protoOf(TextUnitType).hashCode = function () {
    return TextUnitType__hashCode_impl_g0uo7b(this.type_1);
  };
  protoOf(TextUnitType).equals = function (other) {
    return TextUnitType__equals_impl_nrbaqr(this.type_1, other);
  };
  function get_isUnspecified_0(_this__u8e3s4) {
    return equalsLong(_TextUnit___get_rawType__impl__tu8yq5(_this__u8e3s4), new Long(0, 0));
  }
  function get_em(_this__u8e3s4) {
    return pack(new Long(0, 2), _this__u8e3s4);
  }
  function get_em_0(_this__u8e3s4) {
    return pack(new Long(0, 2), _this__u8e3s4);
  }
  function get_em_1(_this__u8e3s4) {
    return pack(new Long(0, 2), _this__u8e3s4);
  }
  function get_isSpecified_2(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    return !equalsLong(_TextUnit___get_rawType__impl__tu8yq5(_this__u8e3s4), new Long(0, 0));
  }
  function TextUnit_0(value, type) {
    return pack(_TextUnitType___get_type__impl__sa627r(type), value);
  }
  function lerp_1(start, stop, fraction) {
    checkArithmetic_0(start, stop);
    return pack(_TextUnit___get_rawType__impl__tu8yq5(start), lerp(_TextUnit___get_value__impl__hpbx0k(start), _TextUnit___get_value__impl__hpbx0k(stop), fraction));
  }
  function checkArithmetic(a) {
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    // Inline function 'androidx.compose.ui.unit.requirePrecondition' call
    if (!!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(a), new Long(0, 0))) {
      var tmp$ret$1 = 'Cannot perform operation for Unspecified type.';
      throwIllegalArgumentException(tmp$ret$1);
    }
  }
  function pack(unitType, v) {
    return _TextUnit___init__impl__r5fj1s(bitwiseOr(unitType, bitwiseAnd(fromInt(toRawBits(v)), new Long(-1, 0))));
  }
  function checkArithmetic_0(a, b) {
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(a), new Long(0, 0))) {
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      tmp = !equalsLong(_TextUnit___get_rawType__impl__tu8yq5(b), new Long(0, 0));
    } else {
      tmp = false;
    }
    // Inline function 'androidx.compose.ui.unit.requirePrecondition' call
    if (!tmp) {
      var tmp$ret$2 = 'Cannot perform operation for Unspecified type.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    // Inline function 'androidx.compose.ui.unit.requirePrecondition' call
    if (!equals(_TextUnit___get_type__impl__uc2olt(a), _TextUnit___get_type__impl__uc2olt(b))) {
      var tmp$ret$4 = 'Cannot perform operation for ' + TextUnitType__toString_impl_x93gyy(_TextUnit___get_type__impl__uc2olt(a)) + ' and ' + TextUnitType__toString_impl_x93gyy(_TextUnit___get_type__impl__uc2olt(b));
      throwIllegalArgumentException(tmp$ret$4);
    }
  }
  function _Velocity___init__impl__tjpg0s(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _Velocity___get_x__impl__qqcikv($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _get_packedValue__aj623s($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function _Velocity___get_y__impl__239yhc($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _get_packedValue__aj623s($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function Velocity__component1_impl_owvb2c($this) {
    return _Velocity___get_x__impl__qqcikv($this);
  }
  function Velocity__component2_impl_oftoo5($this) {
    return _Velocity___get_y__impl__239yhc($this);
  }
  function Velocity__copy_impl_c7yiyt($this, x, y) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(x));
    var v2 = fromInt(toRawBits(y));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Velocity___init__impl__tjpg0s(tmp$ret$6);
  }
  function Velocity__copy$default_impl_eql69u($this, x, y, $super) {
    var tmp;
    if (x === VOID) {
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _get_packedValue__aj623s($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp = floatFromBits(bits);
    } else {
      tmp = x;
    }
    x = tmp;
    var tmp_0;
    if (y === VOID) {
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _get_packedValue__aj623s($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp_0 = floatFromBits(bits_0);
    } else {
      tmp_0 = y;
    }
    y = tmp_0;
    var tmp_1;
    if ($super === VOID) {
      tmp_1 = Velocity__copy_impl_c7yiyt($this, x, y);
    } else {
      var tmp_2 = $super;
      tmp_1 = (tmp_2 == null ? null : new Velocity(tmp_2)).copy_sl8rh9_k$.call(new Velocity($this), x, y).packedValue_1;
    }
    return tmp_1;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.Zero_1 = _Velocity___init__impl__tjpg0s(new Long(0, 0));
  }
  protoOf(Companion_9).get_Zero_m4dhvl_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Velocity__unaryMinus_impl_i21u3z($this) {
    return _Velocity___init__impl__tjpg0s(bitwiseXor(_get_packedValue__aj623s($this), new Long(-2147483648, -2147483648)));
  }
  function Velocity__minus_impl_w0cg92($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _get_packedValue__aj623s($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _get_packedValue__aj623s(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = tmp - floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _get_packedValue__aj623s($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _get_packedValue__aj623s(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 - floatFromBits(bits_2);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$12 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Velocity___init__impl__tjpg0s(tmp$ret$12);
  }
  function Velocity__plus_impl_9g3s6u($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _get_packedValue__aj623s($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _get_packedValue__aj623s(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = tmp + floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _get_packedValue__aj623s($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _get_packedValue__aj623s(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 + floatFromBits(bits_2);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$12 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Velocity___init__impl__tjpg0s(tmp$ret$12);
  }
  function Velocity__times_impl_yav0ik($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _get_packedValue__aj623s($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = floatFromBits(bits) * operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _get_packedValue__aj623s($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) * operand;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Velocity___init__impl__tjpg0s(tmp$ret$6);
  }
  function Velocity__div_impl_gomhdz($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _get_packedValue__aj623s($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = floatFromBits(bits) / operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _get_packedValue__aj623s($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) / operand;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Velocity___init__impl__tjpg0s(tmp$ret$6);
  }
  function Velocity__rem_impl_vafuuo($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _get_packedValue__aj623s($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = floatFromBits(bits) % operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _get_packedValue__aj623s($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) % operand;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Velocity___init__impl__tjpg0s(tmp$ret$6);
  }
  function Velocity__toString_impl_n5zo2k($this) {
    return '(' + _Velocity___get_x__impl__qqcikv($this) + ', ' + _Velocity___get_y__impl__239yhc($this) + ') px/sec';
  }
  function Velocity__hashCode_impl_q3yh3p($this) {
    return $this.hashCode();
  }
  function Velocity__equals_impl_327knj($this, other) {
    if (!(other instanceof Velocity))
      return false;
    var tmp0_other_with_cast = other instanceof Velocity ? other.packedValue_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Velocity(packedValue) {
    Companion_getInstance_10();
    this.packedValue_1 = packedValue;
  }
  protoOf(Velocity).toString = function () {
    return Velocity__toString_impl_n5zo2k(this.packedValue_1);
  };
  protoOf(Velocity).hashCode = function () {
    return Velocity__hashCode_impl_q3yh3p(this.packedValue_1);
  };
  protoOf(Velocity).equals = function (other) {
    return Velocity__equals_impl_327knj(this.packedValue_1, other);
  };
  function Velocity_0(x, y) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(x));
    var v2 = fromInt(toRawBits(y));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Velocity___init__impl__tjpg0s(tmp$ret$0);
  }
  function NoOp() {
  }
  protoOf(NoOp).equals = function (other) {
    if (!(other instanceof NoOp))
      return false;
    other instanceof NoOp || THROW_CCE();
    return true;
  };
  protoOf(NoOp).hashCode = function () {
    return 0;
  };
  protoOf(NoOp).toString = function () {
    return '@androidx.compose.ui.unit.internal.NoOp(' + ')';
  };
  //region block: post-declaration
  protoOf(DensityImpl).toPx_mycba2_k$ = toPx;
  protoOf(DensityImpl).toPx_plt68j_k$ = toPx_0;
  protoOf(DensityImpl).roundToPx_yb7vg8_k$ = roundToPx;
  protoOf(DensityImpl).roundToPx_cw9j9b_k$ = roundToPx_0;
  protoOf(DensityImpl).toDp_fjakf4_k$ = toDp_0;
  protoOf(DensityImpl).toDp_hs0w0_k$ = toDp_1;
  protoOf(DensityImpl).toDp_m8rr7q_k$ = toDp;
  protoOf(DensityImpl).toSp_97l7ws_k$ = toSp_0;
  protoOf(DensityImpl).toSp_fixg4_k$ = toSp_1;
  protoOf(DensityImpl).toSp_apeb1_k$ = toSp;
  protoOf(DensityImpl).toRect_ysncr2_k$ = toRect;
  protoOf(DensityImpl).toSize_7jb2uc_k$ = toSize;
  protoOf(DensityImpl).toDpSize_5hpeec_k$ = toDpSize;
  //endregion
  //region block: init
  androidx_compose_ui_unit_DpRect$stable = 0;
  androidx_compose_ui_unit_IntRect$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Constraints_0;
  _.$_$.b = Constraints;
  _.$_$.c = roundToPx;
  _.$_$.d = roundToPx_0;
  _.$_$.e = toDpSize;
  _.$_$.f = toDp_1;
  _.$_$.g = toDp_0;
  _.$_$.h = toPx;
  _.$_$.i = toPx_0;
  _.$_$.j = toRect;
  _.$_$.k = toSize;
  _.$_$.l = toSp_0;
  _.$_$.m = toSp_1;
  _.$_$.n = Density_0;
  _.$_$.o = Density;
  _.$_$.p = DpOffset;
  _.$_$.q = DpSize_0;
  _.$_$.r = DpSize;
  _.$_$.s = Dp;
  _.$_$.t = toDp;
  _.$_$.u = toSp;
  _.$_$.v = IntOffset;
  _.$_$.w = IntRect_0;
  _.$_$.x = IntRect;
  _.$_$.y = IntSize;
  _.$_$.z = TextUnitType;
  _.$_$.a1 = TextUnit_0;
  _.$_$.b1 = TextUnit;
  _.$_$.c1 = Velocity_0;
  _.$_$.d1 = Velocity;
  _.$_$.e1 = get_center;
  _.$_$.f1 = checkArithmetic_0;
  _.$_$.g1 = checkArithmetic;
  _.$_$.h1 = constrainHeight;
  _.$_$.i1 = constrainWidth;
  _.$_$.j1 = constrain;
  _.$_$.k1 = constrain_0;
  _.$_$.l1 = get_em_0;
  _.$_$.m1 = get_em;
  _.$_$.n1 = get_em_1;
  _.$_$.o1 = lerp_0;
  _.$_$.p1 = lerp_1;
  _.$_$.q1 = minus;
  _.$_$.r1 = offset;
  _.$_$.s1 = pack;
  _.$_$.t1 = plus;
  _.$_$.u1 = roundToIntRect;
  _.$_$.v1 = roundToIntSize;
  _.$_$.w1 = round;
  _.$_$.x1 = get_sp_1;
  _.$_$.y1 = get_sp_0;
  _.$_$.z1 = get_sp;
  _.$_$.a2 = toIntRect;
  _.$_$.b2 = toIntSize;
  _.$_$.c2 = toRect_0;
  _.$_$.d2 = toSize_0;
  _.$_$.e2 = LayoutDirection_Ltr_getInstance;
  _.$_$.f2 = LayoutDirection_Rtl_getInstance;
  _.$_$.g2 = DpRect_init_$Create$;
  _.$_$.h2 = _Constraints___init__impl__v8ud31;
  _.$_$.i2 = _Constraints___get_hasBoundedHeight__impl__bsh4rw;
  _.$_$.j2 = _Constraints___get_hasBoundedWidth__impl__7hd0wr;
  _.$_$.k2 = _Constraints___get_hasFixedHeight__impl__y56fxx;
  _.$_$.l2 = _Constraints___get_hasFixedWidth__impl__4p17wc;
  _.$_$.m2 = Constraints__hashCode_impl_ij7484;
  _.$_$.n2 = _Constraints___get_maxHeight__impl__dt3e8z;
  _.$_$.o2 = _Constraints___get_maxWidth__impl__uuyqc;
  _.$_$.p2 = _Constraints___get_minHeight__impl__ev4bgx;
  _.$_$.q2 = _Constraints___get_minWidth__impl__hi9lfi;
  _.$_$.r2 = Constraints__toString_impl_37yskr;
  _.$_$.s2 = _Constraints___get_value__impl__3ah2ax;
  _.$_$.t2 = _Dp___init__impl__ms3zkb;
  _.$_$.u2 = Dp__compareTo_impl_tlg3dl;
  _.$_$.v2 = Dp__hashCode_impl_sxkrra;
  _.$_$.w2 = Dp__toString_impl_kcddez;
  _.$_$.x2 = _Dp___get_value__impl__geb1vb;
  _.$_$.y2 = _DpOffset___init__impl__yq36wy;
  _.$_$.z2 = DpOffset__hashCode_impl_mjg9df;
  _.$_$.a3 = DpOffset__toString_impl_qqhvsu;
  _.$_$.b3 = _DpOffset___get_x__impl__uauqb5;
  _.$_$.c3 = _DpOffset___get_y__impl__1h898y;
  _.$_$.d3 = _DpSize___init__impl__t4mur0;
  _.$_$.e3 = _IntOffset___init__impl__rq8h7b;
  _.$_$.f3 = IntOffset__hashCode_impl_w5rrxs;
  _.$_$.g3 = IntOffset__minus_impl_4m69hb;
  _.$_$.h3 = _IntOffset___get_packedValue__impl__982pbx;
  _.$_$.i3 = IntOffset__plus_impl_nqoa9b;
  _.$_$.j3 = IntOffset__toString_impl_h46d8h;
  _.$_$.k3 = _IntOffset___get_x__impl__qiqr5o;
  _.$_$.l3 = _IntOffset___get_y__impl__2avpwj;
  _.$_$.m3 = _IntSize___init__impl__emcjft;
  _.$_$.n3 = IntSize__hashCode_impl_gm9mta;
  _.$_$.o3 = _IntSize___get_packedValue__impl__uho7jf;
  _.$_$.p3 = IntSize__toString_impl_54w9zl;
  _.$_$.q3 = _TextUnit___init__impl__r5fj1s;
  _.$_$.r3 = TextUnit__hashCode_impl_qsmeov;
  _.$_$.s3 = _TextUnit___get_isEm__impl__esrmtl;
  _.$_$.t3 = _TextUnit___get_isSp__impl__8c3r6q;
  _.$_$.u3 = _TextUnit___get_packedValue__impl__it60w4;
  _.$_$.v3 = _TextUnit___get_rawType__impl__tu8yq5;
  _.$_$.w3 = TextUnit__toString_impl_51ghw0;
  _.$_$.x3 = _TextUnit___get_type__impl__uc2olt;
  _.$_$.y3 = _TextUnit___get_value__impl__hpbx0k;
  _.$_$.z3 = Velocity__minus_impl_w0cg92;
  _.$_$.a4 = Velocity__plus_impl_9g3s6u;
  _.$_$.b4 = Velocity__times_impl_yav0ik;
  _.$_$.c4 = Velocity__toString_impl_n5zo2k;
  _.$_$.d4 = _Velocity___get_x__impl__qqcikv;
  _.$_$.e4 = _Velocity___get_y__impl__239yhc;
  _.$_$.f4 = Constraints__copy$default_impl_f452rp;
  _.$_$.g4 = IntOffset__copy$default_impl_1y5pbb;
  _.$_$.h4 = Velocity__copy$default_impl_eql69u;
  _.$_$.i4 = Companion_getInstance_0;
  _.$_$.j4 = Companion_getInstance_1;
  _.$_$.k4 = Companion_getInstance_4;
  _.$_$.l4 = Companion_getInstance_2;
  _.$_$.m4 = Companion_getInstance_5;
  _.$_$.n4 = Companion_getInstance_6;
  _.$_$.o4 = Companion_getInstance_7;
  _.$_$.p4 = Companion_getInstance_8;
  _.$_$.q4 = Companion_getInstance_9;
  _.$_$.r4 = Companion_getInstance_10;
  //endregion
  return _;
}));
