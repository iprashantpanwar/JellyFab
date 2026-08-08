(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-backhandler'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-backhandler'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-backhandler'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-backhandler'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-backhandler'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-backhandler'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-backhandler'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.yg;
  var initMetadataForCompanion = kotlin_kotlin.$_$.wf;
  var initMetadataForClass = kotlin_kotlin.$_$.vf;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var Unit_getInstance = kotlin_kotlin.$_$.n5;
  var initMetadataForInterface = kotlin_kotlin.$_$.zf;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.n2;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(BackEventCompat, 'BackEventCompat');
  initMetadataForClass(BackGestureDispatcher, 'BackGestureDispatcher', BackGestureDispatcher);
  initMetadataForInterface(BackGestureListener, 'BackGestureListener');
  //endregion
  var androidx_compose_ui_backhandler_BackEventCompat$stable;
  function Companion() {
    Companion_instance = this;
    this.EDGE_LEFT_1 = 0;
    this.EDGE_RIGHT_1 = 1;
  }
  protoOf(Companion).get_EDGE_LEFT_c8epgg_k$ = function () {
    return this.EDGE_LEFT_1;
  };
  protoOf(Companion).get_EDGE_RIGHT_nzqb99_k$ = function () {
    return this.EDGE_RIGHT_1;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function BackEventCompat(touchX, touchY, progress, swipeEdge) {
    Companion_getInstance();
    this.touchX_1 = touchX;
    this.touchY_1 = touchY;
    this.progress_1 = progress;
    this.swipeEdge_1 = swipeEdge;
  }
  protoOf(BackEventCompat).get_touchX_k228le_k$ = function () {
    return this.touchX_1;
  };
  protoOf(BackEventCompat).get_touchY_k228lf_k$ = function () {
    return this.touchY_1;
  };
  protoOf(BackEventCompat).get_progress_mo5qeu_k$ = function () {
    return this.progress_1;
  };
  protoOf(BackEventCompat).get_swipeEdge_xy0dim_k$ = function () {
    return this.swipeEdge_1;
  };
  var androidx_compose_ui_backhandler_BackGestureDispatcher$stable;
  var androidx_compose_ui_backhandler_BackGestureListenerImpl$stable;
  function _get_listeners__760gzy($this) {
    return $this.listeners_1;
  }
  function BackGestureDispatcher() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.listeners_1 = ArrayList_init_$Create$();
  }
  protoOf(BackGestureDispatcher).get_activeListener_j70aub_k$ = function () {
    // Inline function 'kotlin.collections.findLast' call
    var tmp0 = this.listeners_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator = tmp0.listIterator_70e65o_k$(tmp0.get_size_woubt6_k$());
      while (iterator.hasPrevious_qh0629_k$()) {
        var element = iterator.previous_l2dfd5_k$();
        if (element.get_enabled_pcr8o8_k$()) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  protoOf(BackGestureDispatcher).activeListenerChanged_xdrnfa_k$ = function () {
  };
  protoOf(BackGestureDispatcher).addListener_s8hun8_k$ = function (listener) {
    if (this.listeners_1.contains_aljjnj_k$(listener))
      return Unit_getInstance();
    this.listeners_1.add_utx5q5_k$(listener);
    this.activeListenerChanged_xdrnfa_k$();
  };
  protoOf(BackGestureDispatcher).removeListener_rz64op_k$ = function (listener) {
    this.listeners_1.remove_cedx0m_k$(listener);
    this.activeListenerChanged_xdrnfa_k$();
  };
  function BackGestureListener() {
  }
  function get_LocalBackGestureDispatcher() {
    _init_properties_BackHandler_jb_kt__15k5tp();
    return LocalBackGestureDispatcher;
  }
  var LocalBackGestureDispatcher;
  function LocalBackGestureDispatcher$lambda() {
    _init_properties_BackHandler_jb_kt__15k5tp();
    return null;
  }
  var properties_initialized_BackHandler_jb_kt_6brqwr;
  function _init_properties_BackHandler_jb_kt__15k5tp() {
    if (!properties_initialized_BackHandler_jb_kt_6brqwr) {
      properties_initialized_BackHandler_jb_kt_6brqwr = true;
      LocalBackGestureDispatcher = staticCompositionLocalOf(LocalBackGestureDispatcher$lambda);
    }
  }
  //region block: init
  androidx_compose_ui_backhandler_BackEventCompat$stable = 0;
  androidx_compose_ui_backhandler_BackGestureDispatcher$stable = 8;
  androidx_compose_ui_backhandler_BackGestureListenerImpl$stable = 8;
  //endregion
  return _;
}));
