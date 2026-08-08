(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./skiko-kjs.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'components-resources-library'.");
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
    globalThis['components-resources-library'] = factory(typeof globalThis['components-resources-library'] === 'undefined' ? {} : globalThis['components-resources-library'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['skiko-kjs']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.yg;
  var initMetadataForClass = kotlin_kotlin.$_$.vf;
  var VOID = kotlin_kotlin.$_$.e;
  var KProperty0 = kotlin_kotlin.$_$.ji;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sf;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.q2;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.l2;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.k2;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.z2;
  var THROW_CCE = kotlin_kotlin.$_$.vl;
  var BitmapPainter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.p2;
  var endsWith = kotlin_kotlin.$_$.gj;
  var rememberVectorPainter = kotlin_org_jetbrains_compose_ui_ui.$_$.z;
  var initMetadataForInterface = kotlin_kotlin.$_$.zf;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.v6;
  var getLocalDelegateReference = kotlin_kotlin.$_$.qf;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var Builder = kotlin_org_jetbrains_compose_ui_ui.$_$.w;
  var CoroutineImpl = kotlin_kotlin.$_$.ud;
  var Unit_getInstance = kotlin_kotlin.$_$.n5;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ed;
  var initMetadataForLambda = kotlin_kotlin.$_$.ag;
  var lazy = kotlin_kotlin.$_$.vm;
  var SuspendFunction1 = kotlin_kotlin.$_$.wd;
  var SuspendFunction0 = kotlin_kotlin.$_$.vd;
  var getKClassFromExpression = kotlin_kotlin.$_$.ei;
  var getStringHashCode = kotlin_kotlin.$_$.tf;
  var initMetadataForCompanion = kotlin_kotlin.$_$.wf;
  var THROW_IAE = kotlin_kotlin.$_$.wl;
  var enumEntries = kotlin_kotlin.$_$.be;
  var Enum = kotlin_kotlin.$_$.il;
  var toString = kotlin_kotlin.$_$.bh;
  var hashCode = kotlin_kotlin.$_$.uf;
  var equals = kotlin_kotlin.$_$.nf;
  var equalsLong = kotlin_kotlin.$_$.me;
  var Annotation = kotlin_kotlin.$_$.al;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var isInterface = kotlin_kotlin.$_$.kg;
  var CoroutineStart_LAZY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.xf;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var initMetadataForObject = kotlin_kotlin.$_$.bg;
  var toList = kotlin_kotlin.$_$.rc;
  var first = kotlin_kotlin.$_$.v9;
  var joinToString = kotlin_kotlin.$_$.ia;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var emptyList = kotlin_kotlin.$_$.l9;
  var sortedWith = kotlin_kotlin.$_$.dc;
  var Collection = kotlin_kotlin.$_$.x5;
  var minus = kotlin_kotlin.$_$.db;
  var FunctionAdapter = kotlin_kotlin.$_$.ye;
  var Comparator = kotlin_kotlin.$_$.hl;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.m3;
  var isSystemInDarkTheme = kotlin_org_jetbrains_compose_foundation_foundation.$_$.t1;
  var compareValues = kotlin_kotlin.$_$.ad;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.n2;
  var Exception = kotlin_kotlin.$_$.kl;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.q1;
  var captureStack = kotlin_kotlin.$_$.cf;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.g1;
  var to = kotlin_kotlin.$_$.jn;
  var mapOf = kotlin_kotlin.$_$.za;
  var equals_0 = kotlin_kotlin.$_$.hj;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var removeSuffix = kotlin_kotlin.$_$.xj;
  var toDouble = kotlin_kotlin.$_$.lk;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r4;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u4;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v4;
  var startsWith = kotlin_kotlin.$_$.fk;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var substring = kotlin_kotlin.$_$.ik;
  var toUInt = kotlin_kotlin.$_$.sk;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.r3;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w4;
  var isBlank = kotlin_kotlin.$_$.mj;
  var filter = kotlin_kotlin.$_$.qi;
  var Sequence = kotlin_kotlin.$_$.ni;
  var sequence = kotlin_kotlin.$_$.vi;
  var addPathNodes = kotlin_org_jetbrains_compose_ui_ui.$_$.x;
  var PathFillType = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d1;
  var StrokeCap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m1;
  var StrokeJoin = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n1;
  var get_EmptyPath = kotlin_org_jetbrains_compose_ui_ui.$_$.v;
  var removeLastOrNull = kotlin_kotlin.$_$.ob;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l4;
  var toRawBits = kotlin_kotlin.$_$.gn;
  var fromInt = kotlin_kotlin.$_$.ne;
  var shiftLeft = kotlin_kotlin.$_$.te;
  var Long = kotlin_kotlin.$_$.ol;
  var bitwiseAnd = kotlin_kotlin.$_$.fe;
  var bitwiseOr = kotlin_kotlin.$_$.ge;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s;
  var TileMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o1;
  var toList_0 = kotlin_kotlin.$_$.wi;
  var checkIndexOverflow = kotlin_kotlin.$_$.o7;
  var get_lastIndex = kotlin_kotlin.$_$.ma;
  var coerceAtLeast = kotlin_kotlin.$_$.oh;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t;
  var copyToArray = kotlin_kotlin.$_$.i9;
  var SequenceScope = kotlin_kotlin.$_$.mi;
  var until = kotlin_kotlin.$_$.ci;
  var decodeToString = kotlin_kotlin.$_$.ej;
  var numberToInt = kotlin_kotlin.$_$.wg;
  var convertToInt = kotlin_kotlin.$_$.je;
  var add = kotlin_kotlin.$_$.ee;
  var sliceArray = kotlin_kotlin.$_$.vb;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var KProperty1 = kotlin_kotlin.$_$.ki;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n4;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k4;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o4;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p4;
  var CanvasDrawScope = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o3;
  var shiftRight = kotlin_kotlin.$_$.ve;
  var Canvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var Default_getInstance = kotlin_kotlin.$_$.r4;
  var Font = kotlin_org_jetbrains_compose_ui_ui_text.$_$.d1;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.a5;
  var SVGDOM_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.f4;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.e5;
  var Companion_getInstance_12 = kotlin_org_jetbrains_skiko_skiko.$_$.l5;
  var Companion_getInstance_13 = kotlin_org_jetbrains_skiko_skiko.$_$.p5;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.m4;
  var Companion_getInstance_14 = kotlin_org_jetbrains_skiko_skiko.$_$.m5;
  var toComposeImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g2;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.v4;
  var floatFromBits = kotlin_kotlin.$_$.of;
  var SVGLengthUnit_PX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z;
  var SVGLength = kotlin_org_jetbrains_skiko_skiko.$_$.z5;
  var SVGPreserveAspectRatioAlign_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a1;
  var SVGPreserveAspectRatio_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.g4;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d2;
  var Painter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var Size__times_impl_fnp4nc = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m3;
  var createCompositionCoroutineScope = kotlin_androidx_compose_runtime_runtime.$_$.q1;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.q4;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Resource, 'Resource');
  initMetadataForClass(FontResource, 'FontResource', VOID, Resource);
  initMetadataForClass(DrawableResource, 'DrawableResource', VOID, Resource);
  initMetadataForInterface(ImageCache, 'ImageCache');
  initMetadataForClass(Bitmap, 'Bitmap', VOID, VOID, [ImageCache]);
  initMetadataForClass(Vector, 'Vector', VOID, VOID, [ImageCache]);
  initMetadataForClass(Svg, 'Svg', VOID, VOID, [ImageCache]);
  initMetadataForLambda(vectorResource$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(svgPainter$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(imageResource$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(loadImage$slambda, CoroutineImpl, [CoroutineImpl], [0]);
  initMetadataForClass(PluralStringResource, 'PluralStringResource', VOID, Resource);
  initMetadataForInterface(Qualifier, 'Qualifier');
  initMetadataForClass(LanguageQualifier, 'LanguageQualifier', VOID, VOID, [Qualifier]);
  initMetadataForClass(RegionQualifier, 'RegionQualifier', VOID, VOID, [Qualifier]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ThemeQualifier, 'ThemeQualifier', VOID, Enum, [Qualifier, Enum]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(DensityQualifier, 'DensityQualifier', VOID, Enum, [Qualifier, Enum]);
  initMetadataForClass(ResourceItem, 'ResourceItem');
  initMetadataForClass(InternalResourceApi, 'InternalResourceApi', VOID, VOID, [Annotation]);
  initMetadataForClass(ExperimentalResourceApi, 'ExperimentalResourceApi', VOID, VOID, [Annotation]);
  initMetadataForLambda(AsyncCache$getOrLoad$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(AsyncCache$getOrLoad$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($clearCOROUTINE$, CoroutineImpl);
  initMetadataForClass(AsyncCache, 'AsyncCache', AsyncCache, VOID, VOID, [2, 0]);
  initMetadataForCoroutine($clearCOROUTINE$_0, CoroutineImpl);
  initMetadataForObject(ResourceCaches, 'ResourceCaches', VOID, VOID, VOID, [0]);
  initMetadataForInterface(ComposeEnvironment, 'ComposeEnvironment');
  initMetadataForClass(ResourceEnvironment, 'ResourceEnvironment');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(DefaultComposeEnvironment$1, VOID, VOID, VOID, [ComposeEnvironment]);
  initMetadataForInterface(ResourceReader, 'ResourceReader', VOID, VOID, VOID, [1, 3]);
  initMetadataForClass(MissingResourceException, 'MissingResourceException', VOID, Exception);
  initMetadataForClass(StringArrayResource, 'StringArrayResource', VOID, Resource);
  initMetadataForClass(StringResource, 'StringResource', VOID, Resource);
  initMetadataForInterface(StringItem, 'StringItem');
  initMetadataForClass(Value, 'Value', VOID, VOID, [StringItem]);
  initMetadataForClass(Plurals, 'Plurals', VOID, VOID, [StringItem]);
  initMetadataForClass(Array_0, 'Array', VOID, VOID, [StringItem]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(PluralCategory, 'PluralCategory', VOID, Enum);
  initMetadataForClass(Group, 'Group', VOID, Enum);
  initMetadataForClass(BuildContext, 'BuildContext', BuildContext);
  initMetadataForLambda(_get_childrenSequence_$slambda_9jpw3j, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForInterface(Node, 'Node');
  initMetadataForInterface(Element_0, 'Element', VOID, VOID, [Node]);
  initMetadataForClass(MalformedXMLException, 'MalformedXMLException', VOID, Exception);
  initMetadataForInterface(NodeList, 'NodeList');
  initMetadataForObject(TestJsResourceReader, 'TestJsResourceReader', VOID, VOID, [ResourceReader], [1, 3]);
  initMetadataForCoroutine($readCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readPartCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readAsBlobCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($asByteArrayCOROUTINE$, CoroutineImpl);
  initMetadataForObject(DefaultJsResourceReader, 'DefaultJsResourceReader', VOID, VOID, [ResourceReader], [1, 3]);
  initMetadataForClass(NodeImpl, 'NodeImpl', VOID, VOID, [Node]);
  initMetadataForClass(ElementImpl, 'ElementImpl', VOID, NodeImpl, [NodeImpl, Element_0]);
  initMetadataForClass(NodeImpl$childNodes$3$1, VOID, VOID, VOID, [NodeList]);
  initMetadataForClass(DrawCache, 'DrawCache', DrawCache);
  initMetadataForClass(SvgElement, 'SvgElement');
  initMetadataForClass(SvgPainter, 'SvgPainter', VOID, Painter);
  initMetadataForObject(WebResourcesConfiguration, 'WebResourcesConfiguration');
  initMetadataForLambda(rememberResourceState$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  //endregion
  var org_jetbrains_compose_resources_FontResource$stable;
  function FontResource(id, items) {
    Resource.call(this, id, items);
  }
  function get_emptyImageBitmap() {
    _init_properties_ImageResources_kt__6e1y7e();
    var tmp0 = emptyImageBitmap$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('emptyImageBitmap', 0, tmp, _get_emptyImageBitmap_$ref_302yd9(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var emptyImageBitmap$delegate;
  function get_emptyImageVector() {
    _init_properties_ImageResources_kt__6e1y7e();
    var tmp0 = emptyImageVector$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('emptyImageVector', 0, tmp, _get_emptyImageVector_$ref_h5qmfr(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var emptyImageVector$delegate;
  function get_emptySvgPainter() {
    _init_properties_ImageResources_kt__6e1y7e();
    var tmp0 = emptySvgPainter$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('emptySvgPainter', 0, tmp, _get_emptySvgPainter_$ref_tgsxpw(), null);
    return tmp0.get_value_j01efc_k$();
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
  function painterResource(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-1508925367);
    if (isTraceInProgress()) {
      traceEventStart(-1508925367, $changed, -1, 'org.jetbrains.compose.resources.painterResource (ImageResources.kt:35)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalComposeEnvironment();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var environment = tmp0.rememberEnvironment_3peo8j_k$($composer_0, 0);
    $composer_0.startReplaceGroup_5hh8aj_k$(-1389301971);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(resource) || ($changed & 6) === 4) | $composer_0.changed_ga7h3f_k$(environment));
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var value = getResourceItemByEnvironment(resource, environment).get_path_qm550n_k$();
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    var filePath = tmp0_group;
    if (endsWith(filePath, '.xml', true)) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-118556854);
      var tmp1_return = rememberVectorPainter(vectorResource(resource, $composer_0, 14 & $changed), $composer_0, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      return tmp1_return;
    } else if (endsWith(filePath, '.svg', true)) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-118445595);
      var tmp2_return = svgPainter(resource, $composer_0, 14 & $changed);
      $composer_0.endReplaceGroup_ek144q_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      return tmp2_return;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-118396429);
      var tmp3_return = new BitmapPainter(imageResource(resource, $composer_0, 14 & $changed));
      $composer_0.endReplaceGroup_ek144q_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      return tmp3_return;
    }
  }
  function DrawableResource(id, items) {
    Resource.call(this, id, items);
  }
  function Bitmap(bitmap) {
    this.bitmap_1 = bitmap;
  }
  protoOf(Bitmap).get_bitmap_bfxu7s_k$ = function () {
    return this.bitmap_1;
  };
  function Vector(vector) {
    this.vector_1 = vector;
  }
  protoOf(Vector).get_vector_kuceh8_k$ = function () {
    return this.vector_1;
  };
  function Svg(painter) {
    this.painter_1 = painter;
  }
  protoOf(Svg).get_painter_bzl4ri_k$ = function () {
    return this.painter_1;
  };
  function ImageCache() {
  }
  function vectorResource(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-1394399862);
    if (isTraceInProgress()) {
      traceEventStart(-1394399862, $changed, -1, 'org.jetbrains.compose.resources.vectorResource (ImageResources.kt:92)');
    }
    var resourceReader = get_currentOrPreview(get_LocalResourceReader(), $composer_0, 6);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    $composer_0.startReplaceGroup_5hh8aj_k$(1002154924);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var value = vectorResource$lambda_0;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    $composer_0.startReplaceGroup_5hh8aj_k$(1002155875);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!((($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(resource) || ($changed & 6) === 4) | $composer_0.changedInstance_s1wkiy_k$(resourceReader)) | $composer_0.changed_ga7h3f_k$(density));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var value_0 = vectorResource$slambda_0(resource, resourceReader, density, null);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    var imageVector$delegate = rememberResourceState(resource, resourceReader, density, tmp1_group, tmp2_group, $composer_0, 3072 | 14 & $changed);
    var tmp0_0 = vectorResource$lambda(imageVector$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0_0;
  }
  function svgPainter(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(1371694195);
    if (isTraceInProgress()) {
      traceEventStart(1371694195, $changed, -1, 'org.jetbrains.compose.resources.svgPainter (ImageResources.kt:112)');
    }
    var resourceReader = get_currentOrPreview(get_LocalResourceReader(), $composer_0, 6);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    $composer_0.startReplaceGroup_5hh8aj_k$(-946505599);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var value = svgPainter$lambda_0;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    $composer_0.startReplaceGroup_5hh8aj_k$(-946504685);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!((($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(resource) || ($changed & 6) === 4) | $composer_0.changedInstance_s1wkiy_k$(resourceReader)) | $composer_0.changed_ga7h3f_k$(density));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var value_0 = svgPainter$slambda_0(resource, resourceReader, density, null);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    var svgPainter$delegate = rememberResourceState(resource, resourceReader, density, tmp1_group, tmp2_group, $composer_0, 3072 | 14 & $changed);
    var tmp0_0 = svgPainter$lambda(svgPainter$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0_0;
  }
  function imageResource(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(1838739546);
    if (isTraceInProgress()) {
      traceEventStart(1838739546, $changed, -1, 'org.jetbrains.compose.resources.imageResource (ImageResources.kt:59)');
    }
    var resourceReader = get_currentOrPreview(get_LocalResourceReader(), $composer_0, 6);
    var resourceEnvironment = rememberResourceEnvironment($composer_0, 0);
    $composer_0.startReplaceGroup_5hh8aj_k$(1334347382);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var value = imageResource$lambda_0;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    $composer_0.startReplaceGroup_5hh8aj_k$(1334348812);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!((($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(resource) || ($changed & 6) === 4) | $composer_0.changed_ga7h3f_k$(resourceEnvironment)) | $composer_0.changedInstance_s1wkiy_k$(resourceReader));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var value_0 = imageResource$slambda_0(resource, resourceEnvironment, resourceReader, null);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    var imageBitmap$delegate = rememberResourceState(resource, resourceReader, resourceEnvironment, tmp1_group, tmp2_group, $composer_0, 3072 | 14 & $changed);
    var tmp0 = imageResource$lambda(imageBitmap$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function loadImage(path, cacheKey, resourceReader, decode, $completion) {
    var tmp = get_imageCache();
    return tmp.getOrLoad_lwanaa_k$(cacheKey, loadImage$slambda_0(decode, resourceReader, path, null), $completion);
  }
  function vectorResource$lambda($imageVector$delegate) {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('imageVector', KProperty0, false);
    return $imageVector$delegate.get_value_j01efc_k$();
  }
  function svgPainter$lambda($svgPainter$delegate) {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('svgPainter', KProperty0, false);
    return $svgPainter$delegate.get_value_j01efc_k$();
  }
  function imageResource$lambda($imageBitmap$delegate) {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('imageBitmap', KProperty0, false);
    return $imageBitmap$delegate.get_value_j01efc_k$();
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
    return (new Builder('emptyImageVector', tmp, tmp$ret$1, 1.0, 1.0)).build_1k0s4u_k$();
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
    this.$resource_1 = $resource;
    this.$resourceReader_1 = $resourceReader;
    this.$density_1 = $density;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(vectorResource$slambda).invoke_fxeejx_k$ = function (env, $completion) {
    var tmp = this.create_hvvbj1_k$(env, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(vectorResource$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_fxeejx_k$(p1 instanceof ResourceEnvironment ? p1 : THROW_CCE(), $completion);
  };
  protoOf(vectorResource$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var path = getResourceItemByEnvironment(this.$resource_1, this.env_1).get_path_qm550n_k$();
            this.set_state_rjd8d0_k$(1);
            suspendResult = loadImage(path, path, this.$resourceReader_1, vectorResource$slambda$lambda(this.$density_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cached = suspendResult instanceof Vector ? suspendResult : THROW_CCE();
            return cached.vector_1;
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
  protoOf(vectorResource$slambda).create_hvvbj1_k$ = function (env, completion) {
    var i = new vectorResource$slambda(this.$resource_1, this.$resourceReader_1, this.$density_1, completion);
    i.env_1 = env;
    return i;
  };
  protoOf(vectorResource$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_hvvbj1_k$(value instanceof ResourceEnvironment ? value : THROW_CCE(), completion);
  };
  function vectorResource$slambda_0($resource, $resourceReader, $density, resultContinuation) {
    var i = new vectorResource$slambda($resource, $resourceReader, $density, resultContinuation);
    var l = function (env, $completion) {
      return i.invoke_fxeejx_k$(env, $completion);
    };
    l.$arity = 1;
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
    this.$resource_1 = $resource;
    this.$resourceReader_1 = $resourceReader;
    this.$density_1 = $density;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(svgPainter$slambda).invoke_ug5jkg_k$ = function (env, $completion) {
    var tmp = this.create_hvvbj1_k$(env, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(svgPainter$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ug5jkg_k$(p1 instanceof ResourceEnvironment ? p1 : THROW_CCE(), $completion);
  };
  protoOf(svgPainter$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var path = getResourceItemByEnvironment(this.$resource_1, this.env_1).get_path_qm550n_k$();
            this.set_state_rjd8d0_k$(1);
            suspendResult = loadImage(path, path, this.$resourceReader_1, svgPainter$slambda$lambda(this.$density_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cached = suspendResult instanceof Svg ? suspendResult : THROW_CCE();
            return cached.painter_1;
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
  protoOf(svgPainter$slambda).create_hvvbj1_k$ = function (env, completion) {
    var i = new svgPainter$slambda(this.$resource_1, this.$resourceReader_1, this.$density_1, completion);
    i.env_1 = env;
    return i;
  };
  protoOf(svgPainter$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_hvvbj1_k$(value instanceof ResourceEnvironment ? value : THROW_CCE(), completion);
  };
  function svgPainter$slambda_0($resource, $resourceReader, $density, resultContinuation) {
    var i = new svgPainter$slambda($resource, $resourceReader, $density, resultContinuation);
    var l = function (env, $completion) {
      return i.invoke_ug5jkg_k$(env, $completion);
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
    this.$resource_1 = $resource;
    this.$resourceEnvironment_1 = $resourceEnvironment;
    this.$resourceReader_1 = $resourceReader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(imageResource$slambda).invoke_uxfn1p_k$ = function (env, $completion) {
    var tmp = this.create_hvvbj1_k$(env, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(imageResource$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_uxfn1p_k$(p1 instanceof ResourceEnvironment ? p1 : THROW_CCE(), $completion);
  };
  protoOf(imageResource$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var item = getResourceItemByEnvironment(this.$resource_1, this.env_1);
            var tmp0 = item.get_qualifiers_3a0pdp_k$();
            var tmp$ret$0;
            l$ret$1: do {
              var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
              while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
                var element = _iterator__ex2g4s.next_20eer_k$();
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
            var tmp1_elvis_lhs = resourceDensityQualifier == null ? null : resourceDensityQualifier.get_dpi_18j764_k$();
            var resourceDensity = tmp1_elvis_lhs == null ? DensityQualifier_MDPI_getInstance().get_dpi_18j764_k$() : tmp1_elvis_lhs;
            var screenDensity = this.$resourceEnvironment_1.get_density_75p86i_k$().get_dpi_18j764_k$();
            var path = item.get_path_qm550n_k$();
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = path + '-' + screenDensity + 'dpi';
            suspendResult = loadImage(path, tmp_1, this.$resourceReader_1, imageResource$slambda$lambda(resourceDensity, screenDensity), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cached = suspendResult instanceof Bitmap ? suspendResult : THROW_CCE();
            return cached.bitmap_1;
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
  protoOf(imageResource$slambda).create_hvvbj1_k$ = function (env, completion) {
    var i = new imageResource$slambda(this.$resource_1, this.$resourceEnvironment_1, this.$resourceReader_1, completion);
    i.env_1 = env;
    return i;
  };
  protoOf(imageResource$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_hvvbj1_k$(value instanceof ResourceEnvironment ? value : THROW_CCE(), completion);
  };
  function imageResource$slambda_0($resource, $resourceEnvironment, $resourceReader, resultContinuation) {
    var i = new imageResource$slambda($resource, $resourceEnvironment, $resourceReader, resultContinuation);
    var l = function (env, $completion) {
      return i.invoke_uxfn1p_k$(env, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function loadImage$slambda($decode, $resourceReader, $path, resultContinuation) {
    this.$decode_1 = $decode;
    this.$resourceReader_1 = $resourceReader;
    this.$path_1 = $path;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(loadImage$slambda).invoke_cktuep_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(loadImage$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_cktuep_k$($completion);
  };
  protoOf(loadImage$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$resourceReader_1.read_3sms9f_k$(this.$path_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return this.$decode_1(ARGUMENT);
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
  protoOf(loadImage$slambda).create_d196fn_k$ = function (completion) {
    return new loadImage$slambda(this.$decode_1, this.$resourceReader_1, this.$path_1, completion);
  };
  function loadImage$slambda_0($decode, $resourceReader, $path, resultContinuation) {
    var i = new loadImage$slambda($decode, $resourceReader, $path, resultContinuation);
    var l = function ($completion) {
      return i.invoke_cktuep_k$($completion);
    };
    l.$arity = 0;
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
  function PluralStringResource(id, key, items) {
    Resource.call(this, id, items);
    this.key_1 = key;
  }
  protoOf(PluralStringResource).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  var org_jetbrains_compose_resources_LanguageQualifier$stable;
  var org_jetbrains_compose_resources_RegionQualifier$stable;
  function Qualifier() {
  }
  function LanguageQualifier(language) {
    this.language_1 = language;
  }
  protoOf(LanguageQualifier).get_language_cjhhk1_k$ = function () {
    return this.language_1;
  };
  protoOf(LanguageQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof LanguageQualifier))
      THROW_CCE();
    return this.language_1 === other.language_1;
  };
  protoOf(LanguageQualifier).hashCode = function () {
    return getStringHashCode(this.language_1);
  };
  protoOf(LanguageQualifier).toString = function () {
    return "LanguageQualifier(language='" + this.language_1 + "')";
  };
  function RegionQualifier(region) {
    this.region_1 = region;
  }
  protoOf(RegionQualifier).get_region_iy88ot_k$ = function () {
    return this.region_1;
  };
  protoOf(RegionQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof RegionQualifier))
      THROW_CCE();
    return this.region_1 === other.region_1;
  };
  protoOf(RegionQualifier).hashCode = function () {
    return getStringHashCode(this.region_1);
  };
  protoOf(RegionQualifier).toString = function () {
    return "RegionQualifier(region='" + this.region_1 + "')";
  };
  var ThemeQualifier_LIGHT_instance;
  var ThemeQualifier_DARK_instance;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).selectByValue_7mr6mx_k$ = function (isDark) {
    return isDark ? ThemeQualifier_DARK_getInstance() : ThemeQualifier_LIGHT_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_16() {
    ThemeQualifier_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [ThemeQualifier_LIGHT_getInstance(), ThemeQualifier_DARK_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'LIGHT':
        return ThemeQualifier_LIGHT_getInstance();
      case 'DARK':
        return ThemeQualifier_DARK_getInstance();
      default:
        ThemeQualifier_initEntries();
        THROW_IAE('No enum constant org.jetbrains.compose.resources.ThemeQualifier.' + value);
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var ThemeQualifier_entriesInitialized;
  function ThemeQualifier_initEntries() {
    if (ThemeQualifier_entriesInitialized)
      return Unit_getInstance();
    ThemeQualifier_entriesInitialized = true;
    ThemeQualifier_LIGHT_instance = new ThemeQualifier('LIGHT', 0);
    ThemeQualifier_DARK_instance = new ThemeQualifier('DARK', 1);
    Companion_getInstance_16();
  }
  var $ENTRIES;
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
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).selectByValue_h7gwd6_k$ = function (dpi) {
    return dpi <= DensityQualifier_LDPI_getInstance().dpi_1 ? DensityQualifier_LDPI_getInstance() : dpi <= DensityQualifier_MDPI_getInstance().dpi_1 ? DensityQualifier_MDPI_getInstance() : dpi <= DensityQualifier_HDPI_getInstance().dpi_1 ? DensityQualifier_HDPI_getInstance() : dpi <= DensityQualifier_XHDPI_getInstance().dpi_1 ? DensityQualifier_XHDPI_getInstance() : dpi <= DensityQualifier_XXHDPI_getInstance().dpi_1 ? DensityQualifier_XXHDPI_getInstance() : DensityQualifier_XXXHDPI_getInstance();
  };
  protoOf(Companion_0).selectByDensity_fkp6e5_k$ = function (density) {
    return density <= 0.75 ? DensityQualifier_LDPI_getInstance() : density <= 1.0 ? DensityQualifier_MDPI_getInstance() : density <= 1.5 ? DensityQualifier_HDPI_getInstance() : density <= 2.0 ? DensityQualifier_XHDPI_getInstance() : density <= 3.0 ? DensityQualifier_XXHDPI_getInstance() : DensityQualifier_XXXHDPI_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_17() {
    DensityQualifier_initEntries();
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function values_0() {
    return [DensityQualifier_LDPI_getInstance(), DensityQualifier_MDPI_getInstance(), DensityQualifier_HDPI_getInstance(), DensityQualifier_XHDPI_getInstance(), DensityQualifier_XXHDPI_getInstance(), DensityQualifier_XXXHDPI_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'LDPI':
        return DensityQualifier_LDPI_getInstance();
      case 'MDPI':
        return DensityQualifier_MDPI_getInstance();
      case 'HDPI':
        return DensityQualifier_HDPI_getInstance();
      case 'XHDPI':
        return DensityQualifier_XHDPI_getInstance();
      case 'XXHDPI':
        return DensityQualifier_XXHDPI_getInstance();
      case 'XXXHDPI':
        return DensityQualifier_XXXHDPI_getInstance();
      default:
        DensityQualifier_initEntries();
        THROW_IAE('No enum constant org.jetbrains.compose.resources.DensityQualifier.' + value);
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var DensityQualifier_entriesInitialized;
  function DensityQualifier_initEntries() {
    if (DensityQualifier_entriesInitialized)
      return Unit_getInstance();
    DensityQualifier_entriesInitialized = true;
    DensityQualifier_LDPI_instance = new DensityQualifier('LDPI', 0, 120);
    DensityQualifier_MDPI_instance = new DensityQualifier('MDPI', 1, 160);
    DensityQualifier_HDPI_instance = new DensityQualifier('HDPI', 2, 240);
    DensityQualifier_XHDPI_instance = new DensityQualifier('XHDPI', 3, 320);
    DensityQualifier_XXHDPI_instance = new DensityQualifier('XXHDPI', 4, 480);
    DensityQualifier_XXXHDPI_instance = new DensityQualifier('XXXHDPI', 5, 640);
    Companion_getInstance_17();
  }
  var $ENTRIES_0;
  function DensityQualifier(name, ordinal, dpi) {
    Enum.call(this, name, ordinal);
    this.dpi_1 = dpi;
  }
  protoOf(DensityQualifier).get_dpi_18j764_k$ = function () {
    return this.dpi_1;
  };
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
  function ResourceItem(qualifiers, path, offset, size) {
    this.qualifiers_1 = qualifiers;
    this.path_1 = path;
    this.offset_1 = offset;
    this.size_1 = size;
  }
  protoOf(ResourceItem).get_qualifiers_3a0pdp_k$ = function () {
    return this.qualifiers_1;
  };
  protoOf(ResourceItem).get_path_qm550n_k$ = function () {
    return this.path_1;
  };
  protoOf(ResourceItem).get_offset_2j7xfd_k$ = function () {
    return this.offset_1;
  };
  protoOf(ResourceItem).get_size_75e1u3_k$ = function () {
    return this.size_1;
  };
  protoOf(ResourceItem).component1_tytzjz_k$ = function () {
    return this.qualifiers_1;
  };
  protoOf(ResourceItem).component2_ciz0u8_k$ = function () {
    return this.path_1;
  };
  protoOf(ResourceItem).component3_g0c0qp_k$ = function () {
    return this.offset_1;
  };
  protoOf(ResourceItem).component4_qhgzni_k$ = function () {
    return this.size_1;
  };
  protoOf(ResourceItem).copy_hpcldu_k$ = function (qualifiers, path, offset, size) {
    return new ResourceItem(qualifiers, path, offset, size);
  };
  protoOf(ResourceItem).copy$default_m51nyw_k$ = function (qualifiers, path, offset, size, $super) {
    qualifiers = qualifiers === VOID ? this.qualifiers_1 : qualifiers;
    path = path === VOID ? this.path_1 : path;
    offset = offset === VOID ? this.offset_1 : offset;
    size = size === VOID ? this.size_1 : size;
    return $super === VOID ? this.copy_hpcldu_k$(qualifiers, path, offset, size) : $super.copy_hpcldu_k$.call(this, qualifiers, path, offset, size);
  };
  protoOf(ResourceItem).toString = function () {
    return 'ResourceItem(qualifiers=' + toString(this.qualifiers_1) + ', path=' + this.path_1 + ', offset=' + this.offset_1.toString() + ', size=' + this.size_1.toString() + ')';
  };
  protoOf(ResourceItem).hashCode = function () {
    var result = hashCode(this.qualifiers_1);
    result = imul(result, 31) + getStringHashCode(this.path_1) | 0;
    result = imul(result, 31) + this.offset_1.hashCode() | 0;
    result = imul(result, 31) + this.size_1.hashCode() | 0;
    return result;
  };
  protoOf(ResourceItem).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ResourceItem))
      return false;
    var tmp0_other_with_cast = other instanceof ResourceItem ? other : THROW_CCE();
    if (!equals(this.qualifiers_1, tmp0_other_with_cast.qualifiers_1))
      return false;
    if (!(this.path_1 === tmp0_other_with_cast.path_1))
      return false;
    if (!equalsLong(this.offset_1, tmp0_other_with_cast.offset_1))
      return false;
    if (!equalsLong(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    return true;
  };
  function InternalResourceApi() {
  }
  protoOf(InternalResourceApi).equals = function (other) {
    if (!(other instanceof InternalResourceApi))
      return false;
    other instanceof InternalResourceApi || THROW_CCE();
    return true;
  };
  protoOf(InternalResourceApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalResourceApi).toString = function () {
    return '@org.jetbrains.compose.resources.InternalResourceApi(' + ')';
  };
  function Resource(id, items) {
    this.id_1 = id;
    this.items_1 = items;
  }
  protoOf(Resource).get_id_fot53j_k$ = function () {
    return this.id_1;
  };
  protoOf(Resource).get_items_cqpf3y_k$ = function () {
    return this.items_1;
  };
  protoOf(Resource).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Resource))
      THROW_CCE();
    return this.id_1 === other.id_1;
  };
  protoOf(Resource).hashCode = function () {
    return getStringHashCode(this.id_1);
  };
  function ExperimentalResourceApi() {
  }
  protoOf(ExperimentalResourceApi).equals = function (other) {
    if (!(other instanceof ExperimentalResourceApi))
      return false;
    other instanceof ExperimentalResourceApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalResourceApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalResourceApi).toString = function () {
    return '@org.jetbrains.compose.resources.ExperimentalResourceApi(' + ')';
  };
  var org_jetbrains_compose_resources_AsyncCache$stable;
  var org_jetbrains_compose_resources_ResourceCaches$stable;
  function AsyncCache$getOrLoad$slambda$slambda($load, resultContinuation) {
    this.$load_1 = $load;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncCache$getOrLoad$slambda$slambda).invoke_s98mvd_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncCache$getOrLoad$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_s98mvd_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncCache$getOrLoad$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$load_1(this);
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
  protoOf(AsyncCache$getOrLoad$slambda$slambda).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new AsyncCache$getOrLoad$slambda$slambda(this.$load_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(AsyncCache$getOrLoad$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AsyncCache$getOrLoad$slambda$slambda_0($load, resultContinuation) {
    var i = new AsyncCache$getOrLoad$slambda$slambda($load, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_s98mvd_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_mutex__e2dgb2($this) {
    return $this.mutex_1;
  }
  function _get_cache__j44d4h($this) {
    return $this.cache_1;
  }
  function AsyncCache$getOrLoad$slambda(this$0, $key, $load, resultContinuation) {
    this.this$0__1 = this$0;
    this.$key_1 = $key;
    this.$load_1 = $load;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncCache$getOrLoad$slambda).invoke_s98mvd_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncCache$getOrLoad$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_s98mvd_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncCache$getOrLoad$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.this1__1 = this.this$0__1.mutex_1;
            var tmp_0 = this;
            tmp_0.owner0__1 = null;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this1__1.lock_ugrcvf_k$(this.owner0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp$ret$0 = Unit_getInstance();
            l$ret$1: do {
              var tmp_1;
              try {
                var cached = this.this$0__1.cache_1.get_wei43m_k$(this.$key_1);
                if (cached == null || cached.get_isCancelled_trk8pu_k$()) {
                  var tmp_2 = CoroutineStart_LAZY_getInstance();
                  cached = async(this.$this$coroutineScope_1, VOID, tmp_2, AsyncCache$getOrLoad$slambda$slambda_0(this.$load_1, null));
                  var tmp0 = this.this$0__1.cache_1;
                  var tmp2 = this.$key_1;
                  var value = cached;
                  tmp0.put_4fpzoq_k$(tmp2, value);
                }
                tmp$ret$0 = cached;
                break l$ret$1;
              } catch ($p) {
                var tmp_3;
                var t = $p;
                this.this1__1.unlock_ulcrcl_k$(this.owner0__1);
                throw t;
              }
            }
             while (false);
            var tmp_4 = tmp$ret$0;
            this.this1__1.unlock_ulcrcl_k$(this.owner0__1);
            var deferred = tmp_4;
            this.set_state_rjd8d0_k$(2);
            suspendResult = deferred.await_4rdzbx_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
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
  protoOf(AsyncCache$getOrLoad$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new AsyncCache$getOrLoad$slambda(this.this$0__1, this.$key_1, this.$load_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(AsyncCache$getOrLoad$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AsyncCache$getOrLoad$slambda_0(this$0, $key, $load, resultContinuation) {
    var i = new AsyncCache$getOrLoad$slambda(this$0, $key, $load, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_s98mvd_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $clearCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($clearCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.this1__1 = this._this__u8e3s4__1.mutex_1;
            var tmp_0 = this;
            tmp_0.owner0__1 = null;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this1__1.lock_ugrcvf_k$(this.owner0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$1: do {
              var tmp_1;
              try {
                this._this__u8e3s4__1.cache_1.clear_j9egeb_k$();
                break l$ret$1;
              } catch ($p) {
                var tmp_2;
                var t = $p;
                this.this1__1.unlock_ulcrcl_k$(this.owner0__1);
                throw t;
              }
            }
             while (false);
            this.this1__1.unlock_ulcrcl_k$(this.owner0__1);
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
  function AsyncCache() {
    this.mutex_1 = Mutex();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.cache_1 = LinkedHashMap_init_$Create$();
    ResourceCaches_getInstance().registerCache_nrorgp_k$(this);
  }
  protoOf(AsyncCache).getOrLoad_lwanaa_k$ = function (key, load, $completion) {
    return coroutineScope(AsyncCache$getOrLoad$slambda_0(this, key, load, null), $completion);
  };
  protoOf(AsyncCache).clear_wi6ip6_k$ = function ($completion) {
    var tmp = new $clearCOROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function _get_caches__oautqe($this) {
    return $this.caches_1;
  }
  function $clearCOROUTINE$_0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($clearCOROUTINE$_0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this._iterator_0_yqohr0__1 = this._this__u8e3s4__1.caches_1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this._iterator_0_yqohr0__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            var element = this._iterator_0_yqohr0__1.next_20eer_k$();
            this.set_state_rjd8d0_k$(2);
            suspendResult = element.clear_wi6ip6_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  function ResourceCaches() {
    ResourceCaches_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.caches_1 = ArrayList_init_$Create$();
  }
  protoOf(ResourceCaches).registerCache_nrorgp_k$ = function (cache) {
    return this.caches_1.add_utx5q5_k$(cache);
  };
  protoOf(ResourceCaches).clear_ecltgh_k$ = function ($completion) {
    var tmp = new $clearCOROUTINE$_0(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
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
  function set_getResourceEnvironment(_set____db54di) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    getResourceEnvironment = _set____db54di;
  }
  function get_getResourceEnvironment() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return getResourceEnvironment;
  }
  var getResourceEnvironment;
  var org_jetbrains_compose_resources_ResourceEnvironment$stable;
  function ComposeEnvironment() {
  }
  function ResourceEnvironment(language, region, theme, density) {
    this.language_1 = language;
    this.region_1 = region;
    this.theme_1 = theme;
    this.density_1 = density;
  }
  protoOf(ResourceEnvironment).get_language_q66oqc_k$ = function () {
    return this.language_1;
  };
  protoOf(ResourceEnvironment).get_region_424es8_k$ = function () {
    return this.region_1;
  };
  protoOf(ResourceEnvironment).get_theme_j95dl7_k$ = function () {
    return this.theme_1;
  };
  protoOf(ResourceEnvironment).get_density_75p86i_k$ = function () {
    return this.density_1;
  };
  protoOf(ResourceEnvironment).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ResourceEnvironment))
      THROW_CCE();
    if (!this.language_1.equals(other.language_1))
      return false;
    if (!this.region_1.equals(other.region_1))
      return false;
    if (!this.theme_1.equals(other.theme_1))
      return false;
    if (!this.density_1.equals(other.density_1))
      return false;
    return true;
  };
  protoOf(ResourceEnvironment).hashCode = function () {
    var result = this.language_1.hashCode();
    result = imul(31, result) + this.region_1.hashCode() | 0;
    result = imul(31, result) + this.theme_1.hashCode() | 0;
    result = imul(31, result) + this.density_1.hashCode() | 0;
    return result;
  };
  function getResourceItemByEnvironment(_this__u8e3s4, environment) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.also' call
    var this_0 = filterByLocale(toList(_this__u8e3s4.get_items_cqpf3y_k$()), environment.language_1, environment.region_1);
    if (this_0.get_size_woubt6_k$() === 1)
      return first(this_0);
    // Inline function 'kotlin.also' call
    var this_1 = filterBy(this_0, environment.theme_1);
    if (this_1.get_size_woubt6_k$() === 1)
      return first(this_1);
    // Inline function 'kotlin.also' call
    var this_2 = filterByDensity(this_1, environment.density_1);
    if (this_2.get_size_woubt6_k$() === 1)
      return first(this_2);
    // Inline function 'kotlin.let' call
    var tmp;
    if (this_2.isEmpty_y1axqb_k$()) {
      // Inline function 'kotlin.error' call
      var message = "Resource with ID='" + _this__u8e3s4.get_id_fot53j_k$() + "' not found";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      var tmp_0 = _this__u8e3s4.get_id_fot53j_k$();
      // Inline function 'kotlin.error' call
      var message_0 = "Resource with ID='" + tmp_0 + "' has more than one file: " + joinToString(this_2, VOID, VOID, VOID, VOID, VOID, getResourceItemByEnvironment$lambda);
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  }
  function rememberResourceEnvironment($composer, $changed) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(707674437);
    if (isTraceInProgress()) {
      traceEventStart(707674437, $changed, -1, 'org.jetbrains.compose.resources.rememberResourceEnvironment (ResourceEnvironment.kt:71)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalComposeEnvironment();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var composeEnvironment = tmp0;
    var tmp0_0 = composeEnvironment.rememberEnvironment_3peo8j_k$($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0_0;
  }
  function filterByDensity(_this__u8e3s4, density) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    var items = _this__u8e3s4;
    var withQualifier = emptyList();
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = get_entries_0();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      if (element.get_dpi_18j764_k$() >= density.get_dpi_18j764_k$()) {
        destination.add_utx5q5_k$(element);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = filterByDensity$lambda;
    var tmp$ret$3 = new sam$kotlin_Comparator$0(tmp);
    var exactAndHigherQualifiers = sortedWith(destination, tmp$ret$3);
    var _iterator__ex2g4s_0 = exactAndHigherQualifiers.iterator_jk1svi_k$();
    $l$loop: while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var qualifier = _iterator__ex2g4s_0.next_20eer_k$();
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_1 = items.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_1.next_20eer_k$();
        var tmp0_0 = element_0.get_qualifiers_3a0pdp_k$();
        var tmp$ret$5;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp_0;
          if (isInterface(tmp0_0, Collection)) {
            tmp_0 = tmp0_0.isEmpty_y1axqb_k$();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$5 = false;
            break $l$block_0;
          }
          var _iterator__ex2g4s_2 = tmp0_0.iterator_jk1svi_k$();
          while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
            var element_1 = _iterator__ex2g4s_2.next_20eer_k$();
            if (equals(element_1, qualifier)) {
              tmp$ret$5 = true;
              break $l$block_0;
            }
          }
          tmp$ret$5 = false;
        }
        if (tmp$ret$5) {
          destination_0.add_utx5q5_k$(element_0);
        }
      }
      withQualifier = destination_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!withQualifier.isEmpty_y1axqb_k$())
        break $l$loop;
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withQualifier.isEmpty_y1axqb_k$())
      return withQualifier;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_1 = minus(get_entries_0(), DensityQualifier_LDPI_getInstance());
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_3 = tmp0_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_3.hasNext_bitz1p_k$()) {
      var element_2 = _iterator__ex2g4s_3.next_20eer_k$();
      if (element_2.get_dpi_18j764_k$() < density.get_dpi_18j764_k$()) {
        destination_1.add_utx5q5_k$(element_2);
      }
    }
    // Inline function 'kotlin.collections.sortedByDescending' call
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_1 = filterByDensity$lambda_0;
    var tmp$ret$15 = new sam$kotlin_Comparator$0(tmp_1);
    var lowQualifiers = sortedWith(destination_1, tmp$ret$15);
    var _iterator__ex2g4s_4 = lowQualifiers.iterator_jk1svi_k$();
    $l$loop_0: while (_iterator__ex2g4s_4.hasNext_bitz1p_k$()) {
      var qualifier_0 = _iterator__ex2g4s_4.next_20eer_k$();
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_2 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_5 = items.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_5.hasNext_bitz1p_k$()) {
        var element_3 = _iterator__ex2g4s_5.next_20eer_k$();
        var tmp0_2 = element_3.get_qualifiers_3a0pdp_k$();
        var tmp$ret$17;
        $l$block_2: {
          // Inline function 'kotlin.collections.any' call
          var tmp_2;
          if (isInterface(tmp0_2, Collection)) {
            tmp_2 = tmp0_2.isEmpty_y1axqb_k$();
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            tmp$ret$17 = false;
            break $l$block_2;
          }
          var _iterator__ex2g4s_6 = tmp0_2.iterator_jk1svi_k$();
          while (_iterator__ex2g4s_6.hasNext_bitz1p_k$()) {
            var element_4 = _iterator__ex2g4s_6.next_20eer_k$();
            if (equals(element_4, qualifier_0)) {
              tmp$ret$17 = true;
              break $l$block_2;
            }
          }
          tmp$ret$17 = false;
        }
        if (tmp$ret$17) {
          destination_2.add_utx5q5_k$(element_3);
        }
      }
      withQualifier = destination_2;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!withQualifier.isEmpty_y1axqb_k$())
        break $l$loop_0;
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withQualifier.isEmpty_y1axqb_k$())
      return withQualifier;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_3 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_7 = items.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_7.hasNext_bitz1p_k$()) {
      var element_5 = _iterator__ex2g4s_7.next_20eer_k$();
      var tmp0_3 = element_5.get_qualifiers_3a0pdp_k$();
      var tmp$ret$24;
      $l$block_4: {
        // Inline function 'kotlin.collections.none' call
        var tmp_3;
        if (isInterface(tmp0_3, Collection)) {
          tmp_3 = tmp0_3.isEmpty_y1axqb_k$();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$24 = true;
          break $l$block_4;
        }
        var _iterator__ex2g4s_8 = tmp0_3.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_8.hasNext_bitz1p_k$()) {
          var element_6 = _iterator__ex2g4s_8.next_20eer_k$();
          if (element_6 instanceof DensityQualifier) {
            tmp$ret$24 = false;
            break $l$block_4;
          }
        }
        tmp$ret$24 = true;
      }
      if (tmp$ret$24) {
        destination_3.add_utx5q5_k$(element_5);
      }
    }
    var withNoDensity = destination_3;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withNoDensity.isEmpty_y1axqb_k$())
      return withNoDensity;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_4 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_9 = items.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_9.hasNext_bitz1p_k$()) {
      var element_7 = _iterator__ex2g4s_9.next_20eer_k$();
      var tmp0_4 = element_7.get_qualifiers_3a0pdp_k$();
      var tmp$ret$30;
      $l$block_6: {
        // Inline function 'kotlin.collections.any' call
        var tmp_4;
        if (isInterface(tmp0_4, Collection)) {
          tmp_4 = tmp0_4.isEmpty_y1axqb_k$();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          tmp$ret$30 = false;
          break $l$block_6;
        }
        var _iterator__ex2g4s_10 = tmp0_4.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_10.hasNext_bitz1p_k$()) {
          var element_8 = _iterator__ex2g4s_10.next_20eer_k$();
          if (equals(element_8, DensityQualifier_LDPI_getInstance())) {
            tmp$ret$30 = true;
            break $l$block_6;
          }
        }
        tmp$ret$30 = false;
      }
      if (tmp$ret$30) {
        destination_4.add_utx5q5_k$(element_7);
      }
    }
    return destination_4;
  }
  function filterBy(_this__u8e3s4, qualifier) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = _this__u8e3s4.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp0 = element.get_qualifiers_3a0pdp_k$();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp;
        if (isInterface(tmp0, Collection)) {
          tmp = tmp0.isEmpty_y1axqb_k$();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s_0 = tmp0.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
          var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
          if (equals(element_0, qualifier)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      if (tmp$ret$0) {
        destination.add_utx5q5_k$(element);
      }
    }
    var withQualifier = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withQualifier.isEmpty_y1axqb_k$())
      return withQualifier;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_1 = _this__u8e3s4.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
      var element_1 = _iterator__ex2g4s_1.next_20eer_k$();
      var tmp0_0 = element_1.get_qualifiers_3a0pdp_k$();
      var tmp$ret$6;
      $l$block_2: {
        // Inline function 'kotlin.collections.none' call
        var tmp_0;
        if (isInterface(tmp0_0, Collection)) {
          tmp_0 = tmp0_0.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$6 = true;
          break $l$block_2;
        }
        var _iterator__ex2g4s_2 = tmp0_0.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
          var element_2 = _iterator__ex2g4s_2.next_20eer_k$();
          if (getKClassFromExpression(element_2).equals(getKClassFromExpression(qualifier))) {
            tmp$ret$6 = false;
            break $l$block_2;
          }
        }
        tmp$ret$6 = true;
      }
      if (tmp$ret$6) {
        destination_0.add_utx5q5_k$(element_1);
      }
    }
    return destination_0;
  }
  function filterByLocale(_this__u8e3s4, language, region) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = _this__u8e3s4.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp0 = element.get_qualifiers_3a0pdp_k$();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp;
        if (isInterface(tmp0, Collection)) {
          tmp = tmp0.isEmpty_y1axqb_k$();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s_0 = tmp0.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
          var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
          if (equals(element_0, language)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      if (tmp$ret$0) {
        destination.add_utx5q5_k$(element);
      }
    }
    var withLanguage = destination;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_1 = withLanguage.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
      var element_1 = _iterator__ex2g4s_1.next_20eer_k$();
      var tmp0_0 = element_1.get_qualifiers_3a0pdp_k$();
      var tmp$ret$5;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0_0, Collection)) {
          tmp_0 = tmp0_0.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$5 = false;
          break $l$block_2;
        }
        var _iterator__ex2g4s_2 = tmp0_0.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
          var element_2 = _iterator__ex2g4s_2.next_20eer_k$();
          if (equals(element_2, region)) {
            tmp$ret$5 = true;
            break $l$block_2;
          }
        }
        tmp$ret$5 = false;
      }
      if (tmp$ret$5) {
        destination_0.add_utx5q5_k$(element_1);
      }
    }
    var withExactLocale = destination_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withExactLocale.isEmpty_y1axqb_k$())
      return withExactLocale;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_3 = withLanguage.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_3.hasNext_bitz1p_k$()) {
      var element_3 = _iterator__ex2g4s_3.next_20eer_k$();
      var tmp0_1 = element_3.get_qualifiers_3a0pdp_k$();
      var tmp$ret$11;
      $l$block_4: {
        // Inline function 'kotlin.collections.none' call
        var tmp_1;
        if (isInterface(tmp0_1, Collection)) {
          tmp_1 = tmp0_1.isEmpty_y1axqb_k$();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$11 = true;
          break $l$block_4;
        }
        var _iterator__ex2g4s_4 = tmp0_1.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_4.hasNext_bitz1p_k$()) {
          var element_4 = _iterator__ex2g4s_4.next_20eer_k$();
          if (element_4 instanceof RegionQualifier) {
            tmp$ret$11 = false;
            break $l$block_4;
          }
        }
        tmp$ret$11 = true;
      }
      if (tmp$ret$11) {
        destination_1.add_utx5q5_k$(element_3);
      }
    }
    var withDefaultRegion = destination_1;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withDefaultRegion.isEmpty_y1axqb_k$())
      return withDefaultRegion;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_2 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_5 = _this__u8e3s4.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_5.hasNext_bitz1p_k$()) {
      var element_5 = _iterator__ex2g4s_5.next_20eer_k$();
      var tmp0_2 = element_5.get_qualifiers_3a0pdp_k$();
      var tmp$ret$17;
      $l$block_6: {
        // Inline function 'kotlin.collections.none' call
        var tmp_2;
        if (isInterface(tmp0_2, Collection)) {
          tmp_2 = tmp0_2.isEmpty_y1axqb_k$();
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          tmp$ret$17 = true;
          break $l$block_6;
        }
        var _iterator__ex2g4s_6 = tmp0_2.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_6.hasNext_bitz1p_k$()) {
          var element_6 = _iterator__ex2g4s_6.next_20eer_k$();
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
        destination_2.add_utx5q5_k$(element_5);
      }
    }
    return destination_2;
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
  function DefaultComposeEnvironment$1() {
  }
  protoOf(DefaultComposeEnvironment$1).rememberEnvironment_3peo8j_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(1808039825);
    if (isTraceInProgress()) {
      traceEventStart(1808039825, $changed, -1, 'org.jetbrains.compose.resources.DefaultComposeEnvironment.<no name provided>.rememberEnvironment (ResourceEnvironment.kt:43)');
    }
    var composeLocale = Companion_getInstance_0().get_current_jwi6j4_k$();
    var composeTheme = isSystemInDarkTheme($composer_0, 0);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var composeDensity = tmp0;
    $composer_0.startReplaceGroup_5hh8aj_k$(1697237979);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!($composer_0.changed_ga7h3f_k$(composeLocale) | $composer_0.changed_jpyyrz_k$(composeTheme)) | $composer_0.changed_ga7h3f_k$(composeDensity));
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var value = new ResourceEnvironment(new LanguageQualifier(composeLocale.get_language_cjhhk1_k$()), new RegionQualifier(composeLocale.get_region_iy88ot_k$()), Companion_getInstance_16().selectByValue_7mr6mx_k$(composeTheme), Companion_getInstance_17().selectByDensity_fkp6e5_k$(composeDensity.get_density_qy0267_k$()));
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
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
    return it.get_path_qm550n_k$();
  }
  function filterByDensity$lambda(a, b) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.get_dpi_18j764_k$();
    var tmp$ret$1 = b.get_dpi_18j764_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function filterByDensity$lambda_0(a, b) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.get_dpi_18j764_k$();
    var tmp$ret$1 = a.get_dpi_18j764_k$();
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
  function ResourceReader() {
  }
  function readResourceBytes(path, $completion) {
    return get_DefaultResourceReader().read_3sms9f_k$(path, $completion);
  }
  function MissingResourceException(path) {
    Exception_init_$Init$('Missing resource with path: ' + path, this);
    captureStack(this, MissingResourceException);
  }
  function getResourceUri(path) {
    _init_properties_ResourceReader_kt__hdc5sh();
    return get_DefaultResourceReader().getUri_3gtoqs_k$(path);
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
  function StringArrayResource(id, key, items) {
    Resource.call(this, id, items);
    this.key_1 = key;
  }
  protoOf(StringArrayResource).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  var org_jetbrains_compose_resources_StringResource$stable;
  function StringResource(id, key, items) {
    Resource.call(this, id, items);
    this.key_1 = key;
  }
  protoOf(StringResource).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  function get_SimpleStringFormatRegex() {
    _init_properties_StringResourcesUtils_kt__ckiot9();
    return SimpleStringFormatRegex;
  }
  var SimpleStringFormatRegex;
  function get_stringItemsCache() {
    _init_properties_StringResourcesUtils_kt__ckiot9();
    return stringItemsCache;
  }
  var stringItemsCache;
  var org_jetbrains_compose_resources_StringItem_Value$stable;
  var org_jetbrains_compose_resources_StringItem_Plurals$stable;
  var org_jetbrains_compose_resources_StringItem_Array$stable;
  function Value(text) {
    this.text_1 = text;
  }
  protoOf(Value).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(Value).component1_7eebsc_k$ = function () {
    return this.text_1;
  };
  protoOf(Value).copy_a35qlh_k$ = function (text) {
    return new Value(text);
  };
  protoOf(Value).copy$default_hb93vy_k$ = function (text, $super) {
    text = text === VOID ? this.text_1 : text;
    return $super === VOID ? this.copy_a35qlh_k$(text) : $super.copy_a35qlh_k$.call(this, text);
  };
  protoOf(Value).toString = function () {
    return 'Value(text=' + this.text_1 + ')';
  };
  protoOf(Value).hashCode = function () {
    return getStringHashCode(this.text_1);
  };
  protoOf(Value).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Value))
      return false;
    var tmp0_other_with_cast = other instanceof Value ? other : THROW_CCE();
    if (!(this.text_1 === tmp0_other_with_cast.text_1))
      return false;
    return true;
  };
  function Plurals(items) {
    this.items_1 = items;
  }
  protoOf(Plurals).get_items_it823b_k$ = function () {
    return this.items_1;
  };
  protoOf(Plurals).component1_7eebsc_k$ = function () {
    return this.items_1;
  };
  protoOf(Plurals).copy_jkbmgr_k$ = function (items) {
    return new Plurals(items);
  };
  protoOf(Plurals).copy$default_xuqi0y_k$ = function (items, $super) {
    items = items === VOID ? this.items_1 : items;
    return $super === VOID ? this.copy_jkbmgr_k$(items) : $super.copy_jkbmgr_k$.call(this, items);
  };
  protoOf(Plurals).toString = function () {
    return 'Plurals(items=' + toString(this.items_1) + ')';
  };
  protoOf(Plurals).hashCode = function () {
    return hashCode(this.items_1);
  };
  protoOf(Plurals).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Plurals))
      return false;
    var tmp0_other_with_cast = other instanceof Plurals ? other : THROW_CCE();
    if (!equals(this.items_1, tmp0_other_with_cast.items_1))
      return false;
    return true;
  };
  function Array_0(items) {
    this.items_1 = items;
  }
  protoOf(Array_0).get_items_it823b_k$ = function () {
    return this.items_1;
  };
  protoOf(Array_0).component1_7eebsc_k$ = function () {
    return this.items_1;
  };
  protoOf(Array_0).copy_is4t59_k$ = function (items) {
    return new Array_0(items);
  };
  protoOf(Array_0).copy$default_2kft8e_k$ = function (items, $super) {
    items = items === VOID ? this.items_1 : items;
    return $super === VOID ? this.copy_is4t59_k$(items) : $super.copy_is4t59_k$.call(this, items);
  };
  protoOf(Array_0).toString = function () {
    return 'Array(items=' + toString(this.items_1) + ')';
  };
  protoOf(Array_0).hashCode = function () {
    return hashCode(this.items_1);
  };
  protoOf(Array_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Array_0))
      return false;
    var tmp0_other_with_cast = other instanceof Array_0 ? other : THROW_CCE();
    if (!equals(this.items_1, tmp0_other_with_cast.items_1))
      return false;
    return true;
  };
  function StringItem() {
  }
  var properties_initialized_StringResourcesUtils_kt_tq6hb5;
  function _init_properties_StringResourcesUtils_kt__ckiot9() {
    if (!properties_initialized_StringResourcesUtils_kt_tq6hb5) {
      properties_initialized_StringResourcesUtils_kt_tq6hb5 = true;
      SimpleStringFormatRegex = Regex_init_$Create$('%(\\d+)\\$[ds]');
      stringItemsCache = new AsyncCache();
      org_jetbrains_compose_resources_StringItem_Value$stable = 0;
      org_jetbrains_compose_resources_StringItem_Plurals$stable = 8;
      org_jetbrains_compose_resources_StringItem_Array$stable = 8;
    }
  }
  function get_cldrPluralRuleListIndexByLocale() {
    _init_properties_CLDRPluralRuleLists_kt__djqc24();
    return cldrPluralRuleListIndexByLocale;
  }
  var cldrPluralRuleListIndexByLocale;
  function get_cldrPluralRuleLists() {
    _init_properties_CLDRPluralRuleLists_kt__djqc24();
    return cldrPluralRuleLists;
  }
  var cldrPluralRuleLists;
  var properties_initialized_CLDRPluralRuleLists_kt_25xrzi;
  function _init_properties_CLDRPluralRuleLists_kt__djqc24() {
    if (!properties_initialized_CLDRPluralRuleLists_kt_25xrzi) {
      properties_initialized_CLDRPluralRuleLists_kt_25xrzi = true;
      cldrPluralRuleListIndexByLocale = mapOf([to('bm', 0), to('bo', 0), to('dz', 0), to('hnj', 0), to('id', 0), to('ig', 0), to('ii', 0), to('in', 0), to('ja', 0), to('jbo', 0), to('jv', 0), to('jw', 0), to('kde', 0), to('kea', 0), to('km', 0), to('ko', 0), to('lkt', 0), to('lo', 0), to('ms', 0), to('my', 0), to('nqo', 0), to('osa', 0), to('root', 0), to('sah', 0), to('ses', 0), to('sg', 0), to('su', 0), to('th', 0), to('to', 0), to('tpi', 0), to('vi', 0), to('wo', 0), to('yo', 0), to('yue', 0), to('zh', 0), to('am', 1), to('as', 1), to('bn', 1), to('doi', 1), to('fa', 1), to('gu', 1), to('hi', 1), to('kn', 1), to('pcm', 1), to('zu', 1), to('ff', 2), to('hy', 2), to('kab', 2), to('ast', 3), to('de', 3), to('en', 3), to('et', 3), to('fi', 3), to('fy', 3), to('gl', 3), to('ia', 3), to('io', 3), to('ji', 3), to('lij', 3), to('nl', 3), to('sc', 3), to('scn', 3), to('sv', 3), to('sw', 3), to('ur', 3), to('yi', 3), to('si', 4), to('ak', 5), to('bho', 5), to('guw', 5), to('ln', 5), to('mg', 5), to('nso', 5), to('pa', 5), to('ti', 5), to('wa', 5), to('tzm', 6), to('af', 7), to('an', 7), to('asa', 7), to('az', 7), to('bal', 7), to('bem', 7), to('bez', 7), to('bg', 7), to('brx', 7), to('ce', 7), to('cgg', 7), to('chr', 7), to('ckb', 7), to('dv', 7), to('ee', 7), to('el', 7), to('eo', 7), to('eu', 7), to('fo', 7), to('fur', 7), to('gsw', 7), to('ha', 7), to('haw', 7), to('hu', 7), to('jgo', 7), to('jmc', 7), to('ka', 7), to('kaj', 7), to('kcg', 7), to('kk', 7), to('kkj', 7), to('kl', 7), to('ks', 7), to('ksb', 7), to('ku', 7), to('ky', 7), to('lb', 7), to('lg', 7), to('mas', 7), to('mgo', 7), to('ml', 7), to('mn', 7), to('mr', 7), to('nah', 7), to('nb', 7), to('nd', 7), to('ne', 7), to('nn', 7), to('nnh', 7), to('no', 7), to('nr', 7), to('ny', 7), to('nyn', 7), to('om', 7), to('or', 7), to('os', 7), to('pap', 7), to('ps', 7), to('rm', 7), to('rof', 7), to('rwk', 7), to('saq', 7), to('sd', 7), to('sdh', 7), to('seh', 7), to('sn', 7), to('so', 7), to('sq', 7), to('ss', 7), to('ssy', 7), to('st', 7), to('syr', 7), to('ta', 7), to('te', 7), to('teo', 7), to('tig', 7), to('tk', 7), to('tn', 7), to('tr', 7), to('ts', 7), to('ug', 7), to('uz', 7), to('ve', 7), to('vo', 7), to('vun', 7), to('wae', 7), to('xh', 7), to('xog', 7), to('da', 8), to('is', 9), to('mk', 10), to('ceb', 11), to('fil', 11), to('tl', 11), to('lv', 12), to('prg', 12), to('lag', 13), to('ksh', 14), to('blo', 15), to('he', 16), to('iw', 16), to('iu', 17), to('naq', 17), to('sat', 17), to('se', 17), to('sma', 17), to('smi', 17), to('smj', 17), to('smn', 17), to('sms', 17), to('shi', 18), to('mo', 19), to('ro', 19), to('bs', 20), to('hr', 20), to('sh', 20), to('sr', 20), to('fr', 21), to('pt', 22), to('ca', 23), to('it', 23), to('pt_PT', 23), to('vec', 23), to('es', 24), to('gd', 25), to('sl', 26), to('dsb', 27), to('hsb', 27), to('cs', 28), to('sk', 28), to('pl', 29), to('be', 30), to('lt', 31), to('ru', 32), to('uk', 32), to('br', 33), to('mt', 34), to('ga', 35), to('gv', 36), to('kw', 37), to('ar', 38), to('ars', 38), to('cy', 39)]);
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = [to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = [to(PluralCategory_ONE_getInstance(), 'i = 0 or n = 1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = [to(PluralCategory_ONE_getInstance(), 'i = 0,1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = [to(PluralCategory_ONE_getInstance(), 'i = 1 and v = 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = [to(PluralCategory_ONE_getInstance(), 'n = 0,1 or i = 0 and f = 1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_4 = [to(PluralCategory_ONE_getInstance(), 'n = 0..1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_5 = [to(PluralCategory_ONE_getInstance(), 'n = 0..1 or n = 11..99'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_6 = [to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_7 = [to(PluralCategory_ONE_getInstance(), 'n = 1 or t != 0 and i = 0,1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_8 = [to(PluralCategory_ONE_getInstance(), 't = 0 and i % 10 = 1 and i % 100 != 11 or t % 10 = 1 and t % 100 != 11'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_9 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_10 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_11 = [to(PluralCategory_ZERO_getInstance(), 'n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19'), to(PluralCategory_ONE_getInstance(), 'n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_12 = [to(PluralCategory_ZERO_getInstance(), 'n = 0'), to(PluralCategory_ONE_getInstance(), 'i = 0,1 and n != 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_13 = [to(PluralCategory_ZERO_getInstance(), 'n = 0'), to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_14 = [to(PluralCategory_ZERO_getInstance(), 'n = 0'), to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_15 = [to(PluralCategory_ONE_getInstance(), 'i = 1 and v = 0 or i = 0 and v != 0'), to(PluralCategory_TWO_getInstance(), 'i = 2 and v = 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_16 = [to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_TWO_getInstance(), 'n = 2'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_17 = [to(PluralCategory_ONE_getInstance(), 'i = 0 or n = 1'), to(PluralCategory_FEW_getInstance(), 'n = 2..10'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_18 = [to(PluralCategory_ONE_getInstance(), 'i = 1 and v = 0'), to(PluralCategory_FEW_getInstance(), 'v != 0 or n = 0 or n != 1 and n % 100 = 1..19'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_19 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11'), to(PluralCategory_FEW_getInstance(), 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_20 = [to(PluralCategory_ONE_getInstance(), 'i = 0,1'), to(PluralCategory_MANY_getInstance(), 'e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_21 = [to(PluralCategory_ONE_getInstance(), 'i = 0..1'), to(PluralCategory_MANY_getInstance(), 'e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_22 = [to(PluralCategory_ONE_getInstance(), 'i = 1 and v = 0'), to(PluralCategory_MANY_getInstance(), 'e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_23 = [to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_MANY_getInstance(), 'e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_24 = [to(PluralCategory_ONE_getInstance(), 'n = 1,11'), to(PluralCategory_TWO_getInstance(), 'n = 2,12'), to(PluralCategory_FEW_getInstance(), 'n = 3..10,13..19'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_25 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i % 100 = 1'), to(PluralCategory_TWO_getInstance(), 'v = 0 and i % 100 = 2'), to(PluralCategory_FEW_getInstance(), 'v = 0 and i % 100 = 3..4 or v != 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_26 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i % 100 = 1 or f % 100 = 1'), to(PluralCategory_TWO_getInstance(), 'v = 0 and i % 100 = 2 or f % 100 = 2'), to(PluralCategory_FEW_getInstance(), 'v = 0 and i % 100 = 3..4 or f % 100 = 3..4'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_27 = [to(PluralCategory_ONE_getInstance(), 'i = 1 and v = 0'), to(PluralCategory_FEW_getInstance(), 'i = 2..4 and v = 0'), to(PluralCategory_MANY_getInstance(), 'v != 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_28 = [to(PluralCategory_ONE_getInstance(), 'i = 1 and v = 0'), to(PluralCategory_FEW_getInstance(), 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14'), to(PluralCategory_MANY_getInstance(), 'v = 0 and i != 1 and i % 10 = 0..1 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 12..14'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_29 = [to(PluralCategory_ONE_getInstance(), 'n % 10 = 1 and n % 100 != 11'), to(PluralCategory_FEW_getInstance(), 'n % 10 = 2..4 and n % 100 != 12..14'), to(PluralCategory_MANY_getInstance(), 'n % 10 = 0 or n % 10 = 5..9 or n % 100 = 11..14'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_30 = [to(PluralCategory_ONE_getInstance(), 'n % 10 = 1 and n % 100 != 11..19'), to(PluralCategory_FEW_getInstance(), 'n % 10 = 2..9 and n % 100 != 11..19'), to(PluralCategory_MANY_getInstance(), 'f != 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_31 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i % 10 = 1 and i % 100 != 11'), to(PluralCategory_FEW_getInstance(), 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14'), to(PluralCategory_MANY_getInstance(), 'v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_32 = [to(PluralCategory_ONE_getInstance(), 'n % 10 = 1 and n % 100 != 11,71,91'), to(PluralCategory_TWO_getInstance(), 'n % 10 = 2 and n % 100 != 12,72,92'), to(PluralCategory_FEW_getInstance(), 'n % 10 = 3..4,9 and n % 100 != 10..19,70..79,90..99'), to(PluralCategory_MANY_getInstance(), 'n != 0 and n % 1000000 = 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_33 = [to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_TWO_getInstance(), 'n = 2'), to(PluralCategory_FEW_getInstance(), 'n = 0 or n % 100 = 3..10'), to(PluralCategory_MANY_getInstance(), 'n % 100 = 11..19'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_34 = [to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_TWO_getInstance(), 'n = 2'), to(PluralCategory_FEW_getInstance(), 'n = 3..6'), to(PluralCategory_MANY_getInstance(), 'n = 7..10'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_35 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i % 10 = 1'), to(PluralCategory_TWO_getInstance(), 'v = 0 and i % 10 = 2'), to(PluralCategory_FEW_getInstance(), 'v = 0 and i % 100 = 0,20,40,60,80'), to(PluralCategory_MANY_getInstance(), 'v != 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_36 = [to(PluralCategory_ZERO_getInstance(), 'n = 0'), to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_TWO_getInstance(), 'n % 100 = 2,22,42,62,82 or n % 1000 = 0 and n % 100000 = 1000..20000,40000,60000,80000 or n != 0 and n % 1000000 = 100000'), to(PluralCategory_FEW_getInstance(), 'n % 100 = 3,23,43,63,83'), to(PluralCategory_MANY_getInstance(), 'n != 1 and n % 100 = 1,21,41,61,81'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_37 = [to(PluralCategory_ZERO_getInstance(), 'n = 0'), to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_TWO_getInstance(), 'n = 2'), to(PluralCategory_FEW_getInstance(), 'n % 100 = 3..10'), to(PluralCategory_MANY_getInstance(), 'n % 100 = 11..99'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      cldrPluralRuleLists = [tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp_22, tmp_23, tmp_24, tmp_25, tmp_26, tmp_27, tmp_28, tmp_29, tmp_30, tmp_31, tmp_32, tmp_33, tmp_34, tmp_35, tmp_36, tmp_37, [to(PluralCategory_ZERO_getInstance(), 'n = 0'), to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_TWO_getInstance(), 'n = 2'), to(PluralCategory_FEW_getInstance(), 'n = 3'), to(PluralCategory_MANY_getInstance(), 'n = 6'), to(PluralCategory_OTHER_getInstance(), '')]];
    }
  }
  var PluralCategory_ZERO_instance;
  var PluralCategory_ONE_instance;
  var PluralCategory_TWO_instance;
  var PluralCategory_FEW_instance;
  var PluralCategory_MANY_instance;
  var PluralCategory_OTHER_instance;
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).fromString_g5hge7_k$ = function (name) {
    var tmp0 = get_entries_1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (equals_0(element.get_name_woqyms_k$(), name, true)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  var Companion_instance_1;
  function Companion_getInstance_18() {
    PluralCategory_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values_1() {
    return [PluralCategory_ZERO_getInstance(), PluralCategory_ONE_getInstance(), PluralCategory_TWO_getInstance(), PluralCategory_FEW_getInstance(), PluralCategory_MANY_getInstance(), PluralCategory_OTHER_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'ZERO':
        return PluralCategory_ZERO_getInstance();
      case 'ONE':
        return PluralCategory_ONE_getInstance();
      case 'TWO':
        return PluralCategory_TWO_getInstance();
      case 'FEW':
        return PluralCategory_FEW_getInstance();
      case 'MANY':
        return PluralCategory_MANY_getInstance();
      case 'OTHER':
        return PluralCategory_OTHER_getInstance();
      default:
        PluralCategory_initEntries();
        THROW_IAE('No enum constant org.jetbrains.compose.resources.plural.PluralCategory.' + value);
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var PluralCategory_entriesInitialized;
  function PluralCategory_initEntries() {
    if (PluralCategory_entriesInitialized)
      return Unit_getInstance();
    PluralCategory_entriesInitialized = true;
    PluralCategory_ZERO_instance = new PluralCategory('ZERO', 0);
    PluralCategory_ONE_instance = new PluralCategory('ONE', 1);
    PluralCategory_TWO_instance = new PluralCategory('TWO', 2);
    PluralCategory_FEW_instance = new PluralCategory('FEW', 3);
    PluralCategory_MANY_instance = new PluralCategory('MANY', 4);
    PluralCategory_OTHER_instance = new PluralCategory('OTHER', 5);
    Companion_getInstance_18();
  }
  var $ENTRIES_1;
  function PluralCategory(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PluralCategory_ZERO_getInstance() {
    PluralCategory_initEntries();
    return PluralCategory_ZERO_instance;
  }
  function PluralCategory_ONE_getInstance() {
    PluralCategory_initEntries();
    return PluralCategory_ONE_instance;
  }
  function PluralCategory_TWO_getInstance() {
    PluralCategory_initEntries();
    return PluralCategory_TWO_instance;
  }
  function PluralCategory_FEW_getInstance() {
    PluralCategory_initEntries();
    return PluralCategory_FEW_instance;
  }
  function PluralCategory_MANY_getInstance() {
    PluralCategory_initEntries();
    return PluralCategory_MANY_instance;
  }
  function PluralCategory_OTHER_getInstance() {
    PluralCategory_initEntries();
    return PluralCategory_OTHER_instance;
  }
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
      tmp = density.toDp_hs0w0_k$(tmp$ret$7);
    } else {
      throw UnsupportedOperationException_init_$Create$('value should ends with dp or px');
    }
    return tmp;
  }
  function parseFillType(fillType) {
    var tmp;
    switch (fillType) {
      case 'nonZero':
        tmp = Companion_getInstance_1().get_NonZero_dwy848_k$();
        break;
      case 'evenOdd':
        tmp = Companion_getInstance_1().get_EvenOdd_cpanrc_k$();
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
        tmp = Companion_getInstance_2().get_Butt_jb7qjw_k$();
        break;
      case 'round':
        tmp = Companion_getInstance_2().get_Round_hjra1h_k$();
        break;
      case 'square':
        tmp = Companion_getInstance_2().get_Square_dbwc3a_k$();
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
        tmp = Companion_getInstance_3().get_Miter_xkwqso_k$();
        break;
      case 'round':
        tmp = Companion_getInstance_3().get_Round_o8jjqp_k$();
        break;
      case 'bevel':
        tmp = Companion_getInstance_3().get_Bevel_8ab6n7_k$();
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
        tmp = Companion_getInstance_4().get_Clamp_ddetsd_k$();
        break;
      case 'repeated':
        tmp = Companion_getInstance_4().get_Repeated_jl00zi_k$();
        break;
      case 'mirror':
        tmp = Companion_getInstance_4().get_Mirror_rukh4t_k$();
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
    return builder.build_1k0s4u_k$();
  }
  var Group_Real_instance;
  var Group_Virtual_instance;
  function values_2() {
    return [Group_Real_getInstance(), Group_Virtual_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'Real':
        return Group_Real_getInstance();
      case 'Virtual':
        return Group_Virtual_getInstance();
      default:
        Group_initEntries();
        THROW_IAE('No enum constant org.jetbrains.compose.resources.vector.BuildContext.Group.' + value);
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var Group_entriesInitialized;
  function Group_initEntries() {
    if (Group_entriesInitialized)
      return Unit_getInstance();
    Group_entriesInitialized = true;
    Group_Real_instance = new Group('Real', 0);
    Group_Virtual_instance = new Group('Virtual', 1);
  }
  var $ENTRIES_2;
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
    tmp.currentGroups_1 = ArrayList_init_$Create$();
  }
  protoOf(BuildContext).get_currentGroups_u66glg_k$ = function () {
    return this.currentGroups_1;
  };
  function attributeOrNull(_this__u8e3s4, namespace, name) {
    var value = _this__u8e3s4.getAttributeNS_m2qmcr_k$(namespace, name);
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
    var _iterator__ex2g4s = (isInterface(tmp, Sequence) ? tmp : THROW_CCE()).iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      parseVectorNode(element, builder, context);
    }
  }
  function get_childrenSequence(_this__u8e3s4) {
    return sequence(_get_childrenSequence_$slambda_9jpw3j_0(_this__u8e3s4, null));
  }
  function parseVectorNode(_this__u8e3s4, builder, context) {
    switch (_this__u8e3s4.get_nodeName_d8eikq_k$()) {
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
      tmp_1 = Companion_getInstance_1().get_NonZero_dwy848_k$();
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
      tmp_20 = Companion_getInstance_2().get_Butt_jb7qjw_k$();
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
      tmp_24 = Companion_getInstance_3().get_Miter_xkwqso_k$();
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
    builder.addPath_15iv0l_k$(tmp, tmp_3, tmp_4, tmp_8, tmp_10, tmp_14, tmp_16, tmp_18, tmp_22, tmp_26, tmp_28, tmp_30, tmp_32, tmp26_elvis_lhs == null ? 0.0 : tmp26_elvis_lhs);
  }
  function parseClipPath(_this__u8e3s4, builder, context) {
    var tmp0_elvis_lhs = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'name');
    builder.addGroup$default_x7xqxd_k$(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, VOID, VOID, VOID, VOID, VOID, VOID, VOID, addPathNodes(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pathData')));
    context.currentGroups_1.add_utx5q5_k$(Group_Virtual_getInstance());
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
    builder.addGroup_xxexed_k$(tmp, tmp_1, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, tmp14_elvis_lhs == null ? 0.0 : tmp14_elvis_lhs, get_EmptyPath());
    context.currentGroups_1.add_utx5q5_k$(Group_Real_getInstance());
    parseVectorNodes(_this__u8e3s4, builder, context);
    do {
      var removedGroup = removeLastOrNull(context.currentGroups_1);
      builder.clearGroup_chitou_k$();
    }
     while (equals(removedGroup, Group_Virtual_getInstance()));
  }
  function parseStringBrush(str) {
    return new SolidColor(Color(parseColorValue(str)));
  }
  function apptAttr(_this__u8e3s4, namespace, name) {
    var prefix = _this__u8e3s4.lookupPrefix_39tj8y_k$(namespace);
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, apptAttr$lambda);
    // Inline function 'kotlin.sequences.find' call
    var tmp0 = isInterface(tmp, Sequence) ? tmp : THROW_CCE();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (element.get_namespaceURI_g6nmhy_k$() === 'http://schemas.android.com/aapt' && element.get_localName_bf4zrn_k$() === 'attr' && element.getAttribute_z2kbho_k$('name') === prefix + ':' + name) {
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
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (element.get_nodeName_d8eikq_k$() === 'gradient') {
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
    var tmp = Companion_getInstance_5();
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
      tmp_8 = Companion_getInstance_4().get_Clamp_ddetsd_k$();
    } else {
      tmp_8 = tmp9_elvis_lhs;
    }
    return tmp.linearGradient_gq8lze_k$(tmp_0, tmp_3, tmp_6, tmp_8);
  }
  function parseRadialGradient(_this__u8e3s4) {
    var tmp = Companion_getInstance_5();
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
      tmp_7 = Companion_getInstance_4().get_Clamp_ddetsd_k$();
    } else {
      tmp_7 = tmp7_elvis_lhs;
    }
    return tmp.radialGradient_q9mw3i_k$(tmp_0, tmp_3, tmp_5, tmp_7);
  }
  function parseSweepGradient(_this__u8e3s4) {
    var tmp = Companion_getInstance_5();
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
    return tmp.sweepGradient_pf4hbc_k$(tmp_0, tmp$ret$7);
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
    var _iterator__ex2g4s = items.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var tmp0_safe_receiver = parseColorStop(item, index_0 / coerceAtLeast(get_lastIndex(items), 1));
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination.add_utx5q5_k$(tmp0_safe_receiver);
      }
    }
    var colorStops = destination;
    if (colorStops.isEmpty_y1axqb_k$()) {
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
        colorStops.add_utx5q5_k$(to(0.0, new Color_0(Color(startColor))));
      }
      if (!(centerColor == null)) {
        colorStops.add_utx5q5_k$(to(0.5, new Color_0(Color(centerColor))));
      }
      if (!(endColor == null)) {
        colorStops.add_utx5q5_k$(to(1.0, new Color_0(Color(endColor))));
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
    this.$this_childrenSequence_1 = $this_childrenSequence;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_childrenSequence_$slambda_9jpw3j).invoke_e8kyn4_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_5jok44_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_get_childrenSequence_$slambda_9jpw3j).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_e8kyn4_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_childrenSequence_$slambda_9jpw3j).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this._iterator_0_yqohr0__1 = until(0, this.$this_childrenSequence_1.get_childNodes_1z4mta_k$().get_length_g42xv3_k$()).iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this._iterator_0_yqohr0__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            var i = this._iterator_0_yqohr0__1.next_20eer_k$();
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.$this_childrenSequence_1.get_childNodes_1z4mta_k$().item_dog3dn_k$(i), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(_get_childrenSequence_$slambda_9jpw3j).create_5jok44_k$ = function ($this$sequence, completion) {
    var i = new _get_childrenSequence_$slambda_9jpw3j(this.$this_childrenSequence_1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(_get_childrenSequence_$slambda_9jpw3j).create_wyq9v6_k$ = function (value, completion) {
    return this.create_5jok44_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function _get_childrenSequence_$slambda_9jpw3j_0($this_childrenSequence, resultContinuation) {
    var i = new _get_childrenSequence_$slambda_9jpw3j($this_childrenSequence, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_e8kyn4_k$($this$sequence, $completion);
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
    return it.get_nodeName_d8eikq_k$() === 'item';
  }
  function Element_0() {
  }
  var org_jetbrains_compose_resources_vector_xmldom_MalformedXMLException$stable;
  function MalformedXMLException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, MalformedXMLException);
  }
  function Node() {
  }
  function NodeList() {
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
    return new ResourceEnvironment(new LanguageQualifier(locale.language), new RegionQualifier(locale.region), Companion_getInstance_16().selectByValue_7mr6mx_k$(isDarkTheme), Companion_getInstance_17().selectByValue_h7gwd6_k$(dpi));
  }
  var org_jetbrains_compose_resources_DefaultJsResourceReader$stable;
  function getPlatformResourceReader() {
    if (isInTestEnvironment())
      return TestJsResourceReader_getInstance();
    return DefaultJsResourceReader_getInstance();
  }
  function isInTestEnvironment() {
    return window.composeResourcesTesting == true;
  }
  function readByteArray($this, path) {
    var resPath = WebResourcesConfiguration_getInstance().get_getResourcePath_p3mxjf_k$()(path);
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
    TestJsResourceReader_instance = this;
  }
  protoOf(TestJsResourceReader).read_3sms9f_k$ = function (path, $completion) {
    return readByteArray(this, path);
  };
  protoOf(TestJsResourceReader).readPart_jv4s5i_k$ = function (path, offset, size, $completion) {
    return sliceArray(readByteArray(this, path), until(convertToInt(offset), convertToInt(add(offset, size))));
  };
  protoOf(TestJsResourceReader).getUri_3gtoqs_k$ = function (path) {
    var location = window.location;
    return getResourceUrl(location.origin, location.pathname, path);
  };
  var TestJsResourceReader_instance;
  function TestJsResourceReader_getInstance() {
    if (TestJsResourceReader_instance == null)
      new TestJsResourceReader();
    return TestJsResourceReader_instance;
  }
  function readAsBlob($this, path, $completion) {
    var tmp = new $readAsBlobCOROUTINE$($this, path, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function asByteArray($this, _this__u8e3s4, $completion) {
    var tmp = new $asByteArrayCOROUTINE$($this, _this__u8e3s4, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $readCOROUTINE$(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.path_1 = path;
  }
  protoOf($readCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = readAsBlob(this._this__u8e3s4__1, this.path_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = asByteArray(this._this__u8e3s4__1, ARGUMENT, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
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
  function $readPartCOROUTINE$(_this__u8e3s4, path, offset, size, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.path_1 = path;
    this.offset_1 = offset;
    this.size_1 = size;
  }
  protoOf($readPartCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = readAsBlob(this._this__u8e3s4__1, this.path_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var part = suspendResult.slice(convertToInt(this.offset_1), convertToInt(add(this.offset_1, this.size_1)));
            this.set_state_rjd8d0_k$(2);
            suspendResult = asByteArray(this._this__u8e3s4__1, part, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
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
  function $readAsBlobCOROUTINE$(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.path_1 = path;
  }
  protoOf($readAsBlobCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.resPath0__1 = WebResourcesConfiguration_getInstance().get_getResourcePath_p3mxjf_k$()(this.path_1);
            this.set_state_rjd8d0_k$(1);
            suspendResult = await_0(window.fetch(this.resPath0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            if (!response.ok) {
              throw new MissingResourceException(this.resPath0__1);
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(response.blob(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
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
  function $asByteArrayCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this._this__u8e3s4__2 = _this__u8e3s4_0;
  }
  protoOf($asByteArrayCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this._this__u8e3s4__2.arrayBuffer();
            var buffer = tmp_0 instanceof Promise ? tmp_0 : THROW_CCE();
            this.set_state_rjd8d0_k$(1);
            suspendResult = await_0(buffer, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new Int8Array(ARGUMENT);
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
  function DefaultJsResourceReader() {
    DefaultJsResourceReader_instance = this;
  }
  protoOf(DefaultJsResourceReader).read_3sms9f_k$ = function (path, $completion) {
    var tmp = new $readCOROUTINE$(this, path, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DefaultJsResourceReader).readPart_jv4s5i_k$ = function (path, offset, size, $completion) {
    var tmp = new $readPartCOROUTINE$(this, path, offset, size, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DefaultJsResourceReader).getUri_3gtoqs_k$ = function (path) {
    var location = window.location;
    return getResourceUrl(location.origin, location.pathname, path);
  };
  var DefaultJsResourceReader_instance;
  function DefaultJsResourceReader_getInstance() {
    if (DefaultJsResourceReader_instance == null)
      new DefaultJsResourceReader();
    return DefaultJsResourceReader_instance;
  }
  var org_jetbrains_compose_resources_vector_xmldom_ElementImpl$stable;
  function ElementImpl(element) {
    NodeImpl.call(this, element);
    this.element_1 = element;
  }
  protoOf(ElementImpl).get_element_q8gf71_k$ = function () {
    return this.element_1;
  };
  protoOf(ElementImpl).get_textContent_fqn3fn_k$ = function () {
    return this.element_1.textContent;
  };
  protoOf(ElementImpl).get_localName_bf4zrn_k$ = function () {
    return this.element_1.localName;
  };
  protoOf(ElementImpl).get_namespaceURI_g6nmhy_k$ = function () {
    var tmp0_elvis_lhs = this.element_1.namespaceURI;
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(ElementImpl).getAttributeNS_m2qmcr_k$ = function (nameSpaceURI, localName) {
    var tmp0_elvis_lhs = this.element_1.getAttributeNS(nameSpaceURI, localName);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(ElementImpl).getAttribute_z2kbho_k$ = function (name) {
    var tmp0_elvis_lhs = this.element_1.getAttribute(name);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  var org_jetbrains_compose_resources_vector_xmldom_NodeImpl$stable;
  function NodeImpl$childNodes$3$1(this$0) {
    this.this$0__1 = this$0;
    this.length_1 = this$0.n_1.childNodes.length;
  }
  protoOf(NodeImpl$childNodes$3$1).item_dog3dn_k$ = function (i) {
    var tmp0_elvis_lhs = this.this$0__1.n_1.childNodes.item(i);
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
  protoOf(NodeImpl$childNodes$3$1).get_length_g42xv3_k$ = function () {
    return this.length_1;
  };
  function NodeImpl$childNodes$delegate$lambda(this$0) {
    return function () {
      return new NodeImpl$childNodes$3$1(this$0);
    };
  }
  function NodeImpl$_get_childNodes_$ref_tsfx09() {
    return function (p0) {
      return p0.get_childNodes_1z4mta_k$();
    };
  }
  function NodeImpl(n) {
    this.n_1 = n;
    this.localName_1 = '';
    this.namespaceURI_1 = '';
    var tmp = this;
    tmp.childNodes$delegate_1 = lazy(NodeImpl$childNodes$delegate$lambda(this));
  }
  protoOf(NodeImpl).get_n_1mhr5x_k$ = function () {
    return this.n_1;
  };
  protoOf(NodeImpl).get_textContent_fqn3fn_k$ = function () {
    return this.n_1.textContent;
  };
  protoOf(NodeImpl).get_nodeName_d8eikq_k$ = function () {
    return this.n_1.nodeName;
  };
  protoOf(NodeImpl).get_localName_bf4zrn_k$ = function () {
    return this.localName_1;
  };
  protoOf(NodeImpl).get_namespaceURI_g6nmhy_k$ = function () {
    return this.namespaceURI_1;
  };
  protoOf(NodeImpl).get_childNodes_1z4mta_k$ = function () {
    var tmp0 = this.childNodes$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childNodes', 1, tmp, NodeImpl$_get_childNodes_$ref_tsfx09(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NodeImpl).lookupPrefix_39tj8y_k$ = function (namespaceURI) {
    var tmp0_elvis_lhs = this.n_1.lookupPrefix(namespaceURI);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  var org_jetbrains_compose_resources_DrawCache$stable;
  function _set_cachedCanvas__k6eyd9($this, _set____db54di) {
    $this.cachedCanvas_1 = _set____db54di;
  }
  function _get_cachedCanvas__zayd1r($this) {
    return $this.cachedCanvas_1;
  }
  function _set_scopeDensity__i5999($this, _set____db54di) {
    $this.scopeDensity_1 = _set____db54di;
  }
  function _get_scopeDensity__f1lhav($this) {
    return $this.scopeDensity_1;
  }
  function _set_layoutDirection__jzuy7k($this, _set____db54di) {
    $this.layoutDirection_1 = _set____db54di;
  }
  function _get_layoutDirection__u3l5q4($this) {
    return $this.layoutDirection_1;
  }
  function _set_size__9twho6($this, _set____db54di) {
    $this.size_1 = _set____db54di;
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function _set_config__iyy5m3($this, _set____db54di) {
    $this.config_1 = _set____db54di;
  }
  function _get_config__hi7kzb($this) {
    return $this.config_1;
  }
  function _get_cacheScope__m83lt3($this) {
    return $this.cacheScope_1;
  }
  function clear($this, _this__u8e3s4) {
    _this__u8e3s4.drawRect$default_5x4e2k_k$(Companion_getInstance_6().get_Black_t4k9fh_k$(), VOID, VOID, VOID, VOID, VOID, Companion_getInstance_7().get_Clear_ts5s9y_k$());
  }
  function DrawCache() {
    this.mCachedImage_1 = null;
    this.cachedCanvas_1 = null;
    this.scopeDensity_1 = null;
    this.layoutDirection_1 = LayoutDirection_Ltr_getInstance();
    this.size_1 = Companion_getInstance_8().get_Zero_9we0a6_k$();
    this.config_1 = Companion_getInstance_9().get_Argb8888_epitdf_k$();
    this.cacheScope_1 = new CanvasDrawScope();
  }
  protoOf(DrawCache).set_mCachedImage_1pezkt_k$ = function (_set____db54di) {
    this.mCachedImage_1 = _set____db54di;
  };
  protoOf(DrawCache).get_mCachedImage_xe5kio_k$ = function () {
    return this.mCachedImage_1;
  };
  protoOf(DrawCache).drawCachedImage_37kfns_k$ = function (config, size, density, layoutDirection, block) {
    this.scopeDensity_1 = density;
    this.layoutDirection_1 = layoutDirection;
    var targetImage = this.mCachedImage_1;
    var targetCanvas = this.cachedCanvas_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    if (targetImage == null || targetCanvas == null) {
      tmp_1 = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(size);
      tmp_1 = convertToInt(shiftRight(value, 32)) > targetImage.get_width_j0q4yl_k$();
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(size);
      tmp_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0))) > targetImage.get_height_e7t92o_k$();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !(this.config_1 === config);
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
      this.mCachedImage_1 = targetImage;
      this.cachedCanvas_1 = targetCanvas;
      this.config_1 = config;
    }
    this.size_1 = size;
    var tmp0 = this.cacheScope_1;
    var tmp6 = targetCanvas;
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
    var size_0 = toSize(size);
    var _destruct__k2r9zo = tmp0.get_drawParams_yv2tao_k$();
    var prevDensity = _destruct__k2r9zo.component1_7eebsc_k$();
    var prevLayoutDirection = _destruct__k2r9zo.component2_7eebsb_k$();
    var prevCanvas = _destruct__k2r9zo.component3_7eebsa_k$();
    var prevSize = _destruct__k2r9zo.component4_67q0p1_k$();
    // Inline function 'kotlin.apply' call
    var this_0 = tmp0.get_drawParams_yv2tao_k$();
    this_0.set_density_3p0aj9_k$(density);
    this_0.set_layoutDirection_vthtz8_k$(layoutDirection);
    this_0.set_canvas_1yi0mf_k$(tmp6);
    this_0.set_size_6a0e6q_k$(size_0);
    tmp6.save_fbe7h_k$();
    clear(this, tmp0);
    block(tmp0);
    tmp6.restore_a1ykhu_k$();
    // Inline function 'kotlin.apply' call
    var this_1 = tmp0.get_drawParams_yv2tao_k$();
    this_1.set_density_3p0aj9_k$(prevDensity);
    this_1.set_layoutDirection_vthtz8_k$(prevLayoutDirection);
    this_1.set_canvas_1yi0mf_k$(prevCanvas);
    this_1.set_size_6a0e6q_k$(prevSize);
    targetImage.prepareToDraw_sb34p6_k$();
  };
  protoOf(DrawCache).drawInto_jyxzr7_k$ = function (target, alpha, colorFilter) {
    var targetImage = this.mCachedImage_1;
    // Inline function 'kotlin.check' call
    if (!!(targetImage == null)) {
      var message = 'drawCachedImage must be invoked first before attempting to draw the result into another destination';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    target.drawImage$default_qql6c2_k$(targetImage, VOID, this.size_1, VOID, VOID, alpha, VOID, colorFilter);
  };
  protoOf(DrawCache).drawInto$default_lbndea_k$ = function (target, alpha, colorFilter, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    var tmp;
    if ($super === VOID) {
      this.drawInto_jyxzr7_k$(target, alpha, colorFilter);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawInto_jyxzr7_k$.call(this, target, alpha, colorFilter);
    }
    return tmp;
  };
  function get_emptyFontBase64() {
    _init_properties_FontResources_skiko_kt__g77iad();
    return emptyFontBase64;
  }
  var emptyFontBase64;
  function get_defaultEmptyFont() {
    _init_properties_FontResources_skiko_kt__g77iad();
    var tmp0 = defaultEmptyFont$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('defaultEmptyFont', 0, tmp, _get_defaultEmptyFont_$ref_rachk1(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var defaultEmptyFont$delegate;
  function get_fontCache() {
    _init_properties_FontResources_skiko_kt__g77iad();
    return fontCache;
  }
  var fontCache;
  function defaultEmptyFont$delegate$lambda() {
    _init_properties_FontResources_skiko_kt__g77iad();
    return Font('org.jetbrains.compose.emptyFont', Default_getInstance().decode$default_mne14l_k$(get_emptyFontBase64()));
  }
  function _get_defaultEmptyFont_$ref_rachk1() {
    return function () {
      return get_defaultEmptyFont();
    };
  }
  var properties_initialized_FontResources_skiko_kt_wwtlnx;
  function _init_properties_FontResources_skiko_kt__g77iad() {
    if (!properties_initialized_FontResources_skiko_kt_wwtlnx) {
      properties_initialized_FontResources_skiko_kt_wwtlnx = true;
      emptyFontBase64 = 'T1RUTwAJAIAAAwAQQ0ZGIML7MfIAAAQIAAAA2U9TLzJmMV8PAAABAAAAAGBjbWFwANUAVwAAA6QAAABEaGVhZCMuU7IAAACcAAAANmhoZWECvgAmAAAA1AAAACRobXR4Az4AAAAABOQAAAAQbWF4cAAEUAAAAAD4AAAABm5hbWUpw3nbAAABYAAAAkNwb3N0AAMAAAAAA+gAAAAgAAEAAAABAADs7nftXw889QADA+gAAAAA4WWJaQAAAADhZYlpAAAAAAFNAAAAAAADAAIAAAAAAAAAAQAAArz+1AAAAU0AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAQAAFAAAAQAAAADAHwB9AAFAAACigK7AAAAjAKKArsAAAHfADEBAgAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAABYWFhYAEAAIABfArz+1AAAAAAAAAAAAAEAAAAAAV4AAAAgACAAAAAAACIBngABAAAAAAAAAAIAbwABAAAAAAABAAUAAAABAAAAAAACAAcADwABAAAAAAADABAAdQABAAAAAAAEAA0AJAABAAAAAAAFAAIAbwABAAAAAAAGAAwASwABAAAAAAAHAAIAbwABAAAAAAAIAAIAbwABAAAAAAAJAAIAbwABAAAAAAAKAAIAbwABAAAAAAALAAIAbwABAAAAAAAMAAIAbwABAAAAAAANAAIAbwABAAAAAAAOAAIAbwABAAAAAAAQAAUAAAABAAAAAAARAAcADwADAAEECQAAAAQAcQADAAEECQABAAoABQADAAEECQACAA4AFgADAAEECQADACAAhQADAAEECQAEABoAMQADAAEECQAFAAQAcQADAAEECQAGABgAVwADAAEECQAHAAQAcQADAAEECQAIAAQAcQADAAEECQAJAAQAcQADAAEECQAKAAQAcQADAAEECQALAAQAcQADAAEECQAMAAQAcQADAAEECQANAAQAcQADAAEECQAOAAQAcQADAAEECQAQAAoABQADAAEECQARAA4AFmVtcHR5AGUAbQBwAHQAeVJlZ3VsYXIAUgBlAGcAdQBsAGEAcmVtcHR5IFJlZ3VsYXIAZQBtAHAAdAB5ACAAUgBlAGcAdQBsAGEAcmVtcHR5UmVndWxhcgBlAG0AcAB0AHkAUgBlAGcAdQBsAGEAciIiACIAIiIiOmVtcHR5IFJlZ3VsYXIAIgAiADoAZQBtAHAAdAB5ACAAUgBlAGcAdQBsAGEAcgAAAAABAAMAAQAAAAwABAA4AAAACgAIAAIAAgAAACAAQQBf//8AAAAAACAAQQBf//8AAP/h/8H/pAABAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEAQABAQENZW1wdHlSZWd1bGFyAAEBASf4GwD4HAL4HQP4HgSLi/lQ9+EFHQAAAHgPHQAAAH8Rix0AAADZEgAHAQEDEBUcISIsIiJlbXB0eSBSZWd1bGFyZW1wdHlSZWd1bGFyc3BhY2VBdW5kZXJzY29yZQAAAAGLAYwBjQAEAQFMT1FT+F2f+TcVi4uL/TeLiwiLi/g1i4uLCIuLi/k3i4sIi4v8NYuLiwi7/QcVi4uL+NeLiwiLi/fUi4uLCIuLi/zXi4sIi4v71IuLiwgO9+EOnw6fDgAAAAHJAAABTQAAABQAAAAUAAA=';
      defaultEmptyFont$delegate = lazy(defaultEmptyFont$delegate$lambda);
      fontCache = new AsyncCache();
    }
  }
  var org_jetbrains_compose_resources_SvgElement$stable;
  function toSvgPainter(_this__u8e3s4, density) {
    return new SvgPainter(_this__u8e3s4.svgdom_1, density);
  }
  function SvgElement(svgdom) {
    this.svgdom_1 = svgdom;
  }
  protoOf(SvgElement).get_svgdom_jom9gn_k$ = function () {
    return this.svgdom_1;
  };
  function toSvgElement(_this__u8e3s4) {
    return new SvgElement(SVGDOM_init_$Create$(Companion_getInstance_10().makeFromBytes$default_1ffal6_k$(_this__u8e3s4)));
  }
  function toImageBitmap(_this__u8e3s4, resourceDensity, targetDensity) {
    var image = Companion_getInstance_11().makeFromEncoded_99p5hy_k$(_this__u8e3s4);
    var targetImage;
    if (resourceDensity > targetDensity) {
      var scale = targetDensity / resourceDensity;
      var targetH = image.get_height_e7t92o_k$() * scale;
      var targetW = image.get_width_j0q4yl_k$() * scale;
      var srcRect = Companion_getInstance_12().makeWH_nov667_k$(image.get_width_j0q4yl_k$(), image.get_height_e7t92o_k$());
      var dstRect = Companion_getInstance_12().makeWH_nov667_k$(targetW, targetH);
      // Inline function 'kotlin.run' call
      var $this$run = Companion_getInstance_13().makeRasterN32Premul_bcax9f_k$(numberToInt(targetW), numberToInt(targetH));
      // Inline function 'kotlin.apply' call
      var this_0 = Paint_init_$Create$();
      this_0.set_isAntiAlias_m6kooi_k$(true);
      var paint = this_0;
      $this$run.get_canvas_bshgm9_k$().drawImageRect_6jbgn9_k$(image, srcRect, dstRect, Companion_getInstance_14().get_LINEAR_inmlq_k$(), paint, true);
      targetImage = $this$run.makeImageSnapshot_3ua8s1_k$();
    } else {
      targetImage = image;
    }
    return toComposeImageBitmap(targetImage);
  }
  function get_currentOrPreview(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-193451530);
    if (isTraceInProgress()) {
      traceEventStart(-193451530, $changed, -1, 'org.jetbrains.compose.resources.<get-currentOrPreview> (ResourceReader.skiko.kt:6)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(_this__u8e3s4);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  var org_jetbrains_compose_resources_SvgPainter$stable;
  function _get_dom__e677gv($this) {
    return $this.dom_1;
  }
  function _get_density__l5pazb($this) {
    return $this.density_1;
  }
  function _get_root__dd8asp($this) {
    return $this.root_1;
  }
  function _get_defaultSizePx__5mf98n($this) {
    return $this.defaultSizePx_1;
  }
  function _set_previousDrawSize__4vz6xn($this, _set____db54di) {
    $this.previousDrawSize_1 = _set____db54di;
  }
  function _get_previousDrawSize__xz3g0f($this) {
    return $this.previousDrawSize_1;
  }
  function _set_alpha__c56vtz($this, _set____db54di) {
    $this.alpha_2 = _set____db54di;
  }
  function _get_alpha__jvxknh($this) {
    return $this.alpha_2;
  }
  function _set_colorFilter__ke9voq($this, _set____db54di) {
    $this.colorFilter_2 = _set____db54di;
  }
  function _get_colorFilter__kcfzyi($this) {
    return $this.colorFilter_2;
  }
  function _get_drawCache__uyo1al($this) {
    return $this.drawCache_1;
  }
  function drawSvg($this, _this__u8e3s4, size) {
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$();
    var tmp0_safe_receiver = $this.root_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o(size);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$3 = floatFromBits(bits);
      tmp0_safe_receiver.set_width_iqtqrd_k$(new SVGLength(tmp$ret$3, SVGLengthUnit_PX_getInstance()));
    }
    var tmp1_safe_receiver = $this.root_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$7 = floatFromBits(bits_0);
      tmp1_safe_receiver.set_height_nllxvw_k$(new SVGLength(tmp$ret$7, SVGLengthUnit_PX_getInstance()));
    }
    var tmp2_safe_receiver = $this.root_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.set_preserveAspectRatio_1wbzsx_k$(SVGPreserveAspectRatio_init_$Create$(SVGPreserveAspectRatioAlign_NONE_getInstance()));
    }
    $this.dom_1.render_ag2cxd_k$(get_nativeCanvas(canvas));
  }
  function SvgPainter$onDraw$lambda(this$0) {
    return function ($this$drawCachedImage) {
      drawSvg(this$0, $this$drawCachedImage, $this$drawCachedImage.get_size_cxx1ym_k$());
      return Unit_getInstance();
    };
  }
  function SvgPainter(dom, density) {
    Painter.call(this);
    this.dom_1 = dom;
    this.density_1 = density;
    this.root_1 = this.dom_1.get_root_wott0r_k$();
    var tmp = this;
    // Inline function 'kotlin.run' call
    var tmp0_safe_receiver = this.root_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_width_j0q4yl_k$();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.withUnit_7yfqte_k$(SVGLengthUnit_PX_getInstance());
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_value_j01efc_k$();
    var width = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
    var tmp4_safe_receiver = this.root_1;
    var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.get_height_e7t92o_k$();
    var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.withUnit_7yfqte_k$(SVGLengthUnit_PX_getInstance());
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.get_value_j01efc_k$();
    var height = tmp7_elvis_lhs == null ? 0.0 : tmp7_elvis_lhs;
    var tmp_0;
    if (width === 0.0 && height === 0.0) {
      tmp_0 = Companion_getInstance_15().get_Unspecified_3ttj0y_k$();
    } else {
      // Inline function 'androidx.compose.ui.geometry.Size' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var v1 = fromInt(toRawBits(width));
      var v2 = fromInt(toRawBits(height));
      var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      tmp_0 = _Size___init__impl__aywn0g(tmp$ret$0);
    }
    tmp.defaultSizePx_1 = tmp_0;
    var tmp_1;
    var tmp1_safe_receiver_0 = this.root_1;
    if ((tmp1_safe_receiver_0 == null ? null : tmp1_safe_receiver_0.get_viewBox_8rz1fh_k$()) == null) {
      // Inline function 'androidx.compose.ui.geometry.isSpecified' call
      var this_0 = this.defaultSizePx_1;
      tmp_1 = !equalsLong(_Size___get_packedValue__impl__7rlt1o(this_0), new Long(2143289344, 2143289344));
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp0_safe_receiver_0 = this.root_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        var tmp_2 = Companion_getInstance_12();
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        var this_1 = this.defaultSizePx_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value = _Size___get_packedValue__impl__7rlt1o(this_1);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits = convertToInt(shiftRight(value, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp_3 = floatFromBits(bits);
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        var this_2 = this.defaultSizePx_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_0 = _Size___get_packedValue__impl__7rlt1o(this_2);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp$ret$12 = floatFromBits(bits_0);
        tmp0_safe_receiver_0.set_viewBox_4zmy83_k$(tmp_2.makeXYWH_irfy4g_k$(0.0, 0.0, tmp_3, tmp$ret$12));
      }
    }
    this.previousDrawSize_1 = Companion_getInstance_15().get_Unspecified_3ttj0y_k$();
    this.alpha_2 = 1.0;
    this.colorFilter_2 = null;
    this.drawCache_1 = new DrawCache();
  }
  protoOf(SvgPainter).get_intrinsicSize_culx5t_k$ = function () {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.defaultSizePx_1;
    if (!equalsLong(_Size___get_packedValue__impl__7rlt1o(this_0), new Long(2143289344, 2143289344))) {
      tmp = Size__times_impl_fnp4nc(this.defaultSizePx_1, this.density_1.get_density_qy0267_k$());
    } else {
      tmp = Companion_getInstance_15().get_Unspecified_3ttj0y_k$();
    }
    return tmp;
  };
  protoOf(SvgPainter).applyAlpha_eeyl20_k$ = function (alpha) {
    this.alpha_2 = alpha;
    return true;
  };
  protoOf(SvgPainter).applyColorFilter_uuk0e3_k$ = function (colorFilter) {
    this.colorFilter_2 = colorFilter;
    return true;
  };
  protoOf(SvgPainter).onDraw_yom3na_k$ = function (_this__u8e3s4) {
    if (!equals(this.previousDrawSize_1, _this__u8e3s4.get_size_cxx1ym_k$())) {
      var tmp = Companion_getInstance_9().get_Argb8888_epitdf_k$();
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      var this_0 = _this__u8e3s4.get_size_cxx1ym_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      // Inline function 'kotlin.math.ceil' call
      var x = floatFromBits(bits);
      var tmp$ret$4 = Math.ceil(x);
      var tmp0 = numberToInt(tmp$ret$4);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      var this_1 = _this__u8e3s4.get_size_cxx1ym_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      // Inline function 'kotlin.math.ceil' call
      var x_0 = floatFromBits(bits_0);
      var tmp$ret$9 = Math.ceil(x_0);
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = numberToInt(tmp$ret$9);
      var tmp$ret$10 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp_0 = _IntSize___init__impl__emcjft(tmp$ret$10);
      var tmp_1 = _this__u8e3s4.get_layoutDirection_7e37v0_k$();
      this.drawCache_1.drawCachedImage_37kfns_k$(tmp, tmp_0, _this__u8e3s4, tmp_1, SvgPainter$onDraw$lambda(this));
    }
    this.drawCache_1.drawInto_jyxzr7_k$(_this__u8e3s4, this.alpha_2, this.colorFilter_2);
  };
  var org_jetbrains_compose_resources_WebResourcesConfiguration$stable;
  function getResourceUrl(windowOrigin, windowPathname, resourcePath) {
    var path = WebResourcesConfiguration_getInstance().getResourcePath_1(resourcePath);
    return startsWith(path, '/') ? windowOrigin + path : startsWith(path, 'http://') || startsWith(path, 'https://') ? path : windowOrigin + windowPathname + path;
  }
  function WebResourcesConfiguration$getResourcePath$lambda(it) {
    return './' + it;
  }
  function WebResourcesConfiguration() {
    WebResourcesConfiguration_instance = this;
    var tmp = this;
    tmp.getResourcePath_1 = WebResourcesConfiguration$getResourcePath$lambda;
  }
  protoOf(WebResourcesConfiguration).set_getResourcePath_5sasn4_k$ = function (_set____db54di) {
    this.getResourcePath_1 = _set____db54di;
  };
  protoOf(WebResourcesConfiguration).get_getResourcePath_p3mxjf_k$ = function () {
    return this.getResourcePath_1;
  };
  protoOf(WebResourcesConfiguration).resourcePathMapping_vnuvms_k$ = function (map) {
    this.getResourcePath_1 = map;
  };
  var WebResourcesConfiguration_instance;
  function WebResourcesConfiguration_getInstance() {
    if (WebResourcesConfiguration_instance == null)
      new WebResourcesConfiguration();
    return WebResourcesConfiguration_instance;
  }
  function rememberResourceState(key1, key2, key3, getDefault, block, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(1947629696);
    if (isTraceInProgress()) {
      traceEventStart(1947629696, $changed, -1, 'org.jetbrains.compose.resources.rememberResourceState (ResourceState.web.kt:52)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalComposeEnvironment();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var environment = tmp0.rememberEnvironment_3peo8j_k$($composer_0, 0);
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
    var it = $composer_2.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var value = createCompositionCoroutineScope(getContext(), composer);
      $composer_2.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_2);
    sourceInformationMarkerEnd($composer_2);
    var scope = tmp1_group;
    $composer_0.startReplaceGroup_5hh8aj_k$(406080261);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!($composer_0.changed_ga7h3f_k$(key1) | $composer_0.changed_ga7h3f_k$(key2)) | $composer_0.changed_ga7h3f_k$(key3)) | $composer_0.changed_ga7h3f_k$(environment));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var mutableState = mutableStateOf(getDefault());
      var tmp_2 = CoroutineStart_UNDISPATCHED_getInstance();
      launch(scope, VOID, tmp_2, rememberResourceState$slambda_0(mutableState, block, environment, null));
      var value_0 = mutableState;
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_3 = tmp_1;
    var tmp1_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp1_group_0;
  }
  function rememberResourceState$lambda() {
    return EmptyCoroutineContext_getInstance();
  }
  function rememberResourceState$slambda($mutableState, $block, $environment, resultContinuation) {
    this.$mutableState_1 = $mutableState;
    this.$block_1 = $block;
    this.$environment_1 = $environment;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberResourceState$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(rememberResourceState$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberResourceState$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$block_1(this.$environment_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.$mutableState_1.set_value_v1vabv_k$(ARGUMENT);
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
  protoOf(rememberResourceState$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new rememberResourceState$slambda(this.$mutableState_1, this.$block_1, this.$environment_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(rememberResourceState$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function rememberResourceState$slambda_0($mutableState, $block, $environment, resultContinuation) {
    var i = new rememberResourceState$slambda($mutableState, $block, $environment, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  //region block: init
  org_jetbrains_compose_resources_FontResource$stable = 0;
  org_jetbrains_compose_resources_PluralStringResource$stable = 0;
  org_jetbrains_compose_resources_LanguageQualifier$stable = 0;
  org_jetbrains_compose_resources_RegionQualifier$stable = 0;
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
  org_jetbrains_compose_resources_vector_xmldom_ElementImpl$stable = 8;
  org_jetbrains_compose_resources_vector_xmldom_NodeImpl$stable = 8;
  org_jetbrains_compose_resources_DrawCache$stable = 8;
  org_jetbrains_compose_resources_SvgElement$stable = 8;
  org_jetbrains_compose_resources_SvgPainter$stable = 8;
  org_jetbrains_compose_resources_WebResourcesConfiguration$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = readResourceBytes;
  _.$_$.b = DrawableResource;
  _.$_$.c = ResourceItem;
  _.$_$.d = getResourceUri;
  _.$_$.e = painterResource;
  _.$_$.f = vectorResource;
  //endregion
  return _;
}));
