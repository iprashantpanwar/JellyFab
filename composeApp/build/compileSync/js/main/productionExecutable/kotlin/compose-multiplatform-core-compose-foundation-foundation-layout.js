(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui.js', './androidx-compose-runtime-runtime.js', './androidx-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./androidx-compose-runtime-runtime.js'), require('./androidx-collection-collection.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] = factory(typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['androidx-compose-runtime-runtime'], globalThis['androidx-collection-collection']);
  }
}(function (_, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_collection_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var protoOf = kotlin_kotlin.$_$.z9;
  var initMetadataForInterface = kotlin_kotlin.$_$.l9;
  var Unit_instance = kotlin_kotlin.$_$.b3;
  var LayoutDirection_Rtl_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var Dp__toString_impl_kcddez = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var toString = kotlin_kotlin.$_$.oe;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var getBooleanHashCode = kotlin_kotlin.$_$.b9;
  var hashCode = kotlin_kotlin.$_$.g9;
  var THROW_CCE = kotlin_kotlin.$_$.md;
  var equals = kotlin_kotlin.$_$.z8;
  var initMetadataForClass = kotlin_kotlin.$_$.h9;
  var VOID = kotlin_kotlin.$_$.b;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.x9;
  var roundToInt = kotlin_kotlin.$_$.ea;
  var get_lastIndex = kotlin_kotlin.$_$.k5;
  var initMetadataForObject = kotlin_kotlin.$_$.n9;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.d2;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.l1;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.y9;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.r8;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.t9;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.k1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.h;
  var isInterface = kotlin_kotlin.$_$.q9;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.h2;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.j2;
  var _Updater___get_composer__impl__9ty7av = kotlin_androidx_compose_runtime_runtime.$_$.i2;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var MutableScatterMap = kotlin_androidx_collection_collection.$_$.n;
  var Placeable = kotlin_org_jetbrains_compose_ui_ui.$_$.h3;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var _Constraints___get_value__impl__3ah2ax = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var Long = kotlin_kotlin.$_$.hd;
  var bitwiseAnd = kotlin_kotlin.$_$.t7;
  var _Constraints___init__impl__v8ud31 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s3;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var toString_0 = kotlin_kotlin.$_$.ba;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.z2;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.y2;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.x2;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.h6;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.k6;
  var fromInt = kotlin_kotlin.$_$.b8;
  var shiftLeft = kotlin_kotlin.$_$.h8;
  var bitwiseOr = kotlin_kotlin.$_$.u7;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.q4;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.l8;
  var ParentDataModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.r4;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var FunctionAdapter = kotlin_kotlin.$_$.m8;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var ensureNotNull = kotlin_kotlin.$_$.wd;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var Companion_getInstance_1 = kotlin_androidx_compose_runtime_runtime.$_$.l2;
  var coerceAtMost = kotlin_kotlin.$_$.oa;
  var Enum = kotlin_kotlin.$_$.bd;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w3;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c1;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.p4;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var invalidatePlacement = kotlin_org_jetbrains_compose_ui_ui.$_$.k5;
  var minIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.o4;
  var minIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.n4;
  var maxIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.m4;
  var maxIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.l4;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var isNaN_0 = kotlin_kotlin.$_$.yd;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h1;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b1;
  var constrainHeight = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var getNumberHashCode = kotlin_kotlin.$_$.d9;
  var androidx_compose_ui_Modifier_Node$stableprop_getter = kotlin_org_jetbrains_compose_ui_ui.$_$.p8;
  var multiply = kotlin_kotlin.$_$.e8;
  var numberToLong = kotlin_kotlin.$_$.g8;
  var subtract = kotlin_kotlin.$_$.k8;
  var compare = kotlin_kotlin.$_$.w7;
  var toNumber = kotlin_kotlin.$_$.l8;
  var get_sign = kotlin_kotlin.$_$.ha;
  var add = kotlin_kotlin.$_$.s7;
  var convertToInt = kotlin_kotlin.$_$.x7;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i9;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var shiftRight = kotlin_kotlin.$_$.j8;
  var _IntOffset___init__impl__rq8h7b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y3;
  var getKClassFromExpression = kotlin_kotlin.$_$.xa;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var coerceIn = kotlin_kotlin.$_$.sa;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var coerceAtLeast = kotlin_kotlin.$_$.la;
  var composed = kotlin_org_jetbrains_compose_ui_ui.$_$.q8;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.k8;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.j8;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.m8;
  var ModifierLocalConsumer = kotlin_org_jetbrains_compose_ui_ui.$_$.w3;
  var modifierLocalOf = kotlin_org_jetbrains_compose_ui_ui.$_$.a4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k1;
  //endregion
  //region block: pre-declaration
  function get_spacing() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(Horizontal, 'Horizontal');
  function get_spacing_0() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(Vertical, 'Vertical');
  initMetadataForClass(SpacedAligned, 'SpacedAligned', VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$Start$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$End$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Top$1, VOID, VOID, VOID, [Vertical]);
  initMetadataForClass(Arrangement$Bottom$1, VOID, VOID, VOID, [Vertical]);
  initMetadataForClass(Arrangement$Center$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$SpaceEvenly$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$SpaceBetween$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$SpaceAround$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForObject(Arrangement, 'Arrangement');
  initMetadataForClass(BoxMeasurePolicy, 'BoxMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForObject(BoxScopeInstance, 'BoxScopeInstance');
  initMetadataForClass(BoxChildDataElement, 'BoxChildDataElement', VOID, ModifierNodeElement);
  initMetadataForClass(BoxChildDataNode, 'BoxChildDataNode', VOID, Node, [ParentDataModifierNode, Node]);
  initMetadataForClass(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', VOID, VOID, [MeasurePolicy, FunctionAdapter]);
  function weight$default(_this__u8e3s4, weight, fill, $super) {
    fill = fill === VOID ? true : fill;
    return $super === VOID ? this.gal(_this__u8e3s4, weight, fill) : $super.gal.call(this, _this__u8e3s4, weight, fill);
  }
  initMetadataForInterface(ColumnScope, 'ColumnScope');
  function createConstraints$default(mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing, $super) {
    isPrioritizing = isPrioritizing === VOID ? false : isPrioritizing;
    return $super === VOID ? this.tal(mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) : $super.tal.call(this, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing).s4m_1;
  }
  initMetadataForInterface(RowColumnMeasurePolicy, 'RowColumnMeasurePolicy');
  initMetadataForClass(ColumnMeasurePolicy, 'ColumnMeasurePolicy', VOID, VOID, [MeasurePolicy, RowColumnMeasurePolicy]);
  initMetadataForObject(ColumnScopeInstance, 'ColumnScopeInstance', VOID, VOID, [ColumnScope]);
  initMetadataForClass(IntrinsicSize, 'IntrinsicSize', VOID, Enum);
  initMetadataForClass(IntrinsicWidthElement, 'IntrinsicWidthElement', VOID, ModifierNodeElement);
  initMetadataForClass(IntrinsicSizeModifier, 'IntrinsicSizeModifier', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(IntrinsicWidthNode, 'IntrinsicWidthNode', VOID, IntrinsicSizeModifier);
  initMetadataForClass(OffsetPxElement, 'OffsetPxElement', VOID, ModifierNodeElement);
  initMetadataForClass(OffsetPxNode, 'OffsetPxNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(PaddingValuesImpl, 'PaddingValuesImpl', PaddingValuesImpl);
  initMetadataForClass(PaddingElement, 'PaddingElement', VOID, ModifierNodeElement);
  initMetadataForClass(PaddingValuesElement, 'PaddingValuesElement', VOID, ModifierNodeElement);
  initMetadataForClass(PaddingNode, 'PaddingNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(PaddingValuesModifier, 'PaddingValuesModifier', VOID, Node, [LayoutModifierNode, Node]);
  function weight$default_0(_this__u8e3s4, weight, fill, $super) {
    fill = fill === VOID ? true : fill;
    return $super === VOID ? this.gal(_this__u8e3s4, weight, fill) : $super.gal.call(this, _this__u8e3s4, weight, fill);
  }
  initMetadataForInterface(RowScope, 'RowScope');
  initMetadataForClass(RowMeasurePolicy, 'RowMeasurePolicy', VOID, VOID, [MeasurePolicy, RowColumnMeasurePolicy]);
  initMetadataForObject(RowScopeInstance, 'RowScopeInstance', VOID, VOID, [RowScope]);
  initMetadataForClass(RowColumnParentData, 'RowColumnParentData', RowColumnParentData);
  initMetadataForObject(IntrinsicMeasureBlocks, 'IntrinsicMeasureBlocks');
  initMetadataForClass(LayoutWeightElement, 'LayoutWeightElement', VOID, ModifierNodeElement);
  initMetadataForClass(LayoutWeightNode, 'LayoutWeightNode', VOID, Node, [ParentDataModifierNode, Node]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(FillElement, 'FillElement', VOID, ModifierNodeElement);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(WrapContentElement, 'WrapContentElement', VOID, ModifierNodeElement);
  initMetadataForClass(SizeElement, 'SizeElement', VOID, ModifierNodeElement);
  initMetadataForClass(UnspecifiedConstraintsElement, 'UnspecifiedConstraintsElement', UnspecifiedConstraintsElement, ModifierNodeElement);
  initMetadataForClass(FillNode, 'FillNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  initMetadataForClass(WrapContentNode, 'WrapContentNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(SizeNode, 'SizeNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(UnspecifiedConstraintsNode, 'UnspecifiedConstraintsNode', UnspecifiedConstraintsNode, Node, [LayoutModifierNode, Node]);
  initMetadataForObject(SpacerMeasurePolicy, 'SpacerMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(FixedIntInsets, 'FixedIntInsets');
  initMetadataForClass(ExcludeInsets, 'ExcludeInsets');
  initMetadataForClass(InsetsPaddingValues, 'InsetsPaddingValues');
  initMetadataForClass(ConsumedInsetsModifier, 'ConsumedInsetsModifier', VOID, VOID, [ModifierLocalConsumer]);
  //endregion
  var androidx_compose_foundation_layout_Arrangement_Absolute$stable;
  var androidx_compose_foundation_layout_Arrangement_SpacedAligned$stable;
  var androidx_compose_foundation_layout_Arrangement$stable;
  function Horizontal() {
  }
  function Vertical() {
  }
  function SpacedAligned(space, rtlMirror, alignment) {
    this.haj_1 = space;
    this.iaj_1 = rtlMirror;
    this.jaj_1 = alignment;
    this.kaj_1 = this.haj_1;
  }
  protoOf(SpacedAligned).eaj = function () {
    return this.kaj_1;
  };
  protoOf(SpacedAligned).faj = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (sizes.length === 0)
      return Unit_instance;
    var spacePx = _this__u8e3s4.b4n(this.haj_1);
    var occupied = 0;
    var lastSpace = 0;
    var reversed = this.iaj_1 && layoutDirection.equals(LayoutDirection_Rtl_getInstance());
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    Arrangement_getInstance();
    if (!reversed) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = sizes.length;
      while (inductionVariable < last) {
        var item = sizes[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var tmp0 = occupied;
        // Inline function 'kotlin.math.min' call
        var b = totalSize - item | 0;
        outPositions[_unary__edvuaz] = Math.min(tmp0, b);
        // Inline function 'kotlin.math.min' call
        var b_0 = (totalSize - outPositions[_unary__edvuaz] | 0) - item | 0;
        lastSpace = Math.min(spacePx, b_0);
        occupied = (outPositions[_unary__edvuaz] + item | 0) + lastSpace | 0;
      }
    } else {
      var inductionVariable_0 = sizes.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          var it = sizes[i];
          var tmp0_0 = occupied;
          // Inline function 'kotlin.math.min' call
          var b_1 = totalSize - it | 0;
          outPositions[i] = Math.min(tmp0_0, b_1);
          // Inline function 'kotlin.math.min' call
          var b_2 = (totalSize - outPositions[i] | 0) - it | 0;
          lastSpace = Math.min(spacePx, b_2);
          occupied = (outPositions[i] + it | 0) + lastSpace | 0;
        }
         while (0 <= inductionVariable_0);
    }
    occupied = occupied - lastSpace | 0;
    if (!(this.jaj_1 == null) && occupied < totalSize) {
      var groupPosition = this.jaj_1(totalSize - occupied | 0, layoutDirection);
      var inductionVariable_1 = 0;
      var last_0 = outPositions.length - 1 | 0;
      if (inductionVariable_1 <= last_0)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          outPositions[index_0] = outPositions[index_0] + groupPosition | 0;
        }
         while (inductionVariable_1 <= last_0);
    }
  };
  protoOf(SpacedAligned).gaj = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return this.faj(_this__u8e3s4, totalSize, sizes, LayoutDirection_Ltr_getInstance(), outPositions);
  };
  protoOf(SpacedAligned).toString = function () {
    return (this.iaj_1 ? '' : 'Absolute') + 'Arrangement#spacedAligned(' + Dp__toString_impl_kcddez(this.haj_1) + ', ' + toString(this.jaj_1) + ')';
  };
  protoOf(SpacedAligned).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.haj_1);
    result = imul(result, 31) + getBooleanHashCode(this.iaj_1) | 0;
    result = imul(result, 31) + (this.jaj_1 == null ? 0 : hashCode(this.jaj_1)) | 0;
    return result;
  };
  protoOf(SpacedAligned).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpacedAligned))
      return false;
    var tmp0_other_with_cast = other instanceof SpacedAligned ? other : THROW_CCE();
    if (!equals(this.haj_1, tmp0_other_with_cast.haj_1))
      return false;
    if (!(this.iaj_1 === tmp0_other_with_cast.iaj_1))
      return false;
    if (!equals(this.jaj_1, tmp0_other_with_cast.jaj_1))
      return false;
    return true;
  };
  function Arrangement$Start$1() {
  }
  protoOf(Arrangement$Start$1).faj = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().uaj(sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().taj(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$Start$1).toString = function () {
    return 'Arrangement#Start';
  };
  function Arrangement$End$1() {
  }
  protoOf(Arrangement$End$1).faj = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().taj(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().uaj(sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$End$1).toString = function () {
    return 'Arrangement#End';
  };
  function Arrangement$Top$1() {
  }
  protoOf(Arrangement$Top$1).gaj = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().uaj(sizes, outPositions, false);
  };
  protoOf(Arrangement$Top$1).toString = function () {
    return 'Arrangement#Top';
  };
  function Arrangement$Bottom$1() {
  }
  protoOf(Arrangement$Bottom$1).gaj = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().taj(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Bottom$1).toString = function () {
    return 'Arrangement#Bottom';
  };
  function Arrangement$Center$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.vaj_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$Center$1).eaj = function () {
    return this.vaj_1;
  };
  protoOf(Arrangement$Center$1).faj = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().waj(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().waj(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$Center$1).gaj = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().waj(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Center$1).toString = function () {
    return 'Arrangement#Center';
  };
  function Arrangement$SpaceEvenly$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.xaj_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceEvenly$1).eaj = function () {
    return this.xaj_1;
  };
  protoOf(Arrangement$SpaceEvenly$1).faj = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().yaj(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().yaj(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceEvenly$1).gaj = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().yaj(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceEvenly$1).toString = function () {
    return 'Arrangement#SpaceEvenly';
  };
  function Arrangement$SpaceBetween$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.zaj_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceBetween$1).eaj = function () {
    return this.zaj_1;
  };
  protoOf(Arrangement$SpaceBetween$1).faj = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().aak(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().aak(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceBetween$1).gaj = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().aak(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceBetween$1).toString = function () {
    return 'Arrangement#SpaceBetween';
  };
  function Arrangement$SpaceAround$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.bak_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceAround$1).eaj = function () {
    return this.bak_1;
  };
  protoOf(Arrangement$SpaceAround$1).faj = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().cak(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().cak(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceAround$1).gaj = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().cak(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceAround$1).toString = function () {
    return 'Arrangement#SpaceAround';
  };
  function Arrangement$spacedBy$lambda(size, layoutDirection) {
    return Companion_getInstance().b6b_1.f6b(0, size, layoutDirection);
  }
  function Arrangement() {
    Arrangement_instance = this;
    var tmp = this;
    tmp.laj_1 = new Arrangement$Start$1();
    var tmp_0 = this;
    tmp_0.maj_1 = new Arrangement$End$1();
    var tmp_1 = this;
    tmp_1.naj_1 = new Arrangement$Top$1();
    var tmp_2 = this;
    tmp_2.oaj_1 = new Arrangement$Bottom$1();
    var tmp_3 = this;
    tmp_3.paj_1 = new Arrangement$Center$1();
    var tmp_4 = this;
    tmp_4.qaj_1 = new Arrangement$SpaceEvenly$1();
    var tmp_5 = this;
    tmp_5.raj_1 = new Arrangement$SpaceBetween$1();
    var tmp_6 = this;
    tmp_6.saj_1 = new Arrangement$SpaceAround$1();
  }
  protoOf(Arrangement).dak = function (space) {
    return new SpacedAligned(space, true, Arrangement$spacedBy$lambda);
  };
  protoOf(Arrangement).taj = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = totalSize - consumedSize | 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        outPosition[_unary__edvuaz] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).uaj = function (size, outPosition, reverseInput) {
    var current = 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = size.length;
      while (inductionVariable < last) {
        var item = size[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        outPosition[_unary__edvuaz] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_0 = size.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_0);
    }
  };
  protoOf(Arrangement).waj = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = (totalSize - consumedSize | 0) / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[_unary__edvuaz] = roundToInt(this_0);
        current = current + item;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + it;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).yaj = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var gapSize = (totalSize - consumedSize | 0) / (size.length + 1 | 0);
    var current = gapSize;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[_unary__edvuaz] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).aak = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (size.length === 0)
      return Unit_instance;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = get_lastIndex(size);
    var noOfGaps = Math.max(a, 1);
    var gapSize = (totalSize - consumedSize | 0) / noOfGaps;
    var current = 0.0;
    if (reverseInput && size.length === 1) {
      current = gapSize;
    }
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[_unary__edvuaz] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).cak = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(size.length === 0)) {
      tmp = (totalSize - consumedSize | 0) / size.length;
    } else {
      tmp = 0.0;
    }
    var gapSize = tmp;
    var current = gapSize / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[_unary__edvuaz] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  function get_Cache1() {
    _init_properties_Box_kt__tvzvdl();
    return Cache1;
  }
  var Cache1;
  function get_Cache2() {
    _init_properties_Box_kt__tvzvdl();
    return Cache2;
  }
  var Cache2;
  var DefaultBoxMeasurePolicy;
  function get_EmptyBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return EmptyBoxMeasurePolicy;
  }
  var EmptyBoxMeasurePolicy;
  var androidx_compose_foundation_layout_BoxScopeInstance$stable;
  function Box(modifier, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t24(-211209833);
    sourceInformation($composer_0, 'C(Box)233@9541L66:Box.kt#2w3rfo');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.j25(modifier) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.l24()) {
      if (isTraceInProgress()) {
        traceEventStart(-211209833, $dirty, -1, 'androidx.compose.foundation.layout.Box (Box.kt:232)');
      }
      var tmp2 = get_EmptyBoxMeasurePolicy();
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 544976794, 'CC(Layout)P(1)122@4875L27,125@5041L333:Layout.kt#80mrfh');
      if (!((0 & 1) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_1, 0).hashCode();
      var materialized = materialize($composer_1, modifier_0);
      var localMap = $composer_1.s25();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_0().q87_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, 1405779621, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
      var tmp = $composer_2.j24();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_2.a25();
      if ($composer_2.k24()) {
        $composer_2.b25(factory);
      } else {
        $composer_2.c25();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp2, Companion_getInstance_0().v87_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_0().u87_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_0().s87_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_0().y87_1;
      // Inline function 'kotlin.with' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.k24() || !equals($this$with.h25(), compositeKeyHash)) {
        $this$with.i25(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).g25(compositeKeyHash, block);
      }
      $composer_2.d25();
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
      tmp0_safe_receiver.s2q(Box$lambda(modifier, $changed));
    }
  }
  function cacheFor(propagate) {
    _init_properties_Box_kt__tvzvdl();
    // Inline function 'kotlin.apply' call
    var this_0 = new MutableScatterMap(9);
    this_0.iq(Companion_getInstance().p6a_1, new BoxMeasurePolicy(Companion_getInstance().p6a_1, propagate));
    this_0.iq(Companion_getInstance().q6a_1, new BoxMeasurePolicy(Companion_getInstance().q6a_1, propagate));
    this_0.iq(Companion_getInstance().r6a_1, new BoxMeasurePolicy(Companion_getInstance().r6a_1, propagate));
    this_0.iq(Companion_getInstance().s6a_1, new BoxMeasurePolicy(Companion_getInstance().s6a_1, propagate));
    this_0.iq(Companion_getInstance().t6a_1, new BoxMeasurePolicy(Companion_getInstance().t6a_1, propagate));
    this_0.iq(Companion_getInstance().u6a_1, new BoxMeasurePolicy(Companion_getInstance().u6a_1, propagate));
    this_0.iq(Companion_getInstance().v6a_1, new BoxMeasurePolicy(Companion_getInstance().v6a_1, propagate));
    this_0.iq(Companion_getInstance().w6a_1, new BoxMeasurePolicy(Companion_getInstance().w6a_1, propagate));
    this_0.iq(Companion_getInstance().x6a_1, new BoxMeasurePolicy(Companion_getInstance().x6a_1, propagate));
    return this_0;
  }
  function BoxMeasurePolicy$measure$lambda($this$layout) {
    return Unit_instance;
  }
  function BoxMeasurePolicy$measure$lambda_0($placeable, $measurable, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      placeInBox($this$layout, $placeable, $measurable, $this_measure.w53(), $boxWidth, $boxHeight, this$0.eak_1);
      return Unit_instance;
    };
  }
  function BoxMeasurePolicy$measure$lambda_1($placeables, $measurables, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        if (!(item instanceof Placeable))
          THROW_CCE();
        var measurable = $measurables.m(_unary__edvuaz);
        placeInBox($this$layout, item, measurable, $this_measure.w53(), $boxWidth._v, $boxHeight._v, this$0.eak_1);
      }
      return Unit_instance;
    };
  }
  function BoxMeasurePolicy(alignment, propagateMinConstraints) {
    this.eak_1 = alignment;
    this.fak_1 = propagateMinConstraints;
  }
  protoOf(BoxMeasurePolicy).l7y = function (_this__u8e3s4, measurables, constraints) {
    if (measurables.n()) {
      var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      return _this__u8e3s4.t6n(tmp, tmp_0, VOID, BoxMeasurePolicy$measure$lambda);
    }
    var tmp_1;
    if (this.fak_1) {
      tmp_1 = constraints;
    } else {
      // Inline function 'androidx.compose.ui.unit.Constraints.copyMaxDimensions' call
      tmp_1 = _Constraints___init__impl__v8ud31(bitwiseAnd(_Constraints___get_value__impl__3ah2ax(constraints), new Long(3, -2)));
    }
    var contentConstraints = tmp_1;
    if (measurables.l() === 1) {
      var measurable = measurables.m(0);
      var boxWidth;
      var boxHeight;
      var placeable;
      if (!get_matchesParentSize(measurable)) {
        placeable = measurable.n6n(contentConstraints);
        var tmp0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        // Inline function 'kotlin.math.max' call
        var b = placeable.o6n_1;
        boxWidth = Math.max(tmp0, b);
        var tmp0_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        // Inline function 'kotlin.math.max' call
        var b_0 = placeable.p6n_1;
        boxHeight = Math.max(tmp0_0, b_0);
      } else {
        boxWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        boxHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        placeable = measurable.n6n(Companion_instance_0.v4m(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_minHeight__impl__ev4bgx(constraints)));
      }
      return _this__u8e3s4.t6n(boxWidth, boxHeight, VOID, BoxMeasurePolicy$measure$lambda_0(placeable, measurable, _this__u8e3s4, boxWidth, boxHeight, this));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.l();
    var placeables = Array(size);
    var hasMatchParentSizeChildren = false;
    var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__hi9lfi(constraints)};
    var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__ev4bgx(constraints)};
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    var inductionVariable = 0;
    var last = measurables.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.m(index);
        if (!get_matchesParentSize(item)) {
          var placeable_0 = item.n6n(contentConstraints);
          placeables[index] = placeable_0;
          var tmp0_1 = boxWidth_0._v;
          // Inline function 'kotlin.math.max' call
          var b_1 = placeable_0.o6n_1;
          boxWidth_0._v = Math.max(tmp0_1, b_1);
          var tmp0_2 = boxHeight_0._v;
          // Inline function 'kotlin.math.max' call
          var b_2 = placeable_0.p6n_1;
          boxHeight_0._v = Math.max(tmp0_2, b_2);
        } else {
          hasMatchParentSizeChildren = true;
        }
      }
       while (inductionVariable <= last);
    if (hasMatchParentSizeChildren) {
      var tmp0_minWidth = !(boxWidth_0._v === 2147483647) ? boxWidth_0._v : 0;
      var tmp1_minHeight = !(boxHeight_0._v === 2147483647) ? boxHeight_0._v : 0;
      var tmp2_maxWidth = boxWidth_0._v;
      var tmp3_maxHeight = boxHeight_0._v;
      var matchParentSizeConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
      // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.l() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.m(index_0);
          if (get_matchesParentSize(item_0)) {
            placeables[index_0] = item_0.n6n(matchParentSizeConstraints);
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp_2 = boxWidth_0._v;
    var tmp_3 = boxHeight_0._v;
    return _this__u8e3s4.t6n(tmp_2, tmp_3, VOID, BoxMeasurePolicy$measure$lambda_1(placeables, measurables, _this__u8e3s4, boxWidth_0, boxHeight_0, this));
  };
  protoOf(BoxMeasurePolicy).toString = function () {
    return 'BoxMeasurePolicy(alignment=' + toString_0(this.eak_1) + ', propagateMinConstraints=' + this.fak_1 + ')';
  };
  protoOf(BoxMeasurePolicy).hashCode = function () {
    var result = hashCode(this.eak_1);
    result = imul(result, 31) + getBooleanHashCode(this.fak_1) | 0;
    return result;
  };
  protoOf(BoxMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BoxMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof BoxMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.eak_1, tmp0_other_with_cast.eak_1))
      return false;
    if (!(this.fak_1 === tmp0_other_with_cast.fak_1))
      return false;
    return true;
  };
  function maybeCachedBoxMeasurePolicy(alignment, propagateMinConstraints) {
    _init_properties_Box_kt__tvzvdl();
    var cache = propagateMinConstraints ? get_Cache1() : get_Cache2();
    var tmp0_elvis_lhs = cache.y1(alignment);
    return tmp0_elvis_lhs == null ? new BoxMeasurePolicy(alignment, propagateMinConstraints) : tmp0_elvis_lhs;
  }
  function BoxScopeInstance$matchParentSize$lambda(_this__u8e3s4) {
    _this__u8e3s4.gak_1 = 'matchParentSize';
    return Unit_instance;
  }
  function BoxScopeInstance() {
  }
  protoOf(BoxScopeInstance).jak = function (_this__u8e3s4) {
    var tmp = Companion_getInstance().t6a_1;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp_0;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp_0 = BoxScopeInstance$matchParentSize$lambda;
    } else {
      tmp_0 = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp_0;
    return _this__u8e3s4.y6b(new BoxChildDataElement(tmp, true, tmp$ret$0));
  };
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    return BoxScopeInstance_instance;
  }
  function get_matchesParentSize(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zak_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__u8e3s4, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yak_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var tmp0 = placeable.o6n_1;
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = placeable.p6n_1;
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    var tmp = _IntSize___init__impl__emcjft(tmp$ret$0);
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$2 = bitwiseOr(shiftLeft(fromInt(boxWidth), 32), bitwiseAnd(fromInt(boxHeight), new Long(-1, 0)));
    var tmp$ret$3 = _IntSize___init__impl__emcjft(tmp$ret$2);
    var position = childAlignment.k6b(tmp, tmp$ret$3, layoutDirection);
    _this__u8e3s4.k7z(placeable, position);
  }
  function BoxChildDataElement(alignment, matchParentSize, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.bal_1 = alignment;
    this.cal_1 = matchParentSize;
    this.dal_1 = inspectorInfo;
  }
  protoOf(BoxChildDataElement).q2r = function () {
    return new BoxChildDataNode(this.bal_1, this.cal_1);
  };
  protoOf(BoxChildDataElement).eal = function (node) {
    node.yak_1 = this.bal_1;
    node.zak_1 = this.cal_1;
  };
  protoOf(BoxChildDataElement).m6i = function (node) {
    return this.eal(node instanceof BoxChildDataNode ? node : THROW_CCE());
  };
  protoOf(BoxChildDataElement).hashCode = function () {
    var result = hashCode(this.bal_1);
    result = imul(31, result) + getBooleanHashCode(this.cal_1) | 0;
    return result;
  };
  protoOf(BoxChildDataElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof BoxChildDataElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.bal_1, otherModifier.bal_1) && this.cal_1 === otherModifier.cal_1;
  };
  function BoxChildDataNode(alignment, matchParentSize) {
    Node.call(this);
    this.yak_1 = alignment;
    this.zak_1 = matchParentSize;
  }
  protoOf(BoxChildDataNode).z7w = function (_this__u8e3s4, parentData) {
    return this;
  };
  function get_boxChildDataNode(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _this__u8e3s4.h7v();
    return tmp instanceof BoxChildDataNode ? tmp : null;
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.fal_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).l7y = function (_this__u8e3s4, measurables, constraints) {
    return this.fal_1(_this__u8e3s4, measurables, new Constraints_0(constraints));
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).v2 = function () {
    return this.fal_1;
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, MeasurePolicy) : false) {
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
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).hashCode = function () {
    return hashCode(this.v2());
  };
  function EmptyBoxMeasurePolicy$lambda($this$MeasurePolicy, _unused_var__etf5q3, constraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.s4m_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.s4m_1);
    return $this$MeasurePolicy.t6n(tmp, tmp_0, VOID, EmptyBoxMeasurePolicy$lambda$lambda);
  }
  function EmptyBoxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_instance;
  }
  function Box$lambda($modifier, $$changed) {
    return function ($composer, $force) {
      Box($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Box_kt_kr8cbp;
  function _init_properties_Box_kt__tvzvdl() {
    if (!properties_initialized_Box_kt_kr8cbp) {
      properties_initialized_Box_kt_kr8cbp = true;
      Cache1 = cacheFor(true);
      Cache2 = cacheFor(false);
      DefaultBoxMeasurePolicy = new BoxMeasurePolicy(Companion_getInstance().p6a_1, false);
      var tmp = EmptyBoxMeasurePolicy$lambda;
      EmptyBoxMeasurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp);
      androidx_compose_foundation_layout_BoxScopeInstance$stable = 0;
    }
  }
  function get_DefaultColumnMeasurePolicy() {
    _init_properties_Column_kt__s1zb92();
    return DefaultColumnMeasurePolicy;
  }
  var DefaultColumnMeasurePolicy;
  var androidx_compose_foundation_layout_ColumnMeasurePolicy$stable;
  var androidx_compose_foundation_layout_ColumnScopeInstance$stable;
  function ColumnScope() {
  }
  function getCrossAxisPosition($this, placeable, parentData, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, layoutDirection) {
    var childCrossAlignment = parentData == null ? null : parentData.kal_1;
    var tmp2_elvis_lhs = childCrossAlignment == null ? null : childCrossAlignment.mal(crossAxisLayoutSize - placeable.o6n_1 | 0, layoutDirection, placeable, beforeCrossAxisAlignmentLine);
    return tmp2_elvis_lhs == null ? $this.oal_1.f6b(0, crossAxisLayoutSize - placeable.o6n_1 | 0, layoutDirection) : tmp2_elvis_lhs;
  }
  function ColumnMeasurePolicy$placeHelper$lambda($placeables, this$0, $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $measureScope, $mainAxisPositions) {
    return function ($this$layout) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var crossAxisPosition = getCrossAxisPosition(this$0, ensureNotNull(item), get_rowColumnParentData(item), $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $measureScope.w53());
        $this$layout.i7z(item, crossAxisPosition, $mainAxisPositions[_unary__edvuaz]);
      }
      return Unit_instance;
    };
  }
  function ColumnMeasurePolicy(verticalArrangement, horizontalAlignment) {
    this.nal_1 = verticalArrangement;
    this.oal_1 = horizontalAlignment;
  }
  protoOf(ColumnMeasurePolicy).pal = function (_this__u8e3s4) {
    return _this__u8e3s4.p6n_1;
  };
  protoOf(ColumnMeasurePolicy).qal = function (_this__u8e3s4) {
    return _this__u8e3s4.o6n_1;
  };
  protoOf(ColumnMeasurePolicy).ral = function (mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    // Inline function 'kotlin.with' call
    this.nal_1.gaj(measureScope, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions);
  };
  protoOf(ColumnMeasurePolicy).sal = function (placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    return measureScope.t6n(crossAxisLayoutSize, mainAxisLayoutSize, VOID, ColumnMeasurePolicy$placeHelper$lambda(placeables, this, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, measureScope, mainAxisPositions));
  };
  protoOf(ColumnMeasurePolicy).tal = function (mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    return createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
  };
  protoOf(ColumnMeasurePolicy).l7y = function (_this__u8e3s4, measurables, constraints) {
    var tmp = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp_1 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var tmp_2 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_3 = _this__u8e3s4.b4n(this.nal_1.eaj());
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.l();
    var tmp$ret$0 = Array(size);
    return measure(this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, _this__u8e3s4, measurables, tmp$ret$0, 0, measurables.l());
  };
  protoOf(ColumnMeasurePolicy).m7y = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_instance.val(measurables, height, _this__u8e3s4.b4n(this.nal_1.eaj()));
  };
  protoOf(ColumnMeasurePolicy).n7y = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_instance.wal(measurables, width, _this__u8e3s4.b4n(this.nal_1.eaj()));
  };
  protoOf(ColumnMeasurePolicy).o7y = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_instance.xal(measurables, height, _this__u8e3s4.b4n(this.nal_1.eaj()));
  };
  protoOf(ColumnMeasurePolicy).p7y = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_instance.yal(measurables, width, _this__u8e3s4.b4n(this.nal_1.eaj()));
  };
  protoOf(ColumnMeasurePolicy).toString = function () {
    return 'ColumnMeasurePolicy(verticalArrangement=' + toString_0(this.nal_1) + ', horizontalAlignment=' + toString_0(this.oal_1) + ')';
  };
  protoOf(ColumnMeasurePolicy).hashCode = function () {
    var result = hashCode(this.nal_1);
    result = imul(result, 31) + hashCode(this.oal_1) | 0;
    return result;
  };
  protoOf(ColumnMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColumnMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof ColumnMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.nal_1, tmp0_other_with_cast.nal_1))
      return false;
    if (!equals(this.oal_1, tmp0_other_with_cast.oal_1))
      return false;
    return true;
  };
  function columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer, $changed) {
    _init_properties_Column_kt__s1zb92();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1089876336, 'C(columnMeasurePolicy)P(1):Column.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(1089876336, $changed, -1, 'androidx.compose.foundation.layout.columnMeasurePolicy (Column.kt:108)');
    }
    var tmp;
    if (equals(verticalArrangement, Arrangement_getInstance().naj_1) && equals(horizontalAlignment, Companion_getInstance().b6b_1)) {
      $composer_0.p24(-1446569784);
      $composer_0.q24();
      tmp = get_DefaultColumnMeasurePolicy();
    } else {
      $composer_0.p24(-1446515937);
      sourceInformation($composer_0, '111@5165L227');
      sourceInformationMarkerStart($composer_0, -600850829, 'CC(remember):Column.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.j25(verticalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.j25(horizontalAlignment) || ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      var it = $composer_0.h25();
      var tmp_0;
      if (invalid || it === Companion_getInstance_1().i24_1) {
        var value = new ColumnMeasurePolicy(verticalArrangement, horizontalAlignment);
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
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function ColumnScopeInstance() {
  }
  protoOf(ColumnScopeInstance).gal = function (_this__u8e3s4, weight, fill) {
    // Inline function 'androidx.compose.foundation.layout.internal.requirePrecondition' call
    if (!(weight > 0.0)) {
      var tmp$ret$0 = 'invalid weight; must be greater than zero';
      throwIllegalArgumentException(tmp$ret$0);
    }
    return _this__u8e3s4.y6b(new LayoutWeightElement(coerceAtMost(weight, 3.4028235E38), fill));
  };
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    return ColumnScopeInstance_instance;
  }
  function createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax) {
    _init_properties_Column_kt__s1zb92();
    var tmp;
    if (!isPrioritizing) {
      tmp = Constraints(crossAxisMin, crossAxisMax, mainAxisMin, mainAxisMax);
    } else {
      tmp = Companion_instance_0.y4m(crossAxisMin, crossAxisMax, mainAxisMin, mainAxisMax);
    }
    return tmp;
  }
  var properties_initialized_Column_kt_nm4x4;
  function _init_properties_Column_kt__s1zb92() {
    if (!properties_initialized_Column_kt_nm4x4) {
      properties_initialized_Column_kt_nm4x4 = true;
      DefaultColumnMeasurePolicy = new ColumnMeasurePolicy(Arrangement_getInstance().naj_1, Companion_getInstance().b6b_1);
      androidx_compose_foundation_layout_ColumnMeasurePolicy$stable = 0;
      androidx_compose_foundation_layout_ColumnScopeInstance$stable = 0;
    }
  }
  var androidx_compose_foundation_layout_ComposeFoundationLayoutFlags$stable;
  var androidx_compose_foundation_layout_ContextualFlowRowScopeImpl$stable;
  var androidx_compose_foundation_layout_ContextualFlowColumnScopeImpl$stable;
  var androidx_compose_foundation_layout_ContextualFlowRowOverflowScopeImpl$stable;
  var androidx_compose_foundation_layout_ContextualFlowColumnOverflowScopeImpl$stable;
  var androidx_compose_foundation_layout_ContextualFlowItemIterator$stable;
  var androidx_compose_foundation_layout_FlowLineInfo$stable;
  var androidx_compose_foundation_layout_FlowLayoutBuildingBlocks_WrapInfo$stable;
  var androidx_compose_foundation_layout_FlowLayoutBuildingBlocks_WrapEllipsisInfo$stable;
  var androidx_compose_foundation_layout_FlowLayoutBuildingBlocks$stable;
  var androidx_compose_foundation_layout_FlowRowOverflow$stable;
  var androidx_compose_foundation_layout_FlowColumnOverflow$stable;
  var androidx_compose_foundation_layout_ContextualFlowRowOverflow$stable;
  var androidx_compose_foundation_layout_ContextualFlowColumnOverflow$stable;
  var androidx_compose_foundation_layout_FlowLayoutOverflow$stable;
  var androidx_compose_foundation_layout_FlowLayoutOverflowState$stable;
  function width(_this__u8e3s4, intrinsicSize) {
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = width$lambda(intrinsicSize);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.y6b(new IntrinsicWidthElement(intrinsicSize, true, tmp$ret$0));
  }
  var IntrinsicSize_Min_instance;
  var IntrinsicSize_Max_instance;
  var IntrinsicSize_entriesInitialized;
  function IntrinsicSize_initEntries() {
    if (IntrinsicSize_entriesInitialized)
      return Unit_instance;
    IntrinsicSize_entriesInitialized = true;
    IntrinsicSize_Min_instance = new IntrinsicSize('Min', 0);
    IntrinsicSize_Max_instance = new IntrinsicSize('Max', 1);
  }
  function IntrinsicSize(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function IntrinsicWidthElement(width, enforceIncoming, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.aam_1 = width;
    this.bam_1 = enforceIncoming;
    this.cam_1 = inspectorInfo;
  }
  protoOf(IntrinsicWidthElement).q2r = function () {
    return new IntrinsicWidthNode(this.aam_1, this.bam_1);
  };
  protoOf(IntrinsicWidthElement).dam = function (node) {
    node.sam_1 = this.aam_1;
    node.tam_1 = this.bam_1;
  };
  protoOf(IntrinsicWidthElement).m6i = function (node) {
    return this.dam(node instanceof IntrinsicWidthNode ? node : THROW_CCE());
  };
  protoOf(IntrinsicWidthElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof IntrinsicWidthElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifierElement = tmp;
    return this.aam_1.equals(otherModifierElement.aam_1) && this.bam_1 === otherModifierElement.bam_1;
  };
  protoOf(IntrinsicWidthElement).hashCode = function () {
    return imul(31, this.aam_1.hashCode()) + getBooleanHashCode(this.bam_1) | 0;
  };
  function IntrinsicWidthNode(width, enforceIncoming) {
    IntrinsicSizeModifier.call(this);
    this.sam_1 = width;
    this.tam_1 = enforceIncoming;
  }
  protoOf(IntrinsicWidthNode).uam = function () {
    return this.tam_1;
  };
  protoOf(IntrinsicWidthNode).vam = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    if (this.sam_1.equals(IntrinsicSize_Min_getInstance())) {
      tmp = measurable.v6n(_Constraints___get_maxHeight__impl__dt3e8z(constraints));
    } else {
      tmp = measurable.x6n(_Constraints___get_maxHeight__impl__dt3e8z(constraints));
    }
    var measuredWidth = tmp;
    if (measuredWidth < 0) {
      measuredWidth = 0;
    }
    return Companion_instance_0.w4m(measuredWidth);
  };
  protoOf(IntrinsicWidthNode).u6n = function (_this__u8e3s4, measurable, height) {
    return this.sam_1.equals(IntrinsicSize_Min_getInstance()) ? measurable.v6n(height) : measurable.x6n(height);
  };
  protoOf(IntrinsicWidthNode).w6n = function (_this__u8e3s4, measurable, height) {
    return this.sam_1.equals(IntrinsicSize_Min_getInstance()) ? measurable.v6n(height) : measurable.x6n(height);
  };
  function IntrinsicSizeModifier$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.f7z($placeable, Companion_getInstance_2().f4o_1);
      return Unit_instance;
    };
  }
  function IntrinsicSizeModifier() {
    Node.call(this);
  }
  protoOf(IntrinsicSizeModifier).m6n = function (_this__u8e3s4, measurable, constraints) {
    var contentConstraints = this.vam(_this__u8e3s4, measurable, constraints);
    var placeable = measurable.n6n(this.uam() ? constrain(constraints, contentConstraints) : contentConstraints);
    var tmp = placeable.o6n_1;
    var tmp_0 = placeable.p6n_1;
    return _this__u8e3s4.t6n(tmp, tmp_0, VOID, IntrinsicSizeModifier$measure$lambda(placeable));
  };
  protoOf(IntrinsicSizeModifier).u6n = function (_this__u8e3s4, measurable, height) {
    return measurable.v6n(height);
  };
  protoOf(IntrinsicSizeModifier).y6n = function (_this__u8e3s4, measurable, width) {
    return measurable.z6n(width);
  };
  protoOf(IntrinsicSizeModifier).w6n = function (_this__u8e3s4, measurable, height) {
    return measurable.x6n(height);
  };
  protoOf(IntrinsicSizeModifier).a6o = function (_this__u8e3s4, measurable, width) {
    return measurable.b6o(width);
  };
  function width$lambda($intrinsicSize) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.gak_1 = 'width';
      _this__u8e3s4.iak_1.lan('intrinsicSize', $intrinsicSize);
      return Unit_instance;
    };
  }
  function IntrinsicSize_Min_getInstance() {
    IntrinsicSize_initEntries();
    return IntrinsicSize_Min_instance;
  }
  function IntrinsicSize_Max_getInstance() {
    IntrinsicSize_initEntries();
    return IntrinsicSize_Max_instance;
  }
  function offset_0(_this__u8e3s4, offset) {
    return _this__u8e3s4.y6b(new OffsetPxElement(offset, true, offset$lambda(offset)));
  }
  function OffsetPxElement(offset, rtlAware, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.nan_1 = offset;
    this.oan_1 = rtlAware;
    this.pan_1 = inspectorInfo;
  }
  protoOf(OffsetPxElement).q2r = function () {
    return new OffsetPxNode(this.nan_1, this.oan_1);
  };
  protoOf(OffsetPxElement).qan = function (node) {
    node.iao(this.nan_1, this.oan_1);
  };
  protoOf(OffsetPxElement).m6i = function (node) {
    return this.qan(node instanceof OffsetPxNode ? node : THROW_CCE());
  };
  protoOf(OffsetPxElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof OffsetPxElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return this.nan_1 === otherModifier.nan_1 && this.oan_1 === otherModifier.oan_1;
  };
  protoOf(OffsetPxElement).toString = function () {
    return 'OffsetPxModifier(offset=' + toString_0(this.nan_1) + ', rtlAware=' + this.oan_1 + ')';
  };
  protoOf(OffsetPxElement).hashCode = function () {
    var result = hashCode(this.nan_1);
    result = imul(31, result) + getBooleanHashCode(this.oan_1) | 0;
    return result;
  };
  function OffsetPxNode$measure$lambda(this$0, $placeable) {
    return function ($this$layout) {
      var offsetValue = this$0.fao_1($this$layout).d4o_1;
      var tmp;
      if (this$0.gao_1) {
        $this$layout.o7z($placeable, _IntOffset___get_x__impl__qiqr5o(offsetValue), _IntOffset___get_y__impl__2avpwj(offsetValue));
        tmp = Unit_instance;
      } else {
        $this$layout.y6x($placeable, _IntOffset___get_x__impl__qiqr5o(offsetValue), _IntOffset___get_y__impl__2avpwj(offsetValue));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function OffsetPxNode(offset, rtlAware) {
    Node.call(this);
    this.fao_1 = offset;
    this.gao_1 = rtlAware;
    this.hao_1 = false;
  }
  protoOf(OffsetPxNode).x6c = function () {
    return this.hao_1;
  };
  protoOf(OffsetPxNode).iao = function (offset, rtlAware) {
    if (!(this.fao_1 === offset) || !(this.gao_1 === rtlAware)) {
      invalidatePlacement(this);
    }
    this.fao_1 = offset;
    this.gao_1 = rtlAware;
  };
  protoOf(OffsetPxNode).m6n = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.n6n(constraints);
    var tmp = placeable.o6n_1;
    var tmp_0 = placeable.p6n_1;
    return _this__u8e3s4.t6n(tmp, tmp_0, VOID, OffsetPxNode$measure$lambda(this, placeable));
  };
  function offset$lambda($offset) {
    return function ($this$OffsetPxElement) {
      $this$OffsetPxElement.gak_1 = 'offset';
      $this$OffsetPxElement.iak_1.lan('offset', $offset);
      return Unit_instance;
    };
  }
  var androidx_compose_foundation_layout_PaddingValues_Absolute$stable;
  var androidx_compose_foundation_layout_PaddingValuesImpl$stable;
  function PaddingValues(all) {
    return new PaddingValuesImpl(all, all, all, all);
  }
  function PaddingValues_0(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return new PaddingValuesImpl(start, top, end, bottom);
  }
  function padding(_this__u8e3s4, start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return _this__u8e3s4.y6b(new PaddingElement(start, top, end, bottom, true, padding$lambda(start, top, end, bottom)));
  }
  function padding_0(_this__u8e3s4, horizontal, vertical) {
    var tmp;
    if (horizontal === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = horizontal;
    }
    horizontal = tmp;
    var tmp_0;
    if (vertical === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = vertical;
    }
    vertical = tmp_0;
    return _this__u8e3s4.y6b(new PaddingElement(horizontal, vertical, horizontal, vertical, true, padding$lambda_0(horizontal, vertical)));
  }
  function PaddingValues_1(horizontal, vertical) {
    var tmp;
    if (horizontal === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = horizontal;
    }
    horizontal = tmp;
    var tmp_0;
    if (vertical === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = vertical;
    }
    vertical = tmp_0;
    return new PaddingValuesImpl(horizontal, vertical, horizontal, vertical);
  }
  function calculateStartPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.kao(layoutDirection);
    } else {
      tmp = _this__u8e3s4.jao(layoutDirection);
    }
    return tmp;
  }
  function calculateEndPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.jao(layoutDirection);
    } else {
      tmp = _this__u8e3s4.kao(layoutDirection);
    }
    return tmp;
  }
  function padding_1(_this__u8e3s4, paddingValues) {
    return _this__u8e3s4.y6b(new PaddingValuesElement(paddingValues, padding$lambda_1(paddingValues)));
  }
  function PaddingValuesImpl(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    this.lao_1 = start;
    this.mao_1 = top;
    this.nao_1 = end;
    this.oao_1 = bottom;
    // Inline function 'androidx.compose.foundation.layout.internal.requirePrecondition' call
    if (!!!(!!(!!(_Dp___get_value__impl__geb1vb(this.lao_1) >= 0.0 & _Dp___get_value__impl__geb1vb(this.mao_1) >= 0.0) & _Dp___get_value__impl__geb1vb(this.nao_1) >= 0.0) & _Dp___get_value__impl__geb1vb(this.oao_1) >= 0.0)) {
      var tmp$ret$4 = 'Padding must be non-negative';
      throwIllegalArgumentException(tmp$ret$4);
    }
  }
  protoOf(PaddingValuesImpl).kao = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.lao_1 : this.nao_1;
  };
  protoOf(PaddingValuesImpl).pao = function () {
    return this.mao_1;
  };
  protoOf(PaddingValuesImpl).jao = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.nao_1 : this.lao_1;
  };
  protoOf(PaddingValuesImpl).qao = function () {
    return this.oao_1;
  };
  protoOf(PaddingValuesImpl).equals = function (other) {
    if (!(other instanceof PaddingValuesImpl))
      return false;
    return equals(this.lao_1, other.lao_1) && equals(this.mao_1, other.mao_1) && equals(this.nao_1, other.nao_1) && equals(this.oao_1, other.oao_1);
  };
  protoOf(PaddingValuesImpl).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.lao_1), 31) + Dp__hashCode_impl_sxkrra(this.mao_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.nao_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.oao_1) | 0;
  };
  protoOf(PaddingValuesImpl).toString = function () {
    return 'PaddingValues(start=' + Dp__toString_impl_kcddez(this.lao_1) + ', top=' + Dp__toString_impl_kcddez(this.mao_1) + ', end=' + Dp__toString_impl_kcddez(this.nao_1) + ', bottom=' + Dp__toString_impl_kcddez(this.oao_1) + ')';
  };
  function PaddingElement(start, top, end, bottom, rtlAware, inspectorInfo) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    ModifierNodeElement.call(this);
    this.sao_1 = start;
    this.tao_1 = top;
    this.uao_1 = end;
    this.vao_1 = bottom;
    this.wao_1 = rtlAware;
    this.xao_1 = inspectorInfo;
    var tmp_3;
    if (_Dp___get_value__impl__geb1vb(this.sao_1) >= 0.0) {
      tmp_3 = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var this_0 = this.sao_1;
      tmp_3 = isNaN_0(_Dp___get_value__impl__geb1vb(this_0));
    }
    var tmp_4 = tmp_3;
    var tmp_5;
    if (_Dp___get_value__impl__geb1vb(this.tao_1) >= 0.0) {
      tmp_5 = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var this_1 = this.tao_1;
      tmp_5 = isNaN_0(_Dp___get_value__impl__geb1vb(this_1));
    }
    var tmp_6 = !!(tmp_4 & tmp_5);
    var tmp_7;
    if (_Dp___get_value__impl__geb1vb(this.uao_1) >= 0.0) {
      tmp_7 = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var this_2 = this.uao_1;
      tmp_7 = isNaN_0(_Dp___get_value__impl__geb1vb(this_2));
    }
    var tmp_8 = !!(tmp_6 & tmp_7);
    var tmp_9;
    if (_Dp___get_value__impl__geb1vb(this.vao_1) >= 0.0) {
      tmp_9 = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var this_3 = this.vao_1;
      tmp_9 = isNaN_0(_Dp___get_value__impl__geb1vb(this_3));
    }
    // Inline function 'androidx.compose.foundation.layout.internal.requirePrecondition' call
    if (!!!(tmp_8 & tmp_9)) {
      var tmp$ret$8 = 'Padding must be non-negative';
      throwIllegalArgumentException(tmp$ret$8);
    }
  }
  protoOf(PaddingElement).q2r = function () {
    return new PaddingNode(this.sao_1, this.tao_1, this.uao_1, this.vao_1, this.wao_1);
  };
  protoOf(PaddingElement).yao = function (node) {
    node.nap_1 = this.sao_1;
    node.oap_1 = this.tao_1;
    node.pap_1 = this.uao_1;
    node.qap_1 = this.vao_1;
    node.rap_1 = this.wao_1;
  };
  protoOf(PaddingElement).m6i = function (node) {
    return this.yao(node instanceof PaddingNode ? node : THROW_CCE());
  };
  protoOf(PaddingElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.sao_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.tao_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.uao_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.vao_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.wao_1) | 0;
    return result;
  };
  protoOf(PaddingElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifierElement = tmp;
    return equals(this.sao_1, otherModifierElement.sao_1) && equals(this.tao_1, otherModifierElement.tao_1) && equals(this.uao_1, otherModifierElement.uao_1) && equals(this.vao_1, otherModifierElement.vao_1) && this.wao_1 === otherModifierElement.wao_1;
  };
  function PaddingValuesElement(paddingValues, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.tap_1 = paddingValues;
    this.uap_1 = inspectorInfo;
  }
  protoOf(PaddingValuesElement).q2r = function () {
    return new PaddingValuesModifier(this.tap_1);
  };
  protoOf(PaddingValuesElement).vap = function (node) {
    node.kaq_1 = this.tap_1;
  };
  protoOf(PaddingValuesElement).m6i = function (node) {
    return this.vap(node instanceof PaddingValuesModifier ? node : THROW_CCE());
  };
  protoOf(PaddingValuesElement).hashCode = function () {
    return hashCode(this.tap_1);
  };
  protoOf(PaddingValuesElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingValuesElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherElement = tmp;
    return equals(this.tap_1, otherElement.tap_1);
  };
  function PaddingNode$measure$lambda(this$0, $placeable) {
    return function ($this$layout) {
      var tmp;
      if (this$0.rap_1) {
        $this$layout.l6n($placeable, $this$layout.b4n(this$0.nap_1), $this$layout.b4n(this$0.oap_1));
        tmp = Unit_instance;
      } else {
        $this$layout.i7z($placeable, $this$layout.b4n(this$0.nap_1), $this$layout.b4n(this$0.oap_1));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function PaddingNode(start, top, end, bottom, rtlAware) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    Node.call(this);
    this.nap_1 = start;
    this.oap_1 = top;
    this.pap_1 = end;
    this.qap_1 = bottom;
    this.rap_1 = rtlAware;
  }
  protoOf(PaddingNode).m6n = function (_this__u8e3s4, measurable, constraints) {
    var horizontal = _this__u8e3s4.b4n(this.nap_1) + _this__u8e3s4.b4n(this.pap_1) | 0;
    var vertical = _this__u8e3s4.b4n(this.oap_1) + _this__u8e3s4.b4n(this.qap_1) | 0;
    var placeable = measurable.n6n(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.o6n_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.p6n_1 + vertical | 0);
    return _this__u8e3s4.t6n(width, height, VOID, PaddingNode$measure$lambda(this, placeable));
  };
  function PaddingValuesModifier$measure$lambda($placeable, $roundedLeftPadding, $roundedTopPadding) {
    return function ($this$layout) {
      $this$layout.i7z($placeable, $roundedLeftPadding, $roundedTopPadding);
      return Unit_instance;
    };
  }
  function PaddingValuesModifier(paddingValues) {
    Node.call(this);
    this.kaq_1 = paddingValues;
  }
  protoOf(PaddingValuesModifier).m6n = function (_this__u8e3s4, measurable, constraints) {
    var leftPadding = this.kaq_1.kao(_this__u8e3s4.w53());
    var topPadding = this.kaq_1.pao();
    var rightPadding = this.kaq_1.jao(_this__u8e3s4.w53());
    var bottomPadding = this.kaq_1.qao();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    var tmp = Dp__compareTo_impl_tlg3dl(leftPadding, tmp$ret$0) >= 0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
    var tmp_0 = !!(tmp & Dp__compareTo_impl_tlg3dl(topPadding, tmp$ret$1) >= 0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
    var tmp_1 = !!(tmp_0 & Dp__compareTo_impl_tlg3dl(rightPadding, tmp$ret$2) >= 0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$3 = _Dp___init__impl__ms3zkb(0);
    // Inline function 'androidx.compose.foundation.layout.internal.requirePrecondition' call
    if (!!!(tmp_1 & Dp__compareTo_impl_tlg3dl(bottomPadding, tmp$ret$3) >= 0)) {
      var tmp$ret$4 = 'Padding must be non-negative';
      throwIllegalArgumentException(tmp$ret$4);
    }
    var roundedLeftPadding = _this__u8e3s4.b4n(leftPadding);
    var horizontal = roundedLeftPadding + _this__u8e3s4.b4n(rightPadding) | 0;
    var roundedTopPadding = _this__u8e3s4.b4n(topPadding);
    var vertical = roundedTopPadding + _this__u8e3s4.b4n(bottomPadding) | 0;
    var placeable = measurable.n6n(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.o6n_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.p6n_1 + vertical | 0);
    return _this__u8e3s4.t6n(width, height, VOID, PaddingValuesModifier$measure$lambda(placeable, roundedLeftPadding, roundedTopPadding));
  };
  function padding_2(_this__u8e3s4, all) {
    return _this__u8e3s4.y6b(new PaddingElement(all, all, all, all, true, padding$lambda_2(all)));
  }
  function padding$lambda($start, $top, $end, $bottom) {
    return function ($this$PaddingElement) {
      $this$PaddingElement.gak_1 = 'padding';
      $this$PaddingElement.iak_1.lan('start', new Dp($start));
      $this$PaddingElement.iak_1.lan('top', new Dp($top));
      $this$PaddingElement.iak_1.lan('end', new Dp($end));
      $this$PaddingElement.iak_1.lan('bottom', new Dp($bottom));
      return Unit_instance;
    };
  }
  function padding$lambda_0($horizontal, $vertical) {
    return function ($this$PaddingElement) {
      $this$PaddingElement.gak_1 = 'padding';
      $this$PaddingElement.iak_1.lan('horizontal', new Dp($horizontal));
      $this$PaddingElement.iak_1.lan('vertical', new Dp($vertical));
      return Unit_instance;
    };
  }
  function padding$lambda_1($paddingValues) {
    return function ($this$PaddingValuesElement) {
      $this$PaddingValuesElement.gak_1 = 'padding';
      $this$PaddingValuesElement.iak_1.lan('paddingValues', $paddingValues);
      return Unit_instance;
    };
  }
  function padding$lambda_2($all) {
    return function ($this$PaddingElement) {
      $this$PaddingElement.gak_1 = 'padding';
      $this$PaddingElement.hak_1 = new Dp($all);
      return Unit_instance;
    };
  }
  function get_DefaultRowMeasurePolicy() {
    _init_properties_Row_kt__jenljs();
    return DefaultRowMeasurePolicy;
  }
  var DefaultRowMeasurePolicy;
  var androidx_compose_foundation_layout_RowMeasurePolicy$stable;
  var androidx_compose_foundation_layout_RowScopeInstance$stable;
  function RowScope() {
  }
  function getCrossAxisPosition_0($this, placeable, parentData, crossAxisLayoutSize, beforeCrossAxisAlignmentLine) {
    var childCrossAlignment = parentData == null ? null : parentData.kal_1;
    var tmp2_elvis_lhs = childCrossAlignment == null ? null : childCrossAlignment.mal(crossAxisLayoutSize - placeable.p6n_1 | 0, LayoutDirection_Ltr_getInstance(), placeable, beforeCrossAxisAlignmentLine);
    return tmp2_elvis_lhs == null ? $this.naq_1.h6b(0, crossAxisLayoutSize - placeable.p6n_1 | 0) : tmp2_elvis_lhs;
  }
  function RowMeasurePolicy$placeHelper$lambda($placeables, this$0, $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $mainAxisPositions) {
    return function ($this$layout) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var crossAxisPosition = getCrossAxisPosition_0(this$0, ensureNotNull(item), get_rowColumnParentData(item), $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine);
        $this$layout.i7z(item, $mainAxisPositions[_unary__edvuaz], crossAxisPosition);
      }
      return Unit_instance;
    };
  }
  function RowMeasurePolicy(horizontalArrangement, verticalAlignment) {
    this.maq_1 = horizontalArrangement;
    this.naq_1 = verticalAlignment;
  }
  protoOf(RowMeasurePolicy).pal = function (_this__u8e3s4) {
    return _this__u8e3s4.o6n_1;
  };
  protoOf(RowMeasurePolicy).qal = function (_this__u8e3s4) {
    return _this__u8e3s4.p6n_1;
  };
  protoOf(RowMeasurePolicy).l7y = function (_this__u8e3s4, measurables, constraints) {
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var tmp_3 = _this__u8e3s4.b4n(this.maq_1.eaj());
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.l();
    var tmp$ret$0 = Array(size);
    return measure(this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, _this__u8e3s4, measurables, tmp$ret$0, 0, measurables.l());
  };
  protoOf(RowMeasurePolicy).ral = function (mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    // Inline function 'kotlin.with' call
    this.maq_1.faj(measureScope, mainAxisLayoutSize, childrenMainAxisSize, measureScope.w53(), mainAxisPositions);
  };
  protoOf(RowMeasurePolicy).sal = function (placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    return measureScope.t6n(mainAxisLayoutSize, crossAxisLayoutSize, VOID, RowMeasurePolicy$placeHelper$lambda(placeables, this, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, mainAxisPositions));
  };
  protoOf(RowMeasurePolicy).tal = function (mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    return createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
  };
  protoOf(RowMeasurePolicy).m7y = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_instance.oaq(measurables, height, _this__u8e3s4.b4n(this.maq_1.eaj()));
  };
  protoOf(RowMeasurePolicy).n7y = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_instance.paq(measurables, width, _this__u8e3s4.b4n(this.maq_1.eaj()));
  };
  protoOf(RowMeasurePolicy).o7y = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_instance.qaq(measurables, height, _this__u8e3s4.b4n(this.maq_1.eaj()));
  };
  protoOf(RowMeasurePolicy).p7y = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_instance.raq(measurables, width, _this__u8e3s4.b4n(this.maq_1.eaj()));
  };
  protoOf(RowMeasurePolicy).toString = function () {
    return 'RowMeasurePolicy(horizontalArrangement=' + toString_0(this.maq_1) + ', verticalAlignment=' + toString_0(this.naq_1) + ')';
  };
  protoOf(RowMeasurePolicy).hashCode = function () {
    var result = hashCode(this.maq_1);
    result = imul(result, 31) + hashCode(this.naq_1) | 0;
    return result;
  };
  protoOf(RowMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof RowMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.maq_1, tmp0_other_with_cast.maq_1))
      return false;
    if (!equals(this.naq_1, tmp0_other_with_cast.naq_1))
      return false;
    return true;
  };
  function rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer, $changed) {
    _init_properties_Row_kt__jenljs();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -837807694, 'C(rowMeasurePolicy):Row.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-837807694, $changed, -1, 'androidx.compose.foundation.layout.rowMeasurePolicy (Row.kt:118)');
    }
    var tmp;
    if (equals(horizontalArrangement, Arrangement_getInstance().laj_1) && equals(verticalAlignment, Companion_getInstance().y6a_1)) {
      $composer_0.p24(-1073795767);
      $composer_0.q24();
      tmp = get_DefaultRowMeasurePolicy();
    } else {
      $composer_0.p24(-1073744896);
      sourceInformation($composer_0, '121@5901L224');
      sourceInformationMarkerStart($composer_0, -1974299278, 'CC(remember):Row.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.j25(horizontalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.j25(verticalAlignment) || ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      var it = $composer_0.h25();
      var tmp_0;
      if (invalid || it === Companion_getInstance_1().i24_1) {
        var value = new RowMeasurePolicy(horizontalArrangement, verticalAlignment);
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
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function RowScopeInstance() {
  }
  protoOf(RowScopeInstance).gal = function (_this__u8e3s4, weight, fill) {
    // Inline function 'androidx.compose.foundation.layout.internal.requirePrecondition' call
    if (!(weight > 0.0)) {
      var tmp$ret$0 = 'invalid weight; must be greater than zero';
      throwIllegalArgumentException(tmp$ret$0);
    }
    return _this__u8e3s4.y6b(new LayoutWeightElement(coerceAtMost(weight, 3.4028235E38), fill));
  };
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    return RowScopeInstance_instance;
  }
  function createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax) {
    _init_properties_Row_kt__jenljs();
    var tmp;
    if (!isPrioritizing) {
      tmp = Constraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    } else {
      tmp = Companion_instance_0.x4m(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    }
    return tmp;
  }
  var properties_initialized_Row_kt_sbxnna;
  function _init_properties_Row_kt__jenljs() {
    if (!properties_initialized_Row_kt_sbxnna) {
      properties_initialized_Row_kt_sbxnna = true;
      DefaultRowMeasurePolicy = new RowMeasurePolicy(Arrangement_getInstance().laj_1, Companion_getInstance().y6a_1);
      androidx_compose_foundation_layout_RowMeasurePolicy$stable = 0;
      androidx_compose_foundation_layout_RowScopeInstance$stable = 0;
    }
  }
  var androidx_compose_foundation_layout_CrossAxisAlignment$stable;
  var androidx_compose_foundation_layout_IntrinsicMeasureBlocks$stable;
  var androidx_compose_foundation_layout_LayoutWeightElement$stable;
  var androidx_compose_foundation_layout_LayoutWeightNode$stable;
  var androidx_compose_foundation_layout_WithAlignmentLineBlockElement$stable;
  var androidx_compose_foundation_layout_WithAlignmentLineElement$stable;
  var androidx_compose_foundation_layout_SiblingsAlignedNode_WithAlignmentLineBlockNode$stable;
  var androidx_compose_foundation_layout_SiblingsAlignedNode_WithAlignmentLineNode$stable;
  var androidx_compose_foundation_layout_SiblingsAlignedNode$stable;
  var androidx_compose_foundation_layout_HorizontalAlignElement$stable;
  var androidx_compose_foundation_layout_HorizontalAlignNode$stable;
  var androidx_compose_foundation_layout_VerticalAlignElement$stable;
  var androidx_compose_foundation_layout_VerticalAlignNode$stable;
  var androidx_compose_foundation_layout_RowColumnParentData$stable;
  var androidx_compose_foundation_layout_AlignmentLineProvider_Block$stable;
  var androidx_compose_foundation_layout_AlignmentLineProvider_Value$stable;
  var androidx_compose_foundation_layout_AlignmentLineProvider$stable;
  function RowColumnParentData(weight, fill, crossAxisAlignment, flowLayoutData) {
    weight = weight === VOID ? 0.0 : weight;
    fill = fill === VOID ? true : fill;
    crossAxisAlignment = crossAxisAlignment === VOID ? null : crossAxisAlignment;
    flowLayoutData = flowLayoutData === VOID ? null : flowLayoutData;
    this.ial_1 = weight;
    this.jal_1 = fill;
    this.kal_1 = crossAxisAlignment;
    this.lal_1 = flowLayoutData;
  }
  protoOf(RowColumnParentData).toString = function () {
    return 'RowColumnParentData(weight=' + this.ial_1 + ', fill=' + this.jal_1 + ', crossAxisAlignment=' + toString(this.kal_1) + ', flowLayoutData=' + toString(this.lal_1) + ')';
  };
  protoOf(RowColumnParentData).hashCode = function () {
    var result = getNumberHashCode(this.ial_1);
    result = imul(result, 31) + getBooleanHashCode(this.jal_1) | 0;
    result = imul(result, 31) + (this.kal_1 == null ? 0 : hashCode(this.kal_1)) | 0;
    result = imul(result, 31) + (this.lal_1 == null ? 0 : this.lal_1.hashCode()) | 0;
    return result;
  };
  protoOf(RowColumnParentData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowColumnParentData))
      return false;
    var tmp0_other_with_cast = other instanceof RowColumnParentData ? other : THROW_CCE();
    if (!equals(this.ial_1, tmp0_other_with_cast.ial_1))
      return false;
    if (!(this.jal_1 === tmp0_other_with_cast.jal_1))
      return false;
    if (!equals(this.kal_1, tmp0_other_with_cast.kal_1))
      return false;
    if (!equals(this.lal_1, tmp0_other_with_cast.lal_1))
      return false;
    return true;
  };
  function get_rowColumnParentData(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp = _this__u8e3s4.h7v();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function IntrinsicMeasureBlocks() {
  }
  protoOf(IntrinsicMeasureBlocks).oaq = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.n()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = measurables.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.m(index);
          var weight = get_weight(get_rowColumnParentData_0(item));
          var size = item.v6n(availableHeight);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            var tmp0 = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_0 = size / weight;
            // Inline function 'kotlin.math.max' call
            var b = roundToInt(this_0);
            weightUnitSpace = Math.max(tmp0, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      tmp$ret$0 = (roundToInt(this_1) + fixedSpace | 0) + imul(measurables.l() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).val = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.n()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.l() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableHeight);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = measurables.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.m(index);
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableHeight === 2147483647 ? 2147483647 : availableHeight - fixedSpace | 0;
            var w = 2147483647;
            // Inline function 'kotlin.math.min' call
            var a_0 = item.b6o(w);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            var tmp0 = crossAxisMax;
            // Inline function 'kotlin.math.max' call
            var b = item.v6n(mainAxisSpace);
            crossAxisMax = Math.max(tmp0, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableHeight === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'kotlin.math.max' call
        var a_1 = availableHeight - fixedSpace | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = Math.max(a_1, 0) / totalWeight;
        tmp = roundToInt(this_0);
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.l() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.m(index_0);
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            var tmp0_0 = crossAxisMax;
            var tmp_0;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              tmp_0 = roundToInt(this_1);
            } else {
              tmp_0 = 2147483647;
            }
            var h = tmp_0;
            // Inline function 'kotlin.math.max' call
            var b_0 = item_0.v6n(h);
            crossAxisMax = Math.max(tmp0_0, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).paq = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.n()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.l() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableWidth);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = measurables.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.m(index);
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableWidth === 2147483647 ? 2147483647 : availableWidth - fixedSpace | 0;
            var h = 2147483647;
            // Inline function 'kotlin.math.min' call
            var a_0 = item.x6n(h);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            var tmp0 = crossAxisMax;
            // Inline function 'kotlin.math.max' call
            var b = item.z6n(mainAxisSpace);
            crossAxisMax = Math.max(tmp0, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableWidth === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'kotlin.math.max' call
        var a_1 = availableWidth - fixedSpace | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = Math.max(a_1, 0) / totalWeight;
        tmp = roundToInt(this_0);
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.l() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.m(index_0);
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            var tmp0_0 = crossAxisMax;
            var tmp_0;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              tmp_0 = roundToInt(this_1);
            } else {
              tmp_0 = 2147483647;
            }
            var w = tmp_0;
            // Inline function 'kotlin.math.max' call
            var b_0 = item_0.z6n(w);
            crossAxisMax = Math.max(tmp0_0, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).wal = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.n()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = measurables.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.m(index);
          var weight = get_weight(get_rowColumnParentData_0(item));
          var size = item.z6n(availableWidth);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            var tmp0 = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_0 = size / weight;
            // Inline function 'kotlin.math.max' call
            var b = roundToInt(this_0);
            weightUnitSpace = Math.max(tmp0, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      tmp$ret$0 = (roundToInt(this_1) + fixedSpace | 0) + imul(measurables.l() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).qaq = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.n()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = measurables.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.m(index);
          var weight = get_weight(get_rowColumnParentData_0(item));
          var size = item.x6n(availableHeight);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            var tmp0 = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_0 = size / weight;
            // Inline function 'kotlin.math.max' call
            var b = roundToInt(this_0);
            weightUnitSpace = Math.max(tmp0, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      tmp$ret$0 = (roundToInt(this_1) + fixedSpace | 0) + imul(measurables.l() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).xal = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.n()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.l() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableHeight);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = measurables.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.m(index);
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableHeight === 2147483647 ? 2147483647 : availableHeight - fixedSpace | 0;
            var w = 2147483647;
            // Inline function 'kotlin.math.min' call
            var a_0 = item.b6o(w);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            var tmp0 = crossAxisMax;
            // Inline function 'kotlin.math.max' call
            var b = item.x6n(mainAxisSpace);
            crossAxisMax = Math.max(tmp0, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableHeight === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'kotlin.math.max' call
        var a_1 = availableHeight - fixedSpace | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = Math.max(a_1, 0) / totalWeight;
        tmp = roundToInt(this_0);
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.l() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.m(index_0);
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            var tmp0_0 = crossAxisMax;
            var tmp_0;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              tmp_0 = roundToInt(this_1);
            } else {
              tmp_0 = 2147483647;
            }
            var h = tmp_0;
            // Inline function 'kotlin.math.max' call
            var b_0 = item_0.x6n(h);
            crossAxisMax = Math.max(tmp0_0, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).raq = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.n()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.l() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableWidth);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = measurables.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.m(index);
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableWidth === 2147483647 ? 2147483647 : availableWidth - fixedSpace | 0;
            var h = 2147483647;
            // Inline function 'kotlin.math.min' call
            var a_0 = item.x6n(h);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            var tmp0 = crossAxisMax;
            // Inline function 'kotlin.math.max' call
            var b = item.b6o(mainAxisSpace);
            crossAxisMax = Math.max(tmp0, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableWidth === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'kotlin.math.max' call
        var a_1 = availableWidth - fixedSpace | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = Math.max(a_1, 0) / totalWeight;
        tmp = roundToInt(this_0);
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.l() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.m(index_0);
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            var tmp0_0 = crossAxisMax;
            var tmp_0;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              tmp_0 = roundToInt(this_1);
            } else {
              tmp_0 = 2147483647;
            }
            var w = tmp_0;
            // Inline function 'kotlin.math.max' call
            var b_0 = item_0.b6o(w);
            crossAxisMax = Math.max(tmp0_0, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).yal = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.n()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = measurables.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.m(index);
          var weight = get_weight(get_rowColumnParentData_0(item));
          var size = item.b6o(availableWidth);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            var tmp0 = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_0 = size / weight;
            // Inline function 'kotlin.math.max' call
            var b = roundToInt(this_0);
            weightUnitSpace = Math.max(tmp0, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      tmp$ret$0 = (roundToInt(this_1) + fixedSpace | 0) + imul(measurables.l() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  var IntrinsicMeasureBlocks_instance;
  function IntrinsicMeasureBlocks_getInstance() {
    return IntrinsicMeasureBlocks_instance;
  }
  function LayoutWeightElement(weight, fill) {
    ModifierNodeElement.call(this);
    this.taq_1 = weight;
    this.uaq_1 = fill;
  }
  protoOf(LayoutWeightElement).q2r = function () {
    return new LayoutWeightNode(this.taq_1, this.uaq_1);
  };
  protoOf(LayoutWeightElement).vaq = function (node) {
    node.kar_1 = this.taq_1;
    node.lar_1 = this.uaq_1;
  };
  protoOf(LayoutWeightElement).m6i = function (node) {
    return this.vaq(node instanceof LayoutWeightNode ? node : THROW_CCE());
  };
  protoOf(LayoutWeightElement).hashCode = function () {
    var result = getNumberHashCode(this.taq_1);
    result = imul(31, result) + getBooleanHashCode(this.uaq_1) | 0;
    return result;
  };
  protoOf(LayoutWeightElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof LayoutWeightElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return this.taq_1 === otherModifier.taq_1 && this.uaq_1 === otherModifier.uaq_1;
  };
  function LayoutWeightNode(weight, fill) {
    Node.call(this);
    this.kar_1 = weight;
    this.lar_1 = fill;
  }
  protoOf(LayoutWeightNode).z7w = function (_this__u8e3s4, parentData) {
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    // Inline function 'kotlin.also' call
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    this_0.ial_1 = this.kar_1;
    this_0.jal_1 = this.lar_1;
    return this_0;
  };
  function get_weight(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.ial_1;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  }
  function get_rowColumnParentData_0(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp = _this__u8e3s4.h7v();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function get_isRelative(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp0_safe_receiver = get_crossAxisAlignment(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.mar();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function get_fill(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.jal_1;
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_crossAxisAlignment(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    return _this__u8e3s4 == null ? null : _this__u8e3s4.kal_1;
  }
  var properties_initialized_RowColumnImpl_kt_57qerk;
  function _init_properties_RowColumnImpl_kt__c7pbaa() {
    if (!properties_initialized_RowColumnImpl_kt_57qerk) {
      properties_initialized_RowColumnImpl_kt_57qerk = true;
      androidx_compose_foundation_layout_CrossAxisAlignment$stable = 0;
      androidx_compose_foundation_layout_IntrinsicMeasureBlocks$stable = 0;
      androidx_compose_foundation_layout_LayoutWeightElement$stable = 0;
      androidx_compose_foundation_layout_LayoutWeightNode$stable = 8;
      androidx_compose_foundation_layout_WithAlignmentLineBlockElement$stable = 0;
      androidx_compose_foundation_layout_WithAlignmentLineElement$stable = 0;
      androidx_compose_foundation_layout_SiblingsAlignedNode_WithAlignmentLineBlockNode$stable = 8;
      androidx_compose_foundation_layout_SiblingsAlignedNode_WithAlignmentLineNode$stable = 8;
      androidx_compose_foundation_layout_SiblingsAlignedNode$stable = androidx_compose_ui_Modifier_Node$stableprop_getter();
      androidx_compose_foundation_layout_HorizontalAlignElement$stable = 0;
      androidx_compose_foundation_layout_HorizontalAlignNode$stable = 8;
      androidx_compose_foundation_layout_VerticalAlignElement$stable = 0;
      androidx_compose_foundation_layout_VerticalAlignNode$stable = 8;
      androidx_compose_foundation_layout_RowColumnParentData$stable = 8;
      androidx_compose_foundation_layout_AlignmentLineProvider_Block$stable = 0;
      androidx_compose_foundation_layout_AlignmentLineProvider_Value$stable = 0;
      androidx_compose_foundation_layout_AlignmentLineProvider$stable = 0;
    }
  }
  function RowColumnMeasurePolicy() {
  }
  function measure(_this__u8e3s4, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, arrangementSpacingInt, measureScope, measurables, placeables, startIndex, endIndex, crossAxisOffset, currentLineIndex) {
    crossAxisOffset = crossAxisOffset === VOID ? null : crossAxisOffset;
    currentLineIndex = currentLineIndex === VOID ? 0 : currentLineIndex;
    var arrangementSpacingPx = fromInt(arrangementSpacingInt);
    var totalWeight = 0.0;
    var fixedSpace = 0;
    var crossAxisSpace = 0;
    var weightChildrenCount = 0;
    var anyAlignBy = false;
    var subSize = endIndex - startIndex | 0;
    var childrenMainAxisSize = new Int32Array(subSize);
    var beforeCrossAxisAlignmentLine = 0;
    var afterCrossAxisAlignmentLine = 0;
    var spaceAfterLastNoWeight = 0;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = measurables.m(i);
        var parentData = get_rowColumnParentData_0(child);
        var weight = get_weight(parentData);
        anyAlignBy = anyAlignBy || get_isRelative(parentData);
        if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          weightChildrenCount = weightChildrenCount + 1 | 0;
        } else {
          var tmp;
          if (crossAxisMax === 2147483647) {
            tmp = null;
          } else {
            var tmp1_safe_receiver = parentData == null ? null : parentData.lal_1;
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_0 = tmp1_safe_receiver.nar_1 * crossAxisMax;
              tmp_0 = roundToInt(this_0);
            }
            tmp = tmp_0;
          }
          var crossAxisDesiredSize = tmp;
          var remaining = mainAxisMax - fixedSpace | 0;
          var tmp2_elvis_lhs = placeables[i];
          var tmp_1;
          if (tmp2_elvis_lhs == null) {
            var tmp_2 = crossAxisDesiredSize == null ? 0 : crossAxisDesiredSize;
            var tmp_3;
            if (mainAxisMax === 2147483647) {
              tmp_3 = 2147483647;
            } else {
              // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
              tmp_3 = remaining < 0 ? 0 : remaining;
            }
            var tmp_4 = tmp_3;
            tmp_1 = child.n6n(_this__u8e3s4.ual(0, tmp_2, tmp_4, crossAxisDesiredSize == null ? crossAxisMax : crossAxisDesiredSize));
          } else {
            tmp_1 = tmp2_elvis_lhs;
          }
          var placeable = tmp_1;
          var placeableMainAxisSize = _this__u8e3s4.pal(placeable);
          var placeableCrossAxisSize = _this__u8e3s4.qal(placeable);
          childrenMainAxisSize[i - startIndex | 0] = placeableMainAxisSize;
          // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
          var this_1 = remaining - placeableMainAxisSize | 0;
          // Inline function 'kotlin.math.min' call
          var b = this_1 < 0 ? 0 : this_1;
          spaceAfterLastNoWeight = Math.min(arrangementSpacingInt, b);
          fixedSpace = fixedSpace + (placeableMainAxisSize + spaceAfterLastNoWeight | 0) | 0;
          // Inline function 'kotlin.math.max' call
          var a = crossAxisSpace;
          crossAxisSpace = Math.max(a, placeableCrossAxisSize);
          placeables[i] = placeable;
        }
      }
       while (inductionVariable < endIndex);
    var weightedSpace = 0;
    if (weightChildrenCount === 0) {
      fixedSpace = fixedSpace - spaceAfterLastNoWeight | 0;
    } else {
      var tmp_5;
      if (!(mainAxisMax === 2147483647)) {
        tmp_5 = mainAxisMax;
      } else {
        tmp_5 = mainAxisMin;
      }
      var targetSpace = tmp_5;
      // Inline function 'kotlin.Long.times' call
      var other = weightChildrenCount - 1 | 0;
      var arrangementSpacingTotal = multiply(arrangementSpacingPx, fromInt(other));
      var tmp0 = subtract(numberToLong(targetSpace - fixedSpace | 0), arrangementSpacingTotal);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var minimumValue = new Long(0, 0);
      var remainingToTarget = compare(tmp0, minimumValue) < 0 ? minimumValue : tmp0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = totalWeight;
      var weightUnitSpace = toNumber(remainingToTarget) / other_0;
      var remainder = remainingToTarget;
      var inductionVariable_0 = startIndex;
      if (inductionVariable_0 < endIndex)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var measurable = measurables.m(i_0);
          var itemWeight = get_weight(get_rowColumnParentData_0(measurable));
          var weightedSize = weightUnitSpace * itemWeight;
          var tmp0_0 = remainder;
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          // Inline function 'kotlin.Long.minus' call
          var other_1 = roundToInt(weightedSize);
          remainder = subtract(tmp0_0, fromInt(other_1));
        }
         while (inductionVariable_0 < endIndex);
      var inductionVariable_1 = startIndex;
      if (inductionVariable_1 < endIndex)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (placeables[i_1] == null) {
            var child_0 = measurables.m(i_1);
            var parentData_0 = get_rowColumnParentData_0(child_0);
            var weight_0 = get_weight(parentData_0);
            var tmp_6;
            if (crossAxisMax === 2147483647) {
              tmp_6 = null;
            } else {
              var tmp6_safe_receiver = parentData_0 == null ? null : parentData_0.lal_1;
              var tmp_7;
              if (tmp6_safe_receiver == null) {
                tmp_7 = null;
              } else {
                // Inline function 'kotlin.let' call
                // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
                // Inline function 'kotlin.math.roundToInt' call
                var this_2 = tmp6_safe_receiver.nar_1 * crossAxisMax;
                tmp_7 = roundToInt(this_2);
              }
              tmp_6 = tmp_7;
            }
            var crossAxisDesiredSize_0 = tmp_6;
            // Inline function 'androidx.compose.foundation.layout.internal.checkPrecondition' call
            if (!(weight_0 > 0)) {
              var tmp$ret$18 = 'All weights <= 0 should have placeables';
              throwIllegalStateException(tmp$ret$18);
            }
            var remainderUnit = get_sign(remainder);
            // Inline function 'kotlin.Long.minus' call
            var this_3 = remainder;
            remainder = subtract(this_3, fromInt(remainderUnit));
            var weightedSize_0 = weightUnitSpace * weight_0;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            // Inline function 'kotlin.math.max' call
            var b_0 = roundToInt(weightedSize_0) + remainderUnit | 0;
            var childMainAxisSize = Math.max(0, b_0);
            var tmp_8;
            if (get_fill(parentData_0) && !(childMainAxisSize === 2147483647)) {
              tmp_8 = childMainAxisSize;
            } else {
              tmp_8 = 0;
            }
            var tmp_9 = tmp_8;
            var tmp_10 = crossAxisDesiredSize_0 == null ? 0 : crossAxisDesiredSize_0;
            var childConstraints = _this__u8e3s4.tal(tmp_9, tmp_10, childMainAxisSize, crossAxisDesiredSize_0 == null ? crossAxisMax : crossAxisDesiredSize_0, true);
            var placeable_0 = child_0.n6n(childConstraints);
            var placeableMainAxisSize_0 = _this__u8e3s4.pal(placeable_0);
            var placeableCrossAxisSize_0 = _this__u8e3s4.qal(placeable_0);
            childrenMainAxisSize[i_1 - startIndex | 0] = placeableMainAxisSize_0;
            weightedSpace = weightedSpace + placeableMainAxisSize_0 | 0;
            // Inline function 'kotlin.math.max' call
            var a_0 = crossAxisSpace;
            crossAxisSpace = Math.max(a_0, placeableCrossAxisSize_0);
            placeables[i_1] = placeable_0;
          }
        }
         while (inductionVariable_1 < endIndex);
      var tmp0_1 = convertToInt(add(numberToLong(weightedSpace), arrangementSpacingTotal));
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue = mainAxisMax - fixedSpace | 0;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_4 = tmp0_1 < 0 ? 0 : tmp0_1;
      weightedSpace = this_4 > maximumValue ? maximumValue : this_4;
    }
    if (anyAlignBy) {
      var inductionVariable_2 = startIndex;
      if (inductionVariable_2 < endIndex)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var placeable_1 = placeables[i_2];
          var parentData_1 = get_rowColumnParentData(ensureNotNull(placeable_1));
          var tmp9_safe_receiver = get_crossAxisAlignment(parentData_1);
          var alignmentLinePosition = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.oar(placeable_1);
          if (alignmentLinePosition == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            var placeableCrossAxisSize_1 = _this__u8e3s4.qal(placeable_1);
            var tmp0_2 = beforeCrossAxisAlignmentLine;
            // Inline function 'kotlin.math.max' call
            var b_1 = !(alignmentLinePosition === -2147483648) ? alignmentLinePosition : 0;
            beforeCrossAxisAlignmentLine = Math.max(tmp0_2, b_1);
            var tmp0_3 = afterCrossAxisAlignmentLine;
            var tmp_11;
            if (!(alignmentLinePosition === -2147483648)) {
              tmp_11 = alignmentLinePosition;
            } else {
              tmp_11 = placeableCrossAxisSize_1;
            }
            // Inline function 'kotlin.math.max' call
            var b_2 = placeableCrossAxisSize_1 - tmp_11 | 0;
            afterCrossAxisAlignmentLine = Math.max(tmp0_3, b_2);
          }
        }
         while (inductionVariable_2 < endIndex);
    }
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_5 = fixedSpace + weightedSpace | 0;
    // Inline function 'kotlin.math.max' call
    var a_1 = this_5 < 0 ? 0 : this_5;
    var mainAxisLayoutSize = Math.max(a_1, mainAxisMin);
    var tmp0_4 = crossAxisSpace;
    // Inline function 'kotlin.comparisons.maxOf' call
    var c = beforeCrossAxisAlignmentLine + afterCrossAxisAlignmentLine | 0;
    var crossAxisLayoutSize = Math.max(tmp0_4, crossAxisMin, c);
    var mainAxisPositions = new Int32Array(subSize);
    _this__u8e3s4.ral(mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope);
    return _this__u8e3s4.sal(placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex);
  }
  function get_FillWholeMaxWidth() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxWidth;
  }
  var FillWholeMaxWidth;
  var FillWholeMaxHeight;
  function get_FillWholeMaxSize() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxSize;
  }
  var FillWholeMaxSize;
  var WrapContentWidthCenter;
  var WrapContentWidthStart;
  function get_WrapContentHeightCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentHeightCenter;
  }
  var WrapContentHeightCenter;
  function get_WrapContentHeightTop() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentHeightTop;
  }
  var WrapContentHeightTop;
  var WrapContentSizeCenter;
  var WrapContentSizeTopStart;
  function sizeIn(_this__u8e3s4, minWidth, minHeight, maxWidth, maxHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().t4n_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().t4n_1 : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_3().t4n_1 : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_3().t4n_1 : maxHeight;
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = sizeIn$lambda(minWidth, minHeight, maxWidth, maxHeight);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.y6b(new SizeElement(minWidth, minHeight, maxWidth, maxHeight, true, tmp$ret$0));
  }
  function size(_this__u8e3s4, size) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda(size);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.y6b(new SizeElement(size, size, size, size, true, tmp0_inspectorInfo));
  }
  function defaultMinSize(_this__u8e3s4, minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().t4n_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().t4n_1 : minHeight;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.y6b(new UnspecifiedConstraintsElement(minWidth, minHeight));
  }
  function fillMaxWidth(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.y6b(fraction === 1.0 ? get_FillWholeMaxWidth() : Companion_instance_1.par(fraction));
  }
  function height(_this__u8e3s4, height) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = height$lambda(height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.y6b(new SizeElement(VOID, height, VOID, height, true, tmp$ret$0));
  }
  function fillMaxSize(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.y6b(fraction === 1.0 ? get_FillWholeMaxSize() : Companion_instance_1.qar(fraction));
  }
  function wrapContentHeight(_this__u8e3s4, align, unbounded) {
    align = align === VOID ? Companion_getInstance().z6a_1 : align;
    unbounded = unbounded === VOID ? false : unbounded;
    _init_properties_Size_kt__jcru8v();
    var tmp;
    if (equals(align, Companion_getInstance().z6a_1) && !unbounded) {
      tmp = get_WrapContentHeightCenter();
    } else if (equals(align, Companion_getInstance().y6a_1) && !unbounded) {
      tmp = get_WrapContentHeightTop();
    } else {
      tmp = Companion_instance_2.rar(align, unbounded);
    }
    return _this__u8e3s4.y6b(tmp);
  }
  function heightIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance_3().t4n_1 : min;
    max = max === VOID ? Companion_getInstance_3().t4n_1 : max;
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = heightIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.y6b(new SizeElement(VOID, min, VOID, max, true, tmp$ret$0));
  }
  function size_0(_this__u8e3s4, width, height) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda_0(width, height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.y6b(new SizeElement(width, height, width, height, true, tmp0_inspectorInfo));
  }
  function requiredSizeIn(_this__u8e3s4, minWidth, minHeight, maxWidth, maxHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().t4n_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().t4n_1 : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_3().t4n_1 : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_3().t4n_1 : maxHeight;
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = requiredSizeIn$lambda(minWidth, minHeight, maxWidth, maxHeight);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.y6b(new SizeElement(minWidth, minHeight, maxWidth, maxHeight, false, tmp$ret$0));
  }
  function Companion() {
  }
  protoOf(Companion).par = function (fraction) {
    return new FillElement(Direction_Horizontal_getInstance(), fraction, 'fillMaxWidth');
  };
  protoOf(Companion).sar = function (fraction) {
    return new FillElement(Direction_Vertical_getInstance(), fraction, 'fillMaxHeight');
  };
  protoOf(Companion).qar = function (fraction) {
    return new FillElement(Direction_Both_getInstance(), fraction, 'fillMaxSize');
  };
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function FillElement(direction, fraction, inspectorName) {
    ModifierNodeElement.call(this);
    this.uar_1 = direction;
    this.var_1 = fraction;
    this.war_1 = inspectorName;
  }
  protoOf(FillElement).q2r = function () {
    return new FillNode(this.uar_1, this.var_1);
  };
  protoOf(FillElement).xar = function (node) {
    node.mas_1 = this.uar_1;
    node.nas_1 = this.var_1;
  };
  protoOf(FillElement).m6i = function (node) {
    return this.xar(node instanceof FillNode ? node : THROW_CCE());
  };
  protoOf(FillElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FillElement))
      return false;
    if (!this.uar_1.equals(other.uar_1))
      return false;
    if (!(this.var_1 === other.var_1))
      return false;
    return true;
  };
  protoOf(FillElement).hashCode = function () {
    var result = this.uar_1.hashCode();
    result = imul(31, result) + getNumberHashCode(this.var_1) | 0;
    return result;
  };
  function WrapContentElement$Companion$width$lambda($align) {
    return function (size, layoutDirection) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = size.q4o_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp$ret$1 = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntOffset' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val1 = $align.f6b(0, tmp$ret$1, layoutDirection);
      var tmp$ret$2 = bitwiseOr(shiftLeft(fromInt(val1), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
      var tmp$ret$3 = _IntOffset___init__impl__rq8h7b(tmp$ret$2);
      return new IntOffset(tmp$ret$3);
    };
  }
  function WrapContentElement$Companion$height$lambda($align) {
    return function (size, _unused_var__etf5q3) {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_0 = size.q4o_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp$ret$1 = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
      // Inline function 'androidx.compose.ui.unit.IntOffset' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = $align.h6b(0, tmp$ret$1);
      var tmp$ret$2 = bitwiseOr(shiftLeft(fromInt(0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$3 = _IntOffset___init__impl__rq8h7b(tmp$ret$2);
      return new IntOffset(tmp$ret$3);
    };
  }
  function WrapContentElement$Companion$size$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset($align.k6b(Companion_getInstance_4().p4o_1, size.q4o_1, layoutDirection));
    };
  }
  function Companion_0() {
  }
  protoOf(Companion_0).oas = function (align, unbounded) {
    var tmp = Direction_Horizontal_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$width$lambda(align), align, 'wrapContentWidth');
  };
  protoOf(Companion_0).rar = function (align, unbounded) {
    var tmp = Direction_Vertical_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$height$lambda(align), align, 'wrapContentHeight');
  };
  protoOf(Companion_0).pas = function (align, unbounded) {
    var tmp = Direction_Both_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$size$lambda(align), align, 'wrapContentSize');
  };
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function WrapContentElement(direction, unbounded, alignmentCallback, align, inspectorName) {
    ModifierNodeElement.call(this);
    this.ras_1 = direction;
    this.sas_1 = unbounded;
    this.tas_1 = alignmentCallback;
    this.uas_1 = align;
    this.vas_1 = inspectorName;
  }
  protoOf(WrapContentElement).q2r = function () {
    return new WrapContentNode(this.ras_1, this.sas_1, this.tas_1);
  };
  protoOf(WrapContentElement).was = function (node) {
    node.lat_1 = this.ras_1;
    node.mat_1 = this.sas_1;
    node.nat_1 = this.tas_1;
  };
  protoOf(WrapContentElement).m6i = function (node) {
    return this.was(node instanceof WrapContentNode ? node : THROW_CCE());
  };
  protoOf(WrapContentElement).equals = function (other) {
    if (this === other)
      return true;
    if (other === null)
      return false;
    if (!getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof WrapContentElement))
      THROW_CCE();
    if (!this.ras_1.equals(other.ras_1))
      return false;
    if (!(this.sas_1 === other.sas_1))
      return false;
    if (!equals(this.uas_1, other.uas_1))
      return false;
    return true;
  };
  protoOf(WrapContentElement).hashCode = function () {
    var result = this.ras_1.hashCode();
    result = imul(31, result) + getBooleanHashCode(this.sas_1) | 0;
    result = imul(31, result) + hashCode(this.uas_1) | 0;
    return result;
  };
  function SizeElement(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().t4n_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().t4n_1 : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_3().t4n_1 : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_3().t4n_1 : maxHeight;
    ModifierNodeElement.call(this);
    this.pat_1 = minWidth;
    this.qat_1 = minHeight;
    this.rat_1 = maxWidth;
    this.sat_1 = maxHeight;
    this.tat_1 = enforceIncoming;
    this.uat_1 = inspectorInfo;
  }
  protoOf(SizeElement).q2r = function () {
    return new SizeNode(this.pat_1, this.qat_1, this.rat_1, this.sat_1, this.tat_1);
  };
  protoOf(SizeElement).vat = function (node) {
    node.kau_1 = this.pat_1;
    node.lau_1 = this.qat_1;
    node.mau_1 = this.rat_1;
    node.nau_1 = this.sat_1;
    node.oau_1 = this.tat_1;
  };
  protoOf(SizeElement).m6i = function (node) {
    return this.vat(node instanceof SizeNode ? node : THROW_CCE());
  };
  protoOf(SizeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SizeElement))
      return false;
    if (!equals(this.pat_1, other.pat_1))
      return false;
    if (!equals(this.qat_1, other.qat_1))
      return false;
    if (!equals(this.rat_1, other.rat_1))
      return false;
    if (!equals(this.sat_1, other.sat_1))
      return false;
    if (!(this.tat_1 === other.tat_1))
      return false;
    return true;
  };
  protoOf(SizeElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.pat_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.qat_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.rat_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.sat_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.tat_1) | 0;
    return result;
  };
  function UnspecifiedConstraintsElement(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().t4n_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().t4n_1 : minHeight;
    ModifierNodeElement.call(this);
    this.qau_1 = minWidth;
    this.rau_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsElement).q2r = function () {
    return new UnspecifiedConstraintsNode(this.qau_1, this.rau_1);
  };
  protoOf(UnspecifiedConstraintsElement).sau = function (node) {
    node.hav_1 = this.qau_1;
    node.iav_1 = this.rau_1;
  };
  protoOf(UnspecifiedConstraintsElement).m6i = function (node) {
    return this.sau(node instanceof UnspecifiedConstraintsNode ? node : THROW_CCE());
  };
  protoOf(UnspecifiedConstraintsElement).equals = function (other) {
    if (!(other instanceof UnspecifiedConstraintsElement))
      return false;
    return equals(this.qau_1, other.qau_1) && equals(this.rau_1, other.rau_1);
  };
  protoOf(UnspecifiedConstraintsElement).hashCode = function () {
    return imul(Dp__hashCode_impl_sxkrra(this.qau_1), 31) + Dp__hashCode_impl_sxkrra(this.rau_1) | 0;
  };
  function FillNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.l6n($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function FillNode(direction, fraction) {
    Node.call(this);
    this.mas_1 = direction;
    this.nas_1 = fraction;
  }
  protoOf(FillNode).m6n = function (_this__u8e3s4, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) && !this.mas_1.equals(Direction_Vertical_getInstance())) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = _Constraints___get_maxWidth__impl__uuyqc(constraints) * this.nas_1;
      var tmp0 = roundToInt(this_0);
      var tmp2 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue = _Constraints___get_maxWidth__impl__uuyqc(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_1 = tmp0 < tmp2 ? tmp2 : tmp0;
      var width = this_1 > maximumValue ? maximumValue : this_1;
      minWidth = width;
      maxWidth = width;
    } else {
      minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      maxWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var minHeight;
    var maxHeight;
    if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints) && !this.mas_1.equals(Direction_Horizontal_getInstance())) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints) * this.nas_1;
      var tmp0_0 = roundToInt(this_2);
      var tmp2_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = tmp0_0 < tmp2_0 ? tmp2_0 : tmp0_0;
      var height = this_3 > maximumValue_0 ? maximumValue_0 : this_3;
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var placeable = measurable.n6n(Constraints(minWidth, maxWidth, minHeight, maxHeight));
    var tmp = placeable.o6n_1;
    var tmp_0 = placeable.p6n_1;
    return _this__u8e3s4.t6n(tmp, tmp_0, VOID, FillNode$measure$lambda(placeable));
  };
  var Direction_Vertical_instance;
  var Direction_Horizontal_instance;
  var Direction_Both_instance;
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_Vertical_instance = new Direction('Vertical', 0);
    Direction_Horizontal_instance = new Direction('Horizontal', 1);
    Direction_Both_instance = new Direction('Both', 2);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function WrapContentNode$measure$lambda(this$0, $wrapperWidth, $placeable, $wrapperHeight, $this_measure) {
    return function ($this$layout) {
      var tmp = this$0.nat_1;
      var tmp0 = $wrapperWidth - $placeable.o6n_1 | 0;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = $wrapperHeight - $placeable.p6n_1 | 0;
      var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$1 = _IntSize___init__impl__emcjft(tmp$ret$0);
      var position = tmp(new IntSize(tmp$ret$1), $this_measure.w53()).d4o_1;
      $this$layout.k7z($placeable, position);
      return Unit_instance;
    };
  }
  function WrapContentNode(direction, unbounded, alignmentCallback) {
    Node.call(this);
    this.lat_1 = direction;
    this.mat_1 = unbounded;
    this.nat_1 = alignmentCallback;
  }
  protoOf(WrapContentNode).m6n = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_minWidth = !this.lat_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp1_minHeight = !this.lat_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp;
    if (!this.lat_1.equals(Direction_Vertical_getInstance()) && this.mat_1) {
      tmp = 2147483647;
    } else {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.lat_1.equals(Direction_Horizontal_getInstance()) && this.mat_1) {
      tmp_0 = 2147483647;
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.n6n(wrappedConstraints);
    var wrapperWidth = coerceIn(placeable.o6n_1, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
    var wrapperHeight = coerceIn(placeable.p6n_1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return _this__u8e3s4.t6n(wrapperWidth, wrapperHeight, VOID, WrapContentNode$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__u8e3s4));
  };
  function _get_targetConstraints__wn7g24($this, _this__u8e3s4) {
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = $this.mau_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_1 = _this__u8e3s4.b4n($this.mau_1);
      tmp = this_1 < 0 ? 0 : this_1;
    } else {
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_2 = $this.nau_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_2))) {
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_3 = _this__u8e3s4.b4n($this.nau_1);
      tmp_0 = this_3 < 0 ? 0 : this_3;
    } else {
      tmp_0 = 2147483647;
    }
    var maxHeight = tmp_0;
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_4 = $this.kau_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_4))) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_5 = _this__u8e3s4.b4n($this.kau_1);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_6 = this_5 < 0 ? 0 : this_5;
      // Inline function 'kotlin.let' call
      var it = this_6 > maxWidth ? maxWidth : this_6;
      tmp_1 = !(it === 2147483647) ? it : 0;
    } else {
      tmp_1 = 0;
    }
    var minWidth = tmp_1;
    var tmp_2;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_7 = $this.lau_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_7))) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_8 = _this__u8e3s4.b4n($this.lau_1);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_9 = this_8 < 0 ? 0 : this_8;
      // Inline function 'kotlin.let' call
      var it_0 = this_9 > maxHeight ? maxHeight : this_9;
      tmp_2 = !(it_0 === 2147483647) ? it_0 : 0;
    } else {
      tmp_2 = 0;
    }
    var minHeight = tmp_2;
    return Constraints(minWidth, maxWidth, minHeight, maxHeight);
  }
  function SizeNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.l6n($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function SizeNode(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().t4n_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().t4n_1 : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_3().t4n_1 : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_3().t4n_1 : maxHeight;
    Node.call(this);
    this.kau_1 = minWidth;
    this.lau_1 = minHeight;
    this.mau_1 = maxWidth;
    this.nau_1 = maxHeight;
    this.oau_1 = enforceIncoming;
  }
  protoOf(SizeNode).m6n = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.let' call
    var targetConstraints = _get_targetConstraints__wn7g24(this, _this__u8e3s4);
    var tmp;
    if (this.oau_1) {
      tmp = constrain(constraints, targetConstraints);
    } else {
      var tmp_0;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      var this_0 = this.kau_1;
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
        tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(targetConstraints);
      } else {
        var tmp0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
        var maximumValue = _Constraints___get_maxWidth__impl__uuyqc(targetConstraints);
        tmp_0 = tmp0 > maximumValue ? maximumValue : tmp0;
      }
      var resolvedMinWidth = tmp_0;
      var tmp_1;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      var this_1 = this.mau_1;
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_1))) {
        tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(targetConstraints);
      } else {
        var tmp0_0 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
        // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
        var minimumValue = _Constraints___get_minWidth__impl__hi9lfi(targetConstraints);
        tmp_1 = tmp0_0 < minimumValue ? minimumValue : tmp0_0;
      }
      var resolvedMaxWidth = tmp_1;
      var tmp_2;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      var this_2 = this.lau_1;
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_2))) {
        tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(targetConstraints);
      } else {
        var tmp0_1 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
        var maximumValue_0 = _Constraints___get_maxHeight__impl__dt3e8z(targetConstraints);
        tmp_2 = tmp0_1 > maximumValue_0 ? maximumValue_0 : tmp0_1;
      }
      var resolvedMinHeight = tmp_2;
      var tmp_3;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      var this_3 = this.nau_1;
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_3))) {
        tmp_3 = _Constraints___get_maxHeight__impl__dt3e8z(targetConstraints);
      } else {
        var tmp0_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
        // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
        var minimumValue_0 = _Constraints___get_minHeight__impl__ev4bgx(targetConstraints);
        tmp_3 = tmp0_2 < minimumValue_0 ? minimumValue_0 : tmp0_2;
      }
      var resolvedMaxHeight = tmp_3;
      tmp = Constraints(resolvedMinWidth, resolvedMaxWidth, resolvedMinHeight, resolvedMaxHeight);
    }
    var wrappedConstraints = tmp;
    var placeable = measurable.n6n(wrappedConstraints);
    var tmp_4 = placeable.o6n_1;
    var tmp_5 = placeable.p6n_1;
    return _this__u8e3s4.t6n(tmp_4, tmp_5, VOID, SizeNode$measure$lambda(placeable));
  };
  protoOf(SizeNode).u6n = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(this, _this__u8e3s4);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      var childHeight = this.oau_1 ? height : constrainHeight(constraints, height);
      tmp = constrainWidth(constraints, measurable.v6n(childHeight));
    }
    return tmp;
  };
  protoOf(SizeNode).y6n = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(this, _this__u8e3s4);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      var childWidth = this.oau_1 ? width : constrainWidth(constraints, width);
      tmp = constrainHeight(constraints, measurable.z6n(childWidth));
    }
    return tmp;
  };
  protoOf(SizeNode).w6n = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(this, _this__u8e3s4);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      var childHeight = this.oau_1 ? height : constrainHeight(constraints, height);
      tmp = constrainWidth(constraints, measurable.x6n(childHeight));
    }
    return tmp;
  };
  protoOf(SizeNode).a6o = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(this, _this__u8e3s4);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      var childWidth = this.oau_1 ? width : constrainWidth(constraints, width);
      tmp = constrainHeight(constraints, measurable.b6o(childWidth));
    }
    return tmp;
  };
  function UnspecifiedConstraintsNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.l6n($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function UnspecifiedConstraintsNode(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().t4n_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().t4n_1 : minHeight;
    Node.call(this);
    this.hav_1 = minWidth;
    this.iav_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsNode).m6n = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = this.hav_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints) === 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp0 = _this__u8e3s4.b4n(this.hav_1);
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue = _Constraints___get_maxWidth__impl__uuyqc(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_1 = tmp0 < 0 ? 0 : tmp0;
      tmp = this_1 > maximumValue ? maximumValue : this_1;
    } else {
      tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    }
    var tmp_1 = tmp;
    var tmp_2 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_3;
    var tmp_4;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_2 = this.iav_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_2))) {
      tmp_4 = _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      var tmp0_0 = _this__u8e3s4.b4n(this.iav_1);
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = tmp0_0 < 0 ? 0 : tmp0_0;
      tmp_3 = this_3 > maximumValue_0 ? maximumValue_0 : this_3;
    } else {
      tmp_3 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    }
    var wrappedConstraints = Constraints(tmp_1, tmp_2, tmp_3, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    var placeable = measurable.n6n(wrappedConstraints);
    var tmp_5 = placeable.o6n_1;
    var tmp_6 = placeable.p6n_1;
    return _this__u8e3s4.t6n(tmp_5, tmp_6, VOID, UnspecifiedConstraintsNode$measure$lambda(placeable));
  };
  protoOf(UnspecifiedConstraintsNode).u6n = function (_this__u8e3s4, measurable, height) {
    var tmp0 = measurable.v6n(height);
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = this.hav_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp = _this__u8e3s4.b4n(this.hav_1);
    } else {
      tmp = 0;
    }
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = tmp;
    return tmp0 < minimumValue ? minimumValue : tmp0;
  };
  protoOf(UnspecifiedConstraintsNode).w6n = function (_this__u8e3s4, measurable, height) {
    var tmp0 = measurable.x6n(height);
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = this.hav_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp = _this__u8e3s4.b4n(this.hav_1);
    } else {
      tmp = 0;
    }
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = tmp;
    return tmp0 < minimumValue ? minimumValue : tmp0;
  };
  protoOf(UnspecifiedConstraintsNode).y6n = function (_this__u8e3s4, measurable, width) {
    var tmp0 = measurable.z6n(width);
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = this.iav_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp = _this__u8e3s4.b4n(this.iav_1);
    } else {
      tmp = 0;
    }
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = tmp;
    return tmp0 < minimumValue ? minimumValue : tmp0;
  };
  protoOf(UnspecifiedConstraintsNode).a6o = function (_this__u8e3s4, measurable, width) {
    var tmp0 = measurable.b6o(width);
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = this.iav_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp = _this__u8e3s4.b4n(this.iav_1);
    } else {
      tmp = 0;
    }
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = tmp;
    return tmp0 < minimumValue ? minimumValue : tmp0;
  };
  function width_0(_this__u8e3s4, width) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = width$lambda_0(width);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.y6b(new SizeElement(width, VOID, width, VOID, true, tmp$ret$0));
  }
  function sizeIn$lambda($minWidth, $minHeight, $maxWidth, $maxHeight) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.gak_1 = 'sizeIn';
      _this__u8e3s4.iak_1.lan('minWidth', new Dp($minWidth));
      _this__u8e3s4.iak_1.lan('minHeight', new Dp($minHeight));
      _this__u8e3s4.iak_1.lan('maxWidth', new Dp($maxWidth));
      _this__u8e3s4.iak_1.lan('maxHeight', new Dp($maxHeight));
      return Unit_instance;
    };
  }
  function size$lambda($size) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.gak_1 = 'size';
      _this__u8e3s4.hak_1 = new Dp($size);
      return Unit_instance;
    };
  }
  function height$lambda($height) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.gak_1 = 'height';
      _this__u8e3s4.hak_1 = new Dp($height);
      return Unit_instance;
    };
  }
  function heightIn$lambda($min, $max) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.gak_1 = 'heightIn';
      _this__u8e3s4.iak_1.lan('min', new Dp($min));
      _this__u8e3s4.iak_1.lan('max', new Dp($max));
      return Unit_instance;
    };
  }
  function size$lambda_0($width, $height) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.gak_1 = 'size';
      _this__u8e3s4.iak_1.lan('width', new Dp($width));
      _this__u8e3s4.iak_1.lan('height', new Dp($height));
      return Unit_instance;
    };
  }
  function requiredSizeIn$lambda($minWidth, $minHeight, $maxWidth, $maxHeight) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.gak_1 = 'requiredSizeIn';
      _this__u8e3s4.iak_1.lan('minWidth', new Dp($minWidth));
      _this__u8e3s4.iak_1.lan('minHeight', new Dp($minHeight));
      _this__u8e3s4.iak_1.lan('maxWidth', new Dp($maxWidth));
      _this__u8e3s4.iak_1.lan('maxHeight', new Dp($maxHeight));
      return Unit_instance;
    };
  }
  function width$lambda_0($width) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.gak_1 = 'width';
      _this__u8e3s4.hak_1 = new Dp($width);
      return Unit_instance;
    };
  }
  function Direction_Vertical_getInstance() {
    Direction_initEntries();
    return Direction_Vertical_instance;
  }
  function Direction_Horizontal_getInstance() {
    Direction_initEntries();
    return Direction_Horizontal_instance;
  }
  function Direction_Both_getInstance() {
    Direction_initEntries();
    return Direction_Both_instance;
  }
  var properties_initialized_Size_kt_x7rk2r;
  function _init_properties_Size_kt__jcru8v() {
    if (!properties_initialized_Size_kt_x7rk2r) {
      properties_initialized_Size_kt_x7rk2r = true;
      FillWholeMaxWidth = Companion_instance_1.par(1.0);
      FillWholeMaxHeight = Companion_instance_1.sar(1.0);
      FillWholeMaxSize = Companion_instance_1.qar(1.0);
      WrapContentWidthCenter = Companion_instance_2.oas(Companion_getInstance().c6b_1, false);
      WrapContentWidthStart = Companion_instance_2.oas(Companion_getInstance().b6b_1, false);
      WrapContentHeightCenter = Companion_instance_2.rar(Companion_getInstance().z6a_1, false);
      WrapContentHeightTop = Companion_instance_2.rar(Companion_getInstance().y6a_1, false);
      WrapContentSizeCenter = Companion_instance_2.pas(Companion_getInstance().t6a_1, false);
      WrapContentSizeTopStart = Companion_instance_2.pas(Companion_getInstance().p6a_1, false);
    }
  }
  function Spacer(modifier, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -72882467, 'C(Spacer)38@1430L64:Spacer.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-72882467, $changed, -1, 'androidx.compose.foundation.layout.Spacer (Spacer.kt:37)');
    }
    // Inline function 'androidx.compose.ui.layout.Layout' call
    var modifier_0 = modifier;
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 544976794, 'CC(Layout)P(1)122@4875L27,125@5041L333:Layout.kt#80mrfh');
    if (!((0 & 1) === 0))
      modifier_0 = Companion_instance;
    var compositeKeyHash = get_currentCompositeKeyHashCode($composer_1, 0).hashCode();
    var materialized = materialize($composer_1, modifier_0);
    var localMap = $composer_1.s25();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
    var factory = Companion_getInstance_0().q87_1;
    var $composer_2 = $composer_1;
    sourceInformationMarkerStart($composer_2, 1405779621, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
    var tmp = $composer_2.j24();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.a25();
    if ($composer_2.k24()) {
      $composer_2.b25(factory);
    } else {
      $composer_2.c25();
    }
    var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, SpacerMeasurePolicy_instance, Companion_getInstance_0().v87_1);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_0().u87_1);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_0().s87_1);
    // Inline function 'androidx.compose.runtime.Updater.set' call
    var block = Companion_getInstance_0().y87_1;
    // Inline function 'kotlin.with' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
    if ($this$with.k24() || !equals($this$with.h25(), compositeKeyHash)) {
      $this$with.i25(compositeKeyHash);
      _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).g25(compositeKeyHash, block);
    }
    $composer_2.d25();
    sourceInformationMarkerEnd($composer_2);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function SpacerMeasurePolicy$measure$lambda($this$layout) {
    return Unit_instance;
  }
  function SpacerMeasurePolicy() {
  }
  protoOf(SpacerMeasurePolicy).l7y = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.with' call
    var width = _Constraints___get_hasFixedWidth__impl__4p17wc(constraints) ? _Constraints___get_maxWidth__impl__uuyqc(constraints) : 0;
    var height = _Constraints___get_hasFixedHeight__impl__y56fxx(constraints) ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) : 0;
    return _this__u8e3s4.t6n(width, height, VOID, SpacerMeasurePolicy$measure$lambda);
  };
  var SpacerMeasurePolicy_instance;
  function SpacerMeasurePolicy_getInstance() {
    return SpacerMeasurePolicy_instance;
  }
  var EmptyWindowInsets;
  var androidx_compose_foundation_layout_MutableWindowInsets$stable;
  var androidx_compose_foundation_layout_ValueInsets$stable;
  var androidx_compose_foundation_layout_InsetsValues$stable;
  function Companion_1() {
  }
  var Companion_instance_3;
  function Companion_getInstance_7() {
    return Companion_instance_3;
  }
  function FixedIntInsets(leftVal, topVal, rightVal, bottomVal) {
    this.jav_1 = leftVal;
    this.kav_1 = topVal;
    this.lav_1 = rightVal;
    this.mav_1 = bottomVal;
  }
  protoOf(FixedIntInsets).nav = function (density, layoutDirection) {
    return this.jav_1;
  };
  protoOf(FixedIntInsets).oav = function (density) {
    return this.kav_1;
  };
  protoOf(FixedIntInsets).pav = function (density, layoutDirection) {
    return this.lav_1;
  };
  protoOf(FixedIntInsets).qav = function (density) {
    return this.mav_1;
  };
  protoOf(FixedIntInsets).toString = function () {
    return 'Insets(left=' + this.jav_1 + ', top=' + this.kav_1 + ', right=' + this.lav_1 + ', bottom=' + this.mav_1 + ')';
  };
  protoOf(FixedIntInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof FixedIntInsets)) {
      return false;
    }
    return this.jav_1 === other.jav_1 && this.kav_1 === other.kav_1 && this.lav_1 === other.lav_1 && this.mav_1 === other.mav_1;
  };
  protoOf(FixedIntInsets).hashCode = function () {
    var result = this.jav_1;
    result = imul(31, result) + this.kav_1 | 0;
    result = imul(31, result) + this.lav_1 | 0;
    result = imul(31, result) + this.mav_1 | 0;
    return result;
  };
  function WindowInsets(left, top, right, bottom) {
    left = left === VOID ? 0 : left;
    top = top === VOID ? 0 : top;
    right = right === VOID ? 0 : right;
    bottom = bottom === VOID ? 0 : bottom;
    _init_properties_WindowInsets_kt__lpu9pi();
    return new FixedIntInsets(left, top, right, bottom);
  }
  function exclude(_this__u8e3s4, insets) {
    _init_properties_WindowInsets_kt__lpu9pi();
    return new ExcludeInsets(_this__u8e3s4, insets);
  }
  function ExcludeInsets(included, excluded) {
    this.rav_1 = included;
    this.sav_1 = excluded;
  }
  protoOf(ExcludeInsets).nav = function (density, layoutDirection) {
    return coerceAtLeast(this.rav_1.nav(density, layoutDirection) - this.sav_1.nav(density, layoutDirection) | 0, 0);
  };
  protoOf(ExcludeInsets).oav = function (density) {
    return coerceAtLeast(this.rav_1.oav(density) - this.sav_1.oav(density) | 0, 0);
  };
  protoOf(ExcludeInsets).pav = function (density, layoutDirection) {
    return coerceAtLeast(this.rav_1.pav(density, layoutDirection) - this.sav_1.pav(density, layoutDirection) | 0, 0);
  };
  protoOf(ExcludeInsets).qav = function (density) {
    return coerceAtLeast(this.rav_1.qav(density) - this.sav_1.qav(density) | 0, 0);
  };
  protoOf(ExcludeInsets).toString = function () {
    return '(' + toString_0(this.rav_1) + ' - ' + toString_0(this.sav_1) + ')';
  };
  protoOf(ExcludeInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof ExcludeInsets)) {
      return false;
    }
    return equals(other.rav_1, this.rav_1) && equals(other.sav_1, this.sav_1);
  };
  protoOf(ExcludeInsets).hashCode = function () {
    return imul(31, hashCode(this.rav_1)) + hashCode(this.sav_1) | 0;
  };
  function asPaddingValues(_this__u8e3s4, density) {
    _init_properties_WindowInsets_kt__lpu9pi();
    return new InsetsPaddingValues(_this__u8e3s4, density);
  }
  function InsetsPaddingValues(insets, density) {
    this.tav_1 = insets;
    this.uav_1 = density;
  }
  protoOf(InsetsPaddingValues).kao = function (layoutDirection) {
    // Inline function 'kotlin.with' call
    var $this$with = this.uav_1;
    return $this$with.h4n(this.tav_1.nav($this$with, layoutDirection));
  };
  protoOf(InsetsPaddingValues).pao = function () {
    // Inline function 'kotlin.with' call
    var $this$with = this.uav_1;
    return $this$with.h4n(this.tav_1.oav($this$with));
  };
  protoOf(InsetsPaddingValues).jao = function (layoutDirection) {
    // Inline function 'kotlin.with' call
    var $this$with = this.uav_1;
    return $this$with.h4n(this.tav_1.pav($this$with, layoutDirection));
  };
  protoOf(InsetsPaddingValues).qao = function () {
    // Inline function 'kotlin.with' call
    var $this$with = this.uav_1;
    return $this$with.h4n(this.tav_1.qav($this$with));
  };
  protoOf(InsetsPaddingValues).toString = function () {
    return 'InsetsPaddingValues(insets=' + toString_0(this.tav_1) + ', density=' + toString_0(this.uav_1) + ')';
  };
  protoOf(InsetsPaddingValues).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof InsetsPaddingValues)) {
      return false;
    }
    return equals(this.tav_1, other.tav_1) && equals(this.uav_1, other.uav_1);
  };
  protoOf(InsetsPaddingValues).hashCode = function () {
    var result = hashCode(this.tav_1);
    result = imul(31, result) + hashCode(this.uav_1) | 0;
    return result;
  };
  var properties_initialized_WindowInsets_kt_2k4ux4;
  function _init_properties_WindowInsets_kt__lpu9pi() {
    if (!properties_initialized_WindowInsets_kt_2k4ux4) {
      properties_initialized_WindowInsets_kt_2k4ux4 = true;
      EmptyWindowInsets = new FixedIntInsets(0, 0, 0, 0);
      androidx_compose_foundation_layout_MutableWindowInsets$stable = 0;
      androidx_compose_foundation_layout_ValueInsets$stable = 0;
      androidx_compose_foundation_layout_InsetsValues$stable = 0;
    }
  }
  function get_ModifierLocalConsumedWindowInsets() {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    return ModifierLocalConsumedWindowInsets;
  }
  var ModifierLocalConsumedWindowInsets;
  var androidx_compose_foundation_layout_InsetsPaddingModifier$stable;
  function onConsumedWindowInsetsChanged(_this__u8e3s4, block) {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = onConsumedWindowInsetsChanged$lambda(block);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp_0 = tmp;
    return composed(_this__u8e3s4, tmp_0, onConsumedWindowInsetsChanged$lambda_0(block));
  }
  function ConsumedInsetsModifier(block) {
    this.vav_1 = block;
    this.wav_1 = null;
  }
  protoOf(ConsumedInsetsModifier).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof ConsumedInsetsModifier)) {
      return false;
    }
    return other.vav_1 === this.vav_1;
  };
  protoOf(ConsumedInsetsModifier).hashCode = function () {
    return hashCode(this.vav_1);
  };
  protoOf(ConsumedInsetsModifier).a88 = function (scope) {
    // Inline function 'kotlin.with' call
    var consumed = scope.l6x(get_ModifierLocalConsumedWindowInsets());
    if (!equals(consumed, this.wav_1)) {
      this.wav_1 = consumed;
      this.vav_1(consumed);
    }
    return Unit_instance;
  };
  function ModifierLocalConsumedWindowInsets$lambda() {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    return WindowInsets(0, 0, 0, 0);
  }
  function onConsumedWindowInsetsChanged$lambda($block) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.gak_1 = 'onConsumedWindowInsetsChanged';
      _this__u8e3s4.iak_1.lan('block', $block);
      return Unit_instance;
    };
  }
  function onConsumedWindowInsetsChanged$lambda_0($block) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.p24(-1608161351);
      sourceInformation($composer_0, 'C141@5833L49:WindowInsetsPadding.kt#2w3rfo');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1608161351, $changed, -1, 'androidx.compose.foundation.layout.onConsumedWindowInsetsChanged.<anonymous> (WindowInsetsPadding.kt:141)');
        tmp = Unit_instance;
      }
      sourceInformationMarkerStart($composer_0, 745168618, 'CC(remember):WindowInsetsPadding.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.j25($block);
      // Inline function 'kotlin.let' call
      var it = $composer_0.h25();
      var tmp_0;
      if (invalid || it === Companion_getInstance_1().i24_1) {
        var value = new ConsumedInsetsModifier($block);
        $composer_0.i25(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      $composer_0.q24();
      return tmp1_group;
    };
  }
  var properties_initialized_WindowInsetsPadding_kt_k80ef9;
  function _init_properties_WindowInsetsPadding_kt__2qyozr() {
    if (!properties_initialized_WindowInsetsPadding_kt_k80ef9) {
      properties_initialized_WindowInsetsPadding_kt_k80ef9 = true;
      ModifierLocalConsumedWindowInsets = modifierLocalOf(ModifierLocalConsumedWindowInsets$lambda);
      androidx_compose_foundation_layout_InsetsPaddingModifier$stable = 0;
    }
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function get_ZeroInsets() {
    _init_properties_WindowInsets_notMobile_kt__cg4w4z();
    return ZeroInsets;
  }
  var ZeroInsets;
  function get_safeDrawing(_this__u8e3s4, $composer, $changed) {
    _init_properties_WindowInsets_notMobile_kt__cg4w4z();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1497380982, 'C(<get-safeDrawing>):WindowInsets.notMobile.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(1497380982, $changed, -1, 'androidx.compose.foundation.layout.<get-safeDrawing> (WindowInsets.notMobile.kt:53)');
    }
    var tmp0 = get_ZeroInsets();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function get_systemBars(_this__u8e3s4, $composer, $changed) {
    _init_properties_WindowInsets_notMobile_kt__cg4w4z();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 446501030, 'C(<get-systemBars>):WindowInsets.notMobile.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(446501030, $changed, -1, 'androidx.compose.foundation.layout.<get-systemBars> (WindowInsets.notMobile.kt:41)');
    }
    var tmp0 = get_ZeroInsets();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  var properties_initialized_WindowInsets_notMobile_kt_v7y701;
  function _init_properties_WindowInsets_notMobile_kt__cg4w4z() {
    if (!properties_initialized_WindowInsets_notMobile_kt_v7y701) {
      properties_initialized_WindowInsets_notMobile_kt_v7y701 = true;
      ZeroInsets = WindowInsets(0, 0, 0, 0);
    }
  }
  //region block: post-declaration
  protoOf(Arrangement$Start$1).eaj = get_spacing;
  protoOf(Arrangement$End$1).eaj = get_spacing;
  protoOf(Arrangement$Top$1).eaj = get_spacing_0;
  protoOf(Arrangement$Bottom$1).eaj = get_spacing_0;
  protoOf(BoxMeasurePolicy).m7y = minIntrinsicWidth;
  protoOf(BoxMeasurePolicy).n7y = minIntrinsicHeight;
  protoOf(BoxMeasurePolicy).o7y = maxIntrinsicWidth;
  protoOf(BoxMeasurePolicy).p7y = maxIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).m7y = minIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).n7y = minIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).o7y = maxIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).p7y = maxIntrinsicHeight;
  protoOf(ColumnMeasurePolicy).ual = createConstraints$default;
  protoOf(ColumnScopeInstance).hal = weight$default;
  protoOf(OffsetPxNode).u6n = minIntrinsicWidth_0;
  protoOf(OffsetPxNode).y6n = minIntrinsicHeight_0;
  protoOf(OffsetPxNode).w6n = maxIntrinsicWidth_0;
  protoOf(OffsetPxNode).a6o = maxIntrinsicHeight_0;
  protoOf(PaddingNode).u6n = minIntrinsicWidth_0;
  protoOf(PaddingNode).y6n = minIntrinsicHeight_0;
  protoOf(PaddingNode).w6n = maxIntrinsicWidth_0;
  protoOf(PaddingNode).a6o = maxIntrinsicHeight_0;
  protoOf(PaddingValuesModifier).u6n = minIntrinsicWidth_0;
  protoOf(PaddingValuesModifier).y6n = minIntrinsicHeight_0;
  protoOf(PaddingValuesModifier).w6n = maxIntrinsicWidth_0;
  protoOf(PaddingValuesModifier).a6o = maxIntrinsicHeight_0;
  protoOf(RowMeasurePolicy).ual = createConstraints$default;
  protoOf(RowScopeInstance).laq = weight$default_0;
  protoOf(FillNode).u6n = minIntrinsicWidth_0;
  protoOf(FillNode).y6n = minIntrinsicHeight_0;
  protoOf(FillNode).w6n = maxIntrinsicWidth_0;
  protoOf(FillNode).a6o = maxIntrinsicHeight_0;
  protoOf(WrapContentNode).u6n = minIntrinsicWidth_0;
  protoOf(WrapContentNode).y6n = minIntrinsicHeight_0;
  protoOf(WrapContentNode).w6n = maxIntrinsicWidth_0;
  protoOf(WrapContentNode).a6o = maxIntrinsicHeight_0;
  protoOf(SpacerMeasurePolicy).m7y = minIntrinsicWidth;
  protoOf(SpacerMeasurePolicy).n7y = minIntrinsicHeight;
  protoOf(SpacerMeasurePolicy).o7y = maxIntrinsicWidth;
  protoOf(SpacerMeasurePolicy).p7y = maxIntrinsicHeight;
  protoOf(ConsumedInsetsModifier).c6c = foldIn;
  protoOf(ConsumedInsetsModifier).d6c = all;
  protoOf(ConsumedInsetsModifier).y6b = then;
  //endregion
  //region block: init
  androidx_compose_foundation_layout_Arrangement_Absolute$stable = 0;
  androidx_compose_foundation_layout_Arrangement_SpacedAligned$stable = 0;
  androidx_compose_foundation_layout_Arrangement$stable = 0;
  BoxScopeInstance_instance = new BoxScopeInstance();
  ColumnScopeInstance_instance = new ColumnScopeInstance();
  androidx_compose_foundation_layout_ComposeFoundationLayoutFlags$stable = 8;
  androidx_compose_foundation_layout_ContextualFlowRowScopeImpl$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowColumnScopeImpl$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowRowOverflowScopeImpl$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowColumnOverflowScopeImpl$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowItemIterator$stable = 8;
  androidx_compose_foundation_layout_FlowLineInfo$stable = 8;
  androidx_compose_foundation_layout_FlowLayoutBuildingBlocks_WrapInfo$stable = 0;
  androidx_compose_foundation_layout_FlowLayoutBuildingBlocks_WrapEllipsisInfo$stable = 8;
  androidx_compose_foundation_layout_FlowLayoutBuildingBlocks$stable = 8;
  androidx_compose_foundation_layout_FlowRowOverflow$stable = 0;
  androidx_compose_foundation_layout_FlowColumnOverflow$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowRowOverflow$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowColumnOverflow$stable = 0;
  androidx_compose_foundation_layout_FlowLayoutOverflow$stable = 0;
  androidx_compose_foundation_layout_FlowLayoutOverflowState$stable = 8;
  androidx_compose_foundation_layout_PaddingValues_Absolute$stable = 0;
  androidx_compose_foundation_layout_PaddingValuesImpl$stable = 0;
  RowScopeInstance_instance = new RowScopeInstance();
  IntrinsicMeasureBlocks_instance = new IntrinsicMeasureBlocks();
  Companion_instance_1 = new Companion();
  Companion_instance_2 = new Companion_0();
  SpacerMeasurePolicy_instance = new SpacerMeasurePolicy();
  Companion_instance_3 = new Companion_1();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Box;
  _.$_$.b = PaddingValues_1;
  _.$_$.c = PaddingValues;
  _.$_$.d = PaddingValues_0;
  _.$_$.e = Spacer;
  _.$_$.f = WindowInsets;
  _.$_$.g = asPaddingValues;
  _.$_$.h = calculateEndPadding;
  _.$_$.i = calculateStartPadding;
  _.$_$.j = columnMeasurePolicy;
  _.$_$.k = defaultMinSize;
  _.$_$.l = exclude;
  _.$_$.m = fillMaxSize;
  _.$_$.n = fillMaxWidth;
  _.$_$.o = heightIn;
  _.$_$.p = height;
  _.$_$.q = maybeCachedBoxMeasurePolicy;
  _.$_$.r = offset_0;
  _.$_$.s = onConsumedWindowInsetsChanged;
  _.$_$.t = padding_2;
  _.$_$.u = padding_1;
  _.$_$.v = padding;
  _.$_$.w = padding_0;
  _.$_$.x = requiredSizeIn;
  _.$_$.y = rowMeasurePolicy;
  _.$_$.z = get_safeDrawing;
  _.$_$.a1 = sizeIn;
  _.$_$.b1 = size_0;
  _.$_$.c1 = size;
  _.$_$.d1 = get_systemBars;
  _.$_$.e1 = width;
  _.$_$.f1 = width_0;
  _.$_$.g1 = wrapContentHeight;
  _.$_$.h1 = IntrinsicSize_Max_getInstance;
  _.$_$.i1 = Arrangement_getInstance;
  _.$_$.j1 = BoxScopeInstance_instance;
  _.$_$.k1 = ColumnScopeInstance_instance;
  _.$_$.l1 = RowScopeInstance_instance;
  _.$_$.m1 = Companion_instance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-foundation-foundation-layout.js.map
