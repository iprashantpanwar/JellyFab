(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    globalThis['compose-multiplatform-core-compose-animation-animation'] = factory(typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui']);
  }
}(function (_, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui) {
  'use strict';
  //region block: imports
  var sign = Math.sign;
  var imul = Math.imul;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o;
  var ColorSpaces_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n3;
  var Color__convert_impl_so5m8t = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s2;
  var _Color___get_red__impl__cwrsk6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v2;
  var _Color___get_green__impl__bta9rs = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t2;
  var _Color___get_blue__impl__xwez13 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q2;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var AnimationVector4D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var toNumber = kotlin_kotlin.$_$.l8;
  var Long = kotlin_kotlin.$_$.hd;
  var compare = kotlin_kotlin.$_$.w7;
  var protoOf = kotlin_kotlin.$_$.z9;
  var getNumberHashCode = kotlin_kotlin.$_$.d9;
  var THROW_CCE = kotlin_kotlin.$_$.md;
  var equals = kotlin_kotlin.$_$.z8;
  var equalsLong = kotlin_kotlin.$_$.a8;
  var initMetadataForClass = kotlin_kotlin.$_$.h9;
  var numberToLong = kotlin_kotlin.$_$.g8;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.d2;
  var Unit_instance = kotlin_kotlin.$_$.b3;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.l1;
  var _Color___get_colorSpace__impl__jqqozk = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u3;
  var Companion_getInstance_0 = kotlin_androidx_compose_runtime_runtime.$_$.l2;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var animateValueAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.w;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a1;
  var generateDecayAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.z;
  var coerceIn = kotlin_kotlin.$_$.ra;
  var numberToInt = kotlin_kotlin.$_$.x9;
  var initMetadataForObject = kotlin_kotlin.$_$.n9;
  var divide = kotlin_kotlin.$_$.z7;
  var multiply = kotlin_kotlin.$_$.e8;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.v5;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(FlingInfo, 'FlingInfo');
  initMetadataForClass(FlingCalculator, 'FlingCalculator');
  initMetadataForClass(FlingResult, 'FlingResult');
  initMetadataForObject(AndroidFlingSpline, 'AndroidFlingSpline');
  initMetadataForClass(SplineBasedFloatDecayAnimationSpec, 'SplineBasedFloatDecayAnimationSpec');
  //endregion
  var androidx_compose_animation_AnimatedVisibilityScopeImpl$stable;
  function get_ColorToVector() {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return ColorToVector;
  }
  var ColorToVector;
  function get_VectorConverter(_this__u8e3s4) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return get_ColorToVector();
  }
  function ColorToVector$lambda(colorSpace) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp = ColorToVector$lambda$lambda;
    return TwoWayConverter(tmp, ColorToVector$lambda$lambda_0(colorSpace));
  }
  function ColorToVector$lambda$lambda(color) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var _destruct__k2r9zo = Color__convert_impl_so5m8t(color.n4u_1, ColorSpaces_getInstance().e4u_1);
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var l = _Color___get_red__impl__cwrsk6(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var a = _Color___get_green__impl__bta9rs(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var alpha = _Color___get_alpha__impl__wcfyv1(_destruct__k2r9zo);
    return new AnimationVector4D(alpha, l, a, b);
  }
  function ColorToVector$lambda$lambda_0($colorSpace) {
    return function (vector) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_0 = vector.fb2_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_1 = this_0 < 0.0 ? 0.0 : this_0;
      var tmp = this_1 > 1.0 ? 1.0 : this_1;
      var tmp0 = vector.gb2_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var minimumValue = -0.5;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_2 = tmp0 < minimumValue ? minimumValue : tmp0;
      var tmp_0 = this_2 > 0.5 ? 0.5 : this_2;
      var tmp0_0 = vector.hb2_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var minimumValue_0 = -0.5;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = tmp0_0 < minimumValue_0 ? minimumValue_0 : tmp0_0;
      var tmp_1 = this_3 > 0.5 ? 0.5 : this_3;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_4 = vector.eb2_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_5 = this_4 < 0.0 ? 0.0 : this_4;
      var tmp$ret$11 = this_5 > 1.0 ? 1.0 : this_5;
      return new Color_0(Color__convert_impl_so5m8t(Color(tmp, tmp_0, tmp_1, tmp$ret$11, ColorSpaces_getInstance().e4u_1), $colorSpace));
    };
  }
  var properties_initialized_ColorVectorConverter_kt_jaoojo;
  function _init_properties_ColorVectorConverter_kt__qncuxy() {
    if (!properties_initialized_ColorVectorConverter_kt_jaoojo) {
      properties_initialized_ColorVectorConverter_kt_jaoojo = true;
      ColorToVector = ColorToVector$lambda;
    }
  }
  function get_DecelerationRate() {
    _init_properties_FlingCalculator_kt__ornu7o();
    return DecelerationRate;
  }
  var DecelerationRate;
  var androidx_compose_animation_FlingCalculator_FlingInfo$stable;
  var androidx_compose_animation_FlingCalculator$stable;
  function computeDeceleration($this, density) {
    return computeDeceleration_0(0.84, density.z4m());
  }
  function getSplineDeceleration($this, velocity) {
    return AndroidFlingSpline_getInstance().qbc(velocity, $this.kbc_1 * $this.mbc_1);
  }
  function FlingInfo(initialVelocity, distance, duration) {
    this.rbc_1 = initialVelocity;
    this.sbc_1 = distance;
    this.tbc_1 = duration;
  }
  protoOf(FlingInfo).ubc = function (time) {
    var tmp;
    if (compare(this.tbc_1, new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var other = toNumber(this.tbc_1);
      tmp = toNumber(time) / other;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    // Inline function 'kotlin.math.sign' call
    var x = this.rbc_1;
    var tmp$ret$1 = sign(x);
    return this.sbc_1 * tmp$ret$1 * AndroidFlingSpline_getInstance().xbc(splinePos).vbc_1;
  };
  protoOf(FlingInfo).ybc = function (time) {
    var tmp;
    if (compare(this.tbc_1, new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var other = toNumber(this.tbc_1);
      tmp = toNumber(time) / other;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    var tmp_0 = AndroidFlingSpline_getInstance().xbc(splinePos).wbc_1;
    // Inline function 'kotlin.math.sign' call
    var x = this.rbc_1;
    return tmp_0 * sign(x) * this.sbc_1 / toNumber(this.tbc_1) * 1000.0;
  };
  protoOf(FlingInfo).toString = function () {
    return 'FlingInfo(initialVelocity=' + this.rbc_1 + ', distance=' + this.sbc_1 + ', duration=' + this.tbc_1.toString() + ')';
  };
  protoOf(FlingInfo).hashCode = function () {
    var result = getNumberHashCode(this.rbc_1);
    result = imul(result, 31) + getNumberHashCode(this.sbc_1) | 0;
    result = imul(result, 31) + this.tbc_1.hashCode() | 0;
    return result;
  };
  protoOf(FlingInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingInfo))
      return false;
    var tmp0_other_with_cast = other instanceof FlingInfo ? other : THROW_CCE();
    if (!equals(this.rbc_1, tmp0_other_with_cast.rbc_1))
      return false;
    if (!equals(this.sbc_1, tmp0_other_with_cast.sbc_1))
      return false;
    if (!equalsLong(this.tbc_1, tmp0_other_with_cast.tbc_1))
      return false;
    return true;
  };
  function FlingCalculator(friction, density) {
    this.kbc_1 = friction;
    this.lbc_1 = density;
    this.mbc_1 = computeDeceleration(this, this.lbc_1);
  }
  protoOf(FlingCalculator).zbc = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    // Inline function 'kotlin.math.exp' call
    var x = l / decelMinusOne;
    var tmp$ret$0 = Math.exp(x);
    return numberToLong(1000.0 * tmp$ret$0);
  };
  protoOf(FlingCalculator).abd = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.kbc_1 * this.mbc_1;
    // Inline function 'kotlin.math.exp' call
    var x = get_DecelerationRate() / decelMinusOne * l;
    return tmp * Math.exp(x);
  };
  protoOf(FlingCalculator).bbd = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.kbc_1 * this.mbc_1;
    // Inline function 'kotlin.math.exp' call
    var x = get_DecelerationRate() / decelMinusOne * l;
    var tmp_0 = tmp * Math.exp(x);
    // Inline function 'kotlin.math.exp' call
    var x_0 = l / decelMinusOne;
    var tmp$ret$1 = Math.exp(x_0);
    return new FlingInfo(velocity, tmp_0, numberToLong(1000.0 * tmp$ret$1));
  };
  function computeDeceleration_0(friction, density) {
    _init_properties_FlingCalculator_kt__ornu7o();
    return 9.80665 * 39.37 * density * 160.0 * friction;
  }
  var properties_initialized_FlingCalculator_kt_aw7aky;
  function _init_properties_FlingCalculator_kt__ornu7o() {
    if (!properties_initialized_FlingCalculator_kt_aw7aky) {
      properties_initialized_FlingCalculator_kt_aw7aky = true;
      // Inline function 'kotlin.math.ln' call
      var tmp = Math.log(0.78);
      // Inline function 'kotlin.math.ln' call
      DecelerationRate = tmp / Math.log(0.9);
      androidx_compose_animation_FlingCalculator_FlingInfo$stable = 0;
      androidx_compose_animation_FlingCalculator$stable = 0;
    }
  }
  var androidx_compose_animation_RenderInTransitionOverlayNodeElement$stable;
  var androidx_compose_animation_RenderInTransitionOverlayNode$stable;
  var androidx_compose_animation_SharedElement$stable;
  var androidx_compose_animation_SharedElementInternalState$stable;
  var androidx_compose_animation_TargetData$stable;
  function get_colorDefaultSpring() {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    return colorDefaultSpring;
  }
  var colorDefaultSpring;
  function animateColorAsState(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -451899108, 'C(animateColorAsState)P(3:c#ui.graphics.Color!1,2)63@2906L84,64@3002L157:SingleValueAnimation.kt#xbi5r1');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_colorDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'ColorAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-451899108, $changed, -1, 'androidx.compose.animation.animateColorAsState (SingleValueAnimation.kt:61)');
    }
    var tmp1_remember$arg$0 = _Color___get_colorSpace__impl__jqqozk(targetValue);
    sourceInformationMarkerStart($composer_0, -483337392, 'CC(remember):SingleValueAnimation.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.j25(tmp1_remember$arg$0);
    // Inline function 'kotlin.let' call
    var it = $composer_0.h25();
    var tmp;
    if (invalid || it === Companion_getInstance_0().i24_1) {
      var value = get_VectorConverter(Companion_getInstance())(_Color___get_colorSpace__impl__jqqozk(targetValue));
      $composer_0.i25(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp2_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var converter = tmp2_group;
    var tmp_1 = animationSpec_0;
    var tmp0 = animateValueAsState(new Color_0(targetValue), converter, tmp_1, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  var properties_initialized_SingleValueAnimation_kt_kqgwkj;
  function _init_properties_SingleValueAnimation_kt__hxy1sr() {
    if (!properties_initialized_SingleValueAnimation_kt_kqgwkj) {
      properties_initialized_SingleValueAnimation_kt_kqgwkj = true;
      colorDefaultSpring = spring();
    }
  }
  var androidx_compose_animation_AndroidFlingSpline_FlingResult$stable;
  var androidx_compose_animation_AndroidFlingSpline$stable;
  function splineBasedDecay(density) {
    return generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
  }
  function FlingResult(distanceCoefficient, velocityCoefficient) {
    this.vbc_1 = distanceCoefficient;
    this.wbc_1 = velocityCoefficient;
  }
  protoOf(FlingResult).toString = function () {
    return 'FlingResult(distanceCoefficient=' + this.vbc_1 + ', velocityCoefficient=' + this.wbc_1 + ')';
  };
  protoOf(FlingResult).hashCode = function () {
    var result = getNumberHashCode(this.vbc_1);
    result = imul(result, 31) + getNumberHashCode(this.wbc_1) | 0;
    return result;
  };
  protoOf(FlingResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingResult))
      return false;
    var tmp0_other_with_cast = other instanceof FlingResult ? other : THROW_CCE();
    if (!equals(this.vbc_1, tmp0_other_with_cast.vbc_1))
      return false;
    if (!equals(this.wbc_1, tmp0_other_with_cast.wbc_1))
      return false;
    return true;
  };
  function AndroidFlingSpline() {
    AndroidFlingSpline_instance = this;
    this.nbc_1 = 100;
    this.obc_1 = new Float32Array(101);
    this.pbc_1 = new Float32Array(101);
    computeSplineInfo(this.obc_1, this.pbc_1, 100);
  }
  protoOf(AndroidFlingSpline).xbc = function (time) {
    var clampedTime = coerceIn(time, 0.0, 1.0);
    var index = numberToInt(100 * clampedTime);
    var distanceCoef = 1.0;
    var velocityCoef = 0.0;
    if (index < 100) {
      var tInf = index / 100;
      var tSup = (index + 1 | 0) / 100;
      var dInf = this.obc_1[index];
      var dSup = this.obc_1[index + 1 | 0];
      velocityCoef = (dSup - dInf) / (tSup - tInf);
      distanceCoef = dInf + (clampedTime - tInf) * velocityCoef;
    }
    return new FlingResult(distanceCoef, velocityCoef);
  };
  protoOf(AndroidFlingSpline).qbc = function (velocity, friction) {
    // Inline function 'kotlin.math.abs' call
    // Inline function 'kotlin.math.ln' call
    var x = 0.35 * Math.abs(velocity) / friction;
    return Math.log(x);
  };
  var AndroidFlingSpline_instance;
  function AndroidFlingSpline_getInstance() {
    if (AndroidFlingSpline_instance == null)
      new AndroidFlingSpline();
    return AndroidFlingSpline_instance;
  }
  function computeSplineInfo(splinePositions, splineTimes, nbSamples) {
    var xMin = 0.0;
    var yMin = 0.0;
    var inductionVariable = 0;
    if (inductionVariable < nbSamples)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var alpha = i / nbSamples;
        var xMax = 1.0;
        var x;
        var tx;
        var coef;
        $l$loop: while (true) {
          x = xMin + (xMax - xMin) / 2.0;
          coef = 3.0 * x * (1.0 - x);
          tx = coef * ((1.0 - x) * 0.175 + x * 0.35000002) + x * x * x;
          // Inline function 'kotlin.math.abs' call
          var x_0 = tx - alpha;
          if (Math.abs(x_0) < 1.0E-5)
            break $l$loop;
          if (tx > alpha)
            xMax = x;
          else
            xMin = x;
        }
        splinePositions[i] = coef * ((1.0 - x) * 0.5 + x) + x * x * x;
        var yMax = 1.0;
        var y;
        var dy;
        $l$loop_0: while (true) {
          y = yMin + (yMax - yMin) / 2.0;
          coef = 3.0 * y * (1.0 - y);
          dy = coef * ((1.0 - y) * 0.5 + y) + y * y * y;
          // Inline function 'kotlin.math.abs' call
          var x_1 = dy - alpha;
          if (Math.abs(x_1) < 1.0E-5)
            break $l$loop_0;
          if (dy > alpha)
            yMax = y;
          else
            yMin = y;
        }
        splineTimes[i] = coef * ((1.0 - y) * 0.175 + y * 0.35000002) + y * y * y;
      }
       while (inductionVariable < nbSamples);
    splineTimes[nbSamples] = 1.0;
    splinePositions[nbSamples] = splineTimes[nbSamples];
  }
  var androidx_compose_animation_SplineBasedFloatDecayAnimationSpec$stable;
  function flingDistance($this, startVelocity) {
    var tmp = $this.cbd_1.abd(startVelocity);
    // Inline function 'kotlin.math.sign' call
    return tmp * sign(startVelocity);
  }
  function SplineBasedFloatDecayAnimationSpec(density) {
    this.cbd_1 = new FlingCalculator(get_platformFlingScrollFriction(), density);
  }
  protoOf(SplineBasedFloatDecayAnimationSpec).rb1 = function () {
    return 0.0;
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).ub3 = function (initialValue, initialVelocity) {
    return initialValue + flingDistance(this, initialVelocity);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).rb3 = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    return initialValue + this.cbd_1.bbd(initialVelocity).ubc(playTimeMillis);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).sb3 = function (initialValue, initialVelocity) {
    return multiply(this.cbd_1.zbc(initialVelocity), new Long(1000000, 0));
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).tb3 = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    return this.cbd_1.bbd(initialVelocity).ybc(playTimeMillis);
  };
  function get_platformFlingScrollFriction() {
    return platformFlingScrollFriction;
  }
  var platformFlingScrollFriction;
  function rememberSplineBasedDecay($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1838429038, 'C(rememberSplineBasedDecay)33@1347L7,34@1366L114:SplineBasedDecayAnimationSpec.nonAndroid.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(-1838429038, $changed, -1, 'androidx.compose.animation.rememberSplineBasedDecay (SplineBasedDecayAnimationSpec.nonAndroid.kt:30)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.t25(this_0);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    var tmp1_remember$arg$0 = density.z4m();
    sourceInformationMarkerStart($composer_0, -1498736732, 'CC(remember):SplineBasedDecayAnimationSpec.nonAndroid.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.m25(tmp1_remember$arg$0);
    // Inline function 'kotlin.let' call
    var it = $composer_0.h25();
    var tmp;
    if (invalid || it === Companion_getInstance_0().i24_1) {
      var value = generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
      $composer_0.i25(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp2_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp2_group;
  }
  //region block: init
  androidx_compose_animation_AnimatedVisibilityScopeImpl$stable = 8;
  androidx_compose_animation_RenderInTransitionOverlayNodeElement$stable = 0;
  androidx_compose_animation_RenderInTransitionOverlayNode$stable = 8;
  androidx_compose_animation_SharedElement$stable = 8;
  androidx_compose_animation_SharedElementInternalState$stable = 8;
  androidx_compose_animation_TargetData$stable = 0;
  androidx_compose_animation_AndroidFlingSpline_FlingResult$stable = 0;
  androidx_compose_animation_AndroidFlingSpline$stable = 8;
  androidx_compose_animation_SplineBasedFloatDecayAnimationSpec$stable = 0;
  platformFlingScrollFriction = 0.015;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SplineBasedFloatDecayAnimationSpec;
  _.$_$.b = get_VectorConverter;
  _.$_$.c = animateColorAsState;
  _.$_$.d = rememberSplineBasedDecay;
  _.$_$.e = splineBasedDecay;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-animation-animation.js.map
