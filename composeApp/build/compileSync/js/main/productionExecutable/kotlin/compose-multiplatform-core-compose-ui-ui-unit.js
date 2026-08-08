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
  var Long = kotlin_kotlin.$_$.hd;
  var bitwiseAnd = kotlin_kotlin.$_$.t7;
  var convertToInt = kotlin_kotlin.$_$.x7;
  var shiftRight = kotlin_kotlin.$_$.j8;
  var Unit_instance = kotlin_kotlin.$_$.b3;
  var VOID = kotlin_kotlin.$_$.b;
  var protoOf = kotlin_kotlin.$_$.z9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i9;
  var THROW_CCE = kotlin_kotlin.$_$.md;
  var equalsLong = kotlin_kotlin.$_$.a8;
  var initMetadataForClass = kotlin_kotlin.$_$.h9;
  var fromInt = kotlin_kotlin.$_$.b8;
  var shiftLeft = kotlin_kotlin.$_$.h8;
  var bitwiseOr = kotlin_kotlin.$_$.u7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var roundToInt = kotlin_kotlin.$_$.ea;
  var isInfinite = kotlin_kotlin.$_$.xd;
  var equals = kotlin_kotlin.$_$.z8;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var toRawBits = kotlin_kotlin.$_$.me;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.u2;
  var floatFromBits = kotlin_kotlin.$_$.a9;
  var initMetadataForInterface = kotlin_kotlin.$_$.l9;
  var getNumberHashCode = kotlin_kotlin.$_$.d9;
  var compareTo = kotlin_kotlin.$_$.v8;
  var isNaN_0 = kotlin_kotlin.$_$.yd;
  var Comparable = kotlin_kotlin.$_$.zc;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var objectCreate = kotlin_kotlin.$_$.y9;
  var toString = kotlin_kotlin.$_$.ba;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f;
  var Enum = kotlin_kotlin.$_$.bd;
  var shiftRightUnsigned = kotlin_kotlin.$_$.i8;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Constraints, 'Constraints');
  function toDp(_this__u8e3s4) {
    // Inline function 'kotlin.check' call
    if (!equals(_TextUnit___get_type__impl__uc2olt(_this__u8e3s4), Companion_getInstance_9().e4n_1)) {
      var message = 'Only Sp can convert to Px';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _Dp___init__impl__ms3zkb(_TextUnit___get_value__impl__hpbx0k(_this__u8e3s4) * this.n4n());
  }
  initMetadataForInterface(FontScalingLinear, 'FontScalingLinear');
  function toPx(_this__u8e3s4) {
    return _Dp___get_value__impl__geb1vb(_this__u8e3s4) * this.z4m();
  }
  function roundToPx(_this__u8e3s4) {
    var px = this.a4n(_this__u8e3s4);
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
    if (!equals(_TextUnit___get_type__impl__uc2olt(_this__u8e3s4), Companion_getInstance_9().e4n_1)) {
      var tmp$ret$0 = 'Only Sp can convert to Px';
      throwIllegalStateException(tmp$ret$0);
    }
    return this.a4n(this.g4n(_this__u8e3s4));
  }
  function toDp_0(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = _this__u8e3s4 / this.z4m();
    return _Dp___init__impl__ms3zkb(this_0);
  }
  function toDp_1(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = _this__u8e3s4 / this.z4m();
    return _Dp___init__impl__ms3zkb(this_0);
  }
  function toSize(_this__u8e3s4) {
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!equalsLong(_DpSize___get_packedValue__impl__jx4au8(_this__u8e3s4), new Long(2143289344, 2143289344))) {
      var tmp0 = this.a4n(_DpSize___get_width__impl__o3d5gt(_this__u8e3s4));
      // Inline function 'androidx.compose.ui.geometry.Size' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = this.a4n(_DpSize___get_height__impl__5xueo2(_this__u8e3s4));
      var v1 = fromInt(toRawBits(tmp0));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      tmp = _Size___init__impl__aywn0g(tmp$ret$1);
    } else {
      tmp = Companion_getInstance().v3u_1;
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
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp$ret$4 = floatFromBits(bits);
      var tmp_0 = this.i4n(tmp$ret$4);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var tmp$ret$8 = floatFromBits(bits_0);
      tmp = DpSize_0(tmp_0, this.i4n(tmp$ret$8));
    } else {
      tmp = Companion_getInstance_2().m4n_1;
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
  //endregion
  function _Constraints___init__impl__v8ud31(value) {
    return value;
  }
  function _Constraints___get_value__impl__3ah2ax($this) {
    return $this;
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
      tmp = (tmp_0 == null ? null : new Constraints(tmp_0)).t4m.call(new Constraints($this), minWidth, maxWidth, minHeight, maxHeight).s4m_1;
    }
    return tmp;
  }
  function Constraints__toString_impl_37yskr($this) {
    var maxWidth = _Constraints___get_maxWidth__impl__uuyqc($this);
    var maxWidthStr = maxWidth === 2147483647 ? 'Infinity' : maxWidth.toString();
    var maxHeight = _Constraints___get_maxHeight__impl__dt3e8z($this);
    var maxHeightStr = maxHeight === 2147483647 ? 'Infinity' : maxHeight.toString();
    return 'Constraints(minWidth = ' + _Constraints___get_minWidth__impl__hi9lfi($this) + ', maxWidth = ' + maxWidthStr + ', ' + ('minHeight = ' + _Constraints___get_minHeight__impl__ev4bgx($this) + ', maxHeight = ' + maxHeightStr + ')');
  }
  function Companion() {
    this.u4m_1 = 2147483647;
  }
  protoOf(Companion).v4m = function (width, height) {
    // Inline function 'androidx.compose.ui.unit.requirePrecondition' call
    if (!!!(width >= 0 & height >= 0)) {
      var tmp$ret$0 = 'width and height must be >= 0';
      throwIllegalArgumentException(tmp$ret$0);
    }
    return createConstraints(width, width, height, height);
  };
  protoOf(Companion).w4m = function (width) {
    // Inline function 'androidx.compose.ui.unit.requirePrecondition' call
    if (!(width >= 0)) {
      var tmp$ret$0 = 'width must be >= 0';
      throwIllegalArgumentException(tmp$ret$0);
    }
    return createConstraints(width, width, 0, 2147483647);
  };
  protoOf(Companion).x4m = function (minWidth, maxWidth, minHeight, maxHeight) {
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
  protoOf(Companion).y4m = function (minWidth, maxWidth, minHeight, maxHeight) {
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
    return Companion_instance;
  }
  function Constraints__hashCode_impl_ij7484($this) {
    return $this.hashCode();
  }
  function Constraints__equals_impl_33vs20($this, other) {
    if (!(other instanceof Constraints))
      return false;
    var tmp0_other_with_cast = other instanceof Constraints ? other.s4m_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Constraints(value) {
    this.s4m_1 = value;
  }
  protoOf(Constraints).toString = function () {
    return Constraints__toString_impl_37yskr(this.s4m_1);
  };
  protoOf(Constraints).hashCode = function () {
    return Constraints__hashCode_impl_ij7484(this.s4m_1);
  };
  protoOf(Constraints).equals = function (other) {
    return Constraints__equals_impl_33vs20(this.s4m_1, other);
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
  function bitsNeedForSizeUnchecked(size) {
    return size < 8191 ? 13 : size < 32767 ? 15 : size < 65535 ? 16 : size < 262143 ? 18 : 255;
  }
  function throwInvalidConstraintException(widthVal, heightVal) {
    throw IllegalArgumentException_init_$Create$("Can't represent a width of " + widthVal + ' and height of ' + heightVal + ' in Constraints');
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
    this.o4n_1 = density;
    this.p4n_1 = fontScale;
  }
  protoOf(DensityImpl).z4m = function () {
    return this.o4n_1;
  };
  protoOf(DensityImpl).n4n = function () {
    return this.p4n_1;
  };
  protoOf(DensityImpl).toString = function () {
    return 'DensityImpl(density=' + this.o4n_1 + ', fontScale=' + this.p4n_1 + ')';
  };
  protoOf(DensityImpl).hashCode = function () {
    var result = getNumberHashCode(this.o4n_1);
    result = imul(result, 31) + getNumberHashCode(this.p4n_1) | 0;
    return result;
  };
  protoOf(DensityImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DensityImpl))
      return false;
    var tmp0_other_with_cast = other instanceof DensityImpl ? other : THROW_CCE();
    if (!equals(this.o4n_1, tmp0_other_with_cast.o4n_1))
      return false;
    if (!equals(this.p4n_1, tmp0_other_with_cast.p4n_1))
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
  function Dp__compareTo_impl_tlg3dl($this, other) {
    return compareTo(_Dp___get_value__impl__geb1vb($this), _Dp___get_value__impl__geb1vb(other));
  }
  function Dp__compareTo_impl_tlg3dl_0($this, other) {
    return Dp__compareTo_impl_tlg3dl($this.q4n_1, other instanceof Dp ? other.q4n_1 : THROW_CCE());
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
    this.r4n_1 = _Dp___init__impl__ms3zkb(0.0);
    this.s4n_1 = _Dp___init__impl__ms3zkb(Infinity);
    this.t4n_1 = _Dp___init__impl__ms3zkb(NaN);
  }
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
    var tmp0_other_with_cast = other instanceof Dp ? other.q4n_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Dp(value) {
    Companion_getInstance_1();
    this.q4n_1 = value;
  }
  protoOf(Dp).u4n = function (other) {
    return Dp__compareTo_impl_tlg3dl(this.q4n_1, other);
  };
  protoOf(Dp).d = function (other) {
    return Dp__compareTo_impl_tlg3dl_0(this, other);
  };
  protoOf(Dp).toString = function () {
    return Dp__toString_impl_kcddez(this.q4n_1);
  };
  protoOf(Dp).hashCode = function () {
    return Dp__hashCode_impl_sxkrra(this.q4n_1);
  };
  protoOf(Dp).equals = function (other) {
    return Dp__equals_impl_bc4gpq(this.q4n_1, other);
  };
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
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = floatFromBits(bits);
    return _Dp___init__impl__ms3zkb(this_0);
  }
  function _DpSize___get_height__impl__5xueo2($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _DpSize___get_packedValue__impl__jx4au8($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = floatFromBits(bits);
    return _Dp___init__impl__ms3zkb(this_0);
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
    this.l4n_1 = _DpSize___init__impl__t4mur0(new Long(0, 0));
    this.m4n_1 = _DpSize___init__impl__t4mur0(new Long(2143289344, 2143289344));
  }
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
    var tmp0_other_with_cast = other instanceof DpSize ? other.v4n_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function DpSize(packedValue) {
    Companion_getInstance_2();
    this.v4n_1 = packedValue;
  }
  protoOf(DpSize).toString = function () {
    return DpSize__toString_impl_1vggic(this.v4n_1);
  };
  protoOf(DpSize).hashCode = function () {
    return DpSize__hashCode_impl_jvpgaj(this.v4n_1);
  };
  protoOf(DpSize).equals = function (other) {
    return DpSize__equals_impl_rpnn4x(this.v4n_1, other);
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
  function lerp_0(start, stop, fraction) {
    return _Dp___init__impl__ms3zkb(lerp(_Dp___get_value__impl__geb1vb(start), _Dp___get_value__impl__geb1vb(stop), fraction));
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
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function DpRect(left, top, right, bottom) {
    this.w4n_1 = left;
    this.x4n_1 = top;
    this.y4n_1 = right;
    this.z4n_1 = bottom;
  }
  protoOf(DpRect).toString = function () {
    return 'DpRect(left=' + Dp__toString_impl_kcddez(this.w4n_1) + ', top=' + Dp__toString_impl_kcddez(this.x4n_1) + ', right=' + Dp__toString_impl_kcddez(this.y4n_1) + ', bottom=' + Dp__toString_impl_kcddez(this.z4n_1) + ')';
  };
  protoOf(DpRect).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.w4n_1);
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.x4n_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.y4n_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.z4n_1) | 0;
    return result;
  };
  protoOf(DpRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DpRect))
      return false;
    var tmp0_other_with_cast = other instanceof DpRect ? other : THROW_CCE();
    if (!equals(this.w4n_1, tmp0_other_with_cast.w4n_1))
      return false;
    if (!equals(this.x4n_1, tmp0_other_with_cast.x4n_1))
      return false;
    if (!equals(this.y4n_1, tmp0_other_with_cast.y4n_1))
      return false;
    if (!equals(this.z4n_1, tmp0_other_with_cast.z4n_1))
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
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = floatFromBits(bits);
    return _Dp___init__impl__ms3zkb(this_0);
  }
  function _DpOffset___get_y__impl__1h898y($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _DpOffset___get_packedValue__impl__7zqn8y($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = floatFromBits(bits);
    return _Dp___init__impl__ms3zkb(this_0);
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
    this.a4o_1 = _DpOffset___init__impl__yq36wy(new Long(0, 0));
    this.b4o_1 = _DpOffset___init__impl__yq36wy(new Long(2143289344, 2143289344));
  }
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
    var tmp0_other_with_cast = other instanceof DpOffset ? other.c4o_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function DpOffset(packedValue) {
    Companion_getInstance_4();
    this.c4o_1 = packedValue;
  }
  protoOf(DpOffset).toString = function () {
    return DpOffset__toString_impl_qqhvsu(this.c4o_1);
  };
  protoOf(DpOffset).hashCode = function () {
    return DpOffset__hashCode_impl_mjg9df(this.c4o_1);
  };
  protoOf(DpOffset).equals = function (other) {
    return DpOffset__equals_impl_7fc41d(this.c4o_1, other);
  };
  function FontScalingLinear() {
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
      tmp_1 = (tmp_2 == null ? null : new IntOffset(tmp_2)).e4o.call(new IntOffset($this), x, y).d4o_1;
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
  function IntOffset__toString_impl_h46d8h($this) {
    return '(' + _IntOffset___get_x__impl__qiqr5o($this) + ', ' + _IntOffset___get_y__impl__2avpwj($this) + ')';
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.f4o_1 = _IntOffset___init__impl__rq8h7b(new Long(0, 0));
    this.g4o_1 = _IntOffset___init__impl__rq8h7b(new Long(2147483647, 2147483647));
  }
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
    var tmp0_other_with_cast = other instanceof IntOffset ? other.d4o_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function IntOffset(packedValue) {
    Companion_getInstance_5();
    this.d4o_1 = packedValue;
  }
  protoOf(IntOffset).toString = function () {
    return IntOffset__toString_impl_h46d8h(this.d4o_1);
  };
  protoOf(IntOffset).hashCode = function () {
    return IntOffset__hashCode_impl_w5rrxs(this.d4o_1);
  };
  protoOf(IntOffset).equals = function (other) {
    return IntOffset__equals_impl_45wak4(this.d4o_1, other);
  };
  function round(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = floatFromBits(bits);
    var tmp0 = roundToInt(this_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = roundToInt(this_1);
    var tmp$ret$12 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$12);
  }
  function plus(_this__u8e3s4, offset) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits) + _IntOffset___get_x__impl__qiqr5o(offset);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
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
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits) - _IntOffset___get_x__impl__qiqr5o(offset);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
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
    this.h4o_1 = new IntRect(0, 0, 0, 0);
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function IntRect(left, top, right, bottom) {
    Companion_getInstance_6();
    this.i4o_1 = left;
    this.j4o_1 = top;
    this.k4o_1 = right;
    this.l4o_1 = bottom;
  }
  protoOf(IntRect).m4o = function (translateX, translateY) {
    return new IntRect(this.i4o_1 + translateX | 0, this.j4o_1 + translateY | 0, this.k4o_1 + translateX | 0, this.l4o_1 + translateY | 0);
  };
  protoOf(IntRect).n4o = function () {
    var tmp0 = this.i4o_1;
    // Inline function 'androidx.compose.ui.unit.IntOffset' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = this.j4o_1;
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$0);
  };
  protoOf(IntRect).o4o = function (offset) {
    return _IntOffset___get_x__impl__qiqr5o(offset) >= this.i4o_1 && _IntOffset___get_x__impl__qiqr5o(offset) < this.k4o_1 && _IntOffset___get_y__impl__2avpwj(offset) >= this.j4o_1 && _IntOffset___get_y__impl__2avpwj(offset) < this.l4o_1;
  };
  protoOf(IntRect).toString = function () {
    return 'IntRect.fromLTRB(' + ('' + this.i4o_1 + ', ') + ('' + this.j4o_1 + ', ') + ('' + this.k4o_1 + ', ') + ('' + this.l4o_1 + ')');
  };
  protoOf(IntRect).hashCode = function () {
    var result = this.i4o_1;
    result = imul(result, 31) + this.j4o_1 | 0;
    result = imul(result, 31) + this.k4o_1 | 0;
    result = imul(result, 31) + this.l4o_1 | 0;
    return result;
  };
  protoOf(IntRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IntRect))
      return false;
    var tmp0_other_with_cast = other instanceof IntRect ? other : THROW_CCE();
    if (!(this.i4o_1 === tmp0_other_with_cast.i4o_1))
      return false;
    if (!(this.j4o_1 === tmp0_other_with_cast.j4o_1))
      return false;
    if (!(this.k4o_1 === tmp0_other_with_cast.k4o_1))
      return false;
    if (!(this.l4o_1 === tmp0_other_with_cast.l4o_1))
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
  function toRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.i4o_1, _this__u8e3s4.j4o_1, _this__u8e3s4.k4o_1, _this__u8e3s4.l4o_1);
  }
  function _IntSize___init__impl__emcjft(packedValue) {
    return packedValue;
  }
  function _IntSize___get_packedValue__impl__uho7jf($this) {
    return $this;
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
    this.p4o_1 = _IntSize___init__impl__emcjft(new Long(0, 0));
  }
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
    var tmp0_other_with_cast = other instanceof IntSize ? other.q4o_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function IntSize(packedValue) {
    Companion_getInstance_7();
    this.q4o_1 = packedValue;
  }
  protoOf(IntSize).toString = function () {
    return IntSize__toString_impl_54w9zl(this.q4o_1);
  };
  protoOf(IntSize).hashCode = function () {
    return IntSize__hashCode_impl_gm9mta(this.q4o_1);
  };
  protoOf(IntSize).equals = function (other) {
    return IntSize__equals_impl_i3v38e(this.q4o_1, other);
  };
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
  function toIntRect(_this__u8e3s4) {
    return IntRect_0(Companion_getInstance_5().f4o_1, _this__u8e3s4);
  }
  var LayoutDirection_Ltr_instance;
  var LayoutDirection_Rtl_instance;
  var LayoutDirection_entriesInitialized;
  function LayoutDirection_initEntries() {
    if (LayoutDirection_entriesInitialized)
      return Unit_instance;
    LayoutDirection_entriesInitialized = true;
    LayoutDirection_Ltr_instance = new LayoutDirection('Ltr', 0);
    LayoutDirection_Rtl_instance = new LayoutDirection('Rtl', 1);
  }
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
  function TextUnit__toString_impl_51ghw0($this) {
    var tmp0_subject = _TextUnit___get_type__impl__uc2olt($this);
    return equals(tmp0_subject, Companion_getInstance_9().d4n_1) ? 'Unspecified' : equals(tmp0_subject, Companion_getInstance_9().e4n_1) ? '' + _TextUnit___get_value__impl__hpbx0k($this) + '.sp' : equals(tmp0_subject, Companion_getInstance_9().f4n_1) ? '' + _TextUnit___get_value__impl__hpbx0k($this) + '.em' : 'Invalid';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r4o_1 = [new TextUnitType(Companion_getInstance_9().d4n_1), new TextUnitType(Companion_getInstance_9().e4n_1), new TextUnitType(Companion_getInstance_9().f4n_1)];
    this.s4o_1 = pack(new Long(0, 0), NaN);
  }
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
    return Companion_getInstance_8().r4o_1[convertToInt(shiftRightUnsigned(_TextUnit___get_rawType__impl__tu8yq5($this), 32))].t4o_1;
  }
  function _TextUnit___get_isSp__impl__8c3r6q($this) {
    return equalsLong(_TextUnit___get_rawType__impl__tu8yq5($this), new Long(0, 1));
  }
  function _TextUnit___get_isEm__impl__esrmtl($this) {
    return equalsLong(_TextUnit___get_rawType__impl__tu8yq5($this), new Long(0, 2));
  }
  function _TextUnit___get_value__impl__hpbx0k($this) {
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(bitwiseAnd(_TextUnit___get_packedValue__impl__it60w4($this), new Long(-1, 0)));
    return floatFromBits(bits);
  }
  function TextUnit__hashCode_impl_qsmeov($this) {
    return $this.hashCode();
  }
  function TextUnit__equals_impl_49w9tp($this, other) {
    if (!(other instanceof TextUnit))
      return false;
    var tmp0_other_with_cast = other instanceof TextUnit ? other.u4o_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextUnit(packedValue) {
    Companion_getInstance_8();
    this.u4o_1 = packedValue;
  }
  protoOf(TextUnit).toString = function () {
    return TextUnit__toString_impl_51ghw0(this.u4o_1);
  };
  protoOf(TextUnit).hashCode = function () {
    return TextUnit__hashCode_impl_qsmeov(this.u4o_1);
  };
  protoOf(TextUnit).equals = function (other) {
    return TextUnit__equals_impl_49w9tp(this.u4o_1, other);
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
    return equals($this, Companion_getInstance_9().d4n_1) ? 'Unspecified' : equals($this, Companion_getInstance_9().e4n_1) ? 'Sp' : equals($this, Companion_getInstance_9().f4n_1) ? 'Em' : 'Invalid';
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.d4n_1 = _TextUnitType___init__impl__br87qi(new Long(0, 0));
    this.e4n_1 = _TextUnitType___init__impl__br87qi(new Long(0, 1));
    this.f4n_1 = _TextUnitType___init__impl__br87qi(new Long(0, 2));
  }
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
    var tmp0_other_with_cast = other instanceof TextUnitType ? other.t4o_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextUnitType(type) {
    Companion_getInstance_9();
    this.t4o_1 = type;
  }
  protoOf(TextUnitType).toString = function () {
    return TextUnitType__toString_impl_x93gyy(this.t4o_1);
  };
  protoOf(TextUnitType).hashCode = function () {
    return TextUnitType__hashCode_impl_g0uo7b(this.t4o_1);
  };
  protoOf(TextUnitType).equals = function (other) {
    return TextUnitType__equals_impl_nrbaqr(this.t4o_1, other);
  };
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
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    return floatFromBits(bits);
  }
  function _Velocity___get_y__impl__239yhc($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _get_packedValue__aj623s($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    return floatFromBits(bits);
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
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
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
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
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
      tmp_1 = (tmp_2 == null ? null : new Velocity(tmp_2)).w4o.call(new Velocity($this), x, y).v4o_1;
    }
    return tmp_1;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.x4o_1 = _Velocity___init__impl__tjpg0s(new Long(0, 0));
  }
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Velocity__minus_impl_w0cg92($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _get_packedValue__aj623s($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _get_packedValue__aj623s(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    var tmp0 = tmp - floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _get_packedValue__aj623s($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _get_packedValue__aj623s(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
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
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _get_packedValue__aj623s(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    var tmp0 = tmp + floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _get_packedValue__aj623s($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _get_packedValue__aj623s(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 + floatFromBits(bits_2);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$12 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Velocity___init__impl__tjpg0s(tmp$ret$12);
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
    var tmp0_other_with_cast = other instanceof Velocity ? other.v4o_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Velocity(packedValue) {
    Companion_getInstance_10();
    this.v4o_1 = packedValue;
  }
  protoOf(Velocity).toString = function () {
    return Velocity__toString_impl_n5zo2k(this.v4o_1);
  };
  protoOf(Velocity).hashCode = function () {
    return Velocity__hashCode_impl_q3yh3p(this.v4o_1);
  };
  protoOf(Velocity).equals = function (other) {
    return Velocity__equals_impl_327knj(this.v4o_1, other);
  };
  function Velocity_0(x, y) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(x));
    var v2 = fromInt(toRawBits(y));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Velocity___init__impl__tjpg0s(tmp$ret$0);
  }
  //region block: post-declaration
  protoOf(DensityImpl).a4n = toPx;
  protoOf(DensityImpl).c4n = toPx_0;
  protoOf(DensityImpl).b4n = roundToPx;
  protoOf(DensityImpl).h4n = toDp_0;
  protoOf(DensityImpl).i4n = toDp_1;
  protoOf(DensityImpl).g4n = toDp;
  protoOf(DensityImpl).j4n = toSize;
  protoOf(DensityImpl).k4n = toDpSize;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  androidx_compose_ui_unit_DpRect$stable = 0;
  Companion_instance_2 = new Companion_2();
  androidx_compose_ui_unit_IntRect$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Constraints_0;
  _.$_$.b = Constraints;
  _.$_$.c = roundToPx;
  _.$_$.d = toDpSize;
  _.$_$.e = toDp_1;
  _.$_$.f = toDp_0;
  _.$_$.g = toPx;
  _.$_$.h = toPx_0;
  _.$_$.i = toSize;
  _.$_$.j = Density_0;
  _.$_$.k = Density;
  _.$_$.l = DpOffset;
  _.$_$.m = DpSize_0;
  _.$_$.n = DpSize;
  _.$_$.o = Dp;
  _.$_$.p = toDp;
  _.$_$.q = IntOffset;
  _.$_$.r = IntRect_0;
  _.$_$.s = IntSize;
  _.$_$.t = TextUnitType;
  _.$_$.u = TextUnit_0;
  _.$_$.v = TextUnit;
  _.$_$.w = Velocity_0;
  _.$_$.x = Velocity;
  _.$_$.y = get_center;
  _.$_$.z = checkArithmetic;
  _.$_$.a1 = constrainHeight;
  _.$_$.b1 = constrainWidth;
  _.$_$.c1 = constrain;
  _.$_$.d1 = constrain_0;
  _.$_$.e1 = lerp_0;
  _.$_$.f1 = lerp_1;
  _.$_$.g1 = minus;
  _.$_$.h1 = offset;
  _.$_$.i1 = pack;
  _.$_$.j1 = plus;
  _.$_$.k1 = round;
  _.$_$.l1 = get_sp_1;
  _.$_$.m1 = get_sp_0;
  _.$_$.n1 = get_sp;
  _.$_$.o1 = toIntRect;
  _.$_$.p1 = toRect;
  _.$_$.q1 = toSize_0;
  _.$_$.r1 = LayoutDirection_Ltr_getInstance;
  _.$_$.s1 = LayoutDirection_Rtl_getInstance;
  _.$_$.t1 = DpRect_init_$Create$;
  _.$_$.u1 = _Constraints___init__impl__v8ud31;
  _.$_$.v1 = _Constraints___get_hasBoundedHeight__impl__bsh4rw;
  _.$_$.w1 = _Constraints___get_hasBoundedWidth__impl__7hd0wr;
  _.$_$.x1 = _Constraints___get_hasFixedHeight__impl__y56fxx;
  _.$_$.y1 = _Constraints___get_hasFixedWidth__impl__4p17wc;
  _.$_$.z1 = Constraints__hashCode_impl_ij7484;
  _.$_$.a2 = _Constraints___get_maxHeight__impl__dt3e8z;
  _.$_$.b2 = _Constraints___get_maxWidth__impl__uuyqc;
  _.$_$.c2 = _Constraints___get_minHeight__impl__ev4bgx;
  _.$_$.d2 = _Constraints___get_minWidth__impl__hi9lfi;
  _.$_$.e2 = Constraints__toString_impl_37yskr;
  _.$_$.f2 = _Constraints___get_value__impl__3ah2ax;
  _.$_$.g2 = _Dp___init__impl__ms3zkb;
  _.$_$.h2 = Dp__compareTo_impl_tlg3dl;
  _.$_$.i2 = Dp__hashCode_impl_sxkrra;
  _.$_$.j2 = Dp__toString_impl_kcddez;
  _.$_$.k2 = _Dp___get_value__impl__geb1vb;
  _.$_$.l2 = _DpOffset___init__impl__yq36wy;
  _.$_$.m2 = _DpOffset___get_x__impl__uauqb5;
  _.$_$.n2 = _DpOffset___get_y__impl__1h898y;
  _.$_$.o2 = _DpSize___init__impl__t4mur0;
  _.$_$.p2 = _IntOffset___init__impl__rq8h7b;
  _.$_$.q2 = IntOffset__hashCode_impl_w5rrxs;
  _.$_$.r2 = IntOffset__minus_impl_4m69hb;
  _.$_$.s2 = _IntOffset___get_packedValue__impl__982pbx;
  _.$_$.t2 = IntOffset__plus_impl_nqoa9b;
  _.$_$.u2 = IntOffset__toString_impl_h46d8h;
  _.$_$.v2 = _IntOffset___get_x__impl__qiqr5o;
  _.$_$.w2 = _IntOffset___get_y__impl__2avpwj;
  _.$_$.x2 = _IntSize___init__impl__emcjft;
  _.$_$.y2 = IntSize__hashCode_impl_gm9mta;
  _.$_$.z2 = _IntSize___get_packedValue__impl__uho7jf;
  _.$_$.a3 = IntSize__toString_impl_54w9zl;
  _.$_$.b3 = _TextUnit___init__impl__r5fj1s;
  _.$_$.c3 = TextUnit__hashCode_impl_qsmeov;
  _.$_$.d3 = _TextUnit___get_isEm__impl__esrmtl;
  _.$_$.e3 = _TextUnit___get_isSp__impl__8c3r6q;
  _.$_$.f3 = _TextUnit___get_packedValue__impl__it60w4;
  _.$_$.g3 = _TextUnit___get_rawType__impl__tu8yq5;
  _.$_$.h3 = TextUnit__toString_impl_51ghw0;
  _.$_$.i3 = _TextUnit___get_type__impl__uc2olt;
  _.$_$.j3 = _TextUnit___get_value__impl__hpbx0k;
  _.$_$.k3 = Velocity__minus_impl_w0cg92;
  _.$_$.l3 = Velocity__plus_impl_9g3s6u;
  _.$_$.m3 = Velocity__toString_impl_n5zo2k;
  _.$_$.n3 = _Velocity___get_x__impl__qqcikv;
  _.$_$.o3 = _Velocity___get_y__impl__239yhc;
  _.$_$.p3 = Constraints__copy$default_impl_f452rp;
  _.$_$.q3 = IntOffset__copy$default_impl_1y5pbb;
  _.$_$.r3 = Velocity__copy$default_impl_eql69u;
  _.$_$.s3 = Companion_instance;
  _.$_$.t3 = Companion_getInstance_1;
  _.$_$.u3 = Companion_getInstance_4;
  _.$_$.v3 = Companion_getInstance_2;
  _.$_$.w3 = Companion_getInstance_5;
  _.$_$.x3 = Companion_getInstance_6;
  _.$_$.y3 = Companion_getInstance_7;
  _.$_$.z3 = Companion_getInstance_8;
  _.$_$.a4 = Companion_getInstance_10;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-unit.js.map
