// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19857__auto__ = [];
var len__19850__auto___30760 = arguments.length;
var i__19851__auto___30761 = (0);
while(true){
if((i__19851__auto___30761 < len__19850__auto___30760)){
args__19857__auto__.push((arguments[i__19851__auto___30761]));

var G__30762 = (i__19851__auto___30761 + (1));
i__19851__auto___30761 = G__30762;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((2) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19858__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30752_30763 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30753_30764 = null;
var count__30754_30765 = (0);
var i__30755_30766 = (0);
while(true){
if((i__30755_30766 < count__30754_30765)){
var k_30767 = cljs.core._nth.call(null,chunk__30753_30764,i__30755_30766);
e.setAttribute(cljs.core.name.call(null,k_30767),cljs.core.get.call(null,attrs,k_30767));

var G__30768 = seq__30752_30763;
var G__30769 = chunk__30753_30764;
var G__30770 = count__30754_30765;
var G__30771 = (i__30755_30766 + (1));
seq__30752_30763 = G__30768;
chunk__30753_30764 = G__30769;
count__30754_30765 = G__30770;
i__30755_30766 = G__30771;
continue;
} else {
var temp__4657__auto___30772 = cljs.core.seq.call(null,seq__30752_30763);
if(temp__4657__auto___30772){
var seq__30752_30773__$1 = temp__4657__auto___30772;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30752_30773__$1)){
var c__19556__auto___30774 = cljs.core.chunk_first.call(null,seq__30752_30773__$1);
var G__30775 = cljs.core.chunk_rest.call(null,seq__30752_30773__$1);
var G__30776 = c__19556__auto___30774;
var G__30777 = cljs.core.count.call(null,c__19556__auto___30774);
var G__30778 = (0);
seq__30752_30763 = G__30775;
chunk__30753_30764 = G__30776;
count__30754_30765 = G__30777;
i__30755_30766 = G__30778;
continue;
} else {
var k_30779 = cljs.core.first.call(null,seq__30752_30773__$1);
e.setAttribute(cljs.core.name.call(null,k_30779),cljs.core.get.call(null,attrs,k_30779));

var G__30780 = cljs.core.next.call(null,seq__30752_30773__$1);
var G__30781 = null;
var G__30782 = (0);
var G__30783 = (0);
seq__30752_30763 = G__30780;
chunk__30753_30764 = G__30781;
count__30754_30765 = G__30782;
i__30755_30766 = G__30783;
continue;
}
} else {
}
}
break;
}

var seq__30756_30784 = cljs.core.seq.call(null,children);
var chunk__30757_30785 = null;
var count__30758_30786 = (0);
var i__30759_30787 = (0);
while(true){
if((i__30759_30787 < count__30758_30786)){
var ch_30788 = cljs.core._nth.call(null,chunk__30757_30785,i__30759_30787);
e.appendChild(ch_30788);

var G__30789 = seq__30756_30784;
var G__30790 = chunk__30757_30785;
var G__30791 = count__30758_30786;
var G__30792 = (i__30759_30787 + (1));
seq__30756_30784 = G__30789;
chunk__30757_30785 = G__30790;
count__30758_30786 = G__30791;
i__30759_30787 = G__30792;
continue;
} else {
var temp__4657__auto___30793 = cljs.core.seq.call(null,seq__30756_30784);
if(temp__4657__auto___30793){
var seq__30756_30794__$1 = temp__4657__auto___30793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30756_30794__$1)){
var c__19556__auto___30795 = cljs.core.chunk_first.call(null,seq__30756_30794__$1);
var G__30796 = cljs.core.chunk_rest.call(null,seq__30756_30794__$1);
var G__30797 = c__19556__auto___30795;
var G__30798 = cljs.core.count.call(null,c__19556__auto___30795);
var G__30799 = (0);
seq__30756_30784 = G__30796;
chunk__30757_30785 = G__30797;
count__30758_30786 = G__30798;
i__30759_30787 = G__30799;
continue;
} else {
var ch_30800 = cljs.core.first.call(null,seq__30756_30794__$1);
e.appendChild(ch_30800);

var G__30801 = cljs.core.next.call(null,seq__30756_30794__$1);
var G__30802 = null;
var G__30803 = (0);
var G__30804 = (0);
seq__30756_30784 = G__30801;
chunk__30757_30785 = G__30802;
count__30758_30786 = G__30803;
i__30759_30787 = G__30804;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq30749){
var G__30750 = cljs.core.first.call(null,seq30749);
var seq30749__$1 = cljs.core.next.call(null,seq30749);
var G__30751 = cljs.core.first.call(null,seq30749__$1);
var seq30749__$2 = cljs.core.next.call(null,seq30749__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__30750,G__30751,seq30749__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19670__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19671__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19674__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19670__auto__,prefer_table__19671__auto__,method_cache__19672__auto__,cached_hierarchy__19673__auto__,hierarchy__19674__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19670__auto__,prefer_table__19671__auto__,method_cache__19672__auto__,cached_hierarchy__19673__auto__,hierarchy__19674__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19674__auto__,method_table__19670__auto__,prefer_table__19671__auto__,method_cache__19672__auto__,cached_hierarchy__19673__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_30805 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30805.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30805.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_30805.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_30805);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__30806,st_map){
var map__30813 = p__30806;
var map__30813__$1 = ((((!((map__30813 == null)))?((((map__30813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30813):map__30813);
var container_el = cljs.core.get.call(null,map__30813__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30813,map__30813__$1,container_el){
return (function (p__30815){
var vec__30816 = p__30815;
var k = cljs.core.nth.call(null,vec__30816,(0),null);
var v = cljs.core.nth.call(null,vec__30816,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30813,map__30813__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__30819,dom_str){
var map__30822 = p__30819;
var map__30822__$1 = ((((!((map__30822 == null)))?((((map__30822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30822):map__30822);
var c = map__30822__$1;
var content_area_el = cljs.core.get.call(null,map__30822__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__30824){
var map__30827 = p__30824;
var map__30827__$1 = ((((!((map__30827 == null)))?((((map__30827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30827):map__30827);
var content_area_el = cljs.core.get.call(null,map__30827__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__){
return (function (state_30870){
var state_val_30871 = (state_30870[(1)]);
if((state_val_30871 === (1))){
var inst_30855 = (state_30870[(7)]);
var inst_30855__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30856 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30857 = ["10px","10px","100%","68px","1.0"];
var inst_30858 = cljs.core.PersistentHashMap.fromArrays(inst_30856,inst_30857);
var inst_30859 = cljs.core.merge.call(null,inst_30858,style);
var inst_30860 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30855__$1,inst_30859);
var inst_30861 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30855__$1,msg);
var inst_30862 = cljs.core.async.timeout.call(null,(300));
var state_30870__$1 = (function (){var statearr_30872 = state_30870;
(statearr_30872[(7)] = inst_30855__$1);

(statearr_30872[(8)] = inst_30860);

(statearr_30872[(9)] = inst_30861);

return statearr_30872;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30870__$1,(2),inst_30862);
} else {
if((state_val_30871 === (2))){
var inst_30855 = (state_30870[(7)]);
var inst_30864 = (state_30870[(2)]);
var inst_30865 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30866 = ["auto"];
var inst_30867 = cljs.core.PersistentHashMap.fromArrays(inst_30865,inst_30866);
var inst_30868 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30855,inst_30867);
var state_30870__$1 = (function (){var statearr_30873 = state_30870;
(statearr_30873[(10)] = inst_30864);

return statearr_30873;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30870__$1,inst_30868);
} else {
return null;
}
}
});})(c__21107__auto__))
;
return ((function (switch__21092__auto__,c__21107__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21093__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21093__auto____0 = (function (){
var statearr_30877 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30877[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21093__auto__);

(statearr_30877[(1)] = (1));

return statearr_30877;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21093__auto____1 = (function (state_30870){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_30870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e30878){if((e30878 instanceof Object)){
var ex__21096__auto__ = e30878;
var statearr_30879_30881 = state_30870;
(statearr_30879_30881[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30882 = state_30870;
state_30870 = G__30882;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21093__auto__ = function(state_30870){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21093__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21093__auto____1.call(this,state_30870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21093__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21093__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__))
})();
var state__21109__auto__ = (function (){var statearr_30880 = f__21108__auto__.call(null);
(statearr_30880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_30880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__))
);

return c__21107__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__30886 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__30886,(0),null);
var ln = cljs.core.nth.call(null,vec__30886,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__30893 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__30893,(0),null);
var file_line = cljs.core.nth.call(null,vec__30893,(1),null);
var file_column = cljs.core.nth.call(null,vec__30893,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30893,file_name,file_line,file_column){
return (function (p1__30889_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__30889_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__30893,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18742__auto__ = file_line;
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
var and__18730__auto__ = cause;
if(cljs.core.truth_(and__18730__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18730__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__30898 = figwheel.client.heads_up.ensure_container.call(null);
var map__30898__$1 = ((((!((map__30898 == null)))?((((map__30898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30898):map__30898);
var content_area_el = cljs.core.get.call(null,map__30898__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__){
return (function (state_30946){
var state_val_30947 = (state_30946[(1)]);
if((state_val_30947 === (1))){
var inst_30929 = (state_30946[(7)]);
var inst_30929__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30930 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30931 = ["0.0"];
var inst_30932 = cljs.core.PersistentHashMap.fromArrays(inst_30930,inst_30931);
var inst_30933 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30929__$1,inst_30932);
var inst_30934 = cljs.core.async.timeout.call(null,(300));
var state_30946__$1 = (function (){var statearr_30948 = state_30946;
(statearr_30948[(7)] = inst_30929__$1);

(statearr_30948[(8)] = inst_30933);

return statearr_30948;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30946__$1,(2),inst_30934);
} else {
if((state_val_30947 === (2))){
var inst_30929 = (state_30946[(7)]);
var inst_30936 = (state_30946[(2)]);
var inst_30937 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30938 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30939 = cljs.core.PersistentHashMap.fromArrays(inst_30937,inst_30938);
var inst_30940 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30929,inst_30939);
var inst_30941 = cljs.core.async.timeout.call(null,(200));
var state_30946__$1 = (function (){var statearr_30949 = state_30946;
(statearr_30949[(9)] = inst_30936);

(statearr_30949[(10)] = inst_30940);

return statearr_30949;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30946__$1,(3),inst_30941);
} else {
if((state_val_30947 === (3))){
var inst_30929 = (state_30946[(7)]);
var inst_30943 = (state_30946[(2)]);
var inst_30944 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30929,"");
var state_30946__$1 = (function (){var statearr_30950 = state_30946;
(statearr_30950[(11)] = inst_30943);

return statearr_30950;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30946__$1,inst_30944);
} else {
return null;
}
}
}
});})(c__21107__auto__))
;
return ((function (switch__21092__auto__,c__21107__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21093__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21093__auto____0 = (function (){
var statearr_30954 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30954[(0)] = figwheel$client$heads_up$clear_$_state_machine__21093__auto__);

(statearr_30954[(1)] = (1));

return statearr_30954;
});
var figwheel$client$heads_up$clear_$_state_machine__21093__auto____1 = (function (state_30946){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_30946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e30955){if((e30955 instanceof Object)){
var ex__21096__auto__ = e30955;
var statearr_30956_30958 = state_30946;
(statearr_30956_30958[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30959 = state_30946;
state_30946 = G__30959;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21093__auto__ = function(state_30946){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21093__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21093__auto____1.call(this,state_30946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21093__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21093__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__))
})();
var state__21109__auto__ = (function (){var statearr_30957 = f__21108__auto__.call(null);
(statearr_30957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_30957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__))
);

return c__21107__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__){
return (function (state_30991){
var state_val_30992 = (state_30991[(1)]);
if((state_val_30992 === (1))){
var inst_30981 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30991__$1 = state_30991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30991__$1,(2),inst_30981);
} else {
if((state_val_30992 === (2))){
var inst_30983 = (state_30991[(2)]);
var inst_30984 = cljs.core.async.timeout.call(null,(400));
var state_30991__$1 = (function (){var statearr_30993 = state_30991;
(statearr_30993[(7)] = inst_30983);

return statearr_30993;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30991__$1,(3),inst_30984);
} else {
if((state_val_30992 === (3))){
var inst_30986 = (state_30991[(2)]);
var inst_30987 = figwheel.client.heads_up.clear.call(null);
var state_30991__$1 = (function (){var statearr_30994 = state_30991;
(statearr_30994[(8)] = inst_30986);

return statearr_30994;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30991__$1,(4),inst_30987);
} else {
if((state_val_30992 === (4))){
var inst_30989 = (state_30991[(2)]);
var state_30991__$1 = state_30991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30991__$1,inst_30989);
} else {
return null;
}
}
}
}
});})(c__21107__auto__))
;
return ((function (switch__21092__auto__,c__21107__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21093__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21093__auto____0 = (function (){
var statearr_30998 = [null,null,null,null,null,null,null,null,null];
(statearr_30998[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21093__auto__);

(statearr_30998[(1)] = (1));

return statearr_30998;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21093__auto____1 = (function (state_30991){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_30991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e30999){if((e30999 instanceof Object)){
var ex__21096__auto__ = e30999;
var statearr_31000_31002 = state_30991;
(statearr_31000_31002[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31003 = state_30991;
state_30991 = G__31003;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21093__auto__ = function(state_30991){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21093__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21093__auto____1.call(this,state_30991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21093__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21093__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__))
})();
var state__21109__auto__ = (function (){var statearr_31001 = f__21108__auto__.call(null);
(statearr_31001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_31001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__))
);

return c__21107__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1492189023068