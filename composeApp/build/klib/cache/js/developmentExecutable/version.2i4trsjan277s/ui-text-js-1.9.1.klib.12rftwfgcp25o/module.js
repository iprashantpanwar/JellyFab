(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './androidx-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-util.js', './androidx-compose-runtime-runtime-saveable.js', './androidx-compose-runtime-runtime.js', './kotlinx-coroutines-core.js', './kotlinx-atomicfu.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./androidx-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'), require('./androidx-compose-runtime-runtime-saveable.js'), require('./androidx-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-atomicfu.js'), require('./skiko-kjs.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'androidx-compose-runtime-runtime-saveable' was not found. Please, check whether 'androidx-compose-runtime-runtime-saveable' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-text'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['androidx-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['androidx-compose-runtime-runtime-saveable'], globalThis['androidx-compose-runtime-runtime'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-atomicfu'], globalThis['skiko-kjs']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_androidx_collection_collection, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_androidx_compose_runtime_runtime_saveable, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.yg;
  var objectCreate = kotlin_kotlin.$_$.xg;
  var initMetadataForCompanion = kotlin_kotlin.$_$.wf;
  var VOID = kotlin_kotlin.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.n5;
  var toString = kotlin_kotlin.$_$.in;
  var hashCode = kotlin_kotlin.$_$.uf;
  var getStringHashCode = kotlin_kotlin.$_$.tf;
  var THROW_CCE = kotlin_kotlin.$_$.vl;
  var equals = kotlin_kotlin.$_$.nf;
  var initMetadataForClass = kotlin_kotlin.$_$.vf;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var emptyList = kotlin_kotlin.$_$.l9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.h1;
  var lastOrNull = kotlin_kotlin.$_$.qa;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b1;
  var _TextUnit___get_type__impl__uc2olt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x3;
  var TextUnit__toString_impl_51ghw0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w3;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y3;
  var get_em = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q4;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var Pair = kotlin_kotlin.$_$.sl;
  var get_lastIndex = kotlin_kotlin.$_$.ma;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var addAll = kotlin_kotlin.$_$.z6;
  var Appendable = kotlin_kotlin.$_$.yi;
  var initMetadataForInterface = kotlin_kotlin.$_$.zf;
  var FunctionAdapter = kotlin_kotlin.$_$.ye;
  var isInterface = kotlin_kotlin.$_$.kg;
  var Comparator = kotlin_kotlin.$_$.hl;
  var compareValues = kotlin_kotlin.$_$.ad;
  var ensureNotNull = kotlin_kotlin.$_$.pm;
  var sortedWith = kotlin_kotlin.$_$.dc;
  var first = kotlin_kotlin.$_$.v9;
  var mutableIntListOf = kotlin_androidx_collection_collection.$_$.b1;
  var charCodeAt = kotlin_kotlin.$_$.ff;
  var substring = kotlin_kotlin.$_$.jk;
  var KtList = kotlin_kotlin.$_$.h6;
  var CharSequence = kotlin_kotlin.$_$.dl;
  var coerceIn = kotlin_kotlin.$_$.vh;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.k;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var get_em_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l1;
  var get_em_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i4;
  var TextUnit__hashCode_impl_qsmeov = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r3;
  var getNumberHashCode = kotlin_kotlin.$_$.rf;
  var toString_0 = kotlin_kotlin.$_$.bh;
  var _Size___get_minDimension__impl__4iso0r = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var toRawBits = kotlin_kotlin.$_$.gn;
  var fromInt = kotlin_kotlin.$_$.ne;
  var shiftLeft = kotlin_kotlin.$_$.te;
  var Long = kotlin_kotlin.$_$.ol;
  var bitwiseAnd = kotlin_kotlin.$_$.fe;
  var bitwiseOr = kotlin_kotlin.$_$.ge;
  var _CornerRadius___init__impl__ojmabe = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var RoundRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var Rounded = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a1;
  var Shape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j1;
  var initMetadataForObject = kotlin_kotlin.$_$.bg;
  var Annotation = kotlin_kotlin.$_$.al;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var charSequenceLength = kotlin_kotlin.$_$.hf;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var coerceAtLeast = kotlin_kotlin.$_$.oh;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var plus = kotlin_kotlin.$_$.jb;
  var last = kotlin_kotlin.$_$.sa;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n4;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h4;
  var BlendMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f1;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var convertToInt = kotlin_kotlin.$_$.je;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.v4;
  var floatFromBits = kotlin_kotlin.$_$.of;
  var shiftRight = kotlin_kotlin.$_$.ve;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s;
  var fastJoinToString = kotlin_org_jetbrains_compose_ui_ui_util.$_$.b;
  var compareTo = kotlin_kotlin.$_$.jf;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.h;
  var lazy = kotlin_kotlin.$_$.um;
  var KProperty1 = kotlin_kotlin.$_$.ki;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sf;
  var numberToInt = kotlin_kotlin.$_$.wg;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p4;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v3;
  var equalsLong = kotlin_kotlin.$_$.me;
  var THROW_IAE = kotlin_kotlin.$_$.wl;
  var enumEntries = kotlin_kotlin.$_$.be;
  var Enum = kotlin_kotlin.$_$.il;
  var Saver = kotlin_androidx_compose_runtime_runtime_saveable.$_$.f;
  var arrayListOf = kotlin_kotlin.$_$.b7;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wm;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t4;
  var Shadow = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.y3;
  var toArgb = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f2;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q;
  var TextUnitType = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var TextUnit_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var Saver_0 = kotlin_androidx_compose_runtime_runtime_saveable.$_$.e;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o3;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b2;
  var lerp_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a2;
  var lerp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p1;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n3;
  var IntSize__toString_impl_54w9zl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p3;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var getBooleanHashCode = kotlin_kotlin.$_$.pf;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var Constraints__toString_impl_37yskr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i4;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m3;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k1;
  var LruCache = kotlin_androidx_collection_collection.$_$.c;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var charSequenceSubSequence = kotlin_kotlin.$_$.if;
  var asList = kotlin_kotlin.$_$.h7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var Exception = kotlin_kotlin.$_$.kl;
  var State = kotlin_androidx_compose_runtime_runtime.$_$.l1;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.b2;
  var CoroutineImpl = kotlin_kotlin.$_$.ud;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ed;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.xf;
  var mutableScatterMapOf = kotlin_androidx_collection_collection.$_$.l1;
  var KMutableProperty1 = kotlin_kotlin.$_$.ii;
  var initMetadataForLambda = kotlin_kotlin.$_$.ag;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var get_indices = kotlin_kotlin.$_$.ga;
  var yield_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l2;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var CancellationException = kotlin_kotlin.$_$.dd;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.id;
  var CoroutineExceptionHandler = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x1;
  var withTimeout = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var MutableScatterSet = kotlin_androidx_collection_collection.$_$.o;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var joinAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.q4;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g2;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y1;
  var to = kotlin_kotlin.$_$.jn;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var mutableListOf = kotlin_kotlin.$_$.eb;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.i5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.e3;
  var createFailure = kotlin_kotlin.$_$.om;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.h3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.g3;
  var SuspendFunction0 = kotlin_kotlin.$_$.vd;
  var SuspendFunction1 = kotlin_kotlin.$_$.wd;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.w1;
  var listOf = kotlin_kotlin.$_$.wa;
  var joinToString = kotlin_kotlin.$_$.ia;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.n;
  var _TextUnit___get_isSp__impl__8c3r6q = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t3;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var Comparable = kotlin_kotlin.$_$.gl;
  var lerp_2 = kotlin_org_jetbrains_compose_ui_ui_util.$_$.d;
  var getKClassFromExpression = kotlin_kotlin.$_$.ei;
  var isHighSurrogate = kotlin_kotlin.$_$.nj;
  var isLowSurrogate = kotlin_kotlin.$_$.pj;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w2;
  var joinTo = kotlin_kotlin.$_$.ja;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.n2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var charArray = kotlin_kotlin.$_$.ef;
  var arrayCopy = kotlin_kotlin.$_$.a7;
  var toString_1 = kotlin_kotlin.$_$.d3;
  var repeat = kotlin_kotlin.$_$.yj;
  var Char__hashCode_impl_otmys = kotlin_kotlin.$_$.y2;
  var split = kotlin_kotlin.$_$.ek;
  var isCharSequence = kotlin_kotlin.$_$.gg;
  var trim = kotlin_kotlin.$_$.vk;
  var toList = kotlin_kotlin.$_$.sc;
  var Collection = kotlin_kotlin.$_$.x5;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var lerp_3 = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var ShaderBrush = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h1;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l1;
  var isNaN_0 = kotlin_kotlin.$_$.sm;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h3;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e4;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CharDirection_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t4;
  var until = kotlin_kotlin.$_$.ci;
  var subtract = kotlin_kotlin.$_$.we;
  var compare = kotlin_kotlin.$_$.ie;
  var currentNanoTime = kotlin_org_jetbrains_skiko_skiko.$_$.r6;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.w4;
  var charSequenceGet = kotlin_kotlin.$_$.gf;
  var Companion_getInstance_8 = kotlin_kotlin.$_$.g5;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.c3;
  var sequence = kotlin_kotlin.$_$.vi;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.z2;
  var SequenceScope = kotlin_kotlin.$_$.mi;
  var numberRangeToNumber = kotlin_kotlin.$_$.tg;
  var lazy_0 = kotlin_kotlin.$_$.vm;
  var FontRastrSettings = kotlin_org_jetbrains_skiko_skiko.$_$.r5;
  var FontEdging_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u2;
  var FontEdging_ANTI_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v2;
  var FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w2;
  var FontHinting_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y2;
  var FontHinting_SLIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a3;
  var FontHinting_NORMAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z2;
  var FontHinting_FULL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x2;
  var binarySearch = kotlin_kotlin.$_$.m7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.na;
  var coerceAtMost = kotlin_kotlin.$_$.sh;
  var RectHeightMode_STRUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x;
  var RectWidthMode_TIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y;
  var firstOrNull = kotlin_kotlin.$_$.u9;
  var first_0 = kotlin_kotlin.$_$.x9;
  var Rect_0 = kotlin_org_jetbrains_skiko_skiko.$_$.l6;
  var TextBox = kotlin_org_jetbrains_skiko_skiko.$_$.x5;
  var get_lastIndex_1 = kotlin_kotlin.$_$.sj;
  var lastOrNull_0 = kotlin_kotlin.$_$.ra;
  var toComposeRect = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h2;
  var RectHeightMode_MAX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w;
  var asSkiaPath = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s1;
  var coerceAtMost_0 = kotlin_kotlin.$_$.qh;
  var Rect_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f;
  var getOrNull = kotlin_kotlin.$_$.y9;
  var Direction_RTL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n;
  var Direction_LTR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m;
  var println = kotlin_kotlin.$_$.ce;
  var isWhitespace = kotlin_kotlin.$_$.rj;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d2;
  var LineMetrics = kotlin_org_jetbrains_skiko_skiko.$_$.s5;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.p2;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.d4;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f3;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.m4;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.b5;
  var copyToArray = kotlin_kotlin.$_$.i9;
  var Size__toString_impl_o87ni8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var BlendMode__toString_impl_uuibkd = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f3;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var BlendMode__hashCode_impl_93ceri = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e3;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.d5;
  var DecorationLineStyle_SOLID_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k;
  var DecorationStyle = kotlin_org_jetbrains_skiko_skiko.$_$.q5;
  var Shadow_0 = kotlin_org_jetbrains_skiko_skiko.$_$.w5;
  var _TextUnit___get_isEm__impl__esrmtl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s3;
  var DecorationLineStyle_WAVY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l;
  var DecorationLineStyle_DASHED_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h;
  var DecorationLineStyle_DOTTED_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i;
  var DecorationLineStyle_DOUBLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j;
  var KProperty0 = kotlin_kotlin.$_$.ji;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.dn;
  var sortWith = kotlin_kotlin.$_$.bc;
  var asReversed = kotlin_kotlin.$_$.i7;
  var ParagraphStyle = kotlin_org_jetbrains_skiko_skiko.$_$.u5;
  var HeightMode_DISABLE_ALL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p;
  var TextIndent = kotlin_org_jetbrains_skiko_skiko.$_$.y5;
  var Font_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.j4;
  var ParagraphBuilder = kotlin_org_jetbrains_skiko_skiko.$_$.t5;
  var BaselineMode_ALPHABETIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g;
  var PlaceholderStyle = kotlin_org_jetbrains_skiko_skiko.$_$.v5;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g1;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var PlaceholderAlignment_MIDDLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u;
  var PlaceholderAlignment_BOTTOM_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t;
  var PlaceholderAlignment_TOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v;
  var PlaceholderAlignment_ABOVE_BASELINE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s;
  var Alignment_START_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f;
  var Alignment_END_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b;
  var Alignment_JUSTIFY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c;
  var Alignment_CENTER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a;
  var Alignment_RIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e;
  var Alignment_LEFT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d;
  var HeightMode_ALL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o;
  var HeightMode_DISABLE_LAST_DESCENT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r;
  var HeightMode_DISABLE_FIRST_ASCENT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var listOf_0 = kotlin_kotlin.$_$.va;
  var FontCollection_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.c4;
  var TypefaceFontProviderWithFallback_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.e4;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.s;
  var FontMgrWithFallback = kotlin_org_jetbrains_skiko_skiko.$_$.e6;
  var FontVariation_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.l4;
  var mapOf = kotlin_kotlin.$_$.za;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k4;
  var firstOrNull_0 = kotlin_kotlin.$_$.t9;
  var Paint = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b1;
  var derivedStateOf = kotlin_androidx_compose_runtime_runtime.$_$.v1;
  var coerceIn_0 = kotlin_kotlin.$_$.uh;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q4;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d;
  var Paint_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q7;
  var setOf = kotlin_kotlin.$_$.tb;
  var get_hostOs = kotlin_org_jetbrains_skiko_skiko.$_$.t6;
  var Companion_getInstance_14 = kotlin_org_jetbrains_skiko_skiko.$_$.c5;
  var Companion_getInstance_15 = kotlin_org_jetbrains_skiko_skiko.$_$.a5;
  var FontSlant_UPRIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c3;
  var FontSlant_ITALIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b3;
  var FontStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.k4;
  var substring_0 = kotlin_kotlin.$_$.ik;
  var titlecaseChar = kotlin_kotlin.$_$.kk;
  var isLowerCase = kotlin_kotlin.$_$.qj;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(MutableRange, 'MutableRange');
  initMetadataForClass(BulletScope, 'BulletScope');
  initMetadataForClass(Range, 'Range');
  initMetadataForClass(Builder, 'Builder', Builder, VOID, [Appendable]);
  initMetadataForInterface(Annotation_0, 'Annotation');
  initMetadataForClass(ExhaustiveAnnotation, 'ExhaustiveAnnotation', ExhaustiveAnnotation, VOID, [Annotation_0]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(AnnotatedString, 'AnnotatedString', VOID, VOID, [CharSequence]);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Bullet, 'Bullet', VOID, VOID, [Annotation_0]);
  initMetadataForObject(CircleShape, 'CircleShape', VOID, VOID, [Shape]);
  initMetadataForClass(ExperimentalTextApi, 'ExperimentalTextApi', VOID, VOID, [Annotation]);
  initMetadataForClass(InternalTextApi, 'InternalTextApi', VOID, VOID, [Annotation]);
  initMetadataForClass(LinkAnnotation, 'LinkAnnotation', VOID, VOID, [Annotation_0]);
  initMetadataForClass(Url, 'Url', VOID, LinkAnnotation);
  initMetadataForClass(Clickable, 'Clickable', VOID, LinkAnnotation);
  initMetadataForInterface(LinkInteractionListener, 'LinkInteractionListener');
  initMetadataForClass(MultiParagraph, 'MultiParagraph');
  initMetadataForClass(ParagraphInfo, 'ParagraphInfo');
  function get_hasStaleResolvedFonts() {
    return false;
  }
  initMetadataForInterface(ParagraphIntrinsics, 'ParagraphIntrinsics');
  initMetadataForClass(MultiParagraphIntrinsics, 'MultiParagraphIntrinsics', VOID, VOID, [ParagraphIntrinsics]);
  initMetadataForClass(ParagraphIntrinsicInfo, 'ParagraphIntrinsicInfo');
  initMetadataForClass(ParagraphStyle_0, 'ParagraphStyle', VOID, VOID, [Annotation_0]);
  initMetadataForClass(Placeholder, 'Placeholder');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(PlaceholderVerticalAlign, 'PlaceholderVerticalAlign');
  initMetadataForClass(AnnotationType, 'AnnotationType', VOID, Enum);
  initMetadataForInterface(NonNullValueClassSaver, 'NonNullValueClassSaver', VOID, VOID, [Saver]);
  initMetadataForClass(NonNullValueClassSaver$1, VOID, VOID, VOID, [NonNullValueClassSaver]);
  initMetadataForClass(SpanStyle, 'SpanStyle', VOID, VOID, [Annotation_0]);
  initMetadataForInterface(PlatformStringDelegate, 'PlatformStringDelegate');
  initMetadataForClass(StringAnnotation, 'StringAnnotation', VOID, VOID, [Annotation_0]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(TextGranularity, 'TextGranularity');
  initMetadataForInterface(TextInclusionStrategy, 'TextInclusionStrategy');
  initMetadataForClass(sam$androidx_compose_ui_text_TextInclusionStrategy$0, 'sam$androidx_compose_ui_text_TextInclusionStrategy$0', VOID, VOID, [TextInclusionStrategy, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_text_TextInclusionStrategy$0_0, 'sam$androidx_compose_ui_text_TextInclusionStrategy$0', VOID, VOID, [TextInclusionStrategy, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_text_TextInclusionStrategy$0_1, 'sam$androidx_compose_ui_text_TextInclusionStrategy$0', VOID, VOID, [TextInclusionStrategy, FunctionAdapter]);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(TextLayoutResult, 'TextLayoutResult');
  initMetadataForClass(TextLayoutInput, 'TextLayoutInput');
  initMetadataForCompanion(Companion_5);
  initMetadataForInterface(ResourceLoader, 'ResourceLoader');
  initMetadataForClass(DeprecatedBridgeFontResourceLoader, 'DeprecatedBridgeFontResourceLoader', VOID, VOID, [ResourceLoader]);
  initMetadataForClass(TextLinkStyles, 'TextLinkStyles', TextLinkStyles);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(TextMeasurer, 'TextMeasurer');
  initMetadataForClass(TextLayoutCache, 'TextLayoutCache', TextLayoutCache);
  initMetadataForClass(CacheTextLayoutInput, 'CacheTextLayoutInput');
  initMetadataForObject(TextPainter, 'TextPainter');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(TextRange, 'TextRange');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(TextStyle, 'TextStyle');
  initMetadataForClass(TtsAnnotation, 'TtsAnnotation', VOID, VOID, [Annotation_0]);
  initMetadataForClass(VerbatimTtsAnnotation, 'VerbatimTtsAnnotation', VOID, TtsAnnotation);
  initMetadataForClass(UrlAnnotation, 'UrlAnnotation', VOID, VOID, [Annotation_0]);
  initMetadataForCompanion(Companion_9);
  function get_loadingStrategy() {
    return Companion_getInstance_30().get_Blocking_7mu9wm_k$();
  }
  initMetadataForInterface(Font, 'Font');
  initMetadataForInterface(PlatformFontLoader, 'PlatformFontLoader', VOID, VOID, VOID, [1]);
  initMetadataForClass(FontFamily, 'FontFamily');
  initMetadataForClass(SystemFontFamily, 'SystemFontFamily', VOID, FontFamily);
  initMetadataForClass(GenericFontFamily, 'GenericFontFamily', VOID, SystemFontFamily);
  function resolve$default(fontFamily, fontWeight, fontStyle, fontSynthesis, $super) {
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontWeight = fontWeight === VOID ? Companion_getInstance_33().get_Normal_22avww_k$() : fontWeight;
    fontStyle = fontStyle === VOID ? Companion_getInstance_31().get_Normal_tevh6u_k$() : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? Companion_getInstance_32().get_All_bqi34r_k$() : fontSynthesis;
    return $super === VOID ? this.resolve_q3h1fi_k$(fontFamily, fontWeight, fontStyle, fontSynthesis) : $super.resolve_q3h1fi_k$.call(this, fontFamily, fontWeight, new FontStyle(fontStyle), new FontSynthesis(fontSynthesis));
  }
  initMetadataForInterface(Resolver, 'Resolver', VOID, VOID, VOID, [1]);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(DefaultFontFamily, 'DefaultFontFamily', VOID, SystemFontFamily);
  initMetadataForClass(FileBasedFontFamily, 'FileBasedFontFamily', VOID, FontFamily);
  initMetadataForClass(FontListFontFamily, 'FontListFontFamily', VOID, FileBasedFontFamily, [FileBasedFontFamily, KtList]);
  initMetadataForClass(LoadedFontFamily, 'LoadedFontFamily', VOID, FontFamily);
  initMetadataForClass(TypefaceRequestCache, 'TypefaceRequestCache', TypefaceRequestCache);
  initMetadataForClass(TypefaceRequest, 'TypefaceRequest');
  initMetadataForInterface(TypefaceResult, 'TypefaceResult', VOID, VOID, [State]);
  initMetadataForClass(Immutable, 'Immutable', VOID, VOID, [TypefaceResult]);
  initMetadataForClass(Async, 'Async', VOID, VOID, [TypefaceResult, State]);
  initMetadataForCoroutine($preloadCOROUTINE$, CoroutineImpl);
  initMetadataForClass(FontFamilyResolverImpl, 'FontFamilyResolverImpl', VOID, VOID, [Resolver], [1]);
  function interceptFontFamily(fontFamily) {
    return fontFamily;
  }
  function interceptFontWeight(fontWeight) {
    return fontWeight;
  }
  function interceptFontStyle(fontStyle) {
    return fontStyle;
  }
  function interceptFontSynthesis(fontSynthesis) {
    return fontSynthesis;
  }
  initMetadataForInterface(PlatformResolveInterceptor, 'PlatformResolveInterceptor');
  initMetadataForClass(PlatformResolveInterceptor$Companion$Default$1, VOID, VOID, VOID, [PlatformResolveInterceptor]);
  initMetadataForCompanion(Companion_11);
  initMetadataForInterface(FontFamilyTypefaceAdapter, 'FontFamilyTypefaceAdapter');
  initMetadataForClass(AsyncTypefaceResult, 'AsyncTypefaceResult');
  initMetadataForClass(Key, 'Key');
  initMetadataForCoroutine($runCachedCOROUTINE$, CoroutineImpl);
  initMetadataForClass(AsyncTypefaceCache, 'AsyncTypefaceCache', AsyncTypefaceCache, VOID, VOID, [4]);
  initMetadataForLambda(AsyncFontListLoader$load$slambda, CoroutineImpl, [CoroutineImpl], [0]);
  initMetadataForLambda(AsyncFontListLoader$loadWithTimeoutOrNull$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($loadCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($loadWithTimeoutOrNullCOROUTINE$, CoroutineImpl);
  initMetadataForClass(AsyncFontListLoader, 'AsyncFontListLoader', VOID, VOID, [State], [0, 1]);
  initMetadataForClass(FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1, VOID, VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, CoroutineExceptionHandler]);
  initMetadataForLambda(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda, CoroutineImpl, [CoroutineImpl], [0]);
  initMetadataForLambda(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCompanion(Companion_12);
  initMetadataForLambda(FontListFontFamilyTypefaceAdapter$preload$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(FontListFontFamilyTypefaceAdapter$resolve$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(FontListFontFamilyTypefaceAdapter, 'FontListFontFamilyTypefaceAdapter', FontListFontFamilyTypefaceAdapter, VOID, [FontFamilyTypefaceAdapter], [2]);
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(FontLoadingStrategy, 'FontLoadingStrategy');
  initMetadataForClass(FontMatcher, 'FontMatcher', FontMatcher);
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(FontStyle, 'FontStyle');
  initMetadataForCompanion(Companion_15);
  initMetadataForClass(FontSynthesis, 'FontSynthesis');
  initMetadataForClass(Settings, 'Settings');
  initMetadataForInterface(Setting, 'Setting');
  initMetadataForClass(SettingFloat, 'SettingFloat', VOID, VOID, [Setting]);
  initMetadataForClass(SettingTextUnit, 'SettingTextUnit', VOID, VOID, [Setting]);
  initMetadataForClass(SettingInt, 'SettingInt', VOID, VOID, [Setting]);
  initMetadataForObject(FontVariation, 'FontVariation');
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(FontWeight, 'FontWeight', VOID, VOID, [Comparable]);
  initMetadataForInterface(Typeface, 'Typeface');
  initMetadataForInterface(EditCommand, 'EditCommand');
  initMetadataForClass(FinishComposingTextCommand, 'FinishComposingTextCommand', FinishComposingTextCommand, VOID, [EditCommand]);
  initMetadataForClass(CommitTextCommand, 'CommitTextCommand', VOID, VOID, [EditCommand]);
  initMetadataForClass(DeleteSurroundingTextCommand, 'DeleteSurroundingTextCommand', VOID, VOID, [EditCommand]);
  initMetadataForClass(DeleteAllCommand, 'DeleteAllCommand', DeleteAllCommand, VOID, [EditCommand]);
  initMetadataForClass(SetSelectionCommand, 'SetSelectionCommand', VOID, VOID, [EditCommand]);
  initMetadataForClass(SetComposingTextCommand, 'SetComposingTextCommand', VOID, VOID, [EditCommand]);
  initMetadataForClass(SetComposingRegionCommand, 'SetComposingRegionCommand', VOID, VOID, [EditCommand]);
  initMetadataForClass(DeleteSurroundingTextInCodePointsCommand, 'DeleteSurroundingTextInCodePointsCommand', VOID, VOID, [EditCommand]);
  initMetadataForClass(BackspaceCommand, 'BackspaceCommand', BackspaceCommand, VOID, [EditCommand]);
  initMetadataForClass(MoveCursorCommand, 'MoveCursorCommand', VOID, VOID, [EditCommand]);
  initMetadataForClass(EditProcessor, 'EditProcessor', EditProcessor);
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(EditingBuffer, 'EditingBuffer');
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(PartialGapBuffer, 'PartialGapBuffer');
  initMetadataForClass(GapBuffer, 'GapBuffer');
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(ImeAction, 'ImeAction');
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(ImeOptions, 'ImeOptions');
  initMetadataForCompanion(Companion_21);
  initMetadataForClass(KeyboardCapitalization, 'KeyboardCapitalization');
  initMetadataForCompanion(Companion_22);
  initMetadataForClass(KeyboardType, 'KeyboardType');
  initMetadataForInterface(OffsetMapping, 'OffsetMapping');
  initMetadataForClass(OffsetMapping$Companion$Identity$1, VOID, VOID, VOID, [OffsetMapping]);
  initMetadataForCompanion(Companion_23);
  initMetadataForCompanion(Companion_24);
  initMetadataForClass(TextFieldValue, 'TextFieldValue', TextFieldValue_init_$Create$);
  initMetadataForClass(TextInputService, 'TextInputService');
  initMetadataForClass(TextInputSession, 'TextInputSession');
  function startInput() {
  }
  function notifyFocusedRect(rect) {
  }
  function updateTextLayoutResult(textFieldValue, offsetMapping, textLayoutResult, textFieldToRootTransform, innerTextFieldBounds, decorationBoxBounds) {
  }
  initMetadataForInterface(PlatformTextInputService, 'PlatformTextInputService');
  initMetadataForInterface(VisualTransformation, 'VisualTransformation');
  initMetadataForClass(sam$androidx_compose_ui_text_input_VisualTransformation$0, 'sam$androidx_compose_ui_text_input_VisualTransformation$0', VOID, VOID, [VisualTransformation, FunctionAdapter]);
  initMetadataForCompanion(Companion_25);
  initMetadataForClass(TransformedText, 'TransformedText');
  initMetadataForClass(PasswordVisualTransformation, 'PasswordVisualTransformation', PasswordVisualTransformation, VOID, [VisualTransformation]);
  initMetadataForCompanion(Companion_26);
  initMetadataForClass(Locale, 'Locale');
  initMetadataForCompanion(Companion_27);
  initMetadataForClass(LocaleList, 'LocaleList', VOID, VOID, [Collection]);
  initMetadataForInterface(PlatformLocaleDelegate, 'PlatformLocaleDelegate');
  initMetadataForCompanion(Companion_28);
  initMetadataForClass(BaselineShift, 'BaselineShift');
  initMetadataForCompanion(Companion_29);
  initMetadataForClass(Hyphens, 'Hyphens');
  initMetadataForCompanion(Companion_30);
  initMetadataForCompanion(Companion_31);
  initMetadataForCompanion(Companion_32);
  initMetadataForCompanion(Companion_33);
  initMetadataForClass(Trim, 'Trim');
  initMetadataForClass(Alignment, 'Alignment');
  initMetadataForClass(Mode, 'Mode');
  initMetadataForClass(LineHeightStyle, 'LineHeightStyle');
  initMetadataForClass(ResolvedTextDirection, 'ResolvedTextDirection', VOID, Enum);
  initMetadataForCompanion(Companion_34);
  initMetadataForClass(TextAlign, 'TextAlign');
  initMetadataForCompanion(Companion_35);
  initMetadataForClass(TextDecoration, 'TextDecoration');
  initMetadataForCompanion(Companion_36);
  initMetadataForClass(TextDirection, 'TextDirection');
  function merge(other) {
    var tmp;
    var tmp_0;
    if (other instanceof BrushStyle) {
      tmp_0 = this instanceof BrushStyle;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = new BrushStyle(other.value_1, takeOrElse_0(other.alpha_1, TextForegroundStyle$merge$lambda(this)));
    } else {
      var tmp_1;
      if (other instanceof BrushStyle) {
        tmp_1 = !(this instanceof BrushStyle);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp = other;
      } else {
        var tmp_2;
        if (!(other instanceof BrushStyle)) {
          tmp_2 = this instanceof BrushStyle;
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          tmp = this;
        } else {
          tmp = other.takeOrElse_vujaw_k$(TextForegroundStyle$merge$lambda_0(this));
        }
      }
    }
    return tmp;
  }
  function takeOrElse(other) {
    return !equals(this, Unspecified_getInstance()) ? this : other();
  }
  initMetadataForInterface(TextForegroundStyle, 'TextForegroundStyle');
  initMetadataForObject(Unspecified, 'Unspecified', VOID, VOID, [TextForegroundStyle]);
  initMetadataForCompanion(Companion_37);
  initMetadataForClass(BrushStyle, 'BrushStyle', VOID, VOID, [TextForegroundStyle]);
  initMetadataForClass(ColorStyle, 'ColorStyle', VOID, VOID, [TextForegroundStyle]);
  initMetadataForCompanion(Companion_38);
  initMetadataForClass(TextGeometricTransform, 'TextGeometricTransform', TextGeometricTransform);
  initMetadataForCompanion(Companion_39);
  initMetadataForClass(TextIndent_0, 'TextIndent', TextIndent_0);
  initMetadataForCompanion(Companion_40);
  initMetadataForClass(TextOverflow, 'TextOverflow');
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForInterface(Cache, 'Cache');
  initMetadataForClass(ExpireAfterAccessCache, 'ExpireAfterAccessCache', VOID, VOID, [Cache]);
  initMetadataForCompanion(Companion_41);
  initMetadataForClass(StrongDirectionType, 'StrongDirectionType');
  initMetadataForLambda(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(_get_codePoints_$slambda_43x8dt, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCompanion(Companion_42);
  initMetadataForClass(FontRasterizationSettings, 'FontRasterizationSettings');
  initMetadataForClass(FontSmoothing, 'FontSmoothing', VOID, Enum);
  initMetadataForClass(FontHinting, 'FontHinting', VOID, Enum);
  function getLineEnd$default(lineIndex, visibleEnd, $super) {
    visibleEnd = visibleEnd === VOID ? false : visibleEnd;
    return $super === VOID ? this.getLineEnd_o6geci_k$(lineIndex, visibleEnd) : $super.getLineEnd_o6geci_k$.call(this, lineIndex, visibleEnd);
  }
  function paint$default(canvas, color, shadow, textDecoration, $super) {
    color = color === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : color;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    var tmp;
    if ($super === VOID) {
      this.paint_xx9kwo_k$(canvas, color, shadow, textDecoration);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.paint_xx9kwo_k$.call(this, canvas, new Color(color), shadow, textDecoration);
    }
    return tmp;
  }
  function paint$default_0(canvas, color, shadow, textDecoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : color;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_1().get_DefaultBlendMode_svct2m_k$() : blendMode;
    var tmp;
    if ($super === VOID) {
      this.paint_qj08y1_k$(canvas, color, shadow, textDecoration, drawStyle, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.paint_qj08y1_k$.call(this, canvas, new Color(color), shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  }
  function paint$default_1(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode, $super) {
    alpha = alpha === VOID ? NaN : alpha;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_1().get_DefaultBlendMode_svct2m_k$() : blendMode;
    var tmp;
    if ($super === VOID) {
      this.paint_t6aqss_k$(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.paint_t6aqss_k$.call(this, canvas, brush, alpha, shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  }
  initMetadataForInterface(Paragraph_1, 'Paragraph');
  initMetadataForClass(SkiaParagraph, 'SkiaParagraph', VOID, VOID, [Paragraph_1]);
  initMetadataForCompanion(Companion_43);
  initMetadataForClass(TextDecorationLineStyle, 'TextDecorationLineStyle');
  initMetadataForClass(PlatformTextStyle, 'PlatformTextStyle');
  initMetadataForCompanion(Companion_44);
  initMetadataForClass(PlatformParagraphStyle, 'PlatformParagraphStyle');
  initMetadataForCompanion(Companion_45);
  initMetadataForClass(PlatformSpanStyle, 'PlatformSpanStyle', PlatformSpanStyle_init_$Create$);
  initMetadataForClass(PlatformFontFamilyTypefaceAdapter, 'PlatformFontFamilyTypefaceAdapter', PlatformFontFamilyTypefaceAdapter, VOID, [FontFamilyTypefaceAdapter]);
  initMetadataForClass(SkiaFontLoader, 'SkiaFontLoader', SkiaFontLoader_init_$Create$, VOID, [PlatformFontLoader], [1]);
  initMetadataForClass(PlatformImeOptions, 'PlatformImeOptions', PlatformImeOptions);
  initMetadataForInterface(TextEditorState, 'TextEditorState', VOID, VOID, [CharSequence]);
  initMetadataForInterface(TextEditingScope, 'TextEditingScope');
  initMetadataForClass(ComputedStyle, 'ComputedStyle', ComputedStyle);
  initMetadataForClass(Op, 'Op');
  initMetadataForClass(StyleAdd, 'StyleAdd', VOID, Op);
  initMetadataForClass(PutPlaceholder, 'PutPlaceholder', VOID, Op);
  initMetadataForClass(EndPlaceholder, 'EndPlaceholder', VOID, Op);
  initMetadataForClass(Cut, 'Cut');
  initMetadataForClass(StyleAdd_0, 'StyleAdd', VOID, Cut);
  initMetadataForClass(StyleRemove, 'StyleRemove', VOID, Cut);
  initMetadataForClass(PutPlaceholder_0, 'PutPlaceholder', VOID, Cut);
  initMetadataForClass(EndPlaceholder_0, 'EndPlaceholder', VOID, Cut);
  initMetadataForClass(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(ParagraphBuilder_0, 'ParagraphBuilder');
  initMetadataForClass(ParagraphLayouter, 'ParagraphLayouter');
  initMetadataForClass(FontLoader, 'FontLoader', FontLoader, VOID, [ResourceLoader]);
  initMetadataForClass(FontLoadResult, 'FontLoadResult');
  initMetadataForClass(Platform, 'Platform', VOID, Enum);
  initMetadataForClass(FontCache, 'FontCache', FontCache);
  initMetadataForClass(PlatformFont, 'PlatformFont', VOID, VOID, [Font]);
  initMetadataForClass(LoadedFont, 'LoadedFont', VOID, PlatformFont);
  initMetadataForClass(SystemFont, 'SystemFont', VOID, PlatformFont);
  initMetadataForClass(SkiaBackedTypeface, 'SkiaBackedTypeface', VOID, VOID, [Typeface]);
  initMetadataForClass(SkiaParagraphIntrinsics, 'SkiaParagraphIntrinsics', VOID, VOID, [ParagraphIntrinsics]);
  initMetadataForClass(SkiaTextPaint, 'SkiaTextPaint', SkiaTextPaint, VOID, [Paint_0]);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForCompanion(Companion_46);
  initMetadataForClass(LineBreak, 'LineBreak');
  initMetadataForCompanion(Companion_47);
  initMetadataForClass(TextMotion, 'TextMotion');
  initMetadataForClass(createPlatformLocaleDelegate$1, VOID, VOID, VOID, [PlatformLocaleDelegate]);
  initMetadataForClass(JsStringDelegate, 'JsStringDelegate', JsStringDelegate, VOID, [PlatformStringDelegate]);
  initMetadataForClass(NoCache, 'NoCache', NoCache, VOID, [Cache]);
  //endregion
  function get_EmptyAnnotatedString() {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return EmptyAnnotatedString;
  }
  var EmptyAnnotatedString;
  var androidx_compose_ui_text_AnnotatedString_Range$stable;
  var androidx_compose_ui_text_AnnotatedString_Builder_BulletScope$stable;
  var androidx_compose_ui_text_AnnotatedString_Builder$stable;
  var androidx_compose_ui_text_AnnotatedString$stable;
  function Range_init_$Init$(item, start, end, $this) {
    Range.call($this, item, start, end, '');
    return $this;
  }
  function Range_init_$Create$(item, start, end) {
    return Range_init_$Init$(item, start, end, objectCreate(protoOf(Range)));
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).fromRange_bp7iwt_k$ = function (range) {
    return new MutableRange(range.item_1, range.start_1, range.end_1, range.tag_1);
  };
  var Companion_instance;
  function Companion_getInstance_16() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function MutableRange(item, start, end, tag) {
    Companion_getInstance_16();
    end = end === VOID ? -2147483648 : end;
    tag = tag === VOID ? '' : tag;
    this.item_1 = item;
    this.start_1 = start;
    this.end_1 = end;
    this.tag_1 = tag;
  }
  protoOf(MutableRange).get_item_woo5lo_k$ = function () {
    return this.item_1;
  };
  protoOf(MutableRange).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(MutableRange).set_end_2o0hu2_k$ = function (_set____db54di) {
    this.end_1 = _set____db54di;
  };
  protoOf(MutableRange).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(MutableRange).get_tag_18ivnz_k$ = function () {
    return this.tag_1;
  };
  protoOf(MutableRange).toRange_d5re6u_k$ = function (defaultEnd) {
    var end = this.end_1 === -2147483648 ? defaultEnd : this.end_1;
    // Inline function 'androidx.compose.ui.text.internal.checkPrecondition' call
    if (!!(end === -2147483648)) {
      var tmp$ret$0 = 'Item.end should be set first';
      throwIllegalStateException(tmp$ret$0);
    }
    return new Range(this.item_1, this.start_1, end, this.tag_1);
  };
  protoOf(MutableRange).toRange$default_huuesc_k$ = function (defaultEnd, $super) {
    defaultEnd = defaultEnd === VOID ? -2147483648 : defaultEnd;
    return $super === VOID ? this.toRange_d5re6u_k$(defaultEnd) : $super.toRange_d5re6u_k$.call(this, defaultEnd);
  };
  protoOf(MutableRange).toRange_1b19zx_k$ = function (transform, defaultEnd) {
    var end = this.end_1 === -2147483648 ? defaultEnd : this.end_1;
    // Inline function 'androidx.compose.ui.text.internal.checkPrecondition' call
    if (!!(end === -2147483648)) {
      var tmp$ret$0 = 'Item.end should be set first';
      throwIllegalStateException(tmp$ret$0);
    }
    return new Range(transform(this.item_1), this.start_1, end, this.tag_1);
  };
  protoOf(MutableRange).toRange$default_pibo9j_k$ = function (transform, defaultEnd, $super) {
    defaultEnd = defaultEnd === VOID ? -2147483648 : defaultEnd;
    return $super === VOID ? this.toRange_1b19zx_k$(transform, defaultEnd) : $super.toRange_1b19zx_k$.call(this, transform, defaultEnd);
  };
  protoOf(MutableRange).component1_7eebsc_k$ = function () {
    return this.item_1;
  };
  protoOf(MutableRange).component2_7eebsb_k$ = function () {
    return this.start_1;
  };
  protoOf(MutableRange).component3_7eebsa_k$ = function () {
    return this.end_1;
  };
  protoOf(MutableRange).component4_7eebs9_k$ = function () {
    return this.tag_1;
  };
  protoOf(MutableRange).copy_cu5jos_k$ = function (item, start, end, tag) {
    return new MutableRange(item, start, end, tag);
  };
  protoOf(MutableRange).copy$default_maj59_k$ = function (item, start, end, tag, $super) {
    item = item === VOID ? this.item_1 : item;
    start = start === VOID ? this.start_1 : start;
    end = end === VOID ? this.end_1 : end;
    tag = tag === VOID ? this.tag_1 : tag;
    return $super === VOID ? this.copy_cu5jos_k$(item, start, end, tag) : $super.copy_cu5jos_k$.call(this, item, start, end, tag);
  };
  protoOf(MutableRange).toString = function () {
    return 'MutableRange(item=' + toString(this.item_1) + ', start=' + this.start_1 + ', end=' + this.end_1 + ', tag=' + this.tag_1 + ')';
  };
  protoOf(MutableRange).hashCode = function () {
    var result = this.item_1 == null ? 0 : hashCode(this.item_1);
    result = imul(result, 31) + this.start_1 | 0;
    result = imul(result, 31) + this.end_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.tag_1) | 0;
    return result;
  };
  protoOf(MutableRange).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MutableRange))
      return false;
    var tmp0_other_with_cast = other instanceof MutableRange ? other : THROW_CCE();
    if (!equals(this.item_1, tmp0_other_with_cast.item_1))
      return false;
    if (!(this.start_1 === tmp0_other_with_cast.start_1))
      return false;
    if (!(this.end_1 === tmp0_other_with_cast.end_1))
      return false;
    if (!(this.tag_1 === tmp0_other_with_cast.tag_1))
      return false;
    return true;
  };
  function _get_text__de5ose($this) {
    return $this.text_1;
  }
  function _get_styleStack__yy45qs($this) {
    return $this.styleStack_1;
  }
  function _get_annotations__virbvx($this) {
    return $this.annotations_1;
  }
  function Builder_init_$Init$(text, $this) {
    Builder.call($this);
    $this.append_r87ivk_k$(text);
    return $this;
  }
  function Builder_init_$Create$(text) {
    return Builder_init_$Init$(text, objectCreate(protoOf(Builder)));
  }
  function Builder_init_$Init$_0(text, $this) {
    Builder.call($this);
    $this.append_fd4yh7_k$(text);
    return $this;
  }
  function Builder_init_$Create$_0(text) {
    return Builder_init_$Init$_0(text, objectCreate(protoOf(Builder)));
  }
  function BulletScope(builder) {
    this.builder_1 = builder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.bulletListSettingStack_1 = ArrayList_init_$Create$();
  }
  protoOf(BulletScope).get_builder_g7i43x_k$ = function () {
    return this.builder_1;
  };
  protoOf(BulletScope).get_bulletListSettingStack_a6w124_k$ = function () {
    return this.bulletListSettingStack_1;
  };
  function _get_bulletScope__yac49t($this) {
    return $this.bulletScope_1;
  }
  function AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, $this) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (paragraphStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = paragraphStyles;
    }
    paragraphStyles = tmp_0;
    AnnotatedString.call($this, constructAnnotationsFromSpansAndParagraphs(spanStyles, paragraphStyles), text);
    return $this;
  }
  function AnnotatedString_init_$Create$(text, spanStyles, paragraphStyles) {
    return AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, objectCreate(protoOf(AnnotatedString)));
  }
  function AnnotatedString_init_$Init$_0(text, annotations, $this) {
    var tmp;
    if (annotations === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = annotations;
    }
    annotations = tmp;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_0;
    if (annotations.isEmpty_y1axqb_k$()) {
      tmp_0 = null;
    } else {
      tmp_0 = annotations;
    }
    var tmp$ret$2 = tmp_0;
    AnnotatedString.call($this, tmp$ret$2, text);
    return $this;
  }
  function AnnotatedString_init_$Create$_0(text, annotations) {
    return AnnotatedString_init_$Init$_0(text, annotations, objectCreate(protoOf(AnnotatedString)));
  }
  function Range(item, start, end, tag) {
    this.item_1 = item;
    this.start_1 = start;
    this.end_1 = end;
    this.tag_1 = tag;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(this.start_1 <= this.end_1)) {
      var tmp$ret$0 = 'Reversed range is not supported';
      throwIllegalArgumentException(tmp$ret$0);
    }
  }
  protoOf(Range).get_item_woo5lo_k$ = function () {
    return this.item_1;
  };
  protoOf(Range).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(Range).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(Range).get_tag_18ivnz_k$ = function () {
    return this.tag_1;
  };
  protoOf(Range).component1_7eebsc_k$ = function () {
    return this.item_1;
  };
  protoOf(Range).component2_7eebsb_k$ = function () {
    return this.start_1;
  };
  protoOf(Range).component3_7eebsa_k$ = function () {
    return this.end_1;
  };
  protoOf(Range).component4_7eebs9_k$ = function () {
    return this.tag_1;
  };
  protoOf(Range).copy_cu5jos_k$ = function (item, start, end, tag) {
    return new Range(item, start, end, tag);
  };
  protoOf(Range).copy$default_a57cke_k$ = function (item, start, end, tag, $super) {
    item = item === VOID ? this.item_1 : item;
    start = start === VOID ? this.start_1 : start;
    end = end === VOID ? this.end_1 : end;
    tag = tag === VOID ? this.tag_1 : tag;
    return $super === VOID ? this.copy_cu5jos_k$(item, start, end, tag) : $super.copy_cu5jos_k$.call(this, item, start, end, tag);
  };
  protoOf(Range).toString = function () {
    return 'Range(item=' + toString(this.item_1) + ', start=' + this.start_1 + ', end=' + this.end_1 + ', tag=' + this.tag_1 + ')';
  };
  protoOf(Range).hashCode = function () {
    var result = this.item_1 == null ? 0 : hashCode(this.item_1);
    result = imul(result, 31) + this.start_1 | 0;
    result = imul(result, 31) + this.end_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.tag_1) | 0;
    return result;
  };
  protoOf(Range).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Range))
      return false;
    var tmp0_other_with_cast = other instanceof Range ? other : THROW_CCE();
    if (!equals(this.item_1, tmp0_other_with_cast.item_1))
      return false;
    if (!(this.start_1 === tmp0_other_with_cast.start_1))
      return false;
    if (!(this.end_1 === tmp0_other_with_cast.end_1))
      return false;
    if (!(this.tag_1 === tmp0_other_with_cast.tag_1))
      return false;
    return true;
  };
  function Builder(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    this.text_1 = StringBuilder_init_$Create$(capacity);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.styleStack_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.annotations_1 = ArrayList_init_$Create$();
    this.bulletScope_1 = new BulletScope(this);
  }
  protoOf(Builder).get_length_g42xv3_k$ = function () {
    return this.text_1.get_length_g42xv3_k$();
  };
  protoOf(Builder).append_r87ivk_k$ = function (text) {
    this.text_1.append_22ad7x_k$(text);
  };
  protoOf(Builder).deprecated_append_returning_void_u24qjh_k$ = function (char) {
    this.append_am5a4z_k$(char);
  };
  protoOf(Builder).append_jgojdo_k$ = function (text) {
    if (text instanceof AnnotatedString) {
      this.append_fd4yh7_k$(text);
    } else {
      this.text_1.append_jgojdo_k$(text);
    }
    return this;
  };
  protoOf(Builder).append_xdc1zw_k$ = function (text, start, end) {
    if (text instanceof AnnotatedString) {
      this.append_6at0zv_k$(text, start, end);
    } else {
      this.text_1.append_xdc1zw_k$(text, start, end);
    }
    return this;
  };
  protoOf(Builder).append_am5a4z_k$ = function (char) {
    this.text_1.append_am5a4z_k$(char);
    return this;
  };
  protoOf(Builder).append_fd4yh7_k$ = function (text) {
    var start = this.text_1.get_length_g42xv3_k$();
    this.text_1.append_22ad7x_k$(text.text_1);
    var tmp0_safe_receiver = text.annotations_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.get_c1px32_k$(index);
          this.annotations_1.add_utx5q5_k$(new MutableRange(item.item_1, start + item.start_1 | 0, start + item.end_1 | 0, item.tag_1));
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Builder).append_6at0zv_k$ = function (text, start, end) {
    var insertionStart = this.text_1.get_length_g42xv3_k$();
    this.text_1.append_xdc1zw_k$(text.text_1, start, end);
    var tmp0_safe_receiver = getLocalAnnotations(text, start, end);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.get_c1px32_k$(index);
          this.annotations_1.add_utx5q5_k$(new MutableRange(item.item_1, insertionStart + item.start_1 | 0, insertionStart + item.end_1 | 0, item.tag_1));
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Builder).addStyle_uwxmuu_k$ = function (style, start, end) {
    this.annotations_1.add_utx5q5_k$(new MutableRange(style, start, end));
  };
  protoOf(Builder).addStyle_jaxk48_k$ = function (style, start, end) {
    this.annotations_1.add_utx5q5_k$(new MutableRange(style, start, end));
  };
  protoOf(Builder).addStringAnnotation_kxj1ht_k$ = function (tag, annotation, start, end) {
    this.annotations_1.add_utx5q5_k$(new MutableRange(new StringAnnotation(_StringAnnotation___init__impl__o6a5i7(annotation)), start, end, tag));
  };
  protoOf(Builder).addTtsAnnotation_610cg0_k$ = function (ttsAnnotation, start, end) {
    this.annotations_1.add_utx5q5_k$(new MutableRange(ttsAnnotation, start, end));
  };
  protoOf(Builder).addUrlAnnotation_qzpif4_k$ = function (urlAnnotation, start, end) {
    this.annotations_1.add_utx5q5_k$(new MutableRange(urlAnnotation, start, end));
  };
  protoOf(Builder).addLink_b76jin_k$ = function (url, start, end) {
    this.annotations_1.add_utx5q5_k$(new MutableRange(url, start, end));
  };
  protoOf(Builder).addLink_u038la_k$ = function (clickable, start, end) {
    this.annotations_1.add_utx5q5_k$(new MutableRange(clickable, start, end));
  };
  protoOf(Builder).addBullet_3glzp6_k$ = function (bullet, start, end) {
    this.annotations_1.add_utx5q5_k$(new MutableRange(bullet, start, end));
  };
  protoOf(Builder).addBullet_zes5lw_k$ = function (bullet, indentation, start, end) {
    var bulletParStyle = new ParagraphStyle_0(VOID, VOID, VOID, new TextIndent_0(indentation, indentation));
    this.annotations_1.add_utx5q5_k$(new MutableRange(bulletParStyle, start, end));
    this.annotations_1.add_utx5q5_k$(new MutableRange(bullet, start, end));
  };
  protoOf(Builder).pushStyle_ki6trz_k$ = function (style) {
    // Inline function 'kotlin.also' call
    var this_0 = new MutableRange(style, this.text_1.get_length_g42xv3_k$());
    this.styleStack_1.add_utx5q5_k$(this_0);
    this.annotations_1.add_utx5q5_k$(this_0);
    return this.styleStack_1.get_size_woubt6_k$() - 1 | 0;
  };
  protoOf(Builder).pushStyle_727l41_k$ = function (style) {
    // Inline function 'kotlin.also' call
    var this_0 = new MutableRange(style, this.text_1.get_length_g42xv3_k$());
    this.styleStack_1.add_utx5q5_k$(this_0);
    this.annotations_1.add_utx5q5_k$(this_0);
    return this.styleStack_1.get_size_woubt6_k$() - 1 | 0;
  };
  protoOf(Builder).pushBullet_jjppx9_k$ = function (bullet) {
    // Inline function 'kotlin.also' call
    var this_0 = new MutableRange(bullet, this.text_1.get_length_g42xv3_k$());
    this.styleStack_1.add_utx5q5_k$(this_0);
    this.annotations_1.add_utx5q5_k$(this_0);
    return this.styleStack_1.get_size_woubt6_k$() - 1 | 0;
  };
  protoOf(Builder).withBulletList_8m2v73_k$ = function (indentation, bullet, block) {
    var tmp0_safe_receiver = lastOrNull(this.bulletScope_1.bulletListSettingStack_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp_0 = tmp0_safe_receiver.get_first_irdx8n_k$();
      tmp = tmp_0 == null ? null : tmp_0.packedValue_1;
    }
    var tmp1_safe_receiver = tmp;
    var tmp_1;
    var tmp_2 = tmp1_safe_receiver;
    if ((tmp_2 == null ? null : new TextUnit(tmp_2)) == null) {
      tmp_1 = null;
    } else {
      var tmp_3 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_3 == null ? null : new TextUnit(tmp_3)).packedValue_1;
      // Inline function 'androidx.compose.ui.text.internal.checkPrecondition' call
      if (!equals(_TextUnit___get_type__impl__uc2olt(it), _TextUnit___get_type__impl__uc2olt(indentation))) {
        var tmp$ret$0 = 'Indentation unit types of nested bullet lists must match. Current ' + TextUnit__toString_impl_51ghw0(it) + ' and previous is ' + TextUnit__toString_impl_51ghw0(indentation);
        throwIllegalStateException(tmp$ret$0);
      }
      var tmp0_subject = _TextUnit___get_type__impl__uc2olt(indentation);
      tmp_1 = equals(tmp0_subject, Companion_getInstance().get_Sp_88j2da_k$()) ? get_sp(_TextUnit___get_value__impl__hpbx0k(indentation) + _TextUnit___get_value__impl__hpbx0k(it)) : equals(tmp0_subject, Companion_getInstance().get_Em_wuhg6r_k$()) ? get_em(_TextUnit___get_value__impl__hpbx0k(indentation) + _TextUnit___get_value__impl__hpbx0k(it)) : indentation;
    }
    var tmp2_elvis_lhs = tmp_1;
    var tmp_4;
    var tmp_5 = tmp2_elvis_lhs;
    if ((tmp_5 == null ? null : new TextUnit(tmp_5)) == null) {
      tmp_4 = indentation;
    } else {
      tmp_4 = tmp2_elvis_lhs;
    }
    var adjustedIndentation = tmp_4;
    var parIndex = this.pushStyle_727l41_k$(new ParagraphStyle_0(VOID, VOID, VOID, new TextIndent_0(adjustedIndentation, adjustedIndentation)));
    this.bulletScope_1.bulletListSettingStack_1.add_utx5q5_k$(new Pair(new TextUnit(adjustedIndentation), bullet));
    var tmp_6;
    try {
      tmp_6 = block(this.bulletScope_1);
    }finally {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.bulletScope_1.bulletListSettingStack_1.isEmpty_y1axqb_k$()) {
        this.bulletScope_1.bulletListSettingStack_1.removeAt_6niowx_k$(get_lastIndex(this.bulletScope_1.bulletListSettingStack_1));
      }
      this.pop_r53bx3_k$(parIndex);
    }
    return tmp_6;
  };
  protoOf(Builder).withBulletList$default_vaac7g_k$ = function (indentation, bullet, block, $super) {
    indentation = indentation === VOID ? Companion_getInstance_18().get_DefaultIndentation_ftgsml_k$() : indentation;
    bullet = bullet === VOID ? Companion_getInstance_18().get_Default_goqax4_k$() : bullet;
    return $super === VOID ? this.withBulletList_8m2v73_k$(indentation, bullet, block) : $super.withBulletList_8m2v73_k$.call(this, new TextUnit(indentation), bullet, block);
  };
  protoOf(Builder).withBulletListItem_89mu5_k$ = function (_this__u8e3s4, bullet, block) {
    var lastItemInStack = lastOrNull(_this__u8e3s4.bulletListSettingStack_1);
    var tmp;
    if (lastItemInStack == null) {
      tmp = null;
    } else {
      var tmp_0 = lastItemInStack.get_first_irdx8n_k$();
      tmp = tmp_0 == null ? null : tmp_0.packedValue_1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    var tmp_2 = tmp1_elvis_lhs;
    if ((tmp_2 == null ? null : new TextUnit(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_18().get_DefaultIndentation_ftgsml_k$();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var itemIndentation = tmp_1;
    var tmp_3;
    if (bullet == null) {
      var tmp4_elvis_lhs = lastItemInStack == null ? null : lastItemInStack.get_second_jf7fjx_k$();
      tmp_3 = tmp4_elvis_lhs == null ? Companion_getInstance_18().get_Default_goqax4_k$() : tmp4_elvis_lhs;
    } else {
      tmp_3 = bullet;
    }
    var itemBullet = tmp_3;
    var parIndex = _this__u8e3s4.builder_1.pushStyle_727l41_k$(new ParagraphStyle_0(VOID, VOID, VOID, new TextIndent_0(itemIndentation, itemIndentation)));
    var bulletIndex = _this__u8e3s4.builder_1.pushBullet_jjppx9_k$(itemBullet);
    var tmp_4;
    try {
      tmp_4 = block(_this__u8e3s4.builder_1);
    }finally {
      _this__u8e3s4.builder_1.pop_r53bx3_k$(bulletIndex);
      _this__u8e3s4.builder_1.pop_r53bx3_k$(parIndex);
    }
    return tmp_4;
  };
  protoOf(Builder).withBulletListItem$default_261z1d_k$ = function (_this__u8e3s4, bullet, block, $super) {
    bullet = bullet === VOID ? null : bullet;
    return $super === VOID ? this.withBulletListItem_89mu5_k$(_this__u8e3s4, bullet, block) : $super.withBulletListItem_89mu5_k$.call(this, _this__u8e3s4, bullet, block);
  };
  protoOf(Builder).pushStringAnnotation_pqhe92_k$ = function (tag, annotation) {
    // Inline function 'kotlin.also' call
    var this_0 = new MutableRange(new StringAnnotation(_StringAnnotation___init__impl__o6a5i7(annotation)), this.text_1.get_length_g42xv3_k$(), VOID, tag);
    this.styleStack_1.add_utx5q5_k$(this_0);
    this.annotations_1.add_utx5q5_k$(this_0);
    return this.styleStack_1.get_size_woubt6_k$() - 1 | 0;
  };
  protoOf(Builder).pushTtsAnnotation_ixzb1z_k$ = function (ttsAnnotation) {
    // Inline function 'kotlin.also' call
    var this_0 = new MutableRange(ttsAnnotation, this.text_1.get_length_g42xv3_k$());
    this.styleStack_1.add_utx5q5_k$(this_0);
    this.annotations_1.add_utx5q5_k$(this_0);
    return this.styleStack_1.get_size_woubt6_k$() - 1 | 0;
  };
  protoOf(Builder).pushUrlAnnotation_w8hid3_k$ = function (urlAnnotation) {
    // Inline function 'kotlin.also' call
    var this_0 = new MutableRange(urlAnnotation, this.text_1.get_length_g42xv3_k$());
    this.styleStack_1.add_utx5q5_k$(this_0);
    this.annotations_1.add_utx5q5_k$(this_0);
    return this.styleStack_1.get_size_woubt6_k$() - 1 | 0;
  };
  protoOf(Builder).pushLink_vfa5aa_k$ = function (link) {
    // Inline function 'kotlin.also' call
    var this_0 = new MutableRange(link, this.text_1.get_length_g42xv3_k$());
    this.styleStack_1.add_utx5q5_k$(this_0);
    this.annotations_1.add_utx5q5_k$(this_0);
    return this.styleStack_1.get_size_woubt6_k$() - 1 | 0;
  };
  protoOf(Builder).pop_6ozo1t_k$ = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'androidx.compose.ui.text.internal.checkPrecondition' call
    if (!!this.styleStack_1.isEmpty_y1axqb_k$()) {
      var tmp$ret$1 = 'Nothing to pop.';
      throwIllegalStateException(tmp$ret$1);
    }
    var item = this.styleStack_1.removeAt_6niowx_k$(this.styleStack_1.get_size_woubt6_k$() - 1 | 0);
    item.end_1 = this.text_1.get_length_g42xv3_k$();
  };
  protoOf(Builder).pop_r53bx3_k$ = function (index) {
    // Inline function 'androidx.compose.ui.text.internal.checkPrecondition' call
    if (!(index < this.styleStack_1.get_size_woubt6_k$())) {
      var tmp$ret$0 = '' + index + ' should be less than ' + this.styleStack_1.get_size_woubt6_k$();
      throwIllegalStateException(tmp$ret$0);
    }
    while ((this.styleStack_1.get_size_woubt6_k$() - 1 | 0) >= index) {
      this.pop_6ozo1t_k$();
    }
  };
  protoOf(Builder).toAnnotatedString_yesz4e_k$ = function () {
    var tmp = this.text_1.toString();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = this.annotations_1;
    var target = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = item.toRange_d5re6u_k$(this.text_1.get_length_g42xv3_k$());
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    return AnnotatedString_init_$Create$_0(tmp, target);
  };
  protoOf(Builder).mapAnnotations_lm1g88_k$ = function (transform) {
    var inductionVariable = 0;
    var last = this.annotations_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var newAnnotation = transform(this.annotations_1.get_c1px32_k$(i).toRange$default_huuesc_k$());
        this.annotations_1.set_82063s_k$(i, Companion_getInstance_16().fromRange_bp7iwt_k$(newAnnotation));
      }
       while (inductionVariable <= last);
  };
  protoOf(Builder).flatMapAnnotations_v4v7w9_k$ = function (transform) {
    // Inline function 'androidx.compose.ui.util.fastFlatMap' call
    var this_0 = this.annotations_1;
    var target = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap' call
        var this_1 = transform(item.toRange$default_huuesc_k$());
        var target_0 = ArrayList_init_$Create$_0(this_1.get_size_woubt6_k$());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable_0 = 0;
        var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_0 = this_1.get_c1px32_k$(index_0);
            // Inline function 'kotlin.collections.plusAssign' call
            var element = Companion_getInstance_16().fromRange_bp7iwt_k$(item_0);
            target_0.add_utx5q5_k$(element);
          }
           while (inductionVariable_0 <= last_0);
        var list = target_0;
        addAll(target, list);
      }
       while (inductionVariable <= last);
    var replacedAnnotations = target;
    this.annotations_1.clear_j9egeb_k$();
    this.annotations_1.addAll_4lagoh_k$(replacedAnnotations);
  };
  function Annotation_0() {
  }
  function ExhaustiveAnnotation() {
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.Saver_1 = get_AnnotatedStringSaver();
  }
  protoOf(Companion_0).get_Saver_igssp8_k$ = function () {
    return this.Saver_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_17() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
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
  function AnnotatedString$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.start_1;
    var tmp$ret$1 = b.start_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function AnnotatedString(annotations, text) {
    Companion_getInstance_17();
    this.annotations_1 = annotations;
    this.text_1 = text;
    var spanStyles = null;
    var paragraphStyles = null;
    var tmp0_safe_receiver = this.annotations_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.get_c1px32_k$(index);
          var tmp = item.item_1;
          if (tmp instanceof SpanStyle) {
            if (spanStyles == null) {
              // Inline function 'kotlin.collections.mutableListOf' call
              spanStyles = ArrayList_init_$Create$();
            }
            var tmp_0 = ensureNotNull(spanStyles);
            tmp_0.add_utx5q5_k$(item instanceof Range ? item : THROW_CCE());
          } else {
            var tmp_1 = item.item_1;
            if (tmp_1 instanceof ParagraphStyle_0) {
              if (paragraphStyles == null) {
                // Inline function 'kotlin.collections.mutableListOf' call
                paragraphStyles = ArrayList_init_$Create$();
              }
              var tmp_2 = ensureNotNull(paragraphStyles);
              tmp_2.add_utx5q5_k$(item instanceof Range ? item : THROW_CCE());
            }
          }
        }
         while (inductionVariable <= last);
    }
    this.spanStylesOrNull_1 = spanStyles;
    this.paragraphStylesOrNull_1 = paragraphStyles;
    var tmp1_safe_receiver = this.paragraphStylesOrNull_1;
    var tmp_3;
    if (tmp1_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.collections.sortedBy' call
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_4 = AnnotatedString$lambda;
      var tmp$ret$4 = new sam$kotlin_Comparator$0(tmp_4);
      tmp_3 = sortedWith(tmp1_safe_receiver, tmp$ret$4);
    }
    var sorted = tmp_3;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(sorted == null || sorted.isEmpty_y1axqb_k$())) {
      var previousEnds = mutableIntListOf(first(sorted).end_1);
      var inductionVariable_0 = 1;
      var last_0 = sorted.get_size_woubt6_k$();
      if (inductionVariable_0 < last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var current = sorted.get_c1px32_k$(i);
          $l$loop_0: while (true) {
            // Inline function 'androidx.collection.IntList.isNotEmpty' call
            if (!!(previousEnds.get__size_vbvbdx_k$() === 0)) {
              break $l$loop_0;
            }
            var previousEnd = previousEnds.last_1z1cm_k$();
            if (current.start_1 >= previousEnd) {
              // Inline function 'androidx.collection.IntList.lastIndex' call
              var tmp$ret$8 = previousEnds.get__size_vbvbdx_k$() - 1 | 0;
              previousEnds.removeAt_6niowx_k$(tmp$ret$8);
            } else {
              // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
              if (!(current.end_1 <= previousEnd)) {
                var tmp$ret$9 = 'Paragraph overlap not allowed, end ' + current.end_1 + ' should be less than or equal to ' + previousEnd;
                throwIllegalArgumentException(tmp$ret$9);
              }
              break $l$loop_0;
            }
          }
          previousEnds.add_lnluon_k$(current.end_1);
        }
         while (inductionVariable_0 < last_0);
    }
  }
  protoOf(AnnotatedString).get_annotations_s6zo16_k$ = function () {
    return this.annotations_1;
  };
  protoOf(AnnotatedString).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(AnnotatedString).get_spanStylesOrNull_ry88yu_k$ = function () {
    return this.spanStylesOrNull_1;
  };
  protoOf(AnnotatedString).get_spanStyles_muoq3_k$ = function () {
    var tmp0_elvis_lhs = this.spanStylesOrNull_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AnnotatedString).get_paragraphStylesOrNull_olnyr8_k$ = function () {
    return this.paragraphStylesOrNull_1;
  };
  protoOf(AnnotatedString).get_paragraphStyles_29kgs9_k$ = function () {
    var tmp0_elvis_lhs = this.paragraphStylesOrNull_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AnnotatedString).get_length_g42xv3_k$ = function () {
    return this.text_1.length;
  };
  protoOf(AnnotatedString).get_kdzpvg_k$ = function (index) {
    return charCodeAt(this.text_1, index);
  };
  protoOf(AnnotatedString).subSequence_hm5hnj_k$ = function (startIndex, endIndex) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(startIndex <= endIndex)) {
      var tmp$ret$0 = 'start (' + startIndex + ') should be less or equal to end (' + endIndex + ')';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (startIndex === 0 && endIndex === this.text_1.length)
      return this;
    var text = substring(this.text_1, startIndex, endIndex);
    var tmp0_annotations = filterRanges(this.annotations_1, startIndex, endIndex);
    return new AnnotatedString(tmp0_annotations, text);
  };
  protoOf(AnnotatedString).subSequence_lx5l5t_k$ = function (range) {
    return this.subSequence_hm5hnj_k$(_TextRange___get_min__impl__uu95c4(range), _TextRange___get_max__impl__owm8m(range));
  };
  protoOf(AnnotatedString).plus_hc879h_k$ = function (other) {
    // Inline function 'kotlin.with' call
    var $this$with = Builder_init_$Create$_0(this);
    $this$with.append_fd4yh7_k$(other);
    return $this$with.toAnnotatedString_yesz4e_k$();
  };
  protoOf(AnnotatedString).getStringAnnotations_8p6ry5_k$ = function (tag, start, end) {
    var tmp0_safe_receiver = this.annotations_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'androidx.compose.ui.util.fastFilteredMap' call
      var target = ArrayList_init_$Create$_0(tmp0_safe_receiver.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.get_c1px32_k$(index);
          var tmp_0;
          var tmp_1;
          var tmp_2 = item.item_1;
          if (tmp_2 instanceof StringAnnotation) {
            tmp_1 = tag === item.tag_1;
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp_0 = intersect(start, end, item.start_1, item.end_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            // Inline function 'kotlin.collections.plusAssign' call
            var element = unbox(item);
            target.add_utx5q5_k$(element);
          }
        }
         while (inductionVariable <= last);
      tmp = target;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_3;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_3 = emptyList();
    } else {
      tmp_3 = tmp1_elvis_lhs;
    }
    return tmp_3;
  };
  protoOf(AnnotatedString).hasStringAnnotations_89kqwx_k$ = function (tag, start, end) {
    var tmp0_safe_receiver = this.annotations_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.get_c1px32_k$(index);
            var tmp_0;
            var tmp_1;
            var tmp_2 = item.item_1;
            if (tmp_2 instanceof StringAnnotation) {
              tmp_1 = tag === item.tag_1;
            } else {
              tmp_1 = false;
            }
            if (tmp_1) {
              tmp_0 = intersect(start, end, item.start_1, item.end_1);
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$1 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = false;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(AnnotatedString).getStringAnnotations_p85zqb_k$ = function (start, end) {
    var tmp0_safe_receiver = this.annotations_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'androidx.compose.ui.util.fastFilteredMap' call
      var target = ArrayList_init_$Create$_0(tmp0_safe_receiver.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.get_c1px32_k$(index);
          var tmp_0;
          var tmp_1 = item.item_1;
          if (tmp_1 instanceof StringAnnotation) {
            tmp_0 = intersect(start, end, item.start_1, item.end_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            // Inline function 'kotlin.collections.plusAssign' call
            var element = unbox(item);
            target.add_utx5q5_k$(element);
          }
        }
         while (inductionVariable <= last);
      tmp = target;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_2;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_2 = emptyList();
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    return tmp_2;
  };
  protoOf(AnnotatedString).getTtsAnnotations_6d58tj_k$ = function (start, end) {
    var tmp0_safe_receiver = this.annotations_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      var target = ArrayList_init_$Create$_0(tmp0_safe_receiver.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.get_c1px32_k$(index);
          var tmp_0;
          var tmp_1 = item.item_1;
          if (tmp_1 instanceof TtsAnnotation) {
            tmp_0 = intersect(start, end, item.start_1, item.end_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            // Inline function 'kotlin.collections.plusAssign' call
            target.add_utx5q5_k$(item);
          }
        }
         while (inductionVariable <= last);
      tmp = target;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_2;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_2 = emptyList();
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp_3 = tmp_2;
    return isInterface(tmp_3, KtList) ? tmp_3 : THROW_CCE();
  };
  protoOf(AnnotatedString).getUrlAnnotations_c2y223_k$ = function (start, end) {
    var tmp0_safe_receiver = this.annotations_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      var target = ArrayList_init_$Create$_0(tmp0_safe_receiver.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.get_c1px32_k$(index);
          var tmp_0;
          var tmp_1 = item.item_1;
          if (tmp_1 instanceof UrlAnnotation) {
            tmp_0 = intersect(start, end, item.start_1, item.end_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            // Inline function 'kotlin.collections.plusAssign' call
            target.add_utx5q5_k$(item);
          }
        }
         while (inductionVariable <= last);
      tmp = target;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_2;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_2 = emptyList();
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp_3 = tmp_2;
    return isInterface(tmp_3, KtList) ? tmp_3 : THROW_CCE();
  };
  protoOf(AnnotatedString).getLinkAnnotations_oa39uc_k$ = function (start, end) {
    var tmp0_safe_receiver = this.annotations_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      var target = ArrayList_init_$Create$_0(tmp0_safe_receiver.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.get_c1px32_k$(index);
          var tmp_0;
          var tmp_1 = item.item_1;
          if (tmp_1 instanceof LinkAnnotation) {
            tmp_0 = intersect(start, end, item.start_1, item.end_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            // Inline function 'kotlin.collections.plusAssign' call
            target.add_utx5q5_k$(item);
          }
        }
         while (inductionVariable <= last);
      tmp = target;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_2;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_2 = emptyList();
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp_3 = tmp_2;
    return isInterface(tmp_3, KtList) ? tmp_3 : THROW_CCE();
  };
  protoOf(AnnotatedString).hasLinkAnnotations_xnt5ww_k$ = function (start, end) {
    var tmp0_safe_receiver = this.annotations_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.get_c1px32_k$(index);
            var tmp_0;
            var tmp_1 = item.item_1;
            if (tmp_1 instanceof LinkAnnotation) {
              tmp_0 = intersect(start, end, item.start_1, item.end_1);
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$1 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = false;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(AnnotatedString).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnnotatedString))
      return false;
    if (!(this.text_1 === other.text_1))
      return false;
    if (!equals(this.annotations_1, other.annotations_1))
      return false;
    return true;
  };
  protoOf(AnnotatedString).hashCode = function () {
    var result = getStringHashCode(this.text_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.annotations_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(AnnotatedString).toString = function () {
    return this.text_1;
  };
  protoOf(AnnotatedString).hasEqualAnnotations_63c2tx_k$ = function (other) {
    return equals(this.annotations_1, other.annotations_1);
  };
  protoOf(AnnotatedString).mapAnnotations_48ro2r_k$ = function (transform) {
    var builder = Builder_init_$Create$_0(this);
    builder.mapAnnotations_lm1g88_k$(transform);
    return builder.toAnnotatedString_yesz4e_k$();
  };
  protoOf(AnnotatedString).flatMapAnnotations_l37xtw_k$ = function (transform) {
    var builder = Builder_init_$Create$_0(this);
    builder.flatMapAnnotations_v4v7w9_k$(transform);
    return builder.toAnnotatedString_yesz4e_k$();
  };
  function constructAnnotationsFromSpansAndParagraphs(spanStyles, paragraphStyles) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp;
    if (spanStyles.isEmpty_y1axqb_k$() && paragraphStyles.isEmpty_y1axqb_k$()) {
      tmp = null;
    } else if (paragraphStyles.isEmpty_y1axqb_k$()) {
      tmp = spanStyles;
    } else if (spanStyles.isEmpty_y1axqb_k$()) {
      tmp = paragraphStyles;
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$_0(spanStyles.get_size_woubt6_k$() + paragraphStyles.get_size_woubt6_k$() | 0);
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = spanStyles.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = spanStyles.get_c1px32_k$(index);
          this_0.add_utx5q5_k$(item);
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_0 = 0;
      var last_0 = paragraphStyles.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = paragraphStyles.get_c1px32_k$(index_0);
          this_0.add_utx5q5_k$(item_0);
        }
         while (inductionVariable_0 <= last_0);
      tmp = this_0;
    }
    return tmp;
  }
  function filterRanges(ranges, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(start <= end)) {
      var tmp$ret$0 = 'start (' + start + ') should be less than or equal to end (' + end + ')';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var tmp;
    if (ranges == null) {
      return null;
    } else {
      tmp = ranges;
    }
    var nonNullRange = tmp;
    // Inline function 'androidx.compose.ui.util.fastFilteredMap' call
    var target = ArrayList_init_$Create$_0(nonNullRange.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = nonNullRange.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nonNullRange.get_c1px32_k$(index);
        if (intersect(start, end, item.start_1, item.end_1)) {
          // Inline function 'kotlin.comparisons.maxOf' call
          var b = item.start_1;
          var tmp_0 = Math.max(start, b) - start | 0;
          // Inline function 'kotlin.comparisons.minOf' call
          var b_0 = item.end_1;
          var tmp$ret$4 = Math.min(end, b_0);
          // Inline function 'kotlin.collections.plusAssign' call
          var element = new Range(item.item_1, tmp_0, tmp$ret$4 - start | 0, item.tag_1);
          target.add_utx5q5_k$(element);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (target.isEmpty_y1axqb_k$()) {
      tmp_1 = null;
    } else {
      tmp_1 = target;
    }
    return tmp_1;
  }
  function intersect(lStart, lEnd, rStart, rEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return !!(!!(!!(lStart === lEnd | rStart === rEnd) & lStart === rStart) | !!(lStart < rEnd & rStart < lEnd));
  }
  function getLocalAnnotations(_this__u8e3s4, start, end, predicate) {
    predicate = predicate === VOID ? null : predicate;
    _init_properties_AnnotatedString_kt__ww2pyh();
    if (start === end)
      return null;
    var tmp0_elvis_lhs = _this__u8e3s4.annotations_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var annotations = tmp;
    if (start === 0 && end >= _this__u8e3s4.text_1.length) {
      var tmp_0;
      if (predicate == null) {
        tmp_0 = annotations;
      } else {
        // Inline function 'androidx.compose.ui.util.fastFilter' call
        var target = ArrayList_init_$Create$_0(annotations.get_size_woubt6_k$());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable = 0;
        var last = annotations.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = annotations.get_c1px32_k$(index);
            if (predicate(item.item_1)) {
              // Inline function 'kotlin.collections.plusAssign' call
              target.add_utx5q5_k$(item);
            }
          }
           while (inductionVariable <= last);
        tmp_0 = target;
      }
      return tmp_0;
    }
    // Inline function 'androidx.compose.ui.util.fastFilteredMap' call
    var target_0 = ArrayList_init_$Create$_0(annotations.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_0 = 0;
    var last_0 = annotations.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = annotations.get_c1px32_k$(index_0);
        var tmp_1;
        var tmp1_elvis_lhs = predicate == null ? null : predicate(item_0.item_1);
        if (tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs) {
          tmp_1 = intersect(start, end, item_0.start_1, item_0.end_1);
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          var tmp0_tag = item_0.tag_1;
          var tmp1_item = item_0.item_1;
          var tmp2_start = coerceIn(item_0.start_1, start, end) - start | 0;
          var tmp3_end = coerceIn(item_0.end_1, start, end) - start | 0;
          // Inline function 'kotlin.collections.plusAssign' call
          var element = new Range(tmp1_item, tmp2_start, tmp3_end, tmp0_tag);
          target_0.add_utx5q5_k$(element);
        }
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function mapEachParagraphStyle(_this__u8e3s4, defaultParagraphStyle, block) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = normalizedParagraphStyles(_this__u8e3s4, defaultParagraphStyle);
    var target = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        var annotatedString = access$substringWithoutParagraphStyles$tAnnotatedStringKt(_this__u8e3s4, item.start_1, item.end_1);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = block(annotatedString, item);
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function emptyAnnotatedString() {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return get_EmptyAnnotatedString();
  }
  function normalizedParagraphStyles(_this__u8e3s4, defaultParagraphStyle) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp0_safe_receiver = _this__u8e3s4.paragraphStylesOrNull_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.sortedBy' call
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_0 = normalizedParagraphStyles$lambda;
      var tmp$ret$0 = new sam$kotlin_Comparator$0_0(tmp_0);
      tmp = sortedWith(tmp0_safe_receiver, tmp$ret$0);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_1 = emptyList();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var sortedParagraphs = tmp_1;
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var lastAdded = 0;
    var stack = ArrayDeque_init_$Create$();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = sortedParagraphs.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = sortedParagraphs.get_c1px32_k$(index);
        var current = item.copy$default_a57cke_k$(defaultParagraphStyle.merge_jfodcj_k$(item.item_1));
        $l$loop: while (true) {
          var tmp_2;
          if (lastAdded < current.start_1) {
            // Inline function 'kotlin.collections.isNotEmpty' call
            tmp_2 = !stack.isEmpty_y1axqb_k$();
          } else {
            tmp_2 = false;
          }
          if (!tmp_2) {
            break $l$loop;
          }
          var lastInStack = stack.last_1z1cm_k$();
          if (current.start_1 < lastInStack.end_1) {
            result.add_utx5q5_k$(Range_init_$Create$(lastInStack.item_1, lastAdded, current.start_1));
            lastAdded = current.start_1;
          } else {
            result.add_utx5q5_k$(Range_init_$Create$(lastInStack.item_1, lastAdded, lastInStack.end_1));
            lastAdded = lastInStack.end_1;
            $l$loop_0: while (true) {
              var tmp_3;
              // Inline function 'kotlin.collections.isNotEmpty' call
              if (!stack.isEmpty_y1axqb_k$()) {
                tmp_3 = lastAdded === stack.last_1z1cm_k$().end_1;
              } else {
                tmp_3 = false;
              }
              if (!tmp_3) {
                break $l$loop_0;
              }
              stack.removeLast_i5wx8a_k$();
            }
          }
        }
        if (lastAdded < current.start_1) {
          result.add_utx5q5_k$(Range_init_$Create$(defaultParagraphStyle, lastAdded, current.start_1));
          lastAdded = current.start_1;
        }
        var lastInStack_0 = stack.lastOrNull_u4yjpc_k$();
        if (!(lastInStack_0 == null)) {
          if (lastInStack_0.start_1 === current.start_1 && lastInStack_0.end_1 === current.end_1) {
            stack.removeLast_i5wx8a_k$();
            stack.add_utx5q5_k$(Range_init_$Create$(lastInStack_0.item_1.merge_jfodcj_k$(current.item_1), current.start_1, current.end_1));
          } else if (lastInStack_0.start_1 === lastInStack_0.end_1) {
            result.add_utx5q5_k$(Range_init_$Create$(lastInStack_0.item_1, lastInStack_0.start_1, lastInStack_0.end_1));
            stack.removeLast_i5wx8a_k$();
            stack.add_utx5q5_k$(Range_init_$Create$(current.item_1, current.start_1, current.end_1));
          } else if (lastInStack_0.end_1 < current.end_1) {
            throw IllegalArgumentException_init_$Create$();
          } else {
            stack.add_utx5q5_k$(Range_init_$Create$(lastInStack_0.item_1.merge_jfodcj_k$(current.item_1), current.start_1, current.end_1));
          }
        } else {
          stack.add_utx5q5_k$(Range_init_$Create$(current.item_1, current.start_1, current.end_1));
        }
      }
       while (inductionVariable <= last);
    $l$loop_1: while (true) {
      var tmp_4;
      if (lastAdded <= _this__u8e3s4.text_1.length) {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_4 = !stack.isEmpty_y1axqb_k$();
      } else {
        tmp_4 = false;
      }
      if (!tmp_4) {
        break $l$loop_1;
      }
      var lastInStack_1 = stack.last_1z1cm_k$();
      result.add_utx5q5_k$(Range_init_$Create$(lastInStack_1.item_1, lastAdded, lastInStack_1.end_1));
      lastAdded = lastInStack_1.end_1;
      $l$loop_2: while (true) {
        var tmp_5;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!stack.isEmpty_y1axqb_k$()) {
          tmp_5 = lastAdded === stack.last_1z1cm_k$().end_1;
        } else {
          tmp_5 = false;
        }
        if (!tmp_5) {
          break $l$loop_2;
        }
        stack.removeLast_i5wx8a_k$();
      }
    }
    if (lastAdded < _this__u8e3s4.text_1.length) {
      result.add_utx5q5_k$(Range_init_$Create$(defaultParagraphStyle, lastAdded, _this__u8e3s4.text_1.length));
    }
    if (result.isEmpty_y1axqb_k$()) {
      result.add_utx5q5_k$(Range_init_$Create$(defaultParagraphStyle, 0, 0));
    }
    return result;
  }
  function substringWithoutParagraphStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp = !(start === end) ? substring(_this__u8e3s4.text_1, start, end) : '';
    var tmp0_elvis_lhs = getLocalAnnotations(_this__u8e3s4, start, end, substringWithoutParagraphStyles$lambda);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return AnnotatedString_init_$Create$_0(tmp, tmp_0);
  }
  function access$substringWithoutParagraphStyles$tAnnotatedStringKt($receiver, start, end) {
    return substringWithoutParagraphStyles($receiver, start, end);
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
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
  protoOf(sam$kotlin_Comparator$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function normalizedParagraphStyles$lambda(a, b) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.start_1;
    var tmp$ret$1 = b.start_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function substringWithoutParagraphStyles$lambda(it) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return !(it instanceof ParagraphStyle_0);
  }
  var properties_initialized_AnnotatedString_kt_um06op;
  function _init_properties_AnnotatedString_kt__ww2pyh() {
    if (!properties_initialized_AnnotatedString_kt_um06op) {
      properties_initialized_AnnotatedString_kt_um06op = true;
      EmptyAnnotatedString = AnnotatedString_init_$Create$_0('');
      androidx_compose_ui_text_AnnotatedString_Range$stable = 0;
      androidx_compose_ui_text_AnnotatedString_Builder_BulletScope$stable = 8;
      androidx_compose_ui_text_AnnotatedString_Builder$stable = 8;
      androidx_compose_ui_text_AnnotatedString$stable = 0;
    }
  }
  var androidx_compose_ui_text_Bullet$stable;
  function Companion_1() {
    Companion_instance_1 = this;
    this.DefaultIndentation_1 = get_em_0(1);
    this.DefaultSize_1 = get_em_1(0.25);
    this.DefaultPadding_1 = get_em_1(0.25);
    this.Default_1 = new Bullet(CircleShape_getInstance(), this.DefaultSize_1, this.DefaultSize_1, this.DefaultPadding_1);
  }
  protoOf(Companion_1).get_DefaultIndentation_ftgsml_k$ = function () {
    return this.DefaultIndentation_1;
  };
  protoOf(Companion_1).get_DefaultSize_wxdsed_k$ = function () {
    return this.DefaultSize_1;
  };
  protoOf(Companion_1).get_DefaultPadding_ytcwuz_k$ = function () {
    return this.DefaultPadding_1;
  };
  protoOf(Companion_1).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_18() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Bullet(shape, width, height, padding, brush, alpha, drawStyle) {
    Companion_getInstance_18();
    brush = brush === VOID ? null : brush;
    alpha = alpha === VOID ? NaN : alpha;
    drawStyle = drawStyle === VOID ? Fill_getInstance() : drawStyle;
    this.shape_1 = shape;
    this.width_1 = width;
    this.height_1 = height;
    this.padding_1 = padding;
    this.brush_1 = brush;
    this.alpha_1 = alpha;
    this.drawStyle_1 = drawStyle;
  }
  protoOf(Bullet).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  protoOf(Bullet).get_width_sw31vj_k$ = function () {
    return this.width_1;
  };
  protoOf(Bullet).get_height_pbi6b2_k$ = function () {
    return this.height_1;
  };
  protoOf(Bullet).get_padding_z0zb7a_k$ = function () {
    return this.padding_1;
  };
  protoOf(Bullet).get_brush_ipcjyp_k$ = function () {
    return this.brush_1;
  };
  protoOf(Bullet).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Bullet).get_drawStyle_arbehw_k$ = function () {
    return this.drawStyle_1;
  };
  protoOf(Bullet).copy_wb6njx_k$ = function (shape, width, height, padding, brush, alpha, drawStyle) {
    return new Bullet(shape, width, height, padding, brush, alpha, drawStyle);
  };
  protoOf(Bullet).copy$default_ihjtj9_k$ = function (shape, width, height, padding, brush, alpha, drawStyle, $super) {
    shape = shape === VOID ? this.shape_1 : shape;
    width = width === VOID ? this.width_1 : width;
    height = height === VOID ? this.height_1 : height;
    padding = padding === VOID ? this.padding_1 : padding;
    brush = brush === VOID ? this.brush_1 : brush;
    alpha = alpha === VOID ? this.alpha_1 : alpha;
    drawStyle = drawStyle === VOID ? this.drawStyle_1 : drawStyle;
    return $super === VOID ? this.copy_wb6njx_k$(shape, width, height, padding, brush, alpha, drawStyle) : $super.copy_wb6njx_k$.call(this, shape, new TextUnit(width), new TextUnit(height), new TextUnit(padding), brush, alpha, drawStyle);
  };
  protoOf(Bullet).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof Bullet);
    }
    if (tmp)
      return false;
    if (!equals(this.shape_1, other.shape_1))
      return false;
    if (!equals(this.width_1, other.width_1))
      return false;
    if (!equals(this.height_1, other.height_1))
      return false;
    if (!equals(this.padding_1, other.padding_1))
      return false;
    if (!equals(this.brush_1, other.brush_1))
      return false;
    if (!(this.alpha_1 === other.alpha_1))
      return false;
    if (!equals(this.drawStyle_1, other.drawStyle_1))
      return false;
    return true;
  };
  protoOf(Bullet).hashCode = function () {
    var result = hashCode(this.shape_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.width_1) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.height_1) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.padding_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.brush_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.alpha_1) | 0;
    result = imul(31, result) + hashCode(this.drawStyle_1) | 0;
    return result;
  };
  protoOf(Bullet).toString = function () {
    return 'Bullet(shape=' + toString_0(this.shape_1) + ', size=(' + TextUnit__toString_impl_51ghw0(this.width_1) + ', ' + TextUnit__toString_impl_51ghw0(this.height_1) + '), padding=' + TextUnit__toString_impl_51ghw0(this.padding_1) + ', brush=' + toString(this.brush_1) + ', ' + ('alpha=' + this.alpha_1 + ', drawStyle=' + toString_0(this.drawStyle_1) + ')');
  };
  function CircleShape() {
    CircleShape_instance = this;
  }
  protoOf(CircleShape).createOutline_nnkieo_k$ = function (size, layoutDirection, density) {
    // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
    var x = _Size___get_minDimension__impl__4iso0r(size) / 2.0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(x));
    var v2 = fromInt(toRawBits(x));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var cornerRadius = _CornerRadius___init__impl__ojmabe(tmp$ret$0);
    return new Rounded(RoundRect(toRect(size), cornerRadius, cornerRadius, cornerRadius, cornerRadius));
  };
  var CircleShape_instance;
  function CircleShape_getInstance() {
    if (CircleShape_instance == null)
      new CircleShape();
    return CircleShape_instance;
  }
  function ExperimentalTextApi() {
  }
  protoOf(ExperimentalTextApi).equals = function (other) {
    if (!(other instanceof ExperimentalTextApi))
      return false;
    other instanceof ExperimentalTextApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalTextApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalTextApi).toString = function () {
    return '@androidx.compose.ui.text.ExperimentalTextApi(' + ')';
  };
  function InternalTextApi() {
  }
  protoOf(InternalTextApi).equals = function (other) {
    if (!(other instanceof InternalTextApi))
      return false;
    other instanceof InternalTextApi || THROW_CCE();
    return true;
  };
  protoOf(InternalTextApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalTextApi).toString = function () {
    return '@androidx.compose.ui.text.InternalTextApi(' + ')';
  };
  var androidx_compose_ui_text_LinkAnnotation_Url$stable;
  var androidx_compose_ui_text_LinkAnnotation_Clickable$stable;
  var androidx_compose_ui_text_LinkAnnotation$stable;
  function Url(url, styles, linkInteractionListener) {
    styles = styles === VOID ? null : styles;
    linkInteractionListener = linkInteractionListener === VOID ? null : linkInteractionListener;
    LinkAnnotation.call(this);
    this.url_1 = url;
    this.styles_1 = styles;
    this.linkInteractionListener_1 = linkInteractionListener;
  }
  protoOf(Url).get_url_18iuii_k$ = function () {
    return this.url_1;
  };
  protoOf(Url).get_styles_jnubqj_k$ = function () {
    return this.styles_1;
  };
  protoOf(Url).get_linkInteractionListener_65owgt_k$ = function () {
    return this.linkInteractionListener_1;
  };
  protoOf(Url).copy_gin8nc_k$ = function (url, styles, linkInteractionListener) {
    return new Url(url, styles, linkInteractionListener);
  };
  protoOf(Url).copy$default_nje829_k$ = function (url, styles, linkInteractionListener, $super) {
    url = url === VOID ? this.url_1 : url;
    styles = styles === VOID ? this.styles_1 : styles;
    linkInteractionListener = linkInteractionListener === VOID ? this.linkInteractionListener_1 : linkInteractionListener;
    return $super === VOID ? this.copy_gin8nc_k$(url, styles, linkInteractionListener) : $super.copy_gin8nc_k$.call(this, url, styles, linkInteractionListener);
  };
  protoOf(Url).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Url))
      return false;
    if (!(this.url_1 === other.url_1))
      return false;
    if (!equals(this.styles_1, other.styles_1))
      return false;
    if (!equals(this.linkInteractionListener_1, other.linkInteractionListener_1))
      return false;
    return true;
  };
  protoOf(Url).hashCode = function () {
    var result = getStringHashCode(this.url_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.styles_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.linkInteractionListener_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(Url).toString = function () {
    return 'LinkAnnotation.Url(url=' + this.url_1 + ')';
  };
  function Clickable(tag, styles, linkInteractionListener) {
    styles = styles === VOID ? null : styles;
    LinkAnnotation.call(this);
    this.tag_1 = tag;
    this.styles_1 = styles;
    this.linkInteractionListener_1 = linkInteractionListener;
  }
  protoOf(Clickable).get_tag_18ivnz_k$ = function () {
    return this.tag_1;
  };
  protoOf(Clickable).get_styles_jnubqj_k$ = function () {
    return this.styles_1;
  };
  protoOf(Clickable).get_linkInteractionListener_65owgt_k$ = function () {
    return this.linkInteractionListener_1;
  };
  protoOf(Clickable).copy_gin8nc_k$ = function (tag, styles, linkInteractionListener) {
    return new Clickable(tag, styles, linkInteractionListener);
  };
  protoOf(Clickable).copy$default_m0l0tg_k$ = function (tag, styles, linkInteractionListener, $super) {
    tag = tag === VOID ? this.tag_1 : tag;
    styles = styles === VOID ? this.styles_1 : styles;
    linkInteractionListener = linkInteractionListener === VOID ? this.linkInteractionListener_1 : linkInteractionListener;
    return $super === VOID ? this.copy_gin8nc_k$(tag, styles, linkInteractionListener) : $super.copy_gin8nc_k$.call(this, tag, styles, linkInteractionListener);
  };
  protoOf(Clickable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Clickable))
      return false;
    if (!(this.tag_1 === other.tag_1))
      return false;
    if (!equals(this.styles_1, other.styles_1))
      return false;
    if (!equals(this.linkInteractionListener_1, other.linkInteractionListener_1))
      return false;
    return true;
  };
  protoOf(Clickable).hashCode = function () {
    var result = getStringHashCode(this.tag_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.styles_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.linkInteractionListener_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(Clickable).toString = function () {
    return 'LinkAnnotation.Clickable(tag=' + this.tag_1 + ')';
  };
  function LinkAnnotation() {
  }
  function LinkInteractionListener() {
  }
  var androidx_compose_ui_text_MultiParagraph$stable;
  var androidx_compose_ui_text_ParagraphInfo$stable;
  function MultiParagraph_init_$Init$(intrinsics, constraints, maxLines, ellipsis, $this) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    MultiParagraph.call($this, intrinsics, constraints, maxLines, ellipsis ? Companion_getInstance_57().get_Ellipsis_8ygjpt_k$() : Companion_getInstance_57().get_Clip_ypf2ge_k$());
    return $this;
  }
  function MultiParagraph_init_$Create$(intrinsics, constraints, maxLines, ellipsis) {
    return MultiParagraph_init_$Init$(intrinsics, constraints, maxLines, ellipsis, objectCreate(protoOf(MultiParagraph)));
  }
  function MultiParagraph_init_$Init$_0(intrinsics, maxLines, ellipsis, width, $this) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    MultiParagraph.call($this, intrinsics, Constraints(VOID, ceilToInt(width)), maxLines, ellipsis ? Companion_getInstance_57().get_Ellipsis_8ygjpt_k$() : Companion_getInstance_57().get_Clip_ypf2ge_k$());
    return $this;
  }
  function MultiParagraph_init_$Create$_0(intrinsics, maxLines, ellipsis, width) {
    return MultiParagraph_init_$Init$_0(intrinsics, maxLines, ellipsis, width, objectCreate(protoOf(MultiParagraph)));
  }
  function MultiParagraph_init_$Init$_1(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader, $this) {
    var tmp;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = placeholders;
    }
    placeholders = tmp;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    var tmp0_intrinsics = new MultiParagraphIntrinsics(annotatedString, style, placeholders, density, createFontFamilyResolver(resourceLoader));
    var tmp1_overflow = ellipsis ? Companion_getInstance_57().get_Ellipsis_8ygjpt_k$() : Companion_getInstance_57().get_Clip_ypf2ge_k$();
    var tmp2_constraints = Constraints(VOID, ceilToInt(width));
    MultiParagraph.call($this, tmp0_intrinsics, tmp2_constraints, maxLines, tmp1_overflow);
    return $this;
  }
  function MultiParagraph_init_$Create$_1(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader) {
    return MultiParagraph_init_$Init$_1(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader, objectCreate(protoOf(MultiParagraph)));
  }
  function MultiParagraph_init_$Init$_2(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $this) {
    var tmp;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = placeholders;
    }
    placeholders = tmp;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    var tmp0_intrinsics = new MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver);
    var tmp1_overflow = ellipsis ? Companion_getInstance_57().get_Ellipsis_8ygjpt_k$() : Companion_getInstance_57().get_Clip_ypf2ge_k$();
    var tmp2_constraints = Constraints(VOID, ceilToInt(width));
    MultiParagraph.call($this, tmp0_intrinsics, tmp2_constraints, maxLines, tmp1_overflow);
    return $this;
  }
  function MultiParagraph_init_$Create$_2(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis) {
    return MultiParagraph_init_$Init$_2(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis, objectCreate(protoOf(MultiParagraph)));
  }
  function MultiParagraph_init_$Init$_3(annotatedString, style, constraints, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $this) {
    var tmp;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = placeholders;
    }
    placeholders = tmp;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    var tmp0_intrinsics = new MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver);
    var tmp1_overflow = ellipsis ? Companion_getInstance_57().get_Ellipsis_8ygjpt_k$() : Companion_getInstance_57().get_Clip_ypf2ge_k$();
    MultiParagraph.call($this, tmp0_intrinsics, constraints, maxLines, tmp1_overflow);
    return $this;
  }
  function MultiParagraph_init_$Create$_3(annotatedString, style, constraints, density, fontFamilyResolver, placeholders, maxLines, ellipsis) {
    return MultiParagraph_init_$Init$_3(annotatedString, style, constraints, density, fontFamilyResolver, placeholders, maxLines, ellipsis, objectCreate(protoOf(MultiParagraph)));
  }
  function MultiParagraph_init_$Init$_4(annotatedString, style, constraints, density, fontFamilyResolver, placeholders, maxLines, overflow, $this) {
    var tmp;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = placeholders;
    }
    placeholders = tmp;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    overflow = overflow === VOID ? Companion_getInstance_57().get_Clip_ypf2ge_k$() : overflow;
    var tmp0_intrinsics = new MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver);
    MultiParagraph.call($this, tmp0_intrinsics, constraints, maxLines, overflow);
    return $this;
  }
  function MultiParagraph_init_$Create$_4(annotatedString, style, constraints, density, fontFamilyResolver, placeholders, maxLines, overflow) {
    return MultiParagraph_init_$Init$_4(annotatedString, style, constraints, density, fontFamilyResolver, placeholders, maxLines, overflow, objectCreate(protoOf(MultiParagraph)));
  }
  function _get_annotatedString__kqljtk($this) {
    return $this.intrinsics_1.get_annotatedString_5pdwrk_k$();
  }
  function requireIndexInRange($this, offset) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= offset ? offset <= (charSequenceLength(_get_annotatedString__kqljtk($this).get_text_wouvsm_k$()) - 1 | 0) : false)) {
      var tmp$ret$0 = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).get_length_g42xv3_k$() + ')';
      throwIllegalArgumentException(tmp$ret$0);
    }
  }
  function requireIndexInRangeInclusiveEnd($this, offset) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= offset ? offset <= _get_annotatedString__kqljtk($this).get_text_wouvsm_k$().length : false)) {
      var tmp$ret$0 = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).get_length_g42xv3_k$() + ']';
      throwIllegalArgumentException(tmp$ret$0);
    }
  }
  function requireLineIndexInRange($this, lineIndex) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= lineIndex ? lineIndex < $this.lineCount_1 : false)) {
      var tmp$ret$0 = 'lineIndex(' + lineIndex + ') is out of bounds [0, ' + $this.lineCount_1 + ')';
      throwIllegalArgumentException(tmp$ret$0);
    }
  }
  function MultiParagraph$getPathForRange$lambda($path, $start, $end) {
    return function (paragraphInfo) {
      // Inline function 'kotlin.with' call
      $path.addPath$default_lo4vd5_k$(paragraphInfo.toGlobal_315jad_k$(paragraphInfo.paragraph_1.getPathForRange_bge8b5_k$(paragraphInfo.toLocalIndex_j164i0_k$($start), paragraphInfo.toLocalIndex_j164i0_k$($end))));
      return Unit_getInstance();
    };
  }
  function MultiParagraph$fillBoundingBoxes$lambda($range, $array, $currentArrayStart, $currentHeight) {
    return function (paragraphInfo) {
      // Inline function 'kotlin.with' call
      var paragraphStart = paragraphInfo.startIndex_1 > _TextRange___get_min__impl__uu95c4($range) ? paragraphInfo.startIndex_1 : _TextRange___get_min__impl__uu95c4($range);
      var paragraphEnd = paragraphInfo.endIndex_1 < _TextRange___get_max__impl__owm8m($range) ? paragraphInfo.endIndex_1 : _TextRange___get_max__impl__owm8m($range);
      var finalRange = TextRange_1(paragraphInfo.toLocalIndex_j164i0_k$(paragraphStart), paragraphInfo.toLocalIndex_j164i0_k$(paragraphEnd));
      paragraphInfo.paragraph_1.fillBoundingBoxes_hcj7vk_k$(finalRange, $array, $currentArrayStart._v);
      var currentArrayEnd = $currentArrayStart._v + imul(_TextRange___get_length__impl__7qes3a(finalRange), 4) | 0;
      var arrayIndex = $currentArrayStart._v;
      while (arrayIndex < currentArrayEnd) {
        var _array__4zh2yp = $array;
        var _index_0__fvwizt = arrayIndex + 1 | 0;
        _array__4zh2yp[_index_0__fvwizt] = _array__4zh2yp[_index_0__fvwizt] + $currentHeight._v;
        var _array__4zh2yp_0 = $array;
        var _index_0__fvwizt_0 = arrayIndex + 3 | 0;
        _array__4zh2yp_0[_index_0__fvwizt_0] = _array__4zh2yp_0[_index_0__fvwizt_0] + $currentHeight._v;
        arrayIndex = arrayIndex + 4 | 0;
      }
      $currentArrayStart._v = currentArrayEnd;
      $currentHeight._v = $currentHeight._v + paragraphInfo.paragraph_1.get_height_e7t92o_k$();
      return Unit_getInstance();
    };
  }
  function MultiParagraph(intrinsics, constraints, maxLines, overflow) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    overflow = overflow === VOID ? Companion_getInstance_57().get_Clip_ypf2ge_k$() : overflow;
    this.intrinsics_1 = intrinsics;
    this.maxLines_1 = maxLines;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(_Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 && _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0)) {
      var tmp$ret$0 = 'Setting Constraints.minWidth and Constraints.minHeight is not supported, these should be the default zero values instead.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var currentHeight = 0.0;
    var currentLineCount = 0;
    var didExceedMaxLines = false;
    // Inline function 'kotlin.collections.mutableListOf' call
    var paragraphInfoList = ArrayList_init_$Create$();
    var infoList = this.intrinsics_1.get_infoList_d6uw6o_k$();
    var inductionVariable = 0;
    var last = infoList.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraphInfo = infoList.get_c1px32_k$(index);
        var tmp = paragraphInfo.get_intrinsics_1zqd0p_k$();
        var tmp_0 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
        var tmp_1;
        if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints)) {
          tmp_1 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints) - ceilToInt(currentHeight) | 0, 0);
        } else {
          tmp_1 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
        }
        var paragraph = Paragraph_0(tmp, Constraints(VOID, tmp_0, VOID, tmp_1), this.maxLines_1 - currentLineCount | 0, overflow);
        var paragraphTop = currentHeight;
        var paragraphBottom = currentHeight + paragraph.get_height_e7t92o_k$();
        currentHeight = paragraphBottom;
        var startLineIndex = currentLineCount;
        var endLineIndex = startLineIndex + paragraph.get_lineCount_lmaazy_k$() | 0;
        currentLineCount = endLineIndex;
        paragraphInfoList.add_utx5q5_k$(new ParagraphInfo(paragraph, paragraphInfo.get_startIndex_oi1lp5_k$(), paragraphInfo.get_endIndex_3lslfk_k$(), startLineIndex, endLineIndex, paragraphTop, paragraphBottom));
        if (paragraph.get_didExceedMaxLines_xyxo57_k$() || (endLineIndex === this.maxLines_1 && !(index === get_lastIndex(this.intrinsics_1.get_infoList_d6uw6o_k$())))) {
          didExceedMaxLines = true;
          break $l$loop;
        }
      }
       while (inductionVariable <= last);
    this.height_1 = currentHeight;
    this.lineCount_1 = currentLineCount;
    this.didExceedMaxLines_1 = didExceedMaxLines;
    this.paragraphInfoList_1 = paragraphInfoList;
    this.width_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.util.fastFlatMap' call
    var target = ArrayList_init_$Create$_0(paragraphInfoList.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_0 = 0;
    var last_0 = paragraphInfoList.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = paragraphInfoList.get_c1px32_k$(index_0);
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.util.fastMap' call
        var this_0 = item.paragraph_1.get_placeholderRects_1ky2fv_k$();
        var target_0 = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable_1 = 0;
        var last_1 = this_0.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_0 = this_0.get_c1px32_k$(index_1);
            // Inline function 'kotlin.collections.plusAssign' call
            var element = item_0 == null ? null : item.toGlobal_ggfqs3_k$(item_0);
            target_0.add_utx5q5_k$(element);
          }
           while (inductionVariable_1 <= last_1);
        var list = target_0;
        addAll(target, list);
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.let' call
    var tmp_3;
    if (target.get_size_woubt6_k$() < this.intrinsics_1.get_placeholders_r4ppyh_k$().get_size_woubt6_k$()) {
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = this.intrinsics_1.get_placeholders_r4ppyh_k$().get_size_woubt6_k$() - target.get_size_woubt6_k$() | 0;
      var list_0 = ArrayList_init_$Create$_0(size);
      // Inline function 'kotlin.repeat' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < size)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          list_0.add_utx5q5_k$(null);
        }
         while (inductionVariable_2 < size);
      tmp_3 = plus(target, list_0);
    } else {
      tmp_3 = target;
    }
    tmp_2.placeholderRects_1 = tmp_3;
  }
  protoOf(MultiParagraph).get_intrinsics_1zqd0p_k$ = function () {
    return this.intrinsics_1;
  };
  protoOf(MultiParagraph).get_maxLines_pclpoc_k$ = function () {
    return this.maxLines_1;
  };
  protoOf(MultiParagraph).get_minIntrinsicWidth_lmc1rq_k$ = function () {
    return this.intrinsics_1.get_minIntrinsicWidth_lmc1rq_k$();
  };
  protoOf(MultiParagraph).get_maxIntrinsicWidth_b4gk2k_k$ = function () {
    return this.intrinsics_1.get_maxIntrinsicWidth_b4gk2k_k$();
  };
  protoOf(MultiParagraph).get_didExceedMaxLines_xyxo57_k$ = function () {
    return this.didExceedMaxLines_1;
  };
  protoOf(MultiParagraph).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(MultiParagraph).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(MultiParagraph).get_firstBaseline_s5430_k$ = function () {
    var tmp;
    if (this.paragraphInfoList_1.isEmpty_y1axqb_k$()) {
      tmp = 0.0;
    } else {
      tmp = this.paragraphInfoList_1.get_c1px32_k$(0).paragraph_1.get_firstBaseline_s5430_k$();
    }
    return tmp;
  };
  protoOf(MultiParagraph).get_lastBaseline_inuptw_k$ = function () {
    var tmp;
    if (this.paragraphInfoList_1.isEmpty_y1axqb_k$()) {
      tmp = 0.0;
    } else {
      // Inline function 'kotlin.with' call
      var $this$with = last(this.paragraphInfoList_1);
      tmp = $this$with.toGlobalYPosition_9oxm7u_k$($this$with.paragraph_1.get_lastBaseline_inuptw_k$());
    }
    return tmp;
  };
  protoOf(MultiParagraph).get_lineCount_lmaazy_k$ = function () {
    return this.lineCount_1;
  };
  protoOf(MultiParagraph).get_placeholderRects_1ky2fv_k$ = function () {
    return this.placeholderRects_1;
  };
  protoOf(MultiParagraph).get_paragraphInfoList_wsoy3w_k$ = function () {
    return this.paragraphInfoList_1;
  };
  protoOf(MultiParagraph).paint_xx9kwo_k$ = function (canvas, color, shadow, decoration) {
    canvas.save_fbe7h_k$();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.paragraphInfoList_1;
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        item.paragraph_1.paint$default_f7qoik_k$(canvas, color, shadow, decoration);
        canvas.translate_7gghdu_k$(0.0, item.paragraph_1.get_height_e7t92o_k$());
      }
       while (inductionVariable <= last);
    canvas.restore_a1ykhu_k$();
  };
  protoOf(MultiParagraph).paint$default_nn0zo6_k$ = function (canvas, color, shadow, decoration, $super) {
    color = color === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : color;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    var tmp;
    if ($super === VOID) {
      this.paint_xx9kwo_k$(canvas, color, shadow, decoration);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.paint_xx9kwo_k$.call(this, canvas, new Color(color), shadow, decoration);
    }
    return tmp;
  };
  protoOf(MultiParagraph).paint_qj08y1_k$ = function (canvas, color, shadow, decoration, drawStyle, blendMode) {
    canvas.save_fbe7h_k$();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.paragraphInfoList_1;
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        item.paragraph_1.paint_qj08y1_k$(canvas, color, shadow, decoration, drawStyle, blendMode);
        canvas.translate_7gghdu_k$(0.0, item.paragraph_1.get_height_e7t92o_k$());
      }
       while (inductionVariable <= last);
    canvas.restore_a1ykhu_k$();
  };
  protoOf(MultiParagraph).paint$default_rvqyft_k$ = function (canvas, color, shadow, decoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : color;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_1().get_DefaultBlendMode_svct2m_k$() : blendMode;
    var tmp;
    if ($super === VOID) {
      this.paint_qj08y1_k$(canvas, color, shadow, decoration, drawStyle, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.paint_qj08y1_k$.call(this, canvas, new Color(color), shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(MultiParagraph).paint_t6aqss_k$ = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    drawMultiParagraph(this, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
  };
  protoOf(MultiParagraph).paint$default_3gfbfa_k$ = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode, $super) {
    alpha = alpha === VOID ? NaN : alpha;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_1().get_DefaultBlendMode_svct2m_k$() : blendMode;
    var tmp;
    if ($super === VOID) {
      this.paint_t6aqss_k$(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.paint_t6aqss_k$.call(this, canvas, brush, alpha, shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(MultiParagraph).getPathForRange_bge8b5_k$ = function (start, end) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!((0 <= start ? start <= end : false) && end <= _get_annotatedString__kqljtk(this).get_text_wouvsm_k$().length)) {
      var tmp$ret$0 = 'Start(' + start + ') or End(' + end + ') is out of range [0..' + _get_annotatedString__kqljtk(this).get_text_wouvsm_k$().length + '),' + ' or start > end!';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (start === end)
      return Path();
    var path = Path();
    var tmp = TextRange_1(start, end);
    findParagraphsByRange(this.paragraphInfoList_1, tmp, MultiParagraph$getPathForRange$lambda(path, start, end));
    return path;
  };
  protoOf(MultiParagraph).getLineForVerticalPosition_lon9k6_k$ = function (vertical) {
    var paragraphIndex = findParagraphByY(this.paragraphInfoList_1, vertical);
    // Inline function 'kotlin.with' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    var tmp;
    if ($this$with.get_length_g42xv3_k$() === 0) {
      tmp = $this$with.startLineIndex_1;
    } else {
      tmp = $this$with.toGlobalLineIndex_e3lmay_k$($this$with.paragraph_1.getLineForVerticalPosition_lon9k6_k$($this$with.toLocalYPosition_dpfuyg_k$(vertical)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).getOffsetForPosition_12t0zj_k$ = function (position) {
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _Offset___get_packedValue__impl__xh2k8q(position);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$3 = floatFromBits(bits);
    var paragraphIndex = findParagraphByY(this.paragraphInfoList_1, tmp$ret$3);
    // Inline function 'kotlin.with' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    var tmp;
    if ($this$with.get_length_g42xv3_k$() === 0) {
      tmp = $this$with.startIndex_1;
    } else {
      tmp = $this$with.toGlobalIndex_3l3mdy_k$($this$with.paragraph_1.getOffsetForPosition_12t0zj_k$($this$with.toLocal_4j1wri_k$(position)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).getRangeForRect_jmhhks_k$ = function (rect, granularity, inclusionStrategy) {
    var firstParagraph = findParagraphByY(this.paragraphInfoList_1, rect.get_top_18ivbo_k$());
    if (this.paragraphInfoList_1.get_c1px32_k$(firstParagraph).bottom_1 >= rect.get_bottom_bj8ras_k$() || firstParagraph === get_lastIndex(this.paragraphInfoList_1)) {
      // Inline function 'kotlin.with' call
      var $this$with = this.paragraphInfoList_1.get_c1px32_k$(firstParagraph);
      return $this$with.toGlobal$default_8sytw4_k$($this$with.paragraph_1.getRangeForRect_jmhhks_k$($this$with.toLocal_bzsu9x_k$(rect), granularity, inclusionStrategy));
    }
    var lastParagraph = findParagraphByY(this.paragraphInfoList_1, rect.get_bottom_bj8ras_k$());
    var startRange = Companion_getInstance_24().get_Zero_8je9ih_k$();
    while (equals(startRange, Companion_getInstance_24().get_Zero_8je9ih_k$()) && firstParagraph <= lastParagraph) {
      // Inline function 'kotlin.with' call
      var $this$with_0 = this.paragraphInfoList_1.get_c1px32_k$(firstParagraph);
      startRange = $this$with_0.toGlobal$default_8sytw4_k$($this$with_0.paragraph_1.getRangeForRect_jmhhks_k$($this$with_0.toLocal_bzsu9x_k$(rect), granularity, inclusionStrategy));
      firstParagraph = firstParagraph + 1 | 0;
    }
    if (equals(startRange, Companion_getInstance_24().get_Zero_8je9ih_k$())) {
      return Companion_getInstance_24().get_Zero_8je9ih_k$();
    }
    var endRange = Companion_getInstance_24().get_Zero_8je9ih_k$();
    while (equals(endRange, Companion_getInstance_24().get_Zero_8je9ih_k$()) && firstParagraph <= lastParagraph) {
      // Inline function 'kotlin.with' call
      var $this$with_1 = this.paragraphInfoList_1.get_c1px32_k$(lastParagraph);
      endRange = $this$with_1.toGlobal$default_8sytw4_k$($this$with_1.paragraph_1.getRangeForRect_jmhhks_k$($this$with_1.toLocal_bzsu9x_k$(rect), granularity, inclusionStrategy));
      lastParagraph = lastParagraph - 1 | 0;
    }
    if (equals(endRange, Companion_getInstance_24().get_Zero_8je9ih_k$()))
      return startRange;
    return TextRange_1(_TextRange___get_start__impl__ww4t90(startRange), _TextRange___get_end__impl__gcdxpp(endRange));
  };
  protoOf(MultiParagraph).getBoundingBox_xfho9l_k$ = function (offset) {
    requireIndexInRange(this, offset);
    var paragraphIndex = findParagraphByIndex(this.paragraphInfoList_1, offset);
    // Inline function 'kotlin.with' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.toGlobal_ggfqs3_k$($this$with.paragraph_1.getBoundingBox_xfho9l_k$($this$with.toLocalIndex_j164i0_k$(offset)));
  };
  protoOf(MultiParagraph).fillBoundingBoxes_4pg9io_k$ = function (range, array, arrayStart) {
    requireIndexInRange(this, _TextRange___get_min__impl__uu95c4(range));
    requireIndexInRangeInclusiveEnd(this, _TextRange___get_max__impl__owm8m(range));
    var currentArrayStart = {_v: arrayStart};
    var currentHeight = {_v: 0.0};
    findParagraphsByRange(this.paragraphInfoList_1, range, MultiParagraph$fillBoundingBoxes$lambda(range, array, currentArrayStart, currentHeight));
    return array;
  };
  protoOf(MultiParagraph).getHorizontalPosition_9mx7bk_k$ = function (offset, usePrimaryDirection) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).get_length_g42xv3_k$()) {
      tmp = get_lastIndex(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.paragraph_1.getHorizontalPosition_9mx7bk_k$($this$with.toLocalIndex_j164i0_k$(offset), usePrimaryDirection);
  };
  protoOf(MultiParagraph).getParagraphDirection_qweb73_k$ = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).get_length_g42xv3_k$()) {
      tmp = get_lastIndex(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.paragraph_1.getParagraphDirection_qweb73_k$($this$with.toLocalIndex_j164i0_k$(offset));
  };
  protoOf(MultiParagraph).getBidiRunDirection_c67d8i_k$ = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).get_length_g42xv3_k$()) {
      tmp = get_lastIndex(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.paragraph_1.getBidiRunDirection_c67d8i_k$($this$with.toLocalIndex_j164i0_k$(offset));
  };
  protoOf(MultiParagraph).getWordBoundary_s8pru_k$ = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).get_length_g42xv3_k$()) {
      tmp = get_lastIndex(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.toGlobal_co5571_k$($this$with.paragraph_1.getWordBoundary_s8pru_k$($this$with.toLocalIndex_j164i0_k$(offset)), false);
  };
  protoOf(MultiParagraph).getCursorRect_gdluko_k$ = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).get_length_g42xv3_k$()) {
      tmp = get_lastIndex(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.toGlobal_ggfqs3_k$($this$with.paragraph_1.getCursorRect_gdluko_k$($this$with.toLocalIndex_j164i0_k$(offset)));
  };
  protoOf(MultiParagraph).getLineForOffset_jakwx2_k$ = function (offset) {
    var tmp;
    if (offset >= _get_annotatedString__kqljtk(this).get_length_g42xv3_k$()) {
      tmp = get_lastIndex(this.paragraphInfoList_1);
    } else if (offset < 0) {
      tmp = 0;
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.toGlobalLineIndex_e3lmay_k$($this$with.paragraph_1.getLineForOffset_jakwx2_k$($this$with.toLocalIndex_j164i0_k$(offset)));
  };
  protoOf(MultiParagraph).getLineLeft_799m07_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.paragraph_1.getLineLeft_799m07_k$($this$with.toLocalLineIndex_nunoc_k$(lineIndex));
  };
  protoOf(MultiParagraph).getLineRight_j8rtqe_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.paragraph_1.getLineRight_j8rtqe_k$($this$with.toLocalLineIndex_nunoc_k$(lineIndex));
  };
  protoOf(MultiParagraph).getLineTop_q0a6r_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.toGlobalYPosition_9oxm7u_k$($this$with.paragraph_1.getLineTop_q0a6r_k$($this$with.toLocalLineIndex_nunoc_k$(lineIndex)));
  };
  protoOf(MultiParagraph).getLineBaseline_ps5fhl_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.toGlobalYPosition_9oxm7u_k$($this$with.paragraph_1.getLineBaseline_ps5fhl_k$($this$with.toLocalLineIndex_nunoc_k$(lineIndex)));
  };
  protoOf(MultiParagraph).getLineBottom_yhu6bn_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.toGlobalYPosition_9oxm7u_k$($this$with.paragraph_1.getLineBottom_yhu6bn_k$($this$with.toLocalLineIndex_nunoc_k$(lineIndex)));
  };
  protoOf(MultiParagraph).getLineHeight_hm3g1l_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.paragraph_1.getLineHeight_hm3g1l_k$($this$with.toLocalLineIndex_nunoc_k$(lineIndex));
  };
  protoOf(MultiParagraph).getLineWidth_vd5x7g_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.paragraph_1.getLineWidth_vd5x7g_k$($this$with.toLocalLineIndex_nunoc_k$(lineIndex));
  };
  protoOf(MultiParagraph).getLineStart_clke9s_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.toGlobalIndex_3l3mdy_k$($this$with.paragraph_1.getLineStart_clke9s_k$($this$with.toLocalLineIndex_nunoc_k$(lineIndex)));
  };
  protoOf(MultiParagraph).getLineEnd_o6geci_k$ = function (lineIndex, visibleEnd) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.toGlobalIndex_3l3mdy_k$($this$with.paragraph_1.getLineEnd_o6geci_k$($this$with.toLocalLineIndex_nunoc_k$(lineIndex), visibleEnd));
  };
  protoOf(MultiParagraph).getLineEnd$default_uw5hk_k$ = function (lineIndex, visibleEnd, $super) {
    visibleEnd = visibleEnd === VOID ? false : visibleEnd;
    return $super === VOID ? this.getLineEnd_o6geci_k$(lineIndex, visibleEnd) : $super.getLineEnd_o6geci_k$.call(this, lineIndex, visibleEnd);
  };
  protoOf(MultiParagraph).isLineEllipsized_1fausj_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    return this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex).paragraph_1.isLineEllipsized_1fausj_k$(lineIndex);
  };
  function ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    startLineIndex = startLineIndex === VOID ? -1 : startLineIndex;
    endLineIndex = endLineIndex === VOID ? -1 : endLineIndex;
    top = top === VOID ? -1.0 : top;
    bottom = bottom === VOID ? -1.0 : bottom;
    this.paragraph_1 = paragraph;
    this.startIndex_1 = startIndex;
    this.endIndex_1 = endIndex;
    this.startLineIndex_1 = startLineIndex;
    this.endLineIndex_1 = endLineIndex;
    this.top_1 = top;
    this.bottom_1 = bottom;
  }
  protoOf(ParagraphInfo).get_paragraph_ua17wb_k$ = function () {
    return this.paragraph_1;
  };
  protoOf(ParagraphInfo).get_startIndex_oi1lp5_k$ = function () {
    return this.startIndex_1;
  };
  protoOf(ParagraphInfo).get_endIndex_3lslfk_k$ = function () {
    return this.endIndex_1;
  };
  protoOf(ParagraphInfo).set_startLineIndex_c38bz_k$ = function (_set____db54di) {
    this.startLineIndex_1 = _set____db54di;
  };
  protoOf(ParagraphInfo).get_startLineIndex_2jj8jf_k$ = function () {
    return this.startLineIndex_1;
  };
  protoOf(ParagraphInfo).set_endLineIndex_rmrqco_k$ = function (_set____db54di) {
    this.endLineIndex_1 = _set____db54di;
  };
  protoOf(ParagraphInfo).get_endLineIndex_wassus_k$ = function () {
    return this.endLineIndex_1;
  };
  protoOf(ParagraphInfo).set_top_q4a9n4_k$ = function (_set____db54di) {
    this.top_1 = _set____db54di;
  };
  protoOf(ParagraphInfo).get_top_18ivbo_k$ = function () {
    return this.top_1;
  };
  protoOf(ParagraphInfo).set_bottom_hrdqf4_k$ = function (_set____db54di) {
    this.bottom_1 = _set____db54di;
  };
  protoOf(ParagraphInfo).get_bottom_bj8ras_k$ = function () {
    return this.bottom_1;
  };
  protoOf(ParagraphInfo).get_length_g42xv3_k$ = function () {
    return this.endIndex_1 - this.startIndex_1 | 0;
  };
  protoOf(ParagraphInfo).toLocalIndex_j164i0_k$ = function (_this__u8e3s4) {
    return coerceIn(_this__u8e3s4, this.startIndex_1, this.endIndex_1) - this.startIndex_1 | 0;
  };
  protoOf(ParagraphInfo).toGlobalIndex_3l3mdy_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.startIndex_1 | 0;
  };
  protoOf(ParagraphInfo).toLocalLineIndex_nunoc_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.startLineIndex_1 | 0;
  };
  protoOf(ParagraphInfo).toGlobalLineIndex_e3lmay_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.startLineIndex_1 | 0;
  };
  protoOf(ParagraphInfo).toGlobalYPosition_9oxm7u_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.top_1;
  };
  protoOf(ParagraphInfo).toLocalYPosition_dpfuyg_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.top_1;
  };
  protoOf(ParagraphInfo).toLocal_4j1wri_k$ = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) - this.top_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$8 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$8);
  };
  protoOf(ParagraphInfo).toGlobal_ggfqs3_k$ = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.top_1;
    var v1 = fromInt(toRawBits(0.0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$1 = _Offset___init__impl__c168vi(tmp$ret$0);
    return _this__u8e3s4.translate_e972jg_k$(tmp$ret$1);
  };
  protoOf(ParagraphInfo).toLocal_bzsu9x_k$ = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = -this.top_1;
    var v1 = fromInt(toRawBits(0.0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$1 = _Offset___init__impl__c168vi(tmp$ret$0);
    return _this__u8e3s4.translate_e972jg_k$(tmp$ret$1);
  };
  protoOf(ParagraphInfo).toGlobal_315jad_k$ = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.top_1;
    var v1 = fromInt(toRawBits(0.0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$1 = _Offset___init__impl__c168vi(tmp$ret$0);
    _this__u8e3s4.translate_nzlwb0_k$(tmp$ret$1);
    return _this__u8e3s4;
  };
  protoOf(ParagraphInfo).toGlobal_co5571_k$ = function (_this__u8e3s4, treatZeroAsNull) {
    if (treatZeroAsNull && equals(_this__u8e3s4, Companion_getInstance_24().get_Zero_8je9ih_k$())) {
      return Companion_getInstance_24().get_Zero_8je9ih_k$();
    }
    return TextRange_1(this.toGlobalIndex_3l3mdy_k$(_TextRange___get_start__impl__ww4t90(_this__u8e3s4)), this.toGlobalIndex_3l3mdy_k$(_TextRange___get_end__impl__gcdxpp(_this__u8e3s4)));
  };
  protoOf(ParagraphInfo).toGlobal$default_8sytw4_k$ = function (_this__u8e3s4, treatZeroAsNull, $super) {
    treatZeroAsNull = treatZeroAsNull === VOID ? true : treatZeroAsNull;
    return $super === VOID ? this.toGlobal_co5571_k$(_this__u8e3s4, treatZeroAsNull) : $super.toGlobal_co5571_k$.call(this, new TextRange(_this__u8e3s4), treatZeroAsNull).packedValue_1;
  };
  protoOf(ParagraphInfo).component1_7eebsc_k$ = function () {
    return this.paragraph_1;
  };
  protoOf(ParagraphInfo).component2_7eebsb_k$ = function () {
    return this.startIndex_1;
  };
  protoOf(ParagraphInfo).component3_7eebsa_k$ = function () {
    return this.endIndex_1;
  };
  protoOf(ParagraphInfo).component4_7eebs9_k$ = function () {
    return this.startLineIndex_1;
  };
  protoOf(ParagraphInfo).component5_7eebs8_k$ = function () {
    return this.endLineIndex_1;
  };
  protoOf(ParagraphInfo).component6_7eebs7_k$ = function () {
    return this.top_1;
  };
  protoOf(ParagraphInfo).component7_7eebs6_k$ = function () {
    return this.bottom_1;
  };
  protoOf(ParagraphInfo).copy_dj5vo5_k$ = function (paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    return new ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom);
  };
  protoOf(ParagraphInfo).copy$default_s77fby_k$ = function (paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom, $super) {
    paragraph = paragraph === VOID ? this.paragraph_1 : paragraph;
    startIndex = startIndex === VOID ? this.startIndex_1 : startIndex;
    endIndex = endIndex === VOID ? this.endIndex_1 : endIndex;
    startLineIndex = startLineIndex === VOID ? this.startLineIndex_1 : startLineIndex;
    endLineIndex = endLineIndex === VOID ? this.endLineIndex_1 : endLineIndex;
    top = top === VOID ? this.top_1 : top;
    bottom = bottom === VOID ? this.bottom_1 : bottom;
    return $super === VOID ? this.copy_dj5vo5_k$(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) : $super.copy_dj5vo5_k$.call(this, paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom);
  };
  protoOf(ParagraphInfo).toString = function () {
    return 'ParagraphInfo(paragraph=' + toString_0(this.paragraph_1) + ', startIndex=' + this.startIndex_1 + ', endIndex=' + this.endIndex_1 + ', startLineIndex=' + this.startLineIndex_1 + ', endLineIndex=' + this.endLineIndex_1 + ', top=' + this.top_1 + ', bottom=' + this.bottom_1 + ')';
  };
  protoOf(ParagraphInfo).hashCode = function () {
    var result = hashCode(this.paragraph_1);
    result = imul(result, 31) + this.startIndex_1 | 0;
    result = imul(result, 31) + this.endIndex_1 | 0;
    result = imul(result, 31) + this.startLineIndex_1 | 0;
    result = imul(result, 31) + this.endLineIndex_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.top_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.bottom_1) | 0;
    return result;
  };
  protoOf(ParagraphInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphInfo ? other : THROW_CCE();
    if (!equals(this.paragraph_1, tmp0_other_with_cast.paragraph_1))
      return false;
    if (!(this.startIndex_1 === tmp0_other_with_cast.startIndex_1))
      return false;
    if (!(this.endIndex_1 === tmp0_other_with_cast.endIndex_1))
      return false;
    if (!(this.startLineIndex_1 === tmp0_other_with_cast.startLineIndex_1))
      return false;
    if (!(this.endLineIndex_1 === tmp0_other_with_cast.endLineIndex_1))
      return false;
    if (!equals(this.top_1, tmp0_other_with_cast.top_1))
      return false;
    if (!equals(this.bottom_1, tmp0_other_with_cast.bottom_1))
      return false;
    return true;
  };
  function findParagraphsByRange(paragraphInfoList, range, action) {
    var paragraphIndex = findParagraphByIndex(paragraphInfoList, _TextRange___get_min__impl__uu95c4(range));
    var inductionVariable = paragraphIndex;
    var last = paragraphInfoList.get_size_woubt6_k$();
    if (inductionVariable < last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraph = paragraphInfoList.get_c1px32_k$(i);
        if (paragraph.startIndex_1 >= _TextRange___get_max__impl__owm8m(range))
          break $l$loop_0;
        if (paragraph.startIndex_1 === paragraph.endIndex_1)
          continue $l$loop_0;
        action(paragraph);
      }
       while (inductionVariable < last);
  }
  function findParagraphByY(paragraphInfoList, y) {
    if (y <= 0)
      return 0;
    if (y >= last(paragraphInfoList).bottom_1)
      return get_lastIndex(paragraphInfoList);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.get_size_woubt6_k$() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.get_c1px32_k$(mid);
        var cmp = midVal.top_1 > y ? 1 : midVal.bottom_1 <= y ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function findParagraphByIndex(paragraphInfoList, index) {
    var lastLineEnd = last(paragraphInfoList).endIndex_1;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(index <= last(paragraphInfoList).endIndex_1)) {
      var tmp$ret$0 = 'Index ' + index + " should be less or equal than last line's end " + lastLineEnd;
      throwIllegalArgumentException(tmp$ret$0);
    }
    var tmp$ret$3;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.get_size_woubt6_k$() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.get_c1px32_k$(mid);
        var cmp = midVal.startIndex_1 > index ? 1 : midVal.endIndex_1 <= index ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$3 = mid;
          break $l$block;
        }
      }
      tmp$ret$3 = -(low + 1 | 0) | 0;
    }
    var paragraphIndex = tmp$ret$3;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= paragraphIndex ? paragraphIndex <= (paragraphInfoList.get_size_woubt6_k$() - 1 | 0) : false)) {
      var tmp = 'Found paragraph index ' + paragraphIndex + ' should be in range [0, ' + paragraphInfoList.get_size_woubt6_k$() + ').\n';
      var tmp$ret$4 = tmp + ('Debug info: index=' + index + ', paragraphs=[' + fastJoinToString(paragraphInfoList, VOID, VOID, VOID, VOID, VOID, findParagraphByIndex$lambda) + ']');
      throwIllegalArgumentException(tmp$ret$4);
    }
    return paragraphIndex;
  }
  function findParagraphByLineIndex(paragraphInfoList, lineIndex) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.get_size_woubt6_k$() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.get_c1px32_k$(mid);
        var cmp = midVal.startLineIndex_1 > lineIndex ? 1 : midVal.endLineIndex_1 <= lineIndex ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function fastBinarySearch(_this__u8e3s4, comparison) {
    var low = 0;
    var high = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.get_c1px32_k$(mid);
      var cmp = comparison(midVal);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function findParagraphByIndex$lambda(it) {
    return '[' + it.startIndex_1 + ', ' + it.endIndex_1 + ')';
  }
  var androidx_compose_ui_text_MultiParagraphIntrinsics$stable;
  var androidx_compose_ui_text_ParagraphIntrinsicInfo$stable;
  function MultiParagraphIntrinsics_init_$Init$(annotatedString, style, placeholders, density, resourceLoader, $this) {
    MultiParagraphIntrinsics.call($this, annotatedString, style, placeholders, density, createFontFamilyResolver(resourceLoader));
    return $this;
  }
  function MultiParagraphIntrinsics_init_$Create$(annotatedString, style, placeholders, density, resourceLoader) {
    return MultiParagraphIntrinsics_init_$Init$(annotatedString, style, placeholders, density, resourceLoader, objectCreate(protoOf(MultiParagraphIntrinsics)));
  }
  function resolveTextDirection($this, style, defaultStyle) {
    return !(style.get_textDirection_h0bug3_k$() === Companion_getInstance_53().get_Unspecified_8uxrb6_k$()) ? style : style.copy$default_g04vyq_k$(VOID, defaultStyle.get_textDirection_h0bug3_k$());
  }
  function MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp0 = this$0.infoList_1;
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        if (tmp0.isEmpty_y1axqb_k$()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0.get_c1px32_k$(0);
        var maxValue = maxElem.intrinsics_1.get_minIntrinsicWidth_lmc1rq_k$();
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0.get_c1px32_k$(i);
            var v = e.intrinsics_1.get_minIntrinsicWidth_lmc1rq_k$();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.intrinsics_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_minIntrinsicWidth_lmc1rq_k$();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$_get_minIntrinsicWidth_$ref_bvjwng() {
    return function (p0) {
      return p0.get_minIntrinsicWidth_lmc1rq_k$();
    };
  }
  function MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp0 = this$0.infoList_1;
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        if (tmp0.isEmpty_y1axqb_k$()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0.get_c1px32_k$(0);
        var maxValue = maxElem.intrinsics_1.get_maxIntrinsicWidth_b4gk2k_k$();
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0.get_c1px32_k$(i);
            var v = e.intrinsics_1.get_maxIntrinsicWidth_b4gk2k_k$();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.intrinsics_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_maxIntrinsicWidth_b4gk2k_k$();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$_get_maxIntrinsicWidth_$ref_co14jq() {
    return function (p0) {
      return p0.get_maxIntrinsicWidth_b4gk2k_k$();
    };
  }
  function MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver) {
    this.annotatedString_1 = annotatedString;
    this.placeholders_1 = placeholders;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.minIntrinsicWidth$delegate_1 = lazy(tmp_0, MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.maxIntrinsicWidth$delegate_1 = lazy(tmp_2, MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this));
    var paragraphStyle = style.toParagraphStyle_zfuegy_k$();
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle' call
    var this_0 = this.annotatedString_1;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_1 = normalizedParagraphStyles(this_0, paragraphStyle);
    var target = ArrayList_init_$Create$_0(this_1.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_1.get_c1px32_k$(index);
        var annotatedString_0 = access$substringWithoutParagraphStyles$tAnnotatedStringKt(this_0, item.get_start_iypx6h_k$(), item.get_end_18j6ha_k$());
        var currentParagraphStyle = resolveTextDirection(this, item.get_item_woo5lo_k$(), paragraphStyle);
        var tmp1_text = annotatedString_0.get_text_wouvsm_k$();
        var tmp2_style = style.merge_t28ajk_k$(currentParagraphStyle);
        var tmp0_elvis_lhs = annotatedString_0.get_annotations_s6zo16_k$();
        var tmp3_annotations = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
        var tmp4_placeholders = getLocalPlaceholders(this.placeholders_1, item.get_start_iypx6h_k$(), item.get_end_18j6ha_k$());
        // Inline function 'kotlin.collections.plusAssign' call
        var element = new ParagraphIntrinsicInfo(ParagraphIntrinsics_0(tmp1_text, tmp2_style, tmp3_annotations, density, fontFamilyResolver, tmp4_placeholders), item.get_start_iypx6h_k$(), item.get_end_18j6ha_k$());
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    tmp_3.infoList_1 = target;
  }
  protoOf(MultiParagraphIntrinsics).get_annotatedString_5pdwrk_k$ = function () {
    return this.annotatedString_1;
  };
  protoOf(MultiParagraphIntrinsics).get_placeholders_r4ppyh_k$ = function () {
    return this.placeholders_1;
  };
  protoOf(MultiParagraphIntrinsics).get_minIntrinsicWidth_lmc1rq_k$ = function () {
    var tmp0 = this.minIntrinsicWidth$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('minIntrinsicWidth', 1, tmp, MultiParagraphIntrinsics$_get_minIntrinsicWidth_$ref_bvjwng(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(MultiParagraphIntrinsics).get_maxIntrinsicWidth_b4gk2k_k$ = function () {
    var tmp0 = this.maxIntrinsicWidth$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('maxIntrinsicWidth', 1, tmp, MultiParagraphIntrinsics$_get_maxIntrinsicWidth_$ref_co14jq(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(MultiParagraphIntrinsics).get_infoList_d6uw6o_k$ = function () {
    return this.infoList_1;
  };
  protoOf(MultiParagraphIntrinsics).get_hasStaleResolvedFonts_tun9ic_k$ = function () {
    var tmp0 = this.infoList_1;
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
          if (item.intrinsics_1.get_hasStaleResolvedFonts_tun9ic_k$()) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  };
  function ParagraphIntrinsicInfo(intrinsics, startIndex, endIndex) {
    this.intrinsics_1 = intrinsics;
    this.startIndex_1 = startIndex;
    this.endIndex_1 = endIndex;
  }
  protoOf(ParagraphIntrinsicInfo).get_intrinsics_1zqd0p_k$ = function () {
    return this.intrinsics_1;
  };
  protoOf(ParagraphIntrinsicInfo).get_startIndex_oi1lp5_k$ = function () {
    return this.startIndex_1;
  };
  protoOf(ParagraphIntrinsicInfo).get_endIndex_3lslfk_k$ = function () {
    return this.endIndex_1;
  };
  protoOf(ParagraphIntrinsicInfo).component1_7eebsc_k$ = function () {
    return this.intrinsics_1;
  };
  protoOf(ParagraphIntrinsicInfo).component2_7eebsb_k$ = function () {
    return this.startIndex_1;
  };
  protoOf(ParagraphIntrinsicInfo).component3_7eebsa_k$ = function () {
    return this.endIndex_1;
  };
  protoOf(ParagraphIntrinsicInfo).copy_1myg2h_k$ = function (intrinsics, startIndex, endIndex) {
    return new ParagraphIntrinsicInfo(intrinsics, startIndex, endIndex);
  };
  protoOf(ParagraphIntrinsicInfo).copy$default_6sahs3_k$ = function (intrinsics, startIndex, endIndex, $super) {
    intrinsics = intrinsics === VOID ? this.intrinsics_1 : intrinsics;
    startIndex = startIndex === VOID ? this.startIndex_1 : startIndex;
    endIndex = endIndex === VOID ? this.endIndex_1 : endIndex;
    return $super === VOID ? this.copy_1myg2h_k$(intrinsics, startIndex, endIndex) : $super.copy_1myg2h_k$.call(this, intrinsics, startIndex, endIndex);
  };
  protoOf(ParagraphIntrinsicInfo).toString = function () {
    return 'ParagraphIntrinsicInfo(intrinsics=' + toString_0(this.intrinsics_1) + ', startIndex=' + this.startIndex_1 + ', endIndex=' + this.endIndex_1 + ')';
  };
  protoOf(ParagraphIntrinsicInfo).hashCode = function () {
    var result = hashCode(this.intrinsics_1);
    result = imul(result, 31) + this.startIndex_1 | 0;
    result = imul(result, 31) + this.endIndex_1 | 0;
    return result;
  };
  protoOf(ParagraphIntrinsicInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphIntrinsicInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphIntrinsicInfo ? other : THROW_CCE();
    if (!equals(this.intrinsics_1, tmp0_other_with_cast.intrinsics_1))
      return false;
    if (!(this.startIndex_1 === tmp0_other_with_cast.startIndex_1))
      return false;
    if (!(this.endIndex_1 === tmp0_other_with_cast.endIndex_1))
      return false;
    return true;
  };
  function getLocalPlaceholders(_this__u8e3s4, start, end) {
    // Inline function 'androidx.compose.ui.util.fastFilteredMap' call
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        if (intersect(start, end, item.get_start_iypx6h_k$(), item.get_end_18j6ha_k$())) {
          // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
          if (!(start <= item.get_start_iypx6h_k$() && item.get_end_18j6ha_k$() <= end)) {
            var tmp$ret$1 = 'placeholder can not overlap with paragraph.';
            throwIllegalArgumentException(tmp$ret$1);
          }
          // Inline function 'kotlin.collections.plusAssign' call
          var element = Range_init_$Create$(item.get_item_woo5lo_k$(), item.get_start_iypx6h_k$() - start | 0, item.get_end_18j6ha_k$() - start | 0);
          target.add_utx5q5_k$(element);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function Paragraph(text, style, constraints, density, fontFamilyResolver, spanStyles, placeholders, maxLines, overflow) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = placeholders;
    }
    placeholders = tmp_0;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    overflow = overflow === VOID ? Companion_getInstance_57().get_Clip_ypf2ge_k$() : overflow;
    return ActualParagraph(text, style, spanStyles, placeholders, maxLines, overflow, constraints, density, fontFamilyResolver);
  }
  function Paragraph_0(paragraphIntrinsics, constraints, maxLines, overflow) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    overflow = overflow === VOID ? Companion_getInstance_57().get_Clip_ypf2ge_k$() : overflow;
    return ActualParagraph_0(paragraphIntrinsics, maxLines, overflow, constraints);
  }
  function ceilToInt(_this__u8e3s4) {
    // Inline function 'kotlin.math.ceil' call
    var tmp$ret$0 = Math.ceil(_this__u8e3s4);
    return numberToInt(tmp$ret$0);
  }
  function ParagraphIntrinsics() {
  }
  function ParagraphIntrinsics_0(text, style, annotations, density, fontFamilyResolver, placeholders) {
    var tmp;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = placeholders;
    }
    placeholders = tmp;
    return ActualParagraphIntrinsics(text, style, annotations, placeholders, density, fontFamilyResolver);
  }
  function get_DefaultLineHeight() {
    _init_properties_ParagraphStyle_kt__lbx7er();
    return DefaultLineHeight;
  }
  var DefaultLineHeight;
  var androidx_compose_ui_text_ParagraphStyle$stable;
  function ParagraphStyle_init_$Init$(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $this) {
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp;
    var tmp_0 = textAlign;
    if ((tmp_0 == null ? null : new TextAlign(tmp_0)) == null) {
      tmp = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp = textAlign;
    }
    var tmp_1 = tmp;
    var tmp_2;
    var tmp_3 = textDirection;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_2 = textDirection;
    }
    var tmp_4 = tmp_2;
    var tmp_5;
    var tmp_6 = lineBreak;
    if ((tmp_6 == null ? null : new LineBreak(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_63().get_Unspecified_afm6zt_k$();
    } else {
      tmp_5 = lineBreak;
    }
    var tmp_7 = tmp_5;
    var tmp_8;
    var tmp_9 = hyphens;
    if ((tmp_9 == null ? null : new Hyphens(tmp_9)) == null) {
      tmp_8 = Companion_getInstance_46().get_Unspecified_43rcur_k$();
    } else {
      tmp_8 = hyphens;
    }
    ParagraphStyle_0.call($this, tmp_1, tmp_4, lineHeight, textIndent, platformStyle, lineHeightStyle, tmp_7, tmp_8, textMotion);
    return $this;
  }
  function ParagraphStyle_init_$Create$(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return ParagraphStyle_init_$Init$(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, objectCreate(protoOf(ParagraphStyle_0)));
  }
  function ParagraphStyle_init_$Init$_0(textAlign, textDirection, lineHeight, textIndent, $this) {
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    var tmp;
    var tmp_0 = textAlign;
    if ((tmp_0 == null ? null : new TextAlign(tmp_0)) == null) {
      tmp = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp = textAlign;
    }
    var tmp_1 = tmp;
    var tmp_2;
    var tmp_3 = textDirection;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_2 = textDirection;
    }
    ParagraphStyle_0.call($this, tmp_1, tmp_2, lineHeight, textIndent, null, null, Companion_getInstance_63().get_Unspecified_afm6zt_k$(), Companion_getInstance_46().get_Unspecified_43rcur_k$(), null);
    return $this;
  }
  function ParagraphStyle_init_$Create$_0(textAlign, textDirection, lineHeight, textIndent) {
    return ParagraphStyle_init_$Init$_0(textAlign, textDirection, lineHeight, textIndent, objectCreate(protoOf(ParagraphStyle_0)));
  }
  function ParagraphStyle_init_$Init$_1(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $this) {
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    var tmp;
    var tmp_0 = textAlign;
    if ((tmp_0 == null ? null : new TextAlign(tmp_0)) == null) {
      tmp = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp = textAlign;
    }
    var tmp_1 = tmp;
    var tmp_2;
    var tmp_3 = textDirection;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_2 = textDirection;
    }
    ParagraphStyle_0.call($this, tmp_1, tmp_2, lineHeight, textIndent, platformStyle, lineHeightStyle, Companion_getInstance_63().get_Unspecified_afm6zt_k$(), Companion_getInstance_46().get_Unspecified_43rcur_k$(), null);
    return $this;
  }
  function ParagraphStyle_init_$Create$_1(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle) {
    return ParagraphStyle_init_$Init$_1(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, objectCreate(protoOf(ParagraphStyle_0)));
  }
  function ParagraphStyle_init_$Init$_2(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $this) {
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    var tmp;
    var tmp_0 = textAlign;
    if ((tmp_0 == null ? null : new TextAlign(tmp_0)) == null) {
      tmp = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp = textAlign;
    }
    var tmp_1 = tmp;
    var tmp_2;
    var tmp_3 = textDirection;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_2 = textDirection;
    }
    var tmp_4 = tmp_2;
    var tmp_5;
    var tmp_6 = lineBreak;
    if ((tmp_6 == null ? null : new LineBreak(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_63().get_Unspecified_afm6zt_k$();
    } else {
      tmp_5 = lineBreak;
    }
    var tmp_7 = tmp_5;
    var tmp_8;
    var tmp_9 = hyphens;
    if ((tmp_9 == null ? null : new Hyphens(tmp_9)) == null) {
      tmp_8 = Companion_getInstance_46().get_Unspecified_43rcur_k$();
    } else {
      tmp_8 = hyphens;
    }
    ParagraphStyle_0.call($this, tmp_1, tmp_4, lineHeight, textIndent, platformStyle, lineHeightStyle, tmp_7, tmp_8, null);
    return $this;
  }
  function ParagraphStyle_init_$Create$_2(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    return ParagraphStyle_init_$Init$_2(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, objectCreate(protoOf(ParagraphStyle_0)));
  }
  function ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    textAlign = textAlign === VOID ? Companion_getInstance_51().get_Unspecified_23bj44_k$() : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_53().get_Unspecified_8uxrb6_k$() : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_63().get_Unspecified_afm6zt_k$() : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_46().get_Unspecified_43rcur_k$() : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    this.textAlign_1 = textAlign;
    this.textDirection_1 = textDirection;
    this.lineHeight_1 = lineHeight;
    this.textIndent_1 = textIndent;
    this.platformStyle_1 = platformStyle;
    this.lineHeightStyle_1 = lineHeightStyle;
    this.lineBreak_1 = lineBreak;
    this.hyphens_1 = hyphens;
    this.textMotion_1 = textMotion;
    if (!equals(this.lineHeight_1, Companion_getInstance_2().get_Unspecified_r048kw_k$())) {
      // Inline function 'androidx.compose.ui.text.internal.checkPrecondition' call
      if (!(_TextUnit___get_value__impl__hpbx0k(this.lineHeight_1) >= 0.0)) {
        var tmp$ret$0 = "lineHeight can't be negative (" + _TextUnit___get_value__impl__hpbx0k(this.lineHeight_1) + ')';
        throwIllegalStateException(tmp$ret$0);
      }
    }
  }
  protoOf(ParagraphStyle_0).get_textAlign_fnegkd_k$ = function () {
    return this.textAlign_1;
  };
  protoOf(ParagraphStyle_0).get_textDirection_h0bug3_k$ = function () {
    return this.textDirection_1;
  };
  protoOf(ParagraphStyle_0).get_lineHeight_3vvefu_k$ = function () {
    return this.lineHeight_1;
  };
  protoOf(ParagraphStyle_0).get_textIndent_5mau2q_k$ = function () {
    return this.textIndent_1;
  };
  protoOf(ParagraphStyle_0).get_platformStyle_7i053p_k$ = function () {
    return this.platformStyle_1;
  };
  protoOf(ParagraphStyle_0).get_lineHeightStyle_fzu4s3_k$ = function () {
    return this.lineHeightStyle_1;
  };
  protoOf(ParagraphStyle_0).get_lineBreak_osjg5f_k$ = function () {
    return this.lineBreak_1;
  };
  protoOf(ParagraphStyle_0).get_hyphens_oe87pf_k$ = function () {
    return this.hyphens_1;
  };
  protoOf(ParagraphStyle_0).get_textMotion_7jbf0s_k$ = function () {
    return this.textMotion_1;
  };
  protoOf(ParagraphStyle_0).get_deprecated_boxing_textAlign_g4gdz4_k$ = function () {
    return this.textAlign_1;
  };
  protoOf(ParagraphStyle_0).get_deprecated_boxing_textDirection_273xmo_k$ = function () {
    return this.textDirection_1;
  };
  protoOf(ParagraphStyle_0).get_deprecated_boxing_hyphens_t3mdr4_k$ = function () {
    return this.hyphens_1;
  };
  protoOf(ParagraphStyle_0).get_deprecated_boxing_lineBreak_u2tun4_k$ = function () {
    return this.lineBreak_1;
  };
  protoOf(ParagraphStyle_0).merge_jfodcj_k$ = function (other) {
    if (other == null)
      return this;
    return fastMerge(this, other.textAlign_1, other.textDirection_1, other.lineHeight_1, other.textIndent_1, other.platformStyle_1, other.lineHeightStyle_1, other.lineBreak_1, other.hyphens_1, other.textMotion_1);
  };
  protoOf(ParagraphStyle_0).merge$default_9kr4ou_k$ = function (other, $super) {
    other = other === VOID ? null : other;
    return $super === VOID ? this.merge_jfodcj_k$(other) : $super.merge_jfodcj_k$.call(this, other);
  };
  protoOf(ParagraphStyle_0).plus_k3ox1a_k$ = function (other) {
    return this.merge_jfodcj_k$(other);
  };
  protoOf(ParagraphStyle_0).copy_tgj1d7_k$ = function (textAlign, textDirection, lineHeight, textIndent) {
    var tmp;
    var tmp_0 = textAlign;
    if ((tmp_0 == null ? null : new TextAlign(tmp_0)) == null) {
      tmp = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp = textAlign;
    }
    var tmp_1 = tmp;
    var tmp_2;
    var tmp_3 = textDirection;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_2 = textDirection;
    }
    return new ParagraphStyle_0(tmp_1, tmp_2, lineHeight, textIndent, this.platformStyle_1, this.lineHeightStyle_1, this.lineBreak_1, this.hyphens_1, this.textMotion_1);
  };
  protoOf(ParagraphStyle_0).copy$default_qwac4j_k$ = function (textAlign, textDirection, lineHeight, textIndent, $super) {
    textAlign = textAlign === VOID ? this.textAlign_1 : textAlign;
    textDirection = textDirection === VOID ? this.textDirection_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.lineHeight_1 : lineHeight;
    textIndent = textIndent === VOID ? this.textIndent_1 : textIndent;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_tgj1d7_k$(textAlign, textDirection, lineHeight, textIndent);
    } else {
      var tmp_0 = $super.copy_tgj1d7_k$;
      var tmp_1 = textAlign;
      var tmp_2 = tmp_1 == null ? null : new TextAlign(tmp_1);
      var tmp_3 = textDirection;
      tmp = tmp_0.call(this, tmp_2, tmp_3 == null ? null : new TextDirection(tmp_3), new TextUnit(lineHeight), textIndent);
    }
    return tmp;
  };
  protoOf(ParagraphStyle_0).copy_kw5uqx_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle) {
    var tmp;
    var tmp_0 = textAlign;
    if ((tmp_0 == null ? null : new TextAlign(tmp_0)) == null) {
      tmp = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp = textAlign;
    }
    var tmp_1 = tmp;
    var tmp_2;
    var tmp_3 = textDirection;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_2 = textDirection;
    }
    return new ParagraphStyle_0(tmp_1, tmp_2, lineHeight, textIndent, platformStyle, lineHeightStyle, this.lineBreak_1, this.hyphens_1, this.textMotion_1);
  };
  protoOf(ParagraphStyle_0).copy$default_qu7tw5_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $super) {
    textAlign = textAlign === VOID ? this.textAlign_1 : textAlign;
    textDirection = textDirection === VOID ? this.textDirection_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.lineHeight_1 : lineHeight;
    textIndent = textIndent === VOID ? this.textIndent_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.lineHeightStyle_1 : lineHeightStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_kw5uqx_k$(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle);
    } else {
      var tmp_0 = $super.copy_kw5uqx_k$;
      var tmp_1 = textAlign;
      var tmp_2 = tmp_1 == null ? null : new TextAlign(tmp_1);
      var tmp_3 = textDirection;
      tmp = tmp_0.call(this, tmp_2, tmp_3 == null ? null : new TextDirection(tmp_3), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle);
    }
    return tmp;
  };
  protoOf(ParagraphStyle_0).copy_9sebpv_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    var tmp;
    var tmp_0 = textAlign;
    if ((tmp_0 == null ? null : new TextAlign(tmp_0)) == null) {
      tmp = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp = textAlign;
    }
    var tmp_1 = tmp;
    var tmp_2;
    var tmp_3 = textDirection;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_2 = textDirection;
    }
    var tmp_4 = tmp_2;
    var tmp_5;
    var tmp_6 = lineBreak;
    if ((tmp_6 == null ? null : new LineBreak(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_63().get_Unspecified_afm6zt_k$();
    } else {
      tmp_5 = lineBreak;
    }
    var tmp_7 = tmp_5;
    var tmp_8;
    var tmp_9 = hyphens;
    if ((tmp_9 == null ? null : new Hyphens(tmp_9)) == null) {
      tmp_8 = Companion_getInstance_46().get_Unspecified_43rcur_k$();
    } else {
      tmp_8 = hyphens;
    }
    return new ParagraphStyle_0(tmp_1, tmp_4, lineHeight, textIndent, platformStyle, lineHeightStyle, tmp_7, tmp_8, this.textMotion_1);
  };
  protoOf(ParagraphStyle_0).copy$default_oyzij3_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $super) {
    textAlign = textAlign === VOID ? this.textAlign_1 : textAlign;
    textDirection = textDirection === VOID ? this.textDirection_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.lineHeight_1 : lineHeight;
    textIndent = textIndent === VOID ? this.textIndent_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.lineHeightStyle_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.lineBreak_1 : lineBreak;
    hyphens = hyphens === VOID ? this.hyphens_1 : hyphens;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_9sebpv_k$(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens);
    } else {
      var tmp_0 = $super.copy_9sebpv_k$;
      var tmp_1 = textAlign;
      var tmp_2 = tmp_1 == null ? null : new TextAlign(tmp_1);
      var tmp_3 = textDirection;
      var tmp_4 = tmp_3 == null ? null : new TextDirection(tmp_3);
      var tmp_5 = lineBreak;
      var tmp_6 = tmp_5 == null ? null : new LineBreak(tmp_5);
      var tmp_7 = hyphens;
      tmp = tmp_0.call(this, tmp_2, tmp_4, new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, tmp_6, tmp_7 == null ? null : new Hyphens(tmp_7));
    }
    return tmp;
  };
  protoOf(ParagraphStyle_0).copy_5ahe65_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp;
    var tmp_0 = textAlign;
    if ((tmp_0 == null ? null : new TextAlign(tmp_0)) == null) {
      tmp = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp = textAlign;
    }
    var tmp_1 = tmp;
    var tmp_2;
    var tmp_3 = textDirection;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_2 = textDirection;
    }
    var tmp_4 = tmp_2;
    var tmp_5;
    var tmp_6 = lineBreak;
    if ((tmp_6 == null ? null : new LineBreak(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_63().get_Unspecified_afm6zt_k$();
    } else {
      tmp_5 = lineBreak;
    }
    var tmp_7 = tmp_5;
    var tmp_8;
    var tmp_9 = hyphens;
    if ((tmp_9 == null ? null : new Hyphens(tmp_9)) == null) {
      tmp_8 = Companion_getInstance_46().get_Unspecified_43rcur_k$();
    } else {
      tmp_8 = hyphens;
    }
    return new ParagraphStyle_0(tmp_1, tmp_4, lineHeight, textIndent, platformStyle, lineHeightStyle, tmp_7, tmp_8, textMotion);
  };
  protoOf(ParagraphStyle_0).copy$default_f2tsfs_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    textAlign = textAlign === VOID ? this.textAlign_1 : textAlign;
    textDirection = textDirection === VOID ? this.textDirection_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.lineHeight_1 : lineHeight;
    textIndent = textIndent === VOID ? this.textIndent_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.lineHeightStyle_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.lineBreak_1 : lineBreak;
    hyphens = hyphens === VOID ? this.hyphens_1 : hyphens;
    textMotion = textMotion === VOID ? this.textMotion_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_5ahe65_k$(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.copy_5ahe65_k$;
      var tmp_1 = textAlign;
      var tmp_2 = tmp_1 == null ? null : new TextAlign(tmp_1);
      var tmp_3 = textDirection;
      var tmp_4 = tmp_3 == null ? null : new TextDirection(tmp_3);
      var tmp_5 = lineBreak;
      var tmp_6 = tmp_5 == null ? null : new LineBreak(tmp_5);
      var tmp_7 = hyphens;
      tmp = tmp_0.call(this, tmp_2, tmp_4, new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, tmp_6, tmp_7 == null ? null : new Hyphens(tmp_7), textMotion);
    }
    return tmp;
  };
  protoOf(ParagraphStyle_0).copy_u4771j_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
  };
  protoOf(ParagraphStyle_0).copy$default_g04vyq_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    textAlign = textAlign === VOID ? this.textAlign_1 : textAlign;
    textDirection = textDirection === VOID ? this.textDirection_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.lineHeight_1 : lineHeight;
    textIndent = textIndent === VOID ? this.textIndent_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.lineHeightStyle_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.lineBreak_1 : lineBreak;
    hyphens = hyphens === VOID ? this.hyphens_1 : hyphens;
    textMotion = textMotion === VOID ? this.textMotion_1 : textMotion;
    return $super === VOID ? this.copy_u4771j_k$(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) : $super.copy_u4771j_k$.call(this, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
  };
  protoOf(ParagraphStyle_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphStyle_0))
      return false;
    if (!(this.textAlign_1 === other.textAlign_1))
      return false;
    if (!(this.textDirection_1 === other.textDirection_1))
      return false;
    if (!equals(this.lineHeight_1, other.lineHeight_1))
      return false;
    if (!equals(this.textIndent_1, other.textIndent_1))
      return false;
    if (!equals(this.platformStyle_1, other.platformStyle_1))
      return false;
    if (!equals(this.lineHeightStyle_1, other.lineHeightStyle_1))
      return false;
    if (!(this.lineBreak_1 === other.lineBreak_1))
      return false;
    if (!(this.hyphens_1 === other.hyphens_1))
      return false;
    if (!equals(this.textMotion_1, other.textMotion_1))
      return false;
    return true;
  };
  protoOf(ParagraphStyle_0).hashCode = function () {
    var result = TextAlign__hashCode_impl_s8g35y(this.textAlign_1);
    result = imul(31, result) + TextDirection__hashCode_impl_g63nwg(this.textDirection_1) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.lineHeight_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.textIndent_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.platformStyle_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.lineHeightStyle_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    result = imul(31, result) + LineBreak__hashCode_impl_ybksn(this.lineBreak_1) | 0;
    result = imul(31, result) + Hyphens__hashCode_impl_yb7t8v(this.hyphens_1) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.textMotion_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    return result;
  };
  protoOf(ParagraphStyle_0).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    this_0.append_22ad7x_k$('ParagraphStyle(');
    this_0.append_22ad7x_k$('textAlign=' + TextAlign__toString_impl_6ha6d3(this.textAlign_1) + ', ');
    this_0.append_22ad7x_k$('textDirection=' + TextDirection__toString_impl_x3uh9t(this.textDirection_1) + ', ');
    this_0.append_22ad7x_k$('lineHeight=' + TextUnit__toString_impl_51ghw0(this.lineHeight_1) + ', ');
    this_0.append_22ad7x_k$('textIndent=' + toString(this.textIndent_1) + ', ');
    this_0.append_22ad7x_k$('platformStyle=' + toString(this.platformStyle_1) + ', ');
    this_0.append_22ad7x_k$('lineHeightStyle=' + toString(this.lineHeightStyle_1) + ', ');
    this_0.append_22ad7x_k$('lineBreak=' + LineBreak__toString_impl_mphhli(this.lineBreak_1) + ', ');
    this_0.append_22ad7x_k$('hyphens=' + Hyphens__toString_impl_ck1wg0(this.hyphens_1) + ', ');
    this_0.append_22ad7x_k$('textMotion=' + toString(this.textMotion_1));
    this_0.append_22ad7x_k$(')');
    return this_0.toString();
  };
  function fastMerge(_this__u8e3s4, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    if (!(textAlign === Companion_getInstance_51().get_Unspecified_23bj44_k$()) && !(textAlign === _this__u8e3s4.textAlign_1)) {
      tmp_6 = true;
    } else {
      var tmp_7;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(lineHeight), new Long(0, 0))) {
        tmp_7 = !equals(lineHeight, _this__u8e3s4.lineHeight_1);
      } else {
        tmp_7 = false;
      }
      tmp_6 = tmp_7;
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      tmp_5 = (!(textIndent == null) && !equals(textIndent, _this__u8e3s4.textIndent_1));
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = (!(textDirection === Companion_getInstance_53().get_Unspecified_8uxrb6_k$()) && !(textDirection === _this__u8e3s4.textDirection_1));
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = (!(platformStyle == null) && !equals(platformStyle, _this__u8e3s4.platformStyle_1));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = (!(lineHeightStyle == null) && !equals(lineHeightStyle, _this__u8e3s4.lineHeightStyle_1));
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = (!(lineBreak === Companion_getInstance_63().get_Unspecified_afm6zt_k$()) && !(lineBreak === _this__u8e3s4.lineBreak_1));
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = (!(hyphens === Companion_getInstance_46().get_Unspecified_43rcur_k$()) && !(hyphens === _this__u8e3s4.hyphens_1));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = (!(textMotion == null) && !equals(textMotion, _this__u8e3s4.textMotion_1));
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_8;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(lineHeight), new Long(0, 0))) {
      tmp_8 = _this__u8e3s4.lineHeight_1;
    } else {
      tmp_8 = lineHeight;
    }
    var tmp3_lineHeight = tmp_8;
    var tmp4_textIndent = textIndent == null ? _this__u8e3s4.textIndent_1 : textIndent;
    var tmp5_textAlign = !(textAlign === Companion_getInstance_51().get_Unspecified_23bj44_k$()) ? textAlign : _this__u8e3s4.textAlign_1;
    var tmp6_textDirection = !(textDirection === Companion_getInstance_53().get_Unspecified_8uxrb6_k$()) ? textDirection : _this__u8e3s4.textDirection_1;
    var tmp7_platformStyle = mergePlatformStyle(_this__u8e3s4, platformStyle);
    var tmp8_lineHeightStyle = lineHeightStyle == null ? _this__u8e3s4.lineHeightStyle_1 : lineHeightStyle;
    var tmp9_lineBreak = !(lineBreak === Companion_getInstance_63().get_Unspecified_afm6zt_k$()) ? lineBreak : _this__u8e3s4.lineBreak_1;
    var tmp10_hyphens = !(hyphens === Companion_getInstance_46().get_Unspecified_43rcur_k$()) ? hyphens : _this__u8e3s4.hyphens_1;
    var tmp11_textMotion = textMotion == null ? _this__u8e3s4.textMotion_1 : textMotion;
    return new ParagraphStyle_0(tmp5_textAlign, tmp6_textDirection, tmp3_lineHeight, tmp4_textIndent, tmp7_platformStyle, tmp8_lineHeightStyle, tmp9_lineBreak, tmp10_hyphens, tmp11_textMotion);
  }
  function mergePlatformStyle(_this__u8e3s4, other) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    if (_this__u8e3s4.platformStyle_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.platformStyle_1;
    return _this__u8e3s4.platformStyle_1.merge_553efx_k$(other);
  }
  function lerp_4(start, stop, fraction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = lerpDiscrete(new TextAlign(start.textAlign_1), new TextAlign(stop.textAlign_1), fraction);
    var tmp_0 = lerpDiscrete(new TextDirection(start.textDirection_1), new TextDirection(stop.textDirection_1), fraction);
    var tmp_1 = lerpTextUnitInheritable(start.lineHeight_1, stop.lineHeight_1, fraction);
    var tmp0_elvis_lhs = start.textIndent_1;
    var tmp_2 = tmp0_elvis_lhs == null ? Companion_getInstance_56().get_None_wo6tgh_k$() : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = stop.textIndent_1;
    return new ParagraphStyle_0(tmp.value_1, tmp_0.value_1, tmp_1, lerp_11(tmp_2, tmp1_elvis_lhs == null ? Companion_getInstance_56().get_None_wo6tgh_k$() : tmp1_elvis_lhs, fraction), lerpPlatformStyle(start.platformStyle_1, stop.platformStyle_1, fraction), lerpDiscrete(start.lineHeightStyle_1, stop.lineHeightStyle_1, fraction), lerpDiscrete(new LineBreak(start.lineBreak_1), new LineBreak(stop.lineBreak_1), fraction).mask_1, lerpDiscrete(new Hyphens(start.hyphens_1), new Hyphens(stop.hyphens_1), fraction).value_1, lerpDiscrete(start.textMotion_1, stop.textMotion_1, fraction));
  }
  function resolveParagraphStyleDefaults(style, direction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = style.textAlign_1 === Companion_getInstance_51().get_Unspecified_23bj44_k$() ? Companion_getInstance_51().get_Start_ovf7qx_k$() : style.textAlign_1;
    var tmp_0 = resolveTextDirection_0(direction, style.textDirection_1);
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = style.lineHeight_1;
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0))) {
      tmp_1 = get_DefaultLineHeight();
    } else {
      tmp_1 = style.lineHeight_1;
    }
    var tmp_2 = tmp_1;
    var tmp0_elvis_lhs = style.textIndent_1;
    var tmp_3 = tmp0_elvis_lhs == null ? Companion_getInstance_56().get_None_wo6tgh_k$() : tmp0_elvis_lhs;
    var tmp_4 = style.lineBreak_1 === Companion_getInstance_63().get_Unspecified_afm6zt_k$() ? Companion_getInstance_63().get_Simple_z0fu2y_k$() : style.lineBreak_1;
    var tmp_5 = style.hyphens_1 === Companion_getInstance_46().get_Unspecified_43rcur_k$() ? Companion_getInstance_46().get_None_vxrj2y_k$() : style.hyphens_1;
    var tmp1_elvis_lhs = style.textMotion_1;
    return new ParagraphStyle_0(tmp, tmp_0, tmp_2, tmp_3, style.platformStyle_1, style.lineHeightStyle_1, tmp_4, tmp_5, tmp1_elvis_lhs == null ? Companion_getInstance_64().get_Static_4hz9g7_k$() : tmp1_elvis_lhs);
  }
  function lerpPlatformStyle(start, stop, fraction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    if (start == null && stop == null)
      return null;
    var startNonNull = start == null ? Companion_getInstance_61().get_Default_goqax4_k$() : start;
    var stopNonNull = stop == null ? Companion_getInstance_61().get_Default_goqax4_k$() : stop;
    return lerp_12(startNonNull, stopNonNull, fraction);
  }
  var properties_initialized_ParagraphStyle_kt_y6w405;
  function _init_properties_ParagraphStyle_kt__lbx7er() {
    if (!properties_initialized_ParagraphStyle_kt_y6w405) {
      properties_initialized_ParagraphStyle_kt_y6w405 = true;
      DefaultLineHeight = Companion_getInstance_2().get_Unspecified_r048kw_k$();
      androidx_compose_ui_text_ParagraphStyle$stable = 0;
    }
  }
  var androidx_compose_ui_text_Placeholder$stable;
  function Placeholder(width, height, placeholderVerticalAlign) {
    this.width_1 = width;
    this.height_1 = height;
    this.placeholderVerticalAlign_1 = placeholderVerticalAlign;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = this.width_1;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0))) {
      var tmp$ret$1 = 'width cannot be TextUnit.Unspecified';
      throwIllegalArgumentException(tmp$ret$1);
    }
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_1 = this.height_1;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_1), new Long(0, 0))) {
      var tmp$ret$4 = 'height cannot be TextUnit.Unspecified';
      throwIllegalArgumentException(tmp$ret$4);
    }
  }
  protoOf(Placeholder).get_width_sw31vj_k$ = function () {
    return this.width_1;
  };
  protoOf(Placeholder).get_height_pbi6b2_k$ = function () {
    return this.height_1;
  };
  protoOf(Placeholder).get_placeholderVerticalAlign_kmyoon_k$ = function () {
    return this.placeholderVerticalAlign_1;
  };
  protoOf(Placeholder).copy_c7klfd_k$ = function (width, height, placeholderVerticalAlign) {
    return new Placeholder(width, height, placeholderVerticalAlign);
  };
  protoOf(Placeholder).copy$default_trap5h_k$ = function (width, height, placeholderVerticalAlign, $super) {
    width = width === VOID ? this.width_1 : width;
    height = height === VOID ? this.height_1 : height;
    placeholderVerticalAlign = placeholderVerticalAlign === VOID ? this.placeholderVerticalAlign_1 : placeholderVerticalAlign;
    return $super === VOID ? this.copy_c7klfd_k$(width, height, placeholderVerticalAlign) : $super.copy_c7klfd_k$.call(this, new TextUnit(width), new TextUnit(height), new PlaceholderVerticalAlign(placeholderVerticalAlign));
  };
  protoOf(Placeholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Placeholder))
      return false;
    if (!equals(this.width_1, other.width_1))
      return false;
    if (!equals(this.height_1, other.height_1))
      return false;
    if (!(this.placeholderVerticalAlign_1 === other.placeholderVerticalAlign_1))
      return false;
    return true;
  };
  protoOf(Placeholder).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.width_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.height_1) | 0;
    result = imul(31, result) + PlaceholderVerticalAlign__hashCode_impl_1c0k16(this.placeholderVerticalAlign_1) | 0;
    return result;
  };
  protoOf(Placeholder).toString = function () {
    return 'Placeholder(' + ('width=' + TextUnit__toString_impl_51ghw0(this.width_1) + ', ') + ('height=' + TextUnit__toString_impl_51ghw0(this.height_1) + ', ') + ('placeholderVerticalAlign=' + PlaceholderVerticalAlign__toString_impl_kf5crp(this.placeholderVerticalAlign_1)) + ')';
  };
  function _PlaceholderVerticalAlign___init__impl__mll0or(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function PlaceholderVerticalAlign__toString_impl_kf5crp($this) {
    return $this === Companion_getInstance_19().AboveBaseline_1 ? 'AboveBaseline' : $this === Companion_getInstance_19().Top_1 ? 'Top' : $this === Companion_getInstance_19().Bottom_1 ? 'Bottom' : $this === Companion_getInstance_19().Center_1 ? 'Center' : $this === Companion_getInstance_19().TextTop_1 ? 'TextTop' : $this === Companion_getInstance_19().TextBottom_1 ? 'TextBottom' : $this === Companion_getInstance_19().TextCenter_1 ? 'TextCenter' : 'Invalid';
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.AboveBaseline_1 = _PlaceholderVerticalAlign___init__impl__mll0or(1);
    this.Top_1 = _PlaceholderVerticalAlign___init__impl__mll0or(2);
    this.Bottom_1 = _PlaceholderVerticalAlign___init__impl__mll0or(3);
    this.Center_1 = _PlaceholderVerticalAlign___init__impl__mll0or(4);
    this.TextTop_1 = _PlaceholderVerticalAlign___init__impl__mll0or(5);
    this.TextBottom_1 = _PlaceholderVerticalAlign___init__impl__mll0or(6);
    this.TextCenter_1 = _PlaceholderVerticalAlign___init__impl__mll0or(7);
  }
  protoOf(Companion_2).get_AboveBaseline_nu267x_k$ = function () {
    return this.AboveBaseline_1;
  };
  protoOf(Companion_2).get_Top_4ethrk_k$ = function () {
    return this.Top_1;
  };
  protoOf(Companion_2).get_Bottom_aqwfjc_k$ = function () {
    return this.Bottom_1;
  };
  protoOf(Companion_2).get_Center_mzl5ha_k$ = function () {
    return this.Center_1;
  };
  protoOf(Companion_2).get_TextTop_v4gasj_k$ = function () {
    return this.TextTop_1;
  };
  protoOf(Companion_2).get_TextBottom_m8es0r_k$ = function () {
    return this.TextBottom_1;
  };
  protoOf(Companion_2).get_TextCenter_yh3hyp_k$ = function () {
    return this.TextCenter_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_19() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function PlaceholderVerticalAlign__hashCode_impl_1c0k16($this) {
    return $this;
  }
  function PlaceholderVerticalAlign__equals_impl_e3pkzy($this, other) {
    if (!(other instanceof PlaceholderVerticalAlign))
      return false;
    if (!($this === (other instanceof PlaceholderVerticalAlign ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function PlaceholderVerticalAlign(value) {
    Companion_getInstance_19();
    this.value_1 = value;
  }
  protoOf(PlaceholderVerticalAlign).toString = function () {
    return PlaceholderVerticalAlign__toString_impl_kf5crp(this.value_1);
  };
  protoOf(PlaceholderVerticalAlign).hashCode = function () {
    return PlaceholderVerticalAlign__hashCode_impl_1c0k16(this.value_1);
  };
  protoOf(PlaceholderVerticalAlign).equals = function (other) {
    return PlaceholderVerticalAlign__equals_impl_e3pkzy(this.value_1, other);
  };
  function get_AnnotatedStringSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotatedStringSaver;
  }
  var AnnotatedStringSaver;
  function get_AnnotationRangeListSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotationRangeListSaver;
  }
  var AnnotationRangeListSaver;
  function get_AnnotationRangeSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotationRangeSaver;
  }
  var AnnotationRangeSaver;
  function get_VerbatimTtsAnnotationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return VerbatimTtsAnnotationSaver;
  }
  var VerbatimTtsAnnotationSaver;
  function get_UrlAnnotationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return UrlAnnotationSaver;
  }
  var UrlAnnotationSaver;
  function get_LinkSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LinkSaver;
  }
  var LinkSaver;
  function get_ClickableSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ClickableSaver;
  }
  var ClickableSaver;
  function get_ParagraphStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ParagraphStyleSaver;
  }
  var ParagraphStyleSaver;
  function get_SpanStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return SpanStyleSaver;
  }
  var SpanStyleSaver;
  function get_TextLinkStylesSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextLinkStylesSaver;
  }
  var TextLinkStylesSaver;
  function get_TextDecorationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextDecorationSaver;
  }
  var TextDecorationSaver;
  function get_TextGeometricTransformSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextGeometricTransformSaver;
  }
  var TextGeometricTransformSaver;
  function get_TextIndentSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextIndentSaver;
  }
  var TextIndentSaver;
  function get_FontWeightSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return FontWeightSaver;
  }
  var FontWeightSaver;
  function get_BaselineShiftSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return BaselineShiftSaver;
  }
  var BaselineShiftSaver;
  function get_TextRangeSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextRangeSaver;
  }
  var TextRangeSaver;
  function get_ShadowSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ShadowSaver;
  }
  var ShadowSaver;
  function get_ColorSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ColorSaver;
  }
  var ColorSaver;
  function get_TextUnitSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextUnitSaver;
  }
  var TextUnitSaver;
  function get_OffsetSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return OffsetSaver;
  }
  var OffsetSaver;
  function get_LocaleListSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LocaleListSaver;
  }
  var LocaleListSaver;
  function get_LocaleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LocaleSaver;
  }
  var LocaleSaver;
  function get_LineHeightStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LineHeightStyleSaver;
  }
  var LineHeightStyleSaver;
  function save(value) {
    _init_properties_Savers_kt__o6r3ry();
    return value;
  }
  function save_0(value, saver, scope) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.with' call
      tmp = saver.save_khi2yu_k$(scope, value);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  var AnnotationType_Paragraph_instance;
  var AnnotationType_Span_instance;
  var AnnotationType_VerbatimTts_instance;
  var AnnotationType_Url_instance;
  var AnnotationType_Link_instance;
  var AnnotationType_Clickable_instance;
  var AnnotationType_String_instance;
  function values() {
    return [AnnotationType_Paragraph_getInstance(), AnnotationType_Span_getInstance(), AnnotationType_VerbatimTts_getInstance(), AnnotationType_Url_getInstance(), AnnotationType_Link_getInstance(), AnnotationType_Clickable_getInstance(), AnnotationType_String_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Paragraph':
        return AnnotationType_Paragraph_getInstance();
      case 'Span':
        return AnnotationType_Span_getInstance();
      case 'VerbatimTts':
        return AnnotationType_VerbatimTts_getInstance();
      case 'Url':
        return AnnotationType_Url_getInstance();
      case 'Link':
        return AnnotationType_Link_getInstance();
      case 'Clickable':
        return AnnotationType_Clickable_getInstance();
      case 'String':
        return AnnotationType_String_getInstance();
      default:
        AnnotationType_initEntries();
        THROW_IAE('No enum constant androidx.compose.ui.text.AnnotationType.' + value);
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var AnnotationType_entriesInitialized;
  function AnnotationType_initEntries() {
    if (AnnotationType_entriesInitialized)
      return Unit_getInstance();
    AnnotationType_entriesInitialized = true;
    AnnotationType_Paragraph_instance = new AnnotationType('Paragraph', 0);
    AnnotationType_Span_instance = new AnnotationType('Span', 1);
    AnnotationType_VerbatimTts_instance = new AnnotationType('VerbatimTts', 2);
    AnnotationType_Url_instance = new AnnotationType('Url', 3);
    AnnotationType_Link_instance = new AnnotationType('Link', 4);
    AnnotationType_Clickable_instance = new AnnotationType('Clickable', 5);
    AnnotationType_String_instance = new AnnotationType('String', 6);
  }
  var $ENTRIES;
  function AnnotationType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_Saver(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextUnitSaver();
  }
  function get_Saver_0(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextIndentSaver();
  }
  function get_Saver_1(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LineHeightStyleSaver();
  }
  function get_Saver_2(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_ColorSaver();
  }
  function get_Saver_3(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_FontWeightSaver();
  }
  function get_Saver_4(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_BaselineShiftSaver();
  }
  function get_Saver_5(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextGeometricTransformSaver();
  }
  function get_Saver_6(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LocaleListSaver();
  }
  function get_Saver_7(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextDecorationSaver();
  }
  function get_Saver_8(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_ShadowSaver();
  }
  function get_Saver_9(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_OffsetSaver();
  }
  function NonNullValueClassSaver() {
  }
  function NonNullValueClassSaver_0(save, restore) {
    _init_properties_Savers_kt__o6r3ry();
    return new NonNullValueClassSaver$1(save, restore);
  }
  function get_Saver_10(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LocaleSaver();
  }
  function get_Saver_11(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextRangeSaver();
  }
  function AnnotatedStringSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.get_text_wouvsm_k$()), save_0(it.get_annotations_s6zo16_k$(), get_AnnotationRangeListSaver(), $this$Saver)]);
  }
  function AnnotatedStringSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.get_c1px32_k$(1);
    var tmp2 = get_AnnotationRangeListSaver();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.restore_fyjq85_k$(tmp0);
        tmp_0 = (tmp_1 == null ? true : isInterface(tmp_1, KtList)) ? tmp_1 : THROW_CCE();
      }
      tmp$ret$0 = tmp_0;
    }
    var annotationsOrNull = tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.get_c1px32_k$(0);
    var tmp_2;
    if (tmp0_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_2 = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$7 = tmp_2;
    var tmp0_text = ensureNotNull(tmp$ret$7);
    return new AnnotatedString(annotationsOrNull, tmp0_text);
  }
  function AnnotationRangeListSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var target = ArrayList_init_$Create$_0(it.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = it.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = it.get_c1px32_k$(index);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = save_0(item, get_AnnotationRangeSaver(), $this$Saver);
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function AnnotationRangeListSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var target = ArrayList_init_$Create$_0(list.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = list.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.get_c1px32_k$(index);
        var tmp2 = get_AnnotationRangeSaver();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp;
          if (equals(item, false)) {
            tmp = !isInterface(tmp2, NonNullValueClassSaver);
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$0 = null;
            break $l$block;
          }
          var tmp_0;
          if (item == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_1 = tmp2.restore_fyjq85_k$(item);
            tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof Range) ? tmp_1 : THROW_CCE();
          }
          tmp$ret$0 = tmp_0;
        }
        var range = ensureNotNull(tmp$ret$0);
        // Inline function 'kotlin.collections.plusAssign' call
        target.add_utx5q5_k$(range);
      }
       while (inductionVariable <= last);
    return target;
  }
  function AnnotationRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp0_subject = it.get_item_woo5lo_k$();
    var tmp;
    if (tmp0_subject instanceof ParagraphStyle_0) {
      tmp = AnnotationType_Paragraph_getInstance();
    } else {
      if (tmp0_subject instanceof SpanStyle) {
        tmp = AnnotationType_Span_getInstance();
      } else {
        if (tmp0_subject instanceof VerbatimTtsAnnotation) {
          tmp = AnnotationType_VerbatimTts_getInstance();
        } else {
          if (tmp0_subject instanceof UrlAnnotation) {
            tmp = AnnotationType_Url_getInstance();
          } else {
            if (tmp0_subject instanceof Url) {
              tmp = AnnotationType_Link_getInstance();
            } else {
              if (tmp0_subject instanceof Clickable) {
                tmp = AnnotationType_Clickable_getInstance();
              } else {
                if (tmp0_subject instanceof StringAnnotation) {
                  tmp = AnnotationType_String_getInstance();
                } else {
                  throw UnsupportedOperationException_init_$Create$();
                }
              }
            }
          }
        }
      }
    }
    var marker = tmp;
    var tmp_0;
    switch (marker.get_ordinal_ip24qg_k$()) {
      case 0:
        var tmp_1 = it.get_item_woo5lo_k$();
        tmp_0 = save_0(tmp_1 instanceof ParagraphStyle_0 ? tmp_1 : THROW_CCE(), get_ParagraphStyleSaver(), $this$Saver);
        break;
      case 1:
        var tmp_2 = it.get_item_woo5lo_k$();
        tmp_0 = save_0(tmp_2 instanceof SpanStyle ? tmp_2 : THROW_CCE(), get_SpanStyleSaver(), $this$Saver);
        break;
      case 2:
        var tmp_3 = it.get_item_woo5lo_k$();
        tmp_0 = save_0(tmp_3 instanceof VerbatimTtsAnnotation ? tmp_3 : THROW_CCE(), get_VerbatimTtsAnnotationSaver(), $this$Saver);
        break;
      case 3:
        var tmp_4 = it.get_item_woo5lo_k$();
        tmp_0 = save_0(tmp_4 instanceof UrlAnnotation ? tmp_4 : THROW_CCE(), get_UrlAnnotationSaver(), $this$Saver);
        break;
      case 4:
        var tmp_5 = it.get_item_woo5lo_k$();
        tmp_0 = save_0(tmp_5 instanceof Url ? tmp_5 : THROW_CCE(), get_LinkSaver(), $this$Saver);
        break;
      case 5:
        var tmp_6 = it.get_item_woo5lo_k$();
        tmp_0 = save_0(tmp_6 instanceof Clickable ? tmp_6 : THROW_CCE(), get_ClickableSaver(), $this$Saver);
        break;
      case 6:
        var tmp_7 = it.get_item_woo5lo_k$();
        tmp_0 = save(_StringAnnotation___get_value__impl__v4s4ej(tmp_7 instanceof StringAnnotation ? tmp_7.value_1 : THROW_CCE()));
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var item = tmp_0;
    return arrayListOf([save(marker), item, save(it.get_start_iypx6h_k$()), save(it.get_end_18j6ha_k$()), save(it.get_tag_18ivnz_k$())]);
  }
  function AnnotationRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.get_c1px32_k$(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = tmp0_safe_receiver instanceof AnnotationType ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    var marker = ensureNotNull(tmp$ret$2);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.get_c1px32_k$(2);
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = typeof tmp0_safe_receiver_0 === 'number' ? tmp0_safe_receiver_0 : THROW_CCE();
    }
    var tmp$ret$5 = tmp_0;
    var start = ensureNotNull(tmp$ret$5);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.get_c1px32_k$(3);
    var tmp_1;
    if (tmp0_safe_receiver_1 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = typeof tmp0_safe_receiver_1 === 'number' ? tmp0_safe_receiver_1 : THROW_CCE();
    }
    var tmp$ret$8 = tmp_1;
    var end = ensureNotNull(tmp$ret$8);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_2 = list.get_c1px32_k$(4);
    var tmp_2;
    if (tmp0_safe_receiver_2 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_2 = typeof tmp0_safe_receiver_2 === 'string' ? tmp0_safe_receiver_2 : THROW_CCE();
    }
    var tmp$ret$11 = tmp_2;
    var tag = ensureNotNull(tmp$ret$11);
    var tmp_3;
    switch (marker.get_ordinal_ip24qg_k$()) {
      case 0:
        var tmp0 = list.get_c1px32_k$(1);
        var tmp2 = get_ParagraphStyleSaver();
        var tmp$ret$12;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_4;
          if (equals(tmp0, false)) {
            tmp_4 = !isInterface(tmp2, NonNullValueClassSaver);
          } else {
            tmp_4 = false;
          }
          if (tmp_4) {
            tmp$ret$12 = null;
            break $l$block;
          }
          var tmp_5;
          if (tmp0 == null) {
            tmp_5 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_6 = tmp2.restore_fyjq85_k$(tmp0);
            tmp_5 = (tmp_6 == null ? true : tmp_6 instanceof ParagraphStyle_0) ? tmp_6 : THROW_CCE();
          }
          tmp$ret$12 = tmp_5;
        }

        var item = ensureNotNull(tmp$ret$12);
        tmp_3 = new Range(item, start, end, tag);
        break;
      case 1:
        var tmp0_0 = list.get_c1px32_k$(1);
        var tmp2_0 = get_SpanStyleSaver();
        var tmp$ret$17;
        $l$block_0: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_7;
          if (equals(tmp0_0, false)) {
            tmp_7 = !isInterface(tmp2_0, NonNullValueClassSaver);
          } else {
            tmp_7 = false;
          }
          if (tmp_7) {
            tmp$ret$17 = null;
            break $l$block_0;
          }
          var tmp_8;
          if (tmp0_0 == null) {
            tmp_8 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_9 = tmp2_0.restore_fyjq85_k$(tmp0_0);
            tmp_8 = (tmp_9 == null ? true : tmp_9 instanceof SpanStyle) ? tmp_9 : THROW_CCE();
          }
          tmp$ret$17 = tmp_8;
        }

        var item_0 = ensureNotNull(tmp$ret$17);
        tmp_3 = new Range(item_0, start, end, tag);
        break;
      case 2:
        var tmp0_1 = list.get_c1px32_k$(1);
        var tmp2_1 = get_VerbatimTtsAnnotationSaver();
        var tmp$ret$22;
        $l$block_1: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_10;
          if (equals(tmp0_1, false)) {
            tmp_10 = !isInterface(tmp2_1, NonNullValueClassSaver);
          } else {
            tmp_10 = false;
          }
          if (tmp_10) {
            tmp$ret$22 = null;
            break $l$block_1;
          }
          var tmp_11;
          if (tmp0_1 == null) {
            tmp_11 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_12 = tmp2_1.restore_fyjq85_k$(tmp0_1);
            tmp_11 = (tmp_12 == null ? true : tmp_12 instanceof VerbatimTtsAnnotation) ? tmp_12 : THROW_CCE();
          }
          tmp$ret$22 = tmp_11;
        }

        var item_1 = ensureNotNull(tmp$ret$22);
        tmp_3 = new Range(item_1, start, end, tag);
        break;
      case 3:
        var tmp0_2 = list.get_c1px32_k$(1);
        var tmp2_2 = get_UrlAnnotationSaver();
        var tmp$ret$27;
        $l$block_2: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_13;
          if (equals(tmp0_2, false)) {
            tmp_13 = !isInterface(tmp2_2, NonNullValueClassSaver);
          } else {
            tmp_13 = false;
          }
          if (tmp_13) {
            tmp$ret$27 = null;
            break $l$block_2;
          }
          var tmp_14;
          if (tmp0_2 == null) {
            tmp_14 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_15 = tmp2_2.restore_fyjq85_k$(tmp0_2);
            tmp_14 = (tmp_15 == null ? true : tmp_15 instanceof UrlAnnotation) ? tmp_15 : THROW_CCE();
          }
          tmp$ret$27 = tmp_14;
        }

        var item_2 = ensureNotNull(tmp$ret$27);
        tmp_3 = new Range(item_2, start, end, tag);
        break;
      case 4:
        var tmp0_3 = list.get_c1px32_k$(1);
        var tmp2_3 = get_LinkSaver();
        var tmp$ret$32;
        $l$block_3: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_16;
          if (equals(tmp0_3, false)) {
            tmp_16 = !isInterface(tmp2_3, NonNullValueClassSaver);
          } else {
            tmp_16 = false;
          }
          if (tmp_16) {
            tmp$ret$32 = null;
            break $l$block_3;
          }
          var tmp_17;
          if (tmp0_3 == null) {
            tmp_17 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_18 = tmp2_3.restore_fyjq85_k$(tmp0_3);
            tmp_17 = (tmp_18 == null ? true : tmp_18 instanceof Url) ? tmp_18 : THROW_CCE();
          }
          tmp$ret$32 = tmp_17;
        }

        var item_3 = ensureNotNull(tmp$ret$32);
        tmp_3 = new Range(item_3, start, end, tag);
        break;
      case 5:
        var tmp0_4 = list.get_c1px32_k$(1);
        var tmp2_4 = get_ClickableSaver();
        var tmp$ret$37;
        $l$block_4: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_19;
          if (equals(tmp0_4, false)) {
            tmp_19 = !isInterface(tmp2_4, NonNullValueClassSaver);
          } else {
            tmp_19 = false;
          }
          if (tmp_19) {
            tmp$ret$37 = null;
            break $l$block_4;
          }
          var tmp_20;
          if (tmp0_4 == null) {
            tmp_20 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_21 = tmp2_4.restore_fyjq85_k$(tmp0_4);
            tmp_20 = (tmp_21 == null ? true : tmp_21 instanceof Clickable) ? tmp_21 : THROW_CCE();
          }
          tmp$ret$37 = tmp_20;
        }

        var item_4 = ensureNotNull(tmp$ret$37);
        tmp_3 = new Range(item_4, start, end, tag);
        break;
      case 6:
        // Inline function 'androidx.compose.ui.text.restore' call

        var tmp0_safe_receiver_3 = list.get_c1px32_k$(1);
        var tmp_22;
        if (tmp0_safe_receiver_3 == null) {
          tmp_22 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_22 = typeof tmp0_safe_receiver_3 === 'string' ? tmp0_safe_receiver_3 : THROW_CCE();
        }

        var tmp$ret$44 = tmp_22;
        var item_5 = ensureNotNull(tmp$ret$44);
        tmp_3 = new Range(new StringAnnotation(_StringAnnotation___init__impl__o6a5i7(item_5)), start, end, tag);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_3;
  }
  function VerbatimTtsAnnotationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return save(it.get_verbatim_64u873_k$());
  }
  function VerbatimTtsAnnotationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp;
    if (it == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeof it === 'string' ? it : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    return new VerbatimTtsAnnotation(ensureNotNull(tmp$ret$2));
  }
  function UrlAnnotationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return save(it.get_url_18iuii_k$());
  }
  function UrlAnnotationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp;
    if (it == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeof it === 'string' ? it : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    return new UrlAnnotation(ensureNotNull(tmp$ret$2));
  }
  function LinkSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.get_url_18iuii_k$()), save_0(it.get_styles_jnubqj_k$(), get_TextLinkStylesSaver(), $this$Saver)]);
  }
  function LinkSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.get_c1px32_k$(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    var url = ensureNotNull(tmp$ret$2);
    var tmp0 = list.get_c1px32_k$(1);
    var tmp2 = get_TextLinkStylesSaver();
    var tmp$ret$3;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_0;
      if (equals(tmp0, false)) {
        tmp_0 = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$3 = null;
        break $l$block;
      }
      var tmp_1;
      if (tmp0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_2 = tmp2.restore_fyjq85_k$(tmp0);
        tmp_1 = (tmp_2 == null ? true : tmp_2 instanceof TextLinkStyles) ? tmp_2 : THROW_CCE();
      }
      tmp$ret$3 = tmp_1;
    }
    var stylesOrNull = tmp$ret$3;
    return new Url(url, stylesOrNull);
  }
  function ClickableSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.get_tag_18ivnz_k$()), save_0(it.get_styles_jnubqj_k$(), get_TextLinkStylesSaver(), $this$Saver)]);
  }
  function ClickableSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.get_c1px32_k$(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    var tag = ensureNotNull(tmp$ret$2);
    var tmp0 = list.get_c1px32_k$(1);
    var tmp2 = get_TextLinkStylesSaver();
    var tmp$ret$3;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_0;
      if (equals(tmp0, false)) {
        tmp_0 = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$3 = null;
        break $l$block;
      }
      var tmp_1;
      if (tmp0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_2 = tmp2.restore_fyjq85_k$(tmp0);
        tmp_1 = (tmp_2 == null ? true : tmp_2 instanceof TextLinkStyles) ? tmp_2 : THROW_CCE();
      }
      tmp$ret$3 = tmp_1;
    }
    var stylesOrNull = tmp$ret$3;
    return new Clickable(tag, stylesOrNull, null);
  }
  function ParagraphStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(new TextAlign(it.get_textAlign_fnegkd_k$())), save(new TextDirection(it.get_textDirection_h0bug3_k$())), save_0(new TextUnit(it.get_lineHeight_3vvefu_k$()), get_Saver(Companion_getInstance_2()), $this$Saver), save_0(it.get_textIndent_5mau2q_k$(), get_Saver_0(Companion_getInstance_56()), $this$Saver), save_0(it.get_platformStyle_7i053p_k$(), get_Saver_12(Companion_getInstance_61()), $this$Saver), save_0(it.get_lineHeightStyle_fzu4s3_k$(), get_Saver_1(Companion_getInstance_50()), $this$Saver), save_0(new LineBreak(it.get_lineBreak_osjg5f_k$()), get_Saver_13(Companion_getInstance_63()), $this$Saver), save(new Hyphens(it.get_hyphens_oe87pf_k$())), save_0(it.get_textMotion_7jbf0s_k$(), get_Saver_14(Companion_getInstance_64()), $this$Saver)]);
  }
  function ParagraphStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.get_c1px32_k$(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp0_safe_receiver instanceof TextAlign ? tmp0_safe_receiver.value_1 : THROW_CCE();
      var tmp_1 = tmp_0 == null ? null : new TextAlign(tmp_0);
      tmp = tmp_1 == null ? null : tmp_1.value_1;
    }
    var tmp_2 = tmp;
    var tmp_3 = ensureNotNull(tmp_2 == null ? null : new TextAlign(tmp_2));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.get_c1px32_k$(1);
    var tmp_4;
    if (tmp0_safe_receiver_0 == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_5 = tmp0_safe_receiver_0 instanceof TextDirection ? tmp0_safe_receiver_0.value_1 : THROW_CCE();
      var tmp_6 = tmp_5 == null ? null : new TextDirection(tmp_5);
      tmp_4 = tmp_6 == null ? null : tmp_6.value_1;
    }
    var tmp_7 = tmp_4;
    var tmp_8 = ensureNotNull(tmp_7 == null ? null : new TextDirection(tmp_7));
    var tmp0 = list.get_c1px32_k$(2);
    var tmp2 = get_Saver(Companion_getInstance_2());
    var tmp$ret$6;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_9;
      if (equals(tmp0, false)) {
        tmp_9 = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp_9 = false;
      }
      if (tmp_9) {
        tmp$ret$6 = null;
        break $l$block;
      }
      var tmp_10;
      if (tmp0 == null) {
        tmp_10 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_11 = tmp2.restore_fyjq85_k$(tmp0);
        var tmp_12;
        if (tmp_11 == null ? true : tmp_11 instanceof TextUnit) {
          var tmp_13 = tmp_11;
          tmp_12 = tmp_13 == null ? null : tmp_13.packedValue_1;
        } else {
          tmp_12 = THROW_CCE();
        }
        var tmp_14 = tmp_12;
        var tmp_15 = tmp_14 == null ? null : new TextUnit(tmp_14);
        tmp_10 = tmp_15 == null ? null : tmp_15.packedValue_1;
      }
      tmp$ret$6 = tmp_10;
    }
    var tmp_16 = tmp$ret$6;
    var tmp_17 = ensureNotNull(tmp_16 == null ? null : new TextUnit(tmp_16));
    var tmp0_0 = list.get_c1px32_k$(3);
    var tmp2_0 = get_Saver_0(Companion_getInstance_56());
    var tmp$ret$11;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_18;
      if (equals(tmp0_0, false)) {
        tmp_18 = !isInterface(tmp2_0, NonNullValueClassSaver);
      } else {
        tmp_18 = false;
      }
      if (tmp_18) {
        tmp$ret$11 = null;
        break $l$block_0;
      }
      var tmp_19;
      if (tmp0_0 == null) {
        tmp_19 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_20 = tmp2_0.restore_fyjq85_k$(tmp0_0);
        tmp_19 = (tmp_20 == null ? true : tmp_20 instanceof TextIndent_0) ? tmp_20 : THROW_CCE();
      }
      tmp$ret$11 = tmp_19;
    }
    var tmp_21 = tmp$ret$11;
    var tmp0_1 = list.get_c1px32_k$(4);
    var tmp2_1 = get_Saver_12(Companion_getInstance_61());
    var tmp$ret$16;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_22;
      if (equals(tmp0_1, false)) {
        tmp_22 = !isInterface(tmp2_1, NonNullValueClassSaver);
      } else {
        tmp_22 = false;
      }
      if (tmp_22) {
        tmp$ret$16 = null;
        break $l$block_1;
      }
      var tmp_23;
      if (tmp0_1 == null) {
        tmp_23 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_24 = tmp2_1.restore_fyjq85_k$(tmp0_1);
        tmp_23 = (tmp_24 == null ? true : tmp_24 instanceof PlatformParagraphStyle) ? tmp_24 : THROW_CCE();
      }
      tmp$ret$16 = tmp_23;
    }
    var tmp_25 = tmp$ret$16;
    var tmp0_2 = list.get_c1px32_k$(5);
    var tmp2_2 = get_Saver_1(Companion_getInstance_50());
    var tmp$ret$21;
    $l$block_2: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_26;
      if (equals(tmp0_2, false)) {
        tmp_26 = !isInterface(tmp2_2, NonNullValueClassSaver);
      } else {
        tmp_26 = false;
      }
      if (tmp_26) {
        tmp$ret$21 = null;
        break $l$block_2;
      }
      var tmp_27;
      if (tmp0_2 == null) {
        tmp_27 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_28 = tmp2_2.restore_fyjq85_k$(tmp0_2);
        tmp_27 = (tmp_28 == null ? true : tmp_28 instanceof LineHeightStyle) ? tmp_28 : THROW_CCE();
      }
      tmp$ret$21 = tmp_27;
    }
    var tmp_29 = tmp$ret$21;
    var tmp0_3 = list.get_c1px32_k$(6);
    var tmp2_3 = get_Saver_13(Companion_getInstance_63());
    var tmp$ret$26;
    $l$block_3: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_30;
      if (equals(tmp0_3, false)) {
        tmp_30 = !isInterface(tmp2_3, NonNullValueClassSaver);
      } else {
        tmp_30 = false;
      }
      if (tmp_30) {
        tmp$ret$26 = null;
        break $l$block_3;
      }
      var tmp_31;
      if (tmp0_3 == null) {
        tmp_31 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_32 = tmp2_3.restore_fyjq85_k$(tmp0_3);
        var tmp_33;
        if (tmp_32 == null ? true : tmp_32 instanceof LineBreak) {
          var tmp_34 = tmp_32;
          tmp_33 = tmp_34 == null ? null : tmp_34.mask_1;
        } else {
          tmp_33 = THROW_CCE();
        }
        var tmp_35 = tmp_33;
        var tmp_36 = tmp_35 == null ? null : new LineBreak(tmp_35);
        tmp_31 = tmp_36 == null ? null : tmp_36.mask_1;
      }
      tmp$ret$26 = tmp_31;
    }
    var tmp_37 = tmp$ret$26;
    var tmp_38 = ensureNotNull(tmp_37 == null ? null : new LineBreak(tmp_37));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.get_c1px32_k$(7);
    var tmp_39;
    if (tmp0_safe_receiver_1 == null) {
      tmp_39 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_40 = tmp0_safe_receiver_1 instanceof Hyphens ? tmp0_safe_receiver_1.value_1 : THROW_CCE();
      var tmp_41 = tmp_40 == null ? null : new Hyphens(tmp_40);
      tmp_39 = tmp_41 == null ? null : tmp_41.value_1;
    }
    var tmp_42 = tmp_39;
    var tmp_43 = ensureNotNull(tmp_42 == null ? null : new Hyphens(tmp_42));
    var tmp0_4 = list.get_c1px32_k$(8);
    var tmp2_4 = get_Saver_14(Companion_getInstance_64());
    var tmp$ret$34;
    $l$block_4: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_44;
      if (equals(tmp0_4, false)) {
        tmp_44 = !isInterface(tmp2_4, NonNullValueClassSaver);
      } else {
        tmp_44 = false;
      }
      if (tmp_44) {
        tmp$ret$34 = null;
        break $l$block_4;
      }
      var tmp_45;
      if (tmp0_4 == null) {
        tmp_45 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_46 = tmp2_4.restore_fyjq85_k$(tmp0_4);
        tmp_45 = (tmp_46 == null ? true : tmp_46 instanceof TextMotion) ? tmp_46 : THROW_CCE();
      }
      tmp$ret$34 = tmp_45;
    }
    return new ParagraphStyle_0(tmp_3.value_1, tmp_8.value_1, tmp_17.packedValue_1, tmp_21, tmp_25, tmp_29, tmp_38.mask_1, tmp_43.value_1, tmp$ret$34);
  }
  function SpanStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp = save_0(new Color(it.get_color_lnp1vl_k$()), get_Saver_2(Companion_getInstance_0()), $this$Saver);
    var tmp_0 = save_0(new TextUnit(it.get_fontSize_ergf2z_k$()), get_Saver(Companion_getInstance_2()), $this$Saver);
    var tmp_1 = save_0(it.get_fontWeight_wbif2o_k$(), get_Saver_3(Companion_getInstance_33()), $this$Saver);
    var tmp_2 = it.get_fontStyle_hzv4zg_k$();
    var tmp_3 = save(tmp_2 == null ? null : new FontStyle(tmp_2));
    var tmp_4 = it.get_fontSynthesis_h5auiy_k$();
    var tmp_5 = save(tmp_4 == null ? null : new FontSynthesis(tmp_4));
    var tmp_6 = save(-1);
    var tmp_7 = save(it.get_fontFeatureSettings_a47533_k$());
    var tmp_8 = save_0(new TextUnit(it.get_letterSpacing_k79xfu_k$()), get_Saver(Companion_getInstance_2()), $this$Saver);
    var tmp_9 = it.get_baselineShift_99zyho_k$();
    return arrayListOf([tmp, tmp_0, tmp_1, tmp_3, tmp_5, tmp_6, tmp_7, tmp_8, save_0(tmp_9 == null ? null : new BaselineShift(tmp_9), get_Saver_4(Companion_getInstance_45()), $this$Saver), save_0(it.get_textGeometricTransform_tdfmin_k$(), get_Saver_5(Companion_getInstance_55()), $this$Saver), save_0(it.get_localeList_1gj9gh_k$(), get_Saver_6(Companion_getInstance_44()), $this$Saver), save_0(new Color(it.get_background_8l4942_k$()), get_Saver_2(Companion_getInstance_0()), $this$Saver), save_0(it.get_textDecoration_itgjwm_k$(), get_Saver_7(Companion_getInstance_52()), $this$Saver), save_0(it.get_shadow_jgtb8p_k$(), get_Saver_8(Companion_getInstance_3()), $this$Saver)]);
  }
  function SpanStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.get_c1px32_k$(0);
    var tmp2 = get_Saver_2(Companion_getInstance_0());
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.restore_fyjq85_k$(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof Color) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.value_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new Color(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.value_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6));
    var tmp0_0 = list.get_c1px32_k$(1);
    var tmp2_0 = get_Saver(Companion_getInstance_2());
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp0_0, false)) {
        tmp_8 = !isInterface(tmp2_0, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (tmp0_0 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_10 = tmp2_0.restore_fyjq85_k$(tmp0_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof TextUnit) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.packedValue_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new TextUnit(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.packedValue_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15));
    var tmp0_1 = list.get_c1px32_k$(2);
    var tmp2_1 = get_Saver_3(Companion_getInstance_33());
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_17;
      if (equals(tmp0_1, false)) {
        tmp_17 = !isInterface(tmp2_1, NonNullValueClassSaver);
      } else {
        tmp_17 = false;
      }
      if (tmp_17) {
        tmp$ret$10 = null;
        break $l$block_1;
      }
      var tmp_18;
      if (tmp0_1 == null) {
        tmp_18 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_19 = tmp2_1.restore_fyjq85_k$(tmp0_1);
        tmp_18 = (tmp_19 == null ? true : tmp_19 instanceof FontWeight) ? tmp_19 : THROW_CCE();
      }
      tmp$ret$10 = tmp_18;
    }
    var tmp_20 = tmp$ret$10;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.get_c1px32_k$(3);
    var tmp_21;
    if (tmp0_safe_receiver == null) {
      tmp_21 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_22 = tmp0_safe_receiver instanceof FontStyle ? tmp0_safe_receiver.value_1 : THROW_CCE();
      var tmp_23 = tmp_22 == null ? null : new FontStyle(tmp_22);
      tmp_21 = tmp_23 == null ? null : tmp_23.value_1;
    }
    var tmp_24 = tmp_21;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.get_c1px32_k$(4);
    var tmp_25;
    if (tmp0_safe_receiver_0 == null) {
      tmp_25 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_26 = tmp0_safe_receiver_0 instanceof FontSynthesis ? tmp0_safe_receiver_0.value_1 : THROW_CCE();
      var tmp_27 = tmp_26 == null ? null : new FontSynthesis(tmp_26);
      tmp_25 = tmp_27 == null ? null : tmp_27.value_1;
    }
    var tmp_28 = tmp_25;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.get_c1px32_k$(6);
    var tmp_29;
    if (tmp0_safe_receiver_1 == null) {
      tmp_29 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_29 = typeof tmp0_safe_receiver_1 === 'string' ? tmp0_safe_receiver_1 : THROW_CCE();
    }
    var tmp_30 = tmp_29;
    var tmp0_2 = list.get_c1px32_k$(7);
    var tmp2_2 = get_Saver(Companion_getInstance_2());
    var tmp$ret$24;
    $l$block_2: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_31;
      if (equals(tmp0_2, false)) {
        tmp_31 = !isInterface(tmp2_2, NonNullValueClassSaver);
      } else {
        tmp_31 = false;
      }
      if (tmp_31) {
        tmp$ret$24 = null;
        break $l$block_2;
      }
      var tmp_32;
      if (tmp0_2 == null) {
        tmp_32 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_33 = tmp2_2.restore_fyjq85_k$(tmp0_2);
        var tmp_34;
        if (tmp_33 == null ? true : tmp_33 instanceof TextUnit) {
          var tmp_35 = tmp_33;
          tmp_34 = tmp_35 == null ? null : tmp_35.packedValue_1;
        } else {
          tmp_34 = THROW_CCE();
        }
        var tmp_36 = tmp_34;
        var tmp_37 = tmp_36 == null ? null : new TextUnit(tmp_36);
        tmp_32 = tmp_37 == null ? null : tmp_37.packedValue_1;
      }
      tmp$ret$24 = tmp_32;
    }
    var tmp_38 = tmp$ret$24;
    var tmp_39 = ensureNotNull(tmp_38 == null ? null : new TextUnit(tmp_38));
    var tmp0_3 = list.get_c1px32_k$(8);
    var tmp2_3 = get_Saver_4(Companion_getInstance_45());
    var tmp$ret$29;
    $l$block_3: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_40;
      if (equals(tmp0_3, false)) {
        tmp_40 = !isInterface(tmp2_3, NonNullValueClassSaver);
      } else {
        tmp_40 = false;
      }
      if (tmp_40) {
        tmp$ret$29 = null;
        break $l$block_3;
      }
      var tmp_41;
      if (tmp0_3 == null) {
        tmp_41 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_42 = tmp2_3.restore_fyjq85_k$(tmp0_3);
        var tmp_43;
        if (tmp_42 == null ? true : tmp_42 instanceof BaselineShift) {
          var tmp_44 = tmp_42;
          tmp_43 = tmp_44 == null ? null : tmp_44.multiplier_1;
        } else {
          tmp_43 = THROW_CCE();
        }
        var tmp_45 = tmp_43;
        var tmp_46 = tmp_45 == null ? null : new BaselineShift(tmp_45);
        tmp_41 = tmp_46 == null ? null : tmp_46.multiplier_1;
      }
      tmp$ret$29 = tmp_41;
    }
    var tmp_47 = tmp$ret$29;
    var tmp0_4 = list.get_c1px32_k$(9);
    var tmp2_4 = get_Saver_5(Companion_getInstance_55());
    var tmp$ret$34;
    $l$block_4: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_48;
      if (equals(tmp0_4, false)) {
        tmp_48 = !isInterface(tmp2_4, NonNullValueClassSaver);
      } else {
        tmp_48 = false;
      }
      if (tmp_48) {
        tmp$ret$34 = null;
        break $l$block_4;
      }
      var tmp_49;
      if (tmp0_4 == null) {
        tmp_49 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_50 = tmp2_4.restore_fyjq85_k$(tmp0_4);
        tmp_49 = (tmp_50 == null ? true : tmp_50 instanceof TextGeometricTransform) ? tmp_50 : THROW_CCE();
      }
      tmp$ret$34 = tmp_49;
    }
    var tmp_51 = tmp$ret$34;
    var tmp0_5 = list.get_c1px32_k$(10);
    var tmp2_5 = get_Saver_6(Companion_getInstance_44());
    var tmp$ret$39;
    $l$block_5: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_52;
      if (equals(tmp0_5, false)) {
        tmp_52 = !isInterface(tmp2_5, NonNullValueClassSaver);
      } else {
        tmp_52 = false;
      }
      if (tmp_52) {
        tmp$ret$39 = null;
        break $l$block_5;
      }
      var tmp_53;
      if (tmp0_5 == null) {
        tmp_53 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_54 = tmp2_5.restore_fyjq85_k$(tmp0_5);
        tmp_53 = (tmp_54 == null ? true : tmp_54 instanceof LocaleList) ? tmp_54 : THROW_CCE();
      }
      tmp$ret$39 = tmp_53;
    }
    var tmp_55 = tmp$ret$39;
    var tmp0_6 = list.get_c1px32_k$(11);
    var tmp2_6 = get_Saver_2(Companion_getInstance_0());
    var tmp$ret$44;
    $l$block_6: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_56;
      if (equals(tmp0_6, false)) {
        tmp_56 = !isInterface(tmp2_6, NonNullValueClassSaver);
      } else {
        tmp_56 = false;
      }
      if (tmp_56) {
        tmp$ret$44 = null;
        break $l$block_6;
      }
      var tmp_57;
      if (tmp0_6 == null) {
        tmp_57 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_58 = tmp2_6.restore_fyjq85_k$(tmp0_6);
        var tmp_59;
        if (tmp_58 == null ? true : tmp_58 instanceof Color) {
          var tmp_60 = tmp_58;
          tmp_59 = tmp_60 == null ? null : tmp_60.value_1;
        } else {
          tmp_59 = THROW_CCE();
        }
        var tmp_61 = tmp_59;
        var tmp_62 = tmp_61 == null ? null : new Color(tmp_61);
        tmp_57 = tmp_62 == null ? null : tmp_62.value_1;
      }
      tmp$ret$44 = tmp_57;
    }
    var tmp_63 = tmp$ret$44;
    var tmp_64 = ensureNotNull(tmp_63 == null ? null : new Color(tmp_63));
    var tmp0_7 = list.get_c1px32_k$(12);
    var tmp2_7 = get_Saver_7(Companion_getInstance_52());
    var tmp$ret$49;
    $l$block_7: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_65;
      if (equals(tmp0_7, false)) {
        tmp_65 = !isInterface(tmp2_7, NonNullValueClassSaver);
      } else {
        tmp_65 = false;
      }
      if (tmp_65) {
        tmp$ret$49 = null;
        break $l$block_7;
      }
      var tmp_66;
      if (tmp0_7 == null) {
        tmp_66 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_67 = tmp2_7.restore_fyjq85_k$(tmp0_7);
        tmp_66 = (tmp_67 == null ? true : tmp_67 instanceof TextDecoration) ? tmp_67 : THROW_CCE();
      }
      tmp$ret$49 = tmp_66;
    }
    var tmp_68 = tmp$ret$49;
    var tmp0_8 = list.get_c1px32_k$(13);
    var tmp2_8 = get_Saver_8(Companion_getInstance_3());
    var tmp$ret$54;
    $l$block_8: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_69;
      if (equals(tmp0_8, false)) {
        tmp_69 = !isInterface(tmp2_8, NonNullValueClassSaver);
      } else {
        tmp_69 = false;
      }
      if (tmp_69) {
        tmp$ret$54 = null;
        break $l$block_8;
      }
      var tmp_70;
      if (tmp0_8 == null) {
        tmp_70 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_71 = tmp2_8.restore_fyjq85_k$(tmp0_8);
        tmp_70 = (tmp_71 == null ? true : tmp_71 instanceof Shadow) ? tmp_71 : THROW_CCE();
      }
      tmp$ret$54 = tmp_70;
    }
    return SpanStyle_init_$Create$_1(tmp_7.value_1, tmp_16.packedValue_1, tmp_20, tmp_24, tmp_28, VOID, tmp_30, tmp_39.packedValue_1, tmp_47, tmp_51, tmp_55, tmp_64.value_1, tmp_68, tmp$ret$54);
  }
  function TextLinkStylesSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(it.get_style_iyqetk_k$(), get_SpanStyleSaver(), $this$Saver), save_0(it.get_focusedStyle_a3npab_k$(), get_SpanStyleSaver(), $this$Saver), save_0(it.get_hoveredStyle_o44qap_k$(), get_SpanStyleSaver(), $this$Saver), save_0(it.get_pressedStyle_4f5zpk_k$(), get_SpanStyleSaver(), $this$Saver)]);
  }
  function TextLinkStylesSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.get_c1px32_k$(0);
    var tmp2 = get_SpanStyleSaver();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.restore_fyjq85_k$(tmp0);
        tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof SpanStyle) ? tmp_1 : THROW_CCE();
      }
      tmp$ret$0 = tmp_0;
    }
    var styleOrNull = tmp$ret$0;
    var tmp0_0 = list.get_c1px32_k$(1);
    var tmp2_0 = get_SpanStyleSaver();
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_2;
      if (equals(tmp0_0, false)) {
        tmp_2 = !isInterface(tmp2_0, NonNullValueClassSaver);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_3;
      if (tmp0_0 == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_4 = tmp2_0.restore_fyjq85_k$(tmp0_0);
        tmp_3 = (tmp_4 == null ? true : tmp_4 instanceof SpanStyle) ? tmp_4 : THROW_CCE();
      }
      tmp$ret$5 = tmp_3;
    }
    var focusedStyleOrNull = tmp$ret$5;
    var tmp0_1 = list.get_c1px32_k$(2);
    var tmp2_1 = get_SpanStyleSaver();
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_5;
      if (equals(tmp0_1, false)) {
        tmp_5 = !isInterface(tmp2_1, NonNullValueClassSaver);
      } else {
        tmp_5 = false;
      }
      if (tmp_5) {
        tmp$ret$10 = null;
        break $l$block_1;
      }
      var tmp_6;
      if (tmp0_1 == null) {
        tmp_6 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_7 = tmp2_1.restore_fyjq85_k$(tmp0_1);
        tmp_6 = (tmp_7 == null ? true : tmp_7 instanceof SpanStyle) ? tmp_7 : THROW_CCE();
      }
      tmp$ret$10 = tmp_6;
    }
    var hoveredStyleOrNull = tmp$ret$10;
    var tmp0_2 = list.get_c1px32_k$(3);
    var tmp2_2 = get_SpanStyleSaver();
    var tmp$ret$15;
    $l$block_2: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp0_2, false)) {
        tmp_8 = !isInterface(tmp2_2, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$15 = null;
        break $l$block_2;
      }
      var tmp_9;
      if (tmp0_2 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_10 = tmp2_2.restore_fyjq85_k$(tmp0_2);
        tmp_9 = (tmp_10 == null ? true : tmp_10 instanceof SpanStyle) ? tmp_10 : THROW_CCE();
      }
      tmp$ret$15 = tmp_9;
    }
    var pressedStyleOrNull = tmp$ret$15;
    return new TextLinkStyles(styleOrNull, focusedStyleOrNull, hoveredStyleOrNull, pressedStyleOrNull);
  }
  function TextDecorationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.get_mask_woqbsl_k$();
  }
  function TextDecorationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new TextDecoration(typeof it === 'number' ? it : THROW_CCE());
  }
  function TextGeometricTransformSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([it.get_scaleX_je2hxz_k$(), it.get_skewX_iyk9d1_k$()]);
  }
  function TextGeometricTransformSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    return new TextGeometricTransform(list.get_c1px32_k$(0), list.get_c1px32_k$(1));
  }
  function TextIndentSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new TextUnit(it.get_firstLine_vqcugt_k$()), get_Saver(Companion_getInstance_2()), $this$Saver), save_0(new TextUnit(it.get_restLine_r6nrrn_k$()), get_Saver(Companion_getInstance_2()), $this$Saver)]);
  }
  function TextIndentSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.get_c1px32_k$(0);
    var tmp2 = get_Saver(Companion_getInstance_2());
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.restore_fyjq85_k$(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof TextUnit) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.packedValue_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new TextUnit(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.packedValue_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new TextUnit(tmp_6));
    var tmp0_0 = list.get_c1px32_k$(1);
    var tmp2_0 = get_Saver(Companion_getInstance_2());
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp0_0, false)) {
        tmp_8 = !isInterface(tmp2_0, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (tmp0_0 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_10 = tmp2_0.restore_fyjq85_k$(tmp0_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof TextUnit) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.packedValue_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new TextUnit(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.packedValue_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    return new TextIndent_0(tmp_7.packedValue_1, ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15)).packedValue_1);
  }
  function FontWeightSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.get_weight_lbhkzl_k$();
  }
  function FontWeightSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new FontWeight(typeof it === 'number' ? it : THROW_CCE());
  }
  function BaselineShiftSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _BaselineShift___get_multiplier__impl__qhmjek(it.multiplier_1);
  }
  function BaselineShiftSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new BaselineShift(_BaselineShift___init__impl__scj05g(typeof it === 'number' ? it : THROW_CCE()));
  }
  function TextRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(_TextRange___get_start__impl__ww4t90(it.packedValue_1)), save(_TextRange___get_end__impl__gcdxpp(it.packedValue_1))]);
  }
  function TextRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.get_c1px32_k$(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    var tmp_0 = ensureNotNull(tmp$ret$2);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.get_c1px32_k$(1);
    var tmp_1;
    if (tmp0_safe_receiver_0 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = typeof tmp0_safe_receiver_0 === 'number' ? tmp0_safe_receiver_0 : THROW_CCE();
    }
    var tmp$ret$5 = tmp_1;
    return new TextRange(TextRange_1(tmp_0, ensureNotNull(tmp$ret$5)));
  }
  function ShadowSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new Color(it.get_color_lnp1vl_k$()), get_Saver_2(Companion_getInstance_0()), $this$Saver), save_0(new Offset(it.get_offset_slhc8e_k$()), get_Saver_9(Companion_getInstance_4()), $this$Saver), save(it.get_blurRadius_r8jo0y_k$())]);
  }
  function ShadowSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.get_c1px32_k$(0);
    var tmp2 = get_Saver_2(Companion_getInstance_0());
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.restore_fyjq85_k$(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof Color) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.value_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new Color(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.value_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6));
    var tmp0_0 = list.get_c1px32_k$(1);
    var tmp2_0 = get_Saver_9(Companion_getInstance_4());
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp0_0, false)) {
        tmp_8 = !isInterface(tmp2_0, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (tmp0_0 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_10 = tmp2_0.restore_fyjq85_k$(tmp0_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof Offset) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.packedValue_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new Offset(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.packedValue_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new Offset(tmp_15));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.get_c1px32_k$(2);
    var tmp_17;
    if (tmp0_safe_receiver == null) {
      tmp_17 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_17 = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$12 = tmp_17;
    return new Shadow(tmp_7.value_1, tmp_16.packedValue_1, ensureNotNull(tmp$ret$12));
  }
  function ColorSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isUnspecified' call
    var this_0 = it.value_1;
    if (equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = false;
    } else {
      tmp = toArgb(it.value_1);
    }
    return tmp;
  }
  function ColorSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_0().get_Unspecified_j397pn_k$();
    } else {
      tmp = Color_0(typeof it === 'number' ? it : THROW_CCE());
    }
    var tmp_0 = tmp;
    return tmp_0 == null ? null : new Color(tmp_0);
  }
  function TextUnitSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, new TextUnit(Companion_getInstance_2().get_Unspecified_r048kw_k$()))) {
      tmp = false;
    } else {
      tmp = arrayListOf([save(_TextUnit___get_value__impl__hpbx0k(it.packedValue_1)), save(new TextUnitType(_TextUnit___get_type__impl__uc2olt(it.packedValue_1)))]);
    }
    return tmp;
  }
  function TextUnitSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_2().get_Unspecified_r048kw_k$();
    } else {
      var list = isInterface(it, KtList) ? it : THROW_CCE();
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver = list.get_c1px32_k$(0);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
      }
      var tmp$ret$2 = tmp_0;
      var tmp_1 = ensureNotNull(tmp$ret$2);
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver_0 = list.get_c1px32_k$(1);
      var tmp_2;
      if (tmp0_safe_receiver_0 == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp_3 = tmp0_safe_receiver_0 instanceof TextUnitType ? tmp0_safe_receiver_0.type_1 : THROW_CCE();
        var tmp_4 = tmp_3 == null ? null : new TextUnitType(tmp_3);
        tmp_2 = tmp_4 == null ? null : tmp_4.type_1;
      }
      var tmp_5 = tmp_2;
      tmp = TextUnit_0(tmp_1, ensureNotNull(tmp_5 == null ? null : new TextUnitType(tmp_5)).type_1);
    }
    var tmp_6 = tmp;
    return tmp_6 == null ? null : new TextUnit(tmp_6);
  }
  function OffsetSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, new Offset(Companion_getInstance_4().get_Unspecified_gis8po_k$()))) {
      tmp = false;
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_0 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$3 = floatFromBits(bits);
      var tmp_0 = save(tmp$ret$3);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_1 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$7 = floatFromBits(bits_0);
      tmp = arrayListOf([tmp_0, save(tmp$ret$7)]);
    }
    return tmp;
  }
  function OffsetSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_4().get_Unspecified_gis8po_k$();
    } else {
      var list = isInterface(it, KtList) ? it : THROW_CCE();
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver = list.get_c1px32_k$(0);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
      }
      var tmp$ret$2 = tmp_0;
      var tmp0 = ensureNotNull(tmp$ret$2);
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver_0 = list.get_c1px32_k$(1);
      var tmp_1;
      if (tmp0_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_1 = typeof tmp0_safe_receiver_0 === 'number' ? tmp0_safe_receiver_0 : THROW_CCE();
      }
      var tmp$ret$5 = tmp_1;
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = ensureNotNull(tmp$ret$5);
      var v1 = fromInt(toRawBits(tmp0));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      tmp = _Offset___init__impl__c168vi(tmp$ret$6);
    }
    var tmp_2 = tmp;
    return tmp_2 == null ? null : new Offset(tmp_2);
  }
  function LocaleListSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = it.get_localeList_1gj9gh_k$();
    var target = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = save_0(item, get_Saver_10(Companion_getInstance_43()), $this$Saver);
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function LocaleListSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var target = ArrayList_init_$Create$_0(list.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = list.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.get_c1px32_k$(index);
        var tmp2 = get_Saver_10(Companion_getInstance_43());
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp;
          if (equals(item, false)) {
            tmp = !isInterface(tmp2, NonNullValueClassSaver);
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$0 = null;
            break $l$block;
          }
          var tmp_0;
          if (item == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_1 = tmp2.restore_fyjq85_k$(item);
            tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof Locale) ? tmp_1 : THROW_CCE();
          }
          tmp$ret$0 = tmp_0;
        }
        // Inline function 'kotlin.collections.plusAssign' call
        var element = ensureNotNull(tmp$ret$0);
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    return new LocaleList(target);
  }
  function LocaleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.toLanguageTag_xneel5_k$();
  }
  function LocaleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return Locale_init_$Create$(typeof it === 'string' ? it : THROW_CCE());
  }
  function LineHeightStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(new Alignment(it.get_alignment_l3cz3f_k$())), save(new Trim(it.get_trim_cyvk3v_k$())), save(new Mode(it.get_mode_7fbw4z_k$()))]);
  }
  function LineHeightStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.get_c1px32_k$(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp0_safe_receiver instanceof Alignment ? tmp0_safe_receiver.topRatio_1 : THROW_CCE();
      var tmp_1 = tmp_0 == null ? null : new Alignment(tmp_0);
      tmp = tmp_1 == null ? null : tmp_1.topRatio_1;
    }
    var tmp_2 = tmp;
    var tmp_3 = ensureNotNull(tmp_2 == null ? null : new Alignment(tmp_2));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.get_c1px32_k$(1);
    var tmp_4;
    if (tmp0_safe_receiver_0 == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_5 = tmp0_safe_receiver_0 instanceof Trim ? tmp0_safe_receiver_0.value_1 : THROW_CCE();
      var tmp_6 = tmp_5 == null ? null : new Trim(tmp_5);
      tmp_4 = tmp_6 == null ? null : tmp_6.value_1;
    }
    var tmp_7 = tmp_4;
    var tmp_8 = ensureNotNull(tmp_7 == null ? null : new Trim(tmp_7));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.get_c1px32_k$(2);
    var tmp_9;
    if (tmp0_safe_receiver_1 == null) {
      tmp_9 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_10 = tmp0_safe_receiver_1 instanceof Mode ? tmp0_safe_receiver_1.value_1 : THROW_CCE();
      var tmp_11 = tmp_10 == null ? null : new Mode(tmp_10);
      tmp_9 = tmp_11 == null ? null : tmp_11.value_1;
    }
    var tmp_12 = tmp_9;
    return new LineHeightStyle(tmp_3.topRatio_1, tmp_8.value_1, ensureNotNull(tmp_12 == null ? null : new Mode(tmp_12)).value_1);
  }
  function NonNullValueClassSaver$1($save, $restore) {
    this.$save_1 = $save;
    this.$restore_1 = $restore;
  }
  protoOf(NonNullValueClassSaver$1).save_khi2yu_k$ = function (_this__u8e3s4, value) {
    return this.$save_1(_this__u8e3s4, value);
  };
  protoOf(NonNullValueClassSaver$1).restore_fyjq85_k$ = function (value) {
    return this.$restore_1(value);
  };
  function AnnotationType_Paragraph_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Paragraph_instance;
  }
  function AnnotationType_Span_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Span_instance;
  }
  function AnnotationType_VerbatimTts_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_VerbatimTts_instance;
  }
  function AnnotationType_Url_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Url_instance;
  }
  function AnnotationType_Link_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Link_instance;
  }
  function AnnotationType_Clickable_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Clickable_instance;
  }
  function AnnotationType_String_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_String_instance;
  }
  var properties_initialized_Savers_kt_vjp8zk;
  function _init_properties_Savers_kt__o6r3ry() {
    if (!properties_initialized_Savers_kt_vjp8zk) {
      properties_initialized_Savers_kt_vjp8zk = true;
      var tmp = AnnotatedStringSaver$lambda;
      AnnotatedStringSaver = Saver_0(tmp, AnnotatedStringSaver$lambda_0);
      var tmp_0 = AnnotationRangeListSaver$lambda;
      AnnotationRangeListSaver = Saver_0(tmp_0, AnnotationRangeListSaver$lambda_0);
      var tmp_1 = AnnotationRangeSaver$lambda;
      AnnotationRangeSaver = Saver_0(tmp_1, AnnotationRangeSaver$lambda_0);
      var tmp_2 = VerbatimTtsAnnotationSaver$lambda;
      VerbatimTtsAnnotationSaver = Saver_0(tmp_2, VerbatimTtsAnnotationSaver$lambda_0);
      var tmp_3 = UrlAnnotationSaver$lambda;
      UrlAnnotationSaver = Saver_0(tmp_3, UrlAnnotationSaver$lambda_0);
      var tmp_4 = LinkSaver$lambda;
      LinkSaver = Saver_0(tmp_4, LinkSaver$lambda_0);
      var tmp_5 = ClickableSaver$lambda;
      ClickableSaver = Saver_0(tmp_5, ClickableSaver$lambda_0);
      var tmp_6 = ParagraphStyleSaver$lambda;
      ParagraphStyleSaver = Saver_0(tmp_6, ParagraphStyleSaver$lambda_0);
      var tmp_7 = SpanStyleSaver$lambda;
      SpanStyleSaver = Saver_0(tmp_7, SpanStyleSaver$lambda_0);
      var tmp_8 = TextLinkStylesSaver$lambda;
      TextLinkStylesSaver = Saver_0(tmp_8, TextLinkStylesSaver$lambda_0);
      var tmp_9 = TextDecorationSaver$lambda;
      TextDecorationSaver = Saver_0(tmp_9, TextDecorationSaver$lambda_0);
      var tmp_10 = TextGeometricTransformSaver$lambda;
      TextGeometricTransformSaver = Saver_0(tmp_10, TextGeometricTransformSaver$lambda_0);
      var tmp_11 = TextIndentSaver$lambda;
      TextIndentSaver = Saver_0(tmp_11, TextIndentSaver$lambda_0);
      var tmp_12 = FontWeightSaver$lambda;
      FontWeightSaver = Saver_0(tmp_12, FontWeightSaver$lambda_0);
      var tmp_13 = BaselineShiftSaver$lambda;
      BaselineShiftSaver = Saver_0(tmp_13, BaselineShiftSaver$lambda_0);
      var tmp_14 = TextRangeSaver$lambda;
      TextRangeSaver = Saver_0(tmp_14, TextRangeSaver$lambda_0);
      var tmp_15 = ShadowSaver$lambda;
      ShadowSaver = Saver_0(tmp_15, ShadowSaver$lambda_0);
      var tmp_16 = ColorSaver$lambda;
      ColorSaver = NonNullValueClassSaver_0(tmp_16, ColorSaver$lambda_0);
      var tmp_17 = TextUnitSaver$lambda;
      TextUnitSaver = NonNullValueClassSaver_0(tmp_17, TextUnitSaver$lambda_0);
      var tmp_18 = OffsetSaver$lambda;
      OffsetSaver = NonNullValueClassSaver_0(tmp_18, OffsetSaver$lambda_0);
      var tmp_19 = LocaleListSaver$lambda;
      LocaleListSaver = Saver_0(tmp_19, LocaleListSaver$lambda_0);
      var tmp_20 = LocaleSaver$lambda;
      LocaleSaver = Saver_0(tmp_20, LocaleSaver$lambda_0);
      var tmp_21 = LineHeightStyleSaver$lambda;
      LineHeightStyleSaver = Saver_0(tmp_21, LineHeightStyleSaver$lambda_0);
    }
  }
  function get_DefaultFontSize() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultFontSize;
  }
  var DefaultFontSize;
  function get_DefaultLetterSpacing() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultLetterSpacing;
  }
  var DefaultLetterSpacing;
  function get_DefaultBackgroundColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultBackgroundColor;
  }
  var DefaultBackgroundColor;
  function get_DefaultColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultColor;
  }
  var DefaultColor;
  function get_DefaultColorForegroundStyle() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultColorForegroundStyle;
  }
  var DefaultColorForegroundStyle;
  var androidx_compose_ui_text_SpanStyle$stable;
  function SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $this) {
    color = color === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : color;
    fontSize = fontSize === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    SpanStyle.call($this, Companion_getInstance_54().from_ccukrb_k$(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, null);
    return $this;
  }
  function SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow) {
    return SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $this) {
    color = color === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : color;
    fontSize = fontSize === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    SpanStyle.call($this, Companion_getInstance_54().from_ccukrb_k$(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle) {
    return SpanStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    color = color === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : color;
    fontSize = fontSize === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_getInstance_54().from_ccukrb_k$(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle_init_$Init$_2(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    alpha = alpha === VOID ? NaN : alpha;
    fontSize = fontSize === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_getInstance_54().from_6wp01d_k$(brush, alpha), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_2(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$_2(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle(textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    fontSize = fontSize === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    this.textForegroundStyle_1 = textForegroundStyle;
    this.fontSize_1 = fontSize;
    this.fontWeight_1 = fontWeight;
    this.fontStyle_1 = fontStyle;
    this.fontSynthesis_1 = fontSynthesis;
    this.fontFamily_1 = fontFamily;
    this.fontFeatureSettings_1 = fontFeatureSettings;
    this.letterSpacing_1 = letterSpacing;
    this.baselineShift_1 = baselineShift;
    this.textGeometricTransform_1 = textGeometricTransform;
    this.localeList_1 = localeList;
    this.background_1 = background;
    this.textDecoration_1 = textDecoration;
    this.shadow_1 = shadow;
    this.platformStyle_1 = platformStyle;
    this.drawStyle_1 = drawStyle;
  }
  protoOf(SpanStyle).get_textForegroundStyle_h1fi7n_k$ = function () {
    return this.textForegroundStyle_1;
  };
  protoOf(SpanStyle).get_fontSize_ergf2z_k$ = function () {
    return this.fontSize_1;
  };
  protoOf(SpanStyle).get_fontWeight_wbif2o_k$ = function () {
    return this.fontWeight_1;
  };
  protoOf(SpanStyle).get_fontStyle_hzv4zg_k$ = function () {
    return this.fontStyle_1;
  };
  protoOf(SpanStyle).get_fontSynthesis_h5auiy_k$ = function () {
    return this.fontSynthesis_1;
  };
  protoOf(SpanStyle).get_fontFamily_ulphcs_k$ = function () {
    return this.fontFamily_1;
  };
  protoOf(SpanStyle).get_fontFeatureSettings_a47533_k$ = function () {
    return this.fontFeatureSettings_1;
  };
  protoOf(SpanStyle).get_letterSpacing_k79xfu_k$ = function () {
    return this.letterSpacing_1;
  };
  protoOf(SpanStyle).get_baselineShift_99zyho_k$ = function () {
    return this.baselineShift_1;
  };
  protoOf(SpanStyle).get_textGeometricTransform_tdfmin_k$ = function () {
    return this.textGeometricTransform_1;
  };
  protoOf(SpanStyle).get_localeList_1gj9gh_k$ = function () {
    return this.localeList_1;
  };
  protoOf(SpanStyle).get_background_8l4942_k$ = function () {
    return this.background_1;
  };
  protoOf(SpanStyle).get_textDecoration_itgjwm_k$ = function () {
    return this.textDecoration_1;
  };
  protoOf(SpanStyle).get_shadow_jgtb8p_k$ = function () {
    return this.shadow_1;
  };
  protoOf(SpanStyle).get_platformStyle_7i053p_k$ = function () {
    return this.platformStyle_1;
  };
  protoOf(SpanStyle).get_drawStyle_arbehw_k$ = function () {
    return this.drawStyle_1;
  };
  protoOf(SpanStyle).get_color_lnp1vl_k$ = function () {
    return this.textForegroundStyle_1.get_color_lnp1vl_k$();
  };
  protoOf(SpanStyle).get_brush_ipcjyp_k$ = function () {
    return this.textForegroundStyle_1.get_brush_ipcjyp_k$();
  };
  protoOf(SpanStyle).get_alpha_iooth1_k$ = function () {
    return this.textForegroundStyle_1.get_alpha_iooth1_k$();
  };
  protoOf(SpanStyle).merge_ukwdud_k$ = function (other) {
    if (other == null)
      return this;
    return fastMerge_0(this, other.textForegroundStyle_1.get_color_lnp1vl_k$(), other.textForegroundStyle_1.get_brush_ipcjyp_k$(), other.textForegroundStyle_1.get_alpha_iooth1_k$(), other.fontSize_1, other.fontWeight_1, other.fontStyle_1, other.fontSynthesis_1, other.fontFamily_1, other.fontFeatureSettings_1, other.letterSpacing_1, other.baselineShift_1, other.textGeometricTransform_1, other.localeList_1, other.background_1, other.textDecoration_1, other.shadow_1, other.platformStyle_1, other.drawStyle_1);
  };
  protoOf(SpanStyle).merge$default_3d2h7u_k$ = function (other, $super) {
    other = other === VOID ? null : other;
    return $super === VOID ? this.merge_ukwdud_k$(other) : $super.merge_ukwdud_k$.call(this, other);
  };
  protoOf(SpanStyle).plus_46nmkk_k$ = function (other) {
    return this.merge_ukwdud_k$(other);
  };
  protoOf(SpanStyle).copy_dpnny7_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow) {
    var tmp;
    if (equals(color, this.get_color_lnp1vl_k$())) {
      tmp = this.textForegroundStyle_1;
    } else {
      tmp = Companion_getInstance_54().from_ccukrb_k$(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, this.platformStyle_1, this.drawStyle_1);
  };
  protoOf(SpanStyle).copy$default_fcgw7b_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $super) {
    color = color === VOID ? this.get_color_lnp1vl_k$() : color;
    fontSize = fontSize === VOID ? this.fontSize_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.fontWeight_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.fontStyle_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.fontSynthesis_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.fontFamily_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.fontFeatureSettings_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.letterSpacing_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.baselineShift_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.textGeometricTransform_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.localeList_1 : localeList;
    background = background === VOID ? this.background_1 : background;
    textDecoration = textDecoration === VOID ? this.textDecoration_1 : textDecoration;
    shadow = shadow === VOID ? this.shadow_1 : shadow;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_dpnny7_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow);
    } else {
      var tmp_0 = $super.copy_dpnny7_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow);
    }
    return tmp;
  };
  protoOf(SpanStyle).copy_y2sgus_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle) {
    var tmp;
    if (equals(color, this.get_color_lnp1vl_k$())) {
      tmp = this.textForegroundStyle_1;
    } else {
      tmp = Companion_getInstance_54().from_ccukrb_k$(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle);
  };
  protoOf(SpanStyle).copy$default_rqd6h7_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $super) {
    color = color === VOID ? this.get_color_lnp1vl_k$() : color;
    fontSize = fontSize === VOID ? this.fontSize_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.fontWeight_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.fontStyle_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.fontSynthesis_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.fontFamily_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.fontFeatureSettings_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.letterSpacing_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.baselineShift_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.textGeometricTransform_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.localeList_1 : localeList;
    background = background === VOID ? this.background_1 : background;
    textDecoration = textDecoration === VOID ? this.textDecoration_1 : textDecoration;
    shadow = shadow === VOID ? this.shadow_1 : shadow;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_y2sgus_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle);
    } else {
      var tmp_0 = $super.copy_y2sgus_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, platformStyle);
    }
    return tmp;
  };
  protoOf(SpanStyle).copy_9s287b_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    var tmp;
    if (equals(color, this.get_color_lnp1vl_k$())) {
      tmp = this.textForegroundStyle_1;
    } else {
      tmp = Companion_getInstance_54().from_ccukrb_k$(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
  };
  protoOf(SpanStyle).copy$default_ihj4g5_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $super) {
    color = color === VOID ? this.get_color_lnp1vl_k$() : color;
    fontSize = fontSize === VOID ? this.fontSize_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.fontWeight_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.fontStyle_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.fontSynthesis_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.fontFamily_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.fontFeatureSettings_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.letterSpacing_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.baselineShift_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.textGeometricTransform_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.localeList_1 : localeList;
    background = background === VOID ? this.background_1 : background;
    textDecoration = textDecoration === VOID ? this.textDecoration_1 : textDecoration;
    shadow = shadow === VOID ? this.shadow_1 : shadow;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    drawStyle = drawStyle === VOID ? this.drawStyle_1 : drawStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_9s287b_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    } else {
      var tmp_0 = $super.copy_9s287b_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, platformStyle, drawStyle);
    }
    return tmp;
  };
  protoOf(SpanStyle).copy_u3yo19_k$ = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return new SpanStyle(Companion_getInstance_54().from_6wp01d_k$(brush, alpha), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
  };
  protoOf(SpanStyle).copy$default_g02t27_k$ = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $super) {
    alpha = alpha === VOID ? this.get_alpha_iooth1_k$() : alpha;
    fontSize = fontSize === VOID ? this.fontSize_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.fontWeight_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.fontStyle_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.fontSynthesis_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.fontFamily_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.fontFeatureSettings_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.letterSpacing_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.baselineShift_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.textGeometricTransform_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.localeList_1 : localeList;
    background = background === VOID ? this.background_1 : background;
    textDecoration = textDecoration === VOID ? this.textDecoration_1 : textDecoration;
    shadow = shadow === VOID ? this.shadow_1 : shadow;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    drawStyle = drawStyle === VOID ? this.drawStyle_1 : drawStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_u3yo19_k$(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    } else {
      var tmp_0 = $super.copy_u3yo19_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, brush, alpha, new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, platformStyle, drawStyle);
    }
    return tmp;
  };
  protoOf(SpanStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpanStyle))
      return false;
    return this.hasSameLayoutAffectingAttributes_tm1ym7_k$(other) && this.hasSameNonLayoutAttributes_jdejzn_k$(other);
  };
  protoOf(SpanStyle).hasSameLayoutAffectingAttributes_tm1ym7_k$ = function (other) {
    if (this === other)
      return true;
    if (!equals(this.fontSize_1, other.fontSize_1))
      return false;
    if (!equals(this.fontWeight_1, other.fontWeight_1))
      return false;
    var tmp = this.fontStyle_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = other.fontStyle_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.fontSynthesis_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = other.fontSynthesis_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.fontFamily_1, other.fontFamily_1))
      return false;
    if (!(this.fontFeatureSettings_1 == other.fontFeatureSettings_1))
      return false;
    if (!equals(this.letterSpacing_1, other.letterSpacing_1))
      return false;
    var tmp_5 = this.baselineShift_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = other.baselineShift_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.textGeometricTransform_1, other.textGeometricTransform_1))
      return false;
    if (!equals(this.localeList_1, other.localeList_1))
      return false;
    if (!equals(this.background_1, other.background_1))
      return false;
    if (!equals(this.platformStyle_1, other.platformStyle_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).hasSameNonLayoutAttributes_jdejzn_k$ = function (other) {
    if (!equals(this.textForegroundStyle_1, other.textForegroundStyle_1))
      return false;
    if (!equals(this.textDecoration_1, other.textDecoration_1))
      return false;
    if (!equals(this.shadow_1, other.shadow_1))
      return false;
    if (!equals(this.drawStyle_1, other.drawStyle_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.get_color_lnp1vl_k$());
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.get_brush_ipcjyp_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.get_alpha_iooth1_k$()) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.fontSize_1) | 0;
    var tmp_0 = imul(31, result);
    var tmp0_safe_receiver_0 = this.fontWeight_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.hashCode();
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.fontStyle_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = FontStyle__hashCode_impl_7qhg4w(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.fontSynthesis_1;
    var tmp_5;
    var tmp_6 = tmp4_safe_receiver;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = null;
    } else {
      tmp_5 = FontSynthesis__hashCode_impl_4wi11v(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp6_safe_receiver = this.fontFamily_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_7 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_8 = imul(31, result);
    var tmp8_safe_receiver = this.fontFeatureSettings_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_8 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.letterSpacing_1) | 0;
    var tmp_9 = imul(31, result);
    var tmp10_safe_receiver = this.baselineShift_1;
    var tmp_10;
    var tmp_11 = tmp10_safe_receiver;
    if ((tmp_11 == null ? null : new BaselineShift(tmp_11)) == null) {
      tmp_10 = null;
    } else {
      tmp_10 = BaselineShift__hashCode_impl_g0potx(tmp10_safe_receiver);
    }
    var tmp11_elvis_lhs = tmp_10;
    result = tmp_9 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_12 = imul(31, result);
    var tmp12_safe_receiver = this.textGeometricTransform_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_12 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.localeList_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.background_1) | 0;
    var tmp_14 = imul(31, result);
    var tmp16_safe_receiver = this.textDecoration_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_14 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    var tmp_15 = imul(31, result);
    var tmp18_safe_receiver = this.shadow_1;
    var tmp19_elvis_lhs = tmp18_safe_receiver == null ? null : tmp18_safe_receiver.hashCode();
    result = tmp_15 + (tmp19_elvis_lhs == null ? 0 : tmp19_elvis_lhs) | 0;
    var tmp_16 = imul(31, result);
    var tmp20_safe_receiver = this.platformStyle_1;
    var tmp21_elvis_lhs = tmp20_safe_receiver == null ? null : tmp20_safe_receiver.hashCode();
    result = tmp_16 + (tmp21_elvis_lhs == null ? 0 : tmp21_elvis_lhs) | 0;
    var tmp_17 = imul(31, result);
    var tmp22_safe_receiver = this.drawStyle_1;
    var tmp23_elvis_lhs = tmp22_safe_receiver == null ? null : hashCode(tmp22_safe_receiver);
    result = tmp_17 + (tmp23_elvis_lhs == null ? 0 : tmp23_elvis_lhs) | 0;
    return result;
  };
  protoOf(SpanStyle).hashCodeLayoutAffectingAttributes_u2p6xm_k$ = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.fontSize_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.fontWeight_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.fontStyle_1;
    var tmp_1;
    var tmp_2 = tmp2_safe_receiver;
    if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
      tmp_1 = null;
    } else {
      tmp_1 = FontStyle__hashCode_impl_7qhg4w(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_1;
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_3 = imul(31, result);
    var tmp4_safe_receiver = this.fontSynthesis_1;
    var tmp_4;
    var tmp_5 = tmp4_safe_receiver;
    if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
      tmp_4 = null;
    } else {
      tmp_4 = FontSynthesis__hashCode_impl_4wi11v(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_4;
    result = tmp_3 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_6 = imul(31, result);
    var tmp6_safe_receiver = this.fontFamily_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_6 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp8_safe_receiver = this.fontFeatureSettings_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_7 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.letterSpacing_1) | 0;
    var tmp_8 = imul(31, result);
    var tmp10_safe_receiver = this.baselineShift_1;
    var tmp_9;
    var tmp_10 = tmp10_safe_receiver;
    if ((tmp_10 == null ? null : new BaselineShift(tmp_10)) == null) {
      tmp_9 = null;
    } else {
      tmp_9 = BaselineShift__hashCode_impl_g0potx(tmp10_safe_receiver);
    }
    var tmp11_elvis_lhs = tmp_9;
    result = tmp_8 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_11 = imul(31, result);
    var tmp12_safe_receiver = this.textGeometricTransform_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_11 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_12 = imul(31, result);
    var tmp14_safe_receiver = this.localeList_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_12 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.background_1) | 0;
    var tmp_13 = imul(31, result);
    var tmp16_safe_receiver = this.platformStyle_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_13 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    return result;
  };
  protoOf(SpanStyle).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    this_0.append_22ad7x_k$('SpanStyle(');
    this_0.append_22ad7x_k$('color=' + Color__toString_impl_hpzmaq(this.get_color_lnp1vl_k$()) + ', ');
    this_0.append_22ad7x_k$('brush=' + toString(this.get_brush_ipcjyp_k$()) + ', ');
    this_0.append_22ad7x_k$('alpha=' + this.get_alpha_iooth1_k$() + ', ');
    this_0.append_22ad7x_k$('fontSize=' + TextUnit__toString_impl_51ghw0(this.fontSize_1) + ', ');
    this_0.append_22ad7x_k$('fontWeight=' + toString(this.fontWeight_1) + ', ');
    var tmp = this.fontStyle_1;
    this_0.append_22ad7x_k$('fontStyle=' + toString(tmp == null ? null : new FontStyle(tmp)) + ', ');
    var tmp_0 = this.fontSynthesis_1;
    this_0.append_22ad7x_k$('fontSynthesis=' + toString(tmp_0 == null ? null : new FontSynthesis(tmp_0)) + ', ');
    this_0.append_22ad7x_k$('fontFamily=' + toString(this.fontFamily_1) + ', ');
    this_0.append_22ad7x_k$('fontFeatureSettings=' + this.fontFeatureSettings_1 + ', ');
    this_0.append_22ad7x_k$('letterSpacing=' + TextUnit__toString_impl_51ghw0(this.letterSpacing_1) + ', ');
    var tmp_1 = this.baselineShift_1;
    this_0.append_22ad7x_k$('baselineShift=' + toString(tmp_1 == null ? null : new BaselineShift(tmp_1)) + ', ');
    this_0.append_22ad7x_k$('textGeometricTransform=' + toString(this.textGeometricTransform_1) + ', ');
    this_0.append_22ad7x_k$('localeList=' + toString(this.localeList_1) + ', ');
    this_0.append_22ad7x_k$('background=' + Color__toString_impl_hpzmaq(this.background_1) + ', ');
    this_0.append_22ad7x_k$('textDecoration=' + toString(this.textDecoration_1) + ', ');
    this_0.append_22ad7x_k$('shadow=' + toString(this.shadow_1) + ', ');
    this_0.append_22ad7x_k$('platformStyle=' + toString(this.platformStyle_1) + ', ');
    this_0.append_22ad7x_k$('drawStyle=' + toString(this.drawStyle_1));
    this_0.append_22ad7x_k$(')');
    return this_0.toString();
  };
  function fastMerge_0(_this__u8e3s4, color, brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    var tmp_8;
    var tmp_9;
    var tmp_10;
    var tmp_11;
    var tmp_12;
    var tmp_13;
    var tmp_14;
    var tmp_15;
    var tmp_16;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(fontSize), new Long(0, 0))) {
      tmp_16 = !equals(fontSize, _this__u8e3s4.fontSize_1);
    } else {
      tmp_16 = false;
    }
    if (tmp_16) {
      tmp_15 = true;
    } else {
      var tmp_17;
      var tmp_18;
      if (brush == null) {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        tmp_18 = !equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)));
      } else {
        tmp_18 = false;
      }
      if (tmp_18) {
        tmp_17 = !equals(color, _this__u8e3s4.textForegroundStyle_1.get_color_lnp1vl_k$());
      } else {
        tmp_17 = false;
      }
      tmp_15 = tmp_17;
    }
    if (tmp_15) {
      tmp_14 = true;
    } else {
      var tmp_19;
      var tmp_20 = fontStyle;
      if (!((tmp_20 == null ? null : new FontStyle(tmp_20)) == null)) {
        var tmp_21 = fontStyle;
        var tmp_22 = tmp_21 == null ? null : new FontStyle(tmp_21);
        var tmp_23 = _this__u8e3s4.fontStyle_1;
        tmp_19 = !equals(tmp_22, tmp_23 == null ? null : new FontStyle(tmp_23));
      } else {
        tmp_19 = false;
      }
      tmp_14 = tmp_19;
    }
    if (tmp_14) {
      tmp_13 = true;
    } else {
      tmp_13 = (!(fontWeight == null) && !equals(fontWeight, _this__u8e3s4.fontWeight_1));
    }
    if (tmp_13) {
      tmp_12 = true;
    } else {
      tmp_12 = (!(fontFamily == null) && !(fontFamily === _this__u8e3s4.fontFamily_1));
    }
    if (tmp_12) {
      tmp_11 = true;
    } else {
      var tmp_24;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(letterSpacing), new Long(0, 0))) {
        tmp_24 = !equals(letterSpacing, _this__u8e3s4.letterSpacing_1);
      } else {
        tmp_24 = false;
      }
      tmp_11 = tmp_24;
    }
    if (tmp_11) {
      tmp_10 = true;
    } else {
      tmp_10 = (!(textDecoration == null) && !equals(textDecoration, _this__u8e3s4.textDecoration_1));
    }
    if (tmp_10) {
      tmp_9 = true;
    } else {
      tmp_9 = !equals(brush, _this__u8e3s4.textForegroundStyle_1.get_brush_ipcjyp_k$());
    }
    if (tmp_9) {
      tmp_8 = true;
    } else {
      tmp_8 = (!(brush == null) && !(alpha === _this__u8e3s4.textForegroundStyle_1.get_alpha_iooth1_k$()));
    }
    if (tmp_8) {
      tmp_7 = true;
    } else {
      var tmp_25;
      var tmp_26 = fontSynthesis;
      if (!((tmp_26 == null ? null : new FontSynthesis(tmp_26)) == null)) {
        var tmp_27 = fontSynthesis;
        var tmp_28 = tmp_27 == null ? null : new FontSynthesis(tmp_27);
        var tmp_29 = _this__u8e3s4.fontSynthesis_1;
        tmp_25 = !equals(tmp_28, tmp_29 == null ? null : new FontSynthesis(tmp_29));
      } else {
        tmp_25 = false;
      }
      tmp_7 = tmp_25;
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      tmp_6 = (!(fontFeatureSettings == null) && !(fontFeatureSettings == _this__u8e3s4.fontFeatureSettings_1));
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      var tmp_30;
      var tmp_31 = baselineShift;
      if (!((tmp_31 == null ? null : new BaselineShift(tmp_31)) == null)) {
        var tmp_32 = baselineShift;
        var tmp_33 = tmp_32 == null ? null : new BaselineShift(tmp_32);
        var tmp_34 = _this__u8e3s4.baselineShift_1;
        tmp_30 = !equals(tmp_33, tmp_34 == null ? null : new BaselineShift(tmp_34));
      } else {
        tmp_30 = false;
      }
      tmp_5 = tmp_30;
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = (!(textGeometricTransform == null) && !equals(textGeometricTransform, _this__u8e3s4.textGeometricTransform_1));
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = (!(localeList == null) && !equals(localeList, _this__u8e3s4.localeList_1));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      var tmp_35;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(background), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
        tmp_35 = !equals(background, _this__u8e3s4.background_1);
      } else {
        tmp_35 = false;
      }
      tmp_2 = tmp_35;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = (!(shadow == null) && !equals(shadow, _this__u8e3s4.shadow_1));
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = (!(platformStyle == null) && !equals(platformStyle, _this__u8e3s4.platformStyle_1));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = (!(drawStyle == null) && !equals(drawStyle, _this__u8e3s4.drawStyle_1));
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_36;
    if (!(brush == null)) {
      tmp_36 = Companion_getInstance_54().from_6wp01d_k$(brush, alpha);
    } else {
      tmp_36 = Companion_getInstance_54().from_ccukrb_k$(color);
    }
    var otherTextForegroundStyle = tmp_36;
    var tmp11_textForegroundStyle = _this__u8e3s4.textForegroundStyle_1.merge_b7txoj_k$(otherTextForegroundStyle);
    var tmp12_fontFamily = fontFamily == null ? _this__u8e3s4.fontFamily_1 : fontFamily;
    var tmp_37;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(fontSize), new Long(0, 0))) {
      tmp_37 = fontSize;
    } else {
      tmp_37 = _this__u8e3s4.fontSize_1;
    }
    var tmp13_fontSize = tmp_37;
    var tmp14_fontWeight = fontWeight == null ? _this__u8e3s4.fontWeight_1 : fontWeight;
    var tmp_38;
    var tmp_39 = fontStyle;
    if ((tmp_39 == null ? null : new FontStyle(tmp_39)) == null) {
      tmp_38 = _this__u8e3s4.fontStyle_1;
    } else {
      tmp_38 = fontStyle;
    }
    var tmp15_fontStyle = tmp_38;
    var tmp_40;
    var tmp_41 = fontSynthesis;
    if ((tmp_41 == null ? null : new FontSynthesis(tmp_41)) == null) {
      tmp_40 = _this__u8e3s4.fontSynthesis_1;
    } else {
      tmp_40 = fontSynthesis;
    }
    var tmp16_fontSynthesis = tmp_40;
    var tmp17_fontFeatureSettings = fontFeatureSettings == null ? _this__u8e3s4.fontFeatureSettings_1 : fontFeatureSettings;
    var tmp_42;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(letterSpacing), new Long(0, 0))) {
      tmp_42 = letterSpacing;
    } else {
      tmp_42 = _this__u8e3s4.letterSpacing_1;
    }
    var tmp18_letterSpacing = tmp_42;
    var tmp_43;
    var tmp_44 = baselineShift;
    if ((tmp_44 == null ? null : new BaselineShift(tmp_44)) == null) {
      tmp_43 = _this__u8e3s4.baselineShift_1;
    } else {
      tmp_43 = baselineShift;
    }
    var tmp19_baselineShift = tmp_43;
    var tmp20_textGeometricTransform = textGeometricTransform == null ? _this__u8e3s4.textGeometricTransform_1 : textGeometricTransform;
    var tmp21_localeList = localeList == null ? _this__u8e3s4.localeList_1 : localeList;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_45;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(background), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_45 = background;
    } else {
      tmp_45 = _this__u8e3s4.background_1;
    }
    var tmp22_background = tmp_45;
    var tmp23_textDecoration = textDecoration == null ? _this__u8e3s4.textDecoration_1 : textDecoration;
    var tmp24_shadow = shadow == null ? _this__u8e3s4.shadow_1 : shadow;
    var tmp25_platformStyle = mergePlatformStyle_0(_this__u8e3s4, platformStyle);
    var tmp26_drawStyle = drawStyle == null ? _this__u8e3s4.drawStyle_1 : drawStyle;
    return new SpanStyle(tmp11_textForegroundStyle, tmp13_fontSize, tmp14_fontWeight, tmp15_fontStyle, tmp16_fontSynthesis, tmp12_fontFamily, tmp17_fontFeatureSettings, tmp18_letterSpacing, tmp19_baselineShift, tmp20_textGeometricTransform, tmp21_localeList, tmp22_background, tmp23_textDecoration, tmp24_shadow, tmp25_platformStyle, tmp26_drawStyle);
  }
  function mergePlatformStyle_0(_this__u8e3s4, other) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (_this__u8e3s4.platformStyle_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.platformStyle_1;
    return _this__u8e3s4.platformStyle_1.merge_ap0tcl_k$(other);
  }
  function lerp_5(start, stop, fraction) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp8_textForegroundStyle = lerp_9(start.textForegroundStyle_1, stop.textForegroundStyle_1, fraction);
    var tmp9_fontFamily = lerpDiscrete(start.fontFamily_1, stop.fontFamily_1, fraction);
    var tmp10_fontSize = lerpTextUnitInheritable(start.fontSize_1, stop.fontSize_1, fraction);
    var tmp0_elvis_lhs = start.fontWeight_1;
    var tmp = tmp0_elvis_lhs == null ? Companion_getInstance_33().get_Normal_22avww_k$() : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = stop.fontWeight_1;
    var tmp11_fontWeight = lerp_7(tmp, tmp1_elvis_lhs == null ? Companion_getInstance_33().get_Normal_22avww_k$() : tmp1_elvis_lhs, fraction);
    var tmp_0 = start.fontStyle_1;
    var tmp_1 = tmp_0 == null ? null : new FontStyle(tmp_0);
    var tmp_2 = stop.fontStyle_1;
    var tmp_3 = lerpDiscrete(tmp_1, tmp_2 == null ? null : new FontStyle(tmp_2), fraction);
    var tmp12_fontStyle = tmp_3 == null ? null : tmp_3.value_1;
    var tmp_4 = start.fontSynthesis_1;
    var tmp_5 = tmp_4 == null ? null : new FontSynthesis(tmp_4);
    var tmp_6 = stop.fontSynthesis_1;
    var tmp_7 = lerpDiscrete(tmp_5, tmp_6 == null ? null : new FontSynthesis(tmp_6), fraction);
    var tmp13_fontSynthesis = tmp_7 == null ? null : tmp_7.value_1;
    var tmp14_fontFeatureSettings = lerpDiscrete(start.fontFeatureSettings_1, stop.fontFeatureSettings_1, fraction);
    var tmp15_letterSpacing = lerpTextUnitInheritable(start.letterSpacing_1, stop.letterSpacing_1, fraction);
    var tmp2_elvis_lhs = start.baselineShift_1;
    var tmp_8;
    var tmp_9 = tmp2_elvis_lhs;
    if ((tmp_9 == null ? null : new BaselineShift(tmp_9)) == null) {
      tmp_8 = _BaselineShift___init__impl__scj05g(0.0);
    } else {
      tmp_8 = tmp2_elvis_lhs;
    }
    var tmp_10 = tmp_8;
    var tmp3_elvis_lhs = stop.baselineShift_1;
    var tmp_11;
    var tmp_12 = tmp3_elvis_lhs;
    if ((tmp_12 == null ? null : new BaselineShift(tmp_12)) == null) {
      tmp_11 = _BaselineShift___init__impl__scj05g(0.0);
    } else {
      tmp_11 = tmp3_elvis_lhs;
    }
    var tmp16_baselineShift = lerp_8(tmp_10, tmp_11, fraction);
    var tmp4_elvis_lhs = start.textGeometricTransform_1;
    var tmp_13 = tmp4_elvis_lhs == null ? Companion_getInstance_55().get_None_lmdhj0_k$() : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = stop.textGeometricTransform_1;
    var tmp17_textGeometricTransform = lerp_10(tmp_13, tmp5_elvis_lhs == null ? Companion_getInstance_55().get_None_lmdhj0_k$() : tmp5_elvis_lhs, fraction);
    var tmp18_localeList = lerpDiscrete(start.localeList_1, stop.localeList_1, fraction);
    var tmp19_background = lerp(start.background_1, stop.background_1, fraction);
    var tmp20_textDecoration = lerpDiscrete(start.textDecoration_1, stop.textDecoration_1, fraction);
    var tmp6_elvis_lhs = start.shadow_1;
    var tmp_14 = tmp6_elvis_lhs == null ? new Shadow() : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = stop.shadow_1;
    var tmp21_shadow = lerp_0(tmp_14, tmp7_elvis_lhs == null ? new Shadow() : tmp7_elvis_lhs, fraction);
    var tmp22_platformStyle = lerpPlatformStyle_0(start.platformStyle_1, stop.platformStyle_1, fraction);
    var tmp23_drawStyle = lerpDiscrete(start.drawStyle_1, stop.drawStyle_1, fraction);
    return new SpanStyle(tmp8_textForegroundStyle, tmp10_fontSize, tmp11_fontWeight, tmp12_fontStyle, tmp13_fontSynthesis, tmp9_fontFamily, tmp14_fontFeatureSettings, tmp15_letterSpacing, tmp16_baselineShift, tmp17_textGeometricTransform, tmp18_localeList, tmp19_background, tmp20_textDecoration, tmp21_shadow, tmp22_platformStyle, tmp23_drawStyle);
  }
  function resolveSpanStyleDefaults(style) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp = style.textForegroundStyle_1.takeOrElse_vujaw_k$(resolveSpanStyleDefaults$lambda);
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = style.fontSize_1;
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0))) {
      tmp_0 = get_DefaultFontSize();
    } else {
      tmp_0 = style.fontSize_1;
    }
    var tmp_1 = tmp_0;
    var tmp0_elvis_lhs = style.fontWeight_1;
    var tmp_2 = tmp0_elvis_lhs == null ? Companion_getInstance_33().get_Normal_22avww_k$() : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.fontStyle_1;
    var tmp_3;
    var tmp_4 = tmp1_elvis_lhs;
    if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
      tmp_3 = Companion_getInstance_31().get_Normal_tevh6u_k$();
    } else {
      tmp_3 = tmp1_elvis_lhs;
    }
    var tmp_5 = tmp_3;
    var tmp2_elvis_lhs = style.fontSynthesis_1;
    var tmp_6;
    var tmp_7 = tmp2_elvis_lhs;
    if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
      tmp_6 = Companion_getInstance_32().get_All_bqi34r_k$();
    } else {
      tmp_6 = tmp2_elvis_lhs;
    }
    var tmp_8 = tmp_6;
    var tmp3_elvis_lhs = style.fontFamily_1;
    var tmp_9 = tmp3_elvis_lhs == null ? Companion_getInstance_27().get_Default_goqax4_k$() : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = style.fontFeatureSettings_1;
    var tmp_10 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_11;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_1 = style.letterSpacing_1;
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_1), new Long(0, 0))) {
      tmp_11 = get_DefaultLetterSpacing();
    } else {
      tmp_11 = style.letterSpacing_1;
    }
    var tmp_12 = tmp_11;
    var tmp5_elvis_lhs = style.baselineShift_1;
    var tmp_13;
    var tmp_14 = tmp5_elvis_lhs;
    if ((tmp_14 == null ? null : new BaselineShift(tmp_14)) == null) {
      tmp_13 = Companion_getInstance_45().get_None_9kuyzu_k$();
    } else {
      tmp_13 = tmp5_elvis_lhs;
    }
    var tmp_15 = tmp_13;
    var tmp6_elvis_lhs = style.textGeometricTransform_1;
    var tmp_16 = tmp6_elvis_lhs == null ? Companion_getInstance_55().get_None_lmdhj0_k$() : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = style.localeList_1;
    var tmp_17 = tmp7_elvis_lhs == null ? Companion_getInstance_44().get_current_jwi6j4_k$() : tmp7_elvis_lhs;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var this_2 = style.background_1;
    var tmp_18;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(this_2), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_18 = this_2;
    } else {
      tmp_18 = get_DefaultBackgroundColor();
    }
    var tmp_19 = tmp_18;
    var tmp8_elvis_lhs = style.textDecoration_1;
    var tmp_20 = tmp8_elvis_lhs == null ? Companion_getInstance_52().get_None_wo6tgh_k$() : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = style.shadow_1;
    var tmp_21 = tmp9_elvis_lhs == null ? Companion_getInstance_3().get_None_wo6tgh_k$() : tmp9_elvis_lhs;
    var tmp10_elvis_lhs = style.drawStyle_1;
    return new SpanStyle(tmp, tmp_1, tmp_2, tmp_5, tmp_8, tmp_9, tmp_10, tmp_12, tmp_15, tmp_16, tmp_17, tmp_19, tmp_20, tmp_21, style.platformStyle_1, tmp10_elvis_lhs == null ? Fill_getInstance() : tmp10_elvis_lhs);
  }
  function lerpDiscrete(a, b, fraction) {
    _init_properties_SpanStyle_kt__ixg4k5();
    return fraction < 0.5 ? a : b;
  }
  function lerpTextUnitInheritable(a, b, t) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(a), new Long(0, 0))) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      tmp = equalsLong(_TextUnit___get_rawType__impl__tu8yq5(b), new Long(0, 0));
    }
    if (tmp)
      return lerpDiscrete(new TextUnit(a), new TextUnit(b), t).packedValue_1;
    return lerp_1(a, b, t);
  }
  function lerpPlatformStyle_0(start, stop, fraction) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (start == null && stop == null)
      return null;
    var startNonNull = start == null ? Companion_getInstance_62().get_Default_goqax4_k$() : start;
    var stopNonNull = stop == null ? Companion_getInstance_62().get_Default_goqax4_k$() : stop;
    return lerp_13(startNonNull, stopNonNull, fraction);
  }
  function resolveSpanStyleDefaults$lambda() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return get_DefaultColorForegroundStyle();
  }
  var properties_initialized_SpanStyle_kt_cqbdlj;
  function _init_properties_SpanStyle_kt__ixg4k5() {
    if (!properties_initialized_SpanStyle_kt_cqbdlj) {
      properties_initialized_SpanStyle_kt_cqbdlj = true;
      DefaultFontSize = get_sp_0(14);
      DefaultLetterSpacing = get_sp_0(0);
      DefaultBackgroundColor = Companion_getInstance_0().get_Transparent_if5ln4_k$();
      DefaultColor = Companion_getInstance_0().get_Black_t4k9fh_k$();
      DefaultColorForegroundStyle = Companion_getInstance_54().from_ccukrb_k$(get_DefaultColor());
      androidx_compose_ui_text_SpanStyle$stable = 0;
    }
  }
  function get_stringDelegate() {
    _init_properties_String_kt__y65ngv();
    return stringDelegate;
  }
  var stringDelegate;
  function PlatformStringDelegate() {
  }
  var properties_initialized_String_kt_x0nxsd;
  function _init_properties_String_kt__y65ngv() {
    if (!properties_initialized_String_kt_x0nxsd) {
      properties_initialized_String_kt_x0nxsd = true;
      stringDelegate = ActualStringDelegate();
    }
  }
  function _StringAnnotation___init__impl__o6a5i7(value) {
    return value;
  }
  function _StringAnnotation___get_value__impl__v4s4ej($this) {
    return $this;
  }
  function StringAnnotation__toString_impl_xnbt1d($this) {
    return 'StringAnnotation(value=' + $this + ')';
  }
  function StringAnnotation__hashCode_impl_bw5w8i($this) {
    return getStringHashCode($this);
  }
  function StringAnnotation__equals_impl_ro6p8u($this, other) {
    if (!(other instanceof StringAnnotation))
      return false;
    if (!($this === (other instanceof StringAnnotation ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StringAnnotation(value) {
    this.value_1 = value;
  }
  protoOf(StringAnnotation).toString = function () {
    return StringAnnotation__toString_impl_xnbt1d(this.value_1);
  };
  protoOf(StringAnnotation).hashCode = function () {
    return StringAnnotation__hashCode_impl_bw5w8i(this.value_1);
  };
  protoOf(StringAnnotation).equals = function (other) {
    return StringAnnotation__equals_impl_ro6p8u(this.value_1, other);
  };
  function unbox(_this__u8e3s4) {
    var tmp = _this__u8e3s4.get_item_woo5lo_k$();
    return new Range(_StringAnnotation___get_value__impl__v4s4ej(tmp instanceof StringAnnotation ? tmp.value_1 : THROW_CCE()), _this__u8e3s4.get_start_iypx6h_k$(), _this__u8e3s4.get_end_18j6ha_k$(), _this__u8e3s4.get_tag_18ivnz_k$());
  }
  function _TextGranularity___init__impl__8iouug(value) {
    return value;
  }
  function _get_value__a43j40_0($this) {
    return $this;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.Character_1 = _TextGranularity___init__impl__8iouug(0);
    this.Word_1 = _TextGranularity___init__impl__8iouug(1);
  }
  protoOf(Companion_3).get_Character_n9bw93_k$ = function () {
    return this.Character_1;
  };
  protoOf(Companion_3).get_Word_3rezp6_k$ = function () {
    return this.Word_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_20() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function TextGranularity__toString_impl_o5vx7k($this) {
    return 'TextGranularity(value=' + $this + ')';
  }
  function TextGranularity__hashCode_impl_p427yp($this) {
    return $this;
  }
  function TextGranularity__equals_impl_7sjloz($this, other) {
    if (!(other instanceof TextGranularity))
      return false;
    if (!($this === (other instanceof TextGranularity ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextGranularity(value) {
    Companion_getInstance_20();
    this.value_1 = value;
  }
  protoOf(TextGranularity).toString = function () {
    return TextGranularity__toString_impl_o5vx7k(this.value_1);
  };
  protoOf(TextGranularity).hashCode = function () {
    return TextGranularity__hashCode_impl_p427yp(this.value_1);
  };
  protoOf(TextGranularity).equals = function (other) {
    return TextGranularity__equals_impl_7sjloz(this.value_1, other);
  };
  function sam$androidx_compose_ui_text_TextInclusionStrategy$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_text_TextInclusionStrategy$0).isIncluded_mfhuca_k$ = function (textBounds, rect) {
    return this.function_1(textBounds, rect);
  };
  protoOf(sam$androidx_compose_ui_text_TextInclusionStrategy$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_text_TextInclusionStrategy$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TextInclusionStrategy) : false) {
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
  protoOf(sam$androidx_compose_ui_text_TextInclusionStrategy$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_ui_text_TextInclusionStrategy$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_text_TextInclusionStrategy$0_0).isIncluded_mfhuca_k$ = function (textBounds, rect) {
    return this.function_1(textBounds, rect);
  };
  protoOf(sam$androidx_compose_ui_text_TextInclusionStrategy$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_text_TextInclusionStrategy$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TextInclusionStrategy) : false) {
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
  protoOf(sam$androidx_compose_ui_text_TextInclusionStrategy$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_ui_text_TextInclusionStrategy$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_text_TextInclusionStrategy$0_1).isIncluded_mfhuca_k$ = function (textBounds, rect) {
    return this.function_1(textBounds, rect);
  };
  protoOf(sam$androidx_compose_ui_text_TextInclusionStrategy$0_1).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_text_TextInclusionStrategy$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, TextInclusionStrategy) : false) {
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
  protoOf(sam$androidx_compose_ui_text_TextInclusionStrategy$0_1).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function TextInclusionStrategy$Companion$AnyOverlap$lambda(textBounds, rect) {
    return textBounds.overlaps_l18ztf_k$(rect);
  }
  function TextInclusionStrategy$Companion$ContainsAll$lambda(textBounds, rect) {
    return !rect.get_isEmpty_zauvru_k$() && textBounds.get_left_woprgw_k$() >= rect.get_left_woprgw_k$() && textBounds.get_right_ixz7xv_k$() <= rect.get_right_ixz7xv_k$() && textBounds.get_top_18ivbo_k$() >= rect.get_top_18ivbo_k$() && textBounds.get_bottom_bj8ras_k$() <= rect.get_bottom_bj8ras_k$();
  }
  function TextInclusionStrategy$Companion$ContainsCenter$lambda(textBounds, rect) {
    return rect.contains_obi4ph_k$(textBounds.get_center_dcexec_k$());
  }
  function Companion_4() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = TextInclusionStrategy$Companion$AnyOverlap$lambda;
    tmp.AnyOverlap_1 = new sam$androidx_compose_ui_text_TextInclusionStrategy$0(tmp_0);
    var tmp_1 = this;
    var tmp_2 = TextInclusionStrategy$Companion$ContainsAll$lambda;
    tmp_1.ContainsAll_1 = new sam$androidx_compose_ui_text_TextInclusionStrategy$0_0(tmp_2);
    var tmp_3 = this;
    var tmp_4 = TextInclusionStrategy$Companion$ContainsCenter$lambda;
    tmp_3.ContainsCenter_1 = new sam$androidx_compose_ui_text_TextInclusionStrategy$0_1(tmp_4);
  }
  protoOf(Companion_4).get_AnyOverlap_mhkqzg_k$ = function () {
    return this.AnyOverlap_1;
  };
  protoOf(Companion_4).get_ContainsAll_q42cnb_k$ = function () {
    return this.ContainsAll_1;
  };
  protoOf(Companion_4).get_ContainsCenter_165app_k$ = function () {
    return this.ContainsCenter_1;
  };
  var Companion_instance_4;
  function Companion_getInstance_21() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function TextInclusionStrategy() {
  }
  var androidx_compose_ui_text_TextLayoutInput$stable;
  var androidx_compose_ui_text_TextLayoutResult$stable;
  function TextLayoutResult(layoutInput, multiParagraph, size) {
    this.layoutInput_1 = layoutInput;
    this.multiParagraph_1 = multiParagraph;
    this.size_1 = size;
    this.firstBaseline_1 = this.multiParagraph_1.get_firstBaseline_s5430_k$();
    this.lastBaseline_1 = this.multiParagraph_1.get_lastBaseline_inuptw_k$();
    this.placeholderRects_1 = this.multiParagraph_1.get_placeholderRects_1ky2fv_k$();
  }
  protoOf(TextLayoutResult).get_layoutInput_o7gjah_k$ = function () {
    return this.layoutInput_1;
  };
  protoOf(TextLayoutResult).get_multiParagraph_xte3we_k$ = function () {
    return this.multiParagraph_1;
  };
  protoOf(TextLayoutResult).get_size_kd98kr_k$ = function () {
    return this.size_1;
  };
  protoOf(TextLayoutResult).get_firstBaseline_s5430_k$ = function () {
    return this.firstBaseline_1;
  };
  protoOf(TextLayoutResult).get_lastBaseline_inuptw_k$ = function () {
    return this.lastBaseline_1;
  };
  protoOf(TextLayoutResult).get_didOverflowHeight_k18vi9_k$ = function () {
    var tmp;
    if (this.multiParagraph_1.get_didExceedMaxLines_xyxo57_k$()) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_0 = this.size_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      tmp = convertToInt(bitwiseAnd(value, new Long(-1, 0))) < this.multiParagraph_1.get_height_e7t92o_k$();
    }
    return tmp;
  };
  protoOf(TextLayoutResult).get_didOverflowWidth_9kwej6_k$ = function () {
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    var this_0 = this.size_1;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
    return convertToInt(shiftRight(value, 32)) < this.multiParagraph_1.get_width_j0q4yl_k$();
  };
  protoOf(TextLayoutResult).get_hasVisualOverflow_ocbqq5_k$ = function () {
    return this.get_didOverflowWidth_9kwej6_k$() || this.get_didOverflowHeight_k18vi9_k$();
  };
  protoOf(TextLayoutResult).get_placeholderRects_1ky2fv_k$ = function () {
    return this.placeholderRects_1;
  };
  protoOf(TextLayoutResult).get_lineCount_lmaazy_k$ = function () {
    return this.multiParagraph_1.get_lineCount_lmaazy_k$();
  };
  protoOf(TextLayoutResult).getLineStart_clke9s_k$ = function (lineIndex) {
    return this.multiParagraph_1.getLineStart_clke9s_k$(lineIndex);
  };
  protoOf(TextLayoutResult).getLineEnd_o6geci_k$ = function (lineIndex, visibleEnd) {
    return this.multiParagraph_1.getLineEnd_o6geci_k$(lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).getLineEnd$default_8vuhh5_k$ = function (lineIndex, visibleEnd, $super) {
    visibleEnd = visibleEnd === VOID ? false : visibleEnd;
    return $super === VOID ? this.getLineEnd_o6geci_k$(lineIndex, visibleEnd) : $super.getLineEnd_o6geci_k$.call(this, lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).isLineEllipsized_1fausj_k$ = function (lineIndex) {
    return this.multiParagraph_1.isLineEllipsized_1fausj_k$(lineIndex);
  };
  protoOf(TextLayoutResult).getLineTop_q0a6r_k$ = function (lineIndex) {
    return this.multiParagraph_1.getLineTop_q0a6r_k$(lineIndex);
  };
  protoOf(TextLayoutResult).getLineBaseline_ps5fhl_k$ = function (lineIndex) {
    return this.multiParagraph_1.getLineBaseline_ps5fhl_k$(lineIndex);
  };
  protoOf(TextLayoutResult).getLineBottom_yhu6bn_k$ = function (lineIndex) {
    return this.multiParagraph_1.getLineBottom_yhu6bn_k$(lineIndex);
  };
  protoOf(TextLayoutResult).getLineLeft_799m07_k$ = function (lineIndex) {
    return this.multiParagraph_1.getLineLeft_799m07_k$(lineIndex);
  };
  protoOf(TextLayoutResult).getLineRight_j8rtqe_k$ = function (lineIndex) {
    return this.multiParagraph_1.getLineRight_j8rtqe_k$(lineIndex);
  };
  protoOf(TextLayoutResult).getLineForOffset_jakwx2_k$ = function (offset) {
    return this.multiParagraph_1.getLineForOffset_jakwx2_k$(offset);
  };
  protoOf(TextLayoutResult).getLineForVerticalPosition_lon9k6_k$ = function (vertical) {
    return this.multiParagraph_1.getLineForVerticalPosition_lon9k6_k$(vertical);
  };
  protoOf(TextLayoutResult).getHorizontalPosition_9mx7bk_k$ = function (offset, usePrimaryDirection) {
    return this.multiParagraph_1.getHorizontalPosition_9mx7bk_k$(offset, usePrimaryDirection);
  };
  protoOf(TextLayoutResult).getParagraphDirection_qweb73_k$ = function (offset) {
    return this.multiParagraph_1.getParagraphDirection_qweb73_k$(offset);
  };
  protoOf(TextLayoutResult).getBidiRunDirection_c67d8i_k$ = function (offset) {
    return this.multiParagraph_1.getBidiRunDirection_c67d8i_k$(offset);
  };
  protoOf(TextLayoutResult).getOffsetForPosition_12t0zj_k$ = function (position) {
    return this.multiParagraph_1.getOffsetForPosition_12t0zj_k$(position);
  };
  protoOf(TextLayoutResult).getBoundingBox_xfho9l_k$ = function (offset) {
    return this.multiParagraph_1.getBoundingBox_xfho9l_k$(offset);
  };
  protoOf(TextLayoutResult).getWordBoundary_s8pru_k$ = function (offset) {
    return this.multiParagraph_1.getWordBoundary_s8pru_k$(offset);
  };
  protoOf(TextLayoutResult).getCursorRect_gdluko_k$ = function (offset) {
    return this.multiParagraph_1.getCursorRect_gdluko_k$(offset);
  };
  protoOf(TextLayoutResult).getPathForRange_bge8b5_k$ = function (start, end) {
    return this.multiParagraph_1.getPathForRange_bge8b5_k$(start, end);
  };
  protoOf(TextLayoutResult).copy_masfhl_k$ = function (layoutInput, size) {
    return new TextLayoutResult(layoutInput, this.multiParagraph_1, size);
  };
  protoOf(TextLayoutResult).copy$default_7jjbm1_k$ = function (layoutInput, size, $super) {
    layoutInput = layoutInput === VOID ? this.layoutInput_1 : layoutInput;
    size = size === VOID ? this.size_1 : size;
    return $super === VOID ? this.copy_masfhl_k$(layoutInput, size) : $super.copy_masfhl_k$.call(this, layoutInput, new IntSize(size));
  };
  protoOf(TextLayoutResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutResult))
      return false;
    if (!this.layoutInput_1.equals(other.layoutInput_1))
      return false;
    if (!equals(this.multiParagraph_1, other.multiParagraph_1))
      return false;
    if (!equals(this.size_1, other.size_1))
      return false;
    if (!(this.firstBaseline_1 === other.firstBaseline_1))
      return false;
    if (!(this.lastBaseline_1 === other.lastBaseline_1))
      return false;
    if (!equals(this.placeholderRects_1, other.placeholderRects_1))
      return false;
    return true;
  };
  protoOf(TextLayoutResult).hashCode = function () {
    var result = this.layoutInput_1.hashCode();
    result = imul(31, result) + hashCode(this.multiParagraph_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.size_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.firstBaseline_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.lastBaseline_1) | 0;
    result = imul(31, result) + hashCode(this.placeholderRects_1) | 0;
    return result;
  };
  protoOf(TextLayoutResult).toString = function () {
    return 'TextLayoutResult(' + ('layoutInput=' + this.layoutInput_1.toString() + ', ') + ('multiParagraph=' + toString_0(this.multiParagraph_1) + ', ') + ('size=' + IntSize__toString_impl_54w9zl(this.size_1) + ', ') + ('firstBaseline=' + this.firstBaseline_1 + ', ') + ('lastBaseline=' + this.lastBaseline_1 + ', ') + ('placeholderRects=' + toString_0(this.placeholderRects_1)) + ')';
  };
  function _set__developerSuppliedResourceLoader__3zinn7($this, _set____db54di) {
    $this._developerSuppliedResourceLoader_1 = _set____db54di;
  }
  function _get__developerSuppliedResourceLoader__1ll3nl($this) {
    return $this._developerSuppliedResourceLoader_1;
  }
  function TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, createFontFamilyResolver(resourceLoader), constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints) {
    return TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints, objectCreate(protoOf(TextLayoutInput)));
  }
  function TextLayoutInput_init_$Init$_0(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, null, fontFamilyResolver, constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$_0(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    return TextLayoutInput_init_$Init$_0(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, objectCreate(protoOf(TextLayoutInput)));
  }
  function TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, fontFamilyResolver, constraints) {
    this.text_1 = text;
    this.style_1 = style;
    this.placeholders_1 = placeholders;
    this.maxLines_1 = maxLines;
    this.softWrap_1 = softWrap;
    this.overflow_1 = overflow;
    this.density_1 = density;
    this.layoutDirection_1 = layoutDirection;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.constraints_1 = constraints;
    this._developerSuppliedResourceLoader_1 = resourceLoader;
  }
  protoOf(TextLayoutInput).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(TextLayoutInput).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(TextLayoutInput).get_placeholders_r4ppyh_k$ = function () {
    return this.placeholders_1;
  };
  protoOf(TextLayoutInput).get_maxLines_pclpoc_k$ = function () {
    return this.maxLines_1;
  };
  protoOf(TextLayoutInput).get_softWrap_a000bn_k$ = function () {
    return this.softWrap_1;
  };
  protoOf(TextLayoutInput).get_overflow_30wlhc_k$ = function () {
    return this.overflow_1;
  };
  protoOf(TextLayoutInput).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(TextLayoutInput).get_layoutDirection_7e37v0_k$ = function () {
    return this.layoutDirection_1;
  };
  protoOf(TextLayoutInput).get_fontFamilyResolver_9o0fjy_k$ = function () {
    return this.fontFamilyResolver_1;
  };
  protoOf(TextLayoutInput).get_constraints_y0yfdk_k$ = function () {
    return this.constraints_1;
  };
  protoOf(TextLayoutInput).get_resourceLoader_tankju_k$ = function () {
    var tmp0_elvis_lhs = this._developerSuppliedResourceLoader_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_22().from_fsblxv_k$(this.fontFamilyResolver_1) : tmp0_elvis_lhs;
  };
  protoOf(TextLayoutInput).copy_nmyn2w_k$ = function (text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints) {
    return new TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, this.fontFamilyResolver_1, constraints);
  };
  protoOf(TextLayoutInput).copy$default_y3288p_k$ = function (text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints, $super) {
    text = text === VOID ? this.text_1 : text;
    style = style === VOID ? this.style_1 : style;
    placeholders = placeholders === VOID ? this.placeholders_1 : placeholders;
    maxLines = maxLines === VOID ? this.maxLines_1 : maxLines;
    softWrap = softWrap === VOID ? this.softWrap_1 : softWrap;
    overflow = overflow === VOID ? this.overflow_1 : overflow;
    density = density === VOID ? this.density_1 : density;
    layoutDirection = layoutDirection === VOID ? this.layoutDirection_1 : layoutDirection;
    resourceLoader = resourceLoader === VOID ? this.get_resourceLoader_tankju_k$() : resourceLoader;
    constraints = constraints === VOID ? this.constraints_1 : constraints;
    return $super === VOID ? this.copy_nmyn2w_k$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints) : $super.copy_nmyn2w_k$.call(this, text, style, placeholders, maxLines, softWrap, new TextOverflow(overflow), density, layoutDirection, resourceLoader, new Constraints_0(constraints));
  };
  protoOf(TextLayoutInput).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutInput))
      return false;
    if (!this.text_1.equals(other.text_1))
      return false;
    if (!this.style_1.equals(other.style_1))
      return false;
    if (!equals(this.placeholders_1, other.placeholders_1))
      return false;
    if (!(this.maxLines_1 === other.maxLines_1))
      return false;
    if (!(this.softWrap_1 === other.softWrap_1))
      return false;
    if (!(this.overflow_1 === other.overflow_1))
      return false;
    if (!equals(this.density_1, other.density_1))
      return false;
    if (!this.layoutDirection_1.equals(other.layoutDirection_1))
      return false;
    if (!equals(this.fontFamilyResolver_1, other.fontFamilyResolver_1))
      return false;
    if (!equals(this.constraints_1, other.constraints_1))
      return false;
    return true;
  };
  protoOf(TextLayoutInput).hashCode = function () {
    var result = this.text_1.hashCode();
    result = imul(31, result) + this.style_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.placeholders_1) | 0;
    result = imul(31, result) + this.maxLines_1 | 0;
    result = imul(31, result) + getBooleanHashCode(this.softWrap_1) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.overflow_1) | 0;
    result = imul(31, result) + hashCode(this.density_1) | 0;
    result = imul(31, result) + this.layoutDirection_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.fontFamilyResolver_1) | 0;
    result = imul(31, result) + Constraints__hashCode_impl_ij7484(this.constraints_1) | 0;
    return result;
  };
  protoOf(TextLayoutInput).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    this_0.append_22ad7x_k$('TextLayoutInput(');
    this_0.append_22ad7x_k$('text=' + this.text_1.toString() + ', ');
    this_0.append_22ad7x_k$('style=' + this.style_1.toString() + ', ');
    this_0.append_22ad7x_k$('placeholders=' + toString_0(this.placeholders_1) + ', ');
    this_0.append_22ad7x_k$('maxLines=' + this.maxLines_1 + ', ');
    this_0.append_22ad7x_k$('softWrap=' + this.softWrap_1 + ', ');
    this_0.append_22ad7x_k$('overflow=' + TextOverflow__toString_impl_10s0c2(this.overflow_1) + ', ');
    this_0.append_22ad7x_k$('density=' + toString_0(this.density_1) + ', ');
    this_0.append_22ad7x_k$('layoutDirection=' + this.layoutDirection_1.toString() + ', ');
    this_0.append_22ad7x_k$('fontFamilyResolver=' + toString_0(this.fontFamilyResolver_1) + ', ');
    this_0.append_22ad7x_k$('constraints=' + Constraints__toString_impl_37yskr(this.constraints_1));
    this_0.append_22ad7x_k$(')');
    return this_0.toString();
  };
  function androidx_compose_ui_text_TextLayoutResult$stableprop_getter() {
    return androidx_compose_ui_text_TextLayoutResult$stable;
  }
  function _get_fontFamilyResolver__s3uj2m($this) {
    return $this.fontFamilyResolver_1;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.cache_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.text.platform.makeSynchronizedObject' call
    tmp_0.lock_1 = new SynchronizedObject();
  }
  protoOf(Companion_5).set_cache_1rkaye_k$ = function (_set____db54di) {
    this.cache_1 = _set____db54di;
  };
  protoOf(Companion_5).get_cache_ipl461_k$ = function () {
    return this.cache_1;
  };
  protoOf(Companion_5).get_lock_wopyt0_k$ = function () {
    return this.lock_1;
  };
  protoOf(Companion_5).from_fsblxv_k$ = function (fontFamilyResolver) {
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    var tmp0_safe_receiver = Companion_getInstance_22().cache_1.get_wei43m_k$(fontFamilyResolver);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var deprecatedBridgeFontResourceLoader = new DeprecatedBridgeFontResourceLoader(fontFamilyResolver);
    // Inline function 'kotlin.collections.set' call
    Companion_getInstance_22().cache_1.put_4fpzoq_k$(fontFamilyResolver, deprecatedBridgeFontResourceLoader);
    return deprecatedBridgeFontResourceLoader;
  };
  var Companion_instance_5;
  function Companion_getInstance_22() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function DeprecatedBridgeFontResourceLoader(fontFamilyResolver) {
    Companion_getInstance_22();
    this.fontFamilyResolver_1 = fontFamilyResolver;
  }
  protoOf(DeprecatedBridgeFontResourceLoader).load_1hfgn9_k$ = function (font) {
    return this.fontFamilyResolver_1.resolve$default_51n6kl_k$(toFontFamily(font), font.get_weight_lbhkzl_k$(), font.get_style_fnlxse_k$()).get_value_j01efc_k$();
  };
  var androidx_compose_ui_text_TextLinkStyles$stable;
  function TextLinkStyles(style, focusedStyle, hoveredStyle, pressedStyle) {
    style = style === VOID ? null : style;
    focusedStyle = focusedStyle === VOID ? null : focusedStyle;
    hoveredStyle = hoveredStyle === VOID ? null : hoveredStyle;
    pressedStyle = pressedStyle === VOID ? null : pressedStyle;
    this.style_1 = style;
    this.focusedStyle_1 = focusedStyle;
    this.hoveredStyle_1 = hoveredStyle;
    this.pressedStyle_1 = pressedStyle;
  }
  protoOf(TextLinkStyles).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(TextLinkStyles).get_focusedStyle_a3npab_k$ = function () {
    return this.focusedStyle_1;
  };
  protoOf(TextLinkStyles).get_hoveredStyle_o44qap_k$ = function () {
    return this.hoveredStyle_1;
  };
  protoOf(TextLinkStyles).get_pressedStyle_4f5zpk_k$ = function () {
    return this.pressedStyle_1;
  };
  protoOf(TextLinkStyles).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof TextLinkStyles);
    }
    if (tmp)
      return false;
    if (!equals(this.style_1, other.style_1))
      return false;
    if (!equals(this.focusedStyle_1, other.focusedStyle_1))
      return false;
    if (!equals(this.hoveredStyle_1, other.hoveredStyle_1))
      return false;
    if (!equals(this.pressedStyle_1, other.pressedStyle_1))
      return false;
    return true;
  };
  protoOf(TextLinkStyles).hashCode = function () {
    var tmp0_safe_receiver = this.style_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.focusedStyle_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.hoveredStyle_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp6_safe_receiver = this.pressedStyle_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.hashCode();
    result = tmp_1 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    return result;
  };
  var androidx_compose_ui_text_TextMeasurer$stable;
  var androidx_compose_ui_text_TextLayoutCache$stable;
  var androidx_compose_ui_text_CacheTextLayoutInput$stable;
  function layout($this, textLayoutInput) {
    // Inline function 'kotlin.with' call
    var tmp0_annotatedString = textLayoutInput.get_text_wouvsm_k$();
    var tmp1_style = resolveDefaults(textLayoutInput.get_style_iyqetk_k$(), textLayoutInput.get_layoutDirection_7e37v0_k$());
    var tmp2_density = textLayoutInput.get_density_qy0267_k$();
    var tmp3_fontFamilyResolver = textLayoutInput.get_fontFamilyResolver_9o0fjy_k$();
    var tmp4_placeholders = textLayoutInput.get_placeholders_r4ppyh_k$();
    var nonNullIntrinsics = new MultiParagraphIntrinsics(tmp0_annotatedString, tmp1_style, tmp4_placeholders, tmp2_density, tmp3_fontFamilyResolver);
    var minWidth = _Constraints___get_minWidth__impl__hi9lfi(textLayoutInput.get_constraints_y0yfdk_k$());
    var widthMatters = textLayoutInput.get_softWrap_a000bn_k$() || get_isEllipsis(textLayoutInput.get_overflow_30wlhc_k$());
    var tmp;
    if (widthMatters && _Constraints___get_hasBoundedWidth__impl__7hd0wr(textLayoutInput.get_constraints_y0yfdk_k$())) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(textLayoutInput.get_constraints_y0yfdk_k$());
    } else {
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var overwriteMaxLines = !textLayoutInput.get_softWrap_a000bn_k$() && get_isEllipsis(textLayoutInput.get_overflow_30wlhc_k$());
    var finalMaxLines = overwriteMaxLines ? 1 : textLayoutInput.get_maxLines_pclpoc_k$();
    var tmp_0;
    if (minWidth === maxWidth) {
      tmp_0 = maxWidth;
    } else {
      tmp_0 = coerceIn(ceilToInt(nonNullIntrinsics.get_maxIntrinsicWidth_b4gk2k_k$()), minWidth, maxWidth);
    }
    var width = tmp_0;
    var multiParagraph = new MultiParagraph(nonNullIntrinsics, Companion_getInstance_5().fitPrioritizingWidth_o0ab04_k$(0, width, 0, _Constraints___get_maxHeight__impl__dt3e8z(textLayoutInput.get_constraints_y0yfdk_k$())), finalMaxLines, textLayoutInput.get_overflow_30wlhc_k$());
    var tmp_1 = textLayoutInput.get_constraints_y0yfdk_k$();
    // Inline function 'kotlin.math.ceil' call
    var x = multiParagraph.get_width_j0q4yl_k$();
    var tmp$ret$0 = Math.ceil(x);
    var tmp0 = numberToInt(tmp$ret$0);
    // Inline function 'kotlin.math.ceil' call
    var x_0 = multiParagraph.get_height_e7t92o_k$();
    var tmp$ret$1 = Math.ceil(x_0);
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = numberToInt(tmp$ret$1);
    var tmp$ret$2 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    var tmp$ret$3 = _IntSize___init__impl__emcjft(tmp$ret$2);
    return new TextLayoutResult(textLayoutInput, multiParagraph, constrain(tmp_1, tmp$ret$3));
  }
  function _get_defaultFontFamilyResolver__l7dy9j($this) {
    return $this.defaultFontFamilyResolver_1;
  }
  function _get_defaultDensity__wyck90($this) {
    return $this.defaultDensity_1;
  }
  function _get_defaultLayoutDirection__umpaqf($this) {
    return $this.defaultLayoutDirection_1;
  }
  function _get_cacheSize__lc31te($this) {
    return $this.cacheSize_1;
  }
  function _get_textLayoutCache__y4i8wq($this) {
    return $this.textLayoutCache_1;
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  var Companion_instance_6;
  function Companion_getInstance_23() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function TextMeasurer(defaultFontFamilyResolver, defaultDensity, defaultLayoutDirection, cacheSize) {
    Companion_getInstance_23();
    cacheSize = cacheSize === VOID ? 8 : cacheSize;
    this.defaultFontFamilyResolver_1 = defaultFontFamilyResolver;
    this.defaultDensity_1 = defaultDensity;
    this.defaultLayoutDirection_1 = defaultLayoutDirection;
    this.cacheSize_1 = cacheSize;
    var tmp = this;
    var tmp_0;
    if (this.cacheSize_1 > 0) {
      tmp_0 = new TextLayoutCache(this.cacheSize_1);
    } else {
      tmp_0 = null;
    }
    tmp.textLayoutCache_1 = tmp_0;
  }
  protoOf(TextMeasurer).measure_g72ihh_k$ = function (text, style, overflow, softWrap, maxLines, placeholders, constraints, layoutDirection, density, fontFamilyResolver, skipCache) {
    var requestedTextLayoutInput = TextLayoutInput_init_$Create$_0(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints);
    var tmp;
    if (!skipCache && !(this.textLayoutCache_1 == null)) {
      tmp = this.textLayoutCache_1.get_mjtk9b_k$(requestedTextLayoutInput);
    } else {
      tmp = null;
    }
    var cacheResult = tmp;
    var tmp_0;
    if (!(cacheResult == null)) {
      var tmp0 = ceilToInt(cacheResult.get_multiParagraph_xte3we_k$().get_width_j0q4yl_k$());
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = ceilToInt(cacheResult.get_multiParagraph_xte3we_k$().get_height_e7t92o_k$());
      var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$2 = _IntSize___init__impl__emcjft(tmp$ret$1);
      tmp_0 = cacheResult.copy_masfhl_k$(requestedTextLayoutInput, constrain(constraints, tmp$ret$2));
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = layout(Companion_getInstance_23(), requestedTextLayoutInput);
      var tmp0_safe_receiver = this.textLayoutCache_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.put_dk563u_k$(requestedTextLayoutInput, this_0);
      }
      tmp_0 = this_0;
    }
    return tmp_0;
  };
  protoOf(TextMeasurer).measure$default_u1a196_k$ = function (text, style, overflow, softWrap, maxLines, placeholders, constraints, layoutDirection, density, fontFamilyResolver, skipCache, $super) {
    style = style === VOID ? Companion_getInstance_25().get_Default_goqax4_k$() : style;
    overflow = overflow === VOID ? Companion_getInstance_57().get_Clip_ypf2ge_k$() : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    var tmp;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = placeholders;
    }
    placeholders = tmp;
    constraints = constraints === VOID ? Constraints() : constraints;
    layoutDirection = layoutDirection === VOID ? this.defaultLayoutDirection_1 : layoutDirection;
    density = density === VOID ? this.defaultDensity_1 : density;
    fontFamilyResolver = fontFamilyResolver === VOID ? this.defaultFontFamilyResolver_1 : fontFamilyResolver;
    skipCache = skipCache === VOID ? false : skipCache;
    return $super === VOID ? this.measure_g72ihh_k$(text, style, overflow, softWrap, maxLines, placeholders, constraints, layoutDirection, density, fontFamilyResolver, skipCache) : $super.measure_g72ihh_k$.call(this, text, style, new TextOverflow(overflow), softWrap, maxLines, placeholders, new Constraints_0(constraints), layoutDirection, density, fontFamilyResolver, skipCache);
  };
  protoOf(TextMeasurer).measure_azm2kl_k$ = function (text, style, overflow, softWrap, maxLines, constraints, layoutDirection, density, fontFamilyResolver, skipCache) {
    return this.measure$default_u1a196_k$(AnnotatedString_init_$Create$_0(text), style, overflow, softWrap, maxLines, VOID, constraints, layoutDirection, density, fontFamilyResolver, skipCache);
  };
  protoOf(TextMeasurer).measure$default_bw1pgx_k$ = function (text, style, overflow, softWrap, maxLines, constraints, layoutDirection, density, fontFamilyResolver, skipCache, $super) {
    style = style === VOID ? Companion_getInstance_25().get_Default_goqax4_k$() : style;
    overflow = overflow === VOID ? Companion_getInstance_57().get_Clip_ypf2ge_k$() : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    constraints = constraints === VOID ? Constraints() : constraints;
    layoutDirection = layoutDirection === VOID ? this.defaultLayoutDirection_1 : layoutDirection;
    density = density === VOID ? this.defaultDensity_1 : density;
    fontFamilyResolver = fontFamilyResolver === VOID ? this.defaultFontFamilyResolver_1 : fontFamilyResolver;
    skipCache = skipCache === VOID ? false : skipCache;
    return $super === VOID ? this.measure_azm2kl_k$(text, style, overflow, softWrap, maxLines, constraints, layoutDirection, density, fontFamilyResolver, skipCache) : $super.measure_azm2kl_k$.call(this, text, style, new TextOverflow(overflow), softWrap, maxLines, new Constraints_0(constraints), layoutDirection, density, fontFamilyResolver, skipCache);
  };
  function _get_cache__j44d4h($this) {
    return $this.cache_1;
  }
  function _set_singleSizeCacheInput__tv6i4a($this, _set____db54di) {
    $this.singleSizeCacheInput_1 = _set____db54di;
  }
  function _get_singleSizeCacheInput__r7uvui($this) {
    return $this.singleSizeCacheInput_1;
  }
  function _set_singleSizeCacheResult__gmjsb5($this, _set____db54di) {
    $this.singleSizeCacheResult_1 = _set____db54di;
  }
  function _get_singleSizeCacheResult__ms64qt($this) {
    return $this.singleSizeCacheResult_1;
  }
  function TextLayoutCache(capacity) {
    capacity = capacity === VOID ? 8 : capacity;
    var tmp = this;
    var tmp_0;
    if (!(capacity === 1)) {
      tmp_0 = new LruCache(capacity);
    } else {
      tmp_0 = null;
    }
    tmp.cache_1 = tmp_0;
    this.singleSizeCacheInput_1 = null;
    this.singleSizeCacheResult_1 = null;
  }
  protoOf(TextLayoutCache).get_mjtk9b_k$ = function (key) {
    var cacheKey = new CacheTextLayoutInput(key);
    var tmp;
    if (!(this.cache_1 == null)) {
      tmp = this.cache_1.get_h31hzz_k$(cacheKey);
    } else if (equals(this.singleSizeCacheInput_1, cacheKey)) {
      tmp = this.singleSizeCacheResult_1;
    } else {
      return null;
    }
    var resultFromCache = tmp;
    if (resultFromCache == null)
      return null;
    if (resultFromCache.get_multiParagraph_xte3we_k$().get_intrinsics_1zqd0p_k$().get_hasStaleResolvedFonts_tun9ic_k$()) {
      return null;
    }
    return resultFromCache;
  };
  protoOf(TextLayoutCache).put_dk563u_k$ = function (key, value) {
    if (!(this.cache_1 == null)) {
      this.cache_1.put_fa630k_k$(new CacheTextLayoutInput(key), value);
    } else {
      this.singleSizeCacheInput_1 = new CacheTextLayoutInput(key);
      this.singleSizeCacheResult_1 = value;
    }
  };
  function get_isEllipsis(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_57().get_Ellipsis_8ygjpt_k$() || _this__u8e3s4 === Companion_getInstance_57().get_StartEllipsis_95iydd_k$() || _this__u8e3s4 === Companion_getInstance_57().get_MiddleEllipsis_nad4is_k$();
  }
  function CacheTextLayoutInput(textLayoutInput) {
    this.textLayoutInput_1 = textLayoutInput;
  }
  protoOf(CacheTextLayoutInput).get_textLayoutInput_xj8sye_k$ = function () {
    return this.textLayoutInput_1;
  };
  protoOf(CacheTextLayoutInput).hashCode = function () {
    // Inline function 'kotlin.with' call
    var $this$with = this.textLayoutInput_1;
    var result = $this$with.get_text_wouvsm_k$().hashCode();
    result = imul(31, result) + $this$with.get_style_iyqetk_k$().hashCodeLayoutAffectingAttributes_u2p6xm_k$() | 0;
    result = imul(31, result) + hashCode($this$with.get_placeholders_r4ppyh_k$()) | 0;
    result = imul(31, result) + $this$with.get_maxLines_pclpoc_k$() | 0;
    result = imul(31, result) + getBooleanHashCode($this$with.get_softWrap_a000bn_k$()) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt($this$with.get_overflow_30wlhc_k$()) | 0;
    result = imul(31, result) + hashCode($this$with.get_density_qy0267_k$()) | 0;
    result = imul(31, result) + $this$with.get_layoutDirection_7e37v0_k$().hashCode() | 0;
    result = imul(31, result) + hashCode($this$with.get_fontFamilyResolver_9o0fjy_k$()) | 0;
    result = imul(31, result) + Constraints__hashCode_impl_ij7484($this$with.get_constraints_y0yfdk_k$()) | 0;
    return result;
  };
  protoOf(CacheTextLayoutInput).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CacheTextLayoutInput))
      return false;
    // Inline function 'kotlin.with' call
    var $this$with = this.textLayoutInput_1;
    if (!$this$with.get_text_wouvsm_k$().equals(other.textLayoutInput_1.get_text_wouvsm_k$()))
      return false;
    if (!$this$with.get_style_iyqetk_k$().hasSameLayoutAffectingAttributes_42axi4_k$(other.textLayoutInput_1.get_style_iyqetk_k$()))
      return false;
    if (!equals($this$with.get_placeholders_r4ppyh_k$(), other.textLayoutInput_1.get_placeholders_r4ppyh_k$()))
      return false;
    if (!($this$with.get_maxLines_pclpoc_k$() === other.textLayoutInput_1.get_maxLines_pclpoc_k$()))
      return false;
    if (!($this$with.get_softWrap_a000bn_k$() === other.textLayoutInput_1.get_softWrap_a000bn_k$()))
      return false;
    if (!($this$with.get_overflow_30wlhc_k$() === other.textLayoutInput_1.get_overflow_30wlhc_k$()))
      return false;
    if (!equals($this$with.get_density_qy0267_k$(), other.textLayoutInput_1.get_density_qy0267_k$()))
      return false;
    if (!$this$with.get_layoutDirection_7e37v0_k$().equals(other.textLayoutInput_1.get_layoutDirection_7e37v0_k$()))
      return false;
    if (!($this$with.get_fontFamilyResolver_9o0fjy_k$() === other.textLayoutInput_1.get_fontFamilyResolver_9o0fjy_k$()))
      return false;
    if (!equals($this$with.get_constraints_y0yfdk_k$(), other.textLayoutInput_1.get_constraints_y0yfdk_k$()))
      return false;
    return true;
  };
  var androidx_compose_ui_text_TextPainter$stable;
  function TextPainter() {
    TextPainter_instance = this;
  }
  protoOf(TextPainter).paint_kguo5w_k$ = function (canvas, textLayoutResult) {
    var needClipping = textLayoutResult.get_hasVisualOverflow_ocbqq5_k$() && !(textLayoutResult.get_layoutInput_o7gjah_k$().get_overflow_30wlhc_k$() === Companion_getInstance_57().get_Visible_m15n1a_k$());
    if (needClipping) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = textLayoutResult.get_size_kd98kr_k$();
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var width = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_1 = textLayoutResult.get_size_kd98kr_k$();
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
      var height = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var tmp = Companion_getInstance_4().get_Zero_k6n73t_k$();
      // Inline function 'androidx.compose.ui.geometry.Size' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var v1 = fromInt(toRawBits(width));
      var v2 = fromInt(toRawBits(height));
      var tmp$ret$4 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      var tmp$ret$5 = _Size___init__impl__aywn0g(tmp$ret$4);
      var bounds = Rect(tmp, tmp$ret$5);
      canvas.save_fbe7h_k$();
      canvas.clipRect$default_a4bw85_k$(bounds);
    }
    var style = textLayoutResult.get_layoutInput_o7gjah_k$().get_style_iyqetk_k$().get_spanStyle_x6vv5z_k$();
    var tmp0_elvis_lhs = style.get_textDecoration_itgjwm_k$();
    var textDecoration = tmp0_elvis_lhs == null ? Companion_getInstance_52().get_None_wo6tgh_k$() : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.get_shadow_jgtb8p_k$();
    var shadow = tmp1_elvis_lhs == null ? Companion_getInstance_3().get_None_wo6tgh_k$() : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = style.get_drawStyle_arbehw_k$();
    var drawStyle = tmp2_elvis_lhs == null ? Fill_getInstance() : tmp2_elvis_lhs;
    try {
      var brush = style.get_brush_ipcjyp_k$();
      if (!(brush == null)) {
        var tmp_0;
        if (!(style.get_textForegroundStyle_h1fi7n_k$() === Unspecified_getInstance())) {
          tmp_0 = style.get_textForegroundStyle_h1fi7n_k$().get_alpha_iooth1_k$();
        } else {
          tmp_0 = 1.0;
        }
        var alpha = tmp_0;
        textLayoutResult.get_multiParagraph_xte3we_k$().paint$default_3gfbfa_k$(canvas, brush, alpha, shadow, textDecoration, drawStyle);
      } else {
        var tmp_1;
        if (!(style.get_textForegroundStyle_h1fi7n_k$() === Unspecified_getInstance())) {
          tmp_1 = style.get_textForegroundStyle_h1fi7n_k$().get_color_lnp1vl_k$();
        } else {
          tmp_1 = Companion_getInstance_0().get_Black_t4k9fh_k$();
        }
        var color = tmp_1;
        textLayoutResult.get_multiParagraph_xte3we_k$().paint$default_rvqyft_k$(canvas, color, shadow, textDecoration, drawStyle);
      }
    }finally {
      if (needClipping) {
        canvas.restore_a1ykhu_k$();
      }
    }
  };
  var TextPainter_instance;
  function TextPainter_getInstance() {
    if (TextPainter_instance == null)
      new TextPainter();
    return TextPainter_instance;
  }
  function _TextRange___init__impl__h6icbt(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _TextRange___get_start__impl__ww4t90($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _get_packedValue__aj623s($this);
    return convertToInt(shiftRight(value, 32));
  }
  function _TextRange___get_end__impl__gcdxpp($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value = _get_packedValue__aj623s($this);
    return convertToInt(bitwiseAnd(value, new Long(-1, 0)));
  }
  function _TextRange___get_min__impl__uu95c4($this) {
    var tmp0 = _TextRange___get_start__impl__ww4t90($this);
    // Inline function 'kotlin.math.min' call
    var b = _TextRange___get_end__impl__gcdxpp($this);
    return Math.min(tmp0, b);
  }
  function _TextRange___get_max__impl__owm8m($this) {
    var tmp0 = _TextRange___get_start__impl__ww4t90($this);
    // Inline function 'kotlin.math.max' call
    var b = _TextRange___get_end__impl__gcdxpp($this);
    return Math.max(tmp0, b);
  }
  function _TextRange___get_collapsed__impl__cilesp($this) {
    return _TextRange___get_start__impl__ww4t90($this) === _TextRange___get_end__impl__gcdxpp($this);
  }
  function _TextRange___get_reversed__impl__emhnbm($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this);
  }
  function _TextRange___get_length__impl__7qes3a($this) {
    return _TextRange___get_max__impl__owm8m($this) - _TextRange___get_min__impl__uu95c4($this) | 0;
  }
  function TextRange__intersects_impl_mhtn49($this, other) {
    return !!(_TextRange___get_min__impl__uu95c4($this) < _TextRange___get_max__impl__owm8m(other) & _TextRange___get_min__impl__uu95c4(other) < _TextRange___get_max__impl__owm8m($this));
  }
  function TextRange__contains_impl_ws45z2($this, other) {
    return !!(_TextRange___get_min__impl__uu95c4($this) <= _TextRange___get_min__impl__uu95c4(other) & _TextRange___get_max__impl__owm8m(other) <= _TextRange___get_max__impl__owm8m($this));
  }
  function TextRange__contains_impl_ws45z2_0($this, offset) {
    var containsLower = _TextRange___get_min__impl__uu95c4($this);
    return offset < _TextRange___get_max__impl__owm8m($this) ? containsLower <= offset : false;
  }
  function TextRange__toString_impl_pqvlzl($this) {
    return 'TextRange(' + _TextRange___get_start__impl__ww4t90($this) + ', ' + _TextRange___get_end__impl__gcdxpp($this) + ')';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.Zero_1 = TextRange_0(0);
  }
  protoOf(Companion_7).get_Zero_8je9ih_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance_7;
  function Companion_getInstance_24() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function TextRange__hashCode_impl_3zpp6q($this) {
    return $this.hashCode();
  }
  function TextRange__equals_impl_hkkmea($this, other) {
    if (!(other instanceof TextRange))
      return false;
    var tmp0_other_with_cast = other instanceof TextRange ? other.packedValue_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextRange(packedValue) {
    Companion_getInstance_24();
    this.packedValue_1 = packedValue;
  }
  protoOf(TextRange).toString = function () {
    return TextRange__toString_impl_pqvlzl(this.packedValue_1);
  };
  protoOf(TextRange).hashCode = function () {
    return TextRange__hashCode_impl_3zpp6q(this.packedValue_1);
  };
  protoOf(TextRange).equals = function (other) {
    return TextRange__equals_impl_hkkmea(this.packedValue_1, other);
  };
  function TextRange_0(index) {
    return TextRange_1(index, index);
  }
  function TextRange_1(start, end) {
    return _TextRange___init__impl__h6icbt(packWithCheck(start, end));
  }
  function coerceIn_1(_this__u8e3s4, minimumValue, maximumValue) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = _TextRange___get_start__impl__ww4t90(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = this_0 < minimumValue ? minimumValue : this_0;
    var newStart = this_1 > maximumValue ? maximumValue : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = _TextRange___get_end__impl__gcdxpp(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_3 = this_2 < minimumValue ? minimumValue : this_2;
    var newEnd = this_3 > maximumValue ? maximumValue : this_3;
    if (!(newStart === _TextRange___get_start__impl__ww4t90(_this__u8e3s4)) || !(newEnd === _TextRange___get_end__impl__gcdxpp(_this__u8e3s4))) {
      return TextRange_1(newStart, newEnd);
    }
    return _this__u8e3s4;
  }
  function substring_1(_this__u8e3s4, range) {
    var tmp2 = _TextRange___get_min__impl__uu95c4(range);
    // Inline function 'kotlin.text.substring' call
    var endIndex = _TextRange___get_max__impl__owm8m(range);
    return toString_0(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex));
  }
  function packWithCheck(start, end) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(start >= 0 && end >= 0)) {
      var tmp$ret$0 = 'start and end cannot be negative. [start: ' + start + ', end: ' + end + ']';
      throwIllegalArgumentException(tmp$ret$0);
    }
    // Inline function 'androidx.compose.ui.util.packInts' call
    return bitwiseOr(shiftLeft(fromInt(start), 32), bitwiseAnd(fromInt(end), new Long(-1, 0)));
  }
  var androidx_compose_ui_text_TextStyle$stable;
  function TextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    TextStyle.call($this, spanStyle, paragraphStyle, createPlatformTextStyleInternal(spanStyle.get_platformStyle_7i053p_k$(), paragraphStyle.get_platformStyle_7i053p_k$()));
    return $this;
  }
  function TextStyle_init_$Create$_0(spanStyle, paragraphStyle) {
    return TextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $this) {
    color = color === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : color;
    fontSize = fontSize === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    var tmp = SpanStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, null, null);
    var tmp_0;
    var tmp_1 = textAlign;
    if ((tmp_1 == null ? null : new TextAlign(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp_0 = textAlign;
    }
    var tmp_2 = tmp_0;
    var tmp_3;
    var tmp_4 = textDirection;
    if ((tmp_4 == null ? null : new TextDirection(tmp_4)) == null) {
      tmp_3 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_3 = textDirection;
    }
    TextStyle.call($this, tmp, new ParagraphStyle_0(tmp_2, tmp_3, lineHeight, textIndent, null, null, Companion_getInstance_63().get_Unspecified_afm6zt_k$(), Companion_getInstance_46().get_Unspecified_43rcur_k$(), null), null);
    return $this;
  }
  function TextStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent) {
    return TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $this) {
    color = color === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : color;
    fontSize = fontSize === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    var tmp = SpanStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), null);
    var tmp_0;
    var tmp_1 = textAlign;
    if ((tmp_1 == null ? null : new TextAlign(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp_0 = textAlign;
    }
    var tmp_2 = tmp_0;
    var tmp_3;
    var tmp_4 = textDirection;
    if ((tmp_4 == null ? null : new TextDirection(tmp_4)) == null) {
      tmp_3 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_3 = textDirection;
    }
    var tmp_5 = tmp_3;
    TextStyle.call($this, tmp, new ParagraphStyle_0(tmp_2, tmp_5, lineHeight, textIndent, platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$(), lineHeightStyle, Companion_getInstance_63().get_Unspecified_afm6zt_k$(), Companion_getInstance_46().get_Unspecified_43rcur_k$(), null), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle) {
    return TextStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $this) {
    color = color === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : color;
    fontSize = fontSize === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    var tmp = SpanStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$());
    var tmp_0;
    var tmp_1 = textAlign;
    if ((tmp_1 == null ? null : new TextAlign(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp_0 = textAlign;
    }
    var tmp_2 = tmp_0;
    var tmp_3;
    var tmp_4 = textDirection;
    if ((tmp_4 == null ? null : new TextDirection(tmp_4)) == null) {
      tmp_3 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_3 = textDirection;
    }
    var tmp_5 = tmp_3;
    var tmp_6 = platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$();
    var tmp_7;
    var tmp_8 = lineBreak;
    if ((tmp_8 == null ? null : new LineBreak(tmp_8)) == null) {
      tmp_7 = Companion_getInstance_63().get_Unspecified_afm6zt_k$();
    } else {
      tmp_7 = lineBreak;
    }
    var tmp_9 = tmp_7;
    var tmp_10;
    var tmp_11 = hyphens;
    if ((tmp_11 == null ? null : new Hyphens(tmp_11)) == null) {
      tmp_10 = Companion_getInstance_46().get_Unspecified_43rcur_k$();
    } else {
      tmp_10 = hyphens;
    }
    TextStyle.call($this, tmp, new ParagraphStyle_0(tmp_2, tmp_5, lineHeight, textIndent, tmp_6, lineHeightStyle, tmp_9, tmp_10), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_3(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    return TextStyle_init_$Init$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_3(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $this) {
    color = color === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : color;
    fontSize = fontSize === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp = SpanStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), drawStyle);
    var tmp_0;
    var tmp_1 = textAlign;
    if ((tmp_1 == null ? null : new TextAlign(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp_0 = textAlign;
    }
    var tmp_2 = tmp_0;
    var tmp_3;
    var tmp_4 = textDirection;
    if ((tmp_4 == null ? null : new TextDirection(tmp_4)) == null) {
      tmp_3 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_3 = textDirection;
    }
    var tmp_5 = tmp_3;
    var tmp_6 = platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$();
    var tmp_7;
    var tmp_8 = lineBreak;
    if ((tmp_8 == null ? null : new LineBreak(tmp_8)) == null) {
      tmp_7 = Companion_getInstance_63().get_Unspecified_afm6zt_k$();
    } else {
      tmp_7 = lineBreak;
    }
    var tmp_9 = tmp_7;
    var tmp_10;
    var tmp_11 = hyphens;
    if ((tmp_11 == null ? null : new Hyphens(tmp_11)) == null) {
      tmp_10 = Companion_getInstance_46().get_Unspecified_43rcur_k$();
    } else {
      tmp_10 = hyphens;
    }
    TextStyle.call($this, tmp, new ParagraphStyle_0(tmp_2, tmp_5, lineHeight, textIndent, tmp_6, lineHeightStyle, tmp_9, tmp_10, textMotion), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_4(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return TextStyle_init_$Init$_3(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_4(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $this) {
    color = color === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : color;
    fontSize = fontSize === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? Companion_getInstance_51().get_Unspecified_23bj44_k$() : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_53().get_Unspecified_8uxrb6_k$() : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_63().get_Unspecified_afm6zt_k$() : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_46().get_Unspecified_43rcur_k$() : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp = SpanStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), drawStyle);
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$(), lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_5(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return TextStyle_init_$Init$_4(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_5(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $this) {
    alpha = alpha === VOID ? NaN : alpha;
    fontSize = fontSize === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? Companion_getInstance_51().get_Unspecified_23bj44_k$() : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_53().get_Unspecified_8uxrb6_k$() : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_63().get_Unspecified_afm6zt_k$() : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_46().get_Unspecified_43rcur_k$() : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp = SpanStyle_init_$Create$_2(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), drawStyle);
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$(), lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_6(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return TextStyle_init_$Init$_5(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_6(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $this) {
    alpha = alpha === VOID ? NaN : alpha;
    fontSize = fontSize === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp = SpanStyle_init_$Create$_2(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), drawStyle);
    var tmp_0;
    var tmp_1 = textAlign;
    if ((tmp_1 == null ? null : new TextAlign(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp_0 = textAlign;
    }
    var tmp_2 = tmp_0;
    var tmp_3;
    var tmp_4 = textDirection;
    if ((tmp_4 == null ? null : new TextDirection(tmp_4)) == null) {
      tmp_3 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_3 = textDirection;
    }
    var tmp_5 = tmp_3;
    var tmp_6 = platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$();
    var tmp_7;
    var tmp_8 = lineBreak;
    if ((tmp_8 == null ? null : new LineBreak(tmp_8)) == null) {
      tmp_7 = Companion_getInstance_63().get_Unspecified_afm6zt_k$();
    } else {
      tmp_7 = lineBreak;
    }
    var tmp_9 = tmp_7;
    var tmp_10;
    var tmp_11 = hyphens;
    if ((tmp_11 == null ? null : new Hyphens(tmp_11)) == null) {
      tmp_10 = Companion_getInstance_46().get_Unspecified_43rcur_k$();
    } else {
      tmp_10 = hyphens;
    }
    TextStyle.call($this, tmp, new ParagraphStyle_0(tmp_2, tmp_5, lineHeight, textIndent, tmp_6, lineHeightStyle, tmp_9, tmp_10, textMotion), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_7(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return TextStyle_init_$Init$_6(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, objectCreate(protoOf(TextStyle)));
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.Default_1 = TextStyle_init_$Create$_5();
  }
  protoOf(Companion_8).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  var Companion_instance_8;
  function Companion_getInstance_25() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function TextStyle(spanStyle, paragraphStyle, platformStyle) {
    Companion_getInstance_25();
    platformStyle = platformStyle === VOID ? null : platformStyle;
    this.spanStyle_1 = spanStyle;
    this.paragraphStyle_1 = paragraphStyle;
    this.platformStyle_1 = platformStyle;
  }
  protoOf(TextStyle).get_spanStyle_x6vv5z_k$ = function () {
    return this.spanStyle_1;
  };
  protoOf(TextStyle).get_paragraphStyle_mkvdhj_k$ = function () {
    return this.paragraphStyle_1;
  };
  protoOf(TextStyle).get_platformStyle_7i053p_k$ = function () {
    return this.platformStyle_1;
  };
  protoOf(TextStyle).toSpanStyle_l454tw_k$ = function () {
    return this.spanStyle_1;
  };
  protoOf(TextStyle).toParagraphStyle_zfuegy_k$ = function () {
    return this.paragraphStyle_1;
  };
  protoOf(TextStyle).merge_grd1yz_k$ = function (other) {
    if (other == null || equals(other, Companion_getInstance_25().Default_1))
      return this;
    return TextStyle_init_$Create$_0(this.toSpanStyle_l454tw_k$().merge_ukwdud_k$(other.toSpanStyle_l454tw_k$()), this.toParagraphStyle_zfuegy_k$().merge_jfodcj_k$(other.toParagraphStyle_zfuegy_k$()));
  };
  protoOf(TextStyle).merge$default_dwu3q_k$ = function (other, $super) {
    other = other === VOID ? null : other;
    return $super === VOID ? this.merge_grd1yz_k$(other) : $super.merge_grd1yz_k$.call(this, other);
  };
  protoOf(TextStyle).merge_tg0afm_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion) {
    var mergedSpanStyle = fastMerge_0(this.spanStyle_1, color, null, NaN, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), drawStyle);
    var mergedParagraphStyle = fastMerge(this.paragraphStyle_1, textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$(), lineHeightStyle, lineBreak, hyphens, textMotion);
    if (this.spanStyle_1 === mergedSpanStyle && this.paragraphStyle_1 === mergedParagraphStyle)
      return this;
    return TextStyle_init_$Create$_0(mergedSpanStyle, mergedParagraphStyle);
  };
  protoOf(TextStyle).merge$default_jrrqwk_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion, $super) {
    color = color === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : color;
    fontSize = fontSize === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? Companion_getInstance_51().get_Unspecified_23bj44_k$() : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_53().get_Unspecified_8uxrb6_k$() : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_63().get_Unspecified_afm6zt_k$() : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_46().get_Unspecified_43rcur_k$() : hyphens;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.merge_tg0afm_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion);
    } else {
      var tmp_0 = $super.merge_tg0afm_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), platformStyle, textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).merge_wd0kho_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion) {
    var mergedSpanStyle = fastMerge_0(this.spanStyle_1, color, null, NaN, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), drawStyle);
    var tmp;
    var tmp_0 = textAlign;
    if ((tmp_0 == null ? null : new TextAlign(tmp_0)) == null) {
      tmp = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp = textAlign;
    }
    var tmp_1 = tmp;
    var tmp_2;
    var tmp_3 = textDirection;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_2 = textDirection;
    }
    var tmp_4 = tmp_2;
    var tmp_5 = platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$();
    var tmp_6;
    var tmp_7 = lineBreak;
    if ((tmp_7 == null ? null : new LineBreak(tmp_7)) == null) {
      tmp_6 = Companion_getInstance_63().get_Unspecified_afm6zt_k$();
    } else {
      tmp_6 = lineBreak;
    }
    var tmp_8 = tmp_6;
    var tmp_9;
    var tmp_10 = hyphens;
    if ((tmp_10 == null ? null : new Hyphens(tmp_10)) == null) {
      tmp_9 = Companion_getInstance_46().get_Unspecified_43rcur_k$();
    } else {
      tmp_9 = hyphens;
    }
    var mergedParagraphStyle = fastMerge(this.paragraphStyle_1, tmp_1, tmp_4, lineHeight, textIndent, tmp_5, lineHeightStyle, tmp_8, tmp_9, textMotion);
    if (this.spanStyle_1 === mergedSpanStyle && this.paragraphStyle_1 === mergedParagraphStyle)
      return this;
    return TextStyle_init_$Create$_0(mergedSpanStyle, mergedParagraphStyle);
  };
  protoOf(TextStyle).merge$default_iezoge_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion, $super) {
    color = color === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : color;
    fontSize = fontSize === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_2().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.merge_wd0kho_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion);
    } else {
      var tmp_0 = $super.merge_wd0kho_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
      var tmp_7 = textAlign;
      var tmp_8 = tmp_7 == null ? null : new TextAlign(tmp_7);
      var tmp_9 = textDirection;
      var tmp_10 = tmp_9 == null ? null : new TextDirection(tmp_9);
      var tmp_11 = lineBreak;
      var tmp_12 = tmp_11 == null ? null : new LineBreak(tmp_11);
      var tmp_13 = hyphens;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_6, textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, tmp_8, tmp_10, new TextUnit(lineHeight), textIndent, lineHeightStyle, tmp_12, tmp_13 == null ? null : new Hyphens(tmp_13), platformStyle, textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).merge_hyqh7i_k$ = function (other) {
    return TextStyle_init_$Create$_0(this.toSpanStyle_l454tw_k$().merge_ukwdud_k$(other), this.toParagraphStyle_zfuegy_k$());
  };
  protoOf(TextStyle).merge_t28ajk_k$ = function (other) {
    return TextStyle_init_$Create$_0(this.toSpanStyle_l454tw_k$(), this.toParagraphStyle_zfuegy_k$().merge_jfodcj_k$(other));
  };
  protoOf(TextStyle).plus_4nq3rw_k$ = function (other) {
    return this.merge_grd1yz_k$(other);
  };
  protoOf(TextStyle).plus_k3ox1a_k$ = function (other) {
    return this.merge_t28ajk_k$(other);
  };
  protoOf(TextStyle).plus_46nmkk_k$ = function (other) {
    return this.merge_hyqh7i_k$(other);
  };
  protoOf(TextStyle).copy_1clm0n_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent) {
    var tmp;
    if (equals(color, this.spanStyle_1.get_color_lnp1vl_k$())) {
      tmp = this.spanStyle_1.get_textForegroundStyle_h1fi7n_k$();
    } else {
      tmp = Companion_getInstance_54().from_ccukrb_k$(color);
    }
    var tmp_0 = new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, this.spanStyle_1.get_platformStyle_7i053p_k$(), this.spanStyle_1.get_drawStyle_arbehw_k$());
    var tmp_1;
    var tmp_2 = textAlign;
    if ((tmp_2 == null ? null : new TextAlign(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp_1 = textAlign;
    }
    var tmp_3 = tmp_1;
    var tmp_4;
    var tmp_5 = textDirection;
    if ((tmp_5 == null ? null : new TextDirection(tmp_5)) == null) {
      tmp_4 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_4 = textDirection;
    }
    return new TextStyle(tmp_0, new ParagraphStyle_0(tmp_3, tmp_4, lineHeight, textIndent, this.paragraphStyle_1.get_platformStyle_7i053p_k$(), this.get_lineHeightStyle_fzu4s3_k$(), this.get_lineBreak_osjg5f_k$(), this.get_hyphens_oe87pf_k$(), this.get_textMotion_7jbf0s_k$()), this.platformStyle_1);
  };
  protoOf(TextStyle).copy$default_rmzbvl_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $super) {
    color = color === VOID ? this.spanStyle_1.get_color_lnp1vl_k$() : color;
    fontSize = fontSize === VOID ? this.spanStyle_1.get_fontSize_ergf2z_k$() : fontSize;
    fontWeight = fontWeight === VOID ? this.spanStyle_1.get_fontWeight_wbif2o_k$() : fontWeight;
    fontStyle = fontStyle === VOID ? this.spanStyle_1.get_fontStyle_hzv4zg_k$() : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.spanStyle_1.get_fontSynthesis_h5auiy_k$() : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.spanStyle_1.get_fontFamily_ulphcs_k$() : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.spanStyle_1.get_fontFeatureSettings_a47533_k$() : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.spanStyle_1.get_letterSpacing_k79xfu_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? this.spanStyle_1.get_baselineShift_99zyho_k$() : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.spanStyle_1.get_textGeometricTransform_tdfmin_k$() : textGeometricTransform;
    localeList = localeList === VOID ? this.spanStyle_1.get_localeList_1gj9gh_k$() : localeList;
    background = background === VOID ? this.spanStyle_1.get_background_8l4942_k$() : background;
    textDecoration = textDecoration === VOID ? this.spanStyle_1.get_textDecoration_itgjwm_k$() : textDecoration;
    shadow = shadow === VOID ? this.spanStyle_1.get_shadow_jgtb8p_k$() : shadow;
    textAlign = textAlign === VOID ? this.paragraphStyle_1.get_textAlign_fnegkd_k$() : textAlign;
    textDirection = textDirection === VOID ? this.paragraphStyle_1.get_textDirection_h0bug3_k$() : textDirection;
    lineHeight = lineHeight === VOID ? this.paragraphStyle_1.get_lineHeight_3vvefu_k$() : lineHeight;
    textIndent = textIndent === VOID ? this.paragraphStyle_1.get_textIndent_5mau2q_k$() : textIndent;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_1clm0n_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent);
    } else {
      var tmp_0 = $super.copy_1clm0n_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
      var tmp_7 = textAlign;
      var tmp_8 = tmp_7 == null ? null : new TextAlign(tmp_7);
      var tmp_9 = textDirection;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_6, textGeometricTransform, localeList, new Color(background), textDecoration, shadow, tmp_8, tmp_9 == null ? null : new TextDirection(tmp_9), new TextUnit(lineHeight), textIndent);
    }
    return tmp;
  };
  protoOf(TextStyle).copy_57o59s_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle) {
    var tmp;
    if (equals(color, this.spanStyle_1.get_color_lnp1vl_k$())) {
      tmp = this.spanStyle_1.get_textForegroundStyle_h1fi7n_k$();
    } else {
      tmp = Companion_getInstance_54().from_ccukrb_k$(color);
    }
    var tmp_0 = tmp;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), this.spanStyle_1.get_drawStyle_arbehw_k$());
    var tmp_2;
    var tmp_3 = textAlign;
    if ((tmp_3 == null ? null : new TextAlign(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp_2 = textAlign;
    }
    var tmp_4 = tmp_2;
    var tmp_5;
    var tmp_6 = textDirection;
    if ((tmp_6 == null ? null : new TextDirection(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_5 = textDirection;
    }
    var tmp_7 = tmp_5;
    return new TextStyle(tmp_1, new ParagraphStyle_0(tmp_4, tmp_7, lineHeight, textIndent, platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$(), lineHeightStyle, this.get_lineBreak_osjg5f_k$(), this.get_hyphens_oe87pf_k$(), this.get_textMotion_7jbf0s_k$()), platformStyle);
  };
  protoOf(TextStyle).copy$default_rvqgsk_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $super) {
    color = color === VOID ? this.spanStyle_1.get_color_lnp1vl_k$() : color;
    fontSize = fontSize === VOID ? this.spanStyle_1.get_fontSize_ergf2z_k$() : fontSize;
    fontWeight = fontWeight === VOID ? this.spanStyle_1.get_fontWeight_wbif2o_k$() : fontWeight;
    fontStyle = fontStyle === VOID ? this.spanStyle_1.get_fontStyle_hzv4zg_k$() : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.spanStyle_1.get_fontSynthesis_h5auiy_k$() : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.spanStyle_1.get_fontFamily_ulphcs_k$() : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.spanStyle_1.get_fontFeatureSettings_a47533_k$() : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.spanStyle_1.get_letterSpacing_k79xfu_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? this.spanStyle_1.get_baselineShift_99zyho_k$() : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.spanStyle_1.get_textGeometricTransform_tdfmin_k$() : textGeometricTransform;
    localeList = localeList === VOID ? this.spanStyle_1.get_localeList_1gj9gh_k$() : localeList;
    background = background === VOID ? this.spanStyle_1.get_background_8l4942_k$() : background;
    textDecoration = textDecoration === VOID ? this.spanStyle_1.get_textDecoration_itgjwm_k$() : textDecoration;
    shadow = shadow === VOID ? this.spanStyle_1.get_shadow_jgtb8p_k$() : shadow;
    textAlign = textAlign === VOID ? this.paragraphStyle_1.get_textAlign_fnegkd_k$() : textAlign;
    textDirection = textDirection === VOID ? this.paragraphStyle_1.get_textDirection_h0bug3_k$() : textDirection;
    lineHeight = lineHeight === VOID ? this.paragraphStyle_1.get_lineHeight_3vvefu_k$() : lineHeight;
    textIndent = textIndent === VOID ? this.paragraphStyle_1.get_textIndent_5mau2q_k$() : textIndent;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.paragraphStyle_1.get_lineHeightStyle_fzu4s3_k$() : lineHeightStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_57o59s_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle);
    } else {
      var tmp_0 = $super.copy_57o59s_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
      var tmp_7 = textAlign;
      var tmp_8 = tmp_7 == null ? null : new TextAlign(tmp_7);
      var tmp_9 = textDirection;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_6, textGeometricTransform, localeList, new Color(background), textDecoration, shadow, tmp_8, tmp_9 == null ? null : new TextDirection(tmp_9), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle);
    }
    return tmp;
  };
  protoOf(TextStyle).copy_9myb8m_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    var tmp;
    if (equals(color, this.spanStyle_1.get_color_lnp1vl_k$())) {
      tmp = this.spanStyle_1.get_textForegroundStyle_h1fi7n_k$();
    } else {
      tmp = Companion_getInstance_54().from_ccukrb_k$(color);
    }
    var tmp_0 = tmp;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), this.get_drawStyle_arbehw_k$());
    var tmp_2;
    var tmp_3 = textAlign;
    if ((tmp_3 == null ? null : new TextAlign(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp_2 = textAlign;
    }
    var tmp_4 = tmp_2;
    var tmp_5;
    var tmp_6 = textDirection;
    if ((tmp_6 == null ? null : new TextDirection(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_5 = textDirection;
    }
    var tmp_7 = tmp_5;
    var tmp_8 = platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$();
    var tmp_9;
    var tmp_10 = lineBreak;
    if ((tmp_10 == null ? null : new LineBreak(tmp_10)) == null) {
      tmp_9 = Companion_getInstance_63().get_Unspecified_afm6zt_k$();
    } else {
      tmp_9 = lineBreak;
    }
    var tmp_11 = tmp_9;
    var tmp_12;
    var tmp_13 = hyphens;
    if ((tmp_13 == null ? null : new Hyphens(tmp_13)) == null) {
      tmp_12 = Companion_getInstance_46().get_Unspecified_43rcur_k$();
    } else {
      tmp_12 = hyphens;
    }
    return new TextStyle(tmp_1, new ParagraphStyle_0(tmp_4, tmp_7, lineHeight, textIndent, tmp_8, lineHeightStyle, tmp_11, tmp_12, this.get_textMotion_7jbf0s_k$()), platformStyle);
  };
  protoOf(TextStyle).copy$default_zll5s_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $super) {
    color = color === VOID ? this.spanStyle_1.get_color_lnp1vl_k$() : color;
    fontSize = fontSize === VOID ? this.spanStyle_1.get_fontSize_ergf2z_k$() : fontSize;
    fontWeight = fontWeight === VOID ? this.spanStyle_1.get_fontWeight_wbif2o_k$() : fontWeight;
    fontStyle = fontStyle === VOID ? this.spanStyle_1.get_fontStyle_hzv4zg_k$() : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.spanStyle_1.get_fontSynthesis_h5auiy_k$() : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.spanStyle_1.get_fontFamily_ulphcs_k$() : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.spanStyle_1.get_fontFeatureSettings_a47533_k$() : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.spanStyle_1.get_letterSpacing_k79xfu_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? this.spanStyle_1.get_baselineShift_99zyho_k$() : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.spanStyle_1.get_textGeometricTransform_tdfmin_k$() : textGeometricTransform;
    localeList = localeList === VOID ? this.spanStyle_1.get_localeList_1gj9gh_k$() : localeList;
    background = background === VOID ? this.spanStyle_1.get_background_8l4942_k$() : background;
    textDecoration = textDecoration === VOID ? this.spanStyle_1.get_textDecoration_itgjwm_k$() : textDecoration;
    shadow = shadow === VOID ? this.spanStyle_1.get_shadow_jgtb8p_k$() : shadow;
    textAlign = textAlign === VOID ? this.paragraphStyle_1.get_textAlign_fnegkd_k$() : textAlign;
    textDirection = textDirection === VOID ? this.paragraphStyle_1.get_textDirection_h0bug3_k$() : textDirection;
    lineHeight = lineHeight === VOID ? this.paragraphStyle_1.get_lineHeight_3vvefu_k$() : lineHeight;
    textIndent = textIndent === VOID ? this.paragraphStyle_1.get_textIndent_5mau2q_k$() : textIndent;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.paragraphStyle_1.get_lineHeightStyle_fzu4s3_k$() : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.paragraphStyle_1.get_lineBreak_osjg5f_k$() : lineBreak;
    hyphens = hyphens === VOID ? this.paragraphStyle_1.get_hyphens_oe87pf_k$() : hyphens;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_9myb8m_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens);
    } else {
      var tmp_0 = $super.copy_9myb8m_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
      var tmp_7 = textAlign;
      var tmp_8 = tmp_7 == null ? null : new TextAlign(tmp_7);
      var tmp_9 = textDirection;
      var tmp_10 = tmp_9 == null ? null : new TextDirection(tmp_9);
      var tmp_11 = lineBreak;
      var tmp_12 = tmp_11 == null ? null : new LineBreak(tmp_11);
      var tmp_13 = hyphens;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_6, textGeometricTransform, localeList, new Color(background), textDecoration, shadow, tmp_8, tmp_10, new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, tmp_12, tmp_13 == null ? null : new Hyphens(tmp_13));
    }
    return tmp;
  };
  protoOf(TextStyle).copy_25irrn_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp;
    if (equals(color, this.spanStyle_1.get_color_lnp1vl_k$())) {
      tmp = this.spanStyle_1.get_textForegroundStyle_h1fi7n_k$();
    } else {
      tmp = Companion_getInstance_54().from_ccukrb_k$(color);
    }
    var tmp_0 = tmp;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), drawStyle);
    var tmp_2;
    var tmp_3 = textAlign;
    if ((tmp_3 == null ? null : new TextAlign(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp_2 = textAlign;
    }
    var tmp_4 = tmp_2;
    var tmp_5;
    var tmp_6 = textDirection;
    if ((tmp_6 == null ? null : new TextDirection(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_5 = textDirection;
    }
    var tmp_7 = tmp_5;
    var tmp_8 = platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$();
    var tmp_9;
    var tmp_10 = lineBreak;
    if ((tmp_10 == null ? null : new LineBreak(tmp_10)) == null) {
      tmp_9 = Companion_getInstance_63().get_Unspecified_afm6zt_k$();
    } else {
      tmp_9 = lineBreak;
    }
    var tmp_11 = tmp_9;
    var tmp_12;
    var tmp_13 = hyphens;
    if ((tmp_13 == null ? null : new Hyphens(tmp_13)) == null) {
      tmp_12 = Companion_getInstance_46().get_Unspecified_43rcur_k$();
    } else {
      tmp_12 = hyphens;
    }
    return new TextStyle(tmp_1, new ParagraphStyle_0(tmp_4, tmp_7, lineHeight, textIndent, tmp_8, lineHeightStyle, tmp_11, tmp_12, textMotion), platformStyle);
  };
  protoOf(TextStyle).copy$default_82cxxr_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    color = color === VOID ? this.spanStyle_1.get_color_lnp1vl_k$() : color;
    fontSize = fontSize === VOID ? this.spanStyle_1.get_fontSize_ergf2z_k$() : fontSize;
    fontWeight = fontWeight === VOID ? this.spanStyle_1.get_fontWeight_wbif2o_k$() : fontWeight;
    fontStyle = fontStyle === VOID ? this.spanStyle_1.get_fontStyle_hzv4zg_k$() : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.spanStyle_1.get_fontSynthesis_h5auiy_k$() : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.spanStyle_1.get_fontFamily_ulphcs_k$() : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.spanStyle_1.get_fontFeatureSettings_a47533_k$() : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.spanStyle_1.get_letterSpacing_k79xfu_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? this.spanStyle_1.get_baselineShift_99zyho_k$() : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.spanStyle_1.get_textGeometricTransform_tdfmin_k$() : textGeometricTransform;
    localeList = localeList === VOID ? this.spanStyle_1.get_localeList_1gj9gh_k$() : localeList;
    background = background === VOID ? this.spanStyle_1.get_background_8l4942_k$() : background;
    textDecoration = textDecoration === VOID ? this.spanStyle_1.get_textDecoration_itgjwm_k$() : textDecoration;
    shadow = shadow === VOID ? this.spanStyle_1.get_shadow_jgtb8p_k$() : shadow;
    drawStyle = drawStyle === VOID ? this.spanStyle_1.get_drawStyle_arbehw_k$() : drawStyle;
    textAlign = textAlign === VOID ? this.paragraphStyle_1.get_textAlign_fnegkd_k$() : textAlign;
    textDirection = textDirection === VOID ? this.paragraphStyle_1.get_textDirection_h0bug3_k$() : textDirection;
    lineHeight = lineHeight === VOID ? this.paragraphStyle_1.get_lineHeight_3vvefu_k$() : lineHeight;
    textIndent = textIndent === VOID ? this.paragraphStyle_1.get_textIndent_5mau2q_k$() : textIndent;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.paragraphStyle_1.get_lineHeightStyle_fzu4s3_k$() : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.paragraphStyle_1.get_lineBreak_osjg5f_k$() : lineBreak;
    hyphens = hyphens === VOID ? this.paragraphStyle_1.get_hyphens_oe87pf_k$() : hyphens;
    textMotion = textMotion === VOID ? this.paragraphStyle_1.get_textMotion_7jbf0s_k$() : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_25irrn_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.copy_25irrn_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
      var tmp_7 = textAlign;
      var tmp_8 = tmp_7 == null ? null : new TextAlign(tmp_7);
      var tmp_9 = textDirection;
      var tmp_10 = tmp_9 == null ? null : new TextDirection(tmp_9);
      var tmp_11 = lineBreak;
      var tmp_12 = tmp_11 == null ? null : new LineBreak(tmp_11);
      var tmp_13 = hyphens;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_6, textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, tmp_8, tmp_10, new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, tmp_12, tmp_13 == null ? null : new Hyphens(tmp_13), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).copy_hn12j9_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp;
    if (equals(color, this.spanStyle_1.get_color_lnp1vl_k$())) {
      tmp = this.spanStyle_1.get_textForegroundStyle_h1fi7n_k$();
    } else {
      tmp = Companion_getInstance_54().from_ccukrb_k$(color);
    }
    var tmp_0 = tmp;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), drawStyle);
    return new TextStyle(tmp_1, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$(), lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).copy$default_p0dymp_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    color = color === VOID ? this.spanStyle_1.get_color_lnp1vl_k$() : color;
    fontSize = fontSize === VOID ? this.spanStyle_1.get_fontSize_ergf2z_k$() : fontSize;
    fontWeight = fontWeight === VOID ? this.spanStyle_1.get_fontWeight_wbif2o_k$() : fontWeight;
    fontStyle = fontStyle === VOID ? this.spanStyle_1.get_fontStyle_hzv4zg_k$() : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.spanStyle_1.get_fontSynthesis_h5auiy_k$() : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.spanStyle_1.get_fontFamily_ulphcs_k$() : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.spanStyle_1.get_fontFeatureSettings_a47533_k$() : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.spanStyle_1.get_letterSpacing_k79xfu_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? this.spanStyle_1.get_baselineShift_99zyho_k$() : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.spanStyle_1.get_textGeometricTransform_tdfmin_k$() : textGeometricTransform;
    localeList = localeList === VOID ? this.spanStyle_1.get_localeList_1gj9gh_k$() : localeList;
    background = background === VOID ? this.spanStyle_1.get_background_8l4942_k$() : background;
    textDecoration = textDecoration === VOID ? this.spanStyle_1.get_textDecoration_itgjwm_k$() : textDecoration;
    shadow = shadow === VOID ? this.spanStyle_1.get_shadow_jgtb8p_k$() : shadow;
    drawStyle = drawStyle === VOID ? this.spanStyle_1.get_drawStyle_arbehw_k$() : drawStyle;
    textAlign = textAlign === VOID ? this.paragraphStyle_1.get_textAlign_fnegkd_k$() : textAlign;
    textDirection = textDirection === VOID ? this.paragraphStyle_1.get_textDirection_h0bug3_k$() : textDirection;
    lineHeight = lineHeight === VOID ? this.paragraphStyle_1.get_lineHeight_3vvefu_k$() : lineHeight;
    textIndent = textIndent === VOID ? this.paragraphStyle_1.get_textIndent_5mau2q_k$() : textIndent;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.paragraphStyle_1.get_lineHeightStyle_fzu4s3_k$() : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.paragraphStyle_1.get_lineBreak_osjg5f_k$() : lineBreak;
    hyphens = hyphens === VOID ? this.paragraphStyle_1.get_hyphens_oe87pf_k$() : hyphens;
    textMotion = textMotion === VOID ? this.paragraphStyle_1.get_textMotion_7jbf0s_k$() : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_hn12j9_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.copy_hn12j9_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).copy_tq2cgj_k$ = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp = SpanStyle_init_$Create$_2(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), drawStyle);
    var tmp_0;
    var tmp_1 = textAlign;
    if ((tmp_1 == null ? null : new TextAlign(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_51().get_Unspecified_23bj44_k$();
    } else {
      tmp_0 = textAlign;
    }
    var tmp_2 = tmp_0;
    var tmp_3;
    var tmp_4 = textDirection;
    if ((tmp_4 == null ? null : new TextDirection(tmp_4)) == null) {
      tmp_3 = Companion_getInstance_53().get_Unspecified_8uxrb6_k$();
    } else {
      tmp_3 = textDirection;
    }
    var tmp_5 = tmp_3;
    var tmp_6 = platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$();
    var tmp_7;
    var tmp_8 = lineBreak;
    if ((tmp_8 == null ? null : new LineBreak(tmp_8)) == null) {
      tmp_7 = Companion_getInstance_63().get_Unspecified_afm6zt_k$();
    } else {
      tmp_7 = lineBreak;
    }
    var tmp_9 = tmp_7;
    var tmp_10;
    var tmp_11 = hyphens;
    if ((tmp_11 == null ? null : new Hyphens(tmp_11)) == null) {
      tmp_10 = Companion_getInstance_46().get_Unspecified_43rcur_k$();
    } else {
      tmp_10 = hyphens;
    }
    return new TextStyle(tmp, new ParagraphStyle_0(tmp_2, tmp_5, lineHeight, textIndent, tmp_6, lineHeightStyle, tmp_9, tmp_10, textMotion), platformStyle);
  };
  protoOf(TextStyle).copy$default_tzbh93_k$ = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    alpha = alpha === VOID ? this.spanStyle_1.get_alpha_iooth1_k$() : alpha;
    fontSize = fontSize === VOID ? this.spanStyle_1.get_fontSize_ergf2z_k$() : fontSize;
    fontWeight = fontWeight === VOID ? this.spanStyle_1.get_fontWeight_wbif2o_k$() : fontWeight;
    fontStyle = fontStyle === VOID ? this.spanStyle_1.get_fontStyle_hzv4zg_k$() : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.spanStyle_1.get_fontSynthesis_h5auiy_k$() : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.spanStyle_1.get_fontFamily_ulphcs_k$() : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.spanStyle_1.get_fontFeatureSettings_a47533_k$() : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.spanStyle_1.get_letterSpacing_k79xfu_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? this.spanStyle_1.get_baselineShift_99zyho_k$() : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.spanStyle_1.get_textGeometricTransform_tdfmin_k$() : textGeometricTransform;
    localeList = localeList === VOID ? this.spanStyle_1.get_localeList_1gj9gh_k$() : localeList;
    background = background === VOID ? this.spanStyle_1.get_background_8l4942_k$() : background;
    textDecoration = textDecoration === VOID ? this.spanStyle_1.get_textDecoration_itgjwm_k$() : textDecoration;
    shadow = shadow === VOID ? this.spanStyle_1.get_shadow_jgtb8p_k$() : shadow;
    drawStyle = drawStyle === VOID ? this.spanStyle_1.get_drawStyle_arbehw_k$() : drawStyle;
    textAlign = textAlign === VOID ? this.paragraphStyle_1.get_textAlign_fnegkd_k$() : textAlign;
    textDirection = textDirection === VOID ? this.paragraphStyle_1.get_textDirection_h0bug3_k$() : textDirection;
    lineHeight = lineHeight === VOID ? this.paragraphStyle_1.get_lineHeight_3vvefu_k$() : lineHeight;
    textIndent = textIndent === VOID ? this.paragraphStyle_1.get_textIndent_5mau2q_k$() : textIndent;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.paragraphStyle_1.get_lineHeightStyle_fzu4s3_k$() : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.paragraphStyle_1.get_lineBreak_osjg5f_k$() : lineBreak;
    hyphens = hyphens === VOID ? this.paragraphStyle_1.get_hyphens_oe87pf_k$() : hyphens;
    textMotion = textMotion === VOID ? this.paragraphStyle_1.get_textMotion_7jbf0s_k$() : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_tq2cgj_k$(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.copy_tq2cgj_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
      var tmp_7 = textAlign;
      var tmp_8 = tmp_7 == null ? null : new TextAlign(tmp_7);
      var tmp_9 = textDirection;
      var tmp_10 = tmp_9 == null ? null : new TextDirection(tmp_9);
      var tmp_11 = lineBreak;
      var tmp_12 = tmp_11 == null ? null : new LineBreak(tmp_11);
      var tmp_13 = hyphens;
      tmp = tmp_0.call(this, brush, alpha, new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_6, textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, tmp_8, tmp_10, new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, tmp_12, tmp_13 == null ? null : new Hyphens(tmp_13), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).copy_n96f73_k$ = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp = SpanStyle_init_$Create$_2(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), drawStyle);
    return new TextStyle(tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$(), lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).copy$default_80dgob_k$ = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    alpha = alpha === VOID ? this.spanStyle_1.get_alpha_iooth1_k$() : alpha;
    fontSize = fontSize === VOID ? this.spanStyle_1.get_fontSize_ergf2z_k$() : fontSize;
    fontWeight = fontWeight === VOID ? this.spanStyle_1.get_fontWeight_wbif2o_k$() : fontWeight;
    fontStyle = fontStyle === VOID ? this.spanStyle_1.get_fontStyle_hzv4zg_k$() : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.spanStyle_1.get_fontSynthesis_h5auiy_k$() : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.spanStyle_1.get_fontFamily_ulphcs_k$() : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.spanStyle_1.get_fontFeatureSettings_a47533_k$() : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.spanStyle_1.get_letterSpacing_k79xfu_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? this.spanStyle_1.get_baselineShift_99zyho_k$() : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.spanStyle_1.get_textGeometricTransform_tdfmin_k$() : textGeometricTransform;
    localeList = localeList === VOID ? this.spanStyle_1.get_localeList_1gj9gh_k$() : localeList;
    background = background === VOID ? this.spanStyle_1.get_background_8l4942_k$() : background;
    textDecoration = textDecoration === VOID ? this.spanStyle_1.get_textDecoration_itgjwm_k$() : textDecoration;
    shadow = shadow === VOID ? this.spanStyle_1.get_shadow_jgtb8p_k$() : shadow;
    drawStyle = drawStyle === VOID ? this.spanStyle_1.get_drawStyle_arbehw_k$() : drawStyle;
    textAlign = textAlign === VOID ? this.paragraphStyle_1.get_textAlign_fnegkd_k$() : textAlign;
    textDirection = textDirection === VOID ? this.paragraphStyle_1.get_textDirection_h0bug3_k$() : textDirection;
    lineHeight = lineHeight === VOID ? this.paragraphStyle_1.get_lineHeight_3vvefu_k$() : lineHeight;
    textIndent = textIndent === VOID ? this.paragraphStyle_1.get_textIndent_5mau2q_k$() : textIndent;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.paragraphStyle_1.get_lineHeightStyle_fzu4s3_k$() : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.paragraphStyle_1.get_lineBreak_osjg5f_k$() : lineBreak;
    hyphens = hyphens === VOID ? this.paragraphStyle_1.get_hyphens_oe87pf_k$() : hyphens;
    textMotion = textMotion === VOID ? this.paragraphStyle_1.get_textMotion_7jbf0s_k$() : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_n96f73_k$(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.copy_n96f73_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, brush, alpha, new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).get_brush_ipcjyp_k$ = function () {
    return this.spanStyle_1.get_brush_ipcjyp_k$();
  };
  protoOf(TextStyle).get_color_lnp1vl_k$ = function () {
    return this.spanStyle_1.get_color_lnp1vl_k$();
  };
  protoOf(TextStyle).get_alpha_iooth1_k$ = function () {
    return this.spanStyle_1.get_alpha_iooth1_k$();
  };
  protoOf(TextStyle).get_fontSize_ergf2z_k$ = function () {
    return this.spanStyle_1.get_fontSize_ergf2z_k$();
  };
  protoOf(TextStyle).get_fontWeight_wbif2o_k$ = function () {
    return this.spanStyle_1.get_fontWeight_wbif2o_k$();
  };
  protoOf(TextStyle).get_fontStyle_hzv4zg_k$ = function () {
    return this.spanStyle_1.get_fontStyle_hzv4zg_k$();
  };
  protoOf(TextStyle).get_fontSynthesis_h5auiy_k$ = function () {
    return this.spanStyle_1.get_fontSynthesis_h5auiy_k$();
  };
  protoOf(TextStyle).get_fontFamily_ulphcs_k$ = function () {
    return this.spanStyle_1.get_fontFamily_ulphcs_k$();
  };
  protoOf(TextStyle).get_fontFeatureSettings_a47533_k$ = function () {
    return this.spanStyle_1.get_fontFeatureSettings_a47533_k$();
  };
  protoOf(TextStyle).get_letterSpacing_k79xfu_k$ = function () {
    return this.spanStyle_1.get_letterSpacing_k79xfu_k$();
  };
  protoOf(TextStyle).get_baselineShift_99zyho_k$ = function () {
    return this.spanStyle_1.get_baselineShift_99zyho_k$();
  };
  protoOf(TextStyle).get_textGeometricTransform_tdfmin_k$ = function () {
    return this.spanStyle_1.get_textGeometricTransform_tdfmin_k$();
  };
  protoOf(TextStyle).get_localeList_1gj9gh_k$ = function () {
    return this.spanStyle_1.get_localeList_1gj9gh_k$();
  };
  protoOf(TextStyle).get_background_8l4942_k$ = function () {
    return this.spanStyle_1.get_background_8l4942_k$();
  };
  protoOf(TextStyle).get_textDecoration_itgjwm_k$ = function () {
    return this.spanStyle_1.get_textDecoration_itgjwm_k$();
  };
  protoOf(TextStyle).get_shadow_jgtb8p_k$ = function () {
    return this.spanStyle_1.get_shadow_jgtb8p_k$();
  };
  protoOf(TextStyle).get_drawStyle_arbehw_k$ = function () {
    return this.spanStyle_1.get_drawStyle_arbehw_k$();
  };
  protoOf(TextStyle).get_textAlign_fnegkd_k$ = function () {
    return this.paragraphStyle_1.get_textAlign_fnegkd_k$();
  };
  protoOf(TextStyle).get_deprecated_boxing_textAlign_g4gdz4_k$ = function () {
    return this.get_textAlign_fnegkd_k$();
  };
  protoOf(TextStyle).get_textDirection_h0bug3_k$ = function () {
    return this.paragraphStyle_1.get_textDirection_h0bug3_k$();
  };
  protoOf(TextStyle).get_deprecated_boxing_textDirection_273xmo_k$ = function () {
    return this.get_textDirection_h0bug3_k$();
  };
  protoOf(TextStyle).get_lineHeight_3vvefu_k$ = function () {
    return this.paragraphStyle_1.get_lineHeight_3vvefu_k$();
  };
  protoOf(TextStyle).get_textIndent_5mau2q_k$ = function () {
    return this.paragraphStyle_1.get_textIndent_5mau2q_k$();
  };
  protoOf(TextStyle).get_lineHeightStyle_fzu4s3_k$ = function () {
    return this.paragraphStyle_1.get_lineHeightStyle_fzu4s3_k$();
  };
  protoOf(TextStyle).get_hyphens_oe87pf_k$ = function () {
    return this.paragraphStyle_1.get_hyphens_oe87pf_k$();
  };
  protoOf(TextStyle).get_deprecated_boxing_hyphens_t3mdr4_k$ = function () {
    return this.get_hyphens_oe87pf_k$();
  };
  protoOf(TextStyle).get_lineBreak_osjg5f_k$ = function () {
    return this.paragraphStyle_1.get_lineBreak_osjg5f_k$();
  };
  protoOf(TextStyle).get_deprecated_boxing_lineBreak_u2tun4_k$ = function () {
    return this.get_lineBreak_osjg5f_k$();
  };
  protoOf(TextStyle).get_textMotion_7jbf0s_k$ = function () {
    return this.paragraphStyle_1.get_textMotion_7jbf0s_k$();
  };
  protoOf(TextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStyle))
      return false;
    if (!this.spanStyle_1.equals(other.spanStyle_1))
      return false;
    if (!this.paragraphStyle_1.equals(other.paragraphStyle_1))
      return false;
    if (!equals(this.platformStyle_1, other.platformStyle_1))
      return false;
    return true;
  };
  protoOf(TextStyle).hasSameLayoutAffectingAttributes_42axi4_k$ = function (other) {
    return this === other || (this.paragraphStyle_1.equals(other.paragraphStyle_1) && this.spanStyle_1.hasSameLayoutAffectingAttributes_tm1ym7_k$(other.spanStyle_1));
  };
  protoOf(TextStyle).hasSameDrawAffectingAttributes_drzoqy_k$ = function (other) {
    return this === other || this.spanStyle_1.hasSameNonLayoutAttributes_jdejzn_k$(other.spanStyle_1);
  };
  protoOf(TextStyle).hashCode = function () {
    var result = this.spanStyle_1.hashCode();
    result = imul(31, result) + this.paragraphStyle_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.platformStyle_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextStyle).hashCodeLayoutAffectingAttributes_u2p6xm_k$ = function () {
    var result = this.spanStyle_1.hashCodeLayoutAffectingAttributes_u2p6xm_k$();
    result = imul(31, result) + this.paragraphStyle_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.platformStyle_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextStyle).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    this_0.append_22ad7x_k$('TextStyle(');
    this_0.append_22ad7x_k$('color=' + Color__toString_impl_hpzmaq(this.get_color_lnp1vl_k$()) + ', ');
    this_0.append_22ad7x_k$('brush=' + toString(this.get_brush_ipcjyp_k$()) + ', ');
    this_0.append_22ad7x_k$('alpha=' + this.get_alpha_iooth1_k$() + ', ');
    this_0.append_22ad7x_k$('fontSize=' + TextUnit__toString_impl_51ghw0(this.get_fontSize_ergf2z_k$()) + ', ');
    this_0.append_22ad7x_k$('fontWeight=' + toString(this.get_fontWeight_wbif2o_k$()) + ', ');
    var tmp = this.get_fontStyle_hzv4zg_k$();
    this_0.append_22ad7x_k$('fontStyle=' + toString(tmp == null ? null : new FontStyle(tmp)) + ', ');
    var tmp_0 = this.get_fontSynthesis_h5auiy_k$();
    this_0.append_22ad7x_k$('fontSynthesis=' + toString(tmp_0 == null ? null : new FontSynthesis(tmp_0)) + ', ');
    this_0.append_22ad7x_k$('fontFamily=' + toString(this.get_fontFamily_ulphcs_k$()) + ', ');
    this_0.append_22ad7x_k$('fontFeatureSettings=' + this.get_fontFeatureSettings_a47533_k$() + ', ');
    this_0.append_22ad7x_k$('letterSpacing=' + TextUnit__toString_impl_51ghw0(this.get_letterSpacing_k79xfu_k$()) + ', ');
    var tmp_1 = this.get_baselineShift_99zyho_k$();
    this_0.append_22ad7x_k$('baselineShift=' + toString(tmp_1 == null ? null : new BaselineShift(tmp_1)) + ', ');
    this_0.append_22ad7x_k$('textGeometricTransform=' + toString(this.get_textGeometricTransform_tdfmin_k$()) + ', ');
    this_0.append_22ad7x_k$('localeList=' + toString(this.get_localeList_1gj9gh_k$()) + ', ');
    this_0.append_22ad7x_k$('background=' + Color__toString_impl_hpzmaq(this.get_background_8l4942_k$()) + ', ');
    this_0.append_22ad7x_k$('textDecoration=' + toString(this.get_textDecoration_itgjwm_k$()) + ', ');
    this_0.append_22ad7x_k$('shadow=' + toString(this.get_shadow_jgtb8p_k$()) + ', ');
    this_0.append_22ad7x_k$('drawStyle=' + toString(this.get_drawStyle_arbehw_k$()) + ', ');
    this_0.append_22ad7x_k$('textAlign=' + TextAlign__toString_impl_6ha6d3(this.get_textAlign_fnegkd_k$()) + ', ');
    this_0.append_22ad7x_k$('textDirection=' + TextDirection__toString_impl_x3uh9t(this.get_textDirection_h0bug3_k$()) + ', ');
    this_0.append_22ad7x_k$('lineHeight=' + TextUnit__toString_impl_51ghw0(this.get_lineHeight_3vvefu_k$()) + ', ');
    this_0.append_22ad7x_k$('textIndent=' + toString(this.get_textIndent_5mau2q_k$()) + ', ');
    this_0.append_22ad7x_k$('platformStyle=' + toString(this.platformStyle_1) + ', ');
    this_0.append_22ad7x_k$('lineHeightStyle=' + toString(this.get_lineHeightStyle_fzu4s3_k$()) + ', ');
    this_0.append_22ad7x_k$('lineBreak=' + LineBreak__toString_impl_mphhli(this.get_lineBreak_osjg5f_k$()) + ', ');
    this_0.append_22ad7x_k$('hyphens=' + Hyphens__toString_impl_ck1wg0(this.get_hyphens_oe87pf_k$()) + ', ');
    this_0.append_22ad7x_k$('textMotion=' + toString(this.get_textMotion_7jbf0s_k$()));
    this_0.append_22ad7x_k$(')');
    return this_0.toString();
  };
  function lerp_6(start, stop, fraction) {
    return TextStyle_init_$Create$_0(lerp_5(start.toSpanStyle_l454tw_k$(), stop.toSpanStyle_l454tw_k$(), fraction), lerp_4(start.toParagraphStyle_zfuegy_k$(), stop.toParagraphStyle_zfuegy_k$(), fraction));
  }
  function resolveDefaults(style, direction) {
    return new TextStyle(resolveSpanStyleDefaults(style.spanStyle_1), resolveParagraphStyleDefaults(style.paragraphStyle_1, direction), style.platformStyle_1);
  }
  function createPlatformTextStyleInternal(platformSpanStyle, platformParagraphStyle) {
    var tmp;
    if (platformSpanStyle == null && platformParagraphStyle == null) {
      tmp = null;
    } else {
      tmp = createPlatformTextStyle(platformSpanStyle, platformParagraphStyle);
    }
    return tmp;
  }
  function resolveTextDirection_0(layoutDirection, textDirection) {
    var tmp;
    if (textDirection === Companion_getInstance_53().get_Content_gdpx4s_k$()) {
      var tmp_0;
      switch (layoutDirection.get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_0 = Companion_getInstance_53().get_ContentOrLtr_byc1cl_k$();
          break;
        case 1:
          tmp_0 = Companion_getInstance_53().get_ContentOrRtl_twyiln_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    } else if (textDirection === Companion_getInstance_53().get_Unspecified_8uxrb6_k$()) {
      var tmp_1;
      switch (layoutDirection.get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_1 = Companion_getInstance_53().get_Ltr_fd58a3_k$();
          break;
        case 1:
          tmp_1 = Companion_getInstance_53().get_Rtl_qi5bo5_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_1;
    } else {
      tmp = textDirection;
    }
    return tmp;
  }
  var androidx_compose_ui_text_TtsAnnotation$stable;
  var androidx_compose_ui_text_VerbatimTtsAnnotation$stable;
  function TtsAnnotation() {
  }
  function VerbatimTtsAnnotation(verbatim) {
    TtsAnnotation.call(this);
    this.verbatim_1 = verbatim;
  }
  protoOf(VerbatimTtsAnnotation).get_verbatim_64u873_k$ = function () {
    return this.verbatim_1;
  };
  protoOf(VerbatimTtsAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerbatimTtsAnnotation))
      return false;
    if (!(this.verbatim_1 === other.verbatim_1))
      return false;
    return true;
  };
  protoOf(VerbatimTtsAnnotation).hashCode = function () {
    return getStringHashCode(this.verbatim_1);
  };
  protoOf(VerbatimTtsAnnotation).toString = function () {
    return 'VerbatimTtsAnnotation(verbatim=' + this.verbatim_1 + ')';
  };
  var androidx_compose_ui_text_UrlAnnotation$stable;
  function UrlAnnotation(url) {
    this.url_1 = url;
  }
  protoOf(UrlAnnotation).get_url_18iuii_k$ = function () {
    return this.url_1;
  };
  protoOf(UrlAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UrlAnnotation))
      return false;
    if (!(this.url_1 === other.url_1))
      return false;
    return true;
  };
  protoOf(UrlAnnotation).hashCode = function () {
    return getStringHashCode(this.url_1);
  };
  protoOf(UrlAnnotation).toString = function () {
    return 'UrlAnnotation(url=' + this.url_1 + ')';
  };
  var androidx_compose_ui_text_font_ResourceFont$stable;
  function ResourceLoader() {
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.MaximumAsyncTimeoutMillis_1 = new Long(15000, 0);
  }
  protoOf(Companion_9).get_MaximumAsyncTimeoutMillis_x7fazm_k$ = function () {
    return this.MaximumAsyncTimeoutMillis_1;
  };
  var Companion_instance_9;
  function Companion_getInstance_26() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Font() {
  }
  function toFontFamily(_this__u8e3s4) {
    return FontFamily_0([_this__u8e3s4]);
  }
  function PlatformFontLoader() {
  }
  var androidx_compose_ui_text_font_FontFamily$stable;
  var androidx_compose_ui_text_font_FileBasedFontFamily$stable;
  var androidx_compose_ui_text_font_SystemFontFamily$stable;
  var androidx_compose_ui_text_font_FontListFontFamily$stable;
  var androidx_compose_ui_text_font_GenericFontFamily$stable;
  var androidx_compose_ui_text_font_DefaultFontFamily$stable;
  var androidx_compose_ui_text_font_LoadedFontFamily$stable;
  function _get_fontFamilyName__opab5f($this) {
    return $this.fontFamilyName_1;
  }
  function GenericFontFamily(name, fontFamilyName) {
    SystemFontFamily.call(this);
    this.name_1 = name;
    this.fontFamilyName_1 = fontFamilyName;
  }
  protoOf(GenericFontFamily).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(GenericFontFamily).toString = function () {
    return this.fontFamilyName_1;
  };
  function Resolver() {
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.Default_1 = new DefaultFontFamily();
    this.SansSerif_1 = new GenericFontFamily('sans-serif', 'FontFamily.SansSerif');
    this.Serif_1 = new GenericFontFamily('serif', 'FontFamily.Serif');
    this.Monospace_1 = new GenericFontFamily('monospace', 'FontFamily.Monospace');
    this.Cursive_1 = new GenericFontFamily('cursive', 'FontFamily.Cursive');
  }
  protoOf(Companion_10).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  protoOf(Companion_10).get_SansSerif_4qz17l_k$ = function () {
    return this.SansSerif_1;
  };
  protoOf(Companion_10).get_Serif_igv9ro_k$ = function () {
    return this.Serif_1;
  };
  protoOf(Companion_10).get_Monospace_hz2yii_k$ = function () {
    return this.Monospace_1;
  };
  protoOf(Companion_10).get_Cursive_nlhumc_k$ = function () {
    return this.Cursive_1;
  };
  var Companion_instance_10;
  function Companion_getInstance_27() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function FontFamily(canLoadSynchronously) {
    Companion_getInstance_27();
    this.canLoadSynchronously_1 = canLoadSynchronously;
  }
  protoOf(FontFamily).get_canLoadSynchronously_7ivot3_k$ = function () {
    return this.canLoadSynchronously_1;
  };
  function FontFamily_0(fonts) {
    return new FontListFontFamily(asList(fonts));
  }
  function SystemFontFamily() {
    FontFamily.call(this, true);
  }
  function DefaultFontFamily() {
    SystemFontFamily.call(this);
  }
  protoOf(DefaultFontFamily).toString = function () {
    return 'FontFamily.Default';
  };
  function FontListFontFamily(fonts) {
    FileBasedFontFamily.call(this);
    this.fonts_1 = fonts;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'androidx.compose.ui.text.internal.checkPrecondition' call
    if (!!this.fonts_1.isEmpty_y1axqb_k$()) {
      var tmp$ret$1 = 'At least one font should be passed to FontFamily';
      throwIllegalStateException(tmp$ret$1);
    }
  }
  protoOf(FontListFontFamily).get_fonts_irho7v_k$ = function () {
    return this.fonts_1;
  };
  protoOf(FontListFontFamily).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontListFontFamily))
      return false;
    if (!equals(this.fonts_1, other.fonts_1))
      return false;
    return true;
  };
  protoOf(FontListFontFamily).hashCode = function () {
    return hashCode(this.fonts_1);
  };
  protoOf(FontListFontFamily).toString = function () {
    return 'FontListFontFamily(fonts=' + toString_0(this.fonts_1) + ')';
  };
  protoOf(FontListFontFamily).isEmpty_y1axqb_k$ = function () {
    return this.fonts_1.isEmpty_y1axqb_k$();
  };
  protoOf(FontListFontFamily).contains_7cf4hq_k$ = function (element) {
    return this.fonts_1.contains_aljjnj_k$(element);
  };
  protoOf(FontListFontFamily).contains_aljjnj_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, Font) : false))
      return false;
    return this.contains_7cf4hq_k$((!(element == null) ? isInterface(element, Font) : false) ? element : THROW_CCE());
  };
  protoOf(FontListFontFamily).iterator_jk1svi_k$ = function () {
    return this.fonts_1.iterator_jk1svi_k$();
  };
  protoOf(FontListFontFamily).containsAll_ppytrt_k$ = function (elements) {
    return this.fonts_1.containsAll_xk45sd_k$(elements);
  };
  protoOf(FontListFontFamily).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_ppytrt_k$(elements);
  };
  protoOf(FontListFontFamily).get_c1px32_k$ = function (index) {
    return this.fonts_1.get_c1px32_k$(index);
  };
  protoOf(FontListFontFamily).indexOf_iinxgo_k$ = function (element) {
    return this.fonts_1.indexOf_si1fv9_k$(element);
  };
  protoOf(FontListFontFamily).indexOf_si1fv9_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, Font) : false))
      return -1;
    return this.indexOf_iinxgo_k$((!(element == null) ? isInterface(element, Font) : false) ? element : THROW_CCE());
  };
  protoOf(FontListFontFamily).lastIndexOf_mex92q_k$ = function (element) {
    return this.fonts_1.lastIndexOf_v2p1fv_k$(element);
  };
  protoOf(FontListFontFamily).lastIndexOf_v2p1fv_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, Font) : false))
      return -1;
    return this.lastIndexOf_mex92q_k$((!(element == null) ? isInterface(element, Font) : false) ? element : THROW_CCE());
  };
  protoOf(FontListFontFamily).listIterator_xjshxw_k$ = function () {
    return this.fonts_1.listIterator_xjshxw_k$();
  };
  protoOf(FontListFontFamily).listIterator_70e65o_k$ = function (index) {
    return this.fonts_1.listIterator_70e65o_k$(index);
  };
  protoOf(FontListFontFamily).subList_xle3r2_k$ = function (fromIndex, toIndex) {
    return this.fonts_1.subList_xle3r2_k$(fromIndex, toIndex);
  };
  protoOf(FontListFontFamily).asJsReadonlyArrayView_ch6hjz_k$ = function () {
    return this.fonts_1.asJsReadonlyArrayView_ch6hjz_k$();
  };
  protoOf(FontListFontFamily).get_size_woubt6_k$ = function () {
    return this.fonts_1.get_size_woubt6_k$();
  };
  function FileBasedFontFamily() {
    FontFamily.call(this, false);
  }
  function LoadedFontFamily(typeface) {
    FontFamily.call(this, true);
    this.typeface_1 = typeface;
  }
  protoOf(LoadedFontFamily).get_typeface_s1tqao_k$ = function () {
    return this.typeface_1;
  };
  protoOf(LoadedFontFamily).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LoadedFontFamily))
      return false;
    if (!equals(this.typeface_1, other.typeface_1))
      return false;
    return true;
  };
  protoOf(LoadedFontFamily).hashCode = function () {
    return hashCode(this.typeface_1);
  };
  protoOf(LoadedFontFamily).toString = function () {
    return 'LoadedFontFamily(typeface=' + toString_0(this.typeface_1) + ')';
  };
  function get_GlobalTypefaceRequestCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalTypefaceRequestCache;
  }
  var GlobalTypefaceRequestCache;
  function get_GlobalAsyncTypefaceCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalAsyncTypefaceCache;
  }
  var GlobalAsyncTypefaceCache;
  var androidx_compose_ui_text_font_FontFamilyResolverImpl$stable;
  var androidx_compose_ui_text_font_TypefaceRequest$stable;
  var androidx_compose_ui_text_font_TypefaceResult_Immutable$stable;
  var androidx_compose_ui_text_font_TypefaceResult_Async$stable;
  var androidx_compose_ui_text_font_TypefaceRequestCache$stable;
  function _get_resultCache__mkt3v0($this) {
    return $this.resultCache_1;
  }
  function TypefaceRequestCache$runCached$lambda(this$0, $typefaceRequest) {
    return function (finalResult) {
      // Inline function 'androidx.compose.ui.text.platform.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.lock_1;
      if (finalResult.get_cacheable_mudhp_k$()) {
        this$0.resultCache_1.put_fa630k_k$($typefaceRequest, finalResult);
      } else {
        this$0.resultCache_1.remove_1r2rzn_k$($typefaceRequest);
      }
      return Unit_getInstance();
    };
  }
  function TypefaceRequestCache() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.text.platform.makeSynchronizedObject' call
    tmp.lock_1 = new SynchronizedObject();
    this.resultCache_1 = new LruCache(16);
  }
  protoOf(TypefaceRequestCache).get_lock_9utea7_k$ = function () {
    return this.lock_1;
  };
  protoOf(TypefaceRequestCache).runCached_m71hct_k$ = function (typefaceRequest, resolveTypeface) {
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    var tmp0_safe_receiver = this.resultCache_1.get_h31hzz_k$(typefaceRequest);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_0;
      if (tmp0_safe_receiver.get_cacheable_mudhp_k$()) {
        return tmp0_safe_receiver;
      } else {
        tmp_0 = this.resultCache_1.remove_1r2rzn_k$(typefaceRequest);
      }
      tmp = tmp_0;
    }
    var tmp_1;
    try {
      tmp_1 = resolveTypeface(TypefaceRequestCache$runCached$lambda(this, typefaceRequest));
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var cause = $p;
        throw IllegalStateException_init_$Create$('Could not load font', cause);
      } else {
        throw $p;
      }
    }
    var currentTypefaceResult = tmp_1;
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    if (this.resultCache_1.get_h31hzz_k$(typefaceRequest) == null && currentTypefaceResult.get_cacheable_mudhp_k$()) {
      this.resultCache_1.put_fa630k_k$(typefaceRequest, currentTypefaceResult);
    }
    return currentTypefaceResult;
  };
  protoOf(TypefaceRequestCache).preWarmCache_12tul7_k$ = function (typefaceRequests, resolveTypeface) {
    var inductionVariable = 0;
    var last = typefaceRequests.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var typeRequest = typefaceRequests.get_c1px32_k$(i);
        // Inline function 'androidx.compose.ui.text.platform.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        this.lock_1;
        var prior = this.resultCache_1.get_h31hzz_k$(typeRequest);
        if (!(prior == null))
          continue $l$loop_0;
        var tmp;
        try {
          tmp = resolveTypeface(typeRequest);
        } catch ($p) {
          var tmp_0;
          if ($p instanceof Exception) {
            var cause = $p;
            throw IllegalStateException_init_$Create$('Could not load font', cause);
          } else {
            throw $p;
          }
        }
        var next = tmp;
        if (next instanceof Async)
          continue $l$loop_0;
        // Inline function 'androidx.compose.ui.text.platform.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        this.lock_1;
        this.resultCache_1.put_fa630k_k$(typeRequest, next);
      }
       while (inductionVariable <= last);
  };
  protoOf(TypefaceRequestCache).get_5lj1td_k$ = function (typefaceRequest) {
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    return this.resultCache_1.get_h31hzz_k$(typefaceRequest);
  };
  protoOf(TypefaceRequestCache).get_size_bfk6p1_k$ = function () {
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    return this.resultCache_1.size_23och_k$();
  };
  function TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    this.fontFamily_1 = fontFamily;
    this.fontWeight_1 = fontWeight;
    this.fontStyle_1 = fontStyle;
    this.fontSynthesis_1 = fontSynthesis;
    this.resourceLoaderCacheKey_1 = resourceLoaderCacheKey;
  }
  protoOf(TypefaceRequest).get_fontFamily_ulphcs_k$ = function () {
    return this.fontFamily_1;
  };
  protoOf(TypefaceRequest).get_fontWeight_wbif2o_k$ = function () {
    return this.fontWeight_1;
  };
  protoOf(TypefaceRequest).get_fontStyle_nhruzn_k$ = function () {
    return this.fontStyle_1;
  };
  protoOf(TypefaceRequest).get_fontSynthesis_yx849j_k$ = function () {
    return this.fontSynthesis_1;
  };
  protoOf(TypefaceRequest).get_resourceLoaderCacheKey_29b1wn_k$ = function () {
    return this.resourceLoaderCacheKey_1;
  };
  protoOf(TypefaceRequest).component1_7eebsc_k$ = function () {
    return this.fontFamily_1;
  };
  protoOf(TypefaceRequest).component2_7eebsb_k$ = function () {
    return this.fontWeight_1;
  };
  protoOf(TypefaceRequest).component3_484z5s_k$ = function () {
    return this.fontStyle_1;
  };
  protoOf(TypefaceRequest).component4_6mpqxo_k$ = function () {
    return this.fontSynthesis_1;
  };
  protoOf(TypefaceRequest).component5_7eebs8_k$ = function () {
    return this.resourceLoaderCacheKey_1;
  };
  protoOf(TypefaceRequest).copy_j9k4y4_k$ = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    return new TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).copy$default_dq30up_k$ = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey, $super) {
    fontFamily = fontFamily === VOID ? this.fontFamily_1 : fontFamily;
    fontWeight = fontWeight === VOID ? this.fontWeight_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.fontStyle_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.fontSynthesis_1 : fontSynthesis;
    resourceLoaderCacheKey = resourceLoaderCacheKey === VOID ? this.resourceLoaderCacheKey_1 : resourceLoaderCacheKey;
    return $super === VOID ? this.copy_j9k4y4_k$(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) : $super.copy_j9k4y4_k$.call(this, fontFamily, fontWeight, new FontStyle(fontStyle), new FontSynthesis(fontSynthesis), resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).toString = function () {
    return 'TypefaceRequest(fontFamily=' + toString(this.fontFamily_1) + ', fontWeight=' + this.fontWeight_1.toString() + ', fontStyle=' + FontStyle__toString_impl_thncxr(this.fontStyle_1) + ', fontSynthesis=' + FontSynthesis__toString_impl_gunvr0(this.fontSynthesis_1) + ', resourceLoaderCacheKey=' + toString(this.resourceLoaderCacheKey_1) + ')';
  };
  protoOf(TypefaceRequest).hashCode = function () {
    var result = this.fontFamily_1 == null ? 0 : hashCode(this.fontFamily_1);
    result = imul(result, 31) + this.fontWeight_1.hashCode() | 0;
    result = imul(result, 31) + FontStyle__hashCode_impl_7qhg4w(this.fontStyle_1) | 0;
    result = imul(result, 31) + FontSynthesis__hashCode_impl_4wi11v(this.fontSynthesis_1) | 0;
    result = imul(result, 31) + (this.resourceLoaderCacheKey_1 == null ? 0 : hashCode(this.resourceLoaderCacheKey_1)) | 0;
    return result;
  };
  protoOf(TypefaceRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypefaceRequest))
      return false;
    var tmp0_other_with_cast = other instanceof TypefaceRequest ? other : THROW_CCE();
    if (!equals(this.fontFamily_1, tmp0_other_with_cast.fontFamily_1))
      return false;
    if (!this.fontWeight_1.equals(tmp0_other_with_cast.fontWeight_1))
      return false;
    if (!(this.fontStyle_1 === tmp0_other_with_cast.fontStyle_1))
      return false;
    if (!(this.fontSynthesis_1 === tmp0_other_with_cast.fontSynthesis_1))
      return false;
    if (!equals(this.resourceLoaderCacheKey_1, tmp0_other_with_cast.resourceLoaderCacheKey_1))
      return false;
    return true;
  };
  function Immutable(value, cacheable) {
    cacheable = cacheable === VOID ? true : cacheable;
    this.value_1 = value;
    this.cacheable_1 = cacheable;
  }
  protoOf(Immutable).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Immutable).get_cacheable_mudhp_k$ = function () {
    return this.cacheable_1;
  };
  function Async(current) {
    this.current_1 = current;
  }
  protoOf(Async).get_current_hlb4bv_k$ = function () {
    return this.current_1;
  };
  protoOf(Async).get_cacheable_mudhp_k$ = function () {
    return this.current_1.get_cacheable_7670tu_k$();
  };
  protoOf(Async).get_value_j01efc_k$ = function () {
    return this.current_1.get_value_j01efc_k$();
  };
  function TypefaceResult() {
  }
  function _get_platformResolveInterceptor__j8yljz($this) {
    return $this.platformResolveInterceptor_1;
  }
  function _get_typefaceRequestCache__6x0zxb($this) {
    return $this.typefaceRequestCache_1;
  }
  function _get_fontListFontFamilyTypefaceAdapter__9wmrev($this) {
    return $this.fontListFontFamilyTypefaceAdapter_1;
  }
  function _get_platformFamilyTypefaceAdapter__lu65u8($this) {
    return $this.platformFamilyTypefaceAdapter_1;
  }
  function _get_createDefaultTypeface__ho6dxn($this) {
    return $this.createDefaultTypeface_1;
  }
  function resolve($this, typefaceRequest) {
    var result = $this.typefaceRequestCache_1.runCached_m71hct_k$(typefaceRequest, FontFamilyResolverImpl$resolve$lambda($this, typefaceRequest));
    return result;
  }
  function FontFamilyResolverImpl$createDefaultTypeface$lambda(this$0) {
    return function (it) {
      return resolve(this$0, it.copy$default_dq30up_k$(null)).get_value_j01efc_k$();
    };
  }
  function FontFamilyResolverImpl$preload$lambda$lambda(it) {
    return Unit_getInstance();
  }
  function FontFamilyResolverImpl$preload$lambda$lambda_0(it) {
    return Unit_getInstance();
  }
  function FontFamilyResolverImpl$preload$lambda(this$0) {
    return function (typeRequest) {
      var tmp0_elvis_lhs = this$0.fontListFontFamilyTypefaceAdapter_1.resolve_wywkvk_k$(typeRequest, this$0.platformFontLoader_1, FontFamilyResolverImpl$preload$lambda$lambda, this$0.createDefaultTypeface_1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp = this$0.platformFamilyTypefaceAdapter_1.resolve_wywkvk_k$(typeRequest, this$0.platformFontLoader_1, FontFamilyResolverImpl$preload$lambda$lambda_0, this$0.createDefaultTypeface_1);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$_0('Could not load font');
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      return tmp_0;
    };
  }
  function FontFamilyResolverImpl$resolve$lambda(this$0, $typefaceRequest) {
    return function (onAsyncCompletion) {
      var tmp0_elvis_lhs = this$0.fontListFontFamilyTypefaceAdapter_1.resolve_wywkvk_k$($typefaceRequest, this$0.platformFontLoader_1, onAsyncCompletion, this$0.createDefaultTypeface_1);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.platformFamilyTypefaceAdapter_1.resolve_wywkvk_k$($typefaceRequest, this$0.platformFontLoader_1, onAsyncCompletion, this$0.createDefaultTypeface_1) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$_0('Could not load font');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function $preloadCOROUTINE$(_this__u8e3s4, fontFamily, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.fontFamily_1 = fontFamily;
  }
  protoOf($preloadCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this.fontFamily_1;
            if (!(tmp_0 instanceof FontListFontFamily))
              return Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.fontListFontFamilyTypefaceAdapter_1.preload_2axpx6_k$(this.fontFamily_1, this._this__u8e3s4__1.platformFontLoader_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = this.fontFamily_1.get_fonts_irho7v_k$();
            var target = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
            var inductionVariable = 0;
            var last = this_0.get_size_woubt6_k$() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.get_c1px32_k$(index);
                var element = new TypefaceRequest(this._this__u8e3s4__1.platformResolveInterceptor_1.interceptFontFamily_gv8ky1_k$(this.fontFamily_1), this._this__u8e3s4__1.platformResolveInterceptor_1.interceptFontWeight_3o5olg_k$(item.get_weight_lbhkzl_k$()), this._this__u8e3s4__1.platformResolveInterceptor_1.interceptFontStyle_a5zuhs_k$(item.get_style_fnlxse_k$()), Companion_getInstance_32().get_All_bqi34r_k$(), this._this__u8e3s4__1.platformFontLoader_1.get_cacheKey_w22q12_k$());
                target.add_utx5q5_k$(element);
              }
               while (inductionVariable <= last);
            var typeRequests = target;
            this._this__u8e3s4__1.typefaceRequestCache_1.preWarmCache_12tul7_k$(typeRequests, FontFamilyResolverImpl$preload$lambda(this._this__u8e3s4__1));
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function FontFamilyResolverImpl(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter) {
    platformResolveInterceptor = platformResolveInterceptor === VOID ? Companion_getInstance_28().Default_1 : platformResolveInterceptor;
    typefaceRequestCache = typefaceRequestCache === VOID ? get_GlobalTypefaceRequestCache() : typefaceRequestCache;
    fontListFontFamilyTypefaceAdapter = fontListFontFamilyTypefaceAdapter === VOID ? new FontListFontFamilyTypefaceAdapter(get_GlobalAsyncTypefaceCache()) : fontListFontFamilyTypefaceAdapter;
    platformFamilyTypefaceAdapter = platformFamilyTypefaceAdapter === VOID ? new PlatformFontFamilyTypefaceAdapter() : platformFamilyTypefaceAdapter;
    this.platformFontLoader_1 = platformFontLoader;
    this.platformResolveInterceptor_1 = platformResolveInterceptor;
    this.typefaceRequestCache_1 = typefaceRequestCache;
    this.fontListFontFamilyTypefaceAdapter_1 = fontListFontFamilyTypefaceAdapter;
    this.platformFamilyTypefaceAdapter_1 = platformFamilyTypefaceAdapter;
    var tmp = this;
    tmp.createDefaultTypeface_1 = FontFamilyResolverImpl$createDefaultTypeface$lambda(this);
  }
  protoOf(FontFamilyResolverImpl).get_platformFontLoader_nzyzw9_k$ = function () {
    return this.platformFontLoader_1;
  };
  protoOf(FontFamilyResolverImpl).preload_4qpbwt_k$ = function (fontFamily, $completion) {
    var tmp = new $preloadCOROUTINE$(this, fontFamily, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FontFamilyResolverImpl).resolve_q3h1fi_k$ = function (fontFamily, fontWeight, fontStyle, fontSynthesis) {
    return resolve(this, new TypefaceRequest(this.platformResolveInterceptor_1.interceptFontFamily_gv8ky1_k$(fontFamily), this.platformResolveInterceptor_1.interceptFontWeight_3o5olg_k$(fontWeight), this.platformResolveInterceptor_1.interceptFontStyle_a5zuhs_k$(fontStyle), this.platformResolveInterceptor_1.interceptFontSynthesis_3g2w1p_k$(fontSynthesis), this.platformFontLoader_1.get_cacheKey_w22q12_k$()));
  };
  function PlatformResolveInterceptor$Companion$Default$1() {
  }
  function Companion_11() {
    Companion_instance_11 = this;
    var tmp = this;
    tmp.Default_1 = new PlatformResolveInterceptor$Companion$Default$1();
  }
  protoOf(Companion_11).get_Default_f0vec3_k$ = function () {
    return this.Default_1;
  };
  var Companion_instance_11;
  function Companion_getInstance_28() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function PlatformResolveInterceptor() {
  }
  var properties_initialized_FontFamilyResolver_kt_43uw85;
  function _init_properties_FontFamilyResolver_kt__lawdt3() {
    if (!properties_initialized_FontFamilyResolver_kt_43uw85) {
      properties_initialized_FontFamilyResolver_kt_43uw85 = true;
      GlobalTypefaceRequestCache = new TypefaceRequestCache();
      GlobalAsyncTypefaceCache = new AsyncTypefaceCache();
      androidx_compose_ui_text_font_FontFamilyResolverImpl$stable = 8;
      androidx_compose_ui_text_font_TypefaceRequest$stable = 8;
      androidx_compose_ui_text_font_TypefaceResult_Immutable$stable = 0;
      androidx_compose_ui_text_font_TypefaceResult_Async$stable = 0;
      androidx_compose_ui_text_font_TypefaceRequestCache$stable = 8;
    }
  }
  function FontFamilyTypefaceAdapter() {
  }
  var androidx_compose_ui_text_font_FontListFontFamilyTypefaceAdapter$stable;
  var androidx_compose_ui_text_font_AsyncFontListLoader$stable;
  var androidx_compose_ui_text_font_AsyncTypefaceCache_Key$stable;
  var androidx_compose_ui_text_font_AsyncTypefaceCache$stable;
  function _AsyncTypefaceResult___init__impl__h4msax(result) {
    return result;
  }
  function _AsyncTypefaceResult___get_result__impl__kpcqqb($this) {
    return $this;
  }
  function _AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca($this) {
    return _AsyncTypefaceResult___get_result__impl__kpcqqb($this) == null;
  }
  function AsyncTypefaceResult__toString_impl_imltdd($this) {
    return 'AsyncTypefaceResult(result=' + toString($this) + ')';
  }
  function AsyncTypefaceResult__hashCode_impl_34k3fi($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function AsyncTypefaceResult__equals_impl_4qqxz2($this, other) {
    if (!(other instanceof AsyncTypefaceResult))
      return false;
    var tmp0_other_with_cast = other instanceof AsyncTypefaceResult ? other.result_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function AsyncTypefaceResult(result) {
    this.result_1 = result;
  }
  protoOf(AsyncTypefaceResult).toString = function () {
    return AsyncTypefaceResult__toString_impl_imltdd(this.result_1);
  };
  protoOf(AsyncTypefaceResult).hashCode = function () {
    return AsyncTypefaceResult__hashCode_impl_34k3fi(this.result_1);
  };
  protoOf(AsyncTypefaceResult).equals = function (other) {
    return AsyncTypefaceResult__equals_impl_4qqxz2(this.result_1, other);
  };
  function _get_PermanentFailure__9wvopd($this) {
    return $this.PermanentFailure_1;
  }
  function Key(font, loaderKey) {
    this.font_1 = font;
    this.loaderKey_1 = loaderKey;
  }
  protoOf(Key).get_font_wom55k_k$ = function () {
    return this.font_1;
  };
  protoOf(Key).get_loaderKey_vl3btv_k$ = function () {
    return this.loaderKey_1;
  };
  protoOf(Key).component1_7eebsc_k$ = function () {
    return this.font_1;
  };
  protoOf(Key).component2_7eebsb_k$ = function () {
    return this.loaderKey_1;
  };
  protoOf(Key).copy_4ipj8r_k$ = function (font, loaderKey) {
    return new Key(font, loaderKey);
  };
  protoOf(Key).copy$default_domdyh_k$ = function (font, loaderKey, $super) {
    font = font === VOID ? this.font_1 : font;
    loaderKey = loaderKey === VOID ? this.loaderKey_1 : loaderKey;
    return $super === VOID ? this.copy_4ipj8r_k$(font, loaderKey) : $super.copy_4ipj8r_k$.call(this, font, loaderKey);
  };
  protoOf(Key).toString = function () {
    return 'Key(font=' + toString_0(this.font_1) + ', loaderKey=' + toString(this.loaderKey_1) + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = hashCode(this.font_1);
    result = imul(result, 31) + (this.loaderKey_1 == null ? 0 : hashCode(this.loaderKey_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!equals(this.font_1, tmp0_other_with_cast.font_1))
      return false;
    if (!equals(this.loaderKey_1, tmp0_other_with_cast.loaderKey_1))
      return false;
    return true;
  };
  function _get_resultCache__mkt3v0_0($this) {
    return $this.resultCache_1;
  }
  function _get_permanentCache__oc9pt5($this) {
    return $this.permanentCache_1;
  }
  function _get_cacheLock__lfu8yk($this) {
    return $this.cacheLock_1;
  }
  function access$_get_resultCache__u960s4($this) {
    return $this.resultCache_1;
  }
  function access$_get_permanentCache__bpfryv($this) {
    return $this.permanentCache_1;
  }
  function access$_get_cacheLock__y7hpng($this) {
    return $this.cacheLock_1;
  }
  function $runCachedCOROUTINE$(_this__u8e3s4, font, platformFontLoader, forever, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.font_1 = font;
    this.platformFontLoader_1 = platformFontLoader;
    this.forever_1 = forever;
    this.block_1 = block;
  }
  protoOf($runCachedCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.key0__1 = new Key(this.font_1, this.platformFontLoader_1.get_cacheKey_w22q12_k$());
            this._this__u8e3s4__1.cacheLock_1;
            var tmp0_elvis_lhs = this._this__u8e3s4__1.resultCache_1.get_h31hzz_k$(this.key0__1);
            var priorResult = tmp0_elvis_lhs == null ? this._this__u8e3s4__1.permanentCache_1.get_wei43m_k$(this.key0__1) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              return _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.result_1);
            }

            Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.block_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = suspendResult;
            this._this__u8e3s4__1.cacheLock_1;
            if (this_0 == null) {
              this._this__u8e3s4__1.permanentCache_1.set_b9w55f_k$(this.key0__1, new AsyncTypefaceResult(this._this__u8e3s4__1.PermanentFailure_1));
            } else if (this.forever_1) {
              this._this__u8e3s4__1.permanentCache_1.set_b9w55f_k$(this.key0__1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            } else {
              this._this__u8e3s4__1.resultCache_1.put_fa630k_k$(this.key0__1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            }

            Unit_getInstance();
            return this_0;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function AsyncTypefaceCache() {
    this.PermanentFailure_1 = _AsyncTypefaceResult___init__impl__h4msax(null);
    this.resultCache_1 = new LruCache(16);
    this.permanentCache_1 = mutableScatterMapOf();
    var tmp = this;
    // Inline function 'androidx.compose.ui.text.platform.makeSynchronizedObject' call
    tmp.cacheLock_1 = new SynchronizedObject();
  }
  protoOf(AsyncTypefaceCache).put_mkf84z_k$ = function (font, platformFontLoader, result, forever) {
    var key = new Key(font, platformFontLoader.get_cacheKey_w22q12_k$());
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.cacheLock_1;
    var tmp;
    if (result == null) {
      this.permanentCache_1.set_b9w55f_k$(key, new AsyncTypefaceResult(this.PermanentFailure_1));
      tmp = Unit_getInstance();
    } else if (forever) {
      this.permanentCache_1.set_b9w55f_k$(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
      tmp = Unit_getInstance();
    } else {
      tmp = this.resultCache_1.put_fa630k_k$(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    }
  };
  protoOf(AsyncTypefaceCache).put$default_5282m1_k$ = function (font, platformFontLoader, result, forever, $super) {
    forever = forever === VOID ? false : forever;
    var tmp;
    if ($super === VOID) {
      this.put_mkf84z_k$(font, platformFontLoader, result, forever);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.put_mkf84z_k$.call(this, font, platformFontLoader, result, forever);
    }
    return tmp;
  };
  protoOf(AsyncTypefaceCache).get_667wvm_k$ = function (font, platformFontLoader) {
    var key = new Key(font, platformFontLoader.get_cacheKey_w22q12_k$());
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.cacheLock_1;
    var tmp0_elvis_lhs = this.resultCache_1.get_h31hzz_k$(key);
    return tmp0_elvis_lhs == null ? this.permanentCache_1.get_wei43m_k$(key) : tmp0_elvis_lhs;
  };
  protoOf(AsyncTypefaceCache).runCached_axcv1l_k$ = function (font, platformFontLoader, forever, block, $completion) {
    var tmp = new $runCachedCOROUTINE$(this, font, platformFontLoader, forever, block, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncTypefaceCache).runCachedBlocking_6vvwv0_k$ = function (font, platformFontLoader, block) {
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    access$_get_cacheLock__y7hpng(this);
    var key = new Key(font, platformFontLoader.get_cacheKey_w22q12_k$());
    var tmp0_elvis_lhs = access$_get_resultCache__u960s4(this).get_h31hzz_k$(key);
    var priorResult = tmp0_elvis_lhs == null ? access$_get_permanentCache__bpfryv(this).get_wei43m_k$(key) : tmp0_elvis_lhs;
    if (!(priorResult == null)) {
      return _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.result_1);
    }
    // Inline function 'kotlin.also' call
    var this_0 = block();
    this.put$default_5282m1_k$(font, platformFontLoader, this_0);
    return this_0;
  };
  function _get_fontList__196yaq($this) {
    return $this.fontList_1;
  }
  function _get_typefaceRequest__ypbief($this) {
    return $this.typefaceRequest_1;
  }
  function _get_asyncTypefaceCache__u2d4d8($this) {
    return $this.asyncTypefaceCache_1;
  }
  function _get_onCompletion__aa185s($this) {
    return $this.onCompletion_1;
  }
  function _get_platformFontLoader__e61p92($this) {
    return $this.platformFontLoader_1;
  }
  function _set_value__lx0xdg($this, _set____db54di) {
    var tmp0 = $this.value$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AsyncFontListLoader$_get_value_$ref_okp6ex_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AsyncFontListLoader$_set_value_$ref_h5kf5n_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function AsyncFontListLoader$_get_value_$ref_okp6ex() {
    return function (p0) {
      return p0.get_value_j01efc_k$();
    };
  }
  function AsyncFontListLoader$_set_value_$ref_h5kf5n() {
    return function (p0, p1) {
      _set_value__lx0xdg(p0, p1);
      return Unit_getInstance();
    };
  }
  function AsyncFontListLoader$_get_value_$ref_okp6ex_0() {
    return function (p0) {
      return p0.get_value_j01efc_k$();
    };
  }
  function AsyncFontListLoader$_set_value_$ref_h5kf5n_0() {
    return function (p0, p1) {
      _set_value__lx0xdg(p0, p1);
      return Unit_getInstance();
    };
  }
  function AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation) {
    this.this$0__1 = this$0;
    this.$font_1 = $font;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$load$slambda).invoke_vgi6qb_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncFontListLoader$load$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_vgi6qb_k$($completion);
  };
  protoOf(AsyncFontListLoader$load$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.loadWithTimeoutOrNull_jmkyci_k$(this.$font_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(AsyncFontListLoader$load$slambda).create_d196fn_k$ = function (completion) {
    return new AsyncFontListLoader$load$slambda(this.this$0__1, this.$font_1, completion);
  };
  function AsyncFontListLoader$load$slambda_0(this$0, $font, resultContinuation) {
    var i = new AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation);
    var l = function ($completion) {
      return i.invoke_vgi6qb_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    this.this$0__1 = this$0;
    this.$this_loadWithTimeoutOrNull_1 = $this_loadWithTimeoutOrNull;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).invoke_ri3sjx_k$ = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withTimeoutOrNull, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ri3sjx_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.platformFontLoader_1.awaitLoad_quf34a_k$(this.$this_loadWithTimeoutOrNull_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).create_rcuf4x_k$ = function ($this$withTimeoutOrNull, completion) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this.this$0__1, this.$this_loadWithTimeoutOrNull_1, completion);
    i.$this$withTimeoutOrNull_1 = $this$withTimeoutOrNull;
    return i;
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.invoke_ri3sjx_k$($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $loadCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($loadCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(12);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(11);
            this.this1__1 = this._this__u8e3s4__1.fontList_1;
            this._iterator_2_yqohr2__1 = get_indices(this.this1__1).iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            if (!this._iterator_2_yqohr2__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(9);
              continue $sm;
            }

            var index = this._iterator_2_yqohr2__1.next_20eer_k$();
            var item = this.this1__1.get_c1px32_k$(index);
            this.font0__1 = item;
            if (this.font0__1.get_loadingStrategy_s3fce_k$() === Companion_getInstance_30().get_Async_nzjdad_k$()) {
              this.set_state_rjd8d0_k$(4);
              suspendResult = this._this__u8e3s4__1.asyncTypefaceCache_1.runCached_axcv1l_k$(this.font0__1, this._this__u8e3s4__1.platformFontLoader_1, false, AsyncFontListLoader$load$slambda_0(this._this__u8e3s4__1, this.font0__1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            }

          case 4:
            var typeface = suspendResult;
            if (!(typeface == null)) {
              _set_value__lx0xdg(this._this__u8e3s4__1, synthesizeTypeface(this._this__u8e3s4__1.typefaceRequest_1.get_fontSynthesis_yx849j_k$(), typeface, this.font0__1, this._this__u8e3s4__1.typefaceRequest_1.get_fontWeight_wbif2o_k$(), this._this__u8e3s4__1.typefaceRequest_1.get_fontStyle_nhruzn_k$()));
              this.set_exceptionState_fex74n_k$(12);
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(5);
              suspendResult = yield_0(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 8:
            this.set_exceptionState_fex74n_k$(12);
            var shouldCache = get_isActive(this.get_context_h02k06_k$());
            this._this__u8e3s4__1.cacheable_1 = false;
            this._this__u8e3s4__1.onCompletion_1(new Immutable(this._this__u8e3s4__1.get_value_j01efc_k$(), shouldCache));
            return Unit_getInstance();
          case 9:
            this.set_exceptionState_fex74n_k$(12);
            this.set_state_rjd8d0_k$(10);
            continue $sm;
          case 10:
            this.set_exceptionState_fex74n_k$(12);
            var shouldCache_0 = get_isActive(this.get_context_h02k06_k$());
            this._this__u8e3s4__1.cacheable_1 = false;
            this._this__u8e3s4__1.onCompletion_1(new Immutable(this._this__u8e3s4__1.get_value_j01efc_k$(), shouldCache_0));
            return Unit_getInstance();
          case 11:
            this.set_exceptionState_fex74n_k$(12);
            var t = this.get_exception_x0n6w6_k$();
            var shouldCache_1 = get_isActive(this.get_context_h02k06_k$());
            this._this__u8e3s4__1.cacheable_1 = false;
            this._this__u8e3s4__1.onCompletion_1(new Immutable(this._this__u8e3s4__1.get_value_j01efc_k$(), shouldCache_1));
            throw t;
          case 12:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 12) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $loadWithTimeoutOrNullCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this._this__u8e3s4__2 = _this__u8e3s4_0;
  }
  protoOf($loadWithTimeoutOrNullCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = new Long(15000, 0);
            suspendResult = withTimeoutOrNull(tmp_0, AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this._this__u8e3s4__1, this._this__u8e3s4__2, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT0__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof CancellationException) {
              var cancel = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              var tmp_3;
              if (get_isActive(this.get_context_h02k06_k$())) {
                tmp_3 = null;
              } else {
                throw cancel;
              }
              tmp_2.TRY_RESULT0__1 = tmp_3;
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              var tmp_4 = this.get_exception_x0n6w6_k$();
              if (tmp_4 instanceof Exception) {
                var uncaughtFontLoadException = this.get_exception_x0n6w6_k$();
                var tmp_5 = this;
                var tmp0_safe_receiver = this.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance());
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.handleException_e679jj_k$(this.get_context_h02k06_k$(), IllegalStateException_init_$Create$('Unable to load font ' + toString_0(this._this__u8e3s4__2), uncaughtFontLoadException));
                }
                tmp_5.TRY_RESULT0__1 = null;
                this.set_state_rjd8d0_k$(4);
                continue $sm;
              } else {
                throw this.get_exception_x0n6w6_k$();
              }
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function AsyncFontListLoader(fontList, initialType, typefaceRequest, asyncTypefaceCache, onCompletion, platformFontLoader) {
    this.fontList_1 = fontList;
    this.typefaceRequest_1 = typefaceRequest;
    this.asyncTypefaceCache_1 = asyncTypefaceCache;
    this.onCompletion_1 = onCompletion;
    this.platformFontLoader_1 = platformFontLoader;
    this.value$delegate_1 = mutableStateOf(initialType);
    this.cacheable_1 = true;
  }
  protoOf(AsyncFontListLoader).get_value_j01efc_k$ = function () {
    var tmp0 = this.value$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AsyncFontListLoader$_get_value_$ref_okp6ex();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AsyncFontListLoader$_set_value_$ref_h5kf5n());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(AsyncFontListLoader).set_cacheable_3nc7p7_k$ = function (_set____db54di) {
    this.cacheable_1 = _set____db54di;
  };
  protoOf(AsyncFontListLoader).get_cacheable_7670tu_k$ = function () {
    return this.cacheable_1;
  };
  protoOf(AsyncFontListLoader).load_uj0wpb_k$ = function ($completion) {
    var tmp = new $loadCOROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncFontListLoader).loadWithTimeoutOrNull_jmkyci_k$ = function (_this__u8e3s4, $completion) {
    var tmp = new $loadWithTimeoutOrNullCOROUTINE$(this, _this__u8e3s4, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1() {
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1).handleException_e679jj_k$ = function (context, exception) {
    return Unit_getInstance();
  };
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda($resourceLoader, $font, resultContinuation) {
    this.$resourceLoader_1 = $resourceLoader;
    this.$font_1 = $font;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda).invoke_ri3sjx_k$ = function ($this$withTimeout, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withTimeout, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ri3sjx_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$resourceLoader_1.awaitLoad_quf34a_k$(this.$font_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda).create_rcuf4x_k$ = function ($this$withTimeout, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda(this.$resourceLoader_1, this.$font_1, completion);
    i.$this$withTimeout_1 = $this$withTimeout;
    return i;
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda_0($resourceLoader, $font, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda($resourceLoader, $font, resultContinuation);
    var l = function ($this$withTimeout, $completion) {
      return i.invoke_ri3sjx_k$($this$withTimeout, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda($font, $resourceLoader, resultContinuation) {
    this.$font_1 = $font;
    this.$resourceLoader_1 = $resourceLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda).invoke_vgi6qb_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_vgi6qb_k$($completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = new Long(15000, 0);
            suspendResult = withTimeout(tmp_0, FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda_0(this.$resourceLoader_1, this.$font_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT0__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var cause = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              throw IllegalStateException_init_$Create$('Unable to load font ' + toString_0(this.$font_1), cause);
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            var tmp0_elvis_lhs = this.TRY_RESULT0__1;
            var tmp_3;
            if (tmp0_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$_0('Unable to load font ' + toString_0(this.$font_1));
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            return tmp_3;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda).create_d196fn_k$ = function (completion) {
    return new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda(this.$font_1, this.$resourceLoader_1, completion);
  };
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda_0($font, $resourceLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda($font, $resourceLoader, resultContinuation);
    var l = function ($completion) {
      return i.invoke_vgi6qb_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda(this$0, $font, $resourceLoader, resultContinuation) {
    this.this$0__1 = this$0;
    this.$font_1 = $font;
    this.$resourceLoader_1 = $resourceLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda).invoke_ri3sjx_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ri3sjx_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.asyncTypefaceCache_1.runCached_axcv1l_k$(this.$font_1, this.$resourceLoader_1, true, FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda_0(this.$font_1, this.$resourceLoader_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda(this.this$0__1, this.$font_1, this.$resourceLoader_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda_0(this$0, $font, $resourceLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda(this$0, $font, $resourceLoader, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_ri3sjx_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_asyncTypefaceCache__u2d4d8_0($this) {
    return $this.asyncTypefaceCache_1;
  }
  function _set_asyncLoadScope__1wnnvf($this, _set____db54di) {
    $this.asyncLoadScope_1 = _set____db54di;
  }
  function _get_asyncLoadScope__nmfs61($this) {
    return $this.asyncLoadScope_1;
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.fontMatcher_1 = new FontMatcher();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp.DropExceptionHandler_1 = new FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1();
  }
  protoOf(Companion_12).get_fontMatcher_dx896u_k$ = function () {
    return this.fontMatcher_1;
  };
  protoOf(Companion_12).get_DropExceptionHandler_ef4cy5_k$ = function () {
    return this.DropExceptionHandler_1;
  };
  var Companion_instance_12;
  function Companion_getInstance_29() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function FontListFontFamilyTypefaceAdapter$preload$lambda(it) {
    return Unit_getInstance();
  }
  function FontListFontFamilyTypefaceAdapter$preload$slambda($asyncLoads, this$0, $resourceLoader, resultContinuation) {
    this.$asyncLoads_1 = $asyncLoads;
    this.this$0__1 = this$0;
    this.$resourceLoader_1 = $resourceLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda).invoke_d9fzmj_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var this_0 = this.$asyncLoads_1;
            var set = new MutableScatterSet(this_0.get_size_woubt6_k$());
            var target = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
            var inductionVariable = 0;
            var last = this_0.get_size_woubt6_k$() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.get_c1px32_k$(index);
                var key = item;
                if (set.add_utx5q5_k$(key)) {
                  target.add_utx5q5_k$(item);
                }
              }
               while (inductionVariable <= last);
            var target_0 = ArrayList_init_$Create$_0(target.get_size_woubt6_k$());
            var inductionVariable_0 = 0;
            var last_0 = target.get_size_woubt6_k$() - 1 | 0;
            if (inductionVariable_0 <= last_0)
              do {
                var index_0 = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var item_0 = target.get_c1px32_k$(index_0);
                var element = async(this.$this$coroutineScope_1, VOID, VOID, FontListFontFamilyTypefaceAdapter$preload$slambda$slambda_0(this.this$0__1, item_0, this.$resourceLoader_1, null));
                target_0.add_utx5q5_k$(element);
              }
               while (inductionVariable_0 <= last_0);
            suspendResult = joinAll(target_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda(this.$asyncLoads_1, this.this$0__1, this.$resourceLoader_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function FontListFontFamilyTypefaceAdapter$preload$slambda_0($asyncLoads, this$0, $resourceLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda($asyncLoads, this$0, $resourceLoader, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_d9fzmj_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation) {
    this.$asyncLoader_1 = $asyncLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$asyncLoader_1.load_uj0wpb_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda(this.$asyncLoader_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function FontListFontFamilyTypefaceAdapter$resolve$slambda_0($asyncLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter(asyncTypefaceCache, injectedContext) {
    Companion_getInstance_29();
    asyncTypefaceCache = asyncTypefaceCache === VOID ? new AsyncTypefaceCache() : asyncTypefaceCache;
    injectedContext = injectedContext === VOID ? EmptyCoroutineContext_getInstance() : injectedContext;
    this.asyncTypefaceCache_1 = asyncTypefaceCache;
    this.asyncLoadScope_1 = CoroutineScope_0(Companion_getInstance_29().DropExceptionHandler_1.plus_s13ygv_k$(get_FontCacheManagementDispatcher()).plus_s13ygv_k$(injectedContext).plus_s13ygv_k$(SupervisorJob(injectedContext.get_y2st91_k$(Key_getInstance_0()))));
  }
  protoOf(FontListFontFamilyTypefaceAdapter).preload_2axpx6_k$ = function (family, resourceLoader, $completion) {
    if (!(family instanceof FontListFontFamily))
      return Unit_getInstance();
    var allFonts = family.get_fonts_irho7v_k$();
    // Inline function 'androidx.compose.ui.util.fastFilteredMap' call
    var this_0 = family.get_fonts_irho7v_k$();
    var target = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        if (item.get_loadingStrategy_s3fce_k$() === Companion_getInstance_30().get_Async_nzjdad_k$()) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = to(item.get_weight_lbhkzl_k$(), new FontStyle(item.get_style_fnlxse_k$()));
          target.add_utx5q5_k$(element);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastDistinctBy' call
    var set = new MutableScatterSet(target.get_size_woubt6_k$());
    var target_0 = ArrayList_init_$Create$_0(target.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_0 = 0;
    var last_0 = target.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.get_c1px32_k$(index_0);
        var key = item_0;
        if (set.add_utx5q5_k$(key)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target_0.add_utx5q5_k$(item_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    var asyncStyles = target_0;
    // Inline function 'kotlin.collections.mutableListOf' call
    var asyncLoads = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_1 = 0;
    var last_1 = asyncStyles.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_1 <= last_1)
      do {
        var index_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var item_1 = asyncStyles.get_c1px32_k$(index_1);
        var fontWeight = item_1.component1_7eebsc_k$();
        var fontStyle = item_1.component2_7eebsb_k$().value_1;
        var matched = Companion_getInstance_29().fontMatcher_1.matchFont_6opk8k_k$(allFonts, fontWeight, fontStyle);
        var typeRequest = new TypefaceRequest(family, fontWeight, fontStyle, Companion_getInstance_32().get_All_bqi34r_k$(), resourceLoader.get_cacheKey_w22q12_k$());
        var asyncFontsToLoad = firstImmediatelyAvailable(matched, typeRequest, this.asyncTypefaceCache_1, resourceLoader, FontListFontFamilyTypefaceAdapter$preload$lambda).component1_7eebsc_k$();
        if (!(asyncFontsToLoad == null)) {
          asyncLoads.add_utx5q5_k$(first(asyncFontsToLoad));
        }
      }
       while (inductionVariable_1 <= last_1);
    return coroutineScope(FontListFontFamilyTypefaceAdapter$preload$slambda_0(asyncLoads, this, resourceLoader, null), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter).resolve_wywkvk_k$ = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.get_fontFamily_ulphcs_k$();
    if (!(tmp instanceof FontListFontFamily))
      return null;
    var matched = Companion_getInstance_29().fontMatcher_1.matchFont_6opk8k_k$(typefaceRequest.get_fontFamily_ulphcs_k$().get_fonts_irho7v_k$(), typefaceRequest.get_fontWeight_wbif2o_k$(), typefaceRequest.get_fontStyle_nhruzn_k$());
    var _destruct__k2r9zo = firstImmediatelyAvailable(matched, typefaceRequest, this.asyncTypefaceCache_1, platformFontLoader, createDefaultTypeface);
    var asyncFontsToLoad = _destruct__k2r9zo.component1_7eebsc_k$();
    var synthesizedTypeface = _destruct__k2r9zo.component2_7eebsb_k$();
    if (asyncFontsToLoad == null)
      return new Immutable(synthesizedTypeface);
    var asyncLoader = new AsyncFontListLoader(asyncFontsToLoad, synthesizedTypeface, typefaceRequest, this.asyncTypefaceCache_1, onAsyncCompletion, platformFontLoader);
    var tmp_0 = this.asyncLoadScope_1;
    var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp_0, VOID, tmp_1, FontListFontFamilyTypefaceAdapter$resolve$slambda_0(asyncLoader, null));
    return new Async(asyncLoader);
  };
  function firstImmediatelyAvailable(_this__u8e3s4, typefaceRequest, asyncTypefaceCache, platformFontLoader, createDefaultTypeface) {
    var asyncFontsToLoad = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.get_c1px32_k$(idx);
        var tmp0_subject = font.get_loadingStrategy_s3fce_k$();
        if (tmp0_subject === Companion_getInstance_30().get_Blocking_7mu9wm_k$()) {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.platform.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            access$_get_cacheLock__y7hpng(asyncTypefaceCache);
            var key = new Key(font, platformFontLoader.get_cacheKey_w22q12_k$());
            var tmp0_elvis_lhs = access$_get_resultCache__u960s4(asyncTypefaceCache).get_h31hzz_k$(key);
            var priorResult = tmp0_elvis_lhs == null ? access$_get_permanentCache__bpfryv(asyncTypefaceCache).get_wei43m_k$(key) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              tmp$ret$0 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.result_1);
              break $l$block;
            }
            var tmp;
            try {
              tmp = platformFontLoader.loadBlocking_4ao78a_k$(font);
            } catch ($p) {
              var tmp_0;
              if ($p instanceof Exception) {
                var cause = $p;
                tmp_0 = createDefaultTypeface(typefaceRequest);
              } else {
                throw $p;
              }
              tmp = tmp_0;
            }
            // Inline function 'kotlin.also' call
            var this_0 = tmp;
            asyncTypefaceCache.put$default_5282m1_k$(font, platformFontLoader, this_0);
            tmp$ret$0 = this_0;
          }
          var tmp1_elvis_lhs = tmp$ret$0;
          var result = tmp1_elvis_lhs == null ? createDefaultTypeface(typefaceRequest) : tmp1_elvis_lhs;
          return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.get_fontSynthesis_yx849j_k$(), result, font, typefaceRequest.get_fontWeight_wbif2o_k$(), typefaceRequest.get_fontStyle_nhruzn_k$()));
        } else if (tmp0_subject === Companion_getInstance_30().get_OptionalLocal_ehk5yi_k$()) {
          var tmp$ret$7;
          $l$block_0: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.platform.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            access$_get_cacheLock__y7hpng(asyncTypefaceCache);
            var key_0 = new Key(font, platformFontLoader.get_cacheKey_w22q12_k$());
            var tmp0_elvis_lhs_0 = access$_get_resultCache__u960s4(asyncTypefaceCache).get_h31hzz_k$(key_0);
            var priorResult_0 = tmp0_elvis_lhs_0 == null ? access$_get_permanentCache__bpfryv(asyncTypefaceCache).get_wei43m_k$(key_0) : tmp0_elvis_lhs_0;
            if (!(priorResult_0 == null)) {
              tmp$ret$7 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult_0.result_1);
              break $l$block_0;
            }
            // Inline function 'kotlin.runCatching' call
            var tmp_1;
            try {
              Companion_getInstance_6();
              // Inline function 'kotlin.Companion.success' call
              var value = platformFontLoader.loadBlocking_4ao78a_k$(font);
              tmp_1 = _Result___init__impl__xyqfz8(value);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof Error) {
                var e = $p;
                // Inline function 'kotlin.Companion.failure' call
                Companion_getInstance_6();
                tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }
            // Inline function 'kotlin.Result.getOrNull' call
            var this_1 = tmp_1;
            var tmp_3;
            if (_Result___get_isFailure__impl__jpiriv(this_1)) {
              tmp_3 = null;
            } else {
              var tmp_4 = _Result___get_value__impl__bjfvqg(this_1);
              tmp_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
            }
            // Inline function 'kotlin.also' call
            var this_2 = tmp_3;
            asyncTypefaceCache.put$default_5282m1_k$(font, platformFontLoader, this_2);
            tmp$ret$7 = this_2;
          }
          var result_0 = tmp$ret$7;
          if (!(result_0 == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.get_fontSynthesis_yx849j_k$(), result_0, font, typefaceRequest.get_fontWeight_wbif2o_k$(), typefaceRequest.get_fontStyle_nhruzn_k$()));
          }
        } else if (tmp0_subject === Companion_getInstance_30().get_Async_nzjdad_k$()) {
          var cacheResult = asyncTypefaceCache.get_667wvm_k$(font, platformFontLoader);
          if (cacheResult == null) {
            if (asyncFontsToLoad == null) {
              asyncFontsToLoad = mutableListOf([font]);
            } else {
              asyncFontsToLoad.add_utx5q5_k$(font);
            }
          } else if (_AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca(cacheResult.result_1)) {
            continue $l$loop;
          } else if (!(_AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.result_1) == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.get_fontSynthesis_yx849j_k$(), _AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.result_1), font, typefaceRequest.get_fontWeight_wbif2o_k$(), typefaceRequest.get_fontStyle_nhruzn_k$()));
          }
        } else
          throw IllegalStateException_init_$Create$_0('Unknown font type ' + toString_0(font));
      }
       while (inductionVariable <= last);
    var fallbackTypeface = createDefaultTypeface(typefaceRequest);
    return to(asyncFontsToLoad, fallbackTypeface);
  }
  function _FontLoadingStrategy___init__impl__if1sp3(value) {
    return value;
  }
  function _FontLoadingStrategy___get_value__impl__ggsl83($this) {
    return $this;
  }
  function FontLoadingStrategy__toString_impl_fx0z8f($this) {
    return $this === Companion_getInstance_30().Blocking_1 ? 'Blocking' : $this === Companion_getInstance_30().OptionalLocal_1 ? 'Optional' : $this === Companion_getInstance_30().Async_1 ? 'Async' : 'Invalid(value=' + _FontLoadingStrategy___get_value__impl__ggsl83($this) + ')';
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.Blocking_1 = _FontLoadingStrategy___init__impl__if1sp3(0);
    this.OptionalLocal_1 = _FontLoadingStrategy___init__impl__if1sp3(1);
    this.Async_1 = _FontLoadingStrategy___init__impl__if1sp3(2);
  }
  protoOf(Companion_13).get_Blocking_7mu9wm_k$ = function () {
    return this.Blocking_1;
  };
  protoOf(Companion_13).get_OptionalLocal_ehk5yi_k$ = function () {
    return this.OptionalLocal_1;
  };
  protoOf(Companion_13).get_Async_nzjdad_k$ = function () {
    return this.Async_1;
  };
  var Companion_instance_13;
  function Companion_getInstance_30() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function FontLoadingStrategy__hashCode_impl_xcx5xu($this) {
    return $this;
  }
  function FontLoadingStrategy__equals_impl_5w10z2($this, other) {
    if (!(other instanceof FontLoadingStrategy))
      return false;
    if (!($this === (other instanceof FontLoadingStrategy ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontLoadingStrategy(value) {
    Companion_getInstance_30();
    this.value_1 = value;
  }
  protoOf(FontLoadingStrategy).toString = function () {
    return FontLoadingStrategy__toString_impl_fx0z8f(this.value_1);
  };
  protoOf(FontLoadingStrategy).hashCode = function () {
    return FontLoadingStrategy__hashCode_impl_xcx5xu(this.value_1);
  };
  protoOf(FontLoadingStrategy).equals = function (other) {
    return FontLoadingStrategy__equals_impl_5w10z2(this.value_1, other);
  };
  var androidx_compose_ui_text_font_FontMatcher$stable;
  function FontMatcher() {
  }
  protoOf(FontMatcher).matchFont_6opk8k_k$ = function (fontList, fontWeight, fontStyle) {
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    var target = ArrayList_init_$Create$_0(fontList.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = fontList.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = fontList.get_c1px32_k$(index);
        if (item.get_weight_lbhkzl_k$().equals(fontWeight) && item.get_style_fnlxse_k$() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!target.isEmpty_y1axqb_k$()) {
      return target;
    }
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    var target_0 = ArrayList_init_$Create$_0(fontList.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_0 = 0;
    var last_0 = fontList.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = fontList.get_c1px32_k$(index_0);
        if (item_0.get_style_fnlxse_k$() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target_0.add_utx5q5_k$(item_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (target_0.isEmpty_y1axqb_k$()) {
      tmp = fontList;
    } else {
      tmp = target_0;
    }
    var fontsToSearch = tmp;
    var tmp_0;
    if (fontWeight.compareTo_mrh9jv_k$(Companion_getInstance_33().get_W400_wobb2e_k$()) < 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove = null;
      var bestWeightBelow = null;
      var inductionVariable_1 = 0;
      var last_1 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        $l$loop_1: do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var font = fontsToSearch.get_c1px32_k$(index_1);
          var possibleWeight = font.get_weight_lbhkzl_k$();
          if (!(null == null) && possibleWeight.compareTo_mrh9jv_k$(null) < 0) {
            continue $l$loop_1;
          }
          if (!(null == null) && possibleWeight.compareTo_mrh9jv_k$(null) > 0) {
            continue $l$loop_1;
          }
          if (possibleWeight.compareTo_mrh9jv_k$(fontWeight) < 0) {
            if (bestWeightBelow == null || possibleWeight.compareTo_mrh9jv_k$(bestWeightBelow) > 0) {
              bestWeightBelow = possibleWeight;
            }
          } else if (possibleWeight.compareTo_mrh9jv_k$(fontWeight) > 0) {
            if (bestWeightAbove == null || possibleWeight.compareTo_mrh9jv_k$(bestWeightAbove) < 0) {
              bestWeightAbove = possibleWeight;
            }
          } else {
            bestWeightAbove = possibleWeight;
            bestWeightBelow = possibleWeight;
            break $l$loop_1;
          }
        }
         while (inductionVariable_1 <= last_1);
      var tmp_1;
      if (true) {
        var tmp0_elvis_lhs = bestWeightBelow;
        tmp_1 = tmp0_elvis_lhs == null ? bestWeightAbove : tmp0_elvis_lhs;
      } else {
        var tmp1_elvis_lhs = bestWeightAbove;
        tmp_1 = tmp1_elvis_lhs == null ? bestWeightBelow : tmp1_elvis_lhs;
      }
      var bestWeight = tmp_1;
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      var target_1 = ArrayList_init_$Create$_0(fontsToSearch.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_2 = 0;
      var last_2 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_1 = fontsToSearch.get_c1px32_k$(index_2);
          if (item_1.get_weight_lbhkzl_k$().equals(bestWeight)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_1.add_utx5q5_k$(item_1);
          }
        }
         while (inductionVariable_2 <= last_2);
      tmp_0 = target_1;
    } else if (fontWeight.compareTo_mrh9jv_k$(Companion_getInstance_33().get_W500_wobbt3_k$()) > 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove_0 = null;
      var bestWeightBelow_0 = null;
      var inductionVariable_3 = 0;
      var last_3 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        $l$loop_4: do {
          var index_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var font_0 = fontsToSearch.get_c1px32_k$(index_3);
          var possibleWeight_0 = font_0.get_weight_lbhkzl_k$();
          if (!(null == null) && possibleWeight_0.compareTo_mrh9jv_k$(null) < 0) {
            continue $l$loop_4;
          }
          if (!(null == null) && possibleWeight_0.compareTo_mrh9jv_k$(null) > 0) {
            continue $l$loop_4;
          }
          if (possibleWeight_0.compareTo_mrh9jv_k$(fontWeight) < 0) {
            if (bestWeightBelow_0 == null || possibleWeight_0.compareTo_mrh9jv_k$(bestWeightBelow_0) > 0) {
              bestWeightBelow_0 = possibleWeight_0;
            }
          } else if (possibleWeight_0.compareTo_mrh9jv_k$(fontWeight) > 0) {
            if (bestWeightAbove_0 == null || possibleWeight_0.compareTo_mrh9jv_k$(bestWeightAbove_0) < 0) {
              bestWeightAbove_0 = possibleWeight_0;
            }
          } else {
            bestWeightAbove_0 = possibleWeight_0;
            bestWeightBelow_0 = possibleWeight_0;
            break $l$loop_4;
          }
        }
         while (inductionVariable_3 <= last_3);
      var tmp_2;
      if (false) {
        var tmp0_elvis_lhs_0 = bestWeightBelow_0;
        tmp_2 = tmp0_elvis_lhs_0 == null ? bestWeightAbove_0 : tmp0_elvis_lhs_0;
      } else {
        var tmp1_elvis_lhs_0 = bestWeightAbove_0;
        tmp_2 = tmp1_elvis_lhs_0 == null ? bestWeightBelow_0 : tmp1_elvis_lhs_0;
      }
      var bestWeight_0 = tmp_2;
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      var target_2 = ArrayList_init_$Create$_0(fontsToSearch.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_4 = 0;
      var last_4 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_4 <= last_4)
        do {
          var index_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_2 = fontsToSearch.get_c1px32_k$(index_4);
          if (item_2.get_weight_lbhkzl_k$().equals(bestWeight_0)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_2.add_utx5q5_k$(item_2);
          }
        }
         while (inductionVariable_4 <= last_4);
      tmp_0 = target_2;
    } else {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var maxSearchRange = Companion_getInstance_33().get_W500_wobbt3_k$();
      var bestWeightAbove_1 = null;
      var bestWeightBelow_1 = null;
      var inductionVariable_5 = 0;
      var last_5 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_5 <= last_5)
        $l$loop_7: do {
          var index_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var font_1 = fontsToSearch.get_c1px32_k$(index_5);
          var possibleWeight_1 = font_1.get_weight_lbhkzl_k$();
          if (!(null == null) && possibleWeight_1.compareTo_mrh9jv_k$(null) < 0) {
            continue $l$loop_7;
          }
          if (!(maxSearchRange == null) && possibleWeight_1.compareTo_mrh9jv_k$(maxSearchRange) > 0) {
            continue $l$loop_7;
          }
          if (possibleWeight_1.compareTo_mrh9jv_k$(fontWeight) < 0) {
            if (bestWeightBelow_1 == null || possibleWeight_1.compareTo_mrh9jv_k$(bestWeightBelow_1) > 0) {
              bestWeightBelow_1 = possibleWeight_1;
            }
          } else if (possibleWeight_1.compareTo_mrh9jv_k$(fontWeight) > 0) {
            if (bestWeightAbove_1 == null || possibleWeight_1.compareTo_mrh9jv_k$(bestWeightAbove_1) < 0) {
              bestWeightAbove_1 = possibleWeight_1;
            }
          } else {
            bestWeightAbove_1 = possibleWeight_1;
            bestWeightBelow_1 = possibleWeight_1;
            break $l$loop_7;
          }
        }
         while (inductionVariable_5 <= last_5);
      var tmp_3;
      if (false) {
        var tmp0_elvis_lhs_1 = bestWeightBelow_1;
        tmp_3 = tmp0_elvis_lhs_1 == null ? bestWeightAbove_1 : tmp0_elvis_lhs_1;
      } else {
        var tmp1_elvis_lhs_1 = bestWeightAbove_1;
        tmp_3 = tmp1_elvis_lhs_1 == null ? bestWeightBelow_1 : tmp1_elvis_lhs_1;
      }
      var bestWeight_1 = tmp_3;
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      var target_3 = ArrayList_init_$Create$_0(fontsToSearch.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_6 = 0;
      var last_6 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_6 <= last_6)
        do {
          var index_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var item_3 = fontsToSearch.get_c1px32_k$(index_6);
          if (item_3.get_weight_lbhkzl_k$().equals(bestWeight_1)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_3.add_utx5q5_k$(item_3);
          }
        }
         while (inductionVariable_6 <= last_6);
      // Inline function 'kotlin.collections.ifEmpty' call
      var tmp_4;
      if (target_3.isEmpty_y1axqb_k$()) {
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
        var minSearchRange = Companion_getInstance_33().get_W500_wobbt3_k$();
        var bestWeightAbove_2 = null;
        var bestWeightBelow_2 = null;
        var inductionVariable_7 = 0;
        var last_7 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable_7 <= last_7)
          $l$loop_10: do {
            var index_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var font_2 = fontsToSearch.get_c1px32_k$(index_7);
            var possibleWeight_2 = font_2.get_weight_lbhkzl_k$();
            if (!(minSearchRange == null) && possibleWeight_2.compareTo_mrh9jv_k$(minSearchRange) < 0) {
              continue $l$loop_10;
            }
            if (!(null == null) && possibleWeight_2.compareTo_mrh9jv_k$(null) > 0) {
              continue $l$loop_10;
            }
            if (possibleWeight_2.compareTo_mrh9jv_k$(fontWeight) < 0) {
              if (bestWeightBelow_2 == null || possibleWeight_2.compareTo_mrh9jv_k$(bestWeightBelow_2) > 0) {
                bestWeightBelow_2 = possibleWeight_2;
              }
            } else if (possibleWeight_2.compareTo_mrh9jv_k$(fontWeight) > 0) {
              if (bestWeightAbove_2 == null || possibleWeight_2.compareTo_mrh9jv_k$(bestWeightAbove_2) < 0) {
                bestWeightAbove_2 = possibleWeight_2;
              }
            } else {
              bestWeightAbove_2 = possibleWeight_2;
              bestWeightBelow_2 = possibleWeight_2;
              break $l$loop_10;
            }
          }
           while (inductionVariable_7 <= last_7);
        var tmp_5;
        if (false) {
          var tmp0_elvis_lhs_2 = bestWeightBelow_2;
          tmp_5 = tmp0_elvis_lhs_2 == null ? bestWeightAbove_2 : tmp0_elvis_lhs_2;
        } else {
          var tmp1_elvis_lhs_2 = bestWeightAbove_2;
          tmp_5 = tmp1_elvis_lhs_2 == null ? bestWeightBelow_2 : tmp1_elvis_lhs_2;
        }
        var bestWeight_2 = tmp_5;
        // Inline function 'androidx.compose.ui.util.fastFilter' call
        var target_4 = ArrayList_init_$Create$_0(fontsToSearch.get_size_woubt6_k$());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable_8 = 0;
        var last_8 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable_8 <= last_8)
          do {
            var index_8 = inductionVariable_8;
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var item_4 = fontsToSearch.get_c1px32_k$(index_8);
            if (item_4.get_weight_lbhkzl_k$().equals(bestWeight_2)) {
              // Inline function 'kotlin.collections.plusAssign' call
              target_4.add_utx5q5_k$(item_4);
            }
          }
           while (inductionVariable_8 <= last_8);
        tmp_4 = target_4;
      } else {
        tmp_4 = target_3;
      }
      tmp_0 = tmp_4;
    }
    var result = tmp_0;
    return result;
  };
  protoOf(FontMatcher).filterByClosestWeight_5233wk_k$ = function (_this__u8e3s4, fontWeight, preferBelow, minSearchRange, maxSearchRange) {
    var bestWeightAbove = null;
    var bestWeightBelow = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop_1: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.get_c1px32_k$(index);
        var possibleWeight = font.get_weight_lbhkzl_k$();
        if (!(minSearchRange == null) && possibleWeight.compareTo_mrh9jv_k$(minSearchRange) < 0) {
          continue $l$loop_1;
        }
        if (!(maxSearchRange == null) && possibleWeight.compareTo_mrh9jv_k$(maxSearchRange) > 0) {
          continue $l$loop_1;
        }
        if (possibleWeight.compareTo_mrh9jv_k$(fontWeight) < 0) {
          if (bestWeightBelow == null || possibleWeight.compareTo_mrh9jv_k$(bestWeightBelow) > 0) {
            bestWeightBelow = possibleWeight;
          }
        } else if (possibleWeight.compareTo_mrh9jv_k$(fontWeight) > 0) {
          if (bestWeightAbove == null || possibleWeight.compareTo_mrh9jv_k$(bestWeightAbove) < 0) {
            bestWeightAbove = possibleWeight;
          }
        } else {
          bestWeightAbove = possibleWeight;
          bestWeightBelow = possibleWeight;
          break $l$loop_1;
        }
      }
       while (inductionVariable <= last);
    var tmp;
    if (preferBelow) {
      var tmp0_elvis_lhs = bestWeightBelow;
      tmp = tmp0_elvis_lhs == null ? bestWeightAbove : tmp0_elvis_lhs;
    } else {
      var tmp1_elvis_lhs = bestWeightAbove;
      tmp = tmp1_elvis_lhs == null ? bestWeightBelow : tmp1_elvis_lhs;
    }
    var bestWeight = tmp;
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_0 = 0;
    var last_0 = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index_0);
        if (item.get_weight_lbhkzl_k$().equals(bestWeight)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(item);
        }
      }
       while (inductionVariable_0 <= last_0);
    return target;
  };
  protoOf(FontMatcher).matchFont_m1ise8_k$ = function (fontFamily, fontWeight, fontStyle) {
    if (!(fontFamily instanceof FontListFontFamily))
      throw IllegalArgumentException_init_$Create$_0('Only FontFamily instances that presents a list of Fonts can be used');
    return this.matchFont_4rkgzl_k$(fontFamily, fontWeight, fontStyle);
  };
  protoOf(FontMatcher).matchFont_4rkgzl_k$ = function (fontFamily, fontWeight, fontStyle) {
    return this.matchFont_6opk8k_k$(fontFamily.get_fonts_irho7v_k$(), fontWeight, fontStyle);
  };
  function _FontStyle___init__impl__jcnduf(value) {
    return value;
  }
  function _FontStyle___get_value__impl__gx8aaz($this) {
    return $this;
  }
  function FontStyle__toString_impl_thncxr($this) {
    return $this === Companion_getInstance_31().Normal_1 ? 'Normal' : $this === Companion_getInstance_31().Italic_1 ? 'Italic' : 'Invalid';
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.Normal_1 = _FontStyle___init__impl__jcnduf(0);
    this.Italic_1 = _FontStyle___init__impl__jcnduf(1);
  }
  protoOf(Companion_14).get_Normal_tevh6u_k$ = function () {
    return this.Normal_1;
  };
  protoOf(Companion_14).get_Italic_5ol4ot_k$ = function () {
    return this.Italic_1;
  };
  protoOf(Companion_14).values_dmh61q_k$ = function () {
    return listOf([new FontStyle(this.Normal_1), new FontStyle(this.Italic_1)]);
  };
  var Companion_instance_14;
  function Companion_getInstance_31() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function FontStyle__hashCode_impl_7qhg4w($this) {
    return $this;
  }
  function FontStyle__equals_impl_2zal3g($this, other) {
    if (!(other instanceof FontStyle))
      return false;
    if (!($this === (other instanceof FontStyle ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontStyle(value) {
    Companion_getInstance_31();
    this.value_1 = value;
  }
  protoOf(FontStyle).toString = function () {
    return FontStyle__toString_impl_thncxr(this.value_1);
  };
  protoOf(FontStyle).hashCode = function () {
    return FontStyle__hashCode_impl_7qhg4w(this.value_1);
  };
  protoOf(FontStyle).equals = function (other) {
    return FontStyle__equals_impl_2zal3g(this.value_1, other);
  };
  function _FontSynthesis___init__impl__n397bg(value) {
    return value;
  }
  function _FontSynthesis___get_value__impl__xrueqg($this) {
    return $this;
  }
  function FontSynthesis__toString_impl_gunvr0($this) {
    return $this === Companion_getInstance_32().None_1 ? 'None' : $this === Companion_getInstance_32().Weight_1 ? 'Weight' : $this === Companion_getInstance_32().Style_1 ? 'Style' : $this === Companion_getInstance_32().All_1 ? 'All' : 'Invalid';
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.None_1 = _FontSynthesis___init__impl__n397bg(0);
    this.Weight_1 = _FontSynthesis___init__impl__n397bg(1);
    this.Style_1 = _FontSynthesis___init__impl__n397bg(2);
    this.All_1 = _FontSynthesis___init__impl__n397bg(65535);
  }
  protoOf(Companion_15).get_None_4h38ia_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_15).get_Weight_42vff6_k$ = function () {
    return this.Weight_1;
  };
  protoOf(Companion_15).get_Style_inainp_k$ = function () {
    return this.Style_1;
  };
  protoOf(Companion_15).get_All_bqi34r_k$ = function () {
    return this.All_1;
  };
  var Companion_instance_15;
  function Companion_getInstance_32() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function _FontSynthesis___get_isWeightOn__impl__6dyd1g($this) {
    return !((_FontSynthesis___get_value__impl__xrueqg($this) & 1) === 0);
  }
  function _FontSynthesis___get_isStyleOn__impl__vevcx9($this) {
    return !((_FontSynthesis___get_value__impl__xrueqg($this) & 2) === 0);
  }
  function FontSynthesis__hashCode_impl_4wi11v($this) {
    return $this;
  }
  function FontSynthesis__equals_impl_zgu9mf($this, other) {
    if (!(other instanceof FontSynthesis))
      return false;
    if (!($this === (other instanceof FontSynthesis ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontSynthesis(value) {
    Companion_getInstance_32();
    this.value_1 = value;
  }
  protoOf(FontSynthesis).toString = function () {
    return FontSynthesis__toString_impl_gunvr0(this.value_1);
  };
  protoOf(FontSynthesis).hashCode = function () {
    return FontSynthesis__hashCode_impl_4wi11v(this.value_1);
  };
  protoOf(FontSynthesis).equals = function (other) {
    return FontSynthesis__equals_impl_zgu9mf(this.value_1, other);
  };
  var androidx_compose_ui_text_font_FontVariation_Settings$stable;
  var androidx_compose_ui_text_font_FontVariation$stable;
  function Settings(settings) {
    var tmp = this;
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.groupByTo' call
    var destination = LinkedHashMap_init_$Create$();
    var inductionVariable = 0;
    var last = settings.length;
    while (inductionVariable < last) {
      var element = settings[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = element.get_axisName_uvfbth_k$();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.get_wei43m_k$(key);
      var tmp_0;
      if (value == null) {
        var answer = ArrayList_init_$Create$();
        destination.put_4fpzoq_k$(key, answer);
        tmp_0 = answer;
      } else {
        tmp_0 = value;
      }
      var list = tmp_0;
      list.add_utx5q5_k$(element);
    }
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = destination.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var key_0 = element_0.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value_0 = element_0.get_value_j01efc_k$();
      // Inline function 'kotlin.require' call
      if (!(value_0.get_size_woubt6_k$() === 1)) {
        var message = "'" + key_0 + "' must be unique. Actual [ [" + joinToString(value_0) + ']';
        throw IllegalArgumentException_init_$Create$_0(toString_0(message));
      }
      var list_0 = value_0;
      addAll(destination_0, list_0);
    }
    tmp.settings_1 = ArrayList_init_$Create$_1(destination_0);
    var tmp_1 = this;
    var tmp0 = this.settings_1;
    var tmp$ret$14;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_0 = 0;
      var last_0 = tmp0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item = tmp0.get_c1px32_k$(index);
          if (item.get_needsDensity_cltu0c_k$()) {
            tmp$ret$14 = true;
            break $l$block;
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$14 = false;
    }
    tmp_1.needsDensity_1 = tmp$ret$14;
  }
  protoOf(Settings).get_settings_82sm50_k$ = function () {
    return this.settings_1;
  };
  protoOf(Settings).get_needsDensity_cqd4f_k$ = function () {
    return this.needsDensity_1;
  };
  protoOf(Settings).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Settings))
      return false;
    if (!equals(this.settings_1, other.settings_1))
      return false;
    return true;
  };
  protoOf(Settings).hashCode = function () {
    return hashCode(this.settings_1);
  };
  function Setting() {
  }
  function SettingFloat(axisName, value) {
    this.axisName_1 = axisName;
    this.value_1 = value;
    this.needsDensity_1 = false;
  }
  protoOf(SettingFloat).get_axisName_uvfbth_k$ = function () {
    return this.axisName_1;
  };
  protoOf(SettingFloat).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(SettingFloat).toVariationValue_jfsfyi_k$ = function (density) {
    return this.value_1;
  };
  protoOf(SettingFloat).get_needsDensity_cltu0c_k$ = function () {
    return this.needsDensity_1;
  };
  protoOf(SettingFloat).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SettingFloat))
      return false;
    if (!(this.axisName_1 === other.axisName_1))
      return false;
    if (!(this.value_1 === other.value_1))
      return false;
    return true;
  };
  protoOf(SettingFloat).hashCode = function () {
    var result = getStringHashCode(this.axisName_1);
    result = imul(31, result) + getNumberHashCode(this.value_1) | 0;
    return result;
  };
  protoOf(SettingFloat).toString = function () {
    return "FontVariation.Setting(axisName='" + this.axisName_1 + "', value=" + this.value_1 + ')';
  };
  function SettingTextUnit(axisName, value) {
    this.axisName_1 = axisName;
    this.value_1 = value;
    this.needsDensity_1 = true;
  }
  protoOf(SettingTextUnit).get_axisName_uvfbth_k$ = function () {
    return this.axisName_1;
  };
  protoOf(SettingTextUnit).get_value_o6ty6u_k$ = function () {
    return this.value_1;
  };
  protoOf(SettingTextUnit).toVariationValue_jfsfyi_k$ = function (density) {
    // Inline function 'androidx.compose.ui.text.internal.requirePreconditionNotNull' call
    if (density == null) {
      var tmp$ret$0 = 'density must not be null';
      throwIllegalArgumentExceptionForNullCheck(tmp$ret$0);
    }
    return _TextUnit___get_value__impl__hpbx0k(this.value_1) * density.get_fontScale_h56n3i_k$();
  };
  protoOf(SettingTextUnit).get_needsDensity_cltu0c_k$ = function () {
    return this.needsDensity_1;
  };
  protoOf(SettingTextUnit).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SettingTextUnit))
      return false;
    if (!(this.axisName_1 === other.axisName_1))
      return false;
    if (!equals(this.value_1, other.value_1))
      return false;
    return true;
  };
  protoOf(SettingTextUnit).hashCode = function () {
    var result = getStringHashCode(this.axisName_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.value_1) | 0;
    return result;
  };
  protoOf(SettingTextUnit).toString = function () {
    return "FontVariation.Setting(axisName='" + this.axisName_1 + "', value=" + TextUnit__toString_impl_51ghw0(this.value_1) + ')';
  };
  function SettingInt(axisName, value) {
    this.axisName_1 = axisName;
    this.value_1 = value;
    this.needsDensity_1 = false;
  }
  protoOf(SettingInt).get_axisName_uvfbth_k$ = function () {
    return this.axisName_1;
  };
  protoOf(SettingInt).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(SettingInt).toVariationValue_jfsfyi_k$ = function (density) {
    return this.value_1;
  };
  protoOf(SettingInt).get_needsDensity_cltu0c_k$ = function () {
    return this.needsDensity_1;
  };
  protoOf(SettingInt).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SettingInt))
      return false;
    if (!(this.axisName_1 === other.axisName_1))
      return false;
    if (!(this.value_1 === other.value_1))
      return false;
    return true;
  };
  protoOf(SettingInt).hashCode = function () {
    var result = getStringHashCode(this.axisName_1);
    result = imul(31, result) + this.value_1 | 0;
    return result;
  };
  protoOf(SettingInt).toString = function () {
    return "FontVariation.Setting(axisName='" + this.axisName_1 + "', value=" + this.value_1 + ')';
  };
  function FontVariation() {
    FontVariation_instance = this;
  }
  protoOf(FontVariation).Setting_442lf2_k$ = function (name, value) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(name.length === 4)) {
      var tmp$ret$0 = "Name must be exactly four characters. Actual: '" + name + "'";
      throwIllegalArgumentException(tmp$ret$0);
    }
    return new SettingFloat(name, value);
  };
  protoOf(FontVariation).italic_ktftc8_k$ = function (value) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0.0 <= value ? value <= 1.0 : false)) {
      var tmp$ret$0 = "'ital' must be in 0.0f..1.0f. Actual: " + value;
      throwIllegalArgumentException(tmp$ret$0);
    }
    return new SettingFloat('ital', value);
  };
  protoOf(FontVariation).opticalSizing_p4zlns_k$ = function (textSize) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!_TextUnit___get_isSp__impl__8c3r6q(textSize)) {
      var tmp$ret$0 = "'opsz' must be provided in sp units";
      throwIllegalArgumentException(tmp$ret$0);
    }
    return new SettingTextUnit('opsz', textSize);
  };
  protoOf(FontVariation).slant_3ddcju_k$ = function (value) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(-90.0 <= value ? value <= 90.0 : false)) {
      var tmp$ret$0 = "'slnt' must be in -90f..90f. Actual: " + value;
      throwIllegalArgumentException(tmp$ret$0);
    }
    return new SettingFloat('slnt', value);
  };
  protoOf(FontVariation).width_h0xe6_k$ = function (value) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(value > 0.0)) {
      var tmp$ret$0 = "'wdth' must be strictly > 0.0f. Actual: " + value;
      throwIllegalArgumentException(tmp$ret$0);
    }
    return new SettingFloat('wdth', value);
  };
  protoOf(FontVariation).weight_c82128_k$ = function (value) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(1 <= value ? value <= 1000 : false)) {
      var tmp$ret$0 = "'wght' value must be in [1, 1000]. Actual: " + value;
      throwIllegalArgumentException(tmp$ret$0);
    }
    return new SettingInt('wght', value);
  };
  protoOf(FontVariation).grade_c4yjz5_k$ = function (value) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(-1000 <= value ? value <= 1000 : false)) {
      var tmp$ret$0 = "'GRAD' must be in -1000..1000";
      throwIllegalArgumentException(tmp$ret$0);
    }
    return new SettingInt('GRAD', value);
  };
  protoOf(FontVariation).Settings_m8l6ta_k$ = function (weight, style, settings) {
    return new Settings(arrayConcat([[this.weight_c82128_k$(weight.get_weight_lbhkzl_k$()), this.italic_ktftc8_k$(_FontStyle___get_value__impl__gx8aaz(style))], settings]));
  };
  var FontVariation_instance;
  function FontVariation_getInstance() {
    if (FontVariation_instance == null)
      new FontVariation();
    return FontVariation_instance;
  }
  var androidx_compose_ui_text_font_FontWeight$stable;
  function Companion_16() {
    Companion_instance_16 = this;
    this.W100__1 = new FontWeight(100);
    this.W200__1 = new FontWeight(200);
    this.W300__1 = new FontWeight(300);
    this.W400__1 = new FontWeight(400);
    this.W500__1 = new FontWeight(500);
    this.W600__1 = new FontWeight(600);
    this.W700__1 = new FontWeight(700);
    this.W800__1 = new FontWeight(800);
    this.W900__1 = new FontWeight(900);
    this.Thin_1 = this.W100__1;
    this.ExtraLight_1 = this.W200__1;
    this.Light_1 = this.W300__1;
    this.Normal_1 = this.W400__1;
    this.Medium_1 = this.W500__1;
    this.SemiBold_1 = this.W600__1;
    this.Bold_1 = this.W700__1;
    this.ExtraBold_1 = this.W800__1;
    this.Black_1 = this.W900__1;
    this.values_1 = listOf([this.W100__1, this.W200__1, this.W300__1, this.W400__1, this.W500__1, this.W600__1, this.W700__1, this.W800__1, this.W900__1]);
  }
  protoOf(Companion_16).get_W100_wob8ub_k$ = function () {
    return this.W100__1;
  };
  protoOf(Companion_16).get_W200_wob9l0_k$ = function () {
    return this.W200__1;
  };
  protoOf(Companion_16).get_W300_wobabp_k$ = function () {
    return this.W300__1;
  };
  protoOf(Companion_16).get_W400_wobb2e_k$ = function () {
    return this.W400__1;
  };
  protoOf(Companion_16).get_W500_wobbt3_k$ = function () {
    return this.W500__1;
  };
  protoOf(Companion_16).get_W600_wobcjs_k$ = function () {
    return this.W600__1;
  };
  protoOf(Companion_16).get_W700_wobdah_k$ = function () {
    return this.W700__1;
  };
  protoOf(Companion_16).get_W800_wobe16_k$ = function () {
    return this.W800__1;
  };
  protoOf(Companion_16).get_W900_woberv_k$ = function () {
    return this.W900__1;
  };
  protoOf(Companion_16).get_Thin_woai2q_k$ = function () {
    return this.Thin_1;
  };
  protoOf(Companion_16).get_ExtraLight_ov7yxb_k$ = function () {
    return this.ExtraLight_1;
  };
  protoOf(Companion_16).get_Light_id31e5_k$ = function () {
    return this.Light_1;
  };
  protoOf(Companion_16).get_Normal_22avww_k$ = function () {
    return this.Normal_1;
  };
  protoOf(Companion_16).get_Medium_1fiba6_k$ = function () {
    return this.Medium_1;
  };
  protoOf(Companion_16).get_SemiBold_aid1c4_k$ = function () {
    return this.SemiBold_1;
  };
  protoOf(Companion_16).get_Bold_wnz5ke_k$ = function () {
    return this.Bold_1;
  };
  protoOf(Companion_16).get_ExtraBold_xklwd0_k$ = function () {
    return this.ExtraBold_1;
  };
  protoOf(Companion_16).get_Black_i7mvue_k$ = function () {
    return this.Black_1;
  };
  protoOf(Companion_16).get_values_7gwjra_k$ = function () {
    return this.values_1;
  };
  var Companion_instance_16;
  function Companion_getInstance_33() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function FontWeight(weight) {
    Companion_getInstance_33();
    this.weight_1 = weight;
    var containsArg = this.weight_1;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(1 <= containsArg ? containsArg <= 1000 : false)) {
      var tmp$ret$0 = 'Font weight can be in range [1, 1000]. Current value: ' + this.weight_1;
      throwIllegalArgumentException(tmp$ret$0);
    }
  }
  protoOf(FontWeight).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(FontWeight).compareTo_mrh9jv_k$ = function (other) {
    return compareTo(this.weight_1, other.weight_1);
  };
  protoOf(FontWeight).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_mrh9jv_k$(other instanceof FontWeight ? other : THROW_CCE());
  };
  protoOf(FontWeight).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontWeight))
      return false;
    if (!(this.weight_1 === other.weight_1))
      return false;
    return true;
  };
  protoOf(FontWeight).hashCode = function () {
    return this.weight_1;
  };
  protoOf(FontWeight).toString = function () {
    return 'FontWeight(weight=' + this.weight_1 + ')';
  };
  function lerp_7(start, stop, fraction) {
    var weight = coerceIn(lerp_2(start.weight_1, stop.weight_1, fraction), 1, 1000);
    return new FontWeight(weight);
  }
  function Typeface() {
  }
  var androidx_compose_ui_text_input_CommitTextCommand$stable;
  var androidx_compose_ui_text_input_SetComposingRegionCommand$stable;
  var androidx_compose_ui_text_input_SetComposingTextCommand$stable;
  var androidx_compose_ui_text_input_DeleteSurroundingTextCommand$stable;
  var androidx_compose_ui_text_input_DeleteSurroundingTextInCodePointsCommand$stable;
  var androidx_compose_ui_text_input_SetSelectionCommand$stable;
  var androidx_compose_ui_text_input_FinishComposingTextCommand$stable;
  var androidx_compose_ui_text_input_BackspaceCommand$stable;
  var androidx_compose_ui_text_input_MoveCursorCommand$stable;
  var androidx_compose_ui_text_input_DeleteAllCommand$stable;
  function EditCommand() {
  }
  function FinishComposingTextCommand() {
  }
  protoOf(FinishComposingTextCommand).applyTo_f361h0_k$ = function (buffer) {
    buffer.commitComposition_bukagu_k$();
  };
  protoOf(FinishComposingTextCommand).equals = function (other) {
    return other instanceof FinishComposingTextCommand;
  };
  protoOf(FinishComposingTextCommand).hashCode = function () {
    return getKClassFromExpression(this).hashCode();
  };
  protoOf(FinishComposingTextCommand).toString = function () {
    return 'FinishComposingTextCommand()';
  };
  function CommitTextCommand_init_$Init$(text, newCursorPosition, $this) {
    CommitTextCommand.call($this, AnnotatedString_init_$Create$_0(text), newCursorPosition);
    return $this;
  }
  function CommitTextCommand_init_$Create$(text, newCursorPosition) {
    return CommitTextCommand_init_$Init$(text, newCursorPosition, objectCreate(protoOf(CommitTextCommand)));
  }
  function CommitTextCommand(annotatedString, newCursorPosition) {
    this.annotatedString_1 = annotatedString;
    this.newCursorPosition_1 = newCursorPosition;
  }
  protoOf(CommitTextCommand).get_annotatedString_5pdwrk_k$ = function () {
    return this.annotatedString_1;
  };
  protoOf(CommitTextCommand).get_newCursorPosition_tgzkui_k$ = function () {
    return this.newCursorPosition_1;
  };
  protoOf(CommitTextCommand).get_text_wouvsm_k$ = function () {
    return this.annotatedString_1.get_text_wouvsm_k$();
  };
  protoOf(CommitTextCommand).applyTo_f361h0_k$ = function (buffer) {
    if (buffer.hasComposition_2l3uz_k$()) {
      buffer.replace_mtbww5_k$(buffer.get_compositionStart_oz9tdo_k$(), buffer.get_compositionEnd_swt01h_k$(), this.get_text_wouvsm_k$());
    } else {
      buffer.replace_mtbww5_k$(buffer.get_selectionStart_oujlra_k$(), buffer.get_selectionEnd_ofk6p9_k$(), this.get_text_wouvsm_k$());
    }
    var newCursor = buffer.get_cursor_h517wa_k$();
    var tmp;
    if (this.newCursorPosition_1 > 0) {
      tmp = (newCursor + this.newCursorPosition_1 | 0) - 1 | 0;
    } else {
      tmp = (newCursor + this.newCursorPosition_1 | 0) - this.get_text_wouvsm_k$().length | 0;
    }
    var newCursorInBuffer = tmp;
    buffer.set_cursor_2afk6e_k$(coerceIn(newCursorInBuffer, 0, buffer.get_length_6j7h2u_k$()));
  };
  protoOf(CommitTextCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CommitTextCommand))
      return false;
    if (!(this.get_text_wouvsm_k$() === other.get_text_wouvsm_k$()))
      return false;
    if (!(this.newCursorPosition_1 === other.newCursorPosition_1))
      return false;
    return true;
  };
  protoOf(CommitTextCommand).hashCode = function () {
    var result = getStringHashCode(this.get_text_wouvsm_k$());
    result = imul(31, result) + this.newCursorPosition_1 | 0;
    return result;
  };
  protoOf(CommitTextCommand).toString = function () {
    return "CommitTextCommand(text='" + this.get_text_wouvsm_k$() + "', newCursorPosition=" + this.newCursorPosition_1 + ')';
  };
  function DeleteSurroundingTextCommand(lengthBeforeCursor, lengthAfterCursor) {
    this.lengthBeforeCursor_1 = lengthBeforeCursor;
    this.lengthAfterCursor_1 = lengthAfterCursor;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(this.lengthBeforeCursor_1 >= 0 && this.lengthAfterCursor_1 >= 0)) {
      var tmp$ret$0 = 'Expected lengthBeforeCursor and lengthAfterCursor to be non-negative, were ' + ('' + this.lengthBeforeCursor_1 + ' and ' + this.lengthAfterCursor_1 + ' respectively.');
      throwIllegalArgumentException(tmp$ret$0);
    }
  }
  protoOf(DeleteSurroundingTextCommand).get_lengthBeforeCursor_s0y05g_k$ = function () {
    return this.lengthBeforeCursor_1;
  };
  protoOf(DeleteSurroundingTextCommand).get_lengthAfterCursor_pm54bh_k$ = function () {
    return this.lengthAfterCursor_1;
  };
  protoOf(DeleteSurroundingTextCommand).applyTo_f361h0_k$ = function (buffer) {
    var tmp0 = buffer.get_selectionEnd_ofk6p9_k$();
    // Inline function 'androidx.compose.ui.text.input.addExactOrElse' call
    var right = this.lengthAfterCursor_1;
    var result = tmp0 + right | 0;
    var tmp;
    if (((tmp0 ^ result) & (right ^ result)) < 0) {
      tmp = buffer.get_length_6j7h2u_k$();
    } else {
      tmp = result;
    }
    var end = tmp;
    var tmp_0 = buffer.get_selectionEnd_ofk6p9_k$();
    // Inline function 'kotlin.comparisons.minOf' call
    var b = buffer.get_length_6j7h2u_k$();
    var tmp$ret$2 = Math.min(end, b);
    buffer.delete_iduud2_k$(tmp_0, tmp$ret$2);
    var tmp0_0 = buffer.get_selectionStart_oujlra_k$();
    // Inline function 'androidx.compose.ui.text.input.subtractExactOrElse' call
    var right_0 = this.lengthBeforeCursor_1;
    var result_0 = tmp0_0 - right_0 | 0;
    var tmp_1;
    if (((tmp0_0 ^ right_0) & (tmp0_0 ^ result_0)) < 0) {
      tmp_1 = 0;
    } else {
      tmp_1 = result_0;
    }
    var start = tmp_1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp$ret$5 = Math.max(0, start);
    buffer.delete_iduud2_k$(tmp$ret$5, buffer.get_selectionStart_oujlra_k$());
  };
  protoOf(DeleteSurroundingTextCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeleteSurroundingTextCommand))
      return false;
    if (!(this.lengthBeforeCursor_1 === other.lengthBeforeCursor_1))
      return false;
    if (!(this.lengthAfterCursor_1 === other.lengthAfterCursor_1))
      return false;
    return true;
  };
  protoOf(DeleteSurroundingTextCommand).hashCode = function () {
    var result = this.lengthBeforeCursor_1;
    result = imul(31, result) + this.lengthAfterCursor_1 | 0;
    return result;
  };
  protoOf(DeleteSurroundingTextCommand).toString = function () {
    return 'DeleteSurroundingTextCommand(lengthBeforeCursor=' + this.lengthBeforeCursor_1 + ', ' + ('lengthAfterCursor=' + this.lengthAfterCursor_1 + ')');
  };
  function DeleteAllCommand() {
  }
  protoOf(DeleteAllCommand).applyTo_f361h0_k$ = function (buffer) {
    buffer.replace_mtbww5_k$(0, buffer.get_length_6j7h2u_k$(), '');
  };
  protoOf(DeleteAllCommand).equals = function (other) {
    return other instanceof DeleteAllCommand;
  };
  protoOf(DeleteAllCommand).hashCode = function () {
    return getKClassFromExpression(this).hashCode();
  };
  protoOf(DeleteAllCommand).toString = function () {
    return 'DeleteAllCommand()';
  };
  function SetSelectionCommand(start, end) {
    this.start_1 = start;
    this.end_1 = end;
  }
  protoOf(SetSelectionCommand).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(SetSelectionCommand).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(SetSelectionCommand).applyTo_f361h0_k$ = function (buffer) {
    var clampedStart = coerceIn(this.start_1, 0, buffer.get_length_6j7h2u_k$());
    var clampedEnd = coerceIn(this.end_1, 0, buffer.get_length_6j7h2u_k$());
    if (clampedStart < clampedEnd) {
      buffer.setSelection_ipz6az_k$(clampedStart, clampedEnd);
    } else {
      buffer.setSelection_ipz6az_k$(clampedEnd, clampedStart);
    }
  };
  protoOf(SetSelectionCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetSelectionCommand))
      return false;
    if (!(this.start_1 === other.start_1))
      return false;
    if (!(this.end_1 === other.end_1))
      return false;
    return true;
  };
  protoOf(SetSelectionCommand).hashCode = function () {
    var result = this.start_1;
    result = imul(31, result) + this.end_1 | 0;
    return result;
  };
  protoOf(SetSelectionCommand).toString = function () {
    return 'SetSelectionCommand(start=' + this.start_1 + ', end=' + this.end_1 + ')';
  };
  function SetComposingTextCommand_init_$Init$(text, newCursorPosition, $this) {
    SetComposingTextCommand.call($this, AnnotatedString_init_$Create$_0(text), newCursorPosition);
    return $this;
  }
  function SetComposingTextCommand_init_$Create$(text, newCursorPosition) {
    return SetComposingTextCommand_init_$Init$(text, newCursorPosition, objectCreate(protoOf(SetComposingTextCommand)));
  }
  function SetComposingTextCommand(annotatedString, newCursorPosition) {
    this.annotatedString_1 = annotatedString;
    this.newCursorPosition_1 = newCursorPosition;
  }
  protoOf(SetComposingTextCommand).get_annotatedString_5pdwrk_k$ = function () {
    return this.annotatedString_1;
  };
  protoOf(SetComposingTextCommand).get_newCursorPosition_tgzkui_k$ = function () {
    return this.newCursorPosition_1;
  };
  protoOf(SetComposingTextCommand).get_text_wouvsm_k$ = function () {
    return this.annotatedString_1.get_text_wouvsm_k$();
  };
  protoOf(SetComposingTextCommand).applyTo_f361h0_k$ = function (buffer) {
    if (buffer.hasComposition_2l3uz_k$()) {
      var compositionStart = buffer.get_compositionStart_oz9tdo_k$();
      buffer.replace_mtbww5_k$(buffer.get_compositionStart_oz9tdo_k$(), buffer.get_compositionEnd_swt01h_k$(), this.get_text_wouvsm_k$());
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = this.get_text_wouvsm_k$();
      if (charSequenceLength(this_0) > 0) {
        buffer.setComposition_8kumml_k$(compositionStart, compositionStart + this.get_text_wouvsm_k$().length | 0);
      }
    } else {
      var selectionStart = buffer.get_selectionStart_oujlra_k$();
      buffer.replace_mtbww5_k$(buffer.get_selectionStart_oujlra_k$(), buffer.get_selectionEnd_ofk6p9_k$(), this.get_text_wouvsm_k$());
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_1 = this.get_text_wouvsm_k$();
      if (charSequenceLength(this_1) > 0) {
        buffer.setComposition_8kumml_k$(selectionStart, selectionStart + this.get_text_wouvsm_k$().length | 0);
      }
    }
    var newCursor = buffer.get_cursor_h517wa_k$();
    var tmp;
    if (this.newCursorPosition_1 > 0) {
      tmp = (newCursor + this.newCursorPosition_1 | 0) - 1 | 0;
    } else {
      tmp = (newCursor + this.newCursorPosition_1 | 0) - this.get_text_wouvsm_k$().length | 0;
    }
    var newCursorInBuffer = tmp;
    buffer.set_cursor_2afk6e_k$(coerceIn(newCursorInBuffer, 0, buffer.get_length_6j7h2u_k$()));
  };
  protoOf(SetComposingTextCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetComposingTextCommand))
      return false;
    if (!(this.get_text_wouvsm_k$() === other.get_text_wouvsm_k$()))
      return false;
    if (!(this.newCursorPosition_1 === other.newCursorPosition_1))
      return false;
    return true;
  };
  protoOf(SetComposingTextCommand).hashCode = function () {
    var result = getStringHashCode(this.get_text_wouvsm_k$());
    result = imul(31, result) + this.newCursorPosition_1 | 0;
    return result;
  };
  protoOf(SetComposingTextCommand).toString = function () {
    return "SetComposingTextCommand(text='" + this.get_text_wouvsm_k$() + "', newCursorPosition=" + this.newCursorPosition_1 + ')';
  };
  function SetComposingRegionCommand(start, end) {
    this.start_1 = start;
    this.end_1 = end;
  }
  protoOf(SetComposingRegionCommand).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(SetComposingRegionCommand).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(SetComposingRegionCommand).applyTo_f361h0_k$ = function (buffer) {
    if (buffer.hasComposition_2l3uz_k$()) {
      buffer.commitComposition_bukagu_k$();
    }
    var clampedStart = coerceIn(this.start_1, 0, buffer.get_length_6j7h2u_k$());
    var clampedEnd = coerceIn(this.end_1, 0, buffer.get_length_6j7h2u_k$());
    if (clampedStart !== clampedEnd)
      if (clampedStart < clampedEnd) {
        buffer.setComposition_8kumml_k$(clampedStart, clampedEnd);
      } else {
        buffer.setComposition_8kumml_k$(clampedEnd, clampedStart);
      }
  };
  protoOf(SetComposingRegionCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetComposingRegionCommand))
      return false;
    if (!(this.start_1 === other.start_1))
      return false;
    if (!(this.end_1 === other.end_1))
      return false;
    return true;
  };
  protoOf(SetComposingRegionCommand).hashCode = function () {
    var result = this.start_1;
    result = imul(31, result) + this.end_1 | 0;
    return result;
  };
  protoOf(SetComposingRegionCommand).toString = function () {
    return 'SetComposingRegionCommand(start=' + this.start_1 + ', end=' + this.end_1 + ')';
  };
  function DeleteSurroundingTextInCodePointsCommand(lengthBeforeCursor, lengthAfterCursor) {
    this.lengthBeforeCursor_1 = lengthBeforeCursor;
    this.lengthAfterCursor_1 = lengthAfterCursor;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(this.lengthBeforeCursor_1 >= 0 && this.lengthAfterCursor_1 >= 0)) {
      var tmp$ret$0 = 'Expected lengthBeforeCursor and lengthAfterCursor to be non-negative, were ' + ('' + this.lengthBeforeCursor_1 + ' and ' + this.lengthAfterCursor_1 + ' respectively.');
      throwIllegalArgumentException(tmp$ret$0);
    }
  }
  protoOf(DeleteSurroundingTextInCodePointsCommand).get_lengthBeforeCursor_s0y05g_k$ = function () {
    return this.lengthBeforeCursor_1;
  };
  protoOf(DeleteSurroundingTextInCodePointsCommand).get_lengthAfterCursor_pm54bh_k$ = function () {
    return this.lengthAfterCursor_1;
  };
  protoOf(DeleteSurroundingTextInCodePointsCommand).applyTo_f361h0_k$ = function (buffer) {
    var beforeLenInChars = 0;
    var inductionVariable = 0;
    var last = this.lengthBeforeCursor_1;
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        beforeLenInChars = beforeLenInChars + 1 | 0;
        if (buffer.get_selectionStart_oujlra_k$() > beforeLenInChars) {
          var lead = buffer.get_57jtjd_k$((buffer.get_selectionStart_oujlra_k$() - beforeLenInChars | 0) - 1 | 0);
          var trail = buffer.get_57jtjd_k$(buffer.get_selectionStart_oujlra_k$() - beforeLenInChars | 0);
          if (isSurrogatePair(lead, trail)) {
            beforeLenInChars = beforeLenInChars + 1 | 0;
          }
        } else {
          beforeLenInChars = buffer.get_selectionStart_oujlra_k$();
          break $l$loop;
        }
      }
       while (inductionVariable < last);
    var afterLenInChars = 0;
    var inductionVariable_0 = 0;
    var last_0 = this.lengthAfterCursor_1;
    if (inductionVariable_0 < last_0)
      $l$loop_0: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        afterLenInChars = afterLenInChars + 1 | 0;
        if ((buffer.get_selectionEnd_ofk6p9_k$() + afterLenInChars | 0) < buffer.get_length_6j7h2u_k$()) {
          var lead_0 = buffer.get_57jtjd_k$((buffer.get_selectionEnd_ofk6p9_k$() + afterLenInChars | 0) - 1 | 0);
          var trail_0 = buffer.get_57jtjd_k$(buffer.get_selectionEnd_ofk6p9_k$() + afterLenInChars | 0);
          if (isSurrogatePair(lead_0, trail_0)) {
            afterLenInChars = afterLenInChars + 1 | 0;
          }
        } else {
          afterLenInChars = buffer.get_length_6j7h2u_k$() - buffer.get_selectionEnd_ofk6p9_k$() | 0;
          break $l$loop_0;
        }
      }
       while (inductionVariable_0 < last_0);
    buffer.delete_iduud2_k$(buffer.get_selectionEnd_ofk6p9_k$(), buffer.get_selectionEnd_ofk6p9_k$() + afterLenInChars | 0);
    buffer.delete_iduud2_k$(buffer.get_selectionStart_oujlra_k$() - beforeLenInChars | 0, buffer.get_selectionStart_oujlra_k$());
  };
  protoOf(DeleteSurroundingTextInCodePointsCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeleteSurroundingTextInCodePointsCommand))
      return false;
    if (!(this.lengthBeforeCursor_1 === other.lengthBeforeCursor_1))
      return false;
    if (!(this.lengthAfterCursor_1 === other.lengthAfterCursor_1))
      return false;
    return true;
  };
  protoOf(DeleteSurroundingTextInCodePointsCommand).hashCode = function () {
    var result = this.lengthBeforeCursor_1;
    result = imul(31, result) + this.lengthAfterCursor_1 | 0;
    return result;
  };
  protoOf(DeleteSurroundingTextInCodePointsCommand).toString = function () {
    return 'DeleteSurroundingTextInCodePointsCommand(lengthBeforeCursor=' + this.lengthBeforeCursor_1 + ', ' + ('lengthAfterCursor=' + this.lengthAfterCursor_1 + ')');
  };
  function BackspaceCommand() {
  }
  protoOf(BackspaceCommand).applyTo_f361h0_k$ = function (buffer) {
    if (buffer.hasComposition_2l3uz_k$()) {
      buffer.delete_iduud2_k$(buffer.get_compositionStart_oz9tdo_k$(), buffer.get_compositionEnd_swt01h_k$());
      return Unit_getInstance();
    }
    if (buffer.get_cursor_h517wa_k$() === -1) {
      var delStart = buffer.get_selectionStart_oujlra_k$();
      var delEnd = buffer.get_selectionEnd_ofk6p9_k$();
      buffer.set_cursor_2afk6e_k$(buffer.get_selectionStart_oujlra_k$());
      buffer.delete_iduud2_k$(delStart, delEnd);
      return Unit_getInstance();
    }
    if (buffer.get_cursor_h517wa_k$() === 0) {
      return Unit_getInstance();
    }
    var prevCursorPos = findPrecedingBreak(buffer.toString(), buffer.get_cursor_h517wa_k$());
    buffer.delete_iduud2_k$(prevCursorPos, buffer.get_cursor_h517wa_k$());
  };
  protoOf(BackspaceCommand).equals = function (other) {
    return other instanceof BackspaceCommand;
  };
  protoOf(BackspaceCommand).hashCode = function () {
    return getKClassFromExpression(this).hashCode();
  };
  protoOf(BackspaceCommand).toString = function () {
    return 'BackspaceCommand()';
  };
  function MoveCursorCommand(amount) {
    this.amount_1 = amount;
  }
  protoOf(MoveCursorCommand).get_amount_b10di9_k$ = function () {
    return this.amount_1;
  };
  protoOf(MoveCursorCommand).applyTo_f361h0_k$ = function (buffer) {
    if (buffer.get_cursor_h517wa_k$() === -1) {
      buffer.set_cursor_2afk6e_k$(buffer.get_selectionStart_oujlra_k$());
    }
    var newCursor = buffer.get_selectionStart_oujlra_k$();
    var bufferText = buffer.toString();
    if (this.amount_1 > 0) {
      var inductionVariable = 0;
      var last = this.amount_1;
      if (inductionVariable < last)
        $l$loop: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var next = findFollowingBreak(bufferText, newCursor);
          if (next === -1)
            break $l$loop;
          newCursor = next;
        }
         while (inductionVariable < last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = -this.amount_1 | 0;
      if (inductionVariable_0 < last_0)
        $l$loop_0: do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var prev = findPrecedingBreak(bufferText, newCursor);
          if (prev === -1)
            break $l$loop_0;
          newCursor = prev;
        }
         while (inductionVariable_0 < last_0);
    }
    buffer.set_cursor_2afk6e_k$(newCursor);
  };
  protoOf(MoveCursorCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MoveCursorCommand))
      return false;
    if (!(this.amount_1 === other.amount_1))
      return false;
    return true;
  };
  protoOf(MoveCursorCommand).hashCode = function () {
    return this.amount_1;
  };
  protoOf(MoveCursorCommand).toString = function () {
    return 'MoveCursorCommand(amount=' + this.amount_1 + ')';
  };
  function isSurrogatePair(high, low) {
    return isHighSurrogate(high) && isLowSurrogate(low);
  }
  var androidx_compose_ui_text_input_EditProcessor$stable;
  function _set_mBufferState__bqygtp($this, _set____db54di) {
    $this.mBufferState_1 = _set____db54di;
  }
  function _set_mBuffer__xnaq5k($this, _set____db54di) {
    $this.mBuffer_1 = _set____db54di;
  }
  function generateBatchErrorMessage($this, editCommands, failedCommand) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    var tmp = 'length=' + $this.mBuffer_1.get_length_6j7h2u_k$() + ', ';
    var tmp_0 = $this.mBuffer_1.get_composition_wyzh65_k$();
    // Inline function 'kotlin.text.appendLine' call
    var value = 'Error while applying EditCommand batch to buffer (' + tmp + ('composition=' + toString(tmp_0 == null ? null : new TextRange(tmp_0)) + ', ') + ('selection=' + TextRange__toString_impl_pqvlzl($this.mBuffer_1.get_selection_oc2vbe_k$()) + '):');
    // Inline function 'kotlin.text.appendLine' call
    this_0.append_22ad7x_k$(value).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
    joinTo(editCommands, this_0, '\n', VOID, VOID, VOID, VOID, EditProcessor$generateBatchErrorMessage$lambda(failedCommand, $this));
    return this_0.toString();
  }
  function toStringForLog($this, _this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof CommitTextCommand) {
      tmp = 'CommitTextCommand(text.length=' + _this__u8e3s4.get_text_wouvsm_k$().length + ', newCursorPosition=' + _this__u8e3s4.get_newCursorPosition_tgzkui_k$() + ')';
    } else {
      if (_this__u8e3s4 instanceof SetComposingTextCommand) {
        tmp = 'SetComposingTextCommand(text.length=' + _this__u8e3s4.get_text_wouvsm_k$().length + ', ' + ('newCursorPosition=' + _this__u8e3s4.get_newCursorPosition_tgzkui_k$() + ')');
      } else {
        if (_this__u8e3s4 instanceof SetComposingRegionCommand) {
          tmp = _this__u8e3s4.toString();
        } else {
          if (_this__u8e3s4 instanceof DeleteSurroundingTextCommand) {
            tmp = _this__u8e3s4.toString();
          } else {
            if (_this__u8e3s4 instanceof DeleteSurroundingTextInCodePointsCommand) {
              tmp = _this__u8e3s4.toString();
            } else {
              if (_this__u8e3s4 instanceof SetSelectionCommand) {
                tmp = _this__u8e3s4.toString();
              } else {
                if (_this__u8e3s4 instanceof FinishComposingTextCommand) {
                  tmp = _this__u8e3s4.toString();
                } else {
                  if (_this__u8e3s4 instanceof BackspaceCommand) {
                    tmp = _this__u8e3s4.toString();
                  } else {
                    if (_this__u8e3s4 instanceof MoveCursorCommand) {
                      tmp = _this__u8e3s4.toString();
                    } else {
                      if (_this__u8e3s4 instanceof DeleteAllCommand) {
                        tmp = _this__u8e3s4.toString();
                      } else {
                        var tmp1_elvis_lhs = getKClassFromExpression(_this__u8e3s4).get_simpleName_r6f8py_k$();
                        tmp = 'Unknown EditCommand: ' + (tmp1_elvis_lhs == null ? '{anonymous EditCommand}' : tmp1_elvis_lhs);
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
    return tmp;
  }
  function EditProcessor$generateBatchErrorMessage$lambda($failedCommand, this$0) {
    return function (it) {
      var prefix = $failedCommand === it ? ' > ' : '   ';
      return prefix + toStringForLog(this$0, it);
    };
  }
  function EditProcessor() {
    this.mBufferState_1 = new TextFieldValue(emptyAnnotatedString(), Companion_getInstance_24().get_Zero_8je9ih_k$(), null);
    this.mBuffer_1 = new EditingBuffer(this.mBufferState_1.get_annotatedString_5pdwrk_k$(), this.mBufferState_1.get_selection_d115tn_k$());
  }
  protoOf(EditProcessor).get_mBufferState_cwl5nc_k$ = function () {
    return this.mBufferState_1;
  };
  protoOf(EditProcessor).get_mBuffer_khfvep_k$ = function () {
    return this.mBuffer_1;
  };
  protoOf(EditProcessor).reset_q7o20z_k$ = function (value, textInputSession) {
    var textChanged = false;
    var selectionChanged = false;
    var tmp = value.get_composition_sol8g8_k$();
    var tmp_0 = tmp == null ? null : new TextRange(tmp);
    var tmp_1 = this.mBuffer_1.get_composition_wyzh65_k$();
    var compositionChanged = !equals(tmp_0, tmp_1 == null ? null : new TextRange(tmp_1));
    if (!(this.mBufferState_1.get_annotatedString_5pdwrk_k$().get_text_wouvsm_k$() === value.get_annotatedString_5pdwrk_k$().get_text_wouvsm_k$())) {
      this.mBuffer_1 = new EditingBuffer(value.get_annotatedString_5pdwrk_k$(), value.get_selection_d115tn_k$());
      textChanged = true;
    } else if (!equals(this.mBufferState_1.get_selection_d115tn_k$(), value.get_selection_d115tn_k$())) {
      this.mBuffer_1.setSelection_ipz6az_k$(_TextRange___get_min__impl__uu95c4(value.get_selection_d115tn_k$()), _TextRange___get_max__impl__owm8m(value.get_selection_d115tn_k$()));
      selectionChanged = true;
    }
    var tmp_2 = value.get_composition_sol8g8_k$();
    if ((tmp_2 == null ? null : new TextRange(tmp_2)) == null) {
      this.mBuffer_1.commitComposition_bukagu_k$();
    } else {
      if (!_TextRange___get_collapsed__impl__cilesp(value.get_composition_sol8g8_k$())) {
        this.mBuffer_1.setComposition_8kumml_k$(_TextRange___get_min__impl__uu95c4(value.get_composition_sol8g8_k$()), _TextRange___get_max__impl__owm8m(value.get_composition_sol8g8_k$()));
      }
    }
    var tmp_3;
    if (textChanged || (!selectionChanged && compositionChanged)) {
      this.mBuffer_1.commitComposition_bukagu_k$();
      tmp_3 = value.copy$default_xf3zur_k$(VOID, VOID, null);
    } else {
      tmp_3 = value;
    }
    var newValue = tmp_3;
    var oldValue = this.mBufferState_1;
    this.mBufferState_1 = newValue;
    if (textInputSession == null)
      null;
    else
      textInputSession.updateState_n7bewf_k$(oldValue, newValue);
  };
  protoOf(EditProcessor).apply_cotx8y_k$ = function (editCommands) {
    var lastCommand = null;
    try {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = editCommands.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = editCommands.get_c1px32_k$(index);
          lastCommand = item;
          item.applyTo_f361h0_k$(this.mBuffer_1);
        }
         while (inductionVariable <= last);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        throw RuntimeException_init_$Create$(generateBatchErrorMessage(this, editCommands, lastCommand), e);
      } else {
        throw $p;
      }
    }
    var tmp = this.mBuffer_1.toAnnotatedString_u24s5z_k$();
    // Inline function 'kotlin.run' call
    var $this$run = this.mBuffer_1.get_selection_oc2vbe_k$();
    // Inline function 'kotlin.takeUnless' call
    var this_0 = new TextRange($this$run);
    var tmp_0;
    this_0.packedValue_1;
    if (!_TextRange___get_reversed__impl__emhnbm(this.mBufferState_1.get_selection_d115tn_k$())) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    var tmp_1 = tmp_0;
    var tmp0_elvis_lhs = tmp_1 == null ? null : tmp_1.packedValue_1;
    var tmp_2;
    var tmp_3 = tmp0_elvis_lhs;
    if ((tmp_3 == null ? null : new TextRange(tmp_3)) == null) {
      tmp_2 = TextRange_1(_TextRange___get_max__impl__owm8m($this$run), _TextRange___get_min__impl__uu95c4($this$run));
    } else {
      tmp_2 = tmp0_elvis_lhs;
    }
    var tmp$ret$5 = tmp_2;
    var newState = new TextFieldValue(tmp, tmp$ret$5, this.mBuffer_1.get_composition_wyzh65_k$());
    this.mBufferState_1 = newState;
    return newState;
  };
  protoOf(EditProcessor).toTextFieldValue_3ykzy7_k$ = function () {
    return this.mBufferState_1;
  };
  var androidx_compose_ui_text_input_EditingBuffer$stable;
  function Companion_17() {
    Companion_instance_17 = this;
    this.NOWHERE_1 = -1;
  }
  protoOf(Companion_17).get_NOWHERE_g4sahk_k$ = function () {
    return this.NOWHERE_1;
  };
  var Companion_instance_17;
  function Companion_getInstance_34() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function _get_gapBuffer__3kebmj($this) {
    return $this.gapBuffer_1;
  }
  function _set_selectionStart__65lsx($this, value) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(value >= 0)) {
      var tmp$ret$0 = 'Cannot set selectionStart to a negative value: ' + value;
      throwIllegalArgumentException(tmp$ret$0);
    }
    $this.selectionStart_1 = value;
  }
  function _set_selectionEnd__2o1cag($this, value) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(value >= 0)) {
      var tmp$ret$0 = 'Cannot set selectionEnd to a negative value: ' + value;
      throwIllegalArgumentException(tmp$ret$0);
    }
    $this.selectionEnd_1 = value;
  }
  function _set_compositionStart__ds49vj($this, _set____db54di) {
    $this.compositionStart_1 = _set____db54di;
  }
  function _set_compositionEnd__mwlz8a($this, _set____db54di) {
    $this.compositionEnd_1 = _set____db54di;
  }
  function EditingBuffer_init_$Init$(text, selection, $this) {
    EditingBuffer.call($this, AnnotatedString_init_$Create$_0(text), selection);
    return $this;
  }
  function EditingBuffer_init_$Create$(text, selection) {
    return EditingBuffer_init_$Init$(text, selection, objectCreate(protoOf(EditingBuffer)));
  }
  function EditingBuffer(text, selection) {
    Companion_getInstance_34();
    this.gapBuffer_1 = new PartialGapBuffer(text.get_text_wouvsm_k$());
    this.selectionStart_1 = _TextRange___get_min__impl__uu95c4(selection);
    this.selectionEnd_1 = _TextRange___get_max__impl__owm8m(selection);
    this.compositionStart_1 = -1;
    this.compositionEnd_1 = -1;
    var start = _TextRange___get_min__impl__uu95c4(selection);
    var end = _TextRange___get_max__impl__owm8m(selection);
    if (start < 0 || start > text.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + text.get_length_g42xv3_k$());
    }
    if (end < 0 || end > text.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + text.get_length_g42xv3_k$());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$_0('Do not set reversed range: ' + start + ' > ' + end);
    }
  }
  protoOf(EditingBuffer).get_selectionStart_oujlra_k$ = function () {
    return this.selectionStart_1;
  };
  protoOf(EditingBuffer).get_selectionEnd_ofk6p9_k$ = function () {
    return this.selectionEnd_1;
  };
  protoOf(EditingBuffer).get_compositionStart_oz9tdo_k$ = function () {
    return this.compositionStart_1;
  };
  protoOf(EditingBuffer).get_compositionEnd_swt01h_k$ = function () {
    return this.compositionEnd_1;
  };
  protoOf(EditingBuffer).hasComposition_2l3uz_k$ = function () {
    return !(this.compositionStart_1 === -1);
  };
  protoOf(EditingBuffer).get_composition_wyzh65_k$ = function () {
    var tmp;
    if (this.hasComposition_2l3uz_k$()) {
      tmp = TextRange_1(this.compositionStart_1, this.compositionEnd_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(EditingBuffer).get_selection_oc2vbe_k$ = function () {
    return TextRange_1(this.selectionStart_1, this.selectionEnd_1);
  };
  protoOf(EditingBuffer).set_cursor_2afk6e_k$ = function (cursor) {
    return this.setSelection_ipz6az_k$(cursor, cursor);
  };
  protoOf(EditingBuffer).get_cursor_h517wa_k$ = function () {
    return this.selectionStart_1 === this.selectionEnd_1 ? this.selectionEnd_1 : -1;
  };
  protoOf(EditingBuffer).get_57jtjd_k$ = function (index) {
    return this.gapBuffer_1.get_kdzpvg_k$(index);
  };
  protoOf(EditingBuffer).get_length_6j7h2u_k$ = function () {
    return this.gapBuffer_1.get_length_g42xv3_k$();
  };
  protoOf(EditingBuffer).replace_k09jq8_k$ = function (start, end, text) {
    this.replace_mtbww5_k$(start, end, text.get_text_wouvsm_k$());
  };
  protoOf(EditingBuffer).replace_mtbww5_k$ = function (start, end, text) {
    if (start < 0 || start > this.gapBuffer_1.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.gapBuffer_1.get_length_g42xv3_k$());
    }
    if (end < 0 || end > this.gapBuffer_1.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.gapBuffer_1.get_length_g42xv3_k$());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$_0('Do not set reversed range: ' + start + ' > ' + end);
    }
    this.gapBuffer_1.replace_k5sxva_k$(start, end, text);
    _set_selectionStart__65lsx(this, start + text.length | 0);
    _set_selectionEnd__2o1cag(this, start + text.length | 0);
    this.compositionStart_1 = -1;
    this.compositionEnd_1 = -1;
  };
  protoOf(EditingBuffer).delete_iduud2_k$ = function (start, end) {
    var deleteRange = TextRange_1(start, end);
    this.gapBuffer_1.replace_k5sxva_k$(start, end, '');
    var newSelection = updateRangeAfterDelete(TextRange_1(this.selectionStart_1, this.selectionEnd_1), deleteRange);
    _set_selectionStart__65lsx(this, _TextRange___get_min__impl__uu95c4(newSelection));
    _set_selectionEnd__2o1cag(this, _TextRange___get_max__impl__owm8m(newSelection));
    if (this.hasComposition_2l3uz_k$()) {
      var compositionRange = TextRange_1(this.compositionStart_1, this.compositionEnd_1);
      var newComposition = updateRangeAfterDelete(compositionRange, deleteRange);
      if (_TextRange___get_collapsed__impl__cilesp(newComposition)) {
        this.commitComposition_bukagu_k$();
      } else {
        this.compositionStart_1 = _TextRange___get_min__impl__uu95c4(newComposition);
        this.compositionEnd_1 = _TextRange___get_max__impl__owm8m(newComposition);
      }
    }
  };
  protoOf(EditingBuffer).setSelection_ipz6az_k$ = function (start, end) {
    if (start < 0 || start > this.gapBuffer_1.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.gapBuffer_1.get_length_g42xv3_k$());
    }
    if (end < 0 || end > this.gapBuffer_1.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.gapBuffer_1.get_length_g42xv3_k$());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$_0('Do not set reversed range: ' + start + ' > ' + end);
    }
    _set_selectionStart__65lsx(this, start);
    _set_selectionEnd__2o1cag(this, end);
  };
  protoOf(EditingBuffer).setComposition_8kumml_k$ = function (start, end) {
    if (start < 0 || start > this.gapBuffer_1.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.gapBuffer_1.get_length_g42xv3_k$());
    }
    if (end < 0 || end > this.gapBuffer_1.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.gapBuffer_1.get_length_g42xv3_k$());
    }
    if (start >= end) {
      throw IllegalArgumentException_init_$Create$_0('Do not set reversed or empty range: ' + start + ' > ' + end);
    }
    this.compositionStart_1 = start;
    this.compositionEnd_1 = end;
  };
  protoOf(EditingBuffer).cancelComposition_9p2yaj_k$ = function () {
    this.replace_mtbww5_k$(this.compositionStart_1, this.compositionEnd_1, '');
    this.compositionStart_1 = -1;
    this.compositionEnd_1 = -1;
  };
  protoOf(EditingBuffer).commitComposition_bukagu_k$ = function () {
    this.compositionStart_1 = -1;
    this.compositionEnd_1 = -1;
  };
  protoOf(EditingBuffer).toString = function () {
    return this.gapBuffer_1.toString();
  };
  protoOf(EditingBuffer).toAnnotatedString_u24s5z_k$ = function () {
    return AnnotatedString_init_$Create$_0(this.toString());
  };
  function updateRangeAfterDelete(target, deleted) {
    var targetMin = _TextRange___get_min__impl__uu95c4(target);
    var targetMax = _TextRange___get_max__impl__owm8m(target);
    if (TextRange__intersects_impl_mhtn49(deleted, target)) {
      if (TextRange__contains_impl_ws45z2(deleted, target)) {
        targetMin = _TextRange___get_min__impl__uu95c4(deleted);
        targetMax = targetMin;
      } else if (TextRange__contains_impl_ws45z2(target, deleted)) {
        targetMax = targetMax - _TextRange___get_length__impl__7qes3a(deleted) | 0;
      } else if (TextRange__contains_impl_ws45z2_0(deleted, targetMin)) {
        targetMin = _TextRange___get_min__impl__uu95c4(deleted);
        targetMax = targetMax - _TextRange___get_length__impl__7qes3a(deleted) | 0;
      } else {
        targetMax = _TextRange___get_min__impl__uu95c4(deleted);
      }
    } else {
      if (targetMax > _TextRange___get_min__impl__uu95c4(deleted)) {
        targetMin = targetMin - _TextRange___get_length__impl__7qes3a(deleted) | 0;
        targetMax = targetMax - _TextRange___get_length__impl__7qes3a(deleted) | 0;
      }
    }
    return TextRange_1(targetMin, targetMax);
  }
  var androidx_compose_ui_text_input_PartialGapBuffer$stable;
  function Companion_18() {
    Companion_instance_18 = this;
    this.BUF_SIZE_1 = 255;
    this.SURROUNDING_SIZE_1 = 64;
    this.NOWHERE_1 = -1;
  }
  protoOf(Companion_18).get_BUF_SIZE_rdxtme_k$ = function () {
    return this.BUF_SIZE_1;
  };
  protoOf(Companion_18).get_SURROUNDING_SIZE_5vdy1n_k$ = function () {
    return this.SURROUNDING_SIZE_1;
  };
  protoOf(Companion_18).get_NOWHERE_mmp54z_k$ = function () {
    return this.NOWHERE_1;
  };
  var Companion_instance_18;
  function Companion_getInstance_35() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function _set_buffer__uxh4x5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_bufStart__tjv11k($this, _set____db54di) {
    $this.bufStart_1 = _set____db54di;
  }
  function _get_bufStart__gqypks($this) {
    return $this.bufStart_1;
  }
  function _set_bufEnd__uy215d($this, _set____db54di) {
    $this.bufEnd_1 = _set____db54di;
  }
  function _get_bufEnd__thbgil($this) {
    return $this.bufEnd_1;
  }
  function PartialGapBuffer(text) {
    Companion_getInstance_35();
    this.text_1 = text;
    this.buffer_1 = null;
    this.bufStart_1 = -1;
    this.bufEnd_1 = -1;
  }
  protoOf(PartialGapBuffer).set_text_oy06f4_k$ = function (_set____db54di) {
    this.text_1 = _set____db54di;
  };
  protoOf(PartialGapBuffer).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(PartialGapBuffer).get_length_g42xv3_k$ = function () {
    var tmp0_elvis_lhs = this.buffer_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.text_1.length;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var buffer = tmp;
    return (this.text_1.length - (this.bufEnd_1 - this.bufStart_1 | 0) | 0) + buffer.length_iap7oa_k$() | 0;
  };
  protoOf(PartialGapBuffer).replace_k5sxva_k$ = function (start, end, text) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(start <= end)) {
      var tmp$ret$0 = 'start index must be less than or equal to end index: ' + start + ' > ' + end;
      throwIllegalArgumentException(tmp$ret$0);
    }
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(start >= 0)) {
      var tmp$ret$2 = 'start must be non-negative, but was ' + start;
      throwIllegalArgumentException(tmp$ret$2);
    }
    var buffer = this.buffer_1;
    if (buffer == null) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = text.length + 128 | 0;
      var tmp$ret$4 = Math.max(255, b);
      var charArray_0 = charArray(tmp$ret$4);
      // Inline function 'kotlin.comparisons.minOf' call
      var leftCopyCount = Math.min(start, 64);
      // Inline function 'kotlin.comparisons.minOf' call
      var a = this.text_1.length - end | 0;
      var rightCopyCount = Math.min(a, 64);
      toCharArray_0(this.text_1, charArray_0, 0, start - leftCopyCount | 0, start);
      toCharArray_0(this.text_1, charArray_0, charArray_0.length - rightCopyCount | 0, end, end + rightCopyCount | 0);
      toCharArray(text, charArray_0, leftCopyCount);
      this.buffer_1 = new GapBuffer(charArray_0, leftCopyCount + text.length | 0, charArray_0.length - rightCopyCount | 0);
      this.bufStart_1 = start - leftCopyCount | 0;
      this.bufEnd_1 = end + rightCopyCount | 0;
      return Unit_getInstance();
    }
    var bufferStart = start - this.bufStart_1 | 0;
    var bufferEnd = end - this.bufStart_1 | 0;
    if (bufferStart < 0 || bufferEnd > buffer.length_iap7oa_k$()) {
      this.text_1 = this.toString();
      this.buffer_1 = null;
      this.bufStart_1 = -1;
      this.bufEnd_1 = -1;
      return this.replace_k5sxva_k$(start, end, text);
    }
    buffer.replace_k5sxva_k$(bufferStart, bufferEnd, text);
  };
  protoOf(PartialGapBuffer).get_kdzpvg_k$ = function (index) {
    var tmp0_elvis_lhs = this.buffer_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return charCodeAt(this.text_1, index);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var buffer = tmp;
    if (index < this.bufStart_1) {
      return charCodeAt(this.text_1, index);
    }
    var gapBufLength = buffer.length_iap7oa_k$();
    if (index < (gapBufLength + this.bufStart_1 | 0)) {
      return buffer.get_kdzpvg_k$(index - this.bufStart_1 | 0);
    }
    return charCodeAt(this.text_1, index - ((gapBufLength - this.bufEnd_1 | 0) + this.bufStart_1 | 0) | 0);
  };
  protoOf(PartialGapBuffer).toString = function () {
    var tmp0_elvis_lhs = this.buffer_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.text_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var b = tmp;
    var sb = StringBuilder_init_$Create$_0();
    sb.append_xdc1zw_k$(this.text_1, 0, this.bufStart_1);
    b.append_rl74gk_k$(sb);
    sb.append_xdc1zw_k$(this.text_1, this.bufEnd_1, this.text_1.length);
    return sb.toString();
  };
  function _set_capacity__2jc21p($this, _set____db54di) {
    $this.capacity_1 = _set____db54di;
  }
  function _get_capacity__a9k9f3($this) {
    return $this.capacity_1;
  }
  function _set_buffer__uxh4x5_0($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_0($this) {
    return $this.buffer_1;
  }
  function _set_gapStart__inopwr($this, _set____db54di) {
    $this.gapStart_1 = _set____db54di;
  }
  function _get_gapStart__5usefz($this) {
    return $this.gapStart_1;
  }
  function _set_gapEnd__x4iw0i($this, _set____db54di) {
    $this.gapEnd_1 = _set____db54di;
  }
  function _get_gapEnd__yl9gna($this) {
    return $this.gapEnd_1;
  }
  function gapLength($this) {
    return $this.gapEnd_1 - $this.gapStart_1 | 0;
  }
  function makeSureAvailableSpace($this, requestSize) {
    if (requestSize <= gapLength($this)) {
      return Unit_getInstance();
    }
    var necessarySpace = requestSize - gapLength($this) | 0;
    var newCapacity = imul($this.capacity_1, 2);
    while ((newCapacity - $this.capacity_1 | 0) < necessarySpace) {
      newCapacity = imul(newCapacity, 2);
    }
    var newBuffer = charArray(newCapacity);
    var tmp0 = $this.buffer_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = $this.gapStart_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newBuffer, 0, 0, endIndex);
    var tailLength = $this.capacity_1 - $this.gapEnd_1 | 0;
    var newEnd = newCapacity - tailLength | 0;
    var tmp0_0 = $this.buffer_1;
    var tmp6 = $this.gapEnd_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = $this.gapEnd_1 + tailLength | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp0_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newBuffer, newEnd, tmp6, endIndex_0);
    $this.buffer_1 = newBuffer;
    $this.capacity_1 = newCapacity;
    $this.gapEnd_1 = newEnd;
  }
  function delete_0($this, start, end) {
    if (start < $this.gapStart_1 && end <= $this.gapStart_1) {
      var copyLen = $this.gapStart_1 - end | 0;
      var tmp0 = $this.buffer_1;
      var tmp2 = $this.buffer_1;
      var tmp4 = $this.gapEnd_1 - copyLen | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = $this.gapStart_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, tmp4, end, endIndex);
      $this.gapStart_1 = start;
      $this.gapEnd_1 = $this.gapEnd_1 - copyLen | 0;
    } else if (start < $this.gapStart_1 && end >= $this.gapStart_1) {
      $this.gapEnd_1 = end + gapLength($this) | 0;
      $this.gapStart_1 = start;
    } else {
      var startInBuffer = start + gapLength($this) | 0;
      var endInBuffer = end + gapLength($this) | 0;
      var copyLen_0 = startInBuffer - $this.gapEnd_1 | 0;
      var tmp0_0 = $this.buffer_1;
      var tmp2_0 = $this.buffer_1;
      var tmp4_0 = $this.gapStart_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = $this.gapEnd_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = tmp0_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, tmp2_0, tmp4_0, startIndex, startInBuffer);
      $this.gapStart_1 = $this.gapStart_1 + copyLen_0 | 0;
      $this.gapEnd_1 = endInBuffer;
    }
  }
  function GapBuffer(initBuffer, initGapStart, initGapEnd) {
    this.capacity_1 = initBuffer.length;
    this.buffer_1 = initBuffer;
    this.gapStart_1 = initGapStart;
    this.gapEnd_1 = initGapEnd;
  }
  protoOf(GapBuffer).get_kdzpvg_k$ = function (index) {
    if (index < this.gapStart_1) {
      return this.buffer_1[index];
    } else {
      return this.buffer_1[(index - this.gapStart_1 | 0) + this.gapEnd_1 | 0];
    }
  };
  protoOf(GapBuffer).replace_k5sxva_k$ = function (start, end, text) {
    makeSureAvailableSpace(this, text.length - (end - start | 0) | 0);
    delete_0(this, start, end);
    toCharArray(text, this.buffer_1, this.gapStart_1);
    this.gapStart_1 = this.gapStart_1 + text.length | 0;
  };
  protoOf(GapBuffer).append_rl74gk_k$ = function (builder) {
    builder.appendRange_1a5qnl_k$(this.buffer_1, 0, this.gapStart_1);
    builder.appendRange_1a5qnl_k$(this.buffer_1, this.gapEnd_1, this.capacity_1);
  };
  protoOf(GapBuffer).length_iap7oa_k$ = function () {
    return this.capacity_1 - gapLength(this) | 0;
  };
  protoOf(GapBuffer).toString = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    this_0.append_jgojdo_k$(this_0);
    return this_0.toString();
  };
  function toCharArray(_this__u8e3s4, destination, destinationOffset) {
    return toCharArray_0(_this__u8e3s4, destination, destinationOffset, 0, _this__u8e3s4.length);
  }
  function _ImeAction___init__impl__ucgwde(value) {
    return value;
  }
  function _get_value__a43j40_1($this) {
    return $this;
  }
  function ImeAction__toString_impl_r8bdhy($this) {
    return $this === Companion_getInstance_36().Unspecified_1 ? 'Unspecified' : $this === Companion_getInstance_36().None_1 ? 'None' : $this === Companion_getInstance_36().Default_1 ? 'Default' : $this === Companion_getInstance_36().Go_1 ? 'Go' : $this === Companion_getInstance_36().Search_1 ? 'Search' : $this === Companion_getInstance_36().Send_1 ? 'Send' : $this === Companion_getInstance_36().Previous_1 ? 'Previous' : $this === Companion_getInstance_36().Next_1 ? 'Next' : $this === Companion_getInstance_36().Done_1 ? 'Done' : 'Invalid';
  }
  function Companion_19() {
    Companion_instance_19 = this;
    this.Unspecified_1 = _ImeAction___init__impl__ucgwde(-1);
    this.Default_1 = _ImeAction___init__impl__ucgwde(1);
    this.None_1 = _ImeAction___init__impl__ucgwde(0);
    this.Go_1 = _ImeAction___init__impl__ucgwde(2);
    this.Search_1 = _ImeAction___init__impl__ucgwde(3);
    this.Send_1 = _ImeAction___init__impl__ucgwde(4);
    this.Previous_1 = _ImeAction___init__impl__ucgwde(5);
    this.Next_1 = _ImeAction___init__impl__ucgwde(6);
    this.Done_1 = _ImeAction___init__impl__ucgwde(7);
  }
  protoOf(Companion_19).get_Unspecified_w3gvks_k$ = function () {
    return this.Unspecified_1;
  };
  protoOf(Companion_19).get_Default_lcd66q_k$ = function () {
    return this.Default_1;
  };
  protoOf(Companion_19).get_None_5pom2x_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_19).get_Go_52bxll_k$ = function () {
    return this.Go_1;
  };
  protoOf(Companion_19).get_Search_bwy63r_k$ = function () {
    return this.Search_1;
  };
  protoOf(Companion_19).get_Send_6cpjsp_k$ = function () {
    return this.Send_1;
  };
  protoOf(Companion_19).get_Previous_enbcba_k$ = function () {
    return this.Previous_1;
  };
  protoOf(Companion_19).get_Next_jtpzvy_k$ = function () {
    return this.Next_1;
  };
  protoOf(Companion_19).get_Done_6zvpof_k$ = function () {
    return this.Done_1;
  };
  var Companion_instance_19;
  function Companion_getInstance_36() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function ImeAction__hashCode_impl_m1mrob($this) {
    return $this;
  }
  function ImeAction__equals_impl_tgas09($this, other) {
    if (!(other instanceof ImeAction))
      return false;
    if (!($this === (other instanceof ImeAction ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ImeAction(value) {
    Companion_getInstance_36();
    this.value_1 = value;
  }
  protoOf(ImeAction).toString = function () {
    return ImeAction__toString_impl_r8bdhy(this.value_1);
  };
  protoOf(ImeAction).hashCode = function () {
    return ImeAction__hashCode_impl_m1mrob(this.value_1);
  };
  protoOf(ImeAction).equals = function (other) {
    return ImeAction__equals_impl_tgas09(this.value_1, other);
  };
  var androidx_compose_ui_text_input_ImeOptions$stable;
  function Companion_20() {
    Companion_instance_20 = this;
    this.Default_1 = new ImeOptions();
  }
  protoOf(Companion_20).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  var Companion_instance_20;
  function Companion_getInstance_37() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function ImeOptions_init_$Init$(singleLine, capitalization, autoCorrect, keyboardType, imeAction, platformImeOptions, $this) {
    singleLine = singleLine === VOID ? false : singleLine;
    capitalization = capitalization === VOID ? Companion_getInstance_38().get_None_7zn0k1_k$() : capitalization;
    autoCorrect = autoCorrect === VOID ? true : autoCorrect;
    keyboardType = keyboardType === VOID ? Companion_getInstance_39().get_Text_jtxe64_k$() : keyboardType;
    imeAction = imeAction === VOID ? Companion_getInstance_36().get_Default_lcd66q_k$() : imeAction;
    platformImeOptions = platformImeOptions === VOID ? null : platformImeOptions;
    ImeOptions.call($this, singleLine, capitalization, autoCorrect, keyboardType, imeAction, platformImeOptions, Companion_getInstance_44().get_Empty_i9b85g_k$());
    return $this;
  }
  function ImeOptions_init_$Create$(singleLine, capitalization, autoCorrect, keyboardType, imeAction, platformImeOptions) {
    return ImeOptions_init_$Init$(singleLine, capitalization, autoCorrect, keyboardType, imeAction, platformImeOptions, objectCreate(protoOf(ImeOptions)));
  }
  function ImeOptions_init_$Init$_0(singleLine, capitalization, autoCorrect, keyboardType, imeAction, $this) {
    singleLine = singleLine === VOID ? false : singleLine;
    capitalization = capitalization === VOID ? Companion_getInstance_38().get_None_7zn0k1_k$() : capitalization;
    autoCorrect = autoCorrect === VOID ? true : autoCorrect;
    keyboardType = keyboardType === VOID ? Companion_getInstance_39().get_Text_jtxe64_k$() : keyboardType;
    imeAction = imeAction === VOID ? Companion_getInstance_36().get_Default_lcd66q_k$() : imeAction;
    ImeOptions.call($this, singleLine, capitalization, autoCorrect, keyboardType, imeAction, null);
    return $this;
  }
  function ImeOptions_init_$Create$_0(singleLine, capitalization, autoCorrect, keyboardType, imeAction) {
    return ImeOptions_init_$Init$_0(singleLine, capitalization, autoCorrect, keyboardType, imeAction, objectCreate(protoOf(ImeOptions)));
  }
  function ImeOptions(singleLine, capitalization, autoCorrect, keyboardType, imeAction, platformImeOptions, hintLocales) {
    Companion_getInstance_37();
    singleLine = singleLine === VOID ? false : singleLine;
    capitalization = capitalization === VOID ? Companion_getInstance_38().get_None_7zn0k1_k$() : capitalization;
    autoCorrect = autoCorrect === VOID ? true : autoCorrect;
    keyboardType = keyboardType === VOID ? Companion_getInstance_39().get_Text_jtxe64_k$() : keyboardType;
    imeAction = imeAction === VOID ? Companion_getInstance_36().get_Default_lcd66q_k$() : imeAction;
    platformImeOptions = platformImeOptions === VOID ? null : platformImeOptions;
    hintLocales = hintLocales === VOID ? Companion_getInstance_44().get_Empty_i9b85g_k$() : hintLocales;
    this.singleLine_1 = singleLine;
    this.capitalization_1 = capitalization;
    this.autoCorrect_1 = autoCorrect;
    this.keyboardType_1 = keyboardType;
    this.imeAction_1 = imeAction;
    this.platformImeOptions_1 = platformImeOptions;
    this.hintLocales_1 = hintLocales;
  }
  protoOf(ImeOptions).get_singleLine_52fw9n_k$ = function () {
    return this.singleLine_1;
  };
  protoOf(ImeOptions).get_capitalization_dcjeh7_k$ = function () {
    return this.capitalization_1;
  };
  protoOf(ImeOptions).get_autoCorrect_6oo18y_k$ = function () {
    return this.autoCorrect_1;
  };
  protoOf(ImeOptions).get_keyboardType_c7o6fc_k$ = function () {
    return this.keyboardType_1;
  };
  protoOf(ImeOptions).get_imeAction_rjbisc_k$ = function () {
    return this.imeAction_1;
  };
  protoOf(ImeOptions).get_platformImeOptions_luwow7_k$ = function () {
    return this.platformImeOptions_1;
  };
  protoOf(ImeOptions).get_hintLocales_8v0ind_k$ = function () {
    return this.hintLocales_1;
  };
  protoOf(ImeOptions).copy_kgp238_k$ = function (singleLine, capitalization, autoCorrect, keyboardType, imeAction, platformImeOptions, hintLocales) {
    return new ImeOptions(singleLine, capitalization, autoCorrect, keyboardType, imeAction, platformImeOptions, hintLocales);
  };
  protoOf(ImeOptions).copy$default_4ydpiv_k$ = function (singleLine, capitalization, autoCorrect, keyboardType, imeAction, platformImeOptions, hintLocales, $super) {
    singleLine = singleLine === VOID ? this.singleLine_1 : singleLine;
    capitalization = capitalization === VOID ? this.capitalization_1 : capitalization;
    autoCorrect = autoCorrect === VOID ? this.autoCorrect_1 : autoCorrect;
    keyboardType = keyboardType === VOID ? this.keyboardType_1 : keyboardType;
    imeAction = imeAction === VOID ? this.imeAction_1 : imeAction;
    platformImeOptions = platformImeOptions === VOID ? this.platformImeOptions_1 : platformImeOptions;
    hintLocales = hintLocales === VOID ? this.hintLocales_1 : hintLocales;
    return $super === VOID ? this.copy_kgp238_k$(singleLine, capitalization, autoCorrect, keyboardType, imeAction, platformImeOptions, hintLocales) : $super.copy_kgp238_k$.call(this, singleLine, new KeyboardCapitalization(capitalization), autoCorrect, new KeyboardType(keyboardType), new ImeAction(imeAction), platformImeOptions, hintLocales);
  };
  protoOf(ImeOptions).copy_nrdzqr_k$ = function (singleLine, capitalization, autoCorrect, keyboardType, imeAction, platformImeOptions) {
    return new ImeOptions(singleLine, capitalization, autoCorrect, keyboardType, imeAction, platformImeOptions, this.hintLocales_1);
  };
  protoOf(ImeOptions).copy$default_n0wcph_k$ = function (singleLine, capitalization, autoCorrect, keyboardType, imeAction, platformImeOptions, $super) {
    singleLine = singleLine === VOID ? this.singleLine_1 : singleLine;
    capitalization = capitalization === VOID ? this.capitalization_1 : capitalization;
    autoCorrect = autoCorrect === VOID ? this.autoCorrect_1 : autoCorrect;
    keyboardType = keyboardType === VOID ? this.keyboardType_1 : keyboardType;
    imeAction = imeAction === VOID ? this.imeAction_1 : imeAction;
    platformImeOptions = platformImeOptions === VOID ? this.platformImeOptions_1 : platformImeOptions;
    return $super === VOID ? this.copy_nrdzqr_k$(singleLine, capitalization, autoCorrect, keyboardType, imeAction, platformImeOptions) : $super.copy_nrdzqr_k$.call(this, singleLine, new KeyboardCapitalization(capitalization), autoCorrect, new KeyboardType(keyboardType), new ImeAction(imeAction), platformImeOptions);
  };
  protoOf(ImeOptions).copy_6g2zqv_k$ = function (singleLine, capitalization, autoCorrect, keyboardType, imeAction) {
    return new ImeOptions(singleLine, capitalization, autoCorrect, keyboardType, imeAction, this.platformImeOptions_1, this.hintLocales_1);
  };
  protoOf(ImeOptions).copy$default_oj73e6_k$ = function (singleLine, capitalization, autoCorrect, keyboardType, imeAction, $super) {
    singleLine = singleLine === VOID ? this.singleLine_1 : singleLine;
    capitalization = capitalization === VOID ? this.capitalization_1 : capitalization;
    autoCorrect = autoCorrect === VOID ? this.autoCorrect_1 : autoCorrect;
    keyboardType = keyboardType === VOID ? this.keyboardType_1 : keyboardType;
    imeAction = imeAction === VOID ? this.imeAction_1 : imeAction;
    return $super === VOID ? this.copy_6g2zqv_k$(singleLine, capitalization, autoCorrect, keyboardType, imeAction) : $super.copy_6g2zqv_k$.call(this, singleLine, new KeyboardCapitalization(capitalization), autoCorrect, new KeyboardType(keyboardType), new ImeAction(imeAction));
  };
  protoOf(ImeOptions).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ImeOptions))
      return false;
    if (!(this.singleLine_1 === other.singleLine_1))
      return false;
    if (!(this.capitalization_1 === other.capitalization_1))
      return false;
    if (!(this.autoCorrect_1 === other.autoCorrect_1))
      return false;
    if (!(this.keyboardType_1 === other.keyboardType_1))
      return false;
    if (!(this.imeAction_1 === other.imeAction_1))
      return false;
    if (!equals(this.platformImeOptions_1, other.platformImeOptions_1))
      return false;
    if (!this.hintLocales_1.equals(other.hintLocales_1))
      return false;
    return true;
  };
  protoOf(ImeOptions).hashCode = function () {
    var result = getBooleanHashCode(this.singleLine_1);
    result = imul(31, result) + KeyboardCapitalization__hashCode_impl_6ibuz5(this.capitalization_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.autoCorrect_1) | 0;
    result = imul(31, result) + KeyboardType__hashCode_impl_mw6m33(this.keyboardType_1) | 0;
    result = imul(31, result) + ImeAction__hashCode_impl_m1mrob(this.imeAction_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.platformImeOptions_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + this.hintLocales_1.hashCode() | 0;
    return result;
  };
  protoOf(ImeOptions).toString = function () {
    return 'ImeOptions(singleLine=' + this.singleLine_1 + ', capitalization=' + KeyboardCapitalization__toString_impl_f8u1tq(this.capitalization_1) + ', ' + ('autoCorrect=' + this.autoCorrect_1 + ', keyboardType=' + KeyboardType__toString_impl_150pa8(this.keyboardType_1) + ', imeAction=' + ImeAction__toString_impl_r8bdhy(this.imeAction_1) + ', ') + ('platformImeOptions=' + toString(this.platformImeOptions_1) + ', hintLocales=' + this.hintLocales_1.toString() + ')');
  };
  function _KeyboardCapitalization___init__impl__fmdpvi(value) {
    return value;
  }
  function _get_value__a43j40_2($this) {
    return $this;
  }
  function KeyboardCapitalization__toString_impl_f8u1tq($this) {
    return $this === Companion_getInstance_38().Unspecified_1 ? 'Unspecified' : $this === Companion_getInstance_38().None_1 ? 'None' : $this === Companion_getInstance_38().Characters_1 ? 'Characters' : $this === Companion_getInstance_38().Words_1 ? 'Words' : $this === Companion_getInstance_38().Sentences_1 ? 'Sentences' : 'Invalid';
  }
  function Companion_21() {
    Companion_instance_21 = this;
    this.Unspecified_1 = _KeyboardCapitalization___init__impl__fmdpvi(-1);
    this.None_1 = _KeyboardCapitalization___init__impl__fmdpvi(0);
    this.Characters_1 = _KeyboardCapitalization___init__impl__fmdpvi(1);
    this.Words_1 = _KeyboardCapitalization___init__impl__fmdpvi(2);
    this.Sentences_1 = _KeyboardCapitalization___init__impl__fmdpvi(3);
  }
  protoOf(Companion_21).get_Unspecified_dgqzs2_k$ = function () {
    return this.Unspecified_1;
  };
  protoOf(Companion_21).get_None_7zn0k1_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_21).get_Characters_mejxqb_k$ = function () {
    return this.Characters_1;
  };
  protoOf(Companion_21).get_Words_htyj68_k$ = function () {
    return this.Words_1;
  };
  protoOf(Companion_21).get_Sentences_l0uqy1_k$ = function () {
    return this.Sentences_1;
  };
  var Companion_instance_21;
  function Companion_getInstance_38() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function KeyboardCapitalization__hashCode_impl_6ibuz5($this) {
    return $this;
  }
  function KeyboardCapitalization__equals_impl_dba8wb($this, other) {
    if (!(other instanceof KeyboardCapitalization))
      return false;
    if (!($this === (other instanceof KeyboardCapitalization ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function KeyboardCapitalization(value) {
    Companion_getInstance_38();
    this.value_1 = value;
  }
  protoOf(KeyboardCapitalization).toString = function () {
    return KeyboardCapitalization__toString_impl_f8u1tq(this.value_1);
  };
  protoOf(KeyboardCapitalization).hashCode = function () {
    return KeyboardCapitalization__hashCode_impl_6ibuz5(this.value_1);
  };
  protoOf(KeyboardCapitalization).equals = function (other) {
    return KeyboardCapitalization__equals_impl_dba8wb(this.value_1, other);
  };
  function _KeyboardType___init__impl__csir7k(value) {
    return value;
  }
  function _get_value__a43j40_3($this) {
    return $this;
  }
  function KeyboardType__toString_impl_150pa8($this) {
    return $this === Companion_getInstance_39().Unspecified_1 ? 'Unspecified' : $this === Companion_getInstance_39().Text_1 ? 'Text' : $this === Companion_getInstance_39().Ascii_1 ? 'Ascii' : $this === Companion_getInstance_39().Number_1 ? 'Number' : $this === Companion_getInstance_39().Phone_1 ? 'Phone' : $this === Companion_getInstance_39().Uri_1 ? 'Uri' : $this === Companion_getInstance_39().Email_1 ? 'Email' : $this === Companion_getInstance_39().Password_1 ? 'Password' : $this === Companion_getInstance_39().NumberPassword_1 ? 'NumberPassword' : $this === Companion_getInstance_39().Decimal_1 ? 'Decimal' : 'Invalid';
  }
  function Companion_22() {
    Companion_instance_22 = this;
    this.Unspecified_1 = _KeyboardType___init__impl__csir7k(0);
    this.Text_1 = _KeyboardType___init__impl__csir7k(1);
    this.Ascii_1 = _KeyboardType___init__impl__csir7k(2);
    this.Number_1 = _KeyboardType___init__impl__csir7k(3);
    this.Phone_1 = _KeyboardType___init__impl__csir7k(4);
    this.Uri_1 = _KeyboardType___init__impl__csir7k(5);
    this.Email_1 = _KeyboardType___init__impl__csir7k(6);
    this.Password_1 = _KeyboardType___init__impl__csir7k(7);
    this.NumberPassword_1 = _KeyboardType___init__impl__csir7k(8);
    this.Decimal_1 = _KeyboardType___init__impl__csir7k(9);
  }
  protoOf(Companion_22).get_Unspecified_7h2luk_k$ = function () {
    return this.Unspecified_1;
  };
  protoOf(Companion_22).get_Text_jtxe64_k$ = function () {
    return this.Text_1;
  };
  protoOf(Companion_22).get_Ascii_vkbm9i_k$ = function () {
    return this.Ascii_1;
  };
  protoOf(Companion_22).get_Number_p87pi8_k$ = function () {
    return this.Number_1;
  };
  protoOf(Companion_22).get_Phone_pd75v1_k$ = function () {
    return this.Phone_1;
  };
  protoOf(Companion_22).get_Uri_k6mai7_k$ = function () {
    return this.Uri_1;
  };
  protoOf(Companion_22).get_Email_3353gh_k$ = function () {
    return this.Email_1;
  };
  protoOf(Companion_22).get_Password_14zh8u_k$ = function () {
    return this.Password_1;
  };
  protoOf(Companion_22).get_NumberPassword_7ljaed_k$ = function () {
    return this.NumberPassword_1;
  };
  protoOf(Companion_22).get_Decimal_vgpcne_k$ = function () {
    return this.Decimal_1;
  };
  var Companion_instance_22;
  function Companion_getInstance_39() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function KeyboardType__hashCode_impl_mw6m33($this) {
    return $this;
  }
  function KeyboardType__equals_impl_1eug1f($this, other) {
    if (!(other instanceof KeyboardType))
      return false;
    if (!($this === (other instanceof KeyboardType ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function KeyboardType(value) {
    Companion_getInstance_39();
    this.value_1 = value;
  }
  protoOf(KeyboardType).toString = function () {
    return KeyboardType__toString_impl_150pa8(this.value_1);
  };
  protoOf(KeyboardType).hashCode = function () {
    return KeyboardType__hashCode_impl_mw6m33(this.value_1);
  };
  protoOf(KeyboardType).equals = function (other) {
    return KeyboardType__equals_impl_1eug1f(this.value_1, other);
  };
  function addExactOrElse(_this__u8e3s4, right, defaultValue) {
    var result = _this__u8e3s4 + right | 0;
    return ((_this__u8e3s4 ^ result) & (right ^ result)) < 0 ? defaultValue() : result;
  }
  function subtractExactOrElse(_this__u8e3s4, right, defaultValue) {
    var result = _this__u8e3s4 - right | 0;
    return ((_this__u8e3s4 ^ right) & (_this__u8e3s4 ^ result)) < 0 ? defaultValue() : result;
  }
  function OffsetMapping$Companion$Identity$1() {
  }
  protoOf(OffsetMapping$Companion$Identity$1).originalToTransformed_qvujev_k$ = function (offset) {
    return offset;
  };
  protoOf(OffsetMapping$Companion$Identity$1).transformedToOriginal_hkmhr3_k$ = function (offset) {
    return offset;
  };
  function Companion_23() {
    Companion_instance_23 = this;
    var tmp = this;
    tmp.Identity_1 = new OffsetMapping$Companion$Identity$1();
  }
  protoOf(Companion_23).get_Identity_wza1cp_k$ = function () {
    return this.Identity_1;
  };
  var Companion_instance_23;
  function Companion_getInstance_40() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function OffsetMapping() {
  }
  var androidx_compose_ui_text_input_TextFieldValue$stable;
  function TextFieldValue$Companion$Saver$lambda($this$Saver, it) {
    return arrayListOf([save_0(it.annotatedString_1, get_AnnotatedStringSaver(), $this$Saver), save_0(new TextRange(it.selection_1), get_Saver_11(Companion_getInstance_24()), $this$Saver)]);
  }
  function TextFieldValue$Companion$Saver$lambda_0(it) {
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.get_c1px32_k$(0);
    var tmp2 = get_AnnotatedStringSaver();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.restore_fyjq85_k$(tmp0);
        tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof AnnotatedString) ? tmp_1 : THROW_CCE();
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_2 = ensureNotNull(tmp$ret$0);
    var tmp0_0 = list.get_c1px32_k$(1);
    var tmp2_0 = get_Saver_11(Companion_getInstance_24());
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_3;
      if (equals(tmp0_0, false)) {
        tmp_3 = !isInterface(tmp2_0, NonNullValueClassSaver);
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_4;
      if (tmp0_0 == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_5 = tmp2_0.restore_fyjq85_k$(tmp0_0);
        var tmp_6;
        if (tmp_5 == null ? true : tmp_5 instanceof TextRange) {
          var tmp_7 = tmp_5;
          tmp_6 = tmp_7 == null ? null : tmp_7.packedValue_1;
        } else {
          tmp_6 = THROW_CCE();
        }
        var tmp_8 = tmp_6;
        var tmp_9 = tmp_8 == null ? null : new TextRange(tmp_8);
        tmp_4 = tmp_9 == null ? null : tmp_9.packedValue_1;
      }
      tmp$ret$5 = tmp_4;
    }
    var tmp_10 = tmp$ret$5;
    return new TextFieldValue(tmp_2, ensureNotNull(tmp_10 == null ? null : new TextRange(tmp_10)).packedValue_1);
  }
  function TextFieldValue_init_$Init$(text, selection, composition, $this) {
    text = text === VOID ? '' : text;
    selection = selection === VOID ? Companion_getInstance_24().get_Zero_8je9ih_k$() : selection;
    composition = composition === VOID ? null : composition;
    TextFieldValue.call($this, AnnotatedString_init_$Create$_0(text), selection, composition);
    return $this;
  }
  function TextFieldValue_init_$Create$(text, selection, composition) {
    return TextFieldValue_init_$Init$(text, selection, composition, objectCreate(protoOf(TextFieldValue)));
  }
  function Companion_24() {
    Companion_instance_24 = this;
    var tmp = this;
    var tmp_0 = TextFieldValue$Companion$Saver$lambda;
    tmp.Saver_1 = Saver_0(tmp_0, TextFieldValue$Companion$Saver$lambda_0);
  }
  protoOf(Companion_24).get_Saver_igssp8_k$ = function () {
    return this.Saver_1;
  };
  var Companion_instance_24;
  function Companion_getInstance_41() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function TextFieldValue(annotatedString, selection, composition) {
    Companion_getInstance_41();
    selection = selection === VOID ? Companion_getInstance_24().get_Zero_8je9ih_k$() : selection;
    composition = composition === VOID ? null : composition;
    this.annotatedString_1 = annotatedString;
    this.selection_1 = coerceIn_1(selection, 0, this.get_text_wouvsm_k$().length);
    var tmp = this;
    var tmp_0;
    var tmp_1 = composition;
    if ((tmp_1 == null ? null : new TextRange(tmp_1)) == null) {
      tmp_0 = null;
    } else {
      tmp_0 = coerceIn_1(composition, 0, this.get_text_wouvsm_k$().length);
    }
    tmp.composition_1 = tmp_0;
  }
  protoOf(TextFieldValue).get_annotatedString_5pdwrk_k$ = function () {
    return this.annotatedString_1;
  };
  protoOf(TextFieldValue).get_text_wouvsm_k$ = function () {
    return this.annotatedString_1.get_text_wouvsm_k$();
  };
  protoOf(TextFieldValue).get_selection_d115tn_k$ = function () {
    return this.selection_1;
  };
  protoOf(TextFieldValue).get_composition_sol8g8_k$ = function () {
    return this.composition_1;
  };
  protoOf(TextFieldValue).copy_hntddt_k$ = function (annotatedString, selection, composition) {
    return new TextFieldValue(annotatedString, selection, composition);
  };
  protoOf(TextFieldValue).copy$default_xf3zur_k$ = function (annotatedString, selection, composition, $super) {
    annotatedString = annotatedString === VOID ? this.annotatedString_1 : annotatedString;
    selection = selection === VOID ? this.selection_1 : selection;
    composition = composition === VOID ? this.composition_1 : composition;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_hntddt_k$(annotatedString, selection, composition);
    } else {
      var tmp_0 = $super.copy_hntddt_k$;
      var tmp_1 = composition;
      tmp = tmp_0.call(this, annotatedString, new TextRange(selection), tmp_1 == null ? null : new TextRange(tmp_1));
    }
    return tmp;
  };
  protoOf(TextFieldValue).copy_7dcmyi_k$ = function (text, selection, composition) {
    return new TextFieldValue(AnnotatedString_init_$Create$_0(text), selection, composition);
  };
  protoOf(TextFieldValue).copy$default_2whmnb_k$ = function (text, selection, composition, $super) {
    selection = selection === VOID ? this.selection_1 : selection;
    composition = composition === VOID ? this.composition_1 : composition;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_7dcmyi_k$(text, selection, composition);
    } else {
      var tmp_0 = $super.copy_7dcmyi_k$;
      var tmp_1 = composition;
      tmp = tmp_0.call(this, text, new TextRange(selection), tmp_1 == null ? null : new TextRange(tmp_1));
    }
    return tmp;
  };
  protoOf(TextFieldValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextFieldValue))
      return false;
    var tmp;
    var tmp_0;
    if (equals(this.selection_1, other.selection_1)) {
      var tmp_1 = this.composition_1;
      var tmp_2 = tmp_1 == null ? null : new TextRange(tmp_1);
      var tmp_3 = other.composition_1;
      tmp_0 = equals(tmp_2, tmp_3 == null ? null : new TextRange(tmp_3));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.annotatedString_1.equals(other.annotatedString_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TextFieldValue).hashCode = function () {
    var result = this.annotatedString_1.hashCode();
    result = imul(31, result) + TextRange__hashCode_impl_3zpp6q(this.selection_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.composition_1;
    var tmp_0;
    var tmp_1 = tmp0_safe_receiver;
    if ((tmp_1 == null ? null : new TextRange(tmp_1)) == null) {
      tmp_0 = null;
    } else {
      tmp_0 = TextRange__hashCode_impl_3zpp6q(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextFieldValue).toString = function () {
    var tmp = "text='" + this.annotatedString_1.toString() + "', ";
    var tmp_0 = 'selection=' + TextRange__toString_impl_pqvlzl(this.selection_1) + ', ';
    var tmp_1 = this.composition_1;
    return 'TextFieldValue(' + tmp + tmp_0 + ('composition=' + toString(tmp_1 == null ? null : new TextRange(tmp_1)) + ')');
  };
  function getSelectedText(_this__u8e3s4) {
    return _this__u8e3s4.annotatedString_1.subSequence_lx5l5t_k$(_this__u8e3s4.selection_1);
  }
  function getTextBeforeSelection(_this__u8e3s4, maxChars) {
    // Inline function 'kotlin.math.max' call
    var b = _TextRange___get_min__impl__uu95c4(_this__u8e3s4.selection_1) - maxChars | 0;
    var tmp$ret$0 = Math.max(0, b);
    return _this__u8e3s4.annotatedString_1.subSequence_hm5hnj_k$(tmp$ret$0, _TextRange___get_min__impl__uu95c4(_this__u8e3s4.selection_1));
  }
  function getTextAfterSelection(_this__u8e3s4, maxChars) {
    var tmp = _TextRange___get_max__impl__owm8m(_this__u8e3s4.selection_1);
    var tmp0 = _TextRange___get_max__impl__owm8m(_this__u8e3s4.selection_1) + maxChars | 0;
    // Inline function 'kotlin.math.min' call
    var b = _this__u8e3s4.get_text_wouvsm_k$().length;
    var tmp$ret$0 = Math.min(tmp0, b);
    return _this__u8e3s4.annotatedString_1.subSequence_hm5hnj_k$(tmp, tmp$ret$0);
  }
  var androidx_compose_ui_text_input_TextInputService$stable;
  var androidx_compose_ui_text_input_TextInputSession$stable;
  function _get_platformTextInputService__t1msw0($this) {
    return $this.platformTextInputService_1;
  }
  function _get__currentInputSession__sue20r($this) {
    return $this._currentInputSession_1;
  }
  function TextInputService(platformTextInputService) {
    this.platformTextInputService_1 = platformTextInputService;
    this._currentInputSession_1 = new AtomicReference(null);
  }
  protoOf(TextInputService).get_currentInputSession_ro2ll5_k$ = function () {
    return this._currentInputSession_1.get_26vq_k$();
  };
  protoOf(TextInputService).startInput_axnrsd_k$ = function (value, imeOptions, onEditCommand, onImeActionPerformed) {
    this.platformTextInputService_1.startInput_5tdfa5_k$(value, imeOptions, onEditCommand, onImeActionPerformed);
    var nextSession = new TextInputSession(this, this.platformTextInputService_1);
    this._currentInputSession_1.set_inogor_k$(nextSession);
    return nextSession;
  };
  protoOf(TextInputService).startInput_kuko1k_k$ = function () {
    this.platformTextInputService_1.startInput_kuko1k_k$();
    var nextSession = new TextInputSession(this, this.platformTextInputService_1);
    this._currentInputSession_1.set_inogor_k$(nextSession);
  };
  protoOf(TextInputService).stopInput_noba9q_k$ = function (session) {
    if (this._currentInputSession_1.compareAndSet_10iwom_k$(session, null)) {
      this.platformTextInputService_1.stopInput_mtcoa0_k$();
    }
  };
  protoOf(TextInputService).stopInput_mtcoa0_k$ = function () {
    this._currentInputSession_1.set_inogor_k$(null);
    this.platformTextInputService_1.stopInput_mtcoa0_k$();
  };
  protoOf(TextInputService).showSoftwareKeyboard_p5hgcb_k$ = function () {
    if (!(this.get_currentInputSession_ro2ll5_k$() == null)) {
      this.platformTextInputService_1.showSoftwareKeyboard_p5hgcb_k$();
    }
  };
  protoOf(TextInputService).hideSoftwareKeyboard_kbn874_k$ = function () {
    return this.platformTextInputService_1.hideSoftwareKeyboard_kbn874_k$();
  };
  function _get_textInputService__q1au7n($this) {
    return $this.textInputService_1;
  }
  function _get_platformTextInputService__t1msw0_0($this) {
    return $this.platformTextInputService_1;
  }
  function ensureOpenSession($this, block) {
    // Inline function 'kotlin.also' call
    var this_0 = $this.get_isOpen_ew3kpp_k$();
    if (this_0) {
      block();
    }
    return this_0;
  }
  function TextInputSession(textInputService, platformTextInputService) {
    this.textInputService_1 = textInputService;
    this.platformTextInputService_1 = platformTextInputService;
  }
  protoOf(TextInputSession).get_isOpen_ew3kpp_k$ = function () {
    return equals(this.textInputService_1.get_currentInputSession_ro2ll5_k$(), this);
  };
  protoOf(TextInputSession).dispose_3nnxhr_k$ = function () {
    this.textInputService_1.stopInput_noba9q_k$(this);
  };
  protoOf(TextInputSession).notifyFocusedRect_p729hj_k$ = function (rect) {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.get_isOpen_ew3kpp_k$();
    if (this_0) {
      this.platformTextInputService_1.notifyFocusedRect_po8zm1_k$(rect);
    }
    return this_0;
  };
  protoOf(TextInputSession).updateTextLayoutResult_ozhdao_k$ = function (textFieldValue, offsetMapping, textLayoutResult, textFieldToRootTransform, innerTextFieldBounds, decorationBoxBounds) {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.get_isOpen_ew3kpp_k$();
    if (this_0) {
      this.platformTextInputService_1.updateTextLayoutResult_4ey9pc_k$(textFieldValue, offsetMapping, textLayoutResult, textFieldToRootTransform, innerTextFieldBounds, decorationBoxBounds);
    }
    return this_0;
  };
  protoOf(TextInputSession).updateState_n7bewf_k$ = function (oldValue, newValue) {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.get_isOpen_ew3kpp_k$();
    if (this_0) {
      this.platformTextInputService_1.updateState_4gjm3l_k$(oldValue, newValue);
    }
    return this_0;
  };
  protoOf(TextInputSession).showSoftwareKeyboard_6wjho5_k$ = function () {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.get_isOpen_ew3kpp_k$();
    if (this_0) {
      this.platformTextInputService_1.showSoftwareKeyboard_p5hgcb_k$();
    }
    return this_0;
  };
  protoOf(TextInputSession).hideSoftwareKeyboard_pwrw8g_k$ = function () {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.get_isOpen_ew3kpp_k$();
    if (this_0) {
      this.platformTextInputService_1.hideSoftwareKeyboard_kbn874_k$();
    }
    return this_0;
  };
  function PlatformTextInputService() {
  }
  var androidx_compose_ui_text_input_TransformedText$stable;
  var androidx_compose_ui_text_input_PasswordVisualTransformation$stable;
  function sam$androidx_compose_ui_text_input_VisualTransformation$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_text_input_VisualTransformation$0).filter_ki86nb_k$ = function (text) {
    return this.function_1(text);
  };
  protoOf(sam$androidx_compose_ui_text_input_VisualTransformation$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_text_input_VisualTransformation$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, VisualTransformation) : false) {
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
  protoOf(sam$androidx_compose_ui_text_input_VisualTransformation$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function VisualTransformation$Companion$None$lambda(text) {
    return new TransformedText(text, Companion_getInstance_40().get_Identity_wza1cp_k$());
  }
  function Companion_25() {
    Companion_instance_25 = this;
    var tmp = this;
    var tmp_0 = VisualTransformation$Companion$None$lambda;
    tmp.None_1 = new sam$androidx_compose_ui_text_input_VisualTransformation$0(tmp_0);
  }
  protoOf(Companion_25).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_25;
  function Companion_getInstance_42() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function VisualTransformation() {
  }
  function TransformedText(text, offsetMapping) {
    this.text_1 = text;
    this.offsetMapping_1 = offsetMapping;
  }
  protoOf(TransformedText).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(TransformedText).get_offsetMapping_mw1yem_k$ = function () {
    return this.offsetMapping_1;
  };
  protoOf(TransformedText).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransformedText))
      return false;
    if (!this.text_1.equals(other.text_1))
      return false;
    if (!equals(this.offsetMapping_1, other.offsetMapping_1))
      return false;
    return true;
  };
  protoOf(TransformedText).hashCode = function () {
    var result = this.text_1.hashCode();
    result = imul(31, result) + hashCode(this.offsetMapping_1) | 0;
    return result;
  };
  protoOf(TransformedText).toString = function () {
    return 'TransformedText(text=' + this.text_1.toString() + ', offsetMapping=' + toString_0(this.offsetMapping_1) + ')';
  };
  function PasswordVisualTransformation(mask) {
    mask = mask === VOID ? _Char___init__impl__6a9atx(8226) : mask;
    this.mask_1 = mask;
  }
  protoOf(PasswordVisualTransformation).get_mask_wm03zr_k$ = function () {
    return this.mask_1;
  };
  protoOf(PasswordVisualTransformation).filter_ki86nb_k$ = function (text) {
    return new TransformedText(AnnotatedString_init_$Create$_0(repeat(toString_1(this.mask_1), text.get_text_wouvsm_k$().length)), Companion_getInstance_40().get_Identity_wza1cp_k$());
  };
  protoOf(PasswordVisualTransformation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PasswordVisualTransformation))
      return false;
    if (!(this.mask_1 === other.mask_1))
      return false;
    return true;
  };
  protoOf(PasswordVisualTransformation).hashCode = function () {
    return Char__hashCode_impl_otmys(this.mask_1);
  };
  function requirePrecondition(value, lazyMessage) {
    if (!value) {
      throwIllegalArgumentException(lazyMessage());
    }
  }
  function checkPrecondition(value, lazyMessage) {
    if (!value) {
      throwIllegalStateException(lazyMessage());
    }
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$_0(message);
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$_0(message);
  }
  function requirePreconditionNotNull(value, lazyMessage) {
    if (value == null) {
      throwIllegalArgumentExceptionForNullCheck(lazyMessage());
    }
    return value;
  }
  function throwIllegalArgumentExceptionForNullCheck(message) {
    throw IllegalArgumentException_init_$Create$_0(message);
  }
  var androidx_compose_ui_text_intl_Locale$stable;
  function Companion_26() {
    Companion_instance_26 = this;
  }
  protoOf(Companion_26).get_current_jwi6j4_k$ = function () {
    return get_platformLocaleDelegate().get_current_jwi6j4_k$().get_c1px32_k$(0);
  };
  var Companion_instance_26;
  function Companion_getInstance_43() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function Locale_init_$Init$(languageTag, $this) {
    Locale.call($this, get_platformLocaleDelegate().parseLanguageTag_5wql63_k$(languageTag));
    return $this;
  }
  function Locale_init_$Create$(languageTag) {
    return Locale_init_$Init$(languageTag, objectCreate(protoOf(Locale)));
  }
  function Locale(platformLocale) {
    Companion_getInstance_43();
    this.platformLocale_1 = platformLocale;
  }
  protoOf(Locale).get_platformLocale_g0bmwm_k$ = function () {
    return this.platformLocale_1;
  };
  protoOf(Locale).get_language_cjhhk1_k$ = function () {
    return get_language(this.platformLocale_1);
  };
  protoOf(Locale).get_script_jedas4_k$ = function () {
    return get_script(this.platformLocale_1);
  };
  protoOf(Locale).get_region_iy88ot_k$ = function () {
    return get_region(this.platformLocale_1);
  };
  protoOf(Locale).toLanguageTag_xneel5_k$ = function () {
    return getLanguageTag(this.platformLocale_1);
  };
  protoOf(Locale).equals = function (other) {
    if (other == null)
      return false;
    if (!(other instanceof Locale))
      return false;
    if (this === other)
      return true;
    return this.toLanguageTag_xneel5_k$() === other.toLanguageTag_xneel5_k$();
  };
  protoOf(Locale).hashCode = function () {
    return getStringHashCode(this.toLanguageTag_xneel5_k$());
  };
  protoOf(Locale).toString = function () {
    return this.toLanguageTag_xneel5_k$();
  };
  var androidx_compose_ui_text_intl_LocaleList$stable;
  function Companion_27() {
    Companion_instance_27 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.listOf' call
    var tmp$ret$0 = emptyList();
    tmp.Empty_1 = new LocaleList(tmp$ret$0);
  }
  protoOf(Companion_27).get_Empty_i9b85g_k$ = function () {
    return this.Empty_1;
  };
  protoOf(Companion_27).get_current_jwi6j4_k$ = function () {
    return get_platformLocaleDelegate().get_current_jwi6j4_k$();
  };
  var Companion_instance_27;
  function Companion_getInstance_44() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function LocaleList_init_$Init$(languageTags, $this) {
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = split(languageTags, [',']);
    var target = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'kotlin.text.trim' call
        // Inline function 'kotlin.collections.plusAssign' call
        var element = toString_0(trim(isCharSequence(item) ? item : THROW_CCE()));
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var target_0 = ArrayList_init_$Create$_0(target.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_0 = 0;
    var last_0 = target.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.get_c1px32_k$(index_0);
        // Inline function 'kotlin.collections.plusAssign' call
        var element_0 = Locale_init_$Create$(item_0);
        target_0.add_utx5q5_k$(element_0);
      }
       while (inductionVariable_0 <= last_0);
    LocaleList.call($this, target_0);
    return $this;
  }
  function LocaleList_init_$Create$(languageTags) {
    return LocaleList_init_$Init$(languageTags, objectCreate(protoOf(LocaleList)));
  }
  function LocaleList_init_$Init$_0(locales, $this) {
    LocaleList.call($this, toList(locales));
    return $this;
  }
  function LocaleList_init_$Create$_0(locales) {
    return LocaleList_init_$Init$_0(locales, objectCreate(protoOf(LocaleList)));
  }
  function LocaleList(localeList) {
    Companion_getInstance_44();
    this.localeList_1 = localeList;
    this.size_1 = this.localeList_1.get_size_woubt6_k$();
  }
  protoOf(LocaleList).get_localeList_1gj9gh_k$ = function () {
    return this.localeList_1;
  };
  protoOf(LocaleList).get_c1px32_k$ = function (i) {
    return this.localeList_1.get_c1px32_k$(i);
  };
  protoOf(LocaleList).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(LocaleList).contains_3k284h_k$ = function (element) {
    return this.localeList_1.contains_aljjnj_k$(element);
  };
  protoOf(LocaleList).contains_aljjnj_k$ = function (element) {
    if (!(element instanceof Locale))
      return false;
    return this.contains_3k284h_k$(element instanceof Locale ? element : THROW_CCE());
  };
  protoOf(LocaleList).containsAll_vbf1sa_k$ = function (elements) {
    return this.localeList_1.containsAll_xk45sd_k$(elements);
  };
  protoOf(LocaleList).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_vbf1sa_k$(elements);
  };
  protoOf(LocaleList).isEmpty_y1axqb_k$ = function () {
    return this.localeList_1.isEmpty_y1axqb_k$();
  };
  protoOf(LocaleList).iterator_jk1svi_k$ = function () {
    return this.localeList_1.iterator_jk1svi_k$();
  };
  protoOf(LocaleList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LocaleList))
      return false;
    if (!equals(this.localeList_1, other.localeList_1))
      return false;
    return true;
  };
  protoOf(LocaleList).hashCode = function () {
    return hashCode(this.localeList_1);
  };
  protoOf(LocaleList).toString = function () {
    return 'LocaleList(localeList=' + toString_0(this.localeList_1) + ')';
  };
  function get_platformLocaleDelegate() {
    _init_properties_PlatformLocale_kt__d5ixzh();
    return platformLocaleDelegate;
  }
  var platformLocaleDelegate;
  function PlatformLocaleDelegate() {
  }
  var properties_initialized_PlatformLocale_kt_ya8ii9;
  function _init_properties_PlatformLocale_kt__d5ixzh() {
    if (!properties_initialized_PlatformLocale_kt_ya8ii9) {
      properties_initialized_PlatformLocale_kt_ya8ii9 = true;
      platformLocaleDelegate = createPlatformLocaleDelegate();
    }
  }
  function get_FontCacheManagementDispatcher() {
    _init_properties_Dispatcher_kt__c4qz95();
    return FontCacheManagementDispatcher;
  }
  var FontCacheManagementDispatcher;
  var properties_initialized_Dispatcher_kt_c7cauv;
  function _init_properties_Dispatcher_kt__c4qz95() {
    if (!properties_initialized_Dispatcher_kt_c7cauv) {
      properties_initialized_Dispatcher_kt_c7cauv = true;
      FontCacheManagementDispatcher = Dispatchers_getInstance().get_Main_wo5vz6_k$();
    }
  }
  function _BaselineShift___init__impl__scj05g(multiplier) {
    return multiplier;
  }
  function _BaselineShift___get_multiplier__impl__qhmjek($this) {
    return $this;
  }
  function Companion_28() {
    Companion_instance_28 = this;
    this.Superscript_1 = _BaselineShift___init__impl__scj05g(0.5);
    this.Subscript_1 = _BaselineShift___init__impl__scj05g(-0.5);
    this.None_1 = _BaselineShift___init__impl__scj05g(0.0);
  }
  protoOf(Companion_28).get_Superscript_6xh4p2_k$ = function () {
    return this.Superscript_1;
  };
  protoOf(Companion_28).get_Subscript_w4w7o5_k$ = function () {
    return this.Subscript_1;
  };
  protoOf(Companion_28).get_None_9kuyzu_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_28;
  function Companion_getInstance_45() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function BaselineShift__toString_impl_x98gcc($this) {
    return 'BaselineShift(multiplier=' + $this + ')';
  }
  function BaselineShift__hashCode_impl_g0potx($this) {
    return getNumberHashCode($this);
  }
  function BaselineShift__equals_impl_37wrjj($this, other) {
    if (!(other instanceof BaselineShift))
      return false;
    var tmp0_other_with_cast = other instanceof BaselineShift ? other.multiplier_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaselineShift(multiplier) {
    Companion_getInstance_45();
    this.multiplier_1 = multiplier;
  }
  protoOf(BaselineShift).toString = function () {
    return BaselineShift__toString_impl_x98gcc(this.multiplier_1);
  };
  protoOf(BaselineShift).hashCode = function () {
    return BaselineShift__hashCode_impl_g0potx(this.multiplier_1);
  };
  protoOf(BaselineShift).equals = function (other) {
    return BaselineShift__equals_impl_37wrjj(this.multiplier_1, other);
  };
  function lerp_8(start, stop, fraction) {
    return _BaselineShift___init__impl__scj05g(lerp_3(_BaselineShift___get_multiplier__impl__qhmjek(start), _BaselineShift___get_multiplier__impl__qhmjek(stop), fraction));
  }
  function _Hyphens___init__impl__m2cvg8(value) {
    return value;
  }
  function _Hyphens___get_value__impl__5itus4($this) {
    return $this;
  }
  function Companion_29() {
    Companion_instance_29 = this;
    this.None_1 = _Hyphens___init__impl__m2cvg8(1);
    this.Auto_1 = _Hyphens___init__impl__m2cvg8(2);
    this.Unspecified_1 = _Hyphens___init__impl__m2cvg8(-2147483648);
  }
  protoOf(Companion_29).get_None_vxrj2y_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_29).get_Auto_4wvpmr_k$ = function () {
    return this.Auto_1;
  };
  protoOf(Companion_29).get_Unspecified_43rcur_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_29;
  function Companion_getInstance_46() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function Hyphens__toString_impl_ck1wg0($this) {
    return $this === Companion_getInstance_46().None_1 ? 'Hyphens.None' : $this === Companion_getInstance_46().Auto_1 ? 'Hyphens.Auto' : $this === Companion_getInstance_46().Unspecified_1 ? 'Hyphens.Unspecified' : 'Invalid';
  }
  function Hyphens__hashCode_impl_yb7t8v($this) {
    return $this;
  }
  function Hyphens__equals_impl_oqoi4t($this, other) {
    if (!(other instanceof Hyphens))
      return false;
    if (!($this === (other instanceof Hyphens ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function Hyphens(value) {
    Companion_getInstance_46();
    this.value_1 = value;
  }
  protoOf(Hyphens).toString = function () {
    return Hyphens__toString_impl_ck1wg0(this.value_1);
  };
  protoOf(Hyphens).hashCode = function () {
    return Hyphens__hashCode_impl_yb7t8v(this.value_1);
  };
  protoOf(Hyphens).equals = function (other) {
    return Hyphens__equals_impl_oqoi4t(this.value_1, other);
  };
  var androidx_compose_ui_text_style_LineHeightStyle$stable;
  function _get_FlagTrimTop__843pyu($this) {
    return $this.FlagTrimTop_1;
  }
  function _get_FlagTrimBottom__ejbxxu($this) {
    return $this.FlagTrimBottom_1;
  }
  function _Trim___init__impl__tcc1lr(value) {
    return value;
  }
  function _get_value__a43j40_4($this) {
    return $this;
  }
  function Trim__toString_impl_hxcm0x($this) {
    var tmp0_subject = _get_value__a43j40_4($this);
    return tmp0_subject === _get_value__a43j40_4(Companion_getInstance_47().FirstLineTop_1) ? 'LineHeightStyle.Trim.FirstLineTop' : tmp0_subject === _get_value__a43j40_4(Companion_getInstance_47().LastLineBottom_1) ? 'LineHeightStyle.Trim.LastLineBottom' : tmp0_subject === _get_value__a43j40_4(Companion_getInstance_47().Both_1) ? 'LineHeightStyle.Trim.Both' : tmp0_subject === _get_value__a43j40_4(Companion_getInstance_47().None_1) ? 'LineHeightStyle.Trim.None' : 'Invalid';
  }
  function Companion_30() {
    Companion_instance_30 = this;
    this.FlagTrimTop_1 = 1;
    this.FlagTrimBottom_1 = 16;
    this.FirstLineTop_1 = _Trim___init__impl__tcc1lr(1);
    this.LastLineBottom_1 = _Trim___init__impl__tcc1lr(16);
    this.Both_1 = _Trim___init__impl__tcc1lr(17);
    this.None_1 = _Trim___init__impl__tcc1lr(0);
  }
  protoOf(Companion_30).get_FirstLineTop_kxvhiy_k$ = function () {
    return this.FirstLineTop_1;
  };
  protoOf(Companion_30).get_LastLineBottom_9prepu_k$ = function () {
    return this.LastLineBottom_1;
  };
  protoOf(Companion_30).get_Both_9h9iq2_k$ = function () {
    return this.Both_1;
  };
  protoOf(Companion_30).get_None_najgov_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_30;
  function Companion_getInstance_47() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function Trim__isTrimFirstLineTop_impl_tqdsaa($this) {
    return (_get_value__a43j40_4($this) & 1) > 0;
  }
  function Trim__isTrimLastLineBottom_impl_8k6x3e($this) {
    return (_get_value__a43j40_4($this) & 16) > 0;
  }
  function Trim__hashCode_impl_vclj5c($this) {
    return $this;
  }
  function Trim__equals_impl_6x7eks($this, other) {
    if (!(other instanceof Trim))
      return false;
    if (!($this === (other instanceof Trim ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function _Alignment___init__impl__it107q(topRatio) {
    var tmp;
    var containsArg = _Alignment___get_topRatio__impl__gg7tir(topRatio);
    if (0.0 <= containsArg ? containsArg <= 1.0 : false) {
      tmp = true;
    } else {
      tmp = _Alignment___get_topRatio__impl__gg7tir(topRatio) === -1.0;
    }
    // Inline function 'androidx.compose.ui.text.internal.checkPrecondition' call
    if (!tmp) {
      var tmp$ret$0 = 'topRatio should be in [0..1] range or -1';
      throwIllegalStateException(tmp$ret$0);
    }
    return topRatio;
  }
  function _Alignment___get_topRatio__impl__gg7tir($this) {
    return $this;
  }
  function Alignment__toString_impl_on6yhu($this) {
    var tmp0_subject = _Alignment___get_topRatio__impl__gg7tir($this);
    return tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_48().Top_1) ? 'LineHeightStyle.Alignment.Top' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_48().Center_1) ? 'LineHeightStyle.Alignment.Center' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_48().Proportional_1) ? 'LineHeightStyle.Alignment.Proportional' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_48().Bottom_1) ? 'LineHeightStyle.Alignment.Bottom' : 'LineHeightStyle.Alignment(topPercentage = ' + _Alignment___get_topRatio__impl__gg7tir($this) + ')';
  }
  function Companion_31() {
    Companion_instance_31 = this;
    this.Top_1 = _Alignment___init__impl__it107q(0.0);
    this.Center_1 = _Alignment___init__impl__it107q(0.5);
    this.Proportional_1 = _Alignment___init__impl__it107q(-1.0);
    this.Bottom_1 = _Alignment___init__impl__it107q(1.0);
  }
  protoOf(Companion_31).get_Top_1zzwrr_k$ = function () {
    return this.Top_1;
  };
  protoOf(Companion_31).get_Center_9xyfbt_k$ = function () {
    return this.Center_1;
  };
  protoOf(Companion_31).get_Proportional_4me62x_k$ = function () {
    return this.Proportional_1;
  };
  protoOf(Companion_31).get_Bottom_t3fcq7_k$ = function () {
    return this.Bottom_1;
  };
  var Companion_instance_31;
  function Companion_getInstance_48() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function Alignment__hashCode_impl_omr6of($this) {
    return getNumberHashCode($this);
  }
  function Alignment__equals_impl_9ve0tn($this, other) {
    if (!(other instanceof Alignment))
      return false;
    var tmp0_other_with_cast = other instanceof Alignment ? other.topRatio_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function _Mode___init__impl__3rgsrm(value) {
    return value;
  }
  function _get_value__a43j40_5($this) {
    return $this;
  }
  function Companion_32() {
    Companion_instance_32 = this;
    this.Fixed_1 = _Mode___init__impl__3rgsrm(0);
    this.Minimum_1 = _Mode___init__impl__3rgsrm(1);
  }
  protoOf(Companion_32).get_Fixed_u0do4_k$ = function () {
    return this.Fixed_1;
  };
  protoOf(Companion_32).get_Minimum_ycic7u_k$ = function () {
    return this.Minimum_1;
  };
  var Companion_instance_32;
  function Companion_getInstance_49() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function Mode__toString_impl_dwwrtq($this) {
    return 'Mode(value=' + $this + ')';
  }
  function Mode__hashCode_impl_7u94z5($this) {
    return $this;
  }
  function Mode__equals_impl_uwixm3($this, other) {
    if (!(other instanceof Mode))
      return false;
    if (!($this === (other instanceof Mode ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function LineHeightStyle_init_$Init$(alignment, trim, $this) {
    LineHeightStyle.call($this, alignment, trim, Companion_getInstance_49().Fixed_1);
    return $this;
  }
  function LineHeightStyle_init_$Create$(alignment, trim) {
    return LineHeightStyle_init_$Init$(alignment, trim, objectCreate(protoOf(LineHeightStyle)));
  }
  function Companion_33() {
    Companion_instance_33 = this;
    this.Default_1 = new LineHeightStyle(Companion_getInstance_48().Proportional_1, Companion_getInstance_47().Both_1, Companion_getInstance_49().Fixed_1);
  }
  protoOf(Companion_33).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  var Companion_instance_33;
  function Companion_getInstance_50() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function Trim(value) {
    Companion_getInstance_47();
    this.value_1 = value;
  }
  protoOf(Trim).toString = function () {
    return Trim__toString_impl_hxcm0x(this.value_1);
  };
  protoOf(Trim).hashCode = function () {
    return Trim__hashCode_impl_vclj5c(this.value_1);
  };
  protoOf(Trim).equals = function (other) {
    return Trim__equals_impl_6x7eks(this.value_1, other);
  };
  function Alignment(topRatio) {
    Companion_getInstance_48();
    this.topRatio_1 = topRatio;
  }
  protoOf(Alignment).toString = function () {
    return Alignment__toString_impl_on6yhu(this.topRatio_1);
  };
  protoOf(Alignment).hashCode = function () {
    return Alignment__hashCode_impl_omr6of(this.topRatio_1);
  };
  protoOf(Alignment).equals = function (other) {
    return Alignment__equals_impl_9ve0tn(this.topRatio_1, other);
  };
  function Mode(value) {
    Companion_getInstance_49();
    this.value_1 = value;
  }
  protoOf(Mode).toString = function () {
    return Mode__toString_impl_dwwrtq(this.value_1);
  };
  protoOf(Mode).hashCode = function () {
    return Mode__hashCode_impl_7u94z5(this.value_1);
  };
  protoOf(Mode).equals = function (other) {
    return Mode__equals_impl_uwixm3(this.value_1, other);
  };
  function LineHeightStyle(alignment, trim, mode) {
    Companion_getInstance_50();
    this.alignment_1 = alignment;
    this.trim_1 = trim;
    this.mode_1 = mode;
  }
  protoOf(LineHeightStyle).get_alignment_l3cz3f_k$ = function () {
    return this.alignment_1;
  };
  protoOf(LineHeightStyle).get_trim_cyvk3v_k$ = function () {
    return this.trim_1;
  };
  protoOf(LineHeightStyle).get_mode_7fbw4z_k$ = function () {
    return this.mode_1;
  };
  protoOf(LineHeightStyle).copy_7x1s0l_k$ = function (alignment, trim, mode) {
    return new LineHeightStyle(alignment, trim, mode);
  };
  protoOf(LineHeightStyle).copy$default_7uvusm_k$ = function (alignment, trim, mode, $super) {
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    trim = trim === VOID ? this.trim_1 : trim;
    mode = mode === VOID ? this.mode_1 : mode;
    return $super === VOID ? this.copy_7x1s0l_k$(alignment, trim, mode) : $super.copy_7x1s0l_k$.call(this, new Alignment(alignment), new Trim(trim), new Mode(mode));
  };
  protoOf(LineHeightStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineHeightStyle))
      return false;
    if (!equals(this.alignment_1, other.alignment_1))
      return false;
    if (!(this.trim_1 === other.trim_1))
      return false;
    if (!(this.mode_1 === other.mode_1))
      return false;
    return true;
  };
  protoOf(LineHeightStyle).hashCode = function () {
    var result = Alignment__hashCode_impl_omr6of(this.alignment_1);
    result = imul(31, result) + Trim__hashCode_impl_vclj5c(this.trim_1) | 0;
    result = imul(31, result) + Mode__hashCode_impl_7u94z5(this.mode_1) | 0;
    return result;
  };
  protoOf(LineHeightStyle).toString = function () {
    return 'LineHeightStyle(' + ('alignment=' + Alignment__toString_impl_on6yhu(this.alignment_1) + ', ') + ('trim=' + Trim__toString_impl_hxcm0x(this.trim_1) + ',') + ('mode=' + Mode__toString_impl_dwwrtq(this.mode_1)) + ')';
  };
  var ResolvedTextDirection_Ltr_instance;
  var ResolvedTextDirection_Rtl_instance;
  function values_0() {
    return [ResolvedTextDirection_Ltr_getInstance(), ResolvedTextDirection_Rtl_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Ltr':
        return ResolvedTextDirection_Ltr_getInstance();
      case 'Rtl':
        return ResolvedTextDirection_Rtl_getInstance();
      default:
        ResolvedTextDirection_initEntries();
        THROW_IAE('No enum constant androidx.compose.ui.text.style.ResolvedTextDirection.' + value);
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var ResolvedTextDirection_entriesInitialized;
  function ResolvedTextDirection_initEntries() {
    if (ResolvedTextDirection_entriesInitialized)
      return Unit_getInstance();
    ResolvedTextDirection_entriesInitialized = true;
    ResolvedTextDirection_Ltr_instance = new ResolvedTextDirection('Ltr', 0);
    ResolvedTextDirection_Rtl_instance = new ResolvedTextDirection('Rtl', 1);
  }
  var $ENTRIES_0;
  function ResolvedTextDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ResolvedTextDirection_Ltr_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Ltr_instance;
  }
  function ResolvedTextDirection_Rtl_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Rtl_instance;
  }
  function _TextAlign___init__impl__99wz4v(value) {
    return value;
  }
  function _TextAlign___get_value__impl__lst7m3($this) {
    return $this;
  }
  function TextAlign__toString_impl_6ha6d3($this) {
    return $this === Companion_getInstance_51().Left_1 ? 'Left' : $this === Companion_getInstance_51().Right_1 ? 'Right' : $this === Companion_getInstance_51().Center_1 ? 'Center' : $this === Companion_getInstance_51().Justify_1 ? 'Justify' : $this === Companion_getInstance_51().Start_1 ? 'Start' : $this === Companion_getInstance_51().End_1 ? 'End' : $this === Companion_getInstance_51().Unspecified_1 ? 'Unspecified' : 'Invalid';
  }
  function Companion_34() {
    Companion_instance_34 = this;
    this.Left_1 = _TextAlign___init__impl__99wz4v(1);
    this.Right_1 = _TextAlign___init__impl__99wz4v(2);
    this.Center_1 = _TextAlign___init__impl__99wz4v(3);
    this.Justify_1 = _TextAlign___init__impl__99wz4v(4);
    this.Start_1 = _TextAlign___init__impl__99wz4v(5);
    this.End_1 = _TextAlign___init__impl__99wz4v(6);
    this.Unspecified_1 = _TextAlign___init__impl__99wz4v(-2147483648);
  }
  protoOf(Companion_34).get_Left_seblku_k$ = function () {
    return this.Left_1;
  };
  protoOf(Companion_34).get_Right_dlwl8f_k$ = function () {
    return this.Right_1;
  };
  protoOf(Companion_34).get_Center_fp5t1o_k$ = function () {
    return this.Center_1;
  };
  protoOf(Companion_34).get_Justify_uf64z9_k$ = function () {
    return this.Justify_1;
  };
  protoOf(Companion_34).get_Start_ovf7qx_k$ = function () {
    return this.Start_1;
  };
  protoOf(Companion_34).get_End_ck95sw_k$ = function () {
    return this.End_1;
  };
  protoOf(Companion_34).values_dmh61q_k$ = function () {
    return listOf([new TextAlign(this.Left_1), new TextAlign(this.Right_1), new TextAlign(this.Center_1), new TextAlign(this.Justify_1), new TextAlign(this.Start_1), new TextAlign(this.End_1)]);
  };
  protoOf(Companion_34).get_Unspecified_23bj44_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_34;
  function Companion_getInstance_51() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function TextAlign__hashCode_impl_s8g35y($this) {
    return $this;
  }
  function TextAlign__equals_impl_latoh6($this, other) {
    if (!(other instanceof TextAlign))
      return false;
    if (!($this === (other instanceof TextAlign ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextAlign(value) {
    Companion_getInstance_51();
    this.value_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return TextAlign__toString_impl_6ha6d3(this.value_1);
  };
  protoOf(TextAlign).hashCode = function () {
    return TextAlign__hashCode_impl_s8g35y(this.value_1);
  };
  protoOf(TextAlign).equals = function (other) {
    return TextAlign__equals_impl_latoh6(this.value_1, other);
  };
  var androidx_compose_ui_text_style_TextDecoration$stable;
  function Companion_35() {
    Companion_instance_35 = this;
    this.None_1 = new TextDecoration(0);
    this.Underline_1 = new TextDecoration(1);
    this.LineThrough_1 = new TextDecoration(2);
  }
  protoOf(Companion_35).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_35).get_Underline_oo7egz_k$ = function () {
    return this.Underline_1;
  };
  protoOf(Companion_35).get_LineThrough_pr9ajs_k$ = function () {
    return this.LineThrough_1;
  };
  protoOf(Companion_35).combine_yonjok_k$ = function (decorations) {
    // Inline function 'androidx.compose.ui.util.fastFold' call
    var accumulator = 0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = decorations.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = decorations.get_c1px32_k$(index);
        accumulator = accumulator | item.mask_1;
      }
       while (inductionVariable <= last);
    var mask = accumulator;
    return new TextDecoration(mask);
  };
  var Companion_instance_35;
  function Companion_getInstance_52() {
    if (Companion_instance_35 == null)
      new Companion_35();
    return Companion_instance_35;
  }
  function TextDecoration(mask) {
    Companion_getInstance_52();
    this.mask_1 = mask;
  }
  protoOf(TextDecoration).get_mask_woqbsl_k$ = function () {
    return this.mask_1;
  };
  protoOf(TextDecoration).plus_868qpp_k$ = function (decoration) {
    return new TextDecoration(this.mask_1 | decoration.mask_1);
  };
  protoOf(TextDecoration).contains_8so89q_k$ = function (other) {
    return (this.mask_1 | other.mask_1) === this.mask_1;
  };
  protoOf(TextDecoration).toString = function () {
    if (this.mask_1 === 0) {
      return 'TextDecoration.None';
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var values = ArrayList_init_$Create$();
    if (!((this.mask_1 & Companion_getInstance_52().Underline_1.mask_1) === 0)) {
      values.add_utx5q5_k$('Underline');
    }
    if (!((this.mask_1 & Companion_getInstance_52().LineThrough_1.mask_1) === 0)) {
      values.add_utx5q5_k$('LineThrough');
    }
    if (values.get_size_woubt6_k$() === 1) {
      return 'TextDecoration.' + values.get_c1px32_k$(0);
    }
    return 'TextDecoration[' + fastJoinToString(values, ', ') + ']';
  };
  protoOf(TextDecoration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextDecoration))
      return false;
    if (!(this.mask_1 === other.mask_1))
      return false;
    return true;
  };
  protoOf(TextDecoration).hashCode = function () {
    return this.mask_1;
  };
  function _TextDirection___init__impl__lh8lzt(value) {
    return value;
  }
  function _TextDirection___get_value__impl__ka7r45($this) {
    return $this;
  }
  function TextDirection__toString_impl_x3uh9t($this) {
    return $this === Companion_getInstance_53().Ltr_1 ? 'Ltr' : $this === Companion_getInstance_53().Rtl_1 ? 'Rtl' : $this === Companion_getInstance_53().Content_1 ? 'Content' : $this === Companion_getInstance_53().ContentOrLtr_1 ? 'ContentOrLtr' : $this === Companion_getInstance_53().ContentOrRtl_1 ? 'ContentOrRtl' : $this === Companion_getInstance_53().Unspecified_1 ? 'Unspecified' : 'Invalid';
  }
  function Companion_36() {
    Companion_instance_36 = this;
    this.Ltr_1 = _TextDirection___init__impl__lh8lzt(1);
    this.Rtl_1 = _TextDirection___init__impl__lh8lzt(2);
    this.Content_1 = _TextDirection___init__impl__lh8lzt(3);
    this.ContentOrLtr_1 = _TextDirection___init__impl__lh8lzt(4);
    this.ContentOrRtl_1 = _TextDirection___init__impl__lh8lzt(5);
    this.Unspecified_1 = _TextDirection___init__impl__lh8lzt(-2147483648);
  }
  protoOf(Companion_36).get_Ltr_fd58a3_k$ = function () {
    return this.Ltr_1;
  };
  protoOf(Companion_36).get_Rtl_qi5bo5_k$ = function () {
    return this.Rtl_1;
  };
  protoOf(Companion_36).get_Content_gdpx4s_k$ = function () {
    return this.Content_1;
  };
  protoOf(Companion_36).get_ContentOrLtr_byc1cl_k$ = function () {
    return this.ContentOrLtr_1;
  };
  protoOf(Companion_36).get_ContentOrRtl_twyiln_k$ = function () {
    return this.ContentOrRtl_1;
  };
  protoOf(Companion_36).get_Unspecified_8uxrb6_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_36;
  function Companion_getInstance_53() {
    if (Companion_instance_36 == null)
      new Companion_36();
    return Companion_instance_36;
  }
  function TextDirection__hashCode_impl_g63nwg($this) {
    return $this;
  }
  function TextDirection__equals_impl_3fvxt0($this, other) {
    if (!(other instanceof TextDirection))
      return false;
    if (!($this === (other instanceof TextDirection ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextDirection(value) {
    Companion_getInstance_53();
    this.value_1 = value;
  }
  protoOf(TextDirection).toString = function () {
    return TextDirection__toString_impl_x3uh9t(this.value_1);
  };
  protoOf(TextDirection).hashCode = function () {
    return TextDirection__hashCode_impl_g63nwg(this.value_1);
  };
  protoOf(TextDirection).equals = function (other) {
    return TextDirection__equals_impl_3fvxt0(this.value_1, other);
  };
  var androidx_compose_ui_text_style_TextForegroundStyle_Unspecified$stable;
  function Unspecified() {
    Unspecified_instance = this;
  }
  protoOf(Unspecified).get_color_lnp1vl_k$ = function () {
    return Companion_getInstance_0().get_Unspecified_j397pn_k$();
  };
  protoOf(Unspecified).get_brush_ipcjyp_k$ = function () {
    return null;
  };
  protoOf(Unspecified).get_alpha_iooth1_k$ = function () {
    return NaN;
  };
  var Unspecified_instance;
  function Unspecified_getInstance() {
    if (Unspecified_instance == null)
      new Unspecified();
    return Unspecified_instance;
  }
  function Companion_37() {
    Companion_instance_37 = this;
  }
  protoOf(Companion_37).from_ccukrb_k$ = function (color) {
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = new ColorStyle(color);
    } else {
      tmp = Unspecified_getInstance();
    }
    return tmp;
  };
  protoOf(Companion_37).from_6wp01d_k$ = function (brush, alpha) {
    var tmp;
    if (brush == null) {
      tmp = Unspecified_getInstance();
    } else {
      if (brush instanceof SolidColor) {
        tmp = this.from_ccukrb_k$(modulate(brush.get_value_za03u9_k$(), alpha));
      } else {
        if (brush instanceof ShaderBrush) {
          tmp = new BrushStyle(brush, alpha);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  var Companion_instance_37;
  function Companion_getInstance_54() {
    if (Companion_instance_37 == null)
      new Companion_37();
    return Companion_instance_37;
  }
  function TextForegroundStyle$merge$lambda(this$0) {
    return function () {
      return this$0.alpha_1;
    };
  }
  function TextForegroundStyle$merge$lambda_0(this$0) {
    return function () {
      return this$0;
    };
  }
  function TextForegroundStyle() {
  }
  function BrushStyle(value, alpha) {
    this.value_1 = value;
    this.alpha_1 = alpha;
  }
  protoOf(BrushStyle).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(BrushStyle).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(BrushStyle).get_color_lnp1vl_k$ = function () {
    return Companion_getInstance_0().get_Unspecified_j397pn_k$();
  };
  protoOf(BrushStyle).get_brush_ipcjyp_k$ = function () {
    return this.value_1;
  };
  protoOf(BrushStyle).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(BrushStyle).component2_7eebsb_k$ = function () {
    return this.alpha_1;
  };
  protoOf(BrushStyle).copy_c0jrsp_k$ = function (value, alpha) {
    return new BrushStyle(value, alpha);
  };
  protoOf(BrushStyle).copy$default_nmvh3s_k$ = function (value, alpha, $super) {
    value = value === VOID ? this.value_1 : value;
    alpha = alpha === VOID ? this.alpha_1 : alpha;
    return $super === VOID ? this.copy_c0jrsp_k$(value, alpha) : $super.copy_c0jrsp_k$.call(this, value, alpha);
  };
  protoOf(BrushStyle).toString = function () {
    return 'BrushStyle(value=' + toString_0(this.value_1) + ', alpha=' + this.alpha_1 + ')';
  };
  protoOf(BrushStyle).hashCode = function () {
    var result = hashCode(this.value_1);
    result = imul(result, 31) + getNumberHashCode(this.alpha_1) | 0;
    return result;
  };
  protoOf(BrushStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BrushStyle))
      return false;
    var tmp0_other_with_cast = other instanceof BrushStyle ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    if (!equals(this.alpha_1, tmp0_other_with_cast.alpha_1))
      return false;
    return true;
  };
  function takeOrElse_0(_this__u8e3s4, block) {
    return isNaN_0(_this__u8e3s4) ? block() : _this__u8e3s4;
  }
  function ColorStyle(value) {
    this.value_1 = value;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.value_1;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      var tmp$ret$1 = 'ColorStyle value must be specified, use TextForegroundStyle.Unspecified instead.';
      throwIllegalArgumentException(tmp$ret$1);
    }
  }
  protoOf(ColorStyle).get_value_za03u9_k$ = function () {
    return this.value_1;
  };
  protoOf(ColorStyle).get_color_lnp1vl_k$ = function () {
    return this.value_1;
  };
  protoOf(ColorStyle).get_brush_ipcjyp_k$ = function () {
    return null;
  };
  protoOf(ColorStyle).get_alpha_iooth1_k$ = function () {
    return _Color___get_alpha__impl__wcfyv1(this.get_color_lnp1vl_k$());
  };
  protoOf(ColorStyle).component1_9lkot7_k$ = function () {
    return this.value_1;
  };
  protoOf(ColorStyle).copy_5oad5u_k$ = function (value) {
    return new ColorStyle(value);
  };
  protoOf(ColorStyle).copy$default_uhqhaj_k$ = function (value, $super) {
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_5oad5u_k$(value) : $super.copy_5oad5u_k$.call(this, new Color(value));
  };
  protoOf(ColorStyle).toString = function () {
    return 'ColorStyle(value=' + Color__toString_impl_hpzmaq(this.value_1) + ')';
  };
  protoOf(ColorStyle).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.value_1);
  };
  protoOf(ColorStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ColorStyle ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function modulate(_this__u8e3s4, alpha) {
    return isNaN_0(alpha) || alpha >= 1.0 ? _this__u8e3s4 : Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
  }
  function lerp_9(start, stop, fraction) {
    var tmp;
    var tmp_0;
    if (!(start instanceof BrushStyle)) {
      tmp_0 = !(stop instanceof BrushStyle);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = Companion_getInstance_54().from_ccukrb_k$(lerp(start.get_color_lnp1vl_k$(), stop.get_color_lnp1vl_k$(), fraction));
    } else {
      var tmp_1;
      if (start instanceof BrushStyle) {
        tmp_1 = stop instanceof BrushStyle;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp = Companion_getInstance_54().from_6wp01d_k$(lerpDiscrete(start.get_brush_ipcjyp_k$(), stop.get_brush_ipcjyp_k$(), fraction), lerp_3(start.alpha_1, stop.alpha_1, fraction));
      } else {
        tmp = lerpDiscrete(start, stop, fraction);
      }
    }
    return tmp;
  }
  var androidx_compose_ui_text_style_TextGeometricTransform$stable;
  function Companion_38() {
    Companion_instance_38 = this;
    this.None_1 = new TextGeometricTransform(1.0, 0.0);
  }
  protoOf(Companion_38).get_None_lmdhj0_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_38;
  function Companion_getInstance_55() {
    if (Companion_instance_38 == null)
      new Companion_38();
    return Companion_instance_38;
  }
  function TextGeometricTransform(scaleX, skewX) {
    Companion_getInstance_55();
    scaleX = scaleX === VOID ? 1.0 : scaleX;
    skewX = skewX === VOID ? 0.0 : skewX;
    this.scaleX_1 = scaleX;
    this.skewX_1 = skewX;
  }
  protoOf(TextGeometricTransform).get_scaleX_je2hxz_k$ = function () {
    return this.scaleX_1;
  };
  protoOf(TextGeometricTransform).get_skewX_iyk9d1_k$ = function () {
    return this.skewX_1;
  };
  protoOf(TextGeometricTransform).copy_4tzoad_k$ = function (scaleX, skewX) {
    return new TextGeometricTransform(scaleX, skewX);
  };
  protoOf(TextGeometricTransform).copy$default_fkrzc5_k$ = function (scaleX, skewX, $super) {
    scaleX = scaleX === VOID ? this.scaleX_1 : scaleX;
    skewX = skewX === VOID ? this.skewX_1 : skewX;
    return $super === VOID ? this.copy_4tzoad_k$(scaleX, skewX) : $super.copy_4tzoad_k$.call(this, scaleX, skewX);
  };
  protoOf(TextGeometricTransform).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextGeometricTransform))
      return false;
    if (!(this.scaleX_1 === other.scaleX_1))
      return false;
    if (!(this.skewX_1 === other.skewX_1))
      return false;
    return true;
  };
  protoOf(TextGeometricTransform).hashCode = function () {
    var result = getNumberHashCode(this.scaleX_1);
    result = imul(31, result) + getNumberHashCode(this.skewX_1) | 0;
    return result;
  };
  protoOf(TextGeometricTransform).toString = function () {
    return 'TextGeometricTransform(scaleX=' + this.scaleX_1 + ', skewX=' + this.skewX_1 + ')';
  };
  function lerp_10(start, stop, fraction) {
    return new TextGeometricTransform(lerp_3(start.scaleX_1, stop.scaleX_1, fraction), lerp_3(start.skewX_1, stop.skewX_1, fraction));
  }
  var androidx_compose_ui_text_style_TextIndent$stable;
  function Companion_39() {
    Companion_instance_39 = this;
    this.None_1 = new TextIndent_0();
  }
  protoOf(Companion_39).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_39;
  function Companion_getInstance_56() {
    if (Companion_instance_39 == null)
      new Companion_39();
    return Companion_instance_39;
  }
  function TextIndent_0(firstLine, restLine) {
    Companion_getInstance_56();
    firstLine = firstLine === VOID ? get_sp_0(0) : firstLine;
    restLine = restLine === VOID ? get_sp_0(0) : restLine;
    this.firstLine_1 = firstLine;
    this.restLine_1 = restLine;
  }
  protoOf(TextIndent_0).get_firstLine_vqcugt_k$ = function () {
    return this.firstLine_1;
  };
  protoOf(TextIndent_0).get_restLine_r6nrrn_k$ = function () {
    return this.restLine_1;
  };
  protoOf(TextIndent_0).copy_cdk0dx_k$ = function (firstLine, restLine) {
    return new TextIndent_0(firstLine, restLine);
  };
  protoOf(TextIndent_0).copy$default_4hubtm_k$ = function (firstLine, restLine, $super) {
    firstLine = firstLine === VOID ? this.firstLine_1 : firstLine;
    restLine = restLine === VOID ? this.restLine_1 : restLine;
    return $super === VOID ? this.copy_cdk0dx_k$(firstLine, restLine) : $super.copy_cdk0dx_k$.call(this, new TextUnit(firstLine), new TextUnit(restLine));
  };
  protoOf(TextIndent_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent_0))
      return false;
    if (!equals(this.firstLine_1, other.firstLine_1))
      return false;
    if (!equals(this.restLine_1, other.restLine_1))
      return false;
    return true;
  };
  protoOf(TextIndent_0).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.firstLine_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.restLine_1) | 0;
    return result;
  };
  protoOf(TextIndent_0).toString = function () {
    return 'TextIndent(firstLine=' + TextUnit__toString_impl_51ghw0(this.firstLine_1) + ', restLine=' + TextUnit__toString_impl_51ghw0(this.restLine_1) + ')';
  };
  function lerp_11(start, stop, fraction) {
    return new TextIndent_0(lerpTextUnitInheritable(start.firstLine_1, stop.firstLine_1, fraction), lerpTextUnitInheritable(start.restLine_1, stop.restLine_1, fraction));
  }
  function _TextOverflow___init__impl__obguoe(value) {
    return value;
  }
  function _TextOverflow___get_value__impl__vugm5i($this) {
    return $this;
  }
  function TextOverflow__toString_impl_10s0c2($this) {
    return $this === Companion_getInstance_57().Clip_1 ? 'Clip' : $this === Companion_getInstance_57().Ellipsis_1 ? 'Ellipsis' : $this === Companion_getInstance_57().MiddleEllipsis_1 ? 'MiddleEllipsis' : $this === Companion_getInstance_57().Visible_1 ? 'Visible' : $this === Companion_getInstance_57().StartEllipsis_1 ? 'StartEllipsis' : 'Invalid';
  }
  function Companion_40() {
    Companion_instance_40 = this;
    this.Clip_1 = _TextOverflow___init__impl__obguoe(1);
    this.Ellipsis_1 = _TextOverflow___init__impl__obguoe(2);
    this.Visible_1 = _TextOverflow___init__impl__obguoe(3);
    this.StartEllipsis_1 = _TextOverflow___init__impl__obguoe(4);
    this.MiddleEllipsis_1 = _TextOverflow___init__impl__obguoe(5);
  }
  protoOf(Companion_40).get_Clip_ypf2ge_k$ = function () {
    return this.Clip_1;
  };
  protoOf(Companion_40).get_Ellipsis_8ygjpt_k$ = function () {
    return this.Ellipsis_1;
  };
  protoOf(Companion_40).get_Visible_m15n1a_k$ = function () {
    return this.Visible_1;
  };
  protoOf(Companion_40).get_StartEllipsis_95iydd_k$ = function () {
    return this.StartEllipsis_1;
  };
  protoOf(Companion_40).get_MiddleEllipsis_nad4is_k$ = function () {
    return this.MiddleEllipsis_1;
  };
  var Companion_instance_40;
  function Companion_getInstance_57() {
    if (Companion_instance_40 == null)
      new Companion_40();
    return Companion_instance_40;
  }
  function TextOverflow__hashCode_impl_kqdwgt($this) {
    return $this;
  }
  function TextOverflow__equals_impl_jkxdof($this, other) {
    if (!(other instanceof TextOverflow))
      return false;
    if (!($this === (other instanceof TextOverflow ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextOverflow(value) {
    Companion_getInstance_57();
    this.value_1 = value;
  }
  protoOf(TextOverflow).toString = function () {
    return TextOverflow__toString_impl_10s0c2(this.value_1);
  };
  protoOf(TextOverflow).hashCode = function () {
    return TextOverflow__hashCode_impl_kqdwgt(this.value_1);
  };
  protoOf(TextOverflow).equals = function (other) {
    return TextOverflow__equals_impl_jkxdof(this.value_1, other);
  };
  function userPreferredLanguages() {
    return toList(getUserPreferredLanguagesAsArray());
  }
  function getUserPreferredLanguagesAsArray() {
    return window.navigator.languages;
  }
  var androidx_compose_ui_text_AtomicReference$stable;
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function AtomicReference(value) {
    this.delegate_1 = atomic$ref$1(value);
  }
  protoOf(AtomicReference).get_26vq_k$ = function () {
    return this.delegate_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(AtomicReference).set_inogor_k$ = function (value) {
    this.delegate_1.set_kotlinx$atomicfu$value_508e3y_k$(value);
  };
  protoOf(AtomicReference).getAndSet_6mmyt0_k$ = function (value) {
    return this.delegate_1.atomicfu$getAndSet(value);
  };
  protoOf(AtomicReference).compareAndSet_10iwom_k$ = function (expect, newValue) {
    return this.delegate_1.atomicfu$compareAndSet(expect, newValue);
  };
  function isNonSpacingMark(_this__u8e3s4) {
    return CharDirection_getInstance().of_xanmn3_k$(_this__u8e3s4) === 17;
  }
  function isNeutralDirection(_this__u8e3s4) {
    switch (CharDirection_getInstance().of_xanmn3_k$(_this__u8e3s4)) {
      case 10:
      case 9:
      case 18:
        return true;
      default:
        return false;
    }
  }
  function strongDirectionType(_this__u8e3s4) {
    switch (CharDirection_getInstance().of_xanmn3_k$(_this__u8e3s4)) {
      case 0:
        return Companion_getInstance_58().get_Ltr_vywptz_k$();
      case 1:
      case 13:
        return Companion_getInstance_58().get_Rtl_2t37t3_k$();
      default:
        return Companion_getInstance_58().get_None_1ti3nr_k$();
    }
  }
  function toCharArray_0(_this__u8e3s4, destination, destinationOffset, startIndex, endIndex) {
    // Inline function 'kotlin.collections.forEach' call
    var progression = until(startIndex, endIndex);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var it = element;
        destination[(destinationOffset + it | 0) - startIndex | 0] = charCodeAt(_this__u8e3s4, it);
      }
       while (!(element === last));
  }
  var androidx_compose_ui_text_ExpireAfterAccessCache$stable;
  function Cache() {
  }
  function checkEvicted($this, now) {
    var expireTime = subtract(now, $this.expireAfterNanos_1);
    var iterator = $this.accessTime_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    $l$loop: while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var entry = _iterator__ex2g4s.next_20eer_k$();
      if (compare(entry.get_value_j01efc_k$(), expireTime) < 0) {
        $this.map_1.remove_gppy8k_k$(entry.get_key_18j28a_k$());
        iterator.remove_ldkf9o_k$();
      } else
        break $l$loop;
    }
  }
  function currentNanoTime$ref() {
    var l = function () {
      return currentNanoTime();
    };
    l.callableName = 'currentNanoTime';
    return l;
  }
  function ExpireAfterAccessCache(expireAfterNanos, currentNanos) {
    var tmp;
    if (currentNanos === VOID) {
      tmp = currentNanoTime$ref();
    } else {
      tmp = currentNanos;
    }
    currentNanos = tmp;
    this.expireAfterNanos_1 = expireAfterNanos;
    this.currentNanos_1 = currentNanos;
    this.map_1 = HashMap_init_$Create$();
    this.accessTime_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ExpireAfterAccessCache).get_expireAfterNanos_6bfx1n_k$ = function () {
    return this.expireAfterNanos_1;
  };
  protoOf(ExpireAfterAccessCache).get_currentNanos_skfngv_k$ = function () {
    return this.currentNanos_1;
  };
  protoOf(ExpireAfterAccessCache).get_map_8fstgy_k$ = function () {
    return this.map_1;
  };
  protoOf(ExpireAfterAccessCache).get_accessTime_aw880b_k$ = function () {
    return this.accessTime_1;
  };
  protoOf(ExpireAfterAccessCache).get_c3034i_k$ = function (key, loader) {
    this.accessTime_1.remove_gppy8k_k$(key);
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.map_1;
    var value = this_0.get_wei43m_k$(key);
    var tmp;
    if (value == null) {
      var answer = loader(key);
      this_0.put_4fpzoq_k$(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    // Inline function 'kotlin.also' call
    var this_1 = tmp;
    var now = this.currentNanos_1();
    // Inline function 'kotlin.collections.set' call
    this.accessTime_1.put_4fpzoq_k$(key, now);
    checkEvicted(this, now);
    return this_1;
  };
  function get_PUSH_DIRECTIONAL_ISOLATE_RANGE() {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return PUSH_DIRECTIONAL_ISOLATE_RANGE;
  }
  var PUSH_DIRECTIONAL_ISOLATE_RANGE;
  function _StrongDirectionType___init__impl__59uet3(value) {
    return value;
  }
  function _StrongDirectionType___get_value__impl__14d68b($this) {
    return $this;
  }
  function Companion_41() {
    Companion_instance_41 = this;
    this.None_1 = _StrongDirectionType___init__impl__59uet3(0);
    this.Ltr_1 = _StrongDirectionType___init__impl__59uet3(1);
    this.Rtl_1 = _StrongDirectionType___init__impl__59uet3(2);
  }
  protoOf(Companion_41).get_None_1ti3nr_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_41).get_Ltr_vywptz_k$ = function () {
    return this.Ltr_1;
  };
  protoOf(Companion_41).get_Rtl_2t37t3_k$ = function () {
    return this.Rtl_1;
  };
  var Companion_instance_41;
  function Companion_getInstance_58() {
    if (Companion_instance_41 == null)
      new Companion_41();
    return Companion_instance_41;
  }
  function StrongDirectionType__toString_impl_uzh5un($this) {
    return 'StrongDirectionType(value=' + $this + ')';
  }
  function StrongDirectionType__hashCode_impl_98b91s($this) {
    return $this;
  }
  function StrongDirectionType__equals_impl_qyb4t0($this, other) {
    if (!(other instanceof StrongDirectionType))
      return false;
    if (!($this === (other instanceof StrongDirectionType ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StrongDirectionType(value) {
    Companion_getInstance_58();
    this.value_1 = value;
  }
  protoOf(StrongDirectionType).toString = function () {
    return StrongDirectionType__toString_impl_uzh5un(this.value_1);
  };
  protoOf(StrongDirectionType).hashCode = function () {
    return StrongDirectionType__hashCode_impl_98b91s(this.value_1);
  };
  protoOf(StrongDirectionType).equals = function (other) {
    return StrongDirectionType__equals_impl_qyb4t0(this.value_1, other);
  };
  function firstStrongDirectionType(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var _iterator__ex2g4s = get_codePointsOutsideDirectionalIsolate(_this__u8e3s4).iterator_jk1svi_k$();
    $l$loop: while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var codePoint = _iterator__ex2g4s.next_20eer_k$();
      var strongDirectionType_0 = strongDirectionType(codePoint);
      var tmp;
      if (strongDirectionType_0 === Companion_getInstance_58().None_1) {
        continue $l$loop;
      } else {
        tmp = strongDirectionType_0;
      }
      return tmp;
    }
    return Companion_getInstance_58().None_1;
  }
  function findPrecedingBreak(_this__u8e3s4, index) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var it = Companion_getInstance_7().makeCharacterInstance$default_7rwuey_k$();
    it.setText_1jlejc_k$(_this__u8e3s4);
    return it.preceding_v1dyyd_k$(index);
  }
  function findFollowingBreak(_this__u8e3s4, index) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var it = Companion_getInstance_7().makeCharacterInstance$default_7rwuey_k$();
    it.setText_1jlejc_k$(_this__u8e3s4);
    return it.following_j6g4t5_k$(index);
  }
  function codePointAt(_this__u8e3s4, index) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var high = charSequenceGet(_this__u8e3s4, index);
    if (isHighSurrogate(high) && (index + 1 | 0) < charSequenceLength(_this__u8e3s4)) {
      var low = charSequenceGet(_this__u8e3s4, index + 1 | 0);
      if (isLowSurrogate(low)) {
        return toCodePoint(Companion_getInstance_8(), high, low);
      }
    }
    // Inline function 'kotlin.code' call
    return Char__toInt_impl_vasixd(high);
  }
  function get_codePointsOutsideDirectionalIsolate(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0(_this__u8e3s4, null));
  }
  function toCodePoint(_this__u8e3s4, high, low) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return (Char__minus_impl_a2frrh(high, _Char___init__impl__6a9atx(55296)) << 10 | Char__minus_impl_a2frrh(low, _Char___init__impl__6a9atx(56320))) + 65536 | 0;
  }
  function get_codePoints(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePoints_$slambda_43x8dt_0(_this__u8e3s4, null));
  }
  function charCount(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return _this__u8e3s4 >= 65536 ? 2 : 1;
  }
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    this.$this_codePointsOutsideDirectionalIsolate_1 = $this_codePointsOutsideDirectionalIsolate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).invoke_pgsqqr_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_rkcuc7_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_pgsqqr_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.openIsolateCount0__1 = 0;
            this._iterator_1_yqohr1__1 = get_codePoints(this.$this_codePointsOutsideDirectionalIsolate_1).iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this._iterator_1_yqohr1__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            var codePoint = this._iterator_1_yqohr1__1.next_20eer_k$();
            var progression = get_PUSH_DIRECTIONAL_ISOLATE_RANGE();
            var containsLower = progression.get_first_irdx8n_k$();
            if (codePoint <= progression.get_last_wopotb_k$() ? containsLower <= codePoint : false) {
              this.openIsolateCount0__1 = this.openIsolateCount0__1 + 1 | 0;
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              if (codePoint === 8297) {
                if (this.openIsolateCount0__1 > 0) {
                  this.openIsolateCount0__1 = this.openIsolateCount0__1 - 1 | 0;
                }
                this.set_state_rjd8d0_k$(3);
                continue $sm;
              } else {
                if (this.openIsolateCount0__1 === 0) {
                  this.set_state_rjd8d0_k$(2);
                  suspendResult = this.$this$sequence_1.yield_3xhcex_k$(codePoint, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.set_state_rjd8d0_k$(3);
                  continue $sm;
                }
              }
            }

          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).create_rkcuc7_k$ = function ($this$sequence, completion) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj(this.$this_codePointsOutsideDirectionalIsolate_1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rkcuc7_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_pgsqqr_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation) {
    this.$this_codePoints_1 = $this_codePoints;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePoints_$slambda_43x8dt).invoke_pgsqqr_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_rkcuc7_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_get_codePoints_$slambda_43x8dt).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_pgsqqr_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePoints_$slambda_43x8dt).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.index0__1 = 0;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!(this.index0__1 < charSequenceLength(this.$this_codePoints_1))) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.codePoint1__1 = codePointAt(this.$this_codePoints_1, this.index0__1);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.codePoint1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.index0__1 = this.index0__1 + charCount(this.codePoint1__1) | 0;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(_get_codePoints_$slambda_43x8dt).create_rkcuc7_k$ = function ($this$sequence, completion) {
    var i = new _get_codePoints_$slambda_43x8dt(this.$this_codePoints_1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(_get_codePoints_$slambda_43x8dt).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rkcuc7_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function _get_codePoints_$slambda_43x8dt_0($this_codePoints, resultContinuation) {
    var i = new _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_pgsqqr_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_CharHelpers_skiko_kt_d762bq;
  function _init_properties_CharHelpers_skiko_kt__8ej40s() {
    if (!properties_initialized_CharHelpers_skiko_kt_d762bq) {
      properties_initialized_CharHelpers_skiko_kt_d762bq = true;
      PUSH_DIRECTIONAL_ISOLATE_RANGE = numberRangeToNumber(8294, 8296);
    }
  }
  var androidx_compose_ui_text_FontRasterizationSettings$stable;
  function FontRasterizationSettings$Companion$PlatformDefault$delegate$lambda() {
    var tmp;
    switch (currentPlatform().get_ordinal_ip24qg_k$()) {
      case 2:
        var tmp1_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp2_hinting = FontHinting_Normal_getInstance();
        tmp = new FontRasterizationSettings(tmp1_smoothing, tmp2_hinting, true, false);
        break;
      case 1:
      case 0:
        var tmp3_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp4_hinting = FontHinting_Slight_getInstance();
        tmp = new FontRasterizationSettings(tmp3_smoothing, tmp4_hinting, true, false);
        break;
      case 7:
        var tmp5_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp6_hinting = FontHinting_Slight_getInstance();
        tmp = new FontRasterizationSettings(tmp5_smoothing, tmp6_hinting, true, false);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        var tmp7_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp8_hinting = FontHinting_Normal_getInstance();
        tmp = new FontRasterizationSettings(tmp7_smoothing, tmp8_hinting, true, false);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function FontRasterizationSettings$Companion$_get_PlatformDefault_$ref_q7exdb() {
    return function (p0) {
      return p0.get_PlatformDefault_2ivzgl_k$();
    };
  }
  function Companion_42() {
    Companion_instance_42 = this;
    var tmp = this;
    tmp.PlatformDefault$delegate_1 = lazy_0(FontRasterizationSettings$Companion$PlatformDefault$delegate$lambda);
  }
  protoOf(Companion_42).get_PlatformDefault_2ivzgl_k$ = function () {
    var tmp0 = this.PlatformDefault$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('PlatformDefault', 1, tmp, FontRasterizationSettings$Companion$_get_PlatformDefault_$ref_q7exdb(), null);
    return tmp0.get_value_j01efc_k$();
  };
  var Companion_instance_42;
  function Companion_getInstance_59() {
    if (Companion_instance_42 == null)
      new Companion_42();
    return Companion_instance_42;
  }
  function FontRasterizationSettings(smoothing, hinting, subpixelPositioning, autoHintingForced) {
    Companion_getInstance_59();
    this.smoothing_1 = smoothing;
    this.hinting_1 = hinting;
    this.subpixelPositioning_1 = subpixelPositioning;
    this.autoHintingForced_1 = autoHintingForced;
  }
  protoOf(FontRasterizationSettings).get_smoothing_odssvp_k$ = function () {
    return this.smoothing_1;
  };
  protoOf(FontRasterizationSettings).get_hinting_gio9hu_k$ = function () {
    return this.hinting_1;
  };
  protoOf(FontRasterizationSettings).get_subpixelPositioning_d1x3ee_k$ = function () {
    return this.subpixelPositioning_1;
  };
  protoOf(FontRasterizationSettings).get_autoHintingForced_269fh8_k$ = function () {
    return this.autoHintingForced_1;
  };
  protoOf(FontRasterizationSettings).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof FontRasterizationSettings))
      THROW_CCE();
    if (!this.smoothing_1.equals(other.smoothing_1))
      return false;
    if (!this.hinting_1.equals(other.hinting_1))
      return false;
    if (!(this.subpixelPositioning_1 === other.subpixelPositioning_1))
      return false;
    return this.autoHintingForced_1 === other.autoHintingForced_1;
  };
  protoOf(FontRasterizationSettings).hashCode = function () {
    var result = this.smoothing_1.hashCode();
    result = imul(31, result) + this.hinting_1.hashCode() | 0;
    result = imul(31, result) + getBooleanHashCode(this.subpixelPositioning_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.autoHintingForced_1) | 0;
    return result;
  };
  protoOf(FontRasterizationSettings).toString = function () {
    return 'FontRasterizationSettings(smoothing=' + this.smoothing_1.toString() + ', ' + ('hinting=' + this.hinting_1.toString() + ', ') + ('subpixelPositioning=' + this.subpixelPositioning_1 + ', ') + ('autoHintingForced=' + this.autoHintingForced_1 + ')');
  };
  var FontSmoothing_None_instance;
  var FontSmoothing_AntiAlias_instance;
  var FontSmoothing_SubpixelAntiAlias_instance;
  function values_1() {
    return [FontSmoothing_None_getInstance(), FontSmoothing_AntiAlias_getInstance(), FontSmoothing_SubpixelAntiAlias_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'None':
        return FontSmoothing_None_getInstance();
      case 'AntiAlias':
        return FontSmoothing_AntiAlias_getInstance();
      case 'SubpixelAntiAlias':
        return FontSmoothing_SubpixelAntiAlias_getInstance();
      default:
        FontSmoothing_initEntries();
        THROW_IAE('No enum constant androidx.compose.ui.text.FontSmoothing.' + value);
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var FontSmoothing_entriesInitialized;
  function FontSmoothing_initEntries() {
    if (FontSmoothing_entriesInitialized)
      return Unit_getInstance();
    FontSmoothing_entriesInitialized = true;
    FontSmoothing_None_instance = new FontSmoothing('None', 0);
    FontSmoothing_AntiAlias_instance = new FontSmoothing('AntiAlias', 1);
    FontSmoothing_SubpixelAntiAlias_instance = new FontSmoothing('SubpixelAntiAlias', 2);
  }
  var $ENTRIES_1;
  function FontSmoothing(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var FontHinting_None_instance;
  var FontHinting_Slight_instance;
  var FontHinting_Normal_instance;
  var FontHinting_Full_instance;
  function values_2() {
    return [FontHinting_None_getInstance(), FontHinting_Slight_getInstance(), FontHinting_Normal_getInstance(), FontHinting_Full_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'None':
        return FontHinting_None_getInstance();
      case 'Slight':
        return FontHinting_Slight_getInstance();
      case 'Normal':
        return FontHinting_Normal_getInstance();
      case 'Full':
        return FontHinting_Full_getInstance();
      default:
        FontHinting_initEntries();
        THROW_IAE('No enum constant androidx.compose.ui.text.FontHinting.' + value);
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var FontHinting_entriesInitialized;
  function FontHinting_initEntries() {
    if (FontHinting_entriesInitialized)
      return Unit_getInstance();
    FontHinting_entriesInitialized = true;
    FontHinting_None_instance = new FontHinting('None', 0);
    FontHinting_Slight_instance = new FontHinting('Slight', 1);
    FontHinting_Normal_instance = new FontHinting('Normal', 2);
    FontHinting_Full_instance = new FontHinting('Full', 3);
  }
  var $ENTRIES_2;
  function FontHinting(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toSkFontRastrSettings(_this__u8e3s4) {
    return new FontRastrSettings(toSkFontEdging(_this__u8e3s4.smoothing_1), toSkFontHinting(_this__u8e3s4.hinting_1), _this__u8e3s4.subpixelPositioning_1);
  }
  function toSkFontEdging(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = FontEdging_ALIAS_getInstance();
        break;
      case 1:
        tmp = FontEdging_ANTI_ALIAS_getInstance();
        break;
      case 2:
        tmp = FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function toSkFontHinting(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = FontHinting_NONE_getInstance();
        break;
      case 1:
        tmp = FontHinting_SLIGHT_getInstance();
        break;
      case 2:
        tmp = FontHinting_NORMAL_getInstance();
        break;
      case 3:
        tmp = FontHinting_FULL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function FontSmoothing_None_getInstance() {
    FontSmoothing_initEntries();
    return FontSmoothing_None_instance;
  }
  function FontSmoothing_AntiAlias_getInstance() {
    FontSmoothing_initEntries();
    return FontSmoothing_AntiAlias_instance;
  }
  function FontSmoothing_SubpixelAntiAlias_getInstance() {
    FontSmoothing_initEntries();
    return FontSmoothing_SubpixelAntiAlias_instance;
  }
  function FontHinting_None_getInstance() {
    FontHinting_initEntries();
    return FontHinting_None_instance;
  }
  function FontHinting_Slight_getInstance() {
    FontHinting_initEntries();
    return FontHinting_Slight_instance;
  }
  function FontHinting_Normal_getInstance() {
    FontHinting_initEntries();
    return FontHinting_Normal_instance;
  }
  function FontHinting_Full_getInstance() {
    FontHinting_initEntries();
    return FontHinting_Full_instance;
  }
  function Paragraph_1() {
  }
  function get_PlatformParagraphStyleSaver() {
    _init_properties_Savers_skiko_kt__qtio6d();
    return PlatformParagraphStyleSaver;
  }
  var PlatformParagraphStyleSaver;
  function get_LineBreakSaver() {
    _init_properties_Savers_skiko_kt__qtio6d();
    return LineBreakSaver;
  }
  var LineBreakSaver;
  function get_TextMotionSaver() {
    _init_properties_Savers_skiko_kt__qtio6d();
    return TextMotionSaver;
  }
  var TextMotionSaver;
  function get_Saver_12(_this__u8e3s4) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return get_PlatformParagraphStyleSaver();
  }
  function get_Saver_13(_this__u8e3s4) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return get_LineBreakSaver();
  }
  function get_Saver_14(_this__u8e3s4) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return get_TextMotionSaver();
  }
  function PlatformParagraphStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return Unit_getInstance();
  }
  function PlatformParagraphStyleSaver$lambda_0(it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return PlatformParagraphStyle_init_$Create$();
  }
  function LineBreakSaver$lambda($this$Saver, it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return _LineBreak___get_mask__impl__je2e1t(it.mask_1);
  }
  function LineBreakSaver$lambda_0(it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    var mask = typeof it === 'number' ? it : THROW_CCE();
    var tmp;
    switch (mask) {
      case 1:
        tmp = Companion_getInstance_63().get_Simple_z0fu2y_k$();
        break;
      case 2:
        tmp = Companion_getInstance_63().get_Heading_ybpgoc_k$();
        break;
      case 3:
        tmp = Companion_getInstance_63().get_Paragraph_xsyoow_k$();
        break;
      default:
        tmp = Companion_getInstance_63().get_Unspecified_afm6zt_k$();
        break;
    }
    var tmp_0 = tmp;
    return tmp_0 == null ? null : new LineBreak(tmp_0);
  }
  function TextMotionSaver$lambda($this$Saver, it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return equals(it, Companion_getInstance_64().get_Static_4hz9g7_k$()) ? 0 : 1;
  }
  function TextMotionSaver$lambda_0(it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    var tmp;
    if (equals(it, 0)) {
      tmp = Companion_getInstance_64().get_Static_4hz9g7_k$();
    } else {
      tmp = Companion_getInstance_64().get_Animated_r57wcs_k$();
    }
    return tmp;
  }
  var properties_initialized_Savers_skiko_kt_n0li93;
  function _init_properties_Savers_skiko_kt__qtio6d() {
    if (!properties_initialized_Savers_skiko_kt_n0li93) {
      properties_initialized_Savers_skiko_kt_n0li93 = true;
      var tmp = PlatformParagraphStyleSaver$lambda;
      PlatformParagraphStyleSaver = Saver_0(tmp, PlatformParagraphStyleSaver$lambda_0);
      var tmp_0 = LineBreakSaver$lambda;
      LineBreakSaver = Saver_0(tmp_0, LineBreakSaver$lambda_0);
      var tmp_1 = TextMotionSaver$lambda;
      TextMotionSaver = Saver_0(tmp_1, TextMotionSaver$lambda_0);
    }
  }
  var androidx_compose_ui_text_SkiaParagraph$stable;
  function _get_paragraphIntrinsics__noc1dh($this) {
    return $this.paragraphIntrinsics_1;
  }
  function _get_overflow__bx70nd($this) {
    return $this.overflow_1;
  }
  function _get_layouter__1rxx78($this) {
    return $this.layouter_1;
  }
  function _set_paragraph__p1bfvb($this, value) {
    $this.paragraph_1 = value;
    $this._lineMetrics_1 = null;
  }
  function _get_paragraph__goy5p9($this) {
    return $this.paragraph_1;
  }
  function _get_ellipsis__kt5xpi($this) {
    return listOf([new TextOverflow(Companion_getInstance_57().get_Ellipsis_8ygjpt_k$()), new TextOverflow(Companion_getInstance_57().get_MiddleEllipsis_nad4is_k$()), new TextOverflow(Companion_getInstance_57().get_StartEllipsis_95iydd_k$())]).contains_aljjnj_k$(new TextOverflow($this.overflow_1)) ? '\u2026' : '';
  }
  function _get_text__de5ose_0($this) {
    return $this.paragraphIntrinsics_1.get_text_wouvsm_k$();
  }
  function lineMetricsForOffset($this, offset) {
    var tmp;
    if (0 <= offset ? offset <= _get_text__de5ose_0($this).length : false) {
      var tmp0 = _get_lineMetrics__5iiuki($this);
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.ui.text.binarySearchFirstMatchingOrLast' call
        // Inline function 'kotlin.collections.isEmpty' call
        if (tmp0.length === 0) {
          tmp$ret$1 = null;
          break $l$block;
        }
        var tmp_0 = asList(tmp0);
        var index = binarySearch(tmp_0, VOID, VOID, SkiaParagraph$lineMetricsForOffset$lambda(offset));
        tmp$ret$1 = tmp0[coerceAtMost((-index | 0) - 1 | 0, get_lastIndex_0(tmp0))];
      }
      tmp = tmp$ret$1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function getLineMetricsForVerticalPosition($this, vertical) {
    var tmp0 = _get_lineMetrics__5iiuki($this);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.binarySearchFirstMatchingOrLast' call
      // Inline function 'kotlin.collections.isEmpty' call
      if (tmp0.length === 0) {
        tmp$ret$1 = null;
        break $l$block;
      }
      var tmp = asList(tmp0);
      var index = binarySearch(tmp, VOID, VOID, SkiaParagraph$getLineMetricsForVerticalPosition$lambda(vertical));
      tmp$ret$1 = tmp0[coerceAtMost((-index | 0) - 1 | 0, get_lastIndex_0(tmp0))];
    }
    return tmp$ret$1;
  }
  function getAlignedStartingPosition($this, isRtl) {
    var tmp0_subject = $this.layouter_1.get_textStyle_8tt25h_k$().get_textAlign_fnegkd_k$();
    return tmp0_subject === Companion_getInstance_51().get_Left_seblku_k$() ? 0.0 : tmp0_subject === Companion_getInstance_51().get_Right_dlwl8f_k$() ? $this.get_width_j0q4yl_k$() : tmp0_subject === Companion_getInstance_51().get_Center_fp5t1o_k$() ? $this.get_width_j0q4yl_k$() / 2 : tmp0_subject === Companion_getInstance_51().get_Start_ovf7qx_k$() ? isRtl ? $this.get_width_j0q4yl_k$() : 0.0 : tmp0_subject === Companion_getInstance_51().get_End_ck95sw_k$() ? isRtl ? 0.0 : $this.get_width_j0q4yl_k$() : 0.0;
  }
  function _set__lineMetrics__5g7dp5($this, _set____db54di) {
    $this._lineMetrics_1 = _set____db54di;
  }
  function _get__lineMetrics__a3jcuz($this) {
    return $this._lineMetrics_1;
  }
  function _get_lineMetrics__5iiuki($this) {
    var tmp0_elvis_lhs = $this._lineMetrics_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = receiveLineMetrics($this);
      $this._lineMetrics_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lineMetrics = tmp;
    return lineMetrics;
  }
  function receiveLineMetrics($this) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = _get_text__de5ose_0($this);
    if (charSequenceLength(this_0) === 0) {
      tmp = $this.layouter_1.emptyLineMetrics_psf5q3_k$($this.paragraph_1);
    } else {
      tmp = $this.paragraph_1.get_lineMetrics_yxegqi_k$();
    }
    var lineMetrics = tmp;
    var fontMetrics = $this.get_defaultFont_z3udsu_k$().get_metrics_h2mme2_k$();
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(lineMetrics.length === 0)) {
      lineMetrics[0] = trimFirstAscent(lineMetrics[0], fontMetrics, $this.layouter_1.get_textStyle_8tt25h_k$());
      lineMetrics[lineMetrics.length - 1 | 0] = trimLastDescent(lineMetrics[lineMetrics.length - 1 | 0], fontMetrics, $this.layouter_1.get_textStyle_8tt25h_k$());
    }
    return lineMetrics;
  }
  function getBoxForwardByOffset($this, offset) {
    if (!(0 <= offset ? offset <= _get_text__de5ose_0($this).length : false))
      return null;
    var to = offset + 1 | 0;
    while (to <= _get_text__de5ose_0($this).length) {
      var box = firstOrNull($this.paragraph_1.getRectsForRange_leji5d_k$(offset, to, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (!(box == null)) {
        return box;
      }
      to = to + 1 | 0;
    }
    return null;
  }
  function getBoxBackwardByOffset($this, offset, end) {
    if (!(0 <= offset ? offset <= _get_text__de5ose_0($this).length : false))
      return null;
    var from = offset - 1 | 0;
    var isRtl = $this.paragraphIntrinsics_1.get_textDirection_cl6v6f_k$().equals(ResolvedTextDirection_Rtl_getInstance());
    while (from >= 0) {
      var box = firstOrNull($this.paragraph_1.getRectsForRange_leji5d_k$(from, end, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (box == null)
        from = from - 1 | 0;
      else if (charCodeAt(_get_text__de5ose_0($this), from) === _Char___init__impl__6a9atx(10)) {
        var tmp;
        if (!isRtl) {
          var bottom = box.get_rect_wotlbh_k$().get_bottom_bj8ras_k$() + box.get_rect_wotlbh_k$().get_bottom_bj8ras_k$() - box.get_rect_wotlbh_k$().get_top_18ivbo_k$();
          var rect = new Rect_0(0.0, box.get_rect_wotlbh_k$().get_bottom_bj8ras_k$(), 0.0, bottom);
          return new TextBox(rect, box.get_direction_7ekune_k$());
        } else {
          var tmp_0;
          if (from === get_lastIndex_1(_get_text__de5ose_0($this))) {
            var bottom_0 = box.get_rect_wotlbh_k$().get_bottom_bj8ras_k$() + box.get_rect_wotlbh_k$().get_bottom_bj8ras_k$() - box.get_rect_wotlbh_k$().get_top_18ivbo_k$();
            var rect_0 = new Rect_0($this.get_width_j0q4yl_k$(), box.get_rect_wotlbh_k$().get_bottom_bj8ras_k$(), $this.get_width_j0q4yl_k$(), bottom_0);
            tmp_0 = new TextBox(rect_0, box.get_direction_7ekune_k$());
          } else {
            var nextBox = first_0($this.paragraph_1.getRectsForRange_leji5d_k$(offset, offset + 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
            var rect_1 = new Rect_0(nextBox.get_rect_wotlbh_k$().get_left_woprgw_k$(), nextBox.get_rect_wotlbh_k$().get_top_18ivbo_k$(), nextBox.get_rect_wotlbh_k$().get_left_woprgw_k$(), nextBox.get_rect_wotlbh_k$().get_bottom_bj8ras_k$());
            tmp_0 = new TextBox(rect_1, nextBox.get_direction_7ekune_k$());
          }
          tmp = tmp_0;
        }
        return tmp;
      } else
        return box;
    }
    return null;
  }
  function getBoxBackwardByOffset$default($this, offset, end, $super) {
    end = end === VOID ? offset : end;
    return getBoxBackwardByOffset($this, offset, end);
  }
  function checkOffsetIsValid($this, offset) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= offset ? offset <= _get_text__de5ose_0($this).length : false)) {
      var tmp$ret$0 = 'offset(' + offset + ') is out of bounds [0,' + _get_text__de5ose_0($this).length + ']';
      throwIllegalArgumentException(tmp$ret$0);
    }
  }
  function SkiaParagraph$lineMetricsForOffset$lambda($offset) {
    return function (it) {
      var tmp;
      if ($offset < it.get_endIncludingNewline_e3twjj_k$()) {
        tmp = 1;
      } else {
        tmp = -1;
      }
      return tmp;
    };
  }
  function SkiaParagraph$getLineMetricsForVerticalPosition$lambda($vertical) {
    return function (it) {
      var tmp;
      if ($vertical < it.get_baseline_arnwum_k$() + it.get_descent_r0gq8h_k$()) {
        tmp = 1;
      } else {
        tmp = -1;
      }
      return tmp;
    };
  }
  function SkiaParagraph(paragraphIntrinsics, maxLines, overflow, constraints) {
    this.paragraphIntrinsics_1 = paragraphIntrinsics;
    this.maxLines_1 = maxLines;
    this.overflow_1 = overflow;
    this.constraints_1 = constraints;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = this.paragraphIntrinsics_1.layouter_lcs8mh_k$();
    this_0.setParagraphStyle_hogelz_k$(this.maxLines_1, _get_ellipsis__kt5xpi(this));
    tmp.layouter_1 = this_0;
    this.paragraph_1 = this.layouter_1.layoutParagraph_6xbnfw_k$(this.get_width_j0q4yl_k$());
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(_Constraints___get_minHeight__impl__ev4bgx(this.constraints_1) === 0 && _Constraints___get_minWidth__impl__hi9lfi(this.constraints_1) === 0)) {
      var tmp$ret$2 = 'Setting Constraints.minWidth and Constraints.minHeight is not supported, these should be the default zero values instead.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(this.maxLines_1 >= 1)) {
      var tmp$ret$4 = 'maxLines should be greater than 0';
      throwIllegalArgumentException(tmp$ret$4);
    }
    var tmp0 = this.get_width_j0q4yl_k$();
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.get_height_e7t92o_k$();
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$7 = _Size___init__impl__aywn0g(tmp$ret$6);
    this.layouter_1.setBrushSize_muvgz7_k$(tmp$ret$7);
    _set_paragraph__p1bfvb(this, this.layouter_1.layoutParagraph_6xbnfw_k$(this.get_width_j0q4yl_k$()));
    if (this.overflow_1 === Companion_getInstance_57().get_Ellipsis_8ygjpt_k$() && this.paragraph_1.get_height_e7t92o_k$() > _Constraints___get_maxHeight__impl__dt3e8z(this.constraints_1) && this.maxLines_1 > 1) {
      var calculatedMaxLines = numberOfLinesThatFitMaxHeight(this, _Constraints___get_maxHeight__impl__dt3e8z(this.constraints_1));
      if (calculatedMaxLines >= 0 && !(calculatedMaxLines === this.maxLines_1)) {
        this.layouter_1.setParagraphStyle_hogelz_k$(coerceAtLeast(calculatedMaxLines, 1), _get_ellipsis__kt5xpi(this));
        _set_paragraph__p1bfvb(this, this.layouter_1.layoutParagraph_6xbnfw_k$(this.get_width_j0q4yl_k$()));
      }
    }
    this._lineMetrics_1 = null;
  }
  protoOf(SkiaParagraph).get_maxLines_pclpoc_k$ = function () {
    return this.maxLines_1;
  };
  protoOf(SkiaParagraph).get_constraints_y0yfdk_k$ = function () {
    return this.constraints_1;
  };
  protoOf(SkiaParagraph).get_defaultFont_z3udsu_k$ = function () {
    return this.layouter_1.get_defaultFont_6nsy4n_k$();
  };
  protoOf(SkiaParagraph).get_width_j0q4yl_k$ = function () {
    return _Constraints___get_maxWidth__impl__uuyqc(this.constraints_1);
  };
  protoOf(SkiaParagraph).get_height_e7t92o_k$ = function () {
    return this.paragraph_1.get_height_e7t92o_k$();
  };
  protoOf(SkiaParagraph).get_minIntrinsicWidth_lmc1rq_k$ = function () {
    return this.paragraphIntrinsics_1.get_minIntrinsicWidth_lmc1rq_k$();
  };
  protoOf(SkiaParagraph).get_maxIntrinsicWidth_b4gk2k_k$ = function () {
    return this.paragraphIntrinsics_1.get_maxIntrinsicWidth_b4gk2k_k$();
  };
  protoOf(SkiaParagraph).get_firstBaseline_s5430_k$ = function () {
    var tmp0_safe_receiver = firstOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      tmp = tmp0_safe_receiver.get_baseline_arnwum_k$();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).get_lastBaseline_inuptw_k$ = function () {
    var tmp0_safe_receiver = lastOrNull_0(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      tmp = tmp0_safe_receiver.get_baseline_arnwum_k$();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).get_didExceedMaxLines_xyxo57_k$ = function () {
    return this.paragraph_1.didExceedMaxLines_51frgy_k$();
  };
  protoOf(SkiaParagraph).get_lineCount_lmaazy_k$ = function () {
    var tmp;
    if (_get_text__de5ose_0(this) === '' || this.paragraph_1.get_lineNumber_pm7qca_k$() < 1) {
      tmp = 1;
    } else {
      tmp = this.paragraph_1.get_lineNumber_pm7qca_k$();
    }
    return tmp;
  };
  protoOf(SkiaParagraph).get_placeholderRects_1ky2fv_k$ = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.paragraph_1.get_rectsForPlaceholders_vi296l_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0 = toComposeRect(item.get_rect_wotlbh_k$());
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return destination;
  };
  protoOf(SkiaParagraph).getPathForRange_bge8b5_k$ = function (start, end) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!((0 <= start ? start <= end : false) && end <= _get_text__de5ose_0(this).length)) {
      var tmp$ret$0 = 'start(' + start + ') or end(' + end + ') is out of range [0..' + _get_text__de5ose_0(this).length + '],' + ' or start > end!';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var boxes = this.paragraph_1.getRectsForRange_leji5d_k$(start, end, RectHeightMode_MAX_getInstance(), RectWidthMode_TIGHT_getInstance());
    var path = Path();
    var inductionVariable = 0;
    var last = boxes.length;
    while (inductionVariable < last) {
      var b = boxes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      asSkiaPath(path).addRect$default_mv5gnm_k$(b.get_rect_wotlbh_k$());
    }
    return path;
  };
  protoOf(SkiaParagraph).getCursorRect_gdluko_k$ = function (offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= offset ? offset <= _get_text__de5ose_0(this).length : false)) {
      var tmp$ret$0 = 'offset(' + offset + ') is out of bounds [0,' + _get_text__de5ose_0(this).length + ']';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var horizontal = this.getHorizontalPosition_9mx7bk_k$(offset, true);
    var line = ensureNotNull(lineMetricsForOffset(this, offset));
    var isNewEmptyLine = (offset - 1 | 0) === line.get_startIndex_oi1lp5_k$() && offset === _get_text__de5ose_0(this).length;
    var metrics = this.get_defaultFont_z3udsu_k$().get_metrics_h2mme2_k$();
    // Inline function 'kotlin.let' call
    var it = line.get_ascent_b435cz_k$();
    var tmp;
    if (isNewEmptyLine) {
      var ascent = -metrics.get_ascent_b435cz_k$();
      tmp = coerceAtMost_0(it, ascent);
    } else {
      tmp = it;
    }
    var asc = tmp;
    // Inline function 'kotlin.let' call
    var it_0 = line.get_descent_r0gq8h_k$();
    var tmp_0;
    if (isNewEmptyLine) {
      var descent = metrics.get_descent_r0gq8h_k$();
      tmp_0 = coerceAtMost_0(it_0, descent);
    } else {
      tmp_0 = it_0;
    }
    var desc = tmp_0;
    return new Rect_1(horizontal, line.get_baseline_arnwum_k$() - asc, horizontal, line.get_baseline_arnwum_k$() + desc);
  };
  protoOf(SkiaParagraph).getLineLeft_799m07_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_left_woprgw_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).getLineRight_j8rtqe_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_right_ixz7xv_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).getLineTop_q0a6r_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.math.floor' call
      var x = tmp0_safe_receiver.get_baseline_arnwum_k$() - tmp0_safe_receiver.get_ascent_b435cz_k$();
      tmp = Math.floor(x);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).getLineBottom_yhu6bn_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.math.floor' call
      var x = tmp0_safe_receiver.get_baseline_arnwum_k$() + tmp0_safe_receiver.get_descent_r0gq8h_k$();
      tmp = Math.floor(x);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).getLineAscent_atl7qx_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_ascent_b435cz_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return -(tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs);
  };
  protoOf(SkiaParagraph).getLineBaseline_ps5fhl_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_baseline_arnwum_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).getLineDescent_e2lh5f_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_descent_r0gq8h_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).getLineHeight_hm3g1l_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_height_e7t92o_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).getLineWidth_vd5x7g_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_width_j0q4yl_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).getLineStart_clke9s_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_startIndex_oi1lp5_k$();
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).getLineEnd_o6geci_k$ = function (lineIndex, visibleEnd) {
    var tmp0_elvis_lhs = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var metrics = tmp;
    var tmp_0;
    if (visibleEnd) {
      var tmp_1;
      if (lineIndex > 0 && metrics.get_startIndex_oi1lp5_k$() < _get_lineMetrics__5iiuki(this)[lineIndex - 1 | 0].get_endIndex_3lslfk_k$()) {
        tmp_1 = metrics.get_endIndex_3lslfk_k$();
      } else if (metrics.get_startIndex_oi1lp5_k$() < _get_text__de5ose_0(this).length && charCodeAt(_get_text__de5ose_0(this), metrics.get_startIndex_oi1lp5_k$()) === _Char___init__impl__6a9atx(10)) {
        tmp_1 = metrics.get_startIndex_oi1lp5_k$();
      } else {
        tmp_1 = metrics.get_endExcludingWhitespaces_7y3blb_k$();
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = metrics.get_endIndex_3lslfk_k$();
    }
    return tmp_0;
  };
  protoOf(SkiaParagraph).isLineEllipsized_1fausj_k$ = function (lineIndex) {
    return false;
  };
  protoOf(SkiaParagraph).getLineForOffset_jakwx2_k$ = function (offset) {
    return offset < 0 ? 0 : offset > _get_text__de5ose_0(this).length ? this.get_lineCount_lmaazy_k$() - 1 | 0 : ensureNotNull(lineMetricsForOffset(this, offset)).get_lineNumber_pm7qca_k$();
  };
  protoOf(SkiaParagraph).getLineForVerticalPosition_lon9k6_k$ = function (vertical) {
    var tmp0_safe_receiver = getLineMetricsForVerticalPosition(this, vertical);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_lineNumber_pm7qca_k$();
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).getHorizontalPosition_9mx7bk_k$ = function (offset, usePrimaryDirection) {
    var prevBox = getBoxBackwardByOffset$default(this, offset);
    var nextBox = getBoxForwardByOffset(this, offset);
    var isRtl = this.paragraphIntrinsics_1.get_textDirection_cl6v6f_k$().equals(ResolvedTextDirection_Rtl_getInstance());
    var isLtr = !isRtl;
    return prevBox == null && nextBox == null ? getAlignedStartingPosition(this, isRtl) : prevBox == null ? cursorHorizontalPosition(ensureNotNull(nextBox), true) : nextBox == null ? cursorHorizontalPosition(prevBox) : nextBox.get_direction_7ekune_k$().equals(prevBox.get_direction_7ekune_k$()) ? cursorHorizontalPosition(nextBox, true) : isLtr && prevBox.get_direction_7ekune_k$().equals(Direction_LTR_getInstance()) ? cursorHorizontalPosition(nextBox, true) : isRtl && prevBox.get_direction_7ekune_k$().equals(Direction_RTL_getInstance()) ? cursorHorizontalPosition(nextBox, true) : usePrimaryDirection ? cursorHorizontalPosition(prevBox) : cursorHorizontalPosition(nextBox, true);
  };
  protoOf(SkiaParagraph).getParagraphDirection_qweb73_k$ = function (offset) {
    return this.paragraphIntrinsics_1.get_textDirection_cl6v6f_k$();
  };
  protoOf(SkiaParagraph).getBidiRunDirection_c67d8i_k$ = function (offset) {
    var tmp0_safe_receiver = getBoxForwardByOffset(this, offset);
    var tmp1_subject = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_direction_7ekune_k$();
    var tmp;
    switch (tmp1_subject == null ? -1 : tmp1_subject.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = ResolvedTextDirection_Rtl_getInstance();
        break;
      case 1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      case -1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(SkiaParagraph).getOffsetForPosition_12t0zj_k$ = function (position) {
    var tmp = this.paragraph_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(position);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(position);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$7 = floatFromBits(bits_0);
    var initialGlyphPosition = tmp.getGlyphPositionAtCoordinate_djajfu_k$(tmp_0, tmp$ret$7).get_position_jfponi_k$();
    var glyphPosition = initialGlyphPosition;
    if (0 <= glyphPosition ? glyphPosition < _get_text__de5ose_0(this).length : false) {
      var isNonSpacingMark_0 = isNonSpacingMark(codePointAt(_get_text__de5ose_0(this), glyphPosition));
      if (isNonSpacingMark_0) {
        var precedingBreak = findPrecedingBreak(_get_text__de5ose_0(this), glyphPosition);
        var followingBreak = findFollowingBreak(_get_text__de5ose_0(this), glyphPosition);
        if (!(precedingBreak === glyphPosition) && !(followingBreak === glyphPosition)) {
          glyphPosition = followingBreak;
        }
      }
    }
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(position);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$11 = floatFromBits(bits_1);
    var tmp0_elvis_lhs = getLineMetricsForVerticalPosition(this, tmp$ret$11);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      return glyphPosition;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    var expectedLine = tmp_1;
    var isNotEmptyLine = expectedLine.get_startIndex_oi1lp5_k$() < expectedLine.get_endIndex_3lslfk_k$();
    var tmp_2;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(position);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    if (floatFromBits(bits_2) > expectedLine.get_left_woprgw_k$()) {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_3 = _Offset___get_packedValue__impl__xh2k8q(position);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_3 = convertToInt(shiftRight(value_3, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp_2 = floatFromBits(bits_3) < expectedLine.get_right_ixz7xv_k$();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      return glyphPosition;
    }
    var tmp_3;
    if (isNotEmptyLine) {
      tmp_3 = this.paragraph_1.getRectsForRange_leji5d_k$(expectedLine.get_startIndex_oi1lp5_k$(), expectedLine.get_isHardBreak_lhleg1_k$() ? expectedLine.get_endIndex_3lslfk_k$() : expectedLine.get_endIndex_3lslfk_k$() - 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance());
    } else {
      tmp_3 = null;
    }
    var rects = tmp_3;
    var tmp2_safe_receiver = rects == null ? null : firstOrNull(rects);
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_rect_wotlbh_k$();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.get_left_woprgw_k$();
    var leftX = tmp4_elvis_lhs == null ? expectedLine.get_left_woprgw_k$() : tmp4_elvis_lhs;
    var tmp6_safe_receiver = rects == null ? null : lastOrNull_0(rects);
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.get_rect_wotlbh_k$();
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.get_right_ixz7xv_k$();
    var rightX = tmp8_elvis_lhs == null ? expectedLine.get_right_ixz7xv_k$() : tmp8_elvis_lhs;
    if (leftX === rightX) {
      return glyphPosition;
    }
    var tmp_4;
    if (isNotEmptyLine && expectedLine.get_endExcludingWhitespaces_7y3blb_k$() > 0) {
      var lastCharIndex = expectedLine.get_endExcludingWhitespaces_7y3blb_k$() - 1 | 0;
      var tmp_5;
      if (lastCharIndex >= 0 && lastCharIndex < _get_text__de5ose_0(this).length) {
        tmp_5 = isNonSpacingMark(codePointAt(_get_text__de5ose_0(this), lastCharIndex));
      } else {
        tmp_5 = false;
      }
      tmp_4 = tmp_5;
    } else {
      tmp_4 = false;
    }
    var hasNonSpacingMarkAtEnd = tmp_4;
    if (hasNonSpacingMarkAtEnd) {
      return glyphPosition;
    }
    var correctedGlyphPosition = glyphPosition;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_4 = _Offset___get_packedValue__impl__xh2k8q(position);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_4 = convertToInt(shiftRight(value_4, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    if (floatFromBits(bits_4) <= leftX) {
      var tmp_6 = this.paragraph_1;
      var tmp_7 = leftX + 1.0;
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_5 = _Offset___get_packedValue__impl__xh2k8q(position);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_5 = convertToInt(bitwiseAnd(value_5, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$27 = floatFromBits(bits_5);
      correctedGlyphPosition = tmp_6.getGlyphPositionAtCoordinate_djajfu_k$(tmp_7, tmp$ret$27).get_position_jfponi_k$();
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_6 = _Offset___get_packedValue__impl__xh2k8q(position);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_6 = convertToInt(shiftRight(value_6, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      if (floatFromBits(bits_6) >= rightX) {
        var tmp_8 = this.paragraph_1;
        var tmp_9 = rightX - 1.0;
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_7 = _Offset___get_packedValue__impl__xh2k8q(position);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_7 = convertToInt(bitwiseAnd(value_7, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp$ret$35 = floatFromBits(bits_7);
        correctedGlyphPosition = tmp_8.getGlyphPositionAtCoordinate_djajfu_k$(tmp_9, tmp$ret$35).get_position_jfponi_k$();
        var tmp_10;
        if (0 <= correctedGlyphPosition ? correctedGlyphPosition <= (charSequenceLength(_get_text__de5ose_0(this)) - 1 | 0) : false) {
          tmp_10 = isNeutralDirection(codePointAt(_get_text__de5ose_0(this), correctedGlyphPosition));
        } else {
          tmp_10 = false;
        }
        var isNeutralChar = tmp_10;
        var tmp_11;
        if (!isNeutralChar) {
          var tmp9_safe_receiver = getBoxBackwardByOffset$default(this, correctedGlyphPosition);
          tmp_11 = equals(tmp9_safe_receiver == null ? null : tmp9_safe_receiver.get_direction_7ekune_k$(), Direction_RTL_getInstance());
        } else {
          tmp_11 = false;
        }
        if (tmp_11) {
          correctedGlyphPosition = correctedGlyphPosition - 1 | 0;
        }
      }
    }
    return correctedGlyphPosition;
  };
  protoOf(SkiaParagraph).getRangeForRect_jmhhks_k$ = function (rect, granularity, inclusionStrategy) {
    return Companion_getInstance_24().get_Zero_8je9ih_k$();
  };
  protoOf(SkiaParagraph).getBoundingBox_xfho9l_k$ = function (offset) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= offset ? offset <= (charSequenceLength(_get_text__de5ose_0(this)) - 1 | 0) : false)) {
      var tmp$ret$0 = 'offset(' + offset + ') is out of bounds [0,' + _get_text__de5ose_0(this).length + ')';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var tmp0_elvis_lhs = getBoxForwardByOffset(this, offset);
    var box = tmp0_elvis_lhs == null ? ensureNotNull(getBoxBackwardByOffset(this, offset, _get_text__de5ose_0(this).length)) : tmp0_elvis_lhs;
    return toComposeRect(box.get_rect_wotlbh_k$());
  };
  protoOf(SkiaParagraph).fillBoundingBoxes_hcj7vk_k$ = function (range, array, arrayStart) {
    println("Compose Multiplatform doesn't support fillBoundingBoxes` yet. Follow https://youtrack.jetbrains.com/issue/CMP-720");
  };
  protoOf(SkiaParagraph).getWordBoundary_s8pru_k$ = function (offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= offset ? offset <= _get_text__de5ose_0(this).length : false)) {
      var tmp$ret$0 = 'offset(' + offset + ') is out of bounds [0,' + _get_text__de5ose_0(this).length + ']';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (offset < _get_text__de5ose_0(this).length && isWhitespace(charCodeAt(_get_text__de5ose_0(this), offset)) || offset === _get_text__de5ose_0(this).length) {
      var tmp;
      if (offset > 0 && !isWhitespace(charCodeAt(_get_text__de5ose_0(this), offset - 1 | 0))) {
        tmp = toTextRange(this.paragraph_1.getWordBoundary_w7r0s2_k$(offset - 1 | 0));
      } else {
        tmp = TextRange_1(offset, offset);
      }
      return tmp;
    }
    return toTextRange(this.paragraph_1.getWordBoundary_w7r0s2_k$(offset));
  };
  protoOf(SkiaParagraph).paint_xx9kwo_k$ = function (canvas, color, shadow, textDecoration) {
    // Inline function 'kotlin.with' call
    var $this$with = this.layouter_1;
    $this$with.setColor_1w50qq_k$(color);
    $this$with.setTextStyle_digld9_k$(shadow, textDecoration);
    var tmp$ret$1 = $this$with.layoutParagraph_6xbnfw_k$(this.get_width_j0q4yl_k$());
    _set_paragraph__p1bfvb(this, tmp$ret$1);
    this.paragraph_1.paint_utwq50_k$(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  protoOf(SkiaParagraph).paint_qj08y1_k$ = function (canvas, color, shadow, textDecoration, drawStyle, blendMode) {
    // Inline function 'kotlin.with' call
    var $this$with = this.layouter_1;
    $this$with.setColor_1w50qq_k$(color);
    $this$with.setTextStyle_digld9_k$(shadow, textDecoration);
    $this$with.setDrawStyle_16xwa2_k$(drawStyle);
    $this$with.setBlendMode_61cb32_k$(blendMode);
    var tmp$ret$1 = $this$with.layoutParagraph_6xbnfw_k$(this.get_width_j0q4yl_k$());
    _set_paragraph__p1bfvb(this, tmp$ret$1);
    this.paragraph_1.paint_utwq50_k$(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  protoOf(SkiaParagraph).paint_t6aqss_k$ = function (canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode) {
    // Inline function 'kotlin.with' call
    var $this$with = this.layouter_1;
    var tmp0 = this.get_width_j0q4yl_k$();
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.get_height_e7t92o_k$();
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$1 = _Size___init__impl__aywn0g(tmp$ret$0);
    $this$with.setBrush_31k9q3_k$(brush, tmp$ret$1, alpha);
    $this$with.setTextStyle_digld9_k$(shadow, textDecoration);
    $this$with.setDrawStyle_16xwa2_k$(drawStyle);
    $this$with.setBlendMode_61cb32_k$(blendMode);
    var tmp$ret$3 = $this$with.layoutParagraph_6xbnfw_k$(this.get_width_j0q4yl_k$());
    _set_paragraph__p1bfvb(this, tmp$ret$3);
    this.paragraph_1.paint_utwq50_k$(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  function numberOfLinesThatFitMaxHeight(_this__u8e3s4, maxHeight) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_lineCount_lmaazy_k$();
    if (inductionVariable < last)
      do {
        var lineIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (_this__u8e3s4.getLineBottom_yhu6bn_k$(lineIndex) > maxHeight)
          return lineIndex;
      }
       while (inductionVariable < last);
    return _this__u8e3s4.get_lineCount_lmaazy_k$();
  }
  function binarySearchFirstMatchingOrLast(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (_this__u8e3s4.length === 0) {
      return null;
    }
    var tmp = asList(_this__u8e3s4);
    var index = binarySearch(tmp, VOID, VOID, binarySearchFirstMatchingOrLast$lambda(predicate));
    return _this__u8e3s4[coerceAtMost((-index | 0) - 1 | 0, get_lastIndex_0(_this__u8e3s4))];
  }
  function trimFirstAscent(_this__u8e3s4, fontMetrics, textStyle) {
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = textStyle.get_lineHeight_3vvefu_k$();
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0)))
      return _this__u8e3s4;
    var tmp0_elvis_lhs = textStyle.get_lineHeightStyle_fzu4s3_k$();
    var style = tmp0_elvis_lhs == null ? Companion_getInstance_50().get_Default_goqax4_k$() : tmp0_elvis_lhs;
    var tmp;
    if (Trim__isTrimFirstLineTop_impl_tqdsaa(style.get_trim_cyvk3v_k$())) {
      tmp = -fontMetrics.get_ascent_b435cz_k$();
    } else {
      tmp = _this__u8e3s4.get_ascent_b435cz_k$();
    }
    var ascent = tmp;
    return copy(_this__u8e3s4, VOID, VOID, VOID, VOID, VOID, ascent);
  }
  function trimLastDescent(_this__u8e3s4, fontMetrics, textStyle) {
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = textStyle.get_lineHeight_3vvefu_k$();
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0)))
      return _this__u8e3s4;
    var tmp0_elvis_lhs = textStyle.get_lineHeightStyle_fzu4s3_k$();
    var style = tmp0_elvis_lhs == null ? Companion_getInstance_50().get_Default_goqax4_k$() : tmp0_elvis_lhs;
    var tmp;
    if (Trim__isTrimLastLineBottom_impl_8k6x3e(style.get_trim_cyvk3v_k$())) {
      tmp = fontMetrics.get_descent_r0gq8h_k$();
    } else {
      tmp = _this__u8e3s4.get_descent_r0gq8h_k$();
    }
    var descent = tmp;
    return copy(_this__u8e3s4, VOID, VOID, VOID, VOID, VOID, VOID, descent);
  }
  function toTextRange(_this__u8e3s4) {
    return TextRange_1(_this__u8e3s4.get_start_iypx6h_k$(), _this__u8e3s4.get_end_18j6ha_k$());
  }
  function copy(_this__u8e3s4, startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    startIndex = startIndex === VOID ? _this__u8e3s4.get_startIndex_oi1lp5_k$() : startIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.get_endIndex_3lslfk_k$() : endIndex;
    endExcludingWhitespaces = endExcludingWhitespaces === VOID ? _this__u8e3s4.get_endExcludingWhitespaces_7y3blb_k$() : endExcludingWhitespaces;
    endIncludingNewline = endIncludingNewline === VOID ? _this__u8e3s4.get_endIncludingNewline_e3twjj_k$() : endIncludingNewline;
    isHardBreak = isHardBreak === VOID ? _this__u8e3s4.get_isHardBreak_lhleg1_k$() : isHardBreak;
    ascent = ascent === VOID ? _this__u8e3s4.get_ascent_b435cz_k$() : ascent;
    descent = descent === VOID ? _this__u8e3s4.get_descent_r0gq8h_k$() : descent;
    unscaledAscent = unscaledAscent === VOID ? _this__u8e3s4.get_unscaledAscent_v35b7a_k$() : unscaledAscent;
    height = height === VOID ? _this__u8e3s4.get_height_e7t92o_k$() : height;
    width = width === VOID ? _this__u8e3s4.get_width_j0q4yl_k$() : width;
    left = left === VOID ? _this__u8e3s4.get_left_woprgw_k$() : left;
    baseline = baseline === VOID ? _this__u8e3s4.get_baseline_arnwum_k$() : baseline;
    lineNumber = lineNumber === VOID ? _this__u8e3s4.get_lineNumber_pm7qca_k$() : lineNumber;
    return new LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber);
  }
  function binarySearchFirstMatchingOrLast$lambda($predicate) {
    return function (it) {
      return $predicate(it) ? 1 : -1;
    };
  }
  function _TextDecorationLineStyle___init__impl__fccanb(value) {
    return value;
  }
  function _TextDecorationLineStyle___get_value__impl__3sex4d($this) {
    return $this;
  }
  function TextDecorationLineStyle__toString_impl_uezvi9($this) {
    return $this === Companion_getInstance_60().Solid_1 ? 'Solid' : $this === Companion_getInstance_60().Double_1 ? 'Double' : $this === Companion_getInstance_60().Dotted_1 ? 'Dotted' : $this === Companion_getInstance_60().Dashed_1 ? 'Dashed' : $this === Companion_getInstance_60().Wavy_1 ? 'Wavy' : 'Invalid';
  }
  function Companion_43() {
    Companion_instance_43 = this;
    this.Solid_1 = _TextDecorationLineStyle___init__impl__fccanb(1);
    this.Double_1 = _TextDecorationLineStyle___init__impl__fccanb(2);
    this.Dotted_1 = _TextDecorationLineStyle___init__impl__fccanb(3);
    this.Dashed_1 = _TextDecorationLineStyle___init__impl__fccanb(4);
    this.Wavy_1 = _TextDecorationLineStyle___init__impl__fccanb(5);
  }
  protoOf(Companion_43).get_Solid_q58jwq_k$ = function () {
    return this.Solid_1;
  };
  protoOf(Companion_43).get_Double_1zul42_k$ = function () {
    return this.Double_1;
  };
  protoOf(Companion_43).get_Dotted_mupziz_k$ = function () {
    return this.Dotted_1;
  };
  protoOf(Companion_43).get_Dashed_ghvw3m_k$ = function () {
    return this.Dashed_1;
  };
  protoOf(Companion_43).get_Wavy_iy8xge_k$ = function () {
    return this.Wavy_1;
  };
  var Companion_instance_43;
  function Companion_getInstance_60() {
    if (Companion_instance_43 == null)
      new Companion_43();
    return Companion_instance_43;
  }
  function TextDecorationLineStyle__hashCode_impl_8ntype($this) {
    return $this;
  }
  function TextDecorationLineStyle__equals_impl_3jy6m($this, other) {
    if (!(other instanceof TextDecorationLineStyle))
      return false;
    if (!($this === (other instanceof TextDecorationLineStyle ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextDecorationLineStyle(value) {
    Companion_getInstance_60();
    this.value_1 = value;
  }
  protoOf(TextDecorationLineStyle).toString = function () {
    return TextDecorationLineStyle__toString_impl_uezvi9(this.value_1);
  };
  protoOf(TextDecorationLineStyle).hashCode = function () {
    return TextDecorationLineStyle__hashCode_impl_8ntype(this.value_1);
  };
  protoOf(TextDecorationLineStyle).equals = function (other) {
    return TextDecorationLineStyle__equals_impl_3jy6m(this.value_1, other);
  };
  var androidx_compose_ui_text_PlatformTextStyle$stable;
  var androidx_compose_ui_text_PlatformParagraphStyle$stable;
  var androidx_compose_ui_text_PlatformSpanStyle$stable;
  function PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    PlatformTextStyle.call($this);
    $this.spanStyle_1 = spanStyle;
    $this.paragraphStyle_1 = paragraphStyle;
    return $this;
  }
  function PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(PlatformTextStyle)));
  }
  function PlatformTextStyle_init_$Init$_0(textDecorationLineStyle, $this) {
    PlatformTextStyle_init_$Init$(new PlatformSpanStyle(textDecorationLineStyle), null, $this);
    return $this;
  }
  function PlatformTextStyle_init_$Create$_0(textDecorationLineStyle) {
    return PlatformTextStyle_init_$Init$_0(textDecorationLineStyle, objectCreate(protoOf(PlatformTextStyle)));
  }
  protoOf(PlatformTextStyle).get_spanStyle_2b836q_k$ = function () {
    return this.spanStyle_1;
  };
  protoOf(PlatformTextStyle).get_paragraphStyle_27utpo_k$ = function () {
    return this.paragraphStyle_1;
  };
  protoOf(PlatformTextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformTextStyle))
      return false;
    if (!equals(this.paragraphStyle_1, other.paragraphStyle_1))
      return false;
    if (!equals(this.spanStyle_1, other.spanStyle_1))
      return false;
    return true;
  };
  protoOf(PlatformTextStyle).hashCode = function () {
    var tmp0_safe_receiver = this.spanStyle_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.paragraphStyle_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  function PlatformTextStyle() {
  }
  function Companion_44() {
    Companion_instance_44 = this;
    this.Default_1 = PlatformParagraphStyle_init_$Create$();
  }
  protoOf(Companion_44).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  var Companion_instance_44;
  function Companion_getInstance_61() {
    if (Companion_instance_44 == null)
      new Companion_44();
    return Companion_instance_44;
  }
  function PlatformParagraphStyle_init_$Init$($this) {
    PlatformParagraphStyle.call($this);
    $this.fontRasterizationSettings_1 = Companion_getInstance_59().get_PlatformDefault_2ivzgl_k$();
    return $this;
  }
  function PlatformParagraphStyle_init_$Create$() {
    return PlatformParagraphStyle_init_$Init$(objectCreate(protoOf(PlatformParagraphStyle)));
  }
  function PlatformParagraphStyle_init_$Init$_0(fontRasterizationSettings, $this) {
    fontRasterizationSettings = fontRasterizationSettings === VOID ? Companion_getInstance_59().get_PlatformDefault_2ivzgl_k$() : fontRasterizationSettings;
    PlatformParagraphStyle.call($this);
    $this.fontRasterizationSettings_1 = fontRasterizationSettings;
    return $this;
  }
  function PlatformParagraphStyle_init_$Create$_0(fontRasterizationSettings) {
    return PlatformParagraphStyle_init_$Init$_0(fontRasterizationSettings, objectCreate(protoOf(PlatformParagraphStyle)));
  }
  protoOf(PlatformParagraphStyle).get_fontRasterizationSettings_afm_k$ = function () {
    return this.fontRasterizationSettings_1;
  };
  protoOf(PlatformParagraphStyle).merge_553efx_k$ = function (other) {
    if (other == null)
      return this;
    return other;
  };
  protoOf(PlatformParagraphStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformParagraphStyle))
      return false;
    if (!this.fontRasterizationSettings_1.equals(other.fontRasterizationSettings_1))
      return false;
    return true;
  };
  protoOf(PlatformParagraphStyle).hashCode = function () {
    return this.fontRasterizationSettings_1.hashCode();
  };
  function PlatformParagraphStyle() {
    Companion_getInstance_61();
  }
  function PlatformSpanStyle_init_$Init$($this) {
    PlatformSpanStyle.call($this, null);
    return $this;
  }
  function PlatformSpanStyle_init_$Create$() {
    return PlatformSpanStyle_init_$Init$(objectCreate(protoOf(PlatformSpanStyle)));
  }
  function Companion_45() {
    Companion_instance_45 = this;
    this.Default_1 = PlatformSpanStyle_init_$Create$();
  }
  protoOf(Companion_45).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  var Companion_instance_45;
  function Companion_getInstance_62() {
    if (Companion_instance_45 == null)
      new Companion_45();
    return Companion_instance_45;
  }
  function PlatformSpanStyle(textDecorationLineStyle) {
    Companion_getInstance_62();
    this.textDecorationLineStyle_1 = textDecorationLineStyle;
  }
  protoOf(PlatformSpanStyle).get_textDecorationLineStyle_we68v6_k$ = function () {
    return this.textDecorationLineStyle_1;
  };
  protoOf(PlatformSpanStyle).merge_ap0tcl_k$ = function (other) {
    return this;
  };
  protoOf(PlatformSpanStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformSpanStyle))
      return false;
    var tmp = this.textDecorationLineStyle_1;
    var tmp_0 = tmp == null ? null : new TextDecorationLineStyle(tmp);
    var tmp_1 = other.textDecorationLineStyle_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new TextDecorationLineStyle(tmp_1)))
      return false;
    return true;
  };
  protoOf(PlatformSpanStyle).hashCode = function () {
    var tmp = this.textDecorationLineStyle_1;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = tmp == null ? null : new TextDecorationLineStyle(tmp);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  function createPlatformTextStyle(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle);
  }
  function lerp_12(start, stop, fraction) {
    return start;
  }
  function lerp_13(start, stop, fraction) {
    var tmp = start.textDecorationLineStyle_1;
    var tmp_0 = tmp == null ? null : new TextDecorationLineStyle(tmp);
    var tmp_1 = stop.textDecorationLineStyle_1;
    if (equals(tmp_0, tmp_1 == null ? null : new TextDecorationLineStyle(tmp_1)))
      return start;
    var tmp_2 = start.textDecorationLineStyle_1;
    var tmp_3 = tmp_2 == null ? null : new TextDecorationLineStyle(tmp_2);
    var tmp_4 = stop.textDecorationLineStyle_1;
    var tmp_5 = lerpDiscrete(tmp_3, tmp_4 == null ? null : new TextDecorationLineStyle(tmp_4), fraction);
    return new PlatformSpanStyle(tmp_5 == null ? null : tmp_5.value_1);
  }
  function createFontFamilyResolver(fontResourceLoader) {
    if (!(fontResourceLoader instanceof FontLoader))
      throw IllegalArgumentException_init_$Create$_0('Unexpected type: ' + toString_0(fontResourceLoader) + ' must be FontLoader');
    return fontResourceLoader.get_fontFamilyResolver_mb6mg3_k$();
  }
  function createFontFamilyResolver_0(fontCache) {
    return new FontFamilyResolverImpl(SkiaFontLoader_init_$Create$(fontCache), createPlatformResolveInterceptor());
  }
  function createFontFamilyResolver_1() {
    return new FontFamilyResolverImpl(SkiaFontLoader_init_$Create$(), createPlatformResolveInterceptor());
  }
  var androidx_compose_ui_text_font_PlatformFontFamilyTypefaceAdapter$stable;
  function PlatformFontFamilyTypefaceAdapter() {
  }
  protoOf(PlatformFontFamilyTypefaceAdapter).resolve_wywkvk_k$ = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.get_fontFamily_ulphcs_k$();
    if (tmp instanceof FontListFontFamily)
      return null;
    var skiaFontLoader = platformFontLoader instanceof SkiaFontLoader ? platformFontLoader : THROW_CCE();
    var tmp0_elvis_lhs = typefaceRequest.get_fontFamily_ulphcs_k$();
    var result = skiaFontLoader.loadPlatformTypes_8w4ti1_k$(tmp0_elvis_lhs == null ? Companion_getInstance_27().get_Default_goqax4_k$() : tmp0_elvis_lhs, typefaceRequest.get_fontWeight_wbif2o_k$(), typefaceRequest.get_fontStyle_nhruzn_k$());
    return new Immutable(result);
  };
  var androidx_compose_ui_text_font_SkiaFontLoader$stable;
  function SkiaFontLoader_init_$Init$(fontCache, $this) {
    fontCache = fontCache === VOID ? new FontCache() : fontCache;
    SkiaFontLoader.call($this, SkiaFontLoader$_init_$lambda_5eoe7t(fontCache));
    return $this;
  }
  function SkiaFontLoader_init_$Create$(fontCache) {
    return SkiaFontLoader_init_$Init$(fontCache, objectCreate(protoOf(SkiaFontLoader)));
  }
  function _get_fontCache__rq14qm($this) {
    var tmp0 = $this.fontCache$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('fontCache', 1, tmp, SkiaFontLoader$_get_fontCache_$ref_77g67v(), null);
    return tmp0.get_value_j01efc_k$();
  }
  function SkiaFontLoader$_init_$lambda_5eoe7t($fontCache) {
    return function () {
      return $fontCache;
    };
  }
  function SkiaFontLoader$_get_fontCache_$ref_77g67v() {
    return function (p0) {
      return _get_fontCache__rq14qm(p0);
    };
  }
  function SkiaFontLoader(fontCacheProvider) {
    this.fontCache$delegate_1 = lazy_0(fontCacheProvider);
  }
  protoOf(SkiaFontLoader).get_fontCollection_kf4vje_k$ = function () {
    return _get_fontCache__rq14qm(this).get_fonts_76fd56_k$();
  };
  protoOf(SkiaFontLoader).loadBlocking_4ao78a_k$ = function (font) {
    if (!(font instanceof PlatformFont)) {
      if (!(font.get_loadingStrategy_s3fce_k$() === Companion_getInstance_30().get_OptionalLocal_ehk5yi_k$())) {
        throw IllegalArgumentException_init_$Create$_0('Unsupported font type: ' + toString_0(font));
      }
      return null;
    }
    var tmp0_subject = font.get_loadingStrategy_s3fce_k$();
    var tmp;
    if (tmp0_subject === Companion_getInstance_30().get_Blocking_7mu9wm_k$()) {
      tmp = _get_fontCache__rq14qm(this).load_tfy6fd_k$(font);
    } else if (tmp0_subject === Companion_getInstance_30().get_OptionalLocal_ehk5yi_k$()) {
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        Companion_getInstance_6();
        // Inline function 'kotlin.Companion.success' call
        var value = _get_fontCache__rq14qm(this).load_tfy6fd_k$(font);
        tmp_0 = _Result___init__impl__xyqfz8(value);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance_6();
          tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      // Inline function 'kotlin.Result.getOrNull' call
      var this_0 = tmp_0;
      var tmp_2;
      if (_Result___get_isFailure__impl__jpiriv(this_0)) {
        tmp_2 = null;
      } else {
        var tmp_3 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      }
      tmp = tmp_2;
    } else if (tmp0_subject === Companion_getInstance_30().get_Async_nzjdad_k$()) {
      throw UnsupportedOperationException_init_$Create$_0('Unsupported Async font load path');
    } else {
      throw IllegalArgumentException_init_$Create$_0('Unknown loading type ' + FontLoadingStrategy__toString_impl_fx0z8f(font.get_loadingStrategy_s3fce_k$()));
    }
    return tmp;
  };
  protoOf(SkiaFontLoader).loadPlatformTypes_8w4ti1_k$ = function (fontFamily, fontWeight, fontStyle) {
    return _get_fontCache__rq14qm(this).loadPlatformTypes_8w4ti1_k$(fontFamily, fontWeight, fontStyle);
  };
  protoOf(SkiaFontLoader).loadPlatformTypes$default_p38x0h_k$ = function (fontFamily, fontWeight, fontStyle, $super) {
    fontWeight = fontWeight === VOID ? Companion_getInstance_33().get_Normal_22avww_k$() : fontWeight;
    fontStyle = fontStyle === VOID ? Companion_getInstance_31().get_Normal_tevh6u_k$() : fontStyle;
    return $super === VOID ? this.loadPlatformTypes_8w4ti1_k$(fontFamily, fontWeight, fontStyle) : $super.loadPlatformTypes_8w4ti1_k$.call(this, fontFamily, fontWeight, new FontStyle(fontStyle));
  };
  protoOf(SkiaFontLoader).awaitLoad_kvuun9_k$ = function (font, $completion) {
    return this.loadBlocking_4ao78a_k$(font);
  };
  protoOf(SkiaFontLoader).awaitLoad_quf34a_k$ = function (font, $completion) {
    return this.awaitLoad_kvuun9_k$(font, $completion);
  };
  protoOf(SkiaFontLoader).get_cacheKey_w22q12_k$ = function () {
    return _get_fontCache__rq14qm(this);
  };
  var androidx_compose_ui_text_input_PlatformImeOptions$stable;
  function PlatformImeOptions() {
  }
  function TextEditorState() {
  }
  function TextEditingScope() {
  }
  function ActualParagraph(text, style, annotations, placeholders, maxLines, overflow, constraints, density, fontFamilyResolver) {
    return new SkiaParagraph(new SkiaParagraphIntrinsics(text, style, annotations, placeholders, density, fontFamilyResolver), maxLines, overflow, constraints);
  }
  function ActualParagraph_0(paragraphIntrinsics, maxLines, overflow, constraints) {
    return new SkiaParagraph(paragraphIntrinsics instanceof SkiaParagraphIntrinsics ? paragraphIntrinsics : THROW_CCE(), maxLines, overflow, constraints);
  }
  function get_DefaultFontSize_0() {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return DefaultFontSize_0;
  }
  var DefaultFontSize_0;
  function get_skTextStylesCache() {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return skTextStylesCache;
  }
  var skTextStylesCache;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Op_StyleAdd$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Op_PutPlaceholder$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Op_EndPlaceholder$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Cut_StyleAdd$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Cut_StyleRemove$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Cut_PutPlaceholder$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Cut_EndPlaceholder$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder$stable;
  function ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, lineHeight, lineHeightStyle, $this) {
    brushSize = brushSize === VOID ? Companion_getInstance_9().get_Unspecified_3ttj0y_k$() : brushSize;
    blendMode = blendMode === VOID ? Companion_getInstance_1().get_DefaultBlendMode_svct2m_k$() : blendMode;
    ComputedStyle.call($this);
    $this.set_ga6b29_k$(density, spanStyle, brushSize, blendMode, lineHeight, lineHeightStyle);
    return $this;
  }
  function ComputedStyle_init_$Create$(density, spanStyle, brushSize, blendMode, lineHeight, lineHeightStyle) {
    return ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, lineHeight, lineHeightStyle, objectCreate(protoOf(ComputedStyle)));
  }
  function _get__foregroundPaint__8gpzfz($this) {
    return $this._foregroundPaint_1;
  }
  function ComputedStyle(textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, textDecorationLineStyle, shadow, drawStyle, blendMode, lineHeight, topRatio) {
    textForegroundStyle = textForegroundStyle === VOID ? Unspecified_getInstance() : textForegroundStyle;
    brushSize = brushSize === VOID ? Companion_getInstance_9().get_Unspecified_3ttj0y_k$() : brushSize;
    fontSize = fontSize === VOID ? NaN : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? null : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance_0().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    textDecorationLineStyle = textDecorationLineStyle === VOID ? null : textDecorationLineStyle;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_1().get_DefaultBlendMode_svct2m_k$() : blendMode;
    lineHeight = lineHeight === VOID ? null : lineHeight;
    topRatio = topRatio === VOID ? -1.0 : topRatio;
    this.textForegroundStyle_1 = textForegroundStyle;
    this.brushSize_1 = brushSize;
    this.fontSize_1 = fontSize;
    this.fontWeight_1 = fontWeight;
    this.fontStyle_1 = fontStyle;
    this.fontSynthesis_1 = fontSynthesis;
    this.fontFamily_1 = fontFamily;
    this.fontFeatureSettings_1 = fontFeatureSettings;
    this.letterSpacing_1 = letterSpacing;
    this.baselineShift_1 = baselineShift;
    this.textGeometricTransform_1 = textGeometricTransform;
    this.localeList_1 = localeList;
    this.background_1 = background;
    this.textDecoration_1 = textDecoration;
    this.textDecorationLineStyle_1 = textDecorationLineStyle;
    this.shadow_1 = shadow;
    this.drawStyle_1 = drawStyle;
    this.blendMode_1 = blendMode;
    this.lineHeight_1 = lineHeight;
    this.topRatio_1 = topRatio;
    this._foregroundPaint_1 = new SkiaTextPaint();
  }
  protoOf(ComputedStyle).set_textForegroundStyle_kdgspt_k$ = function (_set____db54di) {
    this.textForegroundStyle_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_textForegroundStyle_1frzu0_k$ = function () {
    return this.textForegroundStyle_1;
  };
  protoOf(ComputedStyle).set_brushSize_u1ysdq_k$ = function (_set____db54di) {
    this.brushSize_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_brushSize_5w3nu2_k$ = function () {
    return this.brushSize_1;
  };
  protoOf(ComputedStyle).set_fontSize_ywm6aj_k$ = function (_set____db54di) {
    this.fontSize_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_fontSize_pr9n47_k$ = function () {
    return this.fontSize_1;
  };
  protoOf(ComputedStyle).set_fontWeight_pwfx34_k$ = function (_set____db54di) {
    this.fontWeight_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_fontWeight_wbif2o_k$ = function () {
    return this.fontWeight_1;
  };
  protoOf(ComputedStyle).set_fontStyle_h15b5y_k$ = function (_set____db54di) {
    this.fontStyle_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_fontStyle_hzv4zg_k$ = function () {
    return this.fontStyle_1;
  };
  protoOf(ComputedStyle).set_fontSynthesis_i57yq4_k$ = function (_set____db54di) {
    this.fontSynthesis_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_fontSynthesis_h5auiy_k$ = function () {
    return this.fontSynthesis_1;
  };
  protoOf(ComputedStyle).set_fontFamily_maldhw_k$ = function (_set____db54di) {
    this.fontFamily_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_fontFamily_ulphcs_k$ = function () {
    return this.fontFamily_1;
  };
  protoOf(ComputedStyle).set_fontFeatureSettings_kup0sq_k$ = function (_set____db54di) {
    this.fontFeatureSettings_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_fontFeatureSettings_a47533_k$ = function () {
    return this.fontFeatureSettings_1;
  };
  protoOf(ComputedStyle).set_letterSpacing_d8gj3f_k$ = function (_set____db54di) {
    this.letterSpacing_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_letterSpacing_xp4v84_k$ = function () {
    return this.letterSpacing_1;
  };
  protoOf(ComputedStyle).set_baselineShift_eg376w_k$ = function (_set____db54di) {
    this.baselineShift_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_baselineShift_99zyho_k$ = function () {
    return this.baselineShift_1;
  };
  protoOf(ComputedStyle).set_textGeometricTransform_xpqoye_k$ = function (_set____db54di) {
    this.textGeometricTransform_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_textGeometricTransform_tdfmin_k$ = function () {
    return this.textGeometricTransform_1;
  };
  protoOf(ComputedStyle).set_localeList_mjnofb_k$ = function (_set____db54di) {
    this.localeList_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_localeList_1gj9gh_k$ = function () {
    return this.localeList_1;
  };
  protoOf(ComputedStyle).set_background_jj6oi0_k$ = function (_set____db54di) {
    this.background_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_background_8l4942_k$ = function () {
    return this.background_1;
  };
  protoOf(ComputedStyle).set_textDecoration_xbo67o_k$ = function (_set____db54di) {
    this.textDecoration_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_textDecoration_itgjwm_k$ = function () {
    return this.textDecoration_1;
  };
  protoOf(ComputedStyle).set_textDecorationLineStyle_5dr42i_k$ = function (_set____db54di) {
    this.textDecorationLineStyle_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_textDecorationLineStyle_we68v6_k$ = function () {
    return this.textDecorationLineStyle_1;
  };
  protoOf(ComputedStyle).set_shadow_bl41xa_k$ = function (_set____db54di) {
    this.shadow_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_shadow_jgtb8p_k$ = function () {
    return this.shadow_1;
  };
  protoOf(ComputedStyle).set_drawStyle_e0kgyj_k$ = function (_set____db54di) {
    this.drawStyle_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_drawStyle_arbehw_k$ = function () {
    return this.drawStyle_1;
  };
  protoOf(ComputedStyle).set_blendMode_1e5m6b_k$ = function (_set____db54di) {
    this.blendMode_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_blendMode_si209t_k$ = function () {
    return this.blendMode_1;
  };
  protoOf(ComputedStyle).set_lineHeight_t9nmir_k$ = function (_set____db54di) {
    this.lineHeight_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_lineHeight_spcmd8_k$ = function () {
    return this.lineHeight_1;
  };
  protoOf(ComputedStyle).set_topRatio_5mxnvv_k$ = function (_set____db54di) {
    this.topRatio_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_topRatio_n1k41r_k$ = function () {
    return this.topRatio_1;
  };
  protoOf(ComputedStyle).set_ga6b29_k$ = function (density, spanStyle, brushSize, blendMode, lineHeight, lineHeightStyle) {
    this.textForegroundStyle_1 = spanStyle.get_textForegroundStyle_h1fi7n_k$();
    this.brushSize_1 = brushSize;
    var tmp = this;
    // Inline function 'kotlin.with' call
    tmp.fontSize_1 = density.toPx_plt68j_k$(spanStyle.get_fontSize_ergf2z_k$());
    this.fontWeight_1 = spanStyle.get_fontWeight_wbif2o_k$();
    this.fontStyle_1 = spanStyle.get_fontStyle_hzv4zg_k$();
    this.fontSynthesis_1 = spanStyle.get_fontSynthesis_h5auiy_k$();
    this.fontFamily_1 = spanStyle.get_fontFamily_ulphcs_k$();
    this.fontFeatureSettings_1 = spanStyle.get_fontFeatureSettings_a47533_k$();
    var tmp_0 = this;
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = spanStyle.get_letterSpacing_k79xfu_k$();
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0))) {
      // Inline function 'kotlin.with' call
      tmp_1 = density.toPx_plt68j_k$(spanStyle.get_letterSpacing_k79xfu_k$());
    } else {
      tmp_1 = null;
    }
    tmp_0.letterSpacing_1 = tmp_1;
    this.baselineShift_1 = spanStyle.get_baselineShift_99zyho_k$();
    this.textGeometricTransform_1 = spanStyle.get_textGeometricTransform_tdfmin_k$();
    this.localeList_1 = spanStyle.get_localeList_1gj9gh_k$();
    this.background_1 = spanStyle.get_background_8l4942_k$();
    this.textDecoration_1 = spanStyle.get_textDecoration_itgjwm_k$();
    var tmp_2 = this;
    var tmp0_safe_receiver = spanStyle.get_platformStyle_7i053p_k$();
    tmp_2.textDecorationLineStyle_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_textDecorationLineStyle_we68v6_k$();
    this.shadow_1 = spanStyle.get_shadow_jgtb8p_k$();
    this.drawStyle_1 = spanStyle.get_drawStyle_arbehw_k$();
    this.blendMode_1 = blendMode;
    var tmp_3 = this;
    var tmp_4;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(lineHeight), new Long(0, 0))) {
      tmp_4 = toPx(lineHeight, density, spanStyle.get_fontSize_ergf2z_k$());
    } else {
      tmp_4 = null;
    }
    tmp_3.lineHeight_1 = tmp_4;
    var tmp2_elvis_lhs = lineHeightStyle == null ? null : lineHeightStyle.get_alignment_l3cz3f_k$();
    var tmp_5;
    var tmp_6 = tmp2_elvis_lhs;
    if ((tmp_6 == null ? null : new Alignment(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_48().get_Proportional_4me62x_k$();
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    var alignment = tmp_5;
    this.topRatio_1 = _Alignment___get_topRatio__impl__gg7tir(alignment);
  };
  protoOf(ComputedStyle).set$default_k7wu9p_k$ = function (density, spanStyle, brushSize, blendMode, lineHeight, lineHeightStyle, $super) {
    brushSize = brushSize === VOID ? Companion_getInstance_9().get_Unspecified_3ttj0y_k$() : brushSize;
    blendMode = blendMode === VOID ? Companion_getInstance_1().get_DefaultBlendMode_svct2m_k$() : blendMode;
    var tmp;
    if ($super === VOID) {
      this.set_ga6b29_k$(density, spanStyle, brushSize, blendMode, lineHeight, lineHeightStyle);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.set_ga6b29_k$.call(this, density, spanStyle, new Size(brushSize), new BlendMode(blendMode), new TextUnit(lineHeight), lineHeightStyle);
    }
    return tmp;
  };
  protoOf(ComputedStyle).getForegroundPaint_i2n3vf_k$ = function () {
    var paint = this._foregroundPaint_1.asFrameworkPaint_huz48e_k$();
    paint.reset_1sjh3j_k$();
    this._foregroundPaint_1.set_color_m2amxp_k$(this.textForegroundStyle_1.get_color_lnp1vl_k$());
    this._foregroundPaint_1.setBrush_31k9q3_k$(this.textForegroundStyle_1.get_brush_ipcjyp_k$(), this.brushSize_1, this.textForegroundStyle_1.get_alpha_iooth1_k$());
    this._foregroundPaint_1.setDrawStyle_16xwa2_k$(this.drawStyle_1);
    this._foregroundPaint_1.set_blendMode_1e5m6b_k$(this.blendMode_1);
    return paint;
  };
  protoOf(ComputedStyle).toSkTextStyle_msc8ka_k$ = function (fontFamilyResolver) {
    var res = TextStyle_init_$Create$();
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.textForegroundStyle_1.get_color_lnp1vl_k$();
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      res.set_color_7ztbpe_k$(toArgb(this.textForegroundStyle_1.get_color_lnp1vl_k$()));
    }
    var foreground = this.getForegroundPaint_i2n3vf_k$();
    if (!(foreground.get_shader_jgtazy_k$() == null) || !foreground.get_mode_woqlt8_k$().equals(PaintMode_FILL_getInstance()) || !foreground.get_isSrcOver_xdt2zf_k$()) {
      res.set_foreground_im42hg_k$(foreground);
    }
    var tmp0_safe_receiver = this.fontStyle_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp0_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new FontStyle(tmp_0)).value_1;
      res.set_fontStyle_vxzafm_k$(toSkFontStyle(it));
    }
    var tmp1_safe_receiver = this.textDecoration_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.set_decorationStyle_6iapf7_k$(toSkDecorationStyle(tmp1_safe_receiver, this.textForegroundStyle_1.get_color_lnp1vl_k$(), this.textDecorationLineStyle_1));
    }
    if (!equals(this.background_1, Companion_getInstance_0().get_Unspecified_j397pn_k$())) {
      // Inline function 'kotlin.also' call
      var this_1 = Paint_init_$Create$();
      this_1.set_color_7ztbpe_k$(toArgb(this.background_1));
      res.set_background_zaucsh_k$(this_1);
    }
    var tmp2_safe_receiver = this.fontWeight_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.set_fontStyle_vxzafm_k$(res.get_fontStyle_h4vaiv_k$().withWeight_ue6mre_k$(tmp2_safe_receiver.get_weight_lbhkzl_k$()));
    }
    var tmp3_safe_receiver = this.shadow_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.addShadow_pe2457_k$(toSkShadow(tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = this.letterSpacing_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.set_letterSpacing_k6mf0o_k$(tmp4_safe_receiver);
    }
    var tmp_1 = Companion_getInstance_10();
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.fontFeatureSettings_1;
    var tmp$ret$13 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    res.addFontFeatures_lx2w9d_k$(tmp_1.parseW3_f4iaol_k$(tmp$ret$13));
    res.set_fontSize_ywm6aj_k$(this.fontSize_1);
    var tmp5_safe_receiver = this.fontFamily_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_elvis_lhs_0 = this.fontWeight_1;
      var tmp_2 = tmp0_elvis_lhs_0 == null ? Companion_getInstance_33().get_Normal_22avww_k$() : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs = this.fontStyle_1;
      var tmp_3;
      var tmp_4 = tmp1_elvis_lhs;
      if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
        tmp_3 = Companion_getInstance_31().get_Normal_tevh6u_k$();
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var tmp_5 = tmp_3;
      var tmp2_elvis_lhs = this.fontSynthesis_1;
      var tmp_6;
      var tmp_7 = tmp2_elvis_lhs;
      if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
        tmp_6 = Companion_getInstance_32().get_None_4h38ia_k$();
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var tmp_8 = fontFamilyResolver.resolve_q3h1fi_k$(tmp5_safe_receiver, tmp_2, tmp_5, tmp_6).get_value_j01efc_k$();
      var resolved = tmp_8 instanceof FontLoadResult ? tmp_8 : THROW_CCE();
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_2 = resolved.get_aliases_duxpez_k$();
      var tmp$ret$14 = copyToArray(this_2);
      res.set_fontFamilies_1qji0k_k$(tmp$ret$14);
      res.set_typeface_94v5d2_k$(resolved.get_typeface_s1tqao_k$());
    }
    var tmp6_safe_receiver = this.baselineShift_1;
    var tmp_9 = tmp6_safe_receiver;
    if ((tmp_9 == null ? null : new BaselineShift(tmp_9)) == null)
      null;
    else {
      var tmp_10 = tmp6_safe_receiver;
      // Inline function 'kotlin.let' call
      var it_0 = (tmp_10 == null ? null : new BaselineShift(tmp_10)).multiplier_1;
      var fontMetrics = res.get_fontMetrics_c0s645_k$();
      res.set_baselineShift_pi9thk_k$(_BaselineShift___get_multiplier__impl__qhmjek(it_0) * fontMetrics.get_ascent_b435cz_k$());
    }
    var tmp7_safe_receiver = this.lineHeight_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.set_height_rov7zj_k$(tmp7_safe_receiver / this.fontSize_1);
    }
    res.set_topRatio_5mxnvv_k$(this.topRatio_1);
    return res;
  };
  protoOf(ComputedStyle).merge_je9dsc_k$ = function (density, other) {
    var fontSize = toPx_0(other.get_fontSize_ergf2z_k$(), density, this.fontSize_1);
    this.textForegroundStyle_1 = this.textForegroundStyle_1.merge_b7txoj_k$(other.get_textForegroundStyle_h1fi7n_k$());
    var tmp0_safe_receiver = other.get_fontFamily_ulphcs_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.fontFamily_1 = tmp0_safe_receiver;
    }
    this.fontSize_1 = fontSize;
    var tmp1_safe_receiver = other.get_fontWeight_wbif2o_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.fontWeight_1 = tmp1_safe_receiver;
    }
    var tmp2_safe_receiver = other.get_fontStyle_hzv4zg_k$();
    var tmp = tmp2_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp2_safe_receiver;
      // Inline function 'kotlin.let' call
      this.fontStyle_1 = (tmp_0 == null ? null : new FontStyle(tmp_0)).value_1;
    }
    var tmp3_safe_receiver = other.get_fontSynthesis_h5auiy_k$();
    var tmp_1 = tmp3_safe_receiver;
    if ((tmp_1 == null ? null : new FontSynthesis(tmp_1)) == null)
      null;
    else {
      var tmp_2 = tmp3_safe_receiver;
      // Inline function 'kotlin.let' call
      this.fontSynthesis_1 = (tmp_2 == null ? null : new FontSynthesis(tmp_2)).value_1;
    }
    var tmp4_safe_receiver = other.get_fontFeatureSettings_a47533_k$();
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.fontFeatureSettings_1 = tmp4_safe_receiver;
    }
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = other.get_letterSpacing_k79xfu_k$();
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0))) {
      this.letterSpacing_1 = toPx_0(other.get_letterSpacing_k79xfu_k$(), density, fontSize);
    }
    var tmp5_safe_receiver = other.get_baselineShift_99zyho_k$();
    var tmp_3 = tmp5_safe_receiver;
    if ((tmp_3 == null ? null : new BaselineShift(tmp_3)) == null)
      null;
    else {
      var tmp_4 = tmp5_safe_receiver;
      // Inline function 'kotlin.let' call
      this.baselineShift_1 = (tmp_4 == null ? null : new BaselineShift(tmp_4)).multiplier_1;
    }
    var tmp6_safe_receiver = other.get_textGeometricTransform_tdfmin_k$();
    if (tmp6_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.textGeometricTransform_1 = tmp6_safe_receiver;
    }
    var tmp7_safe_receiver = other.get_localeList_1gj9gh_k$();
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.localeList_1 = tmp7_safe_receiver;
    }
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_1 = other.get_background_8l4942_k$();
    if (!equals(_Color___get_value__impl__1pls5m(this_1), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      this.background_1 = other.get_background_8l4942_k$();
    }
    var tmp8_safe_receiver = other.get_textDecoration_itgjwm_k$();
    if (tmp8_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.textDecoration_1 = tmp8_safe_receiver;
    }
    var tmp9_safe_receiver = other.get_shadow_jgtb8p_k$();
    if (tmp9_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.shadow_1 = tmp9_safe_receiver;
    }
    var tmp10_safe_receiver = other.get_drawStyle_arbehw_k$();
    if (tmp10_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.drawStyle_1 = tmp10_safe_receiver;
    }
    var tmp11_safe_receiver = other.get_platformStyle_7i053p_k$();
    if (tmp11_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = tmp11_safe_receiver.get_textDecorationLineStyle_we68v6_k$();
      var tmp_5;
      var tmp_6 = tmp0_safe_receiver_0;
      if ((tmp_6 == null ? null : new TextDecorationLineStyle(tmp_6)) == null) {
        tmp_5 = null;
      } else {
        var tmp_7 = tmp0_safe_receiver_0;
        // Inline function 'kotlin.let' call
        this.textDecorationLineStyle_1 = (tmp_7 == null ? null : new TextDecorationLineStyle(tmp_7)).value_1;
        tmp_5 = Unit_getInstance();
      }
    }
  };
  protoOf(ComputedStyle).component1_7eebsc_k$ = function () {
    return this.textForegroundStyle_1;
  };
  protoOf(ComputedStyle).component2_oaylq1_k$ = function () {
    return this.brushSize_1;
  };
  protoOf(ComputedStyle).component3_7eebsa_k$ = function () {
    return this.fontSize_1;
  };
  protoOf(ComputedStyle).component4_7eebs9_k$ = function () {
    return this.fontWeight_1;
  };
  protoOf(ComputedStyle).component5_s34n7n_k$ = function () {
    return this.fontStyle_1;
  };
  protoOf(ComputedStyle).component6_f98x3_k$ = function () {
    return this.fontSynthesis_1;
  };
  protoOf(ComputedStyle).component7_7eebs6_k$ = function () {
    return this.fontFamily_1;
  };
  protoOf(ComputedStyle).component8_7eebs5_k$ = function () {
    return this.fontFeatureSettings_1;
  };
  protoOf(ComputedStyle).component9_7eebs4_k$ = function () {
    return this.letterSpacing_1;
  };
  protoOf(ComputedStyle).component10_8y7g9w_k$ = function () {
    return this.baselineShift_1;
  };
  protoOf(ComputedStyle).component11_gazzfn_k$ = function () {
    return this.textGeometricTransform_1;
  };
  protoOf(ComputedStyle).component12_gazzfm_k$ = function () {
    return this.localeList_1;
  };
  protoOf(ComputedStyle).component13_asgeey_k$ = function () {
    return this.background_1;
  };
  protoOf(ComputedStyle).component14_gazzfk_k$ = function () {
    return this.textDecoration_1;
  };
  protoOf(ComputedStyle).component15_dc4dfs_k$ = function () {
    return this.textDecorationLineStyle_1;
  };
  protoOf(ComputedStyle).component16_gazzfi_k$ = function () {
    return this.shadow_1;
  };
  protoOf(ComputedStyle).component17_gazzfh_k$ = function () {
    return this.drawStyle_1;
  };
  protoOf(ComputedStyle).component18_kd2cue_k$ = function () {
    return this.blendMode_1;
  };
  protoOf(ComputedStyle).component19_gazzff_k$ = function () {
    return this.lineHeight_1;
  };
  protoOf(ComputedStyle).component20_gazzet_k$ = function () {
    return this.topRatio_1;
  };
  protoOf(ComputedStyle).copy_dkhvr7_k$ = function (textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, textDecorationLineStyle, shadow, drawStyle, blendMode, lineHeight, topRatio) {
    return new ComputedStyle(textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, textDecorationLineStyle, shadow, drawStyle, blendMode, lineHeight, topRatio);
  };
  protoOf(ComputedStyle).copy$default_6zrp41_k$ = function (textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, textDecorationLineStyle, shadow, drawStyle, blendMode, lineHeight, topRatio, $super) {
    textForegroundStyle = textForegroundStyle === VOID ? this.textForegroundStyle_1 : textForegroundStyle;
    brushSize = brushSize === VOID ? this.brushSize_1 : brushSize;
    fontSize = fontSize === VOID ? this.fontSize_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.fontWeight_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.fontStyle_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.fontSynthesis_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.fontFamily_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.fontFeatureSettings_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.letterSpacing_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.baselineShift_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.textGeometricTransform_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.localeList_1 : localeList;
    background = background === VOID ? this.background_1 : background;
    textDecoration = textDecoration === VOID ? this.textDecoration_1 : textDecoration;
    textDecorationLineStyle = textDecorationLineStyle === VOID ? this.textDecorationLineStyle_1 : textDecorationLineStyle;
    shadow = shadow === VOID ? this.shadow_1 : shadow;
    drawStyle = drawStyle === VOID ? this.drawStyle_1 : drawStyle;
    blendMode = blendMode === VOID ? this.blendMode_1 : blendMode;
    lineHeight = lineHeight === VOID ? this.lineHeight_1 : lineHeight;
    topRatio = topRatio === VOID ? this.topRatio_1 : topRatio;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_dkhvr7_k$(textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, textDecorationLineStyle, shadow, drawStyle, blendMode, lineHeight, topRatio);
    } else {
      var tmp_0 = $super.copy_dkhvr7_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
      var tmp_7 = textDecorationLineStyle;
      tmp = tmp_0.call(this, textForegroundStyle, new Size(brushSize), fontSize, fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, letterSpacing, tmp_6, textGeometricTransform, localeList, new Color(background), textDecoration, tmp_7 == null ? null : new TextDecorationLineStyle(tmp_7), shadow, drawStyle, new BlendMode(blendMode), lineHeight, topRatio);
    }
    return tmp;
  };
  protoOf(ComputedStyle).toString = function () {
    var tmp = toString_0(this.textForegroundStyle_1);
    var tmp_0 = Size__toString_impl_o87ni8(this.brushSize_1);
    var tmp_1 = this.fontSize_1;
    var tmp_2 = toString(this.fontWeight_1);
    var tmp_3 = this.fontStyle_1;
    var tmp_4 = toString(tmp_3 == null ? null : new FontStyle(tmp_3));
    var tmp_5 = this.fontSynthesis_1;
    var tmp_6 = toString(tmp_5 == null ? null : new FontSynthesis(tmp_5));
    var tmp_7 = toString(this.fontFamily_1);
    var tmp_8 = this.fontFeatureSettings_1;
    var tmp_9 = this.letterSpacing_1;
    var tmp_10 = this.baselineShift_1;
    var tmp_11 = toString(tmp_10 == null ? null : new BaselineShift(tmp_10));
    var tmp_12 = toString(this.textGeometricTransform_1);
    var tmp_13 = toString(this.localeList_1);
    var tmp_14 = Color__toString_impl_hpzmaq(this.background_1);
    var tmp_15 = toString(this.textDecoration_1);
    var tmp_16 = this.textDecorationLineStyle_1;
    return 'ComputedStyle(textForegroundStyle=' + tmp + ', brushSize=' + tmp_0 + ', fontSize=' + tmp_1 + ', fontWeight=' + tmp_2 + ', fontStyle=' + tmp_4 + ', fontSynthesis=' + tmp_6 + ', fontFamily=' + tmp_7 + ', fontFeatureSettings=' + tmp_8 + ', letterSpacing=' + tmp_9 + ', baselineShift=' + tmp_11 + ', textGeometricTransform=' + tmp_12 + ', localeList=' + tmp_13 + ', background=' + tmp_14 + ', textDecoration=' + tmp_15 + ', textDecorationLineStyle=' + toString(tmp_16 == null ? null : new TextDecorationLineStyle(tmp_16)) + ', shadow=' + toString(this.shadow_1) + ', drawStyle=' + toString(this.drawStyle_1) + ', blendMode=' + BlendMode__toString_impl_uuibkd(this.blendMode_1) + ', lineHeight=' + this.lineHeight_1 + ', topRatio=' + this.topRatio_1 + ')';
  };
  protoOf(ComputedStyle).hashCode = function () {
    var result = hashCode(this.textForegroundStyle_1);
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.brushSize_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.fontSize_1) | 0;
    result = imul(result, 31) + (this.fontWeight_1 == null ? 0 : this.fontWeight_1.hashCode()) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.fontStyle_1;
    if ((tmp_1 == null ? null : new FontStyle(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = FontStyle__hashCode_impl_7qhg4w(this.fontStyle_1);
    }
    result = tmp + tmp_0 | 0;
    var tmp_2 = imul(result, 31);
    var tmp_3;
    var tmp_4 = this.fontSynthesis_1;
    if ((tmp_4 == null ? null : new FontSynthesis(tmp_4)) == null) {
      tmp_3 = 0;
    } else {
      tmp_3 = FontSynthesis__hashCode_impl_4wi11v(this.fontSynthesis_1);
    }
    result = tmp_2 + tmp_3 | 0;
    result = imul(result, 31) + (this.fontFamily_1 == null ? 0 : hashCode(this.fontFamily_1)) | 0;
    result = imul(result, 31) + (this.fontFeatureSettings_1 == null ? 0 : getStringHashCode(this.fontFeatureSettings_1)) | 0;
    result = imul(result, 31) + (this.letterSpacing_1 == null ? 0 : getNumberHashCode(this.letterSpacing_1)) | 0;
    var tmp_5 = imul(result, 31);
    var tmp_6;
    var tmp_7 = this.baselineShift_1;
    if ((tmp_7 == null ? null : new BaselineShift(tmp_7)) == null) {
      tmp_6 = 0;
    } else {
      tmp_6 = BaselineShift__hashCode_impl_g0potx(this.baselineShift_1);
    }
    result = tmp_5 + tmp_6 | 0;
    result = imul(result, 31) + (this.textGeometricTransform_1 == null ? 0 : this.textGeometricTransform_1.hashCode()) | 0;
    result = imul(result, 31) + (this.localeList_1 == null ? 0 : this.localeList_1.hashCode()) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.background_1) | 0;
    result = imul(result, 31) + (this.textDecoration_1 == null ? 0 : this.textDecoration_1.hashCode()) | 0;
    var tmp_8 = imul(result, 31);
    var tmp_9;
    var tmp_10 = this.textDecorationLineStyle_1;
    if ((tmp_10 == null ? null : new TextDecorationLineStyle(tmp_10)) == null) {
      tmp_9 = 0;
    } else {
      tmp_9 = TextDecorationLineStyle__hashCode_impl_8ntype(this.textDecorationLineStyle_1);
    }
    result = tmp_8 + tmp_9 | 0;
    result = imul(result, 31) + (this.shadow_1 == null ? 0 : this.shadow_1.hashCode()) | 0;
    result = imul(result, 31) + (this.drawStyle_1 == null ? 0 : hashCode(this.drawStyle_1)) | 0;
    result = imul(result, 31) + BlendMode__hashCode_impl_93ceri(this.blendMode_1) | 0;
    result = imul(result, 31) + (this.lineHeight_1 == null ? 0 : getNumberHashCode(this.lineHeight_1)) | 0;
    result = imul(result, 31) + getNumberHashCode(this.topRatio_1) | 0;
    return result;
  };
  protoOf(ComputedStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ComputedStyle ? other : THROW_CCE();
    if (!equals(this.textForegroundStyle_1, tmp0_other_with_cast.textForegroundStyle_1))
      return false;
    if (!equals(this.brushSize_1, tmp0_other_with_cast.brushSize_1))
      return false;
    if (!equals(this.fontSize_1, tmp0_other_with_cast.fontSize_1))
      return false;
    if (!equals(this.fontWeight_1, tmp0_other_with_cast.fontWeight_1))
      return false;
    var tmp = this.fontStyle_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = tmp0_other_with_cast.fontStyle_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.fontSynthesis_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = tmp0_other_with_cast.fontSynthesis_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.fontFamily_1, tmp0_other_with_cast.fontFamily_1))
      return false;
    if (!(this.fontFeatureSettings_1 == tmp0_other_with_cast.fontFeatureSettings_1))
      return false;
    if (!equals(this.letterSpacing_1, tmp0_other_with_cast.letterSpacing_1))
      return false;
    var tmp_5 = this.baselineShift_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = tmp0_other_with_cast.baselineShift_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.textGeometricTransform_1, tmp0_other_with_cast.textGeometricTransform_1))
      return false;
    if (!equals(this.localeList_1, tmp0_other_with_cast.localeList_1))
      return false;
    if (!equals(this.background_1, tmp0_other_with_cast.background_1))
      return false;
    if (!equals(this.textDecoration_1, tmp0_other_with_cast.textDecoration_1))
      return false;
    var tmp_8 = this.textDecorationLineStyle_1;
    var tmp_9 = tmp_8 == null ? null : new TextDecorationLineStyle(tmp_8);
    var tmp_10 = tmp0_other_with_cast.textDecorationLineStyle_1;
    if (!equals(tmp_9, tmp_10 == null ? null : new TextDecorationLineStyle(tmp_10)))
      return false;
    if (!equals(this.shadow_1, tmp0_other_with_cast.shadow_1))
      return false;
    if (!equals(this.drawStyle_1, tmp0_other_with_cast.drawStyle_1))
      return false;
    if (!(this.blendMode_1 === tmp0_other_with_cast.blendMode_1))
      return false;
    if (!equals(this.lineHeight_1, tmp0_other_with_cast.lineHeight_1))
      return false;
    if (!equals(this.topRatio_1, tmp0_other_with_cast.topRatio_1))
      return false;
    return true;
  };
  function toPx(_this__u8e3s4, density, fontSize) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    // Inline function 'kotlin.with' call
    var tmp$ret$1 = density.toPx_plt68j_k$(fontSize);
    return toPx_0(_this__u8e3s4, density, tmp$ret$1);
  }
  function toSkFontStyle(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_31().get_Italic_5ol4ot_k$() ? Companion_getInstance_11().get_ITALIC_qnnif_k$() : Companion_getInstance_11().get_NORMAL_1k4cts_k$();
  }
  function toSkDecorationStyle(_this__u8e3s4, color, textDecorationLineStyle) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var underline = _this__u8e3s4.contains_8so89q_k$(Companion_getInstance_52().get_Underline_oo7egz_k$());
    var overline = false;
    var lineThrough = _this__u8e3s4.contains_8so89q_k$(Companion_getInstance_52().get_LineThrough_pr9ajs_k$());
    var gaps = false;
    var tmp;
    var tmp_0 = textDecorationLineStyle;
    if ((tmp_0 == null ? null : new TextDecorationLineStyle(tmp_0)) == null) {
      tmp = null;
    } else {
      tmp = toSkDecorationLineStyle(textDecorationLineStyle);
    }
    var tmp1_elvis_lhs = tmp;
    var lineStyle = tmp1_elvis_lhs == null ? DecorationLineStyle_SOLID_getInstance() : tmp1_elvis_lhs;
    var thicknessMultiplier = 1.0;
    return new DecorationStyle(underline, overline, lineThrough, gaps, toArgb(color), lineStyle, thicknessMultiplier);
  }
  function toSkShadow(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp = toArgb(_this__u8e3s4.get_color_lnp1vl_k$());
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_0 = _this__u8e3s4.get_offset_slhc8e_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_1 = _this__u8e3s4.get_offset_slhc8e_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$7 = floatFromBits(bits_0);
    return new Shadow_0(tmp, tmp_0, tmp$ret$7, _this__u8e3s4.get_blurRadius_r8jo0y_k$());
  }
  function toPx_0(_this__u8e3s4, density, fontSize) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(_this__u8e3s4), new Long(0, 0))) {
      tmp = fontSize;
    } else {
      if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
        tmp = fontSize * _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4);
      } else {
        if (_TextUnit___get_isSp__impl__8c3r6q(_this__u8e3s4)) {
          // Inline function 'kotlin.with' call
          tmp = density.toPx_plt68j_k$(_this__u8e3s4);
        } else {
          var message = 'Unexpected size in TextUnit.toPx';
          throw IllegalStateException_init_$Create$_0(toString_0(message));
        }
      }
    }
    return tmp;
  }
  function toSkDecorationLineStyle(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_60().get_Solid_q58jwq_k$() ? DecorationLineStyle_SOLID_getInstance() : _this__u8e3s4 === Companion_getInstance_60().get_Double_1zul42_k$() ? DecorationLineStyle_DOUBLE_getInstance() : _this__u8e3s4 === Companion_getInstance_60().get_Dotted_mupziz_k$() ? DecorationLineStyle_DOTTED_getInstance() : _this__u8e3s4 === Companion_getInstance_60().get_Dashed_ghvw3m_k$() ? DecorationLineStyle_DASHED_getInstance() : _this__u8e3s4 === Companion_getInstance_60().get_Wavy_iy8xge_k$() ? DecorationLineStyle_WAVY_getInstance() : DecorationLineStyle_SOLID_getInstance();
  }
  function cursorHorizontalPosition(_this__u8e3s4, opposite) {
    opposite = opposite === VOID ? false : opposite;
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    switch (_this__u8e3s4.get_direction_7ekune_k$().get_ordinal_ip24qg_k$()) {
      case 1:
        tmp = opposite ? _this__u8e3s4.get_rect_wotlbh_k$().get_left_woprgw_k$() : _this__u8e3s4.get_rect_wotlbh_k$().get_right_ixz7xv_k$();
        break;
      case 0:
        tmp = opposite ? _this__u8e3s4.get_rect_wotlbh_k$().get_right_ixz7xv_k$() : _this__u8e3s4.get_rect_wotlbh_k$().get_left_woprgw_k$();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function ParagraphBuilder$Cut$PutPlaceholder$_get_position_$ref_jq6gk8(p0) {
    return function () {
      return p0.position_1;
    };
  }
  function ParagraphBuilder$Op$PutPlaceholder$_get_position_$ref_n2s1fp() {
    return function (p0) {
      return p0.get_position_jfponi_k$();
    };
  }
  function ParagraphBuilder$Cut$EndPlaceholder$_get_position_$ref_bdxpek(p0) {
    return function () {
      return p0.position_1;
    };
  }
  function ParagraphBuilder$Op$EndPlaceholder$_get_position_$ref_81c4j3() {
    return function (p0) {
      return p0.get_position_jfponi_k$();
    };
  }
  function StyleAdd(position, style) {
    Op.call(this);
    this.position_1 = position;
    this.style_1 = style;
  }
  protoOf(StyleAdd).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(StyleAdd).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(StyleAdd).component1_7eebsc_k$ = function () {
    return this.position_1;
  };
  protoOf(StyleAdd).component2_7eebsb_k$ = function () {
    return this.style_1;
  };
  protoOf(StyleAdd).copy_laiai5_k$ = function (position, style) {
    return new StyleAdd(position, style);
  };
  protoOf(StyleAdd).copy$default_s6vvkq_k$ = function (position, style, $super) {
    position = position === VOID ? this.position_1 : position;
    style = style === VOID ? this.style_1 : style;
    return $super === VOID ? this.copy_laiai5_k$(position, style) : $super.copy_laiai5_k$.call(this, position, style);
  };
  protoOf(StyleAdd).toString = function () {
    return 'StyleAdd(position=' + this.position_1 + ', style=' + this.style_1.toString() + ')';
  };
  protoOf(StyleAdd).hashCode = function () {
    var result = this.position_1;
    result = imul(result, 31) + this.style_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    if (!this.style_1.equals(tmp0_other_with_cast.style_1))
      return false;
    return true;
  };
  function PutPlaceholder(cut, width, height) {
    Op.call(this);
    this.cut_1 = cut;
    this.width_1 = width;
    this.height_1 = height;
    var tmp = this;
    var tmp_0 = KProperty0;
    tmp.position$delegate_1 = getPropertyCallableRef('position', 0, tmp_0, ParagraphBuilder$Cut$PutPlaceholder$_get_position_$ref_jq6gk8(this.cut_1), null);
  }
  protoOf(PutPlaceholder).get_cut_18j7s7_k$ = function () {
    return this.cut_1;
  };
  protoOf(PutPlaceholder).set_width_h6zvj3_k$ = function (_set____db54di) {
    this.width_1 = _set____db54di;
  };
  protoOf(PutPlaceholder).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(PutPlaceholder).set_height_w1sw3g_k$ = function (_set____db54di) {
    this.height_1 = _set____db54di;
  };
  protoOf(PutPlaceholder).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(PutPlaceholder).get_position_jfponi_k$ = function () {
    var tmp0 = this.position$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('position', 1, tmp, ParagraphBuilder$Op$PutPlaceholder$_get_position_$ref_n2s1fp(), null);
    return tmp0.get();
  };
  protoOf(PutPlaceholder).component1_7eebsc_k$ = function () {
    return this.cut_1;
  };
  protoOf(PutPlaceholder).component2_7eebsb_k$ = function () {
    return this.width_1;
  };
  protoOf(PutPlaceholder).component3_7eebsa_k$ = function () {
    return this.height_1;
  };
  protoOf(PutPlaceholder).copy_py3n8e_k$ = function (cut, width, height) {
    return new PutPlaceholder(cut, width, height);
  };
  protoOf(PutPlaceholder).copy$default_xwjqdu_k$ = function (cut, width, height, $super) {
    cut = cut === VOID ? this.cut_1 : cut;
    width = width === VOID ? this.width_1 : width;
    height = height === VOID ? this.height_1 : height;
    return $super === VOID ? this.copy_py3n8e_k$(cut, width, height) : $super.copy_py3n8e_k$.call(this, cut, width, height);
  };
  protoOf(PutPlaceholder).toString = function () {
    return 'PutPlaceholder(cut=' + this.cut_1.toString() + ', width=' + this.width_1 + ', height=' + this.height_1 + ')';
  };
  protoOf(PutPlaceholder).hashCode = function () {
    var result = this.cut_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.width_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.height_1) | 0;
    return result;
  };
  protoOf(PutPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder ? other : THROW_CCE();
    if (!this.cut_1.equals(tmp0_other_with_cast.cut_1))
      return false;
    if (!equals(this.width_1, tmp0_other_with_cast.width_1))
      return false;
    if (!equals(this.height_1, tmp0_other_with_cast.height_1))
      return false;
    return true;
  };
  function EndPlaceholder(cut) {
    Op.call(this);
    this.cut_1 = cut;
    var tmp = this;
    var tmp_0 = KProperty0;
    tmp.position$delegate_1 = getPropertyCallableRef('position', 0, tmp_0, ParagraphBuilder$Cut$EndPlaceholder$_get_position_$ref_bdxpek(this.cut_1), null);
  }
  protoOf(EndPlaceholder).get_cut_18j7s7_k$ = function () {
    return this.cut_1;
  };
  protoOf(EndPlaceholder).get_position_jfponi_k$ = function () {
    var tmp0 = this.position$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('position', 1, tmp, ParagraphBuilder$Op$EndPlaceholder$_get_position_$ref_81c4j3(), null);
    return tmp0.get();
  };
  protoOf(EndPlaceholder).component1_7eebsc_k$ = function () {
    return this.cut_1;
  };
  protoOf(EndPlaceholder).copy_kb6psi_k$ = function (cut) {
    return new EndPlaceholder(cut);
  };
  protoOf(EndPlaceholder).copy$default_45vb9g_k$ = function (cut, $super) {
    cut = cut === VOID ? this.cut_1 : cut;
    return $super === VOID ? this.copy_kb6psi_k$(cut) : $super.copy_kb6psi_k$.call(this, cut);
  };
  protoOf(EndPlaceholder).toString = function () {
    return 'EndPlaceholder(cut=' + this.cut_1.toString() + ')';
  };
  protoOf(EndPlaceholder).hashCode = function () {
    return this.cut_1.hashCode();
  };
  protoOf(EndPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder ? other : THROW_CCE();
    if (!this.cut_1.equals(tmp0_other_with_cast.cut_1))
      return false;
    return true;
  };
  function StyleAdd_0(position, style) {
    Cut.call(this);
    this.position_1 = position;
    this.style_1 = style;
  }
  protoOf(StyleAdd_0).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(StyleAdd_0).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(StyleAdd_0).component1_7eebsc_k$ = function () {
    return this.position_1;
  };
  protoOf(StyleAdd_0).component2_7eebsb_k$ = function () {
    return this.style_1;
  };
  protoOf(StyleAdd_0).copy_70ryrx_k$ = function (position, style) {
    return new StyleAdd_0(position, style);
  };
  protoOf(StyleAdd_0).copy$default_jp1nwa_k$ = function (position, style, $super) {
    position = position === VOID ? this.position_1 : position;
    style = style === VOID ? this.style_1 : style;
    return $super === VOID ? this.copy_70ryrx_k$(position, style) : $super.copy_70ryrx_k$.call(this, position, style);
  };
  protoOf(StyleAdd_0).toString = function () {
    return 'StyleAdd(position=' + this.position_1 + ', style=' + this.style_1.toString() + ')';
  };
  protoOf(StyleAdd_0).hashCode = function () {
    var result = this.position_1;
    result = imul(result, 31) + this.style_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd_0))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd_0 ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    if (!this.style_1.equals(tmp0_other_with_cast.style_1))
      return false;
    return true;
  };
  function StyleRemove(position, style) {
    Cut.call(this);
    this.position_1 = position;
    this.style_1 = style;
  }
  protoOf(StyleRemove).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(StyleRemove).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(StyleRemove).component1_7eebsc_k$ = function () {
    return this.position_1;
  };
  protoOf(StyleRemove).component2_7eebsb_k$ = function () {
    return this.style_1;
  };
  protoOf(StyleRemove).copy_70ryrx_k$ = function (position, style) {
    return new StyleRemove(position, style);
  };
  protoOf(StyleRemove).copy$default_tsn3e7_k$ = function (position, style, $super) {
    position = position === VOID ? this.position_1 : position;
    style = style === VOID ? this.style_1 : style;
    return $super === VOID ? this.copy_70ryrx_k$(position, style) : $super.copy_70ryrx_k$.call(this, position, style);
  };
  protoOf(StyleRemove).toString = function () {
    return 'StyleRemove(position=' + this.position_1 + ', style=' + this.style_1.toString() + ')';
  };
  protoOf(StyleRemove).hashCode = function () {
    var result = this.position_1;
    result = imul(result, 31) + this.style_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleRemove).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleRemove))
      return false;
    var tmp0_other_with_cast = other instanceof StyleRemove ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    if (!this.style_1.equals(tmp0_other_with_cast.style_1))
      return false;
    return true;
  };
  function PutPlaceholder_0(position, placeholder) {
    Cut.call(this);
    this.position_1 = position;
    this.placeholder_1 = placeholder;
  }
  protoOf(PutPlaceholder_0).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(PutPlaceholder_0).get_placeholder_nsdr0q_k$ = function () {
    return this.placeholder_1;
  };
  protoOf(PutPlaceholder_0).component1_7eebsc_k$ = function () {
    return this.position_1;
  };
  protoOf(PutPlaceholder_0).component2_7eebsb_k$ = function () {
    return this.placeholder_1;
  };
  protoOf(PutPlaceholder_0).copy_lkujcy_k$ = function (position, placeholder) {
    return new PutPlaceholder_0(position, placeholder);
  };
  protoOf(PutPlaceholder_0).copy$default_foy0tf_k$ = function (position, placeholder, $super) {
    position = position === VOID ? this.position_1 : position;
    placeholder = placeholder === VOID ? this.placeholder_1 : placeholder;
    return $super === VOID ? this.copy_lkujcy_k$(position, placeholder) : $super.copy_lkujcy_k$.call(this, position, placeholder);
  };
  protoOf(PutPlaceholder_0).toString = function () {
    return 'PutPlaceholder(position=' + this.position_1 + ', placeholder=' + this.placeholder_1.toString() + ')';
  };
  protoOf(PutPlaceholder_0).hashCode = function () {
    var result = this.position_1;
    result = imul(result, 31) + this.placeholder_1.hashCode() | 0;
    return result;
  };
  protoOf(PutPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder_0 ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    if (!this.placeholder_1.equals(tmp0_other_with_cast.placeholder_1))
      return false;
    return true;
  };
  function EndPlaceholder_0(position) {
    Cut.call(this);
    this.position_1 = position;
  }
  protoOf(EndPlaceholder_0).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(EndPlaceholder_0).component1_7eebsc_k$ = function () {
    return this.position_1;
  };
  protoOf(EndPlaceholder_0).copy_ns6qmb_k$ = function (position) {
    return new EndPlaceholder_0(position);
  };
  protoOf(EndPlaceholder_0).copy$default_aj7p6t_k$ = function (position, $super) {
    position = position === VOID ? this.position_1 : position;
    return $super === VOID ? this.copy_ns6qmb_k$(position) : $super.copy_ns6qmb_k$.call(this, position);
  };
  protoOf(EndPlaceholder_0).toString = function () {
    return 'EndPlaceholder(position=' + this.position_1 + ')';
  };
  protoOf(EndPlaceholder_0).hashCode = function () {
    return this.position_1;
  };
  protoOf(EndPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder_0 ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    return true;
  };
  function _get_defaultStyle__bt02u3($this) {
    return $this.defaultStyle_1;
  }
  function _set_initialStyle__mdespi($this, _set____db54di) {
    $this.initialStyle_1 = _set____db54di;
  }
  function _get_initialStyle__6to25e($this) {
    var tmp = $this.initialStyle_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('initialStyle');
    }
  }
  function _set_ops__4wbo2b($this, _set____db54di) {
    $this.ops_1 = _set____db54di;
  }
  function _get_ops__e6e97j($this) {
    var tmp = $this.ops_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('ops');
    }
  }
  function prepareDefaultStyle($this) {
    $this.initialStyle_1 = copyWithDefaultFontSize($this.textStyle_1.toSpanStyle_l454tw_k$(), $this.drawStyle_1);
    $this.defaultStyle_1.set_ga6b29_k$($this.density_1, _get_initialStyle__6to25e($this), $this.brushSize_1, $this.blendMode_1, $this.textStyle_1.get_lineHeight_3vvefu_k$(), $this.textStyle_1.get_lineHeightStyle_fzu4s3_k$());
  }
  function Op() {
  }
  function Cut() {
  }
  function makeOps($this, annotations, placeholders) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var cuts = ArrayList_init_$Create$();
    var _iterator__ex2g4s = annotations.iterator_jk1svi_k$();
    $l$loop: while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var annotation = _iterator__ex2g4s.next_20eer_k$();
      var tmp = annotation.get_item_woo5lo_k$();
      if (!(tmp instanceof SpanStyle))
        continue $l$loop;
      cuts.add_utx5q5_k$(new StyleAdd_0(annotation.get_start_iypx6h_k$(), annotation.get_item_woo5lo_k$()));
      cuts.add_utx5q5_k$(new StyleRemove(annotation.get_end_18j6ha_k$(), annotation.get_item_woo5lo_k$()));
    }
    var _iterator__ex2g4s_0 = placeholders.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var placeholder = _iterator__ex2g4s_0.next_20eer_k$();
      cuts.add_utx5q5_k$(new PutPlaceholder_0(placeholder.get_start_iypx6h_k$(), placeholder.get_item_woo5lo_k$()));
      cuts.add_utx5q5_k$(new EndPlaceholder_0(placeholder.get_end_18j6ha_k$()));
    }
    var ops = mutableListOf([new StyleAdd(0, $this.defaultStyle_1)]);
    // Inline function 'kotlin.collections.sortBy' call
    if (cuts.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_0 = ParagraphBuilder$makeOps$lambda;
      var tmp$ret$1 = new sam$kotlin_Comparator$0_1(tmp_0);
      sortWith(cuts, tmp$ret$1);
    }
    var activeStyles = mutableListOf([_get_initialStyle__6to25e($this)]);
    var _iterator__ex2g4s_1 = cuts.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
      var cut = _iterator__ex2g4s_1.next_20eer_k$();
      if (cut instanceof StyleAdd_0) {
        activeStyles.add_utx5q5_k$(cut.style_1);
        var prev = previousStyleAddAtTheSamePosition($this, cut.position_1, ops);
        if (prev == null) {
          // Inline function 'kotlin.also' call
          var this_0 = mergeStyles($this, activeStyles);
          this_0.merge_je9dsc_k$($this.density_1, cut.style_1);
          ops.add_utx5q5_k$(new StyleAdd(cut.position_1, this_0));
        } else {
          prev.style_1.merge_je9dsc_k$($this.density_1, cut.style_1);
        }
      } else {
        if (cut instanceof StyleRemove) {
          activeStyles.remove_cedx0m_k$(cut.style_1);
          ops.add_utx5q5_k$(new StyleAdd(cut.position_1, mergeStyles($this, activeStyles)));
        } else {
          if (cut instanceof PutPlaceholder_0) {
            var currentStyle = mergeStyles($this, activeStyles);
            var op = new PutPlaceholder(cut, toPx_0(cut.placeholder_1.get_width_sw31vj_k$(), $this.density_1, currentStyle.fontSize_1), toPx_0(cut.placeholder_1.get_height_pbi6b2_k$(), $this.density_1, currentStyle.fontSize_1));
            ops.add_utx5q5_k$(op);
          } else {
            if (cut instanceof EndPlaceholder_0)
              ops.add_utx5q5_k$(new EndPlaceholder(cut));
            else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
    return ops;
  }
  function mergeStyles($this, activeStyles) {
    var style = ComputedStyle_init_$Create$($this.density_1, activeStyles.get_c1px32_k$(0), $this.brushSize_1, $this.blendMode_1, $this.textStyle_1.get_lineHeight_3vvefu_k$(), $this.textStyle_1.get_lineHeightStyle_fzu4s3_k$());
    var inductionVariable = 1;
    var last = activeStyles.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        style.merge_je9dsc_k$($this.density_1, activeStyles.get_c1px32_k$(i));
      }
       while (inductionVariable < last);
    return style;
  }
  function previousStyleAddAtTheSamePosition($this, position, ops) {
    var _iterator__ex2g4s = asReversed(ops).iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var prevOp = _iterator__ex2g4s.next_20eer_k$();
      if (prevOp.get_position_jfponi_k$() < position)
        return null;
      if (prevOp instanceof StyleAdd)
        return prevOp;
    }
    return null;
  }
  function makeSkFontRasterizationSettings($this, style) {
    var tmp0_safe_receiver = style.get_paragraphStyle_mkvdhj_k$().get_platformStyle_7i053p_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_fontRasterizationSettings_afm_k$();
    var rasterizationSettings = tmp1_elvis_lhs == null ? Companion_getInstance_59().get_PlatformDefault_2ivzgl_k$() : tmp1_elvis_lhs;
    return toSkFontRastrSettings(rasterizationSettings);
  }
  function textStyleToParagraphStyle($this, style, computedStyle) {
    var pStyle = new ParagraphStyle();
    pStyle.set_replaceTabCharacters_nhjeb_k$(true);
    pStyle.set_fontRastrSettings_84513n_k$(makeSkFontRasterizationSettings($this, style));
    pStyle.set_textStyle_unmu3t_k$(makeSkTextStyle($this, computedStyle));
    // Inline function 'kotlin.let' call
    var it = style.get_textAlign_fnegkd_k$();
    pStyle.set_alignment_z9alxm_k$(toSkAlignment(it));
    var lineHeight = computedStyle.lineHeight_1;
    if (!(lineHeight == null) && lineHeight > computedStyle.fontSize_1) {
      var tmp0_elvis_lhs = style.get_lineHeightStyle_fzu4s3_k$();
      var lineHeightStyle = tmp0_elvis_lhs == null ? Companion_getInstance_50().get_Default_goqax4_k$() : tmp0_elvis_lhs;
      pStyle.set_heightMode_w43b63_k$(toHeightMode(lineHeightStyle.get_trim_cyvk3v_k$()));
    } else {
      pStyle.set_heightMode_w43b63_k$(HeightMode_DISABLE_ALL_getInstance());
    }
    pStyle.set_direction_nipmfu_k$(toSkDirection($this.textDirection_1));
    var tmp1_safe_receiver = $this.textStyle_1.get_textIndent_5mau2q_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.with' call
      var $this$with = $this.density_1;
      pStyle.set_textIndent_g4aksn_k$(new TextIndent($this$with.toPx_plt68j_k$(tmp1_safe_receiver.get_firstLine_vqcugt_k$()), $this$with.toPx_plt68j_k$(tmp1_safe_receiver.get_restLine_r6nrrn_k$())));
    }
    return pStyle;
  }
  function makeSkTextStyle($this, style) {
    var tmp = get_skTextStylesCache();
    return tmp.get_qk1ys5_k$(style, ParagraphBuilder$makeSkTextStyle$lambda($this));
  }
  function sam$kotlin_Comparator$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0_1).equals = function (other) {
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
  protoOf(sam$kotlin_Comparator$0_1).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function ParagraphBuilder$makeOps$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.get_position_jfponi_k$();
    var tmp$ret$1 = b.get_position_jfponi_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function ParagraphBuilder$makeSkTextStyle$lambda(this$0) {
    return function (it) {
      return it.toSkTextStyle_msc8ka_k$(this$0.fontFamilyResolver_1);
    };
  }
  function ParagraphBuilder$defaultFont$delegate$lambda(this$0) {
    return function () {
      var loadResult = resolveFontFamily(this$0.textStyle_1, this$0.fontFamilyResolver_1);
      return Font_init_$Create$(loadResult == null ? null : loadResult.get_typeface_s1tqao_k$(), this$0.defaultStyle_1.fontSize_1);
    };
  }
  function ParagraphBuilder$_get_defaultFont_$ref_9jivqf() {
    return function (p0) {
      return p0.get_defaultFont_z3udsu_k$();
    };
  }
  function ParagraphBuilder_0(fontFamilyResolver, text, textStyle, brushSize, ellipsis, maxLines, annotations, placeholders, density, textDirection, drawStyle, blendMode) {
    brushSize = brushSize === VOID ? Companion_getInstance_9().get_Unspecified_3ttj0y_k$() : brushSize;
    ellipsis = ellipsis === VOID ? '' : ellipsis;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_1().get_DefaultBlendMode_svct2m_k$() : blendMode;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.text_1 = text;
    this.textStyle_1 = textStyle;
    this.brushSize_1 = brushSize;
    this.ellipsis_1 = ellipsis;
    this.maxLines_1 = maxLines;
    this.annotations_1 = annotations;
    this.placeholders_1 = placeholders;
    this.density_1 = density;
    this.textDirection_1 = textDirection;
    this.drawStyle_1 = drawStyle;
    this.blendMode_1 = blendMode;
    this.defaultStyle_1 = new ComputedStyle();
    var tmp = this;
    tmp.defaultFont$delegate_1 = lazy_0(ParagraphBuilder$defaultFont$delegate$lambda(this));
  }
  protoOf(ParagraphBuilder_0).get_fontFamilyResolver_9o0fjy_k$ = function () {
    return this.fontFamilyResolver_1;
  };
  protoOf(ParagraphBuilder_0).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(ParagraphBuilder_0).set_textStyle_ovup7l_k$ = function (_set____db54di) {
    this.textStyle_1 = _set____db54di;
  };
  protoOf(ParagraphBuilder_0).get_textStyle_8tt25h_k$ = function () {
    return this.textStyle_1;
  };
  protoOf(ParagraphBuilder_0).set_brushSize_u1ysdq_k$ = function (_set____db54di) {
    this.brushSize_1 = _set____db54di;
  };
  protoOf(ParagraphBuilder_0).get_brushSize_5w3nu2_k$ = function () {
    return this.brushSize_1;
  };
  protoOf(ParagraphBuilder_0).set_ellipsis_iwgwtg_k$ = function (_set____db54di) {
    this.ellipsis_1 = _set____db54di;
  };
  protoOf(ParagraphBuilder_0).get_ellipsis_sol6jq_k$ = function () {
    return this.ellipsis_1;
  };
  protoOf(ParagraphBuilder_0).set_maxLines_r9wcpc_k$ = function (_set____db54di) {
    this.maxLines_1 = _set____db54di;
  };
  protoOf(ParagraphBuilder_0).get_maxLines_pclpoc_k$ = function () {
    return this.maxLines_1;
  };
  protoOf(ParagraphBuilder_0).set_annotations_ffawqx_k$ = function (_set____db54di) {
    this.annotations_1 = _set____db54di;
  };
  protoOf(ParagraphBuilder_0).get_annotations_20dirp_k$ = function () {
    return this.annotations_1;
  };
  protoOf(ParagraphBuilder_0).get_placeholders_r4ppyh_k$ = function () {
    return this.placeholders_1;
  };
  protoOf(ParagraphBuilder_0).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(ParagraphBuilder_0).get_textDirection_cl6v6f_k$ = function () {
    return this.textDirection_1;
  };
  protoOf(ParagraphBuilder_0).set_drawStyle_e0kgyj_k$ = function (_set____db54di) {
    this.drawStyle_1 = _set____db54di;
  };
  protoOf(ParagraphBuilder_0).get_drawStyle_arbehw_k$ = function () {
    return this.drawStyle_1;
  };
  protoOf(ParagraphBuilder_0).set_blendMode_1e5m6b_k$ = function (_set____db54di) {
    this.blendMode_1 = _set____db54di;
  };
  protoOf(ParagraphBuilder_0).get_blendMode_si209t_k$ = function () {
    return this.blendMode_1;
  };
  protoOf(ParagraphBuilder_0).updateForegroundPaint_1obvx3_k$ = function (paragraph) {
    if (paragraph == null)
      return Unit_getInstance();
    prepareDefaultStyle(this);
    var foregroundPaint = this.defaultStyle_1.getForegroundPaint_i2n3vf_k$();
    paragraph.updateForegroundPaint_57lryv_k$(0, this.text_1.length, foregroundPaint);
  };
  protoOf(ParagraphBuilder_0).build_1k0s4u_k$ = function () {
    prepareDefaultStyle(this);
    this.ops_1 = makeOps(this, this.annotations_1, this.placeholders_1);
    var pos = 0;
    var ps = textStyleToParagraphStyle(this, this.textStyle_1, this.defaultStyle_1);
    if (!(this.maxLines_1 === 2147483647)) {
      ps.set_maxLinesCount_v5fbw1_k$(this.maxLines_1);
      ps.set_ellipsis_7c9ky1_k$(this.ellipsis_1);
    }
    var tmp = this.fontFamilyResolver_1;
    var platformFontLoader = (tmp instanceof FontFamilyResolverImpl ? tmp : THROW_CCE()).get_platformFontLoader_nzyzw9_k$();
    var tmp_0;
    if (platformFontLoader instanceof SkiaFontLoader) {
      tmp_0 = platformFontLoader.get_fontCollection_kf4vje_k$();
    } else {
      throw IllegalStateException_init_$Create$_0('Unsupported font loader ' + toString_0(platformFontLoader));
    }
    var fontCollection = tmp_0;
    var pb = new ParagraphBuilder(ps, fontCollection);
    var addText = true;
    var _iterator__ex2g4s = _get_ops__e6e97j(this).iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var op = _iterator__ex2g4s.next_20eer_k$();
      if (addText && pos < op.get_position_jfponi_k$()) {
        pb.addText_gwm184_k$(toString_0(substring(this.text_1, pos, op.get_position_jfponi_k$())));
      }
      if (op instanceof StyleAdd) {
        var tmp_1 = op.style_1.fontFamily_1;
        var tmp2_elvis_lhs = op.style_1.fontWeight_1;
        var tmp_2 = tmp2_elvis_lhs == null ? Companion_getInstance_33().get_Normal_22avww_k$() : tmp2_elvis_lhs;
        var tmp3_elvis_lhs = op.style_1.fontStyle_1;
        var tmp_3;
        var tmp_4 = tmp3_elvis_lhs;
        if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
          tmp_3 = Companion_getInstance_31().get_Normal_tevh6u_k$();
        } else {
          tmp_3 = tmp3_elvis_lhs;
        }
        var tmp_5 = tmp_3;
        var tmp4_elvis_lhs = op.style_1.fontSynthesis_1;
        var tmp_6;
        var tmp_7 = tmp4_elvis_lhs;
        if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
          tmp_6 = Companion_getInstance_32().get_All_bqi34r_k$();
        } else {
          tmp_6 = tmp4_elvis_lhs;
        }
        this.fontFamilyResolver_1.resolve_q3h1fi_k$(tmp_1, tmp_2, tmp_5, tmp_6);
        pb.pushStyle_psv2ye_k$(makeSkTextStyle(this, op.style_1));
      } else {
        if (op instanceof PutPlaceholder) {
          var placeholderStyle = new PlaceholderStyle(op.width_1, op.height_1, toSkPlaceholderAlignment(op.cut_1.placeholder_1.get_placeholderVerticalAlign_kmyoon_k$()), BaselineMode_ALPHABETIC_getInstance(), 0.0);
          pb.addPlaceholder_rs6avq_k$(placeholderStyle);
          addText = false;
        } else {
          if (op instanceof EndPlaceholder) {
            addText = true;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      pos = op.get_position_jfponi_k$();
    }
    if (addText && pos < this.text_1.length) {
      pb.addText_gwm184_k$(toString_0(substring(this.text_1, pos, this.text_1.length)));
    }
    return pb.build_1k0s4u_k$();
  };
  protoOf(ParagraphBuilder_0).get_defaultFont_z3udsu_k$ = function () {
    var tmp0 = this.defaultFont$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('defaultFont', 1, tmp, ParagraphBuilder$_get_defaultFont_$ref_9jivqf(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(ParagraphBuilder_0).emptyLineMetrics_psf5q3_k$ = function (paragraph) {
    var metrics = this.get_defaultFont_z3udsu_k$().get_metrics_h2mme2_k$();
    var ascent = metrics.get_ascent_b435cz_k$();
    var descent = metrics.get_descent_r0gq8h_k$();
    var baseline = paragraph.get_alphabeticBaseline_rczsqt_k$();
    var lineHeight = this.defaultStyle_1.lineHeight_1;
    if (!(lineHeight == null)) {
      var topRatio = this.defaultStyle_1.topRatio_1;
      if (0.0 <= topRatio ? topRatio <= 1.0 : false) {
        var extraLeading = lineHeight - this.defaultStyle_1.fontSize_1;
        ascent = ascent - extraLeading * topRatio;
        descent = descent + extraLeading * (1.0 - topRatio);
      } else {
        var multiplier = lineHeight / this.defaultStyle_1.fontSize_1;
        ascent = ascent * multiplier;
        descent = descent * multiplier;
      }
    }
    var height = descent - ascent;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [new LineMetrics(0, 0, 0, 0, true, -ascent, descent, ascent, height, 0.0, 0.0, baseline, 0)];
  };
  function copyWithDefaultFontSize(_this__u8e3s4, drawStyle) {
    drawStyle = drawStyle === VOID ? null : drawStyle;
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var fontSize = orDefaultFontSize(_this__u8e3s4.get_fontSize_ergf2z_k$());
    var tmp;
    if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4.get_letterSpacing_k79xfu_k$())) {
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var other = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4.get_letterSpacing_k79xfu_k$());
      checkArithmetic(fontSize);
      tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(fontSize), _TextUnit___get_value__impl__hpbx0k(fontSize) * other);
    } else {
      tmp = _this__u8e3s4.get_letterSpacing_k79xfu_k$();
    }
    var letterSpacing = tmp;
    return _this__u8e3s4.copy$default_ihj4g5_k$(VOID, fontSize, VOID, VOID, VOID, VOID, VOID, letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, drawStyle);
  }
  function toSkPlaceholderAlignment(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    if (_this__u8e3s4 === Companion_getInstance_19().get_AboveBaseline_nu267x_k$()) {
      tmp = PlaceholderAlignment_ABOVE_BASELINE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_19().get_TextTop_v4gasj_k$()) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_19().get_TextBottom_m8es0r_k$()) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_19().get_TextCenter_yh3hyp_k$()) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_19().get_Top_4ethrk_k$()) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_19().get_Bottom_aqwfjc_k$()) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_19().get_Center_mzl5ha_k$()) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else {
      var message = 'Invalid PlaceholderVerticalAlign.';
      throw IllegalStateException_init_$Create$_0(toString_0(message));
    }
    return tmp;
  }
  function toSkAlignment(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_51().get_Left_seblku_k$() ? Alignment_LEFT_getInstance() : _this__u8e3s4 === Companion_getInstance_51().get_Right_dlwl8f_k$() ? Alignment_RIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_51().get_Center_fp5t1o_k$() ? Alignment_CENTER_getInstance() : _this__u8e3s4 === Companion_getInstance_51().get_Justify_uf64z9_k$() ? Alignment_JUSTIFY_getInstance() : _this__u8e3s4 === Companion_getInstance_51().get_Start_ovf7qx_k$() ? Alignment_START_getInstance() : _this__u8e3s4 === Companion_getInstance_51().get_End_ck95sw_k$() ? Alignment_END_getInstance() : Alignment_START_getInstance();
  }
  function toHeightMode(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_47().get_Both_9h9iq2_k$() ? HeightMode_DISABLE_ALL_getInstance() : _this__u8e3s4 === Companion_getInstance_47().get_FirstLineTop_kxvhiy_k$() ? HeightMode_DISABLE_FIRST_ASCENT_getInstance() : _this__u8e3s4 === Companion_getInstance_47().get_LastLineBottom_9prepu_k$() ? HeightMode_DISABLE_LAST_DESCENT_getInstance() : _this__u8e3s4 === Companion_getInstance_47().get_None_najgov_k$() ? HeightMode_ALL_getInstance() : HeightMode_DISABLE_ALL_getInstance();
  }
  function toSkDirection(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    switch (_this__u8e3s4.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = Direction_LTR_getInstance();
        break;
      case 1:
        tmp = Direction_RTL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function resolveFontFamily(_this__u8e3s4, fontFamilyResolver) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp0_safe_receiver = _this__u8e3s4.get_fontFamily_ulphcs_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_elvis_lhs = _this__u8e3s4.get_fontWeight_wbif2o_k$();
      var tmp_0 = tmp0_elvis_lhs == null ? Companion_getInstance_33().get_Normal_22avww_k$() : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = _this__u8e3s4.get_fontStyle_hzv4zg_k$();
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_31().get_Normal_tevh6u_k$();
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var tmp_3 = tmp_1;
      var tmp2_elvis_lhs = _this__u8e3s4.get_fontSynthesis_h5auiy_k$();
      var tmp_4;
      var tmp_5 = tmp2_elvis_lhs;
      if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
        tmp_4 = Companion_getInstance_32().get_All_bqi34r_k$();
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var tmp_6 = fontFamilyResolver.resolve_q3h1fi_k$(tmp0_safe_receiver, tmp_0, tmp_3, tmp_4).get_value_j01efc_k$();
      tmp = tmp_6 instanceof FontLoadResult ? tmp_6 : THROW_CCE();
    }
    return tmp;
  }
  function orDefaultFontSize(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(_this__u8e3s4), new Long(0, 0))) {
      tmp = get_DefaultFontSize_0();
    } else {
      if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
        var tmp0 = get_DefaultFontSize_0();
        // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
        var other = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4);
        checkArithmetic(tmp0);
        tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(tmp0), _TextUnit___get_value__impl__hpbx0k(tmp0) * other);
      } else {
        tmp = _this__u8e3s4;
      }
    }
    return tmp;
  }
  var properties_initialized_ParagraphBuilder_skiko_kt_5j6rti;
  function _init_properties_ParagraphBuilder_skiko_kt__fblzyk() {
    if (!properties_initialized_ParagraphBuilder_skiko_kt_5j6rti) {
      properties_initialized_ParagraphBuilder_skiko_kt_5j6rti = true;
      DefaultFontSize_0 = get_sp_0(16);
      skTextStylesCache = new NoCache();
      androidx_compose_ui_text_platform_ParagraphBuilder_Op_StyleAdd$stable = 8;
      androidx_compose_ui_text_platform_ParagraphBuilder_Op_PutPlaceholder$stable = 8;
      androidx_compose_ui_text_platform_ParagraphBuilder_Op_EndPlaceholder$stable = 8;
      androidx_compose_ui_text_platform_ParagraphBuilder_Cut_StyleAdd$stable = 0;
      androidx_compose_ui_text_platform_ParagraphBuilder_Cut_StyleRemove$stable = 0;
      androidx_compose_ui_text_platform_ParagraphBuilder_Cut_PutPlaceholder$stable = 0;
      androidx_compose_ui_text_platform_ParagraphBuilder_Cut_EndPlaceholder$stable = 0;
      androidx_compose_ui_text_platform_ParagraphBuilder$stable = 8;
    }
  }
  var androidx_compose_ui_text_platform_ParagraphLayouter$stable;
  function _get_builder__bi005y($this) {
    return $this.builder_1;
  }
  function _set_paragraphCache__j6hfz1($this, _set____db54di) {
    $this.paragraphCache_1 = _set____db54di;
  }
  function _get_paragraphCache__6cm02f($this) {
    return $this.paragraphCache_1;
  }
  function _set_updateForeground__qssnsb($this, _set____db54di) {
    $this.updateForeground_1 = _set____db54di;
  }
  function _get_updateForeground__f57541($this) {
    return $this.updateForeground_1;
  }
  function _set_width__mibry7($this, _set____db54di) {
    $this.width_1 = _set____db54di;
  }
  function _get_width__9isoj9($this) {
    return $this.width_1;
  }
  function invalidateParagraph($this, onlyForeground) {
    if (onlyForeground && $this.builder_1.get_annotations_20dirp_k$().isEmpty_y1axqb_k$()) {
      $this.updateForeground_1 = true;
    } else {
      $this.paragraphCache_1 = null;
    }
  }
  function invalidateParagraph$default($this, onlyForeground, $super) {
    onlyForeground = onlyForeground === VOID ? false : onlyForeground;
    return invalidateParagraph($this, onlyForeground);
  }
  function ParagraphLayouter(text, textDirection, style, annotations, placeholders, density, fontFamilyResolver) {
    this.text_1 = text;
    this.builder_1 = new ParagraphBuilder_0(fontFamilyResolver, this.text_1, style, VOID, VOID, VOID, annotations, placeholders, density, textDirection);
    this.paragraphCache_1 = null;
    this.updateForeground_1 = false;
    this.width_1 = NaN;
  }
  protoOf(ParagraphLayouter).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(ParagraphLayouter).get_defaultFont_6nsy4n_k$ = function () {
    return this.builder_1.get_defaultFont_z3udsu_k$();
  };
  protoOf(ParagraphLayouter).get_textStyle_8tt25h_k$ = function () {
    return this.builder_1.get_textStyle_8tt25h_k$();
  };
  protoOf(ParagraphLayouter).emptyLineMetrics_psf5q3_k$ = function (paragraph) {
    return this.builder_1.emptyLineMetrics_psf5q3_k$(paragraph);
  };
  protoOf(ParagraphLayouter).setParagraphStyle_hogelz_k$ = function (maxLines, ellipsis) {
    if (!(this.builder_1.get_maxLines_pclpoc_k$() === maxLines) || !(this.builder_1.get_ellipsis_sol6jq_k$() === ellipsis)) {
      this.builder_1.set_maxLines_r9wcpc_k$(maxLines);
      this.builder_1.set_ellipsis_iwgwtg_k$(ellipsis);
      invalidateParagraph$default(this);
    }
  };
  protoOf(ParagraphLayouter).setColor_1w50qq_k$ = function (color) {
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = color;
    } else {
      tmp = this.builder_1.get_textStyle_8tt25h_k$().get_color_lnp1vl_k$();
    }
    var actualColor = tmp;
    if (!equals(this.builder_1.get_textStyle_8tt25h_k$().get_color_lnp1vl_k$(), actualColor)) {
      this.builder_1.set_textStyle_ovup7l_k$(this.builder_1.get_textStyle_8tt25h_k$().copy$default_p0dymp_k$(actualColor));
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).setBrush_31k9q3_k$ = function (brush, brushSize, alpha) {
    var actualSize = this.builder_1.get_brushSize_5w3nu2_k$();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (!equals(this.builder_1.get_textStyle_8tt25h_k$().get_brush_ipcjyp_k$(), brush)) {
      tmp_2 = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
      tmp_2 = equalsLong(_Size___get_packedValue__impl__7rlt1o(actualSize), new Long(2143289344, 2143289344));
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o(actualSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_3 = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(brushSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(shiftRight(value_0, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$8 = floatFromBits(bits_0);
      tmp_1 = !sameValueAs(tmp_3, tmp$ret$8);
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_1 = _Size___get_packedValue__impl__7rlt1o(actualSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_4 = floatFromBits(bits_1);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Size___get_packedValue__impl__7rlt1o(brushSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$16 = floatFromBits(bits_2);
      tmp_0 = !sameValueAs(tmp_4, tmp$ret$16);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !sameValueAs(this.builder_1.get_textStyle_8tt25h_k$().get_alpha_iooth1_k$(), alpha);
    }
    if (tmp) {
      this.builder_1.set_textStyle_ovup7l_k$(this.builder_1.get_textStyle_8tt25h_k$().copy$default_80dgob_k$(brush, alpha));
      this.builder_1.set_brushSize_u1ysdq_k$(brushSize);
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).setBrushSize_muvgz7_k$ = function (brushSize) {
    if (!equals(this.builder_1.get_brushSize_5w3nu2_k$(), brushSize)) {
      this.builder_1.set_brushSize_u1ysdq_k$(brushSize);
      var tmp;
      var tmp_0 = this.builder_1.get_textStyle_8tt25h_k$().get_brush_ipcjyp_k$();
      if (tmp_0 instanceof ShaderBrush) {
        tmp = true;
      } else {
        var tmp0 = this.builder_1.get_annotations_20dirp_k$();
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
              var tmp_1;
              var tmp_2 = item.get_item_woo5lo_k$();
              if (tmp_2 instanceof SpanStyle) {
                var tmp_3 = item.get_item_woo5lo_k$().get_brush_ipcjyp_k$();
                tmp_1 = tmp_3 instanceof ShaderBrush;
              } else {
                tmp_1 = false;
              }
              if (tmp_1) {
                tmp$ret$1 = true;
                break $l$block;
              }
            }
             while (inductionVariable <= last);
          tmp$ret$1 = false;
        }
        tmp = tmp$ret$1;
      }
      if (tmp) {
        invalidateParagraph(this, true);
      }
    }
  };
  protoOf(ParagraphLayouter).setTextStyle_digld9_k$ = function (shadow, textDecoration) {
    if (!equals(this.builder_1.get_textStyle_8tt25h_k$().get_shadow_jgtb8p_k$(), shadow) || !equals(this.builder_1.get_textStyle_8tt25h_k$().get_textDecoration_itgjwm_k$(), textDecoration)) {
      this.builder_1.set_textStyle_ovup7l_k$(this.builder_1.get_textStyle_8tt25h_k$().copy$default_p0dymp_k$(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow));
      invalidateParagraph$default(this);
    }
  };
  protoOf(ParagraphLayouter).setDrawStyle_16xwa2_k$ = function (drawStyle) {
    if (!equals(this.builder_1.get_drawStyle_arbehw_k$(), drawStyle)) {
      this.builder_1.set_drawStyle_e0kgyj_k$(drawStyle);
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).setBlendMode_61cb32_k$ = function (blendMode) {
    if (!(this.builder_1.get_blendMode_si209t_k$() === blendMode)) {
      this.builder_1.set_blendMode_1e5m6b_k$(blendMode);
      invalidateParagraph$default(this);
    }
  };
  protoOf(ParagraphLayouter).layoutParagraph_6xbnfw_k$ = function (width) {
    var paragraph = this.paragraphCache_1;
    var tmp;
    if (!(paragraph == null)) {
      var layoutRequired = false;
      if (this.updateForeground_1) {
        this.builder_1.updateForegroundPaint_1obvx3_k$(paragraph);
        this.updateForeground_1 = false;
        paragraph.markDirty_fy9zp7_k$();
        layoutRequired = true;
      }
      if (!sameValueAs(this.width_1, width)) {
        this.width_1 = width;
        layoutRequired = true;
      }
      if (layoutRequired) {
        paragraph.layout_x0f0tu_k$(width);
      }
      tmp = paragraph;
    } else {
      paragraph = this.builder_1.build_1k0s4u_k$();
      paragraph.layout_x0f0tu_k$(width);
      this.paragraphCache_1 = paragraph;
      this.updateForeground_1 = false;
      return paragraph;
    }
    return tmp;
  };
  function sameValueAs(_this__u8e3s4, other) {
    // Inline function 'kotlin.math.abs' call
    var x = _this__u8e3s4 - other;
    return Math.abs(x) < 1.0E-5;
  }
  function get_GenericFontFamiliesMapping() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp0 = GenericFontFamiliesMapping$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('GenericFontFamiliesMapping', 0, tmp, _get_GenericFontFamiliesMapping_$ref_opq6z8(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var GenericFontFamiliesMapping$delegate;
  var androidx_compose_ui_text_platform_SystemFont$stable;
  var androidx_compose_ui_text_platform_LoadedFont$stable;
  var androidx_compose_ui_text_platform_FontLoader$stable;
  var androidx_compose_ui_text_platform_FontLoadResult$stable;
  var androidx_compose_ui_text_platform_FontCache$stable;
  function Font_0(identity, data, weight, style) {
    weight = weight === VOID ? Companion_getInstance_33().get_Normal_22avww_k$() : weight;
    style = style === VOID ? Companion_getInstance_31().get_Normal_tevh6u_k$() : style;
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    return Font_1(identity, Font$lambda(data), weight, style, new Settings([]));
  }
  function _get_fontCache__rq14qm_0($this) {
    var tmp0 = $this.fontCache$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('fontCache', 1, tmp, FontLoader$_get_fontCache_$ref_6slm39(), null);
    return tmp0.get_value_j01efc_k$();
  }
  function FontLoader$fontCache$delegate$lambda() {
    return new FontCache();
  }
  function FontLoader$_get_fontCache_$ref_6slm39() {
    return function (p0) {
      return _get_fontCache__rq14qm_0(p0);
    };
  }
  function FontLoader$fontFamilyResolver$delegate$lambda(this$0) {
    return function () {
      return createFontFamilyResolver_0(_get_fontCache__rq14qm_0(this$0));
    };
  }
  function FontLoader$_get_fontFamilyResolver_$ref_dhho9p() {
    return function (p0) {
      return p0.get_fontFamilyResolver_mb6mg3_k$();
    };
  }
  function FontLoader() {
    var tmp = this;
    tmp.fontCache$delegate_1 = lazy_0(FontLoader$fontCache$delegate$lambda);
    var tmp_0 = this;
    tmp_0.fontFamilyResolver$delegate_1 = lazy_0(FontLoader$fontFamilyResolver$delegate$lambda(this));
  }
  protoOf(FontLoader).get_fontFamilyResolver_mb6mg3_k$ = function () {
    var tmp0 = this.fontFamilyResolver$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('fontFamilyResolver', 1, tmp, FontLoader$_get_fontFamilyResolver_$ref_dhho9p(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(FontLoader).load_1hfgn9_k$ = function (font) {
    if (!(font instanceof PlatformFont)) {
      throw IllegalArgumentException_init_$Create$_0('Unsupported font type: ' + toString_0(font));
    }
    return ensureNotNull(_get_fontCache__rq14qm_0(this).load_tfy6fd_k$(font).typeface_1);
  };
  function FontLoadResult(typeface, aliases) {
    this.typeface_1 = typeface;
    this.aliases_1 = aliases;
  }
  protoOf(FontLoadResult).get_typeface_s1tqao_k$ = function () {
    return this.typeface_1;
  };
  protoOf(FontLoadResult).get_aliases_duxpez_k$ = function () {
    return this.aliases_1;
  };
  var Platform_Unknown_instance;
  var Platform_Linux_instance;
  var Platform_Windows_instance;
  var Platform_MacOS_instance;
  var Platform_IOS_instance;
  var Platform_TvOS_instance;
  var Platform_WatchOS_instance;
  var Platform_Android_instance;
  function values_3() {
    return [Platform_Unknown_getInstance(), Platform_Linux_getInstance(), Platform_Windows_getInstance(), Platform_MacOS_getInstance(), Platform_IOS_getInstance(), Platform_TvOS_getInstance(), Platform_WatchOS_getInstance(), Platform_Android_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'Unknown':
        return Platform_Unknown_getInstance();
      case 'Linux':
        return Platform_Linux_getInstance();
      case 'Windows':
        return Platform_Windows_getInstance();
      case 'MacOS':
        return Platform_MacOS_getInstance();
      case 'IOS':
        return Platform_IOS_getInstance();
      case 'TvOS':
        return Platform_TvOS_getInstance();
      case 'WatchOS':
        return Platform_WatchOS_getInstance();
      case 'Android':
        return Platform_Android_getInstance();
      default:
        Platform_initEntries();
        THROW_IAE('No enum constant androidx.compose.ui.text.platform.Platform.' + value);
        break;
    }
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_getInstance();
    Platform_entriesInitialized = true;
    Platform_Unknown_instance = new Platform('Unknown', 0);
    Platform_Linux_instance = new Platform('Linux', 1);
    Platform_Windows_instance = new Platform('Windows', 2);
    Platform_MacOS_instance = new Platform('MacOS', 3);
    Platform_IOS_instance = new Platform('IOS', 4);
    Platform_TvOS_instance = new Platform('TvOS', 5);
    Platform_WatchOS_instance = new Platform('WatchOS', 6);
    Platform_Android_instance = new Platform('Android', 7);
  }
  var $ENTRIES_3;
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Font_1(identity, getData, weight, style, variationSettings) {
    weight = weight === VOID ? Companion_getInstance_33().get_Normal_22avww_k$() : weight;
    style = style === VOID ? Companion_getInstance_31().get_Normal_tevh6u_k$() : style;
    variationSettings = variationSettings === VOID ? FontVariation_getInstance().Settings_m8l6ta_k$(weight, style, []) : variationSettings;
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    return new LoadedFont(identity, getData, weight, style, variationSettings);
  }
  function _get_fontProvider__mhw44r($this) {
    return $this.fontProvider_1;
  }
  function _get_registered__4jyert($this) {
    return $this.registered_1;
  }
  function _get_typefacesCache__6c5nz9($this) {
    return $this.typefacesCache_1;
  }
  function ensureRegistered($this, typeface, key) {
    if (!$this.registered_1.contains_aljjnj_k$(key)) {
      $this.fontProvider_1.registerTypeface_y1keh7_k$(typeface, key);
      $this.registered_1.add_utx5q5_k$(key);
    }
  }
  function ensureRegistered_0($this, fontFamily) {
    var tmp;
    if (fontFamily instanceof FontListFontFamily) {
      // Inline function 'androidx.compose.ui.util.fastMapNotNull' call
      var this_0 = fontFamily.get_fonts_irho7v_k$();
      var target = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = this_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.get_c1px32_k$(index);
          var tmp_0;
          if (item instanceof SystemFont) {
            tmp_0 = item.identity_1;
          } else {
            tmp_0 = null;
          }
          var tmp0_safe_receiver = tmp_0;
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.collections.plusAssign' call
            target.add_utx5q5_k$(tmp0_safe_receiver);
          }
        }
         while (inductionVariable <= last);
      var fonts = target;
      var tmp_1;
      if (fonts.get_size_woubt6_k$() === fontFamily.get_fonts_irho7v_k$().get_size_woubt6_k$()) {
        tmp_1 = fonts;
      } else {
        throw IllegalArgumentException_init_$Create$_0("Don't load FontListFontFamily through ensureRegistered: " + fontFamily.toString());
      }
      tmp = tmp_1;
    } else {
      if (fontFamily instanceof LoadedFontFamily) {
        var tmp_2 = fontFamily.get_typeface_s1tqao_k$();
        var typeface = tmp_2 instanceof SkiaBackedTypeface ? tmp_2 : THROW_CCE();
        ensureRegistered($this, typeface.nativeTypeface_1, typeface.alias_1);
        tmp = listOf_0(typeface.alias_1);
      } else {
        if (fontFamily instanceof GenericFontFamily) {
          tmp = get_aliases(fontFamily);
        } else {
          if (fontFamily instanceof DefaultFontFamily) {
            tmp = get_aliases(Companion_getInstance_27().get_SansSerif_4qz17l_k$());
          } else {
            throw IllegalArgumentException_init_$Create$_0('Unknown font family type: ' + toString_0(fontFamily));
          }
        }
      }
    }
    return tmp;
  }
  function FontCache$load$lambda($font) {
    return function (it) {
      return loadTypeface($font);
    };
  }
  function FontCache() {
    this.fonts_1 = FontCollection_init_$Create$();
    this.fontProvider_1 = TypefaceFontProviderWithFallback_init_$Create$();
    this.registered_1 = HashSet_init_$Create$();
    this.typefacesCache_1 = new ExpireAfterAccessCache(new Long(-129542144, 13));
    this.fonts_1.setDefaultFontManager_gweqxp_k$(new FontMgrWithFallback(this.fontProvider_1));
    this.fonts_1.setAssetFontManager_9z4eus_k$(this.fontProvider_1);
  }
  protoOf(FontCache).get_fonts_76fd56_k$ = function () {
    return this.fonts_1;
  };
  protoOf(FontCache).load_tfy6fd_k$ = function (font) {
    var tmp = font.get_cacheKey_x4yjmp_k$();
    var typeface = this.typefacesCache_1.get_c3034i_k$(tmp, FontCache$load$lambda(font));
    ensureRegistered(this, typeface, font.get_cacheKey_x4yjmp_k$());
    return new FontLoadResult(typeface, listOf_0(font.get_cacheKey_x4yjmp_k$()));
  };
  protoOf(FontCache).loadPlatformTypes_8w4ti1_k$ = function (fontFamily, fontWeight, fontStyle) {
    var aliases = ensureRegistered_0(this, fontFamily);
    var style = toSkFontStyle(fontStyle).withWeight_ue6mre_k$(fontWeight.get_weight_lbhkzl_k$());
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(aliases);
    return new FontLoadResult(first_0(this.fonts_1.findTypefaces_448rqd_k$(tmp$ret$0, style)), aliases);
  };
  protoOf(FontCache).loadPlatformTypes$default_hk2gnw_k$ = function (fontFamily, fontWeight, fontStyle, $super) {
    fontWeight = fontWeight === VOID ? Companion_getInstance_33().get_Normal_22avww_k$() : fontWeight;
    fontStyle = fontStyle === VOID ? Companion_getInstance_31().get_Normal_tevh6u_k$() : fontStyle;
    return $super === VOID ? this.loadPlatformTypes_8w4ti1_k$(fontFamily, fontWeight, fontStyle) : $super.loadPlatformTypes_8w4ti1_k$.call(this, fontFamily, fontWeight, new FontStyle(fontStyle));
  };
  function LoadedFont_init_$Init$(identity, getData, weight, style, $this) {
    LoadedFont.call($this, identity, getData, weight, style, new Settings([]));
    return $this;
  }
  function LoadedFont_init_$Create$(identity, getData, weight, style) {
    return LoadedFont_init_$Init$(identity, getData, weight, style, objectCreate(protoOf(LoadedFont)));
  }
  function LoadedFont(identity, getData, weight, style, variationSettings) {
    variationSettings = variationSettings === VOID ? FontVariation_getInstance().Settings_m8l6ta_k$(weight, style, []) : variationSettings;
    PlatformFont.call(this);
    this.identity_1 = identity;
    this.getData_1 = getData;
    this.weight_1 = weight;
    this.style_1 = style;
    this.variationSettings_1 = variationSettings;
    this.loadingStrategy_1 = Companion_getInstance_30().get_Blocking_7mu9wm_k$();
  }
  protoOf(LoadedFont).get_identity_y1rl2x_k$ = function () {
    return this.identity_1;
  };
  protoOf(LoadedFont).get_getData_99pii6_k$ = function () {
    return this.getData_1;
  };
  protoOf(LoadedFont).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(LoadedFont).get_style_fnlxse_k$ = function () {
    return this.style_1;
  };
  protoOf(LoadedFont).get_variationSettings_dq3vpv_k$ = function () {
    return this.variationSettings_1;
  };
  protoOf(LoadedFont).get_loadingStrategy_s3fce_k$ = function () {
    return this.loadingStrategy_1;
  };
  protoOf(LoadedFont).get_data_wokkxf_k$ = function () {
    return this.getData_1();
  };
  protoOf(LoadedFont).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LoadedFont))
      return false;
    if (!(this.identity_1 === other.identity_1))
      return false;
    if (!this.weight_1.equals(other.weight_1))
      return false;
    if (!(this.style_1 === other.style_1))
      return false;
    return equals(this.variationSettings_1.get_settings_82sm50_k$(), other.variationSettings_1.get_settings_82sm50_k$());
  };
  protoOf(LoadedFont).hashCode = function () {
    var result = getStringHashCode(this.identity_1);
    result = imul(31, result) + this.weight_1.hashCode() | 0;
    result = imul(31, result) + FontStyle__hashCode_impl_7qhg4w(this.style_1) | 0;
    result = imul(31, result) + hashCode(this.variationSettings_1.get_settings_82sm50_k$()) | 0;
    return result;
  };
  protoOf(LoadedFont).toString = function () {
    return "LoadedFont(identity='" + this.identity_1 + "', weight=" + this.weight_1.toString() + ', style=' + FontStyle__toString_impl_thncxr(this.style_1) + ', variationSettings=' + toString_0(this.variationSettings_1.get_settings_82sm50_k$()) + ')';
  };
  function SystemFont_init_$Init$(identity, weight, style, $this) {
    weight = weight === VOID ? Companion_getInstance_33().get_Normal_22avww_k$() : weight;
    style = style === VOID ? Companion_getInstance_31().get_Normal_tevh6u_k$() : style;
    SystemFont.call($this, identity, weight, style, new Settings([]));
    return $this;
  }
  function SystemFont_init_$Create$(identity, weight, style) {
    return SystemFont_init_$Init$(identity, weight, style, objectCreate(protoOf(SystemFont)));
  }
  function SystemFont(identity, weight, style, variationSettings) {
    weight = weight === VOID ? Companion_getInstance_33().get_Normal_22avww_k$() : weight;
    style = style === VOID ? Companion_getInstance_31().get_Normal_tevh6u_k$() : style;
    variationSettings = variationSettings === VOID ? FontVariation_getInstance().Settings_m8l6ta_k$(weight, style, []) : variationSettings;
    PlatformFont.call(this);
    this.identity_1 = identity;
    this.weight_1 = weight;
    this.style_1 = style;
    this.variationSettings_1 = variationSettings;
  }
  protoOf(SystemFont).get_identity_y1rl2x_k$ = function () {
    return this.identity_1;
  };
  protoOf(SystemFont).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(SystemFont).get_style_fnlxse_k$ = function () {
    return this.style_1;
  };
  protoOf(SystemFont).get_variationSettings_dq3vpv_k$ = function () {
    return this.variationSettings_1;
  };
  protoOf(SystemFont).toString = function () {
    return "SystemFont(identity='" + this.identity_1 + "', weight=" + this.weight_1.toString() + ', style=' + FontStyle__toString_impl_thncxr(this.style_1) + ', variationSettings=' + toString_0(this.variationSettings_1.get_settings_82sm50_k$()) + ')';
  };
  function SkiaBackedTypeface(alias, nativeTypeface) {
    this.nativeTypeface_1 = nativeTypeface;
    var tmp = this;
    tmp.alias_1 = alias == null ? this.nativeTypeface_1.get_familyName_6ytaaw_k$() : alias;
    this.fontFamily_1 = null;
  }
  protoOf(SkiaBackedTypeface).get_nativeTypeface_sttuqf_k$ = function () {
    return this.nativeTypeface_1;
  };
  protoOf(SkiaBackedTypeface).get_alias_iooo4n_k$ = function () {
    return this.alias_1;
  };
  protoOf(SkiaBackedTypeface).get_fontFamily_ulphcs_k$ = function () {
    return this.fontFamily_1;
  };
  function get_aliases(_this__u8e3s4) {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp0_elvis_lhs = get_GenericFontFamiliesMapping().get_wei43m_k$(_this__u8e3s4.get_name_woqyms_k$());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Unknown generic font family ' + _this__u8e3s4.get_name_woqyms_k$();
      throw IllegalStateException_init_$Create$_0(toString_0(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cloneWithVariationSettings(_this__u8e3s4, variationSettings) {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    if (variationSettings.get_settings_82sm50_k$().isEmpty_y1axqb_k$())
      return _this__u8e3s4;
    var variations = toSkiaFontVariationList(variationSettings);
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(variations);
    return _this__u8e3s4.makeClone$default_6gmwks_k$(tmp$ret$0);
  }
  function toSkiaFontVariationList(_this__u8e3s4) {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = _this__u8e3s4.get_settings_82sm50_k$();
    var target = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = FontVariation_init_$Create$(item.get_axisName_uvfbth_k$(), item.toVariationValue_jfsfyi_k$(null));
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function GenericFontFamiliesMapping$delegate$lambda() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp;
    switch (currentPlatform().get_ordinal_ip24qg_k$()) {
      case 1:
        tmp = mapOf([to(Companion_getInstance_27().get_SansSerif_4qz17l_k$().get_name_woqyms_k$(), listOf(['Noto Sans', 'DejaVu Sans', 'Arial'])), to(Companion_getInstance_27().get_Serif_igv9ro_k$().get_name_woqyms_k$(), listOf(['Noto Serif', 'DejaVu Serif', 'Times New Roman'])), to(Companion_getInstance_27().get_Monospace_hz2yii_k$().get_name_woqyms_k$(), listOf(['Noto Sans Mono', 'DejaVu Sans Mono', 'Consolas'])), to(Companion_getInstance_27().get_Cursive_nlhumc_k$().get_name_woqyms_k$(), listOf_0('Comic Sans MS'))]);
        break;
      case 2:
        tmp = mapOf([to(Companion_getInstance_27().get_SansSerif_4qz17l_k$().get_name_woqyms_k$(), listOf(['Segoe UI', 'Arial'])), to(Companion_getInstance_27().get_Serif_igv9ro_k$().get_name_woqyms_k$(), listOf_0('Times New Roman')), to(Companion_getInstance_27().get_Monospace_hz2yii_k$().get_name_woqyms_k$(), listOf_0('Consolas')), to(Companion_getInstance_27().get_Cursive_nlhumc_k$().get_name_woqyms_k$(), listOf_0('Comic Sans MS'))]);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        tmp = mapOf([to(Companion_getInstance_27().get_SansSerif_4qz17l_k$().get_name_woqyms_k$(), listOf(['.AppleSystemUIFont', 'Helvetica Neue', 'Helvetica'])), to(Companion_getInstance_27().get_Serif_igv9ro_k$().get_name_woqyms_k$(), listOf(['.AppleSystemUIFontSerif', 'Times', 'Times New Roman'])), to(Companion_getInstance_27().get_Monospace_hz2yii_k$().get_name_woqyms_k$(), listOf(['.AppleSystemUIFontMonospaced', 'Menlo', 'Courier'])), to(Companion_getInstance_27().get_Cursive_nlhumc_k$().get_name_woqyms_k$(), listOf(['Apple Chancery', 'Snell Roundhand']))]);
        break;
      case 7:
        tmp = mapOf([to(Companion_getInstance_27().get_SansSerif_4qz17l_k$().get_name_woqyms_k$(), listOf(['Roboto', 'Noto Sans'])), to(Companion_getInstance_27().get_Serif_igv9ro_k$().get_name_woqyms_k$(), listOf(['Roboto Serif', 'Noto Serif'])), to(Companion_getInstance_27().get_Monospace_hz2yii_k$().get_name_woqyms_k$(), listOf(['Roboto Mono', 'Noto Sans Mono'])), to(Companion_getInstance_27().get_Cursive_nlhumc_k$().get_name_woqyms_k$(), listOf_0('Comic Sans MS'))]);
        break;
      case 0:
        tmp = mapOf([to(Companion_getInstance_27().get_SansSerif_4qz17l_k$().get_name_woqyms_k$(), listOf_0('Arial')), to(Companion_getInstance_27().get_Serif_igv9ro_k$().get_name_woqyms_k$(), listOf_0('Times New Roman')), to(Companion_getInstance_27().get_Monospace_hz2yii_k$().get_name_woqyms_k$(), listOf_0('Consolas')), to(Companion_getInstance_27().get_Cursive_nlhumc_k$().get_name_woqyms_k$(), listOf_0('Comic Sans MS'))]);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function _get_GenericFontFamiliesMapping_$ref_opq6z8() {
    return function () {
      return get_GenericFontFamiliesMapping();
    };
  }
  function Font$lambda($data) {
    return function () {
      return $data;
    };
  }
  function Platform_Unknown_getInstance() {
    Platform_initEntries();
    return Platform_Unknown_instance;
  }
  function Platform_Linux_getInstance() {
    Platform_initEntries();
    return Platform_Linux_instance;
  }
  function Platform_Windows_getInstance() {
    Platform_initEntries();
    return Platform_Windows_instance;
  }
  function Platform_MacOS_getInstance() {
    Platform_initEntries();
    return Platform_MacOS_instance;
  }
  function Platform_IOS_getInstance() {
    Platform_initEntries();
    return Platform_IOS_instance;
  }
  function Platform_TvOS_getInstance() {
    Platform_initEntries();
    return Platform_TvOS_instance;
  }
  function Platform_WatchOS_getInstance() {
    Platform_initEntries();
    return Platform_WatchOS_instance;
  }
  function Platform_Android_getInstance() {
    Platform_initEntries();
    return Platform_Android_instance;
  }
  var properties_initialized_PlatformFont_skiko_kt_pdb6wl;
  function _init_properties_PlatformFont_skiko_kt__1fvojb() {
    if (!properties_initialized_PlatformFont_skiko_kt_pdb6wl) {
      properties_initialized_PlatformFont_skiko_kt_pdb6wl = true;
      GenericFontFamiliesMapping$delegate = lazy_0(GenericFontFamiliesMapping$delegate$lambda);
      androidx_compose_ui_text_platform_SystemFont$stable = 0;
      androidx_compose_ui_text_platform_LoadedFont$stable = 0;
      androidx_compose_ui_text_platform_FontLoader$stable = 8;
      androidx_compose_ui_text_platform_FontLoadResult$stable = 8;
      androidx_compose_ui_text_platform_FontCache$stable = 8;
    }
  }
  function drawMultiParagraph(_this__u8e3s4, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    alpha = alpha === VOID ? NaN : alpha;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_12().get_SrcOver_anr685_k$() : blendMode;
    canvas.save_fbe7h_k$();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = _this__u8e3s4.get_paragraphInfoList_wsoy3w_k$();
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        item.get_paragraph_ua17wb_k$().paint_t6aqss_k$(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
        canvas.translate_7gghdu_k$(0.0, item.get_paragraph_ua17wb_k$().get_height_e7t92o_k$());
      }
       while (inductionVariable <= last);
    canvas.restore_a1ykhu_k$();
  }
  var androidx_compose_ui_text_platform_SkiaParagraphIntrinsics$stable;
  function ActualParagraphIntrinsics(text, style, annotations, placeholders, density, fontFamilyResolver) {
    return new SkiaParagraphIntrinsics(text, style, annotations, placeholders, density, fontFamilyResolver);
  }
  function _get_style__b8k6v4($this) {
    return $this.style_1;
  }
  function _get_annotations__virbvx_0($this) {
    return $this.annotations_1;
  }
  function _get_placeholders__eecbo5($this) {
    return $this.placeholders_1;
  }
  function _get_density__l5pazb($this) {
    return $this.density_1;
  }
  function _get_fontFamilyResolver__s3uj2m_0($this) {
    return $this.fontFamilyResolver_1;
  }
  function _set_layouter__eku8o0($this, _set____db54di) {
    $this.layouter_1 = _set____db54di;
  }
  function _get_layouter__1rxx78_0($this) {
    return $this.layouter_1;
  }
  function newLayouter($this) {
    return new ParagraphLayouter($this.text_1, $this.textDirection_1, $this.style_1, $this.annotations_1, $this.placeholders_1, $this.density_1, $this.fontFamilyResolver_1);
  }
  function _set_minIntrinsicWidth__6e9wfm($this, _set____db54di) {
    $this.minIntrinsicWidth_1 = _set____db54di;
  }
  function _set_maxIntrinsicWidth__r1bxuo($this, _set____db54di) {
    $this.maxIntrinsicWidth_1 = _set____db54di;
  }
  function SkiaParagraphIntrinsics(text, style, annotations, placeholders, density, fontFamilyResolver) {
    this.text_1 = text;
    this.style_1 = style;
    this.annotations_1 = annotations;
    this.placeholders_1 = placeholders;
    this.density_1 = density;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.textDirection_1 = resolveTextDirection_1(this.text_1, this.style_1.get_textDirection_h0bug3_k$(), this.style_1.get_localeList_1gj9gh_k$());
    this.layouter_1 = newLayouter(this);
    this.minIntrinsicWidth_1 = 0.0;
    this.maxIntrinsicWidth_1 = 0.0;
    var para = ensureNotNull(this.layouter_1).layoutParagraph_6xbnfw_k$(Infinity);
    var tmp = this;
    // Inline function 'kotlin.math.ceil' call
    var x = para.get_minIntrinsicWidth_lmc1rq_k$();
    tmp.minIntrinsicWidth_1 = Math.ceil(x);
    var tmp_0 = this;
    // Inline function 'kotlin.math.ceil' call
    var x_0 = para.get_maxIntrinsicWidth_b4gk2k_k$();
    tmp_0.maxIntrinsicWidth_1 = Math.ceil(x_0);
  }
  protoOf(SkiaParagraphIntrinsics).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(SkiaParagraphIntrinsics).get_textDirection_cl6v6f_k$ = function () {
    return this.textDirection_1;
  };
  protoOf(SkiaParagraphIntrinsics).layouter_lcs8mh_k$ = function () {
    var tmp0_elvis_lhs = this.layouter_1;
    var layouter = tmp0_elvis_lhs == null ? newLayouter(this) : tmp0_elvis_lhs;
    this.layouter_1 = null;
    return layouter;
  };
  protoOf(SkiaParagraphIntrinsics).get_minIntrinsicWidth_lmc1rq_k$ = function () {
    return this.minIntrinsicWidth_1;
  };
  protoOf(SkiaParagraphIntrinsics).get_maxIntrinsicWidth_b4gk2k_k$ = function () {
    return this.maxIntrinsicWidth_1;
  };
  function resolveTextDirection_1(text, textDirection, localeList) {
    textDirection = textDirection === VOID ? null : textDirection;
    localeList = localeList === VOID ? null : localeList;
    var tmp;
    var tmp_0 = textDirection;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = Companion_getInstance_53().get_Content_gdpx4s_k$();
    } else {
      tmp = textDirection;
    }
    var tmp1_subject = tmp;
    var tmp_1;
    if (tmp1_subject === Companion_getInstance_53().get_Ltr_fd58a3_k$()) {
      tmp_1 = ResolvedTextDirection_Ltr_getInstance();
    } else if (tmp1_subject === Companion_getInstance_53().get_Rtl_qi5bo5_k$()) {
      tmp_1 = ResolvedTextDirection_Rtl_getInstance();
    } else if (tmp1_subject === Companion_getInstance_53().get_Content_gdpx4s_k$() || tmp1_subject === Companion_getInstance_53().get_Unspecified_8uxrb6_k$()) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda(localeList));
    } else if (tmp1_subject === Companion_getInstance_53().get_ContentOrLtr_byc1cl_k$()) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_0);
    } else if (tmp1_subject === Companion_getInstance_53().get_ContentOrRtl_twyiln_k$()) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_1);
    } else {
      var message = 'Invalid TextDirection.';
      throw IllegalStateException_init_$Create$_0(toString_0(message));
    }
    return tmp_1;
  }
  function contentBasedTextDirection(text, fallback) {
    var tmp0_subject = firstStrongDirectionType(text);
    return tmp0_subject === Companion_getInstance_58().get_Ltr_vywptz_k$() ? ResolvedTextDirection_Ltr_getInstance() : tmp0_subject === Companion_getInstance_58().get_Rtl_2t37t3_k$() ? ResolvedTextDirection_Rtl_getInstance() : fallback();
  }
  function localeBasedTextDirection(locale) {
    var tmp;
    if (isRtl((locale == null ? Companion_getInstance_43().get_current_jwi6j4_k$() : locale).get_platformLocale_g0bmwm_k$())) {
      tmp = ResolvedTextDirection_Rtl_getInstance();
    } else {
      tmp = ResolvedTextDirection_Ltr_getInstance();
    }
    return tmp;
  }
  function resolveTextDirection$lambda($localeList) {
    return function () {
      var tmp0_safe_receiver = $localeList;
      return localeBasedTextDirection(tmp0_safe_receiver == null ? null : firstOrNull_0(tmp0_safe_receiver));
    };
  }
  function resolveTextDirection$lambda_0() {
    return ResolvedTextDirection_Ltr_getInstance();
  }
  function resolveTextDirection$lambda_1() {
    return ResolvedTextDirection_Rtl_getInstance();
  }
  var androidx_compose_ui_text_platform_SkiaTextPaint$stable;
  function clearShader($this) {
    $this.shaderState_1 = null;
    $this.brush_1 = null;
    $this.brushSize_1 = null;
    $this.set_shader_tgaw5e_k$(null);
  }
  function SkiaTextPaint$setBrush$lambda($brush, $size) {
    return function () {
      return $brush.createShader_k0897f_k$($size);
    };
  }
  function SkiaTextPaint() {
    this.$$delegate_0__1 = Paint();
    this.brush_1 = null;
    this.shaderState_1 = null;
    this.brushSize_1 = null;
  }
  protoOf(SkiaTextPaint).set_brush_g45ydl_k$ = function (_set____db54di) {
    this.brush_1 = _set____db54di;
  };
  protoOf(SkiaTextPaint).get_brush_jacfak_k$ = function () {
    return this.brush_1;
  };
  protoOf(SkiaTextPaint).set_shaderState_ivfj5v_k$ = function (_set____db54di) {
    this.shaderState_1 = _set____db54di;
  };
  protoOf(SkiaTextPaint).get_shaderState_kjq0im_k$ = function () {
    return this.shaderState_1;
  };
  protoOf(SkiaTextPaint).set_brushSize_90zgic_k$ = function (_set____db54di) {
    this.brushSize_1 = _set____db54di;
  };
  protoOf(SkiaTextPaint).get_brushSize_ub40a6_k$ = function () {
    return this.brushSize_1;
  };
  protoOf(SkiaTextPaint).setBrush_31k9q3_k$ = function (brush, size, alpha) {
    if (brush == null) {
      clearShader(this);
    } else {
      if (brush instanceof SolidColor) {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        var this_0 = this.get_color_lnp1vl_k$();
        if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
          this.set_color_m2amxp_k$(modulate(brush.get_value_za03u9_k$(), alpha));
          clearShader(this);
        }
      } else {
        if (brush instanceof ShaderBrush) {
          var tmp;
          if (!equals(this.brush_1, brush)) {
            tmp = true;
          } else {
            var tmp_0 = this.brushSize_1;
            tmp = !equals(tmp_0 == null ? null : new Size(tmp_0), new Size(size));
          }
          if (tmp) {
            // Inline function 'androidx.compose.ui.geometry.isSpecified' call
            if (!equalsLong(_Size___get_packedValue__impl__7rlt1o(size), new Long(2143289344, 2143289344))) {
              this.brush_1 = brush;
              this.brushSize_1 = size;
              var tmp_1 = this;
              tmp_1.shaderState_1 = derivedStateOf(SkiaTextPaint$setBrush$lambda(brush, size));
            }
          }
          var tmp1_safe_receiver = this.shaderState_1;
          this.set_shader_tgaw5e_k$(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_value_j01efc_k$());
          this.set_alpha_tvzcqh_k$(isNaN_0(alpha) ? 1.0 : coerceIn_0(alpha, 0.0, 1.0));
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(SkiaTextPaint).setBrush$default_oggbku_k$ = function (brush, size, alpha, $super) {
    alpha = alpha === VOID ? NaN : alpha;
    var tmp;
    if ($super === VOID) {
      this.setBrush_31k9q3_k$(brush, size, alpha);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.setBrush_31k9q3_k$.call(this, brush, new Size(size), alpha);
    }
    return tmp;
  };
  protoOf(SkiaTextPaint).setDrawStyle_16xwa2_k$ = function (drawStyle) {
    if (equals(drawStyle, Fill_getInstance()) || drawStyle == null) {
      this.set_style_t4zhmv_k$(Companion_getInstance_13().get_Fill_7xey15_k$());
    } else {
      if (drawStyle instanceof Stroke) {
        this.set_style_t4zhmv_k$(Companion_getInstance_13().get_Stroke_fu1ixu_k$());
        this.set_strokeWidth_owqvpl_k$(drawStyle.get_width_j0q4yl_k$());
        this.set_strokeMiterLimit_tej6nx_k$(drawStyle.get_miter_iv8ijg_k$());
        this.set_strokeJoin_yrffuj_k$(drawStyle.get_join_i4bzz3_k$());
        this.set_strokeCap_x8rhz1_k$(drawStyle.get_cap_3aolkp_k$());
        this.set_pathEffect_h6g9g6_k$(drawStyle.get_pathEffect_d6tz6p_k$());
      } else {
        noWhenBranchMatchedException();
      }
    }
  };
  protoOf(SkiaTextPaint).asFrameworkPaint_huz48e_k$ = function () {
    return this.$$delegate_0__1.asFrameworkPaint_huz48e_k$();
  };
  protoOf(SkiaTextPaint).set_alpha_tvzcqh_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_alpha_tvzcqh_k$(_set____db54di);
  };
  protoOf(SkiaTextPaint).get_alpha_iooth1_k$ = function () {
    return this.$$delegate_0__1.get_alpha_iooth1_k$();
  };
  protoOf(SkiaTextPaint).set_isAntiAlias_m6kooi_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_isAntiAlias_m6kooi_k$(_set____db54di);
  };
  protoOf(SkiaTextPaint).get_isAntiAlias_255n51_k$ = function () {
    return this.$$delegate_0__1.get_isAntiAlias_255n51_k$();
  };
  protoOf(SkiaTextPaint).set_color_m2amxp_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_color_m2amxp_k$(_set____db54di);
  };
  protoOf(SkiaTextPaint).get_color_lnp1vl_k$ = function () {
    return this.$$delegate_0__1.get_color_lnp1vl_k$();
  };
  protoOf(SkiaTextPaint).set_blendMode_1e5m6b_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_blendMode_1e5m6b_k$(_set____db54di);
  };
  protoOf(SkiaTextPaint).get_blendMode_si209t_k$ = function () {
    return this.$$delegate_0__1.get_blendMode_si209t_k$();
  };
  protoOf(SkiaTextPaint).set_style_t4zhmv_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_style_t4zhmv_k$(_set____db54di);
  };
  protoOf(SkiaTextPaint).get_style_h1bxuj_k$ = function () {
    return this.$$delegate_0__1.get_style_h1bxuj_k$();
  };
  protoOf(SkiaTextPaint).set_strokeWidth_owqvpl_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_strokeWidth_owqvpl_k$(_set____db54di);
  };
  protoOf(SkiaTextPaint).get_strokeWidth_pbded7_k$ = function () {
    return this.$$delegate_0__1.get_strokeWidth_pbded7_k$();
  };
  protoOf(SkiaTextPaint).set_strokeCap_x8rhz1_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_strokeCap_x8rhz1_k$(_set____db54di);
  };
  protoOf(SkiaTextPaint).get_strokeCap_6gl6jj_k$ = function () {
    return this.$$delegate_0__1.get_strokeCap_6gl6jj_k$();
  };
  protoOf(SkiaTextPaint).set_strokeJoin_yrffuj_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_strokeJoin_yrffuj_k$(_set____db54di);
  };
  protoOf(SkiaTextPaint).get_strokeJoin_j1kbxz_k$ = function () {
    return this.$$delegate_0__1.get_strokeJoin_j1kbxz_k$();
  };
  protoOf(SkiaTextPaint).set_strokeMiterLimit_tej6nx_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_strokeMiterLimit_tej6nx_k$(_set____db54di);
  };
  protoOf(SkiaTextPaint).get_strokeMiterLimit_p3434n_k$ = function () {
    return this.$$delegate_0__1.get_strokeMiterLimit_p3434n_k$();
  };
  protoOf(SkiaTextPaint).set_filterQuality_eye4f7_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_filterQuality_eye4f7_k$(_set____db54di);
  };
  protoOf(SkiaTextPaint).get_filterQuality_wmgb0f_k$ = function () {
    return this.$$delegate_0__1.get_filterQuality_wmgb0f_k$();
  };
  protoOf(SkiaTextPaint).set_shader_tgaw5e_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_shader_tgaw5e_k$(_set____db54di);
  };
  protoOf(SkiaTextPaint).get_shader_jgtazy_k$ = function () {
    return this.$$delegate_0__1.get_shader_jgtazy_k$();
  };
  protoOf(SkiaTextPaint).set_colorFilter_dtpxr0_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_colorFilter_dtpxr0_k$(_set____db54di);
  };
  protoOf(SkiaTextPaint).get_colorFilter_nt8pqq_k$ = function () {
    return this.$$delegate_0__1.get_colorFilter_nt8pqq_k$();
  };
  protoOf(SkiaTextPaint).set_pathEffect_h6g9g6_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_pathEffect_h6g9g6_k$(_set____db54di);
  };
  protoOf(SkiaTextPaint).get_pathEffect_d6tz6p_k$ = function () {
    return this.$$delegate_0__1.get_pathEffect_d6tz6p_k$();
  };
  var androidx_compose_ui_text_platform_SynchronizedObject$stable;
  function SynchronizedObject() {
  }
  function makeSynchronizedObject(ref) {
    ref = ref === VOID ? null : ref;
    return new SynchronizedObject();
  }
  function synchronized(lock, block) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    return block();
  }
  function _LineBreak___init__impl__o5i11q(mask) {
    return mask;
  }
  function _LineBreak___get_mask__impl__je2e1t($this) {
    return $this;
  }
  function Companion_46() {
    Companion_instance_46 = this;
    this.Simple_1 = _LineBreak___init__impl__o5i11q(1);
    this.Heading_1 = _LineBreak___init__impl__o5i11q(2);
    this.Paragraph_1 = _LineBreak___init__impl__o5i11q(3);
    this.Unspecified_1 = _LineBreak___init__impl__o5i11q(4);
  }
  protoOf(Companion_46).get_Simple_z0fu2y_k$ = function () {
    return this.Simple_1;
  };
  protoOf(Companion_46).get_Heading_ybpgoc_k$ = function () {
    return this.Heading_1;
  };
  protoOf(Companion_46).get_Paragraph_xsyoow_k$ = function () {
    return this.Paragraph_1;
  };
  protoOf(Companion_46).get_Unspecified_afm6zt_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_46;
  function Companion_getInstance_63() {
    if (Companion_instance_46 == null)
      new Companion_46();
    return Companion_instance_46;
  }
  function LineBreak__toString_impl_mphhli($this) {
    return 'LineBreak(mask=' + $this + ')';
  }
  function LineBreak__hashCode_impl_ybksn($this) {
    return $this;
  }
  function LineBreak__equals_impl_1r98t9($this, other) {
    if (!(other instanceof LineBreak))
      return false;
    if (!($this === (other instanceof LineBreak ? other.mask_1 : THROW_CCE())))
      return false;
    return true;
  }
  function LineBreak(mask) {
    Companion_getInstance_63();
    this.mask_1 = mask;
  }
  protoOf(LineBreak).toString = function () {
    return LineBreak__toString_impl_mphhli(this.mask_1);
  };
  protoOf(LineBreak).hashCode = function () {
    return LineBreak__hashCode_impl_ybksn(this.mask_1);
  };
  protoOf(LineBreak).equals = function (other) {
    return LineBreak__equals_impl_1r98t9(this.mask_1, other);
  };
  var androidx_compose_ui_text_style_TextMotion$stable;
  function Companion_47() {
    Companion_instance_47 = this;
    this.Static_1 = new TextMotion();
    this.Animated_1 = new TextMotion();
  }
  protoOf(Companion_47).get_Static_4hz9g7_k$ = function () {
    return this.Static_1;
  };
  protoOf(Companion_47).get_Animated_r57wcs_k$ = function () {
    return this.Animated_1;
  };
  var Companion_instance_47;
  function Companion_getInstance_64() {
    if (Companion_instance_47 == null)
      new Companion_47();
    return Companion_instance_47;
  }
  function TextMotion() {
    Companion_getInstance_64();
  }
  function get_rtlLanguagesSet() {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return rtlLanguagesSet;
  }
  var rtlLanguagesSet;
  var androidx_compose_ui_text_intl_PlatformLocale$stable;
  function get_language(_this__u8e3s4) {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return _this__u8e3s4.language;
  }
  function get_script(_this__u8e3s4) {
    _init_properties_PlatformLocale_web_kt__363p4j();
    var tmp0_elvis_lhs = _this__u8e3s4.script;
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  }
  function get_region(_this__u8e3s4) {
    _init_properties_PlatformLocale_web_kt__363p4j();
    var tmp0_elvis_lhs = _this__u8e3s4.region;
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  }
  function getLanguageTag(_this__u8e3s4) {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return _this__u8e3s4.baseName;
  }
  function createPlatformLocaleDelegate() {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return new createPlatformLocaleDelegate$1();
  }
  function isRtl(_this__u8e3s4) {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return get_rtlLanguagesSet().contains_aljjnj_k$(get_language(_this__u8e3s4));
  }
  function toIntlLocale(_this__u8e3s4) {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return parseLanguageTagToIntlLocale(_this__u8e3s4);
  }
  function parseLanguageTagToIntlLocale(languageTag) {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return new Intl.Locale(languageTag);
  }
  function createPlatformLocaleDelegate$1() {
  }
  protoOf(createPlatformLocaleDelegate$1).get_current_jwi6j4_k$ = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = userPreferredLanguages();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$0 = new Locale(toIntlLocale(item));
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return new LocaleList(destination);
  };
  protoOf(createPlatformLocaleDelegate$1).parseLanguageTag_5wql63_k$ = function (languageTag) {
    return toIntlLocale(languageTag);
  };
  var properties_initialized_PlatformLocale_web_kt_9h93ez;
  function _init_properties_PlatformLocale_web_kt__363p4j() {
    if (!properties_initialized_PlatformLocale_web_kt_9h93ez) {
      properties_initialized_PlatformLocale_web_kt_9h93ez = true;
      rtlLanguagesSet = setOf(['ar', 'fa', 'he', 'iw', 'ji', 'ur', 'yi']);
      androidx_compose_ui_text_intl_PlatformLocale$stable = 0;
    }
  }
  function currentPlatform() {
    switch (get_hostOs().get_ordinal_ip24qg_k$()) {
      case 0:
        return Platform_Android_getInstance();
      case 4:
        return Platform_IOS_getInstance();
      case 3:
        return Platform_MacOS_getInstance();
      case 1:
        return Platform_Linux_getInstance();
      case 2:
        return Platform_Windows_getInstance();
      default:
        return Platform_Unknown_getInstance();
    }
  }
  function loadTypeface(font) {
    if (!(font instanceof PlatformFont)) {
      throw IllegalArgumentException_init_$Create$_0('Unsupported font type: ' + toString_0(font));
    }
    var tmp;
    if (font instanceof LoadedFont) {
      var tmp1_elvis_lhs = Companion_getInstance_14().get_default_qtagd4_k$().makeFromData$default_m5xxm4_k$(Companion_getInstance_15().makeFromBytes$default_1ffal6_k$(font.get_getData_99pii6_k$()()));
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var message = 'loadTypeface makeFromData failed';
        throw IllegalStateException_init_$Create$_0(toString_0(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (font instanceof SystemFont) {
        var tmp2_elvis_lhs = Companion_getInstance_14().get_default_qtagd4_k$().legacyMakeTypeface_phf0tz_k$(font.get_identity_y1rl2x_k$(), get_skFontStyle(font));
        var tmp_1;
        if (tmp2_elvis_lhs == null) {
          var message_0 = 'loadTypeface legacyMakeTypeface failed';
          throw IllegalStateException_init_$Create$_0(toString_0(message_0));
        } else {
          tmp_1 = tmp2_elvis_lhs;
        }
        tmp = tmp_1;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return cloneWithVariationSettings(tmp, font.get_variationSettings_dq3vpv_k$());
  }
  function get_skFontStyle(_this__u8e3s4) {
    return FontStyle_init_$Create$(_this__u8e3s4.get_weight_lbhkzl_k$().get_weight_lbhkzl_k$(), 5, _this__u8e3s4.get_style_fnlxse_k$() === Companion_getInstance_31().get_Italic_5ol4ot_k$() ? FontSlant_ITALIC_getInstance() : FontSlant_UPRIGHT_getInstance());
  }
  var androidx_compose_ui_text_platform_JsStringDelegate$stable;
  function ActualStringDelegate() {
    return new JsStringDelegate();
  }
  function titlecaseImpl($this, _this__u8e3s4, locale) {
    var uppercase = toLocaleUpperCase(toString_1(_this__u8e3s4), get_language(locale));
    if (uppercase.length > 1) {
      var tmp;
      if (_this__u8e3s4 === _Char___init__impl__6a9atx(329)) {
        tmp = uppercase;
      } else {
        var tmp0 = charCodeAt(uppercase, 0);
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.text.plus' call
        var other = substring_0(uppercase, 1).toLowerCase();
        tmp = toString_1(tmp0) + other;
      }
      return tmp;
    }
    return toString_1(titlecaseChar(_this__u8e3s4));
  }
  function JsStringDelegate() {
  }
  protoOf(JsStringDelegate).toUpperCase_y2arn5_k$ = function (string, locale) {
    return toLocaleUpperCase(string, get_language(locale));
  };
  protoOf(JsStringDelegate).toLowerCase_kn1rua_k$ = function (string, locale) {
    return toLocaleLowerCase(string, get_language(locale));
  };
  protoOf(JsStringDelegate).capitalize_r1qdpg_k$ = function (string, locale) {
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(string) > 0) {
      var it = charCodeAt(string, 0);
      var tmp_0;
      if (isLowerCase(it)) {
        tmp_0 = titlecaseImpl(this, it, locale);
      } else {
        tmp_0 = toString_1(it);
      }
      var tmp$ret$1 = tmp_0;
      tmp = toString_0(tmp$ret$1) + substring_0(string, 1);
    } else {
      tmp = string;
    }
    return tmp;
  };
  protoOf(JsStringDelegate).decapitalize_rilk57_k$ = function (string, locale) {
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(string) > 0) {
      var it = charCodeAt(string, 0);
      var tmp$ret$1 = toLocaleLowerCase(toString_1(it), get_language(locale));
      tmp = toString_0(tmp$ret$1) + substring_0(string, 1);
    } else {
      tmp = string;
    }
    return tmp;
  };
  function toLocaleUpperCase(text, locale) {
    return text.toLocaleUpperCase(locale);
  }
  function toLocaleLowerCase(text, locale) {
    return text.toLocaleLowerCase(locale);
  }
  var androidx_compose_ui_text_NoCache$stable;
  function NoCache() {
  }
  protoOf(NoCache).get_qk1ys5_k$ = function (key, loader) {
    return loader(key);
  };
  protoOf(NoCache).get_c3034i_k$ = function (key, loader) {
    return this.get_qk1ys5_k$(!(key == null) ? key : THROW_CCE(), loader);
  };
  function createPlatformResolveInterceptor() {
    return Companion_getInstance_28().get_Default_f0vec3_k$();
  }
  function synthesizeTypeface(_this__u8e3s4, typeface, font, requestedWeight, requestedStyle) {
    return typeface;
  }
  var androidx_compose_ui_text_platform_PlatformFont$stable;
  function PlatformFont() {
  }
  protoOf(PlatformFont).get_cacheKey_x4yjmp_k$ = function () {
    return '' + getKClassFromExpression(this).get_simpleName_r6f8py_k$() + '|' + this.get_identity_y1rl2x_k$() + '|weight=' + this.get_weight_lbhkzl_k$().get_weight_lbhkzl_k$() + '|style=' + FontStyle__toString_impl_thncxr(this.get_style_fnlxse_k$()) + '|variationSettings=' + toString_0(this.get_variationSettings_dq3vpv_k$().get_settings_82sm50_k$());
  };
  //region block: post-declaration
  protoOf(FontFamilyResolverImpl).resolve$default_51n6kl_k$ = resolve$default;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).interceptFontFamily_gv8ky1_k$ = interceptFontFamily;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).interceptFontWeight_3o5olg_k$ = interceptFontWeight;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).interceptFontStyle_a5zuhs_k$ = interceptFontStyle;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).interceptFontSynthesis_3g2w1p_k$ = interceptFontSynthesis;
  protoOf(Unspecified).merge_b7txoj_k$ = merge;
  protoOf(Unspecified).takeOrElse_vujaw_k$ = takeOrElse;
  protoOf(BrushStyle).merge_b7txoj_k$ = merge;
  protoOf(BrushStyle).takeOrElse_vujaw_k$ = takeOrElse;
  protoOf(ColorStyle).merge_b7txoj_k$ = merge;
  protoOf(ColorStyle).takeOrElse_vujaw_k$ = takeOrElse;
  protoOf(SkiaParagraph).getLineEnd$default_nax8ot_k$ = getLineEnd$default;
  protoOf(SkiaParagraph).paint$default_n29wsh_k$ = paint$default;
  protoOf(SkiaParagraph).paint$default_f7qoik_k$ = paint$default_0;
  protoOf(SkiaParagraph).paint$default_9oas5_k$ = paint$default_1;
  protoOf(PlatformFont).get_loadingStrategy_s3fce_k$ = get_loadingStrategy;
  protoOf(SkiaParagraphIntrinsics).get_hasStaleResolvedFonts_tun9ic_k$ = get_hasStaleResolvedFonts;
  //endregion
  //region block: init
  androidx_compose_ui_text_Bullet$stable = 8;
  androidx_compose_ui_text_LinkAnnotation_Url$stable = 8;
  androidx_compose_ui_text_LinkAnnotation_Clickable$stable = 8;
  androidx_compose_ui_text_LinkAnnotation$stable = 0;
  androidx_compose_ui_text_MultiParagraph$stable = 8;
  androidx_compose_ui_text_ParagraphInfo$stable = 8;
  androidx_compose_ui_text_MultiParagraphIntrinsics$stable = 8;
  androidx_compose_ui_text_ParagraphIntrinsicInfo$stable = 8;
  androidx_compose_ui_text_Placeholder$stable = 0;
  androidx_compose_ui_text_TextLayoutInput$stable = 8;
  androidx_compose_ui_text_TextLayoutResult$stable = 8;
  androidx_compose_ui_text_TextLinkStyles$stable = 0;
  androidx_compose_ui_text_TextMeasurer$stable = 0;
  androidx_compose_ui_text_TextLayoutCache$stable = 8;
  androidx_compose_ui_text_CacheTextLayoutInput$stable = 0;
  androidx_compose_ui_text_TextPainter$stable = 0;
  androidx_compose_ui_text_TextStyle$stable = 0;
  androidx_compose_ui_text_TtsAnnotation$stable = 0;
  androidx_compose_ui_text_VerbatimTtsAnnotation$stable = 0;
  androidx_compose_ui_text_UrlAnnotation$stable = 0;
  androidx_compose_ui_text_font_ResourceFont$stable = 0;
  androidx_compose_ui_text_font_FontFamily$stable = 0;
  androidx_compose_ui_text_font_FileBasedFontFamily$stable = 0;
  androidx_compose_ui_text_font_SystemFontFamily$stable = 0;
  androidx_compose_ui_text_font_FontListFontFamily$stable = 0;
  androidx_compose_ui_text_font_GenericFontFamily$stable = 0;
  androidx_compose_ui_text_font_DefaultFontFamily$stable = 0;
  androidx_compose_ui_text_font_LoadedFontFamily$stable = 0;
  androidx_compose_ui_text_font_FontListFontFamilyTypefaceAdapter$stable = 8;
  androidx_compose_ui_text_font_AsyncFontListLoader$stable = 0;
  androidx_compose_ui_text_font_AsyncTypefaceCache_Key$stable = 8;
  androidx_compose_ui_text_font_AsyncTypefaceCache$stable = 8;
  androidx_compose_ui_text_font_FontMatcher$stable = 0;
  androidx_compose_ui_text_font_FontVariation_Settings$stable = 0;
  androidx_compose_ui_text_font_FontVariation$stable = 0;
  androidx_compose_ui_text_font_FontWeight$stable = 0;
  androidx_compose_ui_text_input_CommitTextCommand$stable = 0;
  androidx_compose_ui_text_input_SetComposingRegionCommand$stable = 0;
  androidx_compose_ui_text_input_SetComposingTextCommand$stable = 0;
  androidx_compose_ui_text_input_DeleteSurroundingTextCommand$stable = 0;
  androidx_compose_ui_text_input_DeleteSurroundingTextInCodePointsCommand$stable = 0;
  androidx_compose_ui_text_input_SetSelectionCommand$stable = 0;
  androidx_compose_ui_text_input_FinishComposingTextCommand$stable = 0;
  androidx_compose_ui_text_input_BackspaceCommand$stable = 0;
  androidx_compose_ui_text_input_MoveCursorCommand$stable = 0;
  androidx_compose_ui_text_input_DeleteAllCommand$stable = 0;
  androidx_compose_ui_text_input_EditProcessor$stable = 8;
  androidx_compose_ui_text_input_EditingBuffer$stable = 8;
  androidx_compose_ui_text_input_PartialGapBuffer$stable = 8;
  androidx_compose_ui_text_input_ImeOptions$stable = 0;
  androidx_compose_ui_text_input_TextFieldValue$stable = 0;
  androidx_compose_ui_text_input_TextInputService$stable = 8;
  androidx_compose_ui_text_input_TextInputSession$stable = 8;
  androidx_compose_ui_text_input_TransformedText$stable = 8;
  androidx_compose_ui_text_input_PasswordVisualTransformation$stable = 0;
  androidx_compose_ui_text_intl_Locale$stable = 0;
  androidx_compose_ui_text_intl_LocaleList$stable = 0;
  androidx_compose_ui_text_style_LineHeightStyle$stable = 0;
  androidx_compose_ui_text_style_TextDecoration$stable = 0;
  androidx_compose_ui_text_style_TextForegroundStyle_Unspecified$stable = 0;
  androidx_compose_ui_text_style_TextGeometricTransform$stable = 0;
  androidx_compose_ui_text_style_TextIndent$stable = 0;
  androidx_compose_ui_text_AtomicReference$stable = 8;
  androidx_compose_ui_text_ExpireAfterAccessCache$stable = 8;
  androidx_compose_ui_text_FontRasterizationSettings$stable = 0;
  androidx_compose_ui_text_SkiaParagraph$stable = 8;
  androidx_compose_ui_text_PlatformTextStyle$stable = 0;
  androidx_compose_ui_text_PlatformParagraphStyle$stable = 0;
  androidx_compose_ui_text_PlatformSpanStyle$stable = 0;
  androidx_compose_ui_text_font_PlatformFontFamilyTypefaceAdapter$stable = 0;
  androidx_compose_ui_text_font_SkiaFontLoader$stable = 8;
  androidx_compose_ui_text_input_PlatformImeOptions$stable = 0;
  androidx_compose_ui_text_platform_ParagraphLayouter$stable = 8;
  androidx_compose_ui_text_platform_SkiaParagraphIntrinsics$stable = 8;
  androidx_compose_ui_text_platform_SkiaTextPaint$stable = 8;
  androidx_compose_ui_text_platform_SynchronizedObject$stable = 0;
  androidx_compose_ui_text_style_TextMotion$stable = 0;
  androidx_compose_ui_text_platform_JsStringDelegate$stable = 0;
  androidx_compose_ui_text_NoCache$stable = 0;
  androidx_compose_ui_text_platform_PlatformFont$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FontStyle;
  _.$_$.b = FontSynthesis;
  _.$_$.c = createFontFamilyResolver_1;
  _.$_$.d = BackspaceCommand;
  _.$_$.e = CommitTextCommand;
  _.$_$.f = DeleteAllCommand;
  _.$_$.g = DeleteSurroundingTextCommand;
  _.$_$.h = EditProcessor;
  _.$_$.i = FinishComposingTextCommand;
  _.$_$.j = ImeAction;
  _.$_$.k = ImeOptions;
  _.$_$.l = KeyboardCapitalization;
  _.$_$.m = KeyboardType;
  _.$_$.n = OffsetMapping;
  _.$_$.o = PasswordVisualTransformation;
  _.$_$.p = notifyFocusedRect;
  _.$_$.q = startInput;
  _.$_$.r = updateTextLayoutResult;
  _.$_$.s = PlatformTextInputService;
  _.$_$.t = SetSelectionCommand;
  _.$_$.u = TextEditingScope;
  _.$_$.v = TextEditorState;
  _.$_$.w = TextFieldValue;
  _.$_$.x = TextInputService;
  _.$_$.y = TransformedText;
  _.$_$.z = getSelectedText;
  _.$_$.a1 = getTextAfterSelection;
  _.$_$.b1 = getTextBeforeSelection;
  _.$_$.c1 = FontLoader;
  _.$_$.d1 = Font_0;
  _.$_$.e1 = TextAlign;
  _.$_$.f1 = TextOverflow;
  _.$_$.g1 = MultiParagraphIntrinsics;
  _.$_$.h1 = MultiParagraph;
  _.$_$.i1 = ParagraphIntrinsics_0;
  _.$_$.j1 = Paragraph_0;
  _.$_$.k1 = Paragraph;
  _.$_$.l1 = TextLayoutResult;
  _.$_$.m1 = TextMeasurer;
  _.$_$.n1 = TextRange_0;
  _.$_$.o1 = TextRange_1;
  _.$_$.p1 = TextRange;
  _.$_$.q1 = androidx_compose_ui_text_TextLayoutResult$stableprop_getter;
  _.$_$.r1 = coerceIn_1;
  _.$_$.s1 = lerp_6;
  _.$_$.t1 = resolveDefaults;
  _.$_$.u1 = substring_1;
  _.$_$.v1 = ResolvedTextDirection_Ltr_getInstance;
  _.$_$.w1 = ResolvedTextDirection_Rtl_getInstance;
  _.$_$.x1 = CommitTextCommand_init_$Create$;
  _.$_$.y1 = SetComposingTextCommand_init_$Create$;
  _.$_$.z1 = TextFieldValue_init_$Create$;
  _.$_$.a2 = LineHeightStyle_init_$Create$;
  _.$_$.b2 = AnnotatedString_init_$Create$_0;
  _.$_$.c2 = Builder_init_$Create$_0;
  _.$_$.d2 = Range_init_$Create$;
  _.$_$.e2 = SpanStyle_init_$Create$_1;
  _.$_$.f2 = TextLayoutInput_init_$Create$_0;
  _.$_$.g2 = TextStyle_init_$Create$_5;
  _.$_$.h2 = ImeAction__hashCode_impl_m1mrob;
  _.$_$.i2 = ImeAction__toString_impl_r8bdhy;
  _.$_$.j2 = KeyboardCapitalization__hashCode_impl_6ibuz5;
  _.$_$.k2 = KeyboardCapitalization__toString_impl_f8u1tq;
  _.$_$.l2 = KeyboardType__hashCode_impl_mw6m33;
  _.$_$.m2 = KeyboardType__toString_impl_150pa8;
  _.$_$.n2 = _TextOverflow___init__impl__obguoe;
  _.$_$.o2 = TextOverflow__hashCode_impl_kqdwgt;
  _.$_$.p2 = TextOverflow__toString_impl_10s0c2;
  _.$_$.q2 = _TextOverflow___get_value__impl__vugm5i;
  _.$_$.r2 = _TextRange___get_collapsed__impl__cilesp;
  _.$_$.s2 = TextRange__contains_impl_ws45z2_0;
  _.$_$.t2 = TextRange__contains_impl_ws45z2;
  _.$_$.u2 = _TextRange___get_end__impl__gcdxpp;
  _.$_$.v2 = TextRange__hashCode_impl_3zpp6q;
  _.$_$.w2 = _TextRange___get_length__impl__7qes3a;
  _.$_$.x2 = _TextRange___get_max__impl__owm8m;
  _.$_$.y2 = _TextRange___get_min__impl__uu95c4;
  _.$_$.z2 = _TextRange___get_reversed__impl__emhnbm;
  _.$_$.a3 = _TextRange___get_start__impl__ww4t90;
  _.$_$.b3 = TextRange__toString_impl_pqvlzl;
  _.$_$.c3 = Companion_getInstance_27;
  _.$_$.d3 = Companion_getInstance_31;
  _.$_$.e3 = Companion_getInstance_32;
  _.$_$.f3 = Companion_getInstance_33;
  _.$_$.g3 = Companion_getInstance_36;
  _.$_$.h3 = Companion_getInstance_37;
  _.$_$.i3 = Companion_getInstance_38;
  _.$_$.j3 = Companion_getInstance_39;
  _.$_$.k3 = Companion_getInstance_40;
  _.$_$.l3 = Companion_getInstance_42;
  _.$_$.m3 = Companion_getInstance_43;
  _.$_$.n3 = Companion_getInstance_44;
  _.$_$.o3 = Companion_getInstance_48;
  _.$_$.p3 = Companion_getInstance_47;
  _.$_$.q3 = Companion_getInstance_51;
  _.$_$.r3 = Companion_getInstance_52;
  _.$_$.s3 = Companion_getInstance_53;
  _.$_$.t3 = Companion_getInstance_57;
  _.$_$.u3 = TextPainter_getInstance;
  _.$_$.v3 = Companion_getInstance_24;
  _.$_$.w3 = Companion_getInstance_25;
  //endregion
  return _;
}));
