(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-lifecycle-lifecycle-common.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-lifecycle-lifecycle-common.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-savedstate-savedstate'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-savedstate-savedstate'.");
    }
    if (typeof globalThis['androidx-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'androidx-savedstate-savedstate'. Its dependency 'androidx-lifecycle-lifecycle-common' was not found. Please, check whether 'androidx-lifecycle-lifecycle-common' is loaded prior to 'androidx-savedstate-savedstate'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-savedstate-savedstate'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'androidx-savedstate-savedstate'.");
    }
    globalThis['androidx-savedstate-savedstate'] = factory(typeof globalThis['androidx-savedstate-savedstate'] === 'undefined' ? {} : globalThis['androidx-savedstate-savedstate'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-lifecycle-lifecycle-common'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var protoOf = kotlin_kotlin.$_$.yg;
  var LifecycleOwner = kotlin_androidx_lifecycle_lifecycle_common.$_$.b;
  var initMetadataForInterface = kotlin_kotlin.$_$.zf;
  var VOID = kotlin_kotlin.$_$.e;
  var initMetadataForCompanion = kotlin_kotlin.$_$.wf;
  var equals = kotlin_kotlin.$_$.nf;
  var FunctionAdapter = kotlin_kotlin.$_$.ye;
  var isInterface = kotlin_kotlin.$_$.kg;
  var LifecycleEventObserver = kotlin_androidx_lifecycle_lifecycle_common.$_$.a;
  var hashCode = kotlin_kotlin.$_$.uf;
  var initMetadataForClass = kotlin_kotlin.$_$.vf;
  var Unit_getInstance = kotlin_kotlin.$_$.n5;
  var Event_ON_STOP_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.h;
  var Event_ON_START_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.g;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var toString = kotlin_kotlin.$_$.bh;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var THROW_CCE = kotlin_kotlin.$_$.vl;
  var KtMap = kotlin_kotlin.$_$.k6;
  var State_INITIALIZED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.k;
  var State_STARTED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.m;
  var emptyMap = kotlin_kotlin.$_$.m9;
  var toMutableMap = kotlin_kotlin.$_$.vc;
  var Annotation = kotlin_kotlin.$_$.al;
  var initMetadataForObject = kotlin_kotlin.$_$.bg;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.w4;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.y4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var BooleanArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var CharArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var DoubleArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var FloatArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var IntArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var LongArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.b5;
  var ArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var overwriteWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var SerializersModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var getKClass = kotlin_kotlin.$_$.fi;
  var plus = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var toByte = kotlin_kotlin.$_$.zg;
  var toShort = kotlin_kotlin.$_$.ah;
  var Char = kotlin_kotlin.$_$.el;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var isArray = kotlin_kotlin.$_$.cg;
  var isLongArray = kotlin_kotlin.$_$.lg;
  var isIntArray = kotlin_kotlin.$_$.jg;
  var isFloatArray = kotlin_kotlin.$_$.ig;
  var isDoubleArray = kotlin_kotlin.$_$.hg;
  var isCharArray = kotlin_kotlin.$_$.fg;
  var isBooleanArray = kotlin_kotlin.$_$.dg;
  var KtList = kotlin_kotlin.$_$.h6;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var buildClassSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var getKClassFromExpression = kotlin_kotlin.$_$.ei;
  var isCharSequence = kotlin_kotlin.$_$.gg;
  var Long = kotlin_kotlin.$_$.ol;
  var coerceAtMost = kotlin_kotlin.$_$.sh;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.h1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var isByteArray = kotlin_kotlin.$_$.eg;
  var isShortArray = kotlin_kotlin.$_$.mg;
  var contentEquals = kotlin_kotlin.$_$.e8;
  var contentEquals_0 = kotlin_kotlin.$_$.y7;
  var contentEquals_1 = kotlin_kotlin.$_$.a8;
  var contentEquals_2 = kotlin_kotlin.$_$.z7;
  var contentEquals_3 = kotlin_kotlin.$_$.b8;
  var contentEquals_4 = kotlin_kotlin.$_$.c8;
  var contentEquals_5 = kotlin_kotlin.$_$.f8;
  var contentEquals_6 = kotlin_kotlin.$_$.d8;
  var contentDeepEquals = kotlin_kotlin.$_$.u7;
  var contentHashCode = kotlin_kotlin.$_$.g8;
  var contentHashCode_0 = kotlin_kotlin.$_$.h8;
  var contentHashCode_1 = kotlin_kotlin.$_$.m8;
  var contentHashCode_2 = kotlin_kotlin.$_$.n8;
  var contentHashCode_3 = kotlin_kotlin.$_$.k8;
  var contentHashCode_4 = kotlin_kotlin.$_$.j8;
  var contentHashCode_5 = kotlin_kotlin.$_$.o8;
  var contentHashCode_6 = kotlin_kotlin.$_$.i8;
  var contentDeepHashCode = kotlin_kotlin.$_$.v7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w2;
  var contentToString = kotlin_kotlin.$_$.v8;
  var contentToString_0 = kotlin_kotlin.$_$.q8;
  var contentToString_1 = kotlin_kotlin.$_$.u8;
  var contentToString_2 = kotlin_kotlin.$_$.r8;
  var contentToString_3 = kotlin_kotlin.$_$.t8;
  var contentToString_4 = kotlin_kotlin.$_$.w8;
  var contentToString_5 = kotlin_kotlin.$_$.p8;
  var contentToString_6 = kotlin_kotlin.$_$.s8;
  var contentDeepToString = kotlin_kotlin.$_$.w7;
  var get_lastIndex = kotlin_kotlin.$_$.ma;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SavedStateRegistryOwner, 'SavedStateRegistryOwner', VOID, VOID, [LifecycleOwner]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(sam$androidx_lifecycle_LifecycleEventObserver$0, 'sam$androidx_lifecycle_LifecycleEventObserver$0', VOID, VOID, [LifecycleEventObserver, FunctionAdapter]);
  initMetadataForClass(SavedStateRegistryImpl, 'SavedStateRegistryImpl');
  initMetadataForClass(Definition, 'Definition', VOID, VOID, [Annotation]);
  initMetadataForObject(ClassDiscriminatorMode, 'ClassDiscriminatorMode');
  initMetadataForClass(Builder, 'Builder');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(SavedStateConfiguration, 'SavedStateConfiguration');
  initMetadataForClass(SavedStateDecoder, 'SavedStateDecoder', VOID, AbstractDecoder);
  initMetadataForClass(SavedStateEncoder, 'SavedStateEncoder', VOID, AbstractEncoder);
  initMetadataForObject(SavedStateSerializer, 'SavedStateSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SavedState, 'SavedState');
  initMetadataForClass(SavedStateReader, 'SavedStateReader');
  initMetadataForInterface(SavedStateProvider, 'SavedStateProvider');
  initMetadataForClass(SavedStateRegistry, 'SavedStateRegistry');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(SavedStateRegistryController, 'SavedStateRegistryController');
  initMetadataForClass(SavedStateWriter, 'SavedStateWriter');
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  //endregion
  function write(_this__u8e3s4, block) {
    return block(new SavedStateWriter(_SavedStateWriter___init__impl__99cr38(_this__u8e3s4)));
  }
  function read(_this__u8e3s4, block) {
    return block(new SavedStateReader(_SavedStateReader___init__impl__k2stzo(_this__u8e3s4)));
  }
  function keyOrValueNotFoundError(key) {
    throw IllegalArgumentException_init_$Create$("No valid saved state was found for the key '" + key + "'. It may be missing, null, or not of " + 'the expected type. This can occur if the value was saved with a different type or if the saved state was modified unexpectedly.');
  }
  function SavedStateRegistryOwner() {
  }
  function _get_SAVED_COMPONENTS_KEY__lf4wgz($this) {
    return $this.SAVED_COMPONENTS_KEY_1;
  }
  function _get_owner__d3agea($this) {
    return $this.owner_1;
  }
  function _get_lock__d9xa4g($this) {
    return $this.lock_1;
  }
  function _get_keyToProviders__ewhke5($this) {
    return $this.keyToProviders_1;
  }
  function _set_attached__tdysab($this, _set____db54di) {
    $this.attached_1 = _set____db54di;
  }
  function _get_attached__gl2gtj($this) {
    return $this.attached_1;
  }
  function _set_restoredState__84y6tm($this, _set____db54di) {
    $this.restoredState_1 = _set____db54di;
  }
  function _get_restoredState__72tboq($this) {
    return $this.restoredState_1;
  }
  function _set_isRestored__r5yhqh($this, _set____db54di) {
    $this.isRestored_1 = _set____db54di;
  }
  function Companion() {
    Companion_instance = this;
    this.SAVED_COMPONENTS_KEY_1 = 'androidx.lifecycle.BundlableSavedStateRegistry.key';
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function sam$androidx_lifecycle_LifecycleEventObserver$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).onStateChanged_3qr65s_k$ = function (source, event) {
    return this.function_1(source, event);
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, LifecycleEventObserver) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function SavedStateRegistryImpl$_init_$lambda_jhqb6s() {
    return Unit_getInstance();
  }
  function SavedStateRegistryImpl$performAttach$lambda(this$0) {
    return function (_unused_var__etf5q3, event) {
      var tmp;
      if (event.equals(Event_ON_START_getInstance())) {
        this$0.isAllowingSavingState_1 = true;
        tmp = Unit_getInstance();
      } else if (event.equals(Event_ON_STOP_getInstance())) {
        this$0.isAllowingSavingState_1 = false;
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SavedStateRegistryImpl(owner, onAttach) {
    Companion_getInstance();
    var tmp;
    if (onAttach === VOID) {
      tmp = SavedStateRegistryImpl$_init_$lambda_jhqb6s;
    } else {
      tmp = onAttach;
    }
    onAttach = tmp;
    this.owner_1 = owner;
    this.onAttach_1 = onAttach;
    this.lock_1 = new SynchronizedObject();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.keyToProviders_1 = LinkedHashMap_init_$Create$();
    this.attached_1 = false;
    this.restoredState_1 = null;
    this.isRestored_1 = false;
    this.isAllowingSavingState_1 = true;
  }
  protoOf(SavedStateRegistryImpl).get_onAttach_i4gkdt_k$ = function () {
    return this.onAttach_1;
  };
  protoOf(SavedStateRegistryImpl).get_isRestored_w65dux_k$ = function () {
    return this.isRestored_1;
  };
  protoOf(SavedStateRegistryImpl).set_isAllowingSavingState_m4nla2_k$ = function (_set____db54di) {
    this.isAllowingSavingState_1 = _set____db54di;
  };
  protoOf(SavedStateRegistryImpl).get_isAllowingSavingState_ilinxr_k$ = function () {
    return this.isAllowingSavingState_1;
  };
  protoOf(SavedStateRegistryImpl).consumeRestoredStateForKey_hbgcbf_k$ = function (key) {
    // Inline function 'kotlin.check' call
    if (!this.isRestored_1) {
      var message = "You can 'consumeRestoredStateForKey' only after the corresponding component has moved to the 'CREATED' state";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = this.restoredState_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var state = tmp;
    // Inline function 'androidx.savedstate.read' call
    var $this$read = _SavedStateReader___init__impl__k2stzo(state);
    var consumed = SavedStateReader__contains_impl_ig4u69($this$read, key) ? SavedStateReader__getSavedState_impl_l38yfa($this$read, key) : null;
    // Inline function 'androidx.savedstate.write' call
    var $this$write = _SavedStateWriter___init__impl__99cr38(state);
    SavedStateWriter__remove_impl_9y9m5w($this$write, key);
    // Inline function 'androidx.savedstate.read' call
    var $this$read_0 = _SavedStateReader___init__impl__k2stzo(state);
    if (SavedStateReader__isEmpty_impl_ep4h1z($this$read_0)) {
      this.restoredState_1 = null;
    }
    return consumed;
  };
  protoOf(SavedStateRegistryImpl).registerSavedStateProvider_k3a9pp_k$ = function (key, provider) {
    // Inline function 'androidx.savedstate.internal.synchronized' call
    // Inline function 'androidx.savedstate.internal.synchronizedImpl' call
    this.lock_1;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.keyToProviders_1;
    // Inline function 'kotlin.require' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(key)) {
      var message = 'SavedStateProvider with the given key is already registered';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.keyToProviders_1.put_4fpzoq_k$(key, provider);
  };
  protoOf(SavedStateRegistryImpl).getSavedStateProvider_j42zqv_k$ = function (key) {
    // Inline function 'androidx.savedstate.internal.synchronized' call
    // Inline function 'androidx.savedstate.internal.synchronizedImpl' call
    this.lock_1;
    var tmp0 = this.keyToProviders_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = tmp0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlin.collections.component1' call
        var k = element.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var provider = element.get_value_j01efc_k$();
        var result = k === key ? provider : null;
        if (!(result == null)) {
          tmp$ret$4 = result;
          break $l$block;
        }
      }
      tmp$ret$4 = null;
    }
    return tmp$ret$4;
  };
  protoOf(SavedStateRegistryImpl).unregisterSavedStateProvider_j6i07n_k$ = function (key) {
    // Inline function 'androidx.savedstate.internal.synchronized' call
    // Inline function 'androidx.savedstate.internal.synchronizedImpl' call
    this.lock_1;
    this.keyToProviders_1.remove_gppy8k_k$(key);
  };
  protoOf(SavedStateRegistryImpl).performAttach_s69gp6_k$ = function () {
    // Inline function 'kotlin.check' call
    if (!this.owner_1.get_lifecycle_3iiym9_k$().get_currentState_snihnl_k$().equals(State_INITIALIZED_getInstance())) {
      var message = "Restarter must be created only during owner's initialization stage";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!!this.attached_1) {
      var message_0 = 'SavedStateRegistry was already attached.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    this.onAttach_1();
    var tmp = this.owner_1.get_lifecycle_3iiym9_k$();
    var tmp_0 = SavedStateRegistryImpl$performAttach$lambda(this);
    tmp.addObserver_xhlg3u_k$(new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp_0));
    this.attached_1 = true;
  };
  protoOf(SavedStateRegistryImpl).performRestore_jm3wvp_k$ = function (savedState) {
    if (!this.attached_1) {
      this.performAttach_s69gp6_k$();
    }
    // Inline function 'kotlin.check' call
    if (!!this.owner_1.get_lifecycle_3iiym9_k$().get_currentState_snihnl_k$().isAtLeast_pbz9hc_k$(State_STARTED_getInstance())) {
      var message = 'performRestore cannot be called when owner is ' + this.owner_1.get_lifecycle_3iiym9_k$().get_currentState_snihnl_k$().toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!!this.isRestored_1) {
      var message_0 = 'SavedStateRegistry was already restored.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp = this;
    var tmp_0;
    if (savedState == null) {
      tmp_0 = null;
    } else {
      // Inline function 'androidx.savedstate.read' call
      var $this$read = _SavedStateReader___init__impl__k2stzo(savedState);
      tmp_0 = SavedStateReader__contains_impl_ig4u69($this$read, 'androidx.lifecycle.BundlableSavedStateRegistry.key') ? SavedStateReader__getSavedState_impl_l38yfa($this$read, 'androidx.lifecycle.BundlableSavedStateRegistry.key') : null;
    }
    tmp.restoredState_1 = tmp_0;
    this.isRestored_1 = true;
  };
  protoOf(SavedStateRegistryImpl).performSave_wqsc8d_k$ = function (outBundle) {
    // Inline function 'androidx.savedstate.savedState' call
    var initialState = emptyMap();
    var copiedState = toMutableMap(initialState);
    // Inline function 'kotlin.apply' call
    var this_0 = new SavedState(copiedState);
    // Inline function 'androidx.savedstate.write' call
    var $this$savedState = _SavedStateWriter___init__impl__99cr38(this_0);
    var tmp0_safe_receiver = this.restoredState_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      SavedStateWriter__putAll_impl_no0lvi($this$savedState, tmp0_safe_receiver);
    }
    // Inline function 'androidx.savedstate.internal.synchronized' call
    // Inline function 'androidx.savedstate.internal.synchronizedImpl' call
    this.lock_1;
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.keyToProviders_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var provider = _destruct__k2r9zo.get_value_j01efc_k$();
      SavedStateWriter__putSavedState_impl_5xy7ov($this$savedState, key, provider.saveState_2v0z6c_k$());
    }
    var inState = this_0;
    // Inline function 'androidx.savedstate.read' call
    var $this$read = _SavedStateReader___init__impl__k2stzo(inState);
    if (!SavedStateReader__isEmpty_impl_ep4h1z($this$read)) {
      // Inline function 'androidx.savedstate.write' call
      var $this$write = _SavedStateWriter___init__impl__99cr38(outBundle);
      SavedStateWriter__putSavedState_impl_5xy7ov($this$write, 'androidx.lifecycle.BundlableSavedStateRegistry.key', inState);
    }
  };
  function synchronized(lock, action) {
    // Inline function 'androidx.savedstate.internal.synchronizedImpl' call
    return action();
  }
  function Definition() {
  }
  protoOf(Definition).equals = function (other) {
    if (!(other instanceof Definition))
      return false;
    other instanceof Definition || THROW_CCE();
    return true;
  };
  protoOf(Definition).hashCode = function () {
    return 0;
  };
  protoOf(Definition).toString = function () {
    return '@androidx.savedstate.serialization.ClassDiscriminatorMode.Definition(' + ')';
  };
  function ClassDiscriminatorMode() {
    ClassDiscriminatorMode_instance = this;
    this.ALL_OBJECTS_1 = 1;
    this.POLYMORPHIC_1 = 2;
  }
  protoOf(ClassDiscriminatorMode).get_ALL_OBJECTS_98nghf_k$ = function () {
    return this.ALL_OBJECTS_1;
  };
  protoOf(ClassDiscriminatorMode).get_POLYMORPHIC_lhv9v7_k$ = function () {
    return this.POLYMORPHIC_1;
  };
  var ClassDiscriminatorMode_instance;
  function ClassDiscriminatorMode_getInstance() {
    if (ClassDiscriminatorMode_instance == null)
      new ClassDiscriminatorMode();
    return ClassDiscriminatorMode_instance;
  }
  function get_intListDescriptor() {
    _init_properties_SavedStateCodecUtils_kt__xe1y9n();
    return intListDescriptor;
  }
  var intListDescriptor;
  function get_stringListDescriptor() {
    _init_properties_SavedStateCodecUtils_kt__xe1y9n();
    return stringListDescriptor;
  }
  var stringListDescriptor;
  function get_booleanArrayDescriptor() {
    _init_properties_SavedStateCodecUtils_kt__xe1y9n();
    return booleanArrayDescriptor;
  }
  var booleanArrayDescriptor;
  function get_charArrayDescriptor() {
    _init_properties_SavedStateCodecUtils_kt__xe1y9n();
    return charArrayDescriptor;
  }
  var charArrayDescriptor;
  function get_doubleArrayDescriptor() {
    _init_properties_SavedStateCodecUtils_kt__xe1y9n();
    return doubleArrayDescriptor;
  }
  var doubleArrayDescriptor;
  function get_floatArrayDescriptor() {
    _init_properties_SavedStateCodecUtils_kt__xe1y9n();
    return floatArrayDescriptor;
  }
  var floatArrayDescriptor;
  function get_intArrayDescriptor() {
    _init_properties_SavedStateCodecUtils_kt__xe1y9n();
    return intArrayDescriptor;
  }
  var intArrayDescriptor;
  function get_longArrayDescriptor() {
    _init_properties_SavedStateCodecUtils_kt__xe1y9n();
    return longArrayDescriptor;
  }
  var longArrayDescriptor;
  function get_stringArrayDescriptor() {
    _init_properties_SavedStateCodecUtils_kt__xe1y9n();
    return stringArrayDescriptor;
  }
  var stringArrayDescriptor;
  var properties_initialized_SavedStateCodecUtils_kt_1jj407;
  function _init_properties_SavedStateCodecUtils_kt__xe1y9n() {
    if (!properties_initialized_SavedStateCodecUtils_kt_1jj407) {
      properties_initialized_SavedStateCodecUtils_kt_1jj407 = true;
      intListDescriptor = ListSerializer(serializer(IntCompanionObject_getInstance())).get_descriptor_wjt6a0_k$();
      stringListDescriptor = ListSerializer(serializer_0(StringCompanionObject_getInstance())).get_descriptor_wjt6a0_k$();
      booleanArrayDescriptor = BooleanArraySerializer().get_descriptor_wjt6a0_k$();
      charArrayDescriptor = CharArraySerializer().get_descriptor_wjt6a0_k$();
      doubleArrayDescriptor = DoubleArraySerializer().get_descriptor_wjt6a0_k$();
      floatArrayDescriptor = FloatArraySerializer().get_descriptor_wjt6a0_k$();
      intArrayDescriptor = IntArraySerializer().get_descriptor_wjt6a0_k$();
      longArrayDescriptor = LongArraySerializer().get_descriptor_wjt6a0_k$();
      // Inline function 'kotlinx.serialization.builtins.ArraySerializer' call
      var elementSerializer = serializer_0(StringCompanionObject_getInstance());
      stringArrayDescriptor = ArraySerializer(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), elementSerializer).get_descriptor_wjt6a0_k$();
    }
  }
  function get_DEFAULT_SERIALIZERS_MODULE() {
    _init_properties_SavedStateConfiguration_kt__kc9752();
    return DEFAULT_SERIALIZERS_MODULE;
  }
  var DEFAULT_SERIALIZERS_MODULE;
  function Builder(configuration) {
    this.serializersModule_1 = configuration.serializersModule_1;
    this.encodeDefaults_1 = configuration.encodeDefaults_1;
    this.classDiscriminatorMode_1 = configuration.classDiscriminatorMode_1;
  }
  protoOf(Builder).set_serializersModule_6xge6s_k$ = function (_set____db54di) {
    this.serializersModule_1 = _set____db54di;
  };
  protoOf(Builder).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(Builder).set_encodeDefaults_c5evsg_k$ = function (_set____db54di) {
    this.encodeDefaults_1 = _set____db54di;
  };
  protoOf(Builder).get_encodeDefaults_m8plkf_k$ = function () {
    return this.encodeDefaults_1;
  };
  protoOf(Builder).set_classDiscriminatorMode_ai6dac_k$ = function (_set____db54di) {
    this.classDiscriminatorMode_1 = _set____db54di;
  };
  protoOf(Builder).get_classDiscriminatorMode_bmc7xs_k$ = function () {
    return this.classDiscriminatorMode_1;
  };
  protoOf(Builder).build_cno5le_k$ = function () {
    return new SavedStateConfiguration(overwriteWith(get_DEFAULT_SERIALIZERS_MODULE(), this.serializersModule_1), this.classDiscriminatorMode_1, this.encodeDefaults_1);
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.DEFAULT_1 = new SavedStateConfiguration();
  }
  protoOf(Companion_0).get_DEFAULT_wccqmg_k$ = function () {
    return this.DEFAULT_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function SavedStateConfiguration(serializersModule, classDiscriminatorMode, encodeDefaults) {
    Companion_getInstance_0();
    serializersModule = serializersModule === VOID ? get_DEFAULT_SERIALIZERS_MODULE() : serializersModule;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? 2 : classDiscriminatorMode;
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    this.serializersModule_1 = serializersModule;
    this.classDiscriminatorMode_1 = classDiscriminatorMode;
    this.encodeDefaults_1 = encodeDefaults;
  }
  protoOf(SavedStateConfiguration).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(SavedStateConfiguration).get_classDiscriminatorMode_bmc7xs_k$ = function () {
    return this.classDiscriminatorMode_1;
  };
  protoOf(SavedStateConfiguration).get_encodeDefaults_m8plkf_k$ = function () {
    return this.encodeDefaults_1;
  };
  var properties_initialized_SavedStateConfiguration_kt_h33r98;
  function _init_properties_SavedStateConfiguration_kt__kc9752() {
    if (!properties_initialized_SavedStateConfiguration_kt_h33r98) {
      properties_initialized_SavedStateConfiguration_kt_h33r98 = true;
      // Inline function 'kotlinx.serialization.modules.SerializersModule' call
      var builder = new SerializersModuleBuilder();
      // Inline function 'kotlinx.serialization.modules.contextual' call
      var serializer = SavedStateSerializer_getInstance();
      builder.contextual_s0h8js_k$(getKClass(SavedState), serializer);
      var tmp$ret$2 = builder.build_boe8ts_k$();
      DEFAULT_SERIALIZERS_MODULE = plus(tmp$ret$2, getDefaultSerializersModuleOnPlatform());
    }
  }
  function _get_configuration__557qfv($this) {
    return $this.configuration_1;
  }
  function _set_key__4w8w3q($this, _set____db54di) {
    $this.key_1 = _set____db54di;
  }
  function _set_index__fyfqnn($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt($this) {
    return $this.index_1;
  }
  function decodeIntList($this) {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = $this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return SavedStateReader__getIntList_impl_lhnb55($this$read, $this.key_1);
  }
  function decodeStringList($this) {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = $this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return SavedStateReader__getStringList_impl_iwbmej($this$read, $this.key_1);
  }
  function decodeBooleanArray($this) {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = $this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return SavedStateReader__getBooleanArray_impl_pc3s6l($this$read, $this.key_1);
  }
  function decodeCharArray($this) {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = $this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return SavedStateReader__getCharArray_impl_nb2ggd($this$read, $this.key_1);
  }
  function decodeDoubleArray($this) {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = $this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return SavedStateReader__getDoubleArray_impl_v9u6oi($this$read, $this.key_1);
  }
  function decodeFloatArray($this) {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = $this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return SavedStateReader__getFloatArray_impl_jv9sw7($this$read, $this.key_1);
  }
  function decodeIntArray($this) {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = $this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return SavedStateReader__getIntArray_impl_i81256($this$read, $this.key_1);
  }
  function decodeLongArray($this) {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = $this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return SavedStateReader__getLongArray_impl_91cwk9($this$read, $this.key_1);
  }
  function decodeStringArray($this) {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = $this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return SavedStateReader__getStringArray_impl_qa4w7m($this$read, $this.key_1);
  }
  function decodeFormatSpecificTypes($this, deserializer) {
    var tmp0_elvis_lhs = decodeFormatSpecificTypesOnPlatform($this, deserializer);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp1_subject = deserializer.get_descriptor_wjt6a0_k$();
      var tmp_0 = equals(tmp1_subject, get_intListDescriptor()) ? decodeIntList($this) : equals(tmp1_subject, get_stringListDescriptor()) ? decodeStringList($this) : equals(tmp1_subject, get_booleanArrayDescriptor()) ? decodeBooleanArray($this) : equals(tmp1_subject, get_charArrayDescriptor()) ? decodeCharArray($this) : equals(tmp1_subject, get_doubleArrayDescriptor()) ? decodeDoubleArray($this) : equals(tmp1_subject, get_floatArrayDescriptor()) ? decodeFloatArray($this) : equals(tmp1_subject, get_intArrayDescriptor()) ? decodeIntArray($this) : equals(tmp1_subject, get_longArrayDescriptor()) ? decodeLongArray($this) : equals(tmp1_subject, get_stringArrayDescriptor()) ? decodeStringArray($this) : null;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function decodeElementIndex$hasDefaultValueDefined($descriptor, index) {
    return $descriptor.isElementOptional_heqq56_k$(index);
  }
  function decodeElementIndex$presentInEncoding(this$0, $descriptor, index) {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = this$0.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    var key = $descriptor.getElementName_u4sqmf_k$(index);
    return SavedStateReader__contains_impl_ig4u69($this$read, key);
  }
  function SavedStateDecoder(savedState, configuration) {
    AbstractDecoder.call(this);
    this.savedState_1 = savedState;
    this.configuration_1 = configuration;
    this.key_1 = '';
    this.index_1 = 0;
    this.serializersModule_1 = this.configuration_1.get_serializersModule_piitvg_k$();
  }
  protoOf(SavedStateDecoder).get_savedState_p8ip13_k$ = function () {
    return this.savedState_1;
  };
  protoOf(SavedStateDecoder).get_key_ic1k9m_k$ = function () {
    return this.key_1;
  };
  protoOf(SavedStateDecoder).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(SavedStateDecoder).decodeElementIndex_bstkhp_k$ = function (descriptor) {
    var tmp;
    if (equals(descriptor.get_kind_wop7ml_k$(), LIST_getInstance()) || equals(descriptor.get_kind_wop7ml_k$(), MAP_getInstance())) {
      // Inline function 'androidx.savedstate.read' call
      var this_0 = this.savedState_1;
      var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
      tmp = SavedStateReader__size_impl_78y4db($this$read);
    } else {
      tmp = descriptor.get_elementsCount_288r0x_k$();
    }
    var size = tmp;
    while (this.index_1 < size && decodeElementIndex$hasDefaultValueDefined(descriptor, this.index_1) && !decodeElementIndex$presentInEncoding(this, descriptor, this.index_1)) {
      this.index_1 = this.index_1 + 1 | 0;
    }
    if (this.index_1 < size) {
      this.key_1 = descriptor.getElementName_u4sqmf_k$(this.index_1);
      var _unary__edvuaz = this.index_1;
      this.index_1 = _unary__edvuaz + 1 | 0;
      return _unary__edvuaz;
    } else {
      return -1;
    }
  };
  protoOf(SavedStateDecoder).decodeBoolean_m0aca_k$ = function () {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return SavedStateReader__getBoolean_impl_3sh05q($this$read, this.key_1);
  };
  protoOf(SavedStateDecoder).decodeByte_jzz7je_k$ = function () {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return toByte(SavedStateReader__getInt_impl_59ulzt($this$read, this.key_1));
  };
  protoOf(SavedStateDecoder).decodeShort_jjqk32_k$ = function () {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return toShort(SavedStateReader__getInt_impl_59ulzt($this$read, this.key_1));
  };
  protoOf(SavedStateDecoder).decodeInt_8iq8f5_k$ = function () {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return SavedStateReader__getInt_impl_59ulzt($this$read, this.key_1);
  };
  protoOf(SavedStateDecoder).decodeLong_jzt186_k$ = function () {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return SavedStateReader__getLong_impl_1qg7aw($this$read, this.key_1);
  };
  protoOf(SavedStateDecoder).decodeFloat_jcnrwu_k$ = function () {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return SavedStateReader__getFloat_impl_sur8uy($this$read, this.key_1);
  };
  protoOf(SavedStateDecoder).decodeDouble_ur8l0f_k$ = function () {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return SavedStateReader__getDouble_impl_8hpdd9($this$read, this.key_1);
  };
  protoOf(SavedStateDecoder).decodeChar_dcmcfa_k$ = function () {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return SavedStateReader__getChar_impl_lzqxri($this$read, this.key_1);
  };
  protoOf(SavedStateDecoder).decodeString_x3hxsx_k$ = function () {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return SavedStateReader__getString_impl_6prgh9($this$read, this.key_1);
  };
  protoOf(SavedStateDecoder).decodeEnum_slg6lu_k$ = function (enumDescriptor) {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return SavedStateReader__getInt_impl_59ulzt($this$read, this.key_1);
  };
  protoOf(SavedStateDecoder).beginStructure_yljocp_k$ = function (descriptor) {
    var tmp;
    if (this.key_1 === '') {
      tmp = this;
    } else {
      // Inline function 'androidx.savedstate.read' call
      var this_0 = this.savedState_1;
      var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
      var tmp$ret$1 = SavedStateReader__getSavedState_impl_l38yfa($this$read, this.key_1);
      tmp = new SavedStateDecoder(tmp$ret$1, this.configuration_1);
    }
    return tmp;
  };
  protoOf(SavedStateDecoder).decodeNotNullMark_us4ba1_k$ = function () {
    // Inline function 'androidx.savedstate.read' call
    var this_0 = this.savedState_1;
    var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
    return !SavedStateReader__isNull_impl_c8lka9($this$read, this.key_1);
  };
  protoOf(SavedStateDecoder).decodeSerializableValue_xpnpad_k$ = function (deserializer) {
    var tmp0_elvis_lhs = decodeFormatSpecificTypes(this, deserializer);
    return tmp0_elvis_lhs == null ? protoOf(AbstractDecoder).decodeSerializableValue_xpnpad_k$.call(this, deserializer) : tmp0_elvis_lhs;
  };
  function _get_configuration__557qfv_0($this) {
    return $this.configuration_1;
  }
  function _set_key__4w8w3q_0($this, _set____db54di) {
    $this.key_1 = _set____db54di;
  }
  function checkDiscriminatorCollisions($this, savedState, elementName) {
    if ($this.configuration_1.get_classDiscriminatorMode_bmc7xs_k$() === 1) {
      // Inline function 'androidx.savedstate.read' call
      var $this$read = _SavedStateReader___init__impl__k2stzo(savedState);
      var hasClassDiscriminator = SavedStateReader__contains_impl_ig4u69($this$read, 'type');
      var hasConflictingElementName = elementName === 'type';
      if (hasClassDiscriminator && hasConflictingElementName) {
        // Inline function 'androidx.savedstate.read' call
        var $this$read_0 = _SavedStateReader___init__impl__k2stzo(savedState);
        var classDiscriminator = SavedStateReader__getString_impl_6prgh9($this$read_0, 'type');
        throw IllegalArgumentException_init_$Create$('SavedStateEncoder for ' + classDiscriminator + " has property '" + elementName + "' that " + 'conflicts with the class discriminator. You can rename a property with @SerialName annotation.');
      }
    }
  }
  function encodeIntList($this, value) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = $this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putIntList_impl_j8eatq($this$write, $this.key_1, value);
  }
  function encodeStringList($this, value) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = $this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putStringList_impl_3r0vo4($this$write, $this.key_1, value);
  }
  function encodeBooleanArray($this, value) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = $this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putBooleanArray_impl_u8fdxy($this$write, $this.key_1, value);
  }
  function encodeCharArray($this, value) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = $this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putCharArray_impl_kiznno($this$write, $this.key_1, value);
  }
  function encodeDoubleArray($this, value) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = $this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putDoubleArray_impl_c3qi7r($this$write, $this.key_1, value);
  }
  function encodeFloatArray($this, value) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = $this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putFloatArray_impl_z0kjmm($this$write, $this.key_1, value);
  }
  function encodeIntArray($this, value) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = $this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putIntArray_impl_yco4oh($this$write, $this.key_1, value);
  }
  function encodeLongArray($this, value) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = $this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putLongArray_impl_btfpcy($this$write, $this.key_1, value);
  }
  function encodeStringArray($this, value) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = $this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putStringArray_impl_h3fson($this$write, $this.key_1, value);
  }
  function putClassDiscriminatorIfRequired($this, configuration, descriptor, savedState) {
    if (!(configuration.get_classDiscriminatorMode_bmc7xs_k$() === 1)) {
      return Unit_getInstance();
    }
    // Inline function 'androidx.savedstate.read' call
    var $this$read = _SavedStateReader___init__impl__k2stzo(savedState);
    if (SavedStateReader__contains_impl_ig4u69($this$read, 'type')) {
      return Unit_getInstance();
    }
    if (equals(descriptor.get_kind_wop7ml_k$(), CLASS_getInstance()) || equals(descriptor.get_kind_wop7ml_k$(), OBJECT_getInstance())) {
      // Inline function 'androidx.savedstate.write' call
      var $this$write = _SavedStateWriter___init__impl__99cr38(savedState);
      SavedStateWriter__putString_impl_80cw16($this$write, 'type', descriptor.get_serialName_u2rqhk_k$());
    }
  }
  function encodeFormatSpecificTypes($this, serializer, value) {
    var encoded = encodeFormatSpecificTypesOnPlatform($this, serializer, value);
    if (!encoded) {
      var tmp0_subject = serializer.get_descriptor_wjt6a0_k$();
      if (equals(tmp0_subject, get_intListDescriptor())) {
        encodeIntList($this, (!(value == null) ? isInterface(value, KtList) : false) ? value : THROW_CCE());
      } else if (equals(tmp0_subject, get_stringListDescriptor())) {
        encodeStringList($this, (!(value == null) ? isInterface(value, KtList) : false) ? value : THROW_CCE());
      } else if (equals(tmp0_subject, get_booleanArrayDescriptor())) {
        encodeBooleanArray($this, (!(value == null) ? isBooleanArray(value) : false) ? value : THROW_CCE());
      } else if (equals(tmp0_subject, get_charArrayDescriptor())) {
        encodeCharArray($this, (!(value == null) ? isCharArray(value) : false) ? value : THROW_CCE());
      } else if (equals(tmp0_subject, get_doubleArrayDescriptor())) {
        encodeDoubleArray($this, (!(value == null) ? isDoubleArray(value) : false) ? value : THROW_CCE());
      } else if (equals(tmp0_subject, get_floatArrayDescriptor())) {
        encodeFloatArray($this, (!(value == null) ? isFloatArray(value) : false) ? value : THROW_CCE());
      } else if (equals(tmp0_subject, get_intArrayDescriptor())) {
        encodeIntArray($this, (!(value == null) ? isIntArray(value) : false) ? value : THROW_CCE());
      } else if (equals(tmp0_subject, get_longArrayDescriptor())) {
        encodeLongArray($this, (!(value == null) ? isLongArray(value) : false) ? value : THROW_CCE());
      } else if (equals(tmp0_subject, get_stringArrayDescriptor())) {
        encodeStringArray($this, (!(value == null) ? isArray(value) : false) ? value : THROW_CCE());
      } else
        return false;
    }
    return true;
  }
  function SavedStateEncoder(savedState, configuration) {
    AbstractEncoder.call(this);
    this.savedState_1 = savedState;
    this.configuration_1 = configuration;
    this.key_1 = '';
    this.serializersModule_1 = this.configuration_1.get_serializersModule_piitvg_k$();
  }
  protoOf(SavedStateEncoder).get_savedState_p8ip13_k$ = function () {
    return this.savedState_1;
  };
  protoOf(SavedStateEncoder).get_key_ic1k9m_k$ = function () {
    return this.key_1;
  };
  protoOf(SavedStateEncoder).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(SavedStateEncoder).shouldEncodeElementDefault_x8eyid_k$ = function (descriptor, index) {
    return this.configuration_1.get_encodeDefaults_m8plkf_k$();
  };
  protoOf(SavedStateEncoder).encodeElement_5v7eyb_k$ = function (descriptor, index) {
    this.key_1 = descriptor.getElementName_u4sqmf_k$(index);
    checkDiscriminatorCollisions(this, this.savedState_1, this.key_1);
    return true;
  };
  protoOf(SavedStateEncoder).encodeBoolean_tu2e59_k$ = function (value) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putBoolean_impl_y3jg5z($this$write, this.key_1, value);
  };
  protoOf(SavedStateEncoder).encodeByte_6txfee_k$ = function (value) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putInt_impl_39pq28($this$write, this.key_1, value);
  };
  protoOf(SavedStateEncoder).encodeShort_gza6si_k$ = function (value) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putInt_impl_39pq28($this$write, this.key_1, value);
  };
  protoOf(SavedStateEncoder).encodeInt_y5zi3z_k$ = function (value) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putInt_impl_39pq28($this$write, this.key_1, value);
  };
  protoOf(SavedStateEncoder).encodeLong_3didw_k$ = function (value) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putLong_impl_l0e1gh($this$write, this.key_1, value);
  };
  protoOf(SavedStateEncoder).encodeFloat_b8b85a_k$ = function (value) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putFloat_impl_gha59($this$write, this.key_1, value);
  };
  protoOf(SavedStateEncoder).encodeDouble_n270q9_k$ = function (value) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putDouble_impl_68ez56($this$write, this.key_1, value);
  };
  protoOf(SavedStateEncoder).encodeChar_oxoup_k$ = function (value) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putChar_impl_2pt3lx($this$write, this.key_1, value);
  };
  protoOf(SavedStateEncoder).encodeString_424b5v_k$ = function (value) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putString_impl_80cw16($this$write, this.key_1, value);
  };
  protoOf(SavedStateEncoder).encodeEnum_2qin0y_k$ = function (enumDescriptor, index) {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putInt_impl_39pq28($this$write, this.key_1, index);
  };
  protoOf(SavedStateEncoder).encodeNull_ejiosz_k$ = function () {
    // Inline function 'androidx.savedstate.write' call
    var this_0 = this.savedState_1;
    var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
    SavedStateWriter__putNull_impl_5vjr4c($this$write, this.key_1);
  };
  protoOf(SavedStateEncoder).beginStructure_yljocp_k$ = function (descriptor) {
    var tmp;
    if (this.key_1 === '') {
      putClassDiscriminatorIfRequired(this, this.configuration_1, descriptor, this.savedState_1);
      tmp = this;
    } else {
      // Inline function 'androidx.savedstate.savedState' call
      var initialState = emptyMap();
      var copiedState = toMutableMap(initialState);
      // Inline function 'kotlin.apply' call
      var this_0 = new SavedState(copiedState);
      // Inline function 'androidx.savedstate.write' call
      _SavedStateWriter___init__impl__99cr38(this_0);
      var childState = this_0;
      // Inline function 'androidx.savedstate.write' call
      var this_1 = this.savedState_1;
      var $this$write = _SavedStateWriter___init__impl__99cr38(this_1);
      SavedStateWriter__putSavedState_impl_5xy7ov($this$write, this.key_1, childState);
      putClassDiscriminatorIfRequired(this, this.configuration_1, descriptor, childState);
      tmp = new SavedStateEncoder(childState, this.configuration_1);
    }
    return tmp;
  };
  protoOf(SavedStateEncoder).encodeSerializableValue_3uuzip_k$ = function (serializer, value) {
    var encoded = encodeFormatSpecificTypes(this, serializer, value);
    if (!encoded) {
      protoOf(AbstractEncoder).encodeSerializableValue_3uuzip_k$.call(this, serializer, value);
    }
  };
  function SavedStateSerializer() {
    SavedStateSerializer_instance = this;
    this.descriptor_1 = buildClassSerialDescriptor('androidx.savedstate.SavedState', []);
  }
  protoOf(SavedStateSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(SavedStateSerializer).serialize_mryteg_k$ = function (encoder, value) {
    // Inline function 'kotlin.require' call
    if (!(encoder instanceof SavedStateEncoder)) {
      var message = encoderErrorMessage(SavedStateSerializer_getInstance().descriptor_1.get_serialName_u2rqhk_k$(), encoder);
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.run' call
    if (encoder.get_key_ic1k9m_k$() === '') {
      // Inline function 'androidx.savedstate.write' call
      var this_0 = encoder.get_savedState_p8ip13_k$();
      var $this$write = _SavedStateWriter___init__impl__99cr38(this_0);
      SavedStateWriter__putAll_impl_no0lvi($this$write, value);
    } else {
      // Inline function 'androidx.savedstate.write' call
      var this_1 = encoder.get_savedState_p8ip13_k$();
      var $this$write_0 = _SavedStateWriter___init__impl__99cr38(this_1);
      SavedStateWriter__putSavedState_impl_5xy7ov($this$write_0, encoder.get_key_ic1k9m_k$(), value);
    }
  };
  protoOf(SavedStateSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_mryteg_k$(encoder, value instanceof SavedState ? value : THROW_CCE());
  };
  protoOf(SavedStateSerializer).deserialize_sy6x50_k$ = function (decoder) {
    // Inline function 'kotlin.require' call
    if (!(decoder instanceof SavedStateDecoder)) {
      var message = decoderErrorMessage(SavedStateSerializer_getInstance().descriptor_1.get_serialName_u2rqhk_k$(), decoder);
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.run' call
    var tmp;
    if (decoder.get_key_ic1k9m_k$() === '') {
      tmp = decoder.get_savedState_p8ip13_k$();
    } else {
      // Inline function 'androidx.savedstate.read' call
      var this_0 = decoder.get_savedState_p8ip13_k$();
      var $this$read = _SavedStateReader___init__impl__k2stzo(this_0);
      tmp = SavedStateReader__getSavedState_impl_l38yfa($this$read, decoder.get_key_ic1k9m_k$());
    }
    return tmp;
  };
  var SavedStateSerializer_instance;
  function SavedStateSerializer_getInstance() {
    if (SavedStateSerializer_instance == null)
      new SavedStateSerializer();
    return SavedStateSerializer_instance;
  }
  function encoderErrorMessage(serialName, encoder) {
    return 'Cannot serialize ' + serialName + " with '" + getKClassFromExpression(encoder).get_simpleName_r6f8py_k$() + "'." + " This serializer can only be used with SavedStateEncoder. Use 'encodeToSavedState' instead.";
  }
  function decoderErrorMessage(serialName, decoder) {
    return 'Cannot deserialize ' + serialName + " with '" + getKClassFromExpression(decoder).get_simpleName_r6f8py_k$() + "'." + " This serializer can only be used with SavedStateDecoder. Use 'decodeFromSavedState' instead.";
  }
  function SavedState(map) {
    var tmp;
    if (map === VOID) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    } else {
      tmp = map;
    }
    map = tmp;
    this.map_1 = map;
  }
  protoOf(SavedState).get_map_r7xsq1_k$ = function () {
    return this.map_1;
  };
  function savedState(initialState, builderAction) {
    initialState = initialState === VOID ? emptyMap() : initialState;
    var tmp;
    if (builderAction === VOID) {
      tmp = savedState$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    var copiedState = toMutableMap(initialState);
    // Inline function 'kotlin.apply' call
    var this_0 = new SavedState(copiedState);
    // Inline function 'androidx.savedstate.write' call
    builderAction(new SavedStateWriter(_SavedStateWriter___init__impl__99cr38(this_0)));
    return this_0;
  }
  function savedState$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function _SavedStateReader___init__impl__k2stzo(source) {
    return source;
  }
  function _get_source__4cuw5s($this) {
    return $this;
  }
  function SavedStateReader__getBoolean_impl_3sh05q($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getBooleanOrNull_impl_52ectg($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : null;
  }
  function SavedStateReader__getChar_impl_lzqxri($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp_0;
    if (tmp instanceof Char) {
      var tmp_1 = tmp;
      tmp_0 = tmp_1 == null ? null : tmp_1.value_1;
    } else {
      tmp_0 = null;
    }
    var tmp0_elvis_lhs = tmp_0;
    var tmp_2;
    var tmp_3 = tmp0_elvis_lhs;
    if ((tmp_3 == null ? null : new Char(tmp_3)) == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_2 = tmp0_elvis_lhs;
    }
    return tmp_2;
  }
  function SavedStateReader__getCharOrNull_impl_32klks($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp_0;
    if (tmp instanceof Char) {
      var tmp_1 = tmp;
      tmp_0 = tmp_1 == null ? null : tmp_1.value_1;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function SavedStateReader__getCharSequence_impl_xxuzx($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? isCharSequence(tmp) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getCharSequenceOrNull_impl_wrcfgj($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? isCharSequence(tmp) : false) ? tmp : null;
  }
  function SavedStateReader__getDouble_impl_8hpdd9($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getDoubleOrNull_impl_y401bd($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : null;
  }
  function SavedStateReader__getFloat_impl_sur8uy($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getFloatOrNull_impl_e75lao($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : null;
  }
  function SavedStateReader__getInt_impl_59ulzt($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getIntOrNull_impl_5tffel($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : null;
  }
  function SavedStateReader__getLong_impl_1qg7aw($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = tmp instanceof Long ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getLongOrNull_impl_572uam($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return tmp instanceof Long ? tmp : null;
  }
  function SavedStateReader__getString_impl_6prgh9($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getStringOrNull_impl_o8k42f($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : null;
  }
  function SavedStateReader__getCharSequenceList_impl_7zppv3($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, KtList) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getCharSequenceListOrNull_impl_l2tkjf($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? isInterface(tmp, KtList) : false) ? tmp : null;
  }
  function SavedStateReader__getIntList_impl_lhnb55($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, KtList) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getIntListOrNull_impl_favpa9($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? isInterface(tmp, KtList) : false) ? tmp : null;
  }
  function SavedStateReader__getSavedStateList_impl_pn8wxw($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, KtList) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getSavedStateListOrNull_impl_mjjriq($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? isInterface(tmp, KtList) : false) ? tmp : null;
  }
  function SavedStateReader__getStringList_impl_iwbmej($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, KtList) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getStringListOrNull_impl_jl1c0l($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? isInterface(tmp, KtList) : false) ? tmp : null;
  }
  function SavedStateReader__getCharArray_impl_nb2ggd($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? isCharArray(tmp) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getCharArrayOrNull_impl_i0oy7r($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? isCharArray(tmp) : false) ? tmp : null;
  }
  function SavedStateReader__getCharSequenceArray_impl_pys2c4($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? isArray(tmp) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getCharSequenceArrayOrNull_impl_tc8yay($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? isArray(tmp) : false) ? tmp : null;
  }
  function SavedStateReader__getBooleanArray_impl_pc3s6l($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? isBooleanArray(tmp) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getBooleanArrayOrNull_impl_uwaaxj($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? isBooleanArray(tmp) : false) ? tmp : null;
  }
  function SavedStateReader__getDoubleArray_impl_v9u6oi($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? isDoubleArray(tmp) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getDoubleArrayOrNull_impl_9thgjg($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? isDoubleArray(tmp) : false) ? tmp : null;
  }
  function SavedStateReader__getFloatArray_impl_jv9sw7($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? isFloatArray(tmp) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getFloatArrayOrNull_impl_piupel($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? isFloatArray(tmp) : false) ? tmp : null;
  }
  function SavedStateReader__getIntArray_impl_i81256($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? isIntArray(tmp) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getIntArrayOrNull_impl_4oxaq8($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? isIntArray(tmp) : false) ? tmp : null;
  }
  function SavedStateReader__getLongArray_impl_91cwk9($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? isLongArray(tmp) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getLongArrayOrNull_impl_232din($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? isLongArray(tmp) : false) ? tmp : null;
  }
  function SavedStateReader__getSavedStateArray_impl_mdgsyh($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? isArray(tmp) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getSavedStateArrayOrNull_impl_w0lam5($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? isArray(tmp) : false) ? tmp : null;
  }
  function SavedStateReader__getStringArray_impl_qa4w7m($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = (!(tmp == null) ? isArray(tmp) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getStringArrayOrNull_impl_4mg8jo($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return (!(tmp == null) ? isArray(tmp) : false) ? tmp : null;
  }
  function SavedStateReader__getSavedState_impl_l38yfa($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    var tmp0_elvis_lhs = tmp instanceof SavedState ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__getSavedStateOrNull_impl_pv2mts($this, key) {
    var tmp = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key);
    return tmp instanceof SavedState ? tmp : null;
  }
  function SavedStateReader__size_impl_78y4db($this) {
    return _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_size_woubt6_k$();
  }
  function SavedStateReader__isEmpty_impl_ep4h1z($this) {
    return _get_source__4cuw5s($this).get_map_r7xsq1_k$().isEmpty_y1axqb_k$();
  }
  function SavedStateReader__isNull_impl_c8lka9($this, key) {
    return SavedStateReader__contains_impl_ig4u69($this, key) && _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key) == null;
  }
  function SavedStateReader__contains_impl_ig4u69($this, key) {
    return _get_source__4cuw5s($this).get_map_r7xsq1_k$().containsKey_aw81wo_k$(key);
  }
  function SavedStateReader__contentDeepEquals_impl_brq40m($this, other) {
    return contentDeepEquals_0(_get_source__4cuw5s($this), other);
  }
  function SavedStateReader__contentDeepHashCode_impl_20j0fu($this) {
    return contentDeepHashCode_0(_get_source__4cuw5s($this));
  }
  function SavedStateReader__contentDeepToString_impl_nrox8p($this) {
    var length = imul(coerceAtMost(_get_source__4cuw5s($this).get_map_r7xsq1_k$().get_size_woubt6_k$(), 429496729), 5) + 2 | 0;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(length);
    var tmp = _get_source__4cuw5s($this);
    // Inline function 'kotlin.collections.mutableListOf' call
    var tmp$ret$0 = ArrayList_init_$Create$();
    contentDeepToString_0(tmp, this_0, tmp$ret$0);
    return this_0.toString();
  }
  function SavedStateReader__toMap_impl_49zebr($this) {
    // Inline function 'kotlin.collections.buildMap' call
    // Inline function 'kotlin.collections.buildMapInternal' call
    var capacity = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_size_woubt6_k$();
    // Inline function 'kotlin.apply' call
    var this_0 = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_keys_wop4xp_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var key = _iterator__ex2g4s.next_20eer_k$();
      this_0.put_4fpzoq_k$(key, _get_source__4cuw5s($this).get_map_r7xsq1_k$().get_wei43m_k$(key));
    }
    return this_0.build_nmwvly_k$();
  }
  function SavedStateReader__toString_impl_bewa6s($this) {
    return 'SavedStateReader(source=' + toString($this) + ')';
  }
  function SavedStateReader__hashCode_impl_ac9mm3($this) {
    return hashCode($this);
  }
  function SavedStateReader__equals_impl_7ww9nl($this, other) {
    if (!(other instanceof SavedStateReader))
      return false;
    var tmp0_other_with_cast = other instanceof SavedStateReader ? other.source_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SavedStateReader(source) {
    this.source_1 = source;
  }
  protoOf(SavedStateReader).toString = function () {
    return SavedStateReader__toString_impl_bewa6s(this.source_1);
  };
  protoOf(SavedStateReader).hashCode = function () {
    return SavedStateReader__hashCode_impl_ac9mm3(this.source_1);
  };
  protoOf(SavedStateReader).equals = function (other) {
    return SavedStateReader__equals_impl_7ww9nl(this.source_1, other);
  };
  function contentDeepEquals_0(_this__u8e3s4, other) {
    if (_this__u8e3s4 === other)
      return true;
    if (!(_this__u8e3s4.get_map_r7xsq1_k$().get_size_woubt6_k$() === other.get_map_r7xsq1_k$().get_size_woubt6_k$()))
      return false;
    var _iterator__ex2g4s = _this__u8e3s4.get_map_r7xsq1_k$().get_keys_wop4xp_k$().iterator_jk1svi_k$();
    $l$loop_0: while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var k = _iterator__ex2g4s.next_20eer_k$();
      var v1 = _this__u8e3s4.get_map_r7xsq1_k$().get_wei43m_k$(k);
      var v2 = other.get_map_r7xsq1_k$().get_wei43m_k$(k);
      if (v1 === v2)
        continue $l$loop_0;
      else {
        if (equals(v1, v2))
          continue $l$loop_0;
        else {
          if (v1 == null || v2 == null)
            return false;
          else {
            var tmp;
            if (v1 instanceof SavedState) {
              tmp = v2 instanceof SavedState;
            } else {
              tmp = false;
            }
            if (tmp) {
              if (!contentDeepEquals_0(v1, v2))
                return false;
            } else {
              var tmp_0;
              if (!(v1 == null) ? isArray(v1) : false) {
                tmp_0 = !(v2 == null) ? isArray(v2) : false;
              } else {
                tmp_0 = false;
              }
              if (tmp_0) {
                if (!contentDeepEquals(v1, v2))
                  return false;
              } else {
                var tmp_1;
                if (!(v1 == null) ? isByteArray(v1) : false) {
                  tmp_1 = !(v2 == null) ? isByteArray(v2) : false;
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  if (!contentEquals_6(v1, v2))
                    return false;
                } else {
                  var tmp_2;
                  if (!(v1 == null) ? isShortArray(v1) : false) {
                    tmp_2 = !(v2 == null) ? isShortArray(v2) : false;
                  } else {
                    tmp_2 = false;
                  }
                  if (tmp_2) {
                    if (!contentEquals_5(v1, v2))
                      return false;
                  } else {
                    var tmp_3;
                    if (!(v1 == null) ? isIntArray(v1) : false) {
                      tmp_3 = !(v2 == null) ? isIntArray(v2) : false;
                    } else {
                      tmp_3 = false;
                    }
                    if (tmp_3) {
                      if (!contentEquals_4(v1, v2))
                        return false;
                    } else {
                      var tmp_4;
                      if (!(v1 == null) ? isLongArray(v1) : false) {
                        tmp_4 = !(v2 == null) ? isLongArray(v2) : false;
                      } else {
                        tmp_4 = false;
                      }
                      if (tmp_4) {
                        if (!contentEquals_3(v1, v2))
                          return false;
                      } else {
                        var tmp_5;
                        if (!(v1 == null) ? isFloatArray(v1) : false) {
                          tmp_5 = !(v2 == null) ? isFloatArray(v2) : false;
                        } else {
                          tmp_5 = false;
                        }
                        if (tmp_5) {
                          if (!contentEquals_2(v1, v2))
                            return false;
                        } else {
                          var tmp_6;
                          if (!(v1 == null) ? isDoubleArray(v1) : false) {
                            tmp_6 = !(v2 == null) ? isDoubleArray(v2) : false;
                          } else {
                            tmp_6 = false;
                          }
                          if (tmp_6) {
                            if (!contentEquals_1(v1, v2))
                              return false;
                          } else {
                            var tmp_7;
                            if (!(v1 == null) ? isCharArray(v1) : false) {
                              tmp_7 = !(v2 == null) ? isCharArray(v2) : false;
                            } else {
                              tmp_7 = false;
                            }
                            if (tmp_7) {
                              if (!contentEquals_0(v1, v2))
                                return false;
                            } else {
                              var tmp_8;
                              if (!(v1 == null) ? isBooleanArray(v1) : false) {
                                tmp_8 = !(v2 == null) ? isBooleanArray(v2) : false;
                              } else {
                                tmp_8 = false;
                              }
                              if (tmp_8) {
                                if (!contentEquals(v1, v2))
                                  return false;
                              } else {
                                if (!equals(v1, v2))
                                  return false;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return true;
  }
  function contentDeepHashCode_0(_this__u8e3s4) {
    var result = 1;
    var _iterator__ex2g4s = _this__u8e3s4.get_map_r7xsq1_k$().get_keys_wop4xp_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var k = _iterator__ex2g4s.next_20eer_k$();
      var element = _this__u8e3s4.get_map_r7xsq1_k$().get_wei43m_k$(k);
      var tmp;
      if (element instanceof SavedState) {
        tmp = contentDeepHashCode_0(element);
      } else {
        if (!(element == null) ? isArray(element) : false) {
          tmp = contentDeepHashCode(element);
        } else {
          if (!(element == null) ? isByteArray(element) : false) {
            tmp = contentHashCode_6(element);
          } else {
            if (!(element == null) ? isShortArray(element) : false) {
              tmp = contentHashCode_5(element);
            } else {
              if (!(element == null) ? isIntArray(element) : false) {
                tmp = contentHashCode_4(element);
              } else {
                if (!(element == null) ? isLongArray(element) : false) {
                  tmp = contentHashCode_3(element);
                } else {
                  if (!(element == null) ? isFloatArray(element) : false) {
                    tmp = contentHashCode_2(element);
                  } else {
                    if (!(element == null) ? isDoubleArray(element) : false) {
                      tmp = contentHashCode_1(element);
                    } else {
                      if (!(element == null) ? isCharArray(element) : false) {
                        tmp = contentHashCode_0(element);
                      } else {
                        if (!(element == null) ? isBooleanArray(element) : false) {
                          tmp = contentHashCode(element);
                        } else {
                          // Inline function 'kotlin.hashCode' call
                          var tmp1_elvis_lhs = element == null ? null : hashCode(element);
                          tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      var elementHash = tmp;
      result = imul(31, result) + elementHash | 0;
    }
    return result;
  }
  function contentDeepToString_0(_this__u8e3s4, result, processed) {
    if (processed.contains_aljjnj_k$(_this__u8e3s4)) {
      result.append_22ad7x_k$('[...]');
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.plusAssign' call
    processed.add_utx5q5_k$(_this__u8e3s4);
    result.append_am5a4z_k$(_Char___init__impl__6a9atx(91));
    var iterator = _this__u8e3s4.get_map_r7xsq1_k$().get_keys_wop4xp_k$().iterator_jk1svi_k$();
    var index = 0;
    while (iterator.hasNext_bitz1p_k$()) {
      var i = index;
      index = index + 1 | 0;
      var k = iterator.next_20eer_k$();
      if (!(i === 0)) {
        result.append_22ad7x_k$(', ');
      }
      result.append_22ad7x_k$(k + '=');
      var element = _this__u8e3s4.get_map_r7xsq1_k$().get_wei43m_k$(k);
      if (element == null)
        result.append_22ad7x_k$('null');
      else {
        if (element instanceof SavedState) {
          contentDeepToString_0(element, result, processed);
        } else {
          if (!(element == null) ? isArray(element) : false)
            result.append_22ad7x_k$(contentDeepToString(element));
          else {
            if (!(element == null) ? isByteArray(element) : false)
              result.append_22ad7x_k$(contentToString_6(element));
            else {
              if (!(element == null) ? isShortArray(element) : false)
                result.append_22ad7x_k$(contentToString_5(element));
              else {
                if (!(element == null) ? isIntArray(element) : false)
                  result.append_22ad7x_k$(contentToString_4(element));
                else {
                  if (!(element == null) ? isLongArray(element) : false)
                    result.append_22ad7x_k$(contentToString_3(element));
                  else {
                    if (!(element == null) ? isFloatArray(element) : false)
                      result.append_22ad7x_k$(contentToString_2(element));
                    else {
                      if (!(element == null) ? isDoubleArray(element) : false)
                        result.append_22ad7x_k$(contentToString_1(element));
                      else {
                        if (!(element == null) ? isCharArray(element) : false)
                          result.append_22ad7x_k$(contentToString_0(element));
                        else {
                          if (!(element == null) ? isBooleanArray(element) : false)
                            result.append_22ad7x_k$(contentToString(element));
                          else {
                            result.append_22ad7x_k$(toString(element));
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    result.append_am5a4z_k$(_Char___init__impl__6a9atx(93));
    processed.removeAt_6niowx_k$(get_lastIndex(processed));
  }
  function _get_impl__d88w17($this) {
    return $this.impl_1;
  }
  function SavedStateProvider() {
  }
  function SavedStateRegistry(impl) {
    this.impl_1 = impl;
  }
  protoOf(SavedStateRegistry).get_isRestored_w65dux_k$ = function () {
    return this.impl_1.get_isRestored_w65dux_k$();
  };
  protoOf(SavedStateRegistry).consumeRestoredStateForKey_hbgcbf_k$ = function (key) {
    return this.impl_1.consumeRestoredStateForKey_hbgcbf_k$(key);
  };
  protoOf(SavedStateRegistry).registerSavedStateProvider_k3a9pp_k$ = function (key, provider) {
    this.impl_1.registerSavedStateProvider_k3a9pp_k$(key, provider);
  };
  protoOf(SavedStateRegistry).getSavedStateProvider_j42zqv_k$ = function (key) {
    return this.impl_1.getSavedStateProvider_j42zqv_k$(key);
  };
  protoOf(SavedStateRegistry).unregisterSavedStateProvider_j6i07n_k$ = function (key) {
    this.impl_1.unregisterSavedStateProvider_j6i07n_k$(key);
  };
  function _get_impl__d88w17_0($this) {
    return $this.impl_1;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).create_vgrzy2_k$ = function (owner) {
    return new SavedStateRegistryController(new SavedStateRegistryImpl(owner));
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function SavedStateRegistryController(impl) {
    Companion_getInstance_1();
    this.impl_1 = impl;
    this.savedStateRegistry_1 = new SavedStateRegistry(this.impl_1);
  }
  protoOf(SavedStateRegistryController).get_savedStateRegistry_c47b5c_k$ = function () {
    return this.savedStateRegistry_1;
  };
  protoOf(SavedStateRegistryController).performAttach_s69gp6_k$ = function () {
    this.impl_1.performAttach_s69gp6_k$();
  };
  protoOf(SavedStateRegistryController).performRestore_j2zq6p_k$ = function (savedState) {
    this.impl_1.performRestore_jm3wvp_k$(savedState);
  };
  protoOf(SavedStateRegistryController).performSave_1ekz61_k$ = function (outBundle) {
    this.impl_1.performSave_wqsc8d_k$(outBundle);
  };
  function _SavedStateWriter___init__impl__99cr38(source) {
    return source;
  }
  function _get_source__4cuw5s_0($this) {
    return $this;
  }
  function SavedStateWriter__putBoolean_impl_y3jg5z($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putChar_impl_2pt3lx($this, key, value) {
    var tmp0 = _get_source__4cuw5s_0($this).get_map_r7xsq1_k$();
    // Inline function 'kotlin.collections.set' call
    var value_0 = new Char(value);
    tmp0.put_4fpzoq_k$(key, value_0);
  }
  function SavedStateWriter__putCharSequence_impl_3ydqrg($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putDouble_impl_68ez56($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putFloat_impl_gha59($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putInt_impl_39pq28($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putLong_impl_l0e1gh($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putNull_impl_5vjr4c($this, key) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, null);
  }
  function SavedStateWriter__putString_impl_80cw16($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putCharSequenceList_impl_4op3y2($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putIntList_impl_j8eatq($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putSavedStateList_impl_qliw0j($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putStringList_impl_3r0vo4($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putBooleanArray_impl_u8fdxy($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putCharArray_impl_kiznno($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putCharSequenceArray_impl_bwfbvn($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putDoubleArray_impl_c3qi7r($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putFloatArray_impl_z0kjmm($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putIntArray_impl_yco4oh($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putLongArray_impl_btfpcy($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putSavedStateArray_impl_yhzx80($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putStringArray_impl_h3fson($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putSavedState_impl_5xy7ov($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().put_4fpzoq_k$(key, value);
  }
  function SavedStateWriter__putAll_impl_no0lvi($this, from) {
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().putAll_wgg6cj_k$(from.get_map_r7xsq1_k$());
  }
  function SavedStateWriter__remove_impl_9y9m5w($this, key) {
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().remove_gppy8k_k$(key);
  }
  function SavedStateWriter__clear_impl_nmslfh($this) {
    _get_source__4cuw5s_0($this).get_map_r7xsq1_k$().clear_j9egeb_k$();
  }
  function SavedStateWriter__toString_impl_8dthr0($this) {
    return 'SavedStateWriter(source=' + toString($this) + ')';
  }
  function SavedStateWriter__hashCode_impl_u4zejv($this) {
    return hashCode($this);
  }
  function SavedStateWriter__equals_impl_j8e2mn($this, other) {
    if (!(other instanceof SavedStateWriter))
      return false;
    var tmp0_other_with_cast = other instanceof SavedStateWriter ? other.source_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SavedStateWriter(source) {
    this.source_1 = source;
  }
  protoOf(SavedStateWriter).toString = function () {
    return SavedStateWriter__toString_impl_8dthr0(this.source_1);
  };
  protoOf(SavedStateWriter).hashCode = function () {
    return SavedStateWriter__hashCode_impl_u4zejv(this.source_1);
  };
  protoOf(SavedStateWriter).equals = function (other) {
    return SavedStateWriter__equals_impl_j8e2mn(this.source_1, other);
  };
  function getDefaultSerializersModuleOnPlatform() {
    return EmptySerializersModule();
  }
  function decodeFormatSpecificTypesOnPlatform(_this__u8e3s4, strategy) {
    return null;
  }
  function encodeFormatSpecificTypesOnPlatform(_this__u8e3s4, strategy, value) {
    return false;
  }
  function SynchronizedObject() {
  }
  function synchronizedImpl(lock, action) {
    return action();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SavedStateRegistryOwner;
  _.$_$.b = SavedState;
  _.$_$.c = _SavedStateReader___init__impl__k2stzo;
  _.$_$.d = SavedStateReader__isEmpty_impl_ep4h1z;
  _.$_$.e = _SavedStateWriter___init__impl__99cr38;
  _.$_$.f = Companion_getInstance_1;
  //endregion
  return _;
}));
