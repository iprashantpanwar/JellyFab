(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './androidx-collection-collection.js', './androidx-savedstate-savedstate-compose.js', './androidx-savedstate-savedstate.js', './androidx-lifecycle-lifecycle-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./androidx-collection-collection.js'), require('./androidx-savedstate-savedstate-compose.js'), require('./androidx-savedstate-savedstate.js'), require('./androidx-lifecycle-lifecycle-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-saveable'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-compose-runtime-runtime-saveable'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-saveable'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'androidx-compose-runtime-runtime-saveable'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-saveable'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'androidx-compose-runtime-runtime-saveable'.");
    }
    if (typeof globalThis['androidx-savedstate-savedstate-compose'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-saveable'. Its dependency 'androidx-savedstate-savedstate-compose' was not found. Please, check whether 'androidx-savedstate-savedstate-compose' is loaded prior to 'androidx-compose-runtime-runtime-saveable'.");
    }
    if (typeof globalThis['androidx-savedstate-savedstate'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-saveable'. Its dependency 'androidx-savedstate-savedstate' was not found. Please, check whether 'androidx-savedstate-savedstate' is loaded prior to 'androidx-compose-runtime-runtime-saveable'.");
    }
    if (typeof globalThis['androidx-lifecycle-lifecycle-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-saveable'. Its dependency 'androidx-lifecycle-lifecycle-runtime' was not found. Please, check whether 'androidx-lifecycle-lifecycle-runtime' is loaded prior to 'androidx-compose-runtime-runtime-saveable'.");
    }
    globalThis['androidx-compose-runtime-runtime-saveable'] = factory(typeof globalThis['androidx-compose-runtime-runtime-saveable'] === 'undefined' ? {} : globalThis['androidx-compose-runtime-runtime-saveable'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], globalThis['androidx-collection-collection'], globalThis['androidx-savedstate-savedstate-compose'], globalThis['androidx-savedstate-savedstate'], globalThis['androidx-lifecycle-lifecycle-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_collection_collection, kotlin_androidx_savedstate_savedstate_compose, kotlin_androidx_savedstate_savedstate, kotlin_androidx_lifecycle_lifecycle_runtime) {
  'use strict';
  //region block: imports
  var THROW_CCE = kotlin_kotlin.$_$.md;
  var Unit_instance = kotlin_kotlin.$_$.b3;
  var toString = kotlin_kotlin.$_$.oe;
  var toString_0 = kotlin_kotlin.$_$.ba;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.d2;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.l1;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var charSequenceLength = kotlin_kotlin.$_$.u8;
  var toString_1 = kotlin_kotlin.$_$.qc;
  var isInterface = kotlin_kotlin.$_$.q9;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.l2;
  var SideEffect = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var protoOf = kotlin_kotlin.$_$.z9;
  var contentEquals = kotlin_kotlin.$_$.e4;
  var RememberObserver = kotlin_androidx_compose_runtime_runtime.$_$.w;
  var initMetadataForClass = kotlin_kotlin.$_$.h9;
  var VOID = kotlin_kotlin.$_$.b;
  var neverEqualPolicy = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  var structuralEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$_$.b2;
  var referentialEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$_$.t1;
  var SnapshotMutableState = kotlin_androidx_compose_runtime_runtime.$_$.d;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var invert = kotlin_kotlin.$_$.c8;
  var shiftLeft = kotlin_kotlin.$_$.h8;
  var bitwiseAnd = kotlin_kotlin.$_$.t7;
  var Long = kotlin_kotlin.$_$.hd;
  var compare = kotlin_kotlin.$_$.w7;
  var shiftRight = kotlin_kotlin.$_$.j8;
  var equalsLong = kotlin_kotlin.$_$.a8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i9;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var mutableScatterMapOf = kotlin_androidx_collection_collection.$_$.h1;
  var get_LocalSavedStateRegistryOwner = kotlin_androidx_savedstate_savedstate_compose.$_$.a;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_androidx_compose_runtime_runtime.$_$.b1;
  var CompositionLocalProvider = kotlin_androidx_compose_runtime_runtime.$_$.k;
  var DisposableEffect = kotlin_androidx_compose_runtime_runtime.$_$.q;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var emptyMap = kotlin_kotlin.$_$.q4;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.h;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var arrayListOf = kotlin_kotlin.$_$.v3;
  var MutableScatterMap = kotlin_androidx_collection_collection.$_$.n;
  var charSequenceGet = kotlin_kotlin.$_$.t8;
  var isWhitespace = kotlin_kotlin.$_$.zb;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var toMutableMap = kotlin_kotlin.$_$.t6;
  var SavedState = kotlin_androidx_savedstate_savedstate.$_$.a;
  var _SavedStateWriter___init__impl__99cr38 = kotlin_androidx_savedstate_savedstate.$_$.d;
  var _SavedStateReader___init__impl__k2stzo = kotlin_androidx_savedstate_savedstate.$_$.b;
  var SavedStateReader__isEmpty_impl_ep4h1z = kotlin_androidx_savedstate_savedstate.$_$.c;
  var Companion_instance = kotlin_androidx_savedstate_savedstate.$_$.e;
  var Companion_instance_0 = kotlin_androidx_lifecycle_lifecycle_runtime.$_$.b;
  var initMetadataForInterface = kotlin_kotlin.$_$.l9;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(SaveableHolder, 'SaveableHolder', VOID, VOID, [RememberObserver]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForClass(SaveableStateHolderImpl, 'SaveableStateHolderImpl', SaveableStateHolderImpl);
  initMetadataForClass(SaveableStateRegistryImpl$registerProvider$1);
  initMetadataForClass(SaveableStateRegistryImpl, 'SaveableStateRegistryImpl');
  initMetadataForClass(SaveableStateRegistryWrapper, 'SaveableStateRegistryWrapper');
  initMetadataForInterface(Saver, 'Saver');
  initMetadataForClass(Saver$1, VOID, VOID, VOID, [Saver]);
  //endregion
  function listSaver(save, restore) {
    var tmp = listSaver$lambda(save);
    return Saver_0(tmp, typeof restore === 'function' ? restore : THROW_CCE());
  }
  function listSaver$lambda($save) {
    return function ($this$Saver, it) {
      var list = $save($this$Saver, it);
      var inductionVariable = 0;
      var last = list.l() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = list.m(index);
          if (!(item == null)) {
            // Inline function 'kotlin.require' call
            if (!$this$Saver.k5f(item)) {
              var message = 'item at index ' + index + " can't be saved: " + toString(item);
              throw IllegalArgumentException_init_$Create$(toString_0(message));
            }
          }
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      var tmp_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!list.n()) {
        tmp_0 = ArrayList_init_$Create$(list);
      } else {
        tmp_0 = null;
      }
      return tmp_0;
    };
  }
  var MaxSupportedRadix;
  function rememberSaveable(inputs, saver, init, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 674689872, 'C(rememberSaveable)P(1,2)182@8584L65:RememberSaveable.kt#r2ddri');
    if (isTraceInProgress()) {
      traceEventStart(674689872, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveable (RememberSaveable.kt:180)');
    }
    var tmp0 = rememberSaveable_0(inputs.slice(), saver, null, init, $composer_0, 384 | 112 & $changed | 7168 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function rememberSaveable_0(inputs, saver, key, init, $composer, $changed, $default) {
    var saver_0 = {_v: saver};
    var key_0 = key;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 441892779, 'C(rememberSaveable)P(1,3,2)80@3807L27,90@4177L7,92@4203L293,100@4582L59,100@4571L70:RememberSaveable.kt#r2ddri');
    if (!(($default & 2) === 0)) {
      saver_0._v = autoSaver();
    }
    if (!(($default & 4) === 0))
      key_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(441892779, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveable (RememberSaveable.kt:79)');
    }
    var compositeKey = get_currentCompositeKeyHashCode($composer_0, 0);
    var tmp;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var this_0 = key_0;
    if (!(this_0 == null || charSequenceLength(this_0) === 0)) {
      tmp = key_0;
    } else {
      // Inline function 'androidx.compose.runtime.toString' call
      var radix = MaxSupportedRadix;
      tmp = toString_1(compositeKey, radix);
    }
    var finalKey = tmp;
    var tmp_0 = saver_0._v;
    if (!isInterface(tmp_0, Saver))
      THROW_CCE();
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_1 = get_LocalSaveableStateRegistry();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.t25(this_1);
    sourceInformationMarkerEnd($composer_1);
    var registry = tmp0;
    sourceInformationMarkerStart($composer_0, -542767440, 'CC(remember):RememberSaveable.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.h25();
    var tmp_1;
    if (false || it === Companion_getInstance().i24_1) {
      var tmp1_safe_receiver = registry == null ? null : registry.l5f(finalKey);
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_2 = saver_0._v.m5f(tmp1_safe_receiver);
      }
      var restored = tmp_2;
      var finalValue = restored == null ? init() : restored;
      var value = new SaveableHolder(saver_0._v, registry, finalKey, finalValue, inputs);
      $composer_0.i25(value);
      tmp_1 = value;
    } else {
      tmp_1 = it;
    }
    var tmp_3 = tmp_1;
    var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var holder = tmp1_group;
    var tmp0_elvis_lhs = holder.u5f(inputs);
    var value_0 = tmp0_elvis_lhs == null ? init() : tmp0_elvis_lhs;
    sourceInformationMarkerStart($composer_0, -542755546, 'CC(remember):RememberSaveable.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!(!!(!!($composer_0.p25(holder) | (($changed & 112 ^ 48) > 32 && $composer_0.p25(saver_0._v) || ($changed & 48) === 32)) | $composer_0.p25(registry)) | $composer_0.j25(finalKey)) | $composer_0.p25(value_0)) | $composer_0.p25(inputs));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.h25();
    var tmp_4;
    if (invalid || it_0 === Companion_getInstance().i24_1) {
      var value_1 = rememberSaveable$lambda(holder, saver_0, registry, finalKey, value_0, inputs);
      $composer_0.i25(value_1);
      tmp_4 = value_1;
    } else {
      tmp_4 = it_0;
    }
    var tmp_5 = tmp_4;
    var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    SideEffect(tmp2_group, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return value_0;
  }
  function register($this) {
    var registry = $this.o5f_1;
    // Inline function 'kotlin.require' call
    if (!($this.s5f_1 == null)) {
      var message = 'entry(' + toString($this.s5f_1) + ') is not null';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    if (!(registry == null)) {
      requireCanBeSaved(registry, $this.t5f_1());
      $this.s5f_1 = registry.v5f($this.p5f_1, $this.t5f_1);
    }
  }
  function SaveableHolder$valueProvider$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      var $this$with = this$0.n5f_1;
      var tmp0 = this$0.q5f_1;
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0 == null) {
          var message = 'Value should be initialized';
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        } else {
          tmp$ret$1 = tmp0;
          break $l$block;
        }
      }
      return $this$with.w5f(this$0, tmp$ret$1);
    };
  }
  function SaveableHolder(saver, registry, key, value, inputs) {
    this.n5f_1 = saver;
    this.o5f_1 = registry;
    this.p5f_1 = key;
    this.q5f_1 = value;
    this.r5f_1 = inputs;
    this.s5f_1 = null;
    var tmp = this;
    tmp.t5f_1 = SaveableHolder$valueProvider$lambda(this);
  }
  protoOf(SaveableHolder).x5f = function (saver, registry, key, value, inputs) {
    var entryIsOutdated = false;
    if (!(this.o5f_1 === registry)) {
      this.o5f_1 = registry;
      entryIsOutdated = true;
    }
    if (!(this.p5f_1 === key)) {
      this.p5f_1 = key;
      entryIsOutdated = true;
    }
    this.n5f_1 = saver;
    this.q5f_1 = value;
    this.r5f_1 = inputs;
    if (!(this.s5f_1 == null) && entryIsOutdated) {
      var tmp0_safe_receiver = this.s5f_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.y5f();
      }
      this.s5f_1 = null;
      register(this);
    }
  };
  protoOf(SaveableHolder).k5f = function (value) {
    var registry = this.o5f_1;
    return registry == null || registry.k5f(value);
  };
  protoOf(SaveableHolder).d2j = function () {
    register(this);
  };
  protoOf(SaveableHolder).f2j = function () {
    var tmp0_safe_receiver = this.s5f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y5f();
    }
  };
  protoOf(SaveableHolder).e2j = function () {
    var tmp0_safe_receiver = this.s5f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y5f();
    }
  };
  protoOf(SaveableHolder).u5f = function (inputs) {
    var tmp;
    if (contentEquals(inputs, this.r5f_1)) {
      tmp = this.q5f_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  function requireCanBeSaved(_this__u8e3s4, value) {
    if (!(value == null) && !_this__u8e3s4.k5f(value)) {
      var tmp;
      if (!(value == null) ? isInterface(value, SnapshotMutableState) : false) {
        var tmp_0;
        if (!(value.g2r() === neverEqualPolicy()) && !(value.g2r() === structuralEqualityPolicy()) && !(value.g2r() === referentialEqualityPolicy())) {
          tmp_0 = 'If you use a custom SnapshotMutationPolicy for your MutableState you have to write a custom Saver';
        } else {
          tmp_0 = 'MutableState containing ' + toString(value.v1()) + ' cannot be saved using the current ' + 'SaveableStateRegistry. The default implementation only supports types which can be stored inside the Bundle. Please consider implementing a custom Saver for this class and pass it as a stateSaver parameter to rememberSaveable().';
        }
        tmp = tmp_0;
      } else {
        tmp = generateCannotBeSavedErrorMessage(value);
      }
      throw IllegalArgumentException_init_$Create$(tmp);
    }
  }
  function generateCannotBeSavedErrorMessage(value) {
    return toString_0(value) + ' cannot be saved using the current SaveableStateRegistry. The default ' + 'implementation only supports types which can be stored inside the Bundle. Please consider implementing a custom Saver for this class and pass it to rememberSaveable().';
  }
  function rememberSaveable_1(inputs, init, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1564532345, 'C(rememberSaveable)P(1)142@6736L71:RememberSaveable.kt#r2ddri');
    if (isTraceInProgress()) {
      traceEventStart(1564532345, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveable (RememberSaveable.kt:135)');
    }
    var tmp0 = rememberSaveable_0(inputs.slice(), autoSaver(), null, init, $composer_0, 384 | 7168 & $changed << 6, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function rememberSaveable$lambda($holder, $saver, $registry, $finalKey, $value, $inputs) {
    return function () {
      $holder.x5f($saver._v, $registry, $finalKey, $value, $inputs);
      return Unit_instance;
    };
  }
  function rememberSaveableStateHolder($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 15454635, 'C(rememberSaveableStateHolder)57@2611L29,57@2555L85:SaveableStateHolder.kt#r2ddri');
    if (isTraceInProgress()) {
      traceEventStart(15454635, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveableStateHolder (SaveableStateHolder.kt:57)');
    }
    $composer_0.p24(1967008021);
    sourceInformation($composer_0, '*58@2715L7');
    var tmp = Companion_getInstance_0().z5f_1;
    sourceInformationMarkerStart($composer_0, 1967006728, 'CC(remember):SaveableStateHolder.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.h25();
    var tmp_0;
    if (false || it === Companion_getInstance().i24_1) {
      var value = rememberSaveableStateHolder$lambda;
      $composer_0.i25(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    // Inline function 'kotlin.apply' call
    var this_0 = rememberSaveable([], tmp, tmp1_group, $composer_0, 384);
    var tmp_2 = this_0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_1 = get_LocalSaveableStateRegistry();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.t25(this_1);
    sourceInformationMarkerEnd($composer_1);
    tmp_2.c5g_1 = tmp0;
    $composer_0.q24();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return this_0;
  }
  function SaveableStateHolderImpl$Companion$Saver$lambda($this$Saver, it) {
    return saveAll(it);
  }
  function SaveableStateHolderImpl$Companion$Saver$lambda_0(it) {
    return new SaveableStateHolderImpl(it);
  }
  function saveAll($this) {
    var map = $this.a5g_1;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_0 = $this.b5g_1;
    var k = this_0.yp_1;
    var v = this_0.zp_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.xp_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var registry = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  saveTo($this, registry, map, tmp0);
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (map.n()) {
      tmp_1 = null;
    } else {
      tmp_1 = map;
    }
    return tmp_1;
  }
  function saveTo($this, _this__u8e3s4, map, key) {
    var savedData = _this__u8e3s4.e5g();
    if (savedData.n()) {
      // Inline function 'kotlin.collections.minusAssign' call
      map.c2(key);
    } else {
      // Inline function 'kotlin.collections.set' call
      map.b2(key, savedData);
    }
  }
  function Companion() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp_0 = SaveableStateHolderImpl$Companion$Saver$lambda;
    tmp.z5f_1 = Saver_0(tmp_0, SaveableStateHolderImpl$Companion$Saver$lambda_0);
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function SaveableStateHolderImpl$canBeSaved$lambda(this$0) {
    return function (it) {
      var tmp0_safe_receiver = this$0.c5g_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k5f(it);
      return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
    };
  }
  function _no_name_provided__qut3iv(this$0, $key, $registry) {
    this.f5g_1 = this$0;
    this.g5g_1 = $key;
    this.h5g_1 = $registry;
  }
  protoOf(_no_name_provided__qut3iv).uz = function () {
    if (this.f5g_1.b5g_1.c2(this.g5g_1) === this.h5g_1) {
      saveTo(this.f5g_1, this.h5g_1, this.f5g_1.a5g_1, this.g5g_1);
    }
  };
  function SaveableStateHolderImpl$SaveableStateProvider$lambda(this$0, $key, $registry) {
    return function ($this$DisposableEffect) {
      // Inline function 'kotlin.require' call
      if (!!this$0.b5g_1.g5($key)) {
        var message = 'Key ' + toString_0($key) + ' was used multiple times ';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      var tmp0 = this$0.a5g_1;
      // Inline function 'kotlin.collections.minusAssign' call
      var key = $key;
      tmp0.c2(key);
      this$0.b5g_1.iq($key, $registry);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv(this$0, $key, $registry);
    };
  }
  function SaveableStateHolderImpl$SaveableStateProvider$lambda_0($tmp0_rcvr, $key, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.i5g($key, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SaveableStateHolderImpl(savedStates) {
    Companion_getInstance_0();
    var tmp;
    if (savedStates === VOID) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    } else {
      tmp = savedStates;
    }
    savedStates = tmp;
    this.a5g_1 = savedStates;
    this.b5g_1 = mutableScatterMapOf();
    this.c5g_1 = null;
    var tmp_0 = this;
    tmp_0.d5g_1 = SaveableStateHolderImpl$canBeSaved$lambda(this);
  }
  protoOf(SaveableStateHolderImpl).i5g = function (key, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t24(533563200);
    sourceInformation($composer_0, 'C(SaveableStateProvider)P(1)71@3248L1083:SaveableStateHolder.kt#r2ddri');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p25(key) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.p25(content) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.p25(this) ? 256 : 128);
    if ($composer_0.q25(!(($dirty & 147) === 146), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(533563200, $dirty, -1, 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider (SaveableStateHolder.kt:70)');
      }
      // Inline function 'androidx.compose.runtime.ReusableContent' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1800201264, 'CC(ReusableContent)P(1)143@5486L9:Composables.kt#9igjgp');
      $composer_1.e25(207, key);
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1512655177, 'C72@3298L408,81@3719L200,86@3955L366,86@3932L389:SaveableStateHolder.kt#r2ddri');
      sourceInformationMarkerStart($composer_2, 366846518, 'CC(remember):SaveableStateHolder.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_2.h25();
      var tmp;
      if (false || it === Companion_getInstance().i24_1) {
        // Inline function 'kotlin.require' call
        if (!this.d5g_1(key)) {
          var message = 'Type of the key ' + toString_0(key) + ' is not supported. On Android you can only use types ' + 'which can be stored inside the Bundle.';
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        }
        var value = new SaveableStateRegistryWrapper(SaveableStateRegistry(this.a5g_1.y1(key), this.d5g_1));
        $composer_2.i25(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      var registry = tmp0_group;
      CompositionLocalProvider([get_LocalSaveableStateRegistry().m2q(registry), get_LocalSavedStateRegistryOwner().m2q(registry)], content, $composer_2, androidx_compose_runtime_ProvidedValue$stableprop_getter() | 112 & $dirty);
      sourceInformationMarkerStart($composer_2, 366867500, 'CC(remember):SaveableStateHolder.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.p25(this) | $composer_0.p25(key)) | $composer_0.p25(registry));
      // Inline function 'kotlin.let' call
      var it_0 = $composer_2.h25();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().i24_1) {
        var value_0 = SaveableStateHolderImpl$SaveableStateProvider$lambda(this, key, registry);
        $composer_2.i25(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      DisposableEffect(Unit_instance, tmp1_group, $composer_2, 6);
      sourceInformationMarkerEnd($composer_2);
      $composer_1.f25();
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y24();
    }
    var tmp1_safe_receiver = $composer_0.u24();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.s2q(SaveableStateHolderImpl$SaveableStateProvider$lambda_0(this, key, content, $changed));
    }
  };
  protoOf(SaveableStateHolderImpl).j5g = function (key) {
    if (this.b5g_1.c2(key) == null) {
      // Inline function 'kotlin.collections.minusAssign' call
      this.a5g_1.c2(key);
    }
  };
  function rememberSaveableStateHolder$lambda() {
    return new SaveableStateHolderImpl();
  }
  function get_LocalSaveableStateRegistry() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return LocalSaveableStateRegistry;
  }
  var LocalSaveableStateRegistry;
  function SaveableStateRegistry(restoredValues, canBeSaved) {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return new SaveableStateRegistryImpl(restoredValues, canBeSaved);
  }
  function SaveableStateRegistryImpl$registerProvider$1($valueProviders, $key, $valueProvider) {
    this.k5g_1 = $valueProviders;
    this.l5g_1 = $key;
    this.m5g_1 = $valueProvider;
  }
  protoOf(SaveableStateRegistryImpl$registerProvider$1).y5f = function () {
    var list = this.k5g_1.c2(this.l5g_1);
    if (list == null)
      null;
    else
      list.g2(this.m5g_1);
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(list == null || list.n())) {
      this.k5g_1.iq(this.l5g_1, list);
    }
  };
  function SaveableStateRegistryImpl(restored, canBeSaved) {
    this.n5g_1 = canBeSaved;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(restored == null || restored.n())) {
      tmp_0 = toMutableScatterMap(restored);
    } else {
      tmp_0 = null;
    }
    tmp.o5g_1 = tmp_0;
    this.p5g_1 = null;
  }
  protoOf(SaveableStateRegistryImpl).k5f = function (value) {
    return this.n5g_1(value);
  };
  protoOf(SaveableStateRegistryImpl).l5f = function (key) {
    var tmp0_safe_receiver = this.o5g_1;
    var list = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c2(key);
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(list == null || list.n())) {
      if (list.l() > 1) {
        var tmp1_safe_receiver = this.o5g_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.b2(key, list.s1(1, list.l()));
      }
      tmp = list.m(0);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SaveableStateRegistryImpl).v5f = function (key, valueProvider) {
    // Inline function 'kotlin.require' call
    if (!!fastIsBlank(key)) {
      var message = 'Registered key is empty or blank';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    var tmp0_elvis_lhs = this.p5g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterMapOf();
      this.p5g_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var valueProviders = tmp;
    // Inline function 'androidx.collection.MutableScatterMap.getOrPut' call
    var tmp0_elvis_lhs_0 = valueProviders.y1(key);
    var tmp_0;
    if (tmp0_elvis_lhs_0 == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      // Inline function 'kotlin.also' call
      var this_1 = ArrayList_init_$Create$_0();
      valueProviders.iq(key, this_1);
      tmp_0 = this_1;
    } else {
      tmp_0 = tmp0_elvis_lhs_0;
    }
    tmp_0.h(valueProvider);
    return new SaveableStateRegistryImpl$registerProvider$1(valueProviders, key, valueProvider);
  };
  protoOf(SaveableStateRegistryImpl).e5g = function () {
    if (this.o5g_1 == null && this.p5g_1 == null) {
      return emptyMap();
    }
    var tmp0_safe_receiver = this.o5g_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l();
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = this.p5g_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.l();
    var expectedMapSize = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    // Inline function 'kotlin.apply' call
    var this_0 = HashMap_init_$Create$(expectedMapSize);
    var tmp0_safe_receiver_0 = this.o5g_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterMap.forEach' call
      var k = tmp0_safe_receiver_0.yp_1;
      var v = tmp0_safe_receiver_0.zp_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m = tmp0_safe_receiver_0.xp_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
            if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  var value = bitwiseAnd(slot, new Long(255, 0));
                  if (compare(value, new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    var tmp_0 = k[index];
                    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    var tmp_1 = v[index];
                    // Inline function 'kotlin.collections.set' call
                    var value_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                    this_0.b2(tmp0, value_0);
                  }
                  slot = shiftRight(slot, 8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
    var map = this_0;
    var tmp4_safe_receiver = this.p5g_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterMap.forEach' call
      var k_0 = tmp4_safe_receiver.yp_1;
      var v_0 = tmp4_safe_receiver.zp_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_0 = tmp4_safe_receiver.xp_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_2 = slot_0;
            var tmp$ret$9 = bitwiseAnd(bitwiseAnd(this_2, shiftLeft(invert(this_2), 7)), new Long(-2139062144, -2139062144));
            if (!equalsLong(tmp$ret$9, new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount_0)
                do {
                  var j_0 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  var value_1 = bitwiseAnd(slot_0, new Long(255, 0));
                  if (compare(value_1, new Long(128, 0)) < 0) {
                    var index_0 = (i_0 << 3) + j_0 | 0;
                    var tmp_2 = k_0[index_0];
                    var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                    var tmp_3 = v_0[index_0];
                    var list = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
                    if (list.l() === 1) {
                      var value_2 = list.m(0)();
                      if (!(value_2 == null)) {
                        // Inline function 'kotlin.check' call
                        if (!this.k5f(value_2)) {
                          var message = generateCannotBeSavedErrorMessage(value_2);
                          throw IllegalStateException_init_$Create$(toString_0(message));
                        }
                        // Inline function 'kotlin.collections.set' call
                        var value_3 = arrayListOf([value_2]);
                        map.b2(tmp0_0, value_3);
                      }
                    } else {
                      // Inline function 'kotlin.collections.List' call
                      // Inline function 'kotlin.collections.MutableList' call
                      var size = list.l();
                      var list_0 = ArrayList_init_$Create$_1(size);
                      // Inline function 'kotlin.repeat' call
                      var inductionVariable_3 = 0;
                      if (inductionVariable_3 < size)
                        do {
                          var index_1 = inductionVariable_3;
                          inductionVariable_3 = inductionVariable_3 + 1 | 0;
                          var value_4 = list.m(index_1)();
                          if (!(value_4 == null)) {
                            // Inline function 'kotlin.check' call
                            if (!this.k5f(value_4)) {
                              var message_0 = generateCannotBeSavedErrorMessage(value_4);
                              throw IllegalStateException_init_$Create$(toString_0(message_0));
                            }
                          }
                          list_0.h(value_4);
                        }
                         while (inductionVariable_3 < size);
                      // Inline function 'kotlin.collections.set' call
                      map.b2(tmp0_0, list_0);
                    }
                  }
                  slot_0 = shiftRight(slot_0, 8);
                }
                 while (inductionVariable_2 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
    return map;
  };
  function toMutableScatterMap(_this__u8e3s4) {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    // Inline function 'kotlin.also' call
    var this_0 = new MutableScatterMap(_this__u8e3s4.l());
    // Inline function 'androidx.collection.MutableScatterMap.plusAssign' call
    this_0.kq(_this__u8e3s4);
    return this_0;
  }
  function fastIsBlank(_this__u8e3s4) {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    var blank = true;
    var inductionVariable = 0;
    var last = charSequenceLength(_this__u8e3s4);
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!isWhitespace(charSequenceGet(_this__u8e3s4, i))) {
          blank = false;
          break $l$loop;
        }
      }
       while (inductionVariable < last);
    return blank;
  }
  function LocalSaveableStateRegistry$lambda() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return null;
  }
  var properties_initialized_SaveableStateRegistry_kt_4lrdzt;
  function _init_properties_SaveableStateRegistry_kt__lr5zhh() {
    if (!properties_initialized_SaveableStateRegistry_kt_4lrdzt) {
      properties_initialized_SaveableStateRegistry_kt_4lrdzt = true;
      LocalSaveableStateRegistry = staticCompositionLocalOf(LocalSaveableStateRegistry$lambda);
    }
  }
  var androidx_compose_runtime_saveable_SaveableStateRegistryWrapper$stable;
  function SaveableStateRegistryWrapper$lambda(this$0) {
    return function () {
      // Inline function 'androidx.savedstate.savedState' call
      var initialState = emptyMap();
      var copiedState = toMutableMap(initialState);
      // Inline function 'kotlin.apply' call
      var this_0 = new SavedState(copiedState);
      // Inline function 'androidx.savedstate.write' call
      _SavedStateWriter___init__impl__99cr38(this_0);
      var result = this_0;
      this$0.r5g_1.s5e(result);
      var tmp;
      // Inline function 'androidx.savedstate.read' call
      var $this$read = _SavedStateReader___init__impl__k2stzo(result);
      if (SavedStateReader__isEmpty_impl_ep4h1z($this$read)) {
        tmp = null;
      } else {
        tmp = result;
      }
      return tmp;
    };
  }
  function SaveableStateRegistryWrapper(base) {
    this.q5g_1 = base;
    this.r5g_1 = Companion_instance.o5e(this);
    this.s5g_1 = Companion_instance_0.i5f(this);
    this.t5g_1 = this.r5g_1.q5e_1;
    var tmp = this.l5f('androidx.savedstate.SavedStateRegistry');
    this.r5g_1.r5e(tmp instanceof SavedState ? tmp : null);
    this.v5f('androidx.savedstate.SavedStateRegistry', SaveableStateRegistryWrapper$lambda(this));
  }
  protoOf(SaveableStateRegistryWrapper).i5e = function () {
    return this.s5g_1;
  };
  protoOf(SaveableStateRegistryWrapper).l5f = function (key) {
    return this.q5g_1.l5f(key);
  };
  protoOf(SaveableStateRegistryWrapper).v5f = function (key, valueProvider) {
    return this.q5g_1.v5f(key, valueProvider);
  };
  protoOf(SaveableStateRegistryWrapper).k5f = function (value) {
    return this.q5g_1.k5f(value);
  };
  protoOf(SaveableStateRegistryWrapper).e5g = function () {
    return this.q5g_1.e5g();
  };
  function get_AutoSaver() {
    _init_properties_Saver_kt__z47nhf();
    return AutoSaver;
  }
  var AutoSaver;
  function Saver() {
  }
  function Saver_0(save, restore) {
    _init_properties_Saver_kt__z47nhf();
    return new Saver$1(save, restore);
  }
  function autoSaver() {
    _init_properties_Saver_kt__z47nhf();
    var tmp = get_AutoSaver();
    return isInterface(tmp, Saver) ? tmp : THROW_CCE();
  }
  function AutoSaver$lambda($this$Saver, it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function AutoSaver$lambda_0(it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function Saver$1($save, $restore) {
    this.u5g_1 = $save;
    this.v5g_1 = $restore;
  }
  protoOf(Saver$1).w5f = function (_this__u8e3s4, value) {
    return this.u5g_1(_this__u8e3s4, value);
  };
  protoOf(Saver$1).m5f = function (value) {
    return this.v5g_1(value);
  };
  var properties_initialized_Saver_kt_ch40dh;
  function _init_properties_Saver_kt__z47nhf() {
    if (!properties_initialized_Saver_kt_ch40dh) {
      properties_initialized_Saver_kt_ch40dh = true;
      var tmp = AutoSaver$lambda;
      AutoSaver = Saver_0(tmp, AutoSaver$lambda_0);
    }
  }
  //region block: init
  MaxSupportedRadix = 36;
  androidx_compose_runtime_saveable_SaveableStateRegistryWrapper$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalSaveableStateRegistry;
  _.$_$.b = SaveableStateRegistry;
  _.$_$.c = Saver_0;
  _.$_$.d = Saver;
  _.$_$.e = listSaver;
  _.$_$.f = rememberSaveableStateHolder;
  _.$_$.g = rememberSaveable_1;
  _.$_$.h = rememberSaveable;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-compose-runtime-runtime-saveable.js.map
