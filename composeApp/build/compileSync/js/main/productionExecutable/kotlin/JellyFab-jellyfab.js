(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-material3-material3.js', './kotlinx-coroutines-core.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./kotlinx-coroutines-core.js'), require('./skiko-kjs.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab-jellyfab'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'JellyFab-jellyfab'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab-jellyfab'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'JellyFab-jellyfab'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab-jellyfab'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'JellyFab-jellyfab'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab-jellyfab'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'JellyFab-jellyfab'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab-jellyfab'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'JellyFab-jellyfab'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab-jellyfab'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'JellyFab-jellyfab'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab-jellyfab'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'JellyFab-jellyfab'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab-jellyfab'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'JellyFab-jellyfab'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab-jellyfab'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'JellyFab-jellyfab'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material3-material3'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab-jellyfab'. Its dependency 'compose-multiplatform-core-compose-material3-material3' was not found. Please, check whether 'compose-multiplatform-core-compose-material3-material3' is loaded prior to 'JellyFab-jellyfab'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab-jellyfab'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'JellyFab-jellyfab'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab-jellyfab'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'JellyFab-jellyfab'.");
    }
    globalThis['JellyFab-jellyfab'] = factory(typeof globalThis['JellyFab-jellyfab'] === 'undefined' ? {} : globalThis['JellyFab-jellyfab'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['kotlinx-coroutines-core'], globalThis['skiko-kjs']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ensureNotNull = kotlin_kotlin.$_$.wd;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var Builder = kotlin_org_jetbrains_compose_ui_ui.$_$.t;
  var Long = kotlin_kotlin.$_$.hd;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b4;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c4;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y3;
  var PathBuilder = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h;
  var Unit_instance = kotlin_kotlin.$_$.b3;
  var VOID = kotlin_kotlin.$_$.b;
  var emptyList = kotlin_kotlin.$_$.p4;
  var listOf = kotlin_kotlin.$_$.u5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var toRawBits = kotlin_kotlin.$_$.me;
  var fromInt = kotlin_kotlin.$_$.b8;
  var shiftLeft = kotlin_kotlin.$_$.h8;
  var bitwiseAnd = kotlin_kotlin.$_$.t7;
  var bitwiseOr = kotlin_kotlin.$_$.u7;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var shiftRight = kotlin_kotlin.$_$.j8;
  var convertToInt = kotlin_kotlin.$_$.x7;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.u2;
  var floatFromBits = kotlin_kotlin.$_$.a9;
  var coerceIn = kotlin_kotlin.$_$.ra;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.n2;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.y9;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.d2;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.l1;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c1;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var Companion_getInstance_2 = kotlin_androidx_compose_runtime_runtime.$_$.l2;
  var THROW_CCE = kotlin_kotlin.$_$.md;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var Canvas = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a1;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var getOrNull = kotlin_kotlin.$_$.c5;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l3;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b4;
  var Offset__minus_impl_hoj2c0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c1;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var createCompositionCoroutineScope = kotlin_androidx_compose_runtime_runtime.$_$.e1;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var LaunchedEffect = kotlin_androidx_compose_runtime_runtime.$_$.r;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.x9;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.r8;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui.$_$.t9;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.k1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.h;
  var isInterface = kotlin_kotlin.$_$.q9;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.h2;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.j2;
  var _Updater___get_composer__impl__9ty7av = kotlin_androidx_compose_runtime_runtime.$_$.i2;
  var equals = kotlin_kotlin.$_$.z8;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j1;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var derivedStateOf = kotlin_androidx_compose_runtime_runtime.$_$.j1;
  var firstOrNull = kotlin_kotlin.$_$.v4;
  var androidx_compose_animation_core_Animatable$stableprop_getter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.t;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b1;
  var animateFloatAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.v;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.x;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u3;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f1;
  var funMutableInteractionSource = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i1;
  var Box = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var checkIndexOverflow = kotlin_kotlin.$_$.a4;
  var coerceAtLeast = kotlin_kotlin.$_$.la;
  var Icon = kotlin_org_jetbrains_compose_material3_material3.$_$.c;
  var offset = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var get_CircleShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.p;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.m2;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o2;
  var FloatingActionButtonDefaults_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.m;
  var androidx_compose_material3_FloatingActionButtonDefaults$stableprop_getter = kotlin_org_jetbrains_compose_material3_material3.$_$.h;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.c;
  var FloatingActionButton = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.za;
  var getLocalDelegateReference = kotlin_kotlin.$_$.c9;
  var KProperty0 = kotlin_kotlin.$_$.bb;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.s2;
  var CoroutineImpl = kotlin_kotlin.$_$.m7;
  var protoOf = kotlin_kotlin.$_$.z9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x6;
  var initMetadataForLambda = kotlin_kotlin.$_$.m9;
  var Animatable_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b2;
  var Collection = kotlin_kotlin.$_$.j3;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.x2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.c;
  var toDuration = kotlin_kotlin.$_$.vc;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var _IntOffset___init__impl__rq8h7b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.j9;
  var Dp__toString_impl_kcddez = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var getNumberHashCode = kotlin_kotlin.$_$.d9;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var equalsLong = kotlin_kotlin.$_$.a8;
  var initMetadataForClass = kotlin_kotlin.$_$.h9;
  var toString = kotlin_kotlin.$_$.ba;
  var hashCode = kotlin_kotlin.$_$.g9;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var numberToLong = kotlin_kotlin.$_$.g8;
  var multiply = kotlin_kotlin.$_$.e8;
  var add = kotlin_kotlin.$_$.s7;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i;
  var get_LinearOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a1;
  var get_indices = kotlin_kotlin.$_$.g5;
  var delay_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var get_lastIndex = kotlin_kotlin.$_$.m5;
  var first = kotlin_kotlin.$_$.y4;
  var last = kotlin_kotlin.$_$.r5;
  var listOf_0 = kotlin_kotlin.$_$.v5;
  var until = kotlin_kotlin.$_$.wa;
  var get_DefaultStrokeLineCap = kotlin_org_jetbrains_compose_ui_ui.$_$.q;
  var get_DefaultStrokeLineJoin = kotlin_org_jetbrains_compose_ui_ui.$_$.r;
  var Paint = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x3;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.x4;
  var FilterBlurMode_NORMAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l2;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(JellyFab$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(JellyFab$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(JellyFab$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(JellyFab$slambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(JellyFab$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(JellyFab$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(JellyFab$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(JellyFab$lambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(JellyFab$lambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(JellyFab$lambda$slambda_5, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(animatedSecondaryToggleIcon$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($JellyFab$collapseMenuCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JellyFabConfig, 'JellyFabConfig', JellyFabConfig);
  initMetadataForClass(JellyFabItem, 'JellyFabItem');
  initMetadataForClass(JellyFabState, 'JellyFabState');
  initMetadataForLambda(expandPrimaryLayer$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(expandPrimaryLayer$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(expandPrimaryLayer$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(collapsePrimaryLayer$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(collapsePrimaryLayer$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(collapsePrimaryLayer$slambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(collapsePrimaryLayer$slambda$slambda_5, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(collapsePrimaryLayer$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(expandSecondaryLayer$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(expandSecondaryLayer$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(collapseSecondaryLayer$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(collapseSecondaryLayer$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($playDoubleBounceCOROUTINE$, CoroutineImpl);
  //endregion
  var io_github_iprashantpanwar_jellyfab_generated_resources_Res_drawable$stable;
  var io_github_iprashantpanwar_jellyfab_generated_resources_Res_string$stable;
  var io_github_iprashantpanwar_jellyfab_generated_resources_Res_array$stable;
  var io_github_iprashantpanwar_jellyfab_generated_resources_Res_plurals$stable;
  var io_github_iprashantpanwar_jellyfab_generated_resources_Res_font$stable;
  var io_github_iprashantpanwar_jellyfab_generated_resources_Res$stable;
  var _CloseIcon;
  function get_CloseIcon() {
    if (!(_CloseIcon == null)) {
      return ensureNotNull(_CloseIcon);
    }
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(32);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(32);
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder('CloseIcon', tmp, tmp$ret$1, 24.0, 24.0);
    var tmp2 = new SolidColor(Color(new Long(-1, 0)));
    var tmp4 = new SolidColor(Color(new Long(-1, 0)));
    var tmp8 = Companion_getInstance().y4x_1;
    var tmp10 = Companion_getInstance_0().c4y_1;
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var pathFillType = Companion_getInstance_1().k4x_1;
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with = new PathBuilder();
    $this$with.v44(16.0, 16.0);
    $this$with.x44(12.0, 12.0);
    $this$with.v44(12.0, 12.0);
    $this$with.x44(8.0, 8.0);
    $this$with.v44(12.0, 12.0);
    $this$with.x44(16.0, 8.0);
    $this$with.v44(12.0, 12.0);
    $this$with.x44(8.0, 16.0);
    var tmp$ret$5 = $this$with.o57();
    this_0.c73(tmp$ret$5, pathFillType, '', tmp2, 1.0, tmp4, 1.0, 2.0, tmp8, tmp10, 4.0);
    _CloseIcon = this_0.o2e();
    return ensureNotNull(_CloseIcon);
  }
  function evenArcAngles(startDeg, endDeg, count) {
    startDeg = startDeg === VOID ? 270.0 : startDeg;
    endDeg = endDeg === VOID ? 180.0 : endDeg;
    if (count <= 0)
      return emptyList();
    if (count === 1)
      return listOf(startDeg);
    var step = (endDeg - startDeg) / (count - 1 | 0);
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$(count);
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0 = startDeg + index * step;
        list.h(tmp$ret$0);
      }
       while (inductionVariable < count);
    return list;
  }
  function arcOffset(angleDeg, radius) {
    var rad = toRadians(angleDeg);
    // Inline function 'kotlin.math.cos' call
    var tmp0 = Math.cos(rad) * radius;
    // Inline function 'kotlin.math.sin' call
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = -Math.sin(rad) * radius;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$2);
  }
  function lerpOffset(a, b, t) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(a);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(b);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    var tmp$ret$7 = floatFromBits(bits_0);
    var tmp0 = lerp(tmp, tmp$ret$7, t);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(a);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(b);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    var tmp$ret$15 = floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = lerp(tmp_0, tmp$ret$15, t);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$16 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$16);
  }
  function lerp(a, b, t) {
    return a + (b - a) * coerceIn(t, 0.0, 1.0);
  }
  function normalizeAngleRad(a) {
    var x = a % (2 * 3.141592653589793);
    if (x > 3.141592653589793)
      x = x - 2 * 3.141592653589793;
    if (x < -3.141592653589793)
      x = x + 2 * 3.141592653589793;
    return x;
  }
  function JellyBlob(modifier, size_0, color, bulges, shadowOpacity, shadowBlurFactor, bulgeAngles, bounceFactor, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t24(1839365345);
    sourceInformation($composer_0, 'C(JellyBlob)P(4,7:c#ui.unit.Dp,3:c#ui.graphics.Color,2,6,5,1)57@2246L2443,57@2218L2471:JellyBlob.kt#81ts31');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.j25(modifier_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m25(_Dp___get_value__impl__geb1vb(size_0)) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.n25(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color))) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.p25(bulges) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.m25(shadowOpacity) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.m25(shadowBlurFactor) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.p25(bulgeAngles) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.m25(bounceFactor) ? 8388608 : 4194304);
    if ($composer_0.q25(!(($dirty & 4793491) === 4793490), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(1839365345, $dirty, -1, 'io.github.iprashantpanwar.jellyfab.JellyBlob (JellyBlob.kt:56)');
      }
      var tmp = size(modifier_0._v, size_0);
      sourceInformationMarkerStart($composer_0, -1896417844, 'CC(remember):JellyBlob.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!(!!(!!($composer_0.p25(bulges) | ($dirty & 57344) === 16384) | ($dirty & 896) === 256) | ($dirty & 458752) === 131072) | $composer_0.p25(bulgeAngles)) | ($dirty & 29360128) === 8388608);
      // Inline function 'kotlin.let' call
      var it = tmp0.h25();
      var tmp_0;
      if (invalid || it === Companion_getInstance_2().i24_1) {
        var value = JellyBlob$lambda(bulges, shadowOpacity, color, shadowBlurFactor, bulgeAngles, bounceFactor);
        tmp0.i25(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      Canvas(tmp, tmp0_group, $composer_0, 0);
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
      tmp1_safe_receiver.s2q(JellyBlob$lambda_0(modifier_0, size_0, color, bulges, shadowOpacity, shadowBlurFactor, bulgeAngles, bounceFactor, $changed, $default));
    }
  }
  function JellyBlob$lambda($bulges, $shadowOpacity, $color, $shadowBlurFactor, $bulgeAngles, $bounceFactor) {
    return function ($this$Canvas) {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      var this_0 = $this$Canvas.z3t();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var w = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      var this_1 = $this$Canvas.z3t();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var h = floatFromBits(bits_0);
      var cx = w / 2.0;
      var cy = h / 2.0;
      // Inline function 'kotlin.math.min' call
      var baseR = Math.min(w, h) * 0.45;
      var tmp0_safe_receiver = getOrNull($bulges, 0);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1();
      var topBulge = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
      var tmp2_safe_receiver = getOrNull($bulges, 1);
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.v1();
      var diaBulge = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
      var tmp4_safe_receiver = getOrNull($bulges, 2);
      var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.v1();
      var leftBulge = tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs;
      // Inline function 'kotlin.math.abs' call
      var tmp = Math.abs(topBulge);
      // Inline function 'kotlin.math.abs' call
      var tmp_0 = tmp + Math.abs(leftBulge);
      // Inline function 'kotlin.math.abs' call
      var bulgeInfluence = (tmp_0 + Math.abs(diaBulge)) / 3.0;
      var shadowSpread = 1.1 - 0.08 * bulgeInfluence;
      var shadowAlpha = $shadowOpacity + 0.1 * bulgeInfluence;
      var shadowLift = -topBulge * baseR * 0.1;
      var shadowBlurPaint = createBlurPaint(Color__copy$default_impl_ectz3s($color, shadowAlpha), baseR * $shadowBlurFactor * shadowSpread);
      // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
      var canvas = $this$Canvas.a54().s47();
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = cy + baseR * 0.1 + shadowLift;
      var v1 = fromInt(toRawBits(cx));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$12 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      var tmp$ret$13 = _Offset___init__impl__c168vi(tmp$ret$12);
      canvas.a4t(tmp$ret$13, baseR * shadowSpread, shadowBlurPaint);
      var sampleCount = 36;
      // Inline function 'kotlin.collections.MutableList' call
      var list = ArrayList_init_$Create$(sampleCount);
      // Inline function 'kotlin.repeat' call
      var inductionVariable = 0;
      if (inductionVariable < sampleCount)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var a = -3.141592653589793 / 2 + index * (2 * 3.141592653589793 / sampleCount);
          // Inline function 'kotlin.math.cos' call
          var tmp0 = cx + baseR * Math.cos(a);
          // Inline function 'kotlin.math.sin' call
          // Inline function 'androidx.compose.ui.geometry.Offset' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var val2_0 = cy + baseR * Math.sin(a);
          var v1_0 = fromInt(toRawBits(tmp0));
          var v2_0 = fromInt(toRawBits(val2_0));
          var tmp$ret$18 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
          var tmp$ret$19 = _Offset___init__impl__c168vi(tmp$ret$18);
          var tmp$ret$20 = new Offset(tmp$ret$19);
          list.h(tmp$ret$20);
        }
         while (inductionVariable < sampleCount);
      var pts = list;
      var iterator = $bulgeAngles.i();
      var index_0 = 0;
      while (iterator.j()) {
        var idx = index_0;
        index_0 = index_0 + 1 | 0;
        var deg = iterator.k();
        // Inline function 'kotlin.collections.map' call
        var this_2 = $bulges;
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
        var _iterator__ex2g4s = this_2.i();
        while (_iterator__ex2g4s.j()) {
          var item = _iterator__ex2g4s.k();
          var tmp$ret$24 = item.v1();
          destination.h(tmp$ret$24);
        }
        var tmp6_elvis_lhs = getOrNull(destination, idx);
        var v = tmp6_elvis_lhs == null ? 0.0 : tmp6_elvis_lhs;
        if (!(v === 0.0)) {
          var push = baseR * $bounceFactor * v;
          var aRad = toRadians(deg);
          var inductionVariable_0 = 0;
          var last = pts.l() - 1 | 0;
          if (inductionVariable_0 <= last)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var p = pts.m(i).p3t_1;
              // Inline function 'androidx.compose.ui.geometry.Offset' call
              // Inline function 'androidx.compose.ui.util.packFloats' call
              var v1_1 = fromInt(toRawBits(cx));
              var v2_1 = fromInt(toRawBits(cy));
              var tmp$ret$27 = bitwiseOr(shiftLeft(v1_1, 32), bitwiseAnd(v2_1, new Long(-1, 0)));
              var tmp$ret$28 = _Offset___init__impl__c168vi(tmp$ret$27);
              var vec = Offset__minus_impl_hoj2c0(p, tmp$ret$28);
              // Inline function 'androidx.compose.ui.geometry.Offset.y' call
              // Inline function 'androidx.compose.ui.util.unpackFloat2' call
              var value_1 = _Offset___get_packedValue__impl__xh2k8q(vec);
              // Inline function 'androidx.compose.ui.util.floatFromBits' call
              // Inline function 'kotlin.fromBits' call
              var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
              var tmp0_0 = floatFromBits(bits_1);
              // Inline function 'androidx.compose.ui.geometry.Offset.x' call
              // Inline function 'androidx.compose.ui.util.unpackFloat1' call
              var value_2 = _Offset___get_packedValue__impl__xh2k8q(vec);
              // Inline function 'androidx.compose.ui.util.floatFromBits' call
              // Inline function 'kotlin.fromBits' call
              var bits_2 = convertToInt(shiftRight(value_2, 32));
              // Inline function 'kotlin.math.atan2' call
              var x = floatFromBits(bits_2);
              var pAng = Math.atan2(tmp0_0, x);
              var diff = normalizeAngleRad(pAng - aRad);
              // Inline function 'kotlin.math.exp' call
              var x_0 = -(diff * diff) / (2 * 0.6 * 0.6);
              var fall = Math.exp(x_0);
              // Inline function 'androidx.compose.ui.geometry.Offset.x' call
              // Inline function 'androidx.compose.ui.util.unpackFloat1' call
              var value_3 = _Offset___get_packedValue__impl__xh2k8q(vec);
              // Inline function 'androidx.compose.ui.util.floatFromBits' call
              // Inline function 'kotlin.fromBits' call
              var bits_3 = convertToInt(shiftRight(value_3, 32));
              var tmp_1 = floatFromBits(bits_3);
              // Inline function 'androidx.compose.ui.geometry.Offset.x' call
              // Inline function 'androidx.compose.ui.util.unpackFloat1' call
              var value_4 = _Offset___get_packedValue__impl__xh2k8q(vec);
              // Inline function 'androidx.compose.ui.util.floatFromBits' call
              // Inline function 'kotlin.fromBits' call
              var bits_4 = convertToInt(shiftRight(value_4, 32));
              var tmp_2 = tmp_1 * floatFromBits(bits_4);
              // Inline function 'androidx.compose.ui.geometry.Offset.y' call
              // Inline function 'androidx.compose.ui.util.unpackFloat2' call
              var value_5 = _Offset___get_packedValue__impl__xh2k8q(vec);
              // Inline function 'androidx.compose.ui.util.floatFromBits' call
              // Inline function 'kotlin.fromBits' call
              var bits_5 = convertToInt(bitwiseAnd(value_5, new Long(-1, 0)));
              var tmp_3 = floatFromBits(bits_5);
              // Inline function 'androidx.compose.ui.geometry.Offset.y' call
              // Inline function 'androidx.compose.ui.util.unpackFloat2' call
              var value_6 = _Offset___get_packedValue__impl__xh2k8q(vec);
              // Inline function 'androidx.compose.ui.util.floatFromBits' call
              // Inline function 'kotlin.fromBits' call
              var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
              // Inline function 'kotlin.math.sqrt' call
              var x_1 = tmp_2 + tmp_3 * floatFromBits(bits_6);
              var len = Math.sqrt(x_1);
              var newLen = len + push * fall;
              // Inline function 'kotlin.math.cos' call
              var tmp0_1 = cx + Math.cos(pAng) * newLen;
              // Inline function 'kotlin.math.sin' call
              // Inline function 'androidx.compose.ui.geometry.Offset' call
              // Inline function 'androidx.compose.ui.util.packFloats' call
              var val2_1 = cy + Math.sin(pAng) * newLen;
              var v1_2 = fromInt(toRawBits(tmp0_1));
              var v2_2 = fromInt(toRawBits(val2_1));
              var tmp$ret$58 = bitwiseOr(shiftLeft(v1_2, 32), bitwiseAnd(v2_2, new Long(-1, 0)));
              var tmp$ret$59 = _Offset___init__impl__c168vi(tmp$ret$58);
              pts.i2(i, new Offset(tmp$ret$59));
            }
             while (inductionVariable_0 <= last);
        }
      }
      // Inline function 'kotlin.apply' call
      var this_3 = Path();
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_4 = pts.m(0).p3t_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_7 = _Offset___get_packedValue__impl__xh2k8q(this_4);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_7 = convertToInt(shiftRight(value_7, 32));
      var tmp_4 = floatFromBits(bits_7);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_5 = pts.m(0).p3t_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_8 = _Offset___get_packedValue__impl__xh2k8q(this_5);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_8 = convertToInt(bitwiseAnd(value_8, new Long(-1, 0)));
      var tmp$ret$67 = floatFromBits(bits_8);
      this_3.s4w(tmp_4, tmp$ret$67);
      var inductionVariable_1 = 1;
      var last_0 = pts.l();
      if (inductionVariable_1 < last_0)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var prev = pts.m(i_0 - 1 | 0).p3t_1;
          var cur = pts.m(i_0).p3t_1;
          // Inline function 'androidx.compose.ui.geometry.Offset.x' call
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value_9 = _Offset___get_packedValue__impl__xh2k8q(prev);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          // Inline function 'kotlin.fromBits' call
          var bits_9 = convertToInt(shiftRight(value_9, 32));
          var tmp_5 = floatFromBits(bits_9);
          // Inline function 'androidx.compose.ui.geometry.Offset.x' call
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value_10 = _Offset___get_packedValue__impl__xh2k8q(cur);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          // Inline function 'kotlin.fromBits' call
          var bits_10 = convertToInt(shiftRight(value_10, 32));
          var tmp0_2 = (tmp_5 + floatFromBits(bits_10)) / 2;
          // Inline function 'androidx.compose.ui.geometry.Offset.y' call
          // Inline function 'androidx.compose.ui.util.unpackFloat2' call
          var value_11 = _Offset___get_packedValue__impl__xh2k8q(prev);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          // Inline function 'kotlin.fromBits' call
          var bits_11 = convertToInt(bitwiseAnd(value_11, new Long(-1, 0)));
          var tmp_6 = floatFromBits(bits_11);
          // Inline function 'androidx.compose.ui.geometry.Offset.y' call
          // Inline function 'androidx.compose.ui.util.unpackFloat2' call
          var value_12 = _Offset___get_packedValue__impl__xh2k8q(cur);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          // Inline function 'kotlin.fromBits' call
          var bits_12 = convertToInt(bitwiseAnd(value_12, new Long(-1, 0)));
          // Inline function 'androidx.compose.ui.geometry.Offset' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var val2_2 = (tmp_6 + floatFromBits(bits_12)) / 2;
          var v1_3 = fromInt(toRawBits(tmp0_2));
          var v2_3 = fromInt(toRawBits(val2_2));
          var tmp$ret$84 = bitwiseOr(shiftLeft(v1_3, 32), bitwiseAnd(v2_3, new Long(-1, 0)));
          var mid = _Offset___init__impl__c168vi(tmp$ret$84);
          // Inline function 'androidx.compose.ui.geometry.Offset.x' call
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value_13 = _Offset___get_packedValue__impl__xh2k8q(prev);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          // Inline function 'kotlin.fromBits' call
          var bits_13 = convertToInt(shiftRight(value_13, 32));
          var tmp_7 = floatFromBits(bits_13);
          // Inline function 'androidx.compose.ui.geometry.Offset.y' call
          // Inline function 'androidx.compose.ui.util.unpackFloat2' call
          var value_14 = _Offset___get_packedValue__impl__xh2k8q(prev);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          // Inline function 'kotlin.fromBits' call
          var bits_14 = convertToInt(bitwiseAnd(value_14, new Long(-1, 0)));
          var tmp_8 = floatFromBits(bits_14);
          // Inline function 'androidx.compose.ui.geometry.Offset.x' call
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value_15 = _Offset___get_packedValue__impl__xh2k8q(mid);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          // Inline function 'kotlin.fromBits' call
          var bits_15 = convertToInt(shiftRight(value_15, 32));
          var tmp_9 = floatFromBits(bits_15);
          // Inline function 'androidx.compose.ui.geometry.Offset.y' call
          // Inline function 'androidx.compose.ui.util.unpackFloat2' call
          var value_16 = _Offset___get_packedValue__impl__xh2k8q(mid);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          // Inline function 'kotlin.fromBits' call
          var bits_16 = convertToInt(bitwiseAnd(value_16, new Long(-1, 0)));
          var tmp$ret$101 = floatFromBits(bits_16);
          this_3.x4w(tmp_7, tmp_8, tmp_9, tmp$ret$101);
        }
         while (inductionVariable_1 < last_0);
      this_3.a2e();
      var path = this_3;
      $this$Canvas.k54(path, $color);
      return Unit_instance;
    };
  }
  function JellyBlob$lambda_0($modifier, $size, $color, $bulges, $shadowOpacity, $shadowBlurFactor, $bulgeAngles, $bounceFactor, $$changed, $$default) {
    return function ($composer, $force) {
      JellyBlob($modifier._v, $size, $color, $bulges, $shadowOpacity, $shadowBlurFactor, $bulgeAngles, $bounceFactor, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function JellyFab(modifier, state, fabSize, miniFabSize, fabColor, secondLayerFabColor, primaryItems, secondaryItems, showScrim, config, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var state_0 = {_v: state};
    var fabSize_0 = {_v: new Dp(fabSize)};
    var miniFabSize_0 = {_v: new Dp(miniFabSize)};
    var fabColor_0 = {_v: new Color_0(fabColor)};
    var secondLayerFabColor_0 = {_v: new Color_0(secondLayerFabColor)};
    var secondaryItems_0 = {_v: secondaryItems};
    var showScrim_0 = {_v: showScrim};
    var config_0 = {_v: config};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t24(-596373971);
    sourceInformation($composer_0, 'C(JellyFab)P(4,9,2:c#ui.unit.Dp,3:c#ui.unit.Dp,1:c#ui.graphics.Color,6:c#ui.graphics.Color,5,7,8)121@4817L24,124@4924L134,129@5087L147,135@5320L106,142@5519L34,144@5578L56,145@5670L83,145@5639L114,150@5862L817,150@5831L848,184@6763L287,184@6723L327,215@7451L4254:JellyFab.kt#81ts31');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.j25(modifier_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.j25(state_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.m25(_Dp___get_value__impl__geb1vb(fabSize_0._v.q4n_1)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.m25(_Dp___get_value__impl__geb1vb(miniFabSize_0._v.q4n_1)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.n25(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(fabColor_0._v.n4u_1))) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.n25(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(secondLayerFabColor_0._v.n4u_1))) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.p25(primaryItems) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.p25(secondaryItems_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.k25(showScrim_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.j25(config_0._v) ? 536870912 : 268435456);
    if ($composer_0.q25(!(($dirty & 306783379) === 306783378), $dirty & 1)) {
      $composer_0.r24();
      sourceInformation($composer_0, '111@4455L23');
      if (($changed & 1) === 0 || $composer_0.m24()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          state_0._v = rememberJellyFabState(false, false, $composer_0, 0, 3);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$0 = _Dp___init__impl__ms3zkb(72);
          fabSize_0._v = new Dp(tmp$ret$0);
        }
        if (!(($default & 8) === 0)) {
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$1 = _Dp___init__impl__ms3zkb(48);
          miniFabSize_0._v = new Dp(tmp$ret$1);
        }
        if (!(($default & 16) === 0)) {
          fabColor_0._v = new Color_0(Color(new Long(-32890, 0)));
        }
        if (!(($default & 32) === 0)) {
          secondLayerFabColor_0._v = new Color_0(Color(new Long(-9722369, 0)));
        }
        if (!(($default & 128) === 0)) {
          secondaryItems_0._v = emptyList();
        }
        if (!(($default & 256) === 0)) {
          showScrim_0._v = true;
        }
        if (!(($default & 512) === 0)) {
          config_0._v = new JellyFabConfig();
        }
      } else {
        $composer_0.y24();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.s24();
      if (isTraceInProgress()) {
        traceEventStart(-596373971, $dirty, -1, 'io.github.iprashantpanwar.jellyfab.JellyFab (JellyFab.kt:120)');
      }
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 773894976, 'CC(rememberCoroutineScope)608@27648L68:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = JellyFab$lambda_2;
      }
      var composer = $composer_1;
      sourceInformationMarkerStart($composer_1, 683737348, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_1.h25();
      var tmp;
      if (false || it === Companion_getInstance_2().i24_1) {
        var value = createCompositionCoroutineScope(getContext(), composer);
        $composer_1.i25(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      sourceInformationMarkerEnd($composer_1);
      var scope = tmp1_group;
      var tmp0_remember$arg$0 = primaryItems.l();
      sourceInformationMarkerStart($composer_0, -1884718189, 'CC(remember):JellyFab.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.l25(tmp0_remember$arg$0);
      // Inline function 'kotlin.let' call
      var it_0 = tmp0.h25();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance_2().i24_1) {
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var size = primaryItems.l();
        var list = ArrayList_init_$Create$(size);
        // Inline function 'kotlin.repeat' call
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$7 = Animatable(state_0._v.ehw() ? 1.0 : 0.0);
            list.h(tmp$ret$7);
          }
           while (inductionVariable < size);
        var value_0 = list;
        tmp0.i25(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var primaryProgress = tmp1_group_0;
      var tmp2_remember$arg$0 = secondaryItems_0._v.l();
      sourceInformationMarkerStart($composer_0, -1884712960, 'CC(remember):JellyFab.kt#9igjgp');
      var tmp0_0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.l25(tmp2_remember$arg$0);
      // Inline function 'kotlin.let' call
      var it_1 = tmp0_0.h25();
      var tmp_3;
      if (invalid_0 || it_1 === Companion_getInstance_2().i24_1) {
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var size_0 = secondaryItems_0._v.l();
        var list_0 = ArrayList_init_$Create$(size_0);
        // Inline function 'kotlin.repeat' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < size_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp$ret$16 = Animatable(state_0._v.fhw() ? 1.0 : 0.0);
            list_0.h(tmp$ret$16);
          }
           while (inductionVariable_0 < size_0);
        var value_1 = list_0;
        tmp0_0.i25(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp3_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var secondaryProgress = tmp3_group;
      var tmp4_remember$arg$0 = primaryItems.l();
      sourceInformationMarkerStart($composer_0, -1884705545, 'CC(remember):JellyFab.kt#9igjgp');
      var tmp0_1 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_0.l25(tmp4_remember$arg$0);
      // Inline function 'kotlin.let' call
      var it_2 = tmp0_1.h25();
      var tmp_5;
      if (invalid_1 || it_2 === Companion_getInstance_2().i24_1) {
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var size_1 = primaryItems.l();
        var list_1 = ArrayList_init_$Create$(size_1);
        // Inline function 'kotlin.repeat' call
        var inductionVariable_1 = 0;
        if (inductionVariable_1 < size_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var tmp$ret$25 = Animatable(0.0);
            list_1.h(tmp$ret$25);
          }
           while (inductionVariable_1 < size_1);
        var value_2 = list_1;
        tmp0_1.i25(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp5_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var bulges = tmp5_group;
      sourceInformationMarkerStart($composer_0, -1884699249, 'CC(remember):JellyFab.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_3 = this_0.h25();
      var tmp_7;
      if (false || it_3 === Companion_getInstance_2().i24_1) {
        var value_3 = mutableStateOf(false);
        this_0.i25(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp6_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var didRunOnce$delegate = tmp6_group;
      sourceInformationMarkerStart($composer_0, -1884697339, 'CC(remember):JellyFab.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_4 = this_1.h25();
      var tmp_9;
      if (false || it_4 === Companion_getInstance_2().i24_1) {
        var value_4 = Animatable(state_0._v.ehw() ? 0.0 : 45.0);
        this_1.i25(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp7_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var rotationAnim = tmp7_group;
      var tmp_11 = state_0._v.ehw();
      sourceInformationMarkerStart($composer_0, -1884694368, 'CC(remember):JellyFab.kt#9igjgp');
      var tmp0_2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = !!($composer_0.p25(rotationAnim) | (($dirty & 112 ^ 48) > 32 && $composer_0.j25(state_0._v) || ($dirty & 48) === 32));
      // Inline function 'kotlin.let' call
      var it_5 = tmp0_2.h25();
      var tmp_12;
      if (invalid_2 || it_5 === Companion_getInstance_2().i24_1) {
        var value_5 = JellyFab$slambda_0(rotationAnim, state_0, null);
        tmp0_2.i25(value_5);
        tmp_12 = value_5;
      } else {
        tmp_12 = it_5;
      }
      var tmp_13 = tmp_12;
      var tmp8_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      LaunchedEffect(tmp_11, tmp8_group, $composer_0, 0);
      var tmp_14 = state_0._v.ehw();
      sourceInformationMarkerStart($composer_0, -1884687490, 'CC(remember):JellyFab.kt#9igjgp');
      var tmp0_3 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = !!(!!(!!((($dirty & 112 ^ 48) > 32 && $composer_0.j25(state_0._v) || ($dirty & 48) === 32) | $composer_0.p25(primaryProgress)) | $composer_0.p25(bulges)) | ($dirty & 1879048192) === 536870912);
      // Inline function 'kotlin.let' call
      var it_6 = tmp0_3.h25();
      var tmp_15;
      if (invalid_3 || it_6 === Companion_getInstance_2().i24_1) {
        var value_6 = JellyFab$slambda_2(state_0, primaryProgress, bulges, config_0, didRunOnce$delegate, null);
        tmp0_3.i25(value_6);
        tmp_15 = value_6;
      } else {
        tmp_15 = it_6;
      }
      var tmp_16 = tmp_15;
      var tmp9_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      LaunchedEffect(tmp_14, tmp9_group, $composer_0, 0);
      var tmp_17 = state_0._v.fhw();
      sourceInformationMarkerStart($composer_0, -1884659188, 'CC(remember):JellyFab.kt#9igjgp');
      var tmp0_4 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = !!(!!((($dirty & 112 ^ 48) > 32 && $composer_0.j25(state_0._v) || ($dirty & 48) === 32) | $composer_0.p25(secondaryProgress)) | ($dirty & 1879048192) === 536870912);
      // Inline function 'kotlin.let' call
      var it_7 = tmp0_4.h25();
      var tmp_18;
      if (invalid_4 || it_7 === Companion_getInstance_2().i24_1) {
        var value_7 = JellyFab$slambda_4(state_0, secondaryProgress, config_0, null);
        tmp0_4.i25(value_7);
        tmp_18 = value_7;
      } else {
        tmp_18 = it_7;
      }
      var tmp_19 = tmp_18;
      var tmp10_group = (tmp_19 == null ? true : !(tmp_19 == null)) ? tmp_19 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      LaunchedEffect(tmp_17, tmp10_group, $composer_0, 0);
      var tmp0_5 = miniFabSize_0._v.q4n_1;
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var other = fabSize_0._v.q4n_1;
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      var this_2 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_5) - _Dp___get_value__impl__geb1vb(other));
      var centerCorrect = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_2) / 2.0);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_1 = fillMaxSize(modifier_0._v);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1042775818, 'CC(Box)P(2,1,3)71@3424L131:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_3().p6a_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -1159599143, 'CC(Layout)P(!1,2)80@3267L27,83@3433L360:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_3, 0).hashCode();
      var localMap = $composer_3.s25();
      var materialized = materialize($composer_3, modifier_2);
      var tmp0_6 = Companion_getInstance_4().q87_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
      var tmp_20 = $composer_4.j24();
      if (!isInterface(tmp_20, Applier)) {
        invalidApplier();
      }
      $composer_4.a25();
      if ($composer_4.k24()) {
        $composer_4.b25(tmp0_6);
      } else {
        $composer_4.c25();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_4);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_4().v87_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_4().u87_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_4().y87_1;
      // Inline function 'kotlin.with' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.k24() || !equals($this$with.h25(), compositeKeyHash)) {
        $this$with.i25(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).g25(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_4().s87_1);
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 1833054614, 'C72@3469L9:Box.kt#2w3rfo');
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, -975632540, 'C231@7874L3825:JellyFab.kt#81ts31');
      if (showScrim_0._v) {
        $composer_6.p24(-975737011);
        sourceInformation($composer_6, '224@7755L99,221@7610L244');
        var tmp_21 = BoxScopeInstance_instance.jak(Companion_instance);
        var tmp_22 = state_0._v.ehw() || state_0._v.fhw();
        sourceInformationMarkerStart($composer_6, 522720534, 'CC(remember):JellyFab.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_5 = !!(!!(!!($composer_0.p25(scope) | (($dirty & 112 ^ 48) > 32 && $composer_0.j25(state_0._v) || ($dirty & 48) === 32)) | $composer_0.p25(secondaryItems_0._v)) | ($dirty & 1879048192) === 536870912);
        // Inline function 'kotlin.let' call
        var it_8 = $composer_6.h25();
        var tmp_23;
        if (invalid_5 || it_8 === Companion_getInstance_2().i24_1) {
          var value_8 = JellyFab$lambda_3(scope, state_0, secondaryItems_0, config_0);
          $composer_6.i25(value_8);
          tmp_23 = value_8;
        } else {
          tmp_23 = it_8;
        }
        var tmp_24 = tmp_23;
        var tmp0_group = (tmp_24 == null ? true : !(tmp_24 == null)) ? tmp_24 : THROW_CCE();
        sourceInformationMarkerEnd($composer_6);
        Scrim(tmp_21, tmp_22, tmp0_group, $composer_6, 0, 0);
        $composer_6.q24();
      } else {
        $composer_6.p24(-983229649);
        $composer_6.q24();
      }
      var tmp_25 = fillMaxSize(Companion_instance);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$64 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_3 = padding(tmp_25, tmp$ret$64);
      var contentAlignment_0 = Companion_getInstance_3().x6a_1;
      var propagateMinConstraints_0 = false;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, 1042775818, 'CC(Box)P(2,1,3)71@3424L131:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_3 = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment_0 = Companion_getInstance_3().p6a_1;
      if (!((4 & 4) === 0))
        propagateMinConstraints_0 = false;
      var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -1159599143, 'CC(Layout)P(!1,2)80@3267L27,83@3433L360:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_8, 0).hashCode();
      var localMap_0 = $composer_8.s25();
      var materialized_0 = materialize($composer_8, modifier_4);
      var tmp0_7 = Companion_getInstance_4().q87_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
      var tmp_26 = $composer_9.j24();
      if (!isInterface(tmp_26, Applier)) {
        invalidApplier();
      }
      $composer_9.a25();
      if ($composer_9.k24()) {
        $composer_9.b25(tmp0_7);
      } else {
        $composer_9.c25();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_9);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_4().v87_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_4().u87_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_4().y87_1;
      // Inline function 'kotlin.with' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.k24() || !equals($this$with_0.h25(), compositeKeyHash_0)) {
        $this$with_0.i25(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).g25(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_4().s87_1);
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, 1833054614, 'C72@3469L9:Box.kt#2w3rfo');
      var $composer_11 = $composer_10;
      sourceInformationMarkerStart($composer_11, 1455604431, 'C240@8146L72,241@8254L59,272@9584L370,251@8663L225,269@9463L93,244@8378L1590,285@10013L181,301@10724L162,292@10289L611,319@11362L313,310@10971L718:JellyFab.kt#81ts31');
      var tmp0_remember$arg$0_0 = primaryItems.l();
      sourceInformationMarkerStart($composer_11, -1615615359, 'CC(remember):JellyFab.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_6 = $composer_11.l25(tmp0_remember$arg$0_0);
      // Inline function 'kotlin.let' call
      var it_9 = $composer_11.h25();
      var tmp_27;
      if (invalid_6 || it_9 === Companion_getInstance_2().i24_1) {
        var value_9 = evenArcAngles(VOID, VOID, primaryItems.l());
        $composer_11.i25(value_9);
        tmp_27 = value_9;
      } else {
        tmp_27 = it_9;
      }
      var tmp_28 = tmp_27;
      var tmp1_group_1 = (tmp_28 == null ? true : !(tmp_28 == null)) ? tmp_28 : THROW_CCE();
      sourceInformationMarkerEnd($composer_11);
      var primaryAngles = tmp1_group_1;
      sourceInformationMarkerStart($composer_11, -1615611916, 'CC(remember):JellyFab.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_10 = $composer_11.h25();
      var tmp_29;
      if (false || it_10 === Companion_getInstance_2().i24_1) {
        // Inline function 'kotlin.collections.MutableList' call
        var size_2 = primaryItems.l();
        var list_2 = ArrayList_init_$Create$(size_2);
        // Inline function 'kotlin.repeat' call
        var inductionVariable_2 = 0;
        if (inductionVariable_2 < size_2)
          do {
            var index_2 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var tmp$ret$73 = new Offset(Companion_getInstance_5().r3t_1);
            list_2.h(tmp$ret$73);
          }
           while (inductionVariable_2 < size_2);
        var value_10 = list_2;
        $composer_11.i25(value_10);
        tmp_29 = value_10;
      } else {
        tmp_29 = it_10;
      }
      var tmp_30 = tmp_29;
      var tmp2_group = (tmp_30 == null ? true : !(tmp_30 == null)) ? tmp_30 : THROW_CCE();
      sourceInformationMarkerEnd($composer_11);
      var primaryPositions = tmp2_group;
      var tmp_31 = miniFabSize_0._v;
      var tmp_32 = config_0._v;
      sourceInformationMarkerStart($composer_11, -1615569045, 'CC(remember):JellyFab.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_7 = !!(!!(!!($composer_0.p25(secondaryItems_0._v) | (($dirty & 112 ^ 48) > 32 && $composer_0.j25(state_0._v) || ($dirty & 48) === 32)) | $composer_0.p25(scope)) | ($dirty & 1879048192) === 536870912);
      // Inline function 'kotlin.let' call
      var it_11 = $composer_11.h25();
      var tmp_33;
      if (invalid_7 || it_11 === Companion_getInstance_2().i24_1) {
        var value_11 = JellyFab$lambda_4(secondaryItems_0, state_0, scope, config_0);
        $composer_11.i25(value_11);
        tmp_33 = value_11;
      } else {
        tmp_33 = it_11;
      }
      var tmp_34 = tmp_33;
      var tmp3_group_0 = (tmp_34 == null ? true : !(tmp_34 == null)) ? tmp_34 : THROW_CCE();
      sourceInformationMarkerEnd($composer_11);
      sourceInformationMarkerStart($composer_11, -1615598662, 'CC(remember):JellyFab.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_8 = !!(!!($composer_0.p25(secondaryItems_0._v) | ($dirty & 458752) === 131072) | ($dirty & 57344) === 16384);
      // Inline function 'kotlin.let' call
      var it_12 = $composer_11.h25();
      var tmp_35;
      if (invalid_8 || it_12 === Companion_getInstance_2().i24_1) {
        var value_12 = JellyFab$lambda_5(secondaryItems_0, secondLayerFabColor_0, fabColor_0);
        $composer_11.i25(value_12);
        tmp_35 = value_12;
      } else {
        tmp_35 = it_12;
      }
      var tmp_36 = tmp_35;
      var tmp4_group = (tmp_36 == null ? true : !(tmp_36 == null)) ? tmp_36 : THROW_CCE();
      sourceInformationMarkerEnd($composer_11);
      var tmp_37 = JellyFab$lambda_6(secondaryItems_0, state_0, config_0, primaryItems);
      sourceInformationMarkerStart($composer_11, -1615573194, 'CC(remember):JellyFab.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_9 = $composer_11.p25(primaryPositions);
      // Inline function 'kotlin.let' call
      var it_13 = $composer_11.h25();
      var tmp_38;
      if (invalid_9 || it_13 === Companion_getInstance_2().i24_1) {
        var value_13 = JellyFab$lambda_7(primaryPositions);
        $composer_11.i25(value_13);
        tmp_38 = value_13;
      } else {
        tmp_38 = it_13;
      }
      var tmp_39 = tmp_38;
      var tmp5_group_0 = (tmp_39 == null ? true : !(tmp_39 == null)) ? tmp_39 : THROW_CCE();
      sourceInformationMarkerEnd($composer_11);
      PrimaryFabLayer(primaryItems, primaryProgress, primaryAngles, tmp_31.q4n_1, centerCorrect, tmp_32, tmp3_group_0, tmp4_group, tmp_37, tmp5_group_0, $composer_11, 14 & $dirty >> 18 | 7168 & $dirty | 458752 & $dirty >> 12);
      sourceInformationMarkerStart($composer_11, -1615555506, 'CC(remember):JellyFab.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_10 = $composer_11.j25(secondaryProgress);
      // Inline function 'kotlin.let' call
      var it_14 = $composer_11.h25();
      var tmp_40;
      if (invalid_10 || it_14 === Companion_getInstance_2().i24_1) {
        var value_14 = derivedStateOf(JellyFab$lambda_8(state_0, secondaryProgress));
        $composer_11.i25(value_14);
        tmp_40 = value_14;
      } else {
        tmp_40 = it_14;
      }
      var tmp_41 = tmp_40;
      var tmp6_group_0 = (tmp_41 == null ? true : !(tmp_41 == null)) ? tmp_41 : THROW_CCE();
      sourceInformationMarkerEnd($composer_11);
      var isSecondaryLayerVisible$delegate = tmp6_group_0;
      var tmp_42 = JellyFab$lambda_1(isSecondaryLayerVisible$delegate);
      var tmp_43 = secondaryItems_0._v;
      var tmp_44 = firstOrNull(primaryPositions);
      var tmp0_elvis_lhs = tmp_44 == null ? null : tmp_44.p3t_1;
      var tmp_45;
      var tmp_46 = tmp0_elvis_lhs;
      if ((tmp_46 == null ? null : new Offset(tmp_46)) == null) {
        tmp_45 = Companion_getInstance_5().r3t_1;
      } else {
        tmp_45 = tmp0_elvis_lhs;
      }
      var tmp_47 = tmp_45;
      var tmp_48 = miniFabSize_0._v;
      var tmp_49 = secondLayerFabColor_0._v;
      var tmp_50 = config_0._v;
      sourceInformationMarkerStart($composer_11, -1615532773, 'CC(remember):JellyFab.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_11 = !!(!!(!!($composer_0.p25(scope) | (($dirty & 112 ^ 48) > 32 && $composer_0.j25(state_0._v) || ($dirty & 48) === 32)) | $composer_0.p25(secondaryItems_0._v)) | ($dirty & 1879048192) === 536870912);
      // Inline function 'kotlin.let' call
      var it_15 = $composer_11.h25();
      var tmp_51;
      if (invalid_11 || it_15 === Companion_getInstance_2().i24_1) {
        var value_15 = JellyFab$lambda_9(scope, state_0, secondaryItems_0, config_0);
        $composer_11.i25(value_15);
        tmp_51 = value_15;
      } else {
        tmp_51 = it_15;
      }
      var tmp_52 = tmp_51;
      var tmp7_group_0 = (tmp_52 == null ? true : !(tmp_52 == null)) ? tmp_52 : THROW_CCE();
      sourceInformationMarkerEnd($composer_11);
      SecondaryFabLayer(tmp_42, secondaryProgress, tmp_43, tmp_47, tmp_48.q4n_1, centerCorrect, tmp_49.n4u_1, tmp_50, tmp7_group_0, $composer_11, 896 & $dirty >> 15 | 57344 & $dirty << 3 | 3670016 & $dirty << 3 | 29360128 & $dirty >> 6);
      var tmp_53 = fabSize_0._v;
      var tmp_54 = fabColor_0._v;
      var tmp_55 = config_0._v.khw_1;
      var tmp_56 = config_0._v.lhw_1;
      var tmp_57 = config_0._v.mhw_1;
      sourceInformationMarkerStart($composer_11, -1615512206, 'CC(remember):JellyFab.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_12 = !!(!!(!!((($dirty & 112 ^ 48) > 32 && $composer_0.j25(state_0._v) || ($dirty & 48) === 32) | $composer_0.p25(scope)) | $composer_0.p25(secondaryItems_0._v)) | ($dirty & 1879048192) === 536870912);
      // Inline function 'kotlin.let' call
      var it_16 = $composer_11.h25();
      var tmp_58;
      if (invalid_12 || it_16 === Companion_getInstance_2().i24_1) {
        var value_16 = JellyFab$lambda_10(state_0, scope, secondaryItems_0, config_0);
        $composer_11.i25(value_16);
        tmp_58 = value_16;
      } else {
        tmp_58 = it_16;
      }
      var tmp_59 = tmp_58;
      var tmp8_group_0 = (tmp_59 == null ? true : !(tmp_59 == null)) ? tmp_59 : THROW_CCE();
      sourceInformationMarkerEnd($composer_11);
      JellyFabBlob(tmp_53.q4n_1, tmp_54.n4u_1, bulges, primaryAngles, tmp_55, tmp_56, tmp_57, rotationAnim, tmp8_group_0, $composer_11, 14 & $dirty >> 6 | 112 & $dirty >> 9 | androidx_compose_animation_core_Animatable$stableprop_getter() << 21);
      sourceInformationMarkerEnd($composer_11);
      sourceInformationMarkerEnd($composer_10);
      $composer_9.d25();
      sourceInformationMarkerEnd($composer_9);
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      sourceInformationMarkerEnd($composer_5);
      $composer_4.d25();
      sourceInformationMarkerEnd($composer_4);
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y24();
    }
    var tmp11_safe_receiver = $composer_0.u24();
    if (tmp11_safe_receiver == null)
      null;
    else {
      tmp11_safe_receiver.s2q(JellyFab$lambda_11(modifier_0, state_0, fabSize_0, miniFabSize_0, fabColor_0, secondLayerFabColor_0, primaryItems, secondaryItems_0, showScrim_0, config_0, $changed, $default));
    }
  }
  function Scrim(modifier, visible, onClick, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t24(-1115823641);
    sourceInformation($composer_0, 'C(Scrim)P(!1,2)355@12632L108,360@12768L62:JellyFab.kt#81ts31');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.j25(modifier_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.k25(visible) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.p25(onClick) ? 256 : 128);
    if ($composer_0.q25(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1115823641, $dirty, -1, 'io.github.iprashantpanwar.jellyfab.Scrim (JellyFab.kt:354)');
      }
      var tmp = visible ? 1.0 : 0.0;
      var tmp_0 = tween(250);
      var scrimAlpha$delegate = animateFloatAsState(tmp, tmp_0, 0.0, null, null, $composer_0, 48, 28);
      sourceInformationMarkerStart($composer_0, 1435313221, 'CC(remember):JellyFab.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.h25();
      var tmp_1;
      if (false || it === Companion_getInstance_2().i24_1) {
        var value = derivedStateOf(Scrim$lambda_1(scrimAlpha$delegate));
        this_0.i25(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var isScrimVisible$delegate = tmp0_group;
      if (Scrim$lambda_0(isScrimVisible$delegate)) {
        $composer_0.p24(1545135318);
        sourceInformation($composer_0, '367@12963L22,371@13154L39,372@13212L49,365@12906L365');
        var tmp_3 = modifier_0._v;
        sourceInformationMarkerStart($composer_0, 1435319421, 'CC(remember):JellyFab.kt#9igjgp');
        var tmp0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.j25(scrimAlpha$delegate);
        // Inline function 'kotlin.let' call
        var it_0 = tmp0.h25();
        var tmp_4;
        if (invalid || it_0 === Companion_getInstance_2().i24_1) {
          var value_0 = Scrim$lambda_2(scrimAlpha$delegate);
          tmp0.i25(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var tmp0_$receiver = background(graphicsLayer(tmp_3, tmp1_group), Color__copy$default_impl_ectz3s(Companion_getInstance_6().x4q_1, 0.55));
        sourceInformationMarkerStart($composer_0, 1435325550, 'CC(remember):JellyFab.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_1 = $composer_0;
        // Inline function 'kotlin.let' call
        var it_1 = this_1.h25();
        var tmp_6;
        if (false || it_1 === Companion_getInstance_2().i24_1) {
          var value_1 = funMutableInteractionSource();
          this_1.i25(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = it_1;
        }
        var tmp_7 = tmp_6;
        var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        sourceInformationMarkerStart($composer_0, 1435327416, 'CC(remember):JellyFab.kt#9igjgp');
        var tmp0_0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = ($dirty & 896) === 256;
        // Inline function 'kotlin.let' call
        var it_2 = tmp0_0.h25();
        var tmp_8;
        if (invalid_0 || it_2 === Companion_getInstance_2().i24_1) {
          var value_2 = Scrim$lambda_3(onClick);
          tmp0_0.i25(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp3_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        Box(clickable(tmp0_$receiver, tmp2_group, null, VOID, VOID, VOID, tmp3_group), $composer_0, 0);
        $composer_0.q24();
      } else {
        $composer_0.p24(1532368123);
        $composer_0.q24();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y24();
    }
    var tmp4_safe_receiver = $composer_0.u24();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.s2q(Scrim$lambda_4(modifier_0, visible, onClick, $changed, $default));
    }
  }
  function PrimaryFabLayer(items, progress, angles, fabSize, centerCorrect, config, onClick, fabColor, icon, onPositionChanged, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t24(1130520223);
    sourceInformation($composer_0, 'C(PrimaryFabLayer)P(6,9!1,4:c#ui.unit.Dp,1:c#ui.unit.Dp!1,7)*429@15598L11,430@15643L78,433@15745L46,422@15311L490:JellyFab.kt#81ts31');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p25(items) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.p25(progress) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.p25(angles) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.m25(_Dp___get_value__impl__geb1vb(fabSize)) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.m25(_Dp___get_value__impl__geb1vb(centerCorrect)) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.j25(config) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.p25(onClick) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.p25(fabColor) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.p25(icon) ? 67108864 : 33554432);
    if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.p25(onPositionChanged) ? 536870912 : 268435456);
    if ($composer_0.q25(!(($dirty & 306783379) === 306783378), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1130520223, $dirty, -1, 'io.github.iprashantpanwar.jellyfab.PrimaryFabLayer (JellyFab.kt:420)');
      }
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var _iterator__ex2g4s = items.i();
      while (_iterator__ex2g4s.j()) {
        var item = _iterator__ex2g4s.k();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var index_0 = checkIndexOverflow(_unary__edvuaz);
        var tmp = progress.m(index_0);
        var tmp_0 = angles.m(index_0);
        var tmp_1 = fabColor(index_0);
        var tmp_2 = icon(index_0, $composer_0, 112 & $dirty >> 21);
        sourceInformationMarkerStart($composer_0, 732588338, 'CC(remember):JellyFab.kt#9igjgp');
        var tmp0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(($dirty & 1879048192) === 536870912 | $composer_0.l25(index_0));
        // Inline function 'kotlin.let' call
        var it = tmp0.h25();
        var tmp_3;
        if (invalid || it === Companion_getInstance_2().i24_1) {
          var value = PrimaryFabLayer$lambda(onPositionChanged, index_0);
          tmp0.i25(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        sourceInformationMarkerStart($composer_0, 732591570, 'CC(remember):JellyFab.kt#9igjgp');
        var tmp0_0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!(($dirty & 3670016) === 1048576 | $composer_0.l25(index_0));
        // Inline function 'kotlin.let' call
        var it_0 = tmp0_0.h25();
        var tmp_5;
        if (invalid_0 || it_0 === Companion_getInstance_2().i24_1) {
          var value_0 = PrimaryFabLayer$lambda_0(onClick, index_0);
          tmp0_0.i25(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp1_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        PrimaryFabItem(tmp, tmp_0, config.ohw_1, centerCorrect, fabSize, tmp_1.n4u_1, tmp_2, tmp0_group, tmp1_group, $composer_0, androidx_compose_animation_core_Animatable$stableprop_getter() | 7168 & $dirty >> 3 | 57344 & $dirty << 3);
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
      tmp0_safe_receiver.s2q(PrimaryFabLayer$lambda_1(items, progress, angles, fabSize, centerCorrect, config, onClick, fabColor, icon, onPositionChanged, $changed));
    }
  }
  function animatedSecondaryToggleIcon(secondaryExpanded, delayOnCollapse, $composer, $changed, $default) {
    var delayOnCollapse_0 = {_v: delayOnCollapse};
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 115090326, 'C(animatedSecondaryToggleIcon)P(1)741@27055L43,743@27138L217,743@27104L251:JellyFab.kt#81ts31');
    if (!(($default & 2) === 0)) {
      delayOnCollapse_0._v = new Long(360, 0);
    }
    if (isTraceInProgress()) {
      traceEventStart(115090326, $changed, -1, 'io.github.iprashantpanwar.jellyfab.animatedSecondaryToggleIcon (JellyFab.kt:740)');
    }
    sourceInformationMarkerStart($composer_0, -1067342175, 'CC(remember):JellyFab.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.h25();
    var tmp;
    if (false || it === Companion_getInstance_2().i24_1) {
      var value = mutableStateOf(get_MoreHorizontal());
      $composer_0.i25(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var icon$delegate = tmp1_group;
    sourceInformationMarkerStart($composer_0, -1067339345, 'CC(remember):JellyFab.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.k25(secondaryExpanded) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.n25(delayOnCollapse_0._v) || ($changed & 48) === 32));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.h25();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance_2().i24_1) {
      var value_0 = animatedSecondaryToggleIcon$slambda_0(secondaryExpanded, delayOnCollapse_0, icon$delegate, null);
      $composer_0.i25(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    LaunchedEffect(secondaryExpanded, tmp2_group, $composer_0, 14 & $changed);
    var tmp0 = animatedSecondaryToggleIcon$lambda(icon$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function SecondaryFabLayer(visible, progress, items, anchor, miniFabSize, centerCorrect, containerColor, config, onItemClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t24(-655824488);
    sourceInformation($composer_0, 'C(SecondaryFabLayer)P(8,7,4,0:c#ui.geometry.Offset,5:c#ui.unit.Dp,1:c#ui.unit.Dp,3:c#ui.graphics.Color)546@20275L199,*563@20843L21,554@20526L348:JellyFab.kt#81ts31');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.k25(visible) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.p25(progress) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.p25(items) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.n25(_Offset___get_packedValue__impl__xh2k8q(anchor)) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.m25(_Dp___get_value__impl__geb1vb(miniFabSize)) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.m25(_Dp___get_value__impl__geb1vb(centerCorrect)) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.n25(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(containerColor))) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.j25(config) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.p25(onItemClick) ? 67108864 : 33554432);
    if ($composer_0.q25(!(($dirty & 38347923) === 38347922), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-655824488, $dirty, -1, 'io.github.iprashantpanwar.jellyfab.SecondaryFabLayer (JellyFab.kt:541)');
      }
      if (!visible) {
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        var tmp2_safe_receiver = $composer_0.u24();
        if (tmp2_safe_receiver == null)
          null;
        else {
          tmp2_safe_receiver.s2q(SecondaryFabLayer$lambda(visible, progress, items, anchor, miniFabSize, centerCorrect, containerColor, config, onItemClick, $changed));
        }
        return Unit_instance;
      }
      var radius = _Dp___get_value__impl__geb1vb(config.ohw_1) * config.nhw_1;
      var tmp0_remember$arg$0 = items.l();
      sourceInformationMarkerStart($composer_0, 1112873407, 'CC(remember):JellyFab.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.l25(tmp0_remember$arg$0) | $composer_0.m25(radius));
      // Inline function 'kotlin.let' call
      var it = tmp0.h25();
      var tmp;
      if (invalid || it === Companion_getInstance_2().i24_1) {
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var size = items.l();
        var list = ArrayList_init_$Create$(size);
        // Inline function 'kotlin.repeat' call
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var angle = 90 + 90.0 / coerceAtLeast(items.l() - 1 | 0, 1) * index;
            var tmp$ret$0 = new Offset(arcOffset(angle, radius));
            list.h(tmp$ret$0);
          }
           while (inductionVariable < size);
        var value = list;
        tmp0.i25(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var targets = tmp1_group;
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index_0 = 0;
      var _iterator__ex2g4s = items.i();
      while (_iterator__ex2g4s.j()) {
        var item = _iterator__ex2g4s.k();
        var _unary__edvuaz = index_0;
        index_0 = _unary__edvuaz + 1 | 0;
        var index_1 = checkIndexOverflow(_unary__edvuaz);
        sourceInformationMarkerStart($composer_0, -367543822, 'CC(remember):JellyFab.kt#9igjgp');
        var tmp0_0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!(($dirty & 234881024) === 67108864 | $composer_0.j25(item));
        // Inline function 'kotlin.let' call
        var it_0 = tmp0_0.h25();
        var tmp_1;
        if (invalid_0 || it_0 === Companion_getInstance_2().i24_1) {
          var value_0 = SecondaryFabLayer$lambda_0(onItemClick, item);
          tmp0_0.i25(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        SecondaryFabItem(index_1, progress, anchor, targets, miniFabSize, centerCorrect, containerColor, item.phw_1, tmp0_group, $composer_0, 112 & $dirty | 896 & $dirty >> 3 | 57344 & $dirty | 458752 & $dirty | 3670016 & $dirty);
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
      tmp3_safe_receiver.s2q(SecondaryFabLayer$lambda_1(visible, progress, items, anchor, miniFabSize, centerCorrect, containerColor, config, onItemClick, $changed));
    }
  }
  function JellyFabBlob(size_0, color, bulges, bulgeAngles, shadowOpacity, shadowBlurFactor, bounceFactor, rotation, onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t24(226497639);
    sourceInformation($composer_0, 'C(JellyFabBlob)P(8:c#ui.unit.Dp,3:c#ui.graphics.Color,2,1,7,6!1,5)681@25086L1107:JellyFab.kt#81ts31');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m25(_Dp___get_value__impl__geb1vb(size_0)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.n25(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color))) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.p25(bulges) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.p25(bulgeAngles) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.m25(shadowOpacity) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.m25(shadowBlurFactor) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.m25(bounceFactor) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ((($changed & 16777216) === 0 ? $composer_0.j25(rotation) : $composer_0.p25(rotation)) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.p25(onClick) ? 67108864 : 33554432);
    if ($composer_0.q25(!(($dirty & 38347923) === 38347922), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(226497639, $dirty, -1, 'io.github.iprashantpanwar.jellyfab.JellyFabBlob (JellyFab.kt:680)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = size(Companion_instance, size_0);
      var contentAlignment = Companion_getInstance_3().t6a_1;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1042775818, 'CC(Box)P(2,1,3)71@3424L131:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_3().p6a_1;
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1159599143, 'CC(Layout)P(!1,2)80@3267L27,83@3433L360:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.s25();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_4().q87_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
      var tmp = $composer_3.j24();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.a25();
      if ($composer_3.k24()) {
        $composer_3.b25(tmp0);
      } else {
        $composer_3.c25();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_4().v87_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_4().u87_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_4().y87_1;
      // Inline function 'kotlin.with' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.k24() || !equals($this$with.h25(), compositeKeyHash)) {
        $this$with.i25(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).g25(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_4().s87_1);
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 1833054614, 'C72@3469L9:Box.kt#2w3rfo');
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -113253038, 'C685@25191L272,700@25645L83,695@25473L714:JellyFab.kt#81ts31');
      JellyBlob(null, size_0, color, bulges, shadowOpacity, shadowBlurFactor, bulgeAngles, bounceFactor, $composer_5, 112 & $dirty << 3 | 896 & $dirty << 3 | 7168 & $dirty << 3 | 57344 & $dirty | 458752 & $dirty | 3670016 & $dirty << 9 | 29360128 & $dirty << 3, 1);
      var tmp0_$receiver = size(Companion_instance, size_0);
      sourceInformationMarkerStart($composer_5, 966191616, 'CC(remember):JellyFab.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_5.h25();
      var tmp_0;
      if (false || it === Companion_getInstance_2().i24_1) {
        var value = funMutableInteractionSource();
        $composer_5.i25(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_5);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_1 = clickable(tmp0_$receiver, tmp0_group, null, VOID, VOID, VOID, onClick);
      var contentAlignment_0 = Companion_getInstance_3().t6a_1;
      var propagateMinConstraints_0 = false;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 1042775818, 'CC(Box)P(2,1,3)71@3424L131:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment_0 = Companion_getInstance_3().p6a_1;
      if (!((4 & 4) === 0))
        propagateMinConstraints_0 = false;
      var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1159599143, 'CC(Layout)P(!1,2)80@3267L27,83@3433L360:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.s25();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_0 = Companion_getInstance_4().q87_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
      var tmp_2 = $composer_8.j24();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_8.a25();
      if ($composer_8.k24()) {
        $composer_8.b25(tmp0_0);
      } else {
        $composer_8.c25();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_4().v87_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_4().u87_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_4().y87_1;
      // Inline function 'kotlin.with' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.k24() || !equals($this$with_0.h25(), compositeKeyHash_0)) {
        $this$with_0.i25(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).g25(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_4().s87_1);
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, 1833054614, 'C72@3469L9:Box.kt#2w3rfo');
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -322685710, 'C713@26089L74,707@25859L318:JellyFab.kt#81ts31');
      var tmp0_imageVector = get_CloseIcon();
      var tmp1_tint = Companion_getInstance_6().x4q_1;
      var tmp_3 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$12 = _Dp___init__impl__ms3zkb(32);
      var tmp_4 = size(tmp_3, tmp$ret$12);
      sourceInformationMarkerStart($composer_10, 1652165885, 'CC(remember):JellyFab.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 29360128) === 8388608 || (!(($dirty & 16777216) === 0) && $composer_0.p25(rotation));
      // Inline function 'kotlin.let' call
      var it_0 = $composer_10.h25();
      var tmp_5;
      if (invalid || it_0 === Companion_getInstance_2().i24_1) {
        var value_0 = JellyFabBlob$lambda(rotation);
        $composer_10.i25(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp0_group_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_10);
      var tmp2_modifier = graphicsLayer(tmp_4, tmp0_group_0);
      Icon(tmp0_imageVector, null, tmp2_modifier, tmp1_tint, $composer_10, 3120, 0);
      sourceInformationMarkerEnd($composer_10);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.d25();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      sourceInformationMarkerEnd($composer_5);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.d25();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
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
      tmp0_safe_receiver.s2q(JellyFabBlob$lambda_0(size_0, color, bulges, bulgeAngles, shadowOpacity, shadowBlurFactor, bounceFactor, rotation, onClick, $changed));
    }
  }
  function PrimaryFabItem(progress, angleDeg, layerDistance, centerCorrect, miniFabSize, containerColor, icon, onPositionChanged, onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t24(2024706425);
    sourceInformation($composer_0, 'C(PrimaryFabItem)P(8!1,4:c#ui.unit.Dp,1:c#ui.unit.Dp,5:c#ui.unit.Dp,2:c#ui.graphics.Color!1,7)479@17413L565,490@18006L233,499@18391L15,500@18413L73,476@17316L1170:JellyFab.kt#81ts31');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.j25(progress) : $composer_0.p25(progress)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.o25(angleDeg) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.m25(_Dp___get_value__impl__geb1vb(layerDistance)) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.m25(_Dp___get_value__impl__geb1vb(centerCorrect)) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.m25(_Dp___get_value__impl__geb1vb(miniFabSize)) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.n25(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(containerColor))) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.j25(icon) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.p25(onPositionChanged) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.p25(onClick) ? 67108864 : 33554432);
    if ($composer_0.q25(!(($dirty & 38347923) === 38347922), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(2024706425, $dirty, -1, 'io.github.iprashantpanwar.jellyfab.PrimaryFabItem (JellyFab.kt:475)');
      }
      var tmp = Companion_instance;
      sourceInformationMarkerStart($composer_0, 122702094, 'CC(remember):JellyFab.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!(!!((($dirty & 14) === 4 || (!(($dirty & 8) === 0) && $composer_0.p25(progress))) | ($dirty & 112) === 32) | ($dirty & 896) === 256) | ($dirty & 7168) === 2048) | ($dirty & 29360128) === 8388608);
      // Inline function 'kotlin.let' call
      var it = tmp0.h25();
      var tmp_0;
      if (invalid || it === Companion_getInstance_2().i24_1) {
        var value = PrimaryFabItem$lambda(progress, angleDeg, layerDistance, centerCorrect, onPositionChanged);
        tmp0.i25(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_2 = offset(tmp, tmp0_group);
      sourceInformationMarkerStart($composer_0, 122720738, 'CC(remember):JellyFab.kt#9igjgp');
      var tmp0_0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 14) === 4 || (!(($dirty & 8) === 0) && $composer_0.p25(progress));
      // Inline function 'kotlin.let' call
      var it_0 = tmp0_0.h25();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance_2().i24_1) {
        var value_0 = PrimaryFabItem$lambda_0(progress);
        tmp0_0.i25(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_5 = size(graphicsLayer(tmp_2, tmp1_group), miniFabSize);
      var tmp_6 = get_CircleShape();
      var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_8 = FloatingActionButtonDefaults_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_9 = _Dp___init__impl__ms3zkb(0);
      var tmp_10 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_11 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_12 = tmp_8.ngt(tmp_9, tmp_10, tmp_11, _Dp___init__impl__ms3zkb(0.0), $composer_0, 6 | androidx_compose_material3_FloatingActionButtonDefaults$stableprop_getter() << 12, 14);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-194651465, true, PrimaryFabItem$lambda_1(icon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_1.j25(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.h25();
      var tmp_13;
      if (invalid_1 || it_1 === Companion_getInstance_2().i24_1) {
        var value_1 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.i25(value_1);
        tmp_13 = value_1;
      } else {
        tmp_13 = it_1;
      }
      var tmp_14 = tmp_13;
      var tmp0_1 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      FloatingActionButton(onClick, tmp_5, tmp_6, containerColor, tmp_7, tmp_12, null, tmp0_1, $composer_0, 12582912 | 14 & $dirty >> 24 | 7168 & $dirty >> 6, 80);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y24();
    }
    var tmp2_safe_receiver = $composer_0.u24();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.s2q(PrimaryFabItem$lambda_2(progress, angleDeg, layerDistance, centerCorrect, miniFabSize, containerColor, icon, onPositionChanged, onClick, $changed));
    }
  }
  function SecondaryFabItem(index, progress, anchor, targets, miniFabSize, centerCorrect, containerColor, icon, onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t24(-1235230457);
    sourceInformation($composer_0, 'C(SecondaryFabItem)P(4,7,0:c#ui.geometry.Offset,8,5:c#ui.unit.Dp,1:c#ui.unit.Dp,2:c#ui.graphics.Color)608@22509L625,629@23162L169,638@23483L15,639@23505L133,605@22412L1226:JellyFab.kt#81ts31');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.l25(index) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.p25(progress) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.n25(_Offset___get_packedValue__impl__xh2k8q(anchor)) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.p25(targets) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.m25(_Dp___get_value__impl__geb1vb(miniFabSize)) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.m25(_Dp___get_value__impl__geb1vb(centerCorrect)) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.n25(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(containerColor))) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.j25(icon) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.p25(onClick) ? 67108864 : 33554432);
    if ($composer_0.q25(!(($dirty & 38347923) === 38347922), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1235230457, $dirty, -1, 'io.github.iprashantpanwar.jellyfab.SecondaryFabItem (JellyFab.kt:604)');
      }
      var tmp = Companion_instance;
      sourceInformationMarkerStart($composer_0, -1645483144, 'CC(remember):JellyFab.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!(!!(($dirty & 896) === 256 | ($dirty & 14) === 4) | $composer_0.p25(targets)) | $composer_0.p25(progress)) | ($dirty & 458752) === 131072);
      // Inline function 'kotlin.let' call
      var it = tmp0.h25();
      var tmp_0;
      if (invalid || it === Companion_getInstance_2().i24_1) {
        var value = SecondaryFabItem$lambda(anchor, index, targets, progress, centerCorrect);
        tmp0.i25(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_2 = offset(tmp, tmp0_group);
      sourceInformationMarkerStart($composer_0, -1645462704, 'CC(remember):JellyFab.kt#9igjgp');
      var tmp0_0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!($composer_0.p25(progress) | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      var it_0 = tmp0_0.h25();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance_2().i24_1) {
        var value_0 = SecondaryFabItem$lambda_0(progress, index);
        tmp0_0.i25(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_5 = size(graphicsLayer(tmp_2, tmp1_group), miniFabSize);
      var tmp_6 = get_CircleShape();
      var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_8 = FloatingActionButtonDefaults_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_9 = _Dp___init__impl__ms3zkb(0);
      var tmp_10 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_11 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_12 = tmp_8.ngt(tmp_9, tmp_10, tmp_11, _Dp___init__impl__ms3zkb(0.0), $composer_0, 6 | androidx_compose_material3_FloatingActionButtonDefaults$stableprop_getter() << 12, 14);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1809532997, true, SecondaryFabItem$lambda_1(icon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_1.j25(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.h25();
      var tmp_13;
      if (invalid_1 || it_1 === Companion_getInstance_2().i24_1) {
        var value_1 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.i25(value_1);
        tmp_13 = value_1;
      } else {
        tmp_13 = it_1;
      }
      var tmp_14 = tmp_13;
      var tmp0_1 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      FloatingActionButton(onClick, tmp_5, tmp_6, containerColor, tmp_7, tmp_12, null, tmp0_1, $composer_0, 12582912 | 14 & $dirty >> 24 | 7168 & $dirty >> 9, 80);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y24();
    }
    var tmp2_safe_receiver = $composer_0.u24();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.s2q(SecondaryFabItem$lambda_2(index, progress, anchor, targets, miniFabSize, centerCorrect, containerColor, icon, onClick, $changed));
    }
  }
  function JellyFab$lambda($didRunOnce$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('didRunOnce', KMutableProperty0, true);
    return $didRunOnce$delegate.v1();
  }
  function JellyFab$lambda_0($didRunOnce$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('didRunOnce', KMutableProperty0, true);
    $didRunOnce$delegate.t1k(_set____db54di);
    return Unit_instance;
  }
  function JellyFab$collapseMenu(state, secondaryItems, config, $completion) {
    var tmp = new $JellyFab$collapseMenuCOROUTINE$(state, secondaryItems, config, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function JellyFab$lambda_1($isSecondaryLayerVisible$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isSecondaryLayerVisible', KProperty0, false);
    return $isSecondaryLayerVisible$delegate.v1();
  }
  function Scrim$lambda($scrimAlpha$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('scrimAlpha', KProperty0, false);
    return $scrimAlpha$delegate.v1();
  }
  function Scrim$lambda_0($isScrimVisible$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isScrimVisible', KProperty0, false);
    return $isScrimVisible$delegate.v1();
  }
  function animatedSecondaryToggleIcon$lambda($icon$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('icon', KMutableProperty0, true);
    return $icon$delegate.v1();
  }
  function animatedSecondaryToggleIcon$lambda_0($icon$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('icon', KMutableProperty0, true);
    $icon$delegate.t1k(_set____db54di);
    return Unit_instance;
  }
  function JellyFab$lambda_2() {
    return EmptyCoroutineContext_getInstance();
  }
  function JellyFab$slambda($rotationAnim, $state, resultContinuation) {
    this.khx_1 = $rotationAnim;
    this.lhx_1 = $state;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JellyFab$slambda).q1n = function ($this$LaunchedEffect, $completion) {
    var tmp = this.r1n($this$LaunchedEffect, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(JellyFab$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JellyFab$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.khx_1.aaz(this.lhx_1._v.ehw() ? 0.0 : 45.0, tween(260), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(JellyFab$slambda).r1n = function ($this$LaunchedEffect, completion) {
    var i = new JellyFab$slambda(this.khx_1, this.lhx_1, completion);
    i.mhx_1 = $this$LaunchedEffect;
    return i;
  };
  function JellyFab$slambda_0($rotationAnim, $state, resultContinuation) {
    var i = new JellyFab$slambda($rotationAnim, $state, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.q1n($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JellyFab$slambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JellyFab$slambda$slambda).whx = function (bulge, $completion) {
    var tmp = this.xhx(bulge, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(JellyFab$slambda$slambda).f9 = function (p1, $completion) {
    return this.whx(p1 instanceof Animatable_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JellyFab$slambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = playDoubleBounce(this.vhx_1, true, true, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(JellyFab$slambda$slambda).xhx = function (bulge, completion) {
    var i = new JellyFab$slambda$slambda(completion);
    i.vhx_1 = bulge;
    return i;
  };
  function JellyFab$slambda$slambda_0(resultContinuation) {
    var i = new JellyFab$slambda$slambda(resultContinuation);
    var l = function (bulge, $completion) {
      return i.whx(bulge, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JellyFab$slambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JellyFab$slambda$slambda_1).whx = function (it, $completion) {
    var tmp = this.xhx(it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(JellyFab$slambda$slambda_1).f9 = function (p1, $completion) {
    return this.whx(p1 instanceof Animatable_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JellyFab$slambda$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = playDoubleBounce(this.ghy_1, false, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(JellyFab$slambda$slambda_1).xhx = function (it, completion) {
    var i = new JellyFab$slambda$slambda_1(completion);
    i.ghy_1 = it;
    return i;
  };
  function JellyFab$slambda$slambda_2(resultContinuation) {
    var i = new JellyFab$slambda$slambda_1(resultContinuation);
    var l = function (it, $completion) {
      return i.whx(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JellyFab$slambda$slambda_3(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JellyFab$slambda$slambda_3).whx = function (it, $completion) {
    var tmp = this.xhx(it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(JellyFab$slambda$slambda_3).f9 = function (p1, $completion) {
    return this.whx(p1 instanceof Animatable_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JellyFab$slambda$slambda_3).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = playDoubleBounce(this.phy_1, false, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(JellyFab$slambda$slambda_3).xhx = function (it, completion) {
    var i = new JellyFab$slambda$slambda_3(completion);
    i.phy_1 = it;
    return i;
  };
  function JellyFab$slambda$slambda_4(resultContinuation) {
    var i = new JellyFab$slambda$slambda_3(resultContinuation);
    var l = function (it, $completion) {
      return i.whx(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JellyFab$slambda_1($state, $primaryProgress, $bulges, $config, $didRunOnce$delegate, resultContinuation) {
    this.yhy_1 = $state;
    this.zhy_1 = $primaryProgress;
    this.ahz_1 = $bulges;
    this.bhz_1 = $config;
    this.chz_1 = $didRunOnce$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JellyFab$slambda_1).q1n = function ($this$LaunchedEffect, $completion) {
    var tmp = this.r1n($this$LaunchedEffect, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(JellyFab$slambda_1).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JellyFab$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            if (!JellyFab$lambda(this.chz_1)) {
              JellyFab$lambda_0(this.chz_1, true);
              return Unit_instance;
            }

            if (this.yhy_1._v.ehw()) {
              this.n8_1 = 2;
              var tmp_0 = this.bhz_1._v;
              suspendResult = expandPrimaryLayer(this.zhy_1, this.ahz_1, tmp_0, JellyFab$slambda$slambda_0(null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 1;
              var tmp_1 = this.bhz_1._v;
              var tmp_2 = JellyFab$slambda$slambda_2(null);
              suspendResult = collapsePrimaryLayer(this.zhy_1, this.ahz_1, tmp_1, tmp_2, JellyFab$slambda$slambda_4(null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.ehz_1 = suspendResult;
            this.n8_1 = 3;
            continue $sm;
          case 2:
            var tmp_3 = this;
            tmp_3.ehz_1 = Unit_instance;
            this.n8_1 = 3;
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
  protoOf(JellyFab$slambda_1).r1n = function ($this$LaunchedEffect, completion) {
    var i = new JellyFab$slambda_1(this.yhy_1, this.zhy_1, this.ahz_1, this.bhz_1, this.chz_1, completion);
    i.dhz_1 = $this$LaunchedEffect;
    return i;
  };
  function JellyFab$slambda_2($state, $primaryProgress, $bulges, $config, $didRunOnce$delegate, resultContinuation) {
    var i = new JellyFab$slambda_1($state, $primaryProgress, $bulges, $config, $didRunOnce$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.q1n($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JellyFab$slambda_3($state, $secondaryProgress, $config, resultContinuation) {
    this.nhz_1 = $state;
    this.ohz_1 = $secondaryProgress;
    this.phz_1 = $config;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JellyFab$slambda_3).q1n = function ($this$LaunchedEffect, $completion) {
    var tmp = this.r1n($this$LaunchedEffect, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(JellyFab$slambda_3).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JellyFab$slambda_3).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            if (this.nhz_1._v.fhw()) {
              this.n8_1 = 2;
              suspendResult = expandSecondaryLayer(this.ohz_1, this.phz_1._v, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 1;
              suspendResult = collapseSecondaryLayer(this.ohz_1, this.phz_1._v, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.n8_1 = 3;
            continue $sm;
          case 2:
            this.n8_1 = 3;
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
  protoOf(JellyFab$slambda_3).r1n = function ($this$LaunchedEffect, completion) {
    var i = new JellyFab$slambda_3(this.nhz_1, this.ohz_1, this.phz_1, completion);
    i.qhz_1 = $this$LaunchedEffect;
    return i;
  };
  function JellyFab$slambda_4($state, $secondaryProgress, $config, resultContinuation) {
    var i = new JellyFab$slambda_3($state, $secondaryProgress, $config, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.q1n($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JellyFab$lambda$slambda($state, $secondaryItems, $config, resultContinuation) {
    this.zhz_1 = $state;
    this.ai0_1 = $secondaryItems;
    this.bi0_1 = $config;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JellyFab$lambda$slambda).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(JellyFab$lambda$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JellyFab$lambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = JellyFab$collapseMenu(this.zhz_1, this.ai0_1, this.bi0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(JellyFab$lambda$slambda).r1n = function ($this$launch, completion) {
    var i = new JellyFab$lambda$slambda(this.zhz_1, this.ai0_1, this.bi0_1, completion);
    i.ci0_1 = $this$launch;
    return i;
  };
  function JellyFab$lambda$slambda_0($state, $secondaryItems, $config, resultContinuation) {
    var i = new JellyFab$lambda$slambda($state, $secondaryItems, $config, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JellyFab$lambda_3($scope, $state, $secondaryItems, $config) {
    return function () {
      launch($scope, VOID, VOID, JellyFab$lambda$slambda_0($state, $secondaryItems, $config, null));
      return Unit_instance;
    };
  }
  function JellyFab$lambda$slambda_1($state, $secondaryItems, $config, resultContinuation) {
    this.li0_1 = $state;
    this.mi0_1 = $secondaryItems;
    this.ni0_1 = $config;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JellyFab$lambda$slambda_1).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(JellyFab$lambda$slambda_1).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JellyFab$lambda$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = JellyFab$collapseMenu(this.li0_1, this.mi0_1, this.ni0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(JellyFab$lambda$slambda_1).r1n = function ($this$launch, completion) {
    var i = new JellyFab$lambda$slambda_1(this.li0_1, this.mi0_1, this.ni0_1, completion);
    i.oi0_1 = $this$launch;
    return i;
  };
  function JellyFab$lambda$slambda_2($state, $secondaryItems, $config, resultContinuation) {
    var i = new JellyFab$lambda$slambda_1($state, $secondaryItems, $config, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JellyFab$lambda_4($secondaryItems, $state, $scope, $config) {
    return function (index) {
      var tmp;
      if (index === 0) {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp = !$secondaryItems._v.n();
      } else {
        tmp = false;
      }
      if (tmp) {
        $state._v.pi0(!$state._v.fhw());
      } else {
        launch($scope, VOID, VOID, JellyFab$lambda$slambda_2($state, $secondaryItems, $config, null));
      }
      return Unit_instance;
    };
  }
  function JellyFab$lambda_5($secondaryItems, $secondLayerFabColor, $fabColor) {
    return function (index) {
      var tmp;
      var tmp_0;
      if (index === 0) {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_0 = !$secondaryItems._v.n();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = $secondLayerFabColor._v.n4u_1;
      } else {
        tmp = $fabColor._v.n4u_1;
      }
      return new Color_0(tmp);
    };
  }
  function JellyFab$lambda_6($secondaryItems, $state, $config, $primaryItems) {
    return function (index, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.p24(490014843);
      sourceInformation($composer_0, 'C:JellyFab.kt#81ts31');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(490014843, $changed, -1, 'io.github.iprashantpanwar.jellyfab.JellyFab.<anonymous>.<anonymous>.<anonymous> (JellyFab.kt:259)');
        tmp = Unit_instance;
      }
      var tmp_0;
      if (index === 0) {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_0 = !$secondaryItems._v.n();
      } else {
        tmp_0 = false;
      }
      var isSecondaryToggle = tmp_0;
      var tmp_1;
      if (isSecondaryToggle) {
        $composer_0.p24(-561503853);
        sourceInformation($composer_0, '261@9079L228');
        var tmp1_group = animatedSecondaryToggleIcon($state._v.fhw(), secondaryCollapseDuration($secondaryItems._v.l(), $config._v), $composer_0, 0, 0);
        $composer_0.q24();
        tmp_1 = tmp1_group;
      } else {
        $composer_0.p24(-561230433);
        $composer_0.q24();
        tmp_1 = $primaryItems.m(index).phw_1;
      }
      var tmp0 = tmp_1;
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      $composer_0.q24();
      return tmp0;
    };
  }
  function JellyFab$lambda_7($primaryPositions) {
    return function (index, position) {
      $primaryPositions.i2(index, position);
      return Unit_instance;
    };
  }
  function JellyFab$lambda_8($state, $secondaryProgress) {
    return function () {
      var tmp;
      if ($state._v.fhw()) {
        tmp = true;
      } else {
        var tmp0 = $secondaryProgress;
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp_0;
          if (isInterface(tmp0, Collection)) {
            tmp_0 = tmp0.n();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
          var _iterator__ex2g4s = tmp0.i();
          while (_iterator__ex2g4s.j()) {
            var element = _iterator__ex2g4s.k();
            if (element.v1() > 0.0) {
              tmp$ret$0 = true;
              break $l$block_0;
            }
          }
          tmp$ret$0 = false;
        }
        tmp = tmp$ret$0;
      }
      return tmp;
    };
  }
  function JellyFab$lambda$slambda_3($item, $state, $secondaryItems, $config, resultContinuation) {
    this.yi0_1 = $item;
    this.zi0_1 = $state;
    this.ai1_1 = $secondaryItems;
    this.bi1_1 = $config;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JellyFab$lambda$slambda_3).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(JellyFab$lambda$slambda_3).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JellyFab$lambda$slambda_3).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = JellyFab$collapseMenu(this.zi0_1, this.ai1_1, this.bi1_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.yi0_1.qhw_1();
            return Unit_instance;
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
  protoOf(JellyFab$lambda$slambda_3).r1n = function ($this$launch, completion) {
    var i = new JellyFab$lambda$slambda_3(this.yi0_1, this.zi0_1, this.ai1_1, this.bi1_1, completion);
    i.ci1_1 = $this$launch;
    return i;
  };
  function JellyFab$lambda$slambda_4($item, $state, $secondaryItems, $config, resultContinuation) {
    var i = new JellyFab$lambda$slambda_3($item, $state, $secondaryItems, $config, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JellyFab$lambda_9($scope, $state, $secondaryItems, $config) {
    return function (item) {
      launch($scope, VOID, VOID, JellyFab$lambda$slambda_4(item, $state, $secondaryItems, $config, null));
      return Unit_instance;
    };
  }
  function JellyFab$lambda$slambda_5($state, $secondaryItems, $config, resultContinuation) {
    this.li1_1 = $state;
    this.mi1_1 = $secondaryItems;
    this.ni1_1 = $config;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JellyFab$lambda$slambda_5).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(JellyFab$lambda$slambda_5).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JellyFab$lambda$slambda_5).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = JellyFab$collapseMenu(this.li1_1, this.mi1_1, this.ni1_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(JellyFab$lambda$slambda_5).r1n = function ($this$launch, completion) {
    var i = new JellyFab$lambda$slambda_5(this.li1_1, this.mi1_1, this.ni1_1, completion);
    i.oi1_1 = $this$launch;
    return i;
  };
  function JellyFab$lambda$slambda_6($state, $secondaryItems, $config, resultContinuation) {
    var i = new JellyFab$lambda$slambda_5($state, $secondaryItems, $config, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JellyFab$lambda_10($state, $scope, $secondaryItems, $config) {
    return function () {
      if (!$state._v.ehw()) {
        $state._v.pi1(true);
      } else {
        launch($scope, VOID, VOID, JellyFab$lambda$slambda_6($state, $secondaryItems, $config, null));
      }
      return Unit_instance;
    };
  }
  function JellyFab$lambda_11($modifier, $state, $fabSize, $miniFabSize, $fabColor, $secondLayerFabColor, $primaryItems, $secondaryItems, $showScrim, $config, $$changed, $$default) {
    return function ($composer, $force) {
      JellyFab($modifier._v, $state._v, $fabSize._v.q4n_1, $miniFabSize._v.q4n_1, $fabColor._v.n4u_1, $secondLayerFabColor._v.n4u_1, $primaryItems, $secondaryItems._v, $showScrim._v, $config._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Scrim$lambda_1($scrimAlpha$delegate) {
    return function () {
      return Scrim$lambda($scrimAlpha$delegate) > 0.01;
    };
  }
  function Scrim$lambda_2($scrimAlpha$delegate) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.q4j(Scrim$lambda($scrimAlpha$delegate));
      return Unit_instance;
    };
  }
  function Scrim$lambda_3($onClick) {
    return function () {
      $onClick();
      return Unit_instance;
    };
  }
  function Scrim$lambda_4($modifier, $visible, $onClick, $$changed, $$default) {
    return function ($composer, $force) {
      Scrim($modifier._v, $visible, $onClick, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function PrimaryFabLayer$lambda($onPositionChanged, $index) {
    return function (position) {
      $onPositionChanged($index, position);
      return Unit_instance;
    };
  }
  function PrimaryFabLayer$lambda_0($onClick, $index) {
    return function () {
      $onClick($index);
      return Unit_instance;
    };
  }
  function PrimaryFabLayer$lambda_1($items, $progress, $angles, $fabSize, $centerCorrect, $config, $onClick, $fabColor, $icon, $onPositionChanged, $$changed) {
    return function ($composer, $force) {
      PrimaryFabLayer($items, $progress, $angles, $fabSize, $centerCorrect, $config, $onClick, $fabColor, $icon, $onPositionChanged, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function animatedSecondaryToggleIcon$slambda($secondaryExpanded, $delayOnCollapse, $icon$delegate, resultContinuation) {
    this.yi1_1 = $secondaryExpanded;
    this.zi1_1 = $delayOnCollapse;
    this.ai2_1 = $icon$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animatedSecondaryToggleIcon$slambda).q1n = function ($this$LaunchedEffect, $completion) {
    var tmp = this.r1n($this$LaunchedEffect, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(animatedSecondaryToggleIcon$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animatedSecondaryToggleIcon$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            if (this.yi1_1) {
              animatedSecondaryToggleIcon$lambda_0(this.ai2_1, get_CloseIcon());
              this.n8_1 = 3;
              continue $sm;
            } else {
              this.n8_1 = 1;
              Companion_getInstance_7();
              var this_0 = this.zi1_1._v;
              suspendResult = delay(toDuration(this_0, DurationUnit_MILLISECONDS_getInstance()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            animatedSecondaryToggleIcon$lambda_0(this.ai2_1, get_MoreHorizontal());
            this.n8_1 = 3;
            continue $sm;
          case 2:
            throw this.q8_1;
          case 3:
            return Unit_instance;
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
  protoOf(animatedSecondaryToggleIcon$slambda).r1n = function ($this$LaunchedEffect, completion) {
    var i = new animatedSecondaryToggleIcon$slambda(this.yi1_1, this.zi1_1, this.ai2_1, completion);
    i.bi2_1 = $this$LaunchedEffect;
    return i;
  };
  function animatedSecondaryToggleIcon$slambda_0($secondaryExpanded, $delayOnCollapse, $icon$delegate, resultContinuation) {
    var i = new animatedSecondaryToggleIcon$slambda($secondaryExpanded, $delayOnCollapse, $icon$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.q1n($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SecondaryFabLayer$lambda($visible, $progress, $items, $anchor, $miniFabSize, $centerCorrect, $containerColor, $config, $onItemClick, $$changed) {
    return function ($composer, $force) {
      SecondaryFabLayer($visible, $progress, $items, $anchor, $miniFabSize, $centerCorrect, $containerColor, $config, $onItemClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SecondaryFabLayer$lambda_0($onItemClick, $item) {
    return function () {
      $onItemClick($item);
      return Unit_instance;
    };
  }
  function SecondaryFabLayer$lambda_1($visible, $progress, $items, $anchor, $miniFabSize, $centerCorrect, $containerColor, $config, $onItemClick, $$changed) {
    return function ($composer, $force) {
      SecondaryFabLayer($visible, $progress, $items, $anchor, $miniFabSize, $centerCorrect, $containerColor, $config, $onItemClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function JellyFabBlob$lambda($rotation) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.a4k($rotation.v1());
      return Unit_instance;
    };
  }
  function JellyFabBlob$lambda_0($size, $color, $bulges, $bulgeAngles, $shadowOpacity, $shadowBlurFactor, $bounceFactor, $rotation, $onClick, $$changed) {
    return function ($composer, $force) {
      JellyFabBlob($size, $color, $bulges, $bulgeAngles, $shadowOpacity, $shadowBlurFactor, $bounceFactor, $rotation, $onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PrimaryFabItem$lambda($progress, $angleDeg, $layerDistance, $centerCorrect, $onPositionChanged) {
    return function ($this$offset) {
      var p = $progress.v1();
      var angleRad = toRadians($angleDeg);
      // Inline function 'kotlin.math.cos' call
      var dx = Math.cos(angleRad) * _Dp___get_value__impl__geb1vb($layerDistance) * p;
      // Inline function 'kotlin.math.sin' call
      var dy = Math.sin(angleRad) * _Dp___get_value__impl__geb1vb($layerDistance) * p;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp0 = _Dp___init__impl__ms3zkb(dx);
      // Inline function 'androidx.compose.ui.unit.Dp.plus' call
      var other = $centerCorrect;
      var dxDp = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0) + _Dp___get_value__impl__geb1vb(other));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp0_0 = _Dp___init__impl__ms3zkb(dy);
      // Inline function 'androidx.compose.ui.unit.Dp.plus' call
      var other_0 = $centerCorrect;
      var dyDp = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_0) + _Dp___get_value__impl__geb1vb(other_0));
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var v1 = fromInt(toRawBits(dx));
      var v2 = fromInt(toRawBits(dy));
      var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      var tmp$ret$7 = _Offset___init__impl__c168vi(tmp$ret$6);
      $onPositionChanged(new Offset(tmp$ret$7));
      var tmp0_1 = $this$offset.b4n(dxDp);
      // Inline function 'androidx.compose.ui.unit.IntOffset' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = $this$offset.b4n(dyDp);
      var tmp$ret$8 = bitwiseOr(shiftLeft(fromInt(tmp0_1), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$9 = _IntOffset___init__impl__rq8h7b(tmp$ret$8);
      return new IntOffset(tmp$ret$9);
    };
  }
  function PrimaryFabItem$lambda_0($progress) {
    return function ($this$graphicsLayer) {
      var p = $progress.v1();
      $this$graphicsLayer.r4j(0.8 + 0.2 * p);
      $this$graphicsLayer.s4j(0.8 + 0.2 * p);
      return Unit_instance;
    };
  }
  function PrimaryFabItem$lambda_1($icon) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C501@18423L57:JellyFab.kt#81ts31');
      var tmp;
      if ($composer_0.q25(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-194651465, $changed, -1, 'io.github.iprashantpanwar.jellyfab.PrimaryFabItem.<anonymous> (JellyFab.kt:501)');
        }
        Icon($icon, null, null, Companion_getInstance_6().x4q_1, $composer_0, 3120, 4);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.y24();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.e2k(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function PrimaryFabItem$lambda_2($progress, $angleDeg, $layerDistance, $centerCorrect, $miniFabSize, $containerColor, $icon, $onPositionChanged, $onClick, $$changed) {
    return function ($composer, $force) {
      PrimaryFabItem($progress, $angleDeg, $layerDistance, $centerCorrect, $miniFabSize, $containerColor, $icon, $onPositionChanged, $onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SecondaryFabItem$lambda($anchor, $index, $targets, $progress, $centerCorrect) {
    return function ($this$offset) {
      var origin = $anchor;
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < $index) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          origin = lerpOffset(origin, $targets.m(i).p3t_1, $progress.m(i).v1());
        }
         while (inductionVariable < $index);
        tmp = Unit_instance;
      }
      var current = lerpOffset(origin, $targets.m($index).p3t_1, $progress.m($index).v1());
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(current);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var this_0 = floatFromBits(bits);
      var tmp0 = _Dp___init__impl__ms3zkb(this_0);
      // Inline function 'androidx.compose.ui.unit.Dp.plus' call
      var other = $centerCorrect;
      var tmp$ret$5 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0) + _Dp___get_value__impl__geb1vb(other));
      var tmp0_0 = $this$offset.b4n(tmp$ret$5);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(current);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var this_1 = floatFromBits(bits_0);
      var tmp0_1 = _Dp___init__impl__ms3zkb(this_1);
      // Inline function 'androidx.compose.ui.unit.Dp.plus' call
      var other_0 = $centerCorrect;
      var tmp$ret$11 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_1) + _Dp___get_value__impl__geb1vb(other_0));
      // Inline function 'androidx.compose.ui.unit.IntOffset' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = $this$offset.b4n(tmp$ret$11);
      var tmp$ret$12 = bitwiseOr(shiftLeft(fromInt(tmp0_0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$13 = _IntOffset___init__impl__rq8h7b(tmp$ret$12);
      return new IntOffset(tmp$ret$13);
    };
  }
  function SecondaryFabItem$lambda_0($progress, $index) {
    return function ($this$graphicsLayer) {
      var p = $progress.m($index).v1();
      $this$graphicsLayer.q4j(p);
      $this$graphicsLayer.r4j(0.8 + 0.2 * p);
      $this$graphicsLayer.s4j(0.8 + 0.2 * p);
      return Unit_instance;
    };
  }
  function SecondaryFabItem$lambda_1($icon) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C640@23515L117:JellyFab.kt#81ts31');
      var tmp;
      if ($composer_0.q25(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(1809532997, $changed, -1, 'io.github.iprashantpanwar.jellyfab.SecondaryFabItem.<anonymous> (JellyFab.kt:640)');
        }
        Icon($icon, null, null, Companion_getInstance_6().x4q_1, $composer_0, 3120, 4);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.y24();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.e2k(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function SecondaryFabItem$lambda_2($index, $progress, $anchor, $targets, $miniFabSize, $centerCorrect, $containerColor, $icon, $onClick, $$changed) {
    return function ($composer, $force) {
      SecondaryFabItem($index, $progress, $anchor, $targets, $miniFabSize, $centerCorrect, $containerColor, $icon, $onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function $JellyFab$collapseMenuCOROUTINE$(state, secondaryItems, config, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.zhw_1 = state;
    this.ahx_1 = secondaryItems;
    this.bhx_1 = config;
  }
  protoOf($JellyFab$collapseMenuCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            if (this.zhw_1._v.fhw()) {
              this.zhw_1._v.pi0(false);
              this.n8_1 = 1;
              Companion_getInstance_7();
              var this_0 = secondaryCollapseDuration(this.ahx_1._v.l(), this.bhx_1._v);
              suspendResult = delay(toDuration(this_0, DurationUnit_MILLISECONDS_getInstance()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 2;
              continue $sm;
            }

          case 1:
            this.n8_1 = 2;
            continue $sm;
          case 2:
            this.zhw_1._v.pi1(false);
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
  var io_github_iprashantpanwar_jellyfab_JellyFabConfig$stable;
  function JellyFabConfig(expandStagger, collapseStagger, secondaryExpandStagger, secondaryCollapseStagger, shadowOpacity, shadowBlurFactor, bounceFactor, secondaryLayerSpacingMultiplier, layerDistance) {
    expandStagger = expandStagger === VOID ? new Long(150, 0) : expandStagger;
    collapseStagger = collapseStagger === VOID ? new Long(100, 0) : collapseStagger;
    secondaryExpandStagger = secondaryExpandStagger === VOID ? new Long(150, 0) : secondaryExpandStagger;
    secondaryCollapseStagger = secondaryCollapseStagger === VOID ? new Long(80, 0) : secondaryCollapseStagger;
    shadowOpacity = shadowOpacity === VOID ? 0.55 : shadowOpacity;
    shadowBlurFactor = shadowBlurFactor === VOID ? 0.2 : shadowBlurFactor;
    bounceFactor = bounceFactor === VOID ? 0.18 : bounceFactor;
    secondaryLayerSpacingMultiplier = secondaryLayerSpacingMultiplier === VOID ? 1.8 : secondaryLayerSpacingMultiplier;
    var tmp;
    if (layerDistance === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(80);
    } else {
      tmp = layerDistance;
    }
    layerDistance = tmp;
    this.ghw_1 = expandStagger;
    this.hhw_1 = collapseStagger;
    this.ihw_1 = secondaryExpandStagger;
    this.jhw_1 = secondaryCollapseStagger;
    this.khw_1 = shadowOpacity;
    this.lhw_1 = shadowBlurFactor;
    this.mhw_1 = bounceFactor;
    this.nhw_1 = secondaryLayerSpacingMultiplier;
    this.ohw_1 = layerDistance;
  }
  protoOf(JellyFabConfig).toString = function () {
    return 'JellyFabConfig(expandStagger=' + this.ghw_1.toString() + ', collapseStagger=' + this.hhw_1.toString() + ', secondaryExpandStagger=' + this.ihw_1.toString() + ', secondaryCollapseStagger=' + this.jhw_1.toString() + ', shadowOpacity=' + this.khw_1 + ', shadowBlurFactor=' + this.lhw_1 + ', bounceFactor=' + this.mhw_1 + ', secondaryLayerSpacingMultiplier=' + this.nhw_1 + ', layerDistance=' + Dp__toString_impl_kcddez(this.ohw_1) + ')';
  };
  protoOf(JellyFabConfig).hashCode = function () {
    var result = this.ghw_1.hashCode();
    result = imul(result, 31) + this.hhw_1.hashCode() | 0;
    result = imul(result, 31) + this.ihw_1.hashCode() | 0;
    result = imul(result, 31) + this.jhw_1.hashCode() | 0;
    result = imul(result, 31) + getNumberHashCode(this.khw_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.lhw_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.mhw_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.nhw_1) | 0;
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.ohw_1) | 0;
    return result;
  };
  protoOf(JellyFabConfig).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JellyFabConfig))
      return false;
    if (!equalsLong(this.ghw_1, other.ghw_1))
      return false;
    if (!equalsLong(this.hhw_1, other.hhw_1))
      return false;
    if (!equalsLong(this.ihw_1, other.ihw_1))
      return false;
    if (!equalsLong(this.jhw_1, other.jhw_1))
      return false;
    if (!equals(this.khw_1, other.khw_1))
      return false;
    if (!equals(this.lhw_1, other.lhw_1))
      return false;
    if (!equals(this.mhw_1, other.mhw_1))
      return false;
    if (!equals(this.nhw_1, other.nhw_1))
      return false;
    if (!equals(this.ohw_1, other.ohw_1))
      return false;
    return true;
  };
  var io_github_iprashantpanwar_jellyfab_JellyFabItem$stable;
  function JellyFabItem$_init_$lambda_ea9cc1() {
    return Unit_instance;
  }
  function JellyFabItem(icon, onClick) {
    var tmp;
    if (onClick === VOID) {
      tmp = JellyFabItem$_init_$lambda_ea9cc1;
    } else {
      tmp = onClick;
    }
    onClick = tmp;
    this.phw_1 = icon;
    this.qhw_1 = onClick;
  }
  protoOf(JellyFabItem).toString = function () {
    return 'JellyFabItem(icon=' + toString(this.phw_1) + ', onClick=' + toString(this.qhw_1) + ')';
  };
  protoOf(JellyFabItem).hashCode = function () {
    var result = this.phw_1.hashCode();
    result = imul(result, 31) + hashCode(this.qhw_1) | 0;
    return result;
  };
  protoOf(JellyFabItem).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JellyFabItem))
      return false;
    if (!this.phw_1.equals(other.phw_1))
      return false;
    if (!equals(this.qhw_1, other.qhw_1))
      return false;
    return true;
  };
  var io_github_iprashantpanwar_jellyfab_JellyFabState$stable;
  function JellyFabState(expandedState, secondaryExpandedState) {
    this.chw_1 = expandedState;
    this.dhw_1 = secondaryExpandedState;
  }
  protoOf(JellyFabState).pi1 = function (value) {
    this.chw_1.t1k(value);
    if (!value) {
      this.dhw_1.t1k(false);
    }
  };
  protoOf(JellyFabState).ehw = function () {
    return this.chw_1.v1();
  };
  protoOf(JellyFabState).pi0 = function (value) {
    if (value) {
      this.chw_1.t1k(true);
    }
    this.dhw_1.t1k(value);
  };
  protoOf(JellyFabState).fhw = function () {
    return this.dhw_1.v1();
  };
  function rememberJellyFabState(initialExpanded, initialSecondaryExpanded, $composer, $changed, $default) {
    var initialExpanded_0 = initialExpanded;
    var initialSecondaryExpanded_0 = initialSecondaryExpanded;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -2053444692, 'C(rememberJellyFabState)51@1516L187:JellyFabState.kt#81ts31');
    if (!(($default & 1) === 0))
      initialExpanded_0 = false;
    if (!(($default & 2) === 0))
      initialSecondaryExpanded_0 = false;
    if (isTraceInProgress()) {
      traceEventStart(-2053444692, $changed, -1, 'io.github.iprashantpanwar.jellyfab.rememberJellyFabState (JellyFabState.kt:51)');
    }
    sourceInformationMarkerStart($composer_0, -1970355801, 'CC(remember):JellyFabState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.h25();
    var tmp;
    if (false || it === Companion_getInstance_2().i24_1) {
      var value = new JellyFabState(mutableStateOf(initialExpanded_0), mutableStateOf(initialExpanded_0 && initialSecondaryExpanded_0));
      $composer_0.i25(value);
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
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function expandPrimaryLayer(primaryProgress, bulges, config, bounceLastBulge, $completion) {
    return coroutineScope(expandPrimaryLayer$slambda_0(primaryProgress, config, bounceLastBulge, bulges, null), $completion);
  }
  function playDoubleBounce(target, outward, soft, $completion) {
    soft = soft === VOID ? false : soft;
    var tmp = new $playDoubleBounceCOROUTINE$(target, outward, soft, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function collapsePrimaryLayer(primaryProgress, bulges, config, bounceTopBulge, bounceSideBulge, $completion) {
    return coroutineScope(collapsePrimaryLayer$slambda_0(primaryProgress, config, bulges, bounceTopBulge, bounceSideBulge, null), $completion);
  }
  function expandSecondaryLayer(secondaryProgress, config, $completion) {
    return coroutineScope(expandSecondaryLayer$slambda_0(secondaryProgress, config, null), $completion);
  }
  function collapseSecondaryLayer(secondaryProgress, config, $completion) {
    return coroutineScope(collapseSecondaryLayer$slambda_0(secondaryProgress, config, null), $completion);
  }
  function secondaryCollapseDuration(secondaryCount, config) {
    if (secondaryCount <= 0)
      return new Long(0, 0);
    var tailStagger = multiply(numberToLong(secondaryCount - 1 | 0), config.jhw_1);
    return add(tailStagger, new Long(200, 0));
  }
  function expandPrimaryLayer$slambda$slambda($primaryProgress, $i, resultContinuation) {
    this.xi2_1 = $primaryProgress;
    this.yi2_1 = $i;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(expandPrimaryLayer$slambda$slambda).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(expandPrimaryLayer$slambda$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(expandPrimaryLayer$slambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.xi2_1.m(this.yi2_1).aaz(1.0, tween(400, VOID, get_FastOutSlowInEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(expandPrimaryLayer$slambda$slambda).r1n = function ($this$launch, completion) {
    var i = new expandPrimaryLayer$slambda$slambda(this.xi2_1, this.yi2_1, completion);
    i.zi2_1 = $this$launch;
    return i;
  };
  function expandPrimaryLayer$slambda$slambda_0($primaryProgress, $i, resultContinuation) {
    var i = new expandPrimaryLayer$slambda$slambda($primaryProgress, $i, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function expandPrimaryLayer$slambda$slambda_1($bulges, $i, resultContinuation) {
    this.ii3_1 = $bulges;
    this.ji3_1 = $i;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(expandPrimaryLayer$slambda$slambda_1).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(expandPrimaryLayer$slambda$slambda_1).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(expandPrimaryLayer$slambda$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            this.n8_1 = 1;
            suspendResult = this.ii3_1.m(this.ji3_1).baz(0.0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n8_1 = 2;
            suspendResult = this.ii3_1.m(this.ji3_1).aaz(1.0, tween(140, VOID, get_LinearOutSlowInEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n8_1 = 3;
            suspendResult = this.ii3_1.m(this.ji3_1).aaz(0.0, spring(0.2), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  protoOf(expandPrimaryLayer$slambda$slambda_1).r1n = function ($this$launch, completion) {
    var i = new expandPrimaryLayer$slambda$slambda_1(this.ii3_1, this.ji3_1, completion);
    i.ki3_1 = $this$launch;
    return i;
  };
  function expandPrimaryLayer$slambda$slambda_2($bulges, $i, resultContinuation) {
    var i = new expandPrimaryLayer$slambda$slambda_1($bulges, $i, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function expandPrimaryLayer$slambda($primaryProgress, $config, $bounceLastBulge, $bulges, resultContinuation) {
    this.ti3_1 = $primaryProgress;
    this.ui3_1 = $config;
    this.vi3_1 = $bounceLastBulge;
    this.wi3_1 = $bulges;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(expandPrimaryLayer$slambda).q1n = function ($this$coroutineScope, $completion) {
    var tmp = this.r1n($this$coroutineScope, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(expandPrimaryLayer$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(expandPrimaryLayer$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 6;
            this.zi3_1 = get_indices(this.ti3_1).i();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!this.zi3_1.j()) {
              this.n8_1 = 5;
              continue $sm;
            }

            var element = this.zi3_1.k();
            this.yi3_1 = element;
            launch(this.xi3_1, VOID, VOID, expandPrimaryLayer$slambda$slambda_0(this.ti3_1, this.yi3_1, null));
            launch(this.xi3_1, VOID, VOID, expandPrimaryLayer$slambda$slambda_2(this.wi3_1, this.yi3_1, null));
            this.n8_1 = 2;
            suspendResult = delay_0(this.ui3_1.ghw_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (this.yi3_1 === get_lastIndex(this.ti3_1)) {
              this.n8_1 = 3;
              suspendResult = this.vi3_1(this.wi3_1.m(this.yi3_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 4;
              continue $sm;
            }

          case 3:
            this.n8_1 = 4;
            continue $sm;
          case 4:
            this.n8_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 6) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(expandPrimaryLayer$slambda).r1n = function ($this$coroutineScope, completion) {
    var i = new expandPrimaryLayer$slambda(this.ti3_1, this.ui3_1, this.vi3_1, this.wi3_1, completion);
    i.xi3_1 = $this$coroutineScope;
    return i;
  };
  function expandPrimaryLayer$slambda_0($primaryProgress, $config, $bounceLastBulge, $bulges, resultContinuation) {
    var i = new expandPrimaryLayer$slambda($primaryProgress, $config, $bounceLastBulge, $bulges, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.q1n($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collapsePrimaryLayer$slambda$slambda($bulges, $i, resultContinuation) {
    this.ii4_1 = $bulges;
    this.ji4_1 = $i;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collapsePrimaryLayer$slambda$slambda).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(collapsePrimaryLayer$slambda$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collapsePrimaryLayer$slambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            this.n8_1 = 1;
            suspendResult = this.ii4_1.m(this.ji4_1).baz(0.0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n8_1 = 2;
            suspendResult = this.ii4_1.m(this.ji4_1).aaz(0.3, tween(100), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n8_1 = 3;
            suspendResult = this.ii4_1.m(this.ji4_1).aaz(0.0, tween(160), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  protoOf(collapsePrimaryLayer$slambda$slambda).r1n = function ($this$launch, completion) {
    var i = new collapsePrimaryLayer$slambda$slambda(this.ii4_1, this.ji4_1, completion);
    i.ki4_1 = $this$launch;
    return i;
  };
  function collapsePrimaryLayer$slambda$slambda_0($bulges, $i, resultContinuation) {
    var i = new collapsePrimaryLayer$slambda$slambda($bulges, $i, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collapsePrimaryLayer$slambda$slambda_1($primaryProgress, $i, resultContinuation) {
    this.ti4_1 = $primaryProgress;
    this.ui4_1 = $i;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collapsePrimaryLayer$slambda$slambda_1).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(collapsePrimaryLayer$slambda$slambda_1).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collapsePrimaryLayer$slambda$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.ti4_1.m(this.ui4_1).aaz(0.0, tween(300, VOID, get_FastOutSlowInEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(collapsePrimaryLayer$slambda$slambda_1).r1n = function ($this$launch, completion) {
    var i = new collapsePrimaryLayer$slambda$slambda_1(this.ti4_1, this.ui4_1, completion);
    i.vi4_1 = $this$launch;
    return i;
  };
  function collapsePrimaryLayer$slambda$slambda_2($primaryProgress, $i, resultContinuation) {
    var i = new collapsePrimaryLayer$slambda$slambda_1($primaryProgress, $i, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collapsePrimaryLayer$slambda$slambda_3($bounceTopBulge, $bulges, resultContinuation) {
    this.ei5_1 = $bounceTopBulge;
    this.fi5_1 = $bulges;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collapsePrimaryLayer$slambda$slambda_3).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(collapsePrimaryLayer$slambda$slambda_3).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collapsePrimaryLayer$slambda$slambda_3).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.ei5_1(first(this.fi5_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(collapsePrimaryLayer$slambda$slambda_3).r1n = function ($this$launch, completion) {
    var i = new collapsePrimaryLayer$slambda$slambda_3(this.ei5_1, this.fi5_1, completion);
    i.gi5_1 = $this$launch;
    return i;
  };
  function collapsePrimaryLayer$slambda$slambda_4($bounceTopBulge, $bulges, resultContinuation) {
    var i = new collapsePrimaryLayer$slambda$slambda_3($bounceTopBulge, $bulges, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collapsePrimaryLayer$slambda$slambda_5($bounceSideBulge, $bulges, resultContinuation) {
    this.pi5_1 = $bounceSideBulge;
    this.qi5_1 = $bulges;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collapsePrimaryLayer$slambda$slambda_5).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(collapsePrimaryLayer$slambda$slambda_5).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collapsePrimaryLayer$slambda$slambda_5).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            this.n8_1 = 1;
            suspendResult = delay_0(new Long(50, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n8_1 = 2;
            suspendResult = this.pi5_1(last(this.qi5_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  protoOf(collapsePrimaryLayer$slambda$slambda_5).r1n = function ($this$launch, completion) {
    var i = new collapsePrimaryLayer$slambda$slambda_5(this.pi5_1, this.qi5_1, completion);
    i.ri5_1 = $this$launch;
    return i;
  };
  function collapsePrimaryLayer$slambda$slambda_6($bounceSideBulge, $bulges, resultContinuation) {
    var i = new collapsePrimaryLayer$slambda$slambda_5($bounceSideBulge, $bulges, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collapsePrimaryLayer$slambda($primaryProgress, $config, $bulges, $bounceTopBulge, $bounceSideBulge, resultContinuation) {
    this.ai6_1 = $primaryProgress;
    this.bi6_1 = $config;
    this.ci6_1 = $bulges;
    this.di6_1 = $bounceTopBulge;
    this.ei6_1 = $bounceSideBulge;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collapsePrimaryLayer$slambda).me7 = function ($this$coroutineScope, $completion) {
    var tmp = this.r1n($this$coroutineScope, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(collapsePrimaryLayer$slambda).f9 = function (p1, $completion) {
    return this.me7((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collapsePrimaryLayer$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            this.gi6_1 = get_indices(this.ai6_1).i();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!this.gi6_1.j()) {
              this.n8_1 = 3;
              continue $sm;
            }

            var i = this.gi6_1.k();
            launch(this.fi6_1, VOID, VOID, collapsePrimaryLayer$slambda$slambda_0(this.ci6_1, i, null));
            launch(this.fi6_1, VOID, VOID, collapsePrimaryLayer$slambda$slambda_2(this.ai6_1, i, null));
            this.n8_1 = 2;
            suspendResult = delay_0(this.bi6_1.hhw_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n8_1 = 1;
            continue $sm;
          case 3:
            launch(this.fi6_1, VOID, VOID, collapsePrimaryLayer$slambda$slambda_4(this.di6_1, this.ci6_1, null));
            return launch(this.fi6_1, VOID, VOID, collapsePrimaryLayer$slambda$slambda_6(this.ei6_1, this.ci6_1, null));
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
  protoOf(collapsePrimaryLayer$slambda).r1n = function ($this$coroutineScope, completion) {
    var i = new collapsePrimaryLayer$slambda(this.ai6_1, this.bi6_1, this.ci6_1, this.di6_1, this.ei6_1, completion);
    i.fi6_1 = $this$coroutineScope;
    return i;
  };
  function collapsePrimaryLayer$slambda_0($primaryProgress, $config, $bulges, $bounceTopBulge, $bounceSideBulge, resultContinuation) {
    var i = new collapsePrimaryLayer$slambda($primaryProgress, $config, $bulges, $bounceTopBulge, $bounceSideBulge, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.me7($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function expandSecondaryLayer$slambda$slambda($i, $config, $secondaryProgress, resultContinuation) {
    this.pi6_1 = $i;
    this.qi6_1 = $config;
    this.ri6_1 = $secondaryProgress;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(expandSecondaryLayer$slambda$slambda).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(expandSecondaryLayer$slambda$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(expandSecondaryLayer$slambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            this.n8_1 = 1;
            suspendResult = delay_0(multiply(numberToLong(this.pi6_1), this.qi6_1.ihw_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n8_1 = 2;
            suspendResult = this.ri6_1.m(this.pi6_1).aaz(1.06, tween(320, VOID, get_FastOutSlowInEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n8_1 = 3;
            suspendResult = this.ri6_1.m(this.pi6_1).aaz(1.0, spring(0.5), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  protoOf(expandSecondaryLayer$slambda$slambda).r1n = function ($this$launch, completion) {
    var i = new expandSecondaryLayer$slambda$slambda(this.pi6_1, this.qi6_1, this.ri6_1, completion);
    i.si6_1 = $this$launch;
    return i;
  };
  function expandSecondaryLayer$slambda$slambda_0($i, $config, $secondaryProgress, resultContinuation) {
    var i = new expandSecondaryLayer$slambda$slambda($i, $config, $secondaryProgress, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function expandSecondaryLayer$slambda($secondaryProgress, $config, resultContinuation) {
    this.bi7_1 = $secondaryProgress;
    this.ci7_1 = $config;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(expandSecondaryLayer$slambda).q1n = function ($this$coroutineScope, $completion) {
    var tmp = this.r1n($this$coroutineScope, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(expandSecondaryLayer$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(expandSecondaryLayer$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
          var progression = get_indices(this.bi7_1);
          var inductionVariable = progression.y_1;
          var last = progression.z_1;
          if (inductionVariable <= last)
            do {
              var element = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var i = element;
              launch(this.di7_1, VOID, VOID, expandSecondaryLayer$slambda$slambda_0(i, this.ci7_1, this.bi7_1, null));
            }
             while (!(element === last));
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
  protoOf(expandSecondaryLayer$slambda).r1n = function ($this$coroutineScope, completion) {
    var i = new expandSecondaryLayer$slambda(this.bi7_1, this.ci7_1, completion);
    i.di7_1 = $this$coroutineScope;
    return i;
  };
  function expandSecondaryLayer$slambda_0($secondaryProgress, $config, resultContinuation) {
    var i = new expandSecondaryLayer$slambda($secondaryProgress, $config, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.q1n($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collapseSecondaryLayer$slambda$slambda($secondaryProgress, $i, $config, resultContinuation) {
    this.mi7_1 = $secondaryProgress;
    this.ni7_1 = $i;
    this.oi7_1 = $config;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collapseSecondaryLayer$slambda$slambda).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(collapseSecondaryLayer$slambda$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collapseSecondaryLayer$slambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            this.n8_1 = 1;
            suspendResult = delay_0(multiply(numberToLong((this.mi7_1.l() - 1 | 0) - this.ni7_1 | 0), this.oi7_1.jhw_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n8_1 = 2;
            suspendResult = this.mi7_1.m(this.ni7_1).aaz(0.0, tween(300, VOID, get_FastOutSlowInEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  protoOf(collapseSecondaryLayer$slambda$slambda).r1n = function ($this$launch, completion) {
    var i = new collapseSecondaryLayer$slambda$slambda(this.mi7_1, this.ni7_1, this.oi7_1, completion);
    i.pi7_1 = $this$launch;
    return i;
  };
  function collapseSecondaryLayer$slambda$slambda_0($secondaryProgress, $i, $config, resultContinuation) {
    var i = new collapseSecondaryLayer$slambda$slambda($secondaryProgress, $i, $config, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collapseSecondaryLayer$slambda($secondaryProgress, $config, resultContinuation) {
    this.yi7_1 = $secondaryProgress;
    this.zi7_1 = $config;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collapseSecondaryLayer$slambda).q1n = function ($this$coroutineScope, $completion) {
    var tmp = this.r1n($this$coroutineScope, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(collapseSecondaryLayer$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collapseSecondaryLayer$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
          var inductionVariable = this.yi7_1.l() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              launch(this.ai8_1, VOID, VOID, collapseSecondaryLayer$slambda$slambda_0(this.yi7_1, i, this.zi7_1, null));
            }
             while (0 <= inductionVariable);
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
  protoOf(collapseSecondaryLayer$slambda).r1n = function ($this$coroutineScope, completion) {
    var i = new collapseSecondaryLayer$slambda(this.yi7_1, this.zi7_1, completion);
    i.ai8_1 = $this$coroutineScope;
    return i;
  };
  function collapseSecondaryLayer$slambda_0($secondaryProgress, $config, resultContinuation) {
    var i = new collapseSecondaryLayer$slambda($secondaryProgress, $config, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.q1n($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $playDoubleBounceCOROUTINE$(target, outward, soft, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ki2_1 = target;
    this.li2_1 = outward;
    this.mi2_1 = soft;
  }
  protoOf($playDoubleBounceCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            var dir = this.li2_1 ? 1.0 : -1.0;
            this.ni2_1 = this.mi2_1 ? listOf_0([0.0, 0.7 * dir, -0.3 * dir, 0.1 * dir, 0.0]) : listOf_0([0.0, 1.0 * dir, -0.6 * dir, 0.3 * dir, 0.0]);
            this.oi2_1 = until(1, this.ni2_1.l()).i();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!this.oi2_1.j()) {
              this.n8_1 = 3;
              continue $sm;
            }

            var i = this.oi2_1.k();
            this.n8_1 = 2;
            suspendResult = this.ki2_1.aaz(this.ni2_1.m(i), tween(90, VOID, get_LinearOutSlowInEasing()), VOID, VOID, this);
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
  function toRadians(_this__u8e3s4) {
    return _this__u8e3s4 * 3.141592653589793 / 180.0;
  }
  var _MoreHorizontal;
  function get_MoreHorizontal() {
    if (!(_MoreHorizontal == null)) {
      return ensureNotNull(_MoreHorizontal);
    }
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(24);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(24);
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder('MoreHorizontal', tmp, tmp$ret$1, 960.0, 960.0);
    var tmp2 = new SolidColor(Color(new Long(-1842205, 0)));
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var pathFillType = Companion_getInstance_1().k4x_1;
    var strokeLineCap = get_DefaultStrokeLineCap();
    var strokeLineJoin = get_DefaultStrokeLineJoin();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with = new PathBuilder();
    $this$with.v44(240.0, 560.0);
    $this$with.z44(207.0, 560.0, 183.5, 536.5);
    $this$with.z44(160.0, 513.0, 160.0, 480.0);
    $this$with.z44(160.0, 447.0, 183.5, 423.5);
    $this$with.z44(207.0, 400.0, 240.0, 400.0);
    $this$with.z44(273.0, 400.0, 296.5, 423.5);
    $this$with.z44(320.0, 447.0, 320.0, 480.0);
    $this$with.z44(320.0, 513.0, 296.5, 536.5);
    $this$with.z44(273.0, 560.0, 240.0, 560.0);
    $this$with.v44(480.0, 560.0);
    $this$with.z44(447.0, 560.0, 423.5, 536.5);
    $this$with.z44(400.0, 513.0, 400.0, 480.0);
    $this$with.z44(400.0, 447.0, 423.5, 423.5);
    $this$with.z44(447.0, 400.0, 480.0, 400.0);
    $this$with.z44(513.0, 400.0, 536.5, 423.5);
    $this$with.z44(560.0, 447.0, 560.0, 480.0);
    $this$with.z44(560.0, 513.0, 536.5, 536.5);
    $this$with.z44(513.0, 560.0, 480.0, 560.0);
    $this$with.v44(720.0, 560.0);
    $this$with.z44(687.0, 560.0, 663.5, 536.5);
    $this$with.z44(640.0, 513.0, 640.0, 480.0);
    $this$with.z44(640.0, 447.0, 663.5, 423.5);
    $this$with.z44(687.0, 400.0, 720.0, 400.0);
    $this$with.z44(753.0, 400.0, 776.5, 423.5);
    $this$with.z44(800.0, 447.0, 800.0, 480.0);
    $this$with.z44(800.0, 513.0, 776.5, 536.5);
    $this$with.z44(753.0, 560.0, 720.0, 560.0);
    var tmp$ret$5 = $this$with.o57();
    this_0.c73(tmp$ret$5, pathFillType, '', tmp2, 1.0, null, 1.0, 0.0, strokeLineCap, strokeLineJoin, 4.0);
    _MoreHorizontal = this_0.o2e();
    return ensureNotNull(_MoreHorizontal);
  }
  function createBlurPaint(color, radius) {
    // Inline function 'kotlin.apply' call
    var this_0 = Paint();
    this_0.f4q(color);
    this_0.q43(false);
    this_0.q52(Companion_getInstance_8().o4w_1);
    this_0.a5c().k44(Companion_getInstance_9().i43(FilterBlurMode_NORMAL_getInstance(), radius, true));
    return this_0;
  }
  //region block: init
  io_github_iprashantpanwar_jellyfab_generated_resources_Res_drawable$stable = 0;
  io_github_iprashantpanwar_jellyfab_generated_resources_Res_string$stable = 0;
  io_github_iprashantpanwar_jellyfab_generated_resources_Res_array$stable = 0;
  io_github_iprashantpanwar_jellyfab_generated_resources_Res_plurals$stable = 0;
  io_github_iprashantpanwar_jellyfab_generated_resources_Res_font$stable = 0;
  io_github_iprashantpanwar_jellyfab_generated_resources_Res$stable = 0;
  _CloseIcon = null;
  io_github_iprashantpanwar_jellyfab_JellyFabConfig$stable = 0;
  io_github_iprashantpanwar_jellyfab_JellyFabItem$stable = 0;
  io_github_iprashantpanwar_jellyfab_JellyFabState$stable = 0;
  _MoreHorizontal = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = JellyFabItem;
  _.$_$.b = JellyFab;
  _.$_$.c = rememberJellyFabState;
  //endregion
  return _;
}));

//# sourceMappingURL=JellyFab-jellyfab.js.map
