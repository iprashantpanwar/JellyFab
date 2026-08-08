(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './components-resources-library.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-material3-material3.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './androidx-compose-runtime-runtime-saveable.js', './JellyFab-jellyfab.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-text.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./components-resources-library.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./androidx-compose-runtime-runtime-saveable.js'), require('./JellyFab-jellyfab.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab:composeApp'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'JellyFab:composeApp'.");
    }
    if (typeof globalThis['components-resources-library'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab:composeApp'. Its dependency 'components-resources-library' was not found. Please, check whether 'components-resources-library' is loaded prior to 'JellyFab:composeApp'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab:composeApp'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'JellyFab:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'JellyFab:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab:composeApp'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'JellyFab:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material3-material3'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab:composeApp'. Its dependency 'compose-multiplatform-core-compose-material3-material3' was not found. Please, check whether 'compose-multiplatform-core-compose-material3-material3' is loaded prior to 'JellyFab:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'JellyFab:composeApp'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab:composeApp'. Its dependency 'androidx-compose-runtime-runtime-saveable' was not found. Please, check whether 'androidx-compose-runtime-runtime-saveable' is loaded prior to 'JellyFab:composeApp'.");
    }
    if (typeof globalThis['JellyFab-jellyfab'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab:composeApp'. Its dependency 'JellyFab-jellyfab' was not found. Please, check whether 'JellyFab-jellyfab' is loaded prior to 'JellyFab:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab:composeApp'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'JellyFab:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'JellyFab:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'JellyFab:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'JellyFab:composeApp'.");
    }
    globalThis['JellyFab:composeApp'] = factory(typeof globalThis['JellyFab:composeApp'] === 'undefined' ? {} : globalThis['JellyFab:composeApp'], globalThis['kotlin-kotlin-stdlib'], globalThis['components-resources-library'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['androidx-compose-runtime-runtime-saveable'], globalThis['JellyFab-jellyfab'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui-text']);
  }
}(function (_, kotlin_kotlin, kotlin_components_resources_library, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_androidx_compose_runtime_runtime_saveable, kotlin_io_github_iprashantpanwar_jellyfab, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_text) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var KProperty1 = kotlin_kotlin.$_$.cb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.e9;
  var emptySet = kotlin_kotlin.$_$.r4;
  var Long = kotlin_kotlin.$_$.hd;
  var ResourceItem = kotlin_components_resources_library.$_$.b;
  var setOf = kotlin_kotlin.$_$.i6;
  var DrawableResource = kotlin_components_resources_library.$_$.a;
  var lazy = kotlin_kotlin.$_$.be;
  var protoOf = kotlin_kotlin.$_$.z9;
  var initMetadataForObject = kotlin_kotlin.$_$.n9;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var Unit_instance = kotlin_kotlin.$_$.b3;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.d2;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.l1;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.y9;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var _FabPosition___init__impl__9ib2hj = kotlin_org_jetbrains_compose_material3_material3.$_$.l;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.m2;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o2;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m1;
  var get_safeDrawing = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.z;
  var Scaffold = kotlin_org_jetbrains_compose_material3_material3.$_$.f;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.l2;
  var THROW_CCE = kotlin_kotlin.$_$.md;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var rememberSaveable = kotlin_androidx_compose_runtime_runtime_saveable.$_$.g;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var contains = kotlin_kotlin.$_$.pb;
  var isBlank = kotlin_kotlin.$_$.vb;
  var vectorResource = kotlin_components_resources_library.$_$.d;
  var JellyFabItem = kotlin_io_github_iprashantpanwar_jellyfab.$_$.a;
  var listOf = kotlin_kotlin.$_$.v5;
  var rememberJellyFabState = kotlin_io_github_iprashantpanwar_jellyfab.$_$.c;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u3;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.x9;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.r8;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.t9;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.k1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.h;
  var isInterface = kotlin_kotlin.$_$.q9;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.h2;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.j2;
  var _Updater___get_composer__impl__9ty7av = kotlin_androidx_compose_runtime_runtime.$_$.i2;
  var equals = kotlin_kotlin.$_$.z8;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j1;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i1;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var ColumnScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k1;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var height = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var Spacer = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e;
  var LazyColumn = kotlin_org_jetbrains_compose_foundation_foundation.$_$.o;
  var JellyFab = kotlin_io_github_iprashantpanwar_jellyfab.$_$.b;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.n;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.w;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.d3;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s2;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f2;
  var Text = kotlin_org_jetbrains_compose_material3_material3.$_$.g;
  var get_LocalFocusManager = kotlin_org_jetbrains_compose_ui_ui.$_$.w5;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.s;
  var TextFieldDefaults_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.n;
  var VOID = kotlin_kotlin.$_$.b;
  var KeyboardActions = kotlin_org_jetbrains_compose_foundation_foundation.$_$.y;
  var OutlinedTextField = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var painterResource = kotlin_components_resources_library.$_$.c;
  var Icon = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var KMutableProperty0 = kotlin_kotlin.$_$.za;
  var getLocalDelegateReference = kotlin_kotlin.$_$.c9;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var toString = kotlin_kotlin.$_$.ba;
  var getStringHashCode = kotlin_kotlin.$_$.f9;
  var initMetadataForClass = kotlin_kotlin.$_$.h9;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h1;
  var rowMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.y;
  var RowScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l1;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c1;
  var get_CircleShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.p;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.e;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui.$_$.s9;
  var Image = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b1;
  var width = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f1;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f3;
  var isSystemInDarkTheme = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j1;
  var MaterialTheme = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  var darkColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.i;
  var lightColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.j;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.p2;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y1;
  var Typography_init_$Create$ = kotlin_org_jetbrains_compose_material3_material3.$_$.k;
  var ComposeViewport = kotlin_org_jetbrains_compose_ui_ui.$_$.e8;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(drawable, 'drawable');
  initMetadataForObject(ComposableSingletons$AppKt, 'ComposableSingletons$AppKt');
  initMetadataForObject(ComposableSingletons$ChatListDemoScreenKt, 'ComposableSingletons$ChatListDemoScreenKt');
  initMetadataForClass(ChatPreview, 'ChatPreview');
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  //endregion
  function get_avatar_1(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = avatar_1$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('avatar_1', 1, tmp, _get_avatar_1_$ref_qtvln3(), null);
    return tmp0.v1();
  }
  var avatar_1$delegate;
  function get_avatar_10(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = avatar_10$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('avatar_10', 1, tmp, _get_avatar_10_$ref_qwum79(), null);
    return tmp0.v1();
  }
  var avatar_10$delegate;
  function get_avatar_11(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = avatar_11$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('avatar_11', 1, tmp, _get_avatar_11_$ref_qfszt2(), null);
    return tmp0.v1();
  }
  var avatar_11$delegate;
  function get_avatar_2(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = avatar_2$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('avatar_2', 1, tmp, _get_avatar_2_$ref_rax81a(), null);
    return tmp0.v1();
  }
  var avatar_2$delegate;
  function get_avatar_3(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = avatar_3$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('avatar_3', 1, tmp, _get_avatar_3_$ref_rryufh(), null);
    return tmp0.v1();
  }
  var avatar_3$delegate;
  function get_avatar_4(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = avatar_4$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('avatar_4', 1, tmp, _get_avatar_4_$ref_s90gto(), null);
    return tmp0.v1();
  }
  var avatar_4$delegate;
  function get_avatar_5(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = avatar_5$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('avatar_5', 1, tmp, _get_avatar_5_$ref_sq237v(), null);
    return tmp0.v1();
  }
  var avatar_5$delegate;
  function get_avatar_6(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = avatar_6$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('avatar_6', 1, tmp, _get_avatar_6_$ref_t73pm2(), null);
    return tmp0.v1();
  }
  var avatar_6$delegate;
  function get_avatar_7(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = avatar_7$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('avatar_7', 1, tmp, _get_avatar_7_$ref_to5c09(), null);
    return tmp0.v1();
  }
  var avatar_7$delegate;
  function get_avatar_8(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = avatar_8$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('avatar_8', 1, tmp, _get_avatar_8_$ref_u56yeg(), null);
    return tmp0.v1();
  }
  var avatar_8$delegate;
  function get_avatar_9(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = avatar_9$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('avatar_9', 1, tmp, _get_avatar_9_$ref_um8ksn(), null);
    return tmp0.v1();
  }
  var avatar_9$delegate;
  var compose_multiplatform$delegate;
  function get_ic_apps(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = ic_apps$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ic_apps', 1, tmp, _get_ic_apps_$ref_n1jnu1(), null);
    return tmp0.v1();
  }
  var ic_apps$delegate;
  var ic_close$delegate;
  function get_ic_folder(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = ic_folder$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ic_folder', 1, tmp, _get_ic_folder_$ref_90ggib(), null);
    return tmp0.v1();
  }
  var ic_folder$delegate;
  var ic_launcher_background$delegate;
  var ic_launcher_foreground$delegate;
  function get_ic_mail(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = ic_mail$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ic_mail', 1, tmp, _get_ic_mail_$ref_lowe64(), null);
    return tmp0.v1();
  }
  var ic_mail$delegate;
  function get_ic_message(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = ic_message$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ic_message', 1, tmp, _get_ic_message_$ref_dzngwo(), null);
    return tmp0.v1();
  }
  var ic_message$delegate;
  function get_ic_more_horizontal(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = ic_more_horizontal$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ic_more_horizontal', 1, tmp, _get_ic_more_horizontal_$ref_nustxr(), null);
    return tmp0.v1();
  }
  var ic_more_horizontal$delegate;
  function get_ic_paper_plane(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = ic_paper_plane$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ic_paper_plane', 1, tmp, _get_ic_paper_plane_$ref_i0ebp2(), null);
    return tmp0.v1();
  }
  var ic_paper_plane$delegate;
  function get_ic_search(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = ic_search$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ic_search', 1, tmp, _get_ic_search_$ref_jrgqdp(), null);
    return tmp0.v1();
  }
  var ic_search$delegate;
  function get_ic_settings(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = ic_settings$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ic_settings', 1, tmp, _get_ic_settings_$ref_xw9c9k(), null);
    return tmp0.v1();
  }
  var ic_settings$delegate;
  var jelly$delegate;
  var more_horizontal$delegate;
  function avatar_1$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:avatar_1', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/avatar_1.jpg', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_avatar_1_$ref_qtvln3() {
    return function (p0) {
      return get_avatar_1(p0);
    };
  }
  function avatar_10$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:avatar_10', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/avatar_10.jpg', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_avatar_10_$ref_qwum79() {
    return function (p0) {
      return get_avatar_10(p0);
    };
  }
  function avatar_11$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:avatar_11', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/avatar_11.jpg', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_avatar_11_$ref_qfszt2() {
    return function (p0) {
      return get_avatar_11(p0);
    };
  }
  function avatar_2$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:avatar_2', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/avatar_2.jpg', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_avatar_2_$ref_rax81a() {
    return function (p0) {
      return get_avatar_2(p0);
    };
  }
  function avatar_3$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:avatar_3', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/avatar_3.jpg', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_avatar_3_$ref_rryufh() {
    return function (p0) {
      return get_avatar_3(p0);
    };
  }
  function avatar_4$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:avatar_4', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/avatar_4.jpg', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_avatar_4_$ref_s90gto() {
    return function (p0) {
      return get_avatar_4(p0);
    };
  }
  function avatar_5$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:avatar_5', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/avatar_5.jpg', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_avatar_5_$ref_sq237v() {
    return function (p0) {
      return get_avatar_5(p0);
    };
  }
  function avatar_6$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:avatar_6', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/avatar_6.jpg', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_avatar_6_$ref_t73pm2() {
    return function (p0) {
      return get_avatar_6(p0);
    };
  }
  function avatar_7$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:avatar_7', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/avatar_7.jpg', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_avatar_7_$ref_to5c09() {
    return function (p0) {
      return get_avatar_7(p0);
    };
  }
  function avatar_8$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:avatar_8', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/avatar_8.jpg', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_avatar_8_$ref_u56yeg() {
    return function (p0) {
      return get_avatar_8(p0);
    };
  }
  function avatar_9$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:avatar_9', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/avatar_9.jpg', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_avatar_9_$ref_um8ksn() {
    return function (p0) {
      return get_avatar_9(p0);
    };
  }
  function compose_multiplatform$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:compose_multiplatform', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/compose-multiplatform.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function ic_apps$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic_apps', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/ic_apps.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_ic_apps_$ref_n1jnu1() {
    return function (p0) {
      return get_ic_apps(p0);
    };
  }
  function ic_close$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic_close', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/ic_close.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function ic_folder$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic_folder', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/ic_folder.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_ic_folder_$ref_90ggib() {
    return function (p0) {
      return get_ic_folder(p0);
    };
  }
  function ic_launcher_background$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic_launcher_background', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/ic_launcher_background.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function ic_launcher_foreground$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic_launcher_foreground', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/ic_launcher_foreground.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function ic_mail$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic_mail', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/ic_mail.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_ic_mail_$ref_lowe64() {
    return function (p0) {
      return get_ic_mail(p0);
    };
  }
  function ic_message$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic_message', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/ic_message.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_ic_message_$ref_dzngwo() {
    return function (p0) {
      return get_ic_message(p0);
    };
  }
  function ic_more_horizontal$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic_more_horizontal', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/ic_more_horizontal.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_ic_more_horizontal_$ref_nustxr() {
    return function (p0) {
      return get_ic_more_horizontal(p0);
    };
  }
  function ic_paper_plane$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic_paper_plane', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/ic_paper_plane.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_ic_paper_plane_$ref_i0ebp2() {
    return function (p0) {
      return get_ic_paper_plane(p0);
    };
  }
  function ic_search$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic_search', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/ic_search.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_ic_search_$ref_jrgqdp() {
    return function (p0) {
      return get_ic_search(p0);
    };
  }
  function ic_settings$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:ic_settings', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/ic_settings.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_ic_settings_$ref_xw9c9k() {
    return function (p0) {
      return get_ic_settings(p0);
    };
  }
  function jelly$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:jelly', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/jelly.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function more_horizontal$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:more_horizontal', setOf(new ResourceItem(tmp$ret$0, 'composeResources/jellyfab.composeapp.generated.resources/drawable/more_horizontal.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  var properties_initialized_Drawable0_commonMain_kt_e3wo9q;
  function _init_properties_Drawable0_commonMain_kt__plv2f4() {
    if (!properties_initialized_Drawable0_commonMain_kt_e3wo9q) {
      properties_initialized_Drawable0_commonMain_kt_e3wo9q = true;
      avatar_1$delegate = lazy(avatar_1$delegate$lambda);
      avatar_10$delegate = lazy(avatar_10$delegate$lambda);
      avatar_11$delegate = lazy(avatar_11$delegate$lambda);
      avatar_2$delegate = lazy(avatar_2$delegate$lambda);
      avatar_3$delegate = lazy(avatar_3$delegate$lambda);
      avatar_4$delegate = lazy(avatar_4$delegate$lambda);
      avatar_5$delegate = lazy(avatar_5$delegate$lambda);
      avatar_6$delegate = lazy(avatar_6$delegate$lambda);
      avatar_7$delegate = lazy(avatar_7$delegate$lambda);
      avatar_8$delegate = lazy(avatar_8$delegate$lambda);
      avatar_9$delegate = lazy(avatar_9$delegate$lambda);
      compose_multiplatform$delegate = lazy(compose_multiplatform$delegate$lambda);
      ic_apps$delegate = lazy(ic_apps$delegate$lambda);
      ic_close$delegate = lazy(ic_close$delegate$lambda);
      ic_folder$delegate = lazy(ic_folder$delegate$lambda);
      ic_launcher_background$delegate = lazy(ic_launcher_background$delegate$lambda);
      ic_launcher_foreground$delegate = lazy(ic_launcher_foreground$delegate$lambda);
      ic_mail$delegate = lazy(ic_mail$delegate$lambda);
      ic_message$delegate = lazy(ic_message$delegate$lambda);
      ic_more_horizontal$delegate = lazy(ic_more_horizontal$delegate$lambda);
      ic_paper_plane$delegate = lazy(ic_paper_plane$delegate$lambda);
      ic_search$delegate = lazy(ic_search$delegate$lambda);
      ic_settings$delegate = lazy(ic_settings$delegate$lambda);
      jelly$delegate = lazy(jelly$delegate$lambda);
      more_horizontal$delegate = lazy(more_horizontal$delegate$lambda);
    }
  }
  var jellyfab_composeapp_generated_resources_Res_drawable$stable;
  var jellyfab_composeapp_generated_resources_Res_string$stable;
  var jellyfab_composeapp_generated_resources_Res_array$stable;
  var jellyfab_composeapp_generated_resources_Res_plurals$stable;
  var jellyfab_composeapp_generated_resources_Res_font$stable;
  var jellyfab_composeapp_generated_resources_Res$stable;
  function drawable() {
  }
  var drawable_instance;
  function drawable_getInstance() {
    return drawable_instance;
  }
  function App($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t24(-786142807);
    sourceInformation($composer_0, 'C(App)14@489L233:App.kt#piho0p');
    if ($composer_0.q25(!($changed === 0), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-786142807, $changed, -1, 'io.github.iprashantpanwar.composeApp.App (App.kt:13)');
      }
      JellyFabTheme(false, false, ComposableSingletons$AppKt_getInstance().ci8_1, $composer_0, 384, 3);
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
      tmp0_safe_receiver.s2q(App$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a3h(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppKt$lambda$_1408130363$lambda_gfy9ff(it, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C18@606L100:App.kt#piho0p');
    if ($composer_0.q25(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1408130363, $changed, -1, 'io.github.iprashantpanwar.composeApp.ComposableSingletons$AppKt.lambda$-1408130363.<anonymous> (App.kt:18)');
      }
      ChatListScreen(fillMaxSize(Companion_instance), $composer_0, 6, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y24();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.e2k(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppKt$lambda$314405174$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C16@570L11,15@513L203:App.kt#piho0p');
    if ($composer_0.q25(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(314405174, $changed, -1, 'io.github.iprashantpanwar.composeApp.ComposableSingletons$AppKt.lambda$314405174.<anonymous> (App.kt:15)');
      }
      var tmp = _FabPosition___init__impl__9ib2hj(0);
      var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      Scaffold(null, null, null, null, null, tmp, tmp_0, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), get_safeDrawing(Companion_instance_0, $composer_0, 6), ComposableSingletons$AppKt_getInstance().bi8_1, $composer_0, 805306368, 255);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y24();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AppKt() {
    ComposableSingletons$AppKt_instance = this;
    var tmp = this;
    tmp.bi8_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1408130363, false, ComposableSingletons$AppKt$lambda$_1408130363$lambda_gfy9ff));
    var tmp_0 = this;
    tmp_0.ci8_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(314405174, false, ComposableSingletons$AppKt$lambda$314405174$lambda));
  }
  var ComposableSingletons$AppKt_instance;
  function ComposableSingletons$AppKt_getInstance() {
    if (ComposableSingletons$AppKt_instance == null)
      new ComposableSingletons$AppKt();
    return ComposableSingletons$AppKt_instance;
  }
  function App$lambda($$changed) {
    return function ($composer, $force) {
      App($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function get_chats() {
    _init_properties_ChatListDemoScreen_kt__uinghx();
    return chats;
  }
  var chats;
  function ChatListScreen(modifier, $composer, $changed, $default) {
    _init_properties_ChatListDemoScreen_kt__uinghx();
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t24(1179879845);
    sourceInformation($composer_0, 'C(ChatListScreen)132@4902L22,132@4885L39,133@4949L224,144@5227L47,144@5276L2,145@5301L39,145@5342L2,146@5367L36,146@5405L2,150@5470L40,150@5512L2,151@5537L38,151@5577L2,152@5602L36,152@5640L2,153@5665L43,153@5710L2,156@5744L25,157@5795L27,158@5844L23,160@5873L832:ChatListDemoScreen.kt#piho0p');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.j25(modifier_0._v) ? 4 : 2);
    if ($composer_0.q25(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(1179879845, $dirty, -1, 'io.github.iprashantpanwar.composeApp.ChatListScreen (ChatListDemoScreen.kt:131)');
      }
      sourceInformationMarkerStart($composer_0, -6831941, 'CC(remember):ChatListDemoScreen.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.h25();
      var tmp;
      if (false || it === Companion_getInstance().i24_1) {
        var value = ChatListScreen$lambda_1;
        this_0.i25(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var searchText$delegate = rememberSaveable([], tmp0_group, $composer_0, 48);
      var tmp1_remember$arg$0 = ChatListScreen$lambda(searchText$delegate);
      sourceInformationMarkerStart($composer_0, -6830235, 'CC(remember):ChatListDemoScreen.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.j25(tmp1_remember$arg$0);
      // Inline function 'kotlin.let' call
      var it_0 = tmp0.h25();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().i24_1) {
        var tmp_2;
        if (isBlank(ChatListScreen$lambda(searchText$delegate))) {
          tmp_2 = get_chats();
        } else {
          // Inline function 'kotlin.collections.filter' call
          var tmp0_0 = get_chats();
          // Inline function 'kotlin.collections.filterTo' call
          var destination = ArrayList_init_$Create$();
          var _iterator__ex2g4s = tmp0_0.i();
          while (_iterator__ex2g4s.j()) {
            var element = _iterator__ex2g4s.k();
            if (contains(element.di8_1, ChatListScreen$lambda(searchText$delegate), true)) {
              destination.h(element);
            }
          }
          tmp_2 = destination;
        }
        var value_0 = tmp_2;
        tmp0.i25(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_3 = tmp_1;
      var tmp2_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var filteredChats = tmp2_group;
      var tmp_4 = vectorResource(get_ic_more_horizontal(drawable_instance), $composer_0, 0);
      sourceInformationMarkerStart($composer_0, -6819993, 'CC(remember):ChatListDemoScreen.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_1 = this_1.h25();
      var tmp_5;
      if (false || it_1 === Companion_getInstance().i24_1) {
        var value_1 = ChatListScreen$lambda_2;
        this_1.i25(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = it_1;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_7 = new JellyFabItem(tmp_4, tmp3_group);
      var tmp_8 = vectorResource(get_ic_message(drawable_instance), $composer_0, 0);
      sourceInformationMarkerStart($composer_0, -6817881, 'CC(remember):ChatListDemoScreen.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_2 = this_2.h25();
      var tmp_9;
      if (false || it_2 === Companion_getInstance().i24_1) {
        var value_2 = ChatListScreen$lambda_3;
        this_2.i25(value_2);
        tmp_9 = value_2;
      } else {
        tmp_9 = it_2;
      }
      var tmp_10 = tmp_9;
      var tmp4_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_11 = new JellyFabItem(tmp_8, tmp4_group);
      var tmp_12 = vectorResource(get_ic_apps(drawable_instance), $composer_0, 0);
      sourceInformationMarkerStart($composer_0, -6815865, 'CC(remember):ChatListDemoScreen.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_3 = this_3.h25();
      var tmp_13;
      if (false || it_3 === Companion_getInstance().i24_1) {
        var value_3 = ChatListScreen$lambda_4;
        this_3.i25(value_3);
        tmp_13 = value_3;
      } else {
        tmp_13 = it_3;
      }
      var tmp_14 = tmp_13;
      var tmp5_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var primaryLayer = listOf([tmp_7, tmp_11, new JellyFabItem(tmp_12, tmp5_group)]);
      var tmp_15 = vectorResource(get_ic_settings(drawable_instance), $composer_0, 0);
      sourceInformationMarkerStart($composer_0, -6812441, 'CC(remember):ChatListDemoScreen.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_4 = this_4.h25();
      var tmp_16;
      if (false || it_4 === Companion_getInstance().i24_1) {
        var value_4 = ChatListScreen$lambda_5;
        this_4.i25(value_4);
        tmp_16 = value_4;
      } else {
        tmp_16 = it_4;
      }
      var tmp_17 = tmp_16;
      var tmp6_group = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_18 = new JellyFabItem(tmp_15, tmp6_group);
      var tmp_19 = vectorResource(get_ic_folder(drawable_instance), $composer_0, 0);
      sourceInformationMarkerStart($composer_0, -6810361, 'CC(remember):ChatListDemoScreen.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_5 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_5 = this_5.h25();
      var tmp_20;
      if (false || it_5 === Companion_getInstance().i24_1) {
        var value_5 = ChatListScreen$lambda_6;
        this_5.i25(value_5);
        tmp_20 = value_5;
      } else {
        tmp_20 = it_5;
      }
      var tmp_21 = tmp_20;
      var tmp7_group = (tmp_21 == null ? true : !(tmp_21 == null)) ? tmp_21 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_22 = new JellyFabItem(tmp_19, tmp7_group);
      var tmp_23 = vectorResource(get_ic_mail(drawable_instance), $composer_0, 0);
      sourceInformationMarkerStart($composer_0, -6808345, 'CC(remember):ChatListDemoScreen.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_6 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_6 = this_6.h25();
      var tmp_24;
      if (false || it_6 === Companion_getInstance().i24_1) {
        var value_6 = ChatListScreen$lambda_7;
        this_6.i25(value_6);
        tmp_24 = value_6;
      } else {
        tmp_24 = it_6;
      }
      var tmp_25 = tmp_24;
      var tmp8_group = (tmp_25 == null ? true : !(tmp_25 == null)) ? tmp_25 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_26 = new JellyFabItem(tmp_23, tmp8_group);
      var tmp_27 = vectorResource(get_ic_paper_plane(drawable_instance), $composer_0, 0);
      sourceInformationMarkerStart($composer_0, -6806105, 'CC(remember):ChatListDemoScreen.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_7 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_7 = this_7.h25();
      var tmp_28;
      if (false || it_7 === Companion_getInstance().i24_1) {
        var value_7 = ChatListScreen$lambda_8;
        this_7.i25(value_7);
        tmp_28 = value_7;
      } else {
        tmp_28 = it_7;
      }
      var tmp_29 = tmp_28;
      var tmp9_group = (tmp_29 == null ? true : !(tmp_29 == null)) ? tmp_29 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var secondaryLayer = listOf([tmp_18, tmp_22, tmp_26, new JellyFabItem(tmp_27, tmp9_group)]);
      sourceInformationMarkerStart($composer_0, -6804994, 'CC(remember):ChatListDemoScreen.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_8 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_8 = this_8.h25();
      var tmp_30;
      if (false || it_8 === Companion_getInstance().i24_1) {
        var value_8 = primaryLayer;
        this_8.i25(value_8);
        tmp_30 = value_8;
      } else {
        tmp_30 = it_8;
      }
      var tmp_31 = tmp_30;
      var tmp10_group = (tmp_31 == null ? true : !(tmp_31 == null)) ? tmp_31 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var primaryItems = tmp10_group;
      sourceInformationMarkerStart($composer_0, -6803360, 'CC(remember):ChatListDemoScreen.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_9 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_9 = this_9.h25();
      var tmp_32;
      if (false || it_9 === Companion_getInstance().i24_1) {
        var value_9 = secondaryLayer;
        this_9.i25(value_9);
        tmp_32 = value_9;
      } else {
        tmp_32 = it_9;
      }
      var tmp_33 = tmp_32;
      var tmp11_group = (tmp_33 == null ? true : !(tmp_33 == null)) ? tmp_33 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var secondaryItems = tmp11_group;
      var jellyState = rememberJellyFabState(false, false, $composer_0, 0, 3);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_1 = background(fillMaxSize(modifier_0._v), Companion_getInstance_0().x4q_1);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1042775818, 'CC(Box)P(2,1,3)71@3424L131:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().p6a_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1159599143, 'CC(Layout)P(!1,2)80@3267L27,83@3433L360:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.s25();
      var materialized = materialize($composer_2, modifier_2);
      var tmp0_1 = Companion_getInstance_2().q87_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
      var tmp_34 = $composer_3.j24();
      if (!isInterface(tmp_34, Applier)) {
        invalidApplier();
      }
      $composer_3.a25();
      if ($composer_3.k24()) {
        $composer_3.b25(tmp0_1);
      } else {
        $composer_3.c25();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().v87_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().u87_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().y87_1;
      // Inline function 'kotlin.with' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.k24() || !equals($this$with.h25(), compositeKeyHash)) {
        $this$with.i25(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).g25(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().s87_1);
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 1833054614, 'C72@3469L9:Box.kt#2w3rfo');
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -2025615397, 'C165@5986L567,190@6563L136:ChatListDemoScreen.kt#piho0p');
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_3 = fillMaxSize(Companion_instance);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 1341605231, 'CC(Column)P(2,3,1)87@4443L61,88@4509L134:Column.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_3 = Companion_instance;
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().naj_1;
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().b6b_1;
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_6, 14 & 6 >> 3 | 112 & 6 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1159599143, 'CC(Layout)P(!1,2)80@3267L27,83@3433L360:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.s25();
      var materialized_0 = materialize($composer_7, modifier_4);
      var tmp0_2 = Companion_getInstance_2().q87_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
      var tmp_35 = $composer_8.j24();
      if (!isInterface(tmp_35, Applier)) {
        invalidApplier();
      }
      $composer_8.a25();
      if ($composer_8.k24()) {
        $composer_8.b25(tmp0_2);
      } else {
        $composer_8.c25();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().v87_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().u87_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_2().y87_1;
      // Inline function 'kotlin.with' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.k24() || !equals($this$with_0.h25(), compositeKeyHash_0)) {
        $this$with_0.i25(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).g25(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().s87_1);
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, 2093002350, 'C89@4557L9:Column.kt#2w3rfo');
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, 1238207292, 'C169@6065L16,173@6174L19,171@6095L112,176@6221L29,180@6337L206,178@6264L279:ChatListDemoScreen.kt#piho0p');
      MessagesHeader($composer_10, 0);
      var tmp_36 = ChatListScreen$lambda(searchText$delegate);
      sourceInformationMarkerStart($composer_10, 455587196, 'CC(remember):ChatListDemoScreen.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_10.j25(searchText$delegate);
      // Inline function 'kotlin.let' call
      var it_10 = $composer_10.h25();
      var tmp_37;
      if (invalid_0 || it_10 === Companion_getInstance().i24_1) {
        var value_10 = ChatListScreen$lambda_9(searchText$delegate);
        $composer_10.i25(value_10);
        tmp_37 = value_10;
      } else {
        tmp_37 = it_10;
      }
      var tmp_38 = tmp_37;
      var tmp0_group_0 = (tmp_38 == null ? true : !(tmp_38 == null)) ? tmp_38 : THROW_CCE();
      sourceInformationMarkerEnd($composer_10);
      SearchBar(tmp_36, tmp0_group_0, $composer_10, 0);
      var tmp_39 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$59 = _Dp___init__impl__ms3zkb(8);
      Spacer(height(tmp_39, tmp$ret$59), $composer_10, 6);
      var tmp_40 = ColumnScopeInstance_instance.hal(Companion_instance, 1.0);
      sourceInformationMarkerStart($composer_10, 455592599, 'CC(remember):ChatListDemoScreen.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_10.p25(filteredChats);
      // Inline function 'kotlin.let' call
      var it_11 = $composer_10.h25();
      var tmp_41;
      if (invalid_1 || it_11 === Companion_getInstance().i24_1) {
        var value_11 = ChatListScreen$lambda_10(filteredChats);
        $composer_10.i25(value_11);
        tmp_41 = value_11;
      } else {
        tmp_41 = it_11;
      }
      var tmp_42 = tmp_41;
      var tmp1_group = (tmp_42 == null ? true : !(tmp_42 == null)) ? tmp_42 : THROW_CCE();
      sourceInformationMarkerEnd($composer_10);
      LazyColumn(tmp_40, null, null, false, null, null, null, false, null, tmp1_group, $composer_10, 0, 510);
      sourceInformationMarkerEnd($composer_10);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.d25();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      var tmp_43 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_44 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_45 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_46 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      JellyFab(null, jellyState, tmp_43, tmp_44, tmp_45, tmp_46, primaryItems, secondaryItems, false, null, $composer_5, 0, 829);
      sourceInformationMarkerEnd($composer_5);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.d25();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y24();
    }
    var tmp12_safe_receiver = $composer_0.u24();
    if (tmp12_safe_receiver == null)
      null;
    else {
      tmp12_safe_receiver.s2q(ChatListScreen$lambda_11(modifier_0, $changed, $default));
    }
  }
  function MessagesHeader($composer, $changed) {
    _init_properties_ChatListDemoScreen_kt__uinghx();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t24(1314027731);
    sourceInformation($composer_0, 'C(MessagesHeader)200@6756L30,202@6792L272,213@7070L30:ChatListDemoScreen.kt#piho0p');
    if ($composer_0.q25(!($changed === 0), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1314027731, $changed, -1, 'io.github.iprashantpanwar.composeApp.MessagesHeader (ChatListDemoScreen.kt:199)');
      }
      var tmp = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(24);
      Spacer(height(tmp, tmp$ret$0), $composer_0, 6);
      var tmp_0 = fillMaxWidth(Companion_instance);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(24);
      var tmp0_modifier = padding(tmp_0, tmp$ret$1);
      var tmp1_textAlign = Companion_getInstance_3().v5l_1;
      var tmp2_fontSize = get_sp(24);
      var tmp3_fontWeight = Companion_getInstance_4().u5p_1;
      var tmp4_color = Color(new Long(-16770487, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('Messages', tmp0_modifier, tmp4_color, null, tmp2_fontSize, null, tmp3_fontWeight, null, tmp_1, null, tmp1_textAlign, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 1597878, 0, 261032);
      var tmp_4 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(16);
      Spacer(height(tmp_4, tmp$ret$2), $composer_0, 6);
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
      tmp0_safe_receiver.s2q(MessagesHeader$lambda($changed));
    }
  }
  function SearchBar(value, onValueChange, $composer, $changed) {
    _init_properties_ChatListDemoScreen_kt__uinghx();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t24(642476747);
    sourceInformation($composer_0, 'C(SearchBar)P(1)221@7240L7,243@7897L387,253@8352L57,222@7252L1174:ChatListDemoScreen.kt#piho0p');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.j25(value) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.p25(onValueChange) ? 32 : 16);
    if ($composer_0.q25(!(($dirty & 19) === 18), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(642476747, $dirty, -1, 'io.github.iprashantpanwar.composeApp.SearchBar (ChatListDemoScreen.kt:220)');
      }
      var tmp0 = get_LocalFocusManager();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.t25(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var focusManager = tmp0_0;
      var tmp = fillMaxWidth(Companion_instance);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(24);
      var tmp8_modifier = padding(tmp, tmp$ret$1);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(24);
      var tmp9_shape = RoundedCornerShape(tmp$ret$2);
      var tmp0_$this = TextFieldDefaults_getInstance();
      var tmp1_focusedContainerColor = Color(new Long(-722945, 0));
      var tmp2_unfocusedContainerColor = Color(new Long(-722945, 0));
      var tmp3_focusedIndicatorColor = Companion_getInstance_0().e4r_1;
      var tmp4_unfocusedIndicatorColor = Companion_getInstance_0().e4r_1;
      var tmp5_cursorColor = Color(new Long(-13685202, 0));
      var tmp6_focusedTextColor = Color(new Long(-16316665, 0));
      var tmp7_unfocusedTextColor = Color(new Long(-10395295, 0));
      var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_6 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_8 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_9 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_10 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_11 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_12 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_13 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_14 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_15 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_16 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_17 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_18 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_19 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_20 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_21 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_22 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_23 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_24 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_25 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_26 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_27 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_28 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_29 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_30 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_31 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_32 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_33 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp10_colors = tmp0_$this.jhd(tmp6_focusedTextColor, tmp7_unfocusedTextColor, tmp_0, tmp_1, tmp1_focusedContainerColor, tmp2_unfocusedContainerColor, tmp_2, tmp_3, tmp5_cursorColor, tmp_4, null, tmp3_focusedIndicatorColor, tmp4_unfocusedIndicatorColor, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp_22, tmp_23, tmp_24, tmp_25, tmp_26, tmp_27, tmp_28, tmp_29, tmp_30, tmp_31, tmp_32, tmp_33, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 100884534, 432, 0, 0, 3072, 2147477196, 4095);
      sourceInformationMarkerStart($composer_0, -1055097404, 'CC(remember):ChatListDemoScreen.kt#9igjgp');
      var tmp0_1 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.p25(focusManager);
      // Inline function 'kotlin.let' call
      var it = tmp0_1.h25();
      var tmp_34;
      if (invalid || it === Companion_getInstance().i24_1) {
        var value_0 = SearchBar$lambda(focusManager);
        tmp0_1.i25(value_0);
        tmp_34 = value_0;
      } else {
        tmp_34 = it;
      }
      var tmp_35 = tmp_34;
      var tmp0_group = (tmp_35 == null ? true : !(tmp_35 == null)) ? tmp_35 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp11_keyboardActions = new KeyboardActions(VOID, VOID, VOID, VOID, tmp0_group);
      var tmp_36 = ComposableSingletons$ChatListDemoScreenKt_getInstance().hi8_1;
      var tmp_37 = ComposableSingletons$ChatListDemoScreenKt_getInstance().ii8_1;
      OutlinedTextField(value, onValueChange, tmp8_modifier, false, false, null, null, tmp_36, null, tmp_37, null, null, null, false, null, null, tmp11_keyboardActions, true, 0, 0, null, tmp9_shape, tmp10_colors, $composer_0, 817889664 | 14 & $dirty | 112 & $dirty, 12582912, 0, 1899896);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y24();
    }
    var tmp1_safe_receiver = $composer_0.u24();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.s2q(SearchBar$lambda_0(value, onValueChange, $changed));
    }
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.e2k(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$ChatListDemoScreenKt$lambda$_1346012348$lambda_bm8fue($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C236@7686L94:ChatListDemoScreen.kt#piho0p');
    if ($composer_0.q25(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1346012348, $changed, -1, 'io.github.iprashantpanwar.composeApp.ComposableSingletons$ChatListDemoScreenKt.lambda$-1346012348.<anonymous> (ChatListDemoScreen.kt:236)');
      }
      var tmp = Color(new Long(-10395295, 0));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('Search People', null, tmp, null, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 390, 0, 262138);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y24();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.e2k(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$ChatListDemoScreenKt$lambda$_1930783998$lambda_tdnd0p($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C230@7500L39,229@7468L170:ChatListDemoScreen.kt#piho0p');
    if ($composer_0.q25(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1930783998, $changed, -1, 'io.github.iprashantpanwar.composeApp.ComposableSingletons$ChatListDemoScreenKt.lambda$-1930783998.<anonymous> (ChatListDemoScreen.kt:229)');
      }
      var tmp = painterResource(get_ic_search(drawable_instance), $composer_0, 0);
      Icon(tmp, null, null, Color(new Long(-8552832, 0)), $composer_0, 3120, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y24();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.e2k(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$ChatListDemoScreenKt$lambda$118949569$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C264@8505L16:ChatListDemoScreen.kt#piho0p');
    if ($composer_0.q25(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(118949569, $changed, -1, 'io.github.iprashantpanwar.composeApp.ComposableSingletons$ChatListDemoScreenKt.lambda$118949569.<anonymous> (ChatListDemoScreen.kt:264)');
      }
      ChatListScreen(null, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y24();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ChatListDemoScreenKt() {
    ComposableSingletons$ChatListDemoScreenKt_instance = this;
    var tmp = this;
    tmp.hi8_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1346012348, false, ComposableSingletons$ChatListDemoScreenKt$lambda$_1346012348$lambda_bm8fue));
    var tmp_0 = this;
    tmp_0.ii8_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-1930783998, false, ComposableSingletons$ChatListDemoScreenKt$lambda$_1930783998$lambda_tdnd0p));
    var tmp_1 = this;
    tmp_1.ji8_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(118949569, false, ComposableSingletons$ChatListDemoScreenKt$lambda$118949569$lambda));
  }
  var ComposableSingletons$ChatListDemoScreenKt_instance;
  function ComposableSingletons$ChatListDemoScreenKt_getInstance() {
    if (ComposableSingletons$ChatListDemoScreenKt_instance == null)
      new ComposableSingletons$ChatListDemoScreenKt();
    return ComposableSingletons$ChatListDemoScreenKt_instance;
  }
  function ChatListScreen$lambda($searchText$delegate) {
    _init_properties_ChatListDemoScreen_kt__uinghx();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('searchText', KMutableProperty0, true);
    return $searchText$delegate.v1();
  }
  function ChatListScreen$lambda_0($searchText$delegate, _set____db54di) {
    _init_properties_ChatListDemoScreen_kt__uinghx();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('searchText', KMutableProperty0, true);
    $searchText$delegate.t1k(_set____db54di);
    return Unit_instance;
  }
  function ChatListScreen$lambda_1() {
    _init_properties_ChatListDemoScreen_kt__uinghx();
    return mutableStateOf('');
  }
  function ChatListScreen$lambda_2() {
    _init_properties_ChatListDemoScreen_kt__uinghx();
    return Unit_instance;
  }
  function ChatListScreen$lambda_3() {
    _init_properties_ChatListDemoScreen_kt__uinghx();
    return Unit_instance;
  }
  function ChatListScreen$lambda_4() {
    _init_properties_ChatListDemoScreen_kt__uinghx();
    return Unit_instance;
  }
  function ChatListScreen$lambda_5() {
    _init_properties_ChatListDemoScreen_kt__uinghx();
    return Unit_instance;
  }
  function ChatListScreen$lambda_6() {
    _init_properties_ChatListDemoScreen_kt__uinghx();
    return Unit_instance;
  }
  function ChatListScreen$lambda_7() {
    _init_properties_ChatListDemoScreen_kt__uinghx();
    return Unit_instance;
  }
  function ChatListScreen$lambda_8() {
    _init_properties_ChatListDemoScreen_kt__uinghx();
    return Unit_instance;
  }
  function ChatListScreen$lambda_9($searchText$delegate) {
    return function (it) {
      ChatListScreen$lambda_0($searchText$delegate, it);
      return Unit_instance;
    };
  }
  function ChatListScreen$lambda$lambda(it) {
    _init_properties_ChatListDemoScreen_kt__uinghx();
    return it.di8_1;
  }
  function ChatListScreen$lambda$lambda_0(it) {
    _init_properties_ChatListDemoScreen_kt__uinghx();
    return null;
  }
  function ChatListScreen$lambda$lambda_1($key, $items) {
    return function (index) {
      return $key($items.m(index));
    };
  }
  function ChatListScreen$lambda$lambda_2($contentType, $items) {
    return function (index) {
      return $contentType($items.m(index));
    };
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0, p1, p2) {
      p0.b3h(_this__u8e3s4, p0_0, p1, p2);
      return Unit_instance;
    };
  }
  function ChatListScreen$lambda$lambda_3($items) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C178@8834L22:LazyDsl.kt#428nma');
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.j25($this$items) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (($changed & 48) === 0) {
        $dirty = $dirty | ($composer_0.l25(it) ? 32 : 16);
        tmp_0 = Unit_instance;
      }
      var tmp_1;
      if (!(($dirty & 147) === 146) || !$composer_0.l24()) {
        if (isTraceInProgress()) {
          traceEventStart(802480018, $dirty, -1, 'androidx.compose.foundation.lazy.items.<anonymous> (LazyDsl.kt:178)');
        }
        var tmp2 = $items.m(it);
        var $changed_0 = 14 & $dirty;
        var $composer_1 = $composer_0;
        $composer_1.p24(-37117659);
        sourceInformation($composer_1, 'C*185@6491L20:ChatListDemoScreen.kt#piho0p');
        ChatRow(null, tmp2, $composer_1, 112 & $changed_0, 1);
        $composer_1.q24();
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp_1 = tmp_2;
      } else {
        $composer_0.y24();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ChatListScreen$lambda_10($filteredChats) {
    return function ($this$LazyColumn) {
      var tmp2 = $filteredChats;
      // Inline function 'androidx.compose.foundation.lazy.items' call
      var key = ChatListScreen$lambda$lambda;
      var contentType = ChatListScreen$lambda$lambda_0;
      var tmp = tmp2.l();
      var tmp_0;
      if (!(key == null)) {
        tmp_0 = ChatListScreen$lambda$lambda_1(key, tmp2);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = ChatListScreen$lambda$lambda_2(contentType, tmp2);
      $this$LazyColumn.ndf(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_4(composableLambdaInstance(802480018, true, ChatListScreen$lambda$lambda_3(tmp2))));
      return Unit_instance;
    };
  }
  function ChatListScreen$lambda_11($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      ChatListScreen($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function MessagesHeader$lambda($$changed) {
    return function ($composer, $force) {
      MessagesHeader($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SearchBar$lambda($focusManager) {
    return function ($this$KeyboardActions) {
      $focusManager.a6t();
      return Unit_instance;
    };
  }
  function SearchBar$lambda_0($value, $onValueChange, $$changed) {
    return function ($composer, $force) {
      SearchBar($value, $onValueChange, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_ChatListDemoScreen_kt_13fb47;
  function _init_properties_ChatListDemoScreen_kt__uinghx() {
    if (!properties_initialized_ChatListDemoScreen_kt_13fb47) {
      properties_initialized_ChatListDemoScreen_kt_13fb47 = true;
      chats = listOf([new ChatPreview('Selin Daria', 'typing...', '12:32PM', get_avatar_1(drawable_instance)), new ChatPreview('Parth Patel', 'What are you doing tonight?', '12:35PM', get_avatar_2(drawable_instance)), new ChatPreview('John Oliver', 'Yes, it is really awesome!', '09:47PM', get_avatar_3(drawable_instance)), new ChatPreview('Mary Jane', 'Did you see?', 'Yesterday', get_avatar_4(drawable_instance)), new ChatPreview('Joseph William', "Hi! I'm sorry, I forgot about it.", 'Yesterday', get_avatar_5(drawable_instance)), new ChatPreview('Michael Darling', "Let's catchup tomorrow!", '08/06/26', get_avatar_6(drawable_instance)), new ChatPreview('Marcus Santos', "Call Fred, he's waiting.", '08/06/25', get_avatar_7(drawable_instance)), new ChatPreview('Mei Wong', 'Hey! Call me back once free.', '08/06/26', get_avatar_8(drawable_instance)), new ChatPreview('Min-seo', 'That was fun.', '08/06/26', get_avatar_9(drawable_instance)), new ChatPreview('Sebasti\xE1n Rodr\xEDguez', "Let's hangout coming weekend.", '08/06/26', get_avatar_10(drawable_instance)), new ChatPreview('Ada Gumede', 'Yes, that was so cool.', '08/06/26', get_avatar_11(drawable_instance))]);
    }
  }
  var io_github_iprashantpanwar_composeApp_ChatPreview$stable;
  function ChatPreview(name, message, time, avatar) {
    this.di8_1 = name;
    this.ei8_1 = message;
    this.fi8_1 = time;
    this.gi8_1 = avatar;
  }
  protoOf(ChatPreview).toString = function () {
    return 'ChatPreview(name=' + this.di8_1 + ', message=' + this.ei8_1 + ', time=' + this.fi8_1 + ', avatar=' + toString(this.gi8_1) + ')';
  };
  protoOf(ChatPreview).hashCode = function () {
    var result = getStringHashCode(this.di8_1);
    result = imul(result, 31) + getStringHashCode(this.ei8_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.fi8_1) | 0;
    result = imul(result, 31) + this.gi8_1.hashCode() | 0;
    return result;
  };
  protoOf(ChatPreview).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChatPreview))
      return false;
    if (!(this.di8_1 === other.di8_1))
      return false;
    if (!(this.ei8_1 === other.ei8_1))
      return false;
    if (!(this.fi8_1 === other.fi8_1))
      return false;
    if (!this.gi8_1.equals(other.gi8_1))
      return false;
    return true;
  };
  function ChatRow(modifier, item, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t24(-602825310);
    sourceInformation($composer_0, 'C(ChatRow)P(1)31@1133L2,28@1049L859:ChatRow.kt#piho0p');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.j25(modifier_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.j25(item) ? 32 : 16);
    if ($composer_0.q25(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-602825310, $dirty, -1, 'io.github.iprashantpanwar.composeApp.ChatRow (ChatRow.kt:27)');
      }
      var tmp = fillMaxWidth(modifier_0._v);
      sourceInformationMarkerStart($composer_0, 505467236, 'CC(remember):ChatRow.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.h25();
      var tmp_0;
      if (false || it === Companion_getInstance().i24_1) {
        var value = ChatRow$lambda;
        this_0.i25(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_2 = clickable(tmp, VOID, VOID, VOID, VOID, tmp0_group);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_3 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$5 = _Dp___init__impl__ms3zkb(12);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_1 = padding(tmp_2, tmp_3, tmp$ret$5);
      var horizontalArrangement = null;
      var verticalAlignment = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 844473419, 'CC(Row)P(2,1,3)99@5125L58,100@5188L131:Row.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((6 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().laj_1;
      if (!((6 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().y6a_1;
      var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1159599143, 'CC(Layout)P(!1,2)80@3267L27,83@3433L360:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.s25();
      var materialized = materialize($composer_2, modifier_2);
      var tmp0 = Companion_getInstance_2().q87_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
      var tmp_4 = $composer_3.j24();
      if (!isInterface(tmp_4, Applier)) {
        invalidApplier();
      }
      $composer_3.a25();
      if ($composer_3.k24()) {
        $composer_3.b25(tmp0);
      } else {
        $composer_3.c25();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().v87_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().u87_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().y87_1;
      // Inline function 'kotlin.with' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.k24() || !equals($this$with.h25(), compositeKeyHash)) {
        $this$with.i25(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).g25(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().s87_1);
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 1456264949, 'C101@5233L9:Row.kt#2w3rfo');
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 965002707, 'C35@1241L28,34@1212L254,43@1476L29,45@1515L199,50@1724L178:ChatRow.kt#piho0p');
      var tmp_5 = painterResource(item.gi8_1, $composer_5, 0);
      var tmp_6 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$10 = _Dp___init__impl__ms3zkb(48);
      var tmp_7 = clip(size(tmp_6, tmp$ret$10), get_CircleShape());
      var tmp_8 = Companion_getInstance_5().a6m_1;
      Image(tmp_5, item.di8_1, tmp_7, null, tmp_8, 0.0, null, $composer_5, 24576, 104);
      var tmp_9 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$11 = _Dp___init__impl__ms3zkb(12);
      Spacer(width(tmp_9, tmp$ret$11), $composer_5, 6);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_3 = RowScopeInstance_instance.laq(Companion_instance, 1.0);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 1341605231, 'CC(Column)P(2,3,1)87@4443L61,88@4509L134:Column.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_3 = Companion_instance;
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().naj_1;
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().b6b_1;
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1159599143, 'CC(Layout)P(!1,2)80@3267L27,83@3433L360:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.s25();
      var materialized_0 = materialize($composer_7, modifier_4);
      var tmp0_0 = Companion_getInstance_2().q87_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
      var tmp_10 = $composer_8.j24();
      if (!isInterface(tmp_10, Applier)) {
        invalidApplier();
      }
      $composer_8.a25();
      if ($composer_8.k24()) {
        $composer_8.b25(tmp0_0);
      } else {
        $composer_8.c25();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().v87_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().u87_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_2().y87_1;
      // Inline function 'kotlin.with' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      if ($this$with_0.k24() || !equals($this$with_0.h25(), compositeKeyHash_0)) {
        $this$with_0.i25(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).g25(compositeKeyHash_0, block_0);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().s87_1);
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, 2093002350, 'C89@4557L9:Column.kt#2w3rfo');
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, 456173363, 'C46@1568L60,47@1641L63:ChatRow.kt#piho0p');
      var tmp0_text = item.di8_1;
      var tmp1_fontSize = get_sp(16);
      var tmp2_color = Color(new Long(-16768940, 0));
      var tmp_11 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_13 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp0_text, null, tmp2_color, null, tmp1_fontSize, null, null, null, tmp_11, null, null, tmp_12, tmp_13, false, 0, 0, null, null, $composer_10, 24960, 0, 262122);
      var tmp3_text = item.ei8_1;
      var tmp4_fontSize = get_sp(14);
      var tmp5_color = Color(new Long(-8681304, 0));
      var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_16 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp3_text, null, tmp5_color, null, tmp4_fontSize, null, null, null, tmp_14, null, null, tmp_15, tmp_16, false, 0, 0, null, null, $composer_10, 24960, 0, 262122);
      sourceInformationMarkerEnd($composer_10);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.d25();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      var tmp0_text_0 = item.fi8_1;
      var tmp1_fontSize_0 = get_sp(12);
      var tmp2_color_0 = Color(new Long(-8681304, 0));
      var tmp3_overflow = Companion_getInstance_6().p5j_1;
      var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_18 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      Text(tmp0_text_0, null, tmp2_color_0, null, tmp1_fontSize_0, null, null, null, tmp_17, null, null, tmp_18, tmp3_overflow, false, 1, 0, null, null, $composer_5, 24960, 24960, 241642);
      sourceInformationMarkerEnd($composer_5);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.d25();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y24();
    }
    var tmp1_safe_receiver = $composer_0.u24();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.s2q(ChatRow$lambda_0(modifier_0, item, $changed, $default));
    }
  }
  function ChatRow$lambda() {
    return Unit_instance;
  }
  function ChatRow$lambda_0($modifier, $item, $$changed, $$default) {
    return function ($composer, $force) {
      ChatRow($modifier._v, $item, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function get_Purple80() {
    _init_properties_Color_kt__6h0l1r();
    return Purple80;
  }
  var Purple80;
  function get_PurpleGrey80() {
    _init_properties_Color_kt__6h0l1r();
    return PurpleGrey80;
  }
  var PurpleGrey80;
  function get_Pink80() {
    _init_properties_Color_kt__6h0l1r();
    return Pink80;
  }
  var Pink80;
  function get_Purple40() {
    _init_properties_Color_kt__6h0l1r();
    return Purple40;
  }
  var Purple40;
  function get_PurpleGrey40() {
    _init_properties_Color_kt__6h0l1r();
    return PurpleGrey40;
  }
  var PurpleGrey40;
  function get_Pink40() {
    _init_properties_Color_kt__6h0l1r();
    return Pink40;
  }
  var Pink40;
  var properties_initialized_Color_kt_bdybnx;
  function _init_properties_Color_kt__6h0l1r() {
    if (!properties_initialized_Color_kt_bdybnx) {
      properties_initialized_Color_kt_bdybnx = true;
      Purple80 = Color(new Long(-3097345, 0));
      PurpleGrey80 = Color(new Long(-3357988, 0));
      Pink80 = Color(new Long(-1066808, 0));
      Purple40 = Color(new Long(-10071900, 0));
      PurpleGrey40 = Color(new Long(-10331279, 0));
      Pink40 = Color(new Long(-8564128, 0));
    }
  }
  function get_DarkColorScheme() {
    _init_properties_Theme_kt__w31tqv();
    return DarkColorScheme;
  }
  var DarkColorScheme;
  function get_LightColorScheme() {
    _init_properties_Theme_kt__w31tqv();
    return LightColorScheme;
  }
  var LightColorScheme;
  function JellyFabTheme(darkTheme, dynamicColor, content, $composer, $changed, $default) {
    _init_properties_Theme_kt__w31tqv();
    var darkTheme_0 = {_v: darkTheme};
    var dynamicColor_0 = {_v: dynamicColor};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.t24(-1478024428);
    sourceInformation($composer_0, 'C(JellyFabTheme)P(1,2)33@886L93,38@985L114:Theme.kt#4ydsvo');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.k25(darkTheme_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.k25(dynamicColor_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.p25(content) ? 256 : 128);
    if ($composer_0.q25(!(($dirty & 147) === 146), $dirty & 1)) {
      $composer_0.r24();
      sourceInformation($composer_0, '29@767L21');
      if (($changed & 1) === 0 || $composer_0.m24()) {
        if (!(($default & 1) === 0)) {
          darkTheme_0._v = isSystemInDarkTheme($composer_0, 0);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          dynamicColor_0._v = true;
        }
      } else {
        $composer_0.y24();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.s24();
      if (isTraceInProgress()) {
        traceEventStart(-1478024428, $dirty, -1, 'io.github.iprashantpanwar.composeApp.theme.JellyFabTheme (Theme.kt:32)');
      }
      var colorScheme = platformColorScheme(darkTheme_0._v, dynamicColor_0._v, $composer_0, 14 & $dirty | 112 & $dirty);
      MaterialTheme(colorScheme, null, get_Typography(), content, $composer_0, 384 | 7168 & $dirty << 3, 2);
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
      tmp0_safe_receiver.s2q(JellyFabTheme$lambda(darkTheme_0, dynamicColor_0, content, $changed, $default));
    }
  }
  function getBaseColorScheme(darkTheme, $composer, $changed) {
    _init_properties_Theme_kt__w31tqv();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -123933082, 'C(getBaseColorScheme):Theme.kt#4ydsvo');
    if (isTraceInProgress()) {
      traceEventStart(-123933082, $changed, -1, 'io.github.iprashantpanwar.composeApp.theme.getBaseColorScheme (Theme.kt:46)');
    }
    var tmp0 = darkTheme ? get_DarkColorScheme() : get_LightColorScheme();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function JellyFabTheme$lambda($darkTheme, $dynamicColor, $content, $$changed, $$default) {
    return function ($composer, $force) {
      JellyFabTheme($darkTheme._v, $dynamicColor._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Theme_kt_uwj6hl;
  function _init_properties_Theme_kt__w31tqv() {
    if (!properties_initialized_Theme_kt_uwj6hl) {
      properties_initialized_Theme_kt_uwj6hl = true;
      DarkColorScheme = darkColorScheme(get_Purple80(), VOID, VOID, VOID, VOID, get_PurpleGrey80(), VOID, VOID, VOID, get_Pink80());
      LightColorScheme = lightColorScheme(get_Purple40(), VOID, VOID, VOID, VOID, get_PurpleGrey40(), VOID, VOID, VOID, get_Pink40());
    }
  }
  function get_Typography() {
    _init_properties_Type_kt__qhesii();
    return Typography;
  }
  var Typography;
  var properties_initialized_Type_kt_b459h8;
  function _init_properties_Type_kt__qhesii() {
    if (!properties_initialized_Type_kt_b459h8) {
      properties_initialized_Type_kt_b459h8 = true;
      var tmp0_fontFamily = Companion_getInstance_7().g5q_1;
      var tmp1_fontWeight = Companion_getInstance_4().r5p_1;
      var tmp2_fontSize = get_sp(16);
      var tmp3_lineHeight = get_sp(24);
      var tmp4_letterSpacing = get_sp_0(0.5);
      Typography = Typography_init_$Create$(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, TextStyle_init_$Create$(VOID, tmp2_fontSize, tmp1_fontWeight, VOID, VOID, tmp0_fontFamily, VOID, tmp4_letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight));
    }
  }
  function main() {
    ComposeViewport(VOID, VOID, ComposableSingletons$MainKt_getInstance().ki8_1);
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.e2k(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$1960082932$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C8@232L5:main.kt#piho0p');
    if ($composer_0.q25(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1960082932, $changed, -1, 'io.github.iprashantpanwar.composeApp.ComposableSingletons$MainKt.lambda$1960082932.<anonymous> (main.kt:8)');
      }
      App($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y24();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.ki8_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(1960082932, false, ComposableSingletons$MainKt$lambda$1960082932$lambda));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function mainWrapper() {
    main();
  }
  function platformColorScheme(darkTheme, dynamicColor, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1424845076, 'C(platformColorScheme)9@254L29:Theme.web.kt#4ydsvo');
    if (isTraceInProgress()) {
      traceEventStart(-1424845076, $changed, -1, 'io.github.iprashantpanwar.composeApp.theme.platformColorScheme (Theme.web.kt:9)');
    }
    var tmp0 = getBaseColorScheme(darkTheme, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  //region block: init
  jellyfab_composeapp_generated_resources_Res_drawable$stable = 0;
  jellyfab_composeapp_generated_resources_Res_string$stable = 0;
  jellyfab_composeapp_generated_resources_Res_array$stable = 0;
  jellyfab_composeapp_generated_resources_Res_plurals$stable = 0;
  jellyfab_composeapp_generated_resources_Res_font$stable = 0;
  jellyfab_composeapp_generated_resources_Res$stable = 0;
  drawable_instance = new drawable();
  io_github_iprashantpanwar_composeApp_ChatPreview$stable = 0;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=JellyFab-composeApp.js.map
