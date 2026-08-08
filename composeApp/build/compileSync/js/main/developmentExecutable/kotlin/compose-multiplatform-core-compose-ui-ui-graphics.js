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
  var VOID = kotlin_kotlin.$_$.e;
  var _FloatFloatPair___init__impl__2q1dd3 = kotlin_androidx_collection_collection.$_$.p1;
  var isNaN_0 = kotlin_kotlin.$_$.sm;
  var fastCbrt = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var protoOf = kotlin_kotlin.$_$.yg;
  var initMetadataForCompanion = kotlin_kotlin.$_$.wf;
  var THROW_CCE = kotlin_kotlin.$_$.vl;
  var initMetadataForClass = kotlin_kotlin.$_$.vf;
  var equals = kotlin_kotlin.$_$.nf;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var Unit_getInstance = kotlin_kotlin.$_$.n5;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var toRawBits = kotlin_kotlin.$_$.gn;
  var fromInt = kotlin_kotlin.$_$.ne;
  var shiftLeft = kotlin_kotlin.$_$.te;
  var Long = kotlin_kotlin.$_$.ol;
  var bitwiseAnd = kotlin_kotlin.$_$.fe;
  var bitwiseOr = kotlin_kotlin.$_$.ge;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var Size__isEmpty_impl_o9ye97 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var shiftRight = kotlin_kotlin.$_$.ve;
  var convertToInt = kotlin_kotlin.$_$.je;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.v4;
  var floatFromBits = kotlin_kotlin.$_$.of;
  var isFinite = kotlin_kotlin.$_$.qm;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var hashCode = kotlin_kotlin.$_$.uf;
  var Offset__hashCode_impl_hbql41 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w;
  var bitwiseXor = kotlin_kotlin.$_$.he;
  var subtract = kotlin_kotlin.$_$.we;
  var equalsLong = kotlin_kotlin.$_$.me;
  var Offset__toString_impl_4ffbou = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var toString = kotlin_kotlin.$_$.bh;
  var toString_0 = kotlin_kotlin.$_$.in;
  var get_center = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var _Size___get_minDimension__impl__4iso0r = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var getNumberHashCode = kotlin_kotlin.$_$.rf;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wm;
  var listOf = kotlin_kotlin.$_$.wa;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m4;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m3;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var initMetadataForInterface = kotlin_kotlin.$_$.zf;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.y3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.z3;
  var shiftRightUnsigned = kotlin_kotlin.$_$.ue;
  var convertToShort = kotlin_kotlin.$_$.ke;
  var ulongToDouble = kotlin_kotlin.$_$.mn;
  var ULong__hashCode_impl_6hv2lb = kotlin_kotlin.$_$.a4;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var numberToInt = kotlin_kotlin.$_$.wg;
  var toShort = kotlin_kotlin.$_$.ah;
  var objectCreate = kotlin_kotlin.$_$.xg;
  var arrayCopy = kotlin_kotlin.$_$.a7;
  var contentEquals = kotlin_kotlin.$_$.z7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var getKClassFromExpression = kotlin_kotlin.$_$.ei;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f;
  var trimIndent = kotlin_kotlin.$_$.tk;
  var get_isSimple = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m;
  var get_boundingRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var _CornerRadius___get_packedValue__impl__okv4jq = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var _CornerRadius___init__impl__ojmabe = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var THROW_IAE = kotlin_kotlin.$_$.wl;
  var enumEntries = kotlin_kotlin.$_$.be;
  var Enum = kotlin_kotlin.$_$.il;
  var Iterator = kotlin_kotlin.$_$.c6;
  var contentHashCode = kotlin_kotlin.$_$.n8;
  var contentToString = kotlin_kotlin.$_$.r8;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var lerp_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n;
  var charSequenceLength = kotlin_kotlin.$_$.hf;
  var getStringHashCode = kotlin_kotlin.$_$.tf;
  var withSign = kotlin_kotlin.$_$.kh;
  var compareTo = kotlin_kotlin.$_$.jf;
  var FunctionAdapter = kotlin_kotlin.$_$.ye;
  var isInterface = kotlin_kotlin.$_$.kg;
  var coerceAtLeast = kotlin_kotlin.$_$.nh;
  var initMetadataForObject = kotlin_kotlin.$_$.bg;
  var mutableIntObjectMapOf = kotlin_androidx_collection_collection.$_$.c1;
  var coerceIn = kotlin_kotlin.$_$.th;
  var toBits = kotlin_kotlin.$_$.en;
  var isNaN_1 = kotlin_kotlin.$_$.tm;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var Size__toString_impl_o87ni8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var toPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h;
  var toPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var roundToPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c;
  var roundToPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d;
  var toDp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g;
  var toDp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f;
  var toDp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var toSp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l;
  var toSp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m;
  var toSp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var toRect_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k;
  var toDpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var CornerRadius = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a;
  var toIntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var Density_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var Annotation = kotlin_kotlin.$_$.al;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var mutableScatterSetOf = kotlin_androidx_collection_collection.$_$.n1;
  var invert = kotlin_kotlin.$_$.oe;
  var compare = kotlin_kotlin.$_$.ie;
  var ensureNotNull = kotlin_kotlin.$_$.pm;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o3;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var roundToInt = kotlin_kotlin.$_$.fh;
  var toSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var IntOffset__hashCode_impl_w5rrxs = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n3;
  var IntOffset__toString_impl_h46d8h = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j3;
  var IntSize__toString_impl_54w9zl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p3;
  var Rect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var _DpOffset___get_x__impl__uauqb5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var _DpOffset___get_y__impl__1h898y = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var coerceIn_0 = kotlin_kotlin.$_$.uh;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k4;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var DpOffset__hashCode_impl_mjg9df = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var Dp__toString_impl_kcddez = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var DpOffset__toString_impl_qqhvsu = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var charCodeAt = kotlin_kotlin.$_$.ff;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w2;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.z2;
  var numberToChar = kotlin_kotlin.$_$.ug;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.c3;
  var multiply = kotlin_kotlin.$_$.qe;
  var add = kotlin_kotlin.$_$.ee;
  var ulongCompare = kotlin_kotlin.$_$.ln;
  var toNumber = kotlin_kotlin.$_$.xe;
  var substring = kotlin_kotlin.$_$.jk;
  var toDouble = kotlin_kotlin.$_$.lk;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.d4;
  var countLeadingZeroBits = kotlin_kotlin.$_$.km;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.u4;
  var doubleFromBits = kotlin_kotlin.$_$.mf;
  var longArrayOf = kotlin_kotlin.$_$.pg;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.c4;
  var getBooleanHashCode = kotlin_kotlin.$_$.pf;
  var toString_1 = kotlin_kotlin.$_$.d3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.x2;
  var emptyList = kotlin_kotlin.$_$.l9;
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
  var Matrix33 = kotlin_org_jetbrains_skiko_skiko.$_$.h6;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.l5;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.k5;
  var Canvas_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.i4;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.e5;
  var until = kotlin_kotlin.$_$.ci;
  var step = kotlin_kotlin.$_$.bi;
  var ClipMode_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f2;
  var ClipMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e2;
  var Matrix44 = kotlin_org_jetbrains_skiko_skiko.$_$.i6;
  var FilterMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p2;
  var MipmapMode_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e3;
  var FilterMipmap = kotlin_org_jetbrains_skiko_skiko.$_$.d6;
  var CubicResampler = kotlin_org_jetbrains_skiko_skiko.$_$.c6;
  var FilterMode_LINEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o2;
  var MipmapMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d3;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f3;
  var PaintMode_STROKE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g3;
  var PaintStrokeCap_BUTT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h3;
  var PaintStrokeCap_SQUARE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j3;
  var PaintStrokeCap_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i3;
  var PaintStrokeJoin_MITER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l3;
  var PaintStrokeJoin_BEVEL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k3;
  var PaintStrokeJoin_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m3;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.m4;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.p2;
  var PathOp_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y3;
  var PathOp_REVERSE_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w3;
  var PathOp_UNION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x3;
  var PathOp_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v3;
  var PathOp_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u3;
  var Path_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.n4;
  var PathFillMode_WINDING_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t3;
  var PathFillMode_EVEN_ODD_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s3;
  var PathDirection_COUNTER_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o3;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.h5;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.i5;
  var PathDirection_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n3;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.j5;
  var Style_TRANSLATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r3;
  var Style_ROTATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q3;
  var Style_MORPH_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p3;
  var PathMeasure_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.o4;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.f5;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.x4;
  var ColorMatrix = kotlin_org_jetbrains_skiko_skiko.$_$.b6;
  var RenderNodeContext_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.s4;
  var RenderNode_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.r4;
  var ColorAlphaType_OPAQUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g2;
  var ColorAlphaType_PREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h2;
  var ColorInfo = kotlin_org_jetbrains_skiko_skiko.$_$.a6;
  var ImageInfo = kotlin_org_jetbrains_skiko_skiko.$_$.g6;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.h4;
  var Companion_getInstance_12 = kotlin_org_jetbrains_skiko_skiko.$_$.z4;
  var ColorType_RGBA_F16_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l2;
  var ColorType_RGB_565_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m2;
  var ColorType_ALPHA_8_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j2;
  var Companion_getInstance_13 = kotlin_org_jetbrains_skiko_skiko.$_$.y4;
  var abs = kotlin_kotlin.$_$.dh;
  var ColorType_BGRA_8888_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k2;
  var ColorAlphaType_UNPREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var Companion_getInstance_14 = kotlin_org_jetbrains_skiko_skiko.$_$.n5;
  var toFloatArray = kotlin_kotlin.$_$.lc;
  var GradientStyle = kotlin_org_jetbrains_skiko_skiko.$_$.f6;
  var FilterTileMode_CLAMP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q2;
  var FilterTileMode_DECAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r2;
  var FilterTileMode_MIRROR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s2;
  var FilterTileMode_REPEAT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t2;
  var VertexMode_TRIANGLES_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z3;
  var VertexMode_TRIANGLE_FAN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a4;
  var VertexMode_TRIANGLE_STRIP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b4;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o4;
  var Point = kotlin_org_jetbrains_skiko_skiko.$_$.k6;
  var RoundRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var Companion_getInstance_16 = kotlin_org_jetbrains_skiko_skiko.$_$.g5;
  var FilterBlurMode_NORMAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n2;
  var Companion_getInstance_17 = kotlin_org_jetbrains_skiko_skiko.$_$.v4;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.d2;
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
  initMetadataForClass(CompositeShaderBrush, 'CompositeShaderBrush', VOID, ShaderBrush);
  initMetadataForClass(ShaderBrush$1, VOID, VOID, ShaderBrush);
  function scale$default(sx, sy, $super) {
    sy = sy === VOID ? sx : sy;
    var tmp;
    if ($super === VOID) {
      this.scale_ba85bu_k$(sx, sy);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.scale_ba85bu_k$.call(this, sx, sy);
    }
    return tmp;
  }
  function skewRad(sxRad, syRad) {
    this.skew_kgli2i_k$(degrees(sxRad), degrees(syRad));
  }
  function clipRect(rect, clipOp) {
    return this.clipRect_3spswv_k$(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$(), rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$(), clipOp);
  }
  function clipRect$default(rect, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_20().get_Intersect_gpxc6n_k$() : clipOp;
    var tmp;
    if ($super === VOID) {
      this.clipRect_oj1pv4_k$(rect, clipOp);
      tmp = Unit_getInstance();
    } else {
      clipRect(rect, clipOp);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function clipRect$default_0(left, top, right, bottom, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_20().get_Intersect_gpxc6n_k$() : clipOp;
    var tmp;
    if ($super === VOID) {
      this.clipRect_3spswv_k$(left, top, right, bottom, clipOp);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.clipRect_3spswv_k$.call(this, left, top, right, bottom, new ClipOp(clipOp));
    }
    return tmp;
  }
  function clipPath$default(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_20().get_Intersect_gpxc6n_k$() : clipOp;
    var tmp;
    if ($super === VOID) {
      this.clipPath_tlqunt_k$(path, clipOp);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.clipPath_tlqunt_k$.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  function drawRect(rect, paint) {
    return this.drawRect_njf28a_k$(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$(), rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$(), paint);
  }
  function drawOval(rect, paint) {
    return this.drawOval_laorgo_k$(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$(), rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$(), paint);
  }
  function drawArc(rect, startAngle, sweepAngle, useCenter, paint) {
    return this.drawArc_ud0hdz_k$(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$(), rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$(), startAngle, sweepAngle, useCenter, paint);
  }
  function drawArcRad(rect, startAngleRad, sweepAngleRad, useCenter, paint) {
    this.drawArc_j2ua6c_k$(rect, degrees(startAngleRad), degrees(sweepAngleRad), useCenter, paint);
  }
  function drawImageRect$default(image, srcOffset, srcSize, dstOffset, dstSize, paint, $super) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().get_Zero_6hc3i8_k$() : srcOffset;
    var tmp;
    if (srcSize === VOID) {
      var tmp0 = image.get_width_j0q4yl_k$();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = image.get_height_e7t92o_k$();
      var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      tmp = _IntSize___init__impl__emcjft(tmp$ret$0);
    } else {
      tmp = srcSize;
    }
    srcSize = tmp;
    dstOffset = dstOffset === VOID ? Companion_getInstance_1().get_Zero_6hc3i8_k$() : dstOffset;
    dstSize = dstSize === VOID ? srcSize : dstSize;
    var tmp_0;
    if ($super === VOID) {
      this.drawImageRect_5h5ih1_k$(image, srcOffset, srcSize, dstOffset, dstSize, paint);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.drawImageRect_5h5ih1_k$.call(this, image, new IntOffset(srcOffset), new IntSize(srcSize), new IntOffset(dstOffset), new IntSize(dstSize), paint);
    }
    return tmp_0;
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
  initMetadataForClass(ColorMatrixColorFilter, 'ColorMatrixColorFilter', VOID, ColorFilter);
  initMetadataForClass(LightingColorFilter, 'LightingColorFilter', VOID, ColorFilter);
  initMetadataForClass(ColorMatrix_0, 'ColorMatrix');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(FilterQuality, 'FilterQuality');
  function createInnerShadowPainter(shape, shadow) {
    return InnerShadowPainter_init_$Create$(shape, shadow);
  }
  function createDropShadowPainter(shape, shadow) {
    return DropShadowPainter_init_$Create$(shape, shadow);
  }
  function clearCache() {
  }
  initMetadataForInterface(ShadowContext, 'ShadowContext');
  initMetadataForInterface(PlatformShadowContext, 'PlatformShadowContext', VOID, VOID, [ShadowContext]);
  initMetadataForClass(GraphicsContext$shadowContext$1, VOID, VOID, VOID, [PlatformShadowContext]);
  function get_shadowContext() {
    return new GraphicsContext$shadowContext$1();
  }
  initMetadataForInterface(GraphicsContext, 'GraphicsContext');
  initMetadataForCompanion(Companion_5);
  function readPixels$default(buffer, startX, startY, width, height, bufferOffset, stride, $super) {
    startX = startX === VOID ? 0 : startX;
    startY = startY === VOID ? 0 : startY;
    width = width === VOID ? this.get_width_j0q4yl_k$() : width;
    height = height === VOID ? this.get_height_e7t92o_k$() : height;
    bufferOffset = bufferOffset === VOID ? 0 : bufferOffset;
    stride = stride === VOID ? width : stride;
    var tmp;
    if ($super === VOID) {
      this.readPixels_vm93oo_k$(buffer, startX, startY, width, height, bufferOffset, stride);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.readPixels_vm93oo_k$.call(this, buffer, startX, startY, width, height, bufferOffset, stride);
    }
    return tmp;
  }
  initMetadataForInterface(ImageBitmap, 'ImageBitmap');
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(ImageBitmapConfig, 'ImageBitmapConfig');
  initMetadataForClass(Interval, 'Interval');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(Matrix, 'Matrix');
  initMetadataForClass(Outline, 'Outline');
  initMetadataForClass(Rectangle, 'Rectangle', VOID, Outline);
  initMetadataForClass(Rounded, 'Rounded', VOID, Outline);
  initMetadataForClass(Generic, 'Generic', VOID, Outline);
  initMetadataForInterface(Paint, 'Paint');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(PaintingStyle, 'PaintingStyle');
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  initMetadataForCompanion(Companion_9);
  function quadraticTo(x1, y1, x2, y2) {
    this.quadraticBezierTo_pas4ki_k$(x1, y1, x2, y2);
  }
  function relativeQuadraticTo(dx1, dy1, dx2, dy2) {
    this.relativeQuadraticBezierTo_fs15qi_k$(dx1, dy1, dx2, dy2);
  }
  function arcToRad(rect, startAngleRadians, sweepAngleRadians, forceMoveTo) {
    this.arcTo_glfct3_k$(rect, degrees(startAngleRadians), degrees(sweepAngleRadians), forceMoveTo);
  }
  function addRect$default(rect, direction, $super) {
    direction = direction === VOID ? Direction_CounterClockwise_getInstance() : direction;
    var tmp;
    if ($super === VOID) {
      this.addRect_l4ktqy_k$(rect, direction);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.addRect_l4ktqy_k$.call(this, rect, direction);
    }
    return tmp;
  }
  function addOval$default(oval, direction, $super) {
    direction = direction === VOID ? Direction_CounterClockwise_getInstance() : direction;
    var tmp;
    if ($super === VOID) {
      this.addOval_ofz8h8_k$(oval, direction);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.addOval_ofz8h8_k$.call(this, oval, direction);
    }
    return tmp;
  }
  function addRoundRect$default(roundRect, direction, $super) {
    direction = direction === VOID ? Direction_CounterClockwise_getInstance() : direction;
    var tmp;
    if ($super === VOID) {
      this.addRoundRect_gyba1e_k$(roundRect, direction);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.addRoundRect_gyba1e_k$.call(this, roundRect, direction);
    }
    return tmp;
  }
  function addPath$default(path, offset, $super) {
    offset = offset === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : offset;
    var tmp;
    if ($super === VOID) {
      this.addPath_mtr781_k$(path, offset);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.addPath_mtr781_k$.call(this, path, new Offset(offset));
    }
    return tmp;
  }
  function rewind() {
    this.reset_5u6xz3_k$();
  }
  function transform(matrix) {
  }
  function iterator() {
    return PathIterator_0(this);
  }
  function iterator_0(conicEvaluation, tolerance) {
    return PathIterator_0(this, conicEvaluation, tolerance);
  }
  function iterator$default(conicEvaluation, tolerance, $super) {
    tolerance = tolerance === VOID ? 0.25 : tolerance;
    return $super === VOID ? this.iterator_j3094m_k$(conicEvaluation, tolerance) : iterator_0(conicEvaluation, tolerance);
  }
  function plus(path) {
    // Inline function 'kotlin.apply' call
    var this_0 = Path_0();
    this_0.op_fj0csx_k$(this, path, Companion_getInstance_32().get_Union_z1h0ku_k$());
    return this_0;
  }
  function minus(path) {
    // Inline function 'kotlin.apply' call
    var this_0 = Path_0();
    this_0.op_fj0csx_k$(this, path, Companion_getInstance_32().get_Difference_nnbib6_k$());
    return this_0;
  }
  function or(path) {
    return this.plus_8b5a1j_k$(path);
  }
  function and(path) {
    // Inline function 'kotlin.apply' call
    var this_0 = Path_0();
    this_0.op_fj0csx_k$(this, path, Companion_getInstance_32().get_Intersect_3xwf0i_k$());
    return this_0;
  }
  function xor(path) {
    // Inline function 'kotlin.apply' call
    var this_0 = Path_0();
    this_0.op_fj0csx_k$(this, path, Companion_getInstance_32().get_Xor_aeyvba_k$());
    return this_0;
  }
  initMetadataForInterface(Path, 'Path');
  initMetadataForCompanion(Companion_10);
  initMetadataForInterface(PathEffect, 'PathEffect');
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(StampedPathEffectStyle, 'StampedPathEffectStyle');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(PathFillType, 'PathFillType');
  initMetadataForClass(ConicEvaluation, 'ConicEvaluation', VOID, Enum);
  function calculateSize$default(includeConvertedConics, $super) {
    includeConvertedConics = includeConvertedConics === VOID ? true : includeConvertedConics;
    return $super === VOID ? this.calculateSize_hg6aym_k$(includeConvertedConics) : $super.calculateSize_hg6aym_k$.call(this, includeConvertedConics);
  }
  function next$default(outPoints, offset, $super) {
    offset = offset === VOID ? 0 : offset;
    return $super === VOID ? this.next_amu3m5_k$(outPoints, offset) : $super.next_amu3m5_k$.call(this, outPoints, offset);
  }
  initMetadataForInterface(PathIterator, 'PathIterator', VOID, VOID, [Iterator]);
  function getSegment$default(startDistance, stopDistance, destination, startWithMoveTo, $super) {
    startWithMoveTo = startWithMoveTo === VOID ? true : startWithMoveTo;
    return $super === VOID ? this.getSegment_x6ele9_k$(startDistance, stopDistance, destination, startWithMoveTo) : $super.getSegment_x6ele9_k$.call(this, startDistance, stopDistance, destination, startWithMoveTo);
  }
  initMetadataForInterface(PathMeasure, 'PathMeasure');
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(PathOperation, 'PathOperation');
  initMetadataForClass(Type, 'Type', VOID, Enum);
  initMetadataForClass(PathSegment, 'PathSegment');
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(PointMode, 'PointMode');
  initMetadataForInterface(Shape, 'Shape');
  initMetadataForClass(RectangleShape$1, VOID, VOID, VOID, [Shape]);
  initMetadataForCompanion(Companion_15);
  initMetadataForClass(Shadow, 'Shadow', Shadow);
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(StrokeCap, 'StrokeCap');
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(StrokeJoin, 'StrokeJoin');
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(TileMode, 'TileMode');
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(VertexMode, 'VertexMode');
  initMetadataForClass(Vertices, 'Vertices');
  initMetadataForClass(Adaptation, 'Adaptation');
  initMetadataForClass(Adaptation$Companion$Bradford$1, VOID, VOID, Adaptation);
  initMetadataForClass(Adaptation$Companion$VonKries$1, VOID, VOID, Adaptation);
  initMetadataForClass(Adaptation$Companion$Ciecat02$1, VOID, VOID, Adaptation);
  initMetadataForCompanion(Companion_20);
  initMetadataForCompanion(Companion_21);
  initMetadataForClass(ColorModel, 'ColorModel');
  initMetadataForCompanion(Companion_22);
  initMetadataForClass(ColorSpace, 'ColorSpace');
  initMetadataForInterface(DoubleFunction, 'DoubleFunction');
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForObject(ColorSpaces, 'ColorSpaces');
  initMetadataForClass(Connector, 'Connector');
  initMetadataForClass(Connector$Companion$identity$1, VOID, VOID, Connector);
  initMetadataForClass(RgbConnector, 'RgbConnector', VOID, Connector);
  initMetadataForCompanion(Companion_23);
  initMetadataForObject(Illuminant, 'Illuminant');
  initMetadataForCompanion(Companion_24);
  initMetadataForClass(Lab, 'Lab', VOID, ColorSpace);
  initMetadataForCompanion(Companion_25);
  initMetadataForClass(Oklab, 'Oklab', VOID, ColorSpace);
  initMetadataForCompanion(Companion_26);
  initMetadataForClass(RenderIntent, 'RenderIntent');
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForCompanion(Companion_27);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_8, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_9, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(Rgb, 'Rgb', VOID, ColorSpace);
  initMetadataForClass(TransferParameters, 'TransferParameters');
  initMetadataForClass(WhitePoint, 'WhitePoint');
  initMetadataForClass(Xyz, 'Xyz', VOID, ColorSpace);
  initMetadataForClass(DrawParams, 'DrawParams', DrawParams);
  function set_canvas(_) {
  }
  function get_canvas() {
    return EmptyCanvas_getInstance();
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
    return get_center(this.get_drawContext_ffwztu_k$().get_size_cxx1ym_k$());
  }
  function get_size() {
    return this.get_drawContext_ffwztu_k$().get_size_cxx1ym_k$();
  }
  function drawLine$default(brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $super) {
    strokeWidth = strokeWidth === VOID ? 0.0 : strokeWidth;
    cap = cap === VOID ? Companion_getInstance_48().DefaultCap_1 : cap;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawLine_b39977_k$(brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawLine_b39977_k$.call(this, brush, new Offset(start), new Offset(end), strokeWidth, new StrokeCap(cap), pathEffect, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawLine$default_0(color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $super) {
    strokeWidth = strokeWidth === VOID ? 0.0 : strokeWidth;
    cap = cap === VOID ? Companion_getInstance_48().DefaultCap_1 : cap;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawLine_ki2hwq_k$(color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawLine_ki2hwq_k$.call(this, new Color(color), new Offset(start), new Offset(end), strokeWidth, new StrokeCap(cap), pathEffect, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRect$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    size = size === VOID ? offsetSize(this, this.get_size_cxx1ym_k$(), topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawRect_t09b9w_k$(brush, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawRect_t09b9w_k$.call(this, brush, new Offset(topLeft), new Size(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRect$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    size = size === VOID ? offsetSize(this, this.get_size_cxx1ym_k$(), topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawRect_6sw8uj_k$(color, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawRect_6sw8uj_k$.call(this, new Color(color), new Offset(topLeft), new Size(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawImage$default(image, topLeft, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawImage_7hd74h_k$(image, topLeft, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawImage_7hd74h_k$.call(this, image, new Offset(topLeft), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawImage$default_0(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, $super) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().get_Zero_6hc3i8_k$() : srcOffset;
    var tmp;
    if (srcSize === VOID) {
      var tmp0 = image.get_width_j0q4yl_k$();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = image.get_height_e7t92o_k$();
      var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      tmp = _IntSize___init__impl__emcjft(tmp$ret$0);
    } else {
      tmp = srcSize;
    }
    srcSize = tmp;
    dstOffset = dstOffset === VOID ? Companion_getInstance_1().get_Zero_6hc3i8_k$() : dstOffset;
    dstSize = dstSize === VOID ? srcSize : dstSize;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.drawImage_17v7pj_k$(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.drawImage_17v7pj_k$.call(this, image, new IntOffset(srcOffset), new IntSize(srcSize), new IntOffset(dstOffset), new IntSize(dstSize), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp_0;
  }
  function drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    this.drawImage$default_qql6c2_k$(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode);
  }
  function drawImage$default_1(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality, $super) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().get_Zero_6hc3i8_k$() : srcOffset;
    var tmp;
    if (srcSize === VOID) {
      var tmp0 = image.get_width_j0q4yl_k$();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = image.get_height_e7t92o_k$();
      var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      tmp = _IntSize___init__impl__emcjft(tmp$ret$0);
    } else {
      tmp = srcSize;
    }
    srcSize = tmp;
    dstOffset = dstOffset === VOID ? Companion_getInstance_1().get_Zero_6hc3i8_k$() : dstOffset;
    dstSize = dstSize === VOID ? srcSize : dstSize;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    filterQuality = filterQuality === VOID ? Companion_getInstance_47().DefaultFilterQuality_1 : filterQuality;
    var tmp_0;
    if ($super === VOID) {
      this.drawImage_9mpi8u_k$(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp_0 = Unit_getInstance();
    } else {
      drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp_0 = Unit_getInstance();
    }
    return tmp_0;
  }
  function drawRoundRect$default(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    size = size === VOID ? offsetSize(this, this.get_size_cxx1ym_k$(), topLeft) : size;
    cornerRadius = cornerRadius === VOID ? Companion_getInstance_2().get_Zero_r4zx17_k$() : cornerRadius;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawRoundRect_gbkwec_k$(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawRoundRect_gbkwec_k$.call(this, brush, new Offset(topLeft), new Size(size), new CornerRadius(cornerRadius), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRoundRect$default_0(color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    size = size === VOID ? offsetSize(this, this.get_size_cxx1ym_k$(), topLeft) : size;
    cornerRadius = cornerRadius === VOID ? Companion_getInstance_2().get_Zero_r4zx17_k$() : cornerRadius;
    style = style === VOID ? Fill_getInstance() : style;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawRoundRect_bjcn4f_k$(color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawRoundRect_bjcn4f_k$.call(this, new Color(color), new Offset(topLeft), new Size(size), new CornerRadius(cornerRadius), style, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawCircle$default(brush, radius, center, alpha, style, colorFilter, blendMode, $super) {
    radius = radius === VOID ? _Size___get_minDimension__impl__4iso0r(this.get_size_cxx1ym_k$()) / 2.0 : radius;
    center = center === VOID ? this.get_center_dcexec_k$() : center;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawCircle_mukkgw_k$(brush, radius, center, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawCircle_mukkgw_k$.call(this, brush, radius, new Offset(center), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawCircle$default_0(color, radius, center, alpha, style, colorFilter, blendMode, $super) {
    radius = radius === VOID ? _Size___get_minDimension__impl__4iso0r(this.get_size_cxx1ym_k$()) / 2.0 : radius;
    center = center === VOID ? this.get_center_dcexec_k$() : center;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawCircle_45hmy1_k$(color, radius, center, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawCircle_45hmy1_k$.call(this, new Color(color), radius, new Offset(center), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawOval$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    size = size === VOID ? offsetSize(this, this.get_size_cxx1ym_k$(), topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawOval_euvgam_k$(brush, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawOval_euvgam_k$.call(this, brush, new Offset(topLeft), new Size(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawOval$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    size = size === VOID ? offsetSize(this, this.get_size_cxx1ym_k$(), topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawOval_xyvj95_k$(color, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawOval_xyvj95_k$.call(this, new Color(color), new Offset(topLeft), new Size(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawArc$default(brush, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    size = size === VOID ? offsetSize(this, this.get_size_cxx1ym_k$(), topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawArc_7lpe6v_k$(brush, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawArc_7lpe6v_k$.call(this, brush, startAngle, sweepAngle, useCenter, new Offset(topLeft), new Size(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawArc$default_0(color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    size = size === VOID ? offsetSize(this, this.get_size_cxx1ym_k$(), topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawArc_oz1pds_k$(color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawArc_oz1pds_k$.call(this, new Color(color), startAngle, sweepAngle, useCenter, new Offset(topLeft), new Size(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default(path, color, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawPath_mbkbcp_k$(path, color, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawPath_mbkbcp_k$.call(this, path, new Color(color), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default_0(path, brush, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawPath_2qit1e_k$(path, brush, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawPath_2qit1e_k$.call(this, path, brush, alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPoints$default(points, pointMode, color, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $super) {
    strokeWidth = strokeWidth === VOID ? 0.0 : strokeWidth;
    cap = cap === VOID ? Companion_getInstance_35().get_Butt_jb7qjw_k$() : cap;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawPoints_l9lrzm_k$(points, pointMode, color, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawPoints_l9lrzm_k$.call(this, points, new PointMode(pointMode), new Color(color), strokeWidth, new StrokeCap(cap), pathEffect, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPoints$default_0(points, pointMode, brush, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $super) {
    strokeWidth = strokeWidth === VOID ? 0.0 : strokeWidth;
    cap = cap === VOID ? Companion_getInstance_35().get_Butt_jb7qjw_k$() : cap;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().DefaultBlendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.drawPoints_7jhunr_k$(points, pointMode, brush, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawPoints_7jhunr_k$.call(this, points, new PointMode(pointMode), brush, strokeWidth, new StrokeCap(cap), pathEffect, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function record(_this__u8e3s4, size, block) {
    var tmp = this.get_layoutDirection_7e37v0_k$();
    return _this__u8e3s4.record_e1qubi_k$(this, tmp, size, DrawScope$record$lambda(this, block));
  }
  function record$default(_this__u8e3s4, size, block, $super) {
    size = size === VOID ? toIntSize(this.get_size_cxx1ym_k$()) : size;
    var tmp;
    if ($super === VOID) {
      this.record_2iwb4s_k$(_this__u8e3s4, size, block);
      tmp = Unit_getInstance();
    } else {
      record(_this__u8e3s4, size, block);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  initMetadataForInterface(DrawScope, 'DrawScope', VOID, VOID, [Density_0]);
  initMetadataForClass(CanvasDrawScope, 'CanvasDrawScope', CanvasDrawScope, VOID, [DrawScope]);
  function get_center_1() {
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    var this_0 = this.get_size_cxx1ym_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = floatFromBits(bits) / 2;
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    var this_1 = this.get_size_cxx1ym_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) / 2;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$8 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$8);
  }
  function clipRect$default_1(left, top, right, bottom, clipOp, $super) {
    left = left === VOID ? 0.0 : left;
    top = top === VOID ? 0.0 : top;
    var tmp;
    if (right === VOID) {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      var this_0 = this.get_size_cxx1ym_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp = floatFromBits(bits);
    } else {
      tmp = right;
    }
    right = tmp;
    var tmp_0;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      var this_1 = this.get_size_cxx1ym_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp_0 = floatFromBits(bits_0);
    } else {
      tmp_0 = bottom;
    }
    bottom = tmp_0;
    clipOp = clipOp === VOID ? Companion_getInstance_20().get_Intersect_gpxc6n_k$() : clipOp;
    var tmp_1;
    if ($super === VOID) {
      this.clipRect_3spswv_k$(left, top, right, bottom, clipOp);
      tmp_1 = Unit_getInstance();
    } else {
      tmp_1 = $super.clipRect_3spswv_k$.call(this, left, top, right, bottom, new ClipOp(clipOp));
    }
    return tmp_1;
  }
  function clipPath$default_0(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_20().get_Intersect_gpxc6n_k$() : clipOp;
    var tmp;
    if ($super === VOID) {
      this.clipPath_tlqunt_k$(path, clipOp);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.clipPath_tlqunt_k$.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  function translate$default(left, top, $super) {
    left = left === VOID ? 0.0 : left;
    top = top === VOID ? 0.0 : top;
    var tmp;
    if ($super === VOID) {
      this.translate_7gghdu_k$(left, top);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.translate_7gghdu_k$.call(this, left, top);
    }
    return tmp;
  }
  function rotate$default(degrees, pivot, $super) {
    pivot = pivot === VOID ? this.get_center_dcexec_k$() : pivot;
    var tmp;
    if ($super === VOID) {
      this.rotate_y7zh1f_k$(degrees, pivot);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.rotate_y7zh1f_k$.call(this, degrees, new Offset(pivot));
    }
    return tmp;
  }
  function scale$default_0(scaleX, scaleY, pivot, $super) {
    pivot = pivot === VOID ? this.get_center_dcexec_k$() : pivot;
    var tmp;
    if ($super === VOID) {
      this.scale_rbtyk0_k$(scaleX, scaleY, pivot);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.scale_rbtyk0_k$.call(this, scaleX, scaleY, new Offset(pivot));
    }
    return tmp;
  }
  initMetadataForInterface(DrawTransform, 'DrawTransform');
  initMetadataForClass(asDrawTransform$1, VOID, VOID, VOID, [DrawTransform]);
  initMetadataForInterface(ContentDrawScope, 'ContentDrawScope', VOID, VOID, [DrawScope]);
  initMetadataForCompanion(Companion_28);
  initMetadataForCompanion(Companion_29);
  initMetadataForClass(DrawStyle, 'DrawStyle');
  initMetadataForClass(Stroke, 'Stroke', Stroke, DrawStyle);
  initMetadataForObject(Fill, 'Fill', VOID, DrawStyle);
  initMetadataForClass(DrawScopeMarker, 'DrawScopeMarker', VOID, VOID, [Annotation]);
  initMetadataForObject(EmptyCanvas, 'EmptyCanvas', VOID, VOID, [Canvas]);
  initMetadataForClass(ChildLayerDependenciesTracker, 'ChildLayerDependenciesTracker', ChildLayerDependenciesTracker);
  initMetadataForCompanion(Companion_30);
  initMetadataForClass(CompositingStrategy, 'CompositingStrategy');
  initMetadataForClass(Painter, 'Painter');
  initMetadataForClass(BitmapPainter, 'BitmapPainter', VOID, Painter);
  initMetadataForClass(DropShadowPainter, 'DropShadowPainter', VOID, Painter);
  initMetadataForInterface(DropShadowRendererProvider, 'DropShadowRendererProvider');
  initMetadataForClass(sam$androidx_compose_ui_graphics_shadow_DropShadowRendererProvider$0, 'sam$androidx_compose_ui_graphics_shadow_DropShadowRendererProvider$0', VOID, VOID, [DropShadowRendererProvider, FunctionAdapter]);
  initMetadataForCompanion(Companion_31);
  initMetadataForClass(ShadowRenderer, 'ShadowRenderer');
  initMetadataForClass(DropShadowRenderer, 'DropShadowRenderer', VOID, ShadowRenderer);
  initMetadataForClass(InnerShadowPainter, 'InnerShadowPainter', VOID, Painter);
  initMetadataForInterface(InnerShadowRendererProvider, 'InnerShadowRendererProvider');
  initMetadataForClass(sam$androidx_compose_ui_graphics_shadow_InnerShadowRendererProvider$0, 'sam$androidx_compose_ui_graphics_shadow_InnerShadowRendererProvider$0', VOID, VOID, [InnerShadowRendererProvider, FunctionAdapter]);
  initMetadataForCompanion(Companion_32);
  initMetadataForClass(InnerShadowRenderer, 'InnerShadowRenderer', VOID, ShadowRenderer);
  initMetadataForClass(Shadow_0, 'Shadow');
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
  initMetadataForClass(NoOp, 'NoOp', VOID, VOID, [Annotation]);
  initMetadataForClass(SkiaBackedCanvas, 'SkiaBackedCanvas', VOID, VOID, [Canvas]);
  initMetadataForClass(SkiaBackedPaint, 'SkiaBackedPaint', SkiaBackedPaint, VOID, [Paint]);
  initMetadataForClass(SkiaBackedPath, 'SkiaBackedPath', SkiaBackedPath, VOID, [Path]);
  initMetadataForClass(SkiaBackedPathEffect, 'SkiaBackedPathEffect', VOID, VOID, [PathEffect]);
  initMetadataForClass(SkiaBackedPathMeasure, 'SkiaBackedPathMeasure', SkiaBackedPathMeasure, VOID, [PathMeasure]);
  initMetadataForClass(RenderEffect, 'RenderEffect');
  initMetadataForCompanion(Companion_33);
  initMetadataForClass(BlurEffect, 'BlurEffect', VOID, RenderEffect);
  initMetadataForClass(SkiaGraphicsContext, 'SkiaGraphicsContext', SkiaGraphicsContext, VOID, [GraphicsContext]);
  initMetadataForClass(SkiaBackedImageBitmap, 'SkiaBackedImageBitmap', VOID, VOID, [ImageBitmap]);
  initMetadataForClass(SkiaPathIterator, 'SkiaPathIterator', VOID, VOID, [PathIterator]);
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
  function findLineRoot(p0, p1, roots, index) {
    index = index === VOID ? 0 : index;
    return writeValidRootInUnitRange(-p0 / (p1 - p0), roots, index);
  }
  function evaluateCubic_0(p0, p1, p2, p3, t) {
    var a = p3 + 3.0 * (p1 - p2) - p0;
    var b = 3.0 * (p2 - 2.0 * p1 + p0);
    var c = 3.0 * (p1 - p0);
    return ((a * t + b) * t + c) * t + p0;
  }
  function closeTo(_this__u8e3s4, b) {
    // Inline function 'kotlin.math.abs' call
    var x = _this__u8e3s4 - b;
    return Math.abs(x) < 1.0E-7;
  }
  function clampValidRootInUnitRange(r) {
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
    return tmp;
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
  function _get_value__a43j40($this) {
    return $this;
  }
  function Companion() {
    Companion_instance = this;
    this.Clear_1 = _BlendMode___init__impl__q6jalh(0);
    this.Src_1 = _BlendMode___init__impl__q6jalh(1);
    this.Dst_1 = _BlendMode___init__impl__q6jalh(2);
    this.SrcOver_1 = _BlendMode___init__impl__q6jalh(3);
    this.DstOver_1 = _BlendMode___init__impl__q6jalh(4);
    this.SrcIn_1 = _BlendMode___init__impl__q6jalh(5);
    this.DstIn_1 = _BlendMode___init__impl__q6jalh(6);
    this.SrcOut_1 = _BlendMode___init__impl__q6jalh(7);
    this.DstOut_1 = _BlendMode___init__impl__q6jalh(8);
    this.SrcAtop_1 = _BlendMode___init__impl__q6jalh(9);
    this.DstAtop_1 = _BlendMode___init__impl__q6jalh(10);
    this.Xor_1 = _BlendMode___init__impl__q6jalh(11);
    this.Plus_1 = _BlendMode___init__impl__q6jalh(12);
    this.Modulate_1 = _BlendMode___init__impl__q6jalh(13);
    this.Screen_1 = _BlendMode___init__impl__q6jalh(14);
    this.Overlay_1 = _BlendMode___init__impl__q6jalh(15);
    this.Darken_1 = _BlendMode___init__impl__q6jalh(16);
    this.Lighten_1 = _BlendMode___init__impl__q6jalh(17);
    this.ColorDodge_1 = _BlendMode___init__impl__q6jalh(18);
    this.ColorBurn_1 = _BlendMode___init__impl__q6jalh(19);
    this.Hardlight_1 = _BlendMode___init__impl__q6jalh(20);
    this.Softlight_1 = _BlendMode___init__impl__q6jalh(21);
    this.Difference_1 = _BlendMode___init__impl__q6jalh(22);
    this.Exclusion_1 = _BlendMode___init__impl__q6jalh(23);
    this.Multiply_1 = _BlendMode___init__impl__q6jalh(24);
    this.Hue_1 = _BlendMode___init__impl__q6jalh(25);
    this.Saturation_1 = _BlendMode___init__impl__q6jalh(26);
    this.Color_1 = _BlendMode___init__impl__q6jalh(27);
    this.Luminosity_1 = _BlendMode___init__impl__q6jalh(28);
  }
  protoOf(Companion).get_Clear_ts5s9y_k$ = function () {
    return this.Clear_1;
  };
  protoOf(Companion).get_Src_3wpzdd_k$ = function () {
    return this.Src_1;
  };
  protoOf(Companion).get_Dst_qkkuz6_k$ = function () {
    return this.Dst_1;
  };
  protoOf(Companion).get_SrcOver_anr685_k$ = function () {
    return this.SrcOver_1;
  };
  protoOf(Companion).get_DstOver_xoacee_k$ = function () {
    return this.DstOver_1;
  };
  protoOf(Companion).get_SrcIn_enr0mu_k$ = function () {
    return this.SrcIn_1;
  };
  protoOf(Companion).get_DstIn_cyk4p5_k$ = function () {
    return this.DstIn_1;
  };
  protoOf(Companion).get_SrcOut_d2bb4n_k$ = function () {
    return this.SrcOut_1;
  };
  protoOf(Companion).get_DstOut_gwk8qg_k$ = function () {
    return this.DstOut_1;
  };
  protoOf(Companion).get_SrcAtop_z2kmd7_k$ = function () {
    return this.SrcAtop_1;
  };
  protoOf(Companion).get_DstAtop_c21g6y_k$ = function () {
    return this.DstAtop_1;
  };
  protoOf(Companion).get_Xor_cjn5co_k$ = function () {
    return this.Xor_1;
  };
  protoOf(Companion).get_Plus_m5bugp_k$ = function () {
    return this.Plus_1;
  };
  protoOf(Companion).get_Modulate_d2dqmw_k$ = function () {
    return this.Modulate_1;
  };
  protoOf(Companion).get_Screen_rhfdpx_k$ = function () {
    return this.Screen_1;
  };
  protoOf(Companion).get_Overlay_hnqr0j_k$ = function () {
    return this.Overlay_1;
  };
  protoOf(Companion).get_Darken_lz7qci_k$ = function () {
    return this.Darken_1;
  };
  protoOf(Companion).get_Lighten_9vbchg_k$ = function () {
    return this.Lighten_1;
  };
  protoOf(Companion).get_ColorDodge_xtmzgz_k$ = function () {
    return this.ColorDodge_1;
  };
  protoOf(Companion).get_ColorBurn_f5bk1t_k$ = function () {
    return this.ColorBurn_1;
  };
  protoOf(Companion).get_Hardlight_1wjq08_k$ = function () {
    return this.Hardlight_1;
  };
  protoOf(Companion).get_Softlight_npagmf_k$ = function () {
    return this.Softlight_1;
  };
  protoOf(Companion).get_Difference_uke8xo_k$ = function () {
    return this.Difference_1;
  };
  protoOf(Companion).get_Exclusion_80cb7p_k$ = function () {
    return this.Exclusion_1;
  };
  protoOf(Companion).get_Multiply_8zrhrx_k$ = function () {
    return this.Multiply_1;
  };
  protoOf(Companion).get_Hue_m25sez_k$ = function () {
    return this.Hue_1;
  };
  protoOf(Companion).get_Saturation_gkrtkh_k$ = function () {
    return this.Saturation_1;
  };
  protoOf(Companion).get_Color_mzcv4g_k$ = function () {
    return this.Color_1;
  };
  protoOf(Companion).get_Luminosity_tkhgzk_k$ = function () {
    return this.Luminosity_1;
  };
  var Companion_instance;
  function Companion_getInstance_18() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function BlendMode__toString_impl_uuibkd($this) {
    return $this === Companion_getInstance_18().Clear_1 ? 'Clear' : $this === Companion_getInstance_18().Src_1 ? 'Src' : $this === Companion_getInstance_18().Dst_1 ? 'Dst' : $this === Companion_getInstance_18().SrcOver_1 ? 'SrcOver' : $this === Companion_getInstance_18().DstOver_1 ? 'DstOver' : $this === Companion_getInstance_18().SrcIn_1 ? 'SrcIn' : $this === Companion_getInstance_18().DstIn_1 ? 'DstIn' : $this === Companion_getInstance_18().SrcOut_1 ? 'SrcOut' : $this === Companion_getInstance_18().DstOut_1 ? 'DstOut' : $this === Companion_getInstance_18().SrcAtop_1 ? 'SrcAtop' : $this === Companion_getInstance_18().DstAtop_1 ? 'DstAtop' : $this === Companion_getInstance_18().Xor_1 ? 'Xor' : $this === Companion_getInstance_18().Plus_1 ? 'Plus' : $this === Companion_getInstance_18().Modulate_1 ? 'Modulate' : $this === Companion_getInstance_18().Screen_1 ? 'Screen' : $this === Companion_getInstance_18().Overlay_1 ? 'Overlay' : $this === Companion_getInstance_18().Darken_1 ? 'Darken' : $this === Companion_getInstance_18().Lighten_1 ? 'Lighten' : $this === Companion_getInstance_18().ColorDodge_1 ? 'ColorDodge' : $this === Companion_getInstance_18().ColorBurn_1 ? 'ColorBurn' : $this === Companion_getInstance_18().Hardlight_1 ? 'HardLight' : $this === Companion_getInstance_18().Softlight_1 ? 'Softlight' : $this === Companion_getInstance_18().Difference_1 ? 'Difference' : $this === Companion_getInstance_18().Exclusion_1 ? 'Exclusion' : $this === Companion_getInstance_18().Multiply_1 ? 'Multiply' : $this === Companion_getInstance_18().Hue_1 ? 'Hue' : $this === Companion_getInstance_18().Saturation_1 ? 'Saturation' : $this === Companion_getInstance_18().Color_1 ? 'Color' : $this === Companion_getInstance_18().Luminosity_1 ? 'Luminosity' : 'Unknown';
  }
  function BlendMode__hashCode_impl_93ceri($this) {
    return $this;
  }
  function BlendMode__equals_impl_1tm25i($this, other) {
    if (!(other instanceof BlendMode))
      return false;
    if (!($this === (other instanceof BlendMode ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function BlendMode(value) {
    Companion_getInstance_18();
    this.value_1 = value;
  }
  protoOf(BlendMode).toString = function () {
    return BlendMode__toString_impl_uuibkd(this.value_1);
  };
  protoOf(BlendMode).hashCode = function () {
    return BlendMode__hashCode_impl_93ceri(this.value_1);
  };
  protoOf(BlendMode).equals = function (other) {
    return BlendMode__equals_impl_1tm25i(this.value_1, other);
  };
  function SolidColor(value) {
    Brush.call(this);
    this.value_1 = value;
  }
  protoOf(SolidColor).get_value_za03u9_k$ = function () {
    return this.value_1;
  };
  protoOf(SolidColor).applyTo_5ix92b_k$ = function (size, p, alpha) {
    p.set_alpha_tvzcqh_k$(1.0);
    var tmp;
    if (!(alpha === 1.0)) {
      tmp = Color__copy$default_impl_ectz3s(this.value_1, _Color___get_alpha__impl__wcfyv1(this.value_1) * alpha);
    } else {
      tmp = this.value_1;
    }
    p.set_color_m2amxp_k$(tmp);
    if (!(p.get_shader_jgtazy_k$() == null)) {
      p.set_shader_tgaw5e_k$(null);
    }
  };
  protoOf(SolidColor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SolidColor))
      return false;
    if (!equals(this.value_1, other.value_1))
      return false;
    return true;
  };
  protoOf(SolidColor).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.value_1);
  };
  protoOf(SolidColor).toString = function () {
    return 'SolidColor(value=' + Color__toString_impl_hpzmaq(this.value_1) + ')';
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).linearGradient_gq8lze_k$ = function (colorStops, start, end, tileMode) {
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
        var tmp$ret$0 = colorStops[index].get_second_jf7fjx_k$();
        list.add_utx5q5_k$(tmp$ret$0);
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
        var tmp$ret$5 = colorStops[index_0].get_first_irdx8n_k$();
        list_0.add_utx5q5_k$(tmp$ret$5);
      }
       while (inductionVariable_0 < size_0);
    return new LinearGradient(tmp, list_0, start, end, tileMode);
  };
  protoOf(Companion_0).linearGradient$default_ae8y8j_k$ = function (colorStops, start, end, tileMode, $super) {
    start = start === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : start;
    end = end === VOID ? Companion_getInstance().get_Infinite_g7y28d_k$() : end;
    tileMode = tileMode === VOID ? Companion_getInstance_37().get_Clamp_ddetsd_k$() : tileMode;
    return $super === VOID ? this.linearGradient_gq8lze_k$(colorStops, start, end, tileMode) : $super.linearGradient_gq8lze_k$.call(this, colorStops, new Offset(start), new Offset(end), new TileMode(tileMode));
  };
  protoOf(Companion_0).linearGradient_qfnkcn_k$ = function (colors, start, end, tileMode) {
    return new LinearGradient(colors, null, start, end, tileMode);
  };
  protoOf(Companion_0).linearGradient$default_6dexgc_k$ = function (colors, start, end, tileMode, $super) {
    start = start === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : start;
    end = end === VOID ? Companion_getInstance().get_Infinite_g7y28d_k$() : end;
    tileMode = tileMode === VOID ? Companion_getInstance_37().get_Clamp_ddetsd_k$() : tileMode;
    return $super === VOID ? this.linearGradient_qfnkcn_k$(colors, start, end, tileMode) : $super.linearGradient_qfnkcn_k$.call(this, colors, new Offset(start), new Offset(end), new TileMode(tileMode));
  };
  protoOf(Companion_0).horizontalGradient_ror43s_k$ = function (colors, startX, endX, tileMode) {
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(startX));
    var v2 = fromInt(toRawBits(0.0));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp = _Offset___init__impl__c168vi(tmp$ret$0);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = fromInt(toRawBits(endX));
    var v2_0 = fromInt(toRawBits(0.0));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
    var tmp$ret$3 = _Offset___init__impl__c168vi(tmp$ret$2);
    return this.linearGradient_qfnkcn_k$(colors, tmp, tmp$ret$3, tileMode);
  };
  protoOf(Companion_0).horizontalGradient$default_bgcgs7_k$ = function (colors, startX, endX, tileMode, $super) {
    startX = startX === VOID ? 0.0 : startX;
    endX = endX === VOID ? Infinity : endX;
    tileMode = tileMode === VOID ? Companion_getInstance_37().get_Clamp_ddetsd_k$() : tileMode;
    return $super === VOID ? this.horizontalGradient_ror43s_k$(colors, startX, endX, tileMode) : $super.horizontalGradient_ror43s_k$.call(this, colors, startX, endX, new TileMode(tileMode));
  };
  protoOf(Companion_0).horizontalGradient_1uxp91_k$ = function (colorStops, startX, endX, tileMode) {
    var tmp = colorStops.slice();
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(startX));
    var v2 = fromInt(toRawBits(0.0));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp_0 = _Offset___init__impl__c168vi(tmp$ret$0);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = fromInt(toRawBits(endX));
    var v2_0 = fromInt(toRawBits(0.0));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
    var tmp$ret$3 = _Offset___init__impl__c168vi(tmp$ret$2);
    return this.linearGradient_gq8lze_k$(tmp, tmp_0, tmp$ret$3, tileMode);
  };
  protoOf(Companion_0).horizontalGradient$default_ptsma8_k$ = function (colorStops, startX, endX, tileMode, $super) {
    startX = startX === VOID ? 0.0 : startX;
    endX = endX === VOID ? Infinity : endX;
    tileMode = tileMode === VOID ? Companion_getInstance_37().get_Clamp_ddetsd_k$() : tileMode;
    return $super === VOID ? this.horizontalGradient_1uxp91_k$(colorStops, startX, endX, tileMode) : $super.horizontalGradient_1uxp91_k$.call(this, colorStops, startX, endX, new TileMode(tileMode));
  };
  protoOf(Companion_0).verticalGradient_hgetkm_k$ = function (colors, startY, endY, tileMode) {
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(0.0));
    var v2 = fromInt(toRawBits(startY));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp = _Offset___init__impl__c168vi(tmp$ret$0);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = fromInt(toRawBits(0.0));
    var v2_0 = fromInt(toRawBits(endY));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
    var tmp$ret$3 = _Offset___init__impl__c168vi(tmp$ret$2);
    return this.linearGradient_qfnkcn_k$(colors, tmp, tmp$ret$3, tileMode);
  };
  protoOf(Companion_0).verticalGradient$default_wik409_k$ = function (colors, startY, endY, tileMode, $super) {
    startY = startY === VOID ? 0.0 : startY;
    endY = endY === VOID ? Infinity : endY;
    tileMode = tileMode === VOID ? Companion_getInstance_37().get_Clamp_ddetsd_k$() : tileMode;
    return $super === VOID ? this.verticalGradient_hgetkm_k$(colors, startY, endY, tileMode) : $super.verticalGradient_hgetkm_k$.call(this, colors, startY, endY, new TileMode(tileMode));
  };
  protoOf(Companion_0).verticalGradient_kcmod5_k$ = function (colorStops, startY, endY, tileMode) {
    var tmp = colorStops.slice();
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(0.0));
    var v2 = fromInt(toRawBits(startY));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp_0 = _Offset___init__impl__c168vi(tmp$ret$0);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = fromInt(toRawBits(0.0));
    var v2_0 = fromInt(toRawBits(endY));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
    var tmp$ret$3 = _Offset___init__impl__c168vi(tmp$ret$2);
    return this.linearGradient_gq8lze_k$(tmp, tmp_0, tmp$ret$3, tileMode);
  };
  protoOf(Companion_0).verticalGradient$default_hhpt8i_k$ = function (colorStops, startY, endY, tileMode, $super) {
    startY = startY === VOID ? 0.0 : startY;
    endY = endY === VOID ? Infinity : endY;
    tileMode = tileMode === VOID ? Companion_getInstance_37().get_Clamp_ddetsd_k$() : tileMode;
    return $super === VOID ? this.verticalGradient_kcmod5_k$(colorStops, startY, endY, tileMode) : $super.verticalGradient_kcmod5_k$.call(this, colorStops, startY, endY, new TileMode(tileMode));
  };
  protoOf(Companion_0).radialGradient_q9mw3i_k$ = function (colorStops, center, radius, tileMode) {
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
        var tmp$ret$0 = colorStops[index].get_second_jf7fjx_k$();
        list.add_utx5q5_k$(tmp$ret$0);
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
        var tmp$ret$5 = colorStops[index_0].get_first_irdx8n_k$();
        list_0.add_utx5q5_k$(tmp$ret$5);
      }
       while (inductionVariable_0 < size_0);
    return new RadialGradient(tmp, list_0, center, radius, tileMode);
  };
  protoOf(Companion_0).radialGradient$default_wwbz6v_k$ = function (colorStops, center, radius, tileMode, $super) {
    center = center === VOID ? Companion_getInstance().get_Unspecified_gis8po_k$() : center;
    radius = radius === VOID ? Infinity : radius;
    tileMode = tileMode === VOID ? Companion_getInstance_37().get_Clamp_ddetsd_k$() : tileMode;
    return $super === VOID ? this.radialGradient_q9mw3i_k$(colorStops, center, radius, tileMode) : $super.radialGradient_q9mw3i_k$.call(this, colorStops, new Offset(center), radius, new TileMode(tileMode));
  };
  protoOf(Companion_0).radialGradient_clg4pn_k$ = function (colors, center, radius, tileMode) {
    return new RadialGradient(colors, null, center, radius, tileMode);
  };
  protoOf(Companion_0).radialGradient$default_upgqlg_k$ = function (colors, center, radius, tileMode, $super) {
    center = center === VOID ? Companion_getInstance().get_Unspecified_gis8po_k$() : center;
    radius = radius === VOID ? Infinity : radius;
    tileMode = tileMode === VOID ? Companion_getInstance_37().get_Clamp_ddetsd_k$() : tileMode;
    return $super === VOID ? this.radialGradient_clg4pn_k$(colors, center, radius, tileMode) : $super.radialGradient_clg4pn_k$.call(this, colors, new Offset(center), radius, new TileMode(tileMode));
  };
  protoOf(Companion_0).sweepGradient_pf4hbc_k$ = function (colorStops, center) {
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
        var tmp$ret$0 = colorStops[index].get_second_jf7fjx_k$();
        list.add_utx5q5_k$(tmp$ret$0);
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
        var tmp$ret$5 = colorStops[index_0].get_first_irdx8n_k$();
        list_0.add_utx5q5_k$(tmp$ret$5);
      }
       while (inductionVariable_0 < size_0);
    return new SweepGradient(center, list, list_0);
  };
  protoOf(Companion_0).sweepGradient$default_k6onmt_k$ = function (colorStops, center, $super) {
    center = center === VOID ? Companion_getInstance().get_Unspecified_gis8po_k$() : center;
    return $super === VOID ? this.sweepGradient_pf4hbc_k$(colorStops, center) : $super.sweepGradient_pf4hbc_k$.call(this, colorStops, new Offset(center));
  };
  protoOf(Companion_0).sweepGradient_xb7pvp_k$ = function (colors, center) {
    return new SweepGradient(center, colors, null);
  };
  protoOf(Companion_0).sweepGradient$default_odlf72_k$ = function (colors, center, $super) {
    center = center === VOID ? Companion_getInstance().get_Unspecified_gis8po_k$() : center;
    return $super === VOID ? this.sweepGradient_xb7pvp_k$(colors, center) : $super.sweepGradient_xb7pvp_k$.call(this, colors, new Offset(center));
  };
  protoOf(Companion_0).composite_pkndtd_k$ = function (dstBrush, srcBrush, blendMode) {
    return new CompositeShaderBrush(toShaderBrush(dstBrush), toShaderBrush(srcBrush), blendMode);
  };
  var Companion_instance_0;
  function Companion_getInstance_19() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Brush() {
    Companion_getInstance_19();
    this.intrinsicSize_1 = Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
  }
  protoOf(Brush).get_intrinsicSize_culx5t_k$ = function () {
    return this.intrinsicSize_1;
  };
  function _set_internalTransformShader__nhknov($this, _set____db54di) {
    $this.internalTransformShader_1 = _set____db54di;
  }
  function _get_internalTransformShader__r2e00t($this) {
    return $this.internalTransformShader_1;
  }
  function _set_createdSize__u0arks($this, _set____db54di) {
    $this.createdSize_1 = _set____db54di;
  }
  function _get_createdSize__aqf42g($this) {
    return $this.createdSize_1;
  }
  function obtainTransformShader($this) {
    var tmp0_elvis_lhs = $this.internalTransformShader_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new TransformShader();
      $this.internalTransformShader_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function ShaderBrush() {
    Brush.call(this);
    this.internalTransformShader_1 = null;
    this.createdSize_1 = Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
    this.transform_1 = null;
  }
  protoOf(ShaderBrush).set_transform_a1itwv_k$ = function (value) {
    this.transform_1 = value;
    var tmp0_safe_receiver = this.internalTransformShader_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.transform_dm16su_k$(value);
    }
  };
  protoOf(ShaderBrush).get_transform_baxf5b_k$ = function () {
    return this.transform_1;
  };
  protoOf(ShaderBrush).applyTo_5ix92b_k$ = function (size, p, alpha) {
    var transformShader = this.internalTransformShader_1;
    if (transformShader == null || !equals(this.createdSize_1, size)) {
      if (Size__isEmpty_impl_o9ye97(size)) {
        transformShader = null;
        this.internalTransformShader_1 = null;
        this.createdSize_1 = Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
      } else {
        // Inline function 'kotlin.apply' call
        var this_0 = obtainTransformShader(this);
        var tmp = this.transform_1;
        if (!((tmp == null ? null : new Matrix(tmp)) == null)) {
          this_0.transform_dm16su_k$(this.transform_1);
        }
        this_0.set_shader_tgaw5e_k$(this.createShader_k0897f_k$(size));
        transformShader = this_0;
        this.internalTransformShader_1 = transformShader;
        this.createdSize_1 = size;
      }
    }
    if (!equals(p.get_color_lnp1vl_k$(), Companion_getInstance_21().get_Black_t4k9fh_k$())) {
      p.set_color_m2amxp_k$(Companion_getInstance_21().get_Black_t4k9fh_k$());
    }
    var tmp_0 = p.get_shader_jgtazy_k$();
    var tmp1_safe_receiver = transformShader;
    if (!equals(tmp_0, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_shader_jgtazy_k$())) {
      var tmp0_safe_receiver = transformShader;
      p.set_shader_tgaw5e_k$(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_shader_jgtazy_k$());
    }
    if (!(p.get_alpha_iooth1_k$() === alpha)) {
      p.set_alpha_tvzcqh_k$(alpha);
    }
  };
  function _get_colors__hj58bp($this) {
    return $this.colors_1;
  }
  function _get_stops__b8qhfk($this) {
    return $this.stops_1;
  }
  function _get_start__b8zdqp($this) {
    return $this.start_1;
  }
  function _get_end__e67thy($this) {
    return $this.end_1;
  }
  function _get_tileMode__a5osqi($this) {
    return $this.tileMode_1;
  }
  function LinearGradient(colors, stops, start, end, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_37().get_Clamp_ddetsd_k$() : tileMode;
    ShaderBrush.call(this);
    this.colors_1 = colors;
    this.stops_1 = stops;
    this.start_1 = start;
    this.end_1 = end;
    this.tileMode_1 = tileMode;
  }
  protoOf(LinearGradient).get_intrinsicSize_culx5t_k$ = function () {
    var tmp;
    var tmp_0;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_0 = this.start_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$3 = floatFromBits(bits);
    if (isFinite(tmp$ret$3)) {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_1 = this.end_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(shiftRight(value_0, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$7 = floatFromBits(bits_0);
      tmp_0 = isFinite(tmp$ret$7);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_2 = this.start_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _Offset___get_packedValue__impl__xh2k8q(this_2);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_1 = floatFromBits(bits_1);
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_3 = this.end_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_2 = _Offset___get_packedValue__impl__xh2k8q(this_3);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_2 = convertToInt(shiftRight(value_2, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      // Inline function 'kotlin.math.abs' call
      var x = tmp_1 - floatFromBits(bits_2);
      tmp = Math.abs(x);
    } else {
      tmp = NaN;
    }
    var tmp0 = tmp;
    var tmp_2;
    var tmp_3;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_4 = this.start_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(this_4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$20 = floatFromBits(bits_3);
    if (isFinite(tmp$ret$20)) {
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_5 = this.end_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_4 = _Offset___get_packedValue__impl__xh2k8q(this_5);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$24 = floatFromBits(bits_4);
      tmp_3 = isFinite(tmp$ret$24);
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_6 = this.start_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_5 = _Offset___get_packedValue__impl__xh2k8q(this_6);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_5 = convertToInt(bitwiseAnd(value_5, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_4 = floatFromBits(bits_5);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_7 = this.end_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_6 = _Offset___get_packedValue__impl__xh2k8q(this_7);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      // Inline function 'kotlin.math.abs' call
      var x_0 = tmp_4 - floatFromBits(bits_6);
      tmp_2 = Math.abs(x_0);
    } else {
      tmp_2 = NaN;
    }
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_2;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$34 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$34);
  };
  protoOf(LinearGradient).createShader_k0897f_k$ = function (size) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_0 = this.start_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    if (floatFromBits(bits) === Infinity) {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(shiftRight(value_0, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp = floatFromBits(bits_0);
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_1 = this.start_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _Offset___get_packedValue__impl__xh2k8q(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp = floatFromBits(bits_1);
    }
    var startX = tmp;
    var tmp_0;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_2 = this.start_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(this_2);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    if (floatFromBits(bits_2) === Infinity) {
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_3 = _Size___get_packedValue__impl__7rlt1o(size);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp_0 = floatFromBits(bits_3);
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_3 = this.start_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_4 = _Offset___get_packedValue__impl__xh2k8q(this_3);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp_0 = floatFromBits(bits_4);
    }
    var startY = tmp_0;
    var tmp_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_4 = this.end_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_5 = _Offset___get_packedValue__impl__xh2k8q(this_4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_5 = convertToInt(shiftRight(value_5, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    if (floatFromBits(bits_5) === Infinity) {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_6 = _Size___get_packedValue__impl__7rlt1o(size);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_6 = convertToInt(shiftRight(value_6, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp_1 = floatFromBits(bits_6);
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_5 = this.end_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_7 = _Offset___get_packedValue__impl__xh2k8q(this_5);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_7 = convertToInt(shiftRight(value_7, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp_1 = floatFromBits(bits_7);
    }
    var endX = tmp_1;
    var tmp_2;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_6 = this.end_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_8 = _Offset___get_packedValue__impl__xh2k8q(this_6);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_8 = convertToInt(bitwiseAnd(value_8, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    if (floatFromBits(bits_8) === Infinity) {
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_9 = _Size___get_packedValue__impl__7rlt1o(size);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_9 = convertToInt(bitwiseAnd(value_9, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp_2 = floatFromBits(bits_9);
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_7 = this.end_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_10 = _Offset___get_packedValue__impl__xh2k8q(this_7);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_10 = convertToInt(bitwiseAnd(value_10, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp_2 = floatFromBits(bits_10);
    }
    var endY = tmp_2;
    var tmp0_colors = this.colors_1;
    var tmp1_colorStops = this.stops_1;
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
    var tmp4_tileMode = this.tileMode_1;
    return LinearGradientShader(tmp2_from, tmp3_to, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(LinearGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LinearGradient))
      return false;
    if (!equals(this.colors_1, other.colors_1))
      return false;
    if (!equals(this.stops_1, other.stops_1))
      return false;
    if (!equals(this.start_1, other.start_1))
      return false;
    if (!equals(this.end_1, other.end_1))
      return false;
    if (!(this.tileMode_1 === other.tileMode_1))
      return false;
    return true;
  };
  protoOf(LinearGradient).hashCode = function () {
    var result = hashCode(this.colors_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.stops_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.start_1) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.end_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.tileMode_1) | 0;
    return result;
  };
  protoOf(LinearGradient).toString = function () {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isFinite' call
    var this_0 = this.start_1;
    var v = bitwiseXor(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_0), new Long(2139095040, 2139095040)), new Long(2139095040, 2139095040));
    if (equalsLong(bitwiseAnd(subtract(v, new Long(1, 1)), new Long(-2147483648, -2147483648)), new Long(0, 0))) {
      tmp = 'start=' + Offset__toString_impl_4ffbou(this.start_1) + ', ';
    } else {
      tmp = '';
    }
    var startValue = tmp;
    var tmp_0;
    // Inline function 'androidx.compose.ui.geometry.isFinite' call
    var this_1 = this.end_1;
    var v_0 = bitwiseXor(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_1), new Long(2139095040, 2139095040)), new Long(2139095040, 2139095040));
    if (equalsLong(bitwiseAnd(subtract(v_0, new Long(1, 1)), new Long(-2147483648, -2147483648)), new Long(0, 0))) {
      tmp_0 = 'end=' + Offset__toString_impl_4ffbou(this.end_1) + ', ';
    } else {
      tmp_0 = '';
    }
    var endValue = tmp_0;
    return 'LinearGradient(colors=' + toString(this.colors_1) + ', ' + ('stops=' + toString_0(this.stops_1) + ', ') + startValue + endValue + ('tileMode=' + TileMode__toString_impl_tlb7f4(this.tileMode_1) + ')');
  };
  function _get_colors__hj58bp_0($this) {
    return $this.colors_1;
  }
  function _get_stops__b8qhfk_0($this) {
    return $this.stops_1;
  }
  function _get_center__m8ext6($this) {
    return $this.center_1;
  }
  function _get_radius__h7nyvb($this) {
    return $this.radius_1;
  }
  function _get_tileMode__a5osqi_0($this) {
    return $this.tileMode_1;
  }
  function RadialGradient(colors, stops, center, radius, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_37().get_Clamp_ddetsd_k$() : tileMode;
    ShaderBrush.call(this);
    this.colors_1 = colors;
    this.stops_1 = stops;
    this.center_1 = center;
    this.radius_1 = radius;
    this.tileMode_1 = tileMode;
  }
  protoOf(RadialGradient).get_intrinsicSize_culx5t_k$ = function () {
    var tmp;
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    var this_0 = this.radius_1;
    if ((toRawBits(this_0) & 2147483647) < 2139095040) {
      var tmp0 = this.radius_1 * 2;
      // Inline function 'androidx.compose.ui.geometry.Size' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = this.radius_1 * 2;
      var v1 = fromInt(toRawBits(tmp0));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      tmp = _Size___init__impl__aywn0g(tmp$ret$1);
    } else {
      tmp = Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
    }
    return tmp;
  };
  protoOf(RadialGradient).createShader_k0897f_k$ = function (size) {
    var centerX;
    var centerY;
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    var this_0 = this.center_1;
    if (equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_0), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344))) {
      var drawCenter = get_center(size);
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(drawCenter);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      centerX = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(drawCenter);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      centerY = floatFromBits(bits_0);
    } else {
      var tmp;
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_1 = this.center_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _Offset___get_packedValue__impl__xh2k8q(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      if (floatFromBits(bits_1) === Infinity) {
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_2 = convertToInt(shiftRight(value_2, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        tmp = floatFromBits(bits_2);
      } else {
        // Inline function 'androidx.compose.ui.geometry.Offset.x' call
        var this_2 = this.center_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_3 = _Offset___get_packedValue__impl__xh2k8q(this_2);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_3 = convertToInt(shiftRight(value_3, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        tmp = floatFromBits(bits_3);
      }
      centerX = tmp;
      var tmp_0;
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_3 = this.center_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_4 = _Offset___get_packedValue__impl__xh2k8q(this_3);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      if (floatFromBits(bits_4) === Infinity) {
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_5 = _Size___get_packedValue__impl__7rlt1o(size);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_5 = convertToInt(bitwiseAnd(value_5, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        tmp_0 = floatFromBits(bits_5);
      } else {
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        var this_4 = this.center_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_6 = _Offset___get_packedValue__impl__xh2k8q(this_4);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        tmp_0 = floatFromBits(bits_6);
      }
      centerY = tmp_0;
    }
    var tmp0_colors = this.colors_1;
    var tmp1_colorStops = this.stops_1;
    var tmp0 = centerX;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = centerY;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$33 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp2_center = _Offset___init__impl__c168vi(tmp$ret$33);
    var tmp3_radius = this.radius_1 === Infinity ? _Size___get_minDimension__impl__4iso0r(size) / 2 : this.radius_1;
    var tmp4_tileMode = this.tileMode_1;
    return RadialGradientShader(tmp2_center, tmp3_radius, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(RadialGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RadialGradient))
      return false;
    if (!equals(this.colors_1, other.colors_1))
      return false;
    if (!equals(this.stops_1, other.stops_1))
      return false;
    if (!equals(this.center_1, other.center_1))
      return false;
    if (!(this.radius_1 === other.radius_1))
      return false;
    if (!(this.tileMode_1 === other.tileMode_1))
      return false;
    return true;
  };
  protoOf(RadialGradient).hashCode = function () {
    var result = hashCode(this.colors_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.stops_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.center_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.radius_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.tileMode_1) | 0;
    return result;
  };
  protoOf(RadialGradient).toString = function () {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.center_1;
    if (!equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_0), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344))) {
      tmp = 'center=' + Offset__toString_impl_4ffbou(this.center_1) + ', ';
    } else {
      tmp = '';
    }
    var centerValue = tmp;
    var tmp_0;
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    var this_1 = this.radius_1;
    if ((toRawBits(this_1) & 2147483647) < 2139095040) {
      tmp_0 = 'radius=' + this.radius_1 + ', ';
    } else {
      tmp_0 = '';
    }
    var radiusValue = tmp_0;
    return 'RadialGradient(' + ('colors=' + toString(this.colors_1) + ', ') + ('stops=' + toString_0(this.stops_1) + ', ') + centerValue + radiusValue + ('tileMode=' + TileMode__toString_impl_tlb7f4(this.tileMode_1) + ')');
  };
  function _get_center__m8ext6_0($this) {
    return $this.center_1;
  }
  function _get_colors__hj58bp_1($this) {
    return $this.colors_1;
  }
  function _get_stops__b8qhfk_1($this) {
    return $this.stops_1;
  }
  function SweepGradient(center, colors, stops) {
    stops = stops === VOID ? null : stops;
    ShaderBrush.call(this);
    this.center_1 = center;
    this.colors_1 = colors;
    this.stops_1 = stops;
  }
  protoOf(SweepGradient).createShader_k0897f_k$ = function (size) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    var this_0 = this.center_1;
    if (equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_0), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344))) {
      tmp = get_center(size);
    } else {
      var tmp_0;
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_1 = this.center_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      if (floatFromBits(bits) === Infinity) {
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_0 = convertToInt(shiftRight(value_0, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        tmp_0 = floatFromBits(bits_0);
      } else {
        // Inline function 'androidx.compose.ui.geometry.Offset.x' call
        var this_2 = this.center_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_1 = _Offset___get_packedValue__impl__xh2k8q(this_2);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_1 = convertToInt(shiftRight(value_1, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        tmp_0 = floatFromBits(bits_1);
      }
      var tmp0 = tmp_0;
      var tmp_1;
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_3 = this.center_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Offset___get_packedValue__impl__xh2k8q(this_3);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      if (floatFromBits(bits_2) === Infinity) {
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_3 = _Size___get_packedValue__impl__7rlt1o(size);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        tmp_1 = floatFromBits(bits_3);
      } else {
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        var this_4 = this.center_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_4 = _Offset___get_packedValue__impl__xh2k8q(this_4);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
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
    return SweepGradientShader(tmp, this.colors_1, this.stops_1);
  };
  protoOf(SweepGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SweepGradient))
      return false;
    if (!equals(this.center_1, other.center_1))
      return false;
    if (!equals(this.colors_1, other.colors_1))
      return false;
    if (!equals(this.stops_1, other.stops_1))
      return false;
    return true;
  };
  protoOf(SweepGradient).hashCode = function () {
    var result = Offset__hashCode_impl_hbql41(this.center_1);
    result = imul(31, result) + hashCode(this.colors_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.stops_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(SweepGradient).toString = function () {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.center_1;
    if (!equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_0), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344))) {
      tmp = 'center=' + Offset__toString_impl_4ffbou(this.center_1) + ', ';
    } else {
      tmp = '';
    }
    var centerValue = tmp;
    return 'SweepGradient(' + centerValue + ('colors=' + toString(this.colors_1) + ', stops=' + toString_0(this.stops_1) + ')');
  };
  function CompositeShaderBrush(dstBrush, srcBrush, blendMode) {
    ShaderBrush.call(this);
    this.dstBrush_1 = dstBrush;
    this.srcBrush_1 = srcBrush;
    this.blendMode_1 = blendMode;
  }
  protoOf(CompositeShaderBrush).get_dstBrush_mllebm_k$ = function () {
    return this.dstBrush_1;
  };
  protoOf(CompositeShaderBrush).get_srcBrush_vv1ksf_k$ = function () {
    return this.srcBrush_1;
  };
  protoOf(CompositeShaderBrush).get_blendMode_si209t_k$ = function () {
    return this.blendMode_1;
  };
  protoOf(CompositeShaderBrush).createShader_k0897f_k$ = function (size) {
    return CompositeShader(this.dstBrush_1.createShader_k0897f_k$(size), this.srcBrush_1.createShader_k0897f_k$(size), this.blendMode_1);
  };
  protoOf(CompositeShaderBrush).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompositeShaderBrush))
      return false;
    if (!equals(this.dstBrush_1, other.dstBrush_1))
      return false;
    if (!equals(this.srcBrush_1, other.srcBrush_1))
      return false;
    if (!(this.blendMode_1 === other.blendMode_1))
      return false;
    return true;
  };
  protoOf(CompositeShaderBrush).hashCode = function () {
    var result = hashCode(this.dstBrush_1);
    result = imul(31, result) + hashCode(this.srcBrush_1) | 0;
    result = imul(31, result) + BlendMode__hashCode_impl_93ceri(this.blendMode_1) | 0;
    return result;
  };
  protoOf(CompositeShaderBrush).toString = function () {
    return 'CompositeShaderBrush(dstBrush=' + toString(this.dstBrush_1) + ', srcBrush=' + toString(this.srcBrush_1) + ', blendMode=' + BlendMode__toString_impl_uuibkd(this.blendMode_1) + ')';
  };
  function toShaderBrush(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ShaderBrush) {
      tmp = _this__u8e3s4;
    } else {
      if (_this__u8e3s4 instanceof SolidColor) {
        var tmp_0 = Companion_getInstance_19().verticalGradient$default_wik409_k$(listOf([new Color(_this__u8e3s4.value_1), new Color(_this__u8e3s4.value_1)]));
        tmp = tmp_0 instanceof ShaderBrush ? tmp_0 : THROW_CCE();
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function ShaderBrush_0(shader) {
    return new ShaderBrush$1(shader);
  }
  function ShaderBrush$1($shader) {
    this.$shader_1 = $shader;
    ShaderBrush.call(this);
  }
  protoOf(ShaderBrush$1).createShader_k0897f_k$ = function (size) {
    return this.$shader_1;
  };
  function Canvas() {
  }
  function Canvas_0(image) {
    return ActualCanvas(image);
  }
  function withSaveLayer(_this__u8e3s4, bounds, paint, block) {
    try {
      _this__u8e3s4.saveLayer_j9hvqf_k$(bounds, paint);
      block();
    }finally {
      _this__u8e3s4.restore_a1ykhu_k$();
    }
  }
  function _ClipOp___init__impl__pqwwy8(value) {
    return value;
  }
  function _get_value__a43j40_0($this) {
    return $this;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.Difference_1 = _ClipOp___init__impl__pqwwy8(0);
    this.Intersect_1 = _ClipOp___init__impl__pqwwy8(1);
  }
  protoOf(Companion_1).get_Difference_lo2jbz_k$ = function () {
    return this.Difference_1;
  };
  protoOf(Companion_1).get_Intersect_gpxc6n_k$ = function () {
    return this.Intersect_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_20() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ClipOp__toString_impl_vwrlao($this) {
    return $this === Companion_getInstance_20().Difference_1 ? 'Difference' : $this === Companion_getInstance_20().Intersect_1 ? 'Intersect' : 'Unknown';
  }
  function ClipOp__hashCode_impl_hd6jvl($this) {
    return $this;
  }
  function ClipOp__equals_impl_g5ajel($this, other) {
    if (!(other instanceof ClipOp))
      return false;
    if (!($this === (other instanceof ClipOp ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ClipOp(value) {
    Companion_getInstance_20();
    this.value_1 = value;
  }
  protoOf(ClipOp).toString = function () {
    return ClipOp__toString_impl_vwrlao(this.value_1);
  };
  protoOf(ClipOp).hashCode = function () {
    return ClipOp__hashCode_impl_hd6jvl(this.value_1);
  };
  protoOf(ClipOp).equals = function (other) {
    return ClipOp__equals_impl_g5ajel(this.value_1, other);
  };
  function hsvToRgbComponent($this, n, h, s, v) {
    var k = (n + h / 60.0) % 6.0;
    var tmp = v * s;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = 4 - k;
    // Inline function 'kotlin.math.max' call
    var b_0 = Math.min(k, b, 1.0);
    return v - tmp * Math.max(0.0, b_0);
  }
  function hslToRgbComponent($this, n, h, s, l) {
    var k = (n + h / 30.0) % 12.0;
    // Inline function 'kotlin.math.min' call
    var b = 1.0 - l;
    var a = s * Math.min(l, b);
    var tmp0 = -1.0;
    var tmp0_0 = k - 3;
    // Inline function 'kotlin.comparisons.minOf' call
    var b_0 = 9 - k;
    // Inline function 'kotlin.math.max' call
    var b_1 = Math.min(tmp0_0, b_0, 1.0);
    return l - a * Math.max(tmp0, b_1);
  }
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
    return tmp0.get_ColorSpacesArray_47ngi9_k$()[id];
  }
  function Color__convert_impl_so5m8t($this, colorSpace) {
    var connector = connect(_Color___get_colorSpace__impl__jqqozk($this), colorSpace);
    return connector.transformToColor_lg4sel_k$($this);
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
            var bits_0 = 1056964608 + m | 0;
            // Inline function 'kotlin.fromBits' call
            FloatCompanionObject_getInstance();
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
        FloatCompanionObject_getInstance();
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
            var bits_0 = 1056964608 + m | 0;
            // Inline function 'kotlin.fromBits' call
            FloatCompanionObject_getInstance();
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
        FloatCompanionObject_getInstance();
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
            var bits_0 = 1056964608 + m | 0;
            // Inline function 'kotlin.fromBits' call
            FloatCompanionObject_getInstance();
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
        FloatCompanionObject_getInstance();
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
  function Color__component1_impl_lz80qe($this) {
    return _Color___get_red__impl__cwrsk6($this);
  }
  function Color__component2_impl_mg9n4l($this) {
    return _Color___get_green__impl__bta9rs($this);
  }
  function Color__component3_impl_mxb9is($this) {
    return _Color___get_blue__impl__xwez13($this);
  }
  function Color__component4_impl_necvwz($this) {
    return _Color___get_alpha__impl__wcfyv1($this);
  }
  function Color__component5_impl_nveib6($this) {
    return _Color___get_colorSpace__impl__jqqozk($this);
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
      tmp = (tmp_0 == null ? null : new Color(tmp_0)).copy_l5ng0s_k$.call(new Color($this), alpha, red, green, blue).value_1;
    }
    return tmp;
  }
  function Color__toString_impl_hpzmaq($this) {
    return 'Color(' + _Color___get_red__impl__cwrsk6($this) + ', ' + _Color___get_green__impl__bta9rs($this) + ', ' + _Color___get_blue__impl__xwez13($this) + ', ' + _Color___get_alpha__impl__wcfyv1($this) + ', ' + _Color___get_colorSpace__impl__jqqozk($this).get_name_woqyms_k$() + ')';
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.Black_1 = Color_1(new Long(-16777216, 0));
    this.DarkGray_1 = Color_1(new Long(-12303292, 0));
    this.Gray_1 = Color_1(new Long(-7829368, 0));
    this.LightGray_1 = Color_1(new Long(-3355444, 0));
    this.White_1 = Color_1(new Long(-1, 0));
    this.Red_1 = Color_1(new Long(-65536, 0));
    this.Green_1 = Color_1(new Long(-16711936, 0));
    this.Blue_1 = Color_1(new Long(-16776961, 0));
    this.Yellow_1 = Color_1(new Long(-256, 0));
    this.Cyan_1 = Color_1(new Long(-16711681, 0));
    this.Magenta_1 = Color_1(new Long(-65281, 0));
    this.Transparent_1 = Color_3(0);
    this.Unspecified_1 = Color_2(0.0, 0.0, 0.0, 0.0, ColorSpaces_getInstance().get_Unspecified_ehgbzf_k$());
  }
  protoOf(Companion_2).get_Black_t4k9fh_k$ = function () {
    return this.Black_1;
  };
  protoOf(Companion_2).get_DarkGray_6zzecp_k$ = function () {
    return this.DarkGray_1;
  };
  protoOf(Companion_2).get_Gray_ci51t9_k$ = function () {
    return this.Gray_1;
  };
  protoOf(Companion_2).get_LightGray_9g8v13_k$ = function () {
    return this.LightGray_1;
  };
  protoOf(Companion_2).get_White_xpp3qf_k$ = function () {
    return this.White_1;
  };
  protoOf(Companion_2).get_Red_6k64b3_k$ = function () {
    return this.Red_1;
  };
  protoOf(Companion_2).get_Green_dkzwf_k$ = function () {
    return this.Green_1;
  };
  protoOf(Companion_2).get_Blue_kx9ene_k$ = function () {
    return this.Blue_1;
  };
  protoOf(Companion_2).get_Yellow_pj9jlw_k$ = function () {
    return this.Yellow_1;
  };
  protoOf(Companion_2).get_Cyan_3r2wtp_k$ = function () {
    return this.Cyan_1;
  };
  protoOf(Companion_2).get_Magenta_tpdrb_k$ = function () {
    return this.Magenta_1;
  };
  protoOf(Companion_2).get_Transparent_if5ln4_k$ = function () {
    return this.Transparent_1;
  };
  protoOf(Companion_2).get_Unspecified_j397pn_k$ = function () {
    return this.Unspecified_1;
  };
  protoOf(Companion_2).hsv_lsakwl_k$ = function (hue, saturation, value, alpha, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    if (!((0.0 <= hue ? hue <= 360.0 : false) && (0.0 <= saturation ? saturation <= 1.0 : false) && (0.0 <= value ? value <= 1.0 : false))) {
      var tmp$ret$0 = 'HSV (' + hue + ', ' + saturation + ', ' + value + ') must be in range (0..360, 0..1, 0..1)';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var red = hsvToRgbComponent(this, 5, hue, saturation, value);
    var green = hsvToRgbComponent(this, 3, hue, saturation, value);
    var blue = hsvToRgbComponent(this, 1, hue, saturation, value);
    return Color_2(red, green, blue, alpha, colorSpace);
  };
  protoOf(Companion_2).hsv$default_arp9ku_k$ = function (hue, saturation, value, alpha, colorSpace, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : colorSpace;
    return $super === VOID ? this.hsv_lsakwl_k$(hue, saturation, value, alpha, colorSpace) : $super.hsv_lsakwl_k$.call(this, hue, saturation, value, alpha, colorSpace).value_1;
  };
  protoOf(Companion_2).hsl_3aq49t_k$ = function (hue, saturation, lightness, alpha, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    if (!((0.0 <= hue ? hue <= 360.0 : false) && (0.0 <= saturation ? saturation <= 1.0 : false) && (0.0 <= lightness ? lightness <= 1.0 : false))) {
      var tmp$ret$0 = 'HSL (' + hue + ', ' + saturation + ', ' + lightness + ') must be in range (0..360, 0..1, 0..1)';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var red = hslToRgbComponent(this, 0, hue, saturation, lightness);
    var green = hslToRgbComponent(this, 8, hue, saturation, lightness);
    var blue = hslToRgbComponent(this, 4, hue, saturation, lightness);
    return Color_2(red, green, blue, alpha, colorSpace);
  };
  protoOf(Companion_2).hsl$default_16toy0_k$ = function (hue, saturation, lightness, alpha, colorSpace, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : colorSpace;
    return $super === VOID ? this.hsl_3aq49t_k$(hue, saturation, lightness, alpha, colorSpace) : $super.hsl_3aq49t_k$.call(this, hue, saturation, lightness, alpha, colorSpace).value_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_21() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Color__hashCode_impl_vjyivj($this) {
    return ULong__hashCode_impl_6hv2lb($this);
  }
  function Color__equals_impl_k06uqz($this, other) {
    if (!(other instanceof Color))
      return false;
    var tmp0_other_with_cast = other instanceof Color ? other.value_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Color(value) {
    Companion_getInstance_21();
    this.value_1 = value;
  }
  protoOf(Color).toString = function () {
    return Color__toString_impl_hpzmaq(this.value_1);
  };
  protoOf(Color).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.value_1);
  };
  protoOf(Color).equals = function (other) {
    return Color__equals_impl_k06uqz(this.value_1, other);
  };
  function takeOrElse(_this__u8e3s4, block) {
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(_this__u8e3s4), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = _this__u8e3s4;
    } else {
      tmp = block().value_1;
    }
    return tmp;
  }
  function lerp_1(start, stop, fraction) {
    var colorSpace = ColorSpaces_getInstance().get_Oklab_ierso8_k$();
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
  function get_isSpecified(_this__u8e3s4) {
    return !equals(_Color___get_value__impl__1pls5m(_this__u8e3s4), _ULong___init__impl__c78o9k(new Long(16, 0)));
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
  function luminance(_this__u8e3s4) {
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    if (!equals(colorSpace.get_model_b1t9lk_k$(), Companion_getInstance_40().get_Rgb_ehihd0_k$())) {
      var tmp$ret$0 = 'The specified color must be encoded in an RGB color space. ' + ('The supplied color space is ' + ColorModel__toString_impl_msukd7(colorSpace.get_model_b1t9lk_k$()));
      throwIllegalArgumentException(tmp$ret$0);
    }
    var eotf = (colorSpace instanceof Rgb ? colorSpace : THROW_CCE()).get_eotfFunc_sfqxs6_k$();
    var r = eotf.invoke_e0thbm_k$(_Color___get_red__impl__cwrsk6(_this__u8e3s4));
    var g = eotf.invoke_e0thbm_k$(_Color___get_green__impl__bta9rs(_this__u8e3s4));
    var b = eotf.invoke_e0thbm_k$(_Color___get_blue__impl__xwez13(_this__u8e3s4));
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = this_0 < 0.0 ? 0.0 : this_0;
    return this_1 > 1.0 ? 1.0 : this_1;
  }
  function get_isUnspecified(_this__u8e3s4) {
    return equals(_Color___get_value__impl__1pls5m(_this__u8e3s4), _ULong___init__impl__c78o9k(new Long(16, 0)));
  }
  function Color_1(color) {
    // Inline function 'kotlin.toULong' call
    var this_0 = shiftLeft(color, 32);
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    return _Color___init__impl__r6cqi2(tmp$ret$0);
  }
  function Color_2(red, green, blue, alpha, colorSpace) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : colorSpace;
    if (colorSpace.get_isSrgb_ew666l_k$()) {
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
    if (!(colorSpace.get_componentCount_ffrht1_k$() === 3)) {
      var tmp$ret$14 = 'Color only works with ColorSpaces with 3 components';
      throwIllegalArgumentException(tmp$ret$14);
    }
    var id = colorSpace.get_id_55djvj_k$();
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    if (!!(id === -1)) {
      var tmp$ret$16 = 'Unknown color space, please use a color space in ColorSpaces';
      throwIllegalArgumentException(tmp$ret$16);
    }
    var tmp2 = colorSpace.getMinValue_3znj7n_k$(0);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = colorSpace.getMaxValue_kswgkr_k$(0);
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
    var tmp2_0 = colorSpace.getMinValue_3znj7n_k$(1);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue_0 = colorSpace.getMaxValue_kswgkr_k$(1);
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
    var tmp2_1 = colorSpace.getMinValue_3znj7n_k$(2);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue_1 = colorSpace.getMaxValue_kswgkr_k$(2);
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
    var this_0 = _Color___get_value__impl__1pls5m(Color__convert_impl_so5m8t(_this__u8e3s4, ColorSpaces_getInstance().get_Srgb_woa2g3_k$()));
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
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : colorSpace;
    if (colorSpace.get_isSrgb_ew666l_k$()) {
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
    var id = colorSpace.get_id_55djvj_k$();
    // Inline function 'kotlin.toULong' call
    var this_1 = bitwiseOr(bitwiseOr(bitwiseOr(bitwiseOr(shiftLeft(bitwiseAnd(fromInt(r), new Long(65535, 0)), 48), shiftLeft(bitwiseAnd(fromInt(g), new Long(65535, 0)), 32)), shiftLeft(bitwiseAnd(fromInt(b), new Long(65535, 0)), 16)), shiftLeft(bitwiseAnd(fromInt(a), new Long(1023, 0)), 6)), bitwiseAnd(fromInt(id), new Long(63, 0)));
    var tmp$ret$7 = _ULong___init__impl__c78o9k(this_1);
    return _Color___init__impl__r6cqi2(tmp$ret$7);
  }
  function compositeComponent(fgC, bgC, fgA, bgA, a) {
    return a === 0.0 ? 0.0 : (fgC * fgA + bgC * bgA * (1.0 - fgA)) / a;
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).tint_547dqc_k$ = function (color, blendMode) {
    return BlendModeColorFilter_init_$Create$(color, blendMode);
  };
  protoOf(Companion_3).tint$default_jnxvki_k$ = function (color, blendMode, $super) {
    blendMode = blendMode === VOID ? Companion_getInstance_18().get_SrcIn_enr0mu_k$() : blendMode;
    return $super === VOID ? this.tint_547dqc_k$(color, blendMode) : $super.tint_547dqc_k$.call(this, new Color(color), new BlendMode(blendMode));
  };
  protoOf(Companion_3).colorMatrix_vyb9m8_k$ = function (colorMatrix) {
    return ColorMatrixColorFilter_init_$Create$(colorMatrix);
  };
  protoOf(Companion_3).lighting_s3t6fu_k$ = function (multiply, add) {
    return LightingColorFilter_init_$Create$(multiply, add);
  };
  var Companion_instance_3;
  function Companion_getInstance_22() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ColorFilter(nativeColorFilter) {
    Companion_getInstance_22();
    this.nativeColorFilter_1 = nativeColorFilter;
  }
  protoOf(ColorFilter).get_nativeColorFilter_iq2lvc_k$ = function () {
    return this.nativeColorFilter_1;
  };
  function BlendModeColorFilter_init_$Init$(color, blendMode, $this) {
    BlendModeColorFilter.call($this, color, blendMode, actualTintColorFilter(color, blendMode));
    return $this;
  }
  function BlendModeColorFilter_init_$Create$(color, blendMode) {
    return BlendModeColorFilter_init_$Init$(color, blendMode, objectCreate(protoOf(BlendModeColorFilter)));
  }
  function BlendModeColorFilter(color, blendMode, nativeColorFilter) {
    ColorFilter.call(this, nativeColorFilter);
    this.color_1 = color;
    this.blendMode_1 = blendMode;
  }
  protoOf(BlendModeColorFilter).get_color_lnp1vl_k$ = function () {
    return this.color_1;
  };
  protoOf(BlendModeColorFilter).get_blendMode_si209t_k$ = function () {
    return this.blendMode_1;
  };
  protoOf(BlendModeColorFilter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlendModeColorFilter))
      return false;
    if (!equals(this.color_1, other.color_1))
      return false;
    if (!(this.blendMode_1 === other.blendMode_1))
      return false;
    return true;
  };
  protoOf(BlendModeColorFilter).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.color_1);
    result = imul(31, result) + BlendMode__hashCode_impl_93ceri(this.blendMode_1) | 0;
    return result;
  };
  protoOf(BlendModeColorFilter).toString = function () {
    return 'BlendModeColorFilter(color=' + Color__toString_impl_hpzmaq(this.color_1) + ', blendMode=' + BlendMode__toString_impl_uuibkd(this.blendMode_1) + ')';
  };
  function _set_colorMatrix__ml61z3($this, _set____db54di) {
    $this.colorMatrix_1 = _set____db54di;
  }
  function _get_colorMatrix__7p84ct($this) {
    return $this.colorMatrix_1;
  }
  function ColorMatrixColorFilter_init_$Init$(colorMatrix, $this) {
    ColorMatrixColorFilter.call($this, colorMatrix, actualColorMatrixColorFilter(colorMatrix));
    return $this;
  }
  function ColorMatrixColorFilter_init_$Create$(colorMatrix) {
    return ColorMatrixColorFilter_init_$Init$(colorMatrix, objectCreate(protoOf(ColorMatrixColorFilter)));
  }
  function obtainColorMatrix($this) {
    var tmp0_elvis_lhs = $this.colorMatrix_1;
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new ColorMatrix_0(tmp_0)) == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new ColorMatrix_0(actualColorMatrixFromFilter($this.nativeColorFilter_1));
      $this.colorMatrix_1 = this_0.values_1;
      tmp = this_0.values_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function ColorMatrixColorFilter(colorMatrix, nativeColorFilter) {
    ColorFilter.call(this, nativeColorFilter);
    this.colorMatrix_1 = colorMatrix;
  }
  protoOf(ColorMatrixColorFilter).copyColorMatrix_mywbr3_k$ = function (targetColorMatrix) {
    var curMatrix = obtainColorMatrix(this);
    var tmp0 = _ColorMatrix___get_values__impl__bpwpry(curMatrix);
    // Inline function 'kotlin.collections.copyInto' call
    var destination = _ColorMatrix___get_values__impl__bpwpry(targetColorMatrix);
    var endIndex = tmp0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination, 0, 0, endIndex);
    return targetColorMatrix;
  };
  protoOf(ColorMatrixColorFilter).copyColorMatrix$default_3f2thh_k$ = function (targetColorMatrix, $super) {
    targetColorMatrix = targetColorMatrix === VOID ? _ColorMatrix___init__impl__3gytx1() : targetColorMatrix;
    return $super === VOID ? this.copyColorMatrix_mywbr3_k$(targetColorMatrix) : $super.copyColorMatrix_mywbr3_k$.call(this, new ColorMatrix_0(targetColorMatrix)).values_1;
  };
  protoOf(ColorMatrixColorFilter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorMatrixColorFilter))
      return false;
    var colorMatrix = obtainColorMatrix(this);
    var otherColorMatrix = obtainColorMatrix(other);
    if (!contentEquals(_ColorMatrix___get_values__impl__bpwpry(colorMatrix), _ColorMatrix___get_values__impl__bpwpry(otherColorMatrix)))
      return false;
    return true;
  };
  protoOf(ColorMatrixColorFilter).hashCode = function () {
    var tmp0_safe_receiver = this.colorMatrix_1;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new ColorMatrix_0(tmp_0)) == null) {
      tmp = null;
    } else {
      tmp = ColorMatrix__hashCode_impl_tanbn6(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(ColorMatrixColorFilter).toString = function () {
    var tmp = this.colorMatrix_1;
    return 'ColorMatrixColorFilter(colorMatrix=' + toString_0(tmp == null ? null : new ColorMatrix_0(tmp)) + ')';
  };
  function LightingColorFilter_init_$Init$(multiply, add, $this) {
    LightingColorFilter.call($this, multiply, add, actualLightingColorFilter(multiply, add));
    return $this;
  }
  function LightingColorFilter_init_$Create$(multiply, add) {
    return LightingColorFilter_init_$Init$(multiply, add, objectCreate(protoOf(LightingColorFilter)));
  }
  function LightingColorFilter(multiply, add, nativeColorFilter) {
    ColorFilter.call(this, nativeColorFilter);
    this.multiply_1 = multiply;
    this.add_1 = add;
  }
  protoOf(LightingColorFilter).get_multiply_9flln8_k$ = function () {
    return this.multiply_1;
  };
  protoOf(LightingColorFilter).get_add_essgan_k$ = function () {
    return this.add_1;
  };
  protoOf(LightingColorFilter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LightingColorFilter))
      return false;
    if (!equals(this.multiply_1, other.multiply_1))
      return false;
    if (!equals(this.add_1, other.add_1))
      return false;
    return true;
  };
  protoOf(LightingColorFilter).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.multiply_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.add_1) | 0;
    return result;
  };
  protoOf(LightingColorFilter).toString = function () {
    return 'LightingColorFilter(multiply=' + Color__toString_impl_hpzmaq(this.multiply_1) + ', add=' + Color__toString_impl_hpzmaq(this.add_1) + ')';
  };
  function _ColorMatrix___init__impl__3gytx1(values) {
    var tmp;
    if (values === VOID) {
      // Inline function 'kotlin.floatArrayOf' call
      tmp = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0]);
    } else {
      tmp = values;
    }
    values = tmp;
    return values;
  }
  function _ColorMatrix___get_values__impl__bpwpry($this) {
    return $this;
  }
  function ColorMatrix__get_impl_cdhqm3($this, row, column) {
    return _ColorMatrix___get_values__impl__bpwpry($this)[imul(row, 5) + column | 0];
  }
  function ColorMatrix__set_impl_33f5gv($this, row, column, v) {
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(row, 5) + column | 0] = v;
  }
  function ColorMatrix__reset_impl_aaa3ky($this) {
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 4 | 0] = 0.0;
  }
  function ColorMatrix__set_impl_33f5gv_0($this, src) {
    var v1 = _ColorMatrix___get_values__impl__bpwpry($this);
    if (v1.length < 20)
      return Unit_getInstance();
    var v2 = _ColorMatrix___get_values__impl__bpwpry(src);
    if (v2.length < 20)
      return Unit_getInstance();
    v1[0] = v2[0];
    v1[1] = v2[1];
    v1[2] = v2[2];
    v1[3] = v2[3];
    v1[4] = v2[4];
    v1[5] = v2[5];
    v1[6] = v2[6];
    v1[7] = v2[7];
    v1[8] = v2[8];
    v1[9] = v2[9];
    v1[10] = v2[10];
    v1[11] = v2[11];
    v1[12] = v2[12];
    v1[13] = v2[13];
    v1[14] = v2[14];
    v1[15] = v2[15];
    v1[16] = v2[16];
    v1[17] = v2[17];
    v1[18] = v2[18];
    v1[19] = v2[19];
  }
  function rotateInternal($this, degrees, block) {
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.reset' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 4 | 0] = 0.0;
    var normalizedAngle = degrees * (1.0 / 360.0);
    // Inline function 'androidx.compose.ui.util.normalizedAngleCos' call
    // Inline function 'androidx.compose.ui.util.normalizedAngleSin' call
    var normalizedDegrees = normalizedAngle + 0.25;
    // Inline function 'kotlin.math.floor' call
    var x = normalizedDegrees + 0.5;
    var degrees_0 = normalizedDegrees - Math.floor(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = 2.0 * Math.abs(degrees_0);
    var a = 1.0 - x_0;
    var cosine = 8.0 * degrees_0 * a / (1.25 - x_0 * a);
    // Inline function 'androidx.compose.ui.util.normalizedAngleSin' call
    // Inline function 'kotlin.math.floor' call
    var x_1 = normalizedAngle + 0.5;
    var degrees_1 = normalizedAngle - Math.floor(x_1);
    // Inline function 'kotlin.math.abs' call
    var x_2 = 2.0 * Math.abs(degrees_1);
    var a_0 = 1.0 - x_2;
    var sine = 8.0 * degrees_1 * a_0 / (1.25 - x_2 * a_0);
    block(cosine, sine);
  }
  function ColorMatrix__timesAssign_impl_tpdrdo($this, colorMatrix) {
    if (_ColorMatrix___get_values__impl__bpwpry($this).length < 20)
      return Unit_getInstance();
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_0 = tmp * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_1 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_2 = tmp_0 + tmp_1 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_3 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_4 = tmp_2 + tmp_3 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_5 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v00 = tmp_4 + tmp_5 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_6 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_7 = tmp_6 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_8 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_9 = tmp_7 + tmp_8 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_10 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_11 = tmp_9 + tmp_10 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_12 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v01 = tmp_11 + tmp_12 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_13 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_14 = tmp_13 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_15 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_16 = tmp_14 + tmp_15 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_17 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_18 = tmp_16 + tmp_17 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_19 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v02 = tmp_18 + tmp_19 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_20 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_21 = tmp_20 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_22 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_23 = tmp_21 + tmp_22 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_24 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_25 = tmp_23 + tmp_24 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_26 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v03 = tmp_25 + tmp_26 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_27 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_28 = tmp_27 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_29 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_30 = tmp_28 + tmp_29 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_31 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_32 = tmp_30 + tmp_31 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_33 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_34 = tmp_32 + tmp_33 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v04 = tmp_34 + _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_35 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_36 = tmp_35 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_37 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_38 = tmp_36 + tmp_37 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_39 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_40 = tmp_38 + tmp_39 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_41 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v10 = tmp_40 + tmp_41 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_42 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_43 = tmp_42 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_44 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_45 = tmp_43 + tmp_44 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_46 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_47 = tmp_45 + tmp_46 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_48 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v11 = tmp_47 + tmp_48 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_49 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_50 = tmp_49 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_51 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_52 = tmp_50 + tmp_51 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_53 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_54 = tmp_52 + tmp_53 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_55 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v12 = tmp_54 + tmp_55 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_56 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_57 = tmp_56 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_58 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_59 = tmp_57 + tmp_58 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_60 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_61 = tmp_59 + tmp_60 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_62 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v13 = tmp_61 + tmp_62 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_63 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_64 = tmp_63 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_65 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_66 = tmp_64 + tmp_65 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_67 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_68 = tmp_66 + tmp_67 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_69 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_70 = tmp_68 + tmp_69 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v14 = tmp_70 + _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_71 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_72 = tmp_71 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_73 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_74 = tmp_72 + tmp_73 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_75 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_76 = tmp_74 + tmp_75 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_77 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v20 = tmp_76 + tmp_77 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_78 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_79 = tmp_78 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_80 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_81 = tmp_79 + tmp_80 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_82 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_83 = tmp_81 + tmp_82 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_84 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v21 = tmp_83 + tmp_84 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_85 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_86 = tmp_85 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_87 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_88 = tmp_86 + tmp_87 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_89 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_90 = tmp_88 + tmp_89 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_91 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v22 = tmp_90 + tmp_91 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_92 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_93 = tmp_92 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_94 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_95 = tmp_93 + tmp_94 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_96 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_97 = tmp_95 + tmp_96 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_98 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v23 = tmp_97 + tmp_98 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_99 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_100 = tmp_99 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_101 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_102 = tmp_100 + tmp_101 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_103 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_104 = tmp_102 + tmp_103 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_105 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_106 = tmp_104 + tmp_105 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v24 = tmp_106 + _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_107 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_108 = tmp_107 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_109 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_110 = tmp_108 + tmp_109 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_111 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_112 = tmp_110 + tmp_111 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_113 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v30 = tmp_112 + tmp_113 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_114 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_115 = tmp_114 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_116 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_117 = tmp_115 + tmp_116 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_118 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_119 = tmp_117 + tmp_118 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_120 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v31 = tmp_119 + tmp_120 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_121 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_122 = tmp_121 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_123 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_124 = tmp_122 + tmp_123 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_125 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_126 = tmp_124 + tmp_125 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_127 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v32 = tmp_126 + tmp_127 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_128 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_129 = tmp_128 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_130 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_131 = tmp_129 + tmp_130 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_132 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_133 = tmp_131 + tmp_132 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_134 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v33 = tmp_133 + tmp_134 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_135 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_136 = tmp_135 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(0, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_137 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_138 = tmp_136 + tmp_137 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(1, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_139 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_140 = tmp_138 + tmp_139 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(2, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_141 = _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_142 = tmp_140 + tmp_141 * _ColorMatrix___get_values__impl__bpwpry(colorMatrix)[imul(3, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var v34 = tmp_142 + _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 4 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 3 | 0] = v03;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 4 | 0] = v04;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 3 | 0] = v13;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 4 | 0] = v14;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = v20;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = v21;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 3 | 0] = v23;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 4 | 0] = v24;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 0 | 0] = v30;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 1 | 0] = v31;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 2 | 0] = v32;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0] = v33;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 4 | 0] = v34;
  }
  function ColorMatrix__setToSaturation_impl_j3wbeq($this, sat) {
    if (_ColorMatrix___get_values__impl__bpwpry($this).length < 20)
      return Unit_getInstance();
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.reset' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 4 | 0] = 0.0;
    var invSat = 1 - sat;
    var r = 0.213 * invSat;
    var g = 0.715 * invSat;
    var b = 0.072 * invSat;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var v = r + sat;
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = v;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0] = g;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = b;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = r;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var v_0 = g + sat;
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = v_0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = b;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = r;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = g;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var v_1 = b + sat;
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = v_1;
  }
  function ColorMatrix__setToScale_impl_162gnw($this, redScale, greenScale, blueScale, alphaScale) {
    if (_ColorMatrix___get_values__impl__bpwpry($this).length < 20)
      return Unit_getInstance();
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.reset' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = redScale;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = greenScale;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = blueScale;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0] = alphaScale;
  }
  function ColorMatrix__setToRotateRed_impl_xjp2wg($this, degrees) {
    if (_ColorMatrix___get_values__impl__bpwpry($this).length < 20)
      return Unit_getInstance();
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.rotateInternal' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.reset' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 4 | 0] = 0.0;
    var normalizedAngle = degrees * (1.0 / 360.0);
    // Inline function 'androidx.compose.ui.util.normalizedAngleCos' call
    // Inline function 'androidx.compose.ui.util.normalizedAngleSin' call
    var normalizedDegrees = normalizedAngle + 0.25;
    // Inline function 'kotlin.math.floor' call
    var x = normalizedDegrees + 0.5;
    var degrees_0 = normalizedDegrees - Math.floor(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = 2.0 * Math.abs(degrees_0);
    var a = 1.0 - x_0;
    var cosine = 8.0 * degrees_0 * a / (1.25 - x_0 * a);
    // Inline function 'androidx.compose.ui.util.normalizedAngleSin' call
    // Inline function 'kotlin.math.floor' call
    var x_1 = normalizedAngle + 0.5;
    var degrees_1 = normalizedAngle - Math.floor(x_1);
    // Inline function 'kotlin.math.abs' call
    var x_2 = 2.0 * Math.abs(degrees_1);
    var a_0 = 1.0 - x_2;
    var sine = 8.0 * degrees_1 * a_0 / (1.25 - x_2 * a_0);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = sine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var v = -sine;
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = v;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = cosine;
  }
  function ColorMatrix__setToRotateGreen_impl_7547ya($this, degrees) {
    if (_ColorMatrix___get_values__impl__bpwpry($this).length < 20)
      return Unit_getInstance();
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.rotateInternal' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.reset' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 4 | 0] = 0.0;
    var normalizedAngle = degrees * (1.0 / 360.0);
    // Inline function 'androidx.compose.ui.util.normalizedAngleCos' call
    // Inline function 'androidx.compose.ui.util.normalizedAngleSin' call
    var normalizedDegrees = normalizedAngle + 0.25;
    // Inline function 'kotlin.math.floor' call
    var x = normalizedDegrees + 0.5;
    var degrees_0 = normalizedDegrees - Math.floor(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = 2.0 * Math.abs(degrees_0);
    var a = 1.0 - x_0;
    var cosine = 8.0 * degrees_0 * a / (1.25 - x_0 * a);
    // Inline function 'androidx.compose.ui.util.normalizedAngleSin' call
    // Inline function 'kotlin.math.floor' call
    var x_1 = normalizedAngle + 0.5;
    var degrees_1 = normalizedAngle - Math.floor(x_1);
    // Inline function 'kotlin.math.abs' call
    var x_2 = 2.0 * Math.abs(degrees_1);
    var a_0 = 1.0 - x_2;
    var sine = 8.0 * degrees_1 * a_0 / (1.25 - x_2 * a_0);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var v = -sine;
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = v;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = sine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = cosine;
  }
  function ColorMatrix__setToRotateBlue_impl_68t0yn($this, degrees) {
    if (_ColorMatrix___get_values__impl__bpwpry($this).length < 20)
      return Unit_getInstance();
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.rotateInternal' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.reset' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 4 | 0] = 0.0;
    var normalizedAngle = degrees * (1.0 / 360.0);
    // Inline function 'androidx.compose.ui.util.normalizedAngleCos' call
    // Inline function 'androidx.compose.ui.util.normalizedAngleSin' call
    var normalizedDegrees = normalizedAngle + 0.25;
    // Inline function 'kotlin.math.floor' call
    var x = normalizedDegrees + 0.5;
    var degrees_0 = normalizedDegrees - Math.floor(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = 2.0 * Math.abs(degrees_0);
    var a = 1.0 - x_0;
    var cosine = 8.0 * degrees_0 * a / (1.25 - x_0 * a);
    // Inline function 'androidx.compose.ui.util.normalizedAngleSin' call
    // Inline function 'kotlin.math.floor' call
    var x_1 = normalizedAngle + 0.5;
    var degrees_1 = normalizedAngle - Math.floor(x_1);
    // Inline function 'kotlin.math.abs' call
    var x_2 = 2.0 * Math.abs(degrees_1);
    var a_0 = 1.0 - x_2;
    var sine = 8.0 * degrees_1 * a_0 / (1.25 - x_2 * a_0);
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = cosine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0] = sine;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var v = -sine;
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = v;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = cosine;
  }
  function ColorMatrix__convertRgbToYuv_impl_9vsur8($this) {
    if (_ColorMatrix___get_values__impl__bpwpry($this).length < 20)
      return Unit_getInstance();
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.reset' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = 0.299;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0] = 0.587;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = 0.114;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var v = -0.16874;
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = v;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var v_0 = -0.33126;
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = v_0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = 0.5;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = 0.5;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var v_1 = -0.41869;
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = v_1;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var v_2 = -0.08131;
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = v_2;
  }
  function ColorMatrix__convertYuvToRgb_impl_um2qre($this) {
    if (_ColorMatrix___get_values__impl__bpwpry($this).length < 20)
      return Unit_getInstance();
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.reset' call
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 0 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 3 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(3, 5) + 4 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(0, 5) + 2 | 0] = 1.402;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 0 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var v = -0.34414;
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 1 | 0] = v;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    var v_0 = -0.71414;
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(1, 5) + 2 | 0] = v_0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 0 | 0] = 1.0;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 1 | 0] = 1.772;
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.set' call
    _ColorMatrix___get_values__impl__bpwpry($this)[imul(2, 5) + 2 | 0] = 0.0;
  }
  function ColorMatrix__toString_impl_7jheub($this) {
    return 'ColorMatrix(values=' + toString($this) + ')';
  }
  function ColorMatrix__hashCode_impl_tanbn6($this) {
    return hashCode($this);
  }
  function ColorMatrix__equals_impl_k9m0uu($this, other) {
    if (!(other instanceof ColorMatrix_0))
      return false;
    var tmp0_other_with_cast = other instanceof ColorMatrix_0 ? other.values_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ColorMatrix_0(values) {
    this.values_1 = values;
  }
  protoOf(ColorMatrix_0).toString = function () {
    return ColorMatrix__toString_impl_7jheub(this.values_1);
  };
  protoOf(ColorMatrix_0).hashCode = function () {
    return ColorMatrix__hashCode_impl_tanbn6(this.values_1);
  };
  protoOf(ColorMatrix_0).equals = function (other) {
    return ColorMatrix__equals_impl_k9m0uu(this.values_1, other);
  };
  function dot(m1, row, m2, column) {
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp = _ColorMatrix___get_values__impl__bpwpry(m1)[imul(row, 5) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_0 = tmp * _ColorMatrix___get_values__impl__bpwpry(m2)[imul(0, 5) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_1 = _ColorMatrix___get_values__impl__bpwpry(m1)[imul(row, 5) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_2 = tmp_0 + tmp_1 * _ColorMatrix___get_values__impl__bpwpry(m2)[imul(1, 5) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_3 = _ColorMatrix___get_values__impl__bpwpry(m1)[imul(row, 5) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_4 = tmp_2 + tmp_3 * _ColorMatrix___get_values__impl__bpwpry(m2)[imul(2, 5) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    var tmp_5 = _ColorMatrix___get_values__impl__bpwpry(m1)[imul(row, 5) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.ColorMatrix.get' call
    return tmp_4 + tmp_5 * _ColorMatrix___get_values__impl__bpwpry(m2)[imul(3, 5) + column | 0];
  }
  function degrees(radians) {
    return 57.29578 * radians;
  }
  function _FilterQuality___init__impl__nv51aq(value) {
    return value;
  }
  function _FilterQuality___get_value__impl__vmx58a($this) {
    return $this;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.None_1 = _FilterQuality___init__impl__nv51aq(0);
    this.Low_1 = _FilterQuality___init__impl__nv51aq(1);
    this.Medium_1 = _FilterQuality___init__impl__nv51aq(2);
    this.High_1 = _FilterQuality___init__impl__nv51aq(3);
  }
  protoOf(Companion_4).get_None_wkrz0k_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_4).get_Low_7s05n6_k$ = function () {
    return this.Low_1;
  };
  protoOf(Companion_4).get_Medium_8fylwf_k$ = function () {
    return this.Medium_1;
  };
  protoOf(Companion_4).get_High_14avfy_k$ = function () {
    return this.High_1;
  };
  var Companion_instance_4;
  function Companion_getInstance_23() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function FilterQuality__toString_impl_i5cfty($this) {
    return $this === Companion_getInstance_23().None_1 ? 'None' : $this === Companion_getInstance_23().Low_1 ? 'Low' : $this === Companion_getInstance_23().Medium_1 ? 'Medium' : $this === Companion_getInstance_23().High_1 ? 'High' : 'Unknown';
  }
  function FilterQuality__hashCode_impl_v4lpcb($this) {
    return $this;
  }
  function FilterQuality__equals_impl_katg2v($this, other) {
    if (!(other instanceof FilterQuality))
      return false;
    if (!($this === (other instanceof FilterQuality ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FilterQuality(value) {
    Companion_getInstance_23();
    this.value_1 = value;
  }
  protoOf(FilterQuality).toString = function () {
    return FilterQuality__toString_impl_i5cfty(this.value_1);
  };
  protoOf(FilterQuality).hashCode = function () {
    return FilterQuality__hashCode_impl_v4lpcb(this.value_1);
  };
  protoOf(FilterQuality).equals = function (other) {
    return FilterQuality__equals_impl_katg2v(this.value_1, other);
  };
  function get_Fp32DenormalFloat() {
    _init_properties_Float16_kt__eyzj8x();
    return Fp32DenormalFloat;
  }
  var Fp32DenormalFloat;
  function halfToFloat(h) {
    _init_properties_Float16_kt__eyzj8x();
    var bits = h & 65535;
    var s = bits & 32768;
    var e = (bits >>> 10 | 0) & 31;
    var m = bits & 1023;
    var outE = 0;
    var outM = 0;
    if (e === 0) {
      if (!(m === 0)) {
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_0 = 1056964608 + m | 0;
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var o = floatFromBits(bits_0);
        o = o - access$_get_Fp32DenormalFloat_$tFloat16Kt_xjne9g();
        return s === 0 ? o : -o;
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
    FloatCompanionObject_getInstance();
    return floatFromBits(out);
  }
  function floatToHalf(f) {
    _init_properties_Float16_kt__eyzj8x();
    var bits = toRawBits(f);
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
          return toShort(out | s << 15);
        }
      }
    }
    return toShort(s << 15 | outE << 10 | outM);
  }
  function access$_get_Fp32DenormalFloat_$tFloat16Kt_xjne9g() {
    return get_Fp32DenormalFloat();
  }
  var properties_initialized_Float16_kt_xeo1ox;
  function _init_properties_Float16_kt__eyzj8x() {
    if (!properties_initialized_Float16_kt_xeo1ox) {
      properties_initialized_Float16_kt_xeo1ox = true;
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = 1056964608;
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      Fp32DenormalFloat = floatFromBits(bits);
    }
  }
  function GraphicsContext$shadowContext$1() {
  }
  function GraphicsContext() {
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  var Companion_instance_5;
  function Companion_getInstance_24() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function ImageBitmap() {
  }
  function ImageBitmap_0(width, height, config, hasAlpha, colorSpace) {
    config = config === VOID ? Companion_getInstance_25().Argb8888__1 : config;
    hasAlpha = hasAlpha === VOID ? true : hasAlpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : colorSpace;
    return ActualImageBitmap(width, height, config, hasAlpha, colorSpace);
  }
  function _ImageBitmapConfig___init__impl__wfx9yl(value) {
    return value;
  }
  function _ImageBitmapConfig___get_value__impl__fqx4u7($this) {
    return $this;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.Argb8888__1 = _ImageBitmapConfig___init__impl__wfx9yl(0);
    this.Alpha8__1 = _ImageBitmapConfig___init__impl__wfx9yl(1);
    this.Rgb565__1 = _ImageBitmapConfig___init__impl__wfx9yl(2);
    this.F16__1 = _ImageBitmapConfig___init__impl__wfx9yl(3);
    this.Gpu_1 = _ImageBitmapConfig___init__impl__wfx9yl(4);
  }
  protoOf(Companion_6).get_Argb8888_epitdf_k$ = function () {
    return this.Argb8888__1;
  };
  protoOf(Companion_6).get_Alpha8_8qn3sx_k$ = function () {
    return this.Alpha8__1;
  };
  protoOf(Companion_6).get_Rgb565_qf3bri_k$ = function () {
    return this.Rgb565__1;
  };
  protoOf(Companion_6).get_F16_tc2i3k_k$ = function () {
    return this.F16__1;
  };
  protoOf(Companion_6).get_Gpu_jdwuw1_k$ = function () {
    return this.Gpu_1;
  };
  var Companion_instance_6;
  function Companion_getInstance_25() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function ImageBitmapConfig__toString_impl_dfv42d($this) {
    return $this === Companion_getInstance_25().Argb8888__1 ? 'Argb8888' : $this === Companion_getInstance_25().Alpha8__1 ? 'Alpha8' : $this === Companion_getInstance_25().Rgb565__1 ? 'Rgb565' : $this === Companion_getInstance_25().F16__1 ? 'F16' : $this === Companion_getInstance_25().Gpu_1 ? 'Gpu' : 'Unknown';
  }
  function ImageBitmapConfig__hashCode_impl_8basqi($this) {
    return $this;
  }
  function ImageBitmapConfig__equals_impl_hqcsv2($this, other) {
    if (!(other instanceof ImageBitmapConfig))
      return false;
    if (!($this === (other instanceof ImageBitmapConfig ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ImageBitmapConfig(value) {
    Companion_getInstance_25();
    this.value_1 = value;
  }
  protoOf(ImageBitmapConfig).toString = function () {
    return ImageBitmapConfig__toString_impl_dfv42d(this.value_1);
  };
  protoOf(ImageBitmapConfig).hashCode = function () {
    return ImageBitmapConfig__hashCode_impl_8basqi(this.value_1);
  };
  protoOf(ImageBitmapConfig).equals = function (other) {
    return ImageBitmapConfig__equals_impl_hqcsv2(this.value_1, other);
  };
  function requirePrecondition(value, lazyMessage) {
    if (!value) {
      throwIllegalArgumentException(lazyMessage());
    }
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function get_EmptyInterval() {
    _init_properties_IntervalTree_kt__eo9qg3();
    return EmptyInterval;
  }
  var EmptyInterval;
  function Interval(start, end, data) {
    data = data === VOID ? null : data;
    this.start_1 = start;
    this.end_1 = end;
    this.data_1 = data;
  }
  protoOf(Interval).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(Interval).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(Interval).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(Interval).overlaps_5309r9_k$ = function (other) {
    return this.start_1 <= other.end_1 && this.end_1 >= other.start_1;
  };
  protoOf(Interval).overlaps_brxjas_k$ = function (start, end) {
    return this.start_1 <= end && this.end_1 >= start;
  };
  protoOf(Interval).contains_8bpbll_k$ = function (value) {
    var containsLower = this.start_1;
    return value <= this.end_1 ? containsLower <= value : false;
  };
  protoOf(Interval).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Interval))
      THROW_CCE();
    if (!(this.start_1 === other.start_1))
      return false;
    if (!(this.end_1 === other.end_1))
      return false;
    if (!equals(this.data_1, other.data_1))
      return false;
    return true;
  };
  protoOf(Interval).hashCode = function () {
    var result = getNumberHashCode(this.start_1);
    result = imul(31, result) + getNumberHashCode(this.end_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.data_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(Interval).toString = function () {
    return 'Interval(start=' + this.start_1 + ', end=' + this.end_1 + ', data=' + toString_0(this.data_1) + ')';
  };
  var properties_initialized_IntervalTree_kt_pp6tut;
  function _init_properties_IntervalTree_kt__eo9qg3() {
    if (!properties_initialized_IntervalTree_kt_pp6tut) {
      properties_initialized_IntervalTree_kt_pp6tut = true;
      EmptyInterval = new Interval(3.4028235E38, 1.4E-45, null);
    }
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
  function Matrix__get_impl_xogbpk($this, row, column) {
    return _Matrix___get_values__impl__fblr7b($this)[imul(row, 4) + column | 0];
  }
  function Matrix__set_impl_s2l54c($this, row, column, v) {
    _Matrix___get_values__impl__fblr7b($this)[imul(row, 4) + column | 0] = v;
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
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(point);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
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
    var l = rect.get_left_woprgw_k$();
    var t = rect.get_top_18ivbo_k$();
    var r = rect.get_right_ixz7xv_k$();
    var b = rect.get_bottom_bj8ras_k$();
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
      return Unit_getInstance();
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
    var l = rect.get_left_woprgw_k$();
    var t = rect.get_top_18ivbo_k$();
    var r = rect.get_right_ixz7xv_k$();
    var b = rect.get_bottom_bj8ras_k$();
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
    var tmp$ret$16 = Math.min(x0, b_1);
    rect.set_left_bnynok_k$(tmp$ret$16);
    // Inline function 'androidx.compose.ui.util.fastMinOf' call
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'kotlin.comparisons.minOf' call
    var b_2 = Math.min(y2, y3);
    // Inline function 'kotlin.comparisons.minOf' call
    var b_3 = Math.min(y1, b_2);
    var tmp$ret$20 = Math.min(y0, b_3);
    rect.set_top_q4a9n4_k$(tmp$ret$20);
    // Inline function 'androidx.compose.ui.util.fastMaxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_4 = Math.max(x2, x3);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_5 = Math.max(x1, b_4);
    var tmp$ret$24 = Math.max(x0, b_5);
    rect.set_right_ihmog9_k$(tmp$ret$24);
    // Inline function 'androidx.compose.ui.util.fastMaxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_6 = Math.max(y2, y3);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_7 = Math.max(y1, b_6);
    var tmp$ret$28 = Math.max(y0, b_7);
    rect.set_bottom_hrdqf4_k$(tmp$ret$28);
  }
  function Matrix__timesAssign_impl_oas521($this, m) {
    var v = _Matrix___get_values__impl__fblr7b($this);
    if (v.length < 16)
      return Unit_getInstance();
    if (_Matrix___get_values__impl__fblr7b(m).length < 16)
      return Unit_getInstance();
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
  function Matrix__invert_impl_9xyo46($this) {
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return Unit_getInstance();
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a03 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a13 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a20 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a21 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a23 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a30 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a31 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a33 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (det === 0.0) {
      return Unit_getInstance();
    }
    var invDet = 1.0 / det;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v = (a11 * b11 - a12 * b10 + a13 * b09) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_0 = (-a01 * b11 + a02 * b10 - a03 * b09) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v_0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_1 = (a31 * b05 - a32 * b04 + a33 * b03) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v_1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_2 = (-a21 * b05 + a22 * b04 - a23 * b03) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v_2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_3 = (-a10 * b11 + a12 * b08 - a13 * b07) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v_3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_4 = (a00 * b11 - a02 * b08 + a03 * b07) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v_4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_5 = (-a30 * b05 + a32 * b02 - a33 * b01) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v_5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_6 = (a20 * b05 - a22 * b02 + a23 * b01) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v_6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_7 = (a10 * b10 - a11 * b08 + a13 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v_7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_8 = (-a00 * b10 + a01 * b08 - a03 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v_8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_9 = (a30 * b04 - a31 * b02 + a33 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v_9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_10 = (-a20 * b04 + a21 * b02 - a23 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] = v_10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_11 = (-a10 * b09 + a11 * b07 - a12 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = v_11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_12 = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = v_12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_13 = (-a30 * b03 + a31 * b01 - a32 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v_13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_14 = (a20 * b03 - a21 * b01 + a22 * b00) * invDet;
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0] = v_14;
  }
  function Matrix__reset_impl_4l49i7($this) {
    var v = _Matrix___get_values__impl__fblr7b($this);
    if (v.length < 16)
      return Unit_getInstance();
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
  function Matrix__setFrom_impl_5fylsu($this, matrix) {
    var src = _Matrix___get_values__impl__fblr7b($this);
    var dst = _Matrix___get_values__impl__fblr7b(matrix);
    if (src.length < 16)
      return Unit_getInstance();
    if (dst.length < 16)
      return Unit_getInstance();
    src[0] = dst[0];
    src[1] = dst[1];
    src[2] = dst[2];
    src[3] = dst[3];
    src[4] = dst[4];
    src[5] = dst[5];
    src[6] = dst[6];
    src[7] = dst[7];
    src[8] = dst[8];
    src[9] = dst[9];
    src[10] = dst[10];
    src[11] = dst[11];
    src[12] = dst[12];
    src[13] = dst[13];
    src[14] = dst[14];
    src[15] = dst[15];
  }
  function Matrix__rotateX_impl_3e5y7j($this, degrees) {
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return Unit_getInstance();
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
      return Unit_getInstance();
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
      return Unit_getInstance();
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
      return Unit_getInstance();
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
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).scale_4b4tia_k$.call(new Matrix($this), x, y, z);
    }
    return tmp;
  }
  function Matrix__translate_impl_1hftog($this, x, y, z) {
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return Unit_getInstance();
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
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).translate_bcz2fu_k$.call(new Matrix($this), x, y, z);
    }
    return tmp;
  }
  function Matrix__resetToPivotedTransform_impl_svggo7($this, pivotX, pivotY, translationX, translationY, translationZ, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ) {
    var rx = rotationX * (3.141592653589793 / 180.0);
    // Inline function 'kotlin.math.sin' call
    var rsx = Math.sin(rx);
    // Inline function 'kotlin.math.cos' call
    var rcx = Math.cos(rx);
    var v11 = rcx;
    var v12 = rsx;
    var v21 = -rsx;
    var v22 = rcx;
    var v31 = translationY * rcx - translationZ * rsx;
    var v32 = translationY * rsx + translationZ * rcx;
    var ry = rotationY * (3.141592653589793 / 180.0);
    // Inline function 'kotlin.math.sin' call
    var rsy = Math.sin(ry);
    // Inline function 'kotlin.math.cos' call
    var rcy = Math.cos(ry);
    var v00 = rcy;
    var v02 = -rsy;
    var v10 = v12 * rsy;
    v12 = v12 * rcy;
    var v20 = v22 * rsy;
    v22 = v22 * rcy;
    var v30 = translationX * rcy + v32 * rsy;
    v32 = -translationX * rsy + v32 * rcy;
    var rz = rotationZ * (3.141592653589793 / 180.0);
    // Inline function 'kotlin.math.sin' call
    var rsz = Math.sin(rz);
    // Inline function 'kotlin.math.cos' call
    var rcz = Math.cos(rz);
    var a10 = v10;
    v10 = -rsz * v00 + rcz * v10;
    v00 = rcz * v00 + rsz * a10;
    var v01 = rsz * v11;
    v11 = v11 * rcz;
    var a12 = v12;
    v12 = -rsz * v02 + rcz * a12;
    v02 = rcz * v02 + rsz * a12;
    v00 = v00 * scaleX;
    v01 = v01 * scaleX;
    v02 = v02 * scaleX;
    v10 = v10 * scaleY;
    v11 = v11 * scaleY;
    v12 = v12 * scaleY;
    v20 = v20 * scaleZ;
    v21 = v21 * scaleZ;
    v22 = v22 * scaleZ;
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return Unit_getInstance();
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v = v00;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_0 = v01;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v_0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_1 = v02;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v_1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_2 = v10;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v_2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_3 = v11;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v_3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_4 = v12;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v_4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_5 = v20;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v_5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_6 = v21;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v_6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_7 = v22;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v_7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_8 = -pivotX * v00 - pivotY * v10 + v30 + pivotX;
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = v_8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_9 = -pivotX * v01 - pivotY * v11 + v31 + pivotY;
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = v_9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_10 = -pivotX * v02 - pivotY * v12 + v32;
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v_10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0] = 1.0;
  }
  function Matrix__resetToPivotedTransform$default_impl_3n11jw($this, pivotX, pivotY, translationX, translationY, translationZ, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, $super) {
    pivotX = pivotX === VOID ? 0.0 : pivotX;
    pivotY = pivotY === VOID ? 0.0 : pivotY;
    translationX = translationX === VOID ? 0.0 : translationX;
    translationY = translationY === VOID ? 0.0 : translationY;
    translationZ = translationZ === VOID ? 0.0 : translationZ;
    rotationX = rotationX === VOID ? 0.0 : rotationX;
    rotationY = rotationY === VOID ? 0.0 : rotationY;
    rotationZ = rotationZ === VOID ? 0.0 : rotationZ;
    scaleX = scaleX === VOID ? 1.0 : scaleX;
    scaleY = scaleY === VOID ? 1.0 : scaleY;
    scaleZ = scaleZ === VOID ? 1.0 : scaleZ;
    var tmp;
    if ($super === VOID) {
      Matrix__resetToPivotedTransform_impl_svggo7($this, pivotX, pivotY, translationX, translationY, translationZ, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).resetToPivotedTransform_qw33f1_k$.call(new Matrix($this), pivotX, pivotY, translationX, translationY, translationZ, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ);
    }
    return tmp;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.ScaleX_1 = 0;
    this.SkewY_1 = 1;
    this.Perspective0__1 = 3;
    this.SkewX_1 = 4;
    this.ScaleY_1 = 5;
    this.Perspective1__1 = 7;
    this.ScaleZ_1 = 10;
    this.TranslateX_1 = 12;
    this.TranslateY_1 = 13;
    this.TranslateZ_1 = 14;
    this.Perspective2__1 = 15;
  }
  protoOf(Companion_7).get_ScaleX_48mlbr_k$ = function () {
    return this.ScaleX_1;
  };
  protoOf(Companion_7).get_SkewY_igyudi_k$ = function () {
    return this.SkewY_1;
  };
  protoOf(Companion_7).get_Perspective0_s6kzs3_k$ = function () {
    return this.Perspective0__1;
  };
  protoOf(Companion_7).get_SkewX_igyudh_k$ = function () {
    return this.SkewX_1;
  };
  protoOf(Companion_7).get_ScaleY_48mlbs_k$ = function () {
    return this.ScaleY_1;
  };
  protoOf(Companion_7).get_Perspective1_s6kzs2_k$ = function () {
    return this.Perspective1__1;
  };
  protoOf(Companion_7).get_ScaleZ_48mlbt_k$ = function () {
    return this.ScaleZ_1;
  };
  protoOf(Companion_7).get_TranslateX_folfnx_k$ = function () {
    return this.TranslateX_1;
  };
  protoOf(Companion_7).get_TranslateY_folfnw_k$ = function () {
    return this.TranslateY_1;
  };
  protoOf(Companion_7).get_TranslateZ_folfnv_k$ = function () {
    return this.TranslateZ_1;
  };
  protoOf(Companion_7).get_Perspective2_s6kzs1_k$ = function () {
    return this.Perspective2__1;
  };
  var Companion_instance_7;
  function Companion_getInstance_26() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Matrix__hashCode_impl_s9ntm9($this) {
    return hashCode($this);
  }
  function Matrix__equals_impl_g5p8p9($this, other) {
    if (!(other instanceof Matrix))
      return false;
    var tmp0_other_with_cast = other instanceof Matrix ? other.values_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Matrix(values) {
    Companion_getInstance_26();
    this.values_1 = values;
  }
  protoOf(Matrix).toString = function () {
    return Matrix__toString_impl_l0abk0(this.values_1);
  };
  protoOf(Matrix).hashCode = function () {
    return Matrix__hashCode_impl_s9ntm9(this.values_1);
  };
  protoOf(Matrix).equals = function (other) {
    return Matrix__equals_impl_g5p8p9(this.values_1, other);
  };
  function isIdentity(_this__u8e3s4) {
    var v = _Matrix___get_values__impl__fblr7b(_this__u8e3s4);
    if (v.length < 16)
      return false;
    return v[0] === 1.0 && v[1] === 0.0 && v[2] === 0.0 && v[3] === 0.0 && v[4] === 0.0 && v[5] === 1.0 && v[6] === 0.0 && v[7] === 0.0 && v[8] === 0.0 && v[9] === 0.0 && v[10] === 1.0 && v[11] === 0.0 && v[12] === 0.0 && v[13] === 0.0 && v[14] === 0.0 && v[15] === 1.0;
  }
  function dot_0(m1, row, m2, column) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp * _Matrix___get_values__impl__fblr7b(m2)[imul(0, 4) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = tmp_0 + tmp_1 * _Matrix___get_values__impl__fblr7b(m2)[imul(1, 4) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_2 + tmp_3 * _Matrix___get_values__impl__fblr7b(m2)[imul(2, 4) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    return tmp_4 + tmp_5 * _Matrix___get_values__impl__fblr7b(m2)[imul(3, 4) + column | 0];
  }
  function Rectangle(rect) {
    Outline.call(this);
    this.rect_1 = rect;
  }
  protoOf(Rectangle).get_rect_wotlbh_k$ = function () {
    return this.rect_1;
  };
  protoOf(Rectangle).get_bounds_bj99ku_k$ = function () {
    return this.rect_1;
  };
  protoOf(Rectangle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rectangle))
      return false;
    if (!this.rect_1.equals(other.rect_1))
      return false;
    return true;
  };
  protoOf(Rectangle).hashCode = function () {
    return this.rect_1.hashCode();
  };
  function Rounded(roundRect) {
    Outline.call(this);
    this.roundRect_1 = roundRect;
    var tmp = this;
    var tmp_0;
    if (!get_isSimple(this.roundRect_1)) {
      // Inline function 'kotlin.apply' call
      var this_0 = Path_0();
      this_0.addRoundRect$default_gbv65c_k$(this.roundRect_1);
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    tmp.roundRectPath_1 = tmp_0;
  }
  protoOf(Rounded).get_roundRect_8fhall_k$ = function () {
    return this.roundRect_1;
  };
  protoOf(Rounded).get_roundRectPath_qg5rxn_k$ = function () {
    return this.roundRectPath_1;
  };
  protoOf(Rounded).get_bounds_bj99ku_k$ = function () {
    return get_boundingRect(this.roundRect_1);
  };
  protoOf(Rounded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rounded))
      return false;
    if (!this.roundRect_1.equals(other.roundRect_1))
      return false;
    return true;
  };
  protoOf(Rounded).hashCode = function () {
    return this.roundRect_1.hashCode();
  };
  function Generic(path) {
    Outline.call(this);
    this.path_1 = path;
  }
  protoOf(Generic).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(Generic).get_bounds_bj99ku_k$ = function () {
    return this.path_1.getBounds_568lnv_k$();
  };
  function Outline() {
  }
  function drawOutline(_this__u8e3s4, outline, color, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_47().get_DefaultBlendMode_svct2m_k$() : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var rect = outline.rect_1;
      _this__u8e3s4.drawRect_6sw8uj_k$(color, topLeft(rect), size(rect), alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      if (outline instanceof Rounded) {
        var path = outline.roundRectPath_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.drawPath_mbkbcp_k$(path, color, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        } else {
          var rrect = outline.roundRect_1;
          // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
          var this_0 = rrect.get_bottomLeftCornerRadius_9r65ws_k$();
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value = _CornerRadius___get_packedValue__impl__okv4jq(this_0);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          var bits = convertToInt(shiftRight(value, 32));
          // Inline function 'kotlin.fromBits' call
          FloatCompanionObject_getInstance();
          var radius = floatFromBits(bits);
          var tmp0_topLeft = topLeft_0(rrect);
          var tmp1_size = size_0(rrect);
          // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var v1 = fromInt(toRawBits(radius));
          var v2 = fromInt(toRawBits(radius));
          var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
          var tmp2_cornerRadius = _CornerRadius___init__impl__ojmabe(tmp$ret$6);
          _this__u8e3s4.drawRoundRect_bjcn4f_k$(color, tmp0_topLeft, tmp1_size, tmp2_cornerRadius, style, alpha, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var path_0 = outline.path_1;
          _this__u8e3s4.drawPath_mbkbcp_k$(path_0, color, alpha, style, colorFilter, blendMode);
          tmp = Unit_getInstance();
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function addOutline(_this__u8e3s4, outline) {
    var tmp;
    if (outline instanceof Rectangle) {
      _this__u8e3s4.addRect$default_skc73m_k$(outline.rect_1);
      tmp = Unit_getInstance();
    } else {
      if (outline instanceof Rounded) {
        _this__u8e3s4.addRoundRect$default_gbv65c_k$(outline.roundRect_1);
        tmp = Unit_getInstance();
      } else {
        if (outline instanceof Generic) {
          _this__u8e3s4.addPath$default_lo4vd5_k$(outline.path_1);
          tmp = Unit_getInstance();
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
    blendMode = blendMode === VOID ? Companion_getInstance_47().get_DefaultBlendMode_svct2m_k$() : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var rect = outline.rect_1;
      _this__u8e3s4.drawRect_t09b9w_k$(brush, topLeft(rect), size(rect), alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      if (outline instanceof Rounded) {
        var path = outline.roundRectPath_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.drawPath_2qit1e_k$(path, brush, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        } else {
          var rrect = outline.roundRect_1;
          // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
          var this_0 = rrect.get_bottomLeftCornerRadius_9r65ws_k$();
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value = _CornerRadius___get_packedValue__impl__okv4jq(this_0);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          var bits = convertToInt(shiftRight(value, 32));
          // Inline function 'kotlin.fromBits' call
          FloatCompanionObject_getInstance();
          var radius = floatFromBits(bits);
          var tmp_1 = topLeft_0(rrect);
          var tmp_2 = size_0(rrect);
          // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var v1 = fromInt(toRawBits(radius));
          var v2 = fromInt(toRawBits(radius));
          var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
          var tmp$ret$7 = _CornerRadius___init__impl__ojmabe(tmp$ret$6);
          _this__u8e3s4.drawRoundRect_gbkwec_k$(brush, tmp_1, tmp_2, tmp$ret$7, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var path_0 = outline.path_1;
          _this__u8e3s4.drawPath_2qit1e_k$(path_0, brush, alpha, style, colorFilter, blendMode);
          tmp = Unit_getInstance();
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function drawOutlineHelper(_this__u8e3s4, outline, drawRectBlock, drawRoundedRectBlock, drawPathBlock) {
    var tmp;
    if (outline instanceof Rectangle) {
      tmp = drawRectBlock(_this__u8e3s4, outline.rect_1);
    } else {
      if (outline instanceof Rounded) {
        var path = outline.roundRectPath_1;
        var tmp_0;
        if (!(path == null)) {
          tmp_0 = drawPathBlock(_this__u8e3s4, path);
        } else {
          tmp_0 = drawRoundedRectBlock(_this__u8e3s4, outline.roundRect_1);
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          tmp = drawPathBlock(_this__u8e3s4, outline.path_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function topLeft(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.get_left_woprgw_k$();
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _this__u8e3s4.get_top_18ivbo_k$();
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  function size(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Rect.width' call
    var tmp0 = _this__u8e3s4.get_right_ixz7xv_k$() - _this__u8e3s4.get_left_woprgw_k$();
    // Inline function 'androidx.compose.ui.geometry.Rect.height' call
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _this__u8e3s4.get_bottom_bj8ras_k$() - _this__u8e3s4.get_top_18ivbo_k$();
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$2);
  }
  function topLeft_0(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.get_left_woprgw_k$();
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _this__u8e3s4.get_top_18ivbo_k$();
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  function size_0(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.get_width_j0q4yl_k$();
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _this__u8e3s4.get_height_e7t92o_k$();
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$0);
  }
  function Paint() {
  }
  function _PaintingStyle___init__impl__pwxppo(value) {
    return value;
  }
  function _get_value__a43j40_1($this) {
    return $this;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.Fill_1 = _PaintingStyle___init__impl__pwxppo(0);
    this.Stroke_1 = _PaintingStyle___init__impl__pwxppo(1);
  }
  protoOf(Companion_8).get_Fill_7xey15_k$ = function () {
    return this.Fill_1;
  };
  protoOf(Companion_8).get_Stroke_fu1ixu_k$ = function () {
    return this.Stroke_1;
  };
  var Companion_instance_8;
  function Companion_getInstance_27() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function PaintingStyle__toString_impl_anxeq4($this) {
    return $this === Companion_getInstance_27().Fill_1 ? 'Fill' : $this === Companion_getInstance_27().Stroke_1 ? 'Stroke' : 'Unknown';
  }
  function PaintingStyle__hashCode_impl_wf3biz($this) {
    return $this;
  }
  function PaintingStyle__equals_impl_r3webl($this, other) {
    if (!(other instanceof PaintingStyle))
      return false;
    if (!($this === (other instanceof PaintingStyle ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function PaintingStyle(value) {
    Companion_getInstance_27();
    this.value_1 = value;
  }
  protoOf(PaintingStyle).toString = function () {
    return PaintingStyle__toString_impl_anxeq4(this.value_1);
  };
  protoOf(PaintingStyle).hashCode = function () {
    return PaintingStyle__hashCode_impl_wf3biz(this.value_1);
  };
  protoOf(PaintingStyle).equals = function (other) {
    return PaintingStyle__equals_impl_r3webl(this.value_1, other);
  };
  var Direction_CounterClockwise_instance;
  var Direction_Clockwise_instance;
  function values() {
    return [Direction_CounterClockwise_getInstance(), Direction_Clockwise_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'CounterClockwise':
        return Direction_CounterClockwise_getInstance();
      case 'Clockwise':
        return Direction_Clockwise_getInstance();
      default:
        Direction_initEntries();
        THROW_IAE('No enum constant androidx.compose.ui.graphics.Path.Direction.' + value);
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_CounterClockwise_instance = new Direction('CounterClockwise', 0);
    Direction_Clockwise_instance = new Direction('Clockwise', 1);
  }
  var $ENTRIES;
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  protoOf(Companion_9).combine_eaz7cj_k$ = function (operation, path1, path2) {
    var path = Path_0();
    if (path.op_fj0csx_k$(path1, path2, operation)) {
      return path;
    }
    throw IllegalArgumentException_init_$Create$('Path.combine() failed.  This may be due an invalid path; in particular, check for NaN values.');
  };
  var Companion_instance_9;
  function Companion_getInstance_28() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Direction_CounterClockwise_getInstance() {
    Direction_initEntries();
    return Direction_CounterClockwise_instance;
  }
  function Direction_Clockwise_getInstance() {
    Direction_initEntries();
    return Direction_Clockwise_instance;
  }
  function Path() {
  }
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).cornerPathEffect_rwk5o3_k$ = function (radius) {
    return actualCornerPathEffect(radius);
  };
  protoOf(Companion_10).dashPathEffect_ko9kiw_k$ = function (intervals, phase) {
    return actualDashPathEffect(intervals, phase);
  };
  protoOf(Companion_10).dashPathEffect$default_i901tt_k$ = function (intervals, phase, $super) {
    phase = phase === VOID ? 0.0 : phase;
    return $super === VOID ? this.dashPathEffect_ko9kiw_k$(intervals, phase) : $super.dashPathEffect_ko9kiw_k$.call(this, intervals, phase);
  };
  protoOf(Companion_10).chainPathEffect_466mix_k$ = function (outer, inner) {
    return actualChainPathEffect(outer, inner);
  };
  protoOf(Companion_10).stampedPathEffect_f8wkf0_k$ = function (shape, advance, phase, style) {
    return actualStampedPathEffect(shape, advance, phase, style);
  };
  var Companion_instance_10;
  function Companion_getInstance_29() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function PathEffect() {
  }
  function _StampedPathEffectStyle___init__impl__ekt0so(value) {
    return value;
  }
  function _get_value__a43j40_2($this) {
    return $this;
  }
  function Companion_11() {
    Companion_instance_11 = this;
    this.Translate_1 = _StampedPathEffectStyle___init__impl__ekt0so(0);
    this.Rotate_1 = _StampedPathEffectStyle___init__impl__ekt0so(1);
    this.Morph_1 = _StampedPathEffectStyle___init__impl__ekt0so(2);
  }
  protoOf(Companion_11).get_Translate_xeseg8_k$ = function () {
    return this.Translate_1;
  };
  protoOf(Companion_11).get_Rotate_kkxo0p_k$ = function () {
    return this.Rotate_1;
  };
  protoOf(Companion_11).get_Morph_bm4leq_k$ = function () {
    return this.Morph_1;
  };
  var Companion_instance_11;
  function Companion_getInstance_30() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function StampedPathEffectStyle__toString_impl_nfgepk($this) {
    return $this === Companion_getInstance_30().Translate_1 ? 'Translate' : $this === Companion_getInstance_30().Rotate_1 ? 'Rotate' : $this === Companion_getInstance_30().Morph_1 ? 'Morph' : 'Unknown';
  }
  function StampedPathEffectStyle__hashCode_impl_puhqgp($this) {
    return $this;
  }
  function StampedPathEffectStyle__equals_impl_nbax4b($this, other) {
    if (!(other instanceof StampedPathEffectStyle))
      return false;
    if (!($this === (other instanceof StampedPathEffectStyle ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StampedPathEffectStyle(value) {
    Companion_getInstance_30();
    this.value_1 = value;
  }
  protoOf(StampedPathEffectStyle).toString = function () {
    return StampedPathEffectStyle__toString_impl_nfgepk(this.value_1);
  };
  protoOf(StampedPathEffectStyle).hashCode = function () {
    return StampedPathEffectStyle__hashCode_impl_puhqgp(this.value_1);
  };
  protoOf(StampedPathEffectStyle).equals = function (other) {
    return StampedPathEffectStyle__equals_impl_nbax4b(this.value_1, other);
  };
  function _PathFillType___init__impl__d59lzz(value) {
    return value;
  }
  function _get_value__a43j40_3($this) {
    return $this;
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.NonZero_1 = _PathFillType___init__impl__d59lzz(0);
    this.EvenOdd_1 = _PathFillType___init__impl__d59lzz(1);
  }
  protoOf(Companion_12).get_NonZero_dwy848_k$ = function () {
    return this.NonZero_1;
  };
  protoOf(Companion_12).get_EvenOdd_cpanrc_k$ = function () {
    return this.EvenOdd_1;
  };
  var Companion_instance_12;
  function Companion_getInstance_31() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function PathFillType__toString_impl_nw7h1d($this) {
    return $this === Companion_getInstance_31().NonZero_1 ? 'NonZero' : $this === Companion_getInstance_31().EvenOdd_1 ? 'EvenOdd' : 'Unknown';
  }
  function PathFillType__hashCode_impl_pdqo4w($this) {
    return $this;
  }
  function PathFillType__equals_impl_94fhtg($this, other) {
    if (!(other instanceof PathFillType))
      return false;
    if (!($this === (other instanceof PathFillType ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function PathFillType(value) {
    Companion_getInstance_31();
    this.value_1 = value;
  }
  protoOf(PathFillType).toString = function () {
    return PathFillType__toString_impl_nw7h1d(this.value_1);
  };
  protoOf(PathFillType).hashCode = function () {
    return PathFillType__hashCode_impl_pdqo4w(this.value_1);
  };
  protoOf(PathFillType).equals = function (other) {
    return PathFillType__equals_impl_94fhtg(this.value_1, other);
  };
  function get_EmptyPath() {
    _init_properties_PathHitTester_kt__ekyyjp();
    return EmptyPath;
  }
  var EmptyPath;
  var properties_initialized_PathHitTester_kt_egfmql;
  function _init_properties_PathHitTester_kt__ekyyjp() {
    if (!properties_initialized_PathHitTester_kt_egfmql) {
      properties_initialized_PathHitTester_kt_egfmql = true;
      EmptyPath = Path_0();
    }
  }
  var ConicEvaluation_AsConic_instance;
  var ConicEvaluation_AsQuadratics_instance;
  function values_0() {
    return [ConicEvaluation_AsConic_getInstance(), ConicEvaluation_AsQuadratics_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'AsConic':
        return ConicEvaluation_AsConic_getInstance();
      case 'AsQuadratics':
        return ConicEvaluation_AsQuadratics_getInstance();
      default:
        ConicEvaluation_initEntries();
        THROW_IAE('No enum constant androidx.compose.ui.graphics.PathIterator.ConicEvaluation.' + value);
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var ConicEvaluation_entriesInitialized;
  function ConicEvaluation_initEntries() {
    if (ConicEvaluation_entriesInitialized)
      return Unit_getInstance();
    ConicEvaluation_entriesInitialized = true;
    ConicEvaluation_AsConic_instance = new ConicEvaluation('AsConic', 0);
    ConicEvaluation_AsQuadratics_instance = new ConicEvaluation('AsQuadratics', 1);
  }
  var $ENTRIES_0;
  function ConicEvaluation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ConicEvaluation_AsConic_getInstance() {
    ConicEvaluation_initEntries();
    return ConicEvaluation_AsConic_instance;
  }
  function ConicEvaluation_AsQuadratics_getInstance() {
    ConicEvaluation_initEntries();
    return ConicEvaluation_AsQuadratics_instance;
  }
  function PathIterator() {
  }
  function PathMeasure() {
  }
  function _PathOperation___init__impl__8ddeif(value) {
    return value;
  }
  function _get_value__a43j40_4($this) {
    return $this;
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.Difference_1 = _PathOperation___init__impl__8ddeif(0);
    this.Intersect_1 = _PathOperation___init__impl__8ddeif(1);
    this.Union_1 = _PathOperation___init__impl__8ddeif(2);
    this.Xor_1 = _PathOperation___init__impl__8ddeif(3);
    this.ReverseDifference_1 = _PathOperation___init__impl__8ddeif(4);
  }
  protoOf(Companion_13).get_Difference_nnbib6_k$ = function () {
    return this.Difference_1;
  };
  protoOf(Companion_13).get_Intersect_3xwf0i_k$ = function () {
    return this.Intersect_1;
  };
  protoOf(Companion_13).get_Union_z1h0ku_k$ = function () {
    return this.Union_1;
  };
  protoOf(Companion_13).get_Xor_aeyvba_k$ = function () {
    return this.Xor_1;
  };
  protoOf(Companion_13).get_ReverseDifference_4zrrtq_k$ = function () {
    return this.ReverseDifference_1;
  };
  var Companion_instance_13;
  function Companion_getInstance_32() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function PathOperation__toString_impl_z2c7a9($this) {
    return $this === Companion_getInstance_32().Difference_1 ? 'Difference' : $this === Companion_getInstance_32().Intersect_1 ? 'Intersect' : $this === Companion_getInstance_32().Union_1 ? 'Union' : $this === Companion_getInstance_32().Xor_1 ? 'Xor' : $this === Companion_getInstance_32().ReverseDifference_1 ? 'ReverseDifference' : 'Unknown';
  }
  function PathOperation__hashCode_impl_e7lxw0($this) {
    return $this;
  }
  function PathOperation__equals_impl_kfyq50($this, other) {
    if (!(other instanceof PathOperation))
      return false;
    if (!($this === (other instanceof PathOperation ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function PathOperation(value) {
    Companion_getInstance_32();
    this.value_1 = value;
  }
  protoOf(PathOperation).toString = function () {
    return PathOperation__toString_impl_z2c7a9(this.value_1);
  };
  protoOf(PathOperation).hashCode = function () {
    return PathOperation__hashCode_impl_e7lxw0(this.value_1);
  };
  protoOf(PathOperation).equals = function (other) {
    return PathOperation__equals_impl_kfyq50(this.value_1, other);
  };
  function get_DoneSegment() {
    _init_properties_PathSegment_kt__ud5eho();
    return DoneSegment;
  }
  var DoneSegment;
  function get_CloseSegment() {
    _init_properties_PathSegment_kt__ud5eho();
    return CloseSegment;
  }
  var CloseSegment;
  var Type_Move_instance;
  var Type_Line_instance;
  var Type_Quadratic_instance;
  var Type_Conic_instance;
  var Type_Cubic_instance;
  var Type_Close_instance;
  var Type_Done_instance;
  function values_1() {
    return [Type_Move_getInstance(), Type_Line_getInstance(), Type_Quadratic_getInstance(), Type_Conic_getInstance(), Type_Cubic_getInstance(), Type_Close_getInstance(), Type_Done_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Move':
        return Type_Move_getInstance();
      case 'Line':
        return Type_Line_getInstance();
      case 'Quadratic':
        return Type_Quadratic_getInstance();
      case 'Conic':
        return Type_Conic_getInstance();
      case 'Cubic':
        return Type_Cubic_getInstance();
      case 'Close':
        return Type_Close_getInstance();
      case 'Done':
        return Type_Done_getInstance();
      default:
        Type_initEntries();
        THROW_IAE('No enum constant androidx.compose.ui.graphics.PathSegment.Type.' + value);
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Type_entriesInitialized;
  function Type_initEntries() {
    if (Type_entriesInitialized)
      return Unit_getInstance();
    Type_entriesInitialized = true;
    Type_Move_instance = new Type('Move', 0);
    Type_Line_instance = new Type('Line', 1);
    Type_Quadratic_instance = new Type('Quadratic', 2);
    Type_Conic_instance = new Type('Conic', 3);
    Type_Cubic_instance = new Type('Cubic', 4);
    Type_Close_instance = new Type('Close', 5);
    Type_Done_instance = new Type('Done', 6);
  }
  var $ENTRIES_1;
  function Type(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Type_Move_getInstance() {
    Type_initEntries();
    return Type_Move_instance;
  }
  function Type_Line_getInstance() {
    Type_initEntries();
    return Type_Line_instance;
  }
  function Type_Quadratic_getInstance() {
    Type_initEntries();
    return Type_Quadratic_instance;
  }
  function Type_Conic_getInstance() {
    Type_initEntries();
    return Type_Conic_instance;
  }
  function Type_Cubic_getInstance() {
    Type_initEntries();
    return Type_Cubic_instance;
  }
  function Type_Close_getInstance() {
    Type_initEntries();
    return Type_Close_instance;
  }
  function Type_Done_getInstance() {
    Type_initEntries();
    return Type_Done_instance;
  }
  function PathSegment(type, points, weight) {
    this.type_1 = type;
    this.points_1 = points;
    this.weight_1 = weight;
  }
  protoOf(PathSegment).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(PathSegment).get_points_i5obn0_k$ = function () {
    return this.points_1;
  };
  protoOf(PathSegment).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(PathSegment).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof PathSegment))
      THROW_CCE();
    if (!this.type_1.equals(other.type_1))
      return false;
    if (!contentEquals(this.points_1, other.points_1))
      return false;
    if (!(this.weight_1 === other.weight_1))
      return false;
    return true;
  };
  protoOf(PathSegment).hashCode = function () {
    var result = this.type_1.hashCode();
    result = imul(31, result) + contentHashCode(this.points_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.weight_1) | 0;
    return result;
  };
  protoOf(PathSegment).toString = function () {
    return 'PathSegment(type=' + this.type_1.toString() + ', points=' + contentToString(this.points_1) + ', weight=' + this.weight_1 + ')';
  };
  var properties_initialized_PathSegment_kt_vp2f42;
  function _init_properties_PathSegment_kt__ud5eho() {
    if (!properties_initialized_PathSegment_kt_vp2f42) {
      properties_initialized_PathSegment_kt_vp2f42 = true;
      DoneSegment = new PathSegment(Type_Done_getInstance(), new Float32Array(0), 0.0);
      CloseSegment = new PathSegment(Type_Close_getInstance(), new Float32Array(0), 0.0);
    }
  }
  function _PointMode___init__impl__mgo5cq(value) {
    return value;
  }
  function _get_value__a43j40_5($this) {
    return $this;
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.Points_1 = _PointMode___init__impl__mgo5cq(0);
    this.Lines_1 = _PointMode___init__impl__mgo5cq(1);
    this.Polygon_1 = _PointMode___init__impl__mgo5cq(2);
  }
  protoOf(Companion_14).get_Points_yh58f7_k$ = function () {
    return this.Points_1;
  };
  protoOf(Companion_14).get_Lines_54ip59_k$ = function () {
    return this.Lines_1;
  };
  protoOf(Companion_14).get_Polygon_rl173c_k$ = function () {
    return this.Polygon_1;
  };
  var Companion_instance_14;
  function Companion_getInstance_33() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function PointMode__toString_impl_nuk5g2($this) {
    return $this === Companion_getInstance_33().Points_1 ? 'Points' : $this === Companion_getInstance_33().Lines_1 ? 'Lines' : $this === Companion_getInstance_33().Polygon_1 ? 'Polygon' : 'Unknown';
  }
  function PointMode__hashCode_impl_pfdzq7($this) {
    return $this;
  }
  function PointMode__equals_impl_r8q797($this, other) {
    if (!(other instanceof PointMode))
      return false;
    if (!($this === (other instanceof PointMode ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function PointMode(value) {
    Companion_getInstance_33();
    this.value_1 = value;
  }
  protoOf(PointMode).toString = function () {
    return PointMode__toString_impl_nuk5g2(this.value_1);
  };
  protoOf(PointMode).hashCode = function () {
    return PointMode__hashCode_impl_pfdzq7(this.value_1);
  };
  protoOf(PointMode).equals = function (other) {
    return PointMode__equals_impl_r8q797(this.value_1, other);
  };
  function get_RectangleShape() {
    _init_properties_RectangleShape_kt__k3dd0u();
    return RectangleShape;
  }
  var RectangleShape;
  function RectangleShape$1() {
  }
  protoOf(RectangleShape$1).createOutline_nnkieo_k$ = function (size, layoutDirection, density) {
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
    tileMode = tileMode === VOID ? Companion_getInstance_37().get_Clamp_ddetsd_k$() : tileMode;
    return ActualLinearGradientShader(from, to, colors, colorStops, tileMode);
  }
  function RadialGradientShader(center, radius, colors, colorStops, tileMode) {
    colorStops = colorStops === VOID ? null : colorStops;
    tileMode = tileMode === VOID ? Companion_getInstance_37().get_Clamp_ddetsd_k$() : tileMode;
    return ActualRadialGradientShader(center, radius, colors, colorStops, tileMode);
  }
  function SweepGradientShader(center, colors, colorStops) {
    colorStops = colorStops === VOID ? null : colorStops;
    return ActualSweepGradientShader(center, colors, colorStops);
  }
  function CompositeShader(dst, src, blendMode) {
    return ActualCompositeShader(dst, src, blendMode);
  }
  function ImageShader(image, tileModeX, tileModeY) {
    tileModeX = tileModeX === VOID ? Companion_getInstance_37().get_Clamp_ddetsd_k$() : tileModeX;
    tileModeY = tileModeY === VOID ? Companion_getInstance_37().get_Clamp_ddetsd_k$() : tileModeY;
    return ActualImageShader(image, tileModeX, tileModeY);
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.None_1 = new Shadow();
  }
  protoOf(Companion_15).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_15;
  function Companion_getInstance_34() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function Shadow(color, offset, blurRadius) {
    Companion_getInstance_34();
    color = color === VOID ? Color_1(new Long(-16777216, 0)) : color;
    offset = offset === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : offset;
    blurRadius = blurRadius === VOID ? 0.0 : blurRadius;
    this.color_1 = color;
    this.offset_1 = offset;
    this.blurRadius_1 = blurRadius;
  }
  protoOf(Shadow).get_color_lnp1vl_k$ = function () {
    return this.color_1;
  };
  protoOf(Shadow).get_offset_slhc8e_k$ = function () {
    return this.offset_1;
  };
  protoOf(Shadow).get_blurRadius_r8jo0y_k$ = function () {
    return this.blurRadius_1;
  };
  protoOf(Shadow).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!equals(this.color_1, other.color_1))
      return false;
    if (!equals(this.offset_1, other.offset_1))
      return false;
    if (!(this.blurRadius_1 === other.blurRadius_1))
      return false;
    return true;
  };
  protoOf(Shadow).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.color_1);
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.offset_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.blurRadius_1) | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(color=' + Color__toString_impl_hpzmaq(this.color_1) + ', offset=' + Offset__toString_impl_4ffbou(this.offset_1) + ', blurRadius=' + this.blurRadius_1 + ')';
  };
  protoOf(Shadow).copy_qipu7k_k$ = function (color, offset, blurRadius) {
    return new Shadow(color, offset, blurRadius);
  };
  protoOf(Shadow).copy$default_jajr59_k$ = function (color, offset, blurRadius, $super) {
    color = color === VOID ? this.color_1 : color;
    offset = offset === VOID ? this.offset_1 : offset;
    blurRadius = blurRadius === VOID ? this.blurRadius_1 : blurRadius;
    return $super === VOID ? this.copy_qipu7k_k$(color, offset, blurRadius) : $super.copy_qipu7k_k$.call(this, new Color(color), new Offset(offset), blurRadius);
  };
  function lerp_2(start, stop, fraction) {
    return new Shadow(lerp_1(start.color_1, stop.color_1, fraction), lerp_0(start.offset_1, stop.offset_1, fraction), lerp(start.blurRadius_1, stop.blurRadius_1, fraction));
  }
  function Shape() {
  }
  function _StrokeCap___init__impl__kfgr27(value) {
    return value;
  }
  function _get_value__a43j40_6($this) {
    return $this;
  }
  function Companion_16() {
    Companion_instance_16 = this;
    this.Butt_1 = _StrokeCap___init__impl__kfgr27(0);
    this.Round_1 = _StrokeCap___init__impl__kfgr27(1);
    this.Square_1 = _StrokeCap___init__impl__kfgr27(2);
  }
  protoOf(Companion_16).get_Butt_jb7qjw_k$ = function () {
    return this.Butt_1;
  };
  protoOf(Companion_16).get_Round_hjra1h_k$ = function () {
    return this.Round_1;
  };
  protoOf(Companion_16).get_Square_dbwc3a_k$ = function () {
    return this.Square_1;
  };
  var Companion_instance_16;
  function Companion_getInstance_35() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function StrokeCap__toString_impl_3xn0rd($this) {
    return $this === Companion_getInstance_35().Butt_1 ? 'Butt' : $this === Companion_getInstance_35().Round_1 ? 'Round' : $this === Companion_getInstance_35().Square_1 ? 'Square' : 'Unknown';
  }
  function StrokeCap__hashCode_impl_posxk8($this) {
    return $this;
  }
  function StrokeCap__equals_impl_m9bjik($this, other) {
    if (!(other instanceof StrokeCap))
      return false;
    if (!($this === (other instanceof StrokeCap ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StrokeCap(value) {
    Companion_getInstance_35();
    this.value_1 = value;
  }
  protoOf(StrokeCap).toString = function () {
    return StrokeCap__toString_impl_3xn0rd(this.value_1);
  };
  protoOf(StrokeCap).hashCode = function () {
    return StrokeCap__hashCode_impl_posxk8(this.value_1);
  };
  protoOf(StrokeCap).equals = function (other) {
    return StrokeCap__equals_impl_m9bjik(this.value_1, other);
  };
  function _StrokeJoin___init__impl__ig23zz(value) {
    return value;
  }
  function _get_value__a43j40_7($this) {
    return $this;
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.Miter_1 = _StrokeJoin___init__impl__ig23zz(0);
    this.Round_1 = _StrokeJoin___init__impl__ig23zz(1);
    this.Bevel_1 = _StrokeJoin___init__impl__ig23zz(2);
  }
  protoOf(Companion_17).get_Miter_xkwqso_k$ = function () {
    return this.Miter_1;
  };
  protoOf(Companion_17).get_Round_o8jjqp_k$ = function () {
    return this.Round_1;
  };
  protoOf(Companion_17).get_Bevel_8ab6n7_k$ = function () {
    return this.Bevel_1;
  };
  var Companion_instance_17;
  function Companion_getInstance_36() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function StrokeJoin__toString_impl_ph4e1r($this) {
    return $this === Companion_getInstance_36().Miter_1 ? 'Miter' : $this === Companion_getInstance_36().Round_1 ? 'Round' : $this === Companion_getInstance_36().Bevel_1 ? 'Bevel' : 'Unknown';
  }
  function StrokeJoin__hashCode_impl_3pyh8w($this) {
    return $this;
  }
  function StrokeJoin__equals_impl_hf9ej8($this, other) {
    if (!(other instanceof StrokeJoin))
      return false;
    if (!($this === (other instanceof StrokeJoin ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StrokeJoin(value) {
    Companion_getInstance_36();
    this.value_1 = value;
  }
  protoOf(StrokeJoin).toString = function () {
    return StrokeJoin__toString_impl_ph4e1r(this.value_1);
  };
  protoOf(StrokeJoin).hashCode = function () {
    return StrokeJoin__hashCode_impl_3pyh8w(this.value_1);
  };
  protoOf(StrokeJoin).equals = function (other) {
    return StrokeJoin__equals_impl_hf9ej8(this.value_1, other);
  };
  function _TileMode___init__impl__syhjao(value) {
    return value;
  }
  function _get_value__a43j40_8($this) {
    return $this;
  }
  function Companion_18() {
    Companion_instance_18 = this;
    this.Clamp_1 = _TileMode___init__impl__syhjao(0);
    this.Repeated_1 = _TileMode___init__impl__syhjao(1);
    this.Mirror_1 = _TileMode___init__impl__syhjao(2);
    this.Decal_1 = _TileMode___init__impl__syhjao(3);
  }
  protoOf(Companion_18).get_Clamp_ddetsd_k$ = function () {
    return this.Clamp_1;
  };
  protoOf(Companion_18).get_Repeated_jl00zi_k$ = function () {
    return this.Repeated_1;
  };
  protoOf(Companion_18).get_Mirror_rukh4t_k$ = function () {
    return this.Mirror_1;
  };
  protoOf(Companion_18).get_Decal_4ld873_k$ = function () {
    return this.Decal_1;
  };
  var Companion_instance_18;
  function Companion_getInstance_37() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function TileMode__toString_impl_tlb7f4($this) {
    return $this === Companion_getInstance_37().Clamp_1 ? 'Clamp' : $this === Companion_getInstance_37().Repeated_1 ? 'Repeated' : $this === Companion_getInstance_37().Mirror_1 ? 'Mirror' : $this === Companion_getInstance_37().Decal_1 ? 'Decal' : 'Unknown';
  }
  function TileMode__hashCode_impl_7u5am9($this) {
    return $this;
  }
  function TileMode__equals_impl_7nvbdv($this, other) {
    if (!(other instanceof TileMode))
      return false;
    if (!($this === (other instanceof TileMode ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TileMode(value) {
    Companion_getInstance_37();
    this.value_1 = value;
  }
  protoOf(TileMode).toString = function () {
    return TileMode__toString_impl_tlb7f4(this.value_1);
  };
  protoOf(TileMode).hashCode = function () {
    return TileMode__hashCode_impl_7u5am9(this.value_1);
  };
  protoOf(TileMode).equals = function (other) {
    return TileMode__equals_impl_7nvbdv(this.value_1, other);
  };
  function _VertexMode___init__impl__btp65i(value) {
    return value;
  }
  function _get_value__a43j40_9($this) {
    return $this;
  }
  function Companion_19() {
    Companion_instance_19 = this;
    this.Triangles_1 = _VertexMode___init__impl__btp65i(0);
    this.TriangleStrip_1 = _VertexMode___init__impl__btp65i(1);
    this.TriangleFan_1 = _VertexMode___init__impl__btp65i(2);
  }
  protoOf(Companion_19).get_Triangles_687gr1_k$ = function () {
    return this.Triangles_1;
  };
  protoOf(Companion_19).get_TriangleStrip_pmcutk_k$ = function () {
    return this.TriangleStrip_1;
  };
  protoOf(Companion_19).get_TriangleFan_rxrqvh_k$ = function () {
    return this.TriangleFan_1;
  };
  var Companion_instance_19;
  function Companion_getInstance_38() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function VertexMode__toString_impl_ujymw6($this) {
    return $this === Companion_getInstance_38().Triangles_1 ? 'Triangles' : $this === Companion_getInstance_38().TriangleStrip_1 ? 'TriangleStrip' : $this === Companion_getInstance_38().TriangleFan_1 ? 'TriangleFan' : 'Unknown';
  }
  function VertexMode__hashCode_impl_ipzia3($this) {
    return $this;
  }
  function VertexMode__equals_impl_k7ox9j($this, other) {
    if (!(other instanceof VertexMode))
      return false;
    if (!($this === (other instanceof VertexMode ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function VertexMode(value) {
    Companion_getInstance_38();
    this.value_1 = value;
  }
  protoOf(VertexMode).toString = function () {
    return VertexMode__toString_impl_ujymw6(this.value_1);
  };
  protoOf(VertexMode).hashCode = function () {
    return VertexMode__hashCode_impl_ipzia3(this.value_1);
  };
  protoOf(VertexMode).equals = function (other) {
    return VertexMode__equals_impl_k7ox9j(this.value_1, other);
  };
  function encodeColorList($this, colors) {
    var tmp = 0;
    var tmp_0 = colors.get_size_woubt6_k$();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = toArgb(colors.get_c1px32_k$(tmp_2).value_1);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function encodePointList($this, points) {
    var tmp = 0;
    var tmp_0 = imul(points.get_size_woubt6_k$(), 2);
    var tmp_1 = new Float32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var pointIndex = tmp_2 / 2 | 0;
      var point = points.get_c1px32_k$(pointIndex).packedValue_1;
      var tmp_3;
      if ((tmp_2 % 2 | 0) === 0) {
        // Inline function 'androidx.compose.ui.geometry.Offset.x' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value = _Offset___get_packedValue__impl__xh2k8q(point);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits = convertToInt(shiftRight(value, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        tmp_3 = floatFromBits(bits);
      } else {
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_0 = _Offset___get_packedValue__impl__xh2k8q(point);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        tmp_3 = floatFromBits(bits_0);
      }
      tmp_1[tmp_2] = tmp_3;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function Vertices(vertexMode, positions, textureCoordinates, colors, indices) {
    this.vertexMode_1 = vertexMode;
    if (!(textureCoordinates.get_size_woubt6_k$() === positions.get_size_woubt6_k$())) {
      throwIllegalArgumentException('positions and textureCoordinates lengths must match.');
    }
    if (!(colors.get_size_woubt6_k$() === positions.get_size_woubt6_k$())) {
      throwIllegalArgumentException('positions and colors lengths must match.');
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = indices.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = indices.get_c1px32_k$(index);
          if (item < 0 || item >= positions.get_size_woubt6_k$()) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (tmp$ret$1) {
      throwIllegalArgumentException('indices values must be valid indices in the positions list.');
    }
    this.positions_1 = encodePointList(this, positions);
    this.textureCoordinates_1 = encodePointList(this, textureCoordinates);
    this.colors_1 = encodeColorList(this, colors);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = indices.get_size_woubt6_k$();
    var tmp_2 = new Int16Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      tmp_2[tmp_3] = toShort(indices.get_c1px32_k$(tmp_3));
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.indices_1 = tmp_2;
  }
  protoOf(Vertices).get_vertexMode_kiz8sf_k$ = function () {
    return this.vertexMode_1;
  };
  protoOf(Vertices).get_positions_ya7scf_k$ = function () {
    return this.positions_1;
  };
  protoOf(Vertices).get_textureCoordinates_1i3vqh_k$ = function () {
    return this.textureCoordinates_1;
  };
  protoOf(Vertices).get_colors_c05661_k$ = function () {
    return this.colors_1;
  };
  protoOf(Vertices).get_indices_xelk8u_k$ = function () {
    return this.indices_1;
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
  function Companion_20() {
    Companion_instance_20 = this;
    var tmp = this;
    tmp.Bradford_1 = new Adaptation$Companion$Bradford$1();
    var tmp_0 = this;
    tmp_0.VonKries_1 = new Adaptation$Companion$VonKries$1();
    var tmp_1 = this;
    tmp_1.Ciecat02__1 = new Adaptation$Companion$Ciecat02$1();
  }
  protoOf(Companion_20).get_Bradford_vb0mll_k$ = function () {
    return this.Bradford_1;
  };
  protoOf(Companion_20).get_VonKries_9ojdic_k$ = function () {
    return this.VonKries_1;
  };
  protoOf(Companion_20).get_Ciecat02_9csyjm_k$ = function () {
    return this.Ciecat02__1;
  };
  var Companion_instance_20;
  function Companion_getInstance_39() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function Adaptation(transform) {
    Companion_getInstance_39();
    this.transform_1 = transform;
  }
  protoOf(Adaptation).get_transform_orl0n4_k$ = function () {
    return this.transform_1;
  };
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
  function Companion_21() {
    Companion_instance_21 = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(3), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
    tmp.Rgb_1 = _ColorModel___init__impl__b968n9(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(3), 32), bitwiseAnd(fromInt(1), new Long(-1, 0)));
    tmp_0.Xyz_1 = _ColorModel___init__impl__b968n9(tmp$ret$1);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$2 = bitwiseOr(shiftLeft(fromInt(3), 32), bitwiseAnd(fromInt(2), new Long(-1, 0)));
    tmp_1.Lab_1 = _ColorModel___init__impl__b968n9(tmp$ret$2);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$3 = bitwiseOr(shiftLeft(fromInt(4), 32), bitwiseAnd(fromInt(3), new Long(-1, 0)));
    tmp_2.Cmyk_1 = _ColorModel___init__impl__b968n9(tmp$ret$3);
  }
  protoOf(Companion_21).get_Rgb_ehihd0_k$ = function () {
    return this.Rgb_1;
  };
  protoOf(Companion_21).get_Xyz_inxdso_k$ = function () {
    return this.Xyz_1;
  };
  protoOf(Companion_21).get_Lab_1fs2w4_k$ = function () {
    return this.Lab_1;
  };
  protoOf(Companion_21).get_Cmyk_dqaxwj_k$ = function () {
    return this.Cmyk_1;
  };
  var Companion_instance_21;
  function Companion_getInstance_40() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function ColorModel__toString_impl_msukd7($this) {
    return equals($this, Companion_getInstance_40().Rgb_1) ? 'Rgb' : equals($this, Companion_getInstance_40().Xyz_1) ? 'Xyz' : equals($this, Companion_getInstance_40().Lab_1) ? 'Lab' : equals($this, Companion_getInstance_40().Cmyk_1) ? 'Cmyk' : 'Unknown';
  }
  function ColorModel__hashCode_impl_11onkc($this) {
    return $this.hashCode();
  }
  function ColorModel__equals_impl_dbkfqg($this, other) {
    if (!(other instanceof ColorModel))
      return false;
    var tmp0_other_with_cast = other instanceof ColorModel ? other.packedValue_1 : THROW_CCE();
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ColorModel(packedValue) {
    Companion_getInstance_40();
    this.packedValue_1 = packedValue;
  }
  protoOf(ColorModel).toString = function () {
    return ColorModel__toString_impl_msukd7(this.packedValue_1);
  };
  protoOf(ColorModel).hashCode = function () {
    return ColorModel__hashCode_impl_11onkc(this.packedValue_1);
  };
  protoOf(ColorModel).equals = function (other) {
    return ColorModel__equals_impl_dbkfqg(this.packedValue_1, other);
  };
  function ColorSpace_init_$Init$(name, model, $this) {
    ColorSpace.call($this, name, model, -1);
    return $this;
  }
  function ColorSpace_init_$Create$(name, model) {
    return ColorSpace_init_$Init$(name, model, objectCreate(protoOf(ColorSpace)));
  }
  function Companion_22() {
    Companion_instance_22 = this;
    this.MinId_1 = -1;
    this.MaxId_1 = 63;
  }
  protoOf(Companion_22).get_MinId_a60v29_k$ = function () {
    return this.MinId_1;
  };
  protoOf(Companion_22).get_MaxId_rir6fn_k$ = function () {
    return this.MaxId_1;
  };
  var Companion_instance_22;
  function Companion_getInstance_41() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function ColorSpace(name, model, id) {
    Companion_getInstance_41();
    this.name_1 = name;
    this.model_1 = model;
    this.id_1 = id;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.name_1;
    if (charSequenceLength(this_0) === 0) {
      throw IllegalArgumentException_init_$Create$('The name of a color space cannot be null and must contain at least 1 character');
    }
    if (this.id_1 < -1 || this.id_1 > 63) {
      throw IllegalArgumentException_init_$Create$('The id must be between -1 and 63');
    }
  }
  protoOf(ColorSpace).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(ColorSpace).get_model_b1t9lk_k$ = function () {
    return this.model_1;
  };
  protoOf(ColorSpace).get_id_55djvj_k$ = function () {
    return this.id_1;
  };
  protoOf(ColorSpace).get_componentCount_ffrht1_k$ = function () {
    return _ColorModel___get_componentCount__impl__au0uoc(this.model_1);
  };
  protoOf(ColorSpace).get_isSrgb_ew666l_k$ = function () {
    return false;
  };
  protoOf(ColorSpace).toXyz_k9kag6_k$ = function (r, g, b) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([r, g, b]);
    return this.toXyz_c5nzk6_k$(tmp$ret$0);
  };
  protoOf(ColorSpace).toXy_a77nwh_k$ = function (v0, v1, v2) {
    var xyz = this.toXyz_k9kag6_k$(v0, v1, v2);
    var tmp0 = xyz[0];
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = xyz[1];
    var v1_0 = fromInt(toRawBits(tmp0));
    var v2_0 = fromInt(toRawBits(val2));
    return bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
  };
  protoOf(ColorSpace).toZ_taoe84_k$ = function (v0, v1, v2) {
    var xyz = this.toXyz_k9kag6_k$(v0, v1, v2);
    return xyz[2];
  };
  protoOf(ColorSpace).xyzaToColor_dpq8aj_k$ = function (x, y, z, a, colorSpace) {
    var colors = this.fromXyz_w96f5j_k$(x, y, z);
    return Color_2(colors[0], colors[1], colors[2], a, colorSpace);
  };
  protoOf(ColorSpace).fromXyz_w96f5j_k$ = function (x, y, z) {
    var xyz = new Float32Array(_ColorModel___get_componentCount__impl__au0uoc(this.model_1));
    xyz[0] = x;
    xyz[1] = y;
    xyz[2] = z;
    return this.fromXyz_ghg1av_k$(xyz);
  };
  protoOf(ColorSpace).toString = function () {
    return this.name_1 + ' (id=' + this.id_1 + ', model=' + ColorModel__toString_impl_msukd7(this.model_1) + ')';
  };
  protoOf(ColorSpace).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other))) {
      return false;
    }
    var that = other instanceof ColorSpace ? other : THROW_CCE();
    if (!(this.id_1 === that.id_1))
      return false;
    return !(this.name_1 === that.name_1) ? false : equals(this.model_1, that.model_1);
  };
  protoOf(ColorSpace).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(31, result) + ColorModel__hashCode_impl_11onkc(this.model_1) | 0;
    result = imul(31, result) + this.id_1 | 0;
    return result;
  };
  function connect(_this__u8e3s4, destination, intent) {
    destination = destination === VOID ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : destination;
    intent = intent === VOID ? Companion_getInstance_45().get_Perceptual_orjm5u_k$() : intent;
    var srcId = _this__u8e3s4.id_1;
    var dstId = destination.id_1;
    var tmp;
    if ((srcId | dstId) < 0) {
      tmp = createConnector(_this__u8e3s4, destination, intent);
    } else {
      var tmp0 = get_Connectors();
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut' call
      var key = srcId | dstId << 6 | _RenderIntent___get_value__impl__ip9mbh(intent) << 12;
      var tmp0_elvis_lhs = tmp0.get_c1px32_k$(key);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = createConnector(_this__u8e3s4, destination, intent);
        tmp0.set_hupg49_k$(key, this_0);
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
      tmp = Companion_getInstance_42().identity_3hwe04_k$(source);
    } else if (equals(source.model_1, Companion_getInstance_40().get_Rgb_ehihd0_k$()) && equals(destination.model_1, Companion_getInstance_40().get_Rgb_ehihd0_k$())) {
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
    adaptation = adaptation === VOID ? Companion_getInstance_39().get_Bradford_vb0mll_k$() : adaptation;
    if (equals(_this__u8e3s4.model_1, Companion_getInstance_40().get_Rgb_ehihd0_k$())) {
      var rgb = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      if (compare_2(rgb.get_whitePoint_g4n5ow_k$(), whitePoint)) {
        return _this__u8e3s4;
      }
      var xyz = whitePoint.toXyz_sxfox1_k$();
      var adaptationTransform = chromaticAdaptation(adaptation.get_transform_orl0n4_k$(), rgb.get_whitePoint_g4n5ow_k$().toXyz_sxfox1_k$(), xyz);
      var transform = mul3x3(adaptationTransform, rgb.get_transform_orl0n4_k$());
      return Rgb_init_$Create$_7(rgb, transform, whitePoint);
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
  function compare_1(a, b) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    if (!(b == null)) {
      // Inline function 'kotlin.math.abs' call
      var x = a.get_a_1mhr5k_k$() - b.get_a_1mhr5k_k$();
      tmp_5 = Math.abs(x) < 0.001;
    } else {
      tmp_5 = false;
    }
    if (tmp_5) {
      // Inline function 'kotlin.math.abs' call
      var x_0 = a.get_b_1mhr5l_k$() - b.get_b_1mhr5l_k$();
      tmp_4 = Math.abs(x_0) < 0.001;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      // Inline function 'kotlin.math.abs' call
      var x_1 = a.get_c_1mhr5m_k$() - b.get_c_1mhr5m_k$();
      tmp_3 = Math.abs(x_1) < 0.001;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      // Inline function 'kotlin.math.abs' call
      var x_2 = a.get_d_1mhr5n_k$() - b.get_d_1mhr5n_k$();
      tmp_2 = Math.abs(x_2) < 0.002;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'kotlin.math.abs' call
      var x_3 = a.get_e_1mhr5o_k$() - b.get_e_1mhr5o_k$();
      tmp_1 = Math.abs(x_3) < 0.001;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      // Inline function 'kotlin.math.abs' call
      var x_4 = a.get_f_1mhr5p_k$() - b.get_f_1mhr5p_k$();
      tmp_0 = Math.abs(x_4) < 0.001;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.math.abs' call
      var x_5 = a.get_gamma_irsi2m_k$() - b.get_gamma_irsi2m_k$();
      tmp = Math.abs(x_5) < 0.001;
    } else {
      tmp = false;
    }
    return tmp;
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
  function mul3x3Float3_0(lhs, r0, r1, r2) {
    return lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
  }
  function mul3x3Float3_1(lhs, r0, r1, r2) {
    return lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
  }
  function mul3x3Float3_2(lhs, r0, r1, r2) {
    return lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
  }
  function compare_2(a, b) {
    if (a === b)
      return true;
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var x = a.get_x_1mhr67_k$() - b.get_x_1mhr67_k$();
    if (Math.abs(x) < 0.001) {
      // Inline function 'kotlin.math.abs' call
      var x_0 = a.get_y_1mhr68_k$() - b.get_y_1mhr68_k$();
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
  function _get_NoneTransferParameters__hzx9fi($this) {
    return $this.NoneTransferParameters_1;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function ColorSpaces$ExtendedSrgb$lambda(x) {
    return absRcpResponse(x, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045, 2.4);
  }
  function ColorSpaces$ExtendedSrgb$lambda_0(x) {
    return absResponse(x, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045, 2.4);
  }
  function ColorSpaces$Bt2020Hlg$lambda(x) {
    return ColorSpaces_getInstance().transferHlgOetf_kmhpnq_k$(ColorSpaces_getInstance().Bt2020HlgTransferParameters_1, x);
  }
  function ColorSpaces$Bt2020Hlg$lambda_0(x) {
    return ColorSpaces_getInstance().transferHlgEotf_vqiy62_k$(ColorSpaces_getInstance().Bt2020HlgTransferParameters_1, x);
  }
  function ColorSpaces$Bt2020Pq$lambda(x) {
    return ColorSpaces_getInstance().transferSt2048Oetf_ldvx3w_k$(ColorSpaces_getInstance().Bt2020PqTransferParameters_1, x);
  }
  function ColorSpaces$Bt2020Pq$lambda_0(x) {
    return ColorSpaces_getInstance().transferSt2048Eotf_whx5m8_k$(ColorSpaces_getInstance().Bt2020PqTransferParameters_1, x);
  }
  function ColorSpaces() {
    ColorSpaces_instance = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.SrgbPrimaries_1 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.Ntsc1953Primaries_1 = new Float32Array([0.67, 0.33, 0.21, 0.71, 0.14, 0.08]);
    var tmp_1 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_1.Bt2020Primaries_1 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
    this.SrgbTransferParameters_1 = new TransferParameters(2.4, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045);
    this.NoneTransferParameters_1 = new TransferParameters(2.2, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045);
    this.Bt2020HlgTransferParameters_1 = new TransferParameters(-3.0, 2.0, 2.0, 1 / 0.17883277, 0.28466892, 0.55991073, -0.685490157);
    this.Bt2020PqTransferParameters_1 = new TransferParameters(-2.0, -1.555223, 1.860454, 32 / 2523.0, 2413 / 128.0, -2392 / 128.0, 8192 / 1305.0);
    this.Srgb_1 = Rgb_init_$Create$_3('sRGB IEC61966-2.1', this.SrgbPrimaries_1, Illuminant_getInstance().get_D65_18jwbq_k$(), this.SrgbTransferParameters_1, 0);
    this.LinearSrgb_1 = Rgb_init_$Create$_6('sRGB IEC61966-2.1 (Linear)', this.SrgbPrimaries_1, Illuminant_getInstance().get_D65_18jwbq_k$(), 1.0, 0.0, 1.0, 1);
    var tmp_2 = this;
    var tmp_3 = Illuminant_getInstance().get_D65_18jwbq_k$();
    var tmp_4 = ColorSpaces$ExtendedSrgb$lambda;
    var tmp_5 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_4);
    var tmp_6 = ColorSpaces$ExtendedSrgb$lambda_0;
    tmp_2.ExtendedSrgb_1 = new Rgb('scRGB-nl IEC 61966-2-2:2003', this.SrgbPrimaries_1, tmp_3, null, tmp_5, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_6), -0.799, 2.399, this.SrgbTransferParameters_1, 2);
    this.LinearExtendedSrgb_1 = Rgb_init_$Create$_6('scRGB IEC 61966-2-2:2003', this.SrgbPrimaries_1, Illuminant_getInstance().get_D65_18jwbq_k$(), 1.0, -0.5, 7.499, 3);
    var tmp_7 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$3 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    tmp_7.Bt709__1 = Rgb_init_$Create$_3('Rec. ITU-R BT.709-5', tmp$ret$3, Illuminant_getInstance().get_D65_18jwbq_k$(), new TransferParameters(1 / 0.45, 1 / 1.099, 0.099 / 1.099, 1 / 4.5, 0.081), 4);
    var tmp_8 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$4 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
    tmp_8.Bt2020__1 = Rgb_init_$Create$_3('Rec. ITU-R BT.2020-1', tmp$ret$4, Illuminant_getInstance().get_D65_18jwbq_k$(), new TransferParameters(1 / 0.45, 1 / 1.0993, 0.0993 / 1.0993, 1 / 4.5, 0.08145), 5);
    var tmp_9 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$5 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_9.DciP3__1 = Rgb_init_$Create$_6('SMPTE RP 431-2-2007 DCI (P3)', tmp$ret$5, new WhitePoint(0.314, 0.351), 2.6, 0.0, 1.0, 6);
    var tmp_10 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$6 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_10.DisplayP3__1 = Rgb_init_$Create$_3('Display P3', tmp$ret$6, Illuminant_getInstance().get_D65_18jwbq_k$(), this.SrgbTransferParameters_1, 7);
    this.Ntsc1953__1 = Rgb_init_$Create$_3('NTSC (1953)', this.Ntsc1953Primaries_1, Illuminant_getInstance().get_C_1mhr4q_k$(), new TransferParameters(1 / 0.45, 1 / 1.099, 0.099 / 1.099, 1 / 4.5, 0.081), 8);
    var tmp_11 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$7 = new Float32Array([0.63, 0.34, 0.31, 0.595, 0.155, 0.07]);
    tmp_11.SmpteC_1 = Rgb_init_$Create$_3('SMPTE-C RGB', tmp$ret$7, Illuminant_getInstance().get_D65_18jwbq_k$(), new TransferParameters(1 / 0.45, 1 / 1.099, 0.099 / 1.099, 1 / 4.5, 0.081), 9);
    var tmp_12 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$8 = new Float32Array([0.64, 0.33, 0.21, 0.71, 0.15, 0.06]);
    tmp_12.AdobeRgb_1 = Rgb_init_$Create$_6('Adobe RGB (1998)', tmp$ret$8, Illuminant_getInstance().get_D65_18jwbq_k$(), 2.2, 0.0, 1.0, 10);
    var tmp_13 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$9 = new Float32Array([0.7347, 0.2653, 0.1596, 0.8404, 0.0366, 1.0E-4]);
    tmp_13.ProPhotoRgb_1 = Rgb_init_$Create$_3('ROMM RGB ISO 22028-2:2013', tmp$ret$9, Illuminant_getInstance().get_D50_18jwcq_k$(), new TransferParameters(1.8, 1.0, 0.0, 1 / 16.0, 0.031248), 11);
    var tmp_14 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$10 = new Float32Array([0.7347, 0.2653, 0.0, 1.0, 1.0E-4, -0.077]);
    tmp_14.Aces_1 = Rgb_init_$Create$_6('SMPTE ST 2065-1:2012 ACES', tmp$ret$10, Illuminant_getInstance().get_D60_18jwbv_k$(), 1.0, -65504.0, 65504.0, 12);
    var tmp_15 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$11 = new Float32Array([0.713, 0.293, 0.165, 0.83, 0.128, 0.044]);
    tmp_15.Acescg_1 = Rgb_init_$Create$_6('Academy S-2014-004 ACEScg', tmp$ret$11, Illuminant_getInstance().get_D60_18jwbv_k$(), 1.0, -65504.0, 65504.0, 13);
    this.CieXyz_1 = new Xyz('Generic XYZ', 14);
    this.CieLab_1 = new Lab('Generic L*a*b*', 15);
    this.Unspecified_1 = Rgb_init_$Create$_3('None', this.SrgbPrimaries_1, Illuminant_getInstance().get_D65_18jwbq_k$(), this.NoneTransferParameters_1, 16);
    var tmp_16 = this;
    var tmp_17 = Illuminant_getInstance().get_D65_18jwbq_k$();
    var tmp_18 = ColorSpaces$Bt2020Hlg$lambda;
    var tmp_19 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(tmp_18);
    var tmp_20 = ColorSpaces$Bt2020Hlg$lambda_0;
    tmp_16.Bt2020Hlg_1 = new Rgb('Hybrid Log Gamma encoding', this.Bt2020Primaries_1, tmp_17, null, tmp_19, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(tmp_20), 0.0, 1.0, this.Bt2020HlgTransferParameters_1, 17);
    var tmp_21 = this;
    var tmp_22 = Illuminant_getInstance().get_D65_18jwbq_k$();
    var tmp_23 = ColorSpaces$Bt2020Pq$lambda;
    var tmp_24 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(tmp_23);
    var tmp_25 = ColorSpaces$Bt2020Pq$lambda_0;
    tmp_21.Bt2020Pq_1 = new Rgb('Perceptual Quantizer encoding', this.Bt2020Primaries_1, tmp_22, null, tmp_24, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(tmp_25), 0.0, 1.0, this.Bt2020PqTransferParameters_1, 18);
    this.Oklab_1 = new Oklab('Oklab', 19);
    var tmp_26 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_26.ColorSpacesArray_1 = [this.Srgb_1, this.LinearSrgb_1, this.ExtendedSrgb_1, this.LinearExtendedSrgb_1, this.Bt709__1, this.Bt2020__1, this.DciP3__1, this.DisplayP3__1, this.Ntsc1953__1, this.SmpteC_1, this.AdobeRgb_1, this.ProPhotoRgb_1, this.Aces_1, this.Acescg_1, this.CieXyz_1, this.CieLab_1, this.Unspecified_1, this.Bt2020Hlg_1, this.Bt2020Pq_1, this.Oklab_1];
  }
  protoOf(ColorSpaces).get_SrgbPrimaries_b68gxm_k$ = function () {
    return this.SrgbPrimaries_1;
  };
  protoOf(ColorSpaces).get_Ntsc1953Primaries_vkmprc_k$ = function () {
    return this.Ntsc1953Primaries_1;
  };
  protoOf(ColorSpaces).get_Bt2020Primaries_s1wvoa_k$ = function () {
    return this.Bt2020Primaries_1;
  };
  protoOf(ColorSpaces).get_SrgbTransferParameters_fo756z_k$ = function () {
    return this.SrgbTransferParameters_1;
  };
  protoOf(ColorSpaces).get_Bt2020HlgTransferParameters_8f1g1q_k$ = function () {
    return this.Bt2020HlgTransferParameters_1;
  };
  protoOf(ColorSpaces).get_Bt2020PqTransferParameters_kosgoa_k$ = function () {
    return this.Bt2020PqTransferParameters_1;
  };
  protoOf(ColorSpaces).get_Srgb_woa2g3_k$ = function () {
    return this.Srgb_1;
  };
  protoOf(ColorSpaces).get_LinearSrgb_gaeay0_k$ = function () {
    return this.LinearSrgb_1;
  };
  protoOf(ColorSpaces).get_ExtendedSrgb_860058_k$ = function () {
    return this.ExtendedSrgb_1;
  };
  protoOf(ColorSpaces).get_LinearExtendedSrgb_2lon29_k$ = function () {
    return this.LinearExtendedSrgb_1;
  };
  protoOf(ColorSpaces).get_Bt709_i7r3c5_k$ = function () {
    return this.Bt709__1;
  };
  protoOf(ColorSpaces).get_Bt2020_3knrex_k$ = function () {
    return this.Bt2020__1;
  };
  protoOf(ColorSpaces).get_DciP3_i8kvl0_k$ = function () {
    return this.DciP3__1;
  };
  protoOf(ColorSpaces).get_DisplayP3_pa2gtg_k$ = function () {
    return this.DisplayP3__1;
  };
  protoOf(ColorSpaces).get_Ntsc1953_2r08mz_k$ = function () {
    return this.Ntsc1953__1;
  };
  protoOf(ColorSpaces).get_SmpteC_4ee9z9_k$ = function () {
    return this.SmpteC_1;
  };
  protoOf(ColorSpaces).get_AdobeRgb_p3r0p3_k$ = function () {
    return this.AdobeRgb_1;
  };
  protoOf(ColorSpaces).get_ProPhotoRgb_ygdri9_k$ = function () {
    return this.ProPhotoRgb_1;
  };
  protoOf(ColorSpaces).get_Aces_wny9ix_k$ = function () {
    return this.Aces_1;
  };
  protoOf(ColorSpaces).get_Acescg_4a3wo3_k$ = function () {
    return this.Acescg_1;
  };
  protoOf(ColorSpaces).get_CieXyz_38qfst_k$ = function () {
    return this.CieXyz_1;
  };
  protoOf(ColorSpaces).get_CieLab_38qpah_k$ = function () {
    return this.CieLab_1;
  };
  protoOf(ColorSpaces).get_Unspecified_ehgbzf_k$ = function () {
    return this.Unspecified_1;
  };
  protoOf(ColorSpaces).get_Bt2020Hlg_5kko30_k$ = function () {
    return this.Bt2020Hlg_1;
  };
  protoOf(ColorSpaces).get_Bt2020Pq_p0w4dk_k$ = function () {
    return this.Bt2020Pq_1;
  };
  protoOf(ColorSpaces).get_Oklab_ierso8_k$ = function () {
    return this.Oklab_1;
  };
  protoOf(ColorSpaces).match_edbbcy_k$ = function (toXYZD50, function_0) {
    var indexedObject = this.ColorSpacesArray_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var colorSpace = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (equals(colorSpace.get_model_b1t9lk_k$(), Companion_getInstance_40().get_Rgb_ehihd0_k$())) {
        var tmp = adapt(colorSpace, Illuminant_getInstance().get_D50_18jwcq_k$());
        var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
        if (compare_0(toXYZD50, rgb.get_transform_orl0n4_k$()) && compare_1(function_0, rgb.get_transferParameters_ak703m_k$())) {
          return colorSpace;
        }
      }
    }
    return null;
  };
  protoOf(ColorSpaces).getColorSpace_boleke_k$ = function (id) {
    return this.ColorSpacesArray_1[id];
  };
  protoOf(ColorSpaces).get_ColorSpacesArray_47ngi9_k$ = function () {
    return this.ColorSpacesArray_1;
  };
  protoOf(ColorSpaces).transferHlgOetf_kmhpnq_k$ = function (params, x) {
    var sign = x < 0 ? -1.0 : 1.0;
    var absX = x * sign;
    var R = 1.0 / params.get_a_1mhr5k_k$();
    var G = 1.0 / params.get_b_1mhr5l_k$();
    var a = 1.0 / params.get_c_1mhr5m_k$();
    var b = params.get_d_1mhr5n_k$();
    var c = params.get_e_1mhr5o_k$();
    var K = params.get_f_1mhr5p_k$() + 1.0;
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
  protoOf(ColorSpaces).transferHlgEotf_vqiy62_k$ = function (params, x) {
    var sign = x < 0 ? -1.0 : 1.0;
    var absX = x * sign;
    var R = params.get_a_1mhr5k_k$();
    var G = params.get_b_1mhr5l_k$();
    var a = params.get_c_1mhr5m_k$();
    var b = params.get_d_1mhr5n_k$();
    var c = params.get_e_1mhr5o_k$();
    var K = params.get_f_1mhr5p_k$() + 1.0;
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
  protoOf(ColorSpaces).transferSt2048Oetf_ldvx3w_k$ = function (params, x) {
    var sign = x < 0 ? -1.0 : 1.0;
    var absX = x * sign;
    var a = -params.get_a_1mhr5k_k$();
    var b = params.get_d_1mhr5n_k$();
    var c = 1.0 / params.get_f_1mhr5p_k$();
    var d = params.get_b_1mhr5l_k$();
    var e = -params.get_e_1mhr5o_k$();
    var f = 1.0 / params.get_c_1mhr5m_k$();
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.max' call
    var a_0 = a + b * Math.pow(absX, c);
    var tmp = Math.max(a_0, 0.0);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.pow' call
    var this_0 = tmp / (d + e * Math.pow(absX, c));
    return sign * Math.pow(this_0, f);
  };
  protoOf(ColorSpaces).transferSt2048Eotf_whx5m8_k$ = function (pq, x) {
    var sign = x < 0 ? -1.0 : 1.0;
    var absX = x * sign;
    var tmp = pq.get_a_1mhr5k_k$();
    var tmp_0 = pq.get_b_1mhr5l_k$();
    // Inline function 'kotlin.math.pow' call
    var x_0 = pq.get_c_1mhr5m_k$();
    var tmp$ret$0 = Math.pow(absX, x_0);
    var tmp_1 = coerceAtLeast(tmp + tmp_0 * tmp$ret$0, 0.0);
    var tmp_2 = pq.get_d_1mhr5n_k$();
    var tmp_3 = pq.get_e_1mhr5o_k$();
    // Inline function 'kotlin.math.pow' call
    var x_1 = pq.get_c_1mhr5m_k$();
    var tmp0 = tmp_1 / (tmp_2 + tmp_3 * Math.pow(absX, x_1));
    // Inline function 'kotlin.math.pow' call
    var x_2 = pq.get_f_1mhr5p_k$();
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
  function _get_mSource__pfxk2f($this) {
    return $this.mSource_1;
  }
  function _get_mDestination__f08o3u($this) {
    return $this.mDestination_1;
  }
  function _get_mTransform__1c5rl8($this) {
    return $this.mTransform_1;
  }
  function computeTransform($this, source, destination, intent) {
    if (compare_2(source.get_whitePoint_g4n5ow_k$(), destination.get_whitePoint_g4n5ow_k$())) {
      return mul3x3(destination.get_inverseTransform_5adnaa_k$(), source.get_transform_orl0n4_k$());
    } else {
      var transform = source.get_transform_orl0n4_k$();
      var inverseTransform = destination.get_inverseTransform_5adnaa_k$();
      var srcXYZ = source.get_whitePoint_g4n5ow_k$().toXyz_sxfox1_k$();
      var dstXYZ = destination.get_whitePoint_g4n5ow_k$().toXyz_sxfox1_k$();
      if (!compare_2(source.get_whitePoint_g4n5ow_k$(), Illuminant_getInstance().get_D50_18jwcq_k$())) {
        var srcAdaptation = chromaticAdaptation(Companion_getInstance_39().get_Bradford_vb0mll_k$().get_transform_orl0n4_k$(), srcXYZ, Illuminant_getInstance().newD50Xyz_wj5and_k$());
        transform = mul3x3(srcAdaptation, source.get_transform_orl0n4_k$());
      }
      if (!compare_2(destination.get_whitePoint_g4n5ow_k$(), Illuminant_getInstance().get_D50_18jwcq_k$())) {
        var dstAdaptation = chromaticAdaptation(Companion_getInstance_39().get_Bradford_vb0mll_k$().get_transform_orl0n4_k$(), dstXYZ, Illuminant_getInstance().newD50Xyz_wj5and_k$());
        inverseTransform = inverse3x3(mul3x3(dstAdaptation, destination.get_transform_orl0n4_k$()));
      }
      if (intent === Companion_getInstance_45().get_Absolute_v1xj70_k$()) {
        // Inline function 'kotlin.floatArrayOf' call
        var tmp$ret$0 = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
        transform = mul3x3Diag(tmp$ret$0, transform);
      }
      return mul3x3(inverseTransform, transform);
    }
  }
  function computeTransform_0($this, source, destination, intent) {
    if (!(intent === Companion_getInstance_45().get_Absolute_v1xj70_k$()))
      return null;
    var srcRGB = equals(source.get_model_b1t9lk_k$(), Companion_getInstance_40().get_Rgb_ehihd0_k$());
    var dstRGB = equals(destination.get_model_b1t9lk_k$(), Companion_getInstance_40().get_Rgb_ehihd0_k$());
    if (srcRGB && dstRGB)
      return null;
    if (srcRGB || dstRGB) {
      var tmp = srcRGB ? source : destination;
      var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
      var srcXYZ = srcRGB ? rgb.get_whitePoint_g4n5ow_k$().toXyz_sxfox1_k$() : Illuminant_getInstance().get_D50Xyz_d0yghs_k$();
      var dstXYZ = dstRGB ? rgb.get_whitePoint_g4n5ow_k$().toXyz_sxfox1_k$() : Illuminant_getInstance().get_D50Xyz_d0yghs_k$();
      // Inline function 'kotlin.floatArrayOf' call
      return new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
    }
    return null;
  }
  function Connector$Companion$identity$1($source) {
    Connector_init_$Init$($source, $source, Companion_getInstance_45().get_Relative_86s99b_k$(), this);
  }
  protoOf(Connector$Companion$identity$1).transform_82bv4k_k$ = function (v) {
    return v;
  };
  protoOf(Connector$Companion$identity$1).transformToColor_lg4sel_k$ = function (color) {
    return color;
  };
  function _get_transformSource__ks0k3a($this) {
    return $this.transformSource_1;
  }
  function _get_transformDestination__y9np1l($this) {
    return $this.transformDestination_1;
  }
  function _get_transform__ku8tb9($this) {
    return $this.transform_1;
  }
  function Connector_init_$Init$(source, destination, intent, $this) {
    var tmp = equals(source.get_model_b1t9lk_k$(), Companion_getInstance_40().get_Rgb_ehihd0_k$()) ? adapt(source, Illuminant_getInstance().get_D50_18jwcq_k$()) : source;
    var tmp_0;
    if (equals(destination.get_model_b1t9lk_k$(), Companion_getInstance_40().get_Rgb_ehihd0_k$())) {
      tmp_0 = adapt(destination, Illuminant_getInstance().get_D50_18jwcq_k$());
    } else {
      tmp_0 = destination;
    }
    Connector.call($this, source, destination, tmp, tmp_0, intent, computeTransform_0(Companion_getInstance_42(), source, destination, intent));
    return $this;
  }
  function Connector_init_$Create$(source, destination, intent) {
    return Connector_init_$Init$(source, destination, intent, objectCreate(protoOf(Connector)));
  }
  function RgbConnector(mSource, mDestination, intent) {
    Connector.call(this, mSource, mDestination, mSource, mDestination, intent, null);
    this.mSource_1 = mSource;
    this.mDestination_1 = mDestination;
    this.mTransform_1 = computeTransform(this, this.mSource_1, this.mDestination_1, intent);
  }
  protoOf(RgbConnector).transform_82bv4k_k$ = function (v) {
    v[0] = this.mSource_1.get_eotfFunc_sfqxs6_k$().invoke_e0thbm_k$(v[0]);
    v[1] = this.mSource_1.get_eotfFunc_sfqxs6_k$().invoke_e0thbm_k$(v[1]);
    v[2] = this.mSource_1.get_eotfFunc_sfqxs6_k$().invoke_e0thbm_k$(v[2]);
    mul3x3Float3(this.mTransform_1, v);
    v[0] = this.mDestination_1.get_oetfFunc_a2624u_k$().invoke_e0thbm_k$(v[0]);
    v[1] = this.mDestination_1.get_oetfFunc_a2624u_k$().invoke_e0thbm_k$(v[1]);
    v[2] = this.mDestination_1.get_oetfFunc_a2624u_k$().invoke_e0thbm_k$(v[2]);
    return v;
  };
  protoOf(RgbConnector).transformToColor_lg4sel_k$ = function (color) {
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var r = _Color___get_red__impl__cwrsk6(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var g = _Color___get_green__impl__bta9rs(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var a = _Color___get_alpha__impl__wcfyv1(color);
    var v0 = this.mSource_1.get_eotfFunc_sfqxs6_k$().invoke_e0thbm_k$(r);
    var v1 = this.mSource_1.get_eotfFunc_sfqxs6_k$().invoke_e0thbm_k$(g);
    var v2 = this.mSource_1.get_eotfFunc_sfqxs6_k$().invoke_e0thbm_k$(b);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = this.mTransform_1;
    var v01 = lhs[0] * v0 + lhs[3] * v1 + lhs[6] * v2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = this.mTransform_1;
    var v11 = lhs_0[1] * v0 + lhs_0[4] * v1 + lhs_0[7] * v2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = this.mTransform_1;
    var v21 = lhs_1[2] * v0 + lhs_1[5] * v1 + lhs_1[8] * v2;
    var v02 = this.mDestination_1.get_oetfFunc_a2624u_k$().invoke_e0thbm_k$(v01);
    var v12 = this.mDestination_1.get_oetfFunc_a2624u_k$().invoke_e0thbm_k$(v11);
    var v22 = this.mDestination_1.get_oetfFunc_a2624u_k$().invoke_e0thbm_k$(v21);
    return Color_2(v02, v12, v22, a, this.mDestination_1);
  };
  function Companion_23() {
    Companion_instance_23 = this;
  }
  protoOf(Companion_23).identity_3hwe04_k$ = function (source) {
    return new Connector$Companion$identity$1(source);
  };
  var Companion_instance_23;
  function Companion_getInstance_42() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function Connector(source, destination, transformSource, transformDestination, renderIntent, transform) {
    Companion_getInstance_42();
    this.source_1 = source;
    this.destination_1 = destination;
    this.transformSource_1 = transformSource;
    this.transformDestination_1 = transformDestination;
    this.renderIntent_1 = renderIntent;
    this.transform_1 = transform;
  }
  protoOf(Connector).get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  protoOf(Connector).get_destination_9r3c63_k$ = function () {
    return this.destination_1;
  };
  protoOf(Connector).get_renderIntent_47zyf_k$ = function () {
    return this.renderIntent_1;
  };
  protoOf(Connector).transform_px7d8_k$ = function (r, g, b) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([r, g, b]);
    return this.transform_82bv4k_k$(tmp$ret$0);
  };
  protoOf(Connector).transform_82bv4k_k$ = function (v) {
    var xyz = this.transformSource_1.toXyz_c5nzk6_k$(v);
    if (!(this.transform_1 == null)) {
      xyz[0] = xyz[0] * this.transform_1[0];
      xyz[1] = xyz[1] * this.transform_1[1];
      xyz[2] = xyz[2] * this.transform_1[2];
    }
    return this.transformDestination_1.fromXyz_ghg1av_k$(xyz);
  };
  protoOf(Connector).transformToColor_lg4sel_k$ = function (color) {
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var r = _Color___get_red__impl__cwrsk6(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var g = _Color___get_green__impl__bta9rs(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var a = _Color___get_alpha__impl__wcfyv1(color);
    var packed = this.transformSource_1.toXy_a77nwh_k$(r, g, b);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(packed, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(packed, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var y = floatFromBits(bits_0);
    var z = this.transformSource_1.toZ_taoe84_k$(r, g, b);
    if (!(this.transform_1 == null)) {
      x = x * this.transform_1[0];
      y = y * this.transform_1[1];
      z = z * this.transform_1[2];
    }
    return this.transformDestination_1.xyzaToColor_dpq8aj_k$(x, y, z, a, this.destination_1);
  };
  function connectorKey(src, dst, renderIntent) {
    _init_properties_Connector_kt__swbf17();
    return src | dst << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent) << 12;
  }
  var properties_initialized_Connector_kt_5j9z4t;
  function _init_properties_Connector_kt__swbf17() {
    if (!properties_initialized_Connector_kt_5j9z4t) {
      properties_initialized_Connector_kt_5j9z4t = true;
      var tmp0 = ColorSpaces_getInstance().get_Srgb_woa2g3_k$().get_id_55djvj_k$();
      var tmp2 = ColorSpaces_getInstance().get_Srgb_woa2g3_k$().get_id_55djvj_k$();
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var renderIntent = Companion_getInstance_45().get_Perceptual_orjm5u_k$();
      var tmp = tmp0 | tmp2 << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent) << 12;
      var tmp_0 = Companion_getInstance_42().identity_3hwe04_k$(ColorSpaces_getInstance().get_Srgb_woa2g3_k$());
      var tmp0_0 = ColorSpaces_getInstance().get_Srgb_woa2g3_k$().get_id_55djvj_k$();
      var tmp2_0 = ColorSpaces_getInstance().get_Oklab_ierso8_k$().get_id_55djvj_k$();
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var renderIntent_0 = Companion_getInstance_45().get_Perceptual_orjm5u_k$();
      var tmp_1 = tmp0_0 | tmp2_0 << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent_0) << 12;
      var tmp_2 = Connector_init_$Create$(ColorSpaces_getInstance().get_Srgb_woa2g3_k$(), ColorSpaces_getInstance().get_Oklab_ierso8_k$(), Companion_getInstance_45().get_Perceptual_orjm5u_k$());
      var tmp0_1 = ColorSpaces_getInstance().get_Oklab_ierso8_k$().get_id_55djvj_k$();
      var tmp2_1 = ColorSpaces_getInstance().get_Srgb_woa2g3_k$().get_id_55djvj_k$();
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var renderIntent_1 = Companion_getInstance_45().get_Perceptual_orjm5u_k$();
      var tmp$ret$2 = tmp0_1 | tmp2_1 << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent_1) << 12;
      Connectors = mutableIntObjectMapOf(tmp, tmp_0, tmp_1, tmp_2, tmp$ret$2, Connector_init_$Create$(ColorSpaces_getInstance().get_Oklab_ierso8_k$(), ColorSpaces_getInstance().get_Srgb_woa2g3_k$(), Companion_getInstance_45().get_Perceptual_orjm5u_k$()));
    }
  }
  function Illuminant() {
    Illuminant_instance = this;
    this.A_1 = new WhitePoint(0.44757, 0.40745);
    this.B_1 = new WhitePoint(0.34842, 0.35161);
    this.C_1 = new WhitePoint(0.31006, 0.31616);
    this.D50__1 = new WhitePoint(0.34567, 0.3585);
    this.D55__1 = new WhitePoint(0.33242, 0.34743);
    this.D60__1 = new WhitePoint(0.32168, 0.33767);
    this.D65__1 = new WhitePoint(0.31271, 0.32902);
    this.D75__1 = new WhitePoint(0.29902, 0.31485);
    this.E_1 = new WhitePoint(0.33333, 0.33333);
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.D50Xyz_1 = new Float32Array([0.964212, 1.0, 0.825188]);
  }
  protoOf(Illuminant).get_A_1mhr4o_k$ = function () {
    return this.A_1;
  };
  protoOf(Illuminant).get_B_1mhr4p_k$ = function () {
    return this.B_1;
  };
  protoOf(Illuminant).get_C_1mhr4q_k$ = function () {
    return this.C_1;
  };
  protoOf(Illuminant).get_D50_18jwcq_k$ = function () {
    return this.D50__1;
  };
  protoOf(Illuminant).get_D55_18jwcl_k$ = function () {
    return this.D55__1;
  };
  protoOf(Illuminant).get_D60_18jwbv_k$ = function () {
    return this.D60__1;
  };
  protoOf(Illuminant).get_D65_18jwbq_k$ = function () {
    return this.D65__1;
  };
  protoOf(Illuminant).get_D75_18jwav_k$ = function () {
    return this.D75__1;
  };
  protoOf(Illuminant).get_E_1mhr4s_k$ = function () {
    return this.E_1;
  };
  protoOf(Illuminant).get_D50Xyz_d0yghs_k$ = function () {
    return this.D50Xyz_1;
  };
  protoOf(Illuminant).newD50Xyz_wj5and_k$ = function () {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([0.964212, 1.0, 0.825188]);
  };
  var Illuminant_instance;
  function Illuminant_getInstance() {
    if (Illuminant_instance == null)
      new Illuminant();
    return Illuminant_instance;
  }
  function _get_A__7mlnow($this) {
    return $this.A_1;
  }
  function _get_B__7mlnpr($this) {
    return $this.B_1;
  }
  function _get_C__7mlnqm($this) {
    return $this.C_1;
  }
  function _get_D__7mlnrh($this) {
    return $this.D_1;
  }
  function Companion_24() {
    Companion_instance_24 = this;
    this.A_1 = 0.008856452;
    this.B_1 = 7.787037;
    this.C_1 = 0.13793103;
    this.D_1 = 0.20689656;
  }
  var Companion_instance_24;
  function Companion_getInstance_43() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function Lab(name, id) {
    Companion_getInstance_43();
    ColorSpace.call(this, name, Companion_getInstance_40().get_Lab_1fs2w4_k$(), id);
  }
  protoOf(Lab).get_isWideGamut_oxj4to_k$ = function () {
    return true;
  };
  protoOf(Lab).getMinValue_3znj7n_k$ = function (component) {
    return component === 0 ? 0.0 : -128.0;
  };
  protoOf(Lab).getMaxValue_kswgkr_k$ = function (component) {
    return component === 0 ? 100.0 : 128.0;
  };
  protoOf(Lab).toXyz_c5nzk6_k$ = function (v) {
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
    v[0] = x * Illuminant_getInstance().get_D50Xyz_d0yghs_k$()[0];
    v[1] = y * Illuminant_getInstance().get_D50Xyz_d0yghs_k$()[1];
    v[2] = z * Illuminant_getInstance().get_D50Xyz_d0yghs_k$()[2];
    return v;
  };
  protoOf(Lab).toXy_a77nwh_k$ = function (v0, v1, v2) {
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
    var tmp0 = x * Illuminant_getInstance().get_D50Xyz_d0yghs_k$()[0];
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = y * Illuminant_getInstance().get_D50Xyz_d0yghs_k$()[1];
    var v1_0 = fromInt(toRawBits(tmp0));
    var v2_0 = fromInt(toRawBits(val2));
    return bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
  };
  protoOf(Lab).toZ_taoe84_k$ = function (v0, v1, v2) {
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
    return z * Illuminant_getInstance().get_D50Xyz_d0yghs_k$()[2];
  };
  protoOf(Lab).xyzaToColor_dpq8aj_k$ = function (x, y, z, a, colorSpace) {
    var x1 = x / Illuminant_getInstance().get_D50Xyz_d0yghs_k$()[0];
    var y1 = y / Illuminant_getInstance().get_D50Xyz_d0yghs_k$()[1];
    var z1 = z / Illuminant_getInstance().get_D50Xyz_d0yghs_k$()[2];
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
  protoOf(Lab).fromXyz_ghg1av_k$ = function (v) {
    var x = v[0] / Illuminant_getInstance().get_D50Xyz_d0yghs_k$()[0];
    var y = v[1] / Illuminant_getInstance().get_D50Xyz_d0yghs_k$()[1];
    var z = v[2] / Illuminant_getInstance().get_D50Xyz_d0yghs_k$()[2];
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
  function _get_M1__ndbh53($this) {
    return $this.M1__1;
  }
  function _get_M2__ndbh5y($this) {
    return $this.M2__1;
  }
  function _get_InverseM1__sa58eb($this) {
    return $this.InverseM1__1;
  }
  function _get_InverseM2__sa58dg($this) {
    return $this.InverseM2__1;
  }
  function Companion_25() {
    Companion_instance_25 = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.818933, 0.032984544, 0.0482003, 0.36186674, 0.9293119, 0.26436627, -0.12885971, 0.03614564, 0.6338517]);
    tmp.M1__1 = mul3x3(tmp$ret$0, chromaticAdaptation(Companion_getInstance_39().get_Bradford_vb0mll_k$().get_transform_orl0n4_k$(), Illuminant_getInstance().get_D50_18jwcq_k$().toXyz_sxfox1_k$(), Illuminant_getInstance().get_D65_18jwbq_k$().toXyz_sxfox1_k$()));
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.M2__1 = new Float32Array([0.21045426, 1.9779985, 0.025904037, 0.7936178, -2.4285922, 0.78277177, -0.004072047, 0.4505937, -0.80867577]);
    this.InverseM1__1 = inverse3x3(this.M1__1);
    this.InverseM2__1 = inverse3x3(this.M2__1);
  }
  var Companion_instance_25;
  function Companion_getInstance_44() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function Oklab(name, id) {
    Companion_getInstance_44();
    ColorSpace.call(this, name, Companion_getInstance_40().get_Lab_1fs2w4_k$(), id);
  }
  protoOf(Oklab).get_isWideGamut_oxj4to_k$ = function () {
    return true;
  };
  protoOf(Oklab).getMinValue_3znj7n_k$ = function (component) {
    return component === 0 ? 0.0 : -0.5;
  };
  protoOf(Oklab).getMaxValue_kswgkr_k$ = function (component) {
    return component === 0 ? 1.0 : 0.5;
  };
  protoOf(Oklab).toXyz_c5nzk6_k$ = function (v) {
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
    mul3x3Float3(Companion_getInstance_44().InverseM2__1, v);
    v[0] = v[0] * v[0] * v[0];
    v[1] = v[1] * v[1] * v[1];
    v[2] = v[2] * v[2] * v[2];
    mul3x3Float3(Companion_getInstance_44().InverseM1__1, v);
    return v;
  };
  protoOf(Oklab).toXy_a77nwh_k$ = function (v0, v1, v2) {
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
    var lhs = Companion_getInstance_44().InverseM2__1;
    var v01 = lhs[0] * v00 + lhs[3] * v10 + lhs[6] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = Companion_getInstance_44().InverseM2__1;
    var v11 = lhs_0[1] * v00 + lhs_0[4] * v10 + lhs_0[7] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = Companion_getInstance_44().InverseM2__1;
    var v21 = lhs_1[2] * v00 + lhs_1[5] * v10 + lhs_1[8] * v20;
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs_2 = Companion_getInstance_44().InverseM1__1;
    var v03 = lhs_2[0] * v02 + lhs_2[3] * v12 + lhs_2[6] * v22;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_3 = Companion_getInstance_44().InverseM1__1;
    var v13 = lhs_3[1] * v02 + lhs_3[4] * v12 + lhs_3[7] * v22;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = fromInt(toRawBits(v03));
    var v2_0 = fromInt(toRawBits(v13));
    return bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
  };
  protoOf(Oklab).toZ_taoe84_k$ = function (v0, v1, v2) {
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
    var lhs = Companion_getInstance_44().InverseM2__1;
    var v01 = lhs[0] * v00 + lhs[3] * v10 + lhs[6] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = Companion_getInstance_44().InverseM2__1;
    var v11 = lhs_0[1] * v00 + lhs_0[4] * v10 + lhs_0[7] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = Companion_getInstance_44().InverseM2__1;
    var v21 = lhs_1[2] * v00 + lhs_1[5] * v10 + lhs_1[8] * v20;
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_2 = Companion_getInstance_44().InverseM1__1;
    var v23 = lhs_2[2] * v02 + lhs_2[5] * v12 + lhs_2[8] * v22;
    return v23;
  };
  protoOf(Oklab).xyzaToColor_dpq8aj_k$ = function (x, y, z, a, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = Companion_getInstance_44().M1__1;
    var v0 = lhs[0] * x + lhs[3] * y + lhs[6] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = Companion_getInstance_44().M1__1;
    var v1 = lhs_0[1] * x + lhs_0[4] * y + lhs_0[7] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = Companion_getInstance_44().M1__1;
    var v2 = lhs_1[2] * x + lhs_1[5] * y + lhs_1[8] * z;
    v0 = fastCbrt(v0);
    v1 = fastCbrt(v1);
    v2 = fastCbrt(v2);
    var tmp0 = Companion_getInstance_44().M2__1;
    var tmp2 = v0;
    var tmp4 = v1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var r2 = v2;
    var v01 = tmp0[0] * tmp2 + tmp0[3] * tmp4 + tmp0[6] * r2;
    var tmp0_0 = Companion_getInstance_44().M2__1;
    var tmp2_0 = v0;
    var tmp4_0 = v1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var r2_0 = v2;
    var v11 = tmp0_0[1] * tmp2_0 + tmp0_0[4] * tmp4_0 + tmp0_0[7] * r2_0;
    var tmp0_1 = Companion_getInstance_44().M2__1;
    var tmp2_1 = v0;
    var tmp4_1 = v1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var r2_1 = v2;
    var v21 = tmp0_1[2] * tmp2_1 + tmp0_1[5] * tmp4_1 + tmp0_1[8] * r2_1;
    return Color_2(v01, v11, v21, a, colorSpace);
  };
  protoOf(Oklab).fromXyz_ghg1av_k$ = function (v) {
    mul3x3Float3(Companion_getInstance_44().M1__1, v);
    v[0] = fastCbrt(v[0]);
    v[1] = fastCbrt(v[1]);
    v[2] = fastCbrt(v[2]);
    mul3x3Float3(Companion_getInstance_44().M2__1, v);
    return v;
  };
  function _RenderIntent___init__impl__jceahd(value) {
    return value;
  }
  function _RenderIntent___get_value__impl__ip9mbh($this) {
    return $this;
  }
  function Companion_26() {
    Companion_instance_26 = this;
    this.Perceptual_1 = _RenderIntent___init__impl__jceahd(0);
    this.Relative_1 = _RenderIntent___init__impl__jceahd(1);
    this.Saturation_1 = _RenderIntent___init__impl__jceahd(2);
    this.Absolute_1 = _RenderIntent___init__impl__jceahd(3);
  }
  protoOf(Companion_26).get_Perceptual_orjm5u_k$ = function () {
    return this.Perceptual_1;
  };
  protoOf(Companion_26).get_Relative_86s99b_k$ = function () {
    return this.Relative_1;
  };
  protoOf(Companion_26).get_Saturation_xsye3d_k$ = function () {
    return this.Saturation_1;
  };
  protoOf(Companion_26).get_Absolute_v1xj70_k$ = function () {
    return this.Absolute_1;
  };
  var Companion_instance_26;
  function Companion_getInstance_45() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function RenderIntent__toString_impl_b479rl($this) {
    return $this === Companion_getInstance_45().Perceptual_1 ? 'Perceptual' : $this === Companion_getInstance_45().Relative_1 ? 'Relative' : $this === Companion_getInstance_45().Saturation_1 ? 'Saturation' : $this === Companion_getInstance_45().Absolute_1 ? 'Absolute' : 'Unknown';
  }
  function RenderIntent__hashCode_impl_wvd6kg($this) {
    return $this;
  }
  function RenderIntent__equals_impl_5o84ik($this, other) {
    if (!(other instanceof RenderIntent))
      return false;
    if (!($this === (other instanceof RenderIntent ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function RenderIntent(value) {
    Companion_getInstance_45();
    this.value_1 = value;
  }
  protoOf(RenderIntent).toString = function () {
    return RenderIntent__toString_impl_b479rl(this.value_1);
  };
  protoOf(RenderIntent).hashCode = function () {
    return RenderIntent__hashCode_impl_wvd6kg(this.value_1);
  };
  protoOf(RenderIntent).equals = function (other) {
    return RenderIntent__equals_impl_5o84ik(this.value_1, other);
  };
  function _get_DoubleIdentity__g3p9ng($this) {
    return $this.DoubleIdentity_1;
  }
  function isSrgb($this, primaries, whitePoint, OETF, EOTF, min, max, id) {
    if (id === 0)
      return true;
    if (!compare_0(primaries, ColorSpaces_getInstance().get_SrgbPrimaries_b68gxm_k$())) {
      return false;
    }
    if (!compare_2(whitePoint, Illuminant_getInstance().get_D65_18jwbq_k$())) {
      return false;
    }
    if (!(min === 0.0))
      return false;
    if (!(max === 1.0))
      return false;
    var srgb = ColorSpaces_getInstance().get_Srgb_woa2g3_k$();
    var x = 0.0;
    while (x <= 1.0) {
      if (!compare_3($this, x, OETF, srgb.oetfOrig_1))
        return false;
      if (!compare_3($this, x, EOTF, srgb.eotfOrig_1))
        return false;
      x = x + 1 / 255.0;
    }
    return true;
  }
  function compare_3($this, point, a, b) {
    var rA = a.invoke_e0thbm_k$(point);
    var rB = b.invoke_e0thbm_k$(point);
    // Inline function 'kotlin.math.abs' call
    var x = rA - rB;
    return Math.abs(x) <= 0.001;
  }
  function isWideGamut($this, primaries, min, max) {
    return area($this, primaries) / area($this, ColorSpaces_getInstance().get_Ntsc1953Primaries_vkmprc_k$()) > 0.9 && contains($this, primaries, ColorSpaces_getInstance().get_SrgbPrimaries_b68gxm_k$()) || (min < 0.0 && max > 1.0);
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
  function cross($this, ax, ay, bx, by) {
    return ax * by - ay * bx;
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
  function computeWhitePoint($this, toXYZ) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([1.0, 1.0, 1.0]);
    var w = mul3x3Float3(toXYZ, tmp$ret$0);
    var sum = w[0] + w[1] + w[2];
    return new WhitePoint(w[0] / sum, w[1] / sum);
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
    var wx = whitePoint.get_x_1mhr67_k$();
    var wy = whitePoint.get_y_1mhr68_k$();
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
    if (function_0.get_isHLGish_4onnt7_k$()) {
      var tmp_0 = Rgb$Companion$generateOetf$lambda(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_0);
    } else if (function_0.get_isPQish_85j2m1_k$()) {
      var tmp_1 = Rgb$Companion$generateOetf$lambda_0(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_1);
    } else {
      var tmp_2;
      if (function_0.get_e_1mhr5o_k$() === 0.0 && function_0.get_f_1mhr5p_k$() === 0.0) {
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
    if (function_0.get_isHLGish_4onnt7_k$()) {
      var tmp_0 = Rgb$Companion$generateEotf$lambda(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_0);
    } else if (function_0.get_isPQish_85j2m1_k$()) {
      var tmp_1 = Rgb$Companion$generateEotf$lambda_0(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_1);
    } else {
      var tmp_2;
      if (function_0.get_e_1mhr5o_k$() === 0.0 && function_0.get_f_1mhr5p_k$() === 0.0) {
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
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function Rgb$Companion$DoubleIdentity$lambda(d) {
    return d;
  }
  function Rgb$Companion$generateOetf$lambda($function) {
    return function (x) {
      return ColorSpaces_getInstance().transferHlgOetf_kmhpnq_k$($function, x);
    };
  }
  function Rgb$Companion$generateOetf$lambda_0($function) {
    return function (x) {
      return ColorSpaces_getInstance().transferSt2048Oetf_ldvx3w_k$($function, x);
    };
  }
  function Rgb$Companion$generateOetf$lambda_1($function) {
    return function (x) {
      return rcpResponse(x, $function.get_a_1mhr5k_k$(), $function.get_b_1mhr5l_k$(), $function.get_c_1mhr5m_k$(), $function.get_d_1mhr5n_k$(), $function.get_gamma_irsi2m_k$());
    };
  }
  function Rgb$Companion$generateOetf$lambda_2($function) {
    return function (x) {
      return rcpResponse_0(x, $function.get_a_1mhr5k_k$(), $function.get_b_1mhr5l_k$(), $function.get_c_1mhr5m_k$(), $function.get_d_1mhr5n_k$(), $function.get_e_1mhr5o_k$(), $function.get_f_1mhr5p_k$(), $function.get_gamma_irsi2m_k$());
    };
  }
  function Rgb$Companion$generateEotf$lambda($function) {
    return function (x) {
      return ColorSpaces_getInstance().transferHlgEotf_vqiy62_k$($function, x);
    };
  }
  function Rgb$Companion$generateEotf$lambda_0($function) {
    return function (x) {
      return ColorSpaces_getInstance().transferSt2048Eotf_whx5m8_k$($function, x);
    };
  }
  function Rgb$Companion$generateEotf$lambda_1($function) {
    return function (x) {
      return response(x, $function.get_a_1mhr5k_k$(), $function.get_b_1mhr5l_k$(), $function.get_c_1mhr5m_k$(), $function.get_d_1mhr5n_k$(), $function.get_gamma_irsi2m_k$());
    };
  }
  function Rgb$Companion$generateEotf$lambda_2($function) {
    return function (x) {
      return response_0(x, $function.get_a_1mhr5k_k$(), $function.get_b_1mhr5l_k$(), $function.get_c_1mhr5m_k$(), $function.get_d_1mhr5n_k$(), $function.get_e_1mhr5o_k$(), $function.get_f_1mhr5p_k$(), $function.get_gamma_irsi2m_k$());
    };
  }
  function _get_min__e6ctxb($this) {
    return $this.min_1;
  }
  function _get_max__e6co8d($this) {
    return $this.max_1;
  }
  function Rgb_init_$Init$(name, toXYZ, oetf, eotf, $this) {
    var tmp = Companion_getInstance_46().computePrimaries_fde0z6_k$(toXYZ);
    var tmp_0 = computeWhitePoint(Companion_getInstance_46(), toXYZ);
    var tmp_1 = Rgb$_init_$lambda_yyl4se(oetf);
    var tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7(tmp_1);
    var tmp_3 = Rgb$_init_$lambda_yyl4se_0(eotf);
    Rgb.call($this, name, tmp, tmp_0, null, tmp_2, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7(tmp_3), 0.0, 1.0, null, -1);
    return $this;
  }
  function Rgb_init_$Create$(name, toXYZ, oetf, eotf) {
    return Rgb_init_$Init$(name, toXYZ, oetf, eotf, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_0(name, primaries, whitePoint, oetf, eotf, min, max, $this) {
    var tmp = Rgb$_init_$lambda_yyl4se_1(oetf);
    var tmp_0 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_8(tmp);
    var tmp_1 = Rgb$_init_$lambda_yyl4se_2(eotf);
    Rgb.call($this, name, primaries, whitePoint, null, tmp_0, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_8(tmp_1), min, max, null, -1);
    return $this;
  }
  function Rgb_init_$Create$_0(name, primaries, whitePoint, oetf, eotf, min, max) {
    return Rgb_init_$Init$_0(name, primaries, whitePoint, oetf, eotf, min, max, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_1(name, toXYZ, function_0, $this) {
    Rgb_init_$Init$_3(name, Companion_getInstance_46().computePrimaries_fde0z6_k$(toXYZ), computeWhitePoint(Companion_getInstance_46(), toXYZ), function_0, -1, $this);
    return $this;
  }
  function Rgb_init_$Create$_1(name, toXYZ, function_0) {
    return Rgb_init_$Init$_1(name, toXYZ, function_0, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_2(name, primaries, whitePoint, function_0, $this) {
    Rgb_init_$Init$_3(name, primaries, whitePoint, function_0, -1, $this);
    return $this;
  }
  function Rgb_init_$Create$_2(name, primaries, whitePoint, function_0) {
    return Rgb_init_$Init$_2(name, primaries, whitePoint, function_0, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_3(name, primaries, whitePoint, function_0, id, $this) {
    Rgb.call($this, name, primaries, whitePoint, null, generateOetf(Companion_getInstance_46(), function_0), generateEotf(Companion_getInstance_46(), function_0), 0.0, 1.0, function_0, id);
    return $this;
  }
  function Rgb_init_$Create$_3(name, primaries, whitePoint, function_0, id) {
    return Rgb_init_$Init$_3(name, primaries, whitePoint, function_0, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_4(name, toXYZ, gamma, $this) {
    Rgb_init_$Init$_6(name, Companion_getInstance_46().computePrimaries_fde0z6_k$(toXYZ), computeWhitePoint(Companion_getInstance_46(), toXYZ), gamma, 0.0, 1.0, -1, $this);
    return $this;
  }
  function Rgb_init_$Create$_4(name, toXYZ, gamma) {
    return Rgb_init_$Init$_4(name, toXYZ, gamma, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_5(name, primaries, whitePoint, gamma, $this) {
    Rgb_init_$Init$_6(name, primaries, whitePoint, gamma, 0.0, 1.0, -1, $this);
    return $this;
  }
  function Rgb_init_$Create$_5(name, primaries, whitePoint, gamma) {
    return Rgb_init_$Init$_5(name, primaries, whitePoint, gamma, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_6(name, primaries, whitePoint, gamma, min, max, id, $this) {
    var tmp;
    if (gamma === 1.0) {
      tmp = Companion_getInstance_46().DoubleIdentity_1;
    } else {
      var tmp_0 = Rgb$_init_$lambda_yyl4se_3(gamma);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_9(tmp_0);
    }
    var tmp_1 = tmp;
    var tmp_2;
    if (gamma === 1.0) {
      tmp_2 = Companion_getInstance_46().DoubleIdentity_1;
    } else {
      var tmp_3 = Rgb$_init_$lambda_yyl4se_4(gamma);
      tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_9(tmp_3);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_1, tmp_2, min, max, new TransferParameters(gamma, 1.0, 0.0, 0.0, 0.0), id);
    return $this;
  }
  function Rgb_init_$Create$_6(name, primaries, whitePoint, gamma, min, max, id) {
    return Rgb_init_$Init$_6(name, primaries, whitePoint, gamma, min, max, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_7(colorSpace, transform, whitePoint, $this) {
    Rgb.call($this, colorSpace.get_name_woqyms_k$(), colorSpace.primaries_1, whitePoint, transform, colorSpace.oetfOrig_1, colorSpace.eotfOrig_1, colorSpace.min_1, colorSpace.max_1, colorSpace.transferParameters_1, -1);
    return $this;
  }
  function Rgb_init_$Create$_7(colorSpace, transform, whitePoint) {
    return Rgb_init_$Init$_7(colorSpace, transform, whitePoint, objectCreate(protoOf(Rgb)));
  }
  function Companion_27() {
    Companion_instance_27 = this;
    var tmp = this;
    var tmp_0 = Rgb$Companion$DoubleIdentity$lambda;
    tmp.DoubleIdentity_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(tmp_0);
  }
  protoOf(Companion_27).computePrimaries_fde0z6_k$ = function (toXYZ) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([1.0, 0.0, 0.0]);
    var r = mul3x3Float3(toXYZ, tmp$ret$0);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$1 = new Float32Array([0.0, 1.0, 0.0]);
    var g = mul3x3Float3(toXYZ, tmp$ret$1);
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$2 = new Float32Array([0.0, 0.0, 1.0]);
    var b = mul3x3Float3(toXYZ, tmp$ret$2);
    var rSum = r[0] + r[1] + r[2];
    var gSum = g[0] + g[1] + g[2];
    var bSum = b[0] + b[1] + b[2];
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([r[0] / rSum, r[1] / rSum, g[0] / gSum, g[1] / gSum, b[0] / bSum, b[1] / bSum]);
  };
  var Companion_instance_27;
  function Companion_getInstance_46() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_8(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_8).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_8).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_8).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_8).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_9(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_9).invoke_e0thbm_k$ = function (double) {
    return this.function_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_9).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_9).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_9).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function Rgb$oetf$lambda(this$0) {
    return function (x) {
      return coerceIn(this$0.oetfOrig_1.invoke_e0thbm_k$(x), this$0.min_1, this$0.max_1);
    };
  }
  function Rgb$oetfFunc$lambda(this$0) {
    return function (x) {
      return coerceIn(this$0.oetfOrig_1.invoke_e0thbm_k$(x), this$0.min_1, this$0.max_1);
    };
  }
  function Rgb$eotf$lambda(this$0) {
    return function (x) {
      return this$0.eotfOrig_1.invoke_e0thbm_k$(coerceIn(x, this$0.min_1, this$0.max_1));
    };
  }
  function Rgb$eotfFunc$lambda(this$0) {
    return function (x) {
      return this$0.eotfOrig_1.invoke_e0thbm_k$(coerceIn(x, this$0.min_1, this$0.max_1));
    };
  }
  function Rgb$_init_$lambda_yyl4se($oetf) {
    return function (x) {
      return $oetf(x);
    };
  }
  function Rgb$_init_$lambda_yyl4se_0($eotf) {
    return function (x) {
      return $eotf(x);
    };
  }
  function Rgb$_init_$lambda_yyl4se_1($oetf) {
    return function (x) {
      return $oetf(x);
    };
  }
  function Rgb$_init_$lambda_yyl4se_2($eotf) {
    return function (x) {
      return $eotf(x);
    };
  }
  function Rgb$_init_$lambda_yyl4se_3($gamma) {
    return function (x) {
      var tmp0 = x < 0.0 ? 0.0 : x;
      // Inline function 'kotlin.math.pow' call
      var x_0 = 1.0 / $gamma;
      return Math.pow(tmp0, x_0);
    };
  }
  function Rgb$_init_$lambda_yyl4se_4($gamma) {
    return function (x) {
      var tmp0 = x < 0.0 ? 0.0 : x;
      // Inline function 'kotlin.math.pow' call
      var x_0 = $gamma;
      return Math.pow(tmp0, x_0);
    };
  }
  function Rgb(name, primaries, whitePoint, transform, oetf, eotf, min, max, transferParameters, id) {
    Companion_getInstance_46();
    ColorSpace.call(this, name, Companion_getInstance_40().get_Rgb_ehihd0_k$(), id);
    this.whitePoint_1 = whitePoint;
    this.min_1 = min;
    this.max_1 = max;
    this.transferParameters_1 = transferParameters;
    this.oetfOrig_1 = oetf;
    var tmp = this;
    tmp.oetf_1 = Rgb$oetf$lambda(this);
    var tmp_0 = this;
    var tmp_1 = Rgb$oetfFunc$lambda(this);
    tmp_0.oetfFunc_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5(tmp_1);
    this.eotfOrig_1 = eotf;
    var tmp_2 = this;
    tmp_2.eotf_1 = Rgb$eotf$lambda(this);
    var tmp_3 = this;
    var tmp_4 = Rgb$eotfFunc$lambda(this);
    tmp_3.eotfFunc_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6(tmp_4);
    if (!(primaries.length === 6) && !(primaries.length === 9)) {
      throw IllegalArgumentException_init_$Create$("The color space's primaries must be defined as an array of 6 floats in xyY or 9 floats in XYZ");
    }
    if (this.min_1 >= this.max_1) {
      throw IllegalArgumentException_init_$Create$('Invalid range: min=' + this.min_1 + ', max=' + this.max_1 + '; min must be strictly < max');
    }
    this.primaries_1 = xyPrimaries(Companion_getInstance_46(), primaries);
    if (transform == null) {
      this.transform_1 = computeXYZMatrix(Companion_getInstance_46(), this.primaries_1, this.whitePoint_1);
    } else {
      if (!(transform.length === 9)) {
        throw IllegalArgumentException_init_$Create$('Transform must have 9 entries! Has ' + transform.length);
      }
      this.transform_1 = transform;
    }
    this.inverseTransform_1 = inverse3x3(this.transform_1);
    this.isWideGamut_1 = isWideGamut(Companion_getInstance_46(), this.primaries_1, this.min_1, this.max_1);
    this.isSrgb_1 = isSrgb(Companion_getInstance_46(), this.primaries_1, this.whitePoint_1, oetf, eotf, this.min_1, this.max_1, id);
  }
  protoOf(Rgb).get_whitePoint_g4n5ow_k$ = function () {
    return this.whitePoint_1;
  };
  protoOf(Rgb).get_transferParameters_ak703m_k$ = function () {
    return this.transferParameters_1;
  };
  protoOf(Rgb).get_primaries_nyq244_k$ = function () {
    return this.primaries_1;
  };
  protoOf(Rgb).get_transform_orl0n4_k$ = function () {
    return this.transform_1;
  };
  protoOf(Rgb).get_inverseTransform_5adnaa_k$ = function () {
    return this.inverseTransform_1;
  };
  protoOf(Rgb).get_oetfOrig_o9odtb_k$ = function () {
    return this.oetfOrig_1;
  };
  protoOf(Rgb).get_oetf_woror5_k$ = function () {
    return this.oetf_1;
  };
  protoOf(Rgb).get_oetfFunc_a2624u_k$ = function () {
    return this.oetfFunc_1;
  };
  protoOf(Rgb).get_eotfOrig_89io8t_k$ = function () {
    return this.eotfOrig_1;
  };
  protoOf(Rgb).get_eotf_woliat_k$ = function () {
    return this.eotf_1;
  };
  protoOf(Rgb).get_eotfFunc_sfqxs6_k$ = function () {
    return this.eotfFunc_1;
  };
  protoOf(Rgb).get_isWideGamut_oxj4to_k$ = function () {
    return this.isWideGamut_1;
  };
  protoOf(Rgb).get_isSrgb_ew666l_k$ = function () {
    return this.isSrgb_1;
  };
  protoOf(Rgb).getPrimaries_umjt7a_k$ = function () {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.primaries_1.slice();
  };
  protoOf(Rgb).getTransform_h90fqu_k$ = function () {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.transform_1.slice();
  };
  protoOf(Rgb).getInverseTransform_s9peaa_k$ = function () {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.inverseTransform_1.slice();
  };
  protoOf(Rgb).getPrimaries_cgd4eq_k$ = function (primaries) {
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.primaries_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, primaries, 0, 0, endIndex);
    return primaries;
  };
  protoOf(Rgb).getTransform_ho9wm6_k$ = function (transform) {
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.transform_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, transform, 0, 0, endIndex);
    return transform;
  };
  protoOf(Rgb).getInverseTransform_9xw33u_k$ = function (inverseTransform) {
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.inverseTransform_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, inverseTransform, 0, 0, endIndex);
    return inverseTransform;
  };
  protoOf(Rgb).getMinValue_3znj7n_k$ = function (component) {
    return this.min_1;
  };
  protoOf(Rgb).getMaxValue_kswgkr_k$ = function (component) {
    return this.max_1;
  };
  protoOf(Rgb).toLinear_rejvnc_k$ = function (r, g, b) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([r, g, b]);
    return this.toLinear_yopst4_k$(tmp$ret$0);
  };
  protoOf(Rgb).toLinear_yopst4_k$ = function (v) {
    if (v.length < 3)
      return v;
    v[0] = this.eotfFunc_1.invoke_e0thbm_k$(v[0]);
    v[1] = this.eotfFunc_1.invoke_e0thbm_k$(v[1]);
    v[2] = this.eotfFunc_1.invoke_e0thbm_k$(v[2]);
    return v;
  };
  protoOf(Rgb).fromLinear_2dvbiv_k$ = function (r, g, b) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([r, g, b]);
    return this.fromLinear_qsrtdj_k$(tmp$ret$0);
  };
  protoOf(Rgb).fromLinear_qsrtdj_k$ = function (v) {
    if (v.length < 3)
      return v;
    v[0] = this.oetfFunc_1.invoke_e0thbm_k$(v[0]);
    v[1] = this.oetfFunc_1.invoke_e0thbm_k$(v[1]);
    v[2] = this.oetfFunc_1.invoke_e0thbm_k$(v[2]);
    return v;
  };
  protoOf(Rgb).toXyz_c5nzk6_k$ = function (v) {
    if (v.length < 3)
      return v;
    v[0] = this.eotfFunc_1.invoke_e0thbm_k$(v[0]);
    v[1] = this.eotfFunc_1.invoke_e0thbm_k$(v[1]);
    v[2] = this.eotfFunc_1.invoke_e0thbm_k$(v[2]);
    return mul3x3Float3(this.transform_1, v);
  };
  protoOf(Rgb).toXy_a77nwh_k$ = function (v0, v1, v2) {
    var v00 = this.eotfFunc_1.invoke_e0thbm_k$(v0);
    var v10 = this.eotfFunc_1.invoke_e0thbm_k$(v1);
    var v20 = this.eotfFunc_1.invoke_e0thbm_k$(v2);
    if (this.transform_1.length < 9)
      return new Long(0, 0);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = this.transform_1;
    var x = lhs[0] * v00 + lhs[3] * v10 + lhs[6] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = this.transform_1;
    var y = lhs_0[1] * v00 + lhs_0[4] * v10 + lhs_0[7] * v20;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = fromInt(toRawBits(x));
    var v2_0 = fromInt(toRawBits(y));
    return bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
  };
  protoOf(Rgb).toZ_taoe84_k$ = function (v0, v1, v2) {
    var v00 = this.eotfFunc_1.invoke_e0thbm_k$(v0);
    var v10 = this.eotfFunc_1.invoke_e0thbm_k$(v1);
    var v20 = this.eotfFunc_1.invoke_e0thbm_k$(v2);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs = this.transform_1;
    var z = lhs[2] * v00 + lhs[5] * v10 + lhs[8] * v20;
    return z;
  };
  protoOf(Rgb).xyzaToColor_dpq8aj_k$ = function (x, y, z, a, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = this.inverseTransform_1;
    var v0 = lhs[0] * x + lhs[3] * y + lhs[6] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = this.inverseTransform_1;
    var v1 = lhs_0[1] * x + lhs_0[4] * y + lhs_0[7] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = this.inverseTransform_1;
    var v2 = lhs_1[2] * x + lhs_1[5] * y + lhs_1[8] * z;
    v0 = this.oetfFunc_1.invoke_e0thbm_k$(v0);
    v1 = this.oetfFunc_1.invoke_e0thbm_k$(v1);
    v2 = this.oetfFunc_1.invoke_e0thbm_k$(v2);
    return Color_2(v0, v1, v2, a, colorSpace);
  };
  protoOf(Rgb).fromXyz_ghg1av_k$ = function (v) {
    mul3x3Float3(this.inverseTransform_1, v);
    if (v.length < 3)
      return v;
    v[0] = this.oetfFunc_1.invoke_e0thbm_k$(v[0]);
    v[1] = this.oetfFunc_1.invoke_e0thbm_k$(v[1]);
    v[2] = this.oetfFunc_1.invoke_e0thbm_k$(v[2]);
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
    if (!(compareTo(rgb.min_1, this.min_1) === 0))
      return false;
    if (!(compareTo(rgb.max_1, this.max_1) === 0))
      return false;
    if (!this.whitePoint_1.equals(rgb.whitePoint_1))
      return false;
    if (!contentEquals(this.primaries_1, rgb.primaries_1))
      return false;
    if (!(this.transferParameters_1 == null)) {
      return equals(this.transferParameters_1, rgb.transferParameters_1);
    } else if (rgb.transferParameters_1 == null) {
      return true;
    }
    return !equals(this.oetfOrig_1, rgb.oetfOrig_1) ? false : equals(this.eotfOrig_1, rgb.eotfOrig_1);
  };
  protoOf(Rgb).hashCode = function () {
    var result = protoOf(ColorSpace).hashCode.call(this);
    result = imul(31, result) + this.whitePoint_1.hashCode() | 0;
    result = imul(31, result) + contentHashCode(this.primaries_1) | 0;
    result = imul(31, result) + (!(this.min_1 === 0.0) ? toBits(this.min_1) : 0) | 0;
    result = imul(31, result) + (!(this.max_1 === 0.0) ? toBits(this.max_1) : 0) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.transferParameters_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    if (this.transferParameters_1 == null) {
      result = imul(31, result) + hashCode(this.oetfOrig_1) | 0;
      result = imul(31, result) + hashCode(this.eotfOrig_1) | 0;
    }
    return result;
  };
  function DoubleFunction() {
  }
  function TransferParameters(gamma, a, b, c, d, e, f) {
    e = e === VOID ? 0.0 : e;
    f = f === VOID ? 0.0 : f;
    this.gamma_1 = gamma;
    this.a_1 = a;
    this.b_1 = b;
    this.c_1 = c;
    this.d_1 = d;
    this.e_1 = e;
    this.f_1 = f;
    if (isNaN_1(this.a_1) || isNaN_1(this.b_1) || isNaN_1(this.c_1) || isNaN_1(this.d_1) || isNaN_1(this.e_1) || isNaN_1(this.f_1) || isNaN_1(this.gamma_1)) {
      throw IllegalArgumentException_init_$Create$('Parameters cannot be NaN');
    }
    if (!isSpecialG(this.gamma_1)) {
      if (!(this.d_1 >= 0.0 && this.d_1 <= 1.0)) {
        throw IllegalArgumentException_init_$Create$('Parameter d must be in the range [0..1], was ' + ('' + this.d_1));
      }
      if (this.d_1 === 0.0 && (this.a_1 === 0.0 || this.gamma_1 === 0.0)) {
        throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, the transfer function is constant');
      }
      if (this.d_1 >= 1.0 && this.c_1 === 0.0) {
        throw IllegalArgumentException_init_$Create$('Parameter c is zero, the transfer function is constant');
      }
      if ((this.a_1 === 0.0 || this.gamma_1 === 0.0) && this.c_1 === 0.0) {
        throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, and c is zero, the transfer function is constant');
      }
      if (this.c_1 < 0.0) {
        throw IllegalArgumentException_init_$Create$('The transfer function must be increasing');
      }
      if (this.a_1 < 0.0 || this.gamma_1 < 0.0) {
        throw IllegalArgumentException_init_$Create$('The transfer function must be positive or increasing');
      }
    }
  }
  protoOf(TransferParameters).get_gamma_irsi2m_k$ = function () {
    return this.gamma_1;
  };
  protoOf(TransferParameters).get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  protoOf(TransferParameters).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(TransferParameters).get_c_1mhr5m_k$ = function () {
    return this.c_1;
  };
  protoOf(TransferParameters).get_d_1mhr5n_k$ = function () {
    return this.d_1;
  };
  protoOf(TransferParameters).get_e_1mhr5o_k$ = function () {
    return this.e_1;
  };
  protoOf(TransferParameters).get_f_1mhr5p_k$ = function () {
    return this.f_1;
  };
  protoOf(TransferParameters).get_isHLGish_4onnt7_k$ = function () {
    return this.gamma_1 === -3.0;
  };
  protoOf(TransferParameters).get_isPQish_85j2m1_k$ = function () {
    return this.gamma_1 === -2.0;
  };
  protoOf(TransferParameters).component1_7eebsc_k$ = function () {
    return this.gamma_1;
  };
  protoOf(TransferParameters).component2_7eebsb_k$ = function () {
    return this.a_1;
  };
  protoOf(TransferParameters).component3_7eebsa_k$ = function () {
    return this.b_1;
  };
  protoOf(TransferParameters).component4_7eebs9_k$ = function () {
    return this.c_1;
  };
  protoOf(TransferParameters).component5_7eebs8_k$ = function () {
    return this.d_1;
  };
  protoOf(TransferParameters).component6_7eebs7_k$ = function () {
    return this.e_1;
  };
  protoOf(TransferParameters).component7_7eebs6_k$ = function () {
    return this.f_1;
  };
  protoOf(TransferParameters).copy_rkiwfl_k$ = function (gamma, a, b, c, d, e, f) {
    return new TransferParameters(gamma, a, b, c, d, e, f);
  };
  protoOf(TransferParameters).copy$default_nnwetz_k$ = function (gamma, a, b, c, d, e, f, $super) {
    gamma = gamma === VOID ? this.gamma_1 : gamma;
    a = a === VOID ? this.a_1 : a;
    b = b === VOID ? this.b_1 : b;
    c = c === VOID ? this.c_1 : c;
    d = d === VOID ? this.d_1 : d;
    e = e === VOID ? this.e_1 : e;
    f = f === VOID ? this.f_1 : f;
    return $super === VOID ? this.copy_rkiwfl_k$(gamma, a, b, c, d, e, f) : $super.copy_rkiwfl_k$.call(this, gamma, a, b, c, d, e, f);
  };
  protoOf(TransferParameters).toString = function () {
    return 'TransferParameters(gamma=' + this.gamma_1 + ', a=' + this.a_1 + ', b=' + this.b_1 + ', c=' + this.c_1 + ', d=' + this.d_1 + ', e=' + this.e_1 + ', f=' + this.f_1 + ')';
  };
  protoOf(TransferParameters).hashCode = function () {
    var result = getNumberHashCode(this.gamma_1);
    result = imul(result, 31) + getNumberHashCode(this.a_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.c_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f_1) | 0;
    return result;
  };
  protoOf(TransferParameters).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransferParameters))
      return false;
    var tmp0_other_with_cast = other instanceof TransferParameters ? other : THROW_CCE();
    if (!equals(this.gamma_1, tmp0_other_with_cast.gamma_1))
      return false;
    if (!equals(this.a_1, tmp0_other_with_cast.a_1))
      return false;
    if (!equals(this.b_1, tmp0_other_with_cast.b_1))
      return false;
    if (!equals(this.c_1, tmp0_other_with_cast.c_1))
      return false;
    if (!equals(this.d_1, tmp0_other_with_cast.d_1))
      return false;
    if (!equals(this.e_1, tmp0_other_with_cast.e_1))
      return false;
    if (!equals(this.f_1, tmp0_other_with_cast.f_1))
      return false;
    return true;
  };
  function isSpecialG(gamma) {
    return gamma === -2.0 || gamma === -3.0;
  }
  function WhitePoint_init_$Init$(x, y, z, $this) {
    WhitePoint_init_$Init$_0(x, y, z, x + y + z, $this);
    return $this;
  }
  function WhitePoint_init_$Create$(x, y, z) {
    return WhitePoint_init_$Init$(x, y, z, objectCreate(protoOf(WhitePoint)));
  }
  function WhitePoint_init_$Init$_0(x, y, z, sum, $this) {
    WhitePoint.call($this, x / sum, y / sum);
    return $this;
  }
  function WhitePoint_init_$Create$_0(x, y, z, sum) {
    return WhitePoint_init_$Init$_0(x, y, z, sum, objectCreate(protoOf(WhitePoint)));
  }
  function WhitePoint(x, y) {
    this.x_1 = x;
    this.y_1 = y;
  }
  protoOf(WhitePoint).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(WhitePoint).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(WhitePoint).toXyz_sxfox1_k$ = function () {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([this.x_1 / this.y_1, 1.0, (1.0 - this.x_1 - this.y_1) / this.y_1]);
  };
  protoOf(WhitePoint).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(WhitePoint).component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  protoOf(WhitePoint).copy_4tzoad_k$ = function (x, y) {
    return new WhitePoint(x, y);
  };
  protoOf(WhitePoint).copy$default_9j5tee_k$ = function (x, y, $super) {
    x = x === VOID ? this.x_1 : x;
    y = y === VOID ? this.y_1 : y;
    return $super === VOID ? this.copy_4tzoad_k$(x, y) : $super.copy_4tzoad_k$.call(this, x, y);
  };
  protoOf(WhitePoint).toString = function () {
    return 'WhitePoint(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  protoOf(WhitePoint).hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  protoOf(WhitePoint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhitePoint))
      return false;
    var tmp0_other_with_cast = other instanceof WhitePoint ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  function clamp($this, x) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = x < minimumValue ? minimumValue : x;
    return this_0 > 2.0 ? 2.0 : this_0;
  }
  function Xyz(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_40().get_Xyz_inxdso_k$(), id);
  }
  protoOf(Xyz).get_isWideGamut_oxj4to_k$ = function () {
    return true;
  };
  protoOf(Xyz).getMinValue_3znj7n_k$ = function (component) {
    return -2.0;
  };
  protoOf(Xyz).getMaxValue_kswgkr_k$ = function (component) {
    return 2.0;
  };
  protoOf(Xyz).toXyz_c5nzk6_k$ = function (v) {
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
  protoOf(Xyz).toXy_a77nwh_k$ = function (v0, v1, v2) {
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
  protoOf(Xyz).toZ_taoe84_k$ = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v2 < minimumValue ? minimumValue : v2;
    return this_0 > 2.0 ? 2.0 : this_0;
  };
  protoOf(Xyz).xyzaToColor_dpq8aj_k$ = function (x, y, z, a, colorSpace) {
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
  protoOf(Xyz).fromXyz_ghg1av_k$ = function (v) {
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
  function _set_fillPaint__8v4n0q($this, _set____db54di) {
    $this.fillPaint_1 = _set____db54di;
  }
  function _get_fillPaint__wv4yju($this) {
    return $this.fillPaint_1;
  }
  function _set_strokePaint__ed14xt($this, _set____db54di) {
    $this.strokePaint_1 = _set____db54di;
  }
  function _get_strokePaint__fxd1e3($this) {
    return $this.strokePaint_1;
  }
  function obtainFillPaint($this) {
    var tmp0_elvis_lhs = $this.fillPaint_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = Paint_0();
      this_0.set_style_t4zhmv_k$(Companion_getInstance_27().get_Fill_7xey15_k$());
      // Inline function 'kotlin.also' call
      $this.fillPaint_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function obtainStrokePaint($this) {
    var tmp0_elvis_lhs = $this.strokePaint_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = Paint_0();
      this_0.set_style_t4zhmv_k$(Companion_getInstance_27().get_Stroke_fu1ixu_k$());
      // Inline function 'kotlin.also' call
      $this.strokePaint_1 = this_0;
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
        if (!(this_0.get_strokeWidth_pbded7_k$() === drawStyle.get_width_j0q4yl_k$())) {
          this_0.set_strokeWidth_owqvpl_k$(drawStyle.get_width_j0q4yl_k$());
        }
        if (!(this_0.get_strokeCap_6gl6jj_k$() === drawStyle.get_cap_3aolkp_k$())) {
          this_0.set_strokeCap_x8rhz1_k$(drawStyle.get_cap_3aolkp_k$());
        }
        if (!(this_0.get_strokeMiterLimit_p3434n_k$() === drawStyle.get_miter_iv8ijg_k$())) {
          this_0.set_strokeMiterLimit_tej6nx_k$(drawStyle.get_miter_iv8ijg_k$());
        }
        if (!(this_0.get_strokeJoin_j1kbxz_k$() === drawStyle.get_join_i4bzz3_k$())) {
          this_0.set_strokeJoin_yrffuj_k$(drawStyle.get_join_i4bzz3_k$());
        }
        if (!equals(this_0.get_pathEffect_d6tz6p_k$(), drawStyle.get_pathEffect_d6tz6p_k$())) {
          this_0.set_pathEffect_h6g9g6_k$(drawStyle.get_pathEffect_d6tz6p_k$());
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
      brush.applyTo_5ix92b_k$($this.get_size_cxx1ym_k$(), this_0, alpha);
    } else {
      if (!(this_0.get_shader_jgtazy_k$() == null)) {
        this_0.set_shader_tgaw5e_k$(null);
      }
      if (!equals(this_0.get_color_lnp1vl_k$(), Companion_getInstance_21().get_Black_t4k9fh_k$())) {
        this_0.set_color_m2amxp_k$(Companion_getInstance_21().get_Black_t4k9fh_k$());
      }
      if (!(this_0.get_alpha_iooth1_k$() === alpha)) {
        this_0.set_alpha_tvzcqh_k$(alpha);
      }
    }
    if (!equals(this_0.get_colorFilter_nt8pqq_k$(), colorFilter)) {
      this_0.set_colorFilter_dtpxr0_k$(colorFilter);
    }
    if (!(this_0.get_blendMode_si209t_k$() === blendMode)) {
      this_0.set_blendMode_1e5m6b_k$(blendMode);
    }
    if (!(this_0.get_filterQuality_wmgb0f_k$() === filterQuality)) {
      this_0.set_filterQuality_eye4f7_k$(filterQuality);
    }
    return this_0;
  }
  function configurePaint$default($this, brush, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_47().get_DefaultFilterQuality_7zsczy_k$() : filterQuality;
    return configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = selectPaint($this, style);
    var targetColor = modulate($this, color, alpha);
    if (!equals(this_0.get_color_lnp1vl_k$(), targetColor)) {
      this_0.set_color_m2amxp_k$(targetColor);
    }
    if (!(this_0.get_shader_jgtazy_k$() == null)) {
      this_0.set_shader_tgaw5e_k$(null);
    }
    if (!equals(this_0.get_colorFilter_nt8pqq_k$(), colorFilter)) {
      this_0.set_colorFilter_dtpxr0_k$(colorFilter);
    }
    if (!(this_0.get_blendMode_si209t_k$() === blendMode)) {
      this_0.set_blendMode_1e5m6b_k$(blendMode);
    }
    if (!(this_0.get_filterQuality_wmgb0f_k$() === filterQuality)) {
      this_0.set_filterQuality_eye4f7_k$(filterQuality);
    }
    return this_0;
  }
  function configurePaint$default_0($this, color, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_47().get_DefaultFilterQuality_7zsczy_k$() : filterQuality;
    return configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configureStrokePaint($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = obtainStrokePaint($this);
    var targetColor = modulate($this, color, alpha);
    if (!equals(this_0.get_color_lnp1vl_k$(), targetColor)) {
      this_0.set_color_m2amxp_k$(targetColor);
    }
    if (!(this_0.get_shader_jgtazy_k$() == null)) {
      this_0.set_shader_tgaw5e_k$(null);
    }
    if (!equals(this_0.get_colorFilter_nt8pqq_k$(), colorFilter)) {
      this_0.set_colorFilter_dtpxr0_k$(colorFilter);
    }
    if (!(this_0.get_blendMode_si209t_k$() === blendMode)) {
      this_0.set_blendMode_1e5m6b_k$(blendMode);
    }
    if (!(this_0.get_strokeWidth_pbded7_k$() === strokeWidth)) {
      this_0.set_strokeWidth_owqvpl_k$(strokeWidth);
    }
    if (!(this_0.get_strokeMiterLimit_p3434n_k$() === miter)) {
      this_0.set_strokeMiterLimit_tej6nx_k$(miter);
    }
    if (!(this_0.get_strokeCap_6gl6jj_k$() === cap)) {
      this_0.set_strokeCap_x8rhz1_k$(cap);
    }
    if (!(this_0.get_strokeJoin_j1kbxz_k$() === join)) {
      this_0.set_strokeJoin_yrffuj_k$(join);
    }
    if (!equals(this_0.get_pathEffect_d6tz6p_k$(), pathEffect)) {
      this_0.set_pathEffect_h6g9g6_k$(pathEffect);
    }
    if (!(this_0.get_filterQuality_wmgb0f_k$() === filterQuality)) {
      this_0.set_filterQuality_eye4f7_k$(filterQuality);
    }
    return this_0;
  }
  function configureStrokePaint$default($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_47().get_DefaultFilterQuality_7zsczy_k$() : filterQuality;
    return configureStrokePaint($this, color, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality);
  }
  function configureStrokePaint_0($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = obtainStrokePaint($this);
    if (!(brush == null)) {
      brush.applyTo_5ix92b_k$($this.get_size_cxx1ym_k$(), this_0, alpha);
    } else if (!(this_0.get_alpha_iooth1_k$() === alpha)) {
      this_0.set_alpha_tvzcqh_k$(alpha);
    }
    if (!equals(this_0.get_colorFilter_nt8pqq_k$(), colorFilter)) {
      this_0.set_colorFilter_dtpxr0_k$(colorFilter);
    }
    if (!(this_0.get_blendMode_si209t_k$() === blendMode)) {
      this_0.set_blendMode_1e5m6b_k$(blendMode);
    }
    if (!(this_0.get_strokeWidth_pbded7_k$() === strokeWidth)) {
      this_0.set_strokeWidth_owqvpl_k$(strokeWidth);
    }
    if (!(this_0.get_strokeMiterLimit_p3434n_k$() === miter)) {
      this_0.set_strokeMiterLimit_tej6nx_k$(miter);
    }
    if (!(this_0.get_strokeCap_6gl6jj_k$() === cap)) {
      this_0.set_strokeCap_x8rhz1_k$(cap);
    }
    if (!(this_0.get_strokeJoin_j1kbxz_k$() === join)) {
      this_0.set_strokeJoin_yrffuj_k$(join);
    }
    if (!equals(this_0.get_pathEffect_d6tz6p_k$(), pathEffect)) {
      this_0.set_pathEffect_h6g9g6_k$(pathEffect);
    }
    if (!(this_0.get_filterQuality_wmgb0f_k$() === filterQuality)) {
      this_0.set_filterQuality_eye4f7_k$(filterQuality);
    }
    return this_0;
  }
  function configureStrokePaint$default_0($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_47().get_DefaultFilterQuality_7zsczy_k$() : filterQuality;
    return configureStrokePaint_0($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality);
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
    canvas = canvas === VOID ? EmptyCanvas_getInstance() : canvas;
    size = size === VOID ? Companion_getInstance_0().get_Zero_rugywl_k$() : size;
    this.density_1 = density;
    this.layoutDirection_1 = layoutDirection;
    this.canvas_1 = canvas;
    this.size_1 = size;
  }
  protoOf(DrawParams).set_density_3p0aj9_k$ = function (_set____db54di) {
    this.density_1 = _set____db54di;
  };
  protoOf(DrawParams).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(DrawParams).set_layoutDirection_vthtz8_k$ = function (_set____db54di) {
    this.layoutDirection_1 = _set____db54di;
  };
  protoOf(DrawParams).get_layoutDirection_7e37v0_k$ = function () {
    return this.layoutDirection_1;
  };
  protoOf(DrawParams).set_canvas_1yi0mf_k$ = function (_set____db54di) {
    this.canvas_1 = _set____db54di;
  };
  protoOf(DrawParams).get_canvas_bshgm9_k$ = function () {
    return this.canvas_1;
  };
  protoOf(DrawParams).set_size_6a0e6q_k$ = function (_set____db54di) {
    this.size_1 = _set____db54di;
  };
  protoOf(DrawParams).get_size_cxx1ym_k$ = function () {
    return this.size_1;
  };
  protoOf(DrawParams).component1_7eebsc_k$ = function () {
    return this.density_1;
  };
  protoOf(DrawParams).component2_7eebsb_k$ = function () {
    return this.layoutDirection_1;
  };
  protoOf(DrawParams).component3_7eebsa_k$ = function () {
    return this.canvas_1;
  };
  protoOf(DrawParams).component4_67q0p1_k$ = function () {
    return this.size_1;
  };
  protoOf(DrawParams).copy_newspx_k$ = function (density, layoutDirection, canvas, size) {
    return new DrawParams(density, layoutDirection, canvas, size);
  };
  protoOf(DrawParams).copy$default_h77oxm_k$ = function (density, layoutDirection, canvas, size, $super) {
    density = density === VOID ? this.density_1 : density;
    layoutDirection = layoutDirection === VOID ? this.layoutDirection_1 : layoutDirection;
    canvas = canvas === VOID ? this.canvas_1 : canvas;
    size = size === VOID ? this.size_1 : size;
    return $super === VOID ? this.copy_newspx_k$(density, layoutDirection, canvas, size) : $super.copy_newspx_k$.call(this, density, layoutDirection, canvas, new Size(size));
  };
  protoOf(DrawParams).toString = function () {
    return 'DrawParams(density=' + toString(this.density_1) + ', layoutDirection=' + this.layoutDirection_1.toString() + ', canvas=' + toString(this.canvas_1) + ', size=' + Size__toString_impl_o87ni8(this.size_1) + ')';
  };
  protoOf(DrawParams).hashCode = function () {
    var result = hashCode(this.density_1);
    result = imul(result, 31) + this.layoutDirection_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.canvas_1) | 0;
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.size_1) | 0;
    return result;
  };
  protoOf(DrawParams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DrawParams))
      return false;
    var tmp0_other_with_cast = other instanceof DrawParams ? other : THROW_CCE();
    if (!equals(this.density_1, tmp0_other_with_cast.density_1))
      return false;
    if (!this.layoutDirection_1.equals(tmp0_other_with_cast.layoutDirection_1))
      return false;
    if (!equals(this.canvas_1, tmp0_other_with_cast.canvas_1))
      return false;
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    return true;
  };
  function CanvasDrawScope$drawContext$1(this$0) {
    this.this$0__1 = this$0;
    this.transform_1 = asDrawTransform(this);
    this.graphicsLayer_1 = null;
  }
  protoOf(CanvasDrawScope$drawContext$1).set_canvas_1yi0mf_k$ = function (value) {
    this.this$0__1.drawParams_1.canvas_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).get_canvas_bshgm9_k$ = function () {
    return this.this$0__1.drawParams_1.canvas_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).set_size_6a0e6q_k$ = function (value) {
    this.this$0__1.drawParams_1.size_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).get_size_cxx1ym_k$ = function () {
    return this.this$0__1.drawParams_1.size_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).get_transform_px941v_k$ = function () {
    return this.transform_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).set_layoutDirection_vthtz8_k$ = function (value) {
    this.this$0__1.drawParams_1.layoutDirection_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).get_layoutDirection_7e37v0_k$ = function () {
    return this.this$0__1.drawParams_1.layoutDirection_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).set_density_3p0aj9_k$ = function (value) {
    this.this$0__1.drawParams_1.density_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).get_density_qy0267_k$ = function () {
    return this.this$0__1.drawParams_1.density_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).set_graphicsLayer_4v1flm_k$ = function (_set____db54di) {
    this.graphicsLayer_1 = _set____db54di;
  };
  protoOf(CanvasDrawScope$drawContext$1).get_graphicsLayer_i0zvs3_k$ = function () {
    return this.graphicsLayer_1;
  };
  function CanvasDrawScope() {
    this.drawParams_1 = new DrawParams();
    var tmp = this;
    tmp.drawContext_1 = new CanvasDrawScope$drawContext$1(this);
    this.fillPaint_1 = null;
    this.strokePaint_1 = null;
  }
  protoOf(CanvasDrawScope).get_drawParams_yv2tao_k$ = function () {
    return this.drawParams_1;
  };
  protoOf(CanvasDrawScope).get_layoutDirection_7e37v0_k$ = function () {
    return this.drawParams_1.layoutDirection_1;
  };
  protoOf(CanvasDrawScope).get_density_qy0267_k$ = function () {
    return this.drawParams_1.density_1.get_density_qy0267_k$();
  };
  protoOf(CanvasDrawScope).get_fontScale_h56n3i_k$ = function () {
    return this.drawParams_1.density_1.get_fontScale_h56n3i_k$();
  };
  protoOf(CanvasDrawScope).get_drawContext_ffwztu_k$ = function () {
    return this.drawContext_1;
  };
  protoOf(CanvasDrawScope).drawLine_b39977_k$ = function (brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawLine_p9lnhi_k$(start, end, configureStrokePaint$default_0(this, brush, strokeWidth, 4.0, cap, Companion_getInstance_36().get_Miter_xkwqso_k$(), pathEffect, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawLine_ki2hwq_k$ = function (color, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawLine_p9lnhi_k$(start, end, configureStrokePaint$default(this, color, strokeWidth, 4.0, cap, Companion_getInstance_36().get_Miter_xkwqso_k$(), pathEffect, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawRect_t09b9w_k$ = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_3 = tmp_2 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_4 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$23 = floatFromBits(bits_4);
    return tmp.drawRect_njf28a_k$(tmp_0, tmp_1, tmp_3, tmp_4 + tmp$ret$23, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawRect_6sw8uj_k$ = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_3 = tmp_2 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_4 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$23 = floatFromBits(bits_4);
    return tmp.drawRect_njf28a_k$(tmp_0, tmp_1, tmp_3, tmp_4 + tmp$ret$23, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawImage_7hd74h_k$ = function (image, topLeft, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawImage_lx1b1t_k$(image, topLeft, configurePaint$default(this, null, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawImage_17v7pj_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawImageRect_5h5ih1_k$(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint$default(this, null, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawImage_9mpi8u_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    return this.drawParams_1.canvas_1.drawImageRect_5h5ih1_k$(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint(this, null, style, alpha, colorFilter, blendMode, filterQuality));
  };
  protoOf(CanvasDrawScope).drawRoundRect_gbkwec_k$ = function (brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_3 = tmp_2 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_4 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_5 = tmp_4 + floatFromBits(bits_4);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_5 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_5 = convertToInt(shiftRight(value_5, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_6 = floatFromBits(bits_5);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_6 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$31 = floatFromBits(bits_6);
    return tmp.drawRoundRect_s5vrm8_k$(tmp_0, tmp_1, tmp_3, tmp_5, tmp_6, tmp$ret$31, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawRoundRect_bjcn4f_k$ = function (color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_3 = tmp_2 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_4 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_5 = tmp_4 + floatFromBits(bits_4);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_5 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_5 = convertToInt(shiftRight(value_5, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_6 = floatFromBits(bits_5);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_6 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$31 = floatFromBits(bits_6);
    return tmp.drawRoundRect_s5vrm8_k$(tmp_0, tmp_1, tmp_3, tmp_5, tmp_6, tmp$ret$31, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawCircle_mukkgw_k$ = function (brush, radius, center, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawCircle_l6ouf0_k$(center, radius, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawCircle_45hmy1_k$ = function (color, radius, center, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawCircle_l6ouf0_k$(center, radius, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawOval_euvgam_k$ = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_3 = tmp_2 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_4 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$23 = floatFromBits(bits_4);
    return tmp.drawOval_laorgo_k$(tmp_0, tmp_1, tmp_3, tmp_4 + tmp$ret$23, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawOval_xyvj95_k$ = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_3 = tmp_2 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_4 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$23 = floatFromBits(bits_4);
    return tmp.drawOval_laorgo_k$(tmp_0, tmp_1, tmp_3, tmp_4 + tmp$ret$23, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawArc_7lpe6v_k$ = function (brush, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_3 = tmp_2 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_4 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$23 = floatFromBits(bits_4);
    return tmp.drawArc_ud0hdz_k$(tmp_0, tmp_1, tmp_3, tmp_4 + tmp$ret$23, startAngle, sweepAngle, useCenter, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawArc_oz1pds_k$ = function (color, startAngle, sweepAngle, useCenter, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.drawParams_1.canvas_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_3 = tmp_2 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_4 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$23 = floatFromBits(bits_4);
    return tmp.drawArc_ud0hdz_k$(tmp_0, tmp_1, tmp_3, tmp_4 + tmp$ret$23, startAngle, sweepAngle, useCenter, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawPath_mbkbcp_k$ = function (path, color, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawPath_2all12_k$(path, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawPath_2qit1e_k$ = function (path, brush, alpha, style, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawPath_2all12_k$(path, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawPoints_l9lrzm_k$ = function (points, pointMode, color, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawPoints_buyvum_k$(pointMode, points, configureStrokePaint$default(this, color, strokeWidth, 4.0, cap, Companion_getInstance_36().get_Miter_xkwqso_k$(), pathEffect, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).drawPoints_7jhunr_k$ = function (points, pointMode, brush, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    return this.drawParams_1.canvas_1.drawPoints_buyvum_k$(pointMode, points, configureStrokePaint$default_0(this, brush, strokeWidth, 4.0, cap, Companion_getInstance_36().get_Miter_xkwqso_k$(), pathEffect, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).draw_gracce_k$ = function (density, layoutDirection, canvas, size, block) {
    var _destruct__k2r9zo = this.drawParams_1;
    var prevDensity = _destruct__k2r9zo.component1_7eebsc_k$();
    var prevLayoutDirection = _destruct__k2r9zo.component2_7eebsb_k$();
    var prevCanvas = _destruct__k2r9zo.component3_7eebsa_k$();
    var prevSize = _destruct__k2r9zo.component4_67q0p1_k$();
    // Inline function 'kotlin.apply' call
    var this_0 = this.drawParams_1;
    this_0.density_1 = density;
    this_0.layoutDirection_1 = layoutDirection;
    this_0.canvas_1 = canvas;
    this_0.size_1 = size;
    canvas.save_fbe7h_k$();
    block(this);
    canvas.restore_a1ykhu_k$();
    // Inline function 'kotlin.apply' call
    var this_1 = this.drawParams_1;
    this_1.density_1 = prevDensity;
    this_1.layoutDirection_1 = prevLayoutDirection;
    this_1.canvas_1 = prevCanvas;
    this_1.size_1 = prevSize;
  };
  function asDrawTransform(_this__u8e3s4) {
    return new asDrawTransform$1(_this__u8e3s4);
  }
  function asDrawTransform$1($this_asDrawTransform) {
    this.$this_asDrawTransform_1 = $this_asDrawTransform;
  }
  protoOf(asDrawTransform$1).get_size_cxx1ym_k$ = function () {
    return this.$this_asDrawTransform_1.get_size_cxx1ym_k$();
  };
  protoOf(asDrawTransform$1).get_center_dcexec_k$ = function () {
    return get_center(this.get_size_cxx1ym_k$());
  };
  protoOf(asDrawTransform$1).inset_ja77zn_k$ = function (left, top, right, bottom) {
    // Inline function 'kotlin.let' call
    var it = this.$this_asDrawTransform_1.get_canvas_bshgm9_k$();
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    var this_0 = this.get_size_cxx1ym_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = floatFromBits(bits) - (left + right);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    var this_1 = this.get_size_cxx1ym_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
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
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    if (floatFromBits(bits_1) >= 0) {
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Size___get_packedValue__impl__7rlt1o(updatedSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp = floatFromBits(bits_2) >= 0;
    } else {
      tmp = false;
    }
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    if (!tmp) {
      var tmp$ret$18 = 'Width and height must be greater than or equal to zero';
      throwIllegalArgumentException(tmp$ret$18);
    }
    this.$this_asDrawTransform_1.set_size_6a0e6q_k$(updatedSize);
    it.translate_7gghdu_k$(left, top);
  };
  protoOf(asDrawTransform$1).clipRect_3spswv_k$ = function (left, top, right, bottom, clipOp) {
    this.$this_asDrawTransform_1.get_canvas_bshgm9_k$().clipRect_3spswv_k$(left, top, right, bottom, clipOp);
  };
  protoOf(asDrawTransform$1).clipPath_tlqunt_k$ = function (path, clipOp) {
    this.$this_asDrawTransform_1.get_canvas_bshgm9_k$().clipPath_tlqunt_k$(path, clipOp);
  };
  protoOf(asDrawTransform$1).translate_7gghdu_k$ = function (left, top) {
    this.$this_asDrawTransform_1.get_canvas_bshgm9_k$().translate_7gghdu_k$(left, top);
  };
  protoOf(asDrawTransform$1).rotate_y7zh1f_k$ = function (degrees, pivot) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.$this_asDrawTransform_1.get_canvas_bshgm9_k$();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$7 = floatFromBits(bits_0);
    this_0.translate_7gghdu_k$(tmp, tmp$ret$7);
    this_0.rotate_qe8u4z_k$(degrees);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = -floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$15 = floatFromBits(bits_2);
    this_0.translate_7gghdu_k$(tmp_0, -tmp$ret$15);
  };
  protoOf(asDrawTransform$1).scale_rbtyk0_k$ = function (scaleX, scaleY, pivot) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.$this_asDrawTransform_1.get_canvas_bshgm9_k$();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$7 = floatFromBits(bits_0);
    this_0.translate_7gghdu_k$(tmp, tmp$ret$7);
    this_0.scale_ba85bu_k$(scaleX, scaleY);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = -floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$15 = floatFromBits(bits_2);
    this_0.translate_7gghdu_k$(tmp_0, -tmp$ret$15);
  };
  protoOf(asDrawTransform$1).transform_3go53t_k$ = function (matrix) {
    this.$this_asDrawTransform_1.get_canvas_bshgm9_k$().concat_no6uof_k$(matrix);
  };
  function ContentDrawScope() {
  }
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
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = tmp - floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 - floatFromBits(bits_2);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$16 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$16);
  }
  function Companion_28() {
    Companion_instance_28 = this;
    this.DefaultBlendMode_1 = Companion_getInstance_18().get_SrcOver_anr685_k$();
    this.DefaultFilterQuality_1 = Companion_getInstance_23().get_Low_7s05n6_k$();
  }
  protoOf(Companion_28).get_DefaultBlendMode_svct2m_k$ = function () {
    return this.DefaultBlendMode_1;
  };
  protoOf(Companion_28).get_DefaultFilterQuality_7zsczy_k$ = function () {
    return this.DefaultFilterQuality_1;
  };
  var Companion_instance_28;
  function Companion_getInstance_47() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function DrawScope$record$lambda(this$0, $block) {
    return function ($this$record) {
      var tmp0 = this$0;
      var tmp2 = $this$record.get_drawContext_ffwztu_k$().get_density_qy0267_k$();
      var tmp4 = $this$record.get_drawContext_ffwztu_k$().get_layoutDirection_7e37v0_k$();
      var tmp6 = $this$record.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$();
      var tmp8 = $this$record.get_drawContext_ffwztu_k$().get_size_cxx1ym_k$();
      var tmp10 = $this$record.get_drawContext_ffwztu_k$().get_graphicsLayer_i0zvs3_k$();
      // Inline function 'androidx.compose.ui.graphics.drawscope.draw' call
      var block = $block;
      var prevDensity = tmp0.get_drawContext_ffwztu_k$().get_density_qy0267_k$();
      var prevLayoutDirection = tmp0.get_drawContext_ffwztu_k$().get_layoutDirection_7e37v0_k$();
      var prevCanvas = tmp0.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$();
      var prevSize = tmp0.get_drawContext_ffwztu_k$().get_size_cxx1ym_k$();
      var prevLayer = tmp0.get_drawContext_ffwztu_k$().get_graphicsLayer_i0zvs3_k$();
      // Inline function 'kotlin.apply' call
      var this_0 = tmp0.get_drawContext_ffwztu_k$();
      this_0.set_density_3p0aj9_k$(tmp2);
      this_0.set_layoutDirection_vthtz8_k$(tmp4);
      this_0.set_canvas_1yi0mf_k$(tmp6);
      this_0.set_size_6a0e6q_k$(tmp8);
      this_0.set_graphicsLayer_4v1flm_k$(tmp10);
      tmp6.save_fbe7h_k$();
      try {
        block(tmp0);
      }finally {
        tmp6.restore_a1ykhu_k$();
        // Inline function 'kotlin.apply' call
        var this_1 = tmp0.get_drawContext_ffwztu_k$();
        this_1.set_density_3p0aj9_k$(prevDensity);
        this_1.set_layoutDirection_vthtz8_k$(prevLayoutDirection);
        this_1.set_canvas_1yi0mf_k$(prevCanvas);
        this_1.set_size_6a0e6q_k$(prevSize);
        this_1.set_graphicsLayer_4v1flm_k$(prevLayer);
      }
      return Unit_getInstance();
    };
  }
  function DrawScope() {
  }
  function clipRect_0(_this__u8e3s4, left, top, right, bottom, clipOp, block) {
    left = left === VOID ? 0.0 : left;
    top = top === VOID ? 0.0 : top;
    var tmp;
    if (right === VOID) {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      var this_0 = _this__u8e3s4.get_size_cxx1ym_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp = floatFromBits(bits);
    } else {
      tmp = right;
    }
    right = tmp;
    var tmp_0;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      var this_1 = _this__u8e3s4.get_size_cxx1ym_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      tmp_0 = floatFromBits(bits_0);
    } else {
      tmp_0 = bottom;
    }
    bottom = tmp_0;
    clipOp = clipOp === VOID ? Companion_getInstance_20().get_Intersect_gpxc6n_k$() : clipOp;
    // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
    // Inline function 'kotlin.with' call
    var $this$with = _this__u8e3s4.get_drawContext_ffwztu_k$();
    var previousSize = $this$with.get_size_cxx1ym_k$();
    $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
    try {
      $this$with.get_transform_px941v_k$().clipRect_3spswv_k$(left, top, right, bottom, clipOp);
      block(_this__u8e3s4);
    }finally {
      $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
      $this$with.set_size_6a0e6q_k$(previousSize);
    }
    return Unit_getInstance();
  }
  function translate(_this__u8e3s4, left, top, block) {
    left = left === VOID ? 0.0 : left;
    top = top === VOID ? 0.0 : top;
    _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(left, top);
    try {
      block(_this__u8e3s4);
    }finally {
      _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-left, -top);
    }
  }
  function Companion_29() {
    Companion_instance_29 = this;
    this.HairlineWidth_1 = 0.0;
    this.DefaultMiter_1 = 4.0;
    this.DefaultCap_1 = Companion_getInstance_35().get_Butt_jb7qjw_k$();
    this.DefaultJoin_1 = Companion_getInstance_36().get_Miter_xkwqso_k$();
  }
  protoOf(Companion_29).get_HairlineWidth_tck213_k$ = function () {
    return this.HairlineWidth_1;
  };
  protoOf(Companion_29).get_DefaultMiter_3rtz6b_k$ = function () {
    return this.DefaultMiter_1;
  };
  protoOf(Companion_29).get_DefaultCap_uwgp3q_k$ = function () {
    return this.DefaultCap_1;
  };
  protoOf(Companion_29).get_DefaultJoin_4efcsy_k$ = function () {
    return this.DefaultJoin_1;
  };
  var Companion_instance_29;
  function Companion_getInstance_48() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function Stroke(width, miter, cap, join, pathEffect) {
    Companion_getInstance_48();
    width = width === VOID ? 0.0 : width;
    miter = miter === VOID ? 4.0 : miter;
    cap = cap === VOID ? Companion_getInstance_48().DefaultCap_1 : cap;
    join = join === VOID ? Companion_getInstance_48().DefaultJoin_1 : join;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    DrawStyle.call(this);
    this.width_1 = width;
    this.miter_1 = miter;
    this.cap_1 = cap;
    this.join_1 = join;
    this.pathEffect_1 = pathEffect;
  }
  protoOf(Stroke).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(Stroke).get_miter_iv8ijg_k$ = function () {
    return this.miter_1;
  };
  protoOf(Stroke).get_cap_3aolkp_k$ = function () {
    return this.cap_1;
  };
  protoOf(Stroke).get_join_i4bzz3_k$ = function () {
    return this.join_1;
  };
  protoOf(Stroke).get_pathEffect_d6tz6p_k$ = function () {
    return this.pathEffect_1;
  };
  protoOf(Stroke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stroke))
      return false;
    if (!(this.width_1 === other.width_1))
      return false;
    if (!(this.miter_1 === other.miter_1))
      return false;
    if (!(this.cap_1 === other.cap_1))
      return false;
    if (!(this.join_1 === other.join_1))
      return false;
    if (!equals(this.pathEffect_1, other.pathEffect_1))
      return false;
    return true;
  };
  protoOf(Stroke).hashCode = function () {
    var result = getNumberHashCode(this.width_1);
    result = imul(31, result) + getNumberHashCode(this.miter_1) | 0;
    result = imul(31, result) + StrokeCap__hashCode_impl_posxk8(this.cap_1) | 0;
    result = imul(31, result) + StrokeJoin__hashCode_impl_3pyh8w(this.join_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.pathEffect_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(Stroke).toString = function () {
    return 'Stroke(width=' + this.width_1 + ', miter=' + this.miter_1 + ', cap=' + StrokeCap__toString_impl_3xn0rd(this.cap_1) + ', join=' + StrokeJoin__toString_impl_ph4e1r(this.join_1) + ', pathEffect=' + toString_0(this.pathEffect_1) + ')';
  };
  function scale(_this__u8e3s4, scaleX, scaleY, pivot, block) {
    pivot = pivot === VOID ? _this__u8e3s4.get_center_dcexec_k$() : pivot;
    // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
    // Inline function 'kotlin.with' call
    var $this$with = _this__u8e3s4.get_drawContext_ffwztu_k$();
    var previousSize = $this$with.get_size_cxx1ym_k$();
    $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
    try {
      $this$with.get_transform_px941v_k$().scale_rbtyk0_k$(scaleX, scaleY, pivot);
      block(_this__u8e3s4);
    }finally {
      $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
      $this$with.set_size_6a0e6q_k$(previousSize);
    }
    return Unit_getInstance();
  }
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
  function drawIntoCanvas(_this__u8e3s4, block) {
    return block(_this__u8e3s4.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$());
  }
  function clipPath(_this__u8e3s4, path, clipOp, block) {
    clipOp = clipOp === VOID ? Companion_getInstance_20().get_Intersect_gpxc6n_k$() : clipOp;
    // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
    // Inline function 'kotlin.with' call
    var $this$with = _this__u8e3s4.get_drawContext_ffwztu_k$();
    var previousSize = $this$with.get_size_cxx1ym_k$();
    $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
    try {
      $this$with.get_transform_px941v_k$().clipPath_tlqunt_k$(path, clipOp);
      block(_this__u8e3s4);
    }finally {
      $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
      $this$with.set_size_6a0e6q_k$(previousSize);
    }
    return Unit_getInstance();
  }
  function draw(_this__u8e3s4, density, layoutDirection, canvas, size, graphicsLayer, block) {
    graphicsLayer = graphicsLayer === VOID ? null : graphicsLayer;
    var prevDensity = _this__u8e3s4.get_drawContext_ffwztu_k$().get_density_qy0267_k$();
    var prevLayoutDirection = _this__u8e3s4.get_drawContext_ffwztu_k$().get_layoutDirection_7e37v0_k$();
    var prevCanvas = _this__u8e3s4.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$();
    var prevSize = _this__u8e3s4.get_drawContext_ffwztu_k$().get_size_cxx1ym_k$();
    var prevLayer = _this__u8e3s4.get_drawContext_ffwztu_k$().get_graphicsLayer_i0zvs3_k$();
    // Inline function 'kotlin.apply' call
    var this_0 = _this__u8e3s4.get_drawContext_ffwztu_k$();
    this_0.set_density_3p0aj9_k$(density);
    this_0.set_layoutDirection_vthtz8_k$(layoutDirection);
    this_0.set_canvas_1yi0mf_k$(canvas);
    this_0.set_size_6a0e6q_k$(size);
    this_0.set_graphicsLayer_4v1flm_k$(graphicsLayer);
    canvas.save_fbe7h_k$();
    try {
      block(_this__u8e3s4);
    }finally {
      canvas.restore_a1ykhu_k$();
      // Inline function 'kotlin.apply' call
      var this_1 = _this__u8e3s4.get_drawContext_ffwztu_k$();
      this_1.set_density_3p0aj9_k$(prevDensity);
      this_1.set_layoutDirection_vthtz8_k$(prevLayoutDirection);
      this_1.set_canvas_1yi0mf_k$(prevCanvas);
      this_1.set_size_6a0e6q_k$(prevSize);
      this_1.set_graphicsLayer_4v1flm_k$(prevLayer);
    }
  }
  function withTransform(_this__u8e3s4, transformBlock, drawBlock) {
    // Inline function 'kotlin.with' call
    var $this$with = _this__u8e3s4.get_drawContext_ffwztu_k$();
    var previousSize = $this$with.get_size_cxx1ym_k$();
    $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
    try {
      transformBlock($this$with.get_transform_px941v_k$());
      drawBlock(_this__u8e3s4);
    }finally {
      $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
      $this$with.set_size_6a0e6q_k$(previousSize);
    }
    return Unit_getInstance();
  }
  function inset(_this__u8e3s4, left, top, right, bottom, block) {
    _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().inset_ja77zn_k$(left, top, right, bottom);
    try {
      block(_this__u8e3s4);
    }finally {
      _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().inset_ja77zn_k$(-left, -top, -right, -bottom);
    }
  }
  function DrawScopeMarker() {
  }
  protoOf(DrawScopeMarker).equals = function (other) {
    if (!(other instanceof DrawScopeMarker))
      return false;
    other instanceof DrawScopeMarker || THROW_CCE();
    return true;
  };
  protoOf(DrawScopeMarker).hashCode = function () {
    return 0;
  };
  protoOf(DrawScopeMarker).toString = function () {
    return '@androidx.compose.ui.graphics.drawscope.DrawScopeMarker(' + ')';
  };
  function DrawTransform() {
  }
  function EmptyCanvas() {
    EmptyCanvas_instance = this;
  }
  protoOf(EmptyCanvas).save_fbe7h_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).restore_a1ykhu_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).saveLayer_j9hvqf_k$ = function (bounds, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).translate_7gghdu_k$ = function (dx, dy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).scale_ba85bu_k$ = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).rotate_qe8u4z_k$ = function (degrees) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).skew_kgli2i_k$ = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).concat_no6uof_k$ = function (matrix) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).clipRect_3spswv_k$ = function (left, top, right, bottom, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).clipPath_tlqunt_k$ = function (path, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawLine_p9lnhi_k$ = function (p1, p2, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawRect_njf28a_k$ = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawRoundRect_s5vrm8_k$ = function (left, top, right, bottom, radiusX, radiusY, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawOval_laorgo_k$ = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawCircle_l6ouf0_k$ = function (center, radius, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawArc_ud0hdz_k$ = function (left, top, right, bottom, startAngle, sweepAngle, useCenter, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawPath_2all12_k$ = function (path, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawImage_lx1b1t_k$ = function (image, topLeftOffset, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawImageRect_5h5ih1_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawPoints_buyvum_k$ = function (pointMode, points, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawRawPoints_jt1jmy_k$ = function (pointMode, points, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).drawVertices_mnlupq_k$ = function (vertices, blendMode, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).enableZ_eyb9g9_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).disableZ_14zkiq_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  var EmptyCanvas_instance;
  function EmptyCanvas_getInstance() {
    if (EmptyCanvas_instance == null)
      new EmptyCanvas();
    return EmptyCanvas_instance;
  }
  function _set_dependency__tm2e6s($this, _set____db54di) {
    $this.dependency_1 = _set____db54di;
  }
  function _get_dependency__qct2n4($this) {
    return $this.dependency_1;
  }
  function _set_oldDependency__6vw8tv($this, _set____db54di) {
    $this.oldDependency_1 = _set____db54di;
  }
  function _get_oldDependency__8bv9oh($this) {
    return $this.oldDependency_1;
  }
  function _set_dependenciesSet__3yg4s($this, _set____db54di) {
    $this.dependenciesSet_1 = _set____db54di;
  }
  function _get_dependenciesSet__a7onnc($this) {
    return $this.dependenciesSet_1;
  }
  function _set_oldDependenciesSet__6a2dtn($this, _set____db54di) {
    $this.oldDependenciesSet_1 = _set____db54di;
  }
  function _get_oldDependenciesSet__ut6d15($this) {
    return $this.oldDependenciesSet_1;
  }
  function _set_trackingInProgress__9z83wy($this, _set____db54di) {
    $this.trackingInProgress_1 = _set____db54di;
  }
  function _get_trackingInProgress__r40mxu($this) {
    return $this.trackingInProgress_1;
  }
  function access$_get_dependency__eau0ww($this) {
    return $this.dependency_1;
  }
  function access$_set_dependency__rek8c($this, _set____db54di) {
    $this.dependency_1 = _set____db54di;
    return Unit_getInstance();
  }
  function access$_get_oldDependency__6kx1q7($this) {
    return $this.oldDependency_1;
  }
  function access$_set_oldDependency__lsok8j($this, _set____db54di) {
    $this.oldDependency_1 = _set____db54di;
    return Unit_getInstance();
  }
  function access$_get_dependenciesSet__8t5wug($this) {
    return $this.dependenciesSet_1;
  }
  function access$_get_oldDependenciesSet__gb53k7($this) {
    return $this.oldDependenciesSet_1;
  }
  function access$_set_oldDependenciesSet__hmq7k5($this, _set____db54di) {
    $this.oldDependenciesSet_1 = _set____db54di;
    return Unit_getInstance();
  }
  function access$_set_trackingInProgress__dxkhgu($this, _set____db54di) {
    $this.trackingInProgress_1 = _set____db54di;
    return Unit_getInstance();
  }
  function ChildLayerDependenciesTracker() {
    this.dependency_1 = null;
    this.oldDependency_1 = null;
    this.dependenciesSet_1 = null;
    this.oldDependenciesSet_1 = null;
    this.trackingInProgress_1 = false;
  }
  protoOf(ChildLayerDependenciesTracker).withTracking_lkfa4e_k$ = function (onDependencyRemoved, block) {
    access$_set_oldDependency__lsok8j(this, access$_get_dependency__eau0ww(this));
    var tmp0_safe_receiver = access$_get_dependenciesSet__8t5wug(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (tmp0_safe_receiver.isNotEmpty_cjxbwk_k$()) {
        var tmp0_elvis_lhs = access$_get_oldDependenciesSet__gb53k7(this);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          var this_0 = mutableScatterSetOf();
          access$_set_oldDependenciesSet__hmq7k5(this, this_0);
          tmp = this_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var oldSet = tmp;
        oldSet.addAll_cozwho_k$(tmp0_safe_receiver);
        tmp0_safe_receiver.clear_j9egeb_k$();
      }
    }
    access$_set_trackingInProgress__dxkhgu(this, true);
    block();
    access$_set_trackingInProgress__dxkhgu(this, false);
    var tmp1_safe_receiver = access$_get_oldDependency__6kx1q7(this);
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      onDependencyRemoved(tmp1_safe_receiver);
    }
    var tmp2_safe_receiver = access$_get_oldDependenciesSet__gb53k7(this);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (tmp2_safe_receiver.isNotEmpty_cjxbwk_k$()) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var elements = tmp2_safe_receiver.get_elements_1kknxg_k$();
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = tmp2_safe_receiver.get_metadata_ha42hw_k$();
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              var tmp$ret$7 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
              if (!equalsLong(tmp$ret$7, new Long(-2139062144, -2139062144))) {
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
                      var tmp_0 = elements[index];
                      onDependencyRemoved((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE());
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
        tmp2_safe_receiver.clear_j9egeb_k$();
      }
    }
  };
  protoOf(ChildLayerDependenciesTracker).onDependencyAdded_1if4qq_k$ = function (graphicsLayer) {
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    if (!this.trackingInProgress_1) {
      var tmp$ret$0 = 'Only add dependencies during a tracking';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (!(this.dependenciesSet_1 == null)) {
      ensureNotNull(this.dependenciesSet_1).add_utx5q5_k$(graphicsLayer);
    } else if (!(this.dependency_1 == null)) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf();
      this_0.add_utx5q5_k$(ensureNotNull(this.dependency_1));
      this_0.add_utx5q5_k$(graphicsLayer);
      tmp.dependenciesSet_1 = this_0;
      this.dependency_1 = null;
    } else {
      this.dependency_1 = graphicsLayer;
    }
    if (!(this.oldDependenciesSet_1 == null)) {
      return !ensureNotNull(this.oldDependenciesSet_1).remove_cedx0m_k$(graphicsLayer);
    } else {
      if (!(this.oldDependency_1 === graphicsLayer)) {
        return true;
      } else {
        this.oldDependency_1 = null;
        return false;
      }
    }
  };
  protoOf(ChildLayerDependenciesTracker).removeDependencies_fjl5mu_k$ = function (block) {
    var tmp0_safe_receiver = access$_get_dependency__eau0ww(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      block(tmp0_safe_receiver);
      access$_set_dependency__rek8c(this, null);
    }
    var tmp1_safe_receiver = access$_get_dependenciesSet__8t5wug(this);
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var elements = tmp1_safe_receiver.get_elements_1kknxg_k$();
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = tmp1_safe_receiver.get_metadata_ha42hw_k$();
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
            if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
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
                    block((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE());
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
      tmp1_safe_receiver.clear_j9egeb_k$();
    }
  };
  function _CompositingStrategy___init__impl__pgr8e(value) {
    return value;
  }
  function _get_value__a43j40_10($this) {
    return $this;
  }
  function Companion_30() {
    Companion_instance_30 = this;
    this.Auto_1 = _CompositingStrategy___init__impl__pgr8e(0);
    this.Offscreen_1 = _CompositingStrategy___init__impl__pgr8e(1);
    this.ModulateAlpha_1 = _CompositingStrategy___init__impl__pgr8e(2);
  }
  protoOf(Companion_30).get_Auto_t2nrtj_k$ = function () {
    return this.Auto_1;
  };
  protoOf(Companion_30).get_Offscreen_m8w7dv_k$ = function () {
    return this.Offscreen_1;
  };
  protoOf(Companion_30).get_ModulateAlpha_5jsfhv_k$ = function () {
    return this.ModulateAlpha_1;
  };
  var Companion_instance_30;
  function Companion_getInstance_49() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function CompositingStrategy__toString_impl_3ar76y($this) {
    return 'CompositingStrategy(value=' + $this + ')';
  }
  function CompositingStrategy__hashCode_impl_igeplx($this) {
    return $this;
  }
  function CompositingStrategy__equals_impl_1k01l5($this, other) {
    if (!(other instanceof CompositingStrategy))
      return false;
    if (!($this === (other instanceof CompositingStrategy ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function CompositingStrategy(value) {
    Companion_getInstance_49();
    this.value_1 = value;
  }
  protoOf(CompositingStrategy).toString = function () {
    return CompositingStrategy__toString_impl_3ar76y(this.value_1);
  };
  protoOf(CompositingStrategy).hashCode = function () {
    return CompositingStrategy__hashCode_impl_igeplx(this.value_1);
  };
  protoOf(CompositingStrategy).equals = function (other) {
    return CompositingStrategy__equals_impl_1k01l5(this.value_1, other);
  };
  function drawLayer(_this__u8e3s4, graphicsLayer) {
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$();
    graphicsLayer.draw_ost04y_k$(canvas, _this__u8e3s4.get_drawContext_ffwztu_k$().get_graphicsLayer_i0zvs3_k$());
  }
  function setOutline(_this__u8e3s4, outline) {
    if (outline instanceof Rectangle) {
      var tmp0 = outline.get_rect_wotlbh_k$().get_left_woprgw_k$();
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = outline.get_rect_wotlbh_k$().get_top_18ivbo_k$();
      var v1 = fromInt(toRawBits(tmp0));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      var tmp = _Offset___init__impl__c168vi(tmp$ret$0);
      // Inline function 'androidx.compose.ui.geometry.Rect.width' call
      var this_0 = outline.get_rect_wotlbh_k$();
      var tmp0_0 = this_0.get_right_ixz7xv_k$() - this_0.get_left_woprgw_k$();
      // Inline function 'androidx.compose.ui.geometry.Rect.height' call
      var this_1 = outline.get_rect_wotlbh_k$();
      // Inline function 'androidx.compose.ui.geometry.Size' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2_0 = this_1.get_bottom_bj8ras_k$() - this_1.get_top_18ivbo_k$();
      var v1_0 = fromInt(toRawBits(tmp0_0));
      var v2_0 = fromInt(toRawBits(val2_0));
      var tmp$ret$4 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
      var tmp$ret$5 = _Size___init__impl__aywn0g(tmp$ret$4);
      _this__u8e3s4.setRectOutline_jz9n7i_k$(tmp, tmp$ret$5);
    } else {
      if (outline instanceof Generic) {
        _this__u8e3s4.setPathOutline_p5hlwa_k$(outline.get_path_wos8ry_k$());
      } else {
        if (outline instanceof Rounded) {
          if (!(outline.get_roundRectPath_qg5rxn_k$() == null)) {
            _this__u8e3s4.setPathOutline_p5hlwa_k$(outline.get_roundRectPath_qg5rxn_k$());
          } else {
            var rr = outline.get_roundRect_8fhall_k$();
            var tmp0_1 = rr.get_left_woprgw_k$();
            // Inline function 'androidx.compose.ui.geometry.Offset' call
            // Inline function 'androidx.compose.ui.util.packFloats' call
            var val2_1 = rr.get_top_18ivbo_k$();
            var v1_1 = fromInt(toRawBits(tmp0_1));
            var v2_1 = fromInt(toRawBits(val2_1));
            var tmp$ret$6 = bitwiseOr(shiftLeft(v1_1, 32), bitwiseAnd(v2_1, new Long(-1, 0)));
            var tmp_0 = _Offset___init__impl__c168vi(tmp$ret$6);
            var tmp0_2 = rr.get_width_j0q4yl_k$();
            // Inline function 'androidx.compose.ui.geometry.Size' call
            // Inline function 'androidx.compose.ui.util.packFloats' call
            var val2_2 = rr.get_height_e7t92o_k$();
            var v1_2 = fromInt(toRawBits(tmp0_2));
            var v2_2 = fromInt(toRawBits(val2_2));
            var tmp$ret$8 = bitwiseOr(shiftLeft(v1_2, 32), bitwiseAnd(v2_2, new Long(-1, 0)));
            var tmp_1 = _Size___init__impl__aywn0g(tmp$ret$8);
            // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
            var this_2 = rr.get_bottomLeftCornerRadius_9r65ws_k$();
            // Inline function 'androidx.compose.ui.util.unpackFloat1' call
            var value = _CornerRadius___get_packedValue__impl__okv4jq(this_2);
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            var bits = convertToInt(shiftRight(value, 32));
            // Inline function 'kotlin.fromBits' call
            FloatCompanionObject_getInstance();
            var tmp$ret$13 = floatFromBits(bits);
            _this__u8e3s4.setRoundRectOutline_2qdk90_k$(tmp_0, tmp_1, tmp$ret$13);
          }
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  }
  function _get_image__g3aecq($this) {
    return $this.image_1;
  }
  function _get_srcOffset__o9rlgm($this) {
    return $this.srcOffset_1;
  }
  function _get_srcSize__s1twoc($this) {
    return $this.srcSize_1;
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
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
      tmp_0 = convertToInt(shiftRight(value_1, 32)) <= $this.image_1.get_width_j0q4yl_k$();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_2 = _IntSize___get_packedValue__impl__uho7jf(srcSize);
      tmp = convertToInt(bitwiseAnd(value_2, new Long(-1, 0))) <= $this.image_1.get_height_e7t92o_k$();
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
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().get_Zero_6hc3i8_k$() : srcOffset;
    var tmp;
    if (srcSize === VOID) {
      var tmp0 = image.get_width_j0q4yl_k$();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = image.get_height_e7t92o_k$();
      var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      tmp = _IntSize___init__impl__emcjft(tmp$ret$0);
    } else {
      tmp = srcSize;
    }
    srcSize = tmp;
    Painter.call(this);
    this.image_1 = image;
    this.srcOffset_1 = srcOffset;
    this.srcSize_1 = srcSize;
    this.filterQuality_1 = Companion_getInstance_23().get_Low_7s05n6_k$();
    this.size_1 = validateSize(this, this.srcOffset_1, this.srcSize_1);
    this.alpha_2 = 1.0;
    this.colorFilter_2 = null;
  }
  protoOf(BitmapPainter).set_filterQuality_p0vyn4_k$ = function (_set____db54di) {
    this.filterQuality_1 = _set____db54di;
  };
  protoOf(BitmapPainter).get_filterQuality_c7zb32_k$ = function () {
    return this.filterQuality_1;
  };
  protoOf(BitmapPainter).onDraw_yom3na_k$ = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    var this_0 = _this__u8e3s4.get_size_cxx1ym_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = floatFromBits(bits);
    var tmp0 = roundToInt(this_1);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    var this_2 = _this__u8e3s4.get_size_cxx1ym_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(this_2);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_3 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = roundToInt(this_3);
    var tmp$ret$12 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    var tmp$ret$13 = _IntSize___init__impl__emcjft(tmp$ret$12);
    _this__u8e3s4.drawImage$default_qql6c2_k$(this.image_1, this.srcOffset_1, this.srcSize_1, VOID, tmp$ret$13, this.alpha_2, VOID, this.colorFilter_2, VOID, this.filterQuality_1);
  };
  protoOf(BitmapPainter).get_intrinsicSize_culx5t_k$ = function () {
    return toSize_0(this.size_1);
  };
  protoOf(BitmapPainter).applyAlpha_eeyl20_k$ = function (alpha) {
    this.alpha_2 = alpha;
    return true;
  };
  protoOf(BitmapPainter).applyColorFilter_uuk0e3_k$ = function (colorFilter) {
    this.colorFilter_2 = colorFilter;
    return true;
  };
  protoOf(BitmapPainter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BitmapPainter))
      return false;
    if (!equals(this.image_1, other.image_1))
      return false;
    if (!equals(this.srcOffset_1, other.srcOffset_1))
      return false;
    if (!equals(this.srcSize_1, other.srcSize_1))
      return false;
    if (!(this.filterQuality_1 === other.filterQuality_1))
      return false;
    return true;
  };
  protoOf(BitmapPainter).hashCode = function () {
    var result = hashCode(this.image_1);
    result = imul(31, result) + IntOffset__hashCode_impl_w5rrxs(this.srcOffset_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.srcSize_1) | 0;
    result = imul(31, result) + FilterQuality__hashCode_impl_v4lpcb(this.filterQuality_1) | 0;
    return result;
  };
  protoOf(BitmapPainter).toString = function () {
    return 'BitmapPainter(image=' + toString(this.image_1) + ', srcOffset=' + IntOffset__toString_impl_h46d8h(this.srcOffset_1) + ', srcSize=' + IntSize__toString_impl_54w9zl(this.srcSize_1) + ', ' + ('filterQuality=' + FilterQuality__toString_impl_i5cfty(this.filterQuality_1) + ')');
  };
  function _set_layerPaint__n08z3e($this, _set____db54di) {
    $this.layerPaint_1 = _set____db54di;
  }
  function _get_layerPaint__7y0dy6($this) {
    return $this.layerPaint_1;
  }
  function obtainPaint($this) {
    var target = $this.layerPaint_1;
    if (target == null) {
      target = Paint_0();
      $this.layerPaint_1 = target;
    }
    return target;
  }
  function _set_useLayer__oyrhfx($this, _set____db54di) {
    $this.useLayer_1 = _set____db54di;
  }
  function _get_useLayer__c5v5z5($this) {
    return $this.useLayer_1;
  }
  function _set_colorFilter__ke9voq_0($this, _set____db54di) {
    $this.colorFilter_1 = _set____db54di;
  }
  function _get_colorFilter__kcfzyi_0($this) {
    return $this.colorFilter_1;
  }
  function configureColorFilter($this, colorFilter) {
    if (!equals($this.colorFilter_1, colorFilter)) {
      var consumedColorFilter = $this.applyColorFilter_uuk0e3_k$(colorFilter);
      if (!consumedColorFilter) {
        if (colorFilter == null) {
          var tmp0_safe_receiver = $this.layerPaint_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.set_colorFilter_dtpxr0_k$(null);
          }
          $this.useLayer_1 = false;
        } else {
          obtainPaint($this).set_colorFilter_dtpxr0_k$(colorFilter);
          $this.useLayer_1 = true;
        }
      }
      $this.colorFilter_1 = colorFilter;
    }
  }
  function _set_alpha__c56vtz_0($this, _set____db54di) {
    $this.alpha_1 = _set____db54di;
  }
  function _get_alpha__jvxknh_0($this) {
    return $this.alpha_1;
  }
  function configureAlpha($this, alpha) {
    if (!($this.alpha_1 === alpha)) {
      var consumed = $this.applyAlpha_eeyl20_k$(alpha);
      if (!consumed) {
        if (alpha === 1.0) {
          var tmp0_safe_receiver = $this.layerPaint_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.set_alpha_tvzcqh_k$(alpha);
          }
          $this.useLayer_1 = false;
        } else {
          obtainPaint($this).set_alpha_tvzcqh_k$(alpha);
          $this.useLayer_1 = true;
        }
      }
      $this.alpha_1 = alpha;
    }
  }
  function _set_layoutDirection__jzuy7k($this, _set____db54di) {
    $this.layoutDirection_1 = _set____db54di;
  }
  function _get_layoutDirection__u3l5q4($this) {
    return $this.layoutDirection_1;
  }
  function configureLayoutDirection($this, rtl) {
    if (!$this.layoutDirection_1.equals(rtl)) {
      $this.applyLayoutDirection_6o3qed_k$(rtl);
      $this.layoutDirection_1 = rtl;
    }
  }
  function _get_drawLambda__orm7r4($this) {
    return $this.drawLambda_1;
  }
  function Painter$drawLambda$lambda(this$0) {
    return function (_this__u8e3s4) {
      this$0.onDraw_yom3na_k$(_this__u8e3s4);
      return Unit_getInstance();
    };
  }
  function Painter() {
    this.layerPaint_1 = null;
    this.useLayer_1 = false;
    this.colorFilter_1 = null;
    this.alpha_1 = 1.0;
    this.layoutDirection_1 = LayoutDirection_Ltr_getInstance();
    var tmp = this;
    tmp.drawLambda_1 = Painter$drawLambda$lambda(this);
  }
  protoOf(Painter).applyAlpha_eeyl20_k$ = function (alpha) {
    return false;
  };
  protoOf(Painter).applyColorFilter_uuk0e3_k$ = function (colorFilter) {
    return false;
  };
  protoOf(Painter).applyLayoutDirection_6o3qed_k$ = function (layoutDirection) {
    return false;
  };
  protoOf(Painter).draw_zf0527_k$ = function (_this__u8e3s4, size, alpha, colorFilter) {
    configureAlpha(this, alpha);
    configureColorFilter(this, colorFilter);
    configureLayoutDirection(this, _this__u8e3s4.get_layoutDirection_7e37v0_k$());
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    var this_0 = _this__u8e3s4.get_size_cxx1ym_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp6 = tmp - floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    var this_1 = _this__u8e3s4.get_size_cxx1ym_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Size___get_packedValue__impl__7rlt1o(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.graphics.drawscope.inset' call
    var bottom = tmp_0 - floatFromBits(bits_2);
    _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().inset_ja77zn_k$(0.0, 0.0, tmp6, bottom);
    try {
      var tmp_1;
      var tmp_2;
      if (alpha > 0.0) {
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_3 = _Size___get_packedValue__impl__7rlt1o(size);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_3 = convertToInt(shiftRight(value_3, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        tmp_2 = floatFromBits(bits_3) > 0;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        tmp_1 = floatFromBits(bits_4) > 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        if (this.useLayer_1) {
          var tmp_3 = Companion_getInstance().get_Zero_k6n73t_k$();
          // Inline function 'androidx.compose.ui.geometry.Size.width' call
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value_5 = _Size___get_packedValue__impl__7rlt1o(size);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          var bits_5 = convertToInt(shiftRight(value_5, 32));
          // Inline function 'kotlin.fromBits' call
          FloatCompanionObject_getInstance();
          var tmp0 = floatFromBits(bits_5);
          // Inline function 'androidx.compose.ui.geometry.Size.height' call
          // Inline function 'androidx.compose.ui.util.unpackFloat2' call
          var value_6 = _Size___get_packedValue__impl__7rlt1o(size);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
          // Inline function 'kotlin.fromBits' call
          FloatCompanionObject_getInstance();
          // Inline function 'androidx.compose.ui.geometry.Size' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var val2 = floatFromBits(bits_6);
          var v1 = fromInt(toRawBits(tmp0));
          var v2 = fromInt(toRawBits(val2));
          var tmp$ret$32 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
          var tmp$ret$33 = _Size___init__impl__aywn0g(tmp$ret$32);
          var layerRect = Rect_0(tmp_3, tmp$ret$33);
          // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
          var tmp0_0 = _this__u8e3s4.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$();
          // Inline function 'androidx.compose.ui.graphics.withSaveLayer' call
          var paint = obtainPaint(this);
          try {
            tmp0_0.saveLayer_j9hvqf_k$(layerRect, paint);
            this.onDraw_yom3na_k$(_this__u8e3s4);
          }finally {
            tmp0_0.restore_a1ykhu_k$();
          }
        } else {
          this.onDraw_yom3na_k$(_this__u8e3s4);
        }
      }
    }finally {
      _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().inset_ja77zn_k$(-0.0, -0.0, -tmp6, -bottom);
    }
  };
  protoOf(Painter).draw$default_7w00am_k$ = function (_this__u8e3s4, size, alpha, colorFilter, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    var tmp;
    if ($super === VOID) {
      this.draw_zf0527_k$(_this__u8e3s4, size, alpha, colorFilter);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.draw_zf0527_k$.call(this, _this__u8e3s4, new Size(size), alpha, colorFilter);
    }
    return tmp;
  };
  function configureShadow(_this__u8e3s4, color, blendMode, blurFilter, style) {
    color = color === VOID ? Companion_getInstance_21().get_Black_t4k9fh_k$() : color;
    blendMode = blendMode === VOID ? Companion_getInstance_18().get_SrcOver_anr685_k$() : blendMode;
    blurFilter = blurFilter === VOID ? null : blurFilter;
    style = style === VOID ? Companion_getInstance_27().get_Fill_7xey15_k$() : style;
    _this__u8e3s4.set_color_m2amxp_k$(color);
    _this__u8e3s4.set_blendMode_1e5m6b_k$(blendMode);
    _this__u8e3s4.set_style_t4zhmv_k$(style);
    setBlurFilter(_this__u8e3s4, blurFilter);
    return _this__u8e3s4;
  }
  function _get_shape__bfkypc($this) {
    return $this.shape_1;
  }
  function _get_shadow__qaz1n($this) {
    return $this.shadow_1;
  }
  function _get_renderCreator__844kpn($this) {
    return $this.renderCreator_1;
  }
  function DropShadowPainter_init_$Init$(shape, shadow, $this) {
    DropShadowPainter.call($this, shape, shadow, Companion_getInstance_50().Default_1);
    return $this;
  }
  function DropShadowPainter_init_$Create$(shape, shadow) {
    return DropShadowPainter_init_$Init$(shape, shadow, objectCreate(protoOf(DropShadowPainter)));
  }
  function _set_alpha__c56vtz_1($this, _set____db54di) {
    $this.alpha_2 = _set____db54di;
  }
  function _get_alpha__jvxknh_1($this) {
    return $this.alpha_2;
  }
  function _set_layoutDirection__jzuy7k_0($this, _set____db54di) {
    $this.layoutDirection_2 = _set____db54di;
  }
  function _get_layoutDirection__u3l5q4_0($this) {
    return $this.layoutDirection_2;
  }
  function _set_colorFilter__ke9voq_1($this, _set____db54di) {
    $this.colorFilter_2 = _set____db54di;
  }
  function _get_colorFilter__kcfzyi_1($this) {
    return $this.colorFilter_2;
  }
  function DropShadowPainter(shape, shadow, renderCreator) {
    Painter.call(this);
    this.shape_1 = shape;
    this.shadow_1 = shadow;
    this.renderCreator_1 = renderCreator;
    this.alpha_2 = 1.0;
    this.layoutDirection_2 = LayoutDirection_Ltr_getInstance();
    this.colorFilter_2 = null;
  }
  protoOf(DropShadowPainter).get_intrinsicSize_culx5t_k$ = function () {
    return Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
  };
  protoOf(DropShadowPainter).onDraw_yom3na_k$ = function (_this__u8e3s4) {
    var renderer = this.renderCreator_1.obtainDropShadowRenderer_1npkxd_k$(this.shape_1, _this__u8e3s4.get_size_cxx1ym_k$(), _this__u8e3s4.get_layoutDirection_7e37v0_k$(), _this__u8e3s4, this.shadow_1);
    var tmp2 = _this__u8e3s4.toPx_mycba2_k$(_DpOffset___get_x__impl__uauqb5(this.shadow_1.get_offset_a4242c_k$()));
    // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
    var top = _this__u8e3s4.toPx_mycba2_k$(_DpOffset___get_y__impl__1h898y(this.shadow_1.get_offset_a4242c_k$()));
    _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(tmp2, top);
    try {
      // Inline function 'kotlin.with' call
      renderer.drawShadow_1t94r3_k$(_this__u8e3s4, this.colorFilter_2, _this__u8e3s4.get_size_cxx1ym_k$(), renderer.shadow_1.get_color_lnp1vl_k$(), renderer.shadow_1.get_brush_ipcjyp_k$(), coerceIn_0(this.alpha_2 * renderer.shadow_1.get_alpha_iooth1_k$(), 0.0, 1.0), renderer.shadow_1.get_blendMode_si209t_k$());
    }finally {
      _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-tmp2, -top);
    }
  };
  protoOf(DropShadowPainter).applyAlpha_eeyl20_k$ = function (alpha) {
    this.alpha_2 = alpha;
    return true;
  };
  protoOf(DropShadowPainter).applyColorFilter_uuk0e3_k$ = function (colorFilter) {
    this.colorFilter_2 = colorFilter;
    return true;
  };
  protoOf(DropShadowPainter).applyLayoutDirection_6o3qed_k$ = function (layoutDirection) {
    this.layoutDirection_2 = layoutDirection;
    return true;
  };
  function sam$androidx_compose_ui_graphics_shadow_DropShadowRendererProvider$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_shadow_DropShadowRendererProvider$0).obtainDropShadowRenderer_1npkxd_k$ = function (shape, size, layoutDirection, density, shadow) {
    return this.function_1(shape, new Size(size), layoutDirection, density, shadow);
  };
  protoOf(sam$androidx_compose_ui_graphics_shadow_DropShadowRendererProvider$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_shadow_DropShadowRendererProvider$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DropShadowRendererProvider) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_shadow_DropShadowRendererProvider$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function DropShadowRendererProvider$Companion$Default$lambda(shape, size, layoutDirection, density, dropShadow) {
    return new DropShadowRenderer(dropShadow, shape.createOutline_nnkieo_k$(size.packedValue_1, layoutDirection, density));
  }
  function Companion_31() {
    Companion_instance_31 = this;
    var tmp = this;
    var tmp_0 = DropShadowRendererProvider$Companion$Default$lambda;
    tmp.Default_1 = new sam$androidx_compose_ui_graphics_shadow_DropShadowRendererProvider$0(tmp_0);
  }
  protoOf(Companion_31).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  var Companion_instance_31;
  function Companion_getInstance_50() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function DropShadowRendererProvider() {
  }
  function _get_paint__cyfb9p($this) {
    return $this.paint_1;
  }
  function _set_shadowBitmap__gagks8($this, _set____db54di) {
    $this.shadowBitmap_1 = _set____db54di;
  }
  function _get_shadowBitmap__qpu84($this) {
    return $this.shadowBitmap_1;
  }
  function _set_compositeShader__v8o2mf($this, _set____db54di) {
    $this.compositeShader_1 = _set____db54di;
  }
  function _get_compositeShader__l4xv3v($this) {
    return $this.compositeShader_1;
  }
  function obtainCompositeBrush($this, shadowBitmap, brush) {
    var shader = $this.compositeShader_1;
    if (shader == null || !equals(shader.get_srcBrush_vv1ksf_k$(), brush)) {
      var tmp = Companion_getInstance_19();
      var tmp_0 = ShaderBrush_0(ImageShader(shadowBitmap));
      var tmp_1;
      if (brush instanceof ShaderBrush) {
        var tmp0 = shadowBitmap.get_width_j0q4yl_k$();
        // Inline function 'androidx.compose.ui.geometry.Size' call
        // Inline function 'androidx.compose.ui.util.packFloats' call
        var val2 = shadowBitmap.get_height_e7t92o_k$();
        var v1 = fromInt(toRawBits(tmp0));
        var v2 = fromInt(toRawBits(val2));
        var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
        var tmp$ret$1 = _Size___init__impl__aywn0g(tmp$ret$0);
        tmp_1 = ShaderBrush_0(brush.createShader_k0897f_k$(tmp$ret$1));
      } else {
        tmp_1 = brush;
      }
      var tmp_2 = tmp.composite_pkndtd_k$(tmp_0, tmp_1, Companion_getInstance_18().get_SrcIn_enr0mu_k$());
      // Inline function 'kotlin.also' call
      var this_0 = tmp_2 instanceof CompositeShaderBrush ? tmp_2 : THROW_CCE();
      $this.compositeShader_1 = this_0;
      shader = this_0;
    }
    return shader;
  }
  function createOuterShadowBitmap($this, size, path, radius, spread) {
    var outset = radius * 2 + spread * 2;
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var shadowWidth = floatFromBits(bits) + outset;
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var shadowHeight = floatFromBits(bits_0) + outset;
    // Inline function 'kotlin.math.ceil' call
    var tmp$ret$8 = Math.ceil(shadowWidth);
    var tmp = numberToInt(tmp$ret$8);
    // Inline function 'kotlin.math.ceil' call
    var tmp$ret$9 = Math.ceil(shadowHeight);
    var shadowBitmap = ImageBitmap_0(tmp, numberToInt(tmp$ret$9), Companion_getInstance_25().get_Alpha8_8qn3sx_k$());
    var shadowCanvas = Canvas_0(shadowBitmap);
    // Inline function 'kotlin.with' call
    if (spread > 0.0) {
      shadowCanvas.translate_7gghdu_k$(radius + spread, radius + spread);
      shadowCanvas.drawPath_2all12_k$(path, $this.paint_1);
      var tmp0_$receiver = $this.paint_1;
      var tmp1_style = Companion_getInstance_27().get_Stroke_fu1ixu_k$();
      var tmp_0;
      if (radius > 0) {
        tmp_0 = BlurFilter(radius);
      } else {
        tmp_0 = null;
      }
      var tmp2_blurFilter = tmp_0;
      // Inline function 'kotlin.apply' call
      var this_0 = configureShadow(tmp0_$receiver, VOID, VOID, tmp2_blurFilter, tmp1_style);
      this_0.set_strokeWidth_owqvpl_k$(spread * 2.0);
      shadowCanvas.drawPath_2all12_k$(path, this_0);
    } else {
      var tmp_1;
      if (radius > 0) {
        tmp_1 = BlurFilter(radius);
      } else {
        tmp_1 = null;
      }
      configureShadow($this.paint_1, VOID, VOID, tmp_1);
      shadowCanvas.translate_7gghdu_k$(radius, radius);
      shadowCanvas.drawPath_2all12_k$(path, $this.paint_1);
    }
    return shadowBitmap;
  }
  function createOuterShadowBitmap_0($this, size, shadowRadius, spread, cornerRadius) {
    var outset = shadowRadius * 2 + spread * 2;
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var shadowWidth = floatFromBits(bits) + outset;
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var shadowHeight = floatFromBits(bits_0) + outset;
    // Inline function 'kotlin.math.ceil' call
    var tmp$ret$8 = Math.ceil(shadowWidth);
    var tmp = numberToInt(tmp$ret$8);
    // Inline function 'kotlin.math.ceil' call
    var tmp$ret$9 = Math.ceil(shadowHeight);
    var shadowBitmap = ImageBitmap_0(tmp, numberToInt(tmp$ret$9), Companion_getInstance_25().get_Alpha8_8qn3sx_k$());
    var shadowCanvas = Canvas_0(shadowBitmap);
    // Inline function 'kotlin.with' call
    var tmp_0 = shadowWidth - shadowRadius;
    var tmp_1 = shadowHeight - shadowRadius;
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_3 = floatFromBits(bits_2);
    var tmp_4;
    if (shadowRadius > 0) {
      tmp_4 = BlurFilter(shadowRadius);
    } else {
      tmp_4 = null;
    }
    shadowCanvas.drawRoundRect_s5vrm8_k$(shadowRadius, shadowRadius, tmp_0, tmp_1, tmp_2, tmp_3, configureShadow($this.paint_1, VOID, VOID, tmp_4));
    return shadowBitmap;
  }
  function DropShadowRenderer(shadow, outline) {
    ShadowRenderer.call(this, outline);
    this.shadow_1 = shadow;
    this.paint_1 = Paint_0();
    this.shadowBitmap_1 = null;
    this.compositeShader_1 = null;
  }
  protoOf(DropShadowRenderer).get_shadow_jgtb8p_k$ = function () {
    return this.shadow_1;
  };
  protoOf(DropShadowRenderer).buildShadow_s368a7_k$ = function (_this__u8e3s4, size, cornerRadius, path) {
    var radius = _this__u8e3s4.toPx_mycba2_k$(this.shadow_1.get_radius_lj3jlk_k$());
    var spread = _this__u8e3s4.toPx_mycba2_k$(this.shadow_1.get_spread_uzrbh5_k$());
    var tmp = this;
    var tmp_0;
    if (!(path == null)) {
      tmp_0 = createOuterShadowBitmap(this, size, path, radius, spread);
    } else {
      tmp_0 = createOuterShadowBitmap_0(this, size, radius, spread, cornerRadius);
    }
    tmp.shadowBitmap_1 = tmp_0;
  };
  protoOf(DropShadowRenderer).onDrawShadow_28ei4t_k$ = function (_this__u8e3s4, size, cornerRadius, path, alpha, colorFilter, brush, blendMode) {
    var tmp0_safe_receiver = this.shadowBitmap_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var offset = -(_this__u8e3s4.toPx_mycba2_k$(this.shadow_1.get_radius_lj3jlk_k$()) + _this__u8e3s4.toPx_mycba2_k$(this.shadow_1.get_spread_uzrbh5_k$()));
      if (!(brush == null) && colorFilter == null) {
        var shaderBrush = obtainCompositeBrush(this, tmp0_safe_receiver, brush);
        // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
        _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(offset, offset);
        try {
          var tmp0 = tmp0_safe_receiver.get_width_j0q4yl_k$();
          // Inline function 'androidx.compose.ui.geometry.Size' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var val2 = tmp0_safe_receiver.get_height_e7t92o_k$();
          var v1 = fromInt(toRawBits(tmp0));
          var v2 = fromInt(toRawBits(val2));
          var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
          var tmp$ret$1 = _Size___init__impl__aywn0g(tmp$ret$0);
          _this__u8e3s4.drawRect$default_rrw2w5_k$(shaderBrush, VOID, tmp$ret$1, alpha, VOID, VOID, blendMode);
        }finally {
          _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-offset, -offset);
        }
      } else {
        // Inline function 'androidx.compose.ui.geometry.Offset' call
        // Inline function 'androidx.compose.ui.util.packFloats' call
        var v1_0 = fromInt(toRawBits(offset));
        var v2_0 = fromInt(toRawBits(offset));
        var tmp$ret$4 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
        var tmp$ret$5 = _Offset___init__impl__c168vi(tmp$ret$4);
        _this__u8e3s4.drawImage$default_grl3dt_k$(tmp0_safe_receiver, tmp$ret$5, alpha, VOID, colorFilter, blendMode);
      }
    }
  };
  function _get_shape__bfkypc_0($this) {
    return $this.shape_1;
  }
  function _get_shadow__qaz1n_0($this) {
    return $this.shadow_1;
  }
  function _get_renderCreator__844kpn_0($this) {
    return $this.renderCreator_1;
  }
  function InnerShadowPainter_init_$Init$(shape, shadow, $this) {
    InnerShadowPainter.call($this, shape, shadow, Companion_getInstance_51().Default_1);
    return $this;
  }
  function InnerShadowPainter_init_$Create$(shape, shadow) {
    return InnerShadowPainter_init_$Init$(shape, shadow, objectCreate(protoOf(InnerShadowPainter)));
  }
  function _set_alpha__c56vtz_2($this, _set____db54di) {
    $this.alpha_2 = _set____db54di;
  }
  function _get_alpha__jvxknh_2($this) {
    return $this.alpha_2;
  }
  function _set_layoutDirection__jzuy7k_1($this, _set____db54di) {
    $this.layoutDirection_2 = _set____db54di;
  }
  function _get_layoutDirection__u3l5q4_1($this) {
    return $this.layoutDirection_2;
  }
  function _set_colorFilter__ke9voq_2($this, _set____db54di) {
    $this.colorFilter_2 = _set____db54di;
  }
  function _get_colorFilter__kcfzyi_2($this) {
    return $this.colorFilter_2;
  }
  function InnerShadowPainter(shape, shadow, renderCreator) {
    renderCreator = renderCreator === VOID ? Companion_getInstance_51().Default_1 : renderCreator;
    Painter.call(this);
    this.shape_1 = shape;
    this.shadow_1 = shadow;
    this.renderCreator_1 = renderCreator;
    this.alpha_2 = 1.0;
    this.layoutDirection_2 = LayoutDirection_Ltr_getInstance();
    this.colorFilter_2 = null;
  }
  protoOf(InnerShadowPainter).get_intrinsicSize_culx5t_k$ = function () {
    return Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
  };
  protoOf(InnerShadowPainter).onDraw_yom3na_k$ = function (_this__u8e3s4) {
    var renderer = this.renderCreator_1.obtainInnerShadowRenderer_1bld2m_k$(this.shape_1, _this__u8e3s4.get_size_cxx1ym_k$(), _this__u8e3s4.get_layoutDirection_7e37v0_k$(), _this__u8e3s4, this.shadow_1);
    // Inline function 'kotlin.with' call
    renderer.drawShadow_1t94r3_k$(_this__u8e3s4, this.colorFilter_2, _this__u8e3s4.get_size_cxx1ym_k$(), this.shadow_1.get_color_lnp1vl_k$(), this.shadow_1.get_brush_ipcjyp_k$(), coerceIn_0(this.alpha_2 * this.shadow_1.get_alpha_iooth1_k$(), 0.0, 1.0), this.shadow_1.get_blendMode_si209t_k$());
  };
  protoOf(InnerShadowPainter).applyAlpha_eeyl20_k$ = function (alpha) {
    this.alpha_2 = alpha;
    return true;
  };
  protoOf(InnerShadowPainter).applyColorFilter_uuk0e3_k$ = function (colorFilter) {
    this.colorFilter_2 = colorFilter;
    return true;
  };
  protoOf(InnerShadowPainter).applyLayoutDirection_6o3qed_k$ = function (layoutDirection) {
    this.layoutDirection_2 = layoutDirection;
    return true;
  };
  function sam$androidx_compose_ui_graphics_shadow_InnerShadowRendererProvider$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_shadow_InnerShadowRendererProvider$0).obtainInnerShadowRenderer_1bld2m_k$ = function (shape, size, layoutDirection, density, shadow) {
    return this.function_1(shape, new Size(size), layoutDirection, density, shadow);
  };
  protoOf(sam$androidx_compose_ui_graphics_shadow_InnerShadowRendererProvider$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_shadow_InnerShadowRendererProvider$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, InnerShadowRendererProvider) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_shadow_InnerShadowRendererProvider$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function InnerShadowRendererProvider$Companion$Default$lambda(shape, size, layoutDirection, density, innerShadow) {
    return new InnerShadowRenderer(innerShadow, shape.createOutline_nnkieo_k$(size.packedValue_1, layoutDirection, density));
  }
  function Companion_32() {
    Companion_instance_32 = this;
    var tmp = this;
    var tmp_0 = InnerShadowRendererProvider$Companion$Default$lambda;
    tmp.Default_1 = new sam$androidx_compose_ui_graphics_shadow_InnerShadowRendererProvider$0(tmp_0);
  }
  protoOf(Companion_32).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  var Companion_instance_32;
  function Companion_getInstance_51() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function InnerShadowRendererProvider() {
  }
  function _get_shadow__qaz1n_1($this) {
    return $this.shadow_1;
  }
  function _get_paint__cyfb9p_0($this) {
    return $this.paint_1;
  }
  function _set_shadowMask__sr248b($this, _set____db54di) {
    $this.shadowMask_1 = _set____db54di;
  }
  function _get_shadowMask__dotj33($this) {
    return $this.shadowMask_1;
  }
  function _set_compositeShader__v8o2mf_0($this, _set____db54di) {
    $this.compositeShader_1 = _set____db54di;
  }
  function _get_compositeShader__l4xv3v_0($this) {
    return $this.compositeShader_1;
  }
  function _set_matrix__ksbp1m($this, _set____db54di) {
    $this.matrix_1 = _set____db54di;
  }
  function _get_matrix__jbl4eu($this) {
    return $this.matrix_1;
  }
  function obtainMatrix($this) {
    var tmp0_elvis_lhs = $this.matrix_1;
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new Matrix(tmp_0)) == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new Matrix(_Matrix___init__impl__q3kp4w());
      $this.matrix_1 = this_0.values_1;
      tmp = this_0.values_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function obtainCompositeBrush_0($this, shadowMask, brush) {
    var shader = $this.compositeShader_1;
    if (shader == null || !equals(shader.get_srcBrush_vv1ksf_k$(), brush)) {
      // Inline function 'kotlin.also' call
      var this_0 = new CompositeShaderBrush(toShaderBrush(shadowMask), toShaderBrush(brush), Companion_getInstance_18().get_SrcIn_enr0mu_k$());
      $this.compositeShader_1 = this_0;
      shader = this_0;
    }
    return shader;
  }
  function createInnerPathShadowBrush($this, size, path, radius, spread, offsetX, offsetY) {
    var pathBitmap;
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'kotlin.math.ceil' call
    var x = floatFromBits(bits);
    var tmp$ret$4 = Math.ceil(x);
    var widthPx = numberToInt(tmp$ret$4);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'kotlin.math.ceil' call
    var x_0 = floatFromBits(bits_0);
    var tmp$ret$9 = Math.ceil(x_0);
    var heightPx = numberToInt(tmp$ret$9);
    if (spread > 0.0) {
      var pathBounds = path.getBounds_568lnv_k$();
      // Inline function 'androidx.compose.ui.geometry.Rect.width' call
      var pathWidth = pathBounds.get_right_ixz7xv_k$() - pathBounds.get_left_woprgw_k$();
      // Inline function 'androidx.compose.ui.geometry.Rect.height' call
      var pathHeight = pathBounds.get_bottom_bj8ras_k$() - pathBounds.get_top_18ivbo_k$();
      // Inline function 'kotlin.math.ceil' call
      var tmp$ret$12 = Math.ceil(pathWidth);
      var tmp = numberToInt(tmp$ret$12);
      // Inline function 'kotlin.math.ceil' call
      var tmp$ret$13 = Math.ceil(pathHeight);
      pathBitmap = ImageBitmap_0(tmp, numberToInt(tmp$ret$13), Companion_getInstance_25().get_Alpha8_8qn3sx_k$());
      var pathCanvas = Canvas_0(pathBitmap);
      // Inline function 'kotlin.with' call
      pathCanvas.drawPath_2all12_k$(path, $this.paint_1);
      pathCanvas.clipRect$default_rljm8s_k$(0.0, 0.0, pathWidth, pathHeight);
      var tmp0_$receiver = $this.paint_1;
      var tmp1_style = Companion_getInstance_27().get_Stroke_fu1ixu_k$();
      var tmp2_blendMode = Companion_getInstance_18().get_Clear_ts5s9y_k$();
      // Inline function 'kotlin.apply' call
      var this_0 = configureShadow(tmp0_$receiver, VOID, tmp2_blendMode, VOID, tmp1_style);
      this_0.set_strokeWidth_owqvpl_k$(spread * 2.0);
      pathCanvas.drawPath_2all12_k$(path, this_0);
    } else {
      pathBitmap = null;
    }
    // Inline function 'kotlin.math.ceil' call
    var tmp$ret$18 = Math.ceil(radius);
    var clampPadding = numberToInt(tmp$ret$18);
    var shadowBitmap = ImageBitmap_0(widthPx + imul(clampPadding, 2) | 0, heightPx + imul(clampPadding, 2) | 0, Companion_getInstance_25().get_Alpha8_8qn3sx_k$());
    var shadowCanvas = Canvas_0(shadowBitmap);
    // Inline function 'kotlin.with' call
    var tmp_0;
    if (!(pathBitmap == null)) {
      shadowCanvas.drawRect_njf28a_k$(0.0, 0.0, shadowBitmap.get_width_j0q4yl_k$(), shadowBitmap.get_height_e7t92o_k$(), configureShadow($this.paint_1));
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var v1 = fromInt(toRawBits(offsetX));
      var v2 = fromInt(toRawBits(offsetY));
      var tmp$ret$19 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      var tmp_1 = _Offset___init__impl__c168vi(tmp$ret$19);
      var tmp0_$receiver_0 = $this.paint_1;
      var tmp_2;
      if (radius > 0.0) {
        tmp_2 = BlurFilter(radius);
      } else {
        tmp_2 = null;
      }
      var tmp1_blurFilter = tmp_2;
      var tmp2_blendMode_0 = Companion_getInstance_18().get_Xor_cjn5co_k$();
      shadowCanvas.drawImage_lx1b1t_k$(pathBitmap, tmp_1, configureShadow(tmp0_$receiver_0, VOID, tmp2_blendMode_0, tmp1_blurFilter));
      return ShaderBrush_0(ImageShader(shadowBitmap));
    } else {
      shadowCanvas.save_fbe7h_k$();
      shadowCanvas.translate_7gghdu_k$(offsetX, offsetY);
      var tmp_3;
      if (radius > 0.0) {
        tmp_3 = BlurFilter(radius);
      } else {
        tmp_3 = null;
      }
      shadowCanvas.drawPath_2all12_k$(path, configureShadow($this.paint_1, VOID, VOID, tmp_3));
      shadowCanvas.restore_a1ykhu_k$();
      shadowCanvas.drawRect_njf28a_k$(0.0, 0.0, shadowBitmap.get_width_j0q4yl_k$(), shadowBitmap.get_height_e7t92o_k$(), configureShadow($this.paint_1, VOID, Companion_getInstance_18().get_Xor_cjn5co_k$()));
      return ShaderBrush_0(ImageShader(shadowBitmap));
    }
  }
  function createInnerShadowBrush($this, size, radius, spread, offsetX, offsetY, cornerRadius) {
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'kotlin.math.ceil' call
    var x = floatFromBits(bits);
    var tmp$ret$4 = Math.ceil(x);
    var tmp = numberToInt(tmp$ret$4);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'kotlin.math.ceil' call
    var x_0 = floatFromBits(bits_0);
    var tmp$ret$9 = Math.ceil(x_0);
    var shadowBitmap = ImageBitmap_0(tmp, numberToInt(tmp$ret$9), Companion_getInstance_25().get_Alpha8_8qn3sx_k$());
    var shadowCanvas = Canvas_0(shadowBitmap);
    // Inline function 'kotlin.with' call
    var left = offsetX + spread;
    var top = offsetY + spread;
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'kotlin.math.max' call
    var b = offsetX + floatFromBits(bits_1) - spread;
    var right = Math.max(left, b);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'kotlin.math.max' call
    var b_0 = offsetY + floatFromBits(bits_2) - spread;
    var bottom = Math.max(top, b_0);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_3 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_3 = convertToInt(shiftRight(value_3, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits_4);
    var tmp_2;
    if (radius > 0) {
      tmp_2 = BlurFilter(radius);
    } else {
      tmp_2 = null;
    }
    shadowCanvas.drawRoundRect_s5vrm8_k$(left, top, right, bottom, tmp_0, tmp_1, configureShadow($this.paint_1, VOID, VOID, tmp_2));
    shadowCanvas.drawRect_njf28a_k$(0.0, 0.0, shadowBitmap.get_width_j0q4yl_k$(), shadowBitmap.get_height_e7t92o_k$(), configureShadow($this.paint_1, VOID, Companion_getInstance_18().get_Xor_cjn5co_k$()));
    return ShaderBrush_0(ImageShader(shadowBitmap));
  }
  function InnerShadowRenderer(shadow, outline) {
    ShadowRenderer.call(this, outline);
    this.shadow_1 = shadow;
    this.paint_1 = Paint_0();
    this.shadowMask_1 = null;
    this.compositeShader_1 = null;
    this.matrix_1 = null;
  }
  protoOf(InnerShadowRenderer).buildShadow_s368a7_k$ = function (_this__u8e3s4, size, cornerRadius, path) {
    var radius = _this__u8e3s4.toPx_mycba2_k$(this.shadow_1.get_radius_lj3jlk_k$());
    var spread = _this__u8e3s4.toPx_mycba2_k$(this.shadow_1.get_spread_uzrbh5_k$());
    var offsetX = _this__u8e3s4.toPx_mycba2_k$(_DpOffset___get_x__impl__uauqb5(this.shadow_1.get_offset_a4242c_k$()));
    var offsetY = _this__u8e3s4.toPx_mycba2_k$(_DpOffset___get_y__impl__1h898y(this.shadow_1.get_offset_a4242c_k$()));
    var tmp = this;
    var tmp_0;
    if (!(path == null)) {
      tmp_0 = createInnerPathShadowBrush(this, size, path, radius, spread, offsetX, offsetY);
    } else {
      tmp_0 = createInnerShadowBrush(this, size, radius, spread, offsetX, offsetY, cornerRadius);
    }
    tmp.shadowMask_1 = tmp_0;
  };
  protoOf(InnerShadowRenderer).onDrawShadow_28ei4t_k$ = function (_this__u8e3s4, size, cornerRadius, path, alpha, colorFilter, brush, blendMode) {
    var tmp0_safe_receiver = this.shadowMask_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp;
      var tmp_0 = this.shadow_1.get_brush_ipcjyp_k$();
      if (tmp_0 instanceof ShaderBrush) {
        tmp = obtainCompositeBrush_0(this, tmp0_safe_receiver, this.shadow_1.get_brush_ipcjyp_k$());
      } else {
        tmp = tmp0_safe_receiver;
      }
      var targetBrush = tmp;
      if (!(path == null)) {
        _this__u8e3s4.drawPath$default_6abh83_k$(path, targetBrush, alpha, VOID, colorFilter, blendMode);
      } else if (equals(cornerRadius, Companion_getInstance_2().get_Zero_r4zx17_k$())) {
        _this__u8e3s4.drawRect$default_rrw2w5_k$(targetBrush, VOID, VOID, alpha, VOID, colorFilter, blendMode);
      } else {
        var tmp0_blendMode = this.shadow_1.get_blendMode_si209t_k$();
        _this__u8e3s4.drawRoundRect$default_mredpw_k$(targetBrush, VOID, VOID, cornerRadius, alpha, VOID, colorFilter, tmp0_blendMode);
      }
    }
  };
  function Shadow_init_$Init$(radius, brush, spread, offset, alpha, blendMode, $this) {
    var tmp;
    if (spread === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = spread;
    }
    spread = tmp;
    offset = offset === VOID ? Companion_getInstance_3().get_Zero_wu8ckh_k$() : offset;
    alpha = alpha === VOID ? 1.0 : alpha;
    blendMode = blendMode === VOID ? Companion_getInstance_47().get_DefaultBlendMode_svct2m_k$() : blendMode;
    Shadow_0.call($this, radius, spread, offset, Companion_getInstance_21().get_Black_t4k9fh_k$(), brush, alpha, blendMode);
    return $this;
  }
  function Shadow_init_$Create$(radius, brush, spread, offset, alpha, blendMode) {
    return Shadow_init_$Init$(radius, brush, spread, offset, alpha, blendMode, objectCreate(protoOf(Shadow_0)));
  }
  function Shadow_init_$Init$_0(radius, color, spread, offset, alpha, blendMode, $this) {
    color = color === VOID ? Companion_getInstance_21().get_Black_t4k9fh_k$() : color;
    var tmp;
    if (spread === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = spread;
    }
    spread = tmp;
    offset = offset === VOID ? Companion_getInstance_3().get_Zero_wu8ckh_k$() : offset;
    alpha = alpha === VOID ? 1.0 : alpha;
    blendMode = blendMode === VOID ? Companion_getInstance_47().get_DefaultBlendMode_svct2m_k$() : blendMode;
    var tmp_0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_0 = color;
    } else {
      tmp_0 = Companion_getInstance_21().get_Black_t4k9fh_k$();
    }
    Shadow_0.call($this, radius, spread, offset, tmp_0, null, alpha, blendMode);
    return $this;
  }
  function Shadow_init_$Create$_0(radius, color, spread, offset, alpha, blendMode) {
    return Shadow_init_$Init$_0(radius, color, spread, offset, alpha, blendMode, objectCreate(protoOf(Shadow_0)));
  }
  function Shadow_0(radius, spread, offset, color, brush, alpha, blendMode) {
    this.radius_1 = radius;
    this.spread_1 = spread;
    this.offset_1 = offset;
    this.blendMode_1 = blendMode;
    if (brush instanceof SolidColor) {
      this.color_1 = brush.get_value_za03u9_k$();
      this.brush_1 = null;
    } else {
      this.color_1 = color;
      this.brush_1 = brush;
    }
    this.alpha_1 = coerceIn_0(alpha, 0.0, 1.0);
  }
  protoOf(Shadow_0).get_radius_lj3jlk_k$ = function () {
    return this.radius_1;
  };
  protoOf(Shadow_0).get_spread_uzrbh5_k$ = function () {
    return this.spread_1;
  };
  protoOf(Shadow_0).get_offset_a4242c_k$ = function () {
    return this.offset_1;
  };
  protoOf(Shadow_0).get_blendMode_si209t_k$ = function () {
    return this.blendMode_1;
  };
  protoOf(Shadow_0).get_color_lnp1vl_k$ = function () {
    return this.color_1;
  };
  protoOf(Shadow_0).get_brush_ipcjyp_k$ = function () {
    return this.brush_1;
  };
  protoOf(Shadow_0).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Shadow_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shadow_0))
      return false;
    if (!equals(this.radius_1, other.radius_1))
      return false;
    if (!equals(this.spread_1, other.spread_1))
      return false;
    if (!equals(this.offset_1, other.offset_1))
      return false;
    if (!(this.alpha_1 === other.alpha_1))
      return false;
    if (!(this.blendMode_1 === other.blendMode_1))
      return false;
    if (!equals(this.color_1, other.color_1))
      return false;
    if (!equals(this.brush_1, other.brush_1))
      return false;
    return true;
  };
  protoOf(Shadow_0).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.radius_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.spread_1) | 0;
    result = imul(31, result) + DpOffset__hashCode_impl_mjg9df(this.offset_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.alpha_1) | 0;
    result = imul(31, result) + BlendMode__hashCode_impl_93ceri(this.blendMode_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.color_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.brush_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(Shadow_0).toString = function () {
    return 'ShadowParams(radius=' + Dp__toString_impl_kcddez(this.radius_1) + ', spread=' + Dp__toString_impl_kcddez(this.spread_1) + ', offset=' + DpOffset__toString_impl_qqhvsu(this.offset_1) + ', alpha=' + this.alpha_1 + ', ' + ('blendMode=' + BlendMode__toString_impl_uuibkd(this.blendMode_1) + ', color=' + Color__toString_impl_hpzmaq(this.color_1) + ', brush=' + toString_0(this.brush_1) + ')');
  };
  protoOf(Shadow_0).copyWithoutOffset_nou6t9_k$ = function () {
    return new Shadow_0(this.radius_1, this.spread_1, Companion_getInstance_3().get_Zero_wu8ckh_k$(), this.color_1, this.brush_1, this.alpha_1, this.blendMode_1);
  };
  function ShadowContext() {
  }
  function PlatformShadowContext() {
  }
  function _set_path__9s3vma($this, _set____db54di) {
    $this.path_1 = _set____db54di;
  }
  function _get_path__dbvv7q($this) {
    return $this.path_1;
  }
  function _set_shadowTint__sv1osc($this, _set____db54di) {
    $this.shadowTint_1 = _set____db54di;
  }
  function _get_shadowTint__dst3n4($this) {
    return $this.shadowTint_1;
  }
  function _set_shadowTintColor__u0faeb($this, _set____db54di) {
    $this.shadowTintColor_1 = _set____db54di;
  }
  function _get_shadowTintColor__jwp2vr($this) {
    return $this.shadowTintColor_1;
  }
  function _set_cornerRadius__4rvu34($this, _set____db54di) {
    $this.cornerRadius_1 = _set____db54di;
  }
  function _get_cornerRadius__aruwh0($this) {
    return $this.cornerRadius_1;
  }
  function _set_generatedSize__3gercb($this, _set____db54di) {
    $this.generatedSize_1 = _set____db54di;
  }
  function _get_generatedSize__io69un($this) {
    return $this.generatedSize_1;
  }
  function _set_generatedLayoutDirection__6sek3z($this, _set____db54di) {
    $this.generatedLayoutDirection_1 = _set____db54di;
  }
  function _get_generatedLayoutDirection__2a1cgr($this) {
    return $this.generatedLayoutDirection_1;
  }
  function _set_generatedDensity__s7uvz6($this, _set____db54di) {
    $this.generatedDensity_1 = _set____db54di;
  }
  function _get_generatedDensity__v9d3m($this) {
    return $this.generatedDensity_1;
  }
  function obtainTint($this, color) {
    var colorFilter = $this.shadowTint_1;
    if (colorFilter == null || !equals($this.shadowTintColor_1, color)) {
      colorFilter = Companion_getInstance_22().tint$default_jnxvki_k$(color);
      $this.shadowTintColor_1 = color;
      $this.shadowTint_1 = colorFilter;
    }
    return colorFilter;
  }
  function updateParamsFromOutline($this, outline) {
    if (outline instanceof Generic) {
      $this.path_1 = outline.get_path_wos8ry_k$();
      $this.cornerRadius_1 = Companion_getInstance_2().get_Zero_r4zx17_k$();
    } else {
      if (outline instanceof Rounded) {
        if (get_isSimple(outline.get_roundRect_8fhall_k$())) {
          $this.path_1 = null;
          $this.cornerRadius_1 = outline.get_roundRect_8fhall_k$().get_topLeftCornerRadius_91hulg_k$();
        } else {
          $this.path_1 = outline.get_roundRectPath_qg5rxn_k$();
          $this.cornerRadius_1 = Companion_getInstance_2().get_Zero_r4zx17_k$();
        }
      } else {
        if (outline instanceof Rectangle) {
          $this.path_1 = null;
          $this.cornerRadius_1 = Companion_getInstance_2().get_Zero_r4zx17_k$();
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  }
  function ShadowRenderer(outline) {
    this.outline_1 = outline;
    this.path_1 = null;
    this.shadowTint_1 = null;
    this.shadowTintColor_1 = Companion_getInstance_21().get_Unspecified_j397pn_k$();
    this.cornerRadius_1 = Companion_getInstance_2().get_Zero_r4zx17_k$();
    this.generatedSize_1 = Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
    this.generatedLayoutDirection_1 = LayoutDirection_Ltr_getInstance();
    this.generatedDensity_1 = 1.0;
  }
  protoOf(ShadowRenderer).get_outline_h12qhz_k$ = function () {
    return this.outline_1;
  };
  protoOf(ShadowRenderer).drawShadow_1t94r3_k$ = function (_this__u8e3s4, colorFilter, size, color, brush, alpha, blendMode) {
    updateParamsFromOutline(this, this.outline_1);
    var tmp;
    if (!(colorFilter == null)) {
      tmp = colorFilter;
    } else {
      var tmp_0;
      if (brush == null) {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        tmp_0 = !equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)));
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = obtainTint(this, color);
      } else {
        tmp = null;
      }
    }
    var filter = tmp;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    var this_0 = this.generatedSize_1;
    if (equalsLong(_Size___get_packedValue__impl__7rlt1o(this_0), new Long(2143289344, 2143289344))) {
      tmp_3 = true;
    } else {
      tmp_3 = !equals(this.generatedSize_1, size);
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = !this.generatedLayoutDirection_1.equals(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = !(this.generatedDensity_1 === _this__u8e3s4.get_density_qy0267_k$());
    }
    if (tmp_1) {
      this.buildShadow_s368a7_k$(_this__u8e3s4, size, this.cornerRadius_1, this.path_1);
      this.generatedSize_1 = size;
      this.generatedLayoutDirection_1 = _this__u8e3s4.get_layoutDirection_7e37v0_k$();
      this.generatedDensity_1 = _this__u8e3s4.get_density_qy0267_k$();
    }
    this.onDrawShadow_28ei4t_k$(_this__u8e3s4, size, this.cornerRadius_1, this.path_1, alpha, filter, brush, blendMode);
  };
  protoOf(ShadowRenderer).invalidateShadow_o6tcvf_k$ = function () {
    this.generatedSize_1 = Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
    this.generatedLayoutDirection_1 = LayoutDirection_Ltr_getInstance();
    this.generatedDensity_1 = 1.0;
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
    var bits = mantissa;
    // Inline function 'kotlin.fromBits' call
    DoubleCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.graphics.vector.pack' call
    var value_4 = doubleFromBits(bits);
    return bitwiseOr(shiftLeft(fromInt(tmp0_9), 32), bitwiseAnd(fromInt(toRawBits(value_4)), new Long(-1, 0)));
  }
  function get_index(_this__u8e3s4) {
    _init_properties_FastFloatParser_kt__fk9z4j();
    return convertToInt(shiftRightUnsigned(_this__u8e3s4, 32));
  }
  function get_floatValue(_this__u8e3s4) {
    _init_properties_FastFloatParser_kt__fk9z4j();
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(_this__u8e3s4, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function pack(index, value) {
    _init_properties_FastFloatParser_kt__fk9z4j();
    return bitwiseOr(shiftLeft(fromInt(index), 32), bitwiseAnd(fromInt(toRawBits(value)), new Long(-1, 0)));
  }
  function get_isDigit(_this__u8e3s4) {
    _init_properties_FastFloatParser_kt__fk9z4j();
    // Inline function 'kotlin.code' call
    var this_0 = numberToChar(Char__minus_impl_a2frrh(_this__u8e3s4, _Char___init__impl__6a9atx(48)));
    return Char__toInt_impl_vasixd(this_0) < 10;
  }
  function parseFourDigits(str, offset) {
    _init_properties_FastFloatParser_kt__fk9z4j();
    // Inline function 'kotlin.code' call
    var this_0 = charCodeAt(str, offset);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    var tmp = fromInt(tmp$ret$0);
    // Inline function 'kotlin.code' call
    var this_1 = charCodeAt(str, offset + 1 | 0);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
    var tmp_0 = bitwiseOr(tmp, shiftLeft(fromInt(tmp$ret$1), 16));
    // Inline function 'kotlin.code' call
    var this_2 = charCodeAt(str, offset + 2 | 0);
    var tmp$ret$2 = Char__toInt_impl_vasixd(this_2);
    var tmp_1 = bitwiseOr(tmp_0, shiftLeft(fromInt(tmp$ret$2), 32));
    // Inline function 'kotlin.code' call
    var this_3 = charCodeAt(str, offset + 3 | 0);
    var tmp$ret$3 = Char__toInt_impl_vasixd(this_3);
    var v = bitwiseOr(tmp_1, shiftLeft(fromInt(tmp$ret$3), 48));
    var base = subtract(v, new Long(3145776, 3145776));
    var predicate = bitwiseOr(add(v, new Long(4587590, 4587590)), base);
    var tmp_2;
    // Inline function 'kotlin.ULong.toLong' call
    var this_4 = _ULong___init__impl__c78o9k(new Long(-8323200, -8323200));
    var tmp$ret$4 = _ULong___get_data__impl__fggpzb(this_4);
    if (!equalsLong(bitwiseAnd(predicate, tmp$ret$4), new Long(0, 0))) {
      tmp_2 = -1;
    } else {
      tmp_2 = convertToInt(shiftRightUnsigned(multiply(base, new Long(655361, 65536100)), 48));
    }
    return tmp_2;
  }
  function fullMultiplicationHighBits(x, y) {
    _init_properties_FastFloatParser_kt__fk9z4j();
    var xLo = bitwiseAnd(x, new Long(-1, 0));
    var xHi = shiftRightUnsigned(x, 32);
    var yLo = bitwiseAnd(y, new Long(-1, 0));
    var yHi = shiftRightUnsigned(y, 32);
    var xTimesYHi = multiply(xHi, yHi);
    var xTimesYMid = multiply(xLo, yHi);
    var yTimesXMid = multiply(xHi, yLo);
    var xTimesYLo = multiply(xLo, yLo);
    var carry = add(add(yTimesXMid, shiftRightUnsigned(xTimesYLo, 32)), bitwiseAnd(xTimesYMid, new Long(-1, 0)));
    return add(add(xTimesYHi, shiftRightUnsigned(carry, 32)), shiftRightUnsigned(xTimesYMid, 32));
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
  function _get__nodes__5n7ucn($this) {
    return $this._nodes_1;
  }
  function PathBuilder() {
    this._nodes_1 = ArrayList_init_$Create$(32);
  }
  protoOf(PathBuilder).get_nodes_ivvt6w_k$ = function () {
    return this._nodes_1;
  };
  protoOf(PathBuilder).close_1keygo_k$ = function () {
    this._nodes_1.add_utx5q5_k$(Close_getInstance());
    return this;
  };
  protoOf(PathBuilder).moveTo_n8tdjo_k$ = function (x, y) {
    this._nodes_1.add_utx5q5_k$(new MoveTo(x, y));
    return this;
  };
  protoOf(PathBuilder).moveToRelative_2s28m0_k$ = function (dx, dy) {
    this._nodes_1.add_utx5q5_k$(new RelativeMoveTo(dx, dy));
    return this;
  };
  protoOf(PathBuilder).lineTo_985bqp_k$ = function (x, y) {
    this._nodes_1.add_utx5q5_k$(new LineTo(x, y));
    return this;
  };
  protoOf(PathBuilder).lineToRelative_h8lj2d_k$ = function (dx, dy) {
    this._nodes_1.add_utx5q5_k$(new RelativeLineTo(dx, dy));
    return this;
  };
  protoOf(PathBuilder).horizontalLineTo_w9x139_k$ = function (x) {
    this._nodes_1.add_utx5q5_k$(new HorizontalTo(x));
    return this;
  };
  protoOf(PathBuilder).horizontalLineToRelative_8skmzd_k$ = function (dx) {
    this._nodes_1.add_utx5q5_k$(new RelativeHorizontalTo(dx));
    return this;
  };
  protoOf(PathBuilder).verticalLineTo_1gpzkd_k$ = function (y) {
    this._nodes_1.add_utx5q5_k$(new VerticalTo(y));
    return this;
  };
  protoOf(PathBuilder).verticalLineToRelative_io0vy1_k$ = function (dy) {
    this._nodes_1.add_utx5q5_k$(new RelativeVerticalTo(dy));
    return this;
  };
  protoOf(PathBuilder).curveTo_y0llje_k$ = function (x1, y1, x2, y2, x3, y3) {
    this._nodes_1.add_utx5q5_k$(new CurveTo(x1, y1, x2, y2, x3, y3));
    return this;
  };
  protoOf(PathBuilder).curveToRelative_jg9hoq_k$ = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    this._nodes_1.add_utx5q5_k$(new RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3));
    return this;
  };
  protoOf(PathBuilder).reflectiveCurveTo_z3m11r_k$ = function (x1, y1, x2, y2) {
    this._nodes_1.add_utx5q5_k$(new ReflectiveCurveTo(x1, y1, x2, y2));
    return this;
  };
  protoOf(PathBuilder).reflectiveCurveToRelative_y66nqz_k$ = function (dx1, dy1, dx2, dy2) {
    this._nodes_1.add_utx5q5_k$(new RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2));
    return this;
  };
  protoOf(PathBuilder).quadTo_nivwo2_k$ = function (x1, y1, x2, y2) {
    this._nodes_1.add_utx5q5_k$(new QuadTo(x1, y1, x2, y2));
    return this;
  };
  protoOf(PathBuilder).quadToRelative_qc17gu_k$ = function (dx1, dy1, dx2, dy2) {
    this._nodes_1.add_utx5q5_k$(new RelativeQuadTo(dx1, dy1, dx2, dy2));
    return this;
  };
  protoOf(PathBuilder).reflectiveQuadTo_qoxryb_k$ = function (x1, y1) {
    this._nodes_1.add_utx5q5_k$(new ReflectiveQuadTo(x1, y1));
    return this;
  };
  protoOf(PathBuilder).reflectiveQuadToRelative_vlfq3b_k$ = function (dx1, dy1) {
    this._nodes_1.add_utx5q5_k$(new RelativeReflectiveQuadTo(dx1, dy1));
    return this;
  };
  protoOf(PathBuilder).arcTo_e72hf9_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, x1, y1) {
    this._nodes_1.add_utx5q5_k$(new ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, x1, y1));
    return this;
  };
  protoOf(PathBuilder).arcToRelative_r16z1b_k$ = function (a, b, theta, isMoreThanHalf, isPositiveArc, dx1, dy1) {
    this._nodes_1.add_utx5q5_k$(new RelativeArcTo(a, b, theta, isMoreThanHalf, isPositiveArc, dx1, dy1));
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
    this.dx_1 = dx;
    this.dy_1 = dy;
  }
  protoOf(RelativeMoveTo).get_dx_knto0z_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeMoveTo).get_dy_knto0y_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeMoveTo).component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeMoveTo).component2_7eebsb_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeMoveTo).copy_4tzoad_k$ = function (dx, dy) {
    return new RelativeMoveTo(dx, dy);
  };
  protoOf(RelativeMoveTo).copy$default_8h4itw_k$ = function (dx, dy, $super) {
    dx = dx === VOID ? this.dx_1 : dx;
    dy = dy === VOID ? this.dy_1 : dy;
    return $super === VOID ? this.copy_4tzoad_k$(dx, dy) : $super.copy_4tzoad_k$.call(this, dx, dy);
  };
  protoOf(RelativeMoveTo).toString = function () {
    return 'RelativeMoveTo(dx=' + this.dx_1 + ', dy=' + this.dy_1 + ')';
  };
  protoOf(RelativeMoveTo).hashCode = function () {
    var result = getNumberHashCode(this.dx_1);
    result = imul(result, 31) + getNumberHashCode(this.dy_1) | 0;
    return result;
  };
  protoOf(RelativeMoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeMoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeMoveTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  function MoveTo(x, y) {
    PathNode.call(this);
    this.x_1 = x;
    this.y_1 = y;
  }
  protoOf(MoveTo).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(MoveTo).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(MoveTo).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(MoveTo).component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  protoOf(MoveTo).copy_4tzoad_k$ = function (x, y) {
    return new MoveTo(x, y);
  };
  protoOf(MoveTo).copy$default_4gel34_k$ = function (x, y, $super) {
    x = x === VOID ? this.x_1 : x;
    y = y === VOID ? this.y_1 : y;
    return $super === VOID ? this.copy_4tzoad_k$(x, y) : $super.copy_4tzoad_k$.call(this, x, y);
  };
  protoOf(MoveTo).toString = function () {
    return 'MoveTo(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  protoOf(MoveTo).hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  protoOf(MoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof MoveTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  function RelativeLineTo(dx, dy) {
    PathNode.call(this);
    this.dx_1 = dx;
    this.dy_1 = dy;
  }
  protoOf(RelativeLineTo).get_dx_knto0z_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeLineTo).get_dy_knto0y_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeLineTo).component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeLineTo).component2_7eebsb_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeLineTo).copy_4tzoad_k$ = function (dx, dy) {
    return new RelativeLineTo(dx, dy);
  };
  protoOf(RelativeLineTo).copy$default_usatdd_k$ = function (dx, dy, $super) {
    dx = dx === VOID ? this.dx_1 : dx;
    dy = dy === VOID ? this.dy_1 : dy;
    return $super === VOID ? this.copy_4tzoad_k$(dx, dy) : $super.copy_4tzoad_k$.call(this, dx, dy);
  };
  protoOf(RelativeLineTo).toString = function () {
    return 'RelativeLineTo(dx=' + this.dx_1 + ', dy=' + this.dy_1 + ')';
  };
  protoOf(RelativeLineTo).hashCode = function () {
    var result = getNumberHashCode(this.dx_1);
    result = imul(result, 31) + getNumberHashCode(this.dy_1) | 0;
    return result;
  };
  protoOf(RelativeLineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeLineTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeLineTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  function LineTo(x, y) {
    PathNode.call(this);
    this.x_1 = x;
    this.y_1 = y;
  }
  protoOf(LineTo).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(LineTo).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(LineTo).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(LineTo).component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  protoOf(LineTo).copy_4tzoad_k$ = function (x, y) {
    return new LineTo(x, y);
  };
  protoOf(LineTo).copy$default_qrkvml_k$ = function (x, y, $super) {
    x = x === VOID ? this.x_1 : x;
    y = y === VOID ? this.y_1 : y;
    return $super === VOID ? this.copy_4tzoad_k$(x, y) : $super.copy_4tzoad_k$.call(this, x, y);
  };
  protoOf(LineTo).toString = function () {
    return 'LineTo(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  protoOf(LineTo).hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  protoOf(LineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineTo))
      return false;
    var tmp0_other_with_cast = other instanceof LineTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  function RelativeHorizontalTo(dx) {
    PathNode.call(this);
    this.dx_1 = dx;
  }
  protoOf(RelativeHorizontalTo).get_dx_knto0z_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeHorizontalTo).component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeHorizontalTo).copy_s06gv7_k$ = function (dx) {
    return new RelativeHorizontalTo(dx);
  };
  protoOf(RelativeHorizontalTo).copy$default_v56tl4_k$ = function (dx, $super) {
    dx = dx === VOID ? this.dx_1 : dx;
    return $super === VOID ? this.copy_s06gv7_k$(dx) : $super.copy_s06gv7_k$.call(this, dx);
  };
  protoOf(RelativeHorizontalTo).toString = function () {
    return 'RelativeHorizontalTo(dx=' + this.dx_1 + ')';
  };
  protoOf(RelativeHorizontalTo).hashCode = function () {
    return getNumberHashCode(this.dx_1);
  };
  protoOf(RelativeHorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeHorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeHorizontalTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    return true;
  };
  function HorizontalTo(x) {
    PathNode.call(this);
    this.x_1 = x;
  }
  protoOf(HorizontalTo).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(HorizontalTo).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(HorizontalTo).copy_s06gv7_k$ = function (x) {
    return new HorizontalTo(x);
  };
  protoOf(HorizontalTo).copy$default_4an5cc_k$ = function (x, $super) {
    x = x === VOID ? this.x_1 : x;
    return $super === VOID ? this.copy_s06gv7_k$(x) : $super.copy_s06gv7_k$.call(this, x);
  };
  protoOf(HorizontalTo).toString = function () {
    return 'HorizontalTo(x=' + this.x_1 + ')';
  };
  protoOf(HorizontalTo).hashCode = function () {
    return getNumberHashCode(this.x_1);
  };
  protoOf(HorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof HorizontalTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    return true;
  };
  function RelativeVerticalTo(dy) {
    PathNode.call(this);
    this.dy_1 = dy;
  }
  protoOf(RelativeVerticalTo).get_dy_knto0y_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeVerticalTo).component1_7eebsc_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeVerticalTo).copy_s06gv7_k$ = function (dy) {
    return new RelativeVerticalTo(dy);
  };
  protoOf(RelativeVerticalTo).copy$default_cuo5ze_k$ = function (dy, $super) {
    dy = dy === VOID ? this.dy_1 : dy;
    return $super === VOID ? this.copy_s06gv7_k$(dy) : $super.copy_s06gv7_k$.call(this, dy);
  };
  protoOf(RelativeVerticalTo).toString = function () {
    return 'RelativeVerticalTo(dy=' + this.dy_1 + ')';
  };
  protoOf(RelativeVerticalTo).hashCode = function () {
    return getNumberHashCode(this.dy_1);
  };
  protoOf(RelativeVerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeVerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeVerticalTo ? other : THROW_CCE();
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  function VerticalTo(y) {
    PathNode.call(this);
    this.y_1 = y;
  }
  protoOf(VerticalTo).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(VerticalTo).component1_7eebsc_k$ = function () {
    return this.y_1;
  };
  protoOf(VerticalTo).copy_s06gv7_k$ = function (y) {
    return new VerticalTo(y);
  };
  protoOf(VerticalTo).copy$default_6z7oi_k$ = function (y, $super) {
    y = y === VOID ? this.y_1 : y;
    return $super === VOID ? this.copy_s06gv7_k$(y) : $super.copy_s06gv7_k$.call(this, y);
  };
  protoOf(VerticalTo).toString = function () {
    return 'VerticalTo(y=' + this.y_1 + ')';
  };
  protoOf(VerticalTo).hashCode = function () {
    return getNumberHashCode(this.y_1);
  };
  protoOf(VerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof VerticalTo ? other : THROW_CCE();
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  function RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3) {
    PathNode.call(this, true);
    this.dx1__1 = dx1;
    this.dy1__1 = dy1;
    this.dx2__1 = dx2;
    this.dy2__1 = dy2;
    this.dx3__1 = dx3;
    this.dy3__1 = dy3;
  }
  protoOf(RelativeCurveTo).get_dx1_18j70s_k$ = function () {
    return this.dx1__1;
  };
  protoOf(RelativeCurveTo).get_dy1_18j6zx_k$ = function () {
    return this.dy1__1;
  };
  protoOf(RelativeCurveTo).get_dx2_18j70r_k$ = function () {
    return this.dx2__1;
  };
  protoOf(RelativeCurveTo).get_dy2_18j6zw_k$ = function () {
    return this.dy2__1;
  };
  protoOf(RelativeCurveTo).get_dx3_18j70q_k$ = function () {
    return this.dx3__1;
  };
  protoOf(RelativeCurveTo).get_dy3_18j6zv_k$ = function () {
    return this.dy3__1;
  };
  protoOf(RelativeCurveTo).component1_7eebsc_k$ = function () {
    return this.dx1__1;
  };
  protoOf(RelativeCurveTo).component2_7eebsb_k$ = function () {
    return this.dy1__1;
  };
  protoOf(RelativeCurveTo).component3_7eebsa_k$ = function () {
    return this.dx2__1;
  };
  protoOf(RelativeCurveTo).component4_7eebs9_k$ = function () {
    return this.dy2__1;
  };
  protoOf(RelativeCurveTo).component5_7eebs8_k$ = function () {
    return this.dx3__1;
  };
  protoOf(RelativeCurveTo).component6_7eebs7_k$ = function () {
    return this.dy3__1;
  };
  protoOf(RelativeCurveTo).copy_82jydn_k$ = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    return new RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  protoOf(RelativeCurveTo).copy$default_ql1ny2_k$ = function (dx1, dy1, dx2, dy2, dx3, dy3, $super) {
    dx1 = dx1 === VOID ? this.dx1__1 : dx1;
    dy1 = dy1 === VOID ? this.dy1__1 : dy1;
    dx2 = dx2 === VOID ? this.dx2__1 : dx2;
    dy2 = dy2 === VOID ? this.dy2__1 : dy2;
    dx3 = dx3 === VOID ? this.dx3__1 : dx3;
    dy3 = dy3 === VOID ? this.dy3__1 : dy3;
    return $super === VOID ? this.copy_82jydn_k$(dx1, dy1, dx2, dy2, dx3, dy3) : $super.copy_82jydn_k$.call(this, dx1, dy1, dx2, dy2, dx3, dy3);
  };
  protoOf(RelativeCurveTo).toString = function () {
    return 'RelativeCurveTo(dx1=' + this.dx1__1 + ', dy1=' + this.dy1__1 + ', dx2=' + this.dx2__1 + ', dy2=' + this.dy2__1 + ', dx3=' + this.dx3__1 + ', dy3=' + this.dy3__1 + ')';
  };
  protoOf(RelativeCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.dx1__1);
    result = imul(result, 31) + getNumberHashCode(this.dy1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx3__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy3__1) | 0;
    return result;
  };
  protoOf(RelativeCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeCurveTo ? other : THROW_CCE();
    if (!equals(this.dx1__1, tmp0_other_with_cast.dx1__1))
      return false;
    if (!equals(this.dy1__1, tmp0_other_with_cast.dy1__1))
      return false;
    if (!equals(this.dx2__1, tmp0_other_with_cast.dx2__1))
      return false;
    if (!equals(this.dy2__1, tmp0_other_with_cast.dy2__1))
      return false;
    if (!equals(this.dx3__1, tmp0_other_with_cast.dx3__1))
      return false;
    if (!equals(this.dy3__1, tmp0_other_with_cast.dy3__1))
      return false;
    return true;
  };
  function CurveTo(x1, y1, x2, y2, x3, y3) {
    PathNode.call(this, true);
    this.x1__1 = x1;
    this.y1__1 = y1;
    this.x2__1 = x2;
    this.y2__1 = y2;
    this.x3__1 = x3;
    this.y3__1 = y3;
  }
  protoOf(CurveTo).get_x1_kntnlq_k$ = function () {
    return this.x1__1;
  };
  protoOf(CurveTo).get_y1_kntnkv_k$ = function () {
    return this.y1__1;
  };
  protoOf(CurveTo).get_x2_kntnlp_k$ = function () {
    return this.x2__1;
  };
  protoOf(CurveTo).get_y2_kntnku_k$ = function () {
    return this.y2__1;
  };
  protoOf(CurveTo).get_x3_kntnlo_k$ = function () {
    return this.x3__1;
  };
  protoOf(CurveTo).get_y3_kntnkt_k$ = function () {
    return this.y3__1;
  };
  protoOf(CurveTo).component1_7eebsc_k$ = function () {
    return this.x1__1;
  };
  protoOf(CurveTo).component2_7eebsb_k$ = function () {
    return this.y1__1;
  };
  protoOf(CurveTo).component3_7eebsa_k$ = function () {
    return this.x2__1;
  };
  protoOf(CurveTo).component4_7eebs9_k$ = function () {
    return this.y2__1;
  };
  protoOf(CurveTo).component5_7eebs8_k$ = function () {
    return this.x3__1;
  };
  protoOf(CurveTo).component6_7eebs7_k$ = function () {
    return this.y3__1;
  };
  protoOf(CurveTo).copy_82jydn_k$ = function (x1, y1, x2, y2, x3, y3) {
    return new CurveTo(x1, y1, x2, y2, x3, y3);
  };
  protoOf(CurveTo).copy$default_uyb0tu_k$ = function (x1, y1, x2, y2, x3, y3, $super) {
    x1 = x1 === VOID ? this.x1__1 : x1;
    y1 = y1 === VOID ? this.y1__1 : y1;
    x2 = x2 === VOID ? this.x2__1 : x2;
    y2 = y2 === VOID ? this.y2__1 : y2;
    x3 = x3 === VOID ? this.x3__1 : x3;
    y3 = y3 === VOID ? this.y3__1 : y3;
    return $super === VOID ? this.copy_82jydn_k$(x1, y1, x2, y2, x3, y3) : $super.copy_82jydn_k$.call(this, x1, y1, x2, y2, x3, y3);
  };
  protoOf(CurveTo).toString = function () {
    return 'CurveTo(x1=' + this.x1__1 + ', y1=' + this.y1__1 + ', x2=' + this.x2__1 + ', y2=' + this.y2__1 + ', x3=' + this.x3__1 + ', y3=' + this.y3__1 + ')';
  };
  protoOf(CurveTo).hashCode = function () {
    var result = getNumberHashCode(this.x1__1);
    result = imul(result, 31) + getNumberHashCode(this.y1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x3__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y3__1) | 0;
    return result;
  };
  protoOf(CurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof CurveTo ? other : THROW_CCE();
    if (!equals(this.x1__1, tmp0_other_with_cast.x1__1))
      return false;
    if (!equals(this.y1__1, tmp0_other_with_cast.y1__1))
      return false;
    if (!equals(this.x2__1, tmp0_other_with_cast.x2__1))
      return false;
    if (!equals(this.y2__1, tmp0_other_with_cast.y2__1))
      return false;
    if (!equals(this.x3__1, tmp0_other_with_cast.x3__1))
      return false;
    if (!equals(this.y3__1, tmp0_other_with_cast.y3__1))
      return false;
    return true;
  };
  function RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, true);
    this.dx1__1 = dx1;
    this.dy1__1 = dy1;
    this.dx2__1 = dx2;
    this.dy2__1 = dy2;
  }
  protoOf(RelativeReflectiveCurveTo).get_dx1_18j70s_k$ = function () {
    return this.dx1__1;
  };
  protoOf(RelativeReflectiveCurveTo).get_dy1_18j6zx_k$ = function () {
    return this.dy1__1;
  };
  protoOf(RelativeReflectiveCurveTo).get_dx2_18j70r_k$ = function () {
    return this.dx2__1;
  };
  protoOf(RelativeReflectiveCurveTo).get_dy2_18j6zw_k$ = function () {
    return this.dy2__1;
  };
  protoOf(RelativeReflectiveCurveTo).component1_7eebsc_k$ = function () {
    return this.dx1__1;
  };
  protoOf(RelativeReflectiveCurveTo).component2_7eebsb_k$ = function () {
    return this.dy1__1;
  };
  protoOf(RelativeReflectiveCurveTo).component3_7eebsa_k$ = function () {
    return this.dx2__1;
  };
  protoOf(RelativeReflectiveCurveTo).component4_7eebs9_k$ = function () {
    return this.dy2__1;
  };
  protoOf(RelativeReflectiveCurveTo).copy_egrqb9_k$ = function (dx1, dy1, dx2, dy2) {
    return new RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2);
  };
  protoOf(RelativeReflectiveCurveTo).copy$default_kqsr53_k$ = function (dx1, dy1, dx2, dy2, $super) {
    dx1 = dx1 === VOID ? this.dx1__1 : dx1;
    dy1 = dy1 === VOID ? this.dy1__1 : dy1;
    dx2 = dx2 === VOID ? this.dx2__1 : dx2;
    dy2 = dy2 === VOID ? this.dy2__1 : dy2;
    return $super === VOID ? this.copy_egrqb9_k$(dx1, dy1, dx2, dy2) : $super.copy_egrqb9_k$.call(this, dx1, dy1, dx2, dy2);
  };
  protoOf(RelativeReflectiveCurveTo).toString = function () {
    return 'RelativeReflectiveCurveTo(dx1=' + this.dx1__1 + ', dy1=' + this.dy1__1 + ', dx2=' + this.dx2__1 + ', dy2=' + this.dy2__1 + ')';
  };
  protoOf(RelativeReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.dx1__1);
    result = imul(result, 31) + getNumberHashCode(this.dy1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy2__1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.dx1__1, tmp0_other_with_cast.dx1__1))
      return false;
    if (!equals(this.dy1__1, tmp0_other_with_cast.dy1__1))
      return false;
    if (!equals(this.dx2__1, tmp0_other_with_cast.dx2__1))
      return false;
    if (!equals(this.dy2__1, tmp0_other_with_cast.dy2__1))
      return false;
    return true;
  };
  function ReflectiveCurveTo(x1, y1, x2, y2) {
    PathNode.call(this, true);
    this.x1__1 = x1;
    this.y1__1 = y1;
    this.x2__1 = x2;
    this.y2__1 = y2;
  }
  protoOf(ReflectiveCurveTo).get_x1_kntnlq_k$ = function () {
    return this.x1__1;
  };
  protoOf(ReflectiveCurveTo).get_y1_kntnkv_k$ = function () {
    return this.y1__1;
  };
  protoOf(ReflectiveCurveTo).get_x2_kntnlp_k$ = function () {
    return this.x2__1;
  };
  protoOf(ReflectiveCurveTo).get_y2_kntnku_k$ = function () {
    return this.y2__1;
  };
  protoOf(ReflectiveCurveTo).component1_7eebsc_k$ = function () {
    return this.x1__1;
  };
  protoOf(ReflectiveCurveTo).component2_7eebsb_k$ = function () {
    return this.y1__1;
  };
  protoOf(ReflectiveCurveTo).component3_7eebsa_k$ = function () {
    return this.x2__1;
  };
  protoOf(ReflectiveCurveTo).component4_7eebs9_k$ = function () {
    return this.y2__1;
  };
  protoOf(ReflectiveCurveTo).copy_egrqb9_k$ = function (x1, y1, x2, y2) {
    return new ReflectiveCurveTo(x1, y1, x2, y2);
  };
  protoOf(ReflectiveCurveTo).copy$default_ulf9q3_k$ = function (x1, y1, x2, y2, $super) {
    x1 = x1 === VOID ? this.x1__1 : x1;
    y1 = y1 === VOID ? this.y1__1 : y1;
    x2 = x2 === VOID ? this.x2__1 : x2;
    y2 = y2 === VOID ? this.y2__1 : y2;
    return $super === VOID ? this.copy_egrqb9_k$(x1, y1, x2, y2) : $super.copy_egrqb9_k$.call(this, x1, y1, x2, y2);
  };
  protoOf(ReflectiveCurveTo).toString = function () {
    return 'ReflectiveCurveTo(x1=' + this.x1__1 + ', y1=' + this.y1__1 + ', x2=' + this.x2__1 + ', y2=' + this.y2__1 + ')';
  };
  protoOf(ReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.x1__1);
    result = imul(result, 31) + getNumberHashCode(this.y1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y2__1) | 0;
    return result;
  };
  protoOf(ReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.x1__1, tmp0_other_with_cast.x1__1))
      return false;
    if (!equals(this.y1__1, tmp0_other_with_cast.y1__1))
      return false;
    if (!equals(this.x2__1, tmp0_other_with_cast.x2__1))
      return false;
    if (!equals(this.y2__1, tmp0_other_with_cast.y2__1))
      return false;
    return true;
  };
  function RelativeQuadTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, VOID, true);
    this.dx1__1 = dx1;
    this.dy1__1 = dy1;
    this.dx2__1 = dx2;
    this.dy2__1 = dy2;
  }
  protoOf(RelativeQuadTo).get_dx1_18j70s_k$ = function () {
    return this.dx1__1;
  };
  protoOf(RelativeQuadTo).get_dy1_18j6zx_k$ = function () {
    return this.dy1__1;
  };
  protoOf(RelativeQuadTo).get_dx2_18j70r_k$ = function () {
    return this.dx2__1;
  };
  protoOf(RelativeQuadTo).get_dy2_18j6zw_k$ = function () {
    return this.dy2__1;
  };
  protoOf(RelativeQuadTo).component1_7eebsc_k$ = function () {
    return this.dx1__1;
  };
  protoOf(RelativeQuadTo).component2_7eebsb_k$ = function () {
    return this.dy1__1;
  };
  protoOf(RelativeQuadTo).component3_7eebsa_k$ = function () {
    return this.dx2__1;
  };
  protoOf(RelativeQuadTo).component4_7eebs9_k$ = function () {
    return this.dy2__1;
  };
  protoOf(RelativeQuadTo).copy_egrqb9_k$ = function (dx1, dy1, dx2, dy2) {
    return new RelativeQuadTo(dx1, dy1, dx2, dy2);
  };
  protoOf(RelativeQuadTo).copy$default_bfb1ao_k$ = function (dx1, dy1, dx2, dy2, $super) {
    dx1 = dx1 === VOID ? this.dx1__1 : dx1;
    dy1 = dy1 === VOID ? this.dy1__1 : dy1;
    dx2 = dx2 === VOID ? this.dx2__1 : dx2;
    dy2 = dy2 === VOID ? this.dy2__1 : dy2;
    return $super === VOID ? this.copy_egrqb9_k$(dx1, dy1, dx2, dy2) : $super.copy_egrqb9_k$.call(this, dx1, dy1, dx2, dy2);
  };
  protoOf(RelativeQuadTo).toString = function () {
    return 'RelativeQuadTo(dx1=' + this.dx1__1 + ', dy1=' + this.dy1__1 + ', dx2=' + this.dx2__1 + ', dy2=' + this.dy2__1 + ')';
  };
  protoOf(RelativeQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.dx1__1);
    result = imul(result, 31) + getNumberHashCode(this.dy1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dx2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.dy2__1) | 0;
    return result;
  };
  protoOf(RelativeQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeQuadTo ? other : THROW_CCE();
    if (!equals(this.dx1__1, tmp0_other_with_cast.dx1__1))
      return false;
    if (!equals(this.dy1__1, tmp0_other_with_cast.dy1__1))
      return false;
    if (!equals(this.dx2__1, tmp0_other_with_cast.dx2__1))
      return false;
    if (!equals(this.dy2__1, tmp0_other_with_cast.dy2__1))
      return false;
    return true;
  };
  function QuadTo(x1, y1, x2, y2) {
    PathNode.call(this, VOID, true);
    this.x1__1 = x1;
    this.y1__1 = y1;
    this.x2__1 = x2;
    this.y2__1 = y2;
  }
  protoOf(QuadTo).get_x1_kntnlq_k$ = function () {
    return this.x1__1;
  };
  protoOf(QuadTo).get_y1_kntnkv_k$ = function () {
    return this.y1__1;
  };
  protoOf(QuadTo).get_x2_kntnlp_k$ = function () {
    return this.x2__1;
  };
  protoOf(QuadTo).get_y2_kntnku_k$ = function () {
    return this.y2__1;
  };
  protoOf(QuadTo).component1_7eebsc_k$ = function () {
    return this.x1__1;
  };
  protoOf(QuadTo).component2_7eebsb_k$ = function () {
    return this.y1__1;
  };
  protoOf(QuadTo).component3_7eebsa_k$ = function () {
    return this.x2__1;
  };
  protoOf(QuadTo).component4_7eebs9_k$ = function () {
    return this.y2__1;
  };
  protoOf(QuadTo).copy_egrqb9_k$ = function (x1, y1, x2, y2) {
    return new QuadTo(x1, y1, x2, y2);
  };
  protoOf(QuadTo).copy$default_oon1vg_k$ = function (x1, y1, x2, y2, $super) {
    x1 = x1 === VOID ? this.x1__1 : x1;
    y1 = y1 === VOID ? this.y1__1 : y1;
    x2 = x2 === VOID ? this.x2__1 : x2;
    y2 = y2 === VOID ? this.y2__1 : y2;
    return $super === VOID ? this.copy_egrqb9_k$(x1, y1, x2, y2) : $super.copy_egrqb9_k$.call(this, x1, y1, x2, y2);
  };
  protoOf(QuadTo).toString = function () {
    return 'QuadTo(x1=' + this.x1__1 + ', y1=' + this.y1__1 + ', x2=' + this.x2__1 + ', y2=' + this.y2__1 + ')';
  };
  protoOf(QuadTo).hashCode = function () {
    var result = getNumberHashCode(this.x1__1);
    result = imul(result, 31) + getNumberHashCode(this.y1__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x2__1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y2__1) | 0;
    return result;
  };
  protoOf(QuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof QuadTo ? other : THROW_CCE();
    if (!equals(this.x1__1, tmp0_other_with_cast.x1__1))
      return false;
    if (!equals(this.y1__1, tmp0_other_with_cast.y1__1))
      return false;
    if (!equals(this.x2__1, tmp0_other_with_cast.x2__1))
      return false;
    if (!equals(this.y2__1, tmp0_other_with_cast.y2__1))
      return false;
    return true;
  };
  function RelativeReflectiveQuadTo(dx, dy) {
    PathNode.call(this, VOID, true);
    this.dx_1 = dx;
    this.dy_1 = dy;
  }
  protoOf(RelativeReflectiveQuadTo).get_dx_knto0z_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeReflectiveQuadTo).get_dy_knto0y_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeReflectiveQuadTo).component1_7eebsc_k$ = function () {
    return this.dx_1;
  };
  protoOf(RelativeReflectiveQuadTo).component2_7eebsb_k$ = function () {
    return this.dy_1;
  };
  protoOf(RelativeReflectiveQuadTo).copy_4tzoad_k$ = function (dx, dy) {
    return new RelativeReflectiveQuadTo(dx, dy);
  };
  protoOf(RelativeReflectiveQuadTo).copy$default_9ulsub_k$ = function (dx, dy, $super) {
    dx = dx === VOID ? this.dx_1 : dx;
    dy = dy === VOID ? this.dy_1 : dy;
    return $super === VOID ? this.copy_4tzoad_k$(dx, dy) : $super.copy_4tzoad_k$.call(this, dx, dy);
  };
  protoOf(RelativeReflectiveQuadTo).toString = function () {
    return 'RelativeReflectiveQuadTo(dx=' + this.dx_1 + ', dy=' + this.dy_1 + ')';
  };
  protoOf(RelativeReflectiveQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.dx_1);
    result = imul(result, 31) + getNumberHashCode(this.dy_1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.dx_1, tmp0_other_with_cast.dx_1))
      return false;
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    return true;
  };
  function ReflectiveQuadTo(x, y) {
    PathNode.call(this, VOID, true);
    this.x_1 = x;
    this.y_1 = y;
  }
  protoOf(ReflectiveQuadTo).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(ReflectiveQuadTo).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(ReflectiveQuadTo).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(ReflectiveQuadTo).component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  protoOf(ReflectiveQuadTo).copy_4tzoad_k$ = function (x, y) {
    return new ReflectiveQuadTo(x, y);
  };
  protoOf(ReflectiveQuadTo).copy$default_tjvfvz_k$ = function (x, y, $super) {
    x = x === VOID ? this.x_1 : x;
    y = y === VOID ? this.y_1 : y;
    return $super === VOID ? this.copy_4tzoad_k$(x, y) : $super.copy_4tzoad_k$.call(this, x, y);
  };
  protoOf(ReflectiveQuadTo).toString = function () {
    return 'ReflectiveQuadTo(x=' + this.x_1 + ', y=' + this.y_1 + ')';
  };
  protoOf(ReflectiveQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    return result;
  };
  protoOf(ReflectiveQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    return true;
  };
  function RelativeArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) {
    PathNode.call(this);
    this.horizontalEllipseRadius_1 = horizontalEllipseRadius;
    this.verticalEllipseRadius_1 = verticalEllipseRadius;
    this.theta_1 = theta;
    this.isMoreThanHalf_1 = isMoreThanHalf;
    this.isPositiveArc_1 = isPositiveArc;
    this.arcStartDx_1 = arcStartDx;
    this.arcStartDy_1 = arcStartDy;
  }
  protoOf(RelativeArcTo).get_horizontalEllipseRadius_i0l277_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  protoOf(RelativeArcTo).get_verticalEllipseRadius_bilkpd_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  protoOf(RelativeArcTo).get_theta_iz24xh_k$ = function () {
    return this.theta_1;
  };
  protoOf(RelativeArcTo).get_isMoreThanHalf_ok4n2c_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  protoOf(RelativeArcTo).get_isPositiveArc_qpecd6_k$ = function () {
    return this.isPositiveArc_1;
  };
  protoOf(RelativeArcTo).get_arcStartDx_twxbvx_k$ = function () {
    return this.arcStartDx_1;
  };
  protoOf(RelativeArcTo).get_arcStartDy_twxbvy_k$ = function () {
    return this.arcStartDy_1;
  };
  protoOf(RelativeArcTo).component1_7eebsc_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  protoOf(RelativeArcTo).component2_7eebsb_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  protoOf(RelativeArcTo).component3_7eebsa_k$ = function () {
    return this.theta_1;
  };
  protoOf(RelativeArcTo).component4_7eebs9_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  protoOf(RelativeArcTo).component5_7eebs8_k$ = function () {
    return this.isPositiveArc_1;
  };
  protoOf(RelativeArcTo).component6_7eebs7_k$ = function () {
    return this.arcStartDx_1;
  };
  protoOf(RelativeArcTo).component7_7eebs6_k$ = function () {
    return this.arcStartDy_1;
  };
  protoOf(RelativeArcTo).copy_at02il_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) {
    return new RelativeArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy);
  };
  protoOf(RelativeArcTo).copy$default_fw0bl0_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy, $super) {
    horizontalEllipseRadius = horizontalEllipseRadius === VOID ? this.horizontalEllipseRadius_1 : horizontalEllipseRadius;
    verticalEllipseRadius = verticalEllipseRadius === VOID ? this.verticalEllipseRadius_1 : verticalEllipseRadius;
    theta = theta === VOID ? this.theta_1 : theta;
    isMoreThanHalf = isMoreThanHalf === VOID ? this.isMoreThanHalf_1 : isMoreThanHalf;
    isPositiveArc = isPositiveArc === VOID ? this.isPositiveArc_1 : isPositiveArc;
    arcStartDx = arcStartDx === VOID ? this.arcStartDx_1 : arcStartDx;
    arcStartDy = arcStartDy === VOID ? this.arcStartDy_1 : arcStartDy;
    return $super === VOID ? this.copy_at02il_k$(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) : $super.copy_at02il_k$.call(this, horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy);
  };
  protoOf(RelativeArcTo).toString = function () {
    return 'RelativeArcTo(horizontalEllipseRadius=' + this.horizontalEllipseRadius_1 + ', verticalEllipseRadius=' + this.verticalEllipseRadius_1 + ', theta=' + this.theta_1 + ', isMoreThanHalf=' + this.isMoreThanHalf_1 + ', isPositiveArc=' + this.isPositiveArc_1 + ', arcStartDx=' + this.arcStartDx_1 + ', arcStartDy=' + this.arcStartDy_1 + ')';
  };
  protoOf(RelativeArcTo).hashCode = function () {
    var result = getNumberHashCode(this.horizontalEllipseRadius_1);
    result = imul(result, 31) + getNumberHashCode(this.verticalEllipseRadius_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.theta_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isMoreThanHalf_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isPositiveArc_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartDx_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartDy_1) | 0;
    return result;
  };
  protoOf(RelativeArcTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeArcTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeArcTo ? other : THROW_CCE();
    if (!equals(this.horizontalEllipseRadius_1, tmp0_other_with_cast.horizontalEllipseRadius_1))
      return false;
    if (!equals(this.verticalEllipseRadius_1, tmp0_other_with_cast.verticalEllipseRadius_1))
      return false;
    if (!equals(this.theta_1, tmp0_other_with_cast.theta_1))
      return false;
    if (!(this.isMoreThanHalf_1 === tmp0_other_with_cast.isMoreThanHalf_1))
      return false;
    if (!(this.isPositiveArc_1 === tmp0_other_with_cast.isPositiveArc_1))
      return false;
    if (!equals(this.arcStartDx_1, tmp0_other_with_cast.arcStartDx_1))
      return false;
    if (!equals(this.arcStartDy_1, tmp0_other_with_cast.arcStartDy_1))
      return false;
    return true;
  };
  function ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) {
    PathNode.call(this);
    this.horizontalEllipseRadius_1 = horizontalEllipseRadius;
    this.verticalEllipseRadius_1 = verticalEllipseRadius;
    this.theta_1 = theta;
    this.isMoreThanHalf_1 = isMoreThanHalf;
    this.isPositiveArc_1 = isPositiveArc;
    this.arcStartX_1 = arcStartX;
    this.arcStartY_1 = arcStartY;
  }
  protoOf(ArcTo).get_horizontalEllipseRadius_i0l277_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  protoOf(ArcTo).get_verticalEllipseRadius_bilkpd_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  protoOf(ArcTo).get_theta_iz24xh_k$ = function () {
    return this.theta_1;
  };
  protoOf(ArcTo).get_isMoreThanHalf_ok4n2c_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  protoOf(ArcTo).get_isPositiveArc_qpecd6_k$ = function () {
    return this.isPositiveArc_1;
  };
  protoOf(ArcTo).get_arcStartX_stlj0h_k$ = function () {
    return this.arcStartX_1;
  };
  protoOf(ArcTo).get_arcStartY_stlj0g_k$ = function () {
    return this.arcStartY_1;
  };
  protoOf(ArcTo).component1_7eebsc_k$ = function () {
    return this.horizontalEllipseRadius_1;
  };
  protoOf(ArcTo).component2_7eebsb_k$ = function () {
    return this.verticalEllipseRadius_1;
  };
  protoOf(ArcTo).component3_7eebsa_k$ = function () {
    return this.theta_1;
  };
  protoOf(ArcTo).component4_7eebs9_k$ = function () {
    return this.isMoreThanHalf_1;
  };
  protoOf(ArcTo).component5_7eebs8_k$ = function () {
    return this.isPositiveArc_1;
  };
  protoOf(ArcTo).component6_7eebs7_k$ = function () {
    return this.arcStartX_1;
  };
  protoOf(ArcTo).component7_7eebs6_k$ = function () {
    return this.arcStartY_1;
  };
  protoOf(ArcTo).copy_at02il_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) {
    return new ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY);
  };
  protoOf(ArcTo).copy$default_r4lws8_k$ = function (horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY, $super) {
    horizontalEllipseRadius = horizontalEllipseRadius === VOID ? this.horizontalEllipseRadius_1 : horizontalEllipseRadius;
    verticalEllipseRadius = verticalEllipseRadius === VOID ? this.verticalEllipseRadius_1 : verticalEllipseRadius;
    theta = theta === VOID ? this.theta_1 : theta;
    isMoreThanHalf = isMoreThanHalf === VOID ? this.isMoreThanHalf_1 : isMoreThanHalf;
    isPositiveArc = isPositiveArc === VOID ? this.isPositiveArc_1 : isPositiveArc;
    arcStartX = arcStartX === VOID ? this.arcStartX_1 : arcStartX;
    arcStartY = arcStartY === VOID ? this.arcStartY_1 : arcStartY;
    return $super === VOID ? this.copy_at02il_k$(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) : $super.copy_at02il_k$.call(this, horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY);
  };
  protoOf(ArcTo).toString = function () {
    return 'ArcTo(horizontalEllipseRadius=' + this.horizontalEllipseRadius_1 + ', verticalEllipseRadius=' + this.verticalEllipseRadius_1 + ', theta=' + this.theta_1 + ', isMoreThanHalf=' + this.isMoreThanHalf_1 + ', isPositiveArc=' + this.isPositiveArc_1 + ', arcStartX=' + this.arcStartX_1 + ', arcStartY=' + this.arcStartY_1 + ')';
  };
  protoOf(ArcTo).hashCode = function () {
    var result = getNumberHashCode(this.horizontalEllipseRadius_1);
    result = imul(result, 31) + getNumberHashCode(this.verticalEllipseRadius_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.theta_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isMoreThanHalf_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isPositiveArc_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartX_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.arcStartY_1) | 0;
    return result;
  };
  protoOf(ArcTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArcTo))
      return false;
    var tmp0_other_with_cast = other instanceof ArcTo ? other : THROW_CCE();
    if (!equals(this.horizontalEllipseRadius_1, tmp0_other_with_cast.horizontalEllipseRadius_1))
      return false;
    if (!equals(this.verticalEllipseRadius_1, tmp0_other_with_cast.verticalEllipseRadius_1))
      return false;
    if (!equals(this.theta_1, tmp0_other_with_cast.theta_1))
      return false;
    if (!(this.isMoreThanHalf_1 === tmp0_other_with_cast.isMoreThanHalf_1))
      return false;
    if (!(this.isPositiveArc_1 === tmp0_other_with_cast.isPositiveArc_1))
      return false;
    if (!equals(this.arcStartX_1, tmp0_other_with_cast.arcStartX_1))
      return false;
    if (!equals(this.arcStartY_1, tmp0_other_with_cast.arcStartY_1))
      return false;
    return true;
  };
  function PathNode(isCurve, isQuad) {
    isCurve = isCurve === VOID ? false : isCurve;
    isQuad = isQuad === VOID ? false : isQuad;
    this.isCurve_1 = isCurve;
    this.isQuad_1 = isQuad;
  }
  protoOf(PathNode).get_isCurve_z9wfzw_k$ = function () {
    return this.isCurve_1;
  };
  protoOf(PathNode).get_isQuad_ew4yai_k$ = function () {
    return this.isQuad_1;
  };
  function addPathNodes(_this__u8e3s4, nodes, args, count) {
    if (_this__u8e3s4 === _Char___init__impl__6a9atx(122) || _this__u8e3s4 === _Char___init__impl__6a9atx(90))
      nodes.add_utx5q5_k$(Close_getInstance());
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
        nodes.add_utx5q5_k$(tmp$ret$0);
        index = index + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(76)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_0 = count - 2 | 0;
      var index_0 = 0;
      while (index_0 <= end_0) {
        var start_0 = index_0;
        var tmp$ret$2 = new LineTo(args[start_0], args[start_0 + 1 | 0]);
        nodes.add_utx5q5_k$(tmp$ret$2);
        index_0 = index_0 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(104)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_1 = count - 1 | 0;
      var index_1 = 0;
      while (index_1 <= end_1) {
        var start_1 = index_1;
        var tmp$ret$4 = new RelativeHorizontalTo(args[start_1]);
        nodes.add_utx5q5_k$(tmp$ret$4);
        index_1 = index_1 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(72)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_2 = count - 1 | 0;
      var index_2 = 0;
      while (index_2 <= end_2) {
        var start_2 = index_2;
        var tmp$ret$6 = new HorizontalTo(args[start_2]);
        nodes.add_utx5q5_k$(tmp$ret$6);
        index_2 = index_2 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(118)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_3 = count - 1 | 0;
      var index_3 = 0;
      while (index_3 <= end_3) {
        var start_3 = index_3;
        var tmp$ret$8 = new RelativeVerticalTo(args[start_3]);
        nodes.add_utx5q5_k$(tmp$ret$8);
        index_3 = index_3 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(86)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_4 = count - 1 | 0;
      var index_4 = 0;
      while (index_4 <= end_4) {
        var start_4 = index_4;
        var tmp$ret$10 = new VerticalTo(args[start_4]);
        nodes.add_utx5q5_k$(tmp$ret$10);
        index_4 = index_4 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(99)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_5 = count - 6 | 0;
      var index_5 = 0;
      while (index_5 <= end_5) {
        var start_5 = index_5;
        var tmp$ret$12 = new RelativeCurveTo(args[start_5], args[start_5 + 1 | 0], args[start_5 + 2 | 0], args[start_5 + 3 | 0], args[start_5 + 4 | 0], args[start_5 + 5 | 0]);
        nodes.add_utx5q5_k$(tmp$ret$12);
        index_5 = index_5 + 6 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(67)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_6 = count - 6 | 0;
      var index_6 = 0;
      while (index_6 <= end_6) {
        var start_6 = index_6;
        var tmp$ret$14 = new CurveTo(args[start_6], args[start_6 + 1 | 0], args[start_6 + 2 | 0], args[start_6 + 3 | 0], args[start_6 + 4 | 0], args[start_6 + 5 | 0]);
        nodes.add_utx5q5_k$(tmp$ret$14);
        index_6 = index_6 + 6 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(115)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_7 = count - 4 | 0;
      var index_7 = 0;
      while (index_7 <= end_7) {
        var start_7 = index_7;
        var tmp$ret$16 = new RelativeReflectiveCurveTo(args[start_7], args[start_7 + 1 | 0], args[start_7 + 2 | 0], args[start_7 + 3 | 0]);
        nodes.add_utx5q5_k$(tmp$ret$16);
        index_7 = index_7 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(83)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_8 = count - 4 | 0;
      var index_8 = 0;
      while (index_8 <= end_8) {
        var start_8 = index_8;
        var tmp$ret$18 = new ReflectiveCurveTo(args[start_8], args[start_8 + 1 | 0], args[start_8 + 2 | 0], args[start_8 + 3 | 0]);
        nodes.add_utx5q5_k$(tmp$ret$18);
        index_8 = index_8 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(113)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_9 = count - 4 | 0;
      var index_9 = 0;
      while (index_9 <= end_9) {
        var start_9 = index_9;
        var tmp$ret$20 = new RelativeQuadTo(args[start_9], args[start_9 + 1 | 0], args[start_9 + 2 | 0], args[start_9 + 3 | 0]);
        nodes.add_utx5q5_k$(tmp$ret$20);
        index_9 = index_9 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(81)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_10 = count - 4 | 0;
      var index_10 = 0;
      while (index_10 <= end_10) {
        var start_10 = index_10;
        var tmp$ret$22 = new QuadTo(args[start_10], args[start_10 + 1 | 0], args[start_10 + 2 | 0], args[start_10 + 3 | 0]);
        nodes.add_utx5q5_k$(tmp$ret$22);
        index_10 = index_10 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(116)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_11 = count - 2 | 0;
      var index_11 = 0;
      while (index_11 <= end_11) {
        var start_11 = index_11;
        var tmp$ret$24 = new RelativeReflectiveQuadTo(args[start_11], args[start_11 + 1 | 0]);
        nodes.add_utx5q5_k$(tmp$ret$24);
        index_11 = index_11 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(84)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_12 = count - 2 | 0;
      var index_12 = 0;
      while (index_12 <= end_12) {
        var start_12 = index_12;
        var tmp$ret$26 = new ReflectiveQuadTo(args[start_12], args[start_12 + 1 | 0]);
        nodes.add_utx5q5_k$(tmp$ret$26);
        index_12 = index_12 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(97)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_13 = count - 7 | 0;
      var index_13 = 0;
      while (index_13 <= end_13) {
        var start_13 = index_13;
        var tmp$ret$28 = new RelativeArcTo(args[start_13], args[start_13 + 1 | 0], args[start_13 + 2 | 0], !(compareTo(args[start_13 + 3 | 0], 0.0) === 0), !(compareTo(args[start_13 + 4 | 0], 0.0) === 0), args[start_13 + 5 | 0], args[start_13 + 6 | 0]);
        nodes.add_utx5q5_k$(tmp$ret$28);
        index_13 = index_13 + 7 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(65)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_14 = count - 7 | 0;
      var index_14 = 0;
      while (index_14 <= end_14) {
        var start_14 = index_14;
        var tmp$ret$30 = new ArcTo(args[start_14], args[start_14 + 1 | 0], args[start_14 + 2 | 0], !(compareTo(args[start_14 + 3 | 0], 0.0) === 0), !(compareTo(args[start_14 + 4 | 0], 0.0) === 0), args[start_14 + 5 | 0], args[start_14 + 6 | 0]);
        nodes.add_utx5q5_k$(tmp$ret$30);
        index_14 = index_14 + 7 | 0;
      }
    } else
      throw IllegalArgumentException_init_$Create$('Unknown command for: ' + toString_1(_this__u8e3s4));
  }
  function pathRelativeMoveNodeFromArgs(nodes, args, count) {
    var end = count - 2 | 0;
    if (end >= 0) {
      nodes.add_utx5q5_k$(new RelativeMoveTo(args[0], args[1]));
      var index = 2;
      while (index <= end) {
        nodes.add_utx5q5_k$(new RelativeLineTo(args[index], args[index + 1 | 0]));
        index = index + 2 | 0;
      }
    }
  }
  function pathMoveNodeFromArgs(nodes, args, count) {
    var end = count - 2 | 0;
    if (end >= 0) {
      nodes.add_utx5q5_k$(new MoveTo(args[0], args[1]));
      var index = 2;
      while (index <= end) {
        nodes.add_utx5q5_k$(new LineTo(args[index], args[index + 1 | 0]));
        index = index + 2 | 0;
      }
    }
  }
  function pathNodesFromArgs(nodes, args, count, numArgs, nodeFor) {
    var end = count - numArgs | 0;
    var index = 0;
    while (index <= end) {
      nodes.add_utx5q5_k$(nodeFor(args, index));
      index = index + numArgs | 0;
    }
  }
  function get_EmptyArray() {
    _init_properties_PathParser_kt__xn6mis();
    return EmptyArray;
  }
  var EmptyArray;
  function _set_nodes__ic7n3o($this, _set____db54di) {
    $this.nodes_1 = _set____db54di;
  }
  function _get_nodes__dowtds($this) {
    return $this.nodes_1;
  }
  function _set_nodeData__qft5rp($this, _set____db54di) {
    $this.nodeData_1 = _set____db54di;
  }
  function _get_nodeData__vsekqn($this) {
    return $this.nodeData_1;
  }
  function resizeNodeData($this, dataCount) {
    if (dataCount >= $this.nodeData_1.length) {
      var src = $this.nodeData_1;
      $this.nodeData_1 = new Float32Array(imul(dataCount, 2));
      var tmp2 = $this.nodeData_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = src.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = src;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, 0, endIndex);
    }
  }
  function PathParser() {
    this.nodes_1 = null;
    this.nodeData_1 = new Float32Array(64);
  }
  protoOf(PathParser).clear_j9egeb_k$ = function () {
    var tmp0_safe_receiver = this.nodes_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.clear_j9egeb_k$();
    }
  };
  protoOf(PathParser).parsePathString_nv3pov_k$ = function (pathData) {
    var dstNodes = this.nodes_1;
    if (dstNodes == null) {
      dstNodes = ArrayList_init_$Create$_0();
      this.nodes_1 = dstNodes;
    } else {
      dstNodes.clear_j9egeb_k$();
    }
    this.pathStringToNodes_bh9tty_k$(pathData, dstNodes);
    return this;
  };
  protoOf(PathParser).pathStringToNodes_bh9tty_k$ = function (pathData, nodes) {
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
            var bits = convertToInt(bitwiseAnd(result, new Long(-1, 0)));
            // Inline function 'kotlin.fromBits' call
            FloatCompanionObject_getInstance();
            var value = floatFromBits(bits);
            if (!isNaN_0(value)) {
              var tmp_2 = this.nodeData_1;
              var _unary__edvuaz_0 = dataCount;
              dataCount = _unary__edvuaz_0 + 1 | 0;
              tmp_2[_unary__edvuaz_0] = value;
              // Inline function 'androidx.compose.ui.graphics.vector.PathParser.resizeNodeData' call
              var dataCount_0 = dataCount;
              if (dataCount_0 >= this.nodeData_1.length) {
                var src = this.nodeData_1;
                this.nodeData_1 = new Float32Array(imul(dataCount_0, 2));
                var tmp2 = this.nodeData_1;
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
        addPathNodes(command, nodes, this.nodeData_1, dataCount);
      }
    }
    return nodes;
  };
  protoOf(PathParser).pathStringToNodes$default_nfjkol_k$ = function (pathData, nodes, $super) {
    nodes = nodes === VOID ? ArrayList_init_$Create$_0() : nodes;
    return $super === VOID ? this.pathStringToNodes_bh9tty_k$(pathData, nodes) : $super.pathStringToNodes_bh9tty_k$.call(this, pathData, nodes);
  };
  protoOf(PathParser).addPathNodes_oefo12_k$ = function (nodes) {
    var dstNodes = this.nodes_1;
    if (dstNodes == null) {
      dstNodes = ArrayList_init_$Create$_0();
      this.nodes_1 = dstNodes;
    }
    dstNodes.addAll_4lagoh_k$(nodes);
    return this;
  };
  protoOf(PathParser).toNodes_jcvf9m_k$ = function () {
    var tmp0_elvis_lhs = this.nodes_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PathParser).toPath_oorm4v_k$ = function (target) {
    var tmp0_safe_receiver = this.nodes_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toPath(tmp0_safe_receiver, target);
    return tmp1_elvis_lhs == null ? Path_0() : tmp1_elvis_lhs;
  };
  protoOf(PathParser).toPath$default_alb1es_k$ = function (target, $super) {
    target = target === VOID ? Path_0() : target;
    return $super === VOID ? this.toPath_oorm4v_k$(target) : $super.toPath_oorm4v_k$.call(this, target);
  };
  function toPath(_this__u8e3s4, target) {
    target = target === VOID ? Path_0() : target;
    _init_properties_PathParser_kt__xn6mis();
    var fillType = target.get_fillType_67mqlu_k$();
    target.rewind_xb9q0b_k$();
    target.set_fillType_6krlbe_k$(fillType);
    var currentX = 0.0;
    var currentY = 0.0;
    var ctrlX = 0.0;
    var ctrlY = 0.0;
    var segmentX = 0.0;
    var segmentY = 0.0;
    var reflectiveCtrlX;
    var reflectiveCtrlY;
    var previousNode = _this__u8e3s4.isEmpty_y1axqb_k$() ? Close_getInstance() : _this__u8e3s4.get_c1px32_k$(0);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        if (item instanceof Close) {
          currentX = segmentX;
          currentY = segmentY;
          ctrlX = segmentX;
          ctrlY = segmentY;
          target.close_yn9xrc_k$();
        } else {
          if (item instanceof RelativeMoveTo) {
            currentX = currentX + item.get_dx_knto0z_k$();
            currentY = currentY + item.get_dy_knto0y_k$();
            target.relativeMoveTo_vkwjm0_k$(item.get_dx_knto0z_k$(), item.get_dy_knto0y_k$());
            segmentX = currentX;
            segmentY = currentY;
          } else {
            if (item instanceof MoveTo) {
              currentX = item.get_x_1mhr67_k$();
              currentY = item.get_y_1mhr68_k$();
              target.moveTo_22horo_k$(item.get_x_1mhr67_k$(), item.get_y_1mhr68_k$());
              segmentX = currentX;
              segmentY = currentY;
            } else {
              if (item instanceof RelativeLineTo) {
                target.relativeLineTo_9kq9uz_k$(item.get_dx_knto0z_k$(), item.get_dy_knto0y_k$());
                currentX = currentX + item.get_dx_knto0z_k$();
                currentY = currentY + item.get_dy_knto0y_k$();
              } else {
                if (item instanceof LineTo) {
                  target.lineTo_o2nyip_k$(item.get_x_1mhr67_k$(), item.get_y_1mhr68_k$());
                  currentX = item.get_x_1mhr67_k$();
                  currentY = item.get_y_1mhr68_k$();
                } else {
                  if (item instanceof RelativeHorizontalTo) {
                    target.relativeLineTo_9kq9uz_k$(item.get_dx_knto0z_k$(), 0.0);
                    currentX = currentX + item.get_dx_knto0z_k$();
                  } else {
                    if (item instanceof HorizontalTo) {
                      target.lineTo_o2nyip_k$(item.get_x_1mhr67_k$(), currentY);
                      currentX = item.get_x_1mhr67_k$();
                    } else {
                      if (item instanceof RelativeVerticalTo) {
                        target.relativeLineTo_9kq9uz_k$(0.0, item.get_dy_knto0y_k$());
                        currentY = currentY + item.get_dy_knto0y_k$();
                      } else {
                        if (item instanceof VerticalTo) {
                          target.lineTo_o2nyip_k$(currentX, item.get_y_1mhr68_k$());
                          currentY = item.get_y_1mhr68_k$();
                        } else {
                          if (item instanceof RelativeCurveTo) {
                            target.relativeCubicTo_myt97t_k$(item.get_dx1_18j70s_k$(), item.get_dy1_18j6zx_k$(), item.get_dx2_18j70r_k$(), item.get_dy2_18j6zw_k$(), item.get_dx3_18j70q_k$(), item.get_dy3_18j6zv_k$());
                            ctrlX = currentX + item.get_dx2_18j70r_k$();
                            ctrlY = currentY + item.get_dy2_18j6zw_k$();
                            currentX = currentX + item.get_dx3_18j70q_k$();
                            currentY = currentY + item.get_dy3_18j6zv_k$();
                          } else {
                            if (item instanceof CurveTo) {
                              target.cubicTo_8sju51_k$(item.get_x1_kntnlq_k$(), item.get_y1_kntnkv_k$(), item.get_x2_kntnlp_k$(), item.get_y2_kntnku_k$(), item.get_x3_kntnlo_k$(), item.get_y3_kntnkt_k$());
                              ctrlX = item.get_x2_kntnlp_k$();
                              ctrlY = item.get_y2_kntnku_k$();
                              currentX = item.get_x3_kntnlo_k$();
                              currentY = item.get_y3_kntnkt_k$();
                            } else {
                              if (item instanceof RelativeReflectiveCurveTo) {
                                if (previousNode.get_isCurve_z9wfzw_k$()) {
                                  reflectiveCtrlX = currentX - ctrlX;
                                  reflectiveCtrlY = currentY - ctrlY;
                                } else {
                                  reflectiveCtrlX = 0.0;
                                  reflectiveCtrlY = 0.0;
                                }
                                target.relativeCubicTo_myt97t_k$(reflectiveCtrlX, reflectiveCtrlY, item.get_dx1_18j70s_k$(), item.get_dy1_18j6zx_k$(), item.get_dx2_18j70r_k$(), item.get_dy2_18j6zw_k$());
                                ctrlX = currentX + item.get_dx1_18j70s_k$();
                                ctrlY = currentY + item.get_dy1_18j6zx_k$();
                                currentX = currentX + item.get_dx2_18j70r_k$();
                                currentY = currentY + item.get_dy2_18j6zw_k$();
                              } else {
                                if (item instanceof ReflectiveCurveTo) {
                                  if (previousNode.get_isCurve_z9wfzw_k$()) {
                                    reflectiveCtrlX = 2 * currentX - ctrlX;
                                    reflectiveCtrlY = 2 * currentY - ctrlY;
                                  } else {
                                    reflectiveCtrlX = currentX;
                                    reflectiveCtrlY = currentY;
                                  }
                                  target.cubicTo_8sju51_k$(reflectiveCtrlX, reflectiveCtrlY, item.get_x1_kntnlq_k$(), item.get_y1_kntnkv_k$(), item.get_x2_kntnlp_k$(), item.get_y2_kntnku_k$());
                                  ctrlX = item.get_x1_kntnlq_k$();
                                  ctrlY = item.get_y1_kntnkv_k$();
                                  currentX = item.get_x2_kntnlp_k$();
                                  currentY = item.get_y2_kntnku_k$();
                                } else {
                                  if (item instanceof RelativeQuadTo) {
                                    target.relativeQuadraticTo_vpvpbr_k$(item.get_dx1_18j70s_k$(), item.get_dy1_18j6zx_k$(), item.get_dx2_18j70r_k$(), item.get_dy2_18j6zw_k$());
                                    ctrlX = currentX + item.get_dx1_18j70s_k$();
                                    ctrlY = currentY + item.get_dy1_18j6zx_k$();
                                    currentX = currentX + item.get_dx2_18j70r_k$();
                                    currentY = currentY + item.get_dy2_18j6zw_k$();
                                  } else {
                                    if (item instanceof QuadTo) {
                                      target.quadraticTo_qa95zx_k$(item.get_x1_kntnlq_k$(), item.get_y1_kntnkv_k$(), item.get_x2_kntnlp_k$(), item.get_y2_kntnku_k$());
                                      ctrlX = item.get_x1_kntnlq_k$();
                                      ctrlY = item.get_y1_kntnkv_k$();
                                      currentX = item.get_x2_kntnlp_k$();
                                      currentY = item.get_y2_kntnku_k$();
                                    } else {
                                      if (item instanceof RelativeReflectiveQuadTo) {
                                        if (previousNode.get_isQuad_ew4yai_k$()) {
                                          reflectiveCtrlX = currentX - ctrlX;
                                          reflectiveCtrlY = currentY - ctrlY;
                                        } else {
                                          reflectiveCtrlX = 0.0;
                                          reflectiveCtrlY = 0.0;
                                        }
                                        target.relativeQuadraticTo_vpvpbr_k$(reflectiveCtrlX, reflectiveCtrlY, item.get_dx_knto0z_k$(), item.get_dy_knto0y_k$());
                                        ctrlX = currentX + reflectiveCtrlX;
                                        ctrlY = currentY + reflectiveCtrlY;
                                        currentX = currentX + item.get_dx_knto0z_k$();
                                        currentY = currentY + item.get_dy_knto0y_k$();
                                      } else {
                                        if (item instanceof ReflectiveQuadTo) {
                                          if (previousNode.get_isQuad_ew4yai_k$()) {
                                            reflectiveCtrlX = 2 * currentX - ctrlX;
                                            reflectiveCtrlY = 2 * currentY - ctrlY;
                                          } else {
                                            reflectiveCtrlX = currentX;
                                            reflectiveCtrlY = currentY;
                                          }
                                          target.quadraticTo_qa95zx_k$(reflectiveCtrlX, reflectiveCtrlY, item.get_x_1mhr67_k$(), item.get_y_1mhr68_k$());
                                          ctrlX = reflectiveCtrlX;
                                          ctrlY = reflectiveCtrlY;
                                          currentX = item.get_x_1mhr67_k$();
                                          currentY = item.get_y_1mhr68_k$();
                                        } else {
                                          if (item instanceof RelativeArcTo) {
                                            var arcStartX = item.get_arcStartDx_twxbvx_k$() + currentX;
                                            var arcStartY = item.get_arcStartDy_twxbvy_k$() + currentY;
                                            drawArc_0(target, currentX, currentY, arcStartX, arcStartY, item.get_horizontalEllipseRadius_i0l277_k$(), item.get_verticalEllipseRadius_bilkpd_k$(), item.get_theta_iz24xh_k$(), item.get_isMoreThanHalf_ok4n2c_k$(), item.get_isPositiveArc_qpecd6_k$());
                                            currentX = arcStartX;
                                            currentY = arcStartY;
                                            ctrlX = currentX;
                                            ctrlY = currentY;
                                          } else {
                                            if (item instanceof ArcTo) {
                                              drawArc_0(target, currentX, currentY, item.get_arcStartX_stlj0h_k$(), item.get_arcStartY_stlj0g_k$(), item.get_horizontalEllipseRadius_i0l277_k$(), item.get_verticalEllipseRadius_bilkpd_k$(), item.get_theta_iz24xh_k$(), item.get_isMoreThanHalf_ok4n2c_k$(), item.get_isPositiveArc_qpecd6_k$());
                                              currentX = item.get_arcStartX_stlj0h_k$();
                                              currentY = item.get_arcStartY_stlj0g_k$();
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
  function drawArc_0(p, x0, y0, x1, y1, a, b, theta, isMoreThanHalf, isPositiveArc) {
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
      return Unit_getInstance();
    }
    var disc = 1.0 / dsq - 1.0 / 4.0;
    if (disc < 0.0) {
      // Inline function 'kotlin.math.sqrt' call
      var adjust = Math.sqrt(dsq) / 1.99999;
      drawArc_0(p, x0, y0, x1, y1, a * adjust, b * adjust, theta, isMoreThanHalf, isPositiveArc);
      return Unit_getInstance();
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
  function toRadians(_this__u8e3s4) {
    _init_properties_PathParser_kt__xn6mis();
    return _this__u8e3s4 / 180 * 3.141592653589793;
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
        p.cubicTo_8sju51_k$(q1x, q1y, q2x, q2y, e2x, e2y);
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
    return '@androidx.compose.ui.graphics.internal.NoOp(' + ')';
  };
  function toSkia(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_18().get_Clear_ts5s9y_k$() ? BlendMode_CLEAR_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_Src_3wpzdd_k$() ? BlendMode_SRC_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_Dst_qkkuz6_k$() ? BlendMode_DST_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_SrcOver_anr685_k$() ? BlendMode_SRC_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_DstOver_xoacee_k$() ? BlendMode_DST_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_SrcIn_enr0mu_k$() ? BlendMode_SRC_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_DstIn_cyk4p5_k$() ? BlendMode_DST_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_SrcOut_d2bb4n_k$() ? BlendMode_SRC_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_DstOut_gwk8qg_k$() ? BlendMode_DST_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_SrcAtop_z2kmd7_k$() ? BlendMode_SRC_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_DstAtop_c21g6y_k$() ? BlendMode_DST_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_Xor_cjn5co_k$() ? BlendMode_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_Plus_m5bugp_k$() ? BlendMode_PLUS_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_Modulate_d2dqmw_k$() ? BlendMode_MODULATE_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_Screen_rhfdpx_k$() ? BlendMode_SCREEN_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_Overlay_hnqr0j_k$() ? BlendMode_OVERLAY_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_Darken_lz7qci_k$() ? BlendMode_DARKEN_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_Lighten_9vbchg_k$() ? BlendMode_LIGHTEN_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_ColorDodge_xtmzgz_k$() ? BlendMode_COLOR_DODGE_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_ColorBurn_f5bk1t_k$() ? BlendMode_COLOR_BURN_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_Hardlight_1wjq08_k$() ? BlendMode_HARD_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_Softlight_npagmf_k$() ? BlendMode_SOFT_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_Difference_uke8xo_k$() ? BlendMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_Exclusion_80cb7p_k$() ? BlendMode_EXCLUSION_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_Multiply_8zrhrx_k$() ? BlendMode_MULTIPLY_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_Hue_m25sez_k$() ? BlendMode_HUE_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_Saturation_gkrtkh_k$() ? BlendMode_SATURATION_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_Color_mzcv4g_k$() ? BlendMode_COLOR_getInstance() : _this__u8e3s4 === Companion_getInstance_18().get_Luminosity_tkhgzk_k$() ? BlendMode_LUMINOSITY_getInstance() : BlendMode_SRC_OVER_getInstance();
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
        _this__u8e3s4.get_mat_18j0uh_k$()[i] = v[i];
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
    var $this$apply = this_0.values_1;
    Matrix__rotateZ_impl_2g2pf5($this$apply, rotationZ);
    Matrix__rotateY_impl_2x4btc($this$apply, rotationY);
    Matrix__rotateX_impl_3e5y7j($this$apply, rotationX);
    Matrix__scale$default_impl_snaws9($this$apply, scaleX, scaleY);
    var tmp$ret$1 = this_0.values_1;
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
      var tmp0 = this_1.values_1;
      // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
      var v = -1.0 / depth;
      _Matrix___get_values__impl__fblr7b(tmp0)[imul(2, 4) + 3 | 0] = v;
      var tmp$ret$8 = this_1.values_1;
      Matrix__timesAssign_impl_oas521(matrix, tmp$ret$8);
    }
    // Inline function 'kotlin.apply' call
    var this_2 = new Matrix(_Matrix___init__impl__q3kp4w());
    var $this$apply_0 = this_2.values_1;
    Matrix__translate$default_impl_10t8ql($this$apply_0, pivotX + translationX, pivotY + translationY);
    var tmp$ret$10 = this_2.values_1;
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
  function isZero(_this__u8e3s4) {
    // Inline function 'kotlin.math.abs' call
    return Math.abs(_this__u8e3s4) <= 0.001;
  }
  function toComposeRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.get_left_woprgw_k$(), _this__u8e3s4.get_top_18ivbo_k$(), _this__u8e3s4.get_right_ixz7xv_k$(), _this__u8e3s4.get_bottom_bj8ras_k$());
  }
  function toSkiaRect(_this__u8e3s4) {
    return Companion_getInstance_4().makeLTRB_2wvuxm_k$(_this__u8e3s4.get_left_woprgw_k$(), _this__u8e3s4.get_top_18ivbo_k$(), _this__u8e3s4.get_right_ixz7xv_k$(), _this__u8e3s4.get_bottom_bj8ras_k$());
  }
  function toSkiaRRect(_this__u8e3s4) {
    var radii = new Float32Array(8);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    var this_0 = _this__u8e3s4.get_topLeftCornerRadius_91hulg_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _CornerRadius___get_packedValue__impl__okv4jq(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    radii[0] = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    var this_1 = _this__u8e3s4.get_topLeftCornerRadius_91hulg_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _CornerRadius___get_packedValue__impl__okv4jq(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    radii[1] = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    var this_2 = _this__u8e3s4.get_topRightCornerRadius_kxqun3_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _CornerRadius___get_packedValue__impl__okv4jq(this_2);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    radii[2] = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    var this_3 = _this__u8e3s4.get_topRightCornerRadius_kxqun3_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _CornerRadius___get_packedValue__impl__okv4jq(this_3);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    radii[3] = floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    var this_4 = _this__u8e3s4.get_bottomRightCornerRadius_166w49_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_3 = _CornerRadius___get_packedValue__impl__okv4jq(this_4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_3 = convertToInt(shiftRight(value_3, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    radii[4] = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    var this_5 = _this__u8e3s4.get_bottomRightCornerRadius_166w49_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _CornerRadius___get_packedValue__impl__okv4jq(this_5);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    radii[5] = floatFromBits(bits_4);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    var this_6 = _this__u8e3s4.get_bottomLeftCornerRadius_9r65ws_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_5 = _CornerRadius___get_packedValue__impl__okv4jq(this_6);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_5 = convertToInt(shiftRight(value_5, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    radii[6] = floatFromBits(bits_5);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    var this_7 = _this__u8e3s4.get_bottomLeftCornerRadius_9r65ws_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_6 = _CornerRadius___get_packedValue__impl__okv4jq(this_7);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    radii[7] = floatFromBits(bits_6);
    return Companion_getInstance_5().makeComplexLTRB_n5v03i_k$(_this__u8e3s4.get_left_woprgw_k$(), _this__u8e3s4.get_top_18ivbo_k$(), _this__u8e3s4.get_right_ixz7xv_k$(), _this__u8e3s4.get_bottom_bj8ras_k$(), radii);
  }
  function get_nativeCanvas(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).skia_1;
  }
  function ActualCanvas(image) {
    var skiaBitmap = asSkiaBitmap(image);
    // Inline function 'kotlin.require' call
    if (!!skiaBitmap.get_isImmutable_b8i701_k$()) {
      var message = 'Cannot draw on immutable ImageBitmap';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new SkiaBackedCanvas(Canvas_init_$Create$(skiaBitmap));
  }
  function _get_skia__ddpejf($this, _this__u8e3s4) {
    // Inline function 'kotlin.apply' call
    var this_0 = _this__u8e3s4 instanceof SkiaBackedPaint ? _this__u8e3s4 : THROW_CCE();
    this_0.set_alphaMultiplier_u32e12_k$($this.alphaMultiplier_1);
    return this_0.get_skia_woucvt_k$();
  }
  function drawImageRect($this, image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    var bitmap = asSkiaBitmap(image);
    // Inline function 'org.jetbrains.skia.impl.use' call
    var this_0 = Companion_getInstance_6().makeFromBitmap_39nkt4_k$(bitmap);
    var tmp;
    try {
      var tmp_0 = Companion_getInstance_4();
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(srcOffset);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_1 = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(srcOffset);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_2 = floatFromBits(bits_0);
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _Size___get_packedValue__impl__7rlt1o(srcSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_3 = floatFromBits(bits_1);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Size___get_packedValue__impl__7rlt1o(srcSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$15 = floatFromBits(bits_2);
      var tmp_4 = tmp_0.makeXYWH_irfy4g_k$(tmp_1, tmp_2, tmp_3, tmp$ret$15);
      var tmp_5 = Companion_getInstance_4();
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_3 = _Offset___get_packedValue__impl__xh2k8q(dstOffset);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_3 = convertToInt(shiftRight(value_3, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_6 = floatFromBits(bits_3);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_4 = _Offset___get_packedValue__impl__xh2k8q(dstOffset);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_7 = floatFromBits(bits_4);
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_5 = _Size___get_packedValue__impl__7rlt1o(dstSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_5 = convertToInt(shiftRight(value_5, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_8 = floatFromBits(bits_5);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_6 = _Size___get_packedValue__impl__7rlt1o(dstSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$31 = floatFromBits(bits_6);
      tmp = $this.skia_1.drawImageRect_6jbgn9_k$(this_0, tmp_4, tmp_5.makeXYWH_irfy4g_k$(tmp_6, tmp_7, tmp_8, tmp$ret$31), toSkia_2($this, paint.get_filterQuality_wmgb0f_k$()), _get_skia__ddpejf($this, paint), true);
    }finally {
      this_0.close_yn9xrc_k$();
    }
  }
  function drawPoints($this, points, paint) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = points.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = points.get_c1px32_k$(index);
        var point = item.packedValue_1;
        // Inline function 'androidx.compose.ui.geometry.Offset.x' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value = _Offset___get_packedValue__impl__xh2k8q(point);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits = convertToInt(shiftRight(value, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp = floatFromBits(bits);
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_0 = _Offset___get_packedValue__impl__xh2k8q(point);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp$ret$7 = floatFromBits(bits_0);
        $this.skia_1.drawPoint_hb1rjx_k$(tmp, tmp$ret$7, _get_skia__ddpejf($this, paint));
      }
       while (inductionVariable <= last);
  }
  function drawLines($this, points, paint, stepBy) {
    if (points.get_size_woubt6_k$() >= 2) {
      var progression = step(until(0, points.get_size_woubt6_k$() - 1 | 0), stepBy);
      var inductionVariable = progression.get_first_irdx8n_k$();
      var last = progression.get_last_wopotb_k$();
      var step_0 = progression.get_step_woujh1_k$();
      if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var p1 = points.get_c1px32_k$(i).packedValue_1;
          var p2 = points.get_c1px32_k$(i + 1 | 0).packedValue_1;
          // Inline function 'androidx.compose.ui.geometry.Offset.x' call
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value = _Offset___get_packedValue__impl__xh2k8q(p1);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          var bits = convertToInt(shiftRight(value, 32));
          // Inline function 'kotlin.fromBits' call
          FloatCompanionObject_getInstance();
          var tmp = floatFromBits(bits);
          // Inline function 'androidx.compose.ui.geometry.Offset.y' call
          // Inline function 'androidx.compose.ui.util.unpackFloat2' call
          var value_0 = _Offset___get_packedValue__impl__xh2k8q(p1);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
          // Inline function 'kotlin.fromBits' call
          FloatCompanionObject_getInstance();
          var tmp_0 = floatFromBits(bits_0);
          // Inline function 'androidx.compose.ui.geometry.Offset.x' call
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value_1 = _Offset___get_packedValue__impl__xh2k8q(p2);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          var bits_1 = convertToInt(shiftRight(value_1, 32));
          // Inline function 'kotlin.fromBits' call
          FloatCompanionObject_getInstance();
          var tmp_1 = floatFromBits(bits_1);
          // Inline function 'androidx.compose.ui.geometry.Offset.y' call
          // Inline function 'androidx.compose.ui.util.unpackFloat2' call
          var value_2 = _Offset___get_packedValue__impl__xh2k8q(p2);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
          // Inline function 'kotlin.fromBits' call
          FloatCompanionObject_getInstance();
          var tmp$ret$15 = floatFromBits(bits_2);
          $this.skia_1.drawLine_m1kfbl_k$(tmp, tmp_0, tmp_1, tmp$ret$15, _get_skia__ddpejf($this, paint));
        }
         while (!(i === last));
    }
  }
  function drawRawPoints($this, points, paint, stepBy) {
    if ((points.length % 2 | 0) === 0) {
      var progression = step(until(0, points.length - 1 | 0), stepBy);
      var inductionVariable = progression.get_first_irdx8n_k$();
      var last = progression.get_last_wopotb_k$();
      var step_0 = progression.get_step_woujh1_k$();
      if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var x = points[i];
          var y = points[i + 1 | 0];
          $this.skia_1.drawPoint_hb1rjx_k$(x, y, _get_skia__ddpejf($this, paint));
        }
         while (!(i === last));
    }
  }
  function drawRawLines($this, points, paint, stepBy) {
    if (points.length >= 4 && (points.length % 2 | 0) === 0) {
      var progression = step(until(0, points.length - 3 | 0), imul(stepBy, 2));
      var inductionVariable = progression.get_first_irdx8n_k$();
      var last = progression.get_last_wopotb_k$();
      var step_0 = progression.get_step_woujh1_k$();
      if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var x1 = points[i];
          var y1 = points[i + 1 | 0];
          var x2 = points[i + 2 | 0];
          var y2 = points[i + 3 | 0];
          $this.skia_1.drawLine_m1kfbl_k$(x1, y1, x2, y2, _get_skia__ddpejf($this, paint));
        }
         while (!(i === last));
    }
  }
  function toSkia_0($this, _this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_20().get_Difference_lo2jbz_k$() ? ClipMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_20().get_Intersect_gpxc6n_k$() ? ClipMode_INTERSECT_getInstance() : ClipMode_INTERSECT_getInstance();
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
    return _this__u8e3s4 === Companion_getInstance_23().get_Low_7s05n6_k$() ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance()) : _this__u8e3s4 === Companion_getInstance_23().get_Medium_8fylwf_k$() ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NEAREST_getInstance()) : _this__u8e3s4 === Companion_getInstance_23().get_High_14avfy_k$() ? new CubicResampler(1 / 3.0, 1 / 3.0) : new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
  }
  function SkiaBackedCanvas(skia) {
    this.skia_1 = skia;
    this.alphaMultiplier_1 = 1.0;
  }
  protoOf(SkiaBackedCanvas).get_skia_woucvt_k$ = function () {
    return this.skia_1;
  };
  protoOf(SkiaBackedCanvas).set_alphaMultiplier_dd868n_k$ = function (_set____db54di) {
    this.alphaMultiplier_1 = _set____db54di;
  };
  protoOf(SkiaBackedCanvas).get_alphaMultiplier_fuubsd_k$ = function () {
    return this.alphaMultiplier_1;
  };
  protoOf(SkiaBackedCanvas).save_fbe7h_k$ = function () {
    this.skia_1.save_23ibh_k$();
  };
  protoOf(SkiaBackedCanvas).restore_a1ykhu_k$ = function () {
    this.skia_1.restore_i5fnny_k$();
  };
  protoOf(SkiaBackedCanvas).saveLayer_j9hvqf_k$ = function (bounds, paint) {
    this.skia_1.saveLayer_d6e1vc_k$(bounds.get_left_woprgw_k$(), bounds.get_top_18ivbo_k$(), bounds.get_right_ixz7xv_k$(), bounds.get_bottom_bj8ras_k$(), _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).translate_7gghdu_k$ = function (dx, dy) {
    this.skia_1.translate_k2k08i_k$(dx, dy);
  };
  protoOf(SkiaBackedCanvas).scale_ba85bu_k$ = function (sx, sy) {
    this.skia_1.scale_ln7xze_k$(sx, sy);
  };
  protoOf(SkiaBackedCanvas).rotate_qe8u4z_k$ = function (degrees) {
    this.skia_1.rotate_n08qpp_k$(degrees);
  };
  protoOf(SkiaBackedCanvas).skew_kgli2i_k$ = function (sx, sy) {
    this.skia_1.skew_fkteh6_k$(sx, sy);
  };
  protoOf(SkiaBackedCanvas).concat_no6uof_k$ = function (matrix) {
    if (!isIdentity(matrix)) {
      this.skia_1.concat_1fc4xa_k$(toSkia_1(this, matrix));
    }
  };
  protoOf(SkiaBackedCanvas).clipRect_3spswv_k$ = function (left, top, right, bottom, clipOp) {
    var antiAlias = true;
    this.skia_1.clipRect_7110ke_k$(Companion_getInstance_4().makeLTRB_2wvuxm_k$(left, top, right, bottom), toSkia_0(this, clipOp), antiAlias);
  };
  protoOf(SkiaBackedCanvas).clipPath_tlqunt_k$ = function (path, clipOp) {
    var antiAlias = true;
    this.skia_1.clipPath_agzsy6_k$(asSkiaPath(path), toSkia_0(this, clipOp), antiAlias);
  };
  protoOf(SkiaBackedCanvas).drawLine_p9lnhi_k$ = function (p1, p2, paint) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(p1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(p1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(p2);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(p2);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$15 = floatFromBits(bits_2);
    this.skia_1.drawLine_m1kfbl_k$(tmp, tmp_0, tmp_1, tmp$ret$15, _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).drawRect_njf28a_k$ = function (left, top, right, bottom, paint) {
    this.skia_1.drawRect_8t145u_k$(Companion_getInstance_4().makeLTRB_2wvuxm_k$(left, top, right, bottom), _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).drawRoundRect_s5vrm8_k$ = function (left, top, right, bottom, radiusX, radiusY, paint) {
    this.skia_1.drawRRect_6cei8q_k$(Companion_getInstance_5().makeLTRB_qlrzkq_k$(left, top, right, bottom, radiusX, radiusY), _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).drawOval_laorgo_k$ = function (left, top, right, bottom, paint) {
    this.skia_1.drawOval_8h54ws_k$(Companion_getInstance_4().makeLTRB_2wvuxm_k$(left, top, right, bottom), _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).drawCircle_l6ouf0_k$ = function (center, radius, paint) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$7 = floatFromBits(bits_0);
    this.skia_1.drawCircle_129n4r_k$(tmp, tmp$ret$7, radius, _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).drawArc_ud0hdz_k$ = function (left, top, right, bottom, startAngle, sweepAngle, useCenter, paint) {
    this.skia_1.drawArc_9h3ru6_k$(left, top, right, bottom, startAngle, sweepAngle, useCenter, _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).drawPath_2all12_k$ = function (path, paint) {
    this.skia_1.drawPath_jdiwxq_k$(asSkiaPath(path), _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).drawImage_lx1b1t_k$ = function (image, topLeftOffset, paint) {
    var tmp0 = image.get_width_j0q4yl_k$();
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = image.get_height_e7t92o_k$();
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var size = _Size___init__impl__aywn0g(tmp$ret$0);
    drawImageRect(this, image, Companion_getInstance().get_Zero_k6n73t_k$(), size, topLeftOffset, size, paint);
  };
  protoOf(SkiaBackedCanvas).drawImageRect_5h5ih1_k$ = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
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
  protoOf(SkiaBackedCanvas).drawPoints_buyvum_k$ = function (pointMode, points, paint) {
    if (pointMode === Companion_getInstance_33().get_Lines_54ip59_k$()) {
      drawLines(this, points, paint, 2);
    } else if (pointMode === Companion_getInstance_33().get_Polygon_rl173c_k$()) {
      drawLines(this, points, paint, 1);
    } else if (pointMode === Companion_getInstance_33().get_Points_yh58f7_k$()) {
      drawPoints(this, points, paint);
    }
  };
  protoOf(SkiaBackedCanvas).enableZ_eyb9g9_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(SkiaBackedCanvas).disableZ_14zkiq_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(SkiaBackedCanvas).drawRawPoints_jt1jmy_k$ = function (pointMode, points, paint) {
    if (!((points.length % 2 | 0) === 0)) {
      throw IllegalArgumentException_init_$Create$('points must have an even number of values');
    }
    if (pointMode === Companion_getInstance_33().get_Lines_54ip59_k$()) {
      drawRawLines(this, points, paint, 2);
    } else if (pointMode === Companion_getInstance_33().get_Polygon_rl173c_k$()) {
      drawRawLines(this, points, paint, 1);
    } else if (pointMode === Companion_getInstance_33().get_Points_yh58f7_k$()) {
      drawRawPoints(this, points, paint, 2);
    }
  };
  protoOf(SkiaBackedCanvas).drawVertices_mnlupq_k$ = function (vertices, blendMode, paint) {
    this.skia_1.drawVertices_kbewma_k$(toSkiaVertexMode(vertices.get_vertexMode_kiz8sf_k$()), vertices.get_positions_ya7scf_k$(), vertices.get_colors_c05661_k$(), vertices.get_textureCoordinates_1i3vqh_k$(), vertices.get_indices_xelk8u_k$(), toSkia(blendMode), paint.asFrameworkPaint_huz48e_k$());
  };
  function asComposeCanvas(_this__u8e3s4) {
    return new SkiaBackedCanvas(_this__u8e3s4);
  }
  function set_alphaMultiplier(_this__u8e3s4, value) {
    (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).alphaMultiplier_1 = value;
  }
  function get_alphaMultiplier(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).alphaMultiplier_1;
  }
  function Paint_0() {
    return new SkiaBackedPaint();
  }
  function _set_mAlphaMultiplier__hzxq3($this, _set____db54di) {
    $this.mAlphaMultiplier_1 = _set____db54di;
  }
  function _get_mAlphaMultiplier__sl4bcp($this) {
    return $this.mAlphaMultiplier_1;
  }
  function updateAlpha($this, alpha, multiplier) {
    $this.skia_1.set_color_7ztbpe_k$(toArgb(Color__copy$default_impl_ectz3s(Color_3($this.skia_1.get_color_ipu8u2_k$()), alpha * multiplier)));
  }
  function updateAlpha$default($this, alpha, multiplier, $super) {
    alpha = alpha === VOID ? $this.get_alpha_iooth1_k$() : alpha;
    multiplier = multiplier === VOID ? $this.mAlphaMultiplier_1 : multiplier;
    return updateAlpha($this, alpha, multiplier);
  }
  function toSkia_3($this, _this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_27().get_Fill_7xey15_k$() ? PaintMode_FILL_getInstance() : _this__u8e3s4 === Companion_getInstance_27().get_Stroke_fu1ixu_k$() ? PaintMode_STROKE_getInstance() : PaintMode_FILL_getInstance();
  }
  function toSkia_4($this, _this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_35().get_Butt_jb7qjw_k$() ? PaintStrokeCap_BUTT_getInstance() : _this__u8e3s4 === Companion_getInstance_35().get_Round_hjra1h_k$() ? PaintStrokeCap_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_35().get_Square_dbwc3a_k$() ? PaintStrokeCap_SQUARE_getInstance() : PaintStrokeCap_BUTT_getInstance();
  }
  function toSkia_5($this, _this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_36().get_Miter_xkwqso_k$() ? PaintStrokeJoin_MITER_getInstance() : _this__u8e3s4 === Companion_getInstance_36().get_Round_o8jjqp_k$() ? PaintStrokeJoin_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_36().get_Bevel_8ab6n7_k$() ? PaintStrokeJoin_BEVEL_getInstance() : PaintStrokeJoin_MITER_getInstance();
  }
  function SkiaBackedPaint(skia) {
    skia = skia === VOID ? Paint_init_$Create$() : skia;
    this.skia_1 = skia;
    this.mAlphaMultiplier_1 = 1.0;
    this.blendMode_1 = Companion_getInstance_18().get_SrcOver_anr685_k$();
    this.style_1 = Companion_getInstance_27().get_Fill_7xey15_k$();
    this.strokeCap_1 = Companion_getInstance_35().get_Butt_jb7qjw_k$();
    this.strokeJoin_1 = Companion_getInstance_36().get_Round_o8jjqp_k$();
    this.strokeMiterLimit_1 = 0.0;
    this.filterQuality_1 = Companion_getInstance_23().get_Medium_8fylwf_k$();
    this.shader_1 = null;
    this.colorFilter_1 = null;
    this.pathEffect_1 = null;
  }
  protoOf(SkiaBackedPaint).get_skia_woucvt_k$ = function () {
    return this.skia_1;
  };
  protoOf(SkiaBackedPaint).asFrameworkPaint_huz48e_k$ = function () {
    return this.skia_1;
  };
  protoOf(SkiaBackedPaint).set_alphaMultiplier_u32e12_k$ = function (value) {
    var multiplier = coerceIn_0(value, 0.0, 1.0);
    updateAlpha$default(this, VOID, multiplier);
    this.mAlphaMultiplier_1 = multiplier;
  };
  protoOf(SkiaBackedPaint).get_alphaMultiplier_wdu3ai_k$ = function () {
    return this.mAlphaMultiplier_1;
  };
  protoOf(SkiaBackedPaint).set_alpha_tvzcqh_k$ = function (value) {
    updateAlpha$default(this, value);
  };
  protoOf(SkiaBackedPaint).get_alpha_iooth1_k$ = function () {
    return _Color___get_alpha__impl__wcfyv1(Color_3(this.skia_1.get_color_ipu8u2_k$()));
  };
  protoOf(SkiaBackedPaint).set_isAntiAlias_m6kooi_k$ = function (value) {
    this.skia_1.set_isAntiAlias_m6kooi_k$(value);
  };
  protoOf(SkiaBackedPaint).get_isAntiAlias_255n51_k$ = function () {
    return this.skia_1.get_isAntiAlias_255n51_k$();
  };
  protoOf(SkiaBackedPaint).set_color_m2amxp_k$ = function (color) {
    this.skia_1.set_color_7ztbpe_k$(toArgb(color));
  };
  protoOf(SkiaBackedPaint).get_color_lnp1vl_k$ = function () {
    return Color_3(this.skia_1.get_color_ipu8u2_k$());
  };
  protoOf(SkiaBackedPaint).set_blendMode_1e5m6b_k$ = function (value) {
    this.skia_1.set_blendMode_s14yaj_k$(toSkia(value));
    this.blendMode_1 = value;
  };
  protoOf(SkiaBackedPaint).get_blendMode_si209t_k$ = function () {
    return this.blendMode_1;
  };
  protoOf(SkiaBackedPaint).set_style_t4zhmv_k$ = function (value) {
    this.skia_1.set_mode_s75p6s_k$(toSkia_3(this, value));
    this.style_1 = value;
  };
  protoOf(SkiaBackedPaint).get_style_h1bxuj_k$ = function () {
    return this.style_1;
  };
  protoOf(SkiaBackedPaint).set_strokeWidth_owqvpl_k$ = function (value) {
    this.skia_1.set_strokeWidth_owqvpl_k$(value);
  };
  protoOf(SkiaBackedPaint).get_strokeWidth_pbded7_k$ = function () {
    return this.skia_1.get_strokeWidth_pbded7_k$();
  };
  protoOf(SkiaBackedPaint).set_strokeCap_x8rhz1_k$ = function (value) {
    this.skia_1.set_strokeCap_dv3f3n_k$(toSkia_4(this, value));
    this.strokeCap_1 = value;
  };
  protoOf(SkiaBackedPaint).get_strokeCap_6gl6jj_k$ = function () {
    return this.strokeCap_1;
  };
  protoOf(SkiaBackedPaint).set_strokeJoin_yrffuj_k$ = function (value) {
    this.skia_1.set_strokeJoin_pswy8t_k$(toSkia_5(this, value));
    this.strokeJoin_1 = value;
  };
  protoOf(SkiaBackedPaint).get_strokeJoin_j1kbxz_k$ = function () {
    return this.strokeJoin_1;
  };
  protoOf(SkiaBackedPaint).set_strokeMiterLimit_tej6nx_k$ = function (value) {
    this.skia_1.set_strokeMiter_5ftsgo_k$(value);
    this.strokeMiterLimit_1 = value;
  };
  protoOf(SkiaBackedPaint).get_strokeMiterLimit_p3434n_k$ = function () {
    return this.strokeMiterLimit_1;
  };
  protoOf(SkiaBackedPaint).set_filterQuality_eye4f7_k$ = function (_set____db54di) {
    this.filterQuality_1 = _set____db54di;
  };
  protoOf(SkiaBackedPaint).get_filterQuality_wmgb0f_k$ = function () {
    return this.filterQuality_1;
  };
  protoOf(SkiaBackedPaint).set_shader_tgaw5e_k$ = function (value) {
    this.skia_1.set_shader_tgaw5e_k$(value);
    this.shader_1 = value;
  };
  protoOf(SkiaBackedPaint).get_shader_jgtazy_k$ = function () {
    return this.shader_1;
  };
  protoOf(SkiaBackedPaint).set_colorFilter_dtpxr0_k$ = function (value) {
    this.skia_1.set_colorFilter_9zyasg_k$(value == null ? null : asSkiaColorFilter(value));
    this.colorFilter_1 = value;
  };
  protoOf(SkiaBackedPaint).get_colorFilter_nt8pqq_k$ = function () {
    return this.colorFilter_1;
  };
  protoOf(SkiaBackedPaint).set_pathEffect_h6g9g6_k$ = function (value) {
    var tmp0_safe_receiver = (value == null ? true : value instanceof SkiaBackedPathEffect) ? value : THROW_CCE();
    this.skia_1.set_pathEffect_2qfjq4_k$(tmp0_safe_receiver == null ? null : asSkiaPathEffect(tmp0_safe_receiver));
    this.pathEffect_1 = value;
  };
  protoOf(SkiaBackedPaint).get_pathEffect_d6tz6p_k$ = function () {
    return this.pathEffect_1;
  };
  function Path_0() {
    return new SkiaBackedPath();
  }
  function asSkiaPath(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedPath) {
      tmp = _this__u8e3s4.internalPath_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Path');
    }
    return tmp;
  }
  function _set_internalPath__a4co45($this, _set____db54di) {
    $this.internalPath_1 = _set____db54di;
  }
  function toSkiaOperation($this, _this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_32().get_Difference_nnbib6_k$() ? PathOp_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_32().get_Intersect_3xwf0i_k$() ? PathOp_INTERSECT_getInstance() : _this__u8e3s4 === Companion_getInstance_32().get_Union_z1h0ku_k$() ? PathOp_UNION_getInstance() : _this__u8e3s4 === Companion_getInstance_32().get_Xor_aeyvba_k$() ? PathOp_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_32().get_ReverseDifference_4zrrtq_k$() ? PathOp_REVERSE_DIFFERENCE_getInstance() : PathOp_XOR_getInstance();
  }
  function SkiaBackedPath(internalPath) {
    internalPath = internalPath === VOID ? Path_init_$Create$() : internalPath;
    this.internalPath_1 = internalPath;
  }
  protoOf(SkiaBackedPath).get_internalPath_37vr9n_k$ = function () {
    return this.internalPath_1;
  };
  protoOf(SkiaBackedPath).set_fillType_6krlbe_k$ = function (value) {
    var tmp = this.internalPath_1;
    var tmp_0;
    if (value === Companion_getInstance_31().get_EvenOdd_cpanrc_k$()) {
      tmp_0 = PathFillMode_EVEN_ODD_getInstance();
    } else {
      tmp_0 = PathFillMode_WINDING_getInstance();
    }
    tmp.set_fillMode_p4qpgv_k$(tmp_0);
  };
  protoOf(SkiaBackedPath).get_fillType_67mqlu_k$ = function () {
    var tmp;
    if (this.internalPath_1.get_fillMode_r5zfyn_k$().equals(PathFillMode_EVEN_ODD_getInstance())) {
      tmp = Companion_getInstance_31().get_EvenOdd_cpanrc_k$();
    } else {
      tmp = Companion_getInstance_31().get_NonZero_dwy848_k$();
    }
    return tmp;
  };
  protoOf(SkiaBackedPath).moveTo_22horo_k$ = function (x, y) {
    this.internalPath_1.moveTo_n8tdjo_k$(x, y);
  };
  protoOf(SkiaBackedPath).relativeMoveTo_vkwjm0_k$ = function (dx, dy) {
    this.internalPath_1.rMoveTo_gj475u_k$(dx, dy);
  };
  protoOf(SkiaBackedPath).lineTo_o2nyip_k$ = function (x, y) {
    this.internalPath_1.lineTo_985bqp_k$(x, y);
  };
  protoOf(SkiaBackedPath).relativeLineTo_9kq9uz_k$ = function (dx, dy) {
    this.internalPath_1.rLineTo_2ig5cv_k$(dx, dy);
  };
  protoOf(SkiaBackedPath).quadraticBezierTo_pas4ki_k$ = function (x1, y1, x2, y2) {
    this.internalPath_1.quadTo_nivwo2_k$(x1, y1, x2, y2);
  };
  protoOf(SkiaBackedPath).quadraticTo_qa95zx_k$ = function (x1, y1, x2, y2) {
    this.internalPath_1.quadTo_nivwo2_k$(x1, y1, x2, y2);
  };
  protoOf(SkiaBackedPath).relativeQuadraticBezierTo_fs15qi_k$ = function (dx1, dy1, dx2, dy2) {
    this.internalPath_1.rQuadTo_i9659w_k$(dx1, dy1, dx2, dy2);
  };
  protoOf(SkiaBackedPath).relativeQuadraticTo_vpvpbr_k$ = function (dx1, dy1, dx2, dy2) {
    this.internalPath_1.rQuadTo_i9659w_k$(dx1, dy1, dx2, dy2);
  };
  protoOf(SkiaBackedPath).cubicTo_8sju51_k$ = function (x1, y1, x2, y2, x3, y3) {
    this.internalPath_1.cubicTo_g393vf_k$(x1, y1, x2, y2, x3, y3);
  };
  protoOf(SkiaBackedPath).relativeCubicTo_myt97t_k$ = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    this.internalPath_1.rCubicTo_5i712l_k$(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  protoOf(SkiaBackedPath).arcTo_glfct3_k$ = function (rect, startAngleDegrees, sweepAngleDegrees, forceMoveTo) {
    this.internalPath_1.arcTo_lk9bpr_k$(toSkiaRect(rect), startAngleDegrees, sweepAngleDegrees, forceMoveTo);
  };
  protoOf(SkiaBackedPath).addRect_yfs97g_k$ = function (rect) {
    this.internalPath_1.addRect$default_mv5gnm_k$(toSkiaRect(rect), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).addRect_l4ktqy_k$ = function (rect, direction) {
    this.internalPath_1.addRect$default_mv5gnm_k$(toSkiaRect(rect), toSkiaPathDirection(direction));
  };
  protoOf(SkiaBackedPath).addOval_wqqw8m_k$ = function (oval) {
    this.internalPath_1.addOval$default_akalvk_k$(toSkiaRect(oval), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).addOval_ofz8h8_k$ = function (oval, direction) {
    this.internalPath_1.addOval$default_akalvk_k$(toSkiaRect(oval), toSkiaPathDirection(direction));
  };
  protoOf(SkiaBackedPath).addRoundRect_w1epq0_k$ = function (roundRect) {
    this.internalPath_1.addRRect$default_20pqkw_k$(toSkiaRRect(roundRect), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).addRoundRect_gyba1e_k$ = function (roundRect, direction) {
    this.internalPath_1.addRRect$default_20pqkw_k$(toSkiaRRect(roundRect), toSkiaPathDirection(direction));
  };
  protoOf(SkiaBackedPath).addArcRad_t0vpkr_k$ = function (oval, startAngleRadians, sweepAngleRadians) {
    this.addArc_s89gx4_k$(oval, degrees(startAngleRadians), degrees(sweepAngleRadians));
  };
  protoOf(SkiaBackedPath).addArc_s89gx4_k$ = function (oval, startAngleDegrees, sweepAngleDegrees) {
    this.internalPath_1.addArc_ab3w7m_k$(toSkiaRect(oval), startAngleDegrees, sweepAngleDegrees);
  };
  protoOf(SkiaBackedPath).addPath_mtr781_k$ = function (path, offset) {
    var tmp = this.internalPath_1;
    var tmp_0 = asSkiaPath(path);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$7 = floatFromBits(bits_0);
    tmp.addPath$default_qvsmxp_k$(tmp_0, tmp_1, tmp$ret$7);
  };
  protoOf(SkiaBackedPath).close_yn9xrc_k$ = function () {
    this.internalPath_1.closePath_7zbz5v_k$();
  };
  protoOf(SkiaBackedPath).reset_5u6xz3_k$ = function () {
    var fillType = this.get_fillType_67mqlu_k$();
    this.internalPath_1.reset_1sjh3j_k$();
    this.set_fillType_6krlbe_k$(fillType);
  };
  protoOf(SkiaBackedPath).rewind_xb9q0b_k$ = function () {
    this.internalPath_1.rewind_fg9p39_k$();
  };
  protoOf(SkiaBackedPath).translate_nzlwb0_k$ = function (offset) {
    var tmp = this.internalPath_1;
    var tmp_0 = Companion_getInstance_7();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$7 = floatFromBits(bits_0);
    tmp.transform$default_8dct7o_k$(tmp_0.makeTranslate_9v7aio_k$(tmp_1, tmp$ret$7));
  };
  protoOf(SkiaBackedPath).transform_3go53t_k$ = function (matrix) {
    var tmp = this.internalPath_1;
    // Inline function 'kotlin.apply' call
    var this_0 = Companion_getInstance_7().makeTranslate_9v7aio_k$(0.0, 0.0);
    setFrom(this_0, matrix);
    tmp.transform$default_8dct7o_k$(this_0);
  };
  protoOf(SkiaBackedPath).getBounds_568lnv_k$ = function () {
    var bounds = this.internalPath_1.get_bounds_bj99ku_k$();
    return new Rect(bounds.get_left_woprgw_k$(), bounds.get_top_18ivbo_k$(), bounds.get_right_ixz7xv_k$(), bounds.get_bottom_bj8ras_k$());
  };
  protoOf(SkiaBackedPath).op_fj0csx_k$ = function (path1, path2, operation) {
    var path = Companion_getInstance_8().makeCombining_fcc5ry_k$(asSkiaPath(path1), asSkiaPath(path2), toSkiaOperation(this, operation));
    var tmp = this;
    tmp.internalPath_1 = path == null ? this.internalPath_1 : path;
    return !(path == null);
  };
  protoOf(SkiaBackedPath).get_isConvex_ryvmuy_k$ = function () {
    return this.internalPath_1.get_isConvex_ryvmuy_k$();
  };
  protoOf(SkiaBackedPath).get_isEmpty_zauvru_k$ = function () {
    return this.internalPath_1.get_isEmpty_zauvru_k$();
  };
  function toSkiaPathDirection(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.get_ordinal_ip24qg_k$()) {
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
  function actualCornerPathEffect(radius) {
    return new SkiaBackedPathEffect(Companion_getInstance_9().makeCorner_cq39e3_k$(radius));
  }
  function actualDashPathEffect(intervals, phase) {
    return new SkiaBackedPathEffect(Companion_getInstance_9().makeDash_9suxds_k$(intervals, phase));
  }
  function actualChainPathEffect(outer, inner) {
    return new SkiaBackedPathEffect(asSkiaPathEffect(outer).makeCompose_dsdae3_k$(asSkiaPathEffect(inner)));
  }
  function actualStampedPathEffect(shape, advance, phase, style) {
    return new SkiaBackedPathEffect(Companion_getInstance_9().makePath1D_ly4j3w_k$(asSkiaPath(shape), advance, phase, toSkiaStampedPathEffectStyle(style)));
  }
  function SkiaBackedPathEffect(nativePathEffect) {
    this.nativePathEffect_1 = nativePathEffect;
  }
  protoOf(SkiaBackedPathEffect).get_nativePathEffect_o1bxhy_k$ = function () {
    return this.nativePathEffect_1;
  };
  function asSkiaPathEffect(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedPathEffect ? _this__u8e3s4 : THROW_CCE()).nativePathEffect_1;
  }
  function toSkiaStampedPathEffectStyle(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_30().get_Morph_bm4leq_k$() ? Style_MORPH_getInstance() : _this__u8e3s4 === Companion_getInstance_30().get_Rotate_kkxo0p_k$() ? Style_ROTATE_getInstance() : _this__u8e3s4 === Companion_getInstance_30().get_Translate_xeseg8_k$() ? Style_TRANSLATE_getInstance() : Style_TRANSLATE_getInstance();
  }
  function PathMeasure_0() {
    return new SkiaBackedPathMeasure();
  }
  function SkiaBackedPathMeasure(skia) {
    skia = skia === VOID ? PathMeasure_init_$Create$() : skia;
    this.skia_1 = skia;
  }
  protoOf(SkiaBackedPathMeasure).get_skia_ctv62_k$ = function () {
    return this.skia_1;
  };
  protoOf(SkiaBackedPathMeasure).setPath_hen9zs_k$ = function (path, forceClosed) {
    this.skia_1.setPath_aldcej_k$(path == null ? null : asSkiaPath(path), forceClosed);
  };
  protoOf(SkiaBackedPathMeasure).getSegment_x6ele9_k$ = function (startDistance, stopDistance, destination, startWithMoveTo) {
    return this.skia_1.getSegment_ahsiby_k$(startDistance, stopDistance, asSkiaPath(destination), startWithMoveTo);
  };
  protoOf(SkiaBackedPathMeasure).get_length_g42xv3_k$ = function () {
    return this.skia_1.get_length_g42xv3_k$();
  };
  protoOf(SkiaBackedPathMeasure).getPosition_yqkw9d_k$ = function (distance) {
    var result = this.skia_1.getPosition_vh9xfr_k$(distance);
    var tmp;
    if (!(result == null)) {
      var tmp0 = result.get_x_1mhr67_k$();
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = result.get_y_1mhr68_k$();
      var v1 = fromInt(toRawBits(tmp0));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      tmp = _Offset___init__impl__c168vi(tmp$ret$0);
    } else {
      tmp = Companion_getInstance().get_Unspecified_gis8po_k$();
    }
    return tmp;
  };
  protoOf(SkiaBackedPathMeasure).getTangent_gy3br3_k$ = function (distance) {
    var result = this.skia_1.getTangent_ccyi2f_k$(distance);
    var tmp;
    if (!(result == null)) {
      var tmp0 = result.get_x_1mhr67_k$();
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = result.get_y_1mhr68_k$();
      var v1 = fromInt(toRawBits(tmp0));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      tmp = _Offset___init__impl__c168vi(tmp$ret$0);
    } else {
      tmp = Companion_getInstance().get_Unspecified_gis8po_k$();
    }
    return tmp;
  };
  function _set_internalImageFilter__a836z3($this, _set____db54di) {
    $this.internalImageFilter_1 = _set____db54di;
  }
  function _get_internalImageFilter__nitfvf($this) {
    return $this.internalImageFilter_1;
  }
  function RenderEffect() {
    this.internalImageFilter_1 = null;
  }
  protoOf(RenderEffect).asSkiaImageFilter_1de1rj_k$ = function () {
    var tmp0_elvis_lhs = this.internalImageFilter_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = this.createImageFilter_sv02y1_k$();
      this.internalImageFilter_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(RenderEffect).isSupported_j5t6ec_k$ = function () {
    return true;
  };
  function _get_renderEffect__lnsspw($this) {
    return $this.renderEffect_1;
  }
  function _get_radiusX__yn9fij($this) {
    return $this.radiusX_1;
  }
  function _get_radiusY__yn9fje($this) {
    return $this.radiusY_1;
  }
  function _get_edgeTreatment__hm26t2($this) {
    return $this.edgeTreatment_1;
  }
  function Companion_33() {
    Companion_instance_33 = this;
    this.BlurSigmaScale_1 = 0.57735;
  }
  protoOf(Companion_33).get_BlurSigmaScale_a4lbmd_k$ = function () {
    return this.BlurSigmaScale_1;
  };
  protoOf(Companion_33).convertRadiusToSigma_hdwh5f_k$ = function (radius) {
    var tmp;
    if (radius > 0) {
      tmp = this.BlurSigmaScale_1 * radius + 0.5;
    } else {
      tmp = 0.0;
    }
    return tmp;
  };
  var Companion_instance_33;
  function Companion_getInstance_52() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function BlurEffect(renderEffect, radiusX, radiusY, edgeTreatment) {
    Companion_getInstance_52();
    radiusY = radiusY === VOID ? radiusX : radiusY;
    edgeTreatment = edgeTreatment === VOID ? Companion_getInstance_37().get_Clamp_ddetsd_k$() : edgeTreatment;
    RenderEffect.call(this);
    this.renderEffect_1 = renderEffect;
    this.radiusX_1 = radiusX;
    this.radiusY_1 = radiusY;
    this.edgeTreatment_1 = edgeTreatment;
  }
  protoOf(BlurEffect).createImageFilter_sv02y1_k$ = function () {
    var tmp;
    if (this.renderEffect_1 == null) {
      tmp = Companion_getInstance_10().makeBlur$default_wsud0e_k$(Companion_getInstance_52().convertRadiusToSigma_hdwh5f_k$(this.radiusX_1), Companion_getInstance_52().convertRadiusToSigma_hdwh5f_k$(this.radiusY_1), toSkiaTileMode(this.edgeTreatment_1));
    } else {
      tmp = Companion_getInstance_10().makeBlur_dz1nmo_k$(Companion_getInstance_52().convertRadiusToSigma_hdwh5f_k$(this.radiusX_1), Companion_getInstance_52().convertRadiusToSigma_hdwh5f_k$(this.radiusY_1), toSkiaTileMode(this.edgeTreatment_1), this.renderEffect_1.asSkiaImageFilter_1de1rj_k$(), null);
    }
    return tmp;
  };
  protoOf(BlurEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlurEffect))
      return false;
    if (!(this.radiusX_1 === other.radiusX_1))
      return false;
    if (!(this.radiusY_1 === other.radiusY_1))
      return false;
    if (!(this.edgeTreatment_1 === other.edgeTreatment_1))
      return false;
    if (!equals(this.renderEffect_1, other.renderEffect_1))
      return false;
    return true;
  };
  protoOf(BlurEffect).hashCode = function () {
    var tmp0_safe_receiver = this.renderEffect_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + getNumberHashCode(this.radiusX_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.radiusY_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.edgeTreatment_1) | 0;
    return result;
  };
  protoOf(BlurEffect).toString = function () {
    return 'BlurEffect(renderEffect=' + toString_0(this.renderEffect_1) + ', radiusX=' + this.radiusX_1 + ', radiusY=' + this.radiusY_1 + ', ' + ('edgeTreatment=' + TileMode__toString_impl_tlb7f4(this.edgeTreatment_1) + ')');
  };
  function actualTintColorFilter(color, blendMode) {
    return Companion_getInstance_11().makeBlend_hxd0mv_k$(toArgb(color), toSkia(blendMode));
  }
  function actualColorMatrixColorFilter(colorMatrix) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var remappedValues = _ColorMatrix___get_values__impl__bpwpry(colorMatrix).slice();
    remappedValues[4] = remappedValues[4] * (1.0 / 255.0);
    remappedValues[9] = remappedValues[9] * (1.0 / 255.0);
    remappedValues[14] = remappedValues[14] * (1.0 / 255.0);
    remappedValues[19] = remappedValues[19] * (1.0 / 255.0);
    return Companion_getInstance_11().makeMatrix_xfgxbq_k$(new ColorMatrix(remappedValues.slice()));
  }
  function actualColorMatrixFromFilter(filter) {
    return _ColorMatrix___init__impl__3gytx1();
  }
  function actualLightingColorFilter(multiply, add) {
    return Companion_getInstance_11().makeLighting_65ijqe_k$(toArgb(multiply), toArgb(add));
  }
  function asSkiaColorFilter(_this__u8e3s4) {
    return _this__u8e3s4.get_nativeColorFilter_iq2lvc_k$();
  }
  function _get_renderNodeContext__mvuxm($this) {
    return $this.renderNodeContext_1;
  }
  function _set_activeGraphicsLayersCount__afxvlj($this, _set____db54di) {
    $this.activeGraphicsLayersCount_1 = _set____db54di;
  }
  function SkiaGraphicsContext(measureDrawBounds) {
    measureDrawBounds = measureDrawBounds === VOID ? false : measureDrawBounds;
    this.renderNodeContext_1 = RenderNodeContext_init_$Create$(measureDrawBounds);
    this.activeGraphicsLayersCount_1 = 0;
  }
  protoOf(SkiaGraphicsContext).get_activeGraphicsLayersCount_oxucdp_k$ = function () {
    return this.activeGraphicsLayersCount_1;
  };
  protoOf(SkiaGraphicsContext).dispose_3nnxhr_k$ = function () {
    this.renderNodeContext_1.close_yn9xrc_k$();
  };
  protoOf(SkiaGraphicsContext).setLightingInfo_nezzhw_k$ = function (centerX, centerY, centerZ, radius, ambientShadowAlpha, spotShadowAlpha) {
    this.renderNodeContext_1.setLightingInfo_nezzhw_k$(centerX, centerY, centerZ, radius, ambientShadowAlpha, spotShadowAlpha);
  };
  protoOf(SkiaGraphicsContext).setLightingInfo$default_k5rzbj_k$ = function (centerX, centerY, centerZ, radius, ambientShadowAlpha, spotShadowAlpha, $super) {
    centerX = centerX === VOID ? 1.4E-45 : centerX;
    centerY = centerY === VOID ? 1.4E-45 : centerY;
    centerZ = centerZ === VOID ? 1.4E-45 : centerZ;
    radius = radius === VOID ? 0.0 : radius;
    ambientShadowAlpha = ambientShadowAlpha === VOID ? 0.0 : ambientShadowAlpha;
    spotShadowAlpha = spotShadowAlpha === VOID ? 0.0 : spotShadowAlpha;
    var tmp;
    if ($super === VOID) {
      this.setLightingInfo_nezzhw_k$(centerX, centerY, centerZ, radius, ambientShadowAlpha, spotShadowAlpha);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.setLightingInfo_nezzhw_k$.call(this, centerX, centerY, centerZ, radius, ambientShadowAlpha, spotShadowAlpha);
    }
    return tmp;
  };
  protoOf(SkiaGraphicsContext).createGraphicsLayer_a0ja3u_k$ = function () {
    this.activeGraphicsLayersCount_1 = this.activeGraphicsLayersCount_1 + 1 | 0;
    return new GraphicsLayer(RenderNode_init_$Create$(this.renderNodeContext_1));
  };
  protoOf(SkiaGraphicsContext).releaseGraphicsLayer_8n1d07_k$ = function (layer) {
    if (!layer.get_isReleased_smc74g_k$()) {
      this.activeGraphicsLayersCount_1 = this.activeGraphicsLayersCount_1 - 1 | 0;
    }
    layer.release_485hqk_k$();
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
    bitmap.allocPixels_elr7wo_k$(imageInfo);
    return new SkiaBackedImageBitmap(bitmap);
  }
  function asSkiaBitmap(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedImageBitmap) {
      tmp = _this__u8e3s4.bitmap_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Image');
    }
    return tmp;
  }
  function toSkiaColorType(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_25().get_Argb8888_epitdf_k$() ? Companion_getInstance_12().get_N32_18jozg_k$() : _this__u8e3s4 === Companion_getInstance_25().get_Alpha8_8qn3sx_k$() ? ColorType_ALPHA_8_getInstance() : _this__u8e3s4 === Companion_getInstance_25().get_Rgb565_qf3bri_k$() ? ColorType_RGB_565_getInstance() : _this__u8e3s4 === Companion_getInstance_25().get_F16_tc2i3k_k$() ? ColorType_RGBA_F16_getInstance() : Companion_getInstance_12().get_N32_18jozg_k$();
  }
  function toSkiaColorSpace(_this__u8e3s4) {
    return _this__u8e3s4.equals(ColorSpaces_getInstance().get_Srgb_woa2g3_k$()) ? Companion_getInstance_13().get_sRGB_wottib_k$() : _this__u8e3s4.equals(ColorSpaces_getInstance().get_LinearSrgb_gaeay0_k$()) ? Companion_getInstance_13().get_sRGBLinear_5cyq1k_k$() : _this__u8e3s4.equals(ColorSpaces_getInstance().get_DisplayP3_pa2gtg_k$()) ? Companion_getInstance_13().get_displayP3_clxlks_k$() : Companion_getInstance_13().get_sRGB_wottib_k$();
  }
  function SkiaBackedImageBitmap(bitmap) {
    this.bitmap_1 = bitmap;
    this.colorSpace_1 = toComposeColorSpace(this.bitmap_1.get_colorSpace_yx2b0_k$());
    this.config_1 = toComposeConfig(this.bitmap_1.get_colorType_tr6rn0_k$());
    this.hasAlpha_1 = !this.bitmap_1.get_isOpaque_xnqi0k_k$();
  }
  protoOf(SkiaBackedImageBitmap).get_bitmap_bfxu7s_k$ = function () {
    return this.bitmap_1;
  };
  protoOf(SkiaBackedImageBitmap).get_colorSpace_yx2b0_k$ = function () {
    return this.colorSpace_1;
  };
  protoOf(SkiaBackedImageBitmap).get_config_d6pt2v_k$ = function () {
    return this.config_1;
  };
  protoOf(SkiaBackedImageBitmap).get_hasAlpha_txpv0z_k$ = function () {
    return this.hasAlpha_1;
  };
  protoOf(SkiaBackedImageBitmap).get_height_e7t92o_k$ = function () {
    return this.bitmap_1.get_height_e7t92o_k$();
  };
  protoOf(SkiaBackedImageBitmap).get_width_j0q4yl_k$ = function () {
    return this.bitmap_1.get_width_j0q4yl_k$();
  };
  protoOf(SkiaBackedImageBitmap).prepareToDraw_sb34p6_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(SkiaBackedImageBitmap).readPixels_vm93oo_k$ = function (buffer, startX, startY, width, height, bufferOffset, stride) {
    var lastScanline = bufferOffset + imul(height - 1 | 0, stride) | 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(startX >= 0 && startY >= 0)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(width > 0 && (startX + width | 0) <= this.get_width_j0q4yl_k$())) {
      var message_0 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(height > 0 && (startY + height | 0) <= this.get_height_e7t92o_k$())) {
      var message_1 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(abs(stride) >= width)) {
      var message_2 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(bufferOffset >= 0 && (bufferOffset + width | 0) <= buffer.length)) {
      var message_3 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_3));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(lastScanline >= 0 && (lastScanline + width | 0) <= buffer.length)) {
      var message_4 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_4));
    }
    var colorInfo = new ColorInfo(ColorType_BGRA_8888_getInstance(), ColorAlphaType_UNPREMUL_getInstance(), Companion_getInstance_13().get_sRGB_wottib_k$());
    var imageInfo = new ImageInfo(colorInfo, width, height);
    var bytesPerPixel = 4;
    var bytes = ensureNotNull(this.bitmap_1.readPixels_chdhwh_k$(imageInfo, imul(stride, bytesPerPixel), startX, startY));
    putBytesInto(bytes, buffer, bufferOffset, bytes.length / bytesPerPixel | 0);
  };
  function toComposeColorSpace(_this__u8e3s4) {
    return equals(_this__u8e3s4, Companion_getInstance_13().get_sRGB_wottib_k$()) ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : equals(_this__u8e3s4, Companion_getInstance_13().get_sRGBLinear_5cyq1k_k$()) ? ColorSpaces_getInstance().get_LinearSrgb_gaeay0_k$() : equals(_this__u8e3s4, Companion_getInstance_13().get_displayP3_clxlks_k$()) ? ColorSpaces_getInstance().get_DisplayP3_pa2gtg_k$() : ColorSpaces_getInstance().get_Srgb_woa2g3_k$();
  }
  function toComposeConfig(_this__u8e3s4) {
    return _this__u8e3s4.equals(Companion_getInstance_12().get_N32_18jozg_k$()) ? Companion_getInstance_25().get_Argb8888_epitdf_k$() : _this__u8e3s4.equals(ColorType_ALPHA_8_getInstance()) ? Companion_getInstance_25().get_Alpha8_8qn3sx_k$() : _this__u8e3s4.equals(ColorType_RGB_565_getInstance()) ? Companion_getInstance_25().get_Rgb565_qf3bri_k$() : _this__u8e3s4.equals(ColorType_RGBA_F16_getInstance()) ? Companion_getInstance_25().get_F16_tc2i3k_k$() : Companion_getInstance_25().get_Argb8888_epitdf_k$();
  }
  function toComposeImageBitmap(_this__u8e3s4) {
    return new SkiaBackedImageBitmap(toBitmap(_this__u8e3s4));
  }
  function PathIterator_0(path, conicEvaluation, tolerance) {
    conicEvaluation = conicEvaluation === VOID ? ConicEvaluation_AsQuadratics_getInstance() : conicEvaluation;
    tolerance = tolerance === VOID ? 0.25 : tolerance;
    return new SkiaPathIterator(path, conicEvaluation, tolerance);
  }
  function _get_skiaPath__j80uoa($this) {
    return $this.skiaPath_1;
  }
  function _get_iterator__8i7rvn($this) {
    return $this.iterator_1;
  }
  function SkiaPathIterator(path, conicEvaluation, tolerance) {
    this.path_1 = path;
    this.conicEvaluation_1 = conicEvaluation;
    this.tolerance_1 = tolerance;
    this.skiaPath_1 = asSkiaPath(this.path_1);
    this.iterator_1 = this.skiaPath_1.iterator_jk1svi_k$();
  }
  protoOf(SkiaPathIterator).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(SkiaPathIterator).get_conicEvaluation_93uv0v_k$ = function () {
    return this.conicEvaluation_1;
  };
  protoOf(SkiaPathIterator).get_tolerance_pll55w_k$ = function () {
    return this.tolerance_1;
  };
  protoOf(SkiaPathIterator).calculateSize_hg6aym_k$ = function (includeConvertedConics) {
    return this.skiaPath_1.get_verbsCount_7ejlqc_k$();
  };
  protoOf(SkiaPathIterator).hasNext_bitz1p_k$ = function () {
    return this.iterator_1.hasNext_bitz1p_k$();
  };
  protoOf(SkiaPathIterator).next_amu3m5_k$ = function (points, offset) {
    // Inline function 'kotlin.check' call
    if (!((points.length - offset | 0) >= 8)) {
      var message = 'The points array must contain at least 8 floats';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!this.hasNext_bitz1p_k$())
      return Type_Done_getInstance();
    var segment = this.iterator_1.next_20eer_k$();
    // Inline function 'kotlin.requireNotNull' call
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (segment == null) {
        var message_0 = 'Required value was null.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        break $l$block;
      }
    }
    var tmp;
    switch (segment.get_verb_wow5m0_k$().get_ordinal_ip24qg_k$()) {
      case 0:
        points[offset] = ensureNotNull(segment.get_p0_kntnsn_k$()).get_x_1mhr67_k$();
        points[offset + 1 | 0] = ensureNotNull(segment.get_p0_kntnsn_k$()).get_y_1mhr68_k$();
        tmp = Type_Move_getInstance();
        break;
      case 1:
        points[offset] = ensureNotNull(segment.get_p0_kntnsn_k$()).get_x_1mhr67_k$();
        points[offset + 1 | 0] = ensureNotNull(segment.get_p0_kntnsn_k$()).get_y_1mhr68_k$();
        points[offset + 2 | 0] = ensureNotNull(segment.get_p1_kntnsm_k$()).get_x_1mhr67_k$();
        points[offset + 3 | 0] = ensureNotNull(segment.get_p1_kntnsm_k$()).get_y_1mhr68_k$();
        tmp = Type_Line_getInstance();
        break;
      case 2:
        points[offset] = ensureNotNull(segment.get_p0_kntnsn_k$()).get_x_1mhr67_k$();
        points[offset + 1 | 0] = ensureNotNull(segment.get_p0_kntnsn_k$()).get_y_1mhr68_k$();
        points[offset + 2 | 0] = ensureNotNull(segment.get_p1_kntnsm_k$()).get_x_1mhr67_k$();
        points[offset + 3 | 0] = ensureNotNull(segment.get_p1_kntnsm_k$()).get_y_1mhr68_k$();
        points[offset + 4 | 0] = ensureNotNull(segment.get_p2_kntnsl_k$()).get_x_1mhr67_k$();
        points[offset + 5 | 0] = ensureNotNull(segment.get_p2_kntnsl_k$()).get_y_1mhr68_k$();
        tmp = Type_Quadratic_getInstance();
        break;
      case 3:
        points[offset] = ensureNotNull(segment.get_p0_kntnsn_k$()).get_x_1mhr67_k$();
        points[offset + 1 | 0] = ensureNotNull(segment.get_p0_kntnsn_k$()).get_y_1mhr68_k$();
        points[offset + 2 | 0] = ensureNotNull(segment.get_p1_kntnsm_k$()).get_x_1mhr67_k$();
        points[offset + 3 | 0] = ensureNotNull(segment.get_p1_kntnsm_k$()).get_y_1mhr68_k$();
        points[offset + 4 | 0] = ensureNotNull(segment.get_p2_kntnsl_k$()).get_x_1mhr67_k$();
        points[offset + 5 | 0] = ensureNotNull(segment.get_p2_kntnsl_k$()).get_y_1mhr68_k$();
        points[offset + 6 | 0] = segment.get_conicWeight_53i43v_k$();
        points[offset + 7 | 0] = segment.get_conicWeight_53i43v_k$();
        tmp = Type_Conic_getInstance();
        break;
      case 4:
        points[offset] = ensureNotNull(segment.get_p0_kntnsn_k$()).get_x_1mhr67_k$();
        points[offset + 1 | 0] = ensureNotNull(segment.get_p0_kntnsn_k$()).get_y_1mhr68_k$();
        points[offset + 2 | 0] = ensureNotNull(segment.get_p1_kntnsm_k$()).get_x_1mhr67_k$();
        points[offset + 3 | 0] = ensureNotNull(segment.get_p1_kntnsm_k$()).get_y_1mhr68_k$();
        points[offset + 4 | 0] = ensureNotNull(segment.get_p2_kntnsl_k$()).get_x_1mhr67_k$();
        points[offset + 5 | 0] = ensureNotNull(segment.get_p2_kntnsl_k$()).get_y_1mhr68_k$();
        points[offset + 6 | 0] = ensureNotNull(segment.get_p3_kntnsk_k$()).get_x_1mhr67_k$();
        points[offset + 7 | 0] = ensureNotNull(segment.get_p3_kntnsk_k$()).get_y_1mhr68_k$();
        tmp = Type_Cubic_getInstance();
        break;
      case 5:
        tmp = Type_Close_getInstance();
        break;
      case 6:
        tmp = Type_Done_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(SkiaPathIterator).next_20eer_k$ = function () {
    if (!this.hasNext_bitz1p_k$())
      return get_DoneSegment();
    var segment = this.iterator_1.next_20eer_k$();
    // Inline function 'kotlin.requireNotNull' call
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (segment == null) {
        var message = 'Required value was null.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var tmp;
    switch (segment.get_verb_wow5m0_k$().get_ordinal_ip24qg_k$()) {
      case 0:
        var tmp_0 = Type_Move_getInstance();
        // Inline function 'kotlin.floatArrayOf' call

        var tmp$ret$3 = new Float32Array([ensureNotNull(segment.get_p0_kntnsn_k$()).get_x_1mhr67_k$(), ensureNotNull(segment.get_p0_kntnsn_k$()).get_y_1mhr68_k$()]);
        tmp = new PathSegment(tmp_0, tmp$ret$3, 0.0);
        break;
      case 1:
        var tmp_1 = Type_Line_getInstance();
        // Inline function 'kotlin.floatArrayOf' call

        var tmp$ret$4 = new Float32Array([ensureNotNull(segment.get_p0_kntnsn_k$()).get_x_1mhr67_k$(), ensureNotNull(segment.get_p0_kntnsn_k$()).get_y_1mhr68_k$(), ensureNotNull(segment.get_p1_kntnsm_k$()).get_x_1mhr67_k$(), ensureNotNull(segment.get_p1_kntnsm_k$()).get_y_1mhr68_k$()]);
        tmp = new PathSegment(tmp_1, tmp$ret$4, 0.0);
        break;
      case 2:
        var tmp_2 = Type_Quadratic_getInstance();
        // Inline function 'kotlin.floatArrayOf' call

        var tmp$ret$5 = new Float32Array([ensureNotNull(segment.get_p0_kntnsn_k$()).get_x_1mhr67_k$(), ensureNotNull(segment.get_p0_kntnsn_k$()).get_y_1mhr68_k$(), ensureNotNull(segment.get_p1_kntnsm_k$()).get_x_1mhr67_k$(), ensureNotNull(segment.get_p1_kntnsm_k$()).get_y_1mhr68_k$(), ensureNotNull(segment.get_p2_kntnsl_k$()).get_x_1mhr67_k$(), ensureNotNull(segment.get_p2_kntnsl_k$()).get_y_1mhr68_k$()]);
        tmp = new PathSegment(tmp_2, tmp$ret$5, 0.0);
        break;
      case 3:
        var tmp_3 = Type_Quadratic_getInstance();
        // Inline function 'kotlin.floatArrayOf' call

        var tmp$ret$6 = new Float32Array([ensureNotNull(segment.get_p0_kntnsn_k$()).get_x_1mhr67_k$(), ensureNotNull(segment.get_p0_kntnsn_k$()).get_y_1mhr68_k$(), ensureNotNull(segment.get_p1_kntnsm_k$()).get_x_1mhr67_k$(), ensureNotNull(segment.get_p1_kntnsm_k$()).get_y_1mhr68_k$(), ensureNotNull(segment.get_p2_kntnsl_k$()).get_x_1mhr67_k$(), ensureNotNull(segment.get_p2_kntnsl_k$()).get_y_1mhr68_k$()]);
        tmp = new PathSegment(tmp_3, tmp$ret$6, segment.get_conicWeight_53i43v_k$());
        break;
      case 4:
        var tmp_4 = Type_Cubic_getInstance();
        // Inline function 'kotlin.floatArrayOf' call

        var tmp$ret$7 = new Float32Array([ensureNotNull(segment.get_p0_kntnsn_k$()).get_x_1mhr67_k$(), ensureNotNull(segment.get_p0_kntnsn_k$()).get_y_1mhr68_k$(), ensureNotNull(segment.get_p1_kntnsm_k$()).get_x_1mhr67_k$(), ensureNotNull(segment.get_p1_kntnsm_k$()).get_y_1mhr68_k$(), ensureNotNull(segment.get_p2_kntnsl_k$()).get_x_1mhr67_k$(), ensureNotNull(segment.get_p2_kntnsl_k$()).get_y_1mhr68_k$(), ensureNotNull(segment.get_p3_kntnsk_k$()).get_x_1mhr67_k$(), ensureNotNull(segment.get_p3_kntnsk_k$()).get_y_1mhr68_k$()]);
        tmp = new PathSegment(tmp_4, tmp$ret$7, 0.0);
        break;
      case 5:
        tmp = get_CloseSegment();
        break;
      case 6:
        tmp = get_DoneSegment();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function _set__shader__8bf01r($this, _set____db54di) {
    $this._shader_1 = _set____db54di;
  }
  function _get__shader__xxnaer($this) {
    return $this._shader_1;
  }
  function _set__wrapper__4fc0lf($this, _set____db54di) {
    $this._wrapper_1 = _set____db54di;
  }
  function _get__wrapper__8dkavd($this) {
    return $this._wrapper_1;
  }
  function _set__matrix__sdavyz($this, _set____db54di) {
    $this._matrix_1 = _set____db54di;
  }
  function _get__matrix__h1kvn5($this) {
    return $this._matrix_1;
  }
  function TransformShader() {
    this._shader_1 = null;
    this._wrapper_1 = null;
    this._matrix_1 = null;
  }
  protoOf(TransformShader).transform_dm16su_k$ = function (matrix) {
    var tmp = this;
    var tmp_0;
    var tmp_1 = matrix;
    if (!((tmp_1 == null ? null : new Matrix(tmp_1)) == null)) {
      // Inline function 'kotlin.apply' call
      var this_0 = Companion_getInstance_7().makeTranslate_9v7aio_k$(0.0, 0.0);
      setFrom(this_0, matrix);
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    tmp._matrix_1 = tmp_0;
    this._wrapper_1 = null;
  };
  protoOf(TransformShader).set_shader_tgaw5e_k$ = function (value) {
    this._shader_1 = value;
    this._wrapper_1 = null;
  };
  protoOf(TransformShader).get_shader_jgtazy_k$ = function () {
    var tmp0_elvis_lhs = this._matrix_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this._shader_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var matrix = tmp;
    if (this._wrapper_1 == null) {
      var tmp_0 = this;
      var tmp1_safe_receiver = this._shader_1;
      tmp_0._wrapper_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.makeWithLocalMatrix_opjxgu_k$(matrix);
    }
    return this._wrapper_1;
  };
  function ActualLinearGradientShader(from, to, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_14();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(from);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(from);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(to);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(to);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_3 = floatFromBits(bits_2);
    var tmp_4 = toIntArray(colors);
    return tmp.makeLinearGradient_gatnrf_k$(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, colorStops == null ? null : toFloatArray(colorStops), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualRadialGradientShader(center, radius, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_14();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits_0);
    var tmp_2 = toIntArray(colors);
    return tmp.makeRadialGradient_ai7hst_k$(tmp_0, tmp_1, radius, tmp_2, colorStops == null ? null : toFloatArray(colorStops), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualSweepGradientShader(center, colors, colorStops) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_14();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits_0);
    var tmp_2 = toIntArray(colors);
    return tmp.makeSweepGradient_hn03zg_k$(tmp_0, tmp_1, tmp_2, colorStops == null ? null : toFloatArray(colorStops));
  }
  function ActualCompositeShader(dst, src, blendMode) {
    return Companion_getInstance_14().makeBlend_n95y0n_k$(toSkia(blendMode), dst, src);
  }
  function validateColorStops(colors, colorStops) {
    if (colorStops == null) {
      if (colors.get_size_woubt6_k$() < 2) {
        throw IllegalArgumentException_init_$Create$('colors must have length of at least 2 if colorStops is omitted.');
      }
    } else if (!(colors.get_size_woubt6_k$() === colorStops.get_size_woubt6_k$())) {
      throw IllegalArgumentException_init_$Create$('colors and colorStops arguments must have equal length.');
    }
  }
  function toIntArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.get_size_woubt6_k$();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = toArgb(_this__u8e3s4.get_c1px32_k$(tmp_2).value_1);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function ActualImageShader(image, tileModeX, tileModeY) {
    return asSkiaBitmap(image).makeShader$default_iqsr28_k$(toSkiaTileMode(tileModeX), toSkiaTileMode(tileModeY));
  }
  function toSkiaTileMode(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_37().get_Clamp_ddetsd_k$() ? FilterTileMode_CLAMP_getInstance() : _this__u8e3s4 === Companion_getInstance_37().get_Repeated_jl00zi_k$() ? FilterTileMode_REPEAT_getInstance() : _this__u8e3s4 === Companion_getInstance_37().get_Mirror_rukh4t_k$() ? FilterTileMode_MIRROR_getInstance() : _this__u8e3s4 === Companion_getInstance_37().get_Decal_4ld873_k$() ? FilterTileMode_DECAL_getInstance() : FilterTileMode_CLAMP_getInstance();
  }
  function toSkiaVertexMode(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_38().get_Triangles_687gr1_k$() ? VertexMode_TRIANGLES_getInstance() : _this__u8e3s4 === Companion_getInstance_38().get_TriangleStrip_pmcutk_k$() ? VertexMode_TRIANGLE_STRIP_getInstance() : _this__u8e3s4 === Companion_getInstance_38().get_TriangleFan_rxrqvh_k$() ? VertexMode_TRIANGLE_FAN_getInstance() : VertexMode_TRIANGLES_getInstance();
  }
  function _set_renderNode__rpuhnj($this, _set____db54di) {
    $this.renderNode_1 = _set____db54di;
  }
  function _get_renderNode__cnlwib($this) {
    return $this.renderNode_1;
  }
  function _get_pictureDrawScope__hqcsft($this) {
    return $this.pictureDrawScope_1;
  }
  function _set_outlineDirty__1qe6ah($this, _set____db54di) {
    $this.outlineDirty_1 = _set____db54di;
  }
  function _get_outlineDirty__dtck9n($this) {
    return $this.outlineDirty_1;
  }
  function _set_roundRectOutlineTopLeft__hu9x8n($this, _set____db54di) {
    $this.roundRectOutlineTopLeft_1 = _set____db54di;
  }
  function _get_roundRectOutlineTopLeft__wpoqh1($this) {
    return $this.roundRectOutlineTopLeft_1;
  }
  function _set_roundRectOutlineSize__o2fmrq($this, _set____db54di) {
    $this.roundRectOutlineSize_1 = _set____db54di;
  }
  function _get_roundRectOutlineSize__a4cyre($this) {
    return $this.roundRectOutlineSize_1;
  }
  function _set_roundRectCornerRadius__pn1b3g($this, _set____db54di) {
    $this.roundRectCornerRadius_1 = _set____db54di;
  }
  function _get_roundRectCornerRadius__jheyns($this) {
    return $this.roundRectCornerRadius_1;
  }
  function _set_internalOutline__y5l5sw($this, _set____db54di) {
    $this.internalOutline_1 = _set____db54di;
  }
  function _get_internalOutline__o1uyac($this) {
    return $this.internalOutline_1;
  }
  function _set_outlinePath__rdelr6($this, _set____db54di) {
    $this.outlinePath_1 = _set____db54di;
  }
  function _get_outlinePath__2wzkkq($this) {
    return $this.outlinePath_1;
  }
  function _set_parentLayerUsages__gubmwk($this, _set____db54di) {
    $this.parentLayerUsages_1 = _set____db54di;
  }
  function _get_parentLayerUsages__wgzis8($this) {
    return $this.parentLayerUsages_1;
  }
  function _get_childDependenciesTracker__9ycftk($this) {
    return $this.childDependenciesTracker_1;
  }
  function _set_size__9twho6($this, value) {
    if (!equals($this.size_1, value)) {
      $this.size_1 = value;
      var tmp0_safe_receiver = $this.renderNode_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp = Companion_getInstance_4();
        var tmp_0 = _IntOffset___get_x__impl__qiqr5o($this.topLeft_1);
        var tmp_1 = _IntOffset___get_y__impl__2avpwj($this.topLeft_1);
        // Inline function 'androidx.compose.ui.unit.IntSize.width' call
        // Inline function 'androidx.compose.ui.util.unpackInt1' call
        var value_0 = _IntSize___get_packedValue__impl__uho7jf(value);
        var tmp_2 = convertToInt(shiftRight(value_0, 32));
        // Inline function 'androidx.compose.ui.unit.IntSize.height' call
        // Inline function 'androidx.compose.ui.util.unpackInt2' call
        var value_1 = _IntSize___get_packedValue__impl__uho7jf(value);
        var tmp$ret$3 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
        tmp0_safe_receiver.set_bounds_tf3wyp_k$(tmp.makeXYWH_irfy4g_k$(tmp_0, tmp_1, tmp_2, tmp$ret$3));
      }
      // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
      var this_0 = $this.roundRectOutlineSize_1;
      if (equalsLong(_Size___get_packedValue__impl__7rlt1o(this_0), new Long(2143289344, 2143289344))) {
        $this.outlineDirty_1 = true;
        configureOutlineAndClip($this);
      }
    }
  }
  function resetOutlineParams($this) {
    $this.internalOutline_1 = null;
    $this.outlinePath_1 = null;
    $this.roundRectOutlineSize_1 = Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
    $this.roundRectOutlineTopLeft_1 = Companion_getInstance().get_Zero_k6n73t_k$();
    $this.roundRectCornerRadius_1 = 0.0;
    $this.outlineDirty_1 = true;
  }
  function _set_isReleased__4u4tf4($this, _set____db54di) {
    $this.isReleased_1 = _set____db54di;
  }
  function recordWithTracking($this, block) {
    var tmp0_elvis_lhs = $this.renderNode_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var renderNode = tmp;
    var recordingCanvas = renderNode.beginRecording_s1tv0o_k$();
    try {
      var tmp_0 = asComposeCanvas(recordingCanvas);
      var composeCanvas = tmp_0 instanceof SkiaBackedCanvas ? tmp_0 : THROW_CCE();
      // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.withTracking' call
      var this_0 = $this.childDependenciesTracker_1;
      access$_set_oldDependency__lsok8j(this_0, access$_get_dependency__eau0ww(this_0));
      var tmp0_safe_receiver = access$_get_dependenciesSet__8t5wug(this_0);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        if (tmp0_safe_receiver.isNotEmpty_cjxbwk_k$()) {
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
          oldSet.addAll_cozwho_k$(tmp0_safe_receiver);
          tmp0_safe_receiver.clear_j9egeb_k$();
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
        if (tmp2_safe_receiver.isNotEmpty_cjxbwk_k$()) {
          // Inline function 'androidx.collection.ScatterSet.forEach' call
          // Inline function 'kotlin.contracts.contract' call
          var elements = tmp2_safe_receiver.get_elements_1kknxg_k$();
          $l$block: {
            // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
            // Inline function 'kotlin.contracts.contract' call
            var m = tmp2_safe_receiver.get_metadata_ha42hw_k$();
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
          tmp2_safe_receiver.clear_j9egeb_k$();
        }
      }
    }finally {
      renderNode.endRecording_7eq1dy_k$();
    }
  }
  function addSubLayer($this, graphicsLayer) {
    if ($this.childDependenciesTracker_1.onDependencyAdded_1if4qq_k$(graphicsLayer)) {
      onAddedToParentLayer(graphicsLayer);
    }
  }
  function onAddedToParentLayer($this) {
    $this.parentLayerUsages_1 = $this.parentLayerUsages_1 + 1 | 0;
  }
  function onRemovedFromParentLayer($this) {
    $this.parentLayerUsages_1 = $this.parentLayerUsages_1 - 1 | 0;
    discardContentIfReleasedAndHaveNoParentLayerUsages($this);
  }
  function configureOutlineAndClip($this) {
    if (!$this.outlineDirty_1)
      return Unit_getInstance();
    var tmp0_elvis_lhs = $this.renderNode_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var renderNode = tmp;
    var outlineIsNeeded = $this.clip_1 || $this.shadowElevation_1 > 0.0;
    if (!outlineIsNeeded) {
      renderNode.set_clip_a88iug_k$(false);
      renderNode.setClipPath$default_jjryc5_k$(null);
    } else {
      renderNode.set_clip_a88iug_k$($this.clip_1);
      var tmpOutline = $this.get_outline_h12qhz_k$();
      if (tmpOutline instanceof Rectangle) {
        renderNode.setClipRect$default_pte54u_k$(toSkiaRect(tmpOutline.get_rect_wotlbh_k$()), VOID, true);
      } else {
        if (tmpOutline instanceof Rounded) {
          renderNode.setClipRRect$default_l28yce_k$(toSkiaRRect(tmpOutline.get_roundRect_8fhall_k$()), VOID, true);
        } else {
          if (tmpOutline instanceof Generic) {
            renderNode.setClipPath$default_jjryc5_k$(asSkiaPath(tmpOutline.get_path_wos8ry_k$()), VOID, true);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
    $this.outlineDirty_1 = false;
  }
  function resolveOutlinePosition($this, block) {
    var layerSize = toSize_0($this.size_1);
    var rRectTopLeft = $this.roundRectOutlineTopLeft_1;
    var rRectSize = $this.roundRectOutlineSize_1;
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    if (equalsLong(_Size___get_packedValue__impl__7rlt1o(rRectSize), new Long(2143289344, 2143289344))) {
      tmp = layerSize;
    } else {
      tmp = rRectSize;
    }
    var outlineSize = tmp;
    return block(new Offset(rRectTopLeft), new Size(outlineSize));
  }
  function discardContentIfReleasedAndHaveNoParentLayerUsages($this) {
    if ($this.isReleased_1 && $this.parentLayerUsages_1 === 0) {
      // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.removeDependencies' call
      var this_0 = $this.childDependenciesTracker_1;
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
        var elements = tmp1_safe_receiver.get_elements_1kknxg_k$();
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = tmp1_safe_receiver.get_metadata_ha42hw_k$();
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
        tmp1_safe_receiver.clear_j9egeb_k$();
      }
      var tmp0_safe_receiver_0 = $this.renderNode_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        tmp0_safe_receiver_0.close_yn9xrc_k$();
      }
      $this.renderNode_1 = null;
    }
  }
  function updateLayerProperties($this) {
    var tmp0_safe_receiver = $this.renderNode_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp;
      if (requiresLayer($this)) {
        // Inline function 'kotlin.also' call
        var this_0 = Paint_init_$Create$();
        this_0.setAlphaf_y68m0e_k$($this.alpha_1);
        var tmp0_safe_receiver_0 = $this.renderEffect_1;
        this_0.set_imageFilter_3887og_k$(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.asSkiaImageFilter_1de1rj_k$());
        var tmp1_safe_receiver = $this.colorFilter_1;
        this_0.set_colorFilter_9zyasg_k$(tmp1_safe_receiver == null ? null : asSkiaColorFilter(tmp1_safe_receiver));
        this_0.set_blendMode_s14yaj_k$(toSkia($this.blendMode_1));
        tmp = this_0;
      } else {
        tmp = null;
      }
      tmp0_safe_receiver.set_layerPaint_xxqxy6_k$(tmp);
    }
  }
  function requiresLayer($this) {
    var alphaNeedsLayer = $this.alpha_1 < 1.0 && !($this.compositingStrategy_1 === Companion_getInstance_49().get_ModulateAlpha_5jsfhv_k$());
    var hasColorFilter = !($this.colorFilter_1 == null);
    var hasBlendMode = !($this.blendMode_1 === Companion_getInstance_18().get_SrcOver_anr685_k$());
    var hasRenderEffect = !($this.renderEffect_1 == null);
    var offscreenBufferRequested = $this.compositingStrategy_1 === Companion_getInstance_49().get_Offscreen_m8w7dv_k$();
    return alphaNeedsLayer || hasColorFilter || hasBlendMode || hasRenderEffect || offscreenBufferRequested;
  }
  function GraphicsLayer$record$lambda(this$0, $density, $layoutDirection, $size, $block) {
    return function (canvas) {
      var tmp;
      if (this$0.compositingStrategy_1 === Companion_getInstance_49().get_ModulateAlpha_5jsfhv_k$()) {
        tmp = this$0.alpha_1;
      } else {
        tmp = 1.0;
      }
      canvas.set_alphaMultiplier_dd868n_k$(tmp);
      var tmp0 = this$0.pictureDrawScope_1;
      var tmp2 = $density;
      var tmp4 = $layoutDirection;
      var tmp8 = toSize_0($size);
      var tmp10 = this$0;
      // Inline function 'androidx.compose.ui.graphics.drawscope.draw' call
      var block = $block;
      var prevDensity = tmp0.get_drawContext_ffwztu_k$().get_density_qy0267_k$();
      var prevLayoutDirection = tmp0.get_drawContext_ffwztu_k$().get_layoutDirection_7e37v0_k$();
      var prevCanvas = tmp0.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$();
      var prevSize = tmp0.get_drawContext_ffwztu_k$().get_size_cxx1ym_k$();
      var prevLayer = tmp0.get_drawContext_ffwztu_k$().get_graphicsLayer_i0zvs3_k$();
      // Inline function 'kotlin.apply' call
      var this_0 = tmp0.get_drawContext_ffwztu_k$();
      this_0.set_density_3p0aj9_k$(tmp2);
      this_0.set_layoutDirection_vthtz8_k$(tmp4);
      this_0.set_canvas_1yi0mf_k$(canvas);
      this_0.set_size_6a0e6q_k$(tmp8);
      this_0.set_graphicsLayer_4v1flm_k$(tmp10);
      canvas.save_fbe7h_k$();
      try {
        block(tmp0);
      }finally {
        canvas.restore_a1ykhu_k$();
        // Inline function 'kotlin.apply' call
        var this_1 = tmp0.get_drawContext_ffwztu_k$();
        this_1.set_density_3p0aj9_k$(prevDensity);
        this_1.set_layoutDirection_vthtz8_k$(prevLayoutDirection);
        this_1.set_canvas_1yi0mf_k$(prevCanvas);
        this_1.set_size_6a0e6q_k$(prevSize);
        this_1.set_graphicsLayer_4v1flm_k$(prevLayer);
      }
      return Unit_getInstance();
    };
  }
  function GraphicsLayer(renderNode) {
    this.renderNode_1 = renderNode;
    this.pictureDrawScope_1 = new CanvasDrawScope();
    this.outlineDirty_1 = true;
    this.roundRectOutlineTopLeft_1 = Companion_getInstance().get_Zero_k6n73t_k$();
    this.roundRectOutlineSize_1 = Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
    this.roundRectCornerRadius_1 = 0.0;
    this.internalOutline_1 = null;
    this.outlinePath_1 = null;
    this.parentLayerUsages_1 = 0;
    this.childDependenciesTracker_1 = new ChildLayerDependenciesTracker();
    this.compositingStrategy_1 = Companion_getInstance_49().get_Auto_t2nrtj_k$();
    this.topLeft_1 = Companion_getInstance_1().get_Zero_6hc3i8_k$();
    this.size_1 = Companion_getInstance_15().get_Zero_9we0a6_k$();
    this.pivotOffset_1 = Companion_getInstance().get_Unspecified_gis8po_k$();
    this.alpha_1 = 1.0;
    this.scaleX_1 = 1.0;
    this.scaleY_1 = 1.0;
    this.translationX_1 = 0.0;
    this.translationY_1 = 0.0;
    this.shadowElevation_1 = 0.0;
    this.ambientShadowColor_1 = Companion_getInstance_21().get_Black_t4k9fh_k$();
    this.spotShadowColor_1 = Companion_getInstance_21().get_Black_t4k9fh_k$();
    this.blendMode_1 = Companion_getInstance_18().get_SrcOver_anr685_k$();
    this.colorFilter_1 = null;
    this.rotationX_1 = 0.0;
    this.rotationY_1 = 0.0;
    this.rotationZ_1 = 0.0;
    this.cameraDistance_1 = 8.0;
    this.clip_1 = false;
    this.renderEffect_1 = null;
    this.isReleased_1 = false;
  }
  protoOf(GraphicsLayer).set_compositingStrategy_9zy9wh_k$ = function (value) {
    if (!(this.compositingStrategy_1 === value)) {
      this.compositingStrategy_1 = value;
      updateLayerProperties(this);
    }
  };
  protoOf(GraphicsLayer).get_compositingStrategy_udtphd_k$ = function () {
    return this.compositingStrategy_1;
  };
  protoOf(GraphicsLayer).set_topLeft_si0jss_k$ = function (value) {
    if (!equals(this.topLeft_1, value)) {
      this.topLeft_1 = value;
      var tmp0_safe_receiver = this.renderNode_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp = Companion_getInstance_4();
        var tmp_0 = _IntOffset___get_x__impl__qiqr5o(value);
        var tmp_1 = _IntOffset___get_y__impl__2avpwj(value);
        // Inline function 'androidx.compose.ui.unit.IntSize.width' call
        var this_0 = this.size_1;
        // Inline function 'androidx.compose.ui.util.unpackInt1' call
        var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_0);
        var tmp_2 = convertToInt(shiftRight(value_0, 32));
        // Inline function 'androidx.compose.ui.unit.IntSize.height' call
        var this_1 = this.size_1;
        // Inline function 'androidx.compose.ui.util.unpackInt2' call
        var value_1 = _IntSize___get_packedValue__impl__uho7jf(this_1);
        var tmp$ret$3 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
        tmp0_safe_receiver.set_bounds_tf3wyp_k$(tmp.makeXYWH_irfy4g_k$(tmp_0, tmp_1, tmp_2, tmp$ret$3));
      }
    }
  };
  protoOf(GraphicsLayer).get_topLeft_bl1fcy_k$ = function () {
    return this.topLeft_1;
  };
  protoOf(GraphicsLayer).get_size_kd98kr_k$ = function () {
    return this.size_1;
  };
  protoOf(GraphicsLayer).set_pivotOffset_eag666_k$ = function (value) {
    if (!equals(this.pivotOffset_1, value)) {
      this.pivotOffset_1 = value;
      var tmp0_safe_receiver = this.renderNode_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'androidx.compose.ui.geometry.Offset.x' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_0 = _Offset___get_packedValue__impl__xh2k8q(value);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits = convertToInt(shiftRight(value_0, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp = floatFromBits(bits);
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_1 = _Offset___get_packedValue__impl__xh2k8q(value);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_0 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp$ret$7 = floatFromBits(bits_0);
        tmp0_safe_receiver.set_pivot_ebppj8_k$(new Point(tmp, tmp$ret$7));
      }
    }
  };
  protoOf(GraphicsLayer).get_pivotOffset_iwkkle_k$ = function () {
    return this.pivotOffset_1;
  };
  protoOf(GraphicsLayer).set_alpha_tvzcqh_k$ = function (value) {
    if (!(this.alpha_1 === value)) {
      this.alpha_1 = value;
      var tmp0_safe_receiver = this.renderNode_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.set_alpha_tvzcqh_k$(value);
      }
      updateLayerProperties(this);
    }
  };
  protoOf(GraphicsLayer).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(GraphicsLayer).set_scaleX_ykjjzx_k$ = function (value) {
    if (!(this.scaleX_1 === value)) {
      this.scaleX_1 = value;
      var tmp0_safe_receiver = this.renderNode_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.set_scaleX_ykjjzx_k$(value);
      }
    }
  };
  protoOf(GraphicsLayer).get_scaleX_je2hxz_k$ = function () {
    return this.scaleX_1;
  };
  protoOf(GraphicsLayer).set_scaleY_i4eqp0_k$ = function (value) {
    if (!(this.scaleY_1 === value)) {
      this.scaleY_1 = value;
      var tmp0_safe_receiver = this.renderNode_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.set_scaleY_i4eqp0_k$(value);
      }
    }
  };
  protoOf(GraphicsLayer).get_scaleY_je2hy0_k$ = function () {
    return this.scaleY_1;
  };
  protoOf(GraphicsLayer).set_translationX_u7hqho_k$ = function (value) {
    if (!(this.translationX_1 === value)) {
      this.translationX_1 = value;
      var tmp0_safe_receiver = this.renderNode_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.set_translationX_u7hqho_k$(value);
      }
    }
  };
  protoOf(GraphicsLayer).get_translationX_fq2dbk_k$ = function () {
    return this.translationX_1;
  };
  protoOf(GraphicsLayer).set_translationY_bvbz7h_k$ = function (value) {
    if (!(this.translationY_1 === value)) {
      this.translationY_1 = value;
      var tmp0_safe_receiver = this.renderNode_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.set_translationY_bvbz7h_k$(value);
      }
    }
  };
  protoOf(GraphicsLayer).get_translationY_fq2dbj_k$ = function () {
    return this.translationY_1;
  };
  protoOf(GraphicsLayer).set_shadowElevation_t4qnx4_k$ = function (value) {
    if (!(this.shadowElevation_1 === value)) {
      this.shadowElevation_1 = value;
      var tmp0_safe_receiver = this.renderNode_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.set_shadowElevation_t4qnx4_k$(value);
      }
      this.outlineDirty_1 = true;
      configureOutlineAndClip(this);
    }
  };
  protoOf(GraphicsLayer).get_shadowElevation_peykek_k$ = function () {
    return this.shadowElevation_1;
  };
  protoOf(GraphicsLayer).set_ambientShadowColor_q06yuz_k$ = function (value) {
    if (!equals(this.ambientShadowColor_1, value)) {
      this.ambientShadowColor_1 = value;
      var tmp0_safe_receiver = this.renderNode_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.set_ambientShadowColor_2oikm8_k$(toArgb(value));
      }
    }
  };
  protoOf(GraphicsLayer).get_ambientShadowColor_8w030l_k$ = function () {
    return this.ambientShadowColor_1;
  };
  protoOf(GraphicsLayer).set_spotShadowColor_2m7ou9_k$ = function (value) {
    if (!equals(this.spotShadowColor_1, value)) {
      this.spotShadowColor_1 = value;
      var tmp0_safe_receiver = this.renderNode_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.set_spotShadowColor_ph7z6k_k$(toArgb(value));
      }
    }
  };
  protoOf(GraphicsLayer).get_spotShadowColor_2cxx5r_k$ = function () {
    return this.spotShadowColor_1;
  };
  protoOf(GraphicsLayer).set_blendMode_1e5m6b_k$ = function (value) {
    if (!(this.blendMode_1 === value)) {
      this.blendMode_1 = value;
      updateLayerProperties(this);
    }
  };
  protoOf(GraphicsLayer).get_blendMode_si209t_k$ = function () {
    return this.blendMode_1;
  };
  protoOf(GraphicsLayer).set_colorFilter_dtpxr0_k$ = function (value) {
    if (!equals(this.colorFilter_1, value)) {
      this.colorFilter_1 = value;
      updateLayerProperties(this);
    }
  };
  protoOf(GraphicsLayer).get_colorFilter_nt8pqq_k$ = function () {
    return this.colorFilter_1;
  };
  protoOf(GraphicsLayer).get_outline_h12qhz_k$ = function () {
    var tmpOutline = this.internalOutline_1;
    var tmpPath = this.outlinePath_1;
    var tmp;
    if (!(tmpOutline == null)) {
      tmp = tmpOutline;
    } else if (!(tmpPath == null)) {
      // Inline function 'kotlin.also' call
      var this_0 = new Generic(tmpPath);
      this.internalOutline_1 = this_0;
      tmp = this_0;
    } else {
      // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.resolveOutlinePosition' call
      var layerSize = toSize_0(this.size_1);
      var rRectTopLeft = this.roundRectOutlineTopLeft_1;
      var rRectSize = this.roundRectOutlineSize_1;
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
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var left = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(rRectTopLeft);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var top = floatFromBits(bits_0);
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _Size___get_packedValue__impl__7rlt1o(outlineSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var right = left + floatFromBits(bits_1);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Size___get_packedValue__impl__7rlt1o(outlineSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var bottom = top + floatFromBits(bits_2);
      var cornerRadius = this.roundRectCornerRadius_1;
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
      this.internalOutline_1 = this_1;
      tmp = this_1;
    }
    return tmp;
  };
  protoOf(GraphicsLayer).setPathOutline_p5hlwa_k$ = function (path) {
    resetOutlineParams(this);
    this.outlinePath_1 = path;
    configureOutlineAndClip(this);
  };
  protoOf(GraphicsLayer).setRoundRectOutline_2qdk90_k$ = function (topLeft, size, cornerRadius) {
    if (!equals(this.roundRectOutlineTopLeft_1, topLeft) || !equals(this.roundRectOutlineSize_1, size) || !(this.roundRectCornerRadius_1 === cornerRadius) || !(this.outlinePath_1 == null)) {
      resetOutlineParams(this);
      this.roundRectOutlineTopLeft_1 = topLeft;
      this.roundRectOutlineSize_1 = size;
      this.roundRectCornerRadius_1 = cornerRadius;
      configureOutlineAndClip(this);
    }
  };
  protoOf(GraphicsLayer).setRoundRectOutline$default_jtsvsx_k$ = function (topLeft, size, cornerRadius, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    size = size === VOID ? Companion_getInstance_0().get_Unspecified_3ttj0y_k$() : size;
    cornerRadius = cornerRadius === VOID ? 0.0 : cornerRadius;
    var tmp;
    if ($super === VOID) {
      this.setRoundRectOutline_2qdk90_k$(topLeft, size, cornerRadius);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.setRoundRectOutline_2qdk90_k$.call(this, new Offset(topLeft), new Size(size), cornerRadius);
    }
    return tmp;
  };
  protoOf(GraphicsLayer).setRectOutline_jz9n7i_k$ = function (topLeft, size) {
    this.setRoundRectOutline_2qdk90_k$(topLeft, size, 0.0);
  };
  protoOf(GraphicsLayer).setRectOutline$default_eha6im_k$ = function (topLeft, size, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_k6n73t_k$() : topLeft;
    size = size === VOID ? Companion_getInstance_0().get_Unspecified_3ttj0y_k$() : size;
    var tmp;
    if ($super === VOID) {
      this.setRectOutline_jz9n7i_k$(topLeft, size);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.setRectOutline_jz9n7i_k$.call(this, new Offset(topLeft), new Size(size));
    }
    return tmp;
  };
  protoOf(GraphicsLayer).set_rotationX_cedymj_k$ = function (value) {
    if (!(this.rotationX_1 === value)) {
      this.rotationX_1 = value;
      var tmp0_safe_receiver = this.renderNode_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.set_rotationX_cedymj_k$(value);
      }
    }
  };
  protoOf(GraphicsLayer).get_rotationX_c5agwf_k$ = function () {
    return this.rotationX_1;
  };
  protoOf(GraphicsLayer).set_rotationY_uqjpwq_k$ = function (value) {
    if (!(this.rotationY_1 === value)) {
      this.rotationY_1 = value;
      var tmp0_safe_receiver = this.renderNode_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.set_rotationY_uqjpwq_k$(value);
      }
    }
  };
  protoOf(GraphicsLayer).get_rotationY_c5agwe_k$ = function () {
    return this.rotationY_1;
  };
  protoOf(GraphicsLayer).set_rotationZ_lyeks7_k$ = function (value) {
    if (!(this.rotationZ_1 === value)) {
      this.rotationZ_1 = value;
      var tmp0_safe_receiver = this.renderNode_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.set_rotationZ_lyeks7_k$(value);
      }
    }
  };
  protoOf(GraphicsLayer).get_rotationZ_c5agwd_k$ = function () {
    return this.rotationZ_1;
  };
  protoOf(GraphicsLayer).set_cameraDistance_ois3u7_k$ = function (value) {
    if (!(this.cameraDistance_1 === value)) {
      this.cameraDistance_1 = value;
      var tmp0_safe_receiver = this.renderNode_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.set_cameraDistance_ois3u7_k$(value);
      }
    }
  };
  protoOf(GraphicsLayer).get_cameraDistance_i3885f_k$ = function () {
    return this.cameraDistance_1;
  };
  protoOf(GraphicsLayer).set_clip_a88iug_k$ = function (value) {
    if (!(this.clip_1 === value)) {
      this.clip_1 = value;
      this.outlineDirty_1 = true;
      configureOutlineAndClip(this);
    }
  };
  protoOf(GraphicsLayer).get_clip_wok5uh_k$ = function () {
    return this.clip_1;
  };
  protoOf(GraphicsLayer).set_renderEffect_uf825w_k$ = function (value) {
    if (!equals(this.renderEffect_1, value)) {
      this.renderEffect_1 = value;
      updateLayerProperties(this);
    }
  };
  protoOf(GraphicsLayer).get_renderEffect_9you8g_k$ = function () {
    return this.renderEffect_1;
  };
  protoOf(GraphicsLayer).get_isReleased_smc74g_k$ = function () {
    return this.isReleased_1;
  };
  protoOf(GraphicsLayer).record_e1qubi_k$ = function (density, layoutDirection, size, block) {
    _set_size__9twho6(this, size);
    recordWithTracking(this, GraphicsLayer$record$lambda(this, density, layoutDirection, size, block));
  };
  protoOf(GraphicsLayer).draw_ost04y_k$ = function (canvas, parentLayer) {
    if (this.isReleased_1)
      return Unit_getInstance();
    configureOutlineAndClip(this);
    if (parentLayer == null)
      null;
    else {
      addSubLayer(parentLayer, this);
    }
    var tmp1_safe_receiver = this.renderNode_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.drawInto_byi1bl_k$(get_nativeCanvas(canvas));
    }
  };
  protoOf(GraphicsLayer).release_485hqk_k$ = function () {
    if (!this.isReleased_1) {
      this.isReleased_1 = true;
      discardContentIfReleasedAndHaveNoParentLayerUsages(this);
    }
  };
  protoOf(GraphicsLayer).toImageBitmap_t8a9le_k$ = function ($completion) {
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    var this_0 = this.size_1;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
    var tmp = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    var this_1 = this.size_1;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
    var tmp$ret$3 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.apply' call
    var this_2 = ImageBitmap_0(tmp, tmp$ret$3);
    this.draw_ost04y_k$(Canvas_0(this_2), null);
    return this_2;
  };
  function BlurFilter(radius) {
    var sigma = Companion_getInstance_52().convertRadiusToSigma_hdwh5f_k$(radius);
    return Companion_getInstance_16().makeBlur$default_wa8lhq_k$(FilterBlurMode_NORMAL_getInstance(), sigma);
  }
  function setBlurFilter(_this__u8e3s4, blur) {
    _this__u8e3s4.asFrameworkPaint_huz48e_k$().set_maskFilter_qativ4_k$(blur);
  }
  function toBitmap(_this__u8e3s4) {
    var bitmap = Companion_getInstance_17().makeFromImage_pzsw1d_k$(_this__u8e3s4);
    bitmap.setImmutable_j5sn28_k$();
    return bitmap;
  }
  function putBytesInto(_this__u8e3s4, array, offset, length) {
    if (offset < 0 || length < 0 || (offset + length | 0) > array.length) {
      throw IndexOutOfBoundsException_init_$Create$('Invalid offset or length');
    }
    if (imul(length, 4) > _this__u8e3s4.length) {
      throw IndexOutOfBoundsException_init_$Create$('ByteArray not big enough to hold the requested number of integers');
    }
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var byteIndex = imul(i, 4);
        array[offset + i | 0] = _this__u8e3s4[byteIndex] & 255 | (_this__u8e3s4[byteIndex + 1 | 0] & 255) << 8 | (_this__u8e3s4[byteIndex + 2 | 0] & 255) << 16 | (_this__u8e3s4[byteIndex + 3 | 0] & 255) << 24;
      }
       while (inductionVariable < length);
  }
  //region block: post-declaration
  protoOf(GraphicsContext$shadowContext$1).createInnerShadowPainter_puc77l_k$ = createInnerShadowPainter;
  protoOf(GraphicsContext$shadowContext$1).createDropShadowPainter_k7nqs0_k$ = createDropShadowPainter;
  protoOf(GraphicsContext$shadowContext$1).clearCache_eg7yxn_k$ = clearCache;
  protoOf(CanvasDrawScope).drawLine$default_gyf64g_k$ = drawLine$default;
  protoOf(CanvasDrawScope).drawLine$default_457gsp_k$ = drawLine$default_0;
  protoOf(CanvasDrawScope).drawRect$default_rrw2w5_k$ = drawRect$default;
  protoOf(CanvasDrawScope).drawRect$default_5x4e2k_k$ = drawRect$default_0;
  protoOf(CanvasDrawScope).drawImage$default_grl3dt_k$ = drawImage$default;
  protoOf(CanvasDrawScope).drawImage$default_8v3vnc_k$ = drawImage$default_0;
  protoOf(CanvasDrawScope).drawImage$default_qql6c2_k$ = drawImage$default_1;
  protoOf(CanvasDrawScope).drawRoundRect$default_mredpw_k$ = drawRoundRect$default;
  protoOf(CanvasDrawScope).drawRoundRect$default_9g09cz_k$ = drawRoundRect$default_0;
  protoOf(CanvasDrawScope).drawCircle$default_svji1h_k$ = drawCircle$default;
  protoOf(CanvasDrawScope).drawCircle$default_wqrb84_k$ = drawCircle$default_0;
  protoOf(CanvasDrawScope).drawOval$default_x9bh3n_k$ = drawOval$default;
  protoOf(CanvasDrawScope).drawOval$default_bejsa2_k$ = drawOval$default_0;
  protoOf(CanvasDrawScope).drawArc$default_sh8wha_k$ = drawArc$default;
  protoOf(CanvasDrawScope).drawArc$default_m1szk9_k$ = drawArc$default_0;
  protoOf(CanvasDrawScope).drawPath$default_16x1km_k$ = drawPath$default;
  protoOf(CanvasDrawScope).drawPath$default_6abh83_k$ = drawPath$default_0;
  protoOf(CanvasDrawScope).drawPoints$default_6sw95n_k$ = drawPoints$default;
  protoOf(CanvasDrawScope).drawPoints$default_vvgacc_k$ = drawPoints$default_0;
  protoOf(CanvasDrawScope).get_center_dcexec_k$ = get_center_0;
  protoOf(CanvasDrawScope).get_size_cxx1ym_k$ = get_size;
  protoOf(CanvasDrawScope).record_2iwb4s_k$ = record;
  protoOf(CanvasDrawScope).record$default_m64s38_k$ = record$default;
  protoOf(CanvasDrawScope).toPx_mycba2_k$ = toPx;
  protoOf(CanvasDrawScope).toPx_plt68j_k$ = toPx_0;
  protoOf(CanvasDrawScope).roundToPx_yb7vg8_k$ = roundToPx;
  protoOf(CanvasDrawScope).roundToPx_cw9j9b_k$ = roundToPx_0;
  protoOf(CanvasDrawScope).toDp_fjakf4_k$ = toDp;
  protoOf(CanvasDrawScope).toDp_hs0w0_k$ = toDp_0;
  protoOf(CanvasDrawScope).toDp_m8rr7q_k$ = toDp_1;
  protoOf(CanvasDrawScope).toSp_97l7ws_k$ = toSp;
  protoOf(CanvasDrawScope).toSp_fixg4_k$ = toSp_0;
  protoOf(CanvasDrawScope).toSp_apeb1_k$ = toSp_1;
  protoOf(CanvasDrawScope).toRect_ysncr2_k$ = toRect_0;
  protoOf(CanvasDrawScope).toSize_7jb2uc_k$ = toSize;
  protoOf(CanvasDrawScope).toDpSize_5hpeec_k$ = toDpSize;
  protoOf(asDrawTransform$1).clipRect$default_tcjibt_k$ = clipRect$default_1;
  protoOf(asDrawTransform$1).clipPath$default_9le209_k$ = clipPath$default_0;
  protoOf(asDrawTransform$1).translate$default_k6kdkn_k$ = translate$default;
  protoOf(asDrawTransform$1).rotate$default_gnv4f9_k$ = rotate$default;
  protoOf(asDrawTransform$1).scale$default_4k3oto_k$ = scale$default_0;
  protoOf(EmptyCanvas).scale$default_k3lttb_k$ = scale$default;
  protoOf(EmptyCanvas).clipRect$default_rljm8s_k$ = clipRect$default_0;
  protoOf(EmptyCanvas).clipPath$default_6w3exa_k$ = clipPath$default;
  protoOf(EmptyCanvas).drawImageRect$default_yosr39_k$ = drawImageRect$default;
  protoOf(EmptyCanvas).skewRad_dqdrvp_k$ = skewRad;
  protoOf(EmptyCanvas).clipRect_oj1pv4_k$ = clipRect;
  protoOf(EmptyCanvas).clipRect$default_a4bw85_k$ = clipRect$default;
  protoOf(EmptyCanvas).drawRect_pdd91p_k$ = drawRect;
  protoOf(EmptyCanvas).drawOval_tv5kqj_k$ = drawOval;
  protoOf(EmptyCanvas).drawArc_j2ua6c_k$ = drawArc;
  protoOf(EmptyCanvas).drawArcRad_lerje3_k$ = drawArcRad;
  protoOf(SkiaBackedCanvas).scale$default_k3lttb_k$ = scale$default;
  protoOf(SkiaBackedCanvas).clipRect$default_rljm8s_k$ = clipRect$default_0;
  protoOf(SkiaBackedCanvas).clipPath$default_6w3exa_k$ = clipPath$default;
  protoOf(SkiaBackedCanvas).drawImageRect$default_yosr39_k$ = drawImageRect$default;
  protoOf(SkiaBackedCanvas).skewRad_dqdrvp_k$ = skewRad;
  protoOf(SkiaBackedCanvas).clipRect_oj1pv4_k$ = clipRect;
  protoOf(SkiaBackedCanvas).clipRect$default_a4bw85_k$ = clipRect$default;
  protoOf(SkiaBackedCanvas).drawRect_pdd91p_k$ = drawRect;
  protoOf(SkiaBackedCanvas).drawOval_tv5kqj_k$ = drawOval;
  protoOf(SkiaBackedCanvas).drawArc_j2ua6c_k$ = drawArc;
  protoOf(SkiaBackedCanvas).drawArcRad_lerje3_k$ = drawArcRad;
  protoOf(SkiaBackedPath).addRect$default_skc73m_k$ = addRect$default;
  protoOf(SkiaBackedPath).addOval$default_vhmjb8_k$ = addOval$default;
  protoOf(SkiaBackedPath).addRoundRect$default_gbv65c_k$ = addRoundRect$default;
  protoOf(SkiaBackedPath).addPath$default_lo4vd5_k$ = addPath$default;
  protoOf(SkiaBackedPath).arcToRad_52k5ic_k$ = arcToRad;
  protoOf(SkiaBackedPath).iterator_jk1svi_k$ = iterator;
  protoOf(SkiaBackedPath).iterator_j3094m_k$ = iterator_0;
  protoOf(SkiaBackedPath).iterator$default_8ka1aq_k$ = iterator$default;
  protoOf(SkiaBackedPath).plus_8b5a1j_k$ = plus;
  protoOf(SkiaBackedPath).minus_xunabl_k$ = minus;
  protoOf(SkiaBackedPath).or_wpzrla_k$ = or;
  protoOf(SkiaBackedPath).and_hac7pi_k$ = and;
  protoOf(SkiaBackedPath).xor_vxjf2i_k$ = xor;
  protoOf(SkiaBackedPathMeasure).getSegment$default_v4mi73_k$ = getSegment$default;
  protoOf(SkiaGraphicsContext).get_shadowContext_jrwzly_k$ = get_shadowContext;
  protoOf(SkiaBackedImageBitmap).readPixels$default_31rwvw_k$ = readPixels$default;
  protoOf(SkiaPathIterator).calculateSize$default_i7t5ar_k$ = calculateSize$default;
  protoOf(SkiaPathIterator).next$default_jpien6_k$ = next$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CanvasDrawScope;
  _.$_$.b = ContentDrawScope;
  _.$_$.c = DrawScope;
  _.$_$.d = Stroke;
  _.$_$.e = drawLayer;
  _.$_$.f = setOutline;
  _.$_$.g = BitmapPainter;
  _.$_$.h = Painter;
  _.$_$.i = PathBuilder;
  _.$_$.j = PathParser;
  _.$_$.k = toPath;
  _.$_$.l = BlendModeColorFilter;
  _.$_$.m = BlendMode;
  _.$_$.n = Canvas_0;
  _.$_$.o = ColorProducer;
  _.$_$.p = Color_0;
  _.$_$.q = Color_3;
  _.$_$.r = Color_2;
  _.$_$.s = Color_1;
  _.$_$.t = Color;
  _.$_$.u = GraphicsContext;
  _.$_$.v = ImageBitmapConfig;
  _.$_$.w = ImageBitmap_0;
  _.$_$.x = Matrix;
  _.$_$.y = Generic;
  _.$_$.z = Rectangle;
  _.$_$.a1 = Rounded;
  _.$_$.b1 = Paint_0;
  _.$_$.c1 = Paint;
  _.$_$.d1 = PathFillType;
  _.$_$.e1 = PathMeasure_0;
  _.$_$.f1 = Path_0;
  _.$_$.g1 = get_RectangleShape;
  _.$_$.h1 = ShaderBrush;
  _.$_$.i1 = Shadow;
  _.$_$.j1 = Shape;
  _.$_$.k1 = SkiaGraphicsContext;
  _.$_$.l1 = SolidColor;
  _.$_$.m1 = StrokeCap;
  _.$_$.n1 = StrokeJoin;
  _.$_$.o1 = TileMode;
  _.$_$.p1 = addOutline;
  _.$_$.q1 = set_alphaMultiplier;
  _.$_$.r1 = asComposeCanvas;
  _.$_$.s1 = asSkiaPath;
  _.$_$.t1 = compositeOver;
  _.$_$.u1 = computeCubicVerticalBounds;
  _.$_$.v1 = drawOutline;
  _.$_$.w1 = drawOutline_0;
  _.$_$.x1 = evaluateCubic;
  _.$_$.y1 = findFirstCubicRoot;
  _.$_$.z1 = isIdentity;
  _.$_$.a2 = lerp_2;
  _.$_$.b2 = lerp_1;
  _.$_$.c2 = luminance;
  _.$_$.d2 = get_nativeCanvas;
  _.$_$.e2 = prepareTransformationMatrix;
  _.$_$.f2 = toArgb;
  _.$_$.g2 = toComposeImageBitmap;
  _.$_$.h2 = toComposeRect;
  _.$_$.i2 = toSkiaRRect;
  _.$_$.j2 = toSkiaRect;
  _.$_$.k2 = drawArc$default;
  _.$_$.l2 = drawArc$default_0;
  _.$_$.m2 = drawCircle$default;
  _.$_$.n2 = drawCircle$default_0;
  _.$_$.o2 = drawImage$default_0;
  _.$_$.p2 = drawImage$default;
  _.$_$.q2 = drawImage$default_1;
  _.$_$.r2 = drawLine$default;
  _.$_$.s2 = drawLine$default_0;
  _.$_$.t2 = drawOval$default;
  _.$_$.u2 = drawOval$default_0;
  _.$_$.v2 = drawPath$default_0;
  _.$_$.w2 = drawPath$default;
  _.$_$.x2 = drawPoints$default_0;
  _.$_$.y2 = drawPoints$default;
  _.$_$.z2 = drawRect$default;
  _.$_$.a3 = drawRect$default_0;
  _.$_$.b3 = drawRoundRect$default;
  _.$_$.c3 = drawRoundRect$default_0;
  _.$_$.d3 = record$default;
  _.$_$.e3 = BlendMode__hashCode_impl_93ceri;
  _.$_$.f3 = BlendMode__toString_impl_uuibkd;
  _.$_$.g3 = _Color___init__impl__r6cqi2;
  _.$_$.h3 = _Color___get_alpha__impl__wcfyv1;
  _.$_$.i3 = _Color___get_blue__impl__xwez13;
  _.$_$.j3 = _Color___get_colorSpace__impl__jqqozk;
  _.$_$.k3 = Color__convert_impl_so5m8t;
  _.$_$.l3 = _Color___get_green__impl__bta9rs;
  _.$_$.m3 = Color__hashCode_impl_vjyivj;
  _.$_$.n3 = _Color___get_red__impl__cwrsk6;
  _.$_$.o3 = Color__toString_impl_hpzmaq;
  _.$_$.p3 = _Color___get_value__impl__1pls5m;
  _.$_$.q3 = _Matrix___init__impl__q3kp4w;
  _.$_$.r3 = Matrix__hashCode_impl_s9ntm9;
  _.$_$.s3 = Matrix__map_impl_7meu7m;
  _.$_$.t3 = Matrix__map_impl_7meu7m_1;
  _.$_$.u3 = Matrix__map_impl_7meu7m_0;
  _.$_$.v3 = Matrix__reset_impl_4l49i7;
  _.$_$.w3 = Matrix__rotateZ_impl_2g2pf5;
  _.$_$.x3 = Matrix__scale_impl_6w89a4;
  _.$_$.y3 = Matrix__timesAssign_impl_oas521;
  _.$_$.z3 = Matrix__translate_impl_1hftog;
  _.$_$.a4 = _Matrix___get_values__impl__fblr7b;
  _.$_$.b4 = PathFillType__hashCode_impl_pdqo4w;
  _.$_$.c4 = StrokeCap__hashCode_impl_posxk8;
  _.$_$.d4 = StrokeJoin__hashCode_impl_3pyh8w;
  _.$_$.e4 = Color__copy$default_impl_ectz3s;
  _.$_$.f4 = Matrix__translate$default_impl_10t8ql;
  _.$_$.g4 = ColorSpaces_getInstance;
  _.$_$.h4 = Companion_getInstance_47;
  _.$_$.i4 = Fill_getInstance;
  _.$_$.j4 = Companion_getInstance_49;
  _.$_$.k4 = Companion_getInstance_18;
  _.$_$.l4 = Companion_getInstance_19;
  _.$_$.m4 = Companion_getInstance_20;
  _.$_$.n4 = Companion_getInstance_21;
  _.$_$.o4 = Companion_getInstance_22;
  _.$_$.p4 = Companion_getInstance_25;
  _.$_$.q4 = Companion_getInstance_27;
  _.$_$.r4 = Companion_getInstance_31;
  _.$_$.s4 = Companion_getInstance_32;
  _.$_$.t4 = Companion_getInstance_34;
  _.$_$.u4 = Companion_getInstance_35;
  _.$_$.v4 = Companion_getInstance_36;
  _.$_$.w4 = Companion_getInstance_37;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-graphics.js.map
