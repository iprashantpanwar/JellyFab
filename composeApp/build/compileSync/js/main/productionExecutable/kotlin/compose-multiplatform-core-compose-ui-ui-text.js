(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-util.js', './androidx-compose-runtime-runtime-saveable.js', './kotlinx-coroutines-core.js', './androidx-compose-runtime-runtime.js', './kotlinx-atomicfu.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'), require('./androidx-compose-runtime-runtime-saveable.js'), require('./kotlinx-coroutines-core.js'), require('./androidx-compose-runtime-runtime.js'), require('./kotlinx-atomicfu.js'), require('./skiko-kjs.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
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
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-text'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['androidx-compose-runtime-runtime-saveable'], globalThis['kotlinx-coroutines-core'], globalThis['androidx-compose-runtime-runtime'], globalThis['kotlinx-atomicfu'], globalThis['skiko-kjs']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_collection_collection, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_androidx_compose_runtime_runtime_saveable, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.z9;
  var objectCreate = kotlin_kotlin.$_$.y9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i9;
  var VOID = kotlin_kotlin.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.b3;
  var toString = kotlin_kotlin.$_$.oe;
  var hashCode = kotlin_kotlin.$_$.g9;
  var getStringHashCode = kotlin_kotlin.$_$.f9;
  var THROW_CCE = kotlin_kotlin.$_$.md;
  var equals = kotlin_kotlin.$_$.z8;
  var initMetadataForClass = kotlin_kotlin.$_$.h9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var emptyList = kotlin_kotlin.$_$.p4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var FunctionAdapter = kotlin_kotlin.$_$.m8;
  var isInterface = kotlin_kotlin.$_$.q9;
  var Comparator = kotlin_kotlin.$_$.ad;
  var compareValues = kotlin_kotlin.$_$.u6;
  var ensureNotNull = kotlin_kotlin.$_$.wd;
  var sortedWith = kotlin_kotlin.$_$.m6;
  var first = kotlin_kotlin.$_$.y4;
  var mutableIntListOf = kotlin_androidx_collection_collection.$_$.y;
  var charCodeAt = kotlin_kotlin.$_$.s8;
  var substring = kotlin_kotlin.$_$.kc;
  var CharSequence = kotlin_kotlin.$_$.wc;
  var coerceIn = kotlin_kotlin.$_$.sa;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.g;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var charSequenceLength = kotlin_kotlin.$_$.u8;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var coerceAtLeast = kotlin_kotlin.$_$.la;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var get_lastIndex = kotlin_kotlin.$_$.m5;
  var addAll = kotlin_kotlin.$_$.t3;
  var plus = kotlin_kotlin.$_$.b6;
  var last = kotlin_kotlin.$_$.r5;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u3;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o3;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var BlendMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c1;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var Long = kotlin_kotlin.$_$.hd;
  var bitwiseAnd = kotlin_kotlin.$_$.t7;
  var convertToInt = kotlin_kotlin.$_$.x7;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.u2;
  var floatFromBits = kotlin_kotlin.$_$.a9;
  var shiftRight = kotlin_kotlin.$_$.j8;
  var toRawBits = kotlin_kotlin.$_$.me;
  var fromInt = kotlin_kotlin.$_$.b8;
  var shiftLeft = kotlin_kotlin.$_$.h8;
  var bitwiseOr = kotlin_kotlin.$_$.u7;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var toString_0 = kotlin_kotlin.$_$.ba;
  var getNumberHashCode = kotlin_kotlin.$_$.d9;
  var fastJoinToString = kotlin_org_jetbrains_compose_ui_ui_util.$_$.b;
  var compareTo = kotlin_kotlin.$_$.v8;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.e;
  var lazy = kotlin_kotlin.$_$.ae;
  var KProperty1 = kotlin_kotlin.$_$.cb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.e9;
  var numberToInt = kotlin_kotlin.$_$.x9;
  var initMetadataForInterface = kotlin_kotlin.$_$.l9;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z3;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j3;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var TextUnit__hashCode_impl_qsmeov = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.y;
  var TextUnit__toString_impl_51ghw0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h3;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g3;
  var equalsLong = kotlin_kotlin.$_$.a8;
  var Enum = kotlin_kotlin.$_$.bd;
  var Saver = kotlin_androidx_compose_runtime_runtime_saveable.$_$.d;
  var arrayListOf = kotlin_kotlin.$_$.v3;
  var KtList = kotlin_kotlin.$_$.k3;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ce;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a4;
  var Shadow = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.m2;
  var toArgb = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z1;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p;
  var _TextUnit___get_type__impl__uc2olt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i3;
  var TextUnitType = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var TextUnit_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var Saver_0 = kotlin_androidx_compose_runtime_runtime_saveable.$_$.c;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u2;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w2;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w1;
  var lerp_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v1;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p3;
  var lerp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f1;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y2;
  var IntSize__toString_impl_54w9zl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var getBooleanHashCode = kotlin_kotlin.$_$.b9;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var Constraints__toString_impl_37yskr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var initMetadataForObject = kotlin_kotlin.$_$.n9;
  var LruCache = kotlin_androidx_collection_collection.$_$.c;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var Exception = kotlin_kotlin.$_$.dd;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.k1;
  var CoroutineImpl = kotlin_kotlin.$_$.m7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x6;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.j9;
  var mutableScatterMapOf = kotlin_androidx_collection_collection.$_$.h1;
  var KMutableProperty1 = kotlin_kotlin.$_$.ab;
  var initMetadataForLambda = kotlin_kotlin.$_$.m9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var get_indices = kotlin_kotlin.$_$.g5;
  var yield_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y1;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var CancellationException = kotlin_kotlin.$_$.w6;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.b7;
  var Element = kotlin_kotlin.$_$.k7;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.s2;
  var Key_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b2;
  var to = kotlin_kotlin.$_$.pe;
  var mutableListOf = kotlin_kotlin.$_$.z5;
  var Companion_instance = kotlin_kotlin.$_$.a3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.g2;
  var createFailure = kotlin_kotlin.$_$.vd;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.j2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.i2;
  var listOf = kotlin_kotlin.$_$.v5;
  var Comparable = kotlin_kotlin.$_$.zc;
  var lerp_2 = kotlin_org_jetbrains_compose_ui_ui_util.$_$.d;
  var getKClassFromExpression = kotlin_kotlin.$_$.xa;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a2;
  var joinTo = kotlin_kotlin.$_$.j5;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.g1;
  var charArray = kotlin_kotlin.$_$.r8;
  var arrayCopy = kotlin_kotlin.$_$.u3;
  var Collection = kotlin_kotlin.$_$.j3;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var lerp_3 = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var ShaderBrush = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e1;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h1;
  var isNaN_0 = kotlin_kotlin.$_$.yd;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l3;
  var toList = kotlin_kotlin.$_$.r6;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CharDirection_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l4;
  var until = kotlin_kotlin.$_$.wa;
  var subtract = kotlin_kotlin.$_$.k8;
  var compare = kotlin_kotlin.$_$.w7;
  var currentNanoTime = kotlin_org_jetbrains_skiko_skiko.$_$.f6;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.o4;
  var charSequenceGet = kotlin_kotlin.$_$.t8;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.z2;
  var isLowSurrogate = kotlin_kotlin.$_$.yb;
  var isHighSurrogate = kotlin_kotlin.$_$.wb;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.e2;
  var sequence = kotlin_kotlin.$_$.lb;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.c2;
  var SequenceScope = kotlin_kotlin.$_$.db;
  var numberRangeToNumber = kotlin_kotlin.$_$.u9;
  var lazy_0 = kotlin_kotlin.$_$.be;
  var FontRastrSettings = kotlin_org_jetbrains_skiko_skiko.$_$.h5;
  var FontEdging_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s2;
  var FontEdging_ANTI_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t2;
  var FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u2;
  var FontHinting_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w2;
  var FontHinting_SLIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y2;
  var FontHinting_NORMAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x2;
  var FontHinting_FULL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v2;
  var asList = kotlin_kotlin.$_$.w3;
  var binarySearch = kotlin_kotlin.$_$.z3;
  var get_lastIndex_0 = kotlin_kotlin.$_$.n5;
  var coerceAtMost = kotlin_kotlin.$_$.pa;
  var RectHeightMode_STRUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x;
  var RectWidthMode_TIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y;
  var firstOrNull = kotlin_kotlin.$_$.x4;
  var first_0 = kotlin_kotlin.$_$.a5;
  var Rect_0 = kotlin_org_jetbrains_skiko_skiko.$_$.a6;
  var TextBox = kotlin_org_jetbrains_skiko_skiko.$_$.n5;
  var get_lastIndex_1 = kotlin_kotlin.$_$.ac;
  var lastOrNull = kotlin_kotlin.$_$.q5;
  var toComposeRect = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b2;
  var RectHeightMode_MAX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w;
  var asSkiaPath = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n1;
  var coerceAtMost_0 = kotlin_kotlin.$_$.na;
  var Rect_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f;
  var getOrNull = kotlin_kotlin.$_$.b5;
  var Direction_RTL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n;
  var Direction_LTR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m;
  var isWhitespace = kotlin_kotlin.$_$.zb;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x1;
  var LineMetrics = kotlin_org_jetbrains_skiko_skiko.$_$.i5;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.w1;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.v3;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d3;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.e4;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.t4;
  var copyToArray = kotlin_kotlin.$_$.n4;
  var Size__toString_impl_o87ni8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var BlendMode__toString_impl_uuibkd = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n2;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var BlendMode__hashCode_impl_93ceri = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m2;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.v4;
  var DecorationLineStyle_SOLID_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k;
  var DecorationStyle = kotlin_org_jetbrains_skiko_skiko.$_$.g5;
  var Shadow_0 = kotlin_org_jetbrains_skiko_skiko.$_$.m5;
  var _TextUnit___get_isSp__impl__8c3r6q = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var _TextUnit___get_isEm__impl__esrmtl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d3;
  var DecorationLineStyle_WAVY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l;
  var DecorationLineStyle_DASHED_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h;
  var DecorationLineStyle_DOTTED_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i;
  var DecorationLineStyle_DOUBLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j;
  var KProperty0 = kotlin_kotlin.$_$.bb;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.je;
  var sortWith = kotlin_kotlin.$_$.k6;
  var asReversed = kotlin_kotlin.$_$.x3;
  var ParagraphStyle = kotlin_org_jetbrains_skiko_skiko.$_$.k5;
  var HeightMode_DISABLE_ALL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p;
  var TextIndent = kotlin_org_jetbrains_skiko_skiko.$_$.o5;
  var Font_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.b4;
  var ParagraphBuilder = kotlin_org_jetbrains_skiko_skiko.$_$.j5;
  var BaselineMode_ALPHABETIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g;
  var PlaceholderStyle = kotlin_org_jetbrains_skiko_skiko.$_$.l5;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
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
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var listOf_0 = kotlin_kotlin.$_$.u5;
  var FontCollection_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.u3;
  var TypefaceFontProviderWithFallback_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.w3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var FontMgrWithFallback = kotlin_org_jetbrains_skiko_skiko.$_$.t5;
  var FontVariation_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.d4;
  var mapOf = kotlin_kotlin.$_$.x5;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r3;
  var firstOrNull_0 = kotlin_kotlin.$_$.w4;
  var Paint = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var derivedStateOf = kotlin_androidx_compose_runtime_runtime.$_$.j1;
  var coerceIn_0 = kotlin_kotlin.$_$.ra;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x3;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b4;
  var setOf = kotlin_kotlin.$_$.j6;
  var get_hostOs = kotlin_org_jetbrains_skiko_skiko.$_$.h6;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.u4;
  var Companion_getInstance_12 = kotlin_org_jetbrains_skiko_skiko.$_$.s4;
  var FontSlant_UPRIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a3;
  var FontSlant_ITALIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z2;
  var FontStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.c4;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(MutableRange, 'MutableRange');
  initMetadataForClass(BulletScope, 'BulletScope');
  initMetadataForClass(Range, 'Range');
  initMetadataForClass(Builder, 'Builder', Builder);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(AnnotatedString, 'AnnotatedString', VOID, VOID, [CharSequence]);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(LinkAnnotation, 'LinkAnnotation');
  initMetadataForClass(Url, 'Url', VOID, LinkAnnotation);
  initMetadataForClass(Clickable, 'Clickable', VOID, LinkAnnotation);
  initMetadataForClass(MultiParagraph, 'MultiParagraph');
  initMetadataForClass(ParagraphInfo, 'ParagraphInfo');
  function get_hasStaleResolvedFonts() {
    return false;
  }
  initMetadataForInterface(ParagraphIntrinsics, 'ParagraphIntrinsics');
  initMetadataForClass(MultiParagraphIntrinsics, 'MultiParagraphIntrinsics', VOID, VOID, [ParagraphIntrinsics]);
  initMetadataForClass(ParagraphIntrinsicInfo, 'ParagraphIntrinsicInfo');
  initMetadataForClass(ParagraphStyle_0, 'ParagraphStyle');
  initMetadataForClass(Placeholder, 'Placeholder');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(AnnotationType, 'AnnotationType', VOID, Enum);
  initMetadataForInterface(NonNullValueClassSaver, 'NonNullValueClassSaver', VOID, VOID, [Saver]);
  initMetadataForClass(NonNullValueClassSaver$1, VOID, VOID, VOID, [NonNullValueClassSaver]);
  initMetadataForClass(SpanStyle, 'SpanStyle');
  initMetadataForClass(StringAnnotation, 'StringAnnotation');
  initMetadataForClass(TextLayoutResult, 'TextLayoutResult');
  initMetadataForClass(TextLayoutInput, 'TextLayoutInput');
  initMetadataForClass(TextLinkStyles, 'TextLinkStyles', TextLinkStyles);
  initMetadataForObject(TextPainter, 'TextPainter');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(TextRange, 'TextRange');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(TextStyle, 'TextStyle');
  initMetadataForClass(TtsAnnotation, 'TtsAnnotation');
  initMetadataForClass(VerbatimTtsAnnotation, 'VerbatimTtsAnnotation', VOID, TtsAnnotation);
  initMetadataForClass(UrlAnnotation, 'UrlAnnotation');
  function get_loadingStrategy() {
    return Companion_getInstance_21().c5t_1;
  }
  initMetadataForInterface(Font, 'Font');
  initMetadataForClass(FontFamily, 'FontFamily');
  initMetadataForClass(SystemFontFamily, 'SystemFontFamily', VOID, FontFamily);
  initMetadataForClass(GenericFontFamily, 'GenericFontFamily', VOID, SystemFontFamily);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(DefaultFontFamily, 'DefaultFontFamily', VOID, SystemFontFamily);
  initMetadataForClass(FileBasedFontFamily, 'FileBasedFontFamily', VOID, FontFamily);
  initMetadataForClass(FontListFontFamily, 'FontListFontFamily', VOID, FileBasedFontFamily, [FileBasedFontFamily, KtList]);
  initMetadataForClass(LoadedFontFamily, 'LoadedFontFamily', VOID, FontFamily);
  initMetadataForClass(TypefaceRequestCache, 'TypefaceRequestCache', TypefaceRequestCache);
  initMetadataForClass(TypefaceRequest, 'TypefaceRequest');
  initMetadataForClass(Immutable, 'Immutable');
  initMetadataForClass(Async, 'Async');
  initMetadataForClass(FontFamilyResolverImpl, 'FontFamilyResolverImpl', VOID, VOID, VOID, [1]);
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
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(AsyncTypefaceResult, 'AsyncTypefaceResult');
  initMetadataForClass(Key, 'Key');
  initMetadataForCoroutine($runCachedCOROUTINE$, CoroutineImpl);
  initMetadataForClass(AsyncTypefaceCache, 'AsyncTypefaceCache', AsyncTypefaceCache, VOID, VOID, [4]);
  initMetadataForLambda(AsyncFontListLoader$load$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AsyncFontListLoader$loadWithTimeoutOrNull$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($loadCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($loadWithTimeoutOrNullCOROUTINE$, CoroutineImpl);
  initMetadataForClass(AsyncFontListLoader, 'AsyncFontListLoader', VOID, VOID, VOID, [0, 1]);
  initMetadataForClass(FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1, VOID, VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Element]);
  initMetadataForCompanion(Companion_6);
  initMetadataForLambda(FontListFontFamilyTypefaceAdapter$resolve$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(FontListFontFamilyTypefaceAdapter, 'FontListFontFamilyTypefaceAdapter', FontListFontFamilyTypefaceAdapter, VOID, VOID, [2]);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(FontMatcher, 'FontMatcher', FontMatcher);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(FontStyle, 'FontStyle');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(FontSynthesis, 'FontSynthesis');
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(FontWeight, 'FontWeight', VOID, VOID, [Comparable]);
  initMetadataForClass(FinishComposingTextCommand, 'FinishComposingTextCommand', FinishComposingTextCommand);
  initMetadataForClass(CommitTextCommand, 'CommitTextCommand');
  initMetadataForClass(DeleteSurroundingTextCommand, 'DeleteSurroundingTextCommand');
  initMetadataForClass(DeleteAllCommand, 'DeleteAllCommand', DeleteAllCommand);
  initMetadataForClass(SetSelectionCommand, 'SetSelectionCommand');
  initMetadataForClass(SetComposingTextCommand, 'SetComposingTextCommand');
  initMetadataForClass(SetComposingRegionCommand, 'SetComposingRegionCommand');
  initMetadataForClass(DeleteSurroundingTextInCodePointsCommand, 'DeleteSurroundingTextInCodePointsCommand');
  initMetadataForClass(BackspaceCommand, 'BackspaceCommand', BackspaceCommand);
  initMetadataForClass(MoveCursorCommand, 'MoveCursorCommand');
  initMetadataForClass(EditProcessor, 'EditProcessor', EditProcessor);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(EditingBuffer, 'EditingBuffer');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(PartialGapBuffer, 'PartialGapBuffer');
  initMetadataForClass(GapBuffer, 'GapBuffer');
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(ImeAction, 'ImeAction');
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(ImeOptions, 'ImeOptions');
  initMetadataForCompanion(Companion_15);
  initMetadataForClass(KeyboardCapitalization, 'KeyboardCapitalization');
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(KeyboardType, 'KeyboardType');
  initMetadataForClass(OffsetMapping$Companion$Identity$1);
  initMetadataForCompanion(Companion_17);
  initMetadataForCompanion(Companion_18);
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
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(TransformedText, 'TransformedText');
  initMetadataForClass(PasswordVisualTransformation, 'PasswordVisualTransformation', VOID, VOID, [VisualTransformation]);
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(Locale, 'Locale');
  initMetadataForCompanion(Companion_21);
  initMetadataForClass(LocaleList, 'LocaleList', VOID, VOID, [Collection]);
  initMetadataForCompanion(Companion_22);
  initMetadataForClass(BaselineShift, 'BaselineShift');
  initMetadataForCompanion(Companion_23);
  initMetadataForClass(Hyphens, 'Hyphens');
  initMetadataForCompanion(Companion_24);
  initMetadataForCompanion(Companion_25);
  initMetadataForCompanion(Companion_26);
  initMetadataForCompanion(Companion_27);
  initMetadataForClass(Trim, 'Trim');
  initMetadataForClass(Alignment, 'Alignment');
  initMetadataForClass(Mode, 'Mode');
  initMetadataForClass(LineHeightStyle, 'LineHeightStyle');
  initMetadataForClass(ResolvedTextDirection, 'ResolvedTextDirection', VOID, Enum);
  initMetadataForCompanion(Companion_28);
  initMetadataForClass(TextAlign, 'TextAlign');
  initMetadataForCompanion(Companion_29);
  initMetadataForClass(TextDecoration, 'TextDecoration');
  initMetadataForCompanion(Companion_30);
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
      tmp = new BrushStyle(other.t63_1, takeOrElse_0(other.u63_1, TextForegroundStyle$merge$lambda(this)));
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
          tmp = other.z5p(TextForegroundStyle$merge$lambda_0(this));
        }
      }
    }
    return tmp;
  }
  function takeOrElse(other) {
    return !equals(this, Unspecified_instance) ? this : other();
  }
  initMetadataForInterface(TextForegroundStyle, 'TextForegroundStyle');
  initMetadataForObject(Unspecified, 'Unspecified', VOID, VOID, [TextForegroundStyle]);
  initMetadataForCompanion(Companion_31);
  initMetadataForClass(BrushStyle, 'BrushStyle', VOID, VOID, [TextForegroundStyle]);
  initMetadataForClass(ColorStyle, 'ColorStyle', VOID, VOID, [TextForegroundStyle]);
  initMetadataForCompanion(Companion_32);
  initMetadataForClass(TextGeometricTransform, 'TextGeometricTransform', TextGeometricTransform);
  initMetadataForCompanion(Companion_33);
  initMetadataForClass(TextIndent_0, 'TextIndent', TextIndent_0);
  initMetadataForCompanion(Companion_34);
  initMetadataForClass(TextOverflow, 'TextOverflow');
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForClass(ExpireAfterAccessCache, 'ExpireAfterAccessCache');
  initMetadataForCompanion(Companion_35);
  initMetadataForLambda(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(_get_codePoints_$slambda_43x8dt, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_36);
  initMetadataForClass(FontRasterizationSettings, 'FontRasterizationSettings');
  initMetadataForClass(FontSmoothing, 'FontSmoothing', VOID, Enum);
  initMetadataForClass(FontHinting, 'FontHinting', VOID, Enum);
  function paint$default(canvas, color, shadow, textDecoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().f4r_1 : color;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().g4w_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.d5k(canvas, color, shadow, textDecoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.d5k.call(this, canvas, new Color(color), shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  }
  function paint$default_0(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode, $super) {
    alpha = alpha === VOID ? NaN : alpha;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().g4w_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.f5k(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.f5k.call(this, canvas, brush, alpha, shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  }
  initMetadataForInterface(Paragraph_1, 'Paragraph');
  initMetadataForClass(SkiaParagraph, 'SkiaParagraph', VOID, VOID, [Paragraph_1]);
  initMetadataForCompanion(Companion_37);
  initMetadataForClass(TextDecorationLineStyle, 'TextDecorationLineStyle');
  initMetadataForClass(PlatformTextStyle, 'PlatformTextStyle');
  initMetadataForCompanion(Companion_38);
  initMetadataForClass(PlatformParagraphStyle, 'PlatformParagraphStyle');
  initMetadataForCompanion(Companion_39);
  initMetadataForClass(PlatformSpanStyle, 'PlatformSpanStyle', PlatformSpanStyle_init_$Create$);
  initMetadataForClass(PlatformFontFamilyTypefaceAdapter, 'PlatformFontFamilyTypefaceAdapter', PlatformFontFamilyTypefaceAdapter);
  initMetadataForClass(SkiaFontLoader, 'SkiaFontLoader', SkiaFontLoader_init_$Create$, VOID, VOID, [1]);
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
  initMetadataForClass(FontLoader, 'FontLoader', FontLoader);
  initMetadataForClass(FontLoadResult, 'FontLoadResult');
  initMetadataForClass(Platform, 'Platform', VOID, Enum);
  initMetadataForClass(FontCache, 'FontCache', FontCache);
  initMetadataForClass(PlatformFont, 'PlatformFont', VOID, VOID, [Font]);
  initMetadataForClass(LoadedFont, 'LoadedFont', VOID, PlatformFont);
  initMetadataForClass(SystemFont, 'SystemFont', VOID, PlatformFont);
  initMetadataForClass(SkiaBackedTypeface, 'SkiaBackedTypeface');
  initMetadataForClass(SkiaParagraphIntrinsics, 'SkiaParagraphIntrinsics', VOID, VOID, [ParagraphIntrinsics]);
  initMetadataForClass(SkiaTextPaint, 'SkiaTextPaint', SkiaTextPaint);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForCompanion(Companion_40);
  initMetadataForClass(LineBreak, 'LineBreak');
  initMetadataForCompanion(Companion_41);
  initMetadataForClass(TextMotion, 'TextMotion');
  initMetadataForClass(createPlatformLocaleDelegate$1);
  initMetadataForClass(NoCache, 'NoCache', NoCache);
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
  }
  var Companion_instance_0;
  function Companion_getInstance_13() {
    return Companion_instance_0;
  }
  function MutableRange(item, start, end, tag) {
    end = end === VOID ? -2147483648 : end;
    tag = tag === VOID ? '' : tag;
    this.w5g_1 = item;
    this.x5g_1 = start;
    this.y5g_1 = end;
    this.z5g_1 = tag;
  }
  protoOf(MutableRange).a5h = function (defaultEnd) {
    var end = this.y5g_1 === -2147483648 ? defaultEnd : this.y5g_1;
    // Inline function 'androidx.compose.ui.text.internal.checkPrecondition' call
    if (!!(end === -2147483648)) {
      var tmp$ret$0 = 'Item.end should be set first';
      throwIllegalStateException(tmp$ret$0);
    }
    return new Range(this.w5g_1, this.x5g_1, end, this.z5g_1);
  };
  protoOf(MutableRange).toString = function () {
    return 'MutableRange(item=' + toString(this.w5g_1) + ', start=' + this.x5g_1 + ', end=' + this.y5g_1 + ', tag=' + this.z5g_1 + ')';
  };
  protoOf(MutableRange).hashCode = function () {
    var result = this.w5g_1 == null ? 0 : hashCode(this.w5g_1);
    result = imul(result, 31) + this.x5g_1 | 0;
    result = imul(result, 31) + this.y5g_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.z5g_1) | 0;
    return result;
  };
  protoOf(MutableRange).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MutableRange))
      return false;
    var tmp0_other_with_cast = other instanceof MutableRange ? other : THROW_CCE();
    if (!equals(this.w5g_1, tmp0_other_with_cast.w5g_1))
      return false;
    if (!(this.x5g_1 === tmp0_other_with_cast.x5g_1))
      return false;
    if (!(this.y5g_1 === tmp0_other_with_cast.y5g_1))
      return false;
    if (!(this.z5g_1 === tmp0_other_with_cast.z5g_1))
      return false;
    return true;
  };
  function Builder_init_$Init$(text, $this) {
    Builder.call($this);
    $this.f5h(text);
    return $this;
  }
  function Builder_init_$Create$(text) {
    return Builder_init_$Init$(text, objectCreate(protoOf(Builder)));
  }
  function BulletScope(builder) {
    this.g5h_1 = builder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.h5h_1 = ArrayList_init_$Create$();
  }
  function AnnotatedString_init_$Init$(text, annotations, $this) {
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
    if (annotations.n()) {
      tmp_0 = null;
    } else {
      tmp_0 = annotations;
    }
    var tmp$ret$2 = tmp_0;
    AnnotatedString.call($this, tmp$ret$2, text);
    return $this;
  }
  function AnnotatedString_init_$Create$(text, annotations) {
    return AnnotatedString_init_$Init$(text, annotations, objectCreate(protoOf(AnnotatedString)));
  }
  function Range(item, start, end, tag) {
    this.i5h_1 = item;
    this.j5h_1 = start;
    this.k5h_1 = end;
    this.l5h_1 = tag;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(this.j5h_1 <= this.k5h_1)) {
      var tmp$ret$0 = 'Reversed range is not supported';
      throwIllegalArgumentException(tmp$ret$0);
    }
  }
  protoOf(Range).m5h = function (item, start, end, tag) {
    return new Range(item, start, end, tag);
  };
  protoOf(Range).n5h = function (item, start, end, tag, $super) {
    item = item === VOID ? this.i5h_1 : item;
    start = start === VOID ? this.j5h_1 : start;
    end = end === VOID ? this.k5h_1 : end;
    tag = tag === VOID ? this.l5h_1 : tag;
    return $super === VOID ? this.m5h(item, start, end, tag) : $super.m5h.call(this, item, start, end, tag);
  };
  protoOf(Range).toString = function () {
    return 'Range(item=' + toString(this.i5h_1) + ', start=' + this.j5h_1 + ', end=' + this.k5h_1 + ', tag=' + this.l5h_1 + ')';
  };
  protoOf(Range).hashCode = function () {
    var result = this.i5h_1 == null ? 0 : hashCode(this.i5h_1);
    result = imul(result, 31) + this.j5h_1 | 0;
    result = imul(result, 31) + this.k5h_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.l5h_1) | 0;
    return result;
  };
  protoOf(Range).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Range))
      return false;
    var tmp0_other_with_cast = other instanceof Range ? other : THROW_CCE();
    if (!equals(this.i5h_1, tmp0_other_with_cast.i5h_1))
      return false;
    if (!(this.j5h_1 === tmp0_other_with_cast.j5h_1))
      return false;
    if (!(this.k5h_1 === tmp0_other_with_cast.k5h_1))
      return false;
    if (!(this.l5h_1 === tmp0_other_with_cast.l5h_1))
      return false;
    return true;
  };
  function Builder(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    this.b5h_1 = StringBuilder_init_$Create$(capacity);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.c5h_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.d5h_1 = ArrayList_init_$Create$();
    this.e5h_1 = new BulletScope(this);
  }
  protoOf(Builder).g = function (text) {
    if (text instanceof AnnotatedString) {
      this.f5h(text);
    } else {
      this.b5h_1.g(text);
    }
    return this;
  };
  protoOf(Builder).v7 = function (char) {
    this.b5h_1.v7(char);
    return this;
  };
  protoOf(Builder).f5h = function (text) {
    var start = this.b5h_1.a();
    this.b5h_1.u7(text.p5h_1);
    var tmp0_safe_receiver = text.o5h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.m(index);
          this.d5h_1.h(new MutableRange(item.i5h_1, start + item.j5h_1 | 0, start + item.k5h_1 | 0, item.l5h_1));
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Builder).s5h = function (style, start, end) {
    this.d5h_1.h(new MutableRange(style, start, end));
  };
  protoOf(Builder).t5h = function () {
    var tmp = this.b5h_1.toString();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = this.d5h_1;
    var target = ArrayList_init_$Create$_0(this_0.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = item.a5h(this.b5h_1.a());
        target.h(element);
      }
       while (inductionVariable <= last);
    return AnnotatedString_init_$Create$(tmp, target);
  };
  function Companion_0() {
    Companion_instance_1 = this;
    this.u5h_1 = get_AnnotatedStringSaver();
  }
  var Companion_instance_1;
  function Companion_getInstance_14() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.v5h_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).zb = function (a, b) {
    return this.v5h_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.zb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).v2 = function () {
    return this.v5h_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.v2());
  };
  function AnnotatedString$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.j5h_1;
    var tmp$ret$1 = b.j5h_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function AnnotatedString(annotations, text) {
    Companion_getInstance_14();
    this.o5h_1 = annotations;
    this.p5h_1 = text;
    var spanStyles = null;
    var paragraphStyles = null;
    var tmp0_safe_receiver = this.o5h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.m(index);
          var tmp = item.i5h_1;
          if (tmp instanceof SpanStyle) {
            if (spanStyles == null) {
              // Inline function 'kotlin.collections.mutableListOf' call
              spanStyles = ArrayList_init_$Create$();
            }
            var tmp_0 = ensureNotNull(spanStyles);
            tmp_0.h(item instanceof Range ? item : THROW_CCE());
          } else {
            var tmp_1 = item.i5h_1;
            if (tmp_1 instanceof ParagraphStyle_0) {
              if (paragraphStyles == null) {
                // Inline function 'kotlin.collections.mutableListOf' call
                paragraphStyles = ArrayList_init_$Create$();
              }
              var tmp_2 = ensureNotNull(paragraphStyles);
              tmp_2.h(item instanceof Range ? item : THROW_CCE());
            }
          }
        }
         while (inductionVariable <= last);
    }
    this.q5h_1 = spanStyles;
    this.r5h_1 = paragraphStyles;
    var tmp1_safe_receiver = this.r5h_1;
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
    if (!(sorted == null || sorted.n())) {
      var previousEnds = mutableIntListOf(first(sorted).k5h_1);
      var inductionVariable_0 = 1;
      var last_0 = sorted.l();
      if (inductionVariable_0 < last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var current = sorted.m(i);
          $l$loop_0: while (true) {
            // Inline function 'androidx.collection.IntList.isNotEmpty' call
            if (!!(previousEnds.wi_1 === 0)) {
              break $l$loop_0;
            }
            var previousEnd = previousEnds.kd();
            if (current.j5h_1 >= previousEnd) {
              // Inline function 'androidx.collection.IntList.lastIndex' call
              var tmp$ret$8 = previousEnds.wi_1 - 1 | 0;
              previousEnds.k2(tmp$ret$8);
            } else {
              // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
              if (!(current.k5h_1 <= previousEnd)) {
                var tmp$ret$9 = 'Paragraph overlap not allowed, end ' + current.k5h_1 + ' should be less than or equal to ' + previousEnd;
                throwIllegalArgumentException(tmp$ret$9);
              }
              break $l$loop_0;
            }
          }
          previousEnds.bj(current.k5h_1);
        }
         while (inductionVariable_0 < last_0);
    }
  }
  protoOf(AnnotatedString).a = function () {
    return this.p5h_1.length;
  };
  protoOf(AnnotatedString).b = function (index) {
    return charCodeAt(this.p5h_1, index);
  };
  protoOf(AnnotatedString).c = function (startIndex, endIndex) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(startIndex <= endIndex)) {
      var tmp$ret$0 = 'start (' + startIndex + ') should be less or equal to end (' + endIndex + ')';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (startIndex === 0 && endIndex === this.p5h_1.length)
      return this;
    var text = substring(this.p5h_1, startIndex, endIndex);
    var tmp0_annotations = filterRanges(this.o5h_1, startIndex, endIndex);
    return new AnnotatedString(tmp0_annotations, text);
  };
  protoOf(AnnotatedString).w5h = function (range) {
    return this.c(_TextRange___get_min__impl__uu95c4(range), _TextRange___get_max__impl__owm8m(range));
  };
  protoOf(AnnotatedString).x5h = function (other) {
    // Inline function 'kotlin.with' call
    var $this$with = Builder_init_$Create$(this);
    $this$with.f5h(other);
    return $this$with.t5h();
  };
  protoOf(AnnotatedString).y5h = function (start, end) {
    var tmp0_safe_receiver = this.o5h_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.m(index);
            var tmp_0;
            var tmp_1 = item.i5h_1;
            if (tmp_1 instanceof LinkAnnotation) {
              tmp_0 = intersect(start, end, item.j5h_1, item.k5h_1);
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
    if (!(this.p5h_1 === other.p5h_1))
      return false;
    if (!equals(this.o5h_1, other.o5h_1))
      return false;
    return true;
  };
  protoOf(AnnotatedString).hashCode = function () {
    var result = getStringHashCode(this.p5h_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.o5h_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(AnnotatedString).toString = function () {
    return this.p5h_1;
  };
  protoOf(AnnotatedString).z5h = function (other) {
    return equals(this.o5h_1, other.o5h_1);
  };
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
    var target = ArrayList_init_$Create$_0(nonNullRange.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = nonNullRange.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nonNullRange.m(index);
        if (intersect(start, end, item.j5h_1, item.k5h_1)) {
          // Inline function 'kotlin.comparisons.maxOf' call
          var b = item.j5h_1;
          var tmp_0 = Math.max(start, b) - start | 0;
          // Inline function 'kotlin.comparisons.minOf' call
          var b_0 = item.k5h_1;
          var tmp$ret$4 = Math.min(end, b_0);
          // Inline function 'kotlin.collections.plusAssign' call
          var element = new Range(item.i5h_1, tmp_0, tmp$ret$4 - start | 0, item.l5h_1);
          target.h(element);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (target.n()) {
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
    var tmp0_elvis_lhs = _this__u8e3s4.o5h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var annotations = tmp;
    if (start === 0 && end >= _this__u8e3s4.p5h_1.length) {
      var tmp_0;
      if (predicate == null) {
        tmp_0 = annotations;
      } else {
        // Inline function 'androidx.compose.ui.util.fastFilter' call
        var target = ArrayList_init_$Create$_0(annotations.l());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable = 0;
        var last = annotations.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = annotations.m(index);
            if (predicate(item.i5h_1)) {
              // Inline function 'kotlin.collections.plusAssign' call
              target.h(item);
            }
          }
           while (inductionVariable <= last);
        tmp_0 = target;
      }
      return tmp_0;
    }
    // Inline function 'androidx.compose.ui.util.fastFilteredMap' call
    var target_0 = ArrayList_init_$Create$_0(annotations.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_0 = 0;
    var last_0 = annotations.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = annotations.m(index_0);
        var tmp_1;
        var tmp1_elvis_lhs = predicate == null ? null : predicate(item_0.i5h_1);
        if (tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs) {
          tmp_1 = intersect(start, end, item_0.j5h_1, item_0.k5h_1);
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          var tmp0_tag = item_0.l5h_1;
          var tmp1_item = item_0.i5h_1;
          var tmp2_start = coerceIn(item_0.j5h_1, start, end) - start | 0;
          var tmp3_end = coerceIn(item_0.k5h_1, start, end) - start | 0;
          // Inline function 'kotlin.collections.plusAssign' call
          var element = new Range(tmp1_item, tmp2_start, tmp3_end, tmp0_tag);
          target_0.h(element);
        }
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function emptyAnnotatedString() {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return get_EmptyAnnotatedString();
  }
  function normalizedParagraphStyles(_this__u8e3s4, defaultParagraphStyle) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp0_safe_receiver = _this__u8e3s4.r5h_1;
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
    var last = sortedParagraphs.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = sortedParagraphs.m(index);
        var current = item.n5h(defaultParagraphStyle.j5i(item.i5h_1));
        $l$loop: while (true) {
          var tmp_2;
          if (lastAdded < current.j5h_1) {
            // Inline function 'kotlin.collections.isNotEmpty' call
            tmp_2 = !stack.n();
          } else {
            tmp_2 = false;
          }
          if (!tmp_2) {
            break $l$loop;
          }
          var lastInStack = stack.kd();
          if (current.j5h_1 < lastInStack.k5h_1) {
            result.h(Range_init_$Create$(lastInStack.i5h_1, lastAdded, current.j5h_1));
            lastAdded = current.j5h_1;
          } else {
            result.h(Range_init_$Create$(lastInStack.i5h_1, lastAdded, lastInStack.k5h_1));
            lastAdded = lastInStack.k5h_1;
            $l$loop_0: while (true) {
              var tmp_3;
              // Inline function 'kotlin.collections.isNotEmpty' call
              if (!stack.n()) {
                tmp_3 = lastAdded === stack.kd().k5h_1;
              } else {
                tmp_3 = false;
              }
              if (!tmp_3) {
                break $l$loop_0;
              }
              stack.qd();
            }
          }
        }
        if (lastAdded < current.j5h_1) {
          result.h(Range_init_$Create$(defaultParagraphStyle, lastAdded, current.j5h_1));
          lastAdded = current.j5h_1;
        }
        var lastInStack_0 = stack.ld();
        if (!(lastInStack_0 == null)) {
          if (lastInStack_0.j5h_1 === current.j5h_1 && lastInStack_0.k5h_1 === current.k5h_1) {
            stack.qd();
            stack.h(Range_init_$Create$(lastInStack_0.i5h_1.j5i(current.i5h_1), current.j5h_1, current.k5h_1));
          } else if (lastInStack_0.j5h_1 === lastInStack_0.k5h_1) {
            result.h(Range_init_$Create$(lastInStack_0.i5h_1, lastInStack_0.j5h_1, lastInStack_0.k5h_1));
            stack.qd();
            stack.h(Range_init_$Create$(current.i5h_1, current.j5h_1, current.k5h_1));
          } else if (lastInStack_0.k5h_1 < current.k5h_1) {
            throw IllegalArgumentException_init_$Create$();
          } else {
            stack.h(Range_init_$Create$(lastInStack_0.i5h_1.j5i(current.i5h_1), current.j5h_1, current.k5h_1));
          }
        } else {
          stack.h(Range_init_$Create$(current.i5h_1, current.j5h_1, current.k5h_1));
        }
      }
       while (inductionVariable <= last);
    $l$loop_1: while (true) {
      var tmp_4;
      if (lastAdded <= _this__u8e3s4.p5h_1.length) {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_4 = !stack.n();
      } else {
        tmp_4 = false;
      }
      if (!tmp_4) {
        break $l$loop_1;
      }
      var lastInStack_1 = stack.kd();
      result.h(Range_init_$Create$(lastInStack_1.i5h_1, lastAdded, lastInStack_1.k5h_1));
      lastAdded = lastInStack_1.k5h_1;
      $l$loop_2: while (true) {
        var tmp_5;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!stack.n()) {
          tmp_5 = lastAdded === stack.kd().k5h_1;
        } else {
          tmp_5 = false;
        }
        if (!tmp_5) {
          break $l$loop_2;
        }
        stack.qd();
      }
    }
    if (lastAdded < _this__u8e3s4.p5h_1.length) {
      result.h(Range_init_$Create$(defaultParagraphStyle, lastAdded, _this__u8e3s4.p5h_1.length));
    }
    if (result.n()) {
      result.h(Range_init_$Create$(defaultParagraphStyle, 0, 0));
    }
    return result;
  }
  function substringWithoutParagraphStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp = !(start === end) ? substring(_this__u8e3s4.p5h_1, start, end) : '';
    var tmp0_elvis_lhs = getLocalAnnotations(_this__u8e3s4, start, end, substringWithoutParagraphStyles$lambda);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return AnnotatedString_init_$Create$(tmp, tmp_0);
  }
  function access$substringWithoutParagraphStyles$tAnnotatedStringKt($receiver, start, end) {
    return substringWithoutParagraphStyles($receiver, start, end);
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.k5i_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).zb = function (a, b) {
    return this.k5i_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.zb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).v2 = function () {
    return this.k5i_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0_0).hashCode = function () {
    return hashCode(this.v2());
  };
  function normalizedParagraphStyles$lambda(a, b) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.j5h_1;
    var tmp$ret$1 = b.j5h_1;
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
      EmptyAnnotatedString = AnnotatedString_init_$Create$('');
      androidx_compose_ui_text_AnnotatedString_Range$stable = 0;
      androidx_compose_ui_text_AnnotatedString_Builder_BulletScope$stable = 8;
      androidx_compose_ui_text_AnnotatedString_Builder$stable = 8;
      androidx_compose_ui_text_AnnotatedString$stable = 0;
    }
  }
  var androidx_compose_ui_text_Bullet$stable;
  var androidx_compose_ui_text_LinkAnnotation_Url$stable;
  var androidx_compose_ui_text_LinkAnnotation_Clickable$stable;
  var androidx_compose_ui_text_LinkAnnotation$stable;
  function Url(url, styles, linkInteractionListener) {
    styles = styles === VOID ? null : styles;
    linkInteractionListener = linkInteractionListener === VOID ? null : linkInteractionListener;
    LinkAnnotation.call(this);
    this.l5i_1 = url;
    this.m5i_1 = styles;
    this.n5i_1 = linkInteractionListener;
  }
  protoOf(Url).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Url))
      return false;
    if (!(this.l5i_1 === other.l5i_1))
      return false;
    if (!equals(this.m5i_1, other.m5i_1))
      return false;
    if (!equals(this.n5i_1, other.n5i_1))
      return false;
    return true;
  };
  protoOf(Url).hashCode = function () {
    var result = getStringHashCode(this.l5i_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.m5i_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.n5i_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(Url).toString = function () {
    return 'LinkAnnotation.Url(url=' + this.l5i_1 + ')';
  };
  function Clickable(tag, styles, linkInteractionListener) {
    styles = styles === VOID ? null : styles;
    LinkAnnotation.call(this);
    this.o5i_1 = tag;
    this.p5i_1 = styles;
    this.q5i_1 = linkInteractionListener;
  }
  protoOf(Clickable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Clickable))
      return false;
    if (!(this.o5i_1 === other.o5i_1))
      return false;
    if (!equals(this.p5i_1, other.p5i_1))
      return false;
    if (!equals(this.q5i_1, other.q5i_1))
      return false;
    return true;
  };
  protoOf(Clickable).hashCode = function () {
    var result = getStringHashCode(this.o5i_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.p5i_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.q5i_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(Clickable).toString = function () {
    return 'LinkAnnotation.Clickable(tag=' + this.o5i_1 + ')';
  };
  function LinkAnnotation() {
  }
  var androidx_compose_ui_text_MultiParagraph$stable;
  var androidx_compose_ui_text_ParagraphInfo$stable;
  function _get_annotatedString__kqljtk($this) {
    return $this.w5i_1.r5i_1;
  }
  function requireIndexInRange($this, offset) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= offset ? offset <= (charSequenceLength(_get_annotatedString__kqljtk($this).p5h_1) - 1 | 0) : false)) {
      var tmp$ret$0 = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).a() + ')';
      throwIllegalArgumentException(tmp$ret$0);
    }
  }
  function requireIndexInRangeInclusiveEnd($this, offset) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= offset ? offset <= _get_annotatedString__kqljtk($this).p5h_1.length : false)) {
      var tmp$ret$0 = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).a() + ']';
      throwIllegalArgumentException(tmp$ret$0);
    }
  }
  function requireLineIndexInRange($this, lineIndex) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= lineIndex ? lineIndex < $this.b5j_1 : false)) {
      var tmp$ret$0 = 'lineIndex(' + lineIndex + ') is out of bounds [0, ' + $this.b5j_1 + ')';
      throwIllegalArgumentException(tmp$ret$0);
    }
  }
  function MultiParagraph$getPathForRange$lambda($path, $start, $end) {
    return function (paragraphInfo) {
      // Inline function 'kotlin.with' call
      $path.g4x(paragraphInfo.n5j(paragraphInfo.e5j_1.m5j(paragraphInfo.l5j($start), paragraphInfo.l5j($end))));
      return Unit_instance;
    };
  }
  function MultiParagraph(intrinsics, constraints, maxLines, overflow) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    overflow = overflow === VOID ? Companion_getInstance_48().o5j_1 : overflow;
    this.w5i_1 = intrinsics;
    this.x5i_1 = maxLines;
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
    var infoList = this.w5i_1.v5i_1;
    var inductionVariable = 0;
    var last = infoList.l() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraphInfo = infoList.m(index);
        var tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
        var tmp_0;
        if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints)) {
          tmp_0 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints) - ceilToInt(currentHeight) | 0, 0);
        } else {
          tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
        }
        var paragraph = Paragraph_0(paragraphInfo.t5j_1, Constraints(VOID, tmp, VOID, tmp_0), this.x5i_1 - currentLineCount | 0, overflow);
        var paragraphTop = currentHeight;
        var paragraphBottom = currentHeight + paragraph.t3u();
        currentHeight = paragraphBottom;
        var startLineIndex = currentLineCount;
        var endLineIndex = startLineIndex + paragraph.w5j() | 0;
        currentLineCount = endLineIndex;
        paragraphInfoList.h(new ParagraphInfo(paragraph, paragraphInfo.u5j_1, paragraphInfo.v5j_1, startLineIndex, endLineIndex, paragraphTop, paragraphBottom));
        if (paragraph.x5j() || (endLineIndex === this.x5i_1 && !(index === get_lastIndex(this.w5i_1.v5i_1)))) {
          didExceedMaxLines = true;
          break $l$loop;
        }
      }
       while (inductionVariable <= last);
    this.a5j_1 = currentHeight;
    this.b5j_1 = currentLineCount;
    this.y5i_1 = didExceedMaxLines;
    this.d5j_1 = paragraphInfoList;
    this.z5i_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.util.fastFlatMap' call
    var target = ArrayList_init_$Create$_0(paragraphInfoList.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_0 = 0;
    var last_0 = paragraphInfoList.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = paragraphInfoList.m(index_0);
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.util.fastMap' call
        var this_0 = item.e5j_1.y5j();
        var target_0 = ArrayList_init_$Create$_0(this_0.l());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable_1 = 0;
        var last_1 = this_0.l() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_0 = this_0.m(index_1);
            // Inline function 'kotlin.collections.plusAssign' call
            var element = item_0 == null ? null : item.z5j(item_0);
            target_0.h(element);
          }
           while (inductionVariable_1 <= last_1);
        var list = target_0;
        addAll(target, list);
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.let' call
    var tmp_2;
    if (target.l() < this.w5i_1.s5i_1.l()) {
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = this.w5i_1.s5i_1.l() - target.l() | 0;
      var list_0 = ArrayList_init_$Create$_0(size);
      // Inline function 'kotlin.repeat' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < size)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          list_0.h(null);
        }
         while (inductionVariable_2 < size);
      tmp_2 = plus(target, list_0);
    } else {
      tmp_2 = target;
    }
    tmp_1.c5j_1 = tmp_2;
  }
  protoOf(MultiParagraph).a5k = function () {
    var tmp;
    if (this.d5j_1.n()) {
      tmp = 0.0;
    } else {
      tmp = this.d5j_1.m(0).e5j_1.a5k();
    }
    return tmp;
  };
  protoOf(MultiParagraph).b5k = function () {
    var tmp;
    if (this.d5j_1.n()) {
      tmp = 0.0;
    } else {
      // Inline function 'kotlin.with' call
      var $this$with = last(this.d5j_1);
      tmp = $this$with.c5k($this$with.e5j_1.b5k());
    }
    return tmp;
  };
  protoOf(MultiParagraph).d5k = function (canvas, color, shadow, decoration, drawStyle, blendMode) {
    canvas.k4s();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.d5j_1;
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        item.e5j_1.d5k(canvas, color, shadow, decoration, drawStyle, blendMode);
        canvas.m3t(0.0, item.e5j_1.t3u());
      }
       while (inductionVariable <= last);
    canvas.l4s();
  };
  protoOf(MultiParagraph).e5k = function (canvas, color, shadow, decoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().f4r_1 : color;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().g4w_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.d5k(canvas, color, shadow, decoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.d5k.call(this, canvas, new Color(color), shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(MultiParagraph).f5k = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    drawMultiParagraph(this, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
  };
  protoOf(MultiParagraph).g5k = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode, $super) {
    alpha = alpha === VOID ? NaN : alpha;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().g4w_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.f5k(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.f5k.call(this, canvas, brush, alpha, shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(MultiParagraph).m5j = function (start, end) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!((0 <= start ? start <= end : false) && end <= _get_annotatedString__kqljtk(this).p5h_1.length)) {
      var tmp$ret$0 = 'Start(' + start + ') or End(' + end + ') is out of range [0..' + _get_annotatedString__kqljtk(this).p5h_1.length + '),' + ' or start > end!';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (start === end)
      return Path();
    var path = Path();
    var tmp = TextRange_1(start, end);
    findParagraphsByRange(this.d5j_1, tmp, MultiParagraph$getPathForRange$lambda(path, start, end));
    return path;
  };
  protoOf(MultiParagraph).h5k = function (vertical) {
    var paragraphIndex = findParagraphByY(this.d5j_1, vertical);
    // Inline function 'kotlin.with' call
    var $this$with = this.d5j_1.m(paragraphIndex);
    var tmp;
    if ($this$with.a() === 0) {
      tmp = $this$with.h5j_1;
    } else {
      tmp = $this$with.j5k($this$with.e5j_1.h5k($this$with.i5k(vertical)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).k5k = function (position) {
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _Offset___get_packedValue__impl__xh2k8q(position);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    var tmp$ret$3 = floatFromBits(bits);
    var paragraphIndex = findParagraphByY(this.d5j_1, tmp$ret$3);
    // Inline function 'kotlin.with' call
    var $this$with = this.d5j_1.m(paragraphIndex);
    var tmp;
    if ($this$with.a() === 0) {
      tmp = $this$with.f5j_1;
    } else {
      tmp = $this$with.m5k($this$with.e5j_1.k5k($this$with.l5k(position)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).n5k = function (offset) {
    requireIndexInRange(this, offset);
    var paragraphIndex = findParagraphByIndex(this.d5j_1, offset);
    // Inline function 'kotlin.with' call
    var $this$with = this.d5j_1.m(paragraphIndex);
    return $this$with.z5j($this$with.e5j_1.n5k($this$with.l5j(offset)));
  };
  protoOf(MultiParagraph).o5k = function (offset, usePrimaryDirection) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.d5j_1);
    } else {
      tmp = findParagraphByIndex(this.d5j_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.d5j_1.m(paragraphIndex);
    return $this$with.e5j_1.o5k($this$with.l5j(offset), usePrimaryDirection);
  };
  protoOf(MultiParagraph).p5k = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.d5j_1);
    } else {
      tmp = findParagraphByIndex(this.d5j_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.d5j_1.m(paragraphIndex);
    return $this$with.e5j_1.p5k($this$with.l5j(offset));
  };
  protoOf(MultiParagraph).q5k = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.d5j_1);
    } else {
      tmp = findParagraphByIndex(this.d5j_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.d5j_1.m(paragraphIndex);
    return $this$with.e5j_1.q5k($this$with.l5j(offset));
  };
  protoOf(MultiParagraph).r5k = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.d5j_1);
    } else {
      tmp = findParagraphByIndex(this.d5j_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.d5j_1.m(paragraphIndex);
    return $this$with.s5k($this$with.e5j_1.r5k($this$with.l5j(offset)), false);
  };
  protoOf(MultiParagraph).u5k = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.d5j_1);
    } else {
      tmp = findParagraphByIndex(this.d5j_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.d5j_1.m(paragraphIndex);
    return $this$with.z5j($this$with.e5j_1.u5k($this$with.l5j(offset)));
  };
  protoOf(MultiParagraph).v5k = function (offset) {
    var tmp;
    if (offset >= _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.d5j_1);
    } else if (offset < 0) {
      tmp = 0;
    } else {
      tmp = findParagraphByIndex(this.d5j_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.d5j_1.m(paragraphIndex);
    return $this$with.j5k($this$with.e5j_1.v5k($this$with.l5j(offset)));
  };
  protoOf(MultiParagraph).w5k = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.d5j_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.d5j_1.m(paragraphIndex);
    return $this$with.e5j_1.w5k($this$with.x5k(lineIndex));
  };
  protoOf(MultiParagraph).y5k = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.d5j_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.d5j_1.m(paragraphIndex);
    return $this$with.e5j_1.y5k($this$with.x5k(lineIndex));
  };
  protoOf(MultiParagraph).z5k = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.d5j_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.d5j_1.m(paragraphIndex);
    return $this$with.c5k($this$with.e5j_1.z5k($this$with.x5k(lineIndex)));
  };
  protoOf(MultiParagraph).a5l = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.d5j_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.d5j_1.m(paragraphIndex);
    return $this$with.c5k($this$with.e5j_1.a5l($this$with.x5k(lineIndex)));
  };
  protoOf(MultiParagraph).b5l = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.d5j_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.d5j_1.m(paragraphIndex);
    return $this$with.e5j_1.b5l($this$with.x5k(lineIndex));
  };
  protoOf(MultiParagraph).c5l = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.d5j_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.d5j_1.m(paragraphIndex);
    return $this$with.m5k($this$with.e5j_1.c5l($this$with.x5k(lineIndex)));
  };
  protoOf(MultiParagraph).d5l = function (lineIndex, visibleEnd) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.d5j_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.d5j_1.m(paragraphIndex);
    return $this$with.m5k($this$with.e5j_1.d5l($this$with.x5k(lineIndex), visibleEnd));
  };
  protoOf(MultiParagraph).e5l = function (lineIndex, visibleEnd, $super) {
    visibleEnd = visibleEnd === VOID ? false : visibleEnd;
    return $super === VOID ? this.d5l(lineIndex, visibleEnd) : $super.d5l.call(this, lineIndex, visibleEnd);
  };
  function ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    startLineIndex = startLineIndex === VOID ? -1 : startLineIndex;
    endLineIndex = endLineIndex === VOID ? -1 : endLineIndex;
    top = top === VOID ? -1.0 : top;
    bottom = bottom === VOID ? -1.0 : bottom;
    this.e5j_1 = paragraph;
    this.f5j_1 = startIndex;
    this.g5j_1 = endIndex;
    this.h5j_1 = startLineIndex;
    this.i5j_1 = endLineIndex;
    this.j5j_1 = top;
    this.k5j_1 = bottom;
  }
  protoOf(ParagraphInfo).a = function () {
    return this.g5j_1 - this.f5j_1 | 0;
  };
  protoOf(ParagraphInfo).l5j = function (_this__u8e3s4) {
    return coerceIn(_this__u8e3s4, this.f5j_1, this.g5j_1) - this.f5j_1 | 0;
  };
  protoOf(ParagraphInfo).m5k = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.f5j_1 | 0;
  };
  protoOf(ParagraphInfo).x5k = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.h5j_1 | 0;
  };
  protoOf(ParagraphInfo).j5k = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.h5j_1 | 0;
  };
  protoOf(ParagraphInfo).c5k = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.j5j_1;
  };
  protoOf(ParagraphInfo).i5k = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.j5j_1;
  };
  protoOf(ParagraphInfo).l5k = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) - this.j5j_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$8 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$8);
  };
  protoOf(ParagraphInfo).z5j = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.j5j_1;
    var v1 = fromInt(toRawBits(0.0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$1 = _Offset___init__impl__c168vi(tmp$ret$0);
    return _this__u8e3s4.a3u(tmp$ret$1);
  };
  protoOf(ParagraphInfo).n5j = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.j5j_1;
    var v1 = fromInt(toRawBits(0.0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$1 = _Offset___init__impl__c168vi(tmp$ret$0);
    _this__u8e3s4.l3t(tmp$ret$1);
    return _this__u8e3s4;
  };
  protoOf(ParagraphInfo).s5k = function (_this__u8e3s4, treatZeroAsNull) {
    if (treatZeroAsNull && equals(_this__u8e3s4, Companion_getInstance_16().f5l_1)) {
      return Companion_getInstance_16().f5l_1;
    }
    return TextRange_1(this.m5k(_TextRange___get_start__impl__ww4t90(_this__u8e3s4)), this.m5k(_TextRange___get_end__impl__gcdxpp(_this__u8e3s4)));
  };
  protoOf(ParagraphInfo).toString = function () {
    return 'ParagraphInfo(paragraph=' + toString_0(this.e5j_1) + ', startIndex=' + this.f5j_1 + ', endIndex=' + this.g5j_1 + ', startLineIndex=' + this.h5j_1 + ', endLineIndex=' + this.i5j_1 + ', top=' + this.j5j_1 + ', bottom=' + this.k5j_1 + ')';
  };
  protoOf(ParagraphInfo).hashCode = function () {
    var result = hashCode(this.e5j_1);
    result = imul(result, 31) + this.f5j_1 | 0;
    result = imul(result, 31) + this.g5j_1 | 0;
    result = imul(result, 31) + this.h5j_1 | 0;
    result = imul(result, 31) + this.i5j_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.j5j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k5j_1) | 0;
    return result;
  };
  protoOf(ParagraphInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphInfo ? other : THROW_CCE();
    if (!equals(this.e5j_1, tmp0_other_with_cast.e5j_1))
      return false;
    if (!(this.f5j_1 === tmp0_other_with_cast.f5j_1))
      return false;
    if (!(this.g5j_1 === tmp0_other_with_cast.g5j_1))
      return false;
    if (!(this.h5j_1 === tmp0_other_with_cast.h5j_1))
      return false;
    if (!(this.i5j_1 === tmp0_other_with_cast.i5j_1))
      return false;
    if (!equals(this.j5j_1, tmp0_other_with_cast.j5j_1))
      return false;
    if (!equals(this.k5j_1, tmp0_other_with_cast.k5j_1))
      return false;
    return true;
  };
  function findParagraphsByRange(paragraphInfoList, range, action) {
    var paragraphIndex = findParagraphByIndex(paragraphInfoList, _TextRange___get_min__impl__uu95c4(range));
    var inductionVariable = paragraphIndex;
    var last = paragraphInfoList.l();
    if (inductionVariable < last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraph = paragraphInfoList.m(i);
        if (paragraph.f5j_1 >= _TextRange___get_max__impl__owm8m(range))
          break $l$loop_0;
        if (paragraph.f5j_1 === paragraph.g5j_1)
          continue $l$loop_0;
        action(paragraph);
      }
       while (inductionVariable < last);
  }
  function findParagraphByY(paragraphInfoList, y) {
    if (y <= 0)
      return 0;
    if (y >= last(paragraphInfoList).k5j_1)
      return get_lastIndex(paragraphInfoList);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.l() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.m(mid);
        var cmp = midVal.j5j_1 > y ? 1 : midVal.k5j_1 <= y ? -1 : 0;
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
    var lastLineEnd = last(paragraphInfoList).g5j_1;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(index <= last(paragraphInfoList).g5j_1)) {
      var tmp$ret$0 = 'Index ' + index + " should be less or equal than last line's end " + lastLineEnd;
      throwIllegalArgumentException(tmp$ret$0);
    }
    var tmp$ret$3;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.l() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.m(mid);
        var cmp = midVal.f5j_1 > index ? 1 : midVal.g5j_1 <= index ? -1 : 0;
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
    if (!(0 <= paragraphIndex ? paragraphIndex <= (paragraphInfoList.l() - 1 | 0) : false)) {
      var tmp = 'Found paragraph index ' + paragraphIndex + ' should be in range [0, ' + paragraphInfoList.l() + ').\n';
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
      var high = paragraphInfoList.l() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.m(mid);
        var cmp = midVal.h5j_1 > lineIndex ? 1 : midVal.i5j_1 <= lineIndex ? -1 : 0;
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
  function findParagraphByIndex$lambda(it) {
    return '[' + it.f5j_1 + ', ' + it.g5j_1 + ')';
  }
  var androidx_compose_ui_text_MultiParagraphIntrinsics$stable;
  var androidx_compose_ui_text_ParagraphIntrinsicInfo$stable;
  function resolveTextDirection($this, style, defaultStyle) {
    return !(style.b5i_1 === Companion_getInstance_44().m5l_1) ? style : style.g5l(VOID, defaultStyle.b5i_1);
  }
  function MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp0 = this$0.v5i_1;
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        if (tmp0.n()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0.m(0);
        var maxValue = maxElem.t5j_1.a4f();
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0.m(i);
            var v = e.t5j_1.a4f();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t5j_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.a4f();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$_get_minIntrinsicWidth_$ref_bvjwng() {
    return function (p0) {
      return p0.a4f();
    };
  }
  function MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp0 = this$0.v5i_1;
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        if (tmp0.n()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0.m(0);
        var maxValue = maxElem.t5j_1.b4f();
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0.m(i);
            var v = e.t5j_1.b4f();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t5j_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b4f();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$_get_maxIntrinsicWidth_$ref_co14jq() {
    return function (p0) {
      return p0.b4f();
    };
  }
  function MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver) {
    this.r5i_1 = annotatedString;
    this.s5i_1 = placeholders;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.t5i_1 = lazy(tmp_0, MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.u5i_1 = lazy(tmp_2, MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this));
    var paragraphStyle = style.q5l();
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle' call
    var this_0 = this.r5i_1;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_1 = normalizedParagraphStyles(this_0, paragraphStyle);
    var target = ArrayList_init_$Create$_0(this_1.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_1.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_1.m(index);
        var annotatedString_0 = access$substringWithoutParagraphStyles$tAnnotatedStringKt(this_0, item.j5h_1, item.k5h_1);
        var currentParagraphStyle = resolveTextDirection(this, item.i5h_1, paragraphStyle);
        var tmp1_text = annotatedString_0.p5h_1;
        var tmp2_style = style.r5l(currentParagraphStyle);
        var tmp0_elvis_lhs = annotatedString_0.o5h_1;
        var tmp3_annotations = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
        var tmp4_placeholders = getLocalPlaceholders(this.s5i_1, item.j5h_1, item.k5h_1);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = new ParagraphIntrinsicInfo(ParagraphIntrinsics_0(tmp1_text, tmp2_style, tmp3_annotations, density, fontFamilyResolver, tmp4_placeholders), item.j5h_1, item.k5h_1);
        target.h(element);
      }
       while (inductionVariable <= last);
    tmp_3.v5i_1 = target;
  }
  protoOf(MultiParagraphIntrinsics).a4f = function () {
    var tmp0 = this.t5i_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('minIntrinsicWidth', 1, tmp, MultiParagraphIntrinsics$_get_minIntrinsicWidth_$ref_bvjwng(), null);
    return tmp0.v1();
  };
  protoOf(MultiParagraphIntrinsics).b4f = function () {
    var tmp0 = this.u5i_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('maxIntrinsicWidth', 1, tmp, MultiParagraphIntrinsics$_get_maxIntrinsicWidth_$ref_co14jq(), null);
    return tmp0.v1();
  };
  protoOf(MultiParagraphIntrinsics).s5l = function () {
    var tmp0 = this.v5i_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.m(index);
          if (item.t5j_1.s5l()) {
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
    this.t5j_1 = intrinsics;
    this.u5j_1 = startIndex;
    this.v5j_1 = endIndex;
  }
  protoOf(ParagraphIntrinsicInfo).toString = function () {
    return 'ParagraphIntrinsicInfo(intrinsics=' + toString_0(this.t5j_1) + ', startIndex=' + this.u5j_1 + ', endIndex=' + this.v5j_1 + ')';
  };
  protoOf(ParagraphIntrinsicInfo).hashCode = function () {
    var result = hashCode(this.t5j_1);
    result = imul(result, 31) + this.u5j_1 | 0;
    result = imul(result, 31) + this.v5j_1 | 0;
    return result;
  };
  protoOf(ParagraphIntrinsicInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphIntrinsicInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphIntrinsicInfo ? other : THROW_CCE();
    if (!equals(this.t5j_1, tmp0_other_with_cast.t5j_1))
      return false;
    if (!(this.u5j_1 === tmp0_other_with_cast.u5j_1))
      return false;
    if (!(this.v5j_1 === tmp0_other_with_cast.v5j_1))
      return false;
    return true;
  };
  function getLocalPlaceholders(_this__u8e3s4, start, end) {
    // Inline function 'androidx.compose.ui.util.fastFilteredMap' call
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.m(index);
        if (intersect(start, end, item.j5h_1, item.k5h_1)) {
          // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
          if (!(start <= item.j5h_1 && item.k5h_1 <= end)) {
            var tmp$ret$1 = 'placeholder can not overlap with paragraph.';
            throwIllegalArgumentException(tmp$ret$1);
          }
          // Inline function 'kotlin.collections.plusAssign' call
          var element = Range_init_$Create$(item.i5h_1, item.j5h_1 - start | 0, item.k5h_1 - start | 0);
          target.h(element);
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
    overflow = overflow === VOID ? Companion_getInstance_48().o5j_1 : overflow;
    return ActualParagraph(text, style, spanStyles, placeholders, maxLines, overflow, constraints, density, fontFamilyResolver);
  }
  function Paragraph_0(paragraphIntrinsics, constraints, maxLines, overflow) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    overflow = overflow === VOID ? Companion_getInstance_48().o5j_1 : overflow;
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
  function ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    textAlign = textAlign === VOID ? Companion_getInstance_42().z5l_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_44().m5l_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().s4o_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_54().d5m_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_37().g5m_1 : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    this.a5i_1 = textAlign;
    this.b5i_1 = textDirection;
    this.c5i_1 = lineHeight;
    this.d5i_1 = textIndent;
    this.e5i_1 = platformStyle;
    this.f5i_1 = lineHeightStyle;
    this.g5i_1 = lineBreak;
    this.h5i_1 = hyphens;
    this.i5i_1 = textMotion;
    if (!equals(this.c5i_1, Companion_getInstance_1().s4o_1)) {
      // Inline function 'androidx.compose.ui.text.internal.checkPrecondition' call
      if (!(_TextUnit___get_value__impl__hpbx0k(this.c5i_1) >= 0.0)) {
        var tmp$ret$0 = "lineHeight can't be negative (" + _TextUnit___get_value__impl__hpbx0k(this.c5i_1) + ')';
        throwIllegalStateException(tmp$ret$0);
      }
    }
  }
  protoOf(ParagraphStyle_0).j5i = function (other) {
    if (other == null)
      return this;
    return fastMerge(this, other.a5i_1, other.b5i_1, other.c5i_1, other.d5i_1, other.e5i_1, other.f5i_1, other.g5i_1, other.h5i_1, other.i5i_1);
  };
  protoOf(ParagraphStyle_0).h5m = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
  };
  protoOf(ParagraphStyle_0).g5l = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    textAlign = textAlign === VOID ? this.a5i_1 : textAlign;
    textDirection = textDirection === VOID ? this.b5i_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.c5i_1 : lineHeight;
    textIndent = textIndent === VOID ? this.d5i_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.e5i_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.f5i_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.g5i_1 : lineBreak;
    hyphens = hyphens === VOID ? this.h5i_1 : hyphens;
    textMotion = textMotion === VOID ? this.i5i_1 : textMotion;
    return $super === VOID ? this.h5m(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) : $super.h5m.call(this, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
  };
  protoOf(ParagraphStyle_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphStyle_0))
      return false;
    if (!(this.a5i_1 === other.a5i_1))
      return false;
    if (!(this.b5i_1 === other.b5i_1))
      return false;
    if (!equals(this.c5i_1, other.c5i_1))
      return false;
    if (!equals(this.d5i_1, other.d5i_1))
      return false;
    if (!equals(this.e5i_1, other.e5i_1))
      return false;
    if (!equals(this.f5i_1, other.f5i_1))
      return false;
    if (!(this.g5i_1 === other.g5i_1))
      return false;
    if (!(this.h5i_1 === other.h5i_1))
      return false;
    if (!equals(this.i5i_1, other.i5i_1))
      return false;
    return true;
  };
  protoOf(ParagraphStyle_0).hashCode = function () {
    var result = TextAlign__hashCode_impl_s8g35y(this.a5i_1);
    result = imul(31, result) + TextDirection__hashCode_impl_g63nwg(this.b5i_1) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.c5i_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.d5i_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.e5i_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.f5i_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    result = imul(31, result) + LineBreak__hashCode_impl_ybksn(this.g5i_1) | 0;
    result = imul(31, result) + Hyphens__hashCode_impl_yb7t8v(this.h5i_1) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.i5i_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    return result;
  };
  protoOf(ParagraphStyle_0).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    this_0.u7('ParagraphStyle(');
    this_0.u7('textAlign=' + TextAlign__toString_impl_6ha6d3(this.a5i_1) + ', ');
    this_0.u7('textDirection=' + TextDirection__toString_impl_x3uh9t(this.b5i_1) + ', ');
    this_0.u7('lineHeight=' + TextUnit__toString_impl_51ghw0(this.c5i_1) + ', ');
    this_0.u7('textIndent=' + toString(this.d5i_1) + ', ');
    this_0.u7('platformStyle=' + toString(this.e5i_1) + ', ');
    this_0.u7('lineHeightStyle=' + toString(this.f5i_1) + ', ');
    this_0.u7('lineBreak=' + LineBreak__toString_impl_mphhli(this.g5i_1) + ', ');
    this_0.u7('hyphens=' + Hyphens__toString_impl_ck1wg0(this.h5i_1) + ', ');
    this_0.u7('textMotion=' + toString(this.i5i_1));
    this_0.u7(')');
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
    if (!(textAlign === Companion_getInstance_42().z5l_1) && !(textAlign === _this__u8e3s4.a5i_1)) {
      tmp_6 = true;
    } else {
      var tmp_7;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(lineHeight), new Long(0, 0))) {
        tmp_7 = !equals(lineHeight, _this__u8e3s4.c5i_1);
      } else {
        tmp_7 = false;
      }
      tmp_6 = tmp_7;
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      tmp_5 = (!(textIndent == null) && !equals(textIndent, _this__u8e3s4.d5i_1));
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = (!(textDirection === Companion_getInstance_44().m5l_1) && !(textDirection === _this__u8e3s4.b5i_1));
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = (!(platformStyle == null) && !equals(platformStyle, _this__u8e3s4.e5i_1));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = (!(lineHeightStyle == null) && !equals(lineHeightStyle, _this__u8e3s4.f5i_1));
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = (!(lineBreak === Companion_getInstance_54().d5m_1) && !(lineBreak === _this__u8e3s4.g5i_1));
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = (!(hyphens === Companion_getInstance_37().g5m_1) && !(hyphens === _this__u8e3s4.h5i_1));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = (!(textMotion == null) && !equals(textMotion, _this__u8e3s4.i5i_1));
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_8;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(lineHeight), new Long(0, 0))) {
      tmp_8 = _this__u8e3s4.c5i_1;
    } else {
      tmp_8 = lineHeight;
    }
    var tmp3_lineHeight = tmp_8;
    var tmp4_textIndent = textIndent == null ? _this__u8e3s4.d5i_1 : textIndent;
    var tmp5_textAlign = !(textAlign === Companion_getInstance_42().z5l_1) ? textAlign : _this__u8e3s4.a5i_1;
    var tmp6_textDirection = !(textDirection === Companion_getInstance_44().m5l_1) ? textDirection : _this__u8e3s4.b5i_1;
    var tmp7_platformStyle = mergePlatformStyle(_this__u8e3s4, platformStyle);
    var tmp8_lineHeightStyle = lineHeightStyle == null ? _this__u8e3s4.f5i_1 : lineHeightStyle;
    var tmp9_lineBreak = !(lineBreak === Companion_getInstance_54().d5m_1) ? lineBreak : _this__u8e3s4.g5i_1;
    var tmp10_hyphens = !(hyphens === Companion_getInstance_37().g5m_1) ? hyphens : _this__u8e3s4.h5i_1;
    var tmp11_textMotion = textMotion == null ? _this__u8e3s4.i5i_1 : textMotion;
    return new ParagraphStyle_0(tmp5_textAlign, tmp6_textDirection, tmp3_lineHeight, tmp4_textIndent, tmp7_platformStyle, tmp8_lineHeightStyle, tmp9_lineBreak, tmp10_hyphens, tmp11_textMotion);
  }
  function mergePlatformStyle(_this__u8e3s4, other) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    if (_this__u8e3s4.e5i_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.e5i_1;
    return _this__u8e3s4.e5i_1.j5m(other);
  }
  function lerp_4(start, stop, fraction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = lerpDiscrete(new TextAlign(start.a5i_1), new TextAlign(stop.a5i_1), fraction);
    var tmp_0 = lerpDiscrete(new TextDirection(start.b5i_1), new TextDirection(stop.b5i_1), fraction);
    var tmp_1 = lerpTextUnitInheritable(start.c5i_1, stop.c5i_1, fraction);
    var tmp0_elvis_lhs = start.d5i_1;
    var tmp_2 = tmp0_elvis_lhs == null ? Companion_getInstance_47().k5m_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = stop.d5i_1;
    return new ParagraphStyle_0(tmp.l5m_1, tmp_0.m5m_1, tmp_1, lerp_11(tmp_2, tmp1_elvis_lhs == null ? Companion_getInstance_47().k5m_1 : tmp1_elvis_lhs, fraction), lerpPlatformStyle(start.e5i_1, stop.e5i_1, fraction), lerpDiscrete(start.f5i_1, stop.f5i_1, fraction), lerpDiscrete(new LineBreak(start.g5i_1), new LineBreak(stop.g5i_1), fraction).n5m_1, lerpDiscrete(new Hyphens(start.h5i_1), new Hyphens(stop.h5i_1), fraction).o5m_1, lerpDiscrete(start.i5i_1, stop.i5i_1, fraction));
  }
  function resolveParagraphStyleDefaults(style, direction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = style.a5i_1 === Companion_getInstance_42().z5l_1 ? Companion_getInstance_42().x5l_1 : style.a5i_1;
    var tmp_0 = resolveTextDirection_0(direction, style.b5i_1);
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = style.c5i_1;
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0))) {
      tmp_1 = get_DefaultLineHeight();
    } else {
      tmp_1 = style.c5i_1;
    }
    var tmp_2 = tmp_1;
    var tmp0_elvis_lhs = style.d5i_1;
    var tmp_3 = tmp0_elvis_lhs == null ? Companion_getInstance_47().k5m_1 : tmp0_elvis_lhs;
    var tmp_4 = style.g5i_1 === Companion_getInstance_54().d5m_1 ? Companion_getInstance_54().a5m_1 : style.g5i_1;
    var tmp_5 = style.h5i_1 === Companion_getInstance_37().g5m_1 ? Companion_getInstance_37().e5m_1 : style.h5i_1;
    var tmp1_elvis_lhs = style.i5i_1;
    return new ParagraphStyle_0(tmp, tmp_0, tmp_2, tmp_3, style.e5i_1, style.f5i_1, tmp_4, tmp_5, tmp1_elvis_lhs == null ? Companion_getInstance_55().p5m_1 : tmp1_elvis_lhs);
  }
  function lerpPlatformStyle(start, stop, fraction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    if (start == null && stop == null)
      return null;
    var startNonNull = start == null ? Companion_getInstance_52().r5m_1 : start;
    var stopNonNull = stop == null ? Companion_getInstance_52().r5m_1 : stop;
    return lerp_12(startNonNull, stopNonNull, fraction);
  }
  var properties_initialized_ParagraphStyle_kt_y6w405;
  function _init_properties_ParagraphStyle_kt__lbx7er() {
    if (!properties_initialized_ParagraphStyle_kt_y6w405) {
      properties_initialized_ParagraphStyle_kt_y6w405 = true;
      DefaultLineHeight = Companion_getInstance_1().s4o_1;
      androidx_compose_ui_text_ParagraphStyle$stable = 0;
    }
  }
  var androidx_compose_ui_text_Placeholder$stable;
  function Placeholder() {
  }
  protoOf(Placeholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Placeholder))
      return false;
    if (!equals(this.s5m_1, other.s5m_1))
      return false;
    if (!equals(this.t5m_1, other.t5m_1))
      return false;
    if (!(this.u5m_1 === other.u5m_1))
      return false;
    return true;
  };
  protoOf(Placeholder).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.s5m_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.t5m_1) | 0;
    result = imul(31, result) + PlaceholderVerticalAlign__hashCode_impl_1c0k16(this.u5m_1) | 0;
    return result;
  };
  protoOf(Placeholder).toString = function () {
    return 'Placeholder(' + ('width=' + TextUnit__toString_impl_51ghw0(this.s5m_1) + ', ') + ('height=' + TextUnit__toString_impl_51ghw0(this.t5m_1) + ', ') + ('placeholderVerticalAlign=' + PlaceholderVerticalAlign__toString_impl_kf5crp(this.u5m_1)) + ')';
  };
  function _PlaceholderVerticalAlign___init__impl__mll0or(value) {
    return value;
  }
  function PlaceholderVerticalAlign__toString_impl_kf5crp($this) {
    return $this === Companion_getInstance_15().v5m_1 ? 'AboveBaseline' : $this === Companion_getInstance_15().w5m_1 ? 'Top' : $this === Companion_getInstance_15().x5m_1 ? 'Bottom' : $this === Companion_getInstance_15().y5m_1 ? 'Center' : $this === Companion_getInstance_15().z5m_1 ? 'TextTop' : $this === Companion_getInstance_15().a5n_1 ? 'TextBottom' : $this === Companion_getInstance_15().b5n_1 ? 'TextCenter' : 'Invalid';
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.v5m_1 = _PlaceholderVerticalAlign___init__impl__mll0or(1);
    this.w5m_1 = _PlaceholderVerticalAlign___init__impl__mll0or(2);
    this.x5m_1 = _PlaceholderVerticalAlign___init__impl__mll0or(3);
    this.y5m_1 = _PlaceholderVerticalAlign___init__impl__mll0or(4);
    this.z5m_1 = _PlaceholderVerticalAlign___init__impl__mll0or(5);
    this.a5n_1 = _PlaceholderVerticalAlign___init__impl__mll0or(6);
    this.b5n_1 = _PlaceholderVerticalAlign___init__impl__mll0or(7);
  }
  var Companion_instance_2;
  function Companion_getInstance_15() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function PlaceholderVerticalAlign__hashCode_impl_1c0k16($this) {
    return $this;
  }
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
      tmp = saver.w5f(scope, value);
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
  var AnnotationType_entriesInitialized;
  function AnnotationType_initEntries() {
    if (AnnotationType_entriesInitialized)
      return Unit_instance;
    AnnotationType_entriesInitialized = true;
    AnnotationType_Paragraph_instance = new AnnotationType('Paragraph', 0);
    AnnotationType_Span_instance = new AnnotationType('Span', 1);
    AnnotationType_VerbatimTts_instance = new AnnotationType('VerbatimTts', 2);
    AnnotationType_Url_instance = new AnnotationType('Url', 3);
    AnnotationType_Link_instance = new AnnotationType('Link', 4);
    AnnotationType_Clickable_instance = new AnnotationType('Clickable', 5);
    AnnotationType_String_instance = new AnnotationType('String', 6);
  }
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
    return arrayListOf([save(it.p5h_1), save_0(it.o5h_1, get_AnnotationRangeListSaver(), $this$Saver)]);
  }
  function AnnotatedStringSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(1);
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
        var tmp_1 = tmp2.m5f(tmp0);
        tmp_0 = (tmp_1 == null ? true : isInterface(tmp_1, KtList)) ? tmp_1 : THROW_CCE();
      }
      tmp$ret$0 = tmp_0;
    }
    var annotationsOrNull = tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
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
    var target = ArrayList_init_$Create$_0(it.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = it.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = it.m(index);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = save_0(item, get_AnnotationRangeSaver(), $this$Saver);
        target.h(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function AnnotationRangeListSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var target = ArrayList_init_$Create$_0(list.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = list.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.m(index);
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
            var tmp_1 = tmp2.m5f(item);
            tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof Range) ? tmp_1 : THROW_CCE();
          }
          tmp$ret$0 = tmp_0;
        }
        var range = ensureNotNull(tmp$ret$0);
        // Inline function 'kotlin.collections.plusAssign' call
        target.h(range);
      }
       while (inductionVariable <= last);
    return target;
  }
  function AnnotationRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp0_subject = it.i5h_1;
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
    switch (marker.m2_1) {
      case 0:
        var tmp_1 = it.i5h_1;
        tmp_0 = save_0(tmp_1 instanceof ParagraphStyle_0 ? tmp_1 : THROW_CCE(), get_ParagraphStyleSaver(), $this$Saver);
        break;
      case 1:
        var tmp_2 = it.i5h_1;
        tmp_0 = save_0(tmp_2 instanceof SpanStyle ? tmp_2 : THROW_CCE(), get_SpanStyleSaver(), $this$Saver);
        break;
      case 2:
        var tmp_3 = it.i5h_1;
        tmp_0 = save_0(tmp_3 instanceof VerbatimTtsAnnotation ? tmp_3 : THROW_CCE(), get_VerbatimTtsAnnotationSaver(), $this$Saver);
        break;
      case 3:
        var tmp_4 = it.i5h_1;
        tmp_0 = save_0(tmp_4 instanceof UrlAnnotation ? tmp_4 : THROW_CCE(), get_UrlAnnotationSaver(), $this$Saver);
        break;
      case 4:
        var tmp_5 = it.i5h_1;
        tmp_0 = save_0(tmp_5 instanceof Url ? tmp_5 : THROW_CCE(), get_LinkSaver(), $this$Saver);
        break;
      case 5:
        var tmp_6 = it.i5h_1;
        tmp_0 = save_0(tmp_6 instanceof Clickable ? tmp_6 : THROW_CCE(), get_ClickableSaver(), $this$Saver);
        break;
      case 6:
        var tmp_7 = it.i5h_1;
        tmp_0 = save(_StringAnnotation___get_value__impl__v4s4ej(tmp_7 instanceof StringAnnotation ? tmp_7.c5n_1 : THROW_CCE()));
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var item = tmp_0;
    return arrayListOf([save(marker), item, save(it.j5h_1), save(it.k5h_1), save(it.l5h_1)]);
  }
  function AnnotationRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
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
    var tmp0_safe_receiver_0 = list.m(2);
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
    var tmp0_safe_receiver_1 = list.m(3);
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
    var tmp0_safe_receiver_2 = list.m(4);
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
    switch (marker.m2_1) {
      case 0:
        var tmp0 = list.m(1);
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
            var tmp_6 = tmp2.m5f(tmp0);
            tmp_5 = (tmp_6 == null ? true : tmp_6 instanceof ParagraphStyle_0) ? tmp_6 : THROW_CCE();
          }
          tmp$ret$12 = tmp_5;
        }

        var item = ensureNotNull(tmp$ret$12);
        tmp_3 = new Range(item, start, end, tag);
        break;
      case 1:
        var tmp0_0 = list.m(1);
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
            var tmp_9 = tmp2_0.m5f(tmp0_0);
            tmp_8 = (tmp_9 == null ? true : tmp_9 instanceof SpanStyle) ? tmp_9 : THROW_CCE();
          }
          tmp$ret$17 = tmp_8;
        }

        var item_0 = ensureNotNull(tmp$ret$17);
        tmp_3 = new Range(item_0, start, end, tag);
        break;
      case 2:
        var tmp0_1 = list.m(1);
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
            var tmp_12 = tmp2_1.m5f(tmp0_1);
            tmp_11 = (tmp_12 == null ? true : tmp_12 instanceof VerbatimTtsAnnotation) ? tmp_12 : THROW_CCE();
          }
          tmp$ret$22 = tmp_11;
        }

        var item_1 = ensureNotNull(tmp$ret$22);
        tmp_3 = new Range(item_1, start, end, tag);
        break;
      case 3:
        var tmp0_2 = list.m(1);
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
            var tmp_15 = tmp2_2.m5f(tmp0_2);
            tmp_14 = (tmp_15 == null ? true : tmp_15 instanceof UrlAnnotation) ? tmp_15 : THROW_CCE();
          }
          tmp$ret$27 = tmp_14;
        }

        var item_2 = ensureNotNull(tmp$ret$27);
        tmp_3 = new Range(item_2, start, end, tag);
        break;
      case 4:
        var tmp0_3 = list.m(1);
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
            var tmp_18 = tmp2_3.m5f(tmp0_3);
            tmp_17 = (tmp_18 == null ? true : tmp_18 instanceof Url) ? tmp_18 : THROW_CCE();
          }
          tmp$ret$32 = tmp_17;
        }

        var item_3 = ensureNotNull(tmp$ret$32);
        tmp_3 = new Range(item_3, start, end, tag);
        break;
      case 5:
        var tmp0_4 = list.m(1);
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
            var tmp_21 = tmp2_4.m5f(tmp0_4);
            tmp_20 = (tmp_21 == null ? true : tmp_21 instanceof Clickable) ? tmp_21 : THROW_CCE();
          }
          tmp$ret$37 = tmp_20;
        }

        var item_4 = ensureNotNull(tmp$ret$37);
        tmp_3 = new Range(item_4, start, end, tag);
        break;
      case 6:
        // Inline function 'androidx.compose.ui.text.restore' call

        var tmp0_safe_receiver_3 = list.m(1);
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
    return save(it.d5n_1);
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
    return save(it.e5n_1);
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
    return arrayListOf([save(it.l5i_1), save_0(it.m5i_1, get_TextLinkStylesSaver(), $this$Saver)]);
  }
  function LinkSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    var url = ensureNotNull(tmp$ret$2);
    var tmp0 = list.m(1);
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
        var tmp_2 = tmp2.m5f(tmp0);
        tmp_1 = (tmp_2 == null ? true : tmp_2 instanceof TextLinkStyles) ? tmp_2 : THROW_CCE();
      }
      tmp$ret$3 = tmp_1;
    }
    var stylesOrNull = tmp$ret$3;
    return new Url(url, stylesOrNull);
  }
  function ClickableSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.o5i_1), save_0(it.p5i_1, get_TextLinkStylesSaver(), $this$Saver)]);
  }
  function ClickableSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    var tag = ensureNotNull(tmp$ret$2);
    var tmp0 = list.m(1);
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
        var tmp_2 = tmp2.m5f(tmp0);
        tmp_1 = (tmp_2 == null ? true : tmp_2 instanceof TextLinkStyles) ? tmp_2 : THROW_CCE();
      }
      tmp$ret$3 = tmp_1;
    }
    var stylesOrNull = tmp$ret$3;
    return new Clickable(tag, stylesOrNull, null);
  }
  function ParagraphStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(new TextAlign(it.a5i_1)), save(new TextDirection(it.b5i_1)), save_0(new TextUnit(it.c5i_1), get_Saver(Companion_getInstance_1()), $this$Saver), save_0(it.d5i_1, get_Saver_0(Companion_getInstance_47()), $this$Saver), save_0(it.e5i_1, get_Saver_12(Companion_getInstance_52()), $this$Saver), save_0(it.f5i_1, get_Saver_1(Companion_getInstance_41()), $this$Saver), save_0(new LineBreak(it.g5i_1), get_Saver_13(Companion_getInstance_54()), $this$Saver), save(new Hyphens(it.h5i_1)), save_0(it.i5i_1, get_Saver_14(Companion_getInstance_55()), $this$Saver)]);
  }
  function ParagraphStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp0_safe_receiver instanceof TextAlign ? tmp0_safe_receiver.l5m_1 : THROW_CCE();
      var tmp_1 = tmp_0 == null ? null : new TextAlign(tmp_0);
      tmp = tmp_1 == null ? null : tmp_1.l5m_1;
    }
    var tmp_2 = tmp;
    var tmp_3 = ensureNotNull(tmp_2 == null ? null : new TextAlign(tmp_2));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.m(1);
    var tmp_4;
    if (tmp0_safe_receiver_0 == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_5 = tmp0_safe_receiver_0 instanceof TextDirection ? tmp0_safe_receiver_0.m5m_1 : THROW_CCE();
      var tmp_6 = tmp_5 == null ? null : new TextDirection(tmp_5);
      tmp_4 = tmp_6 == null ? null : tmp_6.m5m_1;
    }
    var tmp_7 = tmp_4;
    var tmp_8 = ensureNotNull(tmp_7 == null ? null : new TextDirection(tmp_7));
    var tmp0 = list.m(2);
    var tmp2 = get_Saver(Companion_getInstance_1());
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
        var tmp_11 = tmp2.m5f(tmp0);
        var tmp_12;
        if (tmp_11 == null ? true : tmp_11 instanceof TextUnit) {
          var tmp_13 = tmp_11;
          tmp_12 = tmp_13 == null ? null : tmp_13.u4o_1;
        } else {
          tmp_12 = THROW_CCE();
        }
        var tmp_14 = tmp_12;
        var tmp_15 = tmp_14 == null ? null : new TextUnit(tmp_14);
        tmp_10 = tmp_15 == null ? null : tmp_15.u4o_1;
      }
      tmp$ret$6 = tmp_10;
    }
    var tmp_16 = tmp$ret$6;
    var tmp_17 = ensureNotNull(tmp_16 == null ? null : new TextUnit(tmp_16));
    var tmp0_0 = list.m(3);
    var tmp2_0 = get_Saver_0(Companion_getInstance_47());
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
        var tmp_20 = tmp2_0.m5f(tmp0_0);
        tmp_19 = (tmp_20 == null ? true : tmp_20 instanceof TextIndent_0) ? tmp_20 : THROW_CCE();
      }
      tmp$ret$11 = tmp_19;
    }
    var tmp_21 = tmp$ret$11;
    var tmp0_1 = list.m(4);
    var tmp2_1 = get_Saver_12(Companion_getInstance_52());
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
        var tmp_24 = tmp2_1.m5f(tmp0_1);
        tmp_23 = (tmp_24 == null ? true : tmp_24 instanceof PlatformParagraphStyle) ? tmp_24 : THROW_CCE();
      }
      tmp$ret$16 = tmp_23;
    }
    var tmp_25 = tmp$ret$16;
    var tmp0_2 = list.m(5);
    var tmp2_2 = get_Saver_1(Companion_getInstance_41());
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
        var tmp_28 = tmp2_2.m5f(tmp0_2);
        tmp_27 = (tmp_28 == null ? true : tmp_28 instanceof LineHeightStyle) ? tmp_28 : THROW_CCE();
      }
      tmp$ret$21 = tmp_27;
    }
    var tmp_29 = tmp$ret$21;
    var tmp0_3 = list.m(6);
    var tmp2_3 = get_Saver_13(Companion_getInstance_54());
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
        var tmp_32 = tmp2_3.m5f(tmp0_3);
        var tmp_33;
        if (tmp_32 == null ? true : tmp_32 instanceof LineBreak) {
          var tmp_34 = tmp_32;
          tmp_33 = tmp_34 == null ? null : tmp_34.n5m_1;
        } else {
          tmp_33 = THROW_CCE();
        }
        var tmp_35 = tmp_33;
        var tmp_36 = tmp_35 == null ? null : new LineBreak(tmp_35);
        tmp_31 = tmp_36 == null ? null : tmp_36.n5m_1;
      }
      tmp$ret$26 = tmp_31;
    }
    var tmp_37 = tmp$ret$26;
    var tmp_38 = ensureNotNull(tmp_37 == null ? null : new LineBreak(tmp_37));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.m(7);
    var tmp_39;
    if (tmp0_safe_receiver_1 == null) {
      tmp_39 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_40 = tmp0_safe_receiver_1 instanceof Hyphens ? tmp0_safe_receiver_1.o5m_1 : THROW_CCE();
      var tmp_41 = tmp_40 == null ? null : new Hyphens(tmp_40);
      tmp_39 = tmp_41 == null ? null : tmp_41.o5m_1;
    }
    var tmp_42 = tmp_39;
    var tmp_43 = ensureNotNull(tmp_42 == null ? null : new Hyphens(tmp_42));
    var tmp0_4 = list.m(8);
    var tmp2_4 = get_Saver_14(Companion_getInstance_55());
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
        var tmp_46 = tmp2_4.m5f(tmp0_4);
        tmp_45 = (tmp_46 == null ? true : tmp_46 instanceof TextMotion) ? tmp_46 : THROW_CCE();
      }
      tmp$ret$34 = tmp_45;
    }
    return new ParagraphStyle_0(tmp_3.l5m_1, tmp_8.m5m_1, tmp_17.u4o_1, tmp_21, tmp_25, tmp_29, tmp_38.n5m_1, tmp_43.o5m_1, tmp$ret$34);
  }
  function SpanStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp = save_0(new Color(it.g4r()), get_Saver_2(Companion_getInstance()), $this$Saver);
    var tmp_0 = save_0(new TextUnit(it.g5n_1), get_Saver(Companion_getInstance_1()), $this$Saver);
    var tmp_1 = save_0(it.h5n_1, get_Saver_3(Companion_getInstance_24()), $this$Saver);
    var tmp_2 = it.i5n_1;
    var tmp_3 = save(tmp_2 == null ? null : new FontStyle(tmp_2));
    var tmp_4 = it.j5n_1;
    var tmp_5 = save(tmp_4 == null ? null : new FontSynthesis(tmp_4));
    var tmp_6 = save(-1);
    var tmp_7 = save(it.l5n_1);
    var tmp_8 = save_0(new TextUnit(it.m5n_1), get_Saver(Companion_getInstance_1()), $this$Saver);
    var tmp_9 = it.n5n_1;
    return arrayListOf([tmp, tmp_0, tmp_1, tmp_3, tmp_5, tmp_6, tmp_7, tmp_8, save_0(tmp_9 == null ? null : new BaselineShift(tmp_9), get_Saver_4(Companion_getInstance_36()), $this$Saver), save_0(it.o5n_1, get_Saver_5(Companion_getInstance_46()), $this$Saver), save_0(it.p5n_1, get_Saver_6(Companion_getInstance_35()), $this$Saver), save_0(new Color(it.q5n_1), get_Saver_2(Companion_getInstance()), $this$Saver), save_0(it.r5n_1, get_Saver_7(Companion_getInstance_43()), $this$Saver), save_0(it.s5n_1, get_Saver_8(Companion_getInstance_2()), $this$Saver)]);
  }
  function SpanStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(0);
    var tmp2 = get_Saver_2(Companion_getInstance());
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
        var tmp_1 = tmp2.m5f(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof Color) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.n4u_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new Color(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.n4u_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6));
    var tmp0_0 = list.m(1);
    var tmp2_0 = get_Saver(Companion_getInstance_1());
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
        var tmp_10 = tmp2_0.m5f(tmp0_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof TextUnit) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.u4o_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new TextUnit(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.u4o_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15));
    var tmp0_1 = list.m(2);
    var tmp2_1 = get_Saver_3(Companion_getInstance_24());
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
        var tmp_19 = tmp2_1.m5f(tmp0_1);
        tmp_18 = (tmp_19 == null ? true : tmp_19 instanceof FontWeight) ? tmp_19 : THROW_CCE();
      }
      tmp$ret$10 = tmp_18;
    }
    var tmp_20 = tmp$ret$10;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(3);
    var tmp_21;
    if (tmp0_safe_receiver == null) {
      tmp_21 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_22 = tmp0_safe_receiver instanceof FontStyle ? tmp0_safe_receiver.v5n_1 : THROW_CCE();
      var tmp_23 = tmp_22 == null ? null : new FontStyle(tmp_22);
      tmp_21 = tmp_23 == null ? null : tmp_23.v5n_1;
    }
    var tmp_24 = tmp_21;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.m(4);
    var tmp_25;
    if (tmp0_safe_receiver_0 == null) {
      tmp_25 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_26 = tmp0_safe_receiver_0 instanceof FontSynthesis ? tmp0_safe_receiver_0.w5n_1 : THROW_CCE();
      var tmp_27 = tmp_26 == null ? null : new FontSynthesis(tmp_26);
      tmp_25 = tmp_27 == null ? null : tmp_27.w5n_1;
    }
    var tmp_28 = tmp_25;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.m(6);
    var tmp_29;
    if (tmp0_safe_receiver_1 == null) {
      tmp_29 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_29 = typeof tmp0_safe_receiver_1 === 'string' ? tmp0_safe_receiver_1 : THROW_CCE();
    }
    var tmp_30 = tmp_29;
    var tmp0_2 = list.m(7);
    var tmp2_2 = get_Saver(Companion_getInstance_1());
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
        var tmp_33 = tmp2_2.m5f(tmp0_2);
        var tmp_34;
        if (tmp_33 == null ? true : tmp_33 instanceof TextUnit) {
          var tmp_35 = tmp_33;
          tmp_34 = tmp_35 == null ? null : tmp_35.u4o_1;
        } else {
          tmp_34 = THROW_CCE();
        }
        var tmp_36 = tmp_34;
        var tmp_37 = tmp_36 == null ? null : new TextUnit(tmp_36);
        tmp_32 = tmp_37 == null ? null : tmp_37.u4o_1;
      }
      tmp$ret$24 = tmp_32;
    }
    var tmp_38 = tmp$ret$24;
    var tmp_39 = ensureNotNull(tmp_38 == null ? null : new TextUnit(tmp_38));
    var tmp0_3 = list.m(8);
    var tmp2_3 = get_Saver_4(Companion_getInstance_36());
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
        var tmp_42 = tmp2_3.m5f(tmp0_3);
        var tmp_43;
        if (tmp_42 == null ? true : tmp_42 instanceof BaselineShift) {
          var tmp_44 = tmp_42;
          tmp_43 = tmp_44 == null ? null : tmp_44.x5n_1;
        } else {
          tmp_43 = THROW_CCE();
        }
        var tmp_45 = tmp_43;
        var tmp_46 = tmp_45 == null ? null : new BaselineShift(tmp_45);
        tmp_41 = tmp_46 == null ? null : tmp_46.x5n_1;
      }
      tmp$ret$29 = tmp_41;
    }
    var tmp_47 = tmp$ret$29;
    var tmp0_4 = list.m(9);
    var tmp2_4 = get_Saver_5(Companion_getInstance_46());
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
        var tmp_50 = tmp2_4.m5f(tmp0_4);
        tmp_49 = (tmp_50 == null ? true : tmp_50 instanceof TextGeometricTransform) ? tmp_50 : THROW_CCE();
      }
      tmp$ret$34 = tmp_49;
    }
    var tmp_51 = tmp$ret$34;
    var tmp0_5 = list.m(10);
    var tmp2_5 = get_Saver_6(Companion_getInstance_35());
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
        var tmp_54 = tmp2_5.m5f(tmp0_5);
        tmp_53 = (tmp_54 == null ? true : tmp_54 instanceof LocaleList) ? tmp_54 : THROW_CCE();
      }
      tmp$ret$39 = tmp_53;
    }
    var tmp_55 = tmp$ret$39;
    var tmp0_6 = list.m(11);
    var tmp2_6 = get_Saver_2(Companion_getInstance());
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
        var tmp_58 = tmp2_6.m5f(tmp0_6);
        var tmp_59;
        if (tmp_58 == null ? true : tmp_58 instanceof Color) {
          var tmp_60 = tmp_58;
          tmp_59 = tmp_60 == null ? null : tmp_60.n4u_1;
        } else {
          tmp_59 = THROW_CCE();
        }
        var tmp_61 = tmp_59;
        var tmp_62 = tmp_61 == null ? null : new Color(tmp_61);
        tmp_57 = tmp_62 == null ? null : tmp_62.n4u_1;
      }
      tmp$ret$44 = tmp_57;
    }
    var tmp_63 = tmp$ret$44;
    var tmp_64 = ensureNotNull(tmp_63 == null ? null : new Color(tmp_63));
    var tmp0_7 = list.m(12);
    var tmp2_7 = get_Saver_7(Companion_getInstance_43());
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
        var tmp_67 = tmp2_7.m5f(tmp0_7);
        tmp_66 = (tmp_67 == null ? true : tmp_67 instanceof TextDecoration) ? tmp_67 : THROW_CCE();
      }
      tmp$ret$49 = tmp_66;
    }
    var tmp_68 = tmp$ret$49;
    var tmp0_8 = list.m(13);
    var tmp2_8 = get_Saver_8(Companion_getInstance_2());
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
        var tmp_71 = tmp2_8.m5f(tmp0_8);
        tmp_70 = (tmp_71 == null ? true : tmp_71 instanceof Shadow) ? tmp_71 : THROW_CCE();
      }
      tmp$ret$54 = tmp_70;
    }
    return SpanStyle_init_$Create$(tmp_7.n4u_1, tmp_16.u4o_1, tmp_20, tmp_24, tmp_28, VOID, tmp_30, tmp_39.u4o_1, tmp_47, tmp_51, tmp_55, tmp_64.n4u_1, tmp_68, tmp$ret$54);
  }
  function TextLinkStylesSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(it.y5n_1, get_SpanStyleSaver(), $this$Saver), save_0(it.z5n_1, get_SpanStyleSaver(), $this$Saver), save_0(it.a5o_1, get_SpanStyleSaver(), $this$Saver), save_0(it.b5o_1, get_SpanStyleSaver(), $this$Saver)]);
  }
  function TextLinkStylesSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(0);
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
        var tmp_1 = tmp2.m5f(tmp0);
        tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof SpanStyle) ? tmp_1 : THROW_CCE();
      }
      tmp$ret$0 = tmp_0;
    }
    var styleOrNull = tmp$ret$0;
    var tmp0_0 = list.m(1);
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
        var tmp_4 = tmp2_0.m5f(tmp0_0);
        tmp_3 = (tmp_4 == null ? true : tmp_4 instanceof SpanStyle) ? tmp_4 : THROW_CCE();
      }
      tmp$ret$5 = tmp_3;
    }
    var focusedStyleOrNull = tmp$ret$5;
    var tmp0_1 = list.m(2);
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
        var tmp_7 = tmp2_1.m5f(tmp0_1);
        tmp_6 = (tmp_7 == null ? true : tmp_7 instanceof SpanStyle) ? tmp_7 : THROW_CCE();
      }
      tmp$ret$10 = tmp_6;
    }
    var hoveredStyleOrNull = tmp$ret$10;
    var tmp0_2 = list.m(3);
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
        var tmp_10 = tmp2_2.m5f(tmp0_2);
        tmp_9 = (tmp_10 == null ? true : tmp_10 instanceof SpanStyle) ? tmp_10 : THROW_CCE();
      }
      tmp$ret$15 = tmp_9;
    }
    var pressedStyleOrNull = tmp$ret$15;
    return new TextLinkStyles(styleOrNull, focusedStyleOrNull, hoveredStyleOrNull, pressedStyleOrNull);
  }
  function TextDecorationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.c5o_1;
  }
  function TextDecorationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new TextDecoration(typeof it === 'number' ? it : THROW_CCE());
  }
  function TextGeometricTransformSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([it.d5o_1, it.e5o_1]);
  }
  function TextGeometricTransformSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    return new TextGeometricTransform(list.m(0), list.m(1));
  }
  function TextIndentSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new TextUnit(it.f5o_1), get_Saver(Companion_getInstance_1()), $this$Saver), save_0(new TextUnit(it.g5o_1), get_Saver(Companion_getInstance_1()), $this$Saver)]);
  }
  function TextIndentSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(0);
    var tmp2 = get_Saver(Companion_getInstance_1());
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
        var tmp_1 = tmp2.m5f(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof TextUnit) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.u4o_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new TextUnit(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.u4o_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new TextUnit(tmp_6));
    var tmp0_0 = list.m(1);
    var tmp2_0 = get_Saver(Companion_getInstance_1());
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
        var tmp_10 = tmp2_0.m5f(tmp0_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof TextUnit) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.u4o_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new TextUnit(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.u4o_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    return new TextIndent_0(tmp_7.u4o_1, ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15)).u4o_1);
  }
  function FontWeightSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.h5o_1;
  }
  function FontWeightSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new FontWeight(typeof it === 'number' ? it : THROW_CCE());
  }
  function BaselineShiftSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _BaselineShift___get_multiplier__impl__qhmjek(it.x5n_1);
  }
  function BaselineShiftSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new BaselineShift(_BaselineShift___init__impl__scj05g(typeof it === 'number' ? it : THROW_CCE()));
  }
  function TextRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(_TextRange___get_start__impl__ww4t90(it.t5k_1)), save(_TextRange___get_end__impl__gcdxpp(it.t5k_1))]);
  }
  function TextRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
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
    var tmp0_safe_receiver_0 = list.m(1);
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
    return arrayListOf([save_0(new Color(it.u4x_1), get_Saver_2(Companion_getInstance()), $this$Saver), save_0(new Offset(it.v4x_1), get_Saver_9(Companion_getInstance_3()), $this$Saver), save(it.w4x_1)]);
  }
  function ShadowSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(0);
    var tmp2 = get_Saver_2(Companion_getInstance());
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
        var tmp_1 = tmp2.m5f(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof Color) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.n4u_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new Color(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.n4u_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6));
    var tmp0_0 = list.m(1);
    var tmp2_0 = get_Saver_9(Companion_getInstance_3());
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
        var tmp_10 = tmp2_0.m5f(tmp0_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof Offset) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.p3t_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new Offset(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.p3t_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new Offset(tmp_15));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(2);
    var tmp_17;
    if (tmp0_safe_receiver == null) {
      tmp_17 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_17 = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$12 = tmp_17;
    return new Shadow(tmp_7.n4u_1, tmp_16.p3t_1, ensureNotNull(tmp$ret$12));
  }
  function ColorSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isUnspecified' call
    var this_0 = it.n4u_1;
    if (equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = false;
    } else {
      tmp = toArgb(it.n4u_1);
    }
    return tmp;
  }
  function ColorSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance().f4r_1;
    } else {
      tmp = Color_0(typeof it === 'number' ? it : THROW_CCE());
    }
    var tmp_0 = tmp;
    return tmp_0 == null ? null : new Color(tmp_0);
  }
  function TextUnitSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, new TextUnit(Companion_getInstance_1().s4o_1))) {
      tmp = false;
    } else {
      tmp = arrayListOf([save(_TextUnit___get_value__impl__hpbx0k(it.u4o_1)), save(new TextUnitType(_TextUnit___get_type__impl__uc2olt(it.u4o_1)))]);
    }
    return tmp;
  }
  function TextUnitSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_1().s4o_1;
    } else {
      var list = isInterface(it, KtList) ? it : THROW_CCE();
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver = list.m(0);
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
      var tmp0_safe_receiver_0 = list.m(1);
      var tmp_2;
      if (tmp0_safe_receiver_0 == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp_3 = tmp0_safe_receiver_0 instanceof TextUnitType ? tmp0_safe_receiver_0.t4o_1 : THROW_CCE();
        var tmp_4 = tmp_3 == null ? null : new TextUnitType(tmp_3);
        tmp_2 = tmp_4 == null ? null : tmp_4.t4o_1;
      }
      var tmp_5 = tmp_2;
      tmp = TextUnit_0(tmp_1, ensureNotNull(tmp_5 == null ? null : new TextUnitType(tmp_5)).t4o_1);
    }
    var tmp_6 = tmp;
    return tmp_6 == null ? null : new TextUnit(tmp_6);
  }
  function OffsetSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, new Offset(Companion_getInstance_3().t3t_1))) {
      tmp = false;
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_0 = it.p3t_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp$ret$3 = floatFromBits(bits);
      var tmp_0 = save(tmp$ret$3);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_1 = it.p3t_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var tmp$ret$7 = floatFromBits(bits_0);
      tmp = arrayListOf([tmp_0, save(tmp$ret$7)]);
    }
    return tmp;
  }
  function OffsetSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_3().t3t_1;
    } else {
      var list = isInterface(it, KtList) ? it : THROW_CCE();
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver = list.m(0);
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
      var tmp0_safe_receiver_0 = list.m(1);
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
    var this_0 = it.i5o_1;
    var target = ArrayList_init_$Create$_0(this_0.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = save_0(item, get_Saver_10(Companion_instance_21), $this$Saver);
        target.h(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function LocaleListSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var target = ArrayList_init_$Create$_0(list.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = list.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.m(index);
        var tmp2 = get_Saver_10(Companion_instance_21);
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
            var tmp_1 = tmp2.m5f(item);
            tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof Locale) ? tmp_1 : THROW_CCE();
          }
          tmp$ret$0 = tmp_0;
        }
        // Inline function 'kotlin.collections.plusAssign' call
        var element = ensureNotNull(tmp$ret$0);
        target.h(element);
      }
       while (inductionVariable <= last);
    return new LocaleList(target);
  }
  function LocaleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.l5o();
  }
  function LocaleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return Locale_init_$Create$(typeof it === 'string' ? it : THROW_CCE());
  }
  function LineHeightStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(new Alignment(it.m5o_1)), save(new Trim(it.n5o_1)), save(new Mode(it.o5o_1))]);
  }
  function LineHeightStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp0_safe_receiver instanceof Alignment ? tmp0_safe_receiver.p5o_1 : THROW_CCE();
      var tmp_1 = tmp_0 == null ? null : new Alignment(tmp_0);
      tmp = tmp_1 == null ? null : tmp_1.p5o_1;
    }
    var tmp_2 = tmp;
    var tmp_3 = ensureNotNull(tmp_2 == null ? null : new Alignment(tmp_2));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.m(1);
    var tmp_4;
    if (tmp0_safe_receiver_0 == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_5 = tmp0_safe_receiver_0 instanceof Trim ? tmp0_safe_receiver_0.q5o_1 : THROW_CCE();
      var tmp_6 = tmp_5 == null ? null : new Trim(tmp_5);
      tmp_4 = tmp_6 == null ? null : tmp_6.q5o_1;
    }
    var tmp_7 = tmp_4;
    var tmp_8 = ensureNotNull(tmp_7 == null ? null : new Trim(tmp_7));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.m(2);
    var tmp_9;
    if (tmp0_safe_receiver_1 == null) {
      tmp_9 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_10 = tmp0_safe_receiver_1 instanceof Mode ? tmp0_safe_receiver_1.r5o_1 : THROW_CCE();
      var tmp_11 = tmp_10 == null ? null : new Mode(tmp_10);
      tmp_9 = tmp_11 == null ? null : tmp_11.r5o_1;
    }
    var tmp_12 = tmp_9;
    return new LineHeightStyle(tmp_3.p5o_1, tmp_8.q5o_1, ensureNotNull(tmp_12 == null ? null : new Mode(tmp_12)).r5o_1);
  }
  function NonNullValueClassSaver$1($save, $restore) {
    this.s5o_1 = $save;
    this.t5o_1 = $restore;
  }
  protoOf(NonNullValueClassSaver$1).w5f = function (_this__u8e3s4, value) {
    return this.s5o_1(_this__u8e3s4, value);
  };
  protoOf(NonNullValueClassSaver$1).m5f = function (value) {
    return this.t5o_1(value);
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
  function SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    color = color === VOID ? Companion_getInstance().f4r_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().s4o_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().s4o_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().f4r_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_instance_32.u5o(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    alpha = alpha === VOID ? NaN : alpha;
    fontSize = fontSize === VOID ? Companion_getInstance_1().s4o_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().s4o_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().f4r_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_instance_32.v5o(brush, alpha), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle(textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    fontSize = fontSize === VOID ? Companion_getInstance_1().s4o_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().s4o_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().f4r_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    this.f5n_1 = textForegroundStyle;
    this.g5n_1 = fontSize;
    this.h5n_1 = fontWeight;
    this.i5n_1 = fontStyle;
    this.j5n_1 = fontSynthesis;
    this.k5n_1 = fontFamily;
    this.l5n_1 = fontFeatureSettings;
    this.m5n_1 = letterSpacing;
    this.n5n_1 = baselineShift;
    this.o5n_1 = textGeometricTransform;
    this.p5n_1 = localeList;
    this.q5n_1 = background;
    this.r5n_1 = textDecoration;
    this.s5n_1 = shadow;
    this.t5n_1 = platformStyle;
    this.u5n_1 = drawStyle;
  }
  protoOf(SpanStyle).g4r = function () {
    return this.f5n_1.g4r();
  };
  protoOf(SpanStyle).w5o = function () {
    return this.f5n_1.w5o();
  };
  protoOf(SpanStyle).e4l = function () {
    return this.f5n_1.e4l();
  };
  protoOf(SpanStyle).x5o = function (other) {
    if (other == null)
      return this;
    return fastMerge_0(this, other.f5n_1.g4r(), other.f5n_1.w5o(), other.f5n_1.e4l(), other.g5n_1, other.h5n_1, other.i5n_1, other.j5n_1, other.k5n_1, other.l5n_1, other.m5n_1, other.n5n_1, other.o5n_1, other.p5n_1, other.q5n_1, other.r5n_1, other.s5n_1, other.t5n_1, other.u5n_1);
  };
  protoOf(SpanStyle).y5o = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    var tmp;
    if (equals(color, this.g4r())) {
      tmp = this.f5n_1;
    } else {
      tmp = Companion_instance_32.u5o(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
  };
  protoOf(SpanStyle).z5o = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $super) {
    color = color === VOID ? this.g4r() : color;
    fontSize = fontSize === VOID ? this.g5n_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.h5n_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.i5n_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.j5n_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.k5n_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.l5n_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.m5n_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.n5n_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.o5n_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.p5n_1 : localeList;
    background = background === VOID ? this.q5n_1 : background;
    textDecoration = textDecoration === VOID ? this.r5n_1 : textDecoration;
    shadow = shadow === VOID ? this.s5n_1 : shadow;
    platformStyle = platformStyle === VOID ? this.t5n_1 : platformStyle;
    drawStyle = drawStyle === VOID ? this.u5n_1 : drawStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.y5o(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    } else {
      var tmp_0 = $super.y5o;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, platformStyle, drawStyle);
    }
    return tmp;
  };
  protoOf(SpanStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpanStyle))
      return false;
    return this.a5p(other) && this.b5p(other);
  };
  protoOf(SpanStyle).a5p = function (other) {
    if (this === other)
      return true;
    if (!equals(this.g5n_1, other.g5n_1))
      return false;
    if (!equals(this.h5n_1, other.h5n_1))
      return false;
    var tmp = this.i5n_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = other.i5n_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.j5n_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = other.j5n_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.k5n_1, other.k5n_1))
      return false;
    if (!(this.l5n_1 == other.l5n_1))
      return false;
    if (!equals(this.m5n_1, other.m5n_1))
      return false;
    var tmp_5 = this.n5n_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = other.n5n_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.o5n_1, other.o5n_1))
      return false;
    if (!equals(this.p5n_1, other.p5n_1))
      return false;
    if (!equals(this.q5n_1, other.q5n_1))
      return false;
    if (!equals(this.t5n_1, other.t5n_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).b5p = function (other) {
    if (!equals(this.f5n_1, other.f5n_1))
      return false;
    if (!equals(this.r5n_1, other.r5n_1))
      return false;
    if (!equals(this.s5n_1, other.s5n_1))
      return false;
    if (!equals(this.u5n_1, other.u5n_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.g4r());
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.w5o();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.e4l()) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.g5n_1) | 0;
    var tmp_0 = imul(31, result);
    var tmp0_safe_receiver_0 = this.h5n_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.hashCode();
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.i5n_1;
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
    var tmp4_safe_receiver = this.j5n_1;
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
    var tmp6_safe_receiver = this.k5n_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_7 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_8 = imul(31, result);
    var tmp8_safe_receiver = this.l5n_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_8 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.m5n_1) | 0;
    var tmp_9 = imul(31, result);
    var tmp10_safe_receiver = this.n5n_1;
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
    var tmp12_safe_receiver = this.o5n_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_12 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.p5n_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.q5n_1) | 0;
    var tmp_14 = imul(31, result);
    var tmp16_safe_receiver = this.r5n_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_14 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    var tmp_15 = imul(31, result);
    var tmp18_safe_receiver = this.s5n_1;
    var tmp19_elvis_lhs = tmp18_safe_receiver == null ? null : tmp18_safe_receiver.hashCode();
    result = tmp_15 + (tmp19_elvis_lhs == null ? 0 : tmp19_elvis_lhs) | 0;
    var tmp_16 = imul(31, result);
    var tmp20_safe_receiver = this.t5n_1;
    var tmp21_elvis_lhs = tmp20_safe_receiver == null ? null : tmp20_safe_receiver.hashCode();
    result = tmp_16 + (tmp21_elvis_lhs == null ? 0 : tmp21_elvis_lhs) | 0;
    var tmp_17 = imul(31, result);
    var tmp22_safe_receiver = this.u5n_1;
    var tmp23_elvis_lhs = tmp22_safe_receiver == null ? null : hashCode(tmp22_safe_receiver);
    result = tmp_17 + (tmp23_elvis_lhs == null ? 0 : tmp23_elvis_lhs) | 0;
    return result;
  };
  protoOf(SpanStyle).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    this_0.u7('SpanStyle(');
    this_0.u7('color=' + Color__toString_impl_hpzmaq(this.g4r()) + ', ');
    this_0.u7('brush=' + toString(this.w5o()) + ', ');
    this_0.u7('alpha=' + this.e4l() + ', ');
    this_0.u7('fontSize=' + TextUnit__toString_impl_51ghw0(this.g5n_1) + ', ');
    this_0.u7('fontWeight=' + toString(this.h5n_1) + ', ');
    var tmp = this.i5n_1;
    this_0.u7('fontStyle=' + toString(tmp == null ? null : new FontStyle(tmp)) + ', ');
    var tmp_0 = this.j5n_1;
    this_0.u7('fontSynthesis=' + toString(tmp_0 == null ? null : new FontSynthesis(tmp_0)) + ', ');
    this_0.u7('fontFamily=' + toString(this.k5n_1) + ', ');
    this_0.u7('fontFeatureSettings=' + this.l5n_1 + ', ');
    this_0.u7('letterSpacing=' + TextUnit__toString_impl_51ghw0(this.m5n_1) + ', ');
    var tmp_1 = this.n5n_1;
    this_0.u7('baselineShift=' + toString(tmp_1 == null ? null : new BaselineShift(tmp_1)) + ', ');
    this_0.u7('textGeometricTransform=' + toString(this.o5n_1) + ', ');
    this_0.u7('localeList=' + toString(this.p5n_1) + ', ');
    this_0.u7('background=' + Color__toString_impl_hpzmaq(this.q5n_1) + ', ');
    this_0.u7('textDecoration=' + toString(this.r5n_1) + ', ');
    this_0.u7('shadow=' + toString(this.s5n_1) + ', ');
    this_0.u7('platformStyle=' + toString(this.t5n_1) + ', ');
    this_0.u7('drawStyle=' + toString(this.u5n_1));
    this_0.u7(')');
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
      tmp_16 = !equals(fontSize, _this__u8e3s4.g5n_1);
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
        tmp_17 = !equals(color, _this__u8e3s4.f5n_1.g4r());
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
        var tmp_23 = _this__u8e3s4.i5n_1;
        tmp_19 = !equals(tmp_22, tmp_23 == null ? null : new FontStyle(tmp_23));
      } else {
        tmp_19 = false;
      }
      tmp_14 = tmp_19;
    }
    if (tmp_14) {
      tmp_13 = true;
    } else {
      tmp_13 = (!(fontWeight == null) && !equals(fontWeight, _this__u8e3s4.h5n_1));
    }
    if (tmp_13) {
      tmp_12 = true;
    } else {
      tmp_12 = (!(fontFamily == null) && !(fontFamily === _this__u8e3s4.k5n_1));
    }
    if (tmp_12) {
      tmp_11 = true;
    } else {
      var tmp_24;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(letterSpacing), new Long(0, 0))) {
        tmp_24 = !equals(letterSpacing, _this__u8e3s4.m5n_1);
      } else {
        tmp_24 = false;
      }
      tmp_11 = tmp_24;
    }
    if (tmp_11) {
      tmp_10 = true;
    } else {
      tmp_10 = (!(textDecoration == null) && !equals(textDecoration, _this__u8e3s4.r5n_1));
    }
    if (tmp_10) {
      tmp_9 = true;
    } else {
      tmp_9 = !equals(brush, _this__u8e3s4.f5n_1.w5o());
    }
    if (tmp_9) {
      tmp_8 = true;
    } else {
      tmp_8 = (!(brush == null) && !(alpha === _this__u8e3s4.f5n_1.e4l()));
    }
    if (tmp_8) {
      tmp_7 = true;
    } else {
      var tmp_25;
      var tmp_26 = fontSynthesis;
      if (!((tmp_26 == null ? null : new FontSynthesis(tmp_26)) == null)) {
        var tmp_27 = fontSynthesis;
        var tmp_28 = tmp_27 == null ? null : new FontSynthesis(tmp_27);
        var tmp_29 = _this__u8e3s4.j5n_1;
        tmp_25 = !equals(tmp_28, tmp_29 == null ? null : new FontSynthesis(tmp_29));
      } else {
        tmp_25 = false;
      }
      tmp_7 = tmp_25;
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      tmp_6 = (!(fontFeatureSettings == null) && !(fontFeatureSettings == _this__u8e3s4.l5n_1));
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      var tmp_30;
      var tmp_31 = baselineShift;
      if (!((tmp_31 == null ? null : new BaselineShift(tmp_31)) == null)) {
        var tmp_32 = baselineShift;
        var tmp_33 = tmp_32 == null ? null : new BaselineShift(tmp_32);
        var tmp_34 = _this__u8e3s4.n5n_1;
        tmp_30 = !equals(tmp_33, tmp_34 == null ? null : new BaselineShift(tmp_34));
      } else {
        tmp_30 = false;
      }
      tmp_5 = tmp_30;
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = (!(textGeometricTransform == null) && !equals(textGeometricTransform, _this__u8e3s4.o5n_1));
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = (!(localeList == null) && !equals(localeList, _this__u8e3s4.p5n_1));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      var tmp_35;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(background), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
        tmp_35 = !equals(background, _this__u8e3s4.q5n_1);
      } else {
        tmp_35 = false;
      }
      tmp_2 = tmp_35;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = (!(shadow == null) && !equals(shadow, _this__u8e3s4.s5n_1));
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = (!(platformStyle == null) && !equals(platformStyle, _this__u8e3s4.t5n_1));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = (!(drawStyle == null) && !equals(drawStyle, _this__u8e3s4.u5n_1));
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_36;
    if (!(brush == null)) {
      tmp_36 = Companion_instance_32.v5o(brush, alpha);
    } else {
      tmp_36 = Companion_instance_32.u5o(color);
    }
    var otherTextForegroundStyle = tmp_36;
    var tmp11_textForegroundStyle = _this__u8e3s4.f5n_1.c5p(otherTextForegroundStyle);
    var tmp12_fontFamily = fontFamily == null ? _this__u8e3s4.k5n_1 : fontFamily;
    var tmp_37;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(fontSize), new Long(0, 0))) {
      tmp_37 = fontSize;
    } else {
      tmp_37 = _this__u8e3s4.g5n_1;
    }
    var tmp13_fontSize = tmp_37;
    var tmp14_fontWeight = fontWeight == null ? _this__u8e3s4.h5n_1 : fontWeight;
    var tmp_38;
    var tmp_39 = fontStyle;
    if ((tmp_39 == null ? null : new FontStyle(tmp_39)) == null) {
      tmp_38 = _this__u8e3s4.i5n_1;
    } else {
      tmp_38 = fontStyle;
    }
    var tmp15_fontStyle = tmp_38;
    var tmp_40;
    var tmp_41 = fontSynthesis;
    if ((tmp_41 == null ? null : new FontSynthesis(tmp_41)) == null) {
      tmp_40 = _this__u8e3s4.j5n_1;
    } else {
      tmp_40 = fontSynthesis;
    }
    var tmp16_fontSynthesis = tmp_40;
    var tmp17_fontFeatureSettings = fontFeatureSettings == null ? _this__u8e3s4.l5n_1 : fontFeatureSettings;
    var tmp_42;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(letterSpacing), new Long(0, 0))) {
      tmp_42 = letterSpacing;
    } else {
      tmp_42 = _this__u8e3s4.m5n_1;
    }
    var tmp18_letterSpacing = tmp_42;
    var tmp_43;
    var tmp_44 = baselineShift;
    if ((tmp_44 == null ? null : new BaselineShift(tmp_44)) == null) {
      tmp_43 = _this__u8e3s4.n5n_1;
    } else {
      tmp_43 = baselineShift;
    }
    var tmp19_baselineShift = tmp_43;
    var tmp20_textGeometricTransform = textGeometricTransform == null ? _this__u8e3s4.o5n_1 : textGeometricTransform;
    var tmp21_localeList = localeList == null ? _this__u8e3s4.p5n_1 : localeList;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_45;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(background), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_45 = background;
    } else {
      tmp_45 = _this__u8e3s4.q5n_1;
    }
    var tmp22_background = tmp_45;
    var tmp23_textDecoration = textDecoration == null ? _this__u8e3s4.r5n_1 : textDecoration;
    var tmp24_shadow = shadow == null ? _this__u8e3s4.s5n_1 : shadow;
    var tmp25_platformStyle = mergePlatformStyle_0(_this__u8e3s4, platformStyle);
    var tmp26_drawStyle = drawStyle == null ? _this__u8e3s4.u5n_1 : drawStyle;
    return new SpanStyle(tmp11_textForegroundStyle, tmp13_fontSize, tmp14_fontWeight, tmp15_fontStyle, tmp16_fontSynthesis, tmp12_fontFamily, tmp17_fontFeatureSettings, tmp18_letterSpacing, tmp19_baselineShift, tmp20_textGeometricTransform, tmp21_localeList, tmp22_background, tmp23_textDecoration, tmp24_shadow, tmp25_platformStyle, tmp26_drawStyle);
  }
  function mergePlatformStyle_0(_this__u8e3s4, other) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (_this__u8e3s4.t5n_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.t5n_1;
    return _this__u8e3s4.t5n_1.e5p(other);
  }
  function lerp_5(start, stop, fraction) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp8_textForegroundStyle = lerp_9(start.f5n_1, stop.f5n_1, fraction);
    var tmp9_fontFamily = lerpDiscrete(start.k5n_1, stop.k5n_1, fraction);
    var tmp10_fontSize = lerpTextUnitInheritable(start.g5n_1, stop.g5n_1, fraction);
    var tmp0_elvis_lhs = start.h5n_1;
    var tmp = tmp0_elvis_lhs == null ? Companion_getInstance_24().r5p_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = stop.h5n_1;
    var tmp11_fontWeight = lerp_7(tmp, tmp1_elvis_lhs == null ? Companion_getInstance_24().r5p_1 : tmp1_elvis_lhs, fraction);
    var tmp_0 = start.i5n_1;
    var tmp_1 = tmp_0 == null ? null : new FontStyle(tmp_0);
    var tmp_2 = stop.i5n_1;
    var tmp_3 = lerpDiscrete(tmp_1, tmp_2 == null ? null : new FontStyle(tmp_2), fraction);
    var tmp12_fontStyle = tmp_3 == null ? null : tmp_3.v5n_1;
    var tmp_4 = start.j5n_1;
    var tmp_5 = tmp_4 == null ? null : new FontSynthesis(tmp_4);
    var tmp_6 = stop.j5n_1;
    var tmp_7 = lerpDiscrete(tmp_5, tmp_6 == null ? null : new FontSynthesis(tmp_6), fraction);
    var tmp13_fontSynthesis = tmp_7 == null ? null : tmp_7.w5n_1;
    var tmp14_fontFeatureSettings = lerpDiscrete(start.l5n_1, stop.l5n_1, fraction);
    var tmp15_letterSpacing = lerpTextUnitInheritable(start.m5n_1, stop.m5n_1, fraction);
    var tmp2_elvis_lhs = start.n5n_1;
    var tmp_8;
    var tmp_9 = tmp2_elvis_lhs;
    if ((tmp_9 == null ? null : new BaselineShift(tmp_9)) == null) {
      tmp_8 = _BaselineShift___init__impl__scj05g(0.0);
    } else {
      tmp_8 = tmp2_elvis_lhs;
    }
    var tmp_10 = tmp_8;
    var tmp3_elvis_lhs = stop.n5n_1;
    var tmp_11;
    var tmp_12 = tmp3_elvis_lhs;
    if ((tmp_12 == null ? null : new BaselineShift(tmp_12)) == null) {
      tmp_11 = _BaselineShift___init__impl__scj05g(0.0);
    } else {
      tmp_11 = tmp3_elvis_lhs;
    }
    var tmp16_baselineShift = lerp_8(tmp_10, tmp_11, fraction);
    var tmp4_elvis_lhs = start.o5n_1;
    var tmp_13 = tmp4_elvis_lhs == null ? Companion_getInstance_46().y5p_1 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = stop.o5n_1;
    var tmp17_textGeometricTransform = lerp_10(tmp_13, tmp5_elvis_lhs == null ? Companion_getInstance_46().y5p_1 : tmp5_elvis_lhs, fraction);
    var tmp18_localeList = lerpDiscrete(start.p5n_1, stop.p5n_1, fraction);
    var tmp19_background = lerp(start.q5n_1, stop.q5n_1, fraction);
    var tmp20_textDecoration = lerpDiscrete(start.r5n_1, stop.r5n_1, fraction);
    var tmp6_elvis_lhs = start.s5n_1;
    var tmp_14 = tmp6_elvis_lhs == null ? new Shadow() : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = stop.s5n_1;
    var tmp21_shadow = lerp_0(tmp_14, tmp7_elvis_lhs == null ? new Shadow() : tmp7_elvis_lhs, fraction);
    var tmp22_platformStyle = lerpPlatformStyle_0(start.t5n_1, stop.t5n_1, fraction);
    var tmp23_drawStyle = lerpDiscrete(start.u5n_1, stop.u5n_1, fraction);
    return new SpanStyle(tmp8_textForegroundStyle, tmp10_fontSize, tmp11_fontWeight, tmp12_fontStyle, tmp13_fontSynthesis, tmp9_fontFamily, tmp14_fontFeatureSettings, tmp15_letterSpacing, tmp16_baselineShift, tmp17_textGeometricTransform, tmp18_localeList, tmp19_background, tmp20_textDecoration, tmp21_shadow, tmp22_platformStyle, tmp23_drawStyle);
  }
  function resolveSpanStyleDefaults(style) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp = style.f5n_1.z5p(resolveSpanStyleDefaults$lambda);
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = style.g5n_1;
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0))) {
      tmp_0 = get_DefaultFontSize();
    } else {
      tmp_0 = style.g5n_1;
    }
    var tmp_1 = tmp_0;
    var tmp0_elvis_lhs = style.h5n_1;
    var tmp_2 = tmp0_elvis_lhs == null ? Companion_getInstance_24().r5p_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.i5n_1;
    var tmp_3;
    var tmp_4 = tmp1_elvis_lhs;
    if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
      tmp_3 = Companion_getInstance_22().a5q_1;
    } else {
      tmp_3 = tmp1_elvis_lhs;
    }
    var tmp_5 = tmp_3;
    var tmp2_elvis_lhs = style.j5n_1;
    var tmp_6;
    var tmp_7 = tmp2_elvis_lhs;
    if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
      tmp_6 = Companion_getInstance_23().f5q_1;
    } else {
      tmp_6 = tmp2_elvis_lhs;
    }
    var tmp_8 = tmp_6;
    var tmp3_elvis_lhs = style.k5n_1;
    var tmp_9 = tmp3_elvis_lhs == null ? Companion_getInstance_18().g5q_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = style.l5n_1;
    var tmp_10 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_11;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_1 = style.m5n_1;
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_1), new Long(0, 0))) {
      tmp_11 = get_DefaultLetterSpacing();
    } else {
      tmp_11 = style.m5n_1;
    }
    var tmp_12 = tmp_11;
    var tmp5_elvis_lhs = style.n5n_1;
    var tmp_13;
    var tmp_14 = tmp5_elvis_lhs;
    if ((tmp_14 == null ? null : new BaselineShift(tmp_14)) == null) {
      tmp_13 = Companion_getInstance_36().n5q_1;
    } else {
      tmp_13 = tmp5_elvis_lhs;
    }
    var tmp_15 = tmp_13;
    var tmp6_elvis_lhs = style.o5n_1;
    var tmp_16 = tmp6_elvis_lhs == null ? Companion_getInstance_46().y5p_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = style.p5n_1;
    var tmp_17 = tmp7_elvis_lhs == null ? Companion_getInstance_35().p22() : tmp7_elvis_lhs;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var this_2 = style.q5n_1;
    var tmp_18;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(this_2), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_18 = this_2;
    } else {
      tmp_18 = get_DefaultBackgroundColor();
    }
    var tmp_19 = tmp_18;
    var tmp8_elvis_lhs = style.r5n_1;
    var tmp_20 = tmp8_elvis_lhs == null ? Companion_getInstance_43().p5q_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = style.s5n_1;
    var tmp_21 = tmp9_elvis_lhs == null ? Companion_getInstance_2().t4x_1 : tmp9_elvis_lhs;
    var tmp10_elvis_lhs = style.u5n_1;
    return new SpanStyle(tmp, tmp_1, tmp_2, tmp_5, tmp_8, tmp_9, tmp_10, tmp_12, tmp_15, tmp_16, tmp_17, tmp_19, tmp_20, tmp_21, style.t5n_1, tmp10_elvis_lhs == null ? Fill_getInstance() : tmp10_elvis_lhs);
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
      return lerpDiscrete(new TextUnit(a), new TextUnit(b), t).u4o_1;
    return lerp_1(a, b, t);
  }
  function lerpPlatformStyle_0(start, stop, fraction) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (start == null && stop == null)
      return null;
    var startNonNull = start == null ? Companion_getInstance_53().s5q_1 : start;
    var stopNonNull = stop == null ? Companion_getInstance_53().s5q_1 : stop;
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
      DefaultFontSize = get_sp(14);
      DefaultLetterSpacing = get_sp(0);
      DefaultBackgroundColor = Companion_getInstance().e4r_1;
      DefaultColor = Companion_getInstance().t4q_1;
      DefaultColorForegroundStyle = Companion_instance_32.u5o(get_DefaultColor());
      androidx_compose_ui_text_SpanStyle$stable = 0;
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
    if (!($this === (other instanceof StringAnnotation ? other.c5n_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StringAnnotation(value) {
    this.c5n_1 = value;
  }
  protoOf(StringAnnotation).toString = function () {
    return StringAnnotation__toString_impl_xnbt1d(this.c5n_1);
  };
  protoOf(StringAnnotation).hashCode = function () {
    return StringAnnotation__hashCode_impl_bw5w8i(this.c5n_1);
  };
  protoOf(StringAnnotation).equals = function (other) {
    return StringAnnotation__equals_impl_ro6p8u(this.c5n_1, other);
  };
  var androidx_compose_ui_text_TextLayoutInput$stable;
  var androidx_compose_ui_text_TextLayoutResult$stable;
  function TextLayoutResult(layoutInput, multiParagraph, size) {
    this.t5q_1 = layoutInput;
    this.u5q_1 = multiParagraph;
    this.v5q_1 = size;
    this.w5q_1 = this.u5q_1.a5k();
    this.x5q_1 = this.u5q_1.b5k();
    this.y5q_1 = this.u5q_1.c5j_1;
  }
  protoOf(TextLayoutResult).z5q = function () {
    var tmp;
    if (this.u5q_1.y5i_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_0 = this.v5q_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      tmp = convertToInt(bitwiseAnd(value, new Long(-1, 0))) < this.u5q_1.a5j_1;
    }
    return tmp;
  };
  protoOf(TextLayoutResult).a5r = function () {
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    var this_0 = this.v5q_1;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
    return convertToInt(shiftRight(value, 32)) < this.u5q_1.z5i_1;
  };
  protoOf(TextLayoutResult).b5r = function () {
    return this.a5r() || this.z5q();
  };
  protoOf(TextLayoutResult).w5j = function () {
    return this.u5q_1.b5j_1;
  };
  protoOf(TextLayoutResult).c5l = function (lineIndex) {
    return this.u5q_1.c5l(lineIndex);
  };
  protoOf(TextLayoutResult).d5l = function (lineIndex, visibleEnd) {
    return this.u5q_1.d5l(lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).c5r = function (lineIndex, visibleEnd, $super) {
    visibleEnd = visibleEnd === VOID ? false : visibleEnd;
    return $super === VOID ? this.d5l(lineIndex, visibleEnd) : $super.d5l.call(this, lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).z5k = function (lineIndex) {
    return this.u5q_1.z5k(lineIndex);
  };
  protoOf(TextLayoutResult).a5l = function (lineIndex) {
    return this.u5q_1.a5l(lineIndex);
  };
  protoOf(TextLayoutResult).w5k = function (lineIndex) {
    return this.u5q_1.w5k(lineIndex);
  };
  protoOf(TextLayoutResult).y5k = function (lineIndex) {
    return this.u5q_1.y5k(lineIndex);
  };
  protoOf(TextLayoutResult).v5k = function (offset) {
    return this.u5q_1.v5k(offset);
  };
  protoOf(TextLayoutResult).h5k = function (vertical) {
    return this.u5q_1.h5k(vertical);
  };
  protoOf(TextLayoutResult).o5k = function (offset, usePrimaryDirection) {
    return this.u5q_1.o5k(offset, usePrimaryDirection);
  };
  protoOf(TextLayoutResult).p5k = function (offset) {
    return this.u5q_1.p5k(offset);
  };
  protoOf(TextLayoutResult).q5k = function (offset) {
    return this.u5q_1.q5k(offset);
  };
  protoOf(TextLayoutResult).k5k = function (position) {
    return this.u5q_1.k5k(position);
  };
  protoOf(TextLayoutResult).n5k = function (offset) {
    return this.u5q_1.n5k(offset);
  };
  protoOf(TextLayoutResult).r5k = function (offset) {
    return this.u5q_1.r5k(offset);
  };
  protoOf(TextLayoutResult).u5k = function (offset) {
    return this.u5q_1.u5k(offset);
  };
  protoOf(TextLayoutResult).m5j = function (start, end) {
    return this.u5q_1.m5j(start, end);
  };
  protoOf(TextLayoutResult).d5r = function (layoutInput, size) {
    return new TextLayoutResult(layoutInput, this.u5q_1, size);
  };
  protoOf(TextLayoutResult).e5r = function (layoutInput, size, $super) {
    layoutInput = layoutInput === VOID ? this.t5q_1 : layoutInput;
    size = size === VOID ? this.v5q_1 : size;
    return $super === VOID ? this.d5r(layoutInput, size) : $super.d5r.call(this, layoutInput, new IntSize(size));
  };
  protoOf(TextLayoutResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutResult))
      return false;
    if (!this.t5q_1.equals(other.t5q_1))
      return false;
    if (!equals(this.u5q_1, other.u5q_1))
      return false;
    if (!equals(this.v5q_1, other.v5q_1))
      return false;
    if (!(this.w5q_1 === other.w5q_1))
      return false;
    if (!(this.x5q_1 === other.x5q_1))
      return false;
    if (!equals(this.y5q_1, other.y5q_1))
      return false;
    return true;
  };
  protoOf(TextLayoutResult).hashCode = function () {
    var result = this.t5q_1.hashCode();
    result = imul(31, result) + hashCode(this.u5q_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.v5q_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.w5q_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.x5q_1) | 0;
    result = imul(31, result) + hashCode(this.y5q_1) | 0;
    return result;
  };
  protoOf(TextLayoutResult).toString = function () {
    return 'TextLayoutResult(' + ('layoutInput=' + this.t5q_1.toString() + ', ') + ('multiParagraph=' + toString_0(this.u5q_1) + ', ') + ('size=' + IntSize__toString_impl_54w9zl(this.v5q_1) + ', ') + ('firstBaseline=' + this.w5q_1 + ', ') + ('lastBaseline=' + this.x5q_1 + ', ') + ('placeholderRects=' + toString_0(this.y5q_1)) + ')';
  };
  function TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, null, fontFamilyResolver, constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    return TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, objectCreate(protoOf(TextLayoutInput)));
  }
  function TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, fontFamilyResolver, constraints) {
    this.f5r_1 = text;
    this.g5r_1 = style;
    this.h5r_1 = placeholders;
    this.i5r_1 = maxLines;
    this.j5r_1 = softWrap;
    this.k5r_1 = overflow;
    this.l5r_1 = density;
    this.m5r_1 = layoutDirection;
    this.n5r_1 = fontFamilyResolver;
    this.o5r_1 = constraints;
    this.p5r_1 = resourceLoader;
  }
  protoOf(TextLayoutInput).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutInput))
      return false;
    if (!this.f5r_1.equals(other.f5r_1))
      return false;
    if (!this.g5r_1.equals(other.g5r_1))
      return false;
    if (!equals(this.h5r_1, other.h5r_1))
      return false;
    if (!(this.i5r_1 === other.i5r_1))
      return false;
    if (!(this.j5r_1 === other.j5r_1))
      return false;
    if (!(this.k5r_1 === other.k5r_1))
      return false;
    if (!equals(this.l5r_1, other.l5r_1))
      return false;
    if (!this.m5r_1.equals(other.m5r_1))
      return false;
    if (!equals(this.n5r_1, other.n5r_1))
      return false;
    if (!equals(this.o5r_1, other.o5r_1))
      return false;
    return true;
  };
  protoOf(TextLayoutInput).hashCode = function () {
    var result = this.f5r_1.hashCode();
    result = imul(31, result) + this.g5r_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.h5r_1) | 0;
    result = imul(31, result) + this.i5r_1 | 0;
    result = imul(31, result) + getBooleanHashCode(this.j5r_1) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.k5r_1) | 0;
    result = imul(31, result) + hashCode(this.l5r_1) | 0;
    result = imul(31, result) + this.m5r_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.n5r_1) | 0;
    result = imul(31, result) + Constraints__hashCode_impl_ij7484(this.o5r_1) | 0;
    return result;
  };
  protoOf(TextLayoutInput).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    this_0.u7('TextLayoutInput(');
    this_0.u7('text=' + this.f5r_1.toString() + ', ');
    this_0.u7('style=' + this.g5r_1.toString() + ', ');
    this_0.u7('placeholders=' + toString_0(this.h5r_1) + ', ');
    this_0.u7('maxLines=' + this.i5r_1 + ', ');
    this_0.u7('softWrap=' + this.j5r_1 + ', ');
    this_0.u7('overflow=' + TextOverflow__toString_impl_10s0c2(this.k5r_1) + ', ');
    this_0.u7('density=' + toString_0(this.l5r_1) + ', ');
    this_0.u7('layoutDirection=' + this.m5r_1.toString() + ', ');
    this_0.u7('fontFamilyResolver=' + toString_0(this.n5r_1) + ', ');
    this_0.u7('constraints=' + Constraints__toString_impl_37yskr(this.o5r_1));
    this_0.u7(')');
    return this_0.toString();
  };
  function androidx_compose_ui_text_TextLayoutResult$stableprop_getter() {
    return androidx_compose_ui_text_TextLayoutResult$stable;
  }
  var androidx_compose_ui_text_TextLinkStyles$stable;
  function TextLinkStyles(style, focusedStyle, hoveredStyle, pressedStyle) {
    style = style === VOID ? null : style;
    focusedStyle = focusedStyle === VOID ? null : focusedStyle;
    hoveredStyle = hoveredStyle === VOID ? null : hoveredStyle;
    pressedStyle = pressedStyle === VOID ? null : pressedStyle;
    this.y5n_1 = style;
    this.z5n_1 = focusedStyle;
    this.a5o_1 = hoveredStyle;
    this.b5o_1 = pressedStyle;
  }
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
    if (!equals(this.y5n_1, other.y5n_1))
      return false;
    if (!equals(this.z5n_1, other.z5n_1))
      return false;
    if (!equals(this.a5o_1, other.a5o_1))
      return false;
    if (!equals(this.b5o_1, other.b5o_1))
      return false;
    return true;
  };
  protoOf(TextLinkStyles).hashCode = function () {
    var tmp0_safe_receiver = this.y5n_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.z5n_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.a5o_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp6_safe_receiver = this.b5o_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.hashCode();
    result = tmp_1 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    return result;
  };
  var androidx_compose_ui_text_TextMeasurer$stable;
  var androidx_compose_ui_text_TextLayoutCache$stable;
  var androidx_compose_ui_text_CacheTextLayoutInput$stable;
  var androidx_compose_ui_text_TextPainter$stable;
  function TextPainter() {
  }
  protoOf(TextPainter).q5r = function (canvas, textLayoutResult) {
    var needClipping = textLayoutResult.b5r() && !(textLayoutResult.t5q_1.k5r_1 === Companion_getInstance_48().q5j_1);
    if (needClipping) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = textLayoutResult.v5q_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var width = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_1 = textLayoutResult.v5q_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
      var height = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var tmp = Companion_getInstance_3().r3t_1;
      // Inline function 'androidx.compose.ui.geometry.Size' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var v1 = fromInt(toRawBits(width));
      var v2 = fromInt(toRawBits(height));
      var tmp$ret$4 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      var tmp$ret$5 = _Size___init__impl__aywn0g(tmp$ret$4);
      var bounds = Rect(tmp, tmp$ret$5);
      canvas.k4s();
      canvas.r4s(bounds);
    }
    var style = textLayoutResult.t5q_1.g5r_1.n5l_1;
    var tmp0_elvis_lhs = style.r5n_1;
    var textDecoration = tmp0_elvis_lhs == null ? Companion_getInstance_43().p5q_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.s5n_1;
    var shadow = tmp1_elvis_lhs == null ? Companion_getInstance_2().t4x_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = style.u5n_1;
    var drawStyle = tmp2_elvis_lhs == null ? Fill_getInstance() : tmp2_elvis_lhs;
    try {
      var brush = style.w5o();
      if (!(brush == null)) {
        var tmp_0;
        if (!(style.f5n_1 === Unspecified_instance)) {
          tmp_0 = style.f5n_1.e4l();
        } else {
          tmp_0 = 1.0;
        }
        var alpha = tmp_0;
        textLayoutResult.u5q_1.g5k(canvas, brush, alpha, shadow, textDecoration, drawStyle);
      } else {
        var tmp_1;
        if (!(style.f5n_1 === Unspecified_instance)) {
          tmp_1 = style.f5n_1.g4r();
        } else {
          tmp_1 = Companion_getInstance().t4q_1;
        }
        var color = tmp_1;
        textLayoutResult.u5q_1.e5k(canvas, color, shadow, textDecoration, drawStyle);
      }
    }finally {
      if (needClipping) {
        canvas.l4s();
      }
    }
  };
  var TextPainter_instance;
  function TextPainter_getInstance() {
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
  function Companion_2() {
    Companion_instance_3 = this;
    this.f5l_1 = TextRange_0(0);
  }
  var Companion_instance_3;
  function Companion_getInstance_16() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function TextRange__hashCode_impl_3zpp6q($this) {
    return $this.hashCode();
  }
  function TextRange__equals_impl_hkkmea($this, other) {
    if (!(other instanceof TextRange))
      return false;
    var tmp0_other_with_cast = other instanceof TextRange ? other.t5k_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextRange(packedValue) {
    Companion_getInstance_16();
    this.t5k_1 = packedValue;
  }
  protoOf(TextRange).toString = function () {
    return TextRange__toString_impl_pqvlzl(this.t5k_1);
  };
  protoOf(TextRange).hashCode = function () {
    return TextRange__hashCode_impl_3zpp6q(this.t5k_1);
  };
  protoOf(TextRange).equals = function (other) {
    return TextRange__equals_impl_hkkmea(this.t5k_1, other);
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
    TextStyle.call($this, spanStyle, paragraphStyle, createPlatformTextStyleInternal(spanStyle.t5n_1, paragraphStyle.e5i_1));
    return $this;
  }
  function TextStyle_init_$Create$_0(spanStyle, paragraphStyle) {
    return TextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $this) {
    color = color === VOID ? Companion_getInstance().f4r_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().s4o_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().s4o_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().f4r_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? Companion_getInstance_42().z5l_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_44().m5l_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().s4o_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_54().d5m_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_37().g5m_1 : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp = SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.r5r_1, drawStyle);
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.s5r_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, objectCreate(protoOf(TextStyle)));
  }
  function Companion_3() {
    Companion_instance_4 = this;
    this.t5r_1 = TextStyle_init_$Create$_1();
  }
  var Companion_instance_4;
  function Companion_getInstance_17() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function TextStyle(spanStyle, paragraphStyle, platformStyle) {
    Companion_getInstance_17();
    platformStyle = platformStyle === VOID ? null : platformStyle;
    this.n5l_1 = spanStyle;
    this.o5l_1 = paragraphStyle;
    this.p5l_1 = platformStyle;
  }
  protoOf(TextStyle).u5r = function () {
    return this.n5l_1;
  };
  protoOf(TextStyle).q5l = function () {
    return this.o5l_1;
  };
  protoOf(TextStyle).v5r = function (other) {
    if (other == null || equals(other, Companion_getInstance_17().t5r_1))
      return this;
    return TextStyle_init_$Create$_0(this.u5r().x5o(other.u5r()), this.q5l().j5i(other.q5l()));
  };
  protoOf(TextStyle).w5r = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion) {
    var mergedSpanStyle = fastMerge_0(this.n5l_1, color, null, NaN, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.r5r_1, drawStyle);
    var mergedParagraphStyle = fastMerge(this.o5l_1, textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.s5r_1, lineHeightStyle, lineBreak, hyphens, textMotion);
    if (this.n5l_1 === mergedSpanStyle && this.o5l_1 === mergedParagraphStyle)
      return this;
    return TextStyle_init_$Create$_0(mergedSpanStyle, mergedParagraphStyle);
  };
  protoOf(TextStyle).x5r = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion, $super) {
    color = color === VOID ? Companion_getInstance().f4r_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().s4o_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().s4o_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().f4r_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? Companion_getInstance_42().z5l_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_44().m5l_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().s4o_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_54().d5m_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_37().g5m_1 : hyphens;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.w5r(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion);
    } else {
      var tmp_0 = $super.w5r;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), platformStyle, textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).r5l = function (other) {
    return TextStyle_init_$Create$_0(this.u5r(), this.q5l().j5i(other));
  };
  protoOf(TextStyle).y5r = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp;
    if (equals(color, this.n5l_1.g4r())) {
      tmp = this.n5l_1.f5n_1;
    } else {
      tmp = Companion_instance_32.u5o(color);
    }
    var tmp_0 = tmp;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.r5r_1, drawStyle);
    return new TextStyle(tmp_1, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.s5r_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).z5r = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    color = color === VOID ? this.n5l_1.g4r() : color;
    fontSize = fontSize === VOID ? this.n5l_1.g5n_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.n5l_1.h5n_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.n5l_1.i5n_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.n5l_1.j5n_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.n5l_1.k5n_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.n5l_1.l5n_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.n5l_1.m5n_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.n5l_1.n5n_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.n5l_1.o5n_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.n5l_1.p5n_1 : localeList;
    background = background === VOID ? this.n5l_1.q5n_1 : background;
    textDecoration = textDecoration === VOID ? this.n5l_1.r5n_1 : textDecoration;
    shadow = shadow === VOID ? this.n5l_1.s5n_1 : shadow;
    drawStyle = drawStyle === VOID ? this.n5l_1.u5n_1 : drawStyle;
    textAlign = textAlign === VOID ? this.o5l_1.a5i_1 : textAlign;
    textDirection = textDirection === VOID ? this.o5l_1.b5i_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.o5l_1.c5i_1 : lineHeight;
    textIndent = textIndent === VOID ? this.o5l_1.d5i_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.p5l_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.o5l_1.f5i_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.o5l_1.g5i_1 : lineBreak;
    hyphens = hyphens === VOID ? this.o5l_1.h5i_1 : hyphens;
    textMotion = textMotion === VOID ? this.o5l_1.i5i_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.y5r(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.y5r;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).a5s = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp = SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.r5r_1, drawStyle);
    return new TextStyle(tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.s5r_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).b5s = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    alpha = alpha === VOID ? this.n5l_1.e4l() : alpha;
    fontSize = fontSize === VOID ? this.n5l_1.g5n_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.n5l_1.h5n_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.n5l_1.i5n_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.n5l_1.j5n_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.n5l_1.k5n_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.n5l_1.l5n_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.n5l_1.m5n_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.n5l_1.n5n_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.n5l_1.o5n_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.n5l_1.p5n_1 : localeList;
    background = background === VOID ? this.n5l_1.q5n_1 : background;
    textDecoration = textDecoration === VOID ? this.n5l_1.r5n_1 : textDecoration;
    shadow = shadow === VOID ? this.n5l_1.s5n_1 : shadow;
    drawStyle = drawStyle === VOID ? this.n5l_1.u5n_1 : drawStyle;
    textAlign = textAlign === VOID ? this.o5l_1.a5i_1 : textAlign;
    textDirection = textDirection === VOID ? this.o5l_1.b5i_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.o5l_1.c5i_1 : lineHeight;
    textIndent = textIndent === VOID ? this.o5l_1.d5i_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.p5l_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.o5l_1.f5i_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.o5l_1.g5i_1 : lineBreak;
    hyphens = hyphens === VOID ? this.o5l_1.h5i_1 : hyphens;
    textMotion = textMotion === VOID ? this.o5l_1.i5i_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.a5s(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.a5s;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, brush, alpha, new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).w5o = function () {
    return this.n5l_1.w5o();
  };
  protoOf(TextStyle).g4r = function () {
    return this.n5l_1.g4r();
  };
  protoOf(TextStyle).e4l = function () {
    return this.n5l_1.e4l();
  };
  protoOf(TextStyle).c5s = function () {
    return this.n5l_1.g5n_1;
  };
  protoOf(TextStyle).d5s = function () {
    return this.n5l_1.h5n_1;
  };
  protoOf(TextStyle).e5s = function () {
    return this.n5l_1.i5n_1;
  };
  protoOf(TextStyle).f5s = function () {
    return this.n5l_1.j5n_1;
  };
  protoOf(TextStyle).g5s = function () {
    return this.n5l_1.k5n_1;
  };
  protoOf(TextStyle).h5s = function () {
    return this.n5l_1.l5n_1;
  };
  protoOf(TextStyle).i5s = function () {
    return this.n5l_1.m5n_1;
  };
  protoOf(TextStyle).j5s = function () {
    return this.n5l_1.n5n_1;
  };
  protoOf(TextStyle).k5s = function () {
    return this.n5l_1.o5n_1;
  };
  protoOf(TextStyle).l5s = function () {
    return this.n5l_1.p5n_1;
  };
  protoOf(TextStyle).m5s = function () {
    return this.n5l_1.q5n_1;
  };
  protoOf(TextStyle).n5s = function () {
    return this.n5l_1.r5n_1;
  };
  protoOf(TextStyle).o5s = function () {
    return this.n5l_1.s5n_1;
  };
  protoOf(TextStyle).p5s = function () {
    return this.n5l_1.u5n_1;
  };
  protoOf(TextStyle).q5s = function () {
    return this.o5l_1.a5i_1;
  };
  protoOf(TextStyle).r5s = function () {
    return this.o5l_1.b5i_1;
  };
  protoOf(TextStyle).s5s = function () {
    return this.o5l_1.c5i_1;
  };
  protoOf(TextStyle).t5s = function () {
    return this.o5l_1.d5i_1;
  };
  protoOf(TextStyle).u5s = function () {
    return this.o5l_1.f5i_1;
  };
  protoOf(TextStyle).v5s = function () {
    return this.o5l_1.h5i_1;
  };
  protoOf(TextStyle).w5s = function () {
    return this.o5l_1.g5i_1;
  };
  protoOf(TextStyle).x5s = function () {
    return this.o5l_1.i5i_1;
  };
  protoOf(TextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStyle))
      return false;
    if (!this.n5l_1.equals(other.n5l_1))
      return false;
    if (!this.o5l_1.equals(other.o5l_1))
      return false;
    if (!equals(this.p5l_1, other.p5l_1))
      return false;
    return true;
  };
  protoOf(TextStyle).y5s = function (other) {
    return this === other || (this.o5l_1.equals(other.o5l_1) && this.n5l_1.a5p(other.n5l_1));
  };
  protoOf(TextStyle).z5s = function (other) {
    return this === other || this.n5l_1.b5p(other.n5l_1);
  };
  protoOf(TextStyle).hashCode = function () {
    var result = this.n5l_1.hashCode();
    result = imul(31, result) + this.o5l_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.p5l_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextStyle).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    this_0.u7('TextStyle(');
    this_0.u7('color=' + Color__toString_impl_hpzmaq(this.g4r()) + ', ');
    this_0.u7('brush=' + toString(this.w5o()) + ', ');
    this_0.u7('alpha=' + this.e4l() + ', ');
    this_0.u7('fontSize=' + TextUnit__toString_impl_51ghw0(this.c5s()) + ', ');
    this_0.u7('fontWeight=' + toString(this.d5s()) + ', ');
    var tmp = this.e5s();
    this_0.u7('fontStyle=' + toString(tmp == null ? null : new FontStyle(tmp)) + ', ');
    var tmp_0 = this.f5s();
    this_0.u7('fontSynthesis=' + toString(tmp_0 == null ? null : new FontSynthesis(tmp_0)) + ', ');
    this_0.u7('fontFamily=' + toString(this.g5s()) + ', ');
    this_0.u7('fontFeatureSettings=' + this.h5s() + ', ');
    this_0.u7('letterSpacing=' + TextUnit__toString_impl_51ghw0(this.i5s()) + ', ');
    var tmp_1 = this.j5s();
    this_0.u7('baselineShift=' + toString(tmp_1 == null ? null : new BaselineShift(tmp_1)) + ', ');
    this_0.u7('textGeometricTransform=' + toString(this.k5s()) + ', ');
    this_0.u7('localeList=' + toString(this.l5s()) + ', ');
    this_0.u7('background=' + Color__toString_impl_hpzmaq(this.m5s()) + ', ');
    this_0.u7('textDecoration=' + toString(this.n5s()) + ', ');
    this_0.u7('shadow=' + toString(this.o5s()) + ', ');
    this_0.u7('drawStyle=' + toString(this.p5s()) + ', ');
    this_0.u7('textAlign=' + TextAlign__toString_impl_6ha6d3(this.q5s()) + ', ');
    this_0.u7('textDirection=' + TextDirection__toString_impl_x3uh9t(this.r5s()) + ', ');
    this_0.u7('lineHeight=' + TextUnit__toString_impl_51ghw0(this.s5s()) + ', ');
    this_0.u7('textIndent=' + toString(this.t5s()) + ', ');
    this_0.u7('platformStyle=' + toString(this.p5l_1) + ', ');
    this_0.u7('lineHeightStyle=' + toString(this.u5s()) + ', ');
    this_0.u7('lineBreak=' + LineBreak__toString_impl_mphhli(this.w5s()) + ', ');
    this_0.u7('hyphens=' + Hyphens__toString_impl_ck1wg0(this.v5s()) + ', ');
    this_0.u7('textMotion=' + toString(this.x5s()));
    this_0.u7(')');
    return this_0.toString();
  };
  function lerp_6(start, stop, fraction) {
    return TextStyle_init_$Create$_0(lerp_5(start.u5r(), stop.u5r(), fraction), lerp_4(start.q5l(), stop.q5l(), fraction));
  }
  function resolveDefaults(style, direction) {
    return new TextStyle(resolveSpanStyleDefaults(style.n5l_1), resolveParagraphStyleDefaults(style.o5l_1, direction), style.p5l_1);
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
    if (textDirection === Companion_getInstance_44().j5l_1) {
      var tmp_0;
      switch (layoutDirection.m2_1) {
        case 0:
          tmp_0 = Companion_getInstance_44().k5l_1;
          break;
        case 1:
          tmp_0 = Companion_getInstance_44().l5l_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    } else if (textDirection === Companion_getInstance_44().m5l_1) {
      var tmp_1;
      switch (layoutDirection.m2_1) {
        case 0:
          tmp_1 = Companion_getInstance_44().h5l_1;
          break;
        case 1:
          tmp_1 = Companion_getInstance_44().i5l_1;
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
    this.d5n_1 = verbatim;
  }
  protoOf(VerbatimTtsAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerbatimTtsAnnotation))
      return false;
    if (!(this.d5n_1 === other.d5n_1))
      return false;
    return true;
  };
  protoOf(VerbatimTtsAnnotation).hashCode = function () {
    return getStringHashCode(this.d5n_1);
  };
  protoOf(VerbatimTtsAnnotation).toString = function () {
    return 'VerbatimTtsAnnotation(verbatim=' + this.d5n_1 + ')';
  };
  var androidx_compose_ui_text_UrlAnnotation$stable;
  function UrlAnnotation(url) {
    this.e5n_1 = url;
  }
  protoOf(UrlAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UrlAnnotation))
      return false;
    if (!(this.e5n_1 === other.e5n_1))
      return false;
    return true;
  };
  protoOf(UrlAnnotation).hashCode = function () {
    return getStringHashCode(this.e5n_1);
  };
  protoOf(UrlAnnotation).toString = function () {
    return 'UrlAnnotation(url=' + this.e5n_1 + ')';
  };
  var androidx_compose_ui_text_font_ResourceFont$stable;
  function Font() {
  }
  var androidx_compose_ui_text_font_FontFamily$stable;
  var androidx_compose_ui_text_font_FileBasedFontFamily$stable;
  var androidx_compose_ui_text_font_SystemFontFamily$stable;
  var androidx_compose_ui_text_font_FontListFontFamily$stable;
  var androidx_compose_ui_text_font_GenericFontFamily$stable;
  var androidx_compose_ui_text_font_DefaultFontFamily$stable;
  var androidx_compose_ui_text_font_LoadedFontFamily$stable;
  function GenericFontFamily(name, fontFamilyName) {
    SystemFontFamily.call(this);
    this.g5t_1 = name;
    this.h5t_1 = fontFamilyName;
  }
  protoOf(GenericFontFamily).toString = function () {
    return this.h5t_1;
  };
  function Companion_4() {
    Companion_instance_5 = this;
    this.g5q_1 = new DefaultFontFamily();
    this.h5q_1 = new GenericFontFamily('sans-serif', 'FontFamily.SansSerif');
    this.i5q_1 = new GenericFontFamily('serif', 'FontFamily.Serif');
    this.j5q_1 = new GenericFontFamily('monospace', 'FontFamily.Monospace');
    this.k5q_1 = new GenericFontFamily('cursive', 'FontFamily.Cursive');
  }
  var Companion_instance_5;
  function Companion_getInstance_18() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function FontFamily(canLoadSynchronously) {
    Companion_getInstance_18();
    this.i5t_1 = canLoadSynchronously;
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
  function FontListFontFamily() {
  }
  protoOf(FontListFontFamily).toString = function () {
    return 'FontListFontFamily(fonts=' + toString_0(this.k5t_1) + ')';
  };
  function FileBasedFontFamily() {
  }
  function LoadedFontFamily() {
  }
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
  function TypefaceRequestCache$runCached$lambda(this$0, $typefaceRequest) {
    return function (finalResult) {
      // Inline function 'androidx.compose.ui.text.platform.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.l5t_1;
      if (finalResult.n5t()) {
        this$0.m5t_1.vl($typefaceRequest, finalResult);
      } else {
        this$0.m5t_1.zl($typefaceRequest);
      }
      return Unit_instance;
    };
  }
  function TypefaceRequestCache() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.text.platform.makeSynchronizedObject' call
    tmp.l5t_1 = new SynchronizedObject();
    this.m5t_1 = new LruCache(16);
  }
  protoOf(TypefaceRequestCache).o5t = function (typefaceRequest, resolveTypeface) {
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.l5t_1;
    var tmp0_safe_receiver = this.m5t_1.sl(typefaceRequest);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_0;
      if (tmp0_safe_receiver.n5t()) {
        return tmp0_safe_receiver;
      } else {
        tmp_0 = this.m5t_1.zl(typefaceRequest);
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
    this.l5t_1;
    if (this.m5t_1.sl(typefaceRequest) == null && currentTypefaceResult.n5t()) {
      this.m5t_1.vl(typefaceRequest, currentTypefaceResult);
    }
    return currentTypefaceResult;
  };
  function TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    this.p5t_1 = fontFamily;
    this.q5t_1 = fontWeight;
    this.r5t_1 = fontStyle;
    this.s5t_1 = fontSynthesis;
    this.t5t_1 = resourceLoaderCacheKey;
  }
  protoOf(TypefaceRequest).u5t = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    return new TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).v5t = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey, $super) {
    fontFamily = fontFamily === VOID ? this.p5t_1 : fontFamily;
    fontWeight = fontWeight === VOID ? this.q5t_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.r5t_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.s5t_1 : fontSynthesis;
    resourceLoaderCacheKey = resourceLoaderCacheKey === VOID ? this.t5t_1 : resourceLoaderCacheKey;
    return $super === VOID ? this.u5t(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) : $super.u5t.call(this, fontFamily, fontWeight, new FontStyle(fontStyle), new FontSynthesis(fontSynthesis), resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).toString = function () {
    return 'TypefaceRequest(fontFamily=' + toString(this.p5t_1) + ', fontWeight=' + this.q5t_1.toString() + ', fontStyle=' + FontStyle__toString_impl_thncxr(this.r5t_1) + ', fontSynthesis=' + FontSynthesis__toString_impl_gunvr0(this.s5t_1) + ', resourceLoaderCacheKey=' + toString(this.t5t_1) + ')';
  };
  protoOf(TypefaceRequest).hashCode = function () {
    var result = this.p5t_1 == null ? 0 : hashCode(this.p5t_1);
    result = imul(result, 31) + this.q5t_1.hashCode() | 0;
    result = imul(result, 31) + FontStyle__hashCode_impl_7qhg4w(this.r5t_1) | 0;
    result = imul(result, 31) + FontSynthesis__hashCode_impl_4wi11v(this.s5t_1) | 0;
    result = imul(result, 31) + (this.t5t_1 == null ? 0 : hashCode(this.t5t_1)) | 0;
    return result;
  };
  protoOf(TypefaceRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypefaceRequest))
      return false;
    var tmp0_other_with_cast = other instanceof TypefaceRequest ? other : THROW_CCE();
    if (!equals(this.p5t_1, tmp0_other_with_cast.p5t_1))
      return false;
    if (!this.q5t_1.equals(tmp0_other_with_cast.q5t_1))
      return false;
    if (!(this.r5t_1 === tmp0_other_with_cast.r5t_1))
      return false;
    if (!(this.s5t_1 === tmp0_other_with_cast.s5t_1))
      return false;
    if (!equals(this.t5t_1, tmp0_other_with_cast.t5t_1))
      return false;
    return true;
  };
  function Immutable(value, cacheable) {
    cacheable = cacheable === VOID ? true : cacheable;
    this.w5t_1 = value;
    this.x5t_1 = cacheable;
  }
  protoOf(Immutable).v1 = function () {
    return this.w5t_1;
  };
  protoOf(Immutable).n5t = function () {
    return this.x5t_1;
  };
  function Async(current) {
    this.y5t_1 = current;
  }
  protoOf(Async).n5t = function () {
    return this.y5t_1.f5u_1;
  };
  protoOf(Async).v1 = function () {
    return this.y5t_1.v1();
  };
  function resolve($this, typefaceRequest) {
    var result = $this.i5u_1.o5t(typefaceRequest, FontFamilyResolverImpl$resolve$lambda($this, typefaceRequest));
    return result;
  }
  function FontFamilyResolverImpl$createDefaultTypeface$lambda(this$0) {
    return function (it) {
      return resolve(this$0, it.v5t(null)).v1();
    };
  }
  function FontFamilyResolverImpl$resolve$lambda(this$0, $typefaceRequest) {
    return function (onAsyncCompletion) {
      var tmp0_elvis_lhs = this$0.j5u_1.o5u($typefaceRequest, this$0.g5u_1, onAsyncCompletion, this$0.l5u_1);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.k5u_1.o5u($typefaceRequest, this$0.g5u_1, onAsyncCompletion, this$0.l5u_1) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$_0('Could not load font');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function FontFamilyResolverImpl(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter) {
    platformResolveInterceptor = platformResolveInterceptor === VOID ? Companion_getInstance_19().p5u_1 : platformResolveInterceptor;
    typefaceRequestCache = typefaceRequestCache === VOID ? get_GlobalTypefaceRequestCache() : typefaceRequestCache;
    fontListFontFamilyTypefaceAdapter = fontListFontFamilyTypefaceAdapter === VOID ? new FontListFontFamilyTypefaceAdapter(get_GlobalAsyncTypefaceCache()) : fontListFontFamilyTypefaceAdapter;
    platformFamilyTypefaceAdapter = platformFamilyTypefaceAdapter === VOID ? new PlatformFontFamilyTypefaceAdapter() : platformFamilyTypefaceAdapter;
    this.g5u_1 = platformFontLoader;
    this.h5u_1 = platformResolveInterceptor;
    this.i5u_1 = typefaceRequestCache;
    this.j5u_1 = fontListFontFamilyTypefaceAdapter;
    this.k5u_1 = platformFamilyTypefaceAdapter;
    var tmp = this;
    tmp.l5u_1 = FontFamilyResolverImpl$createDefaultTypeface$lambda(this);
  }
  protoOf(FontFamilyResolverImpl).q5u = function (fontFamily, fontWeight, fontStyle, fontSynthesis) {
    return resolve(this, new TypefaceRequest(this.h5u_1.r5u(fontFamily), this.h5u_1.s5u(fontWeight), this.h5u_1.t5u(fontStyle), this.h5u_1.u5u(fontSynthesis), this.g5u_1.v5u()));
  };
  function PlatformResolveInterceptor$Companion$Default$1() {
  }
  function Companion_5() {
    Companion_instance_6 = this;
    var tmp = this;
    tmp.p5u_1 = new PlatformResolveInterceptor$Companion$Default$1();
  }
  var Companion_instance_6;
  function Companion_getInstance_19() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
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
    var tmp0_other_with_cast = other instanceof AsyncTypefaceResult ? other.w5u_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function AsyncTypefaceResult(result) {
    this.w5u_1 = result;
  }
  protoOf(AsyncTypefaceResult).toString = function () {
    return AsyncTypefaceResult__toString_impl_imltdd(this.w5u_1);
  };
  protoOf(AsyncTypefaceResult).hashCode = function () {
    return AsyncTypefaceResult__hashCode_impl_34k3fi(this.w5u_1);
  };
  protoOf(AsyncTypefaceResult).equals = function (other) {
    return AsyncTypefaceResult__equals_impl_4qqxz2(this.w5u_1, other);
  };
  function Key(font, loaderKey) {
    this.x5u_1 = font;
    this.y5u_1 = loaderKey;
  }
  protoOf(Key).toString = function () {
    return 'Key(font=' + toString_0(this.x5u_1) + ', loaderKey=' + toString(this.y5u_1) + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = hashCode(this.x5u_1);
    result = imul(result, 31) + (this.y5u_1 == null ? 0 : hashCode(this.y5u_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!equals(this.x5u_1, tmp0_other_with_cast.x5u_1))
      return false;
    if (!equals(this.y5u_1, tmp0_other_with_cast.y5u_1))
      return false;
    return true;
  };
  function access$_get_resultCache__u960s4($this) {
    return $this.a5v_1;
  }
  function access$_get_permanentCache__bpfryv($this) {
    return $this.b5v_1;
  }
  function access$_get_cacheLock__y7hpng($this) {
    return $this.c5v_1;
  }
  function $runCachedCOROUTINE$(_this__u8e3s4, font, platformFontLoader, forever, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l5v_1 = _this__u8e3s4;
    this.m5v_1 = font;
    this.n5v_1 = platformFontLoader;
    this.o5v_1 = forever;
    this.p5v_1 = block;
  }
  protoOf($runCachedCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.q5v_1 = new Key(this.m5v_1, this.n5v_1.v5u());
            this.l5v_1.c5v_1;
            var tmp0_elvis_lhs = this.l5v_1.a5v_1.sl(this.q5v_1);
            var priorResult = tmp0_elvis_lhs == null ? this.l5v_1.b5v_1.y1(this.q5v_1) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              return _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.w5u_1);
            }

            this.n8_1 = 1;
            suspendResult = this.p5v_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = suspendResult;
            this.l5v_1.c5v_1;
            if (this_0 == null) {
              this.l5v_1.b5v_1.iq(this.q5v_1, new AsyncTypefaceResult(this.l5v_1.z5u_1));
            } else if (this.o5v_1) {
              this.l5v_1.b5v_1.iq(this.q5v_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            } else {
              this.l5v_1.a5v_1.vl(this.q5v_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            }

            return this_0;
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
  function AsyncTypefaceCache() {
    this.z5u_1 = _AsyncTypefaceResult___init__impl__h4msax(null);
    this.a5v_1 = new LruCache(16);
    this.b5v_1 = mutableScatterMapOf();
    var tmp = this;
    // Inline function 'androidx.compose.ui.text.platform.makeSynchronizedObject' call
    tmp.c5v_1 = new SynchronizedObject();
  }
  protoOf(AsyncTypefaceCache).r5v = function (font, platformFontLoader, result, forever) {
    var key = new Key(font, platformFontLoader.v5u());
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.c5v_1;
    var tmp;
    if (result == null) {
      this.b5v_1.iq(key, new AsyncTypefaceResult(this.z5u_1));
      tmp = Unit_instance;
    } else if (forever) {
      this.b5v_1.iq(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
      tmp = Unit_instance;
    } else {
      tmp = this.a5v_1.vl(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    }
  };
  protoOf(AsyncTypefaceCache).s5v = function (font, platformFontLoader, result, forever, $super) {
    forever = forever === VOID ? false : forever;
    var tmp;
    if ($super === VOID) {
      this.r5v(font, platformFontLoader, result, forever);
      tmp = Unit_instance;
    } else {
      tmp = $super.r5v.call(this, font, platformFontLoader, result, forever);
    }
    return tmp;
  };
  protoOf(AsyncTypefaceCache).t5v = function (font, platformFontLoader) {
    var key = new Key(font, platformFontLoader.v5u());
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.c5v_1;
    var tmp0_elvis_lhs = this.a5v_1.sl(key);
    return tmp0_elvis_lhs == null ? this.b5v_1.y1(key) : tmp0_elvis_lhs;
  };
  protoOf(AsyncTypefaceCache).u5v = function (font, platformFontLoader, forever, block, $completion) {
    var tmp = new $runCachedCOROUTINE$(this, font, platformFontLoader, forever, block, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  function _set_value__lx0xdg($this, _set____db54di) {
    var tmp0 = $this.e5u_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AsyncFontListLoader$_get_value_$ref_okp6ex_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AsyncFontListLoader$_set_value_$ref_h5kf5n_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  }
  function AsyncFontListLoader$_get_value_$ref_okp6ex() {
    return function (p0) {
      return p0.v1();
    };
  }
  function AsyncFontListLoader$_set_value_$ref_h5kf5n() {
    return function (p0, p1) {
      _set_value__lx0xdg(p0, p1);
      return Unit_instance;
    };
  }
  function AsyncFontListLoader$_get_value_$ref_okp6ex_0() {
    return function (p0) {
      return p0.v1();
    };
  }
  function AsyncFontListLoader$_set_value_$ref_h5kf5n_0() {
    return function (p0, p1) {
      _set_value__lx0xdg(p0, p1);
      return Unit_instance;
    };
  }
  function AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation) {
    this.d5w_1 = this$0;
    this.e5w_1 = $font;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$load$slambda).f5w = function ($completion) {
    var tmp = this.n1s($completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(AsyncFontListLoader$load$slambda).o1s = function ($completion) {
    return this.f5w($completion);
  };
  protoOf(AsyncFontListLoader$load$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.d5w_1.g5w(this.e5w_1, this);
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
  protoOf(AsyncFontListLoader$load$slambda).n1s = function (completion) {
    return new AsyncFontListLoader$load$slambda(this.d5w_1, this.e5w_1, completion);
  };
  function AsyncFontListLoader$load$slambda_0(this$0, $font, resultContinuation) {
    var i = new AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation);
    var l = function ($completion) {
      return i.f5w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    this.p5w_1 = this$0;
    this.q5w_1 = $this_loadWithTimeoutOrNull;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).s5w = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.r1n($this$withTimeoutOrNull, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).f9 = function (p1, $completion) {
    return this.s5w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.p5w_1.d5u_1.t5w(this.q5w_1, this);
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
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).r1n = function ($this$withTimeoutOrNull, completion) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this.p5w_1, this.q5w_1, completion);
    i.r5w_1 = $this$withTimeoutOrNull;
    return i;
  };
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.s5w($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $loadCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c5x_1 = _this__u8e3s4;
  }
  protoOf($loadCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 12;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.n8_1 = 2;
            continue $sm;
          case 2:
            this.o8_1 = 11;
            this.e5x_1 = this.c5x_1.z5t_1;
            this.f5x_1 = get_indices(this.e5x_1).i();
            this.n8_1 = 3;
            continue $sm;
          case 3:
            if (!this.f5x_1.j()) {
              this.n8_1 = 9;
              continue $sm;
            }

            var index = this.f5x_1.k();
            var item = this.e5x_1.m(index);
            this.d5x_1 = item;
            if (this.d5x_1.b5t() === Companion_getInstance_21().e5t_1) {
              this.n8_1 = 4;
              suspendResult = this.c5x_1.b5u_1.u5v(this.d5x_1, this.c5x_1.d5u_1, false, AsyncFontListLoader$load$slambda_0(this.c5x_1, this.d5x_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 7;
              continue $sm;
            }

          case 4:
            var typeface = suspendResult;
            if (!(typeface == null)) {
              _set_value__lx0xdg(this.c5x_1, synthesizeTypeface(this.c5x_1.a5u_1.s5t_1, typeface, this.d5x_1, this.c5x_1.a5u_1.q5t_1, this.c5x_1.a5u_1.r5t_1));
              this.o8_1 = 12;
              this.n8_1 = 8;
              continue $sm;
            } else {
              this.n8_1 = 5;
              suspendResult = yield_0(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            this.n8_1 = 6;
            continue $sm;
          case 6:
            this.n8_1 = 7;
            continue $sm;
          case 7:
            this.n8_1 = 3;
            continue $sm;
          case 8:
            this.o8_1 = 12;
            var shouldCache = get_isActive(this.t8());
            this.c5x_1.f5u_1 = false;
            this.c5x_1.c5u_1(new Immutable(this.c5x_1.v1(), shouldCache));
            return Unit_instance;
          case 9:
            this.o8_1 = 12;
            this.n8_1 = 10;
            continue $sm;
          case 10:
            this.o8_1 = 12;
            var shouldCache_0 = get_isActive(this.t8());
            this.c5x_1.f5u_1 = false;
            this.c5x_1.c5u_1(new Immutable(this.c5x_1.v1(), shouldCache_0));
            return Unit_instance;
          case 11:
            this.o8_1 = 12;
            var t = this.q8_1;
            var shouldCache_1 = get_isActive(this.t8());
            this.c5x_1.f5u_1 = false;
            this.c5x_1.c5u_1(new Immutable(this.c5x_1.v1(), shouldCache_1));
            throw t;
          case 12:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 12) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function $loadWithTimeoutOrNullCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o5x_1 = _this__u8e3s4;
    this.p5x_1 = _this__u8e3s4_0;
  }
  protoOf($loadWithTimeoutOrNullCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            this.o8_1 = 2;
            this.n8_1 = 1;
            var tmp_0 = new Long(15000, 0);
            suspendResult = withTimeoutOrNull(tmp_0, AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this.o5x_1, this.p5x_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.q5x_1 = suspendResult;
            this.o8_1 = 3;
            this.n8_1 = 4;
            continue $sm;
          case 2:
            this.o8_1 = 3;
            var tmp_1 = this.q8_1;
            if (tmp_1 instanceof CancellationException) {
              var cancel = this.q8_1;
              var tmp_2 = this;
              var tmp_3;
              if (get_isActive(this.t8())) {
                tmp_3 = null;
              } else {
                throw cancel;
              }
              tmp_2.q5x_1 = tmp_3;
              this.n8_1 = 4;
              continue $sm;
            } else {
              var tmp_4 = this.q8_1;
              if (tmp_4 instanceof Exception) {
                var uncaughtFontLoadException = this.q8_1;
                var tmp_5 = this;
                var tmp0_safe_receiver = this.t8().a9(Key_instance);
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.m12(this.t8(), IllegalStateException_init_$Create$('Unable to load font ' + toString_0(this.p5x_1), uncaughtFontLoadException));
                }
                tmp_5.q5x_1 = null;
                this.n8_1 = 4;
                continue $sm;
              } else {
                throw this.q8_1;
              }
            }

          case 3:
            throw this.q8_1;
          case 4:
            this.o8_1 = 3;
            return this.q5x_1;
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
  function AsyncFontListLoader(fontList, initialType, typefaceRequest, asyncTypefaceCache, onCompletion, platformFontLoader) {
    this.z5t_1 = fontList;
    this.a5u_1 = typefaceRequest;
    this.b5u_1 = asyncTypefaceCache;
    this.c5u_1 = onCompletion;
    this.d5u_1 = platformFontLoader;
    this.e5u_1 = mutableStateOf(initialType);
    this.f5u_1 = true;
  }
  protoOf(AsyncFontListLoader).v1 = function () {
    var tmp0 = this.e5u_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AsyncFontListLoader$_get_value_$ref_okp6ex();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AsyncFontListLoader$_set_value_$ref_h5kf5n());
    return tmp0.v1();
  };
  protoOf(AsyncFontListLoader).r5x = function ($completion) {
    var tmp = new $loadCOROUTINE$(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(AsyncFontListLoader).g5w = function (_this__u8e3s4, $completion) {
    var tmp = new $loadWithTimeoutOrNullCOROUTINE$(this, _this__u8e3s4, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  function FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1() {
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1).m12 = function (context, exception) {
    return Unit_instance;
  };
  function Companion_6() {
    Companion_instance_7 = this;
    this.t5x_1 = new FontMatcher();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp.u5x_1 = new FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1();
  }
  var Companion_instance_7;
  function Companion_getInstance_20() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation) {
    this.d5y_1 = $asyncLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.d5y_1.r5x(this);
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
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).r1n = function ($this$launch, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda(this.d5y_1, completion);
    i.e5y_1 = $this$launch;
    return i;
  };
  function FontListFontFamilyTypefaceAdapter$resolve$slambda_0($asyncLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter(asyncTypefaceCache, injectedContext) {
    Companion_getInstance_20();
    asyncTypefaceCache = asyncTypefaceCache === VOID ? new AsyncTypefaceCache() : asyncTypefaceCache;
    injectedContext = injectedContext === VOID ? EmptyCoroutineContext_getInstance() : injectedContext;
    this.m5u_1 = asyncTypefaceCache;
    this.n5u_1 = CoroutineScope_0(Companion_getInstance_20().u5x_1.lf(get_FontCacheManagementDispatcher()).lf(injectedContext).lf(SupervisorJob(injectedContext.a9(Key_instance_0))));
  }
  protoOf(FontListFontFamilyTypefaceAdapter).o5u = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.p5t_1;
    if (!(tmp instanceof FontListFontFamily))
      return null;
    var matched = Companion_getInstance_20().t5x_1.f5y(typefaceRequest.p5t_1.k5t_1, typefaceRequest.q5t_1, typefaceRequest.r5t_1);
    var _destruct__k2r9zo = firstImmediatelyAvailable(matched, typefaceRequest, this.m5u_1, platformFontLoader, createDefaultTypeface);
    var asyncFontsToLoad = _destruct__k2r9zo.fe();
    var synthesizedTypeface = _destruct__k2r9zo.ge();
    if (asyncFontsToLoad == null)
      return new Immutable(synthesizedTypeface);
    var asyncLoader = new AsyncFontListLoader(asyncFontsToLoad, synthesizedTypeface, typefaceRequest, this.m5u_1, onAsyncCompletion, platformFontLoader);
    var tmp_0 = this.n5u_1;
    var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp_0, VOID, tmp_1, FontListFontFamilyTypefaceAdapter$resolve$slambda_0(asyncLoader, null));
    return new Async(asyncLoader);
  };
  function firstImmediatelyAvailable(_this__u8e3s4, typefaceRequest, asyncTypefaceCache, platformFontLoader, createDefaultTypeface) {
    var asyncFontsToLoad = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.l() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.m(idx);
        var tmp0_subject = font.b5t();
        if (tmp0_subject === Companion_getInstance_21().c5t_1) {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.platform.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            access$_get_cacheLock__y7hpng(asyncTypefaceCache);
            var key = new Key(font, platformFontLoader.v5u());
            var tmp0_elvis_lhs = access$_get_resultCache__u960s4(asyncTypefaceCache).sl(key);
            var priorResult = tmp0_elvis_lhs == null ? access$_get_permanentCache__bpfryv(asyncTypefaceCache).y1(key) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              tmp$ret$0 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.w5u_1);
              break $l$block;
            }
            var tmp;
            try {
              tmp = platformFontLoader.g5y(font);
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
            asyncTypefaceCache.s5v(font, platformFontLoader, this_0);
            tmp$ret$0 = this_0;
          }
          var tmp1_elvis_lhs = tmp$ret$0;
          var result = tmp1_elvis_lhs == null ? createDefaultTypeface(typefaceRequest) : tmp1_elvis_lhs;
          return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.s5t_1, result, font, typefaceRequest.q5t_1, typefaceRequest.r5t_1));
        } else if (tmp0_subject === Companion_getInstance_21().d5t_1) {
          var tmp$ret$7;
          $l$block_0: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.platform.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            access$_get_cacheLock__y7hpng(asyncTypefaceCache);
            var key_0 = new Key(font, platformFontLoader.v5u());
            var tmp0_elvis_lhs_0 = access$_get_resultCache__u960s4(asyncTypefaceCache).sl(key_0);
            var priorResult_0 = tmp0_elvis_lhs_0 == null ? access$_get_permanentCache__bpfryv(asyncTypefaceCache).y1(key_0) : tmp0_elvis_lhs_0;
            if (!(priorResult_0 == null)) {
              tmp$ret$7 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult_0.w5u_1);
              break $l$block_0;
            }
            // Inline function 'kotlin.runCatching' call
            var tmp_1;
            try {
              // Inline function 'kotlin.Companion.success' call
              var value = platformFontLoader.g5y(font);
              tmp_1 = _Result___init__impl__xyqfz8(value);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof Error) {
                var e = $p;
                // Inline function 'kotlin.Companion.failure' call
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
            asyncTypefaceCache.s5v(font, platformFontLoader, this_2);
            tmp$ret$7 = this_2;
          }
          var result_0 = tmp$ret$7;
          if (!(result_0 == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.s5t_1, result_0, font, typefaceRequest.q5t_1, typefaceRequest.r5t_1));
          }
        } else if (tmp0_subject === Companion_getInstance_21().e5t_1) {
          var cacheResult = asyncTypefaceCache.t5v(font, platformFontLoader);
          if (cacheResult == null) {
            if (asyncFontsToLoad == null) {
              asyncFontsToLoad = mutableListOf([font]);
            } else {
              asyncFontsToLoad.h(font);
            }
          } else if (_AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca(cacheResult.w5u_1)) {
            continue $l$loop;
          } else if (!(_AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.w5u_1) == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.s5t_1, _AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.w5u_1), font, typefaceRequest.q5t_1, typefaceRequest.r5t_1));
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
    return $this === Companion_getInstance_21().c5t_1 ? 'Blocking' : $this === Companion_getInstance_21().d5t_1 ? 'Optional' : $this === Companion_getInstance_21().e5t_1 ? 'Async' : 'Invalid(value=' + _FontLoadingStrategy___get_value__impl__ggsl83($this) + ')';
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.c5t_1 = _FontLoadingStrategy___init__impl__if1sp3(0);
    this.d5t_1 = _FontLoadingStrategy___init__impl__if1sp3(1);
    this.e5t_1 = _FontLoadingStrategy___init__impl__if1sp3(2);
  }
  var Companion_instance_8;
  function Companion_getInstance_21() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  var androidx_compose_ui_text_font_FontMatcher$stable;
  function FontMatcher() {
  }
  protoOf(FontMatcher).f5y = function (fontList, fontWeight, fontStyle) {
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    var target = ArrayList_init_$Create$_0(fontList.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = fontList.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = fontList.m(index);
        if (item.c42().equals(fontWeight) && item.a5t() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.h(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!target.n()) {
      return target;
    }
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    var target_0 = ArrayList_init_$Create$_0(fontList.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_0 = 0;
    var last_0 = fontList.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = fontList.m(index_0);
        if (item_0.a5t() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target_0.h(item_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (target_0.n()) {
      tmp = fontList;
    } else {
      tmp = target_0;
    }
    var fontsToSearch = tmp;
    var tmp_0;
    if (fontWeight.h5y(Companion_getInstance_24().i5p_1) < 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove = null;
      var bestWeightBelow = null;
      var inductionVariable_1 = 0;
      var last_1 = fontsToSearch.l() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        $l$loop_1: do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var font = fontsToSearch.m(index_1);
          var possibleWeight = font.c42();
          if (!(null == null) && possibleWeight.h5y(null) < 0) {
            continue $l$loop_1;
          }
          if (!(null == null) && possibleWeight.h5y(null) > 0) {
            continue $l$loop_1;
          }
          if (possibleWeight.h5y(fontWeight) < 0) {
            if (bestWeightBelow == null || possibleWeight.h5y(bestWeightBelow) > 0) {
              bestWeightBelow = possibleWeight;
            }
          } else if (possibleWeight.h5y(fontWeight) > 0) {
            if (bestWeightAbove == null || possibleWeight.h5y(bestWeightAbove) < 0) {
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
      var target_1 = ArrayList_init_$Create$_0(fontsToSearch.l());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_2 = 0;
      var last_2 = fontsToSearch.l() - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_1 = fontsToSearch.m(index_2);
          if (item_1.c42().equals(bestWeight)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_1.h(item_1);
          }
        }
         while (inductionVariable_2 <= last_2);
      tmp_0 = target_1;
    } else if (fontWeight.h5y(Companion_getInstance_24().j5p_1) > 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove_0 = null;
      var bestWeightBelow_0 = null;
      var inductionVariable_3 = 0;
      var last_3 = fontsToSearch.l() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        $l$loop_4: do {
          var index_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var font_0 = fontsToSearch.m(index_3);
          var possibleWeight_0 = font_0.c42();
          if (!(null == null) && possibleWeight_0.h5y(null) < 0) {
            continue $l$loop_4;
          }
          if (!(null == null) && possibleWeight_0.h5y(null) > 0) {
            continue $l$loop_4;
          }
          if (possibleWeight_0.h5y(fontWeight) < 0) {
            if (bestWeightBelow_0 == null || possibleWeight_0.h5y(bestWeightBelow_0) > 0) {
              bestWeightBelow_0 = possibleWeight_0;
            }
          } else if (possibleWeight_0.h5y(fontWeight) > 0) {
            if (bestWeightAbove_0 == null || possibleWeight_0.h5y(bestWeightAbove_0) < 0) {
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
      var target_2 = ArrayList_init_$Create$_0(fontsToSearch.l());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_4 = 0;
      var last_4 = fontsToSearch.l() - 1 | 0;
      if (inductionVariable_4 <= last_4)
        do {
          var index_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_2 = fontsToSearch.m(index_4);
          if (item_2.c42().equals(bestWeight_0)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_2.h(item_2);
          }
        }
         while (inductionVariable_4 <= last_4);
      tmp_0 = target_2;
    } else {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var maxSearchRange = Companion_getInstance_24().j5p_1;
      var bestWeightAbove_1 = null;
      var bestWeightBelow_1 = null;
      var inductionVariable_5 = 0;
      var last_5 = fontsToSearch.l() - 1 | 0;
      if (inductionVariable_5 <= last_5)
        $l$loop_7: do {
          var index_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var font_1 = fontsToSearch.m(index_5);
          var possibleWeight_1 = font_1.c42();
          if (!(null == null) && possibleWeight_1.h5y(null) < 0) {
            continue $l$loop_7;
          }
          if (!(maxSearchRange == null) && possibleWeight_1.h5y(maxSearchRange) > 0) {
            continue $l$loop_7;
          }
          if (possibleWeight_1.h5y(fontWeight) < 0) {
            if (bestWeightBelow_1 == null || possibleWeight_1.h5y(bestWeightBelow_1) > 0) {
              bestWeightBelow_1 = possibleWeight_1;
            }
          } else if (possibleWeight_1.h5y(fontWeight) > 0) {
            if (bestWeightAbove_1 == null || possibleWeight_1.h5y(bestWeightAbove_1) < 0) {
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
      var target_3 = ArrayList_init_$Create$_0(fontsToSearch.l());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_6 = 0;
      var last_6 = fontsToSearch.l() - 1 | 0;
      if (inductionVariable_6 <= last_6)
        do {
          var index_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var item_3 = fontsToSearch.m(index_6);
          if (item_3.c42().equals(bestWeight_1)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_3.h(item_3);
          }
        }
         while (inductionVariable_6 <= last_6);
      // Inline function 'kotlin.collections.ifEmpty' call
      var tmp_4;
      if (target_3.n()) {
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
        var minSearchRange = Companion_getInstance_24().j5p_1;
        var bestWeightAbove_2 = null;
        var bestWeightBelow_2 = null;
        var inductionVariable_7 = 0;
        var last_7 = fontsToSearch.l() - 1 | 0;
        if (inductionVariable_7 <= last_7)
          $l$loop_10: do {
            var index_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var font_2 = fontsToSearch.m(index_7);
            var possibleWeight_2 = font_2.c42();
            if (!(minSearchRange == null) && possibleWeight_2.h5y(minSearchRange) < 0) {
              continue $l$loop_10;
            }
            if (!(null == null) && possibleWeight_2.h5y(null) > 0) {
              continue $l$loop_10;
            }
            if (possibleWeight_2.h5y(fontWeight) < 0) {
              if (bestWeightBelow_2 == null || possibleWeight_2.h5y(bestWeightBelow_2) > 0) {
                bestWeightBelow_2 = possibleWeight_2;
              }
            } else if (possibleWeight_2.h5y(fontWeight) > 0) {
              if (bestWeightAbove_2 == null || possibleWeight_2.h5y(bestWeightAbove_2) < 0) {
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
        var target_4 = ArrayList_init_$Create$_0(fontsToSearch.l());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable_8 = 0;
        var last_8 = fontsToSearch.l() - 1 | 0;
        if (inductionVariable_8 <= last_8)
          do {
            var index_8 = inductionVariable_8;
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var item_4 = fontsToSearch.m(index_8);
            if (item_4.c42().equals(bestWeight_2)) {
              // Inline function 'kotlin.collections.plusAssign' call
              target_4.h(item_4);
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
  function _FontStyle___init__impl__jcnduf(value) {
    return value;
  }
  function FontStyle__toString_impl_thncxr($this) {
    return $this === Companion_getInstance_22().a5q_1 ? 'Normal' : $this === Companion_getInstance_22().b5q_1 ? 'Italic' : 'Invalid';
  }
  function Companion_8() {
    Companion_instance_9 = this;
    this.a5q_1 = _FontStyle___init__impl__jcnduf(0);
    this.b5q_1 = _FontStyle___init__impl__jcnduf(1);
  }
  var Companion_instance_9;
  function Companion_getInstance_22() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function FontStyle__hashCode_impl_7qhg4w($this) {
    return $this;
  }
  function FontStyle__equals_impl_2zal3g($this, other) {
    if (!(other instanceof FontStyle))
      return false;
    if (!($this === (other instanceof FontStyle ? other.v5n_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontStyle(value) {
    Companion_getInstance_22();
    this.v5n_1 = value;
  }
  protoOf(FontStyle).toString = function () {
    return FontStyle__toString_impl_thncxr(this.v5n_1);
  };
  protoOf(FontStyle).hashCode = function () {
    return FontStyle__hashCode_impl_7qhg4w(this.v5n_1);
  };
  protoOf(FontStyle).equals = function (other) {
    return FontStyle__equals_impl_2zal3g(this.v5n_1, other);
  };
  function _FontSynthesis___init__impl__n397bg(value) {
    return value;
  }
  function FontSynthesis__toString_impl_gunvr0($this) {
    return $this === Companion_getInstance_23().c5q_1 ? 'None' : $this === Companion_getInstance_23().d5q_1 ? 'Weight' : $this === Companion_getInstance_23().e5q_1 ? 'Style' : $this === Companion_getInstance_23().f5q_1 ? 'All' : 'Invalid';
  }
  function Companion_9() {
    Companion_instance_10 = this;
    this.c5q_1 = _FontSynthesis___init__impl__n397bg(0);
    this.d5q_1 = _FontSynthesis___init__impl__n397bg(1);
    this.e5q_1 = _FontSynthesis___init__impl__n397bg(2);
    this.f5q_1 = _FontSynthesis___init__impl__n397bg(65535);
  }
  var Companion_instance_10;
  function Companion_getInstance_23() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function FontSynthesis__hashCode_impl_4wi11v($this) {
    return $this;
  }
  function FontSynthesis__equals_impl_zgu9mf($this, other) {
    if (!(other instanceof FontSynthesis))
      return false;
    if (!($this === (other instanceof FontSynthesis ? other.w5n_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontSynthesis(value) {
    Companion_getInstance_23();
    this.w5n_1 = value;
  }
  protoOf(FontSynthesis).toString = function () {
    return FontSynthesis__toString_impl_gunvr0(this.w5n_1);
  };
  protoOf(FontSynthesis).hashCode = function () {
    return FontSynthesis__hashCode_impl_4wi11v(this.w5n_1);
  };
  protoOf(FontSynthesis).equals = function (other) {
    return FontSynthesis__equals_impl_zgu9mf(this.w5n_1, other);
  };
  var androidx_compose_ui_text_font_FontVariation_Settings$stable;
  var androidx_compose_ui_text_font_FontVariation$stable;
  var androidx_compose_ui_text_font_FontWeight$stable;
  function Companion_10() {
    Companion_instance_11 = this;
    this.f5p_1 = new FontWeight(100);
    this.g5p_1 = new FontWeight(200);
    this.h5p_1 = new FontWeight(300);
    this.i5p_1 = new FontWeight(400);
    this.j5p_1 = new FontWeight(500);
    this.k5p_1 = new FontWeight(600);
    this.l5p_1 = new FontWeight(700);
    this.m5p_1 = new FontWeight(800);
    this.n5p_1 = new FontWeight(900);
    this.o5p_1 = this.f5p_1;
    this.p5p_1 = this.g5p_1;
    this.q5p_1 = this.h5p_1;
    this.r5p_1 = this.i5p_1;
    this.s5p_1 = this.j5p_1;
    this.t5p_1 = this.k5p_1;
    this.u5p_1 = this.l5p_1;
    this.v5p_1 = this.m5p_1;
    this.w5p_1 = this.n5p_1;
    this.x5p_1 = listOf([this.f5p_1, this.g5p_1, this.h5p_1, this.i5p_1, this.j5p_1, this.k5p_1, this.l5p_1, this.m5p_1, this.n5p_1]);
  }
  var Companion_instance_11;
  function Companion_getInstance_24() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function FontWeight(weight) {
    Companion_getInstance_24();
    this.h5o_1 = weight;
    var containsArg = this.h5o_1;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(1 <= containsArg ? containsArg <= 1000 : false)) {
      var tmp$ret$0 = 'Font weight can be in range [1, 1000]. Current value: ' + this.h5o_1;
      throwIllegalArgumentException(tmp$ret$0);
    }
  }
  protoOf(FontWeight).h5y = function (other) {
    return compareTo(this.h5o_1, other.h5o_1);
  };
  protoOf(FontWeight).d = function (other) {
    return this.h5y(other instanceof FontWeight ? other : THROW_CCE());
  };
  protoOf(FontWeight).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontWeight))
      return false;
    if (!(this.h5o_1 === other.h5o_1))
      return false;
    return true;
  };
  protoOf(FontWeight).hashCode = function () {
    return this.h5o_1;
  };
  protoOf(FontWeight).toString = function () {
    return 'FontWeight(weight=' + this.h5o_1 + ')';
  };
  function lerp_7(start, stop, fraction) {
    var weight = coerceIn(lerp_2(start.h5o_1, stop.h5o_1, fraction), 1, 1000);
    return new FontWeight(weight);
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
  function FinishComposingTextCommand() {
  }
  protoOf(FinishComposingTextCommand).i5y = function (buffer) {
    buffer.o5y();
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
    CommitTextCommand.call($this, AnnotatedString_init_$Create$(text), newCursorPosition);
    return $this;
  }
  function CommitTextCommand_init_$Create$(text, newCursorPosition) {
    return CommitTextCommand_init_$Init$(text, newCursorPosition, objectCreate(protoOf(CommitTextCommand)));
  }
  function CommitTextCommand(annotatedString, newCursorPosition) {
    this.p5y_1 = annotatedString;
    this.q5y_1 = newCursorPosition;
  }
  protoOf(CommitTextCommand).r5y = function () {
    return this.p5y_1.p5h_1;
  };
  protoOf(CommitTextCommand).i5y = function (buffer) {
    if (buffer.t5y()) {
      buffer.s5y(buffer.m5y_1, buffer.n5y_1, this.r5y());
    } else {
      buffer.s5y(buffer.k5y_1, buffer.l5y_1, this.r5y());
    }
    var newCursor = buffer.u5y();
    var tmp;
    if (this.q5y_1 > 0) {
      tmp = (newCursor + this.q5y_1 | 0) - 1 | 0;
    } else {
      tmp = (newCursor + this.q5y_1 | 0) - this.r5y().length | 0;
    }
    var newCursorInBuffer = tmp;
    buffer.w5y(coerceIn(newCursorInBuffer, 0, buffer.v5y()));
  };
  protoOf(CommitTextCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CommitTextCommand))
      return false;
    if (!(this.r5y() === other.r5y()))
      return false;
    if (!(this.q5y_1 === other.q5y_1))
      return false;
    return true;
  };
  protoOf(CommitTextCommand).hashCode = function () {
    var result = getStringHashCode(this.r5y());
    result = imul(31, result) + this.q5y_1 | 0;
    return result;
  };
  protoOf(CommitTextCommand).toString = function () {
    return "CommitTextCommand(text='" + this.r5y() + "', newCursorPosition=" + this.q5y_1 + ')';
  };
  function DeleteSurroundingTextCommand(lengthBeforeCursor, lengthAfterCursor) {
    this.x5y_1 = lengthBeforeCursor;
    this.y5y_1 = lengthAfterCursor;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(this.x5y_1 >= 0 && this.y5y_1 >= 0)) {
      var tmp$ret$0 = 'Expected lengthBeforeCursor and lengthAfterCursor to be non-negative, were ' + ('' + this.x5y_1 + ' and ' + this.y5y_1 + ' respectively.');
      throwIllegalArgumentException(tmp$ret$0);
    }
  }
  protoOf(DeleteSurroundingTextCommand).i5y = function (buffer) {
    var tmp0 = buffer.l5y_1;
    // Inline function 'androidx.compose.ui.text.input.addExactOrElse' call
    var right = this.y5y_1;
    var result = tmp0 + right | 0;
    var tmp;
    if (((tmp0 ^ result) & (right ^ result)) < 0) {
      tmp = buffer.v5y();
    } else {
      tmp = result;
    }
    var end = tmp;
    var tmp_0 = buffer.l5y_1;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = buffer.v5y();
    var tmp$ret$2 = Math.min(end, b);
    buffer.z5y(tmp_0, tmp$ret$2);
    var tmp0_0 = buffer.k5y_1;
    // Inline function 'androidx.compose.ui.text.input.subtractExactOrElse' call
    var right_0 = this.x5y_1;
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
    buffer.z5y(tmp$ret$5, buffer.k5y_1);
  };
  protoOf(DeleteSurroundingTextCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeleteSurroundingTextCommand))
      return false;
    if (!(this.x5y_1 === other.x5y_1))
      return false;
    if (!(this.y5y_1 === other.y5y_1))
      return false;
    return true;
  };
  protoOf(DeleteSurroundingTextCommand).hashCode = function () {
    var result = this.x5y_1;
    result = imul(31, result) + this.y5y_1 | 0;
    return result;
  };
  protoOf(DeleteSurroundingTextCommand).toString = function () {
    return 'DeleteSurroundingTextCommand(lengthBeforeCursor=' + this.x5y_1 + ', ' + ('lengthAfterCursor=' + this.y5y_1 + ')');
  };
  function DeleteAllCommand() {
  }
  protoOf(DeleteAllCommand).i5y = function (buffer) {
    buffer.s5y(0, buffer.v5y(), '');
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
    this.a5z_1 = start;
    this.b5z_1 = end;
  }
  protoOf(SetSelectionCommand).i5y = function (buffer) {
    var clampedStart = coerceIn(this.a5z_1, 0, buffer.v5y());
    var clampedEnd = coerceIn(this.b5z_1, 0, buffer.v5y());
    if (clampedStart < clampedEnd) {
      buffer.c5z(clampedStart, clampedEnd);
    } else {
      buffer.c5z(clampedEnd, clampedStart);
    }
  };
  protoOf(SetSelectionCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetSelectionCommand))
      return false;
    if (!(this.a5z_1 === other.a5z_1))
      return false;
    if (!(this.b5z_1 === other.b5z_1))
      return false;
    return true;
  };
  protoOf(SetSelectionCommand).hashCode = function () {
    var result = this.a5z_1;
    result = imul(31, result) + this.b5z_1 | 0;
    return result;
  };
  protoOf(SetSelectionCommand).toString = function () {
    return 'SetSelectionCommand(start=' + this.a5z_1 + ', end=' + this.b5z_1 + ')';
  };
  function SetComposingTextCommand_init_$Init$(text, newCursorPosition, $this) {
    SetComposingTextCommand.call($this, AnnotatedString_init_$Create$(text), newCursorPosition);
    return $this;
  }
  function SetComposingTextCommand_init_$Create$(text, newCursorPosition) {
    return SetComposingTextCommand_init_$Init$(text, newCursorPosition, objectCreate(protoOf(SetComposingTextCommand)));
  }
  function SetComposingTextCommand(annotatedString, newCursorPosition) {
    this.d5z_1 = annotatedString;
    this.e5z_1 = newCursorPosition;
  }
  protoOf(SetComposingTextCommand).r5y = function () {
    return this.d5z_1.p5h_1;
  };
  protoOf(SetComposingTextCommand).i5y = function (buffer) {
    if (buffer.t5y()) {
      var compositionStart = buffer.m5y_1;
      buffer.s5y(buffer.m5y_1, buffer.n5y_1, this.r5y());
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = this.r5y();
      if (charSequenceLength(this_0) > 0) {
        buffer.f5z(compositionStart, compositionStart + this.r5y().length | 0);
      }
    } else {
      var selectionStart = buffer.k5y_1;
      buffer.s5y(buffer.k5y_1, buffer.l5y_1, this.r5y());
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_1 = this.r5y();
      if (charSequenceLength(this_1) > 0) {
        buffer.f5z(selectionStart, selectionStart + this.r5y().length | 0);
      }
    }
    var newCursor = buffer.u5y();
    var tmp;
    if (this.e5z_1 > 0) {
      tmp = (newCursor + this.e5z_1 | 0) - 1 | 0;
    } else {
      tmp = (newCursor + this.e5z_1 | 0) - this.r5y().length | 0;
    }
    var newCursorInBuffer = tmp;
    buffer.w5y(coerceIn(newCursorInBuffer, 0, buffer.v5y()));
  };
  protoOf(SetComposingTextCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetComposingTextCommand))
      return false;
    if (!(this.r5y() === other.r5y()))
      return false;
    if (!(this.e5z_1 === other.e5z_1))
      return false;
    return true;
  };
  protoOf(SetComposingTextCommand).hashCode = function () {
    var result = getStringHashCode(this.r5y());
    result = imul(31, result) + this.e5z_1 | 0;
    return result;
  };
  protoOf(SetComposingTextCommand).toString = function () {
    return "SetComposingTextCommand(text='" + this.r5y() + "', newCursorPosition=" + this.e5z_1 + ')';
  };
  function SetComposingRegionCommand() {
  }
  protoOf(SetComposingRegionCommand).toString = function () {
    return 'SetComposingRegionCommand(start=' + this.g5z_1 + ', end=' + this.h5z_1 + ')';
  };
  function DeleteSurroundingTextInCodePointsCommand() {
  }
  protoOf(DeleteSurroundingTextInCodePointsCommand).toString = function () {
    return 'DeleteSurroundingTextInCodePointsCommand(lengthBeforeCursor=' + this.i5z_1 + ', ' + ('lengthAfterCursor=' + this.j5z_1 + ')');
  };
  function BackspaceCommand() {
  }
  protoOf(BackspaceCommand).i5y = function (buffer) {
    if (buffer.t5y()) {
      buffer.z5y(buffer.m5y_1, buffer.n5y_1);
      return Unit_instance;
    }
    if (buffer.u5y() === -1) {
      var delStart = buffer.k5y_1;
      var delEnd = buffer.l5y_1;
      buffer.w5y(buffer.k5y_1);
      buffer.z5y(delStart, delEnd);
      return Unit_instance;
    }
    if (buffer.u5y() === 0) {
      return Unit_instance;
    }
    var prevCursorPos = findPrecedingBreak(buffer.toString(), buffer.u5y());
    buffer.z5y(prevCursorPos, buffer.u5y());
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
  function MoveCursorCommand() {
  }
  protoOf(MoveCursorCommand).toString = function () {
    return 'MoveCursorCommand(amount=' + this.k5z_1 + ')';
  };
  var androidx_compose_ui_text_input_EditProcessor$stable;
  function generateBatchErrorMessage($this, editCommands, failedCommand) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    var tmp = 'length=' + $this.m5z_1.v5y() + ', ';
    var tmp_0 = $this.m5z_1.n5z();
    // Inline function 'kotlin.text.appendLine' call
    var value = 'Error while applying EditCommand batch to buffer (' + tmp + ('composition=' + toString(tmp_0 == null ? null : new TextRange(tmp_0)) + ', ') + ('selection=' + TextRange__toString_impl_pqvlzl($this.m5z_1.o5z()) + '):');
    // Inline function 'kotlin.text.appendLine' call
    this_0.u7(value).v7(_Char___init__impl__6a9atx(10));
    joinTo(editCommands, this_0, '\n', VOID, VOID, VOID, VOID, EditProcessor$generateBatchErrorMessage$lambda(failedCommand, $this));
    return this_0.toString();
  }
  function toStringForLog($this, _this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof CommitTextCommand) {
      tmp = 'CommitTextCommand(text.length=' + _this__u8e3s4.r5y().length + ', newCursorPosition=' + _this__u8e3s4.q5y_1 + ')';
    } else {
      if (_this__u8e3s4 instanceof SetComposingTextCommand) {
        tmp = 'SetComposingTextCommand(text.length=' + _this__u8e3s4.r5y().length + ', ' + ('newCursorPosition=' + _this__u8e3s4.e5z_1 + ')');
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
                        var tmp1_elvis_lhs = getKClassFromExpression(_this__u8e3s4).z9();
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
    this.l5z_1 = new TextFieldValue(emptyAnnotatedString(), Companion_getInstance_16().f5l_1, null);
    this.m5z_1 = new EditingBuffer(this.l5z_1.p5z_1, this.l5z_1.q5z_1);
  }
  protoOf(EditProcessor).s5z = function (value, textInputSession) {
    var textChanged = false;
    var selectionChanged = false;
    var tmp = value.r5z_1;
    var tmp_0 = tmp == null ? null : new TextRange(tmp);
    var tmp_1 = this.m5z_1.n5z();
    var compositionChanged = !equals(tmp_0, tmp_1 == null ? null : new TextRange(tmp_1));
    if (!(this.l5z_1.p5z_1.p5h_1 === value.p5z_1.p5h_1)) {
      this.m5z_1 = new EditingBuffer(value.p5z_1, value.q5z_1);
      textChanged = true;
    } else if (!equals(this.l5z_1.q5z_1, value.q5z_1)) {
      this.m5z_1.c5z(_TextRange___get_min__impl__uu95c4(value.q5z_1), _TextRange___get_max__impl__owm8m(value.q5z_1));
      selectionChanged = true;
    }
    var tmp_2 = value.r5z_1;
    if ((tmp_2 == null ? null : new TextRange(tmp_2)) == null) {
      this.m5z_1.o5y();
    } else {
      if (!_TextRange___get_collapsed__impl__cilesp(value.r5z_1)) {
        this.m5z_1.f5z(_TextRange___get_min__impl__uu95c4(value.r5z_1), _TextRange___get_max__impl__owm8m(value.r5z_1));
      }
    }
    var tmp_3;
    if (textChanged || (!selectionChanged && compositionChanged)) {
      this.m5z_1.o5y();
      tmp_3 = value.t5z(VOID, VOID, null);
    } else {
      tmp_3 = value;
    }
    var newValue = tmp_3;
    var oldValue = this.l5z_1;
    this.l5z_1 = newValue;
    if (textInputSession == null)
      null;
    else
      textInputSession.w5z(oldValue, newValue);
  };
  protoOf(EditProcessor).x5z = function (editCommands) {
    var lastCommand = null;
    try {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = editCommands.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = editCommands.m(index);
          lastCommand = item;
          item.i5y(this.m5z_1);
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
    var tmp = this.m5z_1.y5z();
    // Inline function 'kotlin.run' call
    var $this$run = this.m5z_1.o5z();
    // Inline function 'kotlin.takeUnless' call
    var this_0 = new TextRange($this$run);
    var tmp_0;
    this_0.t5k_1;
    if (!_TextRange___get_reversed__impl__emhnbm(this.l5z_1.q5z_1)) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    var tmp_1 = tmp_0;
    var tmp0_elvis_lhs = tmp_1 == null ? null : tmp_1.t5k_1;
    var tmp_2;
    var tmp_3 = tmp0_elvis_lhs;
    if ((tmp_3 == null ? null : new TextRange(tmp_3)) == null) {
      tmp_2 = TextRange_1(_TextRange___get_max__impl__owm8m($this$run), _TextRange___get_min__impl__uu95c4($this$run));
    } else {
      tmp_2 = tmp0_elvis_lhs;
    }
    var tmp$ret$5 = tmp_2;
    var newState = new TextFieldValue(tmp, tmp$ret$5, this.m5z_1.n5z());
    this.l5z_1 = newState;
    return newState;
  };
  protoOf(EditProcessor).z5z = function () {
    return this.l5z_1;
  };
  var androidx_compose_ui_text_input_EditingBuffer$stable;
  function Companion_11() {
    this.a60_1 = -1;
  }
  var Companion_instance_12;
  function Companion_getInstance_25() {
    return Companion_instance_12;
  }
  function _set_selectionStart__65lsx($this, value) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(value >= 0)) {
      var tmp$ret$0 = 'Cannot set selectionStart to a negative value: ' + value;
      throwIllegalArgumentException(tmp$ret$0);
    }
    $this.k5y_1 = value;
  }
  function _set_selectionEnd__2o1cag($this, value) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(value >= 0)) {
      var tmp$ret$0 = 'Cannot set selectionEnd to a negative value: ' + value;
      throwIllegalArgumentException(tmp$ret$0);
    }
    $this.l5y_1 = value;
  }
  function EditingBuffer(text, selection) {
    this.j5y_1 = new PartialGapBuffer(text.p5h_1);
    this.k5y_1 = _TextRange___get_min__impl__uu95c4(selection);
    this.l5y_1 = _TextRange___get_max__impl__owm8m(selection);
    this.m5y_1 = -1;
    this.n5y_1 = -1;
    var start = _TextRange___get_min__impl__uu95c4(selection);
    var end = _TextRange___get_max__impl__owm8m(selection);
    if (start < 0 || start > text.a()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + text.a());
    }
    if (end < 0 || end > text.a()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + text.a());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$_0('Do not set reversed range: ' + start + ' > ' + end);
    }
  }
  protoOf(EditingBuffer).t5y = function () {
    return !(this.m5y_1 === -1);
  };
  protoOf(EditingBuffer).n5z = function () {
    var tmp;
    if (this.t5y()) {
      tmp = TextRange_1(this.m5y_1, this.n5y_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(EditingBuffer).o5z = function () {
    return TextRange_1(this.k5y_1, this.l5y_1);
  };
  protoOf(EditingBuffer).w5y = function (cursor) {
    return this.c5z(cursor, cursor);
  };
  protoOf(EditingBuffer).u5y = function () {
    return this.k5y_1 === this.l5y_1 ? this.l5y_1 : -1;
  };
  protoOf(EditingBuffer).v5y = function () {
    return this.j5y_1.a();
  };
  protoOf(EditingBuffer).s5y = function (start, end, text) {
    if (start < 0 || start > this.j5y_1.a()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.j5y_1.a());
    }
    if (end < 0 || end > this.j5y_1.a()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.j5y_1.a());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$_0('Do not set reversed range: ' + start + ' > ' + end);
    }
    this.j5y_1.f60(start, end, text);
    _set_selectionStart__65lsx(this, start + text.length | 0);
    _set_selectionEnd__2o1cag(this, start + text.length | 0);
    this.m5y_1 = -1;
    this.n5y_1 = -1;
  };
  protoOf(EditingBuffer).z5y = function (start, end) {
    var deleteRange = TextRange_1(start, end);
    this.j5y_1.f60(start, end, '');
    var newSelection = updateRangeAfterDelete(TextRange_1(this.k5y_1, this.l5y_1), deleteRange);
    _set_selectionStart__65lsx(this, _TextRange___get_min__impl__uu95c4(newSelection));
    _set_selectionEnd__2o1cag(this, _TextRange___get_max__impl__owm8m(newSelection));
    if (this.t5y()) {
      var compositionRange = TextRange_1(this.m5y_1, this.n5y_1);
      var newComposition = updateRangeAfterDelete(compositionRange, deleteRange);
      if (_TextRange___get_collapsed__impl__cilesp(newComposition)) {
        this.o5y();
      } else {
        this.m5y_1 = _TextRange___get_min__impl__uu95c4(newComposition);
        this.n5y_1 = _TextRange___get_max__impl__owm8m(newComposition);
      }
    }
  };
  protoOf(EditingBuffer).c5z = function (start, end) {
    if (start < 0 || start > this.j5y_1.a()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.j5y_1.a());
    }
    if (end < 0 || end > this.j5y_1.a()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.j5y_1.a());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$_0('Do not set reversed range: ' + start + ' > ' + end);
    }
    _set_selectionStart__65lsx(this, start);
    _set_selectionEnd__2o1cag(this, end);
  };
  protoOf(EditingBuffer).f5z = function (start, end) {
    if (start < 0 || start > this.j5y_1.a()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.j5y_1.a());
    }
    if (end < 0 || end > this.j5y_1.a()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.j5y_1.a());
    }
    if (start >= end) {
      throw IllegalArgumentException_init_$Create$_0('Do not set reversed or empty range: ' + start + ' > ' + end);
    }
    this.m5y_1 = start;
    this.n5y_1 = end;
  };
  protoOf(EditingBuffer).o5y = function () {
    this.m5y_1 = -1;
    this.n5y_1 = -1;
  };
  protoOf(EditingBuffer).toString = function () {
    return this.j5y_1.toString();
  };
  protoOf(EditingBuffer).y5z = function () {
    return AnnotatedString_init_$Create$(this.toString());
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
  function Companion_12() {
    this.g60_1 = 255;
    this.h60_1 = 64;
    this.i60_1 = -1;
  }
  var Companion_instance_13;
  function Companion_getInstance_26() {
    return Companion_instance_13;
  }
  function PartialGapBuffer(text) {
    this.b60_1 = text;
    this.c60_1 = null;
    this.d60_1 = -1;
    this.e60_1 = -1;
  }
  protoOf(PartialGapBuffer).a = function () {
    var tmp0_elvis_lhs = this.c60_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.b60_1.length;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var buffer = tmp;
    return (this.b60_1.length - (this.e60_1 - this.d60_1 | 0) | 0) + buffer.n60() | 0;
  };
  protoOf(PartialGapBuffer).f60 = function (start, end, text) {
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
    var buffer = this.c60_1;
    if (buffer == null) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = text.length + 128 | 0;
      var tmp$ret$4 = Math.max(255, b);
      var charArray_0 = charArray(tmp$ret$4);
      // Inline function 'kotlin.comparisons.minOf' call
      var leftCopyCount = Math.min(start, 64);
      // Inline function 'kotlin.comparisons.minOf' call
      var a = this.b60_1.length - end | 0;
      var rightCopyCount = Math.min(a, 64);
      toCharArray_0(this.b60_1, charArray_0, 0, start - leftCopyCount | 0, start);
      toCharArray_0(this.b60_1, charArray_0, charArray_0.length - rightCopyCount | 0, end, end + rightCopyCount | 0);
      toCharArray(text, charArray_0, leftCopyCount);
      this.c60_1 = new GapBuffer(charArray_0, leftCopyCount + text.length | 0, charArray_0.length - rightCopyCount | 0);
      this.d60_1 = start - leftCopyCount | 0;
      this.e60_1 = end + rightCopyCount | 0;
      return Unit_instance;
    }
    var bufferStart = start - this.d60_1 | 0;
    var bufferEnd = end - this.d60_1 | 0;
    if (bufferStart < 0 || bufferEnd > buffer.n60()) {
      this.b60_1 = this.toString();
      this.c60_1 = null;
      this.d60_1 = -1;
      this.e60_1 = -1;
      return this.f60(start, end, text);
    }
    buffer.f60(bufferStart, bufferEnd, text);
  };
  protoOf(PartialGapBuffer).toString = function () {
    var tmp0_elvis_lhs = this.c60_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.b60_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var b = tmp;
    var sb = StringBuilder_init_$Create$_0();
    sb.cb(this.b60_1, 0, this.d60_1);
    b.o60(sb);
    sb.cb(this.b60_1, this.e60_1, this.b60_1.length);
    return sb.toString();
  };
  function gapLength($this) {
    return $this.m60_1 - $this.l60_1 | 0;
  }
  function makeSureAvailableSpace($this, requestSize) {
    if (requestSize <= gapLength($this)) {
      return Unit_instance;
    }
    var necessarySpace = requestSize - gapLength($this) | 0;
    var newCapacity = imul($this.j60_1, 2);
    while ((newCapacity - $this.j60_1 | 0) < necessarySpace) {
      newCapacity = imul(newCapacity, 2);
    }
    var newBuffer = charArray(newCapacity);
    var tmp0 = $this.k60_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = $this.l60_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newBuffer, 0, 0, endIndex);
    var tailLength = $this.j60_1 - $this.m60_1 | 0;
    var newEnd = newCapacity - tailLength | 0;
    var tmp0_0 = $this.k60_1;
    var tmp6 = $this.m60_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = $this.m60_1 + tailLength | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp0_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newBuffer, newEnd, tmp6, endIndex_0);
    $this.k60_1 = newBuffer;
    $this.j60_1 = newCapacity;
    $this.m60_1 = newEnd;
  }
  function delete_0($this, start, end) {
    if (start < $this.l60_1 && end <= $this.l60_1) {
      var copyLen = $this.l60_1 - end | 0;
      var tmp0 = $this.k60_1;
      var tmp2 = $this.k60_1;
      var tmp4 = $this.m60_1 - copyLen | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = $this.l60_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, tmp4, end, endIndex);
      $this.l60_1 = start;
      $this.m60_1 = $this.m60_1 - copyLen | 0;
    } else if (start < $this.l60_1 && end >= $this.l60_1) {
      $this.m60_1 = end + gapLength($this) | 0;
      $this.l60_1 = start;
    } else {
      var startInBuffer = start + gapLength($this) | 0;
      var endInBuffer = end + gapLength($this) | 0;
      var copyLen_0 = startInBuffer - $this.m60_1 | 0;
      var tmp0_0 = $this.k60_1;
      var tmp2_0 = $this.k60_1;
      var tmp4_0 = $this.l60_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = $this.m60_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = tmp0_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, tmp2_0, tmp4_0, startIndex, startInBuffer);
      $this.l60_1 = $this.l60_1 + copyLen_0 | 0;
      $this.m60_1 = endInBuffer;
    }
  }
  function GapBuffer(initBuffer, initGapStart, initGapEnd) {
    this.j60_1 = initBuffer.length;
    this.k60_1 = initBuffer;
    this.l60_1 = initGapStart;
    this.m60_1 = initGapEnd;
  }
  protoOf(GapBuffer).f60 = function (start, end, text) {
    makeSureAvailableSpace(this, text.length - (end - start | 0) | 0);
    delete_0(this, start, end);
    toCharArray(text, this.k60_1, this.l60_1);
    this.l60_1 = this.l60_1 + text.length | 0;
  };
  protoOf(GapBuffer).o60 = function (builder) {
    builder.jb(this.k60_1, 0, this.l60_1);
    builder.jb(this.k60_1, this.m60_1, this.j60_1);
  };
  protoOf(GapBuffer).n60 = function () {
    return this.j60_1 - gapLength(this) | 0;
  };
  protoOf(GapBuffer).toString = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    this_0.g(this_0);
    return this_0.toString();
  };
  function toCharArray(_this__u8e3s4, destination, destinationOffset) {
    return toCharArray_0(_this__u8e3s4, destination, destinationOffset, 0, _this__u8e3s4.length);
  }
  function _ImeAction___init__impl__ucgwde(value) {
    return value;
  }
  function ImeAction__toString_impl_r8bdhy($this) {
    return $this === Companion_getInstance_27().p60_1 ? 'Unspecified' : $this === Companion_getInstance_27().r60_1 ? 'None' : $this === Companion_getInstance_27().q60_1 ? 'Default' : $this === Companion_getInstance_27().s60_1 ? 'Go' : $this === Companion_getInstance_27().t60_1 ? 'Search' : $this === Companion_getInstance_27().u60_1 ? 'Send' : $this === Companion_getInstance_27().v60_1 ? 'Previous' : $this === Companion_getInstance_27().w60_1 ? 'Next' : $this === Companion_getInstance_27().x60_1 ? 'Done' : 'Invalid';
  }
  function Companion_13() {
    Companion_instance_14 = this;
    this.p60_1 = _ImeAction___init__impl__ucgwde(-1);
    this.q60_1 = _ImeAction___init__impl__ucgwde(1);
    this.r60_1 = _ImeAction___init__impl__ucgwde(0);
    this.s60_1 = _ImeAction___init__impl__ucgwde(2);
    this.t60_1 = _ImeAction___init__impl__ucgwde(3);
    this.u60_1 = _ImeAction___init__impl__ucgwde(4);
    this.v60_1 = _ImeAction___init__impl__ucgwde(5);
    this.w60_1 = _ImeAction___init__impl__ucgwde(6);
    this.x60_1 = _ImeAction___init__impl__ucgwde(7);
  }
  var Companion_instance_14;
  function Companion_getInstance_27() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function ImeAction__hashCode_impl_m1mrob($this) {
    return $this;
  }
  function ImeAction__equals_impl_tgas09($this, other) {
    if (!(other instanceof ImeAction))
      return false;
    if (!($this === (other instanceof ImeAction ? other.y60_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ImeAction(value) {
    Companion_getInstance_27();
    this.y60_1 = value;
  }
  protoOf(ImeAction).toString = function () {
    return ImeAction__toString_impl_r8bdhy(this.y60_1);
  };
  protoOf(ImeAction).hashCode = function () {
    return ImeAction__hashCode_impl_m1mrob(this.y60_1);
  };
  protoOf(ImeAction).equals = function (other) {
    return ImeAction__equals_impl_tgas09(this.y60_1, other);
  };
  var androidx_compose_ui_text_input_ImeOptions$stable;
  function Companion_14() {
    Companion_instance_15 = this;
    this.z60_1 = new ImeOptions();
  }
  var Companion_instance_15;
  function Companion_getInstance_28() {
    if (Companion_instance_15 == null)
      new Companion_14();
    return Companion_instance_15;
  }
  function ImeOptions(singleLine, capitalization, autoCorrect, keyboardType, imeAction, platformImeOptions, hintLocales) {
    Companion_getInstance_28();
    singleLine = singleLine === VOID ? false : singleLine;
    capitalization = capitalization === VOID ? Companion_getInstance_29().b61_1 : capitalization;
    autoCorrect = autoCorrect === VOID ? true : autoCorrect;
    keyboardType = keyboardType === VOID ? Companion_getInstance_30().g61_1 : keyboardType;
    imeAction = imeAction === VOID ? Companion_getInstance_27().q60_1 : imeAction;
    platformImeOptions = platformImeOptions === VOID ? null : platformImeOptions;
    hintLocales = hintLocales === VOID ? Companion_getInstance_35().o5q_1 : hintLocales;
    this.p61_1 = singleLine;
    this.q61_1 = capitalization;
    this.r61_1 = autoCorrect;
    this.s61_1 = keyboardType;
    this.t61_1 = imeAction;
    this.u61_1 = platformImeOptions;
    this.v61_1 = hintLocales;
  }
  protoOf(ImeOptions).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ImeOptions))
      return false;
    if (!(this.p61_1 === other.p61_1))
      return false;
    if (!(this.q61_1 === other.q61_1))
      return false;
    if (!(this.r61_1 === other.r61_1))
      return false;
    if (!(this.s61_1 === other.s61_1))
      return false;
    if (!(this.t61_1 === other.t61_1))
      return false;
    if (!equals(this.u61_1, other.u61_1))
      return false;
    if (!this.v61_1.equals(other.v61_1))
      return false;
    return true;
  };
  protoOf(ImeOptions).hashCode = function () {
    var result = getBooleanHashCode(this.p61_1);
    result = imul(31, result) + KeyboardCapitalization__hashCode_impl_6ibuz5(this.q61_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.r61_1) | 0;
    result = imul(31, result) + KeyboardType__hashCode_impl_mw6m33(this.s61_1) | 0;
    result = imul(31, result) + ImeAction__hashCode_impl_m1mrob(this.t61_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.u61_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + this.v61_1.hashCode() | 0;
    return result;
  };
  protoOf(ImeOptions).toString = function () {
    return 'ImeOptions(singleLine=' + this.p61_1 + ', capitalization=' + KeyboardCapitalization__toString_impl_f8u1tq(this.q61_1) + ', ' + ('autoCorrect=' + this.r61_1 + ', keyboardType=' + KeyboardType__toString_impl_150pa8(this.s61_1) + ', imeAction=' + ImeAction__toString_impl_r8bdhy(this.t61_1) + ', ') + ('platformImeOptions=' + toString(this.u61_1) + ', hintLocales=' + this.v61_1.toString() + ')');
  };
  function _KeyboardCapitalization___init__impl__fmdpvi(value) {
    return value;
  }
  function KeyboardCapitalization__toString_impl_f8u1tq($this) {
    return $this === Companion_getInstance_29().a61_1 ? 'Unspecified' : $this === Companion_getInstance_29().b61_1 ? 'None' : $this === Companion_getInstance_29().c61_1 ? 'Characters' : $this === Companion_getInstance_29().d61_1 ? 'Words' : $this === Companion_getInstance_29().e61_1 ? 'Sentences' : 'Invalid';
  }
  function Companion_15() {
    Companion_instance_16 = this;
    this.a61_1 = _KeyboardCapitalization___init__impl__fmdpvi(-1);
    this.b61_1 = _KeyboardCapitalization___init__impl__fmdpvi(0);
    this.c61_1 = _KeyboardCapitalization___init__impl__fmdpvi(1);
    this.d61_1 = _KeyboardCapitalization___init__impl__fmdpvi(2);
    this.e61_1 = _KeyboardCapitalization___init__impl__fmdpvi(3);
  }
  var Companion_instance_16;
  function Companion_getInstance_29() {
    if (Companion_instance_16 == null)
      new Companion_15();
    return Companion_instance_16;
  }
  function KeyboardCapitalization__hashCode_impl_6ibuz5($this) {
    return $this;
  }
  function KeyboardCapitalization__equals_impl_dba8wb($this, other) {
    if (!(other instanceof KeyboardCapitalization))
      return false;
    if (!($this === (other instanceof KeyboardCapitalization ? other.w61_1 : THROW_CCE())))
      return false;
    return true;
  }
  function KeyboardCapitalization(value) {
    Companion_getInstance_29();
    this.w61_1 = value;
  }
  protoOf(KeyboardCapitalization).toString = function () {
    return KeyboardCapitalization__toString_impl_f8u1tq(this.w61_1);
  };
  protoOf(KeyboardCapitalization).hashCode = function () {
    return KeyboardCapitalization__hashCode_impl_6ibuz5(this.w61_1);
  };
  protoOf(KeyboardCapitalization).equals = function (other) {
    return KeyboardCapitalization__equals_impl_dba8wb(this.w61_1, other);
  };
  function _KeyboardType___init__impl__csir7k(value) {
    return value;
  }
  function KeyboardType__toString_impl_150pa8($this) {
    return $this === Companion_getInstance_30().f61_1 ? 'Unspecified' : $this === Companion_getInstance_30().g61_1 ? 'Text' : $this === Companion_getInstance_30().h61_1 ? 'Ascii' : $this === Companion_getInstance_30().i61_1 ? 'Number' : $this === Companion_getInstance_30().j61_1 ? 'Phone' : $this === Companion_getInstance_30().k61_1 ? 'Uri' : $this === Companion_getInstance_30().l61_1 ? 'Email' : $this === Companion_getInstance_30().m61_1 ? 'Password' : $this === Companion_getInstance_30().n61_1 ? 'NumberPassword' : $this === Companion_getInstance_30().o61_1 ? 'Decimal' : 'Invalid';
  }
  function Companion_16() {
    Companion_instance_17 = this;
    this.f61_1 = _KeyboardType___init__impl__csir7k(0);
    this.g61_1 = _KeyboardType___init__impl__csir7k(1);
    this.h61_1 = _KeyboardType___init__impl__csir7k(2);
    this.i61_1 = _KeyboardType___init__impl__csir7k(3);
    this.j61_1 = _KeyboardType___init__impl__csir7k(4);
    this.k61_1 = _KeyboardType___init__impl__csir7k(5);
    this.l61_1 = _KeyboardType___init__impl__csir7k(6);
    this.m61_1 = _KeyboardType___init__impl__csir7k(7);
    this.n61_1 = _KeyboardType___init__impl__csir7k(8);
    this.o61_1 = _KeyboardType___init__impl__csir7k(9);
  }
  var Companion_instance_17;
  function Companion_getInstance_30() {
    if (Companion_instance_17 == null)
      new Companion_16();
    return Companion_instance_17;
  }
  function KeyboardType__hashCode_impl_mw6m33($this) {
    return $this;
  }
  function KeyboardType__equals_impl_1eug1f($this, other) {
    if (!(other instanceof KeyboardType))
      return false;
    if (!($this === (other instanceof KeyboardType ? other.x61_1 : THROW_CCE())))
      return false;
    return true;
  }
  function KeyboardType(value) {
    Companion_getInstance_30();
    this.x61_1 = value;
  }
  protoOf(KeyboardType).toString = function () {
    return KeyboardType__toString_impl_150pa8(this.x61_1);
  };
  protoOf(KeyboardType).hashCode = function () {
    return KeyboardType__hashCode_impl_mw6m33(this.x61_1);
  };
  protoOf(KeyboardType).equals = function (other) {
    return KeyboardType__equals_impl_1eug1f(this.x61_1, other);
  };
  function OffsetMapping$Companion$Identity$1() {
  }
  protoOf(OffsetMapping$Companion$Identity$1).y61 = function (offset) {
    return offset;
  };
  protoOf(OffsetMapping$Companion$Identity$1).z61 = function (offset) {
    return offset;
  };
  function Companion_17() {
    Companion_instance_18 = this;
    var tmp = this;
    tmp.a62_1 = new OffsetMapping$Companion$Identity$1();
  }
  var Companion_instance_18;
  function Companion_getInstance_31() {
    if (Companion_instance_18 == null)
      new Companion_17();
    return Companion_instance_18;
  }
  var androidx_compose_ui_text_input_TextFieldValue$stable;
  function TextFieldValue$Companion$Saver$lambda($this$Saver, it) {
    return arrayListOf([save_0(it.p5z_1, get_AnnotatedStringSaver(), $this$Saver), save_0(new TextRange(it.q5z_1), get_Saver_11(Companion_getInstance_16()), $this$Saver)]);
  }
  function TextFieldValue$Companion$Saver$lambda_0(it) {
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(0);
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
        var tmp_1 = tmp2.m5f(tmp0);
        tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof AnnotatedString) ? tmp_1 : THROW_CCE();
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_2 = ensureNotNull(tmp$ret$0);
    var tmp0_0 = list.m(1);
    var tmp2_0 = get_Saver_11(Companion_getInstance_16());
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
        var tmp_5 = tmp2_0.m5f(tmp0_0);
        var tmp_6;
        if (tmp_5 == null ? true : tmp_5 instanceof TextRange) {
          var tmp_7 = tmp_5;
          tmp_6 = tmp_7 == null ? null : tmp_7.t5k_1;
        } else {
          tmp_6 = THROW_CCE();
        }
        var tmp_8 = tmp_6;
        var tmp_9 = tmp_8 == null ? null : new TextRange(tmp_8);
        tmp_4 = tmp_9 == null ? null : tmp_9.t5k_1;
      }
      tmp$ret$5 = tmp_4;
    }
    var tmp_10 = tmp$ret$5;
    return new TextFieldValue(tmp_2, ensureNotNull(tmp_10 == null ? null : new TextRange(tmp_10)).t5k_1);
  }
  function TextFieldValue_init_$Init$(text, selection, composition, $this) {
    text = text === VOID ? '' : text;
    selection = selection === VOID ? Companion_getInstance_16().f5l_1 : selection;
    composition = composition === VOID ? null : composition;
    TextFieldValue.call($this, AnnotatedString_init_$Create$(text), selection, composition);
    return $this;
  }
  function TextFieldValue_init_$Create$(text, selection, composition) {
    return TextFieldValue_init_$Init$(text, selection, composition, objectCreate(protoOf(TextFieldValue)));
  }
  function Companion_18() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp_0 = TextFieldValue$Companion$Saver$lambda;
    tmp.b62_1 = Saver_0(tmp_0, TextFieldValue$Companion$Saver$lambda_0);
  }
  var Companion_instance_19;
  function Companion_getInstance_32() {
    if (Companion_instance_19 == null)
      new Companion_18();
    return Companion_instance_19;
  }
  function TextFieldValue(annotatedString, selection, composition) {
    Companion_getInstance_32();
    selection = selection === VOID ? Companion_getInstance_16().f5l_1 : selection;
    composition = composition === VOID ? null : composition;
    this.p5z_1 = annotatedString;
    this.q5z_1 = coerceIn_1(selection, 0, this.r5y().length);
    var tmp = this;
    var tmp_0;
    var tmp_1 = composition;
    if ((tmp_1 == null ? null : new TextRange(tmp_1)) == null) {
      tmp_0 = null;
    } else {
      tmp_0 = coerceIn_1(composition, 0, this.r5y().length);
    }
    tmp.r5z_1 = tmp_0;
  }
  protoOf(TextFieldValue).r5y = function () {
    return this.p5z_1.p5h_1;
  };
  protoOf(TextFieldValue).c62 = function (annotatedString, selection, composition) {
    return new TextFieldValue(annotatedString, selection, composition);
  };
  protoOf(TextFieldValue).t5z = function (annotatedString, selection, composition, $super) {
    annotatedString = annotatedString === VOID ? this.p5z_1 : annotatedString;
    selection = selection === VOID ? this.q5z_1 : selection;
    composition = composition === VOID ? this.r5z_1 : composition;
    var tmp;
    if ($super === VOID) {
      tmp = this.c62(annotatedString, selection, composition);
    } else {
      var tmp_0 = $super.c62;
      var tmp_1 = composition;
      tmp = tmp_0.call(this, annotatedString, new TextRange(selection), tmp_1 == null ? null : new TextRange(tmp_1));
    }
    return tmp;
  };
  protoOf(TextFieldValue).d62 = function (text, selection, composition) {
    return new TextFieldValue(AnnotatedString_init_$Create$(text), selection, composition);
  };
  protoOf(TextFieldValue).e62 = function (text, selection, composition, $super) {
    selection = selection === VOID ? this.q5z_1 : selection;
    composition = composition === VOID ? this.r5z_1 : composition;
    var tmp;
    if ($super === VOID) {
      tmp = this.d62(text, selection, composition);
    } else {
      var tmp_0 = $super.d62;
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
    if (equals(this.q5z_1, other.q5z_1)) {
      var tmp_1 = this.r5z_1;
      var tmp_2 = tmp_1 == null ? null : new TextRange(tmp_1);
      var tmp_3 = other.r5z_1;
      tmp_0 = equals(tmp_2, tmp_3 == null ? null : new TextRange(tmp_3));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.p5z_1.equals(other.p5z_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TextFieldValue).hashCode = function () {
    var result = this.p5z_1.hashCode();
    result = imul(31, result) + TextRange__hashCode_impl_3zpp6q(this.q5z_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.r5z_1;
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
    var tmp = "text='" + this.p5z_1.toString() + "', ";
    var tmp_0 = 'selection=' + TextRange__toString_impl_pqvlzl(this.q5z_1) + ', ';
    var tmp_1 = this.r5z_1;
    return 'TextFieldValue(' + tmp + tmp_0 + ('composition=' + toString(tmp_1 == null ? null : new TextRange(tmp_1)) + ')');
  };
  function getSelectedText(_this__u8e3s4) {
    return _this__u8e3s4.p5z_1.w5h(_this__u8e3s4.q5z_1);
  }
  function getTextBeforeSelection(_this__u8e3s4, maxChars) {
    // Inline function 'kotlin.math.max' call
    var b = _TextRange___get_min__impl__uu95c4(_this__u8e3s4.q5z_1) - maxChars | 0;
    var tmp$ret$0 = Math.max(0, b);
    return _this__u8e3s4.p5z_1.c(tmp$ret$0, _TextRange___get_min__impl__uu95c4(_this__u8e3s4.q5z_1));
  }
  function getTextAfterSelection(_this__u8e3s4, maxChars) {
    var tmp = _TextRange___get_max__impl__owm8m(_this__u8e3s4.q5z_1);
    var tmp0 = _TextRange___get_max__impl__owm8m(_this__u8e3s4.q5z_1) + maxChars | 0;
    // Inline function 'kotlin.math.min' call
    var b = _this__u8e3s4.r5y().length;
    var tmp$ret$0 = Math.min(tmp0, b);
    return _this__u8e3s4.p5z_1.c(tmp, tmp$ret$0);
  }
  var androidx_compose_ui_text_input_TextInputService$stable;
  var androidx_compose_ui_text_input_TextInputSession$stable;
  function TextInputService(platformTextInputService) {
    this.f62_1 = platformTextInputService;
    this.g62_1 = new AtomicReference(null);
  }
  protoOf(TextInputService).h62 = function () {
    return this.g62_1.j13();
  };
  protoOf(TextInputService).j62 = function (value, imeOptions, onEditCommand, onImeActionPerformed) {
    this.f62_1.k62(value, imeOptions, onEditCommand, onImeActionPerformed);
    var nextSession = new TextInputSession(this, this.f62_1);
    this.g62_1.z2p(nextSession);
    return nextSession;
  };
  protoOf(TextInputService).l62 = function () {
    this.f62_1.l62();
    var nextSession = new TextInputSession(this, this.f62_1);
    this.g62_1.z2p(nextSession);
  };
  protoOf(TextInputService).m62 = function (session) {
    if (this.g62_1.e2p(session, null)) {
      this.f62_1.n62();
    }
  };
  protoOf(TextInputService).n62 = function () {
    this.g62_1.z2p(null);
    this.f62_1.n62();
  };
  protoOf(TextInputService).o62 = function () {
    if (!(this.h62() == null)) {
      this.f62_1.o62();
    }
  };
  protoOf(TextInputService).p62 = function () {
    return this.f62_1.p62();
  };
  function TextInputSession(textInputService, platformTextInputService) {
    this.u5z_1 = textInputService;
    this.v5z_1 = platformTextInputService;
  }
  protoOf(TextInputSession).q62 = function () {
    return equals(this.u5z_1.h62(), this);
  };
  protoOf(TextInputSession).uz = function () {
    this.u5z_1.m62(this);
  };
  protoOf(TextInputSession).r62 = function (rect) {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.q62();
    if (this_0) {
      this.v5z_1.s62(rect);
    }
    return this_0;
  };
  protoOf(TextInputSession).t62 = function (textFieldValue, offsetMapping, textLayoutResult, textFieldToRootTransform, innerTextFieldBounds, decorationBoxBounds) {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.q62();
    if (this_0) {
      this.v5z_1.u62(textFieldValue, offsetMapping, textLayoutResult, textFieldToRootTransform, innerTextFieldBounds, decorationBoxBounds);
    }
    return this_0;
  };
  protoOf(TextInputSession).w5z = function (oldValue, newValue) {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.q62();
    if (this_0) {
      this.v5z_1.v62(oldValue, newValue);
    }
    return this_0;
  };
  function PlatformTextInputService() {
  }
  var androidx_compose_ui_text_input_TransformedText$stable;
  var androidx_compose_ui_text_input_PasswordVisualTransformation$stable;
  function sam$androidx_compose_ui_text_input_VisualTransformation$0(function_0) {
    this.w62_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_text_input_VisualTransformation$0).x62 = function (text) {
    return this.w62_1(text);
  };
  protoOf(sam$androidx_compose_ui_text_input_VisualTransformation$0).v2 = function () {
    return this.w62_1;
  };
  protoOf(sam$androidx_compose_ui_text_input_VisualTransformation$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, VisualTransformation) : false) {
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
  protoOf(sam$androidx_compose_ui_text_input_VisualTransformation$0).hashCode = function () {
    return hashCode(this.v2());
  };
  function VisualTransformation$Companion$None$lambda(text) {
    return new TransformedText(text, Companion_getInstance_31().a62_1);
  }
  function Companion_19() {
    Companion_instance_20 = this;
    var tmp = this;
    var tmp_0 = VisualTransformation$Companion$None$lambda;
    tmp.y62_1 = new sam$androidx_compose_ui_text_input_VisualTransformation$0(tmp_0);
  }
  var Companion_instance_20;
  function Companion_getInstance_33() {
    if (Companion_instance_20 == null)
      new Companion_19();
    return Companion_instance_20;
  }
  function VisualTransformation() {
  }
  function TransformedText(text, offsetMapping) {
    this.z62_1 = text;
    this.a63_1 = offsetMapping;
  }
  protoOf(TransformedText).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransformedText))
      return false;
    if (!this.z62_1.equals(other.z62_1))
      return false;
    if (!equals(this.a63_1, other.a63_1))
      return false;
    return true;
  };
  protoOf(TransformedText).hashCode = function () {
    var result = this.z62_1.hashCode();
    result = imul(31, result) + hashCode(this.a63_1) | 0;
    return result;
  };
  protoOf(TransformedText).toString = function () {
    return 'TransformedText(text=' + this.z62_1.toString() + ', offsetMapping=' + toString_0(this.a63_1) + ')';
  };
  function PasswordVisualTransformation() {
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$_0(message);
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$_0(message);
  }
  var androidx_compose_ui_text_intl_Locale$stable;
  function Companion_20() {
  }
  protoOf(Companion_20).p22 = function () {
    return get_platformLocaleDelegate().p22().m(0);
  };
  var Companion_instance_21;
  function Companion_getInstance_34() {
    return Companion_instance_21;
  }
  function Locale_init_$Init$(languageTag, $this) {
    Locale.call($this, get_platformLocaleDelegate().b63(languageTag));
    return $this;
  }
  function Locale_init_$Create$(languageTag) {
    return Locale_init_$Init$(languageTag, objectCreate(protoOf(Locale)));
  }
  function Locale(platformLocale) {
    this.k5o_1 = platformLocale;
  }
  protoOf(Locale).c63 = function () {
    return get_language(this.k5o_1);
  };
  protoOf(Locale).d63 = function () {
    return get_region(this.k5o_1);
  };
  protoOf(Locale).l5o = function () {
    return getLanguageTag(this.k5o_1);
  };
  protoOf(Locale).equals = function (other) {
    if (other == null)
      return false;
    if (!(other instanceof Locale))
      return false;
    if (this === other)
      return true;
    return this.l5o() === other.l5o();
  };
  protoOf(Locale).hashCode = function () {
    return getStringHashCode(this.l5o());
  };
  protoOf(Locale).toString = function () {
    return this.l5o();
  };
  var androidx_compose_ui_text_intl_LocaleList$stable;
  function Companion_21() {
    Companion_instance_22 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.listOf' call
    var tmp$ret$0 = emptyList();
    tmp.o5q_1 = new LocaleList(tmp$ret$0);
  }
  protoOf(Companion_21).p22 = function () {
    return get_platformLocaleDelegate().p22();
  };
  var Companion_instance_22;
  function Companion_getInstance_35() {
    if (Companion_instance_22 == null)
      new Companion_21();
    return Companion_instance_22;
  }
  function LocaleList(localeList) {
    Companion_getInstance_35();
    this.i5o_1 = localeList;
    this.j5o_1 = this.i5o_1.l();
  }
  protoOf(LocaleList).m = function (i) {
    return this.i5o_1.m(i);
  };
  protoOf(LocaleList).l = function () {
    return this.j5o_1;
  };
  protoOf(LocaleList).e63 = function (element) {
    return this.i5o_1.t(element);
  };
  protoOf(LocaleList).t = function (element) {
    if (!(element instanceof Locale))
      return false;
    return this.e63(element instanceof Locale ? element : THROW_CCE());
  };
  protoOf(LocaleList).n = function () {
    return this.i5o_1.n();
  };
  protoOf(LocaleList).i = function () {
    return this.i5o_1.i();
  };
  protoOf(LocaleList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LocaleList))
      return false;
    if (!equals(this.i5o_1, other.i5o_1))
      return false;
    return true;
  };
  protoOf(LocaleList).hashCode = function () {
    return hashCode(this.i5o_1);
  };
  protoOf(LocaleList).toString = function () {
    return 'LocaleList(localeList=' + toString_0(this.i5o_1) + ')';
  };
  function get_platformLocaleDelegate() {
    _init_properties_PlatformLocale_kt__d5ixzh();
    return platformLocaleDelegate;
  }
  var platformLocaleDelegate;
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
      FontCacheManagementDispatcher = Dispatchers_getInstance().r12();
    }
  }
  function _BaselineShift___init__impl__scj05g(multiplier) {
    return multiplier;
  }
  function _BaselineShift___get_multiplier__impl__qhmjek($this) {
    return $this;
  }
  function Companion_22() {
    Companion_instance_23 = this;
    this.l5q_1 = _BaselineShift___init__impl__scj05g(0.5);
    this.m5q_1 = _BaselineShift___init__impl__scj05g(-0.5);
    this.n5q_1 = _BaselineShift___init__impl__scj05g(0.0);
  }
  var Companion_instance_23;
  function Companion_getInstance_36() {
    if (Companion_instance_23 == null)
      new Companion_22();
    return Companion_instance_23;
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
    var tmp0_other_with_cast = other instanceof BaselineShift ? other.x5n_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaselineShift(multiplier) {
    Companion_getInstance_36();
    this.x5n_1 = multiplier;
  }
  protoOf(BaselineShift).toString = function () {
    return BaselineShift__toString_impl_x98gcc(this.x5n_1);
  };
  protoOf(BaselineShift).hashCode = function () {
    return BaselineShift__hashCode_impl_g0potx(this.x5n_1);
  };
  protoOf(BaselineShift).equals = function (other) {
    return BaselineShift__equals_impl_37wrjj(this.x5n_1, other);
  };
  function lerp_8(start, stop, fraction) {
    return _BaselineShift___init__impl__scj05g(lerp_3(_BaselineShift___get_multiplier__impl__qhmjek(start), _BaselineShift___get_multiplier__impl__qhmjek(stop), fraction));
  }
  function _Hyphens___init__impl__m2cvg8(value) {
    return value;
  }
  function Companion_23() {
    Companion_instance_24 = this;
    this.e5m_1 = _Hyphens___init__impl__m2cvg8(1);
    this.f5m_1 = _Hyphens___init__impl__m2cvg8(2);
    this.g5m_1 = _Hyphens___init__impl__m2cvg8(-2147483648);
  }
  var Companion_instance_24;
  function Companion_getInstance_37() {
    if (Companion_instance_24 == null)
      new Companion_23();
    return Companion_instance_24;
  }
  function Hyphens__toString_impl_ck1wg0($this) {
    return $this === Companion_getInstance_37().e5m_1 ? 'Hyphens.None' : $this === Companion_getInstance_37().f5m_1 ? 'Hyphens.Auto' : $this === Companion_getInstance_37().g5m_1 ? 'Hyphens.Unspecified' : 'Invalid';
  }
  function Hyphens__hashCode_impl_yb7t8v($this) {
    return $this;
  }
  function Hyphens__equals_impl_oqoi4t($this, other) {
    if (!(other instanceof Hyphens))
      return false;
    if (!($this === (other instanceof Hyphens ? other.o5m_1 : THROW_CCE())))
      return false;
    return true;
  }
  function Hyphens(value) {
    Companion_getInstance_37();
    this.o5m_1 = value;
  }
  protoOf(Hyphens).toString = function () {
    return Hyphens__toString_impl_ck1wg0(this.o5m_1);
  };
  protoOf(Hyphens).hashCode = function () {
    return Hyphens__hashCode_impl_yb7t8v(this.o5m_1);
  };
  protoOf(Hyphens).equals = function (other) {
    return Hyphens__equals_impl_oqoi4t(this.o5m_1, other);
  };
  var androidx_compose_ui_text_style_LineHeightStyle$stable;
  function _Trim___init__impl__tcc1lr(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function Trim__toString_impl_hxcm0x($this) {
    var tmp0_subject = _get_value__a43j40($this);
    return tmp0_subject === _get_value__a43j40(Companion_getInstance_38().h63_1) ? 'LineHeightStyle.Trim.FirstLineTop' : tmp0_subject === _get_value__a43j40(Companion_getInstance_38().i63_1) ? 'LineHeightStyle.Trim.LastLineBottom' : tmp0_subject === _get_value__a43j40(Companion_getInstance_38().j63_1) ? 'LineHeightStyle.Trim.Both' : tmp0_subject === _get_value__a43j40(Companion_getInstance_38().k63_1) ? 'LineHeightStyle.Trim.None' : 'Invalid';
  }
  function Companion_24() {
    Companion_instance_25 = this;
    this.f63_1 = 1;
    this.g63_1 = 16;
    this.h63_1 = _Trim___init__impl__tcc1lr(1);
    this.i63_1 = _Trim___init__impl__tcc1lr(16);
    this.j63_1 = _Trim___init__impl__tcc1lr(17);
    this.k63_1 = _Trim___init__impl__tcc1lr(0);
  }
  var Companion_instance_25;
  function Companion_getInstance_38() {
    if (Companion_instance_25 == null)
      new Companion_24();
    return Companion_instance_25;
  }
  function Trim__isTrimFirstLineTop_impl_tqdsaa($this) {
    return (_get_value__a43j40($this) & 1) > 0;
  }
  function Trim__isTrimLastLineBottom_impl_8k6x3e($this) {
    return (_get_value__a43j40($this) & 16) > 0;
  }
  function Trim__hashCode_impl_vclj5c($this) {
    return $this;
  }
  function Trim__equals_impl_6x7eks($this, other) {
    if (!(other instanceof Trim))
      return false;
    if (!($this === (other instanceof Trim ? other.q5o_1 : THROW_CCE())))
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
    return tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_39().l63_1) ? 'LineHeightStyle.Alignment.Top' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_39().m63_1) ? 'LineHeightStyle.Alignment.Center' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_39().n63_1) ? 'LineHeightStyle.Alignment.Proportional' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_39().o63_1) ? 'LineHeightStyle.Alignment.Bottom' : 'LineHeightStyle.Alignment(topPercentage = ' + _Alignment___get_topRatio__impl__gg7tir($this) + ')';
  }
  function Companion_25() {
    Companion_instance_26 = this;
    this.l63_1 = _Alignment___init__impl__it107q(0.0);
    this.m63_1 = _Alignment___init__impl__it107q(0.5);
    this.n63_1 = _Alignment___init__impl__it107q(-1.0);
    this.o63_1 = _Alignment___init__impl__it107q(1.0);
  }
  var Companion_instance_26;
  function Companion_getInstance_39() {
    if (Companion_instance_26 == null)
      new Companion_25();
    return Companion_instance_26;
  }
  function Alignment__hashCode_impl_omr6of($this) {
    return getNumberHashCode($this);
  }
  function Alignment__equals_impl_9ve0tn($this, other) {
    if (!(other instanceof Alignment))
      return false;
    var tmp0_other_with_cast = other instanceof Alignment ? other.p5o_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function _Mode___init__impl__3rgsrm(value) {
    return value;
  }
  function Companion_26() {
    Companion_instance_27 = this;
    this.p63_1 = _Mode___init__impl__3rgsrm(0);
    this.q63_1 = _Mode___init__impl__3rgsrm(1);
  }
  var Companion_instance_27;
  function Companion_getInstance_40() {
    if (Companion_instance_27 == null)
      new Companion_26();
    return Companion_instance_27;
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
    if (!($this === (other instanceof Mode ? other.r5o_1 : THROW_CCE())))
      return false;
    return true;
  }
  function LineHeightStyle_init_$Init$(alignment, trim, $this) {
    LineHeightStyle.call($this, alignment, trim, Companion_getInstance_40().p63_1);
    return $this;
  }
  function LineHeightStyle_init_$Create$(alignment, trim) {
    return LineHeightStyle_init_$Init$(alignment, trim, objectCreate(protoOf(LineHeightStyle)));
  }
  function Companion_27() {
    Companion_instance_28 = this;
    this.r63_1 = new LineHeightStyle(Companion_getInstance_39().n63_1, Companion_getInstance_38().j63_1, Companion_getInstance_40().p63_1);
  }
  var Companion_instance_28;
  function Companion_getInstance_41() {
    if (Companion_instance_28 == null)
      new Companion_27();
    return Companion_instance_28;
  }
  function Trim(value) {
    Companion_getInstance_38();
    this.q5o_1 = value;
  }
  protoOf(Trim).toString = function () {
    return Trim__toString_impl_hxcm0x(this.q5o_1);
  };
  protoOf(Trim).hashCode = function () {
    return Trim__hashCode_impl_vclj5c(this.q5o_1);
  };
  protoOf(Trim).equals = function (other) {
    return Trim__equals_impl_6x7eks(this.q5o_1, other);
  };
  function Alignment(topRatio) {
    Companion_getInstance_39();
    this.p5o_1 = topRatio;
  }
  protoOf(Alignment).toString = function () {
    return Alignment__toString_impl_on6yhu(this.p5o_1);
  };
  protoOf(Alignment).hashCode = function () {
    return Alignment__hashCode_impl_omr6of(this.p5o_1);
  };
  protoOf(Alignment).equals = function (other) {
    return Alignment__equals_impl_9ve0tn(this.p5o_1, other);
  };
  function Mode(value) {
    Companion_getInstance_40();
    this.r5o_1 = value;
  }
  protoOf(Mode).toString = function () {
    return Mode__toString_impl_dwwrtq(this.r5o_1);
  };
  protoOf(Mode).hashCode = function () {
    return Mode__hashCode_impl_7u94z5(this.r5o_1);
  };
  protoOf(Mode).equals = function (other) {
    return Mode__equals_impl_uwixm3(this.r5o_1, other);
  };
  function LineHeightStyle(alignment, trim, mode) {
    Companion_getInstance_41();
    this.m5o_1 = alignment;
    this.n5o_1 = trim;
    this.o5o_1 = mode;
  }
  protoOf(LineHeightStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineHeightStyle))
      return false;
    if (!equals(this.m5o_1, other.m5o_1))
      return false;
    if (!(this.n5o_1 === other.n5o_1))
      return false;
    if (!(this.o5o_1 === other.o5o_1))
      return false;
    return true;
  };
  protoOf(LineHeightStyle).hashCode = function () {
    var result = Alignment__hashCode_impl_omr6of(this.m5o_1);
    result = imul(31, result) + Trim__hashCode_impl_vclj5c(this.n5o_1) | 0;
    result = imul(31, result) + Mode__hashCode_impl_7u94z5(this.o5o_1) | 0;
    return result;
  };
  protoOf(LineHeightStyle).toString = function () {
    return 'LineHeightStyle(' + ('alignment=' + Alignment__toString_impl_on6yhu(this.m5o_1) + ', ') + ('trim=' + Trim__toString_impl_hxcm0x(this.n5o_1) + ',') + ('mode=' + Mode__toString_impl_dwwrtq(this.o5o_1)) + ')';
  };
  var ResolvedTextDirection_Ltr_instance;
  var ResolvedTextDirection_Rtl_instance;
  var ResolvedTextDirection_entriesInitialized;
  function ResolvedTextDirection_initEntries() {
    if (ResolvedTextDirection_entriesInitialized)
      return Unit_instance;
    ResolvedTextDirection_entriesInitialized = true;
    ResolvedTextDirection_Ltr_instance = new ResolvedTextDirection('Ltr', 0);
    ResolvedTextDirection_Rtl_instance = new ResolvedTextDirection('Rtl', 1);
  }
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
  function TextAlign__toString_impl_6ha6d3($this) {
    return $this === Companion_getInstance_42().t5l_1 ? 'Left' : $this === Companion_getInstance_42().u5l_1 ? 'Right' : $this === Companion_getInstance_42().v5l_1 ? 'Center' : $this === Companion_getInstance_42().w5l_1 ? 'Justify' : $this === Companion_getInstance_42().x5l_1 ? 'Start' : $this === Companion_getInstance_42().y5l_1 ? 'End' : $this === Companion_getInstance_42().z5l_1 ? 'Unspecified' : 'Invalid';
  }
  function Companion_28() {
    Companion_instance_29 = this;
    this.t5l_1 = _TextAlign___init__impl__99wz4v(1);
    this.u5l_1 = _TextAlign___init__impl__99wz4v(2);
    this.v5l_1 = _TextAlign___init__impl__99wz4v(3);
    this.w5l_1 = _TextAlign___init__impl__99wz4v(4);
    this.x5l_1 = _TextAlign___init__impl__99wz4v(5);
    this.y5l_1 = _TextAlign___init__impl__99wz4v(6);
    this.z5l_1 = _TextAlign___init__impl__99wz4v(-2147483648);
  }
  var Companion_instance_29;
  function Companion_getInstance_42() {
    if (Companion_instance_29 == null)
      new Companion_28();
    return Companion_instance_29;
  }
  function TextAlign__hashCode_impl_s8g35y($this) {
    return $this;
  }
  function TextAlign__equals_impl_latoh6($this, other) {
    if (!(other instanceof TextAlign))
      return false;
    if (!($this === (other instanceof TextAlign ? other.l5m_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextAlign(value) {
    Companion_getInstance_42();
    this.l5m_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return TextAlign__toString_impl_6ha6d3(this.l5m_1);
  };
  protoOf(TextAlign).hashCode = function () {
    return TextAlign__hashCode_impl_s8g35y(this.l5m_1);
  };
  protoOf(TextAlign).equals = function (other) {
    return TextAlign__equals_impl_latoh6(this.l5m_1, other);
  };
  var androidx_compose_ui_text_style_TextDecoration$stable;
  function Companion_29() {
    Companion_instance_30 = this;
    this.p5q_1 = new TextDecoration(0);
    this.q5q_1 = new TextDecoration(1);
    this.r5q_1 = new TextDecoration(2);
  }
  var Companion_instance_30;
  function Companion_getInstance_43() {
    if (Companion_instance_30 == null)
      new Companion_29();
    return Companion_instance_30;
  }
  function TextDecoration(mask) {
    Companion_getInstance_43();
    this.c5o_1 = mask;
  }
  protoOf(TextDecoration).s63 = function (other) {
    return (this.c5o_1 | other.c5o_1) === this.c5o_1;
  };
  protoOf(TextDecoration).toString = function () {
    if (this.c5o_1 === 0) {
      return 'TextDecoration.None';
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var values = ArrayList_init_$Create$();
    if (!((this.c5o_1 & Companion_getInstance_43().q5q_1.c5o_1) === 0)) {
      values.h('Underline');
    }
    if (!((this.c5o_1 & Companion_getInstance_43().r5q_1.c5o_1) === 0)) {
      values.h('LineThrough');
    }
    if (values.l() === 1) {
      return 'TextDecoration.' + values.m(0);
    }
    return 'TextDecoration[' + fastJoinToString(values, ', ') + ']';
  };
  protoOf(TextDecoration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextDecoration))
      return false;
    if (!(this.c5o_1 === other.c5o_1))
      return false;
    return true;
  };
  protoOf(TextDecoration).hashCode = function () {
    return this.c5o_1;
  };
  function _TextDirection___init__impl__lh8lzt(value) {
    return value;
  }
  function TextDirection__toString_impl_x3uh9t($this) {
    return $this === Companion_getInstance_44().h5l_1 ? 'Ltr' : $this === Companion_getInstance_44().i5l_1 ? 'Rtl' : $this === Companion_getInstance_44().j5l_1 ? 'Content' : $this === Companion_getInstance_44().k5l_1 ? 'ContentOrLtr' : $this === Companion_getInstance_44().l5l_1 ? 'ContentOrRtl' : $this === Companion_getInstance_44().m5l_1 ? 'Unspecified' : 'Invalid';
  }
  function Companion_30() {
    Companion_instance_31 = this;
    this.h5l_1 = _TextDirection___init__impl__lh8lzt(1);
    this.i5l_1 = _TextDirection___init__impl__lh8lzt(2);
    this.j5l_1 = _TextDirection___init__impl__lh8lzt(3);
    this.k5l_1 = _TextDirection___init__impl__lh8lzt(4);
    this.l5l_1 = _TextDirection___init__impl__lh8lzt(5);
    this.m5l_1 = _TextDirection___init__impl__lh8lzt(-2147483648);
  }
  var Companion_instance_31;
  function Companion_getInstance_44() {
    if (Companion_instance_31 == null)
      new Companion_30();
    return Companion_instance_31;
  }
  function TextDirection__hashCode_impl_g63nwg($this) {
    return $this;
  }
  function TextDirection__equals_impl_3fvxt0($this, other) {
    if (!(other instanceof TextDirection))
      return false;
    if (!($this === (other instanceof TextDirection ? other.m5m_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextDirection(value) {
    Companion_getInstance_44();
    this.m5m_1 = value;
  }
  protoOf(TextDirection).toString = function () {
    return TextDirection__toString_impl_x3uh9t(this.m5m_1);
  };
  protoOf(TextDirection).hashCode = function () {
    return TextDirection__hashCode_impl_g63nwg(this.m5m_1);
  };
  protoOf(TextDirection).equals = function (other) {
    return TextDirection__equals_impl_3fvxt0(this.m5m_1, other);
  };
  var androidx_compose_ui_text_style_TextForegroundStyle_Unspecified$stable;
  function Unspecified() {
  }
  protoOf(Unspecified).g4r = function () {
    return Companion_getInstance().f4r_1;
  };
  protoOf(Unspecified).w5o = function () {
    return null;
  };
  protoOf(Unspecified).e4l = function () {
    return NaN;
  };
  var Unspecified_instance;
  function Unspecified_getInstance() {
    return Unspecified_instance;
  }
  function Companion_31() {
  }
  protoOf(Companion_31).u5o = function (color) {
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = new ColorStyle(color);
    } else {
      tmp = Unspecified_instance;
    }
    return tmp;
  };
  protoOf(Companion_31).v5o = function (brush, alpha) {
    var tmp;
    if (brush == null) {
      tmp = Unspecified_instance;
    } else {
      if (brush instanceof SolidColor) {
        tmp = this.u5o(modulate(brush.d4q_1, alpha));
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
  var Companion_instance_32;
  function Companion_getInstance_45() {
    return Companion_instance_32;
  }
  function TextForegroundStyle$merge$lambda(this$0) {
    return function () {
      return this$0.u63_1;
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
    this.t63_1 = value;
    this.u63_1 = alpha;
  }
  protoOf(BrushStyle).e4l = function () {
    return this.u63_1;
  };
  protoOf(BrushStyle).g4r = function () {
    return Companion_getInstance().f4r_1;
  };
  protoOf(BrushStyle).w5o = function () {
    return this.t63_1;
  };
  protoOf(BrushStyle).toString = function () {
    return 'BrushStyle(value=' + toString_0(this.t63_1) + ', alpha=' + this.u63_1 + ')';
  };
  protoOf(BrushStyle).hashCode = function () {
    var result = hashCode(this.t63_1);
    result = imul(result, 31) + getNumberHashCode(this.u63_1) | 0;
    return result;
  };
  protoOf(BrushStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BrushStyle))
      return false;
    var tmp0_other_with_cast = other instanceof BrushStyle ? other : THROW_CCE();
    if (!equals(this.t63_1, tmp0_other_with_cast.t63_1))
      return false;
    if (!equals(this.u63_1, tmp0_other_with_cast.u63_1))
      return false;
    return true;
  };
  function takeOrElse_0(_this__u8e3s4, block) {
    return isNaN_0(_this__u8e3s4) ? block() : _this__u8e3s4;
  }
  function ColorStyle(value) {
    this.v63_1 = value;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.v63_1;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      var tmp$ret$1 = 'ColorStyle value must be specified, use TextForegroundStyle.Unspecified instead.';
      throwIllegalArgumentException(tmp$ret$1);
    }
  }
  protoOf(ColorStyle).g4r = function () {
    return this.v63_1;
  };
  protoOf(ColorStyle).w5o = function () {
    return null;
  };
  protoOf(ColorStyle).e4l = function () {
    return _Color___get_alpha__impl__wcfyv1(this.g4r());
  };
  protoOf(ColorStyle).toString = function () {
    return 'ColorStyle(value=' + Color__toString_impl_hpzmaq(this.v63_1) + ')';
  };
  protoOf(ColorStyle).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.v63_1);
  };
  protoOf(ColorStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ColorStyle ? other : THROW_CCE();
    if (!equals(this.v63_1, tmp0_other_with_cast.v63_1))
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
      tmp = Companion_instance_32.u5o(lerp(start.g4r(), stop.g4r(), fraction));
    } else {
      var tmp_1;
      if (start instanceof BrushStyle) {
        tmp_1 = stop instanceof BrushStyle;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp = Companion_instance_32.v5o(lerpDiscrete(start.w5o(), stop.w5o(), fraction), lerp_3(start.u63_1, stop.u63_1, fraction));
      } else {
        tmp = lerpDiscrete(start, stop, fraction);
      }
    }
    return tmp;
  }
  var androidx_compose_ui_text_style_TextGeometricTransform$stable;
  function Companion_32() {
    Companion_instance_33 = this;
    this.y5p_1 = new TextGeometricTransform(1.0, 0.0);
  }
  var Companion_instance_33;
  function Companion_getInstance_46() {
    if (Companion_instance_33 == null)
      new Companion_32();
    return Companion_instance_33;
  }
  function TextGeometricTransform(scaleX, skewX) {
    Companion_getInstance_46();
    scaleX = scaleX === VOID ? 1.0 : scaleX;
    skewX = skewX === VOID ? 0.0 : skewX;
    this.d5o_1 = scaleX;
    this.e5o_1 = skewX;
  }
  protoOf(TextGeometricTransform).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextGeometricTransform))
      return false;
    if (!(this.d5o_1 === other.d5o_1))
      return false;
    if (!(this.e5o_1 === other.e5o_1))
      return false;
    return true;
  };
  protoOf(TextGeometricTransform).hashCode = function () {
    var result = getNumberHashCode(this.d5o_1);
    result = imul(31, result) + getNumberHashCode(this.e5o_1) | 0;
    return result;
  };
  protoOf(TextGeometricTransform).toString = function () {
    return 'TextGeometricTransform(scaleX=' + this.d5o_1 + ', skewX=' + this.e5o_1 + ')';
  };
  function lerp_10(start, stop, fraction) {
    return new TextGeometricTransform(lerp_3(start.d5o_1, stop.d5o_1, fraction), lerp_3(start.e5o_1, stop.e5o_1, fraction));
  }
  var androidx_compose_ui_text_style_TextIndent$stable;
  function Companion_33() {
    Companion_instance_34 = this;
    this.k5m_1 = new TextIndent_0();
  }
  var Companion_instance_34;
  function Companion_getInstance_47() {
    if (Companion_instance_34 == null)
      new Companion_33();
    return Companion_instance_34;
  }
  function TextIndent_0(firstLine, restLine) {
    Companion_getInstance_47();
    firstLine = firstLine === VOID ? get_sp(0) : firstLine;
    restLine = restLine === VOID ? get_sp(0) : restLine;
    this.f5o_1 = firstLine;
    this.g5o_1 = restLine;
  }
  protoOf(TextIndent_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent_0))
      return false;
    if (!equals(this.f5o_1, other.f5o_1))
      return false;
    if (!equals(this.g5o_1, other.g5o_1))
      return false;
    return true;
  };
  protoOf(TextIndent_0).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.f5o_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.g5o_1) | 0;
    return result;
  };
  protoOf(TextIndent_0).toString = function () {
    return 'TextIndent(firstLine=' + TextUnit__toString_impl_51ghw0(this.f5o_1) + ', restLine=' + TextUnit__toString_impl_51ghw0(this.g5o_1) + ')';
  };
  function lerp_11(start, stop, fraction) {
    return new TextIndent_0(lerpTextUnitInheritable(start.f5o_1, stop.f5o_1, fraction), lerpTextUnitInheritable(start.g5o_1, stop.g5o_1, fraction));
  }
  function _TextOverflow___init__impl__obguoe(value) {
    return value;
  }
  function _TextOverflow___get_value__impl__vugm5i($this) {
    return $this;
  }
  function TextOverflow__toString_impl_10s0c2($this) {
    return $this === Companion_getInstance_48().o5j_1 ? 'Clip' : $this === Companion_getInstance_48().p5j_1 ? 'Ellipsis' : $this === Companion_getInstance_48().s5j_1 ? 'MiddleEllipsis' : $this === Companion_getInstance_48().q5j_1 ? 'Visible' : $this === Companion_getInstance_48().r5j_1 ? 'StartEllipsis' : 'Invalid';
  }
  function Companion_34() {
    Companion_instance_35 = this;
    this.o5j_1 = _TextOverflow___init__impl__obguoe(1);
    this.p5j_1 = _TextOverflow___init__impl__obguoe(2);
    this.q5j_1 = _TextOverflow___init__impl__obguoe(3);
    this.r5j_1 = _TextOverflow___init__impl__obguoe(4);
    this.s5j_1 = _TextOverflow___init__impl__obguoe(5);
  }
  var Companion_instance_35;
  function Companion_getInstance_48() {
    if (Companion_instance_35 == null)
      new Companion_34();
    return Companion_instance_35;
  }
  function TextOverflow__hashCode_impl_kqdwgt($this) {
    return $this;
  }
  function TextOverflow__equals_impl_jkxdof($this, other) {
    if (!(other instanceof TextOverflow))
      return false;
    if (!($this === (other instanceof TextOverflow ? other.w63_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextOverflow(value) {
    Companion_getInstance_48();
    this.w63_1 = value;
  }
  protoOf(TextOverflow).toString = function () {
    return TextOverflow__toString_impl_10s0c2(this.w63_1);
  };
  protoOf(TextOverflow).hashCode = function () {
    return TextOverflow__hashCode_impl_kqdwgt(this.w63_1);
  };
  protoOf(TextOverflow).equals = function (other) {
    return TextOverflow__equals_impl_jkxdof(this.w63_1, other);
  };
  function userPreferredLanguages() {
    return toList(getUserPreferredLanguagesAsArray());
  }
  function getUserPreferredLanguagesAsArray() {
    return window.navigator.languages;
  }
  var androidx_compose_ui_text_AtomicReference$stable;
  function AtomicReference(value) {
    this.i62_1 = atomic$ref$1(value);
  }
  protoOf(AtomicReference).j13 = function () {
    return this.i62_1.kotlinx$atomicfu$value;
  };
  protoOf(AtomicReference).z2p = function (value) {
    this.i62_1.kotlinx$atomicfu$value = value;
  };
  protoOf(AtomicReference).e2p = function (expect, newValue) {
    return this.i62_1.atomicfu$compareAndSet(expect, newValue);
  };
  function isNonSpacingMark(_this__u8e3s4) {
    return CharDirection_getInstance().j4d(_this__u8e3s4) === 17;
  }
  function isNeutralDirection(_this__u8e3s4) {
    switch (CharDirection_getInstance().j4d(_this__u8e3s4)) {
      case 10:
      case 9:
      case 18:
        return true;
      default:
        return false;
    }
  }
  function strongDirectionType(_this__u8e3s4) {
    switch (CharDirection_getInstance().j4d(_this__u8e3s4)) {
      case 0:
        return Companion_getInstance_49().y63_1;
      case 1:
      case 13:
        return Companion_getInstance_49().z63_1;
      default:
        return Companion_getInstance_49().x63_1;
    }
  }
  function toCharArray_0(_this__u8e3s4, destination, destinationOffset, startIndex, endIndex) {
    // Inline function 'kotlin.collections.forEach' call
    var progression = until(startIndex, endIndex);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
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
  function checkEvicted($this, now) {
    var expireTime = subtract(now, $this.a64_1);
    var iterator = $this.d64_1.a2().i();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    $l$loop: while (_iterator__ex2g4s.j()) {
      var entry = _iterator__ex2g4s.k();
      if (compare(entry.v1(), expireTime) < 0) {
        $this.c64_1.c2(entry.u1());
        iterator.q3();
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
    this.a64_1 = expireAfterNanos;
    this.b64_1 = currentNanos;
    this.c64_1 = HashMap_init_$Create$();
    this.d64_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ExpireAfterAccessCache).e64 = function (key, loader) {
    this.d64_1.c2(key);
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.c64_1;
    var value = this_0.y1(key);
    var tmp;
    if (value == null) {
      var answer = loader(key);
      this_0.b2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    // Inline function 'kotlin.also' call
    var this_1 = tmp;
    var now = this.b64_1();
    // Inline function 'kotlin.collections.set' call
    this.d64_1.b2(key, now);
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
  function Companion_35() {
    Companion_instance_36 = this;
    this.x63_1 = _StrongDirectionType___init__impl__59uet3(0);
    this.y63_1 = _StrongDirectionType___init__impl__59uet3(1);
    this.z63_1 = _StrongDirectionType___init__impl__59uet3(2);
  }
  var Companion_instance_36;
  function Companion_getInstance_49() {
    if (Companion_instance_36 == null)
      new Companion_35();
    return Companion_instance_36;
  }
  function firstStrongDirectionType(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var _iterator__ex2g4s = get_codePointsOutsideDirectionalIsolate(_this__u8e3s4).i();
    $l$loop: while (_iterator__ex2g4s.j()) {
      var codePoint = _iterator__ex2g4s.k();
      var strongDirectionType_0 = strongDirectionType(codePoint);
      var tmp;
      if (strongDirectionType_0 === Companion_getInstance_49().x63_1) {
        continue $l$loop;
      } else {
        tmp = strongDirectionType_0;
      }
      return tmp;
    }
    return Companion_getInstance_49().x63_1;
  }
  function findPrecedingBreak(_this__u8e3s4, index) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var it = Companion_getInstance_4().w3w();
    it.e3x(_this__u8e3s4);
    return it.c3x(index);
  }
  function findFollowingBreak(_this__u8e3s4, index) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var it = Companion_getInstance_4().w3w();
    it.e3x(_this__u8e3s4);
    return it.d3x(index);
  }
  function codePointAt(_this__u8e3s4, index) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var high = charSequenceGet(_this__u8e3s4, index);
    if (isHighSurrogate(high) && (index + 1 | 0) < charSequenceLength(_this__u8e3s4)) {
      var low = charSequenceGet(_this__u8e3s4, index + 1 | 0);
      if (isLowSurrogate(low)) {
        return toCodePoint(Companion_getInstance_5(), high, low);
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
    this.n64_1 = $this_codePointsOutsideDirectionalIsolate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).r64 = function ($this$sequence, $completion) {
    var tmp = this.s64($this$sequence, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).f9 = function (p1, $completion) {
    return this.r64(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 5;
            this.p64_1 = 0;
            this.q64_1 = get_codePoints(this.n64_1).i();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!this.q64_1.j()) {
              this.n8_1 = 4;
              continue $sm;
            }

            var codePoint = this.q64_1.k();
            var progression = get_PUSH_DIRECTIONAL_ISOLATE_RANGE();
            var containsLower = progression.y_1;
            if (codePoint <= progression.z_1 ? containsLower <= codePoint : false) {
              this.p64_1 = this.p64_1 + 1 | 0;
              this.n8_1 = 3;
              continue $sm;
            } else {
              if (codePoint === 8297) {
                if (this.p64_1 > 0) {
                  this.p64_1 = this.p64_1 - 1 | 0;
                }
                this.n8_1 = 3;
                continue $sm;
              } else {
                if (this.p64_1 === 0) {
                  this.n8_1 = 2;
                  suspendResult = this.o64_1.le(codePoint, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.n8_1 = 3;
                  continue $sm;
                }
              }
            }

          case 2:
            this.n8_1 = 3;
            continue $sm;
          case 3:
            this.n8_1 = 1;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 5) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).s64 = function ($this$sequence, completion) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj(this.n64_1, completion);
    i.o64_1 = $this$sequence;
    return i;
  };
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.r64($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation) {
    this.b65_1 = $this_codePoints;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePoints_$slambda_43x8dt).r64 = function ($this$sequence, $completion) {
    var tmp = this.s64($this$sequence, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(_get_codePoints_$slambda_43x8dt).f9 = function (p1, $completion) {
    return this.r64(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePoints_$slambda_43x8dt).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            this.d65_1 = 0;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!(this.d65_1 < charSequenceLength(this.b65_1))) {
              this.n8_1 = 3;
              continue $sm;
            }

            this.e65_1 = codePointAt(this.b65_1, this.d65_1);
            this.n8_1 = 2;
            suspendResult = this.c65_1.le(this.e65_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.d65_1 = this.d65_1 + charCount(this.e65_1) | 0;
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
  protoOf(_get_codePoints_$slambda_43x8dt).s64 = function ($this$sequence, completion) {
    var i = new _get_codePoints_$slambda_43x8dt(this.b65_1, completion);
    i.c65_1 = $this$sequence;
    return i;
  };
  function _get_codePoints_$slambda_43x8dt_0($this_codePoints, resultContinuation) {
    var i = new _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.r64($this$sequence, $completion);
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
    switch (currentPlatform().m2_1) {
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
      return p0.g65();
    };
  }
  function Companion_36() {
    Companion_instance_37 = this;
    var tmp = this;
    tmp.f65_1 = lazy_0(FontRasterizationSettings$Companion$PlatformDefault$delegate$lambda);
  }
  protoOf(Companion_36).g65 = function () {
    var tmp0 = this.f65_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('PlatformDefault', 1, tmp, FontRasterizationSettings$Companion$_get_PlatformDefault_$ref_q7exdb(), null);
    return tmp0.v1();
  };
  var Companion_instance_37;
  function Companion_getInstance_50() {
    if (Companion_instance_37 == null)
      new Companion_36();
    return Companion_instance_37;
  }
  function FontRasterizationSettings(smoothing, hinting, subpixelPositioning, autoHintingForced) {
    Companion_getInstance_50();
    this.h65_1 = smoothing;
    this.i65_1 = hinting;
    this.j65_1 = subpixelPositioning;
    this.k65_1 = autoHintingForced;
  }
  protoOf(FontRasterizationSettings).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof FontRasterizationSettings))
      THROW_CCE();
    if (!this.h65_1.equals(other.h65_1))
      return false;
    if (!this.i65_1.equals(other.i65_1))
      return false;
    if (!(this.j65_1 === other.j65_1))
      return false;
    return this.k65_1 === other.k65_1;
  };
  protoOf(FontRasterizationSettings).hashCode = function () {
    var result = this.h65_1.hashCode();
    result = imul(31, result) + this.i65_1.hashCode() | 0;
    result = imul(31, result) + getBooleanHashCode(this.j65_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.k65_1) | 0;
    return result;
  };
  protoOf(FontRasterizationSettings).toString = function () {
    return 'FontRasterizationSettings(smoothing=' + this.h65_1.toString() + ', ' + ('hinting=' + this.i65_1.toString() + ', ') + ('subpixelPositioning=' + this.j65_1 + ', ') + ('autoHintingForced=' + this.k65_1 + ')');
  };
  var FontSmoothing_None_instance;
  var FontSmoothing_AntiAlias_instance;
  var FontSmoothing_SubpixelAntiAlias_instance;
  var FontSmoothing_entriesInitialized;
  function FontSmoothing_initEntries() {
    if (FontSmoothing_entriesInitialized)
      return Unit_instance;
    FontSmoothing_entriesInitialized = true;
    FontSmoothing_None_instance = new FontSmoothing('None', 0);
    FontSmoothing_AntiAlias_instance = new FontSmoothing('AntiAlias', 1);
    FontSmoothing_SubpixelAntiAlias_instance = new FontSmoothing('SubpixelAntiAlias', 2);
  }
  function FontSmoothing(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var FontHinting_None_instance;
  var FontHinting_Slight_instance;
  var FontHinting_Normal_instance;
  var FontHinting_Full_instance;
  var FontHinting_entriesInitialized;
  function FontHinting_initEntries() {
    if (FontHinting_entriesInitialized)
      return Unit_instance;
    FontHinting_entriesInitialized = true;
    FontHinting_None_instance = new FontHinting('None', 0);
    FontHinting_Slight_instance = new FontHinting('Slight', 1);
    FontHinting_Normal_instance = new FontHinting('Normal', 2);
    FontHinting_Full_instance = new FontHinting('Full', 3);
  }
  function FontHinting(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toSkFontRastrSettings(_this__u8e3s4) {
    return new FontRastrSettings(toSkFontEdging(_this__u8e3s4.h65_1), toSkFontHinting(_this__u8e3s4.i65_1), _this__u8e3s4.j65_1);
  }
  function toSkFontEdging(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.m2_1) {
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
    switch (_this__u8e3s4.m2_1) {
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
  function FontSmoothing_AntiAlias_getInstance() {
    FontSmoothing_initEntries();
    return FontSmoothing_AntiAlias_instance;
  }
  function FontHinting_Slight_getInstance() {
    FontHinting_initEntries();
    return FontHinting_Slight_instance;
  }
  function FontHinting_Normal_getInstance() {
    FontHinting_initEntries();
    return FontHinting_Normal_instance;
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
    return Unit_instance;
  }
  function PlatformParagraphStyleSaver$lambda_0(it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return PlatformParagraphStyle_init_$Create$();
  }
  function LineBreakSaver$lambda($this$Saver, it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return _LineBreak___get_mask__impl__je2e1t(it.n5m_1);
  }
  function LineBreakSaver$lambda_0(it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    var mask = typeof it === 'number' ? it : THROW_CCE();
    var tmp;
    switch (mask) {
      case 1:
        tmp = Companion_getInstance_54().a5m_1;
        break;
      case 2:
        tmp = Companion_getInstance_54().b5m_1;
        break;
      case 3:
        tmp = Companion_getInstance_54().c5m_1;
        break;
      default:
        tmp = Companion_getInstance_54().d5m_1;
        break;
    }
    var tmp_0 = tmp;
    return tmp_0 == null ? null : new LineBreak(tmp_0);
  }
  function TextMotionSaver$lambda($this$Saver, it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return equals(it, Companion_getInstance_55().p5m_1) ? 0 : 1;
  }
  function TextMotionSaver$lambda_0(it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    var tmp;
    if (equals(it, 0)) {
      tmp = Companion_getInstance_55().p5m_1;
    } else {
      tmp = Companion_getInstance_55().q5m_1;
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
  function _set_paragraph__p1bfvb($this, value) {
    $this.s65_1 = value;
    $this.t65_1 = null;
  }
  function _get_ellipsis__kt5xpi($this) {
    return listOf([new TextOverflow(Companion_getInstance_48().p5j_1), new TextOverflow(Companion_getInstance_48().s5j_1), new TextOverflow(Companion_getInstance_48().r5j_1)]).t(new TextOverflow($this.p65_1)) ? '\u2026' : '';
  }
  function _get_text__de5ose($this) {
    return $this.n65_1.u65_1;
  }
  function lineMetricsForOffset($this, offset) {
    var tmp;
    if (0 <= offset ? offset <= _get_text__de5ose($this).length : false) {
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
    var tmp0_subject = $this.r65_1.j66().q5s();
    return tmp0_subject === Companion_getInstance_42().t5l_1 ? 0.0 : tmp0_subject === Companion_getInstance_42().u5l_1 ? $this.s3u() : tmp0_subject === Companion_getInstance_42().v5l_1 ? $this.s3u() / 2 : tmp0_subject === Companion_getInstance_42().x5l_1 ? isRtl ? $this.s3u() : 0.0 : tmp0_subject === Companion_getInstance_42().y5l_1 ? isRtl ? 0.0 : $this.s3u() : 0.0;
  }
  function _get_lineMetrics__5iiuki($this) {
    var tmp0_elvis_lhs = $this.t65_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = receiveLineMetrics($this);
      $this.t65_1 = this_0;
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
    var this_0 = _get_text__de5ose($this);
    if (charSequenceLength(this_0) === 0) {
      tmp = $this.r65_1.k66($this.s65_1);
    } else {
      tmp = $this.s65_1.k4f();
    }
    var lineMetrics = tmp;
    var fontMetrics = $this.l66().h40();
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(lineMetrics.length === 0)) {
      lineMetrics[0] = trimFirstAscent(lineMetrics[0], fontMetrics, $this.r65_1.j66());
      lineMetrics[lineMetrics.length - 1 | 0] = trimLastDescent(lineMetrics[lineMetrics.length - 1 | 0], fontMetrics, $this.r65_1.j66());
    }
    return lineMetrics;
  }
  function getBoxForwardByOffset($this, offset) {
    if (!(0 <= offset ? offset <= _get_text__de5ose($this).length : false))
      return null;
    var to = offset + 1 | 0;
    while (to <= _get_text__de5ose($this).length) {
      var box = firstOrNull($this.s65_1.g4f(offset, to, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (!(box == null)) {
        return box;
      }
      to = to + 1 | 0;
    }
    return null;
  }
  function getBoxBackwardByOffset($this, offset, end) {
    if (!(0 <= offset ? offset <= _get_text__de5ose($this).length : false))
      return null;
    var from = offset - 1 | 0;
    var isRtl = $this.n65_1.a66_1.equals(ResolvedTextDirection_Rtl_getInstance());
    while (from >= 0) {
      var box = firstOrNull($this.s65_1.g4f(from, end, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (box == null)
        from = from - 1 | 0;
      else if (charCodeAt(_get_text__de5ose($this), from) === _Char___init__impl__6a9atx(10)) {
        var tmp;
        if (!isRtl) {
          var bottom = box.x4g_1.t3x_1 + box.x4g_1.t3x_1 - box.x4g_1.r3x_1;
          var rect = new Rect_0(0.0, box.x4g_1.t3x_1, 0.0, bottom);
          return new TextBox(rect, box.z4g());
        } else {
          var tmp_0;
          if (from === get_lastIndex_1(_get_text__de5ose($this))) {
            var bottom_0 = box.x4g_1.t3x_1 + box.x4g_1.t3x_1 - box.x4g_1.r3x_1;
            var rect_0 = new Rect_0($this.s3u(), box.x4g_1.t3x_1, $this.s3u(), bottom_0);
            tmp_0 = new TextBox(rect_0, box.z4g());
          } else {
            var nextBox = first_0($this.s65_1.g4f(offset, offset + 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
            var rect_1 = new Rect_0(nextBox.x4g_1.q3x_1, nextBox.x4g_1.r3x_1, nextBox.x4g_1.q3x_1, nextBox.x4g_1.t3x_1);
            tmp_0 = new TextBox(rect_1, nextBox.z4g());
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
  function SkiaParagraph$lineMetricsForOffset$lambda($offset) {
    return function (it) {
      var tmp;
      if ($offset < it.l4e_1) {
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
      if ($vertical < it.t4e_1 + it.o4e_1) {
        tmp = 1;
      } else {
        tmp = -1;
      }
      return tmp;
    };
  }
  function SkiaParagraph(paragraphIntrinsics, maxLines, overflow, constraints) {
    this.n65_1 = paragraphIntrinsics;
    this.o65_1 = maxLines;
    this.p65_1 = overflow;
    this.q65_1 = constraints;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = this.n65_1.m66();
    this_0.n66(this.o65_1, _get_ellipsis__kt5xpi(this));
    tmp.r65_1 = this_0;
    this.s65_1 = this.r65_1.o66(this.s3u());
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(_Constraints___get_minHeight__impl__ev4bgx(this.q65_1) === 0 && _Constraints___get_minWidth__impl__hi9lfi(this.q65_1) === 0)) {
      var tmp$ret$2 = 'Setting Constraints.minWidth and Constraints.minHeight is not supported, these should be the default zero values instead.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(this.o65_1 >= 1)) {
      var tmp$ret$4 = 'maxLines should be greater than 0';
      throwIllegalArgumentException(tmp$ret$4);
    }
    var tmp0 = this.s3u();
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.t3u();
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$7 = _Size___init__impl__aywn0g(tmp$ret$6);
    this.r65_1.p66(tmp$ret$7);
    _set_paragraph__p1bfvb(this, this.r65_1.o66(this.s3u()));
    if (this.p65_1 === Companion_getInstance_48().p5j_1 && this.s65_1.t3u() > _Constraints___get_maxHeight__impl__dt3e8z(this.q65_1) && this.o65_1 > 1) {
      var calculatedMaxLines = numberOfLinesThatFitMaxHeight(this, _Constraints___get_maxHeight__impl__dt3e8z(this.q65_1));
      if (calculatedMaxLines >= 0 && !(calculatedMaxLines === this.o65_1)) {
        this.r65_1.n66(coerceAtLeast(calculatedMaxLines, 1), _get_ellipsis__kt5xpi(this));
        _set_paragraph__p1bfvb(this, this.r65_1.o66(this.s3u()));
      }
    }
    this.t65_1 = null;
  }
  protoOf(SkiaParagraph).l66 = function () {
    return this.r65_1.q66();
  };
  protoOf(SkiaParagraph).s3u = function () {
    return _Constraints___get_maxWidth__impl__uuyqc(this.q65_1);
  };
  protoOf(SkiaParagraph).t3u = function () {
    return this.s65_1.t3u();
  };
  protoOf(SkiaParagraph).a4f = function () {
    return this.n65_1.c66_1;
  };
  protoOf(SkiaParagraph).b4f = function () {
    return this.n65_1.d66_1;
  };
  protoOf(SkiaParagraph).a5k = function () {
    var tmp0_safe_receiver = firstOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      tmp = tmp0_safe_receiver.t4e_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).b5k = function () {
    var tmp0_safe_receiver = lastOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      tmp = tmp0_safe_receiver.t4e_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).x5j = function () {
    return this.s65_1.d4f();
  };
  protoOf(SkiaParagraph).w5j = function () {
    var tmp;
    if (_get_text__de5ose(this) === '' || this.s65_1.l4f() < 1) {
      tmp = 1;
    } else {
      tmp = this.s65_1.l4f();
    }
    return tmp;
  };
  protoOf(SkiaParagraph).y5j = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.s65_1.h4f();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0 = toComposeRect(item.x4g_1);
      destination.h(tmp$ret$0);
    }
    return destination;
  };
  protoOf(SkiaParagraph).m5j = function (start, end) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!((0 <= start ? start <= end : false) && end <= _get_text__de5ose(this).length)) {
      var tmp$ret$0 = 'start(' + start + ') or end(' + end + ') is out of range [0..' + _get_text__de5ose(this).length + '],' + ' or start > end!';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var boxes = this.s65_1.g4f(start, end, RectHeightMode_MAX_getInstance(), RectWidthMode_TIGHT_getInstance());
    var path = Path();
    var inductionVariable = 0;
    var last = boxes.length;
    while (inductionVariable < last) {
      var b = boxes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      asSkiaPath(path).f45(b.x4g_1);
    }
    return path;
  };
  protoOf(SkiaParagraph).u5k = function (offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= offset ? offset <= _get_text__de5ose(this).length : false)) {
      var tmp$ret$0 = 'offset(' + offset + ') is out of bounds [0,' + _get_text__de5ose(this).length + ']';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var horizontal = this.o5k(offset, true);
    var line = ensureNotNull(lineMetricsForOffset(this, offset));
    var isNewEmptyLine = (offset - 1 | 0) === line.i4e_1 && offset === _get_text__de5ose(this).length;
    var metrics = this.l66().h40();
    // Inline function 'kotlin.let' call
    var it = line.n4e_1;
    var tmp;
    if (isNewEmptyLine) {
      var ascent = -metrics.b41_1;
      tmp = coerceAtMost_0(it, ascent);
    } else {
      tmp = it;
    }
    var asc = tmp;
    // Inline function 'kotlin.let' call
    var it_0 = line.o4e_1;
    var tmp_0;
    if (isNewEmptyLine) {
      var descent = metrics.c41_1;
      tmp_0 = coerceAtMost_0(it_0, descent);
    } else {
      tmp_0 = it_0;
    }
    var desc = tmp_0;
    return new Rect_1(horizontal, line.t4e_1 - asc, horizontal, line.t4e_1 + desc);
  };
  protoOf(SkiaParagraph).w5k = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s4e_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).y5k = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v4e();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).z5k = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.math.floor' call
      var x = tmp0_safe_receiver.t4e_1 - tmp0_safe_receiver.n4e_1;
      tmp = Math.floor(x);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).a5l = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.math.floor' call
      var x = tmp0_safe_receiver.t4e_1 + tmp0_safe_receiver.o4e_1;
      tmp = Math.floor(x);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).b5l = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q4e_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).c5l = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i4e_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).d5l = function (lineIndex, visibleEnd) {
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
      if (lineIndex > 0 && metrics.i4e_1 < _get_lineMetrics__5iiuki(this)[lineIndex - 1 | 0].j4e_1) {
        tmp_1 = metrics.j4e_1;
      } else if (metrics.i4e_1 < _get_text__de5ose(this).length && charCodeAt(_get_text__de5ose(this), metrics.i4e_1) === _Char___init__impl__6a9atx(10)) {
        tmp_1 = metrics.i4e_1;
      } else {
        tmp_1 = metrics.k4e_1;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = metrics.j4e_1;
    }
    return tmp_0;
  };
  protoOf(SkiaParagraph).v5k = function (offset) {
    return offset < 0 ? 0 : offset > _get_text__de5ose(this).length ? this.w5j() - 1 | 0 : ensureNotNull(lineMetricsForOffset(this, offset)).u4e_1;
  };
  protoOf(SkiaParagraph).h5k = function (vertical) {
    var tmp0_safe_receiver = getLineMetricsForVerticalPosition(this, vertical);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u4e_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).o5k = function (offset, usePrimaryDirection) {
    var prevBox = getBoxBackwardByOffset$default(this, offset);
    var nextBox = getBoxForwardByOffset(this, offset);
    var isRtl = this.n65_1.a66_1.equals(ResolvedTextDirection_Rtl_getInstance());
    var isLtr = !isRtl;
    return prevBox == null && nextBox == null ? getAlignedStartingPosition(this, isRtl) : prevBox == null ? cursorHorizontalPosition(ensureNotNull(nextBox), true) : nextBox == null ? cursorHorizontalPosition(prevBox) : nextBox.z4g().equals(prevBox.z4g()) ? cursorHorizontalPosition(nextBox, true) : isLtr && prevBox.z4g().equals(Direction_LTR_getInstance()) ? cursorHorizontalPosition(nextBox, true) : isRtl && prevBox.z4g().equals(Direction_RTL_getInstance()) ? cursorHorizontalPosition(nextBox, true) : usePrimaryDirection ? cursorHorizontalPosition(prevBox) : cursorHorizontalPosition(nextBox, true);
  };
  protoOf(SkiaParagraph).p5k = function (offset) {
    return this.n65_1.a66_1;
  };
  protoOf(SkiaParagraph).q5k = function (offset) {
    var tmp0_safe_receiver = getBoxForwardByOffset(this, offset);
    var tmp1_subject = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z4g();
    var tmp;
    switch (tmp1_subject == null ? -1 : tmp1_subject.m2_1) {
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
  protoOf(SkiaParagraph).k5k = function (position) {
    var tmp = this.s65_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(position);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(position);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$7 = floatFromBits(bits_0);
    var initialGlyphPosition = tmp.i4f(tmp_0, tmp$ret$7).q4g_1;
    var glyphPosition = initialGlyphPosition;
    if (0 <= glyphPosition ? glyphPosition < _get_text__de5ose(this).length : false) {
      var isNonSpacingMark_0 = isNonSpacingMark(codePointAt(_get_text__de5ose(this), glyphPosition));
      if (isNonSpacingMark_0) {
        var precedingBreak = findPrecedingBreak(_get_text__de5ose(this), glyphPosition);
        var followingBreak = findFollowingBreak(_get_text__de5ose(this), glyphPosition);
        if (!(precedingBreak === glyphPosition) && !(followingBreak === glyphPosition)) {
          glyphPosition = followingBreak;
        }
      }
    }
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(position);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    var tmp$ret$11 = floatFromBits(bits_1);
    var tmp0_elvis_lhs = getLineMetricsForVerticalPosition(this, tmp$ret$11);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      return glyphPosition;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    var expectedLine = tmp_1;
    var isNotEmptyLine = expectedLine.i4e_1 < expectedLine.j4e_1;
    var tmp_2;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(position);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    if (floatFromBits(bits_2) > expectedLine.s4e_1) {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_3 = _Offset___get_packedValue__impl__xh2k8q(position);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_3 = convertToInt(shiftRight(value_3, 32));
      tmp_2 = floatFromBits(bits_3) < expectedLine.v4e();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      return glyphPosition;
    }
    var tmp_3;
    if (isNotEmptyLine) {
      tmp_3 = this.s65_1.g4f(expectedLine.i4e_1, expectedLine.m4e_1 ? expectedLine.j4e_1 : expectedLine.j4e_1 - 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance());
    } else {
      tmp_3 = null;
    }
    var rects = tmp_3;
    var tmp2_safe_receiver = rects == null ? null : firstOrNull(rects);
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.x4g_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.q3x_1;
    var leftX = tmp4_elvis_lhs == null ? expectedLine.s4e_1 : tmp4_elvis_lhs;
    var tmp6_safe_receiver = rects == null ? null : lastOrNull(rects);
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.x4g_1;
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.s3x_1;
    var rightX = tmp8_elvis_lhs == null ? expectedLine.v4e() : tmp8_elvis_lhs;
    if (leftX === rightX) {
      return glyphPosition;
    }
    var tmp_4;
    if (isNotEmptyLine && expectedLine.k4e_1 > 0) {
      var lastCharIndex = expectedLine.k4e_1 - 1 | 0;
      var tmp_5;
      if (lastCharIndex >= 0 && lastCharIndex < _get_text__de5ose(this).length) {
        tmp_5 = isNonSpacingMark(codePointAt(_get_text__de5ose(this), lastCharIndex));
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
    // Inline function 'kotlin.fromBits' call
    var bits_4 = convertToInt(shiftRight(value_4, 32));
    if (floatFromBits(bits_4) <= leftX) {
      var tmp_6 = this.s65_1;
      var tmp_7 = leftX + 1.0;
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_5 = _Offset___get_packedValue__impl__xh2k8q(position);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_5 = convertToInt(bitwiseAnd(value_5, new Long(-1, 0)));
      var tmp$ret$27 = floatFromBits(bits_5);
      correctedGlyphPosition = tmp_6.i4f(tmp_7, tmp$ret$27).q4g_1;
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_6 = _Offset___get_packedValue__impl__xh2k8q(position);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_6 = convertToInt(shiftRight(value_6, 32));
      if (floatFromBits(bits_6) >= rightX) {
        var tmp_8 = this.s65_1;
        var tmp_9 = rightX - 1.0;
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_7 = _Offset___get_packedValue__impl__xh2k8q(position);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_7 = convertToInt(bitwiseAnd(value_7, new Long(-1, 0)));
        var tmp$ret$35 = floatFromBits(bits_7);
        correctedGlyphPosition = tmp_8.i4f(tmp_9, tmp$ret$35).q4g_1;
        var tmp_10;
        if (0 <= correctedGlyphPosition ? correctedGlyphPosition <= (charSequenceLength(_get_text__de5ose(this)) - 1 | 0) : false) {
          tmp_10 = isNeutralDirection(codePointAt(_get_text__de5ose(this), correctedGlyphPosition));
        } else {
          tmp_10 = false;
        }
        var isNeutralChar = tmp_10;
        var tmp_11;
        if (!isNeutralChar) {
          var tmp9_safe_receiver = getBoxBackwardByOffset$default(this, correctedGlyphPosition);
          tmp_11 = equals(tmp9_safe_receiver == null ? null : tmp9_safe_receiver.z4g(), Direction_RTL_getInstance());
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
  protoOf(SkiaParagraph).n5k = function (offset) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= offset ? offset <= (charSequenceLength(_get_text__de5ose(this)) - 1 | 0) : false)) {
      var tmp$ret$0 = 'offset(' + offset + ') is out of bounds [0,' + _get_text__de5ose(this).length + ')';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var tmp0_elvis_lhs = getBoxForwardByOffset(this, offset);
    var box = tmp0_elvis_lhs == null ? ensureNotNull(getBoxBackwardByOffset(this, offset, _get_text__de5ose(this).length)) : tmp0_elvis_lhs;
    return toComposeRect(box.x4g_1);
  };
  protoOf(SkiaParagraph).r5k = function (offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= offset ? offset <= _get_text__de5ose(this).length : false)) {
      var tmp$ret$0 = 'offset(' + offset + ') is out of bounds [0,' + _get_text__de5ose(this).length + ']';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (offset < _get_text__de5ose(this).length && isWhitespace(charCodeAt(_get_text__de5ose(this), offset)) || offset === _get_text__de5ose(this).length) {
      var tmp;
      if (offset > 0 && !isWhitespace(charCodeAt(_get_text__de5ose(this), offset - 1 | 0))) {
        tmp = toTextRange(this.s65_1.j4f(offset - 1 | 0));
      } else {
        tmp = TextRange_1(offset, offset);
      }
      return tmp;
    }
    return toTextRange(this.s65_1.j4f(offset));
  };
  protoOf(SkiaParagraph).d5k = function (canvas, color, shadow, textDecoration, drawStyle, blendMode) {
    // Inline function 'kotlin.with' call
    var $this$with = this.r65_1;
    $this$with.r66(color);
    $this$with.s66(shadow, textDecoration);
    $this$with.t66(drawStyle);
    $this$with.u66(blendMode);
    var tmp$ret$1 = $this$with.o66(this.s3u());
    _set_paragraph__p1bfvb(this, tmp$ret$1);
    this.s65_1.f4f(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  protoOf(SkiaParagraph).f5k = function (canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode) {
    // Inline function 'kotlin.with' call
    var $this$with = this.r65_1;
    var tmp0 = this.s3u();
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.t3u();
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$1 = _Size___init__impl__aywn0g(tmp$ret$0);
    $this$with.v66(brush, tmp$ret$1, alpha);
    $this$with.s66(shadow, textDecoration);
    $this$with.t66(drawStyle);
    $this$with.u66(blendMode);
    var tmp$ret$3 = $this$with.o66(this.s3u());
    _set_paragraph__p1bfvb(this, tmp$ret$3);
    this.s65_1.f4f(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  function numberOfLinesThatFitMaxHeight(_this__u8e3s4, maxHeight) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.w5j();
    if (inductionVariable < last)
      do {
        var lineIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (_this__u8e3s4.a5l(lineIndex) > maxHeight)
          return lineIndex;
      }
       while (inductionVariable < last);
    return _this__u8e3s4.w5j();
  }
  function trimFirstAscent(_this__u8e3s4, fontMetrics, textStyle) {
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = textStyle.s5s();
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0)))
      return _this__u8e3s4;
    var tmp0_elvis_lhs = textStyle.u5s();
    var style = tmp0_elvis_lhs == null ? Companion_getInstance_41().r63_1 : tmp0_elvis_lhs;
    var tmp;
    if (Trim__isTrimFirstLineTop_impl_tqdsaa(style.n5o_1)) {
      tmp = -fontMetrics.b41_1;
    } else {
      tmp = _this__u8e3s4.n4e_1;
    }
    var ascent = tmp;
    return copy(_this__u8e3s4, VOID, VOID, VOID, VOID, VOID, ascent);
  }
  function trimLastDescent(_this__u8e3s4, fontMetrics, textStyle) {
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = textStyle.s5s();
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0)))
      return _this__u8e3s4;
    var tmp0_elvis_lhs = textStyle.u5s();
    var style = tmp0_elvis_lhs == null ? Companion_getInstance_41().r63_1 : tmp0_elvis_lhs;
    var tmp;
    if (Trim__isTrimLastLineBottom_impl_8k6x3e(style.n5o_1)) {
      tmp = fontMetrics.c41_1;
    } else {
      tmp = _this__u8e3s4.o4e_1;
    }
    var descent = tmp;
    return copy(_this__u8e3s4, VOID, VOID, VOID, VOID, VOID, VOID, descent);
  }
  function toTextRange(_this__u8e3s4) {
    return TextRange_1(_this__u8e3s4.t42_1, _this__u8e3s4.u42_1);
  }
  function copy(_this__u8e3s4, startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    startIndex = startIndex === VOID ? _this__u8e3s4.i4e_1 : startIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.j4e_1 : endIndex;
    endExcludingWhitespaces = endExcludingWhitespaces === VOID ? _this__u8e3s4.k4e_1 : endExcludingWhitespaces;
    endIncludingNewline = endIncludingNewline === VOID ? _this__u8e3s4.l4e_1 : endIncludingNewline;
    isHardBreak = isHardBreak === VOID ? _this__u8e3s4.m4e_1 : isHardBreak;
    ascent = ascent === VOID ? _this__u8e3s4.n4e_1 : ascent;
    descent = descent === VOID ? _this__u8e3s4.o4e_1 : descent;
    unscaledAscent = unscaledAscent === VOID ? _this__u8e3s4.p4e_1 : unscaledAscent;
    height = height === VOID ? _this__u8e3s4.q4e_1 : height;
    width = width === VOID ? _this__u8e3s4.r4e_1 : width;
    left = left === VOID ? _this__u8e3s4.s4e_1 : left;
    baseline = baseline === VOID ? _this__u8e3s4.t4e_1 : baseline;
    lineNumber = lineNumber === VOID ? _this__u8e3s4.u4e_1 : lineNumber;
    return new LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber);
  }
  function _TextDecorationLineStyle___init__impl__fccanb(value) {
    return value;
  }
  function TextDecorationLineStyle__toString_impl_uezvi9($this) {
    return $this === Companion_getInstance_51().w66_1 ? 'Solid' : $this === Companion_getInstance_51().x66_1 ? 'Double' : $this === Companion_getInstance_51().y66_1 ? 'Dotted' : $this === Companion_getInstance_51().z66_1 ? 'Dashed' : $this === Companion_getInstance_51().a67_1 ? 'Wavy' : 'Invalid';
  }
  function Companion_37() {
    Companion_instance_38 = this;
    this.w66_1 = _TextDecorationLineStyle___init__impl__fccanb(1);
    this.x66_1 = _TextDecorationLineStyle___init__impl__fccanb(2);
    this.y66_1 = _TextDecorationLineStyle___init__impl__fccanb(3);
    this.z66_1 = _TextDecorationLineStyle___init__impl__fccanb(4);
    this.a67_1 = _TextDecorationLineStyle___init__impl__fccanb(5);
  }
  var Companion_instance_38;
  function Companion_getInstance_51() {
    if (Companion_instance_38 == null)
      new Companion_37();
    return Companion_instance_38;
  }
  function TextDecorationLineStyle__hashCode_impl_8ntype($this) {
    return $this;
  }
  function TextDecorationLineStyle__equals_impl_3jy6m($this, other) {
    if (!(other instanceof TextDecorationLineStyle))
      return false;
    if (!($this === (other instanceof TextDecorationLineStyle ? other.b67_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextDecorationLineStyle(value) {
    Companion_getInstance_51();
    this.b67_1 = value;
  }
  protoOf(TextDecorationLineStyle).toString = function () {
    return TextDecorationLineStyle__toString_impl_uezvi9(this.b67_1);
  };
  protoOf(TextDecorationLineStyle).hashCode = function () {
    return TextDecorationLineStyle__hashCode_impl_8ntype(this.b67_1);
  };
  protoOf(TextDecorationLineStyle).equals = function (other) {
    return TextDecorationLineStyle__equals_impl_3jy6m(this.b67_1, other);
  };
  var androidx_compose_ui_text_PlatformTextStyle$stable;
  var androidx_compose_ui_text_PlatformParagraphStyle$stable;
  var androidx_compose_ui_text_PlatformSpanStyle$stable;
  function PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    PlatformTextStyle.call($this);
    $this.r5r_1 = spanStyle;
    $this.s5r_1 = paragraphStyle;
    return $this;
  }
  function PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(PlatformTextStyle)));
  }
  protoOf(PlatformTextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformTextStyle))
      return false;
    if (!equals(this.s5r_1, other.s5r_1))
      return false;
    if (!equals(this.r5r_1, other.r5r_1))
      return false;
    return true;
  };
  protoOf(PlatformTextStyle).hashCode = function () {
    var tmp0_safe_receiver = this.r5r_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.s5r_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  function PlatformTextStyle() {
  }
  function Companion_38() {
    Companion_instance_39 = this;
    this.r5m_1 = PlatformParagraphStyle_init_$Create$();
  }
  var Companion_instance_39;
  function Companion_getInstance_52() {
    if (Companion_instance_39 == null)
      new Companion_38();
    return Companion_instance_39;
  }
  function PlatformParagraphStyle_init_$Init$($this) {
    PlatformParagraphStyle.call($this);
    $this.i5m_1 = Companion_getInstance_50().g65();
    return $this;
  }
  function PlatformParagraphStyle_init_$Create$() {
    return PlatformParagraphStyle_init_$Init$(objectCreate(protoOf(PlatformParagraphStyle)));
  }
  protoOf(PlatformParagraphStyle).j5m = function (other) {
    if (other == null)
      return this;
    return other;
  };
  protoOf(PlatformParagraphStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformParagraphStyle))
      return false;
    if (!this.i5m_1.equals(other.i5m_1))
      return false;
    return true;
  };
  protoOf(PlatformParagraphStyle).hashCode = function () {
    return this.i5m_1.hashCode();
  };
  function PlatformParagraphStyle() {
    Companion_getInstance_52();
  }
  function PlatformSpanStyle_init_$Init$($this) {
    PlatformSpanStyle.call($this, null);
    return $this;
  }
  function PlatformSpanStyle_init_$Create$() {
    return PlatformSpanStyle_init_$Init$(objectCreate(protoOf(PlatformSpanStyle)));
  }
  function Companion_39() {
    Companion_instance_40 = this;
    this.s5q_1 = PlatformSpanStyle_init_$Create$();
  }
  var Companion_instance_40;
  function Companion_getInstance_53() {
    if (Companion_instance_40 == null)
      new Companion_39();
    return Companion_instance_40;
  }
  function PlatformSpanStyle(textDecorationLineStyle) {
    Companion_getInstance_53();
    this.d5p_1 = textDecorationLineStyle;
  }
  protoOf(PlatformSpanStyle).e5p = function (other) {
    return this;
  };
  protoOf(PlatformSpanStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformSpanStyle))
      return false;
    var tmp = this.d5p_1;
    var tmp_0 = tmp == null ? null : new TextDecorationLineStyle(tmp);
    var tmp_1 = other.d5p_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new TextDecorationLineStyle(tmp_1)))
      return false;
    return true;
  };
  protoOf(PlatformSpanStyle).hashCode = function () {
    var tmp = this.d5p_1;
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
    var tmp = start.d5p_1;
    var tmp_0 = tmp == null ? null : new TextDecorationLineStyle(tmp);
    var tmp_1 = stop.d5p_1;
    if (equals(tmp_0, tmp_1 == null ? null : new TextDecorationLineStyle(tmp_1)))
      return start;
    var tmp_2 = start.d5p_1;
    var tmp_3 = tmp_2 == null ? null : new TextDecorationLineStyle(tmp_2);
    var tmp_4 = stop.d5p_1;
    var tmp_5 = lerpDiscrete(tmp_3, tmp_4 == null ? null : new TextDecorationLineStyle(tmp_4), fraction);
    return new PlatformSpanStyle(tmp_5 == null ? null : tmp_5.b67_1);
  }
  function createFontFamilyResolver(fontCache) {
    return new FontFamilyResolverImpl(SkiaFontLoader_init_$Create$(fontCache), createPlatformResolveInterceptor());
  }
  function createFontFamilyResolver_0() {
    return new FontFamilyResolverImpl(SkiaFontLoader_init_$Create$(), createPlatformResolveInterceptor());
  }
  var androidx_compose_ui_text_font_PlatformFontFamilyTypefaceAdapter$stable;
  function PlatformFontFamilyTypefaceAdapter() {
  }
  protoOf(PlatformFontFamilyTypefaceAdapter).o5u = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.p5t_1;
    if (tmp instanceof FontListFontFamily)
      return null;
    var skiaFontLoader = platformFontLoader instanceof SkiaFontLoader ? platformFontLoader : THROW_CCE();
    var tmp0_elvis_lhs = typefaceRequest.p5t_1;
    var result = skiaFontLoader.d67(tmp0_elvis_lhs == null ? Companion_getInstance_18().g5q_1 : tmp0_elvis_lhs, typefaceRequest.q5t_1, typefaceRequest.r5t_1);
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
    var tmp0 = $this.c67_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('fontCache', 1, tmp, SkiaFontLoader$_get_fontCache_$ref_77g67v(), null);
    return tmp0.v1();
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
    this.c67_1 = lazy_0(fontCacheProvider);
  }
  protoOf(SkiaFontLoader).e67 = function () {
    return _get_fontCache__rq14qm(this).f67_1;
  };
  protoOf(SkiaFontLoader).g5y = function (font) {
    if (!(font instanceof PlatformFont)) {
      if (!(font.b5t() === Companion_getInstance_21().d5t_1)) {
        throw IllegalArgumentException_init_$Create$_0('Unsupported font type: ' + toString_0(font));
      }
      return null;
    }
    var tmp0_subject = font.b5t();
    var tmp;
    if (tmp0_subject === Companion_getInstance_21().c5t_1) {
      tmp = _get_fontCache__rq14qm(this).j67(font);
    } else if (tmp0_subject === Companion_getInstance_21().d5t_1) {
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        // Inline function 'kotlin.Companion.success' call
        var value = _get_fontCache__rq14qm(this).j67(font);
        tmp_0 = _Result___init__impl__xyqfz8(value);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
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
    } else if (tmp0_subject === Companion_getInstance_21().e5t_1) {
      throw UnsupportedOperationException_init_$Create$_0('Unsupported Async font load path');
    } else {
      throw IllegalArgumentException_init_$Create$_0('Unknown loading type ' + FontLoadingStrategy__toString_impl_fx0z8f(font.b5t()));
    }
    return tmp;
  };
  protoOf(SkiaFontLoader).d67 = function (fontFamily, fontWeight, fontStyle) {
    return _get_fontCache__rq14qm(this).d67(fontFamily, fontWeight, fontStyle);
  };
  protoOf(SkiaFontLoader).k67 = function (font, $completion) {
    return this.g5y(font);
  };
  protoOf(SkiaFontLoader).t5w = function (font, $completion) {
    return this.k67(font, $completion);
  };
  protoOf(SkiaFontLoader).v5u = function () {
    return _get_fontCache__rq14qm(this);
  };
  var androidx_compose_ui_text_input_PlatformImeOptions$stable;
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
    brushSize = brushSize === VOID ? Companion_getInstance_6().v3u_1 : brushSize;
    blendMode = blendMode === VOID ? Companion_getInstance_0().g4w_1 : blendMode;
    ComputedStyle.call($this);
    $this.g68(density, spanStyle, brushSize, blendMode, lineHeight, lineHeightStyle);
    return $this;
  }
  function ComputedStyle_init_$Create$(density, spanStyle, brushSize, blendMode, lineHeight, lineHeightStyle) {
    return ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, lineHeight, lineHeightStyle, objectCreate(protoOf(ComputedStyle)));
  }
  function ComputedStyle(textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, textDecorationLineStyle, shadow, drawStyle, blendMode, lineHeight, topRatio) {
    textForegroundStyle = textForegroundStyle === VOID ? Unspecified_instance : textForegroundStyle;
    brushSize = brushSize === VOID ? Companion_getInstance_6().v3u_1 : brushSize;
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
    background = background === VOID ? Companion_getInstance().f4r_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    textDecorationLineStyle = textDecorationLineStyle === VOID ? null : textDecorationLineStyle;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().g4w_1 : blendMode;
    lineHeight = lineHeight === VOID ? null : lineHeight;
    topRatio = topRatio === VOID ? -1.0 : topRatio;
    this.l67_1 = textForegroundStyle;
    this.m67_1 = brushSize;
    this.n67_1 = fontSize;
    this.o67_1 = fontWeight;
    this.p67_1 = fontStyle;
    this.q67_1 = fontSynthesis;
    this.r67_1 = fontFamily;
    this.s67_1 = fontFeatureSettings;
    this.t67_1 = letterSpacing;
    this.u67_1 = baselineShift;
    this.v67_1 = textGeometricTransform;
    this.w67_1 = localeList;
    this.x67_1 = background;
    this.y67_1 = textDecoration;
    this.z67_1 = textDecorationLineStyle;
    this.a68_1 = shadow;
    this.b68_1 = drawStyle;
    this.c68_1 = blendMode;
    this.d68_1 = lineHeight;
    this.e68_1 = topRatio;
    this.f68_1 = new SkiaTextPaint();
  }
  protoOf(ComputedStyle).g68 = function (density, spanStyle, brushSize, blendMode, lineHeight, lineHeightStyle) {
    this.l67_1 = spanStyle.f5n_1;
    this.m67_1 = brushSize;
    var tmp = this;
    // Inline function 'kotlin.with' call
    tmp.n67_1 = density.c4n(spanStyle.g5n_1);
    this.o67_1 = spanStyle.h5n_1;
    this.p67_1 = spanStyle.i5n_1;
    this.q67_1 = spanStyle.j5n_1;
    this.r67_1 = spanStyle.k5n_1;
    this.s67_1 = spanStyle.l5n_1;
    var tmp_0 = this;
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = spanStyle.m5n_1;
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0))) {
      // Inline function 'kotlin.with' call
      tmp_1 = density.c4n(spanStyle.m5n_1);
    } else {
      tmp_1 = null;
    }
    tmp_0.t67_1 = tmp_1;
    this.u67_1 = spanStyle.n5n_1;
    this.v67_1 = spanStyle.o5n_1;
    this.w67_1 = spanStyle.p5n_1;
    this.x67_1 = spanStyle.q5n_1;
    this.y67_1 = spanStyle.r5n_1;
    var tmp_2 = this;
    var tmp0_safe_receiver = spanStyle.t5n_1;
    tmp_2.z67_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d5p_1;
    this.a68_1 = spanStyle.s5n_1;
    this.b68_1 = spanStyle.u5n_1;
    this.c68_1 = blendMode;
    var tmp_3 = this;
    var tmp_4;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(lineHeight), new Long(0, 0))) {
      tmp_4 = toPx(lineHeight, density, spanStyle.g5n_1);
    } else {
      tmp_4 = null;
    }
    tmp_3.d68_1 = tmp_4;
    var tmp2_elvis_lhs = lineHeightStyle == null ? null : lineHeightStyle.m5o_1;
    var tmp_5;
    var tmp_6 = tmp2_elvis_lhs;
    if ((tmp_6 == null ? null : new Alignment(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_39().n63_1;
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    var alignment = tmp_5;
    this.e68_1 = _Alignment___get_topRatio__impl__gg7tir(alignment);
  };
  protoOf(ComputedStyle).h68 = function () {
    var paint = this.f68_1.a5c();
    paint.p43();
    this.f68_1.f4q(this.l67_1.g4r());
    this.f68_1.v66(this.l67_1.w5o(), this.m67_1, this.l67_1.e4l());
    this.f68_1.t66(this.b68_1);
    this.f68_1.g53(this.c68_1);
    return paint;
  };
  protoOf(ComputedStyle).m68 = function (fontFamilyResolver) {
    var res = TextStyle_init_$Create$();
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.l67_1.g4r();
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      res.t43(toArgb(this.l67_1.g4r()));
    }
    var foreground = this.h68();
    if (!(foreground.e44() == null) || !foreground.s43().equals(PaintMode_FILL_getInstance()) || !foreground.i44()) {
      res.e4h(foreground);
    }
    var tmp0_safe_receiver = this.p67_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp0_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new FontStyle(tmp_0)).v5n_1;
      res.k4h(toSkFontStyle(it));
    }
    var tmp1_safe_receiver = this.y67_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.i4h(toSkDecorationStyle(tmp1_safe_receiver, this.l67_1.g4r(), this.z67_1));
    }
    if (!equals(this.x67_1, Companion_getInstance().f4r_1)) {
      // Inline function 'kotlin.also' call
      var this_1 = Paint_init_$Create$();
      this_1.t43(toArgb(this.x67_1));
      res.g4h(this_1);
    }
    var tmp2_safe_receiver = this.o67_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.k4h(res.x47().d42(tmp2_safe_receiver.h5o_1));
    }
    var tmp3_safe_receiver = this.a68_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.m4h(toSkShadow(tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = this.t67_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.x4h(tmp4_safe_receiver);
    }
    var tmp_1 = Companion_getInstance_7();
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.s67_1;
    var tmp$ret$13 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    res.o4h(tmp_1.t40(tmp$ret$13));
    res.p4h(this.n67_1);
    var tmp5_safe_receiver = this.r67_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_elvis_lhs_0 = this.o67_1;
      var tmp_2 = tmp0_elvis_lhs_0 == null ? Companion_getInstance_24().r5p_1 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs = this.p67_1;
      var tmp_3;
      var tmp_4 = tmp1_elvis_lhs;
      if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
        tmp_3 = Companion_getInstance_22().a5q_1;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var tmp_5 = tmp_3;
      var tmp2_elvis_lhs = this.q67_1;
      var tmp_6;
      var tmp_7 = tmp2_elvis_lhs;
      if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
        tmp_6 = Companion_getInstance_23().c5q_1;
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var tmp_8 = fontFamilyResolver.q5u(tmp5_safe_receiver, tmp_2, tmp_5, tmp_6).v1();
      var resolved = tmp_8 instanceof FontLoadResult ? tmp_8 : THROW_CCE();
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_2 = resolved.o68_1;
      var tmp$ret$14 = copyToArray(this_2);
      res.r4h(tmp$ret$14);
      res.b4i(resolved.n68_1);
    }
    var tmp6_safe_receiver = this.u67_1;
    var tmp_9 = tmp6_safe_receiver;
    if ((tmp_9 == null ? null : new BaselineShift(tmp_9)) == null)
      null;
    else {
      var tmp_10 = tmp6_safe_receiver;
      // Inline function 'kotlin.let' call
      var it_0 = (tmp_10 == null ? null : new BaselineShift(tmp_10)).x5n_1;
      var fontMetrics = res.d4i();
      res.z4h(_BaselineShift___get_multiplier__impl__qhmjek(it_0) * fontMetrics.b41_1);
    }
    var tmp7_safe_receiver = this.d68_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.t4h(tmp7_safe_receiver / this.n67_1);
    }
    res.v4h(this.e68_1);
    return res;
  };
  protoOf(ComputedStyle).p68 = function (density, other) {
    var fontSize = toPx_0(other.g5n_1, density, this.n67_1);
    this.l67_1 = this.l67_1.c5p(other.f5n_1);
    var tmp0_safe_receiver = other.k5n_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.r67_1 = tmp0_safe_receiver;
    }
    this.n67_1 = fontSize;
    var tmp1_safe_receiver = other.h5n_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.o67_1 = tmp1_safe_receiver;
    }
    var tmp2_safe_receiver = other.i5n_1;
    var tmp = tmp2_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp2_safe_receiver;
      // Inline function 'kotlin.let' call
      this.p67_1 = (tmp_0 == null ? null : new FontStyle(tmp_0)).v5n_1;
    }
    var tmp3_safe_receiver = other.j5n_1;
    var tmp_1 = tmp3_safe_receiver;
    if ((tmp_1 == null ? null : new FontSynthesis(tmp_1)) == null)
      null;
    else {
      var tmp_2 = tmp3_safe_receiver;
      // Inline function 'kotlin.let' call
      this.q67_1 = (tmp_2 == null ? null : new FontSynthesis(tmp_2)).w5n_1;
    }
    var tmp4_safe_receiver = other.l5n_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.s67_1 = tmp4_safe_receiver;
    }
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = other.m5n_1;
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0))) {
      this.t67_1 = toPx_0(other.m5n_1, density, fontSize);
    }
    var tmp5_safe_receiver = other.n5n_1;
    var tmp_3 = tmp5_safe_receiver;
    if ((tmp_3 == null ? null : new BaselineShift(tmp_3)) == null)
      null;
    else {
      var tmp_4 = tmp5_safe_receiver;
      // Inline function 'kotlin.let' call
      this.u67_1 = (tmp_4 == null ? null : new BaselineShift(tmp_4)).x5n_1;
    }
    var tmp6_safe_receiver = other.o5n_1;
    if (tmp6_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.v67_1 = tmp6_safe_receiver;
    }
    var tmp7_safe_receiver = other.p5n_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.w67_1 = tmp7_safe_receiver;
    }
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_1 = other.q5n_1;
    if (!equals(_Color___get_value__impl__1pls5m(this_1), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      this.x67_1 = other.q5n_1;
    }
    var tmp8_safe_receiver = other.r5n_1;
    if (tmp8_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.y67_1 = tmp8_safe_receiver;
    }
    var tmp9_safe_receiver = other.s5n_1;
    if (tmp9_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.a68_1 = tmp9_safe_receiver;
    }
    var tmp10_safe_receiver = other.u5n_1;
    if (tmp10_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.b68_1 = tmp10_safe_receiver;
    }
    var tmp11_safe_receiver = other.t5n_1;
    if (tmp11_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = tmp11_safe_receiver.d5p_1;
      var tmp_5;
      var tmp_6 = tmp0_safe_receiver_0;
      if ((tmp_6 == null ? null : new TextDecorationLineStyle(tmp_6)) == null) {
        tmp_5 = null;
      } else {
        var tmp_7 = tmp0_safe_receiver_0;
        // Inline function 'kotlin.let' call
        this.z67_1 = (tmp_7 == null ? null : new TextDecorationLineStyle(tmp_7)).b67_1;
        tmp_5 = Unit_instance;
      }
    }
  };
  protoOf(ComputedStyle).toString = function () {
    var tmp = toString_0(this.l67_1);
    var tmp_0 = Size__toString_impl_o87ni8(this.m67_1);
    var tmp_1 = this.n67_1;
    var tmp_2 = toString(this.o67_1);
    var tmp_3 = this.p67_1;
    var tmp_4 = toString(tmp_3 == null ? null : new FontStyle(tmp_3));
    var tmp_5 = this.q67_1;
    var tmp_6 = toString(tmp_5 == null ? null : new FontSynthesis(tmp_5));
    var tmp_7 = toString(this.r67_1);
    var tmp_8 = this.s67_1;
    var tmp_9 = this.t67_1;
    var tmp_10 = this.u67_1;
    var tmp_11 = toString(tmp_10 == null ? null : new BaselineShift(tmp_10));
    var tmp_12 = toString(this.v67_1);
    var tmp_13 = toString(this.w67_1);
    var tmp_14 = Color__toString_impl_hpzmaq(this.x67_1);
    var tmp_15 = toString(this.y67_1);
    var tmp_16 = this.z67_1;
    return 'ComputedStyle(textForegroundStyle=' + tmp + ', brushSize=' + tmp_0 + ', fontSize=' + tmp_1 + ', fontWeight=' + tmp_2 + ', fontStyle=' + tmp_4 + ', fontSynthesis=' + tmp_6 + ', fontFamily=' + tmp_7 + ', fontFeatureSettings=' + tmp_8 + ', letterSpacing=' + tmp_9 + ', baselineShift=' + tmp_11 + ', textGeometricTransform=' + tmp_12 + ', localeList=' + tmp_13 + ', background=' + tmp_14 + ', textDecoration=' + tmp_15 + ', textDecorationLineStyle=' + toString(tmp_16 == null ? null : new TextDecorationLineStyle(tmp_16)) + ', shadow=' + toString(this.a68_1) + ', drawStyle=' + toString(this.b68_1) + ', blendMode=' + BlendMode__toString_impl_uuibkd(this.c68_1) + ', lineHeight=' + this.d68_1 + ', topRatio=' + this.e68_1 + ')';
  };
  protoOf(ComputedStyle).hashCode = function () {
    var result = hashCode(this.l67_1);
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.m67_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.n67_1) | 0;
    result = imul(result, 31) + (this.o67_1 == null ? 0 : this.o67_1.hashCode()) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.p67_1;
    if ((tmp_1 == null ? null : new FontStyle(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = FontStyle__hashCode_impl_7qhg4w(this.p67_1);
    }
    result = tmp + tmp_0 | 0;
    var tmp_2 = imul(result, 31);
    var tmp_3;
    var tmp_4 = this.q67_1;
    if ((tmp_4 == null ? null : new FontSynthesis(tmp_4)) == null) {
      tmp_3 = 0;
    } else {
      tmp_3 = FontSynthesis__hashCode_impl_4wi11v(this.q67_1);
    }
    result = tmp_2 + tmp_3 | 0;
    result = imul(result, 31) + (this.r67_1 == null ? 0 : hashCode(this.r67_1)) | 0;
    result = imul(result, 31) + (this.s67_1 == null ? 0 : getStringHashCode(this.s67_1)) | 0;
    result = imul(result, 31) + (this.t67_1 == null ? 0 : getNumberHashCode(this.t67_1)) | 0;
    var tmp_5 = imul(result, 31);
    var tmp_6;
    var tmp_7 = this.u67_1;
    if ((tmp_7 == null ? null : new BaselineShift(tmp_7)) == null) {
      tmp_6 = 0;
    } else {
      tmp_6 = BaselineShift__hashCode_impl_g0potx(this.u67_1);
    }
    result = tmp_5 + tmp_6 | 0;
    result = imul(result, 31) + (this.v67_1 == null ? 0 : this.v67_1.hashCode()) | 0;
    result = imul(result, 31) + (this.w67_1 == null ? 0 : this.w67_1.hashCode()) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.x67_1) | 0;
    result = imul(result, 31) + (this.y67_1 == null ? 0 : this.y67_1.hashCode()) | 0;
    var tmp_8 = imul(result, 31);
    var tmp_9;
    var tmp_10 = this.z67_1;
    if ((tmp_10 == null ? null : new TextDecorationLineStyle(tmp_10)) == null) {
      tmp_9 = 0;
    } else {
      tmp_9 = TextDecorationLineStyle__hashCode_impl_8ntype(this.z67_1);
    }
    result = tmp_8 + tmp_9 | 0;
    result = imul(result, 31) + (this.a68_1 == null ? 0 : this.a68_1.hashCode()) | 0;
    result = imul(result, 31) + (this.b68_1 == null ? 0 : hashCode(this.b68_1)) | 0;
    result = imul(result, 31) + BlendMode__hashCode_impl_93ceri(this.c68_1) | 0;
    result = imul(result, 31) + (this.d68_1 == null ? 0 : getNumberHashCode(this.d68_1)) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e68_1) | 0;
    return result;
  };
  protoOf(ComputedStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ComputedStyle ? other : THROW_CCE();
    if (!equals(this.l67_1, tmp0_other_with_cast.l67_1))
      return false;
    if (!equals(this.m67_1, tmp0_other_with_cast.m67_1))
      return false;
    if (!equals(this.n67_1, tmp0_other_with_cast.n67_1))
      return false;
    if (!equals(this.o67_1, tmp0_other_with_cast.o67_1))
      return false;
    var tmp = this.p67_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = tmp0_other_with_cast.p67_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.q67_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = tmp0_other_with_cast.q67_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.r67_1, tmp0_other_with_cast.r67_1))
      return false;
    if (!(this.s67_1 == tmp0_other_with_cast.s67_1))
      return false;
    if (!equals(this.t67_1, tmp0_other_with_cast.t67_1))
      return false;
    var tmp_5 = this.u67_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = tmp0_other_with_cast.u67_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.v67_1, tmp0_other_with_cast.v67_1))
      return false;
    if (!equals(this.w67_1, tmp0_other_with_cast.w67_1))
      return false;
    if (!equals(this.x67_1, tmp0_other_with_cast.x67_1))
      return false;
    if (!equals(this.y67_1, tmp0_other_with_cast.y67_1))
      return false;
    var tmp_8 = this.z67_1;
    var tmp_9 = tmp_8 == null ? null : new TextDecorationLineStyle(tmp_8);
    var tmp_10 = tmp0_other_with_cast.z67_1;
    if (!equals(tmp_9, tmp_10 == null ? null : new TextDecorationLineStyle(tmp_10)))
      return false;
    if (!equals(this.a68_1, tmp0_other_with_cast.a68_1))
      return false;
    if (!equals(this.b68_1, tmp0_other_with_cast.b68_1))
      return false;
    if (!(this.c68_1 === tmp0_other_with_cast.c68_1))
      return false;
    if (!equals(this.d68_1, tmp0_other_with_cast.d68_1))
      return false;
    if (!equals(this.e68_1, tmp0_other_with_cast.e68_1))
      return false;
    return true;
  };
  function toPx(_this__u8e3s4, density, fontSize) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    // Inline function 'kotlin.with' call
    var tmp$ret$1 = density.c4n(fontSize);
    return toPx_0(_this__u8e3s4, density, tmp$ret$1);
  }
  function toSkFontStyle(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_22().b5q_1 ? Companion_getInstance_8().a42_1 : Companion_getInstance_8().y41_1;
  }
  function toSkDecorationStyle(_this__u8e3s4, color, textDecorationLineStyle) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var underline = _this__u8e3s4.s63(Companion_getInstance_43().q5q_1);
    var overline = false;
    var lineThrough = _this__u8e3s4.s63(Companion_getInstance_43().r5q_1);
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
    var tmp = toArgb(_this__u8e3s4.u4x_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_0 = _this__u8e3s4.v4x_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_1 = _this__u8e3s4.v4x_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$7 = floatFromBits(bits_0);
    return new Shadow_0(tmp, tmp_0, tmp$ret$7, _this__u8e3s4.w4x_1);
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
          tmp = density.c4n(_this__u8e3s4);
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
    return _this__u8e3s4 === Companion_getInstance_51().w66_1 ? DecorationLineStyle_SOLID_getInstance() : _this__u8e3s4 === Companion_getInstance_51().x66_1 ? DecorationLineStyle_DOUBLE_getInstance() : _this__u8e3s4 === Companion_getInstance_51().y66_1 ? DecorationLineStyle_DOTTED_getInstance() : _this__u8e3s4 === Companion_getInstance_51().z66_1 ? DecorationLineStyle_DASHED_getInstance() : _this__u8e3s4 === Companion_getInstance_51().a67_1 ? DecorationLineStyle_WAVY_getInstance() : DecorationLineStyle_SOLID_getInstance();
  }
  function cursorHorizontalPosition(_this__u8e3s4, opposite) {
    opposite = opposite === VOID ? false : opposite;
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    switch (_this__u8e3s4.z4g().m2_1) {
      case 1:
        tmp = opposite ? _this__u8e3s4.x4g_1.q3x_1 : _this__u8e3s4.x4g_1.s3x_1;
        break;
      case 0:
        tmp = opposite ? _this__u8e3s4.x4g_1.s3x_1 : _this__u8e3s4.x4g_1.q3x_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function ParagraphBuilder$Cut$PutPlaceholder$_get_position_$ref_jq6gk8(p0) {
    return function () {
      return p0.q68_1;
    };
  }
  function ParagraphBuilder$Op$PutPlaceholder$_get_position_$ref_n2s1fp() {
    return function (p0) {
      return p0.w68();
    };
  }
  function ParagraphBuilder$Cut$EndPlaceholder$_get_position_$ref_bdxpek(p0) {
    return function () {
      return p0.x68_1;
    };
  }
  function ParagraphBuilder$Op$EndPlaceholder$_get_position_$ref_81c4j3() {
    return function (p0) {
      return p0.w68();
    };
  }
  function StyleAdd(position, style) {
    Op.call(this);
    this.a69_1 = position;
    this.b69_1 = style;
  }
  protoOf(StyleAdd).w68 = function () {
    return this.a69_1;
  };
  protoOf(StyleAdd).toString = function () {
    return 'StyleAdd(position=' + this.a69_1 + ', style=' + this.b69_1.toString() + ')';
  };
  protoOf(StyleAdd).hashCode = function () {
    var result = this.a69_1;
    result = imul(result, 31) + this.b69_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd ? other : THROW_CCE();
    if (!(this.a69_1 === tmp0_other_with_cast.a69_1))
      return false;
    if (!this.b69_1.equals(tmp0_other_with_cast.b69_1))
      return false;
    return true;
  };
  function PutPlaceholder(cut, width, height) {
    Op.call(this);
    this.s68_1 = cut;
    this.t68_1 = width;
    this.u68_1 = height;
    var tmp = this;
    var tmp_0 = KProperty0;
    tmp.v68_1 = getPropertyCallableRef('position', 0, tmp_0, ParagraphBuilder$Cut$PutPlaceholder$_get_position_$ref_jq6gk8(this.s68_1), null);
  }
  protoOf(PutPlaceholder).w68 = function () {
    var tmp0 = this.v68_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('position', 1, tmp, ParagraphBuilder$Op$PutPlaceholder$_get_position_$ref_n2s1fp(), null);
    return tmp0.get();
  };
  protoOf(PutPlaceholder).toString = function () {
    return 'PutPlaceholder(cut=' + this.s68_1.toString() + ', width=' + this.t68_1 + ', height=' + this.u68_1 + ')';
  };
  protoOf(PutPlaceholder).hashCode = function () {
    var result = this.s68_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.t68_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u68_1) | 0;
    return result;
  };
  protoOf(PutPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder ? other : THROW_CCE();
    if (!this.s68_1.equals(tmp0_other_with_cast.s68_1))
      return false;
    if (!equals(this.t68_1, tmp0_other_with_cast.t68_1))
      return false;
    if (!equals(this.u68_1, tmp0_other_with_cast.u68_1))
      return false;
    return true;
  };
  function EndPlaceholder(cut) {
    Op.call(this);
    this.y68_1 = cut;
    var tmp = this;
    var tmp_0 = KProperty0;
    tmp.z68_1 = getPropertyCallableRef('position', 0, tmp_0, ParagraphBuilder$Cut$EndPlaceholder$_get_position_$ref_bdxpek(this.y68_1), null);
  }
  protoOf(EndPlaceholder).w68 = function () {
    var tmp0 = this.z68_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('position', 1, tmp, ParagraphBuilder$Op$EndPlaceholder$_get_position_$ref_81c4j3(), null);
    return tmp0.get();
  };
  protoOf(EndPlaceholder).toString = function () {
    return 'EndPlaceholder(cut=' + this.y68_1.toString() + ')';
  };
  protoOf(EndPlaceholder).hashCode = function () {
    return this.y68_1.hashCode();
  };
  protoOf(EndPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder ? other : THROW_CCE();
    if (!this.y68_1.equals(tmp0_other_with_cast.y68_1))
      return false;
    return true;
  };
  function StyleAdd_0(position, style) {
    Cut.call(this);
    this.c69_1 = position;
    this.d69_1 = style;
  }
  protoOf(StyleAdd_0).w68 = function () {
    return this.c69_1;
  };
  protoOf(StyleAdd_0).toString = function () {
    return 'StyleAdd(position=' + this.c69_1 + ', style=' + this.d69_1.toString() + ')';
  };
  protoOf(StyleAdd_0).hashCode = function () {
    var result = this.c69_1;
    result = imul(result, 31) + this.d69_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd_0))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd_0 ? other : THROW_CCE();
    if (!(this.c69_1 === tmp0_other_with_cast.c69_1))
      return false;
    if (!this.d69_1.equals(tmp0_other_with_cast.d69_1))
      return false;
    return true;
  };
  function StyleRemove(position, style) {
    Cut.call(this);
    this.e69_1 = position;
    this.f69_1 = style;
  }
  protoOf(StyleRemove).w68 = function () {
    return this.e69_1;
  };
  protoOf(StyleRemove).toString = function () {
    return 'StyleRemove(position=' + this.e69_1 + ', style=' + this.f69_1.toString() + ')';
  };
  protoOf(StyleRemove).hashCode = function () {
    var result = this.e69_1;
    result = imul(result, 31) + this.f69_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleRemove).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleRemove))
      return false;
    var tmp0_other_with_cast = other instanceof StyleRemove ? other : THROW_CCE();
    if (!(this.e69_1 === tmp0_other_with_cast.e69_1))
      return false;
    if (!this.f69_1.equals(tmp0_other_with_cast.f69_1))
      return false;
    return true;
  };
  function PutPlaceholder_0(position, placeholder) {
    Cut.call(this);
    this.q68_1 = position;
    this.r68_1 = placeholder;
  }
  protoOf(PutPlaceholder_0).w68 = function () {
    return this.q68_1;
  };
  protoOf(PutPlaceholder_0).toString = function () {
    return 'PutPlaceholder(position=' + this.q68_1 + ', placeholder=' + this.r68_1.toString() + ')';
  };
  protoOf(PutPlaceholder_0).hashCode = function () {
    var result = this.q68_1;
    result = imul(result, 31) + this.r68_1.hashCode() | 0;
    return result;
  };
  protoOf(PutPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder_0 ? other : THROW_CCE();
    if (!(this.q68_1 === tmp0_other_with_cast.q68_1))
      return false;
    if (!this.r68_1.equals(tmp0_other_with_cast.r68_1))
      return false;
    return true;
  };
  function EndPlaceholder_0(position) {
    Cut.call(this);
    this.x68_1 = position;
  }
  protoOf(EndPlaceholder_0).w68 = function () {
    return this.x68_1;
  };
  protoOf(EndPlaceholder_0).toString = function () {
    return 'EndPlaceholder(position=' + this.x68_1 + ')';
  };
  protoOf(EndPlaceholder_0).hashCode = function () {
    return this.x68_1;
  };
  protoOf(EndPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder_0 ? other : THROW_CCE();
    if (!(this.x68_1 === tmp0_other_with_cast.x68_1))
      return false;
    return true;
  };
  function _get_initialStyle__6to25e($this) {
    var tmp = $this.t69_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('initialStyle');
    }
  }
  function _get_ops__e6e97j($this) {
    var tmp = $this.u69_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('ops');
    }
  }
  function prepareDefaultStyle($this) {
    $this.t69_1 = copyWithDefaultFontSize($this.i69_1.u5r(), $this.q69_1);
    $this.s69_1.g68($this.o69_1, _get_initialStyle__6to25e($this), $this.j69_1, $this.r69_1, $this.i69_1.s5s(), $this.i69_1.u5s());
  }
  function Op() {
  }
  function Cut() {
  }
  function makeOps($this, annotations, placeholders) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var cuts = ArrayList_init_$Create$();
    var _iterator__ex2g4s = annotations.i();
    $l$loop: while (_iterator__ex2g4s.j()) {
      var annotation = _iterator__ex2g4s.k();
      var tmp = annotation.i5h_1;
      if (!(tmp instanceof SpanStyle))
        continue $l$loop;
      cuts.h(new StyleAdd_0(annotation.j5h_1, annotation.i5h_1));
      cuts.h(new StyleRemove(annotation.k5h_1, annotation.i5h_1));
    }
    var _iterator__ex2g4s_0 = placeholders.i();
    while (_iterator__ex2g4s_0.j()) {
      var placeholder = _iterator__ex2g4s_0.k();
      cuts.h(new PutPlaceholder_0(placeholder.j5h_1, placeholder.i5h_1));
      cuts.h(new EndPlaceholder_0(placeholder.k5h_1));
    }
    var ops = mutableListOf([new StyleAdd(0, $this.s69_1)]);
    // Inline function 'kotlin.collections.sortBy' call
    if (cuts.l() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_0 = ParagraphBuilder$makeOps$lambda;
      var tmp$ret$1 = new sam$kotlin_Comparator$0_1(tmp_0);
      sortWith(cuts, tmp$ret$1);
    }
    var activeStyles = mutableListOf([_get_initialStyle__6to25e($this)]);
    var _iterator__ex2g4s_1 = cuts.i();
    while (_iterator__ex2g4s_1.j()) {
      var cut = _iterator__ex2g4s_1.k();
      if (cut instanceof StyleAdd_0) {
        activeStyles.h(cut.d69_1);
        var prev = previousStyleAddAtTheSamePosition($this, cut.c69_1, ops);
        if (prev == null) {
          // Inline function 'kotlin.also' call
          var this_0 = mergeStyles($this, activeStyles);
          this_0.p68($this.o69_1, cut.d69_1);
          ops.h(new StyleAdd(cut.c69_1, this_0));
        } else {
          prev.b69_1.p68($this.o69_1, cut.d69_1);
        }
      } else {
        if (cut instanceof StyleRemove) {
          activeStyles.g2(cut.f69_1);
          ops.h(new StyleAdd(cut.e69_1, mergeStyles($this, activeStyles)));
        } else {
          if (cut instanceof PutPlaceholder_0) {
            var currentStyle = mergeStyles($this, activeStyles);
            var op = new PutPlaceholder(cut, toPx_0(cut.r68_1.s5m_1, $this.o69_1, currentStyle.n67_1), toPx_0(cut.r68_1.t5m_1, $this.o69_1, currentStyle.n67_1));
            ops.h(op);
          } else {
            if (cut instanceof EndPlaceholder_0)
              ops.h(new EndPlaceholder(cut));
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
    var style = ComputedStyle_init_$Create$($this.o69_1, activeStyles.m(0), $this.j69_1, $this.r69_1, $this.i69_1.s5s(), $this.i69_1.u5s());
    var inductionVariable = 1;
    var last = activeStyles.l();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        style.p68($this.o69_1, activeStyles.m(i));
      }
       while (inductionVariable < last);
    return style;
  }
  function previousStyleAddAtTheSamePosition($this, position, ops) {
    var _iterator__ex2g4s = asReversed(ops).i();
    while (_iterator__ex2g4s.j()) {
      var prevOp = _iterator__ex2g4s.k();
      if (prevOp.w68() < position)
        return null;
      if (prevOp instanceof StyleAdd)
        return prevOp;
    }
    return null;
  }
  function makeSkFontRasterizationSettings($this, style) {
    var tmp0_safe_receiver = style.o5l_1.e5i_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i5m_1;
    var rasterizationSettings = tmp1_elvis_lhs == null ? Companion_getInstance_50().g65() : tmp1_elvis_lhs;
    return toSkFontRastrSettings(rasterizationSettings);
  }
  function textStyleToParagraphStyle($this, style, computedStyle) {
    var pStyle = new ParagraphStyle();
    pStyle.f4g(true);
    pStyle.m4g(makeSkFontRasterizationSettings($this, style));
    pStyle.g4g(makeSkTextStyle($this, computedStyle));
    // Inline function 'kotlin.let' call
    var it = style.q5s();
    pStyle.i4g(toSkAlignment(it));
    var lineHeight = computedStyle.d68_1;
    if (!(lineHeight == null) && lineHeight > computedStyle.n67_1) {
      var tmp0_elvis_lhs = style.u5s();
      var lineHeightStyle = tmp0_elvis_lhs == null ? Companion_getInstance_41().r63_1 : tmp0_elvis_lhs;
      pStyle.l4g(toHeightMode(lineHeightStyle.n5o_1));
    } else {
      pStyle.l4g(HeightMode_DISABLE_ALL_getInstance());
    }
    pStyle.h4g(toSkDirection($this.p69_1));
    var tmp1_safe_receiver = $this.i69_1.t5s();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.with' call
      var $this$with = $this.o69_1;
      pStyle.n4g(new TextIndent($this$with.c4n(tmp1_safe_receiver.f5o_1), $this$with.c4n(tmp1_safe_receiver.g5o_1)));
    }
    return pStyle;
  }
  function makeSkTextStyle($this, style) {
    var tmp = get_skTextStylesCache();
    return tmp.w69(style, ParagraphBuilder$makeSkTextStyle$lambda($this));
  }
  function sam$kotlin_Comparator$0_1(function_0) {
    this.x69_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).zb = function (a, b) {
    return this.x69_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.zb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).v2 = function () {
    return this.x69_1;
  };
  protoOf(sam$kotlin_Comparator$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0_1).hashCode = function () {
    return hashCode(this.v2());
  };
  function ParagraphBuilder$makeOps$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.w68();
    var tmp$ret$1 = b.w68();
    return compareValues(tmp, tmp$ret$1);
  }
  function ParagraphBuilder$makeSkTextStyle$lambda(this$0) {
    return function (it) {
      return it.m68(this$0.g69_1);
    };
  }
  function ParagraphBuilder$defaultFont$delegate$lambda(this$0) {
    return function () {
      var loadResult = resolveFontFamily(this$0.i69_1, this$0.g69_1);
      return Font_init_$Create$(loadResult == null ? null : loadResult.n68_1, this$0.s69_1.n67_1);
    };
  }
  function ParagraphBuilder$_get_defaultFont_$ref_9jivqf() {
    return function (p0) {
      return p0.l66();
    };
  }
  function ParagraphBuilder_0(fontFamilyResolver, text, textStyle, brushSize, ellipsis, maxLines, annotations, placeholders, density, textDirection, drawStyle, blendMode) {
    brushSize = brushSize === VOID ? Companion_getInstance_6().v3u_1 : brushSize;
    ellipsis = ellipsis === VOID ? '' : ellipsis;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().g4w_1 : blendMode;
    this.g69_1 = fontFamilyResolver;
    this.h69_1 = text;
    this.i69_1 = textStyle;
    this.j69_1 = brushSize;
    this.k69_1 = ellipsis;
    this.l69_1 = maxLines;
    this.m69_1 = annotations;
    this.n69_1 = placeholders;
    this.o69_1 = density;
    this.p69_1 = textDirection;
    this.q69_1 = drawStyle;
    this.r69_1 = blendMode;
    this.s69_1 = new ComputedStyle();
    var tmp = this;
    tmp.v69_1 = lazy_0(ParagraphBuilder$defaultFont$delegate$lambda(this));
  }
  protoOf(ParagraphBuilder_0).y69 = function (paragraph) {
    if (paragraph == null)
      return Unit_instance;
    prepareDefaultStyle(this);
    var foregroundPaint = this.s69_1.h68();
    paragraph.n4f(0, this.h69_1.length, foregroundPaint);
  };
  protoOf(ParagraphBuilder_0).o2e = function () {
    prepareDefaultStyle(this);
    this.u69_1 = makeOps(this, this.m69_1, this.n69_1);
    var pos = 0;
    var ps = textStyleToParagraphStyle(this, this.i69_1, this.s69_1);
    if (!(this.l69_1 === 2147483647)) {
      ps.j4g(this.l69_1);
      ps.k4g(this.k69_1);
    }
    var tmp = this.g69_1;
    var platformFontLoader = (tmp instanceof FontFamilyResolverImpl ? tmp : THROW_CCE()).g5u_1;
    var tmp_0;
    if (platformFontLoader instanceof SkiaFontLoader) {
      tmp_0 = platformFontLoader.e67();
    } else {
      throw IllegalStateException_init_$Create$_0('Unsupported font loader ' + toString_0(platformFontLoader));
    }
    var fontCollection = tmp_0;
    var pb = new ParagraphBuilder(ps, fontCollection);
    var addText = true;
    var _iterator__ex2g4s = _get_ops__e6e97j(this).i();
    while (_iterator__ex2g4s.j()) {
      var op = _iterator__ex2g4s.k();
      if (addText && pos < op.w68()) {
        pb.t4f(toString_0(substring(this.h69_1, pos, op.w68())));
      }
      if (op instanceof StyleAdd) {
        var tmp_1 = op.b69_1.r67_1;
        var tmp2_elvis_lhs = op.b69_1.o67_1;
        var tmp_2 = tmp2_elvis_lhs == null ? Companion_getInstance_24().r5p_1 : tmp2_elvis_lhs;
        var tmp3_elvis_lhs = op.b69_1.p67_1;
        var tmp_3;
        var tmp_4 = tmp3_elvis_lhs;
        if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
          tmp_3 = Companion_getInstance_22().a5q_1;
        } else {
          tmp_3 = tmp3_elvis_lhs;
        }
        var tmp_5 = tmp_3;
        var tmp4_elvis_lhs = op.b69_1.q67_1;
        var tmp_6;
        var tmp_7 = tmp4_elvis_lhs;
        if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
          tmp_6 = Companion_getInstance_23().f5q_1;
        } else {
          tmp_6 = tmp4_elvis_lhs;
        }
        this.g69_1.q5u(tmp_1, tmp_2, tmp_5, tmp_6);
        pb.s4f(makeSkTextStyle(this, op.b69_1));
      } else {
        if (op instanceof PutPlaceholder) {
          var placeholderStyle = new PlaceholderStyle(op.t68_1, op.u68_1, toSkPlaceholderAlignment(op.s68_1.r68_1.u5m_1), BaselineMode_ALPHABETIC_getInstance(), 0.0);
          pb.u4f(placeholderStyle);
          addText = false;
        } else {
          if (op instanceof EndPlaceholder) {
            addText = true;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      pos = op.w68();
    }
    if (addText && pos < this.h69_1.length) {
      pb.t4f(toString_0(substring(this.h69_1, pos, this.h69_1.length)));
    }
    return pb.o2e();
  };
  protoOf(ParagraphBuilder_0).l66 = function () {
    var tmp0 = this.v69_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('defaultFont', 1, tmp, ParagraphBuilder$_get_defaultFont_$ref_9jivqf(), null);
    return tmp0.v1();
  };
  protoOf(ParagraphBuilder_0).k66 = function (paragraph) {
    var metrics = this.l66().h40();
    var ascent = metrics.b41_1;
    var descent = metrics.c41_1;
    var baseline = paragraph.c4f();
    var lineHeight = this.s69_1.d68_1;
    if (!(lineHeight == null)) {
      var topRatio = this.s69_1.e68_1;
      if (0.0 <= topRatio ? topRatio <= 1.0 : false) {
        var extraLeading = lineHeight - this.s69_1.n67_1;
        ascent = ascent - extraLeading * topRatio;
        descent = descent + extraLeading * (1.0 - topRatio);
      } else {
        var multiplier = lineHeight / this.s69_1.n67_1;
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
    var fontSize = orDefaultFontSize(_this__u8e3s4.g5n_1);
    var tmp;
    if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4.m5n_1)) {
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var other = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4.m5n_1);
      checkArithmetic(fontSize);
      tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(fontSize), _TextUnit___get_value__impl__hpbx0k(fontSize) * other);
    } else {
      tmp = _this__u8e3s4.m5n_1;
    }
    var letterSpacing = tmp;
    return _this__u8e3s4.z5o(VOID, fontSize, VOID, VOID, VOID, VOID, VOID, letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, drawStyle);
  }
  function toSkPlaceholderAlignment(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    if (_this__u8e3s4 === Companion_getInstance_15().v5m_1) {
      tmp = PlaceholderAlignment_ABOVE_BASELINE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_15().z5m_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_15().a5n_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_15().b5n_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_15().w5m_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_15().x5m_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_15().y5m_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else {
      var message = 'Invalid PlaceholderVerticalAlign.';
      throw IllegalStateException_init_$Create$_0(toString_0(message));
    }
    return tmp;
  }
  function toSkAlignment(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_42().t5l_1 ? Alignment_LEFT_getInstance() : _this__u8e3s4 === Companion_getInstance_42().u5l_1 ? Alignment_RIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_42().v5l_1 ? Alignment_CENTER_getInstance() : _this__u8e3s4 === Companion_getInstance_42().w5l_1 ? Alignment_JUSTIFY_getInstance() : _this__u8e3s4 === Companion_getInstance_42().x5l_1 ? Alignment_START_getInstance() : _this__u8e3s4 === Companion_getInstance_42().y5l_1 ? Alignment_END_getInstance() : Alignment_START_getInstance();
  }
  function toHeightMode(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_38().j63_1 ? HeightMode_DISABLE_ALL_getInstance() : _this__u8e3s4 === Companion_getInstance_38().h63_1 ? HeightMode_DISABLE_FIRST_ASCENT_getInstance() : _this__u8e3s4 === Companion_getInstance_38().i63_1 ? HeightMode_DISABLE_LAST_DESCENT_getInstance() : _this__u8e3s4 === Companion_getInstance_38().k63_1 ? HeightMode_ALL_getInstance() : HeightMode_DISABLE_ALL_getInstance();
  }
  function toSkDirection(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    switch (_this__u8e3s4.m2_1) {
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
    var tmp0_safe_receiver = _this__u8e3s4.g5s();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_elvis_lhs = _this__u8e3s4.d5s();
      var tmp_0 = tmp0_elvis_lhs == null ? Companion_getInstance_24().r5p_1 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = _this__u8e3s4.e5s();
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_22().a5q_1;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var tmp_3 = tmp_1;
      var tmp2_elvis_lhs = _this__u8e3s4.f5s();
      var tmp_4;
      var tmp_5 = tmp2_elvis_lhs;
      if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
        tmp_4 = Companion_getInstance_23().f5q_1;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var tmp_6 = fontFamilyResolver.q5u(tmp0_safe_receiver, tmp_0, tmp_3, tmp_4).v1();
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
      DefaultFontSize_0 = get_sp(16);
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
  function invalidateParagraph($this, onlyForeground) {
    if (onlyForeground && $this.f66_1.m69_1.n()) {
      $this.h66_1 = true;
    } else {
      $this.g66_1 = null;
    }
  }
  function invalidateParagraph$default($this, onlyForeground, $super) {
    onlyForeground = onlyForeground === VOID ? false : onlyForeground;
    return invalidateParagraph($this, onlyForeground);
  }
  function ParagraphLayouter(text, textDirection, style, annotations, placeholders, density, fontFamilyResolver) {
    this.e66_1 = text;
    this.f66_1 = new ParagraphBuilder_0(fontFamilyResolver, this.e66_1, style, VOID, VOID, VOID, annotations, placeholders, density, textDirection);
    this.g66_1 = null;
    this.h66_1 = false;
    this.i66_1 = NaN;
  }
  protoOf(ParagraphLayouter).q66 = function () {
    return this.f66_1.l66();
  };
  protoOf(ParagraphLayouter).j66 = function () {
    return this.f66_1.i69_1;
  };
  protoOf(ParagraphLayouter).k66 = function (paragraph) {
    return this.f66_1.k66(paragraph);
  };
  protoOf(ParagraphLayouter).n66 = function (maxLines, ellipsis) {
    if (!(this.f66_1.l69_1 === maxLines) || !(this.f66_1.k69_1 === ellipsis)) {
      this.f66_1.l69_1 = maxLines;
      this.f66_1.k69_1 = ellipsis;
      invalidateParagraph$default(this);
    }
  };
  protoOf(ParagraphLayouter).r66 = function (color) {
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = color;
    } else {
      tmp = this.f66_1.i69_1.g4r();
    }
    var actualColor = tmp;
    if (!equals(this.f66_1.i69_1.g4r(), actualColor)) {
      this.f66_1.i69_1 = this.f66_1.i69_1.z5r(actualColor);
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).v66 = function (brush, brushSize, alpha) {
    var actualSize = this.f66_1.j69_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (!equals(this.f66_1.i69_1.w5o(), brush)) {
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
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp_3 = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(brushSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(shiftRight(value_0, 32));
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
      // Inline function 'kotlin.fromBits' call
      var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
      var tmp_4 = floatFromBits(bits_1);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Size___get_packedValue__impl__7rlt1o(brushSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      var tmp$ret$16 = floatFromBits(bits_2);
      tmp_0 = !sameValueAs(tmp_4, tmp$ret$16);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !sameValueAs(this.f66_1.i69_1.e4l(), alpha);
    }
    if (tmp) {
      this.f66_1.i69_1 = this.f66_1.i69_1.b5s(brush, alpha);
      this.f66_1.j69_1 = brushSize;
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).p66 = function (brushSize) {
    if (!equals(this.f66_1.j69_1, brushSize)) {
      this.f66_1.j69_1 = brushSize;
      var tmp;
      var tmp_0 = this.f66_1.i69_1.w5o();
      if (tmp_0 instanceof ShaderBrush) {
        tmp = true;
      } else {
        var tmp0 = this.f66_1.m69_1;
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.ui.util.fastAny' call
          // Inline function 'androidx.compose.ui.util.fastForEach' call
          var inductionVariable = 0;
          var last = tmp0.l() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0.m(index);
              var tmp_1;
              var tmp_2 = item.i5h_1;
              if (tmp_2 instanceof SpanStyle) {
                var tmp_3 = item.i5h_1.w5o();
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
  protoOf(ParagraphLayouter).s66 = function (shadow, textDecoration) {
    if (!equals(this.f66_1.i69_1.o5s(), shadow) || !equals(this.f66_1.i69_1.n5s(), textDecoration)) {
      this.f66_1.i69_1 = this.f66_1.i69_1.z5r(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow);
      invalidateParagraph$default(this);
    }
  };
  protoOf(ParagraphLayouter).t66 = function (drawStyle) {
    if (!equals(this.f66_1.q69_1, drawStyle)) {
      this.f66_1.q69_1 = drawStyle;
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).u66 = function (blendMode) {
    if (!(this.f66_1.r69_1 === blendMode)) {
      this.f66_1.r69_1 = blendMode;
      invalidateParagraph$default(this);
    }
  };
  protoOf(ParagraphLayouter).o66 = function (width) {
    var paragraph = this.g66_1;
    var tmp;
    if (!(paragraph == null)) {
      var layoutRequired = false;
      if (this.h66_1) {
        this.f66_1.y69(paragraph);
        this.h66_1 = false;
        paragraph.m4f();
        layoutRequired = true;
      }
      if (!sameValueAs(this.i66_1, width)) {
        this.i66_1 = width;
        layoutRequired = true;
      }
      if (layoutRequired) {
        paragraph.e4f(width);
      }
      tmp = paragraph;
    } else {
      paragraph = this.f66_1.o2e();
      paragraph.e4f(width);
      this.g66_1 = paragraph;
      this.h66_1 = false;
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
    return tmp0.v1();
  }
  var GenericFontFamiliesMapping$delegate;
  var androidx_compose_ui_text_platform_SystemFont$stable;
  var androidx_compose_ui_text_platform_LoadedFont$stable;
  var androidx_compose_ui_text_platform_FontLoader$stable;
  var androidx_compose_ui_text_platform_FontLoadResult$stable;
  var androidx_compose_ui_text_platform_FontCache$stable;
  function _get_fontCache__rq14qm_0($this) {
    var tmp0 = $this.z69_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('fontCache', 1, tmp, FontLoader$_get_fontCache_$ref_6slm39(), null);
    return tmp0.v1();
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
      return createFontFamilyResolver(_get_fontCache__rq14qm_0(this$0));
    };
  }
  function FontLoader() {
    var tmp = this;
    tmp.z69_1 = lazy_0(FontLoader$fontCache$delegate$lambda);
    var tmp_0 = this;
    tmp_0.a6a_1 = lazy_0(FontLoader$fontFamilyResolver$delegate$lambda(this));
  }
  function FontLoadResult(typeface, aliases) {
    this.n68_1 = typeface;
    this.o68_1 = aliases;
  }
  var Platform_Unknown_instance;
  var Platform_Linux_instance;
  var Platform_Windows_instance;
  var Platform_MacOS_instance;
  var Platform_IOS_instance;
  var Platform_TvOS_instance;
  var Platform_WatchOS_instance;
  var Platform_Android_instance;
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_instance;
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
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ensureRegistered($this, typeface, key) {
    if (!$this.h67_1.t(key)) {
      $this.g67_1.g4i(typeface, key);
      $this.h67_1.h(key);
    }
  }
  function ensureRegistered_0($this, fontFamily) {
    var tmp;
    if (fontFamily instanceof FontListFontFamily) {
      // Inline function 'androidx.compose.ui.util.fastMapNotNull' call
      var this_0 = fontFamily.k5t_1;
      var target = ArrayList_init_$Create$_0(this_0.l());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = this_0.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.m(index);
          var tmp_0;
          if (item instanceof SystemFont) {
            tmp_0 = item.f6a_1;
          } else {
            tmp_0 = null;
          }
          var tmp0_safe_receiver = tmp_0;
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.collections.plusAssign' call
            target.h(tmp0_safe_receiver);
          }
        }
         while (inductionVariable <= last);
      var fonts = target;
      var tmp_1;
      if (fonts.l() === fontFamily.k5t_1.l()) {
        tmp_1 = fonts;
      } else {
        throw IllegalArgumentException_init_$Create$_0("Don't load FontListFontFamily through ensureRegistered: " + fontFamily.toString());
      }
      tmp = tmp_1;
    } else {
      if (fontFamily instanceof LoadedFontFamily) {
        var tmp_2 = fontFamily.c6a_1;
        var typeface = tmp_2 instanceof SkiaBackedTypeface ? tmp_2 : THROW_CCE();
        ensureRegistered($this, typeface.d6a_1, typeface.e6a_1);
        tmp = listOf_0(typeface.e6a_1);
      } else {
        if (fontFamily instanceof GenericFontFamily) {
          tmp = get_aliases(fontFamily);
        } else {
          if (fontFamily instanceof DefaultFontFamily) {
            tmp = get_aliases(Companion_getInstance_18().h5q_1);
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
    this.f67_1 = FontCollection_init_$Create$();
    this.g67_1 = TypefaceFontProviderWithFallback_init_$Create$();
    this.h67_1 = HashSet_init_$Create$();
    this.i67_1 = new ExpireAfterAccessCache(new Long(-129542144, 13));
    this.f67_1.w4d(new FontMgrWithFallback(this.g67_1));
    this.f67_1.v4d(this.g67_1);
  }
  protoOf(FontCache).j67 = function (font) {
    var tmp = font.g6a();
    var typeface = this.i67_1.e64(tmp, FontCache$load$lambda(font));
    ensureRegistered(this, typeface, font.g6a());
    return new FontLoadResult(typeface, listOf_0(font.g6a()));
  };
  protoOf(FontCache).d67 = function (fontFamily, fontWeight, fontStyle) {
    var aliases = ensureRegistered_0(this, fontFamily);
    var style = toSkFontStyle(fontStyle).d42(fontWeight.h5o_1);
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(aliases);
    return new FontLoadResult(first_0(this.f67_1.y4d(tmp$ret$0, style)), aliases);
  };
  function LoadedFont() {
  }
  function SystemFont() {
  }
  function SkiaBackedTypeface() {
  }
  function get_aliases(_this__u8e3s4) {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp0_elvis_lhs = get_GenericFontFamiliesMapping().y1(_this__u8e3s4.g5t_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Unknown generic font family ' + _this__u8e3s4.g5t_1;
      throw IllegalStateException_init_$Create$_0(toString_0(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cloneWithVariationSettings(_this__u8e3s4, variationSettings) {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    if (variationSettings.h6a_1.n())
      return _this__u8e3s4;
    var variations = toSkiaFontVariationList(variationSettings);
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(variations);
    return _this__u8e3s4.a48(tmp$ret$0);
  }
  function toSkiaFontVariationList(_this__u8e3s4) {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = _this__u8e3s4.h6a_1;
    var target = ArrayList_init_$Create$_0(this_0.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = FontVariation_init_$Create$(item.j6a(), item.k6a(null));
        target.h(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function GenericFontFamiliesMapping$delegate$lambda() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp;
    switch (currentPlatform().m2_1) {
      case 1:
        tmp = mapOf([to(Companion_getInstance_18().h5q_1.g5t_1, listOf(['Noto Sans', 'DejaVu Sans', 'Arial'])), to(Companion_getInstance_18().i5q_1.g5t_1, listOf(['Noto Serif', 'DejaVu Serif', 'Times New Roman'])), to(Companion_getInstance_18().j5q_1.g5t_1, listOf(['Noto Sans Mono', 'DejaVu Sans Mono', 'Consolas'])), to(Companion_getInstance_18().k5q_1.g5t_1, listOf_0('Comic Sans MS'))]);
        break;
      case 2:
        tmp = mapOf([to(Companion_getInstance_18().h5q_1.g5t_1, listOf(['Segoe UI', 'Arial'])), to(Companion_getInstance_18().i5q_1.g5t_1, listOf_0('Times New Roman')), to(Companion_getInstance_18().j5q_1.g5t_1, listOf_0('Consolas')), to(Companion_getInstance_18().k5q_1.g5t_1, listOf_0('Comic Sans MS'))]);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        tmp = mapOf([to(Companion_getInstance_18().h5q_1.g5t_1, listOf(['.AppleSystemUIFont', 'Helvetica Neue', 'Helvetica'])), to(Companion_getInstance_18().i5q_1.g5t_1, listOf(['.AppleSystemUIFontSerif', 'Times', 'Times New Roman'])), to(Companion_getInstance_18().j5q_1.g5t_1, listOf(['.AppleSystemUIFontMonospaced', 'Menlo', 'Courier'])), to(Companion_getInstance_18().k5q_1.g5t_1, listOf(['Apple Chancery', 'Snell Roundhand']))]);
        break;
      case 7:
        tmp = mapOf([to(Companion_getInstance_18().h5q_1.g5t_1, listOf(['Roboto', 'Noto Sans'])), to(Companion_getInstance_18().i5q_1.g5t_1, listOf(['Roboto Serif', 'Noto Serif'])), to(Companion_getInstance_18().j5q_1.g5t_1, listOf(['Roboto Mono', 'Noto Sans Mono'])), to(Companion_getInstance_18().k5q_1.g5t_1, listOf_0('Comic Sans MS'))]);
        break;
      case 0:
        tmp = mapOf([to(Companion_getInstance_18().h5q_1.g5t_1, listOf_0('Arial')), to(Companion_getInstance_18().i5q_1.g5t_1, listOf_0('Times New Roman')), to(Companion_getInstance_18().j5q_1.g5t_1, listOf_0('Consolas')), to(Companion_getInstance_18().k5q_1.g5t_1, listOf_0('Comic Sans MS'))]);
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
    blendMode = blendMode === VOID ? Companion_getInstance_9().b4p_1 : blendMode;
    canvas.k4s();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = _this__u8e3s4.d5j_1;
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        item.e5j_1.f5k(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
        canvas.m3t(0.0, item.e5j_1.t3u());
      }
       while (inductionVariable <= last);
    canvas.l4s();
  }
  var androidx_compose_ui_text_platform_SkiaParagraphIntrinsics$stable;
  function ActualParagraphIntrinsics(text, style, annotations, placeholders, density, fontFamilyResolver) {
    return new SkiaParagraphIntrinsics(text, style, annotations, placeholders, density, fontFamilyResolver);
  }
  function newLayouter($this) {
    return new ParagraphLayouter($this.u65_1, $this.a66_1, $this.v65_1, $this.w65_1, $this.x65_1, $this.y65_1, $this.z65_1);
  }
  function SkiaParagraphIntrinsics(text, style, annotations, placeholders, density, fontFamilyResolver) {
    this.u65_1 = text;
    this.v65_1 = style;
    this.w65_1 = annotations;
    this.x65_1 = placeholders;
    this.y65_1 = density;
    this.z65_1 = fontFamilyResolver;
    this.a66_1 = resolveTextDirection_1(this.u65_1, this.v65_1.r5s(), this.v65_1.l5s());
    this.b66_1 = newLayouter(this);
    this.c66_1 = 0.0;
    this.d66_1 = 0.0;
    var para = ensureNotNull(this.b66_1).o66(Infinity);
    var tmp = this;
    // Inline function 'kotlin.math.ceil' call
    var x = para.a4f();
    tmp.c66_1 = Math.ceil(x);
    var tmp_0 = this;
    // Inline function 'kotlin.math.ceil' call
    var x_0 = para.b4f();
    tmp_0.d66_1 = Math.ceil(x_0);
  }
  protoOf(SkiaParagraphIntrinsics).m66 = function () {
    var tmp0_elvis_lhs = this.b66_1;
    var layouter = tmp0_elvis_lhs == null ? newLayouter(this) : tmp0_elvis_lhs;
    this.b66_1 = null;
    return layouter;
  };
  protoOf(SkiaParagraphIntrinsics).a4f = function () {
    return this.c66_1;
  };
  protoOf(SkiaParagraphIntrinsics).b4f = function () {
    return this.d66_1;
  };
  function resolveTextDirection_1(text, textDirection, localeList) {
    textDirection = textDirection === VOID ? null : textDirection;
    localeList = localeList === VOID ? null : localeList;
    var tmp;
    var tmp_0 = textDirection;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = Companion_getInstance_44().j5l_1;
    } else {
      tmp = textDirection;
    }
    var tmp1_subject = tmp;
    var tmp_1;
    if (tmp1_subject === Companion_getInstance_44().h5l_1) {
      tmp_1 = ResolvedTextDirection_Ltr_getInstance();
    } else if (tmp1_subject === Companion_getInstance_44().i5l_1) {
      tmp_1 = ResolvedTextDirection_Rtl_getInstance();
    } else if (tmp1_subject === Companion_getInstance_44().j5l_1 || tmp1_subject === Companion_getInstance_44().m5l_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda(localeList));
    } else if (tmp1_subject === Companion_getInstance_44().k5l_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_0);
    } else if (tmp1_subject === Companion_getInstance_44().l5l_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_1);
    } else {
      var message = 'Invalid TextDirection.';
      throw IllegalStateException_init_$Create$_0(toString_0(message));
    }
    return tmp_1;
  }
  function contentBasedTextDirection(text, fallback) {
    var tmp0_subject = firstStrongDirectionType(text);
    return tmp0_subject === Companion_getInstance_49().y63_1 ? ResolvedTextDirection_Ltr_getInstance() : tmp0_subject === Companion_getInstance_49().z63_1 ? ResolvedTextDirection_Rtl_getInstance() : fallback();
  }
  function localeBasedTextDirection(locale) {
    var tmp;
    if (isRtl((locale == null ? Companion_instance_21.p22() : locale).k5o_1)) {
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
    $this.k68_1 = null;
    $this.j68_1 = null;
    $this.l68_1 = null;
    $this.d44(null);
  }
  function SkiaTextPaint$setBrush$lambda($brush, $size) {
    return function () {
      return $brush.o4q($size);
    };
  }
  function SkiaTextPaint() {
    this.i68_1 = Paint();
    this.j68_1 = null;
    this.k68_1 = null;
    this.l68_1 = null;
  }
  protoOf(SkiaTextPaint).v66 = function (brush, size, alpha) {
    if (brush == null) {
      clearShader(this);
    } else {
      if (brush instanceof SolidColor) {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        var this_0 = this.g4r();
        if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
          this.f4q(modulate(brush.d4q_1, alpha));
          clearShader(this);
        }
      } else {
        if (brush instanceof ShaderBrush) {
          var tmp;
          if (!equals(this.j68_1, brush)) {
            tmp = true;
          } else {
            var tmp_0 = this.l68_1;
            tmp = !equals(tmp_0 == null ? null : new Size(tmp_0), new Size(size));
          }
          if (tmp) {
            // Inline function 'androidx.compose.ui.geometry.isSpecified' call
            if (!equalsLong(_Size___get_packedValue__impl__7rlt1o(size), new Long(2143289344, 2143289344))) {
              this.j68_1 = brush;
              this.l68_1 = size;
              var tmp_1 = this;
              tmp_1.k68_1 = derivedStateOf(SkiaTextPaint$setBrush$lambda(brush, size));
            }
          }
          var tmp1_safe_receiver = this.k68_1;
          this.d44(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v1());
          this.q4j(isNaN_0(alpha) ? 1.0 : coerceIn_0(alpha, 0.0, 1.0));
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(SkiaTextPaint).t66 = function (drawStyle) {
    if (equals(drawStyle, Fill_getInstance()) || drawStyle == null) {
      this.q52(Companion_getInstance_10().o4w_1);
    } else {
      if (drawStyle instanceof Stroke) {
        this.q52(Companion_getInstance_10().p4w_1);
        this.y43(drawStyle.r52_1);
        this.y52(drawStyle.s52_1);
        this.a53(drawStyle.u52_1);
        this.w52(drawStyle.t52_1);
        this.c53(drawStyle.v52_1);
      } else {
        noWhenBranchMatchedException();
      }
    }
  };
  protoOf(SkiaTextPaint).a5c = function () {
    return this.i68_1.a5c();
  };
  protoOf(SkiaTextPaint).q4j = function (_set____db54di) {
    this.i68_1.q4j(_set____db54di);
  };
  protoOf(SkiaTextPaint).e4l = function () {
    return this.i68_1.e4l();
  };
  protoOf(SkiaTextPaint).q43 = function (_set____db54di) {
    this.i68_1.q43(_set____db54di);
  };
  protoOf(SkiaTextPaint).f4q = function (_set____db54di) {
    this.i68_1.f4q(_set____db54di);
  };
  protoOf(SkiaTextPaint).g4r = function () {
    return this.i68_1.g4r();
  };
  protoOf(SkiaTextPaint).g53 = function (_set____db54di) {
    this.i68_1.g53(_set____db54di);
  };
  protoOf(SkiaTextPaint).h53 = function () {
    return this.i68_1.h53();
  };
  protoOf(SkiaTextPaint).q52 = function (_set____db54di) {
    this.i68_1.q52(_set____db54di);
  };
  protoOf(SkiaTextPaint).y43 = function (_set____db54di) {
    this.i68_1.y43(_set____db54di);
  };
  protoOf(SkiaTextPaint).z43 = function () {
    return this.i68_1.z43();
  };
  protoOf(SkiaTextPaint).w52 = function (_set____db54di) {
    this.i68_1.w52(_set____db54di);
  };
  protoOf(SkiaTextPaint).x52 = function () {
    return this.i68_1.x52();
  };
  protoOf(SkiaTextPaint).a53 = function (_set____db54di) {
    this.i68_1.a53(_set____db54di);
  };
  protoOf(SkiaTextPaint).b53 = function () {
    return this.i68_1.b53();
  };
  protoOf(SkiaTextPaint).y52 = function (_set____db54di) {
    this.i68_1.y52(_set____db54di);
  };
  protoOf(SkiaTextPaint).z52 = function () {
    return this.i68_1.z52();
  };
  protoOf(SkiaTextPaint).i53 = function (_set____db54di) {
    this.i68_1.i53(_set____db54di);
  };
  protoOf(SkiaTextPaint).j53 = function () {
    return this.i68_1.j53();
  };
  protoOf(SkiaTextPaint).d44 = function (_set____db54di) {
    this.i68_1.d44(_set____db54di);
  };
  protoOf(SkiaTextPaint).e44 = function () {
    return this.i68_1.e44();
  };
  protoOf(SkiaTextPaint).e53 = function (_set____db54di) {
    this.i68_1.e53(_set____db54di);
  };
  protoOf(SkiaTextPaint).f53 = function () {
    return this.i68_1.f53();
  };
  protoOf(SkiaTextPaint).c53 = function (_set____db54di) {
    this.i68_1.c53(_set____db54di);
  };
  protoOf(SkiaTextPaint).d53 = function () {
    return this.i68_1.d53();
  };
  var androidx_compose_ui_text_platform_SynchronizedObject$stable;
  function SynchronizedObject() {
  }
  function _LineBreak___init__impl__o5i11q(mask) {
    return mask;
  }
  function _LineBreak___get_mask__impl__je2e1t($this) {
    return $this;
  }
  function Companion_40() {
    Companion_instance_41 = this;
    this.a5m_1 = _LineBreak___init__impl__o5i11q(1);
    this.b5m_1 = _LineBreak___init__impl__o5i11q(2);
    this.c5m_1 = _LineBreak___init__impl__o5i11q(3);
    this.d5m_1 = _LineBreak___init__impl__o5i11q(4);
  }
  var Companion_instance_41;
  function Companion_getInstance_54() {
    if (Companion_instance_41 == null)
      new Companion_40();
    return Companion_instance_41;
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
    if (!($this === (other instanceof LineBreak ? other.n5m_1 : THROW_CCE())))
      return false;
    return true;
  }
  function LineBreak(mask) {
    Companion_getInstance_54();
    this.n5m_1 = mask;
  }
  protoOf(LineBreak).toString = function () {
    return LineBreak__toString_impl_mphhli(this.n5m_1);
  };
  protoOf(LineBreak).hashCode = function () {
    return LineBreak__hashCode_impl_ybksn(this.n5m_1);
  };
  protoOf(LineBreak).equals = function (other) {
    return LineBreak__equals_impl_1r98t9(this.n5m_1, other);
  };
  var androidx_compose_ui_text_style_TextMotion$stable;
  function Companion_41() {
    Companion_instance_42 = this;
    this.p5m_1 = new TextMotion();
    this.q5m_1 = new TextMotion();
  }
  var Companion_instance_42;
  function Companion_getInstance_55() {
    if (Companion_instance_42 == null)
      new Companion_41();
    return Companion_instance_42;
  }
  function TextMotion() {
    Companion_getInstance_55();
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
    return get_rtlLanguagesSet().t(get_language(_this__u8e3s4));
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
  protoOf(createPlatformLocaleDelegate$1).p22 = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = userPreferredLanguages();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      var tmp$ret$0 = new Locale(toIntlLocale(item));
      destination.h(tmp$ret$0);
    }
    return new LocaleList(destination);
  };
  protoOf(createPlatformLocaleDelegate$1).b63 = function (languageTag) {
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
    switch (get_hostOs().m2_1) {
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
      var tmp1_elvis_lhs = Companion_getInstance_11().r41_1.v41(Companion_getInstance_12().r3z(font.l6a_1()));
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
        var tmp2_elvis_lhs = Companion_getInstance_11().r41_1.w41(font.f6a_1, get_skFontStyle(font));
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
    return cloneWithVariationSettings(tmp, font.m6a());
  }
  function get_skFontStyle(_this__u8e3s4) {
    return FontStyle_init_$Create$(_this__u8e3s4.c42().h5o_1, 5, _this__u8e3s4.a5t() === Companion_getInstance_22().b5q_1 ? FontSlant_ITALIC_getInstance() : FontSlant_UPRIGHT_getInstance());
  }
  var androidx_compose_ui_text_platform_JsStringDelegate$stable;
  var androidx_compose_ui_text_NoCache$stable;
  function NoCache() {
  }
  protoOf(NoCache).w69 = function (key, loader) {
    return loader(key);
  };
  protoOf(NoCache).e64 = function (key, loader) {
    return this.w69(!(key == null) ? key : THROW_CCE(), loader);
  };
  function createPlatformResolveInterceptor() {
    return Companion_getInstance_19().p5u_1;
  }
  function synthesizeTypeface(_this__u8e3s4, typeface, font, requestedWeight, requestedStyle) {
    return typeface;
  }
  var androidx_compose_ui_text_platform_PlatformFont$stable;
  function PlatformFont() {
  }
  protoOf(PlatformFont).g6a = function () {
    return '' + getKClassFromExpression(this).z9() + '|' + this.n6a() + '|weight=' + this.c42().h5o_1 + '|style=' + FontStyle__toString_impl_thncxr(this.a5t()) + '|variationSettings=' + toString_0(this.m6a().h6a_1);
  };
  //region block: post-declaration
  protoOf(PlatformResolveInterceptor$Companion$Default$1).r5u = interceptFontFamily;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).s5u = interceptFontWeight;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).t5u = interceptFontStyle;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).u5u = interceptFontSynthesis;
  protoOf(Unspecified).c5p = merge;
  protoOf(Unspecified).z5p = takeOrElse;
  protoOf(BrushStyle).c5p = merge;
  protoOf(BrushStyle).z5p = takeOrElse;
  protoOf(ColorStyle).c5p = merge;
  protoOf(ColorStyle).z5p = takeOrElse;
  protoOf(SkiaParagraph).l65 = paint$default;
  protoOf(SkiaParagraph).m65 = paint$default_0;
  protoOf(SkiaParagraphIntrinsics).s5l = get_hasStaleResolvedFonts;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
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
  TextPainter_instance = new TextPainter();
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
  Companion_instance_12 = new Companion_11();
  androidx_compose_ui_text_input_PartialGapBuffer$stable = 8;
  Companion_instance_13 = new Companion_12();
  androidx_compose_ui_text_input_ImeOptions$stable = 0;
  androidx_compose_ui_text_input_TextFieldValue$stable = 0;
  androidx_compose_ui_text_input_TextInputService$stable = 8;
  androidx_compose_ui_text_input_TextInputSession$stable = 8;
  androidx_compose_ui_text_input_TransformedText$stable = 8;
  androidx_compose_ui_text_input_PasswordVisualTransformation$stable = 0;
  androidx_compose_ui_text_intl_Locale$stable = 0;
  Companion_instance_21 = new Companion_20();
  androidx_compose_ui_text_intl_LocaleList$stable = 0;
  androidx_compose_ui_text_style_LineHeightStyle$stable = 0;
  androidx_compose_ui_text_style_TextDecoration$stable = 0;
  androidx_compose_ui_text_style_TextForegroundStyle_Unspecified$stable = 0;
  Unspecified_instance = new Unspecified();
  Companion_instance_32 = new Companion_31();
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
  _.$_$.c = createFontFamilyResolver_0;
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
  _.$_$.n = PasswordVisualTransformation;
  _.$_$.o = notifyFocusedRect;
  _.$_$.p = startInput;
  _.$_$.q = updateTextLayoutResult;
  _.$_$.r = PlatformTextInputService;
  _.$_$.s = SetSelectionCommand;
  _.$_$.t = TextFieldValue;
  _.$_$.u = TextInputService;
  _.$_$.v = TransformedText;
  _.$_$.w = getSelectedText;
  _.$_$.x = getTextAfterSelection;
  _.$_$.y = getTextBeforeSelection;
  _.$_$.z = FontLoader;
  _.$_$.a1 = TextAlign;
  _.$_$.b1 = TextOverflow;
  _.$_$.c1 = MultiParagraphIntrinsics;
  _.$_$.d1 = MultiParagraph;
  _.$_$.e1 = ParagraphIntrinsics_0;
  _.$_$.f1 = Paragraph_0;
  _.$_$.g1 = Paragraph;
  _.$_$.h1 = TextLayoutResult;
  _.$_$.i1 = TextRange_0;
  _.$_$.j1 = TextRange_1;
  _.$_$.k1 = TextRange;
  _.$_$.l1 = androidx_compose_ui_text_TextLayoutResult$stableprop_getter;
  _.$_$.m1 = lerp_6;
  _.$_$.n1 = resolveDefaults;
  _.$_$.o1 = ResolvedTextDirection_Ltr_getInstance;
  _.$_$.p1 = ResolvedTextDirection_Rtl_getInstance;
  _.$_$.q1 = CommitTextCommand_init_$Create$;
  _.$_$.r1 = SetComposingTextCommand_init_$Create$;
  _.$_$.s1 = TextFieldValue_init_$Create$;
  _.$_$.t1 = LineHeightStyle_init_$Create$;
  _.$_$.u1 = AnnotatedString_init_$Create$;
  _.$_$.v1 = Builder_init_$Create$;
  _.$_$.w1 = SpanStyle_init_$Create$;
  _.$_$.x1 = TextLayoutInput_init_$Create$;
  _.$_$.y1 = TextStyle_init_$Create$_1;
  _.$_$.z1 = ImeAction__hashCode_impl_m1mrob;
  _.$_$.a2 = ImeAction__toString_impl_r8bdhy;
  _.$_$.b2 = KeyboardCapitalization__hashCode_impl_6ibuz5;
  _.$_$.c2 = KeyboardCapitalization__toString_impl_f8u1tq;
  _.$_$.d2 = KeyboardType__hashCode_impl_mw6m33;
  _.$_$.e2 = KeyboardType__toString_impl_150pa8;
  _.$_$.f2 = _TextOverflow___init__impl__obguoe;
  _.$_$.g2 = TextOverflow__hashCode_impl_kqdwgt;
  _.$_$.h2 = _TextOverflow___get_value__impl__vugm5i;
  _.$_$.i2 = _TextRange___get_collapsed__impl__cilesp;
  _.$_$.j2 = _TextRange___get_end__impl__gcdxpp;
  _.$_$.k2 = _TextRange___get_length__impl__7qes3a;
  _.$_$.l2 = _TextRange___get_max__impl__owm8m;
  _.$_$.m2 = _TextRange___get_min__impl__uu95c4;
  _.$_$.n2 = _TextRange___get_reversed__impl__emhnbm;
  _.$_$.o2 = _TextRange___get_start__impl__ww4t90;
  _.$_$.p2 = Companion_getInstance_18;
  _.$_$.q2 = Companion_getInstance_22;
  _.$_$.r2 = Companion_getInstance_23;
  _.$_$.s2 = Companion_getInstance_24;
  _.$_$.t2 = Companion_getInstance_27;
  _.$_$.u2 = Companion_getInstance_28;
  _.$_$.v2 = Companion_getInstance_29;
  _.$_$.w2 = Companion_getInstance_30;
  _.$_$.x2 = Companion_getInstance_31;
  _.$_$.y2 = Companion_getInstance_33;
  _.$_$.z2 = Companion_instance_21;
  _.$_$.a3 = Companion_getInstance_35;
  _.$_$.b3 = Companion_getInstance_39;
  _.$_$.c3 = Companion_getInstance_38;
  _.$_$.d3 = Companion_getInstance_42;
  _.$_$.e3 = Companion_getInstance_43;
  _.$_$.f3 = Companion_getInstance_48;
  _.$_$.g3 = TextPainter_instance;
  _.$_$.h3 = Companion_getInstance_16;
  _.$_$.i3 = Companion_getInstance_17;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-text.js.map
