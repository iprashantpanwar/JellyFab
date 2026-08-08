(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    globalThis['Kotlin-DateTime-library-kotlinx-datetime'] = factory(typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined' ? {} : globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['@js-joda/core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ZoneRulesProvider = $module$_js_joda_core_gcv2k.ZoneRulesProvider;
  var protoOf = kotlin_kotlin.$_$.yg;
  var initMetadataForCompanion = kotlin_kotlin.$_$.wf;
  var Long = kotlin_kotlin.$_$.ol;
  var compare = kotlin_kotlin.$_$.ie;
  var toString = kotlin_kotlin.$_$.bh;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var Unit_getInstance = kotlin_kotlin.$_$.n5;
  var fromInt = kotlin_kotlin.$_$.ne;
  var modulo = kotlin_kotlin.$_$.pe;
  var divide = kotlin_kotlin.$_$.le;
  var equalsLong = kotlin_kotlin.$_$.me;
  var Companion_getInstance = kotlin_kotlin.$_$.c5;
  var DurationUnit_NANOSECONDS_getInstance = kotlin_kotlin.$_$.g;
  var toDuration = kotlin_kotlin.$_$.yk;
  var convertToInt = kotlin_kotlin.$_$.je;
  var shiftRight = kotlin_kotlin.$_$.ve;
  var makeAssociatedObjectMapES5 = kotlin_kotlin.$_$.c;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var initMetadataForClass = kotlin_kotlin.$_$.vf;
  var VOID = kotlin_kotlin.$_$.e;
  var THROW_IAE = kotlin_kotlin.$_$.wl;
  var enumEntries = kotlin_kotlin.$_$.be;
  var Enum = kotlin_kotlin.$_$.il;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.t1;
  var objectCreate = kotlin_kotlin.$_$.xg;
  var captureStack = kotlin_kotlin.$_$.cf;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.v1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.s1;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.x1;
  var IllegalArgumentException = kotlin_kotlin.$_$.ll;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.j2;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.k2;
  var RuntimeException_init_$Init$_1 = kotlin_kotlin.$_$.h2;
  var RuntimeException_init_$Init$_2 = kotlin_kotlin.$_$.m2;
  var RuntimeException = kotlin_kotlin.$_$.ul;
  var negate = kotlin_kotlin.$_$.re;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var THROW_CCE = kotlin_kotlin.$_$.vl;
  var ClosedRange = kotlin_kotlin.$_$.lh;
  var OpenEndRange = kotlin_kotlin.$_$.mh;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.a5;
  var Collection = kotlin_kotlin.$_$.x5;
  var isInterface = kotlin_kotlin.$_$.kg;
  var Iterator = kotlin_kotlin.$_$.c6;
  var numberToLong = kotlin_kotlin.$_$.se;
  var multiply = kotlin_kotlin.$_$.qe;
  var add = kotlin_kotlin.$_$.ee;
  var get_ONE = kotlin_kotlin.$_$.de;
  var subtract = kotlin_kotlin.$_$.we;
  var bitwiseXor = kotlin_kotlin.$_$.he;
  var numberRangeToNumber = kotlin_kotlin.$_$.tg;
  var contains = kotlin_kotlin.$_$.yh;
  var bitwiseOr = kotlin_kotlin.$_$.ge;
  var bitwiseAnd = kotlin_kotlin.$_$.fe;
  var ArithmeticException = kotlin_kotlin.$_$.bl;
  var getStringHashCode = kotlin_kotlin.$_$.tf;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w2;
  var initMetadataForObject = kotlin_kotlin.$_$.bg;
  var KMutableProperty0 = kotlin_kotlin.$_$.hi;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sf;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.d5;
  var ensureNotNull = kotlin_kotlin.$_$.pm;
  var KMutableProperty1 = kotlin_kotlin.$_$.ii;
  var listOf = kotlin_kotlin.$_$.va;
  var emptyList = kotlin_kotlin.$_$.l9;
  var KProperty0 = kotlin_kotlin.$_$.ji;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wm;
  var initMetadataForInterface = kotlin_kotlin.$_$.zf;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.i1;
  var to = kotlin_kotlin.$_$.jn;
  var listOf_0 = kotlin_kotlin.$_$.wa;
  var lazy = kotlin_kotlin.$_$.vm;
  var equals = kotlin_kotlin.$_$.nf;
  var last = kotlin_kotlin.$_$.sa;
  var charSequenceLength = kotlin_kotlin.$_$.hf;
  var prependIndent = kotlin_kotlin.$_$.vj;
  var charCodeAt = kotlin_kotlin.$_$.ff;
  var toString_0 = kotlin_kotlin.$_$.d3;
  var isArray = kotlin_kotlin.$_$.cg;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var hashCode = kotlin_kotlin.$_$.uf;
  var get_indices = kotlin_kotlin.$_$.ga;
  var joinToString = kotlin_kotlin.$_$.ia;
  var padStart = kotlin_kotlin.$_$.uj;
  var mapOf = kotlin_kotlin.$_$.za;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.b3;
  var plus = kotlin_kotlin.$_$.ib;
  var Char = kotlin_kotlin.$_$.el;
  var plus_0 = kotlin_kotlin.$_$.jb;
  var abs = kotlin_kotlin.$_$.dh;
  var getBooleanHashCode = kotlin_kotlin.$_$.pf;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var getOrNull = kotlin_kotlin.$_$.z9;
  var toString_1 = kotlin_kotlin.$_$.in;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q7;
  var mapCapacity = kotlin_kotlin.$_$.xa;
  var coerceAtLeast = kotlin_kotlin.$_$.oh;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var substring = kotlin_kotlin.$_$.jk;
  var substring_0 = kotlin_kotlin.$_$.ik;
  var get_lastIndex = kotlin_kotlin.$_$.sj;
  var toSet = kotlin_kotlin.$_$.wc;
  var distinct = kotlin_kotlin.$_$.j9;
  var single = kotlin_kotlin.$_$.ub;
  var repeat = kotlin_kotlin.$_$.yj;
  var append = kotlin_kotlin.$_$.zi;
  var charSequenceSubSequence = kotlin_kotlin.$_$.if;
  var charSequenceGet = kotlin_kotlin.$_$.gf;
  var mutableListOf = kotlin_kotlin.$_$.eb;
  var removeLastOrNull = kotlin_kotlin.$_$.ob;
  var sortWith = kotlin_kotlin.$_$.bc;
  var FunctionAdapter = kotlin_kotlin.$_$.ye;
  var Comparator = kotlin_kotlin.$_$.hl;
  var compareValues = kotlin_kotlin.$_$.ad;
  var Exception = kotlin_kotlin.$_$.kl;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.q1;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var joinTo = kotlin_kotlin.$_$.ja;
  var toMutableList = kotlin_kotlin.$_$.uc;
  var addAll = kotlin_kotlin.$_$.z6;
  var firstOrNull = kotlin_kotlin.$_$.r9;
  var drop = kotlin_kotlin.$_$.k9;
  var sortedWith = kotlin_kotlin.$_$.dc;
  var binarySearch = kotlin_kotlin.$_$.m7;
  var startsWith = kotlin_kotlin.$_$.hk;
  var checkCountOverflow = kotlin_kotlin.$_$.n7;
  var until = kotlin_kotlin.$_$.ci;
  var getOrNull_0 = kotlin_kotlin.$_$.jj;
  var compareTo = kotlin_kotlin.$_$.jf;
  var removePrefix = kotlin_kotlin.$_$.wj;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var Comparable = kotlin_kotlin.$_$.gl;
  var longRangeToLong = kotlin_kotlin.$_$.rg;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.z2;
  var buildClassSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var getKClass = kotlin_kotlin.$_$.fi;
  var arrayOf = kotlin_kotlin.$_$.jm;
  var createKType = kotlin_kotlin.$_$.di;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy_0 = kotlin_kotlin.$_$.um;
  var KProperty1 = kotlin_kotlin.$_$.ki;
  var MissingFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.b5;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var charArrayOf = kotlin_kotlin.$_$.df;
  var split = kotlin_kotlin.$_$.dk;
  var startsWith_0 = kotlin_kotlin.$_$.gk;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.i5;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var take = kotlin_kotlin.$_$.jc;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.e3;
  var createFailure = kotlin_kotlin.$_$.om;
  var shiftRightUnsigned = kotlin_kotlin.$_$.ue;
  var compareValuesBy = kotlin_kotlin.$_$.zc;
  var lastOrNull = kotlin_kotlin.$_$.qa;
  var binarySearch_0 = kotlin_kotlin.$_$.l7;
  var first = kotlin_kotlin.$_$.v9;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var toList = kotlin_kotlin.$_$.sc;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(DateTimeUnit, 'DateTimeUnit', VOID, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, DateTimeUnitSerializer_getInstance]));
  initMetadataForClass(TimeBased, 'TimeBased', VOID, DateTimeUnit, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, TimeBasedDateTimeUnitSerializer_getInstance]));
  initMetadataForClass(DateBased, 'DateBased', VOID, DateTimeUnit, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, DateBasedDateTimeUnitSerializer_getInstance]));
  initMetadataForClass(DayBased, 'DayBased', VOID, DateBased, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, DayBasedDateTimeUnitSerializer_getInstance]));
  initMetadataForClass(MonthBased, 'MonthBased', VOID, DateBased, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, MonthBasedDateTimeUnitSerializer_getInstance]));
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(DayOfWeek, 'DayOfWeek', VOID, Enum);
  initMetadataForClass(DateTimeFormatException, 'DateTimeFormatException', DateTimeFormatException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(IllegalTimeZoneException, 'IllegalTimeZoneException', IllegalTimeZoneException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(DateTimeArithmeticException, 'DateTimeArithmeticException', DateTimeArithmeticException_init_$Create$, RuntimeException);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(LocalDateProgression, 'LocalDateProgression', VOID, VOID, [Collection]);
  initMetadataForClass(LocalDateRange, 'LocalDateRange', VOID, LocalDateProgression, [LocalDateProgression, ClosedRange, OpenEndRange]);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(LocalDateProgressionIterator, 'LocalDateProgressionIterator', VOID, VOID, [Iterator]);
  initMetadataForClass(Month, 'Month', VOID, Enum);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(OverloadMarker, 'OverloadMarker');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(YearMonthProgression, 'YearMonthProgression', VOID, VOID, [Collection]);
  initMetadataForClass(YearMonthRange, 'YearMonthRange', VOID, YearMonthProgression, [YearMonthProgression, ClosedRange, OpenEndRange]);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(YearMonthProgressionIterator, 'YearMonthProgressionIterator', VOID, VOID, [Iterator]);
  initMetadataForInterface(YearMonthFieldContainer, 'YearMonthFieldContainer');
  initMetadataForInterface(DateFieldContainer, 'DateFieldContainer', VOID, VOID, [YearMonthFieldContainer]);
  function set_fractionOfSecond(value) {
    this.set_nanosecond_xpjfxy_k$(value == null ? null : value.fractionalPartWithNDigits_sivm3u_k$(9));
  }
  function get_fractionOfSecond() {
    var tmp0_safe_receiver = this.get_nanosecond_fws9td_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = new DecimalFraction(tmp0_safe_receiver, 9);
    }
    return tmp;
  }
  initMetadataForInterface(TimeFieldContainer, 'TimeFieldContainer');
  initMetadataForInterface(UtcOffsetFieldContainer, 'UtcOffsetFieldContainer');
  initMetadataForInterface(DateTimeFieldContainer, 'DateTimeFieldContainer', VOID, VOID, [DateFieldContainer, TimeFieldContainer]);
  initMetadataForInterface(Copyable, 'Copyable');
  initMetadataForClass(DateTimeComponentsContents, 'DateTimeComponentsContents', VOID, VOID, [DateFieldContainer, TimeFieldContainer, UtcOffsetFieldContainer, DateTimeFieldContainer, Copyable]);
  initMetadataForCompanion(Companion_9);
  initMetadataForObject(Formats, 'Formats');
  initMetadataForClass(DateTimeComponents, 'DateTimeComponents');
  initMetadataForInterface(DateTimeFormatBuilder, 'DateTimeFormatBuilder');
  function appendAlternativeParsingImpl(otherFormats, mainFormat) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(otherFormats.length);
    var inductionVariable = 0;
    var last = otherFormats.length;
    while (inductionVariable < last) {
      var item = otherFormats[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.also' call
      var this_0 = this.createEmpty_8k9z67_k$();
      item(this_0);
      var tmp$ret$2 = this_0.get_actualBuilder_7qypdo_k$().build_1k0s4u_k$();
      destination.add_utx5q5_k$(tmp$ret$2);
    }
    var others = destination;
    // Inline function 'kotlin.also' call
    var this_1 = this.createEmpty_8k9z67_k$();
    mainFormat(this_1);
    var main = this_1.get_actualBuilder_7qypdo_k$().build_1k0s4u_k$();
    this.get_actualBuilder_7qypdo_k$().add_b6pdwl_k$(new AlternativesParsingFormatStructure(main, others));
  }
  function appendOptionalImpl(onZero, format) {
    var tmp = this.get_actualBuilder_7qypdo_k$();
    // Inline function 'kotlin.also' call
    var this_0 = this.createEmpty_8k9z67_k$();
    format(this_0);
    tmp.add_b6pdwl_k$(new OptionalFormatStructure(onZero, this_0.get_actualBuilder_7qypdo_k$().build_1k0s4u_k$()));
  }
  function chars(value) {
    return this.get_actualBuilder_7qypdo_k$().add_b6pdwl_k$(new ConstantFormatStructure(value));
  }
  function build() {
    return new CachedFormatStructure(this.get_actualBuilder_7qypdo_k$().build_1k0s4u_k$().get_formats_9xs0wd_k$());
  }
  initMetadataForInterface(AbstractDateTimeFormatBuilder, 'AbstractDateTimeFormatBuilder', VOID, VOID, [DateTimeFormatBuilder]);
  function year$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.year_8xsdsn_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.year_8xsdsn_k$.call(this, padding);
    }
    return tmp;
  }
  function monthNumber$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.monthNumber_vowj11_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.monthNumber_vowj11_k$.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithYearMonth, 'WithYearMonth', VOID, VOID, [DateTimeFormatBuilder]);
  function year(padding) {
    return this.addFormatStructureForYearMonth_t4rp63_k$(new BasicFormatStructure(new YearDirective(padding)));
  }
  function yearTwoDigits(baseYear) {
    return this.addFormatStructureForYearMonth_t4rp63_k$(new BasicFormatStructure(new ReducedYearDirective(baseYear)));
  }
  function monthNumber(padding) {
    return this.addFormatStructureForYearMonth_t4rp63_k$(new BasicFormatStructure(new MonthDirective(padding)));
  }
  function monthName(names) {
    return this.addFormatStructureForYearMonth_t4rp63_k$(new BasicFormatStructure(new MonthNameDirective(names)));
  }
  function yearMonth(format) {
    var tmp;
    if (format instanceof YearMonthFormat) {
      this.addFormatStructureForYearMonth_t4rp63_k$(format.actualFormat_1);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithYearMonthBuilder, 'AbstractWithYearMonthBuilder', VOID, VOID, [WithYearMonth]);
  function day$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.day_qqmnko_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.day_qqmnko_k$.call(this, padding);
    }
    return tmp;
  }
  function dayOfMonth(padding) {
    this.day_qqmnko_k$(padding);
  }
  function dayOfMonth$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.dayOfMonth_xcq6p3_k$(padding);
      tmp = Unit_getInstance();
    } else {
      dayOfMonth(padding);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function dayOfYear$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.dayOfYear_h9d7r8_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.dayOfYear_h9d7r8_k$.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithDate, 'WithDate', VOID, VOID, [WithYearMonth]);
  function addFormatStructureForYearMonth(structure) {
    this.addFormatStructureForDate_t2v9hh_k$(structure);
  }
  function day(padding) {
    return this.addFormatStructureForDate_t2v9hh_k$(new BasicFormatStructure(new DayDirective(padding)));
  }
  function dayOfWeek(names) {
    return this.addFormatStructureForDate_t2v9hh_k$(new BasicFormatStructure(new DayOfWeekDirective(names)));
  }
  function dayOfYear(padding) {
    return this.addFormatStructureForDate_t2v9hh_k$(new BasicFormatStructure(new DayOfYearDirective(padding)));
  }
  function date(format) {
    var tmp;
    if (format instanceof LocalDateFormat) {
      this.addFormatStructureForDate_t2v9hh_k$(format.actualFormat_1);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithDateBuilder, 'AbstractWithDateBuilder', VOID, VOID, [AbstractWithYearMonthBuilder, WithDate]);
  function hour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.hour_8zk8ds_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.hour_8zk8ds_k$.call(this, padding);
    }
    return tmp;
  }
  function amPmHour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.amPmHour_pqhb5l_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.amPmHour_pqhb5l_k$.call(this, padding);
    }
    return tmp;
  }
  function minute$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.minute_n70fvk_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.minute_n70fvk_k$.call(this, padding);
    }
    return tmp;
  }
  function second$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.second_9gil1c_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.second_9gil1c_k$.call(this, padding);
    }
    return tmp;
  }
  function secondFraction$default(minLength, maxLength, $super) {
    minLength = minLength === VOID ? 1 : minLength;
    maxLength = maxLength === VOID ? 9 : maxLength;
    var tmp;
    if ($super === VOID) {
      this.secondFraction_6m5e86_k$(minLength, maxLength);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.secondFraction_6m5e86_k$.call(this, minLength, maxLength);
    }
    return tmp;
  }
  function secondFraction(fixedLength) {
    this.secondFraction_6m5e86_k$(fixedLength, fixedLength);
  }
  initMetadataForInterface(WithTime, 'WithTime', VOID, VOID, [DateTimeFormatBuilder]);
  function hour(padding) {
    return this.addFormatStructureForTime_h3r7lv_k$(new BasicFormatStructure(new HourDirective(padding)));
  }
  function amPmHour(padding) {
    return this.addFormatStructureForTime_h3r7lv_k$(new BasicFormatStructure(new AmPmHourDirective(padding)));
  }
  function amPmMarker(am, pm) {
    return this.addFormatStructureForTime_h3r7lv_k$(new BasicFormatStructure(new AmPmMarkerDirective(am, pm)));
  }
  function minute(padding) {
    return this.addFormatStructureForTime_h3r7lv_k$(new BasicFormatStructure(new MinuteDirective(padding)));
  }
  function second(padding) {
    return this.addFormatStructureForTime_h3r7lv_k$(new BasicFormatStructure(new SecondDirective(padding)));
  }
  function secondFraction_0(minLength, maxLength) {
    return this.addFormatStructureForTime_h3r7lv_k$(new BasicFormatStructure(new FractionalSecondDirective(minLength, maxLength)));
  }
  function time(format) {
    var tmp;
    if (format instanceof LocalTimeFormat) {
      this.addFormatStructureForTime_h3r7lv_k$(format.actualFormat_1);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithTimeBuilder, 'AbstractWithTimeBuilder', VOID, VOID, [WithTime]);
  initMetadataForInterface(WithDateTime, 'WithDateTime', VOID, VOID, [WithDate, WithTime]);
  function addFormatStructureForDate(structure) {
    this.addFormatStructureForDateTime_noiy5b_k$(structure);
  }
  function addFormatStructureForTime(structure) {
    this.addFormatStructureForDateTime_noiy5b_k$(structure);
  }
  function dateTime(format) {
    var tmp;
    if (format instanceof LocalDateTimeFormat) {
      this.addFormatStructureForDateTime_noiy5b_k$(format.actualFormat_1);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithDateTimeBuilder, 'AbstractWithDateTimeBuilder', VOID, VOID, [AbstractWithDateBuilder, AbstractWithTimeBuilder, WithDateTime]);
  function offsetHours$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.offsetHours_ci3yns_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.offsetHours_ci3yns_k$.call(this, padding);
    }
    return tmp;
  }
  function offsetMinutesOfHour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.offsetMinutesOfHour_jd2q5v_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.offsetMinutesOfHour_jd2q5v_k$.call(this, padding);
    }
    return tmp;
  }
  function offsetSecondsOfMinute$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.offsetSecondsOfMinute_vkij2b_k$(padding);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.offsetSecondsOfMinute_vkij2b_k$.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithUtcOffset, 'WithUtcOffset', VOID, VOID, [DateTimeFormatBuilder]);
  function offsetHours(padding) {
    return this.addFormatStructureForOffset_puuf83_k$(new SignedFormatStructure(new BasicFormatStructure(new UtcOffsetWholeHoursDirective(padding)), true));
  }
  function offsetMinutesOfHour(padding) {
    return this.addFormatStructureForOffset_puuf83_k$(new BasicFormatStructure(new UtcOffsetMinuteOfHourDirective(padding)));
  }
  function offsetSecondsOfMinute(padding) {
    return this.addFormatStructureForOffset_puuf83_k$(new BasicFormatStructure(new UtcOffsetSecondOfMinuteDirective(padding)));
  }
  function offset(format) {
    var tmp;
    if (format instanceof UtcOffsetFormat) {
      this.addFormatStructureForOffset_puuf83_k$(format.actualFormat_1);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithOffsetBuilder, 'AbstractWithOffsetBuilder', VOID, VOID, [WithUtcOffset]);
  initMetadataForInterface(WithDateTimeComponents, 'WithDateTimeComponents', VOID, VOID, [WithDateTime, WithUtcOffset]);
  initMetadataForClass(Builder, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateTimeBuilder, AbstractWithOffsetBuilder, WithDateTimeComponents]);
  initMetadataForInterface(DateTimeFormat, 'DateTimeFormat');
  initMetadataForClass(AbstractDateTimeFormat, 'AbstractDateTimeFormat', VOID, VOID, [DateTimeFormat]);
  initMetadataForClass(DateTimeComponentsFormat, 'DateTimeComponentsFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(TwoDigitNumber, 'TwoDigitNumber');
  initMetadataForClass(ThreeDigitNumber, 'ThreeDigitNumber');
  initMetadataForInterface(FieldFormatDirective, 'FieldFormatDirective');
  initMetadataForClass(TimeZoneIdDirective, 'TimeZoneIdDirective', TimeZoneIdDirective, VOID, [FieldFormatDirective]);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(Padding, 'Padding', VOID, Enum);
  initMetadataForClass(IncompleteLocalDate, 'IncompleteLocalDate', IncompleteLocalDate, VOID, [YearMonthFieldContainer, DateFieldContainer, Copyable]);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(DayOfWeekNames, 'DayOfWeekNames');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(Builder_0, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateBuilder]);
  initMetadataForClass(LocalDateFormat, 'LocalDateFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(UnsignedIntFieldFormatDirective, 'UnsignedIntFieldFormatDirective', VOID, VOID, [FieldFormatDirective]);
  initMetadataForClass(DayDirective, 'DayDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(NamedUnsignedIntFieldFormatDirective, 'NamedUnsignedIntFieldFormatDirective', VOID, VOID, [FieldFormatDirective]);
  initMetadataForClass(DayOfWeekDirective, 'DayOfWeekDirective', VOID, NamedUnsignedIntFieldFormatDirective);
  initMetadataForClass(DayOfYearDirective, 'DayOfYearDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForObject(DateFields, 'DateFields');
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(Builder_1, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateTimeBuilder]);
  initMetadataForClass(LocalDateTimeFormat, 'LocalDateTimeFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(IncompleteLocalDateTime, 'IncompleteLocalDateTime', IncompleteLocalDateTime, VOID, [DateTimeFieldContainer, DateFieldContainer, TimeFieldContainer, Copyable]);
  initMetadataForClass(IncompleteLocalTime, 'IncompleteLocalTime', IncompleteLocalTime, VOID, [TimeFieldContainer, Copyable]);
  initMetadataForClass(AmPmMarker, 'AmPmMarker', VOID, Enum);
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(Builder_2, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithTimeBuilder]);
  initMetadataForClass(LocalTimeFormat, 'LocalTimeFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(HourDirective, 'HourDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(AmPmHourDirective, 'AmPmHourDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(NamedEnumIntFieldFormatDirective, 'NamedEnumIntFieldFormatDirective', VOID, VOID, [FieldFormatDirective]);
  initMetadataForClass(AmPmMarkerDirective, 'AmPmMarkerDirective', VOID, NamedEnumIntFieldFormatDirective);
  initMetadataForClass(MinuteDirective, 'MinuteDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(SecondDirective, 'SecondDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForCompanion(Companion_15);
  initMetadataForClass(DecimalFractionFieldFormatDirective, 'DecimalFractionFieldFormatDirective', VOID, VOID, [FieldFormatDirective]);
  initMetadataForClass(FractionalSecondDirective, 'FractionalSecondDirective', VOID, DecimalFractionFieldFormatDirective);
  initMetadataForObject(TimeFields, 'TimeFields');
  initMetadataForClass(IncompleteUtcOffset, 'IncompleteUtcOffset', IncompleteUtcOffset, VOID, [UtcOffsetFieldContainer, Copyable]);
  initMetadataForClass(UtcOffsetWholeHoursDirective, 'UtcOffsetWholeHoursDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(Builder_3, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithOffsetBuilder]);
  initMetadataForClass(UtcOffsetFormat, 'UtcOffsetFormat', VOID, AbstractDateTimeFormat);
  initMetadataForInterface(FieldSign, 'FieldSign');
  initMetadataForClass(OffsetFields$sign$1, VOID, VOID, VOID, [FieldSign]);
  initMetadataForObject(OffsetFields, 'OffsetFields');
  initMetadataForClass(UtcOffsetMinuteOfHourDirective, 'UtcOffsetMinuteOfHourDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(UtcOffsetSecondOfMinuteDirective, 'UtcOffsetSecondOfMinuteDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(WhenToOutput, 'WhenToOutput', VOID, Enum);
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(MonthNames, 'MonthNames');
  initMetadataForClass(IncompleteYearMonth, 'IncompleteYearMonth', IncompleteYearMonth, VOID, [YearMonthFieldContainer, Copyable]);
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(Builder_4, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithYearMonthBuilder]);
  initMetadataForClass(YearMonthFormat, 'YearMonthFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(SignedIntFieldFormatDirective, 'SignedIntFieldFormatDirective', VOID, VOID, [FieldFormatDirective]);
  initMetadataForClass(YearDirective, 'YearDirective', VOID, SignedIntFieldFormatDirective);
  initMetadataForClass(ReducedIntFieldDirective, 'ReducedIntFieldDirective', VOID, VOID, [FieldFormatDirective]);
  initMetadataForClass(ReducedYearDirective, 'ReducedYearDirective', VOID, ReducedIntFieldDirective);
  initMetadataForClass(MonthDirective, 'MonthDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(MonthNameDirective, 'MonthNameDirective', VOID, NamedUnsignedIntFieldFormatDirective);
  initMetadataForObject(YearMonthFields, 'YearMonthFields');
  initMetadataForClass(AppendableFormatStructure, 'AppendableFormatStructure', AppendableFormatStructure);
  initMetadataForInterface(AssignableField, 'AssignableField');
  initMetadataForClass(AssignableString, 'AssignableString', VOID, VOID, [AssignableField]);
  initMetadataForClass(AssignableString_0, 'AssignableString', VOID, VOID, [AssignableField]);
  initMetadataForInterface(FieldSpec, 'FieldSpec');
  initMetadataForClass(AbstractFieldSpec, 'AbstractFieldSpec', VOID, VOID, [FieldSpec]);
  initMetadataForClass(GenericFieldSpec, 'GenericFieldSpec', VOID, AbstractFieldSpec);
  function getterNotNull(container) {
    var tmp0_elvis_lhs = this.getter_8mvnhr_k$(container);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Field ' + this.get_name_woqyms_k$() + ' is not set');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  initMetadataForInterface(Accessor, 'Accessor', VOID, VOID, [AssignableField]);
  initMetadataForClass(PropertyAccessor, 'PropertyAccessor', VOID, VOID, [Accessor]);
  initMetadataForClass(UnsignedFieldSpec, 'UnsignedFieldSpec', VOID, AbstractFieldSpec);
  initMetadataForInterface(FormatStructure, 'FormatStructure');
  initMetadataForClass(ConcatenatedFormatStructure, 'ConcatenatedFormatStructure', VOID, VOID, [FormatStructure]);
  initMetadataForClass(CachedFormatStructure, 'CachedFormatStructure', VOID, ConcatenatedFormatStructure);
  initMetadataForInterface(NonConcatenatedFormatStructure, 'NonConcatenatedFormatStructure', VOID, VOID, [FormatStructure]);
  initMetadataForClass(BasicFormatStructure, 'BasicFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(ConstantFormatStructure, 'ConstantFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(SignedFormatStructure, 'SignedFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(PropertyWithDefault, 'PropertyWithDefault');
  initMetadataForClass(OptionalFormatStructure, 'OptionalFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(AlternativesParsingFormatStructure, 'AlternativesParsingFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForInterface(Predicate, 'Predicate');
  initMetadataForClass(ComparisonPredicate, 'ComparisonPredicate', VOID, VOID, [Predicate]);
  initMetadataForObject(Truth, 'Truth', VOID, VOID, [Predicate]);
  initMetadataForClass(ConjunctionPredicate, 'ConjunctionPredicate', VOID, VOID, [Predicate]);
  function format$default(obj, builder, minusNotRequired, $super) {
    minusNotRequired = minusNotRequired === VOID ? false : minusNotRequired;
    var tmp;
    if ($super === VOID) {
      this.format_bqb1zl_k$(obj, builder, minusNotRequired);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.format_bqb1zl_k$.call(this, obj, builder, minusNotRequired);
    }
    return tmp;
  }
  initMetadataForInterface(FormatterStructure, 'FormatterStructure');
  initMetadataForClass(SpacePaddedFormatter, 'SpacePaddedFormatter', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(SignedFormatter, 'SignedFormatter', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(ConditionalFormatter, 'ConditionalFormatter', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(ConcatenatedFormatter, 'ConcatenatedFormatter', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(UnsignedIntFormatterStructure, 'UnsignedIntFormatterStructure', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(StringFormatterStructure, 'StringFormatterStructure', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(DecimalFractionFormatterStructure, 'DecimalFractionFormatterStructure', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(SignedIntFormatterStructure, 'SignedIntFormatterStructure', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(ReducedIntFormatterStructure, 'ReducedIntFormatterStructure', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(ConstantStringFormatterStructure, 'ConstantStringFormatterStructure', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(NumberConsumer, 'NumberConsumer');
  initMetadataForClass(FractionPartConsumer, 'FractionPartConsumer', VOID, NumberConsumer);
  initMetadataForClass(ConstantNumberConsumer, 'ConstantNumberConsumer', VOID, NumberConsumer);
  initMetadataForInterface(NumberConsumptionError, 'NumberConsumptionError');
  initMetadataForObject(ExpectedInt, 'ExpectedInt', VOID, VOID, [NumberConsumptionError]);
  initMetadataForClass(TooManyDigits, 'TooManyDigits', VOID, VOID, [NumberConsumptionError]);
  initMetadataForClass(TooFewDigits, 'TooFewDigits', VOID, VOID, [NumberConsumptionError]);
  initMetadataForClass(WrongConstant, 'WrongConstant', VOID, VOID, [NumberConsumptionError]);
  initMetadataForClass(Conflicting, 'Conflicting', VOID, VOID, [NumberConsumptionError]);
  initMetadataForClass(UnsignedIntConsumer, 'UnsignedIntConsumer', VOID, NumberConsumer);
  initMetadataForClass(ReducedIntConsumer, 'ReducedIntConsumer', VOID, NumberConsumer);
  initMetadataForClass(ParseError, 'ParseError');
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(ParseResult, 'ParseResult');
  initMetadataForClass(ParserState, 'ParserState');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(Parser, 'Parser');
  initMetadataForClass(ParserStructure, 'ParserStructure');
  initMetadataForClass(ParseException, 'ParseException', VOID, Exception);
  initMetadataForClass(TrieNode, 'TrieNode', TrieNode);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForInterface(ParserOperation, 'ParserOperation');
  initMetadataForClass(StringSetParserOperation, 'StringSetParserOperation', VOID, VOID, [ParserOperation]);
  initMetadataForClass(NumberSpanParserOperation, 'NumberSpanParserOperation', VOID, VOID, [ParserOperation]);
  initMetadataForClass(PlainStringParserOperation, 'PlainStringParserOperation', VOID, VOID, [ParserOperation]);
  initMetadataForClass(SignParser, 'SignParser', VOID, VOID, [ParserOperation]);
  initMetadataForClass(UnconditionalModification, 'UnconditionalModification', VOID, VOID, [ParserOperation]);
  initMetadataForClass(State, 'State', VOID, Enum);
  initMetadataForCompanion(Companion_21);
  initMetadataForClass(TimeZoneParserOperation, 'TimeZoneParserOperation', VOID, VOID, [ParserOperation]);
  initMetadataForClass(DecimalFraction, 'DecimalFraction', VOID, VOID, [Comparable]);
  initMetadataForObject(TimeBasedDateTimeUnitSerializer, 'TimeBasedDateTimeUnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DateBasedDateTimeUnitSerializer, 'DateBasedDateTimeUnitSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForObject(DayBasedDateTimeUnitSerializer, 'DayBasedDateTimeUnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(MonthBasedDateTimeUnitSerializer, 'MonthBasedDateTimeUnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DateTimeUnitSerializer, 'DateTimeUnitSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForObject(LocalDateSerializer, 'LocalDateSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LocalDateTimeSerializer, 'LocalDateTimeSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LocalTimeSerializer, 'LocalTimeSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UtcOffsetSerializer, 'UtcOffsetSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(YearMonthSerializer, 'YearMonthSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(TimeZoneDatabase, 'TimeZoneDatabase');
  initMetadataForClass(tzdb$1, VOID, VOID, VOID, [TimeZoneDatabase]);
  initMetadataForCompanion(Companion_22);
  initMetadataForObject(Formats_0, 'Formats');
  initMetadataForClass(LocalDate, 'LocalDate', VOID, VOID, [Comparable], VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, LocalDateSerializer_getInstance]));
  initMetadataForCompanion(Companion_23);
  initMetadataForObject(Formats_1, 'Formats');
  initMetadataForClass(LocalDateTime, 'LocalDateTime', VOID, VOID, [Comparable], VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, LocalDateTimeSerializer_getInstance]));
  initMetadataForCompanion(Companion_24);
  initMetadataForObject(Formats_2, 'Formats');
  initMetadataForClass(LocalTime, 'LocalTime', VOID, VOID, [Comparable], VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, LocalTimeSerializer_getInstance]));
  initMetadataForCompanion(Companion_25);
  initMetadataForObject(Formats_3, 'Formats');
  initMetadataForClass(UtcOffset, 'UtcOffset', VOID, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, UtcOffsetSerializer_getInstance]));
  initMetadataForCompanion(Companion_26);
  initMetadataForObject(Formats_4, 'Formats');
  initMetadataForClass(YearMonth, 'YearMonth', VOID, VOID, [Comparable], VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, YearMonthSerializer_getInstance]));
  initMetadataForInterface(OffsetResolver, 'OffsetResolver');
  initMetadataForObject(WallClockOffset, 'WallClockOffset', VOID, VOID, [OffsetResolver]);
  initMetadataForClass(FixedOffset, 'FixedOffset', VOID, VOID, [OffsetResolver]);
  initMetadataForClass(TransitionLocaltime, 'TransitionLocaltime');
  initMetadataForClass(MonthDayTime, 'MonthDayTime');
  initMetadataForInterface(DateOfYear, 'DateOfYear');
  initMetadataForInterface(OffsetInfo, 'OffsetInfo');
  initMetadataForClass(Gap, 'Gap', VOID, VOID, [OffsetInfo]);
  initMetadataForClass(Overlap, 'Overlap', VOID, VOID, [OffsetInfo]);
  initMetadataForClass(Regular, 'Regular', VOID, VOID, [OffsetInfo]);
  initMetadataForInterface(TimeZoneRules, 'TimeZoneRules');
  initMetadataForClass(TimeZoneRulesCommon, 'TimeZoneRulesCommon', VOID, VOID, [TimeZoneRules]);
  initMetadataForClass(Rule, 'Rule');
  initMetadataForClass(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(RecurringZoneRules, 'RecurringZoneRules');
  //endregion
  function _get_unitName__gfdlz0($this) {
    return $this.unitName_1;
  }
  function _get_unitScale__ef1qsr($this) {
    return $this.unitScale_1;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return TimeBasedDateTimeUnitSerializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_3() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).serializer_9w0wvi_k$ = function () {
    return DateBasedDateTimeUnitSerializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_4() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).serializer_9w0wvi_k$ = function () {
    return DayBasedDateTimeUnitSerializer_getInstance();
  };
  var Companion_instance_1;
  function Companion_getInstance_5() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).serializer_9w0wvi_k$ = function () {
    return MonthBasedDateTimeUnitSerializer_getInstance();
  };
  var Companion_instance_2;
  function Companion_getInstance_6() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function TimeBased(nanoseconds) {
    Companion_getInstance_3();
    DateTimeUnit.call(this);
    this.nanoseconds_1 = nanoseconds;
    // Inline function 'kotlin.require' call
    if (!(compare(this.nanoseconds_1, new Long(0, 0)) > 0)) {
      var message = 'Unit duration must be positive, but was ' + this.nanoseconds_1.toString() + ' ns.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (equalsLong(modulo(this.nanoseconds_1, new Long(817405952, 838)), new Long(0, 0))) {
      this.unitName_1 = 'HOUR';
      this.unitScale_1 = divide(this.nanoseconds_1, new Long(817405952, 838));
    } else {
      if (equalsLong(modulo(this.nanoseconds_1, new Long(-129542144, 13)), new Long(0, 0))) {
        this.unitName_1 = 'MINUTE';
        this.unitScale_1 = divide(this.nanoseconds_1, new Long(-129542144, 13));
      } else {
        var tmp0 = this.nanoseconds_1;
        // Inline function 'kotlin.Long.rem' call
        var other = 1000000000;
        var tmp$ret$2 = modulo(tmp0, fromInt(other));
        if (equalsLong(tmp$ret$2, new Long(0, 0))) {
          this.unitName_1 = 'SECOND';
          var tmp = this;
          var tmp0_0 = this.nanoseconds_1;
          // Inline function 'kotlin.Long.div' call
          var other_0 = 1000000000;
          tmp.unitScale_1 = divide(tmp0_0, fromInt(other_0));
        } else {
          // Inline function 'kotlin.Long.rem' call
          var this_0 = this.nanoseconds_1;
          var tmp$ret$4 = modulo(this_0, fromInt(1000000));
          if (equalsLong(tmp$ret$4, new Long(0, 0))) {
            this.unitName_1 = 'MILLISECOND';
            var tmp_0 = this;
            // Inline function 'kotlin.Long.div' call
            var this_1 = this.nanoseconds_1;
            tmp_0.unitScale_1 = divide(this_1, fromInt(1000000));
          } else {
            // Inline function 'kotlin.Long.rem' call
            var this_2 = this.nanoseconds_1;
            var tmp$ret$6 = modulo(this_2, fromInt(1000));
            if (equalsLong(tmp$ret$6, new Long(0, 0))) {
              this.unitName_1 = 'MICROSECOND';
              var tmp_1 = this;
              // Inline function 'kotlin.Long.div' call
              var this_3 = this.nanoseconds_1;
              tmp_1.unitScale_1 = divide(this_3, fromInt(1000));
            } else {
              this.unitName_1 = 'NANOSECOND';
              this.unitScale_1 = this.nanoseconds_1;
            }
          }
        }
      }
    }
  }
  protoOf(TimeBased).get_nanoseconds_3zfxge_k$ = function () {
    return this.nanoseconds_1;
  };
  protoOf(TimeBased).times_kr2a3y_k$ = function (scalar) {
    return new TimeBased(safeMultiply(this.nanoseconds_1, fromInt(scalar)));
  };
  protoOf(TimeBased).get_duration_6xjj0z_k$ = function () {
    Companion_getInstance();
    // Inline function 'kotlin.time.Companion.nanoseconds' call
    var this_0 = this.nanoseconds_1;
    return toDuration(this_0, DurationUnit_NANOSECONDS_getInstance());
  };
  protoOf(TimeBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeBased) {
        tmp_0 = equalsLong(this.nanoseconds_1, other.nanoseconds_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeBased).hashCode = function () {
    return convertToInt(this.nanoseconds_1) ^ convertToInt(shiftRight(this.nanoseconds_1, 32));
  };
  protoOf(TimeBased).toString = function () {
    return this.formatToString_kuwbox_k$(this.unitScale_1, this.unitName_1);
  };
  function DateBased() {
    Companion_getInstance_4();
    DateTimeUnit.call(this);
  }
  function DayBased(days) {
    Companion_getInstance_5();
    DateBased.call(this);
    this.days_1 = days;
    // Inline function 'kotlin.require' call
    if (!(this.days_1 > 0)) {
      var message = 'Unit duration must be positive, but was ' + this.days_1 + ' days.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DayBased).get_days_wokl28_k$ = function () {
    return this.days_1;
  };
  protoOf(DayBased).times_kr2a3y_k$ = function (scalar) {
    return new DayBased(safeMultiply_0(this.days_1, scalar));
  };
  protoOf(DayBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof DayBased) {
        tmp_0 = this.days_1 === other.days_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(DayBased).hashCode = function () {
    return this.days_1 ^ 65536;
  };
  protoOf(DayBased).toString = function () {
    return (this.days_1 % 7 | 0) === 0 ? this.formatToString_rm4xej_k$(this.days_1 / 7 | 0, 'WEEK') : this.formatToString_rm4xej_k$(this.days_1, 'DAY');
  };
  function MonthBased(months) {
    Companion_getInstance_6();
    DateBased.call(this);
    this.months_1 = months;
    // Inline function 'kotlin.require' call
    if (!(this.months_1 > 0)) {
      var message = 'Unit duration must be positive, but was ' + this.months_1 + ' months.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(MonthBased).get_months_gqmrjw_k$ = function () {
    return this.months_1;
  };
  protoOf(MonthBased).times_kr2a3y_k$ = function (scalar) {
    return new MonthBased(safeMultiply_0(this.months_1, scalar));
  };
  protoOf(MonthBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof MonthBased) {
        tmp_0 = this.months_1 === other.months_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(MonthBased).hashCode = function () {
    return this.months_1 ^ 131072;
  };
  protoOf(MonthBased).toString = function () {
    return (this.months_1 % 1200 | 0) === 0 ? this.formatToString_rm4xej_k$(this.months_1 / 1200 | 0, 'CENTURY') : (this.months_1 % 12 | 0) === 0 ? this.formatToString_rm4xej_k$(this.months_1 / 12 | 0, 'YEAR') : (this.months_1 % 3 | 0) === 0 ? this.formatToString_rm4xej_k$(this.months_1 / 3 | 0, 'QUARTER') : this.formatToString_rm4xej_k$(this.months_1, 'MONTH');
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.NANOSECOND_1 = new TimeBased(new Long(1, 0));
    this.MICROSECOND_1 = this.NANOSECOND_1.times_kr2a3y_k$(1000);
    this.MILLISECOND_1 = this.MICROSECOND_1.times_kr2a3y_k$(1000);
    this.SECOND_1 = this.MILLISECOND_1.times_kr2a3y_k$(1000);
    this.MINUTE_1 = this.SECOND_1.times_kr2a3y_k$(60);
    this.HOUR_1 = this.MINUTE_1.times_kr2a3y_k$(60);
    this.DAY_1 = new DayBased(1);
    this.WEEK_1 = this.DAY_1.times_kr2a3y_k$(7);
    this.MONTH_1 = new MonthBased(1);
    this.QUARTER_1 = this.MONTH_1.times_kr2a3y_k$(3);
    this.YEAR_1 = this.MONTH_1.times_kr2a3y_k$(12);
    this.CENTURY_1 = this.YEAR_1.times_kr2a3y_k$(100);
  }
  protoOf(Companion_3).get_NANOSECOND_nxlhgx_k$ = function () {
    return this.NANOSECOND_1;
  };
  protoOf(Companion_3).get_MICROSECOND_rmegy9_k$ = function () {
    return this.MICROSECOND_1;
  };
  protoOf(Companion_3).get_MILLISECOND_ald81k_k$ = function () {
    return this.MILLISECOND_1;
  };
  protoOf(Companion_3).get_SECOND_3rkzul_k$ = function () {
    return this.SECOND_1;
  };
  protoOf(Companion_3).get_MINUTE_zplb1_k$ = function () {
    return this.MINUTE_1;
  };
  protoOf(Companion_3).get_HOUR_wo2b71_k$ = function () {
    return this.HOUR_1;
  };
  protoOf(Companion_3).get_DAY_18jw19_k$ = function () {
    return this.DAY_1;
  };
  protoOf(Companion_3).get_WEEK_wobo71_k$ = function () {
    return this.WEEK_1;
  };
  protoOf(Companion_3).get_MONTH_id5p9z_k$ = function () {
    return this.MONTH_1;
  };
  protoOf(Companion_3).get_QUARTER_nwunj7_k$ = function () {
    return this.QUARTER_1;
  };
  protoOf(Companion_3).get_YEAR_wocy2u_k$ = function () {
    return this.YEAR_1;
  };
  protoOf(Companion_3).get_CENTURY_o53irv_k$ = function () {
    return this.CENTURY_1;
  };
  protoOf(Companion_3).serializer_9w0wvi_k$ = function () {
    return DateTimeUnitSerializer_getInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_7() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function DateTimeUnit() {
    Companion_getInstance_7();
  }
  protoOf(DateTimeUnit).formatToString_rm4xej_k$ = function (value, unit) {
    return value === 1 ? unit : '' + value + '-' + unit;
  };
  protoOf(DateTimeUnit).formatToString_kuwbox_k$ = function (value, unit) {
    return equalsLong(value, new Long(1, 0)) ? unit : value.toString() + '-' + unit;
  };
  function get_isoDayNumber(_this__u8e3s4) {
    return _this__u8e3s4.get_ordinal_ip24qg_k$() + 1 | 0;
  }
  var DayOfWeek_MONDAY_instance;
  var DayOfWeek_TUESDAY_instance;
  var DayOfWeek_WEDNESDAY_instance;
  var DayOfWeek_THURSDAY_instance;
  var DayOfWeek_FRIDAY_instance;
  var DayOfWeek_SATURDAY_instance;
  var DayOfWeek_SUNDAY_instance;
  function values() {
    return [DayOfWeek_MONDAY_getInstance(), DayOfWeek_TUESDAY_getInstance(), DayOfWeek_WEDNESDAY_getInstance(), DayOfWeek_THURSDAY_getInstance(), DayOfWeek_FRIDAY_getInstance(), DayOfWeek_SATURDAY_getInstance(), DayOfWeek_SUNDAY_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'MONDAY':
        return DayOfWeek_MONDAY_getInstance();
      case 'TUESDAY':
        return DayOfWeek_TUESDAY_getInstance();
      case 'WEDNESDAY':
        return DayOfWeek_WEDNESDAY_getInstance();
      case 'THURSDAY':
        return DayOfWeek_THURSDAY_getInstance();
      case 'FRIDAY':
        return DayOfWeek_FRIDAY_getInstance();
      case 'SATURDAY':
        return DayOfWeek_SATURDAY_getInstance();
      case 'SUNDAY':
        return DayOfWeek_SUNDAY_getInstance();
      default:
        DayOfWeek_initEntries();
        THROW_IAE('No enum constant kotlinx.datetime.DayOfWeek.' + value);
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var DayOfWeek_entriesInitialized;
  function DayOfWeek_initEntries() {
    if (DayOfWeek_entriesInitialized)
      return Unit_getInstance();
    DayOfWeek_entriesInitialized = true;
    DayOfWeek_MONDAY_instance = new DayOfWeek('MONDAY', 0);
    DayOfWeek_TUESDAY_instance = new DayOfWeek('TUESDAY', 1);
    DayOfWeek_WEDNESDAY_instance = new DayOfWeek('WEDNESDAY', 2);
    DayOfWeek_THURSDAY_instance = new DayOfWeek('THURSDAY', 3);
    DayOfWeek_FRIDAY_instance = new DayOfWeek('FRIDAY', 4);
    DayOfWeek_SATURDAY_instance = new DayOfWeek('SATURDAY', 5);
    DayOfWeek_SUNDAY_instance = new DayOfWeek('SUNDAY', 6);
  }
  var $ENTRIES;
  function DayOfWeek(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DayOfWeek_0(isoDayNumber) {
    // Inline function 'kotlin.require' call
    if (!(1 <= isoDayNumber ? isoDayNumber <= 7 : false)) {
      var message = 'Expected ISO day-of-week number in 1..7, got ' + isoDayNumber;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return get_entries().get_c1px32_k$(isoDayNumber - 1 | 0);
  }
  function DayOfWeek_MONDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_MONDAY_instance;
  }
  function DayOfWeek_TUESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_TUESDAY_instance;
  }
  function DayOfWeek_WEDNESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_WEDNESDAY_instance;
  }
  function DayOfWeek_THURSDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_THURSDAY_instance;
  }
  function DayOfWeek_FRIDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_FRIDAY_instance;
  }
  function DayOfWeek_SATURDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SATURDAY_instance;
  }
  function DayOfWeek_SUNDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SUNDAY_instance;
  }
  function DateTimeFormatException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$() {
    var tmp = DateTimeFormatException_init_$Init$(objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_0(message) {
    var tmp = DateTimeFormatException_init_$Init$_0(message, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_0);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_1(cause, $this) {
    IllegalArgumentException_init_$Init$_1(cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_1(cause) {
    var tmp = DateTimeFormatException_init_$Init$_1(cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_1);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_2(message, cause, $this) {
    IllegalArgumentException_init_$Init$_2(message, cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_2(message, cause) {
    var tmp = DateTimeFormatException_init_$Init$_2(message, cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_2);
    return tmp;
  }
  function DateTimeFormatException() {
    captureStack(this, DateTimeFormatException);
  }
  function IllegalTimeZoneException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$() {
    var tmp = IllegalTimeZoneException_init_$Init$(objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$);
    return tmp;
  }
  function IllegalTimeZoneException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$_0(message) {
    var tmp = IllegalTimeZoneException_init_$Init$_0(message, objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$_0);
    return tmp;
  }
  function IllegalTimeZoneException_init_$Init$_1(cause, $this) {
    IllegalArgumentException_init_$Init$_1(cause, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$_1(cause) {
    var tmp = IllegalTimeZoneException_init_$Init$_1(cause, objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$_1);
    return tmp;
  }
  function IllegalTimeZoneException_init_$Init$_2(message, cause, $this) {
    IllegalArgumentException_init_$Init$_2(message, cause, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$_2(message, cause) {
    var tmp = IllegalTimeZoneException_init_$Init$_2(message, cause, objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$_2);
    return tmp;
  }
  function IllegalTimeZoneException() {
    captureStack(this, IllegalTimeZoneException);
  }
  function DateTimeArithmeticException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$() {
    var tmp = DateTimeArithmeticException_init_$Init$(objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_0(message) {
    var tmp = DateTimeArithmeticException_init_$Init$_0(message, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_0);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_1(cause, $this) {
    RuntimeException_init_$Init$_1(cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_1(cause) {
    var tmp = DateTimeArithmeticException_init_$Init$_1(cause, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_1);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_2(message, cause, $this) {
    RuntimeException_init_$Init$_2(message, cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_2(message, cause) {
    var tmp = DateTimeArithmeticException_init_$Init$_2(message, cause, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_2);
    return tmp;
  }
  function DateTimeArithmeticException() {
    captureStack(this, DateTimeArithmeticException);
  }
  function plus_1(_this__u8e3s4, value, unit) {
    return plus_4(_this__u8e3s4, fromInt(value), unit);
  }
  function getIsoDateFormat() {
    return Formats_getInstance_0().get_ISO_18jrwk_k$();
  }
  function format(_this__u8e3s4, format) {
    return format.format_l1mq08_k$(_this__u8e3s4);
  }
  function atTime(_this__u8e3s4, time) {
    return new LocalDateTime(_this__u8e3s4, time);
  }
  function minus(_this__u8e3s4, value, unit) {
    return plus_4(_this__u8e3s4, negate(fromInt(value)), unit);
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.EMPTY_1 = new LocalDateRange(new LocalDate(1970, 1, 2), new LocalDate(1970, 1, 1));
  }
  protoOf(Companion_4).get_EMPTY_i8q41w_k$ = function () {
    return this.EMPTY_1;
  };
  protoOf(Companion_4).fromRangeUntil_qv8t66_k$ = function (start, endExclusive) {
    return endExclusive.equals(Companion_getInstance_26().get_MIN_za2zu4_k$()) ? this.EMPTY_1 : this.fromRangeTo_amidtb_k$(start, minus(endExclusive, 1, Companion_getInstance_7().get_DAY_18jw19_k$()));
  };
  protoOf(Companion_4).fromRangeTo_amidtb_k$ = function (start, endInclusive) {
    return new LocalDateRange(start, endInclusive);
  };
  var Companion_instance_4;
  function Companion_getInstance_8() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function LocalDateRange(start, endInclusive) {
    Companion_getInstance_8();
    LocalDateProgression_init_$Init$(start, endInclusive, new Long(1, 0), this);
  }
  protoOf(LocalDateRange).get_start_iypx6h_k$ = function () {
    return this.first_1;
  };
  protoOf(LocalDateRange).get_endInclusive_r07xpi_k$ = function () {
    return this.last_1;
  };
  protoOf(LocalDateRange).get_endExclusive_pmwm6k_k$ = function () {
    if (this.last_1.equals(Companion_getInstance_26().get_MAX_ieaqrm_k$())) {
      // Inline function 'kotlin.error' call
      var message = 'Cannot return the exclusive upper bound of a range that includes LocalDate.MAX.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return plus_1(this.get_endInclusive_r07xpi_k$(), 1, Companion_getInstance_7().get_DAY_18jw19_k$());
  };
  protoOf(LocalDateRange).contains_gt9z1i_k$ = function (value) {
    var tmp = !(value == null) ? value : THROW_CCE();
    if (!(tmp instanceof LocalDate))
      return false;
    return this.first_1.compareTo_phv9sr_k$(value) <= 0 && value.compareTo_phv9sr_k$(this.last_1) <= 0;
  };
  protoOf(LocalDateRange).contains_aljjnj_k$ = function (element) {
    if (!(element instanceof LocalDate))
      return false;
    return this.contains_gt9z1i_k$(element instanceof LocalDate ? element : THROW_CCE());
  };
  protoOf(LocalDateRange).contains_3tkdvy_k$ = function (value) {
    return this.contains_gt9z1i_k$(value instanceof LocalDate ? value : THROW_CCE());
  };
  protoOf(LocalDateRange).isEmpty_y1axqb_k$ = function () {
    return this.first_1.compareTo_phv9sr_k$(this.last_1) > 0;
  };
  protoOf(LocalDateRange).toString = function () {
    return this.first_1.toString() + '..' + this.last_1.toString();
  };
  function LocalDateProgression_init_$Init$(start, endInclusive, step, $this) {
    LocalDateProgression.call($this, Companion_getInstance_0().fromClosedRange_brhbh5_k$(start.toEpochDays_tp9eth_k$(), endInclusive.toEpochDays_tp9eth_k$(), step));
    return $this;
  }
  function LocalDateProgression_init_$Create$(start, endInclusive, step) {
    return LocalDateProgression_init_$Init$(start, endInclusive, step, objectCreate(protoOf(LocalDateProgression)));
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).fromClosedRange_dba2er_k$ = function (rangeStart, rangeEnd, stepValue, stepUnit) {
    return LocalDateProgression_init_$Create$(rangeStart, rangeEnd, safeMultiplyOrClamp(stepValue, fromInt(stepUnit.get_days_wokl28_k$())));
  };
  var Companion_instance_5;
  function Companion_getInstance_9() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function LocalDateProgression(longProgression) {
    Companion_getInstance_9();
    this.longProgression_1 = longProgression;
    this.first_1 = Companion_getInstance_26().fromEpochDays_4kf494_k$(this.longProgression_1.get_first_irdx8n_k$());
    this.last_1 = Companion_getInstance_26().fromEpochDays_4kf494_k$(this.longProgression_1.get_last_wopotb_k$());
  }
  protoOf(LocalDateProgression).get_longProgression_bevbfr_k$ = function () {
    return this.longProgression_1;
  };
  protoOf(LocalDateProgression).get_first_irdx8n_k$ = function () {
    return this.first_1;
  };
  protoOf(LocalDateProgression).get_last_wopotb_k$ = function () {
    return this.last_1;
  };
  protoOf(LocalDateProgression).iterator_jk1svi_k$ = function () {
    return new LocalDateProgressionIterator(this.longProgression_1.iterator_jk1svi_k$());
  };
  protoOf(LocalDateProgression).isEmpty_y1axqb_k$ = function () {
    return this.longProgression_1.isEmpty_y1axqb_k$();
  };
  protoOf(LocalDateProgression).toString = function () {
    return compare(this.longProgression_1.get_step_woujh1_k$(), new Long(0, 0)) > 0 ? this.first_1.toString() + '..' + this.last_1.toString() + ' step ' + this.longProgression_1.get_step_woujh1_k$().toString() + 'D' : this.first_1.toString() + ' downTo ' + this.last_1.toString() + ' step ' + this.longProgression_1.get_step_woujh1_k$().toString() + 'D';
  };
  protoOf(LocalDateProgression).get_size_woubt6_k$ = function () {
    return get_sizeUnsafe(this.longProgression_1);
  };
  protoOf(LocalDateProgression).containsAll_w6d3pr_k$ = function (elements) {
    var tmp0 = isInterface(elements, Collection) ? elements : THROW_CCE();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        var tmp_0;
        if (element instanceof LocalDate) {
          tmp_0 = this.contains_gt9z1i_k$(element);
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(LocalDateProgression).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_w6d3pr_k$(elements);
  };
  protoOf(LocalDateProgression).contains_gt9z1i_k$ = function (value) {
    var tmp = !(value == null) ? value : THROW_CCE();
    if (!(tmp instanceof LocalDate))
      return false;
    return containsUnsafe(this.longProgression_1, value.toEpochDays_tp9eth_k$());
  };
  protoOf(LocalDateProgression).contains_aljjnj_k$ = function (element) {
    if (!(element instanceof LocalDate))
      return false;
    return this.contains_gt9z1i_k$(element instanceof LocalDate ? element : THROW_CCE());
  };
  protoOf(LocalDateProgression).equals = function (other) {
    var tmp;
    if (other instanceof LocalDateProgression) {
      tmp = this.longProgression_1.equals(other.longProgression_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(LocalDateProgression).hashCode = function () {
    return this.longProgression_1.hashCode();
  };
  function _get_iterator__8i7rvn($this) {
    return $this.iterator_1;
  }
  function LocalDateProgressionIterator(iterator) {
    this.iterator_1 = iterator;
  }
  protoOf(LocalDateProgressionIterator).hasNext_bitz1p_k$ = function () {
    return this.iterator_1.hasNext_bitz1p_k$();
  };
  protoOf(LocalDateProgressionIterator).next_20eer_k$ = function () {
    return Companion_getInstance_26().fromEpochDays_4kf494_k$(this.iterator_1.next_20eer_k$());
  };
  function getIsoDateTimeFormat() {
    return Formats_getInstance_1().get_ISO_18jrwk_k$();
  }
  function format_0(_this__u8e3s4, format) {
    return format.format_l1mq08_k$(_this__u8e3s4);
  }
  function getIsoTimeFormat() {
    return Formats_getInstance_2().get_ISO_18jrwk_k$();
  }
  function format_1(_this__u8e3s4, format) {
    return format.format_l1mq08_k$(_this__u8e3s4);
  }
  function get_number(_this__u8e3s4) {
    return _this__u8e3s4.get_ordinal_ip24qg_k$() + 1 | 0;
  }
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'JANUARY':
        return Month_JANUARY_getInstance();
      case 'FEBRUARY':
        return Month_FEBRUARY_getInstance();
      case 'MARCH':
        return Month_MARCH_getInstance();
      case 'APRIL':
        return Month_APRIL_getInstance();
      case 'MAY':
        return Month_MAY_getInstance();
      case 'JUNE':
        return Month_JUNE_getInstance();
      case 'JULY':
        return Month_JULY_getInstance();
      case 'AUGUST':
        return Month_AUGUST_getInstance();
      case 'SEPTEMBER':
        return Month_SEPTEMBER_getInstance();
      case 'OCTOBER':
        return Month_OCTOBER_getInstance();
      case 'NOVEMBER':
        return Month_NOVEMBER_getInstance();
      case 'DECEMBER':
        return Month_DECEMBER_getInstance();
      default:
        Month_initEntries();
        THROW_IAE('No enum constant kotlinx.datetime.Month.' + value);
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_getInstance();
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month('JANUARY', 0);
    Month_FEBRUARY_instance = new Month('FEBRUARY', 1);
    Month_MARCH_instance = new Month('MARCH', 2);
    Month_APRIL_instance = new Month('APRIL', 3);
    Month_MAY_instance = new Month('MAY', 4);
    Month_JUNE_instance = new Month('JUNE', 5);
    Month_JULY_instance = new Month('JULY', 6);
    Month_AUGUST_instance = new Month('AUGUST', 7);
    Month_SEPTEMBER_instance = new Month('SEPTEMBER', 8);
    Month_OCTOBER_instance = new Month('OCTOBER', 9);
    Month_NOVEMBER_instance = new Month('NOVEMBER', 10);
    Month_DECEMBER_instance = new Month('DECEMBER', 11);
  }
  var $ENTRIES_0;
  function Month(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Month_0(number) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(1 <= number ? number <= 12 : false)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return get_entries_0().get_c1px32_k$(number - 1 | 0);
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.INSTANCE_1 = new OverloadMarker();
  }
  protoOf(Companion_6).get_INSTANCE_1pfym7_k$ = function () {
    return this.INSTANCE_1;
  };
  var Companion_instance_6;
  function Companion_getInstance_10() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function OverloadMarker() {
    Companion_getInstance_10();
  }
  function format_2(_this__u8e3s4, format) {
    return format.format_l1mq08_k$(_this__u8e3s4);
  }
  function getIsoUtcOffsetFormat() {
    return Formats_getInstance_3().get_ISO_18jrwk_k$();
  }
  function onDay(_this__u8e3s4, day) {
    return LocalDate_init_$Create$(_this__u8e3s4.get_year_woy26e_k$(), _this__u8e3s4.get_month_ivc8d3_k$(), day);
  }
  function get_MAX(_this__u8e3s4) {
    return get_yearMonth(Companion_getInstance_26().get_MAX_ieaqrm_k$());
  }
  function plus_2(_this__u8e3s4, value, unit) {
    return plus_3(_this__u8e3s4, fromInt(value), unit);
  }
  function get_MIN(_this__u8e3s4) {
    return get_yearMonth(Companion_getInstance_26().get_MIN_za2zu4_k$());
  }
  function minus_0(_this__u8e3s4, value, unit) {
    return minus_1(_this__u8e3s4, fromInt(value), unit);
  }
  function get_prolepticMonth(_this__u8e3s4) {
    var tmp0 = multiply(numberToLong(_this__u8e3s4.get_year_woy26e_k$()), new Long(12, 0));
    // Inline function 'kotlin.Long.plus' call
    var other = _this__u8e3s4.get_monthNumber_3kt44j_k$() - 1 | 0;
    return add(tmp0, fromInt(other));
  }
  function fromProlepticMonth(_this__u8e3s4, prolepticMonth) {
    // Inline function 'kotlin.floorDiv' call
    // Inline function 'kotlin.floorDiv' call
    var other = fromInt(12);
    var q = divide(prolepticMonth, other);
    if (compare(bitwiseXor(prolepticMonth, other), new Long(0, 0)) < 0 && !equalsLong(multiply(q, other), prolepticMonth)) {
      var _unary__edvuaz = q;
      q = subtract(_unary__edvuaz, get_ONE());
    }
    var year = q;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(Companion_getInstance_26().get_MIN_za2zu4_k$().get_year_woy26e_k$(), Companion_getInstance_26().get_MAX_ieaqrm_k$().get_year_woy26e_k$());
    // Inline function 'kotlin.require' call
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), year)) {
      var message = 'Year ' + year.toString() + ' is out of range: ' + Companion_getInstance_26().get_MIN_za2zu4_k$().get_year_woy26e_k$() + '..' + Companion_getInstance_26().get_MAX_ieaqrm_k$().get_year_woy26e_k$();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.mod' call
    // Inline function 'kotlin.mod' call
    var other_0 = fromInt(12);
    var r = modulo(prolepticMonth, other_0);
    var tmp$ret$5 = add(r, bitwiseAnd(other_0, shiftRight(bitwiseAnd(bitwiseXor(r, other_0), bitwiseOr(r, negate(r))), 63)));
    var month = convertToInt(tmp$ret$5) + 1 | 0;
    return new YearMonth(convertToInt(year), month);
  }
  function get_yearMonth(_this__u8e3s4) {
    return YearMonth_init_$Create$(_this__u8e3s4.get_year_woy26e_k$(), _this__u8e3s4.get_month_ivc8d3_k$());
  }
  function plus_3(_this__u8e3s4, value, unit) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var monthsToAdd = safeMultiply(value, fromInt(unit.get_months_gqmrjw_k$()));
      var tmp_0;
      if (equalsLong(monthsToAdd, new Long(0, 0))) {
        tmp_0 = _this__u8e3s4;
      } else {
        tmp_0 = fromProlepticMonth(Companion_getInstance_30(), safeAdd(get_prolepticMonth(_this__u8e3s4), monthsToAdd));
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof ArithmeticException) {
        var e = $p;
        throw DateTimeArithmeticException_init_$Create$_2('Arithmetic overflow when adding ' + value.toString() + ' of ' + unit.toString() + ' to ' + _this__u8e3s4.toString(), e);
      } else {
        if ($p instanceof IllegalArgumentException) {
          var e_0 = $p;
          throw DateTimeArithmeticException_init_$Create$_2('Boundaries of YearMonth exceeded when adding ' + value.toString() + ' of ' + unit.toString() + ' to ' + _this__u8e3s4.toString(), e_0);
        } else {
          throw $p;
        }
      }
    }
    return tmp;
  }
  function minus_1(_this__u8e3s4, value, unit) {
    return !equalsLong(value, new Long(0, -2147483648)) ? plus_3(_this__u8e3s4, negate(value), unit) : plus_2(plus_3(_this__u8e3s4, new Long(-1, 2147483647), unit), 1, unit);
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.EMPTY_1 = new YearMonthRange(new YearMonth(0, 2), new YearMonth(0, 1));
  }
  protoOf(Companion_7).get_EMPTY_i8q41w_k$ = function () {
    return this.EMPTY_1;
  };
  protoOf(Companion_7).fromRangeUntil_bi3wdq_k$ = function (start, endExclusive) {
    return endExclusive.equals(get_MIN(Companion_getInstance_30())) ? this.EMPTY_1 : this.fromRangeTo_pznalr_k$(start, minus_0(endExclusive, 1, Companion_getInstance_7().get_MONTH_id5p9z_k$()));
  };
  protoOf(Companion_7).fromRangeTo_pznalr_k$ = function (start, endInclusive) {
    return new YearMonthRange(start, endInclusive);
  };
  var Companion_instance_7;
  function Companion_getInstance_11() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function YearMonthRange(start, endInclusive) {
    Companion_getInstance_11();
    YearMonthProgression_init_$Init$(start, endInclusive, new Long(1, 0), this);
  }
  protoOf(YearMonthRange).get_start_iypx6h_k$ = function () {
    return this.first_1;
  };
  protoOf(YearMonthRange).get_endInclusive_r07xpi_k$ = function () {
    return this.last_1;
  };
  protoOf(YearMonthRange).get_endExclusive_pmwm6k_k$ = function () {
    if (this.last_1.equals(get_MAX(Companion_getInstance_30()))) {
      // Inline function 'kotlin.error' call
      var message = 'Cannot return the exclusive upper bound of a range that includes YearMonth.MAX.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return plus_2(this.get_endInclusive_r07xpi_k$(), 1, Companion_getInstance_7().get_MONTH_id5p9z_k$());
  };
  protoOf(YearMonthRange).contains_9ycgva_k$ = function (value) {
    var tmp = !(value == null) ? value : THROW_CCE();
    if (!(tmp instanceof YearMonth))
      return false;
    return this.first_1.compareTo_wcsryz_k$(value) <= 0 && value.compareTo_wcsryz_k$(this.last_1) <= 0;
  };
  protoOf(YearMonthRange).contains_aljjnj_k$ = function (element) {
    if (!(element instanceof YearMonth))
      return false;
    return this.contains_9ycgva_k$(element instanceof YearMonth ? element : THROW_CCE());
  };
  protoOf(YearMonthRange).contains_3tkdvy_k$ = function (value) {
    return this.contains_9ycgva_k$(value instanceof YearMonth ? value : THROW_CCE());
  };
  protoOf(YearMonthRange).isEmpty_y1axqb_k$ = function () {
    return this.first_1.compareTo_wcsryz_k$(this.last_1) > 0;
  };
  protoOf(YearMonthRange).toString = function () {
    return this.first_1.toString() + '..' + this.last_1.toString();
  };
  function YearMonthProgression_init_$Init$(start, endInclusive, step, $this) {
    YearMonthProgression.call($this, Companion_getInstance_0().fromClosedRange_brhbh5_k$(get_prolepticMonth(start), get_prolepticMonth(endInclusive), step));
    return $this;
  }
  function YearMonthProgression_init_$Create$(start, endInclusive, step) {
    return YearMonthProgression_init_$Init$(start, endInclusive, step, objectCreate(protoOf(YearMonthProgression)));
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  protoOf(Companion_8).fromClosedRange_aja6dr_k$ = function (rangeStart, rangeEnd, stepValue, stepUnit) {
    return YearMonthProgression_init_$Create$(rangeStart, rangeEnd, safeMultiplyOrClamp(stepValue, fromInt(stepUnit.get_months_gqmrjw_k$())));
  };
  var Companion_instance_8;
  function Companion_getInstance_12() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function YearMonthProgression(longProgression) {
    Companion_getInstance_12();
    this.longProgression_1 = longProgression;
    this.first_1 = fromProlepticMonth(Companion_getInstance_30(), this.longProgression_1.get_first_irdx8n_k$());
    this.last_1 = fromProlepticMonth(Companion_getInstance_30(), this.longProgression_1.get_last_wopotb_k$());
  }
  protoOf(YearMonthProgression).get_longProgression_bevbfr_k$ = function () {
    return this.longProgression_1;
  };
  protoOf(YearMonthProgression).get_first_irdx8n_k$ = function () {
    return this.first_1;
  };
  protoOf(YearMonthProgression).get_last_wopotb_k$ = function () {
    return this.last_1;
  };
  protoOf(YearMonthProgression).iterator_jk1svi_k$ = function () {
    return new YearMonthProgressionIterator(this.longProgression_1.iterator_jk1svi_k$());
  };
  protoOf(YearMonthProgression).isEmpty_y1axqb_k$ = function () {
    return this.longProgression_1.isEmpty_y1axqb_k$();
  };
  protoOf(YearMonthProgression).toString = function () {
    return compare(this.longProgression_1.get_step_woujh1_k$(), new Long(0, 0)) > 0 ? this.first_1.toString() + '..' + this.last_1.toString() + ' step ' + this.longProgression_1.get_step_woujh1_k$().toString() + 'M' : this.first_1.toString() + ' downTo ' + this.last_1.toString() + ' step ' + this.longProgression_1.get_step_woujh1_k$().toString() + 'M';
  };
  protoOf(YearMonthProgression).get_size_woubt6_k$ = function () {
    return get_sizeUnsafe(this.longProgression_1);
  };
  protoOf(YearMonthProgression).containsAll_1h05ff_k$ = function (elements) {
    var tmp0 = isInterface(elements, Collection) ? elements : THROW_CCE();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        var tmp_0;
        if (element instanceof YearMonth) {
          tmp_0 = this.contains_9ycgva_k$(element);
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(YearMonthProgression).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_1h05ff_k$(elements);
  };
  protoOf(YearMonthProgression).contains_9ycgva_k$ = function (value) {
    var tmp = !(value == null) ? value : THROW_CCE();
    if (!(tmp instanceof YearMonth))
      return false;
    return containsUnsafe(this.longProgression_1, get_prolepticMonth(value));
  };
  protoOf(YearMonthProgression).contains_aljjnj_k$ = function (element) {
    if (!(element instanceof YearMonth))
      return false;
    return this.contains_9ycgva_k$(element instanceof YearMonth ? element : THROW_CCE());
  };
  protoOf(YearMonthProgression).equals = function (other) {
    var tmp;
    if (other instanceof YearMonthProgression) {
      tmp = this.longProgression_1.equals(other.longProgression_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(YearMonthProgression).hashCode = function () {
    return this.longProgression_1.hashCode();
  };
  function _get_iterator__8i7rvn_0($this) {
    return $this.iterator_1;
  }
  function YearMonthProgressionIterator(iterator) {
    this.iterator_1 = iterator;
  }
  protoOf(YearMonthProgressionIterator).hasNext_bitz1p_k$ = function () {
    return this.iterator_1.hasNext_bitz1p_k$();
  };
  protoOf(YearMonthProgressionIterator).next_20eer_k$ = function () {
    return fromProlepticMonth(Companion_getInstance_30(), this.iterator_1.next_20eer_k$());
  };
  function get_timeZoneField() {
    _init_properties_DateTimeComponents_kt__9iimb5();
    return timeZoneField;
  }
  var timeZoneField;
  function get_emptyDateTimeComponentsContents() {
    _init_properties_DateTimeComponents_kt__9iimb5();
    return emptyDateTimeComponentsContents;
  }
  var emptyDateTimeComponentsContents;
  function DateTimeComponentsContents(date, time, offset, timeZoneId) {
    date = date === VOID ? new IncompleteLocalDate() : date;
    time = time === VOID ? new IncompleteLocalTime() : time;
    offset = offset === VOID ? new IncompleteUtcOffset() : offset;
    timeZoneId = timeZoneId === VOID ? null : timeZoneId;
    this.date_1 = date;
    this.time_1 = time;
    this.offset_1 = offset;
    this.timeZoneId_1 = timeZoneId;
  }
  protoOf(DateTimeComponentsContents).get_date_wokkxj_k$ = function () {
    return this.date_1;
  };
  protoOf(DateTimeComponentsContents).get_time_wouyhi_k$ = function () {
    return this.time_1;
  };
  protoOf(DateTimeComponentsContents).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(DateTimeComponentsContents).set_timeZoneId_7jni6e_k$ = function (_set____db54di) {
    this.timeZoneId_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).get_timeZoneId_3tgi1v_k$ = function () {
    return this.timeZoneId_1;
  };
  protoOf(DateTimeComponentsContents).copy_1tks5_k$ = function () {
    return new DateTimeComponentsContents(this.date_1.copy_1tks5_k$(), this.time_1.copy_1tks5_k$(), this.offset_1.copy_1tks5_k$(), this.timeZoneId_1);
  };
  protoOf(DateTimeComponentsContents).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof DateTimeComponentsContents) {
      tmp_2 = other.date_1.equals(this.date_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.time_1.equals(this.time_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.offset_1.equals(this.offset_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.timeZoneId_1 == this.timeZoneId_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DateTimeComponentsContents).hashCode = function () {
    var tmp = this.date_1.hashCode() ^ this.time_1.hashCode() ^ this.offset_1.hashCode();
    var tmp0_safe_receiver = this.timeZoneId_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
  };
  protoOf(DateTimeComponentsContents).set_day_420fh8_k$ = function (_set____db54di) {
    this.date_1.set_day_420fh8_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_day_18j7il_k$ = function () {
    return this.date_1.get_day_18j7il_k$();
  };
  protoOf(DateTimeComponentsContents).set_dayOfWeek_rlg9ap_k$ = function (_set____db54di) {
    this.date_1.set_dayOfWeek_rlg9ap_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_dayOfWeek_3kfgci_k$ = function () {
    return this.date_1.get_dayOfWeek_3kfgci_k$();
  };
  protoOf(DateTimeComponentsContents).set_dayOfYear_b6dvlk_k$ = function (_set____db54di) {
    this.date_1.set_dayOfYear_b6dvlk_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_dayOfYear_3ke6gp_k$ = function () {
    return this.date_1.get_dayOfYear_3ke6gp_k$();
  };
  protoOf(DateTimeComponentsContents).set_year_8yykwv_k$ = function (_set____db54di) {
    this.date_1.set_year_8yykwv_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_year_woy26e_k$ = function () {
    return this.date_1.get_year_woy26e_k$();
  };
  protoOf(DateTimeComponentsContents).set_monthNumber_nufdv5_k$ = function (_set____db54di) {
    this.date_1.set_monthNumber_nufdv5_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_monthNumber_nb47ls_k$ = function () {
    return this.date_1.get_monthNumber_nb47ls_k$();
  };
  protoOf(DateTimeComponentsContents).set_minute_35xlhm_k$ = function (_set____db54di) {
    this.time_1.set_minute_35xlhm_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_minute_gnc10d_k$ = function () {
    return this.time_1.get_minute_gnc10d_k$();
  };
  protoOf(DateTimeComponentsContents).set_second_5q0zme_k$ = function (_set____db54di) {
    this.time_1.set_second_5q0zme_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_second_jf7fjx_k$ = function () {
    return this.time_1.get_second_jf7fjx_k$();
  };
  protoOf(DateTimeComponentsContents).set_nanosecond_xpjfxy_k$ = function (_set____db54di) {
    this.time_1.set_nanosecond_xpjfxy_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_nanosecond_fws9td_k$ = function () {
    return this.time_1.get_nanosecond_fws9td_k$();
  };
  protoOf(DateTimeComponentsContents).set_hour_cn99tm_k$ = function (_set____db54di) {
    this.time_1.set_hour_cn99tm_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_hour_wonfal_k$ = function () {
    return this.time_1.get_hour_wonfal_k$();
  };
  protoOf(DateTimeComponentsContents).set_hourOfAmPm_4kn0va_k$ = function (_set____db54di) {
    this.time_1.set_hourOfAmPm_4kn0va_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_hourOfAmPm_c9obsj_k$ = function () {
    return this.time_1.get_hourOfAmPm_c9obsj_k$();
  };
  protoOf(DateTimeComponentsContents).set_amPm_5mqo57_k$ = function (_set____db54di) {
    this.time_1.set_amPm_5mqo57_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_amPm_woiw0i_k$ = function () {
    return this.time_1.get_amPm_woiw0i_k$();
  };
  protoOf(DateTimeComponentsContents).set_fractionOfSecond_ixjooe_k$ = function (value) {
    this.time_1.set_fractionOfSecond_ixjooe_k$(value);
  };
  protoOf(DateTimeComponentsContents).get_fractionOfSecond_3ubmju_k$ = function () {
    return this.time_1.get_fractionOfSecond_3ubmju_k$();
  };
  protoOf(DateTimeComponentsContents).set_offsetIsNegative_lg0w0f_k$ = function (_set____db54di) {
    this.offset_1.set_offsetIsNegative_lg0w0f_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_offsetIsNegative_5z1gsb_k$ = function () {
    return this.offset_1.get_offsetIsNegative_5z1gsb_k$();
  };
  protoOf(DateTimeComponentsContents).set_offsetHours_5m57ic_k$ = function (_set____db54di) {
    this.offset_1.set_offsetHours_5m57ic_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_offsetHours_yn9exf_k$ = function () {
    return this.offset_1.get_offsetHours_yn9exf_k$();
  };
  protoOf(DateTimeComponentsContents).set_offsetMinutesOfHour_lotc9b_k$ = function (_set____db54di) {
    this.offset_1.set_offsetMinutesOfHour_lotc9b_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_offsetMinutesOfHour_p1w44e_k$ = function () {
    return this.offset_1.get_offsetMinutesOfHour_p1w44e_k$();
  };
  protoOf(DateTimeComponentsContents).set_offsetSecondsOfMinute_kv6vfj_k$ = function (_set____db54di) {
    this.offset_1.set_offsetSecondsOfMinute_kv6vfj_k$(_set____db54di);
  };
  protoOf(DateTimeComponentsContents).get_offsetSecondsOfMinute_mpvmxe_k$ = function () {
    return this.offset_1.get_offsetSecondsOfMinute_mpvmxe_k$();
  };
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda($this$Format) {
    $this$Format.date_aq11yp_k$(get_ISO_DATE());
    var tmp = [DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda];
    alternativeParsing($this$Format, tmp, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_0);
    $this$Format.hour$default_sexqwx_k$();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.minute$default_g584a9_k$();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.second$default_h6j21d_k$();
    optional($this$Format, VOID, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_1);
    var tmp_0 = [DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_2];
    alternativeParsing($this$Format, tmp_0, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_3);
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda($this$alternativeParsing) {
    char($this$alternativeParsing, _Char___init__impl__6a9atx(116));
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_0($this$alternativeParsing) {
    char($this$alternativeParsing, _Char___init__impl__6a9atx(84));
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_1($this$optional) {
    char($this$optional, _Char___init__impl__6a9atx(46));
    $this$optional.secondFraction_6m5e86_k$(1, 9);
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_2($this$alternativeParsing) {
    $this$alternativeParsing.offsetHours$default_2ga4wd_k$();
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_3($this$alternativeParsing) {
    $this$alternativeParsing.offset_8ge9gu_k$(Formats_getInstance_3().get_ISO_18jrwk_k$());
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$RFC_1123$lambda($this$Format) {
    var tmp = [DateTimeComponents$Formats$RFC_1123$lambda$lambda];
    alternativeParsing($this$Format, tmp, DateTimeComponents$Formats$RFC_1123$lambda$lambda_0);
    $this$Format.day_qqmnko_k$(Padding_NONE_getInstance());
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.monthName_asbkgr_k$(Companion_getInstance_21().get_ENGLISH_ABBREVIATED_cfvc81_k$());
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.year$default_9maba2_k$();
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.hour$default_sexqwx_k$();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.minute$default_g584a9_k$();
    optional($this$Format, VOID, DateTimeComponents$Formats$RFC_1123$lambda$lambda_1);
    $this$Format.chars_pe6iqb_k$(' ');
    var tmp_0 = DateTimeComponents$Formats$RFC_1123$lambda$lambda_2;
    var tmp_1 = [tmp_0, DateTimeComponents$Formats$RFC_1123$lambda$lambda_3];
    alternativeParsing($this$Format, tmp_1, DateTimeComponents$Formats$RFC_1123$lambda$lambda_4);
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda($this$alternativeParsing) {
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_0($this$alternativeParsing) {
    $this$alternativeParsing.dayOfWeek_tn8lxa_k$(Companion_getInstance_15().get_ENGLISH_ABBREVIATED_cfvc81_k$());
    $this$alternativeParsing.chars_pe6iqb_k$(', ');
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_1($this$optional) {
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.second$default_h6j21d_k$();
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_2($this$alternativeParsing) {
    $this$alternativeParsing.chars_pe6iqb_k$('UT');
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_3($this$alternativeParsing) {
    $this$alternativeParsing.chars_pe6iqb_k$('Z');
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_4($this$alternativeParsing) {
    optional($this$alternativeParsing, 'GMT', DateTimeComponents$Formats$RFC_1123$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda$lambda($this$optional) {
    $this$optional.offset_8ge9gu_k$(Formats_getInstance_3().get_FOUR_DIGITS_7a8eh6_k$());
    return Unit_getInstance();
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  protoOf(Companion_9).Format_xzgceo_k$ = function (block) {
    var builder = new Builder(new AppendableFormatStructure());
    block(builder);
    return new DateTimeComponentsFormat(builder.build_1k0s4u_k$());
  };
  var Companion_instance_9;
  function Companion_getInstance_13() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Formats() {
    Formats_instance = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_13();
    tmp.ISO_DATE_TIME_OFFSET_1 = tmp_0.Format_xzgceo_k$(DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda);
    var tmp_1 = this;
    var tmp_2 = Companion_getInstance_13();
    tmp_1.RFC_1123__1 = tmp_2.Format_xzgceo_k$(DateTimeComponents$Formats$RFC_1123$lambda);
  }
  protoOf(Formats).get_ISO_DATE_TIME_OFFSET_7s4r8p_k$ = function () {
    return this.ISO_DATE_TIME_OFFSET_1;
  };
  protoOf(Formats).get_RFC_1123_h6865i_k$ = function () {
    return this.RFC_1123__1;
  };
  var Formats_instance;
  function Formats_getInstance() {
    if (Formats_instance == null)
      new Formats();
    return Formats_instance;
  }
  function IncompleteLocalDate$_get_year_$ref_daef0a(p0) {
    return function () {
      return p0.get_year_woy26e_k$();
    };
  }
  function IncompleteLocalDate$_set_year_$ref_hi3ji(p0) {
    return function (_this__u8e3s4) {
      p0.set_year_8yykwv_k$(_this__u8e3s4);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_year_$ref_8jgxao() {
    return function (p0) {
      return p0.get_year_woy26e_k$();
    };
  }
  function DateTimeComponents$_set_year_$ref_49fe64() {
    return function (p0, p1) {
      p0.set_year_8yykwv_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_year_$ref_8jgxao_0() {
    return function (p0) {
      return p0.get_year_woy26e_k$();
    };
  }
  function DateTimeComponents$_set_year_$ref_49fe64_0() {
    return function (p0, p1) {
      p0.set_year_8yykwv_k$(p1);
      return Unit_getInstance();
    };
  }
  function IncompleteLocalDate$_get_monthNumber_$ref_ba4wq6(p0) {
    return function () {
      return p0.get_monthNumber_nb47ls_k$();
    };
  }
  function IncompleteLocalDate$_set_monthNumber_$ref_16ep7m(p0) {
    return function (_this__u8e3s4) {
      p0.set_monthNumber_nufdv5_k$(_this__u8e3s4);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_monthNumber_$ref_t7s60s() {
    return function (p0) {
      return p0.get_monthNumber_nb47ls_k$();
    };
  }
  function DateTimeComponents$_set_monthNumber_$ref_vplofs() {
    return function (p0, p1) {
      p0.set_monthNumber_nufdv5_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_monthNumber_$ref_t7s60s_0() {
    return function (p0) {
      return p0.get_monthNumber_nb47ls_k$();
    };
  }
  function DateTimeComponents$_set_monthNumber_$ref_vplofs_0() {
    return function (p0, p1) {
      p0.set_monthNumber_nufdv5_k$(p1);
      return Unit_getInstance();
    };
  }
  function IncompleteLocalDate$_get_day_$ref_a02fj9(p0) {
    return function () {
      return p0.get_day_18j7il_k$();
    };
  }
  function IncompleteLocalDate$_set_day_$ref_fm5utr(p0) {
    return function (_this__u8e3s4) {
      p0.set_day_420fh8_k$(_this__u8e3s4);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_day_$ref_qt8vch() {
    return function (p0) {
      return p0.get_day_18j7il_k$();
    };
  }
  function DateTimeComponents$_set_day_$ref_ilmw9n() {
    return function (p0, p1) {
      p0.set_day_420fh8_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_day_$ref_qt8vch_0() {
    return function (p0) {
      return p0.get_day_18j7il_k$();
    };
  }
  function DateTimeComponents$_set_day_$ref_ilmw9n_0() {
    return function (p0, p1) {
      p0.set_day_420fh8_k$(p1);
      return Unit_getInstance();
    };
  }
  function IncompleteLocalDate$_get_day_$ref_a02fj9_0(p0) {
    return function () {
      return p0.get_day_18j7il_k$();
    };
  }
  function IncompleteLocalDate$_set_day_$ref_fm5utr_0(p0) {
    return function (_this__u8e3s4) {
      p0.set_day_420fh8_k$(_this__u8e3s4);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_dayOfMonth_$ref_gl36kg() {
    return function (p0) {
      return p0.get_dayOfMonth_vblo3a_k$();
    };
  }
  function DateTimeComponents$_set_dayOfMonth_$ref_swxfd8() {
    return function (p0, p1) {
      p0.set_dayOfMonth_qpi7zl_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_dayOfMonth_$ref_gl36kg_0() {
    return function (p0) {
      return p0.get_dayOfMonth_vblo3a_k$();
    };
  }
  function DateTimeComponents$_set_dayOfMonth_$ref_swxfd8_0() {
    return function (p0, p1) {
      p0.set_dayOfMonth_qpi7zl_k$(p1);
      return Unit_getInstance();
    };
  }
  function IncompleteLocalDate$_get_dayOfYear_$ref_6939jb(p0) {
    return function () {
      return p0.get_dayOfYear_3ke6gp_k$();
    };
  }
  function IncompleteLocalDate$_set_dayOfYear_$ref_lgus1n(p0) {
    return function (_this__u8e3s4) {
      p0.set_dayOfYear_b6dvlk_k$(_this__u8e3s4);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_dayOfYear_$ref_h2q2cd() {
    return function (p0) {
      return p0.get_dayOfYear_3ke6gp_k$();
    };
  }
  function DateTimeComponents$_set_dayOfYear_$ref_wahkup() {
    return function (p0, p1) {
      p0.set_dayOfYear_b6dvlk_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_dayOfYear_$ref_h2q2cd_0() {
    return function (p0) {
      return p0.get_dayOfYear_3ke6gp_k$();
    };
  }
  function DateTimeComponents$_set_dayOfYear_$ref_wahkup_0() {
    return function (p0, p1) {
      p0.set_dayOfYear_b6dvlk_k$(p1);
      return Unit_getInstance();
    };
  }
  function IncompleteLocalTime$_get_hour_$ref_3ms3pc(p0) {
    return function () {
      return p0.get_hour_wonfal_k$();
    };
  }
  function IncompleteLocalTime$_set_hour_$ref_9647rg(p0) {
    return function (_this__u8e3s4) {
      p0.set_hour_cn99tm_k$(_this__u8e3s4);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_hour_$ref_fxx1k9() {
    return function (p0) {
      return p0.get_hour_wonfal_k$();
    };
  }
  function DateTimeComponents$_set_hour_$ref_sqtd11() {
    return function (p0, p1) {
      p0.set_hour_cn99tm_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_hour_$ref_fxx1k9_0() {
    return function (p0) {
      return p0.get_hour_wonfal_k$();
    };
  }
  function DateTimeComponents$_set_hour_$ref_sqtd11_0() {
    return function (p0, p1) {
      p0.set_hour_cn99tm_k$(p1);
      return Unit_getInstance();
    };
  }
  function IncompleteLocalTime$_get_hourOfAmPm_$ref_iccr34(p0) {
    return function () {
      return p0.get_hourOfAmPm_c9obsj_k$();
    };
  }
  function IncompleteLocalTime$_set_hourOfAmPm_$ref_76qoyc(p0) {
    return function (_this__u8e3s4) {
      p0.set_hourOfAmPm_4kn0va_k$(_this__u8e3s4);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_hourOfAmPm_$ref_8zdiuv() {
    return function (p0) {
      return p0.get_hourOfAmPm_c9obsj_k$();
    };
  }
  function DateTimeComponents$_set_hourOfAmPm_$ref_yigywb() {
    return function (p0, p1) {
      p0.set_hourOfAmPm_4kn0va_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_hourOfAmPm_$ref_8zdiuv_0() {
    return function (p0) {
      return p0.get_hourOfAmPm_c9obsj_k$();
    };
  }
  function DateTimeComponents$_set_hourOfAmPm_$ref_yigywb_0() {
    return function (p0, p1) {
      p0.set_hourOfAmPm_4kn0va_k$(p1);
      return Unit_getInstance();
    };
  }
  function IncompleteLocalTime$_get_amPm_$ref_spitbv(p0) {
    return function () {
      return p0.get_amPm_woiw0i_k$();
    };
  }
  function IncompleteLocalTime$_set_amPm_$ref_tiox6h(p0) {
    return function (_this__u8e3s4) {
      p0.set_amPm_5mqo57_k$(_this__u8e3s4);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_amPm_$ref_mqw3do() {
    return function (p0) {
      return p0.get_amPm_woiw0i_k$();
    };
  }
  function DateTimeComponents$_set_amPm_$ref_9xzrww() {
    return function (p0, p1) {
      p0.set_amPm_5mqo57_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_amPm_$ref_mqw3do_0() {
    return function (p0) {
      return p0.get_amPm_woiw0i_k$();
    };
  }
  function DateTimeComponents$_set_amPm_$ref_9xzrww_0() {
    return function (p0, p1) {
      p0.set_amPm_5mqo57_k$(p1);
      return Unit_getInstance();
    };
  }
  function IncompleteLocalTime$_get_minute_$ref_fv9tbk(p0) {
    return function () {
      return p0.get_minute_gnc10d_k$();
    };
  }
  function IncompleteLocalTime$_set_minute_$ref_t186c(p0) {
    return function (_this__u8e3s4) {
      p0.set_minute_35xlhm_k$(_this__u8e3s4);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_minute_$ref_riuryf() {
    return function (p0) {
      return p0.get_minute_gnc10d_k$();
    };
  }
  function DateTimeComponents$_set_minute_$ref_cgm6t7() {
    return function (p0, p1) {
      p0.set_minute_35xlhm_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_minute_$ref_riuryf_0() {
    return function (p0) {
      return p0.get_minute_gnc10d_k$();
    };
  }
  function DateTimeComponents$_set_minute_$ref_cgm6t7_0() {
    return function (p0, p1) {
      p0.set_minute_35xlhm_k$(p1);
      return Unit_getInstance();
    };
  }
  function IncompleteLocalTime$_get_second_$ref_s7ut4g(p0) {
    return function () {
      return p0.get_second_jf7fjx_k$();
    };
  }
  function IncompleteLocalTime$_set_second_$ref_rr0npg(p0) {
    return function (_this__u8e3s4) {
      p0.set_second_5q0zme_k$(_this__u8e3s4);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_second_$ref_gk9uhl() {
    return function (p0) {
      return p0.get_second_jf7fjx_k$();
    };
  }
  function DateTimeComponents$_set_second_$ref_vmifmt() {
    return function (p0, p1) {
      p0.set_second_5q0zme_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_second_$ref_gk9uhl_0() {
    return function (p0) {
      return p0.get_second_jf7fjx_k$();
    };
  }
  function DateTimeComponents$_set_second_$ref_vmifmt_0() {
    return function (p0, p1) {
      p0.set_second_5q0zme_k$(p1);
      return Unit_getInstance();
    };
  }
  function IncompleteUtcOffset$_get_offsetIsNegative_$ref_ewfhg3(p0) {
    return function () {
      return p0.get_offsetIsNegative_5z1gsb_k$();
    };
  }
  function IncompleteUtcOffset$_set_offsetIsNegative_$ref_sui5gf(p0) {
    return function (_this__u8e3s4) {
      p0.set_offsetIsNegative_lg0w0f_k$(_this__u8e3s4);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_offsetIsNegative_$ref_kc5odh() {
    return function (p0) {
      return p0.get_offsetIsNegative_5z1gsb_k$();
    };
  }
  function DateTimeComponents$_set_offsetIsNegative_$ref_6e30d5() {
    return function (p0, p1) {
      p0.set_offsetIsNegative_lg0w0f_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_offsetIsNegative_$ref_kc5odh_0() {
    return function (p0) {
      return p0.get_offsetIsNegative_5z1gsb_k$();
    };
  }
  function DateTimeComponents$_set_offsetIsNegative_$ref_6e30d5_0() {
    return function (p0, p1) {
      p0.set_offsetIsNegative_lg0w0f_k$(p1);
      return Unit_getInstance();
    };
  }
  function IncompleteUtcOffset$_get_offsetHours_$ref_784o7(p0) {
    return function () {
      return p0.get_offsetHours_yn9exf_k$();
    };
  }
  function IncompleteUtcOffset$_set_offsetHours_$ref_aayc6r(p0) {
    return function (_this__u8e3s4) {
      p0.set_offsetHours_5m57ic_k$(_this__u8e3s4);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_offsetHours_$ref_bunfn3() {
    return function (p0) {
      return p0.get_offsetHours_yn9exf_k$();
    };
  }
  function DateTimeComponents$_set_offsetHours_$ref_lydn5n() {
    return function (p0, p1) {
      p0.set_offsetHours_5m57ic_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_offsetHours_$ref_bunfn3_0() {
    return function (p0) {
      return p0.get_offsetHours_yn9exf_k$();
    };
  }
  function DateTimeComponents$_set_offsetHours_$ref_lydn5n_0() {
    return function (p0, p1) {
      p0.set_offsetHours_5m57ic_k$(p1);
      return Unit_getInstance();
    };
  }
  function IncompleteUtcOffset$_get_offsetMinutesOfHour_$ref_97oiqa(p0) {
    return function () {
      return p0.get_offsetMinutesOfHour_p1w44e_k$();
    };
  }
  function IncompleteUtcOffset$_set_offsetMinutesOfHour_$ref_b9gvj6(p0) {
    return function (_this__u8e3s4) {
      p0.set_offsetMinutesOfHour_lotc9b_k$(_this__u8e3s4);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_offsetMinutesOfHour_$ref_z3xmoq() {
    return function (p0) {
      return p0.get_offsetMinutesOfHour_p1w44e_k$();
    };
  }
  function DateTimeComponents$_set_offsetMinutesOfHour_$ref_ems8fa() {
    return function (p0, p1) {
      p0.set_offsetMinutesOfHour_lotc9b_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_offsetMinutesOfHour_$ref_z3xmoq_0() {
    return function (p0) {
      return p0.get_offsetMinutesOfHour_p1w44e_k$();
    };
  }
  function DateTimeComponents$_set_offsetMinutesOfHour_$ref_ems8fa_0() {
    return function (p0, p1) {
      p0.set_offsetMinutesOfHour_lotc9b_k$(p1);
      return Unit_getInstance();
    };
  }
  function IncompleteUtcOffset$_get_offsetSecondsOfMinute_$ref_ydtwwy(p0) {
    return function () {
      return p0.get_offsetSecondsOfMinute_mpvmxe_k$();
    };
  }
  function IncompleteUtcOffset$_set_offsetSecondsOfMinute_$ref_w4zdym(p0) {
    return function (_this__u8e3s4) {
      p0.set_offsetSecondsOfMinute_kv6vfj_k$(_this__u8e3s4);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_offsetSecondsOfMinute_$ref_bhipxy() {
    return function (p0) {
      return p0.get_offsetSecondsOfMinute_mpvmxe_k$();
    };
  }
  function DateTimeComponents$_set_offsetSecondsOfMinute_$ref_dqd8wa() {
    return function (p0, p1) {
      p0.set_offsetSecondsOfMinute_kv6vfj_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_offsetSecondsOfMinute_$ref_bhipxy_0() {
    return function (p0) {
      return p0.get_offsetSecondsOfMinute_mpvmxe_k$();
    };
  }
  function DateTimeComponents$_set_offsetSecondsOfMinute_$ref_dqd8wa_0() {
    return function (p0, p1) {
      p0.set_offsetSecondsOfMinute_kv6vfj_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateTimeComponentsContents$_get_timeZoneId_$ref_e986wv(p0) {
    return function () {
      return p0.timeZoneId_1;
    };
  }
  function DateTimeComponentsContents$_set_timeZoneId_$ref_b9v94l(p0) {
    return function (_this__u8e3s4) {
      p0.timeZoneId_1 = _this__u8e3s4;
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_timeZoneId_$ref_har115() {
    return function (p0) {
      return p0.get_timeZoneId_3tgi1v_k$();
    };
  }
  function DateTimeComponents$_set_timeZoneId_$ref_88cf0b() {
    return function (p0, p1) {
      p0.set_timeZoneId_7jni6e_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents$_get_timeZoneId_$ref_har115_0() {
    return function (p0) {
      return p0.get_timeZoneId_3tgi1v_k$();
    };
  }
  function DateTimeComponents$_set_timeZoneId_$ref_88cf0b_0() {
    return function (p0, p1) {
      p0.set_timeZoneId_7jni6e_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateTimeComponents(contents) {
    Companion_getInstance_13();
    contents = contents === VOID ? new DateTimeComponentsContents() : contents;
    this.contents_1 = contents;
    var tmp = this;
    var tmp0 = this.contents_1.date_1;
    var tmp_0 = KMutableProperty0;
    var tmp_1 = IncompleteLocalDate$_get_year_$ref_daef0a(tmp0);
    tmp.year$delegate_1 = getPropertyCallableRef('year', 0, tmp_0, tmp_1, IncompleteLocalDate$_set_year_$ref_hi3ji(tmp0));
    var tmp_2 = this;
    var tmp0_0 = this.contents_1.date_1;
    var tmp_3 = KMutableProperty0;
    var tmp_4 = IncompleteLocalDate$_get_monthNumber_$ref_ba4wq6(tmp0_0);
    tmp_2.monthNumber$delegate_1 = new TwoDigitNumber(getPropertyCallableRef('monthNumber', 0, tmp_3, tmp_4, IncompleteLocalDate$_set_monthNumber_$ref_16ep7m(tmp0_0)));
    var tmp_5 = this;
    var tmp0_1 = this.contents_1.date_1;
    var tmp_6 = KMutableProperty0;
    var tmp_7 = IncompleteLocalDate$_get_day_$ref_a02fj9(tmp0_1);
    tmp_5.day$delegate_1 = new TwoDigitNumber(getPropertyCallableRef('day', 0, tmp_6, tmp_7, IncompleteLocalDate$_set_day_$ref_fm5utr(tmp0_1)));
    var tmp_8 = this;
    var tmp0_2 = this.contents_1.date_1;
    var tmp_9 = KMutableProperty0;
    var tmp_10 = IncompleteLocalDate$_get_day_$ref_a02fj9_0(tmp0_2);
    tmp_8.dayOfMonth$delegate_1 = new TwoDigitNumber(getPropertyCallableRef('day', 0, tmp_9, tmp_10, IncompleteLocalDate$_set_day_$ref_fm5utr_0(tmp0_2)));
    var tmp_11 = this;
    var tmp0_3 = this.contents_1.date_1;
    var tmp_12 = KMutableProperty0;
    var tmp_13 = IncompleteLocalDate$_get_dayOfYear_$ref_6939jb(tmp0_3);
    tmp_11.dayOfYear$delegate_1 = new ThreeDigitNumber(getPropertyCallableRef('dayOfYear', 0, tmp_12, tmp_13, IncompleteLocalDate$_set_dayOfYear_$ref_lgus1n(tmp0_3)));
    var tmp_14 = this;
    var tmp0_4 = this.contents_1.time_1;
    var tmp_15 = KMutableProperty0;
    var tmp_16 = IncompleteLocalTime$_get_hour_$ref_3ms3pc(tmp0_4);
    tmp_14.hour$delegate_1 = new TwoDigitNumber(getPropertyCallableRef('hour', 0, tmp_15, tmp_16, IncompleteLocalTime$_set_hour_$ref_9647rg(tmp0_4)));
    var tmp_17 = this;
    var tmp0_5 = this.contents_1.time_1;
    var tmp_18 = KMutableProperty0;
    var tmp_19 = IncompleteLocalTime$_get_hourOfAmPm_$ref_iccr34(tmp0_5);
    tmp_17.hourOfAmPm$delegate_1 = new TwoDigitNumber(getPropertyCallableRef('hourOfAmPm', 0, tmp_18, tmp_19, IncompleteLocalTime$_set_hourOfAmPm_$ref_76qoyc(tmp0_5)));
    var tmp_20 = this;
    var tmp0_6 = this.contents_1.time_1;
    var tmp_21 = KMutableProperty0;
    var tmp_22 = IncompleteLocalTime$_get_amPm_$ref_spitbv(tmp0_6);
    tmp_20.amPm$delegate_1 = getPropertyCallableRef('amPm', 0, tmp_21, tmp_22, IncompleteLocalTime$_set_amPm_$ref_tiox6h(tmp0_6));
    var tmp_23 = this;
    var tmp0_7 = this.contents_1.time_1;
    var tmp_24 = KMutableProperty0;
    var tmp_25 = IncompleteLocalTime$_get_minute_$ref_fv9tbk(tmp0_7);
    tmp_23.minute$delegate_1 = new TwoDigitNumber(getPropertyCallableRef('minute', 0, tmp_24, tmp_25, IncompleteLocalTime$_set_minute_$ref_t186c(tmp0_7)));
    var tmp_26 = this;
    var tmp0_8 = this.contents_1.time_1;
    var tmp_27 = KMutableProperty0;
    var tmp_28 = IncompleteLocalTime$_get_second_$ref_s7ut4g(tmp0_8);
    tmp_26.second$delegate_1 = new TwoDigitNumber(getPropertyCallableRef('second', 0, tmp_27, tmp_28, IncompleteLocalTime$_set_second_$ref_rr0npg(tmp0_8)));
    var tmp_29 = this;
    var tmp0_9 = this.contents_1.offset_1;
    var tmp_30 = KMutableProperty0;
    var tmp_31 = IncompleteUtcOffset$_get_offsetIsNegative_$ref_ewfhg3(tmp0_9);
    tmp_29.offsetIsNegative$delegate_1 = getPropertyCallableRef('offsetIsNegative', 0, tmp_30, tmp_31, IncompleteUtcOffset$_set_offsetIsNegative_$ref_sui5gf(tmp0_9));
    var tmp_32 = this;
    var tmp0_10 = this.contents_1.offset_1;
    var tmp_33 = KMutableProperty0;
    var tmp_34 = IncompleteUtcOffset$_get_offsetHours_$ref_784o7(tmp0_10);
    tmp_32.offsetHours$delegate_1 = new TwoDigitNumber(getPropertyCallableRef('offsetHours', 0, tmp_33, tmp_34, IncompleteUtcOffset$_set_offsetHours_$ref_aayc6r(tmp0_10)));
    var tmp_35 = this;
    var tmp0_11 = this.contents_1.offset_1;
    var tmp_36 = KMutableProperty0;
    var tmp_37 = IncompleteUtcOffset$_get_offsetMinutesOfHour_$ref_97oiqa(tmp0_11);
    tmp_35.offsetMinutesOfHour$delegate_1 = new TwoDigitNumber(getPropertyCallableRef('offsetMinutesOfHour', 0, tmp_36, tmp_37, IncompleteUtcOffset$_set_offsetMinutesOfHour_$ref_b9gvj6(tmp0_11)));
    var tmp_38 = this;
    var tmp0_12 = this.contents_1.offset_1;
    var tmp_39 = KMutableProperty0;
    var tmp_40 = IncompleteUtcOffset$_get_offsetSecondsOfMinute_$ref_ydtwwy(tmp0_12);
    tmp_38.offsetSecondsOfMinute$delegate_1 = new TwoDigitNumber(getPropertyCallableRef('offsetSecondsOfMinute', 0, tmp_39, tmp_40, IncompleteUtcOffset$_set_offsetSecondsOfMinute_$ref_w4zdym(tmp0_12)));
    var tmp_41 = this;
    var tmp0_13 = this.contents_1;
    var tmp_42 = KMutableProperty0;
    var tmp_43 = DateTimeComponentsContents$_get_timeZoneId_$ref_e986wv(tmp0_13);
    tmp_41.timeZoneId$delegate_1 = getPropertyCallableRef('timeZoneId', 0, tmp_42, tmp_43, DateTimeComponentsContents$_set_timeZoneId_$ref_b9v94l(tmp0_13));
  }
  protoOf(DateTimeComponents).get_contents_9ljh8a_k$ = function () {
    return this.contents_1;
  };
  protoOf(DateTimeComponents).setTime_pvaj0a_k$ = function (localTime) {
    this.contents_1.time_1.populateFrom_n7wbcx_k$(localTime);
  };
  protoOf(DateTimeComponents).setYearMonth_3ultl8_k$ = function (yearMonth) {
    this.contents_1.date_1.get_yearMonth_at9cq_k$().populateFrom_4c7hpb_k$(yearMonth);
  };
  protoOf(DateTimeComponents).setDate_kbmxaz_k$ = function (localDate) {
    this.contents_1.date_1.populateFrom_mbc3c1_k$(localDate);
  };
  protoOf(DateTimeComponents).setDateTime_4yjers_k$ = function (localDateTime) {
    this.contents_1.date_1.populateFrom_mbc3c1_k$(localDateTime.get_date_wokkxj_k$());
    this.contents_1.time_1.populateFrom_n7wbcx_k$(localDateTime.get_time_wouyhi_k$());
  };
  protoOf(DateTimeComponents).setOffset_ryl2tq_k$ = function (utcOffset) {
    this.contents_1.offset_1.populateFrom_543lw3_k$(utcOffset);
  };
  protoOf(DateTimeComponents).setDateTimeOffset_fbeb4c_k$ = function (instant, utcOffset) {
    var smallerInstant = Companion_getInstance_1().fromEpochSeconds_idu11y_k$(modulo(instant.get_epochSeconds_w76ght_k$(), new Long(2036907392, 73)), instant.get_nanosecondsOfSecond_n2ey8j_k$());
    this.setDateTime_4yjers_k$(toLocalDateTime(smallerInstant, utcOffset));
    this.setOffset_ryl2tq_k$(utcOffset);
    var tmp = ensureNotNull(this.get_year_woy26e_k$());
    // Inline function 'kotlin.Long.times' call
    var this_0 = divide(instant.get_epochSeconds_w76ght_k$(), new Long(2036907392, 73));
    var tmp$ret$0 = multiply(this_0, fromInt(10000));
    this.set_year_8yykwv_k$(tmp + convertToInt(tmp$ret$0) | 0);
  };
  protoOf(DateTimeComponents).setDateTimeOffset_4pzgb6_k$ = function (localDateTime, utcOffset) {
    this.setDateTime_4yjers_k$(localDateTime);
    this.setOffset_ryl2tq_k$(utcOffset);
  };
  protoOf(DateTimeComponents).set_year_8yykwv_k$ = function (_set____db54di) {
    var tmp0 = this.year$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_year_$ref_8jgxao_0();
    // Inline function 'kotlin.setValue' call
    getPropertyCallableRef('year', 1, tmp, tmp_0, DateTimeComponents$_set_year_$ref_49fe64_0());
    tmp0.set(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(DateTimeComponents).get_year_woy26e_k$ = function () {
    var tmp0 = this.year$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_year_$ref_8jgxao();
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('year', 1, tmp, tmp_0, DateTimeComponents$_set_year_$ref_49fe64());
    return tmp0.get();
  };
  protoOf(DateTimeComponents).set_monthNumber_nufdv5_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_monthNumber_$ref_t7s60s_0();
    return this.monthNumber$delegate_1.setValue_9mhtjx_k$(this, getPropertyCallableRef('monthNumber', 1, tmp, tmp_0, DateTimeComponents$_set_monthNumber_$ref_vplofs_0()), _set____db54di);
  };
  protoOf(DateTimeComponents).get_monthNumber_nb47ls_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_monthNumber_$ref_t7s60s();
    return this.monthNumber$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('monthNumber', 1, tmp, tmp_0, DateTimeComponents$_set_monthNumber_$ref_vplofs()));
  };
  protoOf(DateTimeComponents).set_month_ygxyco_k$ = function (value) {
    this.set_monthNumber_nufdv5_k$(value == null ? null : get_number(value));
  };
  protoOf(DateTimeComponents).get_month_ivc8d3_k$ = function () {
    var tmp0_safe_receiver = this.get_monthNumber_nb47ls_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = Month_0(tmp0_safe_receiver);
    }
    return tmp;
  };
  protoOf(DateTimeComponents).set_day_420fh8_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_day_$ref_qt8vch_0();
    return this.day$delegate_1.setValue_9mhtjx_k$(this, getPropertyCallableRef('day', 1, tmp, tmp_0, DateTimeComponents$_set_day_$ref_ilmw9n_0()), _set____db54di);
  };
  protoOf(DateTimeComponents).get_day_18j7il_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_day_$ref_qt8vch();
    return this.day$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('day', 1, tmp, tmp_0, DateTimeComponents$_set_day_$ref_ilmw9n()));
  };
  protoOf(DateTimeComponents).set_dayOfMonth_qpi7zl_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_dayOfMonth_$ref_gl36kg_0();
    return this.dayOfMonth$delegate_1.setValue_9mhtjx_k$(this, getPropertyCallableRef('dayOfMonth', 1, tmp, tmp_0, DateTimeComponents$_set_dayOfMonth_$ref_swxfd8_0()), _set____db54di);
  };
  protoOf(DateTimeComponents).get_dayOfMonth_vblo3a_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_dayOfMonth_$ref_gl36kg();
    return this.dayOfMonth$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('dayOfMonth', 1, tmp, tmp_0, DateTimeComponents$_set_dayOfMonth_$ref_swxfd8()));
  };
  protoOf(DateTimeComponents).set_dayOfWeek_9qa7f3_k$ = function (value) {
    this.contents_1.date_1.set_dayOfWeek_rlg9ap_k$(value == null ? null : get_isoDayNumber(value));
  };
  protoOf(DateTimeComponents).get_dayOfWeek_3kfgci_k$ = function () {
    var tmp0_safe_receiver = this.contents_1.date_1.get_dayOfWeek_3kfgci_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = DayOfWeek_0(tmp0_safe_receiver);
    }
    return tmp;
  };
  protoOf(DateTimeComponents).set_dayOfYear_b6dvlk_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_dayOfYear_$ref_h2q2cd_0();
    return this.dayOfYear$delegate_1.setValue_9mhtjx_k$(this, getPropertyCallableRef('dayOfYear', 1, tmp, tmp_0, DateTimeComponents$_set_dayOfYear_$ref_wahkup_0()), _set____db54di);
  };
  protoOf(DateTimeComponents).get_dayOfYear_3ke6gp_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_dayOfYear_$ref_h2q2cd();
    return this.dayOfYear$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('dayOfYear', 1, tmp, tmp_0, DateTimeComponents$_set_dayOfYear_$ref_wahkup()));
  };
  protoOf(DateTimeComponents).set_hour_cn99tm_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_hour_$ref_fxx1k9_0();
    return this.hour$delegate_1.setValue_9mhtjx_k$(this, getPropertyCallableRef('hour', 1, tmp, tmp_0, DateTimeComponents$_set_hour_$ref_sqtd11_0()), _set____db54di);
  };
  protoOf(DateTimeComponents).get_hour_wonfal_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_hour_$ref_fxx1k9();
    return this.hour$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('hour', 1, tmp, tmp_0, DateTimeComponents$_set_hour_$ref_sqtd11()));
  };
  protoOf(DateTimeComponents).set_hourOfAmPm_4kn0va_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_hourOfAmPm_$ref_8zdiuv_0();
    return this.hourOfAmPm$delegate_1.setValue_9mhtjx_k$(this, getPropertyCallableRef('hourOfAmPm', 1, tmp, tmp_0, DateTimeComponents$_set_hourOfAmPm_$ref_yigywb_0()), _set____db54di);
  };
  protoOf(DateTimeComponents).get_hourOfAmPm_c9obsj_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_hourOfAmPm_$ref_8zdiuv();
    return this.hourOfAmPm$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('hourOfAmPm', 1, tmp, tmp_0, DateTimeComponents$_set_hourOfAmPm_$ref_yigywb()));
  };
  protoOf(DateTimeComponents).set_amPm_5mqo57_k$ = function (_set____db54di) {
    var tmp0 = this.amPm$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_amPm_$ref_mqw3do_0();
    // Inline function 'kotlin.setValue' call
    getPropertyCallableRef('amPm', 1, tmp, tmp_0, DateTimeComponents$_set_amPm_$ref_9xzrww_0());
    tmp0.set(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(DateTimeComponents).get_amPm_woiw0i_k$ = function () {
    var tmp0 = this.amPm$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_amPm_$ref_mqw3do();
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('amPm', 1, tmp, tmp_0, DateTimeComponents$_set_amPm_$ref_9xzrww());
    return tmp0.get();
  };
  protoOf(DateTimeComponents).set_minute_35xlhm_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_minute_$ref_riuryf_0();
    return this.minute$delegate_1.setValue_9mhtjx_k$(this, getPropertyCallableRef('minute', 1, tmp, tmp_0, DateTimeComponents$_set_minute_$ref_cgm6t7_0()), _set____db54di);
  };
  protoOf(DateTimeComponents).get_minute_gnc10d_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_minute_$ref_riuryf();
    return this.minute$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('minute', 1, tmp, tmp_0, DateTimeComponents$_set_minute_$ref_cgm6t7()));
  };
  protoOf(DateTimeComponents).set_second_5q0zme_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_second_$ref_gk9uhl_0();
    return this.second$delegate_1.setValue_9mhtjx_k$(this, getPropertyCallableRef('second', 1, tmp, tmp_0, DateTimeComponents$_set_second_$ref_vmifmt_0()), _set____db54di);
  };
  protoOf(DateTimeComponents).get_second_jf7fjx_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_second_$ref_gk9uhl();
    return this.second$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('second', 1, tmp, tmp_0, DateTimeComponents$_set_second_$ref_vmifmt()));
  };
  protoOf(DateTimeComponents).set_nanosecond_xpjfxy_k$ = function (value) {
    // Inline function 'kotlin.require' call
    if (!(value == null || numberRangeToNumber(0, 999999999).contains_7q95ev_k$(value))) {
      var message = 'Nanosecond must be in the range [0, 999_999_999].';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.contents_1.time_1.set_nanosecond_xpjfxy_k$(value);
  };
  protoOf(DateTimeComponents).get_nanosecond_fws9td_k$ = function () {
    return this.contents_1.time_1.get_nanosecond_fws9td_k$();
  };
  protoOf(DateTimeComponents).set_offsetIsNegative_lg0w0f_k$ = function (_set____db54di) {
    var tmp0 = this.offsetIsNegative$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_offsetIsNegative_$ref_kc5odh_0();
    // Inline function 'kotlin.setValue' call
    getPropertyCallableRef('offsetIsNegative', 1, tmp, tmp_0, DateTimeComponents$_set_offsetIsNegative_$ref_6e30d5_0());
    tmp0.set(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(DateTimeComponents).get_offsetIsNegative_5z1gsb_k$ = function () {
    var tmp0 = this.offsetIsNegative$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_offsetIsNegative_$ref_kc5odh();
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('offsetIsNegative', 1, tmp, tmp_0, DateTimeComponents$_set_offsetIsNegative_$ref_6e30d5());
    return tmp0.get();
  };
  protoOf(DateTimeComponents).set_offsetHours_5m57ic_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_offsetHours_$ref_bunfn3_0();
    return this.offsetHours$delegate_1.setValue_9mhtjx_k$(this, getPropertyCallableRef('offsetHours', 1, tmp, tmp_0, DateTimeComponents$_set_offsetHours_$ref_lydn5n_0()), _set____db54di);
  };
  protoOf(DateTimeComponents).get_offsetHours_yn9exf_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_offsetHours_$ref_bunfn3();
    return this.offsetHours$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('offsetHours', 1, tmp, tmp_0, DateTimeComponents$_set_offsetHours_$ref_lydn5n()));
  };
  protoOf(DateTimeComponents).set_offsetMinutesOfHour_lotc9b_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_offsetMinutesOfHour_$ref_z3xmoq_0();
    return this.offsetMinutesOfHour$delegate_1.setValue_9mhtjx_k$(this, getPropertyCallableRef('offsetMinutesOfHour', 1, tmp, tmp_0, DateTimeComponents$_set_offsetMinutesOfHour_$ref_ems8fa_0()), _set____db54di);
  };
  protoOf(DateTimeComponents).get_offsetMinutesOfHour_p1w44e_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_offsetMinutesOfHour_$ref_z3xmoq();
    return this.offsetMinutesOfHour$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('offsetMinutesOfHour', 1, tmp, tmp_0, DateTimeComponents$_set_offsetMinutesOfHour_$ref_ems8fa()));
  };
  protoOf(DateTimeComponents).set_offsetSecondsOfMinute_kv6vfj_k$ = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_offsetSecondsOfMinute_$ref_bhipxy_0();
    return this.offsetSecondsOfMinute$delegate_1.setValue_9mhtjx_k$(this, getPropertyCallableRef('offsetSecondsOfMinute', 1, tmp, tmp_0, DateTimeComponents$_set_offsetSecondsOfMinute_$ref_dqd8wa_0()), _set____db54di);
  };
  protoOf(DateTimeComponents).get_offsetSecondsOfMinute_mpvmxe_k$ = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_offsetSecondsOfMinute_$ref_bhipxy();
    return this.offsetSecondsOfMinute$delegate_1.getValue_fbnwi2_k$(this, getPropertyCallableRef('offsetSecondsOfMinute', 1, tmp, tmp_0, DateTimeComponents$_set_offsetSecondsOfMinute_$ref_dqd8wa()));
  };
  protoOf(DateTimeComponents).set_timeZoneId_7jni6e_k$ = function (_set____db54di) {
    var tmp0 = this.timeZoneId$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_timeZoneId_$ref_har115_0();
    // Inline function 'kotlin.setValue' call
    getPropertyCallableRef('timeZoneId', 1, tmp, tmp_0, DateTimeComponents$_set_timeZoneId_$ref_88cf0b_0());
    tmp0.set(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(DateTimeComponents).get_timeZoneId_3tgi1v_k$ = function () {
    var tmp0 = this.timeZoneId$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = DateTimeComponents$_get_timeZoneId_$ref_har115();
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('timeZoneId', 1, tmp, tmp_0, DateTimeComponents$_set_timeZoneId_$ref_88cf0b());
    return tmp0.get();
  };
  protoOf(DateTimeComponents).toUtcOffset_loe12c_k$ = function () {
    return this.contents_1.offset_1.toUtcOffset_loe12c_k$();
  };
  protoOf(DateTimeComponents).toYearMonth_ii3sag_k$ = function () {
    return this.contents_1.date_1.get_yearMonth_at9cq_k$().toYearMonth_ii3sag_k$();
  };
  protoOf(DateTimeComponents).toLocalDate_u88f42_k$ = function () {
    return this.contents_1.date_1.toLocalDate_u88f42_k$();
  };
  protoOf(DateTimeComponents).toLocalTime_u7y1k3_k$ = function () {
    return this.contents_1.time_1.toLocalTime_u7y1k3_k$();
  };
  protoOf(DateTimeComponents).toLocalDateTime_5q5ehh_k$ = function () {
    return atTime(this.toLocalDate_u88f42_k$(), this.toLocalTime_u7y1k3_k$());
  };
  protoOf(DateTimeComponents).toInstantUsingOffset_9d0ojj_k$ = function (youShallNotPass) {
    var offset = this.toUtcOffset_loe12c_k$();
    var time = this.toLocalTime_u7y1k3_k$();
    var truncatedDate = this.contents_1.date_1.copy_1tks5_k$();
    truncatedDate.set_year_8yykwv_k$(requireParsedField(truncatedDate.get_year_woy26e_k$(), 'year') % 10000 | 0);
    var tmp;
    try {
      var secDelta = safeMultiply(fromInt(ensureNotNull(this.get_year_woy26e_k$()) / 10000 | 0), new Long(2036907392, 73));
      var epochDays = truncatedDate.toLocalDate_u88f42_k$().toEpochDays_tp9eth_k$();
      // Inline function 'kotlin.Long.times' call
      var tmp0 = multiply(epochDays, fromInt(86400));
      // Inline function 'kotlin.Long.plus' call
      var other = time.toSecondOfDay_a2clsa_k$();
      var tmp0_0 = add(tmp0, fromInt(other));
      // Inline function 'kotlin.Long.minus' call
      var other_0 = offset.get_totalSeconds_oq5924_k$();
      var tmp$ret$2 = subtract(tmp0_0, fromInt(other_0));
      tmp = safeAdd(secDelta, tmp$ret$2);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ArithmeticException) {
        var e = $p;
        throw DateTimeFormatException_init_$Create$_2('The parsed date is outside the range representable by Instant', e);
      } else {
        throw $p;
      }
    }
    var totalSeconds = tmp;
    var tmp_1 = Companion_getInstance_1();
    var tmp0_elvis_lhs = this.get_nanosecond_fws9td_k$();
    var result = tmp_1.fromEpochSeconds_idu11y_k$(totalSeconds, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs);
    if (!equalsLong(result.get_epochSeconds_w76ght_k$(), totalSeconds))
      throw DateTimeFormatException_init_$Create$_0('The parsed date is outside the range representable by Instant');
    return result;
  };
  protoOf(DateTimeComponents).toInstantUsingOffset$default_e4q73f_k$ = function (youShallNotPass, $super) {
    youShallNotPass = youShallNotPass === VOID ? Companion_getInstance_10().get_INSTANCE_1pfym7_k$() : youShallNotPass;
    return $super === VOID ? this.toInstantUsingOffset_9d0ojj_k$(youShallNotPass) : $super.toInstantUsingOffset_9d0ojj_k$.call(this, youShallNotPass);
  };
  function Builder(actualBuilder) {
    this.actualBuilder_1 = actualBuilder;
  }
  protoOf(Builder).get_actualBuilder_7qypdo_k$ = function () {
    return this.actualBuilder_1;
  };
  protoOf(Builder).addFormatStructureForDateTime_noiy5b_k$ = function (structure) {
    this.actualBuilder_1.add_b6pdwl_k$(structure);
  };
  protoOf(Builder).addFormatStructureForOffset_puuf83_k$ = function (structure) {
    this.actualBuilder_1.add_b6pdwl_k$(structure);
  };
  protoOf(Builder).timeZoneId_ev7lfo_k$ = function () {
    return this.actualBuilder_1.add_b6pdwl_k$(new BasicFormatStructure(new TimeZoneIdDirective()));
  };
  protoOf(Builder).dateTimeComponents_bpc9lu_k$ = function (format) {
    var tmp;
    if (format instanceof DateTimeComponentsFormat) {
      this.actualBuilder_1.add_b6pdwl_k$(format.actualFormat_1);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Builder).createEmpty_8k9z67_k$ = function () {
    return new Builder(new AppendableFormatStructure());
  };
  function DateTimeComponentsFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.actualFormat_1 = actualFormat;
  }
  protoOf(DateTimeComponentsFormat).get_actualFormat_d0ha3y_k$ = function () {
    return this.actualFormat_1;
  };
  protoOf(DateTimeComponentsFormat).intermediateFromValue_1ocfa3_k$ = function (value) {
    return value.contents_1;
  };
  protoOf(DateTimeComponentsFormat).intermediateFromValue_816pep_k$ = function (value) {
    return this.intermediateFromValue_1ocfa3_k$(value instanceof DateTimeComponents ? value : THROW_CCE());
  };
  protoOf(DateTimeComponentsFormat).valueFromIntermediate_2jpc8n_k$ = function (intermediate) {
    return new DateTimeComponents(intermediate);
  };
  protoOf(DateTimeComponentsFormat).valueFromIntermediate_60ox3m_k$ = function (intermediate) {
    return this.valueFromIntermediate_2jpc8n_k$(intermediate instanceof DateTimeComponentsContents ? intermediate : THROW_CCE());
  };
  protoOf(DateTimeComponentsFormat).get_emptyIntermediate_lysuyr_k$ = function () {
    return get_emptyDateTimeComponentsContents();
  };
  function _get_reference__19y5ba($this) {
    return $this.reference_1;
  }
  function TwoDigitNumber(reference) {
    this.reference_1 = reference;
  }
  protoOf(TwoDigitNumber).getValue_fbnwi2_k$ = function (thisRef, property) {
    // Inline function 'kotlin.getValue' call
    return this.reference_1.get();
  };
  protoOf(TwoDigitNumber).setValue_9mhtjx_k$ = function (thisRef, property, value) {
    // Inline function 'kotlin.require' call
    if (!(value === null || numberRangeToNumber(0, 99).contains_7q95ev_k$(value))) {
      var message = property.callableName + " must be a two-digit number, got '" + value + "'";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.setValue' call
    this.reference_1.set(value);
  };
  function _get_reference__19y5ba_0($this) {
    return $this.reference_1;
  }
  function ThreeDigitNumber(reference) {
    this.reference_1 = reference;
  }
  protoOf(ThreeDigitNumber).getValue_fbnwi2_k$ = function (thisRef, property) {
    // Inline function 'kotlin.getValue' call
    return this.reference_1.get();
  };
  protoOf(ThreeDigitNumber).setValue_9mhtjx_k$ = function (thisRef, property, value) {
    // Inline function 'kotlin.require' call
    if (!(value === null || numberRangeToNumber(0, 999).contains_7q95ev_k$(value))) {
      var message = property.callableName + " must be a three-digit number, got '" + value + "'";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.setValue' call
    this.reference_1.set(value);
  };
  function Accessor$getterNotNull$ref(p0) {
    var l = function (_this__u8e3s4) {
      return p0.getterNotNull_rjcshh_k$(_this__u8e3s4);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function TimeZoneIdDirective() {
  }
  protoOf(TimeZoneIdDirective).get_field_irdnf5_k$ = function () {
    return get_timeZoneField();
  };
  protoOf(TimeZoneIdDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return 'timeZoneId()';
  };
  protoOf(TimeZoneIdDirective).formatter_tykoui_k$ = function () {
    return new StringFormatterStructure(Accessor$getterNotNull$ref(this.get_field_irdnf5_k$().get_accessor_3q8qa8_k$()));
  };
  protoOf(TimeZoneIdDirective).parser_ggn3z5_k$ = function () {
    return new ParserStructure(listOf(new TimeZoneParserOperation(get_timeZoneField().get_accessor_3q8qa8_k$())), emptyList());
  };
  function DateTimeComponentsContents$_get_timeZoneId_$ref_e986wv_0() {
    return function (p0) {
      return p0.timeZoneId_1;
    };
  }
  function DateTimeComponentsContents$_set_timeZoneId_$ref_b9v94l_0() {
    return function (p0, p1) {
      p0.timeZoneId_1 = p1;
      return Unit_getInstance();
    };
  }
  var properties_initialized_DateTimeComponents_kt_io5e5;
  function _init_properties_DateTimeComponents_kt__9iimb5() {
    if (!properties_initialized_DateTimeComponents_kt_io5e5) {
      properties_initialized_DateTimeComponents_kt_io5e5 = true;
      var tmp = KMutableProperty1;
      var tmp_0 = DateTimeComponentsContents$_get_timeZoneId_$ref_e986wv_0();
      timeZoneField = new GenericFieldSpec(new PropertyAccessor(getPropertyCallableRef('timeZoneId', 1, tmp, tmp_0, DateTimeComponentsContents$_set_timeZoneId_$ref_b9v94l_0())));
      emptyDateTimeComponentsContents = new DateTimeComponentsContents();
    }
  }
  function get_allFormatConstants() {
    _init_properties_DateTimeFormat_kt__xxdtxu();
    var tmp0 = allFormatConstants$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('allFormatConstants', 0, tmp, _get_allFormatConstants_$ref_bqh2xv(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var allFormatConstants$delegate;
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).formatAsKotlinBuilderDsl_pv4218_k$ = function (format) {
    var tmp;
    if (format instanceof AbstractDateTimeFormat) {
      tmp = builderString(format.get_actualFormat_d0ha3y_k$(), get_allFormatConstants());
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  };
  var Companion_instance_10;
  function Companion_getInstance_14() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function DateTimeFormat() {
  }
  function AbstractDateTimeFormat() {
  }
  protoOf(AbstractDateTimeFormat).valueFromIntermediateOrNull_ppszyw_k$ = function (intermediate) {
    var tmp;
    try {
      tmp = this.valueFromIntermediate_60ox3m_k$(intermediate);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(AbstractDateTimeFormat).format_l1mq08_k$ = function (value) {
    // Inline function 'kotlin.also' call
    var this_0 = StringBuilder_init_$Create$();
    this.get_actualFormat_d0ha3y_k$().formatter_tykoui_k$().format$default_fwaxfk_k$(this.intermediateFromValue_816pep_k$(value), this_0);
    return this_0.toString();
  };
  protoOf(AbstractDateTimeFormat).formatTo_ju9xbm_k$ = function (appendable, value) {
    // Inline function 'kotlin.apply' call
    this.get_actualFormat_d0ha3y_k$().formatter_tykoui_k$().format$default_fwaxfk_k$(this.intermediateFromValue_816pep_k$(value), appendable);
    return appendable;
  };
  protoOf(AbstractDateTimeFormat).parse_xovy9i_k$ = function (input) {
    var tmp;
    try {
      tmp = Parser__match$default_impl_x2xlti(_Parser___init__impl__gdyfby(this.get_actualFormat_d0ha3y_k$().parser_ggn3z5_k$()), input, this.get_emptyIntermediate_lysuyr_k$());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ParseException) {
        var e = $p;
        throw DateTimeFormatException_init_$Create$_2("Failed to parse value from '" + toString(input) + "'", e);
      } else {
        throw $p;
      }
    }
    var matched = tmp;
    try {
      return this.valueFromIntermediate_60ox3m_k$(matched);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e_0 = $p;
        var message = e_0.message;
        throw DateTimeFormatException_init_$Create$_2(message == null ? "The value parsed from '" + toString(input) + "' is invalid" : '' + message + " (when parsing '" + toString(input) + "')", e_0);
      } else {
        throw $p;
      }
    }
  };
  protoOf(AbstractDateTimeFormat).parseOrNull_96pug0_k$ = function (input) {
    var tmp0_safe_receiver = Parser__matchOrNull$default_impl_e6vq3k(_Parser___init__impl__gdyfby(this.get_actualFormat_d0ha3y_k$().parser_ggn3z5_k$()), input, this.get_emptyIntermediate_lysuyr_k$());
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.valueFromIntermediateOrNull_ppszyw_k$(tmp0_safe_receiver);
    }
    return tmp;
  };
  var Padding_NONE_instance;
  var Padding_ZERO_instance;
  var Padding_SPACE_instance;
  function values_1() {
    return [Padding_NONE_getInstance(), Padding_ZERO_getInstance(), Padding_SPACE_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'NONE':
        return Padding_NONE_getInstance();
      case 'ZERO':
        return Padding_ZERO_getInstance();
      case 'SPACE':
        return Padding_SPACE_getInstance();
      default:
        Padding_initEntries();
        THROW_IAE('No enum constant kotlinx.datetime.format.Padding.' + value);
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Padding_entriesInitialized;
  function Padding_initEntries() {
    if (Padding_entriesInitialized)
      return Unit_getInstance();
    Padding_entriesInitialized = true;
    Padding_NONE_instance = new Padding('NONE', 0);
    Padding_ZERO_instance = new Padding('ZERO', 1);
    Padding_SPACE_instance = new Padding('SPACE', 2);
  }
  var $ENTRIES_1;
  function Padding(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function minDigits(_this__u8e3s4, width) {
    _init_properties_DateTimeFormat_kt__xxdtxu();
    return _this__u8e3s4.equals(Padding_ZERO_getInstance()) ? width : 1;
  }
  function spaces(_this__u8e3s4, width) {
    _init_properties_DateTimeFormat_kt__xxdtxu();
    return _this__u8e3s4.equals(Padding_SPACE_getInstance()) ? width : null;
  }
  function toKotlinCode(_this__u8e3s4) {
    _init_properties_DateTimeFormat_kt__xxdtxu();
    var tmp;
    switch (_this__u8e3s4.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = 'Padding.NONE';
        break;
      case 1:
        tmp = 'Padding.ZERO';
        break;
      case 2:
        tmp = 'Padding.SPACE';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function allFormatConstants$delegate$lambda() {
    _init_properties_DateTimeFormat_kt__xxdtxu();
    return listOf_0([to('dateTimeComponents(DateTimeComponents.Formats.RFC_1123)', invoke$unwrap(Formats_getInstance().get_RFC_1123_h6865i_k$())), to('dateTimeComponents(DateTimeComponents.Formats.ISO_DATE_TIME_OFFSET)', invoke$unwrap(Formats_getInstance().get_ISO_DATE_TIME_OFFSET_7s4r8p_k$())), to('date(LocalDateTime.Formats.ISO)', invoke$unwrap(Formats_getInstance_1().get_ISO_18jrwk_k$())), to('date(LocalDate.Formats.ISO)', invoke$unwrap(Formats_getInstance_0().get_ISO_18jrwk_k$())), to('date(LocalDate.Formats.ISO_BASIC)', invoke$unwrap(Formats_getInstance_0().get_ISO_BASIC_3n1nuz_k$())), to('time(LocalTime.Formats.ISO)', invoke$unwrap(Formats_getInstance_2().get_ISO_18jrwk_k$())), to('offset(UtcOffset.Formats.ISO)', invoke$unwrap(Formats_getInstance_3().get_ISO_18jrwk_k$())), to('offset(UtcOffset.Formats.ISO_BASIC)', invoke$unwrap(Formats_getInstance_3().get_ISO_BASIC_3n1nuz_k$())), to('offset(UtcOffset.Formats.FOUR_DIGITS)', invoke$unwrap(Formats_getInstance_3().get_FOUR_DIGITS_7a8eh6_k$())), to('yearMonth(YearMonth.Formats.ISO)', invoke$unwrap(Formats_getInstance_4().get_ISO_18jrwk_k$()))]);
  }
  function invoke$unwrap(format) {
    return (format instanceof AbstractDateTimeFormat ? format : THROW_CCE()).get_actualFormat_d0ha3y_k$();
  }
  function _get_allFormatConstants_$ref_bqh2xv() {
    return function () {
      return get_allFormatConstants();
    };
  }
  function Padding_NONE_getInstance() {
    Padding_initEntries();
    return Padding_NONE_instance;
  }
  function Padding_ZERO_getInstance() {
    Padding_initEntries();
    return Padding_ZERO_instance;
  }
  function Padding_SPACE_getInstance() {
    Padding_initEntries();
    return Padding_SPACE_instance;
  }
  var properties_initialized_DateTimeFormat_kt_ombb5g;
  function _init_properties_DateTimeFormat_kt__xxdtxu() {
    if (!properties_initialized_DateTimeFormat_kt_ombb5g) {
      properties_initialized_DateTimeFormat_kt_ombb5g = true;
      allFormatConstants$delegate = lazy(allFormatConstants$delegate$lambda);
    }
  }
  function WithYearMonth() {
  }
  function WithDate() {
  }
  function WithTime() {
  }
  function WithDateTime() {
  }
  function WithUtcOffset() {
  }
  function WithDateTimeComponents() {
  }
  function DateTimeFormatBuilder() {
  }
  function builderString(_this__u8e3s4, constants) {
    var tmp;
    if (_this__u8e3s4 instanceof BasicFormatStructure) {
      tmp = _this__u8e3s4.get_directive_7ekuhm_k$().get_builderRepresentation_hh53bz_k$();
    } else {
      if (_this__u8e3s4 instanceof ConstantFormatStructure) {
        var tmp_0;
        if (_this__u8e3s4.get_string_jnpst6_k$().length === 1) {
          tmp_0 = 'char(' + toKotlinCode_2(charCodeAt(_this__u8e3s4.get_string_jnpst6_k$(), 0)) + ')';
        } else {
          tmp_0 = 'chars(' + toKotlinCode_3(_this__u8e3s4.get_string_jnpst6_k$()) + ')';
        }
        tmp = tmp_0;
      } else {
        if (_this__u8e3s4 instanceof SignedFormatStructure) {
          var tmp_1;
          var tmp_2;
          var tmp_3 = _this__u8e3s4.get_format_dfdtds_k$();
          if (tmp_3 instanceof BasicFormatStructure) {
            var tmp_4 = _this__u8e3s4.get_format_dfdtds_k$().get_directive_7ekuhm_k$();
            tmp_2 = tmp_4 instanceof UtcOffsetWholeHoursDirective;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            tmp_1 = _this__u8e3s4.get_format_dfdtds_k$().get_directive_7ekuhm_k$().get_builderRepresentation_hh53bz_k$();
          } else {
            // Inline function 'kotlin.text.buildString' call
            // Inline function 'kotlin.apply' call
            var this_0 = StringBuilder_init_$Create$();
            if (_this__u8e3s4.get_withPlusSign_fo0zhi_k$()) {
              // Inline function 'kotlin.text.appendLine' call
              var value = 'withSharedSign(outputPlus = true) {';
              // Inline function 'kotlin.text.appendLine' call
              this_0.append_22ad7x_k$(value).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            } else {
              // Inline function 'kotlin.text.appendLine' call
              var value_0 = 'withSharedSign {';
              // Inline function 'kotlin.text.appendLine' call
              this_0.append_22ad7x_k$(value_0).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            }
            // Inline function 'kotlin.text.appendLine' call
            var value_1 = prependIndent(builderString(_this__u8e3s4.get_format_dfdtds_k$(), constants), '    ');
            // Inline function 'kotlin.text.appendLine' call
            this_0.append_22ad7x_k$(value_1).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            this_0.append_22ad7x_k$('}');
            tmp_1 = this_0.toString();
          }
          tmp = tmp_1;
        } else {
          if (_this__u8e3s4 instanceof OptionalFormatStructure) {
            // Inline function 'kotlin.text.buildString' call
            // Inline function 'kotlin.apply' call
            var this_1 = StringBuilder_init_$Create$();
            if (_this__u8e3s4.get_onZero_hnt54g_k$() === '') {
              // Inline function 'kotlin.text.appendLine' call
              var value_2 = 'optional {';
              // Inline function 'kotlin.text.appendLine' call
              this_1.append_22ad7x_k$(value_2).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            } else {
              // Inline function 'kotlin.text.appendLine' call
              var value_3 = 'optional(' + toKotlinCode_3(_this__u8e3s4.get_onZero_hnt54g_k$()) + ') {';
              // Inline function 'kotlin.text.appendLine' call
              this_1.append_22ad7x_k$(value_3).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            }
            var subformat = builderString(_this__u8e3s4.get_format_dfdtds_k$(), constants);
            // Inline function 'kotlin.text.isNotEmpty' call
            if (charSequenceLength(subformat) > 0) {
              // Inline function 'kotlin.text.appendLine' call
              var value_4 = prependIndent(subformat, '    ');
              // Inline function 'kotlin.text.appendLine' call
              this_1.append_22ad7x_k$(value_4).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            }
            this_1.append_22ad7x_k$('}');
            tmp = this_1.toString();
          } else {
            if (_this__u8e3s4 instanceof AlternativesParsingFormatStructure) {
              // Inline function 'kotlin.text.buildString' call
              // Inline function 'kotlin.apply' call
              var this_2 = StringBuilder_init_$Create$();
              this_2.append_22ad7x_k$('alternativeParsing(');
              var _iterator__ex2g4s = _this__u8e3s4.get_formats_9xs0wd_k$().iterator_jk1svi_k$();
              while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
                var alternative = _iterator__ex2g4s.next_20eer_k$();
                // Inline function 'kotlin.text.appendLine' call
                // Inline function 'kotlin.text.appendLine' call
                this_2.append_22ad7x_k$('{').append_am5a4z_k$(_Char___init__impl__6a9atx(10));
                var subformat_0 = builderString(alternative, constants);
                // Inline function 'kotlin.text.isNotEmpty' call
                if (charSequenceLength(subformat_0) > 0) {
                  // Inline function 'kotlin.text.appendLine' call
                  var value_5 = prependIndent(subformat_0, '    ');
                  // Inline function 'kotlin.text.appendLine' call
                  this_2.append_22ad7x_k$(value_5).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
                }
                this_2.append_22ad7x_k$('}, ');
              }
              if (this_2.get_kdzpvg_k$(this_2.get_length_g42xv3_k$() - 2 | 0) === _Char___init__impl__6a9atx(44)) {
                // Inline function 'kotlin.repeat' call
                var inductionVariable = 0;
                if (inductionVariable < 2)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    this_2.deleteAt_mq1vvq_k$(this_2.get_length_g42xv3_k$() - 1 | 0);
                  }
                   while (inductionVariable < 2);
              }
              // Inline function 'kotlin.text.appendLine' call
              // Inline function 'kotlin.text.appendLine' call
              this_2.append_22ad7x_k$(') {').append_am5a4z_k$(_Char___init__impl__6a9atx(10));
              // Inline function 'kotlin.text.appendLine' call
              var value_6 = prependIndent(builderString(_this__u8e3s4.get_mainFormat_iprtrb_k$(), constants), '    ');
              // Inline function 'kotlin.text.appendLine' call
              this_2.append_22ad7x_k$(value_6).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
              this_2.append_22ad7x_k$('}');
              tmp = this_2.toString();
            } else {
              if (_this__u8e3s4 instanceof ConcatenatedFormatStructure) {
                // Inline function 'kotlin.text.buildString' call
                // Inline function 'kotlin.apply' call
                var this_3 = StringBuilder_init_$Create$();
                // Inline function 'kotlin.collections.isNotEmpty' call
                if (!_this__u8e3s4.get_formats_9xs0wd_k$().isEmpty_y1axqb_k$()) {
                  var index_0 = 0;
                  loop: while (index_0 < _this__u8e3s4.get_formats_9xs0wd_k$().get_size_woubt6_k$()) {
                    var _iterator__ex2g4s_0 = constants.iterator_jk1svi_k$();
                    searchConstant: while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
                      var constant = _iterator__ex2g4s_0.next_20eer_k$();
                      var constantDirectives = constant.get_second_jf7fjx_k$().get_formats_9xs0wd_k$();
                      if ((_this__u8e3s4.get_formats_9xs0wd_k$().get_size_woubt6_k$() - index_0 | 0) >= constantDirectives.get_size_woubt6_k$()) {
                        var inductionVariable_0 = 0;
                        var last_0 = constantDirectives.get_size_woubt6_k$() - 1 | 0;
                        if (inductionVariable_0 <= last_0)
                          do {
                            var i = inductionVariable_0;
                            inductionVariable_0 = inductionVariable_0 + 1 | 0;
                            if (!equals(_this__u8e3s4.get_formats_9xs0wd_k$().get_c1px32_k$(index_0 + i | 0), constantDirectives.get_c1px32_k$(i))) {
                              continue searchConstant;
                            }
                          }
                           while (inductionVariable_0 <= last_0);
                        this_3.append_22ad7x_k$(constant.get_first_irdx8n_k$());
                        index_0 = index_0 + constantDirectives.get_size_woubt6_k$() | 0;
                        if (index_0 < _this__u8e3s4.get_formats_9xs0wd_k$().get_size_woubt6_k$()) {
                          // Inline function 'kotlin.text.appendLine' call
                          this_3.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
                        }
                        continue loop;
                      }
                    }
                    if (index_0 === (_this__u8e3s4.get_formats_9xs0wd_k$().get_size_woubt6_k$() - 1 | 0)) {
                      this_3.append_22ad7x_k$(builderString(last(_this__u8e3s4.get_formats_9xs0wd_k$()), constants));
                    } else {
                      // Inline function 'kotlin.text.appendLine' call
                      var value_7 = builderString(_this__u8e3s4.get_formats_9xs0wd_k$().get_c1px32_k$(index_0), constants);
                      // Inline function 'kotlin.text.appendLine' call
                      this_3.append_22ad7x_k$(value_7).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
                    }
                    index_0 = index_0 + 1 | 0;
                  }
                }
                tmp = this_3.toString();
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function char(_this__u8e3s4, value) {
    return _this__u8e3s4.chars_pe6iqb_k$(toString_0(value));
  }
  function optional(_this__u8e3s4, ifZero, format) {
    ifZero = ifZero === VOID ? '' : ifZero;
    var tmp;
    if (isInterface(_this__u8e3s4, AbstractDateTimeFormatBuilder)) {
      _this__u8e3s4.appendOptionalImpl_725ywl_k$(ifZero, typeof format === 'function' ? format : THROW_CCE());
      tmp = Unit_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('impossible');
    }
    return tmp;
  }
  function alternativeParsing(_this__u8e3s4, alternativeFormats, primaryFormat) {
    var tmp;
    if (isInterface(_this__u8e3s4, AbstractDateTimeFormatBuilder)) {
      var tmp_0 = (isArray(alternativeFormats) ? alternativeFormats : THROW_CCE()).slice();
      _this__u8e3s4.appendAlternativeParsingImpl_9hljk3_k$(tmp_0, typeof primaryFormat === 'function' ? primaryFormat : THROW_CCE());
      tmp = Unit_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('impossible');
    }
    return tmp;
  }
  function AbstractDateTimeFormatBuilder() {
  }
  function secondFractionInternal(_this__u8e3s4, minLength, maxLength, grouping) {
    if (isInterface(_this__u8e3s4, AbstractWithTimeBuilder)) {
      _this__u8e3s4.addFormatStructureForTime_h3r7lv_k$(new BasicFormatStructure(new FractionalSecondDirective(minLength, maxLength, grouping)));
    }
  }
  function get_ISO_DATE() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp0 = ISO_DATE$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ISO_DATE', 0, tmp, _get_ISO_DATE_$ref_powsum(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var ISO_DATE$delegate;
  function get_ISO_DATE_BASIC() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp0 = ISO_DATE_BASIC$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ISO_DATE_BASIC', 0, tmp, _get_ISO_DATE_BASIC_$ref_3fs8eb(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var ISO_DATE_BASIC$delegate;
  function get_emptyIncompleteLocalDate() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    return emptyIncompleteLocalDate;
  }
  var emptyIncompleteLocalDate;
  function DateFieldContainer() {
  }
  function IncompleteLocalDate(yearMonth, day, dayOfWeek, dayOfYear) {
    yearMonth = yearMonth === VOID ? new IncompleteYearMonth() : yearMonth;
    day = day === VOID ? null : day;
    dayOfWeek = dayOfWeek === VOID ? null : dayOfWeek;
    dayOfYear = dayOfYear === VOID ? null : dayOfYear;
    this.yearMonth_1 = yearMonth;
    this.day_1 = day;
    this.dayOfWeek_1 = dayOfWeek;
    this.dayOfYear_1 = dayOfYear;
  }
  protoOf(IncompleteLocalDate).get_yearMonth_at9cq_k$ = function () {
    return this.yearMonth_1;
  };
  protoOf(IncompleteLocalDate).set_day_420fh8_k$ = function (_set____db54di) {
    this.day_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).get_day_18j7il_k$ = function () {
    return this.day_1;
  };
  protoOf(IncompleteLocalDate).set_dayOfWeek_rlg9ap_k$ = function (_set____db54di) {
    this.dayOfWeek_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).get_dayOfWeek_3kfgci_k$ = function () {
    return this.dayOfWeek_1;
  };
  protoOf(IncompleteLocalDate).set_dayOfYear_b6dvlk_k$ = function (_set____db54di) {
    this.dayOfYear_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).get_dayOfYear_3ke6gp_k$ = function () {
    return this.dayOfYear_1;
  };
  protoOf(IncompleteLocalDate).toLocalDate_u88f42_k$ = function () {
    var year = requireParsedField(this.get_year_woy26e_k$(), 'year');
    var dayOfYear = this.dayOfYear_1;
    var tmp;
    if (dayOfYear == null) {
      tmp = new LocalDate(year, requireParsedField(this.get_monthNumber_nb47ls_k$(), 'monthNumber'), requireParsedField(this.day_1, 'day'));
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = plus_1(new LocalDate(year, 1, 1), dayOfYear - 1 | 0, Companion_getInstance_7().get_DAY_18jw19_k$());
      if (!(this_0.get_year_woy26e_k$() === year)) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of year is ' + dayOfYear + ', which is not a valid day of year for the year ' + year));
      }
      if (!(this.get_monthNumber_nb47ls_k$() == null) && !(get_number(this_0.get_month_ivc8d3_k$()) === this.get_monthNumber_nb47ls_k$())) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of year is ' + dayOfYear + ', which is ' + this_0.get_month_ivc8d3_k$().toString() + ', ') + ('but ' + this.get_monthNumber_nb47ls_k$() + ' was specified as the month number'));
      }
      if (!(this.day_1 == null) && !(this_0.get_day_18j7il_k$() === this.day_1)) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of year is ' + dayOfYear + ', which is the day ' + this_0.get_day_18j7il_k$() + ' of ' + this_0.get_month_ivc8d3_k$().toString() + ', ') + ('but ' + this.day_1 + ' was specified as the day of month'));
      }
      tmp = this_0;
    }
    var date = tmp;
    var tmp0_safe_receiver = this.dayOfWeek_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (!(tmp0_safe_receiver === get_isoDayNumber(date.get_dayOfWeek_3kfgci_k$()))) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of week is ' + DayOfWeek_0(tmp0_safe_receiver).toString() + ' but the date is ' + date.toString() + ', which is a ' + date.get_dayOfWeek_3kfgci_k$().toString()));
      }
    }
    return date;
  };
  protoOf(IncompleteLocalDate).populateFrom_mbc3c1_k$ = function (date) {
    this.set_year_8yykwv_k$(date.get_year_woy26e_k$());
    this.set_monthNumber_nufdv5_k$(get_number(date.get_month_ivc8d3_k$()));
    this.day_1 = date.get_day_18j7il_k$();
    this.dayOfWeek_1 = get_isoDayNumber(date.get_dayOfWeek_3kfgci_k$());
    this.dayOfYear_1 = date.get_dayOfYear_3ke6gp_k$();
  };
  protoOf(IncompleteLocalDate).copy_1tks5_k$ = function () {
    return new IncompleteLocalDate(this.yearMonth_1.copy_1tks5_k$(), this.day_1, this.dayOfWeek_1, this.dayOfYear_1);
  };
  protoOf(IncompleteLocalDate).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof IncompleteLocalDate) {
      tmp_2 = this.yearMonth_1.equals(other.yearMonth_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.day_1 == other.day_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.dayOfWeek_1 == other.dayOfWeek_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.dayOfYear_1 == other.dayOfYear_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalDate).hashCode = function () {
    var tmp = imul(this.yearMonth_1.hashCode(), 29791);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.day_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp_0 = tmp + imul(tmp$ret$0, 961) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.dayOfWeek_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    var tmp_1 = tmp_0 + imul(tmp$ret$1, 31) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.dayOfYear_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    return tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
  };
  protoOf(IncompleteLocalDate).toString = function () {
    var tmp;
    if (this.dayOfYear_1 == null) {
      var tmp_0 = this.yearMonth_1.toString();
      var tmp0_elvis_lhs = this.day_1;
      var tmp_1 = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
      var tmp1_elvis_lhs = this.dayOfWeek_1;
      tmp = tmp_0 + '-' + tmp_1 + ' (day of week is ' + toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs) + ')';
    } else if (this.day_1 == null && this.get_monthNumber_nb47ls_k$() == null) {
      var tmp2_elvis_lhs = this.yearMonth_1.get_year_woy26e_k$();
      var tmp_2 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
      var tmp_3 = this.dayOfYear_1;
      var tmp3_elvis_lhs = this.dayOfWeek_1;
      tmp = '(' + tmp_2 + ')-' + tmp_3 + ' (day of week is ' + toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs) + ')';
    } else {
      var tmp_4 = this.yearMonth_1.toString();
      var tmp4_elvis_lhs = this.day_1;
      var tmp_5 = toString(tmp4_elvis_lhs == null ? '??' : tmp4_elvis_lhs);
      var tmp5_elvis_lhs = this.dayOfWeek_1;
      tmp = tmp_4 + '-' + tmp_5 + ' (day of week is ' + toString(tmp5_elvis_lhs == null ? '??' : tmp5_elvis_lhs) + ', day of year is ' + this.dayOfYear_1 + ')';
    }
    return tmp;
  };
  protoOf(IncompleteLocalDate).set_year_8yykwv_k$ = function (_set____db54di) {
    this.yearMonth_1.set_year_8yykwv_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDate).get_year_woy26e_k$ = function () {
    return this.yearMonth_1.get_year_woy26e_k$();
  };
  protoOf(IncompleteLocalDate).set_monthNumber_nufdv5_k$ = function (_set____db54di) {
    this.yearMonth_1.set_monthNumber_nufdv5_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDate).get_monthNumber_nb47ls_k$ = function () {
    return this.yearMonth_1.get_monthNumber_nb47ls_k$();
  };
  function DayOfWeekNames_init_$Init$(monday, tuesday, wednesday, thursday, friday, saturday, sunday, $this) {
    DayOfWeekNames.call($this, listOf_0([monday, tuesday, wednesday, thursday, friday, saturday, sunday]));
    return $this;
  }
  function DayOfWeekNames_init_$Create$(monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
    return DayOfWeekNames_init_$Init$(monday, tuesday, wednesday, thursday, friday, saturday, sunday, objectCreate(protoOf(DayOfWeekNames)));
  }
  function Companion_11() {
    Companion_instance_11 = this;
    this.ENGLISH_FULL_1 = new DayOfWeekNames(listOf_0(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']));
    this.ENGLISH_ABBREVIATED_1 = new DayOfWeekNames(listOf_0(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']));
  }
  protoOf(Companion_11).get_ENGLISH_FULL_w9oxw9_k$ = function () {
    return this.ENGLISH_FULL_1;
  };
  protoOf(Companion_11).get_ENGLISH_ABBREVIATED_cfvc81_k$ = function () {
    return this.ENGLISH_ABBREVIATED_1;
  };
  var Companion_instance_11;
  function Companion_getInstance_15() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function String$toString$ref() {
    var l = function (p0) {
      return toString(p0);
    };
    l.callableName = 'toString';
    return l;
  }
  function DayOfWeekNames(names) {
    Companion_getInstance_15();
    this.names_1 = names;
    // Inline function 'kotlin.require' call
    if (!(this.names_1.get_size_woubt6_k$() === 7)) {
      var message = 'Day of week names must contain exactly 7 elements';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var progression = get_indices(this.names_1);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ix = element;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = this.names_1.get_c1px32_k$(ix);
        // Inline function 'kotlin.require' call
        if (!(charSequenceLength(this_0) > 0)) {
          var message_0 = 'A day-of-week name can not be empty';
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < ix)
          do {
            var ix2 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.require' call
            if (!!(this.names_1.get_c1px32_k$(ix) === this.names_1.get_c1px32_k$(ix2))) {
              var message_1 = "Day-of-week names must be unique, but '" + this.names_1.get_c1px32_k$(ix) + "' was repeated";
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
          }
           while (inductionVariable_0 < ix);
      }
       while (!(element === last));
  }
  protoOf(DayOfWeekNames).get_names_ivn21r_k$ = function () {
    return this.names_1;
  };
  protoOf(DayOfWeekNames).toString = function () {
    return joinToString(this.names_1, ', ', 'DayOfWeekNames(', ')', VOID, VOID, String$toString$ref());
  };
  protoOf(DayOfWeekNames).equals = function (other) {
    var tmp;
    if (other instanceof DayOfWeekNames) {
      tmp = equals(this.names_1, other.names_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayOfWeekNames).hashCode = function () {
    return hashCode(this.names_1);
  };
  function Companion_12() {
    Companion_instance_12 = this;
  }
  protoOf(Companion_12).build_o3smjo_k$ = function (block) {
    var builder = new Builder_0(new AppendableFormatStructure());
    block(builder);
    return new LocalDateFormat(builder.build_1k0s4u_k$());
  };
  var Companion_instance_12;
  function Companion_getInstance_16() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function Builder_0(actualBuilder) {
    this.actualBuilder_1 = actualBuilder;
  }
  protoOf(Builder_0).get_actualBuilder_7qypdo_k$ = function () {
    return this.actualBuilder_1;
  };
  protoOf(Builder_0).addFormatStructureForDate_t2v9hh_k$ = function (structure) {
    return this.actualBuilder_1.add_b6pdwl_k$(structure);
  };
  protoOf(Builder_0).createEmpty_8k9z67_k$ = function () {
    return new Builder_0(new AppendableFormatStructure());
  };
  function LocalDateFormat(actualFormat) {
    Companion_getInstance_16();
    AbstractDateTimeFormat.call(this);
    this.actualFormat_1 = actualFormat;
  }
  protoOf(LocalDateFormat).get_actualFormat_d0ha3y_k$ = function () {
    return this.actualFormat_1;
  };
  protoOf(LocalDateFormat).intermediateFromValue_lmp4jt_k$ = function (value) {
    // Inline function 'kotlin.apply' call
    var this_0 = new IncompleteLocalDate();
    this_0.populateFrom_mbc3c1_k$(value);
    return this_0;
  };
  protoOf(LocalDateFormat).intermediateFromValue_816pep_k$ = function (value) {
    return this.intermediateFromValue_lmp4jt_k$(value instanceof LocalDate ? value : THROW_CCE());
  };
  protoOf(LocalDateFormat).valueFromIntermediate_pfdrox_k$ = function (intermediate) {
    return intermediate.toLocalDate_u88f42_k$();
  };
  protoOf(LocalDateFormat).valueFromIntermediate_60ox3m_k$ = function (intermediate) {
    return this.valueFromIntermediate_pfdrox_k$(intermediate instanceof IncompleteLocalDate ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateFormat).get_emptyIntermediate_lysuyr_k$ = function () {
    return get_emptyIncompleteLocalDate();
  };
  function AbstractWithDateBuilder() {
  }
  function _get_padding__n2y8rk($this) {
    return $this.padding_1;
  }
  function DayDirective(padding) {
    var tmp = DateFields_getInstance().day_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(DayDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return this.padding_1.get_ordinal_ip24qg_k$() === 1 ? 'day()' : 'day(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(DayDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function _get_names__dwg6t3($this) {
    return $this.names_1;
  }
  function DayOfWeekDirective(names) {
    NamedUnsignedIntFieldFormatDirective.call(this, DateFields_getInstance().isoDayOfWeek_1, names.names_1, 'dayOfWeekName');
    this.names_1 = names;
  }
  protoOf(DayOfWeekDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return 'dayOfWeek(' + toKotlinCode_0(this.names_1) + ')';
  };
  protoOf(DayOfWeekDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayOfWeekDirective) {
      tmp = equals(this.names_1.names_1, other.names_1.names_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayOfWeekDirective).hashCode = function () {
    return hashCode(this.names_1.names_1);
  };
  function _get_padding__n2y8rk_0($this) {
    return $this.padding_1;
  }
  function DayOfYearDirective(padding) {
    var tmp = DateFields_getInstance().dayOfYear_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 3 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 3 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(DayOfYearDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return this.padding_1.get_ordinal_ip24qg_k$() === 1 ? 'dayOfYear()' : 'dayOfYear(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(DayOfYearDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayOfYearDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayOfYearDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function DateFieldContainer$_get_day_$ref_2ebhxx() {
    return function (p0) {
      return p0.get_day_18j7il_k$();
    };
  }
  function DateFieldContainer$_set_day_$ref_s0jsax() {
    return function (p0, p1) {
      p0.set_day_420fh8_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateFieldContainer$_get_dayOfWeek_$ref_thwqom() {
    return function (p0) {
      return p0.get_dayOfWeek_3kfgci_k$();
    };
  }
  function DateFieldContainer$_set_dayOfWeek_$ref_ea586a() {
    return function (p0, p1) {
      p0.set_dayOfWeek_rlg9ap_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateFieldContainer$_get_dayOfYear_$ref_2m6gfz() {
    return function (p0) {
      return p0.get_dayOfYear_3ke6gp_k$();
    };
  }
  function DateFieldContainer$_set_dayOfYear_$ref_cll22d() {
    return function (p0, p1) {
      p0.set_dayOfYear_b6dvlk_k$(p1);
      return Unit_getInstance();
    };
  }
  function DateFields() {
    DateFields_instance = this;
    var tmp = this;
    var tmp_0 = KMutableProperty1;
    var tmp_1 = DateFieldContainer$_get_day_$ref_2ebhxx();
    tmp.day_1 = new UnsignedFieldSpec(new PropertyAccessor(getPropertyCallableRef('day', 1, tmp_0, tmp_1, DateFieldContainer$_set_day_$ref_s0jsax())), 1, 31);
    var tmp_2 = this;
    var tmp_3 = KMutableProperty1;
    var tmp_4 = DateFieldContainer$_get_dayOfWeek_$ref_thwqom();
    tmp_2.isoDayOfWeek_1 = new UnsignedFieldSpec(new PropertyAccessor(getPropertyCallableRef('dayOfWeek', 1, tmp_3, tmp_4, DateFieldContainer$_set_dayOfWeek_$ref_ea586a())), 1, 7);
    var tmp_5 = this;
    var tmp_6 = KMutableProperty1;
    var tmp_7 = DateFieldContainer$_get_dayOfYear_$ref_2m6gfz();
    tmp_5.dayOfYear_1 = new UnsignedFieldSpec(new PropertyAccessor(getPropertyCallableRef('dayOfYear', 1, tmp_6, tmp_7, DateFieldContainer$_set_dayOfYear_$ref_cll22d())), 1, 366);
  }
  protoOf(DateFields).get_day_18j7il_k$ = function () {
    return this.day_1;
  };
  protoOf(DateFields).get_isoDayOfWeek_my920b_k$ = function () {
    return this.isoDayOfWeek_1;
  };
  protoOf(DateFields).get_dayOfYear_3ke6gp_k$ = function () {
    return this.dayOfYear_1;
  };
  var DateFields_instance;
  function DateFields_getInstance() {
    if (DateFields_instance == null)
      new DateFields();
    return DateFields_instance;
  }
  function toKotlinCode_0(_this__u8e3s4) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp0_subject = _this__u8e3s4.names_1;
    var tmp;
    if (equals(tmp0_subject, Companion_getInstance_15().ENGLISH_FULL_1.names_1)) {
      Companion_getInstance_15();
      tmp = 'DayOfWeekNames.' + 'ENGLISH_FULL';
    } else if (equals(tmp0_subject, Companion_getInstance_15().ENGLISH_ABBREVIATED_1.names_1)) {
      Companion_getInstance_15();
      tmp = 'DayOfWeekNames.' + 'ENGLISH_ABBREVIATED';
    } else {
      tmp = joinToString(_this__u8e3s4.names_1, ', ', 'DayOfWeekNames(', ')', VOID, VOID, toKotlinCode$ref());
    }
    return tmp;
  }
  function ISO_DATE$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_getInstance_16();
    return tmp.build_o3smjo_k$(ISO_DATE$delegate$lambda$lambda);
  }
  function ISO_DATE$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.year$default_9maba2_k$();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.monthNumber$default_7baaey_k$();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.day$default_x56zi1_k$();
    return Unit_getInstance();
  }
  function _get_ISO_DATE_$ref_powsum() {
    return function () {
      return get_ISO_DATE();
    };
  }
  function ISO_DATE_BASIC$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_getInstance_16();
    return tmp.build_o3smjo_k$(ISO_DATE_BASIC$delegate$lambda$lambda);
  }
  function ISO_DATE_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.year$default_9maba2_k$();
    $this$build.monthNumber$default_7baaey_k$();
    $this$build.day$default_x56zi1_k$();
    return Unit_getInstance();
  }
  function _get_ISO_DATE_BASIC_$ref_3fs8eb() {
    return function () {
      return get_ISO_DATE_BASIC();
    };
  }
  function toKotlinCode$ref() {
    var l = function (p0) {
      return toKotlinCode_3(p0);
    };
    l.callableName = 'toKotlinCode';
    return l;
  }
  var properties_initialized_LocalDateFormat_kt_fmnlhc;
  function _init_properties_LocalDateFormat_kt__k1uk9u() {
    if (!properties_initialized_LocalDateFormat_kt_fmnlhc) {
      properties_initialized_LocalDateFormat_kt_fmnlhc = true;
      ISO_DATE$delegate = lazy(ISO_DATE$delegate$lambda);
      ISO_DATE_BASIC$delegate = lazy(ISO_DATE_BASIC$delegate$lambda);
      emptyIncompleteLocalDate = new IncompleteLocalDate();
    }
  }
  function get_ISO_DATETIME() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    var tmp0 = ISO_DATETIME$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ISO_DATETIME', 0, tmp, _get_ISO_DATETIME_$ref_5bxm11(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var ISO_DATETIME$delegate;
  function get_emptyIncompleteLocalDateTime() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    return emptyIncompleteLocalDateTime;
  }
  var emptyIncompleteLocalDateTime;
  function DateTimeFieldContainer() {
  }
  function Companion_13() {
    Companion_instance_13 = this;
  }
  protoOf(Companion_13).build_jyqq35_k$ = function (block) {
    var builder = new Builder_1(new AppendableFormatStructure());
    block(builder);
    return new LocalDateTimeFormat(builder.build_1k0s4u_k$());
  };
  var Companion_instance_13;
  function Companion_getInstance_17() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function Builder_1(actualBuilder) {
    this.actualBuilder_1 = actualBuilder;
  }
  protoOf(Builder_1).get_actualBuilder_7qypdo_k$ = function () {
    return this.actualBuilder_1;
  };
  protoOf(Builder_1).addFormatStructureForDateTime_noiy5b_k$ = function (structure) {
    this.actualBuilder_1.add_b6pdwl_k$(structure);
  };
  protoOf(Builder_1).createEmpty_8k9z67_k$ = function () {
    return new Builder_1(new AppendableFormatStructure());
  };
  function LocalDateTimeFormat(actualFormat) {
    Companion_getInstance_17();
    AbstractDateTimeFormat.call(this);
    this.actualFormat_1 = actualFormat;
  }
  protoOf(LocalDateTimeFormat).get_actualFormat_d0ha3y_k$ = function () {
    return this.actualFormat_1;
  };
  protoOf(LocalDateTimeFormat).intermediateFromValue_3spoix_k$ = function (value) {
    // Inline function 'kotlin.apply' call
    var this_0 = new IncompleteLocalDateTime();
    this_0.populateFrom_8zu6yp_k$(value);
    return this_0;
  };
  protoOf(LocalDateTimeFormat).intermediateFromValue_816pep_k$ = function (value) {
    return this.intermediateFromValue_3spoix_k$(value instanceof LocalDateTime ? value : THROW_CCE());
  };
  protoOf(LocalDateTimeFormat).valueFromIntermediate_nes9ir_k$ = function (intermediate) {
    return intermediate.toLocalDateTime_5q5ehh_k$();
  };
  protoOf(LocalDateTimeFormat).valueFromIntermediate_60ox3m_k$ = function (intermediate) {
    return this.valueFromIntermediate_nes9ir_k$(intermediate instanceof IncompleteLocalDateTime ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateTimeFormat).get_emptyIntermediate_lysuyr_k$ = function () {
    return get_emptyIncompleteLocalDateTime();
  };
  function IncompleteLocalDateTime(date, time) {
    date = date === VOID ? new IncompleteLocalDate() : date;
    time = time === VOID ? new IncompleteLocalTime() : time;
    this.date_1 = date;
    this.time_1 = time;
  }
  protoOf(IncompleteLocalDateTime).get_date_wokkxj_k$ = function () {
    return this.date_1;
  };
  protoOf(IncompleteLocalDateTime).get_time_wouyhi_k$ = function () {
    return this.time_1;
  };
  protoOf(IncompleteLocalDateTime).toLocalDateTime_5q5ehh_k$ = function () {
    return new LocalDateTime(this.date_1.toLocalDate_u88f42_k$(), this.time_1.toLocalTime_u7y1k3_k$());
  };
  protoOf(IncompleteLocalDateTime).populateFrom_8zu6yp_k$ = function (dateTime) {
    this.date_1.populateFrom_mbc3c1_k$(dateTime.get_date_wokkxj_k$());
    this.time_1.populateFrom_n7wbcx_k$(dateTime.get_time_wouyhi_k$());
  };
  protoOf(IncompleteLocalDateTime).copy_1tks5_k$ = function () {
    return new IncompleteLocalDateTime(this.date_1.copy_1tks5_k$(), this.time_1.copy_1tks5_k$());
  };
  protoOf(IncompleteLocalDateTime).set_day_420fh8_k$ = function (_set____db54di) {
    this.date_1.set_day_420fh8_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_day_18j7il_k$ = function () {
    return this.date_1.get_day_18j7il_k$();
  };
  protoOf(IncompleteLocalDateTime).set_dayOfWeek_rlg9ap_k$ = function (_set____db54di) {
    this.date_1.set_dayOfWeek_rlg9ap_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_dayOfWeek_3kfgci_k$ = function () {
    return this.date_1.get_dayOfWeek_3kfgci_k$();
  };
  protoOf(IncompleteLocalDateTime).set_dayOfYear_b6dvlk_k$ = function (_set____db54di) {
    this.date_1.set_dayOfYear_b6dvlk_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_dayOfYear_3ke6gp_k$ = function () {
    return this.date_1.get_dayOfYear_3ke6gp_k$();
  };
  protoOf(IncompleteLocalDateTime).set_year_8yykwv_k$ = function (_set____db54di) {
    this.date_1.set_year_8yykwv_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_year_woy26e_k$ = function () {
    return this.date_1.get_year_woy26e_k$();
  };
  protoOf(IncompleteLocalDateTime).set_monthNumber_nufdv5_k$ = function (_set____db54di) {
    this.date_1.set_monthNumber_nufdv5_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_monthNumber_nb47ls_k$ = function () {
    return this.date_1.get_monthNumber_nb47ls_k$();
  };
  protoOf(IncompleteLocalDateTime).set_minute_35xlhm_k$ = function (_set____db54di) {
    this.time_1.set_minute_35xlhm_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_minute_gnc10d_k$ = function () {
    return this.time_1.get_minute_gnc10d_k$();
  };
  protoOf(IncompleteLocalDateTime).set_second_5q0zme_k$ = function (_set____db54di) {
    this.time_1.set_second_5q0zme_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_second_jf7fjx_k$ = function () {
    return this.time_1.get_second_jf7fjx_k$();
  };
  protoOf(IncompleteLocalDateTime).set_nanosecond_xpjfxy_k$ = function (_set____db54di) {
    this.time_1.set_nanosecond_xpjfxy_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_nanosecond_fws9td_k$ = function () {
    return this.time_1.get_nanosecond_fws9td_k$();
  };
  protoOf(IncompleteLocalDateTime).set_hour_cn99tm_k$ = function (_set____db54di) {
    this.time_1.set_hour_cn99tm_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_hour_wonfal_k$ = function () {
    return this.time_1.get_hour_wonfal_k$();
  };
  protoOf(IncompleteLocalDateTime).set_hourOfAmPm_4kn0va_k$ = function (_set____db54di) {
    this.time_1.set_hourOfAmPm_4kn0va_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_hourOfAmPm_c9obsj_k$ = function () {
    return this.time_1.get_hourOfAmPm_c9obsj_k$();
  };
  protoOf(IncompleteLocalDateTime).set_amPm_5mqo57_k$ = function (_set____db54di) {
    this.time_1.set_amPm_5mqo57_k$(_set____db54di);
  };
  protoOf(IncompleteLocalDateTime).get_amPm_woiw0i_k$ = function () {
    return this.time_1.get_amPm_woiw0i_k$();
  };
  protoOf(IncompleteLocalDateTime).set_fractionOfSecond_ixjooe_k$ = function (value) {
    this.time_1.set_fractionOfSecond_ixjooe_k$(value);
  };
  protoOf(IncompleteLocalDateTime).get_fractionOfSecond_3ubmju_k$ = function () {
    return this.time_1.get_fractionOfSecond_3ubmju_k$();
  };
  function AbstractWithDateTimeBuilder() {
  }
  function ISO_DATETIME$delegate$lambda() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    var tmp = Companion_getInstance_17();
    return tmp.build_jyqq35_k$(ISO_DATETIME$delegate$lambda$lambda);
  }
  function ISO_DATETIME$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    $this$build.date_aq11yp_k$(get_ISO_DATE());
    var tmp = [ISO_DATETIME$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_DATETIME$delegate$lambda$lambda$lambda_0);
    $this$build.time_eev9o3_k$(get_ISO_TIME());
    return Unit_getInstance();
  }
  function ISO_DATETIME$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    char($this$alternativeParsing, _Char___init__impl__6a9atx(116));
    return Unit_getInstance();
  }
  function ISO_DATETIME$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    char($this$alternativeParsing, _Char___init__impl__6a9atx(84));
    return Unit_getInstance();
  }
  function _get_ISO_DATETIME_$ref_5bxm11() {
    return function () {
      return get_ISO_DATETIME();
    };
  }
  var properties_initialized_LocalDateTimeFormat_kt_67ys6r;
  function _init_properties_LocalDateTimeFormat_kt__aloigl() {
    if (!properties_initialized_LocalDateTimeFormat_kt_67ys6r) {
      properties_initialized_LocalDateTimeFormat_kt_67ys6r = true;
      ISO_DATETIME$delegate = lazy(ISO_DATETIME$delegate$lambda);
      emptyIncompleteLocalDateTime = new IncompleteLocalDateTime();
    }
  }
  function get_ISO_TIME() {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    var tmp0 = ISO_TIME$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ISO_TIME', 0, tmp, _get_ISO_TIME_$ref_kyx2od(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var ISO_TIME$delegate;
  function get_emptyIncompleteLocalTime() {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    return emptyIncompleteLocalTime;
  }
  var emptyIncompleteLocalTime;
  function TimeFieldContainer() {
  }
  function IncompleteLocalTime(hour, hourOfAmPm, amPm, minute, second, nanosecond) {
    hour = hour === VOID ? null : hour;
    hourOfAmPm = hourOfAmPm === VOID ? null : hourOfAmPm;
    amPm = amPm === VOID ? null : amPm;
    minute = minute === VOID ? null : minute;
    second = second === VOID ? null : second;
    nanosecond = nanosecond === VOID ? null : nanosecond;
    this.hour_1 = hour;
    this.hourOfAmPm_1 = hourOfAmPm;
    this.amPm_1 = amPm;
    this.minute_1 = minute;
    this.second_1 = second;
    this.nanosecond_1 = nanosecond;
  }
  protoOf(IncompleteLocalTime).set_hour_cn99tm_k$ = function (_set____db54di) {
    this.hour_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).get_hour_wonfal_k$ = function () {
    return this.hour_1;
  };
  protoOf(IncompleteLocalTime).set_hourOfAmPm_4kn0va_k$ = function (_set____db54di) {
    this.hourOfAmPm_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).get_hourOfAmPm_c9obsj_k$ = function () {
    return this.hourOfAmPm_1;
  };
  protoOf(IncompleteLocalTime).set_amPm_5mqo57_k$ = function (_set____db54di) {
    this.amPm_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).get_amPm_woiw0i_k$ = function () {
    return this.amPm_1;
  };
  protoOf(IncompleteLocalTime).set_minute_35xlhm_k$ = function (_set____db54di) {
    this.minute_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).get_minute_gnc10d_k$ = function () {
    return this.minute_1;
  };
  protoOf(IncompleteLocalTime).set_second_5q0zme_k$ = function (_set____db54di) {
    this.second_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).get_second_jf7fjx_k$ = function () {
    return this.second_1;
  };
  protoOf(IncompleteLocalTime).set_nanosecond_xpjfxy_k$ = function (_set____db54di) {
    this.nanosecond_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).get_nanosecond_fws9td_k$ = function () {
    return this.nanosecond_1;
  };
  protoOf(IncompleteLocalTime).toLocalTime_u7y1k3_k$ = function () {
    var tmp0_safe_receiver = this.hour_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = this.hourOfAmPm_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.require' call
        if (!((((tmp0_safe_receiver + 11 | 0) % 12 | 0) + 1 | 0) === tmp0_safe_receiver_0)) {
          var message = 'Inconsistent hour and hour-of-am-pm: hour is ' + tmp0_safe_receiver + ', but hour-of-am-pm is ' + tmp0_safe_receiver_0;
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
      }
      var tmp1_safe_receiver = this.amPm_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.require' call
        if (!(tmp1_safe_receiver.equals(AmPmMarker_PM_getInstance()) === tmp0_safe_receiver >= 12)) {
          var message_0 = 'Inconsistent hour and the AM/PM marker: hour is ' + tmp0_safe_receiver + ', but the AM/PM marker is ' + tmp1_safe_receiver.toString();
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
      }
      tmp = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp2_safe_receiver = this.hourOfAmPm_1;
      var tmp_1;
      if (tmp2_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp0_safe_receiver_1 = this.amPm_1;
        var tmp_2;
        if (tmp0_safe_receiver_1 == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.let' call
          tmp_2 = (tmp2_safe_receiver === 12 ? 0 : tmp2_safe_receiver) + (tmp0_safe_receiver_1.equals(AmPmMarker_PM_getInstance()) ? 12 : 0) | 0;
        }
        tmp_1 = tmp_2;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_0;
    var tmp_3;
    if (tmp3_elvis_lhs == null) {
      throw DateTimeFormatException_init_$Create$_0('Incomplete time: missing hour');
    } else {
      tmp_3 = tmp3_elvis_lhs;
    }
    var hour = tmp_3;
    var tmp_4 = requireParsedField(this.minute_1, 'minute');
    var tmp4_elvis_lhs = this.second_1;
    var tmp_5 = tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = this.nanosecond_1;
    return new LocalTime(hour, tmp_4, tmp_5, tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs);
  };
  protoOf(IncompleteLocalTime).populateFrom_n7wbcx_k$ = function (localTime) {
    this.hour_1 = localTime.get_hour_wonfal_k$();
    this.hourOfAmPm_1 = ((localTime.get_hour_wonfal_k$() + 11 | 0) % 12 | 0) + 1 | 0;
    this.amPm_1 = localTime.get_hour_wonfal_k$() >= 12 ? AmPmMarker_PM_getInstance() : AmPmMarker_AM_getInstance();
    this.minute_1 = localTime.get_minute_gnc10d_k$();
    this.second_1 = localTime.get_second_jf7fjx_k$();
    this.nanosecond_1 = localTime.get_nanosecond_fws9td_k$();
  };
  protoOf(IncompleteLocalTime).copy_1tks5_k$ = function () {
    return new IncompleteLocalTime(this.hour_1, this.hourOfAmPm_1, this.amPm_1, this.minute_1, this.second_1, this.nanosecond_1);
  };
  protoOf(IncompleteLocalTime).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    if (other instanceof IncompleteLocalTime) {
      tmp_4 = this.hour_1 == other.hour_1;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = this.hourOfAmPm_1 == other.hourOfAmPm_1;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = equals(this.amPm_1, other.amPm_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.minute_1 == other.minute_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.second_1 == other.second_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.nanosecond_1 == other.nanosecond_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalTime).hashCode = function () {
    var tmp0_elvis_lhs = this.hour_1;
    var tmp = imul(tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs, 31);
    var tmp1_elvis_lhs = this.hourOfAmPm_1;
    var tmp_0 = tmp + imul(tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, 31) | 0;
    var tmp2_safe_receiver = this.amPm_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    var tmp_1 = tmp_0 + imul(tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs, 31) | 0;
    var tmp4_elvis_lhs = this.minute_1;
    var tmp_2 = tmp_1 + imul(tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs, 31) | 0;
    var tmp5_elvis_lhs = this.second_1;
    var tmp_3 = tmp_2 + imul(tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs, 31) | 0;
    var tmp6_elvis_lhs = this.nanosecond_1;
    return tmp_3 + (tmp6_elvis_lhs == null ? 0 : tmp6_elvis_lhs) | 0;
  };
  protoOf(IncompleteLocalTime).toString = function () {
    var tmp0_elvis_lhs = this.hour_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.minute_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.second_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_safe_receiver = this.nanosecond_1;
    var tmp_2;
    if (tmp3_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.let' call
      var it = tmp3_safe_receiver.toString();
      tmp_2 = padStart(it, 9 - it.length | 0, _Char___init__impl__6a9atx(48));
    }
    var tmp4_elvis_lhs = tmp_2;
    return tmp + ':' + tmp_0 + ':' + tmp_1 + '.' + (tmp4_elvis_lhs == null ? '???' : tmp4_elvis_lhs);
  };
  var AmPmMarker_AM_instance;
  var AmPmMarker_PM_instance;
  function values_2() {
    return [AmPmMarker_AM_getInstance(), AmPmMarker_PM_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'AM':
        return AmPmMarker_AM_getInstance();
      case 'PM':
        return AmPmMarker_PM_getInstance();
      default:
        AmPmMarker_initEntries();
        THROW_IAE('No enum constant kotlinx.datetime.format.AmPmMarker.' + value);
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var AmPmMarker_entriesInitialized;
  function AmPmMarker_initEntries() {
    if (AmPmMarker_entriesInitialized)
      return Unit_getInstance();
    AmPmMarker_entriesInitialized = true;
    AmPmMarker_AM_instance = new AmPmMarker('AM', 0);
    AmPmMarker_PM_instance = new AmPmMarker('PM', 1);
  }
  var $ENTRIES_2;
  function AmPmMarker(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_14() {
    Companion_instance_14 = this;
  }
  protoOf(Companion_14).build_agwrib_k$ = function (block) {
    var builder = new Builder_2(new AppendableFormatStructure());
    block(builder);
    return new LocalTimeFormat(builder.build_1k0s4u_k$());
  };
  var Companion_instance_14;
  function Companion_getInstance_18() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function Builder_2(actualBuilder) {
    this.actualBuilder_1 = actualBuilder;
  }
  protoOf(Builder_2).get_actualBuilder_7qypdo_k$ = function () {
    return this.actualBuilder_1;
  };
  protoOf(Builder_2).addFormatStructureForTime_h3r7lv_k$ = function (structure) {
    this.actualBuilder_1.add_b6pdwl_k$(structure);
  };
  protoOf(Builder_2).createEmpty_8k9z67_k$ = function () {
    return new Builder_2(new AppendableFormatStructure());
  };
  function LocalTimeFormat(actualFormat) {
    Companion_getInstance_18();
    AbstractDateTimeFormat.call(this);
    this.actualFormat_1 = actualFormat;
  }
  protoOf(LocalTimeFormat).get_actualFormat_d0ha3y_k$ = function () {
    return this.actualFormat_1;
  };
  protoOf(LocalTimeFormat).intermediateFromValue_ese2jb_k$ = function (value) {
    // Inline function 'kotlin.apply' call
    var this_0 = new IncompleteLocalTime();
    this_0.populateFrom_n7wbcx_k$(value);
    return this_0;
  };
  protoOf(LocalTimeFormat).intermediateFromValue_816pep_k$ = function (value) {
    return this.intermediateFromValue_ese2jb_k$(value instanceof LocalTime ? value : THROW_CCE());
  };
  protoOf(LocalTimeFormat).valueFromIntermediate_xifbh8_k$ = function (intermediate) {
    return intermediate.toLocalTime_u7y1k3_k$();
  };
  protoOf(LocalTimeFormat).valueFromIntermediate_60ox3m_k$ = function (intermediate) {
    return this.valueFromIntermediate_xifbh8_k$(intermediate instanceof IncompleteLocalTime ? intermediate : THROW_CCE());
  };
  protoOf(LocalTimeFormat).get_emptyIntermediate_lysuyr_k$ = function () {
    return get_emptyIncompleteLocalTime();
  };
  function AbstractWithTimeBuilder() {
  }
  function _get_padding__n2y8rk_1($this) {
    return $this.padding_1;
  }
  function HourDirective(padding) {
    var tmp = TimeFields_getInstance().hour_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(HourDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return this.padding_1.get_ordinal_ip24qg_k$() === 1 ? 'hour()' : 'hour(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(HourDirective).equals = function (other) {
    var tmp;
    if (other instanceof HourDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HourDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function _get_padding__n2y8rk_2($this) {
    return $this.padding_1;
  }
  function AmPmHourDirective(padding) {
    var tmp = TimeFields_getInstance().hourOfAmPm_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(AmPmHourDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return this.padding_1.get_ordinal_ip24qg_k$() === 1 ? 'amPmHour()' : 'amPmHour(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(AmPmHourDirective).equals = function (other) {
    var tmp;
    if (other instanceof AmPmHourDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AmPmHourDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function _get_amString__l1962a($this) {
    return $this.amString_1;
  }
  function _get_pmString__rsuvx9($this) {
    return $this.pmString_1;
  }
  function AmPmMarkerDirective(amString, pmString) {
    NamedEnumIntFieldFormatDirective.call(this, TimeFields_getInstance().amPm_1, mapOf([to(AmPmMarker_AM_getInstance(), amString), to(AmPmMarker_PM_getInstance(), pmString)]), 'AM/PM marker');
    this.amString_1 = amString;
    this.pmString_1 = pmString;
  }
  protoOf(AmPmMarkerDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return 'amPmMarker(' + this.amString_1 + ', ' + this.pmString_1 + ')';
  };
  protoOf(AmPmMarkerDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AmPmMarkerDirective) {
      tmp_0 = this.amString_1 === other.amString_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.pmString_1 === other.pmString_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AmPmMarkerDirective).hashCode = function () {
    return imul(31, getStringHashCode(this.amString_1)) + getStringHashCode(this.pmString_1) | 0;
  };
  function _get_padding__n2y8rk_3($this) {
    return $this.padding_1;
  }
  function MinuteDirective(padding) {
    var tmp = TimeFields_getInstance().minute_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(MinuteDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return this.padding_1.get_ordinal_ip24qg_k$() === 1 ? 'minute()' : 'minute(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(MinuteDirective).equals = function (other) {
    var tmp;
    if (other instanceof MinuteDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MinuteDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function _get_padding__n2y8rk_4($this) {
    return $this.padding_1;
  }
  function SecondDirective(padding) {
    var tmp = TimeFields_getInstance().second_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(SecondDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return this.padding_1.get_ordinal_ip24qg_k$() === 1 ? 'second()' : 'second(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(SecondDirective).equals = function (other) {
    var tmp;
    if (other instanceof SecondDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SecondDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function _get_minDigits__4wf98n($this) {
    return $this.minDigits_2;
  }
  function _get_maxDigits__p8x9uv($this) {
    return $this.maxDigits_2;
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.NO_EXTRA_ZEROS_1 = listOf_0([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    this.GROUP_BY_THREE_1 = listOf_0([2, 1, 0, 2, 1, 0, 2, 1, 0]);
  }
  protoOf(Companion_15).get_NO_EXTRA_ZEROS_9wrjkp_k$ = function () {
    return this.NO_EXTRA_ZEROS_1;
  };
  protoOf(Companion_15).get_GROUP_BY_THREE_z0tc3l_k$ = function () {
    return this.GROUP_BY_THREE_1;
  };
  var Companion_instance_15;
  function Companion_getInstance_19() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function FractionalSecondDirective(minDigits, maxDigits, zerosToAdd) {
    Companion_getInstance_19();
    zerosToAdd = zerosToAdd === VOID ? Companion_getInstance_19().NO_EXTRA_ZEROS_1 : zerosToAdd;
    DecimalFractionFieldFormatDirective.call(this, TimeFields_getInstance().fractionOfSecond_1, minDigits, maxDigits, zerosToAdd);
    this.minDigits_2 = minDigits;
    this.maxDigits_2 = maxDigits;
  }
  protoOf(FractionalSecondDirective).get_builderRepresentation_hh53bz_k$ = function () {
    var ref = 'secondFraction';
    return this.minDigits_2 === 1 && this.maxDigits_2 === 9 ? ref + '()' : this.minDigits_2 === 1 ? ref + '(maxLength = ' + this.maxDigits_2 + ')' : this.maxDigits_2 === 1 ? ref + '(minLength = ' + this.minDigits_2 + ')' : this.maxDigits_2 === this.minDigits_2 ? ref + '(' + this.minDigits_2 + ')' : ref + '(' + this.minDigits_2 + ', ' + this.maxDigits_2 + ')';
  };
  protoOf(FractionalSecondDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof FractionalSecondDirective) {
      tmp_0 = this.minDigits_2 === other.minDigits_2;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.maxDigits_2 === other.maxDigits_2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(FractionalSecondDirective).hashCode = function () {
    return imul(31, this.minDigits_2) + this.maxDigits_2 | 0;
  };
  function TimeFieldContainer$_get_hour_$ref_8ezbwm() {
    return function (p0) {
      return p0.get_hour_wonfal_k$();
    };
  }
  function TimeFieldContainer$_set_hour_$ref_l7vnde() {
    return function (p0, p1) {
      p0.set_hour_cn99tm_k$(p1);
      return Unit_getInstance();
    };
  }
  function TimeFieldContainer$_get_minute_$ref_evb2i2() {
    return function (p0) {
      return p0.get_minute_gnc10d_k$();
    };
  }
  function TimeFieldContainer$_set_minute_$ref_6xin6() {
    return function (p0, p1) {
      p0.set_minute_35xlhm_k$(p1);
      return Unit_getInstance();
    };
  }
  function TimeFieldContainer$_get_second_$ref_t7tjxy() {
    return function (p0) {
      return p0.get_second_jf7fjx_k$();
    };
  }
  function TimeFieldContainer$_set_second_$ref_qr1wvy() {
    return function (p0, p1) {
      p0.set_second_5q0zme_k$(p1);
      return Unit_getInstance();
    };
  }
  function TimeFieldContainer$_get_fractionOfSecond_$ref_u85by5() {
    return function (p0) {
      return p0.get_fractionOfSecond_3ubmju_k$();
    };
  }
  function TimeFieldContainer$_set_fractionOfSecond_$ref_quw20n() {
    return function (p0, p1) {
      p0.set_fractionOfSecond_ixjooe_k$(p1);
      return Unit_getInstance();
    };
  }
  function TimeFieldContainer$_get_amPm_$ref_u9tt1b() {
    return function (p0) {
      return p0.get_amPm_woiw0i_k$();
    };
  }
  function TimeFieldContainer$_set_amPm_$ref_hgxhkj() {
    return function (p0, p1) {
      p0.set_amPm_5mqo57_k$(p1);
      return Unit_getInstance();
    };
  }
  function TimeFieldContainer$_get_hourOfAmPm_$ref_okyxye() {
    return function (p0) {
      return p0.get_hourOfAmPm_c9obsj_k$();
    };
  }
  function TimeFieldContainer$_set_hourOfAmPm_$ref_y4i32() {
    return function (p0, p1) {
      p0.set_hourOfAmPm_4kn0va_k$(p1);
      return Unit_getInstance();
    };
  }
  function TimeFields() {
    TimeFields_instance = this;
    var tmp = this;
    var tmp_0 = KMutableProperty1;
    var tmp_1 = TimeFieldContainer$_get_hour_$ref_8ezbwm();
    tmp.hour_1 = new UnsignedFieldSpec(new PropertyAccessor(getPropertyCallableRef('hour', 1, tmp_0, tmp_1, TimeFieldContainer$_set_hour_$ref_l7vnde())), 0, 23);
    var tmp_2 = this;
    var tmp_3 = KMutableProperty1;
    var tmp_4 = TimeFieldContainer$_get_minute_$ref_evb2i2();
    tmp_2.minute_1 = new UnsignedFieldSpec(new PropertyAccessor(getPropertyCallableRef('minute', 1, tmp_3, tmp_4, TimeFieldContainer$_set_minute_$ref_6xin6())), 0, 59);
    var tmp_5 = this;
    var tmp_6 = KMutableProperty1;
    var tmp_7 = TimeFieldContainer$_get_second_$ref_t7tjxy();
    tmp_5.second_1 = new UnsignedFieldSpec(new PropertyAccessor(getPropertyCallableRef('second', 1, tmp_6, tmp_7, TimeFieldContainer$_set_second_$ref_qr1wvy())), 0, 59, VOID, 0);
    var tmp_8 = this;
    var tmp_9 = KMutableProperty1;
    var tmp_10 = TimeFieldContainer$_get_fractionOfSecond_$ref_u85by5();
    tmp_8.fractionOfSecond_1 = new GenericFieldSpec(new PropertyAccessor(getPropertyCallableRef('fractionOfSecond', 1, tmp_9, tmp_10, TimeFieldContainer$_set_fractionOfSecond_$ref_quw20n()), 'nanosecond'), VOID, new DecimalFraction(0, 9));
    var tmp_11 = this;
    var tmp_12 = KMutableProperty1;
    var tmp_13 = TimeFieldContainer$_get_amPm_$ref_u9tt1b();
    tmp_11.amPm_1 = new GenericFieldSpec(new PropertyAccessor(getPropertyCallableRef('amPm', 1, tmp_12, tmp_13, TimeFieldContainer$_set_amPm_$ref_hgxhkj())));
    var tmp_14 = this;
    var tmp_15 = KMutableProperty1;
    var tmp_16 = TimeFieldContainer$_get_hourOfAmPm_$ref_okyxye();
    tmp_14.hourOfAmPm_1 = new UnsignedFieldSpec(new PropertyAccessor(getPropertyCallableRef('hourOfAmPm', 1, tmp_15, tmp_16, TimeFieldContainer$_set_hourOfAmPm_$ref_y4i32())), 1, 12);
  }
  protoOf(TimeFields).get_hour_wonfal_k$ = function () {
    return this.hour_1;
  };
  protoOf(TimeFields).get_minute_gnc10d_k$ = function () {
    return this.minute_1;
  };
  protoOf(TimeFields).get_second_jf7fjx_k$ = function () {
    return this.second_1;
  };
  protoOf(TimeFields).get_fractionOfSecond_3ubmju_k$ = function () {
    return this.fractionOfSecond_1;
  };
  protoOf(TimeFields).get_amPm_woiw0i_k$ = function () {
    return this.amPm_1;
  };
  protoOf(TimeFields).get_hourOfAmPm_c9obsj_k$ = function () {
    return this.hourOfAmPm_1;
  };
  var TimeFields_instance;
  function TimeFields_getInstance() {
    if (TimeFields_instance == null)
      new TimeFields();
    return TimeFields_instance;
  }
  function ISO_TIME$delegate$lambda() {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    var tmp = Companion_getInstance_18();
    return tmp.build_agwrib_k$(ISO_TIME$delegate$lambda$lambda);
  }
  function ISO_TIME$delegate$lambda$lambda($this$build) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    $this$build.hour$default_sexqwx_k$();
    char($this$build, _Char___init__impl__6a9atx(58));
    $this$build.minute$default_g584a9_k$();
    var tmp = [ISO_TIME$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_TIME$delegate$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function ISO_TIME$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    return Unit_getInstance();
  }
  function ISO_TIME$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    char($this$alternativeParsing, _Char___init__impl__6a9atx(58));
    $this$alternativeParsing.second$default_h6j21d_k$();
    optional($this$alternativeParsing, VOID, ISO_TIME$delegate$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ISO_TIME$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    char($this$optional, _Char___init__impl__6a9atx(46));
    $this$optional.secondFraction_6m5e86_k$(1, 9);
    return Unit_getInstance();
  }
  function _get_ISO_TIME_$ref_kyx2od() {
    return function () {
      return get_ISO_TIME();
    };
  }
  function AmPmMarker_AM_getInstance() {
    AmPmMarker_initEntries();
    return AmPmMarker_AM_instance;
  }
  function AmPmMarker_PM_getInstance() {
    AmPmMarker_initEntries();
    return AmPmMarker_PM_instance;
  }
  var properties_initialized_LocalTimeFormat_kt_l1b0w1;
  function _init_properties_LocalTimeFormat_kt__5i3lfh() {
    if (!properties_initialized_LocalTimeFormat_kt_l1b0w1) {
      properties_initialized_LocalTimeFormat_kt_l1b0w1 = true;
      ISO_TIME$delegate = lazy(ISO_TIME$delegate$lambda);
      emptyIncompleteLocalTime = new IncompleteLocalTime();
    }
  }
  function get_nonPlainCharacters() {
    _init_properties_Unicode_kt__5cnwob();
    return nonPlainCharacters;
  }
  var nonPlainCharacters;
  var properties_initialized_Unicode_kt_2yq8h9;
  function _init_properties_Unicode_kt__5cnwob() {
    if (!properties_initialized_Unicode_kt_2yq8h9) {
      properties_initialized_Unicode_kt_2yq8h9 = true;
      nonPlainCharacters = plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), listOf_0([new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(39))]));
    }
  }
  function get_ISO_OFFSET() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp0 = ISO_OFFSET$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ISO_OFFSET', 0, tmp, _get_ISO_OFFSET_$ref_70d0nn(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var ISO_OFFSET$delegate;
  function get_ISO_OFFSET_BASIC() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp0 = ISO_OFFSET_BASIC$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ISO_OFFSET_BASIC', 0, tmp, _get_ISO_OFFSET_BASIC_$ref_lasmde(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var ISO_OFFSET_BASIC$delegate;
  function get_FOUR_DIGIT_OFFSET() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp0 = FOUR_DIGIT_OFFSET$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('FOUR_DIGIT_OFFSET', 0, tmp, _get_FOUR_DIGIT_OFFSET_$ref_30p6v2(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var FOUR_DIGIT_OFFSET$delegate;
  function get_emptyIncompleteUtcOffset() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    return emptyIncompleteUtcOffset;
  }
  var emptyIncompleteUtcOffset;
  function UtcOffsetFieldContainer() {
  }
  function IncompleteUtcOffset(offsetIsNegative, offsetHours, offsetMinutesOfHour, offsetSecondsOfMinute) {
    offsetIsNegative = offsetIsNegative === VOID ? null : offsetIsNegative;
    offsetHours = offsetHours === VOID ? null : offsetHours;
    offsetMinutesOfHour = offsetMinutesOfHour === VOID ? null : offsetMinutesOfHour;
    offsetSecondsOfMinute = offsetSecondsOfMinute === VOID ? null : offsetSecondsOfMinute;
    this.offsetIsNegative_1 = offsetIsNegative;
    this.offsetHours_1 = offsetHours;
    this.offsetMinutesOfHour_1 = offsetMinutesOfHour;
    this.offsetSecondsOfMinute_1 = offsetSecondsOfMinute;
  }
  protoOf(IncompleteUtcOffset).set_offsetIsNegative_lg0w0f_k$ = function (_set____db54di) {
    this.offsetIsNegative_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).get_offsetIsNegative_5z1gsb_k$ = function () {
    return this.offsetIsNegative_1;
  };
  protoOf(IncompleteUtcOffset).set_offsetHours_5m57ic_k$ = function (_set____db54di) {
    this.offsetHours_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).get_offsetHours_yn9exf_k$ = function () {
    return this.offsetHours_1;
  };
  protoOf(IncompleteUtcOffset).set_offsetMinutesOfHour_lotc9b_k$ = function (_set____db54di) {
    this.offsetMinutesOfHour_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).get_offsetMinutesOfHour_p1w44e_k$ = function () {
    return this.offsetMinutesOfHour_1;
  };
  protoOf(IncompleteUtcOffset).set_offsetSecondsOfMinute_kv6vfj_k$ = function (_set____db54di) {
    this.offsetSecondsOfMinute_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).get_offsetSecondsOfMinute_mpvmxe_k$ = function () {
    return this.offsetSecondsOfMinute_1;
  };
  protoOf(IncompleteUtcOffset).toUtcOffset_loe12c_k$ = function () {
    var sign = this.offsetIsNegative_1 === true ? -1 : 1;
    var tmp0_safe_receiver = this.offsetHours_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = imul(tmp0_safe_receiver, sign);
    }
    var tmp_0 = tmp;
    var tmp1_safe_receiver = this.offsetMinutesOfHour_1;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = imul(tmp1_safe_receiver, sign);
    }
    var tmp_2 = tmp_1;
    var tmp2_safe_receiver = this.offsetSecondsOfMinute_1;
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = imul(tmp2_safe_receiver, sign);
    }
    return UtcOffset_0(tmp_0, tmp_2, tmp_3);
  };
  protoOf(IncompleteUtcOffset).populateFrom_543lw3_k$ = function (offset) {
    this.offsetIsNegative_1 = offset.get_totalSeconds_oq5924_k$() < 0;
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = offset.get_totalSeconds_oq5924_k$();
    var totalSecondsAbs = abs(this_0);
    this.offsetHours_1 = totalSecondsAbs / 3600 | 0;
    this.offsetMinutesOfHour_1 = (totalSecondsAbs / 60 | 0) % 60 | 0;
    this.offsetSecondsOfMinute_1 = totalSecondsAbs % 60 | 0;
  };
  protoOf(IncompleteUtcOffset).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof IncompleteUtcOffset) {
      tmp_2 = this.offsetIsNegative_1 == other.offsetIsNegative_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.offsetHours_1 == other.offsetHours_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.offsetMinutesOfHour_1 == other.offsetMinutesOfHour_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.offsetSecondsOfMinute_1 == other.offsetSecondsOfMinute_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteUtcOffset).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.offsetIsNegative_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.offsetHours_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp_0 = tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.offsetMinutesOfHour_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp_1 = tmp_0 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.offsetSecondsOfMinute_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    return tmp_1 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
  };
  protoOf(IncompleteUtcOffset).copy_1tks5_k$ = function () {
    return new IncompleteUtcOffset(this.offsetIsNegative_1, this.offsetHours_1, this.offsetMinutesOfHour_1, this.offsetSecondsOfMinute_1);
  };
  protoOf(IncompleteUtcOffset).toString = function () {
    var tmp0_safe_receiver = this.offsetIsNegative_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = tmp0_safe_receiver ? '-' : '+';
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0 = tmp1_elvis_lhs == null ? ' ' : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.offsetHours_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = this.offsetMinutesOfHour_1;
    var tmp_2 = toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs);
    var tmp4_elvis_lhs = this.offsetSecondsOfMinute_1;
    return tmp_0 + tmp_1 + ':' + tmp_2 + ':' + toString(tmp4_elvis_lhs == null ? '??' : tmp4_elvis_lhs);
  };
  function _get_padding__n2y8rk_5($this) {
    return $this.padding_1;
  }
  function UtcOffsetWholeHoursDirective(padding) {
    var tmp = OffsetFields_getInstance().totalHoursAbs_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(UtcOffsetWholeHoursDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return 'offsetHours(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(UtcOffsetWholeHoursDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetWholeHoursDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetWholeHoursDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function Companion_16() {
    Companion_instance_16 = this;
  }
  protoOf(Companion_16).build_dzztnl_k$ = function (block) {
    var builder = new Builder_3(new AppendableFormatStructure());
    block(builder);
    return new UtcOffsetFormat(builder.build_1k0s4u_k$());
  };
  var Companion_instance_16;
  function Companion_getInstance_20() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function Builder_3(actualBuilder) {
    this.actualBuilder_1 = actualBuilder;
  }
  protoOf(Builder_3).get_actualBuilder_7qypdo_k$ = function () {
    return this.actualBuilder_1;
  };
  protoOf(Builder_3).addFormatStructureForOffset_puuf83_k$ = function (structure) {
    this.actualBuilder_1.add_b6pdwl_k$(structure);
  };
  protoOf(Builder_3).createEmpty_8k9z67_k$ = function () {
    return new Builder_3(new AppendableFormatStructure());
  };
  function UtcOffsetFormat(actualFormat) {
    Companion_getInstance_20();
    AbstractDateTimeFormat.call(this);
    this.actualFormat_1 = actualFormat;
  }
  protoOf(UtcOffsetFormat).get_actualFormat_d0ha3y_k$ = function () {
    return this.actualFormat_1;
  };
  protoOf(UtcOffsetFormat).intermediateFromValue_qn9rt5_k$ = function (value) {
    // Inline function 'kotlin.apply' call
    var this_0 = new IncompleteUtcOffset();
    this_0.populateFrom_543lw3_k$(value);
    return this_0;
  };
  protoOf(UtcOffsetFormat).intermediateFromValue_816pep_k$ = function (value) {
    return this.intermediateFromValue_qn9rt5_k$(value instanceof UtcOffset ? value : THROW_CCE());
  };
  protoOf(UtcOffsetFormat).valueFromIntermediate_4cubyk_k$ = function (intermediate) {
    return intermediate.toUtcOffset_loe12c_k$();
  };
  protoOf(UtcOffsetFormat).valueFromIntermediate_60ox3m_k$ = function (intermediate) {
    return this.valueFromIntermediate_4cubyk_k$(intermediate instanceof IncompleteUtcOffset ? intermediate : THROW_CCE());
  };
  protoOf(UtcOffsetFormat).get_emptyIntermediate_lysuyr_k$ = function () {
    return get_emptyIncompleteUtcOffset();
  };
  function UtcOffsetFieldContainer$_get_offsetIsNegative_$ref_v5gok2() {
    return function (p0) {
      return p0.get_offsetIsNegative_5z1gsb_k$();
    };
  }
  function UtcOffsetFieldContainer$_set_offsetIsNegative_$ref_h7e0jq() {
    return function (p0, p1) {
      p0.set_offsetIsNegative_lg0w0f_k$(p1);
      return Unit_getInstance();
    };
  }
  function _get_sign__ddo3e6($this) {
    return $this.sign_1;
  }
  function OffsetFields$sign$1() {
    var tmp = this;
    var tmp_0 = KMutableProperty1;
    var tmp_1 = UtcOffsetFieldContainer$_get_offsetIsNegative_$ref_v5gok2();
    tmp.isNegative_1 = new PropertyAccessor(getPropertyCallableRef('offsetIsNegative', 1, tmp_0, tmp_1, UtcOffsetFieldContainer$_set_offsetIsNegative_$ref_h7e0jq()));
  }
  protoOf(OffsetFields$sign$1).get_isNegative_i24zqw_k$ = function () {
    return this.isNegative_1;
  };
  protoOf(OffsetFields$sign$1).isZero_ip1qpa_k$ = function (obj) {
    var tmp;
    var tmp_0;
    var tmp0_elvis_lhs = obj.get_offsetHours_yn9exf_k$();
    if ((tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) === 0) {
      var tmp1_elvis_lhs = obj.get_offsetMinutesOfHour_p1w44e_k$();
      tmp_0 = (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) === 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp2_elvis_lhs = obj.get_offsetSecondsOfMinute_mpvmxe_k$();
      tmp = (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) === 0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OffsetFields$sign$1).isZero_yccjay_k$ = function (obj) {
    return this.isZero_ip1qpa_k$((!(obj == null) ? isInterface(obj, UtcOffsetFieldContainer) : false) ? obj : THROW_CCE());
  };
  function UtcOffsetFieldContainer$_get_offsetHours_$ref_elsov2() {
    return function (p0) {
      return p0.get_offsetHours_yn9exf_k$();
    };
  }
  function UtcOffsetFieldContainer$_set_offsetHours_$ref_4i2hci() {
    return function (p0, p1) {
      p0.set_offsetHours_5m57ic_k$(p1);
      return Unit_getInstance();
    };
  }
  function UtcOffsetFieldContainer$_get_offsetMinutesOfHour_$ref_712kt() {
    return function (p0) {
      return p0.get_offsetMinutesOfHour_p1w44e_k$();
    };
  }
  function UtcOffsetFieldContainer$_set_offsetMinutesOfHour_$ref_ka4bon() {
    return function (p0, p1) {
      p0.set_offsetMinutesOfHour_lotc9b_k$(p1);
      return Unit_getInstance();
    };
  }
  function UtcOffsetFieldContainer$_get_offsetSecondsOfMinute_$ref_xrmftp() {
    return function (p0) {
      return p0.get_offsetSecondsOfMinute_mpvmxe_k$();
    };
  }
  function UtcOffsetFieldContainer$_set_offsetSecondsOfMinute_$ref_virwvd() {
    return function (p0, p1) {
      p0.set_offsetSecondsOfMinute_kv6vfj_k$(p1);
      return Unit_getInstance();
    };
  }
  function OffsetFields() {
    OffsetFields_instance = this;
    var tmp = this;
    tmp.sign_1 = new OffsetFields$sign$1();
    var tmp_0 = this;
    var tmp_1 = KMutableProperty1;
    var tmp_2 = UtcOffsetFieldContainer$_get_offsetHours_$ref_elsov2();
    var tmp0_accessor = new PropertyAccessor(getPropertyCallableRef('offsetHours', 1, tmp_1, tmp_2, UtcOffsetFieldContainer$_set_offsetHours_$ref_4i2hci()));
    var tmp1_sign = this.sign_1;
    tmp_0.totalHoursAbs_1 = new UnsignedFieldSpec(tmp0_accessor, 0, 18, VOID, 0, tmp1_sign);
    var tmp_3 = this;
    var tmp_4 = KMutableProperty1;
    var tmp_5 = UtcOffsetFieldContainer$_get_offsetMinutesOfHour_$ref_712kt();
    var tmp0_accessor_0 = new PropertyAccessor(getPropertyCallableRef('offsetMinutesOfHour', 1, tmp_4, tmp_5, UtcOffsetFieldContainer$_set_offsetMinutesOfHour_$ref_ka4bon()));
    var tmp1_sign_0 = this.sign_1;
    tmp_3.minutesOfHour_1 = new UnsignedFieldSpec(tmp0_accessor_0, 0, 59, VOID, 0, tmp1_sign_0);
    var tmp_6 = this;
    var tmp_7 = KMutableProperty1;
    var tmp_8 = UtcOffsetFieldContainer$_get_offsetSecondsOfMinute_$ref_xrmftp();
    var tmp0_accessor_1 = new PropertyAccessor(getPropertyCallableRef('offsetSecondsOfMinute', 1, tmp_7, tmp_8, UtcOffsetFieldContainer$_set_offsetSecondsOfMinute_$ref_virwvd()));
    var tmp1_sign_1 = this.sign_1;
    tmp_6.secondsOfMinute_1 = new UnsignedFieldSpec(tmp0_accessor_1, 0, 59, VOID, 0, tmp1_sign_1);
  }
  protoOf(OffsetFields).get_totalHoursAbs_4tff1e_k$ = function () {
    return this.totalHoursAbs_1;
  };
  protoOf(OffsetFields).get_minutesOfHour_eg2iof_k$ = function () {
    return this.minutesOfHour_1;
  };
  protoOf(OffsetFields).get_secondsOfMinute_kbv2wx_k$ = function () {
    return this.secondsOfMinute_1;
  };
  var OffsetFields_instance;
  function OffsetFields_getInstance() {
    if (OffsetFields_instance == null)
      new OffsetFields();
    return OffsetFields_instance;
  }
  function AbstractWithOffsetBuilder() {
  }
  function _get_padding__n2y8rk_6($this) {
    return $this.padding_1;
  }
  function UtcOffsetMinuteOfHourDirective(padding) {
    var tmp = OffsetFields_getInstance().minutesOfHour_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(UtcOffsetMinuteOfHourDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return this.padding_1.get_ordinal_ip24qg_k$() === 0 ? 'offsetMinutesOfHour()' : 'offsetMinutesOfHour(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(UtcOffsetMinuteOfHourDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetMinuteOfHourDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetMinuteOfHourDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function _get_padding__n2y8rk_7($this) {
    return $this.padding_1;
  }
  function UtcOffsetSecondOfMinuteDirective(padding) {
    var tmp = OffsetFields_getInstance().secondsOfMinute_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(UtcOffsetSecondOfMinuteDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return this.padding_1.get_ordinal_ip24qg_k$() === 0 ? 'offsetSecondsOfMinute()' : 'offsetSecondsOfMinute(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(UtcOffsetSecondOfMinuteDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetSecondOfMinuteDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetSecondOfMinuteDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function isoOffset(_this__u8e3s4, zOnZero, useSeparator, outputMinute, outputSecond) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    // Inline function 'kotlin.require' call
    if (!(outputMinute.compareTo_30rs7w_k$(outputSecond) >= 0)) {
      var message = 'Seconds cannot be included without minutes';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (zOnZero) {
      optional(_this__u8e3s4, 'Z', isoOffset$lambda(outputMinute, useSeparator, outputSecond));
    } else {
      isoOffset$appendIsoOffsetWithoutZOnZero(_this__u8e3s4, outputMinute, useSeparator, outputSecond);
    }
  }
  var WhenToOutput_NEVER_instance;
  var WhenToOutput_IF_NONZERO_instance;
  var WhenToOutput_ALWAYS_instance;
  function values_3() {
    return [WhenToOutput_NEVER_getInstance(), WhenToOutput_IF_NONZERO_getInstance(), WhenToOutput_ALWAYS_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'NEVER':
        return WhenToOutput_NEVER_getInstance();
      case 'IF_NONZERO':
        return WhenToOutput_IF_NONZERO_getInstance();
      case 'ALWAYS':
        return WhenToOutput_ALWAYS_getInstance();
      default:
        WhenToOutput_initEntries();
        THROW_IAE('No enum constant kotlinx.datetime.format.WhenToOutput.' + value);
        break;
    }
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var WhenToOutput_entriesInitialized;
  function WhenToOutput_initEntries() {
    if (WhenToOutput_entriesInitialized)
      return Unit_getInstance();
    WhenToOutput_entriesInitialized = true;
    WhenToOutput_NEVER_instance = new WhenToOutput('NEVER', 0);
    WhenToOutput_IF_NONZERO_instance = new WhenToOutput('IF_NONZERO', 1);
    WhenToOutput_ALWAYS_instance = new WhenToOutput('ALWAYS', 2);
  }
  var $ENTRIES_3;
  function WhenToOutput(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function outputIfNeeded(_this__u8e3s4, whenToOutput, format) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    switch (whenToOutput.get_ordinal_ip24qg_k$()) {
      case 0:
        break;
      case 1:
        optional(_this__u8e3s4, VOID, outputIfNeeded$lambda(format));
        break;
      case 2:
        format(_this__u8e3s4);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
  }
  function isoOffset$appendIsoOffsetWithoutZOnZero(_this__u8e3s4, $outputMinute, $useSeparator, $outputSecond) {
    _this__u8e3s4.offsetHours$default_2ga4wd_k$();
    outputIfNeeded(_this__u8e3s4, $outputMinute, isoOffset$appendIsoOffsetWithoutZOnZero$lambda($useSeparator, $outputSecond));
  }
  function ISO_OFFSET$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_getInstance_20();
    return tmp.build_dzztnl_k$(ISO_OFFSET$delegate$lambda$lambda);
  }
  function ISO_OFFSET$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = [ISO_OFFSET$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_OFFSET$delegate$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$alternativeParsing.chars_pe6iqb_k$('z');
    return Unit_getInstance();
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    optional($this$alternativeParsing, 'Z', ISO_OFFSET$delegate$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.offsetHours$default_2ga4wd_k$();
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.offsetMinutesOfHour$default_3itngo_k$();
    optional($this$optional, VOID, ISO_OFFSET$delegate$lambda$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.offsetSecondsOfMinute$default_fqi77c_k$();
    return Unit_getInstance();
  }
  function _get_ISO_OFFSET_$ref_70d0nn() {
    return function () {
      return get_ISO_OFFSET();
    };
  }
  function ISO_OFFSET_BASIC$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_getInstance_20();
    return tmp.build_dzztnl_k$(ISO_OFFSET_BASIC$delegate$lambda$lambda);
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = [ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$alternativeParsing.chars_pe6iqb_k$('z');
    return Unit_getInstance();
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    optional($this$alternativeParsing, 'Z', ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.offsetHours$default_2ga4wd_k$();
    optional($this$optional, VOID, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.offsetMinutesOfHour$default_3itngo_k$();
    optional($this$optional, VOID, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.offsetSecondsOfMinute$default_fqi77c_k$();
    return Unit_getInstance();
  }
  function _get_ISO_OFFSET_BASIC_$ref_lasmde() {
    return function () {
      return get_ISO_OFFSET_BASIC();
    };
  }
  function FOUR_DIGIT_OFFSET$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_getInstance_20();
    return tmp.build_dzztnl_k$(FOUR_DIGIT_OFFSET$delegate$lambda$lambda);
  }
  function FOUR_DIGIT_OFFSET$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$build.offsetHours$default_2ga4wd_k$();
    $this$build.offsetMinutesOfHour$default_3itngo_k$();
    return Unit_getInstance();
  }
  function _get_FOUR_DIGIT_OFFSET_$ref_30p6v2() {
    return function () {
      return get_FOUR_DIGIT_OFFSET();
    };
  }
  function isoOffset$lambda$lambda($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    char($this$alternativeParsing, _Char___init__impl__6a9atx(122));
    return Unit_getInstance();
  }
  function isoOffset$lambda$lambda_0($outputMinute, $useSeparator, $outputSecond) {
    return function ($this$alternativeParsing) {
      isoOffset$appendIsoOffsetWithoutZOnZero($this$alternativeParsing, $outputMinute, $useSeparator, $outputSecond);
      return Unit_getInstance();
    };
  }
  function isoOffset$lambda($outputMinute, $useSeparator, $outputSecond) {
    return function ($this$optional) {
      var tmp = [isoOffset$lambda$lambda];
      alternativeParsing($this$optional, tmp, isoOffset$lambda$lambda_0($outputMinute, $useSeparator, $outputSecond));
      return Unit_getInstance();
    };
  }
  function outputIfNeeded$lambda($format) {
    return function ($this$optional) {
      $format($this$optional);
      return Unit_getInstance();
    };
  }
  function isoOffset$appendIsoOffsetWithoutZOnZero$lambda$lambda($useSeparator) {
    return function ($this$outputIfNeeded) {
      var tmp;
      if ($useSeparator) {
        char($this$outputIfNeeded, _Char___init__impl__6a9atx(58));
        tmp = Unit_getInstance();
      }
      $this$outputIfNeeded.offsetSecondsOfMinute$default_fqi77c_k$();
      return Unit_getInstance();
    };
  }
  function isoOffset$appendIsoOffsetWithoutZOnZero$lambda($useSeparator, $outputSecond) {
    return function ($this$outputIfNeeded) {
      var tmp;
      if ($useSeparator) {
        char($this$outputIfNeeded, _Char___init__impl__6a9atx(58));
        tmp = Unit_getInstance();
      }
      $this$outputIfNeeded.offsetMinutesOfHour$default_3itngo_k$();
      outputIfNeeded($this$outputIfNeeded, $outputSecond, isoOffset$appendIsoOffsetWithoutZOnZero$lambda$lambda($useSeparator));
      return Unit_getInstance();
    };
  }
  function WhenToOutput_NEVER_getInstance() {
    WhenToOutput_initEntries();
    return WhenToOutput_NEVER_instance;
  }
  function WhenToOutput_IF_NONZERO_getInstance() {
    WhenToOutput_initEntries();
    return WhenToOutput_IF_NONZERO_instance;
  }
  function WhenToOutput_ALWAYS_getInstance() {
    WhenToOutput_initEntries();
    return WhenToOutput_ALWAYS_instance;
  }
  var properties_initialized_UtcOffsetFormat_kt_6y9jku;
  function _init_properties_UtcOffsetFormat_kt__9r9ddw() {
    if (!properties_initialized_UtcOffsetFormat_kt_6y9jku) {
      properties_initialized_UtcOffsetFormat_kt_6y9jku = true;
      ISO_OFFSET$delegate = lazy(ISO_OFFSET$delegate$lambda);
      ISO_OFFSET_BASIC$delegate = lazy(ISO_OFFSET_BASIC$delegate$lambda);
      FOUR_DIGIT_OFFSET$delegate = lazy(FOUR_DIGIT_OFFSET$delegate$lambda);
      emptyIncompleteUtcOffset = new IncompleteUtcOffset();
    }
  }
  function get_emptyIncompleteYearMonth() {
    _init_properties_YearMonthFormat_kt__i0mmu0();
    return emptyIncompleteYearMonth;
  }
  var emptyIncompleteYearMonth;
  function get_ISO_YEAR_MONTH() {
    _init_properties_YearMonthFormat_kt__i0mmu0();
    var tmp0 = ISO_YEAR_MONTH$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ISO_YEAR_MONTH', 0, tmp, _get_ISO_YEAR_MONTH_$ref_y3tv9a(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var ISO_YEAR_MONTH$delegate;
  function MonthNames_init_$Init$(january, february, march, april, may, june, july, august, september, october, november, december, $this) {
    MonthNames.call($this, listOf_0([january, february, march, april, may, june, july, august, september, october, november, december]));
    return $this;
  }
  function MonthNames_init_$Create$(january, february, march, april, may, june, july, august, september, october, november, december) {
    return MonthNames_init_$Init$(january, february, march, april, may, june, july, august, september, october, november, december, objectCreate(protoOf(MonthNames)));
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.ENGLISH_FULL_1 = new MonthNames(listOf_0(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']));
    this.ENGLISH_ABBREVIATED_1 = new MonthNames(listOf_0(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']));
  }
  protoOf(Companion_17).get_ENGLISH_FULL_w9oxw9_k$ = function () {
    return this.ENGLISH_FULL_1;
  };
  protoOf(Companion_17).get_ENGLISH_ABBREVIATED_cfvc81_k$ = function () {
    return this.ENGLISH_ABBREVIATED_1;
  };
  var Companion_instance_17;
  function Companion_getInstance_21() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function String$toString$ref_0() {
    var l = function (p0) {
      return toString(p0);
    };
    l.callableName = 'toString';
    return l;
  }
  function MonthNames(names) {
    Companion_getInstance_21();
    this.names_1 = names;
    // Inline function 'kotlin.require' call
    if (!(this.names_1.get_size_woubt6_k$() === 12)) {
      var message = 'Month names must contain exactly 12 elements';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var progression = get_indices(this.names_1);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ix = element;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = this.names_1.get_c1px32_k$(ix);
        // Inline function 'kotlin.require' call
        if (!(charSequenceLength(this_0) > 0)) {
          var message_0 = 'A month name can not be empty';
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < ix)
          do {
            var ix2 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.require' call
            if (!!(this.names_1.get_c1px32_k$(ix) === this.names_1.get_c1px32_k$(ix2))) {
              var message_1 = "Month names must be unique, but '" + this.names_1.get_c1px32_k$(ix) + "' was repeated";
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
          }
           while (inductionVariable_0 < ix);
      }
       while (!(element === last));
  }
  protoOf(MonthNames).get_names_ivn21r_k$ = function () {
    return this.names_1;
  };
  protoOf(MonthNames).toString = function () {
    return joinToString(this.names_1, ', ', 'MonthNames(', ')', VOID, VOID, String$toString$ref_0());
  };
  protoOf(MonthNames).equals = function (other) {
    var tmp;
    if (other instanceof MonthNames) {
      tmp = equals(this.names_1, other.names_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthNames).hashCode = function () {
    return hashCode(this.names_1);
  };
  function YearMonthFieldContainer() {
  }
  function IncompleteYearMonth(year, monthNumber) {
    year = year === VOID ? null : year;
    monthNumber = monthNumber === VOID ? null : monthNumber;
    this.year_1 = year;
    this.monthNumber_1 = monthNumber;
  }
  protoOf(IncompleteYearMonth).set_year_8yykwv_k$ = function (_set____db54di) {
    this.year_1 = _set____db54di;
  };
  protoOf(IncompleteYearMonth).get_year_woy26e_k$ = function () {
    return this.year_1;
  };
  protoOf(IncompleteYearMonth).set_monthNumber_nufdv5_k$ = function (_set____db54di) {
    this.monthNumber_1 = _set____db54di;
  };
  protoOf(IncompleteYearMonth).get_monthNumber_nb47ls_k$ = function () {
    return this.monthNumber_1;
  };
  protoOf(IncompleteYearMonth).toYearMonth_ii3sag_k$ = function () {
    var year = requireParsedField(this.year_1, 'year');
    var month = requireParsedField(this.monthNumber_1, 'monthNumber');
    return new YearMonth(year, month);
  };
  protoOf(IncompleteYearMonth).populateFrom_4c7hpb_k$ = function (yearMonth) {
    this.year_1 = yearMonth.get_year_woy26e_k$();
    this.monthNumber_1 = get_number(yearMonth.get_month_ivc8d3_k$());
  };
  protoOf(IncompleteYearMonth).copy_1tks5_k$ = function () {
    return new IncompleteYearMonth(this.year_1, this.monthNumber_1);
  };
  protoOf(IncompleteYearMonth).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof IncompleteYearMonth) {
      tmp_0 = this.year_1 == other.year_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.monthNumber_1 == other.monthNumber_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteYearMonth).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.year_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.monthNumber_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
  };
  protoOf(IncompleteYearMonth).toString = function () {
    var tmp0_elvis_lhs = this.year_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.monthNumber_1;
    return tmp + '-' + toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
  };
  function requireParsedField(field, name) {
    _init_properties_YearMonthFormat_kt__i0mmu0();
    if (field == null) {
      throw DateTimeFormatException_init_$Create$_0('Can not create a ' + name + ' from the given input: the field ' + name + ' is missing');
    }
    return field;
  }
  function AbstractWithYearMonthBuilder() {
  }
  function Companion_18() {
    Companion_instance_18 = this;
  }
  protoOf(Companion_18).build_xjwtmz_k$ = function (block) {
    var builder = new Builder_4(new AppendableFormatStructure());
    block(builder);
    return new YearMonthFormat(builder.build_1k0s4u_k$());
  };
  var Companion_instance_18;
  function Companion_getInstance_22() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function Builder_4(actualBuilder) {
    this.actualBuilder_1 = actualBuilder;
  }
  protoOf(Builder_4).get_actualBuilder_7qypdo_k$ = function () {
    return this.actualBuilder_1;
  };
  protoOf(Builder_4).addFormatStructureForYearMonth_t4rp63_k$ = function (structure) {
    return this.actualBuilder_1.add_b6pdwl_k$(structure);
  };
  protoOf(Builder_4).createEmpty_8k9z67_k$ = function () {
    return new Builder_4(new AppendableFormatStructure());
  };
  function YearMonthFormat(actualFormat) {
    Companion_getInstance_22();
    AbstractDateTimeFormat.call(this);
    this.actualFormat_1 = actualFormat;
  }
  protoOf(YearMonthFormat).get_actualFormat_d0ha3y_k$ = function () {
    return this.actualFormat_1;
  };
  protoOf(YearMonthFormat).intermediateFromValue_shmmq1_k$ = function (value) {
    // Inline function 'kotlin.apply' call
    var this_0 = new IncompleteYearMonth();
    this_0.populateFrom_4c7hpb_k$(value);
    return this_0;
  };
  protoOf(YearMonthFormat).intermediateFromValue_816pep_k$ = function (value) {
    return this.intermediateFromValue_shmmq1_k$(value instanceof YearMonth ? value : THROW_CCE());
  };
  protoOf(YearMonthFormat).valueFromIntermediate_t43gy0_k$ = function (intermediate) {
    return intermediate.toYearMonth_ii3sag_k$();
  };
  protoOf(YearMonthFormat).valueFromIntermediate_60ox3m_k$ = function (intermediate) {
    return this.valueFromIntermediate_t43gy0_k$(intermediate instanceof IncompleteYearMonth ? intermediate : THROW_CCE());
  };
  protoOf(YearMonthFormat).get_emptyIntermediate_lysuyr_k$ = function () {
    return get_emptyIncompleteYearMonth();
  };
  function _get_padding__n2y8rk_8($this) {
    return $this.padding_1;
  }
  function _get_isYearOfEra__mibkwr($this) {
    return $this.isYearOfEra_1;
  }
  function YearDirective(padding, isYearOfEra) {
    isYearOfEra = isYearOfEra === VOID ? false : isYearOfEra;
    var tmp = YearMonthFields_getInstance().year_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 4 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 4 : null;
    SignedIntFieldFormatDirective.call(this, tmp, tmp_0, null, tmp$ret$1, 4);
    this.padding_1 = padding;
    this.isYearOfEra_1 = isYearOfEra;
  }
  protoOf(YearDirective).get_builderRepresentation_hh53bz_k$ = function () {
    // Inline function 'kotlin.let' call
    var it = this.padding_1.get_ordinal_ip24qg_k$() === 1 ? 'year()' : 'year(' + toKotlinCode(this.padding_1) + ')';
    var tmp;
    if (this.isYearOfEra_1) {
      tmp = it + ' /** TODO: the original format had an `y` directive, so the behavior is different on years earlier than 1 AD. See the [kotlinx.datetime.format.byUnicodePattern] documentation for details. */';
    } else {
      tmp = it;
    }
    return tmp;
  };
  protoOf(YearDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof YearDirective) {
      tmp_0 = this.padding_1.equals(other.padding_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.isYearOfEra_1 === other.isYearOfEra_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(YearDirective).hashCode = function () {
    return imul(this.padding_1.hashCode(), 31) + getBooleanHashCode(this.isYearOfEra_1) | 0;
  };
  function _get_isYearOfEra__mibkwr_0($this) {
    return $this.isYearOfEra_1;
  }
  function ReducedYearDirective(base, isYearOfEra) {
    isYearOfEra = isYearOfEra === VOID ? false : isYearOfEra;
    ReducedIntFieldDirective.call(this, YearMonthFields_getInstance().year_1, 2, base);
    this.base_2 = base;
    this.isYearOfEra_1 = isYearOfEra;
  }
  protoOf(ReducedYearDirective).get_base_wojaxm_k$ = function () {
    return this.base_2;
  };
  protoOf(ReducedYearDirective).get_builderRepresentation_hh53bz_k$ = function () {
    // Inline function 'kotlin.let' call
    var it = 'yearTwoDigits(' + this.base_2 + ')';
    var tmp;
    if (this.isYearOfEra_1) {
      tmp = it + ' /** TODO: the original format had an `y` directive, so the behavior is different on years earlier than 1 AD. See the [kotlinx.datetime.format.byUnicodePattern] documentation for details. */';
    } else {
      tmp = it;
    }
    return tmp;
  };
  protoOf(ReducedYearDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ReducedYearDirective) {
      tmp_0 = this.base_2 === other.base_2;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.isYearOfEra_1 === other.isYearOfEra_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ReducedYearDirective).hashCode = function () {
    return imul(this.base_2, 31) + getBooleanHashCode(this.isYearOfEra_1) | 0;
  };
  function _get_padding__n2y8rk_9($this) {
    return $this.padding_1;
  }
  function MonthDirective(padding) {
    var tmp = YearMonthFields_getInstance().month_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.padding_1 = padding;
  }
  protoOf(MonthDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return this.padding_1.get_ordinal_ip24qg_k$() === 1 ? 'monthNumber()' : 'monthNumber(' + toKotlinCode(this.padding_1) + ')';
  };
  protoOf(MonthDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthDirective) {
      tmp = this.padding_1.equals(other.padding_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthDirective).hashCode = function () {
    return this.padding_1.hashCode();
  };
  function _get_names__dwg6t3_0($this) {
    return $this.names_1;
  }
  function MonthNameDirective(names) {
    NamedUnsignedIntFieldFormatDirective.call(this, YearMonthFields_getInstance().month_1, names.names_1, 'monthName');
    this.names_1 = names;
  }
  protoOf(MonthNameDirective).get_builderRepresentation_hh53bz_k$ = function () {
    return 'monthName(' + toKotlinCode_1(this.names_1) + ')';
  };
  protoOf(MonthNameDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthNameDirective) {
      tmp = equals(this.names_1.names_1, other.names_1.names_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthNameDirective).hashCode = function () {
    return hashCode(this.names_1.names_1);
  };
  function YearMonthFieldContainer$_get_year_$ref_7j3zdj() {
    return function (p0) {
      return p0.get_year_woy26e_k$();
    };
  }
  function YearMonthFieldContainer$_set_year_$ref_kc0aub() {
    return function (p0, p1) {
      p0.set_year_8yykwv_k$(p1);
      return Unit_getInstance();
    };
  }
  function YearMonthFieldContainer$_get_monthNumber_$ref_pn0wu5() {
    return function (p0) {
      return p0.get_monthNumber_nb47ls_k$();
    };
  }
  function YearMonthFieldContainer$_set_monthNumber_$ref_fjapbl() {
    return function (p0, p1) {
      p0.set_monthNumber_nufdv5_k$(p1);
      return Unit_getInstance();
    };
  }
  function YearMonthFields() {
    YearMonthFields_instance = this;
    var tmp = this;
    var tmp_0 = KMutableProperty1;
    var tmp_1 = YearMonthFieldContainer$_get_year_$ref_7j3zdj();
    tmp.year_1 = new GenericFieldSpec(new PropertyAccessor(getPropertyCallableRef('year', 1, tmp_0, tmp_1, YearMonthFieldContainer$_set_year_$ref_kc0aub())));
    var tmp_2 = this;
    var tmp_3 = KMutableProperty1;
    var tmp_4 = YearMonthFieldContainer$_get_monthNumber_$ref_pn0wu5();
    tmp_2.month_1 = new UnsignedFieldSpec(new PropertyAccessor(getPropertyCallableRef('monthNumber', 1, tmp_3, tmp_4, YearMonthFieldContainer$_set_monthNumber_$ref_fjapbl())), 1, 12);
  }
  protoOf(YearMonthFields).get_year_woy26e_k$ = function () {
    return this.year_1;
  };
  protoOf(YearMonthFields).get_month_ivc8d3_k$ = function () {
    return this.month_1;
  };
  var YearMonthFields_instance;
  function YearMonthFields_getInstance() {
    if (YearMonthFields_instance == null)
      new YearMonthFields();
    return YearMonthFields_instance;
  }
  function toKotlinCode_1(_this__u8e3s4) {
    _init_properties_YearMonthFormat_kt__i0mmu0();
    var tmp0_subject = _this__u8e3s4.names_1;
    var tmp;
    if (equals(tmp0_subject, Companion_getInstance_21().ENGLISH_FULL_1.names_1)) {
      Companion_getInstance_21();
      tmp = 'MonthNames.' + 'ENGLISH_FULL';
    } else if (equals(tmp0_subject, Companion_getInstance_21().ENGLISH_ABBREVIATED_1.names_1)) {
      Companion_getInstance_21();
      tmp = 'MonthNames.' + 'ENGLISH_ABBREVIATED';
    } else {
      tmp = joinToString(_this__u8e3s4.names_1, ', ', 'MonthNames(', ')', VOID, VOID, toKotlinCode$ref_0());
    }
    return tmp;
  }
  function ISO_YEAR_MONTH$delegate$lambda() {
    _init_properties_YearMonthFormat_kt__i0mmu0();
    var tmp = Companion_getInstance_22();
    return tmp.build_xjwtmz_k$(ISO_YEAR_MONTH$delegate$lambda$lambda);
  }
  function ISO_YEAR_MONTH$delegate$lambda$lambda($this$build) {
    _init_properties_YearMonthFormat_kt__i0mmu0();
    $this$build.year$default_9maba2_k$();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.monthNumber$default_7baaey_k$();
    return Unit_getInstance();
  }
  function _get_ISO_YEAR_MONTH_$ref_y3tv9a() {
    return function () {
      return get_ISO_YEAR_MONTH();
    };
  }
  function toKotlinCode$ref_0() {
    var l = function (p0) {
      return toKotlinCode_3(p0);
    };
    l.callableName = 'toKotlinCode';
    return l;
  }
  var properties_initialized_YearMonthFormat_kt_fp0mk6;
  function _init_properties_YearMonthFormat_kt__i0mmu0() {
    if (!properties_initialized_YearMonthFormat_kt_fp0mk6) {
      properties_initialized_YearMonthFormat_kt_fp0mk6 = true;
      emptyIncompleteYearMonth = new IncompleteYearMonth();
      ISO_YEAR_MONTH$delegate = lazy(ISO_YEAR_MONTH$delegate$lambda);
    }
  }
  function monthLength(_this__u8e3s4, isLeapYear) {
    switch (_this__u8e3s4) {
      case 2:
        return isLeapYear ? 29 : 28;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      default:
        return 31;
    }
  }
  function isLeapYear(year) {
    var prolepticYear = fromInt(year);
    var tmp;
    if (equalsLong(bitwiseAnd(prolepticYear, new Long(3, 0)), new Long(0, 0))) {
      var tmp_0;
      // Inline function 'kotlin.Long.rem' call
      var tmp$ret$0 = modulo(prolepticYear, fromInt(100));
      if (!equalsLong(tmp$ret$0, new Long(0, 0))) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.Long.rem' call
        var tmp$ret$1 = modulo(prolepticYear, fromInt(400));
        tmp_0 = equalsLong(tmp$ret$1, new Long(0, 0));
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function _get_list__d9tsa5($this) {
    return $this.list_1;
  }
  function AppendableFormatStructure() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.list_1 = ArrayList_init_$Create$_0();
  }
  protoOf(AppendableFormatStructure).build_1k0s4u_k$ = function () {
    return new ConcatenatedFormatStructure(this.list_1);
  };
  protoOf(AppendableFormatStructure).add_b6pdwl_k$ = function (format) {
    if (isInterface(format, NonConcatenatedFormatStructure))
      this.list_1.add_utx5q5_k$(format);
    else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = format.get_formats_9xs0wd_k$().iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          this.list_1.add_utx5q5_k$(element);
        }
      } else {
        noWhenBranchMatchedException();
      }
    }
  };
  function FieldFormatDirective() {
  }
  function _get_minDigits__4wf98n_0($this) {
    return $this.minDigits_1;
  }
  function _get_spacePadding__1yncsg($this) {
    return $this.spacePadding_1;
  }
  function _get_maxDigits__p8x9uv_0($this) {
    return $this.maxDigits_1;
  }
  function Accessor$getterNotNull$ref_0(p0) {
    var l = function (_this__u8e3s4) {
      return p0.getterNotNull_rjcshh_k$(_this__u8e3s4);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function UnsignedIntFieldFormatDirective(field, minDigits, spacePadding) {
    this.field_1 = field;
    this.minDigits_1 = minDigits;
    this.spacePadding_1 = spacePadding;
    this.maxDigits_1 = this.field_1.get_maxDigits_8axv7j_k$();
    // Inline function 'kotlin.require' call
    if (!(this.minDigits_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.minDigits_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.maxDigits_1 >= this.minDigits_1)) {
      var message_0 = 'The maximum number of digits (' + this.maxDigits_1 + ') is less than the minimum number of digits (' + this.minDigits_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (!(this.spacePadding_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.spacePadding_1 > this.minDigits_1)) {
        var message_1 = 'The space padding (' + this.spacePadding_1 + ') should be more than the minimum number of digits (' + this.minDigits_1 + ')';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  protoOf(UnsignedIntFieldFormatDirective).get_field_irdnf5_k$ = function () {
    return this.field_1;
  };
  protoOf(UnsignedIntFieldFormatDirective).formatter_tykoui_k$ = function () {
    var formatter = new UnsignedIntFormatterStructure(Accessor$getterNotNull$ref_0(this.field_1.get_accessor_3q8qa8_k$()), this.minDigits_1);
    return !(this.spacePadding_1 == null) ? new SpacePaddedFormatter(formatter, this.spacePadding_1) : formatter;
  };
  protoOf(UnsignedIntFieldFormatDirective).parser_ggn3z5_k$ = function () {
    return spaceAndZeroPaddedUnsignedInt(this.minDigits_1, this.maxDigits_1, this.spacePadding_1, this.field_1.get_accessor_3q8qa8_k$(), this.field_1.get_name_woqyms_k$());
  };
  function _get_values__tel787($this) {
    return $this.values_1;
  }
  function _get_name__das4rk($this) {
    return $this.name_1;
  }
  function getStringValue($this, target) {
    // Inline function 'kotlin.let' call
    var it = $this.field_1.get_accessor_3q8qa8_k$().getterNotNull_rjcshh_k$(target);
    var tmp0_elvis_lhs = getOrNull($this.values_1, it - $this.field_1.get_minValue_ggd348_k$() | 0);
    return tmp0_elvis_lhs == null ? 'The value ' + it + ' of ' + $this.field_1.get_name_woqyms_k$() + ' does not have a corresponding string representation' : tmp0_elvis_lhs;
  }
  function AssignableString($outer) {
    this.$this_1 = $outer;
  }
  protoOf(AssignableString).trySetWithoutReassigning_nj495f_k$ = function (container, newValue) {
    var tmp0_safe_receiver = this.$this_1.field_1.get_accessor_3q8qa8_k$().trySetWithoutReassigning_itlg4a_k$(container, this.$this_1.values_1.indexOf_si1fv9_k$(newValue) + this.$this_1.field_1.get_minValue_ggd348_k$() | 0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.$this_1.values_1.get_c1px32_k$(tmp0_safe_receiver - this.$this_1.field_1.get_minValue_ggd348_k$() | 0);
    }
    return tmp;
  };
  protoOf(AssignableString).trySetWithoutReassigning_itlg4a_k$ = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.trySetWithoutReassigning_nj495f_k$(tmp, (!(newValue == null) ? typeof newValue === 'string' : false) ? newValue : THROW_CCE());
  };
  protoOf(AssignableString).get_name_woqyms_k$ = function () {
    return this.$this_1.name_1;
  };
  function NamedUnsignedIntFieldFormatDirective$getStringValue$ref(p0) {
    var l = function (_this__u8e3s4) {
      var tmp0 = p0;
      return getStringValue(tmp0, _this__u8e3s4);
    };
    l.callableName = 'getStringValue';
    return l;
  }
  function NamedUnsignedIntFieldFormatDirective(field, values, name) {
    this.field_1 = field;
    this.values_1 = values;
    this.name_1 = name;
    // Inline function 'kotlin.require' call
    if (!(this.values_1.get_size_woubt6_k$() === ((this.field_1.get_maxValue_p78wqy_k$() - this.field_1.get_minValue_ggd348_k$() | 0) + 1 | 0))) {
      var message = 'The number of values (' + this.values_1.get_size_woubt6_k$() + ') in ' + toString(this.values_1) + ' does not match the range of the field (' + ((this.field_1.get_maxValue_p78wqy_k$() - this.field_1.get_minValue_ggd348_k$() | 0) + 1 | 0) + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(NamedUnsignedIntFieldFormatDirective).get_field_irdnf5_k$ = function () {
    return this.field_1;
  };
  protoOf(NamedUnsignedIntFieldFormatDirective).formatter_tykoui_k$ = function () {
    return new StringFormatterStructure(NamedUnsignedIntFieldFormatDirective$getStringValue$ref(this));
  };
  protoOf(NamedUnsignedIntFieldFormatDirective).parser_ggn3z5_k$ = function () {
    return new ParserStructure(listOf(new StringSetParserOperation(this.values_1, new AssignableString(this), 'one of ' + toString(this.values_1) + ' for ' + this.name_1)), emptyList());
  };
  function _get_mapping__wnkm4d($this) {
    return $this.mapping_1;
  }
  function _get_name__das4rk_0($this) {
    return $this.name_1;
  }
  function _get_reverseMapping__yurbb3($this) {
    return $this.reverseMapping_1;
  }
  function getStringValue_0($this, target) {
    // Inline function 'kotlin.let' call
    var it = $this.field_1.get_accessor_3q8qa8_k$().getterNotNull_rjcshh_k$(target);
    var tmp0_elvis_lhs = $this.mapping_1.get_wei43m_k$($this.field_1.get_accessor_3q8qa8_k$().getterNotNull_rjcshh_k$(target));
    return tmp0_elvis_lhs == null ? 'The value ' + toString_1(it) + ' of ' + $this.field_1.get_name_woqyms_k$() + ' does not have a corresponding string representation' : tmp0_elvis_lhs;
  }
  function AssignableString_0($outer) {
    this.$this_1 = $outer;
  }
  protoOf(AssignableString_0).trySetWithoutReassigning_nj495f_k$ = function (container, newValue) {
    var tmp0_safe_receiver = this.$this_1.field_1.get_accessor_3q8qa8_k$().trySetWithoutReassigning_itlg4a_k$(container, ensureNotNull(this.$this_1.reverseMapping_1.get_wei43m_k$(newValue)));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.$this_1.mapping_1.get_wei43m_k$(tmp0_safe_receiver);
    }
    return tmp;
  };
  protoOf(AssignableString_0).trySetWithoutReassigning_itlg4a_k$ = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.trySetWithoutReassigning_nj495f_k$(tmp, (!(newValue == null) ? typeof newValue === 'string' : false) ? newValue : THROW_CCE());
  };
  protoOf(AssignableString_0).get_name_woqyms_k$ = function () {
    return this.$this_1.name_1;
  };
  function NamedEnumIntFieldFormatDirective$getStringValue$ref(p0) {
    var l = function (_this__u8e3s4) {
      var tmp0 = p0;
      return getStringValue_0(tmp0, _this__u8e3s4);
    };
    l.callableName = 'getStringValue';
    return l;
  }
  function NamedEnumIntFieldFormatDirective(field, mapping, name) {
    this.field_1 = field;
    this.mapping_1 = mapping;
    this.name_1 = name;
    var tmp = this;
    // Inline function 'kotlin.collections.associate' call
    var this_0 = this.mapping_1.get_entries_p20ztl_k$();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(element.get_value_j01efc_k$(), element.get_key_18j28a_k$());
      destination.put_4fpzoq_k$(pair.get_first_irdx8n_k$(), pair.get_second_jf7fjx_k$());
    }
    tmp.reverseMapping_1 = destination;
  }
  protoOf(NamedEnumIntFieldFormatDirective).get_field_irdnf5_k$ = function () {
    return this.field_1;
  };
  protoOf(NamedEnumIntFieldFormatDirective).formatter_tykoui_k$ = function () {
    return new StringFormatterStructure(NamedEnumIntFieldFormatDirective$getStringValue$ref(this));
  };
  protoOf(NamedEnumIntFieldFormatDirective).parser_ggn3z5_k$ = function () {
    return new ParserStructure(listOf(new StringSetParserOperation(this.mapping_1.get_values_ksazhn_k$(), new AssignableString_0(this), 'one of ' + toString(this.mapping_1.get_values_ksazhn_k$()) + ' for ' + this.name_1)), emptyList());
  };
  function _get_minDigits__4wf98n_1($this) {
    return $this.minDigits_1;
  }
  function _get_maxDigits__p8x9uv_1($this) {
    return $this.maxDigits_1;
  }
  function _get_zerosToAdd__m3gu6o($this) {
    return $this.zerosToAdd_1;
  }
  function Accessor$getterNotNull$ref_1(p0) {
    var l = function (_this__u8e3s4) {
      return p0.getterNotNull_rjcshh_k$(_this__u8e3s4);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function DecimalFractionFieldFormatDirective(field, minDigits, maxDigits, zerosToAdd) {
    this.field_1 = field;
    this.minDigits_1 = minDigits;
    this.maxDigits_1 = maxDigits;
    this.zerosToAdd_1 = zerosToAdd;
  }
  protoOf(DecimalFractionFieldFormatDirective).get_field_irdnf5_k$ = function () {
    return this.field_1;
  };
  protoOf(DecimalFractionFieldFormatDirective).formatter_tykoui_k$ = function () {
    return new DecimalFractionFormatterStructure(Accessor$getterNotNull$ref_1(this.field_1.get_accessor_3q8qa8_k$()), this.minDigits_1, this.maxDigits_1, this.zerosToAdd_1);
  };
  protoOf(DecimalFractionFieldFormatDirective).parser_ggn3z5_k$ = function () {
    return new ParserStructure(listOf(new NumberSpanParserOperation(listOf(new FractionPartConsumer(this.minDigits_1, this.maxDigits_1, this.field_1.get_accessor_3q8qa8_k$(), this.field_1.get_name_woqyms_k$())))), emptyList());
  };
  function _get_minDigits__4wf98n_2($this) {
    return $this.minDigits_1;
  }
  function _get_maxDigits__p8x9uv_2($this) {
    return $this.maxDigits_1;
  }
  function _get_spacePadding__1yncsg_0($this) {
    return $this.spacePadding_1;
  }
  function _get_outputPlusOnExceededWidth__7vsxp4($this) {
    return $this.outputPlusOnExceededWidth_1;
  }
  function Accessor$getterNotNull$ref_2(p0) {
    var l = function (_this__u8e3s4) {
      return p0.getterNotNull_rjcshh_k$(_this__u8e3s4);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function SignedIntFieldFormatDirective(field, minDigits, maxDigits, spacePadding, outputPlusOnExceededWidth) {
    this.field_1 = field;
    this.minDigits_1 = minDigits;
    this.maxDigits_1 = maxDigits;
    this.spacePadding_1 = spacePadding;
    this.outputPlusOnExceededWidth_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.minDigits_1 == null || this.minDigits_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.minDigits_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.maxDigits_1 == null || this.minDigits_1 == null || this.maxDigits_1 >= this.minDigits_1)) {
      var message_0 = 'The maximum number of digits (' + this.maxDigits_1 + ') is less than the minimum number of digits (' + this.minDigits_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(SignedIntFieldFormatDirective).get_field_irdnf5_k$ = function () {
    return this.field_1;
  };
  protoOf(SignedIntFieldFormatDirective).formatter_tykoui_k$ = function () {
    var tmp = Accessor$getterNotNull$ref_2(this.field_1.get_accessor_3q8qa8_k$());
    var tmp0_elvis_lhs = this.minDigits_1;
    var formatter = new SignedIntFormatterStructure(tmp, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs, this.outputPlusOnExceededWidth_1);
    return !(this.spacePadding_1 == null) ? new SpacePaddedFormatter(formatter, this.spacePadding_1) : formatter;
  };
  protoOf(SignedIntFieldFormatDirective).parser_ggn3z5_k$ = function () {
    return SignedIntParser(this.minDigits_1, this.maxDigits_1, this.spacePadding_1, this.field_1.get_accessor_3q8qa8_k$(), this.field_1.get_name_woqyms_k$(), this.outputPlusOnExceededWidth_1);
  };
  function _get_digits__5rvfvf($this) {
    return $this.digits_1;
  }
  function _get_base__d46q3e($this) {
    return $this.base_1;
  }
  function Accessor$getterNotNull$ref_3(p0) {
    var l = function (_this__u8e3s4) {
      return p0.getterNotNull_rjcshh_k$(_this__u8e3s4);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function ReducedIntFieldDirective(field, digits, base) {
    this.field_1 = field;
    this.digits_1 = digits;
    this.base_1 = base;
  }
  protoOf(ReducedIntFieldDirective).get_field_irdnf5_k$ = function () {
    return this.field_1;
  };
  protoOf(ReducedIntFieldDirective).formatter_tykoui_k$ = function () {
    return new ReducedIntFormatterStructure(Accessor$getterNotNull$ref_3(this.field_1.get_accessor_3q8qa8_k$()), this.digits_1, this.base_1);
  };
  protoOf(ReducedIntFieldDirective).parser_ggn3z5_k$ = function () {
    return ReducedIntParser(this.digits_1, this.base_1, this.field_1.get_accessor_3q8qa8_k$(), this.field_1.get_name_woqyms_k$());
  };
  function GenericFieldSpec(accessor, name, defaultValue, sign) {
    name = name === VOID ? accessor.get_name_woqyms_k$() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.accessor_1 = accessor;
    this.name_1 = name;
    this.defaultValue_1 = defaultValue;
    this.sign_1 = sign;
  }
  protoOf(GenericFieldSpec).get_accessor_3q8qa8_k$ = function () {
    return this.accessor_1;
  };
  protoOf(GenericFieldSpec).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(GenericFieldSpec).get_defaultValue_6cv1mv_k$ = function () {
    return this.defaultValue_1;
  };
  protoOf(GenericFieldSpec).get_sign_woubd2_k$ = function () {
    return this.sign_1;
  };
  function _get_property__ck0u52($this) {
    return $this.property_1;
  }
  function PropertyAccessor(property, name) {
    name = name === VOID ? property.callableName : name;
    this.property_1 = property;
    this.name_1 = name;
  }
  protoOf(PropertyAccessor).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(PropertyAccessor).trySetWithoutReassigning_of2ay6_k$ = function (container, newValue) {
    var oldValue = this.property_1.get(container);
    var tmp;
    if (oldValue === null) {
      this.property_1.set(container, newValue);
      tmp = null;
    } else if (equals(oldValue, newValue)) {
      tmp = null;
    } else {
      tmp = oldValue;
    }
    return tmp;
  };
  protoOf(PropertyAccessor).trySetWithoutReassigning_itlg4a_k$ = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.trySetWithoutReassigning_of2ay6_k$(tmp, (newValue == null ? true : !(newValue == null)) ? newValue : THROW_CCE());
  };
  protoOf(PropertyAccessor).getter_8mvnhr_k$ = function (container) {
    return this.property_1.get(container);
  };
  function UnsignedFieldSpec(accessor, minValue, maxValue, name, defaultValue, sign) {
    name = name === VOID ? accessor.get_name_woqyms_k$() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.accessor_1 = accessor;
    this.minValue_1 = minValue;
    this.maxValue_1 = maxValue;
    this.name_1 = name;
    this.defaultValue_1 = defaultValue;
    this.sign_1 = sign;
    var tmp = this;
    var tmp_0;
    if (this.maxValue_1 < 10) {
      tmp_0 = 1;
    } else if (this.maxValue_1 < 100) {
      tmp_0 = 2;
    } else if (this.maxValue_1 < 1000) {
      tmp_0 = 3;
    } else {
      throw IllegalArgumentException_init_$Create$('Max value ' + this.maxValue_1 + ' is too large');
    }
    tmp.maxDigits_1 = tmp_0;
  }
  protoOf(UnsignedFieldSpec).get_accessor_3q8qa8_k$ = function () {
    return this.accessor_1;
  };
  protoOf(UnsignedFieldSpec).get_minValue_ggd348_k$ = function () {
    return this.minValue_1;
  };
  protoOf(UnsignedFieldSpec).get_maxValue_p78wqy_k$ = function () {
    return this.maxValue_1;
  };
  protoOf(UnsignedFieldSpec).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(UnsignedFieldSpec).get_defaultValue_6cv1mv_k$ = function () {
    return this.defaultValue_1;
  };
  protoOf(UnsignedFieldSpec).get_sign_woubd2_k$ = function () {
    return this.sign_1;
  };
  protoOf(UnsignedFieldSpec).get_maxDigits_8axv7j_k$ = function () {
    return this.maxDigits_1;
  };
  function FieldSign() {
  }
  function FieldSpec() {
  }
  function Accessor() {
  }
  function AbstractFieldSpec() {
  }
  protoOf(AbstractFieldSpec).toString = function () {
    return 'The field ' + this.get_name_woqyms_k$() + ' (default value is ' + toString_1(this.get_defaultValue_6cv1mv_k$()) + ')';
  };
  function _get_cachedFormatter__echqk7($this) {
    return $this.cachedFormatter_1;
  }
  function _get_cachedParser__di4k96($this) {
    return $this.cachedParser_1;
  }
  function CachedFormatStructure(formats) {
    ConcatenatedFormatStructure.call(this, formats);
    this.cachedFormatter_1 = protoOf(ConcatenatedFormatStructure).formatter_tykoui_k$.call(this);
    this.cachedParser_1 = protoOf(ConcatenatedFormatStructure).parser_ggn3z5_k$.call(this);
  }
  protoOf(CachedFormatStructure).formatter_tykoui_k$ = function () {
    return this.cachedFormatter_1;
  };
  protoOf(CachedFormatStructure).parser_ggn3z5_k$ = function () {
    return this.cachedParser_1;
  };
  function FormatStructure() {
  }
  function BasicFormatStructure(directive) {
    this.directive_1 = directive;
  }
  protoOf(BasicFormatStructure).get_directive_7ekuhm_k$ = function () {
    return this.directive_1;
  };
  protoOf(BasicFormatStructure).toString = function () {
    return 'BasicFormatStructure(' + toString(this.directive_1) + ')';
  };
  protoOf(BasicFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof BasicFormatStructure) {
      tmp = equals(this.directive_1, other.directive_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(BasicFormatStructure).hashCode = function () {
    return hashCode(this.directive_1);
  };
  protoOf(BasicFormatStructure).parser_ggn3z5_k$ = function () {
    return this.directive_1.parser_ggn3z5_k$();
  };
  protoOf(BasicFormatStructure).formatter_tykoui_k$ = function () {
    return this.directive_1.formatter_tykoui_k$();
  };
  function ConstantFormatStructure(string) {
    this.string_1 = string;
  }
  protoOf(ConstantFormatStructure).get_string_jnpst6_k$ = function () {
    return this.string_1;
  };
  protoOf(ConstantFormatStructure).toString = function () {
    return 'ConstantFormatStructure(' + this.string_1 + ')';
  };
  protoOf(ConstantFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConstantFormatStructure) {
      tmp = this.string_1 === other.string_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConstantFormatStructure).hashCode = function () {
    return getStringHashCode(this.string_1);
  };
  protoOf(ConstantFormatStructure).parser_ggn3z5_k$ = function () {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.string_1;
    if (charSequenceLength(this_0) === 0) {
      tmp = emptyList();
    } else {
      // Inline function 'kotlin.collections.buildList' call
      // Inline function 'kotlin.collections.buildListInternal' call
      // Inline function 'kotlin.apply' call
      var this_1 = ArrayList_init_$Create$_0();
      var tmp_0;
      if (isAsciiDigit(charCodeAt(this.string_1, 0))) {
        var tmp0 = this.string_1;
        var tmp$ret$2;
        $l$block: {
          // Inline function 'kotlin.text.takeWhile' call
          var inductionVariable = 0;
          var last = tmp0.length;
          if (inductionVariable < last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var it = charCodeAt(tmp0, index);
              if (!isAsciiDigit(it)) {
                tmp$ret$2 = substring(tmp0, 0, index);
                break $l$block;
              }
            }
             while (inductionVariable < last);
          tmp$ret$2 = tmp0;
        }
        this_1.add_utx5q5_k$(new NumberSpanParserOperation(listOf(new ConstantNumberConsumer(tmp$ret$2))));
        var tmp0_0 = this.string_1;
        var tmp$ret$4;
        $l$block_0: {
          // Inline function 'kotlin.text.dropWhile' call
          var inductionVariable_0 = 0;
          var last_0 = charSequenceLength(tmp0_0) - 1 | 0;
          if (inductionVariable_0 <= last_0)
            do {
              var index_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var it_0 = charCodeAt(tmp0_0, index_0);
              if (!isAsciiDigit(it_0)) {
                tmp$ret$4 = substring_0(tmp0_0, index_0);
                break $l$block_0;
              }
            }
             while (inductionVariable_0 <= last_0);
          tmp$ret$4 = '';
        }
        tmp_0 = tmp$ret$4;
      } else {
        tmp_0 = this.string_1;
      }
      var suffix = tmp_0;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(suffix) > 0) {
        if (isAsciiDigit(charCodeAt(suffix, suffix.length - 1 | 0))) {
          var tmp$ret$7;
          $l$block_1: {
            // Inline function 'kotlin.text.dropLastWhile' call
            var inductionVariable_1 = get_lastIndex(suffix);
            if (0 <= inductionVariable_1)
              do {
                var index_1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + -1 | 0;
                var it_1 = charCodeAt(suffix, index_1);
                if (!isAsciiDigit(it_1)) {
                  tmp$ret$7 = substring(suffix, 0, index_1 + 1 | 0);
                  break $l$block_1;
                }
              }
               while (0 <= inductionVariable_1);
            tmp$ret$7 = '';
          }
          this_1.add_utx5q5_k$(new PlainStringParserOperation(tmp$ret$7));
          var tmp$ret$9;
          $l$block_2: {
            // Inline function 'kotlin.text.takeLastWhile' call
            var inductionVariable_2 = get_lastIndex(suffix);
            if (0 <= inductionVariable_2)
              do {
                var index_2 = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + -1 | 0;
                var it_2 = charCodeAt(suffix, index_2);
                if (!isAsciiDigit(it_2)) {
                  tmp$ret$9 = substring_0(suffix, index_2 + 1 | 0);
                  break $l$block_2;
                }
              }
               while (0 <= inductionVariable_2);
            tmp$ret$9 = suffix;
          }
          this_1.add_utx5q5_k$(new NumberSpanParserOperation(listOf(new ConstantNumberConsumer(tmp$ret$9))));
        } else {
          this_1.add_utx5q5_k$(new PlainStringParserOperation(suffix));
        }
      }
      tmp = this_1.build_nmwvly_k$();
    }
    return new ParserStructure(tmp, emptyList());
  };
  protoOf(ConstantFormatStructure).formatter_tykoui_k$ = function () {
    return new ConstantStringFormatterStructure(this.string_1);
  };
  function _get_fieldSigns__pfistt($this) {
    return $this.fieldSigns_1;
  }
  function formatter$checkIfAllNegative(this$0, value) {
    var seenNonZero = false;
    var _iterator__ex2g4s = this$0.fieldSigns_1.iterator_jk1svi_k$();
    $l$loop: while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var check = _iterator__ex2g4s.next_20eer_k$();
      if (check.get_isNegative_i24zqw_k$().getter_8mvnhr_k$(value) === true)
        seenNonZero = true;
      else if (check.isZero_yccjay_k$(value))
        continue $l$loop;
      else
        return false;
    }
    return seenNonZero;
  }
  function SignedFormatStructure$parser$lambda(this$0) {
    return function (value, isNegative) {
      var _iterator__ex2g4s = this$0.fieldSigns_1.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var field = _iterator__ex2g4s.next_20eer_k$();
        var wasNegative = field.get_isNegative_i24zqw_k$().getter_8mvnhr_k$(value) === true;
        field.get_isNegative_i24zqw_k$().trySetWithoutReassigning_itlg4a_k$(value, !(isNegative === wasNegative));
      }
      return Unit_getInstance();
    };
  }
  function SignedFormatStructure$formatter$checkIfAllNegative$ref(this$0) {
    var l = function (p0) {
      return formatter$checkIfAllNegative(this$0, p0);
    };
    l.callableName = 'checkIfAllNegative';
    return l;
  }
  function SignedFormatStructure(format, withPlusSign) {
    this.format_1 = format;
    this.withPlusSign_1 = withPlusSign;
    var tmp = this;
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0 = basicFormats(this.format_1);
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp0_safe_receiver = element.get_field_irdnf5_k$().get_sign_woubd2_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination.add_utx5q5_k$(tmp0_safe_receiver);
      }
    }
    tmp.fieldSigns_1 = toSet(destination);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!this.fieldSigns_1.isEmpty_y1axqb_k$()) {
      var message = 'Signed format must contain at least one field with a sign';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(SignedFormatStructure).get_format_dfdtds_k$ = function () {
    return this.format_1;
  };
  protoOf(SignedFormatStructure).get_withPlusSign_fo0zhi_k$ = function () {
    return this.withPlusSign_1;
  };
  protoOf(SignedFormatStructure).toString = function () {
    return 'SignedFormatStructure(' + toString(this.format_1) + ')';
  };
  protoOf(SignedFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof SignedFormatStructure) {
      tmp_0 = equals(this.format_1, other.format_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.withPlusSign_1 === other.withPlusSign_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SignedFormatStructure).hashCode = function () {
    return imul(31, hashCode(this.format_1)) + getBooleanHashCode(this.withPlusSign_1) | 0;
  };
  protoOf(SignedFormatStructure).parser_ggn3z5_k$ = function () {
    return concat(listOf_0([new ParserStructure(listOf(new SignParser(SignedFormatStructure$parser$lambda(this), this.withPlusSign_1, 'sign for ' + toString(this.fieldSigns_1))), emptyList()), this.format_1.parser_ggn3z5_k$()]));
  };
  protoOf(SignedFormatStructure).formatter_tykoui_k$ = function () {
    var innerFormat = this.format_1.formatter_tykoui_k$();
    return new SignedFormatter(innerFormat, SignedFormatStructure$formatter$checkIfAllNegative$ref(this), this.withPlusSign_1);
  };
  function _get_accessor__agzfks($this) {
    return $this.accessor_1;
  }
  function _get_defaultValue__cxgql7($this) {
    return $this.defaultValue_1;
  }
  function Companion_19() {
    Companion_instance_19 = this;
  }
  protoOf(Companion_19).fromField_3ctjbq_k$ = function (field) {
    var default_0 = field.get_defaultValue_6cv1mv_k$();
    // Inline function 'kotlin.require' call
    if (!!(default_0 == null)) {
      var message = "The field '" + field.get_name_woqyms_k$() + "' does not define a default value";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new PropertyWithDefault(field.get_accessor_3q8qa8_k$(), default_0);
  };
  var Companion_instance_19;
  function Companion_getInstance_23() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function Accessor$getter$ref(p0) {
    var l = function (_this__u8e3s4) {
      return p0.getter_8mvnhr_k$(_this__u8e3s4);
    };
    l.callableName = 'getter';
    return l;
  }
  function _get_fields__njv4he($this) {
    return $this.fields_1;
  }
  function PropertyWithDefault(accessor, defaultValue) {
    Companion_getInstance_23();
    this.accessor_1 = accessor;
    this.defaultValue_1 = defaultValue;
  }
  protoOf(PropertyWithDefault).assignDefault_8zxcab_k$ = function (target) {
    this.accessor_1.trySetWithoutReassigning_itlg4a_k$(target, this.defaultValue_1);
  };
  protoOf(PropertyWithDefault).isDefaultComparisonPredicate_8hfvxz_k$ = function () {
    return new ComparisonPredicate(this.defaultValue_1, Accessor$getter$ref(this.accessor_1));
  };
  function OptionalFormatStructure$parser$lambda(this$0) {
    return function (it) {
      var _iterator__ex2g4s = this$0.fields_1.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var field = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlinx.datetime.internal.format.PropertyWithDefault.assignDefault' call
        field.accessor_1.trySetWithoutReassigning_itlg4a_k$(it, field.defaultValue_1);
      }
      return Unit_getInstance();
    };
  }
  function Accessor$getter$ref_0(p0) {
    var l = function (_this__u8e3s4) {
      return p0.getter_8mvnhr_k$(_this__u8e3s4);
    };
    l.callableName = 'getter';
    return l;
  }
  function Predicate$test$ref(p0) {
    var l = function (_this__u8e3s4) {
      return p0.test_kxdenx_k$(_this__u8e3s4);
    };
    l.callableName = 'test';
    return l;
  }
  function Truth$test$ref(p0) {
    var l = function (_this__u8e3s4) {
      return p0.test_o6ugz1_k$(_this__u8e3s4);
    };
    l.callableName = 'test';
    return l;
  }
  function OptionalFormatStructure(onZero, format) {
    this.onZero_1 = onZero;
    this.format_1 = format;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = basicFormats(this.format_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$0 = item.get_field_irdnf5_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.map' call
    var this_1 = distinct(destination);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s_0 = this_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var item_0 = _iterator__ex2g4s_0.next_20eer_k$();
      var tmp$ret$3 = Companion_getInstance_23().fromField_3ctjbq_k$(item_0);
      destination_0.add_utx5q5_k$(tmp$ret$3);
    }
    tmp.fields_1 = destination_0;
  }
  protoOf(OptionalFormatStructure).get_onZero_hnt54g_k$ = function () {
    return this.onZero_1;
  };
  protoOf(OptionalFormatStructure).get_format_dfdtds_k$ = function () {
    return this.format_1;
  };
  protoOf(OptionalFormatStructure).toString = function () {
    return 'Optional(' + this.onZero_1 + ', ' + toString(this.format_1) + ')';
  };
  protoOf(OptionalFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof OptionalFormatStructure) {
      tmp_0 = this.onZero_1 === other.onZero_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.format_1, other.format_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OptionalFormatStructure).hashCode = function () {
    return imul(31, getStringHashCode(this.onZero_1)) + hashCode(this.format_1) | 0;
  };
  protoOf(OptionalFormatStructure).parser_ggn3z5_k$ = function () {
    var tmp = emptyList();
    var tmp_0 = this.format_1.parser_ggn3z5_k$();
    var tmp_1 = (new ConstantFormatStructure(this.onZero_1)).parser_ggn3z5_k$();
    var tmp_2;
    if (this.fields_1.isEmpty_y1axqb_k$()) {
      tmp_2 = emptyList();
    } else {
      tmp_2 = listOf(new UnconditionalModification(OptionalFormatStructure$parser$lambda(this)));
    }
    return new ParserStructure(tmp, listOf_0([tmp_0, concat(listOf_0([tmp_1, new ParserStructure(tmp_2, emptyList())]))]));
  };
  protoOf(OptionalFormatStructure).formatter_tykoui_k$ = function () {
    var formatter = this.format_1.formatter_tykoui_k$();
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.fields_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlinx.datetime.internal.format.PropertyWithDefault.isDefaultComparisonPredicate' call
      var tmp$ret$1 = new ComparisonPredicate(item.defaultValue_1, Accessor$getter$ref_0(item.accessor_1));
      destination.add_utx5q5_k$(tmp$ret$1);
    }
    var predicate = conjunctionPredicate(destination);
    var tmp;
    if (predicate instanceof Truth) {
      tmp = new ConstantStringFormatterStructure(this.onZero_1);
    } else {
      var tmp_0 = to(Predicate$test$ref(predicate), new ConstantStringFormatterStructure(this.onZero_1));
      tmp = new ConditionalFormatter(listOf_0([tmp_0, to(Truth$test$ref(Truth_getInstance()), formatter)]));
    }
    return tmp;
  };
  function AlternativesParsingFormatStructure(mainFormat, formats) {
    this.mainFormat_1 = mainFormat;
    this.formats_1 = formats;
  }
  protoOf(AlternativesParsingFormatStructure).get_mainFormat_iprtrb_k$ = function () {
    return this.mainFormat_1;
  };
  protoOf(AlternativesParsingFormatStructure).get_formats_9xs0wd_k$ = function () {
    return this.formats_1;
  };
  protoOf(AlternativesParsingFormatStructure).toString = function () {
    return 'AlternativesParsing(' + toString(this.formats_1) + ')';
  };
  protoOf(AlternativesParsingFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AlternativesParsingFormatStructure) {
      tmp_0 = equals(this.mainFormat_1, other.mainFormat_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.formats_1, other.formats_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AlternativesParsingFormatStructure).hashCode = function () {
    return imul(31, hashCode(this.mainFormat_1)) + hashCode(this.formats_1) | 0;
  };
  protoOf(AlternativesParsingFormatStructure).parser_ggn3z5_k$ = function () {
    var tmp = emptyList();
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    this_0.add_utx5q5_k$(this.mainFormat_1.parser_ggn3z5_k$());
    var _iterator__ex2g4s = this.formats_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var format = _iterator__ex2g4s.next_20eer_k$();
      this_0.add_utx5q5_k$(format.parser_ggn3z5_k$());
    }
    var tmp$ret$3 = this_0.build_nmwvly_k$();
    return new ParserStructure(tmp, tmp$ret$3);
  };
  protoOf(AlternativesParsingFormatStructure).formatter_tykoui_k$ = function () {
    return this.mainFormat_1.formatter_tykoui_k$();
  };
  function ConcatenatedFormatStructure(formats) {
    this.formats_1 = formats;
  }
  protoOf(ConcatenatedFormatStructure).get_formats_9xs0wd_k$ = function () {
    return this.formats_1;
  };
  protoOf(ConcatenatedFormatStructure).toString = function () {
    return 'ConcatenatedFormatStructure(' + joinToString(this.formats_1, ', ') + ')';
  };
  protoOf(ConcatenatedFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConcatenatedFormatStructure) {
      tmp = equals(this.formats_1, other.formats_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConcatenatedFormatStructure).hashCode = function () {
    return hashCode(this.formats_1);
  };
  protoOf(ConcatenatedFormatStructure).parser_ggn3z5_k$ = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.formats_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$0 = item.parser_ggn3z5_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return concat(destination);
  };
  protoOf(ConcatenatedFormatStructure).formatter_tykoui_k$ = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.formats_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$0 = item.formatter_tykoui_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var formatters = destination;
    var tmp;
    if (formatters.get_size_woubt6_k$() === 1) {
      tmp = single(formatters);
    } else {
      tmp = new ConcatenatedFormatter(formatters);
    }
    return tmp;
  };
  function NonConcatenatedFormatStructure() {
  }
  function basicFormats(format) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    basicFormats$_anonymous_$rec_hkf0lf(this_0, format);
    return this_0.build_nmwvly_k$();
  }
  function basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format) {
    if (format instanceof BasicFormatStructure)
      $this_buildList.add_utx5q5_k$(format.directive_1);
    else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = format.formats_1.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          basicFormats$_anonymous_$rec_hkf0lf($this_buildList, element);
        }
      } else {
        if (!(format instanceof ConstantFormatStructure)) {
          if (format instanceof SignedFormatStructure) {
            basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.format_1);
          } else {
            if (format instanceof AlternativesParsingFormatStructure) {
              basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.mainFormat_1);
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_0 = format.formats_1.iterator_jk1svi_k$();
              while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
                var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
                basicFormats$_anonymous_$rec_hkf0lf($this_buildList, element_0);
              }
            } else {
              if (format instanceof OptionalFormatStructure) {
                basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.format_1);
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
  }
  function Predicate() {
  }
  function conjunctionPredicate(predicates) {
    return predicates.isEmpty_y1axqb_k$() ? Truth_getInstance() : predicates.get_size_woubt6_k$() === 1 ? single(predicates) : new ConjunctionPredicate(predicates);
  }
  function _get_expectedValue__2yfcd4($this) {
    return $this.expectedValue_1;
  }
  function _get_getter__ygn3c0($this) {
    return $this.getter_1;
  }
  function ComparisonPredicate(expectedValue, getter) {
    this.expectedValue_1 = expectedValue;
    this.getter_1 = getter;
  }
  protoOf(ComparisonPredicate).test_kxdenx_k$ = function (value) {
    return equals(this.getter_1(value), this.expectedValue_1);
  };
  function Truth() {
    Truth_instance = this;
  }
  protoOf(Truth).test_o6ugz1_k$ = function (value) {
    return true;
  };
  protoOf(Truth).test_kxdenx_k$ = function (value) {
    return this.test_o6ugz1_k$((value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  var Truth_instance;
  function Truth_getInstance() {
    if (Truth_instance == null)
      new Truth();
    return Truth_instance;
  }
  function _get_predicates__4drt75($this) {
    return $this.predicates_1;
  }
  function ConjunctionPredicate(predicates) {
    this.predicates_1 = predicates;
  }
  protoOf(ConjunctionPredicate).test_kxdenx_k$ = function (value) {
    var tmp0 = this.predicates_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (!element.test_kxdenx_k$(value)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function FormatterStructure() {
  }
  function _get_formatter__g99gl5($this) {
    return $this.formatter_1;
  }
  function _get_padding__n2y8rk_10($this) {
    return $this.padding_1;
  }
  function SpacePaddedFormatter(formatter, padding) {
    this.formatter_1 = formatter;
    this.padding_1 = padding;
  }
  protoOf(SpacePaddedFormatter).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    // Inline function 'kotlin.let' call
    var it = StringBuilder_init_$Create$();
    this.formatter_1.format_bqb1zl_k$(obj, it, minusNotRequired);
    var string = it.toString();
    // Inline function 'kotlin.repeat' call
    var times = this.padding_1 - string.length | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        builder.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
      }
       while (inductionVariable < times);
    builder.append_jgojdo_k$(string);
  };
  function _get_formatter__g99gl5_0($this) {
    return $this.formatter_1;
  }
  function _get_allSubFormatsNegative__1l9a69($this) {
    return $this.allSubFormatsNegative_1;
  }
  function _get_alwaysOutputSign__djuftq($this) {
    return $this.alwaysOutputSign_1;
  }
  function SignedFormatter(formatter, allSubFormatsNegative, alwaysOutputSign) {
    this.formatter_1 = formatter;
    this.allSubFormatsNegative_1 = allSubFormatsNegative;
    this.alwaysOutputSign_1 = alwaysOutputSign;
  }
  protoOf(SignedFormatter).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    var tmp;
    if (!minusNotRequired && this.allSubFormatsNegative_1(obj)) {
      tmp = _Char___init__impl__6a9atx(45);
    } else if (this.alwaysOutputSign_1) {
      tmp = _Char___init__impl__6a9atx(43);
    } else {
      tmp = null;
    }
    var sign = tmp;
    var tmp_0 = sign;
    if ((tmp_0 == null ? null : new Char(tmp_0)) == null)
      null;
    else {
      var tmp_1 = sign;
      // Inline function 'kotlin.let' call
      var it = (tmp_1 == null ? null : new Char(tmp_1)).value_1;
      builder.append_am5a4z_k$(it);
    }
    var tmp_2;
    if (minusNotRequired) {
      tmp_2 = true;
    } else {
      var tmp_3 = sign;
      tmp_2 = equals(tmp_3 == null ? null : new Char(tmp_3), new Char(_Char___init__impl__6a9atx(45)));
    }
    this.formatter_1.format_bqb1zl_k$(obj, builder, tmp_2);
  };
  function _get_formatters__6rcv26($this) {
    return $this.formatters_1;
  }
  function ConditionalFormatter(formatters) {
    this.formatters_1 = formatters;
  }
  protoOf(ConditionalFormatter).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    var _iterator__ex2g4s = this.formatters_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
      var condition = _destruct__k2r9zo.component1_7eebsc_k$();
      var formatter = _destruct__k2r9zo.component2_7eebsb_k$();
      if (condition(obj)) {
        formatter.format_bqb1zl_k$(obj, builder, minusNotRequired);
        return Unit_getInstance();
      }
    }
  };
  function _get_formatters__6rcv26_0($this) {
    return $this.formatters_1;
  }
  function ConcatenatedFormatter(formatters) {
    this.formatters_1 = formatters;
  }
  protoOf(ConcatenatedFormatter).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    var _iterator__ex2g4s = this.formatters_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var formatter = _iterator__ex2g4s.next_20eer_k$();
      formatter.format_bqb1zl_k$(obj, builder, minusNotRequired);
    }
  };
  function _get_number__4pkqn6($this) {
    return $this.number_1;
  }
  function _get_zeroPadding__4dvl9k($this) {
    return $this.zeroPadding_1;
  }
  function UnsignedIntFormatterStructure(number, zeroPadding) {
    this.number_1 = number;
    this.zeroPadding_1 = zeroPadding;
    // Inline function 'kotlin.require' call
    if (!(this.zeroPadding_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.zeroPadding_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.zeroPadding_1 <= 9)) {
      var message_0 = 'The minimum number of digits (' + this.zeroPadding_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(UnsignedIntFormatterStructure).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    var num = this.number_1(obj);
    var numberStr = num.toString();
    // Inline function 'kotlin.repeat' call
    var times = this.zeroPadding_1 - numberStr.length | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        builder.append_am5a4z_k$(_Char___init__impl__6a9atx(48));
      }
       while (inductionVariable < times);
    builder.append_jgojdo_k$(numberStr);
  };
  function _get_string__6oa3oa($this) {
    return $this.string_1;
  }
  function StringFormatterStructure(string) {
    this.string_1 = string;
  }
  protoOf(StringFormatterStructure).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    builder.append_jgojdo_k$(this.string_1(obj));
  };
  function _get_number__4pkqn6_0($this) {
    return $this.number_1;
  }
  function _get_minDigits__4wf98n_3($this) {
    return $this.minDigits_1;
  }
  function _get_maxDigits__p8x9uv_3($this) {
    return $this.maxDigits_1;
  }
  function _get_zerosToAdd__m3gu6o_0($this) {
    return $this.zerosToAdd_1;
  }
  function DecimalFractionFormatterStructure(number, minDigits, maxDigits, zerosToAdd) {
    this.number_1 = number;
    this.minDigits_1 = minDigits;
    this.maxDigits_1 = maxDigits;
    this.zerosToAdd_1 = zerosToAdd;
    var containsArg = this.minDigits_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      var message = 'The minimum number of digits (' + this.minDigits_1 + ') is not in range 1..9';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsLower = this.minDigits_1;
    var containsArg_0 = this.maxDigits_1;
    // Inline function 'kotlin.require' call
    if (!(containsLower <= containsArg_0 ? containsArg_0 <= 9 : false)) {
      var message_0 = 'The maximum number of digits (' + this.maxDigits_1 + ') is not in range ' + this.minDigits_1 + '..9';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(DecimalFractionFormatterStructure).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    var number = this.number_1(obj);
    var numberWithRequiredPrecision = number.fractionalPartWithNDigits_sivm3u_k$(this.maxDigits_1);
    var zerosToStrip = 0;
    while (this.maxDigits_1 > (this.minDigits_1 + zerosToStrip | 0) && (numberWithRequiredPrecision % get_POWERS_OF_TEN()[zerosToStrip + 1 | 0] | 0) === 0) {
      zerosToStrip = zerosToStrip + 1 | 0;
    }
    var zerosToAddBack = this.zerosToAdd_1.get_c1px32_k$((this.maxDigits_1 - zerosToStrip | 0) - 1 | 0);
    if (zerosToStrip >= zerosToAddBack)
      zerosToStrip = zerosToStrip - zerosToAddBack | 0;
    var digitsToOutput = this.maxDigits_1 - zerosToStrip | 0;
    var numberToOutput = numberWithRequiredPrecision / get_POWERS_OF_TEN()[zerosToStrip] | 0;
    builder.append_jgojdo_k$(substring_0((numberToOutput + get_POWERS_OF_TEN()[digitsToOutput] | 0).toString(), 1));
  };
  function _get_number__4pkqn6_1($this) {
    return $this.number_1;
  }
  function _get_zeroPadding__4dvl9k_0($this) {
    return $this.zeroPadding_1;
  }
  function _get_outputPlusOnExceededWidth__7vsxp4_0($this) {
    return $this.outputPlusOnExceededWidth_1;
  }
  function SignedIntFormatterStructure(number, zeroPadding, outputPlusOnExceededWidth) {
    this.number_1 = number;
    this.zeroPadding_1 = zeroPadding;
    this.outputPlusOnExceededWidth_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.zeroPadding_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.zeroPadding_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.zeroPadding_1 <= 9)) {
      var message_0 = 'The minimum number of digits (' + this.zeroPadding_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(SignedIntFormatterStructure).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    var innerBuilder = StringBuilder_init_$Create$();
    // Inline function 'kotlin.let' call
    var it = this.number_1(obj);
    var number = minusNotRequired && it < 0 ? -it | 0 : it;
    if (!(this.outputPlusOnExceededWidth_1 == null) && number >= get_POWERS_OF_TEN()[this.outputPlusOnExceededWidth_1]) {
      innerBuilder.append_am5a4z_k$(_Char___init__impl__6a9atx(43));
    }
    // Inline function 'kotlin.math.absoluteValue' call
    if (abs(number) < get_POWERS_OF_TEN()[this.zeroPadding_1 - 1 | 0]) {
      if (number >= 0) {
        innerBuilder.append_uppzia_k$(number + get_POWERS_OF_TEN()[this.zeroPadding_1] | 0).deleteAt_mq1vvq_k$(0);
      } else {
        innerBuilder.append_uppzia_k$(number - get_POWERS_OF_TEN()[this.zeroPadding_1] | 0).deleteAt_mq1vvq_k$(1);
      }
    } else {
      innerBuilder.append_uppzia_k$(number);
    }
    builder.append_jgojdo_k$(innerBuilder);
  };
  function _get_number__4pkqn6_2($this) {
    return $this.number_1;
  }
  function _get_digits__5rvfvf_0($this) {
    return $this.digits_1;
  }
  function _get_base__d46q3e_0($this) {
    return $this.base_1;
  }
  function ReducedIntFormatterStructure(number, digits, base) {
    this.number_1 = number;
    this.digits_1 = digits;
    this.base_1 = base;
  }
  protoOf(ReducedIntFormatterStructure).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    var number = this.number_1(obj);
    var containsUpper = get_POWERS_OF_TEN()[this.digits_1];
    var containsArg = number - this.base_1 | 0;
    if (0 <= containsArg ? containsArg < containsUpper : false) {
      var numberStr = (number % get_POWERS_OF_TEN()[this.digits_1] | 0).toString();
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = this.digits_1 - numberStr.length | 0;
      var tmp$ret$0 = Math.max(0, b);
      var zeroPaddingStr = repeat('0', tmp$ret$0);
      append(builder, [zeroPaddingStr, numberStr]);
    } else {
      if (number >= 0) {
        builder.append_jgojdo_k$('+');
      }
      builder.append_jgojdo_k$(number.toString());
    }
  };
  function _get_string__6oa3oa_0($this) {
    return $this.string_1;
  }
  function ConstantStringFormatterStructure(string) {
    this.string_1 = string;
  }
  protoOf(ConstantStringFormatterStructure).format_bqb1zl_k$ = function (obj, builder, minusNotRequired) {
    builder.append_jgojdo_k$(this.string_1);
  };
  function _get_minLength__vbub2f($this) {
    return $this.minLength_1;
  }
  function _get_maxLength__16hryx($this) {
    return $this.maxLength_1;
  }
  function _get_setter__e3slw($this) {
    return $this.setter_1;
  }
  function FractionPartConsumer(minLength, maxLength, setter, name) {
    NumberConsumer.call(this, minLength === maxLength ? minLength : null, name);
    this.minLength_1 = minLength;
    this.maxLength_1 = maxLength;
    this.setter_1 = setter;
    var containsArg = this.minLength_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      var message = 'Invalid minimum length ' + this.minLength_1 + ' for field ' + this.whatThisExpects_1 + ': expected 1..9';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsLower = this.minLength_1;
    var containsArg_0 = this.maxLength_1;
    // Inline function 'kotlin.require' call
    if (!(containsLower <= containsArg_0 ? containsArg_0 <= 9 : false)) {
      var message_0 = 'Invalid maximum length ' + this.maxLength_1 + ' for field ' + this.whatThisExpects_1 + ': expected ' + this.minLength_1 + '..9';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(FractionPartConsumer).consume_o77i9d_k$ = function (storage, input, start, end) {
    return (end - start | 0) < this.minLength_1 ? new TooFewDigits(this.minLength_1) : (end - start | 0) > this.maxLength_1 ? new TooManyDigits(this.maxLength_1) : setWithoutReassigning(this.setter_1, storage, new DecimalFraction(parseAsciiInt(input, start, end), end - start | 0));
  };
  function _get_expected__qj1cer($this) {
    return $this.expected_1;
  }
  function ConstantNumberConsumer(expected) {
    NumberConsumer.call(this, expected.length, 'the predefined string ' + expected);
    this.expected_1 = expected;
  }
  protoOf(ConstantNumberConsumer).consume_o77i9d_k$ = function (storage, input, start, end) {
    var tmp;
    // Inline function 'kotlin.text.substring' call
    if (toString(charSequenceSubSequence(input, start, end)) === this.expected_1) {
      tmp = null;
    } else {
      tmp = new WrongConstant(this.expected_1);
    }
    return tmp;
  };
  function NumberConsumer(length, whatThisExpects) {
    this.length_1 = length;
    this.whatThisExpects_1 = whatThisExpects;
  }
  protoOf(NumberConsumer).get_length_g42xv3_k$ = function () {
    return this.length_1;
  };
  protoOf(NumberConsumer).get_whatThisExpects_s3n635_k$ = function () {
    return this.whatThisExpects_1;
  };
  function ExpectedInt() {
    ExpectedInt_instance = this;
  }
  protoOf(ExpectedInt).errorMessage_jwdivz_k$ = function () {
    return 'expected an Int value';
  };
  var ExpectedInt_instance;
  function ExpectedInt_getInstance() {
    if (ExpectedInt_instance == null)
      new ExpectedInt();
    return ExpectedInt_instance;
  }
  function TooManyDigits(maxDigits) {
    this.maxDigits_1 = maxDigits;
  }
  protoOf(TooManyDigits).get_maxDigits_8axv7j_k$ = function () {
    return this.maxDigits_1;
  };
  protoOf(TooManyDigits).errorMessage_jwdivz_k$ = function () {
    return 'expected at most ' + this.maxDigits_1 + ' digits';
  };
  function TooFewDigits(minDigits) {
    this.minDigits_1 = minDigits;
  }
  protoOf(TooFewDigits).get_minDigits_4gz12n_k$ = function () {
    return this.minDigits_1;
  };
  protoOf(TooFewDigits).errorMessage_jwdivz_k$ = function () {
    return 'expected at least ' + this.minDigits_1 + ' digits';
  };
  function WrongConstant(expected) {
    this.expected_1 = expected;
  }
  protoOf(WrongConstant).get_expected_77p56p_k$ = function () {
    return this.expected_1;
  };
  protoOf(WrongConstant).errorMessage_jwdivz_k$ = function () {
    return "expected '" + this.expected_1 + "'";
  };
  function Conflicting(conflicting) {
    this.conflicting_1 = conflicting;
  }
  protoOf(Conflicting).get_conflicting_bt04nt_k$ = function () {
    return this.conflicting_1;
  };
  protoOf(Conflicting).errorMessage_jwdivz_k$ = function () {
    return "attempted to overwrite the existing value '" + toString(this.conflicting_1) + "'";
  };
  function NumberConsumptionError() {
  }
  function setWithoutReassigning(_this__u8e3s4, receiver, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.trySetWithoutReassigning_itlg4a_k$(receiver, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var conflictingValue = tmp;
    return new Conflicting(conflictingValue);
  }
  function parseAsciiInt(_this__u8e3s4, start, end) {
    var result = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = charSequenceGet(_this__u8e3s4, i);
        result = imul(result, 10) + asciiDigitToInt(digit) | 0;
      }
       while (inductionVariable < end);
    return result;
  }
  function _get_minLength__vbub2f_0($this) {
    return $this.minLength_1;
  }
  function _get_maxLength__16hryx_0($this) {
    return $this.maxLength_1;
  }
  function _get_setter__e3slw_0($this) {
    return $this.setter_1;
  }
  function _get_multiplyByMinus1__aiyltd($this) {
    return $this.multiplyByMinus1__1;
  }
  function UnsignedIntConsumer(minLength, maxLength, setter, name, multiplyByMinus1) {
    multiplyByMinus1 = multiplyByMinus1 === VOID ? false : multiplyByMinus1;
    NumberConsumer.call(this, minLength == maxLength ? minLength : null, name);
    this.minLength_1 = minLength;
    this.maxLength_1 = maxLength;
    this.setter_1 = setter;
    this.multiplyByMinus1__1 = multiplyByMinus1;
    // Inline function 'kotlin.require' call
    if (!(this.get_length_g42xv3_k$() == null || numberRangeToNumber(1, 9).contains_7q95ev_k$(this.get_length_g42xv3_k$()))) {
      var message = 'Invalid length for field ' + this.whatThisExpects_1 + ': ' + this.get_length_g42xv3_k$();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(UnsignedIntConsumer).consume_o77i9d_k$ = function (storage, input, start, end) {
    var tmp;
    if (!(this.maxLength_1 == null) && (end - start | 0) > this.maxLength_1) {
      tmp = new TooManyDigits(this.maxLength_1);
    } else if (!(this.minLength_1 == null) && (end - start | 0) < this.minLength_1) {
      tmp = new TooFewDigits(this.minLength_1);
    } else {
      var result = parseAsciiIntOrNull(input, start, end);
      tmp = result == null ? ExpectedInt_getInstance() : setWithoutReassigning(this.setter_1, storage, this.multiplyByMinus1__1 ? -result | 0 : result);
    }
    return tmp;
  };
  function _get_setter__e3slw_1($this) {
    return $this.setter_1;
  }
  function _get_modulo__cxp5ez($this) {
    return $this.modulo_1;
  }
  function _get_baseMod__6opps0($this) {
    return $this.baseMod_1;
  }
  function _get_baseFloor__tllk3a($this) {
    return $this.baseFloor_1;
  }
  function ReducedIntConsumer(length, setter, name, base) {
    NumberConsumer.call(this, length, name);
    this.length_2 = length;
    this.setter_1 = setter;
    this.base_1 = base;
    this.modulo_1 = get_POWERS_OF_TEN()[this.length_2];
    this.baseMod_1 = this.base_1 % this.modulo_1 | 0;
    this.baseFloor_1 = this.base_1 - this.baseMod_1 | 0;
    var containsArg = this.length_2;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      var message = 'Invalid length for field ' + this.whatThisExpects_1 + ': ' + this.length_2;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(ReducedIntConsumer).get_length_g42xv3_k$ = function () {
    return this.length_2;
  };
  protoOf(ReducedIntConsumer).get_base_wojaxm_k$ = function () {
    return this.base_1;
  };
  protoOf(ReducedIntConsumer).consume_o77i9d_k$ = function (storage, input, start, end) {
    var result = parseAsciiInt(input, start, end);
    var tmp;
    if (result >= this.baseMod_1) {
      tmp = this.baseFloor_1 + result | 0;
    } else {
      tmp = (this.baseFloor_1 + this.modulo_1 | 0) + result | 0;
    }
    return setWithoutReassigning(this.setter_1, storage, tmp);
  };
  function parseAsciiIntOrNull(_this__u8e3s4, start, end) {
    var result = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = charSequenceGet(_this__u8e3s4, i);
        result = imul(result, 10) + asciiDigitToInt(digit) | 0;
        if (result < 0)
          return null;
      }
       while (inductionVariable < end);
    return result;
  }
  function ParseError(position, message) {
    this.position_1 = position;
    this.message_1 = message;
  }
  protoOf(ParseError).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(ParseError).get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  function _ParseResult___init__impl__gvz3cn(value) {
    return value;
  }
  function _ParseResult___get_value__impl__86mnxf($this) {
    return $this;
  }
  function Companion_20() {
    Companion_instance_20 = this;
  }
  protoOf(Companion_20).Ok_6vkbj8_k$ = function (indexOfNextUnparsed) {
    return _ParseResult___init__impl__gvz3cn(indexOfNextUnparsed);
  };
  protoOf(Companion_20).Error_ca056s_k$ = function (position, message) {
    return _ParseResult___init__impl__gvz3cn(new ParseError(position, message));
  };
  var Companion_instance_20;
  function Companion_getInstance_24() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function ParseResult__match_impl_30t8rc($this, onSuccess, onFailure) {
    var tmp0_subject = _ParseResult___get_value__impl__86mnxf($this);
    var tmp;
    if (typeof tmp0_subject === 'number') {
      tmp = onSuccess(_ParseResult___get_value__impl__86mnxf($this));
    } else {
      if (tmp0_subject instanceof ParseError) {
        tmp = onFailure(_ParseResult___get_value__impl__86mnxf($this));
      } else {
        var message = 'Unexpected parse result: ' + toString(_ParseResult___get_value__impl__86mnxf($this));
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function ParseResult__toString_impl_foa9an($this) {
    return 'ParseResult(value=' + toString($this) + ')';
  }
  function ParseResult__hashCode_impl_xlnvvm($this) {
    return hashCode($this);
  }
  function ParseResult__equals_impl_1a2goy($this, other) {
    if (!(other instanceof ParseResult))
      return false;
    var tmp0_other_with_cast = other instanceof ParseResult ? other.value_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ParseResult(value) {
    Companion_getInstance_24();
    this.value_1 = value;
  }
  protoOf(ParseResult).toString = function () {
    return ParseResult__toString_impl_foa9an(this.value_1);
  };
  protoOf(ParseResult).hashCode = function () {
    return ParseResult__hashCode_impl_xlnvvm(this.value_1);
  };
  protoOf(ParseResult).equals = function (other) {
    return ParseResult__equals_impl_1a2goy(this.value_1, other);
  };
  function Copyable() {
  }
  function _Parser___init__impl__gdyfby(commands) {
    return commands;
  }
  function _get_commands__a20n1($this) {
    return $this;
  }
  function parse($this, input, startIndex, initialContainer, allowDanglingInput, onError, onSuccess) {
    var parseOptions = mutableListOf([new ParserState(initialContainer, _get_commands__a20n1($this), startIndex)]);
    iterate_over_alternatives: while (true) {
      var tmp0_elvis_lhs = removeLastOrNull(parseOptions);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break iterate_over_alternatives;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var state = tmp;
      var output = state.output_1.copy_1tks5_k$();
      var inputPosition = state.inputPosition_1;
      var parserStructure = state.parserStructure_1;
      // Inline function 'kotlin.run' call
      $l$block: {
        var inductionVariable = 0;
        var last = parserStructure.operations_1.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var ix = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlinx.datetime.internal.format.parser.ParseResult.match' call
            var this_0 = parserStructure.operations_1.get_c1px32_k$(ix).consume_ew3o91_k$(output, input, inputPosition);
            var tmp0_subject = _ParseResult___get_value__impl__86mnxf(this_0);
            if (typeof tmp0_subject === 'number') {
              inputPosition = _ParseResult___get_value__impl__86mnxf(this_0);
            } else {
              if (tmp0_subject instanceof ParseError) {
                onError(_ParseResult___get_value__impl__86mnxf(this_0));
                break $l$block;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected parse result: ' + toString(_ParseResult___get_value__impl__86mnxf(this_0));
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
           while (inductionVariable <= last);
        if (parserStructure.followedBy_1.isEmpty_y1axqb_k$()) {
          if (allowDanglingInput || inputPosition === charSequenceLength(input)) {
            onSuccess(inputPosition, output);
          } else {
            var tmp_0 = inputPosition;
            onError(new ParseError(tmp_0, Parser$parse$lambda));
          }
        } else {
          var inductionVariable_0 = parserStructure.followedBy_1.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var ix_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              parseOptions.add_utx5q5_k$(new ParserState(output, parserStructure.followedBy_1.get_c1px32_k$(ix_0), inputPosition));
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
  }
  function Parser__match_impl_nzt83d($this, input, initialContainer, startIndex) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var errors = ArrayList_init_$Create$_0();
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse' call
    var parseOptions = mutableListOf([new ParserState(initialContainer, _get_commands__a20n1($this), startIndex)]);
    iterate_over_alternatives: while (true) {
      var tmp0_elvis_lhs = removeLastOrNull(parseOptions);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break iterate_over_alternatives;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var state = tmp;
      var output = state.output_1.copy_1tks5_k$();
      var inputPosition = state.inputPosition_1;
      var parserStructure = state.parserStructure_1;
      // Inline function 'kotlin.run' call
      $l$block: {
        var inductionVariable = 0;
        var last = parserStructure.operations_1.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var ix = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlinx.datetime.internal.format.parser.ParseResult.match' call
            var this_0 = parserStructure.operations_1.get_c1px32_k$(ix).consume_ew3o91_k$(output, input, inputPosition);
            var tmp0_subject = _ParseResult___get_value__impl__86mnxf(this_0);
            if (typeof tmp0_subject === 'number') {
              inputPosition = _ParseResult___get_value__impl__86mnxf(this_0);
            } else {
              if (tmp0_subject instanceof ParseError) {
                var it = _ParseResult___get_value__impl__86mnxf(this_0);
                errors.add_utx5q5_k$(it);
                break $l$block;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected parse result: ' + toString(_ParseResult___get_value__impl__86mnxf(this_0));
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
           while (inductionVariable <= last);
        if (parserStructure.followedBy_1.isEmpty_y1axqb_k$()) {
          if (false || inputPosition === charSequenceLength(input)) {
            return output;
          } else {
            var tmp_0 = inputPosition;
            var it_0 = new ParseError(tmp_0, Parser$match$lambda);
            errors.add_utx5q5_k$(it_0);
          }
        } else {
          var inductionVariable_0 = parserStructure.followedBy_1.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var ix_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              parseOptions.add_utx5q5_k$(new ParserState(output, parserStructure.followedBy_1.get_c1px32_k$(ix_0), inputPosition));
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    // Inline function 'kotlin.collections.sortByDescending' call
    if (errors.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.comparisons.compareByDescending' call
      var tmp_1 = Parser$match$lambda_0;
      var tmp$ret$8 = new sam$kotlin_Comparator$0(tmp_1);
      sortWith(errors, tmp$ret$8);
    }
    throw new ParseException(errors);
  }
  function Parser__match$default_impl_x2xlti($this, input, initialContainer, startIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    var tmp;
    if ($super === VOID) {
      tmp = Parser__match_impl_nzt83d($this, input, initialContainer, startIndex);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Parser(tmp_0)).match_pog3ge_k$.call(new Parser($this), input, initialContainer, startIndex);
    }
    return tmp;
  }
  function Parser__matchOrNull_impl_yx0kgz($this, input, initialContainer, startIndex) {
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse' call
    var parseOptions = mutableListOf([new ParserState(initialContainer, _get_commands__a20n1($this), startIndex)]);
    iterate_over_alternatives: while (true) {
      var tmp0_elvis_lhs = removeLastOrNull(parseOptions);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break iterate_over_alternatives;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var state = tmp;
      var output = state.output_1.copy_1tks5_k$();
      var inputPosition = state.inputPosition_1;
      var parserStructure = state.parserStructure_1;
      // Inline function 'kotlin.run' call
      $l$block: {
        var inductionVariable = 0;
        var last = parserStructure.operations_1.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var ix = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlinx.datetime.internal.format.parser.ParseResult.match' call
            var this_0 = parserStructure.operations_1.get_c1px32_k$(ix).consume_ew3o91_k$(output, input, inputPosition);
            var tmp0_subject = _ParseResult___get_value__impl__86mnxf(this_0);
            if (typeof tmp0_subject === 'number') {
              inputPosition = _ParseResult___get_value__impl__86mnxf(this_0);
            } else {
              if (tmp0_subject instanceof ParseError) {
                _ParseResult___get_value__impl__86mnxf(this_0);
                break $l$block;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected parse result: ' + toString(_ParseResult___get_value__impl__86mnxf(this_0));
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
           while (inductionVariable <= last);
        if (parserStructure.followedBy_1.isEmpty_y1axqb_k$()) {
          if (false || inputPosition === charSequenceLength(input)) {
            return output;
          } else {
            var tmp_0 = inputPosition;
            new ParseError(tmp_0, Parser$matchOrNull$lambda);
          }
        } else {
          var inductionVariable_0 = parserStructure.followedBy_1.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var ix_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              parseOptions.add_utx5q5_k$(new ParserState(output, parserStructure.followedBy_1.get_c1px32_k$(ix_0), inputPosition));
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    return null;
  }
  function Parser__matchOrNull$default_impl_e6vq3k($this, input, initialContainer, startIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    var tmp;
    if ($super === VOID) {
      tmp = Parser__matchOrNull_impl_yx0kgz($this, input, initialContainer, startIndex);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Parser(tmp_0)).matchOrNull_1t7l9k_k$.call(new Parser($this), input, initialContainer, startIndex);
    }
    return tmp;
  }
  function ParserState(output, parserStructure, inputPosition) {
    this.output_1 = output;
    this.parserStructure_1 = parserStructure;
    this.inputPosition_1 = inputPosition;
  }
  protoOf(ParserState).get_output_hs4j62_k$ = function () {
    return this.output_1;
  };
  protoOf(ParserState).get_parserStructure_anduzv_k$ = function () {
    return this.parserStructure_1;
  };
  protoOf(ParserState).get_inputPosition_jmowru_k$ = function () {
    return this.inputPosition_1;
  };
  function Parser__toString_impl_x33iea($this) {
    return 'Parser(commands=' + $this.toString() + ')';
  }
  function Parser__hashCode_impl_bbxllf($this) {
    return hashCode($this);
  }
  function Parser__equals_impl_djxokv($this, other) {
    if (!(other instanceof Parser))
      return false;
    var tmp0_other_with_cast = other instanceof Parser ? other.commands_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
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
  function Parser$parse$lambda() {
    return 'There is more input to consume';
  }
  function Parser$match$lambda() {
    return 'There is more input to consume';
  }
  function Parser$match$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.get_position_jfponi_k$();
    var tmp$ret$1 = a.get_position_jfponi_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function Parser$matchOrNull$lambda() {
    return 'There is more input to consume';
  }
  function Parser(commands) {
    this.commands_1 = commands;
  }
  protoOf(Parser).toString = function () {
    return Parser__toString_impl_x33iea(this.commands_1);
  };
  protoOf(Parser).hashCode = function () {
    return Parser__hashCode_impl_bbxllf(this.commands_1);
  };
  protoOf(Parser).equals = function (other) {
    return Parser__equals_impl_djxokv(this.commands_1, other);
  };
  function ParserStructure(operations, followedBy) {
    this.operations_1 = operations;
    this.followedBy_1 = followedBy;
  }
  protoOf(ParserStructure).get_operations_k3re6j_k$ = function () {
    return this.operations_1;
  };
  protoOf(ParserStructure).get_followedBy_hcb40g_k$ = function () {
    return this.followedBy_1;
  };
  protoOf(ParserStructure).toString = function () {
    return joinToString(this.operations_1, ', ') + '(' + joinToString(this.followedBy_1, ';') + ')';
  };
  function ParseException(errors) {
    Exception_init_$Init$(formatError(errors), this);
    captureStack(this, ParseException);
  }
  function concat(_this__u8e3s4) {
    // Inline function 'kotlin.collections.foldRight' call
    var accumulator = new ParserStructure(emptyList(), emptyList());
    if (!_this__u8e3s4.isEmpty_y1axqb_k$()) {
      var iterator = _this__u8e3s4.listIterator_70e65o_k$(_this__u8e3s4.get_size_woubt6_k$());
      while (iterator.hasPrevious_qh0629_k$()) {
        var tmp0 = iterator.previous_l2dfd5_k$();
        var acc = accumulator;
        accumulator = concat$append(tmp0, acc);
      }
    }
    var naiveParser = accumulator;
    return concat$simplify(naiveParser, emptyList());
  }
  function formatError(errors) {
    if (errors.get_size_woubt6_k$() === 1) {
      return 'Position ' + errors.get_c1px32_k$(0).get_position_jfponi_k$() + ': ' + errors.get_c1px32_k$(0).get_message_h23axq_k$()();
    }
    var averageMessageLength = 33;
    var tmp0_buffer = StringBuilder_init_$Create$_0(imul(averageMessageLength, errors.get_size_woubt6_k$()));
    return joinTo(errors, tmp0_buffer, ', ', 'Errors: ', VOID, VOID, VOID, formatError$lambda).toString();
  }
  function concat$append(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4.followedBy_1.isEmpty_y1axqb_k$()) {
      tmp = new ParserStructure(plus_0(_this__u8e3s4.operations_1, other.operations_1), other.followedBy_1);
    } else {
      // Inline function 'kotlin.collections.map' call
      var this_0 = _this__u8e3s4.followedBy_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        var tmp$ret$0 = concat$append(item, other);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      tmp = new ParserStructure(_this__u8e3s4.operations_1, destination);
    }
    return tmp;
  }
  function concat$simplify(_this__u8e3s4, unconditionalModifications) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var newOperations = ArrayList_init_$Create$_0();
    var currentNumberSpan = null;
    var unconditionalModificationsForTails = toMutableList(unconditionalModifications);
    var _iterator__ex2g4s = _this__u8e3s4.operations_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var op = _iterator__ex2g4s.next_20eer_k$();
      if (op instanceof NumberSpanParserOperation) {
        if (!(currentNumberSpan == null)) {
          currentNumberSpan.addAll_4lagoh_k$(op.get_consumers_1jv82c_k$());
        } else {
          currentNumberSpan = toMutableList(op.get_consumers_1jv82c_k$());
        }
      } else {
        if (op instanceof UnconditionalModification) {
          unconditionalModificationsForTails.add_utx5q5_k$(op);
        } else {
          if (!(currentNumberSpan == null)) {
            newOperations.add_utx5q5_k$(new NumberSpanParserOperation(currentNumberSpan));
            currentNumberSpan = null;
          }
          newOperations.add_utx5q5_k$(op);
        }
      }
    }
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = _this__u8e3s4.followedBy_1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s_0.next_20eer_k$();
      var simplified = concat$simplify(element, unconditionalModificationsForTails);
      var tmp;
      if (simplified.operations_1.isEmpty_y1axqb_k$()) {
        // Inline function 'kotlin.collections.ifEmpty' call
        var this_0 = simplified.followedBy_1;
        var tmp_0;
        if (this_0.isEmpty_y1axqb_k$()) {
          tmp_0 = listOf(simplified);
        } else {
          tmp_0 = this_0;
        }
        tmp = tmp_0;
      } else {
        tmp = listOf(simplified);
      }
      var list = tmp;
      addAll(destination, list);
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (destination.isEmpty_y1axqb_k$()) {
      tmp_1 = listOf(new ParserStructure(unconditionalModificationsForTails, emptyList()));
    } else {
      tmp_1 = destination;
    }
    var mergedTails = tmp_1;
    var tmp_2;
    if (currentNumberSpan == null) {
      tmp_2 = new ParserStructure(newOperations, mergedTails);
    } else {
      var tmp$ret$8;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var tmp_3;
        if (isInterface(mergedTails, Collection)) {
          tmp_3 = mergedTails.isEmpty_y1axqb_k$();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
        var _iterator__ex2g4s_1 = mergedTails.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
          var element_0 = _iterator__ex2g4s_1.next_20eer_k$();
          var tmp0_safe_receiver = firstOrNull(element_0.operations_1);
          var tmp_4;
          if (tmp0_safe_receiver == null) {
            tmp_4 = null;
          } else {
            // Inline function 'kotlin.let' call
            tmp_4 = tmp0_safe_receiver instanceof NumberSpanParserOperation;
          }
          if (tmp_4 === true) {
            tmp$ret$8 = false;
            break $l$block_0;
          }
        }
        tmp$ret$8 = true;
      }
      if (tmp$ret$8) {
        newOperations.add_utx5q5_k$(new NumberSpanParserOperation(currentNumberSpan));
        tmp_2 = new ParserStructure(newOperations, mergedTails);
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(mergedTails, 10));
        var _iterator__ex2g4s_2 = mergedTails.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
          var item = _iterator__ex2g4s_2.next_20eer_k$();
          var firstOperation = firstOrNull(item.operations_1);
          var tmp_5;
          if (firstOperation instanceof NumberSpanParserOperation) {
            tmp_5 = new ParserStructure(plus_0(listOf(new NumberSpanParserOperation(plus_0(currentNumberSpan, firstOperation.get_consumers_1jv82c_k$()))), drop(item.operations_1, 1)), item.followedBy_1);
          } else {
            if (firstOperation == null) {
              tmp_5 = new ParserStructure(listOf(new NumberSpanParserOperation(currentNumberSpan)), item.followedBy_1);
            } else {
              tmp_5 = new ParserStructure(plus_0(listOf(new NumberSpanParserOperation(currentNumberSpan)), item.operations_1), item.followedBy_1);
            }
          }
          var tmp$ret$12 = tmp_5;
          destination_0.add_utx5q5_k$(tmp$ret$12);
        }
        var newTails = destination_0;
        tmp_2 = new ParserStructure(newOperations, newTails);
      }
    }
    return tmp_2;
  }
  function formatError$lambda(it) {
    return 'position ' + it.get_position_jfponi_k$() + ": '" + it.get_message_h23axq_k$()() + "'";
  }
  function spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name, withMinus) {
    withMinus = withMinus === VOID ? false : withMinus;
    var minNumberLength = (minDigits == null ? 1 : minDigits) + (withMinus ? 1 : 0) | 0;
    var tmp;
    if (maxDigits == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = withMinus ? maxDigits + 1 | 0 : maxDigits;
    }
    var tmp2_elvis_lhs = tmp;
    var maxNumberLength = tmp2_elvis_lhs == null ? 2147483647 : tmp2_elvis_lhs;
    var spacePadding_0 = spacePadding == null ? 0 : spacePadding;
    // Inline function 'kotlin.comparisons.minOf' call
    var maxPaddedNumberLength = Math.min(maxNumberLength, spacePadding_0);
    if (minNumberLength >= maxPaddedNumberLength)
      return spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, minNumberLength, maxNumberLength);
    var accumulated = spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, minNumberLength, minNumberLength);
    var inductionVariable = minNumberLength;
    if (inductionVariable < maxPaddedNumberLength)
      do {
        var accumulatedWidth = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        accumulated = new ParserStructure(emptyList(), listOf_0([spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, accumulatedWidth + 1 | 0, accumulatedWidth + 1 | 0), concat(listOf_0([new ParserStructure(listOf(new PlainStringParserOperation(' ')), emptyList()), accumulated]))]));
      }
       while (inductionVariable < maxPaddedNumberLength);
    var tmp_0;
    if (spacePadding_0 > maxNumberLength) {
      var prepadding = new PlainStringParserOperation(repeat(' ', spacePadding_0 - maxNumberLength | 0));
      tmp_0 = concat(listOf_0([new ParserStructure(listOf(prepadding), emptyList()), accumulated]));
    } else if (spacePadding_0 === maxNumberLength) {
      tmp_0 = accumulated;
    } else {
      var r = new ParserStructure(emptyList(), listOf_0([spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, spacePadding_0 + 1 | 0, maxNumberLength), accumulated]));
      tmp_0 = r;
    }
    return tmp_0;
  }
  function AssignableField() {
  }
  function _get_setter__e3slw_2($this) {
    return $this.setter_1;
  }
  function _get_whatThisExpects__4pg11j($this) {
    return $this.whatThisExpects_1;
  }
  function TrieNode(children, isTerminal) {
    var tmp;
    if (children === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$_0();
    } else {
      tmp = children;
    }
    children = tmp;
    isTerminal = isTerminal === VOID ? false : isTerminal;
    this.children_1 = children;
    this.isTerminal_1 = isTerminal;
  }
  protoOf(TrieNode).get_children_4cwbp4_k$ = function () {
    return this.children_1;
  };
  protoOf(TrieNode).set_isTerminal_fxlojy_k$ = function (_set____db54di) {
    this.isTerminal_1 = _set____db54di;
  };
  protoOf(TrieNode).get_isTerminal_i7a6hb_k$ = function () {
    return this.isTerminal_1;
  };
  function _get_trie__dedo4x($this) {
    return $this.trie_1;
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
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
  protoOf(sam$kotlin_Comparator$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function _init_$reduceTrie(trie) {
    var _iterator__ex2g4s = trie.children_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var child = _iterator__ex2g4s.next_20eer_k$().component2_7eebsb_k$();
      _init_$reduceTrie(child);
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var newChildren = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = trie.children_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var _destruct__k2r9zo = _iterator__ex2g4s_0.next_20eer_k$();
      var key = _destruct__k2r9zo.component1_7eebsc_k$();
      var child_0 = _destruct__k2r9zo.component2_7eebsb_k$();
      if (!child_0.isTerminal_1 && child_0.children_1.get_size_woubt6_k$() === 1) {
        var _destruct__k2r9zo_0 = single(child_0.children_1);
        var grandChildKey = _destruct__k2r9zo_0.component1_7eebsc_k$();
        var grandChild = _destruct__k2r9zo_0.component2_7eebsb_k$();
        newChildren.add_utx5q5_k$(to(key + grandChildKey, grandChild));
      } else {
        newChildren.add_utx5q5_k$(to(key, child_0));
      }
    }
    trie.children_1.clear_j9egeb_k$();
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = StringSetParserOperation$reduceTrie$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
    var tmp$ret$2 = sortedWith(newChildren, tmp$ret$1);
    trie.children_1.addAll_4lagoh_k$(tmp$ret$2);
  }
  function StringSetParserOperation$lambda($key) {
    return function (it) {
      var tmp$ret$0 = it.get_first_irdx8n_k$();
      return compareValues(tmp$ret$0, $key);
    };
  }
  function StringSetParserOperation$consume$lambda(this$0, $input, $startIndex, $index) {
    return function () {
      var tmp0 = $input;
      var tmp2 = $startIndex;
      // Inline function 'kotlin.text.substring' call
      var endIndex = $index._v;
      var tmp$ret$0 = toString(charSequenceSubSequence(tmp0, tmp2, endIndex));
      return 'Expected ' + this$0.whatThisExpects_1 + ' but got ' + tmp$ret$0;
    };
  }
  function StringSetParserOperation$reduceTrie$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.get_first_irdx8n_k$();
    var tmp$ret$1 = b.get_first_irdx8n_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function StringSetParserOperation(strings, setter, whatThisExpects) {
    this.setter_1 = setter;
    this.whatThisExpects_1 = whatThisExpects;
    this.trie_1 = new TrieNode();
    var _iterator__ex2g4s = strings.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var string = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.text.isNotEmpty' call
      // Inline function 'kotlin.require' call
      if (!(charSequenceLength(string) > 0)) {
        var message = 'Found an empty string in ' + this.whatThisExpects_1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var node = this.trie_1;
      var inductionVariable = 0;
      var last = string.length;
      while (inductionVariable < last) {
        var char = charCodeAt(string, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0 = node.children_1;
        // Inline function 'kotlin.collections.binarySearchBy' call
        var key = toString_0(char);
        var toIndex = tmp0.get_size_woubt6_k$();
        var searchResult = binarySearch(tmp0, 0, toIndex, StringSetParserOperation$lambda(key));
        var tmp;
        if (searchResult < 0) {
          // Inline function 'kotlin.also' call
          var this_0 = new TrieNode();
          node.children_1.add_dl6gt3_k$((-searchResult | 0) - 1 | 0, to(toString_0(char), this_0));
          tmp = this_0;
        } else {
          tmp = node.children_1.get_c1px32_k$(searchResult).get_second_jf7fjx_k$();
        }
        node = tmp;
      }
      // Inline function 'kotlin.require' call
      if (!!node.isTerminal_1) {
        var message_0 = "The string '" + string + "' was passed several times";
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      node.isTerminal_1 = true;
    }
    _init_$reduceTrie(this.trie_1);
  }
  protoOf(StringSetParserOperation).consume_ew3o91_k$ = function (storage, input, startIndex) {
    var node = this.trie_1;
    var index = {_v: startIndex};
    var lastMatch = null;
    loop: while (index._v <= charSequenceLength(input)) {
      if (node.isTerminal_1)
        lastMatch = index._v;
      var _iterator__ex2g4s = node.children_1.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
        var key = _destruct__k2r9zo.component1_7eebsc_k$();
        var child = _destruct__k2r9zo.component2_7eebsb_k$();
        if (startsWith(input, key, index._v)) {
          node = child;
          index._v = index._v + key.length | 0;
          continue loop;
        }
      }
      break loop;
    }
    var tmp;
    if (!(lastMatch == null)) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = lastMatch;
      var tmp$ret$0 = toString(charSequenceSubSequence(input, startIndex, endIndex));
      tmp = setWithoutReassigning_0(this.setter_1, storage, tmp$ret$0, startIndex, lastMatch);
    } else {
      var tmp_0 = Companion_getInstance_24();
      tmp = tmp_0.Error_ca056s_k$(startIndex, StringSetParserOperation$consume$lambda(this, input, startIndex, index));
    }
    return tmp;
  };
  function _get_minLength__vbub2f_1($this) {
    return $this.minLength_1;
  }
  function _get_isFlexible__uf3yfq($this) {
    return $this.isFlexible_1;
  }
  function _get_whatThisExpects__4pg11j_0($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.consumers_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var length = item.get_length_g42xv3_k$();
      var tmp$ret$0 = (length == null ? 'at least one digit' : '' + length + ' digits') + (' for ' + item.get_whatThisExpects_s3n635_k$());
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var consumerLengths = destination;
    var tmp;
    if ($this.isFlexible_1) {
      tmp = 'a number with at least ' + $this.minLength_1 + ' digits: ' + toString(consumerLengths);
    } else {
      tmp = 'a number with exactly ' + $this.minLength_1 + ' digits: ' + toString(consumerLengths);
    }
    return tmp;
  }
  function NumberSpanParserOperation$consume$lambda(this$0) {
    return function () {
      return 'Unexpected end of input: yet to parse ' + _get_whatThisExpects__4pg11j_0(this$0);
    };
  }
  function NumberSpanParserOperation$consume$lambda_0($digitsInRow, this$0) {
    return function () {
      return 'Only found ' + $digitsInRow._v + ' digits in a row, but need to parse ' + _get_whatThisExpects__4pg11j_0(this$0);
    };
  }
  function NumberSpanParserOperation$consume$lambda_1($numberString, this$0, $i, $error) {
    return function () {
      return "Can not interpret the string '" + $numberString + "' as " + this$0.consumers_1.get_c1px32_k$($i).get_whatThisExpects_s3n635_k$() + ': ' + $error.errorMessage_jwdivz_k$();
    };
  }
  function NumberSpanParserOperation(consumers) {
    this.consumers_1 = consumers;
    var tmp = this;
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = this.consumers_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp_0 = sum;
      var tmp0_elvis_lhs = element.get_length_g42xv3_k$();
      sum = tmp_0 + (tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs) | 0;
    }
    tmp.minLength_1 = sum;
    var tmp_1 = this;
    var tmp0 = this.consumers_1;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_2;
      if (isInterface(tmp0, Collection)) {
        tmp_2 = tmp0.isEmpty_y1axqb_k$();
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$2 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        if (element_0.get_length_g42xv3_k$() == null) {
          tmp$ret$2 = true;
          break $l$block_0;
        }
      }
      tmp$ret$2 = false;
    }
    tmp_1.isFlexible_1 = tmp$ret$2;
    var tmp0_0 = this.consumers_1;
    var tmp$ret$4;
    $l$block_2: {
      // Inline function 'kotlin.collections.all' call
      var tmp_3;
      if (isInterface(tmp0_0, Collection)) {
        tmp_3 = tmp0_0.isEmpty_y1axqb_k$();
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        tmp$ret$4 = true;
        break $l$block_2;
      }
      var _iterator__ex2g4s_1 = tmp0_0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
        var element_1 = _iterator__ex2g4s_1.next_20eer_k$();
        var tmp0_elvis_lhs_0 = element_1.get_length_g42xv3_k$();
        if (!((tmp0_elvis_lhs_0 == null ? 2147483647 : tmp0_elvis_lhs_0) > 0)) {
          tmp$ret$4 = false;
          break $l$block_2;
        }
      }
      tmp$ret$4 = true;
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!tmp$ret$4) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_1 = this.consumers_1;
    var tmp$ret$9;
    $l$block_3: {
      // Inline function 'kotlin.collections.count' call
      var tmp_4;
      if (isInterface(tmp0_1, Collection)) {
        tmp_4 = tmp0_1.isEmpty_y1axqb_k$();
      } else {
        tmp_4 = false;
      }
      if (tmp_4) {
        tmp$ret$9 = 0;
        break $l$block_3;
      }
      var count = 0;
      var _iterator__ex2g4s_2 = tmp0_1.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
        var element_2 = _iterator__ex2g4s_2.next_20eer_k$();
        if (element_2.get_length_g42xv3_k$() == null) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$9 = count;
    }
    // Inline function 'kotlin.require' call
    if (!(tmp$ret$9 <= 1)) {
      // Inline function 'kotlin.collections.filter' call
      var tmp0_2 = this.consumers_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s_3 = tmp0_2.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_3.hasNext_bitz1p_k$()) {
        var element_3 = _iterator__ex2g4s_3.next_20eer_k$();
        if (element_3.get_length_g42xv3_k$() == null) {
          destination.add_utx5q5_k$(element_3);
        }
      }
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
      var _iterator__ex2g4s_4 = destination.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_4.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s_4.next_20eer_k$();
        var tmp$ret$14 = item.get_whatThisExpects_s3n635_k$();
        destination_0.add_utx5q5_k$(tmp$ret$14);
      }
      var fieldNames = destination_0;
      var message_0 = 'At most one variable-length numeric field in a row is allowed, but got several: ' + toString(fieldNames) + '. ' + "Parsing is undefined: for example, with variable-length month number and variable-length day of month, '111' can be parsed as Jan 11th or Nov 1st.";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(NumberSpanParserOperation).get_consumers_1jv82c_k$ = function () {
    return this.consumers_1;
  };
  protoOf(NumberSpanParserOperation).consume_ew3o91_k$ = function (storage, input, startIndex) {
    if ((startIndex + this.minLength_1 | 0) > charSequenceLength(input)) {
      var tmp = Companion_getInstance_24();
      return tmp.Error_ca056s_k$(startIndex, NumberSpanParserOperation$consume$lambda(this));
    }
    var digitsInRow = {_v: 0};
    while ((startIndex + digitsInRow._v | 0) < charSequenceLength(input) && isAsciiDigit(charSequenceGet(input, startIndex + digitsInRow._v | 0))) {
      digitsInRow._v = digitsInRow._v + 1 | 0;
      digitsInRow._v;
    }
    if (digitsInRow._v < this.minLength_1) {
      var tmp_0 = Companion_getInstance_24();
      return tmp_0.Error_ca056s_k$(startIndex, NumberSpanParserOperation$consume$lambda_0(digitsInRow, this));
    }
    var index = startIndex;
    var inductionVariable = 0;
    var last = this.consumers_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0_elvis_lhs = this.consumers_1.get_c1px32_k$(i).get_length_g42xv3_k$();
        var length = tmp0_elvis_lhs == null ? (digitsInRow._v - this.minLength_1 | 0) + 1 | 0 : tmp0_elvis_lhs;
        var error = this.consumers_1.get_c1px32_k$(i).consume_o77i9d_k$(storage, input, index, index + length | 0);
        if (!(error == null)) {
          var tmp2 = index;
          // Inline function 'kotlin.text.substring' call
          var endIndex = index + length | 0;
          var numberString = toString(charSequenceSubSequence(input, tmp2, endIndex));
          var tmp_1 = Companion_getInstance_24();
          var tmp_2 = index;
          return tmp_1.Error_ca056s_k$(tmp_2, NumberSpanParserOperation$consume$lambda_1(numberString, this, i, error));
        }
        index = index + length | 0;
      }
       while (inductionVariable <= last);
    return Companion_getInstance_24().Ok_6vkbj8_k$(index);
  };
  protoOf(NumberSpanParserOperation).toString = function () {
    return _get_whatThisExpects__4pg11j_0(this);
  };
  function SignedIntParser(minDigits, maxDigits, spacePadding, setter, name, plusOnExceedsWidth) {
    var parsers = mutableListOf([spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name, true)]);
    if (!(plusOnExceedsWidth == null)) {
      parsers.add_utx5q5_k$(spaceAndZeroPaddedUnsignedInt(minDigits, plusOnExceedsWidth, spacePadding, setter, name));
      parsers.add_utx5q5_k$(new ParserStructure(listOf_0([new PlainStringParserOperation('+'), new NumberSpanParserOperation(listOf(new UnsignedIntConsumer(plusOnExceedsWidth + 1 | 0, maxDigits, setter, name, false)))]), emptyList()));
    } else {
      parsers.add_utx5q5_k$(spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name));
    }
    return new ParserStructure(emptyList(), parsers);
  }
  function ReducedIntParser(digits, base, setter, name) {
    return new ParserStructure(emptyList(), listOf_0([new ParserStructure(listOf(new NumberSpanParserOperation(listOf(new ReducedIntConsumer(digits, setter, name, base)))), emptyList()), new ParserStructure(listOf_0([new PlainStringParserOperation('+'), new NumberSpanParserOperation(listOf(new UnsignedIntConsumer(null, null, setter, name, false)))]), emptyList()), new ParserStructure(listOf_0([new PlainStringParserOperation('-'), new NumberSpanParserOperation(listOf(new UnsignedIntConsumer(null, null, setter, name, true)))]), emptyList())]));
  }
  function ParserOperation() {
  }
  function PlainStringParserOperation$consume$lambda(this$0) {
    return function () {
      return "Unexpected end of input: yet to parse '" + this$0.string_1 + "'";
    };
  }
  function PlainStringParserOperation$consume$lambda_0(this$0, $input, $startIndex, $i) {
    return function () {
      var tmp0 = $input;
      var tmp2 = $startIndex;
      // Inline function 'kotlin.text.substring' call
      var endIndex = ($startIndex + $i | 0) + 1 | 0;
      var tmp$ret$0 = toString(charSequenceSubSequence(tmp0, tmp2, endIndex));
      return 'Expected ' + this$0.string_1 + ' but got ' + tmp$ret$0;
    };
  }
  function PlainStringParserOperation(string) {
    this.string_1 = string;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.string_1;
    // Inline function 'kotlin.require' call
    if (!(charSequenceLength(this_0) > 0)) {
      var message = 'Empty string is not allowed';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charCodeAt(this.string_1, 0))) {
      var message_0 = "String '" + this.string_1 + "' starts with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charCodeAt(this.string_1, this.string_1.length - 1 | 0))) {
      var message_1 = "String '" + this.string_1 + "' ends with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  protoOf(PlainStringParserOperation).get_string_jnpst6_k$ = function () {
    return this.string_1;
  };
  protoOf(PlainStringParserOperation).consume_ew3o91_k$ = function (storage, input, startIndex) {
    if ((startIndex + this.string_1.length | 0) > charSequenceLength(input)) {
      var tmp = Companion_getInstance_24();
      return tmp.Error_ca056s_k$(startIndex, PlainStringParserOperation$consume$lambda(this));
    }
    var inductionVariable = 0;
    var last = charSequenceLength(this.string_1) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet(input, startIndex + i | 0) === charCodeAt(this.string_1, i))) {
          var tmp_0 = Companion_getInstance_24();
          return tmp_0.Error_ca056s_k$(startIndex, PlainStringParserOperation$consume$lambda_0(this, input, startIndex, i));
        }
      }
       while (inductionVariable <= last);
    return Companion_getInstance_24().Ok_6vkbj8_k$(startIndex + this.string_1.length | 0);
  };
  protoOf(PlainStringParserOperation).toString = function () {
    return "'" + this.string_1 + "'";
  };
  function _get_isNegativeSetter__oxw04t($this) {
    return $this.isNegativeSetter_1;
  }
  function _get_withPlusSign__em2ueq($this) {
    return $this.withPlusSign_1;
  }
  function _get_whatThisExpects__4pg11j_1($this) {
    return $this.whatThisExpects_1;
  }
  function SignParser$consume$lambda(this$0, $char) {
    return function () {
      return 'Expected ' + this$0.whatThisExpects_1 + ' but got ' + toString_0($char);
    };
  }
  function SignParser(isNegativeSetter, withPlusSign, whatThisExpects) {
    this.isNegativeSetter_1 = isNegativeSetter;
    this.withPlusSign_1 = withPlusSign;
    this.whatThisExpects_1 = whatThisExpects;
  }
  protoOf(SignParser).consume_ew3o91_k$ = function (storage, input, startIndex) {
    if (startIndex >= charSequenceLength(input))
      return Companion_getInstance_24().Ok_6vkbj8_k$(startIndex);
    var char = charSequenceGet(input, startIndex);
    if (char === _Char___init__impl__6a9atx(45)) {
      this.isNegativeSetter_1(storage, true);
      return Companion_getInstance_24().Ok_6vkbj8_k$(startIndex + 1 | 0);
    }
    if (char === _Char___init__impl__6a9atx(43) && this.withPlusSign_1) {
      this.isNegativeSetter_1(storage, false);
      return Companion_getInstance_24().Ok_6vkbj8_k$(startIndex + 1 | 0);
    }
    var tmp = Companion_getInstance_24();
    return tmp.Error_ca056s_k$(startIndex, SignParser$consume$lambda(this, char));
  };
  protoOf(SignParser).toString = function () {
    return this.whatThisExpects_1;
  };
  function _get_operation__lk4gty($this) {
    return $this.operation_1;
  }
  function UnconditionalModification(operation) {
    this.operation_1 = operation;
  }
  protoOf(UnconditionalModification).consume_ew3o91_k$ = function (storage, input, startIndex) {
    this.operation_1(storage);
    return Companion_getInstance_24().Ok_6vkbj8_k$(startIndex);
  };
  function setWithoutReassigning_0(_this__u8e3s4, receiver, value, position, nextIndex) {
    var conflictingValue = _this__u8e3s4.trySetWithoutReassigning_itlg4a_k$(receiver, value);
    var tmp;
    if (conflictingValue === null) {
      tmp = Companion_getInstance_24().Ok_6vkbj8_k$(nextIndex);
    } else {
      var tmp_0 = Companion_getInstance_24();
      tmp = tmp_0.Error_ca056s_k$(position, setWithoutReassigning$lambda(conflictingValue, value, _this__u8e3s4));
    }
    return tmp;
  }
  var State_START_instance;
  var State_AFTER_PREFIX_instance;
  var State_AFTER_SIGN_instance;
  var State_AFTER_INIT_SIGN_instance;
  var State_AFTER_HOUR_instance;
  var State_AFTER_INIT_HOUR_instance;
  var State_AFTER_MINUTE_instance;
  var State_AFTER_COLON_MINUTE_instance;
  var State_IN_PART_instance;
  var State_AFTER_SLASH_instance;
  var State_END_instance;
  function values_4() {
    return [State_START_getInstance(), State_AFTER_PREFIX_getInstance(), State_AFTER_SIGN_getInstance(), State_AFTER_INIT_SIGN_getInstance(), State_AFTER_HOUR_getInstance(), State_AFTER_INIT_HOUR_getInstance(), State_AFTER_MINUTE_getInstance(), State_AFTER_COLON_MINUTE_getInstance(), State_IN_PART_getInstance(), State_AFTER_SLASH_getInstance(), State_END_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'START':
        return State_START_getInstance();
      case 'AFTER_PREFIX':
        return State_AFTER_PREFIX_getInstance();
      case 'AFTER_SIGN':
        return State_AFTER_SIGN_getInstance();
      case 'AFTER_INIT_SIGN':
        return State_AFTER_INIT_SIGN_getInstance();
      case 'AFTER_HOUR':
        return State_AFTER_HOUR_getInstance();
      case 'AFTER_INIT_HOUR':
        return State_AFTER_INIT_HOUR_getInstance();
      case 'AFTER_MINUTE':
        return State_AFTER_MINUTE_getInstance();
      case 'AFTER_COLON_MINUTE':
        return State_AFTER_COLON_MINUTE_getInstance();
      case 'IN_PART':
        return State_IN_PART_getInstance();
      case 'AFTER_SLASH':
        return State_AFTER_SLASH_getInstance();
      case 'END':
        return State_END_getInstance();
      default:
        State_initEntries();
        THROW_IAE('No enum constant kotlinx.datetime.internal.format.parser.TimeZoneParserOperation.Companion.State.' + value);
        break;
    }
  }
  function get_entries_4() {
    if ($ENTRIES_4 == null)
      $ENTRIES_4 = enumEntries(values_4());
    return $ENTRIES_4;
  }
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_getInstance();
    State_entriesInitialized = true;
    State_START_instance = new State('START', 0);
    State_AFTER_PREFIX_instance = new State('AFTER_PREFIX', 1);
    State_AFTER_SIGN_instance = new State('AFTER_SIGN', 2);
    State_AFTER_INIT_SIGN_instance = new State('AFTER_INIT_SIGN', 3);
    State_AFTER_HOUR_instance = new State('AFTER_HOUR', 4);
    State_AFTER_INIT_HOUR_instance = new State('AFTER_INIT_HOUR', 5);
    State_AFTER_MINUTE_instance = new State('AFTER_MINUTE', 6);
    State_AFTER_COLON_MINUTE_instance = new State('AFTER_COLON_MINUTE', 7);
    State_IN_PART_instance = new State('IN_PART', 8);
    State_AFTER_SLASH_instance = new State('AFTER_SLASH', 9);
    State_END_instance = new State('END', 10);
  }
  var $ENTRIES_4;
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function onTrue($this, _this__u8e3s4, action) {
    var tmp;
    if (_this__u8e3s4) {
      action();
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function onFalse($this, _this__u8e3s4, action) {
    var tmp;
    if (_this__u8e3s4) {
      tmp = true;
    } else {
      action();
      tmp = false;
    }
    return tmp;
  }
  function validateTimeZone($this, input, startIndex) {
    var index = {_v: startIndex};
    var state = State_START_getInstance();
    $l$loop_6: while (index._v < charSequenceLength(input)) {
      var tmp;
      switch (state.get_ordinal_ip24qg_k$()) {
        case 0:
          var tmp_0;
          if (validateTimeZone$validatePrefix(input, index, listOf_0(['UTC', 'GMT', 'UT']))) {
            tmp_0 = State_AFTER_PREFIX_getInstance();
          } else if (validateTimeZone$validateSign(input, index)) {
            tmp_0 = State_AFTER_INIT_SIGN_getInstance();
          } else if (validateTimeZone$validateTimeZoneInitial(input, index)) {
            tmp_0 = State_IN_PART_getInstance();
          } else {
            break $l$loop_6;
          }

          tmp = tmp_0;
          break;
        case 1:
          tmp = validateTimeZone$validateSign(input, index) ? State_AFTER_SIGN_getInstance() : State_IN_PART_getInstance();
          break;
        case 2:
          tmp = validateTimeZone$validateTimeComponent(index, input, 2) ? State_AFTER_HOUR_getInstance() : State_IN_PART_getInstance();
          break;
        case 3:
          var tmp_1;
          if (validateTimeZone$validateTimeComponent(index, input, 2)) {
            tmp_1 = State_AFTER_INIT_HOUR_getInstance();
          } else if (validateTimeZone$validateTimeComponent(index, input, 1)) {
            tmp_1 = State_END_getInstance();
          } else {
            break $l$loop_6;
          }

          tmp = tmp_1;
          break;
        case 4:
          tmp = validateTimeZone$validateTimeComponentWithColon(input, index) ? State_AFTER_COLON_MINUTE_getInstance() : State_IN_PART_getInstance();
          break;
        case 5:
          var tmp_2;
          if (validateTimeZone$validateTimeComponentWithColon(input, index)) {
            tmp_2 = State_AFTER_COLON_MINUTE_getInstance();
          } else if (validateTimeZone$validateTimeComponent(index, input, 2)) {
            tmp_2 = State_AFTER_MINUTE_getInstance();
          } else {
            break $l$loop_6;
          }

          tmp = tmp_2;
          break;
        case 6:
          var tmp_3;
          if (validateTimeZone$validateTimeComponent(index, input, 2)) {
            tmp_3 = State_END_getInstance();
          } else {
            break $l$loop_6;
          }

          tmp = tmp_3;
          break;
        case 7:
          var tmp_4;
          if (validateTimeZone$validateTimeComponentWithColon(input, index)) {
            tmp_4 = State_END_getInstance();
          } else {
            break $l$loop_6;
          }

          tmp = tmp_4;
          break;
        case 8:
          var tmp_5;
          if (validateTimeZone$validateTimeZoneChar(input, index)) {
            tmp_5 = State_IN_PART_getInstance();
          } else if (validateTimeZone$validateSlash(input, index)) {
            tmp_5 = State_AFTER_SLASH_getInstance();
          } else {
            break $l$loop_6;
          }

          tmp = tmp_5;
          break;
        case 9:
          var tmp_6;
          if (validateTimeZone$validateTimeZoneInitial(input, index)) {
            tmp_6 = State_IN_PART_getInstance();
          } else {
            break $l$loop_6;
          }

          tmp = tmp_6;
          break;
        case 10:
          break $l$loop_6;
        default:
          noWhenBranchMatchedException();
          break;
      }
      state = tmp;
    }
    return index._v - (state.equals(State_AFTER_SLASH_getInstance()) || state.equals(State_AFTER_INIT_SIGN_getInstance()) ? 1 : 0) | 0;
  }
  function validateTimeZone$validatePrefix($input, index, validValues) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = validValues.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (startsWith($input, element, index._v)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.also' call
      index._v = index._v + tmp0_safe_receiver.length | 0;
      tmp = tmp0_safe_receiver;
    }
    return !(tmp == null);
  }
  function validateTimeZone$validateSign($input, index) {
    Companion_getInstance_25();
    // Inline function 'kotlinx.datetime.internal.format.parser.Companion.onTrue' call
    var tmp;
    if (listOf_0([new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(45))]).contains_aljjnj_k$(new Char(charSequenceGet($input, index._v)))) {
      index._v = index._v + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function validateTimeZone$validateTimeComponent(index, $input, length) {
    Companion_getInstance_25();
    var tmp0 = until(index._v, index._v + length | 0);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var inductionVariable = tmp0.get_first_irdx8n_k$();
      var last = tmp0.get_last_wopotb_k$();
      if (inductionVariable <= last)
        do {
          var element = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var it = element;
          var tmp0_safe_receiver = getOrNull_0($input, it);
          var tmp_0;
          var tmp_1 = tmp0_safe_receiver;
          if ((tmp_1 == null ? null : new Char(tmp_1)) == null) {
            tmp_0 = null;
          } else {
            tmp_0 = isAsciiDigit(tmp0_safe_receiver);
          }
          var tmp1_elvis_lhs = tmp_0;
          if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
         while (!(element === last));
      tmp$ret$0 = true;
    }
    // Inline function 'kotlinx.datetime.internal.format.parser.Companion.onTrue' call
    var tmp_2;
    if (tmp$ret$0) {
      index._v = index._v + length | 0;
      tmp_2 = true;
    } else {
      tmp_2 = false;
    }
    return tmp_2;
  }
  function validateTimeZone$validateTimeComponentWithColon($input, index) {
    var tmp;
    Companion_getInstance_25();
    // Inline function 'kotlinx.datetime.internal.format.parser.Companion.onTrue' call
    var tmp_0;
    if (charSequenceGet($input, index._v) === _Char___init__impl__6a9atx(58)) {
      index._v = index._v + 1 | 0;
      tmp_0 = true;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      Companion_getInstance_25();
      // Inline function 'kotlinx.datetime.internal.format.parser.Companion.onFalse' call
      var tmp_1;
      if (validateTimeZone$validateTimeComponent(index, $input, 2)) {
        tmp_1 = true;
      } else {
        index._v = index._v - 1 | 0;
        tmp_1 = false;
      }
      tmp = tmp_1;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function validateTimeZone$isTimeZoneInitial(_this__u8e3s4) {
    return isAsciiLetter(_this__u8e3s4) || _this__u8e3s4 === _Char___init__impl__6a9atx(46) || _this__u8e3s4 === _Char___init__impl__6a9atx(95);
  }
  function validateTimeZone$isTimeZoneChar(_this__u8e3s4) {
    return validateTimeZone$isTimeZoneInitial(_this__u8e3s4) || isAsciiDigit(_this__u8e3s4) || _this__u8e3s4 === _Char___init__impl__6a9atx(45) || _this__u8e3s4 === _Char___init__impl__6a9atx(43);
  }
  function validateTimeZone$validateTimeZoneInitial($input, index) {
    Companion_getInstance_25();
    // Inline function 'kotlinx.datetime.internal.format.parser.Companion.onTrue' call
    var tmp;
    if (validateTimeZone$isTimeZoneInitial(charSequenceGet($input, index._v))) {
      index._v = index._v + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function validateTimeZone$validateTimeZoneChar($input, index) {
    Companion_getInstance_25();
    // Inline function 'kotlinx.datetime.internal.format.parser.Companion.onTrue' call
    var tmp;
    if (validateTimeZone$isTimeZoneChar(charSequenceGet($input, index._v))) {
      index._v = index._v + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function validateTimeZone$validateSlash($input, index) {
    Companion_getInstance_25();
    // Inline function 'kotlinx.datetime.internal.format.parser.Companion.onTrue' call
    var tmp;
    if (charSequenceGet($input, index._v) === _Char___init__impl__6a9atx(47)) {
      index._v = index._v + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function State_START_getInstance() {
    State_initEntries();
    return State_START_instance;
  }
  function State_AFTER_PREFIX_getInstance() {
    State_initEntries();
    return State_AFTER_PREFIX_instance;
  }
  function State_AFTER_SIGN_getInstance() {
    State_initEntries();
    return State_AFTER_SIGN_instance;
  }
  function State_AFTER_INIT_SIGN_getInstance() {
    State_initEntries();
    return State_AFTER_INIT_SIGN_instance;
  }
  function State_AFTER_HOUR_getInstance() {
    State_initEntries();
    return State_AFTER_HOUR_instance;
  }
  function State_AFTER_INIT_HOUR_getInstance() {
    State_initEntries();
    return State_AFTER_INIT_HOUR_instance;
  }
  function State_AFTER_MINUTE_getInstance() {
    State_initEntries();
    return State_AFTER_MINUTE_instance;
  }
  function State_AFTER_COLON_MINUTE_getInstance() {
    State_initEntries();
    return State_AFTER_COLON_MINUTE_instance;
  }
  function State_IN_PART_getInstance() {
    State_initEntries();
    return State_IN_PART_instance;
  }
  function State_AFTER_SLASH_getInstance() {
    State_initEntries();
    return State_AFTER_SLASH_instance;
  }
  function State_END_getInstance() {
    State_initEntries();
    return State_END_instance;
  }
  function _get_setter__e3slw_3($this) {
    return $this.setter_1;
  }
  function Companion_21() {
    Companion_instance_21 = this;
  }
  var Companion_instance_21;
  function Companion_getInstance_25() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function TimeZoneParserOperation$consume$lambda() {
    return 'Invalid timezone format';
  }
  function TimeZoneParserOperation(setter) {
    Companion_getInstance_25();
    this.setter_1 = setter;
  }
  protoOf(TimeZoneParserOperation).consume_ew3o91_k$ = function (storage, input, startIndex) {
    var lastMatch = validateTimeZone(Companion_getInstance_25(), input, startIndex);
    var tmp;
    if (lastMatch > startIndex) {
      // Inline function 'kotlin.text.substring' call
      var tmp$ret$0 = toString(charSequenceSubSequence(input, startIndex, lastMatch));
      setWithoutReassigning_0(this.setter_1, storage, tmp$ret$0, startIndex, lastMatch);
      tmp = Companion_getInstance_24().Ok_6vkbj8_k$(lastMatch);
    } else {
      var tmp_0 = Companion_getInstance_24();
      tmp = tmp_0.Error_ca056s_k$(startIndex, TimeZoneParserOperation$consume$lambda);
    }
    return tmp;
  };
  function spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths($withMinus, $setter, $name, minNumberLength, maxNumberLength) {
    // Inline function 'kotlin.check' call
    if (!(maxNumberLength >= (1 + ($withMinus ? 1 : 0) | 0))) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    if ($withMinus) {
      this_0.add_utx5q5_k$(new PlainStringParserOperation('-'));
    }
    this_0.add_utx5q5_k$(new NumberSpanParserOperation(listOf(new UnsignedIntConsumer(minNumberLength - ($withMinus ? 1 : 0) | 0, maxNumberLength - ($withMinus ? 1 : 0) | 0, $setter, $name, $withMinus))));
    var tmp$ret$4 = this_0.build_nmwvly_k$();
    return new ParserStructure(tmp$ret$4, emptyList());
  }
  function setWithoutReassigning$lambda($conflictingValue, $value, $this_setWithoutReassigning) {
    return function () {
      return "Attempting to assign conflicting values '" + toString_1($conflictingValue) + "' and '" + toString_1($value) + "' to field '" + $this_setWithoutReassigning.get_name_woqyms_k$() + "'";
    };
  }
  function get_POWERS_OF_TEN() {
    _init_properties_math_kt__tgcmt4();
    return POWERS_OF_TEN;
  }
  var POWERS_OF_TEN;
  function DecimalFraction(fractionalPart, digits) {
    this.fractionalPart_1 = fractionalPart;
    this.digits_1 = digits;
    // Inline function 'kotlin.require' call
    if (!(this.digits_1 >= 0)) {
      var message = 'Digits must be non-negative, but was ' + this.digits_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DecimalFraction).get_fractionalPart_8dxf0p_k$ = function () {
    return this.fractionalPart_1;
  };
  protoOf(DecimalFraction).get_digits_cdspnz_k$ = function () {
    return this.digits_1;
  };
  protoOf(DecimalFraction).fractionalPartWithNDigits_sivm3u_k$ = function (newDigits) {
    return newDigits === this.digits_1 ? this.fractionalPart_1 : newDigits > this.digits_1 ? imul(this.fractionalPart_1, get_POWERS_OF_TEN()[newDigits - this.digits_1 | 0]) : this.fractionalPart_1 / get_POWERS_OF_TEN()[this.digits_1 - newDigits | 0] | 0;
  };
  protoOf(DecimalFraction).compareTo_8eflqd_k$ = function (other) {
    var tmp0 = this.digits_1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = other.digits_1;
    // Inline function 'kotlin.let' call
    var maxPrecision = Math.max(tmp0, b);
    return compareTo(this.fractionalPartWithNDigits_sivm3u_k$(maxPrecision), other.fractionalPartWithNDigits_sivm3u_k$(maxPrecision));
  };
  protoOf(DecimalFraction).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_8eflqd_k$(other instanceof DecimalFraction ? other : THROW_CCE());
  };
  protoOf(DecimalFraction).equals = function (other) {
    var tmp;
    if (other instanceof DecimalFraction) {
      tmp = this.compareTo_8eflqd_k$(other) === 0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DecimalFraction).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    var denominator = get_POWERS_OF_TEN()[this.digits_1];
    this_0.append_uppzia_k$(this.fractionalPart_1 / denominator | 0);
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(46));
    this_0.append_22ad7x_k$(removePrefix((denominator + (this.fractionalPart_1 % denominator | 0) | 0).toString(), '1'));
    return this_0.toString();
  };
  protoOf(DecimalFraction).hashCode = function () {
    throw UnsupportedOperationException_init_$Create$('DecimalFraction is not supposed to be used as a hash key');
  };
  function get_sizeUnsafe(_this__u8e3s4) {
    _init_properties_math_kt__tgcmt4();
    var tmp;
    if (_this__u8e3s4.isEmpty_y1axqb_k$()) {
      tmp = 0;
    } else {
      var tmp_0;
      try {
        // Inline function 'kotlin.Long.plus' call
        var this_0 = divide(safeAdd(_this__u8e3s4.get_last_wopotb_k$(), negate(_this__u8e3s4.get_first_irdx8n_k$())), _this__u8e3s4.get_step_woujh1_k$());
        var tmp$ret$0 = add(this_0, fromInt(1));
        tmp_0 = clampToInt(tmp$ret$0);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ArithmeticException) {
          var e = $p;
          tmp_1 = 2147483647;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function containsUnsafe(_this__u8e3s4, value) {
    _init_properties_math_kt__tgcmt4();
    var tmp;
    var progression = compare(_this__u8e3s4.get_step_woujh1_k$(), new Long(0, 0)) > 0 ? longRangeToLong(_this__u8e3s4.get_first_irdx8n_k$(), _this__u8e3s4.get_last_wopotb_k$()) : longRangeToLong(_this__u8e3s4.get_last_wopotb_k$(), _this__u8e3s4.get_first_irdx8n_k$());
    var containsLower = progression.get_first_irdx8n_k$();
    if (compare(value, progression.get_last_wopotb_k$()) <= 0 ? compare(containsLower, value) <= 0 : false) {
      tmp = equalsLong(modulo(subtract(value, _this__u8e3s4.get_first_irdx8n_k$()), _this__u8e3s4.get_step_woujh1_k$()), new Long(0, 0));
    } else {
      tmp = false;
    }
    return tmp;
  }
  function safeMultiplyOrClamp(a, b) {
    _init_properties_math_kt__tgcmt4();
    if (equalsLong(b, new Long(-1, -1))) {
      if (equalsLong(a, new Long(0, -2147483648))) {
        return new Long(-1, 2147483647);
      }
      return negate(a);
    } else if (equalsLong(b, new Long(1, 0)))
      return a;
    var total = multiply(a, b);
    if (!equalsLong(divide(total, b), a)) {
      return compare(a, new Long(0, 0)) > 0 === compare(b, new Long(0, 0)) > 0 ? new Long(-1, 2147483647) : new Long(0, -2147483648);
    }
    return total;
  }
  function clampToInt(_this__u8e3s4) {
    _init_properties_math_kt__tgcmt4();
    return compare(_this__u8e3s4, new Long(2147483647, 0)) > 0 ? 2147483647 : compare(_this__u8e3s4, new Long(-2147483648, -1)) < 0 ? -2147483648 : convertToInt(_this__u8e3s4);
  }
  var properties_initialized_math_kt_amm9wq;
  function _init_properties_math_kt__tgcmt4() {
    if (!properties_initialized_math_kt_amm9wq) {
      properties_initialized_math_kt_amm9wq = true;
      // Inline function 'kotlin.intArrayOf' call
      POWERS_OF_TEN = new Int32Array([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]);
    }
  }
  function toKotlinCode_2(_this__u8e3s4) {
    return _this__u8e3s4 === _Char___init__impl__6a9atx(39) ? "'\\''" : "'" + toString_0(_this__u8e3s4) + "'";
  }
  function toKotlinCode_3(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(34));
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var c = charCodeAt(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (c === _Char___init__impl__6a9atx(34))
        this_0.append_22ad7x_k$('\\"');
      else if (c === _Char___init__impl__6a9atx(92))
        this_0.append_22ad7x_k$('\\\\');
      else if (c === _Char___init__impl__6a9atx(8))
        this_0.append_22ad7x_k$('\\b');
      else if (c === _Char___init__impl__6a9atx(9))
        this_0.append_22ad7x_k$('\\t');
      else if (c === _Char___init__impl__6a9atx(10))
        this_0.append_22ad7x_k$('\\n');
      else if (c === _Char___init__impl__6a9atx(13))
        this_0.append_22ad7x_k$('\\r');
      else
        this_0.append_am5a4z_k$(c);
    }
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(34));
    return this_0.toString();
  }
  function isAsciiDigit(_this__u8e3s4) {
    return _Char___init__impl__6a9atx(48) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(57) : false;
  }
  function asciiDigitToInt(_this__u8e3s4) {
    return Char__minus_impl_a2frrh(_this__u8e3s4, _Char___init__impl__6a9atx(48));
  }
  function isAsciiLetter(_this__u8e3s4) {
    return (_Char___init__impl__6a9atx(65) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(90) : false) || (_Char___init__impl__6a9atx(97) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(122) : false);
  }
  function TimeBasedDateTimeUnitSerializer$descriptor$delegate$lambda() {
    return buildClassSerialDescriptor('kotlinx.datetime.TimeBased', [], TimeBasedDateTimeUnitSerializer$descriptor$delegate$lambda$lambda);
  }
  function TimeBasedDateTimeUnitSerializer$descriptor$delegate$lambda$lambda($this$buildClassSerialDescriptor) {
    // Inline function 'kotlinx.serialization.descriptors.element' call
    var elementName = 'nanoseconds';
    var annotations = emptyList();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Long), arrayOf([]), false));
    var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).get_descriptor_wjt6a0_k$();
    $this$buildClassSerialDescriptor.element_om879h_k$(elementName, descriptor, annotations, false);
    return Unit_getInstance();
  }
  function TimeBasedDateTimeUnitSerializer$_get_descriptor_$ref_ezonyw() {
    return function (p0) {
      return p0.get_descriptor_wjt6a0_k$();
    };
  }
  function TimeBasedDateTimeUnitSerializer() {
    TimeBasedDateTimeUnitSerializer_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.descriptor$delegate_1 = lazy_0(tmp_0, TimeBasedDateTimeUnitSerializer$descriptor$delegate$lambda);
  }
  protoOf(TimeBasedDateTimeUnitSerializer).get_descriptor_wjt6a0_k$ = function () {
    var tmp0 = this.descriptor$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, TimeBasedDateTimeUnitSerializer$_get_descriptor_$ref_ezonyw(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(TimeBasedDateTimeUnitSerializer).serialize_45e5yg_k$ = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.get_descriptor_wjt6a0_k$();
    var composite = encoder.beginStructure_yljocp_k$(descriptor);
    composite.encodeLongElement_cega27_k$(TimeBasedDateTimeUnitSerializer_getInstance().get_descriptor_wjt6a0_k$(), 0, value.get_nanoseconds_3zfxge_k$());
    composite.endStructure_1xqz0n_k$(descriptor);
  };
  protoOf(TimeBasedDateTimeUnitSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_45e5yg_k$(encoder, value instanceof TimeBased ? value : THROW_CCE());
  };
  protoOf(TimeBasedDateTimeUnitSerializer).deserialize_sy6x50_k$ = function (decoder) {
    var seen = {_v: false};
    var nanoseconds = {_v: new Long(0, 0)};
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.get_descriptor_wjt6a0_k$();
    var composite = decoder.beginStructure_yljocp_k$(descriptor);
    if (composite.decodeSequentially_xlblqy_k$()) {
      nanoseconds._v = composite.decodeLongElement_994anb_k$(TimeBasedDateTimeUnitSerializer_getInstance().get_descriptor_wjt6a0_k$(), 0);
      seen._v = true;
    } else {
      loop: while (true) {
        var elementIndex = composite.decodeElementIndex_bstkhp_k$(TimeBasedDateTimeUnitSerializer_getInstance().get_descriptor_wjt6a0_k$());
        switch (elementIndex) {
          case 0:
            nanoseconds._v = composite.decodeLongElement_994anb_k$(TimeBasedDateTimeUnitSerializer_getInstance().get_descriptor_wjt6a0_k$(), 0);
            seen._v = true;
            break;
          case -1:
            break loop;
          default:
            throwUnknownIndexException(elementIndex);
            break;
        }
      }
    }
    var result = Unit_getInstance();
    composite.endStructure_1xqz0n_k$(descriptor);
    if (!seen._v)
      throw MissingFieldException_init_$Create$('nanoseconds', this.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$());
    return new TimeBased(nanoseconds._v);
  };
  var TimeBasedDateTimeUnitSerializer_instance;
  function TimeBasedDateTimeUnitSerializer_getInstance() {
    if (TimeBasedDateTimeUnitSerializer_instance == null)
      new TimeBasedDateTimeUnitSerializer();
    return TimeBasedDateTimeUnitSerializer_instance;
  }
  function _get_impl__d88w17($this) {
    var tmp0 = $this.impl$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('impl', 1, tmp, DateBasedDateTimeUnitSerializer$_get_impl_$ref_m860rs(), null);
    return tmp0.get_value_j01efc_k$();
  }
  function DateBasedDateTimeUnitSerializer$impl$delegate$lambda() {
    var tmp = getKClass(DateBased);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(DayBased), getKClass(MonthBased)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [DayBasedDateTimeUnitSerializer_getInstance(), MonthBasedDateTimeUnitSerializer_getInstance()];
    return new SealedClassSerializer('kotlinx.datetime.DateTimeUnit.DateBased', tmp, tmp_0, tmp$ret$5);
  }
  function DateBasedDateTimeUnitSerializer$_get_impl_$ref_m860rs() {
    return function (p0) {
      return _get_impl__d88w17(p0);
    };
  }
  function DateBasedDateTimeUnitSerializer() {
    DateBasedDateTimeUnitSerializer_instance = this;
    AbstractPolymorphicSerializer.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.impl$delegate_1 = lazy_0(tmp_0, DateBasedDateTimeUnitSerializer$impl$delegate$lambda);
  }
  protoOf(DateBasedDateTimeUnitSerializer).findPolymorphicSerializerOrNull_o3cszk_k$ = function (decoder, klassName) {
    return _get_impl__d88w17(this).findPolymorphicSerializerOrNull_o3cszk_k$(decoder, klassName);
  };
  protoOf(DateBasedDateTimeUnitSerializer).findPolymorphicSerializerOrNull_2e74cw_k$ = function (encoder, value) {
    return _get_impl__d88w17(this).findPolymorphicSerializerOrNull_sqpvzc_k$(encoder, value);
  };
  protoOf(DateBasedDateTimeUnitSerializer).findPolymorphicSerializerOrNull_sqpvzc_k$ = function (encoder, value) {
    return this.findPolymorphicSerializerOrNull_2e74cw_k$(encoder, value instanceof DateBased ? value : THROW_CCE());
  };
  protoOf(DateBasedDateTimeUnitSerializer).get_baseClass_lygw3m_k$ = function () {
    return getKClass(DateBased);
  };
  protoOf(DateBasedDateTimeUnitSerializer).get_descriptor_wjt6a0_k$ = function () {
    return _get_impl__d88w17(this).get_descriptor_wjt6a0_k$();
  };
  var DateBasedDateTimeUnitSerializer_instance;
  function DateBasedDateTimeUnitSerializer_getInstance() {
    if (DateBasedDateTimeUnitSerializer_instance == null)
      new DateBasedDateTimeUnitSerializer();
    return DateBasedDateTimeUnitSerializer_instance;
  }
  function DayBasedDateTimeUnitSerializer$descriptor$delegate$lambda() {
    return buildClassSerialDescriptor('kotlinx.datetime.DayBased', [], DayBasedDateTimeUnitSerializer$descriptor$delegate$lambda$lambda);
  }
  function DayBasedDateTimeUnitSerializer$descriptor$delegate$lambda$lambda($this$buildClassSerialDescriptor) {
    // Inline function 'kotlinx.serialization.descriptors.element' call
    var annotations = emptyList();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$(), arrayOf([]), false));
    var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).get_descriptor_wjt6a0_k$();
    $this$buildClassSerialDescriptor.element_om879h_k$('days', descriptor, annotations, false);
    return Unit_getInstance();
  }
  function DayBasedDateTimeUnitSerializer$_get_descriptor_$ref_2ycvl3() {
    return function (p0) {
      return p0.get_descriptor_wjt6a0_k$();
    };
  }
  function DayBasedDateTimeUnitSerializer() {
    DayBasedDateTimeUnitSerializer_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.descriptor$delegate_1 = lazy_0(tmp_0, DayBasedDateTimeUnitSerializer$descriptor$delegate$lambda);
  }
  protoOf(DayBasedDateTimeUnitSerializer).get_descriptor_wjt6a0_k$ = function () {
    var tmp0 = this.descriptor$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, DayBasedDateTimeUnitSerializer$_get_descriptor_$ref_2ycvl3(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(DayBasedDateTimeUnitSerializer).serialize_tfoyka_k$ = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.get_descriptor_wjt6a0_k$();
    var composite = encoder.beginStructure_yljocp_k$(descriptor);
    composite.encodeIntElement_krhhce_k$(DayBasedDateTimeUnitSerializer_getInstance().get_descriptor_wjt6a0_k$(), 0, value.get_days_wokl28_k$());
    composite.endStructure_1xqz0n_k$(descriptor);
  };
  protoOf(DayBasedDateTimeUnitSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_tfoyka_k$(encoder, value instanceof DayBased ? value : THROW_CCE());
  };
  protoOf(DayBasedDateTimeUnitSerializer).deserialize_sy6x50_k$ = function (decoder) {
    var seen = {_v: false};
    var days = {_v: 0};
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.get_descriptor_wjt6a0_k$();
    var composite = decoder.beginStructure_yljocp_k$(descriptor);
    if (composite.decodeSequentially_xlblqy_k$()) {
      days._v = composite.decodeIntElement_941u6a_k$(DayBasedDateTimeUnitSerializer_getInstance().get_descriptor_wjt6a0_k$(), 0);
      seen._v = true;
    } else {
      loop: while (true) {
        var elementIndex = composite.decodeElementIndex_bstkhp_k$(DayBasedDateTimeUnitSerializer_getInstance().get_descriptor_wjt6a0_k$());
        switch (elementIndex) {
          case 0:
            days._v = composite.decodeIntElement_941u6a_k$(DayBasedDateTimeUnitSerializer_getInstance().get_descriptor_wjt6a0_k$(), 0);
            seen._v = true;
            break;
          case -1:
            break loop;
          default:
            throwUnknownIndexException(elementIndex);
            break;
        }
      }
    }
    var result = Unit_getInstance();
    composite.endStructure_1xqz0n_k$(descriptor);
    if (!seen._v)
      throw MissingFieldException_init_$Create$('days', this.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$());
    return new DayBased(days._v);
  };
  var DayBasedDateTimeUnitSerializer_instance;
  function DayBasedDateTimeUnitSerializer_getInstance() {
    if (DayBasedDateTimeUnitSerializer_instance == null)
      new DayBasedDateTimeUnitSerializer();
    return DayBasedDateTimeUnitSerializer_instance;
  }
  function MonthBasedDateTimeUnitSerializer$descriptor$delegate$lambda() {
    return buildClassSerialDescriptor('kotlinx.datetime.MonthBased', [], MonthBasedDateTimeUnitSerializer$descriptor$delegate$lambda$lambda);
  }
  function MonthBasedDateTimeUnitSerializer$descriptor$delegate$lambda$lambda($this$buildClassSerialDescriptor) {
    // Inline function 'kotlinx.serialization.descriptors.element' call
    var annotations = emptyList();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$(), arrayOf([]), false));
    var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).get_descriptor_wjt6a0_k$();
    $this$buildClassSerialDescriptor.element_om879h_k$('months', descriptor, annotations, false);
    return Unit_getInstance();
  }
  function MonthBasedDateTimeUnitSerializer$_get_descriptor_$ref_vroatn() {
    return function (p0) {
      return p0.get_descriptor_wjt6a0_k$();
    };
  }
  function MonthBasedDateTimeUnitSerializer() {
    MonthBasedDateTimeUnitSerializer_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.descriptor$delegate_1 = lazy_0(tmp_0, MonthBasedDateTimeUnitSerializer$descriptor$delegate$lambda);
  }
  protoOf(MonthBasedDateTimeUnitSerializer).get_descriptor_wjt6a0_k$ = function () {
    var tmp0 = this.descriptor$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, MonthBasedDateTimeUnitSerializer$_get_descriptor_$ref_vroatn(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(MonthBasedDateTimeUnitSerializer).serialize_4f5fti_k$ = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.get_descriptor_wjt6a0_k$();
    var composite = encoder.beginStructure_yljocp_k$(descriptor);
    composite.encodeIntElement_krhhce_k$(MonthBasedDateTimeUnitSerializer_getInstance().get_descriptor_wjt6a0_k$(), 0, value.get_months_gqmrjw_k$());
    composite.endStructure_1xqz0n_k$(descriptor);
  };
  protoOf(MonthBasedDateTimeUnitSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_4f5fti_k$(encoder, value instanceof MonthBased ? value : THROW_CCE());
  };
  protoOf(MonthBasedDateTimeUnitSerializer).deserialize_sy6x50_k$ = function (decoder) {
    var seen = {_v: false};
    var months = {_v: 0};
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.get_descriptor_wjt6a0_k$();
    var composite = decoder.beginStructure_yljocp_k$(descriptor);
    if (composite.decodeSequentially_xlblqy_k$()) {
      months._v = composite.decodeIntElement_941u6a_k$(MonthBasedDateTimeUnitSerializer_getInstance().get_descriptor_wjt6a0_k$(), 0);
      seen._v = true;
    } else {
      loop: while (true) {
        var elementIndex = composite.decodeElementIndex_bstkhp_k$(MonthBasedDateTimeUnitSerializer_getInstance().get_descriptor_wjt6a0_k$());
        switch (elementIndex) {
          case 0:
            months._v = composite.decodeIntElement_941u6a_k$(MonthBasedDateTimeUnitSerializer_getInstance().get_descriptor_wjt6a0_k$(), 0);
            seen._v = true;
            break;
          case -1:
            break loop;
          default:
            throwUnknownIndexException(elementIndex);
            break;
        }
      }
    }
    var result = Unit_getInstance();
    composite.endStructure_1xqz0n_k$(descriptor);
    if (!seen._v)
      throw MissingFieldException_init_$Create$('months', this.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$());
    return new MonthBased(months._v);
  };
  var MonthBasedDateTimeUnitSerializer_instance;
  function MonthBasedDateTimeUnitSerializer_getInstance() {
    if (MonthBasedDateTimeUnitSerializer_instance == null)
      new MonthBasedDateTimeUnitSerializer();
    return MonthBasedDateTimeUnitSerializer_instance;
  }
  function _get_impl__d88w17_0($this) {
    var tmp0 = $this.impl$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('impl', 1, tmp, DateTimeUnitSerializer$_get_impl_$ref_2y1hvx(), null);
    return tmp0.get_value_j01efc_k$();
  }
  function DateTimeUnitSerializer$impl$delegate$lambda() {
    var tmp = getKClass(DateTimeUnit);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(DayBased), getKClass(MonthBased), getKClass(TimeBased)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [DayBasedDateTimeUnitSerializer_getInstance(), MonthBasedDateTimeUnitSerializer_getInstance(), TimeBasedDateTimeUnitSerializer_getInstance()];
    return new SealedClassSerializer('kotlinx.datetime.DateTimeUnit', tmp, tmp_0, tmp$ret$5);
  }
  function DateTimeUnitSerializer$_get_impl_$ref_2y1hvx() {
    return function (p0) {
      return _get_impl__d88w17_0(p0);
    };
  }
  function DateTimeUnitSerializer() {
    DateTimeUnitSerializer_instance = this;
    AbstractPolymorphicSerializer.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.impl$delegate_1 = lazy_0(tmp_0, DateTimeUnitSerializer$impl$delegate$lambda);
  }
  protoOf(DateTimeUnitSerializer).findPolymorphicSerializerOrNull_o3cszk_k$ = function (decoder, klassName) {
    return _get_impl__d88w17_0(this).findPolymorphicSerializerOrNull_o3cszk_k$(decoder, klassName);
  };
  protoOf(DateTimeUnitSerializer).findPolymorphicSerializerOrNull_cigpgf_k$ = function (encoder, value) {
    return _get_impl__d88w17_0(this).findPolymorphicSerializerOrNull_sqpvzc_k$(encoder, value);
  };
  protoOf(DateTimeUnitSerializer).findPolymorphicSerializerOrNull_sqpvzc_k$ = function (encoder, value) {
    return this.findPolymorphicSerializerOrNull_cigpgf_k$(encoder, value instanceof DateTimeUnit ? value : THROW_CCE());
  };
  protoOf(DateTimeUnitSerializer).get_baseClass_lygw3m_k$ = function () {
    return getKClass(DateTimeUnit);
  };
  protoOf(DateTimeUnitSerializer).get_descriptor_wjt6a0_k$ = function () {
    return _get_impl__d88w17_0(this).get_descriptor_wjt6a0_k$();
  };
  var DateTimeUnitSerializer_instance;
  function DateTimeUnitSerializer_getInstance() {
    if (DateTimeUnitSerializer_instance == null)
      new DateTimeUnitSerializer();
    return DateTimeUnitSerializer_instance;
  }
  function throwUnknownIndexException(index) {
    throw SerializationException_init_$Create$('An unknown field for index ' + index);
  }
  function LocalDateSerializer() {
    LocalDateSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('kotlinx.datetime.LocalDate', STRING_getInstance());
  }
  protoOf(LocalDateSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LocalDateSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_26().parse$default_krgov1_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(LocalDateSerializer).serialize_4wlsk8_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(LocalDateSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_4wlsk8_k$(encoder, value instanceof LocalDate ? value : THROW_CCE());
  };
  var LocalDateSerializer_instance;
  function LocalDateSerializer_getInstance() {
    if (LocalDateSerializer_instance == null)
      new LocalDateSerializer();
    return LocalDateSerializer_instance;
  }
  function LocalDateTimeSerializer() {
    LocalDateTimeSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('kotlinx.datetime.LocalDateTime', STRING_getInstance());
  }
  protoOf(LocalDateTimeSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LocalDateTimeSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_27().parse$default_rpbnp3_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(LocalDateTimeSerializer).serialize_d9j408_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(LocalDateTimeSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_d9j408_k$(encoder, value instanceof LocalDateTime ? value : THROW_CCE());
  };
  var LocalDateTimeSerializer_instance;
  function LocalDateTimeSerializer_getInstance() {
    if (LocalDateTimeSerializer_instance == null)
      new LocalDateTimeSerializer();
    return LocalDateTimeSerializer_instance;
  }
  function LocalTimeSerializer() {
    LocalTimeSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('kotlinx.datetime.LocalTime', STRING_getInstance());
  }
  protoOf(LocalTimeSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LocalTimeSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_28().parse$default_id2jrv_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(LocalTimeSerializer).serialize_401kjc_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(LocalTimeSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_401kjc_k$(encoder, value instanceof LocalTime ? value : THROW_CCE());
  };
  var LocalTimeSerializer_instance;
  function LocalTimeSerializer_getInstance() {
    if (LocalTimeSerializer_instance == null)
      new LocalTimeSerializer();
    return LocalTimeSerializer_instance;
  }
  function UtcOffsetSerializer() {
    UtcOffsetSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('kotlinx.datetime.UtcOffset', STRING_getInstance());
  }
  protoOf(UtcOffsetSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(UtcOffsetSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_29().parse$default_j5dbmh_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(UtcOffsetSerializer).serialize_2fqg06_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(UtcOffsetSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_2fqg06_k$(encoder, value instanceof UtcOffset ? value : THROW_CCE());
  };
  var UtcOffsetSerializer_instance;
  function UtcOffsetSerializer_getInstance() {
    if (UtcOffsetSerializer_instance == null)
      new UtcOffsetSerializer();
    return UtcOffsetSerializer_instance;
  }
  function YearMonthSerializer() {
    YearMonthSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('kotlinx.datetime.YearMonth', STRING_getInstance());
  }
  protoOf(YearMonthSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(YearMonthSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_30().parse$default_epr5sf_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(YearMonthSerializer).serialize_vk5dlk_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(YearMonthSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_vk5dlk_k$(encoder, value instanceof YearMonth ? value : THROW_CCE());
  };
  var YearMonthSerializer_instance;
  function YearMonthSerializer_getInstance() {
    if (YearMonthSerializer_instance == null)
      new YearMonthSerializer();
    return YearMonthSerializer_instance;
  }
  function get_tzdb() {
    _init_properties_Platform_kt__37ezn1();
    return tzdb;
  }
  var tzdb;
  function tzdb$_anonymous_$charCodeToInt_8mx2pm(char) {
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= char ? char <= _Char___init__impl__6a9atx(57) : false) {
      tmp = Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(48));
    } else if (_Char___init__impl__6a9atx(97) <= char ? char <= _Char___init__impl__6a9atx(122) : false) {
      tmp = Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(97)) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= char ? char <= _Char___init__impl__6a9atx(88) : false) {
      tmp = Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65)) + 36 | 0;
    } else {
      throw IllegalArgumentException_init_$Create$('Invalid character: ' + toString_0(char));
    }
    return tmp;
  }
  function tzdb$_anonymous_$base60MinutesInSeconds_9n6ifx(string) {
    var parts = split(string, charArrayOf([_Char___init__impl__6a9atx(46)]));
    var sign;
    var minuteNumberStart;
    if (startsWith_0(string, _Char___init__impl__6a9atx(45))) {
      minuteNumberStart = 1;
      sign = -1;
    } else {
      minuteNumberStart = 0;
      sign = 1;
    }
    var whole = parts.get_c1px32_k$(0);
    // Inline function 'kotlin.collections.map' call
    var this_0 = numberRangeToNumber(minuteNumberStart, get_lastIndex(whole));
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var inductionVariable = this_0.get_first_irdx8n_k$();
    var last = this_0.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var it = item;
        var tmp$ret$0 = tzdb$_anonymous_$charCodeToInt_8mx2pm(charCodeAt(whole, it));
        destination.add_utx5q5_k$(tmp$ret$0);
      }
       while (!(item === last));
    // Inline function 'kotlin.collections.fold' call
    var accumulator = new Long(0, 0);
    var _iterator__ex2g4s = destination.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var acc = accumulator;
      // Inline function 'kotlin.Long.plus' call
      var this_1 = multiply(numberToLong(60), acc);
      accumulator = add(this_1, fromInt(element));
    }
    var wholeMinutes = accumulator;
    var tmp0_safe_receiver = getOrNull(parts, 1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_0;
      switch (tmp0_safe_receiver.length) {
        case 1:
          tmp_0 = tzdb$_anonymous_$charCodeToInt_8mx2pm(charCodeAt(tmp0_safe_receiver, 0));
          break;
        case 0:
          tmp_0 = 0;
          break;
        default:
          var tmp_1 = tzdb$_anonymous_$charCodeToInt_8mx2pm(charCodeAt(tmp0_safe_receiver, 0));
          // Inline function 'kotlin.let' call

          tmp_0 = tmp_1 + (tzdb$_anonymous_$charCodeToInt_8mx2pm(charCodeAt(tmp0_safe_receiver, 1)) >= 30 ? 1 : 0) | 0;
          break;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var seconds = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.Long.times' call
    // Inline function 'kotlin.Long.plus' call
    var this_2 = multiply(wholeMinutes, fromInt(60));
    var tmp0 = add(this_2, fromInt(seconds));
    // Inline function 'kotlin.Long.times' call
    var other = sign;
    return multiply(tmp0, fromInt(other));
  }
  function tzdb$1($zones) {
    this.$zones_1 = $zones;
  }
  protoOf(tzdb$1).rulesForId_l3kmur_k$ = function (id) {
    var tmp0_elvis_lhs = this.$zones_1.get_wei43m_k$(id);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalTimeZoneException_init_$Create$_0('Unknown time zone: ' + id);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(tzdb$1).availableTimeZoneIds_p62ei_k$ = function () {
    return this.$zones_1.get_keys_wop4xp_k$();
  };
  var properties_initialized_Platform_kt_qdcgvf;
  function _init_properties_Platform_kt__37ezn1() {
    if (!properties_initialized_Platform_kt_qdcgvf) {
      properties_initialized_Platform_kt_qdcgvf = true;
      // Inline function 'kotlin.runCatching' call
      var tmp;
      try {
        Companion_getInstance_2();
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.collections.mutableMapOf' call
          var zones = LinkedHashMap_init_$Create$_0();
          var tmp0_elvis_lhs = readTzdb();
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            tmp$ret$1 = null;
            break $l$block;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var _destruct__k2r9zo = tmp_0;
          var zonesPacked = _destruct__k2r9zo.component1_7eebsc_k$();
          var linksPacked = _destruct__k2r9zo.component2_7eebsb_k$();
          var _iterator__ex2g4s = zonesPacked.iterator_jk1svi_k$();
          while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
            var zone = _iterator__ex2g4s.next_20eer_k$();
            var components = split(zone, charArrayOf([_Char___init__impl__6a9atx(124)]));
            // Inline function 'kotlin.collections.map' call
            var this_0 = split(components.get_c1px32_k$(2), charArrayOf([_Char___init__impl__6a9atx(32)]));
            // Inline function 'kotlin.collections.mapTo' call
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
            var _iterator__ex2g4s_0 = this_0.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
              var item = _iterator__ex2g4s_0.next_20eer_k$();
              var tmp$ret$2 = UtcOffset_0(null, null, -convertToInt(tzdb$_anonymous_$base60MinutesInSeconds_9n6ifx(item)) | 0);
              destination.add_utx5q5_k$(tmp$ret$2);
            }
            var offsets = destination;
            // Inline function 'kotlin.text.map' call
            var this_1 = components.get_c1px32_k$(3);
            // Inline function 'kotlin.text.mapTo' call
            var destination_0 = ArrayList_init_$Create$(charSequenceLength(this_1));
            var inductionVariable = 0;
            while (inductionVariable < charSequenceLength(this_1)) {
              var item_0 = charSequenceGet(this_1, inductionVariable);
              inductionVariable = inductionVariable + 1 | 0;
              var tmp$ret$5 = tzdb$_anonymous_$charCodeToInt_8mx2pm(item_0);
              destination_0.add_utx5q5_k$(tmp$ret$5);
            }
            var indices = destination_0;
            // Inline function 'kotlin.collections.map' call
            var this_2 = split(components.get_c1px32_k$(4), charArrayOf([_Char___init__impl__6a9atx(32)]));
            // Inline function 'kotlin.collections.mapTo' call
            var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
            var _iterator__ex2g4s_1 = this_2.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
              var item_1 = _iterator__ex2g4s_1.next_20eer_k$();
              var tmp$ret$8 = tzdb$_anonymous_$base60MinutesInSeconds_9n6ifx(item_1);
              destination_1.add_utx5q5_k$(tmp$ret$8);
            }
            var lengthsOfPeriodsWithOffsets = destination_1;
            var tmp2 = components.get_c1px32_k$(0);
            var tmp$ret$11;
            $l$block_0: {
              // Inline function 'kotlin.collections.runningReduce' call
              var iterator = lengthsOfPeriodsWithOffsets.iterator_jk1svi_k$();
              if (!iterator.hasNext_bitz1p_k$()) {
                tmp$ret$11 = emptyList();
                break $l$block_0;
              }
              var accumulator = iterator.next_20eer_k$();
              // Inline function 'kotlin.apply' call
              var this_3 = ArrayList_init_$Create$(collectionSizeOrDefault(lengthsOfPeriodsWithOffsets, 10));
              this_3.add_utx5q5_k$(accumulator);
              var result = this_3;
              while (iterator.hasNext_bitz1p_k$()) {
                var tmp0 = accumulator;
                var p1 = iterator.next_20eer_k$();
                accumulator = add(tmp0, p1);
                result.add_utx5q5_k$(accumulator);
              }
              tmp$ret$11 = result;
            }
            // Inline function 'kotlin.let' call
            var it = tmp$ret$11;
            var tmp_1 = it.get_size_woubt6_k$() === (indices.get_size_woubt6_k$() - 1 | 0) ? it : take(it, indices.get_size_woubt6_k$() - 1 | 0);
            // Inline function 'kotlin.collections.map' call
            // Inline function 'kotlin.collections.mapTo' call
            var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(indices, 10));
            var _iterator__ex2g4s_2 = indices.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
              var item_2 = _iterator__ex2g4s_2.next_20eer_k$();
              var tmp$ret$17 = offsets.get_c1px32_k$(item_2);
              destination_2.add_utx5q5_k$(tmp$ret$17);
            }
            // Inline function 'kotlin.collections.set' call
            var value = new TimeZoneRulesCommon(tmp_1, destination_2, null);
            zones.put_4fpzoq_k$(tmp2, value);
          }
          var _iterator__ex2g4s_3 = linksPacked.iterator_jk1svi_k$();
          while (_iterator__ex2g4s_3.hasNext_bitz1p_k$()) {
            var link = _iterator__ex2g4s_3.next_20eer_k$();
            var components_0 = split(link, charArrayOf([_Char___init__impl__6a9atx(124)]));
            var tmp1_safe_receiver = zones.get_wei43m_k$(components_0.get_c1px32_k$(0));
            if (tmp1_safe_receiver == null)
              null;
            else {
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.collections.set' call
              var key = components_0.get_c1px32_k$(1);
              zones.put_4fpzoq_k$(key, tmp1_safe_receiver);
            }
          }
          tmp$ret$1 = new tzdb$1(zones);
        }
        // Inline function 'kotlin.Companion.success' call
        var value_0 = tmp$ret$1;
        tmp = _Result___init__impl__xyqfz8(value_0);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance_2();
          tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p;
        }
        tmp = tmp_2;
      }
      tzdb = tmp;
    }
  }
  function _get__month__642s0m($this) {
    return $this._month_1;
  }
  function LocalDate_init_$Init$(year, month, day, $this) {
    LocalDate.call($this, year, get_number(month), day);
    return $this;
  }
  function LocalDate_init_$Create$(year, month, day) {
    return LocalDate_init_$Init$(year, month, day, objectCreate(protoOf(LocalDate)));
  }
  function Companion_22() {
    Companion_instance_22 = this;
    this.MIN_1 = new LocalDate(-999999999, 1, 1);
    this.MAX_1 = new LocalDate(999999999, 12, 31);
    this.MIN_EPOCH_DAY_1 = new Long(-170999002, -86);
    this.MAX_EPOCH_DAY_1 = new Long(169560311, 85);
  }
  protoOf(Companion_22).parse_18ba6d_k$ = function (input, format) {
    return format.parse_xovy9i_k$(input);
  };
  protoOf(Companion_22).parse$default_krgov1_k$ = function (input, format, $super) {
    format = format === VOID ? getIsoDateFormat() : format;
    return $super === VOID ? this.parse_18ba6d_k$(input, format) : $super.parse_18ba6d_k$.call(this, input, format);
  };
  protoOf(Companion_22).parse_pc1q8p_k$ = function (isoString) {
    return this.parse$default_krgov1_k$(isoString);
  };
  protoOf(Companion_22).fromEpochDays_4kf494_k$ = function (epochDays) {
    // Inline function 'kotlin.require' call
    if (!(compare(new Long(-170999002, -86), epochDays) <= 0 ? compare(epochDays, new Long(169560311, 85)) <= 0 : false)) {
      var message = 'Invalid date: epoch day ' + epochDays.toString() + ' is outside the boundaries of LocalDate';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.Long.plus' call
    var zeroDay = add(epochDays, fromInt(719528));
    // Inline function 'kotlin.Long.minus' call
    var this_0 = zeroDay;
    zeroDay = subtract(this_0, fromInt(60));
    var adjust = new Long(0, 0);
    if (compare(zeroDay, new Long(0, 0)) < 0) {
      // Inline function 'kotlin.Long.plus' call
      var this_1 = zeroDay;
      // Inline function 'kotlin.Long.div' call
      var this_2 = add(this_1, fromInt(1));
      // Inline function 'kotlin.Long.minus' call
      var this_3 = divide(this_2, fromInt(146097));
      var adjustCycles = subtract(this_3, fromInt(1));
      // Inline function 'kotlin.Long.times' call
      adjust = multiply(adjustCycles, fromInt(400));
      var tmp = zeroDay;
      // Inline function 'kotlin.Long.times' call
      var this_4 = negate(adjustCycles);
      var tmp$ret$8 = multiply(this_4, fromInt(146097));
      zeroDay = add(tmp, tmp$ret$8);
    }
    // Inline function 'kotlin.Long.plus' call
    var this_5 = multiply(numberToLong(400), zeroDay);
    // Inline function 'kotlin.Long.div' call
    var this_6 = add(this_5, fromInt(591));
    var yearEst = divide(this_6, fromInt(146097));
    var tmp_0 = zeroDay;
    var tmp_1 = multiply(numberToLong(365), yearEst);
    // Inline function 'kotlin.Long.div' call
    var this_7 = yearEst;
    var tmp$ret$11 = divide(this_7, fromInt(4));
    var tmp_2 = add(tmp_1, tmp$ret$11);
    // Inline function 'kotlin.Long.div' call
    var this_8 = yearEst;
    var tmp$ret$12 = divide(this_8, fromInt(100));
    var tmp_3 = subtract(tmp_2, tmp$ret$12);
    // Inline function 'kotlin.Long.div' call
    var this_9 = yearEst;
    var tmp$ret$13 = divide(this_9, fromInt(400));
    var doyEst = subtract(tmp_0, add(tmp_3, tmp$ret$13));
    if (compare(doyEst, new Long(0, 0)) < 0) {
      var _unary__edvuaz = yearEst;
      yearEst = subtract(_unary__edvuaz, get_ONE());
      var tmp_4 = zeroDay;
      var tmp_5 = multiply(numberToLong(365), yearEst);
      // Inline function 'kotlin.Long.div' call
      var this_10 = yearEst;
      var tmp$ret$14 = divide(this_10, fromInt(4));
      var tmp_6 = add(tmp_5, tmp$ret$14);
      // Inline function 'kotlin.Long.div' call
      var this_11 = yearEst;
      var tmp$ret$15 = divide(this_11, fromInt(100));
      var tmp_7 = subtract(tmp_6, tmp$ret$15);
      // Inline function 'kotlin.Long.div' call
      var this_12 = yearEst;
      var tmp$ret$16 = divide(this_12, fromInt(400));
      doyEst = subtract(tmp_4, add(tmp_7, tmp$ret$16));
    }
    yearEst = add(yearEst, adjust);
    var marchDoy0 = convertToInt(doyEst);
    var marchMonth0 = (imul(marchDoy0, 5) + 2 | 0) / 153 | 0;
    var month = ((marchMonth0 + 2 | 0) % 12 | 0) + 1 | 0;
    var dom = (marchDoy0 - ((imul(marchMonth0, 306) + 5 | 0) / 10 | 0) | 0) + 1 | 0;
    var tmp0 = yearEst;
    // Inline function 'kotlin.Long.plus' call
    var other = marchMonth0 / 10 | 0;
    yearEst = add(tmp0, fromInt(other));
    return new LocalDate(convertToInt(yearEst), month, dom);
  };
  protoOf(Companion_22).fromEpochDays_msuzxa_k$ = function (epochDays) {
    return this.fromEpochDays_4kf494_k$(fromInt(epochDays));
  };
  protoOf(Companion_22).get_MIN_za2zu4_k$ = function () {
    return this.MIN_1;
  };
  protoOf(Companion_22).get_MAX_ieaqrm_k$ = function () {
    return this.MAX_1;
  };
  protoOf(Companion_22).get_MIN_EPOCH_DAY_w0tqhf_k$ = function () {
    return this.MIN_EPOCH_DAY_1;
  };
  protoOf(Companion_22).get_MAX_EPOCH_DAY_1y0jj9_k$ = function () {
    return this.MAX_EPOCH_DAY_1;
  };
  protoOf(Companion_22).Format_rqffoz_k$ = function (block) {
    return Companion_getInstance_16().build_o3smjo_k$(block);
  };
  protoOf(Companion_22).serializer_9w0wvi_k$ = function () {
    return LocalDateSerializer_getInstance();
  };
  var Companion_instance_22;
  function Companion_getInstance_26() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function Formats_0() {
    Formats_instance_0 = this;
    this.ISO_BASIC_1 = get_ISO_DATE_BASIC();
  }
  protoOf(Formats_0).get_ISO_18jrwk_k$ = function () {
    return get_ISO_DATE();
  };
  protoOf(Formats_0).get_ISO_BASIC_3n1nuz_k$ = function () {
    return this.ISO_BASIC_1;
  };
  var Formats_instance_0;
  function Formats_getInstance_0() {
    if (Formats_instance_0 == null)
      new Formats_0();
    return Formats_instance_0;
  }
  function resolvePreviousValid($this, year, month, day) {
    // Inline function 'kotlin.math.min' call
    var b = monthLength(month, isLeapYear(year));
    var newDay = Math.min(day, b);
    return new LocalDate(year, month, newDay);
  }
  function LocalDate(year, month, day) {
    Companion_getInstance_26();
    this.year_1 = year;
    this.day_1 = day;
    this._month_1 = month;
    // Inline function 'kotlin.require' call
    if (!isValidYear(this.year_1)) {
      var message = 'Invalid date: the year is out of range';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsArg = this._month_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 12 : false)) {
      var message_0 = 'Invalid date: month must be a number between 1 and 12, got ' + this._month_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var containsArg_0 = this.day_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg_0 ? containsArg_0 <= 31 : false)) {
      var message_1 = 'Invalid date: day of month must be a number between 1 and 31, got ' + this.day_1;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    if (this.day_1 > 28 && this.day_1 > monthLength(this._month_1, isLeapYear(this.year_1))) {
      if (this.day_1 === 29) {
        throw IllegalArgumentException_init_$Create$("Invalid date 'February 29' as '" + this.year_1 + "' is not a leap year");
      } else {
        throw IllegalArgumentException_init_$Create$("Invalid date '" + Month_0(month).toString() + ' ' + this.day_1 + "'");
      }
    }
  }
  protoOf(LocalDate).get_year_woy26e_k$ = function () {
    return this.year_1;
  };
  protoOf(LocalDate).get_day_18j7il_k$ = function () {
    return this.day_1;
  };
  protoOf(LocalDate).get_monthNumber_nb47ls_k$ = function () {
    return this._month_1;
  };
  protoOf(LocalDate).get_dayOfMonth_vblo3a_k$ = function () {
    return this.day_1;
  };
  protoOf(LocalDate).toEpochDays_tp9eth_k$ = function () {
    var y = fromInt(this.year_1);
    var m = fromInt(this._month_1);
    var total = new Long(0, 0);
    total = add(total, multiply(numberToLong(365), y));
    if (compare(y, new Long(0, 0)) >= 0) {
      var tmp = total;
      // Inline function 'kotlin.Long.plus' call
      // Inline function 'kotlin.Long.div' call
      var this_0 = add(y, fromInt(3));
      var tmp_0 = divide(this_0, fromInt(4));
      // Inline function 'kotlin.Long.plus' call
      // Inline function 'kotlin.Long.div' call
      var this_1 = add(y, fromInt(99));
      var tmp$ret$3 = divide(this_1, fromInt(100));
      var tmp_1 = subtract(tmp_0, tmp$ret$3);
      // Inline function 'kotlin.Long.plus' call
      // Inline function 'kotlin.Long.div' call
      var this_2 = add(y, fromInt(399));
      var tmp$ret$5 = divide(this_2, fromInt(400));
      total = add(tmp, add(tmp_1, tmp$ret$5));
    } else {
      var tmp_2 = total;
      // Inline function 'kotlin.Long.div' call
      var tmp_3 = divide(y, fromInt(-4));
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$7 = divide(y, fromInt(-100));
      var tmp_4 = subtract(tmp_3, tmp$ret$7);
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$8 = divide(y, fromInt(-400));
      total = subtract(tmp_2, add(tmp_4, tmp$ret$8));
    }
    var tmp_5 = total;
    // Inline function 'kotlin.Long.minus' call
    var this_3 = multiply(numberToLong(367), m);
    // Inline function 'kotlin.Long.div' call
    var this_4 = subtract(this_3, fromInt(362));
    var tmp$ret$10 = divide(this_4, fromInt(12));
    total = add(tmp_5, tmp$ret$10);
    var tmp0 = total;
    // Inline function 'kotlin.Long.plus' call
    var other = this.day_1 - 1 | 0;
    total = add(tmp0, fromInt(other));
    if (compare(m, new Long(2, 0)) > 0) {
      var _unary__edvuaz = total;
      total = subtract(_unary__edvuaz, get_ONE());
      if (!isLeapYear(this.year_1)) {
        var _unary__edvuaz_0 = total;
        total = subtract(_unary__edvuaz_0, get_ONE());
      }
    }
    // Inline function 'kotlin.Long.minus' call
    var this_5 = total;
    return subtract(this_5, fromInt(719528));
  };
  protoOf(LocalDate).get_month_ivc8d3_k$ = function () {
    return Month_0(this._month_1);
  };
  protoOf(LocalDate).get_dayOfWeek_3kfgci_k$ = function () {
    // Inline function 'kotlin.Long.plus' call
    var this_0 = this.toEpochDays_tp9eth_k$();
    // Inline function 'kotlin.mod' call
    var tmp0 = add(this_0, fromInt(3));
    // Inline function 'kotlin.mod' call
    var other = fromInt(7);
    var r = modulo(tmp0, other);
    var tmp$ret$1 = add(r, bitwiseAnd(other, shiftRight(bitwiseAnd(bitwiseXor(r, other), bitwiseOr(r, negate(r))), 63)));
    var dow0 = convertToInt(tmp$ret$1);
    return DayOfWeek_0(dow0 + 1 | 0);
  };
  protoOf(LocalDate).get_dayOfYear_3ke6gp_k$ = function () {
    return (firstDayOfYear(this.get_month_ivc8d3_k$(), isLeapYear(this.year_1)) + this.day_1 | 0) - 1 | 0;
  };
  protoOf(LocalDate).compareTo_phv9sr_k$ = function (other) {
    var y = compareTo(this.year_1, other.year_1);
    if (!(y === 0)) {
      return y;
    }
    var m = compareTo(this._month_1, other._month_1);
    if (!(m === 0)) {
      return m;
    }
    return compareTo(this.day_1, other.day_1);
  };
  protoOf(LocalDate).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_phv9sr_k$(other instanceof LocalDate ? other : THROW_CCE());
  };
  protoOf(LocalDate).plusMonths_koeule_k$ = function (monthsToAdd) {
    if (equalsLong(monthsToAdd, new Long(0, 0))) {
      return this;
    }
    var tmp0 = multiply(numberToLong(this.year_1), new Long(12, 0));
    // Inline function 'kotlin.Long.plus' call
    var other = this._month_1 - 1 | 0;
    var monthCount = add(tmp0, fromInt(other));
    var calcMonths = safeAdd(monthCount, monthsToAdd);
    // Inline function 'kotlin.floorDiv' call
    // Inline function 'kotlin.floorDiv' call
    var other_0 = fromInt(12);
    var q = divide(calcMonths, other_0);
    if (compare(bitwiseXor(calcMonths, other_0), new Long(0, 0)) < 0 && !equalsLong(multiply(q, other_0), calcMonths)) {
      var _unary__edvuaz = q;
      q = subtract(_unary__edvuaz, get_ONE());
    }
    var newYear = q;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-999999999, 999999999);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), newYear)) {
      throw IllegalArgumentException_init_$Create$('The result of adding ' + monthsToAdd.toString() + ' months to ' + this.toString() + ' is out of LocalDate range.');
    }
    // Inline function 'kotlin.mod' call
    // Inline function 'kotlin.mod' call
    var other_1 = fromInt(12);
    var r = modulo(calcMonths, other_1);
    var tmp$ret$4 = add(r, bitwiseAnd(other_1, shiftRight(bitwiseAnd(bitwiseXor(r, other_1), bitwiseOr(r, negate(r))), 63)));
    var newMonth = convertToInt(tmp$ret$4) + 1 | 0;
    return resolvePreviousValid(this, convertToInt(newYear), newMonth, this.day_1);
  };
  protoOf(LocalDate).plusDays_h8gtdy_k$ = function (daysToAdd) {
    return equalsLong(daysToAdd, new Long(0, 0)) ? this : Companion_getInstance_26().fromEpochDays_4kf494_k$(safeAdd(this.toEpochDays_tp9eth_k$(), daysToAdd));
  };
  protoOf(LocalDate).rangeTo_sp93rh_k$ = function (that) {
    return Companion_getInstance_8().fromRangeTo_amidtb_k$(this, that);
  };
  protoOf(LocalDate).rangeUntil_6dh2as_k$ = function (that) {
    return Companion_getInstance_8().fromRangeUntil_qv8t66_k$(this, that);
  };
  protoOf(LocalDate).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDate) {
        tmp_0 = this.compareTo_phv9sr_k$(other) === 0;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDate).hashCode = function () {
    var yearValue = this.year_1;
    var monthValue = this._month_1;
    var dayValue = this.day_1;
    return yearValue & -2048 ^ (((yearValue << 11) + (monthValue << 6) | 0) + dayValue | 0);
  };
  protoOf(LocalDate).toString = function () {
    return format(this, Formats_getInstance_0().get_ISO_18jrwk_k$());
  };
  function isValidYear(year) {
    return year >= -999999999 && year <= 999999999;
  }
  function plus_4(_this__u8e3s4, value, unit) {
    var tmp;
    try {
      var tmp_0;
      if (unit instanceof DayBased) {
        tmp_0 = _this__u8e3s4.plusDays_h8gtdy_k$(safeMultiply(value, fromInt(unit.get_days_wokl28_k$())));
      } else {
        if (unit instanceof MonthBased) {
          tmp_0 = _this__u8e3s4.plusMonths_koeule_k$(safeMultiply(value, fromInt(unit.get_months_gqmrjw_k$())));
        } else {
          noWhenBranchMatchedException();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof ArithmeticException) {
        var e = $p;
        throw DateTimeArithmeticException_init_$Create$_2('Arithmetic overflow when adding a value to a date', e);
      } else {
        if ($p instanceof IllegalArgumentException) {
          var e_0 = $p;
          throw DateTimeArithmeticException_init_$Create$_2('Boundaries of LocalDate exceeded when adding a value', e_0);
        } else {
          throw $p;
        }
      }
    }
    return tmp;
  }
  function get_ISO_DATETIME_OPTIONAL_SECONDS_TRAILING_ZEROS() {
    _init_properties_LocalDateTime_kt__bewbbg();
    var tmp0 = ISO_DATETIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ISO_DATETIME_OPTIONAL_SECONDS_TRAILING_ZEROS', 0, tmp, _get_ISO_DATETIME_OPTIONAL_SECONDS_TRAILING_ZEROS_$ref_4ujexv(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var ISO_DATETIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate;
  function Companion_23() {
    Companion_instance_23 = this;
    this.MIN_1 = new LocalDateTime(Companion_getInstance_26().get_MIN_za2zu4_k$(), Companion_getInstance_28().get_MIN_za2zu4_k$());
    this.MAX_1 = new LocalDateTime(Companion_getInstance_26().get_MAX_ieaqrm_k$(), Companion_getInstance_28().get_MAX_ieaqrm_k$());
  }
  protoOf(Companion_23).parse_bq7xns_k$ = function (input, format) {
    return format.parse_xovy9i_k$(input);
  };
  protoOf(Companion_23).parse$default_rpbnp3_k$ = function (input, format, $super) {
    format = format === VOID ? getIsoDateTimeFormat() : format;
    return $super === VOID ? this.parse_bq7xns_k$(input, format) : $super.parse_bq7xns_k$.call(this, input, format);
  };
  protoOf(Companion_23).parse_pc1q8p_k$ = function (isoString) {
    return this.parse$default_rpbnp3_k$(isoString);
  };
  protoOf(Companion_23).get_MIN_za2zu4_k$ = function () {
    return this.MIN_1;
  };
  protoOf(Companion_23).get_MAX_ieaqrm_k$ = function () {
    return this.MAX_1;
  };
  protoOf(Companion_23).Format_52y7ju_k$ = function (builder) {
    return Companion_getInstance_17().build_jyqq35_k$(builder);
  };
  protoOf(Companion_23).serializer_9w0wvi_k$ = function () {
    return LocalDateTimeSerializer_getInstance();
  };
  var Companion_instance_23;
  function Companion_getInstance_27() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function Formats_1() {
    Formats_instance_1 = this;
    this.ISO_1 = get_ISO_DATETIME();
  }
  protoOf(Formats_1).get_ISO_18jrwk_k$ = function () {
    return this.ISO_1;
  };
  var Formats_instance_1;
  function Formats_getInstance_1() {
    if (Formats_instance_1 == null)
      new Formats_1();
    return Formats_instance_1;
  }
  function LocalDateTime_init_$Init$(year, month, day, hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    LocalDateTime.call($this, new LocalDate(year, month, day), Companion_getInstance_28().of_n8m806_k$(hour, minute, second, nanosecond));
    return $this;
  }
  function LocalDateTime_init_$Create$(year, month, day, hour, minute, second, nanosecond) {
    return LocalDateTime_init_$Init$(year, month, day, hour, minute, second, nanosecond, objectCreate(protoOf(LocalDateTime)));
  }
  function LocalDateTime_init_$Init$_0(year, month, day, hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    LocalDateTime.call($this, LocalDate_init_$Create$(year, month, day), Companion_getInstance_28().of_n8m806_k$(hour, minute, second, nanosecond));
    return $this;
  }
  function LocalDateTime_init_$Create$_0(year, month, day, hour, minute, second, nanosecond) {
    return LocalDateTime_init_$Init$_0(year, month, day, hour, minute, second, nanosecond, objectCreate(protoOf(LocalDateTime)));
  }
  function LocalDateTime(date, time) {
    Companion_getInstance_27();
    this.date_1 = date;
    this.time_1 = time;
  }
  protoOf(LocalDateTime).get_date_wokkxj_k$ = function () {
    return this.date_1;
  };
  protoOf(LocalDateTime).get_time_wouyhi_k$ = function () {
    return this.time_1;
  };
  protoOf(LocalDateTime).get_year_woy26e_k$ = function () {
    return this.date_1.get_year_woy26e_k$();
  };
  protoOf(LocalDateTime).get_monthNumber_nb47ls_k$ = function () {
    return get_number(this.date_1.get_month_ivc8d3_k$());
  };
  protoOf(LocalDateTime).get_month_ivc8d3_k$ = function () {
    return this.date_1.get_month_ivc8d3_k$();
  };
  protoOf(LocalDateTime).get_dayOfMonth_vblo3a_k$ = function () {
    return this.date_1.get_day_18j7il_k$();
  };
  protoOf(LocalDateTime).get_day_18j7il_k$ = function () {
    return this.date_1.get_day_18j7il_k$();
  };
  protoOf(LocalDateTime).get_dayOfWeek_3kfgci_k$ = function () {
    return this.date_1.get_dayOfWeek_3kfgci_k$();
  };
  protoOf(LocalDateTime).get_dayOfYear_3ke6gp_k$ = function () {
    return this.date_1.get_dayOfYear_3ke6gp_k$();
  };
  protoOf(LocalDateTime).get_hour_wonfal_k$ = function () {
    return this.time_1.get_hour_wonfal_k$();
  };
  protoOf(LocalDateTime).get_minute_gnc10d_k$ = function () {
    return this.time_1.get_minute_gnc10d_k$();
  };
  protoOf(LocalDateTime).get_second_jf7fjx_k$ = function () {
    return this.time_1.get_second_jf7fjx_k$();
  };
  protoOf(LocalDateTime).get_nanosecond_fws9td_k$ = function () {
    return this.time_1.get_nanosecond_fws9td_k$();
  };
  protoOf(LocalDateTime).compareTo_fh2md_k$ = function (other) {
    var d = this.date_1.compareTo_phv9sr_k$(other.date_1);
    if (!(d === 0)) {
      return d;
    }
    return this.time_1.compareTo_ax7xad_k$(other.time_1);
  };
  protoOf(LocalDateTime).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_fh2md_k$(other instanceof LocalDateTime ? other : THROW_CCE());
  };
  protoOf(LocalDateTime).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDateTime) {
        tmp_0 = this.compareTo_fh2md_k$(other) === 0;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDateTime).hashCode = function () {
    return this.date_1.hashCode() ^ this.time_1.hashCode();
  };
  protoOf(LocalDateTime).toString = function () {
    return format_0(this, get_ISO_DATETIME_OPTIONAL_SECONDS_TRAILING_ZEROS());
  };
  protoOf(LocalDateTime).toEpochSecond_e9u42_k$ = function (offset) {
    var epochDay = this.date_1.toEpochDays_tp9eth_k$();
    // Inline function 'kotlin.Long.times' call
    var tmp0 = multiply(epochDay, fromInt(86400));
    // Inline function 'kotlin.Long.plus' call
    var other = this.time_1.toSecondOfDay_a2clsa_k$();
    var secs = add(tmp0, fromInt(other));
    var tmp0_0 = secs;
    // Inline function 'kotlin.Long.minus' call
    var other_0 = offset.get_totalSeconds_oq5924_k$();
    secs = subtract(tmp0_0, fromInt(other_0));
    return secs;
  };
  function plusSeconds(_this__u8e3s4, seconds) {
    _init_properties_LocalDateTime_kt__bewbbg();
    if (seconds === 0) {
      return _this__u8e3s4;
    }
    var currentNanoOfDay = _this__u8e3s4.time_1.toNanosecondOfDay_dywvsy_k$();
    var totalNanos = add(multiply(numberToLong(seconds % 86400 | 0), new Long(1000000000, 0)), currentNanoOfDay);
    var tmp = seconds / 86400 | 0;
    // Inline function 'kotlin.floorDiv' call
    var other = new Long(-1857093632, 20116);
    var q = divide(totalNanos, other);
    if (compare(bitwiseXor(totalNanos, other), new Long(0, 0)) < 0 && !equalsLong(multiply(q, other), totalNanos)) {
      var _unary__edvuaz = q;
      q = subtract(_unary__edvuaz, get_ONE());
    }
    var tmp$ret$0 = q;
    var totalDays = add(numberToLong(tmp), tmp$ret$0);
    // Inline function 'kotlin.mod' call
    var other_0 = new Long(-1857093632, 20116);
    var r = modulo(totalNanos, other_0);
    var newNanoOfDay = add(r, bitwiseAnd(other_0, shiftRight(bitwiseAnd(bitwiseXor(r, other_0), bitwiseOr(r, negate(r))), 63)));
    var newTime = equalsLong(newNanoOfDay, currentNanoOfDay) ? _this__u8e3s4.time_1 : Companion_getInstance_28().ofNanoOfDay_vuj08f_k$(newNanoOfDay);
    return new LocalDateTime(_this__u8e3s4.date_1.plusDays_h8gtdy_k$(totalDays), newTime);
  }
  function ISO_DATETIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate$lambda() {
    _init_properties_LocalDateTime_kt__bewbbg();
    var tmp = Companion_getInstance_17();
    return tmp.build_jyqq35_k$(ISO_DATETIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate$lambda$lambda);
  }
  function ISO_DATETIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateTime_kt__bewbbg();
    $this$build.date_aq11yp_k$(get_ISO_DATE());
    var tmp = [ISO_DATETIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_DATETIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate$lambda$lambda$lambda_0);
    $this$build.time_eev9o3_k$(get_ISO_TIME_OPTIONAL_SECONDS_TRAILING_ZEROS());
    return Unit_getInstance();
  }
  function ISO_DATETIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_LocalDateTime_kt__bewbbg();
    char($this$alternativeParsing, _Char___init__impl__6a9atx(116));
    return Unit_getInstance();
  }
  function ISO_DATETIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_LocalDateTime_kt__bewbbg();
    char($this$alternativeParsing, _Char___init__impl__6a9atx(84));
    return Unit_getInstance();
  }
  function _get_ISO_DATETIME_OPTIONAL_SECONDS_TRAILING_ZEROS_$ref_4ujexv() {
    return function () {
      return get_ISO_DATETIME_OPTIONAL_SECONDS_TRAILING_ZEROS();
    };
  }
  var properties_initialized_LocalDateTime_kt_aulw4q;
  function _init_properties_LocalDateTime_kt__bewbbg() {
    if (!properties_initialized_LocalDateTime_kt_aulw4q) {
      properties_initialized_LocalDateTime_kt_aulw4q = true;
      ISO_DATETIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate = lazy(ISO_DATETIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate$lambda);
    }
  }
  function get_ISO_TIME_OPTIONAL_SECONDS_TRAILING_ZEROS() {
    _init_properties_LocalTime_kt__nmhi56();
    var tmp0 = ISO_TIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ISO_TIME_OPTIONAL_SECONDS_TRAILING_ZEROS', 0, tmp, _get_ISO_TIME_OPTIONAL_SECONDS_TRAILING_ZEROS_$ref_fmwpvv(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var ISO_TIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate;
  function Companion_24() {
    Companion_instance_24 = this;
    this.MIN_1 = new LocalTime(0, 0, 0, 0);
    this.MAX_1 = new LocalTime(23, 59, 59, 999999999);
  }
  protoOf(Companion_24).parse_keg146_k$ = function (input, format) {
    return format.parse_xovy9i_k$(input);
  };
  protoOf(Companion_24).parse$default_id2jrv_k$ = function (input, format, $super) {
    format = format === VOID ? getIsoTimeFormat() : format;
    return $super === VOID ? this.parse_keg146_k$(input, format) : $super.parse_keg146_k$.call(this, input, format);
  };
  protoOf(Companion_24).parse_pc1q8p_k$ = function (isoString) {
    return this.parse$default_id2jrv_k$(isoString);
  };
  protoOf(Companion_24).fromSecondOfDay_ahegcx_k$ = function (secondOfDay) {
    return this.ofSecondOfDay_9u5rnn_k$(secondOfDay, 0);
  };
  protoOf(Companion_24).fromMillisecondOfDay_pjhtva_k$ = function (millisecondOfDay) {
    // Inline function 'kotlin.Long.times' call
    var this_0 = fromInt(millisecondOfDay);
    var tmp$ret$0 = multiply(this_0, fromInt(1000000));
    return this.ofNanoOfDay_vuj08f_k$(tmp$ret$0);
  };
  protoOf(Companion_24).fromNanosecondOfDay_iksazp_k$ = function (nanosecondOfDay) {
    return this.ofNanoOfDay_vuj08f_k$(nanosecondOfDay);
  };
  protoOf(Companion_24).ofSecondOfDay_9u5rnn_k$ = function (secondOfDay, nanoOfSecond) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(0 <= secondOfDay ? secondOfDay < 86400 : false)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(0 <= nanoOfSecond ? nanoOfSecond < 1000000000 : false)) {
      var message_0 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var hours = secondOfDay / 3600 | 0;
    var secondWithoutHours = secondOfDay - imul(hours, 3600) | 0;
    var minutes = secondWithoutHours / 60 | 0;
    var second = secondWithoutHours - imul(minutes, 60) | 0;
    return new LocalTime(hours, minutes, second, nanoOfSecond);
  };
  protoOf(Companion_24).of_n8m806_k$ = function (hour, minute, second, nanosecond) {
    return new LocalTime(hour, minute, second, nanosecond);
  };
  protoOf(Companion_24).ofNanoOfDay_vuj08f_k$ = function (nanoOfDay) {
    var tmp;
    if (compare(nanoOfDay, new Long(0, 0)) >= 0) {
      var tmp0 = new Long(86400, 0);
      // Inline function 'kotlin.Long.times' call
      var other = 1000000000;
      var tmp$ret$0 = multiply(tmp0, fromInt(other));
      tmp = compare(nanoOfDay, tmp$ret$0) < 0;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var newNanoOfDay = nanoOfDay;
    var hours = convertToInt(divide(newNanoOfDay, new Long(817405952, 838)));
    newNanoOfDay = subtract(newNanoOfDay, multiply(numberToLong(hours), new Long(817405952, 838)));
    var minutes = convertToInt(divide(newNanoOfDay, new Long(-129542144, 13)));
    newNanoOfDay = subtract(newNanoOfDay, multiply(numberToLong(minutes), new Long(-129542144, 13)));
    var tmp0_0 = newNanoOfDay;
    // Inline function 'kotlin.Long.div' call
    var other_0 = 1000000000;
    var tmp$ret$4 = divide(tmp0_0, fromInt(other_0));
    var seconds = convertToInt(tmp$ret$4);
    var tmp0_1 = newNanoOfDay;
    // Inline function 'kotlin.Long.minus' call
    var other_1 = imul(seconds, 1000000000);
    newNanoOfDay = subtract(tmp0_1, fromInt(other_1));
    return new LocalTime(hours, minutes, seconds, convertToInt(newNanoOfDay));
  };
  protoOf(Companion_24).get_MIN_za2zu4_k$ = function () {
    return this.MIN_1;
  };
  protoOf(Companion_24).get_MAX_ieaqrm_k$ = function () {
    return this.MAX_1;
  };
  protoOf(Companion_24).Format_tnsr8s_k$ = function (builder) {
    return Companion_getInstance_18().build_agwrib_k$(builder);
  };
  protoOf(Companion_24).serializer_9w0wvi_k$ = function () {
    return LocalTimeSerializer_getInstance();
  };
  var Companion_instance_24;
  function Companion_getInstance_28() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function Formats_2() {
    Formats_instance_2 = this;
  }
  protoOf(Formats_2).get_ISO_18jrwk_k$ = function () {
    return get_ISO_TIME();
  };
  var Formats_instance_2;
  function Formats_getInstance_2() {
    if (Formats_instance_2 == null)
      new Formats_2();
    return Formats_instance_2;
  }
  function _init_$check(value, lower, upper, str) {
    // Inline function 'kotlin.require' call
    if (!(lower <= value ? value <= upper : false)) {
      var message = 'Invalid time: ' + str + ' must be a number between ' + lower + ' and ' + upper + ', got ' + value;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return Unit_getInstance();
  }
  function LocalTime(hour, minute, second, nanosecond) {
    Companion_getInstance_28();
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    this.hour_1 = hour;
    this.minute_1 = minute;
    this.second_1 = second;
    this.nanosecond_1 = nanosecond;
    _init_$check(this.hour_1, 0, 23, 'hour');
    _init_$check(this.minute_1, 0, 59, 'minute');
    _init_$check(this.second_1, 0, 59, 'second');
    _init_$check(this.nanosecond_1, 0, 999999999, 'nanosecond');
  }
  protoOf(LocalTime).get_hour_wonfal_k$ = function () {
    return this.hour_1;
  };
  protoOf(LocalTime).get_minute_gnc10d_k$ = function () {
    return this.minute_1;
  };
  protoOf(LocalTime).get_second_jf7fjx_k$ = function () {
    return this.second_1;
  };
  protoOf(LocalTime).get_nanosecond_fws9td_k$ = function () {
    return this.nanosecond_1;
  };
  protoOf(LocalTime).compareTo_ax7xad_k$ = function (other) {
    var h = compareTo(this.hour_1, other.hour_1);
    if (!(h === 0)) {
      return h;
    }
    var m = compareTo(this.minute_1, other.minute_1);
    if (!(m === 0)) {
      return m;
    }
    var s = compareTo(this.second_1, other.second_1);
    if (!(s === 0)) {
      return s;
    }
    return compareTo(this.nanosecond_1, other.nanosecond_1);
  };
  protoOf(LocalTime).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_ax7xad_k$(other instanceof LocalTime ? other : THROW_CCE());
  };
  protoOf(LocalTime).hashCode = function () {
    var nod = this.toNanosecondOfDay_dywvsy_k$();
    return convertToInt(bitwiseXor(nod, shiftRightUnsigned(nod, 32)));
  };
  protoOf(LocalTime).toSecondOfDay_a2clsa_k$ = function () {
    var total = imul(this.hour_1, 3600);
    total = total + imul(this.minute_1, 60) | 0;
    total = total + this.second_1 | 0;
    return total;
  };
  protoOf(LocalTime).toMillisecondOfDay_936hwh_k$ = function () {
    return imul(this.toSecondOfDay_a2clsa_k$(), 1000) + (this.nanosecond_1 / 1000000 | 0) | 0;
  };
  protoOf(LocalTime).toNanosecondOfDay_dywvsy_k$ = function () {
    var tmp0 = fromInt(this.hour_1);
    // Inline function 'kotlin.Long.times' call
    var other = 1000000000;
    // Inline function 'kotlin.Long.times' call
    var this_0 = multiply(tmp0, fromInt(other));
    var total = multiply(this_0, fromInt(3600));
    var tmp = total;
    var tmp0_0 = fromInt(this.minute_1);
    // Inline function 'kotlin.Long.times' call
    var other_0 = 1000000000;
    // Inline function 'kotlin.Long.times' call
    var this_1 = multiply(tmp0_0, fromInt(other_0));
    var tmp$ret$3 = multiply(this_1, fromInt(60));
    total = add(tmp, tmp$ret$3);
    var tmp_0 = total;
    var tmp0_1 = fromInt(this.second_1);
    // Inline function 'kotlin.Long.times' call
    var other_1 = 1000000000;
    var tmp$ret$4 = multiply(tmp0_1, fromInt(other_1));
    total = add(tmp_0, tmp$ret$4);
    total = add(total, fromInt(this.nanosecond_1));
    return total;
  };
  protoOf(LocalTime).toString = function () {
    return format_1(this, get_ISO_TIME_OPTIONAL_SECONDS_TRAILING_ZEROS());
  };
  protoOf(LocalTime).equals = function (other) {
    var tmp;
    if (other instanceof LocalTime) {
      tmp = this.compareTo_ax7xad_k$(other) === 0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function ISO_TIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate$lambda() {
    _init_properties_LocalTime_kt__nmhi56();
    var tmp = Companion_getInstance_18();
    return tmp.build_agwrib_k$(ISO_TIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate$lambda$lambda);
  }
  function ISO_TIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate$lambda$lambda($this$build) {
    _init_properties_LocalTime_kt__nmhi56();
    $this$build.hour$default_sexqwx_k$();
    char($this$build, _Char___init__impl__6a9atx(58));
    $this$build.minute$default_g584a9_k$();
    optional($this$build, VOID, ISO_TIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ISO_TIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate$lambda$lambda$lambda($this$optional) {
    _init_properties_LocalTime_kt__nmhi56();
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.second$default_h6j21d_k$();
    optional($this$optional, VOID, ISO_TIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ISO_TIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_LocalTime_kt__nmhi56();
    char($this$optional, _Char___init__impl__6a9atx(46));
    secondFractionInternal($this$optional, 1, 9, Companion_getInstance_19().get_GROUP_BY_THREE_z0tc3l_k$());
    return Unit_getInstance();
  }
  function _get_ISO_TIME_OPTIONAL_SECONDS_TRAILING_ZEROS_$ref_fmwpvv() {
    return function () {
      return get_ISO_TIME_OPTIONAL_SECONDS_TRAILING_ZEROS();
    };
  }
  var properties_initialized_LocalTime_kt_bt8uiw;
  function _init_properties_LocalTime_kt__nmhi56() {
    if (!properties_initialized_LocalTime_kt_bt8uiw) {
      properties_initialized_LocalTime_kt_bt8uiw = true;
      ISO_TIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate = lazy(ISO_TIME_OPTIONAL_SECONDS_TRAILING_ZEROS$delegate$lambda);
    }
  }
  function firstDayOfYear(_this__u8e3s4, leapYear) {
    var leap = leapYear ? 1 : 0;
    var tmp;
    switch (_this__u8e3s4.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = 1;
        break;
      case 1:
        tmp = 32;
        break;
      case 2:
        tmp = 60 + leap | 0;
        break;
      case 3:
        tmp = 91 + leap | 0;
        break;
      case 4:
        tmp = 121 + leap | 0;
        break;
      case 5:
        tmp = 152 + leap | 0;
        break;
      case 6:
        tmp = 182 + leap | 0;
        break;
      case 7:
        tmp = 213 + leap | 0;
        break;
      case 8:
        tmp = 244 + leap | 0;
        break;
      case 9:
        tmp = 274 + leap | 0;
        break;
      case 10:
        tmp = 305 + leap | 0;
        break;
      case 11:
        tmp = 335 + leap | 0;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function get_lenientOffsetFormat() {
    _init_properties_TimeZone_kt__dwyks9();
    return lenientOffsetFormat;
  }
  var lenientOffsetFormat;
  function toLocalDateTime(_this__u8e3s4, offset) {
    _init_properties_TimeZone_kt__dwyks9();
    var tmp;
    try {
      tmp = toLocalDateTimeImpl(_this__u8e3s4, offset);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        throw DateTimeArithmeticException_init_$Create$_2('Instant ' + _this__u8e3s4.toString() + ' is not representable as LocalDateTime', e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function toLocalDateTimeImpl(_this__u8e3s4, offset) {
    _init_properties_TimeZone_kt__dwyks9();
    var tmp0 = _this__u8e3s4.get_epochSeconds_w76ght_k$();
    // Inline function 'kotlin.Long.plus' call
    var other = offset.get_totalSeconds_oq5924_k$();
    var localSecond = add(tmp0, fromInt(other));
    // Inline function 'kotlin.floorDiv' call
    var other_0 = new Long(86400, 0);
    var q = divide(localSecond, other_0);
    if (compare(bitwiseXor(localSecond, other_0), new Long(0, 0)) < 0 && !equalsLong(multiply(q, other_0), localSecond)) {
      var _unary__edvuaz = q;
      q = subtract(_unary__edvuaz, get_ONE());
    }
    var localEpochDay = q;
    // Inline function 'kotlin.mod' call
    var other_1 = new Long(86400, 0);
    var r = modulo(localSecond, other_1);
    var tmp$ret$2 = add(r, bitwiseAnd(other_1, shiftRight(bitwiseAnd(bitwiseXor(r, other_1), bitwiseOr(r, negate(r))), 63)));
    var secsOfDay = convertToInt(tmp$ret$2);
    var date = Companion_getInstance_26().fromEpochDays_4kf494_k$(localEpochDay);
    var time = Companion_getInstance_28().ofSecondOfDay_9u5rnn_k$(secsOfDay, _this__u8e3s4.get_nanosecondsOfSecond_n2ey8j_k$());
    return new LocalDateTime(date, time);
  }
  function toInstant(_this__u8e3s4, offset, youShallNotPass) {
    youShallNotPass = youShallNotPass === VOID ? Companion_getInstance_10().get_INSTANCE_1pfym7_k$() : youShallNotPass;
    _init_properties_TimeZone_kt__dwyks9();
    return Companion_getInstance_1().fromEpochSeconds_idu11y_k$(_this__u8e3s4.toEpochSecond_e9u42_k$(offset), _this__u8e3s4.get_nanosecond_fws9td_k$());
  }
  function lenientOffsetFormat$lambda($this$build) {
    _init_properties_TimeZone_kt__dwyks9();
    var tmp = lenientOffsetFormat$lambda$lambda;
    var tmp_0 = [tmp, lenientOffsetFormat$lambda$lambda_0];
    alternativeParsing($this$build, tmp_0, lenientOffsetFormat$lambda$lambda_1);
    return Unit_getInstance();
  }
  function lenientOffsetFormat$lambda$lambda($this$alternativeParsing) {
    _init_properties_TimeZone_kt__dwyks9();
    $this$alternativeParsing.offsetHours_ci3yns_k$(Padding_NONE_getInstance());
    return Unit_getInstance();
  }
  function lenientOffsetFormat$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_TimeZone_kt__dwyks9();
    isoOffset($this$alternativeParsing, false, false, WhenToOutput_IF_NONZERO_getInstance(), WhenToOutput_IF_NONZERO_getInstance());
    return Unit_getInstance();
  }
  function lenientOffsetFormat$lambda$lambda_1($this$alternativeParsing) {
    _init_properties_TimeZone_kt__dwyks9();
    isoOffset($this$alternativeParsing, true, true, WhenToOutput_ALWAYS_getInstance(), WhenToOutput_IF_NONZERO_getInstance());
    return Unit_getInstance();
  }
  var properties_initialized_TimeZone_kt_fgsidh;
  function _init_properties_TimeZone_kt__dwyks9() {
    if (!properties_initialized_TimeZone_kt_fgsidh) {
      properties_initialized_TimeZone_kt_fgsidh = true;
      var tmp = Companion_getInstance_20();
      lenientOffsetFormat = tmp.build_dzztnl_k$(lenientOffsetFormat$lambda);
    }
  }
  function set_utcOffsetCache(_set____db54di) {
    _init_properties_UtcOffset_kt__93zod7();
    utcOffsetCache = _set____db54di;
  }
  function get_utcOffsetCache() {
    _init_properties_UtcOffset_kt__93zod7();
    return utcOffsetCache;
  }
  var utcOffsetCache;
  function validateTotal($this, totalSeconds) {
    if (!(-64800 <= totalSeconds ? totalSeconds <= 64800 : false)) {
      throw IllegalArgumentException_init_$Create$('Total seconds value is out of range: ' + totalSeconds);
    }
  }
  function validate($this, hours, minutes, seconds) {
    if (hours < -18 || hours > 18) {
      throw IllegalArgumentException_init_$Create$('Zone offset hours not in valid range: value ' + hours + ' is not in the range -18 to 18');
    }
    if (hours > 0) {
      if (minutes < 0 || seconds < 0) {
        throw IllegalArgumentException_init_$Create$('Zone offset minutes and seconds must be positive because hours is positive');
      }
    } else if (hours < 0) {
      if (minutes > 0 || seconds > 0) {
        throw IllegalArgumentException_init_$Create$('Zone offset minutes and seconds must be negative because hours is negative');
      }
    } else if (minutes > 0 && seconds < 0 || (minutes < 0 && seconds > 0)) {
      throw IllegalArgumentException_init_$Create$('Zone offset minutes and seconds must have the same sign');
    }
    if (abs(minutes) > 59) {
      throw IllegalArgumentException_init_$Create$('Zone offset minutes not in valid range: abs(value) ' + abs(minutes) + ' is not in the range 0 to 59');
    }
    if (abs(seconds) > 59) {
      throw IllegalArgumentException_init_$Create$('Zone offset seconds not in valid range: abs(value) ' + abs(seconds) + ' is not in the range 0 to 59');
    }
    if (abs(hours) === 18 && (abs(minutes) > 0 || abs(seconds) > 0)) {
      throw IllegalArgumentException_init_$Create$('Utc offset not in valid range: -18:00 to +18:00');
    }
  }
  function Companion_25() {
    Companion_instance_25 = this;
    this.ZERO_1 = new UtcOffset(0);
  }
  protoOf(Companion_25).get_ZERO_wodlgx_k$ = function () {
    return this.ZERO_1;
  };
  protoOf(Companion_25).parse_i4pxzt_k$ = function (input, format) {
    return format.parse_xovy9i_k$(input);
  };
  protoOf(Companion_25).parse$default_j5dbmh_k$ = function (input, format, $super) {
    format = format === VOID ? getIsoUtcOffsetFormat() : format;
    return $super === VOID ? this.parse_i4pxzt_k$(input, format) : $super.parse_i4pxzt_k$.call(this, input, format);
  };
  protoOf(Companion_25).parse_pc1q8p_k$ = function (offsetString) {
    return this.parse$default_j5dbmh_k$(offsetString);
  };
  protoOf(Companion_25).ofHoursMinutesSeconds_hty6al_k$ = function (hours, minutes, seconds) {
    validate(this, hours, minutes, seconds);
    return hours === 0 && minutes === 0 && seconds === 0 ? this.ZERO_1 : this.ofSeconds_lh5225_k$((imul(hours, 3600) + imul(minutes, 60) | 0) + seconds | 0);
  };
  protoOf(Companion_25).ofSeconds_lh5225_k$ = function (seconds) {
    validateTotal(this, seconds);
    var tmp;
    if ((seconds % 900 | 0) === 0) {
      var tmp0_elvis_lhs = get_utcOffsetCache().get_wei43m_k$(seconds);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new UtcOffset(seconds);
        // Inline function 'kotlin.collections.set' call
        get_utcOffsetCache().put_4fpzoq_k$(seconds, this_0);
        tmp_0 = this_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = new UtcOffset(seconds);
    }
    return tmp;
  };
  protoOf(Companion_25).Format_lu8ljq_k$ = function (block) {
    return Companion_getInstance_20().build_dzztnl_k$(block);
  };
  protoOf(Companion_25).serializer_9w0wvi_k$ = function () {
    return UtcOffsetSerializer_getInstance();
  };
  var Companion_instance_25;
  function Companion_getInstance_29() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function Formats_3() {
    Formats_instance_3 = this;
  }
  protoOf(Formats_3).get_ISO_18jrwk_k$ = function () {
    return get_ISO_OFFSET();
  };
  protoOf(Formats_3).get_ISO_BASIC_3n1nuz_k$ = function () {
    return get_ISO_OFFSET_BASIC();
  };
  protoOf(Formats_3).get_FOUR_DIGITS_7a8eh6_k$ = function () {
    return get_FOUR_DIGIT_OFFSET();
  };
  var Formats_instance_3;
  function Formats_getInstance_3() {
    if (Formats_instance_3 == null)
      new Formats_3();
    return Formats_instance_3;
  }
  function UtcOffset(totalSeconds) {
    Companion_getInstance_29();
    this.totalSeconds_1 = totalSeconds;
  }
  protoOf(UtcOffset).get_totalSeconds_oq5924_k$ = function () {
    return this.totalSeconds_1;
  };
  protoOf(UtcOffset).hashCode = function () {
    return this.totalSeconds_1;
  };
  protoOf(UtcOffset).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffset) {
      tmp = this.totalSeconds_1 === other.totalSeconds_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffset).toString = function () {
    return format_2(this, Formats_getInstance_3().get_ISO_18jrwk_k$());
  };
  function UtcOffset_0(hours, minutes, seconds) {
    hours = hours === VOID ? null : hours;
    minutes = minutes === VOID ? null : minutes;
    seconds = seconds === VOID ? null : seconds;
    _init_properties_UtcOffset_kt__93zod7();
    var tmp;
    if (!(hours == null)) {
      var tmp_0 = Companion_getInstance_29();
      var tmp_1 = minutes == null ? 0 : minutes;
      tmp = tmp_0.ofHoursMinutesSeconds_hty6al_k$(hours, tmp_1, seconds == null ? 0 : seconds);
    } else if (!(minutes == null)) {
      var tmp_2 = Companion_getInstance_29();
      var tmp_3 = minutes / 60 | 0;
      var tmp_4 = minutes % 60 | 0;
      tmp = tmp_2.ofHoursMinutesSeconds_hty6al_k$(tmp_3, tmp_4, seconds == null ? 0 : seconds);
    } else {
      var tmp_5 = Companion_getInstance_29();
      tmp = tmp_5.ofSeconds_lh5225_k$(seconds == null ? 0 : seconds);
    }
    return tmp;
  }
  var properties_initialized_UtcOffset_kt_4gxffr;
  function _init_properties_UtcOffset_kt__93zod7() {
    if (!properties_initialized_UtcOffset_kt_4gxffr) {
      properties_initialized_UtcOffset_kt_4gxffr = true;
      // Inline function 'kotlin.collections.mutableMapOf' call
      utcOffsetCache = LinkedHashMap_init_$Create$_0();
    }
  }
  function YearMonth_init_$Init$(year, month, $this) {
    YearMonth.call($this, year, get_number(month));
    return $this;
  }
  function YearMonth_init_$Create$(year, month) {
    return YearMonth_init_$Init$(year, month, objectCreate(protoOf(YearMonth)));
  }
  function Companion_26() {
    Companion_instance_26 = this;
  }
  protoOf(Companion_26).parse_ziaw5h_k$ = function (input, format) {
    return format.parse_xovy9i_k$(input);
  };
  protoOf(Companion_26).parse$default_epr5sf_k$ = function (input, format, $super) {
    format = format === VOID ? Formats_getInstance_4().get_ISO_18jrwk_k$() : format;
    return $super === VOID ? this.parse_ziaw5h_k$(input, format) : $super.parse_ziaw5h_k$.call(this, input, format);
  };
  protoOf(Companion_26).Format_1myt4u_k$ = function (block) {
    return Companion_getInstance_22().build_xjwtmz_k$(block);
  };
  protoOf(Companion_26).serializer_9w0wvi_k$ = function () {
    return YearMonthSerializer_getInstance();
  };
  var Companion_instance_26;
  function Companion_getInstance_30() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function Formats_4() {
    Formats_instance_4 = this;
  }
  protoOf(Formats_4).get_ISO_18jrwk_k$ = function () {
    return get_ISO_YEAR_MONTH();
  };
  var Formats_instance_4;
  function Formats_getInstance_4() {
    if (Formats_instance_4 == null)
      new Formats_4();
    return Formats_instance_4;
  }
  function YearMonth$_get_year_$ref_chp4n6() {
    return function (p0) {
      return p0.year_1;
    };
  }
  function YearMonth$_get_month_$ref_9rphhd() {
    return function (p0) {
      return p0.get_month_ivc8d3_k$();
    };
  }
  function YearMonth(year, month) {
    Companion_getInstance_30();
    this.year_1 = year;
    this.monthNumber_1 = month;
    // Inline function 'kotlin.require' call
    if (!(1 <= month ? month <= 12 : false)) {
      var message = 'Month must be in 1..12, but was ' + month;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsLower = Companion_getInstance_26().get_MIN_za2zu4_k$().get_year_woy26e_k$();
    var containsUpper = Companion_getInstance_26().get_MAX_ieaqrm_k$().get_year_woy26e_k$();
    var containsArg = this.year_1;
    // Inline function 'kotlin.require' call
    if (!(containsLower <= containsArg ? containsArg <= containsUpper : false)) {
      var message_0 = 'Year ' + this.year_1 + ' is out of range: ' + Companion_getInstance_26().get_MIN_za2zu4_k$().get_year_woy26e_k$() + '..' + Companion_getInstance_26().get_MAX_ieaqrm_k$().get_year_woy26e_k$();
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(YearMonth).get_year_woy26e_k$ = function () {
    return this.year_1;
  };
  protoOf(YearMonth).get_monthNumber_3kt44j_k$ = function () {
    return this.monthNumber_1;
  };
  protoOf(YearMonth).get_month_ivc8d3_k$ = function () {
    return Month_0(this.monthNumber_1);
  };
  protoOf(YearMonth).get_firstDay_u4rr11_k$ = function () {
    return onDay(this, 1);
  };
  protoOf(YearMonth).get_lastDay_hikhp_k$ = function () {
    return onDay(this, this.get_numberOfDays_jvae9s_k$());
  };
  protoOf(YearMonth).get_numberOfDays_jvae9s_k$ = function () {
    return monthLength(this.monthNumber_1, isLeapYear(this.year_1));
  };
  protoOf(YearMonth).get_days_wokl28_k$ = function () {
    return this.get_firstDay_u4rr11_k$().rangeTo_sp93rh_k$(this.get_lastDay_hikhp_k$());
  };
  protoOf(YearMonth).rangeTo_lubll9_k$ = function (that) {
    return Companion_getInstance_11().fromRangeTo_pznalr_k$(this, that);
  };
  protoOf(YearMonth).rangeUntil_hgfvg_k$ = function (that) {
    return Companion_getInstance_11().fromRangeUntil_bi3wdq_k$(this, that);
  };
  protoOf(YearMonth).compareTo_wcsryz_k$ = function (other) {
    var tmp = KProperty1;
    var tmp_0 = getPropertyCallableRef('year', 1, tmp, YearMonth$_get_year_$ref_chp4n6(), null);
    var tmp_1 = KProperty1;
    return compareValuesBy(this, other, [tmp_0, getPropertyCallableRef('month', 1, tmp_1, YearMonth$_get_month_$ref_9rphhd(), null)]);
  };
  protoOf(YearMonth).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_wcsryz_k$(other instanceof YearMonth ? other : THROW_CCE());
  };
  protoOf(YearMonth).toString = function () {
    return Formats_getInstance_4().get_ISO_18jrwk_k$().format_l1mq08_k$(this);
  };
  protoOf(YearMonth).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof YearMonth) {
      tmp_0 = this.year_1 === other.year_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.get_month_ivc8d3_k$().equals(other.get_month_ivc8d3_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(YearMonth).hashCode = function () {
    return imul(this.year_1, 31) + this.get_month_ivc8d3_k$().hashCode() | 0;
  };
  function WallClockOffset() {
    WallClockOffset_instance = this;
  }
  protoOf(WallClockOffset).toString = function () {
    return 'wall clock offset';
  };
  var WallClockOffset_instance;
  function WallClockOffset_getInstance() {
    if (WallClockOffset_instance == null)
      new WallClockOffset();
    return WallClockOffset_instance;
  }
  function FixedOffset(offset) {
    this.offset_1 = offset;
  }
  protoOf(FixedOffset).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(FixedOffset).toString = function () {
    return this.offset_1.toString();
  };
  function TransitionLocaltime_init_$Init$(hour, minute, second, $this) {
    TransitionLocaltime.call($this, (imul(hour, 3600) + imul(minute, 60) | 0) + second | 0);
    return $this;
  }
  function TransitionLocaltime_init_$Create$(hour, minute, second) {
    return TransitionLocaltime_init_$Init$(hour, minute, second, objectCreate(protoOf(TransitionLocaltime)));
  }
  function OffsetResolver() {
  }
  function TransitionLocaltime(seconds) {
    this.seconds_1 = seconds;
  }
  protoOf(TransitionLocaltime).get_seconds_xuhyfq_k$ = function () {
    return this.seconds_1;
  };
  protoOf(TransitionLocaltime).resolve_nlx7rb_k$ = function (date) {
    return plusSeconds(atTime(date, new LocalTime(0, 0)), this.seconds_1);
  };
  protoOf(TransitionLocaltime).toString = function () {
    return this.seconds_1 < 86400 ? Companion_getInstance_28().ofSecondOfDay_9u5rnn_k$(this.seconds_1, 0).toString() : '' + this.seconds_1 + ' seconds since the day start';
  };
  function MonthDayTime(date, time, offset) {
    this.date_1 = date;
    this.time_1 = time;
    this.offset_1 = offset;
  }
  protoOf(MonthDayTime).get_date_wokkxj_k$ = function () {
    return this.date_1;
  };
  protoOf(MonthDayTime).get_time_wouyhi_k$ = function () {
    return this.time_1;
  };
  protoOf(MonthDayTime).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(MonthDayTime).toInstant_182fr9_k$ = function (year, effectiveOffset) {
    var tmp0_subject = this.offset_1;
    var tmp;
    if (tmp0_subject instanceof WallClockOffset) {
      tmp = toInstant(this.toLocalDateTime_fesjv1_k$(year), effectiveOffset);
    } else {
      if (tmp0_subject instanceof FixedOffset) {
        tmp = toInstant(this.toLocalDateTime_fesjv1_k$(year), this.offset_1.offset_1);
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  };
  protoOf(MonthDayTime).toLocalDateTime_fesjv1_k$ = function (year) {
    return this.time_1.resolve_nlx7rb_k$(this.date_1.toLocalDate_uvonhi_k$(year));
  };
  protoOf(MonthDayTime).toString = function () {
    return toString(this.date_1) + ', ' + this.time_1.toString() + ', ' + toString(this.offset_1);
  };
  function DateOfYear() {
  }
  function Gap(start, offsetBefore, offsetAfter) {
    this.start_1 = start;
    this.offsetBefore_1 = offsetBefore;
    this.offsetAfter_1 = offsetAfter;
    // Inline function 'kotlin.check' call
    if (!(this.offsetBefore_1.get_totalSeconds_oq5924_k$() < this.offsetAfter_1.get_totalSeconds_oq5924_k$())) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
  }
  protoOf(Gap).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(Gap).get_offsetBefore_5kdpvf_k$ = function () {
    return this.offsetBefore_1;
  };
  protoOf(Gap).get_offsetAfter_yj92u8_k$ = function () {
    return this.offsetAfter_1;
  };
  protoOf(Gap).get_transitionDurationSeconds_pn5o5p_k$ = function () {
    return this.offsetAfter_1.get_totalSeconds_oq5924_k$() - this.offsetBefore_1.get_totalSeconds_oq5924_k$() | 0;
  };
  protoOf(Gap).component1_7eebsc_k$ = function () {
    return this.start_1;
  };
  protoOf(Gap).component2_7eebsb_k$ = function () {
    return this.offsetBefore_1;
  };
  protoOf(Gap).component3_7eebsa_k$ = function () {
    return this.offsetAfter_1;
  };
  protoOf(Gap).copy_791eiy_k$ = function (start, offsetBefore, offsetAfter) {
    return new Gap(start, offsetBefore, offsetAfter);
  };
  protoOf(Gap).copy$default_r0zeq8_k$ = function (start, offsetBefore, offsetAfter, $super) {
    start = start === VOID ? this.start_1 : start;
    offsetBefore = offsetBefore === VOID ? this.offsetBefore_1 : offsetBefore;
    offsetAfter = offsetAfter === VOID ? this.offsetAfter_1 : offsetAfter;
    return $super === VOID ? this.copy_791eiy_k$(start, offsetBefore, offsetAfter) : $super.copy_791eiy_k$.call(this, start, offsetBefore, offsetAfter);
  };
  protoOf(Gap).toString = function () {
    return 'Gap(start=' + this.start_1.toString() + ', offsetBefore=' + this.offsetBefore_1.toString() + ', offsetAfter=' + this.offsetAfter_1.toString() + ')';
  };
  protoOf(Gap).hashCode = function () {
    var result = this.start_1.hashCode();
    result = imul(result, 31) + this.offsetBefore_1.hashCode() | 0;
    result = imul(result, 31) + this.offsetAfter_1.hashCode() | 0;
    return result;
  };
  protoOf(Gap).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Gap))
      return false;
    var tmp0_other_with_cast = other instanceof Gap ? other : THROW_CCE();
    if (!this.start_1.equals(tmp0_other_with_cast.start_1))
      return false;
    if (!this.offsetBefore_1.equals(tmp0_other_with_cast.offsetBefore_1))
      return false;
    if (!this.offsetAfter_1.equals(tmp0_other_with_cast.offsetAfter_1))
      return false;
    return true;
  };
  function Overlap(start, offsetBefore, offsetAfter) {
    this.start_1 = start;
    this.offsetBefore_1 = offsetBefore;
    this.offsetAfter_1 = offsetAfter;
    // Inline function 'kotlin.check' call
    if (!(this.offsetBefore_1.get_totalSeconds_oq5924_k$() > this.offsetAfter_1.get_totalSeconds_oq5924_k$())) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
  }
  protoOf(Overlap).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(Overlap).get_offsetBefore_5kdpvf_k$ = function () {
    return this.offsetBefore_1;
  };
  protoOf(Overlap).get_offsetAfter_yj92u8_k$ = function () {
    return this.offsetAfter_1;
  };
  protoOf(Overlap).component1_7eebsc_k$ = function () {
    return this.start_1;
  };
  protoOf(Overlap).component2_7eebsb_k$ = function () {
    return this.offsetBefore_1;
  };
  protoOf(Overlap).component3_7eebsa_k$ = function () {
    return this.offsetAfter_1;
  };
  protoOf(Overlap).copy_791eiy_k$ = function (start, offsetBefore, offsetAfter) {
    return new Overlap(start, offsetBefore, offsetAfter);
  };
  protoOf(Overlap).copy$default_ir09vj_k$ = function (start, offsetBefore, offsetAfter, $super) {
    start = start === VOID ? this.start_1 : start;
    offsetBefore = offsetBefore === VOID ? this.offsetBefore_1 : offsetBefore;
    offsetAfter = offsetAfter === VOID ? this.offsetAfter_1 : offsetAfter;
    return $super === VOID ? this.copy_791eiy_k$(start, offsetBefore, offsetAfter) : $super.copy_791eiy_k$.call(this, start, offsetBefore, offsetAfter);
  };
  protoOf(Overlap).toString = function () {
    return 'Overlap(start=' + this.start_1.toString() + ', offsetBefore=' + this.offsetBefore_1.toString() + ', offsetAfter=' + this.offsetAfter_1.toString() + ')';
  };
  protoOf(Overlap).hashCode = function () {
    var result = this.start_1.hashCode();
    result = imul(result, 31) + this.offsetBefore_1.hashCode() | 0;
    result = imul(result, 31) + this.offsetAfter_1.hashCode() | 0;
    return result;
  };
  protoOf(Overlap).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Overlap))
      return false;
    var tmp0_other_with_cast = other instanceof Overlap ? other : THROW_CCE();
    if (!this.start_1.equals(tmp0_other_with_cast.start_1))
      return false;
    if (!this.offsetBefore_1.equals(tmp0_other_with_cast.offsetBefore_1))
      return false;
    if (!this.offsetAfter_1.equals(tmp0_other_with_cast.offsetAfter_1))
      return false;
    return true;
  };
  function Regular(offset) {
    this.offset_1 = offset;
  }
  protoOf(Regular).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(Regular).component1_7eebsc_k$ = function () {
    return this.offset_1;
  };
  protoOf(Regular).copy_pnq9c2_k$ = function (offset) {
    return new Regular(offset);
  };
  protoOf(Regular).copy$default_gcscx0_k$ = function (offset, $super) {
    offset = offset === VOID ? this.offset_1 : offset;
    return $super === VOID ? this.copy_pnq9c2_k$(offset) : $super.copy_pnq9c2_k$.call(this, offset);
  };
  protoOf(Regular).toString = function () {
    return 'Regular(offset=' + this.offset_1.toString() + ')';
  };
  protoOf(Regular).hashCode = function () {
    return this.offset_1.hashCode();
  };
  protoOf(Regular).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Regular))
      return false;
    var tmp0_other_with_cast = other instanceof Regular ? other : THROW_CCE();
    if (!this.offset_1.equals(tmp0_other_with_cast.offset_1))
      return false;
    return true;
  };
  function OffsetInfo() {
  }
  function OffsetInfo_0(transitionInstant, offsetBefore, offsetAfter) {
    var tmp;
    if (offsetBefore.equals(offsetAfter)) {
      tmp = new Regular(offsetBefore);
    } else if (offsetBefore.get_totalSeconds_oq5924_k$() < offsetAfter.get_totalSeconds_oq5924_k$()) {
      tmp = new Gap(transitionInstant, offsetBefore, offsetAfter);
    } else {
      tmp = new Overlap(transitionInstant, offsetBefore, offsetAfter);
    }
    return tmp;
  }
  function TimeZoneDatabase() {
  }
  function TimeZoneRulesCommon_init_$Init$(initialOffset, rules, $this) {
    TimeZoneRulesCommon.call($this, emptyList(), listOf(initialOffset), rules);
    return $this;
  }
  function TimeZoneRulesCommon_init_$Create$(initialOffset, rules) {
    return TimeZoneRulesCommon_init_$Init$(initialOffset, rules, objectCreate(protoOf(TimeZoneRulesCommon)));
  }
  function _get_transitionLocalDateTimes__ne0k3b($this) {
    return $this.transitionLocalDateTimes_1;
  }
  function offsetInfoForTransitionIndex($this, transitionIndex) {
    var transitionInstant = Companion_getInstance_1().fromEpochSeconds$default_u0xfm6_k$($this.transitionEpochSeconds_1.get_c1px32_k$(transitionIndex));
    var offsetBefore = $this.offsets_1.get_c1px32_k$(transitionIndex);
    var offsetAfter = $this.offsets_1.get_c1px32_k$(transitionIndex + 1 | 0);
    return OffsetInfo_0(transitionInstant, offsetBefore, offsetAfter);
  }
  function TimeZoneRulesCommon(transitionEpochSeconds, offsets, recurringZoneRules) {
    this.transitionEpochSeconds_1 = transitionEpochSeconds;
    this.offsets_1 = offsets;
    this.recurringZoneRules_1 = recurringZoneRules;
    // Inline function 'kotlin.require' call
    if (!(this.offsets_1.get_size_woubt6_k$() === (this.transitionEpochSeconds_1.get_size_woubt6_k$() + 1 | 0))) {
      var message = 'offsets.size must be one more than transitionEpochSeconds.size';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    var inductionVariable = 0;
    var last = this.transitionEpochSeconds_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var instant = Companion_getInstance_1().fromEpochSeconds$default_u0xfm6_k$(this.transitionEpochSeconds_1.get_c1px32_k$(i));
        var ldtBefore = toLocalDateTime(instant, this.offsets_1.get_c1px32_k$(i));
        var ldtAfter = toLocalDateTime(instant, this.offsets_1.get_c1px32_k$(i + 1 | 0));
        if (ldtBefore.compareTo_fh2md_k$(ldtAfter) < 0) {
          this_0.add_utx5q5_k$(ldtBefore);
          this_0.add_utx5q5_k$(ldtAfter);
        } else {
          this_0.add_utx5q5_k$(ldtAfter);
          this_0.add_utx5q5_k$(ldtBefore);
        }
      }
       while (inductionVariable <= last);
    tmp.transitionLocalDateTimes_1 = this_0.build_nmwvly_k$();
  }
  protoOf(TimeZoneRulesCommon).get_transitionEpochSeconds_jzd8wc_k$ = function () {
    return this.transitionEpochSeconds_1;
  };
  protoOf(TimeZoneRulesCommon).get_offsets_ocbsmh_k$ = function () {
    return this.offsets_1;
  };
  protoOf(TimeZoneRulesCommon).get_recurringZoneRules_bosh7t_k$ = function () {
    return this.recurringZoneRules_1;
  };
  protoOf(TimeZoneRulesCommon).infoAtInstant_wfxher_k$ = function (instant) {
    var epochSeconds = instant.get_epochSeconds_w76ght_k$();
    var tmp;
    if (!(this.recurringZoneRules_1 == null)) {
      var tmp0_safe_receiver = lastOrNull(this.transitionEpochSeconds_1);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = compare(epochSeconds, tmp0_safe_receiver) >= 0;
      }
      tmp = !(tmp_0 === false);
    } else {
      tmp = false;
    }
    if (tmp) {
      return this.recurringZoneRules_1.infoAtInstant_vx8xn8_k$(instant, last(this.offsets_1));
    }
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = binarySearch_0(this.transitionEpochSeconds_1, epochSeconds) + 1 | 0;
    var index = abs(this_0);
    return this.offsets_1.get_c1px32_k$(index);
  };
  protoOf(TimeZoneRulesCommon).infoAtDatetime_8jme5l_k$ = function (localDateTime) {
    var tmp;
    if (!(this.recurringZoneRules_1 == null)) {
      var tmp0_safe_receiver = lastOrNull(this.transitionLocalDateTimes_1);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = localDateTime.compareTo_fh2md_k$(tmp0_safe_receiver) > 0;
      }
      tmp = !(tmp_0 === false);
    } else {
      tmp = false;
    }
    if (tmp) {
      return this.recurringZoneRules_1.infoAtLocalDateTime_gnc9mx_k$(localDateTime, last(this.offsets_1));
    }
    // Inline function 'kotlin.let' call
    var it = binarySearch_0(this.transitionLocalDateTimes_1, localDateTime);
    var lastIndexNotBiggerThanLdt = it < 0 ? (-it | 0) - 2 | 0 : it;
    if (lastIndexNotBiggerThanLdt === -1) {
      return new Regular(first(this.offsets_1));
    }
    var tmp_1;
    if ((lastIndexNotBiggerThanLdt % 2 | 0) === 0) {
      tmp_1 = offsetInfoForTransitionIndex(this, lastIndexNotBiggerThanLdt / 2 | 0);
    } else if (!(lastIndexNotBiggerThanLdt === (this.transitionLocalDateTimes_1.get_size_woubt6_k$() - 1 | 0)) && this.transitionLocalDateTimes_1.get_c1px32_k$(lastIndexNotBiggerThanLdt).equals(this.transitionLocalDateTimes_1.get_c1px32_k$(lastIndexNotBiggerThanLdt + 1 | 0))) {
      tmp_1 = offsetInfoForTransitionIndex(this, (lastIndexNotBiggerThanLdt / 2 | 0) + 1 | 0);
    } else {
      tmp_1 = new Regular(this.offsets_1.get_c1px32_k$((lastIndexNotBiggerThanLdt / 2 | 0) + 1 | 0));
    }
    return tmp_1;
  };
  protoOf(TimeZoneRulesCommon).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    var inductionVariable = 0;
    var last_0 = this.transitionEpochSeconds_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this_0.append_t8pm91_k$(this.offsets_1.get_c1px32_k$(i));
        this_0.append_22ad7x_k$(' until ');
        this_0.append_t8pm91_k$(Companion_getInstance_1().fromEpochSeconds$default_u0xfm6_k$(this.transitionEpochSeconds_1.get_c1px32_k$(i)));
        this_0.append_22ad7x_k$(', ');
      }
       while (inductionVariable <= last_0);
    this_0.append_22ad7x_k$('then ');
    this_0.append_t8pm91_k$(last(this.offsets_1));
    if (!(this.recurringZoneRules_1 == null)) {
      this_0.append_22ad7x_k$(', after that ');
      this_0.append_t8pm91_k$(this.recurringZoneRules_1);
    }
    return this_0.toString();
  };
  function TimeZoneRules() {
  }
  function Rule(transitionDateTime, offsetBefore, offsetAfter) {
    this.transitionDateTime_1 = transitionDateTime;
    this.offsetBefore_1 = offsetBefore;
    this.offsetAfter_1 = offsetAfter;
  }
  protoOf(Rule).get_transitionDateTime_p5cpzt_k$ = function () {
    return this.transitionDateTime_1;
  };
  protoOf(Rule).get_offsetBefore_5kdpvf_k$ = function () {
    return this.offsetBefore_1;
  };
  protoOf(Rule).get_offsetAfter_yj92u8_k$ = function () {
    return this.offsetAfter_1;
  };
  protoOf(Rule).toString = function () {
    return 'transitioning from ' + this.offsetBefore_1.toString() + ' to ' + this.offsetAfter_1.toString() + ' on ' + toString_1(this.transitionDateTime_1);
  };
  function sam$kotlin_Comparator$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0_1).equals = function (other) {
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
  protoOf(sam$kotlin_Comparator$0_1).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function RecurringZoneRules$rulesForYear$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.transitionDateTime_1;
    var tmp$ret$1 = b.transitionDateTime_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function RecurringZoneRules(rules) {
    this.rules_1 = rules;
  }
  protoOf(RecurringZoneRules).get_rules_iy6zf2_k$ = function () {
    return this.rules_1;
  };
  protoOf(RecurringZoneRules).rulesForYear_x4abwp_k$ = function (year) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.rules_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var transitionInstant = item.transitionDateTime_1.toInstant_182fr9_k$(year, item.offsetBefore_1);
      var tmp$ret$0 = new Rule(transitionInstant, item.offsetBefore_1, item.offsetAfter_1);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = RecurringZoneRules$rulesForYear$lambda;
    var tmp$ret$3 = new sam$kotlin_Comparator$0_1(tmp);
    return sortedWith(destination, tmp$ret$3);
  };
  protoOf(RecurringZoneRules).infoAtInstant_vx8xn8_k$ = function (instant, offsetAtYearStart) {
    var approximateYear = toLocalDateTime(instant, offsetAtYearStart).get_year_woy26e_k$();
    var offset = offsetAtYearStart;
    var _iterator__ex2g4s = this.rulesForYear_x4abwp_k$(approximateYear).iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var rule = _iterator__ex2g4s.next_20eer_k$();
      if (instant.compareTo_j3tkzn_k$(rule.transitionDateTime_1) < 0) {
        return rule.offsetBefore_1;
      }
      offset = rule.offsetAfter_1;
    }
    var tmp;
    if (toLocalDateTime(instant, offset).get_year_woy26e_k$() === approximateYear) {
      tmp = offset;
    } else {
      tmp = this.infoAtInstant_vx8xn8_k$(instant, offset);
    }
    return tmp;
  };
  protoOf(RecurringZoneRules).infoAtLocalDateTime_gnc9mx_k$ = function (localDateTime, offsetAtYearStart) {
    var year = localDateTime.get_year_woy26e_k$();
    var offset = offsetAtYearStart;
    var _iterator__ex2g4s = this.rulesForYear_x4abwp_k$(year).iterator_jk1svi_k$();
    $l$loop: while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var rule = _iterator__ex2g4s.next_20eer_k$();
      var ldtBefore = toLocalDateTime(rule.transitionDateTime_1, rule.offsetBefore_1);
      var ldtAfter = toLocalDateTime(rule.transitionDateTime_1, rule.offsetAfter_1);
      var tmp;
      if (localDateTime.compareTo_fh2md_k$(ldtBefore) < 0 && localDateTime.compareTo_fh2md_k$(ldtAfter) < 0) {
        tmp = new Regular(rule.offsetBefore_1);
      } else if (localDateTime.compareTo_fh2md_k$(ldtBefore) >= 0 && localDateTime.compareTo_fh2md_k$(ldtAfter) >= 0) {
        offset = rule.offsetAfter_1;
        continue $l$loop;
      } else if (ldtAfter.compareTo_fh2md_k$(ldtBefore) < 0) {
        tmp = new Overlap(rule.transitionDateTime_1, rule.offsetBefore_1, rule.offsetAfter_1);
      } else {
        tmp = new Gap(rule.transitionDateTime_1, rule.offsetBefore_1, rule.offsetAfter_1);
      }
      return tmp;
    }
    return new Regular(offset);
  };
  protoOf(RecurringZoneRules).toString = function () {
    return joinToString(this.rules_1, ', ');
  };
  function get_ISO_OFFSET_BASIC_NO_Z() {
    _init_properties_Tzfile_kt__4me63m();
    var tmp0 = ISO_OFFSET_BASIC_NO_Z$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ISO_OFFSET_BASIC_NO_Z', 0, tmp, _get_ISO_OFFSET_BASIC_NO_Z_$ref_qz5i5b(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var ISO_OFFSET_BASIC_NO_Z$delegate;
  function ISO_OFFSET_BASIC_NO_Z$delegate$lambda() {
    _init_properties_Tzfile_kt__4me63m();
    var tmp = Companion_getInstance_29();
    return tmp.Format_lu8ljq_k$(ISO_OFFSET_BASIC_NO_Z$delegate$lambda$lambda);
  }
  function ISO_OFFSET_BASIC_NO_Z$delegate$lambda$lambda($this$Format) {
    _init_properties_Tzfile_kt__4me63m();
    $this$Format.offsetHours$default_2ga4wd_k$();
    optional($this$Format, VOID, ISO_OFFSET_BASIC_NO_Z$delegate$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ISO_OFFSET_BASIC_NO_Z$delegate$lambda$lambda$lambda($this$optional) {
    _init_properties_Tzfile_kt__4me63m();
    $this$optional.offsetMinutesOfHour$default_3itngo_k$();
    optional($this$optional, VOID, ISO_OFFSET_BASIC_NO_Z$delegate$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ISO_OFFSET_BASIC_NO_Z$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_Tzfile_kt__4me63m();
    $this$optional.offsetSecondsOfMinute$default_fqi77c_k$();
    return Unit_getInstance();
  }
  function _get_ISO_OFFSET_BASIC_NO_Z_$ref_qz5i5b() {
    return function () {
      return get_ISO_OFFSET_BASIC_NO_Z();
    };
  }
  var properties_initialized_Tzfile_kt_3lih0;
  function _init_properties_Tzfile_kt__4me63m() {
    if (!properties_initialized_Tzfile_kt_3lih0) {
      properties_initialized_Tzfile_kt_3lih0 = true;
      ISO_OFFSET_BASIC_NO_Z$delegate = lazy(ISO_OFFSET_BASIC_NO_Z$delegate$lambda);
    }
  }
  function safeAdd(a, b) {
    var sum = add(a, b);
    if (compare(bitwiseXor(a, sum), new Long(0, 0)) < 0 && compare(bitwiseXor(a, b), new Long(0, 0)) >= 0) {
      throw ArithmeticException_init_$Create$('Addition overflows a long: ' + a.toString() + ' + ' + b.toString());
    }
    return sum;
  }
  function safeMultiply(a, b) {
    if (equalsLong(b, new Long(1, 0))) {
      return a;
    }
    if (equalsLong(a, new Long(1, 0))) {
      return b;
    }
    if (equalsLong(a, new Long(0, 0)) || equalsLong(b, new Long(0, 0))) {
      return new Long(0, 0);
    }
    var total = multiply(a, b);
    if (!equalsLong(divide(total, b), a) || (equalsLong(a, new Long(0, -2147483648)) && equalsLong(b, new Long(-1, -1))) || (equalsLong(b, new Long(0, -2147483648)) && equalsLong(a, new Long(-1, -1)))) {
      throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
    }
    return total;
  }
  function safeMultiply_0(a, b) {
    var total = multiply(fromInt(a), fromInt(b));
    if (compare(total, new Long(-2147483648, -1)) < 0 || compare(total, new Long(2147483647, 0)) > 0) {
      throw ArithmeticException_init_$Create$('Multiplication overflows an int: ' + a + ' * ' + b);
    }
    return convertToInt(total);
  }
  function readTzdb() {
    var tmp;
    try {
      // Inline function 'kotlin.js.asDynamic' call
      var tzdbData = ZoneRulesProvider.getTzdbData();
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1 = tzdbData.zones;
      var tmp_0 = toList(tmp$ret$1);
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2 = tzdbData.links;
      tmp = to(tmp_0, toList(tmp$ret$2));
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_1 = null;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  //region block: post-declaration
  protoOf(Builder).appendAlternativeParsingImpl_9hljk3_k$ = appendAlternativeParsingImpl;
  protoOf(Builder).appendOptionalImpl_725ywl_k$ = appendOptionalImpl;
  protoOf(Builder).chars_pe6iqb_k$ = chars;
  protoOf(Builder).build_1k0s4u_k$ = build;
  protoOf(Builder).addFormatStructureForDate_t2v9hh_k$ = addFormatStructureForDate;
  protoOf(Builder).addFormatStructureForTime_h3r7lv_k$ = addFormatStructureForTime;
  protoOf(Builder).dateTime_q9thih_k$ = dateTime;
  protoOf(Builder).addFormatStructureForYearMonth_t4rp63_k$ = addFormatStructureForYearMonth;
  protoOf(Builder).day_qqmnko_k$ = day;
  protoOf(Builder).day$default_x56zi1_k$ = day$default;
  protoOf(Builder).dayOfWeek_tn8lxa_k$ = dayOfWeek;
  protoOf(Builder).dayOfYear_h9d7r8_k$ = dayOfYear;
  protoOf(Builder).dayOfYear$default_eurogr_k$ = dayOfYear$default;
  protoOf(Builder).date_aq11yp_k$ = date;
  protoOf(Builder).year_8xsdsn_k$ = year;
  protoOf(Builder).year$default_9maba2_k$ = year$default;
  protoOf(Builder).yearTwoDigits_3qj73h_k$ = yearTwoDigits;
  protoOf(Builder).monthNumber_vowj11_k$ = monthNumber;
  protoOf(Builder).monthNumber$default_7baaey_k$ = monthNumber$default;
  protoOf(Builder).monthName_asbkgr_k$ = monthName;
  protoOf(Builder).yearMonth_j7omjy_k$ = yearMonth;
  protoOf(Builder).dayOfMonth_xcq6p3_k$ = dayOfMonth;
  protoOf(Builder).dayOfMonth$default_g10v4o_k$ = dayOfMonth$default;
  protoOf(Builder).hour_8zk8ds_k$ = hour;
  protoOf(Builder).hour$default_sexqwx_k$ = hour$default;
  protoOf(Builder).amPmHour_pqhb5l_k$ = amPmHour;
  protoOf(Builder).amPmHour$default_jl1w4q_k$ = amPmHour$default;
  protoOf(Builder).amPmMarker_x3f1xv_k$ = amPmMarker;
  protoOf(Builder).minute_n70fvk_k$ = minute;
  protoOf(Builder).minute$default_g584a9_k$ = minute$default;
  protoOf(Builder).second_9gil1c_k$ = second;
  protoOf(Builder).second$default_h6j21d_k$ = second$default;
  protoOf(Builder).secondFraction_6m5e86_k$ = secondFraction_0;
  protoOf(Builder).secondFraction$default_94vkzq_k$ = secondFraction$default;
  protoOf(Builder).secondFraction_ezpdma_k$ = secondFraction;
  protoOf(Builder).time_eev9o3_k$ = time;
  protoOf(Builder).offsetHours_ci3yns_k$ = offsetHours;
  protoOf(Builder).offsetHours$default_2ga4wd_k$ = offsetHours$default;
  protoOf(Builder).offsetMinutesOfHour_jd2q5v_k$ = offsetMinutesOfHour;
  protoOf(Builder).offsetMinutesOfHour$default_3itngo_k$ = offsetMinutesOfHour$default;
  protoOf(Builder).offsetSecondsOfMinute_vkij2b_k$ = offsetSecondsOfMinute;
  protoOf(Builder).offsetSecondsOfMinute$default_fqi77c_k$ = offsetSecondsOfMinute$default;
  protoOf(Builder).offset_8ge9gu_k$ = offset;
  protoOf(Builder_0).appendAlternativeParsingImpl_9hljk3_k$ = appendAlternativeParsingImpl;
  protoOf(Builder_0).appendOptionalImpl_725ywl_k$ = appendOptionalImpl;
  protoOf(Builder_0).chars_pe6iqb_k$ = chars;
  protoOf(Builder_0).build_1k0s4u_k$ = build;
  protoOf(Builder_0).addFormatStructureForYearMonth_t4rp63_k$ = addFormatStructureForYearMonth;
  protoOf(Builder_0).day_qqmnko_k$ = day;
  protoOf(Builder_0).day$default_x56zi1_k$ = day$default;
  protoOf(Builder_0).dayOfWeek_tn8lxa_k$ = dayOfWeek;
  protoOf(Builder_0).dayOfYear_h9d7r8_k$ = dayOfYear;
  protoOf(Builder_0).dayOfYear$default_eurogr_k$ = dayOfYear$default;
  protoOf(Builder_0).date_aq11yp_k$ = date;
  protoOf(Builder_0).year_8xsdsn_k$ = year;
  protoOf(Builder_0).year$default_9maba2_k$ = year$default;
  protoOf(Builder_0).yearTwoDigits_3qj73h_k$ = yearTwoDigits;
  protoOf(Builder_0).monthNumber_vowj11_k$ = monthNumber;
  protoOf(Builder_0).monthNumber$default_7baaey_k$ = monthNumber$default;
  protoOf(Builder_0).monthName_asbkgr_k$ = monthName;
  protoOf(Builder_0).yearMonth_j7omjy_k$ = yearMonth;
  protoOf(Builder_0).dayOfMonth_xcq6p3_k$ = dayOfMonth;
  protoOf(Builder_0).dayOfMonth$default_g10v4o_k$ = dayOfMonth$default;
  protoOf(Builder_1).appendAlternativeParsingImpl_9hljk3_k$ = appendAlternativeParsingImpl;
  protoOf(Builder_1).appendOptionalImpl_725ywl_k$ = appendOptionalImpl;
  protoOf(Builder_1).chars_pe6iqb_k$ = chars;
  protoOf(Builder_1).build_1k0s4u_k$ = build;
  protoOf(Builder_1).addFormatStructureForDate_t2v9hh_k$ = addFormatStructureForDate;
  protoOf(Builder_1).addFormatStructureForTime_h3r7lv_k$ = addFormatStructureForTime;
  protoOf(Builder_1).dateTime_q9thih_k$ = dateTime;
  protoOf(Builder_1).addFormatStructureForYearMonth_t4rp63_k$ = addFormatStructureForYearMonth;
  protoOf(Builder_1).day_qqmnko_k$ = day;
  protoOf(Builder_1).day$default_x56zi1_k$ = day$default;
  protoOf(Builder_1).dayOfWeek_tn8lxa_k$ = dayOfWeek;
  protoOf(Builder_1).dayOfYear_h9d7r8_k$ = dayOfYear;
  protoOf(Builder_1).dayOfYear$default_eurogr_k$ = dayOfYear$default;
  protoOf(Builder_1).date_aq11yp_k$ = date;
  protoOf(Builder_1).year_8xsdsn_k$ = year;
  protoOf(Builder_1).year$default_9maba2_k$ = year$default;
  protoOf(Builder_1).yearTwoDigits_3qj73h_k$ = yearTwoDigits;
  protoOf(Builder_1).monthNumber_vowj11_k$ = monthNumber;
  protoOf(Builder_1).monthNumber$default_7baaey_k$ = monthNumber$default;
  protoOf(Builder_1).monthName_asbkgr_k$ = monthName;
  protoOf(Builder_1).yearMonth_j7omjy_k$ = yearMonth;
  protoOf(Builder_1).dayOfMonth_xcq6p3_k$ = dayOfMonth;
  protoOf(Builder_1).dayOfMonth$default_g10v4o_k$ = dayOfMonth$default;
  protoOf(Builder_1).hour_8zk8ds_k$ = hour;
  protoOf(Builder_1).hour$default_sexqwx_k$ = hour$default;
  protoOf(Builder_1).amPmHour_pqhb5l_k$ = amPmHour;
  protoOf(Builder_1).amPmHour$default_jl1w4q_k$ = amPmHour$default;
  protoOf(Builder_1).amPmMarker_x3f1xv_k$ = amPmMarker;
  protoOf(Builder_1).minute_n70fvk_k$ = minute;
  protoOf(Builder_1).minute$default_g584a9_k$ = minute$default;
  protoOf(Builder_1).second_9gil1c_k$ = second;
  protoOf(Builder_1).second$default_h6j21d_k$ = second$default;
  protoOf(Builder_1).secondFraction_6m5e86_k$ = secondFraction_0;
  protoOf(Builder_1).secondFraction$default_94vkzq_k$ = secondFraction$default;
  protoOf(Builder_1).secondFraction_ezpdma_k$ = secondFraction;
  protoOf(Builder_1).time_eev9o3_k$ = time;
  protoOf(IncompleteLocalTime).set_fractionOfSecond_ixjooe_k$ = set_fractionOfSecond;
  protoOf(IncompleteLocalTime).get_fractionOfSecond_3ubmju_k$ = get_fractionOfSecond;
  protoOf(Builder_2).appendAlternativeParsingImpl_9hljk3_k$ = appendAlternativeParsingImpl;
  protoOf(Builder_2).appendOptionalImpl_725ywl_k$ = appendOptionalImpl;
  protoOf(Builder_2).chars_pe6iqb_k$ = chars;
  protoOf(Builder_2).build_1k0s4u_k$ = build;
  protoOf(Builder_2).hour_8zk8ds_k$ = hour;
  protoOf(Builder_2).hour$default_sexqwx_k$ = hour$default;
  protoOf(Builder_2).amPmHour_pqhb5l_k$ = amPmHour;
  protoOf(Builder_2).amPmHour$default_jl1w4q_k$ = amPmHour$default;
  protoOf(Builder_2).amPmMarker_x3f1xv_k$ = amPmMarker;
  protoOf(Builder_2).minute_n70fvk_k$ = minute;
  protoOf(Builder_2).minute$default_g584a9_k$ = minute$default;
  protoOf(Builder_2).second_9gil1c_k$ = second;
  protoOf(Builder_2).second$default_h6j21d_k$ = second$default;
  protoOf(Builder_2).secondFraction_6m5e86_k$ = secondFraction_0;
  protoOf(Builder_2).secondFraction$default_94vkzq_k$ = secondFraction$default;
  protoOf(Builder_2).secondFraction_ezpdma_k$ = secondFraction;
  protoOf(Builder_2).time_eev9o3_k$ = time;
  protoOf(Builder_3).appendAlternativeParsingImpl_9hljk3_k$ = appendAlternativeParsingImpl;
  protoOf(Builder_3).appendOptionalImpl_725ywl_k$ = appendOptionalImpl;
  protoOf(Builder_3).chars_pe6iqb_k$ = chars;
  protoOf(Builder_3).build_1k0s4u_k$ = build;
  protoOf(Builder_3).offsetHours_ci3yns_k$ = offsetHours;
  protoOf(Builder_3).offsetHours$default_2ga4wd_k$ = offsetHours$default;
  protoOf(Builder_3).offsetMinutesOfHour_jd2q5v_k$ = offsetMinutesOfHour;
  protoOf(Builder_3).offsetMinutesOfHour$default_3itngo_k$ = offsetMinutesOfHour$default;
  protoOf(Builder_3).offsetSecondsOfMinute_vkij2b_k$ = offsetSecondsOfMinute;
  protoOf(Builder_3).offsetSecondsOfMinute$default_fqi77c_k$ = offsetSecondsOfMinute$default;
  protoOf(Builder_3).offset_8ge9gu_k$ = offset;
  protoOf(Builder_4).appendAlternativeParsingImpl_9hljk3_k$ = appendAlternativeParsingImpl;
  protoOf(Builder_4).appendOptionalImpl_725ywl_k$ = appendOptionalImpl;
  protoOf(Builder_4).chars_pe6iqb_k$ = chars;
  protoOf(Builder_4).build_1k0s4u_k$ = build;
  protoOf(Builder_4).year_8xsdsn_k$ = year;
  protoOf(Builder_4).year$default_9maba2_k$ = year$default;
  protoOf(Builder_4).yearTwoDigits_3qj73h_k$ = yearTwoDigits;
  protoOf(Builder_4).monthNumber_vowj11_k$ = monthNumber;
  protoOf(Builder_4).monthNumber$default_7baaey_k$ = monthNumber$default;
  protoOf(Builder_4).monthName_asbkgr_k$ = monthName;
  protoOf(Builder_4).yearMonth_j7omjy_k$ = yearMonth;
  protoOf(PropertyAccessor).getterNotNull_rjcshh_k$ = getterNotNull;
  protoOf(SpacePaddedFormatter).format$default_fwaxfk_k$ = format$default;
  protoOf(SignedFormatter).format$default_fwaxfk_k$ = format$default;
  protoOf(ConditionalFormatter).format$default_fwaxfk_k$ = format$default;
  protoOf(ConcatenatedFormatter).format$default_fwaxfk_k$ = format$default;
  protoOf(UnsignedIntFormatterStructure).format$default_fwaxfk_k$ = format$default;
  protoOf(StringFormatterStructure).format$default_fwaxfk_k$ = format$default;
  protoOf(DecimalFractionFormatterStructure).format$default_fwaxfk_k$ = format$default;
  protoOf(SignedIntFormatterStructure).format$default_fwaxfk_k$ = format$default;
  protoOf(ReducedIntFormatterStructure).format$default_fwaxfk_k$ = format$default;
  protoOf(ConstantStringFormatterStructure).format$default_fwaxfk_k$ = format$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LocalTime;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime.js.map
