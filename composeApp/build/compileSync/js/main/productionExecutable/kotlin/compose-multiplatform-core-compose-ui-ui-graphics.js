(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-util.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./skiko-kjs.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['skiko-kjs']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_collection_collection, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.b;
  var _FloatFloatPair___init__impl__2q1dd3 = kotlin_androidx_collection_collection.$_$.l1;
  var isNaN_0 = kotlin_kotlin.$_$.yd;
  var fastCbrt = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var Unit_instance = kotlin_kotlin.$_$.b3;
  var protoOf = kotlin_kotlin.$_$.z9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i9;
  var THROW_CCE = kotlin_kotlin.$_$.md;
  var initMetadataForClass = kotlin_kotlin.$_$.h9;
  var equals = kotlin_kotlin.$_$.z8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var Size__isEmpty_impl_o9ye97 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var shiftRight = kotlin_kotlin.$_$.j8;
  var convertToInt = kotlin_kotlin.$_$.x7;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.u2;
  var floatFromBits = kotlin_kotlin.$_$.a9;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var Long = kotlin_kotlin.$_$.hd;
  var bitwiseAnd = kotlin_kotlin.$_$.t7;
  var toRawBits = kotlin_kotlin.$_$.me;
  var fromInt = kotlin_kotlin.$_$.b8;
  var shiftLeft = kotlin_kotlin.$_$.h8;
  var bitwiseOr = kotlin_kotlin.$_$.u7;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var hashCode = kotlin_kotlin.$_$.g9;
  var Offset__hashCode_impl_hbql41 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v;
  var bitwiseXor = kotlin_kotlin.$_$.v7;
  var subtract = kotlin_kotlin.$_$.k8;
  var equalsLong = kotlin_kotlin.$_$.a8;
  var Offset__toString_impl_4ffbou = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var toString = kotlin_kotlin.$_$.ba;
  var toString_0 = kotlin_kotlin.$_$.oe;
  var get_center = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var _Size___get_minDimension__impl__4iso0r = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var getNumberHashCode = kotlin_kotlin.$_$.d9;
  var initMetadataForInterface = kotlin_kotlin.$_$.l9;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.m2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.n2;
  var shiftRightUnsigned = kotlin_kotlin.$_$.i8;
  var convertToShort = kotlin_kotlin.$_$.y7;
  var ulongToDouble = kotlin_kotlin.$_$.se;
  var ULong__hashCode_impl_6hv2lb = kotlin_kotlin.$_$.o2;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var numberToInt = kotlin_kotlin.$_$.x9;
  var toShort = kotlin_kotlin.$_$.aa;
  var objectCreate = kotlin_kotlin.$_$.y9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f;
  var trimIndent = kotlin_kotlin.$_$.sc;
  var get_isSimple = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ce;
  var _CornerRadius___get_packedValue__impl__okv4jq = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var _CornerRadius___init__impl__ojmabe = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var Enum = kotlin_kotlin.$_$.bd;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o;
  var lerp_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m;
  var charSequenceLength = kotlin_kotlin.$_$.u8;
  var getKClassFromExpression = kotlin_kotlin.$_$.xa;
  var getStringHashCode = kotlin_kotlin.$_$.f9;
  var withSign = kotlin_kotlin.$_$.ja;
  var compareTo = kotlin_kotlin.$_$.v8;
  var FunctionAdapter = kotlin_kotlin.$_$.m8;
  var isInterface = kotlin_kotlin.$_$.q9;
  var coerceAtLeast = kotlin_kotlin.$_$.ka;
  var initMetadataForObject = kotlin_kotlin.$_$.n9;
  var mutableIntObjectMapOf = kotlin_androidx_collection_collection.$_$.z;
  var arrayCopy = kotlin_kotlin.$_$.u3;
  var coerceIn = kotlin_kotlin.$_$.qa;
  var contentEquals = kotlin_kotlin.$_$.f4;
  var contentHashCode = kotlin_kotlin.$_$.h4;
  var toBits = kotlin_kotlin.$_$.ke;
  var isNaN_1 = kotlin_kotlin.$_$.zd;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var Size__toString_impl_o87ni8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var toPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g;
  var toPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h;
  var roundToPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c;
  var toDp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f;
  var toDp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e;
  var toDp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var toDpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w3;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var CornerRadius = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a;
  var Density_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var mutableScatterSetOf = kotlin_androidx_collection_collection.$_$.j1;
  var ensureNotNull = kotlin_kotlin.$_$.wd;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var roundToInt = kotlin_kotlin.$_$.ea;
  var toSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  var IntOffset__hashCode_impl_w5rrxs = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y2;
  var IntOffset__toString_impl_h46d8h = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var IntSize__toString_impl_54w9zl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var Rect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var charCodeAt = kotlin_kotlin.$_$.s8;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a2;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.c2;
  var numberToChar = kotlin_kotlin.$_$.v9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.e2;
  var multiply = kotlin_kotlin.$_$.e8;
  var add = kotlin_kotlin.$_$.s7;
  var ulongCompare = kotlin_kotlin.$_$.re;
  var toNumber = kotlin_kotlin.$_$.l8;
  var substring = kotlin_kotlin.$_$.kc;
  var toDouble = kotlin_kotlin.$_$.lc;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.q2;
  var countLeadingZeroBits = kotlin_kotlin.$_$.sd;
  var compare = kotlin_kotlin.$_$.w7;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.t2;
  var doubleFromBits = kotlin_kotlin.$_$.y8;
  var longArrayOf = kotlin_kotlin.$_$.s9;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.p2;
  var getBooleanHashCode = kotlin_kotlin.$_$.b9;
  var toString_1 = kotlin_kotlin.$_$.f2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.b2;
  var emptyList = kotlin_kotlin.$_$.p4;
  var BlendMode_SRC_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b2;
  var BlendMode_LUMINOSITY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q1;
  var BlendMode_COLOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e1;
  var BlendMode_SATURATION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v1;
  var BlendMode_HUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o1;
  var BlendMode_MULTIPLY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s1;
  var BlendMode_EXCLUSION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m1;
  var BlendMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g1;
  var BlendMode_SOFT_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x1;
  var BlendMode_HARD_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n1;
  var BlendMode_COLOR_BURN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c1;
  var BlendMode_COLOR_DODGE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d1;
  var BlendMode_LIGHTEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p1;
  var BlendMode_DARKEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f1;
  var BlendMode_OVERLAY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t1;
  var BlendMode_SCREEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w1;
  var BlendMode_MODULATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r1;
  var BlendMode_PLUS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u1;
  var BlendMode_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d2;
  var BlendMode_DST_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h1;
  var BlendMode_SRC_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y1;
  var BlendMode_DST_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j1;
  var BlendMode_SRC_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a2;
  var BlendMode_DST_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i1;
  var BlendMode_SRC_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z1;
  var BlendMode_DST_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k1;
  var BlendMode_DST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l1;
  var BlendMode_SRC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c2;
  var BlendMode_CLEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b1;
  var Matrix33 = kotlin_org_jetbrains_skiko_skiko.$_$.w5;
  var Companion_instance = kotlin_org_jetbrains_skiko_skiko.$_$.b5;
  var Companion_instance_0 = kotlin_org_jetbrains_skiko_skiko.$_$.a5;
  var Canvas_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.a4;
  var Companion_getInstance_3 = kotlin_org_jetbrains_skiko_skiko.$_$.w4;
  var ClipMode_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f2;
  var ClipMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e2;
  var Matrix44 = kotlin_org_jetbrains_skiko_skiko.$_$.x5;
  var FilterMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n2;
  var MipmapMode_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c3;
  var FilterMipmap = kotlin_org_jetbrains_skiko_skiko.$_$.s5;
  var CubicResampler = kotlin_org_jetbrains_skiko_skiko.$_$.r5;
  var FilterMode_LINEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m2;
  var MipmapMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b3;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d3;
  var PaintMode_STROKE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e3;
  var PaintStrokeCap_BUTT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f3;
  var PaintStrokeCap_SQUARE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h3;
  var PaintStrokeCap_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g3;
  var PaintStrokeJoin_MITER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j3;
  var PaintStrokeJoin_BEVEL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i3;
  var PaintStrokeJoin_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k3;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.e4;
  var coerceIn_0 = kotlin_kotlin.$_$.ra;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.w1;
  var PathOp_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t3;
  var PathOp_REVERSE_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r3;
  var PathOp_UNION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s3;
  var PathOp_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q3;
  var PathOp_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p3;
  var Path_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.f4;
  var PathFillMode_WINDING_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o3;
  var PathFillMode_EVEN_ODD_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n3;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.y4;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.z4;
  var PathDirection_COUNTER_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m3;
  var PathDirection_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l3;
  var PathMeasure_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.g4;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.p4;
  var RenderNodeContext_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.k4;
  var RenderNode_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.j4;
  var ColorAlphaType_OPAQUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g2;
  var ColorAlphaType_PREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h2;
  var ColorInfo = kotlin_org_jetbrains_skiko_skiko.$_$.q5;
  var ImageInfo = kotlin_org_jetbrains_skiko_skiko.$_$.v5;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.z3;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.r4;
  var ColorType_RGBA_F16_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j2;
  var ColorType_RGB_565_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k2;
  var ColorType_ALPHA_8_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i2;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.q4;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.d5;
  var toFloatArray = kotlin_kotlin.$_$.o6;
  var GradientStyle = kotlin_org_jetbrains_skiko_skiko.$_$.u5;
  var FilterTileMode_CLAMP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o2;
  var FilterTileMode_DECAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p2;
  var FilterTileMode_MIRROR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q2;
  var FilterTileMode_REPEAT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r2;
  var invert = kotlin_kotlin.$_$.c8;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y3;
  var Point = kotlin_org_jetbrains_skiko_skiko.$_$.z5;
  var RoundRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.n4;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(BlendMode, 'BlendMode');
  initMetadataForClass(Brush, 'Brush');
  initMetadataForClass(SolidColor, 'SolidColor', VOID, Brush);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ShaderBrush, 'ShaderBrush', VOID, Brush);
  initMetadataForClass(LinearGradient, 'LinearGradient', VOID, ShaderBrush);
  initMetadataForClass(RadialGradient, 'RadialGradient', VOID, ShaderBrush);
  initMetadataForClass(SweepGradient, 'SweepGradient', VOID, ShaderBrush);
  function clipRect(rect, clipOp) {
    return this.q4s(rect.v3t_1, rect.w3t_1, rect.x3t_1, rect.y3t_1, clipOp);
  }
  function clipRect$default(rect, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_14().t4s_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.p4s(rect, clipOp);
      tmp = Unit_instance;
    } else {
      clipRect(rect, clipOp);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function clipRect$default_0(left, top, right, bottom, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_14().t4s_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.q4s(left, top, right, bottom, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.q4s.call(this, left, top, right, bottom, new ClipOp(clipOp));
    }
    return tmp;
  }
  function clipPath$default(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_14().t4s_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.v4s(path, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.v4s.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  initMetadataForInterface(Canvas, 'Canvas');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(ClipOp, 'ClipOp');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Color, 'Color');
  initMetadataForInterface(ColorProducer, 'ColorProducer');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(ColorFilter, 'ColorFilter');
  initMetadataForClass(BlendModeColorFilter, 'BlendModeColorFilter', VOID, ColorFilter);
  initMetadataForCompanion(Companion_4);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(ImageBitmapConfig, 'ImageBitmapConfig');
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(Matrix, 'Matrix');
  initMetadataForClass(Outline, 'Outline');
  initMetadataForClass(Rectangle, 'Rectangle', VOID, Outline);
  initMetadataForClass(Rounded, 'Rounded', VOID, Outline);
  initMetadataForClass(Generic, 'Generic', VOID, Outline);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  function quadraticTo(x1, y1, x2, y2) {
    this.w4w(x1, y1, x2, y2);
  }
  function relativeQuadraticTo(dx1, dy1, dx2, dy2) {
    this.y4w(dx1, dy1, dx2, dy2);
  }
  function addRect$default(rect, direction, $super) {
    direction = direction === VOID ? Direction_CounterClockwise_getInstance() : direction;
    var tmp;
    if ($super === VOID) {
      this.c4x(rect, direction);
      tmp = Unit_instance;
    } else {
      tmp = $super.c4x.call(this, rect, direction);
    }
    return tmp;
  }
  function addRoundRect$default(roundRect, direction, $super) {
    direction = direction === VOID ? Direction_CounterClockwise_getInstance() : direction;
    var tmp;
    if ($super === VOID) {
      this.e4x(roundRect, direction);
      tmp = Unit_instance;
    } else {
      tmp = $super.e4x.call(this, roundRect, direction);
    }
    return tmp;
  }
  function addPath$default(path, offset, $super) {
    offset = offset === VOID ? Companion_getInstance_0().r3t_1 : offset;
    var tmp;
    if ($super === VOID) {
      this.f4x(path, offset);
      tmp = Unit_instance;
    } else {
      tmp = $super.f4x.call(this, path, new Offset(offset));
    }
    return tmp;
  }
  function rewind() {
    this.p30();
  }
  initMetadataForInterface(Path, 'Path');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(PathFillType, 'PathFillType');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(RectangleShape$1);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(Shadow, 'Shadow', Shadow);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(StrokeCap, 'StrokeCap');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(StrokeJoin, 'StrokeJoin');
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(TileMode, 'TileMode');
  initMetadataForClass(Adaptation, 'Adaptation');
  initMetadataForClass(Adaptation$Companion$Bradford$1, VOID, VOID, Adaptation);
  initMetadataForClass(Adaptation$Companion$VonKries$1, VOID, VOID, Adaptation);
  initMetadataForClass(Adaptation$Companion$Ciecat02$1, VOID, VOID, Adaptation);
  initMetadataForCompanion(Companion_14);
  initMetadataForCompanion(Companion_15);
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(ColorSpace, 'ColorSpace');
  initMetadataForInterface(DoubleFunction, 'DoubleFunction');
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForObject(ColorSpaces, 'ColorSpaces');
  initMetadataForClass(Connector, 'Connector');
  initMetadataForClass(Connector$Companion$identity$1, VOID, VOID, Connector);
  initMetadataForClass(RgbConnector, 'RgbConnector', VOID, Connector);
  initMetadataForCompanion(Companion_17);
  initMetadataForObject(Illuminant, 'Illuminant');
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(Lab, 'Lab', VOID, ColorSpace);
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(Oklab, 'Oklab', VOID, ColorSpace);
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForCompanion(Companion_21);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(Rgb, 'Rgb', VOID, ColorSpace);
  initMetadataForClass(TransferParameters, 'TransferParameters');
  initMetadataForClass(WhitePoint, 'WhitePoint');
  initMetadataForClass(Xyz, 'Xyz', VOID, ColorSpace);
  initMetadataForClass(DrawParams, 'DrawParams', DrawParams);
  function set_canvas(_) {
  }
  function get_canvas() {
    return EmptyCanvas_instance;
  }
  function set_layoutDirection(_) {
  }
  function get_layoutDirection() {
    return LayoutDirection_Ltr_getInstance();
  }
  function set_density(_) {
  }
  function get_density() {
    return get_DefaultDensity();
  }
  function set_graphicsLayer(_) {
  }
  function get_graphicsLayer() {
    return null;
  }
  initMetadataForInterface(DrawContext, 'DrawContext');
  initMetadataForClass(CanvasDrawScope$drawContext$1, VOID, VOID, VOID, [DrawContext]);
  function get_center_0() {
    return get_center(this.a54().z3t());
  }
  function get_size() {
    return this.a54().z3t();
  }
  function drawLine$default(brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $super) {
    strokeWidth = strokeWidth === VOID ? 0.0 : strokeWidth;
    cap = cap === VOID ? Companion_getInstance_36().u54_1 : cap;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g4w_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.b54(brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.b54.call(this, brush, new Offset(start), new Offset(end), strokeWidth, new StrokeCap(cap), pathEffect, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRect$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().r3t_1 : topLeft;
    size = size === VOID ? offsetSize(this, this.z3t(), topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g4w_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.n4w(brush, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.n4w.call(this, brush, new Offset(topLeft), new Size(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRect$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().r3t_1 : topLeft;
    size = size === VOID ? offsetSize(this, this.z3t(), topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g4w_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.k4w(color, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.k4w.call(this, new Color(color), new Offset(topLeft), new Size(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    this.g54(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode);
  }
  function drawImage$default(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality, $super) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().f4o_1 : srcOffset;
    var tmp;
    if (srcSize === VOID) {
      var tmp0 = image.s3u();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = image.t3u();
      var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      tmp = _IntSize___init__impl__emcjft(tmp$ret$0);
    } else {
      tmp = srcSize;
    }
    srcSize = tmp;
    dstOffset = dstOffset === VOID ? Companion_getInstance_1().f4o_1 : dstOffset;
    dstSize = dstSize === VOID ? srcSize : dstSize;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g4w_1 : blendMode;
    filterQuality = filterQuality === VOID ? Companion_getInstance_35().h4w_1 : filterQuality;
    var tmp_0;
    if ($super === VOID) {
      this.f54(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp_0 = Unit_instance;
    } else {
      drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp_0 = Unit_instance;
    }
    return tmp_0;
  }
  function drawRoundRect$default(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().r3t_1 : topLeft;
    size = size === VOID ? offsetSize(this, this.z3t(), topLeft) : size;
    cornerRadius = cornerRadius === VOID ? Companion_getInstance_2().f3t_1 : cornerRadius;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g4w_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.m4w(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.m4w.call(this, brush, new Offset(topLeft), new Size(size), new CornerRadius(cornerRadius), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawCircle$default(color, radius, center, alpha, style, colorFilter, blendMode, $super) {
    radius = radius === VOID ? _Size___get_minDimension__impl__4iso0r(this.z3t()) / 2.0 : radius;
    center = center === VOID ? this.m54() : center;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g4w_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.i54(color, radius, center, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.i54.call(this, new Color(color), radius, new Offset(center), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default(path, color, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g4w_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.i4w(path, color, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.i4w.call(this, path, new Color(color), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default_0(path, brush, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g4w_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.l4w(path, brush, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.l4w.call(this, path, brush, alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  initMetadataForInterface(DrawScope, 'DrawScope', VOID, VOID, [Density_0]);
  initMetadataForClass(CanvasDrawScope, 'CanvasDrawScope', CanvasDrawScope, VOID, [DrawScope]);
  function clipPath$default_0(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_14().t4s_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.v4s(path, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.v4s.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  initMetadataForInterface(DrawTransform, 'DrawTransform');
  initMetadataForClass(asDrawTransform$1, VOID, VOID, VOID, [DrawTransform]);
  initMetadataForCompanion(Companion_22);
  initMetadataForCompanion(Companion_23);
  initMetadataForClass(DrawStyle, 'DrawStyle');
  initMetadataForClass(Stroke, 'Stroke', Stroke, DrawStyle);
  initMetadataForObject(Fill, 'Fill', VOID, DrawStyle);
  initMetadataForObject(EmptyCanvas, 'EmptyCanvas', VOID, VOID, [Canvas]);
  initMetadataForClass(ChildLayerDependenciesTracker, 'ChildLayerDependenciesTracker', ChildLayerDependenciesTracker);
  initMetadataForCompanion(Companion_24);
  initMetadataForClass(Painter, 'Painter');
  initMetadataForClass(BitmapPainter, 'BitmapPainter', VOID, Painter);
  initMetadataForClass(PathBuilder, 'PathBuilder', PathBuilder);
  initMetadataForClass(PathNode, 'PathNode');
  initMetadataForObject(Close, 'Close', VOID, PathNode);
  initMetadataForClass(RelativeMoveTo, 'RelativeMoveTo', VOID, PathNode);
  initMetadataForClass(MoveTo, 'MoveTo', VOID, PathNode);
  initMetadataForClass(RelativeLineTo, 'RelativeLineTo', VOID, PathNode);
  initMetadataForClass(LineTo, 'LineTo', VOID, PathNode);
  initMetadataForClass(RelativeHorizontalTo, 'RelativeHorizontalTo', VOID, PathNode);
  initMetadataForClass(HorizontalTo, 'HorizontalTo', VOID, PathNode);
  initMetadataForClass(RelativeVerticalTo, 'RelativeVerticalTo', VOID, PathNode);
  initMetadataForClass(VerticalTo, 'VerticalTo', VOID, PathNode);
  initMetadataForClass(RelativeCurveTo, 'RelativeCurveTo', VOID, PathNode);
  initMetadataForClass(CurveTo, 'CurveTo', VOID, PathNode);
  initMetadataForClass(RelativeReflectiveCurveTo, 'RelativeReflectiveCurveTo', VOID, PathNode);
  initMetadataForClass(ReflectiveCurveTo, 'ReflectiveCurveTo', VOID, PathNode);
  initMetadataForClass(RelativeQuadTo, 'RelativeQuadTo', VOID, PathNode);
  initMetadataForClass(QuadTo, 'QuadTo', VOID, PathNode);
  initMetadataForClass(RelativeReflectiveQuadTo, 'RelativeReflectiveQuadTo', VOID, PathNode);
  initMetadataForClass(ReflectiveQuadTo, 'ReflectiveQuadTo', VOID, PathNode);
  initMetadataForClass(RelativeArcTo, 'RelativeArcTo', VOID, PathNode);
  initMetadataForClass(ArcTo, 'ArcTo', VOID, PathNode);
  initMetadataForClass(PathParser, 'PathParser', PathParser);
  initMetadataForClass(SkiaBackedCanvas, 'SkiaBackedCanvas', VOID, VOID, [Canvas]);
  initMetadataForClass(SkiaBackedPaint, 'SkiaBackedPaint', SkiaBackedPaint);
  initMetadataForClass(SkiaBackedPath, 'SkiaBackedPath', SkiaBackedPath, VOID, [Path]);
  initMetadataForClass(SkiaBackedPathEffect, 'SkiaBackedPathEffect');
  initMetadataForClass(SkiaBackedPathMeasure, 'SkiaBackedPathMeasure', SkiaBackedPathMeasure);
  initMetadataForClass(SkiaGraphicsContext, 'SkiaGraphicsContext', SkiaGraphicsContext);
  initMetadataForClass(SkiaBackedImageBitmap, 'SkiaBackedImageBitmap');
  initMetadataForClass(TransformShader, 'TransformShader', TransformShader);
  initMetadataForClass(GraphicsLayer, 'GraphicsLayer', VOID, VOID, VOID, [0]);
  //endregion
  function computeCubicVerticalBounds(p0y, p1y, p2y, p3y, roots, index) {
    index = index === VOID ? 0 : index;
    var d0 = 3.0 * (p1y - p0y);
    var d1 = 3.0 * (p2y - p1y);
    var d2 = 3.0 * (p3y - p2y);
    var count = findQuadraticRoots(d0, d1, d2, roots, index);
    var dd0 = 2.0 * (d1 - d0);
    var dd1 = 2.0 * (d2 - d1);
    var tmp = count;
    // Inline function 'androidx.compose.ui.graphics.findLineRoot' call
    var index_0 = index + count | 0;
    count = tmp + writeValidRootInUnitRange(-dd0 / (dd1 - dd0), roots, index_0) | 0;
    // Inline function 'kotlin.math.min' call
    var minY = Math.min(p0y, p3y);
    // Inline function 'kotlin.math.max' call
    var maxY = Math.max(p0y, p3y);
    var inductionVariable = 0;
    var last = count;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = roots[i];
        var y = evaluateCubic_0(p0y, p1y, p2y, p3y, t);
        // Inline function 'kotlin.math.min' call
        var a = minY;
        minY = Math.min(a, y);
        // Inline function 'kotlin.math.max' call
        var a_0 = maxY;
        maxY = Math.max(a_0, y);
      }
       while (inductionVariable < last);
    return _FloatFloatPair___init__impl__2q1dd3(minY, maxY);
  }
  function findFirstCubicRoot(p0, p1, p2, p3) {
    var a = 3.0 * (p0 - 2.0 * p1 + p2);
    var b = 3.0 * (p1 - p0);
    var c = p0;
    var d = -p0 + 3.0 * (p1 - p2) + p3;
    // Inline function 'androidx.compose.ui.graphics.closeTo' call
    // Inline function 'kotlin.math.abs' call
    var x = d - 0.0;
    if (Math.abs(x) < 1.0E-7) {
      // Inline function 'androidx.compose.ui.graphics.closeTo' call
      // Inline function 'kotlin.math.abs' call
      var x_0 = a - 0.0;
      if (Math.abs(x_0) < 1.0E-7) {
        // Inline function 'androidx.compose.ui.graphics.closeTo' call
        // Inline function 'kotlin.math.abs' call
        var x_1 = b - 0.0;
        if (Math.abs(x_1) < 1.0E-7) {
          return NaN;
        }
        // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
        var r = -c / b;
        // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
        // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
        // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
        var this_0 = r < 0.0 ? 0.0 : r;
        var s = this_0 > 1.0 ? 1.0 : this_0;
        var tmp;
        // Inline function 'kotlin.math.abs' call
        var x_2 = s - r;
        if (Math.abs(x_2) > 1.05E-6) {
          tmp = NaN;
        } else {
          tmp = s;
        }
        return tmp;
      } else {
        // Inline function 'kotlin.math.sqrt' call
        var x_3 = b * b - 4.0 * a * c;
        var q = Math.sqrt(x_3);
        var a2 = 2.0 * a;
        // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
        var r_0 = (q - b) / a2;
        // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
        // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
        // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
        var this_1 = r_0 < 0.0 ? 0.0 : r_0;
        var s_0 = this_1 > 1.0 ? 1.0 : this_1;
        var tmp_0;
        // Inline function 'kotlin.math.abs' call
        var x_4 = s_0 - r_0;
        if (Math.abs(x_4) > 1.05E-6) {
          tmp_0 = NaN;
        } else {
          tmp_0 = s_0;
        }
        var root = tmp_0;
        if (!isNaN_0(root))
          return root;
        // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
        var r_1 = (-b - q) / a2;
        // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
        // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
        // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
        var this_2 = r_1 < 0.0 ? 0.0 : r_1;
        var s_1 = this_2 > 1.0 ? 1.0 : this_2;
        var tmp_1;
        // Inline function 'kotlin.math.abs' call
        var x_5 = s_1 - r_1;
        if (Math.abs(x_5) > 1.05E-6) {
          tmp_1 = NaN;
        } else {
          tmp_1 = s_1;
        }
        return tmp_1;
      }
    }
    a = a / d;
    b = b / d;
    c = c / d;
    var o3 = (3.0 * b - a * a) / 9.0;
    var q2 = (2.0 * a * a * a - 9.0 * a * b + 27.0 * c) / 54.0;
    var discriminant = q2 * q2 + o3 * o3 * o3;
    var a3 = a / 3.0;
    if (discriminant < 0.0) {
      var mp33 = -(o3 * o3 * o3);
      // Inline function 'kotlin.math.sqrt' call
      var r_2 = Math.sqrt(mp33);
      var t = -q2 / r_2;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var minimumValue = -1.0;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = t < minimumValue ? minimumValue : t;
      var cosPhi = this_3 > 1.0 ? 1.0 : this_3;
      // Inline function 'kotlin.math.acos' call
      var phi = Math.acos(cosPhi);
      var t1 = 2.0 * fastCbrt(r_2);
      // Inline function 'kotlin.math.cos' call
      var x_6 = phi / 3.0;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_3 = t1 * Math.cos(x_6) - a3;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_4 = r_3 < 0.0 ? 0.0 : r_3;
      var s_2 = this_4 > 1.0 ? 1.0 : this_4;
      var tmp_2;
      // Inline function 'kotlin.math.abs' call
      var x_7 = s_2 - r_3;
      if (Math.abs(x_7) > 1.05E-6) {
        tmp_2 = NaN;
      } else {
        tmp_2 = s_2;
      }
      var root_0 = tmp_2;
      if (!isNaN_0(root_0))
        return root_0;
      // Inline function 'kotlin.math.cos' call
      var x_8 = (phi + 6.283185307179586) / 3.0;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_4 = t1 * Math.cos(x_8) - a3;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_5 = r_4 < 0.0 ? 0.0 : r_4;
      var s_3 = this_5 > 1.0 ? 1.0 : this_5;
      var tmp_3;
      // Inline function 'kotlin.math.abs' call
      var x_9 = s_3 - r_4;
      if (Math.abs(x_9) > 1.05E-6) {
        tmp_3 = NaN;
      } else {
        tmp_3 = s_3;
      }
      root_0 = tmp_3;
      if (!isNaN_0(root_0))
        return root_0;
      // Inline function 'kotlin.math.cos' call
      var x_10 = (phi + 2.0 * 6.283185307179586) / 3.0;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_5 = t1 * Math.cos(x_10) - a3;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_6 = r_5 < 0.0 ? 0.0 : r_5;
      var s_4 = this_6 > 1.0 ? 1.0 : this_6;
      var tmp_4;
      // Inline function 'kotlin.math.abs' call
      var x_11 = s_4 - r_5;
      if (Math.abs(x_11) > 1.05E-6) {
        tmp_4 = NaN;
      } else {
        tmp_4 = s_4;
      }
      return tmp_4;
    } else if (discriminant === 0.0) {
      var u1 = -fastCbrt(q2);
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_6 = 2.0 * u1 - a3;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_7 = r_6 < 0.0 ? 0.0 : r_6;
      var s_5 = this_7 > 1.0 ? 1.0 : this_7;
      var tmp_5;
      // Inline function 'kotlin.math.abs' call
      var x_12 = s_5 - r_6;
      if (Math.abs(x_12) > 1.05E-6) {
        tmp_5 = NaN;
      } else {
        tmp_5 = s_5;
      }
      var root_1 = tmp_5;
      if (!isNaN_0(root_1))
        return root_1;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_7 = -u1 - a3;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_8 = r_7 < 0.0 ? 0.0 : r_7;
      var s_6 = this_8 > 1.0 ? 1.0 : this_8;
      var tmp_6;
      // Inline function 'kotlin.math.abs' call
      var x_13 = s_6 - r_7;
      if (Math.abs(x_13) > 1.05E-6) {
        tmp_6 = NaN;
      } else {
        tmp_6 = s_6;
      }
      return tmp_6;
    }
    // Inline function 'kotlin.math.sqrt' call
    var sd = Math.sqrt(discriminant);
    var u1_0 = fastCbrt(-q2 + sd);
    var v1 = fastCbrt(q2 + sd);
    // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
    var r_8 = u1_0 - v1 - a3;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_9 = r_8 < 0.0 ? 0.0 : r_8;
    var s_7 = this_9 > 1.0 ? 1.0 : this_9;
    var tmp_7;
    // Inline function 'kotlin.math.abs' call
    var x_14 = s_7 - r_8;
    if (Math.abs(x_14) > 1.05E-6) {
      tmp_7 = NaN;
    } else {
      tmp_7 = s_7;
    }
    return tmp_7;
  }
  function evaluateCubic(p1, p2, t) {
    var a = 1.0 / 3.0 + (p1 - p2);
    var b = p2 - 2.0 * p1;
    var c = p1;
    return 3.0 * ((a * t + b) * t + c) * t;
  }
  function findQuadraticRoots(p0, p1, p2, roots, index) {
    index = index === VOID ? 0 : index;
    var a = p0;
    var b = p1;
    var c = p2;
    var d = a - 2.0 * b + c;
    var rootCount = 0;
    if (!(d === 0.0)) {
      // Inline function 'kotlin.math.sqrt' call
      var x = b * b - a * c;
      var v1 = -Math.sqrt(x);
      var v2 = -a + b;
      rootCount = rootCount + writeValidRootInUnitRange(-(v1 + v2) / d, roots, index) | 0;
      rootCount = rootCount + writeValidRootInUnitRange((v1 - v2) / d, roots, index + rootCount | 0) | 0;
      if (rootCount > 1) {
        var s = roots[index];
        var t = roots[index + 1 | 0];
        if (s > t) {
          roots[index] = t;
          roots[index + 1 | 0] = s;
        } else if (s === t) {
          rootCount = rootCount - 1 | 0;
        }
      }
    } else if (!(b === c)) {
      rootCount = rootCount + writeValidRootInUnitRange((2.0 * b - c) / (2.0 * b - 2.0 * c), roots, index) | 0;
    }
    return rootCount;
  }
  function evaluateCubic_0(p0, p1, p2, p3, t) {
    var a = p3 + 3.0 * (p1 - p2) - p0;
    var b = 3.0 * (p2 - 2.0 * p1 + p0);
    var c = 3.0 * (p1 - p0);
    return ((a * t + b) * t + c) * t + p0;
  }
  function writeValidRootInUnitRange(r, roots, index) {
    // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = r < 0.0 ? 0.0 : r;
    var s = this_0 > 1.0 ? 1.0 : this_0;
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var x = s - r;
    if (Math.abs(x) > 1.05E-6) {
      tmp = NaN;
    } else {
      tmp = s;
    }
    var v = tmp;
    roots[index] = v;
    return isNaN_0(v) ? 0 : 1;
  }
  function _BlendMode___init__impl__q6jalh(value) {
    return value;
  }
  function Companion() {
    Companion_instance_1 = this;
    this.y4o_1 = _BlendMode___init__impl__q6jalh(0);
    this.z4o_1 = _BlendMode___init__impl__q6jalh(1);
    this.a4p_1 = _BlendMode___init__impl__q6jalh(2);
    this.b4p_1 = _BlendMode___init__impl__q6jalh(3);
    this.c4p_1 = _BlendMode___init__impl__q6jalh(4);
    this.d4p_1 = _BlendMode___init__impl__q6jalh(5);
    this.e4p_1 = _BlendMode___init__impl__q6jalh(6);
    this.f4p_1 = _BlendMode___init__impl__q6jalh(7);
    this.g4p_1 = _BlendMode___init__impl__q6jalh(8);
    this.h4p_1 = _BlendMode___init__impl__q6jalh(9);
    this.i4p_1 = _BlendMode___init__impl__q6jalh(10);
    this.j4p_1 = _BlendMode___init__impl__q6jalh(11);
    this.k4p_1 = _BlendMode___init__impl__q6jalh(12);
    this.l4p_1 = _BlendMode___init__impl__q6jalh(13);
    this.m4p_1 = _BlendMode___init__impl__q6jalh(14);
    this.n4p_1 = _BlendMode___init__impl__q6jalh(15);
    this.o4p_1 = _BlendMode___init__impl__q6jalh(16);
    this.p4p_1 = _BlendMode___init__impl__q6jalh(17);
    this.q4p_1 = _BlendMode___init__impl__q6jalh(18);
    this.r4p_1 = _BlendMode___init__impl__q6jalh(19);
    this.s4p_1 = _BlendMode___init__impl__q6jalh(20);
    this.t4p_1 = _BlendMode___init__impl__q6jalh(21);
    this.u4p_1 = _BlendMode___init__impl__q6jalh(22);
    this.v4p_1 = _BlendMode___init__impl__q6jalh(23);
    this.w4p_1 = _BlendMode___init__impl__q6jalh(24);
    this.x4p_1 = _BlendMode___init__impl__q6jalh(25);
    this.y4p_1 = _BlendMode___init__impl__q6jalh(26);
    this.z4p_1 = _BlendMode___init__impl__q6jalh(27);
    this.a4q_1 = _BlendMode___init__impl__q6jalh(28);
  }
  var Companion_instance_1;
  function Companion_getInstance_12() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function BlendMode__toString_impl_uuibkd($this) {
    return $this === Companion_getInstance_12().y4o_1 ? 'Clear' : $this === Companion_getInstance_12().z4o_1 ? 'Src' : $this === Companion_getInstance_12().a4p_1 ? 'Dst' : $this === Companion_getInstance_12().b4p_1 ? 'SrcOver' : $this === Companion_getInstance_12().c4p_1 ? 'DstOver' : $this === Companion_getInstance_12().d4p_1 ? 'SrcIn' : $this === Companion_getInstance_12().e4p_1 ? 'DstIn' : $this === Companion_getInstance_12().f4p_1 ? 'SrcOut' : $this === Companion_getInstance_12().g4p_1 ? 'DstOut' : $this === Companion_getInstance_12().h4p_1 ? 'SrcAtop' : $this === Companion_getInstance_12().i4p_1 ? 'DstAtop' : $this === Companion_getInstance_12().j4p_1 ? 'Xor' : $this === Companion_getInstance_12().k4p_1 ? 'Plus' : $this === Companion_getInstance_12().l4p_1 ? 'Modulate' : $this === Companion_getInstance_12().m4p_1 ? 'Screen' : $this === Companion_getInstance_12().n4p_1 ? 'Overlay' : $this === Companion_getInstance_12().o4p_1 ? 'Darken' : $this === Companion_getInstance_12().p4p_1 ? 'Lighten' : $this === Companion_getInstance_12().q4p_1 ? 'ColorDodge' : $this === Companion_getInstance_12().r4p_1 ? 'ColorBurn' : $this === Companion_getInstance_12().s4p_1 ? 'HardLight' : $this === Companion_getInstance_12().t4p_1 ? 'Softlight' : $this === Companion_getInstance_12().u4p_1 ? 'Difference' : $this === Companion_getInstance_12().v4p_1 ? 'Exclusion' : $this === Companion_getInstance_12().w4p_1 ? 'Multiply' : $this === Companion_getInstance_12().x4p_1 ? 'Hue' : $this === Companion_getInstance_12().y4p_1 ? 'Saturation' : $this === Companion_getInstance_12().z4p_1 ? 'Color' : $this === Companion_getInstance_12().a4q_1 ? 'Luminosity' : 'Unknown';
  }
  function BlendMode__hashCode_impl_93ceri($this) {
    return $this;
  }
  function BlendMode__equals_impl_1tm25i($this, other) {
    if (!(other instanceof BlendMode))
      return false;
    if (!($this === (other instanceof BlendMode ? other.b4q_1 : THROW_CCE())))
      return false;
    return true;
  }
  function BlendMode(value) {
    Companion_getInstance_12();
    this.b4q_1 = value;
  }
  protoOf(BlendMode).toString = function () {
    return BlendMode__toString_impl_uuibkd(this.b4q_1);
  };
  protoOf(BlendMode).hashCode = function () {
    return BlendMode__hashCode_impl_93ceri(this.b4q_1);
  };
  protoOf(BlendMode).equals = function (other) {
    return BlendMode__equals_impl_1tm25i(this.b4q_1, other);
  };
  function SolidColor(value) {
    Brush.call(this);
    this.d4q_1 = value;
  }
  protoOf(SolidColor).e4q = function (size, p, alpha) {
    p.q4j(1.0);
    var tmp;
    if (!(alpha === 1.0)) {
      tmp = Color__copy$default_impl_ectz3s(this.d4q_1, _Color___get_alpha__impl__wcfyv1(this.d4q_1) * alpha);
    } else {
      tmp = this.d4q_1;
    }
    p.f4q(tmp);
    if (!(p.e44() == null)) {
      p.d44(null);
    }
  };
  protoOf(SolidColor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SolidColor))
      return false;
    if (!equals(this.d4q_1, other.d4q_1))
      return false;
    return true;
  };
  protoOf(SolidColor).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.d4q_1);
  };
  protoOf(SolidColor).toString = function () {
    return 'SolidColor(value=' + Color__toString_impl_hpzmaq(this.d4q_1) + ')';
  };
  function Companion_0() {
  }
  protoOf(Companion_0).g4q = function (colorStops, start, end, tileMode) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = colorStops.length;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0 = colorStops[index].ee_1;
        list.h(tmp$ret$0);
      }
       while (inductionVariable < size);
    var tmp = list;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = colorStops.length;
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$5 = colorStops[index_0].de_1;
        list_0.h(tmp$ret$5);
      }
       while (inductionVariable_0 < size_0);
    return new LinearGradient(tmp, list_0, start, end, tileMode);
  };
  protoOf(Companion_0).h4q = function (colorStops, center, radius, tileMode) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = colorStops.length;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0 = colorStops[index].ee_1;
        list.h(tmp$ret$0);
      }
       while (inductionVariable < size);
    var tmp = list;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = colorStops.length;
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$5 = colorStops[index_0].de_1;
        list_0.h(tmp$ret$5);
      }
       while (inductionVariable_0 < size_0);
    return new RadialGradient(tmp, list_0, center, radius, tileMode);
  };
  protoOf(Companion_0).i4q = function (colorStops, center) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = colorStops.length;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0 = colorStops[index].ee_1;
        list.h(tmp$ret$0);
      }
       while (inductionVariable < size);
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = colorStops.length;
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$5 = colorStops[index_0].de_1;
        list_0.h(tmp$ret$5);
      }
       while (inductionVariable_0 < size_0);
    return new SweepGradient(center, list, list_0);
  };
  var Companion_instance_2;
  function Companion_getInstance_13() {
    return Companion_instance_2;
  }
  function Brush() {
    this.j4q_1 = Companion_getInstance().v3u_1;
  }
  function obtainTransformShader($this) {
    var tmp0_elvis_lhs = $this.l4q_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new TransformShader();
      $this.l4q_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function ShaderBrush() {
    Brush.call(this);
    this.l4q_1 = null;
    this.m4q_1 = Companion_getInstance().v3u_1;
    this.n4q_1 = null;
  }
  protoOf(ShaderBrush).e4q = function (size, p, alpha) {
    var transformShader = this.l4q_1;
    if (transformShader == null || !equals(this.m4q_1, size)) {
      if (Size__isEmpty_impl_o9ye97(size)) {
        transformShader = null;
        this.l4q_1 = null;
        this.m4q_1 = Companion_getInstance().v3u_1;
      } else {
        // Inline function 'kotlin.apply' call
        var this_0 = obtainTransformShader(this);
        var tmp = this.n4q_1;
        if (!((tmp == null ? null : new Matrix(tmp)) == null)) {
          this_0.s4q(this.n4q_1);
        }
        this_0.d44(this.o4q(size));
        transformShader = this_0;
        this.l4q_1 = transformShader;
        this.m4q_1 = size;
      }
    }
    if (!equals(p.g4r(), Companion_getInstance_15().t4q_1)) {
      p.f4q(Companion_getInstance_15().t4q_1);
    }
    var tmp_0 = p.e44();
    var tmp1_safe_receiver = transformShader;
    if (!equals(tmp_0, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.e44())) {
      var tmp0_safe_receiver = transformShader;
      p.d44(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e44());
    }
    if (!(p.e4l() === alpha)) {
      p.q4j(alpha);
    }
  };
  function LinearGradient(colors, stops, start, end, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_26().h4r_1 : tileMode;
    ShaderBrush.call(this);
    this.p4r_1 = colors;
    this.q4r_1 = stops;
    this.r4r_1 = start;
    this.s4r_1 = end;
    this.t4r_1 = tileMode;
  }
  protoOf(LinearGradient).o4q = function (size) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_0 = this.r4r_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    if (floatFromBits(bits) === Infinity) {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(shiftRight(value_0, 32));
      tmp = floatFromBits(bits_0);
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_1 = this.r4r_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _Offset___get_packedValue__impl__xh2k8q(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      tmp = floatFromBits(bits_1);
    }
    var startX = tmp;
    var tmp_0;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_2 = this.r4r_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(this_2);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    if (floatFromBits(bits_2) === Infinity) {
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_3 = _Size___get_packedValue__impl__7rlt1o(size);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
      tmp_0 = floatFromBits(bits_3);
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_3 = this.r4r_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_4 = _Offset___get_packedValue__impl__xh2k8q(this_3);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
      tmp_0 = floatFromBits(bits_4);
    }
    var startY = tmp_0;
    var tmp_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_4 = this.s4r_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_5 = _Offset___get_packedValue__impl__xh2k8q(this_4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_5 = convertToInt(shiftRight(value_5, 32));
    if (floatFromBits(bits_5) === Infinity) {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_6 = _Size___get_packedValue__impl__7rlt1o(size);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_6 = convertToInt(shiftRight(value_6, 32));
      tmp_1 = floatFromBits(bits_6);
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_5 = this.s4r_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_7 = _Offset___get_packedValue__impl__xh2k8q(this_5);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_7 = convertToInt(shiftRight(value_7, 32));
      tmp_1 = floatFromBits(bits_7);
    }
    var endX = tmp_1;
    var tmp_2;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_6 = this.s4r_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_8 = _Offset___get_packedValue__impl__xh2k8q(this_6);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_8 = convertToInt(bitwiseAnd(value_8, new Long(-1, 0)));
    if (floatFromBits(bits_8) === Infinity) {
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_9 = _Size___get_packedValue__impl__7rlt1o(size);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_9 = convertToInt(bitwiseAnd(value_9, new Long(-1, 0)));
      tmp_2 = floatFromBits(bits_9);
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_7 = this.s4r_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_10 = _Offset___get_packedValue__impl__xh2k8q(this_7);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_10 = convertToInt(bitwiseAnd(value_10, new Long(-1, 0)));
      tmp_2 = floatFromBits(bits_10);
    }
    var endY = tmp_2;
    var tmp0_colors = this.p4r_1;
    var tmp1_colorStops = this.q4r_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(startX));
    var v2 = fromInt(toRawBits(startY));
    var tmp$ret$48 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp2_from = _Offset___init__impl__c168vi(tmp$ret$48);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = fromInt(toRawBits(endX));
    var v2_0 = fromInt(toRawBits(endY));
    var tmp$ret$50 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
    var tmp3_to = _Offset___init__impl__c168vi(tmp$ret$50);
    var tmp4_tileMode = this.t4r_1;
    return LinearGradientShader(tmp2_from, tmp3_to, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(LinearGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LinearGradient))
      return false;
    if (!equals(this.p4r_1, other.p4r_1))
      return false;
    if (!equals(this.q4r_1, other.q4r_1))
      return false;
    if (!equals(this.r4r_1, other.r4r_1))
      return false;
    if (!equals(this.s4r_1, other.s4r_1))
      return false;
    if (!(this.t4r_1 === other.t4r_1))
      return false;
    return true;
  };
  protoOf(LinearGradient).hashCode = function () {
    var result = hashCode(this.p4r_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.q4r_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.r4r_1) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.s4r_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.t4r_1) | 0;
    return result;
  };
  protoOf(LinearGradient).toString = function () {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isFinite' call
    var this_0 = this.r4r_1;
    var v = bitwiseXor(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_0), new Long(2139095040, 2139095040)), new Long(2139095040, 2139095040));
    if (equalsLong(bitwiseAnd(subtract(v, new Long(1, 1)), new Long(-2147483648, -2147483648)), new Long(0, 0))) {
      tmp = 'start=' + Offset__toString_impl_4ffbou(this.r4r_1) + ', ';
    } else {
      tmp = '';
    }
    var startValue = tmp;
    var tmp_0;
    // Inline function 'androidx.compose.ui.geometry.isFinite' call
    var this_1 = this.s4r_1;
    var v_0 = bitwiseXor(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_1), new Long(2139095040, 2139095040)), new Long(2139095040, 2139095040));
    if (equalsLong(bitwiseAnd(subtract(v_0, new Long(1, 1)), new Long(-2147483648, -2147483648)), new Long(0, 0))) {
      tmp_0 = 'end=' + Offset__toString_impl_4ffbou(this.s4r_1) + ', ';
    } else {
      tmp_0 = '';
    }
    var endValue = tmp_0;
    return 'LinearGradient(colors=' + toString(this.p4r_1) + ', ' + ('stops=' + toString_0(this.q4r_1) + ', ') + startValue + endValue + ('tileMode=' + TileMode__toString_impl_tlb7f4(this.t4r_1) + ')');
  };
  function RadialGradient(colors, stops, center, radius, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_26().h4r_1 : tileMode;
    ShaderBrush.call(this);
    this.y4r_1 = colors;
    this.z4r_1 = stops;
    this.a4s_1 = center;
    this.b4s_1 = radius;
    this.c4s_1 = tileMode;
  }
  protoOf(RadialGradient).o4q = function (size) {
    var centerX;
    var centerY;
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    var this_0 = this.a4s_1;
    if (equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_0), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344))) {
      var drawCenter = get_center(size);
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(drawCenter);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      centerX = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(drawCenter);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      centerY = floatFromBits(bits_0);
    } else {
      var tmp;
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_1 = this.a4s_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _Offset___get_packedValue__impl__xh2k8q(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      if (floatFromBits(bits_1) === Infinity) {
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_2 = convertToInt(shiftRight(value_2, 32));
        tmp = floatFromBits(bits_2);
      } else {
        // Inline function 'androidx.compose.ui.geometry.Offset.x' call
        var this_2 = this.a4s_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_3 = _Offset___get_packedValue__impl__xh2k8q(this_2);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_3 = convertToInt(shiftRight(value_3, 32));
        tmp = floatFromBits(bits_3);
      }
      centerX = tmp;
      var tmp_0;
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_3 = this.a4s_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_4 = _Offset___get_packedValue__impl__xh2k8q(this_3);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
      if (floatFromBits(bits_4) === Infinity) {
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_5 = _Size___get_packedValue__impl__7rlt1o(size);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_5 = convertToInt(bitwiseAnd(value_5, new Long(-1, 0)));
        tmp_0 = floatFromBits(bits_5);
      } else {
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        var this_4 = this.a4s_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_6 = _Offset___get_packedValue__impl__xh2k8q(this_4);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
        tmp_0 = floatFromBits(bits_6);
      }
      centerY = tmp_0;
    }
    var tmp0_colors = this.y4r_1;
    var tmp1_colorStops = this.z4r_1;
    var tmp0 = centerX;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = centerY;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$33 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp2_center = _Offset___init__impl__c168vi(tmp$ret$33);
    var tmp3_radius = this.b4s_1 === Infinity ? _Size___get_minDimension__impl__4iso0r(size) / 2 : this.b4s_1;
    var tmp4_tileMode = this.c4s_1;
    return RadialGradientShader(tmp2_center, tmp3_radius, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(RadialGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RadialGradient))
      return false;
    if (!equals(this.y4r_1, other.y4r_1))
      return false;
    if (!equals(this.z4r_1, other.z4r_1))
      return false;
    if (!equals(this.a4s_1, other.a4s_1))
      return false;
    if (!(this.b4s_1 === other.b4s_1))
      return false;
    if (!(this.c4s_1 === other.c4s_1))
      return false;
    return true;
  };
  protoOf(RadialGradient).hashCode = function () {
    var result = hashCode(this.y4r_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.z4r_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.a4s_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.b4s_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.c4s_1) | 0;
    return result;
  };
  protoOf(RadialGradient).toString = function () {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.a4s_1;
    if (!equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_0), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344))) {
      tmp = 'center=' + Offset__toString_impl_4ffbou(this.a4s_1) + ', ';
    } else {
      tmp = '';
    }
    var centerValue = tmp;
    var tmp_0;
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    var this_1 = this.b4s_1;
    if ((toRawBits(this_1) & 2147483647) < 2139095040) {
      tmp_0 = 'radius=' + this.b4s_1 + ', ';
    } else {
      tmp_0 = '';
    }
    var radiusValue = tmp_0;
    return 'RadialGradient(' + ('colors=' + toString(this.y4r_1) + ', ') + ('stops=' + toString_0(this.z4r_1) + ', ') + centerValue + radiusValue + ('tileMode=' + TileMode__toString_impl_tlb7f4(this.c4s_1) + ')');
  };
  function SweepGradient(center, colors, stops) {
    stops = stops === VOID ? null : stops;
    ShaderBrush.call(this);
    this.h4s_1 = center;
    this.i4s_1 = colors;
    this.j4s_1 = stops;
  }
  protoOf(SweepGradient).o4q = function (size) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    var this_0 = this.h4s_1;
    if (equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_0), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344))) {
      tmp = get_center(size);
    } else {
      var tmp_0;
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_1 = this.h4s_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      if (floatFromBits(bits) === Infinity) {
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_0 = convertToInt(shiftRight(value_0, 32));
        tmp_0 = floatFromBits(bits_0);
      } else {
        // Inline function 'androidx.compose.ui.geometry.Offset.x' call
        var this_2 = this.h4s_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_1 = _Offset___get_packedValue__impl__xh2k8q(this_2);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_1 = convertToInt(shiftRight(value_1, 32));
        tmp_0 = floatFromBits(bits_1);
      }
      var tmp0 = tmp_0;
      var tmp_1;
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_3 = this.h4s_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Offset___get_packedValue__impl__xh2k8q(this_3);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      if (floatFromBits(bits_2) === Infinity) {
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_3 = _Size___get_packedValue__impl__7rlt1o(size);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
        tmp_1 = floatFromBits(bits_3);
      } else {
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        var this_4 = this.h4s_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_4 = _Offset___get_packedValue__impl__xh2k8q(this_4);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
        tmp_1 = floatFromBits(bits_4);
      }
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = tmp_1;
      var v1 = fromInt(toRawBits(tmp0));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$25 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      tmp = _Offset___init__impl__c168vi(tmp$ret$25);
    }
    return SweepGradientShader(tmp, this.i4s_1, this.j4s_1);
  };
  protoOf(SweepGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SweepGradient))
      return false;
    if (!equals(this.h4s_1, other.h4s_1))
      return false;
    if (!equals(this.i4s_1, other.i4s_1))
      return false;
    if (!equals(this.j4s_1, other.j4s_1))
      return false;
    return true;
  };
  protoOf(SweepGradient).hashCode = function () {
    var result = Offset__hashCode_impl_hbql41(this.h4s_1);
    result = imul(31, result) + hashCode(this.i4s_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.j4s_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(SweepGradient).toString = function () {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.h4s_1;
    if (!equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_0), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344))) {
      tmp = 'center=' + Offset__toString_impl_4ffbou(this.h4s_1) + ', ';
    } else {
      tmp = '';
    }
    var centerValue = tmp;
    return 'SweepGradient(' + centerValue + ('colors=' + toString(this.i4s_1) + ', stops=' + toString_0(this.j4s_1) + ')');
  };
  function Canvas() {
  }
  function Canvas_0(image) {
    return ActualCanvas(image);
  }
  function _ClipOp___init__impl__pqwwy8(value) {
    return value;
  }
  function Companion_1() {
    Companion_instance_3 = this;
    this.s4s_1 = _ClipOp___init__impl__pqwwy8(0);
    this.t4s_1 = _ClipOp___init__impl__pqwwy8(1);
  }
  var Companion_instance_3;
  function Companion_getInstance_14() {
    if (Companion_instance_3 == null)
      new Companion_1();
    return Companion_instance_3;
  }
  function ClipOp__toString_impl_vwrlao($this) {
    return $this === Companion_getInstance_14().s4s_1 ? 'Difference' : $this === Companion_getInstance_14().t4s_1 ? 'Intersect' : 'Unknown';
  }
  function ClipOp__hashCode_impl_hd6jvl($this) {
    return $this;
  }
  function ClipOp__equals_impl_g5ajel($this, other) {
    if (!(other instanceof ClipOp))
      return false;
    if (!($this === (other instanceof ClipOp ? other.d4t_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ClipOp(value) {
    Companion_getInstance_14();
    this.d4t_1 = value;
  }
  protoOf(ClipOp).toString = function () {
    return ClipOp__toString_impl_vwrlao(this.d4t_1);
  };
  protoOf(ClipOp).hashCode = function () {
    return ClipOp__hashCode_impl_hd6jvl(this.d4t_1);
  };
  protoOf(ClipOp).equals = function (other) {
    return ClipOp__equals_impl_g5ajel(this.d4t_1, other);
  };
  function _Color___init__impl__r6cqi2(value) {
    return value;
  }
  function _Color___get_value__impl__1pls5m($this) {
    return $this;
  }
  function _Color___get_colorSpace__impl__jqqozk($this) {
    var tmp0 = ColorSpaces_getInstance();
    var tmp0_0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    // Inline function 'kotlin.ULong.toInt' call
    var this_0 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other)));
    // Inline function 'androidx.compose.ui.graphics.colorspace.ColorSpaces.getColorSpace' call
    var id = convertToInt(_ULong___get_data__impl__fggpzb(this_0));
    return tmp0.f4u_1[id];
  }
  function Color__convert_impl_so5m8t($this, colorSpace) {
    var connector = connect(_Color___get_colorSpace__impl__jqqozk($this), colorSpace);
    return connector.m4u($this);
  }
  function _Color___get_red__impl__cwrsk6($this) {
    var tmp;
    var tmp0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.shr' call
      var this_0 = _Color___get_value__impl__1pls5m($this);
      var tmp0_0 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_0), 48));
      // Inline function 'kotlin.ULong.and' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_1 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_1);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.shr' call
      var this_2 = _Color___get_value__impl__1pls5m($this);
      var tmp0_1 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_2), 48));
      // Inline function 'kotlin.ULong.and' call
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      // Inline function 'kotlin.ULong.toShort' call
      var this_3 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_1)));
      var tmp0_2 = convertToShort(_ULong___get_data__impl__fggpzb(this_3));
      var tmp$ret$10;
      $l$block: {
        // Inline function 'androidx.compose.ui.graphics.halfToFloat' call
        var bits = tmp0_2 & 65535;
        var s = bits & 32768;
        var e = (bits >>> 10 | 0) & 31;
        var m = bits & 1023;
        var outE = 0;
        var outM = 0;
        if (e === 0) {
          if (!(m === 0)) {
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits_0 = 1056964608 + m | 0;
            var o = floatFromBits(bits_0);
            o = o - access$_get_Fp32DenormalFloat_$tFloat16Kt_xjne9g();
            tmp$ret$10 = s === 0 ? o : -o;
            break $l$block;
          }
        } else {
          outM = m << 13;
          if (e === 31) {
            outE = 255;
            if (!(outM === 0)) {
              outM = outM | 4194304;
            }
          } else {
            outE = (e - 15 | 0) + 127 | 0;
          }
        }
        var out = s << 16 | outE << 23 | outM;
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        tmp$ret$10 = floatFromBits(out);
      }
      tmp = tmp$ret$10;
    }
    return tmp;
  }
  function _Color___get_green__impl__bta9rs($this) {
    var tmp;
    var tmp0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.shr' call
      var this_0 = _Color___get_value__impl__1pls5m($this);
      var tmp0_0 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_0), 40));
      // Inline function 'kotlin.ULong.and' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_1 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_1);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.shr' call
      var this_2 = _Color___get_value__impl__1pls5m($this);
      var tmp0_1 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_2), 32));
      // Inline function 'kotlin.ULong.and' call
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      // Inline function 'kotlin.ULong.toShort' call
      var this_3 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_1)));
      var tmp0_2 = convertToShort(_ULong___get_data__impl__fggpzb(this_3));
      var tmp$ret$10;
      $l$block: {
        // Inline function 'androidx.compose.ui.graphics.halfToFloat' call
        var bits = tmp0_2 & 65535;
        var s = bits & 32768;
        var e = (bits >>> 10 | 0) & 31;
        var m = bits & 1023;
        var outE = 0;
        var outM = 0;
        if (e === 0) {
          if (!(m === 0)) {
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits_0 = 1056964608 + m | 0;
            var o = floatFromBits(bits_0);
            o = o - access$_get_Fp32DenormalFloat_$tFloat16Kt_xjne9g();
            tmp$ret$10 = s === 0 ? o : -o;
            break $l$block;
          }
        } else {
          outM = m << 13;
          if (e === 31) {
            outE = 255;
            if (!(outM === 0)) {
              outM = outM | 4194304;
            }
          } else {
            outE = (e - 15 | 0) + 127 | 0;
          }
        }
        var out = s << 16 | outE << 23 | outM;
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        tmp$ret$10 = floatFromBits(out);
      }
      tmp = tmp$ret$10;
    }
    return tmp;
  }
  function _Color___get_blue__impl__xwez13($this) {
    var tmp;
    var tmp0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.shr' call
      var this_0 = _Color___get_value__impl__1pls5m($this);
      var tmp0_0 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_0), 32));
      // Inline function 'kotlin.ULong.and' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_1 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_1);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.shr' call
      var this_2 = _Color___get_value__impl__1pls5m($this);
      var tmp0_1 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_2), 16));
      // Inline function 'kotlin.ULong.and' call
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      // Inline function 'kotlin.ULong.toShort' call
      var this_3 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_1)));
      var tmp0_2 = convertToShort(_ULong___get_data__impl__fggpzb(this_3));
      var tmp$ret$10;
      $l$block: {
        // Inline function 'androidx.compose.ui.graphics.halfToFloat' call
        var bits = tmp0_2 & 65535;
        var s = bits & 32768;
        var e = (bits >>> 10 | 0) & 31;
        var m = bits & 1023;
        var outE = 0;
        var outM = 0;
        if (e === 0) {
          if (!(m === 0)) {
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits_0 = 1056964608 + m | 0;
            var o = floatFromBits(bits_0);
            o = o - access$_get_Fp32DenormalFloat_$tFloat16Kt_xjne9g();
            tmp$ret$10 = s === 0 ? o : -o;
            break $l$block;
          }
        } else {
          outM = m << 13;
          if (e === 31) {
            outE = 255;
            if (!(outM === 0)) {
              outM = outM | 4194304;
            }
          } else {
            outE = (e - 15 | 0) + 127 | 0;
          }
        }
        var out = s << 16 | outE << 23 | outM;
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        tmp$ret$10 = floatFromBits(out);
      }
      tmp = tmp$ret$10;
    }
    return tmp;
  }
  function _Color___get_alpha__impl__wcfyv1($this) {
    var tmp;
    var tmp0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.shr' call
      var this_0 = _Color___get_value__impl__1pls5m($this);
      var tmp0_0 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_0), 56));
      // Inline function 'kotlin.ULong.and' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_1 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_1);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.shr' call
      var this_2 = _Color___get_value__impl__1pls5m($this);
      var tmp0_1 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_2), 6));
      // Inline function 'kotlin.ULong.and' call
      var other_1 = _ULong___init__impl__c78o9k(new Long(1023, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_3 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_1)));
      // Inline function 'kotlin.ulongToFloat' call
      var value_0 = _ULong___get_data__impl__fggpzb(this_3);
      tmp = ulongToDouble(value_0) / 1023.0;
    }
    return tmp;
  }
  function Color__copy_impl_qlvcl1($this, alpha, red, green, blue) {
    return Color_2(red, green, blue, alpha, _Color___get_colorSpace__impl__jqqozk($this));
  }
  function Color__copy$default_impl_ectz3s($this, alpha, red, green, blue, $super) {
    alpha = alpha === VOID ? _Color___get_alpha__impl__wcfyv1($this) : alpha;
    red = red === VOID ? _Color___get_red__impl__cwrsk6($this) : red;
    green = green === VOID ? _Color___get_green__impl__bta9rs($this) : green;
    blue = blue === VOID ? _Color___get_blue__impl__xwez13($this) : blue;
    var tmp;
    if ($super === VOID) {
      tmp = Color__copy_impl_qlvcl1($this, alpha, red, green, blue);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Color(tmp_0)).o4u.call(new Color($this), alpha, red, green, blue).n4u_1;
    }
    return tmp;
  }
  function Color__toString_impl_hpzmaq($this) {
    return 'Color(' + _Color___get_red__impl__cwrsk6($this) + ', ' + _Color___get_green__impl__bta9rs($this) + ', ' + _Color___get_blue__impl__xwez13($this) + ', ' + _Color___get_alpha__impl__wcfyv1($this) + ', ' + _Color___get_colorSpace__impl__jqqozk($this).p4u_1 + ')';
  }
  function Companion_2() {
    Companion_instance_4 = this;
    this.t4q_1 = Color_1(new Long(-16777216, 0));
    this.u4q_1 = Color_1(new Long(-12303292, 0));
    this.v4q_1 = Color_1(new Long(-7829368, 0));
    this.w4q_1 = Color_1(new Long(-3355444, 0));
    this.x4q_1 = Color_1(new Long(-1, 0));
    this.y4q_1 = Color_1(new Long(-65536, 0));
    this.z4q_1 = Color_1(new Long(-16711936, 0));
    this.a4r_1 = Color_1(new Long(-16776961, 0));
    this.b4r_1 = Color_1(new Long(-256, 0));
    this.c4r_1 = Color_1(new Long(-16711681, 0));
    this.d4r_1 = Color_1(new Long(-65281, 0));
    this.e4r_1 = Color_3(0);
    this.f4r_1 = Color_2(0.0, 0.0, 0.0, 0.0, ColorSpaces_getInstance().b4u_1);
  }
  var Companion_instance_4;
  function Companion_getInstance_15() {
    if (Companion_instance_4 == null)
      new Companion_2();
    return Companion_instance_4;
  }
  function Color__hashCode_impl_vjyivj($this) {
    return ULong__hashCode_impl_6hv2lb($this);
  }
  function Color__equals_impl_k06uqz($this, other) {
    if (!(other instanceof Color))
      return false;
    var tmp0_other_with_cast = other instanceof Color ? other.n4u_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Color(value) {
    Companion_getInstance_15();
    this.n4u_1 = value;
  }
  protoOf(Color).toString = function () {
    return Color__toString_impl_hpzmaq(this.n4u_1);
  };
  protoOf(Color).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.n4u_1);
  };
  protoOf(Color).equals = function (other) {
    return Color__equals_impl_k06uqz(this.n4u_1, other);
  };
  function lerp_1(start, stop, fraction) {
    var colorSpace = ColorSpaces_getInstance().e4u_1;
    var startColor = Color__convert_impl_so5m8t(start, colorSpace);
    var endColor = Color__convert_impl_so5m8t(stop, colorSpace);
    var startAlpha = _Color___get_alpha__impl__wcfyv1(startColor);
    var startL = _Color___get_red__impl__cwrsk6(startColor);
    var startA = _Color___get_green__impl__bta9rs(startColor);
    var startB = _Color___get_blue__impl__xwez13(startColor);
    var endAlpha = _Color___get_alpha__impl__wcfyv1(endColor);
    var endL = _Color___get_red__impl__cwrsk6(endColor);
    var endA = _Color___get_green__impl__bta9rs(endColor);
    var endB = _Color___get_blue__impl__xwez13(endColor);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = fraction < 0.0 ? 0.0 : fraction;
    var t = this_0 > 1.0 ? 1.0 : this_0;
    var interpolated = UncheckedColor(lerp(startL, endL, t), lerp(startA, endA, t), lerp(startB, endB, t), lerp(startAlpha, endAlpha, t), colorSpace);
    return Color__convert_impl_so5m8t(interpolated, _Color___get_colorSpace__impl__jqqozk(stop));
  }
  function ColorProducer() {
  }
  function Color_0(red, green, blue, alpha) {
    alpha = alpha === VOID ? 255 : alpha;
    var color = (alpha & 255) << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255;
    return Color_3(color);
  }
  function compositeOver(_this__u8e3s4, background) {
    var fg = Color__convert_impl_so5m8t(_this__u8e3s4, _Color___get_colorSpace__impl__jqqozk(background));
    var bgA = _Color___get_alpha__impl__wcfyv1(background);
    var fgA = _Color___get_alpha__impl__wcfyv1(fg);
    var a = fgA + bgA * (1.0 - fgA);
    var tmp0 = _Color___get_red__impl__cwrsk6(fg);
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var bgC = _Color___get_red__impl__cwrsk6(background);
    var r = a === 0.0 ? 0.0 : (tmp0 * fgA + bgC * bgA * (1.0 - fgA)) / a;
    var tmp0_0 = _Color___get_green__impl__bta9rs(fg);
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var bgC_0 = _Color___get_green__impl__bta9rs(background);
    var g = a === 0.0 ? 0.0 : (tmp0_0 * fgA + bgC_0 * bgA * (1.0 - fgA)) / a;
    var tmp0_1 = _Color___get_blue__impl__xwez13(fg);
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var bgC_1 = _Color___get_blue__impl__xwez13(background);
    var b = a === 0.0 ? 0.0 : (tmp0_1 * fgA + bgC_1 * bgA * (1.0 - fgA)) / a;
    return UncheckedColor(r, g, b, a, _Color___get_colorSpace__impl__jqqozk(background));
  }
  function Color_1(color) {
    // Inline function 'kotlin.toULong' call
    var this_0 = shiftLeft(color, 32);
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    return _Color___init__impl__r6cqi2(tmp$ret$0);
  }
  function Color_2(red, green, blue, alpha, colorSpace) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().l4t_1 : colorSpace;
    if (colorSpace.t4u()) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_0 = alpha < 0.0 ? 0.0 : alpha;
      var tmp$ret$2 = this_0 > 1.0 ? 1.0 : this_0;
      var tmp = numberToInt(tmp$ret$2 * 255.0 + 0.5) << 24;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_1 = red < 0.0 ? 0.0 : red;
      var tmp$ret$5 = this_1 > 1.0 ? 1.0 : this_1;
      var tmp_0 = tmp | numberToInt(tmp$ret$5 * 255.0 + 0.5) << 16;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_2 = green < 0.0 ? 0.0 : green;
      var tmp$ret$8 = this_2 > 1.0 ? 1.0 : this_2;
      var tmp_1 = tmp_0 | numberToInt(tmp$ret$8 * 255.0 + 0.5) << 8;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = blue < 0.0 ? 0.0 : blue;
      var tmp$ret$11 = this_3 > 1.0 ? 1.0 : this_3;
      var argb = tmp_1 | numberToInt(tmp$ret$11 * 255.0 + 0.5);
      // Inline function 'kotlin.toULong' call
      // Inline function 'kotlin.ULong.shl' call
      var this_4 = _ULong___init__impl__c78o9k(fromInt(argb));
      var tmp$ret$13 = _ULong___init__impl__c78o9k(shiftLeft(_ULong___get_data__impl__fggpzb(this_4), 32));
      return _Color___init__impl__r6cqi2(tmp$ret$13);
    }
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    if (!(colorSpace.u4u() === 3)) {
      var tmp$ret$14 = 'Color only works with ColorSpaces with 3 components';
      throwIllegalArgumentException(tmp$ret$14);
    }
    var id = colorSpace.r4u_1;
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    if (!!(id === -1)) {
      var tmp$ret$16 = 'Unknown color space, please use a color space in ColorSpaces';
      throwIllegalArgumentException(tmp$ret$16);
    }
    var tmp2 = colorSpace.v4u(0);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = colorSpace.w4u(0);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_5 = red < tmp2 ? tmp2 : red;
    var tmp0 = this_5 > maximumValue ? maximumValue : this_5;
    var tmp$ret$21;
    $l$block: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits = toRawBits(tmp0);
      var s = bits >>> 31 | 0;
      var e = (bits >>> 23 | 0) & 255;
      var m = bits & 8388607;
      var outE = 0;
      var outM = 0;
      if (e === 255) {
        outE = 31;
        outM = !(m === 0) ? 512 : 0;
      } else {
        e = (e - 127 | 0) + 15 | 0;
        if (e >= 31) {
          outE = 49;
        } else if (e <= 0) {
          if (e >= -10) {
            m = (m | 8388608) >> (1 - e | 0);
            if (!((m & 4096) === 0))
              m = m + 8192 | 0;
            outM = m >> 13;
          }
        } else {
          outE = e;
          outM = m >> 13;
          if (!((m & 4096) === 0)) {
            var out = outE << 10 | outM;
            out = out + 1 | 0;
            tmp$ret$21 = toShort(out | s << 15);
            break $l$block;
          }
        }
      }
      tmp$ret$21 = toShort(s << 15 | outE << 10 | outM);
    }
    var r = tmp$ret$21;
    var tmp2_0 = colorSpace.v4u(1);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue_0 = colorSpace.w4u(1);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_6 = green < tmp2_0 ? tmp2_0 : green;
    var tmp0_0 = this_6 > maximumValue_0 ? maximumValue_0 : this_6;
    var tmp$ret$25;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits_0 = toRawBits(tmp0_0);
      var s_0 = bits_0 >>> 31 | 0;
      var e_0 = (bits_0 >>> 23 | 0) & 255;
      var m_0 = bits_0 & 8388607;
      var outE_0 = 0;
      var outM_0 = 0;
      if (e_0 === 255) {
        outE_0 = 31;
        outM_0 = !(m_0 === 0) ? 512 : 0;
      } else {
        e_0 = (e_0 - 127 | 0) + 15 | 0;
        if (e_0 >= 31) {
          outE_0 = 49;
        } else if (e_0 <= 0) {
          if (e_0 >= -10) {
            m_0 = (m_0 | 8388608) >> (1 - e_0 | 0);
            if (!((m_0 & 4096) === 0))
              m_0 = m_0 + 8192 | 0;
            outM_0 = m_0 >> 13;
          }
        } else {
          outE_0 = e_0;
          outM_0 = m_0 >> 13;
          if (!((m_0 & 4096) === 0)) {
            var out_0 = outE_0 << 10 | outM_0;
            out_0 = out_0 + 1 | 0;
            tmp$ret$25 = toShort(out_0 | s_0 << 15);
            break $l$block_0;
          }
        }
      }
      tmp$ret$25 = toShort(s_0 << 15 | outE_0 << 10 | outM_0);
    }
    var g = tmp$ret$25;
    var tmp2_1 = colorSpace.v4u(2);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue_1 = colorSpace.w4u(2);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_7 = blue < tmp2_1 ? tmp2_1 : blue;
    var tmp0_1 = this_7 > maximumValue_1 ? maximumValue_1 : this_7;
    var tmp$ret$29;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits_1 = toRawBits(tmp0_1);
      var s_1 = bits_1 >>> 31 | 0;
      var e_1 = (bits_1 >>> 23 | 0) & 255;
      var m_1 = bits_1 & 8388607;
      var outE_1 = 0;
      var outM_1 = 0;
      if (e_1 === 255) {
        outE_1 = 31;
        outM_1 = !(m_1 === 0) ? 512 : 0;
      } else {
        e_1 = (e_1 - 127 | 0) + 15 | 0;
        if (e_1 >= 31) {
          outE_1 = 49;
        } else if (e_1 <= 0) {
          if (e_1 >= -10) {
            m_1 = (m_1 | 8388608) >> (1 - e_1 | 0);
            if (!((m_1 & 4096) === 0))
              m_1 = m_1 + 8192 | 0;
            outM_1 = m_1 >> 13;
          }
        } else {
          outE_1 = e_1;
          outM_1 = m_1 >> 13;
          if (!((m_1 & 4096) === 0)) {
            var out_1 = outE_1 << 10 | outM_1;
            out_1 = out_1 + 1 | 0;
            tmp$ret$29 = toShort(out_1 | s_1 << 15);
            break $l$block_1;
          }
        }
      }
      tmp$ret$29 = toShort(s_1 << 15 | outE_1 << 10 | outM_1);
    }
    var b = tmp$ret$29;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_8 = alpha < 0.0 ? 0.0 : alpha;
    var tmp$ret$32 = this_8 > 1.0 ? 1.0 : this_8;
    var a = numberToInt(tmp$ret$32 * 1023.0 + 0.5);
    // Inline function 'kotlin.toULong' call
    var this_9 = bitwiseOr(bitwiseOr(bitwiseOr(bitwiseOr(shiftLeft(bitwiseAnd(fromInt(r), new Long(65535, 0)), 48), shiftLeft(bitwiseAnd(fromInt(g), new Long(65535, 0)), 32)), shiftLeft(bitwiseAnd(fromInt(b), new Long(65535, 0)), 16)), shiftLeft(bitwiseAnd(fromInt(a), new Long(1023, 0)), 6)), bitwiseAnd(fromInt(id), new Long(63, 0)));
    var tmp$ret$33 = _ULong___init__impl__c78o9k(this_9);
    return _Color___init__impl__r6cqi2(tmp$ret$33);
  }
  function toArgb(_this__u8e3s4) {
    // Inline function 'kotlin.ULong.shr' call
    var this_0 = _Color___get_value__impl__1pls5m(Color__convert_impl_so5m8t(_this__u8e3s4, ColorSpaces_getInstance().l4t_1));
    // Inline function 'kotlin.ULong.toInt' call
    var this_1 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_0), 32));
    return convertToInt(_ULong___get_data__impl__fggpzb(this_1));
  }
  function Color_3(color) {
    // Inline function 'kotlin.toULong' call
    // Inline function 'kotlin.ULong.shl' call
    var this_0 = _ULong___init__impl__c78o9k(fromInt(color));
    var tmp$ret$1 = _ULong___init__impl__c78o9k(shiftLeft(_ULong___get_data__impl__fggpzb(this_0), 32));
    return _Color___init__impl__r6cqi2(tmp$ret$1);
  }
  function UncheckedColor(red, green, blue, alpha, colorSpace) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().l4t_1 : colorSpace;
    if (colorSpace.t4u()) {
      var argb = numberToInt(alpha * 255.0 + 0.5) << 24 | numberToInt(red * 255.0 + 0.5) << 16 | numberToInt(green * 255.0 + 0.5) << 8 | numberToInt(blue * 255.0 + 0.5);
      // Inline function 'kotlin.toULong' call
      // Inline function 'kotlin.ULong.shl' call
      var this_0 = _ULong___init__impl__c78o9k(fromInt(argb));
      var tmp$ret$1 = _ULong___init__impl__c78o9k(shiftLeft(_ULong___get_data__impl__fggpzb(this_0), 32));
      return _Color___init__impl__r6cqi2(tmp$ret$1);
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits = toRawBits(red);
      var s = bits >>> 31 | 0;
      var e = (bits >>> 23 | 0) & 255;
      var m = bits & 8388607;
      var outE = 0;
      var outM = 0;
      if (e === 255) {
        outE = 31;
        outM = !(m === 0) ? 512 : 0;
      } else {
        e = (e - 127 | 0) + 15 | 0;
        if (e >= 31) {
          outE = 49;
        } else if (e <= 0) {
          if (e >= -10) {
            m = (m | 8388608) >> (1 - e | 0);
            if (!((m & 4096) === 0))
              m = m + 8192 | 0;
            outM = m >> 13;
          }
        } else {
          outE = e;
          outM = m >> 13;
          if (!((m & 4096) === 0)) {
            var out = outE << 10 | outM;
            out = out + 1 | 0;
            tmp$ret$2 = toShort(out | s << 15);
            break $l$block;
          }
        }
      }
      tmp$ret$2 = toShort(s << 15 | outE << 10 | outM);
    }
    var r = tmp$ret$2;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits_0 = toRawBits(green);
      var s_0 = bits_0 >>> 31 | 0;
      var e_0 = (bits_0 >>> 23 | 0) & 255;
      var m_0 = bits_0 & 8388607;
      var outE_0 = 0;
      var outM_0 = 0;
      if (e_0 === 255) {
        outE_0 = 31;
        outM_0 = !(m_0 === 0) ? 512 : 0;
      } else {
        e_0 = (e_0 - 127 | 0) + 15 | 0;
        if (e_0 >= 31) {
          outE_0 = 49;
        } else if (e_0 <= 0) {
          if (e_0 >= -10) {
            m_0 = (m_0 | 8388608) >> (1 - e_0 | 0);
            if (!((m_0 & 4096) === 0))
              m_0 = m_0 + 8192 | 0;
            outM_0 = m_0 >> 13;
          }
        } else {
          outE_0 = e_0;
          outM_0 = m_0 >> 13;
          if (!((m_0 & 4096) === 0)) {
            var out_0 = outE_0 << 10 | outM_0;
            out_0 = out_0 + 1 | 0;
            tmp$ret$3 = toShort(out_0 | s_0 << 15);
            break $l$block_0;
          }
        }
      }
      tmp$ret$3 = toShort(s_0 << 15 | outE_0 << 10 | outM_0);
    }
    var g = tmp$ret$3;
    var tmp$ret$4;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits_1 = toRawBits(blue);
      var s_1 = bits_1 >>> 31 | 0;
      var e_1 = (bits_1 >>> 23 | 0) & 255;
      var m_1 = bits_1 & 8388607;
      var outE_1 = 0;
      var outM_1 = 0;
      if (e_1 === 255) {
        outE_1 = 31;
        outM_1 = !(m_1 === 0) ? 512 : 0;
      } else {
        e_1 = (e_1 - 127 | 0) + 15 | 0;
        if (e_1 >= 31) {
          outE_1 = 49;
        } else if (e_1 <= 0) {
          if (e_1 >= -10) {
            m_1 = (m_1 | 8388608) >> (1 - e_1 | 0);
            if (!((m_1 & 4096) === 0))
              m_1 = m_1 + 8192 | 0;
            outM_1 = m_1 >> 13;
          }
        } else {
          outE_1 = e_1;
          outM_1 = m_1 >> 13;
          if (!((m_1 & 4096) === 0)) {
            var out_1 = outE_1 << 10 | outM_1;
            out_1 = out_1 + 1 | 0;
            tmp$ret$4 = toShort(out_1 | s_1 << 15);
            break $l$block_1;
          }
        }
      }
      tmp$ret$4 = toShort(s_1 << 15 | outE_1 << 10 | outM_1);
    }
    var b = tmp$ret$4;
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.max' call
    var b_0 = Math.min(alpha, 1.0);
    var tmp$ret$6 = Math.max(0.0, b_0);
    var a = numberToInt(tmp$ret$6 * 1023.0 + 0.5);
    var id = colorSpace.r4u_1;
    // Inline function 'kotlin.toULong' call
    var this_1 = bitwiseOr(bitwiseOr(bitwiseOr(bitwiseOr(shiftLeft(bitwiseAnd(fromInt(r), new Long(65535, 0)), 48), shiftLeft(bitwiseAnd(fromInt(g), new Long(65535, 0)), 32)), shiftLeft(bitwiseAnd(fromInt(b), new Long(65535, 0)), 16)), shiftLeft(bitwiseAnd(fromInt(a), new Long(1023, 0)), 6)), bitwiseAnd(fromInt(id), new Long(63, 0)));
    var tmp$ret$7 = _ULong___init__impl__c78o9k(this_1);
    return _Color___init__impl__r6cqi2(tmp$ret$7);
  }
  function Companion_3() {
  }
  protoOf(Companion_3).x4u = function (color, blendMode) {
    return BlendModeColorFilter_init_$Create$(color, blendMode);
  };
  protoOf(Companion_3).y4u = function (color, blendMode, $super) {
    blendMode = blendMode === VOID ? Companion_getInstance_12().d4p_1 : blendMode;
    return $super === VOID ? this.x4u(color, blendMode) : $super.x4u.call(this, new Color(color), new BlendMode(blendMode));
  };
  var Companion_instance_5;
  function Companion_getInstance_16() {
    return Companion_instance_5;
  }
  function ColorFilter(nativeColorFilter) {
    this.z4u_1 = nativeColorFilter;
  }
  function BlendModeColorFilter_init_$Init$(color, blendMode, $this) {
    BlendModeColorFilter.call($this, color, blendMode, actualTintColorFilter(color, blendMode));
    return $this;
  }
  function BlendModeColorFilter_init_$Create$(color, blendMode) {
    return BlendModeColorFilter_init_$Init$(color, blendMode, objectCreate(protoOf(BlendModeColorFilter)));
  }
  function BlendModeColorFilter(color, blendMode, nativeColorFilter) {
    ColorFilter.call(this, nativeColorFilter);
    this.b4v_1 = color;
    this.c4v_1 = blendMode;
  }
  protoOf(BlendModeColorFilter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlendModeColorFilter))
      return false;
    if (!equals(this.b4v_1, other.b4v_1))
      return false;
    if (!(this.c4v_1 === other.c4v_1))
      return false;
    return true;
  };
  protoOf(BlendModeColorFilter).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.b4v_1);
    result = imul(31, result) + BlendMode__hashCode_impl_93ceri(this.c4v_1) | 0;
    return result;
  };
  protoOf(BlendModeColorFilter).toString = function () {
    return 'BlendModeColorFilter(color=' + Color__toString_impl_hpzmaq(this.b4v_1) + ', blendMode=' + BlendMode__toString_impl_uuibkd(this.c4v_1) + ')';
  };
  function _FilterQuality___init__impl__nv51aq(value) {
    return value;
  }
  function Companion_4() {
    Companion_instance_6 = this;
    this.d4v_1 = _FilterQuality___init__impl__nv51aq(0);
    this.e4v_1 = _FilterQuality___init__impl__nv51aq(1);
    this.f4v_1 = _FilterQuality___init__impl__nv51aq(2);
    this.g4v_1 = _FilterQuality___init__impl__nv51aq(3);
  }
  var Companion_instance_6;
  function Companion_getInstance_17() {
    if (Companion_instance_6 == null)
      new Companion_4();
    return Companion_instance_6;
  }
  function FilterQuality__toString_impl_i5cfty($this) {
    return $this === Companion_getInstance_17().d4v_1 ? 'None' : $this === Companion_getInstance_17().e4v_1 ? 'Low' : $this === Companion_getInstance_17().f4v_1 ? 'Medium' : $this === Companion_getInstance_17().g4v_1 ? 'High' : 'Unknown';
  }
  function FilterQuality__hashCode_impl_v4lpcb($this) {
    return $this;
  }
  function get_Fp32DenormalFloat() {
    _init_properties_Float16_kt__eyzj8x();
    return Fp32DenormalFloat;
  }
  var Fp32DenormalFloat;
  function access$_get_Fp32DenormalFloat_$tFloat16Kt_xjne9g() {
    return get_Fp32DenormalFloat();
  }
  var properties_initialized_Float16_kt_xeo1ox;
  function _init_properties_Float16_kt__eyzj8x() {
    if (!properties_initialized_Float16_kt_xeo1ox) {
      properties_initialized_Float16_kt_xeo1ox = true;
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = 1056964608;
      Fp32DenormalFloat = floatFromBits(bits);
    }
  }
  function ImageBitmap(width, height, config, hasAlpha, colorSpace) {
    config = config === VOID ? Companion_getInstance_18().h4v_1 : config;
    hasAlpha = hasAlpha === VOID ? true : hasAlpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().l4t_1 : colorSpace;
    return ActualImageBitmap(width, height, config, hasAlpha, colorSpace);
  }
  function _ImageBitmapConfig___init__impl__wfx9yl(value) {
    return value;
  }
  function Companion_5() {
    Companion_instance_7 = this;
    this.h4v_1 = _ImageBitmapConfig___init__impl__wfx9yl(0);
    this.i4v_1 = _ImageBitmapConfig___init__impl__wfx9yl(1);
    this.j4v_1 = _ImageBitmapConfig___init__impl__wfx9yl(2);
    this.k4v_1 = _ImageBitmapConfig___init__impl__wfx9yl(3);
    this.l4v_1 = _ImageBitmapConfig___init__impl__wfx9yl(4);
  }
  var Companion_instance_7;
  function Companion_getInstance_18() {
    if (Companion_instance_7 == null)
      new Companion_5();
    return Companion_instance_7;
  }
  function ImageBitmapConfig__toString_impl_dfv42d($this) {
    return $this === Companion_getInstance_18().h4v_1 ? 'Argb8888' : $this === Companion_getInstance_18().i4v_1 ? 'Alpha8' : $this === Companion_getInstance_18().j4v_1 ? 'Rgb565' : $this === Companion_getInstance_18().k4v_1 ? 'F16' : $this === Companion_getInstance_18().l4v_1 ? 'Gpu' : 'Unknown';
  }
  function ImageBitmapConfig__hashCode_impl_8basqi($this) {
    return $this;
  }
  function ImageBitmapConfig__equals_impl_hqcsv2($this, other) {
    if (!(other instanceof ImageBitmapConfig))
      return false;
    if (!($this === (other instanceof ImageBitmapConfig ? other.m4v_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ImageBitmapConfig(value) {
    Companion_getInstance_18();
    this.m4v_1 = value;
  }
  protoOf(ImageBitmapConfig).toString = function () {
    return ImageBitmapConfig__toString_impl_dfv42d(this.m4v_1);
  };
  protoOf(ImageBitmapConfig).hashCode = function () {
    return ImageBitmapConfig__hashCode_impl_8basqi(this.m4v_1);
  };
  protoOf(ImageBitmapConfig).equals = function (other) {
    return ImageBitmapConfig__equals_impl_hqcsv2(this.m4v_1, other);
  };
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function _Matrix___init__impl__q3kp4w(values) {
    var tmp;
    if (values === VOID) {
      // Inline function 'kotlin.floatArrayOf' call
      tmp = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    } else {
      tmp = values;
    }
    values = tmp;
    return values;
  }
  function _Matrix___get_values__impl__fblr7b($this) {
    return $this;
  }
  function Matrix__map_impl_7meu7m($this, point) {
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return point;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v03 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v13 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v30 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v31 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v33 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(point);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(point);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var y = floatFromBits(bits_0);
    var z = v03 * x + v13 * y + v33;
    var inverseZ = 1 / z;
    var tmp;
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    if ((toRawBits(inverseZ) & 2147483647) < 2139095040) {
      tmp = inverseZ;
    } else {
      tmp = 0.0;
    }
    var pZ = tmp;
    var tmp0 = pZ * (v00 * x + v10 * y + v30);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = pZ * (v01 * x + v11 * y + v31);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$18 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$18);
  }
  function Matrix__map_impl_7meu7m_0($this, rect) {
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return rect;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v03 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v13 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v30 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v31 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v33 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    var l = rect.v3t_1;
    var t = rect.w3t_1;
    var r = rect.x3t_1;
    var b = rect.y3t_1;
    var x = l;
    var y = t;
    var inverseZ = 1.0 / (v03 * x + v13 * y + v33);
    var tmp;
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    var this_0 = inverseZ;
    if ((toRawBits(this_0) & 2147483647) < 2139095040) {
      tmp = inverseZ;
    } else {
      tmp = 0.0;
    }
    var pZ = tmp;
    var x0 = pZ * (v00 * x + v10 * y + v30);
    var y0 = pZ * (v01 * x + v11 * y + v31);
    x = l;
    y = b;
    inverseZ = 1.0 / (v03 * x + v13 * y + v33);
    var tmp_0;
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    var this_1 = inverseZ;
    if ((toRawBits(this_1) & 2147483647) < 2139095040) {
      tmp_0 = inverseZ;
    } else {
      tmp_0 = 0.0;
    }
    pZ = tmp_0;
    var x1 = pZ * (v00 * x + v10 * y + v30);
    var y1 = pZ * (v01 * x + v11 * y + v31);
    x = r;
    y = t;
    inverseZ = 1.0 / (v03 * x + v13 * y + v33);
    var tmp_1;
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    var this_2 = inverseZ;
    if ((toRawBits(this_2) & 2147483647) < 2139095040) {
      tmp_1 = inverseZ;
    } else {
      tmp_1 = 0.0;
    }
    pZ = tmp_1;
    var x2 = pZ * (v00 * x + v10 * y + v30);
    var y2 = pZ * (v01 * x + v11 * y + v31);
    x = r;
    y = b;
    inverseZ = 1.0 / (v03 * x + v13 * y + v33);
    var tmp_2;
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    var this_3 = inverseZ;
    if ((toRawBits(this_3) & 2147483647) < 2139095040) {
      tmp_2 = inverseZ;
    } else {
      tmp_2 = 0.0;
    }
    pZ = tmp_2;
    var x3 = pZ * (v00 * x + v10 * y + v30);
    var y3 = pZ * (v01 * x + v11 * y + v31);
    // Inline function 'androidx.compose.ui.util.fastMinOf' call
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'kotlin.comparisons.minOf' call
    var b_0 = Math.min(x2, x3);
    // Inline function 'kotlin.comparisons.minOf' call
    var b_1 = Math.min(x1, b_0);
    var tmp_3 = Math.min(x0, b_1);
    // Inline function 'androidx.compose.ui.util.fastMinOf' call
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'kotlin.comparisons.minOf' call
    var b_2 = Math.min(y2, y3);
    // Inline function 'kotlin.comparisons.minOf' call
    var b_3 = Math.min(y1, b_2);
    var tmp_4 = Math.min(y0, b_3);
    // Inline function 'androidx.compose.ui.util.fastMaxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_4 = Math.max(x2, x3);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_5 = Math.max(x1, b_4);
    var tmp_5 = Math.max(x0, b_5);
    // Inline function 'androidx.compose.ui.util.fastMaxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_6 = Math.max(y2, y3);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_7 = Math.max(y1, b_6);
    var tmp$ret$28 = Math.max(y0, b_7);
    return new Rect(tmp_3, tmp_4, tmp_5, tmp$ret$28);
  }
  function Matrix__map_impl_7meu7m_1($this, rect) {
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return Unit_instance;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v03 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v13 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v30 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v31 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v33 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    var l = rect.h3t_1;
    var t = rect.i3t_1;
    var r = rect.j3t_1;
    var b = rect.k3t_1;
    var x = l;
    var y = t;
    var inverseZ = 1.0 / (v03 * x + v13 * y + v33);
    var tmp;
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    var this_0 = inverseZ;
    if ((toRawBits(this_0) & 2147483647) < 2139095040) {
      tmp = inverseZ;
    } else {
      tmp = 0.0;
    }
    var pZ = tmp;
    var x0 = pZ * (v00 * x + v10 * y + v30);
    var y0 = pZ * (v01 * x + v11 * y + v31);
    x = l;
    y = b;
    inverseZ = 1.0 / (v03 * x + v13 * y + v33);
    var tmp_0;
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    var this_1 = inverseZ;
    if ((toRawBits(this_1) & 2147483647) < 2139095040) {
      tmp_0 = inverseZ;
    } else {
      tmp_0 = 0.0;
    }
    pZ = tmp_0;
    var x1 = pZ * (v00 * x + v10 * y + v30);
    var y1 = pZ * (v01 * x + v11 * y + v31);
    x = r;
    y = t;
    inverseZ = 1.0 / (v03 * x + v13 * y + v33);
    var tmp_1;
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    var this_2 = inverseZ;
    if ((toRawBits(this_2) & 2147483647) < 2139095040) {
      tmp_1 = inverseZ;
    } else {
      tmp_1 = 0.0;
    }
    pZ = tmp_1;
    var x2 = pZ * (v00 * x + v10 * y + v30);
    var y2 = pZ * (v01 * x + v11 * y + v31);
    x = r;
    y = b;
    inverseZ = 1.0 / (v03 * x + v13 * y + v33);
    var tmp_2;
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    var this_3 = inverseZ;
    if ((toRawBits(this_3) & 2147483647) < 2139095040) {
      tmp_2 = inverseZ;
    } else {
      tmp_2 = 0.0;
    }
    pZ = tmp_2;
    var x3 = pZ * (v00 * x + v10 * y + v30);
    var y3 = pZ * (v01 * x + v11 * y + v31);
    var tmp_3 = rect;
    // Inline function 'androidx.compose.ui.util.fastMinOf' call
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'kotlin.comparisons.minOf' call
    var b_0 = Math.min(x2, x3);
    // Inline function 'kotlin.comparisons.minOf' call
    var b_1 = Math.min(x1, b_0);
    tmp_3.h3t_1 = Math.min(x0, b_1);
    var tmp_4 = rect;
    // Inline function 'androidx.compose.ui.util.fastMinOf' call
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'kotlin.comparisons.minOf' call
    var b_2 = Math.min(y2, y3);
    // Inline function 'kotlin.comparisons.minOf' call
    var b_3 = Math.min(y1, b_2);
    tmp_4.i3t_1 = Math.min(y0, b_3);
    var tmp_5 = rect;
    // Inline function 'androidx.compose.ui.util.fastMaxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_4 = Math.max(x2, x3);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_5 = Math.max(x1, b_4);
    tmp_5.j3t_1 = Math.max(x0, b_5);
    var tmp_6 = rect;
    // Inline function 'androidx.compose.ui.util.fastMaxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_6 = Math.max(y2, y3);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_7 = Math.max(y1, b_6);
    tmp_6.k3t_1 = Math.max(y0, b_7);
  }
  function Matrix__timesAssign_impl_oas521($this, m) {
    var v = _Matrix___get_values__impl__fblr7b($this);
    if (v.length < 16)
      return Unit_instance;
    if (_Matrix___get_values__impl__fblr7b(m).length < 16)
      return Unit_instance;
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = tmp_0 + tmp_1 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_2 + tmp_3 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v00 = tmp_4 + tmp_5 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = tmp_6 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = tmp_7 + tmp_8 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = tmp_9 + tmp_10 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v01 = tmp_11 + tmp_12 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_14 = tmp_13 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_15 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_16 = tmp_14 + tmp_15 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_17 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_18 = tmp_16 + tmp_17 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_19 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v02 = tmp_18 + tmp_19 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_20 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_21 = tmp_20 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_22 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_23 = tmp_21 + tmp_22 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_24 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_25 = tmp_23 + tmp_24 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_26 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v03 = tmp_25 + tmp_26 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_27 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_28 = tmp_27 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_29 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_30 = tmp_28 + tmp_29 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_31 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_32 = tmp_30 + tmp_31 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_33 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v10 = tmp_32 + tmp_33 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_34 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_35 = tmp_34 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_36 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_37 = tmp_35 + tmp_36 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_38 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_39 = tmp_37 + tmp_38 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_40 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v11 = tmp_39 + tmp_40 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_41 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_42 = tmp_41 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_43 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_44 = tmp_42 + tmp_43 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_45 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_46 = tmp_44 + tmp_45 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_47 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v12 = tmp_46 + tmp_47 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_48 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_49 = tmp_48 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_50 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_51 = tmp_49 + tmp_50 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_52 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_53 = tmp_51 + tmp_52 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_54 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v13 = tmp_53 + tmp_54 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_55 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_56 = tmp_55 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_57 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_58 = tmp_56 + tmp_57 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_59 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_60 = tmp_58 + tmp_59 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_61 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v20 = tmp_60 + tmp_61 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_62 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_63 = tmp_62 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_64 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_65 = tmp_63 + tmp_64 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_66 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_67 = tmp_65 + tmp_66 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_68 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v21 = tmp_67 + tmp_68 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_69 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_70 = tmp_69 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_71 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_72 = tmp_70 + tmp_71 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_73 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_74 = tmp_72 + tmp_73 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_75 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v22 = tmp_74 + tmp_75 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_76 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_77 = tmp_76 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_78 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_79 = tmp_77 + tmp_78 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_80 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_81 = tmp_79 + tmp_80 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_82 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v23 = tmp_81 + tmp_82 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_83 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_84 = tmp_83 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_85 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_86 = tmp_84 + tmp_85 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_87 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_88 = tmp_86 + tmp_87 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_89 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v30 = tmp_88 + tmp_89 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_90 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_91 = tmp_90 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_92 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_93 = tmp_91 + tmp_92 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_94 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_95 = tmp_93 + tmp_94 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_96 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v31 = tmp_95 + tmp_96 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_97 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_98 = tmp_97 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_99 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_100 = tmp_98 + tmp_99 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_101 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_102 = tmp_100 + tmp_101 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_103 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v32 = tmp_102 + tmp_103 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_104 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_105 = tmp_104 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_106 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_107 = tmp_105 + tmp_106 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_108 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_109 = tmp_107 + tmp_108 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_110 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v33 = tmp_109 + tmp_110 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 3 | 0];
    v[0] = v00;
    v[1] = v01;
    v[2] = v02;
    v[3] = v03;
    v[4] = v10;
    v[5] = v11;
    v[6] = v12;
    v[7] = v13;
    v[8] = v20;
    v[9] = v21;
    v[10] = v22;
    v[11] = v23;
    v[12] = v30;
    v[13] = v31;
    v[14] = v32;
    v[15] = v33;
  }
  function Matrix__toString_impl_l0abk0($this) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$15 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    return trimIndent('\n            |' + tmp + ' ' + tmp_0 + ' ' + tmp_1 + ' ' + tmp_2 + '|\n            |' + tmp_3 + ' ' + tmp_4 + ' ' + tmp_5 + ' ' + tmp_6 + '|\n            |' + tmp_7 + ' ' + tmp_8 + ' ' + tmp_9 + ' ' + tmp_10 + '|\n            |' + tmp_11 + ' ' + tmp_12 + ' ' + tmp_13 + ' ' + tmp$ret$15 + '|\n        ');
  }
  function Matrix__reset_impl_4l49i7($this) {
    var v = _Matrix___get_values__impl__fblr7b($this);
    if (v.length < 16)
      return Unit_instance;
    v[0] = 1.0;
    v[1] = 0.0;
    v[2] = 0.0;
    v[3] = 0.0;
    v[4] = 0.0;
    v[5] = 1.0;
    v[6] = 0.0;
    v[7] = 0.0;
    v[8] = 0.0;
    v[9] = 0.0;
    v[10] = 1.0;
    v[11] = 0.0;
    v[12] = 0.0;
    v[13] = 0.0;
    v[14] = 0.0;
    v[15] = 1.0;
  }
  function Matrix__rotateX_impl_3e5y7j($this, degrees) {
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return Unit_instance;
    var r = degrees * (3.141592653589793 / 180.0);
    // Inline function 'kotlin.math.sin' call
    var s = Math.sin(r);
    // Inline function 'kotlin.math.cos' call
    var c = Math.cos(r);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    var v01 = a01 * c - a02 * s;
    var v02 = a01 * s + a02 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v11 = a11 * c - a12 * s;
    var v12 = a11 * s + a12 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a21 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    var v21 = a21 * c - a22 * s;
    var v22 = a21 * s + a22 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a31 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    var v31 = a31 * c - a32 * s;
    var v32 = a31 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
  }
  function Matrix__rotateY_impl_2x4btc($this, degrees) {
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return Unit_instance;
    var r = degrees * (3.141592653589793 / 180.0);
    // Inline function 'kotlin.math.sin' call
    var s = Math.sin(r);
    // Inline function 'kotlin.math.cos' call
    var c = Math.cos(r);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    var v00 = a00 * c + a02 * s;
    var v02 = -a00 * s + a02 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v10 = a10 * c + a12 * s;
    var v12 = -a10 * s + a12 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a20 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    var v20 = a20 * c + a22 * s;
    var v22 = -a20 * s + a22 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a30 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    var v30 = a30 * c + a32 * s;
    var v32 = -a30 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
  }
  function Matrix__rotateZ_impl_2g2pf5($this, degrees) {
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return Unit_instance;
    var r = degrees * (3.141592653589793 / 180.0);
    // Inline function 'kotlin.math.sin' call
    var s = Math.sin(r);
    // Inline function 'kotlin.math.cos' call
    var c = Math.cos(r);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    var v00 = c * a00 + s * a10;
    var v10 = -s * a00 + c * a10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    var v01 = c * a01 + s * a11;
    var v11 = -s * a01 + c * a11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v02 = c * a02 + s * a12;
    var v12 = -s * a02 + c * a12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a03 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a13 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    var v03 = c * a03 + s * a13;
    var v13 = -s * a03 + c * a13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v13;
  }
  function Matrix__scale_impl_6w89a4($this, x, y, z) {
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return Unit_instance;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_0 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v_0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v_1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v_2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_3 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v_3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_4 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v_4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_5 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v_5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_6 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v_6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_7 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v_7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_8 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v_8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_9 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v_9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_10 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] = v_10;
  }
  function Matrix__scale$default_impl_snaws9($this, x, y, z, $super) {
    x = x === VOID ? 1.0 : x;
    y = y === VOID ? 1.0 : y;
    z = z === VOID ? 1.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__scale_impl_6w89a4($this, x, y, z);
      tmp = Unit_instance;
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).o4v.call(new Matrix($this), x, y, z);
    }
    return tmp;
  }
  function Matrix__translate_impl_1hftog($this, x, y, z) {
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return Unit_instance;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = tmp_0 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t1 = tmp_1 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = tmp_2 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_3 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t2 = tmp_4 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = tmp_5 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = tmp_6 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t3 = tmp_7 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = tmp_8 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = tmp_9 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t4 = tmp_10 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = t1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = t2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = t3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0] = t4;
  }
  function Matrix__translate$default_impl_10t8ql($this, x, y, z, $super) {
    x = x === VOID ? 0.0 : x;
    y = y === VOID ? 0.0 : y;
    z = z === VOID ? 0.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__translate_impl_1hftog($this, x, y, z);
      tmp = Unit_instance;
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).p4v.call(new Matrix($this), x, y, z);
    }
    return tmp;
  }
  function Companion_6() {
    this.q4v_1 = 0;
    this.r4v_1 = 1;
    this.s4v_1 = 3;
    this.t4v_1 = 4;
    this.u4v_1 = 5;
    this.v4v_1 = 7;
    this.w4v_1 = 10;
    this.x4v_1 = 12;
    this.y4v_1 = 13;
    this.z4v_1 = 14;
    this.a4w_1 = 15;
  }
  var Companion_instance_8;
  function Companion_getInstance_19() {
    return Companion_instance_8;
  }
  function Matrix__hashCode_impl_s9ntm9($this) {
    return hashCode($this);
  }
  function Matrix__equals_impl_g5p8p9($this, other) {
    if (!(other instanceof Matrix))
      return false;
    var tmp0_other_with_cast = other instanceof Matrix ? other.n4v_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Matrix(values) {
    this.n4v_1 = values;
  }
  protoOf(Matrix).toString = function () {
    return Matrix__toString_impl_l0abk0(this.n4v_1);
  };
  protoOf(Matrix).hashCode = function () {
    return Matrix__hashCode_impl_s9ntm9(this.n4v_1);
  };
  protoOf(Matrix).equals = function (other) {
    return Matrix__equals_impl_g5p8p9(this.n4v_1, other);
  };
  function isIdentity(_this__u8e3s4) {
    var v = _Matrix___get_values__impl__fblr7b(_this__u8e3s4);
    if (v.length < 16)
      return false;
    return v[0] === 1.0 && v[1] === 0.0 && v[2] === 0.0 && v[3] === 0.0 && v[4] === 0.0 && v[5] === 1.0 && v[6] === 0.0 && v[7] === 0.0 && v[8] === 0.0 && v[9] === 0.0 && v[10] === 1.0 && v[11] === 0.0 && v[12] === 0.0 && v[13] === 0.0 && v[14] === 0.0 && v[15] === 1.0;
  }
  function Rectangle(rect) {
    Outline.call(this);
    this.b4w_1 = rect;
  }
  protoOf(Rectangle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rectangle))
      return false;
    if (!this.b4w_1.equals(other.b4w_1))
      return false;
    return true;
  };
  protoOf(Rectangle).hashCode = function () {
    return this.b4w_1.hashCode();
  };
  function Rounded(roundRect) {
    Outline.call(this);
    this.c4w_1 = roundRect;
    var tmp = this;
    var tmp_0;
    if (!get_isSimple(this.c4w_1)) {
      // Inline function 'kotlin.apply' call
      var this_0 = Path_0();
      this_0.e4w(this.c4w_1);
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    tmp.d4w_1 = tmp_0;
  }
  protoOf(Rounded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rounded))
      return false;
    if (!this.c4w_1.equals(other.c4w_1))
      return false;
    return true;
  };
  protoOf(Rounded).hashCode = function () {
    return this.c4w_1.hashCode();
  };
  function Generic(path) {
    Outline.call(this);
    this.f4w_1 = path;
  }
  function Outline() {
  }
  function drawOutline(_this__u8e3s4, outline, color, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g4w_1 : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var rect = outline.b4w_1;
      _this__u8e3s4.k4w(color, topLeft(rect), size(rect), alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      if (outline instanceof Rounded) {
        var path = outline.d4w_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.i4w(path, color, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        } else {
          var rrect = outline.c4w_1;
          // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
          var this_0 = rrect.p3u_1;
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value = _CornerRadius___get_packedValue__impl__okv4jq(this_0);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          // Inline function 'kotlin.fromBits' call
          var bits = convertToInt(shiftRight(value, 32));
          var radius = floatFromBits(bits);
          var tmp0_topLeft = topLeft_0(rrect);
          var tmp1_size = size_0(rrect);
          // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var v1 = fromInt(toRawBits(radius));
          var v2 = fromInt(toRawBits(radius));
          var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
          var tmp2_cornerRadius = _CornerRadius___init__impl__ojmabe(tmp$ret$6);
          _this__u8e3s4.j4w(color, tmp0_topLeft, tmp1_size, tmp2_cornerRadius, style, alpha, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var path_0 = outline.f4w_1;
          _this__u8e3s4.i4w(path_0, color, alpha, style, colorFilter, blendMode);
          tmp = Unit_instance;
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function drawOutline_0(_this__u8e3s4, outline, brush, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g4w_1 : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var rect = outline.b4w_1;
      _this__u8e3s4.n4w(brush, topLeft(rect), size(rect), alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      if (outline instanceof Rounded) {
        var path = outline.d4w_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.l4w(path, brush, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        } else {
          var rrect = outline.c4w_1;
          // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
          var this_0 = rrect.p3u_1;
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value = _CornerRadius___get_packedValue__impl__okv4jq(this_0);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          // Inline function 'kotlin.fromBits' call
          var bits = convertToInt(shiftRight(value, 32));
          var radius = floatFromBits(bits);
          var tmp_1 = topLeft_0(rrect);
          var tmp_2 = size_0(rrect);
          // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var v1 = fromInt(toRawBits(radius));
          var v2 = fromInt(toRawBits(radius));
          var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
          var tmp$ret$7 = _CornerRadius___init__impl__ojmabe(tmp$ret$6);
          _this__u8e3s4.m4w(brush, tmp_1, tmp_2, tmp$ret$7, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var path_0 = outline.f4w_1;
          _this__u8e3s4.l4w(path_0, brush, alpha, style, colorFilter, blendMode);
          tmp = Unit_instance;
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function topLeft(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.v3t_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _this__u8e3s4.w3t_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  function size(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Rect.width' call
    var tmp0 = _this__u8e3s4.x3t_1 - _this__u8e3s4.v3t_1;
    // Inline function 'androidx.compose.ui.geometry.Rect.height' call
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _this__u8e3s4.y3t_1 - _this__u8e3s4.w3t_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$2);
  }
  function topLeft_0(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.i3u_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _this__u8e3s4.j3u_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  function size_0(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.s3u();
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _this__u8e3s4.t3u();
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$0);
  }
  function _PaintingStyle___init__impl__pwxppo(value) {
    return value;
  }
  function Companion_7() {
    Companion_instance_9 = this;
    this.o4w_1 = _PaintingStyle___init__impl__pwxppo(0);
    this.p4w_1 = _PaintingStyle___init__impl__pwxppo(1);
  }
  var Companion_instance_9;
  function Companion_getInstance_20() {
    if (Companion_instance_9 == null)
      new Companion_7();
    return Companion_instance_9;
  }
  var Direction_CounterClockwise_instance;
  var Direction_Clockwise_instance;
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_CounterClockwise_instance = new Direction('CounterClockwise', 0);
    Direction_Clockwise_instance = new Direction('Clockwise', 1);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Direction_CounterClockwise_getInstance() {
    Direction_initEntries();
    return Direction_CounterClockwise_instance;
  }
  function Path() {
  }
  function _PathFillType___init__impl__d59lzz(value) {
    return value;
  }
  function Companion_8() {
    Companion_instance_10 = this;
    this.k4x_1 = _PathFillType___init__impl__d59lzz(0);
    this.l4x_1 = _PathFillType___init__impl__d59lzz(1);
  }
  var Companion_instance_10;
  function Companion_getInstance_21() {
    if (Companion_instance_10 == null)
      new Companion_8();
    return Companion_instance_10;
  }
  function PathFillType__toString_impl_nw7h1d($this) {
    return $this === Companion_getInstance_21().k4x_1 ? 'NonZero' : $this === Companion_getInstance_21().l4x_1 ? 'EvenOdd' : 'Unknown';
  }
  function PathFillType__hashCode_impl_pdqo4w($this) {
    return $this;
  }
  function PathFillType__equals_impl_94fhtg($this, other) {
    if (!(other instanceof PathFillType))
      return false;
    if (!($this === (other instanceof PathFillType ? other.m4x_1 : THROW_CCE())))
      return false;
    return true;
  }
  function PathFillType(value) {
    Companion_getInstance_21();
    this.m4x_1 = value;
  }
  protoOf(PathFillType).toString = function () {
    return PathFillType__toString_impl_nw7h1d(this.m4x_1);
  };
  protoOf(PathFillType).hashCode = function () {
    return PathFillType__hashCode_impl_pdqo4w(this.m4x_1);
  };
  protoOf(PathFillType).equals = function (other) {
    return PathFillType__equals_impl_94fhtg(this.m4x_1, other);
  };
  function _PathOperation___init__impl__8ddeif(value) {
    return value;
  }
  function Companion_9() {
    Companion_instance_11 = this;
    this.n4x_1 = _PathOperation___init__impl__8ddeif(0);
    this.o4x_1 = _PathOperation___init__impl__8ddeif(1);
    this.p4x_1 = _PathOperation___init__impl__8ddeif(2);
    this.q4x_1 = _PathOperation___init__impl__8ddeif(3);
    this.r4x_1 = _PathOperation___init__impl__8ddeif(4);
  }
  var Companion_instance_11;
  function Companion_getInstance_22() {
    if (Companion_instance_11 == null)
      new Companion_9();
    return Companion_instance_11;
  }
  function get_RectangleShape() {
    _init_properties_RectangleShape_kt__k3dd0u();
    return RectangleShape;
  }
  var RectangleShape;
  function RectangleShape$1() {
  }
  protoOf(RectangleShape$1).s4x = function (size, layoutDirection, density) {
    return new Rectangle(toRect(size));
  };
  protoOf(RectangleShape$1).toString = function () {
    return 'RectangleShape';
  };
  var properties_initialized_RectangleShape_kt_h73j90;
  function _init_properties_RectangleShape_kt__k3dd0u() {
    if (!properties_initialized_RectangleShape_kt_h73j90) {
      properties_initialized_RectangleShape_kt_h73j90 = true;
      RectangleShape = new RectangleShape$1();
    }
  }
  function LinearGradientShader(from, to, colors, colorStops, tileMode) {
    colorStops = colorStops === VOID ? null : colorStops;
    tileMode = tileMode === VOID ? Companion_getInstance_26().h4r_1 : tileMode;
    return ActualLinearGradientShader(from, to, colors, colorStops, tileMode);
  }
  function RadialGradientShader(center, radius, colors, colorStops, tileMode) {
    colorStops = colorStops === VOID ? null : colorStops;
    tileMode = tileMode === VOID ? Companion_getInstance_26().h4r_1 : tileMode;
    return ActualRadialGradientShader(center, radius, colors, colorStops, tileMode);
  }
  function SweepGradientShader(center, colors, colorStops) {
    colorStops = colorStops === VOID ? null : colorStops;
    return ActualSweepGradientShader(center, colors, colorStops);
  }
  function Companion_10() {
    Companion_instance_12 = this;
    this.t4x_1 = new Shadow();
  }
  var Companion_instance_12;
  function Companion_getInstance_23() {
    if (Companion_instance_12 == null)
      new Companion_10();
    return Companion_instance_12;
  }
  function Shadow(color, offset, blurRadius) {
    Companion_getInstance_23();
    color = color === VOID ? Color_1(new Long(-16777216, 0)) : color;
    offset = offset === VOID ? Companion_getInstance_0().r3t_1 : offset;
    blurRadius = blurRadius === VOID ? 0.0 : blurRadius;
    this.u4x_1 = color;
    this.v4x_1 = offset;
    this.w4x_1 = blurRadius;
  }
  protoOf(Shadow).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!equals(this.u4x_1, other.u4x_1))
      return false;
    if (!equals(this.v4x_1, other.v4x_1))
      return false;
    if (!(this.w4x_1 === other.w4x_1))
      return false;
    return true;
  };
  protoOf(Shadow).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.u4x_1);
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.v4x_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.w4x_1) | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(color=' + Color__toString_impl_hpzmaq(this.u4x_1) + ', offset=' + Offset__toString_impl_4ffbou(this.v4x_1) + ', blurRadius=' + this.w4x_1 + ')';
  };
  function lerp_2(start, stop, fraction) {
    return new Shadow(lerp_1(start.u4x_1, stop.u4x_1, fraction), lerp_0(start.v4x_1, stop.v4x_1, fraction), lerp(start.w4x_1, stop.w4x_1, fraction));
  }
  function _StrokeCap___init__impl__kfgr27(value) {
    return value;
  }
  function Companion_11() {
    Companion_instance_13 = this;
    this.x4x_1 = _StrokeCap___init__impl__kfgr27(0);
    this.y4x_1 = _StrokeCap___init__impl__kfgr27(1);
    this.z4x_1 = _StrokeCap___init__impl__kfgr27(2);
  }
  var Companion_instance_13;
  function Companion_getInstance_24() {
    if (Companion_instance_13 == null)
      new Companion_11();
    return Companion_instance_13;
  }
  function StrokeCap__toString_impl_3xn0rd($this) {
    return $this === Companion_getInstance_24().x4x_1 ? 'Butt' : $this === Companion_getInstance_24().y4x_1 ? 'Round' : $this === Companion_getInstance_24().z4x_1 ? 'Square' : 'Unknown';
  }
  function StrokeCap__hashCode_impl_posxk8($this) {
    return $this;
  }
  function StrokeCap__equals_impl_m9bjik($this, other) {
    if (!(other instanceof StrokeCap))
      return false;
    if (!($this === (other instanceof StrokeCap ? other.a4y_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StrokeCap(value) {
    Companion_getInstance_24();
    this.a4y_1 = value;
  }
  protoOf(StrokeCap).toString = function () {
    return StrokeCap__toString_impl_3xn0rd(this.a4y_1);
  };
  protoOf(StrokeCap).hashCode = function () {
    return StrokeCap__hashCode_impl_posxk8(this.a4y_1);
  };
  protoOf(StrokeCap).equals = function (other) {
    return StrokeCap__equals_impl_m9bjik(this.a4y_1, other);
  };
  function _StrokeJoin___init__impl__ig23zz(value) {
    return value;
  }
  function Companion_12() {
    Companion_instance_14 = this;
    this.b4y_1 = _StrokeJoin___init__impl__ig23zz(0);
    this.c4y_1 = _StrokeJoin___init__impl__ig23zz(1);
    this.d4y_1 = _StrokeJoin___init__impl__ig23zz(2);
  }
  var Companion_instance_14;
  function Companion_getInstance_25() {
    if (Companion_instance_14 == null)
      new Companion_12();
    return Companion_instance_14;
  }
  function StrokeJoin__toString_impl_ph4e1r($this) {
    return $this === Companion_getInstance_25().b4y_1 ? 'Miter' : $this === Companion_getInstance_25().c4y_1 ? 'Round' : $this === Companion_getInstance_25().d4y_1 ? 'Bevel' : 'Unknown';
  }
  function StrokeJoin__hashCode_impl_3pyh8w($this) {
    return $this;
  }
  function StrokeJoin__equals_impl_hf9ej8($this, other) {
    if (!(other instanceof StrokeJoin))
      return false;
    if (!($this === (other instanceof StrokeJoin ? other.e4y_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StrokeJoin(value) {
    Companion_getInstance_25();
    this.e4y_1 = value;
  }
  protoOf(StrokeJoin).toString = function () {
    return StrokeJoin__toString_impl_ph4e1r(this.e4y_1);
  };
  protoOf(StrokeJoin).hashCode = function () {
    return StrokeJoin__hashCode_impl_3pyh8w(this.e4y_1);
  };
  protoOf(StrokeJoin).equals = function (other) {
    return StrokeJoin__equals_impl_hf9ej8(this.e4y_1, other);
  };
  function _TileMode___init__impl__syhjao(value) {
    return value;
  }
  function Companion_13() {
    Companion_instance_15 = this;
    this.h4r_1 = _TileMode___init__impl__syhjao(0);
    this.i4r_1 = _TileMode___init__impl__syhjao(1);
    this.j4r_1 = _TileMode___init__impl__syhjao(2);
    this.k4r_1 = _TileMode___init__impl__syhjao(3);
  }
  var Companion_instance_15;
  function Companion_getInstance_26() {
    if (Companion_instance_15 == null)
      new Companion_13();
    return Companion_instance_15;
  }
  function TileMode__toString_impl_tlb7f4($this) {
    return $this === Companion_getInstance_26().h4r_1 ? 'Clamp' : $this === Companion_getInstance_26().i4r_1 ? 'Repeated' : $this === Companion_getInstance_26().j4r_1 ? 'Mirror' : $this === Companion_getInstance_26().k4r_1 ? 'Decal' : 'Unknown';
  }
  function TileMode__hashCode_impl_7u5am9($this) {
    return $this;
  }
  function TileMode__equals_impl_7nvbdv($this, other) {
    if (!(other instanceof TileMode))
      return false;
    if (!($this === (other instanceof TileMode ? other.f4y_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TileMode(value) {
    Companion_getInstance_26();
    this.f4y_1 = value;
  }
  protoOf(TileMode).toString = function () {
    return TileMode__toString_impl_tlb7f4(this.f4y_1);
  };
  protoOf(TileMode).hashCode = function () {
    return TileMode__hashCode_impl_7u5am9(this.f4y_1);
  };
  protoOf(TileMode).equals = function (other) {
    return TileMode__equals_impl_7nvbdv(this.f4y_1, other);
  };
  function Adaptation$Companion$Bradford$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.8951, -0.7502, 0.0389, 0.2664, 1.7135, -0.0685, -0.1614, 0.0367, 1.0296]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Bradford$1).toString = function () {
    return 'Bradford';
  };
  function Adaptation$Companion$VonKries$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.40024, -0.2263, 0.0, 0.7076, 1.16532, 0.0, -0.08081, 0.0457, 0.91822]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$VonKries$1).toString = function () {
    return 'VonKries';
  };
  function Adaptation$Companion$Ciecat02$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.7328, -0.7036, 0.003, 0.4296, 1.6975, 0.0136, -0.1624, 0.0061, 0.9834]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Ciecat02$1).toString = function () {
    return 'Ciecat02';
  };
  function Companion_14() {
    Companion_instance_16 = this;
    var tmp = this;
    tmp.g4y_1 = new Adaptation$Companion$Bradford$1();
    var tmp_0 = this;
    tmp_0.h4y_1 = new Adaptation$Companion$VonKries$1();
    var tmp_1 = this;
    tmp_1.i4y_1 = new Adaptation$Companion$Ciecat02$1();
  }
  var Companion_instance_16;
  function Companion_getInstance_27() {
    if (Companion_instance_16 == null)
      new Companion_14();
    return Companion_instance_16;
  }
  function Adaptation(transform) {
    Companion_getInstance_27();
    this.j4y_1 = transform;
  }
  function _ColorModel___init__impl__b968n9(packedValue) {
    return packedValue;
  }
  function _ColorModel___get_packedValue__impl__uvxrhj($this) {
    return $this;
  }
  function _ColorModel___get_componentCount__impl__au0uoc($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _ColorModel___get_packedValue__impl__uvxrhj($this);
    return convertToInt(shiftRight(value, 32));
  }
  function Companion_15() {
    Companion_instance_17 = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(3), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
    tmp.k4y_1 = _ColorModel___init__impl__b968n9(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(3), 32), bitwiseAnd(fromInt(1), new Long(-1, 0)));
    tmp_0.l4y_1 = _ColorModel___init__impl__b968n9(tmp$ret$1);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$2 = bitwiseOr(shiftLeft(fromInt(3), 32), bitwiseAnd(fromInt(2), new Long(-1, 0)));
    tmp_1.m4y_1 = _ColorModel___init__impl__b968n9(tmp$ret$2);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$3 = bitwiseOr(shiftLeft(fromInt(4), 32), bitwiseAnd(fromInt(3), new Long(-1, 0)));
    tmp_2.n4y_1 = _ColorModel___init__impl__b968n9(tmp$ret$3);
  }
  var Companion_instance_17;
  function Companion_getInstance_28() {
    if (Companion_instance_17 == null)
      new Companion_15();
    return Companion_instance_17;
  }
  function ColorModel__toString_impl_msukd7($this) {
    return equals($this, Companion_getInstance_28().k4y_1) ? 'Rgb' : equals($this, Companion_getInstance_28().l4y_1) ? 'Xyz' : equals($this, Companion_getInstance_28().m4y_1) ? 'Lab' : equals($this, Companion_getInstance_28().n4y_1) ? 'Cmyk' : 'Unknown';
  }
  function ColorModel__hashCode_impl_11onkc($this) {
    return $this.hashCode();
  }
  function Companion_16() {
    this.o4y_1 = -1;
    this.p4y_1 = 63;
  }
  var Companion_instance_18;
  function Companion_getInstance_29() {
    return Companion_instance_18;
  }
  function ColorSpace(name, model, id) {
    this.p4u_1 = name;
    this.q4u_1 = model;
    this.r4u_1 = id;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.p4u_1;
    if (charSequenceLength(this_0) === 0) {
      throw IllegalArgumentException_init_$Create$('The name of a color space cannot be null and must contain at least 1 character');
    }
    if (this.r4u_1 < -1 || this.r4u_1 > 63) {
      throw IllegalArgumentException_init_$Create$('The id must be between -1 and 63');
    }
  }
  protoOf(ColorSpace).u4u = function () {
    return _ColorModel___get_componentCount__impl__au0uoc(this.q4u_1);
  };
  protoOf(ColorSpace).t4u = function () {
    return false;
  };
  protoOf(ColorSpace).q4y = function (r, g, b) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([r, g, b]);
    return this.r4y(tmp$ret$0);
  };
  protoOf(ColorSpace).s4y = function (v0, v1, v2) {
    var xyz = this.q4y(v0, v1, v2);
    var tmp0 = xyz[0];
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = xyz[1];
    var v1_0 = fromInt(toRawBits(tmp0));
    var v2_0 = fromInt(toRawBits(val2));
    return bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
  };
  protoOf(ColorSpace).t4y = function (v0, v1, v2) {
    var xyz = this.q4y(v0, v1, v2);
    return xyz[2];
  };
  protoOf(ColorSpace).u4y = function (x, y, z, a, colorSpace) {
    var colors = this.v4y(x, y, z);
    return Color_2(colors[0], colors[1], colors[2], a, colorSpace);
  };
  protoOf(ColorSpace).v4y = function (x, y, z) {
    var xyz = new Float32Array(_ColorModel___get_componentCount__impl__au0uoc(this.q4u_1));
    xyz[0] = x;
    xyz[1] = y;
    xyz[2] = z;
    return this.w4y(xyz);
  };
  protoOf(ColorSpace).toString = function () {
    return this.p4u_1 + ' (id=' + this.r4u_1 + ', model=' + ColorModel__toString_impl_msukd7(this.q4u_1) + ')';
  };
  protoOf(ColorSpace).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other))) {
      return false;
    }
    var that = other instanceof ColorSpace ? other : THROW_CCE();
    if (!(this.r4u_1 === that.r4u_1))
      return false;
    return !(this.p4u_1 === that.p4u_1) ? false : equals(this.q4u_1, that.q4u_1);
  };
  protoOf(ColorSpace).hashCode = function () {
    var result = getStringHashCode(this.p4u_1);
    result = imul(31, result) + ColorModel__hashCode_impl_11onkc(this.q4u_1) | 0;
    result = imul(31, result) + this.r4u_1 | 0;
    return result;
  };
  function connect(_this__u8e3s4, destination, intent) {
    destination = destination === VOID ? ColorSpaces_getInstance().l4t_1 : destination;
    intent = intent === VOID ? Companion_getInstance_33().x4y_1 : intent;
    var srcId = _this__u8e3s4.r4u_1;
    var dstId = destination.r4u_1;
    var tmp;
    if ((srcId | dstId) < 0) {
      tmp = createConnector(_this__u8e3s4, destination, intent);
    } else {
      var tmp0 = get_Connectors();
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut' call
      var key = srcId | dstId << 6 | _RenderIntent___get_value__impl__ip9mbh(intent) << 12;
      var tmp0_elvis_lhs = tmp0.m(key);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = createConnector(_this__u8e3s4, destination, intent);
        tmp0.oj(key, this_0);
        tmp_0 = this_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function createConnector(source, destination, intent) {
    var tmp;
    if (source === destination) {
      tmp = Companion_instance_19.b4z(source);
    } else if (equals(source.q4u_1, Companion_getInstance_28().k4y_1) && equals(destination.q4u_1, Companion_getInstance_28().k4y_1)) {
      var tmp_0 = source instanceof Rgb ? source : THROW_CCE();
      tmp = new RgbConnector(tmp_0, destination instanceof Rgb ? destination : THROW_CCE(), intent);
    } else {
      tmp = Connector_init_$Create$(source, destination, intent);
    }
    return tmp;
  }
  function absRcpResponse(x, a, b, c, d, g) {
    return withSign(rcpResponse(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function absResponse(x, a, b, c, d, g) {
    return withSign(response(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function adapt(_this__u8e3s4, whitePoint, adaptation) {
    adaptation = adaptation === VOID ? Companion_getInstance_27().g4y_1 : adaptation;
    if (equals(_this__u8e3s4.q4u_1, Companion_getInstance_28().k4y_1)) {
      var rgb = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      if (compare_1(rgb.f4z_1, whitePoint)) {
        return _this__u8e3s4;
      }
      var xyz = whitePoint.w4z();
      var adaptationTransform = chromaticAdaptation(adaptation.j4y_1, rgb.f4z_1.w4z(), xyz);
      var transform = mul3x3(adaptationTransform, rgb.k4z_1);
      return Rgb_init_$Create$_1(rgb, transform, whitePoint);
    }
    return _this__u8e3s4;
  }
  function compare_0(a, b) {
    if (a === b)
      return true;
    var inductionVariable = 0;
    var last = a.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (!(compareTo(a[i], b[i]) === 0)) {
          // Inline function 'kotlin.math.abs' call
          var x = a[i] - b[i];
          tmp = Math.abs(x) > 0.001;
        } else {
          tmp = false;
        }
        if (tmp)
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function mul3x3Float3(lhs, rhs) {
    if (lhs.length < 9)
      return rhs;
    if (rhs.length < 3)
      return rhs;
    var r0 = rhs[0];
    var r1 = rhs[1];
    var r2 = rhs[2];
    rhs[0] = lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
    rhs[1] = lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
    rhs[2] = lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
    return rhs;
  }
  function compare_1(a, b) {
    if (a === b)
      return true;
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var x = a.u4z_1 - b.u4z_1;
    if (Math.abs(x) < 0.001) {
      // Inline function 'kotlin.math.abs' call
      var x_0 = a.v4z_1 - b.v4z_1;
      tmp = Math.abs(x_0) < 0.001;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function mul3x3(lhs, rhs) {
    var r = new Float32Array(9);
    if (lhs.length < 9)
      return r;
    if (rhs.length < 9)
      return r;
    r[0] = lhs[0] * rhs[0] + lhs[3] * rhs[1] + lhs[6] * rhs[2];
    r[1] = lhs[1] * rhs[0] + lhs[4] * rhs[1] + lhs[7] * rhs[2];
    r[2] = lhs[2] * rhs[0] + lhs[5] * rhs[1] + lhs[8] * rhs[2];
    r[3] = lhs[0] * rhs[3] + lhs[3] * rhs[4] + lhs[6] * rhs[5];
    r[4] = lhs[1] * rhs[3] + lhs[4] * rhs[4] + lhs[7] * rhs[5];
    r[5] = lhs[2] * rhs[3] + lhs[5] * rhs[4] + lhs[8] * rhs[5];
    r[6] = lhs[0] * rhs[6] + lhs[3] * rhs[7] + lhs[6] * rhs[8];
    r[7] = lhs[1] * rhs[6] + lhs[4] * rhs[7] + lhs[7] * rhs[8];
    r[8] = lhs[2] * rhs[6] + lhs[5] * rhs[7] + lhs[8] * rhs[8];
    return r;
  }
  function chromaticAdaptation(matrix, srcWhitePoint, dstWhitePoint) {
    var srcLMS = mul3x3Float3(matrix, srcWhitePoint);
    var dstLMS = mul3x3Float3(matrix, dstWhitePoint);
    // Inline function 'kotlin.floatArrayOf' call
    var LMS = new Float32Array([dstLMS[0] / srcLMS[0], dstLMS[1] / srcLMS[1], dstLMS[2] / srcLMS[2]]);
    return mul3x3(inverse3x3(matrix), mul3x3Diag(LMS, matrix));
  }
  function inverse3x3(m) {
    var a = m[0];
    var b = m[3];
    var c = m[6];
    var d = m[1];
    var e = m[4];
    var f = m[7];
    var g = m[2];
    var h = m[5];
    var i = m[8];
    var xA = e * i - f * h;
    var xB = f * g - d * i;
    var xC = d * h - e * g;
    var det = a * xA + b * xB + c * xC;
    var inverted = new Float32Array(m.length);
    inverted[0] = xA / det;
    inverted[1] = xB / det;
    inverted[2] = xC / det;
    inverted[3] = (c * h - b * i) / det;
    inverted[4] = (a * i - c * g) / det;
    inverted[5] = (b * g - a * h) / det;
    inverted[6] = (b * f - c * e) / det;
    inverted[7] = (c * d - a * f) / det;
    inverted[8] = (a * e - b * d) / det;
    return inverted;
  }
  function mul3x3Diag(lhs, rhs) {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([lhs[0] * rhs[0], lhs[1] * rhs[1], lhs[2] * rhs[2], lhs[0] * rhs[3], lhs[1] * rhs[4], lhs[2] * rhs[5], lhs[0] * rhs[6], lhs[1] * rhs[7], lhs[2] * rhs[8]]);
  }
  function rcpResponse(x, a, b, c, d, g) {
    var tmp;
    if (x >= d * c) {
      // Inline function 'kotlin.math.pow' call
      var x_0 = 1.0 / g;
      tmp = (Math.pow(x, x_0) - b) / a;
    } else {
      tmp = x / c;
    }
    return tmp;
  }
  function rcpResponse_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d * c) {
      var tmp0 = x - e;
      // Inline function 'kotlin.math.pow' call
      var x_0 = 1.0 / g;
      tmp = (Math.pow(tmp0, x_0) - b) / a;
    } else {
      tmp = (x - f) / c;
    }
    return tmp;
  }
  function response(x, a, b, c, d, g) {
    var tmp;
    if (x >= d) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = a * x + b;
      tmp = Math.pow(this_0, g);
    } else {
      tmp = c * x;
    }
    return tmp;
  }
  function response_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = a * x + b;
      tmp = Math.pow(this_0, g) + e;
    } else {
      tmp = c * x + f;
    }
    return tmp;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(function_0) {
    this.x4z_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).y4z = function (double) {
    return this.x4z_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).v2 = function () {
    return this.x4z_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).hashCode = function () {
    return hashCode(this.v2());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(function_0) {
    this.z4z_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).y4z = function (double) {
    return this.z4z_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).v2 = function () {
    return this.z4z_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).hashCode = function () {
    return hashCode(this.v2());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(function_0) {
    this.a50_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).y4z = function (double) {
    return this.a50_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).v2 = function () {
    return this.a50_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).hashCode = function () {
    return hashCode(this.v2());
  };
  function ColorSpaces$ExtendedSrgb$lambda(x) {
    return absRcpResponse(x, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045, 2.4);
  }
  function ColorSpaces$ExtendedSrgb$lambda_0(x) {
    return absResponse(x, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045, 2.4);
  }
  function ColorSpaces$Bt2020Hlg$lambda(x) {
    return ColorSpaces_getInstance().b50(ColorSpaces_getInstance().j4t_1, x);
  }
  function ColorSpaces$Bt2020Hlg$lambda_0(x) {
    return ColorSpaces_getInstance().c50(ColorSpaces_getInstance().j4t_1, x);
  }
  function ColorSpaces$Bt2020Pq$lambda(x) {
    return ColorSpaces_getInstance().d50(ColorSpaces_getInstance().k4t_1, x);
  }
  function ColorSpaces$Bt2020Pq$lambda_0(x) {
    return ColorSpaces_getInstance().e50(ColorSpaces_getInstance().k4t_1, x);
  }
  function ColorSpaces() {
    ColorSpaces_instance = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.e4t_1 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.f4t_1 = new Float32Array([0.67, 0.33, 0.21, 0.71, 0.14, 0.08]);
    var tmp_1 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_1.g4t_1 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
    this.h4t_1 = new TransferParameters(2.4, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045);
    this.i4t_1 = new TransferParameters(2.2, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045);
    this.j4t_1 = new TransferParameters(-3.0, 2.0, 2.0, 1 / 0.17883277, 0.28466892, 0.55991073, -0.685490157);
    this.k4t_1 = new TransferParameters(-2.0, -1.555223, 1.860454, 32 / 2523.0, 2413 / 128.0, -2392 / 128.0, 8192 / 1305.0);
    this.l4t_1 = Rgb_init_$Create$('sRGB IEC61966-2.1', this.e4t_1, Illuminant_getInstance().l50_1, this.h4t_1, 0);
    this.m4t_1 = Rgb_init_$Create$_0('sRGB IEC61966-2.1 (Linear)', this.e4t_1, Illuminant_getInstance().l50_1, 1.0, 0.0, 1.0, 1);
    var tmp_2 = this;
    var tmp_3 = Illuminant_getInstance().l50_1;
    var tmp_4 = ColorSpaces$ExtendedSrgb$lambda;
    var tmp_5 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_4);
    var tmp_6 = ColorSpaces$ExtendedSrgb$lambda_0;
    tmp_2.n4t_1 = new Rgb('scRGB-nl IEC 61966-2-2:2003', this.e4t_1, tmp_3, null, tmp_5, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_6), -0.799, 2.399, this.h4t_1, 2);
    this.o4t_1 = Rgb_init_$Create$_0('scRGB IEC 61966-2-2:2003', this.e4t_1, Illuminant_getInstance().l50_1, 1.0, -0.5, 7.499, 3);
    var tmp_7 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$3 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    tmp_7.p4t_1 = Rgb_init_$Create$('Rec. ITU-R BT.709-5', tmp$ret$3, Illuminant_getInstance().l50_1, new TransferParameters(1 / 0.45, 1 / 1.099, 0.099 / 1.099, 1 / 4.5, 0.081), 4);
    var tmp_8 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$4 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
    tmp_8.q4t_1 = Rgb_init_$Create$('Rec. ITU-R BT.2020-1', tmp$ret$4, Illuminant_getInstance().l50_1, new TransferParameters(1 / 0.45, 1 / 1.0993, 0.0993 / 1.0993, 1 / 4.5, 0.08145), 5);
    var tmp_9 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$5 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_9.r4t_1 = Rgb_init_$Create$_0('SMPTE RP 431-2-2007 DCI (P3)', tmp$ret$5, new WhitePoint(0.314, 0.351), 2.6, 0.0, 1.0, 6);
    var tmp_10 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$6 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_10.s4t_1 = Rgb_init_$Create$('Display P3', tmp$ret$6, Illuminant_getInstance().l50_1, this.h4t_1, 7);
    this.t4t_1 = Rgb_init_$Create$('NTSC (1953)', this.f4t_1, Illuminant_getInstance().h50_1, new TransferParameters(1 / 0.45, 1 / 1.099, 0.099 / 1.099, 1 / 4.5, 0.081), 8);
    var tmp_11 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$7 = new Float32Array([0.63, 0.34, 0.31, 0.595, 0.155, 0.07]);
    tmp_11.u4t_1 = Rgb_init_$Create$('SMPTE-C RGB', tmp$ret$7, Illuminant_getInstance().l50_1, new TransferParameters(1 / 0.45, 1 / 1.099, 0.099 / 1.099, 1 / 4.5, 0.081), 9);
    var tmp_12 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$8 = new Float32Array([0.64, 0.33, 0.21, 0.71, 0.15, 0.06]);
    tmp_12.v4t_1 = Rgb_init_$Create$_0('Adobe RGB (1998)', tmp$ret$8, Illuminant_getInstance().l50_1, 2.2, 0.0, 1.0, 10);
    var tmp_13 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$9 = new Float32Array([0.7347, 0.2653, 0.1596, 0.8404, 0.0366, 1.0E-4]);
    tmp_13.w4t_1 = Rgb_init_$Create$('ROMM RGB ISO 22028-2:2013', tmp$ret$9, Illuminant_getInstance().i50_1, new TransferParameters(1.8, 1.0, 0.0, 1 / 16.0, 0.031248), 11);
    var tmp_14 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$10 = new Float32Array([0.7347, 0.2653, 0.0, 1.0, 1.0E-4, -0.077]);
    tmp_14.x4t_1 = Rgb_init_$Create$_0('SMPTE ST 2065-1:2012 ACES', tmp$ret$10, Illuminant_getInstance().k50_1, 1.0, -65504.0, 65504.0, 12);
    var tmp_15 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$11 = new Float32Array([0.713, 0.293, 0.165, 0.83, 0.128, 0.044]);
    tmp_15.y4t_1 = Rgb_init_$Create$_0('Academy S-2014-004 ACEScg', tmp$ret$11, Illuminant_getInstance().k50_1, 1.0, -65504.0, 65504.0, 13);
    this.z4t_1 = new Xyz('Generic XYZ', 14);
    this.a4u_1 = new Lab('Generic L*a*b*', 15);
    this.b4u_1 = Rgb_init_$Create$('None', this.e4t_1, Illuminant_getInstance().l50_1, this.i4t_1, 16);
    var tmp_16 = this;
    var tmp_17 = Illuminant_getInstance().l50_1;
    var tmp_18 = ColorSpaces$Bt2020Hlg$lambda;
    var tmp_19 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(tmp_18);
    var tmp_20 = ColorSpaces$Bt2020Hlg$lambda_0;
    tmp_16.c4u_1 = new Rgb('Hybrid Log Gamma encoding', this.g4t_1, tmp_17, null, tmp_19, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(tmp_20), 0.0, 1.0, this.j4t_1, 17);
    var tmp_21 = this;
    var tmp_22 = Illuminant_getInstance().l50_1;
    var tmp_23 = ColorSpaces$Bt2020Pq$lambda;
    var tmp_24 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(tmp_23);
    var tmp_25 = ColorSpaces$Bt2020Pq$lambda_0;
    tmp_21.d4u_1 = new Rgb('Perceptual Quantizer encoding', this.g4t_1, tmp_22, null, tmp_24, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(tmp_25), 0.0, 1.0, this.k4t_1, 18);
    this.e4u_1 = new Oklab('Oklab', 19);
    var tmp_26 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_26.f4u_1 = [this.l4t_1, this.m4t_1, this.n4t_1, this.o4t_1, this.p4t_1, this.q4t_1, this.r4t_1, this.s4t_1, this.t4t_1, this.u4t_1, this.v4t_1, this.w4t_1, this.x4t_1, this.y4t_1, this.z4t_1, this.a4u_1, this.b4u_1, this.c4u_1, this.d4u_1, this.e4u_1];
  }
  protoOf(ColorSpaces).b50 = function (params, x) {
    var sign = x < 0 ? -1.0 : 1.0;
    var absX = x * sign;
    var R = 1.0 / params.q50_1;
    var G = 1.0 / params.r50_1;
    var a = 1.0 / params.s50_1;
    var b = params.t50_1;
    var c = params.u50_1;
    var K = params.v50_1 + 1.0;
    absX = absX / K;
    var tmp;
    if (absX <= 1) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = absX;
      tmp = R * Math.pow(this_0, G);
    } else {
      // Inline function 'kotlin.math.ln' call
      var x_0 = absX - b;
      tmp = a * Math.log(x_0) + c;
    }
    var result = tmp;
    return sign * result;
  };
  protoOf(ColorSpaces).c50 = function (params, x) {
    var sign = x < 0 ? -1.0 : 1.0;
    var absX = x * sign;
    var R = params.q50_1;
    var G = params.r50_1;
    var a = params.s50_1;
    var b = params.t50_1;
    var c = params.u50_1;
    var K = params.v50_1 + 1.0;
    var tmp;
    if (absX * R <= 1) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = absX * R;
      tmp = Math.pow(this_0, G);
    } else {
      // Inline function 'kotlin.math.exp' call
      var x_0 = (absX - c) * a;
      tmp = Math.exp(x_0) + b;
    }
    var result = tmp;
    return K * sign * result;
  };
  protoOf(ColorSpaces).d50 = function (params, x) {
    var sign = x < 0 ? -1.0 : 1.0;
    var absX = x * sign;
    var a = -params.q50_1;
    var b = params.t50_1;
    var c = 1.0 / params.v50_1;
    var d = params.r50_1;
    var e = -params.u50_1;
    var f = 1.0 / params.s50_1;
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.max' call
    var a_0 = a + b * Math.pow(absX, c);
    var tmp = Math.max(a_0, 0.0);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.pow' call
    var this_0 = tmp / (d + e * Math.pow(absX, c));
    return sign * Math.pow(this_0, f);
  };
  protoOf(ColorSpaces).e50 = function (pq, x) {
    var sign = x < 0 ? -1.0 : 1.0;
    var absX = x * sign;
    // Inline function 'kotlin.math.pow' call
    var x_0 = pq.s50_1;
    var tmp$ret$0 = Math.pow(absX, x_0);
    var tmp = coerceAtLeast(pq.q50_1 + pq.r50_1 * tmp$ret$0, 0.0);
    // Inline function 'kotlin.math.pow' call
    var x_1 = pq.s50_1;
    var tmp$ret$1 = Math.pow(absX, x_1);
    var tmp0 = tmp / (pq.t50_1 + pq.u50_1 * tmp$ret$1);
    // Inline function 'kotlin.math.pow' call
    var x_2 = pq.v50_1;
    return sign * Math.pow(tmp0, x_2);
  };
  var ColorSpaces_instance;
  function ColorSpaces_getInstance() {
    if (ColorSpaces_instance == null)
      new ColorSpaces();
    return ColorSpaces_instance;
  }
  function get_Connectors() {
    _init_properties_Connector_kt__swbf17();
    return Connectors;
  }
  var Connectors;
  function computeTransform($this, source, destination, intent) {
    if (compare_1(source.f4z_1, destination.f4z_1)) {
      return mul3x3(destination.l4z_1, source.k4z_1);
    } else {
      var transform = source.k4z_1;
      var inverseTransform = destination.l4z_1;
      var srcXYZ = source.f4z_1.w4z();
      var dstXYZ = destination.f4z_1.w4z();
      if (!compare_1(source.f4z_1, Illuminant_getInstance().i50_1)) {
        var srcAdaptation = chromaticAdaptation(Companion_getInstance_27().g4y_1.j4y_1, srcXYZ, Illuminant_getInstance().w50());
        transform = mul3x3(srcAdaptation, source.k4z_1);
      }
      if (!compare_1(destination.f4z_1, Illuminant_getInstance().i50_1)) {
        var dstAdaptation = chromaticAdaptation(Companion_getInstance_27().g4y_1.j4y_1, dstXYZ, Illuminant_getInstance().w50());
        inverseTransform = inverse3x3(mul3x3(dstAdaptation, destination.k4z_1));
      }
      if (intent === Companion_getInstance_33().a4z_1) {
        // Inline function 'kotlin.floatArrayOf' call
        var tmp$ret$0 = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
        transform = mul3x3Diag(tmp$ret$0, transform);
      }
      return mul3x3(inverseTransform, transform);
    }
  }
  function computeTransform_0($this, source, destination, intent) {
    if (!(intent === Companion_getInstance_33().a4z_1))
      return null;
    var srcRGB = equals(source.q4u_1, Companion_getInstance_28().k4y_1);
    var dstRGB = equals(destination.q4u_1, Companion_getInstance_28().k4y_1);
    if (srcRGB && dstRGB)
      return null;
    if (srcRGB || dstRGB) {
      var tmp = srcRGB ? source : destination;
      var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
      var srcXYZ = srcRGB ? rgb.f4z_1.w4z() : Illuminant_getInstance().o50_1;
      var dstXYZ = dstRGB ? rgb.f4z_1.w4z() : Illuminant_getInstance().o50_1;
      // Inline function 'kotlin.floatArrayOf' call
      return new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
    }
    return null;
  }
  function Connector$Companion$identity$1($source) {
    Connector_init_$Init$($source, $source, Companion_getInstance_33().y4y_1, this);
  }
  protoOf(Connector$Companion$identity$1).m4u = function (color) {
    return color;
  };
  function Connector_init_$Init$(source, destination, intent, $this) {
    var tmp = equals(source.q4u_1, Companion_getInstance_28().k4y_1) ? adapt(source, Illuminant_getInstance().i50_1) : source;
    var tmp_0;
    if (equals(destination.q4u_1, Companion_getInstance_28().k4y_1)) {
      tmp_0 = adapt(destination, Illuminant_getInstance().i50_1);
    } else {
      tmp_0 = destination;
    }
    Connector.call($this, source, destination, tmp, tmp_0, intent, computeTransform_0(Companion_instance_19, source, destination, intent));
    return $this;
  }
  function Connector_init_$Create$(source, destination, intent) {
    return Connector_init_$Init$(source, destination, intent, objectCreate(protoOf(Connector)));
  }
  function RgbConnector(mSource, mDestination, intent) {
    Connector.call(this, mSource, mDestination, mSource, mDestination, intent, null);
    this.j51_1 = mSource;
    this.k51_1 = mDestination;
    this.l51_1 = computeTransform(this, this.j51_1, this.k51_1, intent);
  }
  protoOf(RgbConnector).m4u = function (color) {
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var r = _Color___get_red__impl__cwrsk6(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var g = _Color___get_green__impl__bta9rs(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var a = _Color___get_alpha__impl__wcfyv1(color);
    var v0 = this.j51_1.r4z_1.y4z(r);
    var v1 = this.j51_1.r4z_1.y4z(g);
    var v2 = this.j51_1.r4z_1.y4z(b);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = this.l51_1;
    var v01 = lhs[0] * v0 + lhs[3] * v1 + lhs[6] * v2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = this.l51_1;
    var v11 = lhs_0[1] * v0 + lhs_0[4] * v1 + lhs_0[7] * v2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = this.l51_1;
    var v21 = lhs_1[2] * v0 + lhs_1[5] * v1 + lhs_1[8] * v2;
    var v02 = this.k51_1.o4z_1.y4z(v01);
    var v12 = this.k51_1.o4z_1.y4z(v11);
    var v22 = this.k51_1.o4z_1.y4z(v21);
    return Color_2(v02, v12, v22, a, this.k51_1);
  };
  function Companion_17() {
  }
  protoOf(Companion_17).b4z = function (source) {
    return new Connector$Companion$identity$1(source);
  };
  var Companion_instance_19;
  function Companion_getInstance_30() {
    return Companion_instance_19;
  }
  function Connector(source, destination, transformSource, transformDestination, renderIntent, transform) {
    this.g4u_1 = source;
    this.h4u_1 = destination;
    this.i4u_1 = transformSource;
    this.j4u_1 = transformDestination;
    this.k4u_1 = renderIntent;
    this.l4u_1 = transform;
  }
  protoOf(Connector).m4u = function (color) {
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var r = _Color___get_red__impl__cwrsk6(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var g = _Color___get_green__impl__bta9rs(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var a = _Color___get_alpha__impl__wcfyv1(color);
    var packed = this.i4u_1.s4y(r, g, b);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(packed, 32));
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(packed, new Long(-1, 0)));
    var y = floatFromBits(bits_0);
    var z = this.i4u_1.t4y(r, g, b);
    if (!(this.l4u_1 == null)) {
      x = x * this.l4u_1[0];
      y = y * this.l4u_1[1];
      z = z * this.l4u_1[2];
    }
    return this.j4u_1.u4y(x, y, z, a, this.h4u_1);
  };
  var properties_initialized_Connector_kt_5j9z4t;
  function _init_properties_Connector_kt__swbf17() {
    if (!properties_initialized_Connector_kt_5j9z4t) {
      properties_initialized_Connector_kt_5j9z4t = true;
      var tmp0 = ColorSpaces_getInstance().l4t_1.r4u_1;
      var tmp2 = ColorSpaces_getInstance().l4t_1.r4u_1;
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var renderIntent = Companion_getInstance_33().x4y_1;
      var tmp = tmp0 | tmp2 << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent) << 12;
      var tmp_0 = Companion_instance_19.b4z(ColorSpaces_getInstance().l4t_1);
      var tmp0_0 = ColorSpaces_getInstance().l4t_1.r4u_1;
      var tmp2_0 = ColorSpaces_getInstance().e4u_1.r4u_1;
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var renderIntent_0 = Companion_getInstance_33().x4y_1;
      var tmp_1 = tmp0_0 | tmp2_0 << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent_0) << 12;
      var tmp_2 = Connector_init_$Create$(ColorSpaces_getInstance().l4t_1, ColorSpaces_getInstance().e4u_1, Companion_getInstance_33().x4y_1);
      var tmp0_1 = ColorSpaces_getInstance().e4u_1.r4u_1;
      var tmp2_1 = ColorSpaces_getInstance().l4t_1.r4u_1;
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var renderIntent_1 = Companion_getInstance_33().x4y_1;
      var tmp$ret$2 = tmp0_1 | tmp2_1 << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent_1) << 12;
      Connectors = mutableIntObjectMapOf(tmp, tmp_0, tmp_1, tmp_2, tmp$ret$2, Connector_init_$Create$(ColorSpaces_getInstance().e4u_1, ColorSpaces_getInstance().l4t_1, Companion_getInstance_33().x4y_1));
    }
  }
  function Illuminant() {
    Illuminant_instance = this;
    this.f50_1 = new WhitePoint(0.44757, 0.40745);
    this.g50_1 = new WhitePoint(0.34842, 0.35161);
    this.h50_1 = new WhitePoint(0.31006, 0.31616);
    this.i50_1 = new WhitePoint(0.34567, 0.3585);
    this.j50_1 = new WhitePoint(0.33242, 0.34743);
    this.k50_1 = new WhitePoint(0.32168, 0.33767);
    this.l50_1 = new WhitePoint(0.31271, 0.32902);
    this.m50_1 = new WhitePoint(0.29902, 0.31485);
    this.n50_1 = new WhitePoint(0.33333, 0.33333);
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.o50_1 = new Float32Array([0.964212, 1.0, 0.825188]);
  }
  protoOf(Illuminant).w50 = function () {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([0.964212, 1.0, 0.825188]);
  };
  var Illuminant_instance;
  function Illuminant_getInstance() {
    if (Illuminant_instance == null)
      new Illuminant();
    return Illuminant_instance;
  }
  function Companion_18() {
    this.m51_1 = 0.008856452;
    this.n51_1 = 7.787037;
    this.o51_1 = 0.13793103;
    this.p51_1 = 0.20689656;
  }
  var Companion_instance_20;
  function Companion_getInstance_31() {
    return Companion_instance_20;
  }
  function Lab(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_28().m4y_1, id);
  }
  protoOf(Lab).v4u = function (component) {
    return component === 0 ? 0.0 : -128.0;
  };
  protoOf(Lab).w4u = function (component) {
    return component === 0 ? 100.0 : 128.0;
  };
  protoOf(Lab).r4y = function (v) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v[0];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = this_0 < 0.0 ? 0.0 : this_0;
    v[0] = this_1 > 100.0 ? 100.0 : this_1;
    var tmp0 = v[1];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -128.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = tmp0 < minimumValue ? minimumValue : tmp0;
    v[1] = this_2 > 128.0 ? 128.0 : this_2;
    var tmp0_0 = v[2];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -128.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_3 = tmp0_0 < minimumValue_0 ? minimumValue_0 : tmp0_0;
    v[2] = this_3 > 128.0 ? 128.0 : this_3;
    var fy = (v[0] + 16.0) / 116.0;
    var fx = fy + v[1] * 0.002;
    var fz = fy - v[2] * 0.005;
    var x = fx > 0.20689656 ? fx * fx * fx : 1.0 / 7.787037 * (fx - 0.13793103);
    var y = fy > 0.20689656 ? fy * fy * fy : 1.0 / 7.787037 * (fy - 0.13793103);
    var z = fz > 0.20689656 ? fz * fz * fz : 1.0 / 7.787037 * (fz - 0.13793103);
    v[0] = x * Illuminant_getInstance().o50_1[0];
    v[1] = y * Illuminant_getInstance().o50_1[1];
    v[2] = z * Illuminant_getInstance().o50_1[2];
    return v;
  };
  protoOf(Lab).s4y = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -128.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v1 < minimumValue ? minimumValue : v1;
    var v10 = this_1 > 128.0 ? 128.0 : this_1;
    var fy = (v00 + 16.0) / 116.0;
    var fx = fy + v10 * 0.002;
    var x = fx > 0.20689656 ? fx * fx * fx : 1.0 / 7.787037 * (fx - 0.13793103);
    var y = fy > 0.20689656 ? fy * fy * fy : 1.0 / 7.787037 * (fy - 0.13793103);
    var tmp0 = x * Illuminant_getInstance().o50_1[0];
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = y * Illuminant_getInstance().o50_1[1];
    var v1_0 = fromInt(toRawBits(tmp0));
    var v2_0 = fromInt(toRawBits(val2));
    return bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
  };
  protoOf(Lab).t4y = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -128.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v2 < minimumValue ? minimumValue : v2;
    var v20 = this_1 > 128.0 ? 128.0 : this_1;
    var fy = (v00 + 16.0) / 116.0;
    var fz = fy - v20 * 0.005;
    var z = fz > 0.20689656 ? fz * fz * fz : 1.0 / 7.787037 * (fz - 0.13793103);
    return z * Illuminant_getInstance().o50_1[2];
  };
  protoOf(Lab).u4y = function (x, y, z, a, colorSpace) {
    var x1 = x / Illuminant_getInstance().o50_1[0];
    var y1 = y / Illuminant_getInstance().o50_1[1];
    var z1 = z / Illuminant_getInstance().o50_1[2];
    var tmp;
    if (x1 > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp = Math.cbrt(x1);
    } else {
      tmp = 7.787037 * x1 + 0.13793103;
    }
    var fx = tmp;
    var tmp_0;
    if (y1 > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_0 = Math.cbrt(y1);
    } else {
      tmp_0 = 7.787037 * y1 + 0.13793103;
    }
    var fy = tmp_0;
    var tmp_1;
    if (z1 > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_1 = Math.cbrt(z1);
    } else {
      tmp_1 = 7.787037 * z1 + 0.13793103;
    }
    var fz = tmp_1;
    var l = 116.0 * fy - 16.0;
    var a1 = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = l < 0.0 ? 0.0 : l;
    var tmp_2 = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -128.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = a1 < minimumValue ? minimumValue : a1;
    var tmp_3 = this_1 > 128.0 ? 128.0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -128.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = b < minimumValue_0 ? minimumValue_0 : b;
    var tmp$ret$11 = this_2 > 128.0 ? 128.0 : this_2;
    return Color_2(tmp_2, tmp_3, tmp$ret$11, a, colorSpace);
  };
  protoOf(Lab).w4y = function (v) {
    var x = v[0] / Illuminant_getInstance().o50_1[0];
    var y = v[1] / Illuminant_getInstance().o50_1[1];
    var z = v[2] / Illuminant_getInstance().o50_1[2];
    var tmp;
    if (x > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp = Math.cbrt(x);
    } else {
      tmp = 7.787037 * x + 0.13793103;
    }
    var fx = tmp;
    var tmp_0;
    if (y > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_0 = Math.cbrt(y);
    } else {
      tmp_0 = 7.787037 * y + 0.13793103;
    }
    var fy = tmp_0;
    var tmp_1;
    if (z > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_1 = Math.cbrt(z);
    } else {
      tmp_1 = 7.787037 * z + 0.13793103;
    }
    var fz = tmp_1;
    var l = 116.0 * fy - 16.0;
    var a = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = l < 0.0 ? 0.0 : l;
    v[0] = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -128.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = a < minimumValue ? minimumValue : a;
    v[1] = this_1 > 128.0 ? 128.0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -128.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = b < minimumValue_0 ? minimumValue_0 : b;
    v[2] = this_2 > 128.0 ? 128.0 : this_2;
    return v;
  };
  function Companion_19() {
    Companion_instance_21 = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.818933, 0.032984544, 0.0482003, 0.36186674, 0.9293119, 0.26436627, -0.12885971, 0.03614564, 0.6338517]);
    tmp.t51_1 = mul3x3(tmp$ret$0, chromaticAdaptation(Companion_getInstance_27().g4y_1.j4y_1, Illuminant_getInstance().i50_1.w4z(), Illuminant_getInstance().l50_1.w4z()));
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.u51_1 = new Float32Array([0.21045426, 1.9779985, 0.025904037, 0.7936178, -2.4285922, 0.78277177, -0.004072047, 0.4505937, -0.80867577]);
    this.v51_1 = inverse3x3(this.t51_1);
    this.w51_1 = inverse3x3(this.u51_1);
  }
  var Companion_instance_21;
  function Companion_getInstance_32() {
    if (Companion_instance_21 == null)
      new Companion_19();
    return Companion_instance_21;
  }
  function Oklab(name, id) {
    Companion_getInstance_32();
    ColorSpace.call(this, name, Companion_getInstance_28().m4y_1, id);
  }
  protoOf(Oklab).v4u = function (component) {
    return component === 0 ? 0.0 : -0.5;
  };
  protoOf(Oklab).w4u = function (component) {
    return component === 0 ? 1.0 : 0.5;
  };
  protoOf(Oklab).r4y = function (v) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v[0];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = this_0 < 0.0 ? 0.0 : this_0;
    v[0] = this_1 > 1.0 ? 1.0 : this_1;
    var tmp0 = v[1];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -0.5;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = tmp0 < minimumValue ? minimumValue : tmp0;
    v[1] = this_2 > 0.5 ? 0.5 : this_2;
    var tmp0_0 = v[2];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -0.5;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_3 = tmp0_0 < minimumValue_0 ? minimumValue_0 : tmp0_0;
    v[2] = this_3 > 0.5 ? 0.5 : this_3;
    mul3x3Float3(Companion_getInstance_32().w51_1, v);
    v[0] = v[0] * v[0] * v[0];
    v[1] = v[1] * v[1] * v[1];
    v[2] = v[2] * v[2] * v[2];
    mul3x3Float3(Companion_getInstance_32().v51_1, v);
    return v;
  };
  protoOf(Oklab).s4y = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 1.0 ? 1.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -0.5;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v1 < minimumValue ? minimumValue : v1;
    var v10 = this_1 > 0.5 ? 0.5 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -0.5;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = v2 < minimumValue_0 ? minimumValue_0 : v2;
    var v20 = this_2 > 0.5 ? 0.5 : this_2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = Companion_getInstance_32().w51_1;
    var v01 = lhs[0] * v00 + lhs[3] * v10 + lhs[6] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = Companion_getInstance_32().w51_1;
    var v11 = lhs_0[1] * v00 + lhs_0[4] * v10 + lhs_0[7] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = Companion_getInstance_32().w51_1;
    var v21 = lhs_1[2] * v00 + lhs_1[5] * v10 + lhs_1[8] * v20;
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs_2 = Companion_getInstance_32().v51_1;
    var v03 = lhs_2[0] * v02 + lhs_2[3] * v12 + lhs_2[6] * v22;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_3 = Companion_getInstance_32().v51_1;
    var v13 = lhs_3[1] * v02 + lhs_3[4] * v12 + lhs_3[7] * v22;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = fromInt(toRawBits(v03));
    var v2_0 = fromInt(toRawBits(v13));
    return bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
  };
  protoOf(Oklab).t4y = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 1.0 ? 1.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -0.5;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v1 < minimumValue ? minimumValue : v1;
    var v10 = this_1 > 0.5 ? 0.5 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -0.5;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = v2 < minimumValue_0 ? minimumValue_0 : v2;
    var v20 = this_2 > 0.5 ? 0.5 : this_2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = Companion_getInstance_32().w51_1;
    var v01 = lhs[0] * v00 + lhs[3] * v10 + lhs[6] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = Companion_getInstance_32().w51_1;
    var v11 = lhs_0[1] * v00 + lhs_0[4] * v10 + lhs_0[7] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = Companion_getInstance_32().w51_1;
    var v21 = lhs_1[2] * v00 + lhs_1[5] * v10 + lhs_1[8] * v20;
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_2 = Companion_getInstance_32().v51_1;
    var v23 = lhs_2[2] * v02 + lhs_2[5] * v12 + lhs_2[8] * v22;
    return v23;
  };
  protoOf(Oklab).u4y = function (x, y, z, a, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = Companion_getInstance_32().t51_1;
    var v0 = lhs[0] * x + lhs[3] * y + lhs[6] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = Companion_getInstance_32().t51_1;
    var v1 = lhs_0[1] * x + lhs_0[4] * y + lhs_0[7] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = Companion_getInstance_32().t51_1;
    var v2 = lhs_1[2] * x + lhs_1[5] * y + lhs_1[8] * z;
    v0 = fastCbrt(v0);
    v1 = fastCbrt(v1);
    v2 = fastCbrt(v2);
    var tmp0 = Companion_getInstance_32().u51_1;
    var tmp2 = v0;
    var tmp4 = v1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var r2 = v2;
    var v01 = tmp0[0] * tmp2 + tmp0[3] * tmp4 + tmp0[6] * r2;
    var tmp0_0 = Companion_getInstance_32().u51_1;
    var tmp2_0 = v0;
    var tmp4_0 = v1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var r2_0 = v2;
    var v11 = tmp0_0[1] * tmp2_0 + tmp0_0[4] * tmp4_0 + tmp0_0[7] * r2_0;
    var tmp0_1 = Companion_getInstance_32().u51_1;
    var tmp2_1 = v0;
    var tmp4_1 = v1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var r2_1 = v2;
    var v21 = tmp0_1[2] * tmp2_1 + tmp0_1[5] * tmp4_1 + tmp0_1[8] * r2_1;
    return Color_2(v01, v11, v21, a, colorSpace);
  };
  protoOf(Oklab).w4y = function (v) {
    mul3x3Float3(Companion_getInstance_32().t51_1, v);
    v[0] = fastCbrt(v[0]);
    v[1] = fastCbrt(v[1]);
    v[2] = fastCbrt(v[2]);
    mul3x3Float3(Companion_getInstance_32().u51_1, v);
    return v;
  };
  function _RenderIntent___init__impl__jceahd(value) {
    return value;
  }
  function _RenderIntent___get_value__impl__ip9mbh($this) {
    return $this;
  }
  function Companion_20() {
    Companion_instance_22 = this;
    this.x4y_1 = _RenderIntent___init__impl__jceahd(0);
    this.y4y_1 = _RenderIntent___init__impl__jceahd(1);
    this.z4y_1 = _RenderIntent___init__impl__jceahd(2);
    this.a4z_1 = _RenderIntent___init__impl__jceahd(3);
  }
  var Companion_instance_22;
  function Companion_getInstance_33() {
    if (Companion_instance_22 == null)
      new Companion_20();
    return Companion_instance_22;
  }
  function isSrgb($this, primaries, whitePoint, OETF, EOTF, min, max, id) {
    if (id === 0)
      return true;
    if (!compare_0(primaries, ColorSpaces_getInstance().e4t_1)) {
      return false;
    }
    if (!compare_1(whitePoint, Illuminant_getInstance().l50_1)) {
      return false;
    }
    if (!(min === 0.0))
      return false;
    if (!(max === 1.0))
      return false;
    var srgb = ColorSpaces_getInstance().l4t_1;
    var x = 0.0;
    while (x <= 1.0) {
      if (!compare_2($this, x, OETF, srgb.m4z_1))
        return false;
      if (!compare_2($this, x, EOTF, srgb.p4z_1))
        return false;
      x = x + 1 / 255.0;
    }
    return true;
  }
  function compare_2($this, point, a, b) {
    var rA = a.y4z(point);
    var rB = b.y4z(point);
    // Inline function 'kotlin.math.abs' call
    var x = rA - rB;
    return Math.abs(x) <= 0.001;
  }
  function isWideGamut($this, primaries, min, max) {
    return area($this, primaries) / area($this, ColorSpaces_getInstance().f4t_1) > 0.9 && contains($this, primaries, ColorSpaces_getInstance().e4t_1) || (min < 0.0 && max > 1.0);
  }
  function area($this, primaries) {
    if (primaries.length < 6)
      return 0.0;
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var det = rx * gy + ry * bx + gx * by - gy * bx - ry * gx - rx * by;
    var r = 0.5 * det;
    return r < 0.0 ? -r : r;
  }
  function contains($this, p1, p2) {
    // Inline function 'kotlin.floatArrayOf' call
    var p0 = new Float32Array([p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2], p1[3] - p2[3], p1[4] - p2[4], p1[5] - p2[5]]);
    var tmp;
    var tmp2 = p0[0];
    var tmp4 = p0[1];
    var tmp6 = p2[0] - p2[4];
    // Inline function 'androidx.compose.ui.graphics.colorspace.Companion.cross' call
    if (tmp2 * (p2[1] - p2[5]) - tmp4 * tmp6 < 0) {
      tmp = true;
    } else {
      var tmp2_0 = p2[0] - p2[2];
      var tmp4_0 = p2[1] - p2[3];
      var tmp6_0 = p0[0];
      // Inline function 'androidx.compose.ui.graphics.colorspace.Companion.cross' call
      tmp = tmp2_0 * p0[1] - tmp4_0 * tmp6_0 < 0;
    }
    if (tmp) {
      return false;
    }
    var tmp_0;
    var tmp2_1 = p0[2];
    var tmp4_1 = p0[3];
    var tmp6_1 = p2[2] - p2[0];
    // Inline function 'androidx.compose.ui.graphics.colorspace.Companion.cross' call
    if (tmp2_1 * (p2[3] - p2[1]) - tmp4_1 * tmp6_1 < 0) {
      tmp_0 = true;
    } else {
      var tmp2_2 = p2[2] - p2[4];
      var tmp4_2 = p2[3] - p2[5];
      var tmp6_2 = p0[2];
      // Inline function 'androidx.compose.ui.graphics.colorspace.Companion.cross' call
      tmp_0 = tmp2_2 * p0[3] - tmp4_2 * tmp6_2 < 0;
    }
    if (tmp_0) {
      return false;
    }
    var tmp_1;
    var tmp2_3 = p0[4];
    var tmp4_3 = p0[5];
    var tmp6_3 = p2[4] - p2[2];
    // Inline function 'androidx.compose.ui.graphics.colorspace.Companion.cross' call
    if (tmp2_3 * (p2[5] - p2[3]) - tmp4_3 * tmp6_3 < 0) {
      tmp_1 = true;
    } else {
      var tmp2_4 = p2[4] - p2[0];
      var tmp4_4 = p2[5] - p2[1];
      var tmp6_4 = p0[4];
      // Inline function 'androidx.compose.ui.graphics.colorspace.Companion.cross' call
      tmp_1 = tmp2_4 * p0[5] - tmp4_4 * tmp6_4 < 0;
    }
    return !tmp_1;
  }
  function xyPrimaries($this, primaries) {
    var xyPrimaries = new Float32Array(6);
    if (primaries.length === 9) {
      var sum = primaries[0] + primaries[1] + primaries[2];
      xyPrimaries[0] = primaries[0] / sum;
      xyPrimaries[1] = primaries[1] / sum;
      sum = primaries[3] + primaries[4] + primaries[5];
      xyPrimaries[2] = primaries[3] / sum;
      xyPrimaries[3] = primaries[4] / sum;
      sum = primaries[6] + primaries[7] + primaries[8];
      xyPrimaries[4] = primaries[6] / sum;
      xyPrimaries[5] = primaries[7] / sum;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = primaries;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, xyPrimaries, 0, 0, 6);
    }
    return xyPrimaries;
  }
  function computeXYZMatrix($this, primaries, whitePoint) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var wx = whitePoint.u4z_1;
    var wy = whitePoint.v4z_1;
    var oneRxRy = (1 - rx) / ry;
    var oneGxGy = (1 - gx) / gy;
    var oneBxBy = (1 - bx) / by;
    var oneWxWy = (1 - wx) / wy;
    var rxRy = rx / ry;
    var gxGy = gx / gy;
    var bxBy = bx / by;
    var wxWy = wx / wy;
    var byNumerator = (oneWxWy - oneRxRy) * (gxGy - rxRy) - (wxWy - rxRy) * (oneGxGy - oneRxRy);
    var byDenominator = (oneBxBy - oneRxRy) * (gxGy - rxRy) - (bxBy - rxRy) * (oneGxGy - oneRxRy);
    var bY = byNumerator / byDenominator;
    var gY = (wxWy - rxRy - bY * (bxBy - rxRy)) / (gxGy - rxRy);
    var rY = 1.0 - gY - bY;
    var rYRy = rY / ry;
    var gYGy = gY / gy;
    var bYBy = bY / by;
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([rYRy * rx, rY, rYRy * (1.0 - rx - ry), gYGy * gx, gY, gYGy * (1.0 - gx - gy), bYBy * bx, bY, bYBy * (1.0 - bx - by)]);
  }
  function generateOetf($this, function_0) {
    var tmp;
    if (function_0.b52()) {
      var tmp_0 = Rgb$Companion$generateOetf$lambda(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_0);
    } else if (function_0.a52()) {
      var tmp_1 = Rgb$Companion$generateOetf$lambda_0(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_1);
    } else {
      var tmp_2;
      if (function_0.u50_1 === 0.0 && function_0.v50_1 === 0.0) {
        var tmp_3 = Rgb$Companion$generateOetf$lambda_1(function_0);
        tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_3);
      } else {
        var tmp_4 = Rgb$Companion$generateOetf$lambda_2(function_0);
        tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_4);
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function generateEotf($this, function_0) {
    var tmp;
    if (function_0.b52()) {
      var tmp_0 = Rgb$Companion$generateEotf$lambda(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_0);
    } else if (function_0.a52()) {
      var tmp_1 = Rgb$Companion$generateEotf$lambda_0(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_1);
    } else {
      var tmp_2;
      if (function_0.u50_1 === 0.0 && function_0.v50_1 === 0.0) {
        var tmp_3 = Rgb$Companion$generateEotf$lambda_1(function_0);
        tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_3);
      } else {
        var tmp_4 = Rgb$Companion$generateEotf$lambda_2(function_0);
        tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_4);
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(function_0) {
    this.c52_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).y4z = function (double) {
    return this.c52_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).v2 = function () {
    return this.c52_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).hashCode = function () {
    return hashCode(this.v2());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(function_0) {
    this.d52_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).y4z = function (double) {
    return this.d52_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).v2 = function () {
    return this.d52_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).hashCode = function () {
    return hashCode(this.v2());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(function_0) {
    this.e52_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).y4z = function (double) {
    return this.e52_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).v2 = function () {
    return this.e52_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).hashCode = function () {
    return hashCode(this.v2());
  };
  function Rgb$Companion$DoubleIdentity$lambda(d) {
    return d;
  }
  function Rgb$Companion$generateOetf$lambda($function) {
    return function (x) {
      return ColorSpaces_getInstance().b50($function, x);
    };
  }
  function Rgb$Companion$generateOetf$lambda_0($function) {
    return function (x) {
      return ColorSpaces_getInstance().d50($function, x);
    };
  }
  function Rgb$Companion$generateOetf$lambda_1($function) {
    return function (x) {
      return rcpResponse(x, $function.q50_1, $function.r50_1, $function.s50_1, $function.t50_1, $function.p50_1);
    };
  }
  function Rgb$Companion$generateOetf$lambda_2($function) {
    return function (x) {
      return rcpResponse_0(x, $function.q50_1, $function.r50_1, $function.s50_1, $function.t50_1, $function.u50_1, $function.v50_1, $function.p50_1);
    };
  }
  function Rgb$Companion$generateEotf$lambda($function) {
    return function (x) {
      return ColorSpaces_getInstance().c50($function, x);
    };
  }
  function Rgb$Companion$generateEotf$lambda_0($function) {
    return function (x) {
      return ColorSpaces_getInstance().e50($function, x);
    };
  }
  function Rgb$Companion$generateEotf$lambda_1($function) {
    return function (x) {
      return response(x, $function.q50_1, $function.r50_1, $function.s50_1, $function.t50_1, $function.p50_1);
    };
  }
  function Rgb$Companion$generateEotf$lambda_2($function) {
    return function (x) {
      return response_0(x, $function.q50_1, $function.r50_1, $function.s50_1, $function.t50_1, $function.u50_1, $function.v50_1, $function.p50_1);
    };
  }
  function Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, $this) {
    Rgb.call($this, name, primaries, whitePoint, null, generateOetf(Companion_getInstance_34(), function_0), generateEotf(Companion_getInstance_34(), function_0), 0.0, 1.0, function_0, id);
    return $this;
  }
  function Rgb_init_$Create$(name, primaries, whitePoint, function_0, id) {
    return Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, $this) {
    var tmp;
    if (gamma === 1.0) {
      tmp = Companion_getInstance_34().f52_1;
    } else {
      var tmp_0 = Rgb$_init_$lambda_yyl4se(gamma);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7(tmp_0);
    }
    var tmp_1 = tmp;
    var tmp_2;
    if (gamma === 1.0) {
      tmp_2 = Companion_getInstance_34().f52_1;
    } else {
      var tmp_3 = Rgb$_init_$lambda_yyl4se_0(gamma);
      tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7(tmp_3);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_1, tmp_2, min, max, new TransferParameters(gamma, 1.0, 0.0, 0.0, 0.0), id);
    return $this;
  }
  function Rgb_init_$Create$_0(name, primaries, whitePoint, gamma, min, max, id) {
    return Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_1(colorSpace, transform, whitePoint, $this) {
    Rgb.call($this, colorSpace.p4u_1, colorSpace.j4z_1, whitePoint, transform, colorSpace.m4z_1, colorSpace.p4z_1, colorSpace.g4z_1, colorSpace.h4z_1, colorSpace.i4z_1, -1);
    return $this;
  }
  function Rgb_init_$Create$_1(colorSpace, transform, whitePoint) {
    return Rgb_init_$Init$_1(colorSpace, transform, whitePoint, objectCreate(protoOf(Rgb)));
  }
  function Companion_21() {
    Companion_instance_23 = this;
    var tmp = this;
    var tmp_0 = Rgb$Companion$DoubleIdentity$lambda;
    tmp.f52_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(tmp_0);
  }
  var Companion_instance_23;
  function Companion_getInstance_34() {
    if (Companion_instance_23 == null)
      new Companion_21();
    return Companion_instance_23;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5(function_0) {
    this.g52_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5).y4z = function (double) {
    return this.g52_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5).v2 = function () {
    return this.g52_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5).hashCode = function () {
    return hashCode(this.v2());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6(function_0) {
    this.h52_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6).y4z = function (double) {
    return this.h52_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6).v2 = function () {
    return this.h52_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6).hashCode = function () {
    return hashCode(this.v2());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7(function_0) {
    this.i52_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7).y4z = function (double) {
    return this.i52_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7).v2 = function () {
    return this.i52_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7).hashCode = function () {
    return hashCode(this.v2());
  };
  function Rgb$oetf$lambda(this$0) {
    return function (x) {
      return coerceIn(this$0.m4z_1.y4z(x), this$0.g4z_1, this$0.h4z_1);
    };
  }
  function Rgb$oetfFunc$lambda(this$0) {
    return function (x) {
      return coerceIn(this$0.m4z_1.y4z(x), this$0.g4z_1, this$0.h4z_1);
    };
  }
  function Rgb$eotf$lambda(this$0) {
    return function (x) {
      return this$0.p4z_1.y4z(coerceIn(x, this$0.g4z_1, this$0.h4z_1));
    };
  }
  function Rgb$eotfFunc$lambda(this$0) {
    return function (x) {
      return this$0.p4z_1.y4z(coerceIn(x, this$0.g4z_1, this$0.h4z_1));
    };
  }
  function Rgb$_init_$lambda_yyl4se($gamma) {
    return function (x) {
      var tmp0 = x < 0.0 ? 0.0 : x;
      // Inline function 'kotlin.math.pow' call
      var x_0 = 1.0 / $gamma;
      return Math.pow(tmp0, x_0);
    };
  }
  function Rgb$_init_$lambda_yyl4se_0($gamma) {
    return function (x) {
      var tmp0 = x < 0.0 ? 0.0 : x;
      // Inline function 'kotlin.math.pow' call
      var x_0 = $gamma;
      return Math.pow(tmp0, x_0);
    };
  }
  function Rgb(name, primaries, whitePoint, transform, oetf, eotf, min, max, transferParameters, id) {
    Companion_getInstance_34();
    ColorSpace.call(this, name, Companion_getInstance_28().k4y_1, id);
    this.f4z_1 = whitePoint;
    this.g4z_1 = min;
    this.h4z_1 = max;
    this.i4z_1 = transferParameters;
    this.m4z_1 = oetf;
    var tmp = this;
    tmp.n4z_1 = Rgb$oetf$lambda(this);
    var tmp_0 = this;
    var tmp_1 = Rgb$oetfFunc$lambda(this);
    tmp_0.o4z_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5(tmp_1);
    this.p4z_1 = eotf;
    var tmp_2 = this;
    tmp_2.q4z_1 = Rgb$eotf$lambda(this);
    var tmp_3 = this;
    var tmp_4 = Rgb$eotfFunc$lambda(this);
    tmp_3.r4z_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6(tmp_4);
    if (!(primaries.length === 6) && !(primaries.length === 9)) {
      throw IllegalArgumentException_init_$Create$("The color space's primaries must be defined as an array of 6 floats in xyY or 9 floats in XYZ");
    }
    if (this.g4z_1 >= this.h4z_1) {
      throw IllegalArgumentException_init_$Create$('Invalid range: min=' + this.g4z_1 + ', max=' + this.h4z_1 + '; min must be strictly < max');
    }
    this.j4z_1 = xyPrimaries(Companion_getInstance_34(), primaries);
    if (transform == null) {
      this.k4z_1 = computeXYZMatrix(Companion_getInstance_34(), this.j4z_1, this.f4z_1);
    } else {
      if (!(transform.length === 9)) {
        throw IllegalArgumentException_init_$Create$('Transform must have 9 entries! Has ' + transform.length);
      }
      this.k4z_1 = transform;
    }
    this.l4z_1 = inverse3x3(this.k4z_1);
    this.s4z_1 = isWideGamut(Companion_getInstance_34(), this.j4z_1, this.g4z_1, this.h4z_1);
    this.t4z_1 = isSrgb(Companion_getInstance_34(), this.j4z_1, this.f4z_1, oetf, eotf, this.g4z_1, this.h4z_1, id);
  }
  protoOf(Rgb).t4u = function () {
    return this.t4z_1;
  };
  protoOf(Rgb).v4u = function (component) {
    return this.g4z_1;
  };
  protoOf(Rgb).w4u = function (component) {
    return this.h4z_1;
  };
  protoOf(Rgb).r4y = function (v) {
    if (v.length < 3)
      return v;
    v[0] = this.r4z_1.y4z(v[0]);
    v[1] = this.r4z_1.y4z(v[1]);
    v[2] = this.r4z_1.y4z(v[2]);
    return mul3x3Float3(this.k4z_1, v);
  };
  protoOf(Rgb).s4y = function (v0, v1, v2) {
    var v00 = this.r4z_1.y4z(v0);
    var v10 = this.r4z_1.y4z(v1);
    var v20 = this.r4z_1.y4z(v2);
    if (this.k4z_1.length < 9)
      return new Long(0, 0);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = this.k4z_1;
    var x = lhs[0] * v00 + lhs[3] * v10 + lhs[6] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = this.k4z_1;
    var y = lhs_0[1] * v00 + lhs_0[4] * v10 + lhs_0[7] * v20;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = fromInt(toRawBits(x));
    var v2_0 = fromInt(toRawBits(y));
    return bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
  };
  protoOf(Rgb).t4y = function (v0, v1, v2) {
    var v00 = this.r4z_1.y4z(v0);
    var v10 = this.r4z_1.y4z(v1);
    var v20 = this.r4z_1.y4z(v2);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs = this.k4z_1;
    var z = lhs[2] * v00 + lhs[5] * v10 + lhs[8] * v20;
    return z;
  };
  protoOf(Rgb).u4y = function (x, y, z, a, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = this.l4z_1;
    var v0 = lhs[0] * x + lhs[3] * y + lhs[6] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = this.l4z_1;
    var v1 = lhs_0[1] * x + lhs_0[4] * y + lhs_0[7] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = this.l4z_1;
    var v2 = lhs_1[2] * x + lhs_1[5] * y + lhs_1[8] * z;
    v0 = this.o4z_1.y4z(v0);
    v1 = this.o4z_1.y4z(v1);
    v2 = this.o4z_1.y4z(v2);
    return Color_2(v0, v1, v2, a, colorSpace);
  };
  protoOf(Rgb).w4y = function (v) {
    mul3x3Float3(this.l4z_1, v);
    if (v.length < 3)
      return v;
    v[0] = this.o4z_1.y4z(v[0]);
    v[1] = this.o4z_1.y4z(v[1]);
    v[2] = this.o4z_1.y4z(v[2]);
    return v;
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(ColorSpace).equals.call(this, other))
      return false;
    var rgb = other instanceof Rgb ? other : THROW_CCE();
    if (!(compareTo(rgb.g4z_1, this.g4z_1) === 0))
      return false;
    if (!(compareTo(rgb.h4z_1, this.h4z_1) === 0))
      return false;
    if (!this.f4z_1.equals(rgb.f4z_1))
      return false;
    if (!contentEquals(this.j4z_1, rgb.j4z_1))
      return false;
    if (!(this.i4z_1 == null)) {
      return equals(this.i4z_1, rgb.i4z_1);
    } else if (rgb.i4z_1 == null) {
      return true;
    }
    return !equals(this.m4z_1, rgb.m4z_1) ? false : equals(this.p4z_1, rgb.p4z_1);
  };
  protoOf(Rgb).hashCode = function () {
    var result = protoOf(ColorSpace).hashCode.call(this);
    result = imul(31, result) + this.f4z_1.hashCode() | 0;
    result = imul(31, result) + contentHashCode(this.j4z_1) | 0;
    result = imul(31, result) + (!(this.g4z_1 === 0.0) ? toBits(this.g4z_1) : 0) | 0;
    result = imul(31, result) + (!(this.h4z_1 === 0.0) ? toBits(this.h4z_1) : 0) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.i4z_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    if (this.i4z_1 == null) {
      result = imul(31, result) + hashCode(this.m4z_1) | 0;
      result = imul(31, result) + hashCode(this.p4z_1) | 0;
    }
    return result;
  };
  function DoubleFunction() {
  }
  function TransferParameters(gamma, a, b, c, d, e, f) {
    e = e === VOID ? 0.0 : e;
    f = f === VOID ? 0.0 : f;
    this.p50_1 = gamma;
    this.q50_1 = a;
    this.r50_1 = b;
    this.s50_1 = c;
    this.t50_1 = d;
    this.u50_1 = e;
    this.v50_1 = f;
    if (isNaN_1(this.q50_1) || isNaN_1(this.r50_1) || isNaN_1(this.s50_1) || isNaN_1(this.t50_1) || isNaN_1(this.u50_1) || isNaN_1(this.v50_1) || isNaN_1(this.p50_1)) {
      throw IllegalArgumentException_init_$Create$('Parameters cannot be NaN');
    }
    if (!isSpecialG(this.p50_1)) {
      if (!(this.t50_1 >= 0.0 && this.t50_1 <= 1.0)) {
        throw IllegalArgumentException_init_$Create$('Parameter d must be in the range [0..1], was ' + ('' + this.t50_1));
      }
      if (this.t50_1 === 0.0 && (this.q50_1 === 0.0 || this.p50_1 === 0.0)) {
        throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, the transfer function is constant');
      }
      if (this.t50_1 >= 1.0 && this.s50_1 === 0.0) {
        throw IllegalArgumentException_init_$Create$('Parameter c is zero, the transfer function is constant');
      }
      if ((this.q50_1 === 0.0 || this.p50_1 === 0.0) && this.s50_1 === 0.0) {
        throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, and c is zero, the transfer function is constant');
      }
      if (this.s50_1 < 0.0) {
        throw IllegalArgumentException_init_$Create$('The transfer function must be increasing');
      }
      if (this.q50_1 < 0.0 || this.p50_1 < 0.0) {
        throw IllegalArgumentException_init_$Create$('The transfer function must be positive or increasing');
      }
    }
  }
  protoOf(TransferParameters).b52 = function () {
    return this.p50_1 === -3.0;
  };
  protoOf(TransferParameters).a52 = function () {
    return this.p50_1 === -2.0;
  };
  protoOf(TransferParameters).toString = function () {
    return 'TransferParameters(gamma=' + this.p50_1 + ', a=' + this.q50_1 + ', b=' + this.r50_1 + ', c=' + this.s50_1 + ', d=' + this.t50_1 + ', e=' + this.u50_1 + ', f=' + this.v50_1 + ')';
  };
  protoOf(TransferParameters).hashCode = function () {
    var result = getNumberHashCode(this.p50_1);
    result = imul(result, 31) + getNumberHashCode(this.q50_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r50_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s50_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.t50_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u50_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v50_1) | 0;
    return result;
  };
  protoOf(TransferParameters).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransferParameters))
      return false;
    var tmp0_other_with_cast = other instanceof TransferParameters ? other : THROW_CCE();
    if (!equals(this.p50_1, tmp0_other_with_cast.p50_1))
      return false;
    if (!equals(this.q50_1, tmp0_other_with_cast.q50_1))
      return false;
    if (!equals(this.r50_1, tmp0_other_with_cast.r50_1))
      return false;
    if (!equals(this.s50_1, tmp0_other_with_cast.s50_1))
      return false;
    if (!equals(this.t50_1, tmp0_other_with_cast.t50_1))
      return false;
    if (!equals(this.u50_1, tmp0_other_with_cast.u50_1))
      return false;
    if (!equals(this.v50_1, tmp0_other_with_cast.v50_1))
      return false;
    return true;
  };
  function isSpecialG(gamma) {
    return gamma === -2.0 || gamma === -3.0;
  }
  function WhitePoint(x, y) {
    this.u4z_1 = x;
    this.v4z_1 = y;
  }
  protoOf(WhitePoint).w4z = function () {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([this.u4z_1 / this.v4z_1, 1.0, (1.0 - this.u4z_1 - this.v4z_1) / this.v4z_1]);
  };
  protoOf(WhitePoint).toString = function () {
    return 'WhitePoint(x=' + this.u4z_1 + ', y=' + this.v4z_1 + ')';
  };
  protoOf(WhitePoint).hashCode = function () {
    var result = getNumberHashCode(this.u4z_1);
    result = imul(result, 31) + getNumberHashCode(this.v4z_1) | 0;
    return result;
  };
  protoOf(WhitePoint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhitePoint))
      return false;
    var tmp0_other_with_cast = other instanceof WhitePoint ? other : THROW_CCE();
    if (!equals(this.u4z_1, tmp0_other_with_cast.u4z_1))
      return false;
    if (!equals(this.v4z_1, tmp0_other_with_cast.v4z_1))
      return false;
    return true;
  };
  function Xyz(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_28().l4y_1, id);
  }
  protoOf(Xyz).v4u = function (component) {
    return -2.0;
  };
  protoOf(Xyz).w4u = function (component) {
    return 2.0;
  };
  protoOf(Xyz).r4y = function (v) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    var tmp0 = v[0];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = tmp0 < minimumValue ? minimumValue : tmp0;
    v[0] = this_0 > 2.0 ? 2.0 : this_0;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    var tmp0_0 = v[1];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = tmp0_0 < minimumValue_0 ? minimumValue_0 : tmp0_0;
    v[1] = this_1 > 2.0 ? 2.0 : this_1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    var tmp0_1 = v[2];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_1 = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = tmp0_1 < minimumValue_1 ? minimumValue_1 : tmp0_1;
    v[2] = this_2 > 2.0 ? 2.0 : this_2;
    return v;
  };
  protoOf(Xyz).s4y = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < minimumValue ? minimumValue : v0;
    var tmp0 = this_0 > 2.0 ? 2.0 : this_0;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v1 < minimumValue_0 ? minimumValue_0 : v1;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this_1 > 2.0 ? 2.0 : this_1;
    var v1_0 = fromInt(toRawBits(tmp0));
    var v2_0 = fromInt(toRawBits(val2));
    return bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
  };
  protoOf(Xyz).t4y = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v2 < minimumValue ? minimumValue : v2;
    return this_0 > 2.0 ? 2.0 : this_0;
  };
  protoOf(Xyz).u4y = function (x, y, z, a, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = x < minimumValue ? minimumValue : x;
    var tmp = this_0 > 2.0 ? 2.0 : this_0;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = y < minimumValue_0 ? minimumValue_0 : y;
    var tmp_0 = this_1 > 2.0 ? 2.0 : this_1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_1 = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = z < minimumValue_1 ? minimumValue_1 : z;
    var tmp$ret$11 = this_2 > 2.0 ? 2.0 : this_2;
    return Color_2(tmp, tmp_0, tmp$ret$11, a, colorSpace);
  };
  protoOf(Xyz).w4y = function (v) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    var tmp0 = v[0];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = tmp0 < minimumValue ? minimumValue : tmp0;
    v[0] = this_0 > 2.0 ? 2.0 : this_0;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    var tmp0_0 = v[1];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = tmp0_0 < minimumValue_0 ? minimumValue_0 : tmp0_0;
    v[1] = this_1 > 2.0 ? 2.0 : this_1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    var tmp0_1 = v[2];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_1 = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = tmp0_1 < minimumValue_1 ? minimumValue_1 : tmp0_1;
    v[2] = this_2 > 2.0 ? 2.0 : this_2;
    return v;
  };
  function obtainFillPaint($this) {
    var tmp0_elvis_lhs = $this.o52_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = Paint();
      this_0.q52(Companion_getInstance_20().o4w_1);
      // Inline function 'kotlin.also' call
      $this.o52_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function obtainStrokePaint($this) {
    var tmp0_elvis_lhs = $this.p52_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = Paint();
      this_0.q52(Companion_getInstance_20().p4w_1);
      // Inline function 'kotlin.also' call
      $this.p52_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function selectPaint($this, drawStyle) {
    var tmp;
    if (equals(drawStyle, Fill_getInstance())) {
      tmp = obtainFillPaint($this);
    } else {
      if (drawStyle instanceof Stroke) {
        // Inline function 'kotlin.apply' call
        var this_0 = obtainStrokePaint($this);
        if (!(this_0.z43() === drawStyle.r52_1)) {
          this_0.y43(drawStyle.r52_1);
        }
        if (!(this_0.x52() === drawStyle.t52_1)) {
          this_0.w52(drawStyle.t52_1);
        }
        if (!(this_0.z52() === drawStyle.s52_1)) {
          this_0.y52(drawStyle.s52_1);
        }
        if (!(this_0.b53() === drawStyle.u52_1)) {
          this_0.a53(drawStyle.u52_1);
        }
        if (!equals(this_0.d53(), drawStyle.v52_1)) {
          this_0.c53(drawStyle.v52_1);
        }
        tmp = this_0;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = selectPaint($this, style);
    if (!(brush == null)) {
      brush.e4q($this.z3t(), this_0, alpha);
    } else {
      if (!(this_0.e44() == null)) {
        this_0.d44(null);
      }
      if (!equals(this_0.g4r(), Companion_getInstance_15().t4q_1)) {
        this_0.f4q(Companion_getInstance_15().t4q_1);
      }
      if (!(this_0.e4l() === alpha)) {
        this_0.q4j(alpha);
      }
    }
    if (!equals(this_0.f53(), colorFilter)) {
      this_0.e53(colorFilter);
    }
    if (!(this_0.h53() === blendMode)) {
      this_0.g53(blendMode);
    }
    if (!(this_0.j53() === filterQuality)) {
      this_0.i53(filterQuality);
    }
    return this_0;
  }
  function configurePaint$default($this, brush, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_35().h4w_1 : filterQuality;
    return configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = selectPaint($this, style);
    var targetColor = modulate($this, color, alpha);
    if (!equals(this_0.g4r(), targetColor)) {
      this_0.f4q(targetColor);
    }
    if (!(this_0.e44() == null)) {
      this_0.d44(null);
    }
    if (!equals(this_0.f53(), colorFilter)) {
      this_0.e53(colorFilter);
    }
    if (!(this_0.h53() === blendMode)) {
      this_0.g53(blendMode);
    }
    if (!(this_0.j53() === filterQuality)) {
      this_0.i53(filterQuality);
    }
    return this_0;
  }
  function configurePaint$default_0($this, color, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_35().h4w_1 : filterQuality;
    return configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configureStrokePaint($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = obtainStrokePaint($this);
    if (!(brush == null)) {
      brush.e4q($this.z3t(), this_0, alpha);
    } else if (!(this_0.e4l() === alpha)) {
      this_0.q4j(alpha);
    }
    if (!equals(this_0.f53(), colorFilter)) {
      this_0.e53(colorFilter);
    }
    if (!(this_0.h53() === blendMode)) {
      this_0.g53(blendMode);
    }
    if (!(this_0.z43() === strokeWidth)) {
      this_0.y43(strokeWidth);
    }
    if (!(this_0.z52() === miter)) {
      this_0.y52(miter);
    }
    if (!(this_0.x52() === cap)) {
      this_0.w52(cap);
    }
    if (!(this_0.b53() === join)) {
      this_0.a53(join);
    }
    if (!equals(this_0.d53(), pathEffect)) {
      this_0.c53(pathEffect);
    }
    if (!(this_0.j53() === filterQuality)) {
      this_0.i53(filterQuality);
    }
    return this_0;
  }
  function configureStrokePaint$default($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_35().h4w_1 : filterQuality;
    return configureStrokePaint($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality);
  }
  function modulate($this, _this__u8e3s4, alpha) {
    var tmp;
    if (!(alpha === 1.0)) {
      tmp = Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function DrawParams(density, layoutDirection, canvas, size) {
    density = density === VOID ? get_DefaultDensity() : density;
    layoutDirection = layoutDirection === VOID ? LayoutDirection_Ltr_getInstance() : layoutDirection;
    canvas = canvas === VOID ? EmptyCanvas_instance : canvas;
    size = size === VOID ? Companion_getInstance().u3u_1 : size;
    this.k53_1 = density;
    this.l53_1 = layoutDirection;
    this.m53_1 = canvas;
    this.n53_1 = size;
  }
  protoOf(DrawParams).fe = function () {
    return this.k53_1;
  };
  protoOf(DrawParams).ge = function () {
    return this.l53_1;
  };
  protoOf(DrawParams).fh = function () {
    return this.m53_1;
  };
  protoOf(DrawParams).o53 = function () {
    return this.n53_1;
  };
  protoOf(DrawParams).toString = function () {
    return 'DrawParams(density=' + toString(this.k53_1) + ', layoutDirection=' + this.l53_1.toString() + ', canvas=' + toString(this.m53_1) + ', size=' + Size__toString_impl_o87ni8(this.n53_1) + ')';
  };
  protoOf(DrawParams).hashCode = function () {
    var result = hashCode(this.k53_1);
    result = imul(result, 31) + this.l53_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.m53_1) | 0;
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.n53_1) | 0;
    return result;
  };
  protoOf(DrawParams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DrawParams))
      return false;
    var tmp0_other_with_cast = other instanceof DrawParams ? other : THROW_CCE();
    if (!equals(this.k53_1, tmp0_other_with_cast.k53_1))
      return false;
    if (!this.l53_1.equals(tmp0_other_with_cast.l53_1))
      return false;
    if (!equals(this.m53_1, tmp0_other_with_cast.m53_1))
      return false;
    if (!equals(this.n53_1, tmp0_other_with_cast.n53_1))
      return false;
    return true;
  };
  function CanvasDrawScope$drawContext$1(this$0) {
    this.r53_1 = this$0;
    this.p53_1 = asDrawTransform(this);
    this.q53_1 = null;
  }
  protoOf(CanvasDrawScope$drawContext$1).s53 = function (value) {
    this.r53_1.m52_1.m53_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).s47 = function () {
    return this.r53_1.m52_1.m53_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).t53 = function (value) {
    this.r53_1.m52_1.n53_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).z3t = function () {
    return this.r53_1.m52_1.n53_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).u53 = function () {
    return this.p53_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).v53 = function (value) {
    this.r53_1.m52_1.l53_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).w53 = function () {
    return this.r53_1.m52_1.l53_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).x53 = function (value) {
    this.r53_1.m52_1.k53_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).z4m = function () {
    return this.r53_1.m52_1.k53_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).y53 = function (_set____db54di) {
    this.q53_1 = _set____db54di;
  };
  protoOf(CanvasDrawScope$drawContext$1).z53 = function () {
    return this.q53_1;
  };
  function CanvasDrawScope() {
    this.m52_1 = new DrawParams();
    var tmp = this;
    tmp.n52_1 = new CanvasDrawScope$drawContext$1(this);
    this.o52_1 = null;
    this.p52_1 = null;
  }
  protoOf(CanvasDrawScope).w53 = function () {
    return this.m52_1.l53_1;
  };
  protoOf(CanvasDrawScope).z4m = function () {
    return this.m52_1.k53_1.z4m();
  };
  protoOf(CanvasDrawScope).n4n = function () {
    return this.m52_1.k53_1.n4n();
  };
  protoOf(CanvasDrawScope).a54 = function () {
    return this.n52_1;
  };
  protoOf(CanvasDrawScope).b54 = function (brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    return this.m52_1.m53_1.x4s(start, end, configureStrokePaint$default(this, brush, strokeWidth, 4.0, cap, Companion_getInstance_25().b4y_1, pathEffect, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).n4w = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.m52_1.m53_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    var tmp_3 = tmp_2 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    var tmp_4 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    var tmp$ret$23 = floatFromBits(bits_4);
    return tmp.y4s(tmp_0, tmp_1, tmp_3, tmp_4 + tmp$ret$23, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).k4w = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.m52_1.m53_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    var tmp_3 = tmp_2 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    var tmp_4 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    var tmp$ret$23 = floatFromBits(bits_4);
    return tmp.y4s(tmp_0, tmp_1, tmp_3, tmp_4 + tmp$ret$23, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).f54 = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    return this.m52_1.m53_1.c4t(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint(this, null, style, alpha, colorFilter, blendMode, filterQuality));
  };
  protoOf(CanvasDrawScope).m4w = function (brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode) {
    var tmp = this.m52_1.m53_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    var tmp_3 = tmp_2 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    var tmp_4 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    var tmp_5 = tmp_4 + floatFromBits(bits_4);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_5 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_5 = convertToInt(shiftRight(value_5, 32));
    var tmp_6 = floatFromBits(bits_5);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_6 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
    var tmp$ret$31 = floatFromBits(bits_6);
    return tmp.z4s(tmp_0, tmp_1, tmp_3, tmp_5, tmp_6, tmp$ret$31, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).j4w = function (color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode) {
    var tmp = this.m52_1.m53_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    var tmp_3 = tmp_2 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    var tmp_4 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    var tmp_5 = tmp_4 + floatFromBits(bits_4);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_5 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_5 = convertToInt(shiftRight(value_5, 32));
    var tmp_6 = floatFromBits(bits_5);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_6 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
    var tmp$ret$31 = floatFromBits(bits_6);
    return tmp.z4s(tmp_0, tmp_1, tmp_3, tmp_5, tmp_6, tmp$ret$31, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).i54 = function (color, radius, center, alpha, style, colorFilter, blendMode) {
    return this.m52_1.m53_1.a4t(center, radius, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).i4w = function (path, color, alpha, style, colorFilter, blendMode) {
    return this.m52_1.m53_1.b4t(path, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).l4w = function (path, brush, alpha, style, colorFilter, blendMode) {
    return this.m52_1.m53_1.b4t(path, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  function asDrawTransform(_this__u8e3s4) {
    return new asDrawTransform$1(_this__u8e3s4);
  }
  function asDrawTransform$1($this_asDrawTransform) {
    this.n54_1 = $this_asDrawTransform;
  }
  protoOf(asDrawTransform$1).z3t = function () {
    return this.n54_1.z3t();
  };
  protoOf(asDrawTransform$1).o54 = function (left, top, right, bottom) {
    // Inline function 'kotlin.let' call
    var it = this.n54_1.s47();
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    var this_0 = this.z3t();
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits) - (left + right);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    var this_1 = this.z3t();
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) - (top + bottom);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$8 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var updatedSize = _Size___init__impl__aywn0g(tmp$ret$8);
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Size___get_packedValue__impl__7rlt1o(updatedSize);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    if (floatFromBits(bits_1) >= 0) {
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Size___get_packedValue__impl__7rlt1o(updatedSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      tmp = floatFromBits(bits_2) >= 0;
    } else {
      tmp = false;
    }
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    if (!tmp) {
      var tmp$ret$18 = 'Width and height must be greater than or equal to zero';
      throwIllegalArgumentException(tmp$ret$18);
    }
    this.n54_1.t53(updatedSize);
    it.m3t(left, top);
  };
  protoOf(asDrawTransform$1).q4s = function (left, top, right, bottom, clipOp) {
    this.n54_1.s47().q4s(left, top, right, bottom, clipOp);
  };
  protoOf(asDrawTransform$1).v4s = function (path, clipOp) {
    this.n54_1.s47().v4s(path, clipOp);
  };
  protoOf(asDrawTransform$1).m3t = function (left, top) {
    this.n54_1.s47().m3t(left, top);
  };
  protoOf(asDrawTransform$1).q54 = function (scaleX, scaleY, pivot) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.n54_1.s47();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$7 = floatFromBits(bits_0);
    this_0.m3t(tmp, tmp$ret$7);
    this_0.n4s(scaleX, scaleY);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_0 = -floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    var tmp$ret$15 = floatFromBits(bits_2);
    this_0.m3t(tmp_0, -tmp$ret$15);
  };
  protoOf(asDrawTransform$1).r54 = function (matrix) {
    this.n54_1.s47().o4s(matrix);
  };
  function get_DefaultDensity() {
    _init_properties_DrawContext_kt__bfvdzt();
    return DefaultDensity;
  }
  var DefaultDensity;
  function DrawContext() {
  }
  var properties_initialized_DrawContext_kt_nwly1n;
  function _init_properties_DrawContext_kt__bfvdzt() {
    if (!properties_initialized_DrawContext_kt_nwly1n) {
      properties_initialized_DrawContext_kt_nwly1n = true;
      DefaultDensity = Density(1.0, 1.0);
    }
  }
  function offsetSize($this, _this__u8e3s4, offset) {
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    var tmp0 = tmp - floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 - floatFromBits(bits_2);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$16 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$16);
  }
  function Companion_22() {
    Companion_instance_24 = this;
    this.g4w_1 = Companion_getInstance_12().b4p_1;
    this.h4w_1 = Companion_getInstance_17().e4v_1;
  }
  var Companion_instance_24;
  function Companion_getInstance_35() {
    if (Companion_instance_24 == null)
      new Companion_22();
    return Companion_instance_24;
  }
  function DrawScope() {
  }
  function Companion_23() {
    Companion_instance_25 = this;
    this.s54_1 = 0.0;
    this.t54_1 = 4.0;
    this.u54_1 = Companion_getInstance_24().x4x_1;
    this.v54_1 = Companion_getInstance_25().b4y_1;
  }
  var Companion_instance_25;
  function Companion_getInstance_36() {
    if (Companion_instance_25 == null)
      new Companion_23();
    return Companion_instance_25;
  }
  function Stroke(width, miter, cap, join, pathEffect) {
    Companion_getInstance_36();
    width = width === VOID ? 0.0 : width;
    miter = miter === VOID ? 4.0 : miter;
    cap = cap === VOID ? Companion_getInstance_36().u54_1 : cap;
    join = join === VOID ? Companion_getInstance_36().v54_1 : join;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    DrawStyle.call(this);
    this.r52_1 = width;
    this.s52_1 = miter;
    this.t52_1 = cap;
    this.u52_1 = join;
    this.v52_1 = pathEffect;
  }
  protoOf(Stroke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stroke))
      return false;
    if (!(this.r52_1 === other.r52_1))
      return false;
    if (!(this.s52_1 === other.s52_1))
      return false;
    if (!(this.t52_1 === other.t52_1))
      return false;
    if (!(this.u52_1 === other.u52_1))
      return false;
    if (!equals(this.v52_1, other.v52_1))
      return false;
    return true;
  };
  protoOf(Stroke).hashCode = function () {
    var result = getNumberHashCode(this.r52_1);
    result = imul(31, result) + getNumberHashCode(this.s52_1) | 0;
    result = imul(31, result) + StrokeCap__hashCode_impl_posxk8(this.t52_1) | 0;
    result = imul(31, result) + StrokeJoin__hashCode_impl_3pyh8w(this.u52_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.v52_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(Stroke).toString = function () {
    return 'Stroke(width=' + this.r52_1 + ', miter=' + this.s52_1 + ', cap=' + StrokeCap__toString_impl_3xn0rd(this.t52_1) + ', join=' + StrokeJoin__toString_impl_ph4e1r(this.u52_1) + ', pathEffect=' + toString_0(this.v52_1) + ')';
  };
  function DrawStyle() {
  }
  function Fill() {
    Fill_instance = this;
    DrawStyle.call(this);
  }
  var Fill_instance;
  function Fill_getInstance() {
    if (Fill_instance == null)
      new Fill();
    return Fill_instance;
  }
  function DrawTransform() {
  }
  function EmptyCanvas() {
  }
  protoOf(EmptyCanvas).k4s = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).l4s = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).m4s = function (bounds, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).m3t = function (dx, dy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).n4s = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).o4s = function (matrix) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).q4s = function (left, top, right, bottom, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).v4s = function (path, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).x4s = function (p1, p2, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).y4s = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).z4s = function (left, top, right, bottom, radiusX, radiusY, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).a4t = function (center, radius, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).b4t = function (path, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).c4t = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  var EmptyCanvas_instance;
  function EmptyCanvas_getInstance() {
    return EmptyCanvas_instance;
  }
  function access$_get_dependency__eau0ww($this) {
    return $this.w54_1;
  }
  function access$_set_dependency__rek8c($this, _set____db54di) {
    $this.w54_1 = _set____db54di;
    return Unit_instance;
  }
  function access$_get_oldDependency__6kx1q7($this) {
    return $this.x54_1;
  }
  function access$_set_oldDependency__lsok8j($this, _set____db54di) {
    $this.x54_1 = _set____db54di;
    return Unit_instance;
  }
  function access$_get_dependenciesSet__8t5wug($this) {
    return $this.y54_1;
  }
  function access$_get_oldDependenciesSet__gb53k7($this) {
    return $this.z54_1;
  }
  function access$_set_oldDependenciesSet__hmq7k5($this, _set____db54di) {
    $this.z54_1 = _set____db54di;
    return Unit_instance;
  }
  function access$_set_trackingInProgress__dxkhgu($this, _set____db54di) {
    $this.a55_1 = _set____db54di;
    return Unit_instance;
  }
  function ChildLayerDependenciesTracker() {
    this.w54_1 = null;
    this.x54_1 = null;
    this.y54_1 = null;
    this.z54_1 = null;
    this.a55_1 = false;
  }
  protoOf(ChildLayerDependenciesTracker).b55 = function (graphicsLayer) {
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    if (!this.a55_1) {
      var tmp$ret$0 = 'Only add dependencies during a tracking';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (!(this.y54_1 == null)) {
      ensureNotNull(this.y54_1).h(graphicsLayer);
    } else if (!(this.w54_1 == null)) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf();
      this_0.h(ensureNotNull(this.w54_1));
      this_0.h(graphicsLayer);
      tmp.y54_1 = this_0;
      this.w54_1 = null;
    } else {
      this.w54_1 = graphicsLayer;
    }
    if (!(this.z54_1 == null)) {
      return !ensureNotNull(this.z54_1).g2(graphicsLayer);
    } else {
      if (!(this.x54_1 === graphicsLayer)) {
        return true;
      } else {
        this.x54_1 = null;
        return false;
      }
    }
  };
  function _CompositingStrategy___init__impl__pgr8e(value) {
    return value;
  }
  function Companion_24() {
    Companion_instance_26 = this;
    this.c55_1 = _CompositingStrategy___init__impl__pgr8e(0);
    this.d55_1 = _CompositingStrategy___init__impl__pgr8e(1);
    this.e55_1 = _CompositingStrategy___init__impl__pgr8e(2);
  }
  var Companion_instance_26;
  function Companion_getInstance_37() {
    if (Companion_instance_26 == null)
      new Companion_24();
    return Companion_instance_26;
  }
  function drawLayer(_this__u8e3s4, graphicsLayer) {
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.a54().s47();
    graphicsLayer.k56(canvas, _this__u8e3s4.a54().z53());
  }
  function setOutline(_this__u8e3s4, outline) {
    if (outline instanceof Rectangle) {
      var tmp0 = outline.b4w_1.v3t_1;
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = outline.b4w_1.w3t_1;
      var v1 = fromInt(toRawBits(tmp0));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      var tmp = _Offset___init__impl__c168vi(tmp$ret$0);
      // Inline function 'androidx.compose.ui.geometry.Rect.width' call
      var this_0 = outline.b4w_1;
      var tmp0_0 = this_0.x3t_1 - this_0.v3t_1;
      // Inline function 'androidx.compose.ui.geometry.Rect.height' call
      var this_1 = outline.b4w_1;
      // Inline function 'androidx.compose.ui.geometry.Size' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2_0 = this_1.y3t_1 - this_1.w3t_1;
      var v1_0 = fromInt(toRawBits(tmp0_0));
      var v2_0 = fromInt(toRawBits(val2_0));
      var tmp$ret$4 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
      var tmp$ret$5 = _Size___init__impl__aywn0g(tmp$ret$4);
      _this__u8e3s4.n56(tmp, tmp$ret$5);
    } else {
      if (outline instanceof Generic) {
        _this__u8e3s4.m56(outline.f4w_1);
      } else {
        if (outline instanceof Rounded) {
          if (!(outline.d4w_1 == null)) {
            _this__u8e3s4.m56(outline.d4w_1);
          } else {
            var rr = outline.c4w_1;
            var tmp0_1 = rr.i3u_1;
            // Inline function 'androidx.compose.ui.geometry.Offset' call
            // Inline function 'androidx.compose.ui.util.packFloats' call
            var val2_1 = rr.j3u_1;
            var v1_1 = fromInt(toRawBits(tmp0_1));
            var v2_1 = fromInt(toRawBits(val2_1));
            var tmp$ret$6 = bitwiseOr(shiftLeft(v1_1, 32), bitwiseAnd(v2_1, new Long(-1, 0)));
            var tmp_0 = _Offset___init__impl__c168vi(tmp$ret$6);
            var tmp0_2 = rr.s3u();
            // Inline function 'androidx.compose.ui.geometry.Size' call
            // Inline function 'androidx.compose.ui.util.packFloats' call
            var val2_2 = rr.t3u();
            var v1_2 = fromInt(toRawBits(tmp0_2));
            var v2_2 = fromInt(toRawBits(val2_2));
            var tmp$ret$8 = bitwiseOr(shiftLeft(v1_2, 32), bitwiseAnd(v2_2, new Long(-1, 0)));
            var tmp_1 = _Size___init__impl__aywn0g(tmp$ret$8);
            // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
            var this_2 = rr.p3u_1;
            // Inline function 'androidx.compose.ui.util.unpackFloat1' call
            var value = _CornerRadius___get_packedValue__impl__okv4jq(this_2);
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits = convertToInt(shiftRight(value, 32));
            var tmp$ret$13 = floatFromBits(bits);
            _this__u8e3s4.l56(tmp_0, tmp_1, tmp$ret$13);
          }
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  }
  function validateSize($this, srcOffset, srcSize) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (_IntOffset___get_x__impl__qiqr5o(srcOffset) >= 0 && _IntOffset___get_y__impl__2avpwj(srcOffset) >= 0) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(srcSize);
      tmp_2 = convertToInt(shiftRight(value, 32)) >= 0;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(srcSize);
      tmp_1 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0))) >= 0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value_1 = _IntSize___get_packedValue__impl__uho7jf(srcSize);
      tmp_0 = convertToInt(shiftRight(value_1, 32)) <= $this.u56_1.s3u();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_2 = _IntSize___get_packedValue__impl__uho7jf(srcSize);
      tmp = convertToInt(bitwiseAnd(value_2, new Long(-1, 0))) <= $this.u56_1.t3u();
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return srcSize;
  }
  function BitmapPainter(image, srcOffset, srcSize) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().f4o_1 : srcOffset;
    var tmp;
    if (srcSize === VOID) {
      var tmp0 = image.s3u();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = image.t3u();
      var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      tmp = _IntSize___init__impl__emcjft(tmp$ret$0);
    } else {
      tmp = srcSize;
    }
    srcSize = tmp;
    Painter.call(this);
    this.u56_1 = image;
    this.v56_1 = srcOffset;
    this.w56_1 = srcSize;
    this.x56_1 = Companion_getInstance_17().e4v_1;
    this.y56_1 = validateSize(this, this.v56_1, this.w56_1);
    this.z56_1 = 1.0;
    this.a57_1 = null;
  }
  protoOf(BitmapPainter).b57 = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    var this_0 = _this__u8e3s4.z3t();
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = floatFromBits(bits);
    var tmp0 = roundToInt(this_1);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    var this_2 = _this__u8e3s4.z3t();
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(this_2);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_3 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = roundToInt(this_3);
    var tmp$ret$12 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    var tmp$ret$13 = _IntSize___init__impl__emcjft(tmp$ret$12);
    _this__u8e3s4.g54(this.u56_1, this.v56_1, this.w56_1, VOID, tmp$ret$13, this.z56_1, VOID, this.a57_1, VOID, this.x56_1);
  };
  protoOf(BitmapPainter).c57 = function () {
    return toSize_0(this.y56_1);
  };
  protoOf(BitmapPainter).d57 = function (alpha) {
    this.z56_1 = alpha;
    return true;
  };
  protoOf(BitmapPainter).e57 = function (colorFilter) {
    this.a57_1 = colorFilter;
    return true;
  };
  protoOf(BitmapPainter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BitmapPainter))
      return false;
    if (!equals(this.u56_1, other.u56_1))
      return false;
    if (!equals(this.v56_1, other.v56_1))
      return false;
    if (!equals(this.w56_1, other.w56_1))
      return false;
    if (!(this.x56_1 === other.x56_1))
      return false;
    return true;
  };
  protoOf(BitmapPainter).hashCode = function () {
    var result = hashCode(this.u56_1);
    result = imul(31, result) + IntOffset__hashCode_impl_w5rrxs(this.v56_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.w56_1) | 0;
    result = imul(31, result) + FilterQuality__hashCode_impl_v4lpcb(this.x56_1) | 0;
    return result;
  };
  protoOf(BitmapPainter).toString = function () {
    return 'BitmapPainter(image=' + toString(this.u56_1) + ', srcOffset=' + IntOffset__toString_impl_h46d8h(this.v56_1) + ', srcSize=' + IntSize__toString_impl_54w9zl(this.w56_1) + ', ' + ('filterQuality=' + FilterQuality__toString_impl_i5cfty(this.x56_1) + ')');
  };
  function obtainPaint($this) {
    var target = $this.f57_1;
    if (target == null) {
      target = Paint();
      $this.f57_1 = target;
    }
    return target;
  }
  function configureColorFilter($this, colorFilter) {
    if (!equals($this.h57_1, colorFilter)) {
      var consumedColorFilter = $this.e57(colorFilter);
      if (!consumedColorFilter) {
        if (colorFilter == null) {
          var tmp0_safe_receiver = $this.f57_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.e53(null);
          }
          $this.g57_1 = false;
        } else {
          obtainPaint($this).e53(colorFilter);
          $this.g57_1 = true;
        }
      }
      $this.h57_1 = colorFilter;
    }
  }
  function configureAlpha($this, alpha) {
    if (!($this.i57_1 === alpha)) {
      var consumed = $this.d57(alpha);
      if (!consumed) {
        if (alpha === 1.0) {
          var tmp0_safe_receiver = $this.f57_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.q4j(alpha);
          }
          $this.g57_1 = false;
        } else {
          obtainPaint($this).q4j(alpha);
          $this.g57_1 = true;
        }
      }
      $this.i57_1 = alpha;
    }
  }
  function configureLayoutDirection($this, rtl) {
    if (!$this.j57_1.equals(rtl)) {
      $this.l57(rtl);
      $this.j57_1 = rtl;
    }
  }
  function Painter$drawLambda$lambda(this$0) {
    return function (_this__u8e3s4) {
      this$0.b57(_this__u8e3s4);
      return Unit_instance;
    };
  }
  function Painter() {
    this.f57_1 = null;
    this.g57_1 = false;
    this.h57_1 = null;
    this.i57_1 = 1.0;
    this.j57_1 = LayoutDirection_Ltr_getInstance();
    var tmp = this;
    tmp.k57_1 = Painter$drawLambda$lambda(this);
  }
  protoOf(Painter).d57 = function (alpha) {
    return false;
  };
  protoOf(Painter).e57 = function (colorFilter) {
    return false;
  };
  protoOf(Painter).l57 = function (layoutDirection) {
    return false;
  };
  protoOf(Painter).m57 = function (_this__u8e3s4, size, alpha, colorFilter) {
    configureAlpha(this, alpha);
    configureColorFilter(this, colorFilter);
    configureLayoutDirection(this, _this__u8e3s4.w53());
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    var this_0 = _this__u8e3s4.z3t();
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    var tmp6 = tmp - floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    var this_1 = _this__u8e3s4.z3t();
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Size___get_packedValue__impl__7rlt1o(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.graphics.drawscope.inset' call
    var bottom = tmp_0 - floatFromBits(bits_2);
    _this__u8e3s4.a54().u53().o54(0.0, 0.0, tmp6, bottom);
    try {
      var tmp_1;
      var tmp_2;
      if (alpha > 0.0) {
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_3 = _Size___get_packedValue__impl__7rlt1o(size);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_3 = convertToInt(shiftRight(value_3, 32));
        tmp_2 = floatFromBits(bits_3) > 0;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
        tmp_1 = floatFromBits(bits_4) > 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        if (this.g57_1) {
          var tmp_3 = Companion_getInstance_0().r3t_1;
          // Inline function 'androidx.compose.ui.geometry.Size.width' call
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value_5 = _Size___get_packedValue__impl__7rlt1o(size);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          // Inline function 'kotlin.fromBits' call
          var bits_5 = convertToInt(shiftRight(value_5, 32));
          var tmp0 = floatFromBits(bits_5);
          // Inline function 'androidx.compose.ui.geometry.Size.height' call
          // Inline function 'androidx.compose.ui.util.unpackFloat2' call
          var value_6 = _Size___get_packedValue__impl__7rlt1o(size);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          // Inline function 'kotlin.fromBits' call
          var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
          // Inline function 'androidx.compose.ui.geometry.Size' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var val2 = floatFromBits(bits_6);
          var v1 = fromInt(toRawBits(tmp0));
          var v2 = fromInt(toRawBits(val2));
          var tmp$ret$32 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
          var tmp$ret$33 = _Size___init__impl__aywn0g(tmp$ret$32);
          var layerRect = Rect_0(tmp_3, tmp$ret$33);
          // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
          var tmp0_0 = _this__u8e3s4.a54().s47();
          // Inline function 'androidx.compose.ui.graphics.withSaveLayer' call
          var paint = obtainPaint(this);
          try {
            tmp0_0.m4s(layerRect, paint);
            this.b57(_this__u8e3s4);
          }finally {
            tmp0_0.l4s();
          }
        } else {
          this.b57(_this__u8e3s4);
        }
      }
    }finally {
      _this__u8e3s4.a54().u53().o54(-0.0, -0.0, -tmp6, -bottom);
    }
  };
  function get_PowersOfTen() {
    _init_properties_FastFloatParser_kt__fk9z4j();
    return PowersOfTen;
  }
  var PowersOfTen;
  function get_Mantissa64() {
    _init_properties_FastFloatParser_kt__fk9z4j();
    return Mantissa64;
  }
  var Mantissa64;
  function nextFloat(s, start, end) {
    _init_properties_FastFloatParser_kt__fk9z4j();
    if (start === end) {
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      return bitwiseOr(shiftLeft(fromInt(start), 32), bitwiseAnd(fromInt(toRawBits(NaN)), new Long(-1, 0)));
    }
    var index = start;
    var c = charCodeAt(s, index);
    var isNegative = c === _Char___init__impl__6a9atx(45);
    if (isNegative) {
      index = index + 1 | 0;
      if (index === end) {
        // Inline function 'androidx.compose.ui.graphics.vector.pack' call
        var index_0 = index;
        return bitwiseOr(shiftLeft(fromInt(index_0), 32), bitwiseAnd(fromInt(toRawBits(NaN)), new Long(-1, 0)));
      }
      c = charCodeAt(s, index);
      var tmp;
      // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
      var this_0 = c;
      // Inline function 'kotlin.code' call
      var this_1 = numberToChar(Char__minus_impl_a2frrh(this_0, _Char___init__impl__6a9atx(48)));
      if (!(Char__toInt_impl_vasixd(this_1) < 10)) {
        tmp = !(c === _Char___init__impl__6a9atx(46));
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'androidx.compose.ui.graphics.vector.pack' call
        var index_1 = index;
        return bitwiseOr(shiftLeft(fromInt(index_1), 32), bitwiseAnd(fromInt(toRawBits(NaN)), new Long(-1, 0)));
      }
    }
    var significand = new Long(0, 0);
    var significandStartIndex = index;
    var dataLength = s.length;
    $l$loop: while (true) {
      var tmp_0;
      if (!(index === end)) {
        // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
        var this_2 = c;
        // Inline function 'kotlin.code' call
        var this_3 = numberToChar(Char__minus_impl_a2frrh(this_2, _Char___init__impl__6a9atx(48)));
        tmp_0 = Char__toInt_impl_vasixd(this_3) < 10;
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        break $l$loop;
      }
      var tmp_1 = multiply(new Long(10, 0), significand);
      // Inline function 'kotlin.code' call
      var this_4 = c;
      var tmp_2 = Char__toInt_impl_vasixd(this_4);
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(48);
      var tmp$ret$8 = Char__toInt_impl_vasixd(this_5);
      significand = add(tmp_1, fromInt(tmp_2 - tmp$ret$8 | 0));
      index = index + 1 | 0;
      c = index < dataLength ? charCodeAt(s, index) : _Char___init__impl__6a9atx(0);
    }
    var significandEndIndex = index;
    var digitCount = index - significandStartIndex | 0;
    var exponent = 0;
    var exponentStartIndex = index;
    var exponentEndIndex = index;
    if (!(index === end) && c === _Char___init__impl__6a9atx(46)) {
      index = index + 1 | 0;
      exponentStartIndex = index;
      $l$loop_0: while ((end - index | 0) >= 4) {
        // Inline function 'androidx.compose.ui.graphics.vector.parseFourDigits' call
        var offset = index;
        // Inline function 'kotlin.code' call
        var this_6 = charCodeAt(s, offset);
        var tmp$ret$9 = Char__toInt_impl_vasixd(this_6);
        var tmp_3 = fromInt(tmp$ret$9);
        // Inline function 'kotlin.code' call
        var this_7 = charCodeAt(s, offset + 1 | 0);
        var tmp$ret$10 = Char__toInt_impl_vasixd(this_7);
        var tmp_4 = bitwiseOr(tmp_3, shiftLeft(fromInt(tmp$ret$10), 16));
        // Inline function 'kotlin.code' call
        var this_8 = charCodeAt(s, offset + 2 | 0);
        var tmp$ret$11 = Char__toInt_impl_vasixd(this_8);
        var tmp_5 = bitwiseOr(tmp_4, shiftLeft(fromInt(tmp$ret$11), 32));
        // Inline function 'kotlin.code' call
        var this_9 = charCodeAt(s, offset + 3 | 0);
        var tmp$ret$12 = Char__toInt_impl_vasixd(this_9);
        var v = bitwiseOr(tmp_5, shiftLeft(fromInt(tmp$ret$12), 48));
        var base = subtract(v, new Long(3145776, 3145776));
        var predicate = bitwiseOr(add(v, new Long(4587590, 4587590)), base);
        var tmp_6;
        // Inline function 'kotlin.ULong.toLong' call
        var this_10 = _ULong___init__impl__c78o9k(new Long(-8323200, -8323200));
        var tmp$ret$13 = _ULong___get_data__impl__fggpzb(this_10);
        if (!equalsLong(bitwiseAnd(predicate, tmp$ret$13), new Long(0, 0))) {
          tmp_6 = -1;
        } else {
          tmp_6 = convertToInt(shiftRightUnsigned(multiply(base, new Long(655361, 65536100)), 48));
        }
        var digits = tmp_6;
        if (digits < 0)
          break $l$loop_0;
        significand = add(multiply(new Long(10000, 0), significand), fromInt(digits));
        index = index + 4 | 0;
      }
      c = index < dataLength ? charCodeAt(s, index) : _Char___init__impl__6a9atx(0);
      $l$loop_1: while (true) {
        var tmp_7;
        if (!(index === end)) {
          // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
          var this_11 = c;
          // Inline function 'kotlin.code' call
          var this_12 = numberToChar(Char__minus_impl_a2frrh(this_11, _Char___init__impl__6a9atx(48)));
          tmp_7 = Char__toInt_impl_vasixd(this_12) < 10;
        } else {
          tmp_7 = false;
        }
        if (!tmp_7) {
          break $l$loop_1;
        }
        var tmp_8 = multiply(new Long(10, 0), significand);
        // Inline function 'kotlin.code' call
        var this_13 = c;
        var tmp_9 = Char__toInt_impl_vasixd(this_13);
        // Inline function 'kotlin.code' call
        var this_14 = _Char___init__impl__6a9atx(48);
        var tmp$ret$18 = Char__toInt_impl_vasixd(this_14);
        significand = add(tmp_8, fromInt(tmp_9 - tmp$ret$18 | 0));
        index = index + 1 | 0;
        c = index < dataLength ? charCodeAt(s, index) : _Char___init__impl__6a9atx(0);
      }
      exponent = exponentStartIndex - index | 0;
      exponentEndIndex = index;
      digitCount = digitCount - exponent | 0;
    }
    if (digitCount === 0) {
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var index_2 = index;
      return bitwiseOr(shiftLeft(fromInt(index_2), 32), bitwiseAnd(fromInt(toRawBits(NaN)), new Long(-1, 0)));
    }
    var exponentNumber = 0;
    // Inline function 'kotlin.code' call
    var this_15 = c;
    var tmp_10 = Char__toInt_impl_vasixd(this_15) | 32;
    // Inline function 'kotlin.code' call
    var this_16 = _Char___init__impl__6a9atx(101);
    if (tmp_10 === Char__toInt_impl_vasixd(this_16)) {
      index = index + 1 | 0;
      c = index < dataLength ? charCodeAt(s, index) : _Char___init__impl__6a9atx(0);
      var isExponentNegative = c === _Char___init__impl__6a9atx(45);
      if (isExponentNegative || c === _Char___init__impl__6a9atx(43)) {
        index = index + 1 | 0;
      }
      c = charCodeAt(s, index);
      $l$loop_2: while (true) {
        var tmp_11;
        if (!(index === end)) {
          // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
          var this_17 = c;
          // Inline function 'kotlin.code' call
          var this_18 = numberToChar(Char__minus_impl_a2frrh(this_17, _Char___init__impl__6a9atx(48)));
          tmp_11 = Char__toInt_impl_vasixd(this_18) < 10;
        } else {
          tmp_11 = false;
        }
        if (!tmp_11) {
          break $l$loop_2;
        }
        if (exponentNumber < 1024) {
          var tmp_12 = imul(10, exponentNumber);
          // Inline function 'kotlin.code' call
          var this_19 = c;
          var tmp_13 = Char__toInt_impl_vasixd(this_19);
          // Inline function 'kotlin.code' call
          var this_20 = _Char___init__impl__6a9atx(48);
          exponentNumber = tmp_12 + (tmp_13 - Char__toInt_impl_vasixd(this_20) | 0) | 0;
        }
        index = index + 1 | 0;
        c = index < dataLength ? charCodeAt(s, index) : _Char___init__impl__6a9atx(0);
      }
      if (isExponentNegative)
        exponentNumber = -exponentNumber | 0;
      exponent = exponent + exponentNumber | 0;
    }
    var tooManyDigits = false;
    if (digitCount > 19) {
      var retryIndex = significandStartIndex;
      c = charCodeAt(s, retryIndex);
      while (!(index === end) && (c === _Char___init__impl__6a9atx(48) || c === _Char___init__impl__6a9atx(46))) {
        if (c === _Char___init__impl__6a9atx(48)) {
          digitCount = digitCount - 1 | 0;
        }
        retryIndex = retryIndex + 1 | 0;
        c = retryIndex < dataLength ? charCodeAt(s, retryIndex) : _Char___init__impl__6a9atx(0);
      }
      if (digitCount > 19) {
        tooManyDigits = true;
        significand = new Long(0, 0);
        retryIndex = significandStartIndex;
        c = charCodeAt(s, retryIndex);
        $l$loop_3: while (true) {
          var tmp_14;
          if (!(retryIndex === significandEndIndex)) {
            // Inline function 'kotlin.toULong' call
            var this_21 = significand;
            var tmp0 = _ULong___init__impl__c78o9k(this_21);
            // Inline function 'kotlin.ULong.compareTo' call
            var other = _ULong___init__impl__c78o9k(new Long(-1486618624, 232830643));
            tmp_14 = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)) < 0;
          } else {
            tmp_14 = false;
          }
          if (!tmp_14) {
            break $l$loop_3;
          }
          var tmp_15 = multiply(new Long(10, 0), significand);
          // Inline function 'kotlin.code' call
          var this_22 = c;
          var tmp_16 = Char__toInt_impl_vasixd(this_22);
          // Inline function 'kotlin.code' call
          var this_23 = _Char___init__impl__6a9atx(48);
          var tmp$ret$29 = Char__toInt_impl_vasixd(this_23);
          significand = add(tmp_15, fromInt(tmp_16 - tmp$ret$29 | 0));
          retryIndex = retryIndex + 1 | 0;
          c = retryIndex < dataLength ? charCodeAt(s, retryIndex) : _Char___init__impl__6a9atx(0);
        }
        // Inline function 'kotlin.toULong' call
        var this_24 = significand;
        var tmp0_0 = _ULong___init__impl__c78o9k(this_24);
        // Inline function 'kotlin.ULong.compareTo' call
        var other_0 = _ULong___init__impl__c78o9k(new Long(-1486618624, 232830643));
        if (ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_0)) >= 0) {
          exponent = (significandEndIndex - retryIndex | 0) + exponentNumber | 0;
        } else {
          retryIndex = exponentStartIndex;
          c = charCodeAt(s, retryIndex);
          $l$loop_4: while (true) {
            var tmp_17;
            if (!(retryIndex === exponentEndIndex)) {
              // Inline function 'kotlin.toULong' call
              var this_25 = significand;
              var tmp0_1 = _ULong___init__impl__c78o9k(this_25);
              // Inline function 'kotlin.ULong.compareTo' call
              var other_1 = _ULong___init__impl__c78o9k(new Long(-1486618624, 232830643));
              tmp_17 = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_1)) < 0;
            } else {
              tmp_17 = false;
            }
            if (!tmp_17) {
              break $l$loop_4;
            }
            var tmp_18 = multiply(new Long(10, 0), significand);
            // Inline function 'kotlin.code' call
            var this_26 = c;
            var tmp_19 = Char__toInt_impl_vasixd(this_26);
            // Inline function 'kotlin.code' call
            var this_27 = _Char___init__impl__6a9atx(48);
            var tmp$ret$35 = Char__toInt_impl_vasixd(this_27);
            significand = add(tmp_18, fromInt(tmp_19 - tmp$ret$35 | 0));
            retryIndex = retryIndex + 1 | 0;
            c = retryIndex < dataLength ? charCodeAt(s, retryIndex) : _Char___init__impl__6a9atx(0);
          }
          exponent = (exponentStartIndex - retryIndex | 0) + exponentNumber | 0;
        }
      }
    }
    var tmp_20;
    if ((-10 <= exponent ? exponent <= 10 : false) && !tooManyDigits) {
      // Inline function 'kotlin.toULong' call
      var this_28 = significand;
      var tmp0_2 = _ULong___init__impl__c78o9k(this_28);
      // Inline function 'kotlin.ULong.shl' call
      var this_29 = _ULong___init__impl__c78o9k(new Long(1, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_2 = _ULong___init__impl__c78o9k(shiftLeft(_ULong___get_data__impl__fggpzb(this_29), 24));
      tmp_20 = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_2), _ULong___get_data__impl__fggpzb(other_2)) <= 0;
    } else {
      tmp_20 = false;
    }
    if (tmp_20) {
      var f = toNumber(significand);
      if (exponent < 0) {
        f = f / get_PowersOfTen()[-exponent | 0];
      } else {
        f = f * get_PowersOfTen()[exponent];
      }
      var tmp0_3 = index;
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var value = isNegative ? -f : f;
      return bitwiseOr(shiftLeft(fromInt(tmp0_3), 32), bitwiseAnd(fromInt(toRawBits(value)), new Long(-1, 0)));
    }
    if (equalsLong(significand, new Long(0, 0))) {
      var tmp0_4 = index;
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var value_0 = isNegative ? -0.0 : 0.0;
      return bitwiseOr(shiftLeft(fromInt(tmp0_4), 32), bitwiseAnd(fromInt(toRawBits(value_0)), new Long(-1, 0)));
    }
    if (!(-126 <= exponent ? exponent <= 127 : false)) {
      var tmp0_5 = index;
      // Inline function 'kotlin.text.toFloat' call
      var this_30 = substring(s, start, index);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var value_1 = toDouble(this_30);
      return bitwiseOr(shiftLeft(fromInt(tmp0_5), 32), bitwiseAnd(fromInt(toRawBits(value_1)), new Long(-1, 0)));
    }
    // Inline function 'kotlin.ULong.toLong' call
    var this_31 = ULongArray__get_impl_pr71q9(get_Mantissa64(), exponent - -325 | 0);
    var significandFactor = _ULong___get_data__impl__fggpzb(this_31);
    var lz = countLeadingZeroBits(significand);
    significand = shiftLeft(significand, lz);
    // Inline function 'androidx.compose.ui.graphics.vector.fullMultiplicationHighBits' call
    var x = significand;
    var xLo = bitwiseAnd(x, new Long(-1, 0));
    var xHi = shiftRightUnsigned(x, 32);
    var yLo = bitwiseAnd(significandFactor, new Long(-1, 0));
    var yHi = shiftRightUnsigned(significandFactor, 32);
    var xTimesYHi = multiply(xHi, yHi);
    var xTimesYMid = multiply(xLo, yHi);
    var yTimesXMid = multiply(xHi, yLo);
    var xTimesYLo = multiply(xLo, yLo);
    var carry = add(add(yTimesXMid, shiftRightUnsigned(xTimesYLo, 32)), bitwiseAnd(xTimesYMid, new Long(-1, 0)));
    var upper = add(add(xTimesYHi, shiftRightUnsigned(carry, 32)), shiftRightUnsigned(xTimesYMid, 32));
    var upperBit = convertToInt(shiftRightUnsigned(upper, 63));
    var mantissa = shiftRightUnsigned(upper, upperBit + 9 | 0);
    lz = lz + (1 ^ upperBit) | 0;
    if (equalsLong(bitwiseAnd(upper, new Long(511, 0)), new Long(511, 0)) || (equalsLong(bitwiseAnd(upper, new Long(511, 0)), new Long(0, 0)) && equalsLong(bitwiseAnd(mantissa, new Long(3, 0)), new Long(1, 0)))) {
      var tmp0_6 = index;
      // Inline function 'kotlin.text.toFloat' call
      var this_32 = substring(s, start, index);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var value_2 = toDouble(this_32);
      return bitwiseOr(shiftLeft(fromInt(tmp0_6), 32), bitwiseAnd(fromInt(toRawBits(value_2)), new Long(-1, 0)));
    }
    // Inline function 'kotlin.Long.plus' call
    var this_33 = mantissa;
    mantissa = add(this_33, fromInt(1));
    mantissa = shiftRightUnsigned(mantissa, 1);
    if (compare(mantissa, new Long(0, 2097152)) >= 0) {
      mantissa = new Long(0, 1048576);
      lz = lz - 1 | 0;
    }
    mantissa = bitwiseAnd(mantissa, new Long(-1, -1048577));
    var tmp0_7 = new Long(217706, 0);
    // Inline function 'kotlin.Long.times' call
    var other_3 = exponent;
    var tmp$ret$52 = multiply(tmp0_7, fromInt(other_3));
    // Inline function 'kotlin.Long.plus' call
    var this_34 = shiftRight(tmp$ret$52, 16);
    // Inline function 'kotlin.Long.plus' call
    var this_35 = add(this_34, fromInt(1024));
    var adjustedExponent = add(this_35, fromInt(63));
    // Inline function 'kotlin.Long.minus' call
    var other_4 = lz;
    var realExponent = subtract(adjustedExponent, fromInt(other_4));
    if (compare(realExponent, new Long(1, 0)) < 0 || compare(realExponent, new Long(2046, 0)) > 0) {
      var tmp0_8 = index;
      // Inline function 'kotlin.text.toFloat' call
      var this_36 = substring(s, start, index);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var value_3 = toDouble(this_36);
      return bitwiseOr(shiftLeft(fromInt(tmp0_8), 32), bitwiseAnd(fromInt(toRawBits(value_3)), new Long(-1, 0)));
    }
    mantissa = bitwiseOr(mantissa, shiftLeft(realExponent, 52));
    mantissa = bitwiseOr(mantissa, isNegative ? new Long(0, -2147483648) : new Long(0, 0));
    var tmp0_9 = index;
    // Inline function 'androidx.compose.ui.util.doubleFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = mantissa;
    // Inline function 'androidx.compose.ui.graphics.vector.pack' call
    var value_4 = doubleFromBits(bits);
    return bitwiseOr(shiftLeft(fromInt(tmp0_9), 32), bitwiseAnd(fromInt(toRawBits(value_4)), new Long(-1, 0)));
  }
  var properties_initialized_FastFloatParser_kt_wcdbov;
  function _init_properties_FastFloatParser_kt__fk9z4j() {
    if (!properties_initialized_FastFloatParser_kt_wcdbov) {
      properties_initialized_FastFloatParser_kt_wcdbov = true;
      // Inline function 'kotlin.floatArrayOf' call
      PowersOfTen = new Float32Array([1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 1.0E7, 1.0E8, 1.0E9, 1.0E10]);
      // Inline function 'kotlin.ulongArrayOf' call
      Mantissa64 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(2118029704, -1513171909)), _ULong___init__impl__c78o9k(new Long(1573795306, -817723062)), _ULong___init__impl__c78o9k(new Long(2057363890, -2121689650)), _ULong___init__impl__c78o9k(new Long(424221215, -1578370238)), _ULong___init__impl__c78o9k(new Long(-1617207130, -899220974)), _ULong___init__impl__c78o9k(new Long(1199716560, -50284393)), _ULong___init__impl__c78o9k(new Long(-1934531710, -1642040482)), _ULong___init__impl__c78o9k(new Long(803060834, -978808778)), _ULong___init__impl__c78o9k(new Long(-1143657605, -149769149)), _ULong___init__impl__c78o9k(new Long(1432697645, -1704218454)), _ULong___init__impl__c78o9k(new Long(-356611592, -1056531244)), _ULong___init__impl__c78o9k(new Long(627977334, -246922230)), _ULong___init__impl__c78o9k(new Long(1466227658, -1764939130)), _ULong___init__impl__c78o9k(new Long(-314699076, -1132432089)), _ULong___init__impl__c78o9k(new Long(-393373845, -341798287)), _ULong___init__impl__c78o9k(new Long(827883171, -1824236665)), _ULong___init__impl__c78o9k(new Long(-38887860, -1206554008)), _ULong___init__impl__c78o9k(new Long(1025131999, -434450685)), _ULong___init__impl__c78o9k(new Long(103836587, -1882144414)), _ULong___init__impl__c78o9k(new Long(-2017687914, -1278938694)), _ULong___init__impl__c78o9k(new Long(699115580, -524931543)), _ULong___init__impl__c78o9k(new Long(-1173665499, -1938694951)), _ULong___init__impl__c78o9k(new Long(680401775, -1349626864)), _ULong___init__impl__c78o9k(new Long(850502218, -613291756)), _ULong___init__impl__c78o9k(new Long(-1615919762, -1993920084)), _ULong___init__impl__c78o9k(new Long(-946157878, -1418658281)), _ULong___init__impl__c78o9k(new Long(-1182697347, -699581027)), _ULong___init__impl__c78o9k(new Long(-1812927666, -2047850878)), _ULong___init__impl__c78o9k(new Long(955065889, -1486071773)), _ULong___init__impl__c78o9k(new Long(120090538, -783847892)), _ULong___init__impl__c78o9k(new Long(-2072427062, -2100517669)), _ULong___init__impl__c78o9k(new Long(1704433468, -1551905262)), _ULong___init__impl__c78o9k(new Long(-16941812, -866139754)), _ULong___init__impl__c78o9k(new Long(-1094919089, -8932868)), _ULong___init__impl__c78o9k(new Long(-147453519, -1616195779)), _ULong___init__impl__c78o9k(new Long(1963166749, -946502899)), _ULong___init__impl__c78o9k(new Long(-767267035, -109386800)), _ULong___init__impl__c78o9k(new Long(-2090154633, -1678979486)), _ULong___init__impl__c78o9k(new Long(608532181, -1024982533)), _ULong___init__impl__c78o9k(new Long(-313076598, -207486343)), _ULong___init__impl__c78o9k(new Long(878068950, -1740291700)), _ULong___init__impl__c78o9k(new Long(1097586188, -1101622801)), _ULong___init__impl__c78o9k(new Long(298240911, -303286677)), _ULong___init__impl__c78o9k(new Long(-350470343, -1800166910)), _ULong___init__impl__c78o9k(new Long(-1511829753, -1176466813)), _ULong___init__impl__c78o9k(new Long(-1889787191, -396841692)), _ULong___init__impl__c78o9k(new Long(-644246082, -1858638794)), _ULong___init__impl__c78o9k(new Long(-1879049427, -1249556668)), _ULong___init__impl__c78o9k(new Long(-1275069959, -488204011)), _ULong___init__impl__c78o9k(new Long(-1870660549, -1915740243)), _ULong___init__impl__c78o9k(new Long(-190842038, -1320933480)), _ULong___init__impl__c78o9k(new Long(835189277, -577425025)), _ULong___init__impl__c78o9k(new Long(2132606034, -1971503377)), _ULong___init__impl__c78o9k(new Long(1592015718, -1390637397)), _ULong___init__impl__c78o9k(new Long(916277824, -664554922)), _ULong___init__impl__c78o9k(new Long(-501068184, -2025959563)), _ULong___init__impl__c78o9k(new Long(1521148418, -1458707629)), _ULong___init__impl__c78o9k(new Long(827693699, -749642712)), _ULong___init__impl__c78o9k(new Long(517308561, -2079139431)), _ULong___init__impl__c78o9k(new Long(1720377526, -1525182465)), _ULong___init__impl__c78o9k(new Long(1076730083, -832736257)), _ULong___init__impl__c78o9k(new Long(-2011398258, -2131072897)), _ULong___init__impl__c78o9k(new Long(1780719474, -1590099297)), _ULong___init__impl__c78o9k(new Long(1152157518, -913882297)), _ULong___init__impl__c78o9k(new Long(366455074, -68611047)), _ULong___init__impl__c78o9k(new Long(-1381578315, -1653494641)), _ULong___init__impl__c78o9k(new Long(-1726972894, -993126477)), _ULong___init__impl__c78o9k(new Long(2136251179, -167666272)), _ULong___init__impl__c78o9k(new Long(1335156987, -1715404156)), _ULong___init__impl__c78o9k(new Long(1668946233, -1070513371)), _ULong___init__impl__c78o9k(new Long(-1135042680, -264399890)), _ULong___init__impl__c78o9k(new Long(901211061, -1775862667)), _ULong___init__impl__c78o9k(new Long(-2094711646, -1146086510)), _ULong___init__impl__c78o9k(new Long(602835915, -358866313)), _ULong___init__impl__c78o9k(new Long(1987385183, -1834904182)), _ULong___init__impl__c78o9k(new Long(336747830, -1219888403)), _ULong___init__impl__c78o9k(new Long(1494676612, -451118680)), _ULong___init__impl__c78o9k(new Long(934172882, -1892561911)), _ULong___init__impl__c78o9k(new Long(-2053509369, -1291960565)), _ULong___init__impl__c78o9k(new Long(1728080585, -541208882)), _ULong___init__impl__c78o9k(new Long(6308541, -1948868287)), _ULong___init__impl__c78o9k(new Long(1081627501, -1362343535)), _ULong___init__impl__c78o9k(new Long(-1869191096, -629187595)), _ULong___init__impl__c78o9k(new Long(2052981037, -2003854983)), _ULong___init__impl__c78o9k(new Long(-654999176, -1431076905)), _ULong___init__impl__c78o9k(new Long(-818748970, -715104307)), _ULong___init__impl__c78o9k(new Long(-1585459930, -2057552928)), _ULong___init__impl__c78o9k(new Long(-908083089, -1498199336)), _ULong___init__impl__c78o9k(new Long(-61362037, -799007346)), _ULong___init__impl__c78o9k(new Long(1572261463, -2109992327)), _ULong___init__impl__c78o9k(new Long(-1255898643, -1563748585)), _ULong___init__impl__c78o9k(new Long(-1569873304, -880943907)), _ULong___init__impl__c78o9k(new Long(185142018, -27438059)), _ULong___init__impl__c78o9k(new Long(652584673, -1627761523)), _ULong___init__impl__c78o9k(new Long(1889472666, -960960080)), _ULong___init__impl__c78o9k(new Long(-1933126464, -127458276)), _ULong___init__impl__c78o9k(new Long(-671333128, -1690274159)), _ULong___init__impl__c78o9k(new Long(1308317238, -1039100874)), _ULong___init__impl__c78o9k(new Long(-512087100, -225134269)), _ULong___init__impl__c78o9k(new Long(1827429210, -1751321654)), _ULong___init__impl__c78o9k(new Long(136802865, -1115410243)), _ULong___init__impl__c78o9k(new Long(1244745405, -320520980)), _ULong___init__impl__c78o9k(new Long(-1369517770, -1810938349)), _ULong___init__impl__c78o9k(new Long(-1711897212, -1189931112)), _ULong___init__impl__c78o9k(new Long(-1066129691, -413672066)), _ULong___init__impl__c78o9k(new Long(944281679, -1869157777)), _ULong___init__impl__c78o9k(new Long(106610275, -1262705397)), _ULong___init__impl__c78o9k(new Long(-940478981, -504639923)), _ULong___init__impl__c78o9k(new Long(-1661541187, -1926012688)), _ULong___init__impl__c78o9k(new Long(-1003184660, -1333774036)), _ULong___init__impl__c78o9k(new Long(-180239001, -593475721)), _ULong___init__impl__c78o9k(new Long(-112649376, -1981535062)), _ULong___init__impl__c78o9k(new Long(-1214553543, -1403177003)), _ULong___init__impl__c78o9k(new Long(629291719, -680229429)), _ULong___init__impl__c78o9k(new Long(-143563588, -2035756130)), _ULong___init__impl__c78o9k(new Long(-1253196309, -1470953338)), _ULong___init__impl__c78o9k(new Long(1654730086, -764949848)), _ULong___init__impl__c78o9k(new Long(1034206304, -2088706391)), _ULong___init__impl__c78o9k(new Long(-1928467592, -1537141165)), _ULong___init__impl__c78o9k(new Long(1884382806, -847684632)), _ULong___init__impl__c78o9k(new Long(1177739254, -2140415631)), _ULong___init__impl__c78o9k(new Long(-1749051405, -1601777715)), _ULong___init__impl__c78o9k(new Long(-38830608, -928480320)), _ULong___init__impl__c78o9k(new Long(1025203564, -86858575)), _ULong___init__impl__c78o9k(new Long(-969860509, -1664899346)), _ULong___init__impl__c78o9k(new Long(2008899836, -1007382358)), _ULong___init__impl__c78o9k(new Long(363641147, -185486123)), _ULong___init__impl__c78o9k(new Long(764146629, -1726541563)), _ULong___init__impl__c78o9k(new Long(2028925110, -1084435130)), _ULong___init__impl__c78o9k(new Long(388672740, -281802088)), _ULong___init__impl__c78o9k(new Long(242920462, -1786739041)), _ULong___init__impl__c78o9k(new Long(-770091246, -1159681978)), _ULong___init__impl__c78o9k(new Long(-2036355881, -375860648)), _ULong___init__impl__c78o9k(new Long(1411632134, -1845525641)), _ULong___init__impl__c78o9k(new Long(690798344, -1233165227)), _ULong___init__impl__c78o9k(new Long(1937239754, -467714710)), _ULong___init__impl__c78o9k(new Long(-2010450626, -1902934430)), _ULong___init__impl__c78o9k(new Long(708162189, -1304926213)), _ULong___init__impl__c78o9k(new Long(-188539087, -557415943)), _ULong___init__impl__c78o9k(new Long(955904894, -1958997700)), _ULong___init__impl__c78o9k(new Long(1194881118, -1375005301)), _ULong___init__impl__c78o9k(new Long(419859574, -645014802)), _ULong___init__impl__c78o9k(new Long(-811329591, -2013746988)), _ULong___init__impl__c78o9k(new Long(59579836, -1443441910)), _ULong___init__impl__c78o9k(new Long(-2073008853, -730560564)), _ULong___init__impl__c78o9k(new Long(-758759621, -2067213089)), _ULong___init__impl__c78o9k(new Long(-948449527, -1510274537)), _ULong___init__impl__c78o9k(new Long(-1185561908, -814101347)), _ULong___init__impl__c78o9k(new Long(-1814718017, -2119426078)), _ULong___init__impl__c78o9k(new Long(952827951, -1575540773)), _ULong___init__impl__c78o9k(new Long(117293115, -895684142)), _ULong___init__impl__c78o9k(new Long(-2000867254, -45863354)), _ULong___init__impl__c78o9k(new Long(360070702, -1639277332)), _ULong___init__impl__c78o9k(new Long(450088378, -975354841)), _ULong___init__impl__c78o9k(new Long(-511131352, -145451728)), _ULong___init__impl__c78o9k(new Long(-1930069831, -1701520066)), _ULong___init__impl__c78o9k(new Long(808638183, -1053158258)), _ULong___init__impl__c78o9k(new Long(-1136685919, -242705999)), _ULong___init__impl__c78o9k(new Long(363313125, -1762303985)), _ULong___init__impl__c78o9k(new Long(-619600418, -1129138158)), _ULong___init__impl__c78o9k(new Long(-1848242346, -337680873)), _ULong___init__impl__c78o9k(new Long(-1155151467, -1821663282)), _ULong___init__impl__c78o9k(new Long(1777286139, -1203337278)), _ULong___init__impl__c78o9k(new Long(74124026, -430429773)), _ULong___init__impl__c78o9k(new Long(-490543396, -1879631345)), _ULong___init__impl__c78o9k(new Long(-613179245, -1275797357)), _ULong___init__impl__c78o9k(new Long(-766474056, -521004872)), _ULong___init__impl__c78o9k(new Long(-2089659021, -1936240781)), _ULong___init__impl__c78o9k(new Long(1682893519, -1346559152)), _ULong___init__impl__c78o9k(new Long(2103616899, -609457116)), _ULong___init__impl__c78o9k(new Long(-832723086, -1991523434)), _ULong___init__impl__c78o9k(new Long(-2114645681, -1415662468)), _ULong___init__impl__c78o9k(new Long(-1569565278, -695836261)), _ULong___init__impl__c78o9k(new Long(1166505349, -2045510399)), _ULong___init__impl__c78o9k(new Long(-1763093785, -1483146175)), _ULong___init__impl__c78o9k(new Long(-56383584, -780190895)), _ULong___init__impl__c78o9k(new Long(1038502084, -2098232045)), _ULong___init__impl__c78o9k(new Long(224385781, -1549048232)), _ULong___init__impl__c78o9k(new Long(280482227, -862568466)), _ULong___init__impl__c78o9k(new Long(-1796880865, -4468759)), _ULong___init__impl__c78o9k(new Long(-49308717, -1613405711)), _ULong___init__impl__c78o9k(new Long(2085847752, -943015314)), _ULong___init__impl__c78o9k(new Long(459826043, -105027318)), _ULong___init__impl__c78o9k(new Long(1361133101, -1676254810)), _ULong___init__impl__c78o9k(new Long(-446067272, -1021576689)), _ULong___init__impl__c78o9k(new Long(-557584090, -203229037)), _ULong___init__impl__c78o9k(new Long(1798993591, -1737630884)), _ULong___init__impl__c78o9k(new Long(-2046225307, -1098296781)), _ULong___init__impl__c78o9k(new Long(1737185663, -299129152)), _ULong___init__impl__c78o9k(new Long(1085741039, -1797568456)), _ULong___init__impl__c78o9k(new Long(1357176299, -1173218746)), _ULong___init__impl__c78o9k(new Long(-451013274, -392781609)), _ULong___init__impl__c78o9k(new Long(-281883296, -1856101242)), _ULong___init__impl__c78o9k(new Long(-1426095944, -1246384728)), _ULong___init__impl__c78o9k(new Long(-708878106, -484239086)), _ULong___init__impl__c78o9k(new Long(-979919729, -1913262165)), _ULong___init__impl__c78o9k(new Long(-1224899661, -1317835882)), _ULong___init__impl__c78o9k(new Long(1690100896, -573553028)), _ULong___init__impl__c78o9k(new Long(-1091170588, -1969083379)), _ULong___init__impl__c78o9k(new Long(783520413, -1387612399)), _ULong___init__impl__c78o9k(new Long(2053142340, -660773675)), _ULong___init__impl__c78o9k(new Long(1820084875, -2023596283)), _ULong___init__impl__c78o9k(new Long(-946119379, -1455753530)), _ULong___init__impl__c78o9k(new Long(2038576249, -745950088)), _ULong___init__impl__c78o9k(new Long(1274110155, -2076831541)), _ULong___init__impl__c78o9k(new Long(518895870, -1522297602)), _ULong___init__impl__c78o9k(new Long(-1498863810, -829130179)), _ULong___init__impl__c78o9k(new Long(-2010531705, -2128819098)), _ULong___init__impl__c78o9k(new Long(708060840, -1587282048)), _ULong___init__impl__c78o9k(new Long(885076050, -910360736)), _ULong___init__impl__c78o9k(new Long(1106345063, -64209096)), _ULong___init__impl__c78o9k(new Long(691465664, -1650743421)), _ULong___init__impl__c78o9k(new Long(-209409743, -989687453)), _ULong___init__impl__c78o9k(new Long(-261762179, -163367492)), _ULong___init__impl__c78o9k(new Long(373269550, -1712717418)), _ULong___init__impl__c78o9k(new Long(-1680896711, -1067154949)), _ULong___init__impl__c78o9k(new Long(-2101120888, -260201862)), _ULong___init__impl__c78o9k(new Long(-1850071467, -1773238900)), _ULong___init__impl__c78o9k(new Long(-1238847510, -1142806801)), _ULong___init__impl__c78o9k(new Long(-1548559387, -354766677)), _ULong___init__impl__c78o9k(new Long(1179634031, -1832341909)), _ULong___init__impl__c78o9k(new Long(400800715, -1216685562)), _ULong___init__impl__c78o9k(new Long(-1646482755, -447115129)), _ULong___init__impl__c78o9k(new Long(-1029051722, -1890059692)), _ULong___init__impl__c78o9k(new Long(-212572828, -1288832791)), _ULong___init__impl__c78o9k(new Long(1881767613, -537299164)), _ULong___init__impl__c78o9k(new Long(-971378890, -1946424714)), _ULong___init__impl__c78o9k(new Long(2007001859, -1359289068)), _ULong___init__impl__c78o9k(new Long(-1786214972, -625369511)), _ULong___init__impl__c78o9k(new Long(-42642533, -2001468681)), _ULong___init__impl__c78o9k(new Long(-53303167, -1428094027)), _ULong___init__impl__c78o9k(new Long(2080854690, -711375709)), _ULong___init__impl__c78o9k(new Long(763663269, -2055222554)), _ULong___init__impl__c78o9k(new Long(-1192904562, -1495286369)), _ULong___init__impl__c78o9k(new Long(-1491130702, -795366137)), _ULong___init__impl__c78o9k(new Long(-931956689, -2107716572)), _ULong___init__impl__c78o9k(new Long(-91204037, -1560903891)), _ULong___init__impl__c78o9k(new Long(2033478602, -877388039)), _ULong___init__impl__c78o9k(new Long(-679377220, -22993225)), _ULong___init__impl__c78o9k(new Long(-424610762, -1624983502)), _ULong___init__impl__c78o9k(new Long(-1604505277, -957487553)), _ULong___init__impl__c78o9k(new Long(-2005631596, -123117617)), _ULong___init__impl__c78o9k(new Long(-1253519748, -1687561247)), _ULong___init__impl__c78o9k(new Long(580583963, -1035709734)), _ULong___init__impl__c78o9k(new Long(-1421753694, -220895344)), _ULong___init__impl__c78o9k(new Long(1795758501, -1748672326)), _ULong___init__impl__c78o9k(new Long(97214479, -1112098583)), _ULong___init__impl__c78o9k(new Long(1195259923, -316381405)), _ULong___init__impl__c78o9k(new Long(210166539, -1808351114)), _ULong___init__impl__c78o9k(new Long(-1884775474, -1186697069)), _ULong___init__impl__c78o9k(new Long(1938997954, -409629512)), _ULong___init__impl__c78o9k(new Long(1211873721, -1866631181)), _ULong___init__impl__c78o9k(new Long(441100328, -1259547152)), _ULong___init__impl__c78o9k(new Long(551375410, -500692116)), _ULong___init__impl__c78o9k(new Long(-1802874017, -1923545309)), _ULong___init__impl__c78o9k(new Long(2041374775, -1330689812)), _ULong___init__impl__c78o9k(new Long(-1743248828, -589620441)), _ULong___init__impl__c78o9k(new Long(-1089530517, -1979125512)), _ULong___init__impl__c78o9k(new Long(-288171323, -1400165066)), _ULong___init__impl__c78o9k(new Long(-1433955977, -676464508)), _ULong___init__impl__c78o9k(new Long(-359351574, -2033403054)), _ULong___init__impl__c78o9k(new Long(-1522931291, -1468011993)), _ULong___init__impl__c78o9k(new Long(-1903664114, -761273167)), _ULong___init__impl__c78o9k(new Long(-116048247, -2086408466)), _ULong___init__impl__c78o9k(new Long(-1218802133, -1534268758)), _ULong___init__impl__c78o9k(new Long(1697722806, -844094123)), _ULong___init__impl__c78o9k(new Long(1597947665, -2138171563)), _ULong___init__impl__c78o9k(new Long(-1223790890, -1598972630)), _ULong___init__impl__c78o9k(new Long(1691486859, -924973963)), _ULong___init__impl__c78o9k(new Long(-1106866898, -82475630)), _ULong___init__impl__c78o9k(new Long(-1228662723, -1662160005)), _ULong___init__impl__c78o9k(new Long(-1535828404, -1003958182)), _ULong___init__impl__c78o9k(new Long(1301439967, -181205903)), _ULong___init__impl__c78o9k(new Long(-797212757, -1723866426)), _ULong___init__impl__c78o9k(new Long(-2070257770, -1081091208)), _ULong___init__impl__c78o9k(new Long(-1514080388, -277622186)), _ULong___init__impl__c78o9k(new Long(664312493, -1784126602)), _ULong___init__impl__c78o9k(new Long(-1317093031, -1156416429)), _ULong___init__impl__c78o9k(new Long(-1646366289, -371778712)), _ULong___init__impl__c78o9k(new Long(1655375629, -1842974431)), _ULong___init__impl__c78o9k(new Long(-1152005935, -1229976215)), _ULong___init__impl__c78o9k(new Long(707476229, -463728444)), _ULong___init__impl__c78o9k(new Long(-1705311005, -1900443014)), _ULong___init__impl__c78o9k(new Long(1089586716, -1301811943)), _ULong___init__impl__c78o9k(new Long(-1859242077, -553523105)), _ULong___init__impl__c78o9k(new Long(-1162026298, -1956564677)), _ULong___init__impl__c78o9k(new Long(-1452532873, -1371964022)), _ULong___init__impl__c78o9k(new Long(1405559381, -641213203)), _ULong___init__impl__c78o9k(new Long(1415345525, -2011370988)), _ULong___init__impl__c78o9k(new Long(1769181906, -1440471911)), _ULong___init__impl__c78o9k(new Long(-1009748089, -726848065)), _ULong___init__impl__c78o9k(new Long(-631092556, -2064892777)), _ULong___init__impl__c78o9k(new Long(-788865695, -1507374147)), _ULong___init__impl__c78o9k(new Long(1161401530, -810475859)), _ULong___init__impl__c78o9k(new Long(1262746868, -2117160148)), _ULong___init__impl__c78o9k(new Long(1578433585, -1572708361)), _ULong___init__impl__c78o9k(new Long(899300158, -892143627)), _ULong___init__impl__c78o9k(new Long(-2097100275, -41437710)), _ULong___init__impl__c78o9k(new Long(-1847558584, -1636511305)), _ULong___init__impl__c78o9k(new Long(1985519066, -971897307)), _ULong___init__impl__c78o9k(new Long(-739326639, -141129810)), _ULong___init__impl__c78o9k(new Long(1148533586, -1698818867)), _ULong___init__impl__c78o9k(new Long(-1785558489, -1049781760)), _ULong___init__impl__c78o9k(new Long(-1158206287, -238485376)), _ULong___init__impl__c78o9k(new Long(1960475630, -1759666096)), _ULong___init__impl__c78o9k(new Long(-1844372758, -1125840796)), _ULong___init__impl__c78o9k(new Long(-1231724123, -333559171)), _ULong___init__impl__c78o9k(new Long(-1843569401, -1819087218)), _ULong___init__impl__c78o9k(new Long(916763721, -1200117198)), _ULong___init__impl__c78o9k(new Long(-1001528997, -426404674)), _ULong___init__impl__c78o9k(new Long(984657113, -1877115657)), _ULong___init__impl__c78o9k(new Long(157079567, -1272652747)), _ULong___init__impl__c78o9k(new Long(1270091283, -517074110)), _ULong___init__impl__c78o9k(new Long(1867548875, -1933784055)), _ULong___init__impl__c78o9k(new Long(-886789378, -1343488245)), _ULong___init__impl__c78o9k(new Long(-1108486722, -605618482)), _ULong___init__impl__c78o9k(new Long(917808535, -1989124287)), _ULong___init__impl__c78o9k(new Long(-2073964804, -1412663535)), _ULong___init__impl__c78o9k(new Long(-444972356, -692087595)), _ULong___init__impl__c78o9k(new Long(-1351849547, -2043167483)), _ULong___init__impl__c78o9k(new Long(457671715, -1480217529)), _ULong___init__impl__c78o9k(new Long(-501652181, -776530088)), _ULong___init__impl__c78o9k(new Long(-1924145349, -2095944041)), _ULong___init__impl__c78o9k(new Long(1889785610, -1546188227)), _ULong___init__impl__c78o9k(new Long(-858993460, -858993460)), _ULong___init__impl__c78o9k(new Long(0, -2147483648)), _ULong___init__impl__c78o9k(new Long(0, -1610612736)), _ULong___init__impl__c78o9k(new Long(0, -939524096)), _ULong___init__impl__c78o9k(new Long(0, -100663296)), _ULong___init__impl__c78o9k(new Long(0, -1673527296)), _ULong___init__impl__c78o9k(new Long(0, -1018167296)), _ULong___init__impl__c78o9k(new Long(0, -198967296)), _ULong___init__impl__c78o9k(new Long(0, -1734967296)), _ULong___init__impl__c78o9k(new Long(0, -1094967296)), _ULong___init__impl__c78o9k(new Long(0, -294967296)), _ULong___init__impl__c78o9k(new Long(0, -1794967296)), _ULong___init__impl__c78o9k(new Long(0, -1169967296)), _ULong___init__impl__c78o9k(new Long(0, -388717296)), _ULong___init__impl__c78o9k(new Long(0, -1853561046)), _ULong___init__impl__c78o9k(new Long(-2147483648, -1243209484)), _ULong___init__impl__c78o9k(new Long(-1610612736, -480270031)), _ULong___init__impl__c78o9k(new Long(67108864, -1910781505)), _ULong___init__impl__c78o9k(new Long(-989855744, -1314735058)), _ULong___init__impl__c78o9k(new Long(1983905792, -569676998)), _ULong___init__impl__c78o9k(new Long(-1981284352, -1966660860)), _ULong___init__impl__c78o9k(new Long(-1402863616, -1384584251)), _ULong___init__impl__c78o9k(new Long(393904128, -656988489)), _ULong___init__impl__c78o9k(new Long(1856802816, -2021230542)), _ULong___init__impl__c78o9k(new Long(173519872, -1452796353)), _ULong___init__impl__c78o9k(new Long(-856841984, -742253618)), _ULong___init__impl__c78o9k(new Long(1075086496, -2074521247)), _ULong___init__impl__c78o9k(new Long(-1877367352, -1519409735)), _ULong___init__impl__c78o9k(new Long(-199225542, -825520345)), _ULong___init__impl__c78o9k(new Long(-124515964, -2126562952)), _ULong___init__impl__c78o9k(new Long(918096869, -1584461865)), _ULong___init__impl__c78o9k(new Long(73879262, -906835507)), _ULong___init__impl__c78o9k(new Long(1166090902, -59802560)), _ULong___init__impl__c78o9k(new Long(728806813, -1647989336)), _ULong___init__impl__c78o9k(new Long(911008517, -986244846)), _ULong___init__impl__c78o9k(new Long(-1008723002, -159064234)), _ULong___init__impl__c78o9k(new Long(980160860, -1710027882)), _ULong___init__impl__c78o9k(new Long(-922282573, -1063793029)), _ULong___init__impl__c78o9k(new Long(-1152853216, -255999462)), _ULong___init__impl__c78o9k(new Long(-1257404172, -1770612400)), _ULong___init__impl__c78o9k(new Long(-498013391, -1139523676)), _ULong___init__impl__c78o9k(new Long(451225085, -350662770)), _ULong___init__impl__c78o9k(new Long(-791726146, -1829776968)), _ULong___init__impl__c78o9k(new Long(84084141, -1213479385)), _ULong___init__impl__c78o9k(new Long(-968636647, -443107408)), _ULong___init__impl__c78o9k(new Long(2078956655, -1887554866)), _ULong___init__impl__c78o9k(new Long(451212171, -1285701758)), _ULong___init__impl__c78o9k(new Long(-1583468434, -533385374)), _ULong___init__impl__c78o9k(new Long(-1526538683, -1943978595)), _ULong___init__impl__c78o9k(new Long(239310294, -1356231419)), _ULong___init__impl__c78o9k(new Long(1372879692, -621547450)), _ULong___init__impl__c78o9k(new Long(-215692017, -1999079893)), _ULong___init__impl__c78o9k(new Long(-269615021, -1425108042)), _ULong___init__impl__c78o9k(new Long(-1410760600, -707643228)), _ULong___init__impl__c78o9k(new Long(-344854463, -2052889754)), _ULong___init__impl__c78o9k(new Long(-1504809903, -1492370368)), _ULong___init__impl__c78o9k(new Long(-807270555, -791721136)), _ULong___init__impl__c78o9k(new Long(-2115156833, -2105438446)), _ULong___init__impl__c78o9k(new Long(577279431, -1558056233)), _ULong___init__impl__c78o9k(new Long(-352142535, -873828468)), _ULong___init__impl__c78o9k(new Long(633563656, -18543760)), _ULong___init__impl__c78o9k(new Long(395977285, -1622202586)), _ULong___init__impl__c78o9k(new Long(-1652512042, -954011409)), _ULong___init__impl__c78o9k(new Long(-2065640053, -118772437)), _ULong___init__impl__c78o9k(new Long(856458615, -1684845509)), _ULong___init__impl__c78o9k(new Long(-3168555, -1032315063)), _ULong___init__impl__c78o9k(new Long(2143522954, -216652004)), _ULong___init__impl__c78o9k(new Long(-807781802, -1746020239)), _ULong___init__impl__c78o9k(new Long(1137756396, -1108783474)), _ULong___init__impl__c78o9k(new Long(-725288153, -312237519)), _ULong___init__impl__c78o9k(new Long(620436728, -1805761185)), _ULong___init__impl__c78o9k(new Long(-298195914, -1183459658)), _ULong___init__impl__c78o9k(new Long(-1446486716, -405582748)), _ULong___init__impl__c78o9k(new Long(-367183286, -1864101954)), _ULong___init__impl__c78o9k(new Long(-1532720931, -1256385618)), _ULong___init__impl__c78o9k(new Long(1305324308, -496740198)), _ULong___init__impl__c78o9k(new Long(1889569516, -1921075360)), _ULong___init__impl__c78o9k(new Long(-1933005400, -1327602376)), _ULong___init__impl__c78o9k(new Long(-1342514926, -585761146)), _ULong___init__impl__c78o9k(new Long(771540907, -1976713452)), _ULong___init__impl__c78o9k(new Long(964426134, -1397149991)), _ULong___init__impl__c78o9k(new Long(-2015692805, -672695665)), _ULong___init__impl__c78o9k(new Long(-1259808003, -2031047527)), _ULong___init__impl__c78o9k(new Long(572723644, -1465067584)), _ULong___init__impl__c78o9k(new Long(715904555, -757592656)), _ULong___init__impl__c78o9k(new Long(447440347, -2084108146)), _ULong___init__impl__c78o9k(new Long(-1588183214, -1531393359)), _ULong___init__impl__c78o9k(new Long(162254630, -840499874)), _ULong___init__impl__c78o9k(new Long(-972332680, -2135925158)), _ULong___init__impl__c78o9k(new Long(2005809622, -1596164623)), _ULong___init__impl__c78o9k(new Long(-713963444, -921463955)), _ULong___init__impl__c78o9k(new Long(1255029343, -78088119)), _ULong___init__impl__c78o9k(new Long(-826219397, -1659417811)), _ULong___init__impl__c78o9k(new Long(1114709402, -1000530439)), _ULong___init__impl__c78o9k(new Long(-1827838720, -176921225)), _ULong___init__impl__c78o9k(new Long(-1142399200, -1721188502)), _ULong___init__impl__c78o9k(new Long(1793226472, -1077743803)), _ULong___init__impl__c78o9k(new Long(-979692382, -273437930)), _ULong___init__impl__c78o9k(new Long(998304997, -1781511442)), _ULong___init__impl__c78o9k(new Long(-899602401, -1153147479)), _ULong___init__impl__c78o9k(new Long(1022980646, -367692524)), _ULong___init__impl__c78o9k(new Long(-1508120744, -1840420564)), _ULong___init__impl__c78o9k(new Long(-811409106, -1226783881)), _ULong___init__impl__c78o9k(new Long(-1014261382, -459738027)), _ULong___init__impl__c78o9k(new Long(-1707655188, -1897949003)), _ULong___init__impl__c78o9k(new Long(12914663, -1298694429)), _ULong___init__impl__c78o9k(new Long(-1057598495, -549626213)), _ULong___init__impl__c78o9k(new Long(1486484588, -1954129119)), _ULong___init__impl__c78o9k(new Long(-1363119737, -1368919575)), _ULong___init__impl__c78o9k(new Long(443583977, -637407644)), _ULong___init__impl__c78o9k(new Long(-1870243662, -2008992514)), _ULong___init__impl__c78o9k(new Long(883420894, -1437498818)), _ULong___init__impl__c78o9k(new Long(-1043207530, -723131699)), _ULong___init__impl__c78o9k(new Long(-1725746530, -2062570048)), _ULong___init__impl__c78o9k(new Long(-1083441339, -1504470736)), _ULong___init__impl__c78o9k(new Long(-280559850, -806846596)), _ULong___init__impl__c78o9k(new Long(361521006, -2114891858)), _ULong___init__impl__c78o9k(new Long(-1695582391, -1569872999)), _ULong___init__impl__c78o9k(new Long(28005660, -888599424)), _ULong___init__impl__c78o9k(new Long(35007075, -37007456)), _ULong___init__impl__c78o9k(new Long(21879422, -1633742396)), _ULong___init__impl__c78o9k(new Long(27349277, -968436171)), _ULong___init__impl__c78o9k(new Long(1107928421, -136803390)), _ULong___init__impl__c78o9k(new Long(1766197087, -1696114855)), _ULong___init__impl__c78o9k(new Long(-1013479113, -1046401745)), _ULong___init__impl__c78o9k(new Long(-1266848892, -234260357)), _ULong___init__impl__c78o9k(new Long(1355703090, -1757025459)), _ULong___init__impl__c78o9k(new Long(-1526596609, -1122540000)), _ULong___init__impl__c78o9k(new Long(-834503937, -329433176)), _ULong___init__impl__c78o9k(new Long(-2132177697, -1816508471)), _ULong___init__impl__c78o9k(new Long(-517738473, -1196893765)), _ULong___init__impl__c78o9k(new Long(-647173091, -422375382)), _ULong___init__impl__c78o9k(new Long(-941354094, -1874597350)), _ULong___init__impl__c78o9k(new Long(2044532855, -1269504863)), _ULong___init__impl__c78o9k(new Long(-665559404, -513139255)), _ULong___init__impl__c78o9k(new Long(657767197, -1931324770)), _ULong___init__impl__c78o9k(new Long(-1325274652, -1340414139)), _ULong___init__impl__c78o9k(new Long(490890333, -601775849)), _ULong___init__impl__c78o9k(new Long(1917419194, -1986722642)), _ULong___init__impl__c78o9k(new Long(249290345, -1409661478)), _ULong___init__impl__c78o9k(new Long(-1835870717, -688335024)), _ULong___init__impl__c78o9k(new Long(1536935362, -2040822126)), _ULong___init__impl__c78o9k(new Long(-226314446, -1477285834)), _ULong___init__impl__c78o9k(new Long(-1356634881, -772865468)), _ULong___init__impl__c78o9k(new Long(-311025889, -2093653654)), _ULong___init__impl__c78o9k(new Long(-1462524185, -1543325243)), _ULong___init__impl__c78o9k(new Long(319328417, -855414729)), _ULong___init__impl__c78o9k(new Long(1810192996, -2145246942)), _ULong___init__impl__c78o9k(new Long(115257597, -1607816853)), _ULong___init__impl__c78o9k(new Long(-929669827, -936029243)), _ULong___init__impl__c78o9k(new Long(985396364, -96294729)), _ULong___init__impl__c78o9k(new Long(-2068481833, -1670796942)), _ULong___init__impl__c78o9k(new Long(635623181, -1014754353)), _ULong___init__impl__c78o9k(new Long(-279212847, -194701118)), _ULong___init__impl__c78o9k(new Long(-711378942, -1732300935)), _ULong___init__impl__c78o9k(new Long(1258259971, -1091634344)), _ULong___init__impl__c78o9k(new Long(1572824964, -290801106)), _ULong___init__impl__c78o9k(new Long(-90726222, -1792363428)), _ULong___init__impl__c78o9k(new Long(960334047, -1166712460)), _ULong___init__impl__c78o9k(new Long(1200417559, -384648751)), _ULong___init__impl__c78o9k(new Long(-860351762, -1851018206)), _ULong___init__impl__c78o9k(new Long(2145785770, -1240030933)), _ULong___init__impl__c78o9k(new Long(1608490388, -476296842)), _ULong___init__impl__c78o9k(new Long(-68435331, -1908298263)), _ULong___init__impl__c78o9k(new Long(2061939484, -1311631004)), _ULong___init__impl__c78o9k(new Long(-1717542941, -565796931)), _ULong___init__impl__c78o9k(new Long(-2147206162, -1964235818)), _ULong___init__impl__c78o9k(new Long(537217769, -1381552948)), _ULong___init__impl__c78o9k(new Long(671522212, -653199361)), _ULong___init__impl__c78o9k(new Long(2030314118, -2018862337)), _ULong___init__impl__c78o9k(new Long(1464150824, -1449836097)), _ULong___init__impl__c78o9k(new Long(756446706, -738553297)), _ULong___init__impl__c78o9k(new Long(2083391927, -2072208547)), _ULong___init__impl__c78o9k(new Long(-616985563, -1516518860)), _ULong___init__impl__c78o9k(new Long(302509870, -821906750)), _ULong___init__impl__c78o9k(new Long(1262810493, -2124304455)), _ULong___init__impl__c78o9k(new Long(-1642712356, -1581638745)), _ULong___init__impl__c78o9k(new Long(-2053390445, -903306607)), _ULong___init__impl__c78o9k(new Long(-419254408, -55391435)), _ULong___init__impl__c78o9k(new Long(-1335775829, -1645232383)), _ULong___init__impl__c78o9k(new Long(477763862, -982798654)), _ULong___init__impl__c78o9k(new Long(-1550278821, -154756494)), _ULong___init__impl__c78o9k(new Long(-1505795175, -1707335545)), _ULong___init__impl__c78o9k(new Long(-1882243969, -1060427607)), _ULong___init__impl__c78o9k(new Long(-205321313, -251792685)), _ULong___init__impl__c78o9k(new Long(2019157827, -1767983164)), _ULong___init__impl__c78o9k(new Long(-1771020012, -1136237131)), _ULong___init__impl__c78o9k(new Long(-66291367, -346554590)), _ULong___init__impl__c78o9k(new Long(-578303016, -1827209355)), _ULong___init__impl__c78o9k(new Long(1424604878, -1210269869)), _ULong___init__impl__c78o9k(new Long(707014273, -439095512)), _ULong___init__impl__c78o9k(new Long(441883920, -1885047431)), _ULong___init__impl__c78o9k(new Long(1626096725, -1282567465)), _ULong___init__impl__c78o9k(new Long(958879082, -529467507)), _ULong___init__impl__c78o9k(new Long(1136170338, -1941529928)), _ULong___init__impl__c78o9k(new Long(1420212923, -1353170586)), _ULong___init__impl__c78o9k(new Long(-372217494, -617721409)), _ULong___init__impl__c78o9k(new Long(-232635934, -1996688617)), _ULong___init__impl__c78o9k(new Long(-290794918, -1422118947)), _ULong___init__impl__c78o9k(new Long(1783990001, -703906859)), _ULong___init__impl__c78o9k(new Long(1651864662, -2050554523)), _ULong___init__impl__c78o9k(new Long(-1156394644, -1489451330)), _ULong___init__impl__c78o9k(new Long(1775732167, -788072338)), _ULong___init__impl__c78o9k(new Long(36090780, -2103157947)), _ULong___init__impl__c78o9k(new Long(1118855300, -1555205610)), _ULong___init__impl__c78o9k(new Long(-748914523, -870265189)), _ULong___init__impl__c78o9k(new Long(-936143154, -14089662)), _ULong___init__impl__c78o9k(new Long(-1121960383, -1619418775)), _ULong___init__impl__c78o9k(new Long(745033169, -950531644)), _ULong___init__impl__c78o9k(new Long(931291461, -114422731)), _ULong___init__impl__c78o9k(new Long(1118928075, -1682126943)), _ULong___init__impl__c78o9k(new Long(-1822565378, -1028916855)), _ULong___init__impl__c78o9k(new Long(-130723074, -212404245)), _ULong___init__impl__c78o9k(new Long(2065781726, -1743365389)), _ULong___init__impl__c78o9k(new Long(1508485334, -1105464912)), _ULong___init__impl__c78o9k(new Long(1885606668, -308089316)), _ULong___init__impl__c78o9k(new Long(-968979481, -1803168559)), _ULong___init__impl__c78o9k(new Long(936259297, -1180218874)), _ULong___init__impl__c78o9k(new Long(-977159527, -401531769)), _ULong___init__impl__c78o9k(new Long(-610724704, -1861570092)), _ULong___init__impl__c78o9k(new Long(310335944, -1253220790)), _ULong___init__impl__c78o9k(new Long(-1759563718, -492784164)), _ULong___init__impl__c78o9k(new Long(-562856412, -1918602839)), _ULong___init__impl__c78o9k(new Long(1443913133, -1324511724)), _ULong___init__impl__c78o9k(new Long(1804891416, -581897831)), _ULong___init__impl__c78o9k(new Long(-482555601, -1974298881)), _ULong___init__impl__c78o9k(new Long(-603194501, -1394131777)), _ULong___init__impl__c78o9k(new Long(-753993126, -668922897)), _ULong___init__impl__c78o9k(new Long(-471245704, -2028689547)), _ULong___init__impl__c78o9k(new Long(1558426518, -1462120109)), _ULong___init__impl__c78o9k(new Long(874291324, -753908312)), _ULong___init__impl__c78o9k(new Long(546432077, -2081805431)), _ULong___init__impl__c78o9k(new Long(1756781920, -1528514965)), _ULong___init__impl__c78o9k(new Long(1122235577, -836901882)), _ULong___init__impl__c78o9k(new Long(-372344589, -2133676413)), _ULong___init__impl__c78o9k(new Long(-465430736, -1593353692)), _ULong___init__impl__c78o9k(new Long(491953404, -917950290)), _ULong___init__impl__c78o9k(new Long(-1532541892, -73696039)), _ULong___init__impl__c78o9k(new Long(115903141, -1656672760)), _ULong___init__impl__c78o9k(new Long(144878926, -997099126)), _ULong___init__impl__c78o9k(new Long(-1966384990, -172632084)), _ULong___init__impl__c78o9k(new Long(-692119707, -1718507789)), _ULong___init__impl__c78o9k(new Long(-865149633, -1074392912)), _ULong___init__impl__c78o9k(new Long(-7695218, -269249316)), _ULong___init__impl__c78o9k(new Long(532061401, -1778893558)), _ULong___init__impl__c78o9k(new Long(-1482406897, -1149875124)), _ULong___init__impl__c78o9k(new Long(-779266797, -363602081)), _ULong___init__impl__c78o9k(new Long(-487041748, -1837864037)), _ULong___init__impl__c78o9k(new Long(-608802185, -1223588222)), _ULong___init__impl__c78o9k(new Long(-1834744555, -455743453)), _ULong___init__impl__c78o9k(new Long(1000768301, -1895452394)), _ULong___init__impl__c78o9k(new Long(-896523272, -1295573669)), _ULong___init__impl__c78o9k(new Long(-1120654090, -545725262)), _ULong___init__impl__c78o9k(new Long(-1237279718, -1951691025)), _ULong___init__impl__c78o9k(new Long(-1546599648, -1365871957)), _ULong___init__impl__c78o9k(new Long(-1933249560, -633598122)), _ULong___init__impl__c78o9k(new Long(402331761, -2006611562)), _ULong___init__impl__c78o9k(new Long(-1644568947, -1434522629)), _ULong___init__impl__c78o9k(new Long(-2055711183, -719411462)), _ULong___init__impl__c78o9k(new Long(-1821690402, -2060244900)), _ULong___init__impl__c78o9k(new Long(-1203371178, -1501564301)), _ULong___init__impl__c78o9k(new Long(-1504213972, -803213552)), _ULong___init__impl__c78o9k(new Long(1744220827, -2112621206)), _ULong___init__impl__c78o9k(new Long(32792386, -1567034683)), _ULong___init__impl__c78o9k(new Long(1114732307, -885051530)), _ULong___init__impl__c78o9k(new Long(-754068265, -32572589)), _ULong___init__impl__c78o9k(new Long(1676190982, -1630970604)), _ULong___init__impl__c78o9k(new Long(2095238728, -964971431)), _ULong___init__impl__c78o9k(new Long(-602177062, -132472465)), _ULong___init__impl__c78o9k(new Long(-376360664, -1693408027)), _ULong___init__impl__c78o9k(new Long(1677032818, -1043018209)), _ULong___init__impl__c78o9k(new Long(1022549199, -230030937)), _ULong___init__impl__c78o9k(new Long(-2045261311, -1754382072)), _ULong___init__impl__c78o9k(new Long(-1482834814, -1119235766)), _ULong___init__impl__c78o9k(new Long(1367681954, -325302883)), _ULong___init__impl__c78o9k(new Long(1391672133, -1813927038)), _ULong___init__impl__c78o9k(new Long(-407893481, -1193666974)), _ULong___init__impl__c78o9k(new Long(-1583608675, -418341893)), _ULong___init__impl__c78o9k(new Long(1157728226, -1872076419)), _ULong___init__impl__c78o9k(new Long(-1774065190, -1266353700)), _ULong___init__impl__c78o9k(new Long(-1143839663, -509200301)), _ULong___init__impl__c78o9k(new Long(1432583858, -1928862924)), _ULong___init__impl__c78o9k(new Long(1790729823, -1337336831)), _ULong___init__impl__c78o9k(new Long(-982813193, -597929215)), _ULong___init__impl__c78o9k(new Long(459483578, -1984318495)), _ULong___init__impl__c78o9k(new Long(1648096297, -1406656295)), _ULong___init__impl__c78o9k(new Long(-1161105101, -684578545)), _ULong___init__impl__c78o9k(new Long(-725690688, -2038474327)), _ULong___init__impl__c78o9k(new Long(1240370288, -1474351084)), _ULong___init__impl__c78o9k(new Long(1550462860, -769197031)), _ULong___init__impl__c78o9k(new Long(-641573449, -2091360881)), _ULong___init__impl__c78o9k(new Long(-801966811, -1540459277)), _ULong___init__impl__c78o9k(new Long(-1002458513, -851832272)), _ULong___init__impl__c78o9k(new Long(2057817989, -2143007906)), _ULong___init__impl__c78o9k(new Long(424788838, -1605018058)), _ULong___init__impl__c78o9k(new Long(-1616497600, -932530749)), _ULong___init__impl__c78o9k(new Long(-2020622000, -91921612)), _ULong___init__impl__c78o9k(new Long(-726017838, -1668063744)), _ULong___init__impl__c78o9k(new Long(166219527, -1011337855)), _ULong___init__impl__c78o9k(new Long(1281516232, -190430495)), _ULong___init__impl__c78o9k(new Long(-809665091, -1729631796)), _ULong___init__impl__c78o9k(new Long(61660460, -1088297920)), _ULong___init__impl__c78o9k(new Long(77075576, -286630576)), _ULong___init__impl__c78o9k(new Long(48172235, -1789756846)), _ULong___init__impl__c78o9k(new Long(-2087268355, -1163454234)), _ULong___init__impl__c78o9k(new Long(612140029, -380575968)), _ULong___init__impl__c78o9k(new Long(382587518, -1848472716)), _ULong___init__impl__c78o9k(new Long(478234397, -1236849071)), _ULong___init__impl__c78o9k(new Long(1671534821, -472319515)), _ULong___init__impl__c78o9k(new Long(1581580175, -1905812433))]));
    }
  }
  function PathBuilder() {
    this.n57_1 = ArrayList_init_$Create$(32);
  }
  protoOf(PathBuilder).o57 = function () {
    return this.n57_1;
  };
  protoOf(PathBuilder).v44 = function (x, y) {
    this.n57_1.h(new MoveTo(x, y));
    return this;
  };
  protoOf(PathBuilder).x44 = function (x, y) {
    this.n57_1.h(new LineTo(x, y));
    return this;
  };
  protoOf(PathBuilder).z44 = function (x1, y1, x2, y2) {
    this.n57_1.h(new QuadTo(x1, y1, x2, y2));
    return this;
  };
  function Close() {
    Close_instance = this;
    PathNode.call(this);
  }
  var Close_instance;
  function Close_getInstance() {
    if (Close_instance == null)
      new Close();
    return Close_instance;
  }
  function RelativeMoveTo(dx, dy) {
    PathNode.call(this);
    this.r57_1 = dx;
    this.s57_1 = dy;
  }
  protoOf(RelativeMoveTo).toString = function () {
    return 'RelativeMoveTo(dx=' + this.r57_1 + ', dy=' + this.s57_1 + ')';
  };
  protoOf(RelativeMoveTo).hashCode = function () {
    var result = getNumberHashCode(this.r57_1);
    result = imul(result, 31) + getNumberHashCode(this.s57_1) | 0;
    return result;
  };
  protoOf(RelativeMoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeMoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeMoveTo ? other : THROW_CCE();
    if (!equals(this.r57_1, tmp0_other_with_cast.r57_1))
      return false;
    if (!equals(this.s57_1, tmp0_other_with_cast.s57_1))
      return false;
    return true;
  };
  function MoveTo(x, y) {
    PathNode.call(this);
    this.v57_1 = x;
    this.w57_1 = y;
  }
  protoOf(MoveTo).toString = function () {
    return 'MoveTo(x=' + this.v57_1 + ', y=' + this.w57_1 + ')';
  };
  protoOf(MoveTo).hashCode = function () {
    var result = getNumberHashCode(this.v57_1);
    result = imul(result, 31) + getNumberHashCode(this.w57_1) | 0;
    return result;
  };
  protoOf(MoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof MoveTo ? other : THROW_CCE();
    if (!equals(this.v57_1, tmp0_other_with_cast.v57_1))
      return false;
    if (!equals(this.w57_1, tmp0_other_with_cast.w57_1))
      return false;
    return true;
  };
  function RelativeLineTo(dx, dy) {
    PathNode.call(this);
    this.z57_1 = dx;
    this.a58_1 = dy;
  }
  protoOf(RelativeLineTo).toString = function () {
    return 'RelativeLineTo(dx=' + this.z57_1 + ', dy=' + this.a58_1 + ')';
  };
  protoOf(RelativeLineTo).hashCode = function () {
    var result = getNumberHashCode(this.z57_1);
    result = imul(result, 31) + getNumberHashCode(this.a58_1) | 0;
    return result;
  };
  protoOf(RelativeLineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeLineTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeLineTo ? other : THROW_CCE();
    if (!equals(this.z57_1, tmp0_other_with_cast.z57_1))
      return false;
    if (!equals(this.a58_1, tmp0_other_with_cast.a58_1))
      return false;
    return true;
  };
  function LineTo(x, y) {
    PathNode.call(this);
    this.d58_1 = x;
    this.e58_1 = y;
  }
  protoOf(LineTo).toString = function () {
    return 'LineTo(x=' + this.d58_1 + ', y=' + this.e58_1 + ')';
  };
  protoOf(LineTo).hashCode = function () {
    var result = getNumberHashCode(this.d58_1);
    result = imul(result, 31) + getNumberHashCode(this.e58_1) | 0;
    return result;
  };
  protoOf(LineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineTo))
      return false;
    var tmp0_other_with_cast = other instanceof LineTo ? other : THROW_CCE();
    if (!equals(this.d58_1, tmp0_other_with_cast.d58_1))
      return false;
    if (!equals(this.e58_1, tmp0_other_with_cast.e58_1))
      return false;
    return true;
  };
  function RelativeHorizontalTo(dx) {
    PathNode.call(this);
    this.h58_1 = dx;
  }
  protoOf(RelativeHorizontalTo).toString = function () {
    return 'RelativeHorizontalTo(dx=' + this.h58_1 + ')';
  };
  protoOf(RelativeHorizontalTo).hashCode = function () {
    return getNumberHashCode(this.h58_1);
  };
  protoOf(RelativeHorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeHorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeHorizontalTo ? other : THROW_CCE();
    if (!equals(this.h58_1, tmp0_other_with_cast.h58_1))
      return false;
    return true;
  };
  function HorizontalTo(x) {
    PathNode.call(this);
    this.k58_1 = x;
  }
  protoOf(HorizontalTo).toString = function () {
    return 'HorizontalTo(x=' + this.k58_1 + ')';
  };
  protoOf(HorizontalTo).hashCode = function () {
    return getNumberHashCode(this.k58_1);
  };
  protoOf(HorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof HorizontalTo ? other : THROW_CCE();
    if (!equals(this.k58_1, tmp0_other_with_cast.k58_1))
      return false;
    return true;
  };
  function RelativeVerticalTo(dy) {
    PathNode.call(this);
    this.n58_1 = dy;
  }
  protoOf(RelativeVerticalTo).toString = function () {
    return 'RelativeVerticalTo(dy=' + this.n58_1 + ')';
  };
  protoOf(RelativeVerticalTo).hashCode = function () {
    return getNumberHashCode(this.n58_1);
  };
  protoOf(RelativeVerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeVerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeVerticalTo ? other : THROW_CCE();
    if (!equals(this.n58_1, tmp0_other_with_cast.n58_1))
      return false;
    return true;
  };
  function VerticalTo(y) {
    PathNode.call(this);
    this.q58_1 = y;
  }
  protoOf(VerticalTo).toString = function () {
    return 'VerticalTo(y=' + this.q58_1 + ')';
  };
  protoOf(VerticalTo).hashCode = function () {
    return getNumberHashCode(this.q58_1);
  };
  protoOf(VerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof VerticalTo ? other : THROW_CCE();
    if (!equals(this.q58_1, tmp0_other_with_cast.q58_1))
      return false;
    return true;
  };
  function RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3) {
    PathNode.call(this, true);
    this.t58_1 = dx1;
    this.u58_1 = dy1;
    this.v58_1 = dx2;
    this.w58_1 = dy2;
    this.x58_1 = dx3;
    this.y58_1 = dy3;
  }
  protoOf(RelativeCurveTo).toString = function () {
    return 'RelativeCurveTo(dx1=' + this.t58_1 + ', dy1=' + this.u58_1 + ', dx2=' + this.v58_1 + ', dy2=' + this.w58_1 + ', dx3=' + this.x58_1 + ', dy3=' + this.y58_1 + ')';
  };
  protoOf(RelativeCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.t58_1);
    result = imul(result, 31) + getNumberHashCode(this.u58_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v58_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w58_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x58_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y58_1) | 0;
    return result;
  };
  protoOf(RelativeCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeCurveTo ? other : THROW_CCE();
    if (!equals(this.t58_1, tmp0_other_with_cast.t58_1))
      return false;
    if (!equals(this.u58_1, tmp0_other_with_cast.u58_1))
      return false;
    if (!equals(this.v58_1, tmp0_other_with_cast.v58_1))
      return false;
    if (!equals(this.w58_1, tmp0_other_with_cast.w58_1))
      return false;
    if (!equals(this.x58_1, tmp0_other_with_cast.x58_1))
      return false;
    if (!equals(this.y58_1, tmp0_other_with_cast.y58_1))
      return false;
    return true;
  };
  function CurveTo(x1, y1, x2, y2, x3, y3) {
    PathNode.call(this, true);
    this.b59_1 = x1;
    this.c59_1 = y1;
    this.d59_1 = x2;
    this.e59_1 = y2;
    this.f59_1 = x3;
    this.g59_1 = y3;
  }
  protoOf(CurveTo).toString = function () {
    return 'CurveTo(x1=' + this.b59_1 + ', y1=' + this.c59_1 + ', x2=' + this.d59_1 + ', y2=' + this.e59_1 + ', x3=' + this.f59_1 + ', y3=' + this.g59_1 + ')';
  };
  protoOf(CurveTo).hashCode = function () {
    var result = getNumberHashCode(this.b59_1);
    result = imul(result, 31) + getNumberHashCode(this.c59_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d59_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e59_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f59_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.g59_1) | 0;
    return result;
  };
  protoOf(CurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof CurveTo ? other : THROW_CCE();
    if (!equals(this.b59_1, tmp0_other_with_cast.b59_1))
      return false;
    if (!equals(this.c59_1, tmp0_other_with_cast.c59_1))
      return false;
    if (!equals(this.d59_1, tmp0_other_with_cast.d59_1))
      return false;
    if (!equals(this.e59_1, tmp0_other_with_cast.e59_1))
      return false;
    if (!equals(this.f59_1, tmp0_other_with_cast.f59_1))
      return false;
    if (!equals(this.g59_1, tmp0_other_with_cast.g59_1))
      return false;
    return true;
  };
  function RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, true);
    this.j59_1 = dx1;
    this.k59_1 = dy1;
    this.l59_1 = dx2;
    this.m59_1 = dy2;
  }
  protoOf(RelativeReflectiveCurveTo).toString = function () {
    return 'RelativeReflectiveCurveTo(dx1=' + this.j59_1 + ', dy1=' + this.k59_1 + ', dx2=' + this.l59_1 + ', dy2=' + this.m59_1 + ')';
  };
  protoOf(RelativeReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.j59_1);
    result = imul(result, 31) + getNumberHashCode(this.k59_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l59_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m59_1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.j59_1, tmp0_other_with_cast.j59_1))
      return false;
    if (!equals(this.k59_1, tmp0_other_with_cast.k59_1))
      return false;
    if (!equals(this.l59_1, tmp0_other_with_cast.l59_1))
      return false;
    if (!equals(this.m59_1, tmp0_other_with_cast.m59_1))
      return false;
    return true;
  };
  function ReflectiveCurveTo(x1, y1, x2, y2) {
    PathNode.call(this, true);
    this.p59_1 = x1;
    this.q59_1 = y1;
    this.r59_1 = x2;
    this.s59_1 = y2;
  }
  protoOf(ReflectiveCurveTo).toString = function () {
    return 'ReflectiveCurveTo(x1=' + this.p59_1 + ', y1=' + this.q59_1 + ', x2=' + this.r59_1 + ', y2=' + this.s59_1 + ')';
  };
  protoOf(ReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.p59_1);
    result = imul(result, 31) + getNumberHashCode(this.q59_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r59_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s59_1) | 0;
    return result;
  };
  protoOf(ReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.p59_1, tmp0_other_with_cast.p59_1))
      return false;
    if (!equals(this.q59_1, tmp0_other_with_cast.q59_1))
      return false;
    if (!equals(this.r59_1, tmp0_other_with_cast.r59_1))
      return false;
    if (!equals(this.s59_1, tmp0_other_with_cast.s59_1))
      return false;
    return true;
  };
  function RelativeQuadTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, VOID, true);
    this.v59_1 = dx1;
    this.w59_1 = dy1;
    this.x59_1 = dx2;
    this.y59_1 = dy2;
  }
  protoOf(RelativeQuadTo).toString = function () {
    return 'RelativeQuadTo(dx1=' + this.v59_1 + ', dy1=' + this.w59_1 + ', dx2=' + this.x59_1 + ', dy2=' + this.y59_1 + ')';
  };
  protoOf(RelativeQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.v59_1);
    result = imul(result, 31) + getNumberHashCode(this.w59_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x59_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y59_1) | 0;
    return result;
  };
  protoOf(RelativeQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeQuadTo ? other : THROW_CCE();
    if (!equals(this.v59_1, tmp0_other_with_cast.v59_1))
      return false;
    if (!equals(this.w59_1, tmp0_other_with_cast.w59_1))
      return false;
    if (!equals(this.x59_1, tmp0_other_with_cast.x59_1))
      return false;
    if (!equals(this.y59_1, tmp0_other_with_cast.y59_1))
      return false;
    return true;
  };
  function QuadTo(x1, y1, x2, y2) {
    PathNode.call(this, VOID, true);
    this.b5a_1 = x1;
    this.c5a_1 = y1;
    this.d5a_1 = x2;
    this.e5a_1 = y2;
  }
  protoOf(QuadTo).toString = function () {
    return 'QuadTo(x1=' + this.b5a_1 + ', y1=' + this.c5a_1 + ', x2=' + this.d5a_1 + ', y2=' + this.e5a_1 + ')';
  };
  protoOf(QuadTo).hashCode = function () {
    var result = getNumberHashCode(this.b5a_1);
    result = imul(result, 31) + getNumberHashCode(this.c5a_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d5a_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e5a_1) | 0;
    return result;
  };
  protoOf(QuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof QuadTo ? other : THROW_CCE();
    if (!equals(this.b5a_1, tmp0_other_with_cast.b5a_1))
      return false;
    if (!equals(this.c5a_1, tmp0_other_with_cast.c5a_1))
      return false;
    if (!equals(this.d5a_1, tmp0_other_with_cast.d5a_1))
      return false;
    if (!equals(this.e5a_1, tmp0_other_with_cast.e5a_1))
      return false;
    return true;
  };
  function RelativeReflectiveQuadTo(dx, dy) {
    PathNode.call(this, VOID, true);
    this.h5a_1 = dx;
    this.i5a_1 = dy;
  }
  protoOf(RelativeReflectiveQuadTo).toString = function () {
    return 'RelativeReflectiveQuadTo(dx=' + this.h5a_1 + ', dy=' + this.i5a_1 + ')';
  };
  protoOf(RelativeReflectiveQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.h5a_1);
    result = imul(result, 31) + getNumberHashCode(this.i5a_1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.h5a_1, tmp0_other_with_cast.h5a_1))
      return false;
    if (!equals(this.i5a_1, tmp0_other_with_cast.i5a_1))
      return false;
    return true;
  };
  function ReflectiveQuadTo(x, y) {
    PathNode.call(this, VOID, true);
    this.l5a_1 = x;
    this.m5a_1 = y;
  }
  protoOf(ReflectiveQuadTo).toString = function () {
    return 'ReflectiveQuadTo(x=' + this.l5a_1 + ', y=' + this.m5a_1 + ')';
  };
  protoOf(ReflectiveQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.l5a_1);
    result = imul(result, 31) + getNumberHashCode(this.m5a_1) | 0;
    return result;
  };
  protoOf(ReflectiveQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.l5a_1, tmp0_other_with_cast.l5a_1))
      return false;
    if (!equals(this.m5a_1, tmp0_other_with_cast.m5a_1))
      return false;
    return true;
  };
  function RelativeArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) {
    PathNode.call(this);
    this.p5a_1 = horizontalEllipseRadius;
    this.q5a_1 = verticalEllipseRadius;
    this.r5a_1 = theta;
    this.s5a_1 = isMoreThanHalf;
    this.t5a_1 = isPositiveArc;
    this.u5a_1 = arcStartDx;
    this.v5a_1 = arcStartDy;
  }
  protoOf(RelativeArcTo).toString = function () {
    return 'RelativeArcTo(horizontalEllipseRadius=' + this.p5a_1 + ', verticalEllipseRadius=' + this.q5a_1 + ', theta=' + this.r5a_1 + ', isMoreThanHalf=' + this.s5a_1 + ', isPositiveArc=' + this.t5a_1 + ', arcStartDx=' + this.u5a_1 + ', arcStartDy=' + this.v5a_1 + ')';
  };
  protoOf(RelativeArcTo).hashCode = function () {
    var result = getNumberHashCode(this.p5a_1);
    result = imul(result, 31) + getNumberHashCode(this.q5a_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r5a_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.s5a_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.t5a_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u5a_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v5a_1) | 0;
    return result;
  };
  protoOf(RelativeArcTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeArcTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeArcTo ? other : THROW_CCE();
    if (!equals(this.p5a_1, tmp0_other_with_cast.p5a_1))
      return false;
    if (!equals(this.q5a_1, tmp0_other_with_cast.q5a_1))
      return false;
    if (!equals(this.r5a_1, tmp0_other_with_cast.r5a_1))
      return false;
    if (!(this.s5a_1 === tmp0_other_with_cast.s5a_1))
      return false;
    if (!(this.t5a_1 === tmp0_other_with_cast.t5a_1))
      return false;
    if (!equals(this.u5a_1, tmp0_other_with_cast.u5a_1))
      return false;
    if (!equals(this.v5a_1, tmp0_other_with_cast.v5a_1))
      return false;
    return true;
  };
  function ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) {
    PathNode.call(this);
    this.y5a_1 = horizontalEllipseRadius;
    this.z5a_1 = verticalEllipseRadius;
    this.a5b_1 = theta;
    this.b5b_1 = isMoreThanHalf;
    this.c5b_1 = isPositiveArc;
    this.d5b_1 = arcStartX;
    this.e5b_1 = arcStartY;
  }
  protoOf(ArcTo).toString = function () {
    return 'ArcTo(horizontalEllipseRadius=' + this.y5a_1 + ', verticalEllipseRadius=' + this.z5a_1 + ', theta=' + this.a5b_1 + ', isMoreThanHalf=' + this.b5b_1 + ', isPositiveArc=' + this.c5b_1 + ', arcStartX=' + this.d5b_1 + ', arcStartY=' + this.e5b_1 + ')';
  };
  protoOf(ArcTo).hashCode = function () {
    var result = getNumberHashCode(this.y5a_1);
    result = imul(result, 31) + getNumberHashCode(this.z5a_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.a5b_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.b5b_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.c5b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d5b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e5b_1) | 0;
    return result;
  };
  protoOf(ArcTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArcTo))
      return false;
    var tmp0_other_with_cast = other instanceof ArcTo ? other : THROW_CCE();
    if (!equals(this.y5a_1, tmp0_other_with_cast.y5a_1))
      return false;
    if (!equals(this.z5a_1, tmp0_other_with_cast.z5a_1))
      return false;
    if (!equals(this.a5b_1, tmp0_other_with_cast.a5b_1))
      return false;
    if (!(this.b5b_1 === tmp0_other_with_cast.b5b_1))
      return false;
    if (!(this.c5b_1 === tmp0_other_with_cast.c5b_1))
      return false;
    if (!equals(this.d5b_1, tmp0_other_with_cast.d5b_1))
      return false;
    if (!equals(this.e5b_1, tmp0_other_with_cast.e5b_1))
      return false;
    return true;
  };
  function PathNode(isCurve, isQuad) {
    isCurve = isCurve === VOID ? false : isCurve;
    isQuad = isQuad === VOID ? false : isQuad;
    this.f5b_1 = isCurve;
    this.g5b_1 = isQuad;
  }
  function addPathNodes(_this__u8e3s4, nodes, args, count) {
    if (_this__u8e3s4 === _Char___init__impl__6a9atx(122) || _this__u8e3s4 === _Char___init__impl__6a9atx(90))
      nodes.h(Close_getInstance());
    else if (_this__u8e3s4 === _Char___init__impl__6a9atx(109)) {
      pathRelativeMoveNodeFromArgs(nodes, args, count);
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(77)) {
      pathMoveNodeFromArgs(nodes, args, count);
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(108)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end = count - 2 | 0;
      var index = 0;
      while (index <= end) {
        var start = index;
        var tmp$ret$0 = new RelativeLineTo(args[start], args[start + 1 | 0]);
        nodes.h(tmp$ret$0);
        index = index + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(76)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_0 = count - 2 | 0;
      var index_0 = 0;
      while (index_0 <= end_0) {
        var start_0 = index_0;
        var tmp$ret$2 = new LineTo(args[start_0], args[start_0 + 1 | 0]);
        nodes.h(tmp$ret$2);
        index_0 = index_0 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(104)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_1 = count - 1 | 0;
      var index_1 = 0;
      while (index_1 <= end_1) {
        var start_1 = index_1;
        var tmp$ret$4 = new RelativeHorizontalTo(args[start_1]);
        nodes.h(tmp$ret$4);
        index_1 = index_1 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(72)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_2 = count - 1 | 0;
      var index_2 = 0;
      while (index_2 <= end_2) {
        var start_2 = index_2;
        var tmp$ret$6 = new HorizontalTo(args[start_2]);
        nodes.h(tmp$ret$6);
        index_2 = index_2 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(118)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_3 = count - 1 | 0;
      var index_3 = 0;
      while (index_3 <= end_3) {
        var start_3 = index_3;
        var tmp$ret$8 = new RelativeVerticalTo(args[start_3]);
        nodes.h(tmp$ret$8);
        index_3 = index_3 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(86)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_4 = count - 1 | 0;
      var index_4 = 0;
      while (index_4 <= end_4) {
        var start_4 = index_4;
        var tmp$ret$10 = new VerticalTo(args[start_4]);
        nodes.h(tmp$ret$10);
        index_4 = index_4 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(99)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_5 = count - 6 | 0;
      var index_5 = 0;
      while (index_5 <= end_5) {
        var start_5 = index_5;
        var tmp$ret$12 = new RelativeCurveTo(args[start_5], args[start_5 + 1 | 0], args[start_5 + 2 | 0], args[start_5 + 3 | 0], args[start_5 + 4 | 0], args[start_5 + 5 | 0]);
        nodes.h(tmp$ret$12);
        index_5 = index_5 + 6 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(67)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_6 = count - 6 | 0;
      var index_6 = 0;
      while (index_6 <= end_6) {
        var start_6 = index_6;
        var tmp$ret$14 = new CurveTo(args[start_6], args[start_6 + 1 | 0], args[start_6 + 2 | 0], args[start_6 + 3 | 0], args[start_6 + 4 | 0], args[start_6 + 5 | 0]);
        nodes.h(tmp$ret$14);
        index_6 = index_6 + 6 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(115)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_7 = count - 4 | 0;
      var index_7 = 0;
      while (index_7 <= end_7) {
        var start_7 = index_7;
        var tmp$ret$16 = new RelativeReflectiveCurveTo(args[start_7], args[start_7 + 1 | 0], args[start_7 + 2 | 0], args[start_7 + 3 | 0]);
        nodes.h(tmp$ret$16);
        index_7 = index_7 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(83)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_8 = count - 4 | 0;
      var index_8 = 0;
      while (index_8 <= end_8) {
        var start_8 = index_8;
        var tmp$ret$18 = new ReflectiveCurveTo(args[start_8], args[start_8 + 1 | 0], args[start_8 + 2 | 0], args[start_8 + 3 | 0]);
        nodes.h(tmp$ret$18);
        index_8 = index_8 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(113)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_9 = count - 4 | 0;
      var index_9 = 0;
      while (index_9 <= end_9) {
        var start_9 = index_9;
        var tmp$ret$20 = new RelativeQuadTo(args[start_9], args[start_9 + 1 | 0], args[start_9 + 2 | 0], args[start_9 + 3 | 0]);
        nodes.h(tmp$ret$20);
        index_9 = index_9 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(81)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_10 = count - 4 | 0;
      var index_10 = 0;
      while (index_10 <= end_10) {
        var start_10 = index_10;
        var tmp$ret$22 = new QuadTo(args[start_10], args[start_10 + 1 | 0], args[start_10 + 2 | 0], args[start_10 + 3 | 0]);
        nodes.h(tmp$ret$22);
        index_10 = index_10 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(116)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_11 = count - 2 | 0;
      var index_11 = 0;
      while (index_11 <= end_11) {
        var start_11 = index_11;
        var tmp$ret$24 = new RelativeReflectiveQuadTo(args[start_11], args[start_11 + 1 | 0]);
        nodes.h(tmp$ret$24);
        index_11 = index_11 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(84)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_12 = count - 2 | 0;
      var index_12 = 0;
      while (index_12 <= end_12) {
        var start_12 = index_12;
        var tmp$ret$26 = new ReflectiveQuadTo(args[start_12], args[start_12 + 1 | 0]);
        nodes.h(tmp$ret$26);
        index_12 = index_12 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(97)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_13 = count - 7 | 0;
      var index_13 = 0;
      while (index_13 <= end_13) {
        var start_13 = index_13;
        var tmp$ret$28 = new RelativeArcTo(args[start_13], args[start_13 + 1 | 0], args[start_13 + 2 | 0], !(compareTo(args[start_13 + 3 | 0], 0.0) === 0), !(compareTo(args[start_13 + 4 | 0], 0.0) === 0), args[start_13 + 5 | 0], args[start_13 + 6 | 0]);
        nodes.h(tmp$ret$28);
        index_13 = index_13 + 7 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(65)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_14 = count - 7 | 0;
      var index_14 = 0;
      while (index_14 <= end_14) {
        var start_14 = index_14;
        var tmp$ret$30 = new ArcTo(args[start_14], args[start_14 + 1 | 0], args[start_14 + 2 | 0], !(compareTo(args[start_14 + 3 | 0], 0.0) === 0), !(compareTo(args[start_14 + 4 | 0], 0.0) === 0), args[start_14 + 5 | 0], args[start_14 + 6 | 0]);
        nodes.h(tmp$ret$30);
        index_14 = index_14 + 7 | 0;
      }
    } else
      throw IllegalArgumentException_init_$Create$('Unknown command for: ' + toString_1(_this__u8e3s4));
  }
  function pathRelativeMoveNodeFromArgs(nodes, args, count) {
    var end = count - 2 | 0;
    if (end >= 0) {
      nodes.h(new RelativeMoveTo(args[0], args[1]));
      var index = 2;
      while (index <= end) {
        nodes.h(new RelativeLineTo(args[index], args[index + 1 | 0]));
        index = index + 2 | 0;
      }
    }
  }
  function pathMoveNodeFromArgs(nodes, args, count) {
    var end = count - 2 | 0;
    if (end >= 0) {
      nodes.h(new MoveTo(args[0], args[1]));
      var index = 2;
      while (index <= end) {
        nodes.h(new LineTo(args[index], args[index + 1 | 0]));
        index = index + 2 | 0;
      }
    }
  }
  var EmptyArray;
  function PathParser() {
    this.h5b_1 = null;
    this.i5b_1 = new Float32Array(64);
  }
  protoOf(PathParser).j5b = function (pathData) {
    var dstNodes = this.h5b_1;
    if (dstNodes == null) {
      dstNodes = ArrayList_init_$Create$_0();
      this.h5b_1 = dstNodes;
    } else {
      dstNodes.e2();
    }
    this.k5b(pathData, dstNodes);
    return this;
  };
  protoOf(PathParser).k5b = function (pathData, nodes) {
    var start = 0;
    var end = pathData.length;
    var dataCount = 0;
    while (start < end && Char__compareTo_impl_ypi4mb(charCodeAt(pathData, start), _Char___init__impl__6a9atx(32)) <= 0) {
      start = start + 1 | 0;
    }
    while (end > start && Char__compareTo_impl_ypi4mb(charCodeAt(pathData, end - 1 | 0), _Char___init__impl__6a9atx(32)) <= 0) {
      end = end - 1 | 0;
    }
    var index = start;
    while (index < end) {
      var c;
      var command = _Char___init__impl__6a9atx(0);
      $l$loop: do {
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        c = charCodeAt(pathData, _unary__edvuaz);
        // Inline function 'kotlin.code' call
        var lowerChar = Char__toInt_impl_vasixd(c) | 32;
        var tmp;
        // Inline function 'kotlin.code' call
        var this_0 = _Char___init__impl__6a9atx(97);
        var tmp_0 = lowerChar - Char__toInt_impl_vasixd(this_0) | 0;
        // Inline function 'kotlin.code' call
        var this_1 = _Char___init__impl__6a9atx(122);
        var tmp$ret$2 = Char__toInt_impl_vasixd(this_1);
        if (imul(tmp_0, lowerChar - tmp$ret$2 | 0) <= 0) {
          // Inline function 'kotlin.code' call
          var this_2 = _Char___init__impl__6a9atx(101);
          tmp = !(lowerChar === Char__toInt_impl_vasixd(this_2));
        } else {
          tmp = false;
        }
        if (tmp) {
          command = c;
          break $l$loop;
        }
      }
       while (index < end);
      if (!(command === _Char___init__impl__6a9atx(0))) {
        // Inline function 'kotlin.code' call
        var this_3 = command;
        var tmp_1 = Char__toInt_impl_vasixd(this_3) | 32;
        // Inline function 'kotlin.code' call
        var this_4 = _Char___init__impl__6a9atx(122);
        if (!(tmp_1 === Char__toInt_impl_vasixd(this_4))) {
          dataCount = 0;
          do {
            while (index < end && Char__compareTo_impl_ypi4mb(charCodeAt(pathData, index), _Char___init__impl__6a9atx(32)) <= 0) {
              index = index + 1 | 0;
            }
            var result = nextFloat(pathData, index, end);
            // Inline function 'androidx.compose.ui.graphics.vector.index' call
            index = convertToInt(shiftRightUnsigned(result, 32));
            // Inline function 'androidx.compose.ui.graphics.vector.floatValue' call
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits = convertToInt(bitwiseAnd(result, new Long(-1, 0)));
            var value = floatFromBits(bits);
            if (!isNaN_0(value)) {
              var tmp_2 = this.i5b_1;
              var _unary__edvuaz_0 = dataCount;
              dataCount = _unary__edvuaz_0 + 1 | 0;
              tmp_2[_unary__edvuaz_0] = value;
              // Inline function 'androidx.compose.ui.graphics.vector.PathParser.resizeNodeData' call
              var dataCount_0 = dataCount;
              if (dataCount_0 >= this.i5b_1.length) {
                var src = this.i5b_1;
                this.i5b_1 = new Float32Array(imul(dataCount_0, 2));
                var tmp2 = this.i5b_1;
                // Inline function 'kotlin.collections.copyInto' call
                var endIndex = src.length;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_3 = src;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_3, tmp2, 0, 0, endIndex);
              }
            }
            while (index < end && charCodeAt(pathData, index) === _Char___init__impl__6a9atx(44)) {
              index = index + 1 | 0;
            }
          }
           while (index < end && !isNaN_0(value));
        }
        addPathNodes(command, nodes, this.i5b_1, dataCount);
      }
    }
    return nodes;
  };
  protoOf(PathParser).l5b = function () {
    var tmp0_elvis_lhs = this.h5b_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  function toPath(_this__u8e3s4, target) {
    target = target === VOID ? Path_0() : target;
    _init_properties_PathParser_kt__xn6mis();
    var fillType = target.r4w();
    target.h4x();
    target.q4w(fillType);
    var currentX = 0.0;
    var currentY = 0.0;
    var ctrlX = 0.0;
    var ctrlY = 0.0;
    var segmentX = 0.0;
    var segmentY = 0.0;
    var reflectiveCtrlX;
    var reflectiveCtrlY;
    var previousNode = _this__u8e3s4.n() ? Close_getInstance() : _this__u8e3s4.m(0);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.m(index);
        if (item instanceof Close) {
          currentX = segmentX;
          currentY = segmentY;
          ctrlX = segmentX;
          ctrlY = segmentY;
          target.a2e();
        } else {
          if (item instanceof RelativeMoveTo) {
            currentX = currentX + item.r57_1;
            currentY = currentY + item.s57_1;
            target.t4w(item.r57_1, item.s57_1);
            segmentX = currentX;
            segmentY = currentY;
          } else {
            if (item instanceof MoveTo) {
              currentX = item.v57_1;
              currentY = item.w57_1;
              target.s4w(item.v57_1, item.w57_1);
              segmentX = currentX;
              segmentY = currentY;
            } else {
              if (item instanceof RelativeLineTo) {
                target.v4w(item.z57_1, item.a58_1);
                currentX = currentX + item.z57_1;
                currentY = currentY + item.a58_1;
              } else {
                if (item instanceof LineTo) {
                  target.u4w(item.d58_1, item.e58_1);
                  currentX = item.d58_1;
                  currentY = item.e58_1;
                } else {
                  if (item instanceof RelativeHorizontalTo) {
                    target.v4w(item.h58_1, 0.0);
                    currentX = currentX + item.h58_1;
                  } else {
                    if (item instanceof HorizontalTo) {
                      target.u4w(item.k58_1, currentY);
                      currentX = item.k58_1;
                    } else {
                      if (item instanceof RelativeVerticalTo) {
                        target.v4w(0.0, item.n58_1);
                        currentY = currentY + item.n58_1;
                      } else {
                        if (item instanceof VerticalTo) {
                          target.u4w(currentX, item.q58_1);
                          currentY = item.q58_1;
                        } else {
                          if (item instanceof RelativeCurveTo) {
                            target.b4x(item.t58_1, item.u58_1, item.v58_1, item.w58_1, item.x58_1, item.y58_1);
                            ctrlX = currentX + item.v58_1;
                            ctrlY = currentY + item.w58_1;
                            currentX = currentX + item.x58_1;
                            currentY = currentY + item.y58_1;
                          } else {
                            if (item instanceof CurveTo) {
                              target.a4x(item.b59_1, item.c59_1, item.d59_1, item.e59_1, item.f59_1, item.g59_1);
                              ctrlX = item.d59_1;
                              ctrlY = item.e59_1;
                              currentX = item.f59_1;
                              currentY = item.g59_1;
                            } else {
                              if (item instanceof RelativeReflectiveCurveTo) {
                                if (previousNode.f5b_1) {
                                  reflectiveCtrlX = currentX - ctrlX;
                                  reflectiveCtrlY = currentY - ctrlY;
                                } else {
                                  reflectiveCtrlX = 0.0;
                                  reflectiveCtrlY = 0.0;
                                }
                                target.b4x(reflectiveCtrlX, reflectiveCtrlY, item.j59_1, item.k59_1, item.l59_1, item.m59_1);
                                ctrlX = currentX + item.j59_1;
                                ctrlY = currentY + item.k59_1;
                                currentX = currentX + item.l59_1;
                                currentY = currentY + item.m59_1;
                              } else {
                                if (item instanceof ReflectiveCurveTo) {
                                  if (previousNode.f5b_1) {
                                    reflectiveCtrlX = 2 * currentX - ctrlX;
                                    reflectiveCtrlY = 2 * currentY - ctrlY;
                                  } else {
                                    reflectiveCtrlX = currentX;
                                    reflectiveCtrlY = currentY;
                                  }
                                  target.a4x(reflectiveCtrlX, reflectiveCtrlY, item.p59_1, item.q59_1, item.r59_1, item.s59_1);
                                  ctrlX = item.p59_1;
                                  ctrlY = item.q59_1;
                                  currentX = item.r59_1;
                                  currentY = item.s59_1;
                                } else {
                                  if (item instanceof RelativeQuadTo) {
                                    target.z4w(item.v59_1, item.w59_1, item.x59_1, item.y59_1);
                                    ctrlX = currentX + item.v59_1;
                                    ctrlY = currentY + item.w59_1;
                                    currentX = currentX + item.x59_1;
                                    currentY = currentY + item.y59_1;
                                  } else {
                                    if (item instanceof QuadTo) {
                                      target.x4w(item.b5a_1, item.c5a_1, item.d5a_1, item.e5a_1);
                                      ctrlX = item.b5a_1;
                                      ctrlY = item.c5a_1;
                                      currentX = item.d5a_1;
                                      currentY = item.e5a_1;
                                    } else {
                                      if (item instanceof RelativeReflectiveQuadTo) {
                                        if (previousNode.g5b_1) {
                                          reflectiveCtrlX = currentX - ctrlX;
                                          reflectiveCtrlY = currentY - ctrlY;
                                        } else {
                                          reflectiveCtrlX = 0.0;
                                          reflectiveCtrlY = 0.0;
                                        }
                                        target.z4w(reflectiveCtrlX, reflectiveCtrlY, item.h5a_1, item.i5a_1);
                                        ctrlX = currentX + reflectiveCtrlX;
                                        ctrlY = currentY + reflectiveCtrlY;
                                        currentX = currentX + item.h5a_1;
                                        currentY = currentY + item.i5a_1;
                                      } else {
                                        if (item instanceof ReflectiveQuadTo) {
                                          if (previousNode.g5b_1) {
                                            reflectiveCtrlX = 2 * currentX - ctrlX;
                                            reflectiveCtrlY = 2 * currentY - ctrlY;
                                          } else {
                                            reflectiveCtrlX = currentX;
                                            reflectiveCtrlY = currentY;
                                          }
                                          target.x4w(reflectiveCtrlX, reflectiveCtrlY, item.l5a_1, item.m5a_1);
                                          ctrlX = reflectiveCtrlX;
                                          ctrlY = reflectiveCtrlY;
                                          currentX = item.l5a_1;
                                          currentY = item.m5a_1;
                                        } else {
                                          if (item instanceof RelativeArcTo) {
                                            var arcStartX = item.u5a_1 + currentX;
                                            var arcStartY = item.v5a_1 + currentY;
                                            drawArc(target, currentX, currentY, arcStartX, arcStartY, item.p5a_1, item.q5a_1, item.r5a_1, item.s5a_1, item.t5a_1);
                                            currentX = arcStartX;
                                            currentY = arcStartY;
                                            ctrlX = currentX;
                                            ctrlY = currentY;
                                          } else {
                                            if (item instanceof ArcTo) {
                                              drawArc(target, currentX, currentY, item.d5b_1, item.e5b_1, item.y5a_1, item.z5a_1, item.a5b_1, item.b5b_1, item.c5b_1);
                                              currentX = item.d5b_1;
                                              currentY = item.e5b_1;
                                              ctrlX = currentX;
                                              ctrlY = currentY;
                                            } else {
                                              noWhenBranchMatchedException();
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
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        previousNode = item;
      }
       while (inductionVariable <= last);
    return target;
  }
  function drawArc(p, x0, y0, x1, y1, a, b, theta, isMoreThanHalf, isPositiveArc) {
    _init_properties_PathParser_kt__xn6mis();
    // Inline function 'androidx.compose.ui.graphics.vector.toRadians' call
    var thetaD = theta / 180 * 3.141592653589793;
    // Inline function 'kotlin.math.cos' call
    var cosTheta = Math.cos(thetaD);
    // Inline function 'kotlin.math.sin' call
    var sinTheta = Math.sin(thetaD);
    var x0p = (x0 * cosTheta + y0 * sinTheta) / a;
    var y0p = (-x0 * sinTheta + y0 * cosTheta) / b;
    var x1p = (x1 * cosTheta + y1 * sinTheta) / a;
    var y1p = (-x1 * sinTheta + y1 * cosTheta) / b;
    var dx = x0p - x1p;
    var dy = y0p - y1p;
    var xm = (x0p + x1p) / 2;
    var ym = (y0p + y1p) / 2;
    var dsq = dx * dx + dy * dy;
    if (dsq === 0.0) {
      return Unit_instance;
    }
    var disc = 1.0 / dsq - 1.0 / 4.0;
    if (disc < 0.0) {
      // Inline function 'kotlin.math.sqrt' call
      var adjust = Math.sqrt(dsq) / 1.99999;
      drawArc(p, x0, y0, x1, y1, a * adjust, b * adjust, theta, isMoreThanHalf, isPositiveArc);
      return Unit_instance;
    }
    // Inline function 'kotlin.math.sqrt' call
    var s = Math.sqrt(disc);
    var sdx = s * dx;
    var sdy = s * dy;
    var cx;
    var cy;
    if (isMoreThanHalf === isPositiveArc) {
      cx = xm - sdy;
      cy = ym + sdx;
    } else {
      cx = xm + sdy;
      cy = ym - sdx;
    }
    var tmp0 = y0p - cy;
    // Inline function 'kotlin.math.atan2' call
    var x = x0p - cx;
    var eta0 = Math.atan2(tmp0, x);
    var tmp0_0 = y1p - cy;
    // Inline function 'kotlin.math.atan2' call
    var x_0 = x1p - cx;
    var eta1 = Math.atan2(tmp0_0, x_0);
    var sweep = eta1 - eta0;
    if (!(isPositiveArc === sweep >= 0)) {
      if (sweep > 0) {
        sweep = sweep - 2 * 3.141592653589793;
      } else {
        sweep = sweep + 2 * 3.141592653589793;
      }
    }
    cx = cx * a;
    cy = cy * b;
    var tcx = cx;
    cx = cx * cosTheta - cy * sinTheta;
    cy = tcx * sinTheta + cy * cosTheta;
    arcToBezier(p, cx, cy, a, b, x0, y0, thetaD, eta0, sweep);
  }
  function arcToBezier(p, cx, cy, a, b, e1x, e1y, theta, start, sweep) {
    _init_properties_PathParser_kt__xn6mis();
    var eta1x = e1x;
    var eta1y = e1y;
    // Inline function 'kotlin.math.abs' call
    var x = sweep * 4 / 3.141592653589793;
    // Inline function 'kotlin.math.ceil' call
    var x_0 = Math.abs(x);
    var tmp$ret$1 = Math.ceil(x_0);
    var numSegments = numberToInt(tmp$ret$1);
    var eta1 = start;
    // Inline function 'kotlin.math.cos' call
    var cosTheta = Math.cos(theta);
    // Inline function 'kotlin.math.sin' call
    var sinTheta = Math.sin(theta);
    // Inline function 'kotlin.math.cos' call
    var x_1 = eta1;
    var cosEta1 = Math.cos(x_1);
    // Inline function 'kotlin.math.sin' call
    var x_2 = eta1;
    var sinEta1 = Math.sin(x_2);
    var ep1x = -a * cosTheta * sinEta1 - b * sinTheta * cosEta1;
    var ep1y = -a * sinTheta * sinEta1 + b * cosTheta * cosEta1;
    var anglePerSegment = sweep / numSegments;
    var inductionVariable = 0;
    if (inductionVariable < numSegments)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var eta2 = eta1 + anglePerSegment;
        // Inline function 'kotlin.math.sin' call
        var sinEta2 = Math.sin(eta2);
        // Inline function 'kotlin.math.cos' call
        var cosEta2 = Math.cos(eta2);
        var e2x = cx + a * cosTheta * cosEta2 - b * sinTheta * sinEta2;
        var e2y = cy + a * sinTheta * cosEta2 + b * cosTheta * sinEta2;
        var ep2x = -a * cosTheta * sinEta2 - b * sinTheta * cosEta2;
        var ep2y = -a * sinTheta * sinEta2 + b * cosTheta * cosEta2;
        // Inline function 'kotlin.math.tan' call
        var x_3 = (eta2 - eta1) / 2;
        var tanDiff2 = Math.tan(x_3);
        // Inline function 'kotlin.math.sin' call
        var x_4 = eta2 - eta1;
        var tmp = Math.sin(x_4);
        // Inline function 'kotlin.math.sqrt' call
        var x_5 = 4 + 3.0 * tanDiff2 * tanDiff2;
        var alpha = tmp * (Math.sqrt(x_5) - 1) / 3;
        var q1x = eta1x + alpha * ep1x;
        var q1y = eta1y + alpha * ep1y;
        var q2x = e2x - alpha * ep2x;
        var q2y = e2y - alpha * ep2y;
        p.a4x(q1x, q1y, q2x, q2y, e2x, e2y);
        eta1 = eta2;
        eta1x = e2x;
        eta1y = e2y;
        ep1x = ep2x;
        ep1y = ep2y;
      }
       while (inductionVariable < numSegments);
  }
  var properties_initialized_PathParser_kt_mzars6;
  function _init_properties_PathParser_kt__xn6mis() {
    if (!properties_initialized_PathParser_kt_mzars6) {
      properties_initialized_PathParser_kt_mzars6 = true;
      EmptyArray = new Float32Array(0);
    }
  }
  function toSkia(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_12().y4o_1 ? BlendMode_CLEAR_getInstance() : _this__u8e3s4 === Companion_getInstance_12().z4o_1 ? BlendMode_SRC_getInstance() : _this__u8e3s4 === Companion_getInstance_12().a4p_1 ? BlendMode_DST_getInstance() : _this__u8e3s4 === Companion_getInstance_12().b4p_1 ? BlendMode_SRC_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_12().c4p_1 ? BlendMode_DST_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_12().d4p_1 ? BlendMode_SRC_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_12().e4p_1 ? BlendMode_DST_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_12().f4p_1 ? BlendMode_SRC_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_12().g4p_1 ? BlendMode_DST_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_12().h4p_1 ? BlendMode_SRC_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_12().i4p_1 ? BlendMode_DST_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_12().j4p_1 ? BlendMode_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_12().k4p_1 ? BlendMode_PLUS_getInstance() : _this__u8e3s4 === Companion_getInstance_12().l4p_1 ? BlendMode_MODULATE_getInstance() : _this__u8e3s4 === Companion_getInstance_12().m4p_1 ? BlendMode_SCREEN_getInstance() : _this__u8e3s4 === Companion_getInstance_12().n4p_1 ? BlendMode_OVERLAY_getInstance() : _this__u8e3s4 === Companion_getInstance_12().o4p_1 ? BlendMode_DARKEN_getInstance() : _this__u8e3s4 === Companion_getInstance_12().p4p_1 ? BlendMode_LIGHTEN_getInstance() : _this__u8e3s4 === Companion_getInstance_12().q4p_1 ? BlendMode_COLOR_DODGE_getInstance() : _this__u8e3s4 === Companion_getInstance_12().r4p_1 ? BlendMode_COLOR_BURN_getInstance() : _this__u8e3s4 === Companion_getInstance_12().s4p_1 ? BlendMode_HARD_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_12().t4p_1 ? BlendMode_SOFT_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_12().u4p_1 ? BlendMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_12().v4p_1 ? BlendMode_EXCLUSION_getInstance() : _this__u8e3s4 === Companion_getInstance_12().w4p_1 ? BlendMode_MULTIPLY_getInstance() : _this__u8e3s4 === Companion_getInstance_12().x4p_1 ? BlendMode_HUE_getInstance() : _this__u8e3s4 === Companion_getInstance_12().y4p_1 ? BlendMode_SATURATION_getInstance() : _this__u8e3s4 === Companion_getInstance_12().z4p_1 ? BlendMode_COLOR_getInstance() : _this__u8e3s4 === Companion_getInstance_12().a4q_1 ? BlendMode_LUMINOSITY_getInstance() : BlendMode_SRC_OVER_getInstance();
  }
  function setFrom(_this__u8e3s4, matrix) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    if (_Matrix___get_values__impl__fblr7b(matrix)[imul(0, 4) + 2 | 0] === 0.0) {
      // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
      tmp_4 = _Matrix___get_values__impl__fblr7b(matrix)[imul(1, 4) + 2 | 0] === 0.0;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
      tmp_3 = _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 2 | 0] === 1.0;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
      tmp_2 = _Matrix___get_values__impl__fblr7b(matrix)[imul(3, 4) + 2 | 0] === 0.0;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
      tmp_1 = _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 0 | 0] === 0.0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
      tmp_0 = _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 1 | 0] === 0.0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
      tmp = _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 3 | 0] === 0.0;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = 'Matrix33 does not support arbitrary transforms';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var scaleX = _Matrix___get_values__impl__fblr7b(matrix)[0];
    var skewY = _Matrix___get_values__impl__fblr7b(matrix)[1];
    var v2 = _Matrix___get_values__impl__fblr7b(matrix)[2];
    var persp0 = _Matrix___get_values__impl__fblr7b(matrix)[3];
    var skewX = _Matrix___get_values__impl__fblr7b(matrix)[4];
    var scaleY = _Matrix___get_values__impl__fblr7b(matrix)[5];
    var v6 = _Matrix___get_values__impl__fblr7b(matrix)[6];
    var persp1 = _Matrix___get_values__impl__fblr7b(matrix)[7];
    var v8 = _Matrix___get_values__impl__fblr7b(matrix)[8];
    var translateX = _Matrix___get_values__impl__fblr7b(matrix)[12];
    var translateY = _Matrix___get_values__impl__fblr7b(matrix)[13];
    var persp2 = _Matrix___get_values__impl__fblr7b(matrix)[15];
    var v = _Matrix___get_values__impl__fblr7b(matrix);
    v[0] = scaleX;
    v[1] = skewX;
    v[2] = translateX;
    v[3] = skewY;
    v[4] = scaleY;
    v[5] = translateY;
    v[6] = persp0;
    v[7] = persp1;
    v[8] = persp2;
    var inductionVariable = 0;
    if (inductionVariable <= 8)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.h3y_1[i] = v[i];
      }
       while (inductionVariable <= 8);
    v[0] = scaleX;
    v[1] = skewY;
    v[2] = v2;
    v[3] = persp0;
    v[4] = skewX;
    v[5] = scaleY;
    v[6] = v6;
    v[7] = persp1;
    v[8] = v8;
  }
  function identityMatrix33() {
    return new Matrix33(new Float32Array([1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]));
  }
  function prepareTransformationMatrix(matrix, pivotX, pivotY, translationX, translationY, rotationX, rotationY, rotationZ, scaleX, scaleY, cameraDistance) {
    Matrix__reset_impl_4l49i7(matrix);
    Matrix__translate$default_impl_10t8ql(matrix, -pivotX, -pivotY);
    // Inline function 'kotlin.apply' call
    var this_0 = new Matrix(_Matrix___init__impl__q3kp4w());
    var $this$apply = this_0.n4v_1;
    Matrix__rotateZ_impl_2g2pf5($this$apply, rotationZ);
    Matrix__rotateY_impl_2x4btc($this$apply, rotationY);
    Matrix__rotateX_impl_3e5y7j($this$apply, rotationX);
    Matrix__scale$default_impl_snaws9($this$apply, scaleX, scaleY);
    var tmp$ret$1 = this_0.n4v_1;
    Matrix__timesAssign_impl_oas521(matrix, tmp$ret$1);
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isZero' call
    // Inline function 'kotlin.math.abs' call
    if (!(Math.abs(rotationX) <= 0.001)) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.ui.graphics.isZero' call
      // Inline function 'kotlin.math.abs' call
      tmp = !(Math.abs(rotationY) <= 0.001);
    }
    if (tmp) {
      // Inline function 'kotlin.apply' call
      var this_1 = new Matrix(_Matrix___init__impl__q3kp4w());
      var depth = cameraDistance * 72.0;
      var tmp0 = this_1.n4v_1;
      // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
      var v = -1.0 / depth;
      _Matrix___get_values__impl__fblr7b(tmp0)[imul(2, 4) + 3 | 0] = v;
      var tmp$ret$8 = this_1.n4v_1;
      Matrix__timesAssign_impl_oas521(matrix, tmp$ret$8);
    }
    // Inline function 'kotlin.apply' call
    var this_2 = new Matrix(_Matrix___init__impl__q3kp4w());
    var $this$apply_0 = this_2.n4v_1;
    Matrix__translate$default_impl_10t8ql($this$apply_0, pivotX + translationX, pivotY + translationY);
    var tmp$ret$10 = this_2.n4v_1;
    Matrix__timesAssign_impl_oas521(matrix, tmp$ret$10);
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(0, 4) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(1, 4) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(3, 4) + 2 | 0] = 0.0;
  }
  function toComposeRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.q3x_1, _this__u8e3s4.r3x_1, _this__u8e3s4.s3x_1, _this__u8e3s4.t3x_1);
  }
  function toSkiaRect(_this__u8e3s4) {
    return Companion_instance.s46(_this__u8e3s4.v3t_1, _this__u8e3s4.w3t_1, _this__u8e3s4.x3t_1, _this__u8e3s4.y3t_1);
  }
  function toSkiaRRect(_this__u8e3s4) {
    var radii = new Float32Array(8);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    var this_0 = _this__u8e3s4.m3u_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _CornerRadius___get_packedValue__impl__okv4jq(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    radii[0] = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    var this_1 = _this__u8e3s4.m3u_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _CornerRadius___get_packedValue__impl__okv4jq(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    radii[1] = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    var this_2 = _this__u8e3s4.n3u_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _CornerRadius___get_packedValue__impl__okv4jq(this_2);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    radii[2] = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    var this_3 = _this__u8e3s4.n3u_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _CornerRadius___get_packedValue__impl__okv4jq(this_3);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    radii[3] = floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    var this_4 = _this__u8e3s4.o3u_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_3 = _CornerRadius___get_packedValue__impl__okv4jq(this_4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_3 = convertToInt(shiftRight(value_3, 32));
    radii[4] = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    var this_5 = _this__u8e3s4.o3u_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _CornerRadius___get_packedValue__impl__okv4jq(this_5);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    radii[5] = floatFromBits(bits_4);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    var this_6 = _this__u8e3s4.p3u_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_5 = _CornerRadius___get_packedValue__impl__okv4jq(this_6);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_5 = convertToInt(shiftRight(value_5, 32));
    radii[6] = floatFromBits(bits_5);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    var this_7 = _this__u8e3s4.p3u_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_6 = _CornerRadius___get_packedValue__impl__okv4jq(this_7);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
    radii[7] = floatFromBits(bits_6);
    return Companion_instance_0.r46(_this__u8e3s4.i3u_1, _this__u8e3s4.j3u_1, _this__u8e3s4.k3u_1, _this__u8e3s4.l3u_1, radii);
  }
  function get_nativeCanvas(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).m5b_1;
  }
  function ActualCanvas(image) {
    var skiaBitmap = asSkiaBitmap(image);
    // Inline function 'kotlin.require' call
    if (!!skiaBitmap.u3v()) {
      var message = 'Cannot draw on immutable ImageBitmap';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new SkiaBackedCanvas(Canvas_init_$Create$(skiaBitmap));
  }
  function _get_skia__ddpejf($this, _this__u8e3s4) {
    // Inline function 'kotlin.apply' call
    var this_0 = _this__u8e3s4 instanceof SkiaBackedPaint ? _this__u8e3s4 : THROW_CCE();
    this_0.z5b($this.n5b_1);
    return this_0.o5b_1;
  }
  function drawImageRect($this, image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    var bitmap = asSkiaBitmap(image);
    // Inline function 'org.jetbrains.skia.impl.use' call
    var this_0 = Companion_getInstance_3().w42(bitmap);
    var tmp;
    try {
      var tmp_0 = Companion_instance;
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(srcOffset);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp_1 = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(srcOffset);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var tmp_2 = floatFromBits(bits_0);
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _Size___get_packedValue__impl__7rlt1o(srcSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      var tmp_3 = floatFromBits(bits_1);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Size___get_packedValue__impl__7rlt1o(srcSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      var tmp$ret$15 = floatFromBits(bits_2);
      var tmp_4 = tmp_0.u46(tmp_1, tmp_2, tmp_3, tmp$ret$15);
      var tmp_5 = Companion_instance;
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_3 = _Offset___get_packedValue__impl__xh2k8q(dstOffset);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_3 = convertToInt(shiftRight(value_3, 32));
      var tmp_6 = floatFromBits(bits_3);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_4 = _Offset___get_packedValue__impl__xh2k8q(dstOffset);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
      var tmp_7 = floatFromBits(bits_4);
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_5 = _Size___get_packedValue__impl__7rlt1o(dstSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_5 = convertToInt(shiftRight(value_5, 32));
      var tmp_8 = floatFromBits(bits_5);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_6 = _Size___get_packedValue__impl__7rlt1o(dstSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
      var tmp$ret$31 = floatFromBits(bits_6);
      tmp = $this.m5b_1.d3y(this_0, tmp_4, tmp_5.u46(tmp_6, tmp_7, tmp_8, tmp$ret$31), toSkia_2($this, paint.j53()), _get_skia__ddpejf($this, paint), true);
    }finally {
      this_0.a2e();
    }
  }
  function toSkia_0($this, _this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_14().s4s_1 ? ClipMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_14().t4s_1 ? ClipMode_INTERSECT_getInstance() : ClipMode_INTERSECT_getInstance();
  }
  function toSkia_1($this, _this__u8e3s4) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$15 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 3 | 0];
    return new Matrix44(new Float32Array([tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp$ret$15]));
  }
  function toSkia_2($this, _this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_17().e4v_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance()) : _this__u8e3s4 === Companion_getInstance_17().f4v_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NEAREST_getInstance()) : _this__u8e3s4 === Companion_getInstance_17().g4v_1 ? new CubicResampler(1 / 3.0, 1 / 3.0) : new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
  }
  function SkiaBackedCanvas(skia) {
    this.m5b_1 = skia;
    this.n5b_1 = 1.0;
  }
  protoOf(SkiaBackedCanvas).k4s = function () {
    this.m5b_1.p3y();
  };
  protoOf(SkiaBackedCanvas).l4s = function () {
    this.m5b_1.r3y();
  };
  protoOf(SkiaBackedCanvas).m4s = function (bounds, paint) {
    this.m5b_1.q3y(bounds.v3t_1, bounds.w3t_1, bounds.x3t_1, bounds.y3t_1, _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).m3t = function (dx, dy) {
    this.m5b_1.b3u(dx, dy);
  };
  protoOf(SkiaBackedCanvas).n4s = function (sx, sy) {
    this.m5b_1.m3y(sx, sy);
  };
  protoOf(SkiaBackedCanvas).o4s = function (matrix) {
    if (!isIdentity(matrix)) {
      this.m5b_1.n3y(toSkia_1(this, matrix));
    }
  };
  protoOf(SkiaBackedCanvas).q4s = function (left, top, right, bottom, clipOp) {
    var antiAlias = true;
    this.m5b_1.j3y(Companion_instance.s46(left, top, right, bottom), toSkia_0(this, clipOp), antiAlias);
  };
  protoOf(SkiaBackedCanvas).v4s = function (path, clipOp) {
    var antiAlias = true;
    this.m5b_1.l3y(asSkiaPath(path), toSkia_0(this, clipOp), antiAlias);
  };
  protoOf(SkiaBackedCanvas).x4s = function (p1, p2, paint) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(p1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(p1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp_0 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(p2);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_1 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(p2);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    var tmp$ret$15 = floatFromBits(bits_2);
    this.m5b_1.o3x(tmp, tmp_0, tmp_1, tmp$ret$15, _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).y4s = function (left, top, right, bottom, paint) {
    this.m5b_1.p3x(Companion_instance.s46(left, top, right, bottom), _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).z4s = function (left, top, right, bottom, radiusX, radiusY, paint) {
    this.m5b_1.v3x(Companion_instance_0.q46(left, top, right, bottom, radiusX, radiusY), _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).a4t = function (center, radius, paint) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$7 = floatFromBits(bits_0);
    this.m5b_1.u3x(tmp, tmp$ret$7, radius, _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).b4t = function (path, paint) {
    this.m5b_1.c3y(asSkiaPath(path), _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).c4t = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    var tmp0 = _IntOffset___get_x__impl__qiqr5o(srcOffset);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _IntOffset___get_y__impl__2avpwj(srcOffset);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp = _Offset___init__impl__c168vi(tmp$ret$0);
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(srcSize);
    var tmp0_0 = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf(srcSize);
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var v1_0 = fromInt(toRawBits(tmp0_0));
    var v2_0 = fromInt(toRawBits(val2_0));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
    var tmp_0 = _Size___init__impl__aywn0g(tmp$ret$6);
    var tmp0_1 = _IntOffset___get_x__impl__qiqr5o(dstOffset);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2_1 = _IntOffset___get_y__impl__2avpwj(dstOffset);
    var v1_1 = fromInt(toRawBits(tmp0_1));
    var v2_1 = fromInt(toRawBits(val2_1));
    var tmp$ret$8 = bitwiseOr(shiftLeft(v1_1, 32), bitwiseAnd(v2_1, new Long(-1, 0)));
    var tmp_1 = _Offset___init__impl__c168vi(tmp$ret$8);
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value_1 = _IntSize___get_packedValue__impl__uho7jf(dstSize);
    var tmp0_2 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_2 = _IntSize___get_packedValue__impl__uho7jf(dstSize);
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    var v1_2 = fromInt(toRawBits(tmp0_2));
    var v2_2 = fromInt(toRawBits(val2_2));
    var tmp$ret$14 = bitwiseOr(shiftLeft(v1_2, 32), bitwiseAnd(v2_2, new Long(-1, 0)));
    var tmp$ret$15 = _Size___init__impl__aywn0g(tmp$ret$14);
    drawImageRect(this, image, tmp, tmp_0, tmp_1, tmp$ret$15, paint);
  };
  function asComposeCanvas(_this__u8e3s4) {
    return new SkiaBackedCanvas(_this__u8e3s4);
  }
  function set_alphaMultiplier(_this__u8e3s4, value) {
    (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).n5b_1 = value;
  }
  function Paint() {
    return new SkiaBackedPaint();
  }
  function updateAlpha($this, alpha, multiplier) {
    $this.o5b_1.t43(toArgb(Color__copy$default_impl_ectz3s(Color_3($this.o5b_1.u43()), alpha * multiplier)));
  }
  function updateAlpha$default($this, alpha, multiplier, $super) {
    alpha = alpha === VOID ? $this.e4l() : alpha;
    multiplier = multiplier === VOID ? $this.p5b_1 : multiplier;
    return updateAlpha($this, alpha, multiplier);
  }
  function toSkia_3($this, _this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_20().o4w_1 ? PaintMode_FILL_getInstance() : _this__u8e3s4 === Companion_getInstance_20().p4w_1 ? PaintMode_STROKE_getInstance() : PaintMode_FILL_getInstance();
  }
  function toSkia_4($this, _this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_24().x4x_1 ? PaintStrokeCap_BUTT_getInstance() : _this__u8e3s4 === Companion_getInstance_24().y4x_1 ? PaintStrokeCap_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_24().z4x_1 ? PaintStrokeCap_SQUARE_getInstance() : PaintStrokeCap_BUTT_getInstance();
  }
  function toSkia_5($this, _this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_25().b4y_1 ? PaintStrokeJoin_MITER_getInstance() : _this__u8e3s4 === Companion_getInstance_25().c4y_1 ? PaintStrokeJoin_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_25().d4y_1 ? PaintStrokeJoin_BEVEL_getInstance() : PaintStrokeJoin_MITER_getInstance();
  }
  function SkiaBackedPaint(skia) {
    skia = skia === VOID ? Paint_init_$Create$() : skia;
    this.o5b_1 = skia;
    this.p5b_1 = 1.0;
    this.q5b_1 = Companion_getInstance_12().b4p_1;
    this.r5b_1 = Companion_getInstance_20().o4w_1;
    this.s5b_1 = Companion_getInstance_24().x4x_1;
    this.t5b_1 = Companion_getInstance_25().c4y_1;
    this.u5b_1 = 0.0;
    this.v5b_1 = Companion_getInstance_17().f4v_1;
    this.w5b_1 = null;
    this.x5b_1 = null;
    this.y5b_1 = null;
  }
  protoOf(SkiaBackedPaint).a5c = function () {
    return this.o5b_1;
  };
  protoOf(SkiaBackedPaint).z5b = function (value) {
    var multiplier = coerceIn_0(value, 0.0, 1.0);
    updateAlpha$default(this, VOID, multiplier);
    this.p5b_1 = multiplier;
  };
  protoOf(SkiaBackedPaint).q4j = function (value) {
    updateAlpha$default(this, value);
  };
  protoOf(SkiaBackedPaint).e4l = function () {
    return _Color___get_alpha__impl__wcfyv1(Color_3(this.o5b_1.u43()));
  };
  protoOf(SkiaBackedPaint).q43 = function (value) {
    this.o5b_1.q43(value);
  };
  protoOf(SkiaBackedPaint).f4q = function (color) {
    this.o5b_1.t43(toArgb(color));
  };
  protoOf(SkiaBackedPaint).g4r = function () {
    return Color_3(this.o5b_1.u43());
  };
  protoOf(SkiaBackedPaint).g53 = function (value) {
    this.o5b_1.g44(toSkia(value));
    this.q5b_1 = value;
  };
  protoOf(SkiaBackedPaint).h53 = function () {
    return this.q5b_1;
  };
  protoOf(SkiaBackedPaint).q52 = function (value) {
    this.o5b_1.r43(toSkia_3(this, value));
    this.r5b_1 = value;
  };
  protoOf(SkiaBackedPaint).y43 = function (value) {
    this.o5b_1.y43(value);
  };
  protoOf(SkiaBackedPaint).z43 = function () {
    return this.o5b_1.z43();
  };
  protoOf(SkiaBackedPaint).w52 = function (value) {
    this.o5b_1.b44(toSkia_4(this, value));
    this.s5b_1 = value;
  };
  protoOf(SkiaBackedPaint).x52 = function () {
    return this.s5b_1;
  };
  protoOf(SkiaBackedPaint).a53 = function (value) {
    this.o5b_1.c44(toSkia_5(this, value));
    this.t5b_1 = value;
  };
  protoOf(SkiaBackedPaint).b53 = function () {
    return this.t5b_1;
  };
  protoOf(SkiaBackedPaint).y52 = function (value) {
    this.o5b_1.a44(value);
    this.u5b_1 = value;
  };
  protoOf(SkiaBackedPaint).z52 = function () {
    return this.u5b_1;
  };
  protoOf(SkiaBackedPaint).i53 = function (_set____db54di) {
    this.v5b_1 = _set____db54di;
  };
  protoOf(SkiaBackedPaint).j53 = function () {
    return this.v5b_1;
  };
  protoOf(SkiaBackedPaint).d44 = function (value) {
    this.o5b_1.d44(value);
    this.w5b_1 = value;
  };
  protoOf(SkiaBackedPaint).e44 = function () {
    return this.w5b_1;
  };
  protoOf(SkiaBackedPaint).e53 = function (value) {
    this.o5b_1.f44(value == null ? null : asSkiaColorFilter(value));
    this.x5b_1 = value;
  };
  protoOf(SkiaBackedPaint).f53 = function () {
    return this.x5b_1;
  };
  protoOf(SkiaBackedPaint).c53 = function (value) {
    var tmp0_safe_receiver = (value == null ? true : value instanceof SkiaBackedPathEffect) ? value : THROW_CCE();
    this.o5b_1.j44(tmp0_safe_receiver == null ? null : asSkiaPathEffect(tmp0_safe_receiver));
    this.y5b_1 = value;
  };
  protoOf(SkiaBackedPaint).d53 = function () {
    return this.y5b_1;
  };
  function Path_0() {
    return new SkiaBackedPath();
  }
  function asSkiaPath(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedPath) {
      tmp = _this__u8e3s4.b5c_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Path');
    }
    return tmp;
  }
  function toSkiaOperation($this, _this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_22().n4x_1 ? PathOp_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_22().o4x_1 ? PathOp_INTERSECT_getInstance() : _this__u8e3s4 === Companion_getInstance_22().p4x_1 ? PathOp_UNION_getInstance() : _this__u8e3s4 === Companion_getInstance_22().q4x_1 ? PathOp_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_22().r4x_1 ? PathOp_REVERSE_DIFFERENCE_getInstance() : PathOp_XOR_getInstance();
  }
  function SkiaBackedPath(internalPath) {
    internalPath = internalPath === VOID ? Path_init_$Create$() : internalPath;
    this.b5c_1 = internalPath;
  }
  protoOf(SkiaBackedPath).q4w = function (value) {
    var tmp = this.b5c_1;
    var tmp_0;
    if (value === Companion_getInstance_21().l4x_1) {
      tmp_0 = PathFillMode_EVEN_ODD_getInstance();
    } else {
      tmp_0 = PathFillMode_WINDING_getInstance();
    }
    tmp.q44(tmp_0);
  };
  protoOf(SkiaBackedPath).r4w = function () {
    var tmp;
    if (this.b5c_1.r44().equals(PathFillMode_EVEN_ODD_getInstance())) {
      tmp = Companion_getInstance_21().l4x_1;
    } else {
      tmp = Companion_getInstance_21().k4x_1;
    }
    return tmp;
  };
  protoOf(SkiaBackedPath).s4w = function (x, y) {
    this.b5c_1.v44(x, y);
  };
  protoOf(SkiaBackedPath).t4w = function (dx, dy) {
    this.b5c_1.w44(dx, dy);
  };
  protoOf(SkiaBackedPath).u4w = function (x, y) {
    this.b5c_1.x44(x, y);
  };
  protoOf(SkiaBackedPath).v4w = function (dx, dy) {
    this.b5c_1.y44(dx, dy);
  };
  protoOf(SkiaBackedPath).w4w = function (x1, y1, x2, y2) {
    this.b5c_1.z44(x1, y1, x2, y2);
  };
  protoOf(SkiaBackedPath).x4w = function (x1, y1, x2, y2) {
    this.b5c_1.z44(x1, y1, x2, y2);
  };
  protoOf(SkiaBackedPath).y4w = function (dx1, dy1, dx2, dy2) {
    this.b5c_1.a45(dx1, dy1, dx2, dy2);
  };
  protoOf(SkiaBackedPath).z4w = function (dx1, dy1, dx2, dy2) {
    this.b5c_1.a45(dx1, dy1, dx2, dy2);
  };
  protoOf(SkiaBackedPath).a4x = function (x1, y1, x2, y2, x3, y3) {
    this.b5c_1.b45(x1, y1, x2, y2, x3, y3);
  };
  protoOf(SkiaBackedPath).b4x = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    this.b5c_1.c45(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  protoOf(SkiaBackedPath).c4x = function (rect, direction) {
    this.b5c_1.f45(toSkiaRect(rect), toSkiaPathDirection(direction));
  };
  protoOf(SkiaBackedPath).e4x = function (roundRect, direction) {
    this.b5c_1.h45(toSkiaRRect(roundRect), toSkiaPathDirection(direction));
  };
  protoOf(SkiaBackedPath).f4x = function (path, offset) {
    var tmp = this.b5c_1;
    var tmp_0 = asSkiaPath(path);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_1 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$7 = floatFromBits(bits_0);
    tmp.j45(tmp_0, tmp_1, tmp$ret$7);
  };
  protoOf(SkiaBackedPath).a2e = function () {
    this.b5c_1.d45();
  };
  protoOf(SkiaBackedPath).p30 = function () {
    var fillType = this.r4w();
    this.b5c_1.p43();
    this.q4w(fillType);
  };
  protoOf(SkiaBackedPath).h4x = function () {
    this.b5c_1.s44();
  };
  protoOf(SkiaBackedPath).l3t = function (offset) {
    var tmp = this.b5c_1;
    var tmp_0 = Companion_getInstance_4();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_1 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$7 = floatFromBits(bits_0);
    tmp.l45(tmp_0.k43(tmp_1, tmp$ret$7));
  };
  protoOf(SkiaBackedPath).i4x = function () {
    var bounds = this.b5c_1.t44();
    return new Rect(bounds.q3x_1, bounds.r3x_1, bounds.s3x_1, bounds.t3x_1);
  };
  protoOf(SkiaBackedPath).j4x = function (path1, path2, operation) {
    var path = Companion_getInstance_5().m44(asSkiaPath(path1), asSkiaPath(path2), toSkiaOperation(this, operation));
    var tmp = this;
    tmp.b5c_1 = path == null ? this.b5c_1 : path;
    return !(path == null);
  };
  protoOf(SkiaBackedPath).yl = function () {
    return this.b5c_1.yl();
  };
  function toSkiaPathDirection(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.m2_1) {
      case 0:
        tmp = PathDirection_COUNTER_CLOCKWISE_getInstance();
        break;
      case 1:
        tmp = PathDirection_CLOCKWISE_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function SkiaBackedPathEffect() {
  }
  function asSkiaPathEffect(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedPathEffect ? _this__u8e3s4 : THROW_CCE()).c5c_1;
  }
  function PathMeasure() {
    return new SkiaBackedPathMeasure();
  }
  function SkiaBackedPathMeasure(skia) {
    skia = skia === VOID ? PathMeasure_init_$Create$() : skia;
    this.d5c_1 = skia;
  }
  protoOf(SkiaBackedPathMeasure).e5c = function (path, forceClosed) {
    this.d5c_1.r45(path == null ? null : asSkiaPath(path), forceClosed);
  };
  protoOf(SkiaBackedPathMeasure).f5c = function (startDistance, stopDistance, destination, startWithMoveTo) {
    return this.d5c_1.s45(startDistance, stopDistance, asSkiaPath(destination), startWithMoveTo);
  };
  protoOf(SkiaBackedPathMeasure).a = function () {
    return this.d5c_1.a();
  };
  function actualTintColorFilter(color, blendMode) {
    return Companion_getInstance_6().z3y(toArgb(color), toSkia(blendMode));
  }
  function asSkiaColorFilter(_this__u8e3s4) {
    return _this__u8e3s4.z4u_1;
  }
  function SkiaGraphicsContext(measureDrawBounds) {
    measureDrawBounds = measureDrawBounds === VOID ? false : measureDrawBounds;
    this.g5c_1 = RenderNodeContext_init_$Create$(measureDrawBounds);
    this.h5c_1 = 0;
  }
  protoOf(SkiaGraphicsContext).uz = function () {
    this.g5c_1.a2e();
  };
  protoOf(SkiaGraphicsContext).o4k = function (centerX, centerY, centerZ, radius, ambientShadowAlpha, spotShadowAlpha) {
    this.g5c_1.o4k(centerX, centerY, centerZ, radius, ambientShadowAlpha, spotShadowAlpha);
  };
  protoOf(SkiaGraphicsContext).i5c = function () {
    this.h5c_1 = this.h5c_1 + 1 | 0;
    return new GraphicsLayer(RenderNode_init_$Create$(this.g5c_1));
  };
  protoOf(SkiaGraphicsContext).j5c = function (layer) {
    if (!layer.j56_1) {
      this.h5c_1 = this.h5c_1 - 1 | 0;
    }
    layer.k5c();
  };
  function ActualImageBitmap(width, height, config, hasAlpha, colorSpace) {
    // Inline function 'kotlin.require' call
    if (!(width > 0 && height > 0)) {
      var message = 'width and height must be > 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var colorType = toSkiaColorType(config);
    var alphaType = hasAlpha ? ColorAlphaType_PREMUL_getInstance() : ColorAlphaType_OPAQUE_getInstance();
    var skiaColorSpace = toSkiaColorSpace(colorSpace);
    var colorInfo = new ColorInfo(colorType, alphaType, skiaColorSpace);
    var imageInfo = new ImageInfo(colorInfo, width, height);
    var bitmap = Bitmap_init_$Create$();
    bitmap.p3v(imageInfo);
    return new SkiaBackedImageBitmap(bitmap);
  }
  function asSkiaBitmap(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedImageBitmap) {
      tmp = _this__u8e3s4.l5c_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Image');
    }
    return tmp;
  }
  function toSkiaColorType(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_18().h4v_1 ? Companion_getInstance_7().m3z_1 : _this__u8e3s4 === Companion_getInstance_18().i4v_1 ? ColorType_ALPHA_8_getInstance() : _this__u8e3s4 === Companion_getInstance_18().j4v_1 ? ColorType_RGB_565_getInstance() : _this__u8e3s4 === Companion_getInstance_18().k4v_1 ? ColorType_RGBA_F16_getInstance() : Companion_getInstance_7().m3z_1;
  }
  function toSkiaColorSpace(_this__u8e3s4) {
    return _this__u8e3s4.equals(ColorSpaces_getInstance().l4t_1) ? Companion_getInstance_8().i3z_1 : _this__u8e3s4.equals(ColorSpaces_getInstance().m4t_1) ? Companion_getInstance_8().j3z_1 : _this__u8e3s4.equals(ColorSpaces_getInstance().s4t_1) ? Companion_getInstance_8().k3z_1 : Companion_getInstance_8().i3z_1;
  }
  function SkiaBackedImageBitmap(bitmap) {
    this.l5c_1 = bitmap;
    this.m5c_1 = toComposeColorSpace(this.l5c_1.f3w());
    this.n5c_1 = toComposeConfig(this.l5c_1.e3w());
    this.o5c_1 = !this.l5c_1.g3w();
  }
  protoOf(SkiaBackedImageBitmap).p5c = function () {
    return this.n5c_1;
  };
  protoOf(SkiaBackedImageBitmap).t3u = function () {
    return this.l5c_1.t3u();
  };
  protoOf(SkiaBackedImageBitmap).s3u = function () {
    return this.l5c_1.s3u();
  };
  protoOf(SkiaBackedImageBitmap).q5c = function () {
    return Unit_instance;
  };
  function toComposeColorSpace(_this__u8e3s4) {
    return equals(_this__u8e3s4, Companion_getInstance_8().i3z_1) ? ColorSpaces_getInstance().l4t_1 : equals(_this__u8e3s4, Companion_getInstance_8().j3z_1) ? ColorSpaces_getInstance().m4t_1 : equals(_this__u8e3s4, Companion_getInstance_8().k3z_1) ? ColorSpaces_getInstance().s4t_1 : ColorSpaces_getInstance().l4t_1;
  }
  function toComposeConfig(_this__u8e3s4) {
    return _this__u8e3s4.equals(Companion_getInstance_7().m3z_1) ? Companion_getInstance_18().h4v_1 : _this__u8e3s4.equals(ColorType_ALPHA_8_getInstance()) ? Companion_getInstance_18().i4v_1 : _this__u8e3s4.equals(ColorType_RGB_565_getInstance()) ? Companion_getInstance_18().j4v_1 : _this__u8e3s4.equals(ColorType_RGBA_F16_getInstance()) ? Companion_getInstance_18().k4v_1 : Companion_getInstance_18().h4v_1;
  }
  function toComposeImageBitmap(_this__u8e3s4) {
    return new SkiaBackedImageBitmap(toBitmap(_this__u8e3s4));
  }
  function TransformShader() {
    this.p4q_1 = null;
    this.q4q_1 = null;
    this.r4q_1 = null;
  }
  protoOf(TransformShader).s4q = function (matrix) {
    var tmp = this;
    var tmp_0;
    var tmp_1 = matrix;
    if (!((tmp_1 == null ? null : new Matrix(tmp_1)) == null)) {
      // Inline function 'kotlin.apply' call
      var this_0 = Companion_getInstance_4().k43(0.0, 0.0);
      setFrom(this_0, matrix);
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    tmp.r4q_1 = tmp_0;
    this.q4q_1 = null;
  };
  protoOf(TransformShader).d44 = function (value) {
    this.p4q_1 = value;
    this.q4q_1 = null;
  };
  protoOf(TransformShader).e44 = function () {
    var tmp0_elvis_lhs = this.r4q_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.p4q_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var matrix = tmp;
    if (this.q4q_1 == null) {
      var tmp_0 = this;
      var tmp1_safe_receiver = this.p4q_1;
      tmp_0.q4q_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.g47(matrix);
    }
    return this.q4q_1;
  };
  function ActualLinearGradientShader(from, to, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_9();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(from);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(from);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(to);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(to);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    var tmp_3 = floatFromBits(bits_2);
    var tmp_4 = toIntArray(colors);
    return tmp.a47(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, colorStops == null ? null : toFloatArray(colorStops), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualRadialGradientShader(center, radius, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_9();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp_1 = floatFromBits(bits_0);
    var tmp_2 = toIntArray(colors);
    return tmp.b47(tmp_0, tmp_1, radius, tmp_2, colorStops == null ? null : toFloatArray(colorStops), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualSweepGradientShader(center, colors, colorStops) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_9();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp_1 = floatFromBits(bits_0);
    var tmp_2 = toIntArray(colors);
    return tmp.c47(tmp_0, tmp_1, tmp_2, colorStops == null ? null : toFloatArray(colorStops));
  }
  function validateColorStops(colors, colorStops) {
    if (colorStops == null) {
      if (colors.l() < 2) {
        throw IllegalArgumentException_init_$Create$('colors must have length of at least 2 if colorStops is omitted.');
      }
    } else if (!(colors.l() === colorStops.l())) {
      throw IllegalArgumentException_init_$Create$('colors and colorStops arguments must have equal length.');
    }
  }
  function toIntArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.l();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = toArgb(_this__u8e3s4.m(tmp_2).n4u_1);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function toSkiaTileMode(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_26().h4r_1 ? FilterTileMode_CLAMP_getInstance() : _this__u8e3s4 === Companion_getInstance_26().i4r_1 ? FilterTileMode_REPEAT_getInstance() : _this__u8e3s4 === Companion_getInstance_26().j4r_1 ? FilterTileMode_MIRROR_getInstance() : _this__u8e3s4 === Companion_getInstance_26().k4r_1 ? FilterTileMode_DECAL_getInstance() : FilterTileMode_CLAMP_getInstance();
  }
  function _set_size__9twho6($this, value) {
    if (!equals($this.r55_1, value)) {
      $this.r55_1 = value;
      var tmp0_safe_receiver = $this.f55_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp = Companion_instance;
        var tmp_0 = _IntOffset___get_x__impl__qiqr5o($this.q55_1);
        var tmp_1 = _IntOffset___get_y__impl__2avpwj($this.q55_1);
        // Inline function 'androidx.compose.ui.unit.IntSize.width' call
        // Inline function 'androidx.compose.ui.util.unpackInt1' call
        var value_0 = _IntSize___get_packedValue__impl__uho7jf(value);
        var tmp_2 = convertToInt(shiftRight(value_0, 32));
        // Inline function 'androidx.compose.ui.unit.IntSize.height' call
        // Inline function 'androidx.compose.ui.util.unpackInt2' call
        var value_1 = _IntSize___get_packedValue__impl__uho7jf(value);
        var tmp$ret$3 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
        tmp0_safe_receiver.o4j(tmp.u46(tmp_0, tmp_1, tmp_2, tmp$ret$3));
      }
      // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
      var this_0 = $this.j55_1;
      if (equalsLong(_Size___get_packedValue__impl__7rlt1o(this_0), new Long(2143289344, 2143289344))) {
        $this.h55_1 = true;
        configureOutlineAndClip($this);
      }
    }
  }
  function resetOutlineParams($this) {
    $this.l55_1 = null;
    $this.m55_1 = null;
    $this.j55_1 = Companion_getInstance().v3u_1;
    $this.i55_1 = Companion_getInstance_0().r3t_1;
    $this.k55_1 = 0.0;
    $this.h55_1 = true;
  }
  function recordWithTracking($this, block) {
    var tmp0_elvis_lhs = $this.f55_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var renderNode = tmp;
    var recordingCanvas = renderNode.j4k();
    try {
      var tmp_0 = asComposeCanvas(recordingCanvas);
      var composeCanvas = tmp_0 instanceof SkiaBackedCanvas ? tmp_0 : THROW_CCE();
      // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.withTracking' call
      var this_0 = $this.o55_1;
      access$_set_oldDependency__lsok8j(this_0, access$_get_dependency__eau0ww(this_0));
      var tmp0_safe_receiver = access$_get_dependenciesSet__8t5wug(this_0);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        if (tmp0_safe_receiver.qm()) {
          var tmp0_elvis_lhs_0 = access$_get_oldDependenciesSet__gb53k7(this_0);
          var tmp_1;
          if (tmp0_elvis_lhs_0 == null) {
            // Inline function 'kotlin.also' call
            var this_1 = mutableScatterSetOf();
            access$_set_oldDependenciesSet__hmq7k5(this_0, this_1);
            tmp_1 = this_1;
          } else {
            tmp_1 = tmp0_elvis_lhs_0;
          }
          var oldSet = tmp_1;
          oldSet.ws(tmp0_safe_receiver);
          tmp0_safe_receiver.e2();
        }
      }
      access$_set_trackingInProgress__dxkhgu(this_0, true);
      block(composeCanvas);
      access$_set_trackingInProgress__dxkhgu(this_0, false);
      var tmp1_safe_receiver = access$_get_oldDependency__6kx1q7(this_0);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        onRemovedFromParentLayer(tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = access$_get_oldDependenciesSet__gb53k7(this_0);
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        if (tmp2_safe_receiver.qm()) {
          // Inline function 'androidx.collection.ScatterSet.forEach' call
          // Inline function 'kotlin.contracts.contract' call
          var elements = tmp2_safe_receiver.os_1;
          $l$block: {
            // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
            // Inline function 'kotlin.contracts.contract' call
            var m = tmp2_safe_receiver.ns_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_2 = slot;
                var tmp$ret$9 = bitwiseAnd(bitwiseAnd(this_2, shiftLeft(invert(this_2), 7)), new Long(-2139062144, -2139062144));
                if (!equalsLong(tmp$ret$9, new Long(-2139062144, -2139062144))) {
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
                        var tmp_2 = elements[index];
                        var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                        onRemovedFromParentLayer(it);
                      }
                      slot = shiftRight(slot, 8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp2_safe_receiver.e2();
        }
      }
    }finally {
      renderNode.k4k();
    }
  }
  function addSubLayer($this, graphicsLayer) {
    if ($this.o55_1.b55(graphicsLayer)) {
      onAddedToParentLayer(graphicsLayer);
    }
  }
  function onAddedToParentLayer($this) {
    $this.n55_1 = $this.n55_1 + 1 | 0;
  }
  function onRemovedFromParentLayer($this) {
    $this.n55_1 = $this.n55_1 - 1 | 0;
    discardContentIfReleasedAndHaveNoParentLayerUsages($this);
  }
  function configureOutlineAndClip($this) {
    if (!$this.h55_1)
      return Unit_instance;
    var tmp0_elvis_lhs = $this.f55_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var renderNode = tmp;
    var outlineIsNeeded = $this.h56_1 || $this.y55_1 > 0.0;
    if (!outlineIsNeeded) {
      renderNode.i4k(false);
      renderNode.h4k(null);
    } else {
      renderNode.i4k($this.h56_1);
      var tmpOutline = $this.r5c();
      if (tmpOutline instanceof Rectangle) {
        renderNode.d4k(toSkiaRect(tmpOutline.b4w_1), VOID, true);
      } else {
        if (tmpOutline instanceof Rounded) {
          renderNode.f4k(toSkiaRRect(tmpOutline.c4w_1), VOID, true);
        } else {
          if (tmpOutline instanceof Generic) {
            renderNode.h4k(asSkiaPath(tmpOutline.f4w_1), VOID, true);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
    $this.h55_1 = false;
  }
  function discardContentIfReleasedAndHaveNoParentLayerUsages($this) {
    if ($this.j56_1 && $this.n55_1 === 0) {
      // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.removeDependencies' call
      var this_0 = $this.o55_1;
      var tmp0_safe_receiver = access$_get_dependency__eau0ww(this_0);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        onRemovedFromParentLayer(tmp0_safe_receiver);
        access$_set_dependency__rek8c(this_0, null);
      }
      var tmp1_safe_receiver = access$_get_dependenciesSet__8t5wug(this_0);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var elements = tmp1_safe_receiver.os_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = tmp1_safe_receiver.ns_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              var tmp$ret$5 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
              if (!equalsLong(tmp$ret$5, new Long(-2139062144, -2139062144))) {
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
                      var tmp = elements[index];
                      var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      onRemovedFromParentLayer(it);
                    }
                    slot = shiftRight(slot, 8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
        tmp1_safe_receiver.e2();
      }
      var tmp0_safe_receiver_0 = $this.f55_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        tmp0_safe_receiver_0.a2e();
      }
      $this.f55_1 = null;
    }
  }
  function updateLayerProperties($this) {
    var tmp0_safe_receiver = $this.f55_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp;
      if (requiresLayer($this)) {
        // Inline function 'kotlin.also' call
        var this_0 = Paint_init_$Create$();
        this_0.x43($this.t55_1);
        var tmp0_safe_receiver_0 = $this.i56_1;
        this_0.l44(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.t5c());
        var tmp1_safe_receiver = $this.c56_1;
        this_0.f44(tmp1_safe_receiver == null ? null : asSkiaColorFilter(tmp1_safe_receiver));
        this_0.g44(toSkia($this.b56_1));
        tmp = this_0;
      } else {
        tmp = null;
      }
      tmp0_safe_receiver.n4j(tmp);
    }
  }
  function requiresLayer($this) {
    var alphaNeedsLayer = $this.t55_1 < 1.0 && !($this.p55_1 === Companion_getInstance_37().e55_1);
    var hasColorFilter = !($this.c56_1 == null);
    var hasBlendMode = !($this.b56_1 === Companion_getInstance_12().b4p_1);
    var hasRenderEffect = !($this.i56_1 == null);
    var offscreenBufferRequested = $this.p55_1 === Companion_getInstance_37().d55_1;
    return alphaNeedsLayer || hasColorFilter || hasBlendMode || hasRenderEffect || offscreenBufferRequested;
  }
  function GraphicsLayer$record$lambda(this$0, $density, $layoutDirection, $size, $block) {
    return function (canvas) {
      var tmp = canvas;
      var tmp_0;
      if (this$0.p55_1 === Companion_getInstance_37().e55_1) {
        tmp_0 = this$0.t55_1;
      } else {
        tmp_0 = 1.0;
      }
      tmp.n5b_1 = tmp_0;
      var tmp0 = this$0.g55_1;
      var tmp2 = $density;
      var tmp4 = $layoutDirection;
      var tmp8 = toSize_0($size);
      var tmp10 = this$0;
      // Inline function 'androidx.compose.ui.graphics.drawscope.draw' call
      var block = $block;
      var prevDensity = tmp0.a54().z4m();
      var prevLayoutDirection = tmp0.a54().w53();
      var prevCanvas = tmp0.a54().s47();
      var prevSize = tmp0.a54().z3t();
      var prevLayer = tmp0.a54().z53();
      // Inline function 'kotlin.apply' call
      var this_0 = tmp0.a54();
      this_0.x53(tmp2);
      this_0.v53(tmp4);
      this_0.s53(canvas);
      this_0.t53(tmp8);
      this_0.y53(tmp10);
      canvas.k4s();
      try {
        block(tmp0);
      }finally {
        canvas.l4s();
        // Inline function 'kotlin.apply' call
        var this_1 = tmp0.a54();
        this_1.x53(prevDensity);
        this_1.v53(prevLayoutDirection);
        this_1.s53(prevCanvas);
        this_1.t53(prevSize);
        this_1.y53(prevLayer);
      }
      return Unit_instance;
    };
  }
  function GraphicsLayer(renderNode) {
    this.f55_1 = renderNode;
    this.g55_1 = new CanvasDrawScope();
    this.h55_1 = true;
    this.i55_1 = Companion_getInstance_0().r3t_1;
    this.j55_1 = Companion_getInstance().v3u_1;
    this.k55_1 = 0.0;
    this.l55_1 = null;
    this.m55_1 = null;
    this.n55_1 = 0;
    this.o55_1 = new ChildLayerDependenciesTracker();
    this.p55_1 = Companion_getInstance_37().c55_1;
    this.q55_1 = Companion_getInstance_1().f4o_1;
    this.r55_1 = Companion_getInstance_10().p4o_1;
    this.s55_1 = Companion_getInstance_0().t3t_1;
    this.t55_1 = 1.0;
    this.u55_1 = 1.0;
    this.v55_1 = 1.0;
    this.w55_1 = 0.0;
    this.x55_1 = 0.0;
    this.y55_1 = 0.0;
    this.z55_1 = Companion_getInstance_15().t4q_1;
    this.a56_1 = Companion_getInstance_15().t4q_1;
    this.b56_1 = Companion_getInstance_12().b4p_1;
    this.c56_1 = null;
    this.d56_1 = 0.0;
    this.e56_1 = 0.0;
    this.f56_1 = 0.0;
    this.g56_1 = 8.0;
    this.h56_1 = false;
    this.i56_1 = null;
    this.j56_1 = false;
  }
  protoOf(GraphicsLayer).u5c = function (value) {
    if (!(this.p55_1 === value)) {
      this.p55_1 = value;
      updateLayerProperties(this);
    }
  };
  protoOf(GraphicsLayer).v5c = function (value) {
    if (!equals(this.q55_1, value)) {
      this.q55_1 = value;
      var tmp0_safe_receiver = this.f55_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp = Companion_instance;
        var tmp_0 = _IntOffset___get_x__impl__qiqr5o(value);
        var tmp_1 = _IntOffset___get_y__impl__2avpwj(value);
        // Inline function 'androidx.compose.ui.unit.IntSize.width' call
        var this_0 = this.r55_1;
        // Inline function 'androidx.compose.ui.util.unpackInt1' call
        var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_0);
        var tmp_2 = convertToInt(shiftRight(value_0, 32));
        // Inline function 'androidx.compose.ui.unit.IntSize.height' call
        var this_1 = this.r55_1;
        // Inline function 'androidx.compose.ui.util.unpackInt2' call
        var value_1 = _IntSize___get_packedValue__impl__uho7jf(this_1);
        var tmp$ret$3 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
        tmp0_safe_receiver.o4j(tmp.u46(tmp_0, tmp_1, tmp_2, tmp$ret$3));
      }
    }
  };
  protoOf(GraphicsLayer).w5c = function (value) {
    if (!equals(this.s55_1, value)) {
      this.s55_1 = value;
      var tmp0_safe_receiver = this.f55_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'androidx.compose.ui.geometry.Offset.x' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_0 = _Offset___get_packedValue__impl__xh2k8q(value);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits = convertToInt(shiftRight(value_0, 32));
        var tmp = floatFromBits(bits);
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_1 = _Offset___get_packedValue__impl__xh2k8q(value);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_0 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
        var tmp$ret$7 = floatFromBits(bits_0);
        tmp0_safe_receiver.p4j(new Point(tmp, tmp$ret$7));
      }
    }
  };
  protoOf(GraphicsLayer).q4j = function (value) {
    if (!(this.t55_1 === value)) {
      this.t55_1 = value;
      var tmp0_safe_receiver = this.f55_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.q4j(value);
      }
      updateLayerProperties(this);
    }
  };
  protoOf(GraphicsLayer).r4j = function (value) {
    if (!(this.u55_1 === value)) {
      this.u55_1 = value;
      var tmp0_safe_receiver = this.f55_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.r4j(value);
      }
    }
  };
  protoOf(GraphicsLayer).s4j = function (value) {
    if (!(this.v55_1 === value)) {
      this.v55_1 = value;
      var tmp0_safe_receiver = this.f55_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.s4j(value);
      }
    }
  };
  protoOf(GraphicsLayer).t4j = function (value) {
    if (!(this.w55_1 === value)) {
      this.w55_1 = value;
      var tmp0_safe_receiver = this.f55_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.t4j(value);
      }
    }
  };
  protoOf(GraphicsLayer).u4j = function (value) {
    if (!(this.x55_1 === value)) {
      this.x55_1 = value;
      var tmp0_safe_receiver = this.f55_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.u4j(value);
      }
    }
  };
  protoOf(GraphicsLayer).v4j = function (value) {
    if (!(this.y55_1 === value)) {
      this.y55_1 = value;
      var tmp0_safe_receiver = this.f55_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.v4j(value);
      }
      this.h55_1 = true;
      configureOutlineAndClip(this);
    }
  };
  protoOf(GraphicsLayer).x5c = function (value) {
    if (!equals(this.z55_1, value)) {
      this.z55_1 = value;
      var tmp0_safe_receiver = this.f55_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.w4j(toArgb(value));
      }
    }
  };
  protoOf(GraphicsLayer).y5c = function (value) {
    if (!equals(this.a56_1, value)) {
      this.a56_1 = value;
      var tmp0_safe_receiver = this.f55_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.x4j(toArgb(value));
      }
    }
  };
  protoOf(GraphicsLayer).g53 = function (value) {
    if (!(this.b56_1 === value)) {
      this.b56_1 = value;
      updateLayerProperties(this);
    }
  };
  protoOf(GraphicsLayer).e53 = function (value) {
    if (!equals(this.c56_1, value)) {
      this.c56_1 = value;
      updateLayerProperties(this);
    }
  };
  protoOf(GraphicsLayer).r5c = function () {
    var tmpOutline = this.l55_1;
    var tmpPath = this.m55_1;
    var tmp;
    if (!(tmpOutline == null)) {
      tmp = tmpOutline;
    } else if (!(tmpPath == null)) {
      // Inline function 'kotlin.also' call
      var this_0 = new Generic(tmpPath);
      this.l55_1 = this_0;
      tmp = this_0;
    } else {
      // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.resolveOutlinePosition' call
      var layerSize = toSize_0(this.r55_1);
      var rRectTopLeft = this.i55_1;
      var rRectSize = this.j55_1;
      var tmp_0;
      // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
      if (equalsLong(_Size___get_packedValue__impl__7rlt1o(rRectSize), new Long(2143289344, 2143289344))) {
        tmp_0 = layerSize;
      } else {
        tmp_0 = rRectSize;
      }
      var outlineSize = tmp_0;
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(rRectTopLeft);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var left = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(rRectTopLeft);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var top = floatFromBits(bits_0);
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _Size___get_packedValue__impl__7rlt1o(outlineSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      var right = left + floatFromBits(bits_1);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Size___get_packedValue__impl__7rlt1o(outlineSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      var bottom = top + floatFromBits(bits_2);
      var cornerRadius = this.k55_1;
      var tmp_1;
      if (cornerRadius > 0.0) {
        // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
        // Inline function 'androidx.compose.ui.util.packFloats' call
        var v1 = fromInt(toRawBits(cornerRadius));
        var v2 = fromInt(toRawBits(cornerRadius));
        var tmp$ret$19 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
        var tmp$ret$20 = _CornerRadius___init__impl__ojmabe(tmp$ret$19);
        tmp_1 = new Rounded(RoundRect(left, top, right, bottom, tmp$ret$20));
      } else {
        tmp_1 = new Rectangle(new Rect(left, top, right, bottom));
      }
      // Inline function 'kotlin.also' call
      var this_1 = tmp_1;
      this.l55_1 = this_1;
      tmp = this_1;
    }
    return tmp;
  };
  protoOf(GraphicsLayer).m56 = function (path) {
    resetOutlineParams(this);
    this.m55_1 = path;
    configureOutlineAndClip(this);
  };
  protoOf(GraphicsLayer).l56 = function (topLeft, size, cornerRadius) {
    if (!equals(this.i55_1, topLeft) || !equals(this.j55_1, size) || !(this.k55_1 === cornerRadius) || !(this.m55_1 == null)) {
      resetOutlineParams(this);
      this.i55_1 = topLeft;
      this.j55_1 = size;
      this.k55_1 = cornerRadius;
      configureOutlineAndClip(this);
    }
  };
  protoOf(GraphicsLayer).n56 = function (topLeft, size) {
    this.l56(topLeft, size, 0.0);
  };
  protoOf(GraphicsLayer).y4j = function (value) {
    if (!(this.d56_1 === value)) {
      this.d56_1 = value;
      var tmp0_safe_receiver = this.f55_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.y4j(value);
      }
    }
  };
  protoOf(GraphicsLayer).z4j = function (value) {
    if (!(this.e56_1 === value)) {
      this.e56_1 = value;
      var tmp0_safe_receiver = this.f55_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.z4j(value);
      }
    }
  };
  protoOf(GraphicsLayer).a4k = function (value) {
    if (!(this.f56_1 === value)) {
      this.f56_1 = value;
      var tmp0_safe_receiver = this.f55_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.a4k(value);
      }
    }
  };
  protoOf(GraphicsLayer).b4k = function (value) {
    if (!(this.g56_1 === value)) {
      this.g56_1 = value;
      var tmp0_safe_receiver = this.f55_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.b4k(value);
      }
    }
  };
  protoOf(GraphicsLayer).i4k = function (value) {
    if (!(this.h56_1 === value)) {
      this.h56_1 = value;
      this.h55_1 = true;
      configureOutlineAndClip(this);
    }
  };
  protoOf(GraphicsLayer).z5c = function (value) {
    if (!equals(this.i56_1, value)) {
      this.i56_1 = value;
      updateLayerProperties(this);
    }
  };
  protoOf(GraphicsLayer).a5d = function (density, layoutDirection, size, block) {
    _set_size__9twho6(this, size);
    recordWithTracking(this, GraphicsLayer$record$lambda(this, density, layoutDirection, size, block));
  };
  protoOf(GraphicsLayer).k56 = function (canvas, parentLayer) {
    if (this.j56_1)
      return Unit_instance;
    configureOutlineAndClip(this);
    if (parentLayer == null)
      null;
    else {
      addSubLayer(parentLayer, this);
    }
    var tmp1_safe_receiver = this.f55_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l4k(get_nativeCanvas(canvas));
    }
  };
  protoOf(GraphicsLayer).k5c = function () {
    if (!this.j56_1) {
      this.j56_1 = true;
      discardContentIfReleasedAndHaveNoParentLayerUsages(this);
    }
  };
  function toBitmap(_this__u8e3s4) {
    var bitmap = Companion_getInstance_11().h3v(_this__u8e3s4);
    bitmap.v3v();
    return bitmap;
  }
  //region block: post-declaration
  protoOf(CanvasDrawScope).c54 = drawLine$default;
  protoOf(CanvasDrawScope).d54 = drawRect$default;
  protoOf(CanvasDrawScope).e54 = drawRect$default_0;
  protoOf(CanvasDrawScope).g54 = drawImage$default;
  protoOf(CanvasDrawScope).h54 = drawRoundRect$default;
  protoOf(CanvasDrawScope).j54 = drawCircle$default;
  protoOf(CanvasDrawScope).k54 = drawPath$default;
  protoOf(CanvasDrawScope).l54 = drawPath$default_0;
  protoOf(CanvasDrawScope).m54 = get_center_0;
  protoOf(CanvasDrawScope).z3t = get_size;
  protoOf(CanvasDrawScope).a4n = toPx;
  protoOf(CanvasDrawScope).c4n = toPx_0;
  protoOf(CanvasDrawScope).b4n = roundToPx;
  protoOf(CanvasDrawScope).h4n = toDp;
  protoOf(CanvasDrawScope).i4n = toDp_0;
  protoOf(CanvasDrawScope).g4n = toDp_1;
  protoOf(CanvasDrawScope).j4n = toSize;
  protoOf(CanvasDrawScope).k4n = toDpSize;
  protoOf(asDrawTransform$1).p54 = clipPath$default_0;
  protoOf(EmptyCanvas).u4s = clipRect$default_0;
  protoOf(EmptyCanvas).w4s = clipPath$default;
  protoOf(EmptyCanvas).p4s = clipRect;
  protoOf(EmptyCanvas).r4s = clipRect$default;
  protoOf(SkiaBackedCanvas).u4s = clipRect$default_0;
  protoOf(SkiaBackedCanvas).w4s = clipPath$default;
  protoOf(SkiaBackedCanvas).p4s = clipRect;
  protoOf(SkiaBackedCanvas).r4s = clipRect$default;
  protoOf(SkiaBackedPath).d4x = addRect$default;
  protoOf(SkiaBackedPath).e4w = addRoundRect$default;
  protoOf(SkiaBackedPath).g4x = addPath$default;
  //endregion
  //region block: init
  Companion_instance_2 = new Companion_0();
  Companion_instance_5 = new Companion_3();
  Companion_instance_8 = new Companion_6();
  Companion_instance_18 = new Companion_16();
  Companion_instance_19 = new Companion_17();
  Companion_instance_20 = new Companion_18();
  EmptyCanvas_instance = new EmptyCanvas();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CanvasDrawScope;
  _.$_$.b = DrawScope;
  _.$_$.c = Stroke;
  _.$_$.d = drawLayer;
  _.$_$.e = setOutline;
  _.$_$.f = BitmapPainter;
  _.$_$.g = Painter;
  _.$_$.h = PathBuilder;
  _.$_$.i = PathParser;
  _.$_$.j = toPath;
  _.$_$.k = BlendModeColorFilter;
  _.$_$.l = BlendMode;
  _.$_$.m = Canvas_0;
  _.$_$.n = ColorProducer;
  _.$_$.o = Color_0;
  _.$_$.p = Color_3;
  _.$_$.q = Color_2;
  _.$_$.r = Color_1;
  _.$_$.s = Color;
  _.$_$.t = ImageBitmapConfig;
  _.$_$.u = ImageBitmap;
  _.$_$.v = Matrix;
  _.$_$.w = Generic;
  _.$_$.x = Rectangle;
  _.$_$.y = Rounded;
  _.$_$.z = Paint;
  _.$_$.a1 = PathFillType;
  _.$_$.b1 = PathMeasure;
  _.$_$.c1 = Path_0;
  _.$_$.d1 = get_RectangleShape;
  _.$_$.e1 = ShaderBrush;
  _.$_$.f1 = Shadow;
  _.$_$.g1 = SkiaGraphicsContext;
  _.$_$.h1 = SolidColor;
  _.$_$.i1 = StrokeCap;
  _.$_$.j1 = StrokeJoin;
  _.$_$.k1 = TileMode;
  _.$_$.l1 = set_alphaMultiplier;
  _.$_$.m1 = asComposeCanvas;
  _.$_$.n1 = asSkiaPath;
  _.$_$.o1 = compositeOver;
  _.$_$.p1 = computeCubicVerticalBounds;
  _.$_$.q1 = drawOutline;
  _.$_$.r1 = drawOutline_0;
  _.$_$.s1 = evaluateCubic;
  _.$_$.t1 = findFirstCubicRoot;
  _.$_$.u1 = isIdentity;
  _.$_$.v1 = lerp_2;
  _.$_$.w1 = lerp_1;
  _.$_$.x1 = get_nativeCanvas;
  _.$_$.y1 = prepareTransformationMatrix;
  _.$_$.z1 = toArgb;
  _.$_$.a2 = toComposeImageBitmap;
  _.$_$.b2 = toComposeRect;
  _.$_$.c2 = toSkiaRRect;
  _.$_$.d2 = toSkiaRect;
  _.$_$.e2 = drawCircle$default;
  _.$_$.f2 = drawImage$default;
  _.$_$.g2 = drawLine$default;
  _.$_$.h2 = drawPath$default_0;
  _.$_$.i2 = drawPath$default;
  _.$_$.j2 = drawRect$default;
  _.$_$.k2 = drawRect$default_0;
  _.$_$.l2 = drawRoundRect$default;
  _.$_$.m2 = BlendMode__hashCode_impl_93ceri;
  _.$_$.n2 = BlendMode__toString_impl_uuibkd;
  _.$_$.o2 = _Color___init__impl__r6cqi2;
  _.$_$.p2 = _Color___get_alpha__impl__wcfyv1;
  _.$_$.q2 = _Color___get_blue__impl__xwez13;
  _.$_$.r2 = _Color___get_colorSpace__impl__jqqozk;
  _.$_$.s2 = Color__convert_impl_so5m8t;
  _.$_$.t2 = _Color___get_green__impl__bta9rs;
  _.$_$.u2 = Color__hashCode_impl_vjyivj;
  _.$_$.v2 = _Color___get_red__impl__cwrsk6;
  _.$_$.w2 = Color__toString_impl_hpzmaq;
  _.$_$.x2 = _Color___get_value__impl__1pls5m;
  _.$_$.y2 = _Matrix___init__impl__q3kp4w;
  _.$_$.z2 = Matrix__hashCode_impl_s9ntm9;
  _.$_$.a3 = Matrix__map_impl_7meu7m;
  _.$_$.b3 = Matrix__map_impl_7meu7m_1;
  _.$_$.c3 = Matrix__map_impl_7meu7m_0;
  _.$_$.d3 = Matrix__reset_impl_4l49i7;
  _.$_$.e3 = Matrix__rotateZ_impl_2g2pf5;
  _.$_$.f3 = Matrix__scale_impl_6w89a4;
  _.$_$.g3 = Matrix__timesAssign_impl_oas521;
  _.$_$.h3 = _Matrix___get_values__impl__fblr7b;
  _.$_$.i3 = PathFillType__hashCode_impl_pdqo4w;
  _.$_$.j3 = StrokeCap__hashCode_impl_posxk8;
  _.$_$.k3 = StrokeJoin__hashCode_impl_3pyh8w;
  _.$_$.l3 = Color__copy$default_impl_ectz3s;
  _.$_$.m3 = Matrix__translate$default_impl_10t8ql;
  _.$_$.n3 = ColorSpaces_getInstance;
  _.$_$.o3 = Companion_getInstance_35;
  _.$_$.p3 = Fill_getInstance;
  _.$_$.q3 = Companion_getInstance_37;
  _.$_$.r3 = Companion_getInstance_12;
  _.$_$.s3 = Companion_instance_2;
  _.$_$.t3 = Companion_getInstance_14;
  _.$_$.u3 = Companion_getInstance_15;
  _.$_$.v3 = Companion_instance_5;
  _.$_$.w3 = Companion_getInstance_18;
  _.$_$.x3 = Companion_getInstance_20;
  _.$_$.y3 = Companion_getInstance_21;
  _.$_$.z3 = Companion_getInstance_22;
  _.$_$.a4 = Companion_getInstance_23;
  _.$_$.b4 = Companion_getInstance_24;
  _.$_$.c4 = Companion_getInstance_25;
  _.$_$.d4 = Companion_getInstance_26;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-graphics.js.map
