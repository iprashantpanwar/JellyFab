(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.vl;
  var protoOf = kotlin_kotlin.$_$.yg;
  var Annotation = kotlin_kotlin.$_$.al;
  var initMetadataForClass = kotlin_kotlin.$_$.vf;
  var VOID = kotlin_kotlin.$_$.e;
  var getKClass = kotlin_kotlin.$_$.fi;
  var getStringHashCode = kotlin_kotlin.$_$.tf;
  var toString = kotlin_kotlin.$_$.bh;
  var initMetadataForInterface = kotlin_kotlin.$_$.zf;
  var asList = kotlin_kotlin.$_$.h7;
  var objectCreate = kotlin_kotlin.$_$.xg;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.y4;
  var Unit_getInstance = kotlin_kotlin.$_$.n5;
  var emptyList = kotlin_kotlin.$_$.l9;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.um;
  var KProperty1 = kotlin_kotlin.$_$.ki;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sf;
  var getKClassFromExpression = kotlin_kotlin.$_$.ei;
  var Grouping = kotlin_kotlin.$_$.y5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var zip = kotlin_kotlin.$_$.yc;
  var toMap = kotlin_kotlin.$_$.tc;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var mapCapacity = kotlin_kotlin.$_$.xa;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var KtMap = kotlin_kotlin.$_$.k6;
  var isInterface = kotlin_kotlin.$_$.kg;
  var captureStack = kotlin_kotlin.$_$.cf;
  var listOf = kotlin_kotlin.$_$.va;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.t1;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.v1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.x1;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.s1;
  var IllegalArgumentException = kotlin_kotlin.$_$.ll;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var KClass = kotlin_kotlin.$_$.gi;
  var Triple = kotlin_kotlin.$_$.xl;
  var Pair = kotlin_kotlin.$_$.sl;
  var Entry = kotlin_kotlin.$_$.i6;
  var KtMutableMap = kotlin_kotlin.$_$.s6;
  var LinkedHashMap = kotlin_kotlin.$_$.d6;
  var HashMap = kotlin_kotlin.$_$.z5;
  var KtSet = kotlin_kotlin.$_$.x6;
  var KtMutableSet = kotlin_kotlin.$_$.u6;
  var LinkedHashSet = kotlin_kotlin.$_$.e6;
  var HashSet = kotlin_kotlin.$_$.a6;
  var Collection = kotlin_kotlin.$_$.x5;
  var KtList = kotlin_kotlin.$_$.h6;
  var KtMutableList = kotlin_kotlin.$_$.p6;
  var ArrayList = kotlin_kotlin.$_$.w5;
  var copyToArray = kotlin_kotlin.$_$.i9;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.h3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.g3;
  var Result = kotlin_kotlin.$_$.tl;
  var ensureNotNull = kotlin_kotlin.$_$.pm;
  var equals = kotlin_kotlin.$_$.nf;
  var Iterator = kotlin_kotlin.$_$.c6;
  var Iterable = kotlin_kotlin.$_$.b6;
  var isBlank = kotlin_kotlin.$_$.mj;
  var toList = kotlin_kotlin.$_$.sc;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.s;
  var toHashSet = kotlin_kotlin.$_$.mc;
  var toBooleanArray = kotlin_kotlin.$_$.kc;
  var withIndex = kotlin_kotlin.$_$.xc;
  var to = kotlin_kotlin.$_$.jn;
  var lazy_0 = kotlin_kotlin.$_$.vm;
  var contentEquals = kotlin_kotlin.$_$.x7;
  var until = kotlin_kotlin.$_$.ci;
  var joinToString = kotlin_kotlin.$_$.ia;
  var initMetadataForObject = kotlin_kotlin.$_$.bg;
  var Long = kotlin_kotlin.$_$.ol;
  var Char = kotlin_kotlin.$_$.el;
  var initMetadataForCompanion = kotlin_kotlin.$_$.wf;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.u2;
  var Duration = kotlin_kotlin.$_$.wk;
  var Companion_getInstance = kotlin_kotlin.$_$.c5;
  var Uuid = kotlin_kotlin.$_$.zk;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.f5;
  var toIntOrNull = kotlin_kotlin.$_$.mk;
  var hashCode = kotlin_kotlin.$_$.uf;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.n;
  var isArray = kotlin_kotlin.$_$.cg;
  var arrayIterator = kotlin_kotlin.$_$.af;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.w;
  var step = kotlin_kotlin.$_$.bi;
  var getValue = kotlin_kotlin.$_$.ba;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.r;
  var toString_0 = kotlin_kotlin.$_$.in;
  var KTypeParameter = kotlin_kotlin.$_$.li;
  var contentHashCode = kotlin_kotlin.$_$.l8;
  var booleanArray = kotlin_kotlin.$_$.bf;
  var emptyMap = kotlin_kotlin.$_$.m9;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.s4;
  var isBooleanArray = kotlin_kotlin.$_$.dg;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.g5;
  var isCharArray = kotlin_kotlin.$_$.fg;
  var charArray = kotlin_kotlin.$_$.ef;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.u4;
  var isDoubleArray = kotlin_kotlin.$_$.hg;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.v4;
  var isFloatArray = kotlin_kotlin.$_$.ig;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.w4;
  var isIntArray = kotlin_kotlin.$_$.jg;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.h5;
  var isLongArray = kotlin_kotlin.$_$.lg;
  var longArray = kotlin_kotlin.$_$.qg;
  var coerceAtLeast = kotlin_kotlin.$_$.oh;
  var copyOf = kotlin_kotlin.$_$.b9;
  var copyOf_0 = kotlin_kotlin.$_$.c9;
  var copyOf_1 = kotlin_kotlin.$_$.e9;
  var copyOf_2 = kotlin_kotlin.$_$.f9;
  var copyOf_3 = kotlin_kotlin.$_$.h9;
  var copyOf_4 = kotlin_kotlin.$_$.a9;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.l5;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.f4;
  var ULongArray = kotlin_kotlin.$_$.cm;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.b4;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.y3;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.d4;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.z3;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.k5;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.w3;
  var UIntArray = kotlin_kotlin.$_$.am;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.s3;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.q3;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.u3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.r3;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.x4;
  var isShortArray = kotlin_kotlin.$_$.mg;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.m5;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.n4;
  var UShortArray = kotlin_kotlin.$_$.em;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.j4;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.h4;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.l4;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.i4;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.t4;
  var isByteArray = kotlin_kotlin.$_$.eg;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.j5;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.o3;
  var UByteArray = kotlin_kotlin.$_$.yl;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.l3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.i3;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.m3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.j3;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.g4;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.c4;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.e4;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.x3;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.t3;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.v3;
  var copyOf_5 = kotlin_kotlin.$_$.z8;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.o4;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.k4;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.m4;
  var copyOf_6 = kotlin_kotlin.$_$.d9;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.p3;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.k3;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.n3;
  var trimIndent = kotlin_kotlin.$_$.tk;
  var Unit = kotlin_kotlin.$_$.gm;
  var ULong = kotlin_kotlin.$_$.dm;
  var UInt = kotlin_kotlin.$_$.bm;
  var UShort = kotlin_kotlin.$_$.fm;
  var UByte = kotlin_kotlin.$_$.zl;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wm;
  var asSequence = kotlin_kotlin.$_$.j7;
  var nextAssociatedObjectId = kotlin_kotlin.$_$.sg;
  var get_indices = kotlin_kotlin.$_$.fa;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var get_indices_0 = kotlin_kotlin.$_$.da;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.b5;
  var mapOf = kotlin_kotlin.$_$.za;
  var get_js = kotlin_kotlin.$_$.og;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.i5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.e3;
  var createFailure = kotlin_kotlin.$_$.om;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(InternalSerializationApi, 'InternalSerializationApi', VOID, VOID, [Annotation]);
  initMetadataForClass(ExperimentalSerializationApi, 'ExperimentalSerializationApi', VOID, VOID, [Annotation]);
  initMetadataForClass(Serializable, 'Serializable', VOID, VOID, [Annotation]);
  initMetadataForInterface(SerializationStrategy, 'SerializationStrategy');
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [SerializationStrategy, DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SealedClassSerializer$$inlined$groupingBy$1, VOID, VOID, VOID, [Grouping]);
  initMetadataForClass(SealedClassSerializer, 'SealedClassSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(MissingFieldException, 'MissingFieldException', VOID, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementDescriptors$1, VOID, VOID, VOID, [Iterator]);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1, VOID, VOID, VOID, [Iterable]);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(BYTE, 'BYTE', VOID, PrimitiveKind);
  initMetadataForObject(CHAR, 'CHAR', VOID, PrimitiveKind);
  initMetadataForObject(SHORT, 'SHORT', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(FLOAT, 'FLOAT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.deserialize_sy6x50_k$(this);
  }
  function decodeNullableSerializableValue(deserializer) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$();
    var tmp;
    if (isNullabilitySupported || this.decodeNotNullMark_us4ba1_k$()) {
      tmp = this.decodeSerializableValue_xpnpad_k$(deserializer);
    } else {
      tmp = this.decodeNull_jzrmuj_k$();
    }
    return tmp;
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.decodeSerializableElement_uahnnv_k$(descriptor, index, deserializer, previousValue) : $super.decodeSerializableElement_uahnnv_k$.call(this, descriptor, index, deserializer, previousValue);
  }
  function decodeNullableSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.decodeNullableSerializableElement_k2y6ab_k$(descriptor, index, deserializer, previousValue) : $super.decodeNullableSerializableElement_k2y6ab_k$.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.beginStructure_yljocp_k$(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.serialize_5ase3y_k$(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$();
    if (isNullabilitySupported) {
      return this.encodeSerializableValue_3uuzip_k$(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.encodeNull_ejiosz_k$();
    } else {
      this.encodeNotNullMark_415a1t_k$();
      this.encodeSerializableValue_3uuzip_k$(serializer, value);
    }
  }
  initMetadataForInterface(Encoder, 'Encoder');
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  initMetadataForInterface(CompositeEncoder, 'CompositeEncoder');
  initMetadataForClass(AbstractEncoder, 'AbstractEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForCompanion(Companion);
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UuidSerializer, 'UuidSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(ArrayClassDesc, 'ArrayClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(HashSetClassDesc, 'HashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(HashMapClassDesc, 'HashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(ReferenceArraySerializer, 'ReferenceArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArraySerializer, 'PrimitiveArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder');
  initMetadataForClass(HashSetSerializer, 'HashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(LinkedHashSetSerializer, 'LinkedHashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(HashMapSerializer, 'HashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(NoOpEncoder, 'NoOpEncoder', VOID, AbstractEncoder);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  function isStored(key) {
    return false;
  }
  initMetadataForInterface(SerializerCache, 'SerializerCache');
  function get$default(key, types, $super) {
    types = types === VOID ? emptyList() : types;
    return $super === VOID ? this.get_zd31r2_k$(key, types) : $super.get_zd31r2_k$.call(this, key, types).value_1;
  }
  initMetadataForInterface(ParametrizedSerializerCache, 'ParametrizedSerializerCache');
  initMetadataForInterface(SerializerFactory, 'SerializerFactory');
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForClass(BooleanArrayBuilder, 'BooleanArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(DoubleArrayBuilder, 'DoubleArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(FloatArrayBuilder, 'FloatArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(IntArrayBuilder, 'IntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(LongArrayBuilder, 'LongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForClass(ULongArrayBuilder, 'ULongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UIntArrayBuilder, 'UIntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ShortArrayBuilder, 'ShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UShortArrayBuilder, 'UShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ByteArrayBuilder, 'ByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UByteArrayBuilder, 'UByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharSerializer, 'CharSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FloatSerializer, 'FloatSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortSerializer, 'ShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ByteSerializer, 'ByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UnitSerializer, 'UnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(KeyValueSerializer, 'KeyValueSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(MapEntrySerializer_0, 'MapEntrySerializer', VOID, KeyValueSerializer);
  initMetadataForClass(PairSerializer_0, 'PairSerializer', VOID, KeyValueSerializer);
  initMetadataForClass(TripleSerializer_0, 'TripleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.contextual_lh3eph_k$(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  function polymorphicDefault(baseClass, defaultDeserializerProvider) {
    this.polymorphicDefaultDeserializer_ur850q_k$(baseClass, defaultDeserializerProvider);
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(overwriteWith$1, VOID, VOID, VOID, [SerializersModuleCollector]);
  initMetadataForClass(SerializersModuleBuilder, 'SerializersModuleBuilder', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForClass(SerializerAlreadyRegisteredException, 'SerializerAlreadyRegisteredException', VOID, IllegalArgumentException);
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, [Annotation], VOID, nextAssociatedObjectId());
  initMetadataForClass(createCache$1, VOID, VOID, VOID, [SerializerCache]);
  initMetadataForClass(createParametrizedCache$1, VOID, VOID, VOID, [ParametrizedSerializerCache]);
  //endregion
  function InternalSerializationApi() {
  }
  protoOf(InternalSerializationApi).equals = function (other) {
    if (!(other instanceof InternalSerializationApi))
      return false;
    other instanceof InternalSerializationApi || THROW_CCE();
    return true;
  };
  protoOf(InternalSerializationApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalSerializationApi).toString = function () {
    return '@kotlinx.serialization.InternalSerializationApi(' + ')';
  };
  function ExperimentalSerializationApi() {
  }
  protoOf(ExperimentalSerializationApi).equals = function (other) {
    if (!(other instanceof ExperimentalSerializationApi))
      return false;
    other instanceof ExperimentalSerializationApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalSerializationApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalSerializationApi).toString = function () {
    return '@kotlinx.serialization.ExperimentalSerializationApi(' + ')';
  };
  function Serializable(with_0) {
    with_0 = with_0 === VOID ? getKClass(KSerializer) : with_0;
    this.with_1 = with_0;
  }
  protoOf(Serializable).get_with_wowvm7_k$ = function () {
    return this.with_1;
  };
  protoOf(Serializable).equals = function (other) {
    if (!(other instanceof Serializable))
      return false;
    var tmp0_other_with_cast = other instanceof Serializable ? other : THROW_CCE();
    if (!this.with_1.equals(tmp0_other_with_cast.with_1))
      return false;
    return true;
  };
  protoOf(Serializable).hashCode = function () {
    return imul(getStringHashCode('with'), 127) ^ this.with_1.hashCode();
  };
  protoOf(Serializable).toString = function () {
    return '@kotlinx.serialization.Serializable(' + 'with=' + toString(this.with_1) + ')';
  };
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, $this) {
    PolymorphicSerializer.call($this, baseClass);
    $this._annotations_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, objectCreate(protoOf(PolymorphicSerializer)));
  }
  function _set__annotations__kk13ma($this, _set____db54di) {
    $this._annotations_1 = _set____db54di;
  }
  function _get__annotations__yxc7sq($this) {
    return $this._annotations_1;
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.element$default_ey7ac9_k$('type', serializer_2(StringCompanionObject_getInstance()).get_descriptor_wjt6a0_k$());
      $this$buildSerialDescriptor.element$default_ey7ac9_k$('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.baseClass_1.get_simpleName_r6f8py_k$() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.set_annotations_x27pt8_k$(this$0._annotations_1);
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.baseClass_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return function (p0) {
      return p0.get_descriptor_wjt6a0_k$();
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.baseClass_1 = baseClass;
    this._annotations_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.descriptor$delegate_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).get_baseClass_lygw3m_k$ = function () {
    return this.baseClass_1;
  };
  protoOf(PolymorphicSerializer).get_descriptor_wjt6a0_k$ = function () {
    var tmp0 = this.descriptor$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.baseClass_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.findPolymorphicSerializerOrNull_sqpvzc_k$(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.get_baseClass_lygw3m_k$());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.findPolymorphicSerializerOrNull_o3cszk_k$(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.get_baseClass_lygw3m_k$());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this._annotations_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, objectCreate(protoOf(SealedClassSerializer)));
  }
  function _set__annotations__kk13ma_0($this, _set____db54di) {
    $this._annotations_1 = _set____db54di;
  }
  function _get__annotations__yxc7sq_0($this) {
    return $this._annotations_1;
  }
  function _get_class2Serializer__mdbm1r($this) {
    return $this.class2Serializer_1;
  }
  function _get_serialName2Serializer__sjlyic($this) {
    return $this.serialName2Serializer_1;
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = this$0.serialName2Serializer_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlin.collections.component1' call
        var name = element.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element.get_value_j01efc_k$();
        $this$buildSerialDescriptor.element$default_ey7ac9_k$(name, serializer.get_descriptor_wjt6a0_k$());
      }
      return Unit_getInstance();
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.element$default_ey7ac9_k$('type', serializer_2(StringCompanionObject_getInstance()).get_descriptor_wjt6a0_k$());
      var tmp = 'kotlinx.serialization.Sealed<' + this$0.baseClass_1.get_simpleName_r6f8py_k$() + '>';
      var tmp_0 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor(tmp, tmp_0, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0));
      $this$buildSerialDescriptor.element$default_ey7ac9_k$('value', elementDescriptor);
      $this$buildSerialDescriptor.set_annotations_x27pt8_k$(this$0._annotations_1);
      return Unit_getInstance();
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = SEALED_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function SealedClassSerializer$_get_descriptor_$ref_m511rz() {
    return function (p0) {
      return p0.get_descriptor_wjt6a0_k$();
    };
  }
  function SealedClassSerializer$$inlined$groupingBy$1($this) {
    this.$this_1 = $this;
  }
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).sourceIterator_2zqxcn_k$ = function () {
    return this.$this_1.iterator_jk1svi_k$();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).keyOf_qdhuon_k$ = function (element) {
    return element.get_value_j01efc_k$().get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).keyOf_d1fr09_k$ = function (element) {
    return this.keyOf_qdhuon_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.baseClass_1 = baseClass;
    this._annotations_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.descriptor$delegate_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.baseClass_1.get_simpleName_r6f8py_k$() + ' should be marked @Serializable');
    }
    this.class2Serializer_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    // Inline function 'kotlin.collections.groupingBy' call
    var this_0 = this.class2Serializer_1.get_entries_p20ztl_k$();
    // Inline function 'kotlin.collections.aggregate' call
    var tmp0 = new SealedClassSerializer$$inlined$groupingBy$1(this_0);
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.collections.aggregateTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = tmp0.sourceIterator_2zqxcn_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var e = _iterator__ex2g4s.next_20eer_k$();
      var key = tmp0.keyOf_d1fr09_k$(e);
      var accumulator = destination.get_wei43m_k$(key);
      accumulator == null && !destination.containsKey_aw81wo_k$(key);
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var message = "Multiple sealed subclasses of '" + toString(this.baseClass_1) + "' have the same serial name '" + key + "':" + (" '" + toString(accumulator.get_key_18j28a_k$()) + "', '" + toString(e.get_key_18j28a_k$()) + "'");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.set' call
      destination.put_4fpzoq_k$(key, e);
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.get_size_woubt6_k$()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_0 = destination.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s_0.next_20eer_k$();
      var tmp_2 = element.get_key_18j28a_k$();
      var tmp$ret$8 = element.get_value_j01efc_k$().get_value_j01efc_k$();
      destination_0.put_4fpzoq_k$(tmp_2, tmp$ret$8);
    }
    tmp_1.serialName2Serializer_1 = destination_0;
  }
  protoOf(SealedClassSerializer).get_baseClass_lygw3m_k$ = function () {
    return this.baseClass_1;
  };
  protoOf(SealedClassSerializer).get_descriptor_wjt6a0_k$ = function () {
    var tmp0 = this.descriptor$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, SealedClassSerializer$_get_descriptor_$ref_m511rz(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SealedClassSerializer).findPolymorphicSerializerOrNull_o3cszk_k$ = function (decoder, klassName) {
    // Inline function 'kotlin.collections.get' call
    var this_0 = this.serialName2Serializer_1;
    var tmp0_elvis_lhs = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).get_wei43m_k$(klassName);
    return tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).findPolymorphicSerializerOrNull_o3cszk_k$.call(this, decoder, klassName) : tmp0_elvis_lhs;
  };
  protoOf(SealedClassSerializer).findPolymorphicSerializerOrNull_sqpvzc_k$ = function (encoder, value) {
    var tmp0_elvis_lhs = this.class2Serializer_1.get_wei43m_k$(getKClassFromExpression(value));
    var tmp1_safe_receiver = tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).findPolymorphicSerializerOrNull_sqpvzc_k$.call(this, encoder, value) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, SerializationStrategy) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  };
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.get_size_woubt6_k$() === 1 ? "Field '" + missingFields.get_c1px32_k$(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException_init_$Init$_0(missingField, serialName, $this) {
    MissingFieldException.call($this, listOf(missingField), "Field '" + missingField + "' is required for type with serial name '" + serialName + "', but it was missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$_0(missingField, serialName) {
    var tmp = MissingFieldException_init_$Init$_0(missingField, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$_0);
    return tmp;
  }
  function MissingFieldException_init_$Init$_1(missingField, $this) {
    MissingFieldException.call($this, listOf(missingField), "Field '" + missingField + "' is required, but it was missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$_1(missingField) {
    var tmp = MissingFieldException_init_$Init$_1(missingField, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$_1);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.missingFields_1 = missingFields;
  }
  protoOf(MissingFieldException).get_missingFields_wryzxm_k$ = function () {
    return this.missingFields_1;
  };
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_1(message, cause) {
    var tmp = SerializationException_init_$Init$_1(message, cause, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_1);
    return tmp;
  }
  function SerializationException_init_$Init$_2(cause, $this) {
    IllegalArgumentException_init_$Init$_2(cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_2(cause) {
    var tmp = SerializationException_init_$Init$_2(cause, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_2);
    return tmp;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s = typeArguments.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        var tmp$ret$0 = serializer(_this__u8e3s4, item);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s_0 = typeArguments.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var item_0 = _iterator__ex2g4s_0.next_20eer_k$();
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$3 = tmp_0;
        destination_0.add_utx5q5_k$(tmp$ret$3);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (_this__u8e3s4.equals(getKClass(Collection)) || _this__u8e3s4.equals(getKClass(KtList)) || (_this__u8e3s4.equals(getKClass(KtMutableList)) || _this__u8e3s4.equals(getKClass(ArrayList)))) {
      tmp = new ArrayListSerializer(serializers.get_c1px32_k$(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.get_c1px32_k$(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.get_c1px32_k$(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.get_c1px32_k$(0), serializers.get_c1px32_k$(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.get_c1px32_k$(0), serializers.get_c1px32_k$(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.get_c1px32_k$(0), serializers.get_c1px32_k$(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.get_c1px32_k$(0), serializers.get_c1px32_k$(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.get_c1px32_k$(0), serializers.get_c1px32_k$(1), serializers.get_c1px32_k$(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.get_c1px32_k$(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializer_0(type) {
    return serializer(EmptySerializersModule_0(), type);
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.get_isMarkedNullable_4el8ow_k$();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.get_arguments_p5ddub_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$0 = typeOrThrow(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.isEmpty_y1axqb_k$()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.getContextual$default_o8kdzb_k$(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.get_hasInterfaceContextualSerializers_ia3ak6_k$()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
        var tmp_2;
        if (_Result___get_isFailure__impl__jpiriv(this_1)) {
          tmp_2 = null;
        } else {
          var tmp_3 = _Result___get_value__impl__bjfvqg(this_1);
          tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        }
        tmp_1 = tmp_2;
      }
      tmp = tmp_1;
    }
    var cachedSerializer = tmp;
    if (!(cachedSerializer == null))
      return cachedSerializer;
    var tmp_4;
    if (typeArguments.isEmpty_y1axqb_k$()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.getContextual$default_o8kdzb_k$(rootClass) : tmp0_elvis_lhs;
      var tmp_5;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_5 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_5 = tmp1_elvis_lhs;
      }
      tmp_4 = tmp_5;
    } else {
      var tmp2_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_6;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var serializers = tmp_6;
      var tmp3_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.getContextual_7czf62_k$(rootClass, serializers) : tmp3_elvis_lhs;
      var tmp_7;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_7 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_7 = tmp4_elvis_lhs;
      }
      tmp_4 = tmp_7;
    }
    var contextualSerializer = tmp_4;
    var tmp_8;
    if (contextualSerializer == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_8 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp6_safe_receiver = tmp_8;
    return tmp6_safe_receiver == null ? null : nullable(tmp6_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.get_c1px32_k$(0).get_classifier_ottyl2_k$();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function polymorphicIfInterface(_this__u8e3s4) {
    _init_properties_SerializersCache_kt__hgwi2p();
    return isInterface_0(_this__u8e3s4) ? new PolymorphicSerializer(_this__u8e3s4) : null;
  }
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().get_dwpfd5_k$(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().get_dwpfd5_k$(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().get_zd31r2_k$(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().get_zd31r2_k$(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_nullable(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_0 = isInterface(tmp2_safe_receiver, KSerializer) ? tmp2_safe_receiver : THROW_CCE();
    }
    return tmp_0;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.get_c1px32_k$(0).get_classifier_ottyl2_k$();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.get_c1px32_k$(0).get_classifier_ottyl2_k$();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function serializer_1(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function serializer_3(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_16(_this__u8e3s4) {
    return UuidSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function _get_original__l7ku1m($this) {
    return $this.original_1;
  }
  function ContextDescriptor(original, kClass) {
    this.original_1 = original;
    this.kClass_1 = kClass;
    this.serialName_1 = this.original_1.get_serialName_u2rqhk_k$() + '<' + this.kClass_1.get_simpleName_r6f8py_k$() + '>';
  }
  protoOf(ContextDescriptor).get_kClass_f4awuu_k$ = function () {
    return this.kClass_1;
  };
  protoOf(ContextDescriptor).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.original_1, another.original_1) && another.kClass_1.equals(this.kClass_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.kClass_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.serialName_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.kClass_1) + ', original: ' + toString(this.original_1) + ')';
  };
  protoOf(ContextDescriptor).get_kind_wop7ml_k$ = function () {
    return this.original_1.get_kind_wop7ml_k$();
  };
  protoOf(ContextDescriptor).get_isNullable_67sy7o_k$ = function () {
    return this.original_1.get_isNullable_67sy7o_k$();
  };
  protoOf(ContextDescriptor).get_isInline_usk17w_k$ = function () {
    return this.original_1.get_isInline_usk17w_k$();
  };
  protoOf(ContextDescriptor).get_elementsCount_288r0x_k$ = function () {
    return this.original_1.get_elementsCount_288r0x_k$();
  };
  protoOf(ContextDescriptor).get_annotations_20dirp_k$ = function () {
    return this.original_1.get_annotations_20dirp_k$();
  };
  protoOf(ContextDescriptor).getElementName_u4sqmf_k$ = function (index) {
    return this.original_1.getElementName_u4sqmf_k$(index);
  };
  protoOf(ContextDescriptor).getElementIndex_utfbym_k$ = function (name) {
    return this.original_1.getElementIndex_utfbym_k$(name);
  };
  protoOf(ContextDescriptor).getElementAnnotations_omrjs6_k$ = function (index) {
    return this.original_1.getElementAnnotations_omrjs6_k$(index);
  };
  protoOf(ContextDescriptor).getElementDescriptor_ncda77_k$ = function (index) {
    return this.original_1.getElementDescriptor_ncda77_k$(index);
  };
  protoOf(ContextDescriptor).isElementOptional_heqq56_k$ = function (index) {
    return this.original_1.isElementOptional_heqq56_k$(index);
  };
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function _set_elementsLeft__kqd1tz($this, _set____db54di) {
    $this.elementsLeft_1 = _set____db54di;
  }
  function _get_elementsLeft__56mb9v($this) {
    return $this.elementsLeft_1;
  }
  function elementDescriptors$1($this_elementDescriptors) {
    this.$this_elementDescriptors_1 = $this_elementDescriptors;
    this.elementsLeft_1 = $this_elementDescriptors.get_elementsCount_288r0x_k$();
  }
  protoOf(elementDescriptors$1).hasNext_bitz1p_k$ = function () {
    return this.elementsLeft_1 > 0;
  };
  protoOf(elementDescriptors$1).next_20eer_k$ = function () {
    var tmp = this.$this_elementDescriptors_1.get_elementsCount_288r0x_k$();
    var _unary__edvuaz = this.elementsLeft_1;
    this.elementsLeft_1 = _unary__edvuaz - 1 | 0;
    return this.$this_elementDescriptors_1.getElementDescriptor_ncda77_k$(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.$this_elementDescriptors_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).iterator_jk1svi_k$ = function () {
    return new elementDescriptors$1(this.$this_elementDescriptors_1);
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.elementNames_1.get_size_woubt6_k$(), toList(typeParameters), sdBuilder);
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function _get_uniqueNames__t2j14q($this) {
    return $this.uniqueNames_1;
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.serialName_1 = serialName;
    this.isNullable_1 = false;
    this.annotations_1 = emptyList();
    this.elementNames_1 = ArrayList_init_$Create$_0();
    this.uniqueNames_1 = HashSet_init_$Create$();
    this.elementDescriptors_1 = ArrayList_init_$Create$_0();
    this.elementAnnotations_1 = ArrayList_init_$Create$_0();
    this.elementOptionality_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  protoOf(ClassSerialDescriptorBuilder).set_isNullable_qgnzfx_k$ = function (_set____db54di) {
    this.isNullable_1 = _set____db54di;
  };
  protoOf(ClassSerialDescriptorBuilder).get_isNullable_67sy7o_k$ = function () {
    return this.isNullable_1;
  };
  protoOf(ClassSerialDescriptorBuilder).set_annotations_x27pt8_k$ = function (_set____db54di) {
    this.annotations_1 = _set____db54di;
  };
  protoOf(ClassSerialDescriptorBuilder).get_annotations_20dirp_k$ = function () {
    return this.annotations_1;
  };
  protoOf(ClassSerialDescriptorBuilder).get_elementNames_rsbj6x_k$ = function () {
    return this.elementNames_1;
  };
  protoOf(ClassSerialDescriptorBuilder).get_elementDescriptors_ednea5_k$ = function () {
    return this.elementDescriptors_1;
  };
  protoOf(ClassSerialDescriptorBuilder).get_elementAnnotations_1n7qh9_k$ = function () {
    return this.elementAnnotations_1;
  };
  protoOf(ClassSerialDescriptorBuilder).get_elementOptionality_phcen7_k$ = function () {
    return this.elementOptionality_1;
  };
  protoOf(ClassSerialDescriptorBuilder).element_om879h_k$ = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.uniqueNames_1.add_utx5q5_k$(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.serialName_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.elementNames_1.add_utx5q5_k$(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.elementDescriptors_1.add_utx5q5_k$(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.elementAnnotations_1.add_utx5q5_k$(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.elementOptionality_1.add_utx5q5_k$(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).element$default_ey7ac9_k$ = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.element_om879h_k$(elementName, descriptor, annotations, isOptional);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.element_om879h_k$.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!equals(kind, CLASS_getInstance())) {
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.elementNames_1.get_size_woubt6_k$(), toList(typeParameters), sdBuilder);
  }
  function _get_elementNames__mdlk9t($this) {
    return $this.elementNames_1;
  }
  function _get_elementDescriptors__y23q9p($this) {
    return $this.elementDescriptors_1;
  }
  function _get_elementAnnotations__1vliwz($this) {
    return $this.elementAnnotations_1;
  }
  function _get_elementOptionality__ruzsih($this) {
    return $this.elementOptionality_1;
  }
  function _get_name2Index__3zzra8($this) {
    return $this.name2Index_1;
  }
  function _get_typeParametersDescriptors__7g731r($this) {
    return $this.typeParametersDescriptors_1;
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this._hashCode$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.get_value_j01efc_k$();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.typeParametersDescriptors_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return function (p0) {
      return _get__hashCode__tgwhef(p0);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.getElementName_u4sqmf_k$(it) + ': ' + this$0.getElementDescriptor_ncda77_k$(it).get_serialName_u2rqhk_k$();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.serialName_1 = serialName;
    this.kind_1 = kind;
    this.elementsCount_1 = elementsCount;
    this.annotations_1 = builder.annotations_1;
    this.serialNames_1 = toHashSet(builder.elementNames_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.elementNames_1;
    tmp.elementNames_1 = copyToArray(this_0);
    this.elementDescriptors_1 = compactArray(builder.elementDescriptors_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.elementAnnotations_1;
    tmp_0.elementAnnotations_1 = copyToArray(this_1);
    this.elementOptionality_1 = toBooleanArray(builder.elementOptionality_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.elementNames_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$2 = to(item.get_value_j01efc_k$(), item.get_index_it478p_k$());
      destination.add_utx5q5_k$(tmp$ret$2);
    }
    tmp_1.name2Index_1 = toMap(destination);
    this.typeParametersDescriptors_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2._hashCode$delegate_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  protoOf(SerialDescriptorImpl).get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  protoOf(SerialDescriptorImpl).get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  protoOf(SerialDescriptorImpl).get_annotations_20dirp_k$ = function () {
    return this.annotations_1;
  };
  protoOf(SerialDescriptorImpl).get_serialNames_8zf3cl_k$ = function () {
    return this.serialNames_1;
  };
  protoOf(SerialDescriptorImpl).getElementName_u4sqmf_k$ = function (index) {
    return getChecked(this.elementNames_1, index);
  };
  protoOf(SerialDescriptorImpl).getElementIndex_utfbym_k$ = function (name) {
    var tmp0_elvis_lhs = this.name2Index_1.get_wei43m_k$(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).getElementAnnotations_omrjs6_k$ = function (index) {
    return getChecked(this.elementAnnotations_1, index);
  };
  protoOf(SerialDescriptorImpl).getElementDescriptor_ncda77_k$ = function (index) {
    return getChecked(this.elementDescriptors_1, index);
  };
  protoOf(SerialDescriptorImpl).isElementOptional_heqq56_k$ = function (index) {
    return getChecked_0(this.elementOptionality_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.typeParametersDescriptors_1, other.typeParametersDescriptors_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_elementsCount_288r0x_k$() === other.get_elementsCount_288r0x_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.get_elementsCount_288r0x_k$();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.getElementDescriptor_ncda77_k$(index).get_serialName_u2rqhk_k$() === other.getElementDescriptor_ncda77_k$(index).get_serialName_u2rqhk_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.getElementDescriptor_ncda77_k$(index).get_kind_wop7ml_k$(), other.getElementDescriptor_ncda77_k$(index).get_kind_wop7ml_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.elementsCount_1);
    var tmp_0 = this.serialName_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function buildClassSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).get_simpleName_r6f8py_k$());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).decodeValue_jl9esj_k$ = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).decodeNotNullMark_us4ba1_k$ = function () {
    return true;
  };
  protoOf(AbstractDecoder).decodeNull_jzrmuj_k$ = function () {
    return null;
  };
  protoOf(AbstractDecoder).decodeBoolean_m0aca_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeByte_jzz7je_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeShort_jjqk32_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeInt_8iq8f5_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeLong_jzt186_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeFloat_jcnrwu_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeDouble_ur8l0f_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeChar_dcmcfa_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return tmp instanceof Char ? tmp.value_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeString_x3hxsx_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeEnum_slg6lu_k$ = function (enumDescriptor) {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).decodeInline_ux3vza_k$ = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).decodeSerializableValue_8i9jjz_k$ = function (deserializer, previousValue) {
    return this.decodeSerializableValue_xpnpad_k$(deserializer);
  };
  protoOf(AbstractDecoder).decodeSerializableValue$default_b3qa4j_k$ = function (deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.decodeSerializableValue_8i9jjz_k$(deserializer, previousValue) : $super.decodeSerializableValue_8i9jjz_k$.call(this, deserializer, previousValue);
  };
  protoOf(AbstractDecoder).beginStructure_yljocp_k$ = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).endStructure_1xqz0n_k$ = function (descriptor) {
  };
  protoOf(AbstractDecoder).decodeBooleanElement_vuyhtj_k$ = function (descriptor, index) {
    return this.decodeBoolean_m0aca_k$();
  };
  protoOf(AbstractDecoder).decodeByteElement_c1pisz_k$ = function (descriptor, index) {
    return this.decodeByte_jzz7je_k$();
  };
  protoOf(AbstractDecoder).decodeShortElement_pzg12t_k$ = function (descriptor, index) {
    return this.decodeShort_jjqk32_k$();
  };
  protoOf(AbstractDecoder).decodeIntElement_941u6a_k$ = function (descriptor, index) {
    return this.decodeInt_8iq8f5_k$();
  };
  protoOf(AbstractDecoder).decodeLongElement_994anb_k$ = function (descriptor, index) {
    return this.decodeLong_jzt186_k$();
  };
  protoOf(AbstractDecoder).decodeFloatElement_p2q55h_k$ = function (descriptor, index) {
    return this.decodeFloat_jcnrwu_k$();
  };
  protoOf(AbstractDecoder).decodeDoubleElement_isei84_k$ = function (descriptor, index) {
    return this.decodeDouble_ur8l0f_k$();
  };
  protoOf(AbstractDecoder).decodeCharElement_frbao3_k$ = function (descriptor, index) {
    return this.decodeChar_dcmcfa_k$();
  };
  protoOf(AbstractDecoder).decodeStringElement_3oenpg_k$ = function (descriptor, index) {
    return this.decodeString_x3hxsx_k$();
  };
  protoOf(AbstractDecoder).decodeInlineElement_s8883o_k$ = function (descriptor, index) {
    return this.decodeInline_ux3vza_k$(descriptor.getElementDescriptor_ncda77_k$(index));
  };
  protoOf(AbstractDecoder).decodeSerializableElement_uahnnv_k$ = function (descriptor, index, deserializer, previousValue) {
    return this.decodeSerializableValue_8i9jjz_k$(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).decodeNullableSerializableElement_k2y6ab_k$ = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$();
    var tmp;
    if (isNullabilitySupported || this.decodeNotNullMark_us4ba1_k$()) {
      tmp = this.decodeSerializableValue_8i9jjz_k$(deserializer, previousValue);
    } else {
      tmp = this.decodeNull_jzrmuj_k$();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).beginStructure_yljocp_k$ = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).endStructure_1xqz0n_k$ = function (descriptor) {
  };
  protoOf(AbstractEncoder).encodeElement_5v7eyb_k$ = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).encodeValue_g68i1f_k$ = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).encodeNull_ejiosz_k$ = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).encodeBoolean_tu2e59_k$ = function (value) {
    return this.encodeValue_g68i1f_k$(value);
  };
  protoOf(AbstractEncoder).encodeByte_6txfee_k$ = function (value) {
    return this.encodeValue_g68i1f_k$(value);
  };
  protoOf(AbstractEncoder).encodeShort_gza6si_k$ = function (value) {
    return this.encodeValue_g68i1f_k$(value);
  };
  protoOf(AbstractEncoder).encodeInt_y5zi3z_k$ = function (value) {
    return this.encodeValue_g68i1f_k$(value);
  };
  protoOf(AbstractEncoder).encodeLong_3didw_k$ = function (value) {
    return this.encodeValue_g68i1f_k$(value);
  };
  protoOf(AbstractEncoder).encodeFloat_b8b85a_k$ = function (value) {
    return this.encodeValue_g68i1f_k$(value);
  };
  protoOf(AbstractEncoder).encodeDouble_n270q9_k$ = function (value) {
    return this.encodeValue_g68i1f_k$(value);
  };
  protoOf(AbstractEncoder).encodeChar_oxoup_k$ = function (value) {
    return this.encodeValue_g68i1f_k$(new Char(value));
  };
  protoOf(AbstractEncoder).encodeString_424b5v_k$ = function (value) {
    return this.encodeValue_g68i1f_k$(value);
  };
  protoOf(AbstractEncoder).encodeEnum_2qin0y_k$ = function (enumDescriptor, index) {
    return this.encodeValue_g68i1f_k$(index);
  };
  protoOf(AbstractEncoder).encodeInline_wxp5pu_k$ = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).encodeBooleanElement_ydht7q_k$ = function (descriptor, index, value) {
    if (this.encodeElement_5v7eyb_k$(descriptor, index)) {
      this.encodeBoolean_tu2e59_k$(value);
    }
  };
  protoOf(AbstractEncoder).encodeByteElement_kft2ib_k$ = function (descriptor, index, value) {
    if (this.encodeElement_5v7eyb_k$(descriptor, index)) {
      this.encodeByte_6txfee_k$(value);
    }
  };
  protoOf(AbstractEncoder).encodeShortElement_4bcdph_k$ = function (descriptor, index, value) {
    if (this.encodeElement_5v7eyb_k$(descriptor, index)) {
      this.encodeShort_gza6si_k$(value);
    }
  };
  protoOf(AbstractEncoder).encodeIntElement_krhhce_k$ = function (descriptor, index, value) {
    if (this.encodeElement_5v7eyb_k$(descriptor, index)) {
      this.encodeInt_y5zi3z_k$(value);
    }
  };
  protoOf(AbstractEncoder).encodeLongElement_cega27_k$ = function (descriptor, index, value) {
    if (this.encodeElement_5v7eyb_k$(descriptor, index)) {
      this.encodeLong_3didw_k$(value);
    }
  };
  protoOf(AbstractEncoder).encodeFloatElement_oe8hn_k$ = function (descriptor, index, value) {
    if (this.encodeElement_5v7eyb_k$(descriptor, index)) {
      this.encodeFloat_b8b85a_k$(value);
    }
  };
  protoOf(AbstractEncoder).encodeDoubleElement_a6rqhe_k$ = function (descriptor, index, value) {
    if (this.encodeElement_5v7eyb_k$(descriptor, index)) {
      this.encodeDouble_n270q9_k$(value);
    }
  };
  protoOf(AbstractEncoder).encodeCharElement_fmv250_k$ = function (descriptor, index, value) {
    if (this.encodeElement_5v7eyb_k$(descriptor, index)) {
      this.encodeChar_oxoup_k$(value);
    }
  };
  protoOf(AbstractEncoder).encodeStringElement_1n5wu2_k$ = function (descriptor, index, value) {
    if (this.encodeElement_5v7eyb_k$(descriptor, index)) {
      this.encodeString_424b5v_k$(value);
    }
  };
  protoOf(AbstractEncoder).encodeInlineElement_69jjkk_k$ = function (descriptor, index) {
    return this.encodeElement_5v7eyb_k$(descriptor, index) ? this.encodeInline_wxp5pu_k$(descriptor.getElementDescriptor_ncda77_k$(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).encodeSerializableElement_isqxcl_k$ = function (descriptor, index, serializer, value) {
    if (this.encodeElement_5v7eyb_k$(descriptor, index)) {
      this.encodeSerializableValue_3uuzip_k$(serializer, value);
    }
  };
  protoOf(AbstractEncoder).encodeNullableSerializableElement_5lquiv_k$ = function (descriptor, index, serializer, value) {
    if (this.encodeElement_5v7eyb_k$(descriptor, index)) {
      this.encodeNullableSerializableValue_ibrab1_k$(serializer, value);
    }
  };
  function Decoder() {
  }
  function Companion() {
    Companion_instance = this;
    this.DECODE_DONE_1 = -1;
    this.UNKNOWN_NAME_1 = -3;
  }
  protoOf(Companion).get_DECODE_DONE_1b8fna_k$ = function () {
    return this.DECODE_DONE_1;
  };
  protoOf(Companion).get_UNKNOWN_NAME_lj8hxl_k$ = function () {
    return this.UNKNOWN_NAME_1;
  };
  var Companion_instance;
  function Companion_getInstance_8() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CompositeDecoder() {
  }
  function decodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.beginStructure_yljocp_k$(descriptor);
    var result = block(composite);
    composite.endStructure_1xqz0n_k$(descriptor);
    return result;
  }
  function decodeIfNullable(_this__u8e3s4, deserializer, block) {
    var isNullabilitySupported = deserializer.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$();
    return isNullabilitySupported || _this__u8e3s4.decodeNotNullMark_us4ba1_k$() ? block() : _this__u8e3s4.decodeNull_jzrmuj_k$();
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function encodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.beginStructure_yljocp_k$(descriptor);
    block(composite);
    composite.endStructure_1xqz0n_k$(descriptor);
  }
  function encodeCollection(_this__u8e3s4, descriptor, collectionSize, block) {
    var composite = _this__u8e3s4.beginCollection_9edss2_k$(descriptor, collectionSize);
    block(composite);
    composite.endStructure_1xqz0n_k$(descriptor);
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.decodeStringElement_3oenpg_k$($this.get_descriptor_wjt6a0_k$(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.decodeSerializableElement$default_j0zaoi_k$($this.get_descriptor_wjt6a0_k$(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).serialize_kj9hv3_k$ = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.get_descriptor_wjt6a0_k$();
    var composite = encoder.beginStructure_yljocp_k$(descriptor);
    composite.encodeStringElement_1n5wu2_k$(this.get_descriptor_wjt6a0_k$(), 0, actualSerializer.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$());
    var tmp = this.get_descriptor_wjt6a0_k$();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.encodeSerializableElement_isqxcl_k$(tmp, 1, tmp$ret$0, value);
    composite.endStructure_1xqz0n_k$(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_kj9hv3_k$(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).deserialize_sy6x50_k$ = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.get_descriptor_wjt6a0_k$();
    var composite = decoder.beginStructure_yljocp_k$(descriptor);
    var tmp$ret$0;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.decodeSequentially_xlblqy_k$()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.decodeElementIndex_bstkhp_k$(this.get_descriptor_wjt6a0_k$());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.decodeStringElement_3oenpg_k$(this.get_descriptor_wjt6a0_k$(), index);
            break;
          case 1:
            var tmp0 = klassName;
            var tmp$ret$2;
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              if (tmp0 == null) {
                var message = 'Cannot read polymorphic value before its type token';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$2 = tmp0;
                break $l$block_0;
              }
            }

            klassName = tmp$ret$2;
            var serializer = findPolymorphicSerializer_0(this, composite, klassName);
            value = composite.decodeSerializableElement$default_j0zaoi_k$(this.get_descriptor_wjt6a0_k$(), index, serializer);
            break;
          default:
            var tmp0_elvis_lhs = klassName;
            throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
        }
      }
      var tmp0_0 = value;
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0_0 == null) {
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp0_0;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$0 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.endStructure_1xqz0n_k$(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).findPolymorphicSerializerOrNull_o3cszk_k$ = function (decoder, klassName) {
    return decoder.get_serializersModule_piitvg_k$().getPolymorphic_adjtcj_k$(this.get_baseClass_lygw3m_k$(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).findPolymorphicSerializerOrNull_sqpvzc_k$ = function (encoder, value) {
    return encoder.get_serializersModule_piitvg_k$().getPolymorphic_yj8c4_k$(this.get_baseClass_lygw3m_k$(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.get_simpleName_r6f8py_k$();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.get_simpleName_r6f8py_k$() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.get_simpleName_r6f8py_k$() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.descriptor_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(NothingSerializer_0).serialize_17ojz2_k$ = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).serialize_5ase3y_k$ = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.serialize_17ojz2_k$(encoder, tmp);
  };
  protoOf(NothingSerializer_0).deserialize_sy6x50_k$ = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(DurationSerializer).serialize_5hzk20_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_5hzk20_k$(encoder, value instanceof Duration ? value.rawValue_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).deserialize_gg0puu_k$ = function (decoder) {
    return Companion_getInstance().parseIsoString_2c2d83_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(DurationSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return new Duration(this.deserialize_gg0puu_k$(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(UuidSerializer).serialize_b7hxiu_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(UuidSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_b7hxiu_k$(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_0().parse_pc1q8p_k$(decoder.decodeString_x3hxsx_k$());
  };
  var UuidSerializer_instance;
  function UuidSerializer_getInstance() {
    if (UuidSerializer_instance == null)
      new UuidSerializer();
    return UuidSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).get_serialName_u2rqhk_k$ = function () {
    return 'kotlin.collections.ArrayList';
  };
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).get_serialName_u2rqhk_k$ = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.elementDescriptor_1 = elementDescriptor;
    this.elementsCount_1 = 1;
  }
  protoOf(ListLikeDescriptor).get_elementDescriptor_pui6ea_k$ = function () {
    return this.elementDescriptor_1;
  };
  protoOf(ListLikeDescriptor).get_kind_wop7ml_k$ = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  protoOf(ListLikeDescriptor).getElementName_u4sqmf_k$ = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).getElementIndex_utfbym_k$ = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).isElementOptional_heqq56_k$ = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).getElementAnnotations_omrjs6_k$ = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).getElementDescriptor_ncda77_k$ = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.elementDescriptor_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.elementDescriptor_1, other.elementDescriptor_1) && this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.elementDescriptor_1), 31) + getStringHashCode(this.get_serialName_u2rqhk_k$()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.get_serialName_u2rqhk_k$() + '(' + toString(this.elementDescriptor_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.serialName_1 = primitive.get_serialName_u2rqhk_k$() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).get_serialName_u2rqhk_k$ = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).get_serialName_u2rqhk_k$ = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.serialName_1 = serialName;
    this.keyDescriptor_1 = keyDescriptor;
    this.valueDescriptor_1 = valueDescriptor;
    this.elementsCount_1 = 2;
  }
  protoOf(MapLikeDescriptor).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  protoOf(MapLikeDescriptor).get_keyDescriptor_qkqayt_k$ = function () {
    return this.keyDescriptor_1;
  };
  protoOf(MapLikeDescriptor).get_valueDescriptor_j2bi95_k$ = function () {
    return this.valueDescriptor_1;
  };
  protoOf(MapLikeDescriptor).get_kind_wop7ml_k$ = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  protoOf(MapLikeDescriptor).getElementName_u4sqmf_k$ = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).getElementIndex_utfbym_k$ = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).isElementOptional_heqq56_k$ = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).getElementAnnotations_omrjs6_k$ = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).getElementDescriptor_ncda77_k$ = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.keyDescriptor_1;
        break;
      case 1:
        tmp = this.valueDescriptor_1;
        break;
      default:
        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$()))
      return false;
    if (!equals(this.keyDescriptor_1, other.keyDescriptor_1))
      return false;
    if (!equals(this.valueDescriptor_1, other.valueDescriptor_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.get_serialName_u2rqhk_k$());
    result = imul(31, result) + hashCode(this.keyDescriptor_1) | 0;
    result = imul(31, result) + hashCode(this.valueDescriptor_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.get_serialName_u2rqhk_k$() + '(' + toString(this.keyDescriptor_1) + ', ' + toString(this.valueDescriptor_1) + ')';
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.descriptor_1 = new ArrayListClassDesc(element.get_descriptor_wjt6a0_k$());
  }
  protoOf(ArrayListSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(ArrayListSerializer).builder_3thy1n_k$ = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).builderSize_y2o8s8_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  protoOf(ArrayListSerializer).builderSize_wan9ya_k$ = function (_this__u8e3s4) {
    return this.builderSize_y2o8s8_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).toResult_fpl6ik_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).toResult_x7ydem_k$ = function (_this__u8e3s4) {
    return this.toResult_fpl6ik_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).toBuilder_unwgi5_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).toBuilder_5lxc6t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_unwgi5_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).checkCapacity_qq1vqe_k$ = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ensureCapacity_wr7980_k$(size);
  };
  protoOf(ArrayListSerializer).checkCapacity_4ljkg0_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_qq1vqe_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).insert_irgt39_k$ = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.add_dl6gt3_k$(index, element);
  };
  protoOf(ArrayListSerializer).insert_rt7dry_k$ = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.insert_irgt39_k$(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function _get_kClass__80op26($this) {
    return $this.kClass_1;
  }
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.kClass_1 = kClass;
    this.descriptor_1 = new ArrayClassDesc(eSerializer.get_descriptor_wjt6a0_k$());
  }
  protoOf(ReferenceArraySerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(ReferenceArraySerializer).collectionSize_s9irs3_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).collectionSize_kqukvo_k$ = function (_this__u8e3s4) {
    return this.collectionSize_s9irs3_k$((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).collectionIterator_w0595i_k$ = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).collectionIterator_l8s4xt_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_w0595i_k$((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).builder_3thy1n_k$ = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).builderSize_j202pb_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  protoOf(ReferenceArraySerializer).builderSize_wan9ya_k$ = function (_this__u8e3s4) {
    return this.builderSize_j202pb_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).toResult_mc1unn_k$ = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.kClass_1);
  };
  protoOf(ReferenceArraySerializer).toResult_x7ydem_k$ = function (_this__u8e3s4) {
    return this.toResult_mc1unn_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).toBuilder_o01xzy_k$ = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).toBuilder_5lxc6t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_o01xzy_k$((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).checkCapacity_tf6to1_k$ = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ensureCapacity_wr7980_k$(size);
  };
  protoOf(ReferenceArraySerializer).checkCapacity_4ljkg0_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_tf6to1_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).insert_4w10q6_k$ = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.add_dl6gt3_k$(index, element);
  };
  protoOf(ReferenceArraySerializer).insert_rt7dry_k$ = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.insert_4w10q6_k$(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).collectionSize_y7efpe_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  protoOf(CollectionSerializer).collectionSize_kqukvo_k$ = function (_this__u8e3s4) {
    return this.collectionSize_y7efpe_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).collectionIterator_5cte45_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.iterator_jk1svi_k$();
  };
  protoOf(CollectionSerializer).collectionIterator_l8s4xt_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_5cte45_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function _get_elementSerializer__tegbkt($this) {
    return $this.elementSerializer_1;
  }
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.elementSerializer_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).serialize_ag16s_k$ = function (encoder, value) {
    var size = this.collectionSize_kqukvo_k$(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.get_descriptor_wjt6a0_k$();
    var composite = encoder.beginCollection_9edss2_k$(descriptor, size);
    var iterator = this.collectionIterator_l8s4xt_k$(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.encodeSerializableElement_isqxcl_k$(this.get_descriptor_wjt6a0_k$(), index, this.elementSerializer_1, iterator.next_20eer_k$());
      }
       while (inductionVariable < size);
    composite.endStructure_1xqz0n_k$(descriptor);
  };
  protoOf(CollectionLikeSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_ag16s_k$(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).readAll_464h0j_k$ = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.readElement_36l3ep_k$(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).readElement_36l3ep_k$ = function (decoder, index, builder, checkIndex) {
    this.insert_rt7dry_k$(builder, index, decoder.decodeSerializableElement$default_j0zaoi_k$(this.get_descriptor_wjt6a0_k$(), index, this.elementSerializer_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.decodeCollectionSize_l3mlkk_k$($this.get_descriptor_wjt6a0_k$());
    $this.checkCapacity_4ljkg0_k$(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).merge_4lx7x7_k$ = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.toBuilder_5lxc6t_k$(previous);
    var builder = tmp1_elvis_lhs == null ? this.builder_3thy1n_k$() : tmp1_elvis_lhs;
    var startIndex = this.builderSize_wan9ya_k$(builder);
    var compositeDecoder = decoder.beginStructure_yljocp_k$(this.get_descriptor_wjt6a0_k$());
    if (compositeDecoder.decodeSequentially_xlblqy_k$()) {
      this.readAll_464h0j_k$(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.decodeElementIndex_bstkhp_k$(this.get_descriptor_wjt6a0_k$());
        if (index === -1)
          break $l$loop;
        this.readElement$default_8pfo75_k$(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.endStructure_1xqz0n_k$(this.get_descriptor_wjt6a0_k$());
    return this.toResult_x7ydem_k$(builder);
  };
  protoOf(AbstractCollectionSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return this.merge_4lx7x7_k$(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).readElement$default_8pfo75_k$ = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.readElement_36l3ep_k$(decoder, index, builder, checkIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.readElement_36l3ep_k$.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.descriptor_1 = new PrimitiveArrayDescriptor(primitiveSerializer.get_descriptor_wjt6a0_k$());
  }
  protoOf(PrimitiveArraySerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(PrimitiveArraySerializer).builderSize_o7j3ed_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_position_cjjt7w_k$();
  };
  protoOf(PrimitiveArraySerializer).builderSize_wan9ya_k$ = function (_this__u8e3s4) {
    return this.builderSize_o7j3ed_k$(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).toResult_a2kawh_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.build_boe8ts_k$();
  };
  protoOf(PrimitiveArraySerializer).toResult_x7ydem_k$ = function (_this__u8e3s4) {
    return this.toResult_a2kawh_k$(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).checkCapacity_m26r65_k$ = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ensureCapacity_mq7liq_k$(size);
  };
  protoOf(PrimitiveArraySerializer).checkCapacity_4ljkg0_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_m26r65_k$(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).collectionIterator_7wnbtc_k$ = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).collectionIterator_l8s4xt_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_7wnbtc_k$((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).insert_hsr581_k$ = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).insert_rt7dry_k$ = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.insert_hsr581_k$(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).builder_3thy1n_k$ = function () {
    return this.toBuilder_5lxc6t_k$(this.empty_1lj7f1_k$());
  };
  protoOf(PrimitiveArraySerializer).serialize_tb1dm5_k$ = function (encoder, value) {
    var size = this.collectionSize_kqukvo_k$(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.descriptor_1;
    var composite = encoder.beginCollection_9edss2_k$(descriptor, size);
    this.writeContent_wekas_k$(composite, value, size);
    composite.endStructure_1xqz0n_k$(descriptor);
  };
  protoOf(PrimitiveArraySerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_tb1dm5_k$(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).serialize_ag16s_k$ = function (encoder, value) {
    return this.serialize_tb1dm5_k$(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).deserialize_sy6x50_k$ = function (decoder) {
    return this.merge_4lx7x7_k$(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).ensureCapacity$default_4tzhe_k$ = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.get_position_cjjt7w_k$() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.ensureCapacity_mq7liq_k$(requiredCapacity);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.ensureCapacity_mq7liq_k$.call(this, requiredCapacity);
    }
    return tmp;
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.descriptor_1 = new HashSetClassDesc(eSerializer.get_descriptor_wjt6a0_k$());
  }
  protoOf(HashSetSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(HashSetSerializer).builder_3thy1n_k$ = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).builderSize_uktc1i_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  protoOf(HashSetSerializer).builderSize_wan9ya_k$ = function (_this__u8e3s4) {
    return this.builderSize_uktc1i_k$(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).toResult_pk432m_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).toResult_x7ydem_k$ = function (_this__u8e3s4) {
    return this.toResult_pk432m_k$(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).toBuilder_4rloh5_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).toBuilder_5lxc6t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_4rloh5_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).checkCapacity_81yld8_k$ = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).checkCapacity_4ljkg0_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_81yld8_k$(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).insert_dbcb3d_k$ = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.add_utx5q5_k$(element);
  };
  protoOf(HashSetSerializer).insert_rt7dry_k$ = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.insert_dbcb3d_k$(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.descriptor_1 = new LinkedHashSetClassDesc(eSerializer.get_descriptor_wjt6a0_k$());
  }
  protoOf(LinkedHashSetSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LinkedHashSetSerializer).builder_3thy1n_k$ = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).builderSize_r1nqpv_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  protoOf(LinkedHashSetSerializer).builderSize_wan9ya_k$ = function (_this__u8e3s4) {
    return this.builderSize_r1nqpv_k$(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).toResult_r6oxq1_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).toResult_x7ydem_k$ = function (_this__u8e3s4) {
    return this.toResult_r6oxq1_k$(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).toBuilder_4rloh5_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).toBuilder_5lxc6t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_4rloh5_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).checkCapacity_ntq5h1_k$ = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).checkCapacity_4ljkg0_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_ntq5h1_k$(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).insert_rxm550_k$ = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.add_utx5q5_k$(element);
  };
  protoOf(LinkedHashSetSerializer).insert_rt7dry_k$ = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.insert_rxm550_k$(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_1 = new HashMapClassDesc(kSerializer.get_descriptor_wjt6a0_k$(), vSerializer.get_descriptor_wjt6a0_k$());
  }
  protoOf(HashMapSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(HashMapSerializer).collectionSize_tcfefw_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  protoOf(HashMapSerializer).collectionSize_kqukvo_k$ = function (_this__u8e3s4) {
    return this.collectionSize_tcfefw_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).collectionIterator_iaj4x5_k$ = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
  };
  protoOf(HashMapSerializer).collectionIterator_l8s4xt_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_iaj4x5_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).builder_3thy1n_k$ = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).builderSize_xjd9v8_k$ = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.get_size_woubt6_k$(), 2);
  };
  protoOf(HashMapSerializer).builderSize_wan9ya_k$ = function (_this__u8e3s4) {
    return this.builderSize_xjd9v8_k$(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).toResult_rkrg20_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).toResult_x7ydem_k$ = function (_this__u8e3s4) {
    return this.toResult_rkrg20_k$(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).toBuilder_2u7r19_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).toBuilder_5lxc6t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_2u7r19_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).checkCapacity_l9cilm_k$ = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).checkCapacity_4ljkg0_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_l9cilm_k$(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashMapSerializer).insertKeyValuePair_ddw0oi_k$ = function (_this__u8e3s4, index, key, value) {
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.put_4fpzoq_k$(key, value);
    return Unit_getInstance();
  };
  protoOf(HashMapSerializer).insertKeyValuePair_1auocl_k$ = function (_this__u8e3s4, index, key, value) {
    var tmp = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE();
    var tmp_0 = (key == null ? true : !(key == null)) ? key : THROW_CCE();
    return this.insertKeyValuePair_ddw0oi_k$(tmp, index, tmp_0, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_1 = new LinkedHashMapClassDesc(kSerializer.get_descriptor_wjt6a0_k$(), vSerializer.get_descriptor_wjt6a0_k$());
  }
  protoOf(LinkedHashMapSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LinkedHashMapSerializer).collectionSize_tcfefw_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  protoOf(LinkedHashMapSerializer).collectionSize_kqukvo_k$ = function (_this__u8e3s4) {
    return this.collectionSize_tcfefw_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).collectionIterator_iaj4x5_k$ = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
  };
  protoOf(LinkedHashMapSerializer).collectionIterator_l8s4xt_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_iaj4x5_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).builder_3thy1n_k$ = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).builderSize_vabndf_k$ = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.get_size_woubt6_k$(), 2);
  };
  protoOf(LinkedHashMapSerializer).builderSize_wan9ya_k$ = function (_this__u8e3s4) {
    return this.builderSize_vabndf_k$(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).toResult_48ppgx_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).toResult_x7ydem_k$ = function (_this__u8e3s4) {
    return this.toResult_48ppgx_k$(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).toBuilder_2u7r19_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).toBuilder_5lxc6t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_2u7r19_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).checkCapacity_q9nvtr_k$ = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).checkCapacity_4ljkg0_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_q9nvtr_k$(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashMapSerializer).insertKeyValuePair_myfi4h_k$ = function (_this__u8e3s4, index, key, value) {
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.put_4fpzoq_k$(key, value);
    return Unit_getInstance();
  };
  protoOf(LinkedHashMapSerializer).insertKeyValuePair_1auocl_k$ = function (_this__u8e3s4, index, key, value) {
    var tmp = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE();
    var tmp_0 = (key == null ? true : !(key == null)) ? key : THROW_CCE();
    return this.insertKeyValuePair_myfi4h_k$(tmp, index, tmp_0, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.keySerializer_1 = keySerializer;
    this.valueSerializer_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).get_keySerializer_t29hrc_k$ = function () {
    return this.keySerializer_1;
  };
  protoOf(MapLikeSerializer).get_valueSerializer_gksbgm_k$ = function () {
    return this.valueSerializer_1;
  };
  protoOf(MapLikeSerializer).readAll_lkk7i3_k$ = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    var step_0 = progression.get_step_woujh1_k$();
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.readElement_xcquwd_k$(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).readAll_464h0j_k$ = function (decoder, builder, startIndex, size) {
    return this.readAll_lkk7i3_k$(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).readElement_xcquwd_k$ = function (decoder, index, builder, checkIndex) {
    var key = decoder.decodeSerializableElement$default_j0zaoi_k$(this.get_descriptor_wjt6a0_k$(), index, this.keySerializer_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.decodeElementIndex_bstkhp_k$(this.get_descriptor_wjt6a0_k$());
      // Inline function 'kotlin.require' call
      if (!(this_0 === (index + 1 | 0))) {
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.containsKey_aw81wo_k$(key)) {
      var tmp_2 = this.valueSerializer_1.get_descriptor_wjt6a0_k$().get_kind_wop7ml_k$();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.decodeSerializableElement_uahnnv_k$(this.get_descriptor_wjt6a0_k$(), vIndex, this.valueSerializer_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.decodeSerializableElement$default_j0zaoi_k$(this.get_descriptor_wjt6a0_k$(), vIndex, this.valueSerializer_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.put_4fpzoq_k$(key, value);
  };
  protoOf(MapLikeSerializer).readElement_36l3ep_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_xcquwd_k$(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).serialize_ag16s_k$ = function (encoder, value) {
    var size = this.collectionSize_kqukvo_k$(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.get_descriptor_wjt6a0_k$();
    var composite = encoder.beginCollection_9edss2_k$(descriptor, size);
    var iterator = this.collectionIterator_l8s4xt_k$(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var k = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var v = element.get_value_j01efc_k$();
      var tmp = this.get_descriptor_wjt6a0_k$();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.encodeSerializableElement_isqxcl_k$(tmp, _unary__edvuaz, this.keySerializer_1, k);
      var tmp_0 = this.get_descriptor_wjt6a0_k$();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.encodeSerializableElement_isqxcl_k$(tmp_0, _unary__edvuaz_0, this.valueSerializer_1, v);
    }
    composite.endStructure_1xqz0n_k$(descriptor);
  };
  protoOf(MapLikeSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_ag16s_k$(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.isInline_1 = true;
  }
  protoOf(InlineClassDescriptor).get_isInline_usk17w_k$ = function () {
    return this.isInline_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.isInline_1 && contentEquals(this.get_typeParameterDescriptors_3o94ow_k$(), other.get_typeParameterDescriptors_3o94ow_k$()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_elementsCount_288r0x_k$() === other.get_elementsCount_288r0x_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.get_elementsCount_288r0x_k$();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.getElementDescriptor_ncda77_k$(index).get_serialName_u2rqhk_k$() === other.getElementDescriptor_ncda77_k$(index).get_serialName_u2rqhk_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.getElementDescriptor_ncda77_k$(index).get_kind_wop7ml_k$(), other.getElementDescriptor_ncda77_k$(index).get_kind_wop7ml_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.$primitiveSerializer_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.$primitiveSerializer_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).get_descriptor_wjt6a0_k$ = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).serialize_5ase3y_k$ = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).deserialize_sy6x50_k$ = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.serializersModule_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  protoOf(NoOpEncoder).encodeValue_g68i1f_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeNull_ejiosz_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeBoolean_tu2e59_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeByte_6txfee_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeShort_gza6si_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeInt_y5zi3z_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeLong_3didw_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeFloat_b8b85a_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeDouble_n270q9_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeChar_oxoup_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeString_424b5v_k$ = function (value) {
    return Unit_getInstance();
  };
  protoOf(NoOpEncoder).encodeEnum_2qin0y_k$ = function (enumDescriptor, index) {
    return Unit_getInstance();
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.kind_1 = OBJECT_getInstance();
    this.serialName_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  protoOf(NothingSerialDescriptor).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  protoOf(NothingSerialDescriptor).get_elementsCount_288r0x_k$ = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).getElementName_u4sqmf_k$ = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).getElementIndex_utfbym_k$ = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).isElementOptional_heqq56_k$ = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).getElementDescriptor_ncda77_k$ = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).getElementAnnotations_omrjs6_k$ = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.serialName_1) + imul(31, this.kind_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function _get_serializer__hdpyrd($this) {
    return $this.serializer_1;
  }
  function NullableSerializer(serializer) {
    this.serializer_1 = serializer;
    this.descriptor_1 = new SerialDescriptorForNullable(this.serializer_1.get_descriptor_wjt6a0_k$());
  }
  protoOf(NullableSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(NullableSerializer).serialize_k0t1hm_k$ = function (encoder, value) {
    if (!(value == null)) {
      encoder.encodeNotNullMark_415a1t_k$();
      encoder.encodeSerializableValue_3uuzip_k$(this.serializer_1, value);
    } else {
      encoder.encodeNull_ejiosz_k$();
    }
  };
  protoOf(NullableSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_k0t1hm_k$(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return decoder.decodeNotNullMark_us4ba1_k$() ? decoder.decodeSerializableValue_xpnpad_k$(this.serializer_1) : decoder.decodeNull_jzrmuj_k$();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.serializer_1, other.serializer_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.serializer_1);
  };
  function SerialDescriptorForNullable(original) {
    this.original_1 = original;
    this.serialName_1 = this.original_1.get_serialName_u2rqhk_k$() + '?';
    this.serialNames_1 = cachedSerialNames(this.original_1);
  }
  protoOf(SerialDescriptorForNullable).get_original_p3bksc_k$ = function () {
    return this.original_1;
  };
  protoOf(SerialDescriptorForNullable).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  protoOf(SerialDescriptorForNullable).get_serialNames_8zf3cl_k$ = function () {
    return this.serialNames_1;
  };
  protoOf(SerialDescriptorForNullable).get_isNullable_67sy7o_k$ = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.original_1, other.original_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.original_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.original_1), 31);
  };
  protoOf(SerialDescriptorForNullable).get_kind_wop7ml_k$ = function () {
    return this.original_1.get_kind_wop7ml_k$();
  };
  protoOf(SerialDescriptorForNullable).get_isInline_usk17w_k$ = function () {
    return this.original_1.get_isInline_usk17w_k$();
  };
  protoOf(SerialDescriptorForNullable).get_elementsCount_288r0x_k$ = function () {
    return this.original_1.get_elementsCount_288r0x_k$();
  };
  protoOf(SerialDescriptorForNullable).get_annotations_20dirp_k$ = function () {
    return this.original_1.get_annotations_20dirp_k$();
  };
  protoOf(SerialDescriptorForNullable).getElementName_u4sqmf_k$ = function (index) {
    return this.original_1.getElementName_u4sqmf_k$(index);
  };
  protoOf(SerialDescriptorForNullable).getElementIndex_utfbym_k$ = function (name) {
    return this.original_1.getElementIndex_utfbym_k$(name);
  };
  protoOf(SerialDescriptorForNullable).getElementAnnotations_omrjs6_k$ = function (index) {
    return this.original_1.getElementAnnotations_omrjs6_k$(index);
  };
  protoOf(SerialDescriptorForNullable).getElementDescriptor_ncda77_k$ = function (index) {
    return this.original_1.getElementDescriptor_ncda77_k$(index);
  };
  protoOf(SerialDescriptorForNullable).isElementOptional_heqq56_k$ = function (index) {
    return this.original_1.isElementOptional_heqq56_k$(index);
  };
  function _get_objectInstance__h8002x($this) {
    return $this.objectInstance_1;
  }
  function ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, $this) {
    ObjectSerializer.call($this, serialName, objectInstance);
    $this._annotations_1 = asList(classAnnotations);
    return $this;
  }
  function ObjectSerializer_init_$Create$(serialName, objectInstance, classAnnotations) {
    return ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, objectCreate(protoOf(ObjectSerializer)));
  }
  function _set__annotations__kk13ma_1($this, _set____db54di) {
    $this._annotations_1 = _set____db54di;
  }
  function _get__annotations__yxc7sq_1($this) {
    return $this._annotations_1;
  }
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.set_annotations_x27pt8_k$(this$0._annotations_1);
      return Unit_getInstance();
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer$_get_descriptor_$ref_7z4xb6() {
    return function (p0) {
      return p0.get_descriptor_wjt6a0_k$();
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.objectInstance_1 = objectInstance;
    this._annotations_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.descriptor$delegate_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).get_descriptor_wjt6a0_k$ = function () {
    var tmp0 = this.descriptor$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(ObjectSerializer).serialize_kj9hv3_k$ = function (encoder, value) {
    encoder.beginStructure_yljocp_k$(this.get_descriptor_wjt6a0_k$()).endStructure_1xqz0n_k$(this.get_descriptor_wjt6a0_k$());
  };
  protoOf(ObjectSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_kj9hv3_k$(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).deserialize_sy6x50_k$ = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.get_descriptor_wjt6a0_k$();
    var composite = decoder.beginStructure_yljocp_k$(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      if (composite.decodeSequentially_xlblqy_k$()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      }
      var index = composite.decodeElementIndex_bstkhp_k$(this.get_descriptor_wjt6a0_k$());
      if (index === -1) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.endStructure_1xqz0n_k$(descriptor);
    return this.objectInstance_1;
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cast(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    return isInterface(_this__u8e3s4, SerializationStrategy) ? _this__u8e3s4 : THROW_CCE();
  }
  function SerializerCache() {
  }
  function cast_0(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function ParametrizedSerializerCache() {
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.isEmpty_y1axqb_k$())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.get_serialNames_8zf3cl_k$();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.get_elementsCount_288r0x_k$());
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_elementsCount_288r0x_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.getElementName_u4sqmf_k$(i);
        result.add_utx5q5_k$(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function elementsHashCodeBy(_this__u8e3s4, selector) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = _this__u8e3s4.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = selector(element);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    return accumulator;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.get_classifier_ottyl2_k$();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        throw IllegalArgumentException_init_$Create$('Captured type parameter ' + toString(t) + ' from generic non-reified function. ' + ('Such functionality cannot be supported because ' + toString(t) + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + toString(t) + '.'));
      } else {
        throw IllegalArgumentException_init_$Create$('Only KClass supported as classifier, got ' + toString_0(t));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function typeOrThrow(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0 = _this__u8e3s4.get_type_wovaf7_k$();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.get_type_wovaf7_k$());
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.get_simpleName_r6f8py_k$();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.get_serialName_u2rqhk_k$());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.get_serialName_u2rqhk_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.get_kind_wop7ml_k$();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_generatedSerializer__wsoshc($this) {
    return $this.generatedSerializer_1;
  }
  function _set_added__c0kt39($this, _set____db54di) {
    $this.added_1 = _set____db54di;
  }
  function _get_added__k0jne7($this) {
    return $this.added_1;
  }
  function _get_names__dwg6t3($this) {
    return $this.names_1;
  }
  function _get_propertiesAnnotations__ni45q8($this) {
    return $this.propertiesAnnotations_1;
  }
  function _set_classAnnotations__ucvd1n($this, _set____db54di) {
    $this.classAnnotations_1 = _set____db54di;
  }
  function _get_classAnnotations__bl4fup($this) {
    return $this.classAnnotations_1;
  }
  function _get_elementsOptionality__u17gre($this) {
    return $this.elementsOptionality_1;
  }
  function _set_indices__8cam9u($this, _set____db54di) {
    $this.indices_1 = _set____db54di;
  }
  function _get_indices__xyiwmu($this) {
    return $this.indices_1;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.childSerializers$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.get_value_j01efc_k$();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this._hashCode$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.get_value_j01efc_k$();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.names_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.names_1[i];
        indices.put_4fpzoq_k$(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.generatedSerializer_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.childSerializers_5ghqw5_k$();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca() {
    return function (p0) {
      return _get_childSerializers__7vnyfa(p0);
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.generatedSerializer_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.typeParametersSerializers_fr94fx_k$();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0 = item.get_descriptor_wjt6a0_k$();
          destination.add_utx5q5_k$(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return function (p0) {
      return p0.get_typeParameterDescriptors_3o94ow_k$();
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.get_typeParameterDescriptors_3o94ow_k$());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.getElementName_u4sqmf_k$(i) + ': ' + this$0.getElementDescriptor_ncda77_k$(i).get_serialName_u2rqhk_k$();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.serialName_1 = serialName;
    this.generatedSerializer_1 = generatedSerializer;
    this.elementsCount_1 = elementsCount;
    this.added_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.elementsCount_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.names_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.elementsCount_1;
    tmp_3.propertiesAnnotations_1 = Array(size);
    this.classAnnotations_1 = null;
    this.elementsOptionality_1 = booleanArray(this.elementsCount_1);
    this.indices_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.childSerializers$delegate_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.typeParameterDescriptors$delegate_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8._hashCode$delegate_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).get_kind_wop7ml_k$ = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).get_annotations_20dirp_k$ = function () {
    var tmp0_elvis_lhs = this.classAnnotations_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).get_serialNames_8zf3cl_k$ = function () {
    return this.indices_1.get_keys_wop4xp_k$();
  };
  protoOf(PluginGeneratedSerialDescriptor).get_typeParameterDescriptors_3o94ow_k$ = function () {
    var tmp0 = this.typeParameterDescriptors$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(PluginGeneratedSerialDescriptor).addElement_5pzumi_k$ = function (name, isOptional) {
    this.added_1 = this.added_1 + 1 | 0;
    this.names_1[this.added_1] = name;
    this.elementsOptionality_1[this.added_1] = isOptional;
    this.propertiesAnnotations_1[this.added_1] = null;
    if (this.added_1 === (this.elementsCount_1 - 1 | 0)) {
      this.indices_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).addElement$default_mty55e_k$ = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.addElement_5pzumi_k$(name, isOptional);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.addElement_5pzumi_k$.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).pushAnnotation_fm15ho_k$ = function (annotation) {
    // Inline function 'kotlin.let' call
    var it = this.propertiesAnnotations_1[this.added_1];
    var tmp;
    if (it == null) {
      var result = ArrayList_init_$Create$(1);
      this.propertiesAnnotations_1[this.added_1] = result;
      tmp = result;
    } else {
      tmp = it;
    }
    var list = tmp;
    list.add_utx5q5_k$(annotation);
  };
  protoOf(PluginGeneratedSerialDescriptor).pushClassAnnotation_xtmllk_k$ = function (a) {
    if (this.classAnnotations_1 == null) {
      this.classAnnotations_1 = ArrayList_init_$Create$(1);
    }
    ensureNotNull(this.classAnnotations_1).add_utx5q5_k$(a);
  };
  protoOf(PluginGeneratedSerialDescriptor).getElementDescriptor_ncda77_k$ = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).get_descriptor_wjt6a0_k$();
  };
  protoOf(PluginGeneratedSerialDescriptor).isElementOptional_heqq56_k$ = function (index) {
    return getChecked_0(this.elementsOptionality_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).getElementAnnotations_omrjs6_k$ = function (index) {
    var tmp0_elvis_lhs = getChecked(this.propertiesAnnotations_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).getElementName_u4sqmf_k$ = function (index) {
    return getChecked(this.names_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).getElementIndex_utfbym_k$ = function (name) {
    var tmp0_elvis_lhs = this.indices_1.get_wei43m_k$(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.get_typeParameterDescriptors_3o94ow_k$(), other.get_typeParameterDescriptors_3o94ow_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_elementsCount_288r0x_k$() === other.get_elementsCount_288r0x_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.get_elementsCount_288r0x_k$();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.getElementDescriptor_ncda77_k$(index).get_serialName_u2rqhk_k$() === other.getElementDescriptor_ncda77_k$(index).get_serialName_u2rqhk_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.getElementDescriptor_ncda77_k$(index).get_kind_wop7ml_k$(), other.getElementDescriptor_ncda77_k$(index).get_kind_wop7ml_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.elementsCount_1);
    var tmp_0 = this.get_serialName_u2rqhk_k$() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(BooleanCompanionObject_getInstance()));
  }
  protoOf(BooleanArraySerializer_0).collectionSize_6kmfg7_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).collectionSize_kqukvo_k$ = function (_this__u8e3s4) {
    return this.collectionSize_6kmfg7_k$((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).toBuilder_533e2y_k$ = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).toBuilder_5lxc6t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_533e2y_k$((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).empty_1lj7f1_k$ = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).readElement_jb3frv_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_3zsgtj_k$(decoder.decodeBooleanElement_vuyhtj_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  protoOf(BooleanArraySerializer_0).readElement_36l3ep_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_jb3frv_k$(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).readElement_9d70uk_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_jb3frv_k$(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).writeContent_ostd9q_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeBooleanElement_ydht7q_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).writeContent_wekas_k$ = function (encoder, content, size) {
    return this.writeContent_ostd9q_k$(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_1()));
  }
  protoOf(CharArraySerializer_0).collectionSize_vtpl8l_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).collectionSize_kqukvo_k$ = function (_this__u8e3s4) {
    return this.collectionSize_vtpl8l_k$((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).toBuilder_y1jusk_k$ = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).toBuilder_5lxc6t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_y1jusk_k$((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).empty_1lj7f1_k$ = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).readElement_g9weyx_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_sdbsbl_k$(decoder.decodeCharElement_frbao3_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  protoOf(CharArraySerializer_0).readElement_36l3ep_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_g9weyx_k$(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).readElement_9d70uk_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_g9weyx_k$(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).writeContent_d1b2tw_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeCharElement_fmv250_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).writeContent_wekas_k$ = function (encoder, content, size) {
    return this.writeContent_d1b2tw_k$(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(DoubleCompanionObject_getInstance()));
  }
  protoOf(DoubleArraySerializer_0).collectionSize_ly49h2_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).collectionSize_kqukvo_k$ = function (_this__u8e3s4) {
    return this.collectionSize_ly49h2_k$((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).toBuilder_lkkul3_k$ = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).toBuilder_5lxc6t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_lkkul3_k$((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).empty_1lj7f1_k$ = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).readElement_h6eind_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_3vdidi_k$(decoder.decodeDoubleElement_isei84_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  protoOf(DoubleArraySerializer_0).readElement_36l3ep_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_h6eind_k$(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).readElement_9d70uk_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_h6eind_k$(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).writeContent_4uvf1r_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeDoubleElement_a6rqhe_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).writeContent_wekas_k$ = function (encoder, content, size) {
    return this.writeContent_4uvf1r_k$(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(FloatCompanionObject_getInstance()));
  }
  protoOf(FloatArraySerializer_0).collectionSize_6cqtx_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).collectionSize_kqukvo_k$ = function (_this__u8e3s4) {
    return this.collectionSize_6cqtx_k$((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).toBuilder_23p2y2_k$ = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).toBuilder_5lxc6t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_23p2y2_k$((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).empty_1lj7f1_k$ = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).readElement_b22gel_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_4kvnvw_k$(decoder.decodeFloatElement_p2q55h_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  protoOf(FloatArraySerializer_0).readElement_36l3ep_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_b22gel_k$(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).readElement_9d70uk_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_b22gel_k$(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).writeContent_6fpfj2_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeFloatElement_oe8hn_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).writeContent_wekas_k$ = function (encoder, content, size) {
    return this.writeContent_6fpfj2_k$(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(IntCompanionObject_getInstance()));
  }
  protoOf(IntArraySerializer_0).collectionSize_ra2vwi_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).collectionSize_kqukvo_k$ = function (_this__u8e3s4) {
    return this.collectionSize_ra2vwi_k$((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).toBuilder_6q9nib_k$ = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).toBuilder_5lxc6t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_6q9nib_k$((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).empty_1lj7f1_k$ = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).readElement_o5kyib_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_rzagz8_k$(decoder.decodeIntElement_941u6a_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  protoOf(IntArraySerializer_0).readElement_36l3ep_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_o5kyib_k$(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).readElement_9d70uk_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_o5kyib_k$(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).writeContent_3yfenf_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeIntElement_krhhce_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).writeContent_wekas_k$ = function (encoder, content, size) {
    return this.writeContent_3yfenf_k$(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(Companion_getInstance_2()));
  }
  protoOf(LongArraySerializer_0).collectionSize_bpy9i7_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).collectionSize_kqukvo_k$ = function (_this__u8e3s4) {
    return this.collectionSize_bpy9i7_k$((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).toBuilder_dxsj26_k$ = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).toBuilder_5lxc6t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_dxsj26_k$((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).empty_1lj7f1_k$ = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).readElement_3lp53d_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_wlue3i_k$(decoder.decodeLongElement_994anb_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  protoOf(LongArraySerializer_0).readElement_36l3ep_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_3lp53d_k$(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).readElement_9d70uk_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_3lp53d_k$(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).writeContent_5nzm62_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeLongElement_cega27_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).writeContent_wekas_k$ = function (encoder, content, size) {
    return this.writeContent_5nzm62_k$(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function _set_buffer__uxh4x5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_mq7liq_k$(10);
  }
  protoOf(BooleanArrayBuilder).get_position_cjjt7w_k$ = function () {
    return this.position_1;
  };
  protoOf(BooleanArrayBuilder).ensureCapacity_mq7liq_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).append_3zsgtj_k$ = function (c) {
    this.ensureCapacity$default_4tzhe_k$();
    var tmp = this.buffer_1;
    var _unary__edvuaz = this.position_1;
    this.position_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).build_boe8ts_k$ = function () {
    return copyOf(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_0($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_0($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_0($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_mq7liq_k$(10);
  }
  protoOf(CharArrayBuilder).get_position_cjjt7w_k$ = function () {
    return this.position_1;
  };
  protoOf(CharArrayBuilder).ensureCapacity_mq7liq_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_0(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  protoOf(CharArrayBuilder).append_sdbsbl_k$ = function (c) {
    this.ensureCapacity$default_4tzhe_k$();
    var tmp = this.buffer_1;
    var _unary__edvuaz = this.position_1;
    this.position_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).build_boe8ts_k$ = function () {
    return copyOf_0(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_1($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_1($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_1($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_mq7liq_k$(10);
  }
  protoOf(DoubleArrayBuilder).get_position_cjjt7w_k$ = function () {
    return this.position_1;
  };
  protoOf(DoubleArrayBuilder).ensureCapacity_mq7liq_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_1(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).append_3vdidi_k$ = function (c) {
    this.ensureCapacity$default_4tzhe_k$();
    var tmp = this.buffer_1;
    var _unary__edvuaz = this.position_1;
    this.position_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).build_boe8ts_k$ = function () {
    return copyOf_1(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_2($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_2($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_2($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_mq7liq_k$(10);
  }
  protoOf(FloatArrayBuilder).get_position_cjjt7w_k$ = function () {
    return this.position_1;
  };
  protoOf(FloatArrayBuilder).ensureCapacity_mq7liq_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_2(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).append_4kvnvw_k$ = function (c) {
    this.ensureCapacity$default_4tzhe_k$();
    var tmp = this.buffer_1;
    var _unary__edvuaz = this.position_1;
    this.position_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).build_boe8ts_k$ = function () {
    return copyOf_2(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_3($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_3($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_3($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_mq7liq_k$(10);
  }
  protoOf(IntArrayBuilder).get_position_cjjt7w_k$ = function () {
    return this.position_1;
  };
  protoOf(IntArrayBuilder).ensureCapacity_mq7liq_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_3(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  protoOf(IntArrayBuilder).append_rzagz8_k$ = function (c) {
    this.ensureCapacity$default_4tzhe_k$();
    var tmp = this.buffer_1;
    var _unary__edvuaz = this.position_1;
    this.position_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).build_boe8ts_k$ = function () {
    return copyOf_3(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_4($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_4($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_4($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_mq7liq_k$(10);
  }
  protoOf(LongArrayBuilder).get_position_cjjt7w_k$ = function () {
    return this.position_1;
  };
  protoOf(LongArrayBuilder).ensureCapacity_mq7liq_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_4(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  protoOf(LongArrayBuilder).append_wlue3i_k$ = function (c) {
    this.ensureCapacity$default_4tzhe_k$();
    var tmp = this.buffer_1;
    var _unary__edvuaz = this.position_1;
    this.position_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).build_boe8ts_k$ = function () {
    return copyOf_4(this.buffer_1, this.position_1);
  };
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(Companion_getInstance_3()));
  }
  protoOf(ULongArraySerializer_0).collectionSize_wncbad_k$ = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).collectionSize_kqukvo_k$ = function (_this__u8e3s4) {
    return this.collectionSize_wncbad_k$(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.storage_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).toBuilder_gcjwna_k$ = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).toBuilder_5lxc6t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_gcjwna_k$(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.storage_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).empty_bldrb3_k$ = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).empty_1lj7f1_k$ = function () {
    return new ULongArray(this.empty_bldrb3_k$());
  };
  protoOf(ULongArraySerializer_0).readElement_czzey_k$ = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.decodeInlineElement_s8883o_k$(this.get_descriptor_wjt6a0_k$(), index).decodeLong_jzt186_k$();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.append_w19syv_k$(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).readElement_36l3ep_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_czzey_k$(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).readElement_9d70uk_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_czzey_k$(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).writeContent_zg7awu_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.encodeInlineElement_69jjkk_k$(this.get_descriptor_wjt6a0_k$(), i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.encodeLong_3didw_k$(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).writeContent_wekas_k$ = function (encoder, content, size) {
    return this.writeContent_zg7awu_k$(encoder, content instanceof ULongArray ? content.storage_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_4()));
  }
  protoOf(UIntArraySerializer_0).collectionSize_24o9l9_k$ = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).collectionSize_kqukvo_k$ = function (_this__u8e3s4) {
    return this.collectionSize_24o9l9_k$(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.storage_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).toBuilder_269nbm_k$ = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).toBuilder_5lxc6t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_269nbm_k$(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.storage_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).empty_t2t886_k$ = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).empty_1lj7f1_k$ = function () {
    return new UIntArray(this.empty_t2t886_k$());
  };
  protoOf(UIntArraySerializer_0).readElement_y5e1k_k$ = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.decodeInlineElement_s8883o_k$(this.get_descriptor_wjt6a0_k$(), index).decodeInt_8iq8f5_k$();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.append_95ouhl_k$(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).readElement_36l3ep_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_y5e1k_k$(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).readElement_9d70uk_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_y5e1k_k$(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).writeContent_vfz9uu_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.encodeInlineElement_69jjkk_k$(this.get_descriptor_wjt6a0_k$(), i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.encodeInt_y5zi3z_k$(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).writeContent_wekas_k$ = function (encoder, content, size) {
    return this.writeContent_vfz9uu_k$(encoder, content instanceof UIntArray ? content.storage_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(ShortCompanionObject_getInstance()));
  }
  protoOf(ShortArraySerializer_0).collectionSize_52p1e3_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).collectionSize_kqukvo_k$ = function (_this__u8e3s4) {
    return this.collectionSize_52p1e3_k$((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).toBuilder_7cqv62_k$ = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).toBuilder_5lxc6t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_7cqv62_k$((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).empty_1lj7f1_k$ = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).readElement_ef6mgj_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_hor164_k$(decoder.decodeShortElement_pzg12t_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  protoOf(ShortArraySerializer_0).readElement_36l3ep_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_ef6mgj_k$(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).readElement_9d70uk_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_ef6mgj_k$(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).writeContent_u8u01q_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeShortElement_4bcdph_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).writeContent_wekas_k$ = function (encoder, content, size) {
    return this.writeContent_u8u01q_k$(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(Companion_getInstance_5()));
  }
  protoOf(UShortArraySerializer_0).collectionSize_lwojtf_k$ = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).collectionSize_kqukvo_k$ = function (_this__u8e3s4) {
    return this.collectionSize_lwojtf_k$(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.storage_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).toBuilder_bwwqj2_k$ = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).toBuilder_5lxc6t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_bwwqj2_k$(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.storage_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).empty_u9tfuv_k$ = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).empty_1lj7f1_k$ = function () {
    return new UShortArray(this.empty_u9tfuv_k$());
  };
  protoOf(UShortArraySerializer_0).readElement_2rzio8_k$ = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.decodeInlineElement_s8883o_k$(this.get_descriptor_wjt6a0_k$(), index).decodeShort_jjqk32_k$();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.append_a5lenz_k$(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).readElement_36l3ep_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_2rzio8_k$(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).readElement_9d70uk_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_2rzio8_k$(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).writeContent_ibfc1m_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.encodeInlineElement_69jjkk_k$(this.get_descriptor_wjt6a0_k$(), i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.encodeShort_gza6si_k$(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).writeContent_wekas_k$ = function (encoder, content, size) {
    return this.writeContent_ibfc1m_k$(encoder, content instanceof UShortArray ? content.storage_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(ByteCompanionObject_getInstance()));
  }
  protoOf(ByteArraySerializer_0).collectionSize_edl2xf_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).collectionSize_kqukvo_k$ = function (_this__u8e3s4) {
    return this.collectionSize_edl2xf_k$((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).toBuilder_glfche_k$ = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).toBuilder_5lxc6t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_glfche_k$((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).empty_1lj7f1_k$ = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).readElement_wefb0p_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_7q2hf8_k$(decoder.decodeByteElement_c1pisz_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  protoOf(ByteArraySerializer_0).readElement_36l3ep_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_wefb0p_k$(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).readElement_9d70uk_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_wefb0p_k$(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).writeContent_43scmy_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeByteElement_kft2ib_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).writeContent_wekas_k$ = function (encoder, content, size) {
    return this.writeContent_43scmy_k$(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_13(Companion_getInstance_6()));
  }
  protoOf(UByteArraySerializer_0).collectionSize_ub5cel_k$ = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).collectionSize_kqukvo_k$ = function (_this__u8e3s4) {
    return this.collectionSize_ub5cel_k$(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.storage_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).toBuilder_e0cxri_k$ = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).toBuilder_5lxc6t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_e0cxri_k$(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.storage_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).empty_ne95yt_k$ = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).empty_1lj7f1_k$ = function () {
    return new UByteArray(this.empty_ne95yt_k$());
  };
  protoOf(UByteArraySerializer_0).readElement_iyvgum_k$ = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.decodeInlineElement_s8883o_k$(this.get_descriptor_wjt6a0_k$(), index).decodeByte_jzz7je_k$();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.append_6rjvqf_k$(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).readElement_36l3ep_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_iyvgum_k$(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).readElement_9d70uk_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_iyvgum_k$(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).writeContent_pelvru_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.encodeInlineElement_69jjkk_k$(this.get_descriptor_wjt6a0_k$(), i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.encodeByte_6txfee_k$(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).writeContent_wekas_k$ = function (encoder, content, size) {
    return this.writeContent_pelvru_k$(encoder, content instanceof UByteArray ? content.storage_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function _set_buffer__uxh4x5_5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_5($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_5($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.ensureCapacity_mq7liq_k$(10);
  }
  protoOf(ULongArrayBuilder).get_position_cjjt7w_k$ = function () {
    return this.position_1;
  };
  protoOf(ULongArrayBuilder).ensureCapacity_mq7liq_k$ = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.buffer_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.buffer_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.buffer_1), 2));
      tmp.buffer_1 = _ULongArray___init__impl__twm1l3_0(copyOf_4(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).append_w19syv_k$ = function (c) {
    this.ensureCapacity$default_4tzhe_k$();
    var tmp = this.buffer_1;
    var _unary__edvuaz = this.position_1;
    this.position_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).build_ouougs_k$ = function () {
    var tmp0 = this.buffer_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.position_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_4(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).build_boe8ts_k$ = function () {
    return new ULongArray(this.build_ouougs_k$());
  };
  function _set_buffer__uxh4x5_6($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_6($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_6($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.ensureCapacity_mq7liq_k$(10);
  }
  protoOf(UIntArrayBuilder).get_position_cjjt7w_k$ = function () {
    return this.position_1;
  };
  protoOf(UIntArrayBuilder).ensureCapacity_mq7liq_k$ = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.buffer_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.buffer_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.buffer_1), 2));
      tmp.buffer_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).append_95ouhl_k$ = function (c) {
    this.ensureCapacity$default_4tzhe_k$();
    var tmp = this.buffer_1;
    var _unary__edvuaz = this.position_1;
    this.position_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).build_14x7st_k$ = function () {
    var tmp0 = this.buffer_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.position_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).build_boe8ts_k$ = function () {
    return new UIntArray(this.build_14x7st_k$());
  };
  function _set_buffer__uxh4x5_7($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_7($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_7($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_mq7liq_k$(10);
  }
  protoOf(ShortArrayBuilder).get_position_cjjt7w_k$ = function () {
    return this.position_1;
  };
  protoOf(ShortArrayBuilder).ensureCapacity_mq7liq_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_5(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).append_hor164_k$ = function (c) {
    this.ensureCapacity$default_4tzhe_k$();
    var tmp = this.buffer_1;
    var _unary__edvuaz = this.position_1;
    this.position_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).build_boe8ts_k$ = function () {
    return copyOf_5(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_8($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_8($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_8($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.ensureCapacity_mq7liq_k$(10);
  }
  protoOf(UShortArrayBuilder).get_position_cjjt7w_k$ = function () {
    return this.position_1;
  };
  protoOf(UShortArrayBuilder).ensureCapacity_mq7liq_k$ = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.buffer_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.buffer_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.buffer_1), 2));
      tmp.buffer_1 = _UShortArray___init__impl__9b26ef_0(copyOf_5(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).append_a5lenz_k$ = function (c) {
    this.ensureCapacity$default_4tzhe_k$();
    var tmp = this.buffer_1;
    var _unary__edvuaz = this.position_1;
    this.position_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).build_f3otwq_k$ = function () {
    var tmp0 = this.buffer_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.position_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_5(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).build_boe8ts_k$ = function () {
    return new UShortArray(this.build_f3otwq_k$());
  };
  function _set_buffer__uxh4x5_9($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_9($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_9($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_mq7liq_k$(10);
  }
  protoOf(ByteArrayBuilder).get_position_cjjt7w_k$ = function () {
    return this.position_1;
  };
  protoOf(ByteArrayBuilder).ensureCapacity_mq7liq_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_6(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).append_7q2hf8_k$ = function (c) {
    this.ensureCapacity$default_4tzhe_k$();
    var tmp = this.buffer_1;
    var _unary__edvuaz = this.position_1;
    this.position_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).build_boe8ts_k$ = function () {
    return copyOf_6(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_10($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_10($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_10($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.ensureCapacity_mq7liq_k$(10);
  }
  protoOf(UByteArrayBuilder).get_position_cjjt7w_k$ = function () {
    return this.position_1;
  };
  protoOf(UByteArrayBuilder).ensureCapacity_mq7liq_k$ = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.buffer_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.buffer_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.buffer_1), 2));
      tmp.buffer_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_6(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).append_6rjvqf_k$ = function (c) {
    this.ensureCapacity$default_4tzhe_k$();
    var tmp = this.buffer_1;
    var _unary__edvuaz = this.position_1;
    this.position_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).build_a4y2t4_k$ = function () {
    var tmp0 = this.buffer_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.position_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_6(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).build_boe8ts_k$ = function () {
    return new UByteArray(this.build_a4y2t4_k$());
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function IntSerializer() {
    IntSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(IntSerializer).serialize_iz3ntn_k$ = function (encoder, value) {
    return encoder.encodeInt_y5zi3z_k$(value);
  };
  protoOf(IntSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_iz3ntn_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return decoder.decodeInt_8iq8f5_k$();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(StringSerializer).serialize_jnz9c3_k$ = function (encoder, value) {
    return encoder.encodeString_424b5v_k$(value);
  };
  protoOf(StringSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_jnz9c3_k$(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return decoder.decodeString_x3hxsx_k$();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.serialName_1 = serialName;
    this.kind_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).get_elementsCount_288r0x_k$ = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).getElementName_u4sqmf_k$ = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).getElementIndex_utfbym_k$ = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).isElementOptional_heqq56_k$ = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).getElementDescriptor_ncda77_k$ = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).getElementAnnotations_omrjs6_k$ = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.serialName_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.serialName_1 === other.serialName_1 && equals(this.kind_1, other.kind_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.serialName_1) + imul(31, this.kind_1.hashCode()) | 0;
  };
  function checkName(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().get_values_ksazhn_k$();
    var _iterator__ex2g4s = values.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var primitive = _iterator__ex2g4s.next_20eer_k$();
      var primitiveName = primitive.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).get_simpleName_r6f8py_k$() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().get_wei43m_k$(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(BooleanSerializer).serialize_ky3y8o_k$ = function (encoder, value) {
    return encoder.encodeBoolean_tu2e59_k$(value);
  };
  protoOf(BooleanSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_ky3y8o_k$(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return decoder.decodeBoolean_m0aca_k$();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(CharSerializer).serialize_seb0r4_k$ = function (encoder, value) {
    return encoder.encodeChar_oxoup_k$(value);
  };
  protoOf(CharSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_seb0r4_k$(encoder, value instanceof Char ? value.value_1 : THROW_CCE());
  };
  protoOf(CharSerializer).deserialize_dkqcoq_k$ = function (decoder) {
    return decoder.decodeChar_dcmcfa_k$();
  };
  protoOf(CharSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return new Char(this.deserialize_dkqcoq_k$(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(DoubleSerializer).serialize_sc6aif_k$ = function (encoder, value) {
    return encoder.encodeDouble_n270q9_k$(value);
  };
  protoOf(DoubleSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_sc6aif_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return decoder.decodeDouble_ur8l0f_k$();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(FloatSerializer).serialize_ttziez_k$ = function (encoder, value) {
    return encoder.encodeFloat_b8b85a_k$(value);
  };
  protoOf(FloatSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_ttziez_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return decoder.decodeFloat_jcnrwu_k$();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LongSerializer).serialize_d531zj_k$ = function (encoder, value) {
    return encoder.encodeLong_3didw_k$(value);
  };
  protoOf(LongSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_d531zj_k$(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return decoder.decodeLong_jzt186_k$();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(ShortSerializer).serialize_s3969x_k$ = function (encoder, value) {
    return encoder.encodeShort_gza6si_k$(value);
  };
  protoOf(ShortSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_s3969x_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return decoder.decodeShort_jjqk32_k$();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(ByteSerializer).serialize_bqouor_k$ = function (encoder, value) {
    return encoder.encodeByte_6txfee_k$(value);
  };
  protoOf(ByteSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_bqouor_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return decoder.decodeByte_jzz7je_k$();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.$$delegate_0__1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  protoOf(UnitSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.$$delegate_0__1.get_descriptor_wjt6a0_k$();
  };
  protoOf(UnitSerializer).serialize_w4s1vx_k$ = function (encoder, value) {
    this.$$delegate_0__1.serialize_kj9hv3_k$(encoder, Unit_getInstance());
  };
  protoOf(UnitSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_w4s1vx_k$(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).deserialize_dkeqa4_k$ = function (decoder) {
    this.$$delegate_0__1.deserialize_sy6x50_k$(decoder);
  };
  protoOf(UnitSerializer).deserialize_sy6x50_k$ = function (decoder) {
    this.deserialize_dkeqa4_k$(decoder);
    return Unit_getInstance();
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = initBuiltins();
    }
  }
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.key_1 = key;
    this.value_1 = value;
  }
  protoOf(MapEntry).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(MapEntry).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(MapEntry).component1_7eebsc_k$ = function () {
    return this.key_1;
  };
  protoOf(MapEntry).component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  protoOf(MapEntry).copy_vc066o_k$ = function (key, value) {
    return new MapEntry(key, value);
  };
  protoOf(MapEntry).copy$default_1xcldk_k$ = function (key, value, $super) {
    key = key === VOID ? this.key_1 : key;
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_vc066o_k$(key, value) : $super.copy_vc066o_k$.call(this, key, value);
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.key_1) + ', value=' + toString_0(this.value_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.key_1 == null ? 0 : hashCode(this.key_1);
    result = imul(result, 31) + (this.value_1 == null ? 0 : hashCode(this.value_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.key_1, tmp0_other_with_cast.key_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.element$default_ey7ac9_k$('key', $keySerializer.get_descriptor_wjt6a0_k$());
      $this$buildSerialDescriptor.element$default_ey7ac9_k$('value', $valueSerializer.get_descriptor_wjt6a0_k$());
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(MapEntrySerializer_0).get_key_xxv71t_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_key_18j28a_k$();
  };
  protoOf(MapEntrySerializer_0).get_key_ebxj0t_k$ = function (_this__u8e3s4) {
    return this.get_key_xxv71t_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).get_value_ubwxlt_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_value_j01efc_k$();
  };
  protoOf(MapEntrySerializer_0).get_value_k1nl8b_k$ = function (_this__u8e3s4) {
    return this.get_value_ubwxlt_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).toResult_8m84pf_k$ = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.element$default_ey7ac9_k$('first', $keySerializer.get_descriptor_wjt6a0_k$());
      $this$buildClassSerialDescriptor.element$default_ey7ac9_k$('second', $valueSerializer.get_descriptor_wjt6a0_k$());
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.descriptor_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(PairSerializer_0).get_key_se2fpi_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_first_irdx8n_k$();
  };
  protoOf(PairSerializer_0).get_key_ebxj0t_k$ = function (_this__u8e3s4) {
    return this.get_key_se2fpi_k$(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).get_value_fcxc14_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_second_jf7fjx_k$();
  };
  protoOf(PairSerializer_0).get_value_k1nl8b_k$ = function (_this__u8e3s4) {
    return this.get_value_fcxc14_k$(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).toResult_8m84pf_k$ = function (key, value) {
    return to(key, value);
  };
  function _get_aSerializer__qgvori($this) {
    return $this.aSerializer_1;
  }
  function _get_bSerializer__slqdml($this) {
    return $this.bSerializer_1;
  }
  function _get_cSerializer__uql2ho($this) {
    return $this.cSerializer_1;
  }
  function decodeSequentially_1($this, composite) {
    var a = composite.decodeSerializableElement$default_j0zaoi_k$($this.descriptor_1, 0, $this.aSerializer_1);
    var b = composite.decodeSerializableElement$default_j0zaoi_k$($this.descriptor_1, 1, $this.bSerializer_1);
    var c = composite.decodeSerializableElement$default_j0zaoi_k$($this.descriptor_1, 2, $this.cSerializer_1);
    composite.endStructure_1xqz0n_k$($this.descriptor_1);
    return new Triple(a, b, c);
  }
  function decodeStructure_0($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.decodeElementIndex_bstkhp_k$($this.descriptor_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.decodeSerializableElement$default_j0zaoi_k$($this.descriptor_1, 0, $this.aSerializer_1);
          break;
        case 1:
          b = composite.decodeSerializableElement$default_j0zaoi_k$($this.descriptor_1, 1, $this.bSerializer_1);
          break;
        case 2:
          c = composite.decodeSerializableElement$default_j0zaoi_k$($this.descriptor_1, 2, $this.cSerializer_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.endStructure_1xqz0n_k$($this.descriptor_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : !(b == null)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : !(c == null)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.element$default_ey7ac9_k$('first', this$0.aSerializer_1.get_descriptor_wjt6a0_k$());
      $this$buildClassSerialDescriptor.element$default_ey7ac9_k$('second', this$0.bSerializer_1.get_descriptor_wjt6a0_k$());
      $this$buildClassSerialDescriptor.element$default_ey7ac9_k$('third', this$0.cSerializer_1.get_descriptor_wjt6a0_k$());
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.aSerializer_1 = aSerializer;
    this.bSerializer_1 = bSerializer;
    this.cSerializer_1 = cSerializer;
    var tmp = this;
    tmp.descriptor_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(TripleSerializer_0).serialize_zfbeo4_k$ = function (encoder, value) {
    var structuredEncoder = encoder.beginStructure_yljocp_k$(this.descriptor_1);
    structuredEncoder.encodeSerializableElement_isqxcl_k$(this.descriptor_1, 0, this.aSerializer_1, value.get_first_irdx8n_k$());
    structuredEncoder.encodeSerializableElement_isqxcl_k$(this.descriptor_1, 1, this.bSerializer_1, value.get_second_jf7fjx_k$());
    structuredEncoder.encodeSerializableElement_isqxcl_k$(this.descriptor_1, 2, this.cSerializer_1, value.get_third_iz27um_k$());
    structuredEncoder.endStructure_1xqz0n_k$(this.descriptor_1);
  };
  protoOf(TripleSerializer_0).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_zfbeo4_k$(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).deserialize_sy6x50_k$ = function (decoder) {
    var composite = decoder.beginStructure_yljocp_k$(this.descriptor_1);
    if (composite.decodeSequentially_xlblqy_k$()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure_0(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.keySerializer_1 = keySerializer;
    this.valueSerializer_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).get_keySerializer_t29hrc_k$ = function () {
    return this.keySerializer_1;
  };
  protoOf(KeyValueSerializer).get_valueSerializer_gksbgm_k$ = function () {
    return this.valueSerializer_1;
  };
  protoOf(KeyValueSerializer).serialize_hmir9w_k$ = function (encoder, value) {
    var structuredEncoder = encoder.beginStructure_yljocp_k$(this.get_descriptor_wjt6a0_k$());
    structuredEncoder.encodeSerializableElement_isqxcl_k$(this.get_descriptor_wjt6a0_k$(), 0, this.keySerializer_1, this.get_key_ebxj0t_k$(value));
    structuredEncoder.encodeSerializableElement_isqxcl_k$(this.get_descriptor_wjt6a0_k$(), 1, this.valueSerializer_1, this.get_value_k1nl8b_k$(value));
    structuredEncoder.endStructure_1xqz0n_k$(this.get_descriptor_wjt6a0_k$());
  };
  protoOf(KeyValueSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_hmir9w_k$(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).deserialize_sy6x50_k$ = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.get_descriptor_wjt6a0_k$();
    var composite = decoder.beginStructure_yljocp_k$(descriptor);
    var tmp$ret$0;
    $l$block: {
      if (composite.decodeSequentially_xlblqy_k$()) {
        var key = composite.decodeSerializableElement$default_j0zaoi_k$(this.get_descriptor_wjt6a0_k$(), 0, this.keySerializer_1);
        var value = composite.decodeSerializableElement$default_j0zaoi_k$(this.get_descriptor_wjt6a0_k$(), 1, this.valueSerializer_1);
        tmp$ret$0 = this.toResult_8m84pf_k$(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.decodeElementIndex_bstkhp_k$(this.get_descriptor_wjt6a0_k$());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.decodeSerializableElement$default_j0zaoi_k$(this.get_descriptor_wjt6a0_k$(), 0, this.keySerializer_1);
            break;
          case 1:
            value_0 = composite.decodeSerializableElement$default_j0zaoi_k$(this.get_descriptor_wjt6a0_k$(), 1, this.valueSerializer_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      var tmp = (key_0 == null ? true : !(key_0 == null)) ? key_0 : THROW_CCE();
      tmp$ret$0 = this.toResult_8m84pf_k$(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.endStructure_1xqz0n_k$(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.descriptor_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_7(Companion_getInstance_2()));
  }
  protoOf(ULongSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(ULongSerializer).serialize_xylsuw_k$ = function (encoder, value) {
    var tmp = encoder.encodeInline_wxp5pu_k$(this.descriptor_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.encodeLong_3didw_k$(tmp$ret$0);
  };
  protoOf(ULongSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_xylsuw_k$(encoder, value instanceof ULong ? value.data_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).deserialize_5le3z5_k$ = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.decodeInline_ux3vza_k$(this.descriptor_1).decodeLong_jzt186_k$();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return new ULong(this.deserialize_5le3z5_k$(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.descriptor_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_1(IntCompanionObject_getInstance()));
  }
  protoOf(UIntSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(UIntSerializer).serialize_nf63e0_k$ = function (encoder, value) {
    var tmp = encoder.encodeInline_wxp5pu_k$(this.descriptor_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.encodeInt_y5zi3z_k$(tmp$ret$0);
  };
  protoOf(UIntSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_nf63e0_k$(encoder, value instanceof UInt ? value.data_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).deserialize_dkfhli_k$ = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.decodeInline_ux3vza_k$(this.descriptor_1).decodeInt_8iq8f5_k$();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return new UInt(this.deserialize_dkfhli_k$(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.descriptor_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_10(ShortCompanionObject_getInstance()));
  }
  protoOf(UShortSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(UShortSerializer).serialize_659s26_k$ = function (encoder, value) {
    var tmp = encoder.encodeInline_wxp5pu_k$(this.descriptor_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.encodeShort_gza6si_k$(tmp$ret$0);
  };
  protoOf(UShortSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_659s26_k$(encoder, value instanceof UShort ? value.data_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).deserialize_vgnfnb_k$ = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.decodeInline_ux3vza_k$(this.descriptor_1).decodeShort_jjqk32_k$();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return new UShort(this.deserialize_vgnfnb_k$(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.descriptor_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_12(ByteCompanionObject_getInstance()));
  }
  protoOf(UByteSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(UByteSerializer).serialize_8ovvmg_k$ = function (encoder, value) {
    var tmp = encoder.encodeInline_wxp5pu_k$(this.descriptor_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.encodeByte_6txfee_k$(tmp$ret$0);
  };
  protoOf(UByteSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_8ovvmg_k$(encoder, value instanceof UByte ? value.data_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).deserialize_5l7xnx_k$ = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.decodeInline_ux3vza_k$(this.descriptor_1).decodeByte_jzz7je_k$();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return new UByte(this.deserialize_5l7xnx_k$(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).getContextual_dlk5e_k$ = function (kclass) {
    return this.getContextual_7czf62_k$(kclass, emptyList());
  };
  protoOf(SerializersModule).getContextual$default_o8kdzb_k$ = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.getContextual_7czf62_k$(kClass, typeArgumentsSerializers) : $super.getContextual_7czf62_k$.call(this, kClass, typeArgumentsSerializers);
  };
  function plus(_this__u8e3s4, other) {
    _init_properties_SerializersModule_kt__u78ha3();
    // Inline function 'kotlinx.serialization.modules.SerializersModule' call
    var builder = new SerializersModuleBuilder();
    builder.include_ys61s4_k$(_this__u8e3s4);
    builder.include_ys61s4_k$(other);
    return builder.build_boe8ts_k$();
  }
  function overwriteWith(_this__u8e3s4, other) {
    _init_properties_SerializersModule_kt__u78ha3();
    // Inline function 'kotlinx.serialization.modules.SerializersModule' call
    var builder = new SerializersModuleBuilder();
    builder.include_ys61s4_k$(_this__u8e3s4);
    other.dumpTo_vt5sm4_k$(new overwriteWith$1(builder));
    return builder.build_boe8ts_k$();
  }
  function _get_class2ContextualFactory__qh9mum($this) {
    return $this.class2ContextualFactory_1;
  }
  function _get_polyBase2DefaultSerializerProvider__mm2oxw($this) {
    return $this.polyBase2DefaultSerializerProvider_1;
  }
  function _get_polyBase2NamedSerializers__2zbzbo($this) {
    return $this.polyBase2NamedSerializers_1;
  }
  function _get_polyBase2DefaultDeserializerProvider__uja6n9($this) {
    return $this.polyBase2DefaultDeserializerProvider_1;
  }
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.class2ContextualFactory_1 = class2ContextualFactory;
    this.polyBase2Serializers_1 = polyBase2Serializers;
    this.polyBase2DefaultSerializerProvider_1 = polyBase2DefaultSerializerProvider;
    this.polyBase2NamedSerializers_1 = polyBase2NamedSerializers;
    this.polyBase2DefaultDeserializerProvider_1 = polyBase2DefaultDeserializerProvider;
    this.hasInterfaceContextualSerializers_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).get_polyBase2Serializers_eilxqt_k$ = function () {
    return this.polyBase2Serializers_1;
  };
  protoOf(SerialModuleImpl).get_hasInterfaceContextualSerializers_ia3ak6_k$ = function () {
    return this.hasInterfaceContextualSerializers_1;
  };
  protoOf(SerialModuleImpl).getPolymorphic_yj8c4_k$ = function (baseClass, value) {
    if (!baseClass.isInstance_6tn68w_k$(value))
      return null;
    var tmp0_safe_receiver = this.polyBase2Serializers_1.get_wei43m_k$(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_wei43m_k$(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.polyBase2DefaultSerializerProvider_1.get_wei43m_k$(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).getPolymorphic_adjtcj_k$ = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.polyBase2NamedSerializers_1.get_wei43m_k$(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).get_wei43m_k$(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.polyBase2DefaultDeserializerProvider_1.get_wei43m_k$(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).getContextual_7czf62_k$ = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.class2ContextualFactory_1.get_wei43m_k$(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.invoke_joezcs_k$(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).dumpTo_vt5sm4_k$ = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.class2ContextualFactory_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.get_value_j01efc_k$();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.serializer_1;
        collector.contextual_s0h8js_k$(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.contextual_lh3eph_k$(kclass, serial.provider_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.polyBase2Serializers_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.get_value_j01efc_k$();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
        var element_1 = _iterator__ex2g4s_1.next_20eer_k$();
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.get_value_j01efc_k$();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$11 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.polymorphic_74dxah_k$(tmp_1, tmp_2, tmp$ret$11);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.polyBase2DefaultSerializerProvider_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
      var element_2 = _iterator__ex2g4s_2.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.get_value_j01efc_k$();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.polymorphicDefaultSerializer_vvzf8a_k$(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.polyBase2DefaultDeserializerProvider_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s_3.hasNext_bitz1p_k$()) {
      var element_3 = _iterator__ex2g4s_3.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.get_value_j01efc_k$();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.polymorphicDefaultDeserializer_ur850q_k$(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.serializer_1 = serializer;
  }
  protoOf(Argless).get_serializer_u29zhh_k$ = function () {
    return this.serializer_1;
  };
  protoOf(Argless).invoke_joezcs_k$ = function (typeArgumentsSerializers) {
    return this.serializer_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.serializer_1, this.serializer_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.serializer_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.provider_1 = provider;
  }
  protoOf(WithTypeArguments).get_provider_mw8vcq_k$ = function () {
    return this.provider_1;
  };
  protoOf(WithTypeArguments).invoke_joezcs_k$ = function (typeArgumentsSerializers) {
    return this.provider_1(typeArgumentsSerializers);
  };
  function ContextualProvider() {
  }
  function overwriteWith$1($this_SerializersModule) {
    this.$this_SerializersModule_1 = $this_SerializersModule;
  }
  protoOf(overwriteWith$1).contextual_s0h8js_k$ = function (kClass, serializer) {
    this.$this_SerializersModule_1.registerSerializer_djm6xw_k$(kClass, new Argless(serializer), true);
  };
  protoOf(overwriteWith$1).contextual_lh3eph_k$ = function (kClass, provider) {
    this.$this_SerializersModule_1.registerSerializer_djm6xw_k$(kClass, new WithTypeArguments(provider), true);
  };
  protoOf(overwriteWith$1).polymorphic_74dxah_k$ = function (baseClass, actualClass, actualSerializer) {
    this.$this_SerializersModule_1.registerPolymorphicSerializer_xsbrkt_k$(baseClass, actualClass, actualSerializer, true);
  };
  protoOf(overwriteWith$1).polymorphicDefaultSerializer_vvzf8a_k$ = function (baseClass, defaultSerializerProvider) {
    this.$this_SerializersModule_1.registerDefaultPolymorphicSerializer_9ltjc6_k$(baseClass, defaultSerializerProvider, true);
  };
  protoOf(overwriteWith$1).polymorphicDefaultDeserializer_ur850q_k$ = function (baseClass, defaultDeserializerProvider) {
    this.$this_SerializersModule_1.registerDefaultPolymorphicDeserializer_gcvyru_k$(baseClass, defaultDeserializerProvider, true);
  };
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function SerializersModule_0(builderAction) {
    var builder = new SerializersModuleBuilder();
    builderAction(builder);
    return builder.build_boe8ts_k$();
  }
  function _get_class2ContextualProvider__qmtxtd($this) {
    return $this.class2ContextualProvider_1;
  }
  function _get_polyBase2Serializers__z5x3wf($this) {
    return $this.polyBase2Serializers_1;
  }
  function _get_polyBase2DefaultSerializerProvider__mm2oxw_0($this) {
    return $this.polyBase2DefaultSerializerProvider_1;
  }
  function _get_polyBase2NamedSerializers__2zbzbo_0($this) {
    return $this.polyBase2NamedSerializers_1;
  }
  function _get_polyBase2DefaultDeserializerProvider__uja6n9_0($this) {
    return $this.polyBase2DefaultDeserializerProvider_1;
  }
  function _set_hasInterfaceContextualSerializers__v1wl2k($this, _set____db54di) {
    $this.hasInterfaceContextualSerializers_1 = _set____db54di;
  }
  function _get_hasInterfaceContextualSerializers__23t9c($this) {
    return $this.hasInterfaceContextualSerializers_1;
  }
  function SerializersModuleBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.class2ContextualProvider_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.polyBase2Serializers_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.polyBase2DefaultSerializerProvider_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.polyBase2NamedSerializers_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.polyBase2DefaultDeserializerProvider_1 = HashMap_init_$Create$();
    this.hasInterfaceContextualSerializers_1 = false;
  }
  protoOf(SerializersModuleBuilder).contextual_s0h8js_k$ = function (kClass, serializer) {
    return this.registerSerializer$default_6crdmw_k$(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).contextual_lh3eph_k$ = function (kClass, provider) {
    return this.registerSerializer$default_6crdmw_k$(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).polymorphic_74dxah_k$ = function (baseClass, actualClass, actualSerializer) {
    this.registerPolymorphicSerializer$default_xvggxd_k$(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).polymorphicDefaultSerializer_vvzf8a_k$ = function (baseClass, defaultSerializerProvider) {
    this.registerDefaultPolymorphicSerializer_9ltjc6_k$(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).polymorphicDefaultDeserializer_ur850q_k$ = function (baseClass, defaultDeserializerProvider) {
    this.registerDefaultPolymorphicDeserializer_gcvyru_k$(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).include_ys61s4_k$ = function (module_0) {
    module_0.dumpTo_vt5sm4_k$(this);
  };
  protoOf(SerializersModuleBuilder).registerSerializer_djm6xw_k$ = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.class2ContextualProvider_1.get_wei43m_k$(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.class2ContextualProvider_1.put_4fpzoq_k$(forClass, provider);
    if (isInterface_0(forClass))
      this.hasInterfaceContextualSerializers_1 = true;
  };
  protoOf(SerializersModuleBuilder).registerSerializer$default_6crdmw_k$ = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.registerSerializer_djm6xw_k$(forClass, provider, allowOverwrite);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.registerSerializer_djm6xw_k$.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).registerDefaultPolymorphicSerializer_9ltjc6_k$ = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.polyBase2DefaultSerializerProvider_1.get_wei43m_k$(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString_0(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.polyBase2DefaultSerializerProvider_1.put_4fpzoq_k$(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).registerDefaultPolymorphicDeserializer_gcvyru_k$ = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.polyBase2DefaultDeserializerProvider_1.get_wei43m_k$(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString_0(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.polyBase2DefaultDeserializerProvider_1.put_4fpzoq_k$(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).registerPolymorphicSerializer_xsbrkt_k$ = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.polyBase2Serializers_1;
    var value = this_0.get_wei43m_k$(baseClass);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer = HashMap_init_$Create$();
      this_0.put_4fpzoq_k$(baseClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var baseClassSerializers = tmp;
    var previousSerializer = baseClassSerializers.get_wei43m_k$(concreteClass);
    // Inline function 'kotlin.collections.getOrPut' call
    var this_1 = this.polyBase2NamedSerializers_1;
    var value_0 = this_1.get_wei43m_k$(baseClass);
    var tmp_0;
    if (value_0 == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer_0 = HashMap_init_$Create$();
      this_1.put_4fpzoq_k$(baseClass, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    var names = tmp_0;
    if (allowOverwrite) {
      if (!(previousSerializer == null)) {
        names.remove_gppy8k_k$(previousSerializer.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$());
      }
      // Inline function 'kotlin.collections.set' call
      baseClassSerializers.put_4fpzoq_k$(concreteClass, concreteSerializer);
      // Inline function 'kotlin.collections.set' call
      names.put_4fpzoq_k$(name, concreteSerializer);
      return Unit_getInstance();
    }
    if (!(previousSerializer == null)) {
      if (!equals(previousSerializer, concreteSerializer)) {
        throw SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass);
      } else {
        names.remove_gppy8k_k$(previousSerializer.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$());
      }
    }
    var previousByName = names.get_wei43m_k$(name);
    if (!(previousByName == null)) {
      // Inline function 'kotlin.sequences.find' call
      var tmp0 = asSequence(ensureNotNull(this.polyBase2Serializers_1.get_wei43m_k$(baseClass)));
      var tmp$ret$9;
      $l$block: {
        // Inline function 'kotlin.sequences.firstOrNull' call
        var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          if (element.get_value_j01efc_k$() === previousByName) {
            tmp$ret$9 = element;
            break $l$block;
          }
        }
        tmp$ret$9 = null;
      }
      var conflictingClass = tmp$ret$9;
      throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers for base class '" + toString(baseClass) + "' " + ("have the same serial name '" + name + "': '" + toString(concreteClass) + "' and '" + toString_0(conflictingClass) + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.put_4fpzoq_k$(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.put_4fpzoq_k$(name, concreteSerializer);
  };
  protoOf(SerializersModuleBuilder).registerPolymorphicSerializer$default_xvggxd_k$ = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.registerPolymorphicSerializer_xsbrkt_k$(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.registerPolymorphicSerializer_xsbrkt_k$.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).build_boe8ts_k$ = function () {
    return new SerialModuleImpl(this.class2ContextualProvider_1, this.polyBase2Serializers_1, this.polyBase2DefaultSerializerProvider_1, this.polyBase2NamedSerializers_1, this.polyBase2DefaultDeserializerProvider_1, this.hasInterfaceContextualSerializers_1);
  };
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, $this) {
    SerializerAlreadyRegisteredException.call($this, 'Serializer for ' + toString(concreteClass) + ' already registered in the scope of ' + toString(baseClass));
    return $this;
  }
  function SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass) {
    var tmp = SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, objectCreate(protoOf(SerializerAlreadyRegisteredException)));
    captureStack(tmp, SerializerAlreadyRegisteredException_init_$Create$);
    return tmp;
  }
  function SerializerAlreadyRegisteredException(msg) {
    IllegalArgumentException_init_$Init$_0(msg, this);
    captureStack(this, SerializerAlreadyRegisteredException);
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.serializer_1 = serializer;
  }
  protoOf(SerializableWith).get_serializer_u29zhh_k$ = function () {
    return this.serializer_1;
  };
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.serializer_1.equals(tmp0_other_with_cast.serializer_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.serializer_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.serializer_1) + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function isInterface_0(_this__u8e3s4) {
    return get_isInterface(_this__u8e3s4);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), serializer_2(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_4(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().get_charArrayClass_7lhfoe_k$(), CharArraySerializer()), to(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$(), serializer_5(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_doubleArrayClass_84hee1_k$(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$(), serializer_6(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_floatArrayClass_qngmha_k$(), FloatArraySerializer()), to(getKClass(Long), serializer_7(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().get_longArrayClass_v379a4_k$(), LongArraySerializer()), to(getKClass(ULong), serializer_8(Companion_getInstance_3())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$(), serializer_1(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_intArrayClass_h44pbv_k$(), IntArraySerializer()), to(getKClass(UInt), serializer_9(Companion_getInstance_4())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$(), serializer_10(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_shortArrayClass_c1p7wy_k$(), ShortArraySerializer()), to(getKClass(UShort), serializer_11(Companion_getInstance_5())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$(), serializer_12(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$(), ByteArraySerializer()), to(getKClass(UByte), serializer_13(Companion_getInstance_6())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().get_booleanClass_d285fr_k$(), serializer_3(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_booleanArrayClass_lnbwea_k$(), BooleanArraySerializer()), to(getKClass(Unit), serializer_14(Unit_getInstance())), to(PrimitiveClasses_getInstance().get_nothingClass_7ivpcc_k$(), NothingSerializer()), to(getKClass(Duration), serializer_15(Companion_getInstance())), to(getKClass(Uuid), serializer_16(Companion_getInstance_0()))]);
  }
  function get_isInterface(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().get_nothingClass_7ivpcc_k$())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().get_nothingClass_7ivpcc_k$()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().get_arrayClass_udg0fc_k$());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = isInterface(assocObject, KSerializer) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.serializer_nv39qc_k$(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          tmp_0 = null;
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function createCache$1($factory) {
    this.$factory_1 = $factory;
  }
  protoOf(createCache$1).get_dwpfd5_k$ = function (key) {
    return this.$factory_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.$factory_1 = $factory;
  }
  protoOf(createParametrizedCache$1).get_zd31r2_k$ = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      Companion_getInstance_7();
      // Inline function 'kotlin.Companion.success' call
      var value = this.$factory_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance_7();
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(SerialDescriptorImpl).get_isInline_usk17w_k$ = get_isInline;
  protoOf(AbstractDecoder).decodeSerializableElement$default_j0zaoi_k$ = decodeSerializableElement$default;
  protoOf(AbstractDecoder).decodeNullableSerializableElement$default_q1b6sc_k$ = decodeNullableSerializableElement$default;
  protoOf(AbstractDecoder).decodeSerializableValue_xpnpad_k$ = decodeSerializableValue;
  protoOf(AbstractDecoder).decodeNullableSerializableValue_sc8iki_k$ = decodeNullableSerializableValue;
  protoOf(AbstractDecoder).decodeSequentially_xlblqy_k$ = decodeSequentially;
  protoOf(AbstractDecoder).decodeCollectionSize_l3mlkk_k$ = decodeCollectionSize;
  protoOf(AbstractEncoder).encodeNotNullMark_415a1t_k$ = encodeNotNullMark;
  protoOf(AbstractEncoder).beginCollection_9edss2_k$ = beginCollection;
  protoOf(AbstractEncoder).encodeSerializableValue_3uuzip_k$ = encodeSerializableValue;
  protoOf(AbstractEncoder).encodeNullableSerializableValue_ibrab1_k$ = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).shouldEncodeElementDefault_x8eyid_k$ = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(ListLikeDescriptor).get_isInline_usk17w_k$ = get_isInline;
  protoOf(ListLikeDescriptor).get_annotations_20dirp_k$ = get_annotations;
  protoOf(MapLikeDescriptor).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(MapLikeDescriptor).get_isInline_usk17w_k$ = get_isInline;
  protoOf(MapLikeDescriptor).get_annotations_20dirp_k$ = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).get_isInline_usk17w_k$ = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(NothingSerialDescriptor).get_isInline_usk17w_k$ = get_isInline;
  protoOf(NothingSerialDescriptor).get_annotations_20dirp_k$ = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).get_isNullable_67sy7o_k$ = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).get_isInline_usk17w_k$ = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).get_annotations_20dirp_k$ = get_annotations;
  protoOf(overwriteWith$1).polymorphicDefault_n864hv_k$ = polymorphicDefault;
  protoOf(SerializersModuleBuilder).polymorphicDefault_n864hv_k$ = polymorphicDefault;
  protoOf(createCache$1).isStored_o1qmv9_k$ = isStored;
  protoOf(createParametrizedCache$1).get$default_wf93mi_k$ = get$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MissingFieldException_init_$Create$_0;
  _.$_$.b = SerializationException_init_$Create$_0;
  _.$_$.c = STRING_getInstance;
  _.$_$.d = CLASS_getInstance;
  _.$_$.e = LIST_getInstance;
  _.$_$.f = MAP_getInstance;
  _.$_$.g = OBJECT_getInstance;
  _.$_$.h = ArraySerializer;
  _.$_$.i = BooleanArraySerializer;
  _.$_$.j = CharArraySerializer;
  _.$_$.k = DoubleArraySerializer;
  _.$_$.l = FloatArraySerializer;
  _.$_$.m = IntArraySerializer;
  _.$_$.n = ListSerializer;
  _.$_$.o = LongArraySerializer;
  _.$_$.p = serializer_2;
  _.$_$.q = serializer_1;
  _.$_$.r = PrimitiveSerialDescriptor;
  _.$_$.s = buildClassSerialDescriptor;
  _.$_$.t = AbstractDecoder;
  _.$_$.u = AbstractEncoder;
  _.$_$.v = AbstractPolymorphicSerializer;
  _.$_$.w = EmptySerializersModule_0;
  _.$_$.x = SerializersModuleBuilder;
  _.$_$.y = overwriteWith;
  _.$_$.z = plus;
  _.$_$.a1 = KSerializer;
  _.$_$.b1 = SealedClassSerializer;
  _.$_$.c1 = SerializableWith;
  _.$_$.d1 = serializer_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
