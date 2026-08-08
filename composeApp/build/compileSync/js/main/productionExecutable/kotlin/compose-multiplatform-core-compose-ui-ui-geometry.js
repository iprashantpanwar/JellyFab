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
  var Long = kotlin_kotlin.$_$.hd;
  var protoOf = kotlin_kotlin.$_$.z9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i9;
  var shiftRight = kotlin_kotlin.$_$.j8;
  var convertToInt = kotlin_kotlin.$_$.x7;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.u2;
  var floatFromBits = kotlin_kotlin.$_$.a9;
  var bitwiseAnd = kotlin_kotlin.$_$.t7;
  var THROW_CCE = kotlin_kotlin.$_$.md;
  var equalsLong = kotlin_kotlin.$_$.a8;
  var initMetadataForClass = kotlin_kotlin.$_$.h9;
  var isNaN_0 = kotlin_kotlin.$_$.yd;
  var isInfinite = kotlin_kotlin.$_$.xd;
  var numberToInt = kotlin_kotlin.$_$.x9;
  var toRawBits = kotlin_kotlin.$_$.me;
  var fromInt = kotlin_kotlin.$_$.b8;
  var shiftLeft = kotlin_kotlin.$_$.h8;
  var bitwiseOr = kotlin_kotlin.$_$.u7;
  var Unit_instance = kotlin_kotlin.$_$.b3;
  var VOID = kotlin_kotlin.$_$.b;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var getNumberHashCode = kotlin_kotlin.$_$.d9;
  var equals = kotlin_kotlin.$_$.z8;
  var shiftRightUnsigned = kotlin_kotlin.$_$.i8;
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
  function Companion() {
    Companion_instance = this;
    this.f3t_1 = _CornerRadius___init__impl__ojmabe(new Long(0, 0));
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CornerRadius__toString_impl_m3k4zq($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    if (tmp_0 === floatFromBits(bits_0)) {
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _CornerRadius___get_packedValue__impl__okv4jq($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      var tmp$ret$11 = floatFromBits(bits_1);
      tmp = 'CornerRadius.circular(' + toStringAsFixed(tmp$ret$11, 1) + ')';
    } else {
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_2 = _CornerRadius___get_packedValue__impl__okv4jq($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_2 = convertToInt(shiftRight(value_2, 32));
      var tmp$ret$15 = floatFromBits(bits_2);
      var tmp_1 = toStringAsFixed(tmp$ret$15, 1);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_3 = _CornerRadius___get_packedValue__impl__okv4jq($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
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
    var tmp0_other_with_cast = other instanceof CornerRadius ? other.g3t_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function CornerRadius(packedValue) {
    Companion_getInstance();
    this.g3t_1 = packedValue;
  }
  protoOf(CornerRadius).toString = function () {
    return CornerRadius__toString_impl_m3k4zq(this.g3t_1);
  };
  protoOf(CornerRadius).hashCode = function () {
    return CornerRadius__hashCode_impl_r6e06j(this.g3t_1);
  };
  protoOf(CornerRadius).equals = function (other) {
    return CornerRadius__equals_impl_776hdl(this.g3t_1, other);
  };
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
    this.h3t_1 = left;
    this.i3t_1 = top;
    this.j3t_1 = right;
    this.k3t_1 = bottom;
  }
  protoOf(MutableRect).yl = function () {
    return !!(this.h3t_1 >= this.j3t_1 | this.i3t_1 >= this.k3t_1);
  };
  protoOf(MutableRect).l3t = function (offset) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$7 = floatFromBits(bits_0);
    return this.m3t(tmp, tmp$ret$7);
  };
  protoOf(MutableRect).m3t = function (translateX, translateY) {
    this.h3t_1 = this.h3t_1 + translateX;
    this.i3t_1 = this.i3t_1 + translateY;
    this.j3t_1 = this.j3t_1 + translateX;
    this.k3t_1 = this.k3t_1 + translateY;
  };
  protoOf(MutableRect).n3t = function (left, top, right, bottom) {
    var tmp = this;
    // Inline function 'kotlin.math.max' call
    var b = this.h3t_1;
    tmp.h3t_1 = Math.max(left, b);
    var tmp_0 = this;
    // Inline function 'kotlin.math.max' call
    var b_0 = this.i3t_1;
    tmp_0.i3t_1 = Math.max(top, b_0);
    var tmp_1 = this;
    // Inline function 'kotlin.math.min' call
    var b_1 = this.j3t_1;
    tmp_1.j3t_1 = Math.min(right, b_1);
    var tmp_2 = this;
    // Inline function 'kotlin.math.min' call
    var b_2 = this.k3t_1;
    tmp_2.k3t_1 = Math.min(bottom, b_2);
  };
  protoOf(MutableRect).o3t = function (left, top, right, bottom) {
    this.h3t_1 = left;
    this.i3t_1 = top;
    this.j3t_1 = right;
    this.k3t_1 = bottom;
  };
  protoOf(MutableRect).toString = function () {
    return 'MutableRect(' + (toStringAsFixed(this.h3t_1, 1) + ', ') + (toStringAsFixed(this.i3t_1, 1) + ', ') + (toStringAsFixed(this.j3t_1, 1) + ', ') + (toStringAsFixed(this.k3t_1, 1) + ')');
  };
  function toRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.h3t_1, _this__u8e3s4.i3t_1, _this__u8e3s4.j3t_1, _this__u8e3s4.k3t_1);
  }
  function _Offset___init__impl__c168vi(packedValue) {
    return packedValue;
  }
  function _Offset___get_packedValue__impl__xh2k8q($this) {
    return $this;
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
      var value_0 = _Offset___get_packedValue__impl__xh2k8q($this);
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
      tmp_1 = Offset__copy_impl_9gtypn($this, x, y);
    } else {
      var tmp_2 = $super;
      tmp_1 = (tmp_2 == null ? null : new Offset(tmp_2)).q3t.call(new Offset($this), x, y).p3t_1;
    }
    return tmp_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.r3t_1 = _Offset___init__impl__c168vi(new Long(0, 0));
    this.s3t_1 = _Offset___init__impl__c168vi(new Long(2139095040, 2139095040));
    this.t3t_1 = _Offset___init__impl__c168vi(new Long(2143289344, 2143289344));
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Offset__getDistance_impl_pclvxn($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var y = floatFromBits(bits_0);
    // Inline function 'kotlin.math.sqrt' call
    var x_0 = x * x + y * y;
    return Math.sqrt(x_0);
  }
  function Offset__getDistanceSquared_impl_97mhi6($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var y = floatFromBits(bits_0);
    return x * x + y * y;
  }
  function Offset__minus_impl_hoj2c0($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    var tmp0 = tmp - floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
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
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    var tmp0 = tmp + floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
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
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits) * operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
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
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits) / operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) / operand;
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
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp$ret$4 = floatFromBits(bits);
      var tmp_0 = toStringAsFixed(tmp$ret$4, 1);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
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
    var tmp0_other_with_cast = other instanceof Offset ? other.p3t_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Offset(packedValue) {
    Companion_getInstance_0();
    this.p3t_1 = packedValue;
  }
  protoOf(Offset).toString = function () {
    return Offset__toString_impl_4ffbou(this.p3t_1);
  };
  protoOf(Offset).hashCode = function () {
    return Offset__hashCode_impl_hbql41(this.p3t_1);
  };
  protoOf(Offset).equals = function (other) {
    return Offset__equals_impl_exf2yj(this.p3t_1, other);
  };
  function lerp_0(start, stop, fraction) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(start);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(stop);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    var tmp$ret$5 = floatFromBits(bits_0);
    var tmp0 = lerp(tmp, tmp$ret$5, fraction);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(start);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(stop);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
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
    this.u3t_1 = new Rect(0.0, 0.0, 0.0, 0.0);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_1();
    this.v3t_1 = left;
    this.w3t_1 = top;
    this.x3t_1 = right;
    this.y3t_1 = bottom;
  }
  protoOf(Rect).z3t = function () {
    // Inline function 'androidx.compose.ui.geometry.Rect.width' call
    var tmp0 = this.x3t_1 - this.v3t_1;
    // Inline function 'androidx.compose.ui.geometry.Rect.height' call
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.y3t_1 - this.w3t_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$2);
  };
  protoOf(Rect).a3u = function (offset) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp$ret$3 = floatFromBits(bits);
    var tmp = this.v3t_1 + tmp$ret$3;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$7 = floatFromBits(bits_0);
    var tmp_0 = this.w3t_1 + tmp$ret$7;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp$ret$11 = floatFromBits(bits_1);
    var tmp_1 = this.x3t_1 + tmp$ret$11;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    var tmp$ret$15 = floatFromBits(bits_2);
    return new Rect(tmp, tmp_0, tmp_1, this.y3t_1 + tmp$ret$15);
  };
  protoOf(Rect).b3u = function (translateX, translateY) {
    return new Rect(this.v3t_1 + translateX, this.w3t_1 + translateY, this.x3t_1 + translateX, this.y3t_1 + translateY);
  };
  protoOf(Rect).c3u = function (other) {
    var tmp0 = this.v3t_1;
    // Inline function 'kotlin.math.max' call
    var b = other.v3t_1;
    var tmp = Math.max(tmp0, b);
    var tmp0_0 = this.w3t_1;
    // Inline function 'kotlin.math.max' call
    var b_0 = other.w3t_1;
    var tmp_0 = Math.max(tmp0_0, b_0);
    var tmp0_1 = this.x3t_1;
    // Inline function 'kotlin.math.min' call
    var b_1 = other.x3t_1;
    var tmp_1 = Math.min(tmp0_1, b_1);
    var tmp0_2 = this.y3t_1;
    // Inline function 'kotlin.math.min' call
    var b_2 = other.y3t_1;
    var tmp$ret$3 = Math.min(tmp0_2, b_2);
    return new Rect(tmp, tmp_0, tmp_1, tmp$ret$3);
  };
  protoOf(Rect).d3u = function () {
    var tmp0 = this.v3t_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.w3t_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  };
  protoOf(Rect).e3u = function () {
    var tmp0 = this.x3t_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.y3t_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  };
  protoOf(Rect).f3u = function (offset) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var y = floatFromBits(bits_0);
    return !!(!!(!!(x >= this.v3t_1 & x < this.x3t_1) & y >= this.w3t_1) & y < this.y3t_1);
  };
  protoOf(Rect).toString = function () {
    return 'Rect.fromLTRB(' + (toStringAsFixed(this.v3t_1, 1) + ', ') + (toStringAsFixed(this.w3t_1, 1) + ', ') + (toStringAsFixed(this.x3t_1, 1) + ', ') + (toStringAsFixed(this.y3t_1, 1) + ')');
  };
  protoOf(Rect).g3u = function (left, top, right, bottom) {
    return new Rect(left, top, right, bottom);
  };
  protoOf(Rect).h3u = function (left, top, right, bottom, $super) {
    left = left === VOID ? this.v3t_1 : left;
    top = top === VOID ? this.w3t_1 : top;
    right = right === VOID ? this.x3t_1 : right;
    bottom = bottom === VOID ? this.y3t_1 : bottom;
    return $super === VOID ? this.g3u(left, top, right, bottom) : $super.g3u.call(this, left, top, right, bottom);
  };
  protoOf(Rect).hashCode = function () {
    var result = getNumberHashCode(this.v3t_1);
    result = imul(result, 31) + getNumberHashCode(this.w3t_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x3t_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y3t_1) | 0;
    return result;
  };
  protoOf(Rect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rect))
      return false;
    var tmp0_other_with_cast = other instanceof Rect ? other : THROW_CCE();
    if (!equals(this.v3t_1, tmp0_other_with_cast.v3t_1))
      return false;
    if (!equals(this.w3t_1, tmp0_other_with_cast.w3t_1))
      return false;
    if (!equals(this.x3t_1, tmp0_other_with_cast.x3t_1))
      return false;
    if (!equals(this.y3t_1, tmp0_other_with_cast.y3t_1))
      return false;
    return true;
  };
  function Rect_0(offset, size) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp_0 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_1 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    var tmp_2 = tmp_1 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    var tmp_3 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    var tmp$ret$23 = floatFromBits(bits_4);
    return new Rect(tmp, tmp_0, tmp_2, tmp_3 + tmp$ret$23);
  }
  function Rect_1(topLeft, bottomRight) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp_0 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(bottomRight);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_1 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(bottomRight);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    var tmp$ret$15 = floatFromBits(bits_2);
    return new Rect(tmp, tmp_0, tmp_1, tmp$ret$15);
  }
  var androidx_compose_ui_geometry_RoundRect$stable;
  function get_isSimple(_this__u8e3s4) {
    var tmp;
    var tmp_0;
    var tmp_1;
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.isCircular' call
    var this_0 = _this__u8e3s4.m3u_1;
    if (equalsLong(shiftRightUnsigned(_CornerRadius___get_packedValue__impl__okv4jq(this_0), 32), bitwiseAnd(_CornerRadius___get_packedValue__impl__okv4jq(this_0), new Long(-1, 0)))) {
      tmp_1 = equalsLong(_CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4.m3u_1), _CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4.n3u_1));
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equalsLong(_CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4.m3u_1), _CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4.o3u_1));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equalsLong(_CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4.m3u_1), _CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4.p3u_1));
    } else {
      tmp = false;
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.r3u_1 = RoundRect_1(0.0, 0.0, 0.0, 0.0, Companion_getInstance().f3t_1);
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RoundRect(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) {
    Companion_getInstance_2();
    topLeftCornerRadius = topLeftCornerRadius === VOID ? Companion_getInstance().f3t_1 : topLeftCornerRadius;
    topRightCornerRadius = topRightCornerRadius === VOID ? Companion_getInstance().f3t_1 : topRightCornerRadius;
    bottomRightCornerRadius = bottomRightCornerRadius === VOID ? Companion_getInstance().f3t_1 : bottomRightCornerRadius;
    bottomLeftCornerRadius = bottomLeftCornerRadius === VOID ? Companion_getInstance().f3t_1 : bottomLeftCornerRadius;
    this.i3u_1 = left;
    this.j3u_1 = top;
    this.k3u_1 = right;
    this.l3u_1 = bottom;
    this.m3u_1 = topLeftCornerRadius;
    this.n3u_1 = topRightCornerRadius;
    this.o3u_1 = bottomRightCornerRadius;
    this.p3u_1 = bottomLeftCornerRadius;
    this.q3u_1 = null;
  }
  protoOf(RoundRect).s3u = function () {
    return this.k3u_1 - this.i3u_1;
  };
  protoOf(RoundRect).t3u = function () {
    return this.l3u_1 - this.j3u_1;
  };
  protoOf(RoundRect).toString = function () {
    var tlRadius = this.m3u_1;
    var trRadius = this.n3u_1;
    var brRadius = this.o3u_1;
    var blRadius = this.p3u_1;
    var rect = toStringAsFixed(this.i3u_1, 1) + ', ' + (toStringAsFixed(this.j3u_1, 1) + ', ') + (toStringAsFixed(this.k3u_1, 1) + ', ') + toStringAsFixed(this.l3u_1, 1);
    if (equals(tlRadius, trRadius) && equals(trRadius, brRadius) && equals(brRadius, blRadius)) {
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _CornerRadius___get_packedValue__impl__okv4jq(tlRadius);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _CornerRadius___get_packedValue__impl__okv4jq(tlRadius);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      if (tmp === floatFromBits(bits_0)) {
        // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_1 = _CornerRadius___get_packedValue__impl__okv4jq(tlRadius);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_1 = convertToInt(shiftRight(value_1, 32));
        var tmp$ret$11 = floatFromBits(bits_1);
        return 'RoundRect(rect=' + rect + ', radius=' + toStringAsFixed(tmp$ret$11, 1) + ')';
      }
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_2 = _CornerRadius___get_packedValue__impl__okv4jq(tlRadius);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_2 = convertToInt(shiftRight(value_2, 32));
      var tmp$ret$15 = floatFromBits(bits_2);
      var tmp_0 = 'RoundRect(rect=' + rect + ', x=' + toStringAsFixed(tmp$ret$15, 1) + ', ';
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_3 = _CornerRadius___get_packedValue__impl__okv4jq(tlRadius);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
      var tmp$ret$19 = floatFromBits(bits_3);
      return tmp_0 + ('y=' + toStringAsFixed(tmp$ret$19, 1) + ')');
    }
    return 'RoundRect(' + ('rect=' + rect + ', ') + ('topLeft=' + CornerRadius__toString_impl_m3k4zq(tlRadius) + ', ') + ('topRight=' + CornerRadius__toString_impl_m3k4zq(trRadius) + ', ') + ('bottomRight=' + CornerRadius__toString_impl_m3k4zq(brRadius) + ', ') + ('bottomLeft=' + CornerRadius__toString_impl_m3k4zq(blRadius) + ')');
  };
  protoOf(RoundRect).hashCode = function () {
    var result = getNumberHashCode(this.i3u_1);
    result = imul(result, 31) + getNumberHashCode(this.j3u_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k3u_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l3u_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.m3u_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.n3u_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.o3u_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.p3u_1) | 0;
    return result;
  };
  protoOf(RoundRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundRect))
      return false;
    var tmp0_other_with_cast = other instanceof RoundRect ? other : THROW_CCE();
    if (!equals(this.i3u_1, tmp0_other_with_cast.i3u_1))
      return false;
    if (!equals(this.j3u_1, tmp0_other_with_cast.j3u_1))
      return false;
    if (!equals(this.k3u_1, tmp0_other_with_cast.k3u_1))
      return false;
    if (!equals(this.l3u_1, tmp0_other_with_cast.l3u_1))
      return false;
    if (!equals(this.m3u_1, tmp0_other_with_cast.m3u_1))
      return false;
    if (!equals(this.n3u_1, tmp0_other_with_cast.n3u_1))
      return false;
    if (!equals(this.o3u_1, tmp0_other_with_cast.o3u_1))
      return false;
    if (!equals(this.p3u_1, tmp0_other_with_cast.p3u_1))
      return false;
    return true;
  };
  function RoundRect_0(rect, topLeft, topRight, bottomRight, bottomLeft) {
    topLeft = topLeft === VOID ? Companion_getInstance().f3t_1 : topLeft;
    topRight = topRight === VOID ? Companion_getInstance().f3t_1 : topRight;
    bottomRight = bottomRight === VOID ? Companion_getInstance().f3t_1 : bottomRight;
    bottomLeft = bottomLeft === VOID ? Companion_getInstance().f3t_1 : bottomLeft;
    return new RoundRect(rect.v3t_1, rect.w3t_1, rect.x3t_1, rect.y3t_1, topLeft, topRight, bottomRight, bottomLeft);
  }
  function RoundRect_1(left, top, right, bottom, cornerRadius) {
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
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
  function Companion_3() {
    Companion_instance_3 = this;
    this.u3u_1 = _Size___init__impl__aywn0g(new Long(0, 0));
    this.v3u_1 = _Size___init__impl__aywn0g(new Long(2143289344, 2143289344));
  }
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
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = !!(tmp | floatFromBits(bits) <= 0.0);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    return !!(tmp_0 | floatFromBits(bits_0) <= 0.0);
  }
  function Size__times_impl_fnp4nc($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits) * operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) * operand;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$6);
  }
  function _Size___get_minDimension__impl__4iso0r($this) {
    // Inline function 'androidx.compose.ui.util.unpackAbsFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(bitwiseAnd(shiftRight(value, 32), new Long(2147483647, 0)));
    var tmp0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackAbsFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(2147483647, 0)));
    // Inline function 'kotlin.math.min' call
    var b = floatFromBits(bits_0);
    return Math.min(tmp0, b);
  }
  function Size__toString_impl_o87ni8($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    if (!equalsLong(_Size___get_packedValue__impl__7rlt1o($this), new Long(2143289344, 2143289344))) {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp$ret$4 = floatFromBits(bits);
      var tmp_0 = toStringAsFixed(tmp$ret$4, 1);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
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
    var tmp0_other_with_cast = other instanceof Size ? other.w3u_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Size(packedValue) {
    Companion_getInstance_3();
    this.w3u_1 = packedValue;
  }
  protoOf(Size).toString = function () {
    return Size__toString_impl_o87ni8(this.w3u_1);
  };
  protoOf(Size).hashCode = function () {
    return Size__hashCode_impl_2h1qpd(this.w3u_1);
  };
  protoOf(Size).equals = function (other) {
    return Size__equals_impl_gzcc1f(this.w3u_1, other);
  };
  function toRect_0(_this__u8e3s4) {
    return Rect_0(Companion_getInstance_0().r3t_1, _this__u8e3s4);
  }
  function get_center(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits) / 2.0;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
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
  _.$_$.k = get_center;
  _.$_$.l = get_isSimple;
  _.$_$.m = lerp_0;
  _.$_$.n = toRect;
  _.$_$.o = toRect_0;
  _.$_$.p = _CornerRadius___init__impl__ojmabe;
  _.$_$.q = _CornerRadius___get_packedValue__impl__okv4jq;
  _.$_$.r = _Offset___init__impl__c168vi;
  _.$_$.s = Offset__div_impl_eaxtg1;
  _.$_$.t = Offset__getDistanceSquared_impl_97mhi6;
  _.$_$.u = Offset__getDistance_impl_pclvxn;
  _.$_$.v = Offset__hashCode_impl_hbql41;
  _.$_$.w = Offset__minus_impl_hoj2c0;
  _.$_$.x = _Offset___get_packedValue__impl__xh2k8q;
  _.$_$.y = Offset__plus_impl_c78cg0;
  _.$_$.z = Offset__times_impl_jz1mli;
  _.$_$.a1 = Offset__toString_impl_4ffbou;
  _.$_$.b1 = _Size___init__impl__aywn0g;
  _.$_$.c1 = Size__hashCode_impl_2h1qpd;
  _.$_$.d1 = Size__isEmpty_impl_o9ye97;
  _.$_$.e1 = _Size___get_minDimension__impl__4iso0r;
  _.$_$.f1 = _Size___get_packedValue__impl__7rlt1o;
  _.$_$.g1 = Size__times_impl_fnp4nc;
  _.$_$.h1 = Size__toString_impl_o87ni8;
  _.$_$.i1 = Offset__copy$default_impl_bmwjg8;
  _.$_$.j1 = Companion_getInstance;
  _.$_$.k1 = Companion_getInstance_0;
  _.$_$.l1 = Companion_getInstance_1;
  _.$_$.m1 = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-geometry.js.map
