// Compiled by ClojureScript 1.9.293 {}
goog.provide('cemerick.url');
goog.require('cljs.core');
goog.require('pathetic.core');
goog.require('clojure.string');
goog.require('goog.Uri');
cemerick.url.url_encode = (function cemerick$url$url_encode(string){
var G__20127 = string;
var G__20127__$1 = (((G__20127 == null))?null:[cljs.core.str(G__20127)].join(''));
var G__20127__$2 = (((G__20127__$1 == null))?null:encodeURIComponent(G__20127__$1));
if((G__20127__$2 == null)){
return null;
} else {
return G__20127__$2.replace("+","%20");
}
});
cemerick.url.url_decode = (function cemerick$url$url_decode(string){
var G__20129 = string;
var G__20129__$1 = (((G__20129 == null))?null:[cljs.core.str(G__20129)].join(''));
if((G__20129__$1 == null)){
return null;
} else {
return decodeURIComponent(G__20129__$1);
}
});
cemerick.url.map__GT_query = (function cemerick$url$map__GT_query(m){
var G__20135 = cljs.core.seq.call(null,m);
var G__20135__$1 = (((G__20135 == null))?null:cljs.core.sort.call(null,G__20135));
var G__20135__$2 = (((G__20135__$1 == null))?null:cljs.core.map.call(null,((function (G__20135,G__20135__$1){
return (function (p__20136){
var vec__20137 = p__20136;
var k = cljs.core.nth.call(null,vec__20137,(0),null);
var v = cljs.core.nth.call(null,vec__20137,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cemerick.url.url_encode.call(null,cljs.core.name.call(null,k)),"=",cemerick.url.url_encode.call(null,[cljs.core.str(v)].join(''))], null);
});})(G__20135,G__20135__$1))
,G__20135__$1));
var G__20135__$3 = (((G__20135__$2 == null))?null:cljs.core.interpose.call(null,"&",G__20135__$2));
var G__20135__$4 = (((G__20135__$3 == null))?null:cljs.core.flatten.call(null,G__20135__$3));
if((G__20135__$4 == null)){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.str,G__20135__$4);
}
});
cemerick.url.split_param = (function cemerick$url$split_param(param){
return cljs.core.take.call(null,(2),cljs.core.concat.call(null,clojure.string.split.call(null,param,/=/),cljs.core.repeat.call(null,"")));
});
cemerick.url.query__GT_map = (function cemerick$url$query__GT_map(qstr){
if(!(clojure.string.blank_QMARK_.call(null,qstr))){
var G__20141 = clojure.string.split.call(null,qstr,/&/);
var G__20141__$1 = (((G__20141 == null))?null:cljs.core.seq.call(null,G__20141));
var G__20141__$2 = (((G__20141__$1 == null))?null:cljs.core.mapcat.call(null,cemerick.url.split_param,G__20141__$1));
var G__20141__$3 = (((G__20141__$2 == null))?null:cljs.core.map.call(null,cemerick.url.url_decode,G__20141__$2));
if((G__20141__$3 == null)){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.hash_map,G__20141__$3);
}
} else {
return null;
}
});
cemerick.url.port_str = (function cemerick$url$port_str(protocol,port){
if((cljs.core.not_EQ_.call(null,null,port)) && (cljs.core.not_EQ_.call(null,(-1),port)) && (!(((port === (80))) && (cljs.core._EQ_.call(null,protocol,"http")))) && (!(((port === (443))) && (cljs.core._EQ_.call(null,protocol,"https"))))){
return [cljs.core.str(":"),cljs.core.str(port)].join('');
} else {
return null;
}
});
cemerick.url.url_creds = (function cemerick$url$url_creds(username,password){
if(cljs.core.truth_(username)){
return [cljs.core.str(username),cljs.core.str(":"),cljs.core.str(password)].join('');
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cemerick.url.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cemerick.url.URL = (function (protocol,username,password,host,port,path,query,anchor,__meta,__extmap,__hash){
this.protocol = protocol;
this.username = username;
this.password = password;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.anchor = anchor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cemerick.url.URL.prototype.toString = (function (){
var self__ = this;
var this$ = this;
var creds = cemerick.url.url_creds.call(null,self__.username,self__.password);
return [cljs.core.str(self__.protocol),cljs.core.str("://"),cljs.core.str(creds),cljs.core.str((cljs.core.truth_(creds)?"@":null)),cljs.core.str(self__.host),cljs.core.str(cemerick.url.port_str.call(null,self__.protocol,self__.port)),cljs.core.str(self__.path),cljs.core.str(((cljs.core.seq.call(null,self__.query))?[cljs.core.str("?"),cljs.core.str(((typeof self__.query === 'string')?self__.query:cemerick.url.map__GT_query.call(null,self__.query)))].join(''):null)),cljs.core.str((cljs.core.truth_(self__.anchor)?[cljs.core.str("#"),cljs.core.str(self__.anchor)].join(''):null))].join('');
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19378__auto__,k__19379__auto__){
var self__ = this;
var this__19378__auto____$1 = this;
return cljs.core._lookup.call(null,this__19378__auto____$1,k__19379__auto__,null);
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19380__auto__,k20143,else__19381__auto__){
var self__ = this;
var this__19380__auto____$1 = this;
var G__20145 = (((k20143 instanceof cljs.core.Keyword))?k20143.fqn:null);
switch (G__20145) {
case "protocol":
return self__.protocol;

break;
case "username":
return self__.username;

break;
case "password":
return self__.password;

break;
case "host":
return self__.host;

break;
case "port":
return self__.port;

break;
case "path":
return self__.path;

break;
case "query":
return self__.query;

break;
case "anchor":
return self__.anchor;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20143,else__19381__auto__);

}
});

cemerick.url.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19392__auto__,writer__19393__auto__,opts__19394__auto__){
var self__ = this;
var this__19392__auto____$1 = this;
var pr_pair__19395__auto__ = ((function (this__19392__auto____$1){
return (function (keyval__19396__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19393__auto__,cljs.core.pr_writer,""," ","",opts__19394__auto__,keyval__19396__auto__);
});})(this__19392__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19393__auto__,pr_pair__19395__auto__,"#cemerick.url.URL{",", ","}",opts__19394__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cemerick.url.URL.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20142){
var self__ = this;
var G__20142__$1 = this;
return (new cljs.core.RecordIter((0),G__20142__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cemerick.url.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19376__auto__){
var self__ = this;
var this__19376__auto____$1 = this;
return self__.__meta;
});

cemerick.url.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19372__auto__){
var self__ = this;
var this__19372__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19382__auto__){
var self__ = this;
var this__19382__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19373__auto__){
var self__ = this;
var this__19373__auto____$1 = this;
var h__19191__auto__ = self__.__hash;
if(!((h__19191__auto__ == null))){
return h__19191__auto__;
} else {
var h__19191__auto____$1 = cljs.core.hash_imap.call(null,this__19373__auto____$1);
self__.__hash = h__19191__auto____$1;

return h__19191__auto____$1;
}
});

cemerick.url.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19374__auto__,other__19375__auto__){
var self__ = this;
var this__19374__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18744__auto__ = other__19375__auto__;
if(cljs.core.truth_(and__18744__auto__)){
var and__18744__auto____$1 = (this__19374__auto____$1.constructor === other__19375__auto__.constructor);
if(and__18744__auto____$1){
return cljs.core.equiv_map.call(null,this__19374__auto____$1,other__19375__auto__);
} else {
return and__18744__auto____$1;
}
} else {
return and__18744__auto__;
}
})())){
return true;
} else {
return false;
}
});

cemerick.url.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19387__auto__,k__19388__auto__){
var self__ = this;
var this__19387__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"protocol","protocol",652470118),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"username","username",1605666410),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"host","host",-1558485167),null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null),k__19388__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19387__auto____$1),self__.__meta),k__19388__auto__);
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19388__auto__)),null));
}
});

cemerick.url.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19385__auto__,k__19386__auto__,G__20142){
var self__ = this;
var this__19385__auto____$1 = this;
var pred__20146 = cljs.core.keyword_identical_QMARK_;
var expr__20147 = k__19386__auto__;
if(cljs.core.truth_(pred__20146.call(null,new cljs.core.Keyword(null,"protocol","protocol",652470118),expr__20147))){
return (new cemerick.url.URL(G__20142,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20146.call(null,new cljs.core.Keyword(null,"username","username",1605666410),expr__20147))){
return (new cemerick.url.URL(self__.protocol,G__20142,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20146.call(null,new cljs.core.Keyword(null,"password","password",417022471),expr__20147))){
return (new cemerick.url.URL(self__.protocol,self__.username,G__20142,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20146.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),expr__20147))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,G__20142,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20146.call(null,new cljs.core.Keyword(null,"port","port",1534937262),expr__20147))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,G__20142,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20146.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__20147))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,G__20142,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20146.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),expr__20147))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,G__20142,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20146.call(null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),expr__20147))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,G__20142,self__.__meta,self__.__extmap,null));
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19386__auto__,G__20142),null));
}
}
}
}
}
}
}
}
});

cemerick.url.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19390__auto__){
var self__ = this;
var this__19390__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19377__auto__,G__20142){
var self__ = this;
var this__19377__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,G__20142,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19383__auto__,entry__19384__auto__){
var self__ = this;
var this__19383__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19384__auto__)){
return cljs.core._assoc.call(null,this__19383__auto____$1,cljs.core._nth.call(null,entry__19384__auto__,(0)),cljs.core._nth.call(null,entry__19384__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19383__auto____$1,entry__19384__auto__);
}
});

cemerick.url.URL.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null),new cljs.core.Symbol(null,"username","username",-1048769359,null),new cljs.core.Symbol(null,"password","password",2057553998,null),new cljs.core.Symbol(null,"host","host",82046360,null),new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Symbol(null,"anchor","anchor",-1104797280,null)], null);
});

cemerick.url.URL.cljs$lang$type = true;

cemerick.url.URL.cljs$lang$ctorPrSeq = (function (this__19412__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cemerick.url/URL");
});

cemerick.url.URL.cljs$lang$ctorPrWriter = (function (this__19412__auto__,writer__19413__auto__){
return cljs.core._write.call(null,writer__19413__auto__,"cemerick.url/URL");
});

cemerick.url.__GT_URL = (function cemerick$url$__GT_URL(protocol,username,password,host,port,path,query,anchor){
return (new cemerick.url.URL(protocol,username,password,host,port,path,query,anchor,null,null,null));
});

cemerick.url.map__GT_URL = (function cemerick$url$map__GT_URL(G__20144){
return (new cemerick.url.URL(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(G__20144),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(G__20144),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(G__20144),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(G__20144),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__20144),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__20144),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__20144),new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(G__20144),null,cljs.core.dissoc.call(null,G__20144,new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489)),null));
});

cemerick.url.translate_default = (function cemerick$url$translate_default(s,old_default,new_default){
if(cljs.core._EQ_.call(null,s,old_default)){
return new_default;
} else {
return s;
}
});
cemerick.url.url_STAR_ = (function cemerick$url$url_STAR_(url){
var url__$1 = (new goog.Uri(url));
var vec__20153 = clojure.string.split.call(null,(function (){var or__18756__auto__ = url__$1.getUserInfo();
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
} else {
return "";
}
})(),/:/,(2));
var user = cljs.core.nth.call(null,vec__20153,(0),null);
var pass = cljs.core.nth.call(null,vec__20153,(1),null);
return (new cemerick.url.URL(url__$1.getScheme(),(function (){var and__18744__auto__ = cljs.core.seq.call(null,user);
if(and__18744__auto__){
return user;
} else {
return and__18744__auto__;
}
})(),(function (){var and__18744__auto__ = cljs.core.seq.call(null,pass);
if(and__18744__auto__){
return pass;
} else {
return and__18744__auto__;
}
})(),url__$1.getDomain(),cemerick.url.translate_default.call(null,url__$1.getPort(),null,(-1)),pathetic.core.normalize.call(null,url__$1.getPath()),cemerick.url.query__GT_map.call(null,cemerick.url.translate_default.call(null,url__$1.getQuery(),"",null)),cemerick.url.translate_default.call(null,url__$1.getFragment(),"",null),null,null,null));
});
/**
 * Returns a new URL record for the given url string(s).
 * 
 * The first argument must be a base url — either a complete url string, or
 * a pre-existing URL record instance that will serve as the basis for the new
 * URL.  Any additional arguments must be strings, which are interpreted as
 * relative paths that are successively resolved against the base url's path
 * to construct the final :path in the returned URL record. 
 * 
 * This function does not perform any url-encoding.  Use `url-encode` to encode
 * URL path segments as desired before passing them into this fn.
 */
cemerick.url.url = (function cemerick$url$url(var_args){
var args20156 = [];
var len__19864__auto___20161 = arguments.length;
var i__19865__auto___20162 = (0);
while(true){
if((i__19865__auto___20162 < len__19864__auto___20161)){
args20156.push((arguments[i__19865__auto___20162]));

var G__20163 = (i__19865__auto___20162 + (1));
i__19865__auto___20162 = G__20163;
continue;
} else {
}
break;
}

var G__20160 = args20156.length;
switch (G__20160) {
case 1:
return cemerick.url.url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__19883__auto__ = (new cljs.core.IndexedSeq(args20156.slice((1)),(0),null));
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19883__auto__);

}
});

cemerick.url.url.cljs$core$IFn$_invoke$arity$1 = (function (url){
if((url instanceof cemerick.url.URL)){
return url;
} else {
return cemerick.url.url_STAR_.call(null,url);
}
});

cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic = (function (base_url,path_segments){
var base_url__$1 = (((base_url instanceof cemerick.url.URL))?base_url:cemerick.url.url.call(null,base_url));
return cljs.core.assoc.call(null,base_url__$1,new cljs.core.Keyword(null,"path","path",-188191168),pathetic.core.normalize.call(null,cljs.core.reduce.call(null,pathetic.core.resolve,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(base_url__$1),path_segments)));
});

cemerick.url.url.cljs$lang$applyTo = (function (seq20157){
var G__20158 = cljs.core.first.call(null,seq20157);
var seq20157__$1 = cljs.core.next.call(null,seq20157);
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic(G__20158,seq20157__$1);
});

cemerick.url.url.cljs$lang$maxFixedArity = (1);


//# sourceMappingURL=url.js.map?rel=1485901319732