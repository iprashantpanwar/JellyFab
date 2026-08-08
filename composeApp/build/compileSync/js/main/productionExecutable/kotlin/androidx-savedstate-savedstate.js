(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-lifecycle-lifecycle-common.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-lifecycle-lifecycle-common.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-savedstate-savedstate'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-savedstate-savedstate'.");
    }
    if (typeof globalThis['androidx-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'androidx-savedstate-savedstate'. Its dependency 'androidx-lifecycle-lifecycle-common' was not found. Please, check whether 'androidx-lifecycle-lifecycle-common' is loaded prior to 'androidx-savedstate-savedstate'.");
    }
    globalThis['androidx-savedstate-savedstate'] = factory(typeof globalThis['androidx-savedstate-savedstate'] === 'undefined' ? {} : globalThis['androidx-savedstate-savedstate'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-lifecycle-lifecycle-common']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_lifecycle_lifecycle_common) {
  'use strict';
  //region block: imports
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var protoOf = kotlin_kotlin.$_$.z9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i9;
  var equals = kotlin_kotlin.$_$.z8;
  var FunctionAdapter = kotlin_kotlin.$_$.m8;
  var isInterface = kotlin_kotlin.$_$.q9;
  var LifecycleEventObserver = kotlin_androidx_lifecycle_lifecycle_common.$_$.a;
  var hashCode = kotlin_kotlin.$_$.g9;
  var initMetadataForClass = kotlin_kotlin.$_$.h9;
  var VOID = kotlin_kotlin.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.b3;
  var Event_ON_STOP_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.f;
  var Event_ON_START_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.e;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var State_INITIALIZED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.i;
  var toString = kotlin_kotlin.$_$.ba;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var State_STARTED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.k;
  var emptyMap = kotlin_kotlin.$_$.q4;
  var toMutableMap = kotlin_kotlin.$_$.t6;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(sam$androidx_lifecycle_LifecycleEventObserver$0, 'sam$androidx_lifecycle_LifecycleEventObserver$0', VOID, VOID, [LifecycleEventObserver, FunctionAdapter]);
  initMetadataForClass(SavedStateRegistryImpl, 'SavedStateRegistryImpl');
  initMetadataForClass(SavedState, 'SavedState');
  initMetadataForClass(SavedStateRegistry, 'SavedStateRegistry');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(SavedStateRegistryController, 'SavedStateRegistryController');
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  //endregion
  function keyOrValueNotFoundError(key) {
    throw IllegalArgumentException_init_$Create$("No valid saved state was found for the key '" + key + "'. It may be missing, null, or not of " + 'the expected type. This can occur if the value was saved with a different type or if the saved state was modified unexpectedly.');
  }
  function Companion() {
    this.x5d_1 = 'androidx.lifecycle.BundlableSavedStateRegistry.key';
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function sam$androidx_lifecycle_LifecycleEventObserver$0(function_0) {
    this.y5d_1 = function_0;
  }
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).j5d = function (source, event) {
    return this.y5d_1(source, event);
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).v2 = function () {
    return this.y5d_1;
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, LifecycleEventObserver) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.v2(), other.v2());
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
    return hashCode(this.v2());
  };
  function SavedStateRegistryImpl$_init_$lambda_jhqb6s() {
    return Unit_instance;
  }
  function SavedStateRegistryImpl$performAttach$lambda(this$0) {
    return function (_unused_var__etf5q3, event) {
      var tmp;
      if (event.equals(Event_ON_START_getInstance())) {
        this$0.g5e_1 = true;
        tmp = Unit_instance;
      } else if (event.equals(Event_ON_STOP_getInstance())) {
        this$0.g5e_1 = false;
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SavedStateRegistryImpl(owner, onAttach) {
    var tmp;
    if (onAttach === VOID) {
      tmp = SavedStateRegistryImpl$_init_$lambda_jhqb6s;
    } else {
      tmp = onAttach;
    }
    onAttach = tmp;
    this.z5d_1 = owner;
    this.a5e_1 = onAttach;
    this.b5e_1 = new SynchronizedObject();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.c5e_1 = LinkedHashMap_init_$Create$();
    this.d5e_1 = false;
    this.e5e_1 = null;
    this.f5e_1 = false;
    this.g5e_1 = true;
  }
  protoOf(SavedStateRegistryImpl).h5e = function () {
    // Inline function 'kotlin.check' call
    if (!this.z5d_1.i5e().u5d().equals(State_INITIALIZED_getInstance())) {
      var message = "Restarter must be created only during owner's initialization stage";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!!this.d5e_1) {
      var message_0 = 'SavedStateRegistry was already attached.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    this.a5e_1();
    var tmp = this.z5d_1.i5e();
    var tmp_0 = SavedStateRegistryImpl$performAttach$lambda(this);
    tmp.t5d(new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp_0));
    this.d5e_1 = true;
  };
  protoOf(SavedStateRegistryImpl).j5e = function (savedState) {
    if (!this.d5e_1) {
      this.h5e();
    }
    // Inline function 'kotlin.check' call
    if (!!this.z5d_1.i5e().u5d().r5d(State_STARTED_getInstance())) {
      var message = 'performRestore cannot be called when owner is ' + this.z5d_1.i5e().u5d().toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!!this.f5e_1) {
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
    tmp.e5e_1 = tmp_0;
    this.f5e_1 = true;
  };
  protoOf(SavedStateRegistryImpl).k5e = function (outBundle) {
    // Inline function 'androidx.savedstate.savedState' call
    var initialState = emptyMap();
    var copiedState = toMutableMap(initialState);
    // Inline function 'kotlin.apply' call
    var this_0 = new SavedState(copiedState);
    // Inline function 'androidx.savedstate.write' call
    var $this$savedState = _SavedStateWriter___init__impl__99cr38(this_0);
    var tmp0_safe_receiver = this.e5e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      SavedStateWriter__putAll_impl_no0lvi($this$savedState, tmp0_safe_receiver);
    }
    // Inline function 'androidx.savedstate.internal.synchronized' call
    // Inline function 'androidx.savedstate.internal.synchronizedImpl' call
    this.b5e_1;
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.c5e_1.a2().i();
    while (_iterator__ex2g4s.j()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.k();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.u1();
      // Inline function 'kotlin.collections.component2' call
      var provider = _destruct__k2r9zo.v1();
      SavedStateWriter__putSavedState_impl_5xy7ov($this$savedState, key, provider.l5e());
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
  function SavedState(map) {
    var tmp;
    if (map === VOID) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    } else {
      tmp = map;
    }
    map = tmp;
    this.m5e_1 = map;
  }
  function _SavedStateReader___init__impl__k2stzo(source) {
    return source;
  }
  function _get_source__4cuw5s($this) {
    return $this;
  }
  function SavedStateReader__getSavedState_impl_l38yfa($this, key) {
    var tmp = _get_source__4cuw5s($this).m5e_1.y1(key);
    var tmp0_elvis_lhs = tmp instanceof SavedState ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__isEmpty_impl_ep4h1z($this) {
    return _get_source__4cuw5s($this).m5e_1.n();
  }
  function SavedStateReader__contains_impl_ig4u69($this, key) {
    return _get_source__4cuw5s($this).m5e_1.w1(key);
  }
  function SavedStateRegistry(impl) {
    this.n5e_1 = impl;
  }
  function Companion_0() {
  }
  protoOf(Companion_0).o5e = function (owner) {
    return new SavedStateRegistryController(new SavedStateRegistryImpl(owner));
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function SavedStateRegistryController(impl) {
    this.p5e_1 = impl;
    this.q5e_1 = new SavedStateRegistry(this.p5e_1);
  }
  protoOf(SavedStateRegistryController).r5e = function (savedState) {
    this.p5e_1.j5e(savedState);
  };
  protoOf(SavedStateRegistryController).s5e = function (outBundle) {
    this.p5e_1.k5e(outBundle);
  };
  function _SavedStateWriter___init__impl__99cr38(source) {
    return source;
  }
  function _get_source__4cuw5s_0($this) {
    return $this;
  }
  function SavedStateWriter__putSavedState_impl_5xy7ov($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).m5e_1.b2(key, value);
  }
  function SavedStateWriter__putAll_impl_no0lvi($this, from) {
    _get_source__4cuw5s_0($this).m5e_1.d2(from.m5e_1);
  }
  function SynchronizedObject() {
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SavedState;
  _.$_$.b = _SavedStateReader___init__impl__k2stzo;
  _.$_$.c = SavedStateReader__isEmpty_impl_ep4h1z;
  _.$_$.d = _SavedStateWriter___init__impl__99cr38;
  _.$_$.e = Companion_instance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-savedstate-savedstate.js.map
