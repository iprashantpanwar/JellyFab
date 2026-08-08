(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-lifecycle-lifecycle-common.js', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-lifecycle-lifecycle-common.js'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['androidx-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-runtime'. Its dependency 'androidx-lifecycle-lifecycle-common' was not found. Please, check whether 'androidx-lifecycle-lifecycle-common' is loaded prior to 'androidx-lifecycle-lifecycle-runtime'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-lifecycle-lifecycle-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'androidx-lifecycle-lifecycle-runtime'.");
    }
    globalThis['androidx-lifecycle-lifecycle-runtime'] = factory(typeof globalThis['androidx-lifecycle-lifecycle-runtime'] === 'undefined' ? {} : globalThis['androidx-lifecycle-lifecycle-runtime'], globalThis['androidx-lifecycle-lifecycle-common'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_androidx_lifecycle_lifecycle_common, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var State_CREATED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.g;
  var toString = kotlin_kotlin.$_$.oe;
  var toString_0 = kotlin_kotlin.$_$.ba;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var State_INITIALIZED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.i;
  var State_DESTROYED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.h;
  var protoOf = kotlin_kotlin.$_$.z9;
  var objectCreate = kotlin_kotlin.$_$.y9;
  var Unit_instance = kotlin_kotlin.$_$.b3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var first = kotlin_kotlin.$_$.z4;
  var last = kotlin_kotlin.$_$.s5;
  var toList = kotlin_kotlin.$_$.q6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.r;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var THROW_CCE = kotlin_kotlin.$_$.md;
  var KtMap = kotlin_kotlin.$_$.m3;
  var isInterface = kotlin_kotlin.$_$.q9;
  var Companion_instance = kotlin_androidx_lifecycle_lifecycle_common.$_$.l;
  var reversed = kotlin_kotlin.$_$.g6;
  var lastOrNull = kotlin_kotlin.$_$.o5;
  var Lifecycling_instance = kotlin_androidx_lifecycle_lifecycle_common.$_$.m;
  var ensureNotNull = kotlin_kotlin.$_$.wd;
  var initMetadataForClass = kotlin_kotlin.$_$.h9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i9;
  var Lifecycle = kotlin_androidx_lifecycle_lifecycle_common.$_$.b;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var VOID = kotlin_kotlin.$_$.b;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ObserverWithState, 'ObserverWithState');
  initMetadataForCompanion(Companion);
  initMetadataForClass(LifecycleRegistry, 'LifecycleRegistry', VOID, Lifecycle);
  initMetadataForClass(WeakReference, 'WeakReference');
  //endregion
  function checkLifecycleStateTransition(owner, current, next) {
    if (current.equals(State_INITIALIZED_getInstance()) && next.equals(State_DESTROYED_getInstance())) {
      // Inline function 'kotlin.error' call
      var message = "State must be at least '" + State_CREATED_getInstance().toString() + "' to be moved to '" + next.toString() + "' in component " + toString(owner);
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    if (current.equals(State_DESTROYED_getInstance()) && !current.equals(next)) {
      // Inline function 'kotlin.error' call
      var message_0 = "State is '" + State_DESTROYED_getInstance().toString() + "' and cannot be moved to `" + next.toString() + '` in component ' + toString(owner);
      throw IllegalStateException_init_$Create$(toString_0(message_0));
    }
  }
  function LifecycleRegistry_init_$Init$(provider, $this) {
    LifecycleRegistry.call($this, provider, true);
    return $this;
  }
  function LifecycleRegistry_init_$Create$(provider) {
    return LifecycleRegistry_init_$Init$(provider, objectCreate(protoOf(LifecycleRegistry)));
  }
  function moveToState($this, next) {
    if ($this.w5e_1.equals(next)) {
      return Unit_instance;
    }
    checkLifecycleStateTransition($this.x5e_1.j13(), $this.w5e_1, next);
    $this.w5e_1 = next;
    if ($this.z5e_1 || !($this.y5e_1 === 0)) {
      $this.a5f_1 = true;
      return Unit_instance;
    }
    $this.z5e_1 = true;
    sync($this);
    $this.z5e_1 = false;
    if ($this.w5e_1.equals(State_DESTROYED_getInstance())) {
      var tmp = $this;
      // Inline function 'kotlin.collections.linkedMapOf' call
      tmp.v5e_1 = LinkedHashMap_init_$Create$();
    }
  }
  function _get_isSynced__dwdj3t($this) {
    if ($this.v5e_1.n()) {
      return true;
    }
    var eldestObserverState = first($this.v5e_1.f2()).e5f_1;
    var newestObserverState = last($this.v5e_1.f2()).e5f_1;
    return eldestObserverState.equals(newestObserverState) && $this.w5e_1.equals(newestObserverState);
  }
  function calculateTargetState($this, observer) {
    // Inline function 'kotlin.let' call
    var it = toList($this.v5e_1.z1());
    var index = it.u(observer);
    var tmp;
    if (index > 0) {
      var tmp0_safe_receiver = $this.v5e_1.y1(it.m(index - 1 | 0));
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e5f_1;
    } else {
      tmp = null;
    }
    var siblingState = tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.b5f_1.n()) {
      tmp_0 = $this.b5f_1.m($this.b5f_1.l() - 1 | 0);
    } else {
      tmp_0 = null;
    }
    var parentState = tmp_0;
    return Companion_instance_0.g5f(Companion_instance_0.g5f($this.w5e_1, siblingState), parentState);
  }
  function popParentState($this) {
    $this.b5f_1.k2($this.b5f_1.l() - 1 | 0);
  }
  function pushParentState($this, state) {
    $this.b5f_1.h(state);
  }
  function forwardPass($this, lifecycleOwner) {
    // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverWithAdditions' call
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    $l$loop: while (!$this.a5f_1) {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = $this.v5e_1.z1();
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (!visited.t(element)) {
          destination.h(element);
        }
      }
      var keys = destination;
      if (keys.n()) {
        break $l$loop;
      }
      var _iterator__ex2g4s_0 = keys.i();
      $l$loop_1: while (_iterator__ex2g4s_0.j()) {
        var key = _iterator__ex2g4s_0.k();
        if ($this.a5f_1) {
          break $l$loop_1;
        }
        var tmp0_elvis_lhs = $this.v5e_1.y1(key);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var value = tmp;
        $l$loop_2: while (true) {
          var tmp_0;
          if (value.e5f_1.n2($this.w5e_1) < 0 && !$this.a5f_1) {
            // Inline function 'kotlin.collections.contains' call
            // Inline function 'kotlin.collections.containsKey' call
            var this_0 = $this.v5e_1;
            tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).w1(key);
          } else {
            tmp_0 = false;
          }
          if (!tmp_0) {
            break $l$loop_2;
          }
          pushParentState($this, value.e5f_1);
          var tmp0_elvis_lhs_0 = Companion_instance.l5d(value.e5f_1);
          var tmp_1;
          if (tmp0_elvis_lhs_0 == null) {
            throw IllegalStateException_init_$Create$('no event up from ' + value.e5f_1.toString());
          } else {
            tmp_1 = tmp0_elvis_lhs_0;
          }
          var event = tmp_1;
          value.h5f(lifecycleOwner, event);
          popParentState($this);
        }
        visited.h(key);
      }
    }
  }
  function backwardPass($this, lifecycleOwner) {
    // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverReversed' call
    var keys = reversed($this.v5e_1.z1());
    var _iterator__ex2g4s = keys.i();
    $l$loop_0: while (_iterator__ex2g4s.j()) {
      var key = _iterator__ex2g4s.k();
      if ($this.a5f_1) {
        break $l$loop_0;
      }
      var tmp0_elvis_lhs = $this.v5e_1.y1(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      $l$loop_1: while (true) {
        var tmp_0;
        if (value.e5f_1.n2($this.w5e_1) > 0 && !$this.a5f_1) {
          // Inline function 'kotlin.collections.contains' call
          // Inline function 'kotlin.collections.containsKey' call
          var this_0 = $this.v5e_1;
          tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).w1(key);
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          break $l$loop_1;
        }
        var tmp0_elvis_lhs_0 = Companion_instance.k5d(value.e5f_1);
        var tmp_1;
        if (tmp0_elvis_lhs_0 == null) {
          throw IllegalStateException_init_$Create$('no event down from ' + value.e5f_1.toString());
        } else {
          tmp_1 = tmp0_elvis_lhs_0;
        }
        var event = tmp_1;
        pushParentState($this, event.o5d());
        value.h5f(lifecycleOwner, event);
        popParentState($this);
      }
    }
  }
  function sync($this) {
    var tmp0_elvis_lhs = $this.x5e_1.j13();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('LifecycleOwner of this LifecycleRegistry is already garbage collected. It is too late to change lifecycle state.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lifecycleOwner = tmp;
    while (!_get_isSynced__dwdj3t($this)) {
      $this.a5f_1 = false;
      if ($this.w5e_1.n2(first($this.v5e_1.f2()).e5f_1) < 0) {
        backwardPass($this, lifecycleOwner);
      }
      var newest = lastOrNull($this.v5e_1.f2());
      if (!$this.a5f_1 && !(newest == null) && $this.w5e_1.n2(newest.e5f_1) > 0) {
        forwardPass($this, lifecycleOwner);
      }
    }
    $this.a5f_1 = false;
    $this.c5f_1.t1k($this.u5d());
  }
  function enforceMainThreadIfNeeded($this, methodName) {
    if ($this.u5e_1) {
      // Inline function 'kotlin.check' call
      if (!isMainThread()) {
        var message = 'Method ' + methodName + ' must be called on the main thread';
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
    }
  }
  function ObserverWithState(observer, initialState) {
    this.f5f_1 = Lifecycling_instance.w5d(ensureNotNull(observer));
    this.e5f_1 = initialState;
  }
  protoOf(ObserverWithState).h5f = function (owner, event) {
    var newState = event.o5d();
    this.e5f_1 = Companion_instance_0.g5f(this.e5f_1, newState);
    this.f5f_1.j5d(ensureNotNull(owner), event);
    this.e5f_1 = newState;
  };
  function Companion() {
  }
  protoOf(Companion).i5f = function (owner) {
    return new LifecycleRegistry(owner, false);
  };
  protoOf(Companion).g5f = function (state1, state2) {
    return !(state2 == null) && state2.n2(state1) < 0 ? state2 : state1;
  };
  var Companion_instance_0;
  function Companion_getInstance() {
    return Companion_instance_0;
  }
  function LifecycleRegistry(provider, enforceMainThread) {
    Lifecycle.call(this);
    this.u5e_1 = enforceMainThread;
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.v5e_1 = LinkedHashMap_init_$Create$();
    this.w5e_1 = State_INITIALIZED_getInstance();
    this.y5e_1 = 0;
    this.z5e_1 = false;
    this.a5f_1 = false;
    this.b5f_1 = ArrayList_init_$Create$();
    this.x5e_1 = new WeakReference(provider);
    this.c5f_1 = MutableStateFlow(State_INITIALIZED_getInstance());
  }
  protoOf(LifecycleRegistry).u5d = function () {
    return this.w5e_1;
  };
  protoOf(LifecycleRegistry).j5f = function (event) {
    enforceMainThreadIfNeeded(this, 'handleLifecycleEvent');
    moveToState(this, event.o5d());
  };
  protoOf(LifecycleRegistry).t5d = function (observer) {
    enforceMainThreadIfNeeded(this, 'addObserver');
    var initialState = this.w5e_1.equals(State_DESTROYED_getInstance()) ? State_DESTROYED_getInstance() : State_INITIALIZED_getInstance();
    var statefulObserver = new ObserverWithState(observer, initialState);
    var previous = this.v5e_1.b2(observer, statefulObserver);
    if (!(previous == null)) {
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.x5e_1.j13();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lifecycleOwner = tmp;
    var isReentrance = !(this.y5e_1 === 0) || this.z5e_1;
    var targetState = calculateTargetState(this, observer);
    this.y5e_1 = this.y5e_1 + 1 | 0;
    $l$loop: while (true) {
      var tmp_0;
      if (statefulObserver.e5f_1.n2(targetState) < 0) {
        // Inline function 'kotlin.collections.contains' call
        // Inline function 'kotlin.collections.containsKey' call
        var this_0 = this.v5e_1;
        tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).w1(observer);
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        break $l$loop;
      }
      pushParentState(this, statefulObserver.e5f_1);
      var tmp1_elvis_lhs = Companion_instance.l5d(statefulObserver.e5f_1);
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('no event up from ' + statefulObserver.e5f_1.toString());
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var event = tmp_1;
      statefulObserver.h5f(lifecycleOwner, event);
      popParentState(this);
      targetState = calculateTargetState(this, observer);
    }
    if (!isReentrance) {
      sync(this);
    }
    this.y5e_1 = this.y5e_1 - 1 | 0;
  };
  function isMainThread() {
    return true;
  }
  function WeakReference(reference) {
    this.d5f_1 = reference;
  }
  protoOf(WeakReference).j13 = function () {
    return this.d5f_1;
  };
  //region block: init
  Companion_instance_0 = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LifecycleRegistry_init_$Create$;
  _.$_$.b = Companion_instance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-lifecycle-lifecycle-runtime.js.map
