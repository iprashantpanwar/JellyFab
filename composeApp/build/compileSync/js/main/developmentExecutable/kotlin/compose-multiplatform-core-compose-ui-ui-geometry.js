(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-geometry'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-geometry'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-geometry'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-geometry'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-util']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var shiftRight = kotlin_kotlin.$_$.ve;
  var convertToInt = kotlin_kotlin.$_$.je;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.v4;
  var floatFromBits = kotlin_kotlin.$_$.of;
  var Long = kotlin_kotlin.$_$.ol;
  var bitwiseAnd = kotlin_kotlin.$_$.fe;
  var toRawBits = kotlin_kotlin.$_$.gn;
  var fromInt = kotlin_kotlin.$_$.ne;
  var shiftLeft = kotlin_kotlin.$_$.te;
  var bitwiseOr = kotlin_kotlin.$_$.ge;
  var Unit_getInstance = kotlin_kotlin.$_$.n5;
  var VOID = kotlin_kotlin.$_$.e;
  var protoOf = kotlin_kotlin.$_$.yg;
  var initMetadataForCompanion = kotlin_kotlin.$_$.wf;
  var subtract = kotlin_kotlin.$_$.we;
  var invert = kotlin_kotlin.$_$.oe;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.y3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.z3;
  var equalsLong = kotlin_kotlin.$_$.me;
  var shiftRightUnsigned = kotlin_kotlin.$_$.ue;
  var bitwiseXor = kotlin_kotlin.$_$.he;
  var THROW_CCE = kotlin_kotlin.$_$.vl;
  var initMetadataForClass = kotlin_kotlin.$_$.vf;
  var isNaN_0 = kotlin_kotlin.$_$.sm;
  var isInfinite = kotlin_kotlin.$_$.rm;
  var numberToInt = kotlin_kotlin.$_$.wg;
  var add = kotlin_kotlin.$_$.ee;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var getNumberHashCode = kotlin_kotlin.$_$.rf;
  var equals = kotlin_kotlin.$_$.nf;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(CornerRadius, 'CornerRadius');
  initMetadataForClass(MutableRect, 'MutableRect');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Offset, 'Offset');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Rect, 'Rect');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(RoundRect, 'RoundRect');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Size, 'Size');
  //endregion
  function _CornerRadius___init__impl__ojmabe(packedValue) {
    return packedValue;
  }
  function _CornerRadius___get_packedValue__impl__okv4jq($this) {
    return $this;
  }
  function _CornerRadius___get_x__impl__1594cn($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function _CornerRadius___get_y__impl__tyvleu($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function CornerRadius__component1_impl_6k47wy($this) {
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function CornerRadius__component2_impl_715ub5($this) {
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function CornerRadius__copy_impl_mqhhap($this, x, y) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(x));
    var v2 = fromInt(toRawBits(y));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _CornerRadius___init__impl__ojmabe(tmp$ret$6);
  }
  function CornerRadius__copy$default_impl_tg6w18($this, x, y, $super) {
    var tmp;
    if (x === VOID) {
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _CornerRadius___get_packedValue__impl__okv4jq($this);
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
      var value_0 = _CornerRadius___get_packedValue__impl__okv4jq($this);
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
      tmp_1 = CornerRadius__copy_impl_mqhhap($this, x, y);
    } else {
      var tmp_2 = $super;
      tmp_1 = (tmp_2 == null ? null : new CornerRadius(tmp_2)).copy_6knqu7_k$.call(new CornerRadius($this), x, y).packedValue_1;
    }
    return tmp_1;
  }
  function Companion() {
    Companion_instance = this;
    this.Zero_1 = _CornerRadius___init__impl__ojmabe(new Long(0, 0));
  }
  protoOf(Companion).get_Zero_r4zx17_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CornerRadius__isZero_impl_nlr0hg($this) {
    var v = bitwiseAnd(_CornerRadius___get_packedValue__impl__okv4jq($this), new Long(2147483647, 2147483647));
    var tmp = bitwiseAnd(subtract(v, new Long(1, 1)), invert(v));
    // Inline function 'kotlin.ULong.toLong' call
    var this_0 = _ULong___init__impl__c78o9k(new Long(-2147483648, -2147483648));
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
    return !equalsLong(bitwiseAnd(tmp, tmp$ret$0), new Long(0, 0));
  }
  function CornerRadius__isCircular_impl_sn6ler($this) {
    return equalsLong(shiftRightUnsigned(_CornerRadius___get_packedValue__impl__okv4jq($this), 32), bitwiseAnd(_CornerRadius___get_packedValue__impl__okv4jq($this), new Long(-1, 0)));
  }
  function CornerRadius__unaryMinus_impl_li2ovv($this) {
    return _CornerRadius___init__impl__ojmabe(bitwiseXor(_CornerRadius___get_packedValue__impl__okv4jq($this), new Long(-2147483648, -2147483648)));
  }
  function CornerRadius__minus_impl_dt91p8($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _CornerRadius___get_packedValue__impl__okv4jq(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = tmp - floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _CornerRadius___get_packedValue__impl__okv4jq(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 - floatFromBits(bits_2);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$12 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _CornerRadius___init__impl__ojmabe(tmp$ret$12);
  }
  function CornerRadius__plus_impl_qmk9is($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _CornerRadius___get_packedValue__impl__okv4jq(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = tmp + floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _CornerRadius___get_packedValue__impl__okv4jq(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 + floatFromBits(bits_2);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$12 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _CornerRadius___init__impl__ojmabe(tmp$ret$12);
  }
  function CornerRadius__times_impl_g3rlyq($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = floatFromBits(bits) * operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) * operand;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _CornerRadius___init__impl__ojmabe(tmp$ret$6);
  }
  function CornerRadius__div_impl_bxtjdv($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = floatFromBits(bits) / operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) / operand;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _CornerRadius___init__impl__ojmabe(tmp$ret$6);
  }
  function CornerRadius__toString_impl_m3k4zq($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    if (tmp_0 === floatFromBits(bits_0)) {
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _CornerRadius___get_packedValue__impl__okv4jq($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$11 = floatFromBits(bits_1);
      tmp = 'CornerRadius.circular(' + toStringAsFixed(tmp$ret$11, 1) + ')';
    } else {
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_2 = _CornerRadius___get_packedValue__impl__okv4jq($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_2 = convertToInt(shiftRight(value_2, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$15 = floatFromBits(bits_2);
      var tmp_1 = toStringAsFixed(tmp$ret$15, 1);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_3 = _CornerRadius___get_packedValue__impl__okv4jq($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$19 = floatFromBits(bits_3);
      tmp = 'CornerRadius.elliptical(' + tmp_1 + ', ' + toStringAsFixed(tmp$ret$19, 1) + ')';
    }
    return tmp;
  }
  function CornerRadius__hashCode_impl_r6e06j($this) {
    return $this.hashCode();
  }
  function CornerRadius__equals_impl_776hdl($this, other) {
    if (!(other instanceof CornerRadius))
      return false;
    var tmp0_other_with_cast = other instanceof CornerRadius ? other.packedValue_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function CornerRadius(packedValue) {
    Companion_getInstance();
    this.packedValue_1 = packedValue;
  }
  protoOf(CornerRadius).toString = function () {
    return CornerRadius__toString_impl_m3k4zq(this.packedValue_1);
  };
  protoOf(CornerRadius).hashCode = function () {
    return CornerRadius__hashCode_impl_r6e06j(this.packedValue_1);
  };
  protoOf(CornerRadius).equals = function (other) {
    return CornerRadius__equals_impl_776hdl(this.packedValue_1, other);
  };
  function CornerRadius_0(x, y) {
    y = y === VOID ? x : y;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(x));
    var v2 = fromInt(toRawBits(y));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _CornerRadius___init__impl__ojmabe(tmp$ret$0);
  }
  function toStringAsFixed(_this__u8e3s4, digits) {
    if (isNaN_0(_this__u8e3s4))
      return 'NaN';
    if (isInfinite(_this__u8e3s4))
      return _this__u8e3s4 < 0.0 ? '-Infinity' : 'Infinity';
    // Inline function 'kotlin.math.max' call
    var clampedDigits = Math.max(digits, 0);
    // Inline function 'kotlin.math.pow' call
    var pow = Math.pow(10.0, clampedDigits);
    var shifted = _this__u8e3s4 * pow;
    var decimal = shifted - numberToInt(shifted);
    var tmp;
    if (decimal >= 0.5) {
      tmp = numberToInt(shifted) + 1 | 0;
    } else {
      tmp = numberToInt(shifted);
    }
    var roundedShifted = tmp;
    var rounded = roundedShifted / pow;
    var tmp_0;
    if (clampedDigits > 0) {
      tmp_0 = rounded.toString();
    } else {
      tmp_0 = numberToInt(rounded).toString();
    }
    return tmp_0;
  }
  var androidx_compose_ui_geometry_MutableRect$stable;
  function MutableRect(left, top, right, bottom) {
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
  }
  protoOf(MutableRect).set_left_bnynok_k$ = function (_set____db54di) {
    this.left_1 = _set____db54di;
  };
  protoOf(MutableRect).get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  protoOf(MutableRect).set_top_q4a9n4_k$ = function (_set____db54di) {
    this.top_1 = _set____db54di;
  };
  protoOf(MutableRect).get_top_18ivbo_k$ = function () {
    return this.top_1;
  };
  protoOf(MutableRect).set_right_ihmog9_k$ = function (_set____db54di) {
    this.right_1 = _set____db54di;
  };
  protoOf(MutableRect).get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  protoOf(MutableRect).set_bottom_hrdqf4_k$ = function (_set____db54di) {
    this.bottom_1 = _set____db54di;
  };
  protoOf(MutableRect).get_bottom_bj8ras_k$ = function () {
    return this.bottom_1;
  };
  protoOf(MutableRect).get_width_j0q4yl_k$ = function () {
    return this.right_1 - this.left_1;
  };
  protoOf(MutableRect).get_height_e7t92o_k$ = function () {
    return this.bottom_1 - this.top_1;
  };
  protoOf(MutableRect).get_size_cxx1ym_k$ = function () {
    // Inline function 'androidx.compose.ui.geometry.MutableRect.width' call
    var tmp0 = this.right_1 - this.left_1;
    // Inline function 'androidx.compose.ui.geometry.MutableRect.height' call
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.bottom_1 - this.top_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$2);
  };
  protoOf(MutableRect).get_isInfinite_uffwnt_k$ = function () {
    return !!(!!(!!(this.left_1 === Infinity | this.top_1 === Infinity) | this.right_1 === Infinity) | this.bottom_1 === Infinity);
  };
  protoOf(MutableRect).get_isFinite_taph6q_k$ = function () {
    return !!(!!(!!((toRawBits(this.left_1) & 2147483647) < 2139095040 & (toRawBits(this.top_1) & 2147483647) < 2139095040) & (toRawBits(this.right_1) & 2147483647) < 2139095040) & (toRawBits(this.bottom_1) & 2147483647) < 2139095040);
  };
  protoOf(MutableRect).get_isEmpty_zauvru_k$ = function () {
    return !!(this.left_1 >= this.right_1 | this.top_1 >= this.bottom_1);
  };
  protoOf(MutableRect).translate_nzlwb0_k$ = function (offset) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$7 = floatFromBits(bits_0);
    return this.translate_7gghdu_k$(tmp, tmp$ret$7);
  };
  protoOf(MutableRect).translate_7gghdu_k$ = function (translateX, translateY) {
    this.left_1 = this.left_1 + translateX;
    this.top_1 = this.top_1 + translateY;
    this.right_1 = this.right_1 + translateX;
    this.bottom_1 = this.bottom_1 + translateY;
  };
  protoOf(MutableRect).inflate_hgce9t_k$ = function (delta) {
    this.left_1 = this.left_1 - delta;
    this.top_1 = this.top_1 - delta;
    this.right_1 = this.right_1 + delta;
    this.bottom_1 = this.bottom_1 + delta;
  };
  protoOf(MutableRect).deflate_vegvq5_k$ = function (delta) {
    return this.inflate_hgce9t_k$(-delta);
  };
  protoOf(MutableRect).intersect_ye2nrj_k$ = function (left, top, right, bottom) {
    var tmp = this;
    // Inline function 'kotlin.math.max' call
    var b = this.left_1;
    tmp.left_1 = Math.max(left, b);
    var tmp_0 = this;
    // Inline function 'kotlin.math.max' call
    var b_0 = this.top_1;
    tmp_0.top_1 = Math.max(top, b_0);
    var tmp_1 = this;
    // Inline function 'kotlin.math.min' call
    var b_1 = this.right_1;
    tmp_1.right_1 = Math.min(right, b_1);
    var tmp_2 = this;
    // Inline function 'kotlin.math.min' call
    var b_2 = this.bottom_1;
    tmp_2.bottom_1 = Math.min(bottom, b_2);
  };
  protoOf(MutableRect).overlaps_l18ztf_k$ = function (other) {
    return !!(!!(!!(this.left_1 < other.get_right_ixz7xv_k$() & other.get_left_woprgw_k$() < this.right_1) & this.top_1 < other.get_bottom_bj8ras_k$()) & other.get_top_18ivbo_k$() < this.bottom_1);
  };
  protoOf(MutableRect).overlaps_pf10p7_k$ = function (other) {
    if (this.right_1 <= other.left_1 || other.right_1 <= this.left_1)
      return false;
    if (this.bottom_1 <= other.top_1 || other.bottom_1 <= this.top_1)
      return false;
    return true;
  };
  protoOf(MutableRect).get_minDimension_t9b43n_k$ = function () {
    // Inline function 'androidx.compose.ui.geometry.MutableRect.width' call
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = this.right_1 - this.left_1;
    var tmp0 = Math.abs(this_0);
    // Inline function 'androidx.compose.ui.geometry.MutableRect.height' call
    // Inline function 'kotlin.math.absoluteValue' call
    var this_1 = this.bottom_1 - this.top_1;
    // Inline function 'kotlin.math.min' call
    var b = Math.abs(this_1);
    return Math.min(tmp0, b);
  };
  protoOf(MutableRect).get_maxDimension_xxccdn_k$ = function () {
    // Inline function 'androidx.compose.ui.geometry.MutableRect.width' call
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = this.right_1 - this.left_1;
    var tmp0 = Math.abs(this_0);
    // Inline function 'androidx.compose.ui.geometry.MutableRect.height' call
    // Inline function 'kotlin.math.absoluteValue' call
    var this_1 = this.bottom_1 - this.top_1;
    // Inline function 'kotlin.math.max' call
    var b = Math.abs(this_1);
    return Math.max(tmp0, b);
  };
  protoOf(MutableRect).get_topLeft_ypvrd5_k$ = function () {
    var tmp0 = this.left_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.top_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  };
  protoOf(MutableRect).get_topCenter_rf4up5_k$ = function () {
    var tmp = this.left_1;
    // Inline function 'androidx.compose.ui.geometry.MutableRect.width' call
    var tmp0 = tmp + (this.right_1 - this.left_1) / 2.0;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.top_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$1);
  };
  protoOf(MutableRect).get_topRight_tgvyuy_k$ = function () {
    var tmp0 = this.right_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.top_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  };
  protoOf(MutableRect).get_centerLeft_9neret_k$ = function () {
    var tmp0 = this.left_1;
    var tmp = this.top_1;
    // Inline function 'androidx.compose.ui.geometry.MutableRect.height' call
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp + (this.bottom_1 - this.top_1) / 2.0;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$1);
  };
  protoOf(MutableRect).get_center_dcexec_k$ = function () {
    var tmp = this.left_1;
    // Inline function 'androidx.compose.ui.geometry.MutableRect.width' call
    var tmp0 = tmp + (this.right_1 - this.left_1) / 2.0;
    var tmp_0 = this.top_1;
    // Inline function 'androidx.compose.ui.geometry.MutableRect.height' call
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 + (this.bottom_1 - this.top_1) / 2.0;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$2);
  };
  protoOf(MutableRect).get_centerRight_fpayl0_k$ = function () {
    var tmp0 = this.right_1;
    var tmp = this.top_1;
    // Inline function 'androidx.compose.ui.geometry.MutableRect.height' call
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp + (this.bottom_1 - this.top_1) / 2.0;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$1);
  };
  protoOf(MutableRect).get_bottomLeft_y6q4k1_k$ = function () {
    var tmp0 = this.left_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.bottom_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  };
  protoOf(MutableRect).get_bottomCenter_tgdpzz_k$ = function () {
    var tmp = this.left_1;
    // Inline function 'androidx.compose.ui.geometry.MutableRect.width' call
    var tmp0 = tmp + (this.right_1 - this.left_1) / 2.0;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.bottom_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$1);
  };
  protoOf(MutableRect).get_bottomRight_p2dg1q_k$ = function () {
    var tmp0 = this.right_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.bottom_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  };
  protoOf(MutableRect).contains_obi4ph_k$ = function (offset) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var y = floatFromBits(bits_0);
    return !!(!!(!!(x >= this.left_1 & x < this.right_1) & y >= this.top_1) & y < this.bottom_1);
  };
  protoOf(MutableRect).set_7tauzy_k$ = function (left, top, right, bottom) {
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
  };
  protoOf(MutableRect).toString = function () {
    return 'MutableRect(' + (toStringAsFixed(this.left_1, 1) + ', ') + (toStringAsFixed(this.top_1, 1) + ', ') + (toStringAsFixed(this.right_1, 1) + ', ') + (toStringAsFixed(this.bottom_1, 1) + ')');
  };
  function toRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.left_1, _this__u8e3s4.top_1, _this__u8e3s4.right_1, _this__u8e3s4.bottom_1);
  }
  function _Offset___init__impl__c168vi(packedValue) {
    return packedValue;
  }
  function _Offset___get_packedValue__impl__xh2k8q($this) {
    return $this;
  }
  function _Offset___get_x__impl__xvi35n($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function _Offset___get_y__impl__8bzhra($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function Offset__component1_impl_qn5q2($this) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function Offset__component2_impl_9ljbv($this) {
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function Offset__copy_impl_9gtypn($this, x, y) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(x));
    var v2 = fromInt(toRawBits(y));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$6);
  }
  function Offset__copy$default_impl_bmwjg8($this, x, y, $super) {
    var tmp;
    if (x === VOID) {
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q($this);
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
      var value_0 = _Offset___get_packedValue__impl__xh2k8q($this);
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
      tmp_1 = Offset__copy_impl_9gtypn($this, x, y);
    } else {
      var tmp_2 = $super;
      tmp_1 = (tmp_2 == null ? null : new Offset(tmp_2)).copy_e8mbcb_k$.call(new Offset($this), x, y).packedValue_1;
    }
    return tmp_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.Zero_1 = _Offset___init__impl__c168vi(new Long(0, 0));
    this.Infinite_1 = _Offset___init__impl__c168vi(new Long(2139095040, 2139095040));
    this.Unspecified_1 = _Offset___init__impl__c168vi(new Long(2143289344, 2143289344));
  }
  protoOf(Companion_0).get_Zero_k6n73t_k$ = function () {
    return this.Zero_1;
  };
  protoOf(Companion_0).get_Infinite_g7y28d_k$ = function () {
    return this.Infinite_1;
  };
  protoOf(Companion_0).get_Unspecified_gis8po_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Offset__isValid_impl_z7krde($this) {
    var v = bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q($this), new Long(2147483647, 2147483647));
    return equalsLong(bitwiseAnd(add(v, new Long(8388607, 8388607)), new Long(-2147483648, -2147483648)), new Long(0, 0));
  }
  function Offset__getDistance_impl_pclvxn($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var y = floatFromBits(bits_0);
    // Inline function 'kotlin.math.sqrt' call
    var x_0 = x * x + y * y;
    return Math.sqrt(x_0);
  }
  function Offset__getDistanceSquared_impl_97mhi6($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var y = floatFromBits(bits_0);
    return x * x + y * y;
  }
  function Offset__unaryMinus_impl_ssu2iv($this) {
    return _Offset___init__impl__c168vi(bitwiseXor(_Offset___get_packedValue__impl__xh2k8q($this), new Long(-2147483648, -2147483648)));
  }
  function Offset__minus_impl_hoj2c0($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = tmp - floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 - floatFromBits(bits_2);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$12 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$12);
  }
  function Offset__plus_impl_c78cg0($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = tmp + floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 + floatFromBits(bits_2);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$12 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$12);
  }
  function Offset__times_impl_jz1mli($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = floatFromBits(bits) * operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) * operand;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$6);
  }
  function Offset__div_impl_eaxtg1($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = floatFromBits(bits) / operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) / operand;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$6);
  }
  function Offset__rem_impl_swr6wq($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = floatFromBits(bits) % operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) % operand;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$6);
  }
  function Offset__toString_impl_4ffbou($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    if (!equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q($this), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344))) {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$4 = floatFromBits(bits);
      var tmp_0 = toStringAsFixed(tmp$ret$4, 1);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$8 = floatFromBits(bits_0);
      tmp = 'Offset(' + tmp_0 + ', ' + toStringAsFixed(tmp$ret$8, 1) + ')';
    } else {
      tmp = 'Offset.Unspecified';
    }
    return tmp;
  }
  function Offset__hashCode_impl_hbql41($this) {
    return $this.hashCode();
  }
  function Offset__equals_impl_exf2yj($this, other) {
    if (!(other instanceof Offset))
      return false;
    var tmp0_other_with_cast = other instanceof Offset ? other.packedValue_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Offset(packedValue) {
    Companion_getInstance_0();
    this.packedValue_1 = packedValue;
  }
  protoOf(Offset).toString = function () {
    return Offset__toString_impl_4ffbou(this.packedValue_1);
  };
  protoOf(Offset).hashCode = function () {
    return Offset__hashCode_impl_hbql41(this.packedValue_1);
  };
  protoOf(Offset).equals = function (other) {
    return Offset__equals_impl_exf2yj(this.packedValue_1, other);
  };
  function Offset_0(x, y) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(x));
    var v2 = fromInt(toRawBits(y));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  function get_isUnspecified(_this__u8e3s4) {
    return equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344));
  }
  function get_isSpecified(_this__u8e3s4) {
    return !equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344));
  }
  function takeOrElse(_this__u8e3s4, block) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    if (!equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344))) {
      tmp = _this__u8e3s4;
    } else {
      tmp = block().packedValue_1;
    }
    return tmp;
  }
  function get_isFinite(_this__u8e3s4) {
    var v = bitwiseXor(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4), new Long(2139095040, 2139095040)), new Long(2139095040, 2139095040));
    return equalsLong(bitwiseAnd(subtract(v, new Long(1, 1)), new Long(-2147483648, -2147483648)), new Long(0, 0));
  }
  function lerp_0(start, stop, fraction) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(start);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(stop);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$5 = floatFromBits(bits_0);
    var tmp0 = lerp(tmp, tmp$ret$5, fraction);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(start);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(stop);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$11 = floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = lerp(tmp_0, tmp$ret$11, fraction);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$12 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$12);
  }
  var androidx_compose_ui_geometry_Rect$stable;
  function Companion_1() {
    Companion_instance_1 = this;
    this.Zero_1 = new Rect(0.0, 0.0, 0.0, 0.0);
  }
  protoOf(Companion_1).get_Zero_woe9zl_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_1();
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
  }
  protoOf(Rect).get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  protoOf(Rect).get_top_18ivbo_k$ = function () {
    return this.top_1;
  };
  protoOf(Rect).get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  protoOf(Rect).get_bottom_bj8ras_k$ = function () {
    return this.bottom_1;
  };
  protoOf(Rect).get_width_j0q4yl_k$ = function () {
    return this.right_1 - this.left_1;
  };
  protoOf(Rect).get_height_e7t92o_k$ = function () {
    return this.bottom_1 - this.top_1;
  };
  protoOf(Rect).get_size_cxx1ym_k$ = function () {
    // Inline function 'androidx.compose.ui.geometry.Rect.width' call
    var tmp0 = this.right_1 - this.left_1;
    // Inline function 'androidx.compose.ui.geometry.Rect.height' call
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.bottom_1 - this.top_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$2);
  };
  protoOf(Rect).get_isInfinite_uffwnt_k$ = function () {
    return !!(!!(!!(this.left_1 === Infinity | this.top_1 === Infinity) | this.right_1 === Infinity) | this.bottom_1 === Infinity);
  };
  protoOf(Rect).get_isFinite_taph6q_k$ = function () {
    return !!(!!(!!((toRawBits(this.left_1) & 2147483647) < 2139095040 & (toRawBits(this.top_1) & 2147483647) < 2139095040) & (toRawBits(this.right_1) & 2147483647) < 2139095040) & (toRawBits(this.bottom_1) & 2147483647) < 2139095040);
  };
  protoOf(Rect).get_isEmpty_zauvru_k$ = function () {
    return !!(this.left_1 >= this.right_1 | this.top_1 >= this.bottom_1);
  };
  protoOf(Rect).translate_e972jg_k$ = function (offset) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$3 = floatFromBits(bits);
    var tmp = this.left_1 + tmp$ret$3;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$7 = floatFromBits(bits_0);
    var tmp_0 = this.top_1 + tmp$ret$7;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$11 = floatFromBits(bits_1);
    var tmp_1 = this.right_1 + tmp$ret$11;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$15 = floatFromBits(bits_2);
    return new Rect(tmp, tmp_0, tmp_1, this.bottom_1 + tmp$ret$15);
  };
  protoOf(Rect).translate_k2k08i_k$ = function (translateX, translateY) {
    return new Rect(this.left_1 + translateX, this.top_1 + translateY, this.right_1 + translateX, this.bottom_1 + translateY);
  };
  protoOf(Rect).inflate_rvluy7_k$ = function (delta) {
    return new Rect(this.left_1 - delta, this.top_1 - delta, this.right_1 + delta, this.bottom_1 + delta);
  };
  protoOf(Rect).deflate_e6rdlf_k$ = function (delta) {
    return this.inflate_rvluy7_k$(-delta);
  };
  protoOf(Rect).intersect_aqxwu2_k$ = function (other) {
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
    return new Rect(tmp, tmp_0, tmp_1, tmp$ret$3);
  };
  protoOf(Rect).intersect_kpsggx_k$ = function (otherLeft, otherTop, otherRight, otherBottom) {
    // Inline function 'kotlin.math.max' call
    var a = this.left_1;
    var tmp = Math.max(a, otherLeft);
    // Inline function 'kotlin.math.max' call
    var a_0 = this.top_1;
    var tmp_0 = Math.max(a_0, otherTop);
    // Inline function 'kotlin.math.min' call
    var a_1 = this.right_1;
    var tmp_1 = Math.min(a_1, otherRight);
    // Inline function 'kotlin.math.min' call
    var a_2 = this.bottom_1;
    var tmp$ret$3 = Math.min(a_2, otherBottom);
    return new Rect(tmp, tmp_0, tmp_1, tmp$ret$3);
  };
  protoOf(Rect).overlaps_l18ztf_k$ = function (other) {
    return !!(!!(!!(this.left_1 < other.right_1 & other.left_1 < this.right_1) & this.top_1 < other.bottom_1) & other.top_1 < this.bottom_1);
  };
  protoOf(Rect).get_minDimension_t9b43n_k$ = function () {
    // Inline function 'androidx.compose.ui.geometry.Rect.width' call
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = this.right_1 - this.left_1;
    var tmp0 = Math.abs(this_0);
    // Inline function 'androidx.compose.ui.geometry.Rect.height' call
    // Inline function 'kotlin.math.absoluteValue' call
    var this_1 = this.bottom_1 - this.top_1;
    // Inline function 'kotlin.math.min' call
    var b = Math.abs(this_1);
    return Math.min(tmp0, b);
  };
  protoOf(Rect).get_maxDimension_xxccdn_k$ = function () {
    // Inline function 'androidx.compose.ui.geometry.Rect.width' call
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = this.right_1 - this.left_1;
    var tmp0 = Math.abs(this_0);
    // Inline function 'androidx.compose.ui.geometry.Rect.height' call
    // Inline function 'kotlin.math.absoluteValue' call
    var this_1 = this.bottom_1 - this.top_1;
    // Inline function 'kotlin.math.max' call
    var b = Math.abs(this_1);
    return Math.max(tmp0, b);
  };
  protoOf(Rect).get_topLeft_ypvrd5_k$ = function () {
    var tmp0 = this.left_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.top_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  };
  protoOf(Rect).get_topCenter_rf4up5_k$ = function () {
    // Inline function 'androidx.compose.ui.geometry.Rect.width' call
    var tmp$ret$0 = this.right_1 - this.left_1;
    var tmp0 = this.left_1 + tmp$ret$0 / 2.0;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.top_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$1);
  };
  protoOf(Rect).get_topRight_tgvyuy_k$ = function () {
    var tmp0 = this.right_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.top_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  };
  protoOf(Rect).get_centerLeft_9neret_k$ = function () {
    var tmp0 = this.left_1;
    // Inline function 'androidx.compose.ui.geometry.Rect.height' call
    var tmp$ret$0 = this.bottom_1 - this.top_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.top_1 + tmp$ret$0 / 2.0;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$1);
  };
  protoOf(Rect).get_center_dcexec_k$ = function () {
    // Inline function 'androidx.compose.ui.geometry.Rect.width' call
    var tmp$ret$0 = this.right_1 - this.left_1;
    var tmp0 = this.left_1 + tmp$ret$0 / 2.0;
    // Inline function 'androidx.compose.ui.geometry.Rect.height' call
    var tmp$ret$1 = this.bottom_1 - this.top_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.top_1 + tmp$ret$1 / 2.0;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$2);
  };
  protoOf(Rect).get_centerRight_fpayl0_k$ = function () {
    var tmp0 = this.right_1;
    // Inline function 'androidx.compose.ui.geometry.Rect.height' call
    var tmp$ret$0 = this.bottom_1 - this.top_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.top_1 + tmp$ret$0 / 2.0;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$1);
  };
  protoOf(Rect).get_bottomLeft_y6q4k1_k$ = function () {
    var tmp0 = this.left_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.bottom_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  };
  protoOf(Rect).get_bottomCenter_tgdpzz_k$ = function () {
    // Inline function 'androidx.compose.ui.geometry.Rect.width' call
    var tmp$ret$0 = this.right_1 - this.left_1;
    var tmp0 = this.left_1 + tmp$ret$0 / 2.0;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.bottom_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$1);
  };
  protoOf(Rect).get_bottomRight_p2dg1q_k$ = function () {
    var tmp0 = this.right_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.bottom_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  };
  protoOf(Rect).contains_obi4ph_k$ = function (offset) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var y = floatFromBits(bits_0);
    return !!(!!(!!(x >= this.left_1 & x < this.right_1) & y >= this.top_1) & y < this.bottom_1);
  };
  protoOf(Rect).toString = function () {
    return 'Rect.fromLTRB(' + (toStringAsFixed(this.left_1, 1) + ', ') + (toStringAsFixed(this.top_1, 1) + ', ') + (toStringAsFixed(this.right_1, 1) + ', ') + (toStringAsFixed(this.bottom_1, 1) + ')');
  };
  protoOf(Rect).component1_7eebsc_k$ = function () {
    return this.left_1;
  };
  protoOf(Rect).component2_7eebsb_k$ = function () {
    return this.top_1;
  };
  protoOf(Rect).component3_7eebsa_k$ = function () {
    return this.right_1;
  };
  protoOf(Rect).component4_7eebs9_k$ = function () {
    return this.bottom_1;
  };
  protoOf(Rect).copy_egrqb9_k$ = function (left, top, right, bottom) {
    return new Rect(left, top, right, bottom);
  };
  protoOf(Rect).copy$default_g2jcm4_k$ = function (left, top, right, bottom, $super) {
    left = left === VOID ? this.left_1 : left;
    top = top === VOID ? this.top_1 : top;
    right = right === VOID ? this.right_1 : right;
    bottom = bottom === VOID ? this.bottom_1 : bottom;
    return $super === VOID ? this.copy_egrqb9_k$(left, top, right, bottom) : $super.copy_egrqb9_k$.call(this, left, top, right, bottom);
  };
  protoOf(Rect).hashCode = function () {
    var result = getNumberHashCode(this.left_1);
    result = imul(result, 31) + getNumberHashCode(this.top_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.right_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.bottom_1) | 0;
    return result;
  };
  protoOf(Rect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rect))
      return false;
    var tmp0_other_with_cast = other instanceof Rect ? other : THROW_CCE();
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
  function Rect_0(offset, size) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_2 = tmp_1 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_3 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$23 = floatFromBits(bits_4);
    return new Rect(tmp, tmp_0, tmp_2, tmp_3 + tmp$ret$23);
  }
  function Rect_1(topLeft, bottomRight) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(bottomRight);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(bottomRight);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$15 = floatFromBits(bits_2);
    return new Rect(tmp, tmp_0, tmp_1, tmp$ret$15);
  }
  var androidx_compose_ui_geometry_RoundRect$stable;
  function get_isSimple(_this__u8e3s4) {
    var tmp;
    var tmp_0;
    var tmp_1;
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.isCircular' call
    var this_0 = _this__u8e3s4.topLeftCornerRadius_1;
    if (equalsLong(shiftRightUnsigned(_CornerRadius___get_packedValue__impl__okv4jq(this_0), 32), bitwiseAnd(_CornerRadius___get_packedValue__impl__okv4jq(this_0), new Long(-1, 0)))) {
      tmp_1 = equalsLong(_CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4.topLeftCornerRadius_1), _CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4.topRightCornerRadius_1));
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equalsLong(_CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4.topLeftCornerRadius_1), _CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4.bottomRightCornerRadius_1));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equalsLong(_CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4.topLeftCornerRadius_1), _CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4.bottomLeftCornerRadius_1));
    } else {
      tmp = false;
    }
    return tmp;
  }
  function _set__scaledRadiiRect__azre1j($this, _set____db54di) {
    $this._scaledRadiiRect_1 = _set____db54di;
  }
  function _get__scaledRadiiRect__uy8eut($this) {
    return $this._scaledRadiiRect_1;
  }
  function scaledRadiiRect($this) {
    var tmp0_elvis_lhs = $this._scaledRadiiRect_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      var scale = 1.0;
      var tmp_0 = scale;
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      var this_0 = $this.bottomLeftCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value = _CornerRadius___get_packedValue__impl__okv4jq(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_1 = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      var this_1 = $this.topLeftCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _CornerRadius___get_packedValue__impl__okv4jq(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$7 = floatFromBits(bits_0);
      scale = minRadius($this, tmp_0, tmp_1, tmp$ret$7, $this.get_height_e7t92o_k$());
      var tmp_2 = scale;
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      var this_2 = $this.topLeftCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _CornerRadius___get_packedValue__impl__okv4jq(this_2);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_3 = floatFromBits(bits_1);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      var this_3 = $this.topRightCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_2 = _CornerRadius___get_packedValue__impl__okv4jq(this_3);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_2 = convertToInt(shiftRight(value_2, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$15 = floatFromBits(bits_2);
      scale = minRadius($this, tmp_2, tmp_3, tmp$ret$15, $this.get_width_j0q4yl_k$());
      var tmp_4 = scale;
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      var this_4 = $this.topRightCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_3 = _CornerRadius___get_packedValue__impl__okv4jq(this_4);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_5 = floatFromBits(bits_3);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      var this_5 = $this.bottomRightCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_4 = _CornerRadius___get_packedValue__impl__okv4jq(this_5);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$23 = floatFromBits(bits_4);
      scale = minRadius($this, tmp_4, tmp_5, tmp$ret$23, $this.get_height_e7t92o_k$());
      var tmp_6 = scale;
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      var this_6 = $this.bottomRightCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_5 = _CornerRadius___get_packedValue__impl__okv4jq(this_6);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_5 = convertToInt(shiftRight(value_5, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_7 = floatFromBits(bits_5);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      var this_7 = $this.bottomLeftCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_6 = _CornerRadius___get_packedValue__impl__okv4jq(this_7);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_6 = convertToInt(shiftRight(value_6, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$31 = floatFromBits(bits_6);
      scale = minRadius($this, tmp_6, tmp_7, tmp$ret$31, $this.get_width_j0q4yl_k$());
      var tmp_8 = $this.left_1 * scale;
      var tmp_9 = $this.top_1 * scale;
      var tmp_10 = $this.right_1 * scale;
      var tmp_11 = $this.bottom_1 * scale;
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      var this_8 = $this.topLeftCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_7 = _CornerRadius___get_packedValue__impl__okv4jq(this_8);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_7 = convertToInt(shiftRight(value_7, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp0 = floatFromBits(bits_7) * scale;
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      var this_9 = $this.topLeftCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_8 = _CornerRadius___get_packedValue__impl__okv4jq(this_9);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_8 = convertToInt(bitwiseAnd(value_8, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = floatFromBits(bits_8) * scale;
      var v1 = fromInt(toRawBits(tmp0));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$40 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      var tmp_12 = _CornerRadius___init__impl__ojmabe(tmp$ret$40);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      var this_10 = $this.topRightCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_9 = _CornerRadius___get_packedValue__impl__okv4jq(this_10);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_9 = convertToInt(shiftRight(value_9, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp0_0 = floatFromBits(bits_9) * scale;
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      var this_11 = $this.topRightCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_10 = _CornerRadius___get_packedValue__impl__okv4jq(this_11);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_10 = convertToInt(bitwiseAnd(value_10, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2_0 = floatFromBits(bits_10) * scale;
      var v1_0 = fromInt(toRawBits(tmp0_0));
      var v2_0 = fromInt(toRawBits(val2_0));
      var tmp$ret$50 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
      var tmp_13 = _CornerRadius___init__impl__ojmabe(tmp$ret$50);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      var this_12 = $this.bottomRightCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_11 = _CornerRadius___get_packedValue__impl__okv4jq(this_12);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_11 = convertToInt(shiftRight(value_11, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp0_1 = floatFromBits(bits_11) * scale;
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      var this_13 = $this.bottomRightCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_12 = _CornerRadius___get_packedValue__impl__okv4jq(this_13);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_12 = convertToInt(bitwiseAnd(value_12, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2_1 = floatFromBits(bits_12) * scale;
      var v1_1 = fromInt(toRawBits(tmp0_1));
      var v2_1 = fromInt(toRawBits(val2_1));
      var tmp$ret$60 = bitwiseOr(shiftLeft(v1_1, 32), bitwiseAnd(v2_1, new Long(-1, 0)));
      var tmp_14 = _CornerRadius___init__impl__ojmabe(tmp$ret$60);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      var this_14 = $this.bottomLeftCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_13 = _CornerRadius___get_packedValue__impl__okv4jq(this_14);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_13 = convertToInt(shiftRight(value_13, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp0_2 = floatFromBits(bits_13) * scale;
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      var this_15 = $this.bottomLeftCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_14 = _CornerRadius___get_packedValue__impl__okv4jq(this_15);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_14 = convertToInt(bitwiseAnd(value_14, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2_2 = floatFromBits(bits_14) * scale;
      var v1_2 = fromInt(toRawBits(tmp0_2));
      var v2_2 = fromInt(toRawBits(val2_2));
      var tmp$ret$70 = bitwiseOr(shiftLeft(v1_2, 32), bitwiseAnd(v2_2, new Long(-1, 0)));
      var tmp$ret$71 = _CornerRadius___init__impl__ojmabe(tmp$ret$70);
      // Inline function 'kotlin.also' call
      var this_16 = new RoundRect(tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp$ret$71);
      $this._scaledRadiiRect_1 = this_16;
      tmp = this_16;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function minRadius($this, min, radius1, radius2, limit) {
    var sum = radius1 + radius2;
    var tmp;
    if (sum > limit && !(sum === 0.0)) {
      // Inline function 'kotlin.math.min' call
      var b = limit / sum;
      tmp = Math.min(min, b);
    } else {
      tmp = min;
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.Zero_1 = RoundRect_1(0.0, 0.0, 0.0, 0.0, Companion_getInstance().get_Zero_r4zx17_k$());
  }
  protoOf(Companion_2).get_Zero_woe9zl_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RoundRect(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) {
    Companion_getInstance_2();
    topLeftCornerRadius = topLeftCornerRadius === VOID ? Companion_getInstance().get_Zero_r4zx17_k$() : topLeftCornerRadius;
    topRightCornerRadius = topRightCornerRadius === VOID ? Companion_getInstance().get_Zero_r4zx17_k$() : topRightCornerRadius;
    bottomRightCornerRadius = bottomRightCornerRadius === VOID ? Companion_getInstance().get_Zero_r4zx17_k$() : bottomRightCornerRadius;
    bottomLeftCornerRadius = bottomLeftCornerRadius === VOID ? Companion_getInstance().get_Zero_r4zx17_k$() : bottomLeftCornerRadius;
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
    this.topLeftCornerRadius_1 = topLeftCornerRadius;
    this.topRightCornerRadius_1 = topRightCornerRadius;
    this.bottomRightCornerRadius_1 = bottomRightCornerRadius;
    this.bottomLeftCornerRadius_1 = bottomLeftCornerRadius;
    this._scaledRadiiRect_1 = null;
  }
  protoOf(RoundRect).get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  protoOf(RoundRect).get_top_18ivbo_k$ = function () {
    return this.top_1;
  };
  protoOf(RoundRect).get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  protoOf(RoundRect).get_bottom_bj8ras_k$ = function () {
    return this.bottom_1;
  };
  protoOf(RoundRect).get_topLeftCornerRadius_91hulg_k$ = function () {
    return this.topLeftCornerRadius_1;
  };
  protoOf(RoundRect).get_topRightCornerRadius_kxqun3_k$ = function () {
    return this.topRightCornerRadius_1;
  };
  protoOf(RoundRect).get_bottomRightCornerRadius_166w49_k$ = function () {
    return this.bottomRightCornerRadius_1;
  };
  protoOf(RoundRect).get_bottomLeftCornerRadius_9r65ws_k$ = function () {
    return this.bottomLeftCornerRadius_1;
  };
  protoOf(RoundRect).get_width_j0q4yl_k$ = function () {
    return this.right_1 - this.left_1;
  };
  protoOf(RoundRect).get_height_e7t92o_k$ = function () {
    return this.bottom_1 - this.top_1;
  };
  protoOf(RoundRect).contains_obi4ph_k$ = function (point) {
    var tmp;
    var tmp_0;
    var tmp_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(point);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    if (floatFromBits(bits) < this.left_1) {
      tmp_1 = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(point);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(shiftRight(value_0, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp_1 = floatFromBits(bits_0) >= this.right_1;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_1 = _Offset___get_packedValue__impl__xh2k8q(point);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp_0 = floatFromBits(bits_1) < this.top_1;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Offset___get_packedValue__impl__xh2k8q(point);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp = floatFromBits(bits_2) >= this.bottom_1;
    }
    if (tmp) {
      return false;
    }
    var scaled = scaledRadiiRect(this);
    var x;
    var y;
    var radiusX;
    var radiusY;
    var tmp_2;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(point);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_3 = convertToInt(shiftRight(value_3, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_3 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    var this_0 = scaled.topLeftCornerRadius_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_4 = _CornerRadius___get_packedValue__impl__okv4jq(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_4 = convertToInt(shiftRight(value_4, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$23 = floatFromBits(bits_4);
    if (tmp_3 < this.left_1 + tmp$ret$23) {
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_5 = _Offset___get_packedValue__impl__xh2k8q(point);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_5 = convertToInt(bitwiseAnd(value_5, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_4 = floatFromBits(bits_5);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      var this_1 = scaled.topLeftCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_6 = _CornerRadius___get_packedValue__impl__okv4jq(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$31 = floatFromBits(bits_6);
      tmp_2 = tmp_4 < this.top_1 + tmp$ret$31;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_7 = _Offset___get_packedValue__impl__xh2k8q(point);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_7 = convertToInt(shiftRight(value_7, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_5 = floatFromBits(bits_7) - this.left_1;
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      var this_2 = scaled.topLeftCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_8 = _CornerRadius___get_packedValue__impl__okv4jq(this_2);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_8 = convertToInt(shiftRight(value_8, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      x = tmp_5 - floatFromBits(bits_8);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_9 = _Offset___get_packedValue__impl__xh2k8q(point);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_9 = convertToInt(bitwiseAnd(value_9, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_6 = floatFromBits(bits_9) - this.top_1;
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      var this_3 = scaled.topLeftCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_10 = _CornerRadius___get_packedValue__impl__okv4jq(this_3);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_10 = convertToInt(bitwiseAnd(value_10, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      y = tmp_6 - floatFromBits(bits_10);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      var this_4 = scaled.topLeftCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_11 = _CornerRadius___get_packedValue__impl__okv4jq(this_4);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_11 = convertToInt(shiftRight(value_11, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      radiusX = floatFromBits(bits_11);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      var this_5 = scaled.topLeftCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_12 = _CornerRadius___get_packedValue__impl__okv4jq(this_5);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_12 = convertToInt(bitwiseAnd(value_12, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      radiusY = floatFromBits(bits_12);
    } else {
      var tmp_7;
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_13 = _Offset___get_packedValue__impl__xh2k8q(point);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_13 = convertToInt(shiftRight(value_13, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_8 = floatFromBits(bits_13);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      var this_6 = scaled.topRightCornerRadius_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_14 = _CornerRadius___get_packedValue__impl__okv4jq(this_6);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_14 = convertToInt(shiftRight(value_14, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$63 = floatFromBits(bits_14);
      if (tmp_8 > this.right_1 - tmp$ret$63) {
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_15 = _Offset___get_packedValue__impl__xh2k8q(point);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_15 = convertToInt(bitwiseAnd(value_15, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp_9 = floatFromBits(bits_15);
        // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
        var this_7 = scaled.topRightCornerRadius_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_16 = _CornerRadius___get_packedValue__impl__okv4jq(this_7);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_16 = convertToInt(bitwiseAnd(value_16, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp$ret$71 = floatFromBits(bits_16);
        tmp_7 = tmp_9 < this.top_1 + tmp$ret$71;
      } else {
        tmp_7 = false;
      }
      if (tmp_7) {
        // Inline function 'androidx.compose.ui.geometry.Offset.x' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_17 = _Offset___get_packedValue__impl__xh2k8q(point);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_17 = convertToInt(shiftRight(value_17, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp_10 = floatFromBits(bits_17) - this.right_1;
        // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
        var this_8 = scaled.topRightCornerRadius_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_18 = _CornerRadius___get_packedValue__impl__okv4jq(this_8);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_18 = convertToInt(shiftRight(value_18, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        x = tmp_10 + floatFromBits(bits_18);
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_19 = _Offset___get_packedValue__impl__xh2k8q(point);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_19 = convertToInt(bitwiseAnd(value_19, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp_11 = floatFromBits(bits_19) - this.top_1;
        // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
        var this_9 = scaled.topRightCornerRadius_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_20 = _CornerRadius___get_packedValue__impl__okv4jq(this_9);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_20 = convertToInt(bitwiseAnd(value_20, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        y = tmp_11 - floatFromBits(bits_20);
        // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
        var this_10 = scaled.topRightCornerRadius_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_21 = _CornerRadius___get_packedValue__impl__okv4jq(this_10);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_21 = convertToInt(shiftRight(value_21, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        radiusX = floatFromBits(bits_21);
        // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
        var this_11 = scaled.topRightCornerRadius_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_22 = _CornerRadius___get_packedValue__impl__okv4jq(this_11);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_22 = convertToInt(bitwiseAnd(value_22, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        radiusY = floatFromBits(bits_22);
      } else {
        var tmp_12;
        // Inline function 'androidx.compose.ui.geometry.Offset.x' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_23 = _Offset___get_packedValue__impl__xh2k8q(point);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_23 = convertToInt(shiftRight(value_23, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp_13 = floatFromBits(bits_23);
        // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
        var this_12 = scaled.bottomRightCornerRadius_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_24 = _CornerRadius___get_packedValue__impl__okv4jq(this_12);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_24 = convertToInt(shiftRight(value_24, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp$ret$103 = floatFromBits(bits_24);
        if (tmp_13 > this.right_1 - tmp$ret$103) {
          // Inline function 'androidx.compose.ui.geometry.Offset.y' call
          // Inline function 'androidx.compose.ui.util.unpackFloat2' call
          var value_25 = _Offset___get_packedValue__impl__xh2k8q(point);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          var bits_25 = convertToInt(bitwiseAnd(value_25, new Long(-1, 0)));
          // Inline function 'kotlin.fromBits' call
          FloatCompanionObject_getInstance();
          var tmp_14 = floatFromBits(bits_25);
          // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
          var this_13 = scaled.bottomRightCornerRadius_1;
          // Inline function 'androidx.compose.ui.util.unpackFloat2' call
          var value_26 = _CornerRadius___get_packedValue__impl__okv4jq(this_13);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          var bits_26 = convertToInt(bitwiseAnd(value_26, new Long(-1, 0)));
          // Inline function 'kotlin.fromBits' call
          FloatCompanionObject_getInstance();
          var tmp$ret$111 = floatFromBits(bits_26);
          tmp_12 = tmp_14 > this.bottom_1 - tmp$ret$111;
        } else {
          tmp_12 = false;
        }
        if (tmp_12) {
          // Inline function 'androidx.compose.ui.geometry.Offset.x' call
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value_27 = _Offset___get_packedValue__impl__xh2k8q(point);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          var bits_27 = convertToInt(shiftRight(value_27, 32));
          // Inline function 'kotlin.fromBits' call
          FloatCompanionObject_getInstance();
          var tmp_15 = floatFromBits(bits_27) - this.right_1;
          // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
          var this_14 = scaled.bottomRightCornerRadius_1;
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value_28 = _CornerRadius___get_packedValue__impl__okv4jq(this_14);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          var bits_28 = convertToInt(shiftRight(value_28, 32));
          // Inline function 'kotlin.fromBits' call
          FloatCompanionObject_getInstance();
          x = tmp_15 + floatFromBits(bits_28);
          // Inline function 'androidx.compose.ui.geometry.Offset.y' call
          // Inline function 'androidx.compose.ui.util.unpackFloat2' call
          var value_29 = _Offset___get_packedValue__impl__xh2k8q(point);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          var bits_29 = convertToInt(bitwiseAnd(value_29, new Long(-1, 0)));
          // Inline function 'kotlin.fromBits' call
          FloatCompanionObject_getInstance();
          var tmp_16 = floatFromBits(bits_29) - this.bottom_1;
          // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
          var this_15 = scaled.bottomRightCornerRadius_1;
          // Inline function 'androidx.compose.ui.util.unpackFloat2' call
          var value_30 = _CornerRadius___get_packedValue__impl__okv4jq(this_15);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          var bits_30 = convertToInt(bitwiseAnd(value_30, new Long(-1, 0)));
          // Inline function 'kotlin.fromBits' call
          FloatCompanionObject_getInstance();
          y = tmp_16 + floatFromBits(bits_30);
          // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
          var this_16 = scaled.bottomRightCornerRadius_1;
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value_31 = _CornerRadius___get_packedValue__impl__okv4jq(this_16);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          var bits_31 = convertToInt(shiftRight(value_31, 32));
          // Inline function 'kotlin.fromBits' call
          FloatCompanionObject_getInstance();
          radiusX = floatFromBits(bits_31);
          // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
          var this_17 = scaled.bottomRightCornerRadius_1;
          // Inline function 'androidx.compose.ui.util.unpackFloat2' call
          var value_32 = _CornerRadius___get_packedValue__impl__okv4jq(this_17);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          var bits_32 = convertToInt(bitwiseAnd(value_32, new Long(-1, 0)));
          // Inline function 'kotlin.fromBits' call
          FloatCompanionObject_getInstance();
          radiusY = floatFromBits(bits_32);
        } else {
          var tmp_17;
          // Inline function 'androidx.compose.ui.geometry.Offset.x' call
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value_33 = _Offset___get_packedValue__impl__xh2k8q(point);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          var bits_33 = convertToInt(shiftRight(value_33, 32));
          // Inline function 'kotlin.fromBits' call
          FloatCompanionObject_getInstance();
          var tmp_18 = floatFromBits(bits_33);
          // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
          var this_18 = scaled.bottomLeftCornerRadius_1;
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value_34 = _CornerRadius___get_packedValue__impl__okv4jq(this_18);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          var bits_34 = convertToInt(shiftRight(value_34, 32));
          // Inline function 'kotlin.fromBits' call
          FloatCompanionObject_getInstance();
          var tmp$ret$143 = floatFromBits(bits_34);
          if (tmp_18 < this.left_1 + tmp$ret$143) {
            // Inline function 'androidx.compose.ui.geometry.Offset.y' call
            // Inline function 'androidx.compose.ui.util.unpackFloat2' call
            var value_35 = _Offset___get_packedValue__impl__xh2k8q(point);
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            var bits_35 = convertToInt(bitwiseAnd(value_35, new Long(-1, 0)));
            // Inline function 'kotlin.fromBits' call
            FloatCompanionObject_getInstance();
            var tmp_19 = floatFromBits(bits_35);
            // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
            var this_19 = scaled.bottomLeftCornerRadius_1;
            // Inline function 'androidx.compose.ui.util.unpackFloat2' call
            var value_36 = _CornerRadius___get_packedValue__impl__okv4jq(this_19);
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            var bits_36 = convertToInt(bitwiseAnd(value_36, new Long(-1, 0)));
            // Inline function 'kotlin.fromBits' call
            FloatCompanionObject_getInstance();
            var tmp$ret$151 = floatFromBits(bits_36);
            tmp_17 = tmp_19 > this.bottom_1 - tmp$ret$151;
          } else {
            tmp_17 = false;
          }
          if (tmp_17) {
            // Inline function 'androidx.compose.ui.geometry.Offset.x' call
            // Inline function 'androidx.compose.ui.util.unpackFloat1' call
            var value_37 = _Offset___get_packedValue__impl__xh2k8q(point);
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            var bits_37 = convertToInt(shiftRight(value_37, 32));
            // Inline function 'kotlin.fromBits' call
            FloatCompanionObject_getInstance();
            var tmp_20 = floatFromBits(bits_37) - this.left_1;
            // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
            var this_20 = scaled.bottomLeftCornerRadius_1;
            // Inline function 'androidx.compose.ui.util.unpackFloat1' call
            var value_38 = _CornerRadius___get_packedValue__impl__okv4jq(this_20);
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            var bits_38 = convertToInt(shiftRight(value_38, 32));
            // Inline function 'kotlin.fromBits' call
            FloatCompanionObject_getInstance();
            x = tmp_20 - floatFromBits(bits_38);
            // Inline function 'androidx.compose.ui.geometry.Offset.y' call
            // Inline function 'androidx.compose.ui.util.unpackFloat2' call
            var value_39 = _Offset___get_packedValue__impl__xh2k8q(point);
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            var bits_39 = convertToInt(bitwiseAnd(value_39, new Long(-1, 0)));
            // Inline function 'kotlin.fromBits' call
            FloatCompanionObject_getInstance();
            var tmp_21 = floatFromBits(bits_39) - this.bottom_1;
            // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
            var this_21 = scaled.bottomLeftCornerRadius_1;
            // Inline function 'androidx.compose.ui.util.unpackFloat2' call
            var value_40 = _CornerRadius___get_packedValue__impl__okv4jq(this_21);
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            var bits_40 = convertToInt(bitwiseAnd(value_40, new Long(-1, 0)));
            // Inline function 'kotlin.fromBits' call
            FloatCompanionObject_getInstance();
            y = tmp_21 + floatFromBits(bits_40);
            // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
            var this_22 = scaled.bottomLeftCornerRadius_1;
            // Inline function 'androidx.compose.ui.util.unpackFloat1' call
            var value_41 = _CornerRadius___get_packedValue__impl__okv4jq(this_22);
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            var bits_41 = convertToInt(shiftRight(value_41, 32));
            // Inline function 'kotlin.fromBits' call
            FloatCompanionObject_getInstance();
            radiusX = floatFromBits(bits_41);
            // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
            var this_23 = scaled.bottomLeftCornerRadius_1;
            // Inline function 'androidx.compose.ui.util.unpackFloat2' call
            var value_42 = _CornerRadius___get_packedValue__impl__okv4jq(this_23);
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            var bits_42 = convertToInt(bitwiseAnd(value_42, new Long(-1, 0)));
            // Inline function 'kotlin.fromBits' call
            FloatCompanionObject_getInstance();
            radiusY = floatFromBits(bits_42);
          } else {
            return true;
          }
        }
      }
    }
    var newX = x / radiusX;
    var newY = y / radiusY;
    return newX * newX + newY * newY <= 1.0;
  };
  protoOf(RoundRect).toString = function () {
    var tlRadius = this.topLeftCornerRadius_1;
    var trRadius = this.topRightCornerRadius_1;
    var brRadius = this.bottomRightCornerRadius_1;
    var blRadius = this.bottomLeftCornerRadius_1;
    var rect = toStringAsFixed(this.left_1, 1) + ', ' + (toStringAsFixed(this.top_1, 1) + ', ') + (toStringAsFixed(this.right_1, 1) + ', ') + toStringAsFixed(this.bottom_1, 1);
    if (equals(tlRadius, trRadius) && equals(trRadius, brRadius) && equals(brRadius, blRadius)) {
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _CornerRadius___get_packedValue__impl__okv4jq(tlRadius);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _CornerRadius___get_packedValue__impl__okv4jq(tlRadius);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      if (tmp === floatFromBits(bits_0)) {
        // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_1 = _CornerRadius___get_packedValue__impl__okv4jq(tlRadius);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_1 = convertToInt(shiftRight(value_1, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp$ret$11 = floatFromBits(bits_1);
        return 'RoundRect(rect=' + rect + ', radius=' + toStringAsFixed(tmp$ret$11, 1) + ')';
      }
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_2 = _CornerRadius___get_packedValue__impl__okv4jq(tlRadius);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_2 = convertToInt(shiftRight(value_2, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$15 = floatFromBits(bits_2);
      var tmp_0 = 'RoundRect(rect=' + rect + ', x=' + toStringAsFixed(tmp$ret$15, 1) + ', ';
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_3 = _CornerRadius___get_packedValue__impl__okv4jq(tlRadius);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$19 = floatFromBits(bits_3);
      return tmp_0 + ('y=' + toStringAsFixed(tmp$ret$19, 1) + ')');
    }
    return 'RoundRect(' + ('rect=' + rect + ', ') + ('topLeft=' + CornerRadius__toString_impl_m3k4zq(tlRadius) + ', ') + ('topRight=' + CornerRadius__toString_impl_m3k4zq(trRadius) + ', ') + ('bottomRight=' + CornerRadius__toString_impl_m3k4zq(brRadius) + ', ') + ('bottomLeft=' + CornerRadius__toString_impl_m3k4zq(blRadius) + ')');
  };
  protoOf(RoundRect).component1_7eebsc_k$ = function () {
    return this.left_1;
  };
  protoOf(RoundRect).component2_7eebsb_k$ = function () {
    return this.top_1;
  };
  protoOf(RoundRect).component3_7eebsa_k$ = function () {
    return this.right_1;
  };
  protoOf(RoundRect).component4_7eebs9_k$ = function () {
    return this.bottom_1;
  };
  protoOf(RoundRect).component5_k43xq6_k$ = function () {
    return this.topLeftCornerRadius_1;
  };
  protoOf(RoundRect).component6_chc4w3_k$ = function () {
    return this.topRightCornerRadius_1;
  };
  protoOf(RoundRect).component7_pybugs_k$ = function () {
    return this.bottomRightCornerRadius_1;
  };
  protoOf(RoundRect).component8_6n485h_k$ = function () {
    return this.bottomLeftCornerRadius_1;
  };
  protoOf(RoundRect).copy_6k8ad_k$ = function (left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) {
    return new RoundRect(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius);
  };
  protoOf(RoundRect).copy$default_s3wa9q_k$ = function (left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius, $super) {
    left = left === VOID ? this.left_1 : left;
    top = top === VOID ? this.top_1 : top;
    right = right === VOID ? this.right_1 : right;
    bottom = bottom === VOID ? this.bottom_1 : bottom;
    topLeftCornerRadius = topLeftCornerRadius === VOID ? this.topLeftCornerRadius_1 : topLeftCornerRadius;
    topRightCornerRadius = topRightCornerRadius === VOID ? this.topRightCornerRadius_1 : topRightCornerRadius;
    bottomRightCornerRadius = bottomRightCornerRadius === VOID ? this.bottomRightCornerRadius_1 : bottomRightCornerRadius;
    bottomLeftCornerRadius = bottomLeftCornerRadius === VOID ? this.bottomLeftCornerRadius_1 : bottomLeftCornerRadius;
    return $super === VOID ? this.copy_6k8ad_k$(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) : $super.copy_6k8ad_k$.call(this, left, top, right, bottom, new CornerRadius(topLeftCornerRadius), new CornerRadius(topRightCornerRadius), new CornerRadius(bottomRightCornerRadius), new CornerRadius(bottomLeftCornerRadius));
  };
  protoOf(RoundRect).hashCode = function () {
    var result = getNumberHashCode(this.left_1);
    result = imul(result, 31) + getNumberHashCode(this.top_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.right_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.bottom_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.topLeftCornerRadius_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.topRightCornerRadius_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.bottomRightCornerRadius_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.bottomLeftCornerRadius_1) | 0;
    return result;
  };
  protoOf(RoundRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundRect))
      return false;
    var tmp0_other_with_cast = other instanceof RoundRect ? other : THROW_CCE();
    if (!equals(this.left_1, tmp0_other_with_cast.left_1))
      return false;
    if (!equals(this.top_1, tmp0_other_with_cast.top_1))
      return false;
    if (!equals(this.right_1, tmp0_other_with_cast.right_1))
      return false;
    if (!equals(this.bottom_1, tmp0_other_with_cast.bottom_1))
      return false;
    if (!equals(this.topLeftCornerRadius_1, tmp0_other_with_cast.topLeftCornerRadius_1))
      return false;
    if (!equals(this.topRightCornerRadius_1, tmp0_other_with_cast.topRightCornerRadius_1))
      return false;
    if (!equals(this.bottomRightCornerRadius_1, tmp0_other_with_cast.bottomRightCornerRadius_1))
      return false;
    if (!equals(this.bottomLeftCornerRadius_1, tmp0_other_with_cast.bottomLeftCornerRadius_1))
      return false;
    return true;
  };
  function RoundRect_0(rect, topLeft, topRight, bottomRight, bottomLeft) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_r4zx17_k$() : topLeft;
    topRight = topRight === VOID ? Companion_getInstance().get_Zero_r4zx17_k$() : topRight;
    bottomRight = bottomRight === VOID ? Companion_getInstance().get_Zero_r4zx17_k$() : bottomRight;
    bottomLeft = bottomLeft === VOID ? Companion_getInstance().get_Zero_r4zx17_k$() : bottomLeft;
    return new RoundRect(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$(), rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$(), topLeft, topRight, bottomRight, bottomLeft);
  }
  function get_boundingRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.left_1, _this__u8e3s4.top_1, _this__u8e3s4.right_1, _this__u8e3s4.bottom_1);
  }
  function RoundRect_1(left, top, right, bottom, cornerRadius) {
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$7 = floatFromBits(bits_0);
    return RoundRect_2(left, top, right, bottom, tmp, tmp$ret$7);
  }
  function RoundRect_2(left, top, right, bottom, radiusX, radiusY) {
    // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(radiusX));
    var v2 = fromInt(toRawBits(radiusY));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var radius = _CornerRadius___init__impl__ojmabe(tmp$ret$0);
    return new RoundRect(left, top, right, bottom, radius, radius, radius, radius);
  }
  function _Size___init__impl__aywn0g(packedValue) {
    return packedValue;
  }
  function _Size___get_packedValue__impl__7rlt1o($this) {
    return $this;
  }
  function _Size___get_width__impl__58y75t($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function _Size___get_height__impl__a04p02($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function Size__component1_impl_9kmfl4($this) {
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function Size__component2_impl_93kt6x($this) {
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function Size__copy_impl_jrw2sp($this, width, height) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(width));
    var v2 = fromInt(toRawBits(height));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$6);
  }
  function Size__copy$default_impl_nrzrkq($this, width, height, $super) {
    var tmp;
    if (width === VOID) {
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp = floatFromBits(bits);
    } else {
      tmp = width;
    }
    width = tmp;
    var tmp_0;
    if (height === VOID) {
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp_0 = floatFromBits(bits_0);
    } else {
      tmp_0 = height;
    }
    height = tmp_0;
    var tmp_1;
    if ($super === VOID) {
      tmp_1 = Size__copy_impl_jrw2sp($this, width, height);
    } else {
      var tmp_2 = $super;
      tmp_1 = (tmp_2 == null ? null : new Size(tmp_2)).copy_ldlpax_k$.call(new Size($this), width, height).packedValue_1;
    }
    return tmp_1;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.Zero_1 = _Size___init__impl__aywn0g(new Long(0, 0));
    this.Unspecified_1 = _Size___init__impl__aywn0g(new Long(2143289344, 2143289344));
  }
  protoOf(Companion_3).get_Zero_rugywl_k$ = function () {
    return this.Zero_1;
  };
  protoOf(Companion_3).get_Unspecified_3ttj0y_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Size__isEmpty_impl_o9ye97($this) {
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    var tmp = equalsLong(_Size___get_packedValue__impl__7rlt1o($this), new Long(2143289344, 2143289344));
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = !!(tmp | floatFromBits(bits) <= 0.0);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return !!(tmp_0 | floatFromBits(bits_0) <= 0.0);
  }
  function Size__times_impl_fnp4nc($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = floatFromBits(bits) * operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) * operand;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$6);
  }
  function Size__div_impl_f5ffdp($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = floatFromBits(bits) / operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) / operand;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$6);
  }
  function _Size___get_minDimension__impl__4iso0r($this) {
    // Inline function 'androidx.compose.ui.util.unpackAbsFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(shiftRight(value, 32), new Long(2147483647, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackAbsFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(2147483647, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'kotlin.math.min' call
    var b = floatFromBits(bits_0);
    return Math.min(tmp0, b);
  }
  function _Size___get_maxDimension__impl__3y1xu1($this) {
    // Inline function 'androidx.compose.ui.util.unpackAbsFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(shiftRight(value, 32), new Long(2147483647, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackAbsFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(2147483647, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'kotlin.math.max' call
    var b = floatFromBits(bits_0);
    return Math.max(tmp0, b);
  }
  function Size__toString_impl_o87ni8($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    if (!equalsLong(_Size___get_packedValue__impl__7rlt1o($this), new Long(2143289344, 2143289344))) {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$4 = floatFromBits(bits);
      var tmp_0 = toStringAsFixed(tmp$ret$4, 1);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$8 = floatFromBits(bits_0);
      tmp = 'Size(' + tmp_0 + ', ' + toStringAsFixed(tmp$ret$8, 1) + ')';
    } else {
      tmp = 'Size.Unspecified';
    }
    return tmp;
  }
  function Size__hashCode_impl_2h1qpd($this) {
    return $this.hashCode();
  }
  function Size__equals_impl_gzcc1f($this, other) {
    if (!(other instanceof Size))
      return false;
    var tmp0_other_with_cast = other instanceof Size ? other.packedValue_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Size(packedValue) {
    Companion_getInstance_3();
    this.packedValue_1 = packedValue;
  }
  protoOf(Size).toString = function () {
    return Size__toString_impl_o87ni8(this.packedValue_1);
  };
  protoOf(Size).hashCode = function () {
    return Size__hashCode_impl_2h1qpd(this.packedValue_1);
  };
  protoOf(Size).equals = function (other) {
    return Size__equals_impl_gzcc1f(this.packedValue_1, other);
  };
  function Size_0(width, height) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(width));
    var v2 = fromInt(toRawBits(height));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$0);
  }
  function toRect_0(_this__u8e3s4) {
    return Rect_0(Companion_getInstance_0().get_Zero_k6n73t_k$(), _this__u8e3s4);
  }
  function get_isSpecified_0(_this__u8e3s4) {
    return !equalsLong(_Size___get_packedValue__impl__7rlt1o(_this__u8e3s4), new Long(2143289344, 2143289344));
  }
  function get_isUnspecified_0(_this__u8e3s4) {
    return equalsLong(_Size___get_packedValue__impl__7rlt1o(_this__u8e3s4), new Long(2143289344, 2143289344));
  }
  function get_center(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = floatFromBits(bits) / 2.0;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) / 2.0;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$6);
  }
  //region block: init
  androidx_compose_ui_geometry_MutableRect$stable = 8;
  androidx_compose_ui_geometry_Rect$stable = 0;
  androidx_compose_ui_geometry_RoundRect$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CornerRadius;
  _.$_$.b = MutableRect;
  _.$_$.c = Offset;
  _.$_$.d = Rect_1;
  _.$_$.e = Rect_0;
  _.$_$.f = Rect;
  _.$_$.g = RoundRect_0;
  _.$_$.h = RoundRect_1;
  _.$_$.i = RoundRect;
  _.$_$.j = Size;
  _.$_$.k = get_boundingRect;
  _.$_$.l = get_center;
  _.$_$.m = get_isSimple;
  _.$_$.n = lerp_0;
  _.$_$.o = toRect;
  _.$_$.p = toRect_0;
  _.$_$.q = _CornerRadius___init__impl__ojmabe;
  _.$_$.r = _CornerRadius___get_packedValue__impl__okv4jq;
  _.$_$.s = _Offset___init__impl__c168vi;
  _.$_$.t = Offset__div_impl_eaxtg1;
  _.$_$.u = Offset__getDistanceSquared_impl_97mhi6;
  _.$_$.v = Offset__getDistance_impl_pclvxn;
  _.$_$.w = Offset__hashCode_impl_hbql41;
  _.$_$.x = Offset__minus_impl_hoj2c0;
  _.$_$.y = _Offset___get_packedValue__impl__xh2k8q;
  _.$_$.z = Offset__plus_impl_c78cg0;
  _.$_$.a1 = Offset__times_impl_jz1mli;
  _.$_$.b1 = Offset__toString_impl_4ffbou;
  _.$_$.c1 = _Size___init__impl__aywn0g;
  _.$_$.d1 = Size__hashCode_impl_2h1qpd;
  _.$_$.e1 = Size__isEmpty_impl_o9ye97;
  _.$_$.f1 = _Size___get_minDimension__impl__4iso0r;
  _.$_$.g1 = _Size___get_packedValue__impl__7rlt1o;
  _.$_$.h1 = Size__times_impl_fnp4nc;
  _.$_$.i1 = Size__toString_impl_o87ni8;
  _.$_$.j1 = Offset__copy$default_impl_bmwjg8;
  _.$_$.k1 = Companion_getInstance;
  _.$_$.l1 = Companion_getInstance_0;
  _.$_$.m1 = Companion_getInstance_1;
  _.$_$.n1 = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-geometry.js.map
