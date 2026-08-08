(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./skiko-kjs.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'components-resources-library'.");
    }
    globalThis['components-resources-library'] = factory(typeof globalThis['components-resources-library'] === 'undefined' ? {} : globalThis['components-resources-library'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['skiko-kjs']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var KProperty0 = kotlin_kotlin.$_$.bb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.e9;
  var protoOf = kotlin_kotlin.$_$.z9;
  var initMetadataForClass = kotlin_kotlin.$_$.h9;
  var VOID = kotlin_kotlin.$_$.b;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.d2;
  var Unit_instance = kotlin_kotlin.$_$.b3;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.l1;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.v5;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.l2;
  var THROW_CCE = kotlin_kotlin.$_$.md;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var BitmapPainter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f;
  var endsWith = kotlin_kotlin.$_$.tb;
  var rememberVectorPainter = kotlin_org_jetbrains_compose_ui_ui.$_$.w;
  var getLocalDelegateReference = kotlin_kotlin.$_$.c9;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var Builder = kotlin_org_jetbrains_compose_ui_ui.$_$.t;
  var CoroutineImpl = kotlin_kotlin.$_$.m7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x6;
  var initMetadataForLambda = kotlin_kotlin.$_$.m9;
  var lazy = kotlin_kotlin.$_$.be;
  var getKClassFromExpression = kotlin_kotlin.$_$.xa;
  var getStringHashCode = kotlin_kotlin.$_$.f9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i9;
  var Enum = kotlin_kotlin.$_$.bd;
  var enumEntries = kotlin_kotlin.$_$.p7;
  var toString = kotlin_kotlin.$_$.ba;
  var hashCode = kotlin_kotlin.$_$.g9;
  var equals = kotlin_kotlin.$_$.z8;
  var equalsLong = kotlin_kotlin.$_$.a8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var isInterface = kotlin_kotlin.$_$.q9;
  var CoroutineStart_LAZY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var initMetadataForObject = kotlin_kotlin.$_$.n9;
  var toList = kotlin_kotlin.$_$.q6;
  var first = kotlin_kotlin.$_$.y4;
  var joinToString = kotlin_kotlin.$_$.i5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var emptyList = kotlin_kotlin.$_$.p4;
  var sortedWith = kotlin_kotlin.$_$.m6;
  var Collection = kotlin_kotlin.$_$.j3;
  var minus = kotlin_kotlin.$_$.y5;
  var FunctionAdapter = kotlin_kotlin.$_$.m8;
  var Comparator = kotlin_kotlin.$_$.ad;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z2;
  var isSystemInDarkTheme = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j1;
  var compareValues = kotlin_kotlin.$_$.u6;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var Exception = kotlin_kotlin.$_$.dd;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.e1;
  var captureStack = kotlin_kotlin.$_$.p8;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var removeSuffix = kotlin_kotlin.$_$.cc;
  var toDouble = kotlin_kotlin.$_$.lc;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b4;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c4;
  var startsWith = kotlin_kotlin.$_$.ic;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var substring = kotlin_kotlin.$_$.jc;
  var toUInt = kotlin_kotlin.$_$.rc;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.l2;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d4;
  var isBlank = kotlin_kotlin.$_$.vb;
  var filter = kotlin_kotlin.$_$.gb;
  var Sequence = kotlin_kotlin.$_$.eb;
  var sequence = kotlin_kotlin.$_$.lb;
  var addPathNodes = kotlin_org_jetbrains_compose_ui_ui.$_$.u;
  var PathFillType = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a1;
  var StrokeCap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i1;
  var StrokeJoin = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j1;
  var get_EmptyPath = kotlin_org_jetbrains_compose_ui_ui.$_$.s;
  var removeLastOrNull = kotlin_kotlin.$_$.e6;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s3;
  var toRawBits = kotlin_kotlin.$_$.me;
  var fromInt = kotlin_kotlin.$_$.b8;
  var shiftLeft = kotlin_kotlin.$_$.h8;
  var Long = kotlin_kotlin.$_$.hd;
  var bitwiseAnd = kotlin_kotlin.$_$.t7;
  var bitwiseOr = kotlin_kotlin.$_$.u7;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var TileMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k1;
  var toList_0 = kotlin_kotlin.$_$.mb;
  var checkIndexOverflow = kotlin_kotlin.$_$.a4;
  var get_lastIndex = kotlin_kotlin.$_$.m5;
  var coerceAtLeast = kotlin_kotlin.$_$.la;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var to = kotlin_kotlin.$_$.pe;
  var copyToArray = kotlin_kotlin.$_$.n4;
  var SequenceScope = kotlin_kotlin.$_$.db;
  var until = kotlin_kotlin.$_$.wa;
  var initMetadataForInterface = kotlin_kotlin.$_$.l9;
  var decodeToString = kotlin_kotlin.$_$.rb;
  var numberToInt = kotlin_kotlin.$_$.x9;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.j9;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var KProperty1 = kotlin_kotlin.$_$.cb;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u3;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r3;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y3;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w3;
  var CanvasDrawScope = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var shiftRight = kotlin_kotlin.$_$.j8;
  var convertToInt = kotlin_kotlin.$_$.x7;
  var Canvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.s4;
  var SVGDOM_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.x3;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.w4;
  var Companion_instance_1 = kotlin_org_jetbrains_skiko_skiko.$_$.b5;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.f5;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.e4;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.c5;
  var toComposeImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a2;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.u2;
  var floatFromBits = kotlin_kotlin.$_$.a9;
  var SVGLengthUnit_PX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z;
  var SVGLength = kotlin_org_jetbrains_skiko_skiko.$_$.p5;
  var SVGPreserveAspectRatioAlign_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a1;
  var SVGPreserveAspectRatio_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.y3;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x1;
  var Painter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var Size__times_impl_fnp4nc = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var createCompositionCoroutineScope = kotlin_androidx_compose_runtime_runtime.$_$.e1;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b2;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.s2;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Resource, 'Resource');
  initMetadataForClass(DrawableResource, 'DrawableResource', VOID, Resource);
  initMetadataForClass(Bitmap, 'Bitmap');
  initMetadataForClass(Vector, 'Vector');
  initMetadataForClass(Svg, 'Svg');
  initMetadataForLambda(vectorResource$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(loadImage$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(svgPainter$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(imageResource$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(LanguageQualifier, 'LanguageQualifier');
  initMetadataForClass(RegionQualifier, 'RegionQualifier');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ThemeQualifier, 'ThemeQualifier', VOID, Enum);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(DensityQualifier, 'DensityQualifier', VOID, Enum);
  initMetadataForClass(ResourceItem, 'ResourceItem');
  initMetadataForLambda(AsyncCache$getOrLoad$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AsyncCache$getOrLoad$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(AsyncCache, 'AsyncCache', AsyncCache, VOID, VOID, [2, 0]);
  initMetadataForObject(ResourceCaches, 'ResourceCaches', VOID, VOID, VOID, [0]);
  initMetadataForClass(ResourceEnvironment, 'ResourceEnvironment');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(DefaultComposeEnvironment$1);
  initMetadataForClass(MissingResourceException, 'MissingResourceException', VOID, Exception);
  initMetadataForClass(Group, 'Group', VOID, Enum);
  initMetadataForClass(BuildContext, 'BuildContext', BuildContext);
  initMetadataForLambda(_get_childrenSequence_$slambda_9jpw3j, CoroutineImpl, VOID, [1]);
  initMetadataForInterface(Element_0, 'Element');
  initMetadataForClass(MalformedXMLException, 'MalformedXMLException', VOID, Exception);
  initMetadataForObject(TestJsResourceReader, 'TestJsResourceReader', VOID, VOID, VOID, [1, 3]);
  initMetadataForCoroutine($readCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readAsBlobCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($asByteArrayCOROUTINE$, CoroutineImpl);
  initMetadataForObject(DefaultJsResourceReader, 'DefaultJsResourceReader', VOID, VOID, VOID, [1, 3]);
  initMetadataForClass(NodeImpl, 'NodeImpl');
  initMetadataForClass(ElementImpl, 'ElementImpl', VOID, NodeImpl, [NodeImpl, Element_0]);
  initMetadataForClass(NodeImpl$childNodes$3$1);
  initMetadataForClass(DrawCache, 'DrawCache', DrawCache);
  initMetadataForClass(SvgElement, 'SvgElement');
  initMetadataForClass(SvgPainter, 'SvgPainter', VOID, Painter);
  initMetadataForObject(WebResourcesConfiguration, 'WebResourcesConfiguration');
  initMetadataForLambda(rememberResourceState$slambda, CoroutineImpl, VOID, [1]);
  //endregion
  var org_jetbrains_compose_resources_FontResource$stable;
  function get_emptyImageBitmap() {
    _init_properties_ImageResources_kt__6e1y7e();
    var tmp0 = emptyImageBitmap$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('emptyImageBitmap', 0, tmp, _get_emptyImageBitmap_$ref_302yd9(), null);
    return tmp0.v1();
  }
  var emptyImageBitmap$delegate;
  function get_emptyImageVector() {
    _init_properties_ImageResources_kt__6e1y7e();
    var tmp0 = emptyImageVector$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('emptyImageVector', 0, tmp, _get_emptyImageVector_$ref_h5qmfr(), null);
    return tmp0.v1();
  }
  var emptyImageVector$delegate;
  function get_emptySvgPainter() {
    _init_properties_ImageResources_kt__6e1y7e();
    var tmp0 = emptySvgPainter$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('emptySvgPainter', 0, tmp, _get_emptySvgPainter_$ref_tgsxpw(), null);
    return tmp0.v1();
  }
  var emptySvgPainter$delegate;
  function get_imageCache() {
    _init_properties_ImageResources_kt__6e1y7e();
    return imageCache;
  }
  var imageCache;
  var org_jetbrains_compose_resources_DrawableResource$stable;
  var org_jetbrains_compose_resources_ImageCache_Bitmap$stable;
  var org_jetbrains_compose_resources_ImageCache_Vector$stable;
  var org_jetbrains_compose_resources_ImageCache_Svg$stable;
  function DrawableResource(id, items) {
    Resource.call(this, id, items);
  }
  function Bitmap(bitmap) {
    this.og5_1 = bitmap;
  }
  function Vector(vector) {
    this.pg5_1 = vector;
  }
  function Svg(painter) {
    this.qg5_1 = painter;
  }
  function vectorResource(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    $composer_0.p24(-1394399862);
    if (isTraceInProgress()) {
      traceEventStart(-1394399862, $changed, -1, 'org.jetbrains.compose.resources.vectorResource (ImageResources.kt:92)');
    }
    var resourceReader = get_currentOrPreview(get_LocalResourceReader(), $composer_0, 6);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.t25(this_0);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    $composer_0.p24(1002154924);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.h25();
    var tmp;
    if (false || it === Companion_getInstance().i24_1) {
      var value = vectorResource$lambda_0;
      $composer_0.i25(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.q24();
    $composer_0.p24(1002155875);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!((($changed & 14 ^ 6) > 4 && $composer_0.j25(resource) || ($changed & 6) === 4) | $composer_0.p25(resourceReader)) | $composer_0.j25(density));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.h25();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().i24_1) {
      var value_0 = vectorResource$slambda_0(resource, resourceReader, density, null);
      $composer_0.i25(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.q24();
    var imageVector$delegate = rememberResourceState(resource, resourceReader, density, tmp1_group, tmp2_group, $composer_0, 3072 | 14 & $changed);
    var tmp0_0 = vectorResource$lambda(imageVector$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.q24();
    return tmp0_0;
  }
  function painterResource(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    $composer_0.p24(-1508925367);
    if (isTraceInProgress()) {
      traceEventStart(-1508925367, $changed, -1, 'org.jetbrains.compose.resources.painterResource (ImageResources.kt:35)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalComposeEnvironment();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.t25(this_0);
    sourceInformationMarkerEnd($composer_1);
    var environment = tmp0.rg5($composer_0, 0);
    $composer_0.p24(-1389301971);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.j25(resource) || ($changed & 6) === 4) | $composer_0.j25(environment));
    // Inline function 'kotlin.let' call
    var it = $composer_0.h25();
    var tmp;
    if (invalid || it === Companion_getInstance().i24_1) {
      var value = getResourceItemByEnvironment(resource, environment).tg5_1;
      $composer_0.i25(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.q24();
    var filePath = tmp0_group;
    if (endsWith(filePath, '.xml', true)) {
      $composer_0.p24(-118556854);
      var tmp1_return = rememberVectorPainter(vectorResource(resource, $composer_0, 14 & $changed), $composer_0, 0);
      $composer_0.q24();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.q24();
      return tmp1_return;
    } else if (endsWith(filePath, '.svg', true)) {
      $composer_0.p24(-118445595);
      var tmp2_return = svgPainter(resource, $composer_0, 14 & $changed);
      $composer_0.q24();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.q24();
      return tmp2_return;
    } else {
      $composer_0.p24(-118396429);
      var tmp3_return = new BitmapPainter(imageResource(resource, $composer_0, 14 & $changed));
      $composer_0.q24();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.q24();
      return tmp3_return;
    }
  }
  function loadImage(path, cacheKey, resourceReader, decode, $completion) {
    var tmp = get_imageCache();
    return tmp.yg5(cacheKey, loadImage$slambda_0(decode, resourceReader, path, null), $completion);
  }
  function svgPainter(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    $composer_0.p24(1371694195);
    if (isTraceInProgress()) {
      traceEventStart(1371694195, $changed, -1, 'org.jetbrains.compose.resources.svgPainter (ImageResources.kt:112)');
    }
    var resourceReader = get_currentOrPreview(get_LocalResourceReader(), $composer_0, 6);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.t25(this_0);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    $composer_0.p24(-946505599);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.h25();
    var tmp;
    if (false || it === Companion_getInstance().i24_1) {
      var value = svgPainter$lambda_0;
      $composer_0.i25(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.q24();
    $composer_0.p24(-946504685);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!((($changed & 14 ^ 6) > 4 && $composer_0.j25(resource) || ($changed & 6) === 4) | $composer_0.p25(resourceReader)) | $composer_0.j25(density));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.h25();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().i24_1) {
      var value_0 = svgPainter$slambda_0(resource, resourceReader, density, null);
      $composer_0.i25(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.q24();
    var svgPainter$delegate = rememberResourceState(resource, resourceReader, density, tmp1_group, tmp2_group, $composer_0, 3072 | 14 & $changed);
    var tmp0_0 = svgPainter$lambda(svgPainter$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.q24();
    return tmp0_0;
  }
  function imageResource(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    $composer_0.p24(1838739546);
    if (isTraceInProgress()) {
      traceEventStart(1838739546, $changed, -1, 'org.jetbrains.compose.resources.imageResource (ImageResources.kt:59)');
    }
    var resourceReader = get_currentOrPreview(get_LocalResourceReader(), $composer_0, 6);
    var resourceEnvironment = rememberResourceEnvironment($composer_0, 0);
    $composer_0.p24(1334347382);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.h25();
    var tmp;
    if (false || it === Companion_getInstance().i24_1) {
      var value = imageResource$lambda_0;
      $composer_0.i25(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.q24();
    $composer_0.p24(1334348812);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!((($changed & 14 ^ 6) > 4 && $composer_0.j25(resource) || ($changed & 6) === 4) | $composer_0.j25(resourceEnvironment)) | $composer_0.p25(resourceReader));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.h25();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().i24_1) {
      var value_0 = imageResource$slambda_0(resource, resourceEnvironment, resourceReader, null);
      $composer_0.i25(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.q24();
    var imageBitmap$delegate = rememberResourceState(resource, resourceReader, resourceEnvironment, tmp1_group, tmp2_group, $composer_0, 3072 | 14 & $changed);
    var tmp0 = imageResource$lambda(imageBitmap$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.q24();
    return tmp0;
  }
  function vectorResource$lambda($imageVector$delegate) {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('imageVector', KProperty0, false);
    return $imageVector$delegate.v1();
  }
  function svgPainter$lambda($svgPainter$delegate) {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('svgPainter', KProperty0, false);
    return $svgPainter$delegate.v1();
  }
  function imageResource$lambda($imageBitmap$delegate) {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('imageBitmap', KProperty0, false);
    return $imageBitmap$delegate.v1();
  }
  function emptyImageBitmap$delegate$lambda() {
    _init_properties_ImageResources_kt__6e1y7e();
    return ImageBitmap(1, 1);
  }
  function _get_emptyImageBitmap_$ref_302yd9() {
    return function () {
      return get_emptyImageBitmap();
    };
  }
  function emptyImageVector$delegate$lambda() {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(1);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(1);
    return (new Builder('emptyImageVector', tmp, tmp$ret$1, 1.0, 1.0)).o2e();
  }
  function _get_emptyImageVector_$ref_h5qmfr() {
    return function () {
      return get_emptyImageVector();
    };
  }
  function emptySvgPainter$delegate$lambda() {
    _init_properties_ImageResources_kt__6e1y7e();
    return new BitmapPainter(get_emptyImageBitmap());
  }
  function _get_emptySvgPainter_$ref_tgsxpw() {
    return function () {
      return get_emptySvgPainter();
    };
  }
  function vectorResource$lambda_0() {
    _init_properties_ImageResources_kt__6e1y7e();
    return get_emptyImageVector();
  }
  function vectorResource$slambda$lambda($density) {
    return function (it) {
      return new Vector(toImageVector(toXmlElement(it), $density));
    };
  }
  function vectorResource$slambda($resource, $resourceReader, $density, resultContinuation) {
    this.hg6_1 = $resource;
    this.ig6_1 = $resourceReader;
    this.jg6_1 = $density;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(vectorResource$slambda).lg6 = function (env, $completion) {
    var tmp = this.mg6(env, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(vectorResource$slambda).f9 = function (p1, $completion) {
    return this.lg6(p1 instanceof ResourceEnvironment ? p1 : THROW_CCE(), $completion);
  };
  protoOf(vectorResource$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var path = getResourceItemByEnvironment(this.hg6_1, this.kg6_1).tg5_1;
            this.n8_1 = 1;
            suspendResult = loadImage(path, path, this.ig6_1, vectorResource$slambda$lambda(this.jg6_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cached = suspendResult instanceof Vector ? suspendResult : THROW_CCE();
            return cached.pg5_1;
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
  protoOf(vectorResource$slambda).mg6 = function (env, completion) {
    var i = new vectorResource$slambda(this.hg6_1, this.ig6_1, this.jg6_1, completion);
    i.kg6_1 = env;
    return i;
  };
  function vectorResource$slambda_0($resource, $resourceReader, $density, resultContinuation) {
    var i = new vectorResource$slambda($resource, $resourceReader, $density, resultContinuation);
    var l = function (env, $completion) {
      return i.lg6(env, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function loadImage$slambda($decode, $resourceReader, $path, resultContinuation) {
    this.vg6_1 = $decode;
    this.wg6_1 = $resourceReader;
    this.xg6_1 = $path;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(loadImage$slambda).yg6 = function ($completion) {
    var tmp = this.n1s($completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(loadImage$slambda).o1s = function ($completion) {
    return this.yg6($completion);
  };
  protoOf(loadImage$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.wg6_1.zg6(this.xg6_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return this.vg6_1(ARGUMENT);
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
  protoOf(loadImage$slambda).n1s = function (completion) {
    return new loadImage$slambda(this.vg6_1, this.wg6_1, this.xg6_1, completion);
  };
  function loadImage$slambda_0($decode, $resourceReader, $path, resultContinuation) {
    var i = new loadImage$slambda($decode, $resourceReader, $path, resultContinuation);
    var l = function ($completion) {
      return i.yg6($completion);
    };
    l.$arity = 0;
    return l;
  }
  function svgPainter$lambda_0() {
    _init_properties_ImageResources_kt__6e1y7e();
    return get_emptySvgPainter();
  }
  function svgPainter$slambda$lambda($density) {
    return function (it) {
      return new Svg(toSvgPainter(toSvgElement(it), $density));
    };
  }
  function svgPainter$slambda($resource, $resourceReader, $density, resultContinuation) {
    this.ig7_1 = $resource;
    this.jg7_1 = $resourceReader;
    this.kg7_1 = $density;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(svgPainter$slambda).mg7 = function (env, $completion) {
    var tmp = this.mg6(env, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(svgPainter$slambda).f9 = function (p1, $completion) {
    return this.mg7(p1 instanceof ResourceEnvironment ? p1 : THROW_CCE(), $completion);
  };
  protoOf(svgPainter$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var path = getResourceItemByEnvironment(this.ig7_1, this.lg7_1).tg5_1;
            this.n8_1 = 1;
            suspendResult = loadImage(path, path, this.jg7_1, svgPainter$slambda$lambda(this.kg7_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cached = suspendResult instanceof Svg ? suspendResult : THROW_CCE();
            return cached.qg5_1;
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
  protoOf(svgPainter$slambda).mg6 = function (env, completion) {
    var i = new svgPainter$slambda(this.ig7_1, this.jg7_1, this.kg7_1, completion);
    i.lg7_1 = env;
    return i;
  };
  function svgPainter$slambda_0($resource, $resourceReader, $density, resultContinuation) {
    var i = new svgPainter$slambda($resource, $resourceReader, $density, resultContinuation);
    var l = function (env, $completion) {
      return i.mg7(env, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function imageResource$lambda_0() {
    _init_properties_ImageResources_kt__6e1y7e();
    return get_emptyImageBitmap();
  }
  function imageResource$slambda$lambda($resourceDensity, $screenDensity) {
    return function (it) {
      return new Bitmap(toImageBitmap(it, $resourceDensity, $screenDensity));
    };
  }
  function imageResource$slambda($resource, $resourceEnvironment, $resourceReader, resultContinuation) {
    this.vg7_1 = $resource;
    this.wg7_1 = $resourceEnvironment;
    this.xg7_1 = $resourceReader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(imageResource$slambda).zg7 = function (env, $completion) {
    var tmp = this.mg6(env, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(imageResource$slambda).f9 = function (p1, $completion) {
    return this.zg7(p1 instanceof ResourceEnvironment ? p1 : THROW_CCE(), $completion);
  };
  protoOf(imageResource$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var item = getResourceItemByEnvironment(this.vg7_1, this.yg7_1);
            var tmp0 = item.sg5_1;
            var tmp$ret$0;
            l$ret$1: do {
              var _iterator__ex2g4s = tmp0.i();
              while (_iterator__ex2g4s.j()) {
                var element = _iterator__ex2g4s.k();
                if (element instanceof DensityQualifier) {
                  tmp$ret$0 = element;
                  break l$ret$1;
                }
              }
              tmp$ret$0 = null;
            }
             while (false);
            var tmp_0 = tmp$ret$0;
            var resourceDensityQualifier = tmp_0 instanceof DensityQualifier ? tmp_0 : null;
            var tmp1_elvis_lhs = resourceDensityQualifier == null ? null : resourceDensityQualifier.cg8_1;
            var resourceDensity = tmp1_elvis_lhs == null ? DensityQualifier_MDPI_getInstance().cg8_1 : tmp1_elvis_lhs;
            var screenDensity = this.wg7_1.gg8_1.cg8_1;
            var path = item.tg5_1;
            this.n8_1 = 1;
            var tmp_1 = path + '-' + screenDensity + 'dpi';
            suspendResult = loadImage(path, tmp_1, this.xg7_1, imageResource$slambda$lambda(resourceDensity, screenDensity), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cached = suspendResult instanceof Bitmap ? suspendResult : THROW_CCE();
            return cached.og5_1;
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
  protoOf(imageResource$slambda).mg6 = function (env, completion) {
    var i = new imageResource$slambda(this.vg7_1, this.wg7_1, this.xg7_1, completion);
    i.yg7_1 = env;
    return i;
  };
  function imageResource$slambda_0($resource, $resourceEnvironment, $resourceReader, resultContinuation) {
    var i = new imageResource$slambda($resource, $resourceEnvironment, $resourceReader, resultContinuation);
    var l = function (env, $completion) {
      return i.zg7(env, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_ImageResources_kt_9gvoi4;
  function _init_properties_ImageResources_kt__6e1y7e() {
    if (!properties_initialized_ImageResources_kt_9gvoi4) {
      properties_initialized_ImageResources_kt_9gvoi4 = true;
      emptyImageBitmap$delegate = lazy(emptyImageBitmap$delegate$lambda);
      emptyImageVector$delegate = lazy(emptyImageVector$delegate$lambda);
      emptySvgPainter$delegate = lazy(emptySvgPainter$delegate$lambda);
      imageCache = new AsyncCache();
      org_jetbrains_compose_resources_DrawableResource$stable = 0;
      org_jetbrains_compose_resources_ImageCache_Bitmap$stable = 8;
      org_jetbrains_compose_resources_ImageCache_Vector$stable = 0;
      org_jetbrains_compose_resources_ImageCache_Svg$stable = 8;
    }
  }
  var org_jetbrains_compose_resources_PluralStringResource$stable;
  var org_jetbrains_compose_resources_LanguageQualifier$stable;
  var org_jetbrains_compose_resources_RegionQualifier$stable;
  function LanguageQualifier(language) {
    this.hg8_1 = language;
  }
  protoOf(LanguageQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof LanguageQualifier))
      THROW_CCE();
    return this.hg8_1 === other.hg8_1;
  };
  protoOf(LanguageQualifier).hashCode = function () {
    return getStringHashCode(this.hg8_1);
  };
  protoOf(LanguageQualifier).toString = function () {
    return "LanguageQualifier(language='" + this.hg8_1 + "')";
  };
  function RegionQualifier(region) {
    this.ig8_1 = region;
  }
  protoOf(RegionQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof RegionQualifier))
      THROW_CCE();
    return this.ig8_1 === other.ig8_1;
  };
  protoOf(RegionQualifier).hashCode = function () {
    return getStringHashCode(this.ig8_1);
  };
  protoOf(RegionQualifier).toString = function () {
    return "RegionQualifier(region='" + this.ig8_1 + "')";
  };
  var ThemeQualifier_LIGHT_instance;
  var ThemeQualifier_DARK_instance;
  function Companion() {
  }
  protoOf(Companion).jg8 = function (isDark) {
    return isDark ? ThemeQualifier_DARK_getInstance() : ThemeQualifier_LIGHT_getInstance();
  };
  var Companion_instance_2;
  function Companion_getInstance_13() {
    return Companion_instance_2;
  }
  var ThemeQualifier_entriesInitialized;
  function ThemeQualifier_initEntries() {
    if (ThemeQualifier_entriesInitialized)
      return Unit_instance;
    ThemeQualifier_entriesInitialized = true;
    ThemeQualifier_LIGHT_instance = new ThemeQualifier('LIGHT', 0);
    ThemeQualifier_DARK_instance = new ThemeQualifier('DARK', 1);
  }
  function ThemeQualifier(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var DensityQualifier_LDPI_instance;
  var DensityQualifier_MDPI_instance;
  var DensityQualifier_HDPI_instance;
  var DensityQualifier_XHDPI_instance;
  var DensityQualifier_XXHDPI_instance;
  var DensityQualifier_XXXHDPI_instance;
  function Companion_0() {
  }
  protoOf(Companion_0).kg8 = function (dpi) {
    return dpi <= DensityQualifier_LDPI_getInstance().cg8_1 ? DensityQualifier_LDPI_getInstance() : dpi <= DensityQualifier_MDPI_getInstance().cg8_1 ? DensityQualifier_MDPI_getInstance() : dpi <= DensityQualifier_HDPI_getInstance().cg8_1 ? DensityQualifier_HDPI_getInstance() : dpi <= DensityQualifier_XHDPI_getInstance().cg8_1 ? DensityQualifier_XHDPI_getInstance() : dpi <= DensityQualifier_XXHDPI_getInstance().cg8_1 ? DensityQualifier_XXHDPI_getInstance() : DensityQualifier_XXXHDPI_getInstance();
  };
  protoOf(Companion_0).lg8 = function (density) {
    return density <= 0.75 ? DensityQualifier_LDPI_getInstance() : density <= 1.0 ? DensityQualifier_MDPI_getInstance() : density <= 1.5 ? DensityQualifier_HDPI_getInstance() : density <= 2.0 ? DensityQualifier_XHDPI_getInstance() : density <= 3.0 ? DensityQualifier_XXHDPI_getInstance() : DensityQualifier_XXXHDPI_getInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_14() {
    return Companion_instance_3;
  }
  function values() {
    return [DensityQualifier_LDPI_getInstance(), DensityQualifier_MDPI_getInstance(), DensityQualifier_HDPI_getInstance(), DensityQualifier_XHDPI_getInstance(), DensityQualifier_XXHDPI_getInstance(), DensityQualifier_XXXHDPI_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var DensityQualifier_entriesInitialized;
  function DensityQualifier_initEntries() {
    if (DensityQualifier_entriesInitialized)
      return Unit_instance;
    DensityQualifier_entriesInitialized = true;
    DensityQualifier_LDPI_instance = new DensityQualifier('LDPI', 0, 120);
    DensityQualifier_MDPI_instance = new DensityQualifier('MDPI', 1, 160);
    DensityQualifier_HDPI_instance = new DensityQualifier('HDPI', 2, 240);
    DensityQualifier_XHDPI_instance = new DensityQualifier('XHDPI', 3, 320);
    DensityQualifier_XXHDPI_instance = new DensityQualifier('XXHDPI', 4, 480);
    DensityQualifier_XXXHDPI_instance = new DensityQualifier('XXXHDPI', 5, 640);
  }
  var $ENTRIES;
  function DensityQualifier(name, ordinal, dpi) {
    Enum.call(this, name, ordinal);
    this.cg8_1 = dpi;
  }
  function ThemeQualifier_LIGHT_getInstance() {
    ThemeQualifier_initEntries();
    return ThemeQualifier_LIGHT_instance;
  }
  function ThemeQualifier_DARK_getInstance() {
    ThemeQualifier_initEntries();
    return ThemeQualifier_DARK_instance;
  }
  function DensityQualifier_LDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_LDPI_instance;
  }
  function DensityQualifier_MDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_MDPI_instance;
  }
  function DensityQualifier_HDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_HDPI_instance;
  }
  function DensityQualifier_XHDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_XHDPI_instance;
  }
  function DensityQualifier_XXHDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_XXHDPI_instance;
  }
  function DensityQualifier_XXXHDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_XXXHDPI_instance;
  }
  var org_jetbrains_compose_resources_Resource$stable;
  var org_jetbrains_compose_resources_ResourceItem$stable;
  function Resource(id, items) {
    this.mg8_1 = id;
    this.ng8_1 = items;
  }
  protoOf(Resource).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Resource))
      THROW_CCE();
    return this.mg8_1 === other.mg8_1;
  };
  protoOf(Resource).hashCode = function () {
    return getStringHashCode(this.mg8_1);
  };
  function ResourceItem(qualifiers, path, offset, size) {
    this.sg5_1 = qualifiers;
    this.tg5_1 = path;
    this.ug5_1 = offset;
    this.vg5_1 = size;
  }
  protoOf(ResourceItem).toString = function () {
    return 'ResourceItem(qualifiers=' + toString(this.sg5_1) + ', path=' + this.tg5_1 + ', offset=' + this.ug5_1.toString() + ', size=' + this.vg5_1.toString() + ')';
  };
  protoOf(ResourceItem).hashCode = function () {
    var result = hashCode(this.sg5_1);
    result = imul(result, 31) + getStringHashCode(this.tg5_1) | 0;
    result = imul(result, 31) + this.ug5_1.hashCode() | 0;
    result = imul(result, 31) + this.vg5_1.hashCode() | 0;
    return result;
  };
  protoOf(ResourceItem).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ResourceItem))
      return false;
    var tmp0_other_with_cast = other instanceof ResourceItem ? other : THROW_CCE();
    if (!equals(this.sg5_1, tmp0_other_with_cast.sg5_1))
      return false;
    if (!(this.tg5_1 === tmp0_other_with_cast.tg5_1))
      return false;
    if (!equalsLong(this.ug5_1, tmp0_other_with_cast.ug5_1))
      return false;
    if (!equalsLong(this.vg5_1, tmp0_other_with_cast.vg5_1))
      return false;
    return true;
  };
  var org_jetbrains_compose_resources_AsyncCache$stable;
  var org_jetbrains_compose_resources_ResourceCaches$stable;
  function AsyncCache$getOrLoad$slambda$slambda($load, resultContinuation) {
    this.wg8_1 = $load;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncCache$getOrLoad$slambda$slambda).yg8 = function ($this$async, $completion) {
    var tmp = this.r1n($this$async, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(AsyncCache$getOrLoad$slambda$slambda).f9 = function (p1, $completion) {
    return this.yg8((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncCache$getOrLoad$slambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.wg8_1(this);
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
  protoOf(AsyncCache$getOrLoad$slambda$slambda).r1n = function ($this$async, completion) {
    var i = new AsyncCache$getOrLoad$slambda$slambda(this.wg8_1, completion);
    i.xg8_1 = $this$async;
    return i;
  };
  function AsyncCache$getOrLoad$slambda$slambda_0($load, resultContinuation) {
    var i = new AsyncCache$getOrLoad$slambda$slambda($load, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.yg8($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncCache$getOrLoad$slambda(this$0, $key, $load, resultContinuation) {
    this.hg9_1 = this$0;
    this.ig9_1 = $key;
    this.jg9_1 = $load;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncCache$getOrLoad$slambda).yg8 = function ($this$coroutineScope, $completion) {
    var tmp = this.r1n($this$coroutineScope, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(AsyncCache$getOrLoad$slambda).f9 = function (p1, $completion) {
    return this.yg8((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncCache$getOrLoad$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            this.mg9_1 = this.hg9_1.wg5_1;
            var tmp_0 = this;
            tmp_0.lg9_1 = null;
            this.n8_1 = 1;
            suspendResult = this.mg9_1.g1z(this.lg9_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp$ret$0 = Unit_instance;
            l$ret$1: do {
              var tmp_1;
              try {
                var cached = this.hg9_1.xg5_1.y1(this.ig9_1);
                if (cached == null || cached.tw()) {
                  var tmp_2 = CoroutineStart_LAZY_getInstance();
                  cached = async(this.kg9_1, VOID, tmp_2, AsyncCache$getOrLoad$slambda$slambda_0(this.jg9_1, null));
                  var tmp0 = this.hg9_1.xg5_1;
                  var tmp2 = this.ig9_1;
                  var value = cached;
                  tmp0.b2(tmp2, value);
                }
                tmp$ret$0 = cached;
                break l$ret$1;
              } catch ($p) {
                var tmp_3;
                var t = $p;
                this.mg9_1.i1z(this.lg9_1);
                throw t;
              }
            }
             while (false);
            var tmp_4 = tmp$ret$0;
            this.mg9_1.i1z(this.lg9_1);
            var deferred = tmp_4;
            this.n8_1 = 2;
            suspendResult = deferred.vy(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  protoOf(AsyncCache$getOrLoad$slambda).r1n = function ($this$coroutineScope, completion) {
    var i = new AsyncCache$getOrLoad$slambda(this.hg9_1, this.ig9_1, this.jg9_1, completion);
    i.kg9_1 = $this$coroutineScope;
    return i;
  };
  function AsyncCache$getOrLoad$slambda_0(this$0, $key, $load, resultContinuation) {
    var i = new AsyncCache$getOrLoad$slambda(this$0, $key, $load, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.yg8($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncCache() {
    this.wg5_1 = Mutex();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.xg5_1 = LinkedHashMap_init_$Create$();
    ResourceCaches_getInstance().og9(this);
  }
  protoOf(AsyncCache).yg5 = function (key, load, $completion) {
    return coroutineScope(AsyncCache$getOrLoad$slambda_0(this, key, load, null), $completion);
  };
  function ResourceCaches() {
    ResourceCaches_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.ng9_1 = ArrayList_init_$Create$();
  }
  protoOf(ResourceCaches).og9 = function (cache) {
    return this.ng9_1.h(cache);
  };
  var ResourceCaches_instance;
  function ResourceCaches_getInstance() {
    if (ResourceCaches_instance == null)
      new ResourceCaches();
    return ResourceCaches_instance;
  }
  function get_DefaultComposeEnvironment() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return DefaultComposeEnvironment;
  }
  var DefaultComposeEnvironment;
  function get_LocalComposeEnvironment() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return LocalComposeEnvironment;
  }
  var LocalComposeEnvironment;
  var getResourceEnvironment;
  var org_jetbrains_compose_resources_ResourceEnvironment$stable;
  function ResourceEnvironment(language, region, theme, density) {
    this.dg8_1 = language;
    this.eg8_1 = region;
    this.fg8_1 = theme;
    this.gg8_1 = density;
  }
  protoOf(ResourceEnvironment).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ResourceEnvironment))
      THROW_CCE();
    if (!this.dg8_1.equals(other.dg8_1))
      return false;
    if (!this.eg8_1.equals(other.eg8_1))
      return false;
    if (!this.fg8_1.equals(other.fg8_1))
      return false;
    if (!this.gg8_1.equals(other.gg8_1))
      return false;
    return true;
  };
  protoOf(ResourceEnvironment).hashCode = function () {
    var result = this.dg8_1.hashCode();
    result = imul(31, result) + this.eg8_1.hashCode() | 0;
    result = imul(31, result) + this.fg8_1.hashCode() | 0;
    result = imul(31, result) + this.gg8_1.hashCode() | 0;
    return result;
  };
  function getResourceItemByEnvironment(_this__u8e3s4, environment) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.also' call
    var this_0 = filterByLocale(toList(_this__u8e3s4.ng8_1), environment.dg8_1, environment.eg8_1);
    if (this_0.l() === 1)
      return first(this_0);
    // Inline function 'kotlin.also' call
    var this_1 = filterBy(this_0, environment.fg8_1);
    if (this_1.l() === 1)
      return first(this_1);
    // Inline function 'kotlin.also' call
    var this_2 = filterByDensity(this_1, environment.gg8_1);
    if (this_2.l() === 1)
      return first(this_2);
    // Inline function 'kotlin.let' call
    var tmp;
    if (this_2.n()) {
      // Inline function 'kotlin.error' call
      var message = "Resource with ID='" + _this__u8e3s4.mg8_1 + "' not found";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      // Inline function 'kotlin.error' call
      var message_0 = "Resource with ID='" + _this__u8e3s4.mg8_1 + "' has more than one file: " + joinToString(this_2, VOID, VOID, VOID, VOID, VOID, getResourceItemByEnvironment$lambda);
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  }
  function rememberResourceEnvironment($composer, $changed) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    var $composer_0 = $composer;
    $composer_0.p24(707674437);
    if (isTraceInProgress()) {
      traceEventStart(707674437, $changed, -1, 'org.jetbrains.compose.resources.rememberResourceEnvironment (ResourceEnvironment.kt:71)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalComposeEnvironment();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.t25(this_0);
    sourceInformationMarkerEnd($composer_1);
    var composeEnvironment = tmp0;
    var tmp0_0 = composeEnvironment.rg5($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.q24();
    return tmp0_0;
  }
  function filterByDensity(_this__u8e3s4, density) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    var items = _this__u8e3s4;
    var withQualifier = emptyList();
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = get_entries();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (element.cg8_1 >= density.cg8_1) {
        destination.h(element);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = filterByDensity$lambda;
    var tmp$ret$3 = new sam$kotlin_Comparator$0(tmp);
    var exactAndHigherQualifiers = sortedWith(destination, tmp$ret$3);
    var _iterator__ex2g4s_0 = exactAndHigherQualifiers.i();
    $l$loop: while (_iterator__ex2g4s_0.j()) {
      var qualifier = _iterator__ex2g4s_0.k();
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_1 = items.i();
      while (_iterator__ex2g4s_1.j()) {
        var element_0 = _iterator__ex2g4s_1.k();
        var tmp0_0 = element_0.sg5_1;
        var tmp$ret$5;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp_0;
          if (isInterface(tmp0_0, Collection)) {
            tmp_0 = tmp0_0.n();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$5 = false;
            break $l$block_0;
          }
          var _iterator__ex2g4s_2 = tmp0_0.i();
          while (_iterator__ex2g4s_2.j()) {
            var element_1 = _iterator__ex2g4s_2.k();
            if (equals(element_1, qualifier)) {
              tmp$ret$5 = true;
              break $l$block_0;
            }
          }
          tmp$ret$5 = false;
        }
        if (tmp$ret$5) {
          destination_0.h(element_0);
        }
      }
      withQualifier = destination_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!withQualifier.n())
        break $l$loop;
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withQualifier.n())
      return withQualifier;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_1 = minus(get_entries(), DensityQualifier_LDPI_getInstance());
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_3 = tmp0_1.i();
    while (_iterator__ex2g4s_3.j()) {
      var element_2 = _iterator__ex2g4s_3.k();
      if (element_2.cg8_1 < density.cg8_1) {
        destination_1.h(element_2);
      }
    }
    // Inline function 'kotlin.collections.sortedByDescending' call
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_1 = filterByDensity$lambda_0;
    var tmp$ret$15 = new sam$kotlin_Comparator$0(tmp_1);
    var lowQualifiers = sortedWith(destination_1, tmp$ret$15);
    var _iterator__ex2g4s_4 = lowQualifiers.i();
    $l$loop_0: while (_iterator__ex2g4s_4.j()) {
      var qualifier_0 = _iterator__ex2g4s_4.k();
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_2 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_5 = items.i();
      while (_iterator__ex2g4s_5.j()) {
        var element_3 = _iterator__ex2g4s_5.k();
        var tmp0_2 = element_3.sg5_1;
        var tmp$ret$17;
        $l$block_2: {
          // Inline function 'kotlin.collections.any' call
          var tmp_2;
          if (isInterface(tmp0_2, Collection)) {
            tmp_2 = tmp0_2.n();
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            tmp$ret$17 = false;
            break $l$block_2;
          }
          var _iterator__ex2g4s_6 = tmp0_2.i();
          while (_iterator__ex2g4s_6.j()) {
            var element_4 = _iterator__ex2g4s_6.k();
            if (equals(element_4, qualifier_0)) {
              tmp$ret$17 = true;
              break $l$block_2;
            }
          }
          tmp$ret$17 = false;
        }
        if (tmp$ret$17) {
          destination_2.h(element_3);
        }
      }
      withQualifier = destination_2;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!withQualifier.n())
        break $l$loop_0;
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withQualifier.n())
      return withQualifier;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_3 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_7 = items.i();
    while (_iterator__ex2g4s_7.j()) {
      var element_5 = _iterator__ex2g4s_7.k();
      var tmp0_3 = element_5.sg5_1;
      var tmp$ret$24;
      $l$block_4: {
        // Inline function 'kotlin.collections.none' call
        var tmp_3;
        if (isInterface(tmp0_3, Collection)) {
          tmp_3 = tmp0_3.n();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$24 = true;
          break $l$block_4;
        }
        var _iterator__ex2g4s_8 = tmp0_3.i();
        while (_iterator__ex2g4s_8.j()) {
          var element_6 = _iterator__ex2g4s_8.k();
          if (element_6 instanceof DensityQualifier) {
            tmp$ret$24 = false;
            break $l$block_4;
          }
        }
        tmp$ret$24 = true;
      }
      if (tmp$ret$24) {
        destination_3.h(element_5);
      }
    }
    var withNoDensity = destination_3;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withNoDensity.n())
      return withNoDensity;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_4 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_9 = items.i();
    while (_iterator__ex2g4s_9.j()) {
      var element_7 = _iterator__ex2g4s_9.k();
      var tmp0_4 = element_7.sg5_1;
      var tmp$ret$30;
      $l$block_6: {
        // Inline function 'kotlin.collections.any' call
        var tmp_4;
        if (isInterface(tmp0_4, Collection)) {
          tmp_4 = tmp0_4.n();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          tmp$ret$30 = false;
          break $l$block_6;
        }
        var _iterator__ex2g4s_10 = tmp0_4.i();
        while (_iterator__ex2g4s_10.j()) {
          var element_8 = _iterator__ex2g4s_10.k();
          if (equals(element_8, DensityQualifier_LDPI_getInstance())) {
            tmp$ret$30 = true;
            break $l$block_6;
          }
        }
        tmp$ret$30 = false;
      }
      if (tmp$ret$30) {
        destination_4.h(element_7);
      }
    }
    return destination_4;
  }
  function filterBy(_this__u8e3s4, qualifier) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = _this__u8e3s4.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var tmp0 = element.sg5_1;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp;
        if (isInterface(tmp0, Collection)) {
          tmp = tmp0.n();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s_0 = tmp0.i();
        while (_iterator__ex2g4s_0.j()) {
          var element_0 = _iterator__ex2g4s_0.k();
          if (equals(element_0, qualifier)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      if (tmp$ret$0) {
        destination.h(element);
      }
    }
    var withQualifier = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withQualifier.n())
      return withQualifier;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_1 = _this__u8e3s4.i();
    while (_iterator__ex2g4s_1.j()) {
      var element_1 = _iterator__ex2g4s_1.k();
      var tmp0_0 = element_1.sg5_1;
      var tmp$ret$6;
      $l$block_2: {
        // Inline function 'kotlin.collections.none' call
        var tmp_0;
        if (isInterface(tmp0_0, Collection)) {
          tmp_0 = tmp0_0.n();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$6 = true;
          break $l$block_2;
        }
        var _iterator__ex2g4s_2 = tmp0_0.i();
        while (_iterator__ex2g4s_2.j()) {
          var element_2 = _iterator__ex2g4s_2.k();
          if (getKClassFromExpression(element_2).equals(getKClassFromExpression(qualifier))) {
            tmp$ret$6 = false;
            break $l$block_2;
          }
        }
        tmp$ret$6 = true;
      }
      if (tmp$ret$6) {
        destination_0.h(element_1);
      }
    }
    return destination_0;
  }
  function filterByLocale(_this__u8e3s4, language, region) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = _this__u8e3s4.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var tmp0 = element.sg5_1;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp;
        if (isInterface(tmp0, Collection)) {
          tmp = tmp0.n();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s_0 = tmp0.i();
        while (_iterator__ex2g4s_0.j()) {
          var element_0 = _iterator__ex2g4s_0.k();
          if (equals(element_0, language)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      if (tmp$ret$0) {
        destination.h(element);
      }
    }
    var withLanguage = destination;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_1 = withLanguage.i();
    while (_iterator__ex2g4s_1.j()) {
      var element_1 = _iterator__ex2g4s_1.k();
      var tmp0_0 = element_1.sg5_1;
      var tmp$ret$5;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0_0, Collection)) {
          tmp_0 = tmp0_0.n();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$5 = false;
          break $l$block_2;
        }
        var _iterator__ex2g4s_2 = tmp0_0.i();
        while (_iterator__ex2g4s_2.j()) {
          var element_2 = _iterator__ex2g4s_2.k();
          if (equals(element_2, region)) {
            tmp$ret$5 = true;
            break $l$block_2;
          }
        }
        tmp$ret$5 = false;
      }
      if (tmp$ret$5) {
        destination_0.h(element_1);
      }
    }
    var withExactLocale = destination_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withExactLocale.n())
      return withExactLocale;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_3 = withLanguage.i();
    while (_iterator__ex2g4s_3.j()) {
      var element_3 = _iterator__ex2g4s_3.k();
      var tmp0_1 = element_3.sg5_1;
      var tmp$ret$11;
      $l$block_4: {
        // Inline function 'kotlin.collections.none' call
        var tmp_1;
        if (isInterface(tmp0_1, Collection)) {
          tmp_1 = tmp0_1.n();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$11 = true;
          break $l$block_4;
        }
        var _iterator__ex2g4s_4 = tmp0_1.i();
        while (_iterator__ex2g4s_4.j()) {
          var element_4 = _iterator__ex2g4s_4.k();
          if (element_4 instanceof RegionQualifier) {
            tmp$ret$11 = false;
            break $l$block_4;
          }
        }
        tmp$ret$11 = true;
      }
      if (tmp$ret$11) {
        destination_1.h(element_3);
      }
    }
    var withDefaultRegion = destination_1;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withDefaultRegion.n())
      return withDefaultRegion;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_2 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_5 = _this__u8e3s4.i();
    while (_iterator__ex2g4s_5.j()) {
      var element_5 = _iterator__ex2g4s_5.k();
      var tmp0_2 = element_5.sg5_1;
      var tmp$ret$17;
      $l$block_6: {
        // Inline function 'kotlin.collections.none' call
        var tmp_2;
        if (isInterface(tmp0_2, Collection)) {
          tmp_2 = tmp0_2.n();
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          tmp$ret$17 = true;
          break $l$block_6;
        }
        var _iterator__ex2g4s_6 = tmp0_2.i();
        while (_iterator__ex2g4s_6.j()) {
          var element_6 = _iterator__ex2g4s_6.k();
          var tmp_3;
          if (element_6 instanceof LanguageQualifier) {
            tmp_3 = true;
          } else {
            tmp_3 = element_6 instanceof RegionQualifier;
          }
          if (tmp_3) {
            tmp$ret$17 = false;
            break $l$block_6;
          }
        }
        tmp$ret$17 = true;
      }
      if (tmp$ret$17) {
        destination_2.h(element_5);
      }
    }
    return destination_2;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.pg9_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).zb = function (a, b) {
    return this.pg9_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.zb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).v2 = function () {
    return this.pg9_1;
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
  function DefaultComposeEnvironment$1() {
  }
  protoOf(DefaultComposeEnvironment$1).rg5 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p24(1808039825);
    if (isTraceInProgress()) {
      traceEventStart(1808039825, $changed, -1, 'org.jetbrains.compose.resources.DefaultComposeEnvironment.<no name provided>.rememberEnvironment (ResourceEnvironment.kt:43)');
    }
    var composeLocale = Companion_instance.p22();
    var composeTheme = isSystemInDarkTheme($composer_0, 0);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.t25(this_0);
    sourceInformationMarkerEnd($composer_1);
    var composeDensity = tmp0;
    $composer_0.p24(1697237979);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!($composer_0.j25(composeLocale) | $composer_0.k25(composeTheme)) | $composer_0.j25(composeDensity));
    // Inline function 'kotlin.let' call
    var it = $composer_0.h25();
    var tmp;
    if (invalid || it === Companion_getInstance().i24_1) {
      var value = new ResourceEnvironment(new LanguageQualifier(composeLocale.c63()), new RegionQualifier(composeLocale.d63()), Companion_instance_2.jg8(composeTheme), Companion_instance_3.lg8(composeDensity.z4m()));
      $composer_0.i25(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.q24();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.q24();
    return tmp1_group;
  };
  function LocalComposeEnvironment$lambda() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return get_DefaultComposeEnvironment();
  }
  function getSystemEnvironment$ref() {
    var l = function () {
      return getSystemEnvironment();
    };
    l.callableName = 'getSystemEnvironment';
    return l;
  }
  function getResourceItemByEnvironment$lambda(it) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return it.tg5_1;
  }
  function filterByDensity$lambda(a, b) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.cg8_1;
    var tmp$ret$1 = b.cg8_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function filterByDensity$lambda_0(a, b) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.cg8_1;
    var tmp$ret$1 = a.cg8_1;
    return compareValues(tmp, tmp$ret$1);
  }
  var properties_initialized_ResourceEnvironment_kt_6hb9vv;
  function _init_properties_ResourceEnvironment_kt__2jx9u5() {
    if (!properties_initialized_ResourceEnvironment_kt_6hb9vv) {
      properties_initialized_ResourceEnvironment_kt_6hb9vv = true;
      DefaultComposeEnvironment = new DefaultComposeEnvironment$1();
      LocalComposeEnvironment = staticCompositionLocalOf(LocalComposeEnvironment$lambda);
      getResourceEnvironment = getSystemEnvironment$ref();
      org_jetbrains_compose_resources_ResourceEnvironment$stable = 0;
    }
  }
  function get_DefaultResourceReader() {
    _init_properties_ResourceReader_kt__hdc5sh();
    return DefaultResourceReader;
  }
  var DefaultResourceReader;
  function get_LocalResourceReader() {
    _init_properties_ResourceReader_kt__hdc5sh();
    return LocalResourceReader;
  }
  var LocalResourceReader;
  var org_jetbrains_compose_resources_MissingResourceException$stable;
  function MissingResourceException(path) {
    Exception_init_$Init$('Missing resource with path: ' + path, this);
    captureStack(this, MissingResourceException);
  }
  function LocalResourceReader$lambda() {
    _init_properties_ResourceReader_kt__hdc5sh();
    return get_DefaultResourceReader();
  }
  var properties_initialized_ResourceReader_kt_tqilcj;
  function _init_properties_ResourceReader_kt__hdc5sh() {
    if (!properties_initialized_ResourceReader_kt_tqilcj) {
      properties_initialized_ResourceReader_kt_tqilcj = true;
      DefaultResourceReader = getPlatformResourceReader();
      LocalResourceReader = staticCompositionLocalOf(LocalResourceReader$lambda);
      org_jetbrains_compose_resources_MissingResourceException$stable = 0;
    }
  }
  var org_jetbrains_compose_resources_StringArrayResource$stable;
  var org_jetbrains_compose_resources_StringResource$stable;
  var org_jetbrains_compose_resources_plural_PluralRuleParseException$stable;
  var org_jetbrains_compose_resources_plural_PluralRule_Condition_And$stable;
  var org_jetbrains_compose_resources_plural_PluralRule_Condition_Or$stable;
  var org_jetbrains_compose_resources_plural_PluralRule_Condition_Relation$stable;
  var org_jetbrains_compose_resources_plural_PluralRule$stable;
  var org_jetbrains_compose_resources_plural_PluralRuleList$stable;
  function parseDp(_this__u8e3s4, density) {
    // Inline function 'kotlin.with' call
    var tmp;
    if (_this__u8e3s4 == null) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0.0);
    } else if (endsWith(_this__u8e3s4, 'dp')) {
      // Inline function 'kotlin.text.toFloat' call
      var this_0 = removeSuffix(_this__u8e3s4, 'dp');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'androidx.compose.ui.unit.dp' call
      var this_1 = toDouble(this_0);
      tmp = _Dp___init__impl__ms3zkb(this_1);
    } else if (endsWith(_this__u8e3s4, 'px')) {
      // Inline function 'kotlin.text.toFloat' call
      var this_2 = removeSuffix(_this__u8e3s4, 'px');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$7 = toDouble(this_2);
      tmp = density.i4n(tmp$ret$7);
    } else {
      throw UnsupportedOperationException_init_$Create$('value should ends with dp or px');
    }
    return tmp;
  }
  function parseFillType(fillType) {
    var tmp;
    switch (fillType) {
      case 'nonZero':
        tmp = Companion_getInstance_0().k4x_1;
        break;
      case 'evenOdd':
        tmp = Companion_getInstance_0().l4x_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown fillType: ' + fillType);
    }
    return tmp;
  }
  function parseStrokeCap(strokeCap) {
    var tmp;
    switch (strokeCap) {
      case 'butt':
        tmp = Companion_getInstance_1().x4x_1;
        break;
      case 'round':
        tmp = Companion_getInstance_1().y4x_1;
        break;
      case 'square':
        tmp = Companion_getInstance_1().z4x_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown strokeCap: ' + strokeCap);
    }
    return tmp;
  }
  function parseStrokeJoin(strokeJoin) {
    var tmp;
    switch (strokeJoin) {
      case 'miter':
        tmp = Companion_getInstance_2().b4y_1;
        break;
      case 'round':
        tmp = Companion_getInstance_2().c4y_1;
        break;
      case 'bevel':
        tmp = Companion_getInstance_2().d4y_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown strokeJoin: ' + strokeJoin);
    }
    return tmp;
  }
  function parseColorValue(color) {
    // Inline function 'kotlin.require' call
    if (!startsWith(color, '#')) {
      var message = 'Invalid color value ' + color;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (color.length) {
      case 7:
        // Inline function 'kotlin.UInt.toInt' call

        var this_0 = toUInt(substring(color, 1), 16);
        tmp = _UInt___get_data__impl__f0vqqw(this_0) | -16777216;
        break;
      case 9:
        // Inline function 'kotlin.UInt.toInt' call

        var this_1 = toUInt(substring(color, 1), 16);
        tmp = _UInt___get_data__impl__f0vqqw(this_1);
        break;
      case 4:
        // Inline function 'kotlin.UInt.toInt' call

        var this_2 = toUInt(substring(color, 1), 16);
        var v = _UInt___get_data__impl__f0vqqw(this_2);
        var k = imul(v >> 8 & 15, 1114112);
        k = k | imul(v >> 4 & 15, 4352);
        k = k | imul(v & 15, 17);
        tmp = k | -16777216;
        break;
      case 5:
        // Inline function 'kotlin.UInt.toInt' call

        var this_3 = toUInt(substring(color, 1), 16);
        var v_0 = _UInt___get_data__impl__f0vqqw(this_3);
        var k_0 = imul(v_0 >> 12 & 15, 285212672);
        k_0 = k_0 | imul(v_0 >> 8 & 15, 1114112);
        k_0 = k_0 | imul(v_0 >> 4 & 15, 4352);
        k_0 = k_0 | imul(v_0 & 15, 17);
        tmp = k_0 | -16777216;
        break;
      default:
        tmp = -16777216;
        break;
    }
    return tmp;
  }
  function parseTileMode(tileMode) {
    var tmp;
    switch (tileMode) {
      case 'clamp':
        tmp = Companion_getInstance_3().h4r_1;
        break;
      case 'repeated':
        tmp = Companion_getInstance_3().i4r_1;
        break;
      case 'mirror':
        tmp = Companion_getInstance_3().j4r_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown tileMode: ' + tileMode);
    }
    return tmp;
  }
  function toImageVector(_this__u8e3s4, density) {
    var context = new BuildContext();
    var tmp = parseDp(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'width'), density);
    var tmp_0 = parseDp(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'height'), density);
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'viewportWidth');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp_2 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'viewportHeight');
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_3;
    var builder = new Builder(VOID, tmp, tmp_0, tmp_2, tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs, VOID, VOID, attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'autoMirrored') === 'true');
    parseVectorNodes(_this__u8e3s4, builder, context);
    return builder.o2e();
  }
  var Group_Real_instance;
  var Group_Virtual_instance;
  var Group_entriesInitialized;
  function Group_initEntries() {
    if (Group_entriesInitialized)
      return Unit_instance;
    Group_entriesInitialized = true;
    Group_Real_instance = new Group('Real', 0);
    Group_Virtual_instance = new Group('Virtual', 1);
  }
  function Group(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Group_Real_getInstance() {
    Group_initEntries();
    return Group_Real_instance;
  }
  function Group_Virtual_getInstance() {
    Group_initEntries();
    return Group_Virtual_instance;
  }
  function BuildContext() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.qg9_1 = ArrayList_init_$Create$();
  }
  function attributeOrNull(_this__u8e3s4, namespace, name) {
    var value = _this__u8e3s4.rg9(namespace, name);
    var tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(value)) {
      tmp = value;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function parseVectorNodes(_this__u8e3s4, builder, context) {
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, parseVectorNodes$lambda);
    // Inline function 'kotlin.sequences.forEach' call
    var _iterator__ex2g4s = (isInterface(tmp, Sequence) ? tmp : THROW_CCE()).i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      parseVectorNode(element, builder, context);
    }
  }
  function get_childrenSequence(_this__u8e3s4) {
    return sequence(_get_childrenSequence_$slambda_9jpw3j_0(_this__u8e3s4, null));
  }
  function parseVectorNode(_this__u8e3s4, builder, context) {
    switch (_this__u8e3s4.sg9()) {
      case 'path':
        parsePath(_this__u8e3s4, builder);
        break;
      case 'clip-path':
        parseClipPath(_this__u8e3s4, builder, context);
        break;
      case 'group':
        parseGroup(_this__u8e3s4, builder, context);
        break;
    }
  }
  function parsePath(_this__u8e3s4, builder) {
    var tmp = addPathNodes(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pathData'));
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillType');
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = parseFillType(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    var tmp_2 = tmp1_elvis_lhs;
    if ((tmp_2 == null ? null : new PathFillType(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_0().k4x_1;
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var tmp_3 = tmp_1;
    var tmp2_elvis_lhs = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'name');
    var tmp_4 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp3_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillColor');
    var tmp_5;
    if (tmp3_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_5 = parseStringBrush(tmp3_safe_receiver);
    }
    var tmp4_elvis_lhs = tmp_5;
    var tmp_6;
    if (tmp4_elvis_lhs == null) {
      var tmp5_safe_receiver = apptAttr(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillColor');
      var tmp_7;
      if (tmp5_safe_receiver == null) {
        tmp_7 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_7 = parseElementBrush(tmp5_safe_receiver);
      }
      tmp_6 = tmp_7;
    } else {
      tmp_6 = tmp4_elvis_lhs;
    }
    var tmp_8 = tmp_6;
    var tmp6_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillAlpha');
    var tmp_9;
    if (tmp6_safe_receiver == null) {
      tmp_9 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_9 = toDouble(tmp6_safe_receiver);
    }
    var tmp7_elvis_lhs = tmp_9;
    var tmp_10 = tmp7_elvis_lhs == null ? 1.0 : tmp7_elvis_lhs;
    var tmp8_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeColor');
    var tmp_11;
    if (tmp8_safe_receiver == null) {
      tmp_11 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_11 = parseStringBrush(tmp8_safe_receiver);
    }
    var tmp9_elvis_lhs = tmp_11;
    var tmp_12;
    if (tmp9_elvis_lhs == null) {
      var tmp10_safe_receiver = apptAttr(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeColor');
      var tmp_13;
      if (tmp10_safe_receiver == null) {
        tmp_13 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_13 = parseElementBrush(tmp10_safe_receiver);
      }
      tmp_12 = tmp_13;
    } else {
      tmp_12 = tmp9_elvis_lhs;
    }
    var tmp_14 = tmp_12;
    var tmp11_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeAlpha');
    var tmp_15;
    if (tmp11_safe_receiver == null) {
      tmp_15 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_15 = toDouble(tmp11_safe_receiver);
    }
    var tmp12_elvis_lhs = tmp_15;
    var tmp_16 = tmp12_elvis_lhs == null ? 1.0 : tmp12_elvis_lhs;
    var tmp13_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeWidth');
    var tmp_17;
    if (tmp13_safe_receiver == null) {
      tmp_17 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_17 = toDouble(tmp13_safe_receiver);
    }
    var tmp14_elvis_lhs = tmp_17;
    var tmp_18 = tmp14_elvis_lhs == null ? 1.0 : tmp14_elvis_lhs;
    var tmp15_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeLineCap');
    var tmp_19;
    if (tmp15_safe_receiver == null) {
      tmp_19 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_19 = parseStrokeCap(tmp15_safe_receiver);
    }
    var tmp16_elvis_lhs = tmp_19;
    var tmp_20;
    var tmp_21 = tmp16_elvis_lhs;
    if ((tmp_21 == null ? null : new StrokeCap(tmp_21)) == null) {
      tmp_20 = Companion_getInstance_1().x4x_1;
    } else {
      tmp_20 = tmp16_elvis_lhs;
    }
    var tmp_22 = tmp_20;
    var tmp17_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeLineJoin');
    var tmp_23;
    if (tmp17_safe_receiver == null) {
      tmp_23 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_23 = parseStrokeJoin(tmp17_safe_receiver);
    }
    var tmp18_elvis_lhs = tmp_23;
    var tmp_24;
    var tmp_25 = tmp18_elvis_lhs;
    if ((tmp_25 == null ? null : new StrokeJoin(tmp_25)) == null) {
      tmp_24 = Companion_getInstance_2().b4y_1;
    } else {
      tmp_24 = tmp18_elvis_lhs;
    }
    var tmp_26 = tmp_24;
    var tmp19_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeMiterLimit');
    var tmp_27;
    if (tmp19_safe_receiver == null) {
      tmp_27 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_27 = toDouble(tmp19_safe_receiver);
    }
    var tmp20_elvis_lhs = tmp_27;
    var tmp_28 = tmp20_elvis_lhs == null ? 1.0 : tmp20_elvis_lhs;
    var tmp21_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'trimPathStart');
    var tmp_29;
    if (tmp21_safe_receiver == null) {
      tmp_29 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_29 = toDouble(tmp21_safe_receiver);
    }
    var tmp22_elvis_lhs = tmp_29;
    var tmp_30 = tmp22_elvis_lhs == null ? 0.0 : tmp22_elvis_lhs;
    var tmp23_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'trimPathEnd');
    var tmp_31;
    if (tmp23_safe_receiver == null) {
      tmp_31 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_31 = toDouble(tmp23_safe_receiver);
    }
    var tmp24_elvis_lhs = tmp_31;
    var tmp_32 = tmp24_elvis_lhs == null ? 1.0 : tmp24_elvis_lhs;
    var tmp25_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'trimPathOffset');
    var tmp_33;
    if (tmp25_safe_receiver == null) {
      tmp_33 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_33 = toDouble(tmp25_safe_receiver);
    }
    var tmp26_elvis_lhs = tmp_33;
    builder.b73(tmp, tmp_3, tmp_4, tmp_8, tmp_10, tmp_14, tmp_16, tmp_18, tmp_22, tmp_26, tmp_28, tmp_30, tmp_32, tmp26_elvis_lhs == null ? 0.0 : tmp26_elvis_lhs);
  }
  function parseClipPath(_this__u8e3s4, builder, context) {
    var tmp0_elvis_lhs = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'name');
    builder.z72(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, VOID, VOID, VOID, VOID, VOID, VOID, VOID, addPathNodes(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pathData')));
    context.qg9_1.h(Group_Virtual_getInstance());
  }
  function parseGroup(_this__u8e3s4, builder, context) {
    var tmp0_elvis_lhs = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'name');
    var tmp = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp1_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'rotation');
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = toDouble(tmp1_safe_receiver);
    }
    var tmp2_elvis_lhs = tmp_0;
    var tmp_1 = tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    var tmp3_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pivotX');
    var tmp_2;
    if (tmp3_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = toDouble(tmp3_safe_receiver);
    }
    var tmp4_elvis_lhs = tmp_2;
    var tmp_3 = tmp4_elvis_lhs == null ? 0.0 : tmp4_elvis_lhs;
    var tmp5_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pivotY');
    var tmp_4;
    if (tmp5_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_4 = toDouble(tmp5_safe_receiver);
    }
    var tmp6_elvis_lhs = tmp_4;
    var tmp_5 = tmp6_elvis_lhs == null ? 0.0 : tmp6_elvis_lhs;
    var tmp7_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'scaleX');
    var tmp_6;
    if (tmp7_safe_receiver == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_6 = toDouble(tmp7_safe_receiver);
    }
    var tmp8_elvis_lhs = tmp_6;
    var tmp_7 = tmp8_elvis_lhs == null ? 1.0 : tmp8_elvis_lhs;
    var tmp9_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'scaleY');
    var tmp_8;
    if (tmp9_safe_receiver == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_8 = toDouble(tmp9_safe_receiver);
    }
    var tmp10_elvis_lhs = tmp_8;
    var tmp_9 = tmp10_elvis_lhs == null ? 1.0 : tmp10_elvis_lhs;
    var tmp11_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'translateX');
    var tmp_10;
    if (tmp11_safe_receiver == null) {
      tmp_10 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_10 = toDouble(tmp11_safe_receiver);
    }
    var tmp12_elvis_lhs = tmp_10;
    var tmp_11 = tmp12_elvis_lhs == null ? 0.0 : tmp12_elvis_lhs;
    var tmp13_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'translateY');
    var tmp_12;
    if (tmp13_safe_receiver == null) {
      tmp_12 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_12 = toDouble(tmp13_safe_receiver);
    }
    var tmp14_elvis_lhs = tmp_12;
    builder.y72(tmp, tmp_1, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, tmp14_elvis_lhs == null ? 0.0 : tmp14_elvis_lhs, get_EmptyPath());
    context.qg9_1.h(Group_Real_getInstance());
    parseVectorNodes(_this__u8e3s4, builder, context);
    do {
      var removedGroup = removeLastOrNull(context.qg9_1);
      builder.a73();
    }
     while (equals(removedGroup, Group_Virtual_getInstance()));
  }
  function parseStringBrush(str) {
    return new SolidColor(Color(parseColorValue(str)));
  }
  function apptAttr(_this__u8e3s4, namespace, name) {
    var prefix = _this__u8e3s4.tg9(namespace);
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, apptAttr$lambda);
    // Inline function 'kotlin.sequences.find' call
    var tmp0 = isInterface(tmp, Sequence) ? tmp : THROW_CCE();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (element.ug9() === 'http://schemas.android.com/aapt' && element.vg9() === 'attr' && element.wg9('name') === prefix + ':' + name) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    return tmp$ret$2;
  }
  function parseElementBrush(_this__u8e3s4) {
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, parseElementBrush$lambda);
    // Inline function 'kotlin.sequences.find' call
    var tmp0 = isInterface(tmp, Sequence) ? tmp : THROW_CCE();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (element.sg9() === 'gradient') {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    return tmp0_safe_receiver == null ? null : parseGradient(tmp0_safe_receiver);
  }
  function parseGradient(_this__u8e3s4) {
    switch (attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'type')) {
      case 'linear':
        return parseLinearGradient(_this__u8e3s4);
      case 'radial':
        return parseRadialGradient(_this__u8e3s4);
      case 'sweep':
        return parseSweepGradient(_this__u8e3s4);
      default:
        return null;
    }
  }
  function parseLinearGradient(_this__u8e3s4) {
    var tmp = Companion_instance_0;
    var tmp_0 = parseColorStops(_this__u8e3s4).slice();
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'startX');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp0 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'startY');
    var tmp_2;
    if (tmp2_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp_3 = _Offset___init__impl__c168vi(tmp$ret$6);
    var tmp4_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'endX');
    var tmp_4;
    if (tmp4_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_4 = toDouble(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_4;
    var tmp0_0 = tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs;
    var tmp6_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'endY');
    var tmp_5;
    if (tmp6_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_5 = toDouble(tmp6_safe_receiver);
    }
    var tmp7_elvis_lhs = tmp_5;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2_0 = tmp7_elvis_lhs == null ? 0.0 : tmp7_elvis_lhs;
    var v1_0 = fromInt(toRawBits(tmp0_0));
    var v2_0 = fromInt(toRawBits(val2_0));
    var tmp$ret$14 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
    var tmp_6 = _Offset___init__impl__c168vi(tmp$ret$14);
    var tmp8_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'tileMode');
    var tmp_7;
    if (tmp8_safe_receiver == null) {
      tmp_7 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_7 = parseTileMode(tmp8_safe_receiver);
    }
    var tmp9_elvis_lhs = tmp_7;
    var tmp_8;
    var tmp_9 = tmp9_elvis_lhs;
    if ((tmp_9 == null ? null : new TileMode(tmp_9)) == null) {
      tmp_8 = Companion_getInstance_3().h4r_1;
    } else {
      tmp_8 = tmp9_elvis_lhs;
    }
    return tmp.g4q(tmp_0, tmp_3, tmp_6, tmp_8);
  }
  function parseRadialGradient(_this__u8e3s4) {
    var tmp = Companion_instance_0;
    var tmp_0 = parseColorStops(_this__u8e3s4).slice();
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerX');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp0 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerY');
    var tmp_2;
    if (tmp2_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp_3 = _Offset___init__impl__c168vi(tmp$ret$6);
    var tmp4_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'gradientRadius');
    var tmp_4;
    if (tmp4_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_4 = toDouble(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_4;
    var tmp_5 = tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs;
    var tmp6_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'tileMode');
    var tmp_6;
    if (tmp6_safe_receiver == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_6 = parseTileMode(tmp6_safe_receiver);
    }
    var tmp7_elvis_lhs = tmp_6;
    var tmp_7;
    var tmp_8 = tmp7_elvis_lhs;
    if ((tmp_8 == null ? null : new TileMode(tmp_8)) == null) {
      tmp_7 = Companion_getInstance_3().h4r_1;
    } else {
      tmp_7 = tmp7_elvis_lhs;
    }
    return tmp.h4q(tmp_0, tmp_3, tmp_5, tmp_7);
  }
  function parseSweepGradient(_this__u8e3s4) {
    var tmp = Companion_instance_0;
    var tmp_0 = parseColorStops(_this__u8e3s4).slice();
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerX');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp0 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerY');
    var tmp_2;
    if (tmp2_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$7 = _Offset___init__impl__c168vi(tmp$ret$6);
    return tmp.i4q(tmp_0, tmp$ret$7);
  }
  function parseColorStops(_this__u8e3s4) {
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, parseColorStops$lambda);
    var tmp_0 = isInterface(tmp, Sequence) ? tmp : THROW_CCE();
    var items = toList_0(filter(tmp_0, parseColorStops$lambda_0));
    // Inline function 'kotlin.collections.mutableListOf' call
    // Inline function 'kotlin.collections.mapIndexedNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s = items.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var tmp0_safe_receiver = parseColorStop(item, index_0 / coerceAtLeast(get_lastIndex(items), 1));
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination.h(tmp0_safe_receiver);
      }
    }
    var colorStops = destination;
    if (colorStops.n()) {
      var tmp0_safe_receiver_0 = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'startColor');
      var tmp_1;
      if (tmp0_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_1 = parseColorValue(tmp0_safe_receiver_0);
      }
      var startColor = tmp_1;
      var tmp1_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerColor');
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_2 = parseColorValue(tmp1_safe_receiver);
      }
      var centerColor = tmp_2;
      var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'endColor');
      var tmp_3;
      if (tmp2_safe_receiver == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_3 = parseColorValue(tmp2_safe_receiver);
      }
      var endColor = tmp_3;
      if (!(startColor == null)) {
        colorStops.h(to(0.0, new Color_0(Color(startColor))));
      }
      if (!(centerColor == null)) {
        colorStops.h(to(0.5, new Color_0(Color(centerColor))));
      }
      if (!(endColor == null)) {
        colorStops.h(to(1.0, new Color_0(Color(endColor))));
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(colorStops);
  }
  function parseColorStop(_this__u8e3s4, defaultOffset) {
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'offset');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var offset = tmp1_elvis_lhs == null ? defaultOffset : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'color');
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = parseColorValue(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp3_elvis_lhs == null) {
      return null;
    } else {
      tmp_1 = tmp3_elvis_lhs;
    }
    var color = tmp_1;
    return to(offset, new Color_0(Color(color)));
  }
  function parseVectorNodes$lambda(it) {
    return !(it == null) ? isInterface(it, Element_0) : false;
  }
  function _get_childrenSequence_$slambda_9jpw3j($this_childrenSequence, resultContinuation) {
    this.fga_1 = $this_childrenSequence;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_childrenSequence_$slambda_9jpw3j).iga = function ($this$sequence, $completion) {
    var tmp = this.jga($this$sequence, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(_get_childrenSequence_$slambda_9jpw3j).f9 = function (p1, $completion) {
    return this.iga(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_childrenSequence_$slambda_9jpw3j).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            this.hga_1 = until(0, this.fga_1.kga().a()).i();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!this.hga_1.j()) {
              this.n8_1 = 3;
              continue $sm;
            }

            var i = this.hga_1.k();
            this.n8_1 = 2;
            suspendResult = this.gga_1.le(this.fga_1.kga().lga(i), this);
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
  protoOf(_get_childrenSequence_$slambda_9jpw3j).jga = function ($this$sequence, completion) {
    var i = new _get_childrenSequence_$slambda_9jpw3j(this.fga_1, completion);
    i.gga_1 = $this$sequence;
    return i;
  };
  function _get_childrenSequence_$slambda_9jpw3j_0($this_childrenSequence, resultContinuation) {
    var i = new _get_childrenSequence_$slambda_9jpw3j($this_childrenSequence, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.iga($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function apptAttr$lambda(it) {
    return !(it == null) ? isInterface(it, Element_0) : false;
  }
  function parseElementBrush$lambda(it) {
    return !(it == null) ? isInterface(it, Element_0) : false;
  }
  function parseColorStops$lambda(it) {
    return !(it == null) ? isInterface(it, Element_0) : false;
  }
  function parseColorStops$lambda_0(it) {
    return it.sg9() === 'item';
  }
  function Element_0() {
  }
  var org_jetbrains_compose_resources_vector_xmldom_MalformedXMLException$stable;
  function MalformedXMLException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, MalformedXMLException);
  }
  function toXmlElement(_this__u8e3s4) {
    var xmlString = decodeToString(_this__u8e3s4);
    var xmlDom = (new DOMParser()).parseFromString(xmlString, 'application/xml');
    var tmp0_elvis_lhs = xmlDom.documentElement;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new MalformedXMLException('missing documentElement');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var domElement = tmp;
    return new ElementImpl(domElement);
  }
  var org_jetbrains_compose_resources_Intl_Locale$stable;
  function getSystemEnvironment() {
    var locale = new Intl.Locale(window.navigator.language);
    var isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dpi = numberToInt(window.devicePixelRatio * 96);
    return new ResourceEnvironment(new LanguageQualifier(locale.language), new RegionQualifier(locale.region), Companion_instance_2.jg8(isDarkTheme), Companion_instance_3.kg8(dpi));
  }
  var org_jetbrains_compose_resources_DefaultJsResourceReader$stable;
  function getPlatformResourceReader() {
    if (isInTestEnvironment())
      return TestJsResourceReader_instance;
    return DefaultJsResourceReader_instance;
  }
  function isInTestEnvironment() {
    return window.composeResourcesTesting == true;
  }
  function readByteArray($this, path) {
    var resPath = WebResourcesConfiguration_getInstance().mga_1(path);
    var request = new XMLHttpRequest();
    request.open('GET', resPath, false);
    request.overrideMimeType('text/plain; charset=x-user-defined');
    request.send();
    if (request.status === 200) {
      var text = request.responseText;
      var bytes = new Uint8Array(text.length);
      for (var i = 0; i < text.length; i++) {
        bytes[i] = text.charCodeAt(i) & 255;
      }
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return bytes;
    }
    throw new MissingResourceException(resPath);
  }
  function TestJsResourceReader() {
  }
  protoOf(TestJsResourceReader).zg6 = function (path, $completion) {
    return readByteArray(this, path);
  };
  var TestJsResourceReader_instance;
  function TestJsResourceReader_getInstance() {
    return TestJsResourceReader_instance;
  }
  function readAsBlob($this, path, $completion) {
    var tmp = new $readAsBlobCOROUTINE$($this, path, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function asByteArray($this, _this__u8e3s4, $completion) {
    var tmp = new $asByteArrayCOROUTINE$($this, _this__u8e3s4, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function $readCOROUTINE$(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.qgb_1 = _this__u8e3s4;
    this.rgb_1 = path;
  }
  protoOf($readCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            this.n8_1 = 1;
            suspendResult = readAsBlob(this.qgb_1, this.rgb_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.n8_1 = 2;
            suspendResult = asByteArray(this.qgb_1, ARGUMENT, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $readAsBlobCOROUTINE$(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vga_1 = _this__u8e3s4;
    this.wga_1 = path;
  }
  protoOf($readAsBlobCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            this.xga_1 = WebResourcesConfiguration_getInstance().mga_1(this.wga_1);
            this.n8_1 = 1;
            suspendResult = await_0(window.fetch(this.xga_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            if (!response.ok) {
              throw new MissingResourceException(this.xga_1);
            }

            this.n8_1 = 2;
            suspendResult = await_0(response.blob(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $asByteArrayCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ggb_1 = _this__u8e3s4;
    this.hgb_1 = _this__u8e3s4_0;
  }
  protoOf($asByteArrayCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var tmp_0 = this.hgb_1.arrayBuffer();
            var buffer = tmp_0 instanceof Promise ? tmp_0 : THROW_CCE();
            this.n8_1 = 1;
            suspendResult = await_0(buffer, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new Int8Array(ARGUMENT);
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
  function DefaultJsResourceReader() {
  }
  protoOf(DefaultJsResourceReader).zg6 = function (path, $completion) {
    var tmp = new $readCOROUTINE$(this, path, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  var DefaultJsResourceReader_instance;
  function DefaultJsResourceReader_getInstance() {
    return DefaultJsResourceReader_instance;
  }
  var org_jetbrains_compose_resources_vector_xmldom_ElementImpl$stable;
  function ElementImpl(element) {
    NodeImpl.call(this, element);
    this.wgb_1 = element;
  }
  protoOf(ElementImpl).vg9 = function () {
    return this.wgb_1.localName;
  };
  protoOf(ElementImpl).ug9 = function () {
    var tmp0_elvis_lhs = this.wgb_1.namespaceURI;
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(ElementImpl).rg9 = function (nameSpaceURI, localName) {
    var tmp0_elvis_lhs = this.wgb_1.getAttributeNS(nameSpaceURI, localName);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(ElementImpl).wg9 = function (name) {
    var tmp0_elvis_lhs = this.wgb_1.getAttribute(name);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  var org_jetbrains_compose_resources_vector_xmldom_NodeImpl$stable;
  function NodeImpl$childNodes$3$1(this$0) {
    this.cgc_1 = this$0;
    this.bgc_1 = this$0.xgb_1.childNodes.length;
  }
  protoOf(NodeImpl$childNodes$3$1).lga = function (i) {
    var tmp0_elvis_lhs = this.cgc_1.xgb_1.childNodes.item(i);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IndexOutOfBoundsException_init_$Create$('no child node accessible at index=' + i);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var child = tmp;
    var tmp_0;
    if (child instanceof Element) {
      tmp_0 = new ElementImpl(child);
    } else {
      tmp_0 = new NodeImpl(child);
    }
    return tmp_0;
  };
  protoOf(NodeImpl$childNodes$3$1).a = function () {
    return this.bgc_1;
  };
  function NodeImpl$childNodes$delegate$lambda(this$0) {
    return function () {
      return new NodeImpl$childNodes$3$1(this$0);
    };
  }
  function NodeImpl$_get_childNodes_$ref_tsfx09() {
    return function (p0) {
      return p0.kga();
    };
  }
  function NodeImpl(n) {
    this.xgb_1 = n;
    this.ygb_1 = '';
    this.zgb_1 = '';
    var tmp = this;
    tmp.agc_1 = lazy(NodeImpl$childNodes$delegate$lambda(this));
  }
  protoOf(NodeImpl).sg9 = function () {
    return this.xgb_1.nodeName;
  };
  protoOf(NodeImpl).vg9 = function () {
    return this.ygb_1;
  };
  protoOf(NodeImpl).ug9 = function () {
    return this.zgb_1;
  };
  protoOf(NodeImpl).kga = function () {
    var tmp0 = this.agc_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childNodes', 1, tmp, NodeImpl$_get_childNodes_$ref_tsfx09(), null);
    return tmp0.v1();
  };
  protoOf(NodeImpl).tg9 = function (namespaceURI) {
    var tmp0_elvis_lhs = this.xgb_1.lookupPrefix(namespaceURI);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  var org_jetbrains_compose_resources_DrawCache$stable;
  function clear($this, _this__u8e3s4) {
    _this__u8e3s4.e54(Companion_getInstance_4().t4q_1, VOID, VOID, VOID, VOID, VOID, Companion_getInstance_5().y4o_1);
  }
  function DrawCache() {
    this.dgc_1 = null;
    this.egc_1 = null;
    this.fgc_1 = null;
    this.ggc_1 = LayoutDirection_Ltr_getInstance();
    this.hgc_1 = Companion_getInstance_6().p4o_1;
    this.igc_1 = Companion_getInstance_7().h4v_1;
    this.jgc_1 = new CanvasDrawScope();
  }
  protoOf(DrawCache).b72 = function (config, size, density, layoutDirection, block) {
    this.fgc_1 = density;
    this.ggc_1 = layoutDirection;
    var targetImage = this.dgc_1;
    var targetCanvas = this.egc_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    if (targetImage == null || targetCanvas == null) {
      tmp_1 = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(size);
      tmp_1 = convertToInt(shiftRight(value, 32)) > targetImage.s3u();
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(size);
      tmp_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0))) > targetImage.t3u();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !(this.igc_1 === config);
    }
    if (tmp) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value_1 = _IntSize___get_packedValue__impl__uho7jf(size);
      var tmp_2 = convertToInt(shiftRight(value_1, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_2 = _IntSize___get_packedValue__impl__uho7jf(size);
      var tmp$ret$7 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      targetImage = ImageBitmap(tmp_2, tmp$ret$7, config);
      targetCanvas = Canvas(targetImage);
      this.dgc_1 = targetImage;
      this.egc_1 = targetCanvas;
      this.igc_1 = config;
    }
    this.hgc_1 = size;
    var tmp0 = this.jgc_1;
    var tmp6 = targetCanvas;
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
    var size_0 = toSize(size);
    var _destruct__k2r9zo = tmp0.m52_1;
    var prevDensity = _destruct__k2r9zo.fe();
    var prevLayoutDirection = _destruct__k2r9zo.ge();
    var prevCanvas = _destruct__k2r9zo.fh();
    var prevSize = _destruct__k2r9zo.o53();
    // Inline function 'kotlin.apply' call
    var this_0 = tmp0.m52_1;
    this_0.k53_1 = density;
    this_0.l53_1 = layoutDirection;
    this_0.m53_1 = tmp6;
    this_0.n53_1 = size_0;
    tmp6.k4s();
    clear(this, tmp0);
    block(tmp0);
    tmp6.l4s();
    // Inline function 'kotlin.apply' call
    var this_1 = tmp0.m52_1;
    this_1.k53_1 = prevDensity;
    this_1.l53_1 = prevLayoutDirection;
    this_1.m53_1 = prevCanvas;
    this_1.n53_1 = prevSize;
    targetImage.q5c();
  };
  protoOf(DrawCache).c72 = function (target, alpha, colorFilter) {
    var targetImage = this.dgc_1;
    // Inline function 'kotlin.check' call
    if (!!(targetImage == null)) {
      var message = 'drawCachedImage must be invoked first before attempting to draw the result into another destination';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    target.g54(targetImage, VOID, this.hgc_1, VOID, VOID, alpha, VOID, colorFilter);
  };
  var org_jetbrains_compose_resources_SvgElement$stable;
  function toSvgPainter(_this__u8e3s4, density) {
    return new SvgPainter(_this__u8e3s4.kgc_1, density);
  }
  function SvgElement(svgdom) {
    this.kgc_1 = svgdom;
  }
  function toSvgElement(_this__u8e3s4) {
    return new SvgElement(SVGDOM_init_$Create$(Companion_getInstance_8().r3z(_this__u8e3s4)));
  }
  function toImageBitmap(_this__u8e3s4, resourceDensity, targetDensity) {
    var image = Companion_getInstance_9().x42(_this__u8e3s4);
    var targetImage;
    if (resourceDensity > targetDensity) {
      var scale = targetDensity / resourceDensity;
      var targetH = image.t3u() * scale;
      var targetW = image.s3u() * scale;
      var srcRect = Companion_instance_1.t46(image.s3u(), image.t3u());
      var dstRect = Companion_instance_1.t46(targetW, targetH);
      // Inline function 'kotlin.run' call
      var $this$run = Companion_getInstance_10().n47(numberToInt(targetW), numberToInt(targetH));
      // Inline function 'kotlin.apply' call
      var this_0 = Paint_init_$Create$();
      this_0.q43(true);
      var paint = this_0;
      $this$run.s47().d3y(image, srcRect, dstRect, Companion_getInstance_11().x46_1, paint, true);
      targetImage = $this$run.t47();
    } else {
      targetImage = image;
    }
    return toComposeImageBitmap(targetImage);
  }
  function get_currentOrPreview(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p24(-193451530);
    if (isTraceInProgress()) {
      traceEventStart(-193451530, $changed, -1, 'org.jetbrains.compose.resources.<get-currentOrPreview> (ResourceReader.skiko.kt:6)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.t25(_this__u8e3s4);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.q24();
    return tmp0;
  }
  var org_jetbrains_compose_resources_SvgPainter$stable;
  function drawSvg($this, _this__u8e3s4, size) {
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.a54().s47();
    var tmp0_safe_receiver = $this.tgc_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o(size);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp$ret$3 = floatFromBits(bits);
      tmp0_safe_receiver.z4i(new SVGLength(tmp$ret$3, SVGLengthUnit_PX_getInstance()));
    }
    var tmp1_safe_receiver = $this.tgc_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var tmp$ret$7 = floatFromBits(bits_0);
      tmp1_safe_receiver.a4j(new SVGLength(tmp$ret$7, SVGLengthUnit_PX_getInstance()));
    }
    var tmp2_safe_receiver = $this.tgc_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.b4j(SVGPreserveAspectRatio_init_$Create$(SVGPreserveAspectRatioAlign_NONE_getInstance()));
    }
    $this.rgc_1.k4i(get_nativeCanvas(canvas));
  }
  function SvgPainter$onDraw$lambda(this$0) {
    return function ($this$drawCachedImage) {
      drawSvg(this$0, $this$drawCachedImage, $this$drawCachedImage.z3t());
      return Unit_instance;
    };
  }
  function SvgPainter(dom, density) {
    Painter.call(this);
    this.rgc_1 = dom;
    this.sgc_1 = density;
    this.tgc_1 = this.rgc_1.j4i();
    var tmp = this;
    // Inline function 'kotlin.run' call
    var tmp0_safe_receiver = this.tgc_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s3u();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.o4i(SVGLengthUnit_PX_getInstance());
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.m4i_1;
    var width = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
    var tmp4_safe_receiver = this.tgc_1;
    var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.t3u();
    var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.o4i(SVGLengthUnit_PX_getInstance());
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.m4i_1;
    var height = tmp7_elvis_lhs == null ? 0.0 : tmp7_elvis_lhs;
    var tmp_0;
    if (width === 0.0 && height === 0.0) {
      tmp_0 = Companion_getInstance_12().v3u_1;
    } else {
      // Inline function 'androidx.compose.ui.geometry.Size' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var v1 = fromInt(toRawBits(width));
      var v2 = fromInt(toRawBits(height));
      var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      tmp_0 = _Size___init__impl__aywn0g(tmp$ret$0);
    }
    tmp.ugc_1 = tmp_0;
    var tmp_1;
    var tmp1_safe_receiver_0 = this.tgc_1;
    if ((tmp1_safe_receiver_0 == null ? null : tmp1_safe_receiver_0.d4j()) == null) {
      // Inline function 'androidx.compose.ui.geometry.isSpecified' call
      var this_0 = this.ugc_1;
      tmp_1 = !equalsLong(_Size___get_packedValue__impl__7rlt1o(this_0), new Long(2143289344, 2143289344));
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp0_safe_receiver_0 = this.tgc_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        var tmp_2 = Companion_instance_1;
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        var this_1 = this.ugc_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value = _Size___get_packedValue__impl__7rlt1o(this_1);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits = convertToInt(shiftRight(value, 32));
        var tmp_3 = floatFromBits(bits);
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        var this_2 = this.ugc_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_0 = _Size___get_packedValue__impl__7rlt1o(this_2);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
        var tmp$ret$12 = floatFromBits(bits_0);
        tmp0_safe_receiver_0.c4j(tmp_2.u46(0.0, 0.0, tmp_3, tmp$ret$12));
      }
    }
    this.vgc_1 = Companion_getInstance_12().v3u_1;
    this.wgc_1 = 1.0;
    this.xgc_1 = null;
    this.ygc_1 = new DrawCache();
  }
  protoOf(SvgPainter).c57 = function () {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.ugc_1;
    if (!equalsLong(_Size___get_packedValue__impl__7rlt1o(this_0), new Long(2143289344, 2143289344))) {
      tmp = Size__times_impl_fnp4nc(this.ugc_1, this.sgc_1.z4m());
    } else {
      tmp = Companion_getInstance_12().v3u_1;
    }
    return tmp;
  };
  protoOf(SvgPainter).d57 = function (alpha) {
    this.wgc_1 = alpha;
    return true;
  };
  protoOf(SvgPainter).e57 = function (colorFilter) {
    this.xgc_1 = colorFilter;
    return true;
  };
  protoOf(SvgPainter).b57 = function (_this__u8e3s4) {
    if (!equals(this.vgc_1, _this__u8e3s4.z3t())) {
      var tmp = Companion_getInstance_7().h4v_1;
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      var this_0 = _this__u8e3s4.z3t();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.math.ceil' call
      var x = floatFromBits(bits);
      var tmp$ret$4 = Math.ceil(x);
      var tmp0 = numberToInt(tmp$ret$4);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      var this_1 = _this__u8e3s4.z3t();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.math.ceil' call
      var x_0 = floatFromBits(bits_0);
      var tmp$ret$9 = Math.ceil(x_0);
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = numberToInt(tmp$ret$9);
      var tmp$ret$10 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp_0 = _IntSize___init__impl__emcjft(tmp$ret$10);
      var tmp_1 = _this__u8e3s4.w53();
      this.ygc_1.b72(tmp, tmp_0, _this__u8e3s4, tmp_1, SvgPainter$onDraw$lambda(this));
    }
    this.ygc_1.c72(_this__u8e3s4, this.wgc_1, this.xgc_1);
  };
  var org_jetbrains_compose_resources_WebResourcesConfiguration$stable;
  function WebResourcesConfiguration$getResourcePath$lambda(it) {
    return './' + it;
  }
  function WebResourcesConfiguration() {
    WebResourcesConfiguration_instance = this;
    var tmp = this;
    tmp.mga_1 = WebResourcesConfiguration$getResourcePath$lambda;
  }
  var WebResourcesConfiguration_instance;
  function WebResourcesConfiguration_getInstance() {
    if (WebResourcesConfiguration_instance == null)
      new WebResourcesConfiguration();
    return WebResourcesConfiguration_instance;
  }
  function rememberResourceState(key1, key2, key3, getDefault, block, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.p24(1947629696);
    if (isTraceInProgress()) {
      traceEventStart(1947629696, $changed, -1, 'org.jetbrains.compose.resources.rememberResourceState (ResourceState.web.kt:52)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalComposeEnvironment();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.t25(this_0);
    sourceInformationMarkerEnd($composer_1);
    var environment = tmp0.rg5($composer_0, 0);
    // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
    var getContext = null;
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 773894976, 'CC(rememberCoroutineScope)608@27648L68:Effects.kt#9igjgp');
    if (!((1 & 1) === 0)) {
      getContext = rememberResourceState$lambda;
    }
    var composer = $composer_2;
    sourceInformationMarkerStart($composer_2, 683737348, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_2.h25();
    var tmp;
    if (false || it === Companion_getInstance().i24_1) {
      var value = createCompositionCoroutineScope(getContext(), composer);
      $composer_2.i25(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_2);
    sourceInformationMarkerEnd($composer_2);
    var scope = tmp1_group;
    $composer_0.p24(406080261);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!($composer_0.j25(key1) | $composer_0.j25(key2)) | $composer_0.j25(key3)) | $composer_0.j25(environment));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.h25();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().i24_1) {
      var mutableState = mutableStateOf(getDefault());
      var tmp_2 = CoroutineStart_UNDISPATCHED_getInstance();
      launch(scope, VOID, tmp_2, rememberResourceState$slambda_0(mutableState, block, environment, null));
      var value_0 = mutableState;
      $composer_0.i25(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_3 = tmp_1;
    var tmp1_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_0.q24();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.q24();
    return tmp1_group_0;
  }
  function rememberResourceState$lambda() {
    return EmptyCoroutineContext_getInstance();
  }
  function rememberResourceState$slambda($mutableState, $block, $environment, resultContinuation) {
    this.hgd_1 = $mutableState;
    this.igd_1 = $block;
    this.jgd_1 = $environment;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberResourceState$slambda).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(rememberResourceState$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberResourceState$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.igd_1(this.jgd_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.hgd_1.t1k(ARGUMENT);
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
  protoOf(rememberResourceState$slambda).r1n = function ($this$launch, completion) {
    var i = new rememberResourceState$slambda(this.hgd_1, this.igd_1, this.jgd_1, completion);
    i.kgd_1 = $this$launch;
    return i;
  };
  function rememberResourceState$slambda_0($mutableState, $block, $environment, resultContinuation) {
    var i = new rememberResourceState$slambda($mutableState, $block, $environment, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  //region block: init
  org_jetbrains_compose_resources_FontResource$stable = 0;
  org_jetbrains_compose_resources_PluralStringResource$stable = 0;
  org_jetbrains_compose_resources_LanguageQualifier$stable = 0;
  org_jetbrains_compose_resources_RegionQualifier$stable = 0;
  Companion_instance_2 = new Companion();
  Companion_instance_3 = new Companion_0();
  org_jetbrains_compose_resources_Resource$stable = 0;
  org_jetbrains_compose_resources_ResourceItem$stable = 0;
  org_jetbrains_compose_resources_AsyncCache$stable = 8;
  org_jetbrains_compose_resources_ResourceCaches$stable = 8;
  org_jetbrains_compose_resources_StringArrayResource$stable = 0;
  org_jetbrains_compose_resources_StringResource$stable = 0;
  org_jetbrains_compose_resources_plural_PluralRuleParseException$stable = 0;
  org_jetbrains_compose_resources_plural_PluralRule_Condition_And$stable = 0;
  org_jetbrains_compose_resources_plural_PluralRule_Condition_Or$stable = 0;
  org_jetbrains_compose_resources_plural_PluralRule_Condition_Relation$stable = 8;
  org_jetbrains_compose_resources_plural_PluralRule$stable = 0;
  org_jetbrains_compose_resources_plural_PluralRuleList$stable = 8;
  org_jetbrains_compose_resources_vector_xmldom_MalformedXMLException$stable = 0;
  org_jetbrains_compose_resources_Intl_Locale$stable = 0;
  org_jetbrains_compose_resources_DefaultJsResourceReader$stable = 0;
  TestJsResourceReader_instance = new TestJsResourceReader();
  DefaultJsResourceReader_instance = new DefaultJsResourceReader();
  org_jetbrains_compose_resources_vector_xmldom_ElementImpl$stable = 8;
  org_jetbrains_compose_resources_vector_xmldom_NodeImpl$stable = 8;
  org_jetbrains_compose_resources_DrawCache$stable = 8;
  org_jetbrains_compose_resources_SvgElement$stable = 8;
  org_jetbrains_compose_resources_SvgPainter$stable = 8;
  org_jetbrains_compose_resources_WebResourcesConfiguration$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DrawableResource;
  _.$_$.b = ResourceItem;
  _.$_$.c = painterResource;
  _.$_$.d = vectorResource;
  //endregion
  return _;
}));

//# sourceMappingURL=components-resources-library.js.map
