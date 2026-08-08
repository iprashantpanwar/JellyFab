(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './skiko.mjs', './js-reexport-symbols.mjs', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./skiko.mjs'), require('./js-reexport-symbols.mjs'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['./skiko.mjs'] === 'undefined') {
      throw new Error("Error loading module 'skiko-kjs'. Its dependency './skiko.mjs' was not found. Please, check whether './skiko.mjs' is loaded prior to 'skiko-kjs'.");
    }
    if (typeof globalThis['./js-reexport-symbols.mjs'] === 'undefined') {
      throw new Error("Error loading module 'skiko-kjs'. Its dependency './js-reexport-symbols.mjs' was not found. Please, check whether './js-reexport-symbols.mjs' is loaded prior to 'skiko-kjs'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'skiko-kjs'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'skiko-kjs'.");
    }
    globalThis['skiko-kjs'] = factory(typeof globalThis['skiko-kjs'] === 'undefined' ? {} : globalThis['skiko-kjs'], globalThis['./skiko.mjs'], globalThis['./js-reexport-symbols.mjs'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, $module$__skiko_mjs_llxhfs, $module$__js_reexport_symbols_mjs_135kj8, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var _releaseLocalCallbackScope = $module$__skiko_mjs_llxhfs.skikoApi._releaseLocalCallbackScope;
  var awaitSkiko = $module$__js_reexport_symbols_mjs_135kj8.api.awaitSkiko;
  var protoOf = kotlin_kotlin.$_$.z9;
  var objectCreate = kotlin_kotlin.$_$.y9;
  var initMetadataForClass = kotlin_kotlin.$_$.h9;
  var initMetadataForObject = kotlin_kotlin.$_$.n9;
  var VOID = kotlin_kotlin.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.b3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i9;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var ensureNotNull = kotlin_kotlin.$_$.wd;
  var Enum = kotlin_kotlin.$_$.bd;
  var charCodeAt = kotlin_kotlin.$_$.s8;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.e2;
  var toShort = kotlin_kotlin.$_$.aa;
  var toString = kotlin_kotlin.$_$.ba;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var compareTo = kotlin_kotlin.$_$.v8;
  var toBits = kotlin_kotlin.$_$.ke;
  var equals = kotlin_kotlin.$_$.z8;
  var hashCode = kotlin_kotlin.$_$.g9;
  var toString_0 = kotlin_kotlin.$_$.oe;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ce;
  var THROW_CCE = kotlin_kotlin.$_$.md;
  var isCharSequence = kotlin_kotlin.$_$.p9;
  var trim = kotlin_kotlin.$_$.uc;
  var split = kotlin_kotlin.$_$.hc;
  var getOrNull = kotlin_kotlin.$_$.c5;
  var toIntOrNull = kotlin_kotlin.$_$.mc;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.k2;
  var splitToSequence = kotlin_kotlin.$_$.gc;
  var mapNotNull = kotlin_kotlin.$_$.ib;
  var toList = kotlin_kotlin.$_$.mb;
  var copyToArray = kotlin_kotlin.$_$.n4;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.l2;
  var uintCompare = kotlin_kotlin.$_$.qe;
  var UInt = kotlin_kotlin.$_$.od;
  var isNaN_0 = kotlin_kotlin.$_$.yd;
  var numberToChar = kotlin_kotlin.$_$.v9;
  var charArrayOf = kotlin_kotlin.$_$.q8;
  var concatToString = kotlin_kotlin.$_$.ob;
  var initMetadataForInterface = kotlin_kotlin.$_$.l9;
  var decodeToString = kotlin_kotlin.$_$.rb;
  var contentEquals = kotlin_kotlin.$_$.f4;
  var contentHashCode = kotlin_kotlin.$_$.h4;
  var contentHashCode_0 = kotlin_kotlin.$_$.g4;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var NotImplementedError = kotlin_kotlin.$_$.jd;
  var last = kotlin_kotlin.$_$.t5;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.u2;
  var floatFromBits = kotlin_kotlin.$_$.a9;
  var joinToString = kotlin_kotlin.$_$.h5;
  var Error_init_$Create$ = kotlin_kotlin.$_$.b1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  var asList = kotlin_kotlin.$_$.w3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var toRawBits = kotlin_kotlin.$_$.me;
  var listOf = kotlin_kotlin.$_$.v5;
  var addAll = kotlin_kotlin.$_$.t3;
  var toIntArray = kotlin_kotlin.$_$.p6;
  var until = kotlin_kotlin.$_$.wa;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var getBooleanHashCode = kotlin_kotlin.$_$.b9;
  var toBits_0 = kotlin_kotlin.$_$.le;
  var convertToInt = kotlin_kotlin.$_$.x7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var shiftRightUnsigned = kotlin_kotlin.$_$.i8;
  var bitwiseXor = kotlin_kotlin.$_$.v7;
  var getNumberHashCode = kotlin_kotlin.$_$.d9;
  var RuntimeException = kotlin_kotlin.$_$.ld;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.t1;
  var captureStack = kotlin_kotlin.$_$.p8;
  var defineProp = kotlin_kotlin.$_$.w8;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.w;
  var charSequenceLength = kotlin_kotlin.$_$.u8;
  var lazy = kotlin_kotlin.$_$.be;
  var getKClassFromExpression = kotlin_kotlin.$_$.xa;
  var plus = kotlin_kotlin.$_$.de;
  var toString_1 = kotlin_kotlin.$_$.pc;
  var substring = kotlin_kotlin.$_$.kc;
  var numberToLong = kotlin_kotlin.$_$.g8;
  var contains = kotlin_kotlin.$_$.pb;
  var encodeToByteArray = kotlin_kotlin.$_$.sb;
  var copyOf = kotlin_kotlin.$_$.j4;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Native, 'Native');
  initMetadataForClass(Managed, 'Managed', VOID, Native);
  initMetadataForClass(BBHFactory, 'BBHFactory', VOID, Managed);
  initMetadataForClass(RTreeFactory, 'RTreeFactory', RTreeFactory_init_$Create$, BBHFactory);
  initMetadataForObject(_FinalizerHolder, '_FinalizerHolder');
  initMetadataForCompanion(Companion);
  initMetadataForObject(_FinalizerHolder_0, '_FinalizerHolder');
  initMetadataForClass(BackendRenderTarget, 'BackendRenderTarget', VOID, Managed);
  initMetadataForCompanion(Companion_0);
  initMetadataForObject(_FinalizerHolder_1, '_FinalizerHolder');
  function get_width() {
    return this.l3v().y3v_1;
  }
  function get_height() {
    return this.l3v().z3v_1;
  }
  function get_colorType() {
    return this.l3v().x3v_1.a3w_1;
  }
  function get_colorSpace() {
    return this.l3v().x3v_1.c3w_1;
  }
  function get_isOpaque() {
    return this.l3v().x3v_1.g3w();
  }
  initMetadataForInterface(IHasImageInfo, 'IHasImageInfo');
  initMetadataForClass(Bitmap, 'Bitmap', Bitmap_init_$Create$, Managed, [Managed, IHasImageInfo]);
  initMetadataForClass(BlendMode, 'BlendMode', VOID, Enum);
  initMetadataForCompanion(Companion_1);
  initMetadataForObject(_FinalizerHolder_2, '_FinalizerHolder');
  initMetadataForClass(BreakIterator, 'BreakIterator', VOID, Managed);
  initMetadataForCompanion(Companion_2);
  initMetadataForObject(_FinalizerHolder_3, '_FinalizerHolder');
  initMetadataForClass(Canvas, 'Canvas', VOID, Managed);
  initMetadataForClass(ClipMode, 'ClipMode', VOID, Enum);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Color4f, 'Color4f');
  initMetadataForClass(ColorAlphaType, 'ColorAlphaType', VOID, Enum);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(RefCnt, 'RefCnt', VOID, Managed);
  initMetadataForClass(ColorFilter, 'ColorFilter', VOID, RefCnt);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(ColorInfo, 'ColorInfo');
  initMetadataForCompanion(Companion_6);
  initMetadataForObject(_FinalizerHolder_4, '_FinalizerHolder');
  initMetadataForClass(ColorSpace, 'ColorSpace', VOID, Managed);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(ColorType, 'ColorType', VOID, Enum);
  initMetadataForClass(CubicResampler, 'CubicResampler');
  initMetadataForCompanion(Companion_8);
  initMetadataForObject(_FinalizerHolder_5, '_FinalizerHolder');
  initMetadataForClass(Data, 'Data', VOID, Managed);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(DirectContext, 'DirectContext', VOID, RefCnt);
  initMetadataForClass(FilterBlurMode, 'FilterBlurMode', VOID, Enum);
  initMetadataForClass(FilterMipmap, 'FilterMipmap');
  initMetadataForClass(FilterMode, 'FilterMode', VOID, Enum);
  initMetadataForClass(FilterTileMode, 'FilterTileMode', VOID, Enum);
  initMetadataForCompanion(Companion_10);
  initMetadataForObject(_FinalizerHolder_6, '_FinalizerHolder');
  initMetadataForClass(Font, 'Font', Font_init_$Create$, Managed);
  initMetadataForClass(FontEdging, 'FontEdging', VOID, Enum);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(FontFeature, 'FontFeature');
  initMetadataForClass(FontHinting, 'FontHinting', VOID, Enum);
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(FontMetrics, 'FontMetrics');
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(FontMgr, 'FontMgr', VOID, RefCnt);
  initMetadataForClass(FontMgrWithFallback, 'FontMgrWithFallback', VOID, FontMgr);
  initMetadataForClass(FontSlant, 'FontSlant', VOID, Enum);
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(FontStyle, 'FontStyle');
  initMetadataForCompanion(Companion_15);
  initMetadataForClass(FontVariation, 'FontVariation');
  initMetadataForCompanion(Companion_16);
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(GradientStyle, 'GradientStyle');
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(IRange, 'IRange');
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(Image, 'Image', VOID, RefCnt, [RefCnt, IHasImageInfo]);
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(ImageInfo, 'ImageInfo');
  initMetadataForCompanion(Companion_21);
  initMetadataForObject(_FinalizerHolder_7, '_FinalizerHolder');
  initMetadataForClass(ManagedString, 'ManagedString', VOID, Managed);
  initMetadataForCompanion(Companion_22);
  initMetadataForClass(MaskFilter, 'MaskFilter', VOID, RefCnt);
  initMetadataForCompanion(Companion_23);
  initMetadataForClass(Matrix33, 'Matrix33');
  initMetadataForCompanion(Companion_24);
  initMetadataForClass(Matrix44, 'Matrix44');
  initMetadataForClass(MipmapMode, 'MipmapMode', VOID, Enum);
  initMetadataForCompanion(Companion_25);
  initMetadataForObject(_FinalizerHolder_8, '_FinalizerHolder');
  initMetadataForClass(Paint, 'Paint', Paint_init_$Create$, Managed);
  initMetadataForClass(PaintMode, 'PaintMode', VOID, Enum);
  initMetadataForClass(PaintStrokeCap, 'PaintStrokeCap', VOID, Enum);
  initMetadataForClass(PaintStrokeJoin, 'PaintStrokeJoin', VOID, Enum);
  initMetadataForCompanion(Companion_26);
  initMetadataForObject(_FinalizerHolder_9, '_FinalizerHolder');
  initMetadataForClass(Path, 'Path', Path_init_$Create$, Managed);
  initMetadataForClass(PathDirection, 'PathDirection', VOID, Enum);
  initMetadataForClass(PathFillMode, 'PathFillMode', VOID, Enum);
  initMetadataForCompanion(Companion_27);
  initMetadataForObject(_FinalizerHolder_10, '_FinalizerHolder');
  initMetadataForClass(PathMeasure, 'PathMeasure', PathMeasure_init_$Create$, Managed);
  initMetadataForClass(PathOp, 'PathOp', VOID, Enum);
  initMetadataForClass(PathSegment, 'PathSegment', PathSegment);
  initMetadataForCompanion(Companion_28);
  initMetadataForClass(PathSegmentIterator, 'PathSegmentIterator', VOID, Managed);
  initMetadataForClass(PathVerb, 'PathVerb', VOID, Enum);
  initMetadataForCompanion(Companion_29);
  initMetadataForClass(Picture, 'Picture', VOID, RefCnt);
  initMetadataForCompanion(Companion_30);
  initMetadataForObject(_FinalizerHolder_11, '_FinalizerHolder');
  initMetadataForClass(PictureRecorder, 'PictureRecorder', PictureRecorder_init_$Create$, Managed);
  initMetadataForClass(PixelGeometry, 'PixelGeometry', VOID, Enum);
  initMetadataForCompanion(Companion_31);
  initMetadataForClass(Point, 'Point');
  initMetadataForClass(Point3, 'Point3');
  initMetadataForCompanion(Companion_32);
  initMetadataForClass(Rect, 'Rect');
  initMetadataForClass(RRect, 'RRect', VOID, Rect);
  initMetadataForCompanion(Companion_33);
  initMetadataForCompanion(Companion_34);
  initMetadataForCompanion(Companion_35);
  initMetadataForClass(Shader, 'Shader', VOID, RefCnt);
  initMetadataForObject(ShadowUtils, 'ShadowUtils');
  initMetadataForClass(ArrayDecoder, 'ArrayDecoder');
  initMetadataForCompanion(Companion_36);
  initMetadataForClass(Surface, 'Surface', VOID, RefCnt);
  initMetadataForClass(SurfaceColorFormat, 'SurfaceColorFormat', VOID, Enum);
  initMetadataForClass(SurfaceOrigin, 'SurfaceOrigin', VOID, Enum);
  initMetadataForClass(SurfaceProps, 'SurfaceProps', SurfaceProps);
  initMetadataForCompanion(Companion_37);
  initMetadataForClass(Typeface, 'Typeface', VOID, RefCnt);
  initMetadataForCompanion(Companion_38);
  initMetadataForObject(_FinalizerHolder_12, '_FinalizerHolder');
  initMetadataForClass(U16String, 'U16String', VOID, Managed);
  initMetadataForObject(CharProperties, 'CharProperties');
  initMetadataForObject(CharDirection, 'CharDirection');
  initMetadataForClass(Affinity, 'Affinity', VOID, Enum);
  initMetadataForClass(Alignment, 'Alignment', VOID, Enum);
  initMetadataForClass(BaselineMode, 'BaselineMode', VOID, Enum);
  initMetadataForClass(DecorationLineStyle, 'DecorationLineStyle', VOID, Enum);
  initMetadataForCompanion(Companion_39);
  initMetadataForClass(DecorationStyle, 'DecorationStyle');
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  initMetadataForCompanion(Companion_40);
  initMetadataForClass(FontCollection, 'FontCollection', FontCollection_init_$Create$, RefCnt);
  initMetadataForClass(FontRastrSettings, 'FontRastrSettings');
  initMetadataForClass(HeightMode, 'HeightMode', VOID, Enum);
  initMetadataForCompanion(Companion_41);
  initMetadataForClass(LineMetrics, 'LineMetrics');
  initMetadataForCompanion(Companion_42);
  initMetadataForObject(_FinalizerHolder_13, '_FinalizerHolder');
  initMetadataForClass(Paragraph, 'Paragraph', VOID, Managed);
  initMetadataForCompanion(Companion_43);
  initMetadataForObject(_FinalizerHolder_14, '_FinalizerHolder');
  initMetadataForClass(ParagraphBuilder, 'ParagraphBuilder', VOID, Managed);
  initMetadataForCompanion(Companion_44);
  initMetadataForObject(_FinalizerHolder_15, '_FinalizerHolder');
  initMetadataForClass(ParagraphStyle, 'ParagraphStyle', ParagraphStyle, Managed);
  initMetadataForClass(PlaceholderAlignment, 'PlaceholderAlignment', VOID, Enum);
  initMetadataForClass(PlaceholderStyle, 'PlaceholderStyle');
  initMetadataForClass(PositionWithAffinity, 'PositionWithAffinity');
  initMetadataForClass(RectHeightMode, 'RectHeightMode', VOID, Enum);
  initMetadataForClass(RectWidthMode, 'RectWidthMode', VOID, Enum);
  initMetadataForCompanion(Companion_45);
  initMetadataForClass(Shadow, 'Shadow');
  initMetadataForCompanion(Companion_46);
  initMetadataForClass(TextBox, 'TextBox');
  initMetadataForClass(TextIndent, 'TextIndent', TextIndent);
  initMetadataForCompanion(Companion_47);
  initMetadataForObject(_FinalizerHolder_16, '_FinalizerHolder');
  initMetadataForClass(TextStyle, 'TextStyle', TextStyle_init_$Create$, Managed);
  initMetadataForCompanion(Companion_48);
  initMetadataForClass(TypefaceFontProvider, 'TypefaceFontProvider', TypefaceFontProvider_init_$Create$, FontMgr);
  initMetadataForCompanion(Companion_49);
  initMetadataForClass(TypefaceFontProviderWithFallback, 'TypefaceFontProviderWithFallback', TypefaceFontProviderWithFallback_init_$Create$, TypefaceFontProvider);
  initMetadataForCompanion(Companion_50);
  initMetadataForClass(SVGNode, 'SVGNode', VOID, RefCnt);
  initMetadataForClass(SVGTransformableNode, 'SVGTransformableNode', VOID, SVGNode);
  initMetadataForClass(SVGContainer, 'SVGContainer', VOID, SVGTransformableNode);
  initMetadataForCompanion(Companion_51);
  initMetadataForClass(SVGDOM, 'SVGDOM', VOID, RefCnt);
  initMetadataForCompanion(Companion_52);
  initMetadataForClass(SVGLength, 'SVGLength');
  initMetadataForClass(SVGLengthUnit, 'SVGLengthUnit', VOID, Enum);
  initMetadataForCompanion(Companion_53);
  initMetadataForCompanion(Companion_54);
  initMetadataForClass(SVGPreserveAspectRatio, 'SVGPreserveAspectRatio', SVGPreserveAspectRatio_init_$Create$);
  initMetadataForCompanion(Companion_55);
  initMetadataForClass(SVGPreserveAspectRatioAlign, 'SVGPreserveAspectRatioAlign', VOID, Enum);
  initMetadataForClass(SVGPreserveAspectRatioScale, 'SVGPreserveAspectRatioScale', VOID, Enum);
  initMetadataForCompanion(Companion_56);
  initMetadataForClass(SVGSVG, 'SVGSVG', VOID, SVGContainer);
  initMetadataForCompanion(Companion_57);
  initMetadataForClass(GraphicsApi, 'GraphicsApi', VOID, Enum);
  initMetadataForClass(OS, 'OS', VOID, Enum);
  initMetadataForClass(Arch, 'Arch', VOID, Enum);
  initMetadataForClass(ClipboardManager, 'ClipboardManager', ClipboardManager);
  initMetadataForClass(URIManager, 'URIManager', URIManager);
  initMetadataForClass(RenderException, 'RenderException', RenderException, RuntimeException);
  initMetadataForClass(SystemTheme, 'SystemTheme', VOID, Enum);
  initMetadataForCompanion(Companion_58);
  initMetadataForClass(RenderNode, 'RenderNode', VOID, RefCnt);
  initMetadataForCompanion(Companion_59);
  initMetadataForClass(RenderNodeContext, 'RenderNodeContext', RenderNodeContext_init_$Create$, RefCnt);
  initMetadataForClass(InteropScope, 'InteropScope', InteropScope);
  initMetadataForClass(createWebGLContext$contextAttributes$1);
  initMetadataForClass(Pattern, 'Pattern');
  initMetadataForCompanion(Companion_60);
  initMetadataForClass(FinalizationThunk, 'FinalizationThunk');
  initMetadataForCompanion(Companion_61);
  initMetadataForCompanion(Companion_62);
  initMetadataForClass(NativePointerArray, 'NativePointerArray');
  initMetadataForObject(_FinalizerHolder_17, '_FinalizerHolder');
  initMetadataForObject(Stats, 'Stats');
  initMetadataForClass(CanvasRenderer, 'CanvasRenderer');
  initMetadataForClass(SkiaLayer$attachTo$1, VOID, VOID, CanvasRenderer);
  initMetadataForClass(SkiaLayer, 'SkiaLayer', SkiaLayer);
  //endregion
  function RTreeFactory_init_$Init$($this) {
    BBHFactory.call($this, org_jetbrains_skia_RTreeFactory__1nMake());
    RTreeFactory.call($this);
    Stats_instance.x3u();
    return $this;
  }
  function RTreeFactory_init_$Create$() {
    return RTreeFactory_init_$Init$(objectCreate(protoOf(RTreeFactory)));
  }
  function RTreeFactory() {
  }
  function _FinalizerHolder() {
    _FinalizerHolder_instance = this;
    this.c3v_1 = org_jetbrains_skia_BBHFactory__1nGetFinalizer();
  }
  var _FinalizerHolder_instance;
  function _FinalizerHolder_getInstance() {
    if (_FinalizerHolder_instance == null)
      new _FinalizerHolder();
    return _FinalizerHolder_instance;
  }
  function BBHFactory(ptr) {
    Managed.call(this, ptr, _FinalizerHolder_getInstance().c3v_1);
  }
  function Companion() {
    Companion_instance = this;
    Companion_instance_60.d3v();
  }
  protoOf(Companion).e3v = function (width, height, sampleCnt, stencilBits, fbId, fbFormat) {
    Stats_instance.x3u();
    var ptr = org_jetbrains_skia_BackendRenderTarget__1nMakeGL(width, height, sampleCnt, stencilBits, fbId, fbFormat);
    if (ptr === Companion_instance_61.f3v())
      throw new RenderException("Can't create OpenGL BackendRenderTarget");
    return new BackendRenderTarget(ptr);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _FinalizerHolder_0() {
    _FinalizerHolder_instance_0 = this;
    this.g3v_1 = org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_0;
  function _FinalizerHolder_getInstance_0() {
    if (_FinalizerHolder_instance_0 == null)
      new _FinalizerHolder_0();
    return _FinalizerHolder_instance_0;
  }
  function BackendRenderTarget(ptr) {
    Companion_getInstance();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_0().g3v_1);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    Companion_instance_60.d3v();
  }
  protoOf(Companion_0).h3v = function (image) {
    var bitmap = Bitmap_init_$Create$();
    bitmap.p3v(image.l3v());
    var tmp;
    if (image.q3v(bitmap)) {
      tmp = bitmap;
    } else {
      bitmap.a2e();
      throw RuntimeException_init_$Create$('Failed to readPixels from ' + image.toString());
    }
    return tmp;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Bitmap_init_$Init$($this) {
    Bitmap.call($this, org_jetbrains_skia_Bitmap__1nMake());
    Stats_instance.x3u();
    return $this;
  }
  function Bitmap_init_$Create$() {
    return Bitmap_init_$Init$(objectCreate(protoOf(Bitmap)));
  }
  function _FinalizerHolder_1() {
    _FinalizerHolder_instance_1 = this;
    this.r3v_1 = org_jetbrains_skia_Bitmap__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_1;
  function _FinalizerHolder_getInstance_1() {
    if (_FinalizerHolder_instance_1 == null)
      new _FinalizerHolder_1();
    return _FinalizerHolder_instance_1;
  }
  function _nGetImageInfo$ref() {
    var l = function (p0, p1, p2) {
      org_jetbrains_skia_Bitmap__1nGetImageInfo(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = '_nGetImageInfo';
    return l;
  }
  function Bitmap(ptr) {
    Companion_getInstance_0();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_1().r3v_1);
    this.o3v_1 = null;
  }
  protoOf(Bitmap).l3v = function () {
    var tmp;
    try {
      if (this.o3v_1 == null) {
        var tmp_0 = this;
        var tmp_1 = Companion_getInstance_20();
        var tmp_2 = this.a3v_1;
        tmp_0.o3v_1 = tmp_1.t3v(tmp_2, _nGetImageInfo$ref());
      }
      tmp = ensureNotNull(this.o3v_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Bitmap).u3v = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_Bitmap__1nIsImmutable(this.a3v_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Bitmap).v3v = function () {
    Stats_instance.x3u();
    org_jetbrains_skia_Bitmap__1nSetImmutable(this.a3v_1);
    return this;
  };
  protoOf(Bitmap).w3v = function (info, rowBytes) {
    var tmp;
    try {
      this.o3v_1 = null;
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_Bitmap__1nAllocPixelsRowBytes(this.a3v_1, info.y3v_1, info.z3v_1, info.x3v_1.a3w_1.m2_1, info.x3v_1.b3w_1.m2_1, getPtr(info.x3v_1.c3w_1), rowBytes);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(info.x3v_1.c3w_1);
    }
    return tmp;
  };
  protoOf(Bitmap).p3v = function (imageInfo) {
    return this.w3v(imageInfo, imageInfo.d3w());
  };
  var BlendMode_CLEAR_instance;
  var BlendMode_SRC_instance;
  var BlendMode_DST_instance;
  var BlendMode_SRC_OVER_instance;
  var BlendMode_DST_OVER_instance;
  var BlendMode_SRC_IN_instance;
  var BlendMode_DST_IN_instance;
  var BlendMode_SRC_OUT_instance;
  var BlendMode_DST_OUT_instance;
  var BlendMode_SRC_ATOP_instance;
  var BlendMode_DST_ATOP_instance;
  var BlendMode_XOR_instance;
  var BlendMode_PLUS_instance;
  var BlendMode_MODULATE_instance;
  var BlendMode_SCREEN_instance;
  var BlendMode_OVERLAY_instance;
  var BlendMode_DARKEN_instance;
  var BlendMode_LIGHTEN_instance;
  var BlendMode_COLOR_DODGE_instance;
  var BlendMode_COLOR_BURN_instance;
  var BlendMode_HARD_LIGHT_instance;
  var BlendMode_SOFT_LIGHT_instance;
  var BlendMode_DIFFERENCE_instance;
  var BlendMode_EXCLUSION_instance;
  var BlendMode_MULTIPLY_instance;
  var BlendMode_HUE_instance;
  var BlendMode_SATURATION_instance;
  var BlendMode_COLOR_instance;
  var BlendMode_LUMINOSITY_instance;
  function values() {
    return [BlendMode_CLEAR_getInstance(), BlendMode_SRC_getInstance(), BlendMode_DST_getInstance(), BlendMode_SRC_OVER_getInstance(), BlendMode_DST_OVER_getInstance(), BlendMode_SRC_IN_getInstance(), BlendMode_DST_IN_getInstance(), BlendMode_SRC_OUT_getInstance(), BlendMode_DST_OUT_getInstance(), BlendMode_SRC_ATOP_getInstance(), BlendMode_DST_ATOP_getInstance(), BlendMode_XOR_getInstance(), BlendMode_PLUS_getInstance(), BlendMode_MODULATE_getInstance(), BlendMode_SCREEN_getInstance(), BlendMode_OVERLAY_getInstance(), BlendMode_DARKEN_getInstance(), BlendMode_LIGHTEN_getInstance(), BlendMode_COLOR_DODGE_getInstance(), BlendMode_COLOR_BURN_getInstance(), BlendMode_HARD_LIGHT_getInstance(), BlendMode_SOFT_LIGHT_getInstance(), BlendMode_DIFFERENCE_getInstance(), BlendMode_EXCLUSION_getInstance(), BlendMode_MULTIPLY_getInstance(), BlendMode_HUE_getInstance(), BlendMode_SATURATION_getInstance(), BlendMode_COLOR_getInstance(), BlendMode_LUMINOSITY_getInstance()];
  }
  var BlendMode_entriesInitialized;
  function BlendMode_initEntries() {
    if (BlendMode_entriesInitialized)
      return Unit_instance;
    BlendMode_entriesInitialized = true;
    BlendMode_CLEAR_instance = new BlendMode('CLEAR', 0);
    BlendMode_SRC_instance = new BlendMode('SRC', 1);
    BlendMode_DST_instance = new BlendMode('DST', 2);
    BlendMode_SRC_OVER_instance = new BlendMode('SRC_OVER', 3);
    BlendMode_DST_OVER_instance = new BlendMode('DST_OVER', 4);
    BlendMode_SRC_IN_instance = new BlendMode('SRC_IN', 5);
    BlendMode_DST_IN_instance = new BlendMode('DST_IN', 6);
    BlendMode_SRC_OUT_instance = new BlendMode('SRC_OUT', 7);
    BlendMode_DST_OUT_instance = new BlendMode('DST_OUT', 8);
    BlendMode_SRC_ATOP_instance = new BlendMode('SRC_ATOP', 9);
    BlendMode_DST_ATOP_instance = new BlendMode('DST_ATOP', 10);
    BlendMode_XOR_instance = new BlendMode('XOR', 11);
    BlendMode_PLUS_instance = new BlendMode('PLUS', 12);
    BlendMode_MODULATE_instance = new BlendMode('MODULATE', 13);
    BlendMode_SCREEN_instance = new BlendMode('SCREEN', 14);
    BlendMode_OVERLAY_instance = new BlendMode('OVERLAY', 15);
    BlendMode_DARKEN_instance = new BlendMode('DARKEN', 16);
    BlendMode_LIGHTEN_instance = new BlendMode('LIGHTEN', 17);
    BlendMode_COLOR_DODGE_instance = new BlendMode('COLOR_DODGE', 18);
    BlendMode_COLOR_BURN_instance = new BlendMode('COLOR_BURN', 19);
    BlendMode_HARD_LIGHT_instance = new BlendMode('HARD_LIGHT', 20);
    BlendMode_SOFT_LIGHT_instance = new BlendMode('SOFT_LIGHT', 21);
    BlendMode_DIFFERENCE_instance = new BlendMode('DIFFERENCE', 22);
    BlendMode_EXCLUSION_instance = new BlendMode('EXCLUSION', 23);
    BlendMode_MULTIPLY_instance = new BlendMode('MULTIPLY', 24);
    BlendMode_HUE_instance = new BlendMode('HUE', 25);
    BlendMode_SATURATION_instance = new BlendMode('SATURATION', 26);
    BlendMode_COLOR_instance = new BlendMode('COLOR', 27);
    BlendMode_LUMINOSITY_instance = new BlendMode('LUMINOSITY', 28);
  }
  function BlendMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BlendMode_CLEAR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_CLEAR_instance;
  }
  function BlendMode_SRC_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_instance;
  }
  function BlendMode_DST_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_instance;
  }
  function BlendMode_SRC_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OVER_instance;
  }
  function BlendMode_DST_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OVER_instance;
  }
  function BlendMode_SRC_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_IN_instance;
  }
  function BlendMode_DST_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_IN_instance;
  }
  function BlendMode_SRC_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OUT_instance;
  }
  function BlendMode_DST_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OUT_instance;
  }
  function BlendMode_SRC_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_ATOP_instance;
  }
  function BlendMode_DST_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_ATOP_instance;
  }
  function BlendMode_XOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_XOR_instance;
  }
  function BlendMode_PLUS_getInstance() {
    BlendMode_initEntries();
    return BlendMode_PLUS_instance;
  }
  function BlendMode_MODULATE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MODULATE_instance;
  }
  function BlendMode_SCREEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SCREEN_instance;
  }
  function BlendMode_OVERLAY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_OVERLAY_instance;
  }
  function BlendMode_DARKEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DARKEN_instance;
  }
  function BlendMode_LIGHTEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LIGHTEN_instance;
  }
  function BlendMode_COLOR_DODGE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_DODGE_instance;
  }
  function BlendMode_COLOR_BURN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_BURN_instance;
  }
  function BlendMode_HARD_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HARD_LIGHT_instance;
  }
  function BlendMode_SOFT_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SOFT_LIGHT_instance;
  }
  function BlendMode_DIFFERENCE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DIFFERENCE_instance;
  }
  function BlendMode_EXCLUSION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_EXCLUSION_instance;
  }
  function BlendMode_MULTIPLY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MULTIPLY_instance;
  }
  function BlendMode_HUE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HUE_instance;
  }
  function BlendMode_SATURATION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SATURATION_instance;
  }
  function BlendMode_COLOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_instance;
  }
  function BlendMode_LUMINOSITY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LUMINOSITY_instance;
  }
  function BreakIterator$Companion$makeCharacterInstance$lambda($locale) {
    return function ($this$withErrorGuard, it) {
      return org_jetbrains_skia_BreakIterator__1nMake(0, $this$withErrorGuard.j3w($locale), it);
    };
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.k3w_1 = -1;
    this.l3w_1 = 0;
    this.m3w_1 = 100;
    this.n3w_1 = 100;
    this.o3w_1 = 200;
    this.p3w_1 = 200;
    this.q3w_1 = 300;
    this.r3w_1 = 300;
    this.s3w_1 = 400;
    this.t3w_1 = 400;
    this.u3w_1 = 500;
    Companion_instance_60.d3v();
  }
  protoOf(Companion_1).v3w = function (locale) {
    Stats_instance.x3u();
    return new BreakIterator(withErrorGuard('Failed to create character iterator', BreakIterator$Companion$makeCharacterInstance$lambda(locale)));
  };
  protoOf(Companion_1).w3w = function (locale, $super) {
    locale = locale === VOID ? null : locale;
    return $super === VOID ? this.v3w(locale) : $super.v3w.call(this, locale);
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function _FinalizerHolder_2() {
    _FinalizerHolder_instance_2 = this;
    this.x3w_1 = org_jetbrains_skia_BreakIterator__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_2;
  function _FinalizerHolder_getInstance_2() {
    if (_FinalizerHolder_instance_2 == null)
      new _FinalizerHolder_2();
    return _FinalizerHolder_instance_2;
  }
  function BreakIterator$setText$lambda(this$0, $text) {
    return function ($this$withErrorGuard, it) {
      var tmp = this$0.a3v_1;
      var tmp_0;
      if ($text == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp_1 = 0;
        var tmp_2 = $text.length;
        var tmp_3 = new Int16Array(tmp_2);
        while (tmp_1 < tmp_2) {
          var tmp_4 = tmp_1;
          // Inline function 'kotlin.code' call
          var this_0 = charCodeAt($text, tmp_4);
          var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
          tmp_3[tmp_4] = toShort(tmp$ret$0);
          tmp_1 = tmp_1 + 1 | 0;
        }
        tmp_0 = tmp_3;
      }
      var tmp_5 = $this$withErrorGuard.y3w(tmp_0);
      var tmp1_safe_receiver = $text;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.length;
      return org_jetbrains_skia_BreakIterator__1nSetText(tmp, tmp_5, tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs, it);
    };
  }
  function BreakIterator(ptr) {
    Companion_getInstance_1();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_2().x3w_1);
    this.b3x_1 = null;
  }
  protoOf(BreakIterator).a2e = function () {
    protoOf(Managed).a2e.call(this);
    var tmp0_safe_receiver = this.b3x_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a2e();
    }
  };
  protoOf(BreakIterator).c3x = function (offset) {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_BreakIterator__1nPreceding(this.a3v_1, offset);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(BreakIterator).d3x = function (offset) {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_BreakIterator__1nFollowing(this.a3v_1, offset);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(BreakIterator).e3x = function (text) {
    try {
      Stats_instance.x3u();
      var tmp0_safe_receiver = this.b3x_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.a2e();
      }
      var tmp = this;
      tmp.b3x_1 = new U16String(withErrorGuard('Failed to setText', BreakIterator$setText$lambda(this, text)));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.b3x_1);
    }
  };
  function withErrorGuard(message, block) {
    var errorCode = new Int32Array(1);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var handle = $this$interopScope.f3x(errorCode);
        var res = block($this$interopScope, handle);
        $this$interopScope.g3x(handle, errorCode);
        if (errorCode[0] > 0) {
          throw RuntimeException_init_$Create$(message + '; operation failed with status ' + toString(errorCode));
        }
        if (res === Companion_instance_61.f3v()) {
          throw IllegalArgumentException_init_$Create$(message);
        }
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    return res;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Canvas_init_$Init$(bitmap, surfaceProps, $this) {
    surfaceProps = surfaceProps === VOID ? new SurfaceProps() : surfaceProps;
    Canvas.call($this, org_jetbrains_skia_Canvas__1nMakeFromBitmap(bitmap.a3v_1, surfaceProps.j3x(), surfaceProps.i3x_1.m2_1), true, bitmap);
    Stats_instance.x3u();
    reachabilityBarrier(bitmap);
    return $this;
  }
  function Canvas_init_$Create$(bitmap, surfaceProps) {
    return Canvas_init_$Init$(bitmap, surfaceProps, objectCreate(protoOf(Canvas)));
  }
  function _FinalizerHolder_3() {
    _FinalizerHolder_instance_3 = this;
    this.k3x_1 = org_jetbrains_skia_Canvas__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_3;
  function _FinalizerHolder_getInstance_3() {
    if (_FinalizerHolder_instance_3 == null)
      new _FinalizerHolder_3();
    return _FinalizerHolder_instance_3;
  }
  function Canvas(ptr, managed, _owner) {
    Companion_getInstance_2();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_3().k3x_1, managed);
    this.n3x_1 = _owner;
  }
  protoOf(Canvas).o3x = function (x0, y0, x1, y1, paint) {
    Stats_instance.x3u();
    try {
      org_jetbrains_skia_Canvas__1nDrawLine(this.a3v_1, x0, y0, x1, y1, getPtr(paint));
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).p3x = function (r, paint) {
    Stats_instance.x3u();
    try {
      org_jetbrains_skia_Canvas__1nDrawRect(this.a3v_1, r.q3x_1, r.r3x_1, r.s3x_1, r.t3x_1, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).u3x = function (x, y, radius, paint) {
    Stats_instance.x3u();
    try {
      org_jetbrains_skia_Canvas__1nDrawOval(this.a3v_1, x - radius, y - radius, x + radius, y + radius, getPtr(paint));
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).v3x = function (r, paint) {
    Stats_instance.x3u();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          org_jetbrains_skia_Canvas__1nDrawRRect(this.a3v_1, r.q3x_1, r.r3x_1, r.s3x_1, r.t3x_1, $this$interopScope.b3y(r.a3y_1), r.a3y_1.length, getPtr(paint));
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
          }
        }
      }
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).c3y = function (path, paint) {
    Stats_instance.x3u();
    try {
      org_jetbrains_skia_Canvas__1nDrawPath(this.a3v_1, getPtr(path), getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(path);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).d3y = function (image, src, dst, samplingMode, paint, strict) {
    Stats_instance.x3u();
    try {
      org_jetbrains_skia_Canvas__1nDrawImageRect(this.a3v_1, getPtr(image), src.q3x_1, src.r3x_1, src.s3x_1, src.t3x_1, dst.q3x_1, dst.r3x_1, dst.s3x_1, dst.t3x_1, samplingMode.e3y(), samplingMode.f3y(), getPtr(paint), strict);
    }finally {
      reachabilityBarrier(image);
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).g3y = function (picture, matrix, paint) {
    Stats_instance.x3u();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          var tmp = this.a3v_1;
          var tmp_0 = getPtr(picture);
          org_jetbrains_skia_Canvas__1nDrawPicture(tmp, tmp_0, $this$interopScope.b3y(matrix == null ? null : matrix.h3y_1), getPtr(paint));
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(picture);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).z2m = function (color) {
    Stats_instance.x3u();
    try {
      org_jetbrains_skia_Canvas__1nClear(this.a3v_1, color);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).i3y = function () {
    Stats_instance.x3u();
    org_jetbrains_skia_Canvas__1nResetMatrix(this.a3v_1);
    return this;
  };
  protoOf(Canvas).j3y = function (r, mode, antiAlias) {
    Stats_instance.x3u();
    org_jetbrains_skia_Canvas__1nClipRect(this.a3v_1, r.q3x_1, r.r3x_1, r.s3x_1, r.t3x_1, mode.m2_1, antiAlias);
    return this;
  };
  protoOf(Canvas).k3y = function (r, mode, antiAlias) {
    Stats_instance.x3u();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        org_jetbrains_skia_Canvas__1nClipRRect(this.a3v_1, r.q3x_1, r.r3x_1, r.s3x_1, r.t3x_1, $this$interopScope.b3y(r.a3y_1), r.a3y_1.length, mode.m2_1, antiAlias);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).l3y = function (p, mode, antiAlias) {
    Stats_instance.x3u();
    try {
      org_jetbrains_skia_Canvas__1nClipPath(this.a3v_1, getPtr(p), mode.m2_1, antiAlias);
    }finally {
      reachabilityBarrier(p);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).b3u = function (dx, dy) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        Stats_instance.x3u();
        org_jetbrains_skia_Canvas__1nTranslate(this.a3v_1, dx, dy);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).m3y = function (sx, sy) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        Stats_instance.x3u();
        org_jetbrains_skia_Canvas__1nScale(this.a3v_1, sx, sy);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).n3y = function (matrix) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        Stats_instance.x3u();
        org_jetbrains_skia_Canvas__1nConcat44(this.a3v_1, $this$interopScope.b3y(matrix.o3y_1));
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).p3y = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_Canvas__1nSave(this.a3v_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Canvas).q3y = function (left, top, right, bottom, paint) {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_Canvas__1nSaveLayerRect(this.a3v_1, left, top, right, bottom, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(Canvas).r3y = function () {
    Stats_instance.x3u();
    org_jetbrains_skia_Canvas__1nRestore(this.a3v_1);
    return this;
  };
  var ClipMode_DIFFERENCE_instance;
  var ClipMode_INTERSECT_instance;
  var ClipMode_entriesInitialized;
  function ClipMode_initEntries() {
    if (ClipMode_entriesInitialized)
      return Unit_instance;
    ClipMode_entriesInitialized = true;
    ClipMode_DIFFERENCE_instance = new ClipMode('DIFFERENCE', 0);
    ClipMode_INTERSECT_instance = new ClipMode('INTERSECT', 1);
  }
  function ClipMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClipMode_DIFFERENCE_getInstance() {
    ClipMode_initEntries();
    return ClipMode_DIFFERENCE_instance;
  }
  function ClipMode_INTERSECT_getInstance() {
    ClipMode_initEntries();
    return ClipMode_INTERSECT_instance;
  }
  function Color4f_init_$Init$(rgba, $this) {
    Color4f.call($this, rgba[0], rgba[1], rgba[2], rgba[3]);
    return $this;
  }
  function Color4f_init_$Create$(rgba) {
    return Color4f_init_$Init$(rgba, objectCreate(protoOf(Color4f)));
  }
  function Companion_3() {
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function Color4f(r, g, b, a) {
    a = a === VOID ? 1.0 : a;
    this.s3y_1 = r;
    this.t3y_1 = g;
    this.u3y_1 = b;
    this.v3y_1 = a;
  }
  protoOf(Color4f).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Color4f))
      return false;
    if (!(compareTo(this.s3y_1, other.s3y_1) === 0))
      return false;
    if (!(compareTo(this.t3y_1, other.t3y_1) === 0))
      return false;
    if (!(compareTo(this.u3y_1, other.u3y_1) === 0))
      return false;
    return compareTo(this.v3y_1, other.v3y_1) === 0;
  };
  protoOf(Color4f).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.s3y_1) | 0;
    result = imul(result, PRIME) + toBits(this.t3y_1) | 0;
    result = imul(result, PRIME) + toBits(this.u3y_1) | 0;
    result = imul(result, PRIME) + toBits(this.v3y_1) | 0;
    return result;
  };
  protoOf(Color4f).toString = function () {
    return 'Color4f(_r=' + this.s3y_1 + ', _g=' + this.t3y_1 + ', _b=' + this.u3y_1 + ', _a=' + this.v3y_1 + ')';
  };
  protoOf(Color4f).w3y = function (_a) {
    return this.v3y_1 === _a ? this : new Color4f(this.s3y_1, this.t3y_1, this.u3y_1, _a);
  };
  var ColorAlphaType_UNKNOWN_instance;
  var ColorAlphaType_OPAQUE_instance;
  var ColorAlphaType_PREMUL_instance;
  var ColorAlphaType_UNPREMUL_instance;
  function values_0() {
    return [ColorAlphaType_UNKNOWN_getInstance(), ColorAlphaType_OPAQUE_getInstance(), ColorAlphaType_PREMUL_getInstance(), ColorAlphaType_UNPREMUL_getInstance()];
  }
  var ColorAlphaType_entriesInitialized;
  function ColorAlphaType_initEntries() {
    if (ColorAlphaType_entriesInitialized)
      return Unit_instance;
    ColorAlphaType_entriesInitialized = true;
    ColorAlphaType_UNKNOWN_instance = new ColorAlphaType('UNKNOWN', 0);
    ColorAlphaType_OPAQUE_instance = new ColorAlphaType('OPAQUE', 1);
    ColorAlphaType_PREMUL_instance = new ColorAlphaType('PREMUL', 2);
    ColorAlphaType_UNPREMUL_instance = new ColorAlphaType('UNPREMUL', 3);
  }
  function ColorAlphaType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ColorAlphaType_UNKNOWN_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNKNOWN_instance;
  }
  function ColorAlphaType_OPAQUE_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_OPAQUE_instance;
  }
  function ColorAlphaType_PREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_PREMUL_instance;
  }
  function ColorAlphaType_UNPREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNPREMUL_instance;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    Companion_instance_60.d3v();
    this.x3y_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetSRGBToLinearGamma(), false);
    this.y3y_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetLuma(), false);
  }
  protoOf(Companion_4).z3y = function (color, mode) {
    Stats_instance.x3u();
    return ColorFilter_init_$Create$(org_jetbrains_skia_ColorFilter__1nMakeBlend(color, mode.m2_1));
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function ColorFilter_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$(ptr) {
    return ColorFilter_init_$Init$(ptr, objectCreate(protoOf(ColorFilter)));
  }
  function ColorFilter_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$_0(ptr, allowClose) {
    return ColorFilter_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(ColorFilter)));
  }
  function ColorFilter() {
    Companion_getInstance_4();
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.d3z_1 = new ColorInfo(ColorType_UNKNOWN_getInstance(), ColorAlphaType_UNKNOWN_getInstance(), null);
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function ColorInfo(colorType, alphaType, colorSpace) {
    Companion_getInstance_5();
    this.a3w_1 = colorType;
    this.b3w_1 = alphaType;
    this.c3w_1 = colorSpace;
  }
  protoOf(ColorInfo).g3w = function () {
    return this.b3w_1.equals(ColorAlphaType_OPAQUE_getInstance()) || this.a3w_1.g3z();
  };
  protoOf(ColorInfo).h3z = function () {
    return this.a3w_1.h3z();
  };
  protoOf(ColorInfo).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ColorInfo))
      return false;
    if (!this.a3w_1.equals(other.a3w_1))
      return false;
    if (!this.b3w_1.equals(other.b3w_1))
      return false;
    return equals(this.c3w_1, other.c3w_1);
  };
  protoOf(ColorInfo).hashCode = function () {
    var prime = 59;
    var result = 1;
    result = imul(result, prime) + this.a3w_1.hashCode() | 0;
    result = imul(result, prime) + this.b3w_1.hashCode() | 0;
    var tmp = imul(result, prime);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.c3w_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(ColorInfo).toString = function () {
    return 'ColorInfo(_colorType=' + this.a3w_1.toString() + ', _alphaType=' + this.b3w_1.toString() + ', _colorSpace=' + toString_0(this.c3w_1) + ')';
  };
  function Companion_6() {
    Companion_instance_6 = this;
    Companion_instance_60.d3v();
    this.i3z_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGB(), false);
    this.j3z_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear(), false);
    this.k3z_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeDisplayP3(), false);
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function ColorSpace_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_4().l3z_1, true);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$(ptr) {
    return ColorSpace_init_$Init$(ptr, objectCreate(protoOf(ColorSpace)));
  }
  function ColorSpace_init_$Init$_0(ptr, managed, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_4().l3z_1, managed);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$_0(ptr, managed) {
    return ColorSpace_init_$Init$_0(ptr, managed, objectCreate(protoOf(ColorSpace)));
  }
  function _FinalizerHolder_4() {
    _FinalizerHolder_instance_4 = this;
    this.l3z_1 = org_jetbrains_skia_ColorSpace__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_4;
  function _FinalizerHolder_getInstance_4() {
    if (_FinalizerHolder_instance_4 == null)
      new _FinalizerHolder_4();
    return _FinalizerHolder_instance_4;
  }
  function ColorSpace() {
    Companion_getInstance_6();
  }
  var ColorType_UNKNOWN_instance;
  var ColorType_ALPHA_8_instance;
  var ColorType_RGB_565_instance;
  var ColorType_ARGB_4444_instance;
  var ColorType_RGBA_8888_instance;
  var ColorType_RGB_888X_instance;
  var ColorType_BGRA_8888_instance;
  var ColorType_RGBA_1010102_instance;
  var ColorType_BGRA_1010102_instance;
  var ColorType_RGB_101010X_instance;
  var ColorType_BGR_101010X_instance;
  var ColorType_BGR_101010X_XR_instance;
  var ColorType_BGRA_10101010_XR_instance;
  var ColorType_RGBA_10x6_instance;
  var ColorType_GRAY_8_instance;
  var ColorType_RGBA_F16NORM_instance;
  var ColorType_RGBA_F16_instance;
  var ColorType_RGBA_F32_instance;
  var ColorType_R8G8_UNORM_instance;
  var ColorType_A16_FLOAT_instance;
  var ColorType_R16G16_FLOAT_instance;
  var ColorType_A16_UNORM_instance;
  var ColorType_R16G16_UNORM_instance;
  var ColorType_R16G16B16A16_UNORM_instance;
  function Companion_7() {
    Companion_instance_7 = this;
    this.m3z_1 = ColorType_BGRA_8888_getInstance();
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    ColorType_initEntries();
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function values_1() {
    return [ColorType_UNKNOWN_getInstance(), ColorType_ALPHA_8_getInstance(), ColorType_RGB_565_getInstance(), ColorType_ARGB_4444_getInstance(), ColorType_RGBA_8888_getInstance(), ColorType_RGB_888X_getInstance(), ColorType_BGRA_8888_getInstance(), ColorType_RGBA_1010102_getInstance(), ColorType_BGRA_1010102_getInstance(), ColorType_RGB_101010X_getInstance(), ColorType_BGR_101010X_getInstance(), ColorType_BGR_101010X_XR_getInstance(), ColorType_BGRA_10101010_XR_getInstance(), ColorType_RGBA_10x6_getInstance(), ColorType_GRAY_8_getInstance(), ColorType_RGBA_F16NORM_getInstance(), ColorType_RGBA_F16_getInstance(), ColorType_RGBA_F32_getInstance(), ColorType_R8G8_UNORM_getInstance(), ColorType_A16_FLOAT_getInstance(), ColorType_R16G16_FLOAT_getInstance(), ColorType_A16_UNORM_getInstance(), ColorType_R16G16_UNORM_getInstance(), ColorType_R16G16B16A16_UNORM_getInstance()];
  }
  var ColorType_entriesInitialized;
  function ColorType_initEntries() {
    if (ColorType_entriesInitialized)
      return Unit_instance;
    ColorType_entriesInitialized = true;
    ColorType_UNKNOWN_instance = new ColorType('UNKNOWN', 0);
    ColorType_ALPHA_8_instance = new ColorType('ALPHA_8', 1);
    ColorType_RGB_565_instance = new ColorType('RGB_565', 2);
    ColorType_ARGB_4444_instance = new ColorType('ARGB_4444', 3);
    ColorType_RGBA_8888_instance = new ColorType('RGBA_8888', 4);
    ColorType_RGB_888X_instance = new ColorType('RGB_888X', 5);
    ColorType_BGRA_8888_instance = new ColorType('BGRA_8888', 6);
    ColorType_RGBA_1010102_instance = new ColorType('RGBA_1010102', 7);
    ColorType_BGRA_1010102_instance = new ColorType('BGRA_1010102', 8);
    ColorType_RGB_101010X_instance = new ColorType('RGB_101010X', 9);
    ColorType_BGR_101010X_instance = new ColorType('BGR_101010X', 10);
    ColorType_BGR_101010X_XR_instance = new ColorType('BGR_101010X_XR', 11);
    ColorType_BGRA_10101010_XR_instance = new ColorType('BGRA_10101010_XR', 12);
    ColorType_RGBA_10x6_instance = new ColorType('RGBA_10x6', 13);
    ColorType_GRAY_8_instance = new ColorType('GRAY_8', 14);
    ColorType_RGBA_F16NORM_instance = new ColorType('RGBA_F16NORM', 15);
    ColorType_RGBA_F16_instance = new ColorType('RGBA_F16', 16);
    ColorType_RGBA_F32_instance = new ColorType('RGBA_F32', 17);
    ColorType_R8G8_UNORM_instance = new ColorType('R8G8_UNORM', 18);
    ColorType_A16_FLOAT_instance = new ColorType('A16_FLOAT', 19);
    ColorType_R16G16_FLOAT_instance = new ColorType('R16G16_FLOAT', 20);
    ColorType_A16_UNORM_instance = new ColorType('A16_UNORM', 21);
    ColorType_R16G16_UNORM_instance = new ColorType('R16G16_UNORM', 22);
    ColorType_R16G16B16A16_UNORM_instance = new ColorType('R16G16B16A16_UNORM', 23);
    Companion_getInstance_7();
  }
  function ColorType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorType).h3z = function () {
    var tmp;
    switch (this.m2_1) {
      case 0:
        tmp = 0;
        break;
      case 1:
        tmp = 1;
        break;
      case 2:
        tmp = 2;
        break;
      case 3:
        tmp = 2;
        break;
      case 4:
        tmp = 4;
        break;
      case 6:
        tmp = 4;
        break;
      case 5:
        tmp = 4;
        break;
      case 7:
        tmp = 4;
        break;
      case 9:
        tmp = 4;
        break;
      case 8:
        tmp = 4;
        break;
      case 10:
        tmp = 4;
        break;
      case 11:
        tmp = 4;
        break;
      case 12:
        tmp = 4;
        break;
      case 13:
        tmp = 8;
        break;
      case 14:
        tmp = 1;
        break;
      case 15:
        tmp = 8;
        break;
      case 16:
        tmp = 8;
        break;
      case 17:
        tmp = 16;
        break;
      case 18:
        tmp = 2;
        break;
      case 21:
        tmp = 2;
        break;
      case 22:
        tmp = 4;
        break;
      case 19:
        tmp = 2;
        break;
      case 20:
        tmp = 4;
        break;
      case 23:
        tmp = 8;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorType).g3z = function () {
    return org_jetbrains_skia_ColorType__1nIsAlwaysOpaque(this.m2_1);
  };
  function ColorType_UNKNOWN_getInstance() {
    ColorType_initEntries();
    return ColorType_UNKNOWN_instance;
  }
  function ColorType_ALPHA_8_getInstance() {
    ColorType_initEntries();
    return ColorType_ALPHA_8_instance;
  }
  function ColorType_RGB_565_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_565_instance;
  }
  function ColorType_ARGB_4444_getInstance() {
    ColorType_initEntries();
    return ColorType_ARGB_4444_instance;
  }
  function ColorType_RGBA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_8888_instance;
  }
  function ColorType_RGB_888X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_888X_instance;
  }
  function ColorType_BGRA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_8888_instance;
  }
  function ColorType_RGBA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_1010102_instance;
  }
  function ColorType_BGRA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_1010102_instance;
  }
  function ColorType_RGB_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_101010X_instance;
  }
  function ColorType_BGR_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_BGR_101010X_instance;
  }
  function ColorType_BGR_101010X_XR_getInstance() {
    ColorType_initEntries();
    return ColorType_BGR_101010X_XR_instance;
  }
  function ColorType_BGRA_10101010_XR_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_10101010_XR_instance;
  }
  function ColorType_RGBA_10x6_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_10x6_instance;
  }
  function ColorType_GRAY_8_getInstance() {
    ColorType_initEntries();
    return ColorType_GRAY_8_instance;
  }
  function ColorType_RGBA_F16NORM_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16NORM_instance;
  }
  function ColorType_RGBA_F16_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16_instance;
  }
  function ColorType_RGBA_F32_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F32_instance;
  }
  function ColorType_R8G8_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R8G8_UNORM_instance;
  }
  function ColorType_A16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_FLOAT_instance;
  }
  function ColorType_R16G16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_FLOAT_instance;
  }
  function ColorType_A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_UNORM_instance;
  }
  function ColorType_R16G16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_UNORM_instance;
  }
  function ColorType_R16G16B16A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16B16A16_UNORM_instance;
  }
  function CubicResampler(b, c) {
    this.n3z_1 = b;
    this.o3z_1 = c;
  }
  protoOf(CubicResampler).e3y = function () {
    return toBits(this.n3z_1) | -2147483648;
  };
  protoOf(CubicResampler).f3y = function () {
    return toBits(this.o3z_1);
  };
  protoOf(CubicResampler).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof CubicResampler))
      return false;
    if (!(compareTo(this.n3z_1, other.n3z_1) === 0))
      return false;
    return compareTo(this.o3z_1, other.o3z_1) === 0;
  };
  protoOf(CubicResampler).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.n3z_1) | 0;
    result = imul(result, PRIME) + toBits(this.o3z_1) | 0;
    return result;
  };
  protoOf(CubicResampler).toString = function () {
    return 'CubicResampler(_B=' + this.n3z_1 + ', _C=' + this.o3z_1 + ')';
  };
  function Companion_8() {
    Companion_instance_8 = this;
    Companion_instance_60.d3v();
  }
  protoOf(Companion_8).p3z = function (bytes, offset, length) {
    Stats_instance.x3u();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        tmp$ret$1 = org_jetbrains_skia_Data__1nMakeFromBytes($this$interopScope.q3z(bytes), offset, length);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    return new Data(tmp$ret$1);
  };
  protoOf(Companion_8).r3z = function (bytes, offset, length, $super) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? bytes.length : length;
    return $super === VOID ? this.p3z(bytes, offset, length) : $super.p3z.call(this, bytes, offset, length);
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function _FinalizerHolder_5() {
    _FinalizerHolder_instance_5 = this;
    this.s3z_1 = org_jetbrains_skia_Data__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_5;
  function _FinalizerHolder_getInstance_5() {
    if (_FinalizerHolder_instance_5 == null)
      new _FinalizerHolder_5();
    return _FinalizerHolder_instance_5;
  }
  function Data(ptr) {
    Companion_getInstance_8();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_5().s3z_1);
    this.v3z_1 = null;
  }
  protoOf(Data).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof Data ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherData = tmp;
    return this.b3v(otherData);
  };
  protoOf(Data).b3v = function (other) {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_Data__1nEquals(this.a3v_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  function Companion_9() {
    Companion_instance_9 = this;
    Companion_instance_60.d3v();
  }
  protoOf(Companion_9).w3z = function () {
    Stats_instance.x3u();
    loadOpenGLLibrary();
    var ptr = org_jetbrains_skia_DirectContext__1nMakeGL();
    if (ptr === Companion_instance_61.f3v())
      throw new RenderException("Can't create OpenGL DirectContext");
    return new DirectContext(ptr);
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function DirectContext(ptr) {
    Companion_getInstance_9();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(DirectContext).z3z = function () {
    Stats_instance.x3u();
    org_jetbrains_skia_DirectContext__1nFlushDefault(this.a3v_1);
    return this;
  };
  protoOf(DirectContext).a40 = function (surface, syncCpu) {
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_DirectContext__1nFlushAndSubmit(this.a3v_1, surface.a3v_1, syncCpu);
    }finally {
      reachabilityBarrier(this);
    }
  };
  protoOf(DirectContext).b40 = function (surface, syncCpu, $super) {
    syncCpu = syncCpu === VOID ? false : syncCpu;
    var tmp;
    if ($super === VOID) {
      this.a40(surface, syncCpu);
      tmp = Unit_instance;
    } else {
      tmp = $super.a40.call(this, surface, syncCpu);
    }
    return tmp;
  };
  var FilterBlurMode_NORMAL_instance;
  var FilterBlurMode_SOLID_instance;
  var FilterBlurMode_OUTER_instance;
  var FilterBlurMode_INNER_instance;
  var FilterBlurMode_entriesInitialized;
  function FilterBlurMode_initEntries() {
    if (FilterBlurMode_entriesInitialized)
      return Unit_instance;
    FilterBlurMode_entriesInitialized = true;
    FilterBlurMode_NORMAL_instance = new FilterBlurMode('NORMAL', 0);
    FilterBlurMode_SOLID_instance = new FilterBlurMode('SOLID', 1);
    FilterBlurMode_OUTER_instance = new FilterBlurMode('OUTER', 2);
    FilterBlurMode_INNER_instance = new FilterBlurMode('INNER', 3);
  }
  function FilterBlurMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FilterBlurMode_NORMAL_getInstance() {
    FilterBlurMode_initEntries();
    return FilterBlurMode_NORMAL_instance;
  }
  function FilterMipmap(filterMode, mipmapMode) {
    mipmapMode = mipmapMode === VOID ? MipmapMode_NONE_getInstance() : mipmapMode;
    this.c40_1 = filterMode;
    this.d40_1 = mipmapMode;
  }
  protoOf(FilterMipmap).e3y = function () {
    return this.c40_1.m2_1;
  };
  protoOf(FilterMipmap).f3y = function () {
    return this.d40_1.m2_1;
  };
  protoOf(FilterMipmap).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FilterMipmap))
      return false;
    if (!this.c40_1.equals(other.c40_1))
      return false;
    return this.d40_1.equals(other.d40_1);
  };
  protoOf(FilterMipmap).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.c40_1.hashCode() | 0;
    result = imul(result, PRIME) + this.d40_1.hashCode() | 0;
    return result;
  };
  protoOf(FilterMipmap).toString = function () {
    return 'FilterMipmap(_filterMode=' + this.c40_1.toString() + ', _mipmapMode=' + this.d40_1.toString() + ')';
  };
  var FilterMode_NEAREST_instance;
  var FilterMode_LINEAR_instance;
  var FilterMode_entriesInitialized;
  function FilterMode_initEntries() {
    if (FilterMode_entriesInitialized)
      return Unit_instance;
    FilterMode_entriesInitialized = true;
    FilterMode_NEAREST_instance = new FilterMode('NEAREST', 0);
    FilterMode_LINEAR_instance = new FilterMode('LINEAR', 1);
  }
  function FilterMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FilterMode_NEAREST_getInstance() {
    FilterMode_initEntries();
    return FilterMode_NEAREST_instance;
  }
  function FilterMode_LINEAR_getInstance() {
    FilterMode_initEntries();
    return FilterMode_LINEAR_instance;
  }
  var FilterTileMode_CLAMP_instance;
  var FilterTileMode_REPEAT_instance;
  var FilterTileMode_MIRROR_instance;
  var FilterTileMode_DECAL_instance;
  var FilterTileMode_entriesInitialized;
  function FilterTileMode_initEntries() {
    if (FilterTileMode_entriesInitialized)
      return Unit_instance;
    FilterTileMode_entriesInitialized = true;
    FilterTileMode_CLAMP_instance = new FilterTileMode('CLAMP', 0);
    FilterTileMode_REPEAT_instance = new FilterTileMode('REPEAT', 1);
    FilterTileMode_MIRROR_instance = new FilterTileMode('MIRROR', 2);
    FilterTileMode_DECAL_instance = new FilterTileMode('DECAL', 3);
  }
  function FilterTileMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FilterTileMode_CLAMP_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_CLAMP_instance;
  }
  function FilterTileMode_REPEAT_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_REPEAT_instance;
  }
  function FilterTileMode_MIRROR_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_MIRROR_instance;
  }
  function FilterTileMode_DECAL_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_DECAL_instance;
  }
  function Companion_10() {
    Companion_instance_10 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function Font_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_6().e40_1);
    Font.call($this);
    return $this;
  }
  function Font_init_$Init$_0($this) {
    Font_init_$Init$(org_jetbrains_skia_Font__1nMakeDefault(), $this);
    Stats_instance.x3u();
    return $this;
  }
  function Font_init_$Create$() {
    return Font_init_$Init$_0(objectCreate(protoOf(Font)));
  }
  function Font_init_$Init$_1(typeface, size, $this) {
    Font_init_$Init$(org_jetbrains_skia_Font__1nMakeTypefaceSize(getPtr(typeface), size), $this);
    Stats_instance.x3u();
    reachabilityBarrier(typeface);
    return $this;
  }
  function Font_init_$Create$_0(typeface, size) {
    return Font_init_$Init$_1(typeface, size, objectCreate(protoOf(Font)));
  }
  function _FinalizerHolder_6() {
    _FinalizerHolder_instance_6 = this;
    this.e40_1 = org_jetbrains_skia_Font__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_6;
  function _FinalizerHolder_getInstance_6() {
    if (_FinalizerHolder_instance_6 == null)
      new _FinalizerHolder_6();
    return _FinalizerHolder_instance_6;
  }
  function Font$_get_metrics_$lambda_bxy7iq(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Font__1nGetMetrics(this$0.a3v_1, it);
      return Unit_instance;
    };
  }
  protoOf(Font).b3v = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Font__1nEquals(this.a3v_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Font).h40 = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      var tmp_0 = Companion_instance_12;
      tmp = fromInteropPointer(tmp_0, Font$_get_metrics_$lambda_bxy7iq(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Font() {
    Companion_getInstance_10();
  }
  var FontEdging_ALIAS_instance;
  var FontEdging_ANTI_ALIAS_instance;
  var FontEdging_SUBPIXEL_ANTI_ALIAS_instance;
  var FontEdging_entriesInitialized;
  function FontEdging_initEntries() {
    if (FontEdging_entriesInitialized)
      return Unit_instance;
    FontEdging_entriesInitialized = true;
    FontEdging_ALIAS_instance = new FontEdging('ALIAS', 0);
    FontEdging_ANTI_ALIAS_instance = new FontEdging('ANTI_ALIAS', 1);
    FontEdging_SUBPIXEL_ANTI_ALIAS_instance = new FontEdging('SUBPIXEL_ANTI_ALIAS', 2);
  }
  function FontEdging(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontEdging_ALIAS_getInstance() {
    FontEdging_initEntries();
    return FontEdging_ALIAS_instance;
  }
  function FontEdging_ANTI_ALIAS_getInstance() {
    FontEdging_initEntries();
    return FontEdging_ANTI_ALIAS_instance;
  }
  function FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance() {
    FontEdging_initEntries();
    return FontEdging_SUBPIXEL_ANTI_ALIAS_instance;
  }
  function FontFeature$Companion$parseW3$lambda(it) {
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString(trim(isCharSequence(it) ? it : THROW_CCE()));
    var parts = split(tmp$ret$0, [' ']);
    var name = parts.m(0);
    var value = getOrNull(parts, 1);
    var tmp;
    switch (value) {
      case 'on':
      case null:
        tmp = 1;
        break;
      case 'off':
        tmp = 0;
        break;
      default:
        var tmp0_elvis_lhs = toIntOrNull(value);
        tmp = tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs;
        break;
    }
    var value_0 = tmp;
    return name.length === 4 ? FontFeature_init_$Create$(name, value_0) : null;
  }
  function FontFeature_init_$Init$(feature, value, $this) {
    FontFeature.call($this, Companion_instance_16.i40(feature), value, _UInt___init__impl__l7qpdl(0), _UInt___init__impl__l7qpdl(-1));
    return $this;
  }
  function FontFeature_init_$Create$(feature, value) {
    return FontFeature_init_$Init$(feature, value, objectCreate(protoOf(FontFeature)));
  }
  function Companion_11() {
    Companion_instance_11 = this;
    this.j40_1 = _UInt___init__impl__l7qpdl(0);
    this.k40_1 = _UInt___init__impl__l7qpdl(-1);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.l40_1 = Array(0);
    this.m40_1 = compilePattern('\\s+');
    this.n40_1 = compilePattern('([-+])?([a-z0-9]{4})(?:\\[(\\d+)?:(\\d+)?\\])?(?:=(\\d+))?');
    this.o40_1 = 1;
    this.p40_1 = 2;
    this.q40_1 = 3;
    this.r40_1 = 4;
    this.s40_1 = 5;
  }
  protoOf(Companion_11).t40 = function (str) {
    var tmp = splitToSequence(str, [',']);
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = toList(mapNotNull(tmp, FontFeature$Companion$parseW3$lambda));
    return copyToArray(this_0);
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function FontFeature(_tag, value, start, end) {
    Companion_getInstance_11();
    this.u40_1 = _tag;
    this.v40_1 = value;
    this.w40_1 = start;
    this.x40_1 = end;
  }
  protoOf(FontFeature).y40 = function () {
    return Companion_instance_16.z40(this.u40_1);
  };
  protoOf(FontFeature).toString = function () {
    var range = '';
    var tmp;
    var tmp0 = this.w40_1;
    // Inline function 'kotlin.UInt.compareTo' call
    var other = _UInt___init__impl__l7qpdl(0);
    if (uintCompare(_UInt___get_data__impl__f0vqqw(tmp0), _UInt___get_data__impl__f0vqqw(other)) > 0) {
      tmp = true;
    } else {
      var tmp0_0 = this.x40_1;
      // Inline function 'kotlin.UInt.compareTo' call
      var other_0 = _UInt___init__impl__l7qpdl(-1);
      tmp = uintCompare(_UInt___get_data__impl__f0vqqw(tmp0_0), _UInt___get_data__impl__f0vqqw(other_0)) < 0;
    }
    if (tmp) {
      var tmp_0;
      var tmp0_1 = this.w40_1;
      // Inline function 'kotlin.UInt.compareTo' call
      var other_1 = _UInt___init__impl__l7qpdl(0);
      if (uintCompare(_UInt___get_data__impl__f0vqqw(tmp0_1), _UInt___get_data__impl__f0vqqw(other_1)) > 0) {
        tmp_0 = new UInt(this.w40_1);
      } else {
        tmp_0 = '';
      }
      var tmp_1 = '[' + tmp_0 + ':';
      var tmp_2;
      var tmp0_2 = this.x40_1;
      // Inline function 'kotlin.UInt.compareTo' call
      var other_2 = _UInt___init__impl__l7qpdl(-1);
      if (uintCompare(_UInt___get_data__impl__f0vqqw(tmp0_2), _UInt___get_data__impl__f0vqqw(other_2)) < 0) {
        tmp_2 = new UInt(this.x40_1);
      } else {
        tmp_2 = '';
      }
      range = tmp_1 + toString(tmp_2) + ']';
    }
    var valuePrefix = '';
    var valueSuffix = '';
    if (this.v40_1 === 0)
      valuePrefix = '-';
    else if (this.v40_1 === 1)
      valuePrefix = '+';
    else
      valueSuffix = '=' + this.v40_1;
    return 'FontFeature(' + valuePrefix + this.u40_1 + range + valueSuffix + ')';
  };
  protoOf(FontFeature).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontFeature))
      return false;
    if (!(this.y40() === other.y40()))
      return false;
    if (!(this.v40_1 === other.v40_1))
      return false;
    if (!(this.w40_1 === other.w40_1))
      return false;
    return this.x40_1 === other.x40_1;
  };
  protoOf(FontFeature).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.u40_1 | 0;
    result = imul(result, PRIME) + this.v40_1 | 0;
    var tmp = imul(result, PRIME);
    // Inline function 'kotlin.UInt.shr' call
    var this_0 = this.w40_1;
    var tmp0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) >>> 16 | 0);
    // Inline function 'kotlin.UInt.xor' call
    var other = this.w40_1;
    // Inline function 'kotlin.UInt.toInt' call
    var this_1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0) ^ _UInt___get_data__impl__f0vqqw(other));
    result = tmp + _UInt___get_data__impl__f0vqqw(this_1) | 0;
    var tmp_0 = imul(result, PRIME);
    // Inline function 'kotlin.UInt.shr' call
    var this_2 = this.x40_1;
    var tmp0_0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_2) >>> 16 | 0);
    // Inline function 'kotlin.UInt.xor' call
    var other_0 = this.x40_1;
    // Inline function 'kotlin.UInt.toInt' call
    var this_3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_0) ^ _UInt___get_data__impl__f0vqqw(other_0));
    result = tmp_0 + _UInt___get_data__impl__f0vqqw(this_3) | 0;
    return result;
  };
  var FontHinting_NONE_instance;
  var FontHinting_SLIGHT_instance;
  var FontHinting_NORMAL_instance;
  var FontHinting_FULL_instance;
  var FontHinting_entriesInitialized;
  function FontHinting_initEntries() {
    if (FontHinting_entriesInitialized)
      return Unit_instance;
    FontHinting_entriesInitialized = true;
    FontHinting_NONE_instance = new FontHinting('NONE', 0);
    FontHinting_SLIGHT_instance = new FontHinting('SLIGHT', 1);
    FontHinting_NORMAL_instance = new FontHinting('NORMAL', 2);
    FontHinting_FULL_instance = new FontHinting('FULL', 3);
  }
  function FontHinting(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontHinting_NONE_getInstance() {
    FontHinting_initEntries();
    return FontHinting_NONE_instance;
  }
  function FontHinting_SLIGHT_getInstance() {
    FontHinting_initEntries();
    return FontHinting_SLIGHT_instance;
  }
  function FontHinting_NORMAL_getInstance() {
    FontHinting_initEntries();
    return FontHinting_NORMAL_instance;
  }
  function FontHinting_FULL_getInstance() {
    FontHinting_initEntries();
    return FontHinting_FULL_instance;
  }
  function Companion_12() {
  }
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function FontMetrics(top, ascent, descent, bottom, leading, avgCharWidth, maxCharWidth, xMin, xMax, xHeight, capHeight, underlineThickness, underlinePosition, strikeoutThickness, strikeoutPosition) {
    this.a41_1 = top;
    this.b41_1 = ascent;
    this.c41_1 = descent;
    this.d41_1 = bottom;
    this.e41_1 = leading;
    this.f41_1 = avgCharWidth;
    this.g41_1 = maxCharWidth;
    this.h41_1 = xMin;
    this.i41_1 = xMax;
    this.j41_1 = xHeight;
    this.k41_1 = capHeight;
    this.l41_1 = underlineThickness;
    this.m41_1 = underlinePosition;
    this.n41_1 = strikeoutThickness;
    this.o41_1 = strikeoutPosition;
  }
  protoOf(FontMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontMetrics))
      return false;
    if (!(compareTo(this.a41_1, other.a41_1) === 0))
      return false;
    if (!(compareTo(this.b41_1, other.b41_1) === 0))
      return false;
    if (!(compareTo(this.c41_1, other.c41_1) === 0))
      return false;
    if (!(compareTo(this.d41_1, other.d41_1) === 0))
      return false;
    if (!(compareTo(this.e41_1, other.e41_1) === 0))
      return false;
    if (!(compareTo(this.f41_1, other.f41_1) === 0))
      return false;
    if (!(compareTo(this.g41_1, other.g41_1) === 0))
      return false;
    if (!(compareTo(this.h41_1, other.h41_1) === 0))
      return false;
    if (!(compareTo(this.i41_1, other.i41_1) === 0))
      return false;
    if (!(compareTo(this.j41_1, other.j41_1) === 0))
      return false;
    if (!(compareTo(this.k41_1, other.k41_1) === 0))
      return false;
    if (this.l41_1 == null ? !(other.l41_1 == null) : !(this.l41_1 == other.l41_1))
      return false;
    if (this.m41_1 == null ? !(other.m41_1 == null) : !(this.m41_1 == other.m41_1))
      return false;
    if (this.n41_1 == null ? !(other.n41_1 == null) : !(this.n41_1 == other.n41_1))
      return false;
    return !(this.o41_1 == null ? !(other.o41_1 == null) : !(this.o41_1 == other.o41_1));
  };
  protoOf(FontMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.a41_1) | 0;
    result = imul(result, PRIME) + toBits(this.b41_1) | 0;
    result = imul(result, PRIME) + toBits(this.c41_1) | 0;
    result = imul(result, PRIME) + toBits(this.d41_1) | 0;
    result = imul(result, PRIME) + toBits(this.e41_1) | 0;
    result = imul(result, PRIME) + toBits(this.f41_1) | 0;
    result = imul(result, PRIME) + toBits(this.g41_1) | 0;
    result = imul(result, PRIME) + toBits(this.h41_1) | 0;
    result = imul(result, PRIME) + toBits(this.i41_1) | 0;
    result = imul(result, PRIME) + toBits(this.j41_1) | 0;
    result = imul(result, PRIME) + toBits(this.k41_1) | 0;
    var tmp = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.l41_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.m41_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.n41_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    var tmp_2 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.o41_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    result = tmp_2 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
    return result;
  };
  protoOf(FontMetrics).toString = function () {
    return 'FontMetrics(_top=' + this.a41_1 + ', _ascent=' + this.b41_1 + ', _descent=' + this.c41_1 + ', _bottom=' + this.d41_1 + ', _leading=' + this.e41_1 + ', _avgCharWidth=' + this.f41_1 + ', _maxCharWidth=' + this.g41_1 + ', _xMin=' + this.h41_1 + ', _xMax=' + this.i41_1 + ', _xHeight=' + this.j41_1 + ', _capHeight=' + this.k41_1 + ', _underlineThickness=' + this.l41_1 + ', _underlinePosition=' + this.m41_1 + ', _strikeoutThickness=' + this.n41_1 + ', _strikeoutPosition=' + this.o41_1 + ')';
  };
  function fromInteropPointer(_this__u8e3s4, block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Float32Array(15);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var handle = $this$interopScope.p41(result);
        block($this$interopScope, handle);
        $this$interopScope.q41(handle, result);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    return fromRawData(_this__u8e3s4, result);
  }
  function fromRawData(_this__u8e3s4, rawData) {
    var tmp = rawData[0];
    var tmp_0 = rawData[1];
    var tmp_1 = rawData[2];
    var tmp_2 = rawData[3];
    var tmp_3 = rawData[4];
    var tmp_4 = rawData[5];
    var tmp_5 = rawData[6];
    var tmp_6 = rawData[7];
    var tmp_7 = rawData[8];
    var tmp_8 = rawData[9];
    var tmp_9 = rawData[10];
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_0 = rawData[11];
    var tmp_10 = isNaN_0(this_0) ? null : this_0;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_1 = rawData[12];
    var tmp_11 = isNaN_0(this_1) ? null : this_1;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_2 = rawData[13];
    var tmp_12 = isNaN_0(this_2) ? null : this_2;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_3 = rawData[14];
    var tmp$ret$3 = isNaN_0(this_3) ? null : this_3;
    return new FontMetrics(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp$ret$3);
  }
  function Companion_13() {
    Companion_instance_13 = this;
    Companion_instance_60.d3v();
    this.r41_1 = FontMgr_init_$Create$(org_jetbrains_skia_FontMgr__1nDefault(), false);
  }
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function FontMgr_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Create$(ptr, allowClose) {
    return FontMgr_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(FontMgr)));
  }
  protoOf(FontMgr).u41 = function (data, ttcIndex) {
    var tmp;
    try {
      Stats_instance.x3u();
      var ptr = org_jetbrains_skia_FontMgr__1nMakeFromData(this.a3v_1, getPtr(data), ttcIndex);
      tmp = ptr === Companion_instance_61.f3v() ? null : new Typeface(ptr);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(data);
    }
    return tmp;
  };
  protoOf(FontMgr).v41 = function (data, ttcIndex, $super) {
    ttcIndex = ttcIndex === VOID ? 0 : ttcIndex;
    return $super === VOID ? this.u41(data, ttcIndex) : $super.u41.call(this, data, ttcIndex);
  };
  protoOf(FontMgr).w41 = function (name, style) {
    var tmp;
    try {
      Stats_instance.x3u();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          tmp$ret$1 = org_jetbrains_skia_FontMgr__1nLegacyMakeTypeface(this.a3v_1, $this$interopScope.j3w(name), style.x41_1);
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
          }
        }
      }
      var ptr = tmp$ret$1;
      tmp = ptr === Companion_instance_61.f3v() ? null : new Typeface(ptr);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function FontMgr() {
    Companion_getInstance_13();
  }
  function FontMgrWithFallback(fallbackProvider) {
    FontMgr_init_$Init$(org_jetbrains_skia_FontMgrWithFallback__1nDefaultWithFallbackFontProvider(fallbackProvider.a3v_1), this);
  }
  var FontSlant_UPRIGHT_instance;
  var FontSlant_ITALIC_instance;
  var FontSlant_OBLIQUE_instance;
  function values_2() {
    return [FontSlant_UPRIGHT_getInstance(), FontSlant_ITALIC_getInstance(), FontSlant_OBLIQUE_getInstance()];
  }
  var FontSlant_entriesInitialized;
  function FontSlant_initEntries() {
    if (FontSlant_entriesInitialized)
      return Unit_instance;
    FontSlant_entriesInitialized = true;
    FontSlant_UPRIGHT_instance = new FontSlant('UPRIGHT', 0);
    FontSlant_ITALIC_instance = new FontSlant('ITALIC', 1);
    FontSlant_OBLIQUE_instance = new FontSlant('OBLIQUE', 2);
  }
  function FontSlant(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontSlant_UPRIGHT_getInstance() {
    FontSlant_initEntries();
    return FontSlant_UPRIGHT_instance;
  }
  function FontSlant_ITALIC_getInstance() {
    FontSlant_initEntries();
    return FontSlant_ITALIC_instance;
  }
  function FontSlant_OBLIQUE_getInstance() {
    FontSlant_initEntries();
    return FontSlant_OBLIQUE_instance;
  }
  function FontStyle_init_$Init$(weight, width, slant, $this) {
    FontStyle.call($this);
    $this.x41_1 = weight & 65535 | (width & 255) << 16 | slant.m2_1 << 24;
    return $this;
  }
  function FontStyle_init_$Create$(weight, width, slant) {
    return FontStyle_init_$Init$(weight, width, slant, objectCreate(protoOf(FontStyle)));
  }
  function FontStyle_init_$Init$_0(value, $this) {
    FontStyle.call($this);
    $this.x41_1 = value;
    return $this;
  }
  function FontStyle_init_$Create$_0(value) {
    return FontStyle_init_$Init$_0(value, objectCreate(protoOf(FontStyle)));
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.y41_1 = FontStyle_init_$Create$(400, 5, FontSlant_UPRIGHT_getInstance());
    this.z41_1 = FontStyle_init_$Create$(700, 5, FontSlant_UPRIGHT_getInstance());
    this.a42_1 = FontStyle_init_$Create$(400, 5, FontSlant_ITALIC_getInstance());
    this.b42_1 = FontStyle_init_$Create$(700, 5, FontSlant_ITALIC_getInstance());
  }
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  protoOf(FontStyle).c42 = function () {
    return this.x41_1 & 65535;
  };
  protoOf(FontStyle).d42 = function (weight) {
    return FontStyle_init_$Create$(weight, this.s3u(), this.e42());
  };
  protoOf(FontStyle).s3u = function () {
    return this.x41_1 >> 16 & 255;
  };
  protoOf(FontStyle).e42 = function () {
    return values_2()[this.x41_1 >> 24 & 255];
  };
  protoOf(FontStyle).toString = function () {
    return 'FontStyle(weight=' + this.c42() + ', width=' + this.s3u() + ', slant=' + this.e42().toString() + ')';
  };
  protoOf(FontStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontStyle))
      return false;
    return this.x41_1 === other.x41_1;
  };
  protoOf(FontStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.x41_1 | 0;
    return result;
  };
  function FontStyle() {
    Companion_getInstance_14();
  }
  function FontVariation_init_$Init$(feature, value, $this) {
    FontVariation.call($this, Companion_instance_16.i40(feature), value);
    return $this;
  }
  function FontVariation_init_$Create$(feature, value) {
    return FontVariation_init_$Init$(feature, value, objectCreate(protoOf(FontVariation)));
  }
  function Companion_15() {
    Companion_instance_15 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.f42_1 = Array(0);
    this.g42_1 = compilePattern('\\s+');
    this.h42_1 = compilePattern('([a-z0-9]{4})=(\\d+)');
    this.i42_1 = 1;
    this.j42_1 = 2;
  }
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function FontVariation(_tag, value) {
    Companion_getInstance_15();
    this.k42_1 = _tag;
    this.l42_1 = value;
  }
  protoOf(FontVariation).y40 = function () {
    return Companion_instance_16.z40(this.k42_1);
  };
  protoOf(FontVariation).toString = function () {
    return this.y40() + '=' + this.l42_1;
  };
  protoOf(FontVariation).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontVariation))
      return false;
    if (!(this.y40() === other.y40()))
      return false;
    return compareTo(this.l42_1, other.l42_1) === 0;
  };
  protoOf(FontVariation).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.k42_1 | 0;
    result = imul(result, PRIME) + toBits(this.l42_1) | 0;
    return result;
  };
  function Companion_16() {
  }
  protoOf(Companion_16).i40 = function (name) {
    // Inline function 'kotlin.require' call
    if (!(name.length === 4)) {
      var message = "Name must be exactly 4 symbols, got: '" + name + "'";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.code' call
    var this_0 = charCodeAt(name, 0);
    var tmp = (Char__toInt_impl_vasixd(this_0) & 255) << 24;
    // Inline function 'kotlin.code' call
    var this_1 = charCodeAt(name, 1);
    var tmp_0 = tmp | (Char__toInt_impl_vasixd(this_1) & 255) << 16;
    // Inline function 'kotlin.code' call
    var this_2 = charCodeAt(name, 2);
    var tmp_1 = tmp_0 | (Char__toInt_impl_vasixd(this_2) & 255) << 8;
    // Inline function 'kotlin.code' call
    var this_3 = charCodeAt(name, 3);
    return tmp_1 | Char__toInt_impl_vasixd(this_3) & 255;
  };
  protoOf(Companion_16).z40 = function (tag) {
    // Inline function 'kotlin.charArrayOf' call
    var tmp$ret$0 = charArrayOf([numberToChar(tag >> 24 & 255), numberToChar(tag >> 16 & 255), numberToChar(tag >> 8 & 255), numberToChar(tag & 255)]);
    return concatToString(tmp$ret$0);
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    return Companion_instance_16;
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.m42_1 = 1;
    this.n42_1 = new GradientStyle(FilterTileMode_CLAMP_getInstance(), true, null);
  }
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function GradientStyle(tileMode, isPremul, localMatrix) {
    Companion_getInstance_17();
    this.o42_1 = tileMode;
    this.p42_1 = isPremul;
    this.q42_1 = localMatrix;
  }
  protoOf(GradientStyle).r42 = function () {
    return 0 | (this.p42_1 ? Companion_getInstance_17().m42_1 : 0);
  };
  protoOf(GradientStyle).s42 = function () {
    var tmp0_safe_receiver = this.q42_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h3y_1;
  };
  protoOf(GradientStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof GradientStyle))
      return false;
    if (!(this.p42_1 === other.p42_1))
      return false;
    if (!this.o42_1.equals(other.o42_1))
      return false;
    return !(this.q42_1 == null ? !(other.q42_1 == null) : !equals(this.q42_1, other.q42_1));
  };
  protoOf(GradientStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.p42_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.o42_1.hashCode() | 0;
    var tmp = imul(result, PRIME);
    var tmp0_safe_receiver = this.q42_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 43 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(GradientStyle).toString = function () {
    return 'GradientStyle(_tileMode=' + this.o42_1.toString() + ', _premul=' + this.p42_1 + ', _localMatrix=' + toString_0(this.q42_1) + ')';
  };
  function IHasImageInfo() {
  }
  function Companion_18() {
  }
  var Companion_instance_18;
  function Companion_getInstance_18() {
    return Companion_instance_18;
  }
  function IRange(start, end) {
    this.t42_1 = start;
    this.u42_1 = end;
  }
  protoOf(IRange).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof IRange))
      return false;
    if (!(this.t42_1 === other.t42_1))
      return false;
    return this.u42_1 === other.u42_1;
  };
  protoOf(IRange).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.t42_1 | 0;
    result = imul(result, PRIME) + this.u42_1 | 0;
    return result;
  };
  protoOf(IRange).toString = function () {
    return 'IRange(_start=' + this.t42_1 + ', _end=' + this.u42_1 + ')';
  };
  function fromInteropPointer_0(_this__u8e3s4, block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(2);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var handle = $this$interopScope.v42(result);
        block($this$interopScope, handle);
        $this$interopScope.g3x(handle, result);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    var result_0 = result;
    return new IRange(result_0[0], result_0[1]);
  }
  function Companion_19() {
    Companion_instance_19 = this;
    Companion_instance_60.d3v();
  }
  protoOf(Companion_19).w42 = function (bitmap) {
    var tmp;
    try {
      Stats_instance.x3u();
      var ptr = org_jetbrains_skia_Image__1nMakeFromBitmap(getPtr(bitmap));
      if (ptr === Companion_instance_61.f3v())
        throw RuntimeException_init_$Create$('Failed to Image::makeFromBitmap ' + bitmap.toString());
      tmp = new Image(ptr);
    }finally {
      reachabilityBarrier(bitmap);
    }
    return tmp;
  };
  protoOf(Companion_19).x42 = function (bytes) {
    Stats_instance.x3u();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        tmp$ret$1 = org_jetbrains_skia_Image__1nMakeFromEncoded($this$interopScope.q3z(bytes), bytes.length);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    var ptr = tmp$ret$1;
    // Inline function 'kotlin.require' call
    if (!!(ptr === Companion_instance_61.f3v())) {
      var message = 'Failed to Image::makeFromEncoded';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new Image(ptr);
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function Image_nGetImageInfo$ref() {
    var l = function (p0, p1, p2) {
      org_jetbrains_skia_Image__1nGetImageInfo(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = 'Image_nGetImageInfo';
    return l;
  }
  function Image$_get_imageInfo_$lambda_c2a05w(this$0) {
    return function () {
      var tmp;
      if (this$0.k3v_1 == null) {
        var tmp_0 = this$0;
        var tmp_1 = Companion_getInstance_20();
        var tmp_2 = this$0.a3v_1;
        tmp_0.k3v_1 = tmp_1.t3v(tmp_2, Image_nGetImageInfo$ref());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Image(ptr) {
    Companion_getInstance_19();
    RefCnt_init_$Init$(ptr, this);
    this.k3v_1 = null;
  }
  protoOf(Image).l3v = function () {
    var tmp;
    try {
      if (this.k3v_1 == null) {
        commonSynchronized(this, Image$_get_imageInfo_$lambda_c2a05w(this));
      }
      tmp = ensureNotNull(this.k3v_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Image).q3v = function (dst) {
    return this.y42(null, dst, 0, 0, false);
  };
  protoOf(Image).y42 = function (context, dst, srcX, srcY, cache) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Image__1nReadPixelsBitmap(this.a3v_1, getPtr(context), getPtr(dst), srcX, srcY, cache);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(context);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  function ImageInfo_init_$Init$(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo.call($this, new ColorInfo(colorType, alphaType, colorSpace), width, height);
    return $this;
  }
  function ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo_init_$Init$(width, height, values_1()[colorType], values_0()[alphaType], colorSpace === Companion_instance_61.f3v() ? null : ColorSpace_init_$Create$(colorSpace), $this);
    return $this;
  }
  function ImageInfo_init_$Create$(width, height, colorType, alphaType, colorSpace) {
    return ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, objectCreate(protoOf(ImageInfo)));
  }
  function Companion_20() {
    Companion_instance_20 = this;
    this.s3v_1 = new ImageInfo(Companion_getInstance_5().d3z_1, 0, 0);
  }
  protoOf(Companion_20).t3v = function (_ptr, _nGetImageInfo) {
    Stats_instance.x3u();
    var colorSpacePtr = null;
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(4);
    $l$block_0: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var handle = $this$interopScope.v42(result);
        // Inline function 'org.jetbrains.skia.impl.withResult' call
        var result_0 = new NativePointerArray(1);
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0_0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
            access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0_0 + 1 | 0);
            var $this$interopScope_0 = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
            var handle_0 = $this$interopScope_0.z42(result_0);
            _nGetImageInfo(_ptr, handle, handle_0);
            $this$interopScope_0.a43(handle_0, result_0);
            break $l$block;
          }finally {
            var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
            access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
            if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
              access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
            }
          }
        }
        colorSpacePtr = result_0.m(0);
        $this$interopScope.g3x(handle, result);
        break $l$block_0;
      }finally {
        var tmp1_0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    // Inline function 'kotlin.let' call
    return ImageInfo_init_$Create$(result[0], result[1], result[2], result[3], ensureNotNull(colorSpacePtr));
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function ImageInfo(colorInfo, width, height) {
    Companion_getInstance_20();
    this.x3v_1 = colorInfo;
    this.y3v_1 = width;
    this.z3v_1 = height;
  }
  protoOf(ImageInfo).d3w = function () {
    return imul(this.y3v_1, this.h3z());
  };
  protoOf(ImageInfo).h3z = function () {
    return this.x3v_1.h3z();
  };
  protoOf(ImageInfo).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ImageInfo))
      return false;
    if (!(this.y3v_1 === other.y3v_1))
      return false;
    if (!(this.z3v_1 === other.z3v_1))
      return false;
    return this.x3v_1.equals(other.x3v_1);
  };
  protoOf(ImageInfo).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.y3v_1 | 0;
    result = imul(result, PRIME) + this.z3v_1 | 0;
    result = imul(result, PRIME) + this.x3v_1.hashCode() | 0;
    return result;
  };
  protoOf(ImageInfo).toString = function () {
    return 'ImageInfo(_colorInfo=' + this.x3v_1.toString() + ', _width=' + this.y3v_1 + ', _height=' + this.z3v_1 + ')';
  };
  function Companion_21() {
    Companion_instance_21 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function ManagedString_init_$Init$(s, $this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        tmp$ret$1 = org_jetbrains_skia_ManagedString__1nMake($this$interopScope.j3w(s));
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    ManagedString.call($this, tmp$ret$1);
    Stats_instance.x3u();
    return $this;
  }
  function ManagedString_init_$Create$(s) {
    return ManagedString_init_$Init$(s, objectCreate(protoOf(ManagedString)));
  }
  function _FinalizerHolder_7() {
    _FinalizerHolder_instance_7 = this;
    this.c43_1 = org_jetbrains_skia_ManagedString__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_7;
  function _FinalizerHolder_getInstance_7() {
    if (_FinalizerHolder_instance_7 == null)
      new _FinalizerHolder_7();
    return _FinalizerHolder_instance_7;
  }
  function ManagedString(ptr, managed) {
    Companion_getInstance_21();
    managed = managed === VOID ? true : managed;
    Managed.call(this, ptr, _FinalizerHolder_getInstance_7().c43_1, managed);
  }
  protoOf(ManagedString).toString = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      var size = org_jetbrains_skia_ManagedString__nStringSize(this.a3v_1);
      // Inline function 'org.jetbrains.skia.impl.withResult' call
      var result = new Int8Array(size);
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          var handle = $this$interopScope.d43(result);
          org_jetbrains_skia_ManagedString__nStringData(this.a3v_1, handle, size);
          $this$interopScope.e43(handle, result);
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
          }
        }
      }
      tmp = decodeToString(result);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ManagedString).h43 = function (s) {
    Stats_instance.x3u();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        org_jetbrains_skia_ManagedString__1nAppend(this.a3v_1, $this$interopScope.j3w(s));
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    return this;
  };
  function Companion_22() {
    Companion_instance_22 = this;
    Companion_instance_60.d3v();
  }
  protoOf(Companion_22).i43 = function (mode, sigma, respectCTM) {
    Stats_instance.x3u();
    return new MaskFilter(org_jetbrains_skia_MaskFilter__1nMakeBlur(mode.m2_1, sigma, respectCTM));
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function MaskFilter(ptr) {
    Companion_getInstance_22();
    RefCnt_init_$Init$(ptr, this);
  }
  function Companion_23() {
    Companion_instance_23 = this;
    this.j43_1 = this.k43(0.0, 0.0);
  }
  protoOf(Companion_23).k43 = function (dx, dy) {
    return new Matrix33(new Float32Array([1.0, 0.0, dx, 0.0, 1.0, dy, 0.0, 0.0, 1.0]));
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function Matrix33(mat) {
    Companion_getInstance_23();
    // Inline function 'kotlin.require' call
    if (!(mat.length === 9)) {
      var message = 'Expected 9 elements, got ' + mat.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.h3y_1 = mat;
  }
  protoOf(Matrix33).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix33))
      return false;
    return contentEquals(this.h3y_1, other.h3y_1);
  };
  protoOf(Matrix33).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.h3y_1) | 0;
    return result;
  };
  protoOf(Matrix33).toString = function () {
    return 'Matrix33(_mat=' + toString(this.h3y_1) + ')';
  };
  function Companion_24() {
    Companion_instance_24 = this;
    this.l43_1 = new Matrix44(new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]));
  }
  var Companion_instance_24;
  function Companion_getInstance_24() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function Matrix44(mat) {
    Companion_getInstance_24();
    // Inline function 'kotlin.require' call
    if (!(mat.length === 16)) {
      var message = 'Expected 16 elements, got ' + mat.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.o3y_1 = mat;
  }
  protoOf(Matrix44).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix44))
      return false;
    return contentEquals(this.o3y_1, other.o3y_1);
  };
  protoOf(Matrix44).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.o3y_1) | 0;
    return result;
  };
  protoOf(Matrix44).toString = function () {
    return 'Matrix44(_mat=' + toString(this.o3y_1) + ')';
  };
  var MipmapMode_NONE_instance;
  var MipmapMode_NEAREST_instance;
  var MipmapMode_LINEAR_instance;
  var MipmapMode_entriesInitialized;
  function MipmapMode_initEntries() {
    if (MipmapMode_entriesInitialized)
      return Unit_instance;
    MipmapMode_entriesInitialized = true;
    MipmapMode_NONE_instance = new MipmapMode('NONE', 0);
    MipmapMode_NEAREST_instance = new MipmapMode('NEAREST', 1);
    MipmapMode_LINEAR_instance = new MipmapMode('LINEAR', 2);
  }
  function MipmapMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MipmapMode_NONE_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NONE_instance;
  }
  function MipmapMode_NEAREST_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NEAREST_instance;
  }
  function Companion_25() {
    Companion_instance_25 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_25;
  function Companion_getInstance_25() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function _FinalizerHolder_8() {
    _FinalizerHolder_instance_8 = this;
    this.m43_1 = org_jetbrains_skia_Paint__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_8;
  function _FinalizerHolder_getInstance_8() {
    if (_FinalizerHolder_instance_8 == null)
      new _FinalizerHolder_8();
    return _FinalizerHolder_instance_8;
  }
  function Paint_init_$Init$($this) {
    Managed.call($this, org_jetbrains_skia_Paint__1nMake(), _FinalizerHolder_getInstance_8().m43_1);
    Paint.call($this);
    Stats_instance.x3u();
    return $this;
  }
  function Paint_init_$Create$() {
    return Paint_init_$Init$(objectCreate(protoOf(Paint)));
  }
  protoOf(Paint).b3v = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Paint__1nEquals(this.a3v_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Paint).p43 = function () {
    Stats_instance.x3u();
    org_jetbrains_skia_Paint__1nReset(this.a3v_1);
    return this;
  };
  protoOf(Paint).q43 = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_Paint__1nSetAntiAlias(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).r43 = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_Paint__1nSetMode(this.a3v_1, value.m2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).s43 = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = values_3()[org_jetbrains_skia_Paint__1nGetMode(this.a3v_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).t43 = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_Paint__1nSetColor(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).u43 = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_Paint__1nGetColor(this.a3v_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).v43 = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      // Inline function 'org.jetbrains.skia.impl.withResult' call
      var result = new Float32Array(4);
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          var handle = $this$interopScope.p41(result);
          org_jetbrains_skia_Paint__1nGetColor4f(this.a3v_1, handle);
          $this$interopScope.q41(handle, result);
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
          }
        }
      }
      tmp = Color4f_init_$Create$(result);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).w43 = function (color, colorSpace) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_Paint__1nSetColor4f(this.a3v_1, color.s3y_1, color.t3y_1, color.u3y_1, color.v3y_1, getPtr(colorSpace));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(colorSpace);
    }
    return tmp;
  };
  protoOf(Paint).x43 = function (a) {
    this.w43(this.v43().w3y(a), null);
    return this;
  };
  protoOf(Paint).y43 = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_Paint__1nSetStrokeWidth(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).z43 = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_Paint__1nGetStrokeWidth(this.a3v_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).a44 = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_Paint__1nSetStrokeMiter(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).b44 = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_Paint__1nSetStrokeCap(this.a3v_1, value.m2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).c44 = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_Paint__1nSetStrokeJoin(this.a3v_1, value.m2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).d44 = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_Paint__1nSetShader(this.a3v_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).e44 = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      var shaderPtr = org_jetbrains_skia_Paint__1nGetShader(this.a3v_1);
      tmp = shaderPtr === Companion_instance_61.f3v() ? null : new Shader(shaderPtr);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).f44 = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_Paint__1nSetColorFilter(this.a3v_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).g44 = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_Paint__1nSetBlendMode(this.a3v_1, value.m2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).h44 = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = values()[org_jetbrains_skia_Paint__1nGetBlendMode(this.a3v_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).i44 = function () {
    return this.h44().equals(BlendMode_SRC_OVER_getInstance());
  };
  protoOf(Paint).j44 = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_Paint__1nSetPathEffect(this.a3v_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).k44 = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_Paint__1nSetMaskFilter(this.a3v_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).l44 = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_Paint__1nSetImageFilter(this.a3v_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  function Paint() {
    Companion_getInstance_25();
  }
  var PaintMode_FILL_instance;
  var PaintMode_STROKE_instance;
  var PaintMode_STROKE_AND_FILL_instance;
  function values_3() {
    return [PaintMode_FILL_getInstance(), PaintMode_STROKE_getInstance(), PaintMode_STROKE_AND_FILL_getInstance()];
  }
  var PaintMode_entriesInitialized;
  function PaintMode_initEntries() {
    if (PaintMode_entriesInitialized)
      return Unit_instance;
    PaintMode_entriesInitialized = true;
    PaintMode_FILL_instance = new PaintMode('FILL', 0);
    PaintMode_STROKE_instance = new PaintMode('STROKE', 1);
    PaintMode_STROKE_AND_FILL_instance = new PaintMode('STROKE_AND_FILL', 2);
  }
  function PaintMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintMode_FILL_getInstance() {
    PaintMode_initEntries();
    return PaintMode_FILL_instance;
  }
  function PaintMode_STROKE_getInstance() {
    PaintMode_initEntries();
    return PaintMode_STROKE_instance;
  }
  function PaintMode_STROKE_AND_FILL_getInstance() {
    PaintMode_initEntries();
    return PaintMode_STROKE_AND_FILL_instance;
  }
  var PaintStrokeCap_BUTT_instance;
  var PaintStrokeCap_ROUND_instance;
  var PaintStrokeCap_SQUARE_instance;
  var PaintStrokeCap_entriesInitialized;
  function PaintStrokeCap_initEntries() {
    if (PaintStrokeCap_entriesInitialized)
      return Unit_instance;
    PaintStrokeCap_entriesInitialized = true;
    PaintStrokeCap_BUTT_instance = new PaintStrokeCap('BUTT', 0);
    PaintStrokeCap_ROUND_instance = new PaintStrokeCap('ROUND', 1);
    PaintStrokeCap_SQUARE_instance = new PaintStrokeCap('SQUARE', 2);
  }
  function PaintStrokeCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeCap_BUTT_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_BUTT_instance;
  }
  function PaintStrokeCap_ROUND_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_ROUND_instance;
  }
  function PaintStrokeCap_SQUARE_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_SQUARE_instance;
  }
  var PaintStrokeJoin_MITER_instance;
  var PaintStrokeJoin_ROUND_instance;
  var PaintStrokeJoin_BEVEL_instance;
  var PaintStrokeJoin_entriesInitialized;
  function PaintStrokeJoin_initEntries() {
    if (PaintStrokeJoin_entriesInitialized)
      return Unit_instance;
    PaintStrokeJoin_entriesInitialized = true;
    PaintStrokeJoin_MITER_instance = new PaintStrokeJoin('MITER', 0);
    PaintStrokeJoin_ROUND_instance = new PaintStrokeJoin('ROUND', 1);
    PaintStrokeJoin_BEVEL_instance = new PaintStrokeJoin('BEVEL', 2);
  }
  function PaintStrokeJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeJoin_MITER_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_MITER_instance;
  }
  function PaintStrokeJoin_ROUND_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_ROUND_instance;
  }
  function PaintStrokeJoin_BEVEL_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_BEVEL_instance;
  }
  function Companion_26() {
    Companion_instance_26 = this;
    Companion_instance_60.d3v();
  }
  protoOf(Companion_26).m44 = function (one, two, op) {
    var tmp;
    try {
      Stats_instance.x3u();
      var ptr = org_jetbrains_skia_Path__1nMakeCombining(getPtr(one), getPtr(two), op.m2_1);
      tmp = ptr === Companion_instance_61.f3v() ? null : new Path(ptr);
    }finally {
      reachabilityBarrier(one);
      reachabilityBarrier(two);
    }
    return tmp;
  };
  var Companion_instance_26;
  function Companion_getInstance_26() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function _FinalizerHolder_9() {
    _FinalizerHolder_instance_9 = this;
    this.n44_1 = org_jetbrains_skia_Path__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_9;
  function _FinalizerHolder_getInstance_9() {
    if (_FinalizerHolder_instance_9 == null)
      new _FinalizerHolder_9();
    return _FinalizerHolder_instance_9;
  }
  function Path_init_$Init$($this) {
    Path.call($this, org_jetbrains_skia_Path__1nMake());
    Stats_instance.x3u();
    return $this;
  }
  function Path_init_$Create$() {
    return Path_init_$Init$(objectCreate(protoOf(Path)));
  }
  function Path$_get_bounds_$lambda_qr8ora(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Path__1nGetBounds(this$0.a3v_1, it);
      return Unit_instance;
    };
  }
  function Path(ptr) {
    Companion_getInstance_26();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_9().n44_1);
  }
  protoOf(Path).b3v = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Path__1nEquals(this.a3v_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Path).q44 = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_Path__1nSetFillMode(this.a3v_1, value.m2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).r44 = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = values_4()[org_jetbrains_skia_Path__1nGetFillMode(this.a3v_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).p43 = function () {
    Stats_instance.x3u();
    org_jetbrains_skia_Path__1nReset(this.a3v_1);
    return this;
  };
  protoOf(Path).s44 = function () {
    Stats_instance.x3u();
    org_jetbrains_skia_Path__1nRewind(this.a3v_1);
    return this;
  };
  protoOf(Path).yl = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_Path__1nIsEmpty(this.a3v_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).t44 = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      var tmp_0 = Companion_instance_33;
      tmp = tmp_0.u44(Path$_get_bounds_$lambda_qr8ora(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).v44 = function (x, y) {
    Stats_instance.x3u();
    org_jetbrains_skia_Path__1nMoveTo(this.a3v_1, x, y);
    return this;
  };
  protoOf(Path).w44 = function (dx, dy) {
    Stats_instance.x3u();
    org_jetbrains_skia_Path__1nRMoveTo(this.a3v_1, dx, dy);
    return this;
  };
  protoOf(Path).x44 = function (x, y) {
    Stats_instance.x3u();
    org_jetbrains_skia_Path__1nLineTo(this.a3v_1, x, y);
    return this;
  };
  protoOf(Path).y44 = function (dx, dy) {
    Stats_instance.x3u();
    org_jetbrains_skia_Path__1nRLineTo(this.a3v_1, dx, dy);
    return this;
  };
  protoOf(Path).z44 = function (x1, y1, x2, y2) {
    Stats_instance.x3u();
    org_jetbrains_skia_Path__1nQuadTo(this.a3v_1, x1, y1, x2, y2);
    return this;
  };
  protoOf(Path).a45 = function (dx1, dy1, dx2, dy2) {
    Stats_instance.x3u();
    org_jetbrains_skia_Path__1nRQuadTo(this.a3v_1, dx1, dy1, dx2, dy2);
    return this;
  };
  protoOf(Path).b45 = function (x1, y1, x2, y2, x3, y3) {
    Stats_instance.x3u();
    org_jetbrains_skia_Path__1nCubicTo(this.a3v_1, x1, y1, x2, y2, x3, y3);
    return this;
  };
  protoOf(Path).c45 = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    Stats_instance.x3u();
    org_jetbrains_skia_Path__1nRCubicTo(this.a3v_1, dx1, dy1, dx2, dy2, dx3, dy3);
    return this;
  };
  protoOf(Path).d45 = function () {
    Stats_instance.x3u();
    org_jetbrains_skia_Path__1nClosePath(this.a3v_1);
    return this;
  };
  protoOf(Path).e45 = function (rect, dir, start) {
    Stats_instance.x3u();
    org_jetbrains_skia_Path__1nAddRect(this.a3v_1, rect.q3x_1, rect.r3x_1, rect.s3x_1, rect.t3x_1, dir.m2_1, start);
    return this;
  };
  protoOf(Path).f45 = function (rect, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 0 : start;
    return $super === VOID ? this.e45(rect, dir, start) : $super.e45.call(this, rect, dir, start);
  };
  protoOf(Path).g45 = function (rrect, dir, start) {
    Stats_instance.x3u();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        org_jetbrains_skia_Path__1nAddRRect(this.a3v_1, rrect.q3x_1, rrect.r3x_1, rrect.s3x_1, rrect.t3x_1, $this$interopScope.b3y(rrect.a3y_1), rrect.a3y_1.length, dir.m2_1, start);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    return this;
  };
  protoOf(Path).h45 = function (rrect, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 6 : start;
    return $super === VOID ? this.g45(rrect, dir, start) : $super.g45.call(this, rrect, dir, start);
  };
  protoOf(Path).i45 = function (src, dx, dy, extend) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_Path__1nAddPathOffset(this.a3v_1, getPtr(src), dx, dy, extend);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(src);
    }
    return tmp;
  };
  protoOf(Path).j45 = function (src, dx, dy, extend, $super) {
    extend = extend === VOID ? false : extend;
    return $super === VOID ? this.i45(src, dx, dy, extend) : $super.i45.call(this, src, dx, dy, extend);
  };
  protoOf(Path).k45 = function (matrix, dst, applyPerspectiveClip) {
    var tmp;
    try {
      Stats_instance.x3u();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          org_jetbrains_skia_Path__1nTransform(this.a3v_1, $this$interopScope.b3y(matrix.h3y_1), getPtr(dst), applyPerspectiveClip);
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  protoOf(Path).l45 = function (matrix, dst, applyPerspectiveClip, $super) {
    dst = dst === VOID ? null : dst;
    applyPerspectiveClip = applyPerspectiveClip === VOID ? true : applyPerspectiveClip;
    return $super === VOID ? this.k45(matrix, dst, applyPerspectiveClip) : $super.k45.call(this, matrix, dst, applyPerspectiveClip);
  };
  protoOf(Path).i = function () {
    return this.m45(false);
  };
  protoOf(Path).m45 = function (forceClose) {
    return Companion_getInstance_28().n45(this, forceClose);
  };
  var PathDirection_CLOCKWISE_instance;
  var PathDirection_COUNTER_CLOCKWISE_instance;
  var PathDirection_entriesInitialized;
  function PathDirection_initEntries() {
    if (PathDirection_entriesInitialized)
      return Unit_instance;
    PathDirection_entriesInitialized = true;
    PathDirection_CLOCKWISE_instance = new PathDirection('CLOCKWISE', 0);
    PathDirection_COUNTER_CLOCKWISE_instance = new PathDirection('COUNTER_CLOCKWISE', 1);
  }
  function PathDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathDirection_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_CLOCKWISE_instance;
  }
  function PathDirection_COUNTER_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_COUNTER_CLOCKWISE_instance;
  }
  var PathFillMode_WINDING_instance;
  var PathFillMode_EVEN_ODD_instance;
  var PathFillMode_INVERSE_WINDING_instance;
  var PathFillMode_INVERSE_EVEN_ODD_instance;
  function values_4() {
    return [PathFillMode_WINDING_getInstance(), PathFillMode_EVEN_ODD_getInstance(), PathFillMode_INVERSE_WINDING_getInstance(), PathFillMode_INVERSE_EVEN_ODD_getInstance()];
  }
  var PathFillMode_entriesInitialized;
  function PathFillMode_initEntries() {
    if (PathFillMode_entriesInitialized)
      return Unit_instance;
    PathFillMode_entriesInitialized = true;
    PathFillMode_WINDING_instance = new PathFillMode('WINDING', 0);
    PathFillMode_EVEN_ODD_instance = new PathFillMode('EVEN_ODD', 1);
    PathFillMode_INVERSE_WINDING_instance = new PathFillMode('INVERSE_WINDING', 2);
    PathFillMode_INVERSE_EVEN_ODD_instance = new PathFillMode('INVERSE_EVEN_ODD', 3);
  }
  function PathFillMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathFillMode_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_WINDING_instance;
  }
  function PathFillMode_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_EVEN_ODD_instance;
  }
  function PathFillMode_INVERSE_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_WINDING_instance;
  }
  function PathFillMode_INVERSE_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_EVEN_ODD_instance;
  }
  function Companion_27() {
    Companion_instance_27 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_27;
  function Companion_getInstance_27() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function PathMeasure_init_$Init$($this) {
    PathMeasure.call($this, org_jetbrains_skia_PathMeasure__1nMake());
    return $this;
  }
  function PathMeasure_init_$Create$() {
    return PathMeasure_init_$Init$(objectCreate(protoOf(PathMeasure)));
  }
  function _FinalizerHolder_10() {
    _FinalizerHolder_instance_10 = this;
    this.o45_1 = org_jetbrains_skia_PathMeasure__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_10;
  function _FinalizerHolder_getInstance_10() {
    if (_FinalizerHolder_instance_10 == null)
      new _FinalizerHolder_10();
    return _FinalizerHolder_instance_10;
  }
  function PathMeasure(ptr) {
    Companion_getInstance_27();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_10().o45_1);
  }
  protoOf(PathMeasure).r45 = function (path, forceClosed) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_PathMeasure__1nSetPath(this.a3v_1, getPtr(path), forceClosed);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(path);
    }
    return tmp;
  };
  protoOf(PathMeasure).a = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_PathMeasure__1nGetLength(this.a3v_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathMeasure).s45 = function (startD, endD, dst, startWithMoveTo) {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_PathMeasure__1nGetSegment(this.a3v_1, startD, endD, getPtr(dst), startWithMoveTo);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  var PathOp_DIFFERENCE_instance;
  var PathOp_INTERSECT_instance;
  var PathOp_UNION_instance;
  var PathOp_XOR_instance;
  var PathOp_REVERSE_DIFFERENCE_instance;
  var PathOp_entriesInitialized;
  function PathOp_initEntries() {
    if (PathOp_entriesInitialized)
      return Unit_instance;
    PathOp_entriesInitialized = true;
    PathOp_DIFFERENCE_instance = new PathOp('DIFFERENCE', 0);
    PathOp_INTERSECT_instance = new PathOp('INTERSECT', 1);
    PathOp_UNION_instance = new PathOp('UNION', 2);
    PathOp_XOR_instance = new PathOp('XOR', 3);
    PathOp_REVERSE_DIFFERENCE_instance = new PathOp('REVERSE_DIFFERENCE', 4);
  }
  function PathOp(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathOp_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_DIFFERENCE_instance;
  }
  function PathOp_INTERSECT_getInstance() {
    PathOp_initEntries();
    return PathOp_INTERSECT_instance;
  }
  function PathOp_UNION_getInstance() {
    PathOp_initEntries();
    return PathOp_UNION_instance;
  }
  function PathOp_XOR_getInstance() {
    PathOp_initEntries();
    return PathOp_XOR_instance;
  }
  function PathOp_REVERSE_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_REVERSE_DIFFERENCE_instance;
  }
  function PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, $this) {
    PathSegment.call($this, values_5()[verbOrdinal], new Point(x0, y0), null, null, null, 0.0, false, isClosedContour);
    // Inline function 'kotlin.require' call
    if (!(verbOrdinal === PathVerb_MOVE_getInstance().m2_1 || verbOrdinal === PathVerb_CLOSE_getInstance().m2_1)) {
      var message = 'Expected MOVE or CLOSE, got ' + values_5()[verbOrdinal].toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PathSegment_init_$Create$(verbOrdinal, x0, y0, isClosedContour) {
    return PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_LINE_getInstance(), new Point(x0, y0), new Point(x1, y1), null, null, 0.0, isCloseLine, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_0(x0, y0, x1, y1, isCloseLine, isClosedContour) {
    return PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_QUAD_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_1(x0, y0, x1, y1, x2, y2, isClosedContour) {
    return PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CONIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, conicWeight, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour) {
    return PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CUBIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), new Point(x3, y3), 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour) {
    return PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment(verb, p0, p1, p2, p3, conicWeight, isCloseLine, isClosedContour) {
    verb = verb === VOID ? PathVerb_DONE_getInstance() : verb;
    p0 = p0 === VOID ? null : p0;
    p1 = p1 === VOID ? null : p1;
    p2 = p2 === VOID ? null : p2;
    p3 = p3 === VOID ? null : p3;
    conicWeight = conicWeight === VOID ? 0.0 : conicWeight;
    isCloseLine = isCloseLine === VOID ? false : isCloseLine;
    isClosedContour = isClosedContour === VOID ? false : isClosedContour;
    this.t45_1 = verb;
    this.u45_1 = p0;
    this.v45_1 = p1;
    this.w45_1 = p2;
    this.x45_1 = p3;
    this.y45_1 = conicWeight;
    this.z45_1 = isCloseLine;
    this.a46_1 = isClosedContour;
  }
  protoOf(PathSegment).toString = function () {
    return 'Segment(verb=' + this.t45_1.toString() + (!this.t45_1.equals(PathVerb_DONE_getInstance()) ? ', p0=' + toString_0(this.u45_1) : '') + (this.t45_1.equals(PathVerb_LINE_getInstance()) || this.t45_1.equals(PathVerb_QUAD_getInstance()) || this.t45_1.equals(PathVerb_CONIC_getInstance()) || this.t45_1.equals(PathVerb_CUBIC_getInstance()) ? ', p1=' + toString_0(this.v45_1) : '') + (this.t45_1.equals(PathVerb_QUAD_getInstance()) || this.t45_1.equals(PathVerb_CONIC_getInstance()) || this.t45_1.equals(PathVerb_CUBIC_getInstance()) ? ', p2=' + toString_0(this.w45_1) : '') + (this.t45_1.equals(PathVerb_CUBIC_getInstance()) ? ', p3=' + toString_0(this.x45_1) : '') + (this.t45_1.equals(PathVerb_CONIC_getInstance()) ? ', conicWeight=' + this.y45_1 : '') + (this.t45_1.equals(PathVerb_LINE_getInstance()) ? ', closeLine=' + this.z45_1 : '') + (!this.t45_1.equals(PathVerb_DONE_getInstance()) ? ', closedContour=' + this.a46_1 : '') + ')';
  };
  protoOf(PathSegment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PathSegment))
      return false;
    return this.t45_1.equals(other.t45_1) && (!this.t45_1.equals(PathVerb_DONE_getInstance()) ? equals(this.u45_1, other.u45_1) : true) && (this.t45_1.equals(PathVerb_LINE_getInstance()) || this.t45_1.equals(PathVerb_QUAD_getInstance()) || this.t45_1.equals(PathVerb_CONIC_getInstance()) || this.t45_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.v45_1, other.v45_1) : true) && (this.t45_1.equals(PathVerb_QUAD_getInstance()) || this.t45_1.equals(PathVerb_CONIC_getInstance()) || this.t45_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.w45_1, other.w45_1) : true) && (this.t45_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.x45_1, other.x45_1) : true) && (this.t45_1.equals(PathVerb_CONIC_getInstance()) ? compareTo(other.y45_1, this.y45_1) === 0 : true) && (this.t45_1.equals(PathVerb_LINE_getInstance()) ? this.z45_1 === other.z45_1 : true) && (!this.t45_1.equals(PathVerb_DONE_getInstance()) ? this.a46_1 === other.a46_1 : true);
  };
  protoOf(PathSegment).hashCode = function () {
    var tmp;
    switch (this.t45_1.m2_1) {
      case 6:
        tmp = objectHashes([this.t45_1]);
        break;
      case 0:
        tmp = objectHashes([this.t45_1, this.u45_1, this.a46_1]);
        break;
      case 1:
        tmp = objectHashes([this.t45_1, this.u45_1, this.v45_1, this.z45_1, this.a46_1]);
        break;
      case 2:
        tmp = objectHashes([this.t45_1, this.u45_1, this.v45_1, this.w45_1, this.a46_1]);
        break;
      case 3:
        tmp = objectHashes([this.t45_1, this.u45_1, this.v45_1, this.w45_1, this.y45_1, this.a46_1]);
        break;
      case 4:
        tmp = objectHashes([this.t45_1, this.u45_1, this.v45_1, this.w45_1, this.x45_1, this.a46_1]);
        break;
      default:
        throw RuntimeException_init_$Create$('Unreachable');
    }
    return tmp;
  };
  function objectHashes(args) {
    return contentHashCode_0(args);
  }
  function Companion_28() {
    Companion_instance_28 = this;
    Companion_instance_60.d3v();
  }
  protoOf(Companion_28).n45 = function (path, forceClose) {
    var tmp;
    try {
      var i = new PathSegmentIterator(path, org_jetbrains_skia_PathSegmentIterator__1nMake(getPtr(path), forceClose));
      i.e46_1 = nextSegment(i);
      tmp = i;
    }finally {
      reachabilityBarrier(path);
    }
    return tmp;
  };
  var Companion_instance_28;
  function Companion_getInstance_28() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function nextSegment($this) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(10);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var handle = $this$interopScope.v42(result);
        org_jetbrains_skia_PathSegmentIterator__1nNext($this.a3v_1, handle);
        $this$interopScope.g3x(handle, result);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    return pathSegmentFromIntArray(result);
  }
  function PathSegmentIterator(_path, ptr) {
    Companion_getInstance_28();
    Managed.call(this, ptr, org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer());
    this.d46_1 = _path;
    this.e46_1 = null;
    Stats_instance.x3u();
  }
  protoOf(PathSegmentIterator).k = function () {
    var tmp;
    try {
      var tmp0_safe_receiver = this.e46_1;
      if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t45_1, PathVerb_DONE_getInstance()))
        throw NoSuchElementException_init_$Create$();
      var res = this.e46_1;
      this.e46_1 = nextSegment(this);
      tmp = res;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathSegmentIterator).j = function () {
    var tmp0_safe_receiver = this.e46_1;
    return !equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t45_1, PathVerb_DONE_getInstance());
  };
  protoOf(PathSegmentIterator).q3 = function () {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  function pathSegmentFromIntArray(points) {
    var context = last(points);
    var verb = context & 7;
    var isClosedBit = context >> 7 & 1;
    var isClosedLineBit = context >> 6 & 1;
    var isClosed = !(isClosedBit === 0);
    var tmp;
    switch (values_5()[verb].m2_1) {
      case 0:
      case 5:
        // Inline function 'kotlin.fromBits' call

        var bits = points[0];
        var tmp_0 = floatFromBits(bits);
        // Inline function 'kotlin.fromBits' call

        var bits_0 = points[1];
        var tmp$ret$1 = floatFromBits(bits_0);
        tmp = PathSegment_init_$Create$(verb, tmp_0, tmp$ret$1, isClosed);
        break;
      case 1:
        // Inline function 'kotlin.fromBits' call

        var bits_1 = points[0];
        var tmp_1 = floatFromBits(bits_1);
        // Inline function 'kotlin.fromBits' call

        var bits_2 = points[1];
        var tmp_2 = floatFromBits(bits_2);
        // Inline function 'kotlin.fromBits' call

        var bits_3 = points[2];
        var tmp_3 = floatFromBits(bits_3);
        // Inline function 'kotlin.fromBits' call

        var bits_4 = points[3];
        var tmp$ret$5 = floatFromBits(bits_4);
        tmp = PathSegment_init_$Create$_0(tmp_1, tmp_2, tmp_3, tmp$ret$5, !(isClosedLineBit === 0), isClosed);
        break;
      case 2:
        // Inline function 'kotlin.fromBits' call

        var bits_5 = points[0];
        var tmp_4 = floatFromBits(bits_5);
        // Inline function 'kotlin.fromBits' call

        var bits_6 = points[1];
        var tmp_5 = floatFromBits(bits_6);
        // Inline function 'kotlin.fromBits' call

        var bits_7 = points[2];
        var tmp_6 = floatFromBits(bits_7);
        // Inline function 'kotlin.fromBits' call

        var bits_8 = points[3];
        var tmp_7 = floatFromBits(bits_8);
        // Inline function 'kotlin.fromBits' call

        var bits_9 = points[4];
        var tmp_8 = floatFromBits(bits_9);
        // Inline function 'kotlin.fromBits' call

        var bits_10 = points[5];
        var tmp$ret$11 = floatFromBits(bits_10);
        tmp = PathSegment_init_$Create$_1(tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp$ret$11, isClosed);
        break;
      case 3:
        // Inline function 'kotlin.fromBits' call

        var bits_11 = points[0];
        var tmp_9 = floatFromBits(bits_11);
        // Inline function 'kotlin.fromBits' call

        var bits_12 = points[1];
        var tmp_10 = floatFromBits(bits_12);
        // Inline function 'kotlin.fromBits' call

        var bits_13 = points[2];
        var tmp_11 = floatFromBits(bits_13);
        // Inline function 'kotlin.fromBits' call

        var bits_14 = points[3];
        var tmp_12 = floatFromBits(bits_14);
        // Inline function 'kotlin.fromBits' call

        var bits_15 = points[4];
        var tmp_13 = floatFromBits(bits_15);
        // Inline function 'kotlin.fromBits' call

        var bits_16 = points[5];
        var tmp_14 = floatFromBits(bits_16);
        // Inline function 'kotlin.fromBits' call

        var bits_17 = points[8];
        var tmp$ret$18 = floatFromBits(bits_17);
        tmp = PathSegment_init_$Create$_2(tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp$ret$18, isClosed);
        break;
      case 4:
        // Inline function 'kotlin.fromBits' call

        var bits_18 = points[0];
        var tmp_15 = floatFromBits(bits_18);
        // Inline function 'kotlin.fromBits' call

        var bits_19 = points[1];
        var tmp_16 = floatFromBits(bits_19);
        // Inline function 'kotlin.fromBits' call

        var bits_20 = points[2];
        var tmp_17 = floatFromBits(bits_20);
        // Inline function 'kotlin.fromBits' call

        var bits_21 = points[3];
        var tmp_18 = floatFromBits(bits_21);
        // Inline function 'kotlin.fromBits' call

        var bits_22 = points[4];
        var tmp_19 = floatFromBits(bits_22);
        // Inline function 'kotlin.fromBits' call

        var bits_23 = points[5];
        var tmp_20 = floatFromBits(bits_23);
        // Inline function 'kotlin.fromBits' call

        var bits_24 = points[6];
        var tmp_21 = floatFromBits(bits_24);
        // Inline function 'kotlin.fromBits' call

        var bits_25 = points[7];
        var tmp$ret$26 = floatFromBits(bits_25);
        tmp = PathSegment_init_$Create$_3(tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp$ret$26, isClosed);
        break;
      case 6:
        tmp = new PathSegment();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  var PathVerb_MOVE_instance;
  var PathVerb_LINE_instance;
  var PathVerb_QUAD_instance;
  var PathVerb_CONIC_instance;
  var PathVerb_CUBIC_instance;
  var PathVerb_CLOSE_instance;
  var PathVerb_DONE_instance;
  function values_5() {
    return [PathVerb_MOVE_getInstance(), PathVerb_LINE_getInstance(), PathVerb_QUAD_getInstance(), PathVerb_CONIC_getInstance(), PathVerb_CUBIC_getInstance(), PathVerb_CLOSE_getInstance(), PathVerb_DONE_getInstance()];
  }
  var PathVerb_entriesInitialized;
  function PathVerb_initEntries() {
    if (PathVerb_entriesInitialized)
      return Unit_instance;
    PathVerb_entriesInitialized = true;
    PathVerb_MOVE_instance = new PathVerb('MOVE', 0);
    PathVerb_LINE_instance = new PathVerb('LINE', 1);
    PathVerb_QUAD_instance = new PathVerb('QUAD', 2);
    PathVerb_CONIC_instance = new PathVerb('CONIC', 3);
    PathVerb_CUBIC_instance = new PathVerb('CUBIC', 4);
    PathVerb_CLOSE_instance = new PathVerb('CLOSE', 5);
    PathVerb_DONE_instance = new PathVerb('DONE', 6);
  }
  function PathVerb(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathVerb_MOVE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_MOVE_instance;
  }
  function PathVerb_LINE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_LINE_instance;
  }
  function PathVerb_QUAD_getInstance() {
    PathVerb_initEntries();
    return PathVerb_QUAD_instance;
  }
  function PathVerb_CONIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CONIC_instance;
  }
  function PathVerb_CUBIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CUBIC_instance;
  }
  function PathVerb_CLOSE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CLOSE_instance;
  }
  function PathVerb_DONE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_DONE_instance;
  }
  function Companion_29() {
    Companion_instance_29 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_29;
  function Companion_getInstance_29() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function Picture(ptr, managed) {
    Companion_getInstance_29();
    managed = managed === VOID ? true : managed;
    RefCnt_init_$Init$_0(ptr, managed, this);
  }
  function Companion_30() {
    Companion_instance_30 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_30;
  function Companion_getInstance_30() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function PictureRecorder_init_$Init$($this) {
    PictureRecorder.call($this, org_jetbrains_skia_PictureRecorder__1nMake());
    Stats_instance.x3u();
    return $this;
  }
  function PictureRecorder_init_$Create$() {
    return PictureRecorder_init_$Init$(objectCreate(protoOf(PictureRecorder)));
  }
  function _FinalizerHolder_11() {
    _FinalizerHolder_instance_11 = this;
    this.f46_1 = org_jetbrains_skia_PictureRecorder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_11;
  function _FinalizerHolder_getInstance_11() {
    if (_FinalizerHolder_instance_11 == null)
      new _FinalizerHolder_11();
    return _FinalizerHolder_instance_11;
  }
  function PictureRecorder(ptr) {
    Companion_getInstance_30();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_11().f46_1);
  }
  protoOf(PictureRecorder).i46 = function (bounds, bbh) {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = new Canvas(org_jetbrains_skia_PictureRecorder__1nBeginRecording(this.a3v_1, bounds.q3x_1, bounds.r3x_1, bounds.s3x_1, bounds.t3x_1, getPtr(bbh)), false, this);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PictureRecorder).j46 = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = new Picture(org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture(this.a3v_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PixelGeometry_UNKNOWN_instance;
  var PixelGeometry_RGB_H_instance;
  var PixelGeometry_BGR_H_instance;
  var PixelGeometry_RGB_V_instance;
  var PixelGeometry_BGR_V_instance;
  var PixelGeometry_entriesInitialized;
  function PixelGeometry_initEntries() {
    if (PixelGeometry_entriesInitialized)
      return Unit_instance;
    PixelGeometry_entriesInitialized = true;
    PixelGeometry_UNKNOWN_instance = new PixelGeometry('UNKNOWN', 0);
    PixelGeometry_RGB_H_instance = new PixelGeometry('RGB_H', 1);
    PixelGeometry_BGR_H_instance = new PixelGeometry('BGR_H', 2);
    PixelGeometry_RGB_V_instance = new PixelGeometry('RGB_V', 3);
    PixelGeometry_BGR_V_instance = new PixelGeometry('BGR_V', 4);
  }
  function PixelGeometry(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PixelGeometry_UNKNOWN_getInstance() {
    PixelGeometry_initEntries();
    return PixelGeometry_UNKNOWN_instance;
  }
  function Companion_31() {
    Companion_instance_31 = this;
    this.k46_1 = new Point(0.0, 0.0);
  }
  var Companion_instance_31;
  function Companion_getInstance_31() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function Point(x, y) {
    Companion_getInstance_31();
    this.l46_1 = x;
    this.m46_1 = y;
  }
  protoOf(Point).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point))
      return false;
    if (!(compareTo(this.l46_1, other.l46_1) === 0))
      return false;
    return compareTo(this.m46_1, other.m46_1) === 0;
  };
  protoOf(Point).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.l46_1) | 0;
    result = imul(result, PRIME) + toBits(this.m46_1) | 0;
    return result;
  };
  protoOf(Point).toString = function () {
    return 'Point(_x=' + this.l46_1 + ', _y=' + this.m46_1 + ')';
  };
  function Point3(x, y, z) {
    this.n46_1 = x;
    this.o46_1 = y;
    this.p46_1 = z;
  }
  protoOf(Point3).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point3))
      return false;
    if (!(compareTo(this.n46_1, other.n46_1) === 0))
      return false;
    if (!(compareTo(this.o46_1, other.o46_1) === 0))
      return false;
    return compareTo(this.p46_1, other.p46_1) === 0;
  };
  protoOf(Point3).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.n46_1) | 0;
    result = imul(result, PRIME) + toBits(this.o46_1) | 0;
    result = imul(result, PRIME) + toBits(this.p46_1) | 0;
    return result;
  };
  protoOf(Point3).toString = function () {
    return 'Point3(_x=' + this.n46_1 + ', _y=' + this.o46_1 + ', _z=' + this.p46_1 + ')';
  };
  function Companion_32() {
  }
  protoOf(Companion_32).q46 = function (l, t, r, b, xRad, yRad) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([xRad, yRad]);
    return new RRect(l, t, r, b, tmp$ret$0);
  };
  protoOf(Companion_32).r46 = function (l, t, r, b, radii) {
    return new RRect(l, t, r, b, radii);
  };
  var Companion_instance_32;
  function Companion_getInstance_32() {
    return Companion_instance_32;
  }
  function RRect(l, t, r, b, radii) {
    Rect.call(this, l, t, r, b);
    this.a3y_1 = radii;
  }
  protoOf(RRect).toString = function () {
    return 'RRect(_left=' + this.q3x_1 + ', _top=' + this.r3x_1 + ', _right=' + this.s3x_1 + ', _bottom=' + this.t3x_1 + ', _radii=' + joinToString(this.a3y_1) + ')';
  };
  protoOf(RRect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof RRect))
      return false;
    if (!protoOf(Rect).equals.call(this, other))
      return false;
    var tmp;
    if (this.a3y_1.length === other.a3y_1.length) {
      tmp = contentEquals(this.a3y_1, other.a3y_1);
    } else {
      tmp = contentEquals(normalizeRadii(this.a3y_1), normalizeRadii(other.a3y_1));
    }
    return tmp;
  };
  protoOf(RRect).hashCode = function () {
    var PRIME = 59;
    var result = protoOf(Rect).hashCode.call(this);
    result = imul(result, PRIME) + contentHashCode(this.a3y_1) | 0;
    return result;
  };
  function normalizeRadii(radii) {
    var tmp;
    switch (radii.length) {
      case 0:
        var tmp_0 = 0;
        var tmp_1 = new Float32Array(8);
        while (tmp_0 < 8) {
          tmp_1[tmp_0] = 0.0;
          tmp_0 = tmp_0 + 1 | 0;
        }

        tmp = tmp_1;
        break;
      case 1:
        var tmp_2 = 0;
        var tmp_3 = new Float32Array(8);
        while (tmp_2 < 8) {
          tmp_3[tmp_2] = radii[0];
          tmp_2 = tmp_2 + 1 | 0;
        }

        tmp = tmp_3;
        break;
      case 2:
        var tmp_4 = 0;
        var tmp_5 = new Float32Array(8);
        while (tmp_4 < 8) {
          var tmp_6 = tmp_4;
          tmp_5[tmp_6] = radii[tmp_6 % 2 | 0];
          tmp_4 = tmp_4 + 1 | 0;
        }

        tmp = tmp_5;
        break;
      case 4:
        var tmp_7 = 0;
        var tmp_8 = new Float32Array(8);
        while (tmp_7 < 8) {
          var tmp_9 = tmp_7;
          tmp_8[tmp_9] = radii[tmp_9 / 2 | 0];
          tmp_7 = tmp_7 + 1 | 0;
        }

        tmp = tmp_8;
        break;
      case 8:
        tmp = radii;
        break;
      default:
        throw Error_init_$Create$('illegal radii array');
    }
    return tmp;
  }
  function Rect$Companion$fromInteropPointerNullable$lambda($result, $block) {
    return function ($this$fromInteropPointer, it) {
      $result._v = $block(it);
      return Unit_instance;
    };
  }
  function Companion_33() {
  }
  protoOf(Companion_33).s46 = function (l, t, r, b) {
    return new Rect(l, t, r, b);
  };
  protoOf(Companion_33).t46 = function (w, h) {
    return new Rect(0.0, 0.0, w, h);
  };
  protoOf(Companion_33).u46 = function (l, t, w, h) {
    return new Rect(l, t, l + w, t + h);
  };
  protoOf(Companion_33).u44 = function (block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Float32Array(4);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var handle = $this$interopScope.p41(result);
        block($this$interopScope, handle);
        $this$interopScope.q41(handle, result);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    var result_0 = result;
    return new Rect(result_0[0], result_0[1], result_0[2], result_0[3]);
  };
  protoOf(Companion_33).v46 = function (block) {
    var result = {_v: true};
    var rect = this.u44(Rect$Companion$fromInteropPointerNullable$lambda(result, block));
    var tmp;
    if (result._v) {
      tmp = rect;
    } else {
      tmp = null;
    }
    return tmp;
  };
  var Companion_instance_33;
  function Companion_getInstance_33() {
    return Companion_instance_33;
  }
  function Rect(left, top, right, bottom) {
    this.q3x_1 = left;
    this.r3x_1 = top;
    this.s3x_1 = right;
    this.t3x_1 = bottom;
  }
  protoOf(Rect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Rect))
      return false;
    if (!(compareTo(this.q3x_1, other.q3x_1) === 0))
      return false;
    if (!(compareTo(this.r3x_1, other.r3x_1) === 0))
      return false;
    if (!(compareTo(this.s3x_1, other.s3x_1) === 0))
      return false;
    return compareTo(this.t3x_1, other.t3x_1) === 0;
  };
  protoOf(Rect).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.q3x_1) | 0;
    result = imul(result, PRIME) + toBits(this.r3x_1) | 0;
    result = imul(result, PRIME) + toBits(this.s3x_1) | 0;
    result = imul(result, PRIME) + toBits(this.t3x_1) | 0;
    return result;
  };
  protoOf(Rect).toString = function () {
    return 'Rect(_left=' + this.q3x_1 + ', _top=' + this.r3x_1 + ', _right=' + this.s3x_1 + ', _bottom=' + this.t3x_1 + ')';
  };
  function Companion_34() {
    Companion_instance_34 = this;
    this.w46_1 = new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
    this.x46_1 = new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance());
    this.y46_1 = new CubicResampler(0.33333334, 0.33333334);
    this.z46_1 = new CubicResampler(0.0, 0.5);
  }
  var Companion_instance_34;
  function Companion_getInstance_34() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function Companion_35() {
    Companion_instance_35 = this;
    Companion_instance_60.d3v();
  }
  protoOf(Companion_35).a47 = function (x0, y0, x1, y1, colors, positions, style) {
    // Inline function 'kotlin.require' call
    if (!(positions == null || colors.length === positions.length)) {
      var message = 'colors.length ' + colors.length + '!= positions.length ' + ensureNotNull(positions).length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Stats_instance.x3u();
    var tmp$ret$3;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        tmp$ret$3 = org_jetbrains_skia_Shader__1nMakeLinearGradient(x0, y0, x1, y1, $this$interopScope.f3x(colors), $this$interopScope.b3y(positions), colors.length, style.o42_1.m2_1, style.r42(), $this$interopScope.b3y(style.s42()));
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    return new Shader(tmp$ret$3);
  };
  protoOf(Companion_35).b47 = function (x, y, r, colors, positions, style) {
    // Inline function 'kotlin.require' call
    if (!(positions == null || colors.length === positions.length)) {
      var message = 'colors.length ' + colors.length + '!= positions.length ' + ensureNotNull(positions).length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Stats_instance.x3u();
    var tmp$ret$3;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        tmp$ret$3 = org_jetbrains_skia_Shader__1nMakeRadialGradient(x, y, r, $this$interopScope.f3x(colors), $this$interopScope.b3y(positions), colors.length, style.o42_1.m2_1, style.r42(), $this$interopScope.b3y(style.s42()));
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    return new Shader(tmp$ret$3);
  };
  protoOf(Companion_35).c47 = function (x, y, colors, positions) {
    return this.d47(x, y, 0.0, 360.0, colors, positions, Companion_getInstance_17().n42_1);
  };
  protoOf(Companion_35).d47 = function (x, y, startAngle, endAngle, colors, positions, style) {
    // Inline function 'kotlin.require' call
    if (!(positions == null || colors.length === positions.length)) {
      var message = 'colors.length ' + colors.length + '!= positions.length ' + ensureNotNull(positions).length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Stats_instance.x3u();
    var tmp$ret$3;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        tmp$ret$3 = org_jetbrains_skia_Shader__1nMakeSweepGradient(x, y, startAngle, endAngle, $this$interopScope.f3x(colors), $this$interopScope.b3y(positions), colors.length, style.o42_1.m2_1, style.r42(), $this$interopScope.b3y(style.s42()));
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    return new Shader(tmp$ret$3);
  };
  var Companion_instance_35;
  function Companion_getInstance_35() {
    if (Companion_instance_35 == null)
      new Companion_35();
    return Companion_instance_35;
  }
  function Shader(ptr) {
    Companion_getInstance_35();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(Shader).g47 = function (localMatrix) {
    var tmp;
    try {
      Stats_instance.x3u();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          tmp$ret$1 = org_jetbrains_skia_Shader__1nMakeWithLocalMatrix(this.a3v_1, $this$interopScope.b3y(localMatrix.h3y_1));
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
          }
        }
      }
      tmp = new Shader(tmp$ret$1);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(localMatrix);
    }
    return tmp;
  };
  function ShadowUtils() {
    ShadowUtils_instance = this;
    Companion_instance_60.d3v();
  }
  protoOf(ShadowUtils).h47 = function (canvas, path, zPlaneParams, lightPos, lightRadius, ambientColor, spotColor, transparentOccluder, geometricOnly) {
    Stats_instance.x3u();
    var flags = 0;
    if (transparentOccluder)
      flags = flags | 1;
    if (geometricOnly)
      flags = flags | 2;
    try {
      org_jetbrains_skia_ShadowUtils__1nDrawShadow(getPtr(canvas), getPtr(path), zPlaneParams.n46_1, zPlaneParams.o46_1, zPlaneParams.p46_1, lightPos.n46_1, lightPos.o46_1, lightPos.p46_1, lightRadius, ambientColor, spotColor, flags);
    }finally {
      reachabilityBarrier(canvas);
      reachabilityBarrier(path);
    }
  };
  var ShadowUtils_instance;
  function ShadowUtils_getInstance() {
    if (ShadowUtils_instance == null)
      new ShadowUtils();
    return ShadowUtils_instance;
  }
  function ArrayDecoder(ptr, disposePtr) {
    this.i47_1 = ptr;
    this.j47_1 = disposePtr;
  }
  protoOf(ArrayDecoder).uz = function () {
    org_jetbrains_skia_StdVectorDecoder__1nDisposeArray(this.i47_1, this.j47_1);
  };
  protoOf(ArrayDecoder).k47 = function (index) {
    return org_jetbrains_skia_StdVectorDecoder__1nReleaseElement(this.i47_1, index);
  };
  protoOf(ArrayDecoder).l = function () {
    return org_jetbrains_skia_StdVectorDecoder__1nGetArraySize(this.i47_1);
  };
  function Companion_36() {
    Companion_instance_36 = this;
    Companion_instance_60.d3v();
  }
  protoOf(Companion_36).l47 = function (context, rt, origin, colorFormat, colorSpace, surfaceProps) {
    var tmp;
    try {
      Stats_instance.x3u();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          var tmp_0 = getPtr(context);
          var tmp_1 = getPtr(rt);
          var tmp_2 = getPtr(colorSpace);
          tmp$ret$1 = org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget(tmp_0, tmp_1, origin.m2_1, colorFormat.m2_1, tmp_2, $this$interopScope.f3x(surfaceProps == null ? null : surfaceProps.m47()));
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
          }
        }
      }
      var ptr = tmp$ret$1;
      tmp = ptr === Companion_instance_61.f3v() ? null : Surface_init_$Create$_0(ptr, context, rt);
    }finally {
      reachabilityBarrier(context);
      reachabilityBarrier(rt);
      reachabilityBarrier(colorSpace);
    }
    return tmp;
  };
  protoOf(Companion_36).n47 = function (width, height) {
    Stats_instance.x3u();
    var ptr = org_jetbrains_skia_Surface__1nMakeRasterN32Premul(width, height);
    // Inline function 'kotlin.require' call
    if (!!(ptr === Companion_instance_61.f3v())) {
      var message = 'Failed Surface.makeRasterN32Premul(' + width + ', ' + height + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return Surface_init_$Create$(ptr);
  };
  var Companion_instance_36;
  function Companion_getInstance_36() {
    if (Companion_instance_36 == null)
      new Companion_36();
    return Companion_instance_36;
  }
  function Surface_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    Surface.call($this);
    $this.q47_1 = null;
    $this.r47_1 = null;
    return $this;
  }
  function Surface_init_$Create$(ptr) {
    return Surface_init_$Init$(ptr, objectCreate(protoOf(Surface)));
  }
  function Surface_init_$Init$_0(ptr, context, renderTarget, $this) {
    RefCnt_init_$Init$(ptr, $this);
    Surface.call($this);
    $this.q47_1 = context;
    $this.r47_1 = renderTarget;
    return $this;
  }
  function Surface_init_$Create$_0(ptr, context, renderTarget) {
    return Surface_init_$Init$_0(ptr, context, renderTarget, objectCreate(protoOf(Surface)));
  }
  protoOf(Surface).s47 = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      var ptr = org_jetbrains_skia_Surface__1nGetCanvas(this.a3v_1);
      var tmp_0;
      if (ptr === Companion_instance_61.f3v()) {
        throw IllegalArgumentException_init_$Create$_0();
      } else {
        tmp_0 = new Canvas(ptr, false, this);
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Surface).t47 = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = new Image(org_jetbrains_skia_Surface__1nMakeImageSnapshot(this.a3v_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Surface).u47 = function () {
    var tmp0_safe_receiver = this.q47_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.b40(this);
    }
  };
  function Surface() {
    Companion_getInstance_36();
  }
  var SurfaceColorFormat_UNKNOWN_instance;
  var SurfaceColorFormat_ALPHA_8_instance;
  var SurfaceColorFormat_RGB_565_instance;
  var SurfaceColorFormat_ARGB_4444_instance;
  var SurfaceColorFormat_RGBA_8888_instance;
  var SurfaceColorFormat_RGB_888x_instance;
  var SurfaceColorFormat_BGRA_8888_instance;
  var SurfaceColorFormat_RGBA_1010102_instance;
  var SurfaceColorFormat_RGB_101010x_instance;
  var SurfaceColorFormat_GRAY_8_instance;
  var SurfaceColorFormat_RGBA_F16_NORM_instance;
  var SurfaceColorFormat_RGBA_F16_instance;
  var SurfaceColorFormat_RGBA_F32_instance;
  var SurfaceColorFormat_R8G8_UNORM_instance;
  var SurfaceColorFormat_A16_FLOAT_instance;
  var SurfaceColorFormat_R16G16_FLOAT_instance;
  var SurfaceColorFormat_A16_UNORM_instance;
  var SurfaceColorFormat_R16G16_UNORM_instance;
  var SurfaceColorFormat_R16G16B16A16_UNORM_instance;
  var SurfaceColorFormat_entriesInitialized;
  function SurfaceColorFormat_initEntries() {
    if (SurfaceColorFormat_entriesInitialized)
      return Unit_instance;
    SurfaceColorFormat_entriesInitialized = true;
    SurfaceColorFormat_UNKNOWN_instance = new SurfaceColorFormat('UNKNOWN', 0);
    SurfaceColorFormat_ALPHA_8_instance = new SurfaceColorFormat('ALPHA_8', 1);
    SurfaceColorFormat_RGB_565_instance = new SurfaceColorFormat('RGB_565', 2);
    SurfaceColorFormat_ARGB_4444_instance = new SurfaceColorFormat('ARGB_4444', 3);
    SurfaceColorFormat_RGBA_8888_instance = new SurfaceColorFormat('RGBA_8888', 4);
    SurfaceColorFormat_RGB_888x_instance = new SurfaceColorFormat('RGB_888x', 5);
    SurfaceColorFormat_BGRA_8888_instance = new SurfaceColorFormat('BGRA_8888', 6);
    SurfaceColorFormat_RGBA_1010102_instance = new SurfaceColorFormat('RGBA_1010102', 7);
    SurfaceColorFormat_RGB_101010x_instance = new SurfaceColorFormat('RGB_101010x', 8);
    SurfaceColorFormat_GRAY_8_instance = new SurfaceColorFormat('GRAY_8', 9);
    SurfaceColorFormat_RGBA_F16_NORM_instance = new SurfaceColorFormat('RGBA_F16_NORM', 10);
    SurfaceColorFormat_RGBA_F16_instance = new SurfaceColorFormat('RGBA_F16', 11);
    SurfaceColorFormat_RGBA_F32_instance = new SurfaceColorFormat('RGBA_F32', 12);
    SurfaceColorFormat_R8G8_UNORM_instance = new SurfaceColorFormat('R8G8_UNORM', 13);
    SurfaceColorFormat_A16_FLOAT_instance = new SurfaceColorFormat('A16_FLOAT', 14);
    SurfaceColorFormat_R16G16_FLOAT_instance = new SurfaceColorFormat('R16G16_FLOAT', 15);
    SurfaceColorFormat_A16_UNORM_instance = new SurfaceColorFormat('A16_UNORM', 16);
    SurfaceColorFormat_R16G16_UNORM_instance = new SurfaceColorFormat('R16G16_UNORM', 17);
    SurfaceColorFormat_R16G16B16A16_UNORM_instance = new SurfaceColorFormat('R16G16B16A16_UNORM', 18);
  }
  function SurfaceColorFormat(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceColorFormat_RGBA_8888_getInstance() {
    SurfaceColorFormat_initEntries();
    return SurfaceColorFormat_RGBA_8888_instance;
  }
  var SurfaceOrigin_TOP_LEFT_instance;
  var SurfaceOrigin_BOTTOM_LEFT_instance;
  var SurfaceOrigin_entriesInitialized;
  function SurfaceOrigin_initEntries() {
    if (SurfaceOrigin_entriesInitialized)
      return Unit_instance;
    SurfaceOrigin_entriesInitialized = true;
    SurfaceOrigin_TOP_LEFT_instance = new SurfaceOrigin('TOP_LEFT', 0);
    SurfaceOrigin_BOTTOM_LEFT_instance = new SurfaceOrigin('BOTTOM_LEFT', 1);
  }
  function SurfaceOrigin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceOrigin_BOTTOM_LEFT_getInstance() {
    SurfaceOrigin_initEntries();
    return SurfaceOrigin_BOTTOM_LEFT_instance;
  }
  function _getPixelGeometryOrdinal($this) {
    return $this.i3x_1.m2_1;
  }
  function SurfaceProps(isDeviceIndependentFonts, pixelGeometry) {
    isDeviceIndependentFonts = isDeviceIndependentFonts === VOID ? false : isDeviceIndependentFonts;
    pixelGeometry = pixelGeometry === VOID ? PixelGeometry_UNKNOWN_getInstance() : pixelGeometry;
    this.h3x_1 = isDeviceIndependentFonts;
    this.i3x_1 = pixelGeometry;
  }
  protoOf(SurfaceProps).j3x = function () {
    return 0 | (this.h3x_1 ? 1 : 0);
  };
  protoOf(SurfaceProps).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SurfaceProps))
      return false;
    if (!(this.h3x_1 === other.h3x_1))
      return false;
    return this.i3x_1.equals(other.i3x_1);
  };
  protoOf(SurfaceProps).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.h3x_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.i3x_1.hashCode() | 0;
    return result;
  };
  protoOf(SurfaceProps).toString = function () {
    return 'SurfaceProps(_deviceIndependentFonts=' + this.h3x_1 + ', _pixelGeometry=' + this.i3x_1.toString() + ')';
  };
  protoOf(SurfaceProps).m47 = function () {
    // Inline function 'kotlin.intArrayOf' call
    return new Int32Array([this.j3x(), _getPixelGeometryOrdinal(this)]);
  };
  function Companion_37() {
    Companion_instance_37 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_37;
  function Companion_getInstance_37() {
    if (Companion_instance_37 == null)
      new Companion_37();
    return Companion_instance_37;
  }
  function Typeface(ptr) {
    Companion_getInstance_37();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(Typeface).x47 = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_Typeface__1nGetFontStyle(this.a3v_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).y47 = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_Typeface__1nGetUniqueId(this.a3v_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).b3v = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Typeface__1nEquals(this.a3v_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Typeface).z47 = function (variations, collectionIndex) {
    var tmp;
    try {
      if (variations.length === 0)
        return this;
      Stats_instance.x3u();
      // Inline function 'kotlin.collections.flatMap' call
      var tmp0 = asList(variations);
      // Inline function 'kotlin.collections.flatMapTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var list = listOf([element.k42_1, toRawBits(element.l42_1)]);
        addAll(destination, list);
      }
      var variationsData = toIntArray(destination);
      var tmp$ret$4;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0_0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0_0 + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          tmp$ret$4 = org_jetbrains_skia_Typeface__1nMakeClone(this.a3v_1, $this$interopScope.f3x(variationsData), imul(2, variations.length), collectionIndex);
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
          }
        }
      }
      var ptr = tmp$ret$4;
      // Inline function 'kotlin.require' call
      if (!!(ptr === Companion_instance_61.f3v())) {
        var message = 'Failed to clone Typeface ' + this.toString() + ' with ' + toString(variations);
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = new Typeface(ptr);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).a48 = function (variations, collectionIndex, $super) {
    collectionIndex = collectionIndex === VOID ? 0 : collectionIndex;
    return $super === VOID ? this.z47(variations, collectionIndex) : $super.z47.call(this, variations, collectionIndex);
  };
  protoOf(Typeface).b48 = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      // Inline function 'org.jetbrains.skia.impl.withStringResult' call
      var tmp$ret$0 = org_jetbrains_skia_Typeface__1nGetFamilyName(this.a3v_1);
      // Inline function 'org.jetbrains.skia.impl.use' call
      var this_0 = new ManagedString(tmp$ret$0);
      var tmp_0;
      try {
        tmp_0 = this_0.toString();
      }finally {
        this_0.a2e();
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).toString = function () {
    return "Typeface(familyName='" + this.b48() + "', fontStyle=" + this.x47().toString() + ', uniqueId=' + this.y47() + ')';
  };
  function Companion_38() {
    Companion_instance_38 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_38;
  function Companion_getInstance_38() {
    if (Companion_instance_38 == null)
      new Companion_38();
    return Companion_instance_38;
  }
  function _FinalizerHolder_12() {
    _FinalizerHolder_instance_12 = this;
    this.c48_1 = org_jetbrains_skia_U16String__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_12;
  function _FinalizerHolder_getInstance_12() {
    if (_FinalizerHolder_instance_12 == null)
      new _FinalizerHolder_12();
    return _FinalizerHolder_instance_12;
  }
  function U16String(ptr) {
    Companion_getInstance_38();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_12().c48_1);
  }
  function CharProperties() {
    CharProperties_instance = this;
    Companion_instance_60.d3v();
    this.d48_1 = 0;
    this.e48_1 = 0;
    this.f48_1 = 1;
    this.g48_1 = 2;
    this.h48_1 = 3;
    this.i48_1 = 4;
    this.j48_1 = 5;
    this.k48_1 = 6;
    this.l48_1 = 7;
    this.m48_1 = 8;
    this.n48_1 = 9;
    this.o48_1 = 10;
    this.p48_1 = 11;
    this.q48_1 = 12;
    this.r48_1 = 13;
    this.s48_1 = 14;
    this.t48_1 = 15;
    this.u48_1 = 16;
    this.v48_1 = 17;
    this.w48_1 = 18;
    this.x48_1 = 19;
    this.y48_1 = 20;
    this.z48_1 = 21;
    this.a49_1 = 22;
    this.b49_1 = 23;
    this.c49_1 = 24;
    this.d49_1 = 25;
    this.e49_1 = 26;
    this.f49_1 = 27;
    this.g49_1 = 28;
    this.h49_1 = 29;
    this.i49_1 = 30;
    this.j49_1 = 31;
    this.k49_1 = 32;
    this.l49_1 = 33;
    this.m49_1 = 34;
    this.n49_1 = 35;
    this.o49_1 = 36;
    this.p49_1 = 37;
    this.q49_1 = 38;
    this.r49_1 = 39;
    this.s49_1 = 40;
    this.t49_1 = 41;
    this.u49_1 = 42;
    this.v49_1 = 43;
    this.w49_1 = 44;
    this.x49_1 = 45;
    this.y49_1 = 46;
    this.z49_1 = 47;
    this.a4a_1 = 48;
    this.b4a_1 = 49;
    this.c4a_1 = 50;
    this.d4a_1 = 51;
    this.e4a_1 = 52;
    this.f4a_1 = 53;
    this.g4a_1 = 54;
    this.h4a_1 = 55;
    this.i4a_1 = 56;
    this.j4a_1 = 57;
    this.k4a_1 = 58;
    this.l4a_1 = 59;
    this.m4a_1 = 60;
    this.n4a_1 = 61;
    this.o4a_1 = 62;
    this.p4a_1 = 63;
    this.q4a_1 = 64;
    this.r4a_1 = 4096;
    this.s4a_1 = 4096;
    this.t4a_1 = 4097;
    this.u4a_1 = 4098;
    this.v4a_1 = 4099;
    this.w4a_1 = 4100;
    this.x4a_1 = 4101;
    this.y4a_1 = 4102;
    this.z4a_1 = 4103;
    this.a4b_1 = 4104;
    this.b4b_1 = 4105;
    this.c4b_1 = 4106;
    this.d4b_1 = 4107;
    this.e4b_1 = 4108;
    this.f4b_1 = 4109;
    this.g4b_1 = 4110;
    this.h4b_1 = 4111;
    this.i4b_1 = 4112;
    this.j4b_1 = 4113;
    this.k4b_1 = 4114;
    this.l4b_1 = 4115;
    this.m4b_1 = 4116;
    this.n4b_1 = 4117;
    this.o4b_1 = 4118;
    this.p4b_1 = 4119;
    this.q4b_1 = 4120;
    this.r4b_1 = 8192;
    this.s4b_1 = 8192;
    this.t4b_1 = 12288;
    this.u4b_1 = 12288;
    this.v4b_1 = 16384;
    this.w4b_1 = 16384;
    this.x4b_1 = 16385;
    this.y4b_1 = 16386;
    this.z4b_1 = 16388;
    this.a4c_1 = 16389;
    this.b4c_1 = 16390;
    this.c4c_1 = 16391;
    this.d4c_1 = 16392;
    this.e4c_1 = 16393;
    this.f4c_1 = 16394;
    this.g4c_1 = 16396;
    this.h4c_1 = 16397;
    this.i4c_1 = 28672;
    this.j4c_1 = 28672;
    this.k4c_1 = -1;
  }
  protoOf(CharProperties).l4c = function (codePoint, property) {
    Stats_instance.x3u();
    return org_jetbrains_skia_icu_Unicode__1nCodePointHasBinaryProperty(codePoint, property);
  };
  var CharProperties_instance;
  function CharProperties_getInstance() {
    if (CharProperties_instance == null)
      new CharProperties();
    return CharProperties_instance;
  }
  function CharDirection() {
    CharDirection_instance = this;
    Companion_instance_60.d3v();
    this.m4c_1 = 0;
    this.n4c_1 = 1;
    this.o4c_1 = 2;
    this.p4c_1 = 3;
    this.q4c_1 = 4;
    this.r4c_1 = 5;
    this.s4c_1 = 6;
    this.t4c_1 = 7;
    this.u4c_1 = 8;
    this.v4c_1 = 9;
    this.w4c_1 = 10;
    this.x4c_1 = 11;
    this.y4c_1 = 12;
    this.z4c_1 = 13;
    this.a4d_1 = 14;
    this.b4d_1 = 15;
    this.c4d_1 = 16;
    this.d4d_1 = 17;
    this.e4d_1 = 18;
    this.f4d_1 = 19;
    this.g4d_1 = 20;
    this.h4d_1 = 21;
    this.i4d_1 = 22;
  }
  protoOf(CharDirection).j4d = function (codePoint) {
    Stats_instance.x3u();
    return org_jetbrains_skia_icu_Unicode__1nCharDirection(codePoint);
  };
  var CharDirection_instance;
  function CharDirection_getInstance() {
    if (CharDirection_instance == null)
      new CharDirection();
    return CharDirection_instance;
  }
  function getPtr(n) {
    var tmp1_elvis_lhs = n == null ? null : n.a3v_1;
    return tmp1_elvis_lhs == null ? Companion_instance_61.f3v() : tmp1_elvis_lhs;
  }
  var Affinity_UPSTREAM_instance;
  var Affinity_DOWNSTREAM_instance;
  var Affinity_entriesInitialized;
  function Affinity_initEntries() {
    if (Affinity_entriesInitialized)
      return Unit_instance;
    Affinity_entriesInitialized = true;
    Affinity_UPSTREAM_instance = new Affinity('UPSTREAM', 0);
    Affinity_DOWNSTREAM_instance = new Affinity('DOWNSTREAM', 1);
  }
  function Affinity(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Affinity_UPSTREAM_getInstance() {
    Affinity_initEntries();
    return Affinity_UPSTREAM_instance;
  }
  function Affinity_DOWNSTREAM_getInstance() {
    Affinity_initEntries();
    return Affinity_DOWNSTREAM_instance;
  }
  var Alignment_LEFT_instance;
  var Alignment_RIGHT_instance;
  var Alignment_CENTER_instance;
  var Alignment_JUSTIFY_instance;
  var Alignment_START_instance;
  var Alignment_END_instance;
  var Alignment_entriesInitialized;
  function Alignment_initEntries() {
    if (Alignment_entriesInitialized)
      return Unit_instance;
    Alignment_entriesInitialized = true;
    Alignment_LEFT_instance = new Alignment('LEFT', 0);
    Alignment_RIGHT_instance = new Alignment('RIGHT', 1);
    Alignment_CENTER_instance = new Alignment('CENTER', 2);
    Alignment_JUSTIFY_instance = new Alignment('JUSTIFY', 3);
    Alignment_START_instance = new Alignment('START', 4);
    Alignment_END_instance = new Alignment('END', 5);
  }
  function Alignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Alignment_LEFT_getInstance() {
    Alignment_initEntries();
    return Alignment_LEFT_instance;
  }
  function Alignment_RIGHT_getInstance() {
    Alignment_initEntries();
    return Alignment_RIGHT_instance;
  }
  function Alignment_CENTER_getInstance() {
    Alignment_initEntries();
    return Alignment_CENTER_instance;
  }
  function Alignment_JUSTIFY_getInstance() {
    Alignment_initEntries();
    return Alignment_JUSTIFY_instance;
  }
  function Alignment_START_getInstance() {
    Alignment_initEntries();
    return Alignment_START_instance;
  }
  function Alignment_END_getInstance() {
    Alignment_initEntries();
    return Alignment_END_instance;
  }
  var BaselineMode_ALPHABETIC_instance;
  var BaselineMode_IDEOGRAPHIC_instance;
  var BaselineMode_entriesInitialized;
  function BaselineMode_initEntries() {
    if (BaselineMode_entriesInitialized)
      return Unit_instance;
    BaselineMode_entriesInitialized = true;
    BaselineMode_ALPHABETIC_instance = new BaselineMode('ALPHABETIC', 0);
    BaselineMode_IDEOGRAPHIC_instance = new BaselineMode('IDEOGRAPHIC', 1);
  }
  function BaselineMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BaselineMode_ALPHABETIC_getInstance() {
    BaselineMode_initEntries();
    return BaselineMode_ALPHABETIC_instance;
  }
  var DecorationLineStyle_SOLID_instance;
  var DecorationLineStyle_DOUBLE_instance;
  var DecorationLineStyle_DOTTED_instance;
  var DecorationLineStyle_DASHED_instance;
  var DecorationLineStyle_WAVY_instance;
  var DecorationLineStyle_entriesInitialized;
  function DecorationLineStyle_initEntries() {
    if (DecorationLineStyle_entriesInitialized)
      return Unit_instance;
    DecorationLineStyle_entriesInitialized = true;
    DecorationLineStyle_SOLID_instance = new DecorationLineStyle('SOLID', 0);
    DecorationLineStyle_DOUBLE_instance = new DecorationLineStyle('DOUBLE', 1);
    DecorationLineStyle_DOTTED_instance = new DecorationLineStyle('DOTTED', 2);
    DecorationLineStyle_DASHED_instance = new DecorationLineStyle('DASHED', 3);
    DecorationLineStyle_WAVY_instance = new DecorationLineStyle('WAVY', 4);
  }
  function DecorationLineStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DecorationLineStyle_SOLID_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_SOLID_instance;
  }
  function DecorationLineStyle_DOUBLE_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_DOUBLE_instance;
  }
  function DecorationLineStyle_DOTTED_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_DOTTED_instance;
  }
  function DecorationLineStyle_DASHED_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_DASHED_instance;
  }
  function DecorationLineStyle_WAVY_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_WAVY_instance;
  }
  function Companion_39() {
    Companion_instance_39 = this;
    this.k4d_1 = new DecorationStyle(false, false, false, true, -16777216, DecorationLineStyle_SOLID_getInstance(), 1.0);
  }
  var Companion_instance_39;
  function Companion_getInstance_39() {
    if (Companion_instance_39 == null)
      new Companion_39();
    return Companion_instance_39;
  }
  function DecorationStyle(_underline, _overline, _lineThrough, _gaps, color, lineStyle, thicknessMultiplier) {
    Companion_getInstance_39();
    this.l4d_1 = _underline;
    this.m4d_1 = _overline;
    this.n4d_1 = _lineThrough;
    this.o4d_1 = _gaps;
    this.p4d_1 = color;
    this.q4d_1 = lineStyle;
    this.r4d_1 = thicknessMultiplier;
  }
  protoOf(DecorationStyle).s4d = function () {
    return this.q4d_1;
  };
  protoOf(DecorationStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof DecorationStyle))
      return false;
    if (!(this.l4d_1 === other.l4d_1))
      return false;
    if (!(this.m4d_1 === other.m4d_1))
      return false;
    if (!(this.n4d_1 === other.n4d_1))
      return false;
    if (!(this.o4d_1 === other.o4d_1))
      return false;
    if (!(this.p4d_1 === other.p4d_1))
      return false;
    if (!(compareTo(this.r4d_1, other.r4d_1) === 0))
      return false;
    return this.s4d().equals(other.s4d());
  };
  protoOf(DecorationStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.l4d_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.m4d_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.n4d_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.o4d_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.p4d_1 | 0;
    result = imul(result, PRIME) + toBits(this.r4d_1) | 0;
    result = imul(result, PRIME) + this.s4d().hashCode() | 0;
    return result;
  };
  protoOf(DecorationStyle).toString = function () {
    return 'DecorationStyle(_underline=' + this.l4d_1 + ', _overline=' + this.m4d_1 + ', _lineThrough=' + this.n4d_1 + ', _gaps=' + this.o4d_1 + ', _color=' + this.p4d_1 + ', _lineStyle=' + this.s4d().toString() + ', _thicknessMultiplier=' + this.r4d_1 + ')';
  };
  var Direction_RTL_instance;
  var Direction_LTR_instance;
  function values_6() {
    return [Direction_RTL_getInstance(), Direction_LTR_getInstance()];
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_RTL_instance = new Direction('RTL', 0);
    Direction_LTR_instance = new Direction('LTR', 1);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Direction_RTL_getInstance() {
    Direction_initEntries();
    return Direction_RTL_instance;
  }
  function Direction_LTR_getInstance() {
    Direction_initEntries();
    return Direction_LTR_instance;
  }
  function Companion_40() {
    Companion_instance_40 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_40;
  function Companion_getInstance_40() {
    if (Companion_instance_40 == null)
      new Companion_40();
    return Companion_instance_40;
  }
  function FontCollection_init_$Init$($this) {
    FontCollection.call($this, org_jetbrains_skia_paragraph_FontCollection__1nMake());
    Stats_instance.x3u();
    return $this;
  }
  function FontCollection_init_$Create$() {
    return FontCollection_init_$Init$(objectCreate(protoOf(FontCollection)));
  }
  function FontCollection(ptr) {
    Companion_getInstance_40();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(FontCollection).v4d = function (fontMgr) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager(this.a3v_1, getPtr(fontMgr), Companion_instance_61.f3v());
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).w4d = function (fontMgr) {
    return this.x4d(fontMgr, null);
  };
  protoOf(FontCollection).x4d = function (fontMgr, defaultFamilyName) {
    var tmp;
    try {
      Stats_instance.x3u();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager(this.a3v_1, getPtr(fontMgr), $this$interopScope.j3w(defaultFamilyName));
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).y4d = function (familyNames, style) {
    var tmp;
    try {
      Stats_instance.x3u();
      // Inline function 'org.jetbrains.skia.arrayDecoderScope' call
      var arrayDecoder = null;
      var tmp_0;
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
            access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
            var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
            var tmp_1 = this.a3v_1;
            var tmp_2 = $this$interopScope.z4d(familyNames);
            var tmp1_elvis_lhs = familyNames == null ? null : familyNames.length;
            tmp$ret$1 = org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces(tmp_1, tmp_2, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, style.x41_1);
            break $l$block;
          }finally {
            var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
            access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
            if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
              access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
            }
          }
        }
        arrayDecoder = new ArrayDecoder(tmp$ret$1, org_jetbrains_skia_impl_RefCnt__getFinalizer());
        var arrayDecoder_0 = arrayDecoder;
        // Inline function 'kotlin.collections.map' call
        var this_0 = until(0, arrayDecoder_0.l());
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
        var inductionVariable = this_0.y_1;
        var last = this_0.z_1;
        if (inductionVariable <= last)
          do {
            var item = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var i = item;
            var tmp$ret$3 = new Typeface(arrayDecoder_0.k47(i));
            destination.h(tmp$ret$3);
          }
           while (!(item === last));
        // Inline function 'kotlin.collections.toTypedArray' call
        tmp_0 = copyToArray(destination);
      }finally {
        var tmp0_safe_receiver = arrayDecoder;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.uz();
        }
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function FontRastrSettings(edging, hinting, subpixel) {
    this.a4e_1 = edging;
    this.b4e_1 = hinting;
    this.c4e_1 = subpixel;
  }
  protoOf(FontRastrSettings).toString = function () {
    return 'FontRastrSettings(edging=' + this.a4e_1.toString() + ', hinting=' + this.b4e_1.toString() + ', subpixel=' + this.c4e_1 + ')';
  };
  protoOf(FontRastrSettings).hashCode = function () {
    var result = this.a4e_1.hashCode();
    result = imul(result, 31) + this.b4e_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.c4e_1) | 0;
    return result;
  };
  protoOf(FontRastrSettings).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontRastrSettings))
      return false;
    var tmp0_other_with_cast = other instanceof FontRastrSettings ? other : THROW_CCE();
    if (!this.a4e_1.equals(tmp0_other_with_cast.a4e_1))
      return false;
    if (!this.b4e_1.equals(tmp0_other_with_cast.b4e_1))
      return false;
    if (!(this.c4e_1 === tmp0_other_with_cast.c4e_1))
      return false;
    return true;
  };
  var HeightMode_ALL_instance;
  var HeightMode_DISABLE_FIRST_ASCENT_instance;
  var HeightMode_DISABLE_LAST_DESCENT_instance;
  var HeightMode_DISABLE_ALL_instance;
  var HeightMode_entriesInitialized;
  function HeightMode_initEntries() {
    if (HeightMode_entriesInitialized)
      return Unit_instance;
    HeightMode_entriesInitialized = true;
    HeightMode_ALL_instance = new HeightMode('ALL', 0);
    HeightMode_DISABLE_FIRST_ASCENT_instance = new HeightMode('DISABLE_FIRST_ASCENT', 1);
    HeightMode_DISABLE_LAST_DESCENT_instance = new HeightMode('DISABLE_LAST_DESCENT', 2);
    HeightMode_DISABLE_ALL_instance = new HeightMode('DISABLE_ALL', 3);
  }
  function HeightMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function HeightMode_ALL_getInstance() {
    HeightMode_initEntries();
    return HeightMode_ALL_instance;
  }
  function HeightMode_DISABLE_FIRST_ASCENT_getInstance() {
    HeightMode_initEntries();
    return HeightMode_DISABLE_FIRST_ASCENT_instance;
  }
  function HeightMode_DISABLE_LAST_DESCENT_getInstance() {
    HeightMode_initEntries();
    return HeightMode_DISABLE_LAST_DESCENT_instance;
  }
  function HeightMode_DISABLE_ALL_getInstance() {
    HeightMode_initEntries();
    return HeightMode_DISABLE_ALL_instance;
  }
  function Companion_41() {
  }
  protoOf(Companion_41).d4e = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize(array);
  };
  protoOf(Companion_41).e4e = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray(array);
  };
  protoOf(Companion_41).f4e = function (array, index) {
    var intArray = new Int32Array(6);
    var doubleArray = new Float64Array(7);
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    $l$block_0: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var handle = $this$interopScope.v42(intArray);
        // Inline function 'org.jetbrains.skia.impl.withResult' call
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0_0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
            access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0_0 + 1 | 0);
            var $this$interopScope_0 = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
            var handle_0 = $this$interopScope_0.g4e(doubleArray);
            org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement(array, index, handle, handle_0);
            $this$interopScope_0.h4e(handle_0, doubleArray);
            break $l$block;
          }finally {
            var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
            access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
            if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
              access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
            }
          }
        }
        $this$interopScope.g3x(handle, intArray);
        break $l$block_0;
      }finally {
        var tmp1_0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    return new LineMetrics(intArray[0], intArray[1], intArray[2], intArray[3], !(intArray[4] === 0), doubleArray[0], doubleArray[1], doubleArray[2], doubleArray[3], doubleArray[4], doubleArray[5], doubleArray[6], intArray[5]);
  };
  var Companion_instance_41;
  function Companion_getInstance_41() {
    return Companion_instance_41;
  }
  function LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    this.i4e_1 = startIndex;
    this.j4e_1 = endIndex;
    this.k4e_1 = endExcludingWhitespaces;
    this.l4e_1 = endIncludingNewline;
    this.m4e_1 = isHardBreak;
    this.n4e_1 = ascent;
    this.o4e_1 = descent;
    this.p4e_1 = unscaledAscent;
    this.q4e_1 = height;
    this.r4e_1 = width;
    this.s4e_1 = left;
    this.t4e_1 = baseline;
    this.u4e_1 = lineNumber;
  }
  protoOf(LineMetrics).v4e = function () {
    return this.s4e_1 + this.r4e_1;
  };
  protoOf(LineMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof LineMetrics))
      return false;
    if (!(this.i4e_1 === other.i4e_1))
      return false;
    if (!(this.j4e_1 === other.j4e_1))
      return false;
    if (!(this.k4e_1 === other.k4e_1))
      return false;
    if (!(this.l4e_1 === other.l4e_1))
      return false;
    if (!(this.m4e_1 === other.m4e_1))
      return false;
    if (!(compareTo(this.n4e_1, other.n4e_1) === 0))
      return false;
    if (!(compareTo(this.o4e_1, other.o4e_1) === 0))
      return false;
    if (!(compareTo(this.p4e_1, other.p4e_1) === 0))
      return false;
    if (!(compareTo(this.q4e_1, other.q4e_1) === 0))
      return false;
    if (!(compareTo(this.r4e_1, other.r4e_1) === 0))
      return false;
    if (!(compareTo(this.s4e_1, other.s4e_1) === 0))
      return false;
    if (!(compareTo(this.t4e_1, other.t4e_1) === 0))
      return false;
    return this.u4e_1 === other.u4e_1;
  };
  protoOf(LineMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.i4e_1 | 0;
    result = imul(result, PRIME) + this.j4e_1 | 0;
    result = imul(result, PRIME) + this.k4e_1 | 0;
    result = imul(result, PRIME) + this.l4e_1 | 0;
    result = imul(result, PRIME) + (this.m4e_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + convertToInt(toBits_0(this.n4e_1)) | 0;
    result = imul(result, PRIME) + convertToInt(toBits_0(this.o4e_1)) | 0;
    result = imul(result, PRIME) + convertToInt(toBits_0(this.p4e_1)) | 0;
    result = imul(result, PRIME) + convertToInt(toBits_0(this.q4e_1)) | 0;
    result = imul(result, PRIME) + convertToInt(toBits_0(this.r4e_1)) | 0;
    result = imul(result, PRIME) + convertToInt(toBits_0(this.s4e_1)) | 0;
    result = imul(result, PRIME) + convertToInt(toBits_0(this.t4e_1)) | 0;
    result = imul(result, PRIME) + this.u4e_1 | 0;
    return result;
  };
  protoOf(LineMetrics).toString = function () {
    return 'LineMetrics(_startIndex=' + this.i4e_1 + ', _endIndex=' + this.j4e_1 + ', _endExcludingWhitespaces=' + this.k4e_1 + ', _endIncludingNewline=' + this.l4e_1 + ', _hardBreak=' + this.m4e_1 + ', _ascent=' + this.n4e_1 + ', _descent=' + this.o4e_1 + ', _unscaledAscent=' + this.p4e_1 + ', _height=' + this.q4e_1 + ', _width=' + this.r4e_1 + ', _left=' + this.s4e_1 + ', _baseline=' + this.t4e_1 + ', _lineNumber=' + this.u4e_1 + ')';
  };
  function Companion_42() {
    Companion_instance_42 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_42;
  function Companion_getInstance_42() {
    if (Companion_instance_42 == null)
      new Companion_42();
    return Companion_instance_42;
  }
  function _FinalizerHolder_13() {
    _FinalizerHolder_instance_13 = this;
    this.w4e_1 = org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_13;
  function _FinalizerHolder_getInstance_13() {
    if (_FinalizerHolder_instance_13 == null)
      new _FinalizerHolder_13();
    return _FinalizerHolder_instance_13;
  }
  function Paragraph$getWordBoundary$lambda(this$0, $offset) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_Paragraph__1nGetWordBoundary(this$0.a3v_1, $offset, it);
      return Unit_instance;
    };
  }
  function Paragraph(ptr, text) {
    Companion_getInstance_42();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_13().w4e_1);
    Stats_instance.x3u();
    this.z4e_1 = text;
  }
  protoOf(Paragraph).a2e = function () {
    if (!(this.z4e_1 == null)) {
      ensureNotNull(this.z4e_1).a2e();
      this.z4e_1 = null;
    }
    protoOf(Managed).a2e.call(this);
  };
  protoOf(Paragraph).t3u = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetHeight(this.a3v_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).a4f = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth(this.a3v_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).b4f = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth(this.a3v_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).c4f = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline(this.a3v_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).d4f = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines(this.a3v_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).e4f = function (width) {
    Stats_instance.x3u();
    org_jetbrains_skia_paragraph_Paragraph__1nLayout(this.a3v_1, width);
    return this;
  };
  protoOf(Paragraph).f4f = function (canvas, x, y) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_Paragraph__1nPaint(this.a3v_1, getPtr(canvas), x, y);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(canvas);
    }
    return tmp;
  };
  protoOf(Paragraph).g4f = function (start, end, rectHeightMode, rectWidthMode) {
    var tmp;
    try {
      Stats_instance.x3u();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange(this.a3v_1, start, end, rectHeightMode.m2_1, rectWidthMode.m2_1);
          var size = Companion_instance_46.d4e(this_0);
          var tmp_0 = 0;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_1 = Array(size);
          while (tmp_0 < size) {
            var tmp_2 = tmp_0;
            tmp_1[tmp_2] = Companion_instance_46.f4e(this_0, tmp_2);
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_1;
          Companion_instance_46.e4e(this_0);
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
          }
        }
      }
      tmp = result;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).h4f = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders(this.a3v_1);
          var size = Companion_instance_46.d4e(this_0);
          var tmp_0 = 0;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_1 = Array(size);
          while (tmp_0 < size) {
            var tmp_2 = tmp_0;
            tmp_1[tmp_2] = Companion_instance_46.f4e(this_0, tmp_2);
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_1;
          Companion_instance_46.e4e(this_0);
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
          }
        }
      }
      tmp = result;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).i4f = function (dx, dy) {
    var tmp;
    try {
      Stats_instance.x3u();
      var res = org_jetbrains_skia_paragraph_Paragraph__1nGetGlyphPositionAtCoordinate(this.a3v_1, dx, dy);
      tmp = res >= 0 ? new PositionWithAffinity(res, Affinity_DOWNSTREAM_getInstance()) : new PositionWithAffinity((-res | 0) - 1 | 0, Affinity_UPSTREAM_getInstance());
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).j4f = function (offset) {
    var tmp;
    try {
      Stats_instance.x3u();
      var tmp_0 = Companion_instance_18;
      tmp = fromInteropPointer_0(tmp_0, Paragraph$getWordBoundary$lambda(this, offset));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).k4f = function () {
    var tmp;
    try {
      var tmp_0;
      if (this.z4e_1 == null) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = [];
      } else {
        Stats_instance.x3u();
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
            access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
            // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
            var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics(this.a3v_1, getPtr(this.z4e_1));
            var size = Companion_instance_41.d4e(this_0);
            var tmp_1 = 0;
            // Inline function 'kotlin.arrayOfNulls' call
            var tmp_2 = Array(size);
            while (tmp_1 < size) {
              var tmp_3 = tmp_1;
              tmp_2[tmp_3] = Companion_instance_41.f4e(this_0, tmp_3);
              tmp_1 = tmp_1 + 1 | 0;
            }
            var result = tmp_2;
            Companion_instance_41.e4e(this_0);
            break $l$block;
          }finally {
            var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
            access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
            if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
              access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
            }
          }
        }
        tmp_0 = result;
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.z4e_1);
    }
    return tmp;
  };
  protoOf(Paragraph).l4f = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber(this.a3v_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).m4f = function () {
    Stats_instance.x3u();
    org_jetbrains_skia_paragraph_Paragraph__1nMarkDirty(this.a3v_1);
    return this;
  };
  protoOf(Paragraph).n4f = function (from, to, paint) {
    var tmp;
    try {
      if (!(this.z4e_1 == null)) {
        Stats_instance.x3u();
        org_jetbrains_skia_paragraph_Paragraph__1nUpdateForegroundPaint(this.a3v_1, from, to, getPtr(paint), getPtr(this.z4e_1));
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
      reachabilityBarrier(this.z4e_1);
    }
    return tmp;
  };
  function Companion_43() {
    Companion_instance_43 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_43;
  function Companion_getInstance_43() {
    if (Companion_instance_43 == null)
      new Companion_43();
    return Companion_instance_43;
  }
  function _FinalizerHolder_14() {
    _FinalizerHolder_instance_14 = this;
    this.o4f_1 = org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_14;
  function _FinalizerHolder_getInstance_14() {
    if (_FinalizerHolder_instance_14 == null)
      new _FinalizerHolder_14();
    return _FinalizerHolder_instance_14;
  }
  function ParagraphBuilder(style, fc) {
    Companion_getInstance_43();
    Managed.call(this, makeParagraphBuilder(style, fc), _FinalizerHolder_getInstance_14().o4f_1);
    this.r4f_1 = null;
  }
  protoOf(ParagraphBuilder).s4f = function (style) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle(this.a3v_1, getPtr(style));
      tmp = this;
    }finally {
      reachabilityBarrier(style);
    }
    return tmp;
  };
  protoOf(ParagraphBuilder).t4f = function (text) {
    Stats_instance.x3u();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText(this.a3v_1, $this$interopScope.j3w(text));
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
    }
    if (this.r4f_1 == null)
      this.r4f_1 = ManagedString_init_$Create$(text);
    else {
      ensureNotNull(this.r4f_1).h43(text);
    }
    return this;
  };
  protoOf(ParagraphBuilder).u4f = function (style) {
    // Inline function 'kotlin.check' call
    if (!!isNaN_0(style.v4f_1)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!!isNaN_0(style.w4f_1)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!!isNaN_0(style.z4f_1)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder(this.a3v_1, style.v4f_1, style.w4f_1, style.a4g().m2_1, style.b4g().m2_1, style.z4f_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(ParagraphBuilder).o2e = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      var paragraph = new Paragraph(org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild(this.a3v_1), this.r4f_1);
      this.r4f_1 = null;
      tmp = paragraph;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function makeParagraphBuilder(style, fc) {
    Stats_instance.x3u();
    var tmp;
    try {
      tmp = org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake(getPtr(style), getPtr(fc));
    }finally {
      reachabilityBarrier(style);
      reachabilityBarrier(fc);
    }
    return tmp;
  }
  function Companion_44() {
    Companion_instance_44 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_44;
  function Companion_getInstance_44() {
    if (Companion_instance_44 == null)
      new Companion_44();
    return Companion_instance_44;
  }
  function _FinalizerHolder_15() {
    _FinalizerHolder_instance_15 = this;
    this.c4g_1 = org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_15;
  function _FinalizerHolder_getInstance_15() {
    if (_FinalizerHolder_instance_15 == null)
      new _FinalizerHolder_15();
    return _FinalizerHolder_instance_15;
  }
  function ParagraphStyle() {
    Companion_getInstance_44();
    Managed.call(this, org_jetbrains_skia_paragraph_ParagraphStyle__1nMake(), _FinalizerHolder_getInstance_15().c4g_1);
    Stats_instance.x3u();
  }
  protoOf(ParagraphStyle).b3v = function (other) {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals(this.a3v_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).f4g = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetReplaceTabCharacters(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).g4g = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle(this.a3v_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).h4g = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection(this.a3v_1, value.m2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).i4g = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment(this.a3v_1, value.m2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).j4g = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).k4g = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis(this.a3v_1, $this$interopScope.j3w(value));
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
          }
        }
      }
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).l4g = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeightMode(this.a3v_1, value.m2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).m4g = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetFontRastrSettings(this.a3v_1, value.a4e_1.m2_1, value.b4e_1.m2_1, value.c4e_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).n4g = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent(this.a3v_1, value.o4g_1, value.p4g_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PlaceholderAlignment_BASELINE_instance;
  var PlaceholderAlignment_ABOVE_BASELINE_instance;
  var PlaceholderAlignment_BELOW_BASELINE_instance;
  var PlaceholderAlignment_TOP_instance;
  var PlaceholderAlignment_BOTTOM_instance;
  var PlaceholderAlignment_MIDDLE_instance;
  var PlaceholderAlignment_entriesInitialized;
  function PlaceholderAlignment_initEntries() {
    if (PlaceholderAlignment_entriesInitialized)
      return Unit_instance;
    PlaceholderAlignment_entriesInitialized = true;
    PlaceholderAlignment_BASELINE_instance = new PlaceholderAlignment('BASELINE', 0);
    PlaceholderAlignment_ABOVE_BASELINE_instance = new PlaceholderAlignment('ABOVE_BASELINE', 1);
    PlaceholderAlignment_BELOW_BASELINE_instance = new PlaceholderAlignment('BELOW_BASELINE', 2);
    PlaceholderAlignment_TOP_instance = new PlaceholderAlignment('TOP', 3);
    PlaceholderAlignment_BOTTOM_instance = new PlaceholderAlignment('BOTTOM', 4);
    PlaceholderAlignment_MIDDLE_instance = new PlaceholderAlignment('MIDDLE', 5);
  }
  function PlaceholderAlignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PlaceholderAlignment_ABOVE_BASELINE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_ABOVE_BASELINE_instance;
  }
  function PlaceholderAlignment_TOP_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_TOP_instance;
  }
  function PlaceholderAlignment_BOTTOM_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_BOTTOM_instance;
  }
  function PlaceholderAlignment_MIDDLE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_MIDDLE_instance;
  }
  function PlaceholderStyle(width, height, alignment, baselineMode, baseline) {
    this.v4f_1 = width;
    this.w4f_1 = height;
    this.x4f_1 = alignment;
    this.y4f_1 = baselineMode;
    this.z4f_1 = baseline;
  }
  protoOf(PlaceholderStyle).a4g = function () {
    return this.x4f_1;
  };
  protoOf(PlaceholderStyle).b4g = function () {
    return this.y4f_1;
  };
  protoOf(PlaceholderStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof PlaceholderStyle))
      return false;
    if (!(compareTo(this.v4f_1, other.v4f_1) === 0))
      return false;
    if (!(compareTo(this.w4f_1, other.w4f_1) === 0))
      return false;
    if (!(compareTo(this.z4f_1, other.z4f_1) === 0))
      return false;
    if (!this.a4g().equals(other.a4g()))
      return false;
    return this.b4g().equals(other.b4g());
  };
  protoOf(PlaceholderStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.v4f_1) | 0;
    result = imul(result, PRIME) + toBits(this.w4f_1) | 0;
    result = imul(result, PRIME) + toBits(this.z4f_1) | 0;
    result = imul(result, PRIME) + this.a4g().hashCode() | 0;
    result = imul(result, PRIME) + this.b4g().hashCode() | 0;
    return result;
  };
  protoOf(PlaceholderStyle).toString = function () {
    return 'PlaceholderStyle(_width=' + this.v4f_1 + ', _height=' + this.w4f_1 + ', _alignment=' + this.a4g().toString() + ', _baselineMode=' + this.b4g().toString() + ', _baseline=' + this.z4f_1 + ')';
  };
  function PositionWithAffinity(position, affinity) {
    this.q4g_1 = position;
    this.r4g_1 = affinity;
  }
  protoOf(PositionWithAffinity).s4g = function () {
    return this.r4g_1;
  };
  protoOf(PositionWithAffinity).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof PositionWithAffinity))
      return false;
    if (!(this.q4g_1 === other.q4g_1))
      return false;
    return this.s4g().equals(other.s4g());
  };
  protoOf(PositionWithAffinity).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.q4g_1 | 0;
    result = imul(result, PRIME) + this.s4g().hashCode() | 0;
    return result;
  };
  protoOf(PositionWithAffinity).toString = function () {
    return 'PositionWithAffinity(_position=' + this.q4g_1 + ', _affinity=' + this.s4g().toString() + ')';
  };
  var RectHeightMode_TIGHT_instance;
  var RectHeightMode_MAX_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance;
  var RectHeightMode_STRUT_instance;
  var RectHeightMode_entriesInitialized;
  function RectHeightMode_initEntries() {
    if (RectHeightMode_entriesInitialized)
      return Unit_instance;
    RectHeightMode_entriesInitialized = true;
    RectHeightMode_TIGHT_instance = new RectHeightMode('TIGHT', 0);
    RectHeightMode_MAX_instance = new RectHeightMode('MAX', 1);
    RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance = new RectHeightMode('INCLUDE_LINE_SPACING_MIDDLE', 2);
    RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance = new RectHeightMode('INCLUDE_LINE_SPACING_TOP', 3);
    RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance = new RectHeightMode('INCLUDE_LINE_SPACING_BOTTOM', 4);
    RectHeightMode_STRUT_instance = new RectHeightMode('STRUT', 5);
  }
  function RectHeightMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectHeightMode_MAX_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_MAX_instance;
  }
  function RectHeightMode_STRUT_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_STRUT_instance;
  }
  var RectWidthMode_TIGHT_instance;
  var RectWidthMode_MAX_instance;
  var RectWidthMode_entriesInitialized;
  function RectWidthMode_initEntries() {
    if (RectWidthMode_entriesInitialized)
      return Unit_instance;
    RectWidthMode_entriesInitialized = true;
    RectWidthMode_TIGHT_instance = new RectWidthMode('TIGHT', 0);
    RectWidthMode_MAX_instance = new RectWidthMode('MAX', 1);
  }
  function RectWidthMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectWidthMode_TIGHT_getInstance() {
    RectWidthMode_initEntries();
    return RectWidthMode_TIGHT_instance;
  }
  function Companion_45() {
  }
  var Companion_instance_45;
  function Companion_getInstance_45() {
    return Companion_instance_45;
  }
  function Shadow(color, offsetX, offsetY, blurSigma) {
    this.t4g_1 = color;
    this.u4g_1 = offsetX;
    this.v4g_1 = offsetY;
    this.w4g_1 = blurSigma;
  }
  protoOf(Shadow).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!(this.t4g_1 === other.t4g_1))
      return false;
    if (!(compareTo(this.u4g_1, other.u4g_1) === 0))
      return false;
    if (!(compareTo(this.v4g_1, other.v4g_1) === 0))
      return false;
    return compareTo(this.w4g_1, other.w4g_1) === 0;
  };
  protoOf(Shadow).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.t4g_1 | 0;
    result = imul(result, PRIME) + toBits(this.u4g_1) | 0;
    result = imul(result, PRIME) + toBits(this.v4g_1) | 0;
    var blurSigma = toBits_0(this.w4g_1);
    result = imul(result, PRIME) + convertToInt(bitwiseXor(shiftRightUnsigned(blurSigma, 32), blurSigma)) | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(_color=' + this.t4g_1 + ', _offsetX=' + this.u4g_1 + ', _offsetY=' + this.v4g_1 + ', _blurSigma=' + this.w4g_1 + ')';
  };
  function TextBox_init_$Init$(l, t, r, b, direction, $this) {
    TextBox.call($this, Companion_instance_33.s46(l, t, r, b), values_6()[direction]);
    return $this;
  }
  function TextBox_init_$Create$(l, t, r, b, direction) {
    return TextBox_init_$Init$(l, t, r, b, direction, objectCreate(protoOf(TextBox)));
  }
  function Companion_46() {
  }
  protoOf(Companion_46).f4e = function (array, index) {
    var rect = new Float32Array(4);
    var direction = new Int32Array(1);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var rectPtr = $this$interopScope.b3y(rect);
        var directionPtr = $this$interopScope.f3x(direction);
        org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement(array, index, rectPtr, directionPtr);
        $this$interopScope.q41(rectPtr, rect);
        $this$interopScope.g3x(directionPtr, direction);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    return TextBox_init_$Create$(rect[0], rect[1], rect[2], rect[3], direction[0]);
  };
  protoOf(Companion_46).d4e = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nGetArraySize(array);
  };
  protoOf(Companion_46).e4e = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nDisposeArray(array);
  };
  var Companion_instance_46;
  function Companion_getInstance_46() {
    return Companion_instance_46;
  }
  function TextBox(rect, direction) {
    this.x4g_1 = rect;
    this.y4g_1 = direction;
  }
  protoOf(TextBox).z4g = function () {
    return this.y4g_1;
  };
  protoOf(TextBox).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof TextBox))
      return false;
    if (!this.x4g_1.equals(other.x4g_1))
      return false;
    return this.z4g().equals(other.z4g());
  };
  protoOf(TextBox).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.x4g_1.hashCode() | 0;
    result = imul(result, PRIME) + this.z4g().hashCode() | 0;
    return result;
  };
  protoOf(TextBox).toString = function () {
    return 'TextBox(_rect=' + this.x4g_1.toString() + ', _direction=' + this.z4g().toString() + ')';
  };
  function TextIndent(firstLine, restLine) {
    firstLine = firstLine === VOID ? 0.0 : firstLine;
    restLine = restLine === VOID ? 0.0 : restLine;
    this.o4g_1 = firstLine;
    this.p4g_1 = restLine;
  }
  protoOf(TextIndent).toString = function () {
    return 'TextIndent(firstLine=' + this.o4g_1 + ', restLine=' + this.p4g_1 + ')';
  };
  protoOf(TextIndent).hashCode = function () {
    var result = getNumberHashCode(this.o4g_1);
    result = imul(result, 31) + getNumberHashCode(this.p4g_1) | 0;
    return result;
  };
  protoOf(TextIndent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent))
      return false;
    var tmp0_other_with_cast = other instanceof TextIndent ? other : THROW_CCE();
    if (!equals(this.o4g_1, tmp0_other_with_cast.o4g_1))
      return false;
    if (!equals(this.p4g_1, tmp0_other_with_cast.p4g_1))
      return false;
    return true;
  };
  function Companion_47() {
    Companion_instance_47 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_47;
  function Companion_getInstance_47() {
    if (Companion_instance_47 == null)
      new Companion_47();
    return Companion_instance_47;
  }
  function TextStyle_init_$Init$($this) {
    TextStyle.call($this, org_jetbrains_skia_paragraph_TextStyle__1nMake());
    Stats_instance.x3u();
    return $this;
  }
  function TextStyle_init_$Create$() {
    return TextStyle_init_$Init$(objectCreate(protoOf(TextStyle)));
  }
  function _FinalizerHolder_16() {
    _FinalizerHolder_instance_16 = this;
    this.a4h_1 = org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_16;
  function _FinalizerHolder_getInstance_16() {
    if (_FinalizerHolder_instance_16 == null)
      new _FinalizerHolder_16();
    return _FinalizerHolder_instance_16;
  }
  function TextStyle$_get_fontMetrics_$lambda_9osnwy(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics(this$0.a3v_1, it);
      return Unit_instance;
    };
  }
  function TextStyle(ptr) {
    Companion_getInstance_47();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_16().a4h_1);
  }
  protoOf(TextStyle).b3v = function (other) {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = org_jetbrains_skia_paragraph_TextStyle__1nEquals(this.a3v_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(TextStyle).t43 = function (value) {
    this.d4h(value);
  };
  protoOf(TextStyle).d4h = function (color) {
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_TextStyle__1nSetColor(this.a3v_1, color);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).e4h = function (value) {
    this.f4h(value);
  };
  protoOf(TextStyle).f4h = function (paint) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_TextStyle__1nSetForeground(this.a3v_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).g4h = function (value) {
    this.h4h(value);
  };
  protoOf(TextStyle).h4h = function (paint) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_TextStyle__1nSetBackground(this.a3v_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).i4h = function (value) {
    this.j4h(value);
  };
  protoOf(TextStyle).j4h = function (d) {
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle(this.a3v_1, d.l4d_1, d.m4d_1, d.n4d_1, d.o4d_1, d.p4d_1, d.q4d_1.m2_1, d.r4d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).k4h = function (value) {
    this.l4h(value);
  };
  protoOf(TextStyle).x47 = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle(this.a3v_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(TextStyle).l4h = function (s) {
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle(this.a3v_1, s.x41_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).m4h = function (s) {
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_TextStyle__1nAddShadow(this.a3v_1, s.t4g_1, s.u4g_1, s.v4g_1, s.w4g_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).n4h = function (f) {
    try {
      Stats_instance.x3u();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature(this.a3v_1, $this$interopScope.j3w(f.y40()), f.v40_1);
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).o4h = function (FontFeatures) {
    var inductionVariable = 0;
    var last = FontFeatures.length;
    while (inductionVariable < last) {
      var s = FontFeatures[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.n4h(s);
    }
    return this;
  };
  protoOf(TextStyle).p4h = function (value) {
    this.q4h(value);
  };
  protoOf(TextStyle).q4h = function (size) {
    // Inline function 'kotlin.check' call
    if (!!isNaN_0(size)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize(this.a3v_1, size);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).r4h = function (value) {
    this.s4h(value);
  };
  protoOf(TextStyle).s4h = function (families) {
    Stats_instance.x3u();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var tmp = this.a3v_1;
        var tmp_0 = $this$interopScope.z4d(families);
        var tmp1_elvis_lhs = families == null ? null : families.length;
        org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies(tmp, tmp_0, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    return this;
  };
  protoOf(TextStyle).t4h = function (value) {
    this.u4h(value);
  };
  protoOf(TextStyle).u4h = function (height) {
    if (height == null) {
      try {
        Stats_instance.x3u();
        org_jetbrains_skia_paragraph_TextStyle__1nSetHeight(this.a3v_1, false, 0.0);
      }finally {
        reachabilityBarrier(this);
      }
    } else {
      // Inline function 'kotlin.check' call
      if (!!isNaN_0(height)) {
        throw IllegalStateException_init_$Create$('Check failed.');
      }
      try {
        Stats_instance.x3u();
        org_jetbrains_skia_paragraph_TextStyle__1nSetHeight(this.a3v_1, true, height);
      }finally {
        reachabilityBarrier(this);
      }
    }
    return this;
  };
  protoOf(TextStyle).v4h = function (value) {
    this.w4h(value);
  };
  protoOf(TextStyle).w4h = function (topRatio) {
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_TextStyle__1nSetTopRatio(this.a3v_1, topRatio);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).x4h = function (value) {
    this.y4h(value);
  };
  protoOf(TextStyle).y4h = function (letterSpacing) {
    // Inline function 'kotlin.check' call
    if (!!isNaN_0(letterSpacing)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing(this.a3v_1, letterSpacing);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).z4h = function (value) {
    this.a4i(value);
  };
  protoOf(TextStyle).a4i = function (baselineShift) {
    // Inline function 'kotlin.check' call
    if (!!isNaN_0(baselineShift)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift(this.a3v_1, baselineShift);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).b4i = function (value) {
    this.c4i(value);
  };
  protoOf(TextStyle).c4i = function (typeface) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_paragraph_TextStyle__1nSetTypeface(this.a3v_1, getPtr(typeface));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(typeface);
    }
    return tmp;
  };
  protoOf(TextStyle).d4i = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      var tmp_0 = Companion_instance_12;
      tmp = fromInteropPointer(tmp_0, TextStyle$_get_fontMetrics_$lambda_9osnwy(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function TypefaceFontProvider_init_$Init$($this) {
    TypefaceFontProvider.call($this, org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake());
    return $this;
  }
  function TypefaceFontProvider_init_$Create$() {
    return TypefaceFontProvider_init_$Init$(objectCreate(protoOf(TypefaceFontProvider)));
  }
  function Companion_48() {
    Companion_instance_48 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_48;
  function Companion_getInstance_48() {
    if (Companion_instance_48 == null)
      new Companion_48();
    return Companion_instance_48;
  }
  function TypefaceFontProvider(ptr) {
    Companion_getInstance_48();
    FontMgr_init_$Init$(ptr, this);
    Stats_instance.x3u();
  }
  function TypefaceFontProviderWithFallback_init_$Init$($this) {
    TypefaceFontProviderWithFallback.call($this, org_jetbrains_skia_paragraph_TypefaceFontProviderWithFallback__1nMakeAsFallbackProvider());
    return $this;
  }
  function TypefaceFontProviderWithFallback_init_$Create$() {
    return TypefaceFontProviderWithFallback_init_$Init$(objectCreate(protoOf(TypefaceFontProviderWithFallback)));
  }
  function Companion_49() {
    Companion_instance_49 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_49;
  function Companion_getInstance_49() {
    if (Companion_instance_49 == null)
      new Companion_49();
    return Companion_instance_49;
  }
  function TypefaceFontProviderWithFallback(ptr) {
    Companion_getInstance_49();
    TypefaceFontProvider.call(this, ptr);
    Stats_instance.x3u();
  }
  protoOf(TypefaceFontProviderWithFallback).g4i = function (typeface, alias) {
    var tmp;
    try {
      Stats_instance.x3u();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          org_jetbrains_skia_paragraph_TypefaceFontProviderWithFallback__1nRegisterTypefaceForFallback(this.a3v_1, getPtr(typeface), $this$interopScope.j3w(alias));
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(typeface);
    }
    return tmp;
  };
  function Companion_50() {
    Companion_instance_50 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_50;
  function Companion_getInstance_50() {
    if (Companion_instance_50 == null)
      new Companion_50();
    return Companion_instance_50;
  }
  function SVGContainer(ptr) {
    Companion_getInstance_50();
    SVGTransformableNode.call(this, ptr);
  }
  function Companion_51() {
    Companion_instance_51 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_51;
  function Companion_getInstance_51() {
    if (Companion_instance_51 == null)
      new Companion_51();
    return Companion_instance_51;
  }
  function SVGDOM_init_$Init$(data, $this) {
    SVGDOM.call($this, makeSVGDOM(data));
    return $this;
  }
  function SVGDOM_init_$Create$(data) {
    return SVGDOM_init_$Init$(data, objectCreate(protoOf(SVGDOM)));
  }
  function SVGDOM(ptr) {
    Companion_getInstance_51();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(SVGDOM).j4i = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      var ptr = org_jetbrains_skia_svg_SVGDOM__1nGetRoot(this.a3v_1);
      tmp = ptr === Companion_instance_61.f3v() ? null : new SVGSVG(ptr);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGDOM).k4i = function (canvas) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_svg_SVGDOM__1nRender(this.a3v_1, getPtr(canvas));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(canvas);
    }
    return tmp;
  };
  function makeSVGDOM(data) {
    Stats_instance.x3u();
    var tmp;
    try {
      tmp = org_jetbrains_skia_svg_SVGDOM__1nMakeFromData(getPtr(data));
    }finally {
      reachabilityBarrier(data);
    }
    return tmp;
  }
  function Companion_52() {
  }
  protoOf(Companion_52).l4i = function (block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(2);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var handle = $this$interopScope.v42(result);
        block($this$interopScope, handle);
        $this$interopScope.g3x(handle, result);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.fromBits' call
    var bits = result[0];
    var tmp$ret$3 = floatFromBits(bits);
    return SVGLength_init_$Create$(tmp$ret$3, result[1]);
  };
  var Companion_instance_52;
  function Companion_getInstance_52() {
    return Companion_instance_52;
  }
  function SVGLength_init_$Init$(value, unit, $this) {
    SVGLength.call($this, value, values_7()[unit]);
    return $this;
  }
  function SVGLength_init_$Create$(value, unit) {
    return SVGLength_init_$Init$(value, unit, objectCreate(protoOf(SVGLength)));
  }
  function SVGLength(value, unit) {
    this.m4i_1 = value;
    this.n4i_1 = unit;
  }
  protoOf(SVGLength).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SVGLength))
      return false;
    if (!(compareTo(this.m4i_1, other.m4i_1) === 0))
      return false;
    return this.n4i_1.equals(other.n4i_1);
  };
  protoOf(SVGLength).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.m4i_1) | 0;
    result = imul(result, PRIME) + this.n4i_1.hashCode() | 0;
    return result;
  };
  protoOf(SVGLength).toString = function () {
    return 'SVGLength(_value=' + this.m4i_1 + ', _unit=' + this.n4i_1.toString() + ')';
  };
  protoOf(SVGLength).o4i = function (_unit) {
    return this.n4i_1 === _unit ? this : new SVGLength(this.m4i_1, _unit);
  };
  var SVGLengthUnit_UNKNOWN_instance;
  var SVGLengthUnit_NUMBER_instance;
  var SVGLengthUnit_PERCENTAGE_instance;
  var SVGLengthUnit_EMS_instance;
  var SVGLengthUnit_EXS_instance;
  var SVGLengthUnit_PX_instance;
  var SVGLengthUnit_CM_instance;
  var SVGLengthUnit_MM_instance;
  var SVGLengthUnit_IN_instance;
  var SVGLengthUnit_PT_instance;
  var SVGLengthUnit_PC_instance;
  function values_7() {
    return [SVGLengthUnit_UNKNOWN_getInstance(), SVGLengthUnit_NUMBER_getInstance(), SVGLengthUnit_PERCENTAGE_getInstance(), SVGLengthUnit_EMS_getInstance(), SVGLengthUnit_EXS_getInstance(), SVGLengthUnit_PX_getInstance(), SVGLengthUnit_CM_getInstance(), SVGLengthUnit_MM_getInstance(), SVGLengthUnit_IN_getInstance(), SVGLengthUnit_PT_getInstance(), SVGLengthUnit_PC_getInstance()];
  }
  var SVGLengthUnit_entriesInitialized;
  function SVGLengthUnit_initEntries() {
    if (SVGLengthUnit_entriesInitialized)
      return Unit_instance;
    SVGLengthUnit_entriesInitialized = true;
    SVGLengthUnit_UNKNOWN_instance = new SVGLengthUnit('UNKNOWN', 0);
    SVGLengthUnit_NUMBER_instance = new SVGLengthUnit('NUMBER', 1);
    SVGLengthUnit_PERCENTAGE_instance = new SVGLengthUnit('PERCENTAGE', 2);
    SVGLengthUnit_EMS_instance = new SVGLengthUnit('EMS', 3);
    SVGLengthUnit_EXS_instance = new SVGLengthUnit('EXS', 4);
    SVGLengthUnit_PX_instance = new SVGLengthUnit('PX', 5);
    SVGLengthUnit_CM_instance = new SVGLengthUnit('CM', 6);
    SVGLengthUnit_MM_instance = new SVGLengthUnit('MM', 7);
    SVGLengthUnit_IN_instance = new SVGLengthUnit('IN', 8);
    SVGLengthUnit_PT_instance = new SVGLengthUnit('PT', 9);
    SVGLengthUnit_PC_instance = new SVGLengthUnit('PC', 10);
  }
  function SVGLengthUnit(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SVGLengthUnit_UNKNOWN_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_UNKNOWN_instance;
  }
  function SVGLengthUnit_NUMBER_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_NUMBER_instance;
  }
  function SVGLengthUnit_PERCENTAGE_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_PERCENTAGE_instance;
  }
  function SVGLengthUnit_EMS_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_EMS_instance;
  }
  function SVGLengthUnit_EXS_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_EXS_instance;
  }
  function SVGLengthUnit_PX_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_PX_instance;
  }
  function SVGLengthUnit_CM_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_CM_instance;
  }
  function SVGLengthUnit_MM_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_MM_instance;
  }
  function SVGLengthUnit_IN_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_IN_instance;
  }
  function SVGLengthUnit_PT_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_PT_instance;
  }
  function SVGLengthUnit_PC_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_PC_instance;
  }
  function Companion_53() {
    Companion_instance_53 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_53;
  function Companion_getInstance_53() {
    if (Companion_instance_53 == null)
      new Companion_53();
    return Companion_instance_53;
  }
  function SVGNode(ptr) {
    Companion_getInstance_53();
    RefCnt_init_$Init$(ptr, this);
  }
  function Companion_54() {
  }
  var Companion_instance_54;
  function Companion_getInstance_54() {
    return Companion_instance_54;
  }
  function SVGPreserveAspectRatio_init_$Init$($this) {
    SVGPreserveAspectRatio.call($this, SVGPreserveAspectRatioAlign_XMID_YMID_getInstance(), SVGPreserveAspectRatioScale_MEET_getInstance());
    return $this;
  }
  function SVGPreserveAspectRatio_init_$Create$() {
    return SVGPreserveAspectRatio_init_$Init$(objectCreate(protoOf(SVGPreserveAspectRatio)));
  }
  function SVGPreserveAspectRatio_init_$Init$_0(align, $this) {
    SVGPreserveAspectRatio.call($this, align, SVGPreserveAspectRatioScale_MEET_getInstance());
    return $this;
  }
  function SVGPreserveAspectRatio_init_$Create$_0(align) {
    return SVGPreserveAspectRatio_init_$Init$_0(align, objectCreate(protoOf(SVGPreserveAspectRatio)));
  }
  function SVGPreserveAspectRatio(align, scale) {
    this.p4i_1 = align;
    this.q4i_1 = scale;
  }
  protoOf(SVGPreserveAspectRatio).r4i = function () {
    return this.p4i_1;
  };
  protoOf(SVGPreserveAspectRatio).s4i = function () {
    return this.q4i_1;
  };
  protoOf(SVGPreserveAspectRatio).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SVGPreserveAspectRatio))
      return false;
    if (!this.r4i().equals(other.r4i()))
      return false;
    return this.s4i().equals(other.s4i());
  };
  protoOf(SVGPreserveAspectRatio).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.r4i().hashCode() | 0;
    result = imul(result, PRIME) + this.s4i().hashCode() | 0;
    return result;
  };
  protoOf(SVGPreserveAspectRatio).toString = function () {
    return 'SVGPreserveAspectRatio(_align=' + this.r4i().toString() + ', _scale=' + this.s4i().toString() + ')';
  };
  var SVGPreserveAspectRatioAlign_XMIN_YMIN_instance;
  var SVGPreserveAspectRatioAlign_XMID_YMIN_instance;
  var SVGPreserveAspectRatioAlign_XMAX_YMIN_instance;
  var SVGPreserveAspectRatioAlign_XMIN_YMID_instance;
  var SVGPreserveAspectRatioAlign_XMID_YMID_instance;
  var SVGPreserveAspectRatioAlign_XMAX_YMID_instance;
  var SVGPreserveAspectRatioAlign_XMIN_YMAX_instance;
  var SVGPreserveAspectRatioAlign_XMID_YMAX_instance;
  var SVGPreserveAspectRatioAlign_XMAX_YMAX_instance;
  var SVGPreserveAspectRatioAlign_NONE_instance;
  function Companion_55() {
  }
  protoOf(Companion_55).t4i = function (value) {
    var tmp;
    switch (value) {
      case 0:
        tmp = SVGPreserveAspectRatioAlign_XMIN_YMIN_getInstance();
        break;
      case 1:
        tmp = SVGPreserveAspectRatioAlign_XMID_YMIN_getInstance();
        break;
      case 2:
        tmp = SVGPreserveAspectRatioAlign_XMAX_YMIN_getInstance();
        break;
      case 4:
        tmp = SVGPreserveAspectRatioAlign_XMIN_YMID_getInstance();
        break;
      case 5:
        tmp = SVGPreserveAspectRatioAlign_XMID_YMID_getInstance();
        break;
      case 6:
        tmp = SVGPreserveAspectRatioAlign_XMAX_YMID_getInstance();
        break;
      case 8:
        tmp = SVGPreserveAspectRatioAlign_XMIN_YMAX_getInstance();
        break;
      case 9:
        tmp = SVGPreserveAspectRatioAlign_XMID_YMAX_getInstance();
        break;
      case 10:
        tmp = SVGPreserveAspectRatioAlign_XMAX_YMAX_getInstance();
        break;
      case 16:
        tmp = SVGPreserveAspectRatioAlign_NONE_getInstance();
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Unknown SVGPreserveAspectRatioAlign value: ' + value);
    }
    return tmp;
  };
  var Companion_instance_55;
  function Companion_getInstance_55() {
    return Companion_instance_55;
  }
  var SVGPreserveAspectRatioAlign_entriesInitialized;
  function SVGPreserveAspectRatioAlign_initEntries() {
    if (SVGPreserveAspectRatioAlign_entriesInitialized)
      return Unit_instance;
    SVGPreserveAspectRatioAlign_entriesInitialized = true;
    SVGPreserveAspectRatioAlign_XMIN_YMIN_instance = new SVGPreserveAspectRatioAlign('XMIN_YMIN', 0, 0);
    SVGPreserveAspectRatioAlign_XMID_YMIN_instance = new SVGPreserveAspectRatioAlign('XMID_YMIN', 1, 1);
    SVGPreserveAspectRatioAlign_XMAX_YMIN_instance = new SVGPreserveAspectRatioAlign('XMAX_YMIN', 2, 2);
    SVGPreserveAspectRatioAlign_XMIN_YMID_instance = new SVGPreserveAspectRatioAlign('XMIN_YMID', 3, 4);
    SVGPreserveAspectRatioAlign_XMID_YMID_instance = new SVGPreserveAspectRatioAlign('XMID_YMID', 4, 5);
    SVGPreserveAspectRatioAlign_XMAX_YMID_instance = new SVGPreserveAspectRatioAlign('XMAX_YMID', 5, 6);
    SVGPreserveAspectRatioAlign_XMIN_YMAX_instance = new SVGPreserveAspectRatioAlign('XMIN_YMAX', 6, 8);
    SVGPreserveAspectRatioAlign_XMID_YMAX_instance = new SVGPreserveAspectRatioAlign('XMID_YMAX', 7, 9);
    SVGPreserveAspectRatioAlign_XMAX_YMAX_instance = new SVGPreserveAspectRatioAlign('XMAX_YMAX', 8, 10);
    SVGPreserveAspectRatioAlign_NONE_instance = new SVGPreserveAspectRatioAlign('NONE', 9, 16);
  }
  function SVGPreserveAspectRatioAlign(name, ordinal, _value) {
    Enum.call(this, name, ordinal);
    this.w4i_1 = _value;
  }
  function SVGPreserveAspectRatioAlign_XMIN_YMIN_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMIN_YMIN_instance;
  }
  function SVGPreserveAspectRatioAlign_XMID_YMIN_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMID_YMIN_instance;
  }
  function SVGPreserveAspectRatioAlign_XMAX_YMIN_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMAX_YMIN_instance;
  }
  function SVGPreserveAspectRatioAlign_XMIN_YMID_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMIN_YMID_instance;
  }
  function SVGPreserveAspectRatioAlign_XMID_YMID_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMID_YMID_instance;
  }
  function SVGPreserveAspectRatioAlign_XMAX_YMID_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMAX_YMID_instance;
  }
  function SVGPreserveAspectRatioAlign_XMIN_YMAX_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMIN_YMAX_instance;
  }
  function SVGPreserveAspectRatioAlign_XMID_YMAX_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMID_YMAX_instance;
  }
  function SVGPreserveAspectRatioAlign_XMAX_YMAX_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMAX_YMAX_instance;
  }
  function SVGPreserveAspectRatioAlign_NONE_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_NONE_instance;
  }
  var SVGPreserveAspectRatioScale_MEET_instance;
  var SVGPreserveAspectRatioScale_SLICE_instance;
  var SVGPreserveAspectRatioScale_entriesInitialized;
  function SVGPreserveAspectRatioScale_initEntries() {
    if (SVGPreserveAspectRatioScale_entriesInitialized)
      return Unit_instance;
    SVGPreserveAspectRatioScale_entriesInitialized = true;
    SVGPreserveAspectRatioScale_MEET_instance = new SVGPreserveAspectRatioScale('MEET', 0);
    SVGPreserveAspectRatioScale_SLICE_instance = new SVGPreserveAspectRatioScale('SLICE', 1);
  }
  function SVGPreserveAspectRatioScale(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SVGPreserveAspectRatioScale_MEET_getInstance() {
    SVGPreserveAspectRatioScale_initEntries();
    return SVGPreserveAspectRatioScale_MEET_instance;
  }
  function Companion_56() {
    Companion_instance_56 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_56;
  function Companion_getInstance_56() {
    if (Companion_instance_56 == null)
      new Companion_56();
    return Companion_instance_56;
  }
  function SVGSVG$_get_width_$lambda_z81obo(this$0) {
    return function ($this$fromInterop, it) {
      org_jetbrains_skia_svg_SVGSVG__1nGetWidth(this$0.a3v_1, it);
      return Unit_instance;
    };
  }
  function SVGSVG$_get_height_$lambda_1cq2rn(this$0) {
    return function ($this$fromInterop, it) {
      org_jetbrains_skia_svg_SVGSVG__1nGetHeight(this$0.a3v_1, it);
      return Unit_instance;
    };
  }
  function SVGSVG$_get_viewBox_$lambda_hsbx38(this$0) {
    return function (it) {
      return org_jetbrains_skia_svg_SVGSVG__1nGetViewBox(this$0.a3v_1, it);
    };
  }
  function SVGSVG(ptr) {
    Companion_getInstance_56();
    SVGContainer.call(this, ptr);
  }
  protoOf(SVGSVG).z4i = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_svg_SVGSVG__1nSetWidth(this.a3v_1, value.m4i_1, value.n4i_1.m2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).s3u = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      var tmp_0 = Companion_instance_52;
      tmp = tmp_0.l4i(SVGSVG$_get_width_$lambda_z81obo(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).a4j = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_svg_SVGSVG__1nSetHeight(this.a3v_1, value.m4i_1, value.n4i_1.m2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).t3u = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      var tmp_0 = Companion_instance_52;
      tmp = tmp_0.l4i(SVGSVG$_get_height_$lambda_1cq2rn(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).b4j = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_svg_SVGSVG__1nSetPreserveAspectRatio(this.a3v_1, value.p4i_1.w4i_1, value.q4i_1.m2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).c4j = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skia_svg_SVGSVG__1nSetViewBox(this.a3v_1, ensureNotNull(value).q3x_1, value.r3x_1, value.s3x_1, value.t3x_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).d4j = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      var tmp_0 = Companion_instance_33;
      tmp = tmp_0.v46(SVGSVG$_get_viewBox_$lambda_hsbx38(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Companion_57() {
    Companion_instance_57 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_57;
  function Companion_getInstance_57() {
    if (Companion_instance_57 == null)
      new Companion_57();
    return Companion_instance_57;
  }
  function SVGTransformableNode(ptr) {
    Companion_getInstance_57();
    SVGNode.call(this, ptr);
  }
  var GraphicsApi_UNKNOWN_instance;
  var GraphicsApi_SOFTWARE_FAST_instance;
  var GraphicsApi_SOFTWARE_COMPAT_instance;
  var GraphicsApi_OPENGL_instance;
  var GraphicsApi_DIRECT3D_instance;
  var GraphicsApi_VULKAN_instance;
  var GraphicsApi_METAL_instance;
  var GraphicsApi_WEBGL_instance;
  var GraphicsApi_entriesInitialized;
  function GraphicsApi_initEntries() {
    if (GraphicsApi_entriesInitialized)
      return Unit_instance;
    GraphicsApi_entriesInitialized = true;
    GraphicsApi_UNKNOWN_instance = new GraphicsApi('UNKNOWN', 0);
    GraphicsApi_SOFTWARE_FAST_instance = new GraphicsApi('SOFTWARE_FAST', 1);
    GraphicsApi_SOFTWARE_COMPAT_instance = new GraphicsApi('SOFTWARE_COMPAT', 2);
    GraphicsApi_OPENGL_instance = new GraphicsApi('OPENGL', 3);
    GraphicsApi_DIRECT3D_instance = new GraphicsApi('DIRECT3D', 4);
    GraphicsApi_VULKAN_instance = new GraphicsApi('VULKAN', 5);
    GraphicsApi_METAL_instance = new GraphicsApi('METAL', 6);
    GraphicsApi_WEBGL_instance = new GraphicsApi('WEBGL', 7);
  }
  function GraphicsApi(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function GraphicsApi_WEBGL_getInstance() {
    GraphicsApi_initEntries();
    return GraphicsApi_WEBGL_instance;
  }
  var OS_Android_instance;
  var OS_Linux_instance;
  var OS_Windows_instance;
  var OS_MacOS_instance;
  var OS_Ios_instance;
  var OS_Tvos_instance;
  var OS_JS_instance;
  var OS_Unknown_instance;
  var OS_entriesInitialized;
  function OS_initEntries() {
    if (OS_entriesInitialized)
      return Unit_instance;
    OS_entriesInitialized = true;
    OS_Android_instance = new OS('Android', 0, 'android');
    OS_Linux_instance = new OS('Linux', 1, 'linux');
    OS_Windows_instance = new OS('Windows', 2, 'windows');
    OS_MacOS_instance = new OS('MacOS', 3, 'macos');
    OS_Ios_instance = new OS('Ios', 4, 'ios');
    OS_Tvos_instance = new OS('Tvos', 5, 'tvos');
    OS_JS_instance = new OS('JS', 6, 'js');
    OS_Unknown_instance = new OS('Unknown', 7, 'unknown');
  }
  function OS(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.g4j_1 = id;
  }
  protoOf(OS).h4j = function () {
    return this.equals(OS_MacOS_getInstance());
  };
  var Arch_X64_instance;
  var Arch_Arm64_instance;
  var Arch_JS_instance;
  var Arch_WASM_instance;
  var Arch_Unknown_instance;
  var Arch_entriesInitialized;
  function Arch_initEntries() {
    if (Arch_entriesInitialized)
      return Unit_instance;
    Arch_entriesInitialized = true;
    Arch_X64_instance = new Arch('X64', 0, 'x64');
    Arch_Arm64_instance = new Arch('Arm64', 1, 'arm64');
    Arch_JS_instance = new Arch('JS', 2, 'js');
    Arch_WASM_instance = new Arch('WASM', 3, 'wasm');
    Arch_Unknown_instance = new Arch('Unknown', 4, 'unknown');
  }
  function Arch(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.k4j_1 = id;
  }
  function OS_Android_getInstance() {
    OS_initEntries();
    return OS_Android_instance;
  }
  function OS_Linux_getInstance() {
    OS_initEntries();
    return OS_Linux_instance;
  }
  function OS_Windows_getInstance() {
    OS_initEntries();
    return OS_Windows_instance;
  }
  function OS_MacOS_getInstance() {
    OS_initEntries();
    return OS_MacOS_instance;
  }
  function OS_Ios_getInstance() {
    OS_initEntries();
    return OS_Ios_instance;
  }
  function OS_Unknown_getInstance() {
    OS_initEntries();
    return OS_Unknown_instance;
  }
  function Arch_Unknown_getInstance() {
    Arch_initEntries();
    return Arch_Unknown_instance;
  }
  function ClipboardManager() {
  }
  function URIManager() {
  }
  function RenderException(message, cause) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, RenderException);
  }
  var SystemTheme_DARK_instance;
  var SystemTheme_LIGHT_instance;
  var SystemTheme_UNKNOWN_instance;
  var SystemTheme_entriesInitialized;
  function SystemTheme_initEntries() {
    if (SystemTheme_entriesInitialized)
      return Unit_instance;
    SystemTheme_entriesInitialized = true;
    SystemTheme_DARK_instance = new SystemTheme('DARK', 0);
    SystemTheme_LIGHT_instance = new SystemTheme('LIGHT', 1);
    SystemTheme_UNKNOWN_instance = new SystemTheme('UNKNOWN', 2);
  }
  function SystemTheme(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SystemTheme_UNKNOWN_getInstance() {
    SystemTheme_initEntries();
    return SystemTheme_UNKNOWN_instance;
  }
  function Companion_58() {
    Companion_instance_58 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_58;
  function Companion_getInstance_58() {
    if (Companion_instance_58 == null)
      new Companion_58();
    return Companion_instance_58;
  }
  function RenderNode_init_$Init$(context, $this) {
    RenderNode.call($this, org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nMake(getPtr(context)));
    Stats_instance.x3u();
    return $this;
  }
  function RenderNode_init_$Create$(context) {
    return RenderNode_init_$Init$(context, objectCreate(protoOf(RenderNode)));
  }
  function RenderNode(ptr, managed) {
    Companion_getInstance_58();
    managed = managed === VOID ? true : managed;
    RefCnt_init_$Init$_0(ptr, managed, this);
  }
  protoOf(RenderNode).n4j = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetLayerPaint(this.a3v_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(RenderNode).o4j = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetBounds(this.a3v_1, value.q3x_1, value.r3x_1, value.s3x_1, value.t3x_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).p4j = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetPivot(this.a3v_1, value.l46_1, value.m46_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).q4j = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetAlpha(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).r4j = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetScaleX(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).s4j = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetScaleY(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).t4j = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetTranslationX(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).u4j = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetTranslationY(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).v4j = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetShadowElevation(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).w4j = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetAmbientShadowColor(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).x4j = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetSpotShadowColor(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).y4j = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetRotationX(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).z4j = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetRotationY(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).a4k = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetRotationZ(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).b4k = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetCameraDistance(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).c4k = function (r, mode, antiAlias) {
    Stats_instance.x3u();
    org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetClipRect(this.a3v_1, r.q3x_1, r.r3x_1, r.s3x_1, r.t3x_1, mode.m2_1, antiAlias);
  };
  protoOf(RenderNode).d4k = function (r, mode, antiAlias, $super) {
    mode = mode === VOID ? ClipMode_INTERSECT_getInstance() : mode;
    antiAlias = antiAlias === VOID ? false : antiAlias;
    var tmp;
    if ($super === VOID) {
      this.c4k(r, mode, antiAlias);
      tmp = Unit_instance;
    } else {
      tmp = $super.c4k.call(this, r, mode, antiAlias);
    }
    return tmp;
  };
  protoOf(RenderNode).e4k = function (r, mode, antiAlias) {
    Stats_instance.x3u();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetClipRRect(this.a3v_1, r.q3x_1, r.r3x_1, r.s3x_1, r.t3x_1, $this$interopScope.b3y(r.a3y_1), r.a3y_1.length, mode.m2_1, antiAlias);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().j20();
        }
      }
    }
  };
  protoOf(RenderNode).f4k = function (r, mode, antiAlias, $super) {
    mode = mode === VOID ? ClipMode_INTERSECT_getInstance() : mode;
    antiAlias = antiAlias === VOID ? false : antiAlias;
    var tmp;
    if ($super === VOID) {
      this.e4k(r, mode, antiAlias);
      tmp = Unit_instance;
    } else {
      tmp = $super.e4k.call(this, r, mode, antiAlias);
    }
    return tmp;
  };
  protoOf(RenderNode).g4k = function (p, mode, antiAlias) {
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetClipPath(this.a3v_1, getPtr(p), mode.m2_1, antiAlias);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(p);
    }
  };
  protoOf(RenderNode).h4k = function (p, mode, antiAlias, $super) {
    mode = mode === VOID ? ClipMode_INTERSECT_getInstance() : mode;
    antiAlias = antiAlias === VOID ? false : antiAlias;
    var tmp;
    if ($super === VOID) {
      this.g4k(p, mode, antiAlias);
      tmp = Unit_instance;
    } else {
      tmp = $super.g4k.call(this, p, mode, antiAlias);
    }
    return tmp;
  };
  protoOf(RenderNode).i4k = function (value) {
    var tmp;
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetClip(this.a3v_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).j4k = function () {
    var tmp;
    try {
      Stats_instance.x3u();
      tmp = new Canvas(org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nBeginRecording(this.a3v_1), false, this);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).k4k = function () {
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nEndRecording(this.a3v_1);
    }finally {
      reachabilityBarrier(this);
    }
  };
  protoOf(RenderNode).l4k = function (canvas) {
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nDrawInto(this.a3v_1, getPtr(canvas));
    }finally {
      reachabilityBarrier(this);
    }
  };
  function Companion_59() {
    Companion_instance_59 = this;
    Companion_instance_60.d3v();
  }
  var Companion_instance_59;
  function Companion_getInstance_59() {
    if (Companion_instance_59 == null)
      new Companion_59();
    return Companion_instance_59;
  }
  function RenderNodeContext_init_$Init$(measureDrawBounds, $this) {
    measureDrawBounds = measureDrawBounds === VOID ? false : measureDrawBounds;
    RenderNodeContext.call($this, org_jetbrains_skiko_node_RenderNodeContextKt_RenderNodeContext_1nMake(measureDrawBounds));
    Stats_instance.x3u();
    return $this;
  }
  function RenderNodeContext_init_$Create$(measureDrawBounds) {
    return RenderNodeContext_init_$Init$(measureDrawBounds, objectCreate(protoOf(RenderNodeContext)));
  }
  function RenderNodeContext(ptr, managed) {
    Companion_getInstance_59();
    managed = managed === VOID ? true : managed;
    RefCnt_init_$Init$_0(ptr, managed, this);
  }
  protoOf(RenderNodeContext).o4k = function (centerX, centerY, centerZ, radius, ambientShadowAlpha, spotShadowAlpha) {
    try {
      Stats_instance.x3u();
      org_jetbrains_skiko_node_RenderNodeContextKt_RenderNodeContext_1nSetLightingInfo(this.a3v_1, centerX, centerY, centerZ, radius, ambientShadowAlpha, spotShadowAlpha);
    }finally {
      reachabilityBarrier(this);
    }
  };
  function get_registry() {
    _init_properties_Managed_js_kt__4ok5rc();
    return registry;
  }
  var registry;
  function unregister(managed) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().unregister(managed);
  }
  function register(managed, thunk) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().register(managed, thunk);
  }
  function registry$lambda(it) {
    _init_properties_Managed_js_kt__4ok5rc();
    var thunk = it instanceof FinalizationThunk ? it : THROW_CCE();
    thunk.r4k();
    return Unit_instance;
  }
  var properties_initialized_Managed_js_kt_llxy4m;
  function _init_properties_Managed_js_kt__4ok5rc() {
    if (!properties_initialized_Managed_js_kt_llxy4m) {
      properties_initialized_Managed_js_kt_llxy4m = true;
      registry = new FinalizationRegistry(registry$lambda);
    }
  }
  function toInterop($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = malloc(array.length);
      $this.h3w_1.h(data);
      if (copyArrayToWasm) {
        toWasm(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_0($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = malloc(imul(array.length, 2));
      $this.h3w_1.h(data);
      if (copyArrayToWasm) {
        toWasm_0(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_1($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = malloc(imul(array.length, 4));
      $this.h3w_1.h(data);
      if (copyArrayToWasm) {
        toWasm_1(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_2($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = malloc(imul(array.length, 4));
      $this.h3w_1.h(data);
      if (copyArrayToWasm) {
        toWasm_2(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_3($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = malloc(imul(array.length, 8));
      $this.h3w_1.h(data);
      if (copyArrayToWasm) {
        toWasm_3(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_4($this, array, copyArrayToWasm) {
    var tmp;
    if (!(array == null) && array.l() > 0) {
      var data = malloc(imul(array.l(), 4));
      $this.h3w_1.h(data);
      if (copyArrayToWasm) {
        toWasm_1(data, array.b43_1);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function InteropScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.h3w_1 = ArrayList_init_$Create$();
    this.i3w_1 = false;
  }
  protoOf(InteropScope).j3w = function (string) {
    var tmp;
    if (!(string == null)) {
      tmp = this.q3z(convertToZeroTerminatedString(string));
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).q3z = function (array) {
    return toInterop(this, array, true);
  };
  protoOf(InteropScope).d43 = function (array) {
    return toInterop(this, array, false);
  };
  protoOf(InteropScope).y3w = function (array) {
    return toInterop_0(this, array, true);
  };
  protoOf(InteropScope).g3x = function (_this__u8e3s4, result) {
    fromWasm(_this__u8e3s4, result);
  };
  protoOf(InteropScope).f3x = function (array) {
    return toInterop_1(this, array, true);
  };
  protoOf(InteropScope).v42 = function (array) {
    return toInterop_1(this, array, false);
  };
  protoOf(InteropScope).q41 = function (_this__u8e3s4, result) {
    fromWasm_0(_this__u8e3s4, result);
  };
  protoOf(InteropScope).b3y = function (array) {
    return toInterop_2(this, array, true);
  };
  protoOf(InteropScope).p41 = function (array) {
    return toInterop_2(this, array, false);
  };
  protoOf(InteropScope).h4e = function (_this__u8e3s4, result) {
    fromWasm_1(_this__u8e3s4, result);
  };
  protoOf(InteropScope).g4e = function (array) {
    return toInterop_3(this, array, false);
  };
  protoOf(InteropScope).e43 = function (_this__u8e3s4, result) {
    fromWasm_2(_this__u8e3s4, result);
  };
  protoOf(InteropScope).z42 = function (array) {
    return toInterop_4(this, array, false);
  };
  protoOf(InteropScope).a43 = function (_this__u8e3s4, result) {
    return fromWasm(_this__u8e3s4, result.b43_1);
  };
  protoOf(InteropScope).z4d = function (stringArray) {
    var tmp;
    var tmp_0;
    if (!(stringArray == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(stringArray.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(stringArray.length);
      var inductionVariable = 0;
      var last = stringArray.length;
      while (inductionVariable < last) {
        var item = stringArray[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$2 = this.j3w(item);
        destination.h(tmp$ret$2);
      }
      var ptrs = toIntArray(destination);
      tmp = this.f3x(ptrs);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).j20 = function () {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.h3w_1.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      free(element);
    }
    this.h3w_1.e2();
    // Inline function 'org.jetbrains.skia.impl.InteropScope.releaseCallbacks' call
    if (this.i3w_1) {
      _releaseLocalCallbackScope();
      this.i3w_1 = false;
    }
  };
  function getNavigatorInfo() {
    var tmp = navigator.userAgentData ? navigator.userAgentData.platform : navigator.platform;
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  }
  function onWasmReady(onReady) {
    var tmp = awaitSkiko;
    tmp.then(onWasmReady$lambda(onReady));
  }
  function createWebGLContext(canvas, attr) {
    attr = attr === VOID ? null : attr;
    var contextAttributes = new createWebGLContext$contextAttributes$1(attr);
    return GL.createContext(canvas, asJsObject(contextAttributes));
  }
  function asJsObject(_this__u8e3s4) {
    var jsObject = {};
    if (_this__u8e3s4.alpha == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.alpha = _this__u8e3s4.alpha;
    }
    if (_this__u8e3s4.depth == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.depth = _this__u8e3s4.depth;
    }
    if (_this__u8e3s4.stencil == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.stencil = _this__u8e3s4.stencil;
    }
    if (_this__u8e3s4.antialias == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.antialias = _this__u8e3s4.antialias;
    }
    if (_this__u8e3s4.premultipliedAlpha == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.premultipliedAlpha = _this__u8e3s4.premultipliedAlpha;
    }
    if (_this__u8e3s4.preserveDrawingBuffer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.preserveDrawingBuffer = _this__u8e3s4.preserveDrawingBuffer;
    }
    if (_this__u8e3s4.preferLowPowerToHighPerformance == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.preferLowPowerToHighPerformance = _this__u8e3s4.preferLowPowerToHighPerformance;
    }
    if (_this__u8e3s4.failIfMajorPerformanceCaveat == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.failIfMajorPerformanceCaveat = _this__u8e3s4.failIfMajorPerformanceCaveat;
    }
    if (_this__u8e3s4.enableExtensionsByDefault == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.enableExtensionsByDefault = _this__u8e3s4.enableExtensionsByDefault;
    }
    if (_this__u8e3s4.explicitSwapControl == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.explicitSwapControl = _this__u8e3s4.explicitSwapControl;
    }
    if (_this__u8e3s4.renderViaOffscreenBackBuffer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.renderViaOffscreenBackBuffer = _this__u8e3s4.renderViaOffscreenBackBuffer;
    }
    if (_this__u8e3s4.majorVersion == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.majorVersion = _this__u8e3s4.majorVersion;
    }
    return jsObject;
  }
  function onWasmReady$lambda($onReady) {
    return function (it) {
      $onReady();
      return Unit_instance;
    };
  }
  function createWebGLContext$contextAttributes$1($attr) {
    var tmp = this;
    var tmp1_elvis_lhs = $attr == null ? null : $attr.alpha;
    tmp.s4k_1 = tmp1_elvis_lhs == null ? 1 : tmp1_elvis_lhs;
    var tmp_0 = this;
    var tmp1_elvis_lhs_0 = $attr == null ? null : $attr.depth;
    tmp_0.t4k_1 = tmp1_elvis_lhs_0 == null ? 1 : tmp1_elvis_lhs_0;
    var tmp_1 = this;
    var tmp1_elvis_lhs_1 = $attr == null ? null : $attr.stencil;
    tmp_1.u4k_1 = tmp1_elvis_lhs_1 == null ? 8 : tmp1_elvis_lhs_1;
    var tmp_2 = this;
    var tmp1_elvis_lhs_2 = $attr == null ? null : $attr.antialias;
    tmp_2.v4k_1 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    var tmp_3 = this;
    var tmp1_elvis_lhs_3 = $attr == null ? null : $attr.premultipliedAlpha;
    tmp_3.w4k_1 = tmp1_elvis_lhs_3 == null ? 1 : tmp1_elvis_lhs_3;
    var tmp_4 = this;
    var tmp1_elvis_lhs_4 = $attr == null ? null : $attr.preserveDrawingBuffer;
    tmp_4.x4k_1 = tmp1_elvis_lhs_4 == null ? 0 : tmp1_elvis_lhs_4;
    var tmp_5 = this;
    var tmp1_elvis_lhs_5 = $attr == null ? null : $attr.preferLowPowerToHighPerformance;
    tmp_5.y4k_1 = tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5;
    var tmp_6 = this;
    var tmp1_elvis_lhs_6 = $attr == null ? null : $attr.failIfMajorPerformanceCaveat;
    tmp_6.z4k_1 = tmp1_elvis_lhs_6 == null ? 0 : tmp1_elvis_lhs_6;
    var tmp_7 = this;
    var tmp1_elvis_lhs_7 = $attr == null ? null : $attr.enableExtensionsByDefault;
    tmp_7.a4l_1 = tmp1_elvis_lhs_7 == null ? 1 : tmp1_elvis_lhs_7;
    var tmp_8 = this;
    var tmp1_elvis_lhs_8 = $attr == null ? null : $attr.explicitSwapControl;
    tmp_8.b4l_1 = tmp1_elvis_lhs_8 == null ? 0 : tmp1_elvis_lhs_8;
    var tmp_9 = this;
    var tmp1_elvis_lhs_9 = $attr == null ? null : $attr.renderViaOffscreenBackBuffer;
    tmp_9.c4l_1 = tmp1_elvis_lhs_9 == null ? 0 : tmp1_elvis_lhs_9;
    var tmp_10 = this;
    var tmp1_elvis_lhs_10 = $attr == null ? null : $attr.majorVersion;
    tmp_10.d4l_1 = tmp1_elvis_lhs_10 == null ? 2 : tmp1_elvis_lhs_10;
    delete this.alpha;
    delete this.depth;
    delete this.stencil;
    delete this.antialias;
    delete this.premultipliedAlpha;
    delete this.preserveDrawingBuffer;
    delete this.preferLowPowerToHighPerformance;
    delete this.failIfMajorPerformanceCaveat;
    delete this.enableExtensionsByDefault;
    delete this.explicitSwapControl;
    delete this.renderViaOffscreenBackBuffer;
    delete this.majorVersion;
  }
  protoOf(createWebGLContext$contextAttributes$1).e4l = function () {
    return this.s4k_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).f4l = function () {
    return this.t4k_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).g4l = function () {
    return this.u4k_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).h4l = function () {
    return this.v4k_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).i4l = function () {
    return this.w4k_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).j4l = function () {
    return this.x4k_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).k4l = function () {
    return this.y4k_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).l4l = function () {
    return this.z4k_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).m4l = function () {
    return this.a4l_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).n4l = function () {
    return this.b4l_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).o4l = function () {
    return this.c4l_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).p4l = function () {
    return this.d4l_1;
  };
  var LANG$delegate;
  function Pattern(regex) {
    this.q4l_1 = Regex_init_$Create$(regex);
  }
  function compilePattern(regex) {
    _init_properties_Actuals_js_kt__v403ki();
    return new Pattern(regex);
  }
  function commonSynchronized(lock, block) {
    _init_properties_Actuals_js_kt__v403ki();
    block();
  }
  function LANG$delegate$lambda() {
    _init_properties_Actuals_js_kt__v403ki();
    var lang = window.navigator.language;
    var tmp;
    var tmp_0;
    if (lang == null) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      tmp_0 = charSequenceLength(lang) === 0;
    }
    if (tmp_0) {
      tmp = 'en-US';
    } else {
      tmp = lang;
    }
    return tmp;
  }
  var properties_initialized_Actuals_js_kt_fw1oy4;
  function _init_properties_Actuals_js_kt__v403ki() {
    if (!properties_initialized_Actuals_js_kt_fw1oy4) {
      properties_initialized_Actuals_js_kt_fw1oy4 = true;
      LANG$delegate = lazy(LANG$delegate$lambda);
    }
  }
  function Companion_60() {
  }
  protoOf(Companion_60).d3v = function () {
  };
  var Companion_instance_60;
  function Companion_getInstance_60() {
    return Companion_instance_60;
  }
  function Managed(ptr, finalizer, managed) {
    managed = managed === VOID ? true : managed;
    Native.call(this, ptr);
    this.z3u_1 = null;
    if (managed) {
      // Inline function 'kotlin.require' call
      if (!!(ptr === 0)) {
        var message = 'Managed ptr is 0';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!!(finalizer === 0)) {
        var message_0 = 'Managed finalizer is 0';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var thunk = new FinalizationThunk(finalizer, ptr);
      register(this, thunk);
      this.z3u_1 = thunk;
    }
  }
  protoOf(Managed).a2e = function () {
    if (Companion_instance_61.f3v() === this.a3v_1)
      throw RuntimeException_init_$Create$('Object already closed: ' + getKClassFromExpression(this).z9() + ', _ptr=' + this.a3v_1);
    else if (null == this.z3u_1)
      throw RuntimeException_init_$Create$("Object is not managed, can't close(): " + getKClassFromExpression(this).z9() + ', _ptr=' + this.a3v_1);
    else {
      unregister(this);
      ensureNotNull(this.z3u_1).r4k();
      this.z3u_1 = null;
      this.a3v_1 = 0;
    }
  };
  function FinalizationThunk(finalizer, obj) {
    this.p4k_1 = finalizer;
    this.q4k_1 = obj;
  }
  protoOf(FinalizationThunk).r4k = function () {
    if (!(this.q4k_1 === 0)) {
      org_jetbrains_skia_impl_Managed__invokeFinalizer(this.p4k_1, this.q4k_1);
    }
    this.q4k_1 = 0;
  };
  function get_INTEROP_SCOPE() {
    _init_properties_Native_js_kt__80argu();
    return INTEROP_SCOPE;
  }
  var INTEROP_SCOPE;
  function set_interopScopeCounter(_set____db54di) {
    _init_properties_Native_js_kt__80argu();
    interopScopeCounter = _set____db54di;
  }
  function get_interopScopeCounter() {
    _init_properties_Native_js_kt__80argu();
    return interopScopeCounter;
  }
  var interopScopeCounter;
  function reachabilityBarrier(obj) {
    _init_properties_Native_js_kt__80argu();
  }
  function Companion_61() {
  }
  protoOf(Companion_61).f3v = function () {
    return 0;
  };
  var Companion_instance_61;
  function Companion_getInstance_61() {
    return Companion_instance_61;
  }
  function Native(ptr) {
    if (ptr === Companion_instance_61.f3v())
      throw RuntimeException_init_$Create$("Can't wrap nullptr");
    this.a3v_1 = ptr;
  }
  protoOf(Native).equals = function (other) {
    if (this === other)
      return true;
    if (null == other)
      return false;
    if (!(other instanceof Native))
      return false;
    return this.a3v_1 === other.a3v_1 ? true : this.b3v(other);
  };
  protoOf(Native).hashCode = function () {
    return this.a3v_1;
  };
  protoOf(Native).b3v = function (other) {
    return false;
  };
  protoOf(Native).toString = function () {
    return plus(getKClassFromExpression(this).z9(), '(_ptr=0x') + toString_1(this.a3v_1, 16) + ')';
  };
  function Companion_62() {
  }
  var Companion_instance_62;
  function Companion_getInstance_62() {
    return Companion_instance_62;
  }
  function NativePointerArray(size) {
    this.b43_1 = new Int32Array(size);
  }
  protoOf(NativePointerArray).m = function (index) {
    return this.b43_1[index];
  };
  protoOf(NativePointerArray).l = function () {
    return this.b43_1.length;
  };
  function toWasm(dest, src) {
    _init_properties_Native_js_kt__80argu();
    var address = dest;
    var inductionVariable = 0;
    var last = src.length;
    while (inductionVariable < last) {
      var value = src[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      skia_memSetByte(address, value);
      address = address + 1 | 0;
    }
  }
  function toWasm_0(dest, src) {
    _init_properties_Native_js_kt__80argu();
    var address = dest;
    var inductionVariable = 0;
    var last = src.length;
    while (inductionVariable < last) {
      var value = src[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      skia_memSetShort(address, value);
      address = address + 2 | 0;
    }
  }
  function fromWasm(src, result) {
    _init_properties_Native_js_kt__80argu();
    var address = src;
    var inductionVariable = 0;
    var last = result.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result[index] = skia_memGetInt(address);
        address = address + 4 | 0;
      }
       while (inductionVariable <= last);
  }
  function toWasm_1(dest, src) {
    _init_properties_Native_js_kt__80argu();
    var address = dest;
    var inductionVariable = 0;
    var last = src.length;
    while (inductionVariable < last) {
      var value = src[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      skia_memSetInt(address, value);
      address = address + 4 | 0;
    }
  }
  function fromWasm_0(src, result) {
    _init_properties_Native_js_kt__80argu();
    var address = src;
    var inductionVariable = 0;
    var last = result.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result[index] = skia_memGetFloat(address);
        address = address + 4 | 0;
      }
       while (inductionVariable <= last);
  }
  function toWasm_2(dest, src) {
    _init_properties_Native_js_kt__80argu();
    var address = dest;
    var inductionVariable = 0;
    var last = src.length;
    while (inductionVariable < last) {
      var value = src[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      skia_memSetFloat(address, value);
      address = address + 4 | 0;
    }
  }
  function fromWasm_1(src, result) {
    _init_properties_Native_js_kt__80argu();
    var address = src;
    var inductionVariable = 0;
    var last = result.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result[index] = skia_memGetDouble(address);
        address = address + 8 | 0;
      }
       while (inductionVariable <= last);
  }
  function toWasm_3(dest, src) {
    _init_properties_Native_js_kt__80argu();
    var address = dest;
    var inductionVariable = 0;
    var last = src.length;
    while (inductionVariable < last) {
      var value = src[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      skia_memSetDouble(address, value);
      address = address + 8 | 0;
    }
  }
  function fromWasm_2(src, result) {
    _init_properties_Native_js_kt__80argu();
    var address = src;
    var inductionVariable = 0;
    var last = result.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result[index] = skia_memGetByte(address);
        address = address + 1 | 0;
      }
       while (inductionVariable <= last);
  }
  function access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp() {
    return get_INTEROP_SCOPE();
  }
  function access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() {
    return get_interopScopeCounter();
  }
  function access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(_set____db54di) {
    return set_interopScopeCounter(_set____db54di);
  }
  var properties_initialized_Native_js_kt_fdhhkg;
  function _init_properties_Native_js_kt__80argu() {
    if (!properties_initialized_Native_js_kt_fdhhkg) {
      properties_initialized_Native_js_kt_fdhhkg = true;
      INTEROP_SCOPE = new InteropScope();
      interopScopeCounter = 0;
    }
  }
  function RefCnt_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_17().r4l_1, true);
    RefCnt.call($this);
    return $this;
  }
  function RefCnt_init_$Init$_0(ptr, allowClose, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_17().r4l_1, allowClose);
    RefCnt.call($this);
    return $this;
  }
  protoOf(RefCnt).c3z = function () {
    Stats_instance.x3u();
    return org_jetbrains_skia_impl_RefCnt__getRefCount(this.a3v_1);
  };
  protoOf(RefCnt).toString = function () {
    var s = protoOf(Managed).toString.call(this);
    return substring(s, 0, s.length - 1 | 0) + ', refCount=' + this.c3z() + ')';
  };
  function RefCnt() {
  }
  function _FinalizerHolder_17() {
    _FinalizerHolder_instance_17 = this;
    this.r4l_1 = org_jetbrains_skia_impl_RefCnt__getFinalizer();
  }
  var _FinalizerHolder_instance_17;
  function _FinalizerHolder_getInstance_17() {
    if (_FinalizerHolder_instance_17 == null)
      new _FinalizerHolder_17();
    return _FinalizerHolder_instance_17;
  }
  function Stats() {
  }
  protoOf(Stats).x3u = function () {
  };
  var Stats_instance;
  function Stats_getInstance() {
    return Stats_instance;
  }
  function currentNanoTime() {
    return numberToLong(window.performance.now() * 1000000);
  }
  function loadOpenGLLibrary() {
  }
  function disposeCanvas($this) {
    var tmp0_safe_receiver = $this.w4l_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a2e();
    }
    $this.w4l_1 = null;
    var tmp1_safe_receiver = $this.x4l_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.a2e();
    }
    $this.x4l_1 = null;
  }
  function CanvasRenderer$needRedraw$lambda(this$0) {
    return function (timestamp) {
      this$0.z4l_1 = false;
      GL.makeContextCurrent(this$0.s4l_1);
      var tmp0_safe_receiver = this$0.y4l_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.z2m(-1);
      var tmp1_safe_receiver = this$0.y4l_1;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver.i3y();
      this$0.a4m(timestamp);
      var tmp2_safe_receiver = this$0.w4l_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.u47();
      }
      this$0.v4l_1.z3z();
      return Unit_instance;
    };
  }
  function CanvasRenderer(contextPointer, width, height) {
    this.s4l_1 = contextPointer;
    this.t4l_1 = width;
    this.u4l_1 = height;
    this.w4l_1 = null;
    this.x4l_1 = null;
    this.y4l_1 = null;
    GL.makeContextCurrent(this.s4l_1);
    this.v4l_1 = Companion_getInstance_9().w3z();
    this.b4m();
    this.z4l_1 = false;
  }
  protoOf(CanvasRenderer).b4m = function () {
    disposeCanvas(this);
    this.x4l_1 = Companion_getInstance().e3v(this.t4l_1, this.u4l_1, 1, 8, 0, 32856);
    var tmp = this;
    var tmp0_elvis_lhs = Companion_getInstance_36().l47(this.v4l_1, ensureNotNull(this.x4l_1), SurfaceOrigin_BOTTOM_LEFT_getInstance(), SurfaceColorFormat_RGBA_8888_getInstance(), Companion_getInstance_6().i3z_1, new SurfaceProps());
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw new RenderException('Cannot create surface');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.w4l_1 = tmp_0;
    this.y4l_1 = ensureNotNull(this.w4l_1).s47();
  };
  protoOf(CanvasRenderer).c4m = function () {
    if (this.z4l_1) {
      return Unit_instance;
    }
    this.z4l_1 = true;
    var tmp = window;
    tmp.requestAnimationFrame(CanvasRenderer$needRedraw$lambda(this));
  };
  function get_hostOs() {
    _init_properties_OsArch_js_kt__jkqwph();
    return hostOs;
  }
  var hostOs;
  function get_hostArch() {
    _init_properties_OsArch_js_kt__jkqwph();
    return hostArch;
  }
  var hostArch;
  var hostId$delegate;
  function detectHostOs() {
    _init_properties_OsArch_js_kt__jkqwph();
    // Inline function 'kotlin.takeIf' call
    var this_0 = getNavigatorInfo();
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var platformInfo = tmp0_elvis_lhs == null ? window.navigator.userAgent : tmp0_elvis_lhs;
    return contains(platformInfo, 'Android', true) ? OS_Android_getInstance() : contains(platformInfo, 'iPhone', true) ? OS_Ios_getInstance() : contains(platformInfo, 'iOS', true) ? OS_Ios_getInstance() : contains(platformInfo, 'iPad', true) ? OS_Ios_getInstance() : contains(platformInfo, 'Linux', true) ? OS_Linux_getInstance() : contains(platformInfo, 'Mac', true) ? OS_MacOS_getInstance() : contains(platformInfo, 'Win', true) ? OS_Windows_getInstance() : OS_Unknown_getInstance();
  }
  function hostId$delegate$lambda() {
    _init_properties_OsArch_js_kt__jkqwph();
    return get_hostOs().g4j_1 + '-' + get_hostArch().k4j_1;
  }
  var properties_initialized_OsArch_js_kt_ik094d;
  function _init_properties_OsArch_js_kt__jkqwph() {
    if (!properties_initialized_OsArch_js_kt_ik094d) {
      properties_initialized_OsArch_js_kt_ik094d = true;
      hostOs = detectHostOs();
      hostArch = Arch_Unknown_getInstance();
      hostId$delegate = lazy(hostId$delegate$lambda);
    }
  }
  function attachTo($this, htmlCanvas) {
    $this.g4m_1 = htmlCanvas;
    var tmp = $this;
    tmp.d4m_1 = new SkiaLayer$attachTo$1(htmlCanvas, $this);
  }
  function SkiaLayer$attachTo$1($htmlCanvas, this$0) {
    this.p4m_1 = this$0;
    CanvasRenderer.call(this, createWebGLContext($htmlCanvas), $htmlCanvas.width, $htmlCanvas.height);
  }
  protoOf(SkiaLayer$attachTo$1).a4m = function (currentTimestamp) {
    var currentNanos = currentTimestamp * 1000000;
    var tmp0_safe_receiver = this.p4m_1.f4m_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q4m(ensureNotNull(this.y4l_1), this.t4l_1, this.u4l_1, numberToLong(currentNanos));
    }
  };
  function SkiaLayer() {
    this.d4m_1 = null;
    this.e4m_1 = GraphicsApi_WEBGL_getInstance();
    this.f4m_1 = null;
    this.g4m_1 = null;
  }
  protoOf(SkiaLayer).c4m = function () {
    var tmp0_safe_receiver = this.d4m_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c4m();
    }
  };
  protoOf(SkiaLayer).r4m = function (container) {
    attachTo(this, container instanceof HTMLCanvasElement ? container : THROW_CCE());
  };
  function get_currentSystemTheme() {
    return SystemTheme_UNKNOWN_getInstance();
  }
  function convertToZeroTerminatedString(string) {
    var utf8 = encodeToByteArray(string);
    return copyOf(utf8, utf8.length + 1 | 0);
  }
  //region block: post-declaration
  protoOf(Bitmap).s3u = get_width;
  protoOf(Bitmap).t3u = get_height;
  protoOf(Bitmap).e3w = get_colorType;
  protoOf(Bitmap).f3w = get_colorSpace;
  protoOf(Bitmap).g3w = get_isOpaque;
  protoOf(Image).s3u = get_width;
  protoOf(Image).t3u = get_height;
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'alpha', function () {
    return this.e4l();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'depth', function () {
    return this.f4l();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'stencil', function () {
    return this.g4l();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'antialias', function () {
    return this.h4l();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'premultipliedAlpha', function () {
    return this.i4l();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preserveDrawingBuffer', function () {
    return this.j4l();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preferLowPowerToHighPerformance', function () {
    return this.k4l();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'failIfMajorPerformanceCaveat', function () {
    return this.l4l();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'enableExtensionsByDefault', function () {
    return this.m4l();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'explicitSwapControl', function () {
    return this.n4l();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'renderViaOffscreenBackBuffer', function () {
    return this.o4l();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'majorVersion', function () {
    return this.p4l();
  });
  //endregion
  //region block: init
  Companion_instance_3 = new Companion_3();
  Companion_instance_12 = new Companion_12();
  Companion_instance_16 = new Companion_16();
  Companion_instance_18 = new Companion_18();
  Companion_instance_32 = new Companion_32();
  Companion_instance_33 = new Companion_33();
  Companion_instance_41 = new Companion_41();
  Companion_instance_45 = new Companion_45();
  Companion_instance_46 = new Companion_46();
  Companion_instance_52 = new Companion_52();
  Companion_instance_54 = new Companion_54();
  Companion_instance_55 = new Companion_55();
  Companion_instance_60 = new Companion_60();
  Companion_instance_61 = new Companion_61();
  Companion_instance_62 = new Companion_62();
  Stats_instance = new Stats();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Alignment_CENTER_getInstance;
  _.$_$.b = Alignment_END_getInstance;
  _.$_$.c = Alignment_JUSTIFY_getInstance;
  _.$_$.d = Alignment_LEFT_getInstance;
  _.$_$.e = Alignment_RIGHT_getInstance;
  _.$_$.f = Alignment_START_getInstance;
  _.$_$.g = BaselineMode_ALPHABETIC_getInstance;
  _.$_$.h = DecorationLineStyle_DASHED_getInstance;
  _.$_$.i = DecorationLineStyle_DOTTED_getInstance;
  _.$_$.j = DecorationLineStyle_DOUBLE_getInstance;
  _.$_$.k = DecorationLineStyle_SOLID_getInstance;
  _.$_$.l = DecorationLineStyle_WAVY_getInstance;
  _.$_$.m = Direction_LTR_getInstance;
  _.$_$.n = Direction_RTL_getInstance;
  _.$_$.o = HeightMode_ALL_getInstance;
  _.$_$.p = HeightMode_DISABLE_ALL_getInstance;
  _.$_$.q = HeightMode_DISABLE_FIRST_ASCENT_getInstance;
  _.$_$.r = HeightMode_DISABLE_LAST_DESCENT_getInstance;
  _.$_$.s = PlaceholderAlignment_ABOVE_BASELINE_getInstance;
  _.$_$.t = PlaceholderAlignment_BOTTOM_getInstance;
  _.$_$.u = PlaceholderAlignment_MIDDLE_getInstance;
  _.$_$.v = PlaceholderAlignment_TOP_getInstance;
  _.$_$.w = RectHeightMode_MAX_getInstance;
  _.$_$.x = RectHeightMode_STRUT_getInstance;
  _.$_$.y = RectWidthMode_TIGHT_getInstance;
  _.$_$.z = SVGLengthUnit_PX_getInstance;
  _.$_$.a1 = SVGPreserveAspectRatioAlign_NONE_getInstance;
  _.$_$.b1 = BlendMode_CLEAR_getInstance;
  _.$_$.c1 = BlendMode_COLOR_BURN_getInstance;
  _.$_$.d1 = BlendMode_COLOR_DODGE_getInstance;
  _.$_$.e1 = BlendMode_COLOR_getInstance;
  _.$_$.f1 = BlendMode_DARKEN_getInstance;
  _.$_$.g1 = BlendMode_DIFFERENCE_getInstance;
  _.$_$.h1 = BlendMode_DST_ATOP_getInstance;
  _.$_$.i1 = BlendMode_DST_IN_getInstance;
  _.$_$.j1 = BlendMode_DST_OUT_getInstance;
  _.$_$.k1 = BlendMode_DST_OVER_getInstance;
  _.$_$.l1 = BlendMode_DST_getInstance;
  _.$_$.m1 = BlendMode_EXCLUSION_getInstance;
  _.$_$.n1 = BlendMode_HARD_LIGHT_getInstance;
  _.$_$.o1 = BlendMode_HUE_getInstance;
  _.$_$.p1 = BlendMode_LIGHTEN_getInstance;
  _.$_$.q1 = BlendMode_LUMINOSITY_getInstance;
  _.$_$.r1 = BlendMode_MODULATE_getInstance;
  _.$_$.s1 = BlendMode_MULTIPLY_getInstance;
  _.$_$.t1 = BlendMode_OVERLAY_getInstance;
  _.$_$.u1 = BlendMode_PLUS_getInstance;
  _.$_$.v1 = BlendMode_SATURATION_getInstance;
  _.$_$.w1 = BlendMode_SCREEN_getInstance;
  _.$_$.x1 = BlendMode_SOFT_LIGHT_getInstance;
  _.$_$.y1 = BlendMode_SRC_ATOP_getInstance;
  _.$_$.z1 = BlendMode_SRC_IN_getInstance;
  _.$_$.a2 = BlendMode_SRC_OUT_getInstance;
  _.$_$.b2 = BlendMode_SRC_OVER_getInstance;
  _.$_$.c2 = BlendMode_SRC_getInstance;
  _.$_$.d2 = BlendMode_XOR_getInstance;
  _.$_$.e2 = ClipMode_DIFFERENCE_getInstance;
  _.$_$.f2 = ClipMode_INTERSECT_getInstance;
  _.$_$.g2 = ColorAlphaType_OPAQUE_getInstance;
  _.$_$.h2 = ColorAlphaType_PREMUL_getInstance;
  _.$_$.i2 = ColorType_ALPHA_8_getInstance;
  _.$_$.j2 = ColorType_RGBA_F16_getInstance;
  _.$_$.k2 = ColorType_RGB_565_getInstance;
  _.$_$.l2 = FilterBlurMode_NORMAL_getInstance;
  _.$_$.m2 = FilterMode_LINEAR_getInstance;
  _.$_$.n2 = FilterMode_NEAREST_getInstance;
  _.$_$.o2 = FilterTileMode_CLAMP_getInstance;
  _.$_$.p2 = FilterTileMode_DECAL_getInstance;
  _.$_$.q2 = FilterTileMode_MIRROR_getInstance;
  _.$_$.r2 = FilterTileMode_REPEAT_getInstance;
  _.$_$.s2 = FontEdging_ALIAS_getInstance;
  _.$_$.t2 = FontEdging_ANTI_ALIAS_getInstance;
  _.$_$.u2 = FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance;
  _.$_$.v2 = FontHinting_FULL_getInstance;
  _.$_$.w2 = FontHinting_NONE_getInstance;
  _.$_$.x2 = FontHinting_NORMAL_getInstance;
  _.$_$.y2 = FontHinting_SLIGHT_getInstance;
  _.$_$.z2 = FontSlant_ITALIC_getInstance;
  _.$_$.a3 = FontSlant_UPRIGHT_getInstance;
  _.$_$.b3 = MipmapMode_NEAREST_getInstance;
  _.$_$.c3 = MipmapMode_NONE_getInstance;
  _.$_$.d3 = PaintMode_FILL_getInstance;
  _.$_$.e3 = PaintMode_STROKE_getInstance;
  _.$_$.f3 = PaintStrokeCap_BUTT_getInstance;
  _.$_$.g3 = PaintStrokeCap_ROUND_getInstance;
  _.$_$.h3 = PaintStrokeCap_SQUARE_getInstance;
  _.$_$.i3 = PaintStrokeJoin_BEVEL_getInstance;
  _.$_$.j3 = PaintStrokeJoin_MITER_getInstance;
  _.$_$.k3 = PaintStrokeJoin_ROUND_getInstance;
  _.$_$.l3 = PathDirection_CLOCKWISE_getInstance;
  _.$_$.m3 = PathDirection_COUNTER_CLOCKWISE_getInstance;
  _.$_$.n3 = PathFillMode_EVEN_ODD_getInstance;
  _.$_$.o3 = PathFillMode_WINDING_getInstance;
  _.$_$.p3 = PathOp_DIFFERENCE_getInstance;
  _.$_$.q3 = PathOp_INTERSECT_getInstance;
  _.$_$.r3 = PathOp_REVERSE_DIFFERENCE_getInstance;
  _.$_$.s3 = PathOp_UNION_getInstance;
  _.$_$.t3 = PathOp_XOR_getInstance;
  _.$_$.u3 = FontCollection_init_$Create$;
  _.$_$.v3 = TextStyle_init_$Create$;
  _.$_$.w3 = TypefaceFontProviderWithFallback_init_$Create$;
  _.$_$.x3 = SVGDOM_init_$Create$;
  _.$_$.y3 = SVGPreserveAspectRatio_init_$Create$_0;
  _.$_$.z3 = Bitmap_init_$Create$;
  _.$_$.a4 = Canvas_init_$Create$;
  _.$_$.b4 = Font_init_$Create$_0;
  _.$_$.c4 = FontStyle_init_$Create$;
  _.$_$.d4 = FontVariation_init_$Create$;
  _.$_$.e4 = Paint_init_$Create$;
  _.$_$.f4 = Path_init_$Create$;
  _.$_$.g4 = PathMeasure_init_$Create$;
  _.$_$.h4 = PictureRecorder_init_$Create$;
  _.$_$.i4 = RTreeFactory_init_$Create$;
  _.$_$.j4 = RenderNode_init_$Create$;
  _.$_$.k4 = RenderNodeContext_init_$Create$;
  _.$_$.l4 = CharDirection_getInstance;
  _.$_$.m4 = CharProperties_getInstance;
  _.$_$.n4 = Companion_getInstance_0;
  _.$_$.o4 = Companion_getInstance_1;
  _.$_$.p4 = Companion_getInstance_4;
  _.$_$.q4 = Companion_getInstance_6;
  _.$_$.r4 = Companion_getInstance_7;
  _.$_$.s4 = Companion_getInstance_8;
  _.$_$.t4 = Companion_getInstance_11;
  _.$_$.u4 = Companion_getInstance_13;
  _.$_$.v4 = Companion_getInstance_14;
  _.$_$.w4 = Companion_getInstance_19;
  _.$_$.x4 = Companion_getInstance_22;
  _.$_$.y4 = Companion_getInstance_23;
  _.$_$.z4 = Companion_getInstance_26;
  _.$_$.a5 = Companion_instance_32;
  _.$_$.b5 = Companion_instance_33;
  _.$_$.c5 = Companion_getInstance_34;
  _.$_$.d5 = Companion_getInstance_35;
  _.$_$.e5 = ShadowUtils_getInstance;
  _.$_$.f5 = Companion_getInstance_36;
  _.$_$.g5 = DecorationStyle;
  _.$_$.h5 = FontRastrSettings;
  _.$_$.i5 = LineMetrics;
  _.$_$.j5 = ParagraphBuilder;
  _.$_$.k5 = ParagraphStyle;
  _.$_$.l5 = PlaceholderStyle;
  _.$_$.m5 = Shadow;
  _.$_$.n5 = TextBox;
  _.$_$.o5 = TextIndent;
  _.$_$.p5 = SVGLength;
  _.$_$.q5 = ColorInfo;
  _.$_$.r5 = CubicResampler;
  _.$_$.s5 = FilterMipmap;
  _.$_$.t5 = FontMgrWithFallback;
  _.$_$.u5 = GradientStyle;
  _.$_$.v5 = ImageInfo;
  _.$_$.w5 = Matrix33;
  _.$_$.x5 = Matrix44;
  _.$_$.y5 = Point3;
  _.$_$.z5 = Point;
  _.$_$.a6 = Rect;
  _.$_$.b6 = onWasmReady;
  _.$_$.c6 = ClipboardManager;
  _.$_$.d6 = SkiaLayer;
  _.$_$.e6 = URIManager;
  _.$_$.f6 = currentNanoTime;
  _.$_$.g6 = get_currentSystemTheme;
  _.$_$.h6 = get_hostOs;
  //endregion
  return _;
}));

//# sourceMappingURL=skiko-kjs.js.map
