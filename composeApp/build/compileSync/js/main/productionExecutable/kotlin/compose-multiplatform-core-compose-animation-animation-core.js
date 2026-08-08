(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './androidx-collection-collection.js', './compose-multiplatform-core-compose-ui-ui.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./androidx-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    globalThis['compose-multiplatform-core-compose-animation-animation-core'] = factory(typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['androidx-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_androidx_collection_collection, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var hypot = Math.hypot;
  var Unit_instance = kotlin_kotlin.$_$.b3;
  var equals = kotlin_kotlin.$_$.z8;
  var KMutableProperty1 = kotlin_kotlin.$_$.ab;
  var getPropertyCallableRef = kotlin_kotlin.$_$.e9;
  var VOID = kotlin_kotlin.$_$.b;
  var coerceIn = kotlin_kotlin.$_$.ra;
  var Long = kotlin_kotlin.$_$.hd;
  var CoroutineImpl = kotlin_kotlin.$_$.m7;
  var protoOf = kotlin_kotlin.$_$.z9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x6;
  var CancellationException = kotlin_kotlin.$_$.w6;
  var initMetadataForLambda = kotlin_kotlin.$_$.m9;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var THROW_CCE = kotlin_kotlin.$_$.md;
  var initMetadataForClass = kotlin_kotlin.$_$.h9;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.u2;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.d2;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.l1;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.l2;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t3;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var rememberUpdatedState = kotlin_androidx_compose_runtime_runtime.$_$.v1;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var SideEffect = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var LaunchedEffect = kotlin_androidx_compose_runtime_runtime.$_$.r;
  var KProperty0 = kotlin_kotlin.$_$.bb;
  var getLocalDelegateReference = kotlin_kotlin.$_$.c9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var isInterface = kotlin_kotlin.$_$.q9;
  var ChannelResult__getOrNull_impl_f5e07h = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.v2;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w3;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var objectCreate = kotlin_kotlin.$_$.y9;
  var isNaN_0 = kotlin_kotlin.$_$.yd;
  var toString = kotlin_kotlin.$_$.ba;
  var compare = kotlin_kotlin.$_$.w7;
  var toString_0 = kotlin_kotlin.$_$.oe;
  var initMetadataForInterface = kotlin_kotlin.$_$.l9;
  var divide = kotlin_kotlin.$_$.z7;
  var Enum = kotlin_kotlin.$_$.bd;
  var hashCode = kotlin_kotlin.$_$.g9;
  var getNumberHashCode = kotlin_kotlin.$_$.d9;
  var equalsLong = kotlin_kotlin.$_$.a8;
  var add = kotlin_kotlin.$_$.s7;
  var subtract = kotlin_kotlin.$_$.k8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.je;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var computeCubicVerticalBounds = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p1;
  var _FloatFloatPair___get_packedValue__impl__5lczxp = kotlin_androidx_collection_collection.$_$.m1;
  var shiftRight = kotlin_kotlin.$_$.j8;
  var convertToInt = kotlin_kotlin.$_$.x7;
  var floatFromBits = kotlin_kotlin.$_$.a9;
  var bitwiseAnd = kotlin_kotlin.$_$.t7;
  var findFirstCubicRoot = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t1;
  var evaluateCubic = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s1;
  var FunctionAdapter = kotlin_kotlin.$_$.m8;
  var numberToLong = kotlin_kotlin.$_$.g8;
  var multiply = kotlin_kotlin.$_$.e8;
  var toNumber = kotlin_kotlin.$_$.l8;
  var withFrameNanos = kotlin_androidx_compose_runtime_runtime.$_$.f2;
  var Key_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.v9;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.j9;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.t;
  var Key_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var ensureNotNull = kotlin_kotlin.$_$.wd;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var captureStack = kotlin_kotlin.$_$.p8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var toRawBits = kotlin_kotlin.$_$.ne;
  var isNaN_1 = kotlin_kotlin.$_$.zd;
  var toRawBits_0 = kotlin_kotlin.$_$.me;
  var fromInt = kotlin_kotlin.$_$.b8;
  var shiftLeft = kotlin_kotlin.$_$.h8;
  var bitwiseOr = kotlin_kotlin.$_$.u7;
  var Key_instance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.z9;
  var mutableFloatStateOf = kotlin_androidx_compose_runtime_runtime.$_$.m1;
  var mutableLongStateOf = kotlin_androidx_compose_runtime_runtime.$_$.o1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.s2;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var mutableStateListOf = kotlin_androidx_compose_runtime_runtime.$_$.p1;
  var derivedStateOf = kotlin_androidx_compose_runtime_runtime.$_$.j1;
  var KProperty1 = kotlin_kotlin.$_$.cb;
  var roundToLong = kotlin_kotlin.$_$.fa;
  var createCompositionCoroutineScope = kotlin_androidx_compose_runtime_runtime.$_$.e1;
  var DisposableEffect = kotlin_androidx_compose_runtime_runtime.$_$.p;
  var DisposableEffect_0 = kotlin_androidx_compose_runtime_runtime.$_$.q;
  var Companion_instance = kotlin_androidx_compose_runtime_runtime.$_$.k2;
  var SnapshotStateObserver = kotlin_androidx_compose_runtime_runtime.$_$.e;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.e;
  var lazy = kotlin_kotlin.$_$.ae;
  var numberToInt = kotlin_kotlin.$_$.x9;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var _DpOffset___get_x__impl__uauqb5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var _DpOffset___get_y__impl__1h898y = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var _DpOffset___init__impl__yq36wy = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var DpOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var roundToInt = kotlin_kotlin.$_$.ea;
  var _IntOffset___init__impl__rq8h7b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f;
  var to = kotlin_kotlin.$_$.pe;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u3;
  var mapOf = kotlin_kotlin.$_$.x5;
  var compareTo = kotlin_kotlin.$_$.v8;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.s;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(Animatable$runAnimation$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Animatable$snapTo$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Animatable$stop$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(Animatable, 'Animatable', VOID, VOID, VOID, [4, 3, 1, 0]);
  initMetadataForClass(AnimationResult, 'AnimationResult');
  initMetadataForLambda(animateValueAsState$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(animateValueAsState$slambda, CoroutineImpl, VOID, [1]);
  function isFinishedFromNanos(playTimeNanos) {
    return compare(playTimeNanos, this.bb1()) >= 0;
  }
  initMetadataForInterface(Animation, 'Animation');
  initMetadataForClass(TargetBasedAnimation, 'TargetBasedAnimation', VOID, VOID, [Animation]);
  initMetadataForClass(DecayAnimation, 'DecayAnimation', VOID, VOID, [Animation]);
  initMetadataForClass(AnimationEndReason, 'AnimationEndReason', VOID, Enum);
  initMetadataForInterface(FiniteAnimationSpec, 'FiniteAnimationSpec');
  initMetadataForClass(SpringSpec, 'SpringSpec', SpringSpec, VOID, [FiniteAnimationSpec]);
  initMetadataForClass(TweenSpec, 'TweenSpec', TweenSpec, VOID, [FiniteAnimationSpec]);
  initMetadataForClass(StartDelayAnimationSpec, 'StartDelayAnimationSpec');
  function getEndVelocity(initialValue, targetValue, initialVelocity) {
    return this.eb1(this.cb1(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  initMetadataForInterface(VectorizedAnimationSpec, 'VectorizedAnimationSpec');
  initMetadataForClass(StartDelayVectorizedAnimationSpec, 'StartDelayVectorizedAnimationSpec', VOID, VOID, [VectorizedAnimationSpec]);
  initMetadataForClass(AnimationState, 'AnimationState');
  initMetadataForClass(AnimationScope, 'AnimationScope');
  initMetadataForClass(AnimationVector_3, 'AnimationVector');
  initMetadataForClass(AnimationVector1D, 'AnimationVector1D', VOID, AnimationVector_3);
  initMetadataForClass(AnimationVector4D, 'AnimationVector4D', VOID, AnimationVector_3);
  initMetadataForClass(AnimationVector2D, 'AnimationVector2D', VOID, AnimationVector_3);
  initMetadataForClass(AnimationVector3D, 'AnimationVector3D', VOID, AnimationVector_3);
  initMetadataForClass(Arc, 'Arc');
  initMetadataForClass(ArcSpline, 'ArcSpline');
  initMetadataForClass(DecayAnimationSpecImpl, 'DecayAnimationSpecImpl');
  initMetadataForClass(VectorizedFloatDecaySpec, 'VectorizedFloatDecaySpec');
  initMetadataForInterface(Easing, 'Easing');
  initMetadataForClass(CubicBezierEasing, 'CubicBezierEasing', VOID, VOID, [Easing]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  function getEndVelocity_0(initialValue, targetValue, initialVelocity) {
    return this.kb4(this.jb4(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function vectorize(converter) {
    return VectorizedFloatAnimationSpec_init_$Create$(this);
  }
  initMetadataForInterface(FloatAnimationSpec, 'FloatAnimationSpec');
  initMetadataForClass(FloatTweenSpec, 'FloatTweenSpec', FloatTweenSpec, VOID, [FloatAnimationSpec]);
  initMetadataForClass(FloatSpringSpec, 'FloatSpringSpec', FloatSpringSpec, VOID, [FloatAnimationSpec]);
  initMetadataForLambda(withInfiniteAnimationFrameNanos$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($withInfiniteAnimationFrameNanosCOROUTINE$, CoroutineImpl);
  initMetadataForClass(Mutator, 'Mutator');
  initMetadataForLambda(MutatorMutex$mutate$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MutatorMutex, 'MutatorMutex', MutatorMutex, VOID, VOID, [2, 3]);
  initMetadataForClass(MutatePriority, 'MutatePriority', VOID, Enum);
  initMetadataForClass(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', VOID, CancellationException);
  initMetadataForClass(MutationInterruptedException, 'MutationInterruptedException', MutationInterruptedException, PlatformOptimizedCancellationException);
  initMetadataForClass(SpringSimulation, 'SpringSimulation');
  initMetadataForCoroutine($animateCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($callWithFrameNanosCOROUTINE$, CoroutineImpl);
  initMetadataForClass(TransitionAnimationState, 'TransitionAnimationState');
  function isTransitioningTo(_this__u8e3s4, targetState) {
    return equals(_this__u8e3s4, this.jb9()) && equals(targetState, this.o5d());
  }
  initMetadataForInterface(Segment, 'Segment');
  initMetadataForClass(SegmentImpl, 'SegmentImpl', VOID, VOID, [Segment]);
  initMetadataForLambda(Transition$animateTo$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForClass(Transition, 'Transition');
  initMetadataForClass(TransitionState, 'TransitionState');
  initMetadataForClass(MutableTransitionState, 'MutableTransitionState', VOID, TransitionState);
  initMetadataForClass(_no_name_provided__qut3iv_0);
  initMetadataForClass(_no_name_provided__qut3iv_1);
  initMetadataForClass(TwoWayConverterImpl, 'TwoWayConverterImpl');
  function get_isInfinite() {
    return false;
  }
  initMetadataForInterface(VectorizedFiniteAnimationSpec, 'VectorizedFiniteAnimationSpec', VOID, VOID, [VectorizedAnimationSpec]);
  initMetadataForClass(VectorizedSpringSpec, 'VectorizedSpringSpec', VectorizedSpringSpec_init_$Create$, VOID, [VectorizedFiniteAnimationSpec]);
  function getDurationNanos(initialValue, targetValue, initialVelocity) {
    return multiply(numberToLong(this.gbc() + this.fbc() | 0), new Long(1000000, 0));
  }
  initMetadataForInterface(VectorizedDurationBasedAnimationSpec, 'VectorizedDurationBasedAnimationSpec', VOID, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForClass(VectorizedTweenSpec, 'VectorizedTweenSpec', VectorizedTweenSpec, VOID, [VectorizedDurationBasedAnimationSpec]);
  initMetadataForClass(VectorizedFloatAnimationSpec$1);
  initMetadataForClass(VectorizedFloatAnimationSpec, 'VectorizedFloatAnimationSpec', VOID, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForClass(createSpringAnimations$1);
  initMetadataForClass(createSpringAnimations$2);
  initMetadataForClass(AtomicReference, 'AtomicReference');
  //endregion
  function get_positiveInfinityBounds1D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds1D;
  }
  var positiveInfinityBounds1D;
  function get_positiveInfinityBounds2D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds2D;
  }
  var positiveInfinityBounds2D;
  function get_positiveInfinityBounds3D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds3D;
  }
  var positiveInfinityBounds3D;
  function get_positiveInfinityBounds4D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds4D;
  }
  var positiveInfinityBounds4D;
  function get_negativeInfinityBounds1D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds1D;
  }
  var negativeInfinityBounds1D;
  function get_negativeInfinityBounds2D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds2D;
  }
  var negativeInfinityBounds2D;
  function get_negativeInfinityBounds3D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds3D;
  }
  var negativeInfinityBounds3D;
  function get_negativeInfinityBounds4D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds4D;
  }
  var negativeInfinityBounds4D;
  var androidx_compose_animation_core_Animatable$stable;
  var androidx_compose_animation_core_AnimationResult$stable;
  function Animatable$runAnimation$slambda$lambda(this$0, $endState, $block, $clampingNeeded) {
    return function ($this$animate) {
      updateState($this$animate, this$0.aaw_1);
      var clamped = clampToBounds(this$0, $this$animate.v1());
      if (!equals(clamped, $this$animate.v1())) {
        this$0.aaw_1.aax(clamped);
        $endState.aax(clamped);
        var tmp0_safe_receiver = $block;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver(this$0);
        $this$animate.bax();
        $clampingNeeded._v = true;
      } else {
        var tmp1_safe_receiver = $block;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver(this$0);
      }
      return Unit_instance;
    };
  }
  function _set_isRunning__kpbg34($this, _set____db54di) {
    var tmp0 = $this.baw_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Animatable$_get_isRunning_$ref_121fnp_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, Animatable$_set_isRunning_$ref_g9sy61_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  }
  function _set_targetValue__aqsk0r($this, _set____db54di) {
    var tmp0 = $this.caw_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Animatable$_get_targetValue_$ref_gosum2_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('targetValue', 1, tmp, tmp_0, Animatable$_set_targetValue_$ref_6l2n3i_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  }
  function runAnimation($this, animation, initialVelocity, block, $completion) {
    var startTime = $this.aaw_1.xaw_1;
    return $this.faw_1.eax(VOID, Animatable$runAnimation$slambda_0($this, initialVelocity, animation, startTime, block, null), $completion);
  }
  function clampToBounds($this, value) {
    if (equals($this.jaw_1, $this.haw_1) && equals($this.kaw_1, $this.iaw_1)) {
      return value;
    }
    var valueVector = $this.xav_1.fax()(value);
    var clamped = false;
    var inductionVariable = 0;
    var last = valueVector.gax();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (valueVector.hax(i) < $this.jaw_1.hax(i) || valueVector.hax(i) > $this.kaw_1.hax(i)) {
          clamped = true;
          valueVector.iax(i, coerceIn(valueVector.hax(i), $this.jaw_1.hax(i), $this.kaw_1.hax(i)));
        }
      }
       while (inductionVariable < last);
    if (clamped) {
      return $this.xav_1.jax()(valueVector);
    } else {
      return value;
    }
  }
  function endAnimation($this) {
    // Inline function 'kotlin.apply' call
    var this_0 = $this.aaw_1;
    this_0.waw_1.kax();
    this_0.xaw_1 = new Long(0, -2147483648);
    _set_isRunning__kpbg34($this, false);
  }
  function Animatable$_get_isRunning_$ref_121fnp() {
    return function (p0) {
      return p0.lax();
    };
  }
  function Animatable$_set_isRunning_$ref_g9sy61() {
    return function (p0, p1) {
      _set_isRunning__kpbg34(p0, p1);
      return Unit_instance;
    };
  }
  function Animatable$_get_isRunning_$ref_121fnp_0() {
    return function (p0) {
      return p0.lax();
    };
  }
  function Animatable$_set_isRunning_$ref_g9sy61_0() {
    return function (p0, p1) {
      _set_isRunning__kpbg34(p0, p1);
      return Unit_instance;
    };
  }
  function Animatable$_get_targetValue_$ref_gosum2() {
    return function (p0) {
      return p0.max();
    };
  }
  function Animatable$_set_targetValue_$ref_6l2n3i() {
    return function (p0, p1) {
      _set_targetValue__aqsk0r(p0, p1);
      return Unit_instance;
    };
  }
  function Animatable$_get_targetValue_$ref_gosum2_0() {
    return function (p0) {
      return p0.max();
    };
  }
  function Animatable$_set_targetValue_$ref_6l2n3i_0() {
    return function (p0, p1) {
      _set_targetValue__aqsk0r(p0, p1);
      return Unit_instance;
    };
  }
  function Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    this.vax_1 = this$0;
    this.wax_1 = $initialVelocity;
    this.xax_1 = $animation;
    this.yax_1 = $startTime;
    this.zax_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$runAnimation$slambda).day = function ($completion) {
    var tmp = this.n1s($completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(Animatable$runAnimation$slambda).o1s = function ($completion) {
    return this.day($completion);
  };
  protoOf(Animatable$runAnimation$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            this.o8_1 = 2;
            this.vax_1.aaw_1.waw_1 = this.vax_1.xav_1.fax()(this.wax_1);
            _set_targetValue__aqsk0r(this.vax_1, this.xax_1.max());
            _set_isRunning__kpbg34(this.vax_1, true);
            this.bay_1 = copy_0(this.vax_1.aaw_1, VOID, VOID, VOID, new Long(0, -2147483648));
            this.cay_1 = {_v: false};
            this.n8_1 = 1;
            suspendResult = animate_0(this.bay_1, this.xax_1, this.yax_1, Animatable$runAnimation$slambda$lambda(this.vax_1, this.bay_1, this.zax_1, this.cay_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var endReason = this.cay_1._v ? AnimationEndReason_BoundReached_getInstance() : AnimationEndReason_Finished_getInstance();
            endAnimation(this.vax_1);
            this.aay_1 = new AnimationResult(this.bay_1, endReason);
            this.o8_1 = 3;
            this.n8_1 = 4;
            continue $sm;
          case 2:
            this.o8_1 = 3;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof CancellationException) {
              var e = this.q8_1;
              var tmp_1 = this;
              endAnimation(this.vax_1);
              throw e;
            } else {
              throw this.q8_1;
            }

          case 3:
            throw this.q8_1;
          case 4:
            this.o8_1 = 3;
            return this.aay_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o8_1 === 3) {
          throw e_0;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(Animatable$runAnimation$slambda).n1s = function (completion) {
    return new Animatable$runAnimation$slambda(this.vax_1, this.wax_1, this.xax_1, this.yax_1, this.zax_1, completion);
  };
  function Animatable$runAnimation$slambda_0(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    var i = new Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation);
    var l = function ($completion) {
      return i.day($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation) {
    this.may_1 = this$0;
    this.nay_1 = $targetValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$snapTo$slambda).m1s = function ($completion) {
    var tmp = this.n1s($completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(Animatable$snapTo$slambda).o1s = function ($completion) {
    return this.m1s($completion);
  };
  protoOf(Animatable$snapTo$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
          endAnimation(this.may_1);
          var clampedValue = clampToBounds(this.may_1, this.nay_1);
          this.may_1.aaw_1.aax(clampedValue);
          _set_targetValue__aqsk0r(this.may_1, clampedValue);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Animatable$snapTo$slambda).n1s = function (completion) {
    return new Animatable$snapTo$slambda(this.may_1, this.nay_1, completion);
  };
  function Animatable$snapTo$slambda_0(this$0, $targetValue, resultContinuation) {
    var i = new Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation);
    var l = function ($completion) {
      return i.m1s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$stop$slambda(this$0, resultContinuation) {
    this.way_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$stop$slambda).m1s = function ($completion) {
    var tmp = this.n1s($completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(Animatable$stop$slambda).o1s = function ($completion) {
    return this.m1s($completion);
  };
  protoOf(Animatable$stop$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
          endAnimation(this.way_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Animatable$stop$slambda).n1s = function (completion) {
    return new Animatable$stop$slambda(this.way_1, completion);
  };
  function Animatable$stop$slambda_0(this$0, resultContinuation) {
    var i = new Animatable$stop$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.m1s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable(initialValue, typeConverter, visibilityThreshold, label) {
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    label = label === VOID ? 'Animatable' : label;
    this.xav_1 = typeConverter;
    this.yav_1 = visibilityThreshold;
    this.zav_1 = label;
    this.aaw_1 = new AnimationState(this.xav_1, initialValue);
    this.baw_1 = mutableStateOf(false);
    this.caw_1 = mutableStateOf(initialValue);
    this.daw_1 = null;
    this.eaw_1 = null;
    this.faw_1 = new MutatorMutex();
    this.gaw_1 = new SpringSpec(VOID, VOID, this.yav_1);
    var tmp = this;
    var tmp0_subject = this.xay();
    var tmp_0;
    if (tmp0_subject instanceof AnimationVector1D) {
      tmp_0 = get_negativeInfinityBounds1D();
    } else {
      if (tmp0_subject instanceof AnimationVector2D) {
        tmp_0 = get_negativeInfinityBounds2D();
      } else {
        if (tmp0_subject instanceof AnimationVector3D) {
          tmp_0 = get_negativeInfinityBounds3D();
        } else {
          tmp_0 = get_negativeInfinityBounds4D();
        }
      }
    }
    var tmp_1 = tmp_0;
    tmp.haw_1 = tmp_1 instanceof AnimationVector_3 ? tmp_1 : THROW_CCE();
    var tmp_2 = this;
    var tmp0_subject_0 = this.xay();
    var tmp_3;
    if (tmp0_subject_0 instanceof AnimationVector1D) {
      tmp_3 = get_positiveInfinityBounds1D();
    } else {
      if (tmp0_subject_0 instanceof AnimationVector2D) {
        tmp_3 = get_positiveInfinityBounds2D();
      } else {
        if (tmp0_subject_0 instanceof AnimationVector3D) {
          tmp_3 = get_positiveInfinityBounds3D();
        } else {
          tmp_3 = get_positiveInfinityBounds4D();
        }
      }
    }
    var tmp_4 = tmp_3;
    tmp_2.iaw_1 = tmp_4 instanceof AnimationVector_3 ? tmp_4 : THROW_CCE();
    this.jaw_1 = this.haw_1;
    this.kaw_1 = this.iaw_1;
  }
  protoOf(Animatable).v1 = function () {
    return this.aaw_1.v1();
  };
  protoOf(Animatable).xay = function () {
    return this.aaw_1.waw_1;
  };
  protoOf(Animatable).yay = function () {
    return this.xav_1.jax()(this.xay());
  };
  protoOf(Animatable).lax = function () {
    var tmp0 = this.baw_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Animatable$_get_isRunning_$ref_121fnp();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, Animatable$_set_isRunning_$ref_g9sy61());
    return tmp0.v1();
  };
  protoOf(Animatable).max = function () {
    var tmp0 = this.caw_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Animatable$_get_targetValue_$ref_gosum2();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetValue', 1, tmp, tmp_0, Animatable$_set_targetValue_$ref_6l2n3i());
    return tmp0.v1();
  };
  protoOf(Animatable).zay = function (targetValue, animationSpec, initialVelocity, block, $completion) {
    var tmp0_initialValue = this.v1();
    var tmp1_typeConverter = this.xav_1;
    var anim = TargetBasedAnimation_0(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, initialVelocity);
    return runAnimation(this, anim, initialVelocity, block, $completion);
  };
  protoOf(Animatable).aaz = function (targetValue, animationSpec, initialVelocity, block, $completion, $super) {
    animationSpec = animationSpec === VOID ? this.gaw_1 : animationSpec;
    initialVelocity = initialVelocity === VOID ? this.yay() : initialVelocity;
    block = block === VOID ? null : block;
    return $super === VOID ? this.zay(targetValue, animationSpec, initialVelocity, block, $completion) : $super.zay.call(this, targetValue, animationSpec, initialVelocity, block, $completion);
  };
  protoOf(Animatable).baz = function (targetValue, $completion) {
    return this.faw_1.eax(VOID, Animatable$snapTo$slambda_0(this, targetValue, null), $completion);
  };
  protoOf(Animatable).caz = function ($completion) {
    return this.faw_1.eax(VOID, Animatable$stop$slambda_0(this, null), $completion);
  };
  protoOf(Animatable).daz = function () {
    return this.aaw_1;
  };
  function Animatable_0(initialValue, visibilityThreshold) {
    visibilityThreshold = visibilityThreshold === VOID ? 0.01 : visibilityThreshold;
    _init_properties_Animatable_kt__f2hc5e();
    return new Animatable(initialValue, get_VectorConverter(FloatCompanionObject_instance), visibilityThreshold);
  }
  function AnimationResult(endState, endReason) {
    this.eaz_1 = endState;
    this.faz_1 = endReason;
  }
  protoOf(AnimationResult).toString = function () {
    return 'AnimationResult(endReason=' + this.faz_1.toString() + ', endState=' + this.eaz_1.toString() + ')';
  };
  function androidx_compose_animation_core_Animatable$stableprop_getter() {
    return androidx_compose_animation_core_Animatable$stable;
  }
  var properties_initialized_Animatable_kt_s5cd7k;
  function _init_properties_Animatable_kt__f2hc5e() {
    if (!properties_initialized_Animatable_kt_s5cd7k) {
      properties_initialized_Animatable_kt_s5cd7k = true;
      positiveInfinityBounds1D = AnimationVector(Infinity);
      positiveInfinityBounds2D = AnimationVector_0(Infinity, Infinity);
      positiveInfinityBounds3D = AnimationVector_1(Infinity, Infinity, Infinity);
      positiveInfinityBounds4D = AnimationVector_2(Infinity, Infinity, Infinity, Infinity);
      negativeInfinityBounds1D = AnimationVector(-Infinity);
      negativeInfinityBounds2D = AnimationVector_0(-Infinity, -Infinity);
      negativeInfinityBounds3D = AnimationVector_1(-Infinity, -Infinity, -Infinity);
      negativeInfinityBounds4D = AnimationVector_2(-Infinity, -Infinity, -Infinity, -Infinity);
      androidx_compose_animation_core_Animatable$stable = 8;
      androidx_compose_animation_core_AnimationResult$stable = 0;
    }
  }
  function get_defaultAnimation() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return defaultAnimation;
  }
  var defaultAnimation;
  function get_dpDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return dpDefaultSpring;
  }
  var dpDefaultSpring;
  var sizeDefaultSpring;
  var offsetDefaultSpring;
  var rectDefaultSpring;
  var intDefaultSpring;
  var intOffsetDefaultSpring;
  var intSizeDefaultSpring;
  function animateFloatAsState(targetValue, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = visibilityThreshold;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 668842840, 'C(animateFloatAsState)P(3!1,4,2)74@3329L174:AnimateAsState.kt#pdpnli');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_defaultAnimation();
    if (!(($default & 4) === 0))
      visibilityThreshold_0 = 0.01;
    if (!(($default & 8) === 0))
      label_0 = 'FloatAnimation';
    if (!(($default & 16) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(668842840, $changed, -1, 'androidx.compose.animation.core.animateFloatAsState (AnimateAsState.kt:67)');
    }
    var tmp;
    if (animationSpec_0 === get_defaultAnimation()) {
      $composer_0.p24(1144108831);
      sourceInformation($composer_0, '70@3181L83');
      sourceInformationMarkerStart($composer_0, -1487113493, 'CC(remember):AnimateAsState.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($changed & 896 ^ 384) > 256 && $composer_0.m25(visibilityThreshold_0) || ($changed & 384) === 256;
      // Inline function 'kotlin.let' call
      var it = $composer_0.h25();
      var tmp_0;
      if (invalid || it === Companion_getInstance().i24_1) {
        var value = spring(VOID, VOID, visibilityThreshold_0);
        $composer_0.i25(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      $composer_0.q24();
      tmp = tmp1_group;
    } else {
      $composer_0.p24(1144218757);
      $composer_0.q24();
      tmp = animationSpec_0;
    }
    var resolvedAnimSpec = tmp;
    var tmp0 = animateValueAsState(targetValue, get_VectorConverter(FloatCompanionObject_instance), resolvedAnimSpec, visibilityThreshold_0, label_0, finishedListener_0, $composer_0, 14 & $changed | 7168 & $changed << 3 | 57344 & $changed << 3 | 458752 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function animateDpAsState(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1407150062, 'C(animateDpAsState)P(3:c#ui.unit.Dp!1,2)112@5031L166:AnimateAsState.kt#pdpnli');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_dpDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'DpAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1407150062, $changed, -1, 'androidx.compose.animation.core.animateDpAsState (AnimateAsState.kt:111)');
    }
    var tmp = get_VectorConverter_0(Companion_getInstance_0());
    var tmp_0 = animationSpec_0;
    var tmp0 = animateValueAsState(new Dp(targetValue), tmp, tmp_0, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function animateValueAsState(targetValue, typeConverter, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = visibilityThreshold;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1994373980, 'C(animateValueAsState)P(3,4!1,5,2)391@17999L21,397@18182L44,398@18248L79,399@18348L38,401@18433L428,414@18880L42,415@18938L32,415@18927L43,416@18999L697,416@18975L721:AnimateAsState.kt#pdpnli');
    if (!(($default & 4) === 0)) {
      sourceInformationMarkerStart($composer_0, -1037975335, 'CC(remember):AnimateAsState.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.h25();
      var tmp;
      if (false || it === Companion_getInstance().i24_1) {
        var value = spring();
        $composer_0.i25(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      animationSpec_0 = tmp0_group;
    }
    if (!(($default & 8) === 0))
      visibilityThreshold_0 = null;
    if (!(($default & 16) === 0))
      label_0 = 'ValueAnimation';
    if (!(($default & 32) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1994373980, $changed, -1, 'androidx.compose.animation.core.animateValueAsState (AnimateAsState.kt:395)');
    }
    sourceInformationMarkerStart($composer_0, -1037969456, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.h25();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().i24_1) {
      var value_0 = mutableStateOf(null);
      $composer_0.i25(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var toolingOverride = tmp2_group;
    sourceInformationMarkerStart($composer_0, -1037967309, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.h25();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().i24_1) {
      var value_1 = new Animatable(targetValue, typeConverter, visibilityThreshold_0, label_0);
      $composer_0.i25(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp3_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var animatable = tmp3_group;
    var listener$delegate = rememberUpdatedState(finishedListener_0, $composer_0, 14 & $changed >> 15);
    // Inline function 'kotlin.run' call
    var $this$run = animationSpec_0;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    if (!(visibilityThreshold_0 == null)) {
      tmp_7 = $this$run instanceof SpringSpec;
    } else {
      tmp_7 = false;
    }
    if (tmp_7) {
      tmp_6 = !equals($this$run.iaz_1, visibilityThreshold_0);
    } else {
      tmp_6 = false;
    }
    if (tmp_6) {
      tmp_5 = spring($this$run.gaz_1, $this$run.haz_1, visibilityThreshold_0);
    } else {
      tmp_5 = $this$run;
    }
    var tmp$ret$13 = tmp_5;
    var animSpec$delegate = rememberUpdatedState(tmp$ret$13, $composer_0, 0);
    sourceInformationMarkerStart($composer_0, -1037947122, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_2 = $composer_0.h25();
    var tmp_8;
    if (false || it_2 === Companion_getInstance().i24_1) {
      var value_2 = Channel(-1);
      $composer_0.i25(value_2);
      tmp_8 = value_2;
    } else {
      tmp_8 = it_2;
    }
    var tmp_9 = tmp_8;
    var tmp4_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var channel = tmp4_group;
    sourceInformationMarkerStart($composer_0, -1037945276, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.p25(channel) | (($changed & 14 ^ 6) > 4 && $composer_0.p25(targetValue) || ($changed & 6) === 4));
    // Inline function 'kotlin.let' call
    var it_3 = $composer_0.h25();
    var tmp_10;
    if (invalid || it_3 === Companion_getInstance().i24_1) {
      var value_3 = animateValueAsState$lambda_1(channel, targetValue);
      $composer_0.i25(value_3);
      tmp_10 = value_3;
    } else {
      tmp_10 = it_3;
    }
    var tmp_11 = tmp_10;
    var tmp5_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    SideEffect(tmp5_group, $composer_0, 0);
    sourceInformationMarkerStart($composer_0, -1037942659, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!(!!(!!($composer_0.p25(channel) | $composer_0.p25(animatable)) | $composer_0.j25(animSpec$delegate)) | $composer_0.j25(listener$delegate));
    // Inline function 'kotlin.let' call
    var it_4 = $composer_0.h25();
    var tmp_12;
    if (invalid_0 || it_4 === Companion_getInstance().i24_1) {
      var value_4 = animateValueAsState$slambda_0(channel, animatable, animSpec$delegate, listener$delegate, null);
      $composer_0.i25(value_4);
      tmp_12 = value_4;
    } else {
      tmp_12 = it_4;
    }
    var tmp_13 = tmp_12;
    var tmp6_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    LaunchedEffect(channel, tmp6_group, $composer_0, 0);
    var tmp0_elvis_lhs = toolingOverride.v1();
    var tmp1 = tmp0_elvis_lhs == null ? animatable.daz() : tmp0_elvis_lhs;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1;
  }
  function animateValueAsState$lambda($listener$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('listener', KProperty0, false);
    return $listener$delegate.v1();
  }
  function animateValueAsState$lambda_0($animSpec$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animSpec', KProperty0, false);
    return $animSpec$delegate.v1();
  }
  function animateValueAsState$lambda_1($channel, $targetValue) {
    return function () {
      $channel.x1d($targetValue);
      return Unit_instance;
    };
  }
  function animateValueAsState$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.raz_1 = $newTarget;
    this.saz_1 = $animatable;
    this.taz_1 = $animSpec$delegate;
    this.uaz_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$slambda$slambda).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(animateValueAsState$slambda$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$slambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            if (!equals(this.raz_1, this.saz_1.max())) {
              this.n8_1 = 1;
              suspendResult = this.saz_1.aaz(this.raz_1, animateValueAsState$lambda_0(this.taz_1), VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 2;
              continue $sm;
            }

          case 1:
            var tmp0_safe_receiver = animateValueAsState$lambda(this.uaz_1);
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver(this.saz_1.v1());
            this.n8_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 3) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(animateValueAsState$slambda$slambda).r1n = function ($this$launch, completion) {
    var i = new animateValueAsState$slambda$slambda(this.raz_1, this.saz_1, this.taz_1, this.uaz_1, completion);
    i.vaz_1 = $this$launch;
    return i;
  };
  function animateValueAsState$slambda$slambda_0($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function animateValueAsState$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.eb0_1 = $channel;
    this.fb0_1 = $animatable;
    this.gb0_1 = $animSpec$delegate;
    this.hb0_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$slambda).q1n = function ($this$LaunchedEffect, $completion) {
    var tmp = this.r1n($this$LaunchedEffect, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(animateValueAsState$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            this.jb0_1 = this.eb0_1.i();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.n8_1 = 2;
            suspendResult = this.jb0_1.b1c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.n8_1 = 3;
              continue $sm;
            }

            var target = this.jb0_1.k();
            var tmp0_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.eb0_1.c1e());
            var newTarget = tmp0_elvis_lhs == null ? target : tmp0_elvis_lhs;
            launch(this.ib0_1, VOID, VOID, animateValueAsState$slambda$slambda_0(newTarget, this.fb0_1, this.gb0_1, this.hb0_1, null));
            this.n8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 4) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(animateValueAsState$slambda).r1n = function ($this$LaunchedEffect, completion) {
    var i = new animateValueAsState$slambda(this.eb0_1, this.fb0_1, this.gb0_1, this.hb0_1, completion);
    i.ib0_1 = $this$LaunchedEffect;
    return i;
  };
  function animateValueAsState$slambda_0($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.q1n($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_AnimateAsState_kt_bq3rmo;
  function _init_properties_AnimateAsState_kt__7h7b9a() {
    if (!properties_initialized_AnimateAsState_kt_bq3rmo) {
      properties_initialized_AnimateAsState_kt_bq3rmo = true;
      defaultAnimation = spring();
      dpDefaultSpring = spring(VOID, VOID, new Dp(get_VisibilityThreshold_2(Companion_getInstance_0())));
      sizeDefaultSpring = spring(VOID, VOID, new Size(get_VisibilityThreshold_3(Companion_getInstance_1())));
      offsetDefaultSpring = spring(VOID, VOID, new Offset(get_VisibilityThreshold_4(Companion_getInstance_2())));
      rectDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_0(Companion_getInstance_3()));
      intDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_5(IntCompanionObject_instance));
      intOffsetDefaultSpring = spring(VOID, VOID, new IntOffset(get_VisibilityThreshold(Companion_getInstance_4())));
      intSizeDefaultSpring = spring(VOID, VOID, new IntSize(get_VisibilityThreshold_1(Companion_getInstance_5())));
    }
  }
  var androidx_compose_animation_core_TargetBasedAnimation$stable;
  var androidx_compose_animation_core_DecayAnimation$stable;
  function TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $this) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    TargetBasedAnimation.call($this, animationSpec.kb0(typeConverter), typeConverter, initialValue, targetValue, initialVelocityVector);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    return TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, objectCreate(protoOf(TargetBasedAnimation)));
  }
  function _get_endVelocity__lqkp53($this) {
    var tmp0_elvis_lhs = $this.tb0_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.lb0_1.ub0($this.pb0_1, $this.qb0_1, $this.rb0_1);
      $this.tb0_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function TargetBasedAnimation(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    this.lb0_1 = animationSpec;
    this.mb0_1 = typeConverter;
    this.nb0_1 = targetValue;
    this.ob0_1 = initialValue;
    this.pb0_1 = this.mb0_1.fax()(initialValue);
    this.qb0_1 = this.mb0_1.fax()(targetValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_1(initialVelocityVector);
    tmp.rb0_1 = tmp1_elvis_lhs == null ? newInstance(this.mb0_1.fax()(initialValue)) : tmp1_elvis_lhs;
    this.sb0_1 = new Long(-1, -1);
    this.tb0_1 = null;
  }
  protoOf(TargetBasedAnimation).vb0 = function () {
    return this.mb0_1;
  };
  protoOf(TargetBasedAnimation).wb0 = function () {
    return this.ob0_1;
  };
  protoOf(TargetBasedAnimation).max = function () {
    return this.nb0_1;
  };
  protoOf(TargetBasedAnimation).xb0 = function () {
    return this.lb0_1.xb0();
  };
  protoOf(TargetBasedAnimation).yb0 = function (playTimeNanos) {
    var tmp;
    if (!this.ab1(playTimeNanos)) {
      // Inline function 'kotlin.let' call
      var it = this.lb0_1.zb0(playTimeNanos, this.pb0_1, this.qb0_1, this.rb0_1);
      var inductionVariable = 0;
      var last = it.gax();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.core.checkPrecondition' call
          if (!!isNaN_0(it.hax(i))) {
            var tmp$ret$0 = 'AnimationVector cannot contain a NaN. ' + toString(it) + '. Animation: ' + this.toString() + ',' + (' playTimeNanos: ' + playTimeNanos.toString());
            throwIllegalStateException(tmp$ret$0);
          }
        }
         while (inductionVariable < last);
      tmp = this.mb0_1.jax()(it);
    } else {
      tmp = this.max();
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).bb1 = function () {
    if (compare(this.sb0_1, new Long(0, 0)) < 0) {
      this.sb0_1 = this.lb0_1.cb1(this.pb0_1, this.qb0_1, this.rb0_1);
    }
    return this.sb0_1;
  };
  protoOf(TargetBasedAnimation).db1 = function (playTimeNanos) {
    var tmp;
    if (!this.ab1(playTimeNanos)) {
      tmp = this.lb0_1.eb1(playTimeNanos, this.pb0_1, this.qb0_1, this.rb0_1);
    } else {
      tmp = _get_endVelocity__lqkp53(this);
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).toString = function () {
    return 'TargetBasedAnimation: ' + toString_0(this.wb0()) + ' -> ' + toString_0(this.max()) + ',' + ('initial velocity: ' + toString(this.rb0_1) + ', duration: ' + get_durationMillis(this).toString() + ' ms,') + ('animationSpec: ' + toString(this.lb0_1));
  };
  function TargetBasedAnimation_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocity) {
    return TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, typeConverter.fax()(initialVelocity));
  }
  function DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, $this) {
    DecayAnimation.call($this, animationSpec.kb0(typeConverter), typeConverter, initialValue, initialVelocityVector);
    return $this;
  }
  function DecayAnimation_init_$Create$(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    return DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, objectCreate(protoOf(DecayAnimation)));
  }
  function DecayAnimation(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    this.fb1_1 = animationSpec;
    this.gb1_1 = typeConverter;
    this.hb1_1 = initialValue;
    this.ib1_1 = this.gb1_1.fax()(this.hb1_1);
    this.jb1_1 = copy_1(initialVelocityVector);
    this.lb1_1 = this.gb1_1.jax()(this.fb1_1.ob1(this.ib1_1, initialVelocityVector));
    this.nb1_1 = false;
    this.mb1_1 = this.fb1_1.pb1(this.ib1_1, initialVelocityVector);
    this.kb1_1 = copy_1(this.fb1_1.qb1(this.mb1_1, this.ib1_1, initialVelocityVector));
    var inductionVariable = 0;
    var last = this.kb1_1.gax();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.kb1_1.iax(i, coerceIn(this.kb1_1.hax(i), -this.fb1_1.rb1(), this.fb1_1.rb1()));
      }
       while (inductionVariable < last);
  }
  protoOf(DecayAnimation).vb0 = function () {
    return this.gb1_1;
  };
  protoOf(DecayAnimation).max = function () {
    return this.lb1_1;
  };
  protoOf(DecayAnimation).bb1 = function () {
    return this.mb1_1;
  };
  protoOf(DecayAnimation).xb0 = function () {
    return this.nb1_1;
  };
  protoOf(DecayAnimation).yb0 = function (playTimeNanos) {
    if (!this.ab1(playTimeNanos)) {
      return this.gb1_1.jax()(this.fb1_1.sb1(playTimeNanos, this.ib1_1, this.jb1_1));
    } else {
      return this.lb1_1;
    }
  };
  protoOf(DecayAnimation).db1 = function (playTimeNanos) {
    if (!this.ab1(playTimeNanos)) {
      return this.fb1_1.qb1(playTimeNanos, this.ib1_1, this.jb1_1);
    } else {
      return this.kb1_1;
    }
  };
  function Animation() {
  }
  function get_durationMillis(_this__u8e3s4) {
    return divide(_this__u8e3s4.bb1(), new Long(1000000, 0));
  }
  var AnimationEndReason_BoundReached_instance;
  var AnimationEndReason_Finished_instance;
  var AnimationEndReason_entriesInitialized;
  function AnimationEndReason_initEntries() {
    if (AnimationEndReason_entriesInitialized)
      return Unit_instance;
    AnimationEndReason_entriesInitialized = true;
    AnimationEndReason_BoundReached_instance = new AnimationEndReason('BoundReached', 0);
    AnimationEndReason_Finished_instance = new AnimationEndReason('Finished', 1);
  }
  function AnimationEndReason(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimationEndReason_BoundReached_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_BoundReached_instance;
  }
  function AnimationEndReason_Finished_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_Finished_instance;
  }
  var androidx_compose_animation_core_AnimationConstants$stable;
  var androidx_compose_animation_core_TweenSpec$stable;
  var androidx_compose_animation_core_SpringSpec$stable;
  var androidx_compose_animation_core_ArcAnimationSpec$stable;
  var androidx_compose_animation_core_RepeatableSpec$stable;
  var androidx_compose_animation_core_InfiniteRepeatableSpec$stable;
  var androidx_compose_animation_core_SnapSpec$stable;
  var androidx_compose_animation_core_KeyframesSpecBaseConfig$stable;
  var androidx_compose_animation_core_KeyframeBaseEntity$stable;
  var androidx_compose_animation_core_KeyframesSpec_KeyframesSpecConfig$stable;
  var androidx_compose_animation_core_KeyframesSpec_KeyframeEntity$stable;
  var androidx_compose_animation_core_KeyframesSpec$stable;
  var androidx_compose_animation_core_KeyframesWithSplineSpec_KeyframesWithSplineSpecConfig$stable;
  var androidx_compose_animation_core_KeyframesWithSplineSpec$stable;
  function FiniteAnimationSpec() {
  }
  function SpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    dampingRatio = dampingRatio === VOID ? 1.0 : dampingRatio;
    stiffness = stiffness === VOID ? 1500.0 : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    this.gaz_1 = dampingRatio;
    this.haz_1 = stiffness;
    this.iaz_1 = visibilityThreshold;
  }
  protoOf(SpringSpec).kb0 = function (converter) {
    return VectorizedSpringSpec_init_$Create$(this.gaz_1, this.haz_1, convert(converter, this.iaz_1));
  };
  protoOf(SpringSpec).equals = function (other) {
    var tmp;
    if (other instanceof SpringSpec) {
      tmp = (other.gaz_1 === this.gaz_1 && other.haz_1 === this.haz_1 && equals(other.iaz_1, this.iaz_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SpringSpec).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.iaz_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(imul(tmp$ret$0, 31) + getNumberHashCode(this.gaz_1) | 0, 31) + getNumberHashCode(this.haz_1) | 0;
  };
  function spring(dampingRatio, stiffness, visibilityThreshold) {
    dampingRatio = dampingRatio === VOID ? 1.0 : dampingRatio;
    stiffness = stiffness === VOID ? 1500.0 : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    return new SpringSpec(dampingRatio, stiffness, visibilityThreshold);
  }
  function TweenSpec(durationMillis, delay, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.tb1_1 = durationMillis;
    this.ub1_1 = delay;
    this.vb1_1 = easing;
  }
  protoOf(TweenSpec).kb0 = function (converter) {
    return new VectorizedTweenSpec(this.tb1_1, this.ub1_1, this.vb1_1);
  };
  protoOf(TweenSpec).equals = function (other) {
    var tmp;
    if (other instanceof TweenSpec) {
      tmp = (other.tb1_1 === this.tb1_1 && other.ub1_1 === this.ub1_1 && equals(other.vb1_1, this.vb1_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TweenSpec).hashCode = function () {
    return imul(imul(this.tb1_1, 31) + hashCode(this.vb1_1) | 0, 31) + this.ub1_1 | 0;
  };
  function tween(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    return new TweenSpec(durationMillis, delayMillis, easing);
  }
  function convert(_this__u8e3s4, data) {
    if (data == null) {
      return null;
    } else {
      return _this__u8e3s4.fax()(data);
    }
  }
  function delayed(animationSpec, startDelayNanos) {
    return new StartDelayAnimationSpec(animationSpec, startDelayNanos);
  }
  function StartDelayAnimationSpec(animationSpec, startDelayNanos) {
    this.wb1_1 = animationSpec;
    this.xb1_1 = startDelayNanos;
  }
  protoOf(StartDelayAnimationSpec).kb0 = function (converter) {
    var vecSpec = this.wb1_1.kb0(converter);
    return new StartDelayVectorizedAnimationSpec(vecSpec, this.xb1_1);
  };
  protoOf(StartDelayAnimationSpec).hashCode = function () {
    return imul(31, hashCode(this.wb1_1)) + this.xb1_1.hashCode() | 0;
  };
  protoOf(StartDelayAnimationSpec).equals = function (other) {
    if (!(other instanceof StartDelayAnimationSpec)) {
      return false;
    }
    return equalsLong(other.xb1_1, this.xb1_1) && equals(other.wb1_1, this.wb1_1);
  };
  function StartDelayVectorizedAnimationSpec(vectorizedAnimationSpec, startDelayNanos) {
    this.yb1_1 = vectorizedAnimationSpec;
    this.zb1_1 = startDelayNanos;
  }
  protoOf(StartDelayVectorizedAnimationSpec).xb0 = function () {
    return this.yb1_1.xb0();
  };
  protoOf(StartDelayVectorizedAnimationSpec).cb1 = function (initialValue, targetValue, initialVelocity) {
    return add(this.yb1_1.cb1(initialValue, targetValue, initialVelocity), this.zb1_1);
  };
  protoOf(StartDelayVectorizedAnimationSpec).eb1 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var tmp;
    if (compare(playTimeNanos, this.zb1_1) < 0) {
      tmp = initialVelocity;
    } else {
      tmp = this.yb1_1.eb1(subtract(playTimeNanos, this.zb1_1), initialValue, targetValue, initialVelocity);
    }
    return tmp;
  };
  protoOf(StartDelayVectorizedAnimationSpec).zb0 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var tmp;
    if (compare(playTimeNanos, this.zb1_1) < 0) {
      tmp = initialValue;
    } else {
      tmp = this.yb1_1.zb0(subtract(playTimeNanos, this.zb1_1), initialValue, targetValue, initialVelocity);
    }
    return tmp;
  };
  protoOf(StartDelayVectorizedAnimationSpec).hashCode = function () {
    return imul(31, hashCode(this.yb1_1)) + this.zb1_1.hashCode() | 0;
  };
  protoOf(StartDelayVectorizedAnimationSpec).equals = function (other) {
    if (!(other instanceof StartDelayVectorizedAnimationSpec)) {
      return false;
    }
    return equalsLong(other.zb1_1, this.zb1_1) && equals(other.yb1_1, this.yb1_1);
  };
  var androidx_compose_animation_core_AnimationState$stable;
  var androidx_compose_animation_core_AnimationScope$stable;
  function AnimationState$_get_value_$ref_fgr73c() {
    return function (p0) {
      return p0.v1();
    };
  }
  function AnimationState$_set_value_$ref_q9ieh8() {
    return function (p0, p1) {
      p0.aax(p1);
      return Unit_instance;
    };
  }
  function AnimationState$_get_value_$ref_fgr73c_0() {
    return function (p0) {
      return p0.v1();
    };
  }
  function AnimationState$_set_value_$ref_q9ieh8_0() {
    return function (p0, p1) {
      p0.aax(p1);
      return Unit_instance;
    };
  }
  function AnimationState(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    this.uaw_1 = typeConverter;
    this.vaw_1 = mutableStateOf(initialValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_1(initialVelocityVector);
    tmp.waw_1 = tmp1_elvis_lhs == null ? createZeroVectorFrom(this.uaw_1, initialValue) : tmp1_elvis_lhs;
    this.xaw_1 = lastFrameTimeNanos;
    this.yaw_1 = finishedTimeNanos;
    this.zaw_1 = isRunning;
  }
  protoOf(AnimationState).aax = function (_set____db54di) {
    var tmp0 = this.vaw_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationState$_get_value_$ref_fgr73c_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AnimationState$_set_value_$ref_q9ieh8_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationState).v1 = function () {
    var tmp0 = this.vaw_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationState$_get_value_$ref_fgr73c();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AnimationState$_set_value_$ref_q9ieh8());
    return tmp0.v1();
  };
  protoOf(AnimationState).yay = function () {
    return this.uaw_1.jax()(this.waw_1);
  };
  protoOf(AnimationState).toString = function () {
    return 'AnimationState(' + ('value=' + toString_0(this.v1()) + ', ') + ('velocity=' + toString_0(this.yay()) + ', ') + ('isRunning=' + this.zaw_1 + ', ') + ('lastFrameTimeNanos=' + this.xaw_1.toString() + ', ') + ('finishedTimeNanos=' + this.yaw_1.toString()) + ')';
  };
  function AnimationState_0(initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    return new AnimationState(get_VectorConverter(FloatCompanionObject_instance), initialValue, AnimationVector(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function AnimationScope$_get_value_$ref_u38x5x() {
    return function (p0) {
      return p0.v1();
    };
  }
  function AnimationScope$_set_value_$ref_bn0oen() {
    return function (p0, p1) {
      p0.aax(p1);
      return Unit_instance;
    };
  }
  function AnimationScope$_get_value_$ref_u38x5x_0() {
    return function (p0) {
      return p0.v1();
    };
  }
  function AnimationScope$_set_value_$ref_bn0oen_0() {
    return function (p0, p1) {
      p0.aax(p1);
      return Unit_instance;
    };
  }
  function AnimationScope$_get_isRunning_$ref_gxcmg9() {
    return function (p0) {
      return p0.lax();
    };
  }
  function AnimationScope$_set_isRunning_$ref_1pl3xx() {
    return function (p0, p1) {
      p0.ab2(p1);
      return Unit_instance;
    };
  }
  function AnimationScope$_get_isRunning_$ref_gxcmg9_0() {
    return function (p0) {
      return p0.lax();
    };
  }
  function AnimationScope$_set_isRunning_$ref_1pl3xx_0() {
    return function (p0, p1) {
      p0.ab2(p1);
      return Unit_instance;
    };
  }
  function AnimationScope(initialValue, typeConverter, initialVelocityVector, lastFrameTimeNanos, targetValue, startTimeNanos, isRunning, onCancel) {
    this.law_1 = typeConverter;
    this.maw_1 = targetValue;
    this.naw_1 = startTimeNanos;
    this.oaw_1 = onCancel;
    this.paw_1 = mutableStateOf(initialValue);
    this.qaw_1 = copy_1(initialVelocityVector);
    this.raw_1 = lastFrameTimeNanos;
    this.saw_1 = new Long(0, -2147483648);
    this.taw_1 = mutableStateOf(isRunning);
  }
  protoOf(AnimationScope).aax = function (_set____db54di) {
    var tmp0 = this.paw_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationScope$_get_value_$ref_u38x5x_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AnimationScope$_set_value_$ref_bn0oen_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationScope).v1 = function () {
    var tmp0 = this.paw_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationScope$_get_value_$ref_u38x5x();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AnimationScope$_set_value_$ref_bn0oen());
    return tmp0.v1();
  };
  protoOf(AnimationScope).ab2 = function (_set____db54di) {
    var tmp0 = this.taw_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationScope$_get_isRunning_$ref_gxcmg9_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, AnimationScope$_set_isRunning_$ref_1pl3xx_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationScope).lax = function () {
    var tmp0 = this.taw_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationScope$_get_isRunning_$ref_gxcmg9();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, AnimationScope$_set_isRunning_$ref_1pl3xx());
    return tmp0.v1();
  };
  protoOf(AnimationScope).yay = function () {
    return this.law_1.jax()(this.qaw_1);
  };
  protoOf(AnimationScope).bax = function () {
    this.ab2(false);
    this.oaw_1();
  };
  function copy(_this__u8e3s4, value, velocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.v1() : value;
    velocity = velocity === VOID ? _this__u8e3s4.waw_1.bb2_1 : velocity;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.xaw_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.yaw_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.zaw_1 : isRunning;
    return new AnimationState(_this__u8e3s4.uaw_1, value, AnimationVector(velocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function AnimationState_1(typeConverter, initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    return new AnimationState(typeConverter, initialValue, typeConverter.fax()(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function copy_0(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.v1() : value;
    velocityVector = velocityVector === VOID ? copy_1(_this__u8e3s4.waw_1) : velocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.xaw_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.yaw_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.zaw_1 : isRunning;
    return new AnimationState(_this__u8e3s4.uaw_1, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function createZeroVectorFrom(_this__u8e3s4, value) {
    // Inline function 'kotlin.also' call
    var this_0 = _this__u8e3s4.fax()(value);
    this_0.kax();
    return this_0;
  }
  var androidx_compose_animation_core_AnimationVector$stable;
  var androidx_compose_animation_core_AnimationVector1D$stable;
  var androidx_compose_animation_core_AnimationVector2D$stable;
  var androidx_compose_animation_core_AnimationVector3D$stable;
  var androidx_compose_animation_core_AnimationVector4D$stable;
  function AnimationVector1D(initVal) {
    AnimationVector_3.call(this);
    this.bb2_1 = initVal;
    this.cb2_1 = 1;
  }
  protoOf(AnimationVector1D).kax = function () {
    this.bb2_1 = 0.0;
  };
  protoOf(AnimationVector1D).db2 = function () {
    return new AnimationVector1D(0.0);
  };
  protoOf(AnimationVector1D).hax = function (index) {
    if (index === 0) {
      return this.bb2_1;
    } else {
      return 0.0;
    }
  };
  protoOf(AnimationVector1D).iax = function (index, value) {
    if (index === 0) {
      this.bb2_1 = value;
    }
  };
  protoOf(AnimationVector1D).gax = function () {
    return this.cb2_1;
  };
  protoOf(AnimationVector1D).toString = function () {
    return 'AnimationVector1D: value = ' + this.bb2_1;
  };
  protoOf(AnimationVector1D).equals = function (other) {
    var tmp;
    if (other instanceof AnimationVector1D) {
      tmp = other.bb2_1 === this.bb2_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector1D).hashCode = function () {
    return getNumberHashCode(this.bb2_1);
  };
  function AnimationVector4D(v1, v2, v3, v4) {
    AnimationVector_3.call(this);
    this.eb2_1 = v1;
    this.fb2_1 = v2;
    this.gb2_1 = v3;
    this.hb2_1 = v4;
    this.ib2_1 = 4;
  }
  protoOf(AnimationVector4D).kax = function () {
    this.eb2_1 = 0.0;
    this.fb2_1 = 0.0;
    this.gb2_1 = 0.0;
    this.hb2_1 = 0.0;
  };
  protoOf(AnimationVector4D).db2 = function () {
    return new AnimationVector4D(0.0, 0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector4D).hax = function (index) {
    switch (index) {
      case 0:
        return this.eb2_1;
      case 1:
        return this.fb2_1;
      case 2:
        return this.gb2_1;
      case 3:
        return this.hb2_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector4D).iax = function (index, value) {
    switch (index) {
      case 0:
        this.eb2_1 = value;
        break;
      case 1:
        this.fb2_1 = value;
        break;
      case 2:
        this.gb2_1 = value;
        break;
      case 3:
        this.hb2_1 = value;
        break;
    }
  };
  protoOf(AnimationVector4D).gax = function () {
    return this.ib2_1;
  };
  protoOf(AnimationVector4D).toString = function () {
    return 'AnimationVector4D: v1 = ' + this.eb2_1 + ', v2 = ' + this.fb2_1 + ', v3 = ' + this.gb2_1 + ', v4 = ' + this.hb2_1;
  };
  protoOf(AnimationVector4D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof AnimationVector4D) {
      tmp_2 = other.eb2_1 === this.eb2_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.fb2_1 === this.fb2_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.gb2_1 === this.gb2_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.hb2_1 === this.hb2_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector4D).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.eb2_1), 31) + getNumberHashCode(this.fb2_1) | 0, 31) + getNumberHashCode(this.gb2_1) | 0, 31) + getNumberHashCode(this.hb2_1) | 0;
  };
  function AnimationVector2D(v1, v2) {
    AnimationVector_3.call(this);
    this.jb2_1 = v1;
    this.kb2_1 = v2;
    this.lb2_1 = 2;
  }
  protoOf(AnimationVector2D).kax = function () {
    this.jb2_1 = 0.0;
    this.kb2_1 = 0.0;
  };
  protoOf(AnimationVector2D).db2 = function () {
    return new AnimationVector2D(0.0, 0.0);
  };
  protoOf(AnimationVector2D).hax = function (index) {
    switch (index) {
      case 0:
        return this.jb2_1;
      case 1:
        return this.kb2_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector2D).iax = function (index, value) {
    if (index === 0)
      this.jb2_1 = value;
    else if (index === 1)
      this.kb2_1 = value;
  };
  protoOf(AnimationVector2D).gax = function () {
    return this.lb2_1;
  };
  protoOf(AnimationVector2D).toString = function () {
    return 'AnimationVector2D: v1 = ' + this.jb2_1 + ', v2 = ' + this.kb2_1;
  };
  protoOf(AnimationVector2D).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AnimationVector2D) {
      tmp_0 = other.jb2_1 === this.jb2_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.kb2_1 === this.kb2_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector2D).hashCode = function () {
    return imul(getNumberHashCode(this.jb2_1), 31) + getNumberHashCode(this.kb2_1) | 0;
  };
  function AnimationVector(v1) {
    return new AnimationVector1D(v1);
  }
  function AnimationVector_0(v1, v2) {
    return new AnimationVector2D(v1, v2);
  }
  function AnimationVector3D(v1, v2, v3) {
    AnimationVector_3.call(this);
    this.mb2_1 = v1;
    this.nb2_1 = v2;
    this.ob2_1 = v3;
    this.pb2_1 = 3;
  }
  protoOf(AnimationVector3D).kax = function () {
    this.mb2_1 = 0.0;
    this.nb2_1 = 0.0;
    this.ob2_1 = 0.0;
  };
  protoOf(AnimationVector3D).db2 = function () {
    return new AnimationVector3D(0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector3D).hax = function (index) {
    switch (index) {
      case 0:
        return this.mb2_1;
      case 1:
        return this.nb2_1;
      case 2:
        return this.ob2_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector3D).iax = function (index, value) {
    switch (index) {
      case 0:
        this.mb2_1 = value;
        break;
      case 1:
        this.nb2_1 = value;
        break;
      case 2:
        this.ob2_1 = value;
        break;
    }
  };
  protoOf(AnimationVector3D).gax = function () {
    return this.pb2_1;
  };
  protoOf(AnimationVector3D).toString = function () {
    return 'AnimationVector3D: v1 = ' + this.mb2_1 + ', v2 = ' + this.nb2_1 + ', v3 = ' + this.ob2_1;
  };
  protoOf(AnimationVector3D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof AnimationVector3D) {
      tmp_1 = other.mb2_1 === this.mb2_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.nb2_1 === this.nb2_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.ob2_1 === this.ob2_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector3D).hashCode = function () {
    return imul(imul(getNumberHashCode(this.mb2_1), 31) + getNumberHashCode(this.nb2_1) | 0, 31) + getNumberHashCode(this.ob2_1) | 0;
  };
  function AnimationVector_1(v1, v2, v3) {
    return new AnimationVector3D(v1, v2, v3);
  }
  function AnimationVector_2(v1, v2, v3, v4) {
    return new AnimationVector4D(v1, v2, v3, v4);
  }
  function AnimationVector_3() {
  }
  function copy_1(_this__u8e3s4) {
    var newVector = newInstance(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.gax();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.iax(i, _this__u8e3s4.hax(i));
      }
       while (inductionVariable < last);
    return newVector;
  }
  function newInstance(_this__u8e3s4) {
    var tmp = _this__u8e3s4.db2();
    return tmp instanceof AnimationVector_3 ? tmp : THROW_CCE();
  }
  function copyFrom(_this__u8e3s4, source) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.gax();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.iax(i, source.hax(i));
      }
       while (inductionVariable < last);
  }
  function get_OurPercentCache() {
    _init_properties_ArcSpline_kt__f15lqp();
    return OurPercentCache;
  }
  var OurPercentCache;
  var androidx_compose_animation_core_ArcSpline_Arc$stable;
  var androidx_compose_animation_core_ArcSpline$stable;
  function Arc(mode, time1, time2, x1, y1, x2, y2) {
    this.qb2_1 = time1;
    this.rb2_1 = time2;
    this.sb2_1 = x1;
    this.tb2_1 = y1;
    this.ub2_1 = x2;
    this.vb2_1 = y2;
    this.wb2_1 = 0.0;
    this.xb2_1 = 0.0;
    this.yb2_1 = 0.0;
    var dx = this.ub2_1 - this.sb2_1;
    var dy = this.vb2_1 - this.tb2_1;
    var isVertical;
    switch (mode) {
      case 1:
        isVertical = true;
        break;
      case 5:
        isVertical = dy < 0;
        break;
      case 4:
        isVertical = dy > 0;
        break;
      default:
        isVertical = false;
        break;
    }
    this.cb3_1 = isVertical ? -1.0 : 1.0;
    this.ab3_1 = 1 / (this.rb2_1 - this.qb2_1);
    this.zb2_1 = new Float32Array(101);
    var isLinear = mode === 3;
    var tmp;
    var tmp_0;
    if (isLinear) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.math.abs' call
      tmp_0 = Math.abs(dx) < 0.001;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.math.abs' call
      tmp = Math.abs(dy) < 0.001;
    }
    if (tmp) {
      isLinear = true;
      var tmp_1 = this;
      // Inline function 'kotlin.math.hypot' call
      tmp_1.wb2_1 = hypot(dy, dx);
      this.bb3_1 = this.wb2_1 * this.ab3_1;
      this.gb3_1 = dx * this.ab3_1;
      this.hb3_1 = dy * this.ab3_1;
      this.db3_1 = NaN;
      this.eb3_1 = NaN;
    } else {
      this.db3_1 = dx * this.cb3_1;
      this.eb3_1 = dy * -this.cb3_1;
      this.gb3_1 = isVertical ? this.ub2_1 : this.sb2_1;
      this.hb3_1 = isVertical ? this.tb2_1 : this.vb2_1;
      this.ib3(this.sb2_1, this.tb2_1, this.ub2_1, this.vb2_1);
      this.bb3_1 = this.wb2_1 * this.ab3_1;
    }
    this.fb3_1 = isLinear;
  }
  protoOf(Arc).ib3 = function (x1, y1, x2, y2) {
    var a = x2 - x1;
    var b = y1 - y2;
    var lx = 0.0;
    var ly = b;
    var dist = 0.0;
    var ourPercent = get_OurPercentCache();
    var lastIndex = ourPercent.length - 1 | 0;
    var lastIndexFloat = lastIndex;
    var lut = this.zb2_1;
    var inductionVariable = 1;
    if (inductionVariable <= lastIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.toRadians' call
        var angle = 90.0 * i / lastIndex * (3.141592653589793 / 180.0);
        // Inline function 'kotlin.math.sin' call
        var s = Math.sin(angle);
        // Inline function 'kotlin.math.cos' call
        var c = Math.cos(angle);
        var px = a * s;
        var py = b * c;
        var tmp = dist;
        var tmp0 = px - lx;
        // Inline function 'kotlin.math.hypot' call
        var y = py - ly;
        dist = tmp + hypot(tmp0, y);
        ourPercent[i] = dist;
        lx = px;
        ly = py;
      }
       while (!(i === lastIndex));
    this.wb2_1 = dist;
    var inductionVariable_0 = 1;
    if (inductionVariable_0 <= lastIndex)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _index_0__fvwizt = i_0;
        ourPercent[_index_0__fvwizt] = ourPercent[_index_0__fvwizt] / dist;
      }
       while (!(i_0 === lastIndex));
    var lutLastIndex = 100;
    var inductionVariable_1 = 0;
    var last = lut.length - 1 | 0;
    if (inductionVariable_1 <= last)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var pos = i_1 / lutLastIndex;
        var index = binarySearch(ourPercent, pos);
        if (index >= 0) {
          lut[i_1] = index / lastIndexFloat;
        } else if (index === -1) {
          lut[i_1] = 0.0;
        } else {
          var p1 = (-index | 0) - 2 | 0;
          var p2 = (-index | 0) - 1 | 0;
          var ans = (p1 + (pos - ourPercent[p1]) / (ourPercent[p2] - ourPercent[p1])) / lastIndexFloat;
          lut[i_1] = ans;
        }
      }
       while (inductionVariable_1 <= last);
  };
  function ArcSpline(arcModes, timePoints, y) {
    this.kb3_1 = true;
    var mode = {_v: 1};
    var last = {_v: 1};
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = timePoints.length - 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      switch (arcModes[tmp_3]) {
        case 1:
          mode._v = 1;
          last._v = mode._v;
          break;
        case 2:
          mode._v = 2;
          last._v = mode._v;
          break;
        case 3:
          mode._v = last._v === 1 ? 2 : 1;
          last._v = mode._v;
          break;
        case 0:
          mode._v = 3;
          break;
        case 5:
          mode._v = 5;
          break;
        case 4:
          mode._v = 4;
          break;
      }
      var yArray = y[tmp_3];
      var yArray1 = y[tmp_3 + 1 | 0];
      var timeArray = timePoints[tmp_3];
      var timeArray1 = timePoints[tmp_3 + 1 | 0];
      var dim = (yArray.length / 2 | 0) + (yArray.length % 2 | 0) | 0;
      var tmp_4 = 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_5 = Array(dim);
      while (tmp_4 < dim) {
        var tmp_6 = tmp_4;
        var k = imul(tmp_6, 2);
        tmp_5[tmp_6] = new Arc(mode._v, timeArray, timeArray1, yArray[k], yArray[k + 1 | 0], yArray1[k], yArray1[k + 1 | 0]);
        tmp_4 = tmp_4 + 1 | 0;
      }
      tmp_2[tmp_3] = tmp_5;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.jb3_1 = tmp_2;
  }
  var properties_initialized_ArcSpline_kt_jqay4z;
  function _init_properties_ArcSpline_kt__f15lqp() {
    if (!properties_initialized_ArcSpline_kt_jqay4z) {
      properties_initialized_ArcSpline_kt_jqay4z = true;
      OurPercentCache = new Float32Array(91);
      androidx_compose_animation_core_ArcSpline_Arc$stable = 8;
      androidx_compose_animation_core_ArcSpline$stable = 8;
    }
  }
  function generateDecayAnimationSpec(_this__u8e3s4) {
    return new DecayAnimationSpecImpl(_this__u8e3s4);
  }
  function DecayAnimationSpecImpl(floatDecaySpec) {
    this.lb3_1 = floatDecaySpec;
  }
  protoOf(DecayAnimationSpecImpl).kb0 = function (typeConverter) {
    return new VectorizedFloatDecaySpec(this.lb3_1);
  };
  function _get_valueVector__r10idf($this) {
    var tmp = $this.nb3_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl($this) {
    var tmp = $this.ob3_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_targetVector__vn6c89($this) {
    var tmp = $this.pb3_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('targetVector');
    }
  }
  function VectorizedFloatDecaySpec(floatDecaySpec) {
    this.mb3_1 = floatDecaySpec;
    this.qb3_1 = this.mb3_1.rb1();
  }
  protoOf(VectorizedFloatDecaySpec).rb1 = function () {
    return this.qb3_1;
  };
  protoOf(VectorizedFloatDecaySpec).sb1 = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.nb3_1 == null)) {
      this.nb3_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf(this).gax();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf(this).iax(i, this.mb3_1.rb3(playTimeNanos, initialValue.hax(i), initialVelocity.hax(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf(this);
  };
  protoOf(VectorizedFloatDecaySpec).pb1 = function (initialValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    if (!!(this.ob3_1 == null)) {
      this.ob3_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).gax();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0 = maxDuration;
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = this.mb3_1.sb3(initialValue.hax(i), initialVelocity.hax(i));
        maxDuration = compare(tmp0, b) >= 0 ? tmp0 : b;
      }
       while (inductionVariable < last);
    return maxDuration;
  };
  protoOf(VectorizedFloatDecaySpec).qb1 = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.ob3_1 == null)) {
      this.ob3_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).gax();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl(this).iax(i, this.mb3_1.tb3(playTimeNanos, initialValue.hax(i), initialVelocity.hax(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl(this);
  };
  protoOf(VectorizedFloatDecaySpec).ob1 = function (initialValue, initialVelocity) {
    if (!!(this.pb3_1 == null)) {
      this.pb3_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_targetVector__vn6c89(this).gax();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_targetVector__vn6c89(this).iax(i, this.mb3_1.ub3(initialValue.hax(i), initialVelocity.hax(i)));
      }
       while (inductionVariable < last);
    return _get_targetVector__vn6c89(this);
  };
  var androidx_compose_animation_core_DeferredTargetAnimation$stable;
  function get_FastOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutSlowInEasing;
  }
  var FastOutSlowInEasing;
  function get_LinearOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearOutSlowInEasing;
  }
  var LinearOutSlowInEasing;
  var FastOutLinearInEasing;
  function get_LinearEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearEasing;
  }
  var LinearEasing;
  var androidx_compose_animation_core_CubicBezierEasing$stable;
  function throwNoSolution($this, fraction) {
    throw IllegalArgumentException_init_$Create$('The cubic curve with parameters (' + $this.vb3_1 + ', ' + $this.wb3_1 + ', ' + $this.xb3_1 + ', ' + $this.yb3_1 + ') has no solution at ' + fraction);
  }
  function CubicBezierEasing(a, b, c, d) {
    this.vb3_1 = a;
    this.wb3_1 = b;
    this.xb3_1 = c;
    this.yb3_1 = d;
    // Inline function 'androidx.compose.animation.core.requirePrecondition' call
    if (!(!isNaN_0(this.vb3_1) && !isNaN_0(this.wb3_1) && !isNaN_0(this.xb3_1) && !isNaN_0(this.yb3_1))) {
      var tmp$ret$0 = 'Parameters to CubicBezierEasing cannot be NaN. Actual parameters are: ' + this.vb3_1 + ', ' + this.wb3_1 + ', ' + this.xb3_1 + ', ' + this.yb3_1 + '.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var roots = new Float32Array(5);
    var extrema = computeCubicVerticalBounds(0.0, this.wb3_1, this.yb3_1, 1.0, roots, 0);
    var tmp = this;
    // Inline function 'androidx.collection.FloatFloatPair.first' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(_FloatFloatPair___get_packedValue__impl__5lczxp(extrema), 32));
    tmp.zb3_1 = floatFromBits(bits);
    var tmp_0 = this;
    // Inline function 'androidx.collection.FloatFloatPair.second' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(_FloatFloatPair___get_packedValue__impl__5lczxp(extrema), new Long(-1, 0)));
    tmp_0.ab4_1 = floatFromBits(bits_0);
  }
  protoOf(CubicBezierEasing).bb4 = function (fraction) {
    var tmp;
    if (fraction > 0.0 && fraction < 1.0) {
      // Inline function 'kotlin.math.max' call
      var b = 1.1920929E-7;
      var f = Math.max(fraction, b);
      var t = findFirstCubicRoot(0.0 - f, this.vb3_1 - f, this.xb3_1 - f, 1.0 - f);
      if (isNaN_0(t)) {
        throwNoSolution(this, fraction);
      }
      var tmp0 = evaluateCubic(this.wb3_1, this.yb3_1, t);
      var tmp2 = this.zb3_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue = this.ab4_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_0 = tmp0 < tmp2 ? tmp2 : tmp0;
      tmp = this_0 > maximumValue ? maximumValue : this_0;
    } else {
      tmp = fraction;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof CubicBezierEasing) {
      tmp_2 = this.vb3_1 === other.vb3_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.wb3_1 === other.wb3_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.xb3_1 === other.xb3_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.yb3_1 === other.yb3_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.vb3_1), 31) + getNumberHashCode(this.wb3_1) | 0, 31) + getNumberHashCode(this.xb3_1) | 0, 31) + getNumberHashCode(this.yb3_1) | 0;
  };
  protoOf(CubicBezierEasing).toString = function () {
    return 'CubicBezierEasing(a=' + this.vb3_1 + ', b=' + this.wb3_1 + ', c=' + this.xb3_1 + ', d=' + this.yb3_1 + ')';
  };
  function Easing() {
  }
  function sam$androidx_compose_animation_core_Easing$0(function_0) {
    this.cb4_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0).bb4 = function (fraction) {
    return this.cb4_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0).v2 = function () {
    return this.cb4_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0).hashCode = function () {
    return hashCode(this.v2());
  };
  function LinearEasing$lambda(fraction) {
    _init_properties_Easing_kt__v6fq45();
    return fraction;
  }
  var properties_initialized_Easing_kt_af4f4d;
  function _init_properties_Easing_kt__v6fq45() {
    if (!properties_initialized_Easing_kt_af4f4d) {
      properties_initialized_Easing_kt_af4f4d = true;
      FastOutSlowInEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
      LinearOutSlowInEasing = new CubicBezierEasing(0.0, 0.0, 0.2, 1.0);
      FastOutLinearInEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      var tmp = LinearEasing$lambda;
      LinearEasing = new sam$androidx_compose_animation_core_Easing$0(tmp);
      androidx_compose_animation_core_CubicBezierEasing$stable = 0;
    }
  }
  var androidx_compose_animation_core_FloatSpringSpec$stable;
  var androidx_compose_animation_core_FloatTweenSpec$stable;
  function FloatTweenSpec(duration, delay, easing) {
    duration = duration === VOID ? 300 : duration;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.db4_1 = duration;
    this.eb4_1 = delay;
    this.fb4_1 = easing;
    this.gb4_1 = multiply(numberToLong(this.db4_1), new Long(1000000, 0));
    this.hb4_1 = multiply(numberToLong(this.eb4_1), new Long(1000000, 0));
  }
  protoOf(FloatTweenSpec).ib4 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    // Inline function 'androidx.compose.animation.core.FloatTweenSpec.clampPlayTimeNanos' call
    var tmp0 = subtract(playTimeNanos, this.hb4_1);
    var tmp2 = new Long(0, 0);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = this.gb4_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = compare(tmp0, tmp2) < 0 ? tmp2 : tmp0;
    var clampedPlayTimeNanos = compare(this_0, maximumValue) > 0 ? maximumValue : this_0;
    var tmp;
    if (this.db4_1 === 0) {
      tmp = 1.0;
    } else {
      // Inline function 'kotlin.Long.div' call
      var other = toNumber(this.gb4_1);
      tmp = toNumber(clampedPlayTimeNanos) / other;
    }
    var rawFraction = tmp;
    var fraction = this.fb4_1.bb4(rawFraction);
    // Inline function 'androidx.compose.animation.core.lerp' call
    return initialValue * (1 - fraction) + targetValue * fraction;
  };
  protoOf(FloatTweenSpec).jb4 = function (initialValue, targetValue, initialVelocity) {
    return add(this.hb4_1, this.gb4_1);
  };
  protoOf(FloatTweenSpec).kb4 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    // Inline function 'androidx.compose.animation.core.FloatTweenSpec.clampPlayTimeNanos' call
    var tmp0 = subtract(playTimeNanos, this.hb4_1);
    var tmp2 = new Long(0, 0);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = this.gb4_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = compare(tmp0, tmp2) < 0 ? tmp2 : tmp0;
    var clampedPlayTimeNanos = compare(this_0, maximumValue) > 0 ? maximumValue : this_0;
    if (equalsLong(clampedPlayTimeNanos, new Long(0, 0))) {
      return initialVelocity;
    }
    var startNum = this.ib4(subtract(clampedPlayTimeNanos, new Long(1000000, 0)), initialValue, targetValue, initialVelocity);
    var endNum = this.ib4(clampedPlayTimeNanos, initialValue, targetValue, initialVelocity);
    return (endNum - startNum) * 1000.0;
  };
  protoOf(FloatTweenSpec).kb0 = function (converter) {
    return this.mb4(converter);
  };
  function FloatAnimationSpec() {
  }
  function FloatSpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    dampingRatio = dampingRatio === VOID ? 1.0 : dampingRatio;
    stiffness = stiffness === VOID ? 1500.0 : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? 0.01 : visibilityThreshold;
    this.nb4_1 = dampingRatio;
    this.ob4_1 = stiffness;
    this.pb4_1 = visibilityThreshold;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new SpringSimulation(1.0);
    this_0.ub4(this.nb4_1);
    this_0.vb4(this.ob4_1);
    tmp.qb4_1 = this_0;
  }
  protoOf(FloatSpringSpec).ib4 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    this.qb4_1.rb4_1 = targetValue;
    // Inline function 'androidx.compose.animation.core.Motion.value' call
    var this_0 = this.qb4_1.wb4(initialValue, initialVelocity, playTimeMillis);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Motion___get_packedValue__impl__qymh4n(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    return floatFromBits(bits);
  };
  protoOf(FloatSpringSpec).kb4 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    this.qb4_1.rb4_1 = targetValue;
    // Inline function 'androidx.compose.animation.core.Motion.velocity' call
    var this_0 = this.qb4_1.wb4(initialValue, initialVelocity, playTimeMillis);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _Motion___get_packedValue__impl__qymh4n(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    return floatFromBits(bits);
  };
  protoOf(FloatSpringSpec).lb4 = function (initialValue, targetValue, initialVelocity) {
    return 0.0;
  };
  protoOf(FloatSpringSpec).jb4 = function (initialValue, targetValue, initialVelocity) {
    var tmp0_stiffness = this.qb4_1.xb4();
    var tmp1_dampingRatio = this.qb4_1.tb4_1;
    var tmp2_initialDisplacement = (initialValue - targetValue) / this.pb4_1;
    var tmp3_initialVelocity = initialVelocity / this.pb4_1;
    return multiply(estimateAnimationDurationMillis(tmp0_stiffness, tmp1_dampingRatio, tmp3_initialVelocity, tmp2_initialDisplacement, 1.0), new Long(1000000, 0));
  };
  protoOf(FloatSpringSpec).kb0 = function (converter) {
    return this.mb4(converter);
  };
  var androidx_compose_animation_core_FloatExponentialDecaySpec$stable;
  function withInfiniteAnimationFrameNanos(onFrame, $completion) {
    var tmp = new $withInfiniteAnimationFrameNanosCOROUTINE$(onFrame, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation) {
    this.qb5_1 = $onFrame;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withInfiniteAnimationFrameNanos$slambda).o1s = function ($completion) {
    var tmp = this.n1s($completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(withInfiniteAnimationFrameNanos$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = withFrameNanos(this.qb5_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 2) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(withInfiniteAnimationFrameNanos$slambda).n1s = function (completion) {
    return new withInfiniteAnimationFrameNanos$slambda(this.qb5_1, completion);
  };
  function withInfiniteAnimationFrameNanos$slambda_0($onFrame, resultContinuation) {
    var i = new withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation);
    var l = function ($completion) {
      return i.o1s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $withInfiniteAnimationFrameNanosCOROUTINE$(onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gb5_1 = onFrame;
  }
  protoOf($withInfiniteAnimationFrameNanosCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            var policy = this.t8().a9(Key_instance);
            if (policy == null) {
              this.n8_1 = 2;
              suspendResult = withFrameNanos(this.gb5_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 1;
              suspendResult = policy.rb5(withInfiniteAnimationFrameNanos$slambda_0(this.gb5_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.hb5_1 = suspendResult;
            this.n8_1 = 3;
            continue $sm;
          case 2:
            this.hb5_1 = suspendResult;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            return this.hb5_1;
          case 4:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 4) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  var androidx_compose_animation_core_InfiniteTransition$stable;
  var androidx_compose_animation_core_MutationInterruptedException$stable;
  var androidx_compose_animation_core_MutatorMutex$stable;
  function Mutator(priority, job) {
    this.sb5_1 = priority;
    this.tb5_1 = job;
  }
  protoOf(Mutator).ub5 = function (other) {
    return this.sb5_1.n2(other.sb5_1) >= 0;
  };
  protoOf(Mutator).m23 = function () {
    return this.tb5_1.fx(new MutationInterruptedException());
  };
  function tryMutateOrCancel($this, mutator) {
    $l$loop: while (true) {
      var oldMutator = $this.cax_1.j13();
      if (oldMutator == null || mutator.ub5(oldMutator)) {
        if ($this.cax_1.e2p(oldMutator, mutator)) {
          if (oldMutator == null)
            null;
          else {
            oldMutator.m23();
          }
          break $l$loop;
        }
      } else
        throw CancellationException_init_$Create$('Current mutation had a higher priority');
    }
  }
  function MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation) {
    this.eb6_1 = $priority;
    this.fb6_1 = this$0;
    this.gb6_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutatorMutex$mutate$slambda).f6e = function ($this$coroutineScope, $completion) {
    var tmp = this.r1n($this$coroutineScope, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(MutatorMutex$mutate$slambda).f9 = function (p1, $completion) {
    return this.f6e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutatorMutex$mutate$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 9;
            this.kb6_1 = new Mutator(this.eb6_1, ensureNotNull(this.hb6_1.wv().a9(Key_instance_0)));
            tryMutateOrCancel(this.fb6_1, this.kb6_1);
            this.jb6_1 = this.fb6_1.dax_1;
            var tmp_0 = this;
            tmp_0.ib6_1 = null;
            this.n8_1 = 1;
            suspendResult = this.jb6_1.g1z(this.ib6_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.lb6_1 = Unit_instance;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            this.o8_1 = 8;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            this.o8_1 = 7;
            this.n8_1 = 4;
            suspendResult = this.gb6_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.mb6_1 = suspendResult;
            this.n8_1 = 5;
            continue $sm;
          case 5:
            var tmp_1 = this.mb6_1;
            this.o8_1 = 8;
            this.fb6_1.cax_1.e2p(this.kb6_1, null);
            this.lb6_1 = tmp_1;
            this.o8_1 = 9;
            this.n8_1 = 6;
            continue $sm;
          case 6:
            var tmp_2 = this.lb6_1;
            this.o8_1 = 9;
            this.jb6_1.i1z(this.ib6_1);
            return tmp_2;
          case 7:
            this.o8_1 = 8;
            var t = this.q8_1;
            this.fb6_1.cax_1.e2p(this.kb6_1, null);
            throw t;
          case 8:
            this.o8_1 = 9;
            var t_0 = this.q8_1;
            this.jb6_1.i1z(this.ib6_1);
            throw t_0;
          case 9:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 9) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutatorMutex$mutate$slambda).r1n = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutate$slambda(this.eb6_1, this.fb6_1, this.gb6_1, completion);
    i.hb6_1 = $this$coroutineScope;
    return i;
  };
  function MutatorMutex$mutate$slambda_0($priority, this$0, $block, resultContinuation) {
    var i = new MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.f6e($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex() {
    this.cax_1 = new AtomicReference(null);
    this.dax_1 = Mutex();
  }
  protoOf(MutatorMutex).nb6 = function (priority, block, $completion) {
    return coroutineScope(MutatorMutex$mutate$slambda_0(priority, this, block, null), $completion);
  };
  protoOf(MutatorMutex).eax = function (priority, block, $completion, $super) {
    priority = priority === VOID ? MutatePriority_Default_getInstance() : priority;
    return $super === VOID ? this.nb6(priority, block, $completion) : $super.nb6.call(this, priority, block, $completion);
  };
  var MutatePriority_Default_instance;
  var MutatePriority_UserInput_instance;
  var MutatePriority_PreventUserInput_instance;
  var MutatePriority_entriesInitialized;
  function MutatePriority_initEntries() {
    if (MutatePriority_entriesInitialized)
      return Unit_instance;
    MutatePriority_entriesInitialized = true;
    MutatePriority_Default_instance = new MutatePriority('Default', 0);
    MutatePriority_UserInput_instance = new MutatePriority('UserInput', 1);
    MutatePriority_PreventUserInput_instance = new MutatePriority('PreventUserInput', 2);
  }
  function MutatePriority(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MutationInterruptedException() {
    PlatformOptimizedCancellationException.call(this, 'Mutation interrupted');
    captureStack(this, MutationInterruptedException);
  }
  function MutatePriority_Default_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_Default_instance;
  }
  var androidx_compose_animation_core_MonoSpline$stable;
  var androidx_compose_animation_core_PathEasing$stable;
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function estimateAnimationDurationMillis(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    if (dampingRatio === 0.0) {
      return new Long(2077252342, 2147);
    }
    return estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    var tmp = 2.0 * dampingRatio;
    // Inline function 'kotlin.math.sqrt' call
    var dampingCoefficient = tmp * Math.sqrt(stiffness);
    var partialRoot = dampingCoefficient * dampingCoefficient - 4.0 * stiffness;
    var tmp_0;
    if (partialRoot < 0.0) {
      tmp_0 = 0.0;
    } else {
      // Inline function 'kotlin.math.sqrt' call
      tmp_0 = Math.sqrt(partialRoot);
    }
    var partialRootReal = tmp_0;
    var tmp_1;
    if (partialRoot < 0.0) {
      // Inline function 'kotlin.math.abs' call
      // Inline function 'kotlin.math.sqrt' call
      var x = Math.abs(partialRoot);
      tmp_1 = Math.sqrt(x);
    } else {
      tmp_1 = 0.0;
    }
    var partialRootImaginary = tmp_1;
    var firstRootReal = (-dampingCoefficient + partialRootReal) * 0.5;
    var firstRootImaginary = partialRootImaginary * 0.5;
    var secondRootReal = (-dampingCoefficient - partialRootReal) * 0.5;
    return estimateDurationInternal(firstRootReal, firstRootImaginary, secondRootReal, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateDurationInternal(firstRootReal, firstRootImaginary, secondRootReal, dampingRatio, initialVelocity, initialPosition, delta) {
    if (initialPosition === 0.0 && initialVelocity === 0.0) {
      return new Long(0, 0);
    }
    var v0 = initialPosition < 0 ? -initialVelocity : initialVelocity;
    // Inline function 'kotlin.math.abs' call
    var p0 = Math.abs(initialPosition);
    return numberToLong((dampingRatio > 1.0 ? estimateOverDamped(firstRootReal, secondRootReal, p0, v0, delta) : dampingRatio < 1.0 ? estimateUnderDamped(firstRootReal, firstRootImaginary, p0, v0, delta) : estimateCriticallyDamped(firstRootReal, p0, v0, delta)) * 1000.0);
  }
  function estimateOverDamped(firstRootReal, secondRootReal, p0, v0, delta) {
    var r1 = firstRootReal;
    var r2 = secondRootReal;
    var c2 = (r1 * p0 - v0) / (r1 - r2);
    var c1 = p0 - c2;
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    // Inline function 'kotlin.math.ln' call
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r1;
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    // Inline function 'kotlin.math.ln' call
    var x_2 = Math.abs(x_1);
    var t2 = Math.log(x_2) / r2;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    if (!(compare(bitwiseAnd(toRawBits(t1), new Long(-1, 2147483647)), new Long(0, 2146435072)) < 0)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      // Inline function 'androidx.compose.ui.util.fastIsFinite' call
      if (!(compare(bitwiseAnd(toRawBits(t2), new Long(-1, 2147483647)), new Long(0, 2146435072)) < 0)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    // Inline function 'kotlin.math.ln' call
    var x_3 = c1 * r1 / (-c2 * r2);
    var tInflection = Math.log(x_3) / (r2 - r1);
    var tmp_0;
    if (isNaN_1(tInflection) || tInflection <= 0.0) {
      tmp_0 = -delta;
    } else if (tInflection > 0.0 && -estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) < delta) {
      if (c2 > 0.0 && c1 < 0.0) {
        tCurr = 0.0;
      }
      tmp_0 = -delta;
    } else {
      // Inline function 'kotlin.math.ln' call
      var x_4 = -(c2 * r2 * r2) / (c1 * r1 * r1);
      tCurr = Math.log(x_4) / (r1 - r2);
      tmp_0 = delta;
    }
    var signedDelta = tmp_0;
    var tmp_1 = c1 * r1;
    // Inline function 'kotlin.math.exp' call
    var x_5 = r1 * tCurr;
    var tmp_2 = tmp_1 * Math.exp(x_5);
    var tmp_3 = c2 * r2;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r2 * tCurr;
    // Inline function 'kotlin.math.abs' call
    var x_7 = tmp_2 + tmp_3 * Math.exp(x_6);
    if (Math.abs(x_7) < 1.0E-4) {
      return tCurr;
    }
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 && iterations < 100) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_8 = tCurr;
      // Inline function 'kotlin.math.exp' call
      var x_9 = r1 * x_8;
      var tmp_4 = c1 * Math.exp(x_9);
      // Inline function 'kotlin.math.exp' call
      var x_10 = r2 * x_8;
      var tmp_5 = tmp_4 + c2 * Math.exp(x_10) + signedDelta;
      var tmp_6 = c1 * r1;
      // Inline function 'kotlin.math.exp' call
      var x_11 = r1 * x_8;
      var tmp_7 = tmp_6 * Math.exp(x_11);
      var tmp_8 = c2 * r2;
      // Inline function 'kotlin.math.exp' call
      var x_12 = r2 * x_8;
      tCurr = x_8 - tmp_5 / (tmp_7 + tmp_8 * Math.exp(x_12));
      // Inline function 'kotlin.math.abs' call
      var x_13 = tLast - tCurr;
      tDelta = Math.abs(x_13);
    }
    return tCurr;
  }
  function estimateUnderDamped(firstRootReal, firstRootImaginary, p0, v0, delta) {
    var r = firstRootReal;
    var c1 = p0;
    var c2 = (v0 - r * c1) / firstRootImaginary;
    // Inline function 'kotlin.math.sqrt' call
    var x = c1 * c1 + c2 * c2;
    var c = Math.sqrt(x);
    // Inline function 'kotlin.math.ln' call
    var x_0 = delta / c;
    return Math.log(x_0) / r;
  }
  function estimateCriticallyDamped(firstRootReal, p0, v0, delta) {
    var r = firstRootReal;
    var c1 = p0;
    var c2 = v0 - r * c1;
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    // Inline function 'kotlin.math.ln' call
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    // Inline function 'kotlin.math.ln' call
    var x_2 = Math.abs(x_1);
    var guess = Math.log(x_2);
    var t = guess;
    var inductionVariable = 0;
    if (inductionVariable <= 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.math.abs' call
        var x_3 = t / r;
        // Inline function 'kotlin.math.ln' call
        var x_4 = Math.abs(x_3);
        t = guess - Math.log(x_4);
      }
       while (inductionVariable <= 5);
    var t2 = t / r;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    if (!(compare(bitwiseAnd(toRawBits(t1), new Long(-1, 2147483647)), new Long(0, 2146435072)) < 0)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      // Inline function 'androidx.compose.ui.util.fastIsFinite' call
      if (!(compare(bitwiseAnd(toRawBits(t2), new Long(-1, 2147483647)), new Long(0, 2146435072)) < 0)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    var tInflection = -(r * c1 + c2) / (r * c2);
    // Inline function 'kotlin.math.exp' call
    var x_5 = r * tInflection;
    var tmp_0 = c1 * Math.exp(x_5);
    var tmp_1 = c2 * tInflection;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r * tInflection;
    var xInflection = tmp_0 + tmp_1 * Math.exp(x_6);
    var tmp_2;
    if (isNaN_1(tInflection) || tInflection <= 0.0) {
      tmp_2 = -delta;
    } else if (tInflection > 0.0 && -xInflection < delta) {
      if (c2 < 0 && c1 > 0) {
        tCurr = 0.0;
      }
      tmp_2 = -delta;
    } else {
      tCurr = -(2.0 / r) - c1 / c2;
      tmp_2 = delta;
    }
    var signedDelta = tmp_2;
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 && iterations < 100) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_7 = tCurr;
      var tmp_3 = c1 + c2 * x_7;
      // Inline function 'kotlin.math.exp' call
      var x_8 = r * x_7;
      var tmp_4 = tmp_3 * Math.exp(x_8) + signedDelta;
      var tmp_5 = c2 * (r * x_7 + 1) + c1 * r;
      // Inline function 'kotlin.math.exp' call
      var x_9 = r * x_7;
      tCurr = x_7 - tmp_4 / (tmp_5 * Math.exp(x_9));
      // Inline function 'kotlin.math.abs' call
      var x_10 = tLast - tCurr;
      tDelta = Math.abs(x_10);
    }
    return tCurr;
  }
  function estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) {
    // Inline function 'kotlin.math.exp' call
    var x = r1 * tInflection;
    var tmp = c1 * Math.exp(x);
    // Inline function 'kotlin.math.exp' call
    var x_0 = r2 * tInflection;
    return tmp + c2 * Math.exp(x_0);
  }
  var androidx_compose_animation_core_SpringSimulation$stable;
  function SpringSimulation(finalPosition) {
    this.rb4_1 = finalPosition;
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.sb4_1 = Math.sqrt(50.0);
    this.tb4_1 = 1.0;
  }
  protoOf(SpringSimulation).vb4 = function (value) {
    if (this.xb4() <= 0) {
      throwIllegalArgumentException('Spring stiffness constant must be positive.');
    }
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.sb4_1 = Math.sqrt(value);
  };
  protoOf(SpringSimulation).xb4 = function () {
    return this.sb4_1 * this.sb4_1;
  };
  protoOf(SpringSimulation).ub4 = function (value) {
    if (value < 0) {
      throwIllegalArgumentException('Damping ratio must be non-negative');
    }
    this.tb4_1 = value;
  };
  protoOf(SpringSimulation).wb4 = function (lastDisplacement, lastVelocity, timeElapsed) {
    var adjustedDisplacement = lastDisplacement - this.rb4_1;
    // Inline function 'kotlin.Long.div' call
    var deltaT = toNumber(timeElapsed) / 1000.0;
    var dampingRatioSquared = this.tb4_1 * this.tb4_1;
    var r = -this.tb4_1 * this.sb4_1;
    var displacement;
    var currentVelocity;
    if (this.tb4_1 > 1) {
      var tmp = this.sb4_1;
      // Inline function 'kotlin.math.sqrt' call
      var x = dampingRatioSquared - 1;
      var s = tmp * Math.sqrt(x);
      var gammaPlus = r + s;
      var gammaMinus = r - s;
      var coeffB = (gammaMinus * adjustedDisplacement - lastVelocity) / (gammaMinus - gammaPlus);
      var coeffA = adjustedDisplacement - coeffB;
      // Inline function 'kotlin.math.exp' call
      var x_0 = gammaMinus * deltaT;
      var tmp_0 = coeffA * Math.exp(x_0);
      // Inline function 'kotlin.math.exp' call
      var x_1 = gammaPlus * deltaT;
      displacement = tmp_0 + coeffB * Math.exp(x_1);
      var tmp_1 = coeffA * gammaMinus;
      // Inline function 'kotlin.math.exp' call
      var x_2 = gammaMinus * deltaT;
      var tmp_2 = tmp_1 * Math.exp(x_2);
      var tmp_3 = coeffB * gammaPlus;
      // Inline function 'kotlin.math.exp' call
      var x_3 = gammaPlus * deltaT;
      currentVelocity = tmp_2 + tmp_3 * Math.exp(x_3);
    } else if (this.tb4_1 === 1.0) {
      var coeffA_0 = adjustedDisplacement;
      var coeffB_0 = lastVelocity + this.sb4_1 * adjustedDisplacement;
      var nFdT = -this.sb4_1 * deltaT;
      var tmp_4 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      displacement = tmp_4 * Math.exp(nFdT);
      var tmp_5 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var tmp_6 = tmp_5 * Math.exp(nFdT) * -this.sb4_1;
      // Inline function 'kotlin.math.exp' call
      currentVelocity = tmp_6 + coeffB_0 * Math.exp(nFdT);
    } else {
      var tmp_7 = this.sb4_1;
      // Inline function 'kotlin.math.sqrt' call
      var x_4 = 1 - dampingRatioSquared;
      var dampedFreq = tmp_7 * Math.sqrt(x_4);
      var cosCoeff = adjustedDisplacement;
      var sinCoeff = 1 / dampedFreq * (-r * adjustedDisplacement + lastVelocity);
      var dFdT = dampedFreq * deltaT;
      // Inline function 'kotlin.math.exp' call
      var x_5 = r * deltaT;
      var tmp_8 = Math.exp(x_5);
      // Inline function 'kotlin.math.cos' call
      var tmp_9 = cosCoeff * Math.cos(dFdT);
      // Inline function 'kotlin.math.sin' call
      displacement = tmp_8 * (tmp_9 + sinCoeff * Math.sin(dFdT));
      var tmp_10 = displacement * r;
      // Inline function 'kotlin.math.exp' call
      var x_6 = r * deltaT;
      var tmp_11 = Math.exp(x_6);
      var tmp_12 = -dampedFreq * cosCoeff;
      // Inline function 'kotlin.math.sin' call
      var tmp_13 = tmp_12 * Math.sin(dFdT);
      var tmp_14 = dampedFreq * sinCoeff;
      // Inline function 'kotlin.math.cos' call
      currentVelocity = tmp_10 + tmp_11 * (tmp_13 + tmp_14 * Math.cos(dFdT));
    }
    var newValue = displacement + this.rb4_1;
    var newVelocity = currentVelocity;
    // Inline function 'androidx.compose.animation.core.Motion' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits_0(newValue));
    var v2 = fromInt(toRawBits_0(newVelocity));
    var tmp$ret$16 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Motion___init__impl__vk56rv(tmp$ret$16);
  };
  function _Motion___init__impl__vk56rv(packedValue) {
    return packedValue;
  }
  function _Motion___get_packedValue__impl__qymh4n($this) {
    return $this;
  }
  function animateDecay(_this__u8e3s4, animationSpec, sequentialAnimation, block, $completion) {
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateDecay$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.v1();
    var tmp1_initialVelocityVector = _this__u8e3s4.waw_1;
    var tmp2_typeConverter = _this__u8e3s4.uaw_1;
    var anim = DecayAnimation_init_$Create$(animationSpec, tmp2_typeConverter, tmp0_initialValue, tmp1_initialVelocityVector);
    return animate_0(_this__u8e3s4, anim, sequentialAnimation ? _this__u8e3s4.xaw_1 : new Long(0, -2147483648), block, $completion);
  }
  function animateTo(_this__u8e3s4, targetValue, animationSpec, sequentialAnimation, block, $completion) {
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateTo$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.v1();
    var tmp1_typeConverter = _this__u8e3s4.uaw_1;
    var tmp2_initialVelocityVector = _this__u8e3s4.waw_1;
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, tmp2_initialVelocityVector);
    return animate_0(_this__u8e3s4, anim, sequentialAnimation ? _this__u8e3s4.xaw_1 : new Long(0, -2147483648), block, $completion);
  }
  function animate(initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    return animate_1(get_VectorConverter(FloatCompanionObject_instance), initialValue, targetValue, initialVelocity, animationSpec, block, $completion);
  }
  function animate_0(_this__u8e3s4, animation, startTimeNanos, block, $completion) {
    startTimeNanos = startTimeNanos === VOID ? new Long(0, -2147483648) : startTimeNanos;
    var tmp;
    if (block === VOID) {
      tmp = animate$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp_0 = new $animateCOROUTINE$(_this__u8e3s4, animation, startTimeNanos, block, $completion);
    tmp_0.p8_1 = Unit_instance;
    tmp_0.q8_1 = null;
    return tmp_0.v8();
  }
  function updateState(_this__u8e3s4, state) {
    state.aax(_this__u8e3s4.v1());
    copyFrom(state.waw_1, _this__u8e3s4.qaw_1);
    state.yaw_1 = _this__u8e3s4.saw_1;
    state.xaw_1 = _this__u8e3s4.raw_1;
    state.zaw_1 = _this__u8e3s4.lax();
  }
  function animate_1(typeConverter, initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? null : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    var tmp;
    if (initialVelocity == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeConverter.fax()(initialVelocity);
    }
    var tmp1_elvis_lhs = tmp;
    var initialVelocityVector = tmp1_elvis_lhs == null ? newInstance(typeConverter.fax()(initialValue)) : tmp1_elvis_lhs;
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector);
    var tmp_0 = new AnimationState(typeConverter, initialValue, initialVelocityVector);
    return animate_0(tmp_0, anim, VOID, animate$lambda_3(block, typeConverter), $completion);
  }
  function get_durationScale(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.a9(Key_instance_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n6d();
    var scale = tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.animation.core.checkPrecondition' call
    if (!(scale >= 0.0)) {
      var tmp$ret$0 = 'negative scale factor';
      throwIllegalStateException(tmp$ret$0);
    }
    return scale;
  }
  function callWithFrameNanos(_this__u8e3s4, onFrame, $completion) {
    var tmp = new $callWithFrameNanosCOROUTINE$(_this__u8e3s4, onFrame, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function doAnimationFrameWithScale(_this__u8e3s4, frameTimeNanos, durationScale, anim, state, block) {
    var tmp;
    if (durationScale === 0.0) {
      tmp = anim.bb1();
    } else {
      // Inline function 'kotlin.Long.div' call
      var this_0 = subtract(frameTimeNanos, _this__u8e3s4.naw_1);
      var tmp$ret$0 = toNumber(this_0) / durationScale;
      tmp = numberToLong(tmp$ret$0);
    }
    var playTimeNanos = tmp;
    doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block);
  }
  function doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block) {
    _this__u8e3s4.raw_1 = frameTimeNanos;
    _this__u8e3s4.aax(anim.yb0(playTimeNanos));
    _this__u8e3s4.qaw_1 = anim.db1(playTimeNanos);
    var isLastFrame = anim.ab1(playTimeNanos);
    if (isLastFrame) {
      _this__u8e3s4.saw_1 = _this__u8e3s4.raw_1;
      _this__u8e3s4.ab2(false);
    }
    updateState(_this__u8e3s4, state);
    block(_this__u8e3s4);
  }
  function animateDecay$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function animateTo$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function animate$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function animate$lambda$lambda($this_animate) {
    return function () {
      $this_animate.zaw_1 = false;
      return Unit_instance;
    };
  }
  function animate$lambda_0($lateInitScope, $initialValue, $animation, $initialVelocityVector, $durationScale, $this_animate, $block) {
    return function (it) {
      var tmp = $animation.vb0();
      var tmp_0 = $animation.max();
      // Inline function 'kotlin.apply' call
      var this_0 = new AnimationScope($initialValue, tmp, $initialVelocityVector, it, tmp_0, it, true, animate$lambda$lambda($this_animate));
      doAnimationFrameWithScale(this_0, it, $durationScale, $animation, $this_animate, $block);
      $lateInitScope._v = this_0;
      return Unit_instance;
    };
  }
  function animate$lambda_1($this_animate) {
    return function () {
      $this_animate.zaw_1 = false;
      return Unit_instance;
    };
  }
  function animate$lambda_2($lateInitScope, $durationScale, $animation, $this_animate, $block) {
    return function (it) {
      doAnimationFrameWithScale(ensureNotNull($lateInitScope._v), it, $durationScale, $animation, $this_animate, $block);
      return Unit_instance;
    };
  }
  function animate$lambda_3($block, $typeConverter) {
    return function ($this$animate) {
      $block($this$animate.v1(), $typeConverter.jax()($this$animate.qaw_1));
      return Unit_instance;
    };
  }
  function callWithFrameNanos$lambda($onFrame) {
    return function (it) {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = divide(it, fromInt(1));
      return $onFrame(tmp$ret$0);
    };
  }
  function $animateCOROUTINE$(_this__u8e3s4, animation, startTimeNanos, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wb6_1 = _this__u8e3s4;
    this.xb6_1 = animation;
    this.yb6_1 = startTimeNanos;
    this.zb6_1 = block;
  }
  protoOf($animateCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 8;
            var initialValue = this.xb6_1.yb0(new Long(0, 0));
            var initialVelocityVector = this.xb6_1.db1(new Long(0, 0));
            this.ab7_1 = {_v: null};
            this.o8_1 = 7;
            if (equalsLong(this.yb6_1, new Long(0, -2147483648))) {
              var durationScale = get_durationScale(this.t8());
              this.n8_1 = 1;
              suspendResult = callWithFrameNanos(this.xb6_1, animate$lambda_0(this.ab7_1, initialValue, this.xb6_1, initialVelocityVector, durationScale, this.wb6_1, this.zb6_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_0 = this.xb6_1.vb0();
              var tmp_1 = this.xb6_1.max();
              var this_0 = new AnimationScope(initialValue, tmp_0, initialVelocityVector, this.yb6_1, tmp_1, this.yb6_1, true, animate$lambda_1(this.wb6_1));
              doAnimationFrameWithScale(this_0, this.yb6_1, get_durationScale(this.t8()), this.xb6_1, this.wb6_1, this.zb6_1);
              this.ab7_1._v = this_0;
              this.n8_1 = 2;
              continue $sm;
            }

          case 1:
            this.n8_1 = 2;
            continue $sm;
          case 2:
            this.n8_1 = 3;
            continue $sm;
          case 3:
            if (!ensureNotNull(this.ab7_1._v).lax()) {
              this.n8_1 = 5;
              continue $sm;
            }

            var durationScale_0 = get_durationScale(this.t8());
            this.n8_1 = 4;
            suspendResult = callWithFrameNanos(this.xb6_1, animate$lambda_2(this.ab7_1, durationScale_0, this.xb6_1, this.wb6_1, this.zb6_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.n8_1 = 3;
            continue $sm;
          case 5:
            this.o8_1 = 8;
            this.n8_1 = 6;
            continue $sm;
          case 6:
            this.o8_1 = 8;
            return Unit_instance;
          case 7:
            this.o8_1 = 8;
            var tmp_2 = this.q8_1;
            if (tmp_2 instanceof CancellationException) {
              var e = this.q8_1;
              var tmp0_safe_receiver = this.ab7_1._v;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.ab2(false);
              }
              var tmp1_safe_receiver = this.ab7_1._v;
              if (equals(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.raw_1, this.wb6_1.xaw_1)) {
                this.wb6_1.zaw_1 = false;
              }
              throw e;
            } else {
              throw this.q8_1;
            }

          case 8:
            throw this.q8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o8_1 === 8) {
          throw e_0;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e_0;
        }
      }
     while (true);
  };
  function $callWithFrameNanosCOROUTINE$(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jb7_1 = _this__u8e3s4;
    this.kb7_1 = onFrame;
  }
  protoOf($callWithFrameNanosCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            if (this.jb7_1.xb0()) {
              this.n8_1 = 2;
              suspendResult = withInfiniteAnimationFrameNanos(this.kb7_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 1;
              suspendResult = withFrameNanos(callWithFrameNanos$lambda(this.kb7_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.lb7_1 = suspendResult;
            this.n8_1 = 3;
            continue $sm;
          case 2:
            this.lb7_1 = suspendResult;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            return this.lb7_1;
          case 4:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 4) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function get_SeekableTransitionStateTotalDurationChanged() {
    _init_properties_Transition_kt__s6zoln();
    return SeekableTransitionStateTotalDurationChanged;
  }
  var SeekableTransitionStateTotalDurationChanged;
  function get_SeekableStateObserver() {
    _init_properties_Transition_kt__s6zoln();
    var tmp0 = SeekableStateObserver$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('SeekableStateObserver', 0, tmp, _get_SeekableStateObserver_$ref_w4ztm3(), null);
    return tmp0.v1();
  }
  var SeekableStateObserver$delegate;
  var androidx_compose_animation_core_TransitionState$stable;
  var androidx_compose_animation_core_MutableTransitionState$stable;
  var androidx_compose_animation_core_SeekableTransitionState_SeekingAnimationState$stable;
  var androidx_compose_animation_core_SeekableTransitionState$stable;
  var androidx_compose_animation_core_Transition$stable;
  function _set_targetValue__aqsk0r_0($this, _set____db54di) {
    var tmp0 = $this.ob7_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_targetValue_$ref_k2d87h_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('targetValue', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_targetValue_$ref_9yn0ox_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  }
  function _get_targetValue__jjlmb5($this) {
    var tmp0 = $this.ob7_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_targetValue_$ref_k2d87h();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetValue', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_targetValue_$ref_9yn0ox());
    return tmp0.v1();
  }
  function _set_animationSpec__7qdru($this, _set____db54di) {
    var tmp0 = $this.qb7_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_animationSpec_$ref_yvkiem_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('animationSpec', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_animationSpec_$ref_efqna6_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  }
  function _set_animation__pan2kh($this, _set____db54di) {
    var tmp0 = $this.rb7_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_animation_$ref_xmz6jb_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('animation', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_animation_$ref_if7o0z_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  }
  function updateAnimation($this, initialValue, isInterrupted) {
    var tmp0_safe_receiver = $this.tb7_1;
    if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.max(), _get_targetValue__jjlmb5($this))) {
      _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$($this.bb8_1, $this.mb7_1, initialValue, initialValue, newInstance($this.yb7_1)));
      $this.wb7_1 = true;
      $this.eb8($this.db8().bb1());
      return Unit_instance;
    }
    var tmp;
    if (isInterrupted && !$this.ab8_1) {
      var tmp_0;
      var tmp_1 = $this.fb8();
      if (tmp_1 instanceof SpringSpec) {
        tmp_0 = $this.fb8();
      } else {
        tmp_0 = $this.bb8_1;
      }
      tmp = tmp_0;
    } else {
      tmp = $this.fb8();
    }
    var specWithoutDelay = tmp;
    var tmp_2;
    if (compare($this.cb8_1.tb8(), new Long(0, 0)) <= 0) {
      tmp_2 = specWithoutDelay;
    } else {
      tmp_2 = delayed(specWithoutDelay, $this.cb8_1.tb8());
    }
    var spec = tmp_2;
    _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$(spec, $this.mb7_1, initialValue, _get_targetValue__jjlmb5($this), $this.yb7_1));
    $this.eb8($this.db8().bb1());
    $this.wb7_1 = false;
    onChildAnimationUpdated($this.cb8_1);
  }
  function updateAnimation$default($this, initialValue, isInterrupted, $super) {
    initialValue = initialValue === VOID ? $this.v1() : initialValue;
    isInterrupted = isInterrupted === VOID ? false : isInterrupted;
    return updateAnimation($this, initialValue, isInterrupted);
  }
  function Transition$TransitionAnimationState$_get_targetValue_$ref_k2d87h() {
    return function (p0) {
      return _get_targetValue__jjlmb5(p0);
    };
  }
  function Transition$TransitionAnimationState$_set_targetValue_$ref_9yn0ox() {
    return function (p0, p1) {
      _set_targetValue__aqsk0r_0(p0, p1);
      return Unit_instance;
    };
  }
  function Transition$TransitionAnimationState$_get_targetValue_$ref_k2d87h_0() {
    return function (p0) {
      return _get_targetValue__jjlmb5(p0);
    };
  }
  function Transition$TransitionAnimationState$_set_targetValue_$ref_9yn0ox_0() {
    return function (p0, p1) {
      _set_targetValue__aqsk0r_0(p0, p1);
      return Unit_instance;
    };
  }
  function Transition$TransitionAnimationState$_get_animationSpec_$ref_yvkiem() {
    return function (p0) {
      return p0.fb8();
    };
  }
  function Transition$TransitionAnimationState$_set_animationSpec_$ref_efqna6() {
    return function (p0, p1) {
      _set_animationSpec__7qdru(p0, p1);
      return Unit_instance;
    };
  }
  function Transition$TransitionAnimationState$_get_animationSpec_$ref_yvkiem_0() {
    return function (p0) {
      return p0.fb8();
    };
  }
  function Transition$TransitionAnimationState$_set_animationSpec_$ref_efqna6_0() {
    return function (p0, p1) {
      _set_animationSpec__7qdru(p0, p1);
      return Unit_instance;
    };
  }
  function Transition$TransitionAnimationState$_get_animation_$ref_xmz6jb() {
    return function (p0) {
      return p0.db8();
    };
  }
  function Transition$TransitionAnimationState$_set_animation_$ref_if7o0z() {
    return function (p0, p1) {
      _set_animation__pan2kh(p0, p1);
      return Unit_instance;
    };
  }
  function Transition$TransitionAnimationState$_get_animation_$ref_xmz6jb_0() {
    return function (p0) {
      return p0.db8();
    };
  }
  function Transition$TransitionAnimationState$_set_animation_$ref_if7o0z_0() {
    return function (p0, p1) {
      _set_animation__pan2kh(p0, p1);
      return Unit_instance;
    };
  }
  function Transition$TransitionAnimationState$_get_isFinished_$ref_fvu6sx() {
    return function (p0) {
      return p0.ub8();
    };
  }
  function Transition$TransitionAnimationState$_set_isFinished_$ref_9n998j() {
    return function (p0, p1) {
      p0.vb8(p1);
      return Unit_instance;
    };
  }
  function Transition$TransitionAnimationState$_get_isFinished_$ref_fvu6sx_0() {
    return function (p0) {
      return p0.ub8();
    };
  }
  function Transition$TransitionAnimationState$_set_isFinished_$ref_9n998j_0() {
    return function (p0, p1) {
      p0.vb8(p1);
      return Unit_instance;
    };
  }
  function Transition$TransitionAnimationState$_get_resetSnapValue_$ref_1qtvjp() {
    return function (p0) {
      return p0.wb8();
    };
  }
  function Transition$TransitionAnimationState$_set_resetSnapValue_$ref_zcevb3() {
    return function (p0, p1) {
      p0.xb8(p1);
      return Unit_instance;
    };
  }
  function Transition$TransitionAnimationState$_get_resetSnapValue_$ref_1qtvjp_0() {
    return function (p0) {
      return p0.wb8();
    };
  }
  function Transition$TransitionAnimationState$_set_resetSnapValue_$ref_zcevb3_0() {
    return function (p0, p1) {
      p0.xb8(p1);
      return Unit_instance;
    };
  }
  function Transition$TransitionAnimationState$_get_value_$ref_sfag84() {
    return function (p0) {
      return p0.v1();
    };
  }
  function Transition$TransitionAnimationState$_set_value_$ref_daz5cg() {
    return function (p0, p1) {
      p0.aax(p1);
      return Unit_instance;
    };
  }
  function Transition$TransitionAnimationState$_get_value_$ref_sfag84_0() {
    return function (p0) {
      return p0.v1();
    };
  }
  function Transition$TransitionAnimationState$_set_value_$ref_daz5cg_0() {
    return function (p0, p1) {
      p0.aax(p1);
      return Unit_instance;
    };
  }
  function Transition$TransitionAnimationState$_get_durationNanos_$ref_gmcx6m() {
    return function (p0) {
      return p0.yb8();
    };
  }
  function Transition$TransitionAnimationState$_set_durationNanos_$ref_53fz3q() {
    return function (p0, p1) {
      p0.eb8(p1);
      return Unit_instance;
    };
  }
  function Transition$TransitionAnimationState$_get_durationNanos_$ref_gmcx6m_0() {
    return function (p0) {
      return p0.yb8();
    };
  }
  function Transition$TransitionAnimationState$_set_durationNanos_$ref_53fz3q_0() {
    return function (p0, p1) {
      p0.eb8(p1);
      return Unit_instance;
    };
  }
  function Transition$animateTo$lambda$slambda$lambda(this$0, $durationScale) {
    return function (it) {
      var tmp;
      if (!this$0.ab9()) {
        // Inline function 'kotlin.Long.div' call
        var tmp$ret$0 = divide(it, fromInt(1));
        this$0.zb8(tmp$ret$0, $durationScale);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Transition_init_$Init$(initialState, label, $this) {
    Transition.call($this, new MutableTransitionState(initialState), null, label);
    return $this;
  }
  function Transition_init_$Create$(initialState, label) {
    return Transition_init_$Init$(initialState, label, objectCreate(protoOf(Transition)));
  }
  function _set_segment__77iylu($this, _set____db54di) {
    var tmp0 = $this.kb8_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_segment_$ref_hll1ky_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('segment', 1, tmp, tmp_0, Transition$_set_segment_$ref_n54u2a_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  }
  function _set__playTimeNanos__8elh7c($this, _set____db54di) {
    var tmp0 = $this.lb8_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get__playTimeNanos_$ref_dkmemi_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('_playTimeNanos', 1, tmp, tmp_0, Transition$_set__playTimeNanos_$ref_nimc8a_0());
    tmp0.s33(_set____db54di);
    return Unit_instance;
  }
  function _get__playTimeNanos__xxox8s($this) {
    var tmp0 = $this.lb8_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get__playTimeNanos_$ref_dkmemi();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('_playTimeNanos', 1, tmp, tmp_0, Transition$_set__playTimeNanos_$ref_nimc8a());
    return tmp0.t33();
  }
  function _set_updateChildrenNeeded__eksjzu($this, _set____db54di) {
    var tmp0 = $this.nb8_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_updateChildrenNeeded_$ref_m1jdik_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('updateChildrenNeeded', 1, tmp, tmp_0, Transition$_set_updateChildrenNeeded_$ref_hj65vc_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  }
  function _get_updateChildrenNeeded__mpvzi($this) {
    var tmp0 = $this.nb8_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_updateChildrenNeeded_$ref_m1jdik();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('updateChildrenNeeded', 1, tmp, tmp_0, Transition$_set_updateChildrenNeeded_$ref_hj65vc());
    return tmp0.v1();
  }
  function calculateTotalDurationNanos($this) {
    var maxDurationNanos = new Long(0, 0);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = $this.ob8_1;
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        var tmp0 = maxDurationNanos;
        // Inline function 'kotlin.math.max' call
        var b = item.yb8();
        maxDurationNanos = compare(tmp0, b) >= 0 ? tmp0 : b;
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = $this.pb8_1;
    var inductionVariable_0 = 0;
    var last_0 = this_1.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.m(index_0);
        var tmp0_0 = maxDurationNanos;
        // Inline function 'kotlin.math.max' call
        var b_0 = calculateTotalDurationNanos(item_0);
        maxDurationNanos = compare(tmp0_0, b_0) >= 0 ? tmp0_0 : b_0;
      }
       while (inductionVariable_0 <= last_0);
    return maxDurationNanos;
  }
  function onChildAnimationUpdated($this) {
    _set_updateChildrenNeeded__eksjzu($this, true);
    if ($this.ab9()) {
      var maxDurationNanos = new Long(0, 0);
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = $this.ob8_1;
      var inductionVariable = 0;
      var last = this_0.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.m(index);
          var tmp0 = maxDurationNanos;
          // Inline function 'kotlin.math.max' call
          var b = item.yb8();
          maxDurationNanos = compare(tmp0, b) >= 0 ? tmp0 : b;
          item.bb9($this.rb8_1);
        }
         while (inductionVariable <= last);
      _set_updateChildrenNeeded__eksjzu($this, false);
    }
  }
  function TransitionAnimationState($outer, initialValue, initialVelocityVector, typeConverter, label) {
    this.cb8_1 = $outer;
    this.mb7_1 = typeConverter;
    this.nb7_1 = label;
    this.ob7_1 = mutableStateOf(initialValue);
    this.pb7_1 = spring();
    this.qb7_1 = mutableStateOf(this.pb7_1);
    this.rb7_1 = mutableStateOf(TargetBasedAnimation_init_$Create$(this.fb8(), this.mb7_1, initialValue, _get_targetValue__jjlmb5(this), initialVelocityVector));
    this.sb7_1 = null;
    this.tb7_1 = null;
    this.ub7_1 = mutableStateOf(true);
    this.vb7_1 = mutableFloatStateOf(-1.0);
    this.wb7_1 = false;
    this.xb7_1 = mutableStateOf(initialValue);
    this.yb7_1 = initialVelocityVector;
    this.zb7_1 = mutableLongStateOf(this.db8().bb1());
    this.ab8_1 = false;
    var tmp0_safe_receiver = get_VisibilityThresholdMap().y1(this.mb7_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var vector = this.mb7_1.fax()(initialValue);
      var inductionVariable = 0;
      var last = vector.gax();
      if (inductionVariable < last)
        do {
          var id = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          vector.iax(id, tmp0_safe_receiver);
        }
         while (inductionVariable < last);
      tmp = this.mb7_1.jax()(vector);
    }
    var visibilityThreshold = tmp;
    this.bb8_1 = spring(VOID, VOID, visibilityThreshold);
  }
  protoOf(TransitionAnimationState).fb8 = function () {
    var tmp0 = this.qb7_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_animationSpec_$ref_yvkiem();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('animationSpec', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_animationSpec_$ref_efqna6());
    return tmp0.v1();
  };
  protoOf(TransitionAnimationState).db8 = function () {
    var tmp0 = this.rb7_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_animation_$ref_xmz6jb();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('animation', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_animation_$ref_if7o0z());
    return tmp0.v1();
  };
  protoOf(TransitionAnimationState).vb8 = function (_set____db54di) {
    var tmp0 = this.ub7_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_isFinished_$ref_fvu6sx_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isFinished', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_isFinished_$ref_9n998j_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).ub8 = function () {
    var tmp0 = this.ub7_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_isFinished_$ref_fvu6sx();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isFinished', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_isFinished_$ref_9n998j());
    return tmp0.v1();
  };
  protoOf(TransitionAnimationState).xb8 = function (_set____db54di) {
    var tmp0 = this.vb7_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_resetSnapValue_$ref_1qtvjp_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('resetSnapValue', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_resetSnapValue_$ref_zcevb3_0());
    tmp0.l32(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).wb8 = function () {
    var tmp0 = this.vb7_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_resetSnapValue_$ref_1qtvjp();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('resetSnapValue', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_resetSnapValue_$ref_zcevb3());
    return tmp0.m32();
  };
  protoOf(TransitionAnimationState).aax = function (_set____db54di) {
    var tmp0 = this.xb7_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_value_$ref_sfag84_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_value_$ref_daz5cg_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).v1 = function () {
    var tmp0 = this.xb7_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_value_$ref_sfag84();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_value_$ref_daz5cg());
    return tmp0.v1();
  };
  protoOf(TransitionAnimationState).eb8 = function (_set____db54di) {
    var tmp0 = this.zb7_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_durationNanos_$ref_gmcx6m_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('durationNanos', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_durationNanos_$ref_53fz3q_0());
    tmp0.s33(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).yb8 = function () {
    var tmp0 = this.zb7_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_durationNanos_$ref_gmcx6m();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('durationNanos', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_durationNanos_$ref_53fz3q());
    return tmp0.t33();
  };
  protoOf(TransitionAnimationState).cb9 = function (playTimeNanos, scaleToEnd) {
    var playTime = scaleToEnd ? this.db8().bb1() : playTimeNanos;
    this.aax(this.db8().yb0(playTime));
    this.yb7_1 = this.db8().db1(playTime);
    if (this.db8().ab1(playTime)) {
      this.vb8(true);
    }
  };
  protoOf(TransitionAnimationState).bb9 = function (playTimeNanos) {
    if (!(this.wb8() === -1.0)) {
      return Unit_instance;
    }
    this.ab8_1 = true;
    if (equals(this.db8().max(), this.db8().wb0())) {
      this.aax(this.db8().max());
    } else {
      this.aax(this.db8().yb0(playTimeNanos));
      this.yb7_1 = this.db8().db1(playTimeNanos);
    }
  };
  protoOf(TransitionAnimationState).db9 = function () {
    this.xb8(-2.0);
  };
  protoOf(TransitionAnimationState).eb9 = function () {
    this.tb7_1 = null;
    this.sb7_1 = null;
    this.wb7_1 = false;
  };
  protoOf(TransitionAnimationState).toString = function () {
    return 'current value: ' + toString_0(this.v1()) + ', target: ' + toString_0(_get_targetValue__jjlmb5(this)) + ', spec: ' + toString(this.fb8());
  };
  protoOf(TransitionAnimationState).fb9 = function (targetValue, animationSpec) {
    var tmp;
    if (this.wb7_1) {
      var tmp0_safe_receiver = this.tb7_1;
      tmp = equals(targetValue, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.max());
    } else {
      tmp = false;
    }
    if (tmp) {
      return Unit_instance;
    }
    if (equals(_get_targetValue__jjlmb5(this), targetValue) && this.wb8() === -1.0) {
      return Unit_instance;
    }
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    var initialValue = this.wb8() === -3.0 ? targetValue : this.v1();
    updateAnimation(this, initialValue, !this.ub8());
    this.vb8(this.wb8() === -3.0);
    if (this.wb8() >= 0.0) {
      var duration = this.db8().bb1();
      var tmp_0 = this.db8();
      // Inline function 'kotlin.Long.times' call
      var other = this.wb8();
      var tmp$ret$0 = toNumber(duration) * other;
      this.aax(tmp_0.yb0(numberToLong(tmp$ret$0)));
    } else if (this.wb8() === -3.0) {
      this.aax(targetValue);
    }
    this.wb7_1 = false;
    this.xb8(-1.0);
  };
  protoOf(TransitionAnimationState).gb9 = function (initialValue, targetValue, animationSpec) {
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    if (equals(this.db8().wb0(), initialValue) && equals(this.db8().max(), targetValue)) {
      return Unit_instance;
    }
    updateAnimation$default(this, initialValue);
  };
  function SegmentImpl(initialState, targetState) {
    this.hb9_1 = initialState;
    this.ib9_1 = targetState;
  }
  protoOf(SegmentImpl).jb9 = function () {
    return this.hb9_1;
  };
  protoOf(SegmentImpl).o5d = function () {
    return this.ib9_1;
  };
  protoOf(SegmentImpl).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Segment) : false) {
      tmp_0 = equals(this.hb9_1, other.jb9());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.ib9_1, other.o5d());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SegmentImpl).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.hb9_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.ib9_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
  };
  function Segment() {
  }
  function animateTo$lambda_0($runFrameLoop$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('runFrameLoop', KProperty0, false);
    return $runFrameLoop$delegate.v1();
  }
  function Transition$_get_targetState_$ref_4jc5u9() {
    return function (p0) {
      return p0.o5d();
    };
  }
  function Transition$_set_targetState_$ref_5ke1ob() {
    return function (p0, p1) {
      p0.lb9(p1);
      return Unit_instance;
    };
  }
  function Transition$_get_targetState_$ref_4jc5u9_0() {
    return function (p0) {
      return p0.o5d();
    };
  }
  function Transition$_set_targetState_$ref_5ke1ob_0() {
    return function (p0, p1) {
      p0.lb9(p1);
      return Unit_instance;
    };
  }
  function Transition$_get_segment_$ref_hll1ky() {
    return function (p0) {
      return p0.mb9();
    };
  }
  function Transition$_set_segment_$ref_n54u2a() {
    return function (p0, p1) {
      _set_segment__77iylu(p0, p1);
      return Unit_instance;
    };
  }
  function Transition$_get_segment_$ref_hll1ky_0() {
    return function (p0) {
      return p0.mb9();
    };
  }
  function Transition$_set_segment_$ref_n54u2a_0() {
    return function (p0, p1) {
      _set_segment__77iylu(p0, p1);
      return Unit_instance;
    };
  }
  function Transition$_get__playTimeNanos_$ref_dkmemi() {
    return function (p0) {
      return _get__playTimeNanos__xxox8s(p0);
    };
  }
  function Transition$_set__playTimeNanos_$ref_nimc8a() {
    return function (p0, p1) {
      _set__playTimeNanos__8elh7c(p0, p1);
      return Unit_instance;
    };
  }
  function Transition$_get__playTimeNanos_$ref_dkmemi_0() {
    return function (p0) {
      return _get__playTimeNanos__xxox8s(p0);
    };
  }
  function Transition$_set__playTimeNanos_$ref_nimc8a_0() {
    return function (p0, p1) {
      _set__playTimeNanos__8elh7c(p0, p1);
      return Unit_instance;
    };
  }
  function Transition$_get_startTimeNanos_$ref_69ueft() {
    return function (p0) {
      return p0.nb9();
    };
  }
  function Transition$_set_startTimeNanos_$ref_utecez() {
    return function (p0, p1) {
      p0.ob9(p1);
      return Unit_instance;
    };
  }
  function Transition$_get_startTimeNanos_$ref_69ueft_0() {
    return function (p0) {
      return p0.nb9();
    };
  }
  function Transition$_set_startTimeNanos_$ref_utecez_0() {
    return function (p0, p1) {
      p0.ob9(p1);
      return Unit_instance;
    };
  }
  function Transition$_get_updateChildrenNeeded_$ref_m1jdik() {
    return function (p0) {
      return _get_updateChildrenNeeded__mpvzi(p0);
    };
  }
  function Transition$_set_updateChildrenNeeded_$ref_hj65vc() {
    return function (p0, p1) {
      _set_updateChildrenNeeded__eksjzu(p0, p1);
      return Unit_instance;
    };
  }
  function Transition$_get_updateChildrenNeeded_$ref_m1jdik_0() {
    return function (p0) {
      return _get_updateChildrenNeeded__mpvzi(p0);
    };
  }
  function Transition$_set_updateChildrenNeeded_$ref_hj65vc_0() {
    return function (p0, p1) {
      _set_updateChildrenNeeded__eksjzu(p0, p1);
      return Unit_instance;
    };
  }
  function Transition$_get_isSeeking_$ref_mx3xt() {
    return function (p0) {
      return p0.ab9();
    };
  }
  function Transition$_set_isSeeking_$ref_fuomg5() {
    return function (p0, p1) {
      p0.pb9(p1);
      return Unit_instance;
    };
  }
  function Transition$_get_isSeeking_$ref_mx3xt_0() {
    return function (p0) {
      return p0.ab9();
    };
  }
  function Transition$_set_isSeeking_$ref_fuomg5_0() {
    return function (p0, p1) {
      p0.pb9(p1);
      return Unit_instance;
    };
  }
  function Transition$totalDurationNanos$delegate$lambda(this$0) {
    return function () {
      return calculateTotalDurationNanos(this$0);
    };
  }
  function Transition$_get_totalDurationNanos_$ref_owbzlq() {
    return function (p0) {
      return p0.qb9();
    };
  }
  function Transition$animateTo$lambda(this$0) {
    return function () {
      return !equals(this$0.o5d(), this$0.u5d()) || this$0.lax() || _get_updateChildrenNeeded__mpvzi(this$0);
    };
  }
  function Transition$animateTo$lambda_0() {
    return EmptyCoroutineContext_getInstance();
  }
  function Transition$animateTo$lambda$slambda(this$0, resultContinuation) {
    this.zb9_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Transition$animateTo$lambda$slambda).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(Transition$animateTo$lambda$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Transition$animateTo$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            this.bba_1 = get_durationScale(this.aba_1.wv());
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive(this.aba_1)) {
              this.n8_1 = 3;
              continue $sm;
            }

            this.n8_1 = 2;
            suspendResult = withFrameNanos(Transition$animateTo$lambda$slambda$lambda(this.zb9_1, this.bba_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 4) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Transition$animateTo$lambda$slambda).r1n = function ($this$launch, completion) {
    var i = new Transition$animateTo$lambda$slambda(this.zb9_1, completion);
    i.aba_1 = $this$launch;
    return i;
  };
  function Transition$animateTo$lambda$slambda_0(this$0, resultContinuation) {
    var i = new Transition$animateTo$lambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).uz = function () {
  };
  function Transition$animateTo$lambda_1($coroutineScope, this$0) {
    return function ($this$DisposableEffect) {
      var tmp = CoroutineStart_UNDISPATCHED_getInstance();
      launch($coroutineScope, VOID, tmp, Transition$animateTo$lambda$slambda_0(this$0, null));
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv();
    };
  }
  function Transition$animateTo$lambda_2($tmp2_rcvr, $targetState, $$changed) {
    return function ($composer, $force) {
      $tmp2_rcvr.cba($targetState, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Transition(transitionState, parentTransition, label) {
    label = label === VOID ? null : label;
    this.gb8_1 = transitionState;
    this.hb8_1 = parentTransition;
    this.ib8_1 = label;
    this.jb8_1 = mutableStateOf(this.u5d());
    this.kb8_1 = mutableStateOf(new SegmentImpl(this.u5d(), this.u5d()));
    this.lb8_1 = mutableLongStateOf(new Long(0, 0));
    this.mb8_1 = mutableLongStateOf(new Long(0, -2147483648));
    this.nb8_1 = mutableStateOf(false);
    this.ob8_1 = mutableStateListOf();
    this.pb8_1 = mutableStateListOf();
    this.qb8_1 = mutableStateOf(false);
    this.rb8_1 = new Long(0, 0);
    var tmp = this;
    tmp.sb8_1 = derivedStateOf(Transition$totalDurationNanos$delegate$lambda(this));
    this.gb8_1.eba(this);
  }
  protoOf(Transition).u5d = function () {
    return this.gb8_1.u5d();
  };
  protoOf(Transition).lb9 = function (_set____db54di) {
    var tmp0 = this.jb8_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_targetState_$ref_4jc5u9_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('targetState', 1, tmp, tmp_0, Transition$_set_targetState_$ref_5ke1ob_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).o5d = function () {
    var tmp0 = this.jb8_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_targetState_$ref_4jc5u9();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetState', 1, tmp, tmp_0, Transition$_set_targetState_$ref_5ke1ob());
    return tmp0.v1();
  };
  protoOf(Transition).mb9 = function () {
    var tmp0 = this.kb8_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_segment_$ref_hll1ky();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('segment', 1, tmp, tmp_0, Transition$_set_segment_$ref_n54u2a());
    return tmp0.v1();
  };
  protoOf(Transition).lax = function () {
    return !equalsLong(this.nb9(), new Long(0, -2147483648));
  };
  protoOf(Transition).fba = function (value) {
    if (this.hb8_1 == null) {
      _set__playTimeNanos__8elh7c(this, value);
    }
  };
  protoOf(Transition).tb8 = function () {
    var tmp0_safe_receiver = this.hb8_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tb8();
    return tmp1_elvis_lhs == null ? _get__playTimeNanos__xxox8s(this) : tmp1_elvis_lhs;
  };
  protoOf(Transition).ob9 = function (_set____db54di) {
    var tmp0 = this.mb8_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_startTimeNanos_$ref_69ueft_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('startTimeNanos', 1, tmp, tmp_0, Transition$_set_startTimeNanos_$ref_utecez_0());
    tmp0.s33(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).nb9 = function () {
    var tmp0 = this.mb8_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_startTimeNanos_$ref_69ueft();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('startTimeNanos', 1, tmp, tmp_0, Transition$_set_startTimeNanos_$ref_utecez());
    return tmp0.t33();
  };
  protoOf(Transition).gba = function () {
    return this.ob8_1;
  };
  protoOf(Transition).pb9 = function (_set____db54di) {
    var tmp0 = this.qb8_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_isSeeking_$ref_mx3xt_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isSeeking', 1, tmp, tmp_0, Transition$_set_isSeeking_$ref_fuomg5_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).ab9 = function () {
    var tmp0 = this.qb8_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_isSeeking_$ref_mx3xt();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isSeeking', 1, tmp, tmp_0, Transition$_set_isSeeking_$ref_fuomg5());
    return tmp0.v1();
  };
  protoOf(Transition).qb9 = function () {
    var tmp0 = this.sb8_1;
    var tmp = KProperty1;
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('totalDurationNanos', 1, tmp, Transition$_get_totalDurationNanos_$ref_owbzlq(), null);
    return tmp0.v1();
  };
  protoOf(Transition).zb8 = function (frameTimeNanos, durationScale) {
    if (equalsLong(this.nb9(), new Long(0, -2147483648))) {
      this.hba(frameTimeNanos);
    }
    var deltaT = subtract(frameTimeNanos, this.nb9());
    var tmp;
    if (durationScale === 0.0) {
      tmp = deltaT;
    } else {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = toNumber(deltaT) / durationScale;
      tmp = roundToLong(tmp$ret$0);
    }
    var scaledPlayTimeNanos = tmp;
    this.fba(scaledPlayTimeNanos);
    this.iba(scaledPlayTimeNanos, durationScale === 0.0);
  };
  protoOf(Transition).iba = function (scaledPlayTimeNanos, scaleToEnd) {
    if (equalsLong(this.nb9(), new Long(0, -2147483648))) {
      this.hba(scaledPlayTimeNanos);
    } else if (!this.gb8_1.jba()) {
      this.gb8_1.ab2(true);
    }
    _set_updateChildrenNeeded__eksjzu(this, false);
    var allFinished = true;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.ob8_1;
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        if (!item.ub8()) {
          item.cb9(scaledPlayTimeNanos, scaleToEnd);
        }
        if (!item.ub8()) {
          allFinished = false;
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.pb8_1;
    var inductionVariable_0 = 0;
    var last_0 = this_1.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.m(index_0);
        if (!equals(item_0.o5d(), item_0.u5d())) {
          item_0.iba(scaledPlayTimeNanos, scaleToEnd);
        }
        if (!equals(item_0.o5d(), item_0.u5d())) {
          allFinished = false;
        }
      }
       while (inductionVariable_0 <= last_0);
    if (allFinished) {
      this.kba();
    }
  };
  protoOf(Transition).hba = function (frameTimeNanos) {
    this.ob9(frameTimeNanos);
    this.gb8_1.ab2(true);
  };
  protoOf(Transition).lba = function () {
    this.kba();
    this.gb8_1.mba();
  };
  protoOf(Transition).kba = function () {
    this.ob9(new Long(0, -2147483648));
    var tmp = this.gb8_1;
    if (tmp instanceof MutableTransitionState) {
      this.gb8_1.qba(this.o5d());
    }
    this.fba(new Long(0, 0));
    this.gb8_1.ab2(false);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.pb8_1;
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        item.kba();
      }
       while (inductionVariable <= last);
  };
  protoOf(Transition).rba = function (animation) {
    return this.ob8_1.ym(animation);
  };
  protoOf(Transition).sba = function (animation) {
    this.ob8_1.gn(animation);
  };
  protoOf(Transition).tba = function (targetState) {
    if (!equals(this.o5d(), targetState)) {
      _set_segment__77iylu(this, new SegmentImpl(this.o5d(), targetState));
      if (!equals(this.u5d(), this.o5d())) {
        this.gb8_1.qba(this.o5d());
      }
      this.lb9(targetState);
      if (!this.lax()) {
        _set_updateChildrenNeeded__eksjzu(this, true);
      }
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = this.ob8_1;
      var inductionVariable = 0;
      var last = this_0.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.m(index);
          item.db9();
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Transition).cba = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t24(-1493585151);
    sourceInformation($composer_0, 'C(animateTo):Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.j25(targetState) : $composer_0.p25(targetState)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.j25(this) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.l24()) {
      if (isTraceInProgress()) {
        traceEventStart(-1493585151, $dirty, -1, 'androidx.compose.animation.core.Transition.animateTo (Transition.kt:1180)');
      }
      if (!this.ab9()) {
        $composer_0.p24(466120769);
        sourceInformation($composer_0, '1186@50245L187');
        this.tba(targetState);
        sourceInformationMarkerStart($composer_0, -816242756, 'CC(remember):Transition.kt#9igjgp');
        var tmp0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($dirty & 112) === 32;
        // Inline function 'kotlin.let' call
        var it = tmp0.h25();
        var tmp;
        if (invalid || it === Companion_getInstance().i24_1) {
          var value = derivedStateOf(Transition$animateTo$lambda(this));
          tmp0.i25(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var runFrameLoop$delegate = tmp0_group;
        if (animateTo$lambda_0(runFrameLoop$delegate)) {
          $composer_0.p24(466528884);
          sourceInformation($composer_0, '1194@50651L24,1195@50731L1011,1195@50692L1050');
          // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
          var getContext = null;
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 773894976, 'CC(rememberCoroutineScope)608@27648L68:Effects.kt#9igjgp');
          if (!((1 & 1) === 0)) {
            getContext = Transition$animateTo$lambda_0;
          }
          var composer = $composer_1;
          sourceInformationMarkerStart($composer_1, 683737348, 'CC(remember):Effects.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var it_0 = $composer_1.h25();
          var tmp_1;
          if (false || it_0 === Companion_getInstance().i24_1) {
            var value_0 = createCompositionCoroutineScope(getContext(), composer);
            $composer_1.i25(value_0);
            tmp_1 = value_0;
          } else {
            tmp_1 = it_0;
          }
          var tmp_2 = tmp_1;
          var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          sourceInformationMarkerEnd($composer_1);
          sourceInformationMarkerEnd($composer_1);
          var coroutineScope = tmp1_group;
          sourceInformationMarkerStart($composer_0, -816226380, 'CC(remember):Transition.kt#9igjgp');
          var tmp0_0 = $composer_0;
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_0 = !!($composer_0.p25(coroutineScope) | ($dirty & 112) === 32);
          // Inline function 'kotlin.let' call
          var it_1 = tmp0_0.h25();
          var tmp_3;
          if (invalid_0 || it_1 === Companion_getInstance().i24_1) {
            var value_1 = Transition$animateTo$lambda_1(coroutineScope, this);
            tmp0_0.i25(value_1);
            tmp_3 = value_1;
          } else {
            tmp_3 = it_1;
          }
          var tmp_4 = tmp_3;
          var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          DisposableEffect(coroutineScope, this, tmp1_group_0, $composer_0, 112 & $dirty);
          $composer_0.q24();
        } else {
          $composer_0.p24(467771457);
          $composer_0.q24();
        }
        $composer_0.q24();
      } else {
        $composer_0.p24(467781377);
        $composer_0.q24();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y24();
    }
    var tmp3_safe_receiver = $composer_0.u24();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.s2q(Transition$animateTo$lambda_2(this, targetState, $changed));
    }
  };
  protoOf(Transition).uba = function (playTimeNanos) {
    if (equalsLong(this.nb9(), new Long(0, -2147483648))) {
      this.ob9(playTimeNanos);
    }
    this.fba(playTimeNanos);
    _set_updateChildrenNeeded__eksjzu(this, false);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.ob8_1;
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        item.bb9(playTimeNanos);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.pb8_1;
    var inductionVariable_0 = 0;
    var last_0 = this_1.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.m(index_0);
        if (!equals(item_0.o5d(), item_0.u5d())) {
          item_0.uba(playTimeNanos);
        }
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).vba = function () {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.ob8_1;
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        item.eb9();
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.pb8_1;
    var inductionVariable_0 = 0;
    var last_0 = this_1.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.m(index_0);
        item_0.vba();
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).toString = function () {
    var tmp0 = this.gba();
    // Inline function 'androidx.compose.ui.util.fastFold' call
    var accumulator = 'Transition animation values: ';
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = tmp0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0.m(index);
        accumulator = accumulator + item.toString() + ', ';
      }
       while (inductionVariable <= last);
    return accumulator;
  };
  function updateTransition(targetState, label, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 2029166765, 'C(updateTransition)P(1)88@3890L51,89@3957L22,90@4013L190,90@3984L219:Transition.kt#pdpnli');
    if (!(($default & 2) === 0))
      label_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(2029166765, $changed, -1, 'androidx.compose.animation.core.updateTransition (Transition.kt:87)');
    }
    sourceInformationMarkerStart($composer_0, 114112704, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.h25();
    var tmp;
    if (false || it === Companion_getInstance().i24_1) {
      var value = Transition_init_$Create$(targetState, label_0);
      $composer_0.i25(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var transition = tmp1_group;
    transition.cba(targetState, $composer_0, 48 | 8 & $changed | 14 & $changed);
    sourceInformationMarkerStart($composer_0, 114116779, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.h25();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().i24_1) {
      var value_0 = updateTransition$lambda(transition);
      $composer_0.i25(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect_0(transition, tmp2_group, $composer_0, 54);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return transition;
  }
  function MutableTransitionState$_get_currentState_$ref_7vauvk() {
    return function (p0) {
      return p0.u5d();
    };
  }
  function MutableTransitionState$_set_currentState_$ref_y2oy0s() {
    return function (p0, p1) {
      p0.qba(p1);
      return Unit_instance;
    };
  }
  function MutableTransitionState$_get_currentState_$ref_7vauvk_0() {
    return function (p0) {
      return p0.u5d();
    };
  }
  function MutableTransitionState$_set_currentState_$ref_y2oy0s_0() {
    return function (p0, p1) {
      p0.qba(p1);
      return Unit_instance;
    };
  }
  function MutableTransitionState(initialState) {
    TransitionState.call(this);
    this.oba_1 = mutableStateOf(initialState);
    this.pba_1 = mutableStateOf(initialState);
  }
  protoOf(MutableTransitionState).qba = function (_set____db54di) {
    var tmp0 = this.oba_1;
    var tmp = KMutableProperty1;
    var tmp_0 = MutableTransitionState$_get_currentState_$ref_7vauvk_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('currentState', 1, tmp, tmp_0, MutableTransitionState$_set_currentState_$ref_y2oy0s_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  };
  protoOf(MutableTransitionState).u5d = function () {
    var tmp0 = this.oba_1;
    var tmp = KMutableProperty1;
    var tmp_0 = MutableTransitionState$_get_currentState_$ref_7vauvk();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('currentState', 1, tmp, tmp_0, MutableTransitionState$_set_currentState_$ref_y2oy0s());
    return tmp0.v1();
  };
  protoOf(MutableTransitionState).eba = function (transition) {
  };
  protoOf(MutableTransitionState).mba = function () {
  };
  function _set_fraction__t78qnf($this, _set____db54di) {
    var tmp0 = $this.dbb_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SeekableTransitionState$_get_fraction_$ref_yo18y6_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('fraction', 1, tmp, tmp_0, SeekableTransitionState$_set_fraction_$ref_ktc2gu_0());
    tmp0.l32(_set____db54di);
    return Unit_instance;
  }
  function endAllAnimations($this) {
    var tmp0_safe_receiver = $this.abb_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.vba();
    }
    $this.ibb_1.e2();
    var current = $this.jbb_1;
    if (!(current == null)) {
      $this.jbb_1 = null;
      _set_fraction__t78qnf($this, 1.0);
      seekToFraction($this);
    }
  }
  function seekToFraction($this) {
    var tmp0_elvis_lhs = $this.abb_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    var playTimeNanos = roundToLong($this.nbb() * toNumber(transition.qb9()));
    transition.uba(playTimeNanos);
  }
  function SeekableTransitionState$_get_fraction_$ref_yo18y6() {
    return function (p0) {
      return p0.nbb();
    };
  }
  function SeekableTransitionState$_set_fraction_$ref_ktc2gu() {
    return function (p0, p1) {
      _set_fraction__t78qnf(p0, p1);
      return Unit_instance;
    };
  }
  function SeekableTransitionState$_get_fraction_$ref_yo18y6_0() {
    return function (p0) {
      return p0.nbb();
    };
  }
  function SeekableTransitionState$_set_fraction_$ref_ktc2gu_0() {
    return function (p0, p1) {
      _set_fraction__t78qnf(p0, p1);
      return Unit_instance;
    };
  }
  function TransitionState$_get_isRunning_$ref_gi5vj1() {
    return function (p0) {
      return p0.jba();
    };
  }
  function TransitionState$_set_isRunning_$ref_1aed0p() {
    return function (p0, p1) {
      p0.ab2(p1);
      return Unit_instance;
    };
  }
  function TransitionState$_get_isRunning_$ref_gi5vj1_0() {
    return function (p0) {
      return p0.jba();
    };
  }
  function TransitionState$_set_isRunning_$ref_1aed0p_0() {
    return function (p0, p1) {
      p0.ab2(p1);
      return Unit_instance;
    };
  }
  function TransitionState() {
    this.dba_1 = mutableStateOf(false);
  }
  protoOf(TransitionState).ab2 = function (_set____db54di) {
    var tmp0 = this.dba_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TransitionState$_get_isRunning_$ref_gi5vj1_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, TransitionState$_set_isRunning_$ref_1aed0p_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionState).jba = function () {
    var tmp0 = this.dba_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TransitionState$_get_isRunning_$ref_gi5vj1();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, TransitionState$_set_isRunning_$ref_1aed0p());
    return tmp0.v1();
  };
  function createTransitionAnimation(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label, $composer, $changed) {
    _init_properties_Transition_kt__s6zoln();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -304821198, 'C(createTransitionAnimation)P(1,3!1,4)1871@79670L978,1889@80653L91,1891@80788L108,1891@80750L146:Transition.kt#pdpnli');
    if (isTraceInProgress()) {
      traceEventStart(-304821198, $changed, -1, 'androidx.compose.animation.core.createTransitionAnimation (Transition.kt:1869)');
    }
    sourceInformationMarkerStart($composer_0, -875384412, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.j25(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it = $composer_0.h25();
    var tmp;
    if (invalid || it === Companion_getInstance().i24_1) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.Companion.withoutReadObservation' call
        var previousSnapshot = Companion_instance.v3i();
        var observer = previousSnapshot == null ? null : previousSnapshot.i2s();
        var newSnapshot = Companion_instance.w3i(previousSnapshot);
        try {
          tmp$ret$1 = new TransitionAnimationState(_this__u8e3s4, initialValue, createZeroVectorFrom(typeConverter, targetValue), typeConverter, label);
          break $l$block;
        }finally {
          Companion_instance.i3j(previousSnapshot, newSnapshot, observer);
        }
      }
      var value = tmp$ret$1;
      $composer_0.i25(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var transitionAnimation = tmp1_group;
    UpdateInitialAndTargetValues(_this__u8e3s4, transitionAnimation, initialValue, targetValue, animationSpec, $composer_0, 14 & $changed | (8 & $changed >> 3) << 6 | 896 & $changed << 3 | (8 & $changed >> 3) << 9 | 7168 & $changed << 3 | 57344 & $changed << 3);
    sourceInformationMarkerStart($composer_0, -875349506, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!((($changed & 14 ^ 6) > 4 && $composer_0.j25(_this__u8e3s4) || ($changed & 6) === 4) | $composer_0.j25(transitionAnimation));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.h25();
    var tmp_1;
    if (invalid_0 || it_0 === Companion_getInstance().i24_1) {
      var value_0 = createTransitionAnimation$lambda(_this__u8e3s4, transitionAnimation);
      $composer_0.i25(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect_0(transitionAnimation, tmp2_group, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return transitionAnimation;
  }
  function UpdateInitialAndTargetValues(_this__u8e3s4, transitionAnimation, initialValue, targetValue, animationSpec, $composer, $changed) {
    _init_properties_Transition_kt__s6zoln();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t24(867041821);
    sourceInformation($composer_0, 'C(UpdateInitialAndTargetValues)P(3,1,2):Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.j25(_this__u8e3s4) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.j25(transitionAnimation) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ((($changed & 512) === 0 ? $composer_0.j25(initialValue) : $composer_0.p25(initialValue)) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.j25(targetValue) : $composer_0.p25(targetValue)) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ((($changed & 32768) === 0 ? $composer_0.j25(animationSpec) : $composer_0.p25(animationSpec)) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.l24()) {
      if (isTraceInProgress()) {
        traceEventStart(867041821, $dirty, -1, 'androidx.compose.animation.core.UpdateInitialAndTargetValues (Transition.kt:1907)');
      }
      if (_this__u8e3s4.ab9()) {
        transitionAnimation.gb9(initialValue, targetValue, animationSpec);
      } else {
        transitionAnimation.fb9(targetValue, animationSpec);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y24();
    }
    var tmp0_safe_receiver = $composer_0.u24();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.s2q(UpdateInitialAndTargetValues$lambda(_this__u8e3s4, transitionAnimation, initialValue, targetValue, animationSpec, $changed));
    }
  }
  function SeekableTransitionStateTotalDurationChanged$lambda(it) {
    _init_properties_Transition_kt__s6zoln();
    it.obb();
    return Unit_instance;
  }
  function SeekableStateObserver$delegate$lambda() {
    _init_properties_Transition_kt__s6zoln();
    // Inline function 'kotlin.apply' call
    var this_0 = new SnapshotStateObserver(SeekableStateObserver$delegate$lambda$lambda);
    this_0.l3r();
    return this_0;
  }
  function SeekableStateObserver$delegate$lambda$lambda(it) {
    _init_properties_Transition_kt__s6zoln();
    it();
    return Unit_instance;
  }
  function _get_SeekableStateObserver_$ref_w4ztm3() {
    return function () {
      return get_SeekableStateObserver();
    };
  }
  function _no_name_provided__qut3iv_0($transition) {
    this.pbb_1 = $transition;
  }
  protoOf(_no_name_provided__qut3iv_0).uz = function () {
    this.pbb_1.lba();
  };
  function updateTransition$lambda($transition) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0($transition);
    };
  }
  function _no_name_provided__qut3iv_1($this_createTransitionAnimation, $transitionAnimation) {
    this.qbb_1 = $this_createTransitionAnimation;
    this.rbb_1 = $transitionAnimation;
  }
  protoOf(_no_name_provided__qut3iv_1).uz = function () {
    this.qbb_1.sba(this.rbb_1);
  };
  function createTransitionAnimation$lambda($this_createTransitionAnimation, $transitionAnimation) {
    return function ($this$DisposableEffect) {
      $this_createTransitionAnimation.rba($transitionAnimation);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_1($this_createTransitionAnimation, $transitionAnimation);
    };
  }
  function UpdateInitialAndTargetValues$lambda($this_UpdateInitialAndTargetValues, $transitionAnimation, $initialValue, $targetValue, $animationSpec, $$changed) {
    return function ($composer, $force) {
      UpdateInitialAndTargetValues($this_UpdateInitialAndTargetValues, $transitionAnimation, $initialValue, $targetValue, $animationSpec, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Transition_kt_wb2qvd;
  function _init_properties_Transition_kt__s6zoln() {
    if (!properties_initialized_Transition_kt_wb2qvd) {
      properties_initialized_Transition_kt_wb2qvd = true;
      SeekableTransitionStateTotalDurationChanged = SeekableTransitionStateTotalDurationChanged$lambda;
      var tmp = LazyThreadSafetyMode_NONE_getInstance();
      SeekableStateObserver$delegate = lazy(tmp, SeekableStateObserver$delegate$lambda);
      androidx_compose_animation_core_TransitionState$stable = 0;
      androidx_compose_animation_core_MutableTransitionState$stable = 0;
      androidx_compose_animation_core_SeekableTransitionState_SeekingAnimationState$stable = 8;
      androidx_compose_animation_core_SeekableTransitionState$stable = 8;
      androidx_compose_animation_core_Transition$stable = 0;
    }
  }
  function get_FloatToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return FloatToVector;
  }
  var FloatToVector;
  function get_IntToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntToVector;
  }
  var IntToVector;
  function get_DpToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpToVector;
  }
  var DpToVector;
  function get_DpOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpOffsetToVector;
  }
  var DpOffsetToVector;
  function get_SizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return SizeToVector;
  }
  var SizeToVector;
  function get_OffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return OffsetToVector;
  }
  var OffsetToVector;
  function get_IntOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntOffsetToVector;
  }
  var IntOffsetToVector;
  function get_IntSizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntSizeToVector;
  }
  var IntSizeToVector;
  function get_RectToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return RectToVector;
  }
  var RectToVector;
  function get_VectorConverter(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_FloatToVector();
  }
  function get_VectorConverter_0(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpToVector();
  }
  function TwoWayConverter(convertToVector, convertFromVector) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new TwoWayConverterImpl(convertToVector, convertFromVector);
  }
  function get_VectorConverter_1(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntOffsetToVector();
  }
  function get_VectorConverter_2(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_RectToVector();
  }
  function get_VectorConverter_3(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntSizeToVector();
  }
  function TwoWayConverterImpl(convertToVector, convertFromVector) {
    this.sbb_1 = convertToVector;
    this.tbb_1 = convertFromVector;
  }
  protoOf(TwoWayConverterImpl).fax = function () {
    return this.sbb_1;
  };
  protoOf(TwoWayConverterImpl).jax = function () {
    return this.tbb_1;
  };
  function get_VectorConverter_4(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntToVector();
  }
  function get_VectorConverter_5(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_SizeToVector();
  }
  function get_VectorConverter_6(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_OffsetToVector();
  }
  function get_VectorConverter_7(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpOffsetToVector();
  }
  function FloatToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function FloatToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return it.bb2_1;
  }
  function IntToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function IntToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return numberToInt(it.bb2_1);
  }
  function DpToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(_Dp___get_value__impl__geb1vb(it.q4n_1));
  }
  function DpToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Dp(_Dp___init__impl__ms3zkb(it.bb2_1));
  }
  function DpOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Dp___get_value__impl__geb1vb(_DpOffset___get_x__impl__uauqb5(it.c4o_1)), _Dp___get_value__impl__geb1vb(_DpOffset___get_y__impl__1h898y(it.c4o_1)));
  }
  function DpOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = it.jb2_1;
    var tmp0 = _Dp___init__impl__ms3zkb(this_0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_1 = it.kb2_1;
    // Inline function 'androidx.compose.ui.unit.DpOffset' call
    var y = _Dp___init__impl__ms3zkb(this_1);
    var tmp0_0 = _Dp___get_value__impl__geb1vb(tmp0);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Dp___get_value__impl__geb1vb(y);
    var v1 = fromInt(toRawBits_0(tmp0_0));
    var v2 = fromInt(toRawBits_0(val2));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$3 = _DpOffset___init__impl__yq36wy(tmp$ret$2);
    return new DpOffset(tmp$ret$3);
  }
  function SizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    var this_0 = it.w3u_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    var this_1 = it.w3u_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$7 = floatFromBits(bits_0);
    return new AnimationVector2D(tmp, tmp$ret$7);
  }
  function SizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    var tmp0 = it.jb2_1;
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = it.kb2_1;
    var v1 = fromInt(toRawBits_0(tmp0));
    var v2 = fromInt(toRawBits_0(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$1 = _Size___init__impl__aywn0g(tmp$ret$0);
    return new Size(tmp$ret$1);
  }
  function OffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_0 = it.p3t_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_1 = it.p3t_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$7 = floatFromBits(bits_0);
    return new AnimationVector2D(tmp, tmp$ret$7);
  }
  function OffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    var tmp0 = it.jb2_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = it.kb2_1;
    var v1 = fromInt(toRawBits_0(tmp0));
    var v2 = fromInt(toRawBits_0(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$1 = _Offset___init__impl__c168vi(tmp$ret$0);
    return new Offset(tmp$ret$1);
  }
  function IntOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntOffset___get_x__impl__qiqr5o(it.d4o_1), _IntOffset___get_y__impl__2avpwj(it.d4o_1));
  }
  function IntOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = it.jb2_1;
    var tmp0 = roundToInt(this_0);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = it.kb2_1;
    // Inline function 'androidx.compose.ui.unit.IntOffset' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = roundToInt(this_1);
    var tmp$ret$4 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    var tmp$ret$5 = _IntOffset___init__impl__rq8h7b(tmp$ret$4);
    return new IntOffset(tmp$ret$5);
  }
  function IntSizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    var this_0 = it.q4o_1;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
    var tmp = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    var this_1 = it.q4o_1;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
    var tmp$ret$3 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    return new AnimationVector2D(tmp, tmp$ret$3);
  }
  function IntSizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = it.jb2_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_1 = roundToInt(this_0);
    var tmp0 = this_1 < 0 ? 0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_2 = it.kb2_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_3 = roundToInt(this_2);
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = this_3 < 0 ? 0 : this_3;
    var tmp$ret$6 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    var tmp$ret$7 = _IntSize___init__impl__emcjft(tmp$ret$6);
    return new IntSize(tmp$ret$7);
  }
  function RectToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector4D(it.v3t_1, it.w3t_1, it.x3t_1, it.y3t_1);
  }
  function RectToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Rect(it.eb2_1, it.fb2_1, it.gb2_1, it.hb2_1);
  }
  var properties_initialized_VectorConverters_kt_cg0a6g;
  function _init_properties_VectorConverters_kt__g28mmu() {
    if (!properties_initialized_VectorConverters_kt_cg0a6g) {
      properties_initialized_VectorConverters_kt_cg0a6g = true;
      var tmp = FloatToVector$lambda;
      FloatToVector = TwoWayConverter(tmp, FloatToVector$lambda_0);
      var tmp_0 = IntToVector$lambda;
      IntToVector = TwoWayConverter(tmp_0, IntToVector$lambda_0);
      var tmp_1 = DpToVector$lambda;
      DpToVector = TwoWayConverter(tmp_1, DpToVector$lambda_0);
      var tmp_2 = DpOffsetToVector$lambda;
      DpOffsetToVector = TwoWayConverter(tmp_2, DpOffsetToVector$lambda_0);
      var tmp_3 = SizeToVector$lambda;
      SizeToVector = TwoWayConverter(tmp_3, SizeToVector$lambda_0);
      var tmp_4 = OffsetToVector$lambda;
      OffsetToVector = TwoWayConverter(tmp_4, OffsetToVector$lambda_0);
      var tmp_5 = IntOffsetToVector$lambda;
      IntOffsetToVector = TwoWayConverter(tmp_5, IntOffsetToVector$lambda_0);
      var tmp_6 = IntSizeToVector$lambda;
      IntSizeToVector = TwoWayConverter(tmp_6, IntSizeToVector$lambda_0);
      var tmp_7 = RectToVector$lambda;
      RectToVector = TwoWayConverter(tmp_7, RectToVector$lambda_0);
    }
  }
  var EmptyIntArray;
  var EmptyFloatArray;
  var EmptyArcSpline;
  var androidx_compose_animation_core_VectorizedKeyframesSpec$stable;
  var androidx_compose_animation_core_VectorizedKeyframeSpecElementInfo$stable;
  var androidx_compose_animation_core_VectorizedSnapSpec$stable;
  var androidx_compose_animation_core_VectorizedInfiniteRepeatableSpec$stable;
  var androidx_compose_animation_core_VectorizedRepeatableSpec$stable;
  var androidx_compose_animation_core_Spring$stable;
  var androidx_compose_animation_core_VectorizedSpringSpec$stable;
  var androidx_compose_animation_core_VectorizedTweenSpec$stable;
  var androidx_compose_animation_core_VectorizedFloatAnimationSpec$stable;
  function VectorizedAnimationSpec() {
  }
  function VectorizedFiniteAnimationSpec() {
  }
  function VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $this) {
    dampingRatio = dampingRatio === VOID ? 1.0 : dampingRatio;
    stiffness = stiffness === VOID ? 1500.0 : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    VectorizedSpringSpec.call($this, dampingRatio, stiffness, createSpringAnimations(visibilityThreshold, dampingRatio, stiffness));
    return $this;
  }
  function VectorizedSpringSpec_init_$Create$(dampingRatio, stiffness, visibilityThreshold) {
    return VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, objectCreate(protoOf(VectorizedSpringSpec)));
  }
  function VectorizedSpringSpec(dampingRatio, stiffness, anims) {
    this.ubb_1 = new VectorizedFloatAnimationSpec(anims);
    this.vbb_1 = dampingRatio;
    this.wbb_1 = stiffness;
  }
  protoOf(VectorizedSpringSpec).xb0 = function () {
    return this.ubb_1.xb0();
  };
  protoOf(VectorizedSpringSpec).zb0 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.ubb_1.zb0(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).eb1 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.ubb_1.eb1(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).cb1 = function (initialValue, targetValue, initialVelocity) {
    return this.ubb_1.cb1(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).ub0 = function (initialValue, targetValue, initialVelocity) {
    return this.ubb_1.ub0(initialValue, targetValue, initialVelocity);
  };
  function VectorizedTweenSpec(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.bbc_1 = durationMillis;
    this.cbc_1 = delayMillis;
    this.dbc_1 = easing;
    this.ebc_1 = VectorizedFloatAnimationSpec_init_$Create$(new FloatTweenSpec(this.bbc_1, this.cbc_1, this.dbc_1));
  }
  protoOf(VectorizedTweenSpec).fbc = function () {
    return this.bbc_1;
  };
  protoOf(VectorizedTweenSpec).gbc = function () {
    return this.cbc_1;
  };
  protoOf(VectorizedTweenSpec).zb0 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.ebc_1.zb0(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedTweenSpec).eb1 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.ebc_1.eb1(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function VectorizedDurationBasedAnimationSpec() {
  }
  function _get_valueVector__r10idf_0($this) {
    var tmp = $this.ybb_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl_0($this) {
    var tmp = $this.zbb_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_endVelocityVector__l8kbka($this) {
    var tmp = $this.abc_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('endVelocityVector');
    }
  }
  function VectorizedFloatAnimationSpec_init_$Init$(anim, $this) {
    VectorizedFloatAnimationSpec.call($this, new VectorizedFloatAnimationSpec$1(anim));
    return $this;
  }
  function VectorizedFloatAnimationSpec_init_$Create$(anim) {
    return VectorizedFloatAnimationSpec_init_$Init$(anim, objectCreate(protoOf(VectorizedFloatAnimationSpec)));
  }
  function VectorizedFloatAnimationSpec$1($anim) {
    this.hbc_1 = $anim;
  }
  protoOf(VectorizedFloatAnimationSpec$1).m = function (index) {
    return this.hbc_1;
  };
  function VectorizedFloatAnimationSpec(anims) {
    this.xbb_1 = anims;
  }
  protoOf(VectorizedFloatAnimationSpec).zb0 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.ybb_1 == null)) {
      this.ybb_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf_0(this).gax();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf_0(this).iax(i, this.xbb_1.m(i).ib4(playTimeNanos, initialValue.hax(i), targetValue.hax(i), initialVelocity.hax(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).eb1 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.zbb_1 == null)) {
      this.zbb_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl_0(this).gax();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl_0(this).iax(i, this.xbb_1.m(i).kb4(playTimeNanos, initialValue.hax(i), targetValue.hax(i), initialVelocity.hax(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).ub0 = function (initialValue, targetValue, initialVelocity) {
    if (!!(this.abc_1 == null)) {
      this.abc_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_endVelocityVector__l8kbka(this).gax();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_endVelocityVector__l8kbka(this).iax(i, this.xbb_1.m(i).lb4(initialValue.hax(i), targetValue.hax(i), initialVelocity.hax(i)));
      }
       while (inductionVariable < last);
    return _get_endVelocityVector__l8kbka(this);
  };
  protoOf(VectorizedFloatAnimationSpec).cb1 = function (initialValue, targetValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    var inductionVariable = 0;
    var last = initialValue.gax();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0 = maxDuration;
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = this.xbb_1.m(i).jb4(initialValue.hax(i), targetValue.hax(i), initialVelocity.hax(i));
        maxDuration = compare(tmp0, b) >= 0 ? tmp0 : b;
      }
       while (inductionVariable < last);
    return maxDuration;
  };
  function createSpringAnimations(visibilityThreshold, dampingRatio, stiffness) {
    _init_properties_VectorizedAnimationSpec_kt__qefgpy();
    var tmp;
    if (!(visibilityThreshold == null)) {
      tmp = new createSpringAnimations$1(visibilityThreshold, dampingRatio, stiffness);
    } else {
      tmp = new createSpringAnimations$2(dampingRatio, stiffness);
    }
    return tmp;
  }
  function createSpringAnimations$1($visibilityThreshold, $dampingRatio, $stiffness) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = $visibilityThreshold.gax();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      tmp_2[tmp_3] = new FloatSpringSpec($dampingRatio, $stiffness, $visibilityThreshold.hax(tmp_3));
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.ibc_1 = tmp_2;
  }
  protoOf(createSpringAnimations$1).m = function (index) {
    return this.ibc_1[index];
  };
  function createSpringAnimations$2($dampingRatio, $stiffness) {
    this.jbc_1 = new FloatSpringSpec($dampingRatio, $stiffness);
  }
  protoOf(createSpringAnimations$2).m = function (index) {
    return this.jbc_1;
  };
  var properties_initialized_VectorizedAnimationSpec_kt_jkmo58;
  function _init_properties_VectorizedAnimationSpec_kt__qefgpy() {
    if (!properties_initialized_VectorizedAnimationSpec_kt_jkmo58) {
      properties_initialized_VectorizedAnimationSpec_kt_jkmo58 = true;
      EmptyIntArray = new Int32Array(0);
      EmptyFloatArray = new Float32Array(0);
      var tmp = new Int32Array(2);
      var tmp_0 = new Float32Array(2);
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [new Float32Array(2), new Float32Array(2)];
      EmptyArcSpline = new ArcSpline(tmp, tmp_0, tmp$ret$2);
      androidx_compose_animation_core_VectorizedKeyframesSpec$stable = 8;
      androidx_compose_animation_core_VectorizedKeyframeSpecElementInfo$stable = 0;
      androidx_compose_animation_core_VectorizedSnapSpec$stable = 0;
      androidx_compose_animation_core_VectorizedInfiniteRepeatableSpec$stable = 8;
      androidx_compose_animation_core_VectorizedRepeatableSpec$stable = 8;
      androidx_compose_animation_core_Spring$stable = 0;
      androidx_compose_animation_core_VectorizedSpringSpec$stable = 8;
      androidx_compose_animation_core_VectorizedTweenSpec$stable = 8;
      androidx_compose_animation_core_VectorizedFloatAnimationSpec$stable = 8;
    }
  }
  var androidx_compose_animation_core_VectorizedMonoSplineKeyframesSpec$stable;
  function get_RectVisibilityThreshold() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return RectVisibilityThreshold;
  }
  var RectVisibilityThreshold;
  function get_VisibilityThresholdMap() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return VisibilityThresholdMap;
  }
  var VisibilityThresholdMap;
  function get_VisibilityThreshold(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.unit.IntOffset' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(1), 32), bitwiseAnd(fromInt(1), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$0);
  }
  function get_VisibilityThreshold_0(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return get_RectVisibilityThreshold();
  }
  function get_VisibilityThreshold_1(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(1), 32), bitwiseAnd(fromInt(1), new Long(-1, 0)));
    return _IntSize___init__impl__emcjft(tmp$ret$0);
  }
  function get_VisibilityThreshold_2(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0.1);
  }
  function get_VisibilityThreshold_3(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits_0(0.5));
    var v2 = fromInt(toRawBits_0(0.5));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$0);
  }
  function get_VisibilityThreshold_4(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits_0(0.5));
    var v2 = fromInt(toRawBits_0(0.5));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  function get_VisibilityThreshold_5(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return 1;
  }
  var properties_initialized_VisibilityThresholds_kt_k6rdp8;
  function _init_properties_VisibilityThresholds_kt__rvu6yi() {
    if (!properties_initialized_VisibilityThresholds_kt_k6rdp8) {
      properties_initialized_VisibilityThresholds_kt_k6rdp8 = true;
      RectVisibilityThreshold = new Rect(0.5, 0.5, 0.5, 0.5);
      VisibilityThresholdMap = mapOf([to(get_VectorConverter_4(IntCompanionObject_instance), 1.0), to(get_VectorConverter_3(Companion_getInstance_5()), 1.0), to(get_VectorConverter_1(Companion_getInstance_4()), 1.0), to(get_VectorConverter(FloatCompanionObject_instance), 0.01), to(get_VectorConverter_2(Companion_getInstance_3()), 0.5), to(get_VectorConverter_5(Companion_getInstance_1()), 0.5), to(get_VectorConverter_6(Companion_getInstance_2()), 0.5), to(get_VectorConverter_0(Companion_getInstance_0()), 0.1), to(get_VectorConverter_7(Companion_getInstance_6()), 0.1)]);
    }
  }
  function binarySearch(_this__u8e3s4, element, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? _this__u8e3s4.length : toIndex;
    rangeCheck(_this__u8e3s4.length, fromIndex, toIndex);
    var low = fromIndex;
    var high = toIndex - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      var cmp = compareTo(midVal, element);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function rangeCheck(size, fromIndex, toIndex) {
    if (fromIndex > toIndex)
      throw IllegalArgumentException_init_$Create$('fromIndex (' + fromIndex + ') is greater than toIndex (' + toIndex + ').');
    else if (fromIndex < 0)
      throw IndexOutOfBoundsException_init_$Create$('fromIndex (' + fromIndex + ') is less than zero.');
    else if (toIndex > size)
      throw IndexOutOfBoundsException_init_$Create$('toIndex (' + toIndex + ') is greater than size (' + size + ').');
  }
  var androidx_compose_animation_core_AtomicReference$stable;
  function AtomicReference(value) {
    this.vb5_1 = atomic$ref$1(value);
  }
  protoOf(AtomicReference).j13 = function () {
    return this.vb5_1.kotlinx$atomicfu$value;
  };
  protoOf(AtomicReference).e2p = function (expect, newValue) {
    return this.vb5_1.atomicfu$compareAndSet(expect, newValue);
  };
  var androidx_compose_animation_core_internal_PlatformOptimizedCancellationException$stable;
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  //region block: post-declaration
  protoOf(TargetBasedAnimation).ab1 = isFinishedFromNanos;
  protoOf(DecayAnimation).ab1 = isFinishedFromNanos;
  protoOf(StartDelayVectorizedAnimationSpec).ub0 = getEndVelocity;
  protoOf(FloatTweenSpec).lb4 = getEndVelocity_0;
  protoOf(FloatTweenSpec).mb4 = vectorize;
  protoOf(FloatSpringSpec).mb4 = vectorize;
  protoOf(SegmentImpl).kb9 = isTransitioningTo;
  protoOf(VectorizedTweenSpec).cb1 = getDurationNanos;
  protoOf(VectorizedTweenSpec).xb0 = get_isInfinite;
  protoOf(VectorizedTweenSpec).ub0 = getEndVelocity;
  protoOf(VectorizedFloatAnimationSpec).xb0 = get_isInfinite;
  //endregion
  //region block: init
  androidx_compose_animation_core_TargetBasedAnimation$stable = 8;
  androidx_compose_animation_core_DecayAnimation$stable = 0;
  androidx_compose_animation_core_AnimationConstants$stable = 0;
  androidx_compose_animation_core_TweenSpec$stable = 0;
  androidx_compose_animation_core_SpringSpec$stable = 0;
  androidx_compose_animation_core_ArcAnimationSpec$stable = 0;
  androidx_compose_animation_core_RepeatableSpec$stable = 0;
  androidx_compose_animation_core_InfiniteRepeatableSpec$stable = 8;
  androidx_compose_animation_core_SnapSpec$stable = 0;
  androidx_compose_animation_core_KeyframesSpecBaseConfig$stable = 8;
  androidx_compose_animation_core_KeyframeBaseEntity$stable = 8;
  androidx_compose_animation_core_KeyframesSpec_KeyframesSpecConfig$stable = 8;
  androidx_compose_animation_core_KeyframesSpec_KeyframeEntity$stable = 8;
  androidx_compose_animation_core_KeyframesSpec$stable = 0;
  androidx_compose_animation_core_KeyframesWithSplineSpec_KeyframesWithSplineSpecConfig$stable = 8;
  androidx_compose_animation_core_KeyframesWithSplineSpec$stable = 0;
  androidx_compose_animation_core_AnimationState$stable = 0;
  androidx_compose_animation_core_AnimationScope$stable = 8;
  androidx_compose_animation_core_AnimationVector$stable = 0;
  androidx_compose_animation_core_AnimationVector1D$stable = 8;
  androidx_compose_animation_core_AnimationVector2D$stable = 8;
  androidx_compose_animation_core_AnimationVector3D$stable = 8;
  androidx_compose_animation_core_AnimationVector4D$stable = 8;
  androidx_compose_animation_core_DeferredTargetAnimation$stable = 8;
  androidx_compose_animation_core_FloatSpringSpec$stable = 8;
  androidx_compose_animation_core_FloatTweenSpec$stable = 0;
  androidx_compose_animation_core_FloatExponentialDecaySpec$stable = 0;
  androidx_compose_animation_core_InfiniteTransition$stable = 8;
  androidx_compose_animation_core_MutationInterruptedException$stable = 8;
  androidx_compose_animation_core_MutatorMutex$stable = 0;
  androidx_compose_animation_core_MonoSpline$stable = 8;
  androidx_compose_animation_core_PathEasing$stable = 0;
  androidx_compose_animation_core_SpringSimulation$stable = 8;
  androidx_compose_animation_core_VectorizedMonoSplineKeyframesSpec$stable = 8;
  androidx_compose_animation_core_AtomicReference$stable = 8;
  androidx_compose_animation_core_internal_PlatformOptimizedCancellationException$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Animatable_0;
  _.$_$.b = Animatable;
  _.$_$.c = AnimationState_1;
  _.$_$.d = AnimationState_0;
  _.$_$.e = AnimationState;
  _.$_$.f = AnimationVector1D;
  _.$_$.g = AnimationVector4D;
  _.$_$.h = CubicBezierEasing;
  _.$_$.i = get_FastOutSlowInEasing;
  _.$_$.j = FiniteAnimationSpec;
  _.$_$.k = get_LinearEasing;
  _.$_$.l = get_LinearOutSlowInEasing;
  _.$_$.m = SpringSpec;
  _.$_$.n = TweenSpec;
  _.$_$.o = TwoWayConverter;
  _.$_$.p = get_VectorConverter_1;
  _.$_$.q = get_VectorConverter_0;
  _.$_$.r = get_VectorConverter;
  _.$_$.s = get_VisibilityThreshold;
  _.$_$.t = androidx_compose_animation_core_Animatable$stableprop_getter;
  _.$_$.u = animateDpAsState;
  _.$_$.v = animateFloatAsState;
  _.$_$.w = animateValueAsState;
  _.$_$.x = copy;
  _.$_$.y = createTransitionAnimation;
  _.$_$.z = generateDecayAnimationSpec;
  _.$_$.a1 = spring;
  _.$_$.b1 = tween;
  _.$_$.c1 = updateTransition;
  _.$_$.d1 = animateDecay;
  _.$_$.e1 = animateTo;
  _.$_$.f1 = animate;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-animation-animation-core.js.map
