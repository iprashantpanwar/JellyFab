(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './kotlinx-coroutines-core.js', './androidx-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./kotlinx-coroutines-core.js'), require('./androidx-collection-collection.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    globalThis['compose-multiplatform-core-compose-animation-animation'] = factory(typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['kotlinx-coroutines-core'], globalThis['androidx-collection-collection']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_androidx_collection_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var protoOf = kotlin_kotlin.$_$.yg;
  var equals = kotlin_kotlin.$_$.nf;
  var FunctionAdapter = kotlin_kotlin.$_$.ye;
  var isInterface = kotlin_kotlin.$_$.kg;
  var hashCode = kotlin_kotlin.$_$.uf;
  var initMetadataForClass = kotlin_kotlin.$_$.vf;
  var VOID = kotlin_kotlin.$_$.e;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var get_VisibilityThreshold = kotlin_org_jetbrains_compose_animation_animation_core.$_$.z;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o1;
  var fromInt = kotlin_kotlin.$_$.ne;
  var shiftLeft = kotlin_kotlin.$_$.te;
  var Long = kotlin_kotlin.$_$.ol;
  var bitwiseAnd = kotlin_kotlin.$_$.fe;
  var bitwiseOr = kotlin_kotlin.$_$.ge;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m3;
  var Unit_getInstance = kotlin_kotlin.$_$.n5;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.m2;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.q2;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.p2;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.h7;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.p7;
  var composed = kotlin_org_jetbrains_compose_ui_ui.$_$.ea;
  var initMetadataForInterface = kotlin_kotlin.$_$.zf;
  var THROW_IAE = kotlin_kotlin.$_$.wl;
  var enumEntries = kotlin_kotlin.$_$.be;
  var Enum = kotlin_kotlin.$_$.il;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.z9;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.k5;
  var androidx_compose_ui_Modifier_Node$stableprop_getter = kotlin_org_jetbrains_compose_ui_ui.$_$.da;
  var KMutableProperty1 = kotlin_kotlin.$_$.ii;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sf;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var ensureNotNull = kotlin_kotlin.$_$.pm;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.t;
  var ColorSpaces_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g4;
  var Color__convert_impl_so5m8t = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k3;
  var _Color___get_red__impl__cwrsk6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n3;
  var _Color___get_green__impl__bta9rs = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l3;
  var _Color___get_blue__impl__xwez13 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i3;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h3;
  var AnimationVector4D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t;
  var initMetadataForCompanion = kotlin_kotlin.$_$.wf;
  var plus = kotlin_kotlin.$_$.hb;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o4;
  var get_VisibilityThreshold_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b1;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.zb;
  var THROW_CCE = kotlin_kotlin.$_$.vl;
  var Annotation = kotlin_kotlin.$_$.al;
  var emptyMap = kotlin_kotlin.$_$.m9;
  var toString = kotlin_kotlin.$_$.in;
  var toString_0 = kotlin_kotlin.$_$.bh;
  var getBooleanHashCode = kotlin_kotlin.$_$.pf;
  var getNumberHashCode = kotlin_kotlin.$_$.rf;
  var TransformOrigin = kotlin_org_jetbrains_compose_ui_ui.$_$.b1;
  var TransformOrigin__toString_impl_nn7ftd = kotlin_org_jetbrains_compose_ui_ui.$_$.bb;
  var TransformOrigin__hashCode_impl_pmqpcw = kotlin_org_jetbrains_compose_ui_ui.$_$.ya;
  var to = kotlin_kotlin.$_$.jn;
  var mapOf = kotlin_kotlin.$_$.ya;
  var initMetadataForObject = kotlin_kotlin.$_$.bg;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.l2;
  var Companion_getInstance_2 = kotlin_androidx_compose_runtime_runtime.$_$.z2;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.k2;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m4;
  var get_VectorConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.u;
  var createDeferredAnimation = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j1;
  var get_VectorConverter_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.x;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui.$_$.ac;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.c1;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.v4;
  var get_VectorConverter_1 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.y;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.l5;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wm;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var IntOffset__minus_impl_4m69hb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g3;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k1;
  var IntOffset__plus_impl_nqoa9b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i3;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o3;
  var shiftRight = kotlin_kotlin.$_$.ve;
  var convertToInt = kotlin_kotlin.$_$.je;
  var KMutableProperty0 = kotlin_kotlin.$_$.hi;
  var getLocalDelegateReference = kotlin_kotlin.$_$.qf;
  var _TransformOrigin___get_pivotFractionX__impl__a9pmci = kotlin_org_jetbrains_compose_ui_ui.$_$.za;
  var _TransformOrigin___get_pivotFractionY__impl__ijwupp = kotlin_org_jetbrains_compose_ui_ui.$_$.ab;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var TransformOrigin_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.a1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui.$_$.kb;
  var get_VisibilityThreshold_1 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a1;
  var toNumber = kotlin_kotlin.$_$.xe;
  var compare = kotlin_kotlin.$_$.ie;
  var equalsLong = kotlin_kotlin.$_$.me;
  var numberToLong = kotlin_kotlin.$_$.se;
  var requireLayoutCoordinates = kotlin_org_jetbrains_compose_ui_ui.$_$.n6;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var floatFromBits = kotlin_kotlin.$_$.of;
  var requireDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.l6;
  var drawLayer = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m4;
  var mutableFloatStateOf = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var requireGraphicsContext = kotlin_org_jetbrains_compose_ui_ui.$_$.m6;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.a5;
  var get_providedValues = kotlin_org_jetbrains_compose_ui_ui.$_$.r4;
  var provide = kotlin_org_jetbrains_compose_ui_ui.$_$.s4;
  var get_current = kotlin_org_jetbrains_compose_ui_ui.$_$.q4;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.b5;
  var ModifierLocalModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.t4;
  var Offset__minus_impl_hoj2c0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var round = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var toRawBits = kotlin_kotlin.$_$.gn;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var roundToInt = kotlin_kotlin.$_$.fh;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n4;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d;
  var modifierLocalMapOf = kotlin_org_jetbrains_compose_ui_ui.$_$.v4;
  var roundToIntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i4;
  var coerceAtLeast = kotlin_kotlin.$_$.oh;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var isPlacementApproachInProgress = kotlin_org_jetbrains_compose_ui_ui.$_$.s2;
  var minApproachIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.w2;
  var minApproachIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.v2;
  var maxApproachIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.u2;
  var maxApproachIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.t2;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.j5;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.i5;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.h5;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.g5;
  var ApproachLayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.x2;
  var modifierLocalOf = kotlin_org_jetbrains_compose_ui_ui.$_$.w4;
  var RememberObserver = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var firstOrNull = kotlin_kotlin.$_$.r9;
  var mutableStateListOf = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var Offset__plus_impl_c78cg0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui.$_$.ub;
  var LookaheadScope = kotlin_org_jetbrains_compose_ui_ui.$_$.k3;
  var KProperty1 = kotlin_kotlin.$_$.ki;
  var SnapshotStateObserver = kotlin_androidx_compose_runtime_runtime.$_$.f;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.h;
  var lazy = kotlin_kotlin.$_$.um;
  var invert = kotlin_kotlin.$_$.oe;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f1;
  var addOutline = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p1;
  var Comparator = kotlin_kotlin.$_$.hl;
  var MutableTransitionState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.p;
  var androidx_compose_animation_core_MutableTransitionState$stableprop_getter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d1;
  var rememberTransition = kotlin_org_jetbrains_compose_animation_animation_core.$_$.m1;
  var createChildTransitionInternal = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i1;
  var get_VectorConverter_2 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.w;
  var compareValues = kotlin_kotlin.$_$.ad;
  var CoroutineImpl = kotlin_kotlin.$_$.ud;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var initMetadataForLambda = kotlin_kotlin.$_$.ag;
  var MutableScatterMap = kotlin_androidx_collection_collection.$_$.n;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.dn;
  var sortWith = kotlin_kotlin.$_$.bc;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var localLookaheadPositionOf$default = kotlin_org_jetbrains_compose_ui_ui.$_$.qa;
  var SuspendFunction1 = kotlin_kotlin.$_$.wd;
  var _Color___get_colorSpace__impl__jqqozk = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j3;
  var animateValueAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g1;
  var _ScaleFactor___get_packedValue__impl__x2069g = kotlin_org_jetbrains_compose_ui_ui.$_$.fb;
  var _ScaleFactor___init__impl__ttdtvk = kotlin_org_jetbrains_compose_ui_ui.$_$.eb;
  var generateDecayAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l1;
  var coerceIn = kotlin_kotlin.$_$.uh;
  var numberToInt = kotlin_kotlin.$_$.wg;
  var divide = kotlin_kotlin.$_$.le;
  var multiply = kotlin_kotlin.$_$.qe;
  var FloatDecayAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.m;
  var Companion_getInstance_11 = kotlin_androidx_compose_runtime_runtime.$_$.y2;
  var derivedStateOf = kotlin_androidx_compose_runtime_runtime.$_$.v1;
  var createTransitionAnimation = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k1;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.v6;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(BoundsTransform, 'BoundsTransform');
  initMetadataForClass(sam$androidx_compose_animation_BoundsTransform$0, 'sam$androidx_compose_animation_BoundsTransform$0', VOID, VOID, [BoundsTransform, FunctionAdapter]);
  function animateEnterExit(_this__u8e3s4, enter, exit, label) {
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = AnimatedVisibilityScope$animateEnterExit$lambda(enter, exit, label);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp_0 = tmp;
    return composed(_this__u8e3s4, tmp_0, AnimatedVisibilityScope$animateEnterExit$lambda_0(this, enter, exit, label));
  }
  function animateEnterExit$default(_this__u8e3s4, enter, exit, label, $super) {
    enter = enter === VOID ? fadeIn() : enter;
    exit = exit === VOID ? fadeOut() : exit;
    label = label === VOID ? 'animateEnterExit' : label;
    return $super === VOID ? this.animateEnterExit_z97dqu_k$(_this__u8e3s4, enter, exit, label) : animateEnterExit(_this__u8e3s4, enter, exit, label);
  }
  initMetadataForInterface(AnimatedVisibilityScope, 'AnimatedVisibilityScope');
  initMetadataForClass(EnterExitState, 'EnterExitState', VOID, Enum);
  initMetadataForClass(LayoutModifierNodeWithPassThroughIntrinsics, 'LayoutModifierNodeWithPassThroughIntrinsics', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(BoundsAnimation, 'BoundsAnimation');
  initMetadataForCompanion(Companion);
  initMetadataForClass(EnterTransition, 'EnterTransition');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ExitTransition, 'ExitTransition');
  initMetadataForClass(ExperimentalAnimationApi, 'ExperimentalAnimationApi', VOID, VOID, [Annotation]);
  initMetadataForClass(TransitionData, 'TransitionData', TransitionData);
  initMetadataForClass(EnterTransitionImpl, 'EnterTransitionImpl', VOID, EnterTransition);
  initMetadataForClass(Fade, 'Fade');
  initMetadataForClass(Slide, 'Slide');
  initMetadataForClass(ChangeSize, 'ChangeSize');
  initMetadataForClass(Scale, 'Scale');
  initMetadataForInterface(TransitionEffectKey, 'TransitionEffectKey');
  initMetadataForClass(TransitionEffect, 'TransitionEffect');
  initMetadataForClass(ExitTransitionImpl, 'ExitTransitionImpl', VOID, ExitTransition);
  initMetadataForObject(Key, 'Key', VOID, VOID, [TransitionEffectKey]);
  initMetadataForClass(ContentScaleTransitionEffect, 'ContentScaleTransitionEffect', VOID, TransitionEffect);
  initMetadataForInterface(GraphicsLayerBlockForEnterExit, 'GraphicsLayerBlockForEnterExit');
  initMetadataForClass(EnterExitTransitionElement, 'EnterExitTransitionElement', VOID, ModifierNodeElement);
  initMetadataForClass(EnterExitTransitionModifierNode, 'EnterExitTransitionModifierNode', VOID, LayoutModifierNodeWithPassThroughIntrinsics);
  initMetadataForClass(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0, 'sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0', VOID, VOID, [GraphicsLayerBlockForEnterExit, FunctionAdapter]);
  initMetadataForClass(ExperimentalSharedTransitionApi, 'ExperimentalSharedTransitionApi', VOID, VOID, [Annotation]);
  initMetadataForClass(FlingInfo, 'FlingInfo');
  initMetadataForClass(FlingCalculator, 'FlingCalculator');
  initMetadataForClass(RenderInTransitionOverlayNodeElement, 'RenderInTransitionOverlayNodeElement', VOID, ModifierNodeElement);
  initMetadataForInterface(LayerRenderer, 'LayerRenderer');
  initMetadataForClass(LayerWithRenderer, 'LayerWithRenderer', VOID, VOID, [LayerRenderer]);
  initMetadataForClass(RenderInTransitionOverlayNode, 'RenderInTransitionOverlayNode', VOID, Node, [Node, DrawModifierNode, ModifierLocalModifierNode]);
  initMetadataForClass(SharedBoundsNodeElement, 'SharedBoundsNodeElement', VOID, ModifierNodeElement);
  initMetadataForInterface(BoundsProvider, 'BoundsProvider');
  initMetadataForClass(SharedBoundsNode, 'SharedBoundsNode', VOID, Node, [ApproachLayoutModifierNode, Node, DrawModifierNode, ModifierLocalModifierNode, BoundsProvider]);
  initMetadataForClass(SharedElementInternalState, 'SharedElementInternalState', VOID, VOID, [LayerRenderer, RememberObserver]);
  initMetadataForClass(SharedElement, 'SharedElement');
  initMetadataForClass(TargetData, 'TargetData');
  initMetadataForInterface(PlaceHolderSize, 'PlaceHolderSize');
  initMetadataForClass(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0, 'sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0', VOID, VOID, [PlaceHolderSize, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0_0, 'sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0', VOID, VOID, [PlaceHolderSize, FunctionAdapter]);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForInterface(ResizeMode, 'ResizeMode');
  initMetadataForInterface(OverlayClip, 'OverlayClip');
  initMetadataForClass(SharedContentState, 'SharedContentState');
  function scaleInSharedContentToBounds(contentScale, alignment) {
    return withEffect(Companion_getInstance_12().get_None_wo6tgh_k$(), new ContentScaleTransitionEffect(contentScale, alignment));
  }
  function scaleInSharedContentToBounds$default(contentScale, alignment, $super) {
    contentScale = contentScale === VOID ? Companion_getInstance_10().get_Fit_18jtko_k$() : contentScale;
    alignment = alignment === VOID ? Companion_getInstance_1().get_Center_3arb0i_k$() : alignment;
    return $super === VOID ? this.scaleInSharedContentToBounds_8dgsag_k$(contentScale, alignment) : scaleInSharedContentToBounds(contentScale, alignment);
  }
  function scaleOutSharedContentToBounds(contentScale, alignment) {
    return withEffect_0(Companion_getInstance_13().get_None_wo6tgh_k$(), new ContentScaleTransitionEffect(contentScale, alignment));
  }
  function scaleOutSharedContentToBounds$default(contentScale, alignment, $super) {
    contentScale = contentScale === VOID ? Companion_getInstance_10().get_Fit_18jtko_k$() : contentScale;
    alignment = alignment === VOID ? Companion_getInstance_1().get_Center_3arb0i_k$() : alignment;
    return $super === VOID ? this.scaleOutSharedContentToBounds_u503ir_k$(contentScale, alignment) : scaleOutSharedContentToBounds(contentScale, alignment);
  }
  function renderInSharedTransitionScopeOverlay$default(_this__u8e3s4, renderInOverlay, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    var tmp;
    if (renderInOverlay === VOID) {
      tmp = SharedTransitionScope$renderInSharedTransitionScopeOverlay$lambda(this);
    } else {
      tmp = renderInOverlay;
    }
    renderInOverlay = tmp;
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    clipInOverlayDuringTransition = clipInOverlayDuringTransition === VOID ? get_DefaultClipInOverlayDuringTransition() : clipInOverlayDuringTransition;
    return $super === VOID ? this.renderInSharedTransitionScopeOverlay_gioz4y_k$(_this__u8e3s4, renderInOverlay, zIndexInOverlay, clipInOverlayDuringTransition) : $super.renderInSharedTransitionScopeOverlay_gioz4y_k$.call(this, _this__u8e3s4, renderInOverlay, zIndexInOverlay, clipInOverlayDuringTransition);
  }
  function sharedElement$default(_this__u8e3s4, sharedContentState, animatedVisibilityScope, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    boundsTransform = boundsTransform === VOID ? get_DefaultBoundsTransform_0() : boundsTransform;
    placeHolderSize = placeHolderSize === VOID ? Companion_getInstance_14().contentSize_1 : placeHolderSize;
    renderInOverlayDuringTransition = renderInOverlayDuringTransition === VOID ? true : renderInOverlayDuringTransition;
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    clipInOverlayDuringTransition = clipInOverlayDuringTransition === VOID ? get_ParentClip() : clipInOverlayDuringTransition;
    return $super === VOID ? this.sharedElement_5f1zge_k$(_this__u8e3s4, sharedContentState, animatedVisibilityScope, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) : $super.sharedElement_5f1zge_k$.call(this, _this__u8e3s4, sharedContentState, animatedVisibilityScope, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  }
  function sharedBounds$default(_this__u8e3s4, sharedContentState, animatedVisibilityScope, enter, exit, boundsTransform, resizeMode, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    enter = enter === VOID ? fadeIn() : enter;
    exit = exit === VOID ? fadeOut() : exit;
    boundsTransform = boundsTransform === VOID ? get_DefaultBoundsTransform_0() : boundsTransform;
    resizeMode = resizeMode === VOID ? Companion_getInstance_15().ScaleToBounds_s3l72r_k$(Companion_getInstance_10().get_FillWidth_n2o75m_k$(), Companion_getInstance_1().get_Center_3arb0i_k$()) : resizeMode;
    placeHolderSize = placeHolderSize === VOID ? Companion_getInstance_14().contentSize_1 : placeHolderSize;
    renderInOverlayDuringTransition = renderInOverlayDuringTransition === VOID ? true : renderInOverlayDuringTransition;
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    clipInOverlayDuringTransition = clipInOverlayDuringTransition === VOID ? get_ParentClip() : clipInOverlayDuringTransition;
    return $super === VOID ? this.sharedBounds_k7ql06_k$(_this__u8e3s4, sharedContentState, animatedVisibilityScope, enter, exit, boundsTransform, resizeMode, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) : $super.sharedBounds_k7ql06_k$.call(this, _this__u8e3s4, sharedContentState, animatedVisibilityScope, enter, exit, boundsTransform, resizeMode, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  }
  function sharedElementWithCallerManagedVisibility$default(_this__u8e3s4, sharedContentState, visible, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    boundsTransform = boundsTransform === VOID ? get_DefaultBoundsTransform_0() : boundsTransform;
    placeHolderSize = placeHolderSize === VOID ? Companion_getInstance_14().contentSize_1 : placeHolderSize;
    renderInOverlayDuringTransition = renderInOverlayDuringTransition === VOID ? true : renderInOverlayDuringTransition;
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    clipInOverlayDuringTransition = clipInOverlayDuringTransition === VOID ? get_ParentClip() : clipInOverlayDuringTransition;
    return $super === VOID ? this.sharedElementWithCallerManagedVisibility_pswh70_k$(_this__u8e3s4, sharedContentState, visible, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) : $super.sharedElementWithCallerManagedVisibility_pswh70_k$.call(this, _this__u8e3s4, sharedContentState, visible, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  }
  initMetadataForInterface(SharedTransitionScope, 'SharedTransitionScope', VOID, VOID, [LookaheadScope]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(ShapeBasedClip, 'ShapeBasedClip', VOID, VOID, [OverlayClip]);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForLambda(SharedTransitionScopeImpl$onStateRemoved$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(SharedTransitionScopeImpl, 'SharedTransitionScopeImpl', VOID, VOID, [SharedTransitionScope, LookaheadScope]);
  initMetadataForClass(ScaleToBoundsImpl, 'ScaleToBoundsImpl', VOID, VOID, [ResizeMode]);
  initMetadataForObject(RemeasureImpl, 'RemeasureImpl', VOID, VOID, [ResizeMode]);
  initMetadataForClass(sam$androidx_compose_animation_BoundsTransform$0_0, 'sam$androidx_compose_animation_BoundsTransform$0', VOID, VOID, [BoundsTransform, FunctionAdapter]);
  initMetadataForClass(ParentClip$1, VOID, VOID, VOID, [OverlayClip]);
  initMetadataForClass(SkipToLookaheadElement, 'SkipToLookaheadElement', SkipToLookaheadElement, ModifierNodeElement);
  initMetadataForClass(SkipToLookaheadNode, 'SkipToLookaheadNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(FlingResult, 'FlingResult');
  initMetadataForObject(AndroidFlingSpline, 'AndroidFlingSpline');
  initMetadataForClass(SplineBasedFloatDecayAnimationSpec, 'SplineBasedFloatDecayAnimationSpec', VOID, VOID, [FloatDecayAnimationSpec]);
  initMetadataForClass(NoOp, 'NoOp', VOID, VOID, [Annotation]);
  //endregion
  function get_DefaultBoundsTransform() {
    _init_properties_AnimateBoundsModifier_kt__rz48or();
    return DefaultBoundsTransform;
  }
  var DefaultBoundsTransform;
  var androidx_compose_animation_BoundsAnimationElement$stable;
  var androidx_compose_animation_BoundsAnimationModifierNode$stable;
  var androidx_compose_animation_BoundsTransformDeferredAnimation$stable;
  function sam$androidx_compose_animation_BoundsTransform$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_BoundsTransform$0).transform_372bqs_k$ = function (initialBounds, targetBounds) {
    return this.function_1(initialBounds, targetBounds);
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, BoundsTransform) : false) {
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
  protoOf(sam$androidx_compose_animation_BoundsTransform$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function DefaultBoundsTransform$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    _init_properties_AnimateBoundsModifier_kt__rz48or();
    return spring(1.0, 400.0, get_VisibilityThreshold(Companion_getInstance()));
  }
  var properties_initialized_AnimateBoundsModifier_kt_8xxu7x;
  function _init_properties_AnimateBoundsModifier_kt__rz48or() {
    if (!properties_initialized_AnimateBoundsModifier_kt_8xxu7x) {
      properties_initialized_AnimateBoundsModifier_kt_8xxu7x = true;
      var tmp = DefaultBoundsTransform$lambda;
      DefaultBoundsTransform = new sam$androidx_compose_animation_BoundsTransform$0(tmp);
      androidx_compose_animation_BoundsAnimationElement$stable = 0;
      androidx_compose_animation_BoundsAnimationModifierNode$stable = 8;
      androidx_compose_animation_BoundsTransformDeferredAnimation$stable = 8;
    }
  }
  function get_UnspecifiedSize() {
    _init_properties_AnimatedContent_kt__n7dixw();
    return UnspecifiedSize;
  }
  var UnspecifiedSize;
  var androidx_compose_animation_ContentTransform$stable;
  var androidx_compose_animation_AnimatedContentTransitionScopeImpl_ChildData$stable;
  var androidx_compose_animation_AnimatedContentTransitionScopeImpl$stable;
  var properties_initialized_AnimatedContent_kt_39yooq;
  function _init_properties_AnimatedContent_kt__n7dixw() {
    if (!properties_initialized_AnimatedContent_kt_39yooq) {
      properties_initialized_AnimatedContent_kt_39yooq = true;
      var tmp0 = -2147483648;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = -2147483648;
      var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      UnspecifiedSize = _IntSize___init__impl__emcjft(tmp$ret$0);
      androidx_compose_animation_ContentTransform$stable = 8;
      androidx_compose_animation_AnimatedContentTransitionScopeImpl_ChildData$stable = 0;
      androidx_compose_animation_AnimatedContentTransitionScopeImpl$stable = 8;
    }
  }
  var androidx_compose_animation_AnimatedVisibilityScopeImpl$stable;
  function AnimatedVisibilityScope$animateEnterExit$lambda($enter, $exit, $label) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.set_name_wkmnld_k$('animateEnterExit');
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('enter', $enter);
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('exit', $exit);
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('label', $label);
      return Unit_getInstance();
    };
  }
  function AnimatedVisibilityScope$animateEnterExit$lambda_0(this$0, $enter, $exit, $label) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceGroup_5hh8aj_k$(1840112047);
      sourceInformation($composer_0, 'C654@37833L42:AnimatedVisibility.kt#xbi5r1');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1840112047, $changed, -1, 'androidx.compose.animation.AnimatedVisibilityScope.animateEnterExit.<anonymous> (AnimatedVisibility.kt:654)');
        tmp = Unit_getInstance();
      }
      var tmp_0 = this$0.get_transition_mcca1q_k$();
      var tmp0 = $this$composed.then_g5qrxq_k$(createModifier(tmp_0, $enter, $exit, null, $label, $composer_0, 0, 4));
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      return tmp0;
    };
  }
  function AnimatedVisibilityScope() {
  }
  var EnterExitState_PreEnter_instance;
  var EnterExitState_Visible_instance;
  var EnterExitState_PostExit_instance;
  function values() {
    return [EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'PreEnter':
        return EnterExitState_PreEnter_getInstance();
      case 'Visible':
        return EnterExitState_Visible_getInstance();
      case 'PostExit':
        return EnterExitState_PostExit_getInstance();
      default:
        EnterExitState_initEntries();
        THROW_IAE('No enum constant androidx.compose.animation.EnterExitState.' + value);
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var EnterExitState_entriesInitialized;
  function EnterExitState_initEntries() {
    if (EnterExitState_entriesInitialized)
      return Unit_getInstance();
    EnterExitState_entriesInitialized = true;
    EnterExitState_PreEnter_instance = new EnterExitState('PreEnter', 0);
    EnterExitState_Visible_instance = new EnterExitState('Visible', 1);
    EnterExitState_PostExit_instance = new EnterExitState('PostExit', 2);
  }
  var $ENTRIES;
  function EnterExitState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function EnterExitState_PreEnter_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_PreEnter_instance;
  }
  function EnterExitState_Visible_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_Visible_instance;
  }
  function EnterExitState_PostExit_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_PostExit_instance;
  }
  function get_InvalidSize() {
    _init_properties_AnimationModifier_kt__u6vzef();
    return InvalidSize;
  }
  var InvalidSize;
  var androidx_compose_animation_SizeAnimationModifierNode_AnimData$stable;
  var androidx_compose_animation_LayoutModifierNodeWithPassThroughIntrinsics$stable;
  function get_isValid(_this__u8e3s4) {
    _init_properties_AnimationModifier_kt__u6vzef();
    return !equals(_this__u8e3s4, get_InvalidSize());
  }
  function LayoutModifierNodeWithPassThroughIntrinsics() {
    Node.call(this);
  }
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    return measurable.minIntrinsicWidth_jyhjuj_k$(height);
  };
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).minIntrinsicHeight_xt6ly1_k$ = function (_this__u8e3s4, measurable, width) {
    return measurable.minIntrinsicHeight_p2a4ou_k$(width);
  };
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    return measurable.maxIntrinsicWidth_b8umbx_k$(height);
  };
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).maxIntrinsicHeight_nrifyt_k$ = function (_this__u8e3s4, measurable, width) {
    return measurable.maxIntrinsicHeight_b0krtc_k$(width);
  };
  var properties_initialized_AnimationModifier_kt_fvv7xx;
  function _init_properties_AnimationModifier_kt__u6vzef() {
    if (!properties_initialized_AnimationModifier_kt_fvv7xx) {
      properties_initialized_AnimationModifier_kt_fvv7xx = true;
      var tmp0 = -2147483648;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = -2147483648;
      var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      InvalidSize = _IntSize___init__impl__emcjft(tmp$ret$0);
      androidx_compose_animation_SizeAnimationModifierNode_AnimData$stable = 8;
      androidx_compose_animation_LayoutModifierNodeWithPassThroughIntrinsics$stable = androidx_compose_ui_Modifier_Node$stableprop_getter();
    }
  }
  function get_DefaultBoundsAnimation() {
    _init_properties_BoundsAnimation_kt__z215v();
    return DefaultBoundsAnimation;
  }
  var DefaultBoundsAnimation;
  var androidx_compose_animation_BoundsAnimation$stable;
  function _set_animation__pan2kh($this, _set____db54di) {
    var tmp0 = $this.animation$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = BoundsAnimation$_get_animation_$ref_tlzlmh_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('animation', 1, tmp, tmp_0, BoundsAnimation$_set_animation_$ref_ee8345_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_boundsTransform__qqq4ha($this, _set____db54di) {
    var tmp0 = $this.boundsTransform$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = BoundsAnimation$_get_boundsTransform_$ref_5heh6c_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('boundsTransform', 1, tmp, tmp_0, BoundsAnimation$_set_boundsTransform_$ref_7tbrq0_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_boundsTransform__y6npza($this) {
    var tmp0 = $this.boundsTransform$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = BoundsAnimation$_get_boundsTransform_$ref_5heh6c();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('boundsTransform', 1, tmp, tmp_0, BoundsAnimation$_set_boundsTransform_$ref_7tbrq0());
    return tmp0.get_value_j01efc_k$();
  }
  function BoundsAnimation$_get_animation_$ref_tlzlmh() {
    return function (p0) {
      return p0.get_animation_r0gd0b_k$();
    };
  }
  function BoundsAnimation$_set_animation_$ref_ee8345() {
    return function (p0, p1) {
      _set_animation__pan2kh(p0, p1);
      return Unit_getInstance();
    };
  }
  function BoundsAnimation$_get_animation_$ref_tlzlmh_0() {
    return function (p0) {
      return p0.get_animation_r0gd0b_k$();
    };
  }
  function BoundsAnimation$_set_animation_$ref_ee8345_0() {
    return function (p0, p1) {
      _set_animation__pan2kh(p0, p1);
      return Unit_getInstance();
    };
  }
  function BoundsAnimation$_get_boundsTransform_$ref_5heh6c() {
    return function (p0) {
      return _get_boundsTransform__y6npza(p0);
    };
  }
  function BoundsAnimation$_set_boundsTransform_$ref_7tbrq0() {
    return function (p0, p1) {
      _set_boundsTransform__qqq4ha(p0, p1);
      return Unit_getInstance();
    };
  }
  function BoundsAnimation$_get_boundsTransform_$ref_5heh6c_0() {
    return function (p0) {
      return _get_boundsTransform__y6npza(p0);
    };
  }
  function BoundsAnimation$_set_boundsTransform_$ref_7tbrq0_0() {
    return function (p0, p1) {
      _set_boundsTransform__qqq4ha(p0, p1);
      return Unit_getInstance();
    };
  }
  function BoundsAnimation$_get_animationState_$ref_pbhvr6() {
    return function (p0) {
      return p0.get_animationState_98s4ty_k$();
    };
  }
  function BoundsAnimation$_set_animationState_$ref_brqv3m() {
    return function (p0, p1) {
      p0.set_animationState_b8sgwb_k$(p1);
      return Unit_getInstance();
    };
  }
  function BoundsAnimation$_get_animationState_$ref_pbhvr6_0() {
    return function (p0) {
      return p0.get_animationState_98s4ty_k$();
    };
  }
  function BoundsAnimation$_set_animationState_$ref_brqv3m_0() {
    return function (p0, p1) {
      p0.set_animationState_b8sgwb_k$(p1);
      return Unit_getInstance();
    };
  }
  function BoundsAnimation$animate$lambda(this$0) {
    return function ($this$animate) {
      return this$0.animationSpec_1;
    };
  }
  function BoundsAnimation$animate$lambda_0(this$0, $targetBounds, $currentBounds) {
    return function (it) {
      var tmp;
      if (it === this$0.transition_1.get_targetState_kri3mx_k$()) {
        tmp = $targetBounds;
      } else {
        tmp = $currentBounds;
      }
      return tmp;
    };
  }
  function BoundsAnimation(transitionScope, transition, animation, boundsTransform) {
    this.transitionScope_1 = transitionScope;
    this.transition_1 = transition;
    this.animation$delegate_1 = mutableStateOf(animation);
    this.boundsTransform$delegate_1 = mutableStateOf(boundsTransform);
    this.animationSpec_1 = get_DefaultBoundsAnimation();
    this.animationState$delegate_1 = mutableStateOf(null);
  }
  protoOf(BoundsAnimation).get_transitionScope_6wk9w6_k$ = function () {
    return this.transitionScope_1;
  };
  protoOf(BoundsAnimation).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(BoundsAnimation).get_animation_r0gd0b_k$ = function () {
    var tmp0 = this.animation$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = BoundsAnimation$_get_animation_$ref_tlzlmh();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('animation', 1, tmp, tmp_0, BoundsAnimation$_set_animation_$ref_ee8345());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(BoundsAnimation).updateAnimation_opighb_k$ = function (animation, boundsTransform) {
    if (!equals(this.get_animation_r0gd0b_k$(), animation)) {
      _set_animation__pan2kh(this, animation);
      this.set_animationState_b8sgwb_k$(null);
      this.animationSpec_1 = get_DefaultBoundsAnimation();
    }
    _set_boundsTransform__qqq4ha(this, boundsTransform);
  };
  protoOf(BoundsAnimation).get_isRunning_okmtn0_k$ = function () {
    var parent = this.transition_1;
    while (!(parent.get_parentTransition_svtbx4_k$() == null)) {
      parent = ensureNotNull(parent.get_parentTransition_svtbx4_k$());
    }
    return !equals(parent.get_currentState_snihnl_k$(), parent.get_targetState_kri3mx_k$());
  };
  protoOf(BoundsAnimation).set_animationSpec_fee48z_k$ = function (_set____db54di) {
    this.animationSpec_1 = _set____db54di;
  };
  protoOf(BoundsAnimation).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(BoundsAnimation).set_animationState_b8sgwb_k$ = function (_set____db54di) {
    var tmp0 = this.animationState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = BoundsAnimation$_get_animationState_$ref_pbhvr6_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('animationState', 1, tmp, tmp_0, BoundsAnimation$_set_animationState_$ref_brqv3m_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(BoundsAnimation).get_animationState_98s4ty_k$ = function () {
    var tmp0 = this.animationState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = BoundsAnimation$_get_animationState_$ref_pbhvr6();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('animationState', 1, tmp, tmp_0, BoundsAnimation$_set_animationState_$ref_brqv3m());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(BoundsAnimation).get_value_j01efc_k$ = function () {
    var tmp;
    if (this.transitionScope_1.get_isTransitionActive_t69j02_k$()) {
      var tmp0_safe_receiver = this.get_animationState_98s4ty_k$();
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_value_j01efc_k$();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(BoundsAnimation).animate_s3upvz_k$ = function (currentBounds, targetBounds) {
    if (this.transitionScope_1.get_isTransitionActive_t69j02_k$()) {
      if (this.get_animationState_98s4ty_k$() == null) {
        this.animationSpec_1 = _get_boundsTransform__y6npza(this).transform_372bqs_k$(currentBounds, targetBounds);
      }
      var tmp = this.get_animation_r0gd0b_k$();
      var tmp_0 = BoundsAnimation$animate$lambda(this);
      this.set_animationState_b8sgwb_k$(tmp.animate_lt3uhv_k$(tmp_0, BoundsAnimation$animate$lambda_0(this, targetBounds, currentBounds)));
    }
  };
  protoOf(BoundsAnimation).get_target_juba8q_k$ = function () {
    return this.transition_1.get_targetState_kri3mx_k$();
  };
  var properties_initialized_BoundsAnimation_kt_perd29;
  function _init_properties_BoundsAnimation_kt__z215v() {
    if (!properties_initialized_BoundsAnimation_kt_perd29) {
      properties_initialized_BoundsAnimation_kt_perd29 = true;
      DefaultBoundsAnimation = spring(VOID, 400.0, get_VisibilityThreshold(Companion_getInstance()));
      androidx_compose_animation_BoundsAnimation$stable = 8;
    }
  }
  function get_ColorToVector() {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return ColorToVector;
  }
  var ColorToVector;
  function get_VectorConverter_3(_this__u8e3s4) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return get_ColorToVector();
  }
  function ColorToVector$lambda(colorSpace) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp = ColorToVector$lambda$lambda;
    return TwoWayConverter(tmp, ColorToVector$lambda$lambda_0(colorSpace));
  }
  function ColorToVector$lambda$lambda(color) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var _destruct__k2r9zo = Color__convert_impl_so5m8t(color.value_1, ColorSpaces_getInstance().get_Oklab_ierso8_k$());
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var l = _Color___get_red__impl__cwrsk6(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var a = _Color___get_green__impl__bta9rs(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var alpha = _Color___get_alpha__impl__wcfyv1(_destruct__k2r9zo);
    return new AnimationVector4D(alpha, l, a, b);
  }
  function ColorToVector$lambda$lambda_0($colorSpace) {
    return function (vector) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_0 = vector.get_v2_kntnnf_k$();
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_1 = this_0 < 0.0 ? 0.0 : this_0;
      var tmp = this_1 > 1.0 ? 1.0 : this_1;
      var tmp0 = vector.get_v3_kntnne_k$();
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var minimumValue = -0.5;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_2 = tmp0 < minimumValue ? minimumValue : tmp0;
      var tmp_0 = this_2 > 0.5 ? 0.5 : this_2;
      var tmp0_0 = vector.get_v4_kntnnd_k$();
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var minimumValue_0 = -0.5;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = tmp0_0 < minimumValue_0 ? minimumValue_0 : tmp0_0;
      var tmp_1 = this_3 > 0.5 ? 0.5 : this_3;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_4 = vector.get_v1_kntnng_k$();
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_5 = this_4 < 0.0 ? 0.0 : this_4;
      var tmp$ret$11 = this_5 > 1.0 ? 1.0 : this_5;
      return new Color_0(Color__convert_impl_so5m8t(Color(tmp, tmp_0, tmp_1, tmp$ret$11, ColorSpaces_getInstance().get_Oklab_ierso8_k$()), $colorSpace));
    };
  }
  var properties_initialized_ColorVectorConverter_kt_jaoojo;
  function _init_properties_ColorVectorConverter_kt__qncuxy() {
    if (!properties_initialized_ColorVectorConverter_kt_jaoojo) {
      properties_initialized_ColorVectorConverter_kt_jaoojo = true;
      ColorToVector = ColorToVector$lambda;
    }
  }
  function get_TransformOriginVectorConverter() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return TransformOriginVectorConverter;
  }
  var TransformOriginVectorConverter;
  function get_DefaultAlphaAndScaleSpring() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlphaAndScaleSpring;
  }
  var DefaultAlphaAndScaleSpring;
  function get_DefaultOffsetAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultOffsetAnimationSpec;
  }
  var DefaultOffsetAnimationSpec;
  function get_DefaultSizeAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultSizeAnimationSpec;
  }
  var DefaultSizeAnimationSpec;
  var androidx_compose_animation_EnterTransition$stable;
  var androidx_compose_animation_ExitTransition$stable;
  var androidx_compose_animation_TransitionEffect$stable;
  var androidx_compose_animation_ContentScaleTransitionEffect$stable;
  var androidx_compose_animation_Fade$stable;
  var androidx_compose_animation_Slide$stable;
  var androidx_compose_animation_ChangeSize$stable;
  var androidx_compose_animation_Scale$stable;
  var androidx_compose_animation_TransitionData$stable;
  function Companion() {
    Companion_instance = this;
    this.None_1 = new EnterTransitionImpl(new TransitionData());
  }
  protoOf(Companion).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance;
  function Companion_getInstance_12() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function EnterTransition() {
    Companion_getInstance_12();
  }
  protoOf(EnterTransition).plus_w36lq9_k$ = function (enter) {
    var tmp0_elvis_lhs = enter.get_data_jntocg_k$().fade_1;
    var tmp = tmp0_elvis_lhs == null ? this.get_data_jntocg_k$().fade_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = enter.get_data_jntocg_k$().slide_1;
    var tmp_0 = tmp1_elvis_lhs == null ? this.get_data_jntocg_k$().slide_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = enter.get_data_jntocg_k$().changeSize_1;
    var tmp_1 = tmp2_elvis_lhs == null ? this.get_data_jntocg_k$().changeSize_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = enter.get_data_jntocg_k$().scale_1;
    return new EnterTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? this.get_data_jntocg_k$().scale_1 : tmp3_elvis_lhs, VOID, plus(this.get_data_jntocg_k$().effectsMap_1, enter.get_data_jntocg_k$().effectsMap_1)));
  };
  protoOf(EnterTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_12().None_1)) {
      tmp = 'EnterTransition.None';
    } else {
      // Inline function 'kotlin.run' call
      var $this$run = this.get_data_jntocg_k$();
      var tmp0_safe_receiver = $this$run.fade_1;
      var tmp_0 = 'EnterTransition: \nFade - ' + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString()) + ',\nSlide - ';
      var tmp1_safe_receiver = $this$run.slide_1;
      var tmp_1 = tmp_0 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nShrink - ';
      var tmp2_safe_receiver = $this$run.changeSize_1;
      var tmp_2 = tmp_1 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nScale - ';
      var tmp3_safe_receiver = $this$run.scale_1;
      tmp = tmp_2 + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString());
    }
    return tmp;
  };
  protoOf(EnterTransition).equals = function (other) {
    var tmp;
    if (other instanceof EnterTransition) {
      tmp = other.get_data_jntocg_k$().equals(this.get_data_jntocg_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EnterTransition).hashCode = function () {
    return this.get_data_jntocg_k$().hashCode();
  };
  function fadeIn(animationSpec, initialAlpha) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0) : animationSpec;
    initialAlpha = initialAlpha === VOID ? 0.0 : initialAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(new Fade(initialAlpha, animationSpec)));
  }
  function expandVertically(animationSpec, expandFrom, clip, initialHeight) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_0()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_1().get_Bottom_3m75bg_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialHeight === VOID) {
      tmp = expandVertically$lambda;
    } else {
      tmp = initialHeight;
    }
    initialHeight = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment(expandFrom);
    return expandIn(animationSpec, tmp_0, clip, expandVertically$lambda_0(initialHeight));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.None_1 = new ExitTransitionImpl(new TransitionData());
    this.KeepUntilTransitionsFinished_1 = new ExitTransitionImpl(new TransitionData(VOID, VOID, VOID, VOID, true));
  }
  protoOf(Companion_0).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_0).get_KeepUntilTransitionsFinished_bul00d_k$ = function () {
    return this.KeepUntilTransitionsFinished_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_13() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ExitTransition() {
    Companion_getInstance_13();
  }
  protoOf(ExitTransition).plus_buzi7t_k$ = function (exit) {
    var tmp0_elvis_lhs = exit.get_data_jntocg_k$().fade_1;
    var tmp = tmp0_elvis_lhs == null ? this.get_data_jntocg_k$().fade_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = exit.get_data_jntocg_k$().slide_1;
    var tmp_0 = tmp1_elvis_lhs == null ? this.get_data_jntocg_k$().slide_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = exit.get_data_jntocg_k$().changeSize_1;
    var tmp_1 = tmp2_elvis_lhs == null ? this.get_data_jntocg_k$().changeSize_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = exit.get_data_jntocg_k$().scale_1;
    return new ExitTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? this.get_data_jntocg_k$().scale_1 : tmp3_elvis_lhs, exit.get_data_jntocg_k$().hold_1 || this.get_data_jntocg_k$().hold_1, plus(this.get_data_jntocg_k$().effectsMap_1, exit.get_data_jntocg_k$().effectsMap_1)));
  };
  protoOf(ExitTransition).equals = function (other) {
    var tmp;
    if (other instanceof ExitTransition) {
      tmp = other.get_data_jntocg_k$().equals(this.get_data_jntocg_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ExitTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_13().None_1)) {
      tmp = 'ExitTransition.None';
    } else if (this.equals(Companion_getInstance_13().KeepUntilTransitionsFinished_1)) {
      tmp = 'ExitTransition.KeepUntilTransitionsFinished';
    } else {
      // Inline function 'kotlin.run' call
      var $this$run = this.get_data_jntocg_k$();
      var tmp0_safe_receiver = $this$run.fade_1;
      var tmp_0 = 'ExitTransition: \nFade - ' + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString()) + ',\nSlide - ';
      var tmp1_safe_receiver = $this$run.slide_1;
      var tmp_1 = tmp_0 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nShrink - ';
      var tmp2_safe_receiver = $this$run.changeSize_1;
      var tmp_2 = tmp_1 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nScale - ';
      var tmp3_safe_receiver = $this$run.scale_1;
      tmp = tmp_2 + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nKeepUntilTransitionsFinished - ' + $this$run.hold_1;
    }
    return tmp;
  };
  protoOf(ExitTransition).hashCode = function () {
    return this.get_data_jntocg_k$().hashCode();
  };
  function fadeOut(animationSpec, targetAlpha) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0) : animationSpec;
    targetAlpha = targetAlpha === VOID ? 0.0 : targetAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(new Fade(targetAlpha, animationSpec)));
  }
  function shrinkVertically(animationSpec, shrinkTowards, clip, targetHeight) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_0()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_1().get_Bottom_3m75bg_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetHeight === VOID) {
      tmp = shrinkVertically$lambda;
    } else {
      tmp = targetHeight;
    }
    targetHeight = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment(shrinkTowards);
    return shrinkOut(animationSpec, tmp_0, clip, shrinkVertically$lambda_0(targetHeight));
  }
  function ExperimentalAnimationApi() {
  }
  protoOf(ExperimentalAnimationApi).equals = function (other) {
    if (!(other instanceof ExperimentalAnimationApi))
      return false;
    other instanceof ExperimentalAnimationApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalAnimationApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalAnimationApi).toString = function () {
    return '@androidx.compose.animation.ExperimentalAnimationApi(' + ')';
  };
  function TransitionData(fade, slide, changeSize, scale, hold, effectsMap) {
    fade = fade === VOID ? null : fade;
    slide = slide === VOID ? null : slide;
    changeSize = changeSize === VOID ? null : changeSize;
    scale = scale === VOID ? null : scale;
    hold = hold === VOID ? false : hold;
    effectsMap = effectsMap === VOID ? emptyMap() : effectsMap;
    this.fade_1 = fade;
    this.slide_1 = slide;
    this.changeSize_1 = changeSize;
    this.scale_1 = scale;
    this.hold_1 = hold;
    this.effectsMap_1 = effectsMap;
  }
  protoOf(TransitionData).get_fade_woluit_k$ = function () {
    return this.fade_1;
  };
  protoOf(TransitionData).get_slide_iykyvc_k$ = function () {
    return this.slide_1;
  };
  protoOf(TransitionData).get_changeSize_fljy3e_k$ = function () {
    return this.changeSize_1;
  };
  protoOf(TransitionData).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(TransitionData).get_hold_wonf2g_k$ = function () {
    return this.hold_1;
  };
  protoOf(TransitionData).get_effectsMap_87u2yr_k$ = function () {
    return this.effectsMap_1;
  };
  protoOf(TransitionData).component1_7eebsc_k$ = function () {
    return this.fade_1;
  };
  protoOf(TransitionData).component2_7eebsb_k$ = function () {
    return this.slide_1;
  };
  protoOf(TransitionData).component3_7eebsa_k$ = function () {
    return this.changeSize_1;
  };
  protoOf(TransitionData).component4_7eebs9_k$ = function () {
    return this.scale_1;
  };
  protoOf(TransitionData).component5_7eebs8_k$ = function () {
    return this.hold_1;
  };
  protoOf(TransitionData).component6_7eebs7_k$ = function () {
    return this.effectsMap_1;
  };
  protoOf(TransitionData).copy_qnn6ir_k$ = function (fade, slide, changeSize, scale, hold, effectsMap) {
    return new TransitionData(fade, slide, changeSize, scale, hold, effectsMap);
  };
  protoOf(TransitionData).copy$default_6r0pba_k$ = function (fade, slide, changeSize, scale, hold, effectsMap, $super) {
    fade = fade === VOID ? this.fade_1 : fade;
    slide = slide === VOID ? this.slide_1 : slide;
    changeSize = changeSize === VOID ? this.changeSize_1 : changeSize;
    scale = scale === VOID ? this.scale_1 : scale;
    hold = hold === VOID ? this.hold_1 : hold;
    effectsMap = effectsMap === VOID ? this.effectsMap_1 : effectsMap;
    return $super === VOID ? this.copy_qnn6ir_k$(fade, slide, changeSize, scale, hold, effectsMap) : $super.copy_qnn6ir_k$.call(this, fade, slide, changeSize, scale, hold, effectsMap);
  };
  protoOf(TransitionData).toString = function () {
    return 'TransitionData(fade=' + toString(this.fade_1) + ', slide=' + toString(this.slide_1) + ', changeSize=' + toString(this.changeSize_1) + ', scale=' + toString(this.scale_1) + ', hold=' + this.hold_1 + ', effectsMap=' + toString_0(this.effectsMap_1) + ')';
  };
  protoOf(TransitionData).hashCode = function () {
    var result = this.fade_1 == null ? 0 : this.fade_1.hashCode();
    result = imul(result, 31) + (this.slide_1 == null ? 0 : this.slide_1.hashCode()) | 0;
    result = imul(result, 31) + (this.changeSize_1 == null ? 0 : this.changeSize_1.hashCode()) | 0;
    result = imul(result, 31) + (this.scale_1 == null ? 0 : this.scale_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.hold_1) | 0;
    result = imul(result, 31) + hashCode(this.effectsMap_1) | 0;
    return result;
  };
  protoOf(TransitionData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransitionData))
      return false;
    var tmp0_other_with_cast = other instanceof TransitionData ? other : THROW_CCE();
    if (!equals(this.fade_1, tmp0_other_with_cast.fade_1))
      return false;
    if (!equals(this.slide_1, tmp0_other_with_cast.slide_1))
      return false;
    if (!equals(this.changeSize_1, tmp0_other_with_cast.changeSize_1))
      return false;
    if (!equals(this.scale_1, tmp0_other_with_cast.scale_1))
      return false;
    if (!(this.hold_1 === tmp0_other_with_cast.hold_1))
      return false;
    if (!equals(this.effectsMap_1, tmp0_other_with_cast.effectsMap_1))
      return false;
    return true;
  };
  function EnterTransitionImpl(data) {
    EnterTransition.call(this);
    this.data_1 = data;
  }
  protoOf(EnterTransitionImpl).get_data_jntocg_k$ = function () {
    return this.data_1;
  };
  function Fade(alpha, animationSpec) {
    this.alpha_1 = alpha;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Fade).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Fade).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Fade).component1_7eebsc_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Fade).component2_7eebsb_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Fade).copy_z8z8aw_k$ = function (alpha, animationSpec) {
    return new Fade(alpha, animationSpec);
  };
  protoOf(Fade).copy$default_ma0w9o_k$ = function (alpha, animationSpec, $super) {
    alpha = alpha === VOID ? this.alpha_1 : alpha;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_z8z8aw_k$(alpha, animationSpec) : $super.copy_z8z8aw_k$.call(this, alpha, animationSpec);
  };
  protoOf(Fade).toString = function () {
    return 'Fade(alpha=' + this.alpha_1 + ', animationSpec=' + toString_0(this.animationSpec_1) + ')';
  };
  protoOf(Fade).hashCode = function () {
    var result = getNumberHashCode(this.alpha_1);
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Fade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Fade))
      return false;
    var tmp0_other_with_cast = other instanceof Fade ? other : THROW_CCE();
    if (!equals(this.alpha_1, tmp0_other_with_cast.alpha_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    return true;
  };
  function Slide(slideOffset, animationSpec) {
    this.slideOffset_1 = slideOffset;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Slide).get_slideOffset_3j6nyd_k$ = function () {
    return this.slideOffset_1;
  };
  protoOf(Slide).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Slide).component1_7eebsc_k$ = function () {
    return this.slideOffset_1;
  };
  protoOf(Slide).component2_7eebsb_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Slide).copy_rxbt3p_k$ = function (slideOffset, animationSpec) {
    return new Slide(slideOffset, animationSpec);
  };
  protoOf(Slide).copy$default_redmhi_k$ = function (slideOffset, animationSpec, $super) {
    slideOffset = slideOffset === VOID ? this.slideOffset_1 : slideOffset;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_rxbt3p_k$(slideOffset, animationSpec) : $super.copy_rxbt3p_k$.call(this, slideOffset, animationSpec);
  };
  protoOf(Slide).toString = function () {
    return 'Slide(slideOffset=' + toString_0(this.slideOffset_1) + ', animationSpec=' + toString_0(this.animationSpec_1) + ')';
  };
  protoOf(Slide).hashCode = function () {
    var result = hashCode(this.slideOffset_1);
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Slide).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Slide))
      return false;
    var tmp0_other_with_cast = other instanceof Slide ? other : THROW_CCE();
    if (!equals(this.slideOffset_1, tmp0_other_with_cast.slideOffset_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    return true;
  };
  function ChangeSize$_init_$lambda_705jnq(it) {
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(0), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
    var tmp$ret$1 = _IntSize___init__impl__emcjft(tmp$ret$0);
    return new IntSize(tmp$ret$1);
  }
  function ChangeSize(alignment, size, animationSpec, clip) {
    var tmp;
    if (size === VOID) {
      tmp = ChangeSize$_init_$lambda_705jnq;
    } else {
      tmp = size;
    }
    size = tmp;
    clip = clip === VOID ? true : clip;
    this.alignment_1 = alignment;
    this.size_1 = size;
    this.animationSpec_1 = animationSpec;
    this.clip_1 = clip;
  }
  protoOf(ChangeSize).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ChangeSize).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(ChangeSize).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(ChangeSize).get_clip_wok5uh_k$ = function () {
    return this.clip_1;
  };
  protoOf(ChangeSize).component1_7eebsc_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ChangeSize).component2_7eebsb_k$ = function () {
    return this.size_1;
  };
  protoOf(ChangeSize).component3_7eebsa_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(ChangeSize).component4_7eebs9_k$ = function () {
    return this.clip_1;
  };
  protoOf(ChangeSize).copy_v6ndrn_k$ = function (alignment, size, animationSpec, clip) {
    return new ChangeSize(alignment, size, animationSpec, clip);
  };
  protoOf(ChangeSize).copy$default_lm9k9y_k$ = function (alignment, size, animationSpec, clip, $super) {
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    size = size === VOID ? this.size_1 : size;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    clip = clip === VOID ? this.clip_1 : clip;
    return $super === VOID ? this.copy_v6ndrn_k$(alignment, size, animationSpec, clip) : $super.copy_v6ndrn_k$.call(this, alignment, size, animationSpec, clip);
  };
  protoOf(ChangeSize).toString = function () {
    return 'ChangeSize(alignment=' + toString_0(this.alignment_1) + ', size=' + toString_0(this.size_1) + ', animationSpec=' + toString_0(this.animationSpec_1) + ', clip=' + this.clip_1 + ')';
  };
  protoOf(ChangeSize).hashCode = function () {
    var result = hashCode(this.alignment_1);
    result = imul(result, 31) + hashCode(this.size_1) | 0;
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.clip_1) | 0;
    return result;
  };
  protoOf(ChangeSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChangeSize))
      return false;
    var tmp0_other_with_cast = other instanceof ChangeSize ? other : THROW_CCE();
    if (!equals(this.alignment_1, tmp0_other_with_cast.alignment_1))
      return false;
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    if (!(this.clip_1 === tmp0_other_with_cast.clip_1))
      return false;
    return true;
  };
  function Scale(scale, transformOrigin, animationSpec) {
    this.scale_1 = scale;
    this.transformOrigin_1 = transformOrigin;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Scale).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(Scale).get_transformOrigin_bc7467_k$ = function () {
    return this.transformOrigin_1;
  };
  protoOf(Scale).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Scale).component1_7eebsc_k$ = function () {
    return this.scale_1;
  };
  protoOf(Scale).component2_vce5p_k$ = function () {
    return this.transformOrigin_1;
  };
  protoOf(Scale).component3_7eebsa_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Scale).copy_yexmra_k$ = function (scale, transformOrigin, animationSpec) {
    return new Scale(scale, transformOrigin, animationSpec);
  };
  protoOf(Scale).copy$default_nonyxv_k$ = function (scale, transformOrigin, animationSpec, $super) {
    scale = scale === VOID ? this.scale_1 : scale;
    transformOrigin = transformOrigin === VOID ? this.transformOrigin_1 : transformOrigin;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_yexmra_k$(scale, transformOrigin, animationSpec) : $super.copy_yexmra_k$.call(this, scale, new TransformOrigin(transformOrigin), animationSpec);
  };
  protoOf(Scale).toString = function () {
    return 'Scale(scale=' + this.scale_1 + ', transformOrigin=' + TransformOrigin__toString_impl_nn7ftd(this.transformOrigin_1) + ', animationSpec=' + toString_0(this.animationSpec_1) + ')';
  };
  protoOf(Scale).hashCode = function () {
    var result = getNumberHashCode(this.scale_1);
    result = imul(result, 31) + TransformOrigin__hashCode_impl_pmqpcw(this.transformOrigin_1) | 0;
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Scale).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scale))
      return false;
    var tmp0_other_with_cast = other instanceof Scale ? other : THROW_CCE();
    if (!equals(this.scale_1, tmp0_other_with_cast.scale_1))
      return false;
    if (!equals(this.transformOrigin_1, tmp0_other_with_cast.transformOrigin_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    return true;
  };
  function TransitionEffectKey() {
  }
  function TransitionEffect() {
  }
  function expandIn(animationSpec, expandFrom, clip, initialSize) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_0()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_1().get_BottomEnd_ayz0tj_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialSize === VOID) {
      tmp = expandIn$lambda;
    } else {
      tmp = initialSize;
    }
    initialSize = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(expandFrom, initialSize, animationSpec, clip)));
  }
  function toAlignment(_this__u8e3s4) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return equals(_this__u8e3s4, Companion_getInstance_1().get_Top_18jj1w_k$()) ? Companion_getInstance_1().get_TopCenter_u4q5vl_k$() : equals(_this__u8e3s4, Companion_getInstance_1().get_Bottom_3m75bg_k$()) ? Companion_getInstance_1().get_BottomCenter_yatb1z_k$() : Companion_getInstance_1().get_Center_3arb0i_k$();
  }
  function ExitTransitionImpl(data) {
    ExitTransition.call(this);
    this.data_1 = data;
  }
  protoOf(ExitTransitionImpl).get_data_jntocg_k$ = function () {
    return this.data_1;
  };
  function shrinkOut(animationSpec, shrinkTowards, clip, targetSize) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_0()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_1().get_BottomEnd_ayz0tj_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetSize === VOID) {
      tmp = shrinkOut$lambda;
    } else {
      tmp = targetSize;
    }
    targetSize = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(shrinkTowards, targetSize, animationSpec, clip)));
  }
  function withEffect(_this__u8e3s4, effect) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, VOID, VOID, VOID, mapOf(to(effect.get_key_ouxpul_k$(), effect))));
  }
  function Key() {
    Key_instance = this;
  }
  var Key_instance;
  function Key_getInstance() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function ContentScaleTransitionEffect(contentScale, alignment) {
    Key_getInstance();
    TransitionEffect.call(this);
    this.contentScale_1 = contentScale;
    this.alignment_1 = alignment;
  }
  protoOf(ContentScaleTransitionEffect).get_contentScale_i3wrkq_k$ = function () {
    return this.contentScale_1;
  };
  protoOf(ContentScaleTransitionEffect).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ContentScaleTransitionEffect).get_key_ouxpul_k$ = function () {
    return Key_getInstance();
  };
  protoOf(ContentScaleTransitionEffect).component1_7eebsc_k$ = function () {
    return this.contentScale_1;
  };
  protoOf(ContentScaleTransitionEffect).component2_7eebsb_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ContentScaleTransitionEffect).copy_cnsp6g_k$ = function (contentScale, alignment) {
    return new ContentScaleTransitionEffect(contentScale, alignment);
  };
  protoOf(ContentScaleTransitionEffect).copy$default_5z5kzw_k$ = function (contentScale, alignment, $super) {
    contentScale = contentScale === VOID ? this.contentScale_1 : contentScale;
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    return $super === VOID ? this.copy_cnsp6g_k$(contentScale, alignment) : $super.copy_cnsp6g_k$.call(this, contentScale, alignment);
  };
  protoOf(ContentScaleTransitionEffect).toString = function () {
    return 'ContentScaleTransitionEffect(contentScale=' + toString_0(this.contentScale_1) + ', alignment=' + toString_0(this.alignment_1) + ')';
  };
  protoOf(ContentScaleTransitionEffect).hashCode = function () {
    var result = hashCode(this.contentScale_1);
    result = imul(result, 31) + hashCode(this.alignment_1) | 0;
    return result;
  };
  protoOf(ContentScaleTransitionEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContentScaleTransitionEffect))
      return false;
    var tmp0_other_with_cast = other instanceof ContentScaleTransitionEffect ? other : THROW_CCE();
    if (!equals(this.contentScale_1, tmp0_other_with_cast.contentScale_1))
      return false;
    if (!equals(this.alignment_1, tmp0_other_with_cast.alignment_1))
      return false;
    return true;
  };
  function withEffect_0(_this__u8e3s4, effect) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(VOID, VOID, VOID, VOID, VOID, mapOf(to(effect.get_key_ouxpul_k$(), effect))));
  }
  function createModifier(_this__u8e3s4, enter, exit, isEnabled, label, $composer, $changed, $default) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var isEnabled_0 = {_v: isEnabled};
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 28261782, 'C(createModifier)858@38395L8,861@38460L31,862@38513L28,891@39566L56,892@39657L38:EnterExitTransition.kt#xbi5r1');
    if (!(($default & 4) === 0)) {
      sourceInformationMarkerStart($composer_0, 1389777310, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        var value = createModifier$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      isEnabled_0._v = tmp0_group;
    }
    if (isTraceInProgress()) {
      traceEventStart(28261782, $changed, -1, 'androidx.compose.animation.createModifier (EnterExitTransition.kt:860)');
    }
    var activeEnter = trackActiveEnter(_this__u8e3s4, enter, $composer_0, 14 & $changed | 112 & $changed);
    var activeExit = trackActiveExit(_this__u8e3s4, exit, $composer_0, 14 & $changed | 112 & $changed >> 3);
    var shouldAnimateSlide = !(activeEnter.get_data_jntocg_k$().slide_1 == null) || !(activeExit.get_data_jntocg_k$().slide_1 == null);
    var shouldAnimateSizeChange = !(activeEnter.get_data_jntocg_k$().changeSize_1 == null) || !(activeExit.get_data_jntocg_k$().changeSize_1 == null);
    var tmp_1;
    if (shouldAnimateSlide) {
      $composer_0.startReplaceGroup_5hh8aj_k$(133838277);
      sourceInformation($composer_0, '870@38875L27,870@38824L79');
      var tmp_2 = get_VectorConverter(Companion_getInstance_3());
      sourceInformationMarkerStart($composer_0, 1389792689, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        var value_0 = label + ' slide';
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp3_group = createDeferredAnimation(_this__u8e3s4, tmp_2, tmp2_group, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_1 = tmp3_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(133944080);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_1 = null;
    }
    var slideAnimation = tmp_1;
    var tmp_5;
    if (shouldAnimateSizeChange) {
      $composer_0.startReplaceGroup_5hh8aj_k$(134035871);
      sourceInformation($composer_0, '876@39072L35,876@39023L85');
      var tmp_6 = get_VectorConverter_0(Companion_getInstance_0());
      sourceInformationMarkerStart($composer_0, 1389799001, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (false || it_1 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        var value_1 = label + ' shrink/expand';
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp5_group = createDeferredAnimation(_this__u8e3s4, tmp_6, tmp4_group, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_5 = tmp5_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(134146695);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_5 = null;
    }
    var sizeAnimation = tmp_5;
    var tmp_9;
    if (shouldAnimateSizeChange) {
      $composer_0.startReplaceGroup_5hh8aj_k$(134220321);
      sourceInformation($composer_0, '883@39291L48,881@39207L147');
      var tmp_10 = get_VectorConverter(Companion_getInstance_3());
      sourceInformationMarkerStart($composer_0, 1389806022, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_2 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_11;
      if (false || it_2 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        var value_2 = label + ' InterruptionHandlingOffset';
        $composer_0.updateRememberedValue_l1wh71_k$(value_2);
        tmp_11 = value_2;
      } else {
        tmp_11 = it_2;
      }
      var tmp_12 = tmp_11;
      var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp7_group = createDeferredAnimation(_this__u8e3s4, tmp_10, tmp6_group, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_9 = tmp7_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(134390727);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_9 = null;
    }
    var offsetAnimation = tmp_9;
    var tmp_13;
    var tmp_14;
    var tmp0_safe_receiver = activeEnter.get_data_jntocg_k$().changeSize_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.clip_1) === false) {
      tmp_14 = true;
    } else {
      var tmp1_safe_receiver = activeExit.get_data_jntocg_k$().changeSize_1;
      tmp_14 = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.clip_1) === false;
    }
    if (tmp_14) {
      tmp_13 = true;
    } else {
      tmp_13 = !shouldAnimateSizeChange;
    }
    var disableClip = tmp_13;
    var graphicsLayerBlock = createGraphicsLayerBlock(_this__u8e3s4, activeEnter, activeExit, label, $composer_0, 14 & $changed | 7168 & $changed >> 3);
    var tmp_15 = Companion_getInstance_4();
    sourceInformationMarkerStart($composer_0, 1389817724, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.changed_jpyyrz_k$(disableClip) | (($changed & 7168 ^ 3072) > 2048 && $composer_0.changed_ga7h3f_k$(isEnabled_0._v) || ($changed & 3072) === 2048));
    // Inline function 'kotlin.let' call
    var it_3 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_16;
    if (invalid || it_3 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
      var value_3 = createModifier$lambda_0(disableClip, isEnabled_0);
      $composer_0.updateRememberedValue_l1wh71_k$(value_3);
      tmp_16 = value_3;
    } else {
      tmp_16 = it_3;
    }
    var tmp_17 = tmp_16;
    var tmp8_group = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var tmp1 = graphicsLayer(tmp_15, tmp8_group).then_g5qrxq_k$(new EnterExitTransitionElement(_this__u8e3s4, sizeAnimation, offsetAnimation, slideAnimation, activeEnter, activeExit, isEnabled_0._v, graphicsLayerBlock));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1;
  }
  function trackActiveEnter(_this__u8e3s4, enter, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 21614502, 'C(trackActiveEnter)913@40534L40:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(21614502, $changed, -1, 'androidx.compose.animation.trackActiveEnter (EnterExitTransition.kt:908)');
    }
    sourceInformationMarkerStart($composer_0, -703283442, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
      var value = mutableStateOf(enter);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var activeEnter$delegate = tmp1_group;
    if (_this__u8e3s4.get_currentState_snihnl_k$().equals(_this__u8e3s4.get_targetState_kri3mx_k$()) && _this__u8e3s4.get_currentState_snihnl_k$().equals(EnterExitState_Visible_getInstance())) {
      if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
        trackActiveEnter$lambda_0(activeEnter$delegate, enter);
      } else {
        trackActiveEnter$lambda_0(activeEnter$delegate, Companion_getInstance_12().None_1);
      }
    } else if (_this__u8e3s4.get_targetState_kri3mx_k$().equals(EnterExitState_Visible_getInstance())) {
      trackActiveEnter$lambda_0(activeEnter$delegate, trackActiveEnter$lambda(activeEnter$delegate).plus_w36lq9_k$(enter));
    }
    var tmp0 = trackActiveEnter$lambda(activeEnter$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function trackActiveExit(_this__u8e3s4, exit, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1363864804, 'C(trackActiveExit)933@41515L39:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(-1363864804, $changed, -1, 'androidx.compose.animation.trackActiveExit (EnterExitTransition.kt:928)');
    }
    sourceInformationMarkerStart($composer_0, -709034909, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
      var value = mutableStateOf(exit);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var activeExit$delegate = tmp1_group;
    if (_this__u8e3s4.get_currentState_snihnl_k$().equals(_this__u8e3s4.get_targetState_kri3mx_k$()) && _this__u8e3s4.get_currentState_snihnl_k$().equals(EnterExitState_Visible_getInstance())) {
      if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
        trackActiveExit$lambda_0(activeExit$delegate, exit);
      } else {
        trackActiveExit$lambda_0(activeExit$delegate, Companion_getInstance_13().None_1);
      }
    } else if (!_this__u8e3s4.get_targetState_kri3mx_k$().equals(EnterExitState_Visible_getInstance())) {
      trackActiveExit$lambda_0(activeExit$delegate, trackActiveExit$lambda(activeExit$delegate).plus_buzi7t_k$(exit));
    }
    var tmp0 = trackActiveExit$lambda(activeExit$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function GraphicsLayerBlockForEnterExit() {
  }
  function createGraphicsLayerBlock(_this__u8e3s4, enter, exit, label, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 642253525, 'C(createGraphicsLayerBlock)988@43445L3043:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(642253525, $changed, -1, 'androidx.compose.animation.createGraphicsLayerBlock (EnterExitTransition.kt:956)');
    }
    var shouldAnimateAlpha = !(enter.get_data_jntocg_k$().fade_1 == null) || !(exit.get_data_jntocg_k$().fade_1 == null);
    var shouldAnimateScale = !(enter.get_data_jntocg_k$().scale_1 == null) || !(exit.get_data_jntocg_k$().scale_1 == null);
    var tmp;
    if (shouldAnimateAlpha) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-703859581);
      sourceInformation($composer_0, '968@42879L27,966@42775L146');
      var tmp_0 = get_VectorConverter_1(FloatCompanionObject_getInstance());
      sourceInformationMarkerStart($composer_0, -1269627504, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        var value = label + ' alpha';
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp2_group = createDeferredAnimation(_this__u8e3s4, tmp_0, tmp1_group, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp = tmp2_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-703690136);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp = null;
    }
    var alphaAnimation = tmp;
    var tmp_3;
    if (shouldAnimateScale) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-703622493);
      sourceInformation($composer_0, '976@43118L27,974@43014L146');
      var tmp_4 = get_VectorConverter_1(FloatCompanionObject_getInstance());
      sourceInformationMarkerStart($composer_0, -1269619856, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false || it_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        var value_0 = label + ' scale';
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp4_group = createDeferredAnimation(_this__u8e3s4, tmp_4, tmp3_group, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_3 = tmp4_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-703453048);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_3 = null;
    }
    var scaleAnimation = tmp_3;
    var tmp_7;
    if (shouldAnimateScale) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-703375392);
      sourceInformation($composer_0, '982@43263L149');
      var tmp5_group = createDeferredAnimation(_this__u8e3s4, get_TransformOriginVectorConverter(), 'TransformOriginInterruptionHandling', $composer_0, 384 | 14 & $changed, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_7 = tmp5_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-703203064);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_7 = null;
    }
    var transformOriginAnimation = tmp_7;
    sourceInformationMarkerStart($composer_0, -1269606376, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!(!!(!!($composer_0.changedInstance_s1wkiy_k$(alphaAnimation) | (($changed & 112 ^ 48) > 32 && $composer_0.changed_ga7h3f_k$(enter) || ($changed & 48) === 32)) | (($changed & 896 ^ 384) > 256 && $composer_0.changed_ga7h3f_k$(exit) || ($changed & 384) === 256)) | $composer_0.changedInstance_s1wkiy_k$(scaleAnimation)) | (($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4)) | $composer_0.changedInstance_s1wkiy_k$(transformOriginAnimation));
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_8;
    if (invalid || it_1 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
      var tmp_9 = createGraphicsLayerBlock$lambda(alphaAnimation, scaleAnimation, _this__u8e3s4, enter, exit, transformOriginAnimation);
      var value_1 = new sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0(tmp_9);
      $composer_0.updateRememberedValue_l1wh71_k$(value_1);
      tmp_8 = value_1;
    } else {
      tmp_8 = it_1;
    }
    var tmp_10 = tmp_8;
    var tmp6_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp6_group;
  }
  function EnterExitTransitionElement(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock) {
    ModifierNodeElement.call(this);
    this.transition_1 = transition;
    this.sizeAnimation_1 = sizeAnimation;
    this.offsetAnimation_1 = offsetAnimation;
    this.slideAnimation_1 = slideAnimation;
    this.enter_1 = enter;
    this.exit_1 = exit;
    this.isEnabled_1 = isEnabled;
    this.graphicsLayerBlock_1 = graphicsLayerBlock;
  }
  protoOf(EnterExitTransitionElement).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(EnterExitTransitionElement).set_sizeAnimation_d1qqsi_k$ = function (_set____db54di) {
    this.sizeAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_sizeAnimation_oj7fx6_k$ = function () {
    return this.sizeAnimation_1;
  };
  protoOf(EnterExitTransitionElement).set_offsetAnimation_sbtt4u_k$ = function (_set____db54di) {
    this.offsetAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_offsetAnimation_bqy8g8_k$ = function () {
    return this.offsetAnimation_1;
  };
  protoOf(EnterExitTransitionElement).set_slideAnimation_8zf29m_k$ = function (_set____db54di) {
    this.slideAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_slideAnimation_1jny1w_k$ = function () {
    return this.slideAnimation_1;
  };
  protoOf(EnterExitTransitionElement).set_enter_kk8oi8_k$ = function (_set____db54di) {
    this.enter_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_enter_iqxcq7_k$ = function () {
    return this.enter_1;
  };
  protoOf(EnterExitTransitionElement).set_exit_jz1ms6_k$ = function (_set____db54di) {
    this.exit_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_exit_wolopz_k$ = function () {
    return this.exit_1;
  };
  protoOf(EnterExitTransitionElement).set_isEnabled_9kb97j_k$ = function (_set____db54di) {
    this.isEnabled_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_isEnabled_roz1ma_k$ = function () {
    return this.isEnabled_1;
  };
  protoOf(EnterExitTransitionElement).set_graphicsLayerBlock_3ehvm4_k$ = function (_set____db54di) {
    this.graphicsLayerBlock_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_graphicsLayerBlock_45d73k_k$ = function () {
    return this.graphicsLayerBlock_1;
  };
  protoOf(EnterExitTransitionElement).create_md4cuc_k$ = function () {
    return new EnterExitTransitionModifierNode(this.transition_1, this.sizeAnimation_1, this.offsetAnimation_1, this.slideAnimation_1, this.enter_1, this.exit_1, this.isEnabled_1, this.graphicsLayerBlock_1);
  };
  protoOf(EnterExitTransitionElement).update_sx3szx_k$ = function (node) {
    node.transition_1 = this.transition_1;
    node.sizeAnimation_1 = this.sizeAnimation_1;
    node.offsetAnimation_1 = this.offsetAnimation_1;
    node.slideAnimation_1 = this.slideAnimation_1;
    node.enter_1 = this.enter_1;
    node.exit_1 = this.exit_1;
    node.isEnabled_1 = this.isEnabled_1;
    node.graphicsLayerBlock_1 = this.graphicsLayerBlock_1;
  };
  protoOf(EnterExitTransitionElement).update_9wd57p_k$ = function (node) {
    return this.update_sx3szx_k$(node instanceof EnterExitTransitionModifierNode ? node : THROW_CCE());
  };
  protoOf(EnterExitTransitionElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('enterExitTransition');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('transition', this.transition_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('sizeAnimation', this.sizeAnimation_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('offsetAnimation', this.offsetAnimation_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('slideAnimation', this.slideAnimation_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('enter', this.enter_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('exit', this.exit_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('graphicsLayerBlock', this.graphicsLayerBlock_1);
  };
  protoOf(EnterExitTransitionElement).component1_7eebsc_k$ = function () {
    return this.transition_1;
  };
  protoOf(EnterExitTransitionElement).component2_7eebsb_k$ = function () {
    return this.sizeAnimation_1;
  };
  protoOf(EnterExitTransitionElement).component3_7eebsa_k$ = function () {
    return this.offsetAnimation_1;
  };
  protoOf(EnterExitTransitionElement).component4_7eebs9_k$ = function () {
    return this.slideAnimation_1;
  };
  protoOf(EnterExitTransitionElement).component5_7eebs8_k$ = function () {
    return this.enter_1;
  };
  protoOf(EnterExitTransitionElement).component6_7eebs7_k$ = function () {
    return this.exit_1;
  };
  protoOf(EnterExitTransitionElement).component7_7eebs6_k$ = function () {
    return this.isEnabled_1;
  };
  protoOf(EnterExitTransitionElement).component8_7eebs5_k$ = function () {
    return this.graphicsLayerBlock_1;
  };
  protoOf(EnterExitTransitionElement).copy_ilz9ny_k$ = function (transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock) {
    return new EnterExitTransitionElement(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock);
  };
  protoOf(EnterExitTransitionElement).copy$default_gsfrhw_k$ = function (transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock, $super) {
    transition = transition === VOID ? this.transition_1 : transition;
    sizeAnimation = sizeAnimation === VOID ? this.sizeAnimation_1 : sizeAnimation;
    offsetAnimation = offsetAnimation === VOID ? this.offsetAnimation_1 : offsetAnimation;
    slideAnimation = slideAnimation === VOID ? this.slideAnimation_1 : slideAnimation;
    enter = enter === VOID ? this.enter_1 : enter;
    exit = exit === VOID ? this.exit_1 : exit;
    isEnabled = isEnabled === VOID ? this.isEnabled_1 : isEnabled;
    graphicsLayerBlock = graphicsLayerBlock === VOID ? this.graphicsLayerBlock_1 : graphicsLayerBlock;
    return $super === VOID ? this.copy_ilz9ny_k$(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock) : $super.copy_ilz9ny_k$.call(this, transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock);
  };
  protoOf(EnterExitTransitionElement).toString = function () {
    return 'EnterExitTransitionElement(transition=' + this.transition_1.toString() + ', sizeAnimation=' + toString(this.sizeAnimation_1) + ', offsetAnimation=' + toString(this.offsetAnimation_1) + ', slideAnimation=' + toString(this.slideAnimation_1) + ', enter=' + this.enter_1.toString() + ', exit=' + this.exit_1.toString() + ', isEnabled=' + toString_0(this.isEnabled_1) + ', graphicsLayerBlock=' + toString_0(this.graphicsLayerBlock_1) + ')';
  };
  protoOf(EnterExitTransitionElement).hashCode = function () {
    var result = hashCode(this.transition_1);
    result = imul(result, 31) + (this.sizeAnimation_1 == null ? 0 : hashCode(this.sizeAnimation_1)) | 0;
    result = imul(result, 31) + (this.offsetAnimation_1 == null ? 0 : hashCode(this.offsetAnimation_1)) | 0;
    result = imul(result, 31) + (this.slideAnimation_1 == null ? 0 : hashCode(this.slideAnimation_1)) | 0;
    result = imul(result, 31) + this.enter_1.hashCode() | 0;
    result = imul(result, 31) + this.exit_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.isEnabled_1) | 0;
    result = imul(result, 31) + hashCode(this.graphicsLayerBlock_1) | 0;
    return result;
  };
  protoOf(EnterExitTransitionElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EnterExitTransitionElement))
      return false;
    var tmp0_other_with_cast = other instanceof EnterExitTransitionElement ? other : THROW_CCE();
    if (!equals(this.transition_1, tmp0_other_with_cast.transition_1))
      return false;
    if (!equals(this.sizeAnimation_1, tmp0_other_with_cast.sizeAnimation_1))
      return false;
    if (!equals(this.offsetAnimation_1, tmp0_other_with_cast.offsetAnimation_1))
      return false;
    if (!equals(this.slideAnimation_1, tmp0_other_with_cast.slideAnimation_1))
      return false;
    if (!this.enter_1.equals(tmp0_other_with_cast.enter_1))
      return false;
    if (!this.exit_1.equals(tmp0_other_with_cast.exit_1))
      return false;
    if (!equals(this.isEnabled_1, tmp0_other_with_cast.isEnabled_1))
      return false;
    if (!equals(this.graphicsLayerBlock_1, tmp0_other_with_cast.graphicsLayerBlock_1))
      return false;
    return true;
  };
  function _set_lookaheadConstraintsAvailable__g4tuk0($this, _set____db54di) {
    $this.lookaheadConstraintsAvailable_1 = _set____db54di;
  }
  function _get_lookaheadConstraintsAvailable__6k3wx0($this) {
    return $this.lookaheadConstraintsAvailable_1;
  }
  function _set_lookaheadSize__8e6fb6($this, _set____db54di) {
    $this.lookaheadSize_1 = _set____db54di;
  }
  function _get_lookaheadSize__6tl376($this) {
    return $this.lookaheadSize_1;
  }
  function _set_lookaheadConstraints__uusx37($this, value) {
    $this.lookaheadConstraintsAvailable_1 = true;
    $this.lookaheadConstraints_1 = value;
  }
  function _get_lookaheadConstraints__gwq92v($this) {
    return $this.lookaheadConstraints_1;
  }
  function EnterExitTransitionModifierNode$sizeTransitionSpec$lambda(this$0) {
    return function (_this__u8e3s4) {
      var tmp;
      if (_this__u8e3s4.isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.enter_1.get_data_jntocg_k$().changeSize_1;
        tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animationSpec_1;
      } else if (_this__u8e3s4.isTransitioningTo_mjamuk_k$(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp1_safe_receiver = this$0.exit_1.get_data_jntocg_k$().changeSize_1;
        tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.animationSpec_1;
      } else {
        tmp = get_DefaultSizeAnimationSpec();
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? get_DefaultSizeAnimationSpec() : tmp2_elvis_lhs;
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_0(this$0, $target) {
    return function (it) {
      return new IntSize(this$0.sizeByState_uhydwr_k$(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_1($this$animate) {
    return get_DefaultOffsetAnimationSpec();
  }
  function EnterExitTransitionModifierNode$measure$lambda_2(this$0, $target) {
    return function (it) {
      return new IntOffset(this$0.targetOffsetByState_8xbww4_k$(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_3(this$0, $target) {
    return function (it) {
      return new IntOffset(this$0.slideTargetValueByState_dfs3rb_k$(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_4($placeable, $offset, $offsetDelta, $layerBlock) {
    return function ($this$layout) {
      $this$layout.placeWithLayer_c7y141_k$($placeable, _IntOffset___get_x__impl__qiqr5o($offset) + _IntOffset___get_x__impl__qiqr5o($offsetDelta) | 0, _IntOffset___get_y__impl__2avpwj($offset) + _IntOffset___get_y__impl__2avpwj($offsetDelta) | 0, 0.0, $layerBlock);
      return Unit_getInstance();
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_5($$this$run) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($$this$run, 0, 0);
      return Unit_getInstance();
    };
  }
  function EnterExitTransitionModifierNode$slideSpec$lambda(this$0) {
    return function (_this__u8e3s4) {
      var tmp;
      if (_this__u8e3s4.isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.enter_1.get_data_jntocg_k$().slide_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animationSpec_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp1_elvis_lhs;
      } else if (_this__u8e3s4.isTransitioningTo_mjamuk_k$(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = this$0.exit_1.get_data_jntocg_k$().slide_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.animationSpec_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultOffsetAnimationSpec();
      }
      return tmp;
    };
  }
  function EnterExitTransitionModifierNode(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock) {
    LayoutModifierNodeWithPassThroughIntrinsics.call(this);
    this.transition_1 = transition;
    this.sizeAnimation_1 = sizeAnimation;
    this.offsetAnimation_1 = offsetAnimation;
    this.slideAnimation_1 = slideAnimation;
    this.enter_1 = enter;
    this.exit_1 = exit;
    this.isEnabled_1 = isEnabled;
    this.graphicsLayerBlock_1 = graphicsLayerBlock;
    this.lookaheadConstraintsAvailable_1 = false;
    this.lookaheadSize_1 = get_InvalidSize();
    this.lookaheadConstraints_1 = Constraints();
    this.currentAlignment_1 = null;
    var tmp = this;
    tmp.sizeTransitionSpec_1 = EnterExitTransitionModifierNode$sizeTransitionSpec$lambda(this);
    var tmp_0 = this;
    tmp_0.slideSpec_1 = EnterExitTransitionModifierNode$slideSpec$lambda(this);
  }
  protoOf(EnterExitTransitionModifierNode).set_transition_3a2emy_k$ = function (_set____db54di) {
    this.transition_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_sizeAnimation_d1qqsi_k$ = function (_set____db54di) {
    this.sizeAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_sizeAnimation_oj7fx6_k$ = function () {
    return this.sizeAnimation_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_offsetAnimation_sbtt4u_k$ = function (_set____db54di) {
    this.offsetAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_offsetAnimation_bqy8g8_k$ = function () {
    return this.offsetAnimation_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_slideAnimation_8zf29m_k$ = function (_set____db54di) {
    this.slideAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_slideAnimation_1jny1w_k$ = function () {
    return this.slideAnimation_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_enter_kk8oi8_k$ = function (_set____db54di) {
    this.enter_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_enter_iqxcq7_k$ = function () {
    return this.enter_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_exit_jz1ms6_k$ = function (_set____db54di) {
    this.exit_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_exit_wolopz_k$ = function () {
    return this.exit_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_isEnabled_9kb97j_k$ = function (_set____db54di) {
    this.isEnabled_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_isEnabled_roz1ma_k$ = function () {
    return this.isEnabled_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_graphicsLayerBlock_3ehvm4_k$ = function (_set____db54di) {
    this.graphicsLayerBlock_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_graphicsLayerBlock_45d73k_k$ = function () {
    return this.graphicsLayerBlock_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_currentAlignment_hwjxzb_k$ = function (_set____db54di) {
    this.currentAlignment_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_currentAlignment_1b8qb7_k$ = function () {
    return this.currentAlignment_1;
  };
  protoOf(EnterExitTransitionModifierNode).get_alignment_xa1jnq_k$ = function () {
    // Inline function 'kotlin.with' call
    var tmp;
    if (this.transition_1.get_segment_xwnoei_k$().isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
      var tmp0_safe_receiver = this.enter_1.get_data_jntocg_k$().changeSize_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.alignment_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp2_safe_receiver = this.exit_1.get_data_jntocg_k$().changeSize_1;
        tmp_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.alignment_1;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      var tmp3_safe_receiver = this.exit_1.get_data_jntocg_k$().changeSize_1;
      var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.alignment_1;
      var tmp_1;
      if (tmp4_elvis_lhs == null) {
        var tmp5_safe_receiver = this.enter_1.get_data_jntocg_k$().changeSize_1;
        tmp_1 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.alignment_1;
      } else {
        tmp_1 = tmp4_elvis_lhs;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).get_sizeTransitionSpec_sffkq_k$ = function () {
    return this.sizeTransitionSpec_1;
  };
  protoOf(EnterExitTransitionModifierNode).sizeByState_uhydwr_k$ = function (targetState, fullSize) {
    var tmp;
    switch (targetState.get_ordinal_ip24qg_k$()) {
      case 1:
        tmp = fullSize;
        break;
      case 0:
        var tmp1_safe_receiver = this.enter_1.get_data_jntocg_k$().changeSize_1;
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.size_1;
        var tmp_0;
        if (tmp2_safe_receiver == null) {
          tmp_0 = null;
        } else {
          var tmp_1 = tmp2_safe_receiver(new IntSize(fullSize));
          tmp_0 = tmp_1 == null ? null : tmp_1.packedValue_1;
        }

        var tmp3_elvis_lhs = tmp_0;
        var tmp_2;
        var tmp_3 = tmp3_elvis_lhs;
        if ((tmp_3 == null ? null : new IntSize(tmp_3)) == null) {
          tmp_2 = fullSize;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }

        tmp = tmp_2;
        break;
      case 2:
        var tmp4_safe_receiver = this.exit_1.get_data_jntocg_k$().changeSize_1;
        var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.size_1;
        var tmp_4;
        if (tmp5_safe_receiver == null) {
          tmp_4 = null;
        } else {
          var tmp_5 = tmp5_safe_receiver(new IntSize(fullSize));
          tmp_4 = tmp_5 == null ? null : tmp_5.packedValue_1;
        }

        var tmp6_elvis_lhs = tmp_4;
        var tmp_6;
        var tmp_7 = tmp6_elvis_lhs;
        if ((tmp_7 == null ? null : new IntSize(tmp_7)) == null) {
          tmp_6 = fullSize;
        } else {
          tmp_6 = tmp6_elvis_lhs;
        }

        tmp = tmp_6;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).onAttach_juzy2c_k$ = function () {
    protoOf(LayoutModifierNodeWithPassThroughIntrinsics).onAttach_juzy2c_k$.call(this);
    this.lookaheadConstraintsAvailable_1 = false;
    this.lookaheadSize_1 = get_InvalidSize();
  };
  protoOf(EnterExitTransitionModifierNode).targetOffsetByState_8xbww4_k$ = function (targetState, fullSize) {
    var tmp;
    if (this.currentAlignment_1 == null) {
      tmp = Companion_getInstance_3().get_Zero_6hc3i8_k$();
    } else if (this.get_alignment_xa1jnq_k$() == null) {
      tmp = Companion_getInstance_3().get_Zero_6hc3i8_k$();
    } else if (equals(this.currentAlignment_1, this.get_alignment_xa1jnq_k$())) {
      tmp = Companion_getInstance_3().get_Zero_6hc3i8_k$();
    } else {
      var tmp_0;
      switch (targetState.get_ordinal_ip24qg_k$()) {
        case 1:
          tmp_0 = Companion_getInstance_3().get_Zero_6hc3i8_k$();
          break;
        case 0:
          tmp_0 = Companion_getInstance_3().get_Zero_6hc3i8_k$();
          break;
        case 2:
          var tmp1_safe_receiver = this.exit_1.get_data_jntocg_k$().changeSize_1;
          var tmp_1;
          if (tmp1_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            var endSize = tmp1_safe_receiver.size_1(new IntSize(fullSize)).packedValue_1;
            var targetOffset = ensureNotNull(this.get_alignment_xa1jnq_k$()).align_mb8mzc_k$(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            var currentOffset = ensureNotNull(this.currentAlignment_1).align_mb8mzc_k$(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            tmp_1 = IntOffset__minus_impl_4m69hb(targetOffset, currentOffset);
          }

          var tmp2_elvis_lhs = tmp_1;
          var tmp_2;
          var tmp_3 = tmp2_elvis_lhs;
          if ((tmp_3 == null ? null : new IntOffset(tmp_3)) == null) {
            tmp_2 = Companion_getInstance_3().get_Zero_6hc3i8_k$();
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }

          tmp_0 = tmp_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    if (this.transition_1.get_currentState_snihnl_k$().equals(this.transition_1.get_targetState_kri3mx_k$())) {
      this.currentAlignment_1 = null;
    } else if (this.currentAlignment_1 == null) {
      var tmp = this;
      var tmp0_elvis_lhs = this.get_alignment_xa1jnq_k$();
      tmp.currentAlignment_1 = tmp0_elvis_lhs == null ? Companion_getInstance_1().get_TopStart_o4x792_k$() : tmp0_elvis_lhs;
    }
    if (_this__u8e3s4.get_isLookingAhead_2057g1_k$()) {
      var placeable = measurable.measure_4dmfk1_k$(constraints);
      var tmp0 = placeable.get_width_j0q4yl_k$();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = placeable.get_height_e7t92o_k$();
      var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var measuredSize = _IntSize___init__impl__emcjft(tmp$ret$0);
      this.lookaheadSize_1 = measuredSize;
      _set_lookaheadConstraints__uusx37(this, constraints);
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(measuredSize);
      var tmp_0 = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(measuredSize);
      var tmp_1 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp_0, tmp_1, VOID, EnterExitTransitionModifierNode$measure$lambda(placeable));
    } else if (this.isEnabled_1()) {
      var layerBlock = this.graphicsLayerBlock_1.init_1xdsg_k$();
      var placeable_0 = measurable.measure_4dmfk1_k$(constraints);
      var tmp0_0 = placeable_0.get_width_j0q4yl_k$();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2_0 = placeable_0.get_height_e7t92o_k$();
      var tmp$ret$6 = bitwiseOr(shiftLeft(fromInt(tmp0_0), 32), bitwiseAnd(fromInt(val2_0), new Long(-1, 0)));
      var measuredSize_0 = _IntSize___init__impl__emcjft(tmp$ret$6);
      var target = get_isValid(this.lookaheadSize_1) ? this.lookaheadSize_1 : measuredSize_0;
      var tmp1_safe_receiver = this.sizeAnimation_1;
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        tmp_2 = tmp1_safe_receiver.animate_lt3uhv_k$(this.sizeTransitionSpec_1, EnterExitTransitionModifierNode$measure$lambda_0(this, target));
      }
      var animSize = tmp_2;
      var tmp_3;
      if (animSize == null) {
        tmp_3 = null;
      } else {
        var tmp_4 = animSize.get_value_j01efc_k$();
        tmp_3 = tmp_4 == null ? null : tmp_4.packedValue_1;
      }
      var tmp3_elvis_lhs = tmp_3;
      var tmp_5;
      var tmp_6 = tmp3_elvis_lhs;
      if ((tmp_6 == null ? null : new IntSize(tmp_6)) == null) {
        tmp_5 = measuredSize_0;
      } else {
        tmp_5 = tmp3_elvis_lhs;
      }
      var currentSize = constrain(constraints, tmp_5);
      var tmp4_safe_receiver = this.offsetAnimation_1;
      var tmp_7;
      if (tmp4_safe_receiver == null) {
        tmp_7 = null;
      } else {
        var tmp_8 = EnterExitTransitionModifierNode$measure$lambda_1;
        tmp_7 = tmp4_safe_receiver.animate_lt3uhv_k$(tmp_8, EnterExitTransitionModifierNode$measure$lambda_2(this, target));
      }
      var tmp5_safe_receiver = tmp_7;
      var tmp_9;
      if (tmp5_safe_receiver == null) {
        tmp_9 = null;
      } else {
        var tmp_10 = tmp5_safe_receiver.get_value_j01efc_k$();
        tmp_9 = tmp_10 == null ? null : tmp_10.packedValue_1;
      }
      var tmp6_elvis_lhs = tmp_9;
      var tmp_11;
      var tmp_12 = tmp6_elvis_lhs;
      if ((tmp_12 == null ? null : new IntOffset(tmp_12)) == null) {
        tmp_11 = Companion_getInstance_3().get_Zero_6hc3i8_k$();
      } else {
        tmp_11 = tmp6_elvis_lhs;
      }
      var offsetDelta = tmp_11;
      var tmp7_safe_receiver = this.slideAnimation_1;
      var tmp_13;
      if (tmp7_safe_receiver == null) {
        tmp_13 = null;
      } else {
        tmp_13 = tmp7_safe_receiver.animate_lt3uhv_k$(this.slideSpec_1, EnterExitTransitionModifierNode$measure$lambda_3(this, target));
      }
      var tmp8_safe_receiver = tmp_13;
      var tmp_14;
      if (tmp8_safe_receiver == null) {
        tmp_14 = null;
      } else {
        var tmp_15 = tmp8_safe_receiver.get_value_j01efc_k$();
        tmp_14 = tmp_15 == null ? null : tmp_15.packedValue_1;
      }
      var tmp9_elvis_lhs = tmp_14;
      var tmp_16;
      var tmp_17 = tmp9_elvis_lhs;
      if ((tmp_17 == null ? null : new IntOffset(tmp_17)) == null) {
        tmp_16 = Companion_getInstance_3().get_Zero_6hc3i8_k$();
      } else {
        tmp_16 = tmp9_elvis_lhs;
      }
      var slideOffset = tmp_16;
      var tmp10_safe_receiver = this.currentAlignment_1;
      var tmp11_elvis_lhs = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.align_mb8mzc_k$(target, currentSize, LayoutDirection_Ltr_getInstance());
      var tmp_18;
      var tmp_19 = tmp11_elvis_lhs;
      if ((tmp_19 == null ? null : new IntOffset(tmp_19)) == null) {
        tmp_18 = Companion_getInstance_3().get_Zero_6hc3i8_k$();
      } else {
        tmp_18 = tmp11_elvis_lhs;
      }
      var offset = IntOffset__plus_impl_nqoa9b(tmp_18, slideOffset);
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value_1 = _IntSize___get_packedValue__impl__uho7jf(currentSize);
      var tmp_20 = convertToInt(shiftRight(value_1, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_2 = _IntSize___get_packedValue__impl__uho7jf(currentSize);
      var tmp_21 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp_20, tmp_21, VOID, EnterExitTransitionModifierNode$measure$lambda_4(placeable_0, offset, offsetDelta, layerBlock));
    } else {
      // Inline function 'kotlin.run' call
      var $this$run = measurable.measure_4dmfk1_k$(constraints);
      var tmp_22 = $this$run.get_width_j0q4yl_k$();
      var tmp_23 = $this$run.get_height_e7t92o_k$();
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp_22, tmp_23, VOID, EnterExitTransitionModifierNode$measure$lambda_5($this$run));
    }
  };
  protoOf(EnterExitTransitionModifierNode).get_slideSpec_4nowbh_k$ = function () {
    return this.slideSpec_1;
  };
  protoOf(EnterExitTransitionModifierNode).slideTargetValueByState_dfs3rb_k$ = function (targetState, fullSize) {
    var tmp0_safe_receiver = this.enter_1.get_data_jntocg_k$().slide_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.slideOffset_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp_0 = tmp1_safe_receiver(new IntSize(fullSize));
      tmp = tmp_0 == null ? null : tmp_0.packedValue_1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_1;
    var tmp_2 = tmp2_elvis_lhs;
    if ((tmp_2 == null ? null : new IntOffset(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_3().get_Zero_6hc3i8_k$();
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var preEnter = tmp_1;
    var tmp3_safe_receiver = this.exit_1.get_data_jntocg_k$().slide_1;
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.slideOffset_1;
    var tmp_3;
    if (tmp4_safe_receiver == null) {
      tmp_3 = null;
    } else {
      var tmp_4 = tmp4_safe_receiver(new IntSize(fullSize));
      tmp_3 = tmp_4 == null ? null : tmp_4.packedValue_1;
    }
    var tmp5_elvis_lhs = tmp_3;
    var tmp_5;
    var tmp_6 = tmp5_elvis_lhs;
    if ((tmp_6 == null ? null : new IntOffset(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_3().get_Zero_6hc3i8_k$();
    } else {
      tmp_5 = tmp5_elvis_lhs;
    }
    var postExit = tmp_5;
    var tmp_7;
    switch (targetState.get_ordinal_ip24qg_k$()) {
      case 1:
        tmp_7 = Companion_getInstance_3().get_Zero_6hc3i8_k$();
        break;
      case 0:
        tmp_7 = preEnter;
        break;
      case 2:
        tmp_7 = postExit;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_7;
  };
  function sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).init_1xdsg_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, GraphicsLayerBlockForEnterExit) : false) {
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
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function trackActiveEnter$lambda($activeEnter$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('activeEnter', KMutableProperty0, true);
    return $activeEnter$delegate.get_value_j01efc_k$();
  }
  function trackActiveEnter$lambda_0($activeEnter$delegate, _set____db54di) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('activeEnter', KMutableProperty0, true);
    $activeEnter$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function trackActiveExit$lambda($activeExit$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('activeExit', KMutableProperty0, true);
    return $activeExit$delegate.get_value_j01efc_k$();
  }
  function trackActiveExit$lambda_0($activeExit$delegate, _set____db54di) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('activeExit', KMutableProperty0, true);
    $activeExit$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function TransformOriginVectorConverter$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new AnimationVector2D(_TransformOrigin___get_pivotFractionX__impl__a9pmci(it.packedValue_1), _TransformOrigin___get_pivotFractionY__impl__ijwupp(it.packedValue_1));
  }
  function TransformOriginVectorConverter$lambda_0(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new TransformOrigin(TransformOrigin_0(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$()));
  }
  function expandVertically$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function expandVertically$lambda_0($initialHeight) {
    return function (it) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp0 = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_1 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
      var tmp$ret$3 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = $initialHeight(tmp$ret$3);
      var tmp$ret$4 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$5 = _IntSize___init__impl__emcjft(tmp$ret$4);
      return new IntSize(tmp$ret$5);
    };
  }
  function shrinkVertically$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function shrinkVertically$lambda_0($targetHeight) {
    return function (it) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp0 = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_1 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
      var tmp$ret$3 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = $targetHeight(tmp$ret$3);
      var tmp$ret$4 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$5 = _IntSize___init__impl__emcjft(tmp$ret$4);
      return new IntSize(tmp$ret$5);
    };
  }
  function expandIn$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(0), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
    var tmp$ret$1 = _IntSize___init__impl__emcjft(tmp$ret$0);
    return new IntSize(tmp$ret$1);
  }
  function shrinkOut$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(0), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
    var tmp$ret$1 = _IntSize___init__impl__emcjft(tmp$ret$0);
    return new IntSize(tmp$ret$1);
  }
  function createModifier$lambda() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return true;
  }
  function createModifier$lambda_0($disableClip, $isEnabled) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.set_clip_a88iug_k$(!$disableClip && $isEnabled._v());
      return Unit_getInstance();
    };
  }
  function createGraphicsLayerBlock$lambda$lambda($enter, $exit) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.get_data_jntocg_k$().fade_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animationSpec_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.get_data_jntocg_k$().fade_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.animationSpec_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultAlphaAndScaleSpring();
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_0($enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.get_ordinal_ip24qg_k$()) {
        case 1:
          tmp = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.get_data_jntocg_k$().fade_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.alpha_1;
          tmp = tmp2_elvis_lhs == null ? 1.0 : tmp2_elvis_lhs;
          break;
        case 2:
          var tmp3_safe_receiver = $exit.get_data_jntocg_k$().fade_1;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.alpha_1;
          tmp = tmp4_elvis_lhs == null ? 1.0 : tmp4_elvis_lhs;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_1($enter, $exit) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animationSpec_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.animationSpec_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultAlphaAndScaleSpring();
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_2($enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.get_ordinal_ip24qg_k$()) {
        case 1:
          tmp = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.scale_1;
          tmp = tmp2_elvis_lhs == null ? 1.0 : tmp2_elvis_lhs;
          break;
        case 2:
          var tmp3_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.scale_1;
          tmp = tmp4_elvis_lhs == null ? 1.0 : tmp4_elvis_lhs;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_3($this$animate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return spring();
  }
  function createGraphicsLayerBlock$lambda$lambda_4($transformOriginWhenVisible, $enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.get_ordinal_ip24qg_k$()) {
        case 1:
          tmp = $transformOriginWhenVisible;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.transformOrigin_1;
          var tmp_0;
          var tmp_1 = tmp2_elvis_lhs;
          if ((tmp_1 == null ? null : new TransformOrigin(tmp_1)) == null) {
            var tmp3_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
            tmp_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.transformOrigin_1;
          } else {
            tmp_0 = tmp2_elvis_lhs;
          }

          tmp = tmp_0;
          break;
        case 2:
          var tmp4_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
          var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.transformOrigin_1;
          var tmp_2;
          var tmp_3 = tmp5_elvis_lhs;
          if ((tmp_3 == null ? null : new TransformOrigin(tmp_3)) == null) {
            var tmp6_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
            tmp_2 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.transformOrigin_1;
          } else {
            tmp_2 = tmp5_elvis_lhs;
          }

          tmp = tmp_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp7_elvis_lhs = tmp;
      var tmp_4;
      var tmp_5 = tmp7_elvis_lhs;
      if ((tmp_5 == null ? null : new TransformOrigin(tmp_5)) == null) {
        tmp_4 = Companion_getInstance_5().get_Center_bvqaiy_k$();
      } else {
        tmp_4 = tmp7_elvis_lhs;
      }
      return new TransformOrigin(tmp_4);
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_5($alpha, $scale, $transformOrigin) {
    return function (_this__u8e3s4) {
      var tmp0_safe_receiver = $alpha;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_value_j01efc_k$();
      _this__u8e3s4.set_alpha_tvzcqh_k$(tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs);
      var tmp2_safe_receiver = $scale;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_value_j01efc_k$();
      _this__u8e3s4.set_scaleX_ykjjzx_k$(tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs);
      var tmp4_safe_receiver = $scale;
      var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.get_value_j01efc_k$();
      _this__u8e3s4.set_scaleY_i4eqp0_k$(tmp5_elvis_lhs == null ? 1.0 : tmp5_elvis_lhs);
      var tmp6_safe_receiver = $transformOrigin;
      var tmp;
      if (tmp6_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = tmp6_safe_receiver.get_value_j01efc_k$();
        tmp = tmp_0 == null ? null : tmp_0.packedValue_1;
      }
      var tmp7_elvis_lhs = tmp;
      var tmp_1;
      var tmp_2 = tmp7_elvis_lhs;
      if ((tmp_2 == null ? null : new TransformOrigin(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_5().get_Center_bvqaiy_k$();
      } else {
        tmp_1 = tmp7_elvis_lhs;
      }
      _this__u8e3s4.set_transformOrigin_wfji5_k$(tmp_1);
      return Unit_getInstance();
    };
  }
  function createGraphicsLayerBlock$lambda($alphaAnimation, $scaleAnimation, $this_createGraphicsLayerBlock, $enter, $exit, $transformOriginAnimation) {
    return function () {
      var tmp0_safe_receiver = $alphaAnimation;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = createGraphicsLayerBlock$lambda$lambda($enter, $exit);
        tmp = tmp0_safe_receiver.animate_lt3uhv_k$(tmp_0, createGraphicsLayerBlock$lambda$lambda_0($enter, $exit));
      }
      var alpha = tmp;
      var tmp1_safe_receiver = $scaleAnimation;
      var tmp_1;
      if (tmp1_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp_2 = createGraphicsLayerBlock$lambda$lambda_1($enter, $exit);
        tmp_1 = tmp1_safe_receiver.animate_lt3uhv_k$(tmp_2, createGraphicsLayerBlock$lambda$lambda_2($enter, $exit));
      }
      var scale = tmp_1;
      var tmp_3;
      if ($this_createGraphicsLayerBlock.get_currentState_snihnl_k$().equals(EnterExitState_PreEnter_getInstance())) {
        var tmp2_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.transformOrigin_1;
        var tmp_4;
        var tmp_5 = tmp3_elvis_lhs;
        if ((tmp_5 == null ? null : new TransformOrigin(tmp_5)) == null) {
          var tmp4_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
          tmp_4 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.transformOrigin_1;
        } else {
          tmp_4 = tmp3_elvis_lhs;
        }
        tmp_3 = tmp_4;
      } else {
        var tmp5_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
        var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.transformOrigin_1;
        var tmp_6;
        var tmp_7 = tmp6_elvis_lhs;
        if ((tmp_7 == null ? null : new TransformOrigin(tmp_7)) == null) {
          var tmp7_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
          tmp_6 = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.transformOrigin_1;
        } else {
          tmp_6 = tmp6_elvis_lhs;
        }
        tmp_3 = tmp_6;
      }
      var transformOriginWhenVisible = tmp_3;
      var tmp8_safe_receiver = $transformOriginAnimation;
      var tmp_8;
      if (tmp8_safe_receiver == null) {
        tmp_8 = null;
      } else {
        var tmp_9 = createGraphicsLayerBlock$lambda$lambda_3;
        tmp_8 = tmp8_safe_receiver.animate_lt3uhv_k$(tmp_9, createGraphicsLayerBlock$lambda$lambda_4(transformOriginWhenVisible, $enter, $exit));
      }
      var transformOrigin = tmp_8;
      var block = createGraphicsLayerBlock$lambda$lambda_5(alpha, scale, transformOrigin);
      return block;
    };
  }
  var properties_initialized_EnterExitTransition_kt_te1nvp;
  function _init_properties_EnterExitTransition_kt__2obrqf() {
    if (!properties_initialized_EnterExitTransition_kt_te1nvp) {
      properties_initialized_EnterExitTransition_kt_te1nvp = true;
      var tmp = TransformOriginVectorConverter$lambda;
      TransformOriginVectorConverter = TwoWayConverter(tmp, TransformOriginVectorConverter$lambda_0);
      DefaultAlphaAndScaleSpring = spring(VOID, 400.0);
      DefaultOffsetAnimationSpec = spring(VOID, 400.0, new IntOffset(get_VisibilityThreshold_1(Companion_getInstance_3())));
      DefaultSizeAnimationSpec = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_0())));
      androidx_compose_animation_EnterTransition$stable = 0;
      androidx_compose_animation_ExitTransition$stable = 0;
      androidx_compose_animation_TransitionEffect$stable = 0;
      androidx_compose_animation_ContentScaleTransitionEffect$stable = 0;
      androidx_compose_animation_Fade$stable = 0;
      androidx_compose_animation_Slide$stable = 0;
      androidx_compose_animation_ChangeSize$stable = 0;
      androidx_compose_animation_Scale$stable = 0;
      androidx_compose_animation_TransitionData$stable = 0;
    }
  }
  function ExperimentalSharedTransitionApi() {
  }
  protoOf(ExperimentalSharedTransitionApi).equals = function (other) {
    if (!(other instanceof ExperimentalSharedTransitionApi))
      return false;
    other instanceof ExperimentalSharedTransitionApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalSharedTransitionApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalSharedTransitionApi).toString = function () {
    return '@androidx.compose.animation.ExperimentalSharedTransitionApi(' + ')';
  };
  function get_DecelerationRate() {
    _init_properties_FlingCalculator_kt__ornu7o();
    return DecelerationRate;
  }
  var DecelerationRate;
  var androidx_compose_animation_FlingCalculator_FlingInfo$stable;
  var androidx_compose_animation_FlingCalculator$stable;
  function _get_friction__4dx5ox($this) {
    return $this.friction_1;
  }
  function _get_magicPhysicalCoefficient__7ixkai($this) {
    return $this.magicPhysicalCoefficient_1;
  }
  function computeDeceleration($this, density) {
    return computeDeceleration_0(0.84, density.get_density_qy0267_k$());
  }
  function getSplineDeceleration($this, velocity) {
    return AndroidFlingSpline_getInstance().deceleration_7lhbmp_k$(velocity, $this.friction_1 * $this.magicPhysicalCoefficient_1);
  }
  function FlingInfo(initialVelocity, distance, duration) {
    this.initialVelocity_1 = initialVelocity;
    this.distance_1 = distance;
    this.duration_1 = duration;
  }
  protoOf(FlingInfo).get_initialVelocity_xnobx4_k$ = function () {
    return this.initialVelocity_1;
  };
  protoOf(FlingInfo).get_distance_r171oi_k$ = function () {
    return this.distance_1;
  };
  protoOf(FlingInfo).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(FlingInfo).position_oaxlut_k$ = function (time) {
    var tmp;
    if (compare(this.duration_1, new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var other = toNumber(this.duration_1);
      tmp = toNumber(time) / other;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    // Inline function 'kotlin.math.sign' call
    var x = this.initialVelocity_1;
    var tmp$ret$1 = sign(x);
    return this.distance_1 * tmp$ret$1 * AndroidFlingSpline_getInstance().flingPosition_kqyylv_k$(splinePos).get_distanceCoefficient_3vhbop_k$();
  };
  protoOf(FlingInfo).velocity_2zfv01_k$ = function (time) {
    var tmp;
    if (compare(this.duration_1, new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var other = toNumber(this.duration_1);
      tmp = toNumber(time) / other;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    var tmp_0 = AndroidFlingSpline_getInstance().flingPosition_kqyylv_k$(splinePos).get_velocityCoefficient_w8qjlb_k$();
    // Inline function 'kotlin.math.sign' call
    var x = this.initialVelocity_1;
    return tmp_0 * sign(x) * this.distance_1 / toNumber(this.duration_1) * 1000.0;
  };
  protoOf(FlingInfo).component1_7eebsc_k$ = function () {
    return this.initialVelocity_1;
  };
  protoOf(FlingInfo).component2_7eebsb_k$ = function () {
    return this.distance_1;
  };
  protoOf(FlingInfo).component3_7eebsa_k$ = function () {
    return this.duration_1;
  };
  protoOf(FlingInfo).copy_g5ll21_k$ = function (initialVelocity, distance, duration) {
    return new FlingInfo(initialVelocity, distance, duration);
  };
  protoOf(FlingInfo).copy$default_w0uq4e_k$ = function (initialVelocity, distance, duration, $super) {
    initialVelocity = initialVelocity === VOID ? this.initialVelocity_1 : initialVelocity;
    distance = distance === VOID ? this.distance_1 : distance;
    duration = duration === VOID ? this.duration_1 : duration;
    return $super === VOID ? this.copy_g5ll21_k$(initialVelocity, distance, duration) : $super.copy_g5ll21_k$.call(this, initialVelocity, distance, duration);
  };
  protoOf(FlingInfo).toString = function () {
    return 'FlingInfo(initialVelocity=' + this.initialVelocity_1 + ', distance=' + this.distance_1 + ', duration=' + this.duration_1.toString() + ')';
  };
  protoOf(FlingInfo).hashCode = function () {
    var result = getNumberHashCode(this.initialVelocity_1);
    result = imul(result, 31) + getNumberHashCode(this.distance_1) | 0;
    result = imul(result, 31) + this.duration_1.hashCode() | 0;
    return result;
  };
  protoOf(FlingInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingInfo))
      return false;
    var tmp0_other_with_cast = other instanceof FlingInfo ? other : THROW_CCE();
    if (!equals(this.initialVelocity_1, tmp0_other_with_cast.initialVelocity_1))
      return false;
    if (!equals(this.distance_1, tmp0_other_with_cast.distance_1))
      return false;
    if (!equalsLong(this.duration_1, tmp0_other_with_cast.duration_1))
      return false;
    return true;
  };
  function FlingCalculator(friction, density) {
    this.friction_1 = friction;
    this.density_1 = density;
    this.magicPhysicalCoefficient_1 = computeDeceleration(this, this.density_1);
  }
  protoOf(FlingCalculator).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(FlingCalculator).flingDuration_g3t3l4_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    // Inline function 'kotlin.math.exp' call
    var x = l / decelMinusOne;
    var tmp$ret$0 = Math.exp(x);
    return numberToLong(1000.0 * tmp$ret$0);
  };
  protoOf(FlingCalculator).flingDistance_e8js0p_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.friction_1 * this.magicPhysicalCoefficient_1;
    // Inline function 'kotlin.math.exp' call
    var x = get_DecelerationRate() / decelMinusOne * l;
    return tmp * Math.exp(x);
  };
  protoOf(FlingCalculator).flingInfo_sr0d1q_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.friction_1 * this.magicPhysicalCoefficient_1;
    // Inline function 'kotlin.math.exp' call
    var x = get_DecelerationRate() / decelMinusOne * l;
    var tmp_0 = tmp * Math.exp(x);
    // Inline function 'kotlin.math.exp' call
    var x_0 = l / decelMinusOne;
    var tmp$ret$1 = Math.exp(x_0);
    return new FlingInfo(velocity, tmp_0, numberToLong(1000.0 * tmp$ret$1));
  };
  function computeDeceleration_0(friction, density) {
    _init_properties_FlingCalculator_kt__ornu7o();
    return 9.80665 * 39.37 * density * 160.0 * friction;
  }
  var properties_initialized_FlingCalculator_kt_aw7aky;
  function _init_properties_FlingCalculator_kt__ornu7o() {
    if (!properties_initialized_FlingCalculator_kt_aw7aky) {
      properties_initialized_FlingCalculator_kt_aw7aky = true;
      // Inline function 'kotlin.math.ln' call
      var tmp = Math.log(0.78);
      // Inline function 'kotlin.math.ln' call
      DecelerationRate = tmp / Math.log(0.9);
      androidx_compose_animation_FlingCalculator_FlingInfo$stable = 0;
      androidx_compose_animation_FlingCalculator$stable = 0;
    }
  }
  var androidx_compose_animation_RenderInTransitionOverlayNodeElement$stable;
  var androidx_compose_animation_RenderInTransitionOverlayNode$stable;
  function RenderInTransitionOverlayNodeElement(sharedTransitionScope, renderInOverlay, zIndexInOverlay, clipInOverlay) {
    ModifierNodeElement.call(this);
    this.sharedTransitionScope_1 = sharedTransitionScope;
    this.renderInOverlay_1 = renderInOverlay;
    this.zIndexInOverlay_1 = zIndexInOverlay;
    this.clipInOverlay_1 = clipInOverlay;
  }
  protoOf(RenderInTransitionOverlayNodeElement).set_sharedTransitionScope_jrj0tv_k$ = function (_set____db54di) {
    this.sharedTransitionScope_1 = _set____db54di;
  };
  protoOf(RenderInTransitionOverlayNodeElement).get_sharedTransitionScope_rd4vgv_k$ = function () {
    return this.sharedTransitionScope_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).set_renderInOverlay_apxsrl_k$ = function (_set____db54di) {
    this.renderInOverlay_1 = _set____db54di;
  };
  protoOf(RenderInTransitionOverlayNodeElement).get_renderInOverlay_hmdu9g_k$ = function () {
    return this.renderInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).get_zIndexInOverlay_tqowly_k$ = function () {
    return this.zIndexInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).get_clipInOverlay_wmsm36_k$ = function () {
    return this.clipInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).create_md4cuc_k$ = function () {
    return new RenderInTransitionOverlayNode(this.sharedTransitionScope_1, this.renderInOverlay_1, this.zIndexInOverlay_1, this.clipInOverlay_1);
  };
  protoOf(RenderInTransitionOverlayNodeElement).update_fzx51w_k$ = function (node) {
    node.sharedScope_1 = this.sharedTransitionScope_1;
    node.renderInOverlay_1 = this.renderInOverlay_1;
    node.set_zIndexInOverlay_d3b21a_k$(this.zIndexInOverlay_1);
    node.clipInOverlay_1 = this.clipInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).update_9wd57p_k$ = function (node) {
    return this.update_fzx51w_k$(node instanceof RenderInTransitionOverlayNode ? node : THROW_CCE());
  };
  protoOf(RenderInTransitionOverlayNodeElement).hashCode = function () {
    return imul(imul(imul(hashCode(this.sharedTransitionScope_1), 31) + hashCode(this.renderInOverlay_1) | 0, 31) + getNumberHashCode(this.zIndexInOverlay_1) | 0, 31) + hashCode(this.clipInOverlay_1) | 0;
  };
  protoOf(RenderInTransitionOverlayNodeElement).equals = function (other) {
    if (other instanceof RenderInTransitionOverlayNodeElement) {
      return equals(this.sharedTransitionScope_1, other.sharedTransitionScope_1) && this.renderInOverlay_1 === other.renderInOverlay_1 && this.zIndexInOverlay_1 === other.zIndexInOverlay_1 && this.clipInOverlay_1 === other.clipInOverlay_1;
    }
    return false;
  };
  protoOf(RenderInTransitionOverlayNodeElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('renderInSharedTransitionOverlay');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('sharedTransitionScope', this.sharedTransitionScope_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('renderInOverlay', this.renderInOverlay_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('zIndexInOverlay', this.zIndexInOverlay_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('clipInOverlayDuringTransition', this.clipInOverlay_1);
  };
  protoOf(RenderInTransitionOverlayNodeElement).component1_7eebsc_k$ = function () {
    return this.sharedTransitionScope_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).component2_7eebsb_k$ = function () {
    return this.renderInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).component3_7eebsa_k$ = function () {
    return this.zIndexInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).component4_7eebs9_k$ = function () {
    return this.clipInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).copy_s8dosh_k$ = function (sharedTransitionScope, renderInOverlay, zIndexInOverlay, clipInOverlay) {
    return new RenderInTransitionOverlayNodeElement(sharedTransitionScope, renderInOverlay, zIndexInOverlay, clipInOverlay);
  };
  protoOf(RenderInTransitionOverlayNodeElement).copy$default_dvz0wi_k$ = function (sharedTransitionScope, renderInOverlay, zIndexInOverlay, clipInOverlay, $super) {
    sharedTransitionScope = sharedTransitionScope === VOID ? this.sharedTransitionScope_1 : sharedTransitionScope;
    renderInOverlay = renderInOverlay === VOID ? this.renderInOverlay_1 : renderInOverlay;
    zIndexInOverlay = zIndexInOverlay === VOID ? this.zIndexInOverlay_1 : zIndexInOverlay;
    clipInOverlay = clipInOverlay === VOID ? this.clipInOverlay_1 : clipInOverlay;
    return $super === VOID ? this.copy_s8dosh_k$(sharedTransitionScope, renderInOverlay, zIndexInOverlay, clipInOverlay) : $super.copy_s8dosh_k$.call(this, sharedTransitionScope, renderInOverlay, zIndexInOverlay, clipInOverlay);
  };
  protoOf(RenderInTransitionOverlayNodeElement).toString = function () {
    return 'RenderInTransitionOverlayNodeElement(sharedTransitionScope=' + toString_0(this.sharedTransitionScope_1) + ', renderInOverlay=' + toString_0(this.renderInOverlay_1) + ', zIndexInOverlay=' + this.zIndexInOverlay_1 + ', clipInOverlay=' + toString_0(this.clipInOverlay_1) + ')';
  };
  function LayerWithRenderer($outer, layer) {
    this.$this_1 = $outer;
    this.layer_1 = layer;
  }
  protoOf(LayerWithRenderer).get_layer_iujprc_k$ = function () {
    return this.layer_1;
  };
  protoOf(LayerWithRenderer).get_parentState_ui10gu_k$ = function () {
    return this.$this_1.get_parentState_ui10gu_k$();
  };
  protoOf(LayerWithRenderer).get_zIndex_mbbc75_k$ = function () {
    return this.$this_1.get_zIndexInOverlay_tqowly_k$();
  };
  protoOf(LayerWithRenderer).drawInOverlay_ircoes_k$ = function (drawScope) {
    if (this.$this_1.renderInOverlay_1()) {
      // Inline function 'kotlin.with' call
      var _destruct__k2r9zo = this.$this_1.sharedScope_1.get_root_4w1woo_k$().localPositionOf_hrey0l_k$(requireLayoutCoordinates(this.$this_1), Companion_getInstance_6().get_Zero_k6n73t_k$());
      // Inline function 'androidx.compose.ui.geometry.Offset.component1' call
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(_destruct__k2r9zo);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var x = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Offset.component2' call
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(_destruct__k2r9zo);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var y = floatFromBits(bits_0);
      var clipPath = this.$this_1.clipInOverlay_1(drawScope.get_layoutDirection_7e37v0_k$(), requireDensity(this.$this_1));
      if (!(clipPath == null)) {
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipPath' call
        var clipOp = Companion_getInstance_7().get_Intersect_gpxc6n_k$();
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        var $this$with = drawScope.get_drawContext_ffwztu_k$();
        var previousSize = $this$with.get_size_cxx1ym_k$();
        $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
        try {
          $this$with.get_transform_px941v_k$().clipPath_tlqunt_k$(clipPath, clipOp);
          // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
          drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(x, y);
          try {
            drawLayer(drawScope, this.layer_1);
          }finally {
            drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-x, -y);
          }
        }finally {
          $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
          $this$with.set_size_6a0e6q_k$(previousSize);
        }
      } else {
        // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
        drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(x, y);
        try {
          drawLayer(drawScope, this.layer_1);
        }finally {
          drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-x, -y);
        }
      }
    }
  };
  function _set_layerWithRenderer__a4xuol($this, _set____db54di) {
    $this.layerWithRenderer_1 = _set____db54di;
  }
  function _get_layerWithRenderer__vuqqyx($this) {
    return $this.layerWithRenderer_1;
  }
  function RenderInTransitionOverlayNode$_get_zIndexInOverlay_$ref_26fn2j() {
    return function (p0) {
      return p0.get_zIndexInOverlay_tqowly_k$();
    };
  }
  function RenderInTransitionOverlayNode$_set_zIndexInOverlay_$ref_b4altt() {
    return function (p0, p1) {
      p0.set_zIndexInOverlay_d3b21a_k$(p1);
      return Unit_getInstance();
    };
  }
  function RenderInTransitionOverlayNode$_get_zIndexInOverlay_$ref_26fn2j_0() {
    return function (p0) {
      return p0.get_zIndexInOverlay_tqowly_k$();
    };
  }
  function RenderInTransitionOverlayNode$_set_zIndexInOverlay_$ref_b4altt_0() {
    return function (p0, p1) {
      p0.set_zIndexInOverlay_d3b21a_k$(p1);
      return Unit_getInstance();
    };
  }
  function RenderInTransitionOverlayNode$draw$lambda($this_draw) {
    return function ($this$record) {
      $this_draw.drawContent_m0wwjp_k$();
      return Unit_getInstance();
    };
  }
  function RenderInTransitionOverlayNode(sharedScope, renderInOverlay, zIndexInOverlay, clipInOverlay) {
    Node.call(this);
    this.sharedScope_1 = sharedScope;
    this.renderInOverlay_1 = renderInOverlay;
    this.clipInOverlay_1 = clipInOverlay;
    this.zIndexInOverlay$delegate_1 = mutableFloatStateOf(zIndexInOverlay);
    this.layerWithRenderer_1 = null;
  }
  protoOf(RenderInTransitionOverlayNode).set_sharedScope_5efco2_k$ = function (_set____db54di) {
    this.sharedScope_1 = _set____db54di;
  };
  protoOf(RenderInTransitionOverlayNode).get_sharedScope_mhvhxi_k$ = function () {
    return this.sharedScope_1;
  };
  protoOf(RenderInTransitionOverlayNode).set_renderInOverlay_apxsrl_k$ = function (_set____db54di) {
    this.renderInOverlay_1 = _set____db54di;
  };
  protoOf(RenderInTransitionOverlayNode).get_renderInOverlay_hmdu9g_k$ = function () {
    return this.renderInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNode).set_clipInOverlay_tbgatf_k$ = function (_set____db54di) {
    this.clipInOverlay_1 = _set____db54di;
  };
  protoOf(RenderInTransitionOverlayNode).get_clipInOverlay_wmsm36_k$ = function () {
    return this.clipInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNode).set_zIndexInOverlay_d3b21a_k$ = function (_set____db54di) {
    var tmp0 = this.zIndexInOverlay$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = RenderInTransitionOverlayNode$_get_zIndexInOverlay_$ref_26fn2j_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('zIndexInOverlay', 1, tmp, tmp_0, RenderInTransitionOverlayNode$_set_zIndexInOverlay_$ref_b4altt_0());
    tmp0.set_floatValue_qaujgq_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(RenderInTransitionOverlayNode).get_zIndexInOverlay_tqowly_k$ = function () {
    var tmp0 = this.zIndexInOverlay$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = RenderInTransitionOverlayNode$_get_zIndexInOverlay_$ref_26fn2j();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('zIndexInOverlay', 1, tmp, tmp_0, RenderInTransitionOverlayNode$_set_zIndexInOverlay_$ref_b4altt());
    return tmp0.get_floatValue_xw60ou_k$();
  };
  protoOf(RenderInTransitionOverlayNode).get_parentState_ui10gu_k$ = function () {
    return this.get_current_2exe6q_k$(get_ModifierLocalSharedElementInternalState());
  };
  protoOf(RenderInTransitionOverlayNode).draw_2h95cs_k$ = function (_this__u8e3s4) {
    var tmp0 = this.get_layer_iujprc_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Error: layer never initialized';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var layer = tmp$ret$1;
    _this__u8e3s4.record$default_m64s38_k$(layer, VOID, RenderInTransitionOverlayNode$draw$lambda(_this__u8e3s4));
    if (!this.renderInOverlay_1()) {
      drawLayer(_this__u8e3s4, layer);
    }
  };
  protoOf(RenderInTransitionOverlayNode).get_layer_iujprc_k$ = function () {
    var tmp0_safe_receiver = this.layerWithRenderer_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.layer_1;
  };
  protoOf(RenderInTransitionOverlayNode).onAttach_juzy2c_k$ = function () {
    // Inline function 'kotlin.let' call
    var it = new LayerWithRenderer(this, requireGraphicsContext(this).createGraphicsLayer_a0ja3u_k$());
    this.sharedScope_1.onLayerRendererCreated_lwx1jm_k$(it);
    this.layerWithRenderer_1 = it;
  };
  protoOf(RenderInTransitionOverlayNode).onDetach_8dig02_k$ = function () {
    var tmp0_safe_receiver = this.layerWithRenderer_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.sharedScope_1.onLayerRendererRemoved_bn3slm_k$(tmp0_safe_receiver);
      requireGraphicsContext(this).releaseGraphicsLayer_8n1d07_k$(tmp0_safe_receiver.layer_1);
    }
  };
  function get_ModifierLocalSharedElementInternalState() {
    _init_properties_SharedContentNode_kt__22dkzo();
    return ModifierLocalSharedElementInternalState;
  }
  var ModifierLocalSharedElementInternalState;
  var androidx_compose_animation_SharedBoundsNodeElement$stable;
  var androidx_compose_animation_SharedBoundsNode$stable;
  function SharedBoundsNodeElement(sharedElementState) {
    ModifierNodeElement.call(this);
    this.sharedElementState_1 = sharedElementState;
  }
  protoOf(SharedBoundsNodeElement).get_sharedElementState_80iykj_k$ = function () {
    return this.sharedElementState_1;
  };
  protoOf(SharedBoundsNodeElement).create_md4cuc_k$ = function () {
    return new SharedBoundsNode(this.sharedElementState_1);
  };
  protoOf(SharedBoundsNodeElement).update_3usuny_k$ = function (node) {
    node.set_state_jymqa0_k$(this.sharedElementState_1);
  };
  protoOf(SharedBoundsNodeElement).update_9wd57p_k$ = function (node) {
    return this.update_3usuny_k$(node instanceof SharedBoundsNode ? node : THROW_CCE());
  };
  protoOf(SharedBoundsNodeElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('sharedBounds');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('sharedElementState', this.sharedElementState_1);
  };
  protoOf(SharedBoundsNodeElement).component1_7eebsc_k$ = function () {
    return this.sharedElementState_1;
  };
  protoOf(SharedBoundsNodeElement).copy_hv5xmq_k$ = function (sharedElementState) {
    return new SharedBoundsNodeElement(sharedElementState);
  };
  protoOf(SharedBoundsNodeElement).copy$default_oq26km_k$ = function (sharedElementState, $super) {
    sharedElementState = sharedElementState === VOID ? this.sharedElementState_1 : sharedElementState;
    return $super === VOID ? this.copy_hv5xmq_k$(sharedElementState) : $super.copy_hv5xmq_k$.call(this, sharedElementState);
  };
  protoOf(SharedBoundsNodeElement).toString = function () {
    return 'SharedBoundsNodeElement(sharedElementState=' + toString_0(this.sharedElementState_1) + ')';
  };
  protoOf(SharedBoundsNodeElement).hashCode = function () {
    return hashCode(this.sharedElementState_1);
  };
  protoOf(SharedBoundsNodeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SharedBoundsNodeElement))
      return false;
    var tmp0_other_with_cast = other instanceof SharedBoundsNodeElement ? other : THROW_CCE();
    if (!equals(this.sharedElementState_1, tmp0_other_with_cast.sharedElementState_1))
      return false;
    return true;
  };
  function _get_approachCoordinates__8yzp32($this) {
    return requireLayoutCoordinates($this);
  }
  function _set_isPlaced__jjpkts($this, _set____db54di) {
    $this.isPlaced_1 = _set____db54di;
  }
  function _get_isPlaced__6qt9d0($this) {
    return $this.isPlaced_1;
  }
  function _get_rootCoords__hhtj4l($this) {
    return _get_sharedElement__nuo62($this).get_scope_iyfcq3_k$().get_root_4w1woo_k$();
  }
  function requireLookaheadLayoutCoordinates($this) {
    // Inline function 'kotlin.with' call
    return $this.state_1.get_sharedElement_xjw30y_k$().get_scope_iyfcq3_k$().toLookaheadCoordinates_1gvv32_k$(requireLayoutCoordinates($this));
  }
  function _get_boundsAnimation__ff0bi($this) {
    return $this.state_1.get_boundsAnimation_bx9g2i_k$();
  }
  function _set_layer__h6sopg($this, value) {
    if (value == null) {
      var tmp0_safe_receiver = $this.layer_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        requireGraphicsContext($this).releaseGraphicsLayer_8n1d07_k$(tmp0_safe_receiver);
      }
    } else {
      $this.state_1.set_layer_t4w1t1_k$(value);
    }
    $this.layer_1 = value;
  }
  function _get_layer__eubrs0($this) {
    return $this.layer_1;
  }
  function _get_sharedElement__nuo62($this) {
    return $this.state_1.get_sharedElement_xjw30y_k$();
  }
  function setup($this) {
    $this.provide_fhfib2_k$(get_ModifierLocalSharedElementInternalState(), $this.state_1);
    $this.state_1.set_parentState_pcfd0q_k$($this.get_current_2exe6q_k$(get_ModifierLocalSharedElementInternalState()));
    _set_layer__h6sopg($this, requireGraphicsContext($this).createGraphicsLayer_a0ja3u_k$());
    $this.isPlaced_1 = false;
    $this.state_1.set_boundsProvider_6jjacs_k$($this);
  }
  function approachPlaceMatchBeyondTransition($this, _this__u8e3s4, placeable) {
    if (!_get_boundsAnimation__ff0bi($this).get_target_juba8q_k$()) {
      var bounds = _get_sharedElement__nuo62($this).get_currentBoundsWhenMatched_idiw5_k$();
      if (!(bounds == null)) {
        var tmp0_safe_receiver = _this__u8e3s4.get_coordinates_q6f2pa_k$();
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.let' call
          var positionInScope = _get_rootCoords__hhtj4l($this).localPositionOf_hrey0l_k$(tmp0_safe_receiver, Companion_getInstance_6().get_Zero_k6n73t_k$());
          tmp = round(Offset__minus_impl_hoj2c0(bounds.get_topLeft_ypvrd5_k$(), positionInScope));
        }
        var tmp1_elvis_lhs = tmp;
        var tmp_0;
        var tmp_1 = tmp1_elvis_lhs;
        if ((tmp_1 == null ? null : new IntOffset(tmp_1)) == null) {
          tmp_0 = Companion_getInstance_3().get_Zero_6hc3i8_k$();
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var _destruct__k2r9zo = tmp_0;
        // Inline function 'androidx.compose.ui.unit.IntOffset.component1' call
        var x = _IntOffset___get_x__impl__qiqr5o(_destruct__k2r9zo);
        // Inline function 'androidx.compose.ui.unit.IntOffset.component2' call
        var y = _IntOffset___get_y__impl__2avpwj(_destruct__k2r9zo);
        _this__u8e3s4.place$default_61faqz_k$(placeable, x, y);
      } else {
        _this__u8e3s4.place$default_61faqz_k$(placeable, 0, 0);
      }
    } else {
      if (_get_boundsAnimation__ff0bi($this).get_target_juba8q_k$() || !_get_sharedElement__nuo62($this).get_foundMatch_g4mbjg_k$()) {
        _this__u8e3s4.place$default_61faqz_k$(placeable, 0, 0);
      }
    }
  }
  function approachPlaceMatchInTransition($this, _this__u8e3s4, placeable) {
    var coordinates = _this__u8e3s4.get_coordinates_q6f2pa_k$();
    if (coordinates == null) {
      _this__u8e3s4.place$default_61faqz_k$(placeable, 0, 0);
      return Unit_getInstance();
    }
    var positionInScope = _get_rootCoords__hhtj4l($this).localPositionOf_hrey0l_k$(coordinates, Companion_getInstance_6().get_Zero_k6n73t_k$());
    if (!(_get_sharedElement__nuo62($this).get_targetData_z66van_k$() == null)) {
      var tmp0_elvis_lhs = _get_sharedElement__nuo62($this).get_currentBoundsWhenMatched_idiw5_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.let' call
        var tmp0 = placeable.get_width_j0q4yl_k$();
        // Inline function 'androidx.compose.ui.geometry.Size' call
        // Inline function 'androidx.compose.ui.util.packFloats' call
        var val2 = placeable.get_height_e7t92o_k$();
        var v1 = fromInt(toRawBits(tmp0));
        var v2 = fromInt(toRawBits(val2));
        var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
        var tmp$ret$1 = _Size___init__impl__aywn0g(tmp$ret$0);
        tmp = Rect(positionInScope, tmp$ret$1);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var bounds = tmp;
      _get_boundsAnimation__ff0bi($this).animate_s3upvz_k$(bounds, get_targetBounds(ensureNotNull(_get_sharedElement__nuo62($this).get_targetData_z66van_k$())));
    }
    var animatedBounds = _get_boundsAnimation__ff0bi($this).get_value_j01efc_k$();
    var topLeft;
    var tmp_0;
    if (animatedBounds == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = calculateOffsetFromDirectManipulation(ensureNotNull(_get_sharedElement__nuo62($this).get_targetData_z66van_k$()), animatedBounds);
    }
    var animatedTopLeft = tmp_0;
    if (_get_boundsAnimation__ff0bi($this).get_target_juba8q_k$()) {
      var tmp_1;
      var tmp_2 = animatedTopLeft;
      if ((tmp_2 == null ? null : new Offset(tmp_2)) == null) {
        tmp_1 = positionInScope;
      } else {
        tmp_1 = animatedTopLeft;
      }
      topLeft = tmp_1;
      var tmp_3;
      var tmp_4 = animatedTopLeft;
      if ((tmp_4 == null ? null : new Offset(tmp_4)) == null) {
        tmp_3 = Rect(positionInScope, toSize(coordinates.get_size_kd98kr_k$()));
      } else {
        tmp_3 = Rect(animatedTopLeft, animatedBounds.get_size_cxx1ym_k$());
      }
      var bounds_0 = tmp_3;
      _get_sharedElement__nuo62($this).set_currentBoundsWhenMatched_megq7r_k$(bounds_0);
    } else {
      var tmp_5;
      var tmp_6 = animatedTopLeft;
      if ((tmp_6 == null ? null : new Offset(tmp_6)) == null) {
        tmp_5 = ensureNotNull(_get_sharedElement__nuo62($this).get_currentBoundsWhenMatched_idiw5_k$()).get_topLeft_ypvrd5_k$();
      } else {
        tmp_5 = animatedTopLeft;
      }
      topLeft = tmp_5;
    }
    // Inline function 'kotlin.let' call
    var _destruct__k2r9zo = Offset__minus_impl_hoj2c0(topLeft, positionInScope);
    // Inline function 'androidx.compose.ui.geometry.Offset.component1' call
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.component2' call
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var y = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var tmp_7 = roundToInt(x);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var tmp$ret$21 = roundToInt(y);
    _this__u8e3s4.place$default_61faqz_k$(placeable, tmp_7, tmp$ret$21);
  }
  function approachPlace($this, _this__u8e3s4, placeable) {
    $this.isPlaced_1 = true;
    if (!_get_sharedElement__nuo62($this).get_foundMatch_g4mbjg_k$()) {
      _get_sharedElement__nuo62($this).set_currentBoundsWhenMatched_megq7r_k$(null);
      var tmp = placeable.get_width_j0q4yl_k$();
      var tmp_0 = placeable.get_height_e7t92o_k$();
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, SharedBoundsNode$approachPlace$lambda(placeable));
    }
    if (!_get_sharedElement__nuo62($this).get_scope_iyfcq3_k$().get_isTransitionActive_t69j02_k$()) {
      var tmp_1 = placeable.get_width_j0q4yl_k$();
      var tmp_2 = placeable.get_height_e7t92o_k$();
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp_1, tmp_2, VOID, SharedBoundsNode$approachPlace$lambda_0($this, placeable));
    } else {
      var tmp_3 = $this.state_1.get_placeHolderSize_umjxaj_k$();
      var tmp_4 = requireLookaheadLayoutCoordinates($this).get_size_kd98kr_k$();
      var tmp0 = placeable.get_width_j0q4yl_k$();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = placeable.get_height_e7t92o_k$();
      var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$1 = _IntSize___init__impl__emcjft(tmp$ret$0);
      var _destruct__k2r9zo = tmp_3.calculateSize_sx87iu_k$(tmp_4, tmp$ret$1);
      // Inline function 'androidx.compose.ui.unit.IntSize.component1' call
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(_destruct__k2r9zo);
      var w = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.component2' call
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(_destruct__k2r9zo);
      var h = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      return _this__u8e3s4.layout$default_n19e5l_k$(w, h, VOID, SharedBoundsNode$approachPlace$lambda_1($this, placeable));
    }
  }
  function SharedBoundsNode$measure$lambda($placeable, this$0) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($placeable, 0, 0);
      _get_sharedElement__nuo62(this$0).onLookaheadPlaced_2odex4_k$($this$layout, this$0.state_1);
      return Unit_getInstance();
    };
  }
  function SharedBoundsNode$approachPlace$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function SharedBoundsNode$approachPlace$lambda_0(this$0, $placeable) {
    return function ($this$layout) {
      approachPlaceMatchBeyondTransition(this$0, $this$layout, $placeable);
      return Unit_getInstance();
    };
  }
  function SharedBoundsNode$approachPlace$lambda_1(this$0, $placeable) {
    return function ($this$layout) {
      approachPlaceMatchInTransition(this$0, $this$layout, $placeable);
      return Unit_getInstance();
    };
  }
  function SharedBoundsNode$draw$lambda($this_draw, this$0) {
    return function ($this$record) {
      $this_draw.drawContent_m0wwjp_k$();
      var tmp;
      if (false && _get_sharedElement__nuo62(this$0).get_foundMatch_g4mbjg_k$()) {
        $this$record.drawRect$default_5x4e2k_k$(Companion_getInstance_8().get_Green_dkzwf_k$(), VOID, VOID, VOID, new Stroke(3.0));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SharedBoundsNode(state) {
    Node.call(this);
    this.isPlaced_1 = false;
    this.state_1 = state;
    this.layer_1 = state.get_layer_iujprc_k$();
    this.providedValues_1 = modifierLocalMapOf(to(get_ModifierLocalSharedElementInternalState(), state));
  }
  protoOf(SharedBoundsNode).get_lastBoundsInSharedTransitionScope_e0le3l_k$ = function () {
    if (!this.get_isAttached_odsl1l_k$() || !this.isPlaced_1)
      return null;
    return Rect(_get_rootCoords__hhtj4l(this).localPositionOf$default_f8vt4q_k$(_get_approachCoordinates__8yzp32(this)), toSize(_get_approachCoordinates__8yzp32(this).get_size_kd98kr_k$()));
  };
  protoOf(SharedBoundsNode).set_state_jymqa0_k$ = function (value) {
    if (!equals(value, this.state_1)) {
      this.state_1 = value;
      if (this.get_isAttached_odsl1l_k$()) {
        setup(this);
      }
    }
  };
  protoOf(SharedBoundsNode).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(SharedBoundsNode).get_providedValues_crrbpu_k$ = function () {
    return this.providedValues_1;
  };
  protoOf(SharedBoundsNode).onAttach_juzy2c_k$ = function () {
    protoOf(Node).onAttach_juzy2c_k$.call(this);
    setup(this);
  };
  protoOf(SharedBoundsNode).onDetach_8dig02_k$ = function () {
    protoOf(Node).onDetach_8dig02_k$.call(this);
    _set_layer__h6sopg(this, null);
    this.state_1.set_parentState_pcfd0q_k$(null);
    this.state_1.set_boundsProvider_6jjacs_k$(null);
    this.isPlaced_1 = false;
  };
  protoOf(SharedBoundsNode).onReset_y3iodc_k$ = function () {
    protoOf(Node).onReset_y3iodc_k$.call(this);
    var tmp0_safe_receiver = this.layer_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      requireGraphicsContext(this).releaseGraphicsLayer_8n1d07_k$(tmp0_safe_receiver);
    }
    _set_layer__h6sopg(this, requireGraphicsContext(this).createGraphicsLayer_a0ja3u_k$());
  };
  protoOf(SharedBoundsNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.measure_4dmfk1_k$(constraints);
    var tmp = placeable.get_width_j0q4yl_k$();
    var tmp_0 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, SharedBoundsNode$measure$lambda(placeable, this));
  };
  protoOf(SharedBoundsNode).isMeasurementApproachInProgress_fyhlil_k$ = function (lookaheadSize) {
    return _get_sharedElement__nuo62(this).get_foundMatch_g4mbjg_k$() && this.state_1.get_sharedElement_xjw30y_k$().get_scope_iyfcq3_k$().get_isTransitionActive_t69j02_k$();
  };
  protoOf(SharedBoundsNode).approachMeasure_xs6k22_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    if (!_get_sharedElement__nuo62(this).get_foundMatch_g4mbjg_k$()) {
      tmp = constraints;
    } else {
      var tmp0_elvis_lhs = _get_boundsAnimation__ff0bi(this).get_value_j01efc_k$();
      var tmp1_safe_receiver = tmp0_elvis_lhs == null ? _get_sharedElement__nuo62(this).tryInitializingCurrentBounds_hhp1hi_k$() : tmp0_elvis_lhs;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        var _destruct__k2r9zo = roundToIntSize(tmp1_safe_receiver.get_size_cxx1ym_k$());
        // Inline function 'androidx.compose.ui.unit.IntSize.component1' call
        // Inline function 'androidx.compose.ui.unit.IntSize.width' call
        // Inline function 'androidx.compose.ui.util.unpackInt1' call
        var value = _IntSize___get_packedValue__impl__uho7jf(_destruct__k2r9zo);
        var width = convertToInt(shiftRight(value, 32));
        // Inline function 'androidx.compose.ui.unit.IntSize.component2' call
        // Inline function 'androidx.compose.ui.unit.IntSize.height' call
        // Inline function 'androidx.compose.ui.util.unpackInt2' call
        var value_0 = _IntSize___get_packedValue__impl__uho7jf(_destruct__k2r9zo);
        var height = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
        // Inline function 'kotlin.require' call
        if (!(!(width === 2147483647) && !(height === 2147483647))) {
          var message = 'Error: Infinite width/height is invalid. ' + ('animated bounds: ' + toString(_get_boundsAnimation__ff0bi(this).get_value_j01efc_k$()) + ',') + (' current bounds: ' + toString(_get_sharedElement__nuo62(this).get_currentBoundsWhenMatched_idiw5_k$()));
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        }
        tmp_0 = Companion_getInstance_9().fixed_rd8fwx_k$(coerceAtLeast(width, 0), coerceAtLeast(height, 0));
      }
      var tmp2_elvis_lhs = tmp_0;
      var tmp_1;
      var tmp_2 = tmp2_elvis_lhs;
      if ((tmp_2 == null ? null : new Constraints_0(tmp_2)) == null) {
        tmp_1 = constraints;
      } else {
        tmp_1 = tmp2_elvis_lhs;
      }
      tmp = tmp_1;
    }
    var resolvedConstraints = tmp;
    var placeable = measurable.measure_4dmfk1_k$(resolvedConstraints);
    return approachPlace(this, _this__u8e3s4, placeable);
  };
  protoOf(SharedBoundsNode).draw_2h95cs_k$ = function (_this__u8e3s4) {
    var tmp = this.state_1;
    var tmp_0;
    if (_get_sharedElement__nuo62(this).get_foundMatch_g4mbjg_k$() && !(_get_sharedElement__nuo62(this).get_currentBoundsWhenMatched_idiw5_k$() == null)) {
      tmp_0 = this.state_1.get_overlayClip_75q8uv_k$().getClipPath_nnv5ej_k$(this.state_1.get_userState_dy2db1_k$(), ensureNotNull(_get_sharedElement__nuo62(this).get_currentBoundsWhenMatched_idiw5_k$()), _this__u8e3s4.get_layoutDirection_7e37v0_k$(), requireDensity(this));
    } else {
      tmp_0 = null;
    }
    tmp.set_clipPathInOverlay_uhdx0g_k$(tmp_0);
    var tmp0 = this.state_1.get_layer_iujprc_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Error: Layer is null when accessed for shared bounds/element : ' + toString_0(_get_sharedElement__nuo62(this).get_key_18j28a_k$()) + ',' + ('target: ' + this.state_1.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$() + ', is attached: ' + this.get_isAttached_odsl1l_k$());
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var layer = tmp$ret$1;
    _this__u8e3s4.record$default_m64s38_k$(layer, VOID, SharedBoundsNode$draw$lambda(_this__u8e3s4, this));
    if (this.state_1.get_shouldRenderInPlace_x76dxs_k$()) {
      drawLayer(_this__u8e3s4, layer);
    }
  };
  function ModifierLocalSharedElementInternalState$lambda() {
    _init_properties_SharedContentNode_kt__22dkzo();
    return null;
  }
  var properties_initialized_SharedContentNode_kt_1ekm3q;
  function _init_properties_SharedContentNode_kt__22dkzo() {
    if (!properties_initialized_SharedContentNode_kt_1ekm3q) {
      properties_initialized_SharedContentNode_kt_1ekm3q = true;
      ModifierLocalSharedElementInternalState = modifierLocalOf(ModifierLocalSharedElementInternalState$lambda);
      androidx_compose_animation_SharedBoundsNodeElement$stable = 0;
      androidx_compose_animation_SharedBoundsNode$stable = 8;
    }
  }
  var androidx_compose_animation_SharedElement$stable;
  var androidx_compose_animation_SharedElementInternalState$stable;
  var androidx_compose_animation_TargetData$stable;
  function _get_shouldRenderBasedOnTarget__zs0lz($this) {
    return equals($this.get_sharedElement_xjw30y_k$().targetBoundsProvider_1, $this.boundsProvider_1) || !$this.get_renderOnlyWhenVisible_62mrql_k$();
  }
  function SharedElementInternalState$_get_zIndex_$ref_jdh66v() {
    return function (p0) {
      return p0.get_zIndex_mbbc75_k$();
    };
  }
  function SharedElementInternalState$_set_zIndex_$ref_4b8l1n() {
    return function (p0, p1) {
      p0.set_zIndex_58jhbh_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementInternalState$_get_zIndex_$ref_jdh66v_0() {
    return function (p0) {
      return p0.get_zIndex_mbbc75_k$();
    };
  }
  function SharedElementInternalState$_set_zIndex_$ref_4b8l1n_0() {
    return function (p0, p1) {
      p0.set_zIndex_58jhbh_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementInternalState$_get_renderInOverlayDuringTransition_$ref_612aby() {
    return function (p0) {
      return p0.get_renderInOverlayDuringTransition_4yqpjy_k$();
    };
  }
  function SharedElementInternalState$_set_renderInOverlayDuringTransition_$ref_byuuki() {
    return function (p0, p1) {
      p0.set_renderInOverlayDuringTransition_bhc293_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementInternalState$_get_renderInOverlayDuringTransition_$ref_612aby_0() {
    return function (p0) {
      return p0.get_renderInOverlayDuringTransition_4yqpjy_k$();
    };
  }
  function SharedElementInternalState$_set_renderInOverlayDuringTransition_$ref_byuuki_0() {
    return function (p0, p1) {
      p0.set_renderInOverlayDuringTransition_bhc293_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementInternalState$_get_sharedElement_$ref_9roh32() {
    return function (p0) {
      return p0.get_sharedElement_xjw30y_k$();
    };
  }
  function SharedElementInternalState$_set_sharedElement_$ref_by4f7a() {
    return function (p0, p1) {
      p0.set_sharedElement_2xbsqt_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementInternalState$_get_sharedElement_$ref_9roh32_0() {
    return function (p0) {
      return p0.get_sharedElement_xjw30y_k$();
    };
  }
  function SharedElementInternalState$_set_sharedElement_$ref_by4f7a_0() {
    return function (p0, p1) {
      p0.set_sharedElement_2xbsqt_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementInternalState$_get_boundsAnimation_$ref_dd6cc6() {
    return function (p0) {
      return p0.get_boundsAnimation_bx9g2i_k$();
    };
  }
  function SharedElementInternalState$_set_boundsAnimation_$ref_qnwl8i() {
    return function (p0, p1) {
      p0.set_boundsAnimation_mkzem3_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementInternalState$_get_boundsAnimation_$ref_dd6cc6_0() {
    return function (p0) {
      return p0.get_boundsAnimation_bx9g2i_k$();
    };
  }
  function SharedElementInternalState$_set_boundsAnimation_$ref_qnwl8i_0() {
    return function (p0, p1) {
      p0.set_boundsAnimation_mkzem3_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementInternalState$_get_placeHolderSize_$ref_jk8ldx() {
    return function (p0) {
      return p0.get_placeHolderSize_umjxaj_k$();
    };
  }
  function SharedElementInternalState$_set_placeHolderSize_$ref_69ichl() {
    return function (p0, p1) {
      p0.set_placeHolderSize_357yjd_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementInternalState$_get_placeHolderSize_$ref_jk8ldx_0() {
    return function (p0) {
      return p0.get_placeHolderSize_umjxaj_k$();
    };
  }
  function SharedElementInternalState$_set_placeHolderSize_$ref_69ichl_0() {
    return function (p0, p1) {
      p0.set_placeHolderSize_357yjd_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementInternalState$_get_renderOnlyWhenVisible_$ref_jjyisj() {
    return function (p0) {
      return p0.get_renderOnlyWhenVisible_62mrql_k$();
    };
  }
  function SharedElementInternalState$_set_renderOnlyWhenVisible_$ref_lst1qv() {
    return function (p0, p1) {
      p0.set_renderOnlyWhenVisible_f63i0s_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementInternalState$_get_renderOnlyWhenVisible_$ref_jjyisj_0() {
    return function (p0) {
      return p0.get_renderOnlyWhenVisible_62mrql_k$();
    };
  }
  function SharedElementInternalState$_set_renderOnlyWhenVisible_$ref_lst1qv_0() {
    return function (p0, p1) {
      p0.set_renderOnlyWhenVisible_f63i0s_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementInternalState$_get_overlayClip_$ref_frbvp5() {
    return function (p0) {
      return p0.get_overlayClip_75q8uv_k$();
    };
  }
  function SharedElementInternalState$_set_overlayClip_$ref_5nlo6l() {
    return function (p0, p1) {
      p0.set_overlayClip_a8g9zt_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementInternalState$_get_overlayClip_$ref_frbvp5_0() {
    return function (p0) {
      return p0.get_overlayClip_75q8uv_k$();
    };
  }
  function SharedElementInternalState$_set_overlayClip_$ref_5nlo6l_0() {
    return function (p0, p1) {
      p0.set_overlayClip_a8g9zt_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementInternalState$_get_userState_$ref_36dya5() {
    return function (p0) {
      return p0.get_userState_dy2db1_k$();
    };
  }
  function SharedElementInternalState$_set_userState_$ref_c1dk87() {
    return function (p0, p1) {
      p0.set_userState_zl3ka_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementInternalState$_get_userState_$ref_36dya5_0() {
    return function (p0) {
      return p0.get_userState_dy2db1_k$();
    };
  }
  function SharedElementInternalState$_set_userState_$ref_c1dk87_0() {
    return function (p0, p1) {
      p0.set_userState_zl3ka_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementInternalState$_get_layer_$ref_erefnc() {
    return function (p0) {
      return p0.get_layer_iujprc_k$();
    };
  }
  function SharedElementInternalState$_set_layer_$ref_qyv5x8() {
    return function (p0, p1) {
      p0.set_layer_t4w1t1_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementInternalState$_get_layer_$ref_erefnc_0() {
    return function (p0) {
      return p0.get_layer_iujprc_k$();
    };
  }
  function SharedElementInternalState$_set_layer_$ref_qyv5x8_0() {
    return function (p0, p1) {
      p0.set_layer_t4w1t1_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElementInternalState(sharedElement, boundsAnimation, placeHolderSize, renderOnlyWhenVisible, overlayClip, renderInOverlayDuringTransition, userState, zIndex) {
    this.zIndex$delegate_1 = mutableFloatStateOf(zIndex);
    this.renderInOverlayDuringTransition$delegate_1 = mutableStateOf(renderInOverlayDuringTransition);
    this.sharedElement$delegate_1 = mutableStateOf(sharedElement);
    this.boundsAnimation$delegate_1 = mutableStateOf(boundsAnimation);
    this.placeHolderSize$delegate_1 = mutableStateOf(placeHolderSize);
    this.renderOnlyWhenVisible$delegate_1 = mutableStateOf(renderOnlyWhenVisible);
    this.overlayClip$delegate_1 = mutableStateOf(overlayClip);
    this.userState$delegate_1 = mutableStateOf(userState);
    this.clipPathInOverlay_1 = null;
    this.parentState_1 = null;
    this.boundsProvider_1 = null;
    this.layer$delegate_1 = mutableStateOf(null);
  }
  protoOf(SharedElementInternalState).set_zIndex_58jhbh_k$ = function (_set____db54di) {
    var tmp0 = this.zIndex$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementInternalState$_get_zIndex_$ref_jdh66v_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('zIndex', 1, tmp, tmp_0, SharedElementInternalState$_set_zIndex_$ref_4b8l1n_0());
    tmp0.set_floatValue_qaujgq_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementInternalState).get_zIndex_mbbc75_k$ = function () {
    var tmp0 = this.zIndex$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementInternalState$_get_zIndex_$ref_jdh66v();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('zIndex', 1, tmp, tmp_0, SharedElementInternalState$_set_zIndex_$ref_4b8l1n());
    return tmp0.get_floatValue_xw60ou_k$();
  };
  protoOf(SharedElementInternalState).set_renderInOverlayDuringTransition_bhc293_k$ = function (_set____db54di) {
    var tmp0 = this.renderInOverlayDuringTransition$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementInternalState$_get_renderInOverlayDuringTransition_$ref_612aby_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('renderInOverlayDuringTransition', 1, tmp, tmp_0, SharedElementInternalState$_set_renderInOverlayDuringTransition_$ref_byuuki_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementInternalState).get_renderInOverlayDuringTransition_4yqpjy_k$ = function () {
    var tmp0 = this.renderInOverlayDuringTransition$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementInternalState$_get_renderInOverlayDuringTransition_$ref_612aby();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('renderInOverlayDuringTransition', 1, tmp, tmp_0, SharedElementInternalState$_set_renderInOverlayDuringTransition_$ref_byuuki());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementInternalState).set_sharedElement_2xbsqt_k$ = function (_set____db54di) {
    var tmp0 = this.sharedElement$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementInternalState$_get_sharedElement_$ref_9roh32_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('sharedElement', 1, tmp, tmp_0, SharedElementInternalState$_set_sharedElement_$ref_by4f7a_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementInternalState).get_sharedElement_xjw30y_k$ = function () {
    var tmp0 = this.sharedElement$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementInternalState$_get_sharedElement_$ref_9roh32();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('sharedElement', 1, tmp, tmp_0, SharedElementInternalState$_set_sharedElement_$ref_by4f7a());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementInternalState).set_boundsAnimation_mkzem3_k$ = function (_set____db54di) {
    var tmp0 = this.boundsAnimation$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementInternalState$_get_boundsAnimation_$ref_dd6cc6_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('boundsAnimation', 1, tmp, tmp_0, SharedElementInternalState$_set_boundsAnimation_$ref_qnwl8i_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementInternalState).get_boundsAnimation_bx9g2i_k$ = function () {
    var tmp0 = this.boundsAnimation$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementInternalState$_get_boundsAnimation_$ref_dd6cc6();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('boundsAnimation', 1, tmp, tmp_0, SharedElementInternalState$_set_boundsAnimation_$ref_qnwl8i());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementInternalState).set_placeHolderSize_357yjd_k$ = function (_set____db54di) {
    var tmp0 = this.placeHolderSize$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementInternalState$_get_placeHolderSize_$ref_jk8ldx_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('placeHolderSize', 1, tmp, tmp_0, SharedElementInternalState$_set_placeHolderSize_$ref_69ichl_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementInternalState).get_placeHolderSize_umjxaj_k$ = function () {
    var tmp0 = this.placeHolderSize$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementInternalState$_get_placeHolderSize_$ref_jk8ldx();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('placeHolderSize', 1, tmp, tmp_0, SharedElementInternalState$_set_placeHolderSize_$ref_69ichl());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementInternalState).set_renderOnlyWhenVisible_f63i0s_k$ = function (_set____db54di) {
    var tmp0 = this.renderOnlyWhenVisible$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementInternalState$_get_renderOnlyWhenVisible_$ref_jjyisj_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('renderOnlyWhenVisible', 1, tmp, tmp_0, SharedElementInternalState$_set_renderOnlyWhenVisible_$ref_lst1qv_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementInternalState).get_renderOnlyWhenVisible_62mrql_k$ = function () {
    var tmp0 = this.renderOnlyWhenVisible$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementInternalState$_get_renderOnlyWhenVisible_$ref_jjyisj();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('renderOnlyWhenVisible', 1, tmp, tmp_0, SharedElementInternalState$_set_renderOnlyWhenVisible_$ref_lst1qv());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementInternalState).set_overlayClip_a8g9zt_k$ = function (_set____db54di) {
    var tmp0 = this.overlayClip$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementInternalState$_get_overlayClip_$ref_frbvp5_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('overlayClip', 1, tmp, tmp_0, SharedElementInternalState$_set_overlayClip_$ref_5nlo6l_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementInternalState).get_overlayClip_75q8uv_k$ = function () {
    var tmp0 = this.overlayClip$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementInternalState$_get_overlayClip_$ref_frbvp5();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('overlayClip', 1, tmp, tmp_0, SharedElementInternalState$_set_overlayClip_$ref_5nlo6l());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementInternalState).set_userState_zl3ka_k$ = function (_set____db54di) {
    var tmp0 = this.userState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementInternalState$_get_userState_$ref_36dya5_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('userState', 1, tmp, tmp_0, SharedElementInternalState$_set_userState_$ref_c1dk87_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementInternalState).get_userState_dy2db1_k$ = function () {
    var tmp0 = this.userState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementInternalState$_get_userState_$ref_36dya5();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('userState', 1, tmp, tmp_0, SharedElementInternalState$_set_userState_$ref_c1dk87());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementInternalState).set_clipPathInOverlay_uhdx0g_k$ = function (_set____db54di) {
    this.clipPathInOverlay_1 = _set____db54di;
  };
  protoOf(SharedElementInternalState).get_clipPathInOverlay_rtg516_k$ = function () {
    return this.clipPathInOverlay_1;
  };
  protoOf(SharedElementInternalState).drawInOverlay_ircoes_k$ = function (drawScope) {
    var tmp0_elvis_lhs = this.get_layer_iujprc_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var layer = tmp;
    if (this.get_shouldRenderInOverlay_7o8ntm_k$() && !(this.get_sharedElement_xjw30y_k$().get_currentBoundsWhenMatched_idiw5_k$() == null)) {
      // Inline function 'kotlin.with' call
      var tmp0_safe_receiver = this.get_sharedElement_xjw30y_k$().get_currentBoundsWhenMatched_idiw5_k$();
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_topLeft_ypvrd5_k$();
      var _destruct__k2r9zo = ensureNotNull(tmp_0 == null ? null : new Offset(tmp_0)).packedValue_1;
      // Inline function 'androidx.compose.ui.geometry.Offset.component1' call
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(_destruct__k2r9zo);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var x = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Offset.component2' call
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(_destruct__k2r9zo);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var y = floatFromBits(bits_0);
      var tmp1_safe_receiver = this.clipPathInOverlay_1;
      var tmp_1;
      if (tmp1_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipPath' call
        var clipOp = Companion_getInstance_7().get_Intersect_gpxc6n_k$();
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        var $this$with = drawScope.get_drawContext_ffwztu_k$();
        var previousSize = $this$with.get_size_cxx1ym_k$();
        $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
        try {
          $this$with.get_transform_px941v_k$().clipPath_tlqunt_k$(tmp1_safe_receiver, clipOp);
          // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
          drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(x, y);
          try {
            drawLayer(drawScope, layer);
          }finally {
            drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-x, -y);
          }
        }finally {
          $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
          $this$with.set_size_6a0e6q_k$(previousSize);
        }
        tmp_1 = Unit_getInstance();
      }
      if (tmp_1 == null) {
        // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
        drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(x, y);
        try {
          drawLayer(drawScope, layer);
        }finally {
          drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-x, -y);
        }
      }
    }
  };
  protoOf(SharedElementInternalState).set_parentState_pcfd0q_k$ = function (_set____db54di) {
    this.parentState_1 = _set____db54di;
  };
  protoOf(SharedElementInternalState).get_parentState_ui10gu_k$ = function () {
    return this.parentState_1;
  };
  protoOf(SharedElementInternalState).get_target_juba8q_k$ = function () {
    return this.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$();
  };
  protoOf(SharedElementInternalState).set_boundsProvider_6jjacs_k$ = function (_set____db54di) {
    this.boundsProvider_1 = _set____db54di;
  };
  protoOf(SharedElementInternalState).get_boundsProvider_o6pxkh_k$ = function () {
    return this.boundsProvider_1;
  };
  protoOf(SharedElementInternalState).set_layer_t4w1t1_k$ = function (_set____db54di) {
    var tmp0 = this.layer$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementInternalState$_get_layer_$ref_erefnc_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('layer', 1, tmp, tmp_0, SharedElementInternalState$_set_layer_$ref_qyv5x8_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementInternalState).get_layer_iujprc_k$ = function () {
    var tmp0 = this.layer$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementInternalState$_get_layer_$ref_erefnc();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('layer', 1, tmp, tmp_0, SharedElementInternalState$_set_layer_$ref_qyv5x8());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementInternalState).get_shouldRenderInOverlay_7o8ntm_k$ = function () {
    return _get_shouldRenderBasedOnTarget__zs0lz(this) && this.get_sharedElement_xjw30y_k$().get_foundMatch_g4mbjg_k$() && this.get_renderInOverlayDuringTransition_4yqpjy_k$() && this.get_sharedElement_xjw30y_k$().scope_1.get_isTransitionActive_t69j02_k$();
  };
  protoOf(SharedElementInternalState).get_shouldRenderInPlace_x76dxs_k$ = function () {
    return !this.get_sharedElement_xjw30y_k$().get_foundMatch_g4mbjg_k$() || (!this.get_shouldRenderInOverlay_7o8ntm_k$() && _get_shouldRenderBasedOnTarget__zs0lz(this));
  };
  protoOf(SharedElementInternalState).onRemembered_68t2e3_k$ = function () {
    this.get_sharedElement_xjw30y_k$().scope_1.onStateAdded_r36lku_k$(this);
    this.get_sharedElement_xjw30y_k$().invalidateTargetBoundsProvider_wcz26a_k$();
  };
  protoOf(SharedElementInternalState).onForgotten_pbqifp_k$ = function () {
    this.get_sharedElement_xjw30y_k$().scope_1.onStateRemoved_npklb2_k$(this);
    this.get_sharedElement_xjw30y_k$().invalidateTargetBoundsProvider_wcz26a_k$();
  };
  protoOf(SharedElementInternalState).onAbandoned_1gx7a3_k$ = function () {
  };
  function _set_foundMatch__r9l3sc($this, _set____db54di) {
    var tmp0 = $this.foundMatch$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElement$_get_foundMatch_$ref_k8erlw_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('foundMatch', 1, tmp, tmp_0, SharedElement$_set_foundMatch_$ref_5aoofk_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set__targetData__mwy1mz($this, _set____db54di) {
    var tmp0 = $this._targetData$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElement$_get__targetData_$ref_fb29uv_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('_targetData', 1, tmp, tmp_0, SharedElement$_set__targetData_$ref_peshdf_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get__targetData__htru09($this) {
    var tmp0 = $this._targetData$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElement$_get__targetData_$ref_fb29uv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('_targetData', 1, tmp, tmp_0, SharedElement$_set__targetData_$ref_peshdf());
    return tmp0.get_value_j01efc_k$();
  }
  function _set_lastTargetBoundsProvider__cio7hy($this, _set____db54di) {
    $this.lastTargetBoundsProvider_1 = _set____db54di;
  }
  function _set_targetBoundsProvider__ob9lds($this, value) {
    if (!equals($this.targetBoundsProvider_1, value)) {
      $this.lastTargetBoundsProvider_1 = $this.targetBoundsProvider_1;
    }
    $this.targetBoundsProvider_1 = value;
  }
  function _set_targetBoundsProviderUpdateRequestId__f69jd1($this, _set____db54di) {
    var tmp0 = $this.targetBoundsProviderUpdateRequestId$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElement$_get_targetBoundsProviderUpdateRequestId_$ref_5l8393_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('targetBoundsProviderUpdateRequestId', 1, tmp, tmp_0, SharedElement$_set_targetBoundsProviderUpdateRequestId_$ref_4573zx_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_targetBoundsProviderUpdateRequestId__l423ll($this) {
    var tmp0 = $this.targetBoundsProviderUpdateRequestId$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElement$_get_targetBoundsProviderUpdateRequestId_$ref_5l8393();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetBoundsProviderUpdateRequestId', 1, tmp, tmp_0, SharedElement$_set_targetBoundsProviderUpdateRequestId_$ref_4573zx());
    return tmp0.get_value_j01efc_k$();
  }
  function _set_lastHandledTargetProviderUpdateRequestId__uvzmqm($this, _set____db54di) {
    $this.lastHandledTargetProviderUpdateRequestId_1 = _set____db54di;
  }
  function _get_lastHandledTargetProviderUpdateRequestId__d9clw2($this) {
    return $this.lastHandledTargetProviderUpdateRequestId_1;
  }
  function updateTargetBoundsProvider($this) {
    if (!(_get_targetBoundsProviderUpdateRequestId__l423ll($this) === $this.lastHandledTargetProviderUpdateRequestId_1)) {
      var tmp0 = $this.states_1;
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable = 0;
        var last = tmp0.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0.get_c1px32_k$(index);
            if (item.get_target_juba8q_k$()) {
              tmp$ret$1 = item;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = null;
      }
      var tmp0_elvis_lhs = tmp$ret$1;
      var tmp1_safe_receiver = tmp0_elvis_lhs == null ? firstOrNull($this.states_1) : tmp0_elvis_lhs;
      var newTargetBoundsProvider = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.boundsProvider_1;
      if (!equals(newTargetBoundsProvider, $this.targetBoundsProvider_1)) {
        $this.lastTargetBoundsProvider_1 = $this.targetBoundsProvider_1;
        _set_targetBoundsProvider__ob9lds($this, newTargetBoundsProvider);
        $this.targetBoundsProviderChanged_1 = true;
      }
      if (newTargetBoundsProvider == null) {
        _set_targetBoundsProvider__ob9lds($this, null);
      }
      $this.lastHandledTargetProviderUpdateRequestId_1 = _get_targetBoundsProviderUpdateRequestId__l423ll($this);
    }
  }
  function obtainBoundsFromLastTarget($this) {
    var tmp;
    var tmp_0;
    if (!($this.lastTargetBoundsProvider_1 == null)) {
      var tmp0 = $this.states_1;
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable = 0;
        var last = tmp0.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0.get_c1px32_k$(index);
            if (equals(item.boundsProvider_1, $this.lastTargetBoundsProvider_1)) {
              tmp$ret$1 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = false;
      }
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp0_safe_receiver = $this.lastTargetBoundsProvider_1;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_lastBoundsInSharedTransitionScope_e0le3l_k$();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function _set_targetBoundsProviderChanged__g4a1m0($this, _set____db54di) {
    $this.targetBoundsProviderChanged_1 = _set____db54di;
  }
  function _get_targetBoundsProviderChanged__b589n0($this) {
    return $this.targetBoundsProviderChanged_1;
  }
  function hasVisibleContent($this) {
    var tmp0 = $this.states_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.get_c1px32_k$(index);
          if (item.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$()) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function _get_updateMatch__8odehh($this) {
    return $this.updateMatch_1;
  }
  function _get_observingVisibilityChange__nyztm2($this) {
    return $this.observingVisibilityChange_1;
  }
  function SharedElement$_get_foundMatch_$ref_k8erlw() {
    return function (p0) {
      return p0.get_foundMatch_g4mbjg_k$();
    };
  }
  function SharedElement$_set_foundMatch_$ref_5aoofk() {
    return function (p0, p1) {
      _set_foundMatch__r9l3sc(p0, p1);
      return Unit_getInstance();
    };
  }
  function SharedElement$_get_foundMatch_$ref_k8erlw_0() {
    return function (p0) {
      return p0.get_foundMatch_g4mbjg_k$();
    };
  }
  function SharedElement$_set_foundMatch_$ref_5aoofk_0() {
    return function (p0, p1) {
      _set_foundMatch__r9l3sc(p0, p1);
      return Unit_getInstance();
    };
  }
  function SharedElement$_get__targetData_$ref_fb29uv() {
    return function (p0) {
      return _get__targetData__htru09(p0);
    };
  }
  function SharedElement$_set__targetData_$ref_peshdf() {
    return function (p0, p1) {
      _set__targetData__mwy1mz(p0, p1);
      return Unit_getInstance();
    };
  }
  function SharedElement$_get__targetData_$ref_fb29uv_0() {
    return function (p0) {
      return _get__targetData__htru09(p0);
    };
  }
  function SharedElement$_set__targetData_$ref_peshdf_0() {
    return function (p0, p1) {
      _set__targetData__mwy1mz(p0, p1);
      return Unit_getInstance();
    };
  }
  function SharedElement$_get_currentBoundsWhenMatched_$ref_lh0nrp() {
    return function (p0) {
      return p0.get_currentBoundsWhenMatched_idiw5_k$();
    };
  }
  function SharedElement$_set_currentBoundsWhenMatched_$ref_snlmq1() {
    return function (p0, p1) {
      p0.set_currentBoundsWhenMatched_megq7r_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElement$_get_currentBoundsWhenMatched_$ref_lh0nrp_0() {
    return function (p0) {
      return p0.get_currentBoundsWhenMatched_idiw5_k$();
    };
  }
  function SharedElement$_set_currentBoundsWhenMatched_$ref_snlmq1_0() {
    return function (p0, p1) {
      p0.set_currentBoundsWhenMatched_megq7r_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedElement$_get_targetBoundsProviderUpdateRequestId_$ref_5l8393() {
    return function (p0) {
      return _get_targetBoundsProviderUpdateRequestId__l423ll(p0);
    };
  }
  function SharedElement$_set_targetBoundsProviderUpdateRequestId_$ref_4573zx() {
    return function (p0, p1) {
      _set_targetBoundsProviderUpdateRequestId__f69jd1(p0, p1);
      return Unit_getInstance();
    };
  }
  function SharedElement$_get_targetBoundsProviderUpdateRequestId_$ref_5l8393_0() {
    return function (p0) {
      return _get_targetBoundsProviderUpdateRequestId__l423ll(p0);
    };
  }
  function SharedElement$_set_targetBoundsProviderUpdateRequestId_$ref_4573zx_0() {
    return function (p0, p1) {
      _set_targetBoundsProviderUpdateRequestId__f69jd1(p0, p1);
      return Unit_getInstance();
    };
  }
  function SharedElement$updateMatch$lambda(this$0) {
    return function (it) {
      this$0.updateMatch_3nxlck_k$();
      return Unit_getInstance();
    };
  }
  function SharedElement$observingVisibilityChange$lambda(this$0) {
    return function () {
      hasVisibleContent(this$0);
      return Unit_getInstance();
    };
  }
  function SharedElement(key, scope) {
    this.key_1 = key;
    this.scope_1 = scope;
    this.foundMatch$delegate_1 = mutableStateOf(false);
    this._targetData$delegate_1 = mutableStateOf(null);
    this.currentBoundsWhenMatched$delegate_1 = mutableStateOf(null);
    this.lastTargetBoundsProvider_1 = null;
    this.targetBoundsProvider_1 = null;
    this.targetBoundsProviderUpdateRequestId$delegate_1 = mutableStateOf(0);
    this.lastHandledTargetProviderUpdateRequestId_1 = 0;
    this.targetBoundsProviderChanged_1 = false;
    this.states_1 = mutableStateListOf();
    var tmp = this;
    tmp.updateMatch_1 = SharedElement$updateMatch$lambda(this);
    var tmp_0 = this;
    tmp_0.observingVisibilityChange_1 = SharedElement$observingVisibilityChange$lambda(this);
  }
  protoOf(SharedElement).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(SharedElement).get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  protoOf(SharedElement).isAnimating_x1kvqk_k$ = function () {
    var tmp;
    var tmp0 = this.states_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.get_c1px32_k$(index);
          if (item.get_boundsAnimation_bx9g2i_k$().get_isRunning_okmtn0_k$()) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (tmp$ret$1) {
      tmp = this.get_foundMatch_g4mbjg_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SharedElement).updateMatch_3nxlck_k$ = function () {
    var hasVisibleContent_0 = hasVisibleContent(this);
    if (this.states_1.get_size_woubt6_k$() > 1 && hasVisibleContent_0) {
      _set_foundMatch__r9l3sc(this, true);
    } else if (this.scope_1.get_isTransitionActive_t69j02_k$()) {
      if (!hasVisibleContent_0) {
        _set_foundMatch__r9l3sc(this, false);
      }
    } else {
      _set_foundMatch__r9l3sc(this, false);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.states_1.isEmpty_y1axqb_k$()) {
      this.scope_1.observeReads_4r22an_k$(this, this.updateMatch_1, this.observingVisibilityChange_1);
    }
    this.invalidateTargetBoundsProvider_wcz26a_k$();
  };
  protoOf(SharedElement).get_foundMatch_g4mbjg_k$ = function () {
    var tmp0 = this.foundMatch$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElement$_get_foundMatch_$ref_k8erlw();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('foundMatch', 1, tmp, tmp_0, SharedElement$_set_foundMatch_$ref_5aoofk());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElement).set_targetData_d7i2d5_k$ = function (value) {
    if (this.get_foundMatch_g4mbjg_k$()) {
      _set__targetData__mwy1mz(this, value);
    }
  };
  protoOf(SharedElement).get_targetData_z66van_k$ = function () {
    return this.get_foundMatch_g4mbjg_k$() ? _get__targetData__htru09(this) : null;
  };
  protoOf(SharedElement).tryInitializingCurrentBounds_hhp1hi_k$ = function () {
    if (!this.get_foundMatch_g4mbjg_k$())
      return null;
    updateTargetBoundsProvider(this);
    if (this.get_currentBoundsWhenMatched_idiw5_k$() == null) {
      this.set_currentBoundsWhenMatched_megq7r_k$(obtainBoundsFromLastTarget(this));
    }
    return this.get_currentBoundsWhenMatched_idiw5_k$();
  };
  protoOf(SharedElement).set_currentBoundsWhenMatched_megq7r_k$ = function (_set____db54di) {
    var tmp0 = this.currentBoundsWhenMatched$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElement$_get_currentBoundsWhenMatched_$ref_lh0nrp_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('currentBoundsWhenMatched', 1, tmp, tmp_0, SharedElement$_set_currentBoundsWhenMatched_$ref_snlmq1_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElement).get_currentBoundsWhenMatched_idiw5_k$ = function () {
    var tmp0 = this.currentBoundsWhenMatched$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElement$_get_currentBoundsWhenMatched_$ref_lh0nrp();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('currentBoundsWhenMatched', 1, tmp, tmp_0, SharedElement$_set_currentBoundsWhenMatched_$ref_snlmq1());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElement).get_lastTargetBoundsProvider_nado0t_k$ = function () {
    return this.lastTargetBoundsProvider_1;
  };
  protoOf(SharedElement).get_targetBoundsProvider_t1s2lp_k$ = function () {
    return this.targetBoundsProvider_1;
  };
  protoOf(SharedElement).onLookaheadPlaced_2odex4_k$ = function (placementScope, state) {
    updateTargetBoundsProvider(this);
    if (this.get_foundMatch_g4mbjg_k$() && state.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$()) {
      // Inline function 'kotlin.with' call
      var tmp0_safe_receiver = placementScope.get_coordinates_q6f2pa_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        var lookaheadSize = toSize(tmp0_safe_receiver.get_size_kd98kr_k$());
        // Inline function 'kotlin.with' call
        var topLeft = state.get_sharedElement_xjw30y_k$().scope_1.localLookaheadPositionOf$default_10xwp7_k$(state.get_sharedElement_xjw30y_k$().scope_1.get_lookaheadRoot_u3i6mw_k$(), tmp0_safe_receiver);
        // Inline function 'kotlin.with' call
        state.get_sharedElement_xjw30y_k$().scope_1;
        var structuralOffset = state.get_sharedElement_xjw30y_k$().scope_1.get_lookaheadRoot_u3i6mw_k$().localPositionOf$default_f8vt4q_k$(tmp0_safe_receiver, VOID, false);
        var tmp0_elvis_lhs = this.get_targetData_z66van_k$();
        var targetData = tmp0_elvis_lhs == null ? new TargetData(lookaheadSize, Offset__minus_impl_hoj2c0(topLeft, structuralOffset), structuralOffset) : tmp0_elvis_lhs;
        if (!equals(targetData.get_targetStructuralOffset_diba68_k$(), structuralOffset) || !equals(targetData.get_size_cxx1ym_k$(), lookaheadSize) || this.targetBoundsProviderChanged_1) {
          targetData.set_size_6a0e6q_k$(lookaheadSize);
          targetData.set_targetStructuralOffset_prn3mk_k$(structuralOffset);
          if (this.targetBoundsProviderChanged_1) {
            targetData.set_initialMfrOffset_zdul1n_k$(Offset__minus_impl_hoj2c0(Offset__minus_impl_hoj2c0(topLeft, structuralOffset), Offset__minus_impl_hoj2c0(targetData.get_currentMfrOffset_68hisy_k$(), targetData.get_initialMfrOffset_6o7ny1_k$())));
          }
          if (this.get_currentBoundsWhenMatched_idiw5_k$() == null) {
            var tmp1_elvis_lhs = obtainBoundsFromLastTarget(this);
            this.set_currentBoundsWhenMatched_megq7r_k$(tmp1_elvis_lhs == null ? Rect(topLeft, lookaheadSize) : tmp1_elvis_lhs);
          }
        }
        targetData.set_currentMfrOffset_k9brqi_k$(Offset__minus_impl_hoj2c0(topLeft, structuralOffset));
        this.set_targetData_d7i2d5_k$(targetData);
        this.targetBoundsProviderChanged_1 = false;
        tmp = Unit_getInstance();
      }
    }
  };
  protoOf(SharedElement).get_states_jnf5zf_k$ = function () {
    return this.states_1;
  };
  protoOf(SharedElement).invalidateTargetBoundsProvider_wcz26a_k$ = function () {
    var tmp0 = this.states_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (element.get_target_juba8q_k$()) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var target = tmp$ret$1;
    if (target == null && this.targetBoundsProvider_1 == null)
      return Unit_getInstance();
    if (equals(target == null ? null : target.boundsProvider_1, this.targetBoundsProvider_1))
      return Unit_getInstance();
    _set_targetBoundsProviderUpdateRequestId__f69jd1(this, this.lastHandledTargetProviderUpdateRequestId_1 + 1 | 0);
  };
  protoOf(SharedElement).onSharedTransitionFinished_4wcl9h_k$ = function () {
    _set_foundMatch__r9l3sc(this, this.states_1.get_size_woubt6_k$() > 1 && hasVisibleContent(this));
    this.lastTargetBoundsProvider_1 = null;
    _set__targetData__mwy1mz(this, null);
  };
  protoOf(SharedElement).addState_rbuktl_k$ = function (sharedElementState) {
    this.states_1.add_wl2rvy_k$(sharedElementState);
    this.scope_1.observeReads_4r22an_k$(this, this.updateMatch_1, this.observingVisibilityChange_1);
  };
  protoOf(SharedElement).removeState_35kh4q_k$ = function (sharedElementState) {
    this.states_1.remove_an8aut_k$(sharedElementState);
    if (this.states_1.isEmpty_y1axqb_k$()) {
      this.updateMatch_3nxlck_k$();
      this.scope_1.clearObservation_wj64be_k$(this);
    } else {
      this.scope_1.observeReads_4r22an_k$(this, this.updateMatch_1, this.observingVisibilityChange_1);
    }
  };
  function BoundsProvider() {
  }
  function TargetData$_get_size_$ref_cdnorm() {
    return function (p0) {
      return new Size(p0.get_size_cxx1ym_k$());
    };
  }
  function TargetData$_set_size_$ref_p6k08e() {
    return function (p0, p1) {
      p0.set_size_6a0e6q_k$(p1.packedValue_1);
      return Unit_getInstance();
    };
  }
  function TargetData$_get_size_$ref_cdnorm_0() {
    return function (p0) {
      return new Size(p0.get_size_cxx1ym_k$());
    };
  }
  function TargetData$_set_size_$ref_p6k08e_0() {
    return function (p0, p1) {
      p0.set_size_6a0e6q_k$(p1.packedValue_1);
      return Unit_getInstance();
    };
  }
  function TargetData$_get_initialMfrOffset_$ref_3i9w1n() {
    return function (p0) {
      return new Offset(p0.get_initialMfrOffset_6o7ny1_k$());
    };
  }
  function TargetData$_set_initialMfrOffset_$ref_hgck1z() {
    return function (p0, p1) {
      p0.set_initialMfrOffset_zdul1n_k$(p1.packedValue_1);
      return Unit_getInstance();
    };
  }
  function TargetData$_get_initialMfrOffset_$ref_3i9w1n_0() {
    return function (p0) {
      return new Offset(p0.get_initialMfrOffset_6o7ny1_k$());
    };
  }
  function TargetData$_set_initialMfrOffset_$ref_hgck1z_0() {
    return function (p0, p1) {
      p0.set_initialMfrOffset_zdul1n_k$(p1.packedValue_1);
      return Unit_getInstance();
    };
  }
  function TargetData$_get_targetStructuralOffset_$ref_w67msi() {
    return function (p0) {
      return new Offset(p0.get_targetStructuralOffset_diba68_k$());
    };
  }
  function TargetData$_set_targetStructuralOffset_$ref_urdwdq() {
    return function (p0, p1) {
      p0.set_targetStructuralOffset_prn3mk_k$(p1.packedValue_1);
      return Unit_getInstance();
    };
  }
  function TargetData$_get_targetStructuralOffset_$ref_w67msi_0() {
    return function (p0) {
      return new Offset(p0.get_targetStructuralOffset_diba68_k$());
    };
  }
  function TargetData$_set_targetStructuralOffset_$ref_urdwdq_0() {
    return function (p0, p1) {
      p0.set_targetStructuralOffset_prn3mk_k$(p1.packedValue_1);
      return Unit_getInstance();
    };
  }
  function TargetData$_get_currentMfrOffset_$ref_f9yhhs() {
    return function (p0) {
      return new Offset(p0.get_currentMfrOffset_68hisy_k$());
    };
  }
  function TargetData$_set_currentMfrOffset_$ref_1bvthg() {
    return function (p0, p1) {
      p0.set_currentMfrOffset_k9brqi_k$(p1.packedValue_1);
      return Unit_getInstance();
    };
  }
  function TargetData$_get_currentMfrOffset_$ref_f9yhhs_0() {
    return function (p0) {
      return new Offset(p0.get_currentMfrOffset_68hisy_k$());
    };
  }
  function TargetData$_set_currentMfrOffset_$ref_1bvthg_0() {
    return function (p0, p1) {
      p0.set_currentMfrOffset_k9brqi_k$(p1.packedValue_1);
      return Unit_getInstance();
    };
  }
  function TargetData(size, initialMfrOffset, targetStructuralOffset) {
    this.size$delegate_1 = mutableStateOf(new Size(size));
    this.initialMfrOffset$delegate_1 = mutableStateOf(new Offset(initialMfrOffset));
    this.targetStructuralOffset$delegate_1 = mutableStateOf(new Offset(targetStructuralOffset));
    this.currentMfrOffset$delegate_1 = mutableStateOf(new Offset(initialMfrOffset));
  }
  protoOf(TargetData).set_size_6a0e6q_k$ = function (_set____db54di) {
    var tmp0 = this.size$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_size_$ref_cdnorm_0();
    getPropertyCallableRef('size', 1, tmp, tmp_0, TargetData$_set_size_$ref_p6k08e_0());
    // Inline function 'androidx.compose.runtime.setValue' call
    var value = new Size(_set____db54di);
    tmp0.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  };
  protoOf(TargetData).get_size_cxx1ym_k$ = function () {
    var tmp0 = this.size$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_size_$ref_cdnorm();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('size', 1, tmp, tmp_0, TargetData$_set_size_$ref_p6k08e());
    return tmp0.get_value_j01efc_k$().packedValue_1;
  };
  protoOf(TargetData).set_initialMfrOffset_zdul1n_k$ = function (_set____db54di) {
    var tmp0 = this.initialMfrOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_initialMfrOffset_$ref_3i9w1n_0();
    getPropertyCallableRef('initialMfrOffset', 1, tmp, tmp_0, TargetData$_set_initialMfrOffset_$ref_hgck1z_0());
    // Inline function 'androidx.compose.runtime.setValue' call
    var value = new Offset(_set____db54di);
    tmp0.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  };
  protoOf(TargetData).get_initialMfrOffset_6o7ny1_k$ = function () {
    var tmp0 = this.initialMfrOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_initialMfrOffset_$ref_3i9w1n();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('initialMfrOffset', 1, tmp, tmp_0, TargetData$_set_initialMfrOffset_$ref_hgck1z());
    return tmp0.get_value_j01efc_k$().packedValue_1;
  };
  protoOf(TargetData).set_targetStructuralOffset_prn3mk_k$ = function (_set____db54di) {
    var tmp0 = this.targetStructuralOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_targetStructuralOffset_$ref_w67msi_0();
    getPropertyCallableRef('targetStructuralOffset', 1, tmp, tmp_0, TargetData$_set_targetStructuralOffset_$ref_urdwdq_0());
    // Inline function 'androidx.compose.runtime.setValue' call
    var value = new Offset(_set____db54di);
    tmp0.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  };
  protoOf(TargetData).get_targetStructuralOffset_diba68_k$ = function () {
    var tmp0 = this.targetStructuralOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_targetStructuralOffset_$ref_w67msi();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetStructuralOffset', 1, tmp, tmp_0, TargetData$_set_targetStructuralOffset_$ref_urdwdq());
    return tmp0.get_value_j01efc_k$().packedValue_1;
  };
  protoOf(TargetData).set_currentMfrOffset_k9brqi_k$ = function (_set____db54di) {
    var tmp0 = this.currentMfrOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_currentMfrOffset_$ref_f9yhhs_0();
    getPropertyCallableRef('currentMfrOffset', 1, tmp, tmp_0, TargetData$_set_currentMfrOffset_$ref_1bvthg_0());
    // Inline function 'androidx.compose.runtime.setValue' call
    var value = new Offset(_set____db54di);
    tmp0.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  };
  protoOf(TargetData).get_currentMfrOffset_68hisy_k$ = function () {
    var tmp0 = this.currentMfrOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_currentMfrOffset_$ref_f9yhhs();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('currentMfrOffset', 1, tmp, tmp_0, TargetData$_set_currentMfrOffset_$ref_1bvthg());
    return tmp0.get_value_j01efc_k$().packedValue_1;
  };
  function get_targetBounds(_this__u8e3s4) {
    return Rect(Offset__plus_impl_c78cg0(_this__u8e3s4.get_initialMfrOffset_6o7ny1_k$(), _this__u8e3s4.get_targetStructuralOffset_diba68_k$()), _this__u8e3s4.get_size_cxx1ym_k$());
  }
  function calculateOffsetFromDirectManipulation(_this__u8e3s4, animatedBounds) {
    return Offset__plus_impl_c78cg0(Offset__minus_impl_hoj2c0(animatedBounds.get_topLeft_ypvrd5_k$(), _this__u8e3s4.get_initialMfrOffset_6o7ny1_k$()), _this__u8e3s4.get_currentMfrOffset_68hisy_k$());
  }
  function get_DefaultSpring() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return DefaultSpring;
  }
  var DefaultSpring;
  function get_ParentClip() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return ParentClip;
  }
  var ParentClip;
  function get_DefaultClipInOverlayDuringTransition() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return DefaultClipInOverlayDuringTransition;
  }
  var DefaultClipInOverlayDuringTransition;
  function get_DefaultBoundsTransform_0() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return DefaultBoundsTransform_0;
  }
  var DefaultBoundsTransform_0;
  function get_cachedScaleToBoundsImplMap() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return cachedScaleToBoundsImplMap;
  }
  var cachedScaleToBoundsImplMap;
  var androidx_compose_animation_SharedTransitionScope_SharedContentState$stable;
  var androidx_compose_animation_SharedTransitionScopeImpl$stable;
  var androidx_compose_animation_ScaleToBoundsImpl$stable;
  function BoundsTransform() {
  }
  function LayerRenderer() {
  }
  function sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0).calculateSize_sx87iu_k$ = function (contentSize, animatedSize) {
    return this.function_1(new IntSize(contentSize), new IntSize(animatedSize)).packedValue_1;
  };
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, PlaceHolderSize) : false) {
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
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0_0).calculateSize_sx87iu_k$ = function (contentSize, animatedSize) {
    return this.function_1(new IntSize(contentSize), new IntSize(animatedSize)).packedValue_1;
  };
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, PlaceHolderSize) : false) {
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
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function SharedTransitionScope$PlaceHolderSize$Companion$animatedSize$lambda(_unused_var__etf5q3, animatedSize) {
    return animatedSize;
  }
  function SharedTransitionScope$PlaceHolderSize$Companion$contentSize$lambda(contentSize, _unused_var__etf5q3) {
    return contentSize;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp_0 = SharedTransitionScope$PlaceHolderSize$Companion$animatedSize$lambda;
    tmp.animatedSize_1 = new sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0(tmp_0);
    var tmp_1 = this;
    var tmp_2 = SharedTransitionScope$PlaceHolderSize$Companion$contentSize$lambda;
    tmp_1.contentSize_1 = new sam$androidx_compose_animation_SharedTransitionScope_PlaceHolderSize$0_0(tmp_2);
  }
  protoOf(Companion_1).get_animatedSize_lvs1ot_k$ = function () {
    return this.animatedSize_1;
  };
  protoOf(Companion_1).get_contentSize_7ghui9_k$ = function () {
    return this.contentSize_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_14() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.RemeasureToBounds_1 = RemeasureImpl_getInstance();
  }
  protoOf(Companion_2).get_RemeasureToBounds_vc94xe_k$ = function () {
    return this.RemeasureToBounds_1;
  };
  protoOf(Companion_2).ScaleToBounds_s3l72r_k$ = function (contentScale, alignment) {
    return ScaleToBoundsCached(contentScale, alignment);
  };
  protoOf(Companion_2).ScaleToBounds$default_1ykj6e_k$ = function (contentScale, alignment, $super) {
    contentScale = contentScale === VOID ? Companion_getInstance_10().get_FillWidth_n2o75m_k$() : contentScale;
    alignment = alignment === VOID ? Companion_getInstance_1().get_Center_3arb0i_k$() : alignment;
    return $super === VOID ? this.ScaleToBounds_s3l72r_k$(contentScale, alignment) : $super.ScaleToBounds_s3l72r_k$.call(this, contentScale, alignment);
  };
  var Companion_instance_2;
  function Companion_getInstance_15() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function _get_nonNullInternalState__g66s5n($this) {
    var tmp0 = $this.get_internalState_d3bhs8_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Error: SharedContentState has not been added to a sharedElement/sharedBoundsmodifier yet. Therefore the internal state has not bee initialized.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
  function SharedTransitionScope$SharedContentState$_get_internalState_$ref_b9767j() {
    return function (p0) {
      return p0.get_internalState_d3bhs8_k$();
    };
  }
  function SharedTransitionScope$SharedContentState$_set_internalState_$ref_wz02hv() {
    return function (p0, p1) {
      p0.set_internalState_gjuaik_k$(p1);
      return Unit_getInstance();
    };
  }
  function SharedTransitionScope$SharedContentState$_get_internalState_$ref_b9767j_0() {
    return function (p0) {
      return p0.get_internalState_d3bhs8_k$();
    };
  }
  function SharedTransitionScope$SharedContentState$_set_internalState_$ref_wz02hv_0() {
    return function (p0, p1) {
      p0.set_internalState_gjuaik_k$(p1);
      return Unit_getInstance();
    };
  }
  function PlaceHolderSize() {
  }
  function ResizeMode() {
  }
  function OverlayClip() {
  }
  function SharedContentState(key) {
    this.key_1 = key;
    this.internalState$delegate_1 = mutableStateOf(null);
  }
  protoOf(SharedContentState).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(SharedContentState).get_isMatchFound_44sa8_k$ = function () {
    var tmp0_safe_receiver = this.get_internalState_d3bhs8_k$();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_sharedElement_xjw30y_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_foundMatch_g4mbjg_k$();
    return tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
  };
  protoOf(SharedContentState).get_clipPathInOverlay_c5z0b7_k$ = function () {
    return _get_nonNullInternalState__g66s5n(this).get_clipPathInOverlay_rtg516_k$();
  };
  protoOf(SharedContentState).get_parentSharedContentState_agqmhc_k$ = function () {
    var tmp0_safe_receiver = _get_nonNullInternalState__g66s5n(this).get_parentState_ui10gu_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_userState_dy2db1_k$();
  };
  protoOf(SharedContentState).set_internalState_gjuaik_k$ = function (_set____db54di) {
    var tmp0 = this.internalState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionScope$SharedContentState$_get_internalState_$ref_b9767j_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('internalState', 1, tmp, tmp_0, SharedTransitionScope$SharedContentState$_set_internalState_$ref_wz02hv_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedContentState).get_internalState_d3bhs8_k$ = function () {
    var tmp0 = this.internalState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionScope$SharedContentState$_get_internalState_$ref_b9767j();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('internalState', 1, tmp, tmp_0, SharedTransitionScope$SharedContentState$_set_internalState_$ref_wz02hv());
    return tmp0.get_value_j01efc_k$();
  };
  function SharedTransitionScope$renderInSharedTransitionScopeOverlay$lambda(this$0) {
    return function () {
      return this$0.get_isTransitionActive_t69j02_k$();
    };
  }
  function SharedTransitionScope() {
  }
  function _get_SharedTransitionObserver__33utcr($this) {
    var tmp0 = $this.SharedTransitionObserver$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('SharedTransitionObserver', 1, tmp, SharedTransitionScopeImpl$Companion$_get_SharedTransitionObserver_$ref_7wq4wk(), null);
    return tmp0.get_value_j01efc_k$();
  }
  function SharedTransitionScopeImpl$Companion$SharedTransitionObserver$delegate$lambda() {
    // Inline function 'kotlin.also' call
    var this_0 = new SnapshotStateObserver(SharedTransitionScopeImpl$Companion$SharedTransitionObserver$delegate$lambda$lambda);
    this_0.start_fyv442_k$();
    return this_0;
  }
  function SharedTransitionScopeImpl$Companion$SharedTransitionObserver$delegate$lambda$lambda(it) {
    it();
    return Unit_getInstance();
  }
  function SharedTransitionScopeImpl$Companion$_get_SharedTransitionObserver_$ref_7wq4wk() {
    return function (p0) {
      return _get_SharedTransitionObserver__33utcr(p0);
    };
  }
  function _get_path__dbvv7q($this) {
    return $this.path_1;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.SharedTransitionObserver$delegate_1 = lazy(tmp_0, SharedTransitionScopeImpl$Companion$SharedTransitionObserver$delegate$lambda);
  }
  var Companion_instance_3;
  function Companion_getInstance_16() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function _set_disposed__tklm7i($this, _set____db54di) {
    $this.disposed_1 = _set____db54di;
  }
  function _set_isTransitionActive__umwr0u($this, _set____db54di) {
    var tmp0 = $this.isTransitionActive$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionScopeImpl$_get_isTransitionActive_$ref_59dojl_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isTransitionActive', 1, tmp, tmp_0, SharedTransitionScopeImpl$_set_isTransitionActive_$ref_rih4z9_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_observeAnimatingBlock__7ka0gq($this) {
    return $this.observeAnimatingBlock_1;
  }
  function _get_updateTransitionActiveness__8rei28($this) {
    return $this.updateTransitionActiveness_1;
  }
  function updateTransitionActiveness($this) {
    var tmp0 = $this.sharedElements_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.any' call
      // Inline function 'androidx.collection.ScatterMap.forEach' call
      var k = tmp0.get_keys_8zdyhr_k$();
      var v = tmp0.get_values_y8hjwv_k$();
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m = tmp0.get_metadata_ha42hw_k$();
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                    (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                    var tmp_0 = v[index];
                    if (((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).isAnimating_x1kvqk_k$()) {
                      tmp$ret$3 = true;
                      break $l$block;
                    }
                  }
                  slot = shiftRight(slot, 8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp$ret$3 = false;
    }
    var isActive = tmp$ret$3;
    if (!(isActive === $this.get_isTransitionActive_t69j02_k$())) {
      _set_isTransitionActive__umwr0u($this, isActive);
      if (!isActive) {
        // Inline function 'androidx.collection.ScatterMap.forEach' call
        var this_1 = $this.sharedElements_1;
        var k_0 = this_1.get_keys_8zdyhr_k$();
        var v_0 = this_1.get_values_y8hjwv_k$();
        $l$block_1: {
          // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
          var m_0 = this_1.get_metadata_ha42hw_k$();
          var lastIndex_0 = m_0.length - 2 | 0;
          var inductionVariable_1 = 0;
          if (inductionVariable_1 <= lastIndex_0)
            do {
              var i_0 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              var slot_0 = m_0[i_0];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_2 = slot_0;
              var tmp$ret$8 = bitwiseAnd(bitwiseAnd(this_2, shiftLeft(invert(this_2), 7)), new Long(-2139062144, -2139062144));
              if (!equalsLong(tmp$ret$8, new Long(-2139062144, -2139062144))) {
                var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                var inductionVariable_2 = 0;
                if (inductionVariable_2 < bitCount_0)
                  do {
                    var j_0 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    var value_0 = bitwiseAnd(slot_0, new Long(255, 0));
                    if (compare(value_0, new Long(128, 0)) < 0) {
                      var index_0 = (i_0 << 3) + j_0 | 0;
                      var tmp_1 = k_0[index_0];
                      (tmp_1 == null ? true : !(tmp_1 == null)) || THROW_CCE();
                      var tmp_2 = v_0[index_0];
                      ((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()).onSharedTransitionFinished_4wcl9h_k$();
                    }
                    slot_0 = shiftRight(slot_0, 8);
                  }
                   while (inductionVariable_2 < bitCount_0);
                if (!(bitCount_0 === 8)) {
                  break $l$block_1;
                }
              }
            }
             while (!(i_0 === lastIndex_0));
        }
      }
    }
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_3 = $this.sharedElements_1;
    var k_1 = this_3.get_keys_8zdyhr_k$();
    var v_1 = this_3.get_values_y8hjwv_k$();
    $l$block_2: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m_1 = this_3.get_metadata_ha42hw_k$();
      var lastIndex_1 = m_1.length - 2 | 0;
      var inductionVariable_3 = 0;
      if (inductionVariable_3 <= lastIndex_1)
        do {
          var i_1 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var slot_1 = m_1[i_1];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_4 = slot_1;
          var tmp$ret$14 = bitwiseAnd(bitwiseAnd(this_4, shiftLeft(invert(this_4), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$14, new Long(-2139062144, -2139062144))) {
            var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
            var inductionVariable_4 = 0;
            if (inductionVariable_4 < bitCount_1)
              do {
                var j_1 = inductionVariable_4;
                inductionVariable_4 = inductionVariable_4 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value_1 = bitwiseAnd(slot_1, new Long(255, 0));
                if (compare(value_1, new Long(128, 0)) < 0) {
                  var index_1 = (i_1 << 3) + j_1 | 0;
                  var tmp_3 = k_1[index_1];
                  (tmp_3 == null ? true : !(tmp_3 == null)) || THROW_CCE();
                  var tmp_4 = v_1[index_1];
                  ((tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE()).updateMatch_3nxlck_k$();
                }
                slot_1 = shiftRight(slot_1, 8);
              }
               while (inductionVariable_4 < bitCount_1);
            if (!(bitCount_1 === 8)) {
              break $l$block_2;
            }
          }
        }
         while (!(i_1 === lastIndex_1));
    }
    observeIsAnimating($this);
  }
  function sharedBoundsImpl($this, _this__u8e3s4, sharedContentState, parentTransition, visible, boundsTransform, placeHolderSize, renderOnlyWhenVisible, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    return composed(_this__u8e3s4, VOID, SharedTransitionScopeImpl$sharedBoundsImpl$lambda(sharedContentState, $this, parentTransition, visible, boundsTransform, placeHolderSize, renderOnlyWhenVisible, clipInOverlayDuringTransition, zIndexInOverlay, renderInOverlayDuringTransition));
  }
  function sharedBoundsImpl$default($this, _this__u8e3s4, sharedContentState, parentTransition, visible, boundsTransform, placeHolderSize, renderOnlyWhenVisible, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    placeHolderSize = placeHolderSize === VOID ? Companion_getInstance_14().contentSize_1 : placeHolderSize;
    return sharedBoundsImpl($this, _this__u8e3s4, sharedContentState, parentTransition, visible, boundsTransform, placeHolderSize, renderOnlyWhenVisible, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  }
  function rememberSharedElementState($this, sharedElement, boundsAnimation, placeHolderSize, renderOnlyWhenVisible, sharedContentState, clipInOverlayDuringTransition, zIndexInOverlay, renderInOverlayDuringTransition, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 2066772852, 'C(rememberSharedElementState)P(6!1,2,4,5!1,7)992@55015L512:SharedTransitionScope.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(2066772852, $changed, -1, 'androidx.compose.animation.SharedTransitionScopeImpl.rememberSharedElementState (SharedTransitionScope.kt:992)');
    }
    sourceInformationMarkerStart($composer_0, 1893834740, 'CC(remember):SharedTransitionScope.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
      var value = new SharedElementInternalState(sharedElement, boundsAnimation, placeHolderSize, renderOnlyWhenVisible, clipInOverlayDuringTransition, renderInOverlayDuringTransition, sharedContentState, zIndexInOverlay);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    // Inline function 'kotlin.also' call
    sharedContentState.set_internalState_gjuaik_k$(tmp1_group);
    tmp1_group.set_sharedElement_2xbsqt_k$(sharedElement);
    tmp1_group.set_renderOnlyWhenVisible_f63i0s_k$(renderOnlyWhenVisible);
    tmp1_group.set_boundsAnimation_mkzem3_k$(boundsAnimation);
    tmp1_group.set_placeHolderSize_357yjd_k$(placeHolderSize);
    tmp1_group.set_overlayClip_a8g9zt_k$(clipInOverlayDuringTransition);
    tmp1_group.set_zIndex_58jhbh_k$(zIndexInOverlay);
    tmp1_group.set_renderInOverlayDuringTransition_bhc293_k$(renderInOverlayDuringTransition);
    tmp1_group.set_userState_zl3ka_k$(sharedContentState);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function _get_renderers__1vdp6n($this) {
    return $this.renderers_1;
  }
  function _get_sharedElements__kjeuj3($this) {
    return $this.sharedElements_1;
  }
  function sharedElementsFor($this, key) {
    var tmp0_elvis_lhs = $this.sharedElements_1.get_wei43m_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new SharedElement(key, $this);
      $this.sharedElements_1.set_b9w55f_k$(key, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function observeIsAnimating($this) {
    if (!$this.disposed_1) {
      _get_SharedTransitionObserver__33utcr(Companion_getInstance_16()).observeReads_r9h55h_k$($this, $this.updateTransitionActiveness_1, $this.observeAnimatingBlock_1);
    }
  }
  function ShapeBasedClip(clipShape) {
    this.clipShape_1 = clipShape;
    this.path_1 = Path();
  }
  protoOf(ShapeBasedClip).get_clipShape_i6onlk_k$ = function () {
    return this.clipShape_1;
  };
  protoOf(ShapeBasedClip).getClipPath_nnv5ej_k$ = function (sharedContentState, bounds, layoutDirection, density) {
    this.path_1.reset_5u6xz3_k$();
    addOutline(this.path_1, this.clipShape_1.createOutline_nnkieo_k$(bounds.get_size_cxx1ym_k$(), layoutDirection, density));
    this.path_1.translate_nzlwb0_k$(bounds.get_topLeft_ypvrd5_k$());
    return this.path_1;
  };
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function SharedTransitionScopeImpl$_get_isTransitionActive_$ref_59dojl() {
    return function (p0) {
      return p0.get_isTransitionActive_t69j02_k$();
    };
  }
  function SharedTransitionScopeImpl$_set_isTransitionActive_$ref_rih4z9() {
    return function (p0, p1) {
      _set_isTransitionActive__umwr0u(p0, p1);
      return Unit_getInstance();
    };
  }
  function SharedTransitionScopeImpl$_get_isTransitionActive_$ref_59dojl_0() {
    return function (p0) {
      return p0.get_isTransitionActive_t69j02_k$();
    };
  }
  function SharedTransitionScopeImpl$_set_isTransitionActive_$ref_rih4z9_0() {
    return function (p0, p1) {
      _set_isTransitionActive__umwr0u(p0, p1);
      return Unit_getInstance();
    };
  }
  function SharedTransitionScopeImpl$sharedElement$lambda(it) {
    return it.equals(EnterExitState_Visible_getInstance());
  }
  function SharedTransitionScopeImpl$sharedBounds$lambda(it) {
    return it.equals(EnterExitState_Visible_getInstance());
  }
  function SharedTransitionScopeImpl$sharedBounds$lambda$lambda($sharedContentState) {
    return function () {
      return $sharedContentState.get_isMatchFound_44sa8_k$();
    };
  }
  function SharedTransitionScopeImpl$sharedBounds$lambda$lambda_0($sharedContentState) {
    return function () {
      return $sharedContentState.get_isMatchFound_44sa8_k$();
    };
  }
  function SharedTransitionScopeImpl$sharedBounds$lambda_0($animatedVisibilityScope, $enter, $exit, $sharedContentState, $resizeMode) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceGroup_5hh8aj_k$(-419341573);
      sourceInformation($composer_0, 'C745@41618L35,737@41095L657:SharedTransitionScope.kt#xbi5r1');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-419341573, $changed, -1, 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBounds.<anonymous> (SharedTransitionScope.kt:736)');
        tmp = Unit_getInstance();
      }
      var tmp_0 = $animatedVisibilityScope.get_transition_mcca1q_k$();
      sourceInformationMarkerStart($composer_0, 739693310, 'CC(remember):SharedTransitionScope.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$($sharedContentState);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        var value = SharedTransitionScopeImpl$sharedBounds$lambda$lambda($sharedContentState);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_3 = createModifier(tmp_0, $enter, $exit, tmp1_group, 'enter/exit for ' + toString_0($sharedContentState.key_1), $composer_0, 0, 0);
      var tmp_4;
      if ($resizeMode instanceof ScaleToBoundsImpl) {
        $composer_0.startReplaceGroup_5hh8aj_k$(1455895917);
        sourceInformation($composer_0, '750@41919L530');
        var tmp_5 = Companion_getInstance_4();
        sourceInformationMarkerStart($composer_0, 739703437, 'CC(remember):SharedTransitionScope.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.changedInstance_s1wkiy_k$($sharedContentState);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var value_0 = SharedTransitionScopeImpl$sharedBounds$lambda$lambda_0($sharedContentState);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var tmp3_group = createContentScaleModifier(tmp_5, $resizeMode, tmp2_group);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_4 = tmp3_group;
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(1456513127);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_4 = Companion_getInstance_4();
      }
      var tmp0 = tmp_3.then_g5qrxq_k$(tmp_4);
      var tmp_8;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_8 = Unit_getInstance();
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      return tmp0;
    };
  }
  function SharedTransitionScopeImpl$sharedElementWithCallerManagedVisibility$lambda($visible) {
    return function (it) {
      return $visible;
    };
  }
  function SharedTransitionScopeImpl$sharedBoundsWithCallerManagedVisibility$lambda($visible) {
    return function (it) {
      return $visible;
    };
  }
  function SharedTransitionScopeImpl$observeAnimatingBlock$lambda(this$0) {
    return function () {
      var tmp0 = this$0.sharedElements_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterMap.any' call
        // Inline function 'androidx.collection.ScatterMap.forEach' call
        var k = tmp0.get_keys_8zdyhr_k$();
        var v = tmp0.get_values_y8hjwv_k$();
        $l$block_0: {
          // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
          var m = tmp0.get_metadata_ha42hw_k$();
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_0 = slot;
              var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                      (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                      var tmp_0 = v[index];
                      if (((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).isAnimating_x1kvqk_k$()) {
                        break $l$block;
                      }
                    }
                    slot = shiftRight(slot, 8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block_0;
                }
              }
            }
             while (!(i === lastIndex));
        }
      }
      return Unit_getInstance();
    };
  }
  function SharedTransitionScopeImpl$updateTransitionActiveness$lambda(this$0) {
    return function (it) {
      updateTransitionActiveness(this$0);
      return Unit_getInstance();
    };
  }
  function SharedTransitionScopeImpl$sharedBoundsImpl$lambda($sharedContentState, this$0, $parentTransition, $visible, $boundsTransform, $placeHolderSize, $renderOnlyWhenVisible, $clipInOverlayDuringTransition, $zIndexInOverlay, $renderInOverlayDuringTransition) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceGroup_5hh8aj_k$(-1843478929);
      sourceInformation($composer_0, 'C:SharedTransitionScope.kt#xbi5r1');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1843478929, $changed, -1, 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBoundsImpl.<anonymous> (SharedTransitionScope.kt:915)');
        tmp = Unit_getInstance();
      }
      var key = $sharedContentState.key_1;
      $composer_0.startMovableGroup_clfloq_k$(-2056718552, key);
      sourceInformation($composer_0, '918@51094L35,966@53923L559');
      sourceInformationMarkerStart($composer_0, -2056720462, 'CC(remember):SharedTransitionScope.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        var value = sharedElementsFor(this$0, key);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp2_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var sharedElement = tmp2_group;
      $composer_0.startMovableGroup_clfloq_k$(-2056714740, $parentTransition);
      sourceInformation($composer_0, '956@53436L363');
      var tmp_2;
      if (!($parentTransition == null)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(666402505);
        sourceInformation($composer_0, '924@51369L121');
        var tmp0 = $parentTransition;
        // Inline function 'androidx.compose.animation.core.createChildTransition' call
        var label = toString_0(key);
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, -539313577, 'CC(createChildTransition)1768@75281L36,1769@75341L74,1770@75438L39,1771@75489L63:Transition.kt#pdpnli');
        if (!((0 & 1) === 0))
          label = 'ChildTransition';
        sourceInformationMarkerStart($composer_1, 1410703355, 'CC(remember):Transition.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = (0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(tmp0) || (0 & 6) === 4;
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var value_0 = tmp0.get_currentState_snihnl_k$();
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        var initialParentState = tmp1_group;
        var tmp0_0 = tmp0.get_isSeeking_vjb393_k$() ? tmp0.get_currentState_snihnl_k$() : initialParentState;
        var $changed_0 = 112 & 0 >> 3;
        var $composer_2 = $composer_1;
        $composer_0.startReplaceGroup_5hh8aj_k$(1329676753);
        sourceInformation($composer_0, 'C:SharedTransitionScope.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(1329676753, $changed_0, -1, 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBoundsImpl.<anonymous>.<anonymous>.<anonymous>.<anonymous> (SharedTransitionScope.kt:925)');
        }
        var tmp0_1 = $visible(tmp0_0);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_0.endReplaceGroup_ek144q_k$();
        var initialState = tmp0_1;
        var tmp0_2 = tmp0.get_targetState_kri3mx_k$();
        var $changed_1 = 112 & 0 >> 3;
        var $composer_3 = $composer_1;
        $composer_0.startReplaceGroup_5hh8aj_k$(1329676753);
        sourceInformation($composer_0, 'C:SharedTransitionScope.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(1329676753, $changed_1, -1, 'androidx.compose.animation.SharedTransitionScopeImpl.sharedBoundsImpl.<anonymous>.<anonymous>.<anonymous>.<anonymous> (SharedTransitionScope.kt:925)');
        }
        var tmp0_3 = $visible(tmp0_2);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_0.endReplaceGroup_ek144q_k$();
        var targetState = tmp0_3;
        var tmp0_4 = createChildTransitionInternal(tmp0, initialState, targetState, label, $composer_1, 14 & 0 | 7168 & 0 << 6);
        sourceInformationMarkerEnd($composer_1);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_2 = tmp0_4;
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(666654225);
        sourceInformation($composer_0, '931@51772L1243,950@53127L35');
        var targetState_0 = (typeof $visible === 'function' ? $visible : THROW_CCE())(Unit_getInstance());
        sourceInformationMarkerStart($composer_0, -2056697558, 'CC(remember):SharedTransitionScope.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (false || it_1 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp_6;
          if (sharedElement.get_states_jnf5zf_k$().isEmpty_y1axqb_k$()) {
            tmp_6 = targetState_0;
          } else {
            tmp_6 = !targetState_0;
          }
          var initialState_0 = tmp_6;
          var value_1 = new MutableTransitionState(initialState_0);
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_7 = tmp_5;
        var tmp4_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.also' call
        tmp4_group.set_targetState_1ag6bn_k$(targetState_0);
        var transitionState = tmp4_group;
        var tmp6_group = rememberTransition(transitionState, null, $composer_0, androidx_compose_animation_core_MutableTransitionState$stableprop_getter(), 2);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_2 = tmp6_group;
      }
      var boundsTransition = tmp_2;
      $composer_0.startMovableGroup_clfloq_k$(-2056651003, this$0.get_isTransitionActive_t69j02_k$());
      sourceInformation($composer_0, '954@53336L45');
      var tmp_8 = get_VectorConverter_2(Companion_getInstance());
      var tmp7 = createDeferredAnimation(boundsTransition, tmp_8, null, $composer_0, 0, 2);
      $composer_0.endMovableGroup_kd2hcs_k$();
      var animation = tmp7;
      sourceInformationMarkerStart($composer_0, -2056645190, 'CC(remember):SharedTransitionScope.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.changed_ga7h3f_k$(boundsTransition);
      // Inline function 'kotlin.let' call
      var it_2 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid_0 || it_2 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        var value_2 = new BoundsAnimation(this$0, boundsTransition, animation, $boundsTransform);
        $composer_0.updateRememberedValue_l1wh71_k$(value_2);
        tmp_9 = value_2;
      } else {
        tmp_9 = it_2;
      }
      var tmp_10 = tmp_9;
      var tmp8_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.also' call
      tmp8_group.updateAnimation_opighb_k$(animation, $boundsTransform);
      $composer_0.endMovableGroup_kd2hcs_k$();
      var boundsAnimation = tmp8_group;
      var tmp1 = rememberSharedElementState(this$0, sharedElement, boundsAnimation, $placeHolderSize, $renderOnlyWhenVisible, $sharedContentState, $clipInOverlayDuringTransition, $zIndexInOverlay, $renderInOverlayDuringTransition, $composer_0, 0);
      $composer_0.endMovableGroup_kd2hcs_k$();
      var sharedElementState = tmp1;
      var tmp0_5 = $this$composed.then_g5qrxq_k$(new SharedBoundsNodeElement(sharedElementState));
      var tmp_11;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_11 = Unit_getInstance();
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      return tmp0_5;
    };
  }
  function SharedTransitionScopeImpl$drawInOverlay$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp;
    var tmp_0;
    var tmp_1;
    if (a.get_zIndex_mbbc75_k$() === 0.0) {
      tmp_1 = a instanceof SharedElementInternalState;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = a.get_parentState_ui10gu_k$() == null;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = -1.0;
    } else {
      tmp = a.get_zIndex_mbbc75_k$();
    }
    var tmp_2 = tmp;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    if (b.get_zIndex_mbbc75_k$() === 0.0) {
      tmp_5 = b instanceof SharedElementInternalState;
    } else {
      tmp_5 = false;
    }
    if (tmp_5) {
      tmp_4 = b.get_parentState_ui10gu_k$() == null;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = -1.0;
    } else {
      tmp_3 = b.get_zIndex_mbbc75_k$();
    }
    var tmp$ret$1 = tmp_3;
    return compareValues(tmp_2, tmp$ret$1);
  }
  function SharedTransitionScopeImpl$onStateRemoved$slambda($$this$with, resultContinuation) {
    this.$$this$with_1 = $$this$with;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SharedTransitionScopeImpl$onStateRemoved$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SharedTransitionScopeImpl$onStateRemoved$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SharedTransitionScopeImpl$onStateRemoved$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          if (this.$$this$with_1.get_states_jnf5zf_k$().isEmpty_y1axqb_k$()) {
            this.$$this$with_1.get_scope_iyfcq3_k$().sharedElements_1.remove_gppy8k_k$(this.$$this$with_1.get_key_18j28a_k$());
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(SharedTransitionScopeImpl$onStateRemoved$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new SharedTransitionScopeImpl$onStateRemoved$slambda(this.$$this$with_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(SharedTransitionScopeImpl$onStateRemoved$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SharedTransitionScopeImpl$onStateRemoved$slambda_0($$this$with, resultContinuation) {
    var i = new SharedTransitionScopeImpl$onStateRemoved$slambda($$this$with, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SharedTransitionScopeImpl(lookaheadScope, coroutineScope) {
    Companion_getInstance_16();
    this.$$delegate_0__1 = lookaheadScope;
    this.coroutineScope_1 = coroutineScope;
    this.disposed_1 = false;
    this.isTransitionActive$delegate_1 = mutableStateOf(false);
    var tmp = this;
    tmp.observeAnimatingBlock_1 = SharedTransitionScopeImpl$observeAnimatingBlock$lambda(this);
    var tmp_0 = this;
    tmp_0.updateTransitionActiveness_1 = SharedTransitionScopeImpl$updateTransitionActiveness$lambda(this);
    this.nullableLookaheadRoot_1 = null;
    this.renderers_1 = mutableStateListOf();
    this.sharedElements_1 = new MutableScatterMap();
  }
  protoOf(SharedTransitionScopeImpl).get_coroutineScope_5k7h45_k$ = function () {
    return this.coroutineScope_1;
  };
  protoOf(SharedTransitionScopeImpl).get_disposed_wrx49n_k$ = function () {
    return this.disposed_1;
  };
  protoOf(SharedTransitionScopeImpl).get_isTransitionActive_t69j02_k$ = function () {
    var tmp0 = this.isTransitionActive$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionScopeImpl$_get_isTransitionActive_$ref_59dojl();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isTransitionActive', 1, tmp, tmp_0, SharedTransitionScopeImpl$_set_isTransitionActive_$ref_rih4z9());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedTransitionScopeImpl).skipToLookaheadSize_b06tnw_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.then_g5qrxq_k$(new SkipToLookaheadElement());
  };
  protoOf(SharedTransitionScopeImpl).renderInSharedTransitionScopeOverlay_gioz4y_k$ = function (_this__u8e3s4, renderInOverlay, zIndexInOverlay, clipInOverlayDuringTransition) {
    return _this__u8e3s4.then_g5qrxq_k$(new RenderInTransitionOverlayNodeElement(this, renderInOverlay, zIndexInOverlay, clipInOverlayDuringTransition));
  };
  protoOf(SharedTransitionScopeImpl).sharedElement_5f1zge_k$ = function (_this__u8e3s4, sharedContentState, animatedVisibilityScope, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    var tmp = animatedVisibilityScope.get_transition_mcca1q_k$();
    return sharedBoundsImpl(this, _this__u8e3s4, sharedContentState, tmp, SharedTransitionScopeImpl$sharedElement$lambda, boundsTransform, placeHolderSize, true, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  };
  protoOf(SharedTransitionScopeImpl).sharedBounds_k7ql06_k$ = function (_this__u8e3s4, sharedContentState, animatedVisibilityScope, enter, exit, boundsTransform, resizeMode, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    var tmp0_parentTransition = animatedVisibilityScope.get_transition_mcca1q_k$();
    var tmp = sharedBoundsImpl(this, _this__u8e3s4, sharedContentState, tmp0_parentTransition, SharedTransitionScopeImpl$sharedBounds$lambda, boundsTransform, placeHolderSize, false, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
    return composed(tmp, VOID, SharedTransitionScopeImpl$sharedBounds$lambda_0(animatedVisibilityScope, enter, exit, sharedContentState, resizeMode));
  };
  protoOf(SharedTransitionScopeImpl).sharedElementWithCallerManagedVisibility_pswh70_k$ = function (_this__u8e3s4, sharedContentState, visible, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    return sharedBoundsImpl(this, _this__u8e3s4, sharedContentState, null, SharedTransitionScopeImpl$sharedElementWithCallerManagedVisibility$lambda(visible), boundsTransform, placeHolderSize, true, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  };
  protoOf(SharedTransitionScopeImpl).sharedBoundsWithCallerManagedVisibility_k2rbwo_k$ = function (_this__u8e3s4, sharedContentState, visible, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    return sharedBoundsImpl(this, _this__u8e3s4, sharedContentState, null, SharedTransitionScopeImpl$sharedBoundsWithCallerManagedVisibility$lambda(visible), boundsTransform, placeHolderSize, false, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  };
  protoOf(SharedTransitionScopeImpl).sharedBoundsWithCallerManagedVisibility$default_8l484d_k$ = function (_this__u8e3s4, sharedContentState, visible, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    boundsTransform = boundsTransform === VOID ? get_DefaultBoundsTransform_0() : boundsTransform;
    placeHolderSize = placeHolderSize === VOID ? Companion_getInstance_14().contentSize_1 : placeHolderSize;
    renderInOverlayDuringTransition = renderInOverlayDuringTransition === VOID ? true : renderInOverlayDuringTransition;
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    clipInOverlayDuringTransition = clipInOverlayDuringTransition === VOID ? get_ParentClip() : clipInOverlayDuringTransition;
    return $super === VOID ? this.sharedBoundsWithCallerManagedVisibility_k2rbwo_k$(_this__u8e3s4, sharedContentState, visible, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) : $super.sharedBoundsWithCallerManagedVisibility_k2rbwo_k$.call(this, _this__u8e3s4, sharedContentState, visible, boundsTransform, placeHolderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  };
  protoOf(SharedTransitionScopeImpl).OverlayClip_rtukmp_k$ = function (clipShape) {
    return new ShapeBasedClip(clipShape);
  };
  protoOf(SharedTransitionScopeImpl).rememberSharedContentState_92w4g5_k$ = function (key, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(799702514);
    sourceInformation($composer_0, 'C(rememberSharedContentState)874@49216L41:SharedTransitionScope.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(799702514, $changed, -1, 'androidx.compose.animation.SharedTransitionScopeImpl.rememberSharedContentState (SharedTransitionScope.kt:874)');
    }
    sourceInformationMarkerStart($composer_0, -285026917, 'CC(remember):SharedTransitionScope.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_ga7h3f_k$(key);
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
      var value = new SharedContentState(key);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp1_group;
  };
  protoOf(SharedTransitionScopeImpl).set_root_rgs4c_k$ = function (_set____db54di) {
    this.root_1 = _set____db54di;
  };
  protoOf(SharedTransitionScopeImpl).get_root_4w1woo_k$ = function () {
    var tmp = this.root_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('root');
    }
  };
  protoOf(SharedTransitionScopeImpl).get_lookaheadRoot_u3i6mw_k$ = function () {
    var tmp0 = this.nullableLookaheadRoot_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Error: Uninitialized LayoutCoordinates. Please make sure when using the SharedTransitionScope composable function, the modifier passed to the child content is being used, or use SharedTransitionLayout instead.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  };
  protoOf(SharedTransitionScopeImpl).set_nullableLookaheadRoot_gsik0m_k$ = function (_set____db54di) {
    this.nullableLookaheadRoot_1 = _set____db54di;
  };
  protoOf(SharedTransitionScopeImpl).get_nullableLookaheadRoot_f5e68p_k$ = function () {
    return this.nullableLookaheadRoot_1;
  };
  protoOf(SharedTransitionScopeImpl).drawInOverlay_27qf1y_k$ = function (scope) {
    // Inline function 'kotlin.collections.sortBy' call
    var this_0 = this.renderers_1;
    if (this_0.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = SharedTransitionScopeImpl$drawInOverlay$lambda;
      var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
      sortWith(this_0, tmp$ret$0);
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.renderers_1;
    var inductionVariable = 0;
    var last = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_1.get_c1px32_k$(index);
        item.drawInOverlay_ircoes_k$(scope);
      }
       while (inductionVariable <= last);
  };
  protoOf(SharedTransitionScopeImpl).onStateRemoved_npklb2_k$ = function (sharedElementState) {
    // Inline function 'kotlin.with' call
    var $this$with = sharedElementState.get_sharedElement_xjw30y_k$();
    $this$with.removeState_35kh4q_k$(sharedElementState);
    this.updateTransitionActiveness_1(this);
    observeIsAnimating($this$with.get_scope_iyfcq3_k$());
    this.renderers_1.remove_an8aut_k$(sharedElementState);
    if ($this$with.get_states_jnf5zf_k$().isEmpty_y1axqb_k$()) {
      var tmp = $this$with.get_scope_iyfcq3_k$().coroutineScope_1;
      launch(tmp, VOID, VOID, SharedTransitionScopeImpl$onStateRemoved$slambda_0($this$with, null));
    }
  };
  protoOf(SharedTransitionScopeImpl).onStateAdded_r36lku_k$ = function (sharedElementState) {
    // Inline function 'kotlin.with' call
    var $this$with = sharedElementState.get_sharedElement_xjw30y_k$();
    $this$with.addState_rbuktl_k$(sharedElementState);
    this.updateTransitionActiveness_1(this);
    observeIsAnimating($this$with.get_scope_iyfcq3_k$());
    var tmp0 = this.renderers_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var index = 0;
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        var tmp0_safe_receiver = item instanceof SharedElementInternalState ? item : null;
        if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_sharedElement_xjw30y_k$(), sharedElementState.get_sharedElement_xjw30y_k$())) {
          tmp$ret$1 = index;
          break $l$block;
        }
        index = index + 1 | 0;
      }
      tmp$ret$1 = -1;
    }
    var id = tmp$ret$1;
    var tmp;
    if (id === (this.renderers_1.get_size_woubt6_k$() - 1 | 0) || id === -1) {
      tmp = this.renderers_1.add_wl2rvy_k$(sharedElementState);
    } else {
      this.renderers_1.add_gaf1mg_k$(id + 1 | 0, sharedElementState);
      tmp = Unit_getInstance();
    }
  };
  protoOf(SharedTransitionScopeImpl).onLayerRendererCreated_lwx1jm_k$ = function (renderer) {
    this.renderers_1.add_wl2rvy_k$(renderer);
  };
  protoOf(SharedTransitionScopeImpl).onLayerRendererRemoved_bn3slm_k$ = function (renderer) {
    this.renderers_1.remove_an8aut_k$(renderer);
  };
  protoOf(SharedTransitionScopeImpl).onDispose_cyfigt_k$ = function () {
    _get_SharedTransitionObserver__33utcr(Companion_getInstance_16()).clear_7p1m0x_k$(this);
    this.disposed_1 = true;
  };
  protoOf(SharedTransitionScopeImpl).get_observerForTest_r1p2if_k$ = function () {
    return _get_SharedTransitionObserver__33utcr(Companion_getInstance_16());
  };
  protoOf(SharedTransitionScopeImpl).observeReads_4r22an_k$ = function (scope, onValueChangedForScope, block) {
    if (!this.disposed_1) {
      _get_SharedTransitionObserver__33utcr(Companion_getInstance_16()).observeReads_r9h55h_k$(scope, onValueChangedForScope, block);
    }
  };
  protoOf(SharedTransitionScopeImpl).clearObservation_wj64be_k$ = function (scope) {
    _get_SharedTransitionObserver__33utcr(Companion_getInstance_16()).clear_7p1m0x_k$(scope);
  };
  protoOf(SharedTransitionScopeImpl).toLookaheadCoordinates_1gvv32_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.toLookaheadCoordinates_1gvv32_k$(_this__u8e3s4);
  };
  protoOf(SharedTransitionScopeImpl).localLookaheadPositionOf_b7sqvq_k$ = function (_this__u8e3s4, sourceCoordinates, relativeToSource, includeMotionFrameOfReference) {
    return this.$$delegate_0__1.localLookaheadPositionOf_b7sqvq_k$(_this__u8e3s4, sourceCoordinates, relativeToSource, includeMotionFrameOfReference);
  };
  protoOf(SharedTransitionScopeImpl).get_lookaheadScopeCoordinates_sb7bj3_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.get_lookaheadScopeCoordinates_sb7bj3_k$(_this__u8e3s4);
  };
  function ScaleToBoundsImpl(contentScale, alignment) {
    this.contentScale_1 = contentScale;
    this.alignment_1 = alignment;
  }
  protoOf(ScaleToBoundsImpl).get_contentScale_i3wrkq_k$ = function () {
    return this.contentScale_1;
  };
  protoOf(ScaleToBoundsImpl).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  function RemeasureImpl() {
    RemeasureImpl_instance = this;
  }
  var RemeasureImpl_instance;
  function RemeasureImpl_getInstance() {
    if (RemeasureImpl_instance == null)
      new RemeasureImpl();
    return RemeasureImpl_instance;
  }
  function ScaleToBoundsCached(contentScale, alignment) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    if (get_shouldCache(contentScale) && get_shouldCache_0(alignment)) {
      // Inline function 'androidx.collection.MutableScatterMap.getOrPut' call
      var this_0 = get_cachedScaleToBoundsImplMap();
      var tmp0_elvis_lhs = this_0.get_wei43m_k$(contentScale);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_1 = new MutableScatterMap();
        this_0.set_b9w55f_k$(contentScale, this_1);
        tmp = this_1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var map = tmp;
      // Inline function 'androidx.collection.MutableScatterMap.getOrPut' call
      var tmp0_elvis_lhs_0 = map.get_wei43m_k$(alignment);
      var tmp_0;
      if (tmp0_elvis_lhs_0 == null) {
        // Inline function 'kotlin.also' call
        var this_2 = new ScaleToBoundsImpl(contentScale, alignment);
        map.set_b9w55f_k$(alignment, this_2);
        tmp_0 = this_2;
      } else {
        tmp_0 = tmp0_elvis_lhs_0;
      }
      return tmp_0;
    } else {
      return new ScaleToBoundsImpl(contentScale, alignment);
    }
  }
  function get_shouldCache(_this__u8e3s4) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return _this__u8e3s4 === Companion_getInstance_10().get_FillWidth_n2o75m_k$() || _this__u8e3s4 === Companion_getInstance_10().get_FillHeight_262ytp_k$() || _this__u8e3s4 === Companion_getInstance_10().get_FillBounds_4umybj_k$() || _this__u8e3s4 === Companion_getInstance_10().get_Fit_18jtko_k$() || _this__u8e3s4 === Companion_getInstance_10().get_Crop_wnzuux_k$() || _this__u8e3s4 === Companion_getInstance_10().get_None_wo6tgh_k$() || _this__u8e3s4 === Companion_getInstance_10().get_Inside_bggkb_k$();
  }
  function get_shouldCache_0(_this__u8e3s4) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return _this__u8e3s4 === Companion_getInstance_1().get_TopStart_o4x792_k$() || _this__u8e3s4 === Companion_getInstance_1().get_TopCenter_u4q5vl_k$() || _this__u8e3s4 === Companion_getInstance_1().get_TopEnd_4wiiy7_k$() || _this__u8e3s4 === Companion_getInstance_1().get_CenterStart_2305fg_k$() || _this__u8e3s4 === Companion_getInstance_1().get_Center_3arb0i_k$() || _this__u8e3s4 === Companion_getInstance_1().get_CenterEnd_uti4xp_k$() || _this__u8e3s4 === Companion_getInstance_1().get_BottomStart_v81qpa_k$() || _this__u8e3s4 === Companion_getInstance_1().get_BottomCenter_yatb1z_k$() || _this__u8e3s4 === Companion_getInstance_1().get_BottomEnd_ayz0tj_k$();
  }
  function sam$androidx_compose_animation_BoundsTransform$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_0).transform_372bqs_k$ = function (initialBounds, targetBounds) {
    return this.function_1(initialBounds, targetBounds);
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, BoundsTransform) : false) {
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
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function ParentClip$1() {
  }
  protoOf(ParentClip$1).getClipPath_nnv5ej_k$ = function (sharedContentState, bounds, layoutDirection, density) {
    var tmp0_safe_receiver = sharedContentState.get_parentSharedContentState_agqmhc_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_clipPathInOverlay_c5z0b7_k$();
  };
  function DefaultClipInOverlayDuringTransition$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return null;
  }
  function DefaultBoundsTransform$lambda_0(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return get_DefaultSpring();
  }
  var properties_initialized_SharedTransitionScope_kt_rkj5u2;
  function _init_properties_SharedTransitionScope_kt__irnofc() {
    if (!properties_initialized_SharedTransitionScope_kt_rkj5u2) {
      properties_initialized_SharedTransitionScope_kt_rkj5u2 = true;
      DefaultSpring = spring(VOID, 400.0, get_VisibilityThreshold(Companion_getInstance()));
      ParentClip = new ParentClip$1();
      DefaultClipInOverlayDuringTransition = DefaultClipInOverlayDuringTransition$lambda;
      var tmp = DefaultBoundsTransform$lambda_0;
      DefaultBoundsTransform_0 = new sam$androidx_compose_animation_BoundsTransform$0_0(tmp);
      cachedScaleToBoundsImplMap = new MutableScatterMap();
      androidx_compose_animation_SharedTransitionScope_SharedContentState$stable = 8;
      androidx_compose_animation_SharedTransitionScopeImpl$stable = 0;
      androidx_compose_animation_ScaleToBoundsImpl$stable = 0;
    }
  }
  function get_colorDefaultSpring() {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    return colorDefaultSpring;
  }
  var colorDefaultSpring;
  function animateColorAsState(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -451899108, 'C(animateColorAsState)P(3:c#ui.graphics.Color!1,2)63@2906L84,64@3002L157:SingleValueAnimation.kt#xbi5r1');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_colorDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'ColorAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-451899108, $changed, -1, 'androidx.compose.animation.animateColorAsState (SingleValueAnimation.kt:61)');
    }
    var tmp1_remember$arg$0 = _Color___get_colorSpace__impl__jqqozk(targetValue);
    sourceInformationMarkerStart($composer_0, -483337392, 'CC(remember):SingleValueAnimation.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_ga7h3f_k$(tmp1_remember$arg$0);
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
      var value = get_VectorConverter_3(Companion_getInstance_8())(_Color___get_colorSpace__impl__jqqozk(targetValue));
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp2_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var converter = tmp2_group;
    var tmp_1 = animationSpec_0;
    var tmp0 = animateValueAsState(new Color_0(targetValue), converter, tmp_1, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  var properties_initialized_SingleValueAnimation_kt_kqgwkj;
  function _init_properties_SingleValueAnimation_kt__hxy1sr() {
    if (!properties_initialized_SingleValueAnimation_kt_kqgwkj) {
      properties_initialized_SingleValueAnimation_kt_kqgwkj = true;
      colorDefaultSpring = spring();
    }
  }
  function get_DefaultEnabled() {
    _init_properties_SkipToLookaheadNode_kt__g2znt4();
    return DefaultEnabled;
  }
  var DefaultEnabled;
  var androidx_compose_animation_SkipToLookaheadNode$stable;
  var androidx_compose_animation_SkipToLookaheadElement$stable;
  function SkipToLookaheadElement(scaleToBounds, isEnabled) {
    scaleToBounds = scaleToBounds === VOID ? null : scaleToBounds;
    isEnabled = isEnabled === VOID ? get_DefaultEnabled() : isEnabled;
    ModifierNodeElement.call(this);
    this.scaleToBounds_1 = scaleToBounds;
    this.isEnabled_1 = isEnabled;
  }
  protoOf(SkipToLookaheadElement).get_scaleToBounds_v7yegf_k$ = function () {
    return this.scaleToBounds_1;
  };
  protoOf(SkipToLookaheadElement).get_isEnabled_roz1ma_k$ = function () {
    return this.isEnabled_1;
  };
  protoOf(SkipToLookaheadElement).create_md4cuc_k$ = function () {
    return new SkipToLookaheadNode(this.scaleToBounds_1, this.isEnabled_1);
  };
  protoOf(SkipToLookaheadElement).update_8x823x_k$ = function (node) {
    node.set_scaleToBounds_7de1qi_k$(this.scaleToBounds_1);
    node.set_isEnabled_9kb97j_k$(this.isEnabled_1);
  };
  protoOf(SkipToLookaheadElement).update_9wd57p_k$ = function (node) {
    return this.update_8x823x_k$(node instanceof SkipToLookaheadNode ? node : THROW_CCE());
  };
  protoOf(SkipToLookaheadElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('skipToLookahead');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('scaleToBounds', this.scaleToBounds_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('isEnabled', this.isEnabled_1);
  };
  protoOf(SkipToLookaheadElement).component1_7eebsc_k$ = function () {
    return this.scaleToBounds_1;
  };
  protoOf(SkipToLookaheadElement).component2_7eebsb_k$ = function () {
    return this.isEnabled_1;
  };
  protoOf(SkipToLookaheadElement).copy_emg3yj_k$ = function (scaleToBounds, isEnabled) {
    return new SkipToLookaheadElement(scaleToBounds, isEnabled);
  };
  protoOf(SkipToLookaheadElement).copy$default_djm75s_k$ = function (scaleToBounds, isEnabled, $super) {
    scaleToBounds = scaleToBounds === VOID ? this.scaleToBounds_1 : scaleToBounds;
    isEnabled = isEnabled === VOID ? this.isEnabled_1 : isEnabled;
    return $super === VOID ? this.copy_emg3yj_k$(scaleToBounds, isEnabled) : $super.copy_emg3yj_k$.call(this, scaleToBounds, isEnabled);
  };
  protoOf(SkipToLookaheadElement).toString = function () {
    return 'SkipToLookaheadElement(scaleToBounds=' + toString(this.scaleToBounds_1) + ', isEnabled=' + toString_0(this.isEnabled_1) + ')';
  };
  protoOf(SkipToLookaheadElement).hashCode = function () {
    var result = this.scaleToBounds_1 == null ? 0 : hashCode(this.scaleToBounds_1);
    result = imul(result, 31) + hashCode(this.isEnabled_1) | 0;
    return result;
  };
  protoOf(SkipToLookaheadElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkipToLookaheadElement))
      return false;
    var tmp0_other_with_cast = other instanceof SkipToLookaheadElement ? other : THROW_CCE();
    if (!equals(this.scaleToBounds_1, tmp0_other_with_cast.scaleToBounds_1))
      return false;
    if (!equals(this.isEnabled_1, tmp0_other_with_cast.isEnabled_1))
      return false;
    return true;
  };
  function createContentScaleModifier(_this__u8e3s4, scaleToBounds, isEnabled) {
    _init_properties_SkipToLookaheadNode_kt__g2znt4();
    var tmp;
    if (equals(scaleToBounds.get_contentScale_i3wrkq_k$(), Companion_getInstance_10().get_Crop_wnzuux_k$())) {
      var tmp_0 = Companion_getInstance_4();
      tmp = graphicsLayer(tmp_0, createContentScaleModifier$lambda(isEnabled));
    } else {
      tmp = Companion_getInstance_4();
    }
    return _this__u8e3s4.then_g5qrxq_k$(tmp).then_g5qrxq_k$(new SkipToLookaheadElement(scaleToBounds, isEnabled));
  }
  function _set_lookaheadConstraints__uusx37_0($this, _set____db54di) {
    $this.lookaheadConstraints_1 = _set____db54di;
  }
  function _get_lookaheadConstraints__gwq92v_0($this) {
    return $this.lookaheadConstraints_1;
  }
  function _set_lookaheadSize__8e6fb6_0($this, _set____db54di) {
    $this.lookaheadSize_1 = _set____db54di;
  }
  function _get_lookaheadSize__6tl376_0($this) {
    return $this.lookaheadSize_1;
  }
  function SkipToLookaheadNode$_get_scaleToBounds_$ref_iu7h64() {
    return function (p0) {
      return p0.get_scaleToBounds_v7yegf_k$();
    };
  }
  function SkipToLookaheadNode$_set_scaleToBounds_$ref_uh3oio() {
    return function (p0, p1) {
      p0.set_scaleToBounds_7de1qi_k$(p1);
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadNode$_get_scaleToBounds_$ref_iu7h64_0() {
    return function (p0) {
      return p0.get_scaleToBounds_v7yegf_k$();
    };
  }
  function SkipToLookaheadNode$_set_scaleToBounds_$ref_uh3oio_0() {
    return function (p0, p1) {
      p0.set_scaleToBounds_7de1qi_k$(p1);
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadNode$_get_isEnabled_$ref_6kxvqp() {
    return function (p0) {
      return p0.get_isEnabled_roz1ma_k$();
    };
  }
  function SkipToLookaheadNode$_set_isEnabled_$ref_8mtmrn() {
    return function (p0, p1) {
      p0.set_isEnabled_9kb97j_k$(p1);
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadNode$_get_isEnabled_$ref_6kxvqp_0() {
    return function (p0) {
      return p0.get_isEnabled_roz1ma_k$();
    };
  }
  function SkipToLookaheadNode$_set_isEnabled_$ref_8mtmrn_0() {
    return function (p0, p1) {
      p0.set_isEnabled_9kb97j_k$(p1);
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadNode$measure$lambda($$this$run) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($$this$run, 0, 0);
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadNode$measure$lambda$lambda($resolvedScale) {
    return function ($this$placeWithLayer) {
      // Inline function 'androidx.compose.ui.layout.ScaleFactor.scaleX' call
      var this_0 = $resolvedScale;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _ScaleFactor___get_packedValue__impl__x2069g(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$3 = floatFromBits(bits);
      $this$placeWithLayer.set_scaleX_ykjjzx_k$(tmp$ret$3);
      // Inline function 'androidx.compose.ui.layout.ScaleFactor.scaleY' call
      var this_1 = $resolvedScale;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _ScaleFactor___get_packedValue__impl__x2069g(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$7 = floatFromBits(bits_0);
      $this$placeWithLayer.set_scaleY_i4eqp0_k$(tmp$ret$7);
      $this$placeWithLayer.set_transformOrigin_wfji5_k$(TransformOrigin_0(0.0, 0.0));
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadNode$measure$lambda_0(this$0, $p, $constrainedSize, $this_measure) {
    return function ($this$layout) {
      var scaleToBounds = this$0.get_scaleToBounds_v7yegf_k$();
      var tmp;
      if (scaleToBounds == null) {
        $this$layout.place$default_61faqz_k$($p, 0, 0);
        tmp = Unit_getInstance();
      } else {
        var contentScale = scaleToBounds.get_contentScale_i3wrkq_k$();
        var tmp_0;
        var tmp_1;
        // Inline function 'androidx.compose.ui.unit.IntSize.width' call
        var this_0 = this$0.lookaheadSize_1;
        // Inline function 'androidx.compose.ui.util.unpackInt1' call
        var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
        if (convertToInt(shiftRight(value, 32)) === 0) {
          tmp_1 = true;
        } else {
          // Inline function 'androidx.compose.ui.unit.IntSize.height' call
          var this_1 = this$0.lookaheadSize_1;
          // Inline function 'androidx.compose.ui.util.unpackInt2' call
          var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
          tmp_1 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0))) === 0;
        }
        if (tmp_1) {
          // Inline function 'androidx.compose.ui.layout.ScaleFactor' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var v1 = fromInt(toRawBits(1.0));
          var v2 = fromInt(toRawBits(1.0));
          var tmp$ret$4 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
          tmp_0 = _ScaleFactor___init__impl__ttdtvk(tmp$ret$4);
        } else {
          tmp_0 = contentScale.computeScaleFactor_swd2p8_k$(toSize(this$0.lookaheadSize_1), toSize($constrainedSize));
        }
        var resolvedScale = tmp_0;
        var tmp_2 = scaleToBounds.get_alignment_xa1jnq_k$();
        // Inline function 'androidx.compose.ui.unit.IntSize.width' call
        var this_2 = this$0.lookaheadSize_1;
        // Inline function 'androidx.compose.ui.util.unpackInt1' call
        var value_1 = _IntSize___get_packedValue__impl__uho7jf(this_2);
        var tmp_3 = convertToInt(shiftRight(value_1, 32));
        // Inline function 'androidx.compose.ui.layout.ScaleFactor.scaleX' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_2 = _ScaleFactor___get_packedValue__impl__x2069g(resolvedScale);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits = convertToInt(shiftRight(value_2, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        // Inline function 'kotlin.math.roundToInt' call
        var this_3 = tmp_3 * floatFromBits(bits);
        var tmp0 = roundToInt(this_3);
        // Inline function 'androidx.compose.ui.unit.IntSize.height' call
        var this_4 = this$0.lookaheadSize_1;
        // Inline function 'androidx.compose.ui.util.unpackInt2' call
        var value_3 = _IntSize___get_packedValue__impl__uho7jf(this_4);
        var tmp_4 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
        // Inline function 'androidx.compose.ui.layout.ScaleFactor.scaleY' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_4 = _ScaleFactor___get_packedValue__impl__x2069g(resolvedScale);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_0 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        // Inline function 'kotlin.math.roundToInt' call
        var this_5 = tmp_4 * floatFromBits(bits_0);
        // Inline function 'androidx.compose.ui.unit.IntSize' call
        // Inline function 'androidx.compose.ui.util.packInts' call
        var val2 = roundToInt(this_5);
        var tmp$ret$20 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
        var tmp$ret$21 = _IntSize___init__impl__emcjft(tmp$ret$20);
        var _destruct__k2r9zo = tmp_2.align_mb8mzc_k$(tmp$ret$21, $constrainedSize, $this_measure.get_layoutDirection_7e37v0_k$());
        // Inline function 'androidx.compose.ui.unit.IntOffset.component1' call
        var x = _IntOffset___get_x__impl__qiqr5o(_destruct__k2r9zo);
        // Inline function 'androidx.compose.ui.unit.IntOffset.component2' call
        var y = _IntOffset___get_y__impl__2avpwj(_destruct__k2r9zo);
        $this$layout.placeWithLayer$default_kqry46_k$($p, x, y, VOID, SkipToLookaheadNode$measure$lambda$lambda(resolvedScale));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadNode(scaleToBounds, isEnabled) {
    Node.call(this);
    this.scaleToBounds$delegate_1 = mutableStateOf(scaleToBounds);
    this.isEnabled$delegate_1 = mutableStateOf(isEnabled);
    this.lookaheadConstraints_1 = null;
    this.lookaheadSize_1 = get_InvalidSize();
  }
  protoOf(SkipToLookaheadNode).set_scaleToBounds_7de1qi_k$ = function (_set____db54di) {
    var tmp0 = this.scaleToBounds$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SkipToLookaheadNode$_get_scaleToBounds_$ref_iu7h64_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('scaleToBounds', 1, tmp, tmp_0, SkipToLookaheadNode$_set_scaleToBounds_$ref_uh3oio_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SkipToLookaheadNode).get_scaleToBounds_v7yegf_k$ = function () {
    var tmp0 = this.scaleToBounds$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SkipToLookaheadNode$_get_scaleToBounds_$ref_iu7h64();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('scaleToBounds', 1, tmp, tmp_0, SkipToLookaheadNode$_set_scaleToBounds_$ref_uh3oio());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SkipToLookaheadNode).set_isEnabled_9kb97j_k$ = function (_set____db54di) {
    var tmp0 = this.isEnabled$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SkipToLookaheadNode$_get_isEnabled_$ref_6kxvqp_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isEnabled', 1, tmp, tmp_0, SkipToLookaheadNode$_set_isEnabled_$ref_8mtmrn_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SkipToLookaheadNode).get_isEnabled_roz1ma_k$ = function () {
    var tmp0 = this.isEnabled$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SkipToLookaheadNode$_get_isEnabled_$ref_6kxvqp();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isEnabled', 1, tmp, tmp_0, SkipToLookaheadNode$_set_isEnabled_$ref_8mtmrn());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SkipToLookaheadNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    if (_this__u8e3s4.get_isLookingAhead_2057g1_k$()) {
      this.lookaheadConstraints_1 = constraints;
    }
    if (!this.get_isEnabled_roz1ma_k$()()) {
      // Inline function 'kotlin.run' call
      var $this$run = measurable.measure_4dmfk1_k$(constraints);
      var tmp = $this$run.get_width_j0q4yl_k$();
      var tmp_0 = $this$run.get_height_e7t92o_k$();
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, SkipToLookaheadNode$measure$lambda($this$run));
    }
    var tmp_1;
    if (_this__u8e3s4.get_isLookingAhead_2057g1_k$()) {
      // Inline function 'kotlin.also' call
      var this_0 = measurable.measure_4dmfk1_k$(constraints);
      var tmp_2 = this;
      var tmp0 = this_0.get_width_j0q4yl_k$();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = this_0.get_height_e7t92o_k$();
      var tmp$ret$2 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      tmp_2.lookaheadSize_1 = _IntSize___init__impl__emcjft(tmp$ret$2);
      tmp_1 = this_0;
    } else {
      var tmp_3 = this.lookaheadConstraints_1;
      tmp_1 = measurable.measure_4dmfk1_k$(ensureNotNull(tmp_3 == null ? null : new Constraints_0(tmp_3)).value_1);
    }
    var p = tmp_1;
    var constrainedSize = constrain(constraints, this.lookaheadSize_1);
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(constrainedSize);
    var tmp_4 = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf(constrainedSize);
    var tmp_5 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp_4, tmp_5, VOID, SkipToLookaheadNode$measure$lambda_0(this, p, constrainedSize, _this__u8e3s4));
  };
  protoOf(SkipToLookaheadNode).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    var tmp;
    if (!_this__u8e3s4.get_isLookingAhead_2057g1_k$() && get_isValid(this.lookaheadSize_1)) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = this.lookaheadSize_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      tmp = convertToInt(shiftRight(value, 32));
    } else {
      tmp = measurable.maxIntrinsicWidth_b8umbx_k$(height);
    }
    return tmp;
  };
  protoOf(SkipToLookaheadNode).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    var tmp;
    if (!_this__u8e3s4.get_isLookingAhead_2057g1_k$() && get_isValid(this.lookaheadSize_1)) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = this.lookaheadSize_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      tmp = convertToInt(shiftRight(value, 32));
    } else {
      tmp = measurable.minIntrinsicWidth_jyhjuj_k$(height);
    }
    return tmp;
  };
  protoOf(SkipToLookaheadNode).maxIntrinsicHeight_nrifyt_k$ = function (_this__u8e3s4, measurable, width) {
    var tmp;
    if (!_this__u8e3s4.get_isLookingAhead_2057g1_k$() && get_isValid(this.lookaheadSize_1)) {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_0 = this.lookaheadSize_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      tmp = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    } else {
      tmp = measurable.maxIntrinsicHeight_b0krtc_k$(width);
    }
    return tmp;
  };
  protoOf(SkipToLookaheadNode).minIntrinsicHeight_xt6ly1_k$ = function (_this__u8e3s4, measurable, width) {
    var tmp;
    if (!_this__u8e3s4.get_isLookingAhead_2057g1_k$() && get_isValid(this.lookaheadSize_1)) {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_0 = this.lookaheadSize_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      tmp = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    } else {
      tmp = measurable.minIntrinsicHeight_p2a4ou_k$(width);
    }
    return tmp;
  };
  function DefaultEnabled$lambda() {
    _init_properties_SkipToLookaheadNode_kt__g2znt4();
    return true;
  }
  function createContentScaleModifier$lambda($isEnabled) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.set_clip_a88iug_k$($isEnabled());
      return Unit_getInstance();
    };
  }
  var properties_initialized_SkipToLookaheadNode_kt_gv9uoq;
  function _init_properties_SkipToLookaheadNode_kt__g2znt4() {
    if (!properties_initialized_SkipToLookaheadNode_kt_gv9uoq) {
      properties_initialized_SkipToLookaheadNode_kt_gv9uoq = true;
      DefaultEnabled = DefaultEnabled$lambda;
      androidx_compose_animation_SkipToLookaheadNode$stable = 8;
      androidx_compose_animation_SkipToLookaheadElement$stable = 0;
    }
  }
  var androidx_compose_animation_AndroidFlingSpline_FlingResult$stable;
  var androidx_compose_animation_AndroidFlingSpline$stable;
  function splineBasedDecay(density) {
    return generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
  }
  function _get_NbSamples__pl9lcs($this) {
    return $this.NbSamples_1;
  }
  function _get_SplinePositions__4lf5u0($this) {
    return $this.SplinePositions_1;
  }
  function _get_SplineTimes__1bv5pg($this) {
    return $this.SplineTimes_1;
  }
  function FlingResult(distanceCoefficient, velocityCoefficient) {
    this.distanceCoefficient_1 = distanceCoefficient;
    this.velocityCoefficient_1 = velocityCoefficient;
  }
  protoOf(FlingResult).get_distanceCoefficient_3vhbop_k$ = function () {
    return this.distanceCoefficient_1;
  };
  protoOf(FlingResult).get_velocityCoefficient_w8qjlb_k$ = function () {
    return this.velocityCoefficient_1;
  };
  protoOf(FlingResult).component1_7eebsc_k$ = function () {
    return this.distanceCoefficient_1;
  };
  protoOf(FlingResult).component2_7eebsb_k$ = function () {
    return this.velocityCoefficient_1;
  };
  protoOf(FlingResult).copy_4tzoad_k$ = function (distanceCoefficient, velocityCoefficient) {
    return new FlingResult(distanceCoefficient, velocityCoefficient);
  };
  protoOf(FlingResult).copy$default_ujshx8_k$ = function (distanceCoefficient, velocityCoefficient, $super) {
    distanceCoefficient = distanceCoefficient === VOID ? this.distanceCoefficient_1 : distanceCoefficient;
    velocityCoefficient = velocityCoefficient === VOID ? this.velocityCoefficient_1 : velocityCoefficient;
    return $super === VOID ? this.copy_4tzoad_k$(distanceCoefficient, velocityCoefficient) : $super.copy_4tzoad_k$.call(this, distanceCoefficient, velocityCoefficient);
  };
  protoOf(FlingResult).toString = function () {
    return 'FlingResult(distanceCoefficient=' + this.distanceCoefficient_1 + ', velocityCoefficient=' + this.velocityCoefficient_1 + ')';
  };
  protoOf(FlingResult).hashCode = function () {
    var result = getNumberHashCode(this.distanceCoefficient_1);
    result = imul(result, 31) + getNumberHashCode(this.velocityCoefficient_1) | 0;
    return result;
  };
  protoOf(FlingResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingResult))
      return false;
    var tmp0_other_with_cast = other instanceof FlingResult ? other : THROW_CCE();
    if (!equals(this.distanceCoefficient_1, tmp0_other_with_cast.distanceCoefficient_1))
      return false;
    if (!equals(this.velocityCoefficient_1, tmp0_other_with_cast.velocityCoefficient_1))
      return false;
    return true;
  };
  function AndroidFlingSpline() {
    AndroidFlingSpline_instance = this;
    this.NbSamples_1 = 100;
    this.SplinePositions_1 = new Float32Array(101);
    this.SplineTimes_1 = new Float32Array(101);
    computeSplineInfo(this.SplinePositions_1, this.SplineTimes_1, 100);
  }
  protoOf(AndroidFlingSpline).flingPosition_kqyylv_k$ = function (time) {
    var clampedTime = coerceIn(time, 0.0, 1.0);
    var index = numberToInt(100 * clampedTime);
    var distanceCoef = 1.0;
    var velocityCoef = 0.0;
    if (index < 100) {
      var tInf = index / 100;
      var tSup = (index + 1 | 0) / 100;
      var dInf = this.SplinePositions_1[index];
      var dSup = this.SplinePositions_1[index + 1 | 0];
      velocityCoef = (dSup - dInf) / (tSup - tInf);
      distanceCoef = dInf + (clampedTime - tInf) * velocityCoef;
    }
    return new FlingResult(distanceCoef, velocityCoef);
  };
  protoOf(AndroidFlingSpline).deceleration_7lhbmp_k$ = function (velocity, friction) {
    // Inline function 'kotlin.math.abs' call
    // Inline function 'kotlin.math.ln' call
    var x = 0.35 * Math.abs(velocity) / friction;
    return Math.log(x);
  };
  var AndroidFlingSpline_instance;
  function AndroidFlingSpline_getInstance() {
    if (AndroidFlingSpline_instance == null)
      new AndroidFlingSpline();
    return AndroidFlingSpline_instance;
  }
  function computeSplineInfo(splinePositions, splineTimes, nbSamples) {
    var xMin = 0.0;
    var yMin = 0.0;
    var inductionVariable = 0;
    if (inductionVariable < nbSamples)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var alpha = i / nbSamples;
        var xMax = 1.0;
        var x;
        var tx;
        var coef;
        $l$loop: while (true) {
          x = xMin + (xMax - xMin) / 2.0;
          coef = 3.0 * x * (1.0 - x);
          tx = coef * ((1.0 - x) * 0.175 + x * 0.35000002) + x * x * x;
          // Inline function 'kotlin.math.abs' call
          var x_0 = tx - alpha;
          if (Math.abs(x_0) < 1.0E-5)
            break $l$loop;
          if (tx > alpha)
            xMax = x;
          else
            xMin = x;
        }
        splinePositions[i] = coef * ((1.0 - x) * 0.5 + x) + x * x * x;
        var yMax = 1.0;
        var y;
        var dy;
        $l$loop_0: while (true) {
          y = yMin + (yMax - yMin) / 2.0;
          coef = 3.0 * y * (1.0 - y);
          dy = coef * ((1.0 - y) * 0.5 + y) + y * y * y;
          // Inline function 'kotlin.math.abs' call
          var x_1 = dy - alpha;
          if (Math.abs(x_1) < 1.0E-5)
            break $l$loop_0;
          if (dy > alpha)
            yMax = y;
          else
            yMin = y;
        }
        splineTimes[i] = coef * ((1.0 - y) * 0.175 + y * 0.35000002) + y * y * y;
      }
       while (inductionVariable < nbSamples);
    splineTimes[nbSamples] = 1.0;
    splinePositions[nbSamples] = splineTimes[nbSamples];
  }
  var androidx_compose_animation_SplineBasedFloatDecayAnimationSpec$stable;
  function _get_flingCalculator__k6f165($this) {
    return $this.flingCalculator_1;
  }
  function flingDistance($this, startVelocity) {
    var tmp = $this.flingCalculator_1.flingDistance_e8js0p_k$(startVelocity);
    // Inline function 'kotlin.math.sign' call
    return tmp * sign(startVelocity);
  }
  function SplineBasedFloatDecayAnimationSpec(density) {
    this.flingCalculator_1 = new FlingCalculator(get_platformFlingScrollFriction(), density);
  }
  protoOf(SplineBasedFloatDecayAnimationSpec).get_absVelocityThreshold_wsgqo5_k$ = function () {
    return 0.0;
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getTargetValue_k8zsye_k$ = function (initialValue, initialVelocity) {
    return initialValue + flingDistance(this, initialVelocity);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getValueFromNanos_vizg24_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    return initialValue + this.flingCalculator_1.flingInfo_sr0d1q_k$(initialVelocity).position_oaxlut_k$(playTimeMillis);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getDurationNanos_dl2v11_k$ = function (initialValue, initialVelocity) {
    return multiply(this.flingCalculator_1.flingDuration_g3t3l4_k$(initialVelocity), new Long(1000000, 0));
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getVelocityFromNanos_eyb6gk_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    return this.flingCalculator_1.flingInfo_sr0d1q_k$(initialVelocity).velocity_2zfv01_k$(playTimeMillis);
  };
  function animateColor(_this__u8e3s4, transitionSpec, label, targetValueByState, $composer, $changed, $default) {
    var transitionSpec_0 = transitionSpec;
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -64433887, 'CC(animateColor)P(2)67@3230L31,68@3297L58,70@3368L70:Transition.kt#xbi5r1');
    if (!(($default & 1) === 0)) {
      transitionSpec_0 = animateColor$lambda;
    }
    if (!(($default & 2) === 0))
      label_0 = 'ColorAnimation';
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(targetValueByState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_0, 112 & $changed >> 6).value_1);
    sourceInformationMarkerStart($composer_0, -1791410757, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_ga7h3f_k$(colorSpace);
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
      var value = get_VectorConverter_3(Companion_getInstance_8())(colorSpace);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var typeConverter = tmp1_group;
    // Inline function 'androidx.compose.animation.core.animateValue' call
    var $changed_0 = 14 & $changed | 896 & $changed << 3 | 7168 & $changed << 3 | 57344 & $changed << 3;
    var transitionSpec_1 = transitionSpec_0;
    var label_1 = label_0;
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 1143035377, 'CC(animateValue)P(3,2)1848@78638L32,1855@79111L49,1855@79092L75,1856@79207L45,1856@79192L67,1858@79272L89:Transition.kt#pdpnli');
    if (!((0 & 2) === 0)) {
      transitionSpec_1 = animateColor$lambda_0;
    }
    if (!((0 & 4) === 0))
      label_1 = 'ValueAnimation';
    var tmp_1;
    if (!_this__u8e3s4.get_isSeeking_vjb393_k$()) {
      $composer_1.startReplaceGroup_5hh8aj_k$(1666599280);
      sourceInformation($composer_1, '1844@78495L67');
      sourceInformationMarkerStart($composer_1, -1054611820, 'CC(remember):Transition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($changed_0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(_this__u8e3s4) || ($changed_0 & 6) === 4;
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        var tmp0 = Companion_getInstance_11();
        var tmp$ret$5;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Companion.withoutReadObservation' call
          var previousSnapshot = tmp0.get_currentThreadSnapshot_y07jj6_k$();
          var observer = previousSnapshot == null ? null : previousSnapshot.get_readObserver_t4nv53_k$();
          var newSnapshot = tmp0.makeCurrentNonObservable_yxji5w_k$(previousSnapshot);
          try {
            tmp$ret$5 = _this__u8e3s4.get_currentState_snihnl_k$();
            break $l$block;
          }finally {
            tmp0.restoreNonObservable_baklka_k$(previousSnapshot, newSnapshot, observer);
          }
        }
        var value_0 = tmp$ret$5;
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      $composer_1.endReplaceGroup_ek144q_k$();
      tmp_1 = tmp1_group_0;
    } else {
      $composer_1.startReplaceGroup_5hh8aj_k$(1666853325);
      $composer_1.endReplaceGroup_ek144q_k$();
      tmp_1 = _this__u8e3s4.get_currentState_snihnl_k$();
    }
    var initialState = tmp_1;
    var initialValue = targetValueByState(initialState, $composer_1, 112 & $changed_0 >> 9);
    sourceInformationMarkerStart($composer_1, -1054592126, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_1 = ($changed_0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(_this__u8e3s4) || ($changed_0 & 6) === 4;
    // Inline function 'kotlin.let' call
    var it_1 = $composer_1.rememberedValue_4dg93v_k$();
    var tmp_4;
    if (invalid_1 || it_1 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
      var value_1 = derivedStateOf(animateColor$lambda_1(_this__u8e3s4));
      $composer_1.updateRememberedValue_l1wh71_k$(value_1);
      tmp_4 = value_1;
    } else {
      tmp_4 = it_1;
    }
    var tmp_5 = tmp_4;
    var tmp3_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
    sourceInformationMarkerEnd($composer_1);
    var targetValue = targetValueByState(tmp3_group.get_value_j01efc_k$(), $composer_1, 112 & $changed_0 >> 9);
    var tmp_6 = transitionSpec_1;
    sourceInformationMarkerStart($composer_1, -1054589058, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_2 = ($changed_0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(_this__u8e3s4) || ($changed_0 & 6) === 4;
    // Inline function 'kotlin.let' call
    var it_2 = $composer_1.rememberedValue_4dg93v_k$();
    var tmp_7;
    if (invalid_2 || it_2 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
      var value_2 = derivedStateOf(animateColor$lambda_2(_this__u8e3s4));
      $composer_1.updateRememberedValue_l1wh71_k$(value_2);
      tmp_7 = value_2;
    } else {
      tmp_7 = it_2;
    }
    var tmp_8 = tmp_7;
    var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
    sourceInformationMarkerEnd($composer_1);
    var animationSpec = tmp_6(tmp4_group.get_value_j01efc_k$(), $composer_1, 112 & $changed_0 >> 3);
    var tmp0_0 = createTransitionAnimation(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label_1, $composer_1, 14 & $changed_0 | 57344 & $changed_0 << 9 | 458752 & $changed_0 << 6);
    sourceInformationMarkerEnd($composer_1);
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  function animateColor$lambda(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-781456724);
    if (isTraceInProgress()) {
      traceEventStart(-781456724, $changed, -1, 'androidx.compose.animation.animateColor.<anonymous> (Transition.kt:62)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function animateColor$lambda_0(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-2137771706);
    if (isTraceInProgress()) {
      traceEventStart(-2137771706, $changed, -1, 'androidx.compose.animation.core.animateValue.<anonymous> (Transition.kt:1834)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function animateColor$lambda_1($this) {
    return function () {
      return $this.get_targetState_kri3mx_k$();
    };
  }
  function animateColor$lambda_2($this) {
    return function () {
      return $this.get_segment_xwnoei_k$();
    };
  }
  function get_platformFlingScrollFriction() {
    return platformFlingScrollFriction;
  }
  var platformFlingScrollFriction;
  function rememberSplineBasedDecay($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1838429038, 'C(rememberSplineBasedDecay)33@1347L7,34@1366L114:SplineBasedDecayAnimationSpec.nonAndroid.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(-1838429038, $changed, -1, 'androidx.compose.animation.rememberSplineBasedDecay (SplineBasedDecayAnimationSpec.nonAndroid.kt:30)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    var tmp1_remember$arg$0 = density.get_density_qy0267_k$();
    sourceInformationMarkerStart($composer_0, -1498736732, 'CC(remember):SplineBasedDecayAnimationSpec.nonAndroid.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_i8bvic_k$(tmp1_remember$arg$0);
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
      var value = generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp2_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp2_group;
  }
  function NoOp() {
  }
  protoOf(NoOp).equals = function (other) {
    if (!(other instanceof NoOp))
      return false;
    other instanceof NoOp || THROW_CCE();
    return true;
  };
  protoOf(NoOp).hashCode = function () {
    return 0;
  };
  protoOf(NoOp).toString = function () {
    return '@androidx.compose.animation.internal.NoOp(' + ')';
  };
  //region block: post-declaration
  protoOf(RenderInTransitionOverlayNode).onMeasureResultChanged_ipbzyg_k$ = onMeasureResultChanged;
  protoOf(RenderInTransitionOverlayNode).get_providedValues_crrbpu_k$ = get_providedValues;
  protoOf(RenderInTransitionOverlayNode).provide_fhfib2_k$ = provide;
  protoOf(RenderInTransitionOverlayNode).get_current_2exe6q_k$ = get_current;
  protoOf(SharedBoundsNode).isPlacementApproachInProgress_3haoks_k$ = isPlacementApproachInProgress;
  protoOf(SharedBoundsNode).minApproachIntrinsicWidth_kl18vr_k$ = minApproachIntrinsicWidth;
  protoOf(SharedBoundsNode).minApproachIntrinsicHeight_ophp8g_k$ = minApproachIntrinsicHeight;
  protoOf(SharedBoundsNode).maxApproachIntrinsicWidth_haaviz_k$ = maxApproachIntrinsicWidth;
  protoOf(SharedBoundsNode).maxApproachIntrinsicHeight_cs57u6_k$ = maxApproachIntrinsicHeight;
  protoOf(SharedBoundsNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth;
  protoOf(SharedBoundsNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight;
  protoOf(SharedBoundsNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth;
  protoOf(SharedBoundsNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight;
  protoOf(SharedBoundsNode).onMeasureResultChanged_ipbzyg_k$ = onMeasureResultChanged;
  protoOf(SharedBoundsNode).provide_fhfib2_k$ = provide;
  protoOf(SharedBoundsNode).get_current_2exe6q_k$ = get_current;
  protoOf(SharedTransitionScopeImpl).renderInSharedTransitionScopeOverlay$default_q1dfol_k$ = renderInSharedTransitionScopeOverlay$default;
  protoOf(SharedTransitionScopeImpl).sharedElement$default_34wry7_k$ = sharedElement$default;
  protoOf(SharedTransitionScopeImpl).sharedBounds$default_3tkm9k_k$ = sharedBounds$default;
  protoOf(SharedTransitionScopeImpl).sharedElementWithCallerManagedVisibility$default_ag2qj1_k$ = sharedElementWithCallerManagedVisibility$default;
  protoOf(SharedTransitionScopeImpl).localLookaheadPositionOf$default_10xwp7_k$ = localLookaheadPositionOf$default;
  protoOf(SharedTransitionScopeImpl).scaleInSharedContentToBounds_8dgsag_k$ = scaleInSharedContentToBounds;
  protoOf(SharedTransitionScopeImpl).scaleInSharedContentToBounds$default_sbqsn0_k$ = scaleInSharedContentToBounds$default;
  protoOf(SharedTransitionScopeImpl).scaleOutSharedContentToBounds_u503ir_k$ = scaleOutSharedContentToBounds;
  protoOf(SharedTransitionScopeImpl).scaleOutSharedContentToBounds$default_ouu5yp_k$ = scaleOutSharedContentToBounds$default;
  //endregion
  //region block: init
  androidx_compose_animation_AnimatedVisibilityScopeImpl$stable = 8;
  androidx_compose_animation_RenderInTransitionOverlayNodeElement$stable = 0;
  androidx_compose_animation_RenderInTransitionOverlayNode$stable = 8;
  androidx_compose_animation_SharedElement$stable = 8;
  androidx_compose_animation_SharedElementInternalState$stable = 8;
  androidx_compose_animation_TargetData$stable = 0;
  androidx_compose_animation_AndroidFlingSpline_FlingResult$stable = 0;
  androidx_compose_animation_AndroidFlingSpline$stable = 8;
  androidx_compose_animation_SplineBasedFloatDecayAnimationSpec$stable = 0;
  platformFlingScrollFriction = 0.015;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SplineBasedFloatDecayAnimationSpec;
  _.$_$.b = get_VectorConverter_3;
  _.$_$.c = animateColorAsState;
  _.$_$.d = expandVertically;
  _.$_$.e = fadeIn;
  _.$_$.f = fadeOut;
  _.$_$.g = rememberSplineBasedDecay;
  _.$_$.h = shrinkVertically;
  _.$_$.i = splineBasedDecay;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-animation-animation.js.map
