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
  var THROW_CCE = kotlin_kotlin.$_$.vl;
  var toString = kotlin_kotlin.$_$.in;
  var toString_0 = kotlin_kotlin.$_$.bh;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var Unit_getInstance = kotlin_kotlin.$_$.n5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.l2;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.q2;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.p2;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.k2;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var charSequenceLength = kotlin_kotlin.$_$.hf;
  var toString_1 = kotlin_kotlin.$_$.qk;
  var isInterface = kotlin_kotlin.$_$.kg;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.z2;
  var SideEffect = kotlin_androidx_compose_runtime_runtime.$_$.i1;
  var protoOf = kotlin_kotlin.$_$.yg;
  var contentEquals = kotlin_kotlin.$_$.x7;
  var RememberObserver = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var initMetadataForClass = kotlin_kotlin.$_$.vf;
  var VOID = kotlin_kotlin.$_$.e;
  var neverEqualPolicy = kotlin_androidx_compose_runtime_runtime.$_$.f2;
  var structuralEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$_$.o2;
  var referentialEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$_$.g2;
  var SnapshotMutableState = kotlin_androidx_compose_runtime_runtime.$_$.e;
  var initMetadataForInterface = kotlin_kotlin.$_$.zf;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.m2;
  var invert = kotlin_kotlin.$_$.oe;
  var shiftLeft = kotlin_kotlin.$_$.te;
  var bitwiseAnd = kotlin_kotlin.$_$.fe;
  var Long = kotlin_kotlin.$_$.ol;
  var compare = kotlin_kotlin.$_$.ie;
  var shiftRight = kotlin_kotlin.$_$.ve;
  var equalsLong = kotlin_kotlin.$_$.me;
  var initMetadataForCompanion = kotlin_kotlin.$_$.wf;
  var DisposableEffectResult = kotlin_androidx_compose_runtime_runtime.$_$.w;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.r2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var mutableScatterMapOf = kotlin_androidx_collection_collection.$_$.l1;
  var get_LocalSavedStateRegistryOwner = kotlin_androidx_savedstate_savedstate_compose.$_$.a;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_androidx_compose_runtime_runtime.$_$.n1;
  var CompositionLocalProvider = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var DisposableEffect = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var emptyMap = kotlin_kotlin.$_$.m9;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.l;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var arrayListOf = kotlin_kotlin.$_$.b7;
  var MutableScatterMap = kotlin_androidx_collection_collection.$_$.n;
  var charSequenceGet = kotlin_kotlin.$_$.gf;
  var isWhitespace = kotlin_kotlin.$_$.rj;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.n2;
  var toMutableMap = kotlin_kotlin.$_$.vc;
  var SavedState = kotlin_androidx_savedstate_savedstate.$_$.b;
  var _SavedStateWriter___init__impl__99cr38 = kotlin_androidx_savedstate_savedstate.$_$.e;
  var _SavedStateReader___init__impl__k2stzo = kotlin_androidx_savedstate_savedstate.$_$.c;
  var SavedStateReader__isEmpty_impl_ep4h1z = kotlin_androidx_savedstate_savedstate.$_$.d;
  var Companion_getInstance_0 = kotlin_androidx_savedstate_savedstate.$_$.f;
  var Companion_getInstance_1 = kotlin_androidx_lifecycle_lifecycle_runtime.$_$.b;
  var SavedStateRegistryOwner = kotlin_androidx_savedstate_savedstate.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SaverScope, 'SaverScope');
  initMetadataForClass(SaveableHolder, 'SaveableHolder', VOID, VOID, [SaverScope, RememberObserver]);
  initMetadataForInterface(SaveableStateHolder, 'SaveableStateHolder');
  initMetadataForCompanion(Companion);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(SaveableStateHolderImpl, 'SaveableStateHolderImpl', SaveableStateHolderImpl, VOID, [SaveableStateHolder]);
  initMetadataForInterface(Entry, 'Entry');
  initMetadataForInterface(SaveableStateRegistry, 'SaveableStateRegistry');
  initMetadataForClass(SaveableStateRegistryImpl$registerProvider$1, VOID, VOID, VOID, [Entry]);
  initMetadataForClass(SaveableStateRegistryImpl, 'SaveableStateRegistryImpl', VOID, VOID, [SaveableStateRegistry]);
  initMetadataForClass(SaveableStateRegistryWrapper, 'SaveableStateRegistryWrapper', VOID, VOID, [SaveableStateRegistry, SavedStateRegistryOwner]);
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
      var last = list.get_size_woubt6_k$() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = list.get_c1px32_k$(index);
          if (!(item == null)) {
            // Inline function 'kotlin.require' call
            if (!$this$Saver.canBeSaved_nnajrq_k$(item)) {
              var message = 'item at index ' + index + " can't be saved: " + toString(item);
              throw IllegalArgumentException_init_$Create$(toString_0(message));
            }
          }
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!list.isEmpty_y1axqb_k$()) {
        tmp_0 = ArrayList_init_$Create$(list);
      } else {
        tmp_0 = null;
      }
      return tmp_0;
    };
  }
  function get_MaxSupportedRadix() {
    return MaxSupportedRadix;
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
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_1);
    sourceInformationMarkerEnd($composer_1);
    var registry = tmp0;
    sourceInformationMarkerStart($composer_0, -542767440, 'CC(remember):RememberSaveable.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var tmp1_safe_receiver = registry == null ? null : registry.consumeRestored_yfjzaw_k$(finalKey);
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_2 = saver_0._v.restore_fyjq85_k$(tmp1_safe_receiver);
      }
      var restored = tmp_2;
      var finalValue = restored == null ? init() : restored;
      var value = new SaveableHolder(saver_0._v, registry, finalKey, finalValue, inputs);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp_1 = value;
    } else {
      tmp_1 = it;
    }
    var tmp_3 = tmp_1;
    var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var holder = tmp1_group;
    var tmp0_elvis_lhs = holder.getValueIfInputsDidntChange_2my39q_k$(inputs);
    var value_0 = tmp0_elvis_lhs == null ? init() : tmp0_elvis_lhs;
    sourceInformationMarkerStart($composer_0, -542755546, 'CC(remember):RememberSaveable.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!(!!(!!($composer_0.changedInstance_s1wkiy_k$(holder) | (($changed & 112 ^ 48) > 32 && $composer_0.changedInstance_s1wkiy_k$(saver_0._v) || ($changed & 48) === 32)) | $composer_0.changedInstance_s1wkiy_k$(registry)) | $composer_0.changed_ga7h3f_k$(finalKey)) | $composer_0.changedInstance_s1wkiy_k$(value_0)) | $composer_0.changedInstance_s1wkiy_k$(inputs));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_4;
    if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var value_1 = rememberSaveable$lambda(holder, saver_0, registry, finalKey, value_0, inputs);
      $composer_0.updateRememberedValue_l1wh71_k$(value_1);
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
  function _set_saver__ki24i8($this, _set____db54di) {
    $this.saver_1 = _set____db54di;
  }
  function _get_saver__bj2bz8($this) {
    return $this.saver_1;
  }
  function _set_registry__wfdxom($this, _set____db54di) {
    $this.registry_1 = _set____db54di;
  }
  function _get_registry__pststq($this) {
    return $this.registry_1;
  }
  function _set_key__4w8w3q($this, _set____db54di) {
    $this.key_1 = _set____db54di;
  }
  function _get_key__e6bh8y($this) {
    return $this.key_1;
  }
  function _set_value__lx0xdg($this, _set____db54di) {
    $this.value_1 = _set____db54di;
  }
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function _set_inputs__2dcq7m($this, _set____db54di) {
    $this.inputs_1 = _set____db54di;
  }
  function _get_inputs__wm5ku($this) {
    return $this.inputs_1;
  }
  function _set_entry__e2jqj7($this, _set____db54di) {
    $this.entry_1 = _set____db54di;
  }
  function _get_entry__hykpy9($this) {
    return $this.entry_1;
  }
  function _get_valueProvider__r2iult($this) {
    return $this.valueProvider_1;
  }
  function register($this) {
    var registry = $this.registry_1;
    // Inline function 'kotlin.require' call
    if (!($this.entry_1 == null)) {
      var message = 'entry(' + toString($this.entry_1) + ') is not null';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    if (!(registry == null)) {
      requireCanBeSaved(registry, $this.valueProvider_1());
      $this.entry_1 = registry.registerProvider_22k33k_k$($this.key_1, $this.valueProvider_1);
    }
  }
  function SaveableHolder$valueProvider$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      var $this$with = this$0.saver_1;
      var tmp0 = this$0.value_1;
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
      return $this$with.save_khi2yu_k$(this$0, tmp$ret$1);
    };
  }
  function SaveableHolder(saver, registry, key, value, inputs) {
    this.saver_1 = saver;
    this.registry_1 = registry;
    this.key_1 = key;
    this.value_1 = value;
    this.inputs_1 = inputs;
    this.entry_1 = null;
    var tmp = this;
    tmp.valueProvider_1 = SaveableHolder$valueProvider$lambda(this);
  }
  protoOf(SaveableHolder).update_yik83o_k$ = function (saver, registry, key, value, inputs) {
    var entryIsOutdated = false;
    if (!(this.registry_1 === registry)) {
      this.registry_1 = registry;
      entryIsOutdated = true;
    }
    if (!(this.key_1 === key)) {
      this.key_1 = key;
      entryIsOutdated = true;
    }
    this.saver_1 = saver;
    this.value_1 = value;
    this.inputs_1 = inputs;
    if (!(this.entry_1 == null) && entryIsOutdated) {
      var tmp0_safe_receiver = this.entry_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.unregister_ib976c_k$();
      }
      this.entry_1 = null;
      register(this);
    }
  };
  protoOf(SaveableHolder).canBeSaved_nnajrq_k$ = function (value) {
    var registry = this.registry_1;
    return registry == null || registry.canBeSaved_nnajrq_k$(value);
  };
  protoOf(SaveableHolder).onRemembered_68t2e3_k$ = function () {
    register(this);
  };
  protoOf(SaveableHolder).onForgotten_pbqifp_k$ = function () {
    var tmp0_safe_receiver = this.entry_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.unregister_ib976c_k$();
    }
  };
  protoOf(SaveableHolder).onAbandoned_1gx7a3_k$ = function () {
    var tmp0_safe_receiver = this.entry_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.unregister_ib976c_k$();
    }
  };
  protoOf(SaveableHolder).getValueIfInputsDidntChange_2my39q_k$ = function (inputs) {
    var tmp;
    if (contentEquals(inputs, this.inputs_1)) {
      tmp = this.value_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  function requireCanBeSaved(_this__u8e3s4, value) {
    if (!(value == null) && !_this__u8e3s4.canBeSaved_nnajrq_k$(value)) {
      var tmp;
      if (!(value == null) ? isInterface(value, SnapshotMutableState) : false) {
        var tmp_0;
        if (!(value.get_policy_i5q4hn_k$() === neverEqualPolicy()) && !(value.get_policy_i5q4hn_k$() === structuralEqualityPolicy()) && !(value.get_policy_i5q4hn_k$() === referentialEqualityPolicy())) {
          tmp_0 = 'If you use a custom SnapshotMutationPolicy for your MutableState you have to write a custom Saver';
        } else {
          tmp_0 = 'MutableState containing ' + toString(value.get_value_j01efc_k$()) + ' cannot be saved using the current ' + 'SaveableStateRegistry. The default implementation only supports types which can be stored inside the Bundle. Please consider implementing a custom Saver for this class and pass it as a stateSaver parameter to rememberSaveable().';
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
      $holder.update_yik83o_k$($saver._v, $registry, $finalKey, $value, $inputs);
      return Unit_getInstance();
    };
  }
  function SaveableStateHolder() {
  }
  function rememberSaveableStateHolder($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 15454635, 'C(rememberSaveableStateHolder)57@2611L29,57@2555L85:SaveableStateHolder.kt#r2ddri');
    if (isTraceInProgress()) {
      traceEventStart(15454635, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveableStateHolder (SaveableStateHolder.kt:57)');
    }
    $composer_0.startReplaceGroup_5hh8aj_k$(1967008021);
    sourceInformation($composer_0, '*58@2715L7');
    var tmp = Companion_getInstance_2().Saver_1;
    sourceInformationMarkerStart($composer_0, 1967006728, 'CC(remember):SaveableStateHolder.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_0;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var value = rememberSaveableStateHolder$lambda;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
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
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_1);
    sourceInformationMarkerEnd($composer_1);
    tmp_2.parentSaveableStateRegistry_1 = tmp0;
    $composer_0.endReplaceGroup_ek144q_k$();
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
  function _get_savedStates__8lkyig($this) {
    return $this.savedStates_1;
  }
  function _get_registries__4qxzyo($this) {
    return $this.registries_1;
  }
  function _get_canBeSaved__pps3rd($this) {
    return $this.canBeSaved_1;
  }
  function saveAll($this) {
    var map = $this.savedStates_1;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_0 = $this.registries_1;
    var k = this_0.get_keys_8zdyhr_k$();
    var v = this_0.get_values_y8hjwv_k$();
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.get_metadata_ha42hw_k$();
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
    if (map.isEmpty_y1axqb_k$()) {
      tmp_1 = null;
    } else {
      tmp_1 = map;
    }
    return tmp_1;
  }
  function saveTo($this, _this__u8e3s4, map, key) {
    var savedData = _this__u8e3s4.performSave_ohn24i_k$();
    if (savedData.isEmpty_y1axqb_k$()) {
      // Inline function 'kotlin.collections.minusAssign' call
      map.remove_gppy8k_k$(key);
    } else {
      // Inline function 'kotlin.collections.set' call
      map.put_4fpzoq_k$(key, savedData);
    }
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = SaveableStateHolderImpl$Companion$Saver$lambda;
    tmp.Saver_1 = Saver_0(tmp_0, SaveableStateHolderImpl$Companion$Saver$lambda_0);
  }
  protoOf(Companion).get_Saver_igssp8_k$ = function () {
    return this.Saver_1;
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function SaveableStateHolderImpl$canBeSaved$lambda(this$0) {
    return function (it) {
      var tmp0_safe_receiver = this$0.parentSaveableStateRegistry_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.canBeSaved_nnajrq_k$(it);
      return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
    };
  }
  function _no_name_provided__qut3iv(this$0, $key, $registry) {
    this.this$0__1 = this$0;
    this.$key_1 = $key;
    this.$registry_1 = $registry;
  }
  protoOf(_no_name_provided__qut3iv).dispose_3nnxhr_k$ = function () {
    if (this.this$0__1.registries_1.remove_gppy8k_k$(this.$key_1) === this.$registry_1) {
      saveTo(this.this$0__1, this.$registry_1, this.this$0__1.savedStates_1, this.$key_1);
    }
  };
  function SaveableStateHolderImpl$SaveableStateProvider$lambda(this$0, $key, $registry) {
    return function ($this$DisposableEffect) {
      // Inline function 'kotlin.require' call
      if (!!this$0.registries_1.contains_vbgn2f_k$($key)) {
        var message = 'Key ' + toString_0($key) + ' was used multiple times ';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      var tmp0 = this$0.savedStates_1;
      // Inline function 'kotlin.collections.minusAssign' call
      var key = $key;
      tmp0.remove_gppy8k_k$(key);
      this$0.registries_1.set_b9w55f_k$($key, $registry);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv(this$0, $key, $registry);
    };
  }
  function SaveableStateHolderImpl$SaveableStateProvider$lambda_0($tmp0_rcvr, $key, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.SaveableStateProvider_3h7wny_k$($key, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SaveableStateHolderImpl(savedStates) {
    Companion_getInstance_2();
    var tmp;
    if (savedStates === VOID) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    } else {
      tmp = savedStates;
    }
    savedStates = tmp;
    this.savedStates_1 = savedStates;
    this.registries_1 = mutableScatterMapOf();
    this.parentSaveableStateRegistry_1 = null;
    var tmp_0 = this;
    tmp_0.canBeSaved_1 = SaveableStateHolderImpl$canBeSaved$lambda(this);
  }
  protoOf(SaveableStateHolderImpl).set_parentSaveableStateRegistry_rshrfm_k$ = function (_set____db54di) {
    this.parentSaveableStateRegistry_1 = _set____db54di;
  };
  protoOf(SaveableStateHolderImpl).get_parentSaveableStateRegistry_5mprdw_k$ = function () {
    return this.parentSaveableStateRegistry_1;
  };
  protoOf(SaveableStateHolderImpl).SaveableStateProvider_3h7wny_k$ = function (key, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(533563200);
    sourceInformation($composer_0, 'C(SaveableStateProvider)P(1)71@3248L1083:SaveableStateHolder.kt#r2ddri');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(key) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(this) ? 256 : 128);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(533563200, $dirty, -1, 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider (SaveableStateHolder.kt:70)');
      }
      // Inline function 'androidx.compose.runtime.ReusableContent' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1800201264, 'CC(ReusableContent)P(1)143@5486L9:Composables.kt#9igjgp');
      $composer_1.startReusableGroup_1qdhl_k$(207, key);
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1512655177, 'C72@3298L408,81@3719L200,86@3955L366,86@3932L389:SaveableStateHolder.kt#r2ddri');
      sourceInformationMarkerStart($composer_2, 366846518, 'CC(remember):SaveableStateHolder.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_2.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'kotlin.require' call
        if (!this.canBeSaved_1(key)) {
          var message = 'Type of the key ' + toString_0(key) + ' is not supported. On Android you can only use types ' + 'which can be stored inside the Bundle.';
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        }
        var value = new SaveableStateRegistryWrapper(SaveableStateRegistry_0(this.savedStates_1.get_wei43m_k$(key), this.canBeSaved_1));
        $composer_2.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      var registry = tmp0_group;
      CompositionLocalProvider([get_LocalSaveableStateRegistry().provides_3agxel_k$(registry), get_LocalSavedStateRegistryOwner().provides_3agxel_k$(registry)], content, $composer_2, androidx_compose_runtime_ProvidedValue$stableprop_getter() | 112 & $dirty);
      sourceInformationMarkerStart($composer_2, 366867500, 'CC(remember):SaveableStateHolder.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.changedInstance_s1wkiy_k$(this) | $composer_0.changedInstance_s1wkiy_k$(key)) | $composer_0.changedInstance_s1wkiy_k$(registry));
      // Inline function 'kotlin.let' call
      var it_0 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = SaveableStateHolderImpl$SaveableStateProvider$lambda(this, key, registry);
        $composer_2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      DisposableEffect(Unit_getInstance(), tmp1_group, $composer_2, 6);
      sourceInformationMarkerEnd($composer_2);
      $composer_1.endReusableGroup_jx82af_k$();
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(SaveableStateHolderImpl$SaveableStateProvider$lambda_0(this, key, content, $changed));
    }
  };
  protoOf(SaveableStateHolderImpl).removeState_5wfli9_k$ = function (key) {
    if (this.registries_1.remove_gppy8k_k$(key) == null) {
      // Inline function 'kotlin.collections.minusAssign' call
      this.savedStates_1.remove_gppy8k_k$(key);
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
  function Entry() {
  }
  function SaveableStateRegistry() {
  }
  function SaveableStateRegistry_0(restoredValues, canBeSaved) {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return new SaveableStateRegistryImpl(restoredValues, canBeSaved);
  }
  function _get_canBeSaved__pps3rd_0($this) {
    return $this.canBeSaved_1;
  }
  function _get_restored__60hukr($this) {
    return $this.restored_1;
  }
  function _set_valueProviders__cbz3sq($this, _set____db54di) {
    $this.valueProviders_1 = _set____db54di;
  }
  function _get_valueProviders__d74c8q($this) {
    return $this.valueProviders_1;
  }
  function SaveableStateRegistryImpl$registerProvider$1($valueProviders, $key, $valueProvider) {
    this.$valueProviders_1 = $valueProviders;
    this.$key_1 = $key;
    this.$valueProvider_1 = $valueProvider;
  }
  protoOf(SaveableStateRegistryImpl$registerProvider$1).unregister_ib976c_k$ = function () {
    var list = this.$valueProviders_1.remove_gppy8k_k$(this.$key_1);
    if (list == null)
      null;
    else
      list.remove_cedx0m_k$(this.$valueProvider_1);
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(list == null || list.isEmpty_y1axqb_k$())) {
      this.$valueProviders_1.set_b9w55f_k$(this.$key_1, list);
    }
  };
  function SaveableStateRegistryImpl(restored, canBeSaved) {
    this.canBeSaved_1 = canBeSaved;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(restored == null || restored.isEmpty_y1axqb_k$())) {
      tmp_0 = toMutableScatterMap(restored);
    } else {
      tmp_0 = null;
    }
    tmp.restored_1 = tmp_0;
    this.valueProviders_1 = null;
  }
  protoOf(SaveableStateRegistryImpl).canBeSaved_nnajrq_k$ = function (value) {
    return this.canBeSaved_1(value);
  };
  protoOf(SaveableStateRegistryImpl).consumeRestored_yfjzaw_k$ = function (key) {
    var tmp0_safe_receiver = this.restored_1;
    var list = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.remove_gppy8k_k$(key);
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(list == null || list.isEmpty_y1axqb_k$())) {
      if (list.get_size_woubt6_k$() > 1) {
        var tmp1_safe_receiver = this.restored_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.put_4fpzoq_k$(key, list.subList_xle3r2_k$(1, list.get_size_woubt6_k$()));
      }
      tmp = list.get_c1px32_k$(0);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SaveableStateRegistryImpl).registerProvider_22k33k_k$ = function (key, valueProvider) {
    // Inline function 'kotlin.require' call
    if (!!fastIsBlank(key)) {
      var message = 'Registered key is empty or blank';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    var tmp0_elvis_lhs = this.valueProviders_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterMapOf();
      this.valueProviders_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var valueProviders = tmp;
    // Inline function 'androidx.collection.MutableScatterMap.getOrPut' call
    var tmp0_elvis_lhs_0 = valueProviders.get_wei43m_k$(key);
    var tmp_0;
    if (tmp0_elvis_lhs_0 == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      // Inline function 'kotlin.also' call
      var this_1 = ArrayList_init_$Create$_0();
      valueProviders.set_b9w55f_k$(key, this_1);
      tmp_0 = this_1;
    } else {
      tmp_0 = tmp0_elvis_lhs_0;
    }
    tmp_0.add_utx5q5_k$(valueProvider);
    return new SaveableStateRegistryImpl$registerProvider$1(valueProviders, key, valueProvider);
  };
  protoOf(SaveableStateRegistryImpl).performSave_ohn24i_k$ = function () {
    if (this.restored_1 == null && this.valueProviders_1 == null) {
      return emptyMap();
    }
    var tmp0_safe_receiver = this.restored_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_size_woubt6_k$();
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = this.valueProviders_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_size_woubt6_k$();
    var expectedMapSize = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    // Inline function 'kotlin.apply' call
    var this_0 = HashMap_init_$Create$(expectedMapSize);
    var tmp0_safe_receiver_0 = this.restored_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterMap.forEach' call
      var k = tmp0_safe_receiver_0.get_keys_8zdyhr_k$();
      var v = tmp0_safe_receiver_0.get_values_y8hjwv_k$();
      $l$block: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m = tmp0_safe_receiver_0.get_metadata_ha42hw_k$();
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
                    this_0.put_4fpzoq_k$(tmp0, value_0);
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
    var tmp4_safe_receiver = this.valueProviders_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterMap.forEach' call
      var k_0 = tmp4_safe_receiver.get_keys_8zdyhr_k$();
      var v_0 = tmp4_safe_receiver.get_values_y8hjwv_k$();
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_0 = tmp4_safe_receiver.get_metadata_ha42hw_k$();
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
                    if (list.get_size_woubt6_k$() === 1) {
                      var value_2 = list.get_c1px32_k$(0)();
                      if (!(value_2 == null)) {
                        // Inline function 'kotlin.check' call
                        if (!this.canBeSaved_nnajrq_k$(value_2)) {
                          var message = generateCannotBeSavedErrorMessage(value_2);
                          throw IllegalStateException_init_$Create$(toString_0(message));
                        }
                        // Inline function 'kotlin.collections.set' call
                        var value_3 = arrayListOf([value_2]);
                        map.put_4fpzoq_k$(tmp0_0, value_3);
                      }
                    } else {
                      // Inline function 'kotlin.collections.List' call
                      // Inline function 'kotlin.collections.MutableList' call
                      var size = list.get_size_woubt6_k$();
                      var list_0 = ArrayList_init_$Create$_1(size);
                      // Inline function 'kotlin.repeat' call
                      var inductionVariable_3 = 0;
                      if (inductionVariable_3 < size)
                        do {
                          var index_1 = inductionVariable_3;
                          inductionVariable_3 = inductionVariable_3 + 1 | 0;
                          var value_4 = list.get_c1px32_k$(index_1)();
                          if (!(value_4 == null)) {
                            // Inline function 'kotlin.check' call
                            if (!this.canBeSaved_nnajrq_k$(value_4)) {
                              var message_0 = generateCannotBeSavedErrorMessage(value_4);
                              throw IllegalStateException_init_$Create$(toString_0(message_0));
                            }
                          }
                          list_0.add_utx5q5_k$(value_4);
                        }
                         while (inductionVariable_3 < size);
                      // Inline function 'kotlin.collections.set' call
                      map.put_4fpzoq_k$(tmp0_0, list_0);
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
    var this_0 = new MutableScatterMap(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.collection.MutableScatterMap.plusAssign' call
    this_0.putAll_mbn033_k$(_this__u8e3s4);
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
      this$0.controller_1.performSave_1ekz61_k$(result);
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
    this.$$delegate_0__1 = base;
    this.controller_1 = Companion_getInstance_0().create_vgrzy2_k$(this);
    this.lifecycle_1 = Companion_getInstance_1().createUnsafe_8zlsyc_k$(this);
    this.savedStateRegistry_1 = this.controller_1.get_savedStateRegistry_c47b5c_k$();
    var tmp = this.consumeRestored_yfjzaw_k$('androidx.savedstate.SavedStateRegistry');
    this.controller_1.performRestore_j2zq6p_k$(tmp instanceof SavedState ? tmp : null);
    this.registerProvider_22k33k_k$('androidx.savedstate.SavedStateRegistry', SaveableStateRegistryWrapper$lambda(this));
  }
  protoOf(SaveableStateRegistryWrapper).get_controller_9mqriz_k$ = function () {
    return this.controller_1;
  };
  protoOf(SaveableStateRegistryWrapper).get_lifecycle_3iiym9_k$ = function () {
    return this.lifecycle_1;
  };
  protoOf(SaveableStateRegistryWrapper).get_savedStateRegistry_c47b5c_k$ = function () {
    return this.savedStateRegistry_1;
  };
  protoOf(SaveableStateRegistryWrapper).consumeRestored_yfjzaw_k$ = function (key) {
    return this.$$delegate_0__1.consumeRestored_yfjzaw_k$(key);
  };
  protoOf(SaveableStateRegistryWrapper).registerProvider_22k33k_k$ = function (key, valueProvider) {
    return this.$$delegate_0__1.registerProvider_22k33k_k$(key, valueProvider);
  };
  protoOf(SaveableStateRegistryWrapper).canBeSaved_nnajrq_k$ = function (value) {
    return this.$$delegate_0__1.canBeSaved_nnajrq_k$(value);
  };
  protoOf(SaveableStateRegistryWrapper).performSave_ohn24i_k$ = function () {
    return this.$$delegate_0__1.performSave_ohn24i_k$();
  };
  function get_AutoSaver() {
    _init_properties_Saver_kt__z47nhf();
    return AutoSaver;
  }
  var AutoSaver;
  function Saver() {
  }
  function SaverScope() {
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
    this.$save_1 = $save;
    this.$restore_1 = $restore;
  }
  protoOf(Saver$1).save_khi2yu_k$ = function (_this__u8e3s4, value) {
    return this.$save_1(_this__u8e3s4, value);
  };
  protoOf(Saver$1).restore_fyjq85_k$ = function (value) {
    return this.$restore_1(value);
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
  _.$_$.b = SaveableStateHolder;
  _.$_$.c = SaveableStateRegistry_0;
  _.$_$.d = SaveableStateRegistry;
  _.$_$.e = Saver_0;
  _.$_$.f = Saver;
  _.$_$.g = listSaver;
  _.$_$.h = rememberSaveableStateHolder;
  _.$_$.i = rememberSaveable_1;
  _.$_$.j = rememberSaveable;
  //endregion
  return _;
}));
