// Compiled by ClojureScript 1.7.170 {}
goog.provide('jamesmacaulay.zelkova.keyboard');
goog.require('cljs.core');
goog.require('jamesmacaulay.zelkova.signal');
goog.require('goog.events');
goog.require('cljs.core.async');
jamesmacaulay.zelkova.keyboard.listen = (function jamesmacaulay$zelkova$keyboard$listen(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19459 = arguments.length;
var i__17864__auto___19460 = (0);
while(true){
if((i__17864__auto___19460 < len__17863__auto___19459)){
args__17870__auto__.push((arguments[i__17864__auto___19460]));

var G__19461 = (i__17864__auto___19460 + (1));
i__17864__auto___19460 = G__19461;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((2) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((2)),(0))):null);
return jamesmacaulay.zelkova.keyboard.listen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17871__auto__);
});

jamesmacaulay.zelkova.keyboard.listen.cljs$core$IFn$_invoke$arity$variadic = (function (el,type,args){
var out = cljs.core.apply.call(null,cljs.core.async.chan,(1),args);
goog.events.listen(el,type,((function (out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});

jamesmacaulay.zelkova.keyboard.listen.cljs$lang$maxFixedArity = (2);

jamesmacaulay.zelkova.keyboard.listen.cljs$lang$applyTo = (function (seq19456){
var G__19457 = cljs.core.first.call(null,seq19456);
var seq19456__$1 = cljs.core.next.call(null,seq19456);
var G__19458 = cljs.core.first.call(null,seq19456__$1);
var seq19456__$2 = cljs.core.next.call(null,seq19456__$1);
return jamesmacaulay.zelkova.keyboard.listen.cljs$core$IFn$_invoke$arity$variadic(G__19457,G__19458,seq19456__$2);
});
jamesmacaulay.zelkova.keyboard.keydown_channel = (function jamesmacaulay$zelkova$keyboard$keydown_channel(graph,opts){
return jamesmacaulay.zelkova.keyboard.listen.call(null,document,"keydown");
});
jamesmacaulay.zelkova.keyboard.keyup_channel = (function jamesmacaulay$zelkova$keyboard$keyup_channel(graph,opts){
return jamesmacaulay.zelkova.keyboard.listen.call(null,document,"keyup");
});
jamesmacaulay.zelkova.keyboard.blur_channel = (function jamesmacaulay$zelkova$keyboard$blur_channel(graph,opts){
return jamesmacaulay.zelkova.keyboard.listen.call(null,window,"blur");
});
jamesmacaulay.zelkova.keyboard.down_events = jamesmacaulay.zelkova.signal.input.call(null,(0),new cljs.core.Keyword("jamesmacaulay.zelkova.keyboard","down-events","jamesmacaulay.zelkova.keyboard/down-events",-435596590),jamesmacaulay.zelkova.keyboard.keydown_channel);
jamesmacaulay.zelkova.keyboard.up_events = jamesmacaulay.zelkova.signal.input.call(null,(0),new cljs.core.Keyword("jamesmacaulay.zelkova.keyboard","up-events","jamesmacaulay.zelkova.keyboard/up-events",-1589836342),jamesmacaulay.zelkova.keyboard.keyup_channel);
jamesmacaulay.zelkova.keyboard.blur_events = jamesmacaulay.zelkova.signal.input.call(null,(0),new cljs.core.Keyword("jamesmacaulay.zelkova.keyboard","blur-events","jamesmacaulay.zelkova.keyboard/blur-events",-453638708),jamesmacaulay.zelkova.keyboard.blur_channel);
jamesmacaulay.zelkova.keyboard.empty_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt-key","alt-key",-965170049),false,new cljs.core.Keyword(null,"meta-key","meta-key",280559106),false,new cljs.core.Keyword(null,"key-codes","key-codes",284454881),cljs.core.PersistentHashSet.EMPTY], null);
if(typeof jamesmacaulay.zelkova.keyboard.event_action !== 'undefined'){
} else {
jamesmacaulay.zelkova.keyboard.event_action = (function (){var method_table__17718__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17719__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17720__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17721__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17722__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"jamesmacaulay.zelkova.keyboard","event-action"),((function (method_table__17718__auto__,prefer_table__17719__auto__,method_cache__17720__auto__,cached_hierarchy__17721__auto__,hierarchy__17722__auto__){
return (function (state,event){
return event.type;
});})(method_table__17718__auto__,prefer_table__17719__auto__,method_cache__17720__auto__,cached_hierarchy__17721__auto__,hierarchy__17722__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17722__auto__,method_table__17718__auto__,prefer_table__17719__auto__,method_cache__17720__auto__,cached_hierarchy__17721__auto__));
})();
}
cljs.core._add_method.call(null,jamesmacaulay.zelkova.keyboard.event_action,"keydown",(function (state,event){
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-codes","key-codes",284454881)], null),cljs.core.conj,event.keyCode),new cljs.core.Keyword(null,"alt","alt",-3214426),event.altKey,new cljs.core.Keyword(null,"meta","meta",1499536964),event.metaKey);
}));
cljs.core._add_method.call(null,jamesmacaulay.zelkova.keyboard.event_action,"keyup",(function (state,event){
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-codes","key-codes",284454881)], null),cljs.core.disj,event.keyCode),new cljs.core.Keyword(null,"alt","alt",-3214426),event.altKey,new cljs.core.Keyword(null,"meta","meta",1499536964),event.metaKey);
}));
cljs.core._add_method.call(null,jamesmacaulay.zelkova.keyboard.event_action,"blur",(function (state,event){
return jamesmacaulay.zelkova.keyboard.empty_state;
}));
jamesmacaulay.zelkova.keyboard.key_merge = jamesmacaulay.zelkova.signal.reductions.call(null,jamesmacaulay.zelkova.keyboard.event_action,jamesmacaulay.zelkova.keyboard.empty_state,jamesmacaulay.zelkova.signal.merge.call(null,jamesmacaulay.zelkova.keyboard.down_events,jamesmacaulay.zelkova.keyboard.up_events,jamesmacaulay.zelkova.keyboard.blur_events));
jamesmacaulay.zelkova.keyboard.key_signal = (function jamesmacaulay$zelkova$keyboard$key_signal(f){
return jamesmacaulay.zelkova.signal.drop_repeats.call(null,jamesmacaulay.zelkova.signal.map.call(null,f,jamesmacaulay.zelkova.keyboard.key_merge));
});
/**
 * A signal of sets of the numeric key codes of whichever keys are
 * currently depressed.
 */
jamesmacaulay.zelkova.keyboard.keys_down = jamesmacaulay.zelkova.keyboard.key_signal.call(null,new cljs.core.Keyword(null,"key-codes","key-codes",284454881));
/**
 * Takes a key code to associate with `up`, `down`, `left`, and `right`, and
 * returns a signal of maps with `:x` and `:y` keys, and values of -1, 0, or 1
 * based on which keys are pressed.
 */
jamesmacaulay.zelkova.keyboard.directions = (function jamesmacaulay$zelkova$keyboard$directions(up,down,left,right){
return jamesmacaulay.zelkova.keyboard.key_signal.call(null,(function (p__19465){
var map__19466 = p__19465;
var map__19466__$1 = ((((!((map__19466 == null)))?((((map__19466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19466):map__19466);
var key_codes = cljs.core.get.call(null,map__19466__$1,new cljs.core.Keyword(null,"key-codes","key-codes",284454881));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((cljs.core.truth_(key_codes.call(null,right))?(1):(0)) + (cljs.core.truth_(key_codes.call(null,left))?(-1):(0))),new cljs.core.Keyword(null,"y","y",-1757859776),((cljs.core.truth_(key_codes.call(null,up))?(1):(0)) + (cljs.core.truth_(key_codes.call(null,down))?(-1):(0)))], null);
}));
});
/**
 * A signal of `:x`/`:y` maps as per the `directions` function, with
 * the arrow keys used for directions.
 */
jamesmacaulay.zelkova.keyboard.arrows = jamesmacaulay.zelkova.keyboard.directions.call(null,(38),(40),(37),(39));
/**
 * A signal of `:x`/`:y` maps as per the `directions` function, with
 * the `w`, `a`, `s`, and `d` used for directions.
 */
jamesmacaulay.zelkova.keyboard.wasd = jamesmacaulay.zelkova.keyboard.directions.call(null,(87),(83),(65),(68));
/**
 * Takes a key code and returns a boolean signal which is `true` when the
 * corresponding key is depressed.
 */
jamesmacaulay.zelkova.keyboard.down_QMARK_ = (function jamesmacaulay$zelkova$keyboard$down_QMARK_(code){
return jamesmacaulay.zelkova.keyboard.key_signal.call(null,(function (p__19471){
var map__19472 = p__19471;
var map__19472__$1 = ((((!((map__19472 == null)))?((((map__19472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19472):map__19472);
var key_codes = cljs.core.get.call(null,map__19472__$1,new cljs.core.Keyword(null,"key-codes","key-codes",284454881));
return cljs.core.boolean$.call(null,key_codes.call(null,code));
}));
});
/**
 * A boolean signal which is `true` when the alt key is
 * depressed.
 */
jamesmacaulay.zelkova.keyboard.alt = jamesmacaulay.zelkova.keyboard.key_signal.call(null,new cljs.core.Keyword(null,"alt","alt",-3214426));
/**
 * A boolean signal which is `true` when the meta key is depressed
 * (this is the Command key on a Mac, and the Windows key on Windows).
 */
jamesmacaulay.zelkova.keyboard.meta = jamesmacaulay.zelkova.keyboard.key_signal.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964));
/**
 * A boolean signal which is `true` when the control key is
 * depressed.
 */
jamesmacaulay.zelkova.keyboard.ctrl = jamesmacaulay.zelkova.keyboard.down_QMARK_.call(null,(17));
/**
 * A boolean signal which is `true` when the shift key is
 * depressed.
 */
jamesmacaulay.zelkova.keyboard.shift = jamesmacaulay.zelkova.keyboard.down_QMARK_.call(null,(16));
/**
 * A boolean signal which is `true` when the space key is
 * depressed.
 */
jamesmacaulay.zelkova.keyboard.space = jamesmacaulay.zelkova.keyboard.down_QMARK_.call(null,(32));
/**
 * A boolean signal which is `true` when the enter key is
 * depressed.
 */
jamesmacaulay.zelkova.keyboard.enter = jamesmacaulay.zelkova.keyboard.down_QMARK_.call(null,(13));
/**
 * A signal of the code of the last pressed key.
 */
jamesmacaulay.zelkova.keyboard.last_pressed = jamesmacaulay.zelkova.signal.map.call(null,(function (p1__19474_SHARP_){
return p1__19474_SHARP_.keyCode;
}),jamesmacaulay.zelkova.keyboard.down_events);

//# sourceMappingURL=keyboard.js.map?rel=1457129833517