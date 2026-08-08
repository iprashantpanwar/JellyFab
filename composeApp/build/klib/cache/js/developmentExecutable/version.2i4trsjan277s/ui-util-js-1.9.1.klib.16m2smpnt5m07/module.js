(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-collection-collection.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-util'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-util'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-util'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-util'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-util'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-collection-collection']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_collection_collection) {
  'use strict';
  //region block: imports
  var THROW_CCE = kotlin_kotlin.$_$.vl;
  var protoOf = kotlin_kotlin.$_$.yg;
  var Annotation = kotlin_kotlin.$_$.al;
  var initMetadataForClass = kotlin_kotlin.$_$.vf;
  var VOID = kotlin_kotlin.$_$.e;
  var fromInt = kotlin_kotlin.$_$.ne;
  var shiftLeft = kotlin_kotlin.$_$.te;
  var Long = kotlin_kotlin.$_$.ol;
  var bitwiseAnd = kotlin_kotlin.$_$.fe;
  var bitwiseOr = kotlin_kotlin.$_$.ge;
  var shiftRight = kotlin_kotlin.$_$.ve;
  var convertToInt = kotlin_kotlin.$_$.je;
  var toRawBits = kotlin_kotlin.$_$.gn;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.v4;
  var floatFromBits = kotlin_kotlin.$_$.of;
  var Unit_getInstance = kotlin_kotlin.$_$.n5;
  var get_lastIndex = kotlin_kotlin.$_$.ma;
  var compareTo = kotlin_kotlin.$_$.jf;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.i1;
  var addAll = kotlin_kotlin.$_$.z6;
  var MutableScatterSet = kotlin_androidx_collection_collection.$_$.o;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var toString = kotlin_kotlin.$_$.bh;
  var Char = kotlin_kotlin.$_$.el;
  var isCharSequence = kotlin_kotlin.$_$.gg;
  var roundToInt = kotlin_kotlin.$_$.fh;
  var compare = kotlin_kotlin.$_$.ie;
  var toRawBits_0 = kotlin_kotlin.$_$.hn;
  var divide = kotlin_kotlin.$_$.le;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.u4;
  var doubleFromBits = kotlin_kotlin.$_$.mf;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ExperimentalComposeUiApi, 'ExperimentalComposeUiApi', VOID, VOID, [Annotation]);
  initMetadataForClass(ExperimentalIndirectTouchTypeApi, 'ExperimentalIndirectTouchTypeApi', VOID, VOID, [Annotation]);
  initMetadataForClass(InternalComposeUiApi, 'InternalComposeUiApi', VOID, VOID, [Annotation]);
  //endregion
  function ExperimentalComposeUiApi() {
  }
  protoOf(ExperimentalComposeUiApi).equals = function (other) {
    if (!(other instanceof ExperimentalComposeUiApi))
      return false;
    other instanceof ExperimentalComposeUiApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalComposeUiApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalComposeUiApi).toString = function () {
    return '@androidx.compose.ui.ExperimentalComposeUiApi(' + ')';
  };
  function ExperimentalIndirectTouchTypeApi() {
  }
  protoOf(ExperimentalIndirectTouchTypeApi).equals = function (other) {
    if (!(other instanceof ExperimentalIndirectTouchTypeApi))
      return false;
    other instanceof ExperimentalIndirectTouchTypeApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalIndirectTouchTypeApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalIndirectTouchTypeApi).toString = function () {
    return '@androidx.compose.ui.ExperimentalIndirectTouchTypeApi(' + ')';
  };
  function InternalComposeUiApi() {
  }
  protoOf(InternalComposeUiApi).equals = function (other) {
    if (!(other instanceof InternalComposeUiApi))
      return false;
    other instanceof InternalComposeUiApi || THROW_CCE();
    return true;
  };
  protoOf(InternalComposeUiApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalComposeUiApi).toString = function () {
    return '@androidx.compose.ui.InternalComposeUiApi(' + ')';
  };
  function packInts(val1, val2) {
    return bitwiseOr(shiftLeft(fromInt(val1), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
  }
  function unpackInt1(value) {
    return convertToInt(shiftRight(value, 32));
  }
  function unpackInt2(value) {
    return convertToInt(bitwiseAnd(value, new Long(-1, 0)));
  }
  function packFloats(val1, val2) {
    var v1 = fromInt(toRawBits(val1));
    var v2 = fromInt(toRawBits(val2));
    return bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
  }
  function unpackFloat1(value) {
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function unpackFloat2(value) {
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function unpackAbsFloat1(value) {
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(shiftRight(value, 32), new Long(2147483647, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function unpackAbsFloat2(value) {
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(2147483647, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function fastFirst(_this__u8e3s4, predicate) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        if (predicate(item))
          return item;
      }
       while (inductionVariable <= last);
    throwNoSuchElementException('Collection contains no element matching the predicate.');
  }
  function fastSumBy(_this__u8e3s4, selector) {
    var sum = 0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        sum = sum + selector(item) | 0;
      }
       while (inductionVariable <= last);
    return sum;
  }
  function fastMaxOfOrNull(_this__u8e3s4, selector) {
    if (_this__u8e3s4.isEmpty_y1axqb_k$())
      return null;
    var maxValue = selector(_this__u8e3s4.get_c1px32_k$(0));
    var inductionVariable = 1;
    var last = get_lastIndex(_this__u8e3s4);
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var v = selector(_this__u8e3s4.get_c1px32_k$(i));
        if (compareTo(v, maxValue) > 0)
          maxValue = v;
      }
       while (!(i === last));
    return maxValue;
  }
  function fastMap(_this__u8e3s4, transform) {
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = transform(item);
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastForEach(_this__u8e3s4, action) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        action(item);
      }
       while (inductionVariable <= last);
  }
  function fastForEachIndexed(_this__u8e3s4, action) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        action(index, item);
      }
       while (inductionVariable <= last);
  }
  function fastFirstOrNull(_this__u8e3s4, predicate) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        if (predicate(item))
          return item;
      }
       while (inductionVariable <= last);
    return null;
  }
  function fastAll(_this__u8e3s4, predicate) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        if (!predicate(item))
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function fastAny(_this__u8e3s4, predicate) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        if (predicate(item))
          return true;
      }
       while (inductionVariable <= last);
    return false;
  }
  function fastMaxOfOrDefault(_this__u8e3s4, defaultValue, selector) {
    if (_this__u8e3s4.isEmpty_y1axqb_k$())
      return defaultValue;
    var maxValue = selector(_this__u8e3s4.get_c1px32_k$(0));
    var inductionVariable = 1;
    var last = get_lastIndex(_this__u8e3s4);
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var v = selector(_this__u8e3s4.get_c1px32_k$(i));
        if (compareTo(v, maxValue) > 0)
          maxValue = v;
      }
       while (!(i === last));
    return maxValue;
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastFold(_this__u8e3s4, initial, operation) {
    var accumulator = initial;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        accumulator = operation(accumulator, item);
      }
       while (inductionVariable <= last);
    return accumulator;
  }
  function fastMapNotNull(_this__u8e3s4, transform) {
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        var tmp0_safe_receiver = transform(item);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(tmp0_safe_receiver);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastMaxBy(_this__u8e3s4, selector) {
    if (_this__u8e3s4.isEmpty_y1axqb_k$())
      return null;
    var maxElem = _this__u8e3s4.get_c1px32_k$(0);
    var maxValue = selector(maxElem);
    var inductionVariable = 1;
    var last = get_lastIndex(_this__u8e3s4);
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var e = _this__u8e3s4.get_c1px32_k$(i);
        var v = selector(e);
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (!(i === last));
    return maxElem;
  }
  function fastFilteredMap(_this__u8e3s4, predicate, transform) {
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        if (predicate(item)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = transform(item);
          target.add_utx5q5_k$(element);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastFilter(_this__u8e3s4, predicate) {
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        if (predicate(item)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(item);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastFlatMap(_this__u8e3s4, transform) {
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        var list = transform(item);
        addAll(target, list);
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastDistinctBy(_this__u8e3s4, selector) {
    var set = new MutableScatterSet(_this__u8e3s4.get_size_woubt6_k$());
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        var key = selector(item);
        if (set.add_utx5q5_k$(key)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(item);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function throwNoSuchElementException(message) {
    throw NoSuchElementException_init_$Create$(message);
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.append_jgojdo_k$(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.get_c1px32_k$(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.append_jgojdo_k$(separator);
        }
        if (limit < 0 || count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 && count > limit) {
      buffer.append_jgojdo_k$(truncated);
    }
    buffer.append_jgojdo_k$(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null))
      _this__u8e3s4.append_jgojdo_k$(transform(element));
    else {
      if (element == null ? true : isCharSequence(element))
        _this__u8e3s4.append_jgojdo_k$(element);
      else {
        if (element instanceof Char)
          _this__u8e3s4.append_am5a4z_k$(element.value_1);
        else {
          _this__u8e3s4.append_jgojdo_k$(toString(element));
        }
      }
    }
  }
  function fastForEachReversed(_this__u8e3s4, action) {
    var inductionVariable = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        action(item);
      }
       while (0 <= inductionVariable);
  }
  function fastLastOrNull(_this__u8e3s4, predicate) {
    var inductionVariable = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        if (predicate(item))
          return item;
      }
       while (0 <= inductionVariable);
    return null;
  }
  function lerp(start, stop, fraction) {
    return (1 - fraction) * start + fraction * stop;
  }
  function lerp_0(start, stop, fraction) {
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_0 = (stop - start | 0) * fraction;
    return start + roundToInt(this_0) | 0;
  }
  function fastCoerceIn(_this__u8e3s4, minimumValue, maximumValue) {
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
    return this_0 > maximumValue ? maximumValue : this_0;
  }
  function fastCoerceIn_0(_this__u8e3s4, minimumValue, maximumValue) {
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
    return this_0 > maximumValue ? maximumValue : this_0;
  }
  function fastCoerceAtLeast(_this__u8e3s4, minimumValue) {
    return _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
  }
  function fastCoerceAtLeast_0(_this__u8e3s4, minimumValue) {
    return compare(_this__u8e3s4, minimumValue) < 0 ? minimumValue : _this__u8e3s4;
  }
  function fastCoerceAtMost(_this__u8e3s4, maximumValue) {
    return _this__u8e3s4 > maximumValue ? maximumValue : _this__u8e3s4;
  }
  function fastCoerceIn_1(_this__u8e3s4, minimumValue, maximumValue) {
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = compare(_this__u8e3s4, minimumValue) < 0 ? minimumValue : _this__u8e3s4;
    return compare(this_0, maximumValue) > 0 ? maximumValue : this_0;
  }
  function fastIsFinite(_this__u8e3s4) {
    return compare(bitwiseAnd(toRawBits_0(_this__u8e3s4), new Long(-1, 2147483647)), new Long(0, 2146435072)) < 0;
  }
  function fastCoerceAtLeast_1(_this__u8e3s4, minimumValue) {
    return _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
  }
  function fastMinOf(a, b, c, d) {
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'kotlin.comparisons.minOf' call
    var b_0 = Math.min(c, d);
    // Inline function 'kotlin.comparisons.minOf' call
    var b_1 = Math.min(b, b_0);
    return Math.min(a, b_1);
  }
  function fastMaxOf(a, b, c, d) {
    // Inline function 'kotlin.comparisons.maxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_0 = Math.max(c, d);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_1 = Math.max(b, b_0);
    return Math.max(a, b_1);
  }
  function fastIsFinite_0(_this__u8e3s4) {
    return (toRawBits(_this__u8e3s4) & 2147483647) < 2139095040;
  }
  function fastCoerceIn_2(_this__u8e3s4, minimumValue, maximumValue) {
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
    return this_0 > maximumValue ? maximumValue : this_0;
  }
  function fastCbrt(x) {
    var v = bitwiseAnd(fromInt(toRawBits(x)), new Long(-1, 1));
    // Inline function 'kotlin.Long.div' call
    var tmp$ret$0 = divide(v, fromInt(3));
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = 709952852 + convertToInt(tmp$ret$0) | 0;
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var estimate = floatFromBits(bits);
    estimate = estimate - (estimate - x / (estimate * estimate)) * (1.0 / 3.0);
    estimate = estimate - (estimate - x / (estimate * estimate)) * (1.0 / 3.0);
    return estimate;
  }
  function normalizedAngleCos(normalizedDegrees) {
    // Inline function 'androidx.compose.ui.util.normalizedAngleSin' call
    var normalizedDegrees_0 = normalizedDegrees + 0.25;
    // Inline function 'kotlin.math.floor' call
    var x = normalizedDegrees_0 + 0.5;
    var degrees = normalizedDegrees_0 - Math.floor(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = 2.0 * Math.abs(degrees);
    var a = 1.0 - x_0;
    return 8.0 * degrees * a / (1.25 - x_0 * a);
  }
  function normalizedAngleSin(normalizedDegrees) {
    // Inline function 'kotlin.math.floor' call
    var x = normalizedDegrees + 0.5;
    var degrees = normalizedDegrees - Math.floor(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = 2.0 * Math.abs(degrees);
    var a = 1.0 - x_0;
    return 8.0 * degrees * a / (1.25 - x_0 * a);
  }
  function fastCoerceAtMost_0(_this__u8e3s4, maximumValue) {
    return _this__u8e3s4 > maximumValue ? maximumValue : _this__u8e3s4;
  }
  function fastCoerceAtMost_1(_this__u8e3s4, maximumValue) {
    return compare(_this__u8e3s4, maximumValue) > 0 ? maximumValue : _this__u8e3s4;
  }
  function fastCoerceAtMost_2(_this__u8e3s4, maximumValue) {
    return _this__u8e3s4 > maximumValue ? maximumValue : _this__u8e3s4;
  }
  function fastCoerceAtLeast_2(_this__u8e3s4, minimumValue) {
    return _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
  }
  function fastRoundToInt(_this__u8e3s4) {
    // Inline function 'kotlin.math.roundToInt' call
    return roundToInt(_this__u8e3s4);
  }
  function floatFromBits_0(bits) {
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function fastRoundToInt_0(_this__u8e3s4) {
    return roundToInt(_this__u8e3s4);
  }
  function doubleFromBits_0(bits) {
    // Inline function 'kotlin.fromBits' call
    DoubleCompanionObject_getInstance();
    return doubleFromBits(bits);
  }
  function traceValue(tag, value) {
  }
  function trace(sectionName, block) {
    return block();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = fastCbrt;
  _.$_$.b = fastJoinToString;
  _.$_$.c = lerp;
  _.$_$.d = lerp_0;
  _.$_$.e = throwNoSuchElementException;
  _.$_$.f = traceValue;
  //endregion
  return _;
}));
