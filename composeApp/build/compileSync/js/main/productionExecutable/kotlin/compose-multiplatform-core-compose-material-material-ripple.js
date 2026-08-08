(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui.js', './androidx-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-animation-animation-core.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./androidx-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    globalThis['compose-multiplatform-core-compose-material-material-ripple'] = factory(typeof globalThis['compose-multiplatform-core-compose-material-material-ripple'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-material-material-ripple'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['androidx-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-util']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui, kotlin_androidx_collection_collection, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var CoroutineImpl = kotlin_kotlin.$_$.m7;
  var Unit_instance = kotlin_kotlin.$_$.b3;
  var protoOf = kotlin_kotlin.$_$.z9;
  var THROW_CCE = kotlin_kotlin.$_$.md;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var isInterface = kotlin_kotlin.$_$.q9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x6;
  var invalidateDraw = kotlin_org_jetbrains_compose_ui_ui.$_$.h5;
  var initMetadataForLambda = kotlin_kotlin.$_$.m9;
  var VOID = kotlin_kotlin.$_$.b;
  var MutableScatterMap = kotlin_androidx_collection_collection.$_$.n;
  var invert = kotlin_kotlin.$_$.c8;
  var shiftLeft = kotlin_kotlin.$_$.h8;
  var bitwiseAnd = kotlin_kotlin.$_$.t7;
  var Long = kotlin_kotlin.$_$.hd;
  var compare = kotlin_kotlin.$_$.w7;
  var shiftRight = kotlin_kotlin.$_$.j8;
  var equalsLong = kotlin_kotlin.$_$.a8;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b2;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l3;
  var initMetadataForClass = kotlin_kotlin.$_$.h9;
  var Interaction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h;
  var PressInteraction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m;
  var Cancel = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j;
  var Release = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l;
  var Press = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k;
  var equals = kotlin_kotlin.$_$.z8;
  var FunctionAdapter = kotlin_kotlin.$_$.m8;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var hashCode = kotlin_kotlin.$_$.g9;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.l8;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var MutableObjectList = kotlin_androidx_collection_collection.$_$.m;
  var requireDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.p5;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var isNaN_0 = kotlin_kotlin.$_$.yd;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.f4;
  var onPlaced = kotlin_org_jetbrains_compose_ui_ui.$_$.i4;
  var CompositionLocalConsumerModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.b4;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.g4;
  var LayoutAwareModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.k4;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var Cancel_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a;
  var Stop = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c;
  var Start = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b;
  var Unfocus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e;
  var Focus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d;
  var Exit = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g;
  var Enter = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f;
  var lastOrNull = kotlin_kotlin.$_$.p5;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var convertToInt = kotlin_kotlin.$_$.x7;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.u2;
  var floatFromBits = kotlin_kotlin.$_$.a9;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t3;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b1;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i;
  var KMutableProperty1 = kotlin_kotlin.$_$.ab;
  var getPropertyCallableRef = kotlin_kotlin.$_$.e9;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.j9;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var toRawBits = kotlin_kotlin.$_$.me;
  var fromInt = kotlin_kotlin.$_$.b8;
  var bitwiseOr = kotlin_kotlin.$_$.u7;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var ensureNotNull = kotlin_kotlin.$_$.wd;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var getNumberHashCode = kotlin_kotlin.$_$.d9;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(CommonRippleNode$addRipple$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(RippleNode, 'RippleNode', VOID, Node, [Node, CompositionLocalConsumerModifierNode, DrawModifierNode, LayoutAwareModifierNode]);
  initMetadataForClass(CommonRippleNode, 'CommonRippleNode', VOID, RippleNode);
  initMetadataForLambda(RippleNode$onAttach$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(RippleNode$onAttach$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(StateLayer$handleInteraction$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(StateLayer$handleInteraction$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(StateLayer, 'StateLayer');
  initMetadataForLambda(RippleAnimation$fadeIn$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeOut$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeOut$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($animateCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($fadeInCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($fadeOutCOROUTINE$, CoroutineImpl);
  initMetadataForClass(RippleAnimation, 'RippleAnimation', VOID, VOID, VOID, [0]);
  initMetadataForClass(RippleAlpha, 'RippleAlpha');
  //endregion
  var androidx_compose_material_ripple_CommonRipple$stable;
  var androidx_compose_material_ripple_CommonRippleNode$stable;
  function CommonRippleNode$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation) {
    this.tgd_1 = $rippleAnimation;
    this.ugd_1 = this$0;
    this.vgd_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CommonRippleNode$addRipple$slambda).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(CommonRippleNode$addRipple$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CommonRippleNode$addRipple$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 5;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 4;
            this.n8_1 = 2;
            suspendResult = this.tgd_1.ige(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o8_1 = 5;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            this.o8_1 = 5;
            this.ugd_1.igf_1.c2(this.vgd_1);
            invalidateDraw(this.ugd_1);
            return Unit_instance;
          case 4:
            this.o8_1 = 5;
            var t = this.q8_1;
            this.ugd_1.igf_1.c2(this.vgd_1);
            invalidateDraw(this.ugd_1);
            throw t;
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
  protoOf(CommonRippleNode$addRipple$slambda).r1n = function ($this$launch, completion) {
    var i = new CommonRippleNode$addRipple$slambda(this.tgd_1, this.ugd_1, this.vgd_1, completion);
    i.wgd_1 = $this$launch;
    return i;
  };
  function CommonRippleNode$addRipple$slambda_0($rippleAnimation, this$0, $interaction, resultContinuation) {
    var i = new CommonRippleNode$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CommonRippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    RippleNode.call(this, interactionSource, bounded, radius, color, rippleAlpha);
    this.igf_1 = new MutableScatterMap();
  }
  protoOf(CommonRippleNode).jgf = function (interaction, size, targetRadius) {
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_0 = this.igf_1;
    var k = this_0.yp_1;
    var v = this_0.zp_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.xp_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
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
                  ((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).kgf();
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
    var origin = this.agg_1 ? interaction.kdf_1 : null;
    var rippleAnimation = new RippleAnimation(origin, targetRadius, this.agg_1);
    this.igf_1.iq(interaction, rippleAnimation);
    var tmp_1 = this.w6c();
    launch(tmp_1, VOID, VOID, CommonRippleNode$addRipple$slambda_0(rippleAnimation, this, interaction, null));
    invalidateDraw(this);
  };
  protoOf(CommonRippleNode).kgg = function (interaction) {
    var tmp0_safe_receiver = this.igf_1.y1(interaction);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.kgf();
    }
  };
  protoOf(CommonRippleNode).lgg = function (_this__u8e3s4) {
    var alpha = this.dgg_1().pgg_1;
    if (!(alpha === 0.0)) {
      // Inline function 'androidx.collection.ScatterMap.forEach' call
      var this_0 = this.igf_1;
      var k = this_0.yp_1;
      var v = this_0.zp_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m = this_0.xp_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
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
                    // Inline function 'kotlin.with' call
                    ((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).rgg(_this__u8e3s4, Color__copy$default_impl_ectz3s(this.qgg(), alpha));
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
    }
  };
  protoOf(CommonRippleNode).d6d = function () {
    this.igf_1.e2();
  };
  function get_DefaultTweenSpec() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultTweenSpec;
  }
  var DefaultTweenSpec;
  var androidx_compose_material_ripple_Ripple$stable;
  var androidx_compose_material_ripple_RippleIndicationInstance$stable;
  var androidx_compose_material_ripple_RippleNode$stable;
  function createRippleModifierNode(interactionSource, bounded, radius, color, rippleAlpha) {
    _init_properties_Ripple_kt__d55ieo();
    return createPlatformRippleNode(interactionSource, bounded, radius, color, rippleAlpha);
  }
  function RippleNode$onAttach$slambda$slambda(this$0, $this_launch, resultContinuation) {
    this.agh_1 = this$0;
    this.bgh_1 = $this_launch;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleNode$onAttach$slambda$slambda).tbv = function (interaction, $completion) {
    var tmp = this.ubv(interaction, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(RippleNode$onAttach$slambda$slambda).f9 = function (p1, $completion) {
    return this.tbv((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleNode$onAttach$slambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
          var tmp0_subject = this.cgh_1;
          if (isInterface(tmp0_subject, PressInteraction)) {
            if (this.agh_1.igg_1) {
              handlePressInteraction(this.agh_1, this.cgh_1);
            } else {
              var tmp0 = this.agh_1.jgg_1;
              var element = this.cgh_1;
              tmp0.h(element);
            }
          } else {
            updateStateLayer(this.agh_1, this.cgh_1, this.bgh_1);
          }
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
  protoOf(RippleNode$onAttach$slambda$slambda).ubv = function (interaction, completion) {
    var i = new RippleNode$onAttach$slambda$slambda(this.agh_1, this.bgh_1, completion);
    i.cgh_1 = interaction;
    return i;
  };
  function RippleNode$onAttach$slambda$slambda_0(this$0, $this_launch, resultContinuation) {
    var i = new RippleNode$onAttach$slambda$slambda(this$0, $this_launch, resultContinuation);
    var l = function (interaction, $completion) {
      return i.tbv(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function handlePressInteraction($this, pressInteraction) {
    if (pressInteraction instanceof Press) {
      $this.jgf(pressInteraction, $this.hgg_1, $this.ggg_1);
    } else {
      if (pressInteraction instanceof Release) {
        $this.kgg(pressInteraction.ldf_1);
      } else {
        if (pressInteraction instanceof Cancel) {
          $this.kgg(pressInteraction.mdf_1);
        }
      }
    }
  }
  function updateStateLayer($this, interaction, scope) {
    var tmp0_elvis_lhs = $this.fgg_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new StateLayer($this.agg_1, $this.dgg_1);
      invalidateDraw($this);
      $this.fgg_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stateLayer = tmp;
    stateLayer.igh(interaction, scope);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.jgh_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).g1h = function (value, $completion) {
    return this.jgh_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).v2 = function () {
    return this.jgh_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.v2());
  };
  function RippleNode$onAttach$slambda(this$0, resultContinuation) {
    this.sgh_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleNode$onAttach$slambda).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(RippleNode$onAttach$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleNode$onAttach$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            var tmp_0 = this.sgh_1.zgf_1.ybw();
            var tmp_1 = RippleNode$onAttach$slambda$slambda_0(this.sgh_1, this.tgh_1, null);
            suspendResult = tmp_0.r1f(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  protoOf(RippleNode$onAttach$slambda).r1n = function ($this$launch, completion) {
    var i = new RippleNode$onAttach$slambda(this.sgh_1, completion);
    i.tgh_1 = $this$launch;
    return i;
  };
  function RippleNode$onAttach$slambda_0(this$0, resultContinuation) {
    var i = new RippleNode$onAttach$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    Node.call(this);
    this.zgf_1 = interactionSource;
    this.agg_1 = bounded;
    this.bgg_1 = radius;
    this.cgg_1 = color;
    this.dgg_1 = rippleAlpha;
    this.egg_1 = false;
    this.fgg_1 = null;
    this.ggg_1 = 0.0;
    this.hgg_1 = Companion_getInstance().u3u_1;
    this.igg_1 = false;
    var tmp = this;
    // Inline function 'androidx.collection.mutableObjectListOf' call
    tmp.jgg_1 = new MutableObjectList();
  }
  protoOf(RippleNode).x6c = function () {
    return this.egg_1;
  };
  protoOf(RippleNode).qgg = function () {
    return this.cgg_1.s4u();
  };
  protoOf(RippleNode).g6h = function (size) {
    this.igg_1 = true;
    var density = requireDensity(this);
    this.hgg_1 = toSize(size);
    var tmp = this;
    // Inline function 'kotlin.with' call
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = this.bgg_1;
    if (isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp_0 = getRippleEndRadius(density, this.agg_1, this.hgg_1);
    } else {
      tmp_0 = density.a4n(this.bgg_1);
    }
    tmp.ggg_1 = tmp_0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    var this_1 = this.jgg_1;
    // Inline function 'kotlin.contracts.contract' call
    var content = this_1.sm_1;
    var inductionVariable = 0;
    var last = this_1.tm_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp_1 = content[i];
        var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        handlePressInteraction(this, it);
      }
       while (inductionVariable < last);
    this.jgg_1.e2();
  };
  protoOf(RippleNode).b6d = function () {
    var tmp = this.w6c();
    launch(tmp, VOID, VOID, RippleNode$onAttach$slambda_0(this, null));
  };
  protoOf(RippleNode).t6h = function (_this__u8e3s4) {
    _this__u8e3s4.l6h();
    var tmp0_safe_receiver = this.fgg_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      tmp0_safe_receiver.ugh(_this__u8e3s4, this.ggg_1, this.qgg());
    }
    this.lgg(_this__u8e3s4);
  };
  function StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    this.dgi_1 = this$0;
    this.egi_1 = $targetAlpha;
    this.fgi_1 = $incomingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(StateLayer$handleInteraction$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.dgi_1.fgh_1.aaz(this.egi_1, this.fgi_1, VOID, VOID, this);
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
  protoOf(StateLayer$handleInteraction$slambda).r1n = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda(this.dgi_1, this.egi_1, this.fgi_1, completion);
    i.ggi_1 = $this$launch;
    return i;
  };
  function StateLayer$handleInteraction$slambda_0(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation) {
    this.pgi_1 = this$0;
    this.qgi_1 = $outgoingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda_1).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(StateLayer$handleInteraction$slambda_1).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.pgi_1.fgh_1.aaz(0.0, this.qgi_1, VOID, VOID, this);
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
  protoOf(StateLayer$handleInteraction$slambda_1).r1n = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda_1(this.pgi_1, this.qgi_1, completion);
    i.rgi_1 = $this$launch;
    return i;
  };
  function StateLayer$handleInteraction$slambda_2(this$0, $outgoingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer(bounded, rippleAlpha) {
    this.dgh_1 = bounded;
    this.egh_1 = rippleAlpha;
    this.fgh_1 = Animatable(0.0);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.ggh_1 = ArrayList_init_$Create$();
    this.hgh_1 = null;
  }
  protoOf(StateLayer).igh = function (interaction, scope) {
    if (interaction instanceof Enter) {
      this.ggh_1.h(interaction);
    } else {
      if (interaction instanceof Exit) {
        this.ggh_1.g2(interaction.idf_1);
      } else {
        if (interaction instanceof Focus) {
          this.ggh_1.h(interaction);
        } else {
          if (interaction instanceof Unfocus) {
            this.ggh_1.g2(interaction.kde_1);
          } else {
            if (interaction instanceof Start) {
              this.ggh_1.h(interaction);
            } else {
              if (interaction instanceof Stop) {
                this.ggh_1.g2(interaction.ide_1);
              } else {
                if (interaction instanceof Cancel_0) {
                  this.ggh_1.g2(interaction.jde_1);
                } else {
                  return Unit_instance;
                }
              }
            }
          }
        }
      }
    }
    var newInteraction = lastOrNull(this.ggh_1);
    if (!equals(this.hgh_1, newInteraction)) {
      if (!(newInteraction == null)) {
        var rippleAlpha = this.egh_1();
        var tmp;
        if (newInteraction instanceof Enter) {
          tmp = rippleAlpha.ogg_1;
        } else {
          if (newInteraction instanceof Focus) {
            tmp = rippleAlpha.ngg_1;
          } else {
            if (newInteraction instanceof Start) {
              tmp = rippleAlpha.mgg_1;
            } else {
              tmp = 0.0;
            }
          }
        }
        var targetAlpha = tmp;
        var incomingAnimationSpec = incomingStateLayerAnimationSpecFor(newInteraction);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_0(this, targetAlpha, incomingAnimationSpec, null));
      } else {
        var outgoingAnimationSpec = outgoingStateLayerAnimationSpecFor(this.hgh_1);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_2(this, outgoingAnimationSpec, null));
      }
      this.hgh_1 = newInteraction;
    }
  };
  protoOf(StateLayer).ugh = function (_this__u8e3s4, radius, color) {
    var alpha = this.fgh_1.v1();
    if (alpha > 0.0) {
      var modulatedColor = Color__copy$default_impl_ectz3s(color, alpha);
      if (this.dgh_1) {
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        var this_0 = _this__u8e3s4.z3t();
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value = _Size___get_packedValue__impl__7rlt1o(this_0);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits = convertToInt(shiftRight(value, 32));
        var right = floatFromBits(bits);
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        var this_1 = _this__u8e3s4.z3t();
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
        var bottom = floatFromBits(bits_0);
        var clipOp = Companion_getInstance_0().t4s_1;
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        var $this$with = _this__u8e3s4.a54();
        var previousSize = $this$with.z3t();
        $this$with.s47().k4s();
        try {
          $this$with.u53().q4s(0.0, 0.0, right, bottom, clipOp);
          _this__u8e3s4.j54(modulatedColor, radius);
        }finally {
          $this$with.s47().l4s();
          $this$with.t53(previousSize);
        }
      } else {
        _this__u8e3s4.j54(modulatedColor, radius);
      }
    }
  };
  function incomingStateLayerAnimationSpecFor(interaction) {
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (interaction instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (interaction instanceof Focus) {
        tmp = new TweenSpec(45, VOID, get_LinearEasing());
      } else {
        if (interaction instanceof Start) {
          tmp = new TweenSpec(45, VOID, get_LinearEasing());
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  function outgoingStateLayerAnimationSpecFor(interaction) {
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (interaction instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (interaction instanceof Focus) {
        tmp = get_DefaultTweenSpec();
      } else {
        if (interaction instanceof Start) {
          tmp = new TweenSpec(150, VOID, get_LinearEasing());
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  var properties_initialized_Ripple_kt_3wqvym;
  function _init_properties_Ripple_kt__d55ieo() {
    if (!properties_initialized_Ripple_kt_3wqvym) {
      properties_initialized_Ripple_kt_3wqvym = true;
      DefaultTweenSpec = new TweenSpec(15, VOID, get_LinearEasing());
      androidx_compose_material_ripple_Ripple$stable = 0;
      androidx_compose_material_ripple_RippleIndicationInstance$stable = 8;
      androidx_compose_material_ripple_RippleNode$stable = 8;
    }
  }
  function get_BoundedRippleExtraRadius() {
    _init_properties_RippleAnimation_kt__8sy0vy();
    return BoundedRippleExtraRadius;
  }
  var BoundedRippleExtraRadius;
  var androidx_compose_material_ripple_RippleAnimation$stable;
  function RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation) {
    this.agj_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.agj_1.cge_1.aaz(1.0, tween(75, VOID, get_LinearEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeIn$slambda$slambda).r1n = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this.agj_1, completion);
    i.bgj_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation) {
    this.kgj_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.kgj_1.dge_1.aaz(1.0, tween(225, VOID, get_FastOutSlowInEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).r1n = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this.kgj_1, completion);
    i.lgj_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_2(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation) {
    this.ugj_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.ugj_1.ege_1.aaz(1.0, tween(225, VOID, get_LinearEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).r1n = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this.ugj_1, completion);
    i.vgj_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_4(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation) {
    this.egk_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda$slambda).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.egk_1.cge_1.aaz(0.0, tween(150, VOID, get_LinearEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeOut$slambda$slambda).r1n = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this.egk_1, completion);
    i.fgk_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeOut$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_finishedFadingIn__33hlo9($this, _set____db54di) {
    var tmp0 = $this.gge_1;
    var tmp = KMutableProperty1;
    var tmp_0 = RippleAnimation$_get_finishedFadingIn_$ref_fbtyx2_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('finishedFadingIn', 1, tmp, tmp_0, RippleAnimation$_set_finishedFadingIn_$ref_1drawq_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  }
  function _get_finishedFadingIn__pzmnej($this) {
    var tmp0 = $this.gge_1;
    var tmp = KMutableProperty1;
    var tmp_0 = RippleAnimation$_get_finishedFadingIn_$ref_fbtyx2();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('finishedFadingIn', 1, tmp, tmp_0, RippleAnimation$_set_finishedFadingIn_$ref_1drawq());
    return tmp0.v1();
  }
  function _set_finishRequested__u52oy2($this, _set____db54di) {
    var tmp0 = $this.hge_1;
    var tmp = KMutableProperty1;
    var tmp_0 = RippleAnimation$_get_finishRequested_$ref_hndrqt_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('finishRequested', 1, tmp, tmp_0, RippleAnimation$_set_finishRequested_$ref_4cniuh_0());
    tmp0.t1k(_set____db54di);
    return Unit_instance;
  }
  function _get_finishRequested__usb5ii($this) {
    var tmp0 = $this.hge_1;
    var tmp = KMutableProperty1;
    var tmp_0 = RippleAnimation$_get_finishRequested_$ref_hndrqt();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('finishRequested', 1, tmp, tmp_0, RippleAnimation$_set_finishRequested_$ref_4cniuh());
    return tmp0.v1();
  }
  function fadeIn($this, $completion) {
    var tmp = new $fadeInCOROUTINE$($this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function fadeOut($this, $completion) {
    var tmp = new $fadeOutCOROUTINE$($this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function RippleAnimation$_get_finishedFadingIn_$ref_fbtyx2() {
    return function (p0) {
      return _get_finishedFadingIn__pzmnej(p0);
    };
  }
  function RippleAnimation$_set_finishedFadingIn_$ref_1drawq() {
    return function (p0, p1) {
      _set_finishedFadingIn__33hlo9(p0, p1);
      return Unit_instance;
    };
  }
  function RippleAnimation$_get_finishedFadingIn_$ref_fbtyx2_0() {
    return function (p0) {
      return _get_finishedFadingIn__pzmnej(p0);
    };
  }
  function RippleAnimation$_set_finishedFadingIn_$ref_1drawq_0() {
    return function (p0, p1) {
      _set_finishedFadingIn__33hlo9(p0, p1);
      return Unit_instance;
    };
  }
  function RippleAnimation$_get_finishRequested_$ref_hndrqt() {
    return function (p0) {
      return _get_finishRequested__usb5ii(p0);
    };
  }
  function RippleAnimation$_set_finishRequested_$ref_4cniuh() {
    return function (p0, p1) {
      _set_finishRequested__u52oy2(p0, p1);
      return Unit_instance;
    };
  }
  function RippleAnimation$_get_finishRequested_$ref_hndrqt_0() {
    return function (p0) {
      return _get_finishRequested__usb5ii(p0);
    };
  }
  function RippleAnimation$_set_finishRequested_$ref_4cniuh_0() {
    return function (p0, p1) {
      _set_finishRequested__u52oy2(p0, p1);
      return Unit_instance;
    };
  }
  function RippleAnimation$fadeIn$slambda(this$0, resultContinuation) {
    this.ggl_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda).me7 = function ($this$coroutineScope, $completion) {
    var tmp = this.r1n($this$coroutineScope, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(RippleAnimation$fadeIn$slambda).f9 = function (p1, $completion) {
    return this.me7((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
          launch(this.hgl_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_0(this.ggl_1, null));
          launch(this.hgl_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_2(this.ggl_1, null));
          return launch(this.hgl_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_4(this.ggl_1, null));
        } else if (tmp === 1) {
          throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda).r1n = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeIn$slambda(this.ggl_1, completion);
    i.hgl_1 = $this$coroutineScope;
    return i;
  };
  function RippleAnimation$fadeIn$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.me7($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda(this$0, resultContinuation) {
    this.qgl_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda).me7 = function ($this$coroutineScope, $completion) {
    var tmp = this.r1n($this$coroutineScope, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(RippleAnimation$fadeOut$slambda).f9 = function (p1, $completion) {
    return this.me7((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        if (tmp === 0) {
          this.o8_1 = 1;
          return launch(this.rgl_1, VOID, VOID, RippleAnimation$fadeOut$slambda$slambda_0(this.qgl_1, null));
        } else if (tmp === 1) {
          throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeOut$slambda).r1n = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeOut$slambda(this.qgl_1, completion);
    i.rgl_1 = $this$coroutineScope;
    return i;
  };
  function RippleAnimation$fadeOut$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.me7($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $animateCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.agm_1 = _this__u8e3s4;
  }
  protoOf($animateCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            this.n8_1 = 1;
            suspendResult = fadeIn(this.agm_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            _set_finishedFadingIn__33hlo9(this.agm_1, true);
            this.n8_1 = 2;
            suspendResult = this.agm_1.fge_1.vy(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n8_1 = 3;
            suspendResult = fadeOut(this.agm_1, this);
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
  function $fadeInCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ogk_1 = _this__u8e3s4;
  }
  protoOf($fadeInCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeIn$slambda_0(this.ogk_1, null), this);
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
  function $fadeOutCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xgk_1 = _this__u8e3s4;
  }
  protoOf($fadeOutCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeOut$slambda_0(this.xgk_1, null), this);
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
  function RippleAnimation(origin, radius, bounded) {
    this.xgd_1 = origin;
    this.ygd_1 = radius;
    this.zgd_1 = bounded;
    this.age_1 = null;
    this.bge_1 = null;
    this.cge_1 = Animatable(0.0);
    this.dge_1 = Animatable(0.0);
    this.ege_1 = Animatable(0.0);
    this.fge_1 = CompletableDeferred(null);
    this.gge_1 = mutableStateOf(false);
    this.hge_1 = mutableStateOf(false);
  }
  protoOf(RippleAnimation).ige = function ($completion) {
    var tmp = new $animateCOROUTINE$(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(RippleAnimation).kgf = function () {
    _set_finishRequested__u52oy2(this, true);
    this.fge_1.c12(Unit_instance);
  };
  protoOf(RippleAnimation).rgg = function (_this__u8e3s4, color) {
    if (this.age_1 == null) {
      this.age_1 = getRippleStartRadius(_this__u8e3s4.z3t());
    }
    var tmp = this.xgd_1;
    if ((tmp == null ? null : new Offset(tmp)) == null) {
      this.xgd_1 = _this__u8e3s4.m54();
    }
    var tmp_0 = this.bge_1;
    if ((tmp_0 == null ? null : new Offset(tmp_0)) == null) {
      var tmp_1 = this;
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      var this_0 = _this__u8e3s4.z3t();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp0 = floatFromBits(bits) / 2.0;
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      var this_1 = _this__u8e3s4.z3t();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = floatFromBits(bits_0) / 2.0;
      var v1 = fromInt(toRawBits(tmp0));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$8 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      tmp_1.bge_1 = _Offset___init__impl__c168vi(tmp$ret$8);
    }
    var tmp_2;
    if (_get_finishRequested__usb5ii(this) && !_get_finishedFadingIn__pzmnej(this)) {
      tmp_2 = 1.0;
    } else {
      tmp_2 = this.cge_1.v1();
    }
    var alpha = tmp_2;
    var radius = lerp(ensureNotNull(this.age_1), this.ygd_1, this.dge_1.v1());
    var tmp_3 = this.xgd_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_2 = ensureNotNull(tmp_3 == null ? null : new Offset(tmp_3)).p3t_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(this_2);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_4 = floatFromBits(bits_1);
    var tmp_5 = this.bge_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_3 = ensureNotNull(tmp_5 == null ? null : new Offset(tmp_5)).p3t_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(this_3);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    var tmp$ret$17 = floatFromBits(bits_2);
    var tmp0_0 = lerp(tmp_4, tmp$ret$17, this.ege_1.v1());
    var tmp_6 = this.xgd_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_4 = ensureNotNull(tmp_6 == null ? null : new Offset(tmp_6)).p3t_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(this_4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    var tmp_7 = floatFromBits(bits_3);
    var tmp_8 = this.bge_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_5 = ensureNotNull(tmp_8 == null ? null : new Offset(tmp_8)).p3t_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Offset___get_packedValue__impl__xh2k8q(this_5);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    var tmp$ret$25 = floatFromBits(bits_4);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2_0 = lerp(tmp_7, tmp$ret$25, this.ege_1.v1());
    var v1_0 = fromInt(toRawBits(tmp0_0));
    var v2_0 = fromInt(toRawBits(val2_0));
    var tmp$ret$26 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
    var centerOffset = _Offset___init__impl__c168vi(tmp$ret$26);
    var modulatedColor = Color__copy$default_impl_ectz3s(color, _Color___get_alpha__impl__wcfyv1(color) * alpha);
    if (this.zgd_1) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      var this_6 = _this__u8e3s4.z3t();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_5 = _Size___get_packedValue__impl__7rlt1o(this_6);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_5 = convertToInt(shiftRight(value_5, 32));
      var right = floatFromBits(bits_5);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      var this_7 = _this__u8e3s4.z3t();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_6 = _Size___get_packedValue__impl__7rlt1o(this_7);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
      var bottom = floatFromBits(bits_6);
      var clipOp = Companion_getInstance_0().t4s_1;
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      var $this$with = _this__u8e3s4.a54();
      var previousSize = $this$with.z3t();
      $this$with.s47().k4s();
      try {
        $this$with.u53().q4s(0.0, 0.0, right, bottom, clipOp);
        _this__u8e3s4.j54(modulatedColor, radius, centerOffset);
      }finally {
        $this$with.s47().l4s();
        $this$with.t53(previousSize);
      }
    } else {
      _this__u8e3s4.j54(modulatedColor, radius, centerOffset);
    }
  };
  function getRippleEndRadius(_this__u8e3s4, bounded, size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$8 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$9 = _Offset___init__impl__c168vi(tmp$ret$8);
    var radiusCoveringBounds = Offset__getDistance_impl_pclvxn(tmp$ret$9) / 2.0;
    var tmp;
    if (bounded) {
      tmp = radiusCoveringBounds + _this__u8e3s4.a4n(get_BoundedRippleExtraRadius());
    } else {
      tmp = radiusCoveringBounds;
    }
    return tmp;
  }
  function getRippleStartRadius(size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.math.max' call
    var b = floatFromBits(bits_0);
    return Math.max(tmp0, b) * 0.3;
  }
  var properties_initialized_RippleAnimation_kt_4ja21o;
  function _init_properties_RippleAnimation_kt__8sy0vy() {
    if (!properties_initialized_RippleAnimation_kt_4ja21o) {
      properties_initialized_RippleAnimation_kt_4ja21o = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      BoundedRippleExtraRadius = _Dp___init__impl__ms3zkb(10);
      androidx_compose_material_ripple_RippleAnimation$stable = 8;
    }
  }
  function RippleAlpha(draggedAlpha, focusedAlpha, hoveredAlpha, pressedAlpha) {
    this.mgg_1 = draggedAlpha;
    this.ngg_1 = focusedAlpha;
    this.ogg_1 = hoveredAlpha;
    this.pgg_1 = pressedAlpha;
  }
  protoOf(RippleAlpha).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleAlpha))
      return false;
    if (!(this.mgg_1 === other.mgg_1))
      return false;
    if (!(this.ngg_1 === other.ngg_1))
      return false;
    if (!(this.ogg_1 === other.ogg_1))
      return false;
    if (!(this.pgg_1 === other.pgg_1))
      return false;
    return true;
  };
  protoOf(RippleAlpha).hashCode = function () {
    var result = getNumberHashCode(this.mgg_1);
    result = imul(31, result) + getNumberHashCode(this.ngg_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.ogg_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.pgg_1) | 0;
    return result;
  };
  protoOf(RippleAlpha).toString = function () {
    return 'RippleAlpha(draggedAlpha=' + this.mgg_1 + ', focusedAlpha=' + this.ngg_1 + ', ' + ('hoveredAlpha=' + this.ogg_1 + ', pressedAlpha=' + this.pgg_1 + ')');
  };
  function createPlatformRippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    return new CommonRippleNode(interactionSource, bounded, radius, color, rippleAlpha);
  }
  //region block: post-declaration
  protoOf(RippleNode).f6l = onMeasureResultChanged;
  protoOf(RippleNode).j6h = onPlaced;
  //endregion
  //region block: init
  androidx_compose_material_ripple_CommonRipple$stable = 0;
  androidx_compose_material_ripple_CommonRippleNode$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = RippleAlpha;
  _.$_$.b = createRippleModifierNode;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-material-material-ripple.js.map
