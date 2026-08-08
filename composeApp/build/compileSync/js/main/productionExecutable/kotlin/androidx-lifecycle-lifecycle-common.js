(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-common'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-lifecycle-lifecycle-common'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-common'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'androidx-lifecycle-lifecycle-common'.");
    }
    globalThis['androidx-lifecycle-lifecycle-common'] = factory(typeof globalThis['androidx-lifecycle-lifecycle-common'] === 'undefined' ? {} : globalThis['androidx-lifecycle-lifecycle-common'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.z9;
  var initMetadataForInterface = kotlin_kotlin.$_$.l9;
  var Unit_instance = kotlin_kotlin.$_$.b3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ce;
  var initMetadataForClass = kotlin_kotlin.$_$.h9;
  var VOID = kotlin_kotlin.$_$.b;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i9;
  var Enum = kotlin_kotlin.$_$.bd;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var isInterface = kotlin_kotlin.$_$.q9;
  var THROW_CCE = kotlin_kotlin.$_$.md;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  var initMetadataForObject = kotlin_kotlin.$_$.n9;
  //endregion
  //region block: pre-declaration
  function onCreate(owner) {
  }
  function onStart(owner) {
  }
  function onResume(owner) {
  }
  function onPause(owner) {
  }
  function onStop(owner) {
  }
  function onDestroy(owner) {
  }
  initMetadataForInterface(DefaultLifecycleObserver, 'DefaultLifecycleObserver');
  initMetadataForInterface(LifecycleEventObserver, 'LifecycleEventObserver');
  initMetadataForClass(DefaultLifecycleObserverAdapter, 'DefaultLifecycleObserverAdapter', VOID, VOID, [LifecycleEventObserver]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Event, 'Event', VOID, Enum);
  initMetadataForClass(State, 'State', VOID, Enum);
  initMetadataForClass(Lifecycle, 'Lifecycle');
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForObject(Lifecycling, 'Lifecycling');
  //endregion
  function DefaultLifecycleObserver() {
  }
  function DefaultLifecycleObserverAdapter(defaultLifecycleObserver, lifecycleEventObserver) {
    this.h5d_1 = defaultLifecycleObserver;
    this.i5d_1 = lifecycleEventObserver;
  }
  protoOf(DefaultLifecycleObserverAdapter).j5d = function (source, event) {
    switch (event.m2_1) {
      case 0:
        this.h5d_1.b5d(source);
        break;
      case 1:
        this.h5d_1.c5d(source);
        break;
      case 2:
        this.h5d_1.d5d(source);
        break;
      case 3:
        this.h5d_1.e5d(source);
        break;
      case 4:
        this.h5d_1.f5d(source);
        break;
      case 5:
        this.h5d_1.g5d(source);
        break;
      case 6:
        throw IllegalArgumentException_init_$Create$('ON_ANY must not been send by anybody');
      default:
        noWhenBranchMatchedException();
        break;
    }
    var tmp1_safe_receiver = this.i5d_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.j5d(source, event);
    }
  };
  var Event_ON_CREATE_instance;
  var Event_ON_START_instance;
  var Event_ON_RESUME_instance;
  var Event_ON_PAUSE_instance;
  var Event_ON_STOP_instance;
  var Event_ON_DESTROY_instance;
  var Event_ON_ANY_instance;
  function Companion() {
  }
  protoOf(Companion).k5d = function (state) {
    switch (state.m2_1) {
      case 2:
        return Event_ON_DESTROY_getInstance();
      case 3:
        return Event_ON_STOP_getInstance();
      case 4:
        return Event_ON_PAUSE_getInstance();
      default:
        return null;
    }
  };
  protoOf(Companion).l5d = function (state) {
    switch (state.m2_1) {
      case 1:
        return Event_ON_CREATE_getInstance();
      case 2:
        return Event_ON_START_getInstance();
      case 3:
        return Event_ON_RESUME_getInstance();
      default:
        return null;
    }
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  var Event_entriesInitialized;
  function Event_initEntries() {
    if (Event_entriesInitialized)
      return Unit_instance;
    Event_entriesInitialized = true;
    Event_ON_CREATE_instance = new Event('ON_CREATE', 0);
    Event_ON_START_instance = new Event('ON_START', 1);
    Event_ON_RESUME_instance = new Event('ON_RESUME', 2);
    Event_ON_PAUSE_instance = new Event('ON_PAUSE', 3);
    Event_ON_STOP_instance = new Event('ON_STOP', 4);
    Event_ON_DESTROY_instance = new Event('ON_DESTROY', 5);
    Event_ON_ANY_instance = new Event('ON_ANY', 6);
  }
  var State_DESTROYED_instance;
  var State_INITIALIZED_instance;
  var State_CREATED_instance;
  var State_STARTED_instance;
  var State_RESUMED_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_instance;
    State_entriesInitialized = true;
    State_DESTROYED_instance = new State('DESTROYED', 0);
    State_INITIALIZED_instance = new State('INITIALIZED', 1);
    State_CREATED_instance = new State('CREATED', 2);
    State_STARTED_instance = new State('STARTED', 3);
    State_RESUMED_instance = new State('RESUMED', 4);
  }
  function Event(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Event).o5d = function () {
    switch (this.m2_1) {
      case 0:
      case 4:
        return State_CREATED_getInstance();
      case 1:
      case 3:
        return State_STARTED_getInstance();
      case 2:
        return State_RESUMED_getInstance();
      case 5:
        return State_DESTROYED_getInstance();
      case 6:
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    throw IllegalArgumentException_init_$Create$(this.toString() + ' has no target state');
  };
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(State).r5d = function (state) {
    return this.n2(state) >= 0;
  };
  function Event_ON_CREATE_getInstance() {
    Event_initEntries();
    return Event_ON_CREATE_instance;
  }
  function Event_ON_START_getInstance() {
    Event_initEntries();
    return Event_ON_START_instance;
  }
  function Event_ON_RESUME_getInstance() {
    Event_initEntries();
    return Event_ON_RESUME_instance;
  }
  function Event_ON_PAUSE_getInstance() {
    Event_initEntries();
    return Event_ON_PAUSE_instance;
  }
  function Event_ON_STOP_getInstance() {
    Event_initEntries();
    return Event_ON_STOP_instance;
  }
  function Event_ON_DESTROY_getInstance() {
    Event_initEntries();
    return Event_ON_DESTROY_instance;
  }
  function State_DESTROYED_getInstance() {
    State_initEntries();
    return State_DESTROYED_instance;
  }
  function State_INITIALIZED_getInstance() {
    State_initEntries();
    return State_INITIALIZED_instance;
  }
  function State_CREATED_getInstance() {
    State_initEntries();
    return State_CREATED_instance;
  }
  function State_STARTED_getInstance() {
    State_initEntries();
    return State_STARTED_instance;
  }
  function State_RESUMED_getInstance() {
    State_initEntries();
    return State_RESUMED_instance;
  }
  function Lifecycle() {
    this.s5d_1 = new AtomicReference(null);
  }
  function LifecycleEventObserver() {
  }
  function AtomicReference(initialValue) {
    this.v5d_1 = atomic$ref$1(initialValue);
  }
  function Lifecycling() {
  }
  protoOf(Lifecycling).w5d = function (object) {
    var isLifecycleEventObserver = isInterface(object, LifecycleEventObserver);
    var isDefaultLifecycleObserver = isInterface(object, DefaultLifecycleObserver);
    if (isLifecycleEventObserver && isDefaultLifecycleObserver) {
      var tmp = isInterface(object, DefaultLifecycleObserver) ? object : THROW_CCE();
      return new DefaultLifecycleObserverAdapter(tmp, isInterface(object, LifecycleEventObserver) ? object : THROW_CCE());
    }
    if (isDefaultLifecycleObserver) {
      return new DefaultLifecycleObserverAdapter(isInterface(object, DefaultLifecycleObserver) ? object : THROW_CCE(), null);
    }
    if (isLifecycleEventObserver) {
      return isInterface(object, LifecycleEventObserver) ? object : THROW_CCE();
    }
    throw IllegalArgumentException_init_$Create$_0();
  };
  var Lifecycling_instance;
  function Lifecycling_getInstance() {
    return Lifecycling_instance;
  }
  //region block: init
  Companion_instance = new Companion();
  Lifecycling_instance = new Lifecycling();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LifecycleEventObserver;
  _.$_$.b = Lifecycle;
  _.$_$.c = Event_ON_PAUSE_getInstance;
  _.$_$.d = Event_ON_RESUME_getInstance;
  _.$_$.e = Event_ON_START_getInstance;
  _.$_$.f = Event_ON_STOP_getInstance;
  _.$_$.g = State_CREATED_getInstance;
  _.$_$.h = State_DESTROYED_getInstance;
  _.$_$.i = State_INITIALIZED_getInstance;
  _.$_$.j = State_RESUMED_getInstance;
  _.$_$.k = State_STARTED_getInstance;
  _.$_$.l = Companion_instance;
  _.$_$.m = Lifecycling_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-lifecycle-lifecycle-common.js.map
