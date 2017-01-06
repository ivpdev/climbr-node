// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.utils.utils');
goog.require('cljs.core');
goog.require('cemerick.url');
climbr.utils.utils.def_ = (function climbr$utils$utils$def_(_AMPERSAND_form,_AMPERSAND_env,item,value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__19579__auto__ = item;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19579__auto__);
})(),(function (){var x__19579__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19579__auto__);
})())));
});

climbr.utils.utils.def_.cljs$lang$macro = true;
climbr.utils.utils.debug = (function climbr$utils$utils$debug(x){
window.debug1 = x;

return console.log(x);
});
/**
 * Ignores body, yields nil
 */
climbr.utils.utils.TODO = (function climbr$utils$utils$TODO(var_args){
var args__19857__auto__ = [];
var len__19850__auto___30681 = arguments.length;
var i__19851__auto___30682 = (0);
while(true){
if((i__19851__auto___30682 < len__19850__auto___30681)){
args__19857__auto__.push((arguments[i__19851__auto___30682]));

var G__30683 = (i__19851__auto___30682 + (1));
i__19851__auto___30682 = G__30683;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((2) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((2)),(0),null)):null);
return climbr.utils.utils.TODO.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19858__auto__);
});

climbr.utils.utils.TODO.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

climbr.utils.utils.TODO.cljs$lang$maxFixedArity = (2);

climbr.utils.utils.TODO.cljs$lang$applyTo = (function (seq30678){
var G__30679 = cljs.core.first.call(null,seq30678);
var seq30678__$1 = cljs.core.next.call(null,seq30678);
var G__30680 = cljs.core.first.call(null,seq30678__$1);
var seq30678__$2 = cljs.core.next.call(null,seq30678__$1);
return climbr.utils.utils.TODO.cljs$core$IFn$_invoke$arity$variadic(G__30679,G__30680,seq30678__$2);
});


climbr.utils.utils.TODO.cljs$lang$macro = true;
/**
 * true if coll contains el
 */
climbr.utils.utils.in_QMARK_ = (function climbr$utils$utils$in_QMARK_(coll,el){
return cljs.core.some.call(null,(function (p1__30684_SHARP_){
return cljs.core._EQ_.call(null,el,p1__30684_SHARP_);
}),coll);
});
climbr.utils.utils.not_nil_QMARK_ = cljs.core.complement.call(null,cljs.core.nil_QMARK_);
/**
 * get name of level from URL
 */
climbr.utils.utils.get_current_level_name = (function climbr$utils$utils$get_current_level_name(){
var location_details = cemerick.url.url.call(null,window.location.href);
var query = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(location_details);
var level = cljs.core.get.call(null,query,"l");
var default_level = "l0";
var or__18742__auto__ = level;
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
return default_level;
}
});
climbr.utils.utils.hide_loading_banner_BANG_ = (function climbr$utils$utils$hide_loading_banner_BANG_(){
var loading_el = document.getElementById("loading");
return loading_el.hidden = true;
});
/**
 * computes cartesian product of two collections returning collection of all possible combinations
 */
climbr.utils.utils.cartesian_prod = (function climbr$utils$utils$cartesian_prod(col1,col2){
var iter__19525__auto__ = (function climbr$utils$utils$cartesian_prod_$_iter__30691(s__30692){
return (new cljs.core.LazySeq(null,(function (){
var s__30692__$1 = s__30692;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30692__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19521__auto__ = ((function (s__30692__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function climbr$utils$utils$cartesian_prod_$_iter__30691_$_iter__30693(s__30694){
return (new cljs.core.LazySeq(null,((function (s__30692__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__30694__$1 = s__30694;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__30694__$1);
if(temp__4657__auto____$1){
var s__30694__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30694__$2)){
var c__19523__auto__ = cljs.core.chunk_first.call(null,s__30694__$2);
var size__19524__auto__ = cljs.core.count.call(null,c__19523__auto__);
var b__30696 = cljs.core.chunk_buffer.call(null,size__19524__auto__);
if((function (){var i__30695 = (0);
while(true){
if((i__30695 < size__19524__auto__)){
var y = cljs.core._nth.call(null,c__19523__auto__,i__30695);
cljs.core.chunk_append.call(null,b__30696,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__30697 = (i__30695 + (1));
i__30695 = G__30697;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30696),climbr$utils$utils$cartesian_prod_$_iter__30691_$_iter__30693.call(null,cljs.core.chunk_rest.call(null,s__30694__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30696),null);
}
} else {
var y = cljs.core.first.call(null,s__30694__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),climbr$utils$utils$cartesian_prod_$_iter__30691_$_iter__30693.call(null,cljs.core.rest.call(null,s__30694__$2)));
}
} else {
return null;
}
break;
}
});})(s__30692__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__30692__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__19522__auto__ = cljs.core.seq.call(null,iterys__19521__auto__.call(null,col2));
if(fs__19522__auto__){
return cljs.core.concat.call(null,fs__19522__auto__,climbr$utils$utils$cartesian_prod_$_iter__30691.call(null,cljs.core.rest.call(null,s__30692__$1)));
} else {
var G__30698 = cljs.core.rest.call(null,s__30692__$1);
s__30692__$1 = G__30698;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19525__auto__.call(null,col1);
});

//# sourceMappingURL=utils.js.map?rel=1483691448765