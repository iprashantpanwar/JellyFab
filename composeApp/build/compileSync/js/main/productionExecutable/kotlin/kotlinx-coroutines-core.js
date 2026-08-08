(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    globalThis['kotlinx-coroutines-core'] = factory(typeof globalThis['kotlinx-coroutines-core'] === 'undefined' ? {} : globalThis['kotlinx-coroutines-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.b3;
  var protoOf = kotlin_kotlin.$_$.z9;
  var THROW_CCE = kotlin_kotlin.$_$.md;
  var Continuation = kotlin_kotlin.$_$.g7;
  var initMetadataForClass = kotlin_kotlin.$_$.h9;
  var VOID = kotlin_kotlin.$_$.b;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.s2;
  var Key_instance = kotlin_kotlin.$_$.r2;
  var equals = kotlin_kotlin.$_$.z8;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.y6;
  var CoroutineImpl = kotlin_kotlin.$_$.m7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x6;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.j9;
  var toString = kotlin_kotlin.$_$.ba;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var intercepted = kotlin_kotlin.$_$.z6;
  var initMetadataForInterface = kotlin_kotlin.$_$.l9;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var isInterface = kotlin_kotlin.$_$.q9;
  var toString_0 = kotlin_kotlin.$_$.oe;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var initMetadataForObject = kotlin_kotlin.$_$.n9;
  var hashCode = kotlin_kotlin.$_$.g9;
  var Companion_instance = kotlin_kotlin.$_$.a3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.g2;
  var createFailure = kotlin_kotlin.$_$.vd;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.t;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.h2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.j2;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.c7;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.b7;
  var get = kotlin_kotlin.$_$.d7;
  var minusKey = kotlin_kotlin.$_$.e7;
  var ContinuationInterceptor = kotlin_kotlin.$_$.f7;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var addSuppressed = kotlin_kotlin.$_$.rd;
  var Enum = kotlin_kotlin.$_$.bd;
  var startCoroutine = kotlin_kotlin.$_$.o7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ce;
  var Long = kotlin_kotlin.$_$.hd;
  var compare = kotlin_kotlin.$_$.w7;
  var Duration__isPositive_impl_tvkkt2 = kotlin_kotlin.$_$.y1;
  var Companion_getInstance = kotlin_kotlin.$_$.x2;
  var DurationUnit_NANOSECONDS_getInstance = kotlin_kotlin.$_$.d;
  var toDuration = kotlin_kotlin.$_$.vc;
  var Duration__plus_impl_yu9v8f = kotlin_kotlin.$_$.z1;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.x1;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.g;
  var add = kotlin_kotlin.$_$.s7;
  var subtract = kotlin_kotlin.$_$.k8;
  var RuntimeException = kotlin_kotlin.$_$.ld;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.t1;
  var captureStack = kotlin_kotlin.$_$.p8;
  var Error_0 = kotlin_kotlin.$_$.cd;
  var Error_init_$Init$ = kotlin_kotlin.$_$.c1;
  var Element = kotlin_kotlin.$_$.k7;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var CancellationException = kotlin_kotlin.$_$.w6;
  var ArrayList = kotlin_kotlin.$_$.i3;
  var SequenceScope = kotlin_kotlin.$_$.db;
  var initMetadataForLambda = kotlin_kotlin.$_$.m9;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.l1;
  var sequence = kotlin_kotlin.$_$.lb;
  var plus = kotlin_kotlin.$_$.l7;
  var get_0 = kotlin_kotlin.$_$.i7;
  var fold = kotlin_kotlin.$_$.h7;
  var minusKey_0 = kotlin_kotlin.$_$.j7;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.je;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.y;
  var anyToString = kotlin_kotlin.$_$.n8;
  var UnsupportedOperationException = kotlin_kotlin.$_$.qd;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.s;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.c;
  var returnIfSuspended = kotlin_kotlin.$_$.f;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.wd;
  var fromInt = kotlin_kotlin.$_$.b8;
  var multiply = kotlin_kotlin.$_$.e8;
  var divide = kotlin_kotlin.$_$.z7;
  var modulo = kotlin_kotlin.$_$.d8;
  var convertToInt = kotlin_kotlin.$_$.x7;
  var equalsLong = kotlin_kotlin.$_$.a8;
  var bitwiseAnd = kotlin_kotlin.$_$.t7;
  var shiftRight = kotlin_kotlin.$_$.j8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var listOf = kotlin_kotlin.$_$.v5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var compareTo = kotlin_kotlin.$_$.v8;
  var last = kotlin_kotlin.$_$.bc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a2;
  var shiftLeft = kotlin_kotlin.$_$.h8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i9;
  var IllegalStateException = kotlin_kotlin.$_$.fd;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.j1;
  var NoSuchElementException = kotlin_kotlin.$_$.id;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.o1;
  var getKClass = kotlin_kotlin.$_$.ya;
  var Unit = kotlin_kotlin.$_$.pd;
  var copyOf = kotlin_kotlin.$_$.l4;
  var get_ONE = kotlin_kotlin.$_$.r7;
  var joinToString = kotlin_kotlin.$_$.i5;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.a7;
  var FunctionAdapter = kotlin_kotlin.$_$.m8;
  var Exception = kotlin_kotlin.$_$.dd;
  var toLongOrNull = kotlin_kotlin.$_$.oc;
  var isSuspendFunction = kotlin_kotlin.$_$.r9;
  var Collection = kotlin_kotlin.$_$.j3;
  var KtList = kotlin_kotlin.$_$.k3;
  var plus_0 = kotlin_kotlin.$_$.c6;
  var listOf_0 = kotlin_kotlin.$_$.u5;
  var getKClassFromExpression = kotlin_kotlin.$_$.xa;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.u;
  var getStringHashCode = kotlin_kotlin.$_$.f9;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.m;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.r1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.r;
  var removeFirstOrNull = kotlin_kotlin.$_$.d6;
  var KtMutableList = kotlin_kotlin.$_$.o3;
  var coerceIn = kotlin_kotlin.$_$.ta;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.v1;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.fx(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.fx.call(this, cause);
    }
    return tmp;
  }
  initMetadataForInterface(Job, 'Job', VOID, VOID, [Element], [0]);
  initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Job], [0]);
  initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Job, ParentJob], [0]);
  initMetadataForInterface(CoroutineScope, 'CoroutineScope');
  initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], [0]);
  initMetadataForClass(StandaloneCoroutine, 'StandaloneCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', VOID, StandaloneCoroutine, VOID, [0]);
  initMetadataForCoroutine($awaitCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DeferredCoroutine, 'DeferredCoroutine', VOID, AbstractCoroutine, [AbstractCoroutine, Job], [0]);
  initMetadataForClass(LazyDeferredCoroutine, 'LazyDeferredCoroutine', VOID, DeferredCoroutine, VOID, [0]);
  initMetadataForClass(ScopeCoroutine, 'ScopeCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(DispatchedCoroutine, 'DispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.gz(cause) : $super.gz.call(this, cause);
  }
  initMetadataForInterface(CancellableContinuation, 'CancellableContinuation', VOID, VOID, [Continuation]);
  initMetadataForInterface(NotCompleted, 'NotCompleted');
  initMetadataForInterface(CancelHandler, 'CancelHandler', VOID, VOID, [NotCompleted]);
  initMetadataForClass(DisposeOnCancel, 'DisposeOnCancel', VOID, VOID, [CancelHandler]);
  initMetadataForInterface(Runnable, 'Runnable');
  initMetadataForClass(SchedulerTask, 'SchedulerTask', VOID, VOID, [Runnable]);
  initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
  initMetadataForInterface(Waiter, 'Waiter');
  initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [DispatchedTask, CancellableContinuation, Waiter]);
  initMetadataForObject(Active, 'Active', VOID, VOID, [NotCompleted]);
  initMetadataForClass(CompletedContinuation, 'CompletedContinuation');
  initMetadataForClass(UserSupplied, 'UserSupplied', VOID, VOID, [CancelHandler]);
  initMetadataForCoroutine($awaitCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(CompletableDeferredImpl, 'CompletableDeferredImpl', VOID, JobSupport, [JobSupport, Job], [0]);
  initMetadataForClass(UserSupplied_0, 'UserSupplied');
  initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
  initMetadataForClass(CancelledContinuation, 'CancelledContinuation', VOID, CompletedExceptionally);
  initMetadataForClass(CompletedWithCancellation, 'CompletedWithCancellation');
  initMetadataForObject(Key, 'Key', VOID, AbstractCoroutineContextKey);
  initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  initMetadataForObject(Key_0, 'Key');
  initMetadataForObject(Key_1, 'Key');
  initMetadataForObject(GlobalScope, 'GlobalScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(CoroutineStart, 'CoroutineStart', VOID, Enum);
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().t12(timeMillis, block, context);
  }
  initMetadataForInterface(Delay, 'Delay', VOID, VOID, VOID, [1]);
  initMetadataForInterface(DelayWithTimeoutDiagnostics, 'DelayWithTimeoutDiagnostics', VOID, VOID, [Delay], [1]);
  initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
  initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
  initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
  initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
  initMetadataForObject(Key_2, 'Key');
  initMetadataForInterface(DisposableHandle, 'DisposableHandle');
  initMetadataForInterface(ChildHandle, 'ChildHandle', VOID, VOID, [DisposableHandle]);
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle', VOID, VOID, [DisposableHandle, ChildHandle]);
  initMetadataForClass(LinkedListNode, 'LinkedListNode', LinkedListNode, VOID, [DisposableHandle]);
  initMetadataForInterface(Incomplete, 'Incomplete');
  initMetadataForClass(JobNode, 'JobNode', VOID, LinkedListNode, [LinkedListNode, DisposableHandle, Incomplete]);
  initMetadataForClass(JobCancellingNode, 'JobCancellingNode', VOID, JobNode);
  initMetadataForClass(ChildContinuation, 'ChildContinuation', VOID, JobCancellingNode);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [SynchronizedObject, Incomplete]);
  initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
  initMetadataForClass(AwaitContinuation, 'AwaitContinuation', VOID, CancellableContinuationImpl);
  initMetadataForLambda(JobSupport$_get_children_$slambda_k839f8, CoroutineImpl, VOID, [1]);
  initMetadataForClass(JobImpl, 'JobImpl', VOID, JobSupport, [JobSupport, Job], [0]);
  initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
  initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
  initMetadataForClass(LinkedListHead, 'LinkedListHead', LinkedListHead, LinkedListNode);
  initMetadataForClass(NodeList, 'NodeList', NodeList, LinkedListHead, [LinkedListHead, Incomplete]);
  initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
  initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobCancellingNode);
  initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
  initMetadataForClass(ResumeOnCompletion, 'ResumeOnCompletion', VOID, JobNode);
  initMetadataForClass(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', VOID, JobNode);
  initMetadataForClass(DisposeOnCompletion, 'DisposeOnCompletion', VOID, JobNode);
  initMetadataForClass(MainCoroutineDispatcher, 'MainCoroutineDispatcher', VOID, CoroutineDispatcher);
  initMetadataForClass(SupervisorCoroutine, 'SupervisorCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForClass(SupervisorJobImpl, 'SupervisorJobImpl', VOID, JobImpl, VOID, [0]);
  initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException);
  initMetadataForClass(TimeoutCoroutine, 'TimeoutCoroutine', VOID, ScopeCoroutine, [ScopeCoroutine, Runnable], [0]);
  initMetadataForCoroutine($withTimeoutOrNullCOROUTINE$, CoroutineImpl);
  initMetadataForObject(Key_3, 'Key');
  initMetadataForClass(YieldContext, 'YieldContext', YieldContext, AbstractCoroutineContextElement);
  initMetadataForObject(Unconfined, 'Unconfined', VOID, CoroutineDispatcher);
  initMetadataForClass(BufferOverflow, 'BufferOverflow', VOID, Enum);
  initMetadataForClass(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode');
  initMetadataForClass(Segment, 'Segment', VOID, ConcurrentLinkedListNode, [ConcurrentLinkedListNode, NotCompleted]);
  initMetadataForClass(ChannelSegment, 'ChannelSegment', VOID, Segment);
  initMetadataForCoroutine($hasNextCOROUTINE$, CoroutineImpl);
  initMetadataForClass(SendBroadcast, 'SendBroadcast', VOID, VOID, [Waiter]);
  initMetadataForClass(BufferedChannelIterator, 'BufferedChannelIterator', VOID, VOID, [Waiter], [0, 3]);
  initMetadataForCoroutine($sendCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($receiveCOROUTINE$, CoroutineImpl);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.f1e(cause) : $super.f1e.call(this, cause);
  }
  initMetadataForInterface(SendChannel, 'SendChannel', VOID, VOID, VOID, [1]);
  function cancel$default_1(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.fx(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.fx.call(this, cause);
    }
    return tmp;
  }
  initMetadataForInterface(ReceiveChannel, 'ReceiveChannel', VOID, VOID, VOID, [0]);
  initMetadataForClass(BufferedChannel, 'BufferedChannel', VOID, VOID, [SendChannel, ReceiveChannel], [1, 4, 0, 3]);
  initMetadataForClass(WaiterEB, 'WaiterEB');
  initMetadataForClass(ReceiveCatching, 'ReceiveCatching', VOID, VOID, [Waiter]);
  initMetadataForObject(Factory, 'Factory');
  initMetadataForClass(Failed, 'Failed', Failed);
  initMetadataForClass(Closed, 'Closed', VOID, Failed);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ChannelResult, 'ChannelResult');
  initMetadataForClass(ClosedSendChannelException, 'ClosedSendChannelException', VOID, IllegalStateException);
  initMetadataForClass(ClosedReceiveChannelException, 'ClosedReceiveChannelException', VOID, NoSuchElementException);
  initMetadataForClass(ChannelCoroutine, 'ChannelCoroutine', VOID, AbstractCoroutine, [AbstractCoroutine, SendChannel, ReceiveChannel], [0, 1]);
  initMetadataForClass(ConflatedBufferedChannel, 'ConflatedBufferedChannel', VOID, BufferedChannel, VOID, [1, 0]);
  initMetadataForInterface(ProducerScope, 'ProducerScope', VOID, VOID, [CoroutineScope, SendChannel], [1]);
  initMetadataForClass(ProducerCoroutine, 'ProducerCoroutine', VOID, ChannelCoroutine, [ChannelCoroutine, ProducerScope], [0, 1]);
  initMetadataForClass(AbstractFlow, 'AbstractFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(SafeFlow, 'SafeFlow', VOID, AbstractFlow, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$, CoroutineImpl);
  function fuse$default(context, capacity, onBufferOverflow, $super) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -3 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    return $super === VOID ? this.e1h(context, capacity, onBufferOverflow) : $super.e1h.call(this, context, capacity, onBufferOverflow);
  }
  initMetadataForInterface(FusibleFlow, 'FusibleFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(ChannelFlow, 'ChannelFlow', VOID, VOID, [FusibleFlow], [1]);
  initMetadataForClass(ChannelAsFlow, 'ChannelAsFlow', VOID, ChannelFlow, VOID, [1]);
  initMetadataForCoroutine($emitAllImplCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($collectCOROUTINE$_0, CoroutineImpl);
  initMetadataForInterface(FlowCollector, 'FlowCollector', VOID, VOID, VOID, [1]);
  initMetadataForClass(Emitter, 'Emitter', VOID, VOID, [DisposableHandle]);
  initMetadataForCoroutine($collectCOROUTINE$_1, CoroutineImpl);
  initMetadataForClass(AbstractSharedFlow, 'AbstractSharedFlow', VOID, SynchronizedObject);
  initMetadataForClass(SharedFlowImpl, 'SharedFlowImpl', VOID, AbstractSharedFlow, [AbstractSharedFlow, FlowCollector, FusibleFlow], [1]);
  initMetadataForClass(AbstractSharedFlowSlot, 'AbstractSharedFlowSlot');
  initMetadataForClass(SharedFlowSlot, 'SharedFlowSlot', SharedFlowSlot, AbstractSharedFlowSlot);
  initMetadataForCoroutine($collectCOROUTINE$_2, CoroutineImpl);
  initMetadataForClass(StateFlowImpl, 'StateFlowImpl', VOID, AbstractSharedFlow, [AbstractSharedFlow, FlowCollector, FusibleFlow], [1]);
  initMetadataForClass(StateFlowSlot, 'StateFlowSlot', StateFlowSlot, AbstractSharedFlowSlot, VOID, [0]);
  initMetadataForClass(ChannelFlowOperator, 'ChannelFlowOperator', VOID, ChannelFlow, VOID, [1, 2]);
  initMetadataForClass(ChannelFlowOperatorImpl, 'ChannelFlowOperatorImpl', VOID, ChannelFlowOperator, VOID, [1]);
  initMetadataForLambda(ChannelFlowOperator$collectWithContextUndispatched$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$_3, CoroutineImpl);
  initMetadataForLambda(ChannelFlow$_get_collectToFun_$slambda_j53z2e, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ChannelFlow$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UndispatchedContextCollector$emitRef$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(UndispatchedContextCollector, 'UndispatchedContextCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(StackFrameContinuation, 'StackFrameContinuation', VOID, VOID, [Continuation]);
  initMetadataForClass(FlowCoroutine, 'FlowCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForLambda(scopedFlow$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$_4, CoroutineImpl);
  initMetadataForClass(scopedFlow$$inlined$unsafeFlow$1, VOID, VOID, VOID, VOID, [1]);
  initMetadataForLambda(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ChannelFlowTransformLatest$flowCollect$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(ChannelFlowTransformLatest$flowCollect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ChannelFlowTransformLatest, 'ChannelFlowTransformLatest', VOID, ChannelFlowOperator, VOID, [1]);
  initMetadataForObject(NopCollector, 'NopCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(SendingCollector, 'SendingCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForLambda(debounceInternal$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(debounceInternal$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(debounceInternal$slambda$slambda_1, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(debounceInternal$slambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(debounceInternal$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(ThrowingCollector, 'ThrowingCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForLambda(mapLatest$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($onSubscriptionCOROUTINE$, CoroutineImpl);
  initMetadataForClass(SubscribedFlowCollector, 'SubscribedFlowCollector', VOID, VOID, [FlowCollector], [1, 0]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(filterNotNull$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$_5, CoroutineImpl);
  initMetadataForClass(filterNotNull$$inlined$unsafeTransform$1, VOID, VOID, VOID, VOID, [1]);
  initMetadataForClass(OpDescriptor, 'OpDescriptor');
  initMetadataForClass(SegmentOrClosed, 'SegmentOrClosed');
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [DispatchedTask, Continuation]);
  initMetadataForClass(UndeliveredElementException, 'UndeliveredElementException', VOID, RuntimeException);
  initMetadataForClass(ContextScope, 'ContextScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForClass(OnTimeout$register$$inlined$Runnable$1, VOID, VOID, VOID, [Runnable]);
  initMetadataForClass(OnTimeout, 'OnTimeout');
  initMetadataForClass(SelectClause0Impl, 'SelectClause0Impl');
  initMetadataForInterface(SelectInstance, 'SelectInstance');
  initMetadataForClass(SelectClause1Impl, 'SelectClause1Impl');
  initMetadataForCoroutine($invokeBlockCOROUTINE$, CoroutineImpl);
  initMetadataForClass(ClauseData, 'ClauseData', VOID, VOID, VOID, [1]);
  initMetadataForCoroutine($doSelectCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($doSelectSuspendCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($completeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($processResultAndInvokeBlockRecoveringExceptionCOROUTINE$, CoroutineImpl);
  initMetadataForClass(SelectImplementation, 'SelectImplementation', VOID, VOID, [CancelHandler, SelectInstance, Waiter], [0, 2]);
  initMetadataForClass(TrySelectDetailedResult, 'TrySelectDetailedResult', VOID, Enum);
  function lock$default(owner, $completion, $super) {
    owner = owner === VOID ? null : owner;
    return $super === VOID ? this.g1z(owner, $completion) : $super.g1z.call(this, owner, $completion);
  }
  function unlock$default(owner, $super) {
    owner = owner === VOID ? null : owner;
    var tmp;
    if ($super === VOID) {
      this.i1z(owner);
      tmp = Unit_instance;
    } else {
      tmp = $super.i1z.call(this, owner);
    }
    return tmp;
  }
  initMetadataForInterface(Mutex, 'Mutex', VOID, VOID, VOID, [1]);
  initMetadataForClass(CancellableContinuationWithOwner, 'CancellableContinuationWithOwner', VOID, VOID, [CancellableContinuation, Waiter]);
  initMetadataForClass(SemaphoreImpl, 'SemaphoreImpl', VOID, VOID, VOID, [0]);
  initMetadataForClass(MutexImpl, 'MutexImpl', VOID, SemaphoreImpl, [SemaphoreImpl, Mutex], [1, 0]);
  initMetadataForClass(SemaphoreSegment, 'SemaphoreSegment', VOID, Segment);
  initMetadataForClass(UndispatchedCoroutine, 'UndispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForClass(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForObject(NodeDispatcher, 'NodeDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(MessageQueue, 'MessageQueue', VOID, VOID, [KtMutableList]);
  initMetadataForClass(ScheduledMessageQueue, 'ScheduledMessageQueue', VOID, MessageQueue);
  initMetadataForClass(WindowMessageQueue, 'WindowMessageQueue', VOID, MessageQueue);
  initMetadataForObject(Dispatchers, 'Dispatchers');
  initMetadataForClass(JsMainDispatcher, 'JsMainDispatcher', VOID, MainCoroutineDispatcher);
  initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
  initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
  initMetadataForObject(TaskContext, 'TaskContext');
  initMetadataForClass(ChildCancelledException, 'ChildCancelledException', ChildCancelledException, CancellationException);
  initMetadataForClass(SafeCollector, 'SafeCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(WorkaroundAtomicReference, 'WorkaroundAtomicReference');
  initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
  initMetadataForObject(SetTimeoutDispatcher, 'SetTimeoutDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(ClearTimeout, 'ClearTimeout', VOID, VOID, [CancelHandler, DisposableHandle]);
  initMetadataForClass(WindowClearTimeout, 'WindowClearTimeout', VOID, ClearTimeout);
  initMetadataForClass(WindowDispatcher, 'WindowDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.sv(parentContext.a9(Key_instance_3));
    }
    this.vv_1 = parentContext.lf(this);
  }
  protoOf(AbstractCoroutine).t8 = function () {
    return this.vv_1;
  };
  protoOf(AbstractCoroutine).wv = function () {
    return this.vv_1;
  };
  protoOf(AbstractCoroutine).xv = function () {
    return protoOf(JobSupport).xv.call(this);
  };
  protoOf(AbstractCoroutine).yv = function (value) {
  };
  protoOf(AbstractCoroutine).zv = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).aw = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).bw = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.zv(state.cw_1, state.ew());
    } else {
      this.yv((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).y8 = function (result) {
    var state = this.fw(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.gw(state);
  };
  protoOf(AbstractCoroutine).gw = function (state) {
    return this.hw(state);
  };
  protoOf(AbstractCoroutine).iw = function (exception) {
    handleCoroutineException(this.vv_1, exception);
  };
  protoOf(AbstractCoroutine).jw = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.vv_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).jw.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).jw.call(this);
  };
  protoOf(AbstractCoroutine).kw = function (start, receiver, block) {
    start.nw(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.vx() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.kw(start, coroutine, block);
    return coroutine;
  }
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.vx() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.kw(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    $l$block_0: {
      var oldContext = $completion.t8();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$1 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.a9(Key_instance), oldContext.a9(Key_instance))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        coroutine_0.vv_1;
        tmp$ret$1 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$1 = coroutine_1.by();
    }
    return tmp$ret$1;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).sx = function (exception) {
    handleCoroutineException(this.vv_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.iy_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).vw = function () {
    startCoroutineCancellable_0(this.iy_1, this);
  };
  function $awaitCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ry_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.ry_1.ux(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : !(suspendResult == null)) ? suspendResult : THROW_CCE();
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
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).vy = function ($completion) {
    var tmp = new $awaitCOROUTINE$(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.zy_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).vw = function () {
    startCoroutineCancellable_0(this.zy_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.ay_1;
    while (true) {
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.ay_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.ay_1;
    while (true) {
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.ay_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.ay_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).hw = function (state) {
    this.gw(state);
  };
  protoOf(DispatchedCoroutine).gw = function (state) {
    if (tryResume(this))
      return Unit_instance;
    resumeCancellableWith(intercepted(this.dz_1), recoverResult(state, this.dz_1));
  };
  protoOf(DispatchedCoroutine).by = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.rw());
    if (state instanceof CompletedExceptionally)
      throw state.cw_1;
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  function CancellableContinuation() {
  }
  function invokeOnCancellation(_this__u8e3s4, handler) {
    var tmp;
    if (_this__u8e3s4 instanceof CancellableContinuationImpl) {
      _this__u8e3s4.rz(handler);
      tmp = Unit_instance;
    } else {
      throw UnsupportedOperationException_init_$Create$('third-party implementation of CancellableContinuation is not supported');
    }
    return tmp;
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    return invokeOnCancellation(_this__u8e3s4, new DisposeOnCancel(handle));
  }
  function DisposeOnCancel(handle) {
    this.sz_1 = handle;
  }
  protoOf(DisposeOnCancel).tz = function (cause) {
    return this.sz_1.uz();
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + toString(this.sz_1) + ']';
  };
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, 1);
    }
    var tmp0_safe_receiver = delegate.b10();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver.c10()) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, 2);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_parentHandle__f8dcex($this) {
    return $this.qz_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.rw();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.e10_1)) {
      var tmp_0 = $this.mz_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).d10();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.mz_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.f10(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.oz_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    if (!!(index === 536870911)) {
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      segment.k10(index, cause, $this.t8());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.t8(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.oz_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (1 << 29) + (cur & 536870911) | 0;
          if ($this.oz_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.oz_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (2 << 29) + (cur & 536870911) | 0;
          if ($this.oz_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.t8().a9(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var handle = invokeOnCompletion(parent, true, VOID, new ChildContinuation($this));
    $this.qz_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.pz_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.pz_1.atomicfu$compareAndSet(state, handler))
          return Unit_instance;
      } else {
        var tmp;
        if (!(state == null) ? isInterface(state, CancelHandler) : false) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.t10()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.cw_1;
              if (isInterface(handler, CancelHandler)) {
                $this.q10(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.m10_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              if (state.r10()) {
                $this.q10(handler, state.p10_1);
                return Unit_instance;
              }
              var update = state.s10(VOID, handler);
              if ($this.pz_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.pz_1.atomicfu$compareAndSet(state, update_0))
                return Unit_instance;
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_instance;
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) && idempotent == null) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = isInterface(state, CancelHandler);
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, isInterface(state, CancelHandler) ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.pz_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false) {
          var update = resumedState($this, tmp0, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.pz_1.atomicfu$compareAndSet(tmp0, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_instance;
        } else {
          if (tmp0 instanceof CancelledContinuation) {
            if (tmp0.y10()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                $this.u10(onCancellation, tmp0.cw_1);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.pz_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false) {
          var update = resumedState($this, tmp0, proposedUpdate, $this.e10_1, onCancellation, idempotent);
          if (!$this.pz_1.atomicfu$compareAndSet(tmp0, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp0 instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) && tmp0.o10_1 === idempotent) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.z10();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.mz_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.nz_1 = this.mz_1.t8();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$1 = (0 << 29) + 536870911 | 0;
    tmp.oz_1 = atomic$int$1(tmp$ret$1);
    this.pz_1 = atomic$ref$1(Active_instance);
    this.qz_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).a11 = function () {
    return this.mz_1;
  };
  protoOf(CancellableContinuationImpl).t8 = function () {
    return this.nz_1;
  };
  protoOf(CancellableContinuationImpl).rw = function () {
    return this.pz_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).sw = function () {
    var tmp = this.rw();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).b11 = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.sw()) {
      handle.uz();
      this.qz_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).c10 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.pz_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.o10_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.z10();
      return false;
    }
    var tmp_0 = this.oz_1;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    tmp_0.kotlinx$atomicfu$value = (0 << 29) + 536870911 | 0;
    this.pz_1.kotlinx$atomicfu$value = Active_instance;
    return true;
  };
  protoOf(CancellableContinuationImpl).c11 = function () {
    return this.rw();
  };
  protoOf(CancellableContinuationImpl).d11 = function (takenState, cause) {
    var this_0 = this.pz_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_instance;
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            if (!!state.r10()) {
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.s10(VOID, VOID, VOID, VOID, cause);
            if (this.pz_1.atomicfu$compareAndSet(state, update)) {
              state.e11(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.pz_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).gz = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.pz_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false))
          return false;
        var tmp;
        if (!(tmp0 == null) ? isInterface(tmp0, CancelHandler) : false) {
          tmp = true;
        } else {
          tmp = tmp0 instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this.pz_1.atomicfu$compareAndSet(tmp0, update)) {
          break $l$block;
        }
        if (isInterface(tmp0, CancelHandler)) {
          this.q10(tmp0, cause);
        } else {
          if (tmp0 instanceof Segment) {
            callSegmentOnCancellation(this, tmp0, cause);
          }
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.e10_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).f11 = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.gz(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).q10 = function (handler, cause) {
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      handler.tz(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.t8(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).u10 = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.t8(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).g11 = function (parent) {
    return parent.ww();
  };
  protoOf(CancellableContinuationImpl).by = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.h11();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.h11();
    }
    var state = this.rw();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.cw_1, this);
    if (get_isCancellableMode(this.e10_1)) {
      var job = this.t8().a9(Key_instance_3);
      if (!(job == null) && !job.xv()) {
        var cause = job.ww();
        this.d11(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.i11(state);
  };
  protoOf(CancellableContinuationImpl).h11 = function () {
    var tmp = this.mz_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j11(this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.z10();
    this.gz(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).y8 = function (result) {
    return resumeImpl$default(this, toState(result, this), this.e10_1);
  };
  protoOf(CancellableContinuationImpl).kz = function (value, onCancellation) {
    return resumeImpl(this, value, this.e10_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).k11 = function (segment, index) {
    var tmp0 = this.oz_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.index' call
        // Inline function 'kotlin.check' call
        if (!((cur & 536870911) === 536870911)) {
          var message = 'invokeOnCancellation should be called at most once';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlinx.coroutines.decision' call
        // Inline function 'kotlinx.coroutines.decisionAndIndex' call
        var upd = (cur >> 29 << 29) + index | 0;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    invokeOnCancellationImpl(this, segment);
  };
  protoOf(CancellableContinuationImpl).iz = function (handler) {
    return invokeOnCancellation(this, new UserSupplied(handler));
  };
  protoOf(CancellableContinuationImpl).rz = function (handler) {
    return invokeOnCancellationImpl(this, handler);
  };
  protoOf(CancellableContinuationImpl).z10 = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.uz();
    this.qz_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).ez = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).fz = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.e10_1);
  };
  protoOf(CancellableContinuationImpl).jz = function (_this__u8e3s4, value) {
    var tmp = this.mz_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.wz_1) === _this__u8e3s4) {
      tmp_0 = 4;
    } else {
      tmp_0 = this.e10_1;
    }
    resumeImpl$default(this, value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).i11 = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.l10_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : !(state == null)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).l11 = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).l11.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.mz_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.m11() + '(' + toDebugString(this.mz_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).m11 = function () {
    return 'CancellableContinuation';
  };
  function Active() {
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    return Active_instance;
  }
  function NotCompleted() {
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.l10_1 = result;
    this.m10_1 = cancelHandler;
    this.n10_1 = onCancellation;
    this.o10_1 = idempotentResume;
    this.p10_1 = cancelCause;
  }
  protoOf(CompletedContinuation).r10 = function () {
    return !(this.p10_1 == null);
  };
  protoOf(CompletedContinuation).e11 = function (cont, cause) {
    var tmp0_safe_receiver = this.m10_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.q10(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.n10_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.u10(tmp1_safe_receiver, cause);
    }
  };
  protoOf(CompletedContinuation).p11 = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).s10 = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.l10_1 : result;
    cancelHandler = cancelHandler === VOID ? this.m10_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.n10_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.o10_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.p10_1 : cancelCause;
    return $super === VOID ? this.p11(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.p11.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.l10_1) + ', cancelHandler=' + toString_0(this.m10_1) + ', onCancellation=' + toString_0(this.n10_1) + ', idempotentResume=' + toString_0(this.o10_1) + ', cancelCause=' + toString_0(this.p10_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.l10_1 == null ? 0 : hashCode(this.l10_1);
    result = imul(result, 31) + (this.m10_1 == null ? 0 : hashCode(this.m10_1)) | 0;
    result = imul(result, 31) + (this.n10_1 == null ? 0 : hashCode(this.n10_1)) | 0;
    result = imul(result, 31) + (this.o10_1 == null ? 0 : hashCode(this.o10_1)) | 0;
    result = imul(result, 31) + (this.p10_1 == null ? 0 : hashCode(this.p10_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.l10_1, tmp0_other_with_cast.l10_1))
      return false;
    if (!equals(this.m10_1, tmp0_other_with_cast.m10_1))
      return false;
    if (!equals(this.n10_1, tmp0_other_with_cast.n10_1))
      return false;
    if (!equals(this.o10_1, tmp0_other_with_cast.o10_1))
      return false;
    if (!equals(this.p10_1, tmp0_other_with_cast.p10_1))
      return false;
    return true;
  };
  function UserSupplied(handler) {
    this.q11_1 = handler;
  }
  protoOf(UserSupplied).tz = function (cause) {
    this.q11_1(cause);
  };
  protoOf(UserSupplied).toString = function () {
    return 'CancelHandler.UserSupplied[' + get_classSimpleName(this.q11_1) + '@' + get_hexAddress(this) + ']';
  };
  function CancelHandler() {
  }
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$_0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z11_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$_0).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.z11_1.ux(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : !(suspendResult == null)) ? suspendResult : THROW_CCE();
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.sv(parent);
  }
  protoOf(CompletableDeferredImpl).ex = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).vy = function ($completion) {
    var tmp = new $awaitCOROUTINE$_0(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(CompletableDeferredImpl).c12 = function (value) {
    return this.d12(value);
  };
  function UserSupplied_0(handler) {
    this.e12_1 = handler;
  }
  protoOf(UserSupplied_0).tz = function (cause) {
    this.e12_1(cause);
  };
  protoOf(UserSupplied_0).toString = function () {
    return 'InternalCompletionHandler.UserSupplied[' + get_classSimpleName(this.e12_1) + '@' + get_hexAddress(this) + ']';
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.cw_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = (state == null ? true : !(state == null)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(value);
    }
    return tmp;
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.cw_1 = cause;
    this.dw_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).ew = function () {
    return this.dw_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).t10 = function () {
    return this.dw_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.cw_1.toString() + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this.x10_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).y10 = function () {
    return this.x10_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.fold' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    // Inline function 'kotlin.fold' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      tmp = !(onCancellation == null) ? new CompletedWithCancellation(it, onCancellation) : it;
    } else {
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.f12_1 = result;
    this.g12_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString_0(this.f12_1) + ', onCancellation=' + toString(this.g12_1) + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.f12_1 == null ? 0 : hashCode(this.f12_1);
    result = imul(result, 31) + hashCode(this.g12_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.f12_1, tmp0_other_with_cast.f12_1))
      return false;
    if (!equals(this.g12_1, tmp0_other_with_cast.g12_1))
      return false;
    return true;
  };
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).i12 = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).k12 = function (context, block) {
    return this.j12(context, block);
  };
  protoOf(CoroutineDispatcher).b9 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).c9 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.l12();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.a9(Key_instance_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        tmp0_safe_receiver.m12(context, exception);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(exception, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, exception);
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    var this_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    addSuppressed(this_0, originalException);
    return this_0;
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function CoroutineScope() {
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var coroutine = new ScopeCoroutine($completion.t8(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function cancel(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.wv().a9(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Scope cannot be cancelled because it does not have a job: ' + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.fx(cause);
  }
  function get_isActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.wv().a9(Key_instance_3);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xv();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.a9(Key_instance_3) == null) ? context : context.lf(Job_0()));
  }
  function MainScope() {
    return new ContextScope(SupervisorJob().lf(Dispatchers_getInstance().r12()));
  }
  function GlobalScope() {
  }
  protoOf(GlobalScope).wv = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    return GlobalScope_instance;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).nw = function (block, receiver, completion) {
    var tmp;
    switch (this.m2_1) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).vx = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function delay(timeMillis, $completion) {
    if (compare(timeMillis, new Long(0, 0)) <= 0)
      return Unit_instance;
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.b11();
    if (compare(timeMillis, new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.t8()).s12(timeMillis, cancellable);
    }
    return cancellable.by();
  }
  function awaitCancellation($completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.b11();
    return cancellable.by();
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.a9(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function DelayWithTimeoutDiagnostics() {
  }
  function delay_0(duration, $completion) {
    return delay(toDelayMillis(duration), $completion);
  }
  function toDelayMillis(_this__u8e3s4) {
    var tmp;
    switch (Duration__isPositive_impl_tvkkt2(_this__u8e3s4)) {
      case true:
        Companion_getInstance();
        // Inline function 'kotlin.time.Companion.nanoseconds' call

        var this_0 = new Long(999999, 0);
        var tmp$ret$0 = toDuration(this_0, DurationUnit_NANOSECONDS_getInstance());
        tmp = _Duration___get_inWholeMilliseconds__impl__msfiry(Duration__plus_impl_yu9v8f(_this__u8e3s4, tmp$ret$0));
        break;
      case false:
        tmp = new Long(0, 0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.w12_1 = new Long(0, 0);
    this.x12_1 = false;
    this.y12_1 = null;
  }
  protoOf(EventLoop).z12 = function () {
    var tmp0_elvis_lhs = this.y12_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.pd();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.n11();
    return true;
  };
  protoOf(EventLoop).a13 = function (task) {
    var tmp0_elvis_lhs = this.y12_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      this.y12_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.nd(task);
  };
  protoOf(EventLoop).b13 = function () {
    return compare(this.w12_1, delta(this, true)) >= 0;
  };
  protoOf(EventLoop).c13 = function () {
    var tmp0_safe_receiver = this.y12_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).d13 = function (unconfined) {
    this.w12_1 = add(this.w12_1, delta(this, unconfined));
    if (!unconfined)
      this.x12_1 = true;
  };
  protoOf(EventLoop).e13 = function (unconfined) {
    this.w12_1 = subtract(this.w12_1, delta(this, unconfined));
    if (compare(this.w12_1, new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.x12_1) {
      this.f13();
    }
  };
  protoOf(EventLoop).f13 = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.g13_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).h13 = function () {
    var tmp0_elvis_lhs = this.g13_1.j13();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      ThreadLocalEventLoop_getInstance().g13_1.k13(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function Job() {
  }
  function cancelAndJoin(_this__u8e3s4, $completion) {
    _this__u8e3s4.gx();
    return _this__u8e3s4.cx($completion);
  }
  function DisposableHandle() {
  }
  function get_isActive_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.a9(Key_instance_3);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xv();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.a9(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Current context doesn't contain Job in it: " + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.fx(CancellationException_init_$Create$_0(message, cause));
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function cancel_1(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_safe_receiver = _this__u8e3s4.a9(Key_instance_3);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.fx(cause);
    }
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.a9(Key_instance_3);
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).qw = function () {
    return null;
  };
  protoOf(NonDisposableHandle).uz = function () {
  };
  protoOf(NonDisposableHandle).jx = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function invokeOnCompletion(_this__u8e3s4, onCancelling, invokeImmediately, handler) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    var tmp;
    if (_this__u8e3s4 instanceof JobSupport) {
      tmp = _this__u8e3s4.bx(onCancelling, invokeImmediately, handler);
    } else {
      tmp = _this__u8e3s4.ax(onCancelling, invokeImmediately, InternalCompletionHandler$invoke$ref(handler));
    }
    return tmp;
  }
  function ChildHandle() {
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.xv())
      throw _this__u8e3s4.ww();
  }
  function ParentJob() {
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    return invokeOnCompletion(_this__u8e3s4, VOID, VOID, new DisposeOnCompletion(handle));
  }
  function InternalCompletionHandler$invoke$ref(p0) {
    var l = function (_this__u8e3s4) {
      p0.tz(_this__u8e3s4);
      return Unit_instance;
    };
    l.callableName = 'invoke';
    return l;
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l13_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.q13_1 = child;
  }
  protoOf(ChildContinuation).tz = function (cause) {
    this.q13_1.f11(this.q13_1.g11(this.v13()));
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.h14_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.h14_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cw_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    wasCancelling = state.i14();
    var exceptions = state.j14(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.sx(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).t10();
      }
    }
    if (!wasCancelling) {
      $this.px(finalException);
    }
    $this.bw(finalState);
    var casSuccess = $this.qv_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.n()) {
      if (state.i14()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.aw() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = exceptions.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.m(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = exceptions.i();
        while (_iterator__ex2g4s_0.j()) {
          var element_0 = _iterator__ex2g4s_0.k();
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.l() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.l());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.i();
    while (tmp0_iterator.j()) {
      var exception = tmp0_iterator.k();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.h(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        addSuppressed(rootCause, unwrapped);
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.qv_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.px(null);
    $this.bw(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.pw();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      tmp0_safe_receiver.uz();
      $this.ow(NonDisposableHandle_instance);
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.cw_1;
    if (state instanceof JobNode) {
      try {
        state.tz(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.iw(new CompletionHandlerException('Exception in completion handler ' + toString(state) + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.w13();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion($this, tmp2_safe_receiver, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.px(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.x13_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        var node = cur;
        try {
          node.tz(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.x13_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.iw(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.qx())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.pw();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.jx(cause) || isCancellation;
  }
  function notifyCompletion($this, _this__u8e3s4, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.x13_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        var node = cur;
        try {
          node.tz(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.x13_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.iw(tmp0_safe_receiver_0);
    }
    return Unit_instance;
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.l14_1)
        return 0;
      if (!$this.qv_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.vw();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.qv_1.atomicfu$compareAndSet(state, state.k14_1))
          return -1;
        $this.vw();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_0 = tmp1_safe_receiver;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.u13_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      if (!($this.rw() === expect)) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.a14(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.l14_1 ? list : new InactiveNodeList(list);
    $this.qv_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.d14(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var list = state.x13_1;
    $this.qv_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.rw();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false))
        return false;
      if (startInternal($this, state) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.b11();
    disposeOnCancellation(cancellable, invokeOnCompletion($this, VOID, VOID, new ResumeOnCompletion(cancellable)));
    return cancellable.by();
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.rw();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.m14();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.aw() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).mx();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = $this.rw();
      $l$block: {
        if (tmp0 instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          if (tmp0.n14())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0.i14();
          if (!(cause == null) || !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0.o14(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = tmp0.p14();
          var tmp_0;
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            notifyCancelling($this, tmp0.e14_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0 == null) ? isInterface(tmp0, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0.xv()) {
              if (tryMakeCancelling($this, tmp0, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString_0(tmp0);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.w13();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var message = 'State should have list: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.qv_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.m14())
      return get_COMPLETING_ALREADY();
    finishing.q14(true);
    if (!(finishing === state)) {
      if (!$this.qv_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.i14();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      finishing.o14(tmp0_safe_receiver.cw_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.p14();
    var tmp_0;
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      notifyCancelling($this, list, tmp2_safe_receiver);
    }
    var child = firstChild($this, state);
    if (!(child == null) && tryWaitForChild($this, finishing, child, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js($this, _this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cw_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.w13();
      tmp = tmp0_safe_receiver == null ? null : nextChild($this, tmp0_safe_receiver);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var handle = invokeOnCompletion(child_0.v14_1, VOID, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild($this_0, child_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = nextChild_0;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild($this, lastChild);
    if (!(waitChild == null) && tryWaitForChild($this, state, waitChild, proposedUpdate))
      return Unit_instance;
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.hw(finalState);
  }
  function nextChild($this, _this__u8e3s4) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (!cur.z13_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      cur = cur.y13_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      cur = cur.x13_1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (cur.z13_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.i14() ? 'Cancelling' : state.m14() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.xv() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    SynchronizedObject.call(this);
    this.e14_1 = list;
    this.f14_1 = atomic$boolean$1(isCompleting);
    this.g14_1 = atomic$ref$1(rootCause);
    this.h14_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).w13 = function () {
    return this.e14_1;
  };
  protoOf(Finishing).q14 = function (value) {
    this.f14_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).m14 = function () {
    return this.f14_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).w14 = function (value) {
    this.g14_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).p14 = function () {
    return this.g14_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).n14 = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).i14 = function () {
    return !(this.p14() == null);
  };
  protoOf(Finishing).xv = function () {
    return this.p14() == null;
  };
  protoOf(Finishing).j14 = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        this_0.h(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.p14();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      list.j2(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.h(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).o14 = function (exception) {
    var rootCause = this.p14();
    if (rootCause == null) {
      this.w14(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        this_0.h(eh);
        this_0.h(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).h(exception);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.i14() + ', completing=' + this.m14() + ', rootCause=' + toString_0(this.p14()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.e14_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.b15_1 = parent;
    this.c15_1 = state;
    this.d15_1 = child;
    this.e15_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).tz = function (cause) {
    continueCompleting(this.b15_1, this.c15_1, this.d15_1, this.e15_1);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, 1);
    this.l15_1 = job;
  }
  protoOf(AwaitContinuation).g11 = function (parent) {
    var state = this.l15_1.rw();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.p14();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.cw_1;
    return parent.ww();
  };
  protoOf(AwaitContinuation).m11 = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    var cont = new AwaitContinuation(intercepted($completion), $this);
    cont.b11();
    disposeOnCancellation(cont, invokeOnCompletion($this, VOID, VOID, new ResumeAwaitOnCompletion(cont)));
    return cont.by();
  }
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.u15_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).z15 = function ($this$sequence, $completion) {
    var tmp = this.a16($this$sequence, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).f9 = function (p1, $completion) {
    return this.z15(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 8;
            var state = this.u15_1.rw();
            if (state instanceof ChildHandleNode) {
              this.n8_1 = 6;
              suspendResult = this.v15_1.le(state.v14_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (!(state == null) ? isInterface(state, Incomplete) : false) {
                var tmp0_safe_receiver = state.w13();
                if (tmp0_safe_receiver == null) {
                  this.w15_1 = null;
                  this.n8_1 = 5;
                  continue $sm;
                } else {
                  this.y15_1 = tmp0_safe_receiver;
                  this.x15_1 = this.y15_1.x13_1;
                  this.n8_1 = 1;
                  continue $sm;
                }
              } else {
                this.n8_1 = 7;
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.x15_1, this.y15_1)) {
              this.n8_1 = 4;
              continue $sm;
            }

            var tmp_0 = this.x15_1;
            if (tmp_0 instanceof ChildHandleNode) {
              var it = this.x15_1;
              this.n8_1 = 2;
              suspendResult = this.v15_1.le(it.v14_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 3;
              continue $sm;
            }

          case 2:
            this.n8_1 = 3;
            continue $sm;
          case 3:
            this.x15_1 = this.x15_1.x13_1;
            this.n8_1 = 1;
            continue $sm;
          case 4:
            var tmp_1 = this;
            tmp_1.w15_1 = Unit_instance;
            this.n8_1 = 5;
            continue $sm;
          case 5:
            this.n8_1 = 7;
            continue $sm;
          case 6:
            this.n8_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 8) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).a16 = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.u15_1, completion);
    i.v15_1 = $this$sequence;
    return i;
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.z15($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this.qv_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.rv_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).u1 = function () {
    return Key_instance_3;
  };
  protoOf(JobSupport).ow = function (value) {
    this.rv_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).pw = function () {
    return this.rv_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).qw = function () {
    var tmp0_safe_receiver = this.pw();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qw();
  };
  protoOf(JobSupport).sv = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.ow(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.uw();
    var handle = parent.ox(this);
    this.ow(handle);
    if (this.sw()) {
      handle.uz();
      this.ow(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).rw = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.qv_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state instanceof OpDescriptor))
        return state;
      state.b16(this);
    }
  };
  protoOf(JobSupport).xv = function () {
    var state = this.rw();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.xv();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).sw = function () {
    var tmp = this.rw();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).tw = function () {
    var state = this.rw();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.i14();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).uw = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.rw();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).vw = function () {
  };
  protoOf(JobSupport).ww = function () {
    var state = this.rw();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.p14();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.xw(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.yw(state.cw_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).xw = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.aw() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).yw = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.xw(_this__u8e3s4, message) : $super.xw.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).zw = function (handler) {
    return this.bx(false, true, new UserSupplied_0(handler));
  };
  protoOf(JobSupport).ax = function (onCancelling, invokeImmediately, handler) {
    return this.bx(onCancelling, invokeImmediately, new UserSupplied_0(handler));
  };
  protoOf(JobSupport).bx = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.rw();
      $l$block: {
        if (tmp0 instanceof Empty) {
          if (tmp0.l14_1) {
            if (this.qv_1.atomicfu$compareAndSet(tmp0, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0);
          }
        } else {
          if (!(tmp0 == null) ? isInterface(tmp0, Incomplete) : false) {
            var list = tmp0.w13();
            if (list == null) {
              promoteSingleToNodeList(this, tmp0 instanceof JobNode ? tmp0 : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_instance;
              var tmp;
              if (onCancelling) {
                tmp = tmp0 instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
                rootCause = tmp0.p14();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = true;
                } else {
                  var tmp_1;
                  if (handler instanceof ChildHandleNode) {
                    tmp_1 = !tmp0.m14();
                  } else {
                    tmp_1 = false;
                  }
                  tmp_0 = tmp_1;
                }
                if (tmp_0) {
                  if (!addLastAtomic(this, tmp0, list, node)) {
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                }
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  handler.tz(rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp0, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp0 instanceof CompletedExceptionally ? tmp0 : null;
              handler.tz(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.cw_1);
            }
            return NonDisposableHandle_instance;
          }
        }
      }
    }
  };
  protoOf(JobSupport).cx = function ($completion) {
    if (!joinInternal(this)) {
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp$ret$0 = $completion.t8();
      ensureActive(tmp$ret$0);
      return Unit_instance;
    }
    return joinSuspend(this, $completion);
  };
  protoOf(JobSupport).dx = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.rw();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.qv_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.w13() == null)) {
            node.b14();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).ex = function () {
    return false;
  };
  protoOf(JobSupport).fx = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.aw() : null, null, this);
    } else {
      tmp = cause;
    }
    this.hx(tmp);
  };
  protoOf(JobSupport).aw = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).hx = function (cause) {
    this.lx(cause);
  };
  protoOf(JobSupport).ix = function (parentJob) {
    this.lx(parentJob);
  };
  protoOf(JobSupport).jx = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.lx(cause) && this.rx();
  };
  protoOf(JobSupport).kx = function (cause) {
    return this.lx(cause);
  };
  protoOf(JobSupport).lx = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.ex()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.hw(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).mx = function () {
    var state = this.rw();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.p14();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.cw_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var message = 'Cannot be cancelling child in this state: ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).d12 = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.rw();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp0, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.hw(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).fw = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.rw();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp0, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this.toString() + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(this, proposedUpdate));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).nx = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).ox = function (child) {
    var tmp = invokeOnCompletion(this, true, VOID, new ChildHandleNode(child));
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).iw = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).px = function (cause) {
  };
  protoOf(JobSupport).qx = function () {
    return false;
  };
  protoOf(JobSupport).rx = function () {
    return true;
  };
  protoOf(JobSupport).sx = function (exception) {
    return false;
  };
  protoOf(JobSupport).bw = function (state) {
  };
  protoOf(JobSupport).hw = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.tx() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).tx = function () {
    return this.jw() + '{' + stateString(this, this.rw()) + '}';
  };
  protoOf(JobSupport).jw = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).ux = function ($completion) {
    $l$loop: while (true) {
      var state = this.rw();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          throw state.cw_1;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $completion);
  };
  function handlesExceptionF($this) {
    var tmp = $this.pw();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v13();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.rx())
        return true;
      var tmp_1 = parentJob.pw();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.v13();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.sv(parent);
    this.e16_1 = handlesExceptionF(this);
  }
  protoOf(JobImpl).ex = function () {
    return true;
  };
  protoOf(JobImpl).rx = function () {
    return this.e16_1;
  };
  protoOf(JobImpl).f16 = function (exception) {
    return this.d12(new CompletedExceptionally(exception));
  };
  function Empty(isActive) {
    this.l14_1 = isActive;
  }
  protoOf(Empty).xv = function () {
    return this.l14_1;
  };
  protoOf(Empty).w13 = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.l14_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function IncompleteStateBox(state) {
    this.l13_1 = state;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobNode() {
    LinkedListNode.call(this);
  }
  protoOf(JobNode).v13 = function () {
    var tmp = this.u13_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).xv = function () {
    return true;
  };
  protoOf(JobNode).w13 = function () {
    return null;
  };
  protoOf(JobNode).uz = function () {
    return this.v13().dx(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.v13()) + ']';
  };
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).xv = function () {
    return true;
  };
  protoOf(NodeList).w13 = function () {
    return this;
  };
  protoOf(NodeList).j16 = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.u7('List{');
    this_0.u7(state);
    this_0.u7('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.x13_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        var node = cur;
        if (first)
          first = false;
        else {
          this_0.u7(', ');
        }
        this_0.t7(node);
      }
      cur = cur.x13_1;
    }
    this_0.u7(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.j16('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function InactiveNodeList(list) {
    this.k14_1 = list;
  }
  protoOf(InactiveNodeList).w13 = function () {
    return this.k14_1;
  };
  protoOf(InactiveNodeList).xv = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.k14_1.j16('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.v14_1 = childJob;
  }
  protoOf(ChildHandleNode).qw = function () {
    return this.v13();
  };
  protoOf(ChildHandleNode).tz = function (cause) {
    return this.v14_1.ix(this.v13());
  };
  protoOf(ChildHandleNode).jx = function (cause) {
    return this.v13().jx(cause);
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.r16_1 = handler;
    this.s16_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).tz = function (cause) {
    if (this.s16_1.atomicfu$compareAndSet(0, 1)) {
      this.r16_1.tz(cause);
    }
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.x16_1 = handler;
  }
  protoOf(InvokeOnCompletion).tz = function (cause) {
    return this.x16_1.tz(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.c17_1 = continuation;
  }
  protoOf(ResumeOnCompletion).tz = function (cause) {
    // Inline function 'kotlin.coroutines.resume' call
    var this_0 = this.c17_1;
    // Inline function 'kotlin.Companion.success' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
    this_0.y8(tmp$ret$0);
    return Unit_instance;
  };
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.h17_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).tz = function (cause) {
    var state = this.v13().rw();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp0 = this.h17_1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = state.cw_1;
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.y8(tmp$ret$1);
    } else {
      var tmp0_0 = this.h17_1;
      var tmp = unboxState(state);
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
      tmp0_0.y8(tmp$ret$3);
    }
  };
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.m17_1 = handle;
  }
  protoOf(DisposeOnCompletion).tz = function (cause) {
    return this.m17_1.uz();
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.p17();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).p17 = function () {
    var main = Dispatchers_getInstance().r12();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.o17();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function supervisorScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var coroutine = new SupervisorCoroutine($completion.t8(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(SupervisorCoroutine).jx = function (cause) {
    return false;
  };
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).jx = function (cause) {
    return false;
  };
  function withTimeoutOrNull(timeMillis, block, $completion) {
    var tmp = new $withTimeoutOrNullCOROUTINE$(timeMillis, block, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.i18_1 = coroutine;
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.t8(), uCont);
    this.n18_1 = time;
  }
  protoOf(TimeoutCoroutine).n11 = function () {
    this.kx(TimeoutCancellationException_0(this.n18_1, get_delay(this.vv_1), this));
  };
  protoOf(TimeoutCoroutine).jw = function () {
    return protoOf(ScopeCoroutine).jw.call(this) + '(timeMillis=' + this.n18_1.toString() + ')';
  };
  function setupTimeout(coroutine, block) {
    var cont = coroutine.dz_1;
    var context = cont.t8();
    disposeOnCompletion(coroutine, get_delay(context).t12(coroutine.n18_1, coroutine, coroutine.vv_1));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCancellationException_0(time, delay, coroutine) {
    var tmp0_safe_receiver = isInterface(delay, DelayWithTimeoutDiagnostics) ? delay : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.time.Companion.milliseconds' call
      Companion_getInstance();
      var tmp$ret$0 = toDuration(time, DurationUnit_MILLISECONDS_getInstance());
      tmp = tmp0_safe_receiver.u12(tmp$ret$0);
    }
    var tmp1_elvis_lhs = tmp;
    var message = tmp1_elvis_lhs == null ? 'Timed out waiting for ' + time.toString() + ' ms' : tmp1_elvis_lhs;
    return new TimeoutCancellationException(message, coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f18_1 = timeMillis;
    this.g18_1 = block;
  }
  protoOf($withTimeoutOrNullCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            if (compare(this.f18_1, new Long(0, 0)) <= 0)
              return null;
            this.h18_1 = {_v: null};
            this.o8_1 = 2;
            this.n8_1 = 1;
            var timeoutCoroutine = new TimeoutCoroutine(this.f18_1, this);
            this.h18_1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.g18_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.o8_1 = 3;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.q8_1;
              if (e.i18_1 === this.h18_1._v) {
                return null;
              }
              throw e;
            } else {
              throw this.q8_1;
            }

          case 3:
            throw this.q8_1;
          case 4:
            this.o8_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o8_1 === 3) {
          throw e_0;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e_0;
        }
      }
     while (true);
  };
  function Key_3() {
  }
  var Key_instance_4;
  function Key_getInstance_3() {
    return Key_instance_4;
  }
  function YieldContext() {
    AbstractCoroutineContextElement.call(this, Key_instance_4);
    this.p18_1 = false;
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).i12 = function (context) {
    return false;
  };
  protoOf(Unconfined).j12 = function (context, block) {
    var yieldContext = context.a9(Key_instance_4);
    if (!(yieldContext == null)) {
      yieldContext.p18_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Waiter() {
  }
  function yield_0($completion) {
    var tmp$ret$0;
    $l$block_0: {
      var context = $completion.t8();
      ensureActive(context);
      var tmp = intercepted($completion);
      var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var cont = tmp_0;
      if (cont.wz_1.i12(context)) {
        cont.r18(context, Unit_instance);
      } else {
        var yieldContext = new YieldContext();
        cont.r18(context.lf(yieldContext), Unit_instance);
        if (yieldContext.p18_1) {
          tmp$ret$0 = yieldUndispatched(cont) ? get_COROUTINE_SUSPENDED() : Unit_instance;
          break $l$block_0;
        }
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  }
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_instance;
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function get_NULL_SEGMENT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NULL_SEGMENT;
  }
  var NULL_SEGMENT;
  function get_SEGMENT_SIZE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  function get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  }
  var EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  function get_BUFFERED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return BUFFERED;
  }
  var BUFFERED;
  function get_IN_BUFFER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return IN_BUFFER;
  }
  var IN_BUFFER;
  function get_RESUMING_BY_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_RCV;
  }
  var RESUMING_BY_RCV;
  function get_RESUMING_BY_EB() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_EB;
  }
  var RESUMING_BY_EB;
  function get_POISONED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return POISONED;
  }
  var POISONED;
  function get_DONE_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return DONE_RCV;
  }
  var DONE_RCV;
  function get_INTERRUPTED_SEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_SEND;
  }
  var INTERRUPTED_SEND;
  function get_INTERRUPTED_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_RCV;
  }
  var INTERRUPTED_RCV;
  function get_CHANNEL_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CHANNEL_CLOSED;
  }
  var CHANNEL_CLOSED;
  function get_SUSPEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND;
  }
  var SUSPEND;
  function get_SUSPEND_NO_WAITER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND_NO_WAITER;
  }
  var SUSPEND_NO_WAITER;
  function get_FAILED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return FAILED;
  }
  var FAILED;
  function get_NO_RECEIVE_RESULT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_RECEIVE_RESULT;
  }
  var NO_RECEIVE_RESULT;
  function get_CLOSE_HANDLER_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_CLOSED;
  }
  var CLOSE_HANDLER_CLOSED;
  function get_CLOSE_HANDLER_INVOKED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_INVOKED;
  }
  var CLOSE_HANDLER_INVOKED;
  function get_NO_CLOSE_CAUSE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_CLOSE_CAUSE;
  }
  var NO_CLOSE_CAUSE;
  function setElementLazy($this, index, value) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    $this.x18_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value = value;
  }
  function ChannelSegment(id, prev, channel, pointers) {
    Segment.call(this, id, prev, pointers);
    this.w18_1 = channel;
    this.x18_1 = atomicfu$AtomicRefArray$ofNulls(imul(get_SEGMENT_SIZE(), 2));
  }
  protoOf(ChannelSegment).y18 = function () {
    return ensureNotNull(this.w18_1);
  };
  protoOf(ChannelSegment).z18 = function () {
    return get_SEGMENT_SIZE();
  };
  protoOf(ChannelSegment).a19 = function (index, element) {
    setElementLazy(this, index, element);
  };
  protoOf(ChannelSegment).b19 = function (index) {
    var tmp = this.x18_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ChannelSegment).c19 = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.b19(index);
    this.d19(index);
    return this_0;
  };
  protoOf(ChannelSegment).d19 = function (index) {
    setElementLazy(this, index, null);
  };
  protoOf(ChannelSegment).e19 = function (index) {
    return this.x18_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).f19 = function (index, value) {
    this.x18_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value = value;
  };
  protoOf(ChannelSegment).g19 = function (index, from, to) {
    return this.x18_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(from, to);
  };
  protoOf(ChannelSegment).h19 = function (index, update) {
    return this.x18_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$getAndSet(update);
  };
  protoOf(ChannelSegment).k10 = function (index, cause, context) {
    var isSender = index >= get_SEGMENT_SIZE();
    var index_0 = isSender ? index - get_SEGMENT_SIZE() | 0 : index;
    var element = this.b19(index_0);
    $l$loop: while (true) {
      var cur = this.e19(index_0);
      var tmp;
      if (!(cur == null) ? isInterface(cur, Waiter) : false) {
        tmp = true;
      } else {
        tmp = cur instanceof WaiterEB;
      }
      if (tmp) {
        var update = isSender ? get_INTERRUPTED_SEND() : get_INTERRUPTED_RCV();
        if (this.g19(index_0, cur, update)) {
          this.d19(index_0);
          this.u19(index_0, !isSender);
          if (isSender) {
            var tmp0_safe_receiver = this.y18().j19_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp0_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        }
      } else {
        if (cur === get_INTERRUPTED_SEND() || cur === get_INTERRUPTED_RCV()) {
          this.d19(index_0);
          if (isSender) {
            var tmp1_safe_receiver = this.y18().j19_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp1_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        } else {
          if (cur === get_RESUMING_BY_EB() || cur === get_RESUMING_BY_RCV())
            continue $l$loop;
          else {
            if (cur === get_DONE_RCV() || cur === get_BUFFERED())
              return Unit_instance;
            else {
              if (cur === get_CHANNEL_CLOSED())
                return Unit_instance;
              else {
                // Inline function 'kotlin.error' call
                var message = 'unexpected state: ' + toString_0(cur);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  };
  protoOf(ChannelSegment).u19 = function (index, receiver) {
    if (receiver) {
      var tmp = this.y18();
      var tmp0 = this.i10_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      // Inline function 'kotlin.Long.plus' call
      var this_0 = multiply(tmp0, fromInt(other));
      var tmp$ret$1 = add(this_0, fromInt(index));
      tmp.v19(tmp$ret$1);
    }
    this.w19();
  };
  function onClosedHasNext($this) {
    $this.i1a_1 = get_CHANNEL_CLOSED();
    var tmp0_elvis_lhs = $this.k1a_1.l1a();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var cause = tmp;
    throw recoverStackTrace_0(cause);
  }
  function hasNextOnNoWaiterSuspend($this, segment, index, r, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      $this.j1a_1 = cancellable;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var this_0 = $this.k1a_1;
      var updCellResult = updateCellReceive(this_0, segment, index, r, $this);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension(this_0, $this, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (compare(r, this_0.m1a()) < 0) {
          segment.g1a();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = this_0.p19_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if (this_0.n1a()) {
              onClosedHasNextNoWaiterSuspend($this);
              break $l$block_0;
            }
            var r_0 = this_0.l19_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = divide(r_0, fromInt(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var tmp$ret$3 = modulo(r_0, fromInt(other_0));
            var i = convertToInt(tmp$ret$3);
            if (!equalsLong(segment_0.i10_1, id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this_0, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive(this_0, segment_0, i, r_0, $this);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp1_safe_receiver = (!($this == null) ? isInterface($this, Waiter) : false) ? $this : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this_0, tmp1_safe_receiver, segment_0, i);
              }
            } else if (updCellResult_0 === get_FAILED()) {
              if (compare(r_0, this_0.m1a()) < 0) {
                segment_0.g1a();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.g1a();
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              $this.i1a_1 = element;
              $this.j1a_1 = null;
              var tmp0_safe_receiver = $this.k1a_1.j19_1;
              cancellable.kz(true, tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cancellable.t8()));
            }
            break $l$block_0;
          }
        }
      } else {
        segment.g1a();
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        $this.i1a_1 = element_0;
        $this.j1a_1 = null;
        var tmp0_safe_receiver_0 = $this.k1a_1.j19_1;
        cancellable.kz(true, tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, element_0, cancellable.t8()));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.h11();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.by();
  }
  function onClosedHasNextNoWaiterSuspend($this) {
    var cont = ensureNotNull($this.j1a_1);
    $this.j1a_1 = null;
    $this.i1a_1 = get_CHANNEL_CLOSED();
    var cause = $this.k1a_1.l1a();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.y8(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.y8(tmp$ret$2);
    }
  }
  function $hasNextCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w1a_1 = _this__u8e3s4;
  }
  protoOf($hasNextCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 8;
            var tmp_0 = this;
            tmp_0.g1b_1 = this.w1a_1.k1a_1;
            var tmp_1 = this;
            tmp_1.f1b_1 = null;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.c1b_1 = this.g1b_1;
            this.d1b_1 = this.f1b_1;
            this.z1a_1 = this.c1b_1.p19_1.kotlinx$atomicfu$value;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.n8_1 = 9;
              continue $sm;
            }

            if (this.c1b_1.n1a()) {
              var tmp_2 = this;
              tmp_2.x1a_1 = onClosedHasNext(this.w1a_1);
              this.n8_1 = 10;
              continue $sm;
            } else {
              this.n8_1 = 3;
              continue $sm;
            }

          case 3:
            this.a1b_1 = this.c1b_1.l19_1.atomicfu$getAndIncrement$long();
            var tmp0 = this.a1b_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_3 = this;
            var tmp0_0 = this.a1b_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_3.b1b_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!equalsLong(this.z1a_1.i10_1, id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this.c1b_1, id, this.z1a_1);
              if (tmp0_elvis_lhs == null) {
                this.n8_1 = 2;
                var tmp_4 = this;
                continue $sm;
              } else {
                this.e1b_1 = tmp0_elvis_lhs;
                this.n8_1 = 4;
                continue $sm;
              }
            } else {
              this.n8_1 = 5;
              continue $sm;
            }

          case 4:
            this.z1a_1 = this.e1b_1;
            this.n8_1 = 5;
            continue $sm;
          case 5:
            var updCellResult = updateCellReceive(this.c1b_1, this.z1a_1, this.b1b_1, this.a1b_1, this.d1b_1);
            if (updCellResult === get_SUSPEND()) {
              var tmp_5 = this;
              var tmp_6 = this.d1b_1;
              var tmp1_safe_receiver = (!(tmp_6 == null) ? isInterface(tmp_6, Waiter) : false) ? tmp_6 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this.c1b_1, tmp1_safe_receiver, this.z1a_1, this.b1b_1);
              }
              this.z1a_1;
              this.b1b_1;
              this.a1b_1;
              var message = 'unreachable';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (updCellResult === get_FAILED()) {
                if (compare(this.a1b_1, this.c1b_1.m1a()) < 0) {
                  this.z1a_1.g1a();
                }
                this.n8_1 = 2;
                var tmp_7 = this;
                continue $sm;
              } else {
                if (updCellResult === get_SUSPEND_NO_WAITER()) {
                  var tmp0_1 = this.z1a_1;
                  var tmp2 = this.b1b_1;
                  var r = this.a1b_1;
                  this.n8_1 = 6;
                  suspendResult = hasNextOnNoWaiterSuspend(this.w1a_1, tmp0_1, tmp2, r, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_8 = this;
                  this.z1a_1.g1a();
                  var element = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
                  this.w1a_1.i1a_1 = element;
                  tmp_8.y1a_1 = true;
                  this.n8_1 = 7;
                  continue $sm;
                }
              }
            }

          case 6:
            var tmp_9 = this;
            return suspendResult;
          case 7:
            this.x1a_1 = this.y1a_1;
            this.n8_1 = 10;
            continue $sm;
          case 8:
            throw this.q8_1;
          case 9:
            if (false) {
              this.n8_1 = 1;
              continue $sm;
            }

            this.n8_1 = 10;
            continue $sm;
          case 10:
            return this.x1a_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 8) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function _get_bufferEndCounter__2d4hee($this) {
    return $this.m19_1.kotlinx$atomicfu$value;
  }
  function _get_isRendezvousOrUnlimited__3mdufi($this) {
    // Inline function 'kotlin.let' call
    var it = _get_bufferEndCounter__2d4hee($this);
    return equalsLong(it, new Long(0, 0)) || equalsLong(it, new Long(-1, 2147483647));
  }
  function onClosedSend($this, element, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.b11();
    $l$block: {
      var tmp0_safe_receiver = $this.j19_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, $this.h1b());
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = recoverStackTrace(tmp1_safe_receiver, cancellable);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
        cancellable.y8(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      var exception_0 = $this.h1b();
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = recoverStackTrace(exception_0, cancellable);
      var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(exception_1));
      cancellable.y8(tmp$ret$4);
    }
    return cancellable.by();
  }
  function sendOnNoWaiterSuspend($this, segment, index, element, s, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter' call
      switch (updateCellSend($this, segment, index, element, s, cancellable, false)) {
        case 0:
          segment.g1a();
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.y8(tmp$ret$0);
          break;
        case 1:
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.y8(tmp$ret$3);
          break;
        case 2:
          prepareSenderForSuspension($this, cancellable, segment, index);
          break;
        case 4:
          if (compare(s, $this.i1b()) < 0) {
            segment.g1a();
          }

          onClosedSendOnNoWaiterSuspend($this, element, cancellable);
          break;
        case 5:
          segment.g1a();
          $l$block_5: {
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
            var segment_0 = $this.o19_1.kotlinx$atomicfu$value;
            $l$loop_0: while (true) {
              var sendersAndCloseStatusCur = $this.k19_1.atomicfu$getAndIncrement$long();
              // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
              var s_0 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
              var closed = _get_isClosedForSend0__kxgf9m($this, sendersAndCloseStatusCur);
              // Inline function 'kotlin.Long.div' call
              var other = get_SEGMENT_SIZE();
              var id = divide(s_0, fromInt(other));
              // Inline function 'kotlin.Long.rem' call
              var other_0 = get_SEGMENT_SIZE();
              var tmp$ret$9 = modulo(s_0, fromInt(other_0));
              var i = convertToInt(tmp$ret$9);
              if (!equalsLong(segment_0.i10_1, id)) {
                var tmp0_elvis_lhs = findSegmentSend($this, id, segment_0);
                var tmp;
                if (tmp0_elvis_lhs == null) {
                  var tmp_0;
                  if (closed) {
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_5;
                  } else {
                    continue $l$loop_0;
                  }
                } else {
                  tmp = tmp0_elvis_lhs;
                }
                segment_0 = tmp;
              }
              switch (updateCellSend($this, segment_0, i, element, s_0, cancellable, closed)) {
                case 0:
                  segment_0.g1a();
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$12 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.y8(tmp$ret$12);
                  break $l$block_5;
                case 1:
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$15 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.y8(tmp$ret$15);
                  break $l$block_5;
                case 2:
                  if (closed) {
                    segment_0.w19();
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_5;
                  }

                  var tmp2_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
                  if (tmp2_safe_receiver == null)
                    null;
                  else {
                    prepareSenderForSuspension($this, tmp2_safe_receiver, segment_0, i);
                  }

                  break $l$block_5;
                case 4:
                  if (compare(s_0, $this.i1b()) < 0) {
                    segment_0.g1a();
                  }

                  onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                  break $l$block_5;
                case 5:
                  segment_0.g1a();
                  continue $l$loop_0;
                case 3:
                  var message = 'unexpected';
                  throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }

          break;
        default:
          // Inline function 'kotlin.error' call

          var message_0 = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message_0));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.h11();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.by();
  }
  function prepareSenderForSuspension($this, _this__u8e3s4, segment, index) {
    _this__u8e3s4.k11(segment, index + get_SEGMENT_SIZE() | 0);
  }
  function onClosedSendOnNoWaiterSuspend($this, element, cont) {
    var tmp0_safe_receiver = $this.j19_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, element, cont.t8());
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = recoverStackTrace($this.h1b(), cont);
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.y8(tmp$ret$0);
  }
  function SendBroadcast() {
  }
  function updateCellSend($this, segment, index, element, s, waiter, closed) {
    segment.a19(index, element);
    if (closed)
      return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
    var state = segment.e19(index);
    if (state === null) {
      if (bufferOrRendezvousSend($this, s)) {
        if (segment.g19(index, null, get_BUFFERED())) {
          return 1;
        }
      } else {
        if (waiter == null) {
          return 3;
        } else {
          if (segment.g19(index, null, waiter))
            return 2;
        }
      }
    } else {
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        segment.d19(index);
        var tmp;
        if (tryResumeReceiver($this, state, element)) {
          segment.f19(index, get_DONE_RCV());
          $this.j1b();
          tmp = 0;
        } else {
          if (!(segment.h19(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.u19(index, true);
          }
          tmp = 5;
        }
        return tmp;
      }
    }
    return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
  }
  function updateCellSendSlow($this, segment, index, element, s, waiter, closed) {
    while (true) {
      var state = segment.e19(index);
      if (state === null) {
        if (bufferOrRendezvousSend($this, s) && !closed) {
          if (segment.g19(index, null, get_BUFFERED())) {
            return 1;
          }
        } else {
          if (closed) {
            if (segment.g19(index, null, get_INTERRUPTED_SEND())) {
              segment.u19(index, false);
              return 4;
            }
          } else if (waiter == null)
            return 3;
          else if (segment.g19(index, null, waiter))
            return 2;
        }
      } else if (state === get_IN_BUFFER()) {
        if (segment.g19(index, state, get_BUFFERED())) {
          return 1;
        }
      } else if (state === get_INTERRUPTED_RCV()) {
        segment.d19(index);
        return 5;
      } else if (state === get_POISONED()) {
        segment.d19(index);
        return 5;
      } else if (state === get_CHANNEL_CLOSED()) {
        segment.d19(index);
        completeCloseOrCancel($this);
        return 4;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        segment.d19(index);
        var tmp;
        if (state instanceof WaiterEB) {
          tmp = state.k1b_1;
        } else {
          tmp = state;
        }
        var receiver = tmp;
        var tmp_0;
        if (tryResumeReceiver($this, receiver, element)) {
          segment.f19(index, get_DONE_RCV());
          $this.j1b();
          tmp_0 = 0;
        } else {
          if (!(segment.h19(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.u19(index, true);
          }
          tmp_0 = 5;
        }
        return tmp_0;
      }
    }
  }
  function shouldSendSuspend0($this, curSendersAndCloseStatus) {
    if (_get_isClosedForSend0__kxgf9m($this, curSendersAndCloseStatus))
      return false;
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var tmp$ret$0 = bitwiseAnd(curSendersAndCloseStatus, new Long(-1, 268435455));
    return !bufferOrRendezvousSend($this, tmp$ret$0);
  }
  function bufferOrRendezvousSend($this, curSenders) {
    var tmp;
    if (compare(curSenders, _get_bufferEndCounter__2d4hee($this)) < 0) {
      tmp = true;
    } else {
      var tmp0 = $this.i1b();
      // Inline function 'kotlin.Long.plus' call
      var other = $this.i19_1;
      var tmp$ret$0 = add(tmp0, fromInt(other));
      tmp = compare(curSenders, tmp$ret$0) < 0;
    }
    return tmp;
  }
  function tryResumeReceiver($this, _this__u8e3s4, element) {
    var tmp;
    if (isInterface(_this__u8e3s4, SelectInstance)) {
      tmp = _this__u8e3s4.p1b($this, element);
    } else {
      if (_this__u8e3s4 instanceof ReceiveCatching) {
        if (!(_this__u8e3s4 instanceof ReceiveCatching))
          THROW_CCE();
        var tmp_0 = Companion_getInstance_0().n1b(element);
        var tmp1_safe_receiver = $this.j19_1;
        tmp = tryResume0(_this__u8e3s4.o1b_1, new ChannelResult(tmp_0), tmp1_safe_receiver == null ? null : bindCancellationFun(tmp1_safe_receiver, element, _this__u8e3s4.o1b_1.t8()));
      } else {
        if (_this__u8e3s4 instanceof BufferedChannelIterator) {
          if (!(_this__u8e3s4 instanceof BufferedChannelIterator))
            THROW_CCE();
          tmp = _this__u8e3s4.l1b(element);
        } else {
          if (isInterface(_this__u8e3s4, CancellableContinuation)) {
            if (!isInterface(_this__u8e3s4, CancellableContinuation))
              THROW_CCE();
            var tmp2_safe_receiver = $this.j19_1;
            tmp = tryResume0(_this__u8e3s4, element, tmp2_safe_receiver == null ? null : bindCancellationFun(tmp2_safe_receiver, element, _this__u8e3s4.t8()));
          } else {
            var message = 'Unexpected receiver type: ' + toString(_this__u8e3s4);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
    }
    return tmp;
  }
  function receiveOnNoWaiterSuspend($this, segment, index, r, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var updCellResult = updateCellReceive($this, segment, index, r, cancellable);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension($this, cancellable, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (compare(r, $this.m1a()) < 0) {
          segment.g1a();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.p19_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if ($this.n1a()) {
              onClosedReceiveOnNoWaiterSuspend($this, cancellable);
              break $l$block_0;
            }
            var r_0 = $this.l19_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = divide(r_0, fromInt(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var tmp$ret$3 = modulo(r_0, fromInt(other_0));
            var i = convertToInt(tmp$ret$3);
            if (!equalsLong(segment_0.i10_1, id)) {
              var tmp0_elvis_lhs = findSegmentReceive($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive($this, segment_0, i, r_0, cancellable);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp1_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension($this, tmp1_safe_receiver, segment_0, i);
              }
            } else if (updCellResult_0 === get_FAILED()) {
              if (compare(r_0, $this.m1a()) < 0) {
                segment_0.g1a();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.g1a();
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              var tmp0_safe_receiver = $this.j19_1;
              var onCancellation = tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cancellable.t8());
              cancellable.kz(element, onCancellation);
            }
            break $l$block_0;
          }
        }
      } else {
        segment.g1a();
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        var tmp0_safe_receiver_0 = $this.j19_1;
        var onCancellation_0 = tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, element_0, cancellable.t8());
        cancellable.kz(element_0, onCancellation_0);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.h11();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.by();
  }
  function prepareReceiverForSuspension($this, _this__u8e3s4, segment, index) {
    $this.q1b();
    _this__u8e3s4.k11(segment, index);
  }
  function onClosedReceiveOnNoWaiterSuspend($this, cont) {
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = _get_receiveException__foorc1($this);
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.y8(tmp$ret$0);
  }
  function updateCellReceive($this, segment, index, r, waiter) {
    var state = segment.e19(index);
    if (state === null) {
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var this_0 = $this.k19_1.kotlinx$atomicfu$value;
      var senders = bitwiseAnd(this_0, new Long(-1, 268435455));
      if (compare(r, senders) >= 0) {
        if (waiter === null) {
          return get_SUSPEND_NO_WAITER();
        }
        if (segment.g19(index, state, waiter)) {
          expandBuffer($this);
          return get_SUSPEND();
        }
      }
    } else if (state === get_BUFFERED())
      if (segment.g19(index, state, get_DONE_RCV())) {
        expandBuffer($this);
        return segment.c19(index);
      }
    return updateCellReceiveSlow($this, segment, index, r, waiter);
  }
  function updateCellReceiveSlow($this, segment, index, r, waiter) {
    $l$loop: while (true) {
      var state = segment.e19(index);
      if (state === null || state === get_IN_BUFFER()) {
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var this_0 = $this.k19_1.kotlinx$atomicfu$value;
        var senders = bitwiseAnd(this_0, new Long(-1, 268435455));
        if (compare(r, senders) < 0) {
          if (segment.g19(index, state, get_POISONED())) {
            expandBuffer($this);
            return get_FAILED();
          }
        } else {
          if (waiter === null) {
            return get_SUSPEND_NO_WAITER();
          }
          if (segment.g19(index, state, waiter)) {
            expandBuffer($this);
            return get_SUSPEND();
          }
        }
      } else if (state === get_BUFFERED()) {
        if (segment.g19(index, state, get_DONE_RCV())) {
          expandBuffer($this);
          return segment.c19(index);
        }
      } else if (state === get_INTERRUPTED_SEND())
        return get_FAILED();
      else if (state === get_POISONED())
        return get_FAILED();
      else if (state === get_CHANNEL_CLOSED()) {
        expandBuffer($this);
        return get_FAILED();
      } else if (state === get_RESUMING_BY_EB())
        continue $l$loop;
      else {
        if (segment.g19(index, state, get_RESUMING_BY_RCV())) {
          var helpExpandBuffer = state instanceof WaiterEB;
          var tmp;
          if (state instanceof WaiterEB) {
            tmp = state.k1b_1;
          } else {
            tmp = state;
          }
          var sender = tmp;
          var tmp_0;
          if (tryResumeSender($this, sender, segment, index)) {
            segment.f19(index, get_DONE_RCV());
            expandBuffer($this);
            tmp_0 = segment.c19(index);
          } else {
            segment.f19(index, get_INTERRUPTED_SEND());
            segment.u19(index, false);
            if (helpExpandBuffer) {
              expandBuffer($this);
            }
            tmp_0 = get_FAILED();
          }
          return tmp_0;
        }
      }
    }
  }
  function tryResumeSender($this, _this__u8e3s4, segment, index) {
    var tmp;
    if (isInterface(_this__u8e3s4, CancellableContinuation)) {
      if (!isInterface(_this__u8e3s4, CancellableContinuation))
        THROW_CCE();
      tmp = tryResume0(_this__u8e3s4, Unit_instance);
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        if (!(_this__u8e3s4 instanceof SelectImplementation))
          THROW_CCE();
        var trySelectResult = _this__u8e3s4.y1b($this, Unit_instance);
        if (trySelectResult === TrySelectDetailedResult_REREGISTER_getInstance()) {
          segment.d19(index);
        }
        tmp = trySelectResult === TrySelectDetailedResult_SUCCESSFUL_getInstance();
      } else {
        if (_this__u8e3s4 instanceof SendBroadcast) {
          tmp = tryResume0(_this__u8e3s4.r1b_1, true);
        } else {
          var message = 'Unexpected waiter: ' + toString(_this__u8e3s4);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp;
  }
  function expandBuffer($this) {
    if (_get_isRendezvousOrUnlimited__3mdufi($this))
      return Unit_instance;
    var segment = $this.q19_1.kotlinx$atomicfu$value;
    try_again: while (true) {
      var b = $this.m19_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = divide(b, fromInt(other));
      var s = $this.m1a();
      if (compare(s, b) <= 0) {
        if (compare(segment.i10_1, id) < 0 && !(segment.c1a() == null)) {
          moveSegmentBufferEndToSpecifiedOrLast($this, id, segment);
        }
        incCompletedExpandBufferAttempts$default($this);
        return Unit_instance;
      }
      if (!equalsLong(segment.i10_1, id)) {
        var tmp0_elvis_lhs = findSegmentBufferEnd($this, id, segment, b);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue try_again;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var tmp$ret$1 = modulo(b, fromInt(other_0));
      var i = convertToInt(tmp$ret$1);
      if (updateCellExpandBuffer($this, segment, i, b)) {
        incCompletedExpandBufferAttempts$default($this);
        return Unit_instance;
      } else {
        incCompletedExpandBufferAttempts$default($this);
        continue try_again;
      }
    }
  }
  function updateCellExpandBuffer($this, segment, index, b) {
    var state = segment.e19(index);
    if (!(state == null) ? isInterface(state, Waiter) : false) {
      if (compare(b, $this.l19_1.kotlinx$atomicfu$value) >= 0) {
        if (segment.g19(index, state, get_RESUMING_BY_EB())) {
          var tmp;
          if (tryResumeSender($this, state, segment, index)) {
            segment.f19(index, get_BUFFERED());
            tmp = true;
          } else {
            segment.f19(index, get_INTERRUPTED_SEND());
            segment.u19(index, false);
            tmp = false;
          }
          return tmp;
        }
      }
    }
    return updateCellExpandBufferSlow($this, segment, index, b);
  }
  function updateCellExpandBufferSlow($this, segment, index, b) {
    $l$loop: while (true) {
      var state = segment.e19(index);
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        if (compare(b, $this.l19_1.kotlinx$atomicfu$value) < 0) {
          if (segment.g19(index, state, new WaiterEB(state)))
            return true;
        } else {
          if (segment.g19(index, state, get_RESUMING_BY_EB())) {
            var tmp;
            if (tryResumeSender($this, state, segment, index)) {
              segment.f19(index, get_BUFFERED());
              tmp = true;
            } else {
              segment.f19(index, get_INTERRUPTED_SEND());
              segment.u19(index, false);
              tmp = false;
            }
            return tmp;
          }
        }
      } else {
        if (state === get_INTERRUPTED_SEND())
          return false;
        else {
          if (state === null) {
            if (segment.g19(index, state, get_IN_BUFFER()))
              return true;
          } else {
            if (state === get_BUFFERED())
              return true;
            else {
              if (state === get_POISONED() || state === get_DONE_RCV() || state === get_INTERRUPTED_RCV())
                return true;
              else {
                if (state === get_CHANNEL_CLOSED())
                  return true;
                else {
                  if (state === get_RESUMING_BY_RCV())
                    continue $l$loop;
                  else {
                    // Inline function 'kotlin.error' call
                    var message = 'Unexpected cell state: ' + toString_0(state);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts($this, nAttempts) {
    // Inline function 'kotlin.also' call
    var this_0 = $this.n19_1.atomicfu$addAndGet$long(nAttempts);
    // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
    if (!equalsLong(bitwiseAnd(this_0, new Long(0, 1073741824)), new Long(0, 0))) {
      $l$loop: while (true) {
        // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
        var this_1 = $this.n19_1.kotlinx$atomicfu$value;
        if (!!equalsLong(bitwiseAnd(this_1, new Long(0, 1073741824)), new Long(0, 0))) {
          break $l$loop;
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts$default($this, nAttempts, $super) {
    nAttempts = nAttempts === VOID ? new Long(1, 0) : nAttempts;
    return incCompletedExpandBufferAttempts($this, nAttempts);
  }
  function registerSelectForReceive($this, select, ignoredParam) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
      var segment = $this.p19_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        if ($this.n1a()) {
          onClosedSelectOnReceive($this, select);
          tmp$ret$1 = Unit_instance;
          break $l$block_0;
        }
        var r = $this.l19_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = divide(r, fromInt(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = modulo(r, fromInt(other_0));
        var i = convertToInt(tmp$ret$3);
        if (!equalsLong(segment.i10_1, id)) {
          var tmp0_elvis_lhs = findSegmentReceive($this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var updCellResult = updateCellReceive($this, segment, i, r, select);
        if (updCellResult === get_SUSPEND()) {
          var tmp1_safe_receiver = (!(select == null) ? isInterface(select, Waiter) : false) ? select : null;
          if (tmp1_safe_receiver == null)
            null;
          else {
            prepareReceiverForSuspension($this, tmp1_safe_receiver, segment, i);
          }
        } else if (updCellResult === get_FAILED()) {
          if (compare(r, $this.m1a()) < 0) {
            segment.g1a();
          }
          continue $l$loop_0;
        } else if (updCellResult === get_SUSPEND_NO_WAITER()) {
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          segment.g1a();
          var elem = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
          select.z1b(elem);
        }
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      }
    }
    return tmp$ret$1;
  }
  function onClosedSelectOnReceive($this, select) {
    select.z1b(get_CHANNEL_CLOSED());
  }
  function processResultSelectReceiveCatching($this, ignoredParam, selectResult) {
    var tmp;
    if (selectResult === get_CHANNEL_CLOSED()) {
      tmp = Companion_getInstance_0().a1c($this.l1a());
    } else {
      var tmp_0 = Companion_getInstance_0();
      tmp = tmp_0.n1b((selectResult == null ? true : !(selectResult == null)) ? selectResult : THROW_CCE());
    }
    return new ChannelResult(tmp);
  }
  function BufferedChannelIterator($outer) {
    this.k1a_1 = $outer;
    this.i1a_1 = get_NO_RECEIVE_RESULT();
    this.j1a_1 = null;
  }
  protoOf(BufferedChannelIterator).b1c = function ($completion) {
    var tmp = new $hasNextCOROUTINE$(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(BufferedChannelIterator).k11 = function (segment, index) {
    var tmp0_safe_receiver = this.j1a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k11(segment, index);
    }
  };
  protoOf(BufferedChannelIterator).k = function () {
    var result = this.i1a_1;
    // Inline function 'kotlin.check' call
    if (!!(result === get_NO_RECEIVE_RESULT())) {
      var message = '`hasNext()` has not been invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.i1a_1 = get_NO_RECEIVE_RESULT();
    if (result === get_CHANNEL_CLOSED())
      throw recoverStackTrace_0(_get_receiveException__foorc1(this.k1a_1));
    return (result == null ? true : !(result == null)) ? result : THROW_CCE();
  };
  protoOf(BufferedChannelIterator).l1b = function (element) {
    var cont = ensureNotNull(this.j1a_1);
    this.j1a_1 = null;
    this.i1a_1 = element;
    var tmp0_safe_receiver = this.k1a_1.j19_1;
    return tryResume0(cont, true, tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cont.t8()));
  };
  protoOf(BufferedChannelIterator).c1c = function () {
    var cont = ensureNotNull(this.j1a_1);
    this.j1a_1 = null;
    this.i1a_1 = get_CHANNEL_CLOSED();
    var cause = this.k1a_1.l1a();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.y8(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.y8(tmp$ret$2);
    }
  };
  function _get_receiveException__foorc1($this) {
    var tmp0_elvis_lhs = $this.l1a();
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException('Channel was closed') : tmp0_elvis_lhs;
  }
  function invokeCloseHandler($this) {
    var tmp0 = $this.t19_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.getAndUpdate' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        var tmp;
        if (cur === null) {
          tmp = get_CLOSE_HANDLER_CLOSED();
        } else {
          tmp = get_CLOSE_HANDLER_INVOKED();
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = cur;
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var closeHandler = tmp_0;
    if (typeof closeHandler !== 'function')
      THROW_CCE();
    closeHandler($this.l1a());
  }
  function markClosed($this) {
    var tmp0 = $this.k19_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        var tmp;
        switch (convertToInt(shiftRight(cur, 60))) {
          case 0:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$1 = bitwiseAnd(cur, new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$1, 2);
            break;
          case 1:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$2 = bitwiseAnd(cur, new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$2, 3);
            break;
          default:
            return Unit_instance;
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$4 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$4 = Unit_instance;
    }
    return tmp$ret$4;
  }
  function markCancelled($this) {
    var tmp0 = $this.k19_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var tmp$ret$0 = bitwiseAnd(cur, new Long(-1, 268435455));
        var upd = constructSendersAndCloseStatus(tmp$ret$0, 3);
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$2 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$2 = Unit_instance;
    }
    return tmp$ret$2;
  }
  function markCancellationStarted($this) {
    var tmp0 = $this.k19_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        var tmp;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        if (convertToInt(shiftRight(cur, 60)) === 0) {
          // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
          var tmp$ret$1 = bitwiseAnd(cur, new Long(-1, 268435455));
          tmp = constructSendersAndCloseStatus(tmp$ret$1, 1);
        } else {
          return Unit_instance;
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$3 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$3 = Unit_instance;
    }
    return tmp$ret$3;
  }
  function completeCloseOrCancel($this) {
    $this.d1c();
  }
  function completeClose($this, sendersCur) {
    var lastSegment = closeLinkedList($this);
    if ($this.f1c()) {
      var lastBufferedCellGlobalIndex = markAllEmptyCellsAsClosed($this, lastSegment);
      if (!equalsLong(lastBufferedCellGlobalIndex, new Long(-1, -1))) {
        $this.e1c(lastBufferedCellGlobalIndex);
      }
    }
    cancelSuspendedReceiveRequests($this, lastSegment, sendersCur);
    return lastSegment;
  }
  function completeCancel($this, sendersCur) {
    var lastSegment = completeClose($this, sendersCur);
    removeUnprocessedElements($this, lastSegment);
  }
  function closeLinkedList($this) {
    var lastSegment = $this.q19_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.let' call
    var it = $this.o19_1.kotlinx$atomicfu$value;
    if (compare(it.i10_1, lastSegment.i10_1) > 0)
      lastSegment = it;
    // Inline function 'kotlin.let' call
    var it_0 = $this.p19_1.kotlinx$atomicfu$value;
    if (compare(it_0.i10_1, lastSegment.i10_1) > 0)
      lastSegment = it_0;
    return close(lastSegment);
  }
  function markAllEmptyCellsAsClosed($this, lastSegment) {
    var segment = lastSegment;
    while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.i10_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var globalIndex = add(this_0, fromInt(index));
          if (compare(globalIndex, $this.i1b()) < 0)
            return new Long(-1, -1);
          cell_update: while (true) {
            var state = segment.e19(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.g19(index, state, get_CHANNEL_CLOSED())) {
                segment.w19();
                break cell_update;
              }
            } else if (state === get_BUFFERED())
              return globalIndex;
            else
              break cell_update;
          }
        }
         while (0 <= inductionVariable);
      var tmp1_elvis_lhs = segment.f1a();
      var tmp;
      if (tmp1_elvis_lhs == null) {
        return new Long(-1, -1);
      } else {
        tmp = tmp1_elvis_lhs;
      }
      segment = tmp;
    }
  }
  function removeUnprocessedElements($this, lastSegment) {
    var onUndeliveredElement = $this.j19_1;
    var undeliveredElementException = null;
    var suspendedSenders = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.i10_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var globalIndex = add(this_0, fromInt(index));
          update_cell: while (true) {
            var state = segment.e19(index);
            if (state === get_DONE_RCV())
              break process_segments;
            else {
              if (state === get_BUFFERED()) {
                if (compare(globalIndex, $this.i1b()) < 0)
                  break process_segments;
                if (segment.g19(index, state, get_CHANNEL_CLOSED())) {
                  if (!(onUndeliveredElement == null)) {
                    var element = segment.b19(index);
                    undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element, undeliveredElementException);
                  }
                  segment.d19(index);
                  segment.w19();
                  break update_cell;
                }
              } else {
                if (state === get_IN_BUFFER() || state === null) {
                  if (segment.g19(index, state, get_CHANNEL_CLOSED())) {
                    segment.w19();
                    break update_cell;
                  }
                } else {
                  var tmp;
                  if (!(state == null) ? isInterface(state, Waiter) : false) {
                    tmp = true;
                  } else {
                    tmp = state instanceof WaiterEB;
                  }
                  if (tmp) {
                    if (compare(globalIndex, $this.i1b()) < 0)
                      break process_segments;
                    var tmp_0;
                    if (state instanceof WaiterEB) {
                      tmp_0 = state.k1b_1;
                    } else {
                      tmp_0 = (!(state == null) ? isInterface(state, Waiter) : false) ? state : THROW_CCE();
                    }
                    var sender = tmp_0;
                    if (segment.g19(index, state, get_CHANNEL_CLOSED())) {
                      if (!(onUndeliveredElement == null)) {
                        var element_0 = segment.b19(index);
                        undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element_0, undeliveredElementException);
                      }
                      suspendedSenders = InlineList__plus_impl_nuetvo(suspendedSenders, sender);
                      segment.d19(index);
                      segment.w19();
                      break update_cell;
                    }
                  } else {
                    if (state === get_RESUMING_BY_EB() || state === get_RESUMING_BY_RCV())
                      break process_segments;
                    else {
                      if (state === get_RESUMING_BY_EB())
                        continue update_cell;
                      else {
                        break update_cell;
                      }
                    }
                  }
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      var tmp1_elvis_lhs = segment.f1a();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        break process_segments;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      segment = tmp_1;
    }
    var tmp0_0 = suspendedSenders;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = access$_get_holder__kkflen(tmp0_0);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp_2 = access$_get_holder__kkflen(tmp0_0);
          var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          resumeSenderOnCancelledChannel($this, it);
        } else {
          var tmp_3 = access$_get_holder__kkflen(tmp0_0);
          var list = tmp_3 instanceof ArrayList ? tmp_3 : THROW_CCE();
          var inductionVariable_0 = list.l() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var it_0 = list.m(i);
              resumeSenderOnCancelledChannel($this, it_0);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    var tmp2_safe_receiver = undeliveredElementException;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp2_safe_receiver;
    }
  }
  function cancelSuspendedReceiveRequests($this, lastSegment, sendersCounter) {
    var suspendedReceivers = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (!(segment == null)) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.i10_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var tmp$ret$1 = add(this_0, fromInt(index));
          if (compare(tmp$ret$1, sendersCounter) < 0)
            break process_segments;
          cell_update: while (true) {
            var state = segment.e19(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.g19(index, state, get_CHANNEL_CLOSED())) {
                segment.w19();
                break cell_update;
              }
            } else {
              if (state instanceof WaiterEB) {
                if (segment.g19(index, state, get_CHANNEL_CLOSED())) {
                  suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state.k1b_1);
                  segment.u19(index, true);
                  break cell_update;
                }
              } else {
                if (!(state == null) ? isInterface(state, Waiter) : false) {
                  if (segment.g19(index, state, get_CHANNEL_CLOSED())) {
                    suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state);
                    segment.u19(index, true);
                    break cell_update;
                  }
                } else {
                  break cell_update;
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      segment = segment.f1a();
    }
    var tmp0_0 = suspendedReceivers;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = access$_get_holder__kkflen(tmp0_0);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp = access$_get_holder__kkflen(tmp0_0);
          var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          resumeReceiverOnClosedChannel($this, it);
        } else {
          var tmp_0 = access$_get_holder__kkflen(tmp0_0);
          var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable_0 = list.l() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var it_0 = list.m(i);
              resumeReceiverOnClosedChannel($this, it_0);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
  }
  function resumeReceiverOnClosedChannel($this, _this__u8e3s4) {
    return resumeWaiterOnClosedChannel($this, _this__u8e3s4, true);
  }
  function resumeSenderOnCancelledChannel($this, _this__u8e3s4) {
    return resumeWaiterOnClosedChannel($this, _this__u8e3s4, false);
  }
  function resumeWaiterOnClosedChannel($this, _this__u8e3s4, receiver) {
    if (_this__u8e3s4 instanceof SendBroadcast) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = _this__u8e3s4.r1b_1;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      this_0.y8(tmp$ret$0);
    } else {
      if (isInterface(_this__u8e3s4, CancellableContinuation)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = receiver ? _get_receiveException__foorc1($this) : $this.h1b();
        var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
        _this__u8e3s4.y8(tmp$ret$2);
      } else {
        if (_this__u8e3s4 instanceof ReceiveCatching) {
          var tmp0 = _this__u8e3s4.o1b_1;
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = new ChannelResult(Companion_getInstance_0().a1c($this.l1a()));
          var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
          tmp0.y8(tmp$ret$4);
        } else {
          if (_this__u8e3s4 instanceof BufferedChannelIterator) {
            _this__u8e3s4.c1c();
          } else {
            if (isInterface(_this__u8e3s4, SelectInstance)) {
              _this__u8e3s4.p1b($this, get_CHANNEL_CLOSED());
            } else {
              // Inline function 'kotlin.error' call
              var message = 'Unexpected waiter: ' + toString(_this__u8e3s4);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  }
  function _get_isClosedForSend0__kxgf9m($this, _this__u8e3s4) {
    return isClosed($this, _this__u8e3s4, false);
  }
  function _get_isClosedForReceive0__f7qknl($this, _this__u8e3s4) {
    return isClosed($this, _this__u8e3s4, true);
  }
  function isClosed($this, sendersAndCloseStatusCur, isClosedForReceive) {
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp;
    switch (convertToInt(shiftRight(sendersAndCloseStatusCur, 60))) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$1 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        completeClose($this, tmp$ret$1);
        tmp = isClosedForReceive ? !$this.g1c() : true;
        break;
      case 3:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$2 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        completeCancel($this, tmp$ret$2);
        tmp = true;
        break;
      default:
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call

        var message = 'unexpected close status: ' + convertToInt(shiftRight(sendersAndCloseStatusCur, 60));
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function isCellNonEmpty($this, segment, index, globalIndex) {
    while (true) {
      var state = segment.e19(index);
      if (state === null || state === get_IN_BUFFER()) {
        if (segment.g19(index, state, get_POISONED())) {
          expandBuffer($this);
          return false;
        }
      } else if (state === get_BUFFERED())
        return true;
      else if (state === get_INTERRUPTED_SEND())
        return false;
      else if (state === get_CHANNEL_CLOSED())
        return false;
      else if (state === get_DONE_RCV())
        return false;
      else if (state === get_POISONED())
        return false;
      else if (state === get_RESUMING_BY_EB())
        return true;
      else if (state === get_RESUMING_BY_RCV())
        return false;
      else
        return equalsLong(globalIndex, $this.i1b());
    }
  }
  function findSegmentSend($this, id, startFrom) {
    var tmp0 = $this.o19_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.i10_1, tmp2.i10_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp2.y19()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.z19()) {
                  cur.q3();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp2.z19()) {
                tmp2.q3();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$2;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.i10_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      var tmp$ret$3 = multiply(tmp0_0, fromInt(other));
      if (compare(tmp$ret$3, $this.i1b()) < 0) {
        startFrom.g1a();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (compare(segment.i10_1, id) > 0) {
        var tmp0_1 = segment.i10_1;
        // Inline function 'kotlin.Long.times' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$4 = multiply(tmp0_1, fromInt(other_0));
        updateSendersCounterIfLower($this, tmp$ret$4);
        var tmp0_2 = segment.i10_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$5 = multiply(tmp0_2, fromInt(other_1));
        if (compare(tmp$ret$5, $this.i1b()) < 0) {
          segment.g1a();
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function findSegmentReceive($this, id, startFrom) {
    var tmp0 = $this.p19_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.i10_1, tmp2.i10_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp2.y19()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.z19()) {
                  cur.q3();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp2.z19()) {
                tmp2.q3();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$2;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.i10_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      var tmp$ret$3 = multiply(tmp0_0, fromInt(other));
      if (compare(tmp$ret$3, $this.m1a()) < 0) {
        startFrom.g1a();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (!_get_isRendezvousOrUnlimited__3mdufi($this)) {
        var tmp0_1 = _get_bufferEndCounter__2d4hee($this);
        // Inline function 'kotlin.Long.div' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$4 = divide(tmp0_1, fromInt(other_0));
        tmp_1 = compare(id, tmp$ret$4) <= 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp0_2 = $this.q19_1;
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          while (true) {
            var cur_0 = tmp0_2.kotlinx$atomicfu$value;
            if (compare(cur_0.i10_1, segment.i10_1) >= 0) {
              break $l$block_5;
            }
            if (!segment.y19()) {
              break $l$block_5;
            }
            if (tmp0_2.atomicfu$compareAndSet(cur_0, segment)) {
              if (cur_0.z19()) {
                cur_0.q3();
              }
              break $l$block_5;
            }
            if (segment.z19()) {
              segment.q3();
            }
          }
        }
      }
      var tmp_2;
      if (compare(segment.i10_1, id) > 0) {
        var tmp0_3 = segment.i10_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$7 = multiply(tmp0_3, fromInt(other_1));
        updateReceiversCounterIfLower($this, tmp$ret$7);
        var tmp0_4 = segment.i10_1;
        // Inline function 'kotlin.Long.times' call
        var other_2 = get_SEGMENT_SIZE();
        var tmp$ret$8 = multiply(tmp0_4, fromInt(other_2));
        if (compare(tmp$ret$8, $this.m1a()) < 0) {
          segment.g1a();
        }
        tmp_2 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_2 = segment;
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function findSegmentBufferEnd($this, id, startFrom, currentBufferEndCounter) {
    var tmp0 = $this.q19_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.i10_1, tmp2.i10_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp2.y19()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.z19()) {
                  cur.q3();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp2.z19()) {
                tmp2.q3();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$2;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom);
      incCompletedExpandBufferAttempts$default($this);
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (compare(segment.i10_1, id) > 0) {
        // Inline function 'kotlin.Long.plus' call
        var tmp_2 = add(currentBufferEndCounter, fromInt(1));
        var tmp0_0 = segment.i10_1;
        // Inline function 'kotlin.Long.times' call
        var other = get_SEGMENT_SIZE();
        var tmp$ret$4 = multiply(tmp0_0, fromInt(other));
        if ($this.m19_1.atomicfu$compareAndSet(tmp_2, tmp$ret$4)) {
          var tmp0_1 = segment.i10_1;
          // Inline function 'kotlin.Long.times' call
          var other_0 = get_SEGMENT_SIZE();
          var tmp$ret$5 = multiply(tmp0_1, fromInt(other_0));
          incCompletedExpandBufferAttempts($this, subtract(tmp$ret$5, currentBufferEndCounter));
        } else {
          incCompletedExpandBufferAttempts$default($this);
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom) {
    var segment = startFrom;
    $l$loop: while (compare(segment.i10_1, id) < 0) {
      var tmp0_elvis_lhs = segment.c1a();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
    while (true) {
      $l$loop_0: while (segment.x19()) {
        var tmp1_elvis_lhs = segment.c1a();
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        segment = tmp_0;
      }
      var tmp0 = $this.q19_1;
      var tmp2 = segment;
      var tmp$ret$0;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.moveForward' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          if (compare(cur.i10_1, tmp2.i10_1) >= 0) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (!tmp2.y19()) {
            tmp$ret$0 = false;
            break $l$block_1;
          }
          if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
            if (cur.z19()) {
              cur.q3();
            }
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (tmp2.z19()) {
            tmp2.q3();
          }
        }
        tmp$ret$0 = Unit_instance;
      }
      if (tmp$ret$0)
        return Unit_instance;
    }
  }
  function updateSendersCounterIfLower($this, value) {
    var this_0 = $this.k19_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var curCounter = bitwiseAnd(cur, new Long(-1, 268435455));
      if (compare(curCounter, value) >= 0)
        return Unit_instance;
      // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
      var tmp$ret$1 = convertToInt(shiftRight(cur, 60));
      var update = constructSendersAndCloseStatus(curCounter, tmp$ret$1);
      if ($this.k19_1.atomicfu$compareAndSet(cur, update))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function updateReceiversCounterIfLower($this, value) {
    var this_0 = $this.l19_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      if (compare(cur, value) >= 0)
        return Unit_instance;
      if ($this.l19_1.atomicfu$compareAndSet(cur, value))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function BufferedChannel$registerSelectForReceive$ref() {
    var l = function (p0, p1, p2) {
      registerSelectForReceive(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = 'registerSelectForReceive';
    return l;
  }
  function BufferedChannel$processResultSelectReceiveCatching$ref() {
    var l = function (p0, p1, p2) {
      return processResultSelectReceiveCatching(p0, p1, p2);
    };
    l.callableName = 'processResultSelectReceiveCatching';
    return l;
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda($element, this$0, $select) {
    return function (it) {
      var tmp;
      if (!($element === get_CHANNEL_CLOSED())) {
        callUndeliveredElement(this$0.j19_1, ($element == null ? true : !($element == null)) ? $element : THROW_CCE(), $select.t8());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this$0) {
    return function (select, _anonymous_parameter_1__qggqgd, element) {
      return BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda(element, this$0, select);
    };
  }
  function $sendCOROUTINE$(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q1c_1 = _this__u8e3s4;
    this.r1c_1 = element;
  }
  protoOf($sendCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 11;
            var tmp_0 = this;
            tmp_0.c1d_1 = this.q1c_1;
            var tmp_1 = this;
            tmp_1.b1d_1 = this.r1c_1;
            var tmp_2 = this;
            tmp_2.a1d_1 = null;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.u1c_1 = this.c1d_1;
            this.x1c_1 = this.b1d_1;
            this.v1c_1 = this.a1d_1;
            this.t1c_1 = this.u1c_1.o19_1.kotlinx$atomicfu$value;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.n8_1 = 12;
              continue $sm;
            }

            var sendersAndCloseStatusCur = this.u1c_1.k19_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            tmp_3.w1c_1 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
            this.y1c_1 = _get_isClosedForSend0__kxgf9m(this.u1c_1, sendersAndCloseStatusCur);
            var tmp0 = this.w1c_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_4 = this;
            var tmp0_0 = this.w1c_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_4.s1c_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!equalsLong(this.t1c_1.i10_1, id)) {
              var tmp0_elvis_lhs = findSegmentSend(this.u1c_1, id, this.t1c_1);
              if (tmp0_elvis_lhs == null) {
                if (this.y1c_1) {
                  this.n8_1 = 10;
                  suspendResult = onClosedSend(this.q1c_1, this.r1c_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.n8_1 = 2;
                  var tmp_5 = this;
                  continue $sm;
                }
              } else {
                this.z1c_1 = tmp0_elvis_lhs;
                this.n8_1 = 3;
                continue $sm;
              }
            } else {
              this.n8_1 = 4;
              continue $sm;
            }

          case 3:
            this.t1c_1 = this.z1c_1;
            this.n8_1 = 4;
            continue $sm;
          case 4:
            var tmp1_subject = updateCellSend(this.u1c_1, this.t1c_1, this.s1c_1, this.x1c_1, this.w1c_1, this.v1c_1, this.y1c_1);
            if (tmp1_subject === 0) {
              this.t1c_1.g1a();
              this.n8_1 = 13;
              continue $sm;
            } else {
              if (tmp1_subject === 1) {
                this.n8_1 = 13;
                continue $sm;
              } else {
                if (tmp1_subject === 2) {
                  if (this.y1c_1) {
                    this.t1c_1.w19();
                    this.n8_1 = 9;
                    suspendResult = onClosedSend(this.q1c_1, this.r1c_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    this.n8_1 = 8;
                    continue $sm;
                  }
                } else {
                  if (tmp1_subject === 4) {
                    if (compare(this.w1c_1, this.u1c_1.i1b()) < 0) {
                      this.t1c_1.g1a();
                    }
                    this.n8_1 = 7;
                    suspendResult = onClosedSend(this.q1c_1, this.r1c_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp1_subject === 5) {
                      this.t1c_1.g1a();
                      this.n8_1 = 2;
                      continue $sm;
                    } else {
                      if (tmp1_subject === 3) {
                        var tmp0_1 = this.t1c_1;
                        var tmp2 = this.s1c_1;
                        var tmp4 = this.x1c_1;
                        var s = this.w1c_1;
                        this.n8_1 = 6;
                        suspendResult = sendOnNoWaiterSuspend(this.q1c_1, tmp0_1, tmp2, tmp4, s, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.n8_1 = 5;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 5:
            this.n8_1 = 2;
            continue $sm;
          case 6:
            this.n8_1 = 13;
            continue $sm;
          case 7:
            this.n8_1 = 13;
            continue $sm;
          case 8:
            var tmp_6 = this.v1c_1;
            var tmp2_safe_receiver = (!(tmp_6 == null) ? isInterface(tmp_6, Waiter) : false) ? tmp_6 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(this.u1c_1, tmp2_safe_receiver, this.t1c_1, this.s1c_1);
            }

            this.t1c_1;
            this.s1c_1;
            this.n8_1 = 13;
            continue $sm;
          case 9:
            this.n8_1 = 13;
            continue $sm;
          case 10:
            this.n8_1 = 13;
            continue $sm;
          case 11:
            throw this.q8_1;
          case 12:
            if (false) {
              this.n8_1 = 1;
              continue $sm;
            }

            this.n8_1 = 13;
            continue $sm;
          case 13:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 11) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function $receiveCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1d_1 = _this__u8e3s4;
  }
  protoOf($receiveCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 8;
            var tmp_0 = this;
            tmp_0.v1d_1 = this.l1d_1;
            var tmp_1 = this;
            tmp_1.u1d_1 = null;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.r1d_1 = this.v1d_1;
            this.s1d_1 = this.u1d_1;
            this.o1d_1 = this.r1d_1.p19_1.kotlinx$atomicfu$value;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.n8_1 = 9;
              continue $sm;
            }

            if (this.r1d_1.n1a()) {
              var tmp_2 = this;
              throw recoverStackTrace_0(_get_receiveException__foorc1(this.l1d_1));
            } else {
              this.n8_1 = 3;
              continue $sm;
            }

          case 3:
            this.p1d_1 = this.r1d_1.l19_1.atomicfu$getAndIncrement$long();
            var tmp0 = this.p1d_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_3 = this;
            var tmp0_0 = this.p1d_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_3.q1d_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!equalsLong(this.o1d_1.i10_1, id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this.r1d_1, id, this.o1d_1);
              if (tmp0_elvis_lhs == null) {
                this.n8_1 = 2;
                var tmp_4 = this;
                continue $sm;
              } else {
                this.t1d_1 = tmp0_elvis_lhs;
                this.n8_1 = 4;
                continue $sm;
              }
            } else {
              this.n8_1 = 5;
              continue $sm;
            }

          case 4:
            this.o1d_1 = this.t1d_1;
            this.n8_1 = 5;
            continue $sm;
          case 5:
            var updCellResult = updateCellReceive(this.r1d_1, this.o1d_1, this.q1d_1, this.p1d_1, this.s1d_1);
            if (updCellResult === get_SUSPEND()) {
              var tmp_5 = this;
              var tmp_6 = this.s1d_1;
              var tmp1_safe_receiver = (!(tmp_6 == null) ? isInterface(tmp_6, Waiter) : false) ? tmp_6 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this.r1d_1, tmp1_safe_receiver, this.o1d_1, this.q1d_1);
              }
              this.o1d_1;
              this.q1d_1;
              this.p1d_1;
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (updCellResult === get_FAILED()) {
                if (compare(this.p1d_1, this.r1d_1.m1a()) < 0) {
                  this.o1d_1.g1a();
                }
                this.n8_1 = 2;
                var tmp_7 = this;
                continue $sm;
              } else {
                if (updCellResult === get_SUSPEND_NO_WAITER()) {
                  var tmp0_1 = this.o1d_1;
                  var tmp2 = this.q1d_1;
                  var r = this.p1d_1;
                  this.n8_1 = 6;
                  suspendResult = receiveOnNoWaiterSuspend(this.l1d_1, tmp0_1, tmp2, r, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_8 = this;
                  this.o1d_1.g1a();
                  return (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
                }
              }
            }

          case 6:
            this.n1d_1 = suspendResult;
            this.n8_1 = 7;
            continue $sm;
          case 7:
            this.m1d_1 = this.n1d_1;
            this.n8_1 = 10;
            continue $sm;
          case 8:
            throw this.q8_1;
          case 9:
            if (false) {
              this.n8_1 = 1;
              continue $sm;
            }

            this.n8_1 = 10;
            continue $sm;
          case 10:
            return this.m1d_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 8) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function BufferedChannel(capacity, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    this.i19_1 = capacity;
    this.j19_1 = onUndeliveredElement;
    // Inline function 'kotlin.require' call
    if (!(this.i19_1 >= 0)) {
      var message = 'Invalid channel capacity: ' + this.i19_1 + ', should be >=0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.k19_1 = atomic$long$1(new Long(0, 0));
    this.l19_1 = atomic$long$1(new Long(0, 0));
    this.m19_1 = atomic$long$1(initialBufferEnd(this.i19_1));
    this.n19_1 = atomic$long$1(_get_bufferEndCounter__2d4hee(this));
    var firstSegment = new ChannelSegment(new Long(0, 0), null, this, 3);
    this.o19_1 = atomic$ref$1(firstSegment);
    this.p19_1 = atomic$ref$1(firstSegment);
    var tmp = this;
    var tmp_0;
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      var tmp_1 = get_NULL_SEGMENT();
      tmp_0 = tmp_1 instanceof ChannelSegment ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = firstSegment;
    }
    tmp.q19_1 = atomic$ref$1(tmp_0);
    var tmp_2 = this;
    var tmp_3;
    if (this.j19_1 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this);
    }
    tmp_2.r19_1 = tmp_3;
    this.s19_1 = atomic$ref$1(get_NO_CLOSE_CAUSE());
    this.t19_1 = atomic$ref$1(null);
  }
  protoOf(BufferedChannel).m1a = function () {
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var this_0 = this.k19_1.kotlinx$atomicfu$value;
    return bitwiseAnd(this_0, new Long(-1, 268435455));
  };
  protoOf(BufferedChannel).i1b = function () {
    return this.l19_1.kotlinx$atomicfu$value;
  };
  protoOf(BufferedChannel).w1d = function (element, $completion) {
    var tmp = new $sendCOROUTINE$(this, element, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(BufferedChannel).x1d = function (element) {
    if (shouldSendSuspend0(this, this.k19_1.kotlinx$atomicfu$value))
      return Companion_getInstance_0().y1d();
    var tmp4 = get_INTERRUPTED_SEND();
    var tmp$ret$4;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = this.o19_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.k19_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        var closed = _get_isClosedForSend0__kxgf9m(this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = divide(s, fromInt(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$2 = modulo(s, fromInt(other_0));
        var i = convertToInt(tmp$ret$2);
        if (!equalsLong(segment.i10_1, id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              tmp$ret$4 = Companion_getInstance_0().a1c(this.h1b());
              break $l$block_5;
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        switch (updateCellSend(this, segment, i, element, s, tmp4, closed)) {
          case 0:
            segment.g1a();
            tmp$ret$4 = Companion_getInstance_0().n1b(Unit_instance);
            break $l$block_5;
          case 1:
            tmp$ret$4 = Companion_getInstance_0().n1b(Unit_instance);
            break $l$block_5;
          case 2:
            if (closed) {
              segment.w19();
              tmp$ret$4 = Companion_getInstance_0().a1c(this.h1b());
              break $l$block_5;
            }

            var tmp2_safe_receiver = (!(tmp4 == null) ? isInterface(tmp4, Waiter) : false) ? tmp4 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(this, tmp2_safe_receiver, segment, i);
            }

            segment.w19();
            tmp$ret$4 = Companion_getInstance_0().y1d();
            break $l$block_5;
          case 4:
            if (compare(s, this.i1b()) < 0) {
              segment.g1a();
            }

            tmp$ret$4 = Companion_getInstance_0().a1c(this.h1b());
            break $l$block_5;
          case 5:
            segment.g1a();
            continue $l$loop_0;
          case 3:
            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(BufferedChannel).a1e = function (element) {
    var tmp4 = get_BUFFERED();
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = this.o19_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.k19_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        var closed = _get_isClosedForSend0__kxgf9m(this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = divide(s, fromInt(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$2 = modulo(s, fromInt(other_0));
        var i = convertToInt(tmp$ret$2);
        if (!equalsLong(segment.i10_1, id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              return Companion_getInstance_0().a1c(this.h1b());
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        switch (updateCellSend(this, segment, i, element, s, tmp4, closed)) {
          case 0:
            segment.g1a();
            return Companion_getInstance_0().n1b(Unit_instance);
          case 1:
            return Companion_getInstance_0().n1b(Unit_instance);
          case 2:
            if (closed) {
              segment.w19();
              return Companion_getInstance_0().a1c(this.h1b());
            }

            var tmp2_safe_receiver = (!(tmp4 == null) ? isInterface(tmp4, Waiter) : false) ? tmp4 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(this, tmp2_safe_receiver, segment, i);
            }

            var tmp0 = segment.i10_1;
            // Inline function 'kotlin.Long.times' call

            var other_1 = get_SEGMENT_SIZE();
            // Inline function 'kotlin.Long.plus' call

            var this_0 = multiply(tmp0, fromInt(other_1));
            var tmp$ret$5 = add(this_0, fromInt(i));
            this.e1c(tmp$ret$5);
            return Companion_getInstance_0().n1b(Unit_instance);
          case 4:
            if (compare(s, this.i1b()) < 0) {
              segment.g1a();
            }

            return Companion_getInstance_0().a1c(this.h1b());
          case 5:
            segment.g1a();
            continue $l$loop_0;
          case 3:
            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$3;
  };
  protoOf(BufferedChannel).q1b = function () {
  };
  protoOf(BufferedChannel).j1b = function () {
  };
  protoOf(BufferedChannel).b1e = function ($completion) {
    var tmp = new $receiveCOROUTINE$(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(BufferedChannel).c1e = function () {
    var r = this.l19_1.kotlinx$atomicfu$value;
    var sendersAndCloseStatusCur = this.k19_1.kotlinx$atomicfu$value;
    if (_get_isClosedForReceive0__f7qknl(this, sendersAndCloseStatusCur)) {
      return Companion_getInstance_0().a1c(this.l1a());
    }
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var s = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
    if (compare(r, s) >= 0)
      return Companion_getInstance_0().y1d();
    var tmp2 = get_INTERRUPTED_RCV();
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
      var segment = this.p19_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        if (this.n1a()) {
          tmp$ret$2 = Companion_getInstance_0().a1c(this.l1a());
          break $l$block_0;
        }
        var r_0 = this.l19_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = divide(r_0, fromInt(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$4 = modulo(r_0, fromInt(other_0));
        var i = convertToInt(tmp$ret$4);
        if (!equalsLong(segment.i10_1, id)) {
          var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var updCellResult = updateCellReceive(this, segment, i, r_0, tmp2);
        var tmp_0;
        if (updCellResult === get_SUSPEND()) {
          var tmp1_safe_receiver = (!(tmp2 == null) ? isInterface(tmp2, Waiter) : false) ? tmp2 : null;
          if (tmp1_safe_receiver == null)
            null;
          else {
            prepareReceiverForSuspension(this, tmp1_safe_receiver, segment, i);
          }
          var segm = segment;
          this.v19(r_0);
          segm.w19();
          tmp_0 = new ChannelResult(Companion_getInstance_0().y1d());
        } else if (updCellResult === get_FAILED()) {
          if (compare(r_0, this.m1a()) < 0) {
            segment.g1a();
          }
          continue $l$loop_0;
        } else if (updCellResult === get_SUSPEND_NO_WAITER()) {
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          segment.g1a();
          var element = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
          tmp_0 = new ChannelResult(Companion_getInstance_0().n1b(element));
        }
        tmp$ret$2 = tmp_0.z1d_1;
        break $l$block_0;
      }
    }
    return tmp$ret$2;
  };
  protoOf(BufferedChannel).e1c = function (globalCellIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    var segment = this.p19_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var r = this.l19_1.kotlinx$atomicfu$value;
      // Inline function 'kotlin.Long.plus' call
      var other = this.i19_1;
      var tmp0 = add(r, fromInt(other));
      // Inline function 'kotlin.math.max' call
      var b = _get_bufferEndCounter__2d4hee(this);
      var tmp$ret$2 = compare(tmp0, b) >= 0 ? tmp0 : b;
      if (compare(globalCellIndex, tmp$ret$2) < 0)
        return Unit_instance;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$3 = add(r, fromInt(1));
      if (!this.l19_1.atomicfu$compareAndSet(r, tmp$ret$3))
        continue $l$loop_0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = get_SEGMENT_SIZE();
      var id = divide(r, fromInt(other_0));
      // Inline function 'kotlin.Long.rem' call
      var other_1 = get_SEGMENT_SIZE();
      var tmp$ret$5 = modulo(r, fromInt(other_1));
      var i = convertToInt(tmp$ret$5);
      if (!equalsLong(segment.i10_1, id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var updCellResult = updateCellReceive(this, segment, i, r, null);
      if (updCellResult === get_FAILED()) {
        if (compare(r, this.m1a()) < 0) {
          segment.g1a();
        }
      } else {
        segment.g1a();
        var tmp1_safe_receiver = this.j19_1;
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE());
        }
        var tmp2_safe_receiver = tmp_0;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          throw tmp2_safe_receiver;
        }
      }
    }
  };
  protoOf(BufferedChannel).v19 = function (globalIndex) {
    if (_get_isRendezvousOrUnlimited__3mdufi(this))
      return Unit_instance;
    while (compare(_get_bufferEndCounter__2d4hee(this), globalIndex) <= 0) {
    }
    // Inline function 'kotlin.repeat' call
    var times = get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS();
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = _get_bufferEndCounter__2d4hee(this);
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var this_0 = this.n19_1.kotlinx$atomicfu$value;
        var ebCompleted = bitwiseAnd(this_0, new Long(-1, 1073741823));
        if (equalsLong(b, ebCompleted) && equalsLong(b, _get_bufferEndCounter__2d4hee(this)))
          return Unit_instance;
      }
       while (inductionVariable < times);
    var tmp0 = this.n19_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var tmp$ret$3 = bitwiseAnd(cur, new Long(-1, 1073741823));
        var upd = constructEBCompletedAndPauseFlag(tmp$ret$3, true);
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    while (true) {
      var b_0 = _get_bufferEndCounter__2d4hee(this);
      var ebCompletedAndBit = this.n19_1.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
      var ebCompleted_0 = bitwiseAnd(ebCompletedAndBit, new Long(-1, 1073741823));
      // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
      var pauseExpandBuffers = !equalsLong(bitwiseAnd(ebCompletedAndBit, new Long(0, 1073741824)), new Long(0, 0));
      if (equalsLong(b_0, ebCompleted_0) && equalsLong(b_0, _get_bufferEndCounter__2d4hee(this))) {
        var tmp0_0 = this.n19_1;
        $l$block_0: {
          // Inline function 'kotlinx.atomicfu.update' call
          while (true) {
            var cur_0 = tmp0_0.kotlinx$atomicfu$value;
            // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
            var tmp$ret$8 = bitwiseAnd(cur_0, new Long(-1, 1073741823));
            var upd_0 = constructEBCompletedAndPauseFlag(tmp$ret$8, false);
            if (tmp0_0.atomicfu$compareAndSet(cur_0, upd_0)) {
              break $l$block_0;
            }
          }
        }
        return Unit_instance;
      }
      if (!pauseExpandBuffers) {
        this.n19_1.atomicfu$compareAndSet(ebCompletedAndBit, constructEBCompletedAndPauseFlag(ebCompleted_0, true));
      }
    }
  };
  protoOf(BufferedChannel).d1e = function () {
    var tmp = BufferedChannel$registerSelectForReceive$ref();
    var tmp_0 = typeof tmp === 'function' ? tmp : THROW_CCE();
    var tmp_1 = BufferedChannel$processResultSelectReceiveCatching$ref();
    return new SelectClause1Impl(this, tmp_0, typeof tmp_1 === 'function' ? tmp_1 : THROW_CCE(), this.r19_1);
  };
  protoOf(BufferedChannel).i = function () {
    return new BufferedChannelIterator(this);
  };
  protoOf(BufferedChannel).l1a = function () {
    var tmp = this.s19_1.kotlinx$atomicfu$value;
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  protoOf(BufferedChannel).h1b = function () {
    var tmp0_elvis_lhs = this.l1a();
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException('Channel was closed') : tmp0_elvis_lhs;
  };
  protoOf(BufferedChannel).e1e = function () {
  };
  protoOf(BufferedChannel).f1e = function (cause) {
    return this.g1e(cause, false);
  };
  protoOf(BufferedChannel).fx = function (cause) {
    this.i1e(cause);
  };
  protoOf(BufferedChannel).i1e = function (cause) {
    return this.g1e(cause == null ? CancellationException_init_$Create$('Channel was cancelled') : cause, true);
  };
  protoOf(BufferedChannel).g1e = function (cause, cancel) {
    if (cancel) {
      markCancellationStarted(this);
    }
    var closedByThisOperation = this.s19_1.atomicfu$compareAndSet(get_NO_CLOSE_CAUSE(), cause);
    if (cancel) {
      markCancelled(this);
    } else {
      markClosed(this);
    }
    completeCloseOrCancel(this);
    // Inline function 'kotlin.also' call
    this.e1e();
    if (closedByThisOperation) {
      invokeCloseHandler(this);
    }
    return closedByThisOperation;
  };
  protoOf(BufferedChannel).f1c = function () {
    return false;
  };
  protoOf(BufferedChannel).d1c = function () {
    return _get_isClosedForSend0__kxgf9m(this, this.k19_1.kotlinx$atomicfu$value);
  };
  protoOf(BufferedChannel).n1a = function () {
    return _get_isClosedForReceive0__f7qknl(this, this.k19_1.kotlinx$atomicfu$value);
  };
  protoOf(BufferedChannel).g1c = function () {
    $l$loop: while (true) {
      var segment = this.p19_1.kotlinx$atomicfu$value;
      var r = this.i1b();
      var s = this.m1a();
      if (compare(s, r) <= 0)
        return false;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = divide(r, fromInt(other));
      if (!equalsLong(segment.i10_1, id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (compare(this.p19_1.kotlinx$atomicfu$value.i10_1, id) < 0) {
            return false;
          } else {
            continue $l$loop;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      segment.g1a();
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var tmp$ret$1 = modulo(r, fromInt(other_0));
      var i = convertToInt(tmp$ret$1);
      if (isCellNonEmpty(this, segment, i, r))
        return true;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = add(r, fromInt(1));
      this.l19_1.atomicfu$compareAndSet(r, tmp$ret$2);
    }
  };
  protoOf(BufferedChannel).toString = function () {
    var sb = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var this_0 = this.k19_1.kotlinx$atomicfu$value;
    var tmp0_subject = convertToInt(shiftRight(this_0, 60));
    if (tmp0_subject === 2) {
      sb.u7('closed,');
    } else if (tmp0_subject === 3) {
      sb.u7('cancelled,');
    }
    sb.u7('capacity=' + this.i19_1 + ',');
    sb.u7('data=[');
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = listOf([this.p19_1.kotlinx$atomicfu$value, this.o19_1.kotlinx$atomicfu$value, this.q19_1.kotlinx$atomicfu$value]);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (!(element === get_NULL_SEGMENT())) {
        destination.h(element);
      }
    }
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      var iterator = destination.i();
      if (!iterator.j())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.k();
      if (!iterator.j()) {
        tmp$ret$4 = minElem;
        break $l$block;
      }
      var minValue = minElem.i10_1;
      do {
        var e = iterator.k();
        var v = e.i10_1;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.j());
      tmp$ret$4 = minElem;
    }
    var firstSegment = tmp$ret$4;
    var r = this.i1b();
    var s = this.m1a();
    var segment = firstSegment;
    append_elements: while (true) {
      var inductionVariable = 0;
      var last_0 = get_SEGMENT_SIZE();
      if (inductionVariable < last_0)
        process_cell: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_0 = segment.i10_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_1 = multiply(tmp0_0, fromInt(other));
          var globalCellIndex = add(this_1, fromInt(i));
          if (compare(globalCellIndex, s) >= 0 && compare(globalCellIndex, r) >= 0)
            break append_elements;
          var cellState = segment.e19(i);
          var element_0 = segment.b19(i);
          var tmp;
          if (!(cellState == null) ? isInterface(cellState, CancellableContinuation) : false) {
            tmp = compare(globalCellIndex, r) < 0 && compare(globalCellIndex, s) >= 0 ? 'receive' : compare(globalCellIndex, s) < 0 && compare(globalCellIndex, r) >= 0 ? 'send' : 'cont';
          } else {
            if (!(cellState == null) ? isInterface(cellState, SelectInstance) : false) {
              tmp = compare(globalCellIndex, r) < 0 && compare(globalCellIndex, s) >= 0 ? 'onReceive' : compare(globalCellIndex, s) < 0 && compare(globalCellIndex, r) >= 0 ? 'onSend' : 'select';
            } else {
              if (cellState instanceof ReceiveCatching) {
                tmp = 'receiveCatching';
              } else {
                if (cellState instanceof SendBroadcast) {
                  tmp = 'sendBroadcast';
                } else {
                  if (cellState instanceof WaiterEB) {
                    tmp = 'EB(' + toString_0(cellState) + ')';
                  } else {
                    if (equals(cellState, get_RESUMING_BY_RCV()) ? true : equals(cellState, get_RESUMING_BY_EB())) {
                      tmp = 'resuming_sender';
                    } else {
                      if ((((((cellState == null ? true : equals(cellState, get_IN_BUFFER())) ? true : equals(cellState, get_DONE_RCV())) ? true : equals(cellState, get_POISONED())) ? true : equals(cellState, get_INTERRUPTED_RCV())) ? true : equals(cellState, get_INTERRUPTED_SEND())) ? true : equals(cellState, get_CHANNEL_CLOSED())) {
                        continue process_cell;
                      } else {
                        tmp = toString(cellState);
                      }
                    }
                  }
                }
              }
            }
          }
          var cellStateString = tmp;
          if (!(element_0 == null)) {
            sb.u7('(' + cellStateString + ',' + toString_0(element_0) + '),');
          } else {
            sb.u7(cellStateString + ',');
          }
        }
         while (inductionVariable < last_0);
      var tmp3_elvis_lhs = segment.c1a();
      var tmp_0;
      if (tmp3_elvis_lhs == null) {
        break append_elements;
      } else {
        tmp_0 = tmp3_elvis_lhs;
      }
      segment = tmp_0;
    }
    if (last(sb) === _Char___init__impl__6a9atx(44)) {
      sb.ib(sb.a() - 1 | 0);
    }
    sb.u7(']');
    return sb.toString();
  };
  function WaiterEB(waiter) {
    this.k1b_1 = waiter;
  }
  protoOf(WaiterEB).toString = function () {
    return 'WaiterEB(' + toString(this.k1b_1) + ')';
  };
  function initialBufferEnd(capacity) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    switch (capacity) {
      case 0:
        return new Long(0, 0);
      case 2147483647:
        return new Long(-1, 2147483647);
      default:
        return fromInt(capacity);
    }
  }
  function ReceiveCatching() {
  }
  function tryResume0(_this__u8e3s4, value, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_BufferedChannel_kt__d6uc4y();
    // Inline function 'kotlin.let' call
    var token = _this__u8e3s4.ez(value, null, onCancellation);
    var tmp;
    if (!(token == null)) {
      _this__u8e3s4.fz(token);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function constructEBCompletedAndPauseFlag(counter, pauseEB) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return add(pauseEB ? new Long(0, 1073741824) : new Long(0, 0), counter);
  }
  function constructSendersAndCloseStatus(counter, closeStatus) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return add(shiftLeft(fromInt(closeStatus), 60), counter);
  }
  function createSegmentFunction() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return createSegment$ref();
  }
  function createSegment(id, prev) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return new ChannelSegment(id, prev, prev.y18(), 0);
  }
  function createSegment$ref() {
    var l = function (p0, p1) {
      return createSegment(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  var properties_initialized_BufferedChannel_kt_58tjvw;
  function _init_properties_BufferedChannel_kt__d6uc4y() {
    if (!properties_initialized_BufferedChannel_kt_58tjvw) {
      properties_initialized_BufferedChannel_kt_58tjvw = true;
      NULL_SEGMENT = new ChannelSegment(new Long(-1, -1), null, null, 0);
      SEGMENT_SIZE = systemProp('kotlinx.coroutines.bufferedChannel.segmentSize', 32);
      EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS = systemProp('kotlinx.coroutines.bufferedChannel.expandBufferCompletionWaitIterations', 10000);
      BUFFERED = new Symbol('BUFFERED');
      IN_BUFFER = new Symbol('SHOULD_BUFFER');
      RESUMING_BY_RCV = new Symbol('S_RESUMING_BY_RCV');
      RESUMING_BY_EB = new Symbol('RESUMING_BY_EB');
      POISONED = new Symbol('POISONED');
      DONE_RCV = new Symbol('DONE_RCV');
      INTERRUPTED_SEND = new Symbol('INTERRUPTED_SEND');
      INTERRUPTED_RCV = new Symbol('INTERRUPTED_RCV');
      CHANNEL_CLOSED = new Symbol('CHANNEL_CLOSED');
      SUSPEND = new Symbol('SUSPEND');
      SUSPEND_NO_WAITER = new Symbol('SUSPEND_NO_WAITER');
      FAILED = new Symbol('FAILED');
      NO_RECEIVE_RESULT = new Symbol('NO_RECEIVE_RESULT');
      CLOSE_HANDLER_CLOSED = new Symbol('CLOSE_HANDLER_CLOSED');
      CLOSE_HANDLER_INVOKED = new Symbol('CLOSE_HANDLER_INVOKED');
      NO_CLOSE_CAUSE = new Symbol('NO_CLOSE_CAUSE');
    }
  }
  function Factory() {
    Factory_instance = this;
    this.j1e_1 = 2147483647;
    this.k1e_1 = 0;
    this.l1e_1 = -1;
    this.m1e_1 = -2;
    this.n1e_1 = -3;
    this.o1e_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.p1e_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp;
    switch (capacity) {
      case 0:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(0, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      case -1:
        // Inline function 'kotlin.require' call

        if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
          var message = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }

        tmp = new ConflatedBufferedChannel(1, BufferOverflow_DROP_OLDEST_getInstance(), onUndeliveredElement);
        break;
      case 2147483647:
        tmp = new BufferedChannel(2147483647, onUndeliveredElement);
        break;
      case -2:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(Factory_getInstance().p1e_1, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      default:
        tmp = onBufferOverflow === BufferOverflow_SUSPEND_getInstance() ? new BufferedChannel(capacity, onUndeliveredElement) : new ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement);
        break;
    }
    return tmp;
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw($this);
      tmp = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q1e_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed(cause) {
    Failed.call(this);
    this.q1e_1 = cause;
  }
  protoOf(Closed).equals = function (other) {
    var tmp;
    if (other instanceof Closed) {
      tmp = equals(this.q1e_1, other.q1e_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.q1e_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed).toString = function () {
    return 'Closed(' + toString_0(this.q1e_1) + ')';
  };
  function Companion() {
    Companion_instance_0 = this;
    this.m1b_1 = new Failed();
  }
  protoOf(Companion).n1b = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).y1d = function () {
    return _ChannelResult___init__impl__siwsuf(this.m1b_1);
  };
  protoOf(Companion).a1c = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed(cause));
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp;
    if (_ChannelResult___get_holder__impl__pm9gzw($this) instanceof Closed) {
      tmp = toString(_ChannelResult___get_holder__impl__pm9gzw($this));
    } else {
      tmp = 'Value(' + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.z1d_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_0();
    this.z1d_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.z1d_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.z1d_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.z1d_1, other);
  };
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function SendChannel() {
  }
  function ReceiveChannel() {
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.v1e_1 = _channel;
  }
  protoOf(ChannelCoroutine).d1e = function () {
    return this.v1e_1.d1e();
  };
  protoOf(ChannelCoroutine).f1e = function (cause) {
    return this.v1e_1.f1e(cause);
  };
  protoOf(ChannelCoroutine).i = function () {
    return this.v1e_1.i();
  };
  protoOf(ChannelCoroutine).b1e = function ($completion) {
    return this.v1e_1.b1e($completion);
  };
  protoOf(ChannelCoroutine).w1d = function (element, $completion) {
    return this.v1e_1.w1d(element, $completion);
  };
  protoOf(ChannelCoroutine).c1e = function () {
    return this.v1e_1.c1e();
  };
  protoOf(ChannelCoroutine).x1d = function (element) {
    return this.v1e_1.x1d(element);
  };
  protoOf(ChannelCoroutine).fx = function (cause) {
    if (this.tw())
      return Unit_instance;
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.aw() : null, null, this);
    } else {
      tmp = cause;
    }
    this.hx(tmp);
  };
  protoOf(ChannelCoroutine).r1e = function (cause, $super) {
    return this.gx(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).hx = function (cause) {
    var exception = this.yw(cause);
    this.v1e_1.fx(exception);
    this.kx(exception);
  };
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp;
    if (cause == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
      tmp = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', cause) : tmp0_elvis_lhs;
    }
    _this__u8e3s4.fx(tmp);
  }
  function trySendImpl($this, element, isSendOp) {
    return $this.j1f_1 === BufferOverflow_DROP_LATEST_getInstance() ? trySendDropLatest($this, element, isSendOp) : $this.a1e(element);
  }
  function trySendDropLatest($this, element, isSendOp) {
    var result = protoOf(BufferedChannel).x1d.call($this, element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result) || _ChannelResult___get_isClosed__impl__mg7kuu(result))
      return result;
    if (isSendOp) {
      var tmp0_safe_receiver = $this.j19_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        throw tmp1_safe_receiver;
      }
    }
    return Companion_getInstance_0().n1b(Unit_instance);
  }
  function ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    BufferedChannel.call(this, capacity, onUndeliveredElement);
    this.i1f_1 = capacity;
    this.j1f_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    if (!!(this.j1f_1 === BufferOverflow_SUSPEND_getInstance())) {
      var message = 'This implementation does not support suspension for senders, use ' + getKClass(BufferedChannel).z9() + ' instead';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.i1f_1 >= 1)) {
      var message_0 = 'Buffered channel capacity must be at least 1, but ' + this.i1f_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(ConflatedBufferedChannel).f1c = function () {
    return this.j1f_1.equals(BufferOverflow_DROP_OLDEST_getInstance());
  };
  protoOf(ConflatedBufferedChannel).w1d = function (element, $completion) {
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var this_0 = trySendImpl(this, element, true);
    // Inline function 'kotlin.contracts.contract' call
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (tmp instanceof Closed) {
      ChannelResult__exceptionOrNull_impl_16ei30(this_0);
      var tmp0_safe_receiver = this.j19_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, this.h1b());
        throw tmp1_safe_receiver;
      }
      throw this.h1b();
    }
    return Unit_instance;
  };
  protoOf(ConflatedBufferedChannel).x1d = function (element) {
    return trySendImpl(this, element, false);
  };
  function ProducerScope() {
  }
  function produce(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    onCompletion = onCompletion === VOID ? null : onCompletion;
    var channel = Channel(capacity, onBufferOverflow);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.zw(onCompletion);
    }
    coroutine.kw(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).xv = function () {
    return protoOf(ChannelCoroutine).xv.call(this);
  };
  protoOf(ProducerCoroutine).o1f = function (value) {
    this.v1e_1.h1e();
  };
  protoOf(ProducerCoroutine).yv = function (value) {
    return this.o1f(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).zv = function (cause, handled) {
    var processed = this.v1e_1.f1e(cause);
    if (!processed && !handled) {
      handleCoroutineException(this.vv_1, cause);
    }
  };
  protoOf(ProducerCoroutine).r1e = function (cause, $super) {
    return this.gx(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  function produce_0(_this__u8e3s4, context, capacity, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    return produce(_this__u8e3s4, context, capacity, BufferOverflow_SUSPEND_getInstance(), CoroutineStart_DEFAULT_getInstance(), null, block);
  }
  function flow(block) {
    return new SafeFlow(block);
  }
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this.p1f_1 = block;
  }
  protoOf(SafeFlow).q1f = function (collector, $completion) {
    return this.p1f_1(collector, $completion);
  };
  function emitAll(_this__u8e3s4, channel, $completion) {
    return emitAllImpl(_this__u8e3s4, channel, true, $completion);
  }
  function emitAllImpl(_this__u8e3s4, channel, consume, $completion) {
    var tmp = new $emitAllImplCOROUTINE$(_this__u8e3s4, channel, consume, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function receiveAsFlow(_this__u8e3s4) {
    return new ChannelAsFlow(_this__u8e3s4, false);
  }
  function markConsumed($this) {
    if ($this.j1g_1) {
      // Inline function 'kotlin.check' call
      if (!!$this.k1g_1.atomicfu$getAndSet(true)) {
        var message = 'ReceiveChannel.consumeAsFlow can be collected just once';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function $collectCOROUTINE$(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1g_1 = _this__u8e3s4;
    this.u1g_1 = collector;
  }
  protoOf($collectCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            if (this.t1g_1.w1g_1 === -3) {
              markConsumed(this.t1g_1);
              this.n8_1 = 2;
              suspendResult = emitAllImpl(this.u1g_1, this.t1g_1.i1g_1, this.t1g_1.j1g_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 1;
              suspendResult = protoOf(ChannelFlow).r1f.call(this.t1g_1, this.u1g_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.n8_1 = 3;
            continue $sm;
          case 2:
            this.n8_1 = 3;
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
  function ChannelAsFlow(channel, consume, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -3 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.i1g_1 = channel;
    this.j1g_1 = consume;
    this.k1g_1 = atomic$boolean$1(false);
  }
  protoOf(ChannelAsFlow).y1g = function (context, capacity, onBufferOverflow) {
    return new ChannelAsFlow(this.i1g_1, this.j1g_1, context, capacity, onBufferOverflow);
  };
  protoOf(ChannelAsFlow).z1g = function (scope, $completion) {
    return emitAllImpl(new SendingCollector(scope), this.i1g_1, this.j1g_1, $completion);
  };
  protoOf(ChannelAsFlow).a1h = function (scope) {
    markConsumed(this);
    var tmp;
    if (this.w1g_1 === -3) {
      tmp = this.i1g_1;
    } else {
      tmp = protoOf(ChannelFlow).a1h.call(this, scope);
    }
    return tmp;
  };
  protoOf(ChannelAsFlow).r1f = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$(this, collector, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ChannelAsFlow).b1h = function () {
    return 'channel=' + toString(this.i1g_1);
  };
  function $emitAllImplCOROUTINE$(_this__u8e3s4, channel, consume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1g_1 = _this__u8e3s4;
    this.b1g_1 = channel;
    this.c1g_1 = consume;
  }
  protoOf($emitAllImplCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 9;
            ensureActive_1(this.a1g_1);
            this.d1g_1 = null;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 7;
            this.o8_1 = 6;
            this.e1g_1 = this.b1g_1.i();
            this.n8_1 = 2;
            continue $sm;
          case 2:
            this.n8_1 = 3;
            suspendResult = this.e1g_1.b1c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            if (!suspendResult) {
              this.n8_1 = 5;
              continue $sm;
            }

            var element = this.e1g_1.k();
            this.n8_1 = 4;
            suspendResult = this.a1g_1.g1h(element, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.n8_1 = 2;
            continue $sm;
          case 5:
            this.o8_1 = 9;
            this.n8_1 = 8;
            continue $sm;
          case 6:
            this.o8_1 = 7;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof Error) {
              var e = this.q8_1;
              this.d1g_1 = e;
              throw e;
            } else {
              throw this.q8_1;
            }

          case 7:
            this.o8_1 = 9;
            var t = this.q8_1;
            if (this.c1g_1) {
              cancelConsumed(this.b1g_1, this.d1g_1);
            }

            throw t;
          case 8:
            this.o8_1 = 9;
            if (this.c1g_1) {
              cancelConsumed(this.b1g_1, this.d1g_1);
            }

            return Unit_instance;
          case 9:
            throw this.q8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o8_1 === 9) {
          throw e_0;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e_0;
        }
      }
     while (true);
  };
  function $collectCOROUTINE$_0(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p1h_1 = _this__u8e3s4;
    this.q1h_1 = collector;
  }
  protoOf($collectCOROUTINE$_0).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 5;
            var tmp_0 = this;
            tmp_0.r1h_1 = new SafeCollector(this.q1h_1, this.t8());
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 4;
            this.n8_1 = 2;
            suspendResult = this.p1h_1.q1f(this.r1h_1, this);
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
            this.r1h_1.x8();
            return Unit_instance;
          case 4:
            this.o8_1 = 5;
            var t = this.q8_1;
            this.r1h_1.x8();
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
  function AbstractFlow() {
  }
  protoOf(AbstractFlow).r1f = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_0(this, collector, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  function FlowCollector() {
  }
  function get_NO_VALUE() {
    _init_properties_SharedFlow_kt__umasnn();
    return NO_VALUE;
  }
  var NO_VALUE;
  function MutableSharedFlow(replay, extraBufferCapacity, onBufferOverflow) {
    replay = replay === VOID ? 0 : replay;
    extraBufferCapacity = extraBufferCapacity === VOID ? 0 : extraBufferCapacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    _init_properties_SharedFlow_kt__umasnn();
    // Inline function 'kotlin.require' call
    if (!(replay >= 0)) {
      var message = 'replay cannot be negative, but was ' + replay;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(extraBufferCapacity >= 0)) {
      var message_0 = 'extraBufferCapacity cannot be negative, but was ' + extraBufferCapacity;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(replay > 0 || extraBufferCapacity > 0 || onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()))) {
      var message_1 = 'replay or extraBufferCapacity must be positive with non-default onBufferOverflow strategy ' + onBufferOverflow.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var bufferCapacity0 = replay + extraBufferCapacity | 0;
    var bufferCapacity = bufferCapacity0 < 0 ? 2147483647 : bufferCapacity0;
    return new SharedFlowImpl(replay, bufferCapacity, onBufferOverflow);
  }
  function _get_head__d7jo8b($this) {
    var tmp0 = $this.f1i_1;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = $this.e1i_1;
    return compare(tmp0, b) <= 0 ? tmp0 : b;
  }
  function _get_replaySize__dxgnb1($this) {
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.g1i_1;
    var tmp$ret$0 = add(tmp0, fromInt(other));
    return convertToInt(subtract(tmp$ret$0, $this.e1i_1));
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.g1i_1 + $this.h1i_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.g1i_1;
    return add(tmp0, fromInt(other));
  }
  function _get_queueEndIndex__4m025l($this) {
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.g1i_1;
    var tmp0_0 = add(tmp0, fromInt(other));
    // Inline function 'kotlin.Long.plus' call
    var other_0 = $this.h1i_1;
    return add(tmp0_0, fromInt(other_0));
  }
  function tryEmitLocked($this, value) {
    if ($this.j1i_1 === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.g1i_1 >= $this.b1i_1 && compare($this.f1i_1, $this.e1i_1) <= 0) {
      switch ($this.c1i_1.m2_1) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
      }
    }
    enqueueLocked($this, value);
    $this.g1i_1 = $this.g1i_1 + 1 | 0;
    if ($this.g1i_1 > $this.b1i_1) {
      dropOldestLocked($this);
    }
    if (_get_replaySize__dxgnb1($this) > $this.a1i_1) {
      // Inline function 'kotlin.Long.plus' call
      var this_0 = $this.e1i_1;
      var tmp$ret$0 = add(this_0, fromInt(1));
      updateBufferLocked($this, tmp$ret$0, $this.f1i_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    // Inline function 'kotlinx.coroutines.assert' call
    if ($this.a1i_1 === 0)
      return true;
    enqueueLocked($this, value);
    $this.g1i_1 = $this.g1i_1 + 1 | 0;
    if ($this.g1i_1 > $this.a1i_1) {
      dropOldestLocked($this);
    }
    var tmp = $this;
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.g1i_1;
    tmp.f1i_1 = add(tmp0, fromInt(other));
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.d1i_1), _get_head__d7jo8b($this), null);
    $this.g1i_1 = $this.g1i_1 - 1 | 0;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var newHead = add(this_0, fromInt(1));
    if (compare($this.e1i_1, newHead) < 0)
      $this.e1i_1 = newHead;
    if (compare($this.f1i_1, newHead) < 0) {
      correctCollectorIndexesOnDropOldest($this, newHead);
    }
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.j1i_1 === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = $this.i1i_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element == null)) {
            if (compare(element.m1i_1, new Long(0, 0)) >= 0 && compare(element.m1i_1, newHead) < 0) {
              element.m1i_1 = newHead;
            }
          }
        }
      }
    }
    $this.f1i_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.d1i_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var tmp$ret$0 = add(this_0, fromInt(curSize));
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    // Inline function 'kotlin.check' call
    if (!(newSize > 0)) {
      var message = 'Buffer size overflow';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.also' call
    var this_0 = Array(newSize);
    $this.d1i_1 = this_0;
    var newBuffer = this_0;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__d7jo8b($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.Long.plus' call
        var tmp = add(head, fromInt(i));
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$6 = add(head, fromInt(i));
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$6));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.b11();
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$3;
    $l$block: {
      if (tryEmitLocked($this, value)) {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.y8(tmp$ret$1);
        resumes = findSlotsToResumeLocked($this, resumes);
        tmp$ret$3 = null;
        break $l$block;
      }
      var tmp0 = _get_head__d7jo8b($this);
      // Inline function 'kotlin.Long.plus' call
      var other = _get_totalSize__xhdb3o($this);
      var tmp$ret$4 = add(tmp0, fromInt(other));
      // Inline function 'kotlin.also' call
      var this_0 = new Emitter($this, tmp$ret$4, value, cancellable);
      enqueueLocked($this, this_0);
      $this.h1i_1 = $this.h1i_1 + 1 | 0;
      if ($this.b1i_1 === 0)
        resumes = findSlotsToResumeLocked($this, resumes);
      tmp$ret$3 = this_0;
    }
    var emitter = tmp$ret$3;
    if (emitter == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      disposeOnCancellation(cancellable, emitter);
    }
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var r = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (r == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$11 = _Result___init__impl__xyqfz8(Unit_instance);
        r.y8(tmp$ret$11);
      }
    }
    return cancellable.by();
  }
  function cancelEmitter($this, emitter) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (compare(emitter.p1i_1, _get_head__d7jo8b($this)) < 0)
      return Unit_instance;
    var buffer = ensureNotNull($this.d1i_1);
    if (!(getBufferAt(buffer, emitter.p1i_1) === emitter))
      return Unit_instance;
    setBufferAt(buffer, emitter.p1i_1, get_NO_VALUE());
    cleanupTailLocked($this);
    return Unit_instance;
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    // Inline function 'kotlin.comparisons.minOf' call
    var newHead = compare(newMinCollectorIndex, newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    // Inline function 'kotlinx.coroutines.assert' call
    var inductionVariable = _get_head__d7jo8b($this);
    if (compare(inductionVariable, newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = add(inductionVariable, new Long(1, 0));
        setBufferAt(ensureNotNull($this.d1i_1), index, null);
      }
       while (compare(inductionVariable, newHead) < 0);
    $this.e1i_1 = newReplayIndex;
    $this.f1i_1 = newMinCollectorIndex;
    $this.g1i_1 = convertToInt(subtract(newBufferEndIndex, newHead));
    $this.h1i_1 = convertToInt(subtract(newQueueEndIndex, newBufferEndIndex));
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function cleanupTailLocked($this) {
    if ($this.b1i_1 === 0 && $this.h1i_1 <= 1)
      return Unit_instance;
    var buffer = ensureNotNull($this.d1i_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.h1i_1 > 0) {
        var tmp0 = _get_head__d7jo8b($this);
        // Inline function 'kotlin.Long.plus' call
        var other = _get_totalSize__xhdb3o($this);
        // Inline function 'kotlin.Long.minus' call
        var this_0 = add(tmp0, fromInt(other));
        var tmp$ret$1 = subtract(this_0, fromInt(1));
        tmp = getBufferAt(buffer, tmp$ret$1) === get_NO_VALUE();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      $this.h1i_1 = $this.h1i_1 - 1 | 0;
      var tmp0_0 = _get_head__d7jo8b($this);
      // Inline function 'kotlin.Long.plus' call
      var other_0 = _get_totalSize__xhdb3o($this);
      var tmp$ret$2 = add(tmp0_0, fromInt(other_0));
      setBufferAt(buffer, tmp$ret$2, null);
    }
  }
  function tryTakeValue($this, slot) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var index = tryPeekLocked($this, slot);
    var tmp;
    if (compare(index, new Long(0, 0)) < 0) {
      tmp = get_NO_VALUE();
    } else {
      var oldIndex = slot.m1i_1;
      var newValue = getPeekedValueLockedAt($this, index);
      var tmp_0 = slot;
      // Inline function 'kotlin.Long.plus' call
      tmp_0.m1i_1 = add(index, fromInt(1));
      resumes = $this.s1i(oldIndex);
      tmp = newValue;
    }
    var value = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var resume = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (resume == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$5 = _Result___init__impl__xyqfz8(Unit_instance);
        resume.y8(tmp$ret$5);
      }
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.m1i_1;
    if (compare(index, _get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.b1i_1 > 0)
      return new Long(-1, -1);
    if (compare(index, _get_head__d7jo8b($this)) > 0)
      return new Long(-1, -1);
    if ($this.h1i_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.d1i_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.q1i_1;
    } else {
      tmp = item;
    }
    return tmp;
  }
  function awaitValue($this, slot, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.b11();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    $l$block: {
      var index = tryPeekLocked($this, slot);
      if (compare(index, new Long(0, 0)) < 0) {
        slot.n1i_1 = cancellable;
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.y8(tmp$ret$1);
        break $l$block;
      }
      slot.n1i_1 = cancellable;
    }
    return cancellable.by();
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.j1i_1 === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = $this.i1i_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element == null)) {
            $l$block_1: {
              var tmp0_elvis_lhs = element.n1i_1;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                break $l$block_1;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var cont = tmp;
              if (compare(tryPeekLocked($this, element), new Long(0, 0)) < 0) {
                break $l$block_1;
              }
              if (resumeCount >= resumes.length) {
                var tmp_0 = resumes;
                // Inline function 'kotlin.comparisons.maxOf' call
                var b = imul(2, resumes.length);
                var tmp$ret$2 = Math.max(2, b);
                resumes = copyOf(tmp_0, tmp$ret$2);
              }
              var tmp_1 = resumes;
              var tmp1 = resumeCount;
              resumeCount = tmp1 + 1 | 0;
              tmp_1[tmp1] = cont;
              element.n1i_1 = null;
            }
          }
        }
      }
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.o1i_1 = flow;
    this.p1i_1 = index;
    this.q1i_1 = value;
    this.r1i_1 = cont;
  }
  protoOf(Emitter).uz = function () {
    return cancelEmitter(this.o1i_1, this);
  };
  function $collectCOROUTINE$_1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b1j_1 = _this__u8e3s4;
    this.c1j_1 = collector;
  }
  protoOf($collectCOROUTINE$_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 13;
            this.d1j_1 = this.b1j_1.g1j();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 12;
            var tmp_0 = this.c1j_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.n8_1 = 2;
              suspendResult = this.c1j_1.j1j(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 3;
              continue $sm;
            }

          case 2:
            this.n8_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.f1j_1 = this.t8().a9(Key_instance_3);
            this.n8_1 = 4;
            continue $sm;
          case 4:
            if (!true) {
              this.n8_1 = 10;
              continue $sm;
            }

            this.n8_1 = 5;
            continue $sm;
          case 5:
            if (!true) {
              this.n8_1 = 8;
              continue $sm;
            }

            this.e1j_1 = tryTakeValue(this.b1j_1, this.d1j_1);
            if (!(this.e1j_1 === get_NO_VALUE())) {
              this.n8_1 = 8;
              continue $sm;
            } else {
              this.n8_1 = 6;
              continue $sm;
            }

          case 6:
            this.n8_1 = 7;
            suspendResult = awaitValue(this.b1j_1, this.d1j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.n8_1 = 5;
            continue $sm;
          case 8:
            var tmp0_safe_receiver = this.f1j_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            this.n8_1 = 9;
            var tmp_2 = this.e1j_1;
            suspendResult = this.c1j_1.g1h((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.n8_1 = 4;
            continue $sm;
          case 10:
            this.o8_1 = 13;
            this.n8_1 = 11;
            continue $sm;
          case 11:
            this.o8_1 = 13;
            this.b1j_1.k1j(this.d1j_1);
            return Unit_instance;
          case 12:
            this.o8_1 = 13;
            var t = this.q8_1;
            this.b1j_1.k1j(this.d1j_1);
            throw t;
          case 13:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 13) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.a1i_1 = replay;
    this.b1i_1 = bufferCapacity;
    this.c1i_1 = onBufferOverflow;
    this.d1i_1 = null;
    this.e1i_1 = new Long(0, 0);
    this.f1i_1 = new Long(0, 0);
    this.g1i_1 = 0;
    this.h1i_1 = 0;
  }
  protoOf(SharedFlowImpl).l1j = function () {
    var tmp = ensureNotNull(this.d1i_1);
    var tmp0 = this.e1i_1;
    // Inline function 'kotlin.Long.plus' call
    var other = _get_replaySize__dxgnb1(this);
    // Inline function 'kotlin.Long.minus' call
    var this_0 = add(tmp0, fromInt(other));
    var tmp$ret$1 = subtract(this_0, fromInt(1));
    var tmp_0 = getBufferAt(tmp, tmp$ret$1);
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(SharedFlowImpl).m1j = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_1(this, collector, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(SharedFlowImpl).r1f = function (collector, $completion) {
    return this.m1j(collector, $completion);
  };
  protoOf(SharedFlowImpl).n1j = function (value) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp;
    if (tryEmitLocked(this, value)) {
      resumes = findSlotsToResumeLocked(this, resumes);
      tmp = true;
    } else {
      tmp = false;
    }
    var emitted = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        cont.y8(tmp$ret$4);
      }
    }
    return emitted;
  };
  protoOf(SharedFlowImpl).g1h = function (value, $completion) {
    if (this.n1j(value))
      return Unit_instance;
    return emitSuspend(this, value, $completion);
  };
  protoOf(SharedFlowImpl).o1j = function () {
    var index = this.e1i_1;
    if (compare(index, this.f1i_1) < 0)
      this.f1i_1 = index;
    return index;
  };
  protoOf(SharedFlowImpl).s1i = function (oldIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (compare(oldIndex, this.f1i_1) > 0)
      return get_EMPTY_RESUMES();
    var head = _get_head__d7jo8b(this);
    // Inline function 'kotlin.Long.plus' call
    var other = this.g1i_1;
    var newMinCollectorIndex = add(head, fromInt(other));
    if (this.b1i_1 === 0 && this.h1i_1 > 0) {
      var tmp0 = newMinCollectorIndex;
      newMinCollectorIndex = add(tmp0, get_ONE());
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if (this.j1i_1 === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = this.i1i_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element == null)) {
            if (compare(element.m1i_1, new Long(0, 0)) >= 0 && compare(element.m1i_1, newMinCollectorIndex) < 0)
              newMinCollectorIndex = element.m1i_1;
          }
        }
      }
    }
    // Inline function 'kotlinx.coroutines.assert' call
    if (compare(newMinCollectorIndex, this.f1i_1) <= 0)
      return get_EMPTY_RESUMES();
    var newBufferEndIndex = _get_bufferEndIndex__d2rk18(this);
    var tmp;
    if (this.j1i_1 > 0) {
      var newBufferSize0 = convertToInt(subtract(newBufferEndIndex, newMinCollectorIndex));
      var tmp0_0 = this.h1i_1;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = this.b1i_1 - newBufferSize0 | 0;
      tmp = Math.min(tmp0_0, b);
    } else {
      tmp = this.h1i_1;
    }
    var maxResumeCount = tmp;
    var resumes = get_EMPTY_RESUMES();
    var tmp0_1 = newBufferEndIndex;
    // Inline function 'kotlin.Long.plus' call
    var other_0 = this.h1i_1;
    var newQueueEndIndex = add(tmp0_1, fromInt(other_0));
    if (maxResumeCount > 0) {
      // Inline function 'kotlin.arrayOfNulls' call
      resumes = Array(maxResumeCount);
      var resumeCount = 0;
      var buffer = ensureNotNull(this.d1i_1);
      var inductionVariable_0 = newBufferEndIndex;
      if (compare(inductionVariable_0, newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable_0;
          inductionVariable_0 = add(inductionVariable_0, new Long(1, 0));
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === get_NO_VALUE())) {
            if (!(emitter instanceof Emitter))
              THROW_CCE();
            var tmp_0 = resumes;
            var tmp2 = resumeCount;
            resumeCount = tmp2 + 1 | 0;
            tmp_0[tmp2] = emitter.r1i_1;
            setBufferAt(buffer, curEmitterIndex, get_NO_VALUE());
            setBufferAt(buffer, newBufferEndIndex, emitter.q1i_1);
            var tmp3 = newBufferEndIndex;
            newBufferEndIndex = add(tmp3, get_ONE());
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (compare(inductionVariable_0, newQueueEndIndex) < 0);
    }
    var newBufferSize1 = convertToInt(subtract(newBufferEndIndex, head));
    if (this.j1i_1 === 0)
      newMinCollectorIndex = newBufferEndIndex;
    var tmp0_2 = this.e1i_1;
    var tmp0_3 = newBufferEndIndex;
    // Inline function 'kotlin.comparisons.minOf' call
    var a = this.a1i_1;
    // Inline function 'kotlin.Long.minus' call
    var other_1 = Math.min(a, newBufferSize1);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_0 = subtract(tmp0_3, fromInt(other_1));
    var newReplayIndex = compare(tmp0_2, b_0) >= 0 ? tmp0_2 : b_0;
    if (this.b1i_1 === 0 && compare(newReplayIndex, newQueueEndIndex) < 0 && equals(getBufferAt(ensureNotNull(this.d1i_1), newReplayIndex), get_NO_VALUE())) {
      var tmp4 = newBufferEndIndex;
      newBufferEndIndex = add(tmp4, get_ONE());
      var tmp5 = newReplayIndex;
      newReplayIndex = add(tmp5, get_ONE());
    }
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(resumes.length === 0))
      resumes = findSlotsToResumeLocked(this, resumes);
    return resumes;
  };
  protoOf(SharedFlowImpl).p1j = function () {
    return new SharedFlowSlot();
  };
  protoOf(SharedFlowImpl).q1j = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return Array(size);
  };
  protoOf(SharedFlowImpl).e1h = function (context, capacity, onBufferOverflow) {
    return fuseSharedFlow(this, context, capacity, onBufferOverflow);
  };
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.m1i_1 = new Long(-1, -1);
    this.n1i_1 = null;
  }
  protoOf(SharedFlowSlot).r1j = function (flow) {
    if (compare(this.m1i_1, new Long(0, 0)) >= 0)
      return false;
    this.m1i_1 = flow.o1j();
    return true;
  };
  protoOf(SharedFlowSlot).s1j = function (flow) {
    return this.r1j(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  protoOf(SharedFlowSlot).t1j = function (flow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var oldIndex = this.m1i_1;
    this.m1i_1 = new Long(-1, -1);
    this.n1i_1 = null;
    return flow.s1i(oldIndex);
  };
  protoOf(SharedFlowSlot).u1j = function (flow) {
    return this.t1j(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  function getBufferAt(_this__u8e3s4, index) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[convertToInt(index) & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[convertToInt(index) & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  function fuseSharedFlow(_this__u8e3s4, context, capacity, onBufferOverflow) {
    _init_properties_SharedFlow_kt__umasnn();
    if ((capacity === 0 || capacity === -3) && onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
      return _this__u8e3s4;
    }
    return new ChannelFlowOperatorImpl(_this__u8e3s4, context, capacity, onBufferOverflow);
  }
  var properties_initialized_SharedFlow_kt_tmefor;
  function _init_properties_SharedFlow_kt__umasnn() {
    if (!properties_initialized_SharedFlow_kt_tmefor) {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    return new StateFlowImpl(value == null ? get_NULL() : value);
  }
  function updateState($this, expectedState, newState) {
    var curSequence;
    var curSlots;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var oldState = $this.z1j_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) && !equals(oldState, expectedState))
      return false;
    if (equals(oldState, newState))
      return true;
    $this.z1j_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.a1k_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.a1k_1 = curSequence;
    } else {
      $this.a1k_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.i1i_1;
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          if (element == null)
            null;
          else {
            element.c1k();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
      if ($this.a1k_1 === curSequence) {
        $this.a1k_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.a1k_1;
      curSlots = $this.i1i_1;
    }
  }
  function $collectCOROUTINE$_2(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1k_1 = _this__u8e3s4;
    this.m1k_1 = collector;
  }
  protoOf($collectCOROUTINE$_2).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 12;
            this.n1k_1 = this.l1k_1.g1j();
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 11;
            var tmp_0 = this.m1k_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.n8_1 = 2;
              suspendResult = this.m1k_1.j1j(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 3;
              continue $sm;
            }

          case 2:
            this.n8_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.q1k_1 = this.t8().a9(Key_instance_3);
            this.o1k_1 = null;
            this.n8_1 = 4;
            continue $sm;
          case 4:
            if (!true) {
              this.n8_1 = 9;
              continue $sm;
            }

            this.p1k_1 = this.l1k_1.z1j_1.kotlinx$atomicfu$value;
            var tmp0_safe_receiver = this.q1k_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            if (this.o1k_1 == null || !equals(this.o1k_1, this.p1k_1)) {
              this.n8_1 = 5;
              var tmp0 = get_NULL();
              var value = this.p1k_1;
              var tmp_2;
              if (value === tmp0) {
                tmp_2 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
              } else {
                tmp_2 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
              }
              suspendResult = this.m1k_1.g1h(tmp_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 6;
              continue $sm;
            }

          case 5:
            this.o1k_1 = this.p1k_1;
            this.n8_1 = 6;
            continue $sm;
          case 6:
            if (!this.n1k_1.s1k()) {
              this.n8_1 = 7;
              suspendResult = this.n1k_1.r1k(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 8;
              continue $sm;
            }

          case 7:
            this.n8_1 = 8;
            continue $sm;
          case 8:
            this.n8_1 = 4;
            continue $sm;
          case 9:
            this.o8_1 = 12;
            this.n8_1 = 10;
            continue $sm;
          case 10:
            this.o8_1 = 12;
            this.l1k_1.k1j(this.n1k_1);
            return Unit_instance;
          case 11:
            this.o8_1 = 12;
            var t = this.q8_1;
            this.l1k_1.k1j(this.n1k_1);
            throw t;
          case 12:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 12) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.z1j_1 = atomic$ref$1(initialState);
    this.a1k_1 = 0;
  }
  protoOf(StateFlowImpl).t1k = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).v1 = function () {
    var tmp0 = get_NULL();
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var value = this.z1j_1.kotlinx$atomicfu$value;
    var tmp;
    if (value === tmp0) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return tmp;
  };
  protoOf(StateFlowImpl).u1k = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  protoOf(StateFlowImpl).n1j = function (value) {
    this.t1k(value);
    return true;
  };
  protoOf(StateFlowImpl).g1h = function (value, $completion) {
    this.t1k(value);
    return Unit_instance;
  };
  protoOf(StateFlowImpl).m1j = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_2(this, collector, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(StateFlowImpl).r1f = function (collector, $completion) {
    return this.m1j(collector, $completion);
  };
  protoOf(StateFlowImpl).p1j = function () {
    return new StateFlowSlot();
  };
  protoOf(StateFlowImpl).q1j = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return Array(size);
  };
  protoOf(StateFlowImpl).e1h = function (context, capacity, onBufferOverflow) {
    return fuseStateFlow(this, context, capacity, onBufferOverflow);
  };
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.b1k_1 = new WorkaroundAtomicReference(null);
  }
  protoOf(StateFlowSlot).v1k = function (flow) {
    if (!(get_value(this.b1k_1) == null))
      return false;
    set_value(this.b1k_1, get_NONE());
    return true;
  };
  protoOf(StateFlowSlot).s1j = function (flow) {
    return this.v1k(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).w1k = function (flow) {
    set_value(this.b1k_1, null);
    return get_EMPTY_RESUMES();
  };
  protoOf(StateFlowSlot).u1j = function (flow) {
    return this.w1k(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).c1k = function () {
    // Inline function 'kotlinx.coroutines.internal.loop' call
    var this_0 = this.b1k_1;
    while (true) {
      var state = get_value(this_0);
      if (state == null)
        return Unit_instance;
      else if (state === get_PENDING())
        return Unit_instance;
      else if (state === get_NONE()) {
        if (this.b1k_1.u1k(state, get_PENDING()))
          return Unit_instance;
      } else {
        if (this.b1k_1.u1k(state, get_NONE())) {
          // Inline function 'kotlin.coroutines.resume' call
          var this_1 = state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          // Inline function 'kotlin.Companion.success' call
          var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
          this_1.y8(tmp$ret$0);
          return Unit_instance;
        }
      }
    }
  };
  protoOf(StateFlowSlot).s1k = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.assert' call
    return ensureNotNull(this.b1k_1.y1k(get_NONE())) === get_PENDING();
  };
  protoOf(StateFlowSlot).r1k = function ($completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.b11();
    $l$block: {
      // Inline function 'kotlinx.coroutines.assert' call
      if (this.b1k_1.u1k(get_NONE(), cancellable)) {
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      cancellable.y8(tmp$ret$3);
    }
    return cancellable.by();
  };
  function fuseStateFlow(_this__u8e3s4, context, capacity, onBufferOverflow) {
    _init_properties_StateFlow_kt__eu9yi5();
    // Inline function 'kotlinx.coroutines.assert' call
    if (((0 <= capacity ? capacity <= 1 : false) || capacity === -2) && onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance())) {
      return _this__u8e3s4;
    }
    return fuseSharedFlow(_this__u8e3s4, context, capacity, onBufferOverflow);
  }
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (!properties_initialized_StateFlow_kt_nsqikx) {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function get_EMPTY_RESUMES() {
    _init_properties_AbstractSharedFlow_kt__h2xygb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  function AbstractSharedFlow() {
    SynchronizedObject.call(this);
    this.i1i_1 = null;
    this.j1i_1 = 0;
    this.k1i_1 = 0;
    this.l1i_1 = null;
  }
  protoOf(AbstractSharedFlow).g1j = function () {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var curSlots = this.i1i_1;
    var tmp;
    if (curSlots == null) {
      // Inline function 'kotlin.also' call
      var this_0 = this.q1j(2);
      this.i1i_1 = this_0;
      tmp = this_0;
    } else {
      var tmp_0;
      if (this.j1i_1 >= curSlots.length) {
        // Inline function 'kotlin.also' call
        var this_1 = copyOf(curSlots, imul(2, curSlots.length));
        this.i1i_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = curSlots;
      }
      tmp = tmp_0;
    }
    var slots = tmp;
    var index = this.k1i_1;
    var slot;
    $l$loop: while (true) {
      var tmp0_elvis_lhs = slots[index];
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_2 = this.p1j();
        slots[index] = this_2;
        tmp_1 = this_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      slot = tmp_1;
      index = index + 1 | 0;
      if (index >= slots.length)
        index = 0;
      if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).s1j(this))
        break $l$loop;
    }
    this.k1i_1 = index;
    this.j1i_1 = this.j1i_1 + 1 | 0;
    subscriptionCount = this.l1i_1;
    var slot_0 = slot;
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.l1l(1);
    return slot_0;
  };
  protoOf(AbstractSharedFlow).k1j = function (slot) {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.j1i_1 = this.j1i_1 - 1 | 0;
    subscriptionCount = this.l1i_1;
    if (this.j1i_1 === 0)
      this.k1i_1 = 0;
    var resumes = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).u1j(this);
    var inductionVariable = 0;
    var last = resumes.length;
    while (inductionVariable < last) {
      var cont = resumes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        cont.y8(tmp$ret$4);
      }
    }
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.l1l(-1);
  };
  function AbstractSharedFlowSlot() {
  }
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function _init_properties_AbstractSharedFlow_kt__h2xygb() {
    if (!properties_initialized_AbstractSharedFlow_kt_2mpafr) {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_RESUMES = Array(0);
    }
  }
  function FusibleFlow() {
  }
  function ChannelFlowOperatorImpl(flow, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -3 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlowOperator.call(this, flow, context, capacity, onBufferOverflow);
  }
  protoOf(ChannelFlowOperatorImpl).y1g = function (context, capacity, onBufferOverflow) {
    return new ChannelFlowOperatorImpl(this.t1l_1, context, capacity, onBufferOverflow);
  };
  protoOf(ChannelFlowOperatorImpl).u1l = function (collector, $completion) {
    return this.t1l_1.r1f(collector, $completion);
  };
  function collectWithContextUndispatched($this, collector, newContext, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.t8();
    var originalContextCollector = withUndispatchedContextCollector(collector, tmp$ret$0);
    return withContextUndispatched(newContext, originalContextCollector, VOID, ChannelFlowOperator$collectWithContextUndispatched$slambda_0($this, null), $completion);
  }
  function ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation) {
    this.d1m_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).f1m = function (it, $completion) {
    var tmp = this.g1m(it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).f9 = function (p1, $completion) {
    return this.f1m((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.d1m_1.u1l(this.e1m_1, this);
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
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).g1m = function (it, completion) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this.d1m_1, completion);
    i.e1m_1 = it;
    return i;
  };
  function ChannelFlowOperator$collectWithContextUndispatched$slambda_0(this$0, resultContinuation) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.f1m(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$_3(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p1m_1 = _this__u8e3s4;
    this.q1m_1 = collector;
  }
  protoOf($collectCOROUTINE$_3).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 7;
            if (this.p1m_1.w1g_1 === -3) {
              var tmp_0 = this;
              tmp_0.s1m_1 = this.t8();
              this.r1m_1 = newCoroutineContext_0(this.s1m_1, this.p1m_1.v1g_1);
              if (equals(this.r1m_1, this.s1m_1)) {
                this.n8_1 = 6;
                suspendResult = this.p1m_1.u1l(this.q1m_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.n8_1 = 1;
                continue $sm;
              }
            } else {
              this.n8_1 = 3;
              continue $sm;
            }

          case 1:
            if (equals(this.r1m_1.a9(Key_instance), this.s1m_1.a9(Key_instance))) {
              this.n8_1 = 5;
              suspendResult = collectWithContextUndispatched(this.p1m_1, this.q1m_1, this.r1m_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 2;
              continue $sm;
            }

          case 2:
            this.n8_1 = 3;
            continue $sm;
          case 3:
            this.n8_1 = 4;
            suspendResult = protoOf(ChannelFlow).r1f.call(this.p1m_1, this.q1m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            return Unit_instance;
          case 6:
            return Unit_instance;
          case 7:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 7) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function ChannelFlowOperator(flow, context, capacity, onBufferOverflow) {
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.t1l_1 = flow;
  }
  protoOf(ChannelFlowOperator).z1g = function (scope, $completion) {
    return this.u1l(new SendingCollector(scope), $completion);
  };
  protoOf(ChannelFlowOperator).r1f = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_3(this, collector, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ChannelFlowOperator).toString = function () {
    return toString(this.t1l_1) + ' -> ' + protoOf(ChannelFlow).toString.call(this);
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation) {
    this.b1n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).d1n = function (it, $completion) {
    var tmp = this.e1n(it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).f9 = function (p1, $completion) {
    return this.d1n((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.b1n_1.z1g(this.c1n_1, this);
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
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).e1n = function (it, completion) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this.b1n_1, completion);
    i.c1n_1 = it;
    return i;
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this$0, resultContinuation) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.d1n(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    this.n1n_1 = $collector;
    this.o1n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$collect$slambda).q1n = function ($this$coroutineScope, $completion) {
    var tmp = this.r1n($this$coroutineScope, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ChannelFlow$collect$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$collect$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = emitAll(this.n1n_1, this.o1n_1.a1h(this.p1n_1), this);
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
  protoOf(ChannelFlow$collect$slambda).r1n = function ($this$coroutineScope, completion) {
    var i = new ChannelFlow$collect$slambda(this.n1n_1, this.o1n_1, completion);
    i.p1n_1 = $this$coroutineScope;
    return i;
  };
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.q1n($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this.v1g_1 = context;
    this.w1g_1 = capacity;
    this.x1g_1 = onBufferOverflow;
    // Inline function 'kotlinx.coroutines.assert' call
  }
  protoOf(ChannelFlow).c1h = function () {
    return ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this, null);
  };
  protoOf(ChannelFlow).d1h = function () {
    return this.w1g_1 === -3 ? -2 : this.w1g_1;
  };
  protoOf(ChannelFlow).e1h = function (context, capacity, onBufferOverflow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var newContext = context.lf(this.v1g_1);
    var newCapacity;
    var newOverflow;
    if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
      newCapacity = capacity;
      newOverflow = onBufferOverflow;
    } else {
      var tmp;
      if (this.w1g_1 === -3) {
        tmp = capacity;
      } else if (capacity === -3) {
        tmp = this.w1g_1;
      } else if (this.w1g_1 === -2) {
        tmp = capacity;
      } else if (capacity === -2) {
        tmp = this.w1g_1;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        // Inline function 'kotlinx.coroutines.assert' call
        var sum = this.w1g_1 + capacity | 0;
        tmp = sum >= 0 ? sum : 2147483647;
      }
      newCapacity = tmp;
      newOverflow = this.x1g_1;
    }
    if (equals(newContext, this.v1g_1) && newCapacity === this.w1g_1 && newOverflow.equals(this.x1g_1))
      return this;
    return this.y1g(newContext, newCapacity, newOverflow);
  };
  protoOf(ChannelFlow).a1h = function (scope) {
    return produce(scope, this.v1g_1, this.d1h(), this.x1g_1, CoroutineStart_ATOMIC_getInstance(), VOID, this.c1h());
  };
  protoOf(ChannelFlow).r1f = function (collector, $completion) {
    return coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $completion);
  };
  protoOf(ChannelFlow).b1h = function () {
    return null;
  };
  protoOf(ChannelFlow).toString = function () {
    var props = ArrayList_init_$Create$(4);
    var tmp0_safe_receiver = this.b1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      props.h(tmp0_safe_receiver);
    }
    if (!(this.v1g_1 === EmptyCoroutineContext_getInstance())) {
      props.h('context=' + toString(this.v1g_1));
    }
    if (!(this.w1g_1 === -3)) {
      props.h('capacity=' + this.w1g_1);
    }
    if (!this.x1g_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.h('onBufferOverflow=' + this.x1g_1.toString());
    }
    return get_classSimpleName(this) + '[' + joinToString(props, ', ') + ']';
  };
  function withUndispatchedContextCollector(_this__u8e3s4, emitContext) {
    var tmp;
    var tmp_0;
    if (_this__u8e3s4 instanceof SendingCollector) {
      tmp_0 = true;
    } else {
      tmp_0 = _this__u8e3s4 instanceof NopCollector;
    }
    if (tmp_0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = new UndispatchedContextCollector(_this__u8e3s4, emitContext);
    }
    return tmp;
  }
  function withContextUndispatched(newContext, value, countOrElement, block, $completion) {
    countOrElement = countOrElement === VOID ? threadContextElements(newContext) : countOrElement;
    // Inline function 'kotlinx.coroutines.withCoroutineContext' call
    // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
    var completion = new StackFrameContinuation($completion, newContext);
    return startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, value, completion);
  }
  function UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation) {
    this.a1o_1 = $downstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UndispatchedContextCollector$emitRef$slambda).c1o = function (it, $completion) {
    var tmp = this.d1o(it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).f9 = function (p1, $completion) {
    return this.c1o((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.a1o_1.g1h(this.b1o_1, this);
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
  protoOf(UndispatchedContextCollector$emitRef$slambda).d1o = function (it, completion) {
    var i = new UndispatchedContextCollector$emitRef$slambda(this.a1o_1, completion);
    i.b1o_1 = it;
    return i;
  };
  function UndispatchedContextCollector$emitRef$slambda_0($downstream, resultContinuation) {
    var i = new UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation);
    var l = function (it, $completion) {
      return i.c1o(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UndispatchedContextCollector(downstream, emitContext) {
    this.e1o_1 = emitContext;
    this.f1o_1 = threadContextElements(this.e1o_1);
    var tmp = this;
    tmp.g1o_1 = UndispatchedContextCollector$emitRef$slambda_0(downstream, null);
  }
  protoOf(UndispatchedContextCollector).g1h = function (value, $completion) {
    return withContextUndispatched(this.e1o_1, value, this.f1o_1, this.g1o_1, $completion);
  };
  function StackFrameContinuation(uCont, context) {
    this.h1o_1 = uCont;
    this.i1o_1 = context;
  }
  protoOf(StackFrameContinuation).t8 = function () {
    return this.i1o_1;
  };
  protoOf(StackFrameContinuation).y8 = function (result) {
    this.h1o_1.y8(result);
  };
  function scopedFlow(block) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new scopedFlow$$inlined$unsafeFlow$1(block);
  }
  function flowScope(block, $completion) {
    var coroutine = new FlowCoroutine($completion.t8(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function FlowCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(FlowCoroutine).jx = function (cause) {
    if (cause instanceof ChildCancelledException)
      return true;
    return this.lx(cause);
  };
  function scopedFlow$o$collect$slambda($block, $$this$unsafeFlow, resultContinuation) {
    this.v1o_1 = $block;
    this.w1o_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(scopedFlow$o$collect$slambda).q1n = function ($this$flowScope, $completion) {
    var tmp = this.r1n($this$flowScope, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(scopedFlow$o$collect$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(scopedFlow$o$collect$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.v1o_1(this.x1o_1, this.w1o_1, this);
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
  protoOf(scopedFlow$o$collect$slambda).r1n = function ($this$flowScope, completion) {
    var i = new scopedFlow$o$collect$slambda(this.v1o_1, this.w1o_1, completion);
    i.x1o_1 = $this$flowScope;
    return i;
  };
  function scopedFlow$o$collect$slambda_0($block, $$this$unsafeFlow, resultContinuation) {
    var i = new scopedFlow$o$collect$slambda($block, $$this$unsafeFlow, resultContinuation);
    var l = function ($this$flowScope, $completion) {
      return i.q1n($this$flowScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$_4(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g1p_1 = _this__u8e3s4;
    this.h1p_1 = collector;
  }
  protoOf($collectCOROUTINE$_4).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var $this$unsafeFlow = this.h1p_1;
            this.n8_1 = 1;
            suspendResult = flowScope(scopedFlow$o$collect$slambda_0(this.g1p_1.i1p_1, $this$unsafeFlow, null), this);
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
  function scopedFlow$$inlined$unsafeFlow$1($block) {
    this.i1p_1 = $block;
  }
  protoOf(scopedFlow$$inlined$unsafeFlow$1).j1p = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_4(this, collector, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(scopedFlow$$inlined$unsafeFlow$1).r1f = function (collector, $completion) {
    return this.j1p(collector, $completion);
  };
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda(this$0, $collector, $value, resultContinuation) {
    this.s1p_1 = this$0;
    this.t1p_1 = $collector;
    this.u1p_1 = $value;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).q1n = function ($this$launch, $completion) {
    var tmp = this.r1n($this$launch, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            suspendResult = this.s1p_1.a1q_1(this.t1p_1, this.u1p_1, this);
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
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).r1n = function ($this$launch, completion) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda(this.s1p_1, this.t1p_1, this.u1p_1, completion);
    i.v1p_1 = $this$launch;
    return i;
  };
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda_0(this$0, $collector, $value, resultContinuation) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda(this$0, $collector, $value, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.q1n($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda($previousFlow, $this_coroutineScope, this$0, $collector, resultContinuation) {
    this.j1q_1 = $previousFlow;
    this.k1q_1 = $this_coroutineScope;
    this.l1q_1 = this$0;
    this.m1q_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).c1o = function (value, $completion) {
    var tmp = this.d1o(value, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).f9 = function (p1, $completion) {
    return this.c1o((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            var tmp0_safe_receiver = this.j1q_1._v;
            if (tmp0_safe_receiver == null) {
              this.o1q_1 = null;
              this.n8_1 = 2;
              continue $sm;
            } else {
              this.p1q_1 = tmp0_safe_receiver;
              var $this$apply = this.p1q_1;
              $this$apply.fx(new ChildCancelledException());
              this.n8_1 = 1;
              suspendResult = $this$apply.cx(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.o1q_1 = this.p1q_1;
            this.n8_1 = 2;
            continue $sm;
          case 2:
            var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
            this.j1q_1._v = launch(this.k1q_1, VOID, tmp_0, ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda_0(this.l1q_1, this.m1q_1, this.n1q_1, null));
            return Unit_instance;
          case 3:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 3) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).d1o = function (value, completion) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda(this.j1q_1, this.k1q_1, this.l1q_1, this.m1q_1, completion);
    i.n1q_1 = value;
    return i;
  };
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda_0($previousFlow, $this_coroutineScope, this$0, $collector, resultContinuation) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda($previousFlow, $this_coroutineScope, this$0, $collector, resultContinuation);
    var l = function (value, $completion) {
      return i.c1o(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.q1q_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).g1h = function (value, $completion) {
    return this.q1q_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).v2 = function () {
    return this.q1q_1;
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
  function ChannelFlowTransformLatest$flowCollect$slambda(this$0, $collector, resultContinuation) {
    this.z1q_1 = this$0;
    this.a1r_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).q1n = function ($this$coroutineScope, $completion) {
    var tmp = this.r1n($this$coroutineScope, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).f9 = function (p1, $completion) {
    return this.q1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var previousFlow = {_v: null};
            this.n8_1 = 1;
            var tmp_0 = ChannelFlowTransformLatest$flowCollect$slambda$slambda_0(previousFlow, this.b1r_1, this.z1q_1, this.a1r_1, null);
            suspendResult = this.z1q_1.t1l_1.r1f(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).r1n = function ($this$coroutineScope, completion) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda(this.z1q_1, this.a1r_1, completion);
    i.b1r_1 = $this$coroutineScope;
    return i;
  };
  function ChannelFlowTransformLatest$flowCollect$slambda_0(this$0, $collector, resultContinuation) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda(this$0, $collector, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.q1n($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlowTransformLatest(transform, flow, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -2 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlowOperator.call(this, flow, context, capacity, onBufferOverflow);
    this.a1q_1 = transform;
  }
  protoOf(ChannelFlowTransformLatest).y1g = function (context, capacity, onBufferOverflow) {
    return new ChannelFlowTransformLatest(this.a1q_1, this.t1l_1, context, capacity, onBufferOverflow);
  };
  protoOf(ChannelFlowTransformLatest).c1r = function (collector, $completion) {
    // Inline function 'kotlinx.coroutines.assert' call
    return coroutineScope(ChannelFlowTransformLatest$flowCollect$slambda_0(this, collector, null), $completion);
  };
  protoOf(ChannelFlowTransformLatest).u1l = function (collector, $completion) {
    return this.c1r(collector, $completion);
  };
  function NopCollector() {
  }
  protoOf(NopCollector).d1r = function (value, $completion) {
    return Unit_instance;
  };
  protoOf(NopCollector).g1h = function (value, $completion) {
    return this.d1r((value == null ? true : !(value == null)) ? value : THROW_CCE(), $completion);
  };
  var NopCollector_instance;
  function NopCollector_getInstance() {
    return NopCollector_instance;
  }
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  function get_DONE() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return DONE;
  }
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (!properties_initialized_NullSurrogate_kt_39v8bl) {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.kf(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.u1h_1)) {
      // Inline function 'kotlin.error' call
      var message = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + toString(_this__u8e3s4.t1h_1) + ',\n') + ('\t\tbut emission happened in ' + toString(currentContext) + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    $l$1: do {
      $l$0: do {
        if ($this === null)
          return null;
        if ($this === collectJob_0)
          return $this;
        if (!($this instanceof ScopeCoroutine))
          return $this;
        var tmp0 = $this.qw();
        var tmp1 = collectJob_0;
        $this = tmp0;
        collectJob_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.u1();
      var collectElement = $this_checkContext.t1h_1.a9(key);
      var tmp;
      if (!(key === Key_instance_3)) {
        return !(element === collectElement) ? -2147483648 : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var message = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + toString_0(emissionParentJob) + ', expected child of ' + toString_0(collectJob) + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function SendingCollector(channel) {
    this.e1r_1 = channel;
  }
  protoOf(SendingCollector).g1h = function (value, $completion) {
    return this.e1r_1.w1d(value, $completion);
  };
  function buffer(_this__u8e3s4, capacity, onBufferOverflow) {
    capacity = capacity === VOID ? -2 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    // Inline function 'kotlin.require' call
    if (!(capacity >= 0 || capacity === -2 || capacity === -1)) {
      var message = 'Buffer size should be non-negative, BUFFERED, or CONFLATED, but was ' + capacity;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(!(capacity === -1) || onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()))) {
      var message_0 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var capacity_0 = capacity;
    var onBufferOverflow_0 = onBufferOverflow;
    if (capacity_0 === -1) {
      capacity_0 = 0;
      onBufferOverflow_0 = BufferOverflow_DROP_OLDEST_getInstance();
    }
    var tmp;
    if (isInterface(_this__u8e3s4, FusibleFlow)) {
      tmp = _this__u8e3s4.f1h(VOID, capacity_0, onBufferOverflow_0);
    } else {
      tmp = new ChannelFlowOperatorImpl(_this__u8e3s4, VOID, capacity_0, onBufferOverflow_0);
    }
    return tmp;
  }
  function debounce(_this__u8e3s4, timeout) {
    return debounce_0(_this__u8e3s4, toDelayMillis(timeout));
  }
  function debounce_0(_this__u8e3s4, timeoutMillis) {
    // Inline function 'kotlin.require' call
    if (!(compare(timeoutMillis, new Long(0, 0)) >= 0)) {
      var message = 'Debounce timeout should not be negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (equalsLong(timeoutMillis, new Long(0, 0)))
      return _this__u8e3s4;
    return debounceInternal(_this__u8e3s4, debounce$lambda(timeoutMillis));
  }
  function debounceInternal(_this__u8e3s4, timeoutMillisSelector) {
    return scopedFlow(debounceInternal$slambda_0(timeoutMillisSelector, _this__u8e3s4, null));
  }
  function debounce$lambda($timeoutMillis) {
    return function (it) {
      return $timeoutMillis;
    };
  }
  function debounceInternal$slambda$slambda$slambda($this_produce, resultContinuation) {
    this.n1r_1 = $this_produce;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda$slambda).c1o = function (value, $completion) {
    var tmp = this.d1o(value, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(debounceInternal$slambda$slambda$slambda).f9 = function (p1, $completion) {
    return this.c1o((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(debounceInternal$slambda$slambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            var tmp0_elvis_lhs = this.o1r_1;
            suspendResult = this.n1r_1.w1d(tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs, this);
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
  protoOf(debounceInternal$slambda$slambda$slambda).d1o = function (value, completion) {
    var i = new debounceInternal$slambda$slambda$slambda(this.n1r_1, completion);
    i.o1r_1 = value;
    return i;
  };
  function debounceInternal$slambda$slambda$slambda_0($this_produce, resultContinuation) {
    var i = new debounceInternal$slambda$slambda$slambda($this_produce, resultContinuation);
    var l = function (value, $completion) {
      return i.c1o(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.p1r_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).g1h = function (value, $completion) {
    return this.p1r_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).v2 = function () {
    return this.p1r_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
    return hashCode(this.v2());
  };
  function debounceInternal$slambda$slambda($this_debounceInternal, resultContinuation) {
    this.y1r_1 = $this_debounceInternal;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda).a1s = function ($this$produce, $completion) {
    var tmp = this.b1s($this$produce, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(debounceInternal$slambda$slambda).f9 = function (p1, $completion) {
    return this.a1s((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(debounceInternal$slambda$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            var tmp_0 = debounceInternal$slambda$slambda$slambda_0(this.z1r_1, null);
            suspendResult = this.y1r_1.r1f(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
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
  protoOf(debounceInternal$slambda$slambda).b1s = function ($this$produce, completion) {
    var i = new debounceInternal$slambda$slambda(this.y1r_1, completion);
    i.z1r_1 = $this$produce;
    return i;
  };
  function debounceInternal$slambda$slambda_0($this_debounceInternal, resultContinuation) {
    var i = new debounceInternal$slambda$slambda($this_debounceInternal, resultContinuation);
    var l = function ($this$produce, $completion) {
      return i.a1s($this$produce, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function debounceInternal$slambda$slambda_1($downstream, $lastValue, resultContinuation) {
    this.k1s_1 = $downstream;
    this.l1s_1 = $lastValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda_1).m1s = function ($completion) {
    var tmp = this.n1s($completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(debounceInternal$slambda$slambda_1).o1s = function ($completion) {
    return this.m1s($completion);
  };
  protoOf(debounceInternal$slambda$slambda_1).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            this.n8_1 = 1;
            var tmp0 = get_NULL();
            var value = this.l1s_1._v;
            var tmp_0;
            if (value === tmp0) {
              tmp_0 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
            } else {
              tmp_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
            }

            suspendResult = this.k1s_1.g1h(tmp_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l1s_1._v = null;
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
  protoOf(debounceInternal$slambda$slambda_1).n1s = function (completion) {
    return new debounceInternal$slambda$slambda_1(this.k1s_1, this.l1s_1, completion);
  };
  function debounceInternal$slambda$slambda_2($downstream, $lastValue, resultContinuation) {
    var i = new debounceInternal$slambda$slambda_1($downstream, $lastValue, resultContinuation);
    var l = function ($completion) {
      return i.m1s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function debounceInternal$slambda$slambda_3($lastValue, $downstream, resultContinuation) {
    this.x1s_1 = $lastValue;
    this.y1s_1 = $downstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda_3).b1t = function (value, $completion) {
    var tmp = this.c1t(value, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(debounceInternal$slambda$slambda_3).f9 = function (p1, $completion) {
    return this.b1t(p1 instanceof ChannelResult ? p1.z1d_1 : THROW_CCE(), $completion);
  };
  protoOf(debounceInternal$slambda$slambda_3).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            var this_0 = this.z1s_1;
            var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw(this_0);
            if (!(tmp_0 instanceof Failed)) {
              var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw(this_0);
              var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
              this.x1s_1._v = it;
            }

            this.a1t_1 = this_0;
            var tmp_2 = _ChannelResult___get_holder__impl__pm9gzw(this.a1t_1);
            if (tmp_2 instanceof Failed) {
              var tmp0_safe_receiver = ChannelResult__exceptionOrNull_impl_16ei30(this.a1t_1);
              if (tmp0_safe_receiver == null)
                null;
              else {
                throw tmp0_safe_receiver;
              }
              if (!(this.x1s_1._v == null)) {
                this.n8_1 = 1;
                var tmp0 = get_NULL();
                var value = this.x1s_1._v;
                var tmp_3;
                if (value === tmp0) {
                  tmp_3 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
                } else {
                  tmp_3 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
                }
                suspendResult = this.y1s_1.g1h(tmp_3, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.n8_1 = 2;
                continue $sm;
              }
            } else {
              this.n8_1 = 3;
              continue $sm;
            }

          case 1:
            this.n8_1 = 2;
            continue $sm;
          case 2:
            this.x1s_1._v = get_DONE();
            this.n8_1 = 3;
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
  protoOf(debounceInternal$slambda$slambda_3).c1t = function (value, completion) {
    var i = new debounceInternal$slambda$slambda_3(this.x1s_1, this.y1s_1, completion);
    i.z1s_1 = value;
    return i;
  };
  function debounceInternal$slambda$slambda_4($lastValue, $downstream, resultContinuation) {
    var i = new debounceInternal$slambda$slambda_3($lastValue, $downstream, resultContinuation);
    var l = function (value, $completion) {
      return i.b1t(value.z1d_1, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function debounceInternal$slambda($timeoutMillisSelector, $this_debounceInternal, resultContinuation) {
    this.l1t_1 = $timeoutMillisSelector;
    this.m1t_1 = $this_debounceInternal;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda).s1t = function ($this$scopedFlow, downstream, $completion) {
    var tmp = this.t1t($this$scopedFlow, downstream, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(debounceInternal$slambda).u1t = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.s1t(tmp, (!(p2 == null) ? isInterface(p2, FlowCollector) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(debounceInternal$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 7;
            var tmp_0 = this;
            tmp_0.q1t_1 = produce_0(this.n1t_1, VOID, VOID, debounceInternal$slambda$slambda_0(this.m1t_1, null));
            this.p1t_1 = {_v: null};
            this.n8_1 = 1;
            continue $sm;
          case 1:
            if (!!(this.p1t_1._v === get_DONE())) {
              this.n8_1 = 6;
              continue $sm;
            }

            this.r1t_1 = {_v: new Long(0, 0)};
            if (!(this.p1t_1._v == null)) {
              var tmp0 = get_NULL();
              var value = this.p1t_1._v;
              var tmp_1;
              if (value === tmp0) {
                tmp_1 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
              } else {
                tmp_1 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
              }
              this.r1t_1._v = this.l1t_1(tmp_1);
              if (!(compare(this.r1t_1._v, new Long(0, 0)) >= 0)) {
                var message = 'Debounce timeout should not be negative';
                throw IllegalArgumentException_init_$Create$(toString(message));
              }
              if (equalsLong(this.r1t_1._v, new Long(0, 0))) {
                this.n8_1 = 2;
                var tmp0_0 = get_NULL();
                var value_0 = this.p1t_1._v;
                var tmp_2;
                if (value_0 === tmp0_0) {
                  tmp_2 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
                } else {
                  tmp_2 = (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE();
                }
                suspendResult = this.o1t_1.g1h(tmp_2, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.n8_1 = 3;
                continue $sm;
              }
            } else {
              this.n8_1 = 4;
              continue $sm;
            }

          case 2:
            this.p1t_1._v = null;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            this.n8_1 = 4;
            continue $sm;
          case 4:
            var $this$run = new SelectImplementation(this.t8());
            if (!(this.p1t_1._v == null)) {
              var tmp_3 = this.r1t_1._v;
              onTimeout($this$run, tmp_3, debounceInternal$slambda$slambda_2(this.o1t_1, this.p1t_1, null));
            }

            var tmp_4 = this.q1t_1.d1e();
            $this$run.v1t(tmp_4, debounceInternal$slambda$slambda_4(this.p1t_1, this.o1t_1, null));
            this.n8_1 = 5;
            suspendResult = $this$run.w1t(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.n8_1 = 1;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 7) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(debounceInternal$slambda).t1t = function ($this$scopedFlow, downstream, completion) {
    var i = new debounceInternal$slambda(this.l1t_1, this.m1t_1, completion);
    i.n1t_1 = $this$scopedFlow;
    i.o1t_1 = downstream;
    return i;
  };
  function debounceInternal$slambda_0($timeoutMillisSelector, $this_debounceInternal, resultContinuation) {
    var i = new debounceInternal$slambda($timeoutMillisSelector, $this_debounceInternal, resultContinuation);
    var l = function ($this$scopedFlow, downstream, $completion) {
      return i.s1t($this$scopedFlow, downstream, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ensureActive_1(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof ThrowingCollector)
      throw _this__u8e3s4.x1t_1;
  }
  function ThrowingCollector() {
  }
  var DEFAULT_CONCURRENCY;
  function mapLatest(_this__u8e3s4, transform) {
    _init_properties_Merge_kt__cbpr96();
    return transformLatest(_this__u8e3s4, mapLatest$slambda_0(transform, null));
  }
  function transformLatest(_this__u8e3s4, transform) {
    _init_properties_Merge_kt__cbpr96();
    return new ChannelFlowTransformLatest(transform, _this__u8e3s4);
  }
  function mapLatest$slambda($transform, resultContinuation) {
    this.g1u_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(mapLatest$slambda).j1u = function ($this$transformLatest, it, $completion) {
    var tmp = this.k1u($this$transformLatest, it, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(mapLatest$slambda).u1t = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.j1u(tmp, (p2 == null ? true : !(p2 == null)) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(mapLatest$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            this.n8_1 = 1;
            suspendResult = this.g1u_1(this.i1u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.n8_1 = 2;
            suspendResult = this.h1u_1.g1h(ARGUMENT, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 3) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  protoOf(mapLatest$slambda).k1u = function ($this$transformLatest, it, completion) {
    var i = new mapLatest$slambda(this.g1u_1, completion);
    i.h1u_1 = $this$transformLatest;
    i.i1u_1 = it;
    return i;
  };
  function mapLatest$slambda_0($transform, resultContinuation) {
    var i = new mapLatest$slambda($transform, resultContinuation);
    var l = function ($this$transformLatest, it, $completion) {
      return i.j1u($this$transformLatest, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  var properties_initialized_Merge_kt_dhn6vs;
  function _init_properties_Merge_kt__cbpr96() {
    if (!properties_initialized_Merge_kt_dhn6vs) {
      properties_initialized_Merge_kt_dhn6vs = true;
      DEFAULT_CONCURRENCY = systemProp('kotlinx.coroutines.flow.defaultConcurrency', 16, 1, 2147483647);
    }
  }
  function $onSubscriptionCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1u_1 = _this__u8e3s4;
  }
  protoOf($onSubscriptionCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 7;
            var tmp_0 = this;
            tmp_0.u1u_1 = new SafeCollector(this.t1u_1.h1j_1, this.t8());
            this.n8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 6;
            this.n8_1 = 2;
            suspendResult = this.t1u_1.i1j_1(this.u1u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o8_1 = 7;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            this.o8_1 = 7;
            this.u1u_1.x8();
            var tmp_1 = this.t1u_1.h1j_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.n8_1 = 4;
              suspendResult = this.t1u_1.h1j_1.j1j(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 5;
              continue $sm;
            }

          case 4:
            this.n8_1 = 5;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            this.o8_1 = 7;
            var t = this.q8_1;
            this.u1u_1.x8();
            throw t;
          case 7:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 7) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function SubscribedFlowCollector() {
  }
  protoOf(SubscribedFlowCollector).j1j = function ($completion) {
    var tmp = new $onSubscriptionCOROUTINE$(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  function filterNotNull(_this__u8e3s4) {
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new filterNotNull$$inlined$unsafeTransform$1(_this__u8e3s4);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.v1u_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).g1h = function (value, $completion) {
    return this.v1u_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).v2 = function () {
    return this.v1u_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).equals = function (other) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).hashCode = function () {
    return hashCode(this.v2());
  };
  function filterNotNull$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.e1v_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(filterNotNull$o$collect$slambda).i1v = function (value, $completion) {
    var tmp = this.j1v(value, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(filterNotNull$o$collect$slambda).f9 = function (p1, $completion) {
    return this.i1v((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(filterNotNull$o$collect$slambda).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 5;
            var tmp_0 = this;
            tmp_0.h1v_1 = this.e1v_1;
            var tmp_1 = this;
            tmp_1.g1v_1 = this.f1v_1;
            this.n8_1 = 1;
            continue $sm;
          case 1:
            var $this$unsafeTransform = this.h1v_1;
            var value = this.g1v_1;
            if (!(value == null)) {
              this.n8_1 = 3;
              suspendResult = $this$unsafeTransform.g1h(value, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 2;
              continue $sm;
            }

          case 2:
            if (false) {
              this.n8_1 = 1;
              continue $sm;
            }

            this.n8_1 = 4;
            continue $sm;
          case 3:
            this.n8_1 = 4;
            continue $sm;
          case 4:
            return Unit_instance;
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
  protoOf(filterNotNull$o$collect$slambda).j1v = function (value, completion) {
    var i = new filterNotNull$o$collect$slambda(this.e1v_1, completion);
    i.f1v_1 = value;
    return i;
  };
  function filterNotNull$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new filterNotNull$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.i1v(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$_5(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s1v_1 = _this__u8e3s4;
    this.t1v_1 = collector;
  }
  protoOf($collectCOROUTINE$_5).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 2;
            var $this$unsafeFlow = this.t1v_1;
            this.n8_1 = 1;
            var tmp_0 = filterNotNull$o$collect$slambda_0($this$unsafeFlow, null);
            suspendResult = this.s1v_1.u1v_1.r1f(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_0), this);
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
  function filterNotNull$$inlined$unsafeTransform$1($this) {
    this.u1v_1 = $this;
  }
  protoOf(filterNotNull$$inlined$unsafeTransform$1).j1p = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_5(this, collector, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(filterNotNull$$inlined$unsafeTransform$1).r1f = function (collector, $completion) {
    return this.j1p(collector, $completion);
  };
  function collectLatest(_this__u8e3s4, action, $completion) {
    return collect(buffer(mapLatest(_this__u8e3s4, action), 0), $completion);
  }
  function collect(_this__u8e3s4, $completion) {
    return _this__u8e3s4.r1f(NopCollector_instance, $completion);
  }
  function OpDescriptor() {
  }
  function set_value(_this__u8e3s4, value) {
    return _this__u8e3s4.k13(value);
  }
  function get_value(_this__u8e3s4) {
    return _this__u8e3s4.j13();
  }
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.i10_1 = id;
    this.j10_1 = atomic$int$1(pointers << 16);
  }
  protoOf(Segment).x19 = function () {
    return this.j10_1.kotlinx$atomicfu$value === this.z18() && !this.e1a();
  };
  protoOf(Segment).y19 = function () {
    var tmp0 = this.j10_1;
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.addConditionally' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        if (!(!(cur === this.z18()) || this.e1a())) {
          tmp$ret$1 = false;
          break $l$block_0;
        }
        if (tmp0.atomicfu$compareAndSet(cur, cur + 65536 | 0)) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(Segment).z19 = function () {
    return this.j10_1.atomicfu$addAndGet(-65536) === this.z18() && !this.e1a();
  };
  protoOf(Segment).w19 = function () {
    if (this.j10_1.atomicfu$incrementAndGet() === this.z18()) {
      this.q3();
    }
  };
  function close(_this__u8e3s4) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return cur;
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (next === null) {
        if (cur.h1a())
          return cur;
      } else {
        cur = next;
      }
    }
  }
  function _SegmentOrClosed___init__impl__jnexvb(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _SegmentOrClosed___get_isClosed__impl__qmxmlo($this) {
    return _get_value__a43j40($this) === get_CLOSED();
  }
  function _SegmentOrClosed___get_segment__impl__jvcr9l($this) {
    var tmp;
    if (_get_value__a43j40($this) === get_CLOSED()) {
      var message = 'Does not contain segment';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      var tmp_0 = _get_value__a43j40($this);
      tmp = tmp_0 instanceof Segment ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function SegmentOrClosed__toString_impl_pzb2an($this) {
    return 'SegmentOrClosed(value=' + toString_0($this) + ')';
  }
  function SegmentOrClosed__hashCode_impl_4855hs($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function SegmentOrClosed__equals_impl_6erq1g($this, other) {
    if (!(other instanceof SegmentOrClosed))
      return false;
    var tmp0_other_with_cast = other instanceof SegmentOrClosed ? other.h1c_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SegmentOrClosed(value) {
    this.h1c_1 = value;
  }
  protoOf(SegmentOrClosed).toString = function () {
    return SegmentOrClosed__toString_impl_pzb2an(this.h1c_1);
  };
  protoOf(SegmentOrClosed).hashCode = function () {
    return SegmentOrClosed__hashCode_impl_4855hs(this.h1c_1);
  };
  protoOf(SegmentOrClosed).equals = function (other) {
    return SegmentOrClosed__equals_impl_6erq1g(this.h1c_1, other);
  };
  function _get_nextOrClosed__w0gmuv($this) {
    return $this.a1a_1.kotlinx$atomicfu$value;
  }
  function _get_aliveSegmentLeft__mr4ndu($this) {
    var cur = $this.f1a();
    while (!(cur === null) && cur.x19())
      cur = cur.b1a_1.kotlinx$atomicfu$value;
    return cur;
  }
  function _get_aliveSegmentRight__7ulr0b($this) {
    // Inline function 'kotlinx.coroutines.assert' call
    var cur = ensureNotNull($this.c1a());
    while (cur.x19()) {
      var tmp0_elvis_lhs = cur.c1a();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return cur;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      cur = tmp;
    }
    return cur;
  }
  function access$_get_nextOrClosed__ywzond($this) {
    return _get_nextOrClosed__w0gmuv($this);
  }
  function ConcurrentLinkedListNode(prev) {
    this.a1a_1 = atomic$ref$1(null);
    this.b1a_1 = atomic$ref$1(prev);
  }
  protoOf(ConcurrentLinkedListNode).c1a = function () {
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
    // Inline function 'kotlin.let' call
    var it = access$_get_nextOrClosed__ywzond(this);
    var tmp;
    if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
      return null;
    } else {
      tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
    }
    return tmp;
  };
  protoOf(ConcurrentLinkedListNode).d1a = function (value) {
    return this.a1a_1.atomicfu$compareAndSet(null, value);
  };
  protoOf(ConcurrentLinkedListNode).e1a = function () {
    return this.c1a() == null;
  };
  protoOf(ConcurrentLinkedListNode).f1a = function () {
    return this.b1a_1.kotlinx$atomicfu$value;
  };
  protoOf(ConcurrentLinkedListNode).g1a = function () {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    this.b1a_1.kotlinx$atomicfu$value = null;
  };
  protoOf(ConcurrentLinkedListNode).h1a = function () {
    return this.a1a_1.atomicfu$compareAndSet(null, get_CLOSED());
  };
  protoOf(ConcurrentLinkedListNode).q3 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.e1a())
      return Unit_instance;
    $l$loop_0: while (true) {
      var prev = _get_aliveSegmentLeft__mr4ndu(this);
      var next = _get_aliveSegmentRight__7ulr0b(this);
      var tmp0 = next.b1a_1;
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          var upd = cur === null ? null : prev;
          if (tmp0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
      if (!(prev === null))
        prev.a1a_1.kotlinx$atomicfu$value = next;
      if (next.x19() && !next.e1a())
        continue $l$loop_0;
      if (!(prev === null) && prev.x19())
        continue $l$loop_0;
      return Unit_instance;
    }
  };
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    $l$loop: while (compare(cur.i10_1, id) < 0 || cur.x19()) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (!(next == null)) {
        cur = next;
        continue $l$loop;
      }
      // Inline function 'kotlin.Long.plus' call
      var this_1 = cur.i10_1;
      var newTail = createNewSegment(add(this_1, fromInt(1)), cur);
      if (cur.d1a(newTail)) {
        if (cur.x19()) {
          cur.q3();
        }
        cur = newTail;
      }
    }
    return _SegmentOrClosed___init__impl__jnexvb(cur);
  }
  function access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy() {
    return get_CLOSED();
  }
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function _init_properties_ConcurrentLinkedList_kt__5gcgzy() {
    if (!properties_initialized_ConcurrentLinkedList_kt_kwt434) {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function handleUncaughtCoroutineException(context, exception) {
    var tmp0_iterator = get_platformExceptionHandlers().i();
    while (tmp0_iterator.j()) {
      var handler = tmp0_iterator.k();
      try {
        handler.m12(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _ = $p;
          return Unit_instance;
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith' call
      var state = toState_0(result, onCancellation);
      if (_this__u8e3s4.wz_1.i12(_this__u8e3s4.t8())) {
        _this__u8e3s4.yz_1 = state;
        _this__u8e3s4.e10_1 = 1;
        _this__u8e3s4.wz_1.j12(_this__u8e3s4.t8(), _this__u8e3s4);
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().h13();
          if (false && eventLoop.c13()) {
            break $l$block;
          }
          var tmp_0;
          if (eventLoop.b13()) {
            _this__u8e3s4.yz_1 = state;
            _this__u8e3s4.e10_1 = 1;
            eventLoop.a13(_this__u8e3s4);
            tmp_0 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.d13(true);
            try {
              var tmp$ret$4;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.t8().a9(Key_instance_3);
                if (!(job == null) && !job.xv()) {
                  var cause = job.ww();
                  _this__u8e3s4.d11(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.y8(tmp$ret$2);
                  tmp$ret$4 = true;
                  break $l$block_0;
                }
                tmp$ret$4 = false;
              }
              if (!tmp$ret$4) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                _this__u8e3s4.xz_1;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.zz_1;
                _this__u8e3s4.xz_1.y8(result);
              }
              $l$loop: while (eventLoop.z12()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.o11(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.e13(true);
            }
            tmp_0 = false;
          }
        }
      }
      tmp = Unit_instance;
    } else {
      _this__u8e3s4.y8(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.a10_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.wz_1 = dispatcher;
    this.xz_1 = continuation;
    this.yz_1 = get_UNDEFINED();
    this.zz_1 = threadContextElements(this.t8());
    this.a10_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).t8 = function () {
    return this.xz_1.t8();
  };
  protoOf(DispatchedContinuation).d10 = function () {
    return !(this.a10_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).v1v = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.a10_1;
    while (true) {
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).l12 = function () {
    this.v1v();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z10();
    }
  };
  protoOf(DispatchedContinuation).b10 = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.a10_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === null) {
        this.a10_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (state instanceof CancellableContinuationImpl) {
          if (this.a10_1.atomicfu$compareAndSet(state, get_REUSABLE_CLAIMED())) {
            return state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          }
        } else {
          if (state !== get_REUSABLE_CLAIMED()) {
            if (!(state instanceof Error)) {
              // Inline function 'kotlin.error' call
              var message = 'Inconsistent state ' + toString_0(state);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).j11 = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.a10_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.a10_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.require' call
          if (!this.a10_1.atomicfu$compareAndSet(state, null)) {
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          // Inline function 'kotlin.error' call
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).f10 = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.a10_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.a10_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.a10_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).c11 = function () {
    var state = this.yz_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.yz_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).a11 = function () {
    return this;
  };
  protoOf(DispatchedContinuation).y8 = function (result) {
    var context = this.xz_1.t8();
    var state = toState_0(result);
    if (this.wz_1.i12(context)) {
      this.yz_1 = state;
      this.e10_1 = 0;
      this.wz_1.j12(context, this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().h13();
        if (false && eventLoop.c13()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.b13()) {
          this.yz_1 = state;
          this.e10_1 = 0;
          eventLoop.a13(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.d13(true);
          try {
            this.t8();
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.zz_1;
            this.xz_1.y8(result);
            $l$loop: while (eventLoop.z12()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.o11(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.e13(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).d11 = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.g12_1(cause);
    }
  };
  protoOf(DispatchedContinuation).r18 = function (context, value) {
    this.yz_1 = value;
    this.e10_1 = 1;
    this.wz_1.k12(context, this);
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.wz_1.toString() + ', ' + toDebugString(this.xz_1) + ']';
  };
  function yieldUndispatched(_this__u8e3s4) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
      // Inline function 'kotlinx.coroutines.assert' call
      var eventLoop = ThreadLocalEventLoop_getInstance().h13();
      if (true && eventLoop.c13()) {
        tmp$ret$1 = false;
        break $l$block;
      }
      var tmp;
      if (eventLoop.b13()) {
        _this__u8e3s4.yz_1 = Unit_instance;
        _this__u8e3s4.e10_1 = 1;
        eventLoop.a13(_this__u8e3s4);
        tmp = true;
      } else {
        // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
        eventLoop.d13(true);
        try {
          _this__u8e3s4.n11();
          $l$loop: while (eventLoop.z12()) {
          }
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            _this__u8e3s4.o11(e, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.e13(true);
        }
        tmp = false;
      }
      tmp$ret$1 = tmp;
    }
    return tmp$ret$1;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.e10_1 = resumeMode;
  }
  protoOf(DispatchedTask).d11 = function (takenState, cause) {
  };
  protoOf(DispatchedTask).i11 = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).l11 = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cw_1;
  };
  protoOf(DispatchedTask).n11 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    var taskContext = get_taskContext(this);
    var fatalException = null;
    try {
      var tmp = this.a11();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.xz_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.zz_1;
      var context = continuation.t8();
      var state = this.c11();
      var exception = this.l11(state);
      var job = exception == null && get_isCancellableMode(this.e10_1) ? context.a9(Key_instance_3) : null;
      if (!(job == null) && !job.xv()) {
        var cause = job.ww();
        this.d11(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.y8(tmp$ret$1);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.y8(tmp$ret$3);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.i11(state);
          var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
          continuation.y8(tmp$ret$5);
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        // Inline function 'kotlinx.coroutines.afterTask' call
        // Inline function 'kotlin.Companion.success' call
        tmp_0 = _Result___init__impl__xyqfz8(Unit_instance);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e_0 = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var result = tmp_0;
      this.o11(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).o11 = function (exception, finallyException) {
    if (exception === null && finallyException === null)
      return Unit_instance;
    if (!(exception === null) && !(finallyException === null)) {
      addSuppressed(exception, finallyException);
    }
    var cause = exception == null ? finallyException : exception;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.a11().t8(), reason);
  };
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.a11();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.e10_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.wz_1;
      var context = delegate.t8();
      if (dispatcher.i12(context)) {
        dispatcher.j12(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().h13();
    if (eventLoop.b13()) {
      eventLoop.a13(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.d13(true);
      try {
        resume(_this__u8e3s4, _this__u8e3s4.a11(), true);
        $l$loop: while (eventLoop.z12()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.o11(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.e13(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.c11();
    var exception = _this__u8e3s4.l11(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.i11(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      this_0.xz_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.zz_1;
      this_0.xz_1.y8(result);
    } else {
      delegate.y8(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).h(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.h((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
        list.h(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function access$_get_holder__kkflen($this) {
    return _get_holder__f6h5pd($this);
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      handleCoroutineException(context, tmp0_safe_receiver);
    }
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) && !(undeliveredElementException.cause === ex)) {
          addSuppressed(undeliveredElementException, ex);
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + toString_0(element), ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_instance;
    };
  }
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.dz_1 = uCont;
  }
  protoOf(ScopeCoroutine).qx = function () {
    return true;
  };
  protoOf(ScopeCoroutine).hw = function (state) {
    resumeCancellableWith(intercepted(this.dz_1), recoverResult(state, this.dz_1));
  };
  protoOf(ScopeCoroutine).gw = function (state) {
    this.dz_1.y8(recoverResult(state, this.dz_1));
  };
  function ContextScope(context) {
    this.w1v_1 = context;
  }
  protoOf(ContextScope).wv = function () {
    return this.w1v_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + toString(this.w1v_1) + ')';
  };
  function Symbol(symbol) {
    this.x1v_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.x1v_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? 2147483647 : maxValue;
    return convertToInt(systemProp_0(propertyName, fromInt(defaultValue), fromInt(minValue), fromInt(maxValue)));
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    maxValue = maxValue === VOID ? new Long(-1, 2147483647) : maxValue;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(compare(minValue, parsed) <= 0 ? compare(parsed, maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var message_0 = "System property '" + propertyName + "' should be in range " + minValue.toString() + '..' + maxValue.toString() + ", but is '" + parsed.toString() + "'";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp, tmp$ret$0, onCancellation);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp, tmp$ret$0);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(fatalCompletion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function dispatcherFailure(completion, e) {
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.y8(tmp$ret$0);
    throw e;
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.fw(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        state.cw_1;
        if (true) {
          throw recoverStackTrace(state.cw_1, _this__u8e3s4.dz_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.cw_1, _this__u8e3s4.dz_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$2 = tmp_1;
    }
    return tmp$ret$2;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        completion.t8();
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$5 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.y8(tmp$ret$5);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
        var tmp$ret$8 = _Result___init__impl__xyqfz8(value_0);
        actualCompletion.y8(tmp$ret$8);
      }
    }
  }
  function startUndispatchedOrReturnIgnoreTimeout(_this__u8e3s4, receiver, block) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.fw(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        var e_0 = state.cw_1;
        var tmp_3;
        if (e_0 instanceof TimeoutCancellationException) {
          tmp_3 = e_0.i18_1 === _this__u8e3s4;
        } else {
          tmp_3 = false;
        }
        if (!tmp_3) {
          throw recoverStackTrace(state.cw_1, _this__u8e3s4.dz_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.cw_1, _this__u8e3s4.dz_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$2 = tmp_1;
    }
    return tmp$ret$2;
  }
  function onTimeout(_this__u8e3s4, timeMillis, block) {
    return _this__u8e3s4.a1w((new OnTimeout(timeMillis)).z1v(), block);
  }
  function register($this, select, ignoredParam) {
    if (compare($this.y1v_1, new Long(0, 0)) <= 0) {
      select.z1b(Unit_instance);
      return Unit_instance;
    }
    // Inline function 'kotlinx.coroutines.Runnable' call
    var action = new OnTimeout$register$$inlined$Runnable$1(select, $this);
    if (!(select instanceof SelectImplementation))
      THROW_CCE();
    var context = select.t8();
    var disposableHandle = get_delay(context).t12($this.y1v_1, action, context);
    select.b1w(disposableHandle);
  }
  function OnTimeout$register$ref() {
    var l = function (p0, p1, p2) {
      register(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = 'register';
    return l;
  }
  function OnTimeout$register$$inlined$Runnable$1($select, this$0) {
    this.c1w_1 = $select;
    this.d1w_1 = this$0;
  }
  protoOf(OnTimeout$register$$inlined$Runnable$1).n11 = function () {
    this.c1w_1.p1b(this.d1w_1, Unit_instance);
  };
  function OnTimeout(timeMillis) {
    this.y1v_1 = timeMillis;
  }
  protoOf(OnTimeout).z1v = function () {
    var tmp = OnTimeout$register$ref();
    return new SelectClause0Impl(this, typeof tmp === 'function' ? tmp : THROW_CCE());
  };
  function get_DUMMY_PROCESS_RESULT_FUNCTION() {
    _init_properties_Select_kt__zhm2jg();
    return DUMMY_PROCESS_RESULT_FUNCTION;
  }
  var DUMMY_PROCESS_RESULT_FUNCTION;
  function get_STATE_REG() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_REG;
  }
  var STATE_REG;
  function get_STATE_COMPLETED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_COMPLETED;
  }
  var STATE_COMPLETED;
  function get_STATE_CANCELLED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_CANCELLED;
  }
  var STATE_CANCELLED;
  function get_NO_RESULT() {
    _init_properties_Select_kt__zhm2jg();
    return NO_RESULT;
  }
  var NO_RESULT;
  function get_PARAM_CLAUSE_0() {
    _init_properties_Select_kt__zhm2jg();
    return PARAM_CLAUSE_0;
  }
  var PARAM_CLAUSE_0;
  function SelectClause0Impl(clauseObject, regFunc, onCancellationConstructor) {
    onCancellationConstructor = onCancellationConstructor === VOID ? null : onCancellationConstructor;
    this.e1w_1 = clauseObject;
    this.f1w_1 = regFunc;
    this.g1w_1 = onCancellationConstructor;
    this.h1w_1 = get_DUMMY_PROCESS_RESULT_FUNCTION();
  }
  protoOf(SelectClause0Impl).i1w = function () {
    return this.e1w_1;
  };
  protoOf(SelectClause0Impl).j1w = function () {
    return this.f1w_1;
  };
  protoOf(SelectClause0Impl).k1w = function () {
    return this.g1w_1;
  };
  protoOf(SelectClause0Impl).l1w = function () {
    return this.h1w_1;
  };
  function SelectInstance() {
  }
  function SelectClause1Impl(clauseObject, regFunc, processResFunc, onCancellationConstructor) {
    onCancellationConstructor = onCancellationConstructor === VOID ? null : onCancellationConstructor;
    this.m1w_1 = clauseObject;
    this.n1w_1 = regFunc;
    this.o1w_1 = processResFunc;
    this.p1w_1 = onCancellationConstructor;
  }
  protoOf(SelectClause1Impl).i1w = function () {
    return this.m1w_1;
  };
  protoOf(SelectClause1Impl).j1w = function () {
    return this.n1w_1;
  };
  protoOf(SelectClause1Impl).l1w = function () {
    return this.o1w_1;
  };
  protoOf(SelectClause1Impl).k1w = function () {
    return this.p1w_1;
  };
  function $invokeBlockCOROUTINE$(_this__u8e3s4, argument, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y1w_1 = _this__u8e3s4;
    this.z1w_1 = argument;
  }
  protoOf($invokeBlockCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            var block = this.y1w_1.f1x_1;
            if (this.y1w_1.e1x_1 === get_PARAM_CLAUSE_0()) {
              if (!isSuspendFunction(block, 0))
                THROW_CCE();
              this.n8_1 = 2;
              suspendResult = block(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (!isSuspendFunction(block, 1))
                THROW_CCE();
              this.n8_1 = 1;
              suspendResult = block(this.z1w_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.a1x_1 = suspendResult;
            this.n8_1 = 3;
            continue $sm;
          case 2:
            this.a1x_1 = suspendResult;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            return this.a1x_1;
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
  function _get_isSelected__uy0hmu($this) {
    var tmp = $this.t1b_1.kotlinx$atomicfu$value;
    return tmp instanceof ClauseData;
  }
  function doSelectSuspend($this, $completion) {
    var tmp = new $doSelectSuspendCOROUTINE$($this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function checkClauseObject($this, clauseObject) {
    var clauses = ensureNotNull($this.u1b_1);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.none' call
      var tmp;
      if (isInterface(clauses, Collection)) {
        tmp = clauses.n();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = clauses.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (element.b1x_1 === clauseObject) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    // Inline function 'kotlin.check' call
    if (!tmp$ret$0) {
      var message = 'Cannot use select clauses on the same object: ' + toString(clauseObject);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function waitUntilSelected($this, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.b11();
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.loop' call
      var this_0 = $this.t1b_1;
      while (true) {
        var curState = this_0.kotlinx$atomicfu$value;
        if (curState === get_STATE_REG()) {
          if ($this.t1b_1.atomicfu$compareAndSet(curState, cancellable)) {
            invokeOnCancellation(cancellable, $this);
            break $l$block_0;
          }
        } else {
          if (isInterface(curState, KtList)) {
            if ($this.t1b_1.atomicfu$compareAndSet(curState, get_STATE_REG())) {
              if (!isInterface(curState, KtList))
                THROW_CCE();
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s = curState.i();
              while (_iterator__ex2g4s.j()) {
                var element = _iterator__ex2g4s.k();
                reregisterClause($this, element);
              }
            }
          } else {
            if (curState instanceof ClauseData) {
              cancellable.kz(Unit_instance, curState.t1x($this, $this.x1b_1));
              break $l$block_0;
            } else {
              // Inline function 'kotlin.error' call
              var message = 'unexpected state: ' + toString(curState);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
    return cancellable.by();
  }
  function reregisterClause($this, clauseObject) {
    var clause = ensureNotNull(findClause($this, clauseObject));
    clause.h1x_1 = null;
    clause.i1x_1 = -1;
    $this.u1x(clause, true);
  }
  function trySelectInternal($this, clauseObject, internalResult) {
    $l$loop: while (true) {
      var curState = $this.t1b_1.kotlinx$atomicfu$value;
      if (isInterface(curState, CancellableContinuation)) {
        var tmp0_elvis_lhs = findClause($this, clauseObject);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var clause = tmp;
        var onCancellation = clause.t1x($this, internalResult);
        if ($this.t1b_1.atomicfu$compareAndSet(curState, clause)) {
          var cont = isInterface(curState, CancellableContinuation) ? curState : THROW_CCE();
          $this.x1b_1 = internalResult;
          if (tryResume_1(cont, onCancellation))
            return 0;
          $this.x1b_1 = get_NO_RESULT();
          return 2;
        }
      } else {
        var tmp_0;
        if (equals(curState, get_STATE_COMPLETED())) {
          tmp_0 = true;
        } else {
          tmp_0 = curState instanceof ClauseData;
        }
        if (tmp_0)
          return 3;
        else {
          if (equals(curState, get_STATE_CANCELLED()))
            return 2;
          else {
            if (equals(curState, get_STATE_REG())) {
              if ($this.t1b_1.atomicfu$compareAndSet(curState, listOf_0(clauseObject)))
                return 1;
            } else {
              if (isInterface(curState, KtList)) {
                if ($this.t1b_1.atomicfu$compareAndSet(curState, plus_0(curState, clauseObject)))
                  return 1;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected state: ' + toString(curState);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  }
  function findClause($this, clauseObject) {
    var tmp0_elvis_lhs = $this.u1b_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = clauses.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (element.b1x_1 === clauseObject) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Clause with object ' + toString(clauseObject) + ' is not found';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function complete($this, $completion) {
    var tmp = new $completeCOROUTINE$($this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function processResultAndInvokeBlockRecoveringException($this, clause, internalResult, $completion) {
    var tmp = new $processResultAndInvokeBlockRecoveringExceptionCOROUTINE$($this, clause, internalResult, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  }
  function cleanup($this, selectedClause) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = $this.u1b_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = clauses.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (!(element === selectedClause)) {
        element.uz();
      }
    }
    $this.t1b_1.kotlinx$atomicfu$value = get_STATE_COMPLETED();
    $this.x1b_1 = get_NO_RESULT();
    $this.u1b_1 = null;
  }
  function ClauseData($outer, clauseObject, regFunc, processResFunc, param, block, onCancellationConstructor) {
    this.j1x_1 = $outer;
    this.b1x_1 = clauseObject;
    this.c1x_1 = regFunc;
    this.d1x_1 = processResFunc;
    this.e1x_1 = param;
    this.f1x_1 = block;
    this.g1x_1 = onCancellationConstructor;
    this.h1x_1 = null;
    this.i1x_1 = -1;
  }
  protoOf(ClauseData).r1y = function (select) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    this.c1x_1(this.b1x_1, select, this.e1x_1);
    return select.x1b_1 === get_NO_RESULT();
  };
  protoOf(ClauseData).s1y = function (result) {
    return this.d1x_1(this.b1x_1, this.e1x_1, result);
  };
  protoOf(ClauseData).t1y = function (argument, $completion) {
    var tmp = new $invokeBlockCOROUTINE$(this, argument, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(ClauseData).uz = function () {
    // Inline function 'kotlin.with' call
    var $this$with = this.h1x_1;
    var tmp;
    if ($this$with instanceof Segment) {
      $this$with.k10(this.i1x_1, null, this.j1x_1.t8());
      tmp = Unit_instance;
    } else {
      var tmp0_safe_receiver = (!($this$with == null) ? isInterface($this$with, DisposableHandle) : false) ? $this$with : null;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp0_safe_receiver.uz();
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
  };
  protoOf(ClauseData).t1x = function (select, internalResult) {
    var tmp0_safe_receiver = this.g1x_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver(select, this.e1x_1, internalResult);
  };
  function $doSelectCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c1z_1 = _this__u8e3s4;
  }
  protoOf($doSelectCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            if (_get_isSelected__uy0hmu(this.c1z_1)) {
              this.n8_1 = 2;
              suspendResult = complete(this.c1z_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 1;
              suspendResult = doSelectSuspend(this.c1z_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.d1z_1 = suspendResult;
            this.n8_1 = 3;
            continue $sm;
          case 2:
            this.d1z_1 = suspendResult;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            return this.d1z_1;
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
  function $doSelectSuspendCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s1x_1 = _this__u8e3s4;
  }
  protoOf($doSelectSuspendCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            this.n8_1 = 1;
            suspendResult = waitUntilSelected(this.s1x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n8_1 = 2;
            suspendResult = complete(this.s1x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o8_1 === 3) {
          throw e;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e;
        }
      }
     while (true);
  };
  function $completeCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d1y_1 = _this__u8e3s4;
  }
  protoOf($completeCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 4;
            var tmp_0 = this.d1y_1.t1b_1.kotlinx$atomicfu$value;
            var selectedClause = tmp_0 instanceof ClauseData ? tmp_0 : THROW_CCE();
            var internalResult = this.d1y_1.x1b_1;
            cleanup(this.d1y_1, selectedClause);
            if (!get_RECOVER_STACK_TRACES()) {
              var blockArgument = selectedClause.s1y(internalResult);
              this.n8_1 = 2;
              suspendResult = selectedClause.t1y(blockArgument, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n8_1 = 1;
              suspendResult = processResultAndInvokeBlockRecoveringException(this.d1y_1, selectedClause, internalResult, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.e1y_1 = suspendResult;
            this.n8_1 = 3;
            continue $sm;
          case 2:
            this.e1y_1 = suspendResult;
            this.n8_1 = 3;
            continue $sm;
          case 3:
            return this.e1y_1;
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
  function $processResultAndInvokeBlockRecoveringExceptionCOROUTINE$(_this__u8e3s4, clause, internalResult, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1y_1 = _this__u8e3s4;
    this.o1y_1 = clause;
    this.p1y_1 = internalResult;
  }
  protoOf($processResultAndInvokeBlockRecoveringExceptionCOROUTINE$).v8 = function () {
    var suspendResult = this.p8_1;
    $sm: do
      try {
        var tmp = this.n8_1;
        switch (tmp) {
          case 0:
            this.o8_1 = 3;
            this.o8_1 = 2;
            var blockArgument = this.o1y_1.s1y(this.p1y_1);
            this.n8_1 = 1;
            suspendResult = this.o1y_1.t1y(blockArgument, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.q1y_1 = suspendResult;
            this.o8_1 = 3;
            this.n8_1 = 4;
            continue $sm;
          case 2:
            this.o8_1 = 3;
            var tmp_0 = this.q8_1;
            if (tmp_0 instanceof Error) {
              var e = this.q8_1;
              var tmp_1 = this;
              throw e;
            } else {
              throw this.q8_1;
            }

          case 3:
            throw this.q8_1;
          case 4:
            this.o8_1 = 3;
            return this.q1y_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o8_1 === 3) {
          throw e_0;
        } else {
          this.n8_1 = this.o8_1;
          this.q8_1 = e_0;
        }
      }
     while (true);
  };
  function SelectImplementation(context) {
    this.s1b_1 = context;
    this.t1b_1 = atomic$ref$1(get_STATE_REG());
    this.u1b_1 = ArrayList_init_$Create$(2);
    this.v1b_1 = null;
    this.w1b_1 = -1;
    this.x1b_1 = get_NO_RESULT();
  }
  protoOf(SelectImplementation).t8 = function () {
    return this.s1b_1;
  };
  protoOf(SelectImplementation).w1t = function ($completion) {
    var tmp = new $doSelectCOROUTINE$(this, $completion);
    tmp.p8_1 = Unit_instance;
    tmp.q8_1 = null;
    return tmp.v8();
  };
  protoOf(SelectImplementation).a1w = function (_this__u8e3s4, block) {
    return this.e1z(new ClauseData(this, _this__u8e3s4.i1w(), _this__u8e3s4.j1w(), _this__u8e3s4.l1w(), get_PARAM_CLAUSE_0(), block, _this__u8e3s4.k1w()));
  };
  protoOf(SelectImplementation).v1t = function (_this__u8e3s4, block) {
    return this.e1z(new ClauseData(this, _this__u8e3s4.i1w(), _this__u8e3s4.j1w(), _this__u8e3s4.l1w(), null, block, _this__u8e3s4.k1w()));
  };
  protoOf(SelectImplementation).u1x = function (_this__u8e3s4, reregister) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlin.let' call
    if (this.t1b_1.kotlinx$atomicfu$value instanceof ClauseData)
      return Unit_instance;
    if (!reregister) {
      checkClauseObject(this, _this__u8e3s4.b1x_1);
    }
    if (_this__u8e3s4.r1y(this)) {
      if (!reregister) {
        // Inline function 'kotlin.collections.plusAssign' call
        ensureNotNull(this.u1b_1).h(_this__u8e3s4);
      }
      _this__u8e3s4.h1x_1 = this.v1b_1;
      _this__u8e3s4.i1x_1 = this.w1b_1;
      this.v1b_1 = null;
      this.w1b_1 = -1;
    } else {
      this.t1b_1.kotlinx$atomicfu$value = _this__u8e3s4;
    }
  };
  protoOf(SelectImplementation).e1z = function (_this__u8e3s4, reregister, $super) {
    reregister = reregister === VOID ? false : reregister;
    var tmp;
    if ($super === VOID) {
      this.u1x(_this__u8e3s4, reregister);
      tmp = Unit_instance;
    } else {
      tmp = $super.u1x.call(this, _this__u8e3s4, reregister);
    }
    return tmp;
  };
  protoOf(SelectImplementation).b1w = function (disposableHandle) {
    this.v1b_1 = disposableHandle;
  };
  protoOf(SelectImplementation).k11 = function (segment, index) {
    this.v1b_1 = segment;
    this.w1b_1 = index;
  };
  protoOf(SelectImplementation).z1b = function (internalResult) {
    this.x1b_1 = internalResult;
  };
  protoOf(SelectImplementation).p1b = function (clauseObject, result) {
    return trySelectInternal(this, clauseObject, result) === 0;
  };
  protoOf(SelectImplementation).y1b = function (clauseObject, result) {
    return TrySelectDetailedResult_0(trySelectInternal(this, clauseObject, result));
  };
  protoOf(SelectImplementation).tz = function (cause) {
    var tmp0 = this.t1b_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        if (cur === get_STATE_COMPLETED())
          return Unit_instance;
        var upd = get_STATE_CANCELLED();
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = this.u1b_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = clauses.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      element.uz();
    }
    this.x1b_1 = get_NO_RESULT();
    this.u1b_1 = null;
  };
  var TrySelectDetailedResult_SUCCESSFUL_instance;
  var TrySelectDetailedResult_REREGISTER_instance;
  var TrySelectDetailedResult_CANCELLED_instance;
  var TrySelectDetailedResult_ALREADY_SELECTED_instance;
  var TrySelectDetailedResult_entriesInitialized;
  function TrySelectDetailedResult_initEntries() {
    if (TrySelectDetailedResult_entriesInitialized)
      return Unit_instance;
    TrySelectDetailedResult_entriesInitialized = true;
    TrySelectDetailedResult_SUCCESSFUL_instance = new TrySelectDetailedResult('SUCCESSFUL', 0);
    TrySelectDetailedResult_REREGISTER_instance = new TrySelectDetailedResult('REREGISTER', 1);
    TrySelectDetailedResult_CANCELLED_instance = new TrySelectDetailedResult('CANCELLED', 2);
    TrySelectDetailedResult_ALREADY_SELECTED_instance = new TrySelectDetailedResult('ALREADY_SELECTED', 3);
  }
  function TrySelectDetailedResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TrySelectDetailedResult_0(trySelectInternalResult) {
    _init_properties_Select_kt__zhm2jg();
    var tmp;
    switch (trySelectInternalResult) {
      case 0:
        tmp = TrySelectDetailedResult_SUCCESSFUL_getInstance();
        break;
      case 1:
        tmp = TrySelectDetailedResult_REREGISTER_getInstance();
        break;
      case 2:
        tmp = TrySelectDetailedResult_CANCELLED_getInstance();
        break;
      case 3:
        tmp = TrySelectDetailedResult_ALREADY_SELECTED_getInstance();
        break;
      default:
        var message = 'Unexpected internal result: ' + trySelectInternalResult;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function tryResume_1(_this__u8e3s4, onCancellation) {
    _init_properties_Select_kt__zhm2jg();
    var tmp0_elvis_lhs = _this__u8e3s4.ez(Unit_instance, null, onCancellation);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.fz(token);
    return true;
  }
  function DUMMY_PROCESS_RESULT_FUNCTION$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    _init_properties_Select_kt__zhm2jg();
    return null;
  }
  function TrySelectDetailedResult_SUCCESSFUL_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_SUCCESSFUL_instance;
  }
  function TrySelectDetailedResult_REREGISTER_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_REREGISTER_instance;
  }
  function TrySelectDetailedResult_CANCELLED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_CANCELLED_instance;
  }
  function TrySelectDetailedResult_ALREADY_SELECTED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_ALREADY_SELECTED_instance;
  }
  var properties_initialized_Select_kt_7rpl36;
  function _init_properties_Select_kt__zhm2jg() {
    if (!properties_initialized_Select_kt_7rpl36) {
      properties_initialized_Select_kt_7rpl36 = true;
      DUMMY_PROCESS_RESULT_FUNCTION = DUMMY_PROCESS_RESULT_FUNCTION$lambda;
      STATE_REG = new Symbol('STATE_REG');
      STATE_COMPLETED = new Symbol('STATE_COMPLETED');
      STATE_CANCELLED = new Symbol('STATE_CANCELLED');
      NO_RESULT = new Symbol('NO_RESULT');
      PARAM_CLAUSE_0 = new Symbol('PARAM_CLAUSE_0');
    }
  }
  function get_NO_OWNER() {
    _init_properties_Mutex_kt__jod56b();
    return NO_OWNER;
  }
  var NO_OWNER;
  var ON_LOCK_ALREADY_LOCKED_BY_OWNER;
  function Mutex() {
  }
  function Mutex_0(locked) {
    locked = locked === VOID ? false : locked;
    _init_properties_Mutex_kt__jod56b();
    return new MutexImpl(locked);
  }
  function MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this$0, this$1) {
    return function (it) {
      // Inline function 'kotlinx.coroutines.assert' call
      this$0.r1z_1.kotlinx$atomicfu$value = this$1.u1z_1;
      this$0.i1z(this$1.u1z_1);
      return Unit_instance;
    };
  }
  function MutexImpl$CancellableContinuationWithOwner$resume$lambda(this$0, this$1) {
    return function (it) {
      this$0.i1z(this$1.u1z_1);
      return Unit_instance;
    };
  }
  function holdsLockImpl($this, owner) {
    $l$loop: while (true) {
      if (!$this.f1z())
        return 0;
      var curOwner = $this.r1z_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop;
      return curOwner === owner ? 1 : 2;
    }
  }
  function lockSuspend($this, owner, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      var contWithOwner = new CancellableContinuationWithOwner($this, cancellable, owner);
      $this.acquireCont(contWithOwner);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.h11();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.by();
  }
  function tryLockImpl($this, owner) {
    $l$loop: while (true) {
      if ($this.d20()) {
        // Inline function 'kotlinx.coroutines.assert' call
        $this.r1z_1.kotlinx$atomicfu$value = owner;
        return 0;
      } else {
        if (owner == null)
          return 1;
        switch (holdsLockImpl($this, owner)) {
          case 1:
            return 2;
          case 2:
            return 1;
          case 0:
            continue $l$loop;
        }
      }
    }
  }
  function CancellableContinuationWithOwner($outer, cont, owner) {
    this.v1z_1 = $outer;
    this.t1z_1 = cont;
    this.u1z_1 = owner;
  }
  protoOf(CancellableContinuationWithOwner).t8 = function () {
    return this.t1z_1.t8();
  };
  protoOf(CancellableContinuationWithOwner).gz = function (cause) {
    return this.t1z_1.gz(cause);
  };
  protoOf(CancellableContinuationWithOwner).fz = function (token) {
    this.t1z_1.fz(token);
  };
  protoOf(CancellableContinuationWithOwner).iz = function (handler) {
    this.t1z_1.iz(handler);
  };
  protoOf(CancellableContinuationWithOwner).qe = function (result) {
    this.t1z_1.y8(result);
  };
  protoOf(CancellableContinuationWithOwner).y8 = function (result) {
    return this.qe(result);
  };
  protoOf(CancellableContinuationWithOwner).e20 = function (_this__u8e3s4, value) {
    this.t1z_1.jz(_this__u8e3s4, Unit_instance);
  };
  protoOf(CancellableContinuationWithOwner).jz = function (_this__u8e3s4, value) {
    return this.e20(_this__u8e3s4, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(CancellableContinuationWithOwner).k11 = function (segment, index) {
    this.t1z_1.k11(segment, index);
  };
  protoOf(CancellableContinuationWithOwner).f20 = function (value, idempotent, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    var token = this.t1z_1.ez(Unit_instance, idempotent, MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this.v1z_1, this));
    if (!(token == null)) {
      // Inline function 'kotlinx.coroutines.assert' call
      this.v1z_1.r1z_1.kotlinx$atomicfu$value = this.u1z_1;
    }
    return token;
  };
  protoOf(CancellableContinuationWithOwner).ez = function (value, idempotent, onCancellation) {
    return this.f20(value instanceof Unit ? value : THROW_CCE(), idempotent, onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).g20 = function (value, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    this.v1z_1.r1z_1.kotlinx$atomicfu$value = this.u1z_1;
    this.t1z_1.kz(Unit_instance, MutexImpl$CancellableContinuationWithOwner$resume$lambda(this.v1z_1, this));
  };
  protoOf(CancellableContinuationWithOwner).kz = function (value, onCancellation) {
    return this.g20(value instanceof Unit ? value : THROW_CCE(), onCancellation);
  };
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, $owner) {
    return function (it) {
      this$0.i1z($owner);
      return Unit_instance;
    };
  }
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8, owner, _anonymous_parameter_2__qggqfi) {
      return MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, owner);
    };
  }
  function MutexImpl(locked) {
    SemaphoreImpl.call(this, 1, locked ? 1 : 0);
    this.r1z_1 = atomic$ref$1(locked ? null : get_NO_OWNER());
    var tmp = this;
    tmp.s1z_1 = MutexImpl$onSelectCancellationUnlockConstructor$lambda(this);
  }
  protoOf(MutexImpl).f1z = function () {
    return this.h20() === 0;
  };
  protoOf(MutexImpl).g1z = function (owner, $completion) {
    if (this.i20(owner))
      return Unit_instance;
    return lockSuspend(this, owner, $completion);
  };
  protoOf(MutexImpl).i20 = function (owner) {
    var tmp;
    switch (tryLockImpl(this, owner)) {
      case 0:
        tmp = true;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        var message = 'This mutex is already locked by the specified owner: ' + toString_0(owner);
        throw IllegalStateException_init_$Create$(toString(message));
      default:
        var message_0 = 'unexpected';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MutexImpl).i1z = function (owner) {
    $l$loop_0: while (true) {
      // Inline function 'kotlin.check' call
      if (!this.f1z()) {
        var message = 'This mutex is not locked';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var curOwner = this.r1z_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop_0;
      // Inline function 'kotlin.check' call
      if (!(curOwner === owner || owner == null)) {
        var message_0 = 'This mutex is locked by ' + toString_0(curOwner) + ', but ' + toString_0(owner) + ' is expected';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      if (!this.r1z_1.atomicfu$compareAndSet(curOwner, get_NO_OWNER()))
        continue $l$loop_0;
      this.j20();
      return Unit_instance;
    }
  };
  protoOf(MutexImpl).toString = function () {
    return 'Mutex@' + get_hexAddress(this) + '[isLocked=' + this.f1z() + ',owner=' + toString_0(this.r1z_1.kotlinx$atomicfu$value) + ']';
  };
  var properties_initialized_Mutex_kt_yv4p3j;
  function _init_properties_Mutex_kt__jod56b() {
    if (!properties_initialized_Mutex_kt_yv4p3j) {
      properties_initialized_Mutex_kt_yv4p3j = true;
      NO_OWNER = new Symbol('NO_OWNER');
      ON_LOCK_ALREADY_LOCKED_BY_OWNER = new Symbol('ALREADY_LOCKED_BY_OWNER');
    }
  }
  function get_MAX_SPIN_CYCLES() {
    _init_properties_Semaphore_kt__t514r6();
    return MAX_SPIN_CYCLES;
  }
  var MAX_SPIN_CYCLES;
  function get_PERMIT() {
    _init_properties_Semaphore_kt__t514r6();
    return PERMIT;
  }
  var PERMIT;
  function get_TAKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return TAKEN;
  }
  var TAKEN;
  function get_BROKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return BROKEN;
  }
  var BROKEN;
  function get_CANCELLED() {
    _init_properties_Semaphore_kt__t514r6();
    return CANCELLED;
  }
  var CANCELLED;
  function get_SEGMENT_SIZE_0() {
    _init_properties_Semaphore_kt__t514r6();
    return SEGMENT_SIZE_0;
  }
  var SEGMENT_SIZE_0;
  function decPermits($this) {
    $l$loop: while (true) {
      var p = $this.b20_1.atomicfu$getAndDecrement();
      if (p > $this.w1z_1)
        continue $l$loop;
      return p;
    }
  }
  function coerceAvailablePermitsAtMaximum($this) {
    $l$loop_0: while (true) {
      var cur = $this.b20_1.kotlinx$atomicfu$value;
      if (cur <= $this.w1z_1)
        break $l$loop_0;
      if ($this.b20_1.atomicfu$compareAndSet(cur, $this.w1z_1))
        break $l$loop_0;
    }
  }
  function addAcquireToQueue($this, waiter) {
    var curTail = $this.z1z_1.kotlinx$atomicfu$value;
    var enqIdx = $this.a20_1.atomicfu$getAndIncrement$long();
    var createNewSegment = createSegment$ref_0();
    var tmp0 = $this.z1z_1;
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var tmp2 = divide(enqIdx, fromInt(other));
    var tmp$ret$3;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(curTail, tmp2, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2_0 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.i10_1, tmp2_0.i10_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2_0.y19()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2_0)) {
                if (cur.z19()) {
                  cur.q3();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2_0.z19()) {
                tmp2_0.q3();
              }
            }
            tmp$ret$1 = Unit_instance;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$3 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$3);
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var tmp$ret$4 = modulo(enqIdx, fromInt(other_0));
    var i = convertToInt(tmp$ret$4);
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    if (segment.o20_1.atomicfu$get(i).atomicfu$compareAndSet(null, waiter)) {
      waiter.k11(segment, i);
      return true;
    }
    var tmp4 = get_PERMIT();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    var value = get_TAKEN();
    if (segment.o20_1.atomicfu$get(i).atomicfu$compareAndSet(tmp4, value)) {
      if (isInterface(waiter, CancellableContinuation)) {
        if (!isInterface(waiter, CancellableContinuation))
          THROW_CCE();
        waiter.kz(Unit_instance, $this.c20_1);
      } else {
        if (isInterface(waiter, SelectInstance)) {
          waiter.z1b(Unit_instance);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'unexpected: ' + toString(waiter);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      return true;
    }
    // Inline function 'kotlinx.coroutines.assert' call
    return false;
  }
  function tryResumeNextFromQueue($this) {
    var curHead = $this.x1z_1.kotlinx$atomicfu$value;
    var deqIdx = $this.y1z_1.atomicfu$getAndIncrement$long();
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var id = divide(deqIdx, fromInt(other));
    var createNewSegment = createSegment$ref_1();
    var tmp0 = $this.x1z_1;
    var tmp$ret$3;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(curHead, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.i10_1, tmp2.i10_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2.y19()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.z19()) {
                  cur.q3();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2.z19()) {
                tmp2.q3();
              }
            }
            tmp$ret$1 = Unit_instance;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$3 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$3);
    segment.g1a();
    if (compare(segment.i10_1, id) > 0)
      return false;
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var tmp$ret$4 = modulo(deqIdx, fromInt(other_0));
    var i = convertToInt(tmp$ret$4);
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.getAndSet' call
    var value = get_PERMIT();
    var cellState = segment.o20_1.atomicfu$get(i).atomicfu$getAndSet(value);
    if (cellState === null) {
      // Inline function 'kotlin.repeat' call
      var times = get_MAX_SPIN_CYCLES();
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.get' call
          if (segment.o20_1.atomicfu$get(i).kotlinx$atomicfu$value === get_TAKEN())
            return true;
        }
         while (inductionVariable < times);
      var tmp4 = get_PERMIT();
      // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
      var value_0 = get_BROKEN();
      return !segment.o20_1.atomicfu$get(i).atomicfu$compareAndSet(tmp4, value_0);
    } else if (cellState === get_CANCELLED())
      return false;
    else
      return tryResumeAcquire($this, cellState);
  }
  function tryResumeAcquire($this, _this__u8e3s4) {
    var tmp;
    if (isInterface(_this__u8e3s4, CancellableContinuation)) {
      if (!isInterface(_this__u8e3s4, CancellableContinuation))
        THROW_CCE();
      var token = _this__u8e3s4.ez(Unit_instance, null, $this.c20_1);
      var tmp_0;
      if (!(token == null)) {
        _this__u8e3s4.fz(token);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        tmp = _this__u8e3s4.p1b($this, Unit_instance);
      } else {
        var message = 'unexpected: ' + toString(_this__u8e3s4);
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function SemaphoreImpl$onCancellationRelease$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8) {
      this$0.j20();
      return Unit_instance;
    };
  }
  function createSegment$ref_0() {
    var l = function (p0, p1) {
      return createSegment_0(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  function createSegment$ref_1() {
    var l = function (p0, p1) {
      return createSegment_0(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  function SemaphoreImpl(permits, acquiredPermits) {
    this.w1z_1 = permits;
    this.y1z_1 = atomic$long$1(new Long(0, 0));
    this.a20_1 = atomic$long$1(new Long(0, 0));
    // Inline function 'kotlin.require' call
    if (!(this.w1z_1 > 0)) {
      var message = 'Semaphore should have at least 1 permit, but had ' + this.w1z_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(0 <= acquiredPermits ? acquiredPermits <= this.w1z_1 : false)) {
      var message_0 = 'The number of acquired permits should be in 0..' + this.w1z_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var s = new SemaphoreSegment(new Long(0, 0), null, 2);
    this.x1z_1 = atomic$ref$1(s);
    this.z1z_1 = atomic$ref$1(s);
    this.b20_1 = atomic$int$1(this.w1z_1 - acquiredPermits | 0);
    var tmp = this;
    tmp.c20_1 = SemaphoreImpl$onCancellationRelease$lambda(this);
  }
  protoOf(SemaphoreImpl).h20 = function () {
    // Inline function 'kotlin.math.max' call
    var a = this.b20_1.kotlinx$atomicfu$value;
    return Math.max(a, 0);
  };
  protoOf(SemaphoreImpl).d20 = function () {
    $l$loop: while (true) {
      var p = this.b20_1.kotlinx$atomicfu$value;
      if (p > this.w1z_1) {
        coerceAvailablePermitsAtMaximum(this);
        continue $l$loop;
      }
      if (p <= 0)
        return false;
      if (this.b20_1.atomicfu$compareAndSet(p, p - 1 | 0))
        return true;
    }
  };
  protoOf(SemaphoreImpl).acquireCont = function (waiter) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.acquire' call
      while (true) {
        var p = decPermits(this);
        if (p > 0) {
          waiter.kz(Unit_instance, this.c20_1);
          tmp$ret$1 = Unit_instance;
          break $l$block_0;
        }
        if (addAcquireToQueue(this, isInterface(waiter, Waiter) ? waiter : THROW_CCE())) {
          tmp$ret$1 = Unit_instance;
          break $l$block_0;
        }
      }
      tmp$ret$1 = Unit_instance;
    }
    return tmp$ret$1;
  };
  protoOf(SemaphoreImpl).j20 = function () {
    while (true) {
      var p = this.b20_1.atomicfu$getAndIncrement();
      if (p >= this.w1z_1) {
        coerceAvailablePermitsAtMaximum(this);
        // Inline function 'kotlin.error' call
        var message = 'The number of released permits cannot be greater than ' + this.w1z_1;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      if (p >= 0)
        return Unit_instance;
      if (tryResumeNextFromQueue(this))
        return Unit_instance;
    }
  };
  function SemaphoreSegment(id, prev, pointers) {
    Segment.call(this, id, prev, pointers);
    this.o20_1 = atomicfu$AtomicRefArray$ofNulls(get_SEGMENT_SIZE_0());
  }
  protoOf(SemaphoreSegment).z18 = function () {
    return get_SEGMENT_SIZE_0();
  };
  protoOf(SemaphoreSegment).k10 = function (index, cause, context) {
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.set' call
    var value = get_CANCELLED();
    this.o20_1.atomicfu$get(index).kotlinx$atomicfu$value = value;
    this.w19();
  };
  protoOf(SemaphoreSegment).toString = function () {
    return 'SemaphoreSegment[id=' + this.i10_1.toString() + ', hashCode=' + hashCode(this) + ']';
  };
  function createSegment_0(id, prev) {
    _init_properties_Semaphore_kt__t514r6();
    return new SemaphoreSegment(id, prev, 0);
  }
  var properties_initialized_Semaphore_kt_uqcwok;
  function _init_properties_Semaphore_kt__t514r6() {
    if (!properties_initialized_Semaphore_kt_uqcwok) {
      properties_initialized_Semaphore_kt_uqcwok = true;
      MAX_SPIN_CYCLES = systemProp('kotlinx.coroutines.semaphore.maxSpinCycles', 100);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE_0 = systemProp('kotlinx.coroutines.semaphore.segmentSize', 16);
    }
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.wv().lf(context);
    return !(combined === Dispatchers_getInstance().n12_1) && combined.a9(Key_instance) == null ? combined.lf(Dispatchers_getInstance().n12_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.lf(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).gw = function (state) {
    return this.dz_1.y8(recoverResult(state, this.dz_1));
  };
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().n12_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' || typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function isJsdom() {
    return !(typeof navigator === 'undefined') && navigator != null && navigator.userAgent != null && !(typeof navigator.userAgent === 'undefined') && !(typeof navigator.userAgent.match === 'undefined') && navigator.userAgent.match('\\bjsdom\\b');
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).z9();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).v20 = function () {
    process.nextTick(this.c21_1.a21_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.g21();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.z20_1 = dispatcher;
    var tmp = this;
    tmp.a21_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).h21 = function () {
    this.z20_1.v20();
  };
  protoOf(ScheduledMessageQueue).i21 = function () {
    setTimeout(this.a21_1, 0);
  };
  protoOf(ScheduledMessageQueue).j21 = function (timeout) {
    setTimeout(this.a21_1, timeout);
  };
  function w3cSetTimeout(handler, timeout) {
    return setTimeout(handler, timeout);
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.w21_1 && event.data == this$0.x21_1) {
        event.stopPropagation();
        this$0.g21();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.g21();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.w21_1 = window_0;
    this.x21_1 = 'dispatchCoroutine';
    this.w21_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).h21 = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).i21 = function () {
    this.w21_1.postMessage(this.x21_1, '*');
  };
  function w3cSetTimeout_0(window_0, handler, timeout) {
    return setTimeout_0(window_0, handler, timeout);
  }
  function w3cClearTimeout(window_0, handle) {
    return window_0.clearTimeout(handle);
  }
  function w3cClearTimeout_0(handle) {
    return clearTimeout(handle);
  }
  function setTimeout_0(window_0, handler, timeout) {
    return window_0.setTimeout(handler, timeout);
  }
  function await_0(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.b11();
    var tmp = await$lambda(cancellable);
    _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
    return cancellable.by();
  }
  function await$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      this_0.y8(tmp$ret$0);
      return Unit_instance;
    };
  }
  function await$lambda_0($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(it));
      this_0.y8(tmp$ret$0);
      return Unit_instance;
    };
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function propagateExceptionFinalResort(exception) {
    console.error(exception.toString());
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.n12_1 = createDefaultDispatcher();
    this.o12_1 = Unconfined_getInstance();
    this.p12_1 = new JsMainDispatcher(this.n12_1, false);
    this.q12_1 = null;
  }
  protoOf(Dispatchers).r12 = function () {
    var tmp0_elvis_lhs = this.q12_1;
    return tmp0_elvis_lhs == null ? this.p12_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.z21_1 = delegate;
    this.a22_1 = invokeImmediately;
    this.b22_1 = this.a22_1 ? this : new JsMainDispatcher(this.z21_1, true);
  }
  protoOf(JsMainDispatcher).o17 = function () {
    return this.b22_1;
  };
  protoOf(JsMainDispatcher).i12 = function (context) {
    return !this.a22_1;
  };
  protoOf(JsMainDispatcher).j12 = function (context, block) {
    return this.z21_1.j12(context, block);
  };
  protoOf(JsMainDispatcher).k12 = function (context, block) {
    return this.z21_1.k12(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.p17();
    return tmp0_elvis_lhs == null ? this.z21_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).j12 = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function get_RECOVER_STACK_TRACES() {
    return RECOVER_STACK_TRACES;
  }
  var RECOVER_STACK_TRACES;
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.g22_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.g22_1);
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.g22_1, this.g22_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.g22_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function Runnable() {
  }
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return TaskContext_instance;
  }
  function TaskContext() {
  }
  var TaskContext_instance;
  function TaskContext_getInstance() {
    return TaskContext_instance;
  }
  function ChildCancelledException() {
    CancellationException_init_$Init$('Child of the scoped flow was cancelled', this);
    captureStack(this, ChildCancelledException);
  }
  function SafeCollector$collectContextSize$lambda(count, _anonymous_parameter_1__qggqgd) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.s1h_1 = collector;
    this.t1h_1 = collectContext;
    var tmp = this;
    tmp.u1h_1 = this.t1h_1.kf(0, SafeCollector$collectContextSize$lambda);
    this.v1h_1 = null;
  }
  protoOf(SafeCollector).g1h = function (value, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.t8();
    ensureActive(currentContext);
    if (!(this.v1h_1 === currentContext)) {
      checkContext(this, currentContext);
      this.v1h_1 = currentContext;
    }
    return this.s1h_1.g1h(value, $completion);
  };
  protoOf(SafeCollector).x8 = function () {
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function WorkaroundAtomicReference(value) {
    this.x1k_1 = value;
  }
  protoOf(WorkaroundAtomicReference).j13 = function () {
    return this.x1k_1;
  };
  protoOf(WorkaroundAtomicReference).k13 = function (value) {
    this.x1k_1 = value;
  };
  protoOf(WorkaroundAtomicReference).y1k = function (value) {
    var prev = this.x1k_1;
    this.x1k_1 = value;
    return prev;
  };
  protoOf(WorkaroundAtomicReference).u1k = function (expected, value) {
    if (this.x1k_1 === expected) {
      this.x1k_1 = value;
      return true;
    }
    return false;
  };
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).v20 = function () {
    this.c21_1.j21(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.n11();
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      $continuation.jz(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.c21_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).j12 = function (context, block) {
    this.c21_1.s21(block);
  };
  protoOf(SetTimeoutBasedDispatcher).t12 = function (timeMillis, block, context) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).s12 = function (timeMillis, continuation) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new ClearTimeout(handle));
  };
  function MessageQueue() {
    this.d21_1 = ArrayDeque_init_$Create$();
    this.e21_1 = 16;
    this.f21_1 = false;
  }
  protoOf(MessageQueue).l = function () {
    return this.d21_1.fd_1;
  };
  protoOf(MessageQueue).k21 = function (index, element) {
    this.d21_1.j2(index, element);
  };
  protoOf(MessageQueue).j2 = function (index, element) {
    return this.k21(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).l21 = function (element) {
    return this.d21_1.h(element);
  };
  protoOf(MessageQueue).h = function (element) {
    return this.l21((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).m21 = function (index, elements) {
    return this.d21_1.h2(index, elements);
  };
  protoOf(MessageQueue).h2 = function (index, elements) {
    return this.m21(index, elements);
  };
  protoOf(MessageQueue).n21 = function (elements) {
    return this.d21_1.r(elements);
  };
  protoOf(MessageQueue).r = function (elements) {
    return this.n21(elements);
  };
  protoOf(MessageQueue).e2 = function () {
    this.d21_1.e2();
  };
  protoOf(MessageQueue).o21 = function (element) {
    return this.d21_1.t(element);
  };
  protoOf(MessageQueue).t = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.o21((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).m = function (index) {
    return this.d21_1.m(index);
  };
  protoOf(MessageQueue).p21 = function (element) {
    return this.d21_1.u(element);
  };
  protoOf(MessageQueue).u = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.p21((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).n = function () {
    return this.d21_1.n();
  };
  protoOf(MessageQueue).i = function () {
    return this.d21_1.i();
  };
  protoOf(MessageQueue).s = function (index) {
    return this.d21_1.s(index);
  };
  protoOf(MessageQueue).q21 = function (element) {
    return this.d21_1.g2(element);
  };
  protoOf(MessageQueue).g2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.q21((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).k2 = function (index) {
    return this.d21_1.k2(index);
  };
  protoOf(MessageQueue).r21 = function (index, element) {
    return this.d21_1.i2(index, element);
  };
  protoOf(MessageQueue).i2 = function (index, element) {
    return this.r21(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).s1 = function (fromIndex, toIndex) {
    return this.d21_1.s1(fromIndex, toIndex);
  };
  protoOf(MessageQueue).s21 = function (element) {
    this.l21(element);
    if (!this.f21_1) {
      this.f21_1 = true;
      this.h21();
    }
  };
  protoOf(MessageQueue).g21 = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.e21_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.n11();
        }
         while (inductionVariable < times);
    }finally {
      if (this.n()) {
        this.f21_1 = false;
      } else {
        this.i21();
      }
    }
  };
  function WindowClearTimeout($outer, handle) {
    this.k22_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).uz = function () {
    w3cClearTimeout(this.k22_1.m22_1, this.o22_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      $continuation.jz(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function Runnable$run$ref(p0) {
    var l = function () {
      p0.n11();
      return Unit_instance;
    };
    l.callableName = 'run';
    return l;
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.m22_1 = window_0;
    this.n22_1 = new WindowMessageQueue(this.m22_1);
  }
  protoOf(WindowDispatcher).j12 = function (context, block) {
    return this.n22_1.s21(block);
  };
  protoOf(WindowDispatcher).s12 = function (timeMillis, continuation) {
    var handle = w3cSetTimeout_0(this.m22_1, WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new WindowClearTimeout(this, handle));
  };
  protoOf(WindowDispatcher).t12 = function (timeMillis, block, context) {
    var handle = w3cSetTimeout_0(this.m22_1, Runnable$run$ref(block), delayToInt(timeMillis));
    return new WindowClearTimeout(this, handle);
  };
  function delayToInt(timeMillis) {
    return convertToInt(coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)));
  }
  function ClearTimeout(handle) {
    this.o22_1 = handle;
  }
  protoOf(ClearTimeout).uz = function () {
    w3cClearTimeout_0(this.o22_1);
  };
  protoOf(ClearTimeout).tz = function (cause) {
    this.uz();
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.o22_1 + ']';
  };
  function LinkedListNode() {
    this.x13_1 = this;
    this.y13_1 = this;
    this.z13_1 = false;
  }
  protoOf(LinkedListNode).a14 = function (node) {
    var prev = this.y13_1;
    node.x13_1 = this;
    node.y13_1 = prev;
    prev.x13_1 = node;
    this.y13_1 = node;
  };
  protoOf(LinkedListNode).b14 = function () {
    return this.c14();
  };
  protoOf(LinkedListNode).uz = function () {
    this.b14();
  };
  protoOf(LinkedListNode).c14 = function () {
    if (this.z13_1)
      return false;
    var prev = this.y13_1;
    var next = this.x13_1;
    prev.x13_1 = next;
    next.y13_1 = prev;
    this.z13_1 = true;
    return true;
  };
  protoOf(LinkedListNode).d14 = function (node) {
    if (!(this.x13_1 === this))
      return false;
    this.a14(node);
    return true;
  };
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  protoOf(LinkedListHead).b14 = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function SynchronizedObject() {
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.i13_1 = null;
  }
  protoOf(CommonThreadLocal).j13 = function () {
    var tmp = this.i13_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).k13 = function (value) {
    this.i13_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).gx = cancel$default;
  protoOf(JobSupport).lf = plus;
  protoOf(JobSupport).a9 = get_0;
  protoOf(JobSupport).kf = fold;
  protoOf(JobSupport).jf = minusKey_0;
  protoOf(CancellableContinuationImpl).hz = cancel$default_0;
  protoOf(CoroutineDispatcher).a9 = get;
  protoOf(CoroutineDispatcher).jf = minusKey;
  protoOf(BufferedChannel).h1e = close$default;
  protoOf(ChannelCoroutine).h1e = close$default;
  protoOf(ChannelFlow).f1h = fuse$default;
  protoOf(SharedFlowImpl).f1h = fuse$default;
  protoOf(StateFlowImpl).f1h = fuse$default;
  protoOf(CancellableContinuationWithOwner).hz = cancel$default_0;
  protoOf(MutexImpl).h1z = lock$default;
  protoOf(MutexImpl).j1z = unlock$default;
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  Key_instance_2 = new Key_1();
  GlobalScope_instance = new GlobalScope();
  Key_instance_3 = new Key_2();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_4 = new Key_3();
  NopCollector_instance = new NopCollector();
  counter = 0;
  DEBUG = false;
  RECOVER_STACK_TRACES = false;
  TaskContext_instance = new TaskContext();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BufferOverflow_DROP_LATEST_getInstance;
  _.$_$.b = BufferOverflow_DROP_OLDEST_getInstance;
  _.$_$.c = CoroutineStart_DEFAULT_getInstance;
  _.$_$.d = CoroutineStart_LAZY_getInstance;
  _.$_$.e = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.f = collectLatest;
  _.$_$.g = awaitCancellation;
  _.$_$.h = await_0;
  _.$_$.i = cancelAndJoin;
  _.$_$.j = coroutineScope;
  _.$_$.k = delay;
  _.$_$.l = delay_0;
  _.$_$.m = supervisorScope;
  _.$_$.n = withContext;
  _.$_$.o = withTimeoutOrNull;
  _.$_$.p = yield_0;
  _.$_$.q = ChannelResult__getOrNull_impl_f5e07h;
  _.$_$.r = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.s = Key_instance_1;
  _.$_$.t = Key_instance_2;
  _.$_$.u = Dispatchers_getInstance;
  _.$_$.v = GlobalScope_instance;
  _.$_$.w = Key_instance_3;
  _.$_$.x = ChannelResult;
  _.$_$.y = Channel;
  _.$_$.z = cancelConsumed;
  _.$_$.a1 = FlowCollector;
  _.$_$.b1 = MutableSharedFlow;
  _.$_$.c1 = MutableStateFlow;
  _.$_$.d1 = debounce;
  _.$_$.e1 = filterNotNull;
  _.$_$.f1 = flow;
  _.$_$.g1 = receiveAsFlow;
  _.$_$.h1 = Mutex_0;
  _.$_$.i1 = CancellableContinuationImpl;
  _.$_$.j1 = CompletableDeferred;
  _.$_$.k1 = CoroutineDispatcher;
  _.$_$.l1 = CoroutineScope_0;
  _.$_$.m1 = CoroutineScope;
  _.$_$.n1 = invokeOnTimeout;
  _.$_$.o1 = Delay;
  _.$_$.p1 = Job_0;
  _.$_$.q1 = Job;
  _.$_$.r1 = MainScope;
  _.$_$.s1 = Runnable;
  _.$_$.t1 = SupervisorJob;
  _.$_$.u1 = async;
  _.$_$.v1 = cancel;
  _.$_$.w1 = cancel_1;
  _.$_$.x1 = cancel_0;
  _.$_$.y1 = get_isActive_0;
  _.$_$.z1 = get_isActive;
  _.$_$.a2 = get_job;
  _.$_$.b2 = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
