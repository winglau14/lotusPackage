var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'5b6659fe'])
Z([[6],[[7],[3,'ConfirmData']],[3,'showConfirm']])
Z([3,'handleProxy'])
Z([3,'_div M5b6659fe confirm-item'])
Z([[7],[3,'$k']])
Z([1,'5b6659fe-2'])
Z([3,'_div M5b6659fe confirm-item-wrap'])
Z([[6],[[7],[3,'ConfirmData']],[3,'showImg']])
Z([[7],[3,'twoButton']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3058b05e'])
Z([[6],[[7],[3,'lotusLoadMData']],[3,'isShow']])
Z([[6],[[7],[3,'lotusLoadMData']],[3,'showLoadImg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7b3f1b4f'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'19fbbbce'])
Z([3,'_view M19fbbbce express-detail'])
Z([[7],[3,'flag']])
Z(z[2])
Z([[7],[3,'noDataFlag']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'19fbbbce'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'76436e79'])
Z([3,'_view M76436e79 fill-form-item-r'])
Z([[6],[[7],[3,'imageList']],[3,'length']])
Z([[2,'<'],[[6],[[7],[3,'imageList']],[3,'length']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'76436e79'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'6c567299'])
Z([[2,'>'],[[6],[[7],[3,'imageList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'6c567299'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1a34ca1f'])
Z([3,'_view M1a34ca1f express'])
Z([[6],[[7],[3,'history']],[3,'length']])
Z([[7],[3,'showJqMask']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1a34ca1f'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'34739fa7'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'34739fa7'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7d1c728e'])
Z([[7],[3,'pageShow']])
Z([3,'handleProxy'])
Z([3,'_scroll-view M7d1c728e list'])
Z([[7],[3,'$k']])
Z([1,'7d1c728e-0'])
Z([3,'0'])
Z([3,'true'])
Z([a,[3,' '],[[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'scrollHeight']]],[1,';']]])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7d1c728e-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3058b05e'])
Z([[7],[3,'noDataFlag']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7d1c728e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'18aaca0d'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'18aaca0d'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1264a47e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1264a47e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'6147c44e'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'6147c44e-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7b3f1b4f'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'6147c44e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'5a83f5b9'])
Z([3,'handleProxy'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'5a83f5b9-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'5a83f5b9-2'])
Z([3,'5b6659fe'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'5a83f5b9'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./common/slots.wxml','/components/lotusSplash/LotusSplash.vue.wxml','/components/lotusLoadMoreText/LotusLoadMoreText.vue.wxml','/components/lotusConfirm/LotusConfirm.vue.wxml','./components/lotusConfirm/LotusConfirm.vue.wxml','./components/lotusLoadMoreText/LotusLoadMoreText.vue.wxml','./components/lotusSplash/LotusSplash.vue.wxml','./pages/detail/detail.vue.wxml','./pages/detail/detail.wxml','./detail.vue.wxml','./pages/form/form.vue.wxml','./pages/form/form.wxml','./form.vue.wxml','./pages/formDetail/formDetail.vue.wxml','./pages/formDetail/formDetail.wxml','./formDetail.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','./index.vue.wxml','./pages/light/light.vue.wxml','./pages/light/light.wxml','./light.vue.wxml','./pages/list/list.vue.wxml','./pages/list/list.wxml','./list.vue.wxml','./pages/login/login.vue.wxml','./pages/login/login.wxml','./login.vue.wxml','./pages/success/success.vue.wxml','./pages/success/success.wxml','./success.vue.wxml','./pages/tempPage/tempPage.vue.wxml','./pages/tempPage/tempPage.wxml','./tempPage.vue.wxml','./pages/userCenter/userCenter.vue.wxml','./pages/userCenter/userCenter.wxml','./userCenter.vue.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
_ai(oB,x[2],e_,x[0],2,2)
_ai(oB,x[3],e_,x[0],3,2)
oB.pop()
oB.pop()
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1],x[2],x[3]],ic:[]}
d_[x[4]]={}
d_[x[4]]["5b6659fe"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[4]+':5b6659fe'
r.wxVkey=b
gg.f=$gdc(f_["./components/lotusConfirm/LotusConfirm.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[4]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_mz(z,'view',['bindtap',2,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',6,e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,7,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oD,cF)
if(_oz(z,8,e,s,gg)){cF.wxVkey=1
}
fE.wxXCkey=1
cF.wxXCkey=1
_(xC,oD)
_(oB,xC)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[4]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
d_[x[5]]["3058b05e"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[5]+':3058b05e'
r.wxVkey=b
gg.f=$gdc(f_["./components/lotusLoadMoreText/LotusLoadMoreText.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[5]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[5]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
d_[x[6]]["7b3f1b4f"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[6]+':7b3f1b4f'
r.wxVkey=b
gg.f=$gdc(f_["./components/lotusSplash/LotusSplash.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[6]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
d_[x[7]]["19fbbbce"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[7]+':19fbbbce'
r.wxVkey=b
gg.f=$gdc(f_["./pages/detail/detail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(oB,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[7]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oH=e_[x[8]].i
_ai(oH,x[9],e_,x[8],1,1)
var cI=_v()
_(r,cI)
var oJ=_oz(z,1,e,s,gg)
var lK=_gd(x[8],oJ,e_,d_)
if(lK){
var aL=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[8],2,18)
oH.pop()
return r
}
e_[x[8]]={f:m5,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[10]]={}
d_[x[10]]["76436e79"]=function(e,s,r,gg){
var z=gz$gwx_7()
var b=x[10]+':76436e79'
r.wxVkey=b
gg.f=$gdc(f_["./pages/form/form.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[10]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[10]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var bO=e_[x[11]].i
_ai(bO,x[12],e_,x[11],1,1)
var oP=_v()
_(r,oP)
var xQ=_oz(z,1,e,s,gg)
var oR=_gd(x[11],xQ,e_,d_)
if(oR){
var fS=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oP.wxXCkey=3
oR(fS,fS,oP,gg)
gg.f=cur_globalf
}
else _w(xQ,x[11],2,18)
bO.pop()
return r
}
e_[x[11]]={f:m7,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[13]]={}
d_[x[13]]["6c567299"]=function(e,s,r,gg){
var z=gz$gwx_9()
var b=x[13]+':6c567299'
r.wxVkey=b
gg.f=$gdc(f_["./pages/formDetail/formDetail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[13]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[13]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oV=e_[x[14]].i
_ai(oV,x[15],e_,x[14],1,1)
var cW=_v()
_(r,cW)
var oX=_oz(z,1,e,s,gg)
var lY=_gd(x[14],oX,e_,d_)
if(lY){
var aZ=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cW.wxXCkey=3
lY(aZ,aZ,cW,gg)
gg.f=cur_globalf
}
else _w(oX,x[14],2,18)
oV.pop()
return r
}
e_[x[14]]={f:m9,j:[],i:[],ti:[x[15]],ic:[]}
d_[x[16]]={}
d_[x[16]]["1a34ca1f"]=function(e,s,r,gg){
var z=gz$gwx_11()
var b=x[16]+':1a34ca1f'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[16]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var b3=e_[x[17]].i
_ai(b3,x[18],e_,x[17],1,1)
var o4=_v()
_(r,o4)
var x5=_oz(z,1,e,s,gg)
var o6=_gd(x[17],x5,e_,d_)
if(o6){
var f7=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o4.wxXCkey=3
o6(f7,f7,o4,gg)
gg.f=cur_globalf
}
else _w(x5,x[17],2,18)
b3.pop()
return r
}
e_[x[17]]={f:m11,j:[],i:[],ti:[x[18]],ic:[]}
d_[x[19]]={}
d_[x[19]]["34739fa7"]=function(e,s,r,gg){
var z=gz$gwx_13()
var b=x[19]+':34739fa7'
r.wxVkey=b
gg.f=$gdc(f_["./pages/light/light.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[19]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[19]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var o0=e_[x[20]].i
_ai(o0,x[21],e_,x[20],1,1)
var cAB=_v()
_(r,cAB)
var oBB=_oz(z,1,e,s,gg)
var lCB=_gd(x[20],oBB,e_,d_)
if(lCB){
var aDB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cAB.wxXCkey=3
lCB(aDB,aDB,cAB,gg)
gg.f=cur_globalf
}
else _w(oBB,x[20],2,18)
o0.pop()
return r
}
e_[x[20]]={f:m13,j:[],i:[],ti:[x[21]],ic:[]}
d_[x[22]]={}
d_[x[22]]["7d1c728e"]=function(e,s,r,gg){
var z=gz$gwx_15()
var b=x[22]+':7d1c728e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/list/list.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_mz(z,'scroll-view',['bindscrolltolower',2,'class',1,'data-comkey',2,'data-eventid',3,'lowerThreshold',4,'scrollY',5,'style',6],[],e,s,gg)
var fE=_v()
_(xC,fE)
var cF=_oz(z,10,e,s,gg)
var hG=_gd(x[22],cF,e_,d_)
if(hG){
var oH=_1z(z,9,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[22],1,1022)
var oD=_v()
_(xC,oD)
if(_oz(z,11,e,s,gg)){oD.wxVkey=1
}
oD.wxXCkey=1
_(oB,xC)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var eFB=e_[x[22]].i
_ai(eFB,x[2],e_,x[22],1,1)
eFB.pop()
return r
}
e_[x[22]]={f:m14,j:[],i:[],ti:[x[2]],ic:[]}
d_[x[23]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var oHB=e_[x[23]].i
_ai(oHB,x[24],e_,x[23],1,1)
var xIB=_v()
_(r,xIB)
var oJB=_oz(z,1,e,s,gg)
var fKB=_gd(x[23],oJB,e_,d_)
if(fKB){
var cLB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
xIB.wxXCkey=3
fKB(cLB,cLB,xIB,gg)
gg.f=cur_globalf
}
else _w(oJB,x[23],2,18)
oHB.pop()
return r
}
e_[x[23]]={f:m15,j:[],i:[],ti:[x[24]],ic:[]}
d_[x[25]]={}
d_[x[25]]["18aaca0d"]=function(e,s,r,gg){
var z=gz$gwx_17()
var b=x[25]+':18aaca0d'
r.wxVkey=b
gg.f=$gdc(f_["./pages/login/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[25]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[25]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var cOB=e_[x[26]].i
_ai(cOB,x[27],e_,x[26],1,1)
var oPB=_v()
_(r,oPB)
var lQB=_oz(z,1,e,s,gg)
var aRB=_gd(x[26],lQB,e_,d_)
if(aRB){
var tSB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oPB.wxXCkey=3
aRB(tSB,tSB,oPB,gg)
gg.f=cur_globalf
}
else _w(lQB,x[26],2,18)
cOB.pop()
return r
}
e_[x[26]]={f:m17,j:[],i:[],ti:[x[27]],ic:[]}
d_[x[28]]={}
d_[x[28]]["1264a47e"]=function(e,s,r,gg){
var z=gz$gwx_19()
var b=x[28]+':1264a47e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/success/success.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[28]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var oVB=e_[x[29]].i
_ai(oVB,x[30],e_,x[29],1,1)
var xWB=_v()
_(r,xWB)
var oXB=_oz(z,1,e,s,gg)
var fYB=_gd(x[29],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[29],2,18)
oVB.pop()
return r
}
e_[x[29]]={f:m19,j:[],i:[],ti:[x[30]],ic:[]}
d_[x[31]]={}
d_[x[31]]["6147c44e"]=function(e,s,r,gg){
var z=gz$gwx_21()
var b=x[31]+':6147c44e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tempPage/tempPage.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[31]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[31],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[31],1,189)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var o2B=e_[x[31]].i
_ai(o2B,x[1],e_,x[31],1,1)
o2B.pop()
return r
}
e_[x[31]]={f:m20,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[32]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var o4B=e_[x[32]].i
_ai(o4B,x[33],e_,x[32],1,1)
var l5B=_v()
_(r,l5B)
var a6B=_oz(z,1,e,s,gg)
var t7B=_gd(x[32],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[32],2,18)
o4B.pop()
return r
}
e_[x[32]]={f:m21,j:[],i:[],ti:[x[33]],ic:[]}
d_[x[34]]={}
d_[x[34]]["5a83f5b9"]=function(e,s,r,gg){
var z=gz$gwx_23()
var b=x[34]+':5a83f5b9'
r.wxVkey=b
gg.f=$gdc(f_["./pages/userCenter/userCenter.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[34]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,5,e,s,gg)
var oD=_gd(x[34],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[34],1,2357)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var o0B=e_[x[34]].i
_ai(o0B,x[3],e_,x[34],1,1)
o0B.pop()
return r
}
e_[x[34]]={f:m22,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[35]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var oBC=e_[x[35]].i
_ai(oBC,x[36],e_,x[35],1,1)
var fCC=_v()
_(r,fCC)
var cDC=_oz(z,1,e,s,gg)
var hEC=_gd(x[35],cDC,e_,d_)
if(hEC){
var oFC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fCC.wxXCkey=3
hEC(oFC,oFC,fCC,gg)
gg.f=cur_globalf
}
else _w(cDC,x[35],2,18)
oBC.pop()
return r
}
e_[x[35]]={f:m23,j:[],i:[],ti:[x[36]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/tempPage/tempPage","pages/formDetail/formDetail","pages/form/form","pages/list/list","pages/success/success","pages/userCenter/userCenter","pages/login/login","pages/light/light","pages/index/index","pages/detail/detail"],"subPackages":[],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"帮您购","navigationBarBackgroundColor":"#13a3ff","backgroundColor":"#f0f0f6"},"usingComponents":{},"tabBar":{"color":"#666","selectedColor":"#13A3FF","backgroundColor":"#FFFFFF","borderStyle":"black","list":[{"pagePath":"pages/list/list","text":"首页","iconPath":"static/images/jl-icon1.png","selectedIconPath":"static/images/jl-icon.png"},{"pagePath":"pages/userCenter/userCenter","text":"我的","iconPath":"static/images/user-default.png","selectedIconPath":"static/images/user-default2.png"}]},"nvueCompiler":"weex","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"帮您购","compilerVersion":"2.0.1"};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/detail/detail.json']={"usingComponents":{},"navigationBarTitleText":"物流详情"};
__wxAppCode__['pages/detail/detail.wxml']=$gwx('./pages/detail/detail.wxml');

__wxAppCode__['pages/form/form.json']={"usingComponents":{},"navigationBarTitleText":"^_^填您想要的^_^"};
__wxAppCode__['pages/form/form.wxml']=$gwx('./pages/form/form.wxml');

__wxAppCode__['pages/formDetail/formDetail.json']={"usingComponents":{},"navigationBarTitleText":""};
__wxAppCode__['pages/formDetail/formDetail.wxml']=$gwx('./pages/formDetail/formDetail.wxml');

__wxAppCode__['pages/index/index.json']={"usingComponents":{},"navigationBarTitleText":"我要查物流"};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/light/light.json']={"usingComponents":{},"navigationBarTitleText":"^_^打开闪光灯^_^"};
__wxAppCode__['pages/light/light.wxml']=$gwx('./pages/light/light.wxml');

__wxAppCode__['pages/list/list.json']={"usingComponents":{},"navigationBarTitleText":"^_^记录^_^"};
__wxAppCode__['pages/list/list.wxml']=$gwx('./pages/list/list.wxml');

__wxAppCode__['pages/login/login.json']={"usingComponents":{},"navigationBarTitleText":"^_^帮您购-欢迎登录^_^"};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/success/success.json']={"usingComponents":{},"navigationBarTitleText":"提交成功"};
__wxAppCode__['pages/success/success.wxml']=$gwx('./pages/success/success.wxml');

__wxAppCode__['pages/tempPage/tempPage.json']={"usingComponents":{},"navigationBarTitleText":"","titleNView":false};
__wxAppCode__['pages/tempPage/tempPage.wxml']=$gwx('./pages/tempPage/tempPage.wxml');

__wxAppCode__['pages/userCenter/userCenter.json']={"usingComponents":{},"navigationBarTitleText":"^_^我的^_^"};
__wxAppCode__['pages/userCenter/userCenter.wxml']=$gwx('./pages/userCenter/userCenter.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{4632:function(n,t,e){"use strict";var o=e("74f2"),u=e.n(o);u.a},"4d60":function(n,t,e){"use strict";e("8c29");var o=c(e("f3d3")),u=c(e("d662")),r=e("a248");function c(n){return n&&n.__esModule?n:{default:n}}function f(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.forEach(function(t){l(n,t,e[t])})}return n}function l(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}o.default.config.productionTip=!1,o.default.prototype.$lotusUtils=r.lotusUtils,u.default.mpType="app";var a=new o.default(f({},u.default));a.$mount()},"74f2":function(n,t,e){},9873:function(n,t,e){"use strict";e.r(t);var o=e("f11d"),u=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);t["default"]=u.a},d662:function(n,t,e){"use strict";e.r(t);var o=e("9873");for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);e("4632");var r,c,f=e("2877"),l=Object(f["a"])(o["default"],r,c,!1,null,null,null);t["default"]=l.exports},f11d:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=o}},[["4d60","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function r(r) {
    for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {
      l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;
    }

    for (n in a) {
      Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }

    c && c(r);

    while (s.length) {
      s.shift()();
    }

    return u.push.apply(u, f || []), t();
  }

  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
        var a = t[i];
        0 !== o[a] && (n = !1);
      }

      n && (u.splice(r--, 1), e = l(l.s = t[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = [];

  function l(r) {
    if (n[r]) return n[r].exports;
    var t = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;
  }

  l.m = e, l.c = n, l.d = function (e, r, t) {
    l.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, r) {
    if (1 & r && (e = l(e)), 8 & r) return e;
    if (4 & r && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (l.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var n in e) {
      l.d(t, n, function (r) {
        return e[r];
      }.bind(null, n));
    }
    return t;
  }, l.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(r, "a", r), r;
  }, l.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, l.p = "/";
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = i.push.bind(i);
  i.push = r, i = i.slice();

  for (var f = 0; f < i.length; f++) {
    r(i[f]);
  }

  var c = a;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function(t,e){return c.call(e),f(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=Wt,e.createPage=Zt,e.createComponent=Qt,e.default=void 0;var r=o(n("f3d3"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return c(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(c){o=!0,i=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function c(t){if(Array.isArray(t))return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=Object.prototype.toString,p=Object.prototype.hasOwnProperty;function l(t){return"function"===typeof t}function h(t){return"string"===typeof t}function d(t){return"[object Object]"===f.call(t)}function v(t,e){return p.call(t,e)}function y(){}function g(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var m=/-(\w)/g,_=g(function(t){return t.replace(m,function(t,e){return e?e.toUpperCase():""})}),w=/^\$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,$=/^create|Manager$/,b=/^on/;function x(t){return $.test(t)}function O(t){return w.test(t)}function A(t){return b.test(t)}function k(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function P(t){return!(x(t)||O(t)||A(t))}function S(t,e){return P(t)?function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return l(t.success)||l(t.fail)||l(t.complete)?e.apply(void 0,[t].concat(r)):k(new Promise(function(n,o){e.apply(void 0,[Object.assign({},t,{success:n,fail:o})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})}))}:e}var E=1e-4,j=750,I=!1,C=0,T=0;function N(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;C=r,T=n,I="ios"===e}function D(t,e){if(0===C&&N(),t=Number(t),0===t)return 0;var n=t/j*(e||C);return n<0&&(n=-n),n=Math.floor(n+E),0===n?1!==T&&I?.5:1:t<0?-n:n}var R={},L=[],M=[],B=["success","fail","cancel","complete"];function U(t,e,n){return function(r){return e(F(t,r,n))}}function V(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(d(e)){var i=!0===o?e:{};for(var a in l(n)&&(n=n(e,i)||{}),e)if(v(n,a)){var s=n[a];l(s)&&(s=s(e[a],e,i)),s?h(s)?i[s]=e[a]:d(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==B.indexOf(a)?i[a]=U(t,e[a],r):o||(i[a]=e[a]);return i}return l(e)&&(e=U(t,e,r)),e}function F(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return l(R.returnValue)&&(e=R.returnValue(t,e)),V(t,e,n,{},r)}function W(t,e){if(v(R,t)){var n=R[t];return n?function(e,r){var o=n;l(n)&&(o=n(e)),e=V(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return O(t)?F(t,a,o.returnValue,x(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var H=Object.create(null),q=["subscribePush","unsubscribePush","onPush","offPush","share"];function J(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};l(n)&&n(o),l(r)&&r(o)}}q.forEach(function(t){H[t]=J(t)});var z=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function G(t,e,n){return t[e].apply(t,n)}function K(){return G(z(),"$on",Array.prototype.slice.call(arguments))}function X(){return G(z(),"$off",Array.prototype.slice.call(arguments))}function Y(){return G(z(),"$once",Array.prototype.slice.call(arguments))}function Z(){return G(z(),"$emit",Array.prototype.slice.call(arguments))}var Q=Object.freeze({$on:K,$off:X,$once:Y,$emit:Z});function tt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r=plus.webview.getWebviewById(t.__uniapp_mask_id);r=r.parent()||r;var o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},c=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){c();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){c(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function et(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&tt(e),e}function nt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var rt=Object.freeze({requireNativePlugin:nt,getSubNVueById:et}),ot=Page,it=Component,at=/:/g,st=g(function(t){return _(t.replace(at,"-"))});function ct(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[st(n)].concat(o))}}}function ut(t,e){var n=e[t];e[t]=n?function(){ct(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){ct(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ut("onLoad",t),ot(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ut("created",t),it(t)};var ft=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function pt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){v(n,e)&&(t[e]=n[e])})}function lt(t,e){e.forEach(function(e){t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)}})}function ht(t,e){var n;return e=e.default||e,l(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function dt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function vt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function yt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return d(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||v(n,t)||(n[t]=r[t])}),n}var gt=[String,Number,Boolean,Object,Array,null];function mt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function _t(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]=String,i["value"]=null))}),d(r)&&r.props&&a.push(e({properties:$t(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){d(t)&&t.props&&a.push(e({properties:$t(t.props,!0)}))}),a}function wt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function $t(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={};return e||(r.vueId={type:String,value:""},r.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){r[t]={type:null,observer:mt(t)}}):d(t)&&Object.keys(t).forEach(function(e){var o=t[e];if(d(o)){var i=o["default"];l(i)&&(i=i()),o.type=wt(e,o.type,i,n),r[e]={type:-1!==gt.indexOf(o.type)?o.type:null,value:i,observer:mt(e)}}else{var a=wt(e,o,null,n);r[e]={type:-1!==gt.indexOf(a)?a:null,observer:mt(e)}}}),r}function bt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=y,t.preventDefault=y,t.target=t.target||{},v(t,"detail")||(t.detail={}),d(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function xt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):d(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function Ot(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=xt(t,e)}),r}function At(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function kt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Ot(t,r,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(At(t)):"string"===typeof t&&v(s,t)?c.push(s[t]):c.push(t)}),c}var Pt="~",St="^";function Et(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function jt(t){var e=this;t=bt(t);var n=(t.currentTarget||t.target).dataset.eventOpts;if(!n)return console.warn("事件信息不存在");var r=t.type;n.forEach(function(n){var o=n[0],i=n[1],a=o.charAt(0)===St;o=a?o.slice(1):o;var s=o.charAt(0)===Pt;o=s?o.slice(1):o,i&&Et(r,o)&&i.forEach(function(n){var r=n[0];if(r){var o=e.$vm;o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent);var i=o[r];if(!l(i))throw new Error(" _vm.".concat(r," is not a function"));if(s){if(i.once)return;i.once=!0}i.apply(o,kt(e.$vm,t,n[1],n[2],a,r))}})})}var It=["onShow","onHide","onError","onPageNotFound"];function Ct(t,e){var n=e.mocks,o=e.initRefs;r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),pt(this,n)))}});var i={onLaunch:function(e){this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e)}};return i.globalData=t.$options.globalData||{},lt(i,It),i}var Tt=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function Nt(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=Nt(n[o],e),r)return r}function Dt(t){return Behavior(t)}function Rt(){return!!this.route}function Lt(t){this.triggerEvent("__l",t)}function Mt(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function Bt(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=Nt(this.$vm,r)),e||(e=this.$vm),o.parent=e}function Ut(t){return Ct(t,{mocks:Tt,initRefs:Mt})}var Vt=["onUniNViewMessage"];function Ft(t){var e=Ut(t);return lt(e,Vt),e}function Wt(t){return App(Ft(t)),t}function Ht(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=ht(r.default,t),s=i(a,2),c=s[0],u=s[1],f={options:{multipleSlots:!0,addGlobalClass:!0},data:yt(u,r.default.prototype),behaviors:_t(u,Dt),properties:$t(u.props,!1,u.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};vt(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),dt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:Bt,__e:jt}};return n?f:[f,c]}function qt(t){return Ht(t,{isPage:Rt,initRelation:Lt})}function Jt(t){var e=qt(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var zt=["onShow","onHide","onUnload"];function Gt(t,e){var n=e.isPage,r=e.initRelation,o=Jt(t,{isPage:n,initRelation:r});return lt(o.methods,zt),o.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},o}function Kt(t){return Gt(t,{isPage:Rt,initRelation:Lt})}zt.push.apply(zt,ft);var Xt=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Yt(t){var e=Kt(t);return lt(e.methods,Xt),e}function Zt(t){return Component(Yt(t))}function Qt(t){return Component(Jt(t))}L.forEach(function(t){R[t]=!1}),M.forEach(function(t){var e=R[t]&&R[t].name?R[t].name:t;wx.canIUse(e)||(R[t]=!1)});var te={};"undefined"!==typeof Proxy?te=new Proxy({},{get:function(t,e){return"upx2px"===e?D:rt[e]?S(e,rt[e]):Q[e]?Q[e]:v(wx,e)||v(R,e)?S(e,W(e,wx[e])):void 0}}):(te.upx2px=D,Object.keys(Q).forEach(function(t){te[t]=Q[t]}),Object.keys(rt).forEach(function(t){te[t]=S(t,rt[t])}),Object.keys(wx).forEach(function(t){(v(wx,t)||v(R,t))&&(te[t]=S(t,W(t,wx[t])))})),"undefined"!==typeof t&&(t.UniEmitter=Q),wx.createApp=Wt,wx.createPage=Zt,wx.createComponent=Qt;var ee=te,ne=ee;e.default=ne}).call(this,n("c8ba"))},"8c29":function(t,e,n){},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"===typeof t,f=e.regeneratorRuntime;if(f)u&&(t.exports=f);else{f=e.regeneratorRuntime=u?t.exports:{},f.wrap=w;var p="suspendedStart",l="suspendedYield",h="executing",d="completed",v={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(C([])));m&&m!==r&&o.call(m,a)&&(y=m);var _=O.prototype=b.prototype=Object.create(y);x.prototype=_.constructor=O,O.constructor=x,O[c]=x.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},f.awrap=function(t){return{__await:t}},A(k.prototype),k.prototype[s]=function(){return this},f.AsyncIterator=k,f.async=function(t,e,n,r){var o=new k(w(t,e,n,r));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},A(_),_[c]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=C,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new I(r||[]);return i._invoke=P(t,n,a),i}function $(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function b(){}function x(){}function O(){}function A(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){function e(n,r,i,a){var s=$(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(s.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function P(t,e,n){var r=p;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return T()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=S(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=$(t,e,n);if("normal"===c.type){if(r=n.done?d:l,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}function S(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,S(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=$(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a248:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.lotusUtils=void 0;var n={webUrl:{api:"http://bngapi.winglau14.com/",imgUrl:"http://bngapi.winglau14.com"},wxLoginFn:function(e){return new Promise(function(n,r){return t.getProvider({service:"oauth",success:function(r){~r.provider.indexOf(e)&&t.login({provider:e,success:function(r){t.getUserInfo({provider:e,success:function(r){if(r.errMsg.indexOf("getUserInfo:ok")>-1){"qq"===e&&(r.userInfo.avatarUrl=r.userInfo.figureurl_qq_2);var o=JSON.stringify(r.userInfo);t.setStorage({key:"userInfor",data:o,success:function(){n({code:1,userInfor:o})}})}}})},fail:function(t){n(t)}})}})})},openCamera:function(t){var e=plus.camera.getCamera(),n=e.supportedImageResolutions[0],r=e.supportedImageFormats[0];return new Promise(function(o,i){e.captureImage(function(e){t&&plus.ui.alert("Capture image success: "+e,"","温馨提示","确定"),o(e)},function(t){},{resolution:n,format:r})})},imagesPreviewer:function(e){t.previewImage({urls:e,success:function(t){},fail:function(){}})},ajax:function(e,n,r,o){return t.showLoading({title:"加载中",mask:!0}),new Promise(function(i,a){t.request({url:e,method:n,data:r,header:{"content-type":o||"application/x-www-form-urlencoded"},success:function(e){t.hideLoading(),i(e.data)},fail:function(e){t.showToast({title:"".concat(JSON.stringify(e)),icon:"none"})},complete:function(t){}})})},setStorageFn:function(e,n,r){return"sync"===r?new Promise(function(r,o){try{t.setStorageSync(e,n),r(!0)}catch(i){r(!1)}}):new Promise(function(r,o){t.setStorage({key:e,data:n,success:function(t){r(!0)},fail:function(t){r(!1)}})})},getStorageFn:function(e,n){return"sync"===n?new Promise(function(n,r){try{var o=t.getStorageSync(e);o&&n(o)}catch(i){n(!1)}}):new Promise(function(n,r){t.getStorage({key:e,success:function(t){n(t.data)},fail:function(t){n(!1)}})})},getSystemInfor:function(){return new Promise(function(e,n){t.getSystemInfo({success:function(t){e(t)},fail:function(){e(!1)}})})}};e.lotusUtils=n}).call(this,n("6e42")["default"])},a34a:function(t,e,n){t.exports=n("bbdd")},b0ce:function(t,e,n){"use strict";n.r(e);var r=n("f3d3"),o=n.n(r);function i(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),"function"===typeof o&&(o=[o]),o)for(var a=0,s=o.length;a<s;a++)r=o[a].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return i(t,e,n)}),r}function a(t){return t.$vm.$root}e["default"]=function(t){return{data:{$root:{}},onLoad:function(e){var n=new o.a(t);this.$vm=n;var r=n.$root;r.__wxExparserNodeId__=this.__wxExparserNodeId__,r.__wxWebviewId__=this.__wxWebviewId__,r.$mp||(r.$mp={});var i=r.$mp;i.mpType="page",i.page=this,i.query=e,i.status="load",n.$mount()},handleProxy:function(t){var e=a(this);return e.$handleProxyWithVue(t)},onShow:function(){var t=a(this),e=t.$mp;e.status="show",i(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=a(this),e=t.$mp;e.status="ready",i(t,"onReady")},onHide:function(){var t=a(this),e=t.$mp;e.status="hide",i(t,"onHide")},onUnload:function(){var t=a(this);i(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){var t=a(this);i(t,"onPullDownRefresh")},onReachBottom:function(){var t=a(this);i(t,"onReachBottom")},onPageScroll:function(t){var e=a(this);i(e,"onPageScroll",t)},onTabItemTap:function(t){var e=a(this);i(e,"onTabItemTap",t)},onShareAppMessage:t.onShareAppMessage?function(t){var e=a(this);return i(e,"onShareAppMessage",t)}:null,onNavigationBarButtonTap:function(t){var e=a(this);i(e,"onNavigationBarButtonTap",t)},onNavigationBarSearchInputChanged:function(t){var e=a(this);i(e,"onNavigationBarSearchInputChanged",t)},onNavigationBarSearchInputConfirmed:function(t){var e=a(this);i(e,"onNavigationBarSearchInputConfirmed",t)},onNavigationBarSearchInputClicked:function(t){var e=a(this);i(e,"onNavigationBarSearchInputClicked",t)},onBackPress:function(t){var e=a(this);return i(e,"onBackPress",t)},$getAppWebview:function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}}}},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},f3d3:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(n){}(function(e,n){t.exports=n()})(0,function(){"use strict";function t(e,n,r,o){if(r!==o&&void 0!==r)if(null==r||null==o||typeof r!==typeof o)e[n]=r;else if(Array.isArray(r)&&Array.isArray(o))if(r.length===o.length)for(var i=0,a=r.length;i<a;++i)t(e,n+"["+i+"]",r[i],o[i]);else e[n]=r;else if("object"===typeof r&&"object"===typeof o){var s=Object.keys(r),c=Object.keys(o);if(s.length!==c.length)e[n]=r;else{var u=Object.create(null);for(i=0,a=s.length;i<a;++i)u[s[i]]=!0,u[c[i]]=!0;if(Object.keys(u).length!==s.length)e[n]=r;else for(i=0,a=s.length;i<a;++i){var f=s[i];t(e,n+"."+f,r[f],o[f])}}}else r!==o&&(e[n]=r)}function r(e,n){for(var r=Object.keys(e),o={},i=0,a=r.length;i<a;++i){for(var s=r[i],c=s.split("."),u=n[c[0]],f=1,p=c.length;f<p&&void 0!==u;++f)u=u[c[f]];t(o,s,e[s],u)}return o}function o(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t}function u(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function p(t){return"[object Object]"===f.call(t)}function l(t){return"[object RegExp]"===f.call(t)}function h(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return null==t?"":"object"===typeof t?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var g=y("key,ref,slot,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function w(t,e){return _.call(t,e)}function $(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var b=/-(\w)/g,x=$(function(t){return t.replace(b,function(t,e){return e?e.toUpperCase():""})}),O=$(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),A=/([^-])([A-Z])/g,k=$(function(t){return t.replace(A,"$1-$2").replace(A,"$1-$2").toLowerCase()});function P(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function S(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function E(t,e){for(var n in e)t[n]=e[n];return t}function j(t){for(var e={},n=0;n<t.length;n++)t[n]&&E(e,t[n]);return e}function I(t,e,n){}var C=function(t,e,n){return!1},T=function(t){return t};function N(t,e){var r=u(t),o=u(e);if(!r||!o)return!r&&!o&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function D(t,e){for(var n=0;n<t.length;n++)if(N(t[n],e))return n;return-1}function R(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var L="data-server-rendered",M=["component","directive","filter"],B=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],U={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:C,isReservedAttr:C,isUnknownElement:C,getTagNamespace:I,parsePlatformTagName:T,mustUseProp:C,_lifecycleHooks:B},V=Object.freeze({});function F(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=/[^\w.$]/;function q(t){if(!H.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var J=I;function z(t,e,n){if(U.errorHandler)U.errorHandler.call(null,t,e,n);else{if(!X||"undefined"===typeof console)throw t;console.error(t)}}var G,K="__proto__"in{},X="undefined"!==typeof window,Y=["mpvue-runtime"].join(),Z=(Y&&/msie|trident/.test(Y),Y&&Y.indexOf("msie 9.0"),Y&&Y.indexOf("edge/")>0),Q=(Y&&Y.indexOf("android"),Y&&/iphone|ipad|ipod|ios/.test(Y)),tt=(Y&&/chrome\/\d+/.test(Y),{}.watch);if(X)try{var et={};Object.defineProperty(et,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,et)}catch(n){}var nt=function(){return void 0===G&&(G=!X&&"undefined"!==typeof e&&"server"===e["process"].env.VUE_ENV),G},rt=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var it,at="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys),st=function(){var t,e=[],r=!1;function o(){r=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!==typeof Promise&&ot(Promise)){var i=Promise.resolve(),a=function(t){console.error(t)};t=function(){i.then(o).catch(a),Q&&setTimeout(I)}}else t=function(){setTimeout(o,0)};return function(o,i){var a;if(e.push(function(){if(o)try{o.call(i)}catch(n){z(n,i,"nextTick")}else a&&a(i)}),r||(r=!0,t()),!o&&"undefined"!==typeof Promise)return new Promise(function(t,e){a=t})}}();it="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=0,ut=function(){this.id=ct++,this.subs=[]};ut.prototype.addSub=function(t){this.subs.push(t)},ut.prototype.removeSub=function(t){m(this.subs,t)},ut.prototype.depend=function(){ut.target&&ut.target.addDep(this)},ut.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ut.target=null;var ft=[];function pt(t){ut.target&&ft.push(ut.target),ut.target=t}function lt(){ut.target=ft.pop()}var ht=Array.prototype,dt=Object.create(ht);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=ht[t];W(dt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var vt=Object.getOwnPropertyNames(dt),yt={shouldConvert:!0},gt=function(t){if(this.value=t,this.dep=new ut,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)){var e=K?mt:_t;e(t,dt,vt),this.observeArray(t)}else this.walk(t)};function mt(t,e,n){t.__proto__=e}function _t(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];W(t,i,e[i])}}function wt(t,e){var n;if(u(t))return w(t,"__ob__")&&t.__ob__ instanceof gt?n=t.__ob__:yt.shouldConvert&&!nt()&&(Array.isArray(t)||p(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new gt(t)),e&&n&&n.vmCount++,n}function $t(t,e,n,r,o){var i=new ut,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!o&&wt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ut.target&&(i.depend(),u&&u.dep.depend(),Array.isArray(e)&&Ot(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(c?c.call(t,e):n=e,u=!o&&wt(e),i.notify())}})}}function bt(t,e,n){if(Array.isArray(t)&&h(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(w(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?($t(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function xt(t,e){if(Array.isArray(t)&&h(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ot(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ot(e)}gt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)$t(t,e[n],t[e[n]])},gt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)wt(t[e])};var At=U.optionMergeStrategies;function kt(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)n=i[a],r=t[n],o=e[n],w(t,n)?p(r)&&p(o)&&kt(r,o):bt(t,n,o);return t}function Pt(t,e,n){return n?t||e?function(){var r="function"===typeof e?e.call(n):e,o="function"===typeof t?t.call(n):void 0;return r?kt(r,o):o}:void 0:e?t?function(){return kt("function"===typeof e?e.call(this):e,t.call(this))}:e:t}function St(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function Et(t,e){var n=Object.create(t||null);return e?E(n,e):n}At.data=function(t,e,n){return n?Pt(t,e,n):e&&"function"!==typeof e?t:Pt.call(this,t,e)},B.forEach(function(t){At[t]=St}),M.forEach(function(t){At[t+"s"]=Et}),At.watch=function(t,e){if(t===tt&&(t=void 0),e===tt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in E(n,t),e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},At.props=At.methods=At.inject=At.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return E(n,t),E(n,e),n},At.provide=Pt;var jt=function(t,e){return void 0===e?t:e};function It(t){var e=t.props;if(e){var n,r,o,i={};if(Array.isArray(e)){n=e.length;while(n--)r=e[n],"string"===typeof r&&(o=x(r),i[o]={type:null})}else if(p(e))for(var a in e)r=e[a],o=x(a),i[o]=p(r)?r:{type:r};t.props=i}}function Ct(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function Tt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Nt(t,e,n){"function"===typeof e&&(e=e.options),It(e),Ct(e),Tt(e);var r=e.extends;if(r&&(t=Nt(t,r,n)),e.mixins)for(var o=0,i=e.mixins.length;o<i;o++)t=Nt(t,e.mixins[o],n);var a,s={};for(a in t)c(a);for(a in e)w(t,a)||c(a);function c(r){var o=At[r]||jt;s[r]=o(t[r],e[r],n,r)}return s}function Dt(t,e,n,r){if("string"===typeof n){var o=t[e];if(w(o,n))return o[n];var i=x(n);if(w(o,i))return o[i];var a=O(i);if(w(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Rt(t,e,n,r){var o=e[t],i=!w(n,t),a=n[t];if(Bt(Boolean,o.type)&&(i&&!w(o,"default")?a=!1:Bt(String,o.type)||""!==a&&a!==k(t)||(a=!0)),void 0===a){a=Lt(r,o,t);var s=yt.shouldConvert;yt.shouldConvert=!0,wt(a),yt.shouldConvert=s}return a}function Lt(t,e,n){if(w(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Mt(e.type)?r.call(t):r}}function Mt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Bt(t,e){if(!Array.isArray(e))return Mt(e)===Mt(t);for(var n=0,r=e.length;n<r;n++)if(Mt(e[n])===Mt(t))return!0;return!1}var Ut=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Vt={child:{}};Vt.child.get=function(){return this.componentInstance},Object.defineProperties(Ut.prototype,Vt);var Ft=function(t){void 0===t&&(t="");var e=new Ut;return e.text=t,e.isComment=!0,e};function Wt(t){return new Ut(void 0,void 0,void 0,String(t))}function Ht(t){var e=new Ut(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function qt(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Ht(t[r]);return n}var Jt,zt=$(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function Gt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function Kt(t,e,n,r,i){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=zt(a),o(s)||(o(c)?(o(s.fns)&&(s=t[a]=Gt(s)),n(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)o(t[a])&&(u=zt(a),r(u.name,e[a],u.capture))}function Xt(t,e,n){var r=e.options.props;if(!o(r)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in r){var f=k(u);Yt(a,c,u,f,!0)||Yt(a,s,u,f,!1)}return a}}function Yt(t,e,n,r,o){if(i(e)){if(w(e,n))return t[n]=e[n],o||delete e[n],!0;if(w(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Zt(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Qt(t){return c(t)?[Wt(t)]:Array.isArray(t)?ee(t):void 0}function te(t){return i(t)&&i(t.text)&&s(t.isComment)}function ee(t,e){var n,r,s,u=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(s=u[u.length-1],Array.isArray(r)?u.push.apply(u,ee(r,(e||"")+"_"+n)):c(r)?te(s)?s.text+=String(r):""!==r&&u.push(Wt(r)):te(r)&&te(s)?u[u.length-1]=Wt(s.text+r.text):(a(t._isVList)&&i(r.tag)&&o(r.key)&&i(e)&&(r.key="__vlist"+e+"_"+n+"__"),u.push(r)));return u}function ne(t,e){return t.__esModule&&t.default&&(t=t.default),u(t)?e.extend(t):t}function re(t,e,n,r,o){var i=Ft();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function oe(t,e,n){if(a(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;if(a(t.loading)&&i(t.loadingComp))return t.loadingComp;if(!i(t.contexts)){var r=t.contexts=[n],s=!0,c=function(){for(var t=0,e=r.length;t<e;t++)r[t].$forceUpdate()},f=R(function(n){t.resolved=ne(n,e),s||c()}),p=R(function(e){i(t.errorComp)&&(t.error=!0,c())}),l=t(f,p);return u(l)&&("function"===typeof l.then?o(t.resolved)&&l.then(f,p):i(l.component)&&"function"===typeof l.component.then&&(l.component.then(f,p),i(l.error)&&(t.errorComp=ne(l.error,e)),i(l.loading)&&(t.loadingComp=ne(l.loading,e),0===l.delay?t.loading=!0:setTimeout(function(){o(t.resolved)&&o(t.error)&&(t.loading=!0,c())},l.delay||200)),i(l.timeout)&&setTimeout(function(){o(t.resolved)&&p(null)},l.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}function ie(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&i(n.componentOptions))return n}}function ae(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ue(t,e)}function se(t,e,n){n?Jt.$once(t,e):Jt.$on(t,e)}function ce(t,e){Jt.$off(t,e)}function ue(t,e,n){Jt=t,Kt(e,n||{},se,ce,t)}function fe(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,o=this;if(Array.isArray(t))for(var i=0,a=t.length;i<a;i++)r.$on(t[i],n);else(o._events[t]||(o._events[t]=[])).push(n),e.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var o=0,i=t.length;o<i;o++)n.$off(t[o],e);return r}var a,s=r._events[t];if(!s)return r;if(1===arguments.length)return r._events[t]=null,r;var c=s.length;while(c--)if(a=s[c],a===e||a.fn===e){s.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,r=e._events[t];if(r){r=r.length>1?S(r):r;for(var o=S(arguments,1),i=0,a=r.length;i<a;i++)try{r[i].apply(e,o)}catch(n){z(n,e,'event handler for "'+t+'"')}}return e}}function pe(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(le)||(n.default=r),n}function le(t){return t.isComment||" "===t.text}function he(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?he(t[n],e):e[t[n].key]=t[n].fn;return e}var de=null;function ve(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function ye(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&be(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=de;de=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),de=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){be(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),be(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}function ge(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Ft),be(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new Re(t,r,I),n=!1,null==t.$vnode&&(t._isMounted=!0,be(t,"mounted")),t}function me(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==V);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){yt.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=Rt(u,t.$options.props,e,t)}yt.shouldConvert=!0,t.$options.propsData=e}if(n){var f=t.$options._parentListeners;t.$options._parentListeners=n,ue(t,n,f)}i&&(t.$slots=pe(o,r.context),t.$forceUpdate())}function _e(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function we(t,e){if(e){if(t._directInactive=!1,_e(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)we(t.$children[n]);be(t,"activated")}}function $e(t,e){if((!e||(t._directInactive=!0,!_e(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)$e(t.$children[n]);be(t,"deactivated")}}function be(t,e){var r=t.$options[e];if(r)for(var o=0,i=r.length;o<i;o++)try{r[o].call(t)}catch(n){z(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var xe=[],Oe=[],Ae={},ke=!1,Pe=!1,Se=0;function Ee(){Se=xe.length=Oe.length=0,Ae={},ke=Pe=!1}function je(){var t,e;for(Pe=!0,xe.sort(function(t,e){return t.id-e.id}),Se=0;Se<xe.length;Se++)t=xe[Se],e=t.id,Ae[e]=null,t.run();var n=Oe.slice(),r=xe.slice();Ee(),Te(n),Ie(r),rt&&U.devtools&&rt.emit("flush")}function Ie(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&be(r,"updated")}}function Ce(t){t._inactive=!1,Oe.push(t)}function Te(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,we(t[e],!0)}function Ne(t){var e=t.id;if(null==Ae[e]){if(Ae[e]=!0,Pe){var n=xe.length-1;while(n>Se&&xe[n].id>t.id)n--;xe.splice(n+1,0,t)}else xe.push(t);ke||(ke=!0,st(je))}}var De=0,Re=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++De,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new it,this.newDepIds=new it,this.expression="","function"===typeof e?this.getter=e:(this.getter=q(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Re.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(n){if(!this.user)throw n;z(n,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Me(t),lt(),this.cleanupDeps()}return t},Re.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Re.prototype.cleanupDeps=function(){var t=this,e=this.deps.length;while(e--){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Re.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ne(this)},Re.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(n){z(n,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Re.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Re.prototype.depend=function(){var t=this,e=this.deps.length;while(e--)t.deps[e].depend()},Re.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var e=this.deps.length;while(e--)t.deps[e].removeSub(t);this.active=!1}};var Le=new it;function Me(t){Le.clear(),Be(t,Le)}function Be(t,e){var n,r,o=Array.isArray(t);if((o||u(t))&&Object.isExtensible(t)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)Be(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)Be(t[r[n]],e)}}}var Ue={enumerable:!0,configurable:!0,get:I,set:I};function Ve(t,e,n){Ue.get=function(){return this[e][n]},Ue.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Ue)}function Fe(t){t._watchers=[];var e=t.$options;e.props&&We(t,e.props),e.methods&&Xe(t,e.methods),e.data?He(t):wt(t._data={},!0),e.computed&&ze(t,e.computed),e.watch&&e.watch!==tt&&Ye(t,e.watch)}function We(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;yt.shouldConvert=i;var a=function(i){o.push(i);var a=Rt(i,e,n,t);$t(r,i,a),i in t||Ve(t,"_props",i)};for(var s in e)a(s);yt.shouldConvert=!0}function He(t){var e=t.$options.data;e=t._data="function"===typeof e?qe(e,t):e||{},p(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];r&&w(r,i)||F(i)||Ve(t,"_data",i)}wt(e,!0)}function qe(t,e){try{return t.call(e)}catch(n){return z(n,e,"data()"),{}}}var Je={lazy:!0};function ze(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"===typeof o?o:o.get;n[r]=new Re(t,i,I,Je),r in t||Ge(t,r,o)}}function Ge(t,e,n){"function"===typeof n?(Ue.get=Ke(e),Ue.set=I):(Ue.get=n.get?!1!==n.cache?Ke(e):n.get:I,Ue.set=n.set?n.set:I),Object.defineProperty(t,e,Ue)}function Ke(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ut.target&&e.depend(),e.value}}function Xe(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?I:P(e[n],t)}function Ye(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)Ze(t,n,r[o]);else Ze(t,n,r)}}function Ze(t,e,n,r){return p(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Qe(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=bt,t.prototype.$delete=xt,t.prototype.$watch=function(t,e,n){var r=this;if(p(e))return Ze(r,t,e,n);n=n||{},n.user=!0;var o=new Re(r,t,e,n);return n.immediate&&e.call(r,o.value),function(){o.teardown()}}}function tn(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function en(t){var e=nn(t.$options.inject,t);e&&(yt.shouldConvert=!1,Object.keys(e).forEach(function(n){$t(t,n,e[n])}),yt.shouldConvert=!0)}function nn(t,e){if(t){for(var n=Object.create(null),r=at?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o],a=t[i],s=e;while(s){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}0}return n}}function rn(t,e,n,r,o){var a={},s=t.options.props;if(i(s))for(var c in s)a[c]=Rt(c,s,e||{});else i(n.attrs)&&on(a,n.attrs),i(n.props)&&on(a,n.props);var u=Object.create(r),f=function(t,e,n,r){return vn(u,t,e,n,r,!0)},p=t.options.render.call(null,f,{data:n,props:a,children:o,parent:r,listeners:n.on||{},injections:nn(t.options.inject,r),slots:function(){return pe(o,r)}});return p instanceof Ut&&(p.functionalContext=r,p.functionalOptions=t.options,n.slot&&((p.data||(p.data={})).slot=n.slot)),p}function on(t,e){for(var n in e)t[x(n)]=e[n]}var an={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed){var o=t.componentInstance=un(t,de,n,r);o.$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var i=t;an.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;me(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,be(n,"mounted")),t.data.keepAlive&&(e._isMounted?Ce(n):we(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?$e(e,!0):e.$destroy())}},sn=Object.keys(an);function cn(t,e,n,r,s){if(!o(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(o(t.cid)&&(f=t,t=oe(f,c,n),void 0===t))return re(f,e,n,r,s);e=e||{},Tn(t),i(e.model)&&ln(t.options,e);var p=Xt(e,t,s);if(a(t.options.functional))return rn(t,p,e,n,r);var l=e.on;if(a(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}fn(e);var d=t.options.name||s,v=new Ut("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:p,listeners:l,tag:s,children:r},f);return v}}}function un(t,e,n,r){var o=t.componentOptions,a={_isComponent:!0,parent:e,propsData:o.propsData,_componentTag:o.tag,_parentVnode:t,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:n||null,_refElm:r||null},s=t.data.inlineTemplate;return i(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function fn(t){t.hook||(t.hook={});for(var e=0;e<sn.length;e++){var n=sn[e],r=t.hook[n],o=an[n];t.hook[n]=r?pn(o,r):o}}function pn(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}function ln(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var o=e.on||(e.on={});i(o[r])?o[r]=[e.model.callback].concat(o[r]):o[r]=e.model.callback}var hn=1,dn=2;function vn(t,e,n,r,o,i){return(Array.isArray(n)||c(n))&&(o=r,r=n,n=void 0),a(i)&&(o=dn),yn(t,e,n,r,o)}function yn(t,e,n,r,o){if(i(n)&&i(n.__ob__))return Ft();if(i(n)&&i(n.is)&&(e=n.is),!e)return Ft();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===dn?r=Qt(r):o===hn&&(r=Zt(r)),"string"===typeof e)?(s=U.getTagNamespace(e),a=U.isReservedTag(e)?new Ut(U.parsePlatformTagName(e),n,r,void 0,void 0,t):i(c=Dt(t.$options,"components",e))?cn(c,n,t,r,e):new Ut(e,n,r,void 0,void 0,t)):a=cn(e,n,t,r);return i(a)?(s&&gn(a,s),a):Ft()}function gn(t,e){if(t.ns=e,"foreignObject"!==t.tag&&i(t.children))for(var n=0,r=t.children.length;n<r;n++){var a=t.children[n];i(a.tag)&&o(a.ns)&&gn(a,e)}}function mn(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)&&(n._isVList=!0),n}function _n(t,e,n,r){var o=this.$scopedSlots[t];if(o)return n=n||{},r&&(n=E(E({},r),n)),o(n)||e;var i=this.$slots[t];return i||e}function wn(t){return Dt(this.$options,"filters",t,!0)||T}function $n(t,e,n){var r=U.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function bn(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=j(n));var a=function(a){if("class"===a||"style"===a||g(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||U.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(a in i)&&(i[a]=n[a],o)){var c=t.on||(t.on={});c["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function xn(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?qt(n):Ht(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),An(n,"__static__"+t,!1),n)}function On(t,e,n){return An(t,"__once__"+e+(n?"_"+n:""),!0),t}function An(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&kn(t[r],e+"_"+r,n);else kn(t,e,n)}function kn(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Pn(t,e){if(e)if(p(e)){var n=t.on=t.on?E({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}else;return t}function Sn(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=pe(t.$options._renderChildren,n),t.$scopedSlots=V,t._c=function(e,n,r,o){return vn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return vn(t,e,n,r,o,!0)};var r=e&&e.data;$t(t,"$attrs",r&&r.attrs,null,!0),$t(t,"$listeners",r&&r.on,null,!0)}function En(t){t.prototype.$nextTick=function(t){return st(t,this)},t.prototype._render=function(){var t,e=this,r=e.$options,o=r.render,i=r.staticRenderFns,a=r._parentVnode;if(e._isMounted)for(var s in e.$slots)e.$slots[s]=qt(e.$slots[s]);e.$scopedSlots=a&&a.data.scopedSlots||V,i&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=a;try{t=o.call(e._renderProxy,e.$createElement)}catch(n){z(n,e,"render function"),t=e._vnode}return t instanceof Ut||(t=Ft()),t.parent=a,t},t.prototype._o=On,t.prototype._n=v,t.prototype._s=d,t.prototype._l=mn,t.prototype._t=_n,t.prototype._q=N,t.prototype._i=D,t.prototype._m=xn,t.prototype._f=wn,t.prototype._k=$n,t.prototype._b=bn,t.prototype._v=Wt,t.prototype._e=Ft,t.prototype._u=he,t.prototype._g=Pn}var jn=0;function In(t){t.prototype._init=function(t){var e=this;e._uid=jn++,e._isVue=!0,t&&t._isComponent?Cn(e,t):e.$options=Nt(Tn(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ve(e),ae(e),Sn(e),be(e,"beforeCreate"),en(e),Fe(e),tn(e),be(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Cn(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Tn(t){var e=t.options;if(t.super){var n=Tn(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=Nn(t);o&&E(t.extendOptions,o),e=t.options=Nt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Nn(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=Dn(n[i],r[i],o[i]));return e}function Dn(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function Rn(t){this._init(t)}function Ln(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=S(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Mn(t){t.mixin=function(t){return this.options=Nt(this.options,t),this}}function Bn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Nt(n.options,t),a["super"]=n,a.options.props&&Un(a),a.options.computed&&Vn(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,M.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=E({},a.options),o[r]=a,a}}function Un(t){var e=t.options.props;for(var n in e)Ve(t.prototype,"_props",n)}function Vn(t){var e=t.options.computed;for(var n in e)Ge(t.prototype,n,e[n])}function Fn(t){M.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&p(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}In(Rn),Qe(Rn),fe(Rn),ye(Rn),En(Rn);var Wn=[String,RegExp,Array];function Hn(t){return t&&(t.Ctor.options.name||t.tag)}function qn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function Jn(t,e,n){for(var r in t){var o=t[r];if(o){var i=Hn(o.componentOptions);i&&!n(i)&&(o!==e&&zn(o),t[r]=null)}}}function zn(t){t&&t.componentInstance.$destroy()}var Gn={name:"keep-alive",abstract:!0,props:{include:Wn,exclude:Wn},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)zn(t.cache[e])},watch:{include:function(t){Jn(this.cache,this._vnode,function(e){return qn(t,e)})},exclude:function(t){Jn(this.cache,this._vnode,function(e){return!qn(t,e)})}},render:function(){var t=ie(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Hn(e);if(n&&(this.include&&!qn(this.include,n)||this.exclude&&qn(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}},Kn={KeepAlive:Gn};function Xn(t){var e={get:function(){return U}};Object.defineProperty(t,"config",e),t.util={warn:J,extend:E,mergeOptions:Nt,defineReactive:$t},t.set=bt,t.delete=xt,t.nextTick=st,t.options=Object.create(null),M.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,E(t.options.components,Kn),Ln(t),Mn(t),Bn(t),Fn(t)}Xn(Rn),Object.defineProperty(Rn.prototype,"$isServer",{get:nt}),Object.defineProperty(Rn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Rn.version="2.4.1",Rn.mpvueVersion="1.0.12";var Yn=y("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),Zn=y("style,class");y("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),y("embed,img,image,input,link,meta",!0);function Qn(){}function tr(){}function er(){}function nr(t){return t&&t.$attrs?t.$attrs["mpcomid"]:"0"}var rr={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},or={};function ir(t,e){return or}function ar(t,e){return or}function sr(t){return or}function cr(t){return or}function ur(t,e,n){}function fr(t,e){}function pr(t,e){}function lr(t){return or}function hr(t){return or}function dr(t){return"div"}function vr(t,e){return or}function yr(t,e,n){return or}var gr=Object.freeze({createElement:ir,createElementNS:ar,createTextNode:sr,createComment:cr,insertBefore:ur,removeChild:fr,appendChild:pr,parentNode:lr,nextSibling:hr,tagName:dr,setTextContent:vr,setAttribute:yr}),mr={create:function(t,e){_r(e)},update:function(t,e){t.data.ref!==e.data.ref&&(_r(t,!0),_r(e))},destroy:function(t){_r(t,!0)}};function _r(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?m(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var wr=new Ut("",{},[]),$r=["create","activate","update","remove","destroy"];function br(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&xr(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&o(e.asyncFactory.error))}function xr(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o}function Or(t,e,n){var r,o,a={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(a[o]=r);return a}function Ar(t){var e,n,r={},s=t.modules,u=t.nodeOps;for(e=0;e<$r.length;++e)for(r[$r[e]]=[],n=0;n<s.length;++n)i(s[n][$r[e]])&&r[$r[e]].push(s[n][$r[e]]);function f(t){return new Ut(u.tagName(t).toLowerCase(),{},[],void 0,t)}function p(t,e){function n(){0===--n.listeners&&l(t)}return n.listeners=e,n}function l(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function h(t,e,n,r,o){if(t.isRootInsert=!o,!d(t,e,n,r)){var s=t.data,c=t.children,f=t.tag;i(f)?(t.elm=t.ns?u.createElementNS(t.ns,f):u.createElement(f,t),b(t),_(t,c,e),i(s)&&$(t,e),m(n,t.elm,r)):a(t.isComment)?(t.elm=u.createComment(t.text),m(n,t.elm,r)):(t.elm=u.createTextNode(t.text),m(n,t.elm,r))}}function d(t,e,n,r){var o=t.data;if(i(o)){var s=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1,n,r),i(t.componentInstance))return v(t,e),a(s)&&g(t,e,n,r),!0}}function v(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,w(t)?($(t,e),b(t)):(_r(t),e.push(t))}function g(t,e,n,o){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,i(a=s.data)&&i(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](wr,s);e.push(s);break}m(n,t.elm,o)}function m(t,e,n){i(t)&&(i(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function _(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)h(e[r],n,t.elm,null,!0);else c(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function w(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function $(t,n){for(var o=0;o<r.create.length;++o)r.create[o](wr,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(wr,t),i(e.insert)&&n.push(t))}function b(t){var e,n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;i(e=de)&&e!==t.context&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function x(t,e,n,r,o,i){for(;r<=o;++r)h(n[r],i,t,e)}function O(t){var e,n,o=t.data;if(i(o))for(i(e=o.hook)&&i(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)O(t.children[n])}function A(t,e,n,r){for(;n<=r;++n){var o=e[n];i(o)&&(i(o.tag)?(k(o),O(o)):l(o.elm))}}function k(t,e){if(i(e)||i(t.data)){var n,o=r.remove.length+1;for(i(e)?e.listeners+=o:e=p(t.elm,o),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&k(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else l(t.elm)}function P(t,e,n,r,a){var s,c,f,p,l=0,d=0,v=e.length-1,y=e[0],g=e[v],m=n.length-1,_=n[0],w=n[m],$=!a;while(l<=v&&d<=m)o(y)?y=e[++l]:o(g)?g=e[--v]:br(y,_)?(S(y,_,r),y=e[++l],_=n[++d]):br(g,w)?(S(g,w,r),g=e[--v],w=n[--m]):br(y,w)?(S(y,w,r),$&&u.insertBefore(t,y.elm,u.nextSibling(g.elm)),y=e[++l],w=n[--m]):br(g,_)?(S(g,_,r),$&&u.insertBefore(t,g.elm,y.elm),g=e[--v],_=n[++d]):(o(s)&&(s=Or(e,l,v)),c=i(_.key)?s[_.key]:null,o(c)?(h(_,r,t,y.elm),_=n[++d]):(f=e[c],br(f,_)?(S(f,_,r),e[c]=void 0,$&&u.insertBefore(t,f.elm,y.elm),_=n[++d]):(h(_,r,t,y.elm),_=n[++d])));l>v?(p=o(n[m+1])?null:n[m+1].elm,x(t,p,n,d,m,r)):d>m&&A(t,e,l,v)}function S(t,e,n,s){if(t!==e){var c=e.elm=t.elm;if(a(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?I(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,p=e.data;i(p)&&i(f=p.hook)&&i(f=f.prepatch)&&f(t,e);var l=t.children,h=e.children;if(i(p)&&w(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);i(f=p.hook)&&i(f=f.update)&&f(t,e)}o(e.text)?i(l)&&i(h)?l!==h&&P(c,l,h,n,s):i(h)?(i(t.text)&&u.setTextContent(c,""),x(c,null,h,0,h.length-1,n)):i(l)?A(c,l,0,l.length-1):i(t.text)&&u.setTextContent(c,""):t.text!==e.text&&u.setTextContent(c,e.text),i(p)&&i(f=p.hook)&&i(f=f.postpatch)&&f(t,e)}}}function E(t,e,n){if(a(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var j=y("attrs,style,class,staticClass,staticStyle,key");function I(t,n,r){if(a(n.isComment)&&i(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var o=n.tag,s=n.data,c=n.children;if(i(s)&&(i(e=s.hook)&&i(e=e.init)&&e(n,!0),i(e=n.componentInstance)))return v(n,r),!0;if(i(o)){if(i(c))if(t.hasChildNodes()){for(var u=!0,f=t.firstChild,p=0;p<c.length;p++){if(!f||!I(f,c[p],r)){u=!1;break}f=f.nextSibling}if(!u||f)return!1}else _(n,c,r);if(i(s))for(var l in s)if(!j(l)){$(n,r);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,n,s,c,p){if(!o(e)){var l=!1,d=[];if(o(t))l=!0,h(e,d,c,p);else{var v=i(t.nodeType);if(!v&&br(t,e))S(t,e,d,s);else{if(v){if(1===t.nodeType&&t.hasAttribute(L)&&(t.removeAttribute(L),n=!0),a(n)&&I(t,e,d))return E(e,d,!0),t;t=f(t)}var y=t.elm,g=u.parentNode(y);if(h(e,d,y._leaveCb?null:g,u.nextSibling(y)),i(e.parent)){var m=e.parent;while(m)m.elm=e.elm,m=m.parent;if(w(e))for(var _=0;_<r.create.length;++_)r.create[_](wr,e.parent)}i(g)?A(g,[t],0,0):i(t.tag)&&O(t)}}return E(e,d,l),e.elm}i(t)&&O(t)}}var kr=[mr],Pr=Ar({nodeOps:gr,modules:kr});function Sr(){Pr.apply(this,arguments),this.$updateDataToMP()}function Er(t,e,r){var o,i=t.$options[e];if("onError"===e&&i&&(i=[i]),i)for(var a=0,s=i.length;a<s;a++)try{o=i[a].call(t,r)}catch(n){z(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return Er(t,e,r)}),o}function jr(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}function Ir(t,e,n){if(t){var r,o,i;if(Array.isArray(t)){r=t.length;while(r--)o=t[r],"string"===typeof o&&(i=x(o),e[i]={type:null})}else if(p(t))for(var a in t)o=t[a],i=x(a),e[i]=p(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var c=e[s];c.default&&(c.value=c.default);var u=c.observer;c.observer=function(t,e){n[i]=t,"function"===typeof u&&u.call(n,t,e)}}return e}}function Cr(t){var e=t.$options.properties,n=t.$options.props,r={};return Ir(e,r,t),Ir(n,r,t),r}function Tr(t){var e=t._mpProps={},n=Object.keys(t.$options.properties||{});n.forEach(function(n){n in t||(Ve(t,"_mpProps",n),e[n]=void 0)}),wt(e,!0)}function Nr(t,n){var r=this.$root;r.$mp||(r.$mp={});var o=r.$mp;if(o.status)return"app"===t?Er(this,"onLaunch",o.appOptions):(this.__wxWebviewId__=r.__wxWebviewId__,this.__wxExparserNodeId__=r.__wxExparserNodeId__,Er(this,"onLoad",o.query)),n();if(o.mpType=t,o.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),o.app=this,o.status="launch",this.globalData.appOptions=o.appOptions=t,Er(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),o.status="show",this.globalData.appOptions=o.appOptions=t,Er(r,"onShow",t)},onHide:function(){o.status="hide",Er(r,"onHide")},onError:function(t){Er(r,"onError",t)},onUniNViewMessage:function(t){Er(r,"onUniNViewMessage",t)}});else if("component"===t)Tr(r),e.Component({properties:Cr(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){o.status="created",o.page=this},attached:function(){o.status="attached",Er(r,"attached")},ready:function(){o.status="ready",Er(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){Er(r,"moved")},detached:function(){o.status="detached",Er(r,"detached")}});else{var i=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.query=t,o.status="load",jr(i,r),r.$options&&"function"===typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),Er(r,"onLoad",t)},onShow:function(){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.status="show",Er(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){o.status="ready",Er(r,"onReady"),n()},onHide:function(){o.status="hide",Er(r,"onHide")},onUnload:function(){o.status="unload",Er(r,"onUnload"),o.page=null},onPullDownRefresh:function(){Er(r,"onPullDownRefresh")},onReachBottom:function(){Er(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return Er(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){Er(r,"onPageScroll",t)},onTabItemTap:function(t){Er(r,"onTabItemTap",t)}})}}function Dr(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{}));return e.reduce(function(e,n){return e[n]=t[n],e},{})}function Rr(t,e){void 0===e&&(e=[]);var n=t||{},r=n.$parent;return r?(e.unshift(nr(r)),r.$parent?Rr(r,e):e):e}function Lr(t){var e=Rr(t).join(","),n=e+(e?",":"")+nr(t),r=Object.assign(Dr(t),{$k:n,$kk:n+",",$p:e}),o="$root."+n,i={};return i[o]=r,i}function Mr(t,e){void 0===e&&(e={});var n=t.$children;return n&&n.length&&n.forEach(function(t){return Mr(t,e)}),Object.assign(e,Lr(t))}function Br(t,e,n){var r,o,i,a=null,s=0;function c(){s=!1===n.leading?0:Date.now(),a=null,i=t.apply(r,o),a||(r=o=null)}return n||(n={}),function(u,f){var p=Date.now();s||!1!==n.leading||(s=p);var l=e-(p-s);return r=this,o=o?[u,Object.assign(o[1],f)]:[u,f],l<=0||l>e?(clearTimeout(a),a=null,s=p,i=t.apply(r,o),a||(r=o=null)):a||!1===n.trailing||(a=setTimeout(c,l)),i}}var Ur=Br(function(t,e){t&&t(e)},50);function Vr(t){var e=t.$root,n=e.$mp||{},r=n.mpType;void 0===r&&(r="");var o=n.page;if("app"!==r&&o&&"function"===typeof o.setData)return o}function Fr(){var t=Vr(this);if(t){var e=JSON.parse(JSON.stringify(Lr(this)));Ur(t.setData.bind(t),r(e,t.data))}}function Wr(){var t=Vr(this);if(t){var e=Mr(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}}function Hr(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var o=t.$children[r],i=nr(o);if(i===e)return t=o,t}return t},t):t}function qr(t,e,n){void 0===n&&(n=[]);var r=[];if(!t||!t.tag)return r;var o=t||{},i=o.data;void 0===i&&(i={});var a=o.children;void 0===a&&(a=[]);var s=o.componentInstance;s?Object.keys(s.$slots).forEach(function(t){var o=s.$slots[t],i=Array.isArray(o)?o:[o];i.forEach(function(t){r=r.concat(qr(t,e,n))})}):a.forEach(function(t){r=r.concat(qr(t,e,n))});var c=i.attrs,u=i.on;return c&&u&&c["eventid"]===e?(n.forEach(function(t){var e=u[t];"function"===typeof e?r.push(e):Array.isArray(e)&&(r=r.concat(e))}),r):r}function Jr(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s=o.x,c=o.y,u={mp:t,type:e,timeStamp:n,x:s,y:c,target:Object.assign({},i,o),detail:o,currentTarget:a,stopPropagation:I,preventDefault:I};return r&&r.length&&(Object.assign(u,r[0]),u.touches=r),u}function zr(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=t.currentTarget,i=o||r,a=i.dataset;void 0===a&&(a={});var s=a.comkey;void 0===s&&(s="");var c=a.eventid,u=Hr(e,s.split(","));if(u){var f=rr[n]||[n],p=qr(u._vnode,c,f);if(p.length){var l=Jr(t);if(1===p.length){var h=p[0](l);return h}p.forEach(function(t){return t(l)})}}}return Rn.config.mustUseProp=Qn,Rn.config.isReservedTag=Yn,Rn.config.isReservedAttr=Zn,Rn.config.getTagNamespace=tr,Rn.config.isUnknownElement=er,Rn.prototype.__patch__=Sr,Rn.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return ge(n,void 0,void 0)})}return ge(this,void 0,void 0)},Rn.prototype._initMP=Nr,Rn.prototype.$updateDataToMP=Fr,Rn.prototype._initDataToMP=Wr,Rn.prototype.$handleProxyWithVue=zr,Rn})}).call(this,n("c8ba"))}}]);
});
define('static/lib/company.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

var company = [{
  "cid": "5",
  "id": "1",
  "companyname": "申通快递",
  "shortname": "申通",
  "tel": "95543",
  "url": "st",
  "code": "shentong",
  "hasvali": 0,
  "comurl": "http://www.sto.cn",
  "isavailable": "0",
  "promptinfo": "系统升级，请到申通官网查询",
  "testnu": "229855869255",
  "freg": "^[0-9]{12,13}$",
  "freginfo": "申通单号由12位数字组成，常见以268*、368*、58*等开头",
  "telcomplaintnum": "95543",
  "queryurl": "http://www.sto.cn/web%20select.asp",
  "serversite": "http://www.kuaidi100.com/network/province_5.htm"
}, {
  "cid": "9",
  "id": "2",
  "companyname": "EMS",
  "shortname": "EMS",
  "tel": "11183",
  "url": "ems",
  "code": "ems",
  "hasvali": 0,
  "comurl": "http://www.ems.com.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "5116741128399",
  "freg": "",
  "freginfo": "13位纯数字或者开头和结尾各2位字母中间9位数字",
  "telcomplaintnum": "11183",
  "queryurl": "http://www.11183.com.cn/ems/order/singleQuery_t?mailNum=",
  "serversite": ""
}, {
  "cid": "10",
  "id": "3",
  "companyname": "顺丰速运",
  "shortname": "顺丰",
  "tel": "95338",
  "url": "sf",
  "code": "shunfeng",
  "hasvali": 0,
  "comurl": "http://www.sf-express.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "976186294981",
  "freg": "^[0-9]{12}$",
  "freginfo": "顺丰单号由12位数字组成，常以电话区号后3位开头",
  "telcomplaintnum": "0755-83151111",
  "queryurl": "http://www.sf-express.com/cn/sc/delivery_step/enquiry/coverageArea.html",
  "serversite": "http://www.kuaidi100.com/network/province_10.htm"
}, {
  "cid": "2",
  "id": "4",
  "companyname": "韵达快递",
  "shortname": "韵达",
  "tel": "95546",
  "url": "yd",
  "code": "yunda",
  "hasvali": 0,
  "comurl": "http://www.yundaex.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "1201875063322",
  "freg": "^[0-9]{13}$",
  "freginfo": "韵达单号由13位数字组成",
  "telcomplaintnum": "95546",
  "queryurl": "http://ykjcx.yundasys.com/go.php?wen=",
  "serversite": "http://www.kuaidi100.com/network/province_2.htm"
}, {
  "cid": "4",
  "id": "5",
  "companyname": "圆通速递",
  "shortname": "圆通",
  "tel": "95554",
  "url": "yt",
  "code": "yuantong",
  "hasvali": 0,
  "comurl": "http://www.ytoexpress.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "881443775034378914",
  "freg": "",
  "freginfo": "圆通单号由10位字母数字组成，常见以6*、8*及V*等开头",
  "telcomplaintnum": "95554",
  "queryurl": "http://www.ytoexpress.com/",
  "serversite": "http://www.kuaidi100.com/network/province_4.htm"
}, {
  "cid": "3",
  "id": "6",
  "companyname": "中通快递",
  "shortname": "中通",
  "tel": "95311",
  "url": "zt",
  "code": "zhongtong",
  "hasvali": 0,
  "comurl": "http://www.zto.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "768404530475",
  "freg": "^[0-9]{12}$",
  "freginfo": "中通单号由12位数字组成，常见以2008**、6**、010等开头",
  "telcomplaintnum": "95311",
  "queryurl": "http://www.zto.cn/SiteInfo/index.aspx",
  "serversite": "http://www.kuaidi100.com/network/province_3.htm"
}, {
  "cid": "6",
  "id": "7",
  "companyname": "百世快递",
  "shortname": "汇通",
  "tel": "4009 565656",
  "url": "htky",
  "code": "huitongkuaidi",
  "hasvali": 0,
  "comurl": "http://www.800bestex.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "280490671426",
  "freg": "^[A-Za-z0-9]{11,14}$",
  "freginfo": "百世快递单号由12-14位数字字母组成，常见以50*开头",
  "telcomplaintnum": "4009 565656",
  "queryurl": "http://www.800bestex.com/",
  "serversite": "http://www.kuaidi100.com/network/province_6.htm"
}, {
  "cid": "7",
  "id": "8",
  "companyname": "天天快递",
  "shortname": "天天",
  "tel": "400-188-8888",
  "url": "tt",
  "code": "tiantian",
  "hasvali": 0,
  "comurl": "http://www.ttkdex.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "580239318951",
  "freg": "",
  "freginfo": "天天单号由12或14位数字组成，常见以6**、5*、00*等开头",
  "telcomplaintnum": "400-188-8888",
  "queryurl": "http://www.ttkdex.com/ttkdweb/webdistributed/WebBranchInfo.html",
  "serversite": "http://www.kuaidi100.com/network/province_7.htm"
}, {
  "cid": "12",
  "id": "9",
  "companyname": "宅急送",
  "shortname": "宅急送",
  "tel": "400-6789-000",
  "url": "zjs",
  "code": "zhaijisong",
  "hasvali": 0,
  "comurl": "http://www.zjs.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "5977596855",
  "freg": "",
  "freginfo": "宅急送单号由10位数字组成，常见以7**、6**、5**等开头",
  "telcomplaintnum": "400-6789-000",
  "queryurl": "http://www.zjs.com.cn/WS_Business/WS_Bussiness_CityArea.aspx?id=6",
  "serversite": "http://www.kuaidi100.com/network/province_12.htm"
}, {
  "cid": "29",
  "id": "10",
  "companyname": "鑫飞鸿",
  "shortname": "鑫飞鸿",
  "tel": "021-69781999",
  "url": "xfh",
  "code": "xinhongyukuaidi",
  "hasvali": 0,
  "comurl": "http://www.kuaidi100.com/all/xfh.shtml",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "9494396730",
  "freg": "",
  "freginfo": "鑫飞鸿快递单号一般是由10位数字组成",
  "telcomplaintnum": "tousu@u-link.org",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "143",
  "id": "11",
  "companyname": "CCES/国通快递",
  "shortname": "CCES",
  "tel": "400-111-1123",
  "url": "cces",
  "code": "cces",
  "hasvali": 0,
  "comurl": "http://www.gto365.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "3117726784",
  "freg": "",
  "freginfo": "常见的CCES单号由10位数字组成",
  "telcomplaintnum": "400-111-1123",
  "queryurl": "http://www.gto365.com",
  "serversite": "http://www.kuaidi100.com/network/province_20.htm"
}, {
  "cid": "30",
  "id": "12",
  "companyname": "全一快递",
  "shortname": "全一",
  "tel": "400-663-1111",
  "url": "qy",
  "code": "quanyikuaidi",
  "hasvali": 0,
  "comurl": "http://www.unitop-apex.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "112268199514",
  "freg": "^[0-9]{9,12}$",
  "freginfo": "旧的为9位数字，被DHL合并后的中外运全一为12位数字",
  "telcomplaintnum": "021-52695805",
  "queryurl": "http://www.unitop-apex.com/",
  "serversite": "http://www.unitop-apex.com/networkquery.aspx"
}, {
  "cid": "31",
  "id": "13",
  "companyname": "彪记快递",
  "shortname": "彪记",
  "tel": "+886 (02) 2562-3533",
  "url": "bj",
  "code": "biaojikuaidi",
  "hasvali": null,
  "comurl": "http://www.pewkee.com",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": "http://www2.pewkee.com/pewkee/gb2-pewkee/gb2-global_2.php"
}, {
  "cid": "16",
  "id": "14",
  "companyname": "星晨急便",
  "shortname": "星晨急便",
  "tel": "",
  "url": "xcjb",
  "code": "xingchengjibian",
  "hasvali": 1,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "7038029040",
  "freg": "^[0-9]{10,14}$",
  "freginfo": "星辰急便单号查询编码由10或14位数字组成",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "32",
  "id": "15",
  "companyname": "亚风速递",
  "shortname": "亚风",
  "tel": "4001-000-002",
  "url": "yfsd",
  "code": "yafengsudi",
  "hasvali": 0,
  "comurl": "http://www.airfex.net/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "50049680024",
  "freg": "^[A-Za-z0-9]{10,13}$",
  "freginfo": "亚风正确的单号由10位数字组成或以字母开头13位组成，常见已常见以59开头或BAT开头",
  "telcomplaintnum": "400-1000-002",
  "queryurl": "",
  "serversite": "http://www.airfex.net/"
}, {
  "cid": "33",
  "id": "16",
  "companyname": "源伟丰",
  "shortname": "源伟丰",
  "tel": "400-601-2228",
  "url": "ywf",
  "code": "yuanweifeng",
  "hasvali": null,
  "comurl": "http://www.ywfex.com",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "27458907",
  "freg": "^[0-9]{8,11}$",
  "freginfo": "常见的源伟丰快递单号查询码一般为8-11的纯数字",
  "telcomplaintnum": "0769-81515303、0769-81515300",
  "queryurl": "",
  "serversite": "http://www.ywfex.com/site_search.jsp"
}, {
  "cid": "25",
  "id": "17",
  "companyname": "全日通",
  "shortname": "全日通",
  "tel": "020-86298999",
  "url": "qrt",
  "code": "quanritongkuaidi",
  "hasvali": 0,
  "comurl": "http://www.at-express.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "660000000000",
  "freg": "^[0-9]{11,12}$",
  "freginfo": "全日通物流单号由区号+数字的12位数字编码组成",
  "telcomplaintnum": "",
  "queryurl": "http://www.at-express.com/servicesarea.html",
  "serversite": "http://www.at-express.com:8080/servicesarea.html"
}, {
  "cid": "34",
  "id": "18",
  "companyname": "安信达",
  "shortname": "安信达",
  "tel": "400-716-1919",
  "url": "axd",
  "code": "anxindakuaixi",
  "hasvali": 0,
  "comurl": "http://www.axdkd.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "201000000000",
  "freg": "^[0-9]{10,12}$",
  "freginfo": "常见的安信达单号由10、12位数字组成",
  "telcomplaintnum": "400-716-1919",
  "queryurl": "http://www.axdkd.com",
  "serversite": "http://www.axdkd.com/index.php?m=content&c=index&a=lists&catid=27"
}, {
  "cid": "35",
  "id": "19",
  "companyname": "民航快递",
  "shortname": "民航",
  "tel": "400-817-4008",
  "url": "mh",
  "code": "minghangkuaidi",
  "hasvali": 0,
  "comurl": "http://www.cae.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CAE571402125",
  "freg": "",
  "freginfo": "单号通常是以CAE开头的12位英文+数字",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": "http://www.cae.com.cn/infodetailshow.aspx?m=20090225165413640027"
}, {
  "cid": "144",
  "id": "20",
  "companyname": "凤凰快递",
  "shortname": "凤凰",
  "tel": "010-85826200",
  "url": "fhkd",
  "code": "fenghuangkuaidi",
  "hasvali": null,
  "comurl": "http://www.phoenixexp.com",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "36",
  "id": "21",
  "companyname": "京广速递",
  "shortname": "京广",
  "tel": "0769-88629888",
  "url": "jgsd",
  "code": "jinguangsudikuaijian",
  "hasvali": 0,
  "comurl": "http://www.szkke.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "6600285956",
  "freg": "^[0-9]{10}$",
  "freginfo": "京广速递查询单号一般是由10位数字组成",
  "telcomplaintnum": "0769-88629888",
  "queryurl": "",
  "serversite": "http://www.szkke.com/"
}, {
  "cid": "340",
  "id": "22",
  "companyname": "配思货运",
  "shortname": "配思",
  "tel": "010-65489928,65489571,65489469,65489456",
  "url": "pshy",
  "code": "peisihuoyunkuaidi",
  "hasvali": null,
  "comurl": "http://www.peisi.cn",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": "http://www.peisi.cn/www/wangdian.asp"
}, {
  "cid": "37",
  "id": "23",
  "companyname": "中铁物流",
  "shortname": "中铁",
  "tel": "400-000-5566",
  "url": "ztwl",
  "code": "ztky",
  "hasvali": 0,
  "comurl": "http://www.ztky.com ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "6093086672",
  "freg": "",
  "freginfo": "中铁物流的单号一般由字母或数字组成",
  "telcomplaintnum": "400-650-1118",
  "queryurl": "http://www.ztky.com ",
  "serversite": "http://www.ztky.com/custom/khzq_yywd.aspx"
}, {
  "cid": "38",
  "id": "24",
  "companyname": "UPS",
  "shortname": "UPS",
  "tel": "400-820-8388",
  "url": "ups",
  "code": "ups",
  "hasvali": 0,
  "comurl": "http://www.ups.com/cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "1ZA0F8536742316738",
  "freg": "^[A-Za-z0-9]{7,22}$",
  "freginfo": "标准编码为7到20位数之间的数字，或字母+数字",
  "telcomplaintnum": "800-820-8388",
  "queryurl": "",
  "serversite": "http://www.ups.com/content/cn/zh/locations/dropoff/index.html?WT.svl=PNRO_L1"
}, {
  "cid": "146",
  "id": "25",
  "companyname": "FedEx-国际件",
  "shortname": "FedEx",
  "tel": "400-886-1888",
  "url": "fedex",
  "code": "fedex",
  "hasvali": 0,
  "comurl": "http://fedex.com/cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "9261299995865837450409",
  "freg": "",
  "freginfo": "FedEx-国际单号是由12位纯数字组成",
  "telcomplaintnum": "800-988-1888",
  "queryurl": "",
  "serversite": "http://www.fedex.com/cn/dropoff"
}, {
  "cid": "40",
  "id": "27",
  "companyname": "DHL-中国件",
  "shortname": "DHL",
  "tel": "800-810-8000",
  "url": "dhl",
  "code": "dhl",
  "hasvali": 0,
  "comurl": "http://www.cn.dhl.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "3244675836",
  "freg": "",
  "freginfo": "dhl快递单号由10位或12位纯数字组成",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": "http://www.cn.dhl.com/apps/FindCenter/dhldropoff.html"
}, {
  "cid": "41",
  "id": "28",
  "companyname": "AAE-中国件",
  "shortname": "AAE",
  "tel": "400-610-0400",
  "url": "aae",
  "code": "aae",
  "hasvali": 0,
  "comurl": "http://cn.aaeweb.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "4000010055",
  "freg": "^[0-9]{9,10}$",
  "freginfo": "AAE-中国单号是由9位或10位纯数字组成，常以10*、86*开头",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": "http://cn.aaeweb.com/network"
}, {
  "cid": "147",
  "id": "29",
  "companyname": "大田物流",
  "shortname": "大田",
  "tel": "400-626-1166",
  "url": "dtwl",
  "code": "datianwuliu",
  "hasvali": 0,
  "comurl": "http://www.dtw.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "6137971090",
  "freg": "^[A-Za-z0-9]{8,20}$",
  "freginfo": "大田物流单号一般是由以6*开头10位纯数字组成",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": "http://www.dtw.com.cn/chn/kit/network.htm"
}, {
  "cid": "1",
  "id": "30",
  "companyname": "德邦物流",
  "shortname": "德邦",
  "tel": "95353",
  "url": "dbwl",
  "code": "debangwuliu",
  "hasvali": 0,
  "comurl": "http://www.deppon.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "230624798",
  "freg": "",
  "freginfo": "德邦的货运单号现在是以1或2开头的8位数字组成",
  "telcomplaintnum": "",
  "queryurl": "http://www.deppon.com/wangdian/",
  "serversite": ""
}, {
  "cid": "13",
  "id": "31",
  "companyname": "新邦物流",
  "shortname": "新邦",
  "tel": "4008-000-222",
  "url": "xbwl",
  "code": "xinbangwuliu",
  "hasvali": 0,
  "comurl": "http://www.xbwl.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "0005698",
  "freg": "",
  "freginfo": "新邦物流查询单号一般0开头由8位纯数字组成的",
  "telcomplaintnum": "",
  "queryurl": "http://www.xbwl.cn/NewNetSite.aspx",
  "serversite": ""
}, {
  "cid": "24",
  "id": "32",
  "companyname": "龙邦速递",
  "shortname": "龙邦",
  "tel": "021-59218889",
  "url": "lb",
  "code": "longbanwuliu",
  "hasvali": 0,
  "comurl": "http://www.lbex.net",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "888305364377",
  "freg": "^[A-Za-z0-9]{12}$",
  "freginfo": "由12位数字组成，常见以16*开头，也有字母开头的",
  "telcomplaintnum": "021-59218889",
  "queryurl": "http://122.225.104.195:8089/SearchPaiSongWeb1/index.jsp",
  "serversite": "http://www.lbex.net/site/index.jsp"
}, {
  "cid": "121",
  "id": "33",
  "companyname": "一邦速递",
  "shortname": "一邦",
  "tel": "000-000-0000",
  "url": "yb",
  "code": "yibangwuliu",
  "hasvali": 0,
  "comurl": "http://www.ebon-express.com",
  "isavailable": "1",
  "promptinfo": "快递公司官网已经关闭",
  "testnu": "2240847902",
  "freg": "^[0-9]{10}$",
  "freginfo": "一邦快递单号查询编码由10位数字组合，常见已80*开头",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": "http://www.ebon-express.com/wangdian/wangdian!province.action?show=0"
}, {
  "cid": "11",
  "id": "34",
  "companyname": "速尔快递",
  "shortname": "速尔",
  "tel": "400-158-9888",
  "url": "sewl",
  "code": "suer",
  "hasvali": 0,
  "comurl": "http://www.sure56.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "880118395483",
  "freg": "^[0-9]{10,12}$",
  "freginfo": "速尔的快递单号由12位数字组成的",
  "telcomplaintnum": "0769-89339656",
  "queryurl": "http://www.sure56.com/area/service.aspx",
  "serversite": ""
}, {
  "cid": "42",
  "id": "35",
  "companyname": "联昊通",
  "shortname": "联昊通",
  "tel": "0769-88620000",
  "url": "lhtwl",
  "code": "lianhaowuliu",
  "hasvali": 0,
  "comurl": "http://www.lhtex.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "231018780470",
  "freg": "^[0-9]{10,12}$",
  "freginfo": "联昊通快递单号由12位或者10位数字编码组成",
  "telcomplaintnum": "0769-88620000,85116666",
  "queryurl": "",
  "serversite": "http://www.lhtex.com.cn/wd.asp"
}, {
  "cid": "43",
  "id": "36",
  "companyname": "广东邮政",
  "shortname": "广东邮政",
  "tel": "020-38181677",
  "url": "gdyzwl",
  "code": "guangdongyouzhengwuliu",
  "hasvali": null,
  "comurl": "http://www.ep183.cn/",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "A044813738",
  "freg": "^[A-Za-z0-9]{7,20}$",
  "freginfo": "广东邮政由10位数字和字母组合或者7、8位的纯数字组成",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "44",
  "id": "37",
  "companyname": "中邮物流",
  "shortname": "中邮",
  "tel": "11183",
  "url": "zywl",
  "code": "zhongyouwuliu",
  "hasvali": 0,
  "comurl": "http://www.cnpl.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "AA24256934599",
  "freg": "^[A-Za-z0-9]{8,20}$",
  "freginfo": "一般是以A或E开头，字母+数字组成，查询时CNPL无需输入",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": "http://www.cnpl.com.cn/itemcontent.jsp?itemId=6"
}, {
  "cid": "14",
  "id": "38",
  "companyname": "天地华宇",
  "shortname": "华宇",
  "tel": "400-808-6666",
  "url": "tdhy",
  "code": "tiandihuayu",
  "hasvali": 0,
  "comurl": "http://www.hoau.net",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "066169042",
  "freg": "",
  "freginfo": "华宇物流查询单号是由8位数字组成",
  "telcomplaintnum": "400-808-6666",
  "queryurl": "http://www.hoau.net/",
  "serversite": ""
}, {
  "cid": "148",
  "id": "39",
  "companyname": "盛辉物流",
  "shortname": "盛辉",
  "tel": "4008-222-222",
  "url": "sh",
  "code": "shenghuiwuliu",
  "hasvali": 0,
  "comurl": "http://www.shenghui56.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "238117137",
  "freg": "^[0-9]{9}$",
  "freginfo": "盛辉物流单号由9位数字编码组成",
  "telcomplaintnum": "4008-222-222",
  "queryurl": "",
  "serversite": "http://www.shenghui56.com/list-4.html"
}, {
  "cid": "149",
  "id": "40",
  "companyname": "长宇物流",
  "shortname": "长宇",
  "tel": "4007-161-262",
  "url": "cywl",
  "code": "changyuwuliu",
  "hasvali": null,
  "comurl": "http://61.145.121.47/custSearch.jsp",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": "http://www.cyexp.com/Guide3.asp"
}, {
  "cid": "45",
  "id": "41",
  "companyname": "飞康达",
  "shortname": "飞康达",
  "tel": "010-84223376,84223378",
  "url": "fkd",
  "code": "feikangda",
  "hasvali": 0,
  "comurl": "http://www.fkd.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "500054166104",
  "freg": "",
  "freginfo": "飞康达单号查询编码大多以8开头，一般由11位的数字组成",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": "http://www.fkd.com.cn/network.asp?id=1"
}, {
  "cid": "46",
  "id": "42",
  "companyname": "元智捷诚",
  "shortname": "元智捷诚",
  "tel": "400-081-2345",
  "url": "yzjc",
  "code": "yuanzhijiecheng",
  "hasvali": 0,
  "comurl": "http://www.yjkd.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "XF012180287",
  "freg": "^[A-Za-z0-9]{10,20}$",
  "freginfo": "元智快递查询单号一般以FD开头，由最多11位数字+字母形式组成",
  "telcomplaintnum": "400-08-12345",
  "queryurl": "",
  "serversite": "http://www.yjkd.com/wd/wangdian.asp"
}, {
  "cid": "47",
  "id": "43",
  "companyname": "邮政包裹/平邮",
  "shortname": "邮政国内",
  "tel": "11185",
  "url": "yzgn",
  "code": "youzhengguonei",
  "hasvali": 0,
  "comurl": "http://yjcx.chinapost.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "9610005849243",
  "freg": "",
  "freginfo": "邮政单号以字母开头+11位数字，常见KA、SB等开头",
  "telcomplaintnum": "11185",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "48",
  "id": "44",
  "companyname": "国际包裹",
  "shortname": "邮政国际",
  "tel": "11185",
  "url": "yzgj",
  "code": "youzhengguoji",
  "hasvali": 0,
  "comurl": "http://intmail.183.com.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CK035278885DE",
  "freg": "^[a-z-A-Z]{2}[0-9]{9}[a-z-A-Z]{2}$",
  "freginfo": "由13位字母和数字组成，开头和结尾是字母，中间是数字 ",
  "telcomplaintnum": "11185",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "49",
  "id": "45",
  "companyname": "万家物流",
  "shortname": "万家",
  "tel": "4001-156-561",
  "url": "wjwl",
  "code": "wanjiawuliu",
  "hasvali": 0,
  "comurl": "http://www.manco-logistics.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "SJ0407976",
  "freg": "",
  "freginfo": "万家物流单号查询编码通常是由城市编码(英文)+7位数字组成",
  "telcomplaintnum": "021-60448911",
  "queryurl": "http://www.manco-logistics.com/cargosearch.jsp",
  "serversite": "http://www.manco-logistics.com/"
}, {
  "cid": "188",
  "id": "46",
  "companyname": "远成物流",
  "shortname": "远成",
  "tel": "400-820-1646",
  "url": "ycwl",
  "code": "yuanchengwuliu",
  "hasvali": 0,
  "comurl": "http://www.ycgwl.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "0016058401",
  "freg": "^[A-Za-z0-9]{5,10}$",
  "freginfo": "远成物流查询单号一般是以00开头，由最多10位的数字组成",
  "telcomplaintnum": "400-820-1646",
  "queryurl": "",
  "serversite": "http://www.ycgwl.com/map.asp"
}, {
  "cid": "50",
  "id": "47",
  "companyname": "信丰物流",
  "shortname": "信丰",
  "tel": "400-830-6333",
  "url": "xfwl",
  "code": "xinfengwuliu",
  "hasvali": 0,
  "comurl": "http://www.xf-express.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "137441402465",
  "freg": "^[0-9]{12}$",
  "freginfo": "信丰快递正确的单号由12位纯数字组成，常见已139*开头",
  "telcomplaintnum": "4008 306 333、0769-81518333",
  "queryurl": "",
  "serversite": "http://www.xf-express.com.cn/showarea.aspx?pid=-1=-1"
}, {
  "cid": "51",
  "id": "48",
  "companyname": "文捷航空",
  "shortname": "文捷",
  "tel": "020-88561502,85871501,31683301",
  "url": "wjhk",
  "code": "wenjiesudi",
  "hasvali": null,
  "comurl": "http://www.wjexpress.com",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "020-36680069、020-86372740、020-88561502",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "52",
  "id": "49",
  "companyname": "全晨快递",
  "shortname": "全晨",
  "tel": "0769-82026703",
  "url": "qckd",
  "code": "quanchenkuaidi",
  "hasvali": 0,
  "comurl": "http://www.qckd.net/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "3086275236",
  "freg": "^[0-9]{10}$",
  "freginfo": "全晨单号由10位数字编码组成",
  "telcomplaintnum": "0769-82026701/82026703",
  "queryurl": "",
  "serversite": "http://www.qckd.net/services.asp"
}, {
  "cid": "53",
  "id": "50",
  "companyname": "佳怡物流",
  "shortname": "佳怡",
  "tel": "400-631-9999",
  "url": "jywl",
  "code": "jiayiwuliu",
  "hasvali": 0,
  "comurl": "http://www.jiayi56.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "37172798",
  "freg": "^[0-9]{8}$",
  "freginfo": "佳怡物流查询单号一般是由8位数字组成",
  "telcomplaintnum": "400-631-9999",
  "queryurl": "",
  "serversite": "http://www.jiayi56.com/products_index.html"
}, {
  "cid": "17",
  "id": "51",
  "companyname": "优速物流",
  "shortname": "优速",
  "tel": "400-1111-119",
  "url": "yskd",
  "code": "youshuwuliu",
  "hasvali": 0,
  "comurl": "http://www.uc56.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "518110315363",
  "freg": "",
  "freginfo": "优速单号由12位数字组成，LP开头的不是优速快递单号",
  "telcomplaintnum": "400-1111-119",
  "queryurl": "http://www.uc56.com/Chinese/UC56ServiceArea.aspx",
  "serversite": "http://www.uc56.com/Chinese/ServiceNetwork.aspx"
}, {
  "cid": "18",
  "id": "52",
  "companyname": "快捷速递",
  "shortname": "快捷",
  "tel": "4008-333-666",
  "url": "kjkd",
  "code": "kuaijiesudi",
  "hasvali": 0,
  "comurl": "http://www.kjkd.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "536084760465",
  "freg": "",
  "freginfo": "快捷常见单号有13位纯数字组成",
  "telcomplaintnum": "4008333666",
  "queryurl": "http://www.kjkd.com/",
  "serversite": "http://www.kjkd.com/"
}, {
  "cid": "28",
  "id": "53",
  "companyname": "D速快递",
  "shortname": "D速",
  "tel": "0531-88636363",
  "url": "dskd",
  "code": "dsukuaidi",
  "hasvali": 0,
  "comurl": "http://www.d-exp.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "316J074253086",
  "freg": "",
  "freginfo": "常见的单号以DS开头+9位纯数字+CN结尾共13位",
  "telcomplaintnum": "0531-88626262",
  "queryurl": "",
  "serversite": "http://www.d-exp.cn/Branch/China.aspx"
}, {
  "cid": "54",
  "id": "54",
  "companyname": "全际通",
  "shortname": "全际通",
  "tel": "400-0179-888",
  "url": "qjt",
  "code": "quanjitong",
  "hasvali": 0,
  "comurl": "http://www.quanjt.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "750000000000",
  "freg": "^[0-9]{12}$",
  "freginfo": "全际通物流单号由区号+数字的12位数字编码组成",
  "telcomplaintnum": "021-62966050",
  "queryurl": "",
  "serversite": "http://www.quanjt.com/fuwu/fuwu.do"
}, {
  "cid": "19",
  "id": "55",
  "companyname": "能达速递",
  "shortname": "能达",
  "tel": "400-6886-765",
  "url": "ndkd",
  "code": "ganzhongnengda",
  "hasvali": 0,
  "comurl": "http://www.nd56.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "886000130608",
  "freg": "^[0-9]{10,12}$",
  "freginfo": "港中能达单号一般以88开头的12位或10位数字",
  "telcomplaintnum": "400-6886-765",
  "queryurl": "http://www.nd56.com/",
  "serversite": "http://www.kuaidi100.com/network/province_19.htm"
}, {
  "cid": "55",
  "id": "56",
  "companyname": "青岛安捷快递",
  "shortname": "安捷",
  "tel": "400-056-5656",
  "url": "ajkd",
  "code": "anjiekuaidi",
  "hasvali": 0,
  "comurl": "http://www.anjelex.com",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "AN23733449",
  "freg": "^[A-Za-z0-9]{10,20}$",
  "freginfo": "常见的安捷单号由AN+开头8位数字或者12、13位纯数字组成",
  "telcomplaintnum": "4000565656",
  "queryurl": "",
  "serversite": "http://www.anjelex.com/kuaidi.asp"
}, {
  "cid": "150",
  "id": "57",
  "companyname": "越丰物流",
  "shortname": "越丰",
  "tel": "852-23909969",
  "url": "yfwl",
  "code": "yuefengwuliu",
  "hasvali": 0,
  "comurl": "http://www.yfexpress.com.hk",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "3001941084",
  "freg": "^[0-9]{10}$",
  "freginfo": "常见的越丰物流查询单号编码由10纯数字组成，常见以80*开头",
  "telcomplaintnum": "852-23909969",
  "queryurl": "",
  "serversite": "http://www.yfexpress.com.hk/service.php"
}, {
  "cid": "56",
  "id": "58",
  "companyname": "DPEX",
  "shortname": "DPEX",
  "tel": "400-920-7011/800-820-7011",
  "url": "dpex",
  "code": "dpex",
  "hasvali": 0,
  "comurl": "https://www.dpex.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "573006666956",
  "freg": "^[A-Za-z0-9]{8,20}$",
  "freginfo": "DPEX快递查询单号通常以5开头，由12位数字组成，部分dpex国际快递有13位数",
  "telcomplaintnum": "400-920-7011/800-820-7011",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "151",
  "id": "59",
  "companyname": "急先达",
  "shortname": "急先达",
  "tel": "021-59766363",
  "url": "jxd",
  "code": "jixianda",
  "hasvali": 0,
  "comurl": "http://www.joust.net.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "500617727",
  "freg": "^(500)[0-9]{6}$",
  "freginfo": "急先达单号一般是由以500*开头的9位数字组成",
  "telcomplaintnum": "021-59766363",
  "queryurl": "",
  "serversite": "http://www.joust.cn/Message2.aspx"
}, {
  "cid": "152",
  "id": "60",
  "companyname": "百福东方",
  "shortname": "百福东方",
  "tel": "400-706-0609",
  "url": "bfdf",
  "code": "baifudongfang",
  "hasvali": 0,
  "comurl": "http://www.ees.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "111159484",
  "freg": "",
  "freginfo": "百福东方单号一般是由9位数字组成,常以10开头",
  "telcomplaintnum": "400-706-0609",
  "queryurl": "",
  "serversite": "http://www.ees.com.cn/fuwuwangluo.html"
}, {
  "cid": "57",
  "id": "61",
  "companyname": "BHT",
  "shortname": "BHT",
  "tel": "010-58633508",
  "url": "bht",
  "code": "bht",
  "hasvali": 0,
  "comurl": "http://www.bht-exp.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "1285539849",
  "freg": "^[A-Za-z0-9]{8,11}$",
  "freginfo": "常见的BHT单号由BHT+开头8位数字或者8位纯数字组成",
  "telcomplaintnum": "010-58633508",
  "queryurl": "",
  "serversite": "http://www.bht-exp.com/iDoc.asp?docID=170"
}, {
  "cid": "168",
  "id": "62",
  "companyname": "伍圆速递",
  "shortname": "伍圆",
  "tel": "0592—5050535",
  "url": "wy",
  "code": "wuyuansudi",
  "hasvali": null,
  "comurl": "http://www.f5xm.com",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "169",
  "id": "64",
  "companyname": "蓝镖快递",
  "shortname": "蓝镖",
  "tel": "0769-82898999",
  "url": "lanb",
  "code": "lanbiaokuaidi",
  "hasvali": 0,
  "comurl": "http://www.bluedart.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "900000000000",
  "freg": "^[A-Za-z0-9]{8,20}$",
  "freginfo": "蓝镖常见单号以90*开同的13位纯数字组成",
  "telcomplaintnum": "800-988-1888 400-886-1888",
  "queryurl": "",
  "serversite": "http://www.bluedart.cn/p_ser.asp"
}, {
  "cid": "170",
  "id": "65",
  "companyname": "COE",
  "shortname": "COE",
  "tel": "0755-83575000",
  "url": "coe",
  "code": "coe",
  "hasvali": 0,
  "comurl": "http://www.coe.com.hk",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "610004404886",
  "freg": "",
  "freginfo": "COE单号由10、12位数字组成,常见以区号+8位数字或66+10为数字",
  "telcomplaintnum": "86-755-83575000 ",
  "queryurl": "",
  "serversite": "http://www.coe.com.hk/contact.asp"
}, {
  "cid": "171",
  "id": "66",
  "companyname": "南京100",
  "shortname": "南京100",
  "tel": "025-84510043",
  "url": "nj",
  "code": "nanjing",
  "hasvali": 0,
  "comurl": "http://www.100cskd.com",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "025-84510043 84510044",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "58",
  "id": "67",
  "companyname": "恒路物流",
  "shortname": "恒路",
  "tel": "400-182-6666",
  "url": "hl",
  "code": "hengluwuliu",
  "hasvali": 0,
  "comurl": "http://www.e-henglu.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "01560213",
  "freg": "^[A-Za-z0-9]{7,20}$",
  "freginfo": "恒路物流单号以7-13位的字母加数字组合，常见已8*开头的9位数字单号",
  "telcomplaintnum": "400-182-6666",
  "queryurl": "",
  "serversite": "http://www.e-henglu.com/service_network.htm"
}, {
  "cid": "172",
  "id": "68",
  "companyname": "金大物流",
  "shortname": "金大",
  "tel": "0755-82262209",
  "url": "jd",
  "code": "jindawuliu",
  "hasvali": 0,
  "comurl": "http://www.szkingdom.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "2006785",
  "freg": "^[0-9]{7}$",
  "freginfo": "金大快递正确的单号由7位数字组成",
  "telcomplaintnum": "0755-82262209",
  "queryurl": "",
  "serversite": "http://www.szkingdom.com.cn/Service.asp"
}, {
  "cid": "173",
  "id": "69",
  "companyname": "华夏龙",
  "shortname": "华夏龙",
  "tel": "400-716-6133",
  "url": "hxl",
  "code": "huaxialongwuliu",
  "hasvali": 0,
  "comurl": "http://www.chinadragon56.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "984535",
  "freg": "",
  "freginfo": "华夏龙物流的单号一般由纯数字组成",
  "telcomplaintnum": "400-716-6133 ",
  "queryurl": "",
  "serversite": "http://www.chinadragon56.com/we.aspx?bid=79"
}, {
  "cid": "59",
  "id": "70",
  "companyname": "运通中港",
  "shortname": "运通",
  "tel": "0769-81156999",
  "url": "ytkd",
  "code": "yuntongkuaidi",
  "hasvali": 0,
  "comurl": "http://www.ytkd168.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "657809056",
  "freg": "^[0-9]{9}$",
  "freginfo": "运通通常以61*开头的9位单号",
  "telcomplaintnum": "0769-81156999",
  "queryurl": "",
  "serversite": "http://www.ytkd168.com/Service_search.asp"
}, {
  "cid": "15",
  "id": "71",
  "companyname": "佳吉快运",
  "shortname": "佳吉",
  "tel": "400-820-5566",
  "url": "jjwl",
  "code": "jiajiwuliu",
  "hasvali": 0,
  "comurl": "http://www.jiaji.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "726170665",
  "freg": "",
  "freginfo": "佳吉快运由9位纯数字组成",
  "telcomplaintnum": "400-820-5566",
  "queryurl": "http://www.jiaji.com/website.aspx",
  "serversite": "http://www.kuaidi100.com/network/province_15.htm"
}, {
  "cid": "120",
  "id": "72",
  "companyname": "盛丰物流",
  "shortname": "盛丰",
  "tel": "0591-83621111",
  "url": "sfwl",
  "code": "shengfengwuliu",
  "hasvali": 0,
  "comurl": "http://www.sfwl.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "35147357",
  "freg": "",
  "freginfo": "盛丰物流的单号由字母和数字组成",
  "telcomplaintnum": "0591-83621111",
  "queryurl": "",
  "serversite": "http://www.sfwl.com.cn/sfwl.asp?ClassId=22"
}, {
  "cid": "174",
  "id": "73",
  "companyname": "源安达",
  "shortname": "源安达",
  "tel": "0769-85157789",
  "url": "yad",
  "code": "yuananda",
  "hasvali": 0,
  "comurl": "http://www.yadex.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "75006118366",
  "freg": "",
  "freginfo": "源安达快递单号查询编码一般为11的纯数字组成",
  "telcomplaintnum": "0769-85157789",
  "queryurl": "",
  "serversite": "http://www.yadex.com.cn/station.asp"
}, {
  "cid": "60",
  "id": "74",
  "companyname": "加运美",
  "shortname": "加运美",
  "tel": "0769-85515555",
  "url": "jymwl",
  "code": "jiayunmeiwuliu",
  "hasvali": 0,
  "comurl": "http://www.jym56.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "2191409648",
  "freg": "^[0-9]{10}$",
  "freginfo": "加运美快递正确的单号由10位数字组成",
  "telcomplaintnum": "0769-85515555/85166425 ",
  "queryurl": "",
  "serversite": "http://www.tms56.com/fwwdindex.asp"
}, {
  "cid": "175",
  "id": "75",
  "companyname": "万象物流",
  "shortname": "万象",
  "tel": "400-820-8088",
  "url": "wxwl",
  "code": "wanxiangwuliu",
  "hasvali": 0,
  "comurl": "http://www.ewinshine.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "032499209233840",
  "freg": "",
  "freginfo": "万象物流的单号一般由字母和数字组成",
  "telcomplaintnum": "（021）51035766-8062",
  "queryurl": "http://www.ewinshine.com",
  "serversite": ""
}, {
  "cid": "176",
  "id": "76",
  "companyname": "宏品物流",
  "shortname": "宏品",
  "tel": "400-612-1456",
  "url": "hpwl",
  "code": "hongpinwuliu",
  "hasvali": null,
  "comurl": "http://www.hpexpress.com.cn",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "177",
  "id": "77",
  "companyname": "GLS",
  "shortname": "GLS",
  "tel": "877-914-5465",
  "url": "gls",
  "code": "gls",
  "hasvali": 0,
  "comurl": "http://www.gls-group.net",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "93805190173",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "877-914-5465",
  "queryurl": "",
  "serversite": "http://www.cn-gls.com/product-inland3.html"
}, {
  "cid": "178",
  "id": "78",
  "companyname": "上大物流",
  "shortname": "上大",
  "tel": "400-021-9122",
  "url": "shangda",
  "code": "shangda",
  "hasvali": null,
  "comurl": "http://www.sundapost.net",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "U110173213",
  "freg": "",
  "freginfo": "上大物流的单号一般由数字组成",
  "telcomplaintnum": "400-021-9122",
  "queryurl": "",
  "serversite": "http://www.sundapost.net/cgi-bin/GInfo.dll?DispInfo;w=sundapost;nid=10414"
}, {
  "cid": "8",
  "id": "79",
  "companyname": "中铁快运",
  "shortname": "中铁",
  "tel": "95572",
  "url": "ztky",
  "code": "zhongtiewuliu",
  "hasvali": 0,
  "comurl": "http://www.cre.cn ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "K05090731602",
  "freg": "",
  "freginfo": "一般是由字母K或B开头，共14位字母与数字组合",
  "telcomplaintnum": "95572",
  "queryurl": "http://www.cre.cn ",
  "serversite": ""
}, {
  "cid": "61",
  "id": "80",
  "companyname": "原飞航",
  "shortname": "原飞航",
  "tel": "0769-87001100",
  "url": "yfh",
  "code": "yuanfeihangwuliu",
  "hasvali": 0,
  "comurl": "http://www.yfhex.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "110000901371",
  "freg": "",
  "freginfo": "原飞航单号由10位数字组成",
  "telcomplaintnum": "0755-29778899 / 29778100",
  "queryurl": "",
  "serversite": "http://www.yfhex.com/Module/Contact/SN_Outlets.aspx"
}, {
  "cid": "197",
  "id": "81",
  "companyname": "海外环球",
  "shortname": "海外环球",
  "tel": "010-59790107",
  "url": "hwhq",
  "code": "haiwaihuanqiu",
  "hasvali": 0,
  "comurl": "http://www.haiwaihuanqiu.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "10100000000000",
  "freg": "^[A-Za-z0-9]{8,20}$",
  "freginfo": "海外环球常见单号有字母开头的13位数字或者20位纯数字的单号",
  "telcomplaintnum": "010-59790107",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "191",
  "id": "82",
  "companyname": "三态速递",
  "shortname": "三态",
  "tel": "400-881-8106  ",
  "url": "stsd",
  "code": "santaisudi",
  "hasvali": 0,
  "comurl": "http://www.sfcservice.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "0001354",
  "freg": "^[A-Za-z0-9]{5,20}$",
  "freginfo": "三态常见单号有10位纯数字组成",
  "telcomplaintnum": "400-881-8106",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "62",
  "id": "83",
  "companyname": "晋越快递",
  "shortname": "晋越",
  "tel": "400-638-9288",
  "url": "jykd",
  "code": "jinyuekuaidi",
  "hasvali": 0,
  "comurl": "http://www.byondex.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "501910605146",
  "freg": "",
  "freginfo": "晋越快递的单号一般由12位纯数字组成",
  "telcomplaintnum": "400-638-9288",
  "queryurl": "",
  "serversite": "http://www.byondex.com.cn/ServeNet.Asp"
}, {
  "cid": "63",
  "id": "85",
  "companyname": "联邦快递",
  "shortname": "联邦",
  "tel": "400-889-1888",
  "url": "lianb",
  "code": "lianbangkuaidi",
  "hasvali": 0,
  "comurl": "http://cndxp.apac.fedex.com/dxp.html",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "120886787472",
  "freg": "^[0-9]{12}$",
  "freginfo": "联邦快递国内单号常见以12*开头12位纯数字组成",
  "telcomplaintnum": "400-889-1888",
  "queryurl": "",
  "serversite": "http://www.fedex.com/cn/dropoff"
}, {
  "cid": "66",
  "id": "99643",
  "companyname": "飞快达",
  "shortname": "飞快达",
  "tel": "400-716-6666",
  "url": "feikuaida",
  "code": "feikuaida",
  "hasvali": 0,
  "comurl": "http://www.fkdex.com",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "3105201982",
  "freg": "^[0-9]{10}$",
  "freginfo": "飞快达常见单号有10位纯数字组成",
  "telcomplaintnum": "400-716-6666",
  "queryurl": "",
  "serversite": "http://www.fkdex.com:8050/network.asp"
}, {
  "cid": "23",
  "id": "128693",
  "companyname": "全峰快递",
  "shortname": "全峰",
  "tel": "400-100-0001",
  "url": "qfkd",
  "code": "quanfengkuaidi",
  "hasvali": 0,
  "comurl": "http://www.qfkd.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "720193084187",
  "freg": "",
  "freginfo": "全峰快递单号一般由10或者12位数字组成",
  "telcomplaintnum": "",
  "queryurl": "http://www.qfkd.com.cn/quyu.aspx",
  "serversite": "http://www.kuaidi100.com/network/province_23.htm"
}, {
  "cid": "67",
  "id": "145551",
  "companyname": "如风达",
  "shortname": "如风达",
  "tel": "400-010-6660",
  "url": "rufengda",
  "code": "rufengda",
  "hasvali": 0,
  "comurl": "http://www.rufengda.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "6201506740351",
  "freg": "",
  "freginfo": "如风达单号或者是纯数字，或者字母加数字。",
  "telcomplaintnum": "",
  "queryurl": "http://www.rufengda.com",
  "serversite": "http://www.rufengda.com/check/check_network.html"
}, {
  "cid": "68",
  "id": "158572",
  "companyname": "乐捷递",
  "shortname": "乐捷递",
  "tel": "400-618-1400",
  "url": "lejiedi",
  "code": "lejiedi",
  "hasvali": 0,
  "comurl": "http://www.ljd365.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "15082900400001777CDE",
  "freg": "",
  "freginfo": "乐捷递的单号一般由字母和数字组成",
  "telcomplaintnum": "",
  "queryurl": "www.ljd365.com",
  "serversite": "http://www.ljd365.com/fuwucx.asp"
}, {
  "cid": "69",
  "id": "158573",
  "companyname": "忠信达",
  "shortname": "忠信达",
  "tel": "400-646-6665",
  "url": "zhongxinda",
  "code": "zhongxinda",
  "hasvali": 0,
  "comurl": "http://www.zhongxind.cn/index.asp",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "253120262",
  "freg": "",
  "freginfo": "忠信达快递的单号一般由纯数字组成",
  "telcomplaintnum": "",
  "queryurl": "http://www.zhongxind.cn/index.asp",
  "serversite": "http://www.zhongxind.cn/range.asp"
}, {
  "cid": "64",
  "id": "225616",
  "companyname": "芝麻开门",
  "shortname": "芝麻开门",
  "tel": "400-105-6056",
  "url": "zhimakaimen",
  "code": "zhimakaimen",
  "hasvali": 0,
  "comurl": "http://www.zmkmex.com/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "2994156174530",
  "freg": "",
  "freginfo": "芝麻开门的单号由数字组成",
  "telcomplaintnum": "400-105-6056",
  "queryurl": "http://www.zmkmex.com/ ",
  "serversite": "http://www.zmkmex.com/Article?id=cbe7ff8cc74b41a0a9d50ae0eaadca58"
}, {
  "cid": "70",
  "id": "247720",
  "companyname": "赛澳递",
  "shortname": "赛澳递",
  "tel": "4000-345-888",
  "url": "saiaodi",
  "code": "saiaodi",
  "hasvali": 0,
  "comurl": "http://www.51cod.com ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "JSC101011082067",
  "freg": "",
  "freginfo": "赛澳递是B2C公司的落地配，单号是各落低配的订单号",
  "telcomplaintnum": "4000-345-888",
  "queryurl": "http://www.51cod.com ",
  "serversite": "http://www.51cod.com/network/"
}, {
  "cid": "71",
  "id": "247731",
  "companyname": "海红网送",
  "shortname": "海红网送",
  "tel": "400-632-9988",
  "url": "haihongwangsong",
  "code": "haihongwangsong",
  "hasvali": 0,
  "comurl": "http://www.haihongwangsong.com/index.asp",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "SD0000236321HH",
  "freg": "",
  "freginfo": "海红网送的单号一般由前后各2位的字母，中间8位纯数字组成",
  "telcomplaintnum": "",
  "queryurl": "http://www.haihongwangsong.com/index.asp",
  "serversite": "http://www.haihongwangsong.com/order.asp"
}, {
  "cid": "21",
  "id": "257357",
  "companyname": "共速达",
  "shortname": "共速达",
  "tel": "400-111-0005",
  "url": "gongsuda",
  "code": "gongsuda",
  "hasvali": 0,
  "comurl": "http://www.gongsuda.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "0005644",
  "freg": "",
  "freginfo": "共速达的单号一般由755开头的11位纯数字组成",
  "telcomplaintnum": "",
  "queryurl": "http://www.gongsuda.com",
  "serversite": "http://www.gongsuda.com/search.aspx"
}, {
  "cid": "65",
  "id": "259431",
  "companyname": "嘉里大通",
  "shortname": "嘉里大通",
  "tel": "400-610-3188",
  "url": "jialidatong",
  "code": "jialidatong",
  "hasvali": 0,
  "comurl": "http://www.kerryeas.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "316A376284420",
  "freg": "^(316)[A-Za-z][0-9]{9}$",
  "freginfo": "嘉里大通的单号一般由13位字母和数字组成",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "192",
  "id": "259443",
  "companyname": "OCS",
  "shortname": "OCS",
  "tel": "400-118-8588",
  "url": "ocs",
  "code": "ocs",
  "hasvali": 0,
  "comurl": "http://www.ocschina.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "23012566894",
  "freg": "",
  "freginfo": "OCS国际快递的单号一般由11位纯数字组成",
  "telcomplaintnum": "",
  "queryurl": "http://www.ocschina.com",
  "serversite": "http://www.ocschina.com/office/OfficeMap.aspx"
}, {
  "cid": "193",
  "id": "259455",
  "companyname": "USPS",
  "shortname": "USPS",
  "tel": "800-275-8777",
  "url": "usps",
  "code": "usps",
  "hasvali": 0,
  "comurl": "https://zh.usps.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "LC781413573US",
  "freg": "",
  "freginfo": "USPS单号的记录超过一个月会自动清除",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "194",
  "id": "259467",
  "companyname": "美国快递",
  "shortname": "美国",
  "tel": "888-611-1888",
  "url": "meiguokuaidi",
  "code": "meiguokuaidi",
  "hasvali": 0,
  "comurl": "http://www.us-ex.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "US101257404EX",
  "freg": "",
  "freginfo": "美国快递的单号一般由DD开头US结尾，中间9位数字",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": "http://www.us-ex.com/ListViewEdit.aspx?ID=65"
}, {
  "cid": "73",
  "id": "259480",
  "companyname": "成都立即送",
  "shortname": "立即送",
  "tel": "400-028-5666",
  "url": "lijisong",
  "code": "lijisong",
  "hasvali": 0,
  "comurl": "http://www.cdljs.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "955730086248",
  "freg": "",
  "freginfo": "立即送的单号由纯数字组成",
  "telcomplaintnum": "400-028-5666",
  "queryurl": "http://www.cdljs.com",
  "serversite": "http://www.cdljs.com/a/yewuyufuwu/yewujieshao/2011/1011/8.html"
}, {
  "cid": "74",
  "id": "259492",
  "companyname": "银捷速递",
  "shortname": "银捷",
  "tel": "0755-88999000",
  "url": "yinjiesudi",
  "code": "yinjiesudi",
  "hasvali": 0,
  "comurl": "www.sjfd-express.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "D150105369641",
  "freg": "",
  "freginfo": "银捷速递的单号一般由9-12位的数字组成，亚马逊的单号以a开头",
  "telcomplaintnum": "",
  "queryurl": "www.sjfd-express.com",
  "serversite": "www.sjfd-express.com"
}, {
  "cid": "72",
  "id": "259504",
  "companyname": "门对门",
  "shortname": "门对门",
  "tel": "400-700-7676",
  "url": "menduimen",
  "code": "menduimen",
  "hasvali": 0,
  "comurl": "http://www.szdod.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "15111673026622",
  "freg": "",
  "freginfo": "门对门是为各B2C配送的落地配，单号是各B2C的订单号",
  "telcomplaintnum": "0512-50169999 ",
  "queryurl": "http://www.szdod.com",
  "serversite": ""
}, {
  "cid": "75",
  "id": "267490",
  "companyname": "递四方",
  "shortname": "递四方",
  "tel": "0755-33933895",
  "url": "disifang",
  "code": "disifang",
  "hasvali": 0,
  "comurl": "http://www.4px.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RF171700114SG",
  "freg": "",
  "freginfo": "递四方的单号一般由前后各2位字母，中间9位数字组成",
  "telcomplaintnum": "",
  "queryurl": "http://www.4px.com",
  "serversite": ""
}, {
  "cid": "76",
  "id": "301203",
  "companyname": "郑州建华",
  "shortname": "郑州建华",
  "tel": "0371-65995266",
  "url": "zhengzhoujianhua",
  "code": "zhengzhoujianhua",
  "hasvali": 0,
  "comurl": "http://www.zzjhtd.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "85203804226",
  "freg": "",
  "freginfo": "郑州建华的单号由字母和数字组成",
  "telcomplaintnum": "0371-65995266/86115588 ",
  "queryurl": "http://www.zzjhtd.com/",
  "serversite": ""
}, {
  "cid": "195",
  "id": "301226",
  "companyname": "河北建华",
  "shortname": "河北建华",
  "tel": "0311-86123186",
  "url": "hebeijianhua",
  "code": "hebeijianhua",
  "hasvali": 0,
  "comurl": "http://116.255.133.172/hebeiwebsite/index.jsp",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "112000000000000000",
  "freg": "",
  "freginfo": "河北建华的单号由字母和数字组成",
  "telcomplaintnum": "0311-85886302",
  "queryurl": "http://116.255.133.172/hebeiwebsite/index.jsp",
  "serversite": ""
}, {
  "cid": "77",
  "id": "301240",
  "companyname": "微特派",
  "shortname": "微特派",
  "tel": "400-6363-000",
  "url": "weitepai",
  "code": "weitepai",
  "hasvali": 0,
  "comurl": "http://www.vtepai.com/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "D661011185417",
  "freg": "",
  "freginfo": "微特派单号一般由数字组成",
  "telcomplaintnum": "400-6363-000",
  "queryurl": "http://www.vtepai.com/ ",
  "serversite": ""
}, {
  "cid": "218",
  "id": "312934",
  "companyname": "DHL-德国件（DHL Deutschland）",
  "shortname": "dhlde",
  "tel": "+49 (0) 180 5 345300-1*",
  "url": "dhlde",
  "code": "dhlde",
  "hasvali": 0,
  "comurl": "http://www.dhl.de/en.html",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "220514910032",
  "freg": "",
  "freginfo": "DHL-德国快递单号一般有12位数字组成",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "219",
  "id": "324832",
  "companyname": "通和天下",
  "shortname": "通和天下",
  "tel": "400-0056-516 ",
  "url": "tonghetianxia",
  "code": "tonghetianxia",
  "hasvali": 0,
  "comurl": "http://www.cod56.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "2005761424",
  "freg": "",
  "freginfo": "通和天下的单号一般由200开头的10位数字组成",
  "telcomplaintnum": "400-0056-516 ",
  "queryurl": "http://www.cod56.com",
  "serversite": "http://www.cod56.com/about.asp?id=4"
}, {
  "cid": "189",
  "id": "335028",
  "companyname": "EMS-国际件",
  "shortname": "EMS-国际件",
  "tel": "11183",
  "url": "emsguoji",
  "code": "emsguoji",
  "hasvali": 0,
  "comurl": "http://www.ems.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "BE146871721NL",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "11183",
  "queryurl": "http://www.ems.com.cn/mailtracking/cha_xun_lian_jie.html ",
  "serversite": ""
}, {
  "cid": "190",
  "id": "335045",
  "companyname": "FedEx-美国件",
  "shortname": "FedEx",
  "tel": "800-463-3339",
  "url": "fedexus",
  "code": "fedexus",
  "hasvali": 0,
  "comurl": "http://www.fedex.com/us/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "774905848791",
  "freg": "",
  "freginfo": "fedex美国的单号一般由纯数字组成",
  "telcomplaintnum": "800-463-3339",
  "queryurl": "http://www.fedex.com/us/",
  "serversite": "http://www.fedex.com/us/"
}, {
  "cid": "78",
  "id": "388549",
  "companyname": "风行天下",
  "shortname": "风行天下",
  "tel": "4000-404-909",
  "url": "fengxingtianxia",
  "code": "fengxingtianxia",
  "hasvali": 0,
  "comurl": "http://www.fxtxsy.com",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "4009055134217",
  "freg": "",
  "freginfo": "风行天下的单号一般由纯数字组成",
  "telcomplaintnum": "13975182167",
  "queryurl": "http://www.fxtxsy.com",
  "serversite": ""
}, {
  "cid": "179",
  "id": "438742",
  "companyname": "康力物流",
  "shortname": "康力",
  "tel": "400-156-5156 ",
  "url": "kangliwuliu",
  "code": "kangliwuliu",
  "hasvali": 0,
  "comurl": "http://www.kangliex.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "1001535569",
  "freg": "",
  "freginfo": "康力物流的单号一般由10位纯数字组成",
  "telcomplaintnum": "400-156-5156 ",
  "queryurl": "http://www.kangliex.com/",
  "serversite": ""
}, {
  "cid": "119",
  "id": "469148",
  "companyname": "跨越速运",
  "shortname": "跨越",
  "tel": "4008-098-098 ",
  "url": "kuayue",
  "code": "kuayue",
  "hasvali": 0,
  "comurl": "http://www.ky-express.com/",
  "isavailable": "0",
  "promptinfo": "跨越速运的单号一般有7位纯数字组成",
  "testnu": "4624159",
  "freg": "",
  "freginfo": "跨越速运的单号一般由7位数字组成",
  "telcomplaintnum": "4008-098-098 ",
  "queryurl": "http://www.ky-express.com/",
  "serversite": "http://www.ky-express.com/Chanpin/Default.aspx?article=fuwuwangluo"
}, {
  "cid": "79",
  "id": "498609",
  "companyname": "海盟速递",
  "shortname": "海盟",
  "tel": "400-080-6369 ",
  "url": "haimengsudi",
  "code": "haimengsudi",
  "hasvali": 0,
  "comurl": "http://www.hm-express.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "617098",
  "freg": "",
  "freginfo": "海盟速递的单号一般由10位纯数字组成",
  "telcomplaintnum": "400-080-6369 ",
  "queryurl": "http://www.hm-express.com",
  "serversite": ""
}, {
  "cid": "22",
  "id": "508502",
  "companyname": "圣安物流",
  "shortname": "圣安",
  "tel": "4006-618-169 ",
  "url": "shenganwuliu",
  "code": "shenganwuliu",
  "hasvali": 0,
  "comurl": "http://www.sa56.net",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "8614965",
  "freg": "",
  "freginfo": "圣安物流的单号一般由7开头的7位纯数字组成",
  "telcomplaintnum": "4006-618-169",
  "queryurl": "http://www.sa56.net",
  "serversite": ""
}, {
  "cid": "196",
  "id": "508516",
  "companyname": "一统飞鸿",
  "shortname": "一统飞鸿",
  "tel": "61501533-608",
  "url": "yitongfeihong",
  "code": "yitongfeihong",
  "hasvali": 0,
  "comurl": "http://218.97.241.58:8080/yitongfeihongweb/common?action=toindex",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "214241290",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "61501028-608",
  "queryurl": "http://218.97.241.58:8080/yitongfeihongweb/common?action=toi",
  "serversite": "http://218.97.241.58:8080/yitongfeihongweb/servicesaddress.jsp"
}, {
  "cid": "309",
  "id": "620367",
  "companyname": "中速快递",
  "shortname": "中速",
  "tel": "11183",
  "url": "zhongsukuaidi",
  "code": "zhongsukuaidi",
  "hasvali": 0,
  "comurl": "http://www.ems.com.cn/mainservice/ems/zhong_su_guo_ji_kuai_jian.html",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CT246590834CN",
  "freg": "",
  "freginfo": "中速快件的单号一般由CT开头CN结尾中间9位数字",
  "telcomplaintnum": "11183",
  "queryurl": "http://www.ems.com.cn/mainservice/ems/zhong_su_guo_ji_kuai_jian.html",
  "serversite": ""
}, {
  "cid": "110",
  "id": "662539",
  "companyname": "新蛋奥硕",
  "shortname": "新蛋奥硕",
  "tel": "400-820-4400",
  "url": "neweggozzo",
  "code": "neweggozzo",
  "hasvali": 0,
  "comurl": "http://www.ozzo.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "20643707",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-820-4400",
  "queryurl": "http://www.ozzo.com.cn",
  "serversite": ""
}, {
  "cid": "111",
  "id": "662553",
  "companyname": "OnTrac",
  "shortname": "OnTrac",
  "tel": "800-334-5000",
  "url": "ontrac",
  "code": "ontrac",
  "hasvali": 0,
  "comurl": "http://www.ontrac.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "D10010826799699",
  "freg": "",
  "freginfo": "OnTrac单号一般由字母和数字组成",
  "telcomplaintnum": "800-334-5000",
  "queryurl": "http://www.ontrac.com",
  "serversite": ""
}, {
  "cid": "80",
  "id": "662566",
  "companyname": "七天连锁",
  "shortname": "七天连锁",
  "tel": "400-882-1202",
  "url": "sevendays",
  "code": "sevendays",
  "hasvali": 0,
  "comurl": "http://www.92856.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "6811088969",
  "freg": "",
  "freginfo": "七天连锁物流单号一般由纯数字组成",
  "telcomplaintnum": "400-882-1202",
  "queryurl": "http://www.92856.cn",
  "serversite": "http://www.92856.cn/page/chin/index.php"
}, {
  "cid": "112",
  "id": "662579",
  "companyname": "明亮物流",
  "shortname": "明亮",
  "tel": "400-035-6568",
  "url": "mingliangwuliu",
  "code": "mingliangwuliu",
  "hasvali": 0,
  "comurl": "http://www.szml56.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "80238530",
  "freg": "",
  "freginfo": "明亮物流的单号由纯数字组成",
  "telcomplaintnum": "13632909217",
  "queryurl": "http://www.szml56.com/",
  "serversite": "http://www.szml56.com/index.php/Map/index/id/205"
}, {
  "cid": "153",
  "id": "668571",
  "companyname": "凡客配送（作废）",
  "shortname": "凡客",
  "tel": "400-600-6888",
  "url": "vancl",
  "code": "vancl",
  "hasvali": 0,
  "comurl": "http://www.vancl.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "786500075083",
  "freg": "",
  "freginfo": "凡客的订单一般有字母和数字组成",
  "telcomplaintnum": "400-600-6888",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "187",
  "id": "683545",
  "companyname": "华企快运",
  "shortname": "华企",
  "tel": "400-806-8111",
  "url": "huaqikuaiyun",
  "code": "huaqikuaiyun",
  "hasvali": 0,
  "comurl": "13055209678",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "201000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "021-54224687",
  "queryurl": "13055209678",
  "serversite": ""
}, {
  "cid": "81",
  "id": "683546",
  "companyname": "城市100",
  "shortname": "城市100",
  "tel": "400-820-0088",
  "url": "city100",
  "code": "city100",
  "hasvali": 0,
  "comurl": "http://www.bjcs100.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "755730420202",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "010-52932770",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "305",
  "id": "683550",
  "companyname": "红马甲物流",
  "shortname": "红马甲",
  "tel": "0351-5225858",
  "url": "sxhongmajia",
  "code": "sxhongmajia",
  "hasvali": 0,
  "comurl": "http://www.hmj.com.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "33133243933",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0351- 5225858",
  "queryurl": "http://www.hmj.com.cn/",
  "serversite": "http://www.hmj.com.cn/SinglePage.aspx?typeid=15=43"
}, {
  "cid": "306",
  "id": "683551",
  "companyname": "穗佳物流",
  "shortname": "穗佳",
  "tel": "400-880-9771",
  "url": "suijiawuliu",
  "code": "suijiawuliu",
  "hasvali": 0,
  "comurl": "http://www.suijiawl.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "0026060",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "13925121894",
  "queryurl": "http://www.suijiawl.com",
  "serversite": "http://www.suijiawl.com/sj/index.asp"
}, {
  "cid": "82",
  "id": "683552",
  "companyname": "飞豹快递",
  "shortname": "飞豹",
  "tel": "400-000-5566",
  "url": "feibaokuaidi",
  "code": "feibaokuaidi",
  "hasvali": null,
  "comurl": "http://www.ztky.com/feibao/KJCX.aspx",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "6013506052",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-000-5566",
  "queryurl": "http://www.ztky.com/feibao/KJCX.aspx",
  "serversite": "http://www.ztky.com/feibao/FUWL.aspx"
}, {
  "cid": "83",
  "id": "683554",
  "companyname": "传喜物流",
  "shortname": "传喜",
  "tel": "400-777-5656 ",
  "url": "chuanxiwuliu",
  "code": "chuanxiwuliu",
  "hasvali": 0,
  "comurl": "http://www.cxcod.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "7000000151489",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-777-5656 ",
  "queryurl": "http://www.cxcod.com/",
  "serversite": "http://www.cxcod.com/Detail.aspx?typeid=3"
}, {
  "cid": "84",
  "id": "683555",
  "companyname": "捷特快递",
  "shortname": "捷特",
  "tel": "400-820-8585",
  "url": "jietekuaidi",
  "code": "jietekuaidi",
  "hasvali": 0,
  "comurl": "http://www.jet185.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "1114677325",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-820-8585",
  "queryurl": "http://www.jet185.com/",
  "serversite": "http://www.jet185.com/network/"
}, {
  "cid": "307",
  "id": "683557",
  "companyname": "隆浪快递",
  "shortname": "隆浪",
  "tel": "021-31171576 61552015",
  "url": "longlangkuaidi",
  "code": "longlangkuaidi",
  "hasvali": 0,
  "comurl": "http://www.56l6.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "201000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "021-31257319 31257329 ",
  "queryurl": "http://www.56l6.com/",
  "serversite": "http://www.56L6.com/zdfb.html"
}, {
  "cid": "262",
  "id": "700054",
  "companyname": "EMS-英文",
  "shortname": "EMS-英文",
  "tel": "11183",
  "url": "emsen",
  "code": "emsen",
  "hasvali": 0,
  "comurl": "http://www.ems.com.cn/english.html",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "EA041608864CN",
  "freg": "",
  "freginfo": "EMS单号开头和结尾2位是字母，中间是9位数字",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "85",
  "id": "717946",
  "companyname": "中天万运",
  "shortname": "中天万运",
  "tel": "400-0056-001",
  "url": "zhongtianwanyun",
  "code": "zhongtianwanyun",
  "hasvali": 0,
  "comurl": "http://www.ztwy56.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "1111567923",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0531-68850629",
  "queryurl": "http://www.ztwy56.cn/",
  "serversite": ""
}, {
  "cid": "86",
  "id": "789941",
  "companyname": "香港(HongKong Post)",
  "shortname": "香港邮政",
  "tel": "(852) 2921 2222",
  "url": "hkpost",
  "code": "hkpost",
  "hasvali": 0,
  "comurl": "http://www.hongkongpost.hk",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RC910320193HK",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "(852) 2921 2222",
  "queryurl": "http://www.hongkongpost.hk/sim/index.htm",
  "serversite": "http://sc.hongkongpost.com/gb/www.hongkongpost.com/chi/locations/index.htm"
}, {
  "cid": "283",
  "id": "789942",
  "companyname": "邦送物流",
  "shortname": "邦送",
  "tel": "021-20965696",
  "url": "bangsongwuliu",
  "code": "bangsongwuliu",
  "hasvali": 0,
  "comurl": "http://express.banggo.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "600000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "021-20965696-823/824",
  "queryurl": "http://express.banggo.com",
  "serversite": "http://express.banggo.com/default/sc/url/parentid/1/id/16"
}, {
  "cid": "20",
  "id": "850277",
  "companyname": "国通快递",
  "shortname": "国通",
  "tel": "400-111-1123",
  "url": "guotongkuaidi",
  "code": "guotongkuaidi",
  "hasvali": 0,
  "comurl": "http://www.gto365.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "3117727152",
  "freg": "",
  "freginfo": "国通快递单号一般由10位纯数字组成",
  "telcomplaintnum": "400-111-1123",
  "queryurl": "http://www.gto365.com/Service/wdcc/",
  "serversite": "http://www.gto365.com/Service/wdcc/"
}, {
  "cid": "87",
  "id": "850323",
  "companyname": "澳大利亚(Australia Post)",
  "shortname": "auspost",
  "tel": "0061-3-88479045",
  "url": "auspost",
  "code": "auspost",
  "hasvali": 0,
  "comurl": "http://auspost.com.au",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "00093187642222033109",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+61 388479045",
  "queryurl": "http://auspost.com.au/index.html",
  "serversite": ""
}, {
  "cid": "113",
  "id": "850347",
  "companyname": "加拿大(Canada Post)",
  "shortname": "加拿大邮政",
  "tel": "416-979-8822",
  "url": "canpost",
  "code": "canpost",
  "hasvali": 0,
  "comurl": "http://www.canadapost.ca",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CP259658985CN",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "416-979-8822",
  "queryurl": "http://www.canadapost.ca",
  "serversite": ""
}, {
  "cid": "114",
  "id": "850350",
  "companyname": "加拿大邮政",
  "shortname": "加拿大邮政",
  "tel": "",
  "url": "canpostfr",
  "code": "canpostfr",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "305000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "115",
  "id": "850380",
  "companyname": "UPS-全球件",
  "shortname": "UPS-全球件",
  "tel": "1-800-742-5877 ",
  "url": "upsen",
  "code": "upsen",
  "hasvali": 0,
  "comurl": "http://www.ups.com/",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "1Z1EY7950316807120",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "116",
  "id": "850390",
  "companyname": "TNT-全球件",
  "shortname": "TNT-全球件",
  "tel": "",
  "url": "tnten",
  "code": "tnten",
  "hasvali": 0,
  "comurl": "http://www.tnt.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "GD611170792WW",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "117",
  "id": "850399",
  "companyname": "DHL-全球件",
  "shortname": "DHL",
  "tel": "",
  "url": "dhlen",
  "code": "dhlen",
  "hasvali": 0,
  "comurl": "http://www.dhl.com/en.html",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "1119658676",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "118",
  "id": "850413",
  "companyname": "顺丰-美国件",
  "shortname": "顺丰-美国件",
  "tel": "1-855-901-1133",
  "url": "shunfengen",
  "code": "shunfengen",
  "hasvali": 0,
  "comurl": "http://www.sf-express.com/us/en/",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "595000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "1-855-901-1133",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "341",
  "id": "1022916",
  "companyname": "汇强快递",
  "shortname": "汇强",
  "tel": "",
  "url": "huiqiangkuaidi",
  "code": "huiqiangkuaidi",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "1",
  "promptinfo": "该公司已失效",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "161",
  "id": "1022917",
  "companyname": "希优特",
  "shortname": "希优特",
  "tel": "4008400365",
  "url": "xiyoutekuaidi",
  "code": "xiyoutekuaidi",
  "hasvali": 0,
  "comurl": "http://www.cod365.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "60000248046",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "4008400365",
  "queryurl": "http://www.cod365.com/",
  "serversite": "http://www.cod365.com/network.asp"
}, {
  "cid": "162",
  "id": "1022918",
  "companyname": "昊盛物流",
  "shortname": "昊盛",
  "tel": "400-186-5566",
  "url": "haosheng",
  "code": "haoshengwuliu",
  "hasvali": 0,
  "comurl": "http://www.hs-express.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "5566512325",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-186-5566",
  "queryurl": "http://www.hs-express.cn/",
  "serversite": "http://www.hs-express.cn/Cpfw.aspx"
}, {
  "cid": "107",
  "id": "1054763",
  "companyname": "尚橙物流",
  "shortname": "尚橙",
  "tel": "400-890-0101",
  "url": "shangcheng",
  "code": "shangcheng",
  "hasvali": 0,
  "comurl": "http://www.suncharms.net/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-890-0101",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "317",
  "id": "1084996",
  "companyname": "亿领速运",
  "shortname": "亿领",
  "tel": "400-1056-400",
  "url": "yilingsuyun",
  "code": "yilingsuyun",
  "hasvali": 0,
  "comurl": "http://www.yelee.com.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "180000076495",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-611-1892",
  "queryurl": "http://www.yelee.com.cn/",
  "serversite": ""
}, {
  "cid": "237",
  "id": "1095717",
  "companyname": "大洋物流",
  "shortname": "大洋",
  "tel": "400-820-0088",
  "url": "dayangwuliu",
  "code": "dayangwuliu",
  "hasvali": 0,
  "comurl": "http://www.dayang365.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "YG00003563523",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-820-0088",
  "queryurl": "http://www.dayang365.cn/",
  "serversite": ""
}, {
  "cid": "238",
  "id": "1095719",
  "companyname": "递达速运",
  "shortname": "递达",
  "tel": "400-687-8123",
  "url": "didasuyun",
  "code": "didasuyun",
  "hasvali": 0,
  "comurl": "http://www.dida.hk/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "79101141200",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-687-8123",
  "queryurl": "http://www.dida.hk/",
  "serversite": ""
}, {
  "cid": "239",
  "id": "1095721",
  "companyname": "易通达",
  "shortname": "易通达",
  "tel": "0898-65339299",
  "url": "yitongda",
  "code": "yitongda",
  "hasvali": 0,
  "comurl": "http://www.etd365.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "JX13700857",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0898-65339299",
  "queryurl": "http://www.etd365.com/",
  "serversite": ""
}, {
  "cid": "240",
  "id": "1095722",
  "companyname": "邮必佳",
  "shortname": "邮必佳",
  "tel": "400-687-8123",
  "url": "youbijia",
  "code": "youbijia",
  "hasvali": 0,
  "comurl": "http://www.ubjia.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "2049139919H001",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-687-8123",
  "queryurl": "http://www.ubjia.com/",
  "serversite": "http://www.ubjia.com/markets.asp"
}, {
  "cid": "90",
  "id": "1122166",
  "companyname": "亿顺航",
  "shortname": "亿顺航",
  "tel": "4006-018-268 ",
  "url": "yishunhang",
  "code": "yishunhang",
  "hasvali": 0,
  "comurl": "http://www.igoex.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "6990771336",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "4006-018-268 ",
  "queryurl": "http://www.igoex.com/",
  "serversite": ""
}, {
  "cid": "311",
  "id": "1142068",
  "companyname": "飞狐快递",
  "shortname": "飞狐",
  "tel": "010-51389299",
  "url": "feihukuaidi",
  "code": "feihukuaidi",
  "hasvali": 0,
  "comurl": "http://www.feihukuaidi.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "B140426285147",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "18701033953",
  "queryurl": "http://www.feihukuaidi.com/",
  "serversite": "http://www.feihukuaidi.com/products3.aspx"
}, {
  "cid": "312",
  "id": "1142069",
  "companyname": "潇湘晨报",
  "shortname": "潇湘晨报",
  "tel": "",
  "url": "xiaoxiangchenbao",
  "code": "xiaoxiangchenbao",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "1500000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "313",
  "id": "1142070",
  "companyname": "巴伦支",
  "shortname": "巴伦支",
  "tel": "400-885-6561",
  "url": "balunzhi",
  "code": "balunzhi",
  "hasvali": 0,
  "comurl": "http://cnbd.hendari.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "023001808697",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-885-6561",
  "queryurl": "http://cnbd.hendari.com/",
  "serversite": "http://cnbd.hendari.com/Service.aspx"
}, {
  "cid": "102",
  "id": "1142102",
  "companyname": "Aramex",
  "shortname": "Aramex",
  "tel": "4006318388",
  "url": "aramex",
  "code": "aramex",
  "hasvali": 0,
  "comurl": "http://www.aramex.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "7055636766",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "010-80418634",
  "queryurl": "http://www.aramex.com/",
  "serversite": ""
}, {
  "cid": "263",
  "id": "1173069",
  "companyname": "闽盛快递",
  "shortname": "闽盛",
  "tel": "0592-3725988",
  "url": "minshengkuaidi",
  "code": "minshengkuaidi",
  "hasvali": 0,
  "comurl": "http://www.xmms-express.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "800056276",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0592-3705986",
  "queryurl": "http://www.xmms-express.com/",
  "serversite": ""
}, {
  "cid": "264",
  "id": "1173070",
  "companyname": "佳惠尔",
  "shortname": "佳惠尔",
  "tel": "024-23904138",
  "url": "syjiahuier",
  "code": "syjiahuier",
  "hasvali": 0,
  "comurl": "http://www.jhekd.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "GES8000949441",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "13304020538",
  "queryurl": "http://www.jhekd.com/",
  "serversite": "http://www.jhekd.com/wdcx.asp"
}, {
  "cid": "265",
  "id": "1173071",
  "companyname": "民邦速递",
  "shortname": "民邦",
  "tel": "0769-81515303",
  "url": "minbangsudi",
  "code": "minbangsudi",
  "hasvali": 0,
  "comurl": "http://www.mbex168.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "278144634",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0769-81515303",
  "queryurl": "http://www.mbex168.com/",
  "serversite": "http://www.mbex168.com/site_search.jsp"
}, {
  "cid": "122",
  "id": "1173201",
  "companyname": "上海快通",
  "shortname": "上海快通",
  "tel": "",
  "url": "shanghaikuaitong",
  "code": "shanghaikuaitong",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "154",
  "id": "1322989",
  "companyname": "北青小红帽",
  "shortname": "北青小红帽",
  "tel": "010-67756666",
  "url": "xiaohongmao",
  "code": "xiaohongmao",
  "hasvali": 0,
  "comurl": "http://www.kuaidi100.com/all/xiaohongmao.shtml",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "XHM0269135",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "010-67756666",
  "queryurl": "http://www.kuaidi100.com/all/xiaohongmao.shtml",
  "serversite": ""
}, {
  "cid": "155",
  "id": "1322991",
  "companyname": "GSM",
  "shortname": "GSM",
  "tel": "021-64656011 ",
  "url": "gsm",
  "code": "gsm",
  "hasvali": 0,
  "comurl": "http://www.gsmnton.com ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "G1000039009",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "314",
  "id": "1364626",
  "companyname": "安能物流",
  "shortname": "安能",
  "tel": "400-104-0088",
  "url": "annengwuliu",
  "code": "annengwuliu",
  "hasvali": 0,
  "comurl": "http://www.ane56.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "300102851832",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-104-0088",
  "queryurl": "",
  "serversite": "http://www.ane56.com/search/searchsite.jsp"
}, {
  "cid": "266",
  "id": "1365062",
  "companyname": "KCS",
  "shortname": "KCS",
  "tel": "800-858-5590",
  "url": "kcs",
  "code": "kcs",
  "hasvali": 0,
  "comurl": "http://www.kcs56.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "2009573414",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "800-858-5590",
  "queryurl": "http://www.kcs56.com",
  "serversite": ""
}, {
  "cid": "315",
  "id": "1384981",
  "companyname": "City-Link",
  "shortname": "City-Link",
  "tel": "603-5565 8399",
  "url": "citylink",
  "code": "citylink",
  "hasvali": 0,
  "comurl": "http://www.citylinkexpress.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "156000400107086",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "603-5565 8399",
  "queryurl": "http://www.citylinkexpress.com/",
  "serversite": ""
}, {
  "cid": "334",
  "id": "1397942",
  "companyname": "店通快递",
  "shortname": "店通",
  "tel": "021-20917385 66282857",
  "url": "diantongkuaidi",
  "code": "diantongkuaidi",
  "hasvali": 0,
  "comurl": "http://www.shdtkd.com.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "210000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "021-20917385 66282857",
  "queryurl": "http://www.shdtkd.com.cn/",
  "serversite": "http://www.shdtkd.com.cn/cgi-bin/GInfo.dll?Dispkind=shdtkd=%CD%F8%B5%E3%B2%E9%D1%AF"
}, {
  "cid": "160",
  "id": "1455156",
  "companyname": "凡宇快递",
  "shortname": "凡宇",
  "tel": "4006-580-358 ",
  "url": "fanyukuaidi",
  "code": "fanyukuaidi",
  "hasvali": 0,
  "comurl": "http://www.fanyu56.com.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "198200177507",
  "freg": "",
  "freginfo": "凡宇快递单号一般由数字组成，部分是转运单号",
  "telcomplaintnum": "4006-580-358",
  "queryurl": "http://www.fanyu56.com.cn/",
  "serversite": ""
}, {
  "cid": "303",
  "id": "1506202",
  "companyname": "平安达腾飞",
  "shortname": "平安达腾飞",
  "tel": "4006-230-009",
  "url": "pingandatengfei",
  "code": "pingandatengfei",
  "hasvali": 0,
  "comurl": "http://www.padtf.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "3560002639",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "4006-230-009",
  "queryurl": "http://www.padtf.com/",
  "serversite": "http://www.padtf.com/Product.asp"
}, {
  "cid": "207",
  "id": "1506273",
  "companyname": "广东通路",
  "shortname": "广东通路",
  "tel": "",
  "url": "guangdongtonglu",
  "code": "guangdongtonglu",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "15032863355819",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "94",
  "id": "1561155",
  "companyname": "中睿速递",
  "shortname": "中睿",
  "tel": "400-0375-888",
  "url": "zhongruisudi",
  "code": "zhongruisudi",
  "hasvali": 0,
  "comurl": "http://www.zorel.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "666581757",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0371-56667177",
  "queryurl": "http://www.zorel.cn/",
  "serversite": "http://www.zorel.cn/Network.aspx"
}, {
  "cid": "310",
  "id": "1609219",
  "companyname": "快达物流",
  "shortname": "快达",
  "tel": "",
  "url": "kuaidawuliu",
  "code": "kuaidawuliu",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "26",
  "id": "1609220",
  "companyname": "佳吉快递",
  "shortname": "佳吉",
  "tel": "400-820-5566",
  "url": "jiajikuaidi",
  "code": "jiajikuaidi",
  "hasvali": 0,
  "comurl": "http://www.jiaji.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "729485513",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-820-5566",
  "queryurl": "http://www.jiaji.com/",
  "serversite": "http://www.kuaidi100.com/network/province_15.htm"
}, {
  "cid": "267",
  "id": "1721505",
  "companyname": "ADP国际快递",
  "shortname": "ADP",
  "tel": "1588-1330",
  "url": "adp",
  "code": "adp",
  "hasvali": 0,
  "comurl": "http://www.adpair.co.kr/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "3123651",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "1588-1330",
  "queryurl": "http://www.adpair.co.kr/",
  "serversite": ""
}, {
  "cid": "268",
  "id": "1721506",
  "companyname": "颿达国际快递",
  "shortname": "颿达",
  "tel": "0755-27332618",
  "url": "fardarww",
  "code": "fardarww",
  "hasvali": 0,
  "comurl": "http://www.fardar.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "8802855250",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0755-27332618",
  "queryurl": "http://www.fardar.com/",
  "serversite": ""
}, {
  "cid": "269",
  "id": "1721507",
  "companyname": "颿达国际快递-英文",
  "shortname": "颿达国际",
  "tel": "0755-27332618",
  "url": "fandaguoji",
  "code": "fandaguoji",
  "hasvali": 0,
  "comurl": "http://www.fardar.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "5089554400",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0755-27332618",
  "queryurl": "http://www.fardar.com/",
  "serversite": ""
}, {
  "cid": "270",
  "id": "1721508",
  "companyname": "林道国际快递",
  "shortname": "林道",
  "tel": "4008-200-112",
  "url": "shlindao",
  "code": "shlindao",
  "hasvali": 0,
  "comurl": "http://www.ldxpress.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "345595743625",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "4008-200-112",
  "queryurl": "http://www.ldxpress.com/",
  "serversite": ""
}, {
  "cid": "271",
  "id": "1721509",
  "companyname": "中外运速递-中文",
  "shortname": "中外运",
  "tel": "010-8041 8611",
  "url": "sinoex",
  "code": "sinoex",
  "hasvali": 0,
  "comurl": "http://www.sinoex.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "34013907141",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "010-8041 8611",
  "queryurl": "http://www.sinoex.com.cn/index.aspx",
  "serversite": ""
}, {
  "cid": "272",
  "id": "1721510",
  "companyname": "中外运速递",
  "shortname": "中外运速递",
  "tel": "010-8041 8611",
  "url": "zhongwaiyun",
  "code": "zhongwaiyun",
  "hasvali": 0,
  "comurl": "http://www.sinoex.com.cn/index.aspx",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "3970761535",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "010-8041 8611",
  "queryurl": "http://www.sinoex.com.cn/index.aspx",
  "serversite": ""
}, {
  "cid": "273",
  "id": "1721511",
  "companyname": "深圳德创物流",
  "shortname": "深圳德创",
  "tel": "4006-989-833",
  "url": "dechuangwuliu",
  "code": "dechuangwuliu",
  "hasvali": 0,
  "comurl": "http://www.dc56.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "0512098",
  "freg": "",
  "freginfo": "单号一般由8位数字组成",
  "telcomplaintnum": "4006-989-833",
  "queryurl": "http://www.dc56.cn/",
  "serversite": "http://www.dc58.com/?ctr=title=199"
}, {
  "cid": "274",
  "id": "1723847",
  "companyname": "林道国际快递-英文",
  "shortname": "林道国际快递-英文",
  "tel": "800-820-1470 ",
  "url": "ldxpres",
  "code": "ldxpres",
  "hasvali": 0,
  "comurl": "http://www.ldxpress.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "301000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "800-820-1470 ",
  "queryurl": "http://www.ldxpress.com/",
  "serversite": ""
}, {
  "cid": "132",
  "id": "1781833",
  "companyname": "瑞典（Sweden Post）",
  "shortname": "瑞典邮政",
  "tel": "+46 8 23 22 20",
  "url": "ruidianyouzheng",
  "code": "ruidianyouzheng",
  "hasvali": 0,
  "comurl": "http://www.posten.se/en",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CC193037621SE",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+46 8 23 22 20",
  "queryurl": "http://www.posten.se/en",
  "serversite": ""
}, {
  "cid": "133",
  "id": "1781834",
  "companyname": "PostNord(Posten AB)",
  "shortname": "Posten AB",
  "tel": "+46 771 33 33 10",
  "url": "postenab",
  "code": "postenab",
  "hasvali": 0,
  "comurl": "http://www.posten.se/en",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RR559718149SE",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+46 771 33 33 10",
  "queryurl": "http://www.posten.se/en",
  "serversite": ""
}, {
  "cid": "134",
  "id": "1781835",
  "companyname": "偌亚奥国际快递",
  "shortname": "偌亚奥",
  "tel": "4008 871 871",
  "url": "nuoyaao",
  "code": "nuoyaao",
  "hasvali": 0,
  "comurl": "http://www.royaleinternational.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "860000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "4008 871 871",
  "queryurl": "http://www.royaleinternational.com/",
  "serversite": ""
}, {
  "cid": "135",
  "id": "1781836",
  "companyname": "城际速递",
  "shortname": "城际",
  "tel": "4000-523-525 ",
  "url": "chengjisudi",
  "code": "chengjisudi",
  "hasvali": 0,
  "comurl": "http://chengji-express.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "010002108494",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "4000-523-525",
  "queryurl": "http://chengji-express.com",
  "serversite": ""
}, {
  "cid": "123",
  "id": "1797966",
  "companyname": "祥龙运通物流",
  "shortname": "祥龙运通",
  "tel": "4008-908-908",
  "url": "xianglongyuntong",
  "code": "xianglongyuntong",
  "hasvali": 0,
  "comurl": "http://www.ldl.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "68007554",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "4008-908-908",
  "queryurl": "http://www.ldl.com.cn",
  "serversite": ""
}, {
  "cid": "124",
  "id": "1797970",
  "companyname": "品速心达快递",
  "shortname": "品速心达",
  "tel": "400-800-3693 ",
  "url": "pinsuxinda",
  "code": "pinsuxinda",
  "hasvali": 0,
  "comurl": "http://www.psxd88.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "PS886605213",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-800-3693",
  "queryurl": "http://www.psxd88.com/",
  "serversite": ""
}, {
  "cid": "125",
  "id": "1797971",
  "companyname": "宇鑫物流",
  "shortname": "宇鑫",
  "tel": "0371-66368798",
  "url": "yuxinwuliu",
  "code": "yuxinwuliu",
  "hasvali": 0,
  "comurl": "http://www.yx56.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "2023033091",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0371-66368798",
  "queryurl": "http://www.yx56.cn/",
  "serversite": ""
}, {
  "cid": "136",
  "id": "1868422",
  "companyname": "陪行物流",
  "shortname": "陪行物流",
  "tel": "400-993-0555",
  "url": "peixingwuliu",
  "code": "peixingwuliu",
  "hasvali": 0,
  "comurl": "http://www.peixingexpress.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "PX5940124340713ES",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0594-2321515",
  "queryurl": "http://www.peixingexpress.com",
  "serversite": ""
}, {
  "cid": "137",
  "id": "1868423",
  "companyname": "户通物流",
  "shortname": "户通物流",
  "tel": "400-060-1656",
  "url": "hutongwuliu",
  "code": "hutongwuliu",
  "hasvali": 0,
  "comurl": "http://www.cnhtwl.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "1103339",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "13026112511",
  "queryurl": "http://www.cnhtwl.com",
  "serversite": ""
}, {
  "cid": "198",
  "id": "1898132",
  "companyname": "西安城联速递",
  "shortname": "西安城联速递",
  "tel": "029-89113508",
  "url": "xianchengliansudi",
  "code": "xianchengliansudi",
  "hasvali": 0,
  "comurl": "http://www.city-link.net.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "14000000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "029-89113508",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "199",
  "id": "1898133",
  "companyname": "煜嘉物流",
  "shortname": "煜嘉物流",
  "tel": "",
  "url": "yujiawuliu",
  "code": "yujiawuliu",
  "hasvali": 0,
  "comurl": "http://www.yujia56.net/",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "8320765",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "200",
  "id": "1898134",
  "companyname": "一柒国际物流",
  "shortname": "一柒国际物流",
  "tel": "001-(971) 238-9990",
  "url": "yiqiguojiwuliu",
  "code": "yiqiguojiwuliu",
  "hasvali": 0,
  "comurl": "http://www.17htb.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "HT006613984US",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "001-(971) 238-9990",
  "queryurl": "http://www.17htb.com/",
  "serversite": ""
}, {
  "cid": "163",
  "id": "1903113",
  "companyname": "Fedex-国际件-中文",
  "shortname": "Fedex-国际件-中文",
  "tel": "400-889-1888",
  "url": "fedexcn",
  "code": "fedexcn",
  "hasvali": 0,
  "comurl": "http://www.fedex.com/cn/index.html",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "660552974937",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "164",
  "id": "1903117",
  "companyname": "联邦快递-英文",
  "shortname": "联邦",
  "tel": "400-889-1888",
  "url": "lianbangkuaidien",
  "code": "lianbangkuaidien",
  "hasvali": 0,
  "comurl": "http://cndxp.apac.fedex.com/tracking/track.html",
  "isavailable": "1",
  "promptinfo": "",
  "testnu": "120966607850",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "165",
  "id": "2082056",
  "companyname": "中通（带电话）",
  "shortname": "中通（带电话）",
  "tel": "",
  "url": "zhongtongphone",
  "code": "zhongtongphone",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "180",
  "id": "2234246",
  "companyname": "赛澳递for买卖宝",
  "shortname": "赛澳递for买卖宝",
  "tel": "",
  "url": "saiaodimmb",
  "code": "saiaodimmb",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "181",
  "id": "2234247",
  "companyname": "上海无疆for买卖宝",
  "shortname": "上海无疆for买卖宝",
  "tel": "",
  "url": "shanghaiwujiangmmb",
  "code": "shanghaiwujiangmmb",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "208",
  "id": "2284839",
  "companyname": "新加坡小包(Singapore Post)",
  "shortname": "新加坡邮政",
  "tel": "",
  "url": "singpost",
  "code": "singpost",
  "hasvali": 0,
  "comurl": "http://www.singpost.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RP412572298SG",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "209",
  "id": "2284841",
  "companyname": "音素快运",
  "shortname": "音素快运",
  "tel": "400-007-1118",
  "url": "yinsu",
  "code": "yinsu",
  "hasvali": 0,
  "comurl": "http://www.yskd168.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "YS6000277072",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-007-1118",
  "queryurl": "http://www.yskd168.com/",
  "serversite": ""
}, {
  "cid": "210",
  "id": "2284842",
  "companyname": "南方传媒物流",
  "shortname": "南方传媒物流",
  "tel": "",
  "url": "ndwl",
  "code": "ndwl",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "14000000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "211",
  "id": "2284843",
  "companyname": "速呈宅配",
  "shortname": "速呈宅配",
  "tel": "",
  "url": "sucheng",
  "code": "sucheng",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "212",
  "id": "2284844",
  "companyname": "创一快递",
  "shortname": "创一快递",
  "tel": "",
  "url": "chuangyi",
  "code": "chuangyi",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "731081233571",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "213",
  "id": "2284845",
  "companyname": "云南滇驿物流",
  "shortname": "云南滇驿物流",
  "tel": "",
  "url": "dianyi",
  "code": "dianyi",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "214",
  "id": "2284846",
  "companyname": "重庆星程快递",
  "shortname": "重庆星程快递",
  "tel": "",
  "url": "cqxingcheng",
  "code": "cqxingcheng",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "1410000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "215",
  "id": "2284847",
  "companyname": "四川星程快递",
  "shortname": "四川星程快递",
  "tel": "",
  "url": "scxingcheng",
  "code": "scxingcheng",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "1P29497203",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "216",
  "id": "2284848",
  "companyname": "贵州星程快递",
  "shortname": "贵州星程快递",
  "tel": "",
  "url": "gzxingcheng",
  "code": "gzxingcheng",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "14000000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "217",
  "id": "2284849",
  "companyname": "运通中港快递(作废)",
  "shortname": "运通中港快递",
  "tel": "",
  "url": "ytkd",
  "code": "ytkd",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "659142122",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "246",
  "id": "2285484",
  "companyname": "Gati-英文",
  "shortname": "gati官网英文通道",
  "tel": "4000-804-284",
  "url": "gatien",
  "code": "gatien",
  "hasvali": 0,
  "comurl": "http://www.gati.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "640856630",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "4000-804-284",
  "queryurl": "http://www.gati.com/",
  "serversite": ""
}, {
  "cid": "247",
  "id": "2285485",
  "companyname": "Gati-中文",
  "shortname": "gati官网中文通道",
  "tel": "4000-804-284 ",
  "url": "gaticn",
  "code": "gaticn",
  "hasvali": 0,
  "comurl": "http://www.gaticn.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "641461918",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "4000-804-284",
  "queryurl": "http://www.gaticn.com/",
  "serversite": ""
}, {
  "cid": "248",
  "id": "2285486",
  "companyname": "jcex",
  "shortname": "jcex官网通道",
  "tel": "",
  "url": "jcex",
  "code": "jcex",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "249",
  "id": "2285487",
  "companyname": "派尔快递",
  "shortname": "派尔快递官网通道",
  "tel": "",
  "url": "peex",
  "code": "peex",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "14100000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "250",
  "id": "2285488",
  "companyname": "凯信达",
  "shortname": "凯信达官网通道",
  "tel": "",
  "url": "kxda",
  "code": "kxda",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "251",
  "id": "2285489",
  "companyname": "安达信",
  "shortname": "安达信官网通道",
  "tel": "",
  "url": "kxda",
  "code": "advancing",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "15111471116357",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "252",
  "id": "2285490",
  "companyname": "汇文",
  "shortname": "汇文官网通道",
  "tel": "",
  "url": "huiwen",
  "code": "huiwen",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "2994214416549",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "253",
  "id": "2285491",
  "companyname": "亿翔",
  "shortname": "亿翔官网通道",
  "tel": "",
  "url": "yxexpress",
  "code": "yxexpress",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "755033762873",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "254",
  "id": "2285492",
  "companyname": "东红物流",
  "shortname": "东红合作通道",
  "tel": "4000-081-556",
  "url": "donghong",
  "code": "donghong",
  "hasvali": 0,
  "comurl": "http://www.donghong56.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "285310",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "4000-081-556",
  "queryurl": "http://www.donghong56.com/",
  "serversite": ""
}, {
  "cid": "255",
  "id": "2285641",
  "companyname": "飞远配送",
  "shortname": "飞远配送",
  "tel": "4007-031-313",
  "url": "feiyuanvipshop",
  "code": "feiyuanvipshop",
  "hasvali": 0,
  "comurl": "http://www.fyps.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "15042037484913",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "4007-031-313",
  "queryurl": "http://www.fyps.cn/",
  "serversite": ""
}, {
  "cid": "323",
  "id": "2327222",
  "companyname": "好运来",
  "shortname": "好运来",
  "tel": "020-86293333",
  "url": "hlyex",
  "code": "hlyex",
  "hasvali": 0,
  "comurl": "http://www.hlyex.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "2001334326",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "020-86293000 ",
  "queryurl": "http://www.hlyex.com/",
  "serversite": ""
}, {
  "cid": "156",
  "id": "2328957",
  "companyname": "Toll",
  "shortname": "Toll Global Express",
  "tel": "",
  "url": "dpexen",
  "code": "dpexen",
  "hasvali": 0,
  "comurl": "http://www.dpex.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "500013037484",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.dpex.com/",
  "serversite": ""
}, {
  "cid": "304",
  "id": "2451036",
  "companyname": "增益速递",
  "shortname": "增益速递",
  "tel": "4008-456-789 ",
  "url": "zengyisudi",
  "code": "zengyisudi",
  "hasvali": 0,
  "comurl": "http://www.zeny-express.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "500054716917",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "4008-456-789 ",
  "queryurl": "http://www.zeny-express.com/",
  "serversite": ""
}, {
  "cid": "103",
  "id": "2626662",
  "companyname": "四川快优达速递",
  "shortname": "四川快优达速递",
  "tel": "4006-068-555",
  "url": "kuaiyouda",
  "code": "kuaiyouda",
  "hasvali": 0,
  "comurl": "http://www.sckyd.net/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "6000440235",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "028-85627788",
  "queryurl": "http://www.sckyd.net/",
  "serversite": ""
}, {
  "cid": "241",
  "id": "2729397",
  "companyname": "日昱物流",
  "shortname": "日昱物流",
  "tel": "4008-820-800",
  "url": "riyuwuliu",
  "code": "riyuwuliu",
  "hasvali": 0,
  "comurl": "http://www.rywl.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "14007338",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "4008-820-800",
  "queryurl": "http://www.rywl.cn/",
  "serversite": ""
}, {
  "cid": "301",
  "id": "2733381",
  "companyname": "速通物流",
  "shortname": "速通物流",
  "tel": "",
  "url": "sutongwuliu",
  "code": "sutongwuliu",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "8000002874158",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "2788564",
  "companyname": "晟邦物流",
  "shortname": "晟邦物流",
  "tel": "400-666-6066",
  "url": "nanjingshengbang",
  "code": "nanjingshengbang",
  "hasvali": 0,
  "comurl": "http://www.3856.cc/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "655730805258",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-666-6066",
  "queryurl": "http://www.3856.cc/",
  "serversite": ""
}, {
  "cid": "298",
  "id": "2998986",
  "companyname": "爱尔兰(An Post)",
  "shortname": "爱尔兰邮政",
  "tel": "01-7057600 ",
  "url": "anposten",
  "code": "anposten",
  "hasvali": 0,
  "comurl": "http://www.anpost.ie/AnPost/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CB006606235IE",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.anpost.ie/AnPost/ ",
  "serversite": ""
}, {
  "cid": "236",
  "id": "3078494",
  "companyname": "日本（Japan Post）",
  "shortname": "日本邮政JapanPost",
  "tel": "+81 0570-046111",
  "url": "japanposten",
  "code": "japanposten",
  "hasvali": 0,
  "comurl": "http://www.post.japanpost.jp/english/index.html ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EG437752812JP",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.post.japanpost.jp/english/index.html ",
  "serversite": ""
}, {
  "cid": "108",
  "id": "3086599",
  "companyname": "丹麦(Post Denmark)",
  "shortname": "丹麦邮政",
  "tel": "+45 80 20 70 30 ",
  "url": "postdanmarken",
  "code": "postdanmarken",
  "hasvali": 0,
  "comurl": "http://www.postdanmark.dk/en/Pages/home.aspx ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CC633268198DK",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.postdanmark.dk/en/Pages/home.aspx ",
  "serversite": ""
}, {
  "cid": "109",
  "id": "3086636",
  "companyname": "巴西(Brazil Post/Correios)",
  "shortname": "巴西邮政Brazil Post",
  "tel": "+55 61 3003 0100",
  "url": "postdanmarken",
  "code": "brazilposten",
  "hasvali": 0,
  "comurl": "http://www.correios.com.br/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CP295332010BR",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.correios.com.br/ ",
  "serversite": ""
}, {
  "cid": "324",
  "id": "3118858",
  "companyname": "荷兰挂号信(PostNL international registered mail)",
  "shortname": "荷兰邮政",
  "tel": "34819",
  "url": "postnlcn",
  "code": "postnlcn",
  "hasvali": 0,
  "comurl": "http://www.postnl.post",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RS351167864NL",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.postnl.post",
  "serversite": ""
}, {
  "cid": "325",
  "id": "3118862",
  "companyname": "荷兰挂号信(PostNL international registered mail)",
  "shortname": "荷兰邮政",
  "tel": "34819",
  "url": "PostNL",
  "code": "postnl",
  "hasvali": 0,
  "comurl": "http://www.postnl.post/details/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RS335114562NL",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.postnl.post/details/",
  "serversite": ""
}, {
  "cid": "326",
  "id": "3118897",
  "companyname": "乌克兰EMS-中文(EMS Ukraine)",
  "shortname": "乌克兰EMS",
  "tel": "+38 044 234-73-84",
  "url": "emsukrainecn",
  "code": "emsukrainecn",
  "hasvali": 0,
  "comurl": "http://dpsz.ua/en",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EX008947890SG",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://dpsz.ua/en",
  "serversite": ""
}, {
  "cid": "327",
  "id": "3118903",
  "companyname": "乌克兰EMS(EMS Ukraine)",
  "shortname": "EMS Ukraine",
  "tel": "+38 044 234-73-84",
  "url": "emsukraine",
  "code": "emsukraine",
  "hasvali": 0,
  "comurl": "http://dpsz.ua/en",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EX008947890SG",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://dpsz.ua/en",
  "serversite": ""
}, {
  "cid": "328",
  "id": "3118910",
  "companyname": "乌克兰邮政包裹",
  "shortname": "乌克兰邮政包裹",
  "tel": "",
  "url": "ukrpostcn",
  "code": "ukrpostcn",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "329",
  "id": "3118913",
  "companyname": "乌克兰小包、大包(UkrPost)",
  "shortname": "UkrPost",
  "tel": "+380 (0) 800-500-440",
  "url": "ukrpost",
  "code": "ukrpost",
  "hasvali": 0,
  "comurl": "http://www.ukrposhta.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CP650816393UA",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+380 (0) 800-500-440",
  "queryurl": "http://www.ukrposhta.com/",
  "serversite": ""
}, {
  "cid": "98",
  "id": "3125254",
  "companyname": "海红for买卖宝",
  "shortname": "海红for买卖宝",
  "tel": "",
  "url": "haihongmmb",
  "code": "haihongmmb",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "99",
  "id": "3125259",
  "companyname": "FedEx-英国件（FedEx UK)",
  "shortname": "FedEx UK",
  "tel": "+ 44 2476 706 660",
  "url": "fedexuk",
  "code": "fedexuk",
  "hasvali": 0,
  "comurl": "http://www.fedex.com/gb/ukservices/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "655311953669",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.fedex.com/gb/ukservices/",
  "serversite": ""
}, {
  "cid": "100",
  "id": "3125270",
  "companyname": "FedEx-英国件",
  "shortname": "FedEx-英国件",
  "tel": "+ 44 2476 706 660",
  "url": "fedexukcn",
  "code": "fedexukcn",
  "hasvali": 0,
  "comurl": "http://www.fedex.com/gb/ukservices/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "2252009793",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.fedex.com/gb/ukservices/",
  "serversite": ""
}, {
  "cid": "101",
  "id": "3125276",
  "companyname": "叮咚快递",
  "shortname": "叮咚快递",
  "tel": "",
  "url": "dingdong",
  "code": "dingdong",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "299",
  "id": "3130655",
  "companyname": "DPD",
  "shortname": "DPD",
  "tel": "+31 20 480 2900",
  "url": "dpd",
  "code": "dpd",
  "hasvali": 0,
  "comurl": "http://www.dpd.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "15505360288183",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.dpd.com/",
  "serversite": ""
}, {
  "cid": "300",
  "id": "3130663",
  "companyname": "UPS Freight",
  "shortname": "UPS Freight",
  "tel": "+1 800-333-7400",
  "url": "upsfreight",
  "code": "upsfreight",
  "hasvali": 0,
  "comurl": "http://ltl.upsfreight.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "260219374",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://ltl.upsfreight.com/",
  "serversite": ""
}, {
  "cid": "138",
  "id": "3135935",
  "companyname": "ABF",
  "shortname": "ABF",
  "tel": "(479) 785-6486",
  "url": "abf",
  "code": "abf",
  "hasvali": 0,
  "comurl": "http://www.abfs.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "23471181",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.abfs.com/",
  "serversite": ""
}, {
  "cid": "139",
  "id": "3135948",
  "companyname": "Purolator",
  "shortname": "Purolator",
  "tel": "-8754",
  "url": "purolator",
  "code": "purolator",
  "hasvali": 0,
  "comurl": "http://www.purolator.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "6909455103",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.purolator.com/",
  "serversite": ""
}, {
  "cid": "88",
  "id": "3139495",
  "companyname": "比利时（Bpost）",
  "shortname": "Bpost",
  "tel": "+32 (0)2 278 50 90",
  "url": "bpost",
  "code": "bpost",
  "hasvali": 0,
  "comurl": "http://www.bpostinternational.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "412015896000000000000032376423",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.bpostinternational.com/",
  "serversite": ""
}, {
  "cid": "89",
  "id": "3140220",
  "companyname": "比利时国际(Bpost international)",
  "shortname": "bpostint",
  "tel": "+32 (0)2 278 50 90",
  "url": "bpostinter",
  "code": "bpostinter",
  "hasvali": 0,
  "comurl": "http://www.bpostinternational.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "229490632892",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.bpostinternational.com/",
  "serversite": ""
}, {
  "cid": "335",
  "id": "3155981",
  "companyname": "LaserShip",
  "shortname": "LaserShip",
  "tel": "+1 (800) 527-3764",
  "url": "lasership",
  "code": "lasership",
  "hasvali": 0,
  "comurl": "http://www.lasership.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "LW13200211",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.lasership.com/",
  "serversite": ""
}, {
  "cid": "336",
  "id": "3155993",
  "companyname": "英国大包、EMS（Parcel Force）",
  "shortname": "Parcel Force",
  "tel": "08448 00 44 66",
  "url": "parcelforce",
  "code": "parcelforce",
  "hasvali": 0,
  "comurl": "http://www.parcelforce.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EA214606087HK",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.parcelforce.com/",
  "serversite": ""
}, {
  "cid": "337",
  "id": "3155998",
  "companyname": "英国邮政大包EMS",
  "shortname": "英国邮政大包EMS",
  "tel": "08448 00 44 66",
  "url": "parcelforcecn",
  "code": "parcelforcecn",
  "hasvali": 0,
  "comurl": "http://www.parcelforce.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "FH130128771GB",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.parcelforce.com/",
  "serversite": ""
}, {
  "cid": "338",
  "id": "3156002",
  "companyname": "YODEL",
  "shortname": "YODEL",
  "tel": "+44 800 0152 662",
  "url": "yode",
  "code": "yodel",
  "hasvali": 0,
  "comurl": "http://www.myyodel.co.uk/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "JD0002251443524793",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.myyodel.co.uk/",
  "serversite": ""
}, {
  "cid": "242",
  "id": "3160296",
  "companyname": "DHL-荷兰（DHL Netherlands）",
  "shortname": "DHL Netherlands",
  "tel": "+31 26-324 6700",
  "url": "dhlnetherlands",
  "code": "dhlnetherlands",
  "hasvali": 0,
  "comurl": "http://www.dhl.nl",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "JVGL0590339801852785",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.dhl.nl",
  "serversite": ""
}, {
  "cid": "277",
  "id": "3165626",
  "companyname": "MyHermes",
  "shortname": "MyHermes",
  "tel": "+44 844 543 7000",
  "url": "myhermes",
  "code": "myhermes",
  "hasvali": 0,
  "comurl": "https://www.myhermes.co.uk/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "9378786254934087",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "https://www.myhermes.co.uk/",
  "serversite": ""
}, {
  "cid": "278",
  "id": "3165635",
  "companyname": "DPD Germany",
  "shortname": "DPD Germany",
  "tel": "+49 01806 373 200",
  "url": "dpdgermany",
  "code": "dpdgermany",
  "hasvali": 0,
  "comurl": "https://www.dpd.com/de/(portal)/de/(rememberCountry)/0",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "01505081960609",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "https://www.dpd.com/de/(portal)/de/(rememberCountry)/0",
  "serversite": ""
}, {
  "cid": "279",
  "id": "3165646",
  "companyname": "Fastway Ireland",
  "shortname": "Fastway Ireland",
  "tel": "+353 1 4242 900",
  "url": "fastway",
  "code": "fastway",
  "hasvali": 0,
  "comurl": "http://www.fastway.ie/index.php",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "WA0013625940",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.fastway.ie/index.php",
  "serversite": ""
}, {
  "cid": "182",
  "id": "3177500",
  "companyname": "法国大包、EMS-法文（Chronopost France）",
  "shortname": "Chronopost France",
  "tel": "+33 (0) 969 391 391",
  "url": "chronopostfra",
  "code": "chronopostfra",
  "hasvali": 0,
  "comurl": "http://www.chronopost.fr/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EY876275007FR",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.chronopost.fr/",
  "serversite": ""
}, {
  "cid": "183",
  "id": "3177508",
  "companyname": "Selektvracht",
  "shortname": "Selektvracht",
  "tel": "+31 0900-2222120",
  "url": "selektvracht",
  "code": "selektvracht",
  "hasvali": 0,
  "comurl": "http://www.selektvracht.nl/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "3SXLDW00387",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.selektvracht.nl/",
  "serversite": ""
}, {
  "cid": "184",
  "id": "3177511",
  "companyname": "蓝弧快递",
  "shortname": "蓝弧快递",
  "tel": "4000661646",
  "url": "lanhukuaidi",
  "code": "lanhukuaidi",
  "hasvali": 0,
  "comurl": "http://www.lanhukd.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "757000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.lanhukd.com/",
  "serversite": ""
}, {
  "cid": "185",
  "id": "3177517",
  "companyname": "比利时(Belgium Post)",
  "shortname": "Belgium Post",
  "tel": "+32 2 276 22 74",
  "url": "belgiumpost",
  "code": "belgiumpost",
  "hasvali": 0,
  "comurl": "http://www.bpost.be/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RA832006770BE",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.bpost.be/",
  "serversite": ""
}, {
  "cid": "221",
  "id": "3194763",
  "companyname": "UPS Mail Innovations",
  "shortname": "UPS Mail Innovations",
  "tel": "+1 800-500-2224",
  "url": "upsmailinno",
  "code": "upsmailinno",
  "hasvali": 0,
  "comurl": "http://www.upsmailinnovations.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "92748999964342543475126127",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.upsmailinnovations.com/",
  "serversite": ""
}, {
  "cid": "222",
  "id": "3194764",
  "companyname": "挪威（Posten Norge）",
  "shortname": "Posten Norge",
  "tel": "+47 21316260",
  "url": "postennorge",
  "code": "postennorge",
  "hasvali": 0,
  "comurl": "http://www.posten.no/en/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CD657634775NO",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.posten.no/en/",
  "serversite": ""
}, {
  "cid": "223",
  "id": "3194765",
  "companyname": "瑞士邮政",
  "shortname": "瑞士邮政",
  "tel": "+41848888888",
  "url": "swisspostcn",
  "code": "swisspostcn",
  "hasvali": 0,
  "comurl": "https://www.post.ch/de/privat?wt_shortcut=www-swisspost-com&WT.mc_id=shortcut_www-swisspost-com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+41848888888",
  "queryurl": "https://www.post.ch/de/privat?wt_shortcut=www-swisspost-com&WT.mc_id=shortcut_www-swisspost-com",
  "serversite": ""
}, {
  "cid": "224",
  "id": "3194766",
  "companyname": "瑞士(Swiss Post)",
  "shortname": "Swiss Post",
  "tel": "+41 848 888 888",
  "url": "swisspost",
  "code": "swisspost",
  "hasvali": 0,
  "comurl": "http://www.post.ch/en",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RU468581905CH",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.post.ch/en",
  "serversite": ""
}, {
  "cid": "225",
  "id": "3194767",
  "companyname": "英国邮政小包",
  "shortname": "英国邮政小包",
  "tel": "",
  "url": "royalmailcn",
  "code": "royalmailcn",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "226",
  "id": "3194768",
  "companyname": "英国小包（Royal Mail）",
  "shortname": "Royal Mail",
  "tel": "+44 1752387112",
  "url": "royalmail",
  "code": "royalmail",
  "hasvali": 0,
  "comurl": "http://www.royalmail.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RQ304136228GB",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.royalmail.com/",
  "serversite": ""
}, {
  "cid": "227",
  "id": "3194769",
  "companyname": "DHL Benelux",
  "shortname": "DHL Benelux",
  "tel": "+31 26-324 6700",
  "url": "dhlbenelux",
  "code": "dhlbenelux",
  "hasvali": 0,
  "comurl": "http://www.dhl.nl/nl.html",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "3214528741",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.dhl.nl/nl.html",
  "serversite": ""
}, {
  "cid": "284",
  "id": "3205226",
  "companyname": "Nova Poshta",
  "shortname": "Nova Poshta",
  "tel": "+7 (0) 800 500 609",
  "url": "novaposhta",
  "code": "novaposhta",
  "hasvali": 0,
  "comurl": "http://novaposhta.ua/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "60000000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://novaposhta.ua/",
  "serversite": ""
}, {
  "cid": "285",
  "id": "3205227",
  "companyname": "DHL-波兰（DHL Poland）",
  "shortname": "DHL Poland",
  "tel": "+48 42 6 345 345",
  "url": "dhlpoland",
  "code": "dhlpoland",
  "hasvali": 0,
  "comurl": "http://www.dhl.com.pl/pl.html",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "13164502259",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.dhl.com.pl/pl.html",
  "serversite": ""
}, {
  "cid": "286",
  "id": "3205228",
  "companyname": "Estes",
  "shortname": "Estes",
  "tel": "1-866-378-3748",
  "url": "estes",
  "code": "estes",
  "hasvali": 0,
  "comurl": "http://www.estes-express.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "2951429029",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.estes-express.com/",
  "serversite": ""
}, {
  "cid": "287",
  "id": "3205229",
  "companyname": "TNT UK",
  "shortname": "TNT UK",
  "tel": "+44 0800 100 600",
  "url": "tntuk",
  "code": "tntuk",
  "hasvali": 0,
  "comurl": "http://www.tnt.com/portal/location/en.html",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "1201877402928",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.tnt.com/portal/location/en.html",
  "serversite": ""
}, {
  "cid": "288",
  "id": "3205230",
  "companyname": "Deltec Courier",
  "shortname": "Deltec Courier",
  "tel": "+44 (0) 20 8569 6767",
  "url": "deltec",
  "code": "deltec",
  "hasvali": 0,
  "comurl": "https://www.deltec-courier.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "096492851184",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "https://www.deltec-courier.com",
  "serversite": ""
}, {
  "cid": "256",
  "id": "3223274",
  "companyname": "OPEK",
  "shortname": "OPEK",
  "tel": "+48 22 732 79 99",
  "url": "opek",
  "code": "opek",
  "hasvali": 0,
  "comurl": "http://www.opek.com.pl/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "798543981654",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.opek.com.pl/",
  "serversite": ""
}, {
  "cid": "257",
  "id": "3223275",
  "companyname": "DPD Poland",
  "shortname": "DPD Poland",
  "tel": "+48 801 400 373",
  "url": "dpdpoland",
  "code": "dpdpoland",
  "hasvali": 0,
  "comurl": "http://www.dpd.com.pl/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "0000005441202U",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.dpd.com.pl/",
  "serversite": ""
}, {
  "cid": "258",
  "id": "3223276",
  "companyname": "Italy SDA",
  "shortname": "Italy SDA",
  "tel": "+39 199 113366",
  "url": "italysad",
  "code": "italysad",
  "hasvali": 0,
  "comurl": "http://wwww.sda.it/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "D765317000021",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://wwww.sda.it/",
  "serversite": ""
}, {
  "cid": "104",
  "id": "3228276",
  "companyname": "MRW",
  "shortname": "MRW",
  "tel": "+34 902 300 402",
  "url": "mrw",
  "code": "mrw",
  "hasvali": 0,
  "comurl": "http://www.mrw.es/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "043037043203",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.mrw.es/",
  "serversite": ""
}, {
  "cid": "105",
  "id": "3228277",
  "companyname": "Chronopost Portugal",
  "shortname": "Chronopost Portugal",
  "tel": "+351 707 20 28 28",
  "url": "chronopostport",
  "code": "chronopostport",
  "hasvali": 0,
  "comurl": "http://chronopost.pt/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "19900000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://chronopost.pt/",
  "serversite": ""
}, {
  "cid": "106",
  "id": "3228278",
  "companyname": "西班牙(Correos de Espa?a)",
  "shortname": "Correos de Espa?a",
  "tel": "+34 902197197",
  "url": "correosdees",
  "code": "correosdees",
  "hasvali": 0,
  "comurl": "http://www.correos.es",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EK505483520ES",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.correos.es",
  "serversite": ""
}, {
  "cid": "289",
  "id": "3238411",
  "companyname": "Direct Link",
  "shortname": "Direct Link",
  "tel": "+1 (908) 289-0703",
  "url": "directlink",
  "code": "directlink",
  "hasvali": 0,
  "comurl": "http://www.directlink.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RE605820729SE",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.directlink.com",
  "serversite": ""
}, {
  "cid": "290",
  "id": "3238412",
  "companyname": "ELTA Hellenic Post",
  "shortname": "ELTA Hellenic Post",
  "tel": "+30 801 11 83000",
  "url": "eltahell",
  "code": "eltahell",
  "hasvali": 0,
  "comurl": "https://www.elta-courier.gr",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EE205325675GR",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "https://www.elta-courier.gr",
  "serversite": ""
}, {
  "cid": "291",
  "id": "3238413",
  "companyname": "捷克（?eská po?ta）",
  "shortname": "ceskaposta",
  "tel": "+420 840 111 244",
  "url": "ceskaposta",
  "code": "ceskaposta",
  "hasvali": 0,
  "comurl": "http://www.ceskaposta.cz/index",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EM512005180CZ",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.ceskaposta.cz/index",
  "serversite": ""
}, {
  "cid": "292",
  "id": "3238414",
  "companyname": "Siodemka",
  "shortname": "Siodemka",
  "tel": "+48 22 777 77 77",
  "url": "siodemka",
  "code": "siodemka",
  "hasvali": 0,
  "comurl": "http://www.siodemka.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "9730000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.siodemka.com/",
  "serversite": ""
}, {
  "cid": "259",
  "id": "3245372",
  "companyname": "International Seur",
  "shortname": "International Seur",
  "tel": "+34 93 336 85 85",
  "url": "seur",
  "code": "seur",
  "hasvali": 0,
  "comurl": "http://www.seur.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "2015290828470127555960",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.seur.com/",
  "serversite": ""
}, {
  "cid": "260",
  "id": "3245373",
  "companyname": "久易快递",
  "shortname": "久易快递",
  "tel": "021-64206088",
  "url": "jiuyicn",
  "code": "jiuyicn",
  "hasvali": 0,
  "comurl": "http://www.jiuyicn.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "5833526742",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "021-64206088",
  "queryurl": "http://www.jiuyicn.com/",
  "serversite": ""
}, {
  "cid": "228",
  "id": "3264010",
  "companyname": "克罗地亚（Hrvatska Posta）",
  "shortname": "Hrvatska Posta",
  "tel": "+385 0800 303 304",
  "url": "hrvatska",
  "code": "hrvatska",
  "hasvali": 0,
  "comurl": "http://www.posta.hr/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RC010487565HR",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.posta.hr/",
  "serversite": ""
}, {
  "cid": "229",
  "id": "3264011",
  "companyname": "保加利亚（Bulgarian Posts）",
  "shortname": "Bulgarian Posts",
  "tel": "+3592/949 3280",
  "url": "bulgarian",
  "code": "bulgarian",
  "hasvali": 0,
  "comurl": "http://www.bgpost.bg/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "YUNDA",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.bgpost.bg/",
  "serversite": ""
}, {
  "cid": "230",
  "id": "3264012",
  "companyname": "Portugal Seur",
  "shortname": "Portugal Seur",
  "tel": "+351 707 50 10 10",
  "url": "portugalseur",
  "code": "portugalseur",
  "hasvali": 0,
  "comurl": "http://www.seur.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "289000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.seur.com/",
  "serversite": ""
}, {
  "cid": "126",
  "id": "3280637",
  "companyname": "EC-Firstclass",
  "shortname": "EC-Firstclass",
  "tel": "+86 4006 988 223",
  "url": "ecfirstclass",
  "code": "ecfirstclass",
  "hasvali": 0,
  "comurl": "http://www.ec-firstclass.org/Details.aspx",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "LTL130320BCA000017",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.ec-firstclass.org/Details.aspx",
  "serversite": ""
}, {
  "cid": "127",
  "id": "3280638",
  "companyname": "DTDC India",
  "shortname": "DTDC India",
  "tel": "+91 33004444",
  "url": "dtdcindia",
  "code": "dtdcindia",
  "hasvali": 0,
  "comurl": "http://dtdc.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "N95914878",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://dtdc.com",
  "serversite": ""
}, {
  "cid": "128",
  "id": "3280639",
  "companyname": "Safexpress",
  "shortname": "Safexpress",
  "tel": "+91 11 26783281",
  "url": "safexpress",
  "code": "safexpress",
  "hasvali": 0,
  "comurl": "http://www.safexpress.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "35627566",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.safexpress.com",
  "serversite": ""
}, {
  "cid": "129",
  "id": "3280640",
  "companyname": "韩国（Korea Post）",
  "shortname": "Korea Post",
  "tel": "+82 2 2195 1114",
  "url": "koreapost",
  "code": "koreapost",
  "hasvali": 0,
  "comurl": "http://www.koreapost.go.kr/kpost/main/index.jsp",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RR494467118KR",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.koreapost.go.kr/kpost/main/index.jsp",
  "serversite": ""
}, {
  "cid": "295",
  "id": "3312654",
  "companyname": "TNT Australia",
  "shortname": "TNT Australia",
  "tel": "+61 13 11 50",
  "url": "tntau",
  "code": "tntau",
  "hasvali": 0,
  "comurl": "https://www.tntexpress.com.au",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "314055529",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "https://www.tntexpress.com.au",
  "serversite": ""
}, {
  "cid": "293",
  "id": "3312655",
  "companyname": "泰国（Thailand Thai Post）",
  "shortname": "Thailand Thai Post",
  "tel": "0 2573 5463",
  "url": "thailand",
  "code": "thailand",
  "hasvali": 0,
  "comurl": "http://www.thailandpost.co.th ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EN961764205TH",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.thailandpost.co.th",
  "serversite": ""
}, {
  "cid": "294",
  "id": "3312656",
  "companyname": "SkyNet Malaysia",
  "shortname": "SkyNet Malaysia",
  "tel": "+60 3- 56239090",
  "url": "skynetmalaysia",
  "code": "skynetmalaysia",
  "hasvali": 0,
  "comurl": "http://www.skynet.com.my/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "201479896870",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.skynet.com.my/",
  "serversite": ""
}, {
  "cid": "296",
  "id": "3312657",
  "companyname": "马来西亚小包（Malaysia Post(Registered)）",
  "shortname": "Malaysia Post(Registered)",
  "tel": "+603 27279100",
  "url": "malaysiapost",
  "code": "malaysiapost",
  "hasvali": 0,
  "comurl": "http://www.pos.com.my/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EP002931300MY",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.pos.com.my/",
  "serversite": ""
}, {
  "cid": "297",
  "id": "3312658",
  "companyname": "马来西亚大包、EMS（Malaysia Post(parcel,EMS)）",
  "shortname": "Malaysia Post (parcel,EMS)",
  "tel": "+603 27279100",
  "url": "malaysiaems",
  "code": "malaysiaems",
  "hasvali": 0,
  "comurl": "http://www.pos.com.my/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CP306201896MY",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.pos.com.my/",
  "serversite": ""
}, {
  "cid": "330",
  "id": "3321130",
  "companyname": "京东",
  "shortname": "京东",
  "tel": "400-603-3600",
  "url": "jd",
  "code": "jd",
  "hasvali": 0,
  "comurl": "http://www.jd-ex.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "11059731415",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-603-3600",
  "queryurl": "http://www.jd-ex.com",
  "serversite": ""
}, {
  "cid": "201",
  "id": "3331811",
  "companyname": "沙特阿拉伯(Saudi Post)",
  "shortname": "Saudi Post",
  "tel": "+966 9200 05700",
  "url": "saudipost",
  "code": "saudipost",
  "hasvali": 0,
  "comurl": "http://www.sp.com.sa",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EB070957408BR",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.sp.com.sa",
  "serversite": ""
}, {
  "cid": "202",
  "id": "3331812",
  "companyname": "南非（South African Post Office）",
  "shortname": "South African Post Office",
  "tel": "+27 0860 111 502",
  "url": "southafrican",
  "code": "southafrican",
  "hasvali": 0,
  "comurl": "http://www.postoffice.co.za",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CN022908044ZA",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.postoffice.co.za",
  "serversite": ""
}, {
  "cid": "203",
  "id": "3331813",
  "companyname": "OCA Argentina",
  "shortname": "OCA Argentina",
  "tel": "+34 800-999-7700",
  "url": "ocaargen",
  "code": "ocaargen",
  "hasvali": 0,
  "comurl": "http://www.oca.com.ar/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "3990000000000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.oca.com.ar/",
  "serversite": ""
}, {
  "cid": "204",
  "id": "3331814",
  "companyname": "尼日利亚(Nigerian Postal)",
  "shortname": "Nigerian Postal",
  "tel": "234-09-3149531",
  "url": "nigerianpost",
  "code": "nigerianpost",
  "hasvali": 0,
  "comurl": "http://www.nipost.gov.ng",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EE319286895NG",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.nipost.gov.ng",
  "serversite": ""
}, {
  "cid": "205",
  "id": "3331815",
  "companyname": "智利(Correos Chile)",
  "shortname": "Correos Chile",
  "tel": "+562 600 950 2020",
  "url": "chile",
  "code": "chile",
  "hasvali": 0,
  "comurl": "http://www.correos.cl",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CP358805067CL",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.correos.cl",
  "serversite": ""
}, {
  "cid": "206",
  "id": "3331816",
  "companyname": "以色列(Israel Post)",
  "shortname": "Israel Post",
  "tel": "+972 2 629 0691",
  "url": "israelpost",
  "code": "israelpost",
  "hasvali": 0,
  "comurl": "http://www.israelpost.co.il",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EE143917265IL",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.israelpost.co.il",
  "serversite": ""
}, {
  "cid": "231",
  "id": "3362923",
  "companyname": "Toll Priority(Toll Online)",
  "shortname": "Toll Priority",
  "tel": "+61 13 15 31",
  "url": "tollpriority",
  "code": "tollpriority",
  "hasvali": 0,
  "comurl": "https://online.toll.com.au",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "6828047773260003233001",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "https://online.toll.com.au",
  "serversite": ""
}, {
  "cid": "232",
  "id": "3362925",
  "companyname": "Estafeta",
  "shortname": "Estafeta",
  "tel": "+52 1-800-378-2338",
  "url": "estafeta",
  "code": "estafeta",
  "hasvali": 0,
  "comurl": "http://rastreo3.estafeta.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "763326789",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://rastreo3.estafeta.com",
  "serversite": ""
}, {
  "cid": "233",
  "id": "3362926",
  "companyname": "港快速递",
  "shortname": "港快速递",
  "tel": "400-11-33333",
  "url": "gdkd",
  "code": "gdkd",
  "hasvali": 0,
  "comurl": "http://www.gksd.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "200028092916",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.gksd.com/",
  "serversite": ""
}, {
  "cid": "234",
  "id": "3362927",
  "companyname": "墨西哥（Correos de Mexico）",
  "shortname": "Correos de Mexico",
  "tel": "+52 01 800 701 7000",
  "url": "mexico",
  "code": "mexico",
  "hasvali": 0,
  "comurl": "http://www.correosdemexico.gob.mx",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RP400000695MX",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.correosdemexico.gob.mx",
  "serversite": ""
}, {
  "cid": "235",
  "id": "3362928",
  "companyname": "罗马尼亚（Posta Romanian）",
  "shortname": "Posta Romanian",
  "tel": "+40 021 9393 111",
  "url": "romanian",
  "code": "romanian",
  "hasvali": 0,
  "comurl": "http://www.posta-romana.ro/posta-romana.html",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CO989187136RO",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.posta-romana.ro/posta-romana.html",
  "serversite": ""
}, {
  "cid": "318",
  "id": "3383409",
  "companyname": "TNT Italy",
  "shortname": "TNT Italy",
  "tel": "+39 199 803 868",
  "url": "tntitaly",
  "code": "tntitaly",
  "hasvali": 0,
  "comurl": "http://www.tnt.it",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "MY33217326",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+39 199 803 868",
  "queryurl": "http://www.tnt.it",
  "serversite": ""
}, {
  "cid": "319",
  "id": "3383410",
  "companyname": "Mexico Multipack",
  "shortname": "Mexico Multipack",
  "tel": "+52 1800 7023200",
  "url": "multipack",
  "code": "multipack",
  "hasvali": 0,
  "comurl": "http://www.multipack.com.mx/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "166000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+52 1800 7023200",
  "queryurl": "http://www.multipack.com.mx/",
  "serversite": ""
}, {
  "cid": "320",
  "id": "3383411",
  "companyname": "葡萄牙（Portugal CTT）",
  "shortname": "Portugal CTT",
  "tel": "+351 707 26 26 26",
  "url": "portugalctt",
  "code": "portugalctt",
  "hasvali": 0,
  "comurl": "http://www.ctt.pt",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RD601577564PT",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+351 707 26 26 26",
  "queryurl": "http://www.ctt.pt",
  "serversite": ""
}, {
  "cid": "321",
  "id": "3383412",
  "companyname": "Interlink Express",
  "shortname": "Interlink Express",
  "tel": "+44 8702 200 300",
  "url": "interlink",
  "code": "interlink",
  "hasvali": 0,
  "comurl": "http://www.interlinkexpress.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "6152848856",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+44 8702 200 300",
  "queryurl": "http://www.interlinkexpress.com/",
  "serversite": ""
}, {
  "cid": "322",
  "id": "3383413",
  "companyname": "DPD UK",
  "shortname": "DPD UK",
  "tel": "+44 845 9 300 350",
  "url": "dpduk",
  "code": "dpduk",
  "hasvali": 0,
  "comurl": "http://www.dpd.co.uk/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "15505411411164",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+44 845 9 300 350",
  "queryurl": "http://www.dpd.co.uk/",
  "serversite": ""
}, {
  "cid": "157",
  "id": "3432857",
  "companyname": "华航快递",
  "shortname": "华航快递",
  "tel": "400-697-0008",
  "url": "hzpl",
  "code": "hzpl",
  "hasvali": 0,
  "comurl": "http://www.hz3pl.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "100275942",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-697-0008",
  "queryurl": "http://www.hz3pl.com",
  "serversite": ""
}, {
  "cid": "158",
  "id": "3432858",
  "companyname": "Gati-KWE",
  "shortname": "Gati-KWE",
  "tel": "+91 1800-180-4284",
  "url": "gatikwe",
  "code": "gatikwe",
  "hasvali": 0,
  "comurl": "http://www.gatikwe.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "413767243",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+91 1800-180-4284",
  "queryurl": "http://www.gatikwe.com/",
  "serversite": ""
}, {
  "cid": "159",
  "id": "3432859",
  "companyname": "Red Express",
  "shortname": "Red Express",
  "tel": "+91 1800-123-2400",
  "url": "redexpress",
  "code": "redexpress",
  "hasvali": 0,
  "comurl": "https://www.getsetred.net",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "0075941",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+91 1800-123-2400",
  "queryurl": "https://www.getsetred.net",
  "serversite": ""
}, {
  "cid": "261",
  "id": "3440002",
  "companyname": "Mexico Senda Express",
  "shortname": "Mexico Senda Express",
  "tel": "+52 1800 833 93 00",
  "url": "mexicodenda",
  "code": "mexicodenda",
  "hasvali": 0,
  "comurl": "http://www.sendaexpress.com.mx/rastreo.asp#af",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "10200000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+52 1800 833 93 00",
  "queryurl": "http://www.sendaexpress.com.mx/rastreo.asp#af",
  "serversite": ""
}, {
  "cid": "331",
  "id": "3487500",
  "companyname": "TCI XPS",
  "shortname": "TCI XPS",
  "tel": "18002000977",
  "url": "tcixps",
  "code": "tcixps",
  "hasvali": 0,
  "comurl": "http://www.tcixps.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "110000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "18002000977",
  "queryurl": "http://www.tcixps.com/",
  "serversite": ""
}, {
  "cid": "332",
  "id": "3487501",
  "companyname": "高铁速递",
  "shortname": "高铁速递",
  "tel": "400-999-7777",
  "url": "hre",
  "code": "hre",
  "hasvali": 0,
  "comurl": "http://www.hre-e.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "59100031231",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-999-7777",
  "queryurl": "http://www.hre-e.com/",
  "serversite": ""
}, {
  "cid": "333",
  "id": "3487502",
  "companyname": "新加坡EMS、大包(Singapore Speedpost)",
  "shortname": "Singapore Speedpost",
  "tel": "+65 6222 5777",
  "url": "speedpost",
  "code": "speedpost",
  "hasvali": 0,
  "comurl": "http://www.speedpost.com.sg/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EX011436437SG",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+65 6222 5777",
  "queryurl": "http://www.speedpost.com.sg/",
  "serversite": ""
}, {
  "cid": "186",
  "id": "3489756",
  "companyname": "EMS-国际件-英文",
  "shortname": "EMS-国际件-英文",
  "tel": "",
  "url": "emsinten",
  "code": "emsinten",
  "hasvali": 0,
  "comurl": "http://www.ems.com.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EG408834094JP",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "243",
  "id": "3526510",
  "companyname": "Asendia USA",
  "shortname": "Asendia USA",
  "tel": "+1 610 461 3661",
  "url": "asendiausa",
  "code": "asendiausa",
  "hasvali": 0,
  "comurl": "http://www.asendiausa.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "00006675214163582734",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+1 610 461 3661",
  "queryurl": "http://www.asendiausa.com/",
  "serversite": ""
}, {
  "cid": "244",
  "id": "3526511",
  "companyname": "法国大包、EMS-英文(Chronopost France)",
  "shortname": "Chronopost France",
  "tel": "+33 (0) 969 391 391",
  "url": "chronopostfren",
  "code": "chronopostfren",
  "hasvali": 0,
  "comurl": "http://www.chronopost.fr/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EY084484098FR",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+33 (0) 969 391 391",
  "queryurl": "http://www.chronopost.fr/",
  "serversite": ""
}, {
  "cid": "245",
  "id": "3526512",
  "companyname": "意大利(Poste Italiane)",
  "shortname": "Poste Italiane Paccocelere",
  "tel": "+39 803 160",
  "url": "italiane",
  "code": "italiane",
  "hasvali": 0,
  "comurl": "http://www.poste.it/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CP039849623IT",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+39 803 160",
  "queryurl": "http://www.poste.it/",
  "serversite": ""
}, {
  "cid": "276",
  "id": "3623446",
  "companyname": "冠达快递",
  "shortname": "冠达快递",
  "tel": "400-990-0088",
  "url": "gda",
  "code": "gda",
  "hasvali": 0,
  "comurl": "http://www.gda-e.com.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "700114079397",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-990-0088",
  "queryurl": "http://www.gda-e.com.cn/",
  "serversite": ""
}, {
  "cid": "91",
  "id": "3664396",
  "companyname": "出口易",
  "shortname": "出口易",
  "tel": "4006-988-223",
  "url": "chukou1",
  "code": "chukou1",
  "hasvali": 0,
  "comurl": "http://www.chukou1.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "SZ32316495",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "13360562736",
  "queryurl": "http://www.chukou1.com",
  "serversite": ""
}, {
  "cid": "0",
  "id": "3696400",
  "companyname": "黄马甲",
  "shortname": "黄马甲",
  "tel": "029-96128",
  "url": "huangmajia",
  "code": "huangmajia",
  "hasvali": 0,
  "comurl": "http://www.huangmajia.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "032606205642846",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "029-96128",
  "queryurl": "http://www.huangmajia.com",
  "serversite": ""
}, {
  "cid": "280",
  "id": "3785532",
  "companyname": "新干线快递",
  "shortname": "新干线快递",
  "tel": "",
  "url": "anlexpress",
  "code": "anlexpress",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "281",
  "id": "3785533",
  "companyname": "飞洋快递",
  "shortname": "飞洋快递",
  "tel": "001-877-387-9799",
  "url": "shipgce",
  "code": "shipgce",
  "hasvali": 0,
  "comurl": "http://express.shipgce.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "DD504013290US",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "001-877-387-9799",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "282",
  "id": "3785534",
  "companyname": "贝海国际速递",
  "shortname": "贝海国际速递",
  "tel": "086-400-082-2200",
  "url": "xlobo",
  "code": "xlobo",
  "hasvali": 0,
  "comurl": "http://www.xlobo.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "DB863228069US",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "086-400-082-2200",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "140",
  "id": "3808754",
  "companyname": "阿联酋(Emirates Post)",
  "shortname": "阿联酋邮政",
  "tel": "600-599-999",
  "url": "emirates",
  "code": "emirates",
  "hasvali": 0,
  "comurl": "http://www.epg.gov.ae/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EE041631183AE",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "600-599-999",
  "queryurl": "http://www.epg.gov.ae/",
  "serversite": ""
}, {
  "cid": "0",
  "id": "3808755",
  "companyname": "新顺丰（NSF）",
  "shortname": "新顺丰（NSF）",
  "tel": "0064-9-5258288",
  "url": "nsf",
  "code": "nsf",
  "hasvali": 0,
  "comurl": "http://www.nsf.co.nz/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "91502028659",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0064-9-5258288",
  "queryurl": "http://www.nsf.co.nz/",
  "serversite": ""
}, {
  "cid": "142",
  "id": "3808756",
  "companyname": "巴基斯坦(Pakistan Post)",
  "shortname": "巴基斯坦邮政",
  "tel": "（+92 51）926 00 37",
  "url": "pakistan",
  "code": "pakistan",
  "hasvali": 0,
  "comurl": "http://ep.gov.pk/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EE338661704CN",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "（+92 51）926 00 37",
  "queryurl": "http://ep.gov.pk/",
  "serversite": ""
}, {
  "cid": "275",
  "id": "3812620",
  "companyname": "世运快递",
  "shortname": "世运快递",
  "tel": "400-666-1111",
  "url": "shiyunkuaidi",
  "code": "shiyunkuaidi",
  "hasvali": 0,
  "comurl": "http://www.sehoex.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "200000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-666-1111",
  "queryurl": "http://sehoexpress.com/index.asp",
  "serversite": ""
}, {
  "cid": "166",
  "id": "3836842",
  "companyname": "合众速递(UCS）",
  "shortname": "合众速递(UCS）",
  "tel": "024-31515566",
  "url": "ucs",
  "code": "ucs",
  "hasvali": 0,
  "comurl": "http://www.ucsus.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EL900787012HK",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "024-31515566",
  "queryurl": "http://www.ucsus.com",
  "serversite": ""
}, {
  "cid": "167",
  "id": "3836843",
  "companyname": "阿富汗(Afghan Post)",
  "shortname": "阿富汗邮政",
  "tel": "+93 20 2104075",
  "url": "afghan",
  "code": "afghan",
  "hasvali": 0,
  "comurl": "http://track.afghanpost.gov.af/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CP858622080HK",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+93 20 2104075",
  "queryurl": "http://track.afghanpost.gov.af/",
  "serversite": ""
}, {
  "cid": "308",
  "id": "3852026",
  "companyname": "白俄罗斯(Belpochta)",
  "shortname": "白俄罗斯",
  "tel": "+375 17 293 59 10",
  "url": "belpost",
  "code": "belpost",
  "hasvali": 0,
  "comurl": "http://www.belpost.by/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CP045759207BY",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+375 17 293 59 10",
  "queryurl": "http://www.belpost.by/",
  "serversite": ""
}, {
  "cid": "92",
  "id": "3946200",
  "companyname": "全通快运",
  "shortname": "全通快运",
  "tel": "",
  "url": "quantwl",
  "code": "quantwl",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "93",
  "id": "3946201",
  "companyname": "宅急便",
  "shortname": "宅急便",
  "tel": "",
  "url": "zhaijibian",
  "code": "zhaijibian",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "120098239752",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "130",
  "id": "4010763",
  "companyname": "EFS Post",
  "shortname": "efs",
  "tel": "0773-2308246",
  "url": "efs",
  "code": "efs",
  "hasvali": 0,
  "comurl": "http://www.efspost.com/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EF313486219NZ",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "131",
  "id": "4010767",
  "companyname": "TNT Post",
  "shortname": "tntpostcn",
  "tel": "+31（0）900 0570 ",
  "url": "tntpostcn",
  "code": "tntpostcn",
  "hasvali": 0,
  "comurl": "http://parcels-uk.tntpost.com/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "3SABC123456789 ",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+31（0）900 0570 ",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "316",
  "id": "4051323",
  "companyname": "英脉物流",
  "shortname": "英脉物流",
  "tel": "400-880-5088",
  "url": "gml",
  "code": "gml",
  "hasvali": 0,
  "comurl": "http://www.gml.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "151110000059",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-880-5088",
  "queryurl": "http://www.gml.cn/",
  "serversite": ""
}, {
  "cid": "95",
  "id": "4110138",
  "companyname": "广通速递",
  "shortname": "广通速递",
  "tel": "400-801-5567",
  "url": "gtongsudi",
  "code": "gtongsudi",
  "hasvali": 0,
  "comurl": "http://www.gto56.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "2200002356574",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-801-5567",
  "queryurl": "",
  "serversite": "http://www.gto56.com/ServiceNet/"
}, {
  "cid": "96",
  "id": "4110170",
  "companyname": "东瀚物流",
  "shortname": "东瀚物流",
  "tel": "400-092-2229",
  "url": "donghanwl",
  "code": "donghanwl",
  "hasvali": 0,
  "comurl": "http://www.donghanwl.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "DH0000108870",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "97",
  "id": "4110206",
  "companyname": "rpx",
  "shortname": "rpx",
  "tel": "",
  "url": "rpx",
  "code": "rpx",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "342",
  "id": "4134425",
  "companyname": "日日顺物流",
  "shortname": "日日顺物流",
  "tel": "400-800-9999",
  "url": "rrs",
  "code": "rrs",
  "hasvali": 0,
  "comurl": "http://www.rrs.com/wl/fwwl",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "6080019489",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-800-9999",
  "queryurl": "http://www.rrs.com/wl/fwwl",
  "serversite": ""
}, {
  "cid": "343",
  "id": "4134450",
  "companyname": "黑猫雅玛多",
  "shortname": "黑猫雅玛多",
  "tel": "",
  "url": "yamato",
  "code": "yamato",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "410874312166",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "344",
  "id": "4134483",
  "companyname": "华通快运",
  "shortname": "华通快运",
  "tel": "",
  "url": "htongexpress",
  "code": "htongexpress",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "345",
  "id": "4134607",
  "companyname": "吉尔吉斯斯坦(Kyrgyz Post)",
  "shortname": "kyrgyzpost",
  "tel": "",
  "url": "kyrgyzpost",
  "code": "kyrgyzpost",
  "hasvali": 0,
  "comurl": "http://www.posta.kg",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.posta.kg",
  "serversite": ""
}, {
  "cid": "346",
  "id": "4134788",
  "companyname": "拉脱维亚(Latvijas Pasts)",
  "shortname": "拉脱维亚",
  "tel": "",
  "url": "latvia",
  "code": "latvia",
  "hasvali": 0,
  "comurl": "http://www.pasts.lv",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RS069553922LV",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "347",
  "id": "4134832",
  "companyname": "黎巴嫩(Liban Post)",
  "shortname": "黎巴嫩",
  "tel": "+961 1 629628",
  "url": "libanpost",
  "code": "libanpost",
  "hasvali": 0,
  "comurl": "http://www.libanpost.com.lb",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RB788837634CN",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.libanpost.com.lb",
  "serversite": ""
}, {
  "cid": "348",
  "id": "4134850",
  "companyname": "立陶宛（Lietuvos pa?tas）",
  "shortname": "立陶宛",
  "tel": "+370 700 55 400",
  "url": "lithuania",
  "code": "lithuania",
  "hasvali": 0,
  "comurl": "http://www.post.lt",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RN007871333LT",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "349",
  "id": "4134864",
  "companyname": "马尔代夫(Maldives Post)",
  "shortname": "马尔代夫",
  "tel": "+960 331 5555",
  "url": "maldives",
  "code": "maldives",
  "hasvali": 0,
  "comurl": "https://www.maldivespost.com/store/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CP283371400CN",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "https://www.maldivespost.com/store/",
  "serversite": ""
}, {
  "cid": "350",
  "id": "4134881",
  "companyname": "马耳他（Malta Post）",
  "shortname": "马耳他",
  "tel": "800 7 22 44",
  "url": "malta",
  "code": "malta",
  "hasvali": 0,
  "comurl": "http://maltapost.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CF160012216MT",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "351",
  "id": "4134992",
  "companyname": "马其顿(Macedonian Post)",
  "shortname": "马其顿",
  "tel": "",
  "url": "macedonia",
  "code": "macedonia",
  "hasvali": 0,
  "comurl": "http://www.posta.com.mk/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.posta.com.mk/",
  "serversite": ""
}, {
  "cid": "352",
  "id": "4135011",
  "companyname": "新西兰（New Zealand Post）",
  "shortname": "New Zealand Post",
  "tel": "",
  "url": "newzealand",
  "code": "newzealand",
  "hasvali": 0,
  "comurl": "https://www.nzpost.co.nz",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EP318770974NZ",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.nzpost.co.nz/tools/tracking?utm_source=sitebar_ph=sitebar=tracking",
  "serversite": ""
}, {
  "cid": "353",
  "id": "4135102",
  "companyname": "摩尔多瓦(Posta Moldovei)",
  "shortname": "摩尔多瓦",
  "tel": "+373 - 22 270 044",
  "url": "moldova",
  "code": "moldova",
  "hasvali": 0,
  "comurl": "http://www.posta.md/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EE975880775US",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.posta.md/ro",
  "serversite": ""
}, {
  "cid": "354",
  "id": "4135131",
  "companyname": "孟加拉国(EMS)",
  "shortname": "孟加拉国(EMS)",
  "tel": "9558006",
  "url": "bangladesh",
  "code": "bangladesh",
  "hasvali": 0,
  "comurl": "www.bangladeshpost.gov.b",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EA018481807AU",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://globaltracktrace.ptc.post/gtt.web/",
  "serversite": ""
}, {
  "cid": "355",
  "id": "4135231",
  "companyname": "塞尔维亚(PE Post of Serbia)",
  "shortname": "塞尔维亚",
  "tel": "0700 100 300",
  "url": "serbia",
  "code": "serbia",
  "hasvali": 0,
  "comurl": "http://www.posta.rs",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CC165396756RS",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "356",
  "id": "4135280",
  "companyname": "塞浦路斯(Cyprus Post)",
  "shortname": "塞浦路斯",
  "tel": "77778013",
  "url": "cypruspost",
  "code": "cypruspost",
  "hasvali": 0,
  "comurl": "http://www.mcw.gov.cy/mcw/postal/dps.nsf/index_en/index_en",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RQ000750137CY",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.mcw.gov.cy/mcw/postal/dps.nsf/page39_en/page39_en?opendocument",
  "serversite": ""
}, {
  "cid": "357",
  "id": "4135306",
  "companyname": "突尼斯EMS(Rapid-Poste)",
  "shortname": "突尼斯",
  "tel": "(+216) 71 888 888 ",
  "url": "tunisia",
  "code": "tunisia",
  "hasvali": 0,
  "comurl": "http://www.e-suivi.poste.tn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EE447520659TN",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.rapidposte.poste.tn/an/index.html",
  "serversite": ""
}, {
  "cid": "358",
  "id": "4135328",
  "companyname": "乌兹别克斯坦(Post of Uzbekistan)",
  "shortname": "乌兹别克斯坦",
  "tel": "(99871) 233 57 47",
  "url": "uzbekistan",
  "code": "uzbekistan",
  "hasvali": 0,
  "comurl": "http://www.pochta.uz/en/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RQ105168703UZ",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.pochta.uz/en/",
  "serversite": ""
}, {
  "cid": "359",
  "id": "4135437",
  "companyname": "新喀里多尼亚[法国](New Caledonia)",
  "shortname": "新喀里多尼亚[法国]",
  "tel": "",
  "url": "caledonia",
  "code": "caledonia",
  "hasvali": 0,
  "comurl": "http://www.opt.nc",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://webtrack.opt.nc/ipswebtracking",
  "serversite": ""
}, {
  "cid": "360",
  "id": "4135450",
  "companyname": "叙利亚(Syrian Post)",
  "shortname": "叙利亚",
  "tel": "",
  "url": "republic",
  "code": "republic",
  "hasvali": 0,
  "comurl": "http://www.syrianpost.gov.sy/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CP100527951SY",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "361",
  "id": "4135460",
  "companyname": "亚美尼亚(Haypost-Armenian Postal)",
  "shortname": "亚美尼亚",
  "tel": "",
  "url": "haypost",
  "code": "haypost",
  "hasvali": 0,
  "comurl": "http://www.haypost.am",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RR162422960AM",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.haypost.am/en/track-and-trace",
  "serversite": ""
}, {
  "cid": "362",
  "id": "4135464",
  "companyname": "也门(Yemen Post)",
  "shortname": "也门",
  "tel": "",
  "url": "yemen",
  "code": "yemen",
  "hasvali": 0,
  "comurl": "http://www.post.ye/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EE008515775YE",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "363",
  "id": "4135479",
  "companyname": "印度(India Post)",
  "shortname": "印度",
  "tel": "1800-11-2011",
  "url": "india",
  "code": "india",
  "hasvali": 0,
  "comurl": "http://www.indiapost.gov.in",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "ED730048598IN",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "364",
  "id": "4135533",
  "companyname": "英国(大包,EMS)",
  "shortname": "英国(大包,EMS)",
  "tel": "",
  "url": "england",
  "code": "england",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "365",
  "id": "4135567",
  "companyname": "约旦(Jordan Post)",
  "shortname": "约旦",
  "tel": "-4292044",
  "url": "jordan",
  "code": "jordan",
  "hasvali": 0,
  "comurl": "http://www.jordanpost.com.jo/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RR310432598JO",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://194.165.151.253/jordanwebtrack/WebTrack_Submit.aspx",
  "serversite": ""
}, {
  "cid": "366",
  "id": "4135574",
  "companyname": "越南小包(Vietnam Posts)",
  "shortname": "越南",
  "tel": "(+84) 1900 54 54 81",
  "url": "vietnam",
  "code": "vietnam",
  "hasvali": 0,
  "comurl": "http://www.vnpost.vn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.vnpost.vn/",
  "serversite": ""
}, {
  "cid": "367",
  "id": "4135624",
  "companyname": "黑山(Po?ta Crne Gore)",
  "shortname": "黑山",
  "tel": "",
  "url": "montenegro",
  "code": "montenegro",
  "hasvali": 0,
  "comurl": "http://www.postacg.me",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RR035827035ME",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.postacg.me",
  "serversite": ""
}, {
  "cid": "368",
  "id": "4135637",
  "companyname": "哥斯达黎加(Correos de Costa Rica)",
  "shortname": "哥斯达黎加",
  "tel": "",
  "url": "correos",
  "code": "correos",
  "hasvali": 0,
  "comurl": "https://www.correos.go.cr",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EE046324467CR",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "https://www.correos.go.cr",
  "serversite": ""
}, {
  "cid": "369",
  "id": "4148742",
  "companyname": "喜来快递",
  "shortname": "喜来快递",
  "tel": "",
  "url": "xilaikd",
  "code": "xilaikd",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "912006000000348",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "370",
  "id": "4148789",
  "companyname": "格陵兰[丹麦]（TELE Greenland A/S）",
  "shortname": "格陵兰[丹麦]",
  "tel": "",
  "url": "greenland",
  "code": "greenland",
  "hasvali": 0,
  "comurl": "http://sp.post.gl",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "371",
  "id": "4148814",
  "companyname": "菲律宾（Philippine Postal）",
  "shortname": "菲律宾",
  "tel": "",
  "url": "phlpost",
  "code": "phlpost",
  "hasvali": 0,
  "comurl": "https://www.phlpost.gov.ph",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "https://www.phlpost.gov.ph",
  "serversite": ""
}, {
  "cid": "372",
  "id": "4148832",
  "companyname": "厄瓜多尔(Correos del Ecuador)",
  "shortname": "厄瓜多尔",
  "tel": "(593-2) 3829210",
  "url": "ecuador",
  "code": "ecuador",
  "hasvali": 0,
  "comurl": "http://www.correosdelecuador.gob.ec/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RR301124849EC",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.correosdelecuador.gob.ec/",
  "serversite": ""
}, {
  "cid": "373",
  "id": "4148887",
  "companyname": "冰岛(Iceland Post)",
  "shortname": "冰岛",
  "tel": "",
  "url": "iceland",
  "code": "iceland",
  "hasvali": 0,
  "comurl": "http://www.postur.is/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.postur.is/",
  "serversite": ""
}, {
  "cid": "374",
  "id": "4148947",
  "companyname": "波兰小包(Poczta Polska)",
  "shortname": "波兰",
  "tel": "801 333 444",
  "url": "emonitoring",
  "code": "emonitoring",
  "hasvali": 0,
  "comurl": "http://www.poczta-polska.pl/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CP177122241PL",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "375",
  "id": "4148955",
  "companyname": "阿尔巴尼亚(Posta shqipatre)",
  "shortname": "阿尔巴尼亚",
  "tel": "",
  "url": "albania",
  "code": "albania",
  "hasvali": 0,
  "comurl": "http://www.postashqiptare.al/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.postashqiptare.al/",
  "serversite": ""
}, {
  "cid": "376",
  "id": "4148964",
  "companyname": "阿鲁巴[荷兰]（Post Aruba）",
  "shortname": "阿鲁巴[荷兰]",
  "tel": "+297 528-7637 ",
  "url": "aruba",
  "code": "aruba",
  "hasvali": 0,
  "comurl": "http://www.postaruba.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+297 528-7637 ",
  "queryurl": "http://www.postaruba.com",
  "serversite": ""
}, {
  "cid": "377",
  "id": "4148980",
  "companyname": "埃及（Egypt Post）",
  "shortname": "埃及",
  "tel": "23910011",
  "url": "egypt",
  "code": "egypt",
  "hasvali": 0,
  "comurl": "http://www.egyptpost.org/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.egyptpost.org/",
  "serversite": ""
}, {
  "cid": "378",
  "id": "4148988",
  "companyname": "爱尔兰(An Post)",
  "shortname": "爱尔兰",
  "tel": "+353 1850 57 58 59",
  "url": "ireland",
  "code": "ireland",
  "hasvali": 0,
  "comurl": "http://www.anpost.ie/AnPost/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EF718226834IE",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+353 1850 57 58 59",
  "queryurl": "http://www.anpost.ie/AnPost/",
  "serversite": ""
}, {
  "cid": "379",
  "id": "4148995",
  "companyname": "爱沙尼亚(Eesti Post)",
  "shortname": "爱沙尼亚",
  "tel": "",
  "url": "omniva",
  "code": "omniva",
  "hasvali": 0,
  "comurl": "https://www.omniva.ee/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RR142519770EE",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "https://www.omniva.ee/",
  "serversite": ""
}, {
  "cid": "380",
  "id": "4149088",
  "companyname": "云豹国际货运",
  "shortname": "云豹国际货运",
  "tel": "",
  "url": "leopard",
  "code": "leopard",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "75500152137",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "381",
  "id": "4149097",
  "companyname": "中外运空运",
  "shortname": "中外运空运",
  "tel": "",
  "url": "sinoairinex",
  "code": "sinoairinex",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "382",
  "id": "4149106",
  "companyname": "上海昊宏国际货物",
  "shortname": "上海昊宏国际货物",
  "tel": "",
  "url": "hyk",
  "code": "hyk",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "383",
  "id": "4149117",
  "companyname": "城晓国际快递",
  "shortname": "城晓国际快递",
  "tel": "",
  "url": "ckeex",
  "code": "ckeex",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "384",
  "id": "4173404",
  "companyname": "匈牙利（Magyar Posta）",
  "shortname": "匈牙利",
  "tel": "+36 1 421 7296 Search",
  "url": "hungary",
  "code": "hungary",
  "hasvali": 0,
  "comurl": "http://posta.hu/international",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RR280019352HU",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "385",
  "id": "4173429",
  "companyname": "澳门(Macau Post)",
  "shortname": "澳门",
  "tel": "",
  "url": "macao",
  "code": "macao",
  "hasvali": 0,
  "comurl": "http://www.macaupost.gov.mo/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RR120606485MO",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.macaupost.gov.mo/",
  "serversite": ""
}, {
  "cid": "386",
  "id": "4194642",
  "companyname": "台湾（中华邮政）",
  "shortname": "台湾",
  "tel": "",
  "url": "postserv",
  "code": "postserv",
  "hasvali": 0,
  "comurl": "http://postserv.post.gov.tw",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RA606121105TW",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://postserv.post.gov.tw",
  "serversite": ""
}, {
  "cid": "387",
  "id": "4194657",
  "companyname": "北京EMS",
  "shortname": "北京EMS",
  "tel": "010-8417 9386",
  "url": "bjemstckj",
  "code": "bjemstckj",
  "hasvali": 0,
  "comurl": "http://www.bj-cnpl.com/webpage/contactus.asp",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "010-8417 9386",
  "queryurl": "http://www.bj-cnpl.com/webpage/contactus.asp",
  "serversite": ""
}, {
  "cid": "388",
  "id": "4194695",
  "companyname": "快淘快递",
  "shortname": "快淘快递",
  "tel": "400-770-3370",
  "url": "kuaitao",
  "code": "kuaitao",
  "hasvali": 0,
  "comurl": "http://www.4007703370.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "8080007464965",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "389",
  "id": "4194702",
  "companyname": "秘鲁(SERPOST)",
  "shortname": "秘鲁",
  "tel": "511-500",
  "url": "peru",
  "code": "peru",
  "hasvali": 0,
  "comurl": "http://www.serpost.com.pe/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RR809298583PE",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.serpost.com.pe/",
  "serversite": ""
}, {
  "cid": "390",
  "id": "4194706",
  "companyname": "印度尼西亚EMS(Pos Indonesia-EMS)",
  "shortname": "印度尼西亚EMS",
  "tel": "+62 21 161",
  "url": "indonesia",
  "code": "indonesia",
  "hasvali": 0,
  "comurl": "http://ems.posindonesia.co.id/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RR023946256ID",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+62 21 161",
  "queryurl": "http://ems.posindonesia.co.id/",
  "serversite": ""
}, {
  "cid": "391",
  "id": "4194709",
  "companyname": "哈萨克斯坦(Kazpost)",
  "shortname": "哈萨克斯坦",
  "tel": "8 800 080 08 80",
  "url": "kazpost",
  "code": "kazpost",
  "hasvali": 0,
  "comurl": "http://www.kazpost.kz/en/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "LN125251682US",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "8 800 080 08 80",
  "queryurl": "http://www.kazpost.kz/en/",
  "serversite": ""
}, {
  "cid": "392",
  "id": "4249161",
  "companyname": "立白宝凯物流",
  "shortname": "立白宝凯物流",
  "tel": "020-81258022",
  "url": "lbbk",
  "code": "lbbk",
  "hasvali": 0,
  "comurl": "http://bkls.liby.com.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "20141022902",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://bkls.liby.com.cn/",
  "serversite": ""
}, {
  "cid": "393",
  "id": "4297981",
  "companyname": "百千诚物流",
  "shortname": "百千诚物流",
  "tel": "0755-2222 2232",
  "url": "bqcwl",
  "code": "bqcwl",
  "hasvali": 0,
  "comurl": "WWW.1001000.COM",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "12345678",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "394",
  "id": "4301342",
  "companyname": "皇家物流",
  "shortname": "皇家物流",
  "tel": "0755-29801942",
  "url": "pfcexpress",
  "code": "pfcexpress",
  "hasvali": 0,
  "comurl": "http://www.pfcexpress.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "6661078367333",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "395",
  "id": "4321222",
  "companyname": "法国(La Poste)",
  "shortname": "法国(小包)",
  "tel": "+33 3631",
  "url": "csuivi",
  "code": "csuivi",
  "hasvali": 0,
  "comurl": "http://www.colissimo.fr",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "LA003738926FR",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+33 3631",
  "queryurl": "http://www.colissimo.fr",
  "serversite": ""
}, {
  "cid": "396",
  "id": "4360715",
  "companyname": "奥地利(Austrian Post)",
  "shortname": "奥地利",
  "tel": "+43 810 010 100",
  "url": "austria",
  "code": "austria",
  "hasvali": 0,
  "comurl": "http://www.post.at",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CG102697953AT",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0810-010-100",
  "queryurl": "http://www.post.at",
  "serversite": ""
}, {
  "cid": "397",
  "id": "4360719",
  "companyname": "乌克兰小包、大包(UkrPoshta)",
  "shortname": "乌克兰(小包,大包)",
  "tel": "+380 (0) 800-500-440",
  "url": "ukraine",
  "code": "ukraine",
  "hasvali": 0,
  "comurl": "http://www.ukrposhta.com/www/upost_en.nsf",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RB610689498UA",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+380 (0) 800-500-440",
  "queryurl": "http://www.ukrposhta.com/www/upost_en.nsf",
  "serversite": ""
}, {
  "cid": "398",
  "id": "4360722",
  "companyname": "乌干达(Posta Uganda)",
  "shortname": "乌干达",
  "tel": "",
  "url": "uganda",
  "code": "uganda",
  "hasvali": 0,
  "comurl": "http://www.ugapost.co.ug/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.ugapost.co.ug/",
  "serversite": ""
}, {
  "cid": "399",
  "id": "4360725",
  "companyname": "阿塞拜疆EMS(EMS AzerExpressPost)",
  "shortname": "阿塞拜疆",
  "tel": "",
  "url": "azerbaijan",
  "code": "azerbaijan",
  "hasvali": 0,
  "comurl": "http://www.azems.az/en",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.azems.az/en",
  "serversite": ""
}, {
  "cid": "400",
  "id": "4360727",
  "companyname": "芬兰(Itella Posti Oy)",
  "shortname": "芬兰",
  "tel": "+358 200 71000",
  "url": "finland",
  "code": "finland",
  "hasvali": 0,
  "comurl": "http://www.posti.fi/english/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "CE052141220FI",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "+358 200 71000",
  "queryurl": "http://www.posti.fi/english/",
  "serversite": ""
}, {
  "cid": "401",
  "id": "4360729",
  "companyname": "斯洛伐克(Slovenská Posta)",
  "shortname": "斯洛伐克",
  "tel": "(+421) 48 437 87 77",
  "url": "slovak",
  "code": "slovak",
  "hasvali": 0,
  "comurl": "http://www.posta.sk/en",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "(+421) 48 437 87 77",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.posta.sk/en",
  "serversite": ""
}, {
  "cid": "402",
  "id": "4364376",
  "companyname": "埃塞俄比亚(Ethiopian postal)",
  "shortname": "埃塞俄比亚",
  "tel": "",
  "url": "ethiopia",
  "code": "ethiopia",
  "hasvali": 0,
  "comurl": "http://www.ethiopostal.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.ethiopostal.com/",
  "serversite": ""
}, {
  "cid": "403",
  "id": "4364378",
  "companyname": "卢森堡(Luxembourg Post)",
  "shortname": "卢森堡",
  "tel": "8002 8004 ",
  "url": "luxembourg",
  "code": "luxembourg",
  "hasvali": 0,
  "comurl": "http://www.post.lu/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "8002 8004 ",
  "queryurl": "http://www.post.lu/",
  "serversite": ""
}, {
  "cid": "404",
  "id": "4364381",
  "companyname": "毛里求斯(Mauritius Post)",
  "shortname": "毛里求斯",
  "tel": "208 2851",
  "url": "mauritius",
  "code": "mauritius",
  "hasvali": 0,
  "comurl": "http://www.mauritiuspost.mu/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "208 2851",
  "queryurl": "http://www.mauritiuspost.mu/",
  "serversite": ""
}, {
  "cid": "405",
  "id": "4364382",
  "companyname": "文莱(Brunei Postal)",
  "shortname": "文莱",
  "tel": "673-2382888 ",
  "url": "brunei",
  "code": "brunei",
  "hasvali": 0,
  "comurl": "http://www.post.gov.bn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "673-2382888 ",
  "queryurl": "http://www.post.gov.bn/",
  "serversite": ""
}, {
  "cid": "406",
  "id": "4374487",
  "companyname": "Quantium",
  "shortname": "Quantium",
  "tel": "",
  "url": "quantium",
  "code": "quantium",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "QS2022049439NZ",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "407",
  "id": "4423947",
  "companyname": "坦桑尼亚(Tanzania Posts)",
  "shortname": "坦桑尼亚",
  "tel": "",
  "url": "tanzania",
  "code": "tanzania",
  "hasvali": 0,
  "comurl": "http://www.posta.co.tz",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.posta.co.tz/",
  "serversite": ""
}, {
  "cid": "408",
  "id": "4423949",
  "companyname": "阿曼(Oman Post)",
  "shortname": "阿曼",
  "tel": "24769925",
  "url": "oman",
  "code": "oman",
  "hasvali": 0,
  "comurl": "http://www.omanpost.om",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.omanpost.om/tabid/93/Default.aspx",
  "serversite": ""
}, {
  "cid": "409",
  "id": "4423950",
  "companyname": "直布罗陀[英国]( Royal Gibraltar Post)",
  "shortname": "直布罗陀[英国]",
  "tel": "",
  "url": "gibraltar",
  "code": "gibraltar",
  "hasvali": 0,
  "comurl": "http://www.post.gi/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.post.gi/products-and-services/track-and-trace/track-trace-results/",
  "serversite": ""
}, {
  "cid": "410",
  "id": "4423953",
  "companyname": "博源恒通",
  "shortname": "博源恒通",
  "tel": "15834177000",
  "url": "byht",
  "code": "byht",
  "hasvali": 0,
  "comurl": "http://www.56soft.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "BT0000457415",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "411",
  "id": "4423956",
  "companyname": "越南EMS(VNPost Express)",
  "shortname": "越南EMS",
  "tel": "",
  "url": "vnpost",
  "code": "vnpost",
  "hasvali": 0,
  "comurl": "http://www.ems.com.vn/default.aspx",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.ems.com.vn/default.aspx",
  "serversite": ""
}, {
  "cid": "412",
  "id": "4423958",
  "companyname": "安迅物流",
  "shortname": "安迅物流",
  "tel": "010-59288730",
  "url": "anxl",
  "code": "anxl",
  "hasvali": 0,
  "comurl": "http://www.anxl.com.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "515082851025234801",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.anxl.com.cn/",
  "serversite": ""
}, {
  "cid": "413",
  "id": "4423959",
  "companyname": "达方物流",
  "shortname": "达方物流",
  "tel": "400 700 7049",
  "url": "dfpost",
  "code": "dfpost",
  "hasvali": 0,
  "comurl": "http://www.dfpost.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400 700 7049",
  "queryurl": "http://www.dfpost.com/",
  "serversite": ""
}, {
  "cid": "414",
  "id": "4432672",
  "companyname": "兰州伙伴物流",
  "shortname": "兰州伙伴物流",
  "tel": "0931-5345730/32",
  "url": "huoban",
  "code": "huoban",
  "hasvali": 0,
  "comurl": "http://www.lzhbwl.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "JR1400027018",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0931-5345730/32",
  "queryurl": "http://www.lzhbwl.com/",
  "serversite": ""
}, {
  "cid": "415",
  "id": "4432674",
  "companyname": "天纵物流",
  "shortname": "天纵物流",
  "tel": "400-990-8816",
  "url": "tianzong",
  "code": "tianzong",
  "hasvali": 0,
  "comurl": "http://www.tianzong56.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "300000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "416",
  "id": "4433497",
  "companyname": "波黑(JP BH Posta)",
  "shortname": "波黑",
  "tel": "",
  "url": "bohei",
  "code": "bohei",
  "hasvali": 0,
  "comurl": "http://www.posta.ba/pocetna/2/0/0.html",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.posta.ba/pocetna/2/0/0.html",
  "serversite": ""
}, {
  "cid": "417",
  "id": "4433500",
  "companyname": "玻利维亚",
  "shortname": "玻利维亚",
  "tel": "",
  "url": "bolivia",
  "code": "bolivia",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "418",
  "id": "4433501",
  "companyname": "柬埔寨(Cambodia Post)",
  "shortname": "柬埔寨",
  "tel": "",
  "url": "cambodia",
  "code": "cambodia",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "419",
  "id": "4436254",
  "companyname": "巴林(Bahrain Post)",
  "shortname": "巴林",
  "tel": "",
  "url": "bahrain",
  "code": "bahrain",
  "hasvali": 0,
  "comurl": "http://mot.gov.bh/en",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://mot.gov.bh/en",
  "serversite": ""
}, {
  "cid": "420",
  "id": "4436257",
  "companyname": "纳米比亚(NamPost)",
  "shortname": "纳米比亚",
  "tel": "+264 61 201 3042",
  "url": "namibia",
  "code": "namibia",
  "hasvali": 0,
  "comurl": "https://www.nampost.com.na/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "https://www.nampost.com.na/",
  "serversite": ""
}, {
  "cid": "421",
  "id": "4436260",
  "companyname": "卢旺达(Rwanda i-posita)",
  "shortname": "卢旺达",
  "tel": "",
  "url": "rwanda",
  "code": "rwanda",
  "hasvali": 0,
  "comurl": "http://i-posita.rw/spip.php?article97",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://i-posita.rw/spip.php?article97",
  "serversite": ""
}, {
  "cid": "422",
  "id": "4436261",
  "companyname": "莱索托(Lesotho Post)",
  "shortname": "莱索托",
  "tel": "",
  "url": "lesotho",
  "code": "lesotho",
  "hasvali": 0,
  "comurl": "http://lesothopost.org.ls/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://lesothopost.org.ls/",
  "serversite": ""
}, {
  "cid": "423",
  "id": "4436262",
  "companyname": "肯尼亚(POSTA KENYA)",
  "shortname": "肯尼亚",
  "tel": "",
  "url": "kenya",
  "code": "kenya",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "424",
  "id": "4436266",
  "companyname": "喀麦隆(CAMPOST)",
  "shortname": "喀麦隆",
  "tel": "",
  "url": "cameroon",
  "code": "cameroon",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "425",
  "id": "4436268",
  "companyname": "伯利兹(Belize Postal)",
  "shortname": "伯利兹",
  "tel": "",
  "url": "belize",
  "code": "belize",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "426",
  "id": "4436273",
  "companyname": "巴拉圭(Correo Paraguayo)",
  "shortname": "巴拉圭",
  "tel": "",
  "url": "paraguay",
  "code": "paraguay",
  "hasvali": 0,
  "comurl": "http://www.correoparaguayo.gov.py/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.correoparaguayo.gov.py/",
  "serversite": ""
}, {
  "cid": "427",
  "id": "4547765",
  "companyname": "十方通物流",
  "shortname": "十方通物流",
  "tel": "",
  "url": "sfift",
  "code": "sfift",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "1300032142",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "428",
  "id": "4547768",
  "companyname": "飞鹰物流",
  "shortname": "飞鹰物流",
  "tel": "400-6291-666",
  "url": "hnfy",
  "code": "hnfy",
  "hasvali": 0,
  "comurl": "http://www.hnfy56.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "515000056942",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "429",
  "id": "4547770",
  "companyname": "UPS i-parcel",
  "shortname": "UPS i-parcel",
  "tel": "400-078-1183",
  "url": "iparcel",
  "code": "iparcel",
  "hasvali": 0,
  "comurl": "http://www.i-parcel.com/en/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "AGSEWR40000920304",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-078-1183",
  "queryurl": "http://www.i-parcel.com/en/",
  "serversite": ""
}, {
  "cid": "430",
  "id": "4547771",
  "companyname": "鑫锐达",
  "shortname": "鑫锐达",
  "tel": "",
  "url": "bjxsrd",
  "code": "bjxsrd",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "090402173868",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "431",
  "id": "4792731",
  "companyname": "麦力快递",
  "shortname": "麦力快递",
  "tel": "400-0000-900",
  "url": "mailikuaidi",
  "code": "mailikuaidi",
  "hasvali": 0,
  "comurl": "http://www.mailikuaidi.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "808003139075",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "339",
  "id": "4792742",
  "companyname": "瑞丰速递",
  "shortname": "瑞丰速递",
  "tel": "400-063-9000",
  "url": "rfsd",
  "code": "rfsd",
  "hasvali": 0,
  "comurl": "http://www.rfsd88.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "8803441415",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-063-9000",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "432",
  "id": "4792761",
  "companyname": "美联快递",
  "shortname": "美联快递",
  "tel": "",
  "url": "letseml",
  "code": "letseml",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "ML150909061US",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "433",
  "id": "4792765",
  "companyname": "CNPEX中邮快递",
  "shortname": "CNPEX中邮快递",
  "tel": "",
  "url": "cnpex",
  "code": "cnpex",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "660001535854",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "434",
  "id": "4792770",
  "companyname": "鑫世锐达",
  "shortname": "鑫世锐达",
  "tel": "",
  "url": "xsrd",
  "code": "xsrd",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "435",
  "id": "4843422",
  "companyname": "同舟行物流",
  "shortname": "同舟行物流",
  "tel": "18062512813/18062699168",
  "url": "chinatzx",
  "code": "chinatzx",
  "hasvali": 0,
  "comurl": "http://www.chinatzx.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "20015009",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "18062699168",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "436",
  "id": "4843427",
  "companyname": "秦邦快运",
  "shortname": "秦邦快运",
  "tel": "",
  "url": "qbexpress",
  "code": "qbexpress",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "029202212553",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "437",
  "id": "4843429",
  "companyname": "大达物流",
  "shortname": "大达物流",
  "tel": "400-098-5656",
  "url": "idada",
  "code": "idada",
  "hasvali": 0,
  "comurl": "http://www.idada56.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "03698745",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-098-5656",
  "queryurl": "http://www.idada56.com/",
  "serversite": ""
}, {
  "cid": "438",
  "id": "4889682",
  "companyname": "skynet",
  "shortname": "skynet",
  "tel": "",
  "url": "skynet",
  "code": "skynet",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "439",
  "id": "4969742",
  "companyname": "红马速递",
  "shortname": "红马速递",
  "tel": "",
  "url": "nedahm",
  "code": "nedahm",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "880000000000",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "440",
  "id": "4969746",
  "companyname": "云南中诚",
  "shortname": "云南中诚",
  "tel": "",
  "url": "czwlyn",
  "code": "czwlyn",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "1511060138579",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "441",
  "id": "4969748",
  "companyname": "万博快递",
  "shortname": "万博快递",
  "tel": "",
  "url": "wanboex",
  "code": "wanboex",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "1508181283202",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "442",
  "id": "4969749",
  "companyname": "腾达速递",
  "shortname": "腾达速递",
  "tel": "",
  "url": "nntengda",
  "code": "nntengda",
  "hasvali": 0,
  "comurl": "http://www.nntengda.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "33121263517",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "443",
  "id": "4969751",
  "companyname": "郑州速捷",
  "shortname": "郑州速捷",
  "tel": "",
  "url": "sujievip",
  "code": "sujievip",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "515111311542051501",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "444",
  "id": "4994443",
  "companyname": "UBI Australia",
  "shortname": "UBI Australia",
  "tel": "",
  "url": "gotoubi",
  "code": "gotoubi",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "445",
  "id": "4999566",
  "companyname": "ECMS Express",
  "shortname": "ecmsglobal",
  "tel": "",
  "url": "ecmsglobal",
  "code": "ecmsglobal",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "APELAX1040329689",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "446",
  "id": "5146014",
  "companyname": "速派快递(FastGo)",
  "shortname": "FastGo",
  "tel": "400 886 3278 ",
  "url": "fastgo",
  "code": "fastgo",
  "hasvali": 0,
  "comurl": "http://www.fastgo.com.au",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "AC022150 ",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.fastgo.com.au",
  "serversite": ""
}, {
  "cid": "447",
  "id": "5239760",
  "companyname": "易客满",
  "shortname": "易客满",
  "tel": "86+(400) 086-1756",
  "url": "ecmscn",
  "code": "ecmscn",
  "hasvali": 0,
  "comurl": "http://www.trans4e.com/cn/index.html",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "APECHI1210107905",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "86+(400) 086-1756",
  "queryurl": "http://www.trans4e.com/cn/index.html",
  "serversite": ""
}, {
  "cid": "448",
  "id": "5240945",
  "companyname": "俄顺达",
  "shortname": "俄顺达",
  "tel": "0592-5798079",
  "url": "eshunda",
  "code": "eshunda",
  "hasvali": 0,
  "comurl": "http://www.007ex.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0592-5798079",
  "queryurl": "http://www.007ex.com/",
  "serversite": ""
}, {
  "cid": "449",
  "id": "5240960",
  "companyname": "速腾物流",
  "shortname": "速腾物流",
  "tel": "4001136666",
  "url": "suteng",
  "code": "suteng",
  "hasvali": 0,
  "comurl": "http://www.ste56.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "9809903615",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.ste56.com",
  "serversite": ""
}, {
  "cid": "450",
  "id": "5240969",
  "companyname": "新鹏快递",
  "shortname": "新鹏快递",
  "tel": "",
  "url": "gdxp",
  "code": "gdxp",
  "hasvali": null,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "451",
  "id": "5468864",
  "companyname": "美国韵达",
  "shortname": "美国韵达",
  "tel": "888-408-3332",
  "url": "yundaexus",
  "code": "yundaexus",
  "hasvali": 0,
  "comurl": "http://www.yundaex.us/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "800000620604",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "888-408-3332",
  "queryurl": "http://www.yundaex.us/",
  "serversite": ""
}, {
  "cid": "452",
  "id": "5468987",
  "companyname": "Toll",
  "shortname": "Toll",
  "tel": "",
  "url": "toll",
  "code": "toll",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "453",
  "id": "5468995",
  "companyname": "深圳DPEX",
  "shortname": "Toll",
  "tel": "",
  "url": "深圳DPEX",
  "code": "szdpex",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "5491090",
  "companyname": "百世物流",
  "shortname": "百世物流",
  "tel": "400-8856-561",
  "url": "baishiwuliu",
  "code": "baishiwuliu",
  "hasvali": 0,
  "comurl": "http://www.800best.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "10080799842",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-8856-561",
  "queryurl": "http://www.800best.com/",
  "serversite": ""
}, {
  "cid": "455",
  "id": "5536903",
  "companyname": "荷兰包裹(PostNL International Parcels)",
  "shortname": "荷兰包裹",
  "tel": "34819",
  "url": "postnlpacle",
  "code": "postnlpacle",
  "hasvali": 0,
  "comurl": "http://www.postnl.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EA038242134NL",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.postnl.com/",
  "serversite": ""
}, {
  "cid": "456",
  "id": "5536914",
  "companyname": "乐天速递",
  "shortname": "乐天速递",
  "tel": "021-62269059 ",
  "url": "ltexp",
  "code": "ltexp",
  "hasvali": 0,
  "comurl": "http://www.ltexp.com.cn ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "LT1000323844CA",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.ltexp.com.cn ",
  "serversite": ""
}, {
  "cid": "457",
  "id": "5549476",
  "companyname": "智通物流",
  "shortname": "智通物流",
  "tel": "4000561818",
  "url": "ztong",
  "code": "ztong",
  "hasvali": 0,
  "comurl": "http://www.ztong56.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "560064792696",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "4000561818",
  "queryurl": "http://www.ztong56.com",
  "serversite": ""
}, {
  "cid": "458",
  "id": "5610344",
  "companyname": "鑫通宝物流",
  "shortname": "鑫通宝物流",
  "tel": "13834168880",
  "url": "xtb",
  "code": "xtb",
  "hasvali": 0,
  "comurl": "www.xtb56.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "TB0000053304",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "13834168880",
  "queryurl": "www.xtb56.com",
  "serversite": ""
}, {
  "cid": "459",
  "id": "5690110",
  "companyname": "airpak expresss",
  "shortname": "airpak expresss",
  "tel": "",
  "url": "airpak",
  "code": "airpak",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "460",
  "id": "5690118",
  "companyname": "荷兰邮政-中国件",
  "shortname": "荷兰邮政-中国件",
  "tel": "34819",
  "url": "postnlchina",
  "code": "postnlchina",
  "hasvali": 0,
  "comurl": "http://www.postnl.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "3STJJG9037471",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.postnl.com/",
  "serversite": ""
}, {
  "cid": "461",
  "id": "5759725",
  "companyname": "法国小包（colissimo）",
  "shortname": "colissimo",
  "tel": "+33 3631",
  "url": "colissimo",
  "code": "colissimo",
  "hasvali": 0,
  "comurl": "http://www.colissimo.fr",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EY079906788FR",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.colissimo.fr",
  "serversite": ""
}, {
  "cid": "462",
  "id": "5760338",
  "companyname": "PCA Express",
  "shortname": "PCA Express",
  "tel": "",
  "url": "pcaexpress",
  "code": "pcaexpress",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "EAU148011966",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "463",
  "id": "5760369",
  "companyname": "韩润",
  "shortname": "韩润",
  "tel": "400-636-4311",
  "url": "hanrun",
  "code": "hanrun",
  "hasvali": 0,
  "comurl": "http://www.hr-sz.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "39",
  "id": "5764964",
  "companyname": "TNT",
  "shortname": "TNT",
  "tel": "800-820-9868",
  "url": "tnt",
  "code": "tnt",
  "hasvali": 0,
  "comurl": "http://www.tnt.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "278059110",
  "freg": "^[A-Za-z0-9]{9,20}$",
  "freginfo": "TNT快递货运单上的由9位数字组成的或者省份的首字母+9位数字+WW组成",
  "telcomplaintnum": "800-820-9868",
  "queryurl": "",
  "serversite": "http://www.tnt.com/express/zh_cn/site/home/about_us/0.html"
}, {
  "cid": "464",
  "id": "5811418",
  "companyname": "中远e环球",
  "shortname": "中远e环球",
  "tel": "",
  "url": "cosco",
  "code": "cosco",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "465",
  "id": "5811424",
  "companyname": "顺达快递",
  "shortname": "顺达快递",
  "tel": "",
  "url": "sundarexpress",
  "code": "sundarexpress",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "466",
  "id": "5811427",
  "companyname": "捷记方舟",
  "shortname": "捷记方舟",
  "tel": "",
  "url": "ajexpress",
  "code": "ajexpress",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "AJ613297AU",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "467",
  "id": "5811430",
  "companyname": "方舟速递",
  "shortname": "方舟速递",
  "tel": "",
  "url": "arkexpress",
  "code": "arkexpress",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "468",
  "id": "5811432",
  "companyname": "明大快递",
  "shortname": "明大快递",
  "tel": "",
  "url": "adaexpress",
  "code": "adaexpress",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "469",
  "id": "5811433",
  "companyname": "长江国际速递",
  "shortname": "长江国际速递",
  "tel": "",
  "url": "changjiang",
  "code": "changjiang",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "CJ000289942CN",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "470",
  "id": "5817124",
  "companyname": "八达通",
  "shortname": "八达通",
  "tel": "",
  "url": "bdatong",
  "code": "bdatong",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "R800311511070035",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "471",
  "id": "5817126",
  "companyname": "美国申通",
  "shortname": "美国申通",
  "tel": "",
  "url": "stoexpress",
  "code": "stoexpress",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "472",
  "id": "5819733",
  "companyname": "泛捷国际速递",
  "shortname": "泛捷国际速递",
  "tel": "",
  "url": "epanex",
  "code": "epanex",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "473",
  "id": "5869052",
  "companyname": "顺捷丰达",
  "shortname": "顺捷丰达",
  "tel": "0755—88999000",
  "url": "shunjiefengda",
  "code": "shunjiefengda",
  "hasvali": 0,
  "comurl": "http://www.sjfd-express.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "11535619547637",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.sjfd-express.com",
  "serversite": ""
}, {
  "cid": "474",
  "id": "5873264",
  "companyname": "华赫物流",
  "shortname": "华赫物流",
  "tel": "",
  "url": "nmhuahe",
  "code": "nmhuahe",
  "hasvali": 0,
  "comurl": "http://nmhuahe.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "3401884523",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0471-2534162  ",
  "queryurl": "http://nmhuahe.com",
  "serversite": ""
}, {
  "cid": "475",
  "id": "6027634",
  "companyname": "德国(Deutsche Post)",
  "shortname": "德国(Deutsche Post)",
  "tel": "0180 2 3333*",
  "url": "deutschepost",
  "code": "deutschepost",
  "hasvali": 0,
  "comurl": "http://www.dpdhl.com/en.html",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "EA037148565NL",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0180 2 3333*",
  "queryurl": "http://www.dpdhl.com/en.html",
  "serversite": ""
}, {
  "cid": "476",
  "id": "6048728",
  "companyname": "百腾物流",
  "shortname": "百腾物流",
  "tel": "400-9989-256",
  "url": "baitengwuliu",
  "code": "baitengwuliu",
  "hasvali": 0,
  "comurl": "http://www.beteng.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "0004287478",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.beteng.com",
  "serversite": ""
}, {
  "cid": "477",
  "id": "6083537",
  "companyname": "品骏快递",
  "shortname": "品骏快递",
  "tel": "400-9789-888",
  "url": "pjbest",
  "code": "pjbest",
  "hasvali": 0,
  "comurl": "http://www.pjbest.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "15111344414116",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "478",
  "id": "6158171",
  "companyname": "全速通",
  "shortname": "全速通",
  "tel": "",
  "url": "quansutong",
  "code": "quansutong",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "479",
  "id": "6177194",
  "companyname": "中技物流",
  "shortname": "中技物流",
  "tel": "",
  "url": "zhongjiwuliu",
  "code": "zhongjiwuliu",
  "hasvali": null,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "480",
  "id": "6179713",
  "companyname": "九曳供应链",
  "shortname": "九曳供应链",
  "tel": "4006-199-939",
  "url": "jiuyescm",
  "code": "jiuyescm",
  "hasvali": 0,
  "comurl": "http://jiuyescm.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "JY00082167",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "4006-199-939",
  "queryurl": "http://jiuyescm.com",
  "serversite": ""
}, {
  "cid": "481",
  "id": "6205187",
  "companyname": "天翼快递",
  "shortname": "天翼快递",
  "tel": "",
  "url": "tykd",
  "code": "tykd",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "482",
  "id": "6205195",
  "companyname": "德意思",
  "shortname": "德意思",
  "tel": "",
  "url": "dabei",
  "code": "dabei",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "483",
  "id": "6279371",
  "companyname": "城际快递",
  "shortname": "城际快递",
  "tel": "",
  "url": "chengji",
  "code": "chengji",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "484",
  "id": "6281132",
  "companyname": "程光快递",
  "shortname": "程光快递",
  "tel": "",
  "url": "chengguangkuaidi",
  "code": "chengguangkuaidi",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://127.0.0.1:9202/trackinfo/chengguangkuaidi",
  "serversite": ""
}, {
  "cid": "485",
  "id": "6281305",
  "companyname": "佐川急便",
  "shortname": "佐川急便",
  "tel": "",
  "url": "sagawa",
  "code": "sagawa",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "486",
  "id": "6281339",
  "companyname": "蓝天快递",
  "shortname": "蓝天快递",
  "tel": "",
  "url": "lantiankuaidi",
  "code": "lantiankuaidi",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "487",
  "id": "6281340",
  "companyname": "永昌物流",
  "shortname": "永昌物流",
  "tel": "",
  "url": "yongchangwuliu",
  "code": "yongchangwuliu",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "488",
  "id": "6281341",
  "companyname": "笨鸟海淘",
  "shortname": "笨鸟海淘",
  "tel": "4008-890-788",
  "url": "birdex",
  "code": "birdex",
  "hasvali": 0,
  "comurl": "http://birdex.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "BH1511163890",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "489",
  "id": "6281342",
  "companyname": "一正达速运",
  "shortname": "一正达速运",
  "tel": "",
  "url": "yizhengdasuyun",
  "code": "yizhengdasuyun",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "490",
  "id": "6337156",
  "companyname": "京东订单",
  "shortname": "京东订单",
  "tel": "400-606-5500",
  "url": "jdorder",
  "code": "jdorder",
  "hasvali": 0,
  "comurl": "http://m.jd.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "11182464323",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "491",
  "id": "6338318",
  "companyname": "优配速运",
  "shortname": "优配速运",
  "tel": "0531 89977777",
  "url": "sdyoupei",
  "code": "sdyoupei",
  "hasvali": 0,
  "comurl": "www.sdyoupei.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "JX13797337",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "www.sdyoupei.com",
  "serversite": ""
}, {
  "cid": "492",
  "id": "6389499",
  "companyname": "TRAKPAK",
  "shortname": "TRAKPAK",
  "tel": "",
  "url": "trakpak",
  "code": "trakpak",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "493",
  "id": "6389500",
  "companyname": "GTS快递",
  "shortname": "GTS",
  "tel": "4000-159-111",
  "url": "gts",
  "code": "gts",
  "hasvali": 0,
  "comurl": "http://www.gto315.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "1000089385",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "494",
  "id": "6389501",
  "companyname": "AOL澳通速递",
  "shortname": "AOL澳通速递",
  "tel": "0424047888",
  "url": "aolau",
  "code": "aolau",
  "hasvali": 0,
  "comurl": "http://www.aol-au.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "AT150271152SD",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "495",
  "id": "6452710",
  "companyname": "宜送物流",
  "shortname": "宜送物流",
  "tel": "4008636658",
  "url": "yiex",
  "code": "yiex",
  "hasvali": 0,
  "comurl": "http://www.yi-express.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "1531619551",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "496",
  "id": "6458964",
  "companyname": "通达兴物流",
  "shortname": "通达兴物流",
  "tel": "4001-006-609",
  "url": "tongdaxing",
  "code": "tongdaxing",
  "hasvali": 0,
  "comurl": "http://www.tongdaxing.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "200100002541",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "4001-006-609",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "497",
  "id": "6488777",
  "companyname": "香港(HongKong Post)英文",
  "shortname": "香港(HongKong Post)英文",
  "tel": "",
  "url": "hkposten",
  "code": "hkposten",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "RC228951871HK ",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "498",
  "id": "6505056",
  "companyname": "苏宁订单",
  "shortname": "苏宁订单",
  "tel": "4008-365-365",
  "url": "suningorder",
  "code": "suningorder",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "1025331562-0",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "4008-365-365",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "499",
  "id": "6510590",
  "companyname": "飞力士物流",
  "shortname": "飞力士物流",
  "tel": "86-755-83448000",
  "url": "flysman",
  "code": "flysman",
  "hasvali": 0,
  "comurl": "http://www.flysman.com.cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "1000159522",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "500",
  "id": "6526029",
  "companyname": "转运四方",
  "shortname": "转运四方",
  "tel": "",
  "url": "zhuanyunsifang",
  "code": "zhuanyunsifang",
  "hasvali": 0,
  "comurl": "http://www.transrush.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "DD151017515477",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "501",
  "id": "6534352",
  "companyname": "logen路坚",
  "shortname": "logen路坚",
  "tel": "",
  "url": "ilogen",
  "code": "ilogen",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "6565867",
  "companyname": "成都东骏物流",
  "shortname": "成都东骏物流",
  "tel": "028-85538888",
  "url": "dongjun",
  "code": "dongjun",
  "hasvali": 0,
  "comurl": "http://www.dj56.cc/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "028-85887608",
  "queryurl": "http://www.dj56.cc/",
  "serversite": ""
}, {
  "cid": "503",
  "id": "6565868",
  "companyname": "日本郵便",
  "shortname": "日本郵便",
  "tel": "",
  "url": "japanpost",
  "code": "japanpost",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "EL030197536JP",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "504",
  "id": "6656471",
  "companyname": "佳家通货运",
  "shortname": "佳家通货运",
  "tel": "4008-056-356",
  "url": "jiajiatong56",
  "code": "jiajiatong56",
  "hasvali": 0,
  "comurl": "http://www.jiajiatong56.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.jiajiatong56.com/",
  "serversite": ""
}, {
  "cid": "505",
  "id": "6656472",
  "companyname": "吉日优派",
  "shortname": "吉日优派",
  "tel": "400-0531-951",
  "url": "jrypex",
  "code": "jrypex",
  "hasvali": 0,
  "comurl": "http://www.jrypex.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "159-6531-6532",
  "queryurl": "http://www.jrypex.com",
  "serversite": ""
}, {
  "cid": "506",
  "id": "6656473",
  "companyname": "西安胜峰",
  "shortname": "西安胜峰",
  "tel": "400-029-8171",
  "url": "xaetc",
  "code": "xaetc",
  "hasvali": 0,
  "comurl": "http://www.xaetc.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "029-68738585",
  "queryurl": "http://www.xaetc.cn/",
  "serversite": ""
}, {
  "cid": "507",
  "id": "6687463",
  "companyname": "CJ物流",
  "shortname": "CJ物流",
  "tel": "",
  "url": "doortodoor",
  "code": "doortodoor",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "508",
  "id": "6697009",
  "companyname": "信天捷快递",
  "shortname": "信天捷快递",
  "tel": "400-718-7518",
  "url": "xintianjie",
  "code": "xintianjie",
  "hasvali": 0,
  "comurl": "http:/www.bjxintianjie.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-718-7518",
  "queryurl": "http:/www.bjxintianjie.com",
  "serversite": ""
}, {
  "cid": "509",
  "id": "6697010",
  "companyname": "泰国138国际物流",
  "shortname": "泰国138国际物流",
  "tel": "66880089916 ",
  "url": "sd138",
  "code": "sd138",
  "hasvali": 0,
  "comurl": "http://www.138sd.net/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "66961799756",
  "queryurl": "http://www.138sd.net/",
  "serversite": ""
}, {
  "cid": "510",
  "id": "6697011",
  "companyname": "猴急送",
  "shortname": "猴急送",
  "tel": "400-8888-798",
  "url": "hjs",
  "code": "hjs",
  "hasvali": 0,
  "comurl": "http://www.hjs777.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0731-55573559",
  "queryurl": "http://www.hjs777.com",
  "serversite": ""
}, {
  "cid": "511",
  "id": "6697012",
  "companyname": "全信通快递",
  "shortname": "全信通快递",
  "tel": "400-882-6886",
  "url": "quanxintong",
  "code": "quanxintong",
  "hasvali": 0,
  "comurl": "http://www.all-express.com.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-882-6886",
  "queryurl": "http://www.all-express.com.cn/",
  "serversite": ""
}, {
  "cid": "512",
  "id": "6701507",
  "companyname": "amazon-国际订单",
  "shortname": "amazon-国际订单",
  "tel": "400-910-5668 ",
  "url": "amusorder",
  "code": "amusorder",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-910-5668 ",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "513",
  "id": "6730874",
  "companyname": "骏丰国际速递",
  "shortname": "骏丰国际速递",
  "tel": "0773-2218104",
  "url": "junfengguoji",
  "code": "junfengguoji",
  "hasvali": 0,
  "comurl": "http://www.peakmorepost.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0773-2218104",
  "queryurl": "http://www.peakmorepost.com/",
  "serversite": ""
}, {
  "cid": "514",
  "id": "6752220",
  "companyname": "货运皇",
  "shortname": "货运皇",
  "tel": "",
  "url": "kingfreight",
  "code": "kingfreight",
  "hasvali": 0,
  "comurl": "http://www.kingfreight.com.au/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.kingfreight.com.au/ ",
  "serversite": ""
}, {
  "cid": "515",
  "id": "6781447",
  "companyname": "远成快运",
  "shortname": "远成快运",
  "tel": "",
  "url": "ycexpress",
  "code": "ycexpress",
  "hasvali": 0,
  "comurl": "http://www.ycgky.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.ycgky.com/",
  "serversite": ""
}, {
  "cid": "516",
  "id": "6796744",
  "companyname": "速必达",
  "shortname": "速必达",
  "tel": "0752-3270594",
  "url": "subida",
  "code": "subida",
  "hasvali": 0,
  "comurl": "http://www.speedex.com.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0752-3262604",
  "queryurl": "http://www.speedex.com.cn/",
  "serversite": ""
}, {
  "cid": "517",
  "id": "6823113",
  "companyname": "特急便物流",
  "shortname": "特急便物流",
  "tel": "",
  "url": "sucmj",
  "code": "sucmj",
  "hasvali": 0,
  "comurl": "http://www.sucmj.com/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.sucmj.com/ ",
  "serversite": ""
}, {
  "cid": "518",
  "id": "6829573",
  "companyname": "亚马逊中国",
  "shortname": "亚马逊中国",
  "tel": "400-910-5669",
  "url": "yamaxunwuliu",
  "code": "yamaxunwuliu",
  "hasvali": 0,
  "comurl": "http://www.z-exp.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.z-exp.com/",
  "serversite": ""
}, {
  "cid": "519",
  "id": "6866441",
  "companyname": "锦程物流",
  "shortname": "锦程物流",
  "tel": "400-020-5556",
  "url": "jinchengwuliu",
  "code": "jinchengwuliu",
  "hasvali": 0,
  "comurl": "http://www.jc56.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.jc56.com/",
  "serversite": "http://www.jc56.com/GlobalNetwork.html"
}, {
  "cid": "520",
  "id": "6887562",
  "companyname": "景光物流",
  "shortname": "景光物流",
  "tel": "400-700-1682 ",
  "url": "jgwl",
  "code": "jgwl",
  "hasvali": 0,
  "comurl": "http://www.jgwl.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.jgwl.cn/",
  "serversite": ""
}, {
  "cid": "521",
  "id": "6887563",
  "companyname": "御风速运",
  "shortname": "御风速运",
  "tel": "400-611-3348",
  "url": "yufeng",
  "code": "yufeng",
  "hasvali": 0,
  "comurl": "http://www.shyfwl.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "15237189196",
  "queryurl": "http://www.shyfwl.cn/",
  "serversite": ""
}, {
  "cid": "522",
  "id": "6887564",
  "companyname": "至诚通达快递",
  "shortname": "至诚通达快递",
  "tel": "400-151-8918 ",
  "url": "zhichengtongda",
  "code": "zhichengtongda",
  "hasvali": 0,
  "comurl": "http://www.zhichengtongda.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "02029816972 ",
  "queryurl": "http://www.zhichengtongda.com/",
  "serversite": ""
}, {
  "cid": "523",
  "id": "6971343",
  "companyname": "日益通速递",
  "shortname": "日益通速递",
  "tel": "400-041-5858 ",
  "url": "rytsd",
  "code": "rytsd",
  "hasvali": 0,
  "comurl": "http://www.rytbj.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.rytbj.com/",
  "serversite": ""
}, {
  "cid": "524",
  "id": "6971344",
  "companyname": "航宇快递",
  "shortname": "航宇快递",
  "tel": "021-54478850",
  "url": "hangyu",
  "code": "hangyu",
  "hasvali": 0,
  "comurl": "http://www.hyexp.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": " 13122417950",
  "queryurl": "http://www.hyexp.cn/",
  "serversite": ""
}, {
  "cid": "525",
  "id": "6971345",
  "companyname": "急顺通",
  "shortname": "急顺通",
  "tel": "0812-6688669",
  "url": "pzhjst",
  "code": "pzhjst",
  "hasvali": 0,
  "comurl": "http://www.pzhjst.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0812-3358333",
  "queryurl": "http://www.pzhjst.com/",
  "serversite": ""
}, {
  "cid": "526",
  "id": "6971346",
  "companyname": "优速通达",
  "shortname": "优速通达",
  "tel": "400-651-8331",
  "url": "yousutongda",
  "code": "yousutongda",
  "hasvali": 0,
  "comurl": "http://www.yousutongda8.com/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.yousutongda8.com/ ",
  "serversite": ""
}, {
  "cid": "0",
  "id": "6987636",
  "companyname": "秦远物流",
  "shortname": "秦远物流",
  "tel": "09-8372888",
  "url": "qinyuan",
  "code": "qinyuan",
  "hasvali": 0,
  "comurl": "http://www.chinz56.co.nz/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.chinz56.co.nz/",
  "serversite": ""
}, {
  "cid": "0",
  "id": "6987637",
  "companyname": "澳邮中国快运",
  "shortname": "澳邮中国快运",
  "tel": "400-622-6193",
  "url": "auexpress",
  "code": "auexpress",
  "hasvali": 0,
  "comurl": "http://www.auexpress.com.au/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.auexpress.com.au/",
  "serversite": ""
}, {
  "cid": "529",
  "id": "6987638",
  "companyname": "众辉达物流",
  "shortname": "众辉达物流",
  "tel": "400-622-6193",
  "url": "zhdwl",
  "code": "zhdwl",
  "hasvali": 0,
  "comurl": "http://www.zhdpt.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.zhdpt.com/",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7020750",
  "companyname": "飞邦快递",
  "shortname": "飞邦快递",
  "tel": "400-016-8756",
  "url": "fbkd",
  "code": "fbkd",
  "hasvali": 0,
  "comurl": "http://www.fbkd.net/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.fbkd.net/",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7020751",
  "companyname": "华达快运",
  "shortname": "华达快运",
  "tel": "400-895-1110",
  "url": "huada",
  "code": "huada",
  "hasvali": 0,
  "comurl": "http://www.zz-huada.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.zz-huada.com/",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7027601",
  "companyname": "FOX国际快递",
  "shortname": "FOX国际快递",
  "tel": "400-965-8885",
  "url": "fox",
  "code": "fox",
  "hasvali": 0,
  "comurl": "http://www.foxglobal.nl/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "0800 5188",
  "queryurl": "http://www.foxglobal.nl/",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7034870",
  "companyname": "环球速运",
  "shortname": "环球速运",
  "tel": "139-1076-0364",
  "url": "huanqiu",
  "code": "huanqiu",
  "hasvali": 0,
  "comurl": "http://www.pantoscn.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.pantoscn.com/",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7034871",
  "companyname": "辉联物流",
  "shortname": "辉联物流",
  "tel": "139-1076-0364",
  "url": "huilian",
  "code": "huilian",
  "hasvali": 0,
  "comurl": "http://www.pantoscn.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.pantoscn.com/",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7052894",
  "companyname": "A2U速递",
  "shortname": "A2U速递",
  "tel": "03 9877 4330",
  "url": "a2u",
  "code": "a2u",
  "hasvali": 0,
  "comurl": "http://www.a2u.com.au/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7072005",
  "companyname": "UEQ快递",
  "shortname": "UEQ快递",
  "tel": "020-37639835",
  "url": "ueq",
  "code": "ueq",
  "hasvali": 0,
  "comurl": "http://www.ueq.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.ueq.com/",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7072006",
  "companyname": "中加国际快递",
  "shortname": "中加国际快递",
  "tel": "(604) 207-0338",
  "url": "scic",
  "code": "scic",
  "hasvali": 0,
  "comurl": "http://scicglobal.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://scicglobal.com/",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7072007",
  "companyname": "易达通",
  "shortname": "易达通",
  "tel": "",
  "url": "yidatong",
  "code": "yidatong",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": "http://www.qexpress.co.nz/"
}, {
  "cid": "0",
  "id": "7072008",
  "companyname": "宜送",
  "shortname": "宜送",
  "tel": "",
  "url": "yisong",
  "code": "yisong",
  "hasvali": 0,
  "comurl": "http://www.yi-express.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7077095",
  "companyname": "捷网俄全通",
  "shortname": "捷网俄全通",
  "tel": "4007287156",
  "url": "ruexp",
  "code": "ruexp",
  "hasvali": 0,
  "comurl": "http://www.ruexp.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "13641831939",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7087099",
  "companyname": "华通务达物流",
  "shortname": "华通务达物流",
  "tel": "0351-5603868",
  "url": "htwd",
  "code": "htwd",
  "hasvali": 0,
  "comurl": "http://www.htwd56.com/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7087100",
  "companyname": "申必达",
  "shortname": "申必达",
  "tel": "713-482-1198",
  "url": "speedoex",
  "code": "speedoex",
  "hasvali": 0,
  "comurl": "http://www.speedoex.com/cn",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7087101",
  "companyname": "联运快递",
  "shortname": "联运快递",
  "tel": " (02) 8541 8607 ",
  "url": "lianyun",
  "code": "lianyun",
  "hasvali": 0,
  "comurl": "http://121.40.93.72/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7087102",
  "companyname": "捷安达",
  "shortname": "捷安达",
  "tel": "03 9544 8304",
  "url": "jieanda",
  "code": "jieanda",
  "hasvali": 0,
  "comurl": "http://www.giantpost.com.au/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7087103",
  "companyname": "SHL畅灵国际物流",
  "shortname": "SHL畅灵国际物流",
  "tel": "400-098-5066",
  "url": "shlexp",
  "code": "shlexp",
  "hasvali": 0,
  "comurl": "http://www.shlexp.com/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7087104",
  "companyname": "EWE全球快递",
  "shortname": "EWE全球快递",
  "tel": "(02) 9644 2648",
  "url": "ewe",
  "code": "ewe",
  "hasvali": 0,
  "comurl": "https://www.everfast.com.au/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7095219",
  "companyname": "全球快运",
  "shortname": "全球快运",
  "tel": "626-363-4161",
  "url": "abcglobal",
  "code": "abcglobal",
  "hasvali": 0,
  "comurl": "http://www.abcglobalexpress.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7095220",
  "companyname": "芒果速递",
  "shortname": "芒果速递",
  "tel": "",
  "url": "mangguo",
  "code": "mangguo",
  "hasvali": 0,
  "comurl": "http://mangoex.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7095221",
  "companyname": "金海淘",
  "shortname": "金海淘",
  "tel": "626-330-7733",
  "url": "goldhaitao",
  "code": "goldhaitao",
  "hasvali": 0,
  "comurl": "http://www.goldhaitao.us/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7095222",
  "companyname": "极光转运",
  "shortname": "极光转运",
  "tel": "0755-86535662 ",
  "url": "jiguang",
  "code": "jiguang",
  "hasvali": 0,
  "comurl": "http://www.jiguangus.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7095223",
  "companyname": "富腾达国际货运",
  "shortname": "富腾达国际货运",
  "tel": "09-4432342",
  "url": "ftd",
  "code": "ftd",
  "hasvali": 0,
  "comurl": "http://www.ftdlogistics.co.nz/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7095224",
  "companyname": "DCS",
  "shortname": "DCS",
  "tel": "400-678-0856",
  "url": "dcs",
  "code": "dcs",
  "hasvali": 0,
  "comurl": "http://www.dcslogistics.us/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7098838",
  "companyname": "成达国际速递",
  "shortname": "成达国际速递",
  "tel": "00852-56078835 ",
  "url": "chengda",
  "code": "chengda",
  "hasvali": 0,
  "comurl": "http://www.chengda-express.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7098839",
  "companyname": "中环快递",
  "shortname": "中环快递",
  "tel": "400-007-9988",
  "url": "zhonghuan",
  "code": "zhonghuan",
  "hasvali": 0,
  "comurl": "http://www.zhexpress.com.au/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7098840",
  "companyname": "顺邦国际物流",
  "shortname": "顺邦国际物流",
  "tel": "95040391701",
  "url": "shunbang",
  "code": "shunbang",
  "hasvali": 0,
  "comurl": "http://shunbangus.com/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7098841",
  "companyname": "启辰国际速递",
  "shortname": "启辰国际速递",
  "tel": "",
  "url": "qichen",
  "code": "qichen",
  "hasvali": 0,
  "comurl": "http://www.qichen.hk/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7099125",
  "companyname": "澳货通",
  "shortname": "澳货通",
  "tel": "",
  "url": "auex",
  "code": "auex",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7099129",
  "companyname": "澳速物流",
  "shortname": "澳速物流",
  "tel": "",
  "url": "aosu",
  "code": "aosu",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7099131",
  "companyname": "澳世速递",
  "shortname": "澳世速递",
  "tel": "",
  "url": "aus",
  "code": "aus",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7120503",
  "companyname": "当当",
  "shortname": "当当",
  "tel": "",
  "url": "dangdang",
  "code": "dangdang",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7130320",
  "companyname": "天马迅达",
  "shortname": "天马迅达",
  "tel": "",
  "url": "tianma",
  "code": "tianma",
  "hasvali": 0,
  "comurl": "http://www.expresstochina.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7133278",
  "companyname": "美龙快递",
  "shortname": "美龙快递",
  "tel": "323-208-9848",
  "url": "mjexp",
  "code": "mjexp",
  "hasvali": 0,
  "comurl": "http://www.mjexp.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7137931",
  "companyname": "唯品会(vip)",
  "shortname": "唯品会(vip)",
  "tel": "",
  "url": "vipshop",
  "code": "vipshop",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7140116",
  "companyname": "香港骏辉物流",
  "shortname": "香港骏辉物流",
  "tel": "",
  "url": "chunfai",
  "code": "chunfai",
  "hasvali": 0,
  "comurl": "http://www.chunfai.hk/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7140118",
  "companyname": "三三国际物流",
  "shortname": "三三国际物流",
  "tel": "",
  "url": "zenzen",
  "code": "zenzen",
  "hasvali": 0,
  "comurl": "http://zenzen.hk/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7159377",
  "companyname": "淼信快递",
  "shortname": "淼信快递",
  "tel": "",
  "url": "mxe56",
  "code": "mxe56",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7159378",
  "companyname": "海派通",
  "shortname": "海派通",
  "tel": "021-54723815",
  "url": "hipito",
  "code": "hipito",
  "hasvali": 0,
  "comurl": "http://www.hipito.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.hipito.com/",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7162726",
  "companyname": "国美",
  "shortname": "国美",
  "tel": "",
  "url": "gome",
  "code": "gome",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7164764",
  "companyname": "鹏程快递",
  "shortname": "鹏程快递",
  "tel": "0800-166-188",
  "url": "pengcheng",
  "code": "pengcheng",
  "hasvali": 0,
  "comurl": "http://www.pcexpress.co.nz/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7164765",
  "companyname": "冠庭国际物流",
  "shortname": "冠庭国际物流",
  "tel": "00852-2318 1213",
  "url": "guanting",
  "code": "guanting",
  "hasvali": 0,
  "comurl": "http://www.quantiumsolutions.com/hk-sc/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7169694",
  "companyname": "1号店",
  "shortname": "1号店",
  "tel": "",
  "url": "yhdshop",
  "code": "yhdshop",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7172420",
  "companyname": "金岸物流",
  "shortname": "金岸物流",
  "tel": "626-818-2750",
  "url": "jinan",
  "code": "jinan",
  "hasvali": 0,
  "comurl": "http://www.gpl-express.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7172421",
  "companyname": "海带宝",
  "shortname": "海带宝",
  "tel": "400-825-8585",
  "url": "haidaibao",
  "code": "haidaibao",
  "hasvali": 0,
  "comurl": "http://www.haidaibao.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7172422",
  "companyname": "澳通华人物流",
  "shortname": "澳通华人物流",
  "tel": "61 8 9457 9339",
  "url": "cllexpress",
  "code": "cllexpress",
  "hasvali": 0,
  "comurl": "http://www.cllexpress.com.au/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7172423",
  "companyname": "斑马物流",
  "shortname": "斑马物流",
  "tel": "",
  "url": "banma",
  "code": "banma",
  "hasvali": 0,
  "comurl": "http://www.360zebra.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.360zebra.com/program/tracking.aspx",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7172935",
  "companyname": "友家速递",
  "shortname": "友家速递",
  "tel": "",
  "url": "youjia",
  "code": "youjia",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7177446",
  "companyname": "百通物流",
  "shortname": "百通物流",
  "tel": "",
  "url": "buytong",
  "code": "buytong",
  "hasvali": 0,
  "comurl": "http://www.buytong.cn/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7177586",
  "companyname": "新元快递",
  "shortname": "新元快递",
  "tel": "",
  "url": "xingyuankuaidi",
  "code": "xingyuankuaidi",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7184090",
  "companyname": "amazon-国内订单",
  "shortname": "amazon-国内订单",
  "tel": "",
  "url": "amcnorder",
  "code": "amcnorder",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7200691",
  "companyname": "全速物流",
  "shortname": "全速物流",
  "tel": "400-679-3883",
  "url": "quansu",
  "code": "quansu",
  "hasvali": 0,
  "comurl": "http://www.china-quansu.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.china-quansu.com/",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7200692",
  "companyname": "新杰物流",
  "shortname": "新杰物流",
  "tel": "",
  "url": "sunjex",
  "code": "sunjex",
  "hasvali": 0,
  "comurl": "http://www.sunjex.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.sunjex.com/",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7200693",
  "companyname": "鲁通快运",
  "shortname": "鲁通快运",
  "tel": "400-055-5656 ",
  "url": "lutong",
  "code": "lutong",
  "hasvali": 0,
  "comurl": "http://www.lutongky.com/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.lutongky.com/ ",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7220326",
  "companyname": "新元国际",
  "shortname": "新元国际",
  "tel": "",
  "url": "xynyc",
  "code": "xynyc",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.xynyc.com/  ",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7220327",
  "companyname": "小C海淘",
  "shortname": "小C海淘",
  "tel": "",
  "url": "xiaocex",
  "code": "xiaocex",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": "http://www.xiaocex.cn"
}, {
  "cid": "0",
  "id": "7272925",
  "companyname": "航空快递",
  "shortname": "航空快递",
  "tel": "18640151012 ",
  "url": "airgtc",
  "code": "airgtc",
  "hasvali": 0,
  "comurl": "http://air-gtc.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://air-gtc.com/",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7272926",
  "companyname": "叮咚澳洲转运",
  "shortname": "叮咚澳洲转运",
  "tel": "010-57853244",
  "url": "dindon",
  "code": "dindon",
  "hasvali": 0,
  "comurl": "http://www.dindonexpress.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.dindonexpress.com/",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7314900",
  "companyname": "环球通达 ",
  "shortname": "环球通达",
  "tel": "400-078-1805 ",
  "url": "hqtd",
  "code": "hqtd",
  "hasvali": 0,
  "comurl": "http://www.hqtdkd.com/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.hqtdkd.com/ ",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7332766",
  "companyname": "小米",
  "shortname": "小米",
  "tel": "",
  "url": "xiaomi",
  "code": "xiaomi",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7341826",
  "companyname": "顺丰优选",
  "shortname": "顺丰优选",
  "tel": "",
  "url": "sfbest",
  "code": "sfbest",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7342316",
  "companyname": "好又快物流",
  "shortname": "好又快物流",
  "tel": "400-800-3838 ",
  "url": "haoyoukuai",
  "code": "haoyoukuai",
  "hasvali": 0,
  "comurl": "http://www.ff56.com.cn/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.ff56.com.cn/ ",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7377858",
  "companyname": "永旺达快递",
  "shortname": "永旺达快递",
  "tel": "400-0607-290 ",
  "url": "yongwangda",
  "code": "yongwangda",
  "hasvali": 0,
  "comurl": "http://www.yongwangda8.com/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "15361282277 ",
  "queryurl": "http://www.yongwangda8.com/ ",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7377859",
  "companyname": "木春货运",
  "shortname": "木春货运",
  "tel": "400-6359-800 ",
  "url": "mchy",
  "code": "mchy",
  "hasvali": 0,
  "comurl": "http://www.mcchina-express.com/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.mcchina-express.com/ ",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7378182",
  "companyname": "程光快递",
  "shortname": "程光快递",
  "tel": "6499482780 ",
  "url": "flyway",
  "code": "flyway",
  "hasvali": 0,
  "comurl": "www.flyway.co.nz ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "6499482781 ",
  "queryurl": "www.flyway.co.nz ",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7384055",
  "companyname": "全之鑫物流",
  "shortname": "全之鑫物流",
  "tel": "400-080-5658",
  "url": "qzx56",
  "code": "qzx56",
  "hasvali": 0,
  "comurl": "http://www.qzx56.com/",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": " 0371-56078011",
  "queryurl": "http://www.qzx56.com/",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7393483",
  "companyname": "百事亨通",
  "shortname": "百事亨通",
  "tel": "400-185-6666",
  "url": "bsht",
  "code": "bsht",
  "hasvali": 0,
  "comurl": "www.bsht-express.com",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "400-185-6666",
  "queryurl": "www.bsht-express.com",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7441573",
  "companyname": "ILYANG",
  "shortname": "ILYANG",
  "tel": "",
  "url": "ilyang",
  "code": "ilyang",
  "hasvali": 0,
  "comurl": "http://www.ilyangexpress.com/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "1740682860",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.ilyangexpress.com/ ",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7441681",
  "companyname": "先锋快递",
  "shortname": "先锋快递",
  "tel": "0311-69046652 ",
  "url": "xianfeng",
  "code": "xianfeng",
  "hasvali": 0,
  "comurl": "http://xianfengex.com/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://xianfengex.com/ ",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7505279",
  "companyname": "万家通快递",
  "shortname": "万家通快递",
  "tel": "",
  "url": "timedg",
  "code": "timedg",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7513752",
  "companyname": "美快国际物流",
  "shortname": "美快国际物流",
  "tel": "020-39141092 ",
  "url": "meiquick",
  "code": "meiquick",
  "hasvali": 0,
  "comurl": "http://www.meiquick.com/ ",
  "isavailable": "0",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "http://www.meiquick.com/ ",
  "serversite": ""
}, {
  "cid": "0",
  "id": "7547255",
  "companyname": "泰中物流",
  "shortname": "泰中物流",
  "tel": "",
  "url": "tny",
  "code": "tny",
  "hasvali": 0,
  "comurl": "",
  "isavailable": "",
  "promptinfo": "",
  "testnu": "",
  "freg": "",
  "freginfo": "",
  "telcomplaintnum": "",
  "queryurl": "",
  "serversite": ""
}];
module.exports = company;
});
define('static/utils/utils.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lotusUtils = void 0;
var lotusUtils = {
  webUrl: {
    /* api: 'http://192.168.1.143:3001/', //http://bngapi.winglau14.com/开发环境url
    imgUrl: 'http://192.168.1.143:3001', //http://bngapi.winglau14.com */
    api: 'http://bngapi.winglau14.com/',
    //生产环境url
    imgUrl: 'http://bngapi.winglau14.com'
  },
  //第三方登录
  wxLoginFn: function wxLoginFn(type) {
    return new Promise(function (resolve, reject) {
      //获取服务供应商微信
      return uni.getProvider({
        service: 'oauth',
        success: function success(res) {
          if (~res.provider.indexOf(type)) {
            //获取微信登录后信息
            uni.login({
              provider: type,
              success: function success(loginRes) {
                //console.log(JSON.stringify(loginRes));
                //获取用户信息
                uni.getUserInfo({
                  provider: type,
                  success: function success(infoRes) {
                    /* uni.showToast({
                    	title: JSON.stringify(infoRes),
                    	icon: 'none'
                    }); */
                    if (infoRes.errMsg.indexOf("getUserInfo:ok") > -1) {
                      if (type === 'qq') {
                        //头像字段重新赋值
                        infoRes.userInfo.avatarUrl = infoRes.userInfo.figureurl_qq_2;
                      }

                      var userInfor = JSON.stringify(infoRes.userInfo); //console.log(userInfor);
                      //缓存用户信息
                      //uni.setStorageSync('userInfor', userInfor);

                      uni.setStorage({
                        key: 'userInfor',
                        data: userInfor,
                        success: function success() {
                          //console.log('success');
                          resolve({
                            code: 1,
                            userInfor: userInfor
                          });
                        }
                      });
                    }
                  }
                });
              },
              fail: function fail(error) {
                //plus.ui.alert(JSON.stringify(error));
                //console.log(JSON.stringify(error));								
                resolve(error);
              }
            });
          }
        }
      });
    });
  },
  //打开摄像头获取拍照路径
  openCamera: function openCamera(openAlert) {
    var cmr = plus.camera.getCamera();
    var res = cmr.supportedImageResolutions[0];
    var fmt = cmr.supportedImageFormats[0];

    var _this = this;

    return new Promise(function (resolve, reject) {
      cmr.captureImage(function (path) {
        if (openAlert) {
          plus.ui.alert('Capture image success: ' + path, '', '温馨提示', '确定');
        }

        resolve(path);
      }, function (error) {//cmr.stopVideoCapture();
        //plus.ui.alert('Capture image failed: ' + error.message);
      }, {
        resolution: res,
        format: fmt
      });
    });
  },
  //图片预览
  imagesPreviewer: function imagesPreviewer(imgArray) {
    uni.previewImage({
      urls: imgArray,
      success: function success(res) {},
      fail: function fail() {}
    });
  },
  //接口请求封装url=>api请求url,method=>请求的方法GET OR POST,options=>api请求data参数
  ajax: function ajax(url, method, options, contentType) {
    uni.showLoading({
      title: '加载中',
      mask: true
    });
    return new Promise(function (resolve, reject) {
      uni.request({
        url: url,
        //api接口地址。
        method: method,
        data: options,
        header: {
          'content-type': contentType || 'application/x-www-form-urlencoded' //自定义请求头信息

        },
        success: function success(res) {
          uni.hideLoading();
          resolve(res.data);
        },
        fail: function fail(err) {
          uni.showToast({
            title: "".concat(JSON.stringify(err)),
            icon: 'none'
          });
        },
        complete: function complete(res) {
          /* uni.showToast({
          	title: `${JSON.stringify(res)}`,
          	icon: 'none'
          }) */
        }
      });
    });
  },
  //设置本地缓存
  setStorageFn: function setStorageFn(sKey, sVal, type) {
    //同步设置本地缓存
    if (type === "sync") {
      return new Promise(function (resolve, reject) {
        try {
          uni.setStorageSync(sKey, sVal);
          resolve(true);
        } catch (e) {
          // error
          resolve(false);
        }
      });
    } else {
      //异步设置本地缓存
      return new Promise(function (resolve, reject) {
        uni.setStorage({
          key: sKey,
          data: sVal,
          success: function success(res) {
            resolve(true);
          },
          fail: function fail(error) {
            resolve(false);
          }
        });
      });
    }
  },
  //获取缓存信息
  getStorageFn: function getStorageFn(sKey, type) {
    //同步获取本地缓存
    if (type === "sync") {
      return new Promise(function (resolve, reject) {
        try {
          var value = uni.getStorageSync(sKey);

          if (value) {
            resolve(value);
          }
        } catch (e) {
          // error
          resolve(false);
        }
      });
    } else {
      //异步获取本地缓存
      return new Promise(function (resolve, reject) {
        uni.getStorage({
          key: sKey,
          success: function success(res) {
            resolve(res.data);
          },
          fail: function fail(error) {
            resolve(false);
          }
        });
      });
    }
  },
  //获取系统的信息
  getSystemInfor: function getSystemInfor() {
    return new Promise(function (resolve, reject) {
      uni.getSystemInfo({
        success: function success(res) {
          /* 
          console.log(res.model);//手机型号
          console.log(res.pixelRatio);//设备像素比
          console.log(res.screenWidth); //屏幕宽度
          console.log(res.screenHeight); //屏幕高度
          console.log(res.windowWidth);//可使用窗口宽度
          console.log(res.windowHeight);//可使用窗口高度
          console.log(res.windowTop); //可使用窗口的顶部位置
          console.log(res.windowBottom); //可使用窗口的底部位置
          console.log(res.statusBarHeight); //状态栏的高度
          console.log(res.language);//应用设置的语言
          console.log(res.version);//引擎版本号
          console.log(res.platform); //客户端平台
          console.log(res.SDKVersion); //客户端基础库版本
          */
          resolve(res);
        },
        fail: function fail() {
          resolve(false);
        }
      });
    });
  }
};
exports.lotusUtils = lotusUtils;
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/tempPage/tempPage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tempPage/tempPage.js';

define('pages/tempPage/tempPage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tempPage/tempPage"],{"1c56":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("lotus-splash",{attrs:{lotusSplashData:t.splashData,mpcomid:"6147c44e-0"}})],1)},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"23ee":function(t,e,n){"use strict";n.r(e);var a=n("8ef4"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},"261d":function(t,e,n){"use strict";n.r(e);var a=n("7da1"),o=n("23ee");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("3602");var s=n("2877"),i=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},3602:function(t,e,n){"use strict";var a=n("9038"),o=n.n(a);o.a},"3b55":function(t,e,n){"use strict";n.r(e);var a=n("7cb0"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},"7cb0":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("261d"));function o(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{splashData:{welcomeTitle:"欢迎使用",appTitle:"帮您购",bottomTitle:"帮您购提供服务",logo:"/static/images/app-icon/mipmap-xhdpi/W.png"},delay:2e3}},components:{LotusSplash:a.default},onLaunch:function(){},onShow:function(){var e=this;setTimeout(function(){e.$lotusUtils.getStorageFn("userInfor").then(function(e){e?t.switchTab({url:"/pages/userCenter/userCenter"}):t.redirectTo({url:"/pages/login/login"})})},this.delay)},onHide:function(){},onLoad:function(){}};e.default=u}).call(this,n("6e42")["default"])},"7da1":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"index-splash"},[n("view",{staticClass:"index-splash-top"},[n("text",{domProps:{textContent:t._s(t.lotusSplashData.welcomeTitle)}}),n("text",{domProps:{textContent:t._s(t.lotusSplashData.appTitle)}})]),n("view",{staticClass:"index-splash-footer"},[n("view",{staticClass:"index-splash-logo",style:"background:url("+t.lotusSplashData.logo+") no-repeat;background-size:100% 100%;"}),n("view",{staticClass:"index-splash-text"},[n("text",[t._v("©")]),n("text",{domProps:{textContent:t._s(t.lotusSplashData.bottomTitle)}})])])])},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"7e0a":function(t,e,n){"use strict";n("8c29");var a=u(n("b0ce")),o=u(n("fad3"));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))},"8ef4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"lotus-splash",props:["lotusSplashData"],data:function(){return{}},components:{},methods:{splashFn:function(){}},onLoad:function(){this.$nextTick(function(){})},onShow:function(){}};e.default=a},9038:function(t,e,n){},fad3:function(t,e,n){"use strict";n.r(e);var a=n("1c56"),o=n("3b55");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);var s=n("2877"),i=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports}},[["7e0a","common/runtime","common/vendor"]]]);
});
require('pages/tempPage/tempPage.js');
__wxRoute = 'pages/formDetail/formDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/formDetail/formDetail.js';

define('pages/formDetail/formDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/formDetail/formDetail"],{"11da":function(t,e,a){},1494:function(t,e,a){"use strict";var i=a("11da"),r=a.n(i);r.a},"24af":function(t,e,a){"use strict";a.r(e);var i=a("68e1"),r=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=r.a},5168:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"form-detail"},[a("view",{staticClass:"form-detail-item"},[a("text",[t._v("名称：")]),a("text",[t._v(t._s(t.buyFormData.productName))])]),a("view",{staticClass:"form-detail-item"},[a("text",[t._v("规格：")]),a("text",[t._v(t._s(t.buyFormData.productSpec?t.buyFormData.productSpec:"--"))])]),a("view",{staticClass:"form-detail-item"},[a("text",[t._v("厂家：")]),a("text",[t._v(t._s(t.buyFormData.factory?t.buyFormData.factory:"--"))])]),a("view",{staticClass:"form-detail-item"},[a("text",[t._v("数量：")]),a("text",[t._v(t._s(t.buyFormData.amount))])]),a("view",{staticClass:"form-detail-item"},[a("text",[t._v("姓名：")]),a("text",[t._v(t._s(t.buyFormData.userName))])]),a("view",{staticClass:"form-detail-item"},[a("text",[t._v("手机：")]),a("text",[t._v(t._s(t.buyFormData.userPhone))])]),a("view",{staticClass:"form-detail-item"},[a("text",[t._v("地址：")]),a("text",[t._v(t._s(t.buyFormData.userAddress))])]),t.imageList.length>0?a("view",{staticClass:"form-detail-item"},[t._m(0),a("view",{staticClass:"form-detail-img-list"},t._l(t.imageList,function(e,i){return a("image",{key:i,attrs:{src:t.webUrl+e.imgUrl,mode:"aspectFit",eventid:"6c567299-0-"+i},on:{tap:function(a){t.imgPreviewer(e)}}})}))]):t._e(),a("navigator",{staticClass:"lotus-btn form-detail-btn",attrs:{url:"/pages/form/form?id="+t.buyFormId}},[t._v("编辑")]),a("view",{staticClass:"lotus-btn form-detail-delete",attrs:{eventid:"6c567299-1"},on:{tap:t.deleteForm}},[t._v("删除")])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[t._v("附件："),a("text",{staticClass:"form-detail-item-tips"},[t._v("图片点击可以预览")])])}];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return r})},"68e1":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{buyFormId:"",buyFormData:{},imageList:[],webUrl:this.$lotusUtils.webUrl.api}},methods:{imgPreviewer:function(t){var e=[],a="".concat(this.$lotusUtils.webUrl.api).concat(t.imgUrl);e.push(a),this.$lotusUtils.imagesPreviewer(e)},deleteForm:function(){var e=this;this.$lotusUtils.ajax("".concat(e.$lotusUtils.webUrl.api,"buy/delete"),"POST",{id:e.buyFormId}).then(function(e){1===e.code&&t.showToast({icon:"none",title:"删除成功",success:function(){t.switchTab({url:"/pages/userCenter/userCenter"})}})})}},onLoad:function(e){if(this.buyFormId=e.id,!this.buyFormId)return!1;var a=this;this.$lotusUtils.ajax("".concat(a.$lotusUtils.webUrl.api,"buy/detail"),"GET",{buyFormId:a.buyFormId}).then(function(e){if(1===e.code){var i=e.data;a.buyFormData=i.buyFormData,a.imageList=i.buyFormData.imageList,t.setNavigationBarTitle({title:"".concat(i.buyFormData.productName)})}})},onShow:function(){}};e.default=a}).call(this,a("6e42")["default"])},c133:function(t,e,a){"use strict";a.r(e);var i=a("5168"),r=a("24af");for(var s in r)"default"!==s&&function(t){a.d(e,t,function(){return r[t]})}(s);a("1494");var o=a("2877"),u=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},f1fd:function(t,e,a){"use strict";a("8c29");var i=s(a("b0ce")),r=s(a("c133"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(r.default))}},[["f1fd","common/runtime","common/vendor"]]]);
});
require('pages/formDetail/formDetail.js');
__wxRoute = 'pages/form/form';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/form/form.js';

define('pages/form/form.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/form/form"],{"0bfe":function(t,e,i){"use strict";i.r(e);var s=i("81d9"),a=i.n(s);for(var r in s)"default"!==r&&function(t){i.d(e,t,function(){return s[t]})}(r);e["default"]=a.a},"11b4":function(t,e,i){},"1b28":function(t,e,i){"use strict";i.r(e);var s=i("c7f7"),a=i("0bfe");for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);i("56b1");var o=i("2877"),n=Object(o["a"])(a["default"],s["a"],s["b"],!1,null,null,null);e["default"]=n.exports},"56b1":function(t,e,i){"use strict";var s=i("11b4"),a=i.n(s);a.a},"81c3":function(t,e,i){"use strict";i("8c29");var s=r(i("b0ce")),a=r(i("1b28"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},"81d9":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e,i,s,a,r,o){try{var n=t[r](o),l=n.value}catch(u){return void i(u)}n.done?e(l):Promise.resolve(l).then(s,a)}function o(t){return function(){var e=this,i=arguments;return new Promise(function(s,a){var o=t.apply(e,i);function n(t){r(o,s,a,n,l,"next",t)}function l(t){r(o,s,a,n,l,"throw",t)}n(void 0)})}}var n={data:function(){return{productName:"",productSpec:"",factory:"",amount:"",userName:"",userPhone:"",userAddress:"",imageList:[],submitTime:null,imgWebUrl:this.$lotusUtils.webUrl.api,formId:0}},methods:{compressImage:function(t){return new Promise(function(e,i){plus.zip.compressImage({src:t,dst:t,quality:40,overwrite:!0},function(){e(t)},function(t){console.log(JSON.stringify(t))})})},openCamera:function(e){var i=this;t.chooseImage({count:1,success:function(e){var s=e.tempFilePaths[0],a=s.split("/");console.log(a[a.length-1]),i.compressImage(s).then(function(e){console.log(s),t.uploadFile({url:"".concat(i.$lotusUtils.webUrl.api,"upLoad/image"),filePath:e,name:"file",formData:{},success:function(t){var e=JSON.parse(t.data);if(1===e.code){var s=e.data;i.testUrl=i.$lotusUtils.webUrl.api+s.imgUrl,i.imageList.push(s)}},fail:function(t){console.log(JSON.stringify(t))}})})}})},deleteImg:function(t,e){var i=this,s="".concat(t[e].imgName,".jpg");i.$lotusUtils.ajax("".concat(i.$lotusUtils.webUrl.api,"upLoad/imageDelete"),"POST",{imgName:s,buyFormId:i.formId}).then(function(s){console.log(JSON.stringify(s)),1===s.code&&(t.splice(e,1),i.imageList=t)})},imgPreviewer:function(t){var e=[],i="".concat(this.$lotusUtils.webUrl.api).concat(t.imgUrl);e.push(i),this.$lotusUtils.imagesPreviewer(e)},submitFn:function(){var e=o(s.default.mark(function e(){var i,a,r,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.formMatch()){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,this.$lotusUtils.getStorageFn("userInfor");case 4:i=e.sent,a={productName:this.productName,productSpec:this.productSpec,factory:this.factory,amount:this.amount,userName:this.userName,userPhone:this.userPhone,userAddress:this.userAddress,imageList:this.imageList},r="",o={},this.formId>0?(r="".concat(this.$lotusUtils.webUrl.api,"buy/update"),o={openId:JSON.parse(i).openId,buyFormData:JSON.stringify(a),buyFormId:this.formId}):(r="".concat(this.$lotusUtils.webUrl.api,"buy/add"),o={openId:JSON.parse(i).openId,buyFormData:JSON.stringify(a)}),this.$lotusUtils.ajax(r,"POST",o).then(function(e){1===e.code&&t.showToast({title:"提交成功",icon:"none",mask:!0,success:function(){t.redirectTo({url:"/pages/success/success?id="+e.data})}})});case 10:case"end":return e.stop()}},e,this)}));function i(){return e.apply(this,arguments)}return i}(),submitFnClick:function(){var t=this;clearTimeout(this.submitTime),this.submitTime=setTimeout(function(){t.submitFn()},200)},formMatch:function(){if(!this.productName)return t.showToast({title:"名称不能为空",icon:"none"}),!1;if(!this.amount)return t.showToast({title:"数量不能为空",icon:"none"}),!1;if(!/[1-9]$|^[1-9]\d{1,2}$/g.test(this.amount))return t.showToast({title:"数量输入有误",icon:"none"}),this.amount="",!1;if(!this.userName)return t.showToast({title:"姓名不能为空",icon:"none"}),!1;if(!/^1[0-9]{2}[0-9]{8}$/.test(this.userPhone)){var e=this.userPhone?"手机号码不合法":"手机号码不能为空";return t.showToast({title:e,icon:"none"}),!1}return!!this.userAddress||(t.showToast({title:"收货人地址不能为空",icon:"none"}),!1)},getFormDetail:function(){var e=this;this.$lotusUtils.ajax("".concat(e.$lotusUtils.webUrl.api,"buy/detail"),"GET",{buyFormId:e.formId}).then(function(i){if(1===i.code){var s=i.data;e.buyFormData=s.buyFormData,e.imageList=s.buyFormData.imageList,e.productName=s.buyFormData.productName,e.productSpec=s.buyFormData.productSpec,e.factory=s.buyFormData.factory,e.amount=s.buyFormData.amount,e.userName=s.buyFormData.userName,e.userPhone=s.buyFormData.userPhone,e.userAddress=s.buyFormData.userAddress,t.setNavigationBarTitle({title:"".concat(s.buyFormData.productName)})}})}},onLoad:function(t){this.formId=t.id},onShow:function(){this.formId>0&&this.getFormDetail()}};e.default=n}).call(this,i("6e42")["default"])},c7f7:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"fill-form"},[i("view",{staticClass:"fill-form-item"},[t._m(0),i("view",{staticClass:"fill-form-item-r"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.productName,expression:"productName"}],attrs:{placeholder:"请输入名称",type:"text",eventid:"76436e79-0"},domProps:{value:t.productName},on:{input:function(e){e.target.composing||(t.productName=e.target.value)}}})])]),i("view",{staticClass:"fill-form-item"},[t._m(1),i("view",{staticClass:"fill-form-item-r"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.productSpec,expression:"productSpec"}],attrs:{placeholder:"请输入规格",type:"text",eventid:"76436e79-1"},domProps:{value:t.productSpec},on:{input:function(e){e.target.composing||(t.productSpec=e.target.value)}}})])]),i("view",{staticClass:"fill-form-item"},[t._m(2),i("view",{staticClass:"fill-form-item-r"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.factory,expression:"factory"}],attrs:{placeholder:"请输入厂家",type:"text",eventid:"76436e79-2"},domProps:{value:t.factory},on:{input:function(e){e.target.composing||(t.factory=e.target.value)}}})])]),i("view",{staticClass:"fill-form-item"},[t._m(3),i("view",{staticClass:"fill-form-item-r"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{maxlength:"3",placeholder:"请输入购买数量",type:"number",eventid:"76436e79-3"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})])]),i("view",{staticClass:"fill-form-item"},[t._m(4),i("view",{staticClass:"fill-form-item-r"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{placeholder:"请输入收货人姓名",type:"text",eventid:"76436e79-4"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}})])]),i("view",{staticClass:"fill-form-item"},[t._m(5),i("view",{staticClass:"fill-form-item-r"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.userPhone,expression:"userPhone"}],attrs:{maxlength:"11",placeholder:"请输入收货人手机号码",type:"number",eventid:"76436e79-5"},domProps:{value:t.userPhone},on:{input:function(e){e.target.composing||(t.userPhone=e.target.value)}}})])]),i("view",{staticClass:"fill-form-item"},[t._m(6),i("view",{staticClass:"fill-form-item-r"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.userAddress,expression:"userAddress"}],staticStyle:{width:"580rpx"},attrs:{maxlength:"500","auto-height":"",placeholder:"请输入收货人地址",eventid:"76436e79-6"},domProps:{value:t.userAddress},on:{input:function(e){e.target.composing||(t.userAddress=e.target.value)}}})])]),i("view",{staticClass:"fill-form-item",staticStyle:{"padding-bottom":"0"}},[t._m(7),i("view",{staticClass:"fill-form-item-r"},[t.imageList.length?i("text",{staticClass:"fill-form-item-tips"},[t._v("图片点击可以预览")]):t._e(),i("view",{staticClass:"fill-form-item-img-list"},[t._l(t.imageList,function(e,s){return i("view",{key:s,staticClass:"fill-form-item-img-wrap"},[i("image",{staticClass:"fill-form-item-img",attrs:{src:t.imgWebUrl+e.imgUrl,mode:"aspectFit",eventid:"76436e79-7-"+s},on:{tap:function(i){t.imgPreviewer(e)}}}),i("view",{staticClass:"fill-form-item-delete",attrs:{eventid:"76436e79-8-"+s},on:{tap:function(e){t.deleteImg(t.imageList,s)}}})])}),t.imageList.length<2?i("view",{staticClass:"fill-form-item-camera",attrs:{eventid:"76436e79-9"},on:{tap:function(e){t.openCamera(0)}}}):t._e()],2)])]),i("view",{staticClass:"fill-form-fix"},[i("view",{staticClass:"fill-form-fix-wrap"},[i("button",{staticClass:"fill-form-fix-btn lotus-btn",attrs:{type:"primary",eventid:"76436e79-10"},on:{tap:t.submitFnClick}},[t._v("提交")])],1)])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"fill-form-item-l"},[i("text",{staticClass:"fill-form-item-l-red"},[t._v("*")]),i("text",[t._v("名称：")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"fill-form-item-l"},[i("text",{staticClass:"fill-form-item-l-red",staticStyle:{opacity:"0"}},[t._v("*")]),i("text",[t._v("规格：")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"fill-form-item-l"},[i("text",{staticClass:"fill-form-item-l-red",staticStyle:{opacity:"0"}},[t._v("*")]),i("text",[t._v("厂家：")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"fill-form-item-l"},[i("text",{staticClass:"fill-form-item-l-red"},[t._v("*")]),i("text",[t._v("数量：")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"fill-form-item-l"},[i("text",{staticClass:"fill-form-item-l-red"},[t._v("*")]),i("text",[t._v("姓名：")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"fill-form-item-l"},[i("text",{staticClass:"fill-form-item-l-red"},[t._v("*")]),i("text",[t._v("手机：")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"fill-form-item-l fill-form-item-top"},[i("text",{staticClass:"fill-form-item-l-red"},[t._v("*")]),i("text",[t._v("地址：")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"fill-form-item-l fill-form-item-top"},[i("text",{staticClass:"fill-form-item-l-red",staticStyle:{opacity:"0"}},[t._v("*")]),i("text",[t._v("附件：")])])}];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a})}},[["81c3","common/runtime","common/vendor"]]]);
});
require('pages/form/form.js');
__wxRoute = 'pages/list/list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/list/list.js';

define('pages/list/list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/list/list"],{"06c5":function(t,a,e){"use strict";e.r(a);var n=e("2ac9"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);a["default"]=o.a},2572:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("a34a")),o=i(e("ec5c"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,a,e,n,o,i,r){try{var s=t[i](r),u=s.value}catch(l){return void e(l)}s.done?a(u):Promise.resolve(u).then(n,o)}function s(t){return function(){var a=this,e=arguments;return new Promise(function(n,o){var i=t.apply(a,e);function s(t){r(i,n,o,s,u,"next",t)}function u(t){r(i,n,o,s,u,"throw",t)}s(void 0)})}}var u={data:function(){return{listArray:[],scrollHeight:"",lotusLoadMData:{isShow:!1,showLoadImg:!0,text:""},pageShow:!1,flag:!0,pageSize:10,pageIndex:0,noDataFlag:!1}},components:{LotusLoadMoreText:o.default},methods:{getListData:function(){var t=s(n.default.mark(function t(){var a,e;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=this,this.flag){t.next=3;break}return t.abrupt("return",!1);case 3:return a.flag=!1,t.next=6,this.$lotusUtils.getStorageFn("userInfor");case 6:e=t.sent,this.$lotusUtils.ajax("".concat(this.$lotusUtils.webUrl.api,"buy/list"),"GET",{openId:JSON.parse(e).openId,pageIndex:a.pageIndex,pageSize:a.pageSize}).then(function(t){if(1===t.code){var e=t.data;a.listArray=a.listArray.concat(e),e.length===a.pageSize?(a.flag=!0,a.pageIndex+=1,a.lotusLoadMData.isShow=!0):(a.flag=!1,a.lotusLoadMData.isShow=!1),a.listArray.length?a.noDataFlag=!1:a.noDataFlag=!0}else a.noDataFlag=!0});case 8:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),loadMoreFn:function(){this.getListData()},initFn:function(){this.listArray=[],this.pageIndex=0,this.flag=!0,this.noDataFlag=!1}},onLoad:function(){},onShow:function(){var t=this;t.$lotusUtils.getSystemInfor().then(function(a){a&&(t.scrollHeight=a.windowHeight+"px",t.pageShow=!0,t.initFn(),t.getListData())})}};a.default=u},"276a":function(t,a,e){"use strict";e.r(a);var n=e("d30a"),o=e("ada9");for(var i in o)"default"!==i&&function(t){e.d(a,t,function(){return o[t]})}(i);e("87bc");var r=e("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a["default"]=s.exports},"2ac9":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"lotus-load-more-text",props:["lotusLoadMData"],data:function(){return{text:"数据拼命加载中..."}}};a.default=n},5039:function(t,a,e){},"5beb":function(t,a,e){},"87bc":function(t,a,e){"use strict";var n=e("5039"),o=e.n(n);o.a},"9d24":function(t,a,e){"use strict";e("8c29");var n=i(e("b0ce")),o=i(e("276a"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(o.default))},ada9:function(t,a,e){"use strict";e.r(a);var n=e("2572"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);a["default"]=o.a},b43b:function(t,a,e){"use strict";var n=e("5beb"),o=e.n(n);o.a},bbf7:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.lotusLoadMData.isShow?e("view",{staticClass:"lotus-load-more"},[t.lotusLoadMData.showLoadImg?e("view",{staticClass:"lotus-load-more-img"}):t._e(),e("text",{domProps:{textContent:t._s(t.lotusLoadMData.text||t.text)}})]):t._e()},o=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return o})},d30a:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.pageShow?e("scroll-view",{staticClass:"list",style:{height:t.scrollHeight},attrs:{"scroll-y":"true","lower-threshold":"0",eventid:"7d1c728e-0"},on:{scrolltolower:t.loadMoreFn}},[t._l(t.listArray,function(a,n){return e("view",{key:n,staticClass:"list-item"},[e("navigator",{staticClass:"list-item-link",attrs:{"open-type":"navigate",url:"../formDetail/formDetail?id="+a.buyFormId}},[e("image",{staticClass:"list-item-pic",attrs:{src:"../../static/images/form-list-icon.png",mode:"aspectFit"}}),e("view",{staticClass:"list-item-r"},[e("text",[t._v("名称："+t._s(a.buyFormData.productName))]),e("text",{staticClass:"list-item-time"},[t._v("创建时间："+t._s(a.createTime))])])])],1)}),e("LotusLoadMoreText",{attrs:{lotusLoadMData:t.lotusLoadMData,mpcomid:"7d1c728e-0"}}),t.noDataFlag?e("view",{staticClass:"list-no-data"},[t._v("^_^暂无数据喔")]):t._e()],2):t._e()},o=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return o})},ec5c:function(t,a,e){"use strict";e.r(a);var n=e("bbf7"),o=e("06c5");for(var i in o)"default"!==i&&function(t){e.d(a,t,function(){return o[t]})}(i);e("b43b");var r=e("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a["default"]=s.exports}},[["9d24","common/runtime","common/vendor"]]]);
});
require('pages/list/list.js');
__wxRoute = 'pages/success/success';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/success/success.js';

define('pages/success/success.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/success/success"],{8575:function(t,e,n){},"86bd":function(t,e,n){"use strict";n("8c29");var s=c(n("b0ce")),a=c(n("fb3c"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},"99d0":function(t,e,n){"use strict";n.r(e);var s=n("fc38"),a=n.n(s);for(var c in s)"default"!==c&&function(t){n.d(e,t,function(){return s[t]})}(c);e["default"]=a.a},ccf7:function(t,e,n){"use strict";var s=n("8575"),a=n.n(s);a.a},db11:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"success"},[n("image",{staticClass:"success-img",attrs:{src:"../../static/images/success-bg.png",mode:"aspectFit"}}),n("text",{staticClass:"success-text"},[t._v("提交成功，我们将尽快进行处理喔^_^")]),n("view",{staticClass:"success-btn-wrap"},[n("button",{staticClass:"mini-btn success-btn-wrap-l",attrs:{type:"default",size:"mini",eventid:"1264a47e-0"},on:{tap:function(e){t.goTo("")}}},[t._v("查看详情")]),n("button",{staticClass:"mini-btn",attrs:{type:"primary",size:"mini",eventid:"1264a47e-1"},on:{tap:function(e){t.goTo("tabbar")}}},[t._v("返回我的")])],1)])},a=[];n.d(e,"a",function(){return s}),n.d(e,"b",function(){return a})},fb3c:function(t,e,n){"use strict";n.r(e);var s=n("db11"),a=n("99d0");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);n("ccf7");var i=n("2877"),u=Object(i["a"])(a["default"],s["a"],s["b"],!1,null,null,null);e["default"]=u.exports},fc38:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{id:0}},methods:{goTo:function(e){var n=this;"tabbar"===e?t.switchTab({url:"/pages/userCenter/userCenter"}):t.redirectTo({url:"/pages/formDetail/formDetail?id="+n.id})}},onLoad:function(t){this.id=t.id}};e.default=n}).call(this,n("6e42")["default"])}},[["86bd","common/runtime","common/vendor"]]]);
});
require('pages/success/success.js');
__wxRoute = 'pages/userCenter/userCenter';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/userCenter/userCenter.js';

define('pages/userCenter/userCenter.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userCenter/userCenter"],{"249c":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"lotus-confirm",props:["ConfirmData"],data:function(){return{defaultImage:i("d0b1"),showImg:!0,twoButton:!0}},components:{},methods:{click:function(){this.$emit("lotusConfirm"),this._props.ConfirmData.showConfirm=!1}},created:function(){this._props.ConfirmData.hasOwnProperty("showImg")&&(this.showImg=this._props.ConfirmData.showImg),this._props.ConfirmData.hasOwnProperty("twoButton")&&(this.twoButton=this._props.ConfirmData.twoButton)}};e.default=n},3951:function(t,e,i){"use strict";var n=i("da6b"),s=i.n(n);s.a},5079:function(t,e,i){"use strict";i.r(e);var n=i("888e"),s=i("91e2");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("a6f0");var r=i("2877"),c=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"6f40":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("8327"));function s(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{nickName:"",headerImg:"",confirmData:{showImg:!1,showConfirm:!1,descText:"确定要退出登录麽？",noText:"取消",yesText:"确定"}}},components:{LotusConfirm:n.default},methods:{quiteFn:function(){this.confirmData.showConfirm=!0},callBackFn:function(){var e=this;e.$lotusUtils.setStorageFn("userInfor","").then(function(){t.reLaunch({url:"/pages/login/login"})})},callPhone:function(){t.makePhoneCall({phoneNumber:"13316246503"})}},onLoad:function(){},onShow:function(){var t=this;this.$lotusUtils.getStorageFn("userInfor").then(function(e){var i=JSON.parse(e);t.nickName=i.nickName,t.headerImg=i.avatarUrl},function(t){})}};e.default=a}).call(this,i("6e42")["default"])},8327:function(t,e,i){"use strict";i.r(e);var n=i("8f93"),s=i("952a");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("3951");var r=i("2877"),c=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"888e":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"user-center lotus-wrap"},[i("view",{staticClass:"user-center-top"},[i("image",{staticClass:"user-center-top-header",attrs:{src:t.headerImg?t.headerImg:"../../static/images/user-default3.png",mode:"aspectFit"}}),i("view",{staticClass:"user-center-top-msg"},[i("text",{staticStyle:{color:"#fff"}},[t._v("昵称：")]),t._v(t._s(t.nickName?t.nickName:"--"))])]),i("view",{staticClass:"user-center-list"},[i("navigator",{attrs:{"open-type":"navigate",url:"../form/form"}},[i("view",{staticClass:"user-center-list-item"},[i("image",{staticClass:"user-center-list-icon",attrs:{src:"../../static/images/create-form-icon.png",mode:"aspectFit"}}),i("view",{staticClass:"user-center-list-text"},[t._v("新建")]),i("text",{staticClass:"user-center-list-jt"})])]),i("navigator",{attrs:{"open-type":"switchTab",url:"../list/list"}},[i("view",{staticClass:"user-center-list-item"},[i("image",{staticClass:"user-center-list-icon",attrs:{src:"../../static/images/jl-icon.png",mode:"aspectFit"}}),i("view",{staticClass:"user-center-list-text"},[t._v("记录")]),i("text",{staticClass:"user-center-list-jt"})])]),i("view",{staticClass:"user-center-list-item",attrs:{eventid:"5a83f5b9-0"},on:{tap:t.callPhone}},[i("image",{staticClass:"user-center-list-icon",attrs:{src:"../../static/images/service-icon.png",mode:"aspectFit"}}),t._m(0)]),t._m(1),i("view",{staticClass:"user-center-quit",attrs:{eventid:"5a83f5b9-1"},on:{tap:t.quiteFn}},[t._v("退出登录")])],1),i("lotus-confirm",{attrs:{ConfirmData:t.confirmData,eventid:"5a83f5b9-2",mpcomid:"5a83f5b9-0"},on:{lotusConfirm:t.callBackFn}})],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"user-center-list-text"},[i("text",[t._v("客服")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"user-center-list-item"},[i("image",{staticClass:"user-center-list-icon",attrs:{src:"../../static/images/setting-icon.png",mode:"aspectFit"}}),i("view",{staticClass:"user-center-list-text"},[i("text",[t._v("关于帮您购")]),i("text",{staticClass:"user-center-list-text-r"},[t._v("版本1.0.0")])])])}];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},"8f93":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.ConfirmData.showConfirm?i("div",{staticClass:"confirm-item",attrs:{eventid:"5b6659fe-2"},on:{tap:function(e){t.ConfirmData.showConfirm=!1}}},[i("div",{staticClass:"confirm-item-wrap"},[i("div",{staticClass:"confirm-item-content"},[t.ConfirmData.showImg?i("img",{staticClass:"confirm-item-content-image",attrs:{src:t.ConfirmData.descImage?t.ConfirmData.descImage:t.defaultImage,alt:""}}):t._e(),i("div",{staticClass:"confirm-item-content-text",domProps:{innerHTML:t._s(t.ConfirmData.descText?t.ConfirmData.descText:"想好了吗？")}})]),i("div",{staticClass:"confirm-item-click"},[t.twoButton?i("span",{staticClass:"confirm-item-click-no",attrs:{eventid:"5b6659fe-0"},domProps:{innerHTML:t._s(t.ConfirmData.noText?t.ConfirmData.noText:"取消")},on:{tap:function(e){t.ConfirmData.showConfirm=!1}}}):t._e(),i("span",{staticClass:"confirm-item-click-yes",attrs:{eventid:"5b6659fe-1"},domProps:{innerHTML:t._s(t.ConfirmData.yesText?t.ConfirmData.yesText:"确定")},on:{tap:t.click}})])])]):t._e()},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},"91e2":function(t,e,i){"use strict";i.r(e);var n=i("6f40"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},"952a":function(t,e,i){"use strict";i.r(e);var n=i("249c"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},a6f0:function(t,e,i){"use strict";var n=i("b330"),s=i.n(n);s.a},ad5c:function(t,e,i){"use strict";i("8c29");var n=a(i("b0ce")),s=a(i("5079"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},b330:function(t,e,i){},d0b1:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAgAElEQVR4Xu19CZgcVdX2e6p7spGwDDPTVUUQZJXVT+CTRbawi4QwU51hExdwQ0FlV/FT4VMUWUQFFURAFJBJ15AIBuEHIquAfICyKJsghLrVM5MQCIRkpvue/7mdTEjCzNSt6up1qp+HhwfqnHPPeU+9U1V3OYeQ/CqGgJ2zPwSjuK0EbW0w2hmYBqZpAKYSeBoDU6H+H2gqkfo3NlrlzBvMWArw2wCWEvA2g5aCeCmAtwlYKoE+Zn4+1VJ83ps18FzFghjnhmmcx192+G1um5WW6W3JoG2JeSsm7EjA1gBtWbbxMAYYLzD4BSI8zcwvgoznJMl/5bvyfWHMJLJrI5AQJOQdYffYH0CqeDDDOADgGQSyQpqotvhrYL6Hie4eSg/dPTBrwKu2A408XkKQgOxt0jttY8aUg5mxP4EOqvqTIea7i8H/JMY9DFqwXC6/643uN96MeYimMpcQZIR0mr3mfgZjJhiHgGinpsr4OsEw82MgupMNnud3+o82c6xRYksIolDrQcpOdxzATA5ARxEoEwXMJtB5jQGXqOB6nf0PgsBNEFNZIYxrgqjXp6Jc7ysEnExEZllINpkyM78Mop8VioWr+7v71WzauPyNS4KYc83tqUinE+N4ECaNy8xrBs3MbwH8G5DxU+GI/2iqNY3YuCKINafjEFDqDCIc0jQZrFIgzFwkQi8z/VhkxWNVGrbmwzQ/QR5Di/mKeZwBnNHsH9zVupsYeIAgL/K68rc2+3dK0xKkvad9aiqd+hIxzqzdRze/xMBCgBYCeJWYPUAuZKQWFmRhYX93v69zU7f3tJtpIz2dUJwOGNOZyAbwAYA3BTCdQFvo2IlfRsVHFwlHXBm/7fqw2HQE6ZjXkUkXjLMY+AKhtK2j8j/GE0z8FAHPSANPkaRnq/2+nunJfJAM2s4wsBNL2pHAO4No58oHDzBYgOiiQqHw62b7oG8qgpiu+T8G6Pwq3BR3AfwgwA8MFeXD9XpTtM5vXX/isol7guTeBPoYQDMqjM0iQJ7jOfnfVHicqplvCoJkcpmZBtFllXrVYMarAM+XBv+ppZC/e2E33q1ahmIcSL12plPpgwF8AuDDK7VNhsGPEhe/5GX7n4jR/ZqYamiCtM1rsycU0lcB9IkKoLeIGb+XkDfls/lHKmC/5iYt19oX4GPAOJ6I1o/dIeYritP4nPyh+Xdit10lgw1LENvNfI6ZfkJEast4PD/GcibuYQN/8Dv92+Mx2hhWLNfqJOZjQNQds8cLpeQT/Nn+X2K2WxVzDUeQTG+mw5B0HRF9PA6EGMwE/EUC1/NUntPIf+3iwGOjno02mGhMPI6ATxPR7nHYVBiD6ediY3EOZmB5HDarZaOhCGK6ZtYAXbXGwaLIODGwDCyvlITL807+35ENNbFipjezY0rSaSA6MZYwmV+UhON8x/9bLPaqYKQhCLJqNuYKInwyBkxeA+RFg+nidQOzBtQJveQXgIB6aqeYTmbQKQS0lQuYBH/Hd/z/LddONfTrniAdvR17pmVqDgiblAcIe5Jxgb+5fxV2w1B5tsantn2rPYVX8GlEOBPAhuWgwOC/UdHIet3eq+XYqbRuXRPEylnnEuH7ZYKwiAk/EF3iJ2XaSdRXIbDhLRtuOElO+oYBOqccUBi8VDIfn8/mby3HTiV165Ig6i8VVsibQXRE1OCZWYJw5fLiim8mp+aioji2nj23dVMuTFAziU7UEUqTJIz/9Rz/e/W4r6vuCJJxM1uk2JgPwraRQWd+hNM40T/KfzaqjURPHwHTNWcYTL8sK2fAHUPpodn19l1YVwTJzMkcaBD1lrFotQgsz/ay+Wv005tIxoLAAqStxdbZxPg2CJMj2WR+sZCSh/V19r0USb8CSnVDEDNnnkXAj4jICBvnqsf0tctSy89Y0rlkSVj9RD4+BCzX2ozA1wB0QBSrpQNaRDOFI+6Loh+3Tl0QxMpZv4s+hcseqHi019X/QNzgJPaiI2D1dhwPNn4ZdUc1A6cJR1wW3YN4NGtLkPmYaL9rzo/81wa4ccXkFScvPnzxW/HAkViJE4HSXrmhFjVFv1cUu8z4kciKb0bRjUundgRZgEn2IvM2EB0YNhg1PciMz/lZvyesbiJffQQs1/oWAT+INjJ/z3P886Lplq9VG4KU9eTglwapcPhA18Dz5YefWKgWAmoCJmUYcyJtEyL+htflX1gtX9ccpyYEsXLWHVEKJzDz7SumDB6TvFLV4lYpf0zzFnNzKuI2ItohrDUGzhWOuCCsXrnyVSXI9B5MlinztijfHAxcIBxxbrkBJ/q1RUAd2moxUjeqmaqwnjDLH4hs/tth9cqRrx5BSt8c1t2hP9gYg5L4eN/xc+UEmujWEQIMsl3zQhCdFdor5ou9rB9eL/RAKxWqQpDMHZn1jKV0d4TzBYsKVJzZ19X314jxJWp1jIDtZk4CjKtDu8h8kZf1zw6tF0GhKgSx3dJrVdhjsa8VIfdPzmpEyGoDqZQ+3sm4LXSFS+ZTvax/eaVDrThBrJx5CRGdHiYQVRd2iAofG3AGRBi9RLYxEVBHGlLSuDPM8WlV6ZEZB1X6KG9FCWK65mcM0LVh0sbMz7LE/n633x9GL5FtbASsnLUbwOo1XLt4hNqWUkBxt/5s/wuVir5iBFnZY4PCHdRn/gcZ7xzwetfSRZUKOLFbvwjYbtsuzOkFYUgC8EvvFlfsWqkjDRUhiOrbN4FbngahVTsdzE+9M+nd/d484s03tHUSwaZDwM61fwRILQDRBiGCu8tzhKr3FfsvfoL0YIKVsv5KwC7a3ibk0IZqPAhGIUml1sliJ4jtmtcC9BndRDL4Pwa9s2vyWqWL2PiQK9Ui4NRDoaIleZTXlZ8XSidAOFaC2LnMiSBDvy4rY3kxLT+aPyr/VJxBJbaaA4Gw91NpE6uBnf1O/5W4EIiNIKq6uGHQU0S0nrZzFWC89tiJYEMgYLmZXxGML2o7y3jIy4qPactX6wliu+ZDAO2p6xgDPxSO+JaufCI3fhGwXUsdhtO/6WPc/RvLEyRs2wEG7hCOOGz8pjyJPAwC9q12Gw/Kf+hWo2dwQaZ4lzhe3csmSGnGgdKP6wasGtkPpQu711v1Cl3/E7naIBD6PmN+RmT9Hcv1tjyC9CBlGeY/iGh7TUfekAbvEudHlOa4iVgTIGDmzG6D6Gb9UMo/jVgWQcJWPixKeVB+dv5u/QATyQSBtRGwc+blIPqKDi7qVYtT+HA59dEiE6Tjlo4t08XUsyBM0HEW4Ms9xz9VTzaRShAYBQF1XHuZ9XftInWMJ7ys0F+0XmfYyAQJM7PA6n1wY3+3RusNkdyk9YmAmTN3MIie1vVOgr/iO/4vdOXXlItEELPXnG0waVcUkcw7+ln/mSgOJjoJAiMhYOWs04lwiSY6i5ZPXrFFlFoG4Qmi9loZ1gtEqk938I8hvy+c/P8ESyYSCQIhEGAYtms+CaKddLSY+VKR9c/QkS3rCRKmxpE6+CSk/yF0YzCsY4l8gkAQAtYt1q6Q/DcCBf6hZ+YhksZWYfuRBBpe08lSpyFpvKJbnFiCD/Adf0FQoMn1BIGoCJiu+TMDpDX5w8y9IuuHatUQiiBWzrqMCF/TCYaBG4UjjteRTWQSBKIisLL3e+olAnXo2Rja1XMGtBe2tQmycc/Gm0wwWl4mohYNR1YMFQub93f3+xqyiUiCQFkIhKmOwow7RVYcqjugNkEs17qagJN0DEvm7/pZ/3wd2UQmQSAOBOyc9TgIH9GxxRL7itnifh1ZLYK059q3bqG0bi3c17xWsU2y5qEDfyITFwJ2b/ve4LTWTc/AA8IR++iMrUUQy7WuJOALOgaZcYLIit/ryCYyCQJxImDlrLlEmKVjs0DFvXQKEgYSRHU0nVKcnNfaUsJ4znPEdvXYjFEHtESmsRGw57Vty0PpZ/W6lPEcz/G7gyIOJIjtmt8F6HtBhtT1Issj67mlr04MiUxjI6DbrUx1QR6UQx9Y1L3o9bEiDiSI5Vr9BLQFwhbzUcfA8RKBBIERELB77A8gxf/RAUdndX1MgoSpjFgkOTPflb9Nx7FEprkRsHqtw1AsSjG7785aRGq51g0EHBc0tqrMKKexnT80/85osmMSxMqZD+tUZC9tKcn6WwQ5lFxvfgSsnHUoAXNBIEl8qN/l31vtqDt6Oz6c5tSTeuPKz3lOftRKPKMSxJxrbm8USWsHLgNfEo64Us+hRKpZEViDHJNWxbiiViSxctZ9RAicymXwo8Lxdw/9BLFc8xcEOlkjmYu8VjE9WffQQKqJRUYgx3C0NSGJ3ZuZBTbm6kBe4OKH+7J9/xhJdsQniGqVVjTMPp1y9DofOjpOJjKNi8AY5KgpSSzXzGvt0WK+wsv6p2gTRDWBJ05pLfYNcWGbSpafb9zbZnx4rkGOmpHEzpkXgehMjUy84bWKDsxAYV3ZEZ8gVs6cT0QfDzLMwOPCEbsGySXXmxOBEOSoCUnUwiEKLf/SQX+0Wdj3EUStnE8uThogolSg4Sq1wQr0IxGoOgIRyFETklg5829EtFsQQMy4SWTF+6aG30cQM2d+xSAK7P2mWmC9m1retqRzyZKgwZPrzYVAGeSoOkmsXus0YlwamAHGu97GonXdyab3EcRyzXsJtG+QwbD76oPsJdcbA4EYyAEwBhk4UmTFHZWOWp1jmpiasFBnHEnc7Xf5c9aUXYsgrfNb15+4bMJindcrZvkFkc3/WmfgRKY5EIiDHKqYG5iOqAY5hlHXXfAG+FrP8U8clSCma2YN0FoMGim1yetVc9zwYaKIixySuavaG1pN1zzDAF0cFC8z94usv9bR3bWeIHbO/A2I1mLQiEaZ7/ay/kFBAybXmwOBWMjBXJTgzmqTQ2XAvMXc3JD0sk421l00XIsgujt3JfhM3/F1i3bp+JXI1CkCcZEDoKNFVri1CtN2recAbBM4/jq9RVYTxM7ZHwLxPwMNAJAp3qGcgsA6YyQytUcgJnJIgLprSQ6FpG5FnnV716xBEN3+gux5jr9J7dOXeFBJBGIjB/EJwsnfWElfdWyrLfjEuD1IVm2BF1l/dQvq1QSxXOvXBHwu0ABwlXCEfs+4IIPJ9bpDIBZygBngT9YDOYYBtl2LtcBm2s7LeqUV+PcIkjOf0WmEw1T8pOjqu0FroESo4RCIixxMOMnv8q+tJwC0OxKwPMnL5q9ZTRBVna4llV6qEwwDmwtHaB1p1LGXyNQPAnGQQ0UjiU+sN3Iov2zXvBCgs4MQZ+Bq4YjPryZIZk7mwJRh3BWoyOyLrG8FySXXGw+BuMjBjJNFVvyqHhGw3cyRgDEv0DfGk15WlIrQlV6xdHstjLahK3DARKCuERgP5FAJ2KR32sbMUwd0kuE5osSNYYL8jgifDFKUzGf7Wf+iILnkeuMgEB855NdFNv/Teo/cdq1XAWwa5GcxJXdWbaRXEsQ1nyJQYMtcJnxcdIk/BxlPrjcGAuONHCvfljTPOq2qEFoiiO7012B6aJOBWQNeY6Q/8XIsBOIiB9ZZea531E3X/JEBOifYT/6x5/jnUIgV9CWeIzYKNpxI1DsCsZGD+Xwv63+33uNd0z/LtU4g4Pogn5kxV2RFJ+mvMOJ+kRWB50SCBk6u1xaBuMjBjB+JrPhmbaMJP7rttu0CtPxfkObwcXIyXfPLBuiKYAX+nXD8TwXJJdfrF4HYyAFcJhxxWv1GOrpnIWaySm9MZOfMH4PorMBgG/BxGhjTOBJIyPFesu2ctUynz6bXKiYrgtwMosAy8BL8Wd/xrxtH91TThBofOfiXwvG/3OjA2Dnz7yDaOSgONdVLumfQJfH+taizGhREcn1sBOIiB5iv8bK+Vgu+es+JnTP/CKKZgX5S8RBFkGcJtF2g8Bo7HANlE4G6QCAhx8hp0D85K48jK1cqMdoelFGit9te71q6KEguuV4fCMRFDgZuEI4I3GVRH1HreaG7aRHMpyqCDAa1dmYwC8c39IZPpGqNQKzk6BInNFtLPds1zwbowuA88fdIZxWdwX3C8TPBBhOJWiMQHzk4J7r87mYjh8qP2Wt+1mAqnfcY68eMn+kS5N/C8bcMMlj164+hxX7FdNmgXyR7xEq7soeb1wz354iUEkaJHEeDICMZqHMl3W3vDNyoXrGKwV1B6/Ac+gKkrcXWfAIOBmM5A0dVsxhZvd0DcZED4D96XX5ns5JD5c1yrX0JCOx8xcD/U7NYQwRKByR8keeI4Eae1bpr1iTH8JjjmCSxkqPod6EbxWqlshbjdOQ6dk5T6u+BYzOe0PtIZ35HZP2pgQarITASOcYxSeIiB4P/LIr+Ec1ODnWr2HNbN0VxojoXEvR7TX2DLAcwccyPFXBBOH5LkLWKXx+LHOOQJLGSYzP/SOyGoYrnsA4G0K3BwMAy9QQp6BSr9rpEqqbvpTrkGEckiYscAN/jbeYfNl7IUbpFepCyU9b7ukmty11Vg5rCbNyqWaPOMOQYBySJlRyT/cNxOFbUwR/2qrlg32pPwSCP2hv9vVsIy9RmxSUgWl1JbjQvl09escHiwxe/VbUohgeKQo4mJklc5GDgATFZHDTeyKFuDdVFbYqc/IbGvfyG9lYTTKB2b6anVRFCY2BtEStnukTUpa0wgmCznKXXPdwWhJUiB02gQ72Z3rIg2Wa83jGvI5MupPyg2BicVx/prwGYHiRcq/PoZq+5nyHpdp39+6PG0ARTwLE9OZgfSUl/xsJuvBuU82a9rjuLxeBX1DfI8yBsHQQGE7YXXUKr+nuQrbDXO3o79kxJ406dvu3NSJI4ySGn8YH5Q/OB799hc9RI8rrrIAz+p3rFepiIdg8KkIH9hCPuC5Kr1HUrZ+0G8N1EtH7kMRrwSRIbOYDH5VS573gnh7p3tCuJqldR2zVvA+gTQTcdA13CEbcEyVXyekdvx4dT0rhvvJAkTnKsmLxiRk0mWSp5Q0S0bfdmjgEbNwWpq8omaqvJbwkUWIyhXpp2KpKkObUAQPQSRA3wJImLHGB+avmUwb0TcrxHBztnngKinwcSBLhavWJdQkSnawifKxxxQZBcNa6bc83tqUj3EhB9f1gdkyROcrwz6d393jziTZ0pzWqkri7GsHKZ7xMZ5wY5w8APye41zwHTjzSE66pxTltv2zYtnL6PQNHPqdQhSeIiBzP+tWzSsr0Scrz/zrZc6/cEHB90zwPyq6T7PgbgLs8RBwcbrZ5EpifzwZRh3A9C9JZwdUSSuMgB5hcx0dizFutW1ct+9JHsnPUgCHsFWiB5FGXczB4pGH8NFGZ+0cv6gdPBgXZiFrB77A9wSqonyWaRTdcBSeIkR6FF7t03qy8fGY8mV7Rc0yNQYJ8b1RKa2nvazZZUWuhgMtwzQUe2mjJt89rslkL6fgJtEXncGpIkLnKoha1iWu6RkGPsu0DnmLmyMFQsTBtuf6BzaApDXNimP9v/QuSbsIKKmd5Mh5oCBmHbyMPUgCRxkmOwOLT3ou5Fr0eOfxwo2rn2j4DSj2uEWjokGK4/SB2shYwVmKq7KuV69xLRDhoAjCxSRZLERQ4AC1cUB/dIyBGcdbPX/JTB9NtgSX7Yc/w9VxHEuoGA44KUJPN3/ax/fpBcLa+XdmoWJy8A4b8i+1EFksRJDgb2Thqr6mXbds2LATojSJohrxRO/kslgpg58yyD6MdBSgDP8Rw/sI5vsJ3KSrTNa5vWUkjfTaD/jjxSBUkSFzmY2QfRHgk59LNs5aw7iHBIkMZwM9KVT5A5HYeQkbojSAnA854jor/jawwQl0jmjsx6qaXGnVrTeaMNWgGSxEmOYkru3dfZ91JcmI0HO5Zr9essMBdZ7pHP5h8pEUR3f7ySbagSpAswyVpk3k5E+0dOfowkiZEc/cWU3DMhR7is2vPatkWh5V86WkZRTFFHAkoEUT87Zy3UWXCrh02LOgGulunBBCtl3VaqnxX1FwNJ4iQHtRT28WYNPBc1nPGqZ7uZkwDj6qD4Gfy0cPydSg+E1QRxzR6AZgcpA3yJ5/hnBsvVkcQCpO3F5lydXcujel0GSeIiBxiL0TK0V0KOaPeW7ZrXAvSZIG0GVm+rWk0Qq9c6jRiXBivzo8LxA8+PBNmp+vUepKyUNYeAzshjRyBJnOQoGnK/fFf+6cj+j3NFyzVf0dlxIZk/42f90lTwaoKoU3tpTj0UhKGq9L5i8uCGDbl9mmHYveYNAB0TFGccT5L4yMFvFg3eOyFH5KyhPde+dQuln9exMEhD2w50DZRkVxMEqnrIInNZUCuE0gAkj/W68n/QGaweZWzXvKnSJImTHEBxhpftf6IesWwUn6zezFeJjZ8G+cvgpcLxV59afY8garo3Zy7QmfFh8PXC8T8dNFg9X9c9KBblSRIXOZj5bUJx34Qc5d9Jlmv9mYBDgyyVKts7/upv8bUIottYRC1QiawfuBsyyJlaX7dy1lVE+HxkP0b4JomTHJzCgX6n/2hk/xLFlQgswCR7saVVxUUSn+h3+dcOQ7cWQVYdZ31SD9fi3p7T96CebP1K2a75c4BOiezhGiSJjRzAMjZ4RkKOyFlZS9F0zawBmqNjbd11vrUIogzo9ixkxk9FVnxdZ9B6l7Fc6wcEfKs8P/k8gL5bng1AFUwG8PFaVpApN4Z609dtdQ7Gk15WfGRN/99HEO0OoMBCzxGb1hsYUf0xc+Z3DKLzourHosdYDioe1AxP5ljwiMOIer1aZC3WKTzIwAXCEWudVX//E6TXOowYt+v4VqDiXn1dfcGnEXWM1YGM6ZpnGKCLa+IKY1ASH+Y7vqrYkvxiQsDsNWcbTD065oaMwkf6O/vX+sR4H0FQWiuwVA1ejbI6fLnn+KfqDN4oMmbO/IpBdHlV/WUMMnDkeG4hVym8rZw1lwizguwzeMQ+nO8niNqX5ZpXAPTlIKMAlnitoh0zENhrQcNW3YjYbuZzDLqKQCPiE6ejDC6A6YiEHHGiutLWqgN0fcE9OEvffiOWtRqFIB0fA1IP6LjMjKzICldHtpFkLNc6AWBVVK9iJFHkkMxd+Wz+1kbCplF8tXLW6US4RMffFcXB6SOdyBw1+bZrvgiQRutn/qPn+IGPMB0n600m42aONphu0OnAFdZ31b1IgjsTcoRFTl/eypnPENH2QRoMvlc4/ohHIkYniGZBOTX4cqzYdLGzeGGQI4143c51HMVkzNHoBKwdniIHQEc345NXG4QKC2Zymd1TZDysMwxDHi+c/I0jyY5KkFXvb0JrbxbzRV7WP1vHmUaUMXPm4QTM1cIiIEBmlgB1J+So7J1guab6o5YNGoWZ3xLSbx2tu++Y79fag4CXpop+ppmbsthu5iDAuC2oI/BYCSmRg/iE0f5aBSUzua6HgHmLuTkV8ZLOx3nQ+aYxCaLbR2Gl2/KrnpMPrJitF2J9SpXT7UodEwD4kwk5Kp9bK2ddRoSv6YwUVOstcIbGcs1nCbRd0GAM/o9w/M2D5Br9epRuV4ocTDhpzU1wjY5Dvfpv9pjtZOBlIlovyEdmni+y/pi9cYIJkst8nsi4Kmiw0jOE+RQ/61+hI9vIMmG7Xa27Q7SRY693362c9VMifFXHz6KUB+Vn5+8eSzaQIOjBBNuwBAitQYOWtsFP8TcfD62FdbtdDddXCsIuuV4+Ahv3bLzJBKNFPT1aAq0x/8PL+h8OkgsmSKniiXkeiL4TZKx0neU3vWw+sN+Ilq06FwrqdpWQo7oJtHPmdSDSOsgniT/td/nXB3moR5Bb7TYMcn+QsRI/wEu5iC39bl9LXsdmPcuM1u2KWX5dZPOBRzzrObZG8i3MWaYw38taBFFAWa51AQHf1AFtuK6pjmwzyKzb7SohR/Wzarnmo7qlZiX4s77jX6fjpTZBWue3rj9p2YRXQbRBkOHSlCbRDrXqqx7kXyWuZ9zMFik27gPk5ePlFbMSOEaxaebMboPoZh1dZn5ZOP6WILU/MfinTZDSUyRnnUuE7webhZrY/IvI+jN0ZJtFRlWWX9K5ZEmzxNMQcaw8b65K9Ggd3gu7uTYUQVRBaONt+jeBOnTAG2uPi45+IpMgEIRAmFd/AH/3HBGqLUYogqz6FvkiAb8KclxdZ2BgeXH5Vm90v/GmjnwikyAQBoFV337P6G4klQbvHrYQRmiCrHzV0ttGvJIkKxuRhAk8kU0Q0EHAds2HANpTR5aZXZH1AzcvrmsrEkEyvZkDUmyMuQK55kDNdnZdJyGJTGURMHPmyQbRL3RHkQZ/0O/0X9GVH5aLRBClbOfMP4JopuaArw2mh3YYmDWwVFM+EUsQGBUB9Wo1QbY8qVOpZNWr/g+FIyKVdYpMENV6ecJQy4u6TjZK+7bkvqxzBB5Di/Uf83EC7ajjaWlRsNX/EGZguY58LK9Yw0ZsN3MqYPxMd2BmnCCy4ve68olcgsC6CFiu9RMCQhQsLK8CaOQnyLDjVs58mIi0+oWoYswM7OFn/WeS1CcIhEUgk8vMTJHxR129OCaIyiZI6X2QW7TbgTH4lXeKy3Z9q/utxbqBJnIJAh25jp3TSD2s+0rPYDGULmxb7ndv2QRRqQtTXmXVR9MDokvsB4JMUp8gEISAfavdxoPyHwTS7ijAwH5x1DeOhSArSaLXW2QYDAn+ue/4WgdbggBMrjc3AmHWO0p/gFn+RGTzp8eBSmwEae9pN9NG6jkiWt2dJ9BBlsd52fxNgXKJwLhFIMwZjxJIjOe8zcVO2A1DcYAWG0FKTxE3cxzBuCGMY8z4b5EVj4XRSWTHBwKWa2lva1r9ZsK8Y5yTQLESZBVJfkUwvqibQvUxJYn/K9+V79PVSeSaHwHLtfYl4N4wkVbi7H/sBCk1A11sPULALrrBMeNfNJH28WZ6qqp88hvnCJi3mB+lIu4moqm6UDDzr0TWP1lXXlcufoIAaHPbrBakn9TdFr/ywyohiW7SmlkuCjkAfthr9fepRJeBihBEJdDubd8bnK+w4dMAAAfSSURBVL4/TDKZ+RmaaOyfPEnCoNY8sqqergFST47AmlbDUZfWO1DYdcAZEJVAomIEKX2P9HYcT5wKt7WE8VzRkPsm3ySVSHf92oxCDjDeLabl7vmj8k9VKrKKEqT0JMmZF4HozDABqG4/Q+nCPgOzBrwweolsYyJQetuQ6Tt1V8lLr+TqUDcw03f8P1Uy6ooTZBVJbgXREWECUbswZZFn5LvzL4fRS2QbC4Gw+6tWR1el+mtVIciqs+wLdMuyrJHiRQVZPLJvdt9DjZX2xFsdBKxe6zRiXKoju6YMA1cLR3w+rF4U+aoQRDm2Uc9GG0wyJj5IRDuEcpQxWCT5qbyT1yrrEsp2IlwbBEqNYs2rAfpseAf4Zq/LP1a3bE94+2trVI0gathMb6YjJelBEG0V1vGReliHtZHI1x4BVRppSnFSDkQHhvem+u3+qkoQBUir2zp9EiaqVyatOkZrPVqZ5w+1FI4pdwtz+MQkGnEgUCrTWsBtRPTBsPYYuEM44rCweuXKV50gymG1kDiBW+4FYeuwAagFxWKqeERfZ99LYXUT+dohYLrmJ4hxc5g1jtXeMt/mbex3VmIhMAiRmhBEOaUanRgGqam9UIW8SgExv8kGnSi6RG9QgMn12iMQZap/DXL81sv6n6lVFDUjSOlJMq9t2oRC+k6A9ogEAPM1mGic6s30lkXST5QqikD7vPatWoZSvSDaKcpAzPi1yIovRNGNS6emBCkFUaqtal4L0DHRguKXJHCs7/h/i6afaFUCATtnngKiyD0rGThNOOKySvgWxmbtCbLKW8u1vg3w+QQK7ZPqHkvAL5dPGfzW4sMXvxUGgEQ2XgSsXms7MF9HoI9GsazaMkvmrqDWaFFsR9EJfTNGGURXx3YzRzKMmwiYoquzppxqASeJv56smURBrzwd+1Z7Cgbl+Qx8TbdW7vtGZH6xkJKH1dMETF0RRAG2smMT5hNos+gp43sGqXDyQNeAKouf/CqMQMbNHJ2CcTGA6VGHUtO4Q+mh2fU2hV93BFEAq1X3yamJvQAdEBlw5iECLhuSxfP7u/vfjmon0RsdAXte27YotPwGwMei4qQ2HRJwvtfln1et1fEwvtYlQYYDsHLWD4nwjTABrSurzgsAdJ5wxJXl2El030OgtI6F9LcB+nI5uJT6WTKO8bP+/HLsVFK3rgmiArdy1qEgvj7M6cSRAFNb6Jlwnt/p/z6pxxXtlirVp1pR/BbBOBmESdGsrNJiPARJx3rd3qtl2amwct0TRMW/Se+0jaWc+hsizIoBj+cZuDRVFNcv7Ma7MdhrehP23NZNuTDxDAK+EObMxqjAEH/D6/IvbATgGoIgw0DabuYkZroszGH+MZKwiIGrhjD080od12yEG2AsH0uVRZjPDNHmYsyQ1TahQqpwbH9n/5ONgk1DEUSBumqz4x/K+TBcMzkMLhDjz9LA9X7Bn4duDDZK8irhp2pr0VJIfRqgEwi0XRxjrFqnutST/rmNhm/DEWQ4YaZrnmGA1NRibD+1SAXCDZB0k5gtQhWciM2JGhhq72mfmkqnZhuMEwCKtTOxOhlalPK4Rj301rAEUfeR2uuTHkpfQ4R9KnBfLWSWvx0yitc363qK3ZuZxdI4mgjHVgC/Uo3clMyf28jfeg1NkOGkquopkMbFRGRWJtH4FxH/SQJ/8jfzH4ir7mslfB3LptpBjRQ+QYDaen4wiDaohA/M/Ai1FD7tzRrQbotRCT/isNkUBCl9m8xvXX/isonnE+FrcQAzmg1mfoeAeyRwv0HyIc/pe7CS45VjW53gJNB+JKF2S+9LRLuVYy9Il5n7YcjTRFdfqPrMQXZreb1pCDIMYqYn80EjRWcRKPYylKMmivEQE54GyWdkEc/wBH66b1ZfvpqJNXOmOuu/g0HYnkE7A7xLedt1QnjPeB0kLzSK+asb+XVqpIibjiDDQZbWTnjq6QCfSqBpIdIdi6hqNwfQQhBeI/BCMF5joteZeaGEXLhcLl+o22XLcq3NCMXpRdB0WvUPwNPB2FT9NwibxOJ0SCMM/iczLvSz/m9DqjaMeNMSZDgDaoYmbRgngei0qv1FbZj0R3OUGXeCi5eI2X13RrPQOFpNT5DVqehBKpPKZA2mMyv9Lt446Q/hKav1Ib5JpvFj/yj/2RCaDS06fgiyRpqsOdY+MHAamGcRkdHQGayw8wwMgOWVBSkv7+/u9ys8XN2ZH5cEWf1B72a2MNj4KohPrMV3St3dDWs4xMzPAnyZmJK/HodjRT37WknfxjVBhoFVp+HkoDzcABxWawQ1+KivZJJD2FYbOV0YcEWn+L8Qek0rmhBkhNSuPPqLwwE6lECbN232S1XS8QCD72TiW/Jd+aebOdYosSUECUBt5bqKcTCBDwDTwSC0RgG6bnQYTzB4Aadwl5E27k1KJo2dmYQgYe5cBmXmZXY0isaBxHwgr1yd1m97HWasuGQZzzHxPQzcs6y47B7dtZe4hm90OwlBysxgRn3oS94KRmp7MG9LhG0AfAggu0zT4dQZTzL4JRApQjwnIV+QKfl0vRVBCBdU7aUTglQoB9N7MFmm2rYDpbZhaWwJcCtU11bGNAJPA2E9ZkwDaCoRVDdX9c+GJXcYi5l4KYClAC0BYxnAb5P6b8JSBi8hoI8lP8dp43m/03+lQmGMe7P/H5mgzXr2+nCyAAAAAElFTkSuQmCC"},da6b:function(t,e,i){}},[["ad5c","common/runtime","common/vendor"]]]);
});
require('pages/userCenter/userCenter.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{1900:function(t,e,n){"use strict";var i=n("df0f"),a=n.n(i);a.a},"759a":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"login"},[t._m(0),n("view",{staticClass:"login-list"},[n("view",{staticClass:"login-list-item",attrs:{eventid:"18aaca0d-0"},on:{tap:function(e){t.loginClick("weixin")}}},[n("image",{staticStyle:{width:"100rpx",height:"100rpx"},attrs:{src:"../../static/images/wx-icon.png",mode:"aspectFit"}}),n("text",[t._v("微信")])]),n("view",{staticClass:"login-list-item",attrs:{eventid:"18aaca0d-1"},on:{tap:function(e){t.loginClick("qq")}}},[n("image",{staticStyle:{width:"100rpx",height:"100rpx"},attrs:{src:"../../static/images/qq-icon.png",mode:"aspectFit"}}),n("text",[t._v("QQ")])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"login-welcome"},[n("text",{staticClass:"login-welcome-line"}),n("text",{staticClass:"login-welcome-title"},[t._v("使用以下方式登录")]),n("text",{staticClass:"login-welcome-line"})])}];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"77e8":function(t,e,n){"use strict";n("8c29");var i=o(n("b0ce")),a=o(n("ebba"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},a035:function(t,e,n){"use strict";n.r(e);var i=n("face"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},df0f:function(t,e,n){},ebba:function(t,e,n){"use strict";n.r(e);var i=n("759a"),a=n("a035");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("1900");var s=n("2877"),l=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=l.exports},face:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{loginTime:null}},methods:{loginType:function(e){var n=this;"string"===typeof e?n.$lotusUtils.wxLoginFn(e).then(function(i){if(!i.userInfor)return!1;var a=JSON.parse(i.userInfor);n.registerApiFn(e,a).then(function(e){1===e.code&&t.switchTab({url:"/pages/userCenter/userCenter"})})}):t.showToast({title:"敬请期待^_^",icon:"none"})},registerApiFn:function(t,e){return this.$lotusUtils.ajax("".concat(this.$lotusUtils.webUrl.api,"user/login"),"POST",{openId:e.openId,nickName:e.nickName,source:t,avatarUrl:e.avatarUrl})},loginClick:function(t){var e=this;clearTimeout(this.loginTime),this.loginTime=setTimeout(function(){e.loginType(t)},160)}},onLoad:function(){},onShow:function(){}};e.default=n}).call(this,n("6e42")["default"])}},[["77e8","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/light/light';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/light/light.js';

define('pages/light/light.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/light/light"],{"0791":function(t,n,u){"use strict";u.r(n);var e=u("ac0f"),r=u("7665");for(var a in r)"default"!==a&&function(t){u.d(n,t,function(){return r[t]})}(a);var c=u("2877"),f=Object(c["a"])(r["default"],e["a"],e["b"],!1,null,null,null);n["default"]=f.exports},"3d97":function(t,n,u){"use strict";u("8c29");var e=a(u("b0ce")),r=a(u("0791"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(r.default))},7665:function(t,n,u){"use strict";u.r(n);var e=u("b06f"),r=u.n(e);for(var a in e)"default"!==a&&function(t){u.d(n,t,function(){return e[t]})}(a);n["default"]=r.a},ac0f:function(t,n,u){"use strict";var e=function(){var t=this,n=t.$createElement,u=t._self._c||n;return u("web-view",{attrs:{src:"hybrid/html/light.html",mpcomid:"34739fa7-0"}})},r=[];u.d(n,"a",function(){return e}),u.d(n,"b",function(){return r})},b06f:function(t,n,u){}},[["3d97","common/runtime","common/vendor"]]]);
});
require('pages/light/light.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"45b4":function(t,e,s){"use strict";s.r(e);var a=s("7644"),i=s("cf59");for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);s("56b7");var o=s("2877"),c=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"56b7":function(t,e,s){"use strict";var a=s("d818"),i=s.n(a);i.a},7644:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"express"},[s("image",{staticClass:"express-logo",attrs:{src:"../../static/images/logo.png",mode:"aspectFit"}}),s("view",{staticClass:"express-input-module"},[s("text",{staticClass:"express-input-text"},[t._v("快递单号：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.qrCode,expression:"qrCode"}],staticClass:"uni-input express-input-val",attrs:{type:"text","confirm-type":"search",placeholder:"请输入快递单号",eventid:"1a34ca1f-0"},domProps:{value:t.qrCode},on:{input:function(e){e.target.composing||(t.qrCode=e.target.value)}}}),s("image",{staticClass:"express-input-qr",attrs:{src:"../../static/images/ss-icon.png",mode:"aspectFit",eventid:"1a34ca1f-1"},on:{click:t.scanCodeFn}})]),s("button",{staticClass:"express-button",attrs:{type:"primary",eventid:"1a34ca1f-2"},on:{click:t.searchFn}},[t._v("查询")]),s("button",{staticStyle:{display:"block","margin-bottom":"40rpx"},attrs:{type:"primary",eventid:"1a34ca1f-3"},on:{click:t.openClick}},[t._v("打开相机")]),s("button",{staticStyle:{display:"block","margin-bottom":"40rpx"},attrs:{type:"primary",eventid:"1a34ca1f-4"},on:{click:function(e){t.openLightClick(!0)}}},[t._v("打开闪光灯")]),s("button",{staticStyle:{display:"block","margin-bottom":"40rpx"},attrs:{type:"primary",eventid:"1a34ca1f-5"},on:{click:function(e){t.openLightClick(!1)}}},[t._v("关闭闪光灯")]),s("image",{attrs:{src:t.tempImg,mode:"aspectFit"}}),t.history.length?s("view",{staticClass:"express-history"},[s("text",{staticClass:"express-history-title"},[t._v("查询记录")]),s("view",{staticClass:"express-history-model"},t._l(t.history,function(e,a){return s("view",{key:a,staticClass:"express-history-item",attrs:{eventid:"1a34ca1f-6-"+a},on:{click:function(s){t.checkExpress(e.number)}}},[s("view",{staticClass:"express-history-wrap1"},[s("image",{staticClass:"express-history-img",attrs:{mode:"aspectFit",src:"https://cdn.kuaidi100.com/images/all/56/"+e.codeName+".png"}}),s("view",[s("text",{staticClass:"express-history-company"},[t._v(t._s(e.name))]),s("text",{staticClass:"express-history-number"},[t._v("快递单号："+t._s(e.number))])])])])}))]):t._e(),t.showJqMask?s("view",{staticClass:"express-jq"},[s("view",{staticClass:"express-jq-content"},[s("text",{staticClass:"express-jq-title1"},[t._v("查询剪贴板的单号")]),s("text",{staticClass:"express-jq-title2"},[t._v(t._s(t.qrCode))]),s("view",{staticClass:"express-jq-action"},[s("text",{staticClass:"express-jq-cancel",attrs:{eventid:"1a34ca1f-7"},on:{click:t.cancelJqMask}},[t._v("取消")]),s("text",{staticClass:"express-jq-right",attrs:{eventid:"1a34ca1f-8"},on:{click:function(e){t.checkExpress(t.qrCode)}}},[t._v("确定")])])])]):t._e()],1)},i=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})},"82ad":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s("a248"),i={data:function(){return{title:"我要查物流",qrCode:"",statusArray:[],history:[],showJqMask:!1,tempImg:""}},components:{},onLoad:function(){},onShow:function(){this.getClipboardVal(),t.getStorageSync("historyArr")&&(this.history=t.getStorageSync("historyArr"),this.history.length>10&&(this.history=this.history.splice(0,10)))},methods:{scanCodeFn:function(){var e=this;t.scanCode({success:function(s){t.showToast({title:"快递单号："+s.result,duration:2e3,icon:"none"}),e.qrCode=s.result,e.searchFn()}})},searchFn:function(){if(!this.qrCode)return t.showToast({title:"请输入快递单号",icon:"none",duration:2e3}),!1;t.navigateTo({url:"/pages/detail/detail?code="+this.qrCode}),this.qrCode=""},callPhone:function(e){t.makePhoneCall({phoneNumber:e})},checkExpress:function(e){this.showJqMask=!1,t.navigateTo({url:"/pages/detail/detail?code="+e}),this.qrCode="",t.setClipboardData({data:"",success:function(){}})},cancelJqMask:function(){this.showJqMask=!1,this.qrCode=""},getClipboardVal:function(){var e=this;t.getClipboardData({success:function(t){var s=/^[0-9]{12,13}$|^[0-9]{12}$|^[0-9]{13}$|^[0-9]{12}$|^[A-Za-z0-9]{11,14}$|^[0-9]{9,12}$|^[0-9]{10,14}$|^[A-Za-z0-9]{10,13}$|^[0-9]{8,11}$|^[0-9]{11,12}$|^[0-9]{10,12}$|^[0-9]{10}$|^[A-Za-z0-9]{7,22}$|^[0-9]{9,10}$|^[A-Za-z0-9]{8,20}$|^[A-Za-z0-9]{12}$|^[0-9]{10}$|^[0-9]{10,12}$|^[0-9]{10,12}$|^[A-Za-z0-9]{7,20}$|^[A-Za-z0-9]{8,20}$|^[0-9]{9}$|^[A-Za-z0-9]{10,20}$|^[a-z-A-Z]{2}[0-9]{9}[a-z-A-Z]{2}$|^[A-Za-z0-9]{5,10}$|^[0-9]{12}$|^[0-9]{10}$|^[0-9]{8}$|^[0-9]{12}$|^[0-9]{10,12}$|^[A-Za-z0-9]{10,20}$|^[0-9]{10}$|^[A-Za-z0-9]{8,20}$|^(500)[0-9]{6}$|^[A-Za-z0-9]{8,11}$|^[A-Za-z0-9]{8,20}$|^[A-Za-z0-9]{7,20}$|^[0-9]{7}$|^[0-9]{9}$|^[0-9]{10}$|^[A-Za-z0-9]{8,20}$|^[A-Za-z0-9]{5,20}$|^[0-9]{12}$|^[0-9]{10}$|^(316)[A-Za-z][0-9]{9}$|^[A-Za-z0-9]{9,20}$/;s.test(t.data)&&(e.qrCode=t.data,e.showJqMask=!0)}})},openClick:function(){var t=this;a.lotusUtils.openCamera().then(function(e){t.tempImg=e})},openLightClick:function(t){t?a.lotusUtils.openLight():a.lotusUtils.closeLight()}}};e.default=i}).call(this,s("6e42")["default"])},cf59:function(t,e,s){"use strict";s.r(e);var a=s("82ad"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);e["default"]=i.a},d818:function(t,e,s){},fec4:function(t,e,s){"use strict";s("8c29");var a=n(s("b0ce")),i=n(s("45b4"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))}},[["fec4","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/detail/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/detail/detail.js';

define('pages/detail/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"28f2":function(e,t,a){"use strict";a.r(t);var i=a("ffbf"),r=a("8de2");for(var o in r)"default"!==o&&function(e){a.d(t,e,function(){return r[e]})}(o);a("67da");var n=a("2877"),l=Object(n["a"])(r["default"],i["a"],i["b"],!1,null,null,null);t["default"]=l.exports},"48d6":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("4de5"));function r(e){return e&&e.__esModule?e:{default:e}}var o={data:function(){return{statusArray:[],qrCode:"",name:"",context:"",historyArr:[],prevHistory:[],flag:!1,noDataFlag:!1}},components:{},onLoad:function(t){var a=this;e.getStorage({key:"historyArr",success:function(e){a.prevHistory=e.data}}),this.qrCode=t.code,this.qrCode&&this.searchFn()},methods:{searchFn:function(){var t=this;this.statusArray=[],e.request({url:"https://express.xiaoyaozhan.com/express/",method:"GET",data:{text:this.qrCode},header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var r=a.data,o=t;t.flag=!0,"ok"===r.message?(r.data.map(function(e){e.context.match(/\d{11}/)&&(t.phone=e.context.match(/\d{11}/)[0],e.phoneNumber=e.context.match(/\d{11}/)[0],e.context=e.context.replace(/\d{11}/,"")),o.statusArray.push(e)}),o.statusArray.length&&(o.context=o.statusArray[0].context),r.com&&i.default.map(function(e){if(e.code===r.com)return o.codeName=e.code,o.name=e.companyname,!1}),o.statusArray.length>0&&o.flag&&(o.statusArray[0].name=o.name,o.statusArray[0].codeName=o.codeName,o.statusArray[0].number=o.qrCode,o.prevHistory.length>0?(o.prevHistory.map(function(e,t){e.number===o.qrCode&&o.prevHistory.splice(t,1)}),o.prevHistory.unshift(o.statusArray[0]),o.historyArr=o.prevHistory):o.historyArr.push(o.statusArray[0]),e.setStorage({key:"historyArr",data:o.historyArr})),t.noDataFlag=!1):(e.showToast({duration:2e3,icon:"none",title:"查询不到该快递单号信息"}),t.flag=!1,t.noDataFlag=!0)}})},callPhone:function(t){e.makePhoneCall({phoneNumber:t})}}};t.default=o}).call(this,a("6e42")["default"])},"4de5":function(e,t,a){"use strict";var i=[{cid:"5",id:"1",companyname:"申通快递",shortname:"申通",tel:"95543",url:"st",code:"shentong",hasvali:0,comurl:"http://www.sto.cn",isavailable:"0",promptinfo:"系统升级，请到申通官网查询",testnu:"229855869255",freg:"^[0-9]{12,13}$",freginfo:"申通单号由12位数字组成，常见以268*、368*、58*等开头",telcomplaintnum:"95543",queryurl:"http://www.sto.cn/web%20select.asp",serversite:"http://www.kuaidi100.com/network/province_5.htm"},{cid:"9",id:"2",companyname:"EMS",shortname:"EMS",tel:"11183",url:"ems",code:"ems",hasvali:0,comurl:"http://www.ems.com.cn/",isavailable:"0",promptinfo:"",testnu:"5116741128399",freg:"",freginfo:"13位纯数字或者开头和结尾各2位字母中间9位数字",telcomplaintnum:"11183",queryurl:"http://www.11183.com.cn/ems/order/singleQuery_t?mailNum=",serversite:""},{cid:"10",id:"3",companyname:"顺丰速运",shortname:"顺丰",tel:"95338",url:"sf",code:"shunfeng",hasvali:0,comurl:"http://www.sf-express.com",isavailable:"0",promptinfo:"",testnu:"976186294981",freg:"^[0-9]{12}$",freginfo:"顺丰单号由12位数字组成，常以电话区号后3位开头",telcomplaintnum:"0755-83151111",queryurl:"http://www.sf-express.com/cn/sc/delivery_step/enquiry/coverageArea.html",serversite:"http://www.kuaidi100.com/network/province_10.htm"},{cid:"2",id:"4",companyname:"韵达快递",shortname:"韵达",tel:"95546",url:"yd",code:"yunda",hasvali:0,comurl:"http://www.yundaex.com",isavailable:"0",promptinfo:"",testnu:"1201875063322",freg:"^[0-9]{13}$",freginfo:"韵达单号由13位数字组成",telcomplaintnum:"95546",queryurl:"http://ykjcx.yundasys.com/go.php?wen=",serversite:"http://www.kuaidi100.com/network/province_2.htm"},{cid:"4",id:"5",companyname:"圆通速递",shortname:"圆通",tel:"95554",url:"yt",code:"yuantong",hasvali:0,comurl:"http://www.ytoexpress.com/",isavailable:"0",promptinfo:"",testnu:"881443775034378914",freg:"",freginfo:"圆通单号由10位字母数字组成，常见以6*、8*及V*等开头",telcomplaintnum:"95554",queryurl:"http://www.ytoexpress.com/",serversite:"http://www.kuaidi100.com/network/province_4.htm"},{cid:"3",id:"6",companyname:"中通快递",shortname:"中通",tel:"95311",url:"zt",code:"zhongtong",hasvali:0,comurl:"http://www.zto.cn",isavailable:"0",promptinfo:"",testnu:"768404530475",freg:"^[0-9]{12}$",freginfo:"中通单号由12位数字组成，常见以2008**、6**、010等开头",telcomplaintnum:"95311",queryurl:"http://www.zto.cn/SiteInfo/index.aspx",serversite:"http://www.kuaidi100.com/network/province_3.htm"},{cid:"6",id:"7",companyname:"百世快递",shortname:"汇通",tel:"4009 565656",url:"htky",code:"huitongkuaidi",hasvali:0,comurl:"http://www.800bestex.com/",isavailable:"0",promptinfo:"",testnu:"280490671426",freg:"^[A-Za-z0-9]{11,14}$",freginfo:"百世快递单号由12-14位数字字母组成，常见以50*开头",telcomplaintnum:"4009 565656",queryurl:"http://www.800bestex.com/",serversite:"http://www.kuaidi100.com/network/province_6.htm"},{cid:"7",id:"8",companyname:"天天快递",shortname:"天天",tel:"400-188-8888",url:"tt",code:"tiantian",hasvali:0,comurl:"http://www.ttkdex.com",isavailable:"0",promptinfo:"",testnu:"580239318951",freg:"",freginfo:"天天单号由12或14位数字组成，常见以6**、5*、00*等开头",telcomplaintnum:"400-188-8888",queryurl:"http://www.ttkdex.com/ttkdweb/webdistributed/WebBranchInfo.html",serversite:"http://www.kuaidi100.com/network/province_7.htm"},{cid:"12",id:"9",companyname:"宅急送",shortname:"宅急送",tel:"400-6789-000",url:"zjs",code:"zhaijisong",hasvali:0,comurl:"http://www.zjs.com.cn",isavailable:"0",promptinfo:"",testnu:"5977596855",freg:"",freginfo:"宅急送单号由10位数字组成，常见以7**、6**、5**等开头",telcomplaintnum:"400-6789-000",queryurl:"http://www.zjs.com.cn/WS_Business/WS_Bussiness_CityArea.aspx?id=6",serversite:"http://www.kuaidi100.com/network/province_12.htm"},{cid:"29",id:"10",companyname:"鑫飞鸿",shortname:"鑫飞鸿",tel:"021-69781999",url:"xfh",code:"xinhongyukuaidi",hasvali:0,comurl:"http://www.kuaidi100.com/all/xfh.shtml",isavailable:"0",promptinfo:"",testnu:"9494396730",freg:"",freginfo:"鑫飞鸿快递单号一般是由10位数字组成",telcomplaintnum:"tousu@u-link.org",queryurl:"",serversite:""},{cid:"143",id:"11",companyname:"CCES/国通快递",shortname:"CCES",tel:"400-111-1123",url:"cces",code:"cces",hasvali:0,comurl:"http://www.gto365.com",isavailable:"0",promptinfo:"",testnu:"3117726784",freg:"",freginfo:"常见的CCES单号由10位数字组成",telcomplaintnum:"400-111-1123",queryurl:"http://www.gto365.com",serversite:"http://www.kuaidi100.com/network/province_20.htm"},{cid:"30",id:"12",companyname:"全一快递",shortname:"全一",tel:"400-663-1111",url:"qy",code:"quanyikuaidi",hasvali:0,comurl:"http://www.unitop-apex.com/",isavailable:"0",promptinfo:"",testnu:"112268199514",freg:"^[0-9]{9,12}$",freginfo:"旧的为9位数字，被DHL合并后的中外运全一为12位数字",telcomplaintnum:"021-52695805",queryurl:"http://www.unitop-apex.com/",serversite:"http://www.unitop-apex.com/networkquery.aspx"},{cid:"31",id:"13",companyname:"彪记快递",shortname:"彪记",tel:"+886 (02) 2562-3533",url:"bj",code:"biaojikuaidi",hasvali:null,comurl:"http://www.pewkee.com",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:"http://www2.pewkee.com/pewkee/gb2-pewkee/gb2-global_2.php"},{cid:"16",id:"14",companyname:"星晨急便",shortname:"星晨急便",tel:"",url:"xcjb",code:"xingchengjibian",hasvali:1,comurl:"",isavailable:"0",promptinfo:"",testnu:"7038029040",freg:"^[0-9]{10,14}$",freginfo:"星辰急便单号查询编码由10或14位数字组成",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"32",id:"15",companyname:"亚风速递",shortname:"亚风",tel:"4001-000-002",url:"yfsd",code:"yafengsudi",hasvali:0,comurl:"http://www.airfex.net/",isavailable:"0",promptinfo:"",testnu:"50049680024",freg:"^[A-Za-z0-9]{10,13}$",freginfo:"亚风正确的单号由10位数字组成或以字母开头13位组成，常见已常见以59开头或BAT开头",telcomplaintnum:"400-1000-002",queryurl:"",serversite:"http://www.airfex.net/"},{cid:"33",id:"16",companyname:"源伟丰",shortname:"源伟丰",tel:"400-601-2228",url:"ywf",code:"yuanweifeng",hasvali:null,comurl:"http://www.ywfex.com",isavailable:"1",promptinfo:"",testnu:"27458907",freg:"^[0-9]{8,11}$",freginfo:"常见的源伟丰快递单号查询码一般为8-11的纯数字",telcomplaintnum:"0769-81515303、0769-81515300",queryurl:"",serversite:"http://www.ywfex.com/site_search.jsp"},{cid:"25",id:"17",companyname:"全日通",shortname:"全日通",tel:"020-86298999",url:"qrt",code:"quanritongkuaidi",hasvali:0,comurl:"http://www.at-express.com/",isavailable:"0",promptinfo:"",testnu:"660000000000",freg:"^[0-9]{11,12}$",freginfo:"全日通物流单号由区号+数字的12位数字编码组成",telcomplaintnum:"",queryurl:"http://www.at-express.com/servicesarea.html",serversite:"http://www.at-express.com:8080/servicesarea.html"},{cid:"34",id:"18",companyname:"安信达",shortname:"安信达",tel:"400-716-1919",url:"axd",code:"anxindakuaixi",hasvali:0,comurl:"http://www.axdkd.com",isavailable:"0",promptinfo:"",testnu:"201000000000",freg:"^[0-9]{10,12}$",freginfo:"常见的安信达单号由10、12位数字组成",telcomplaintnum:"400-716-1919",queryurl:"http://www.axdkd.com",serversite:"http://www.axdkd.com/index.php?m=content&c=index&a=lists&catid=27"},{cid:"35",id:"19",companyname:"民航快递",shortname:"民航",tel:"400-817-4008",url:"mh",code:"minghangkuaidi",hasvali:0,comurl:"http://www.cae.com.cn",isavailable:"0",promptinfo:"",testnu:"CAE571402125",freg:"",freginfo:"单号通常是以CAE开头的12位英文+数字",telcomplaintnum:"",queryurl:"",serversite:"http://www.cae.com.cn/infodetailshow.aspx?m=20090225165413640027"},{cid:"144",id:"20",companyname:"凤凰快递",shortname:"凤凰",tel:"010-85826200",url:"fhkd",code:"fenghuangkuaidi",hasvali:null,comurl:"http://www.phoenixexp.com",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"36",id:"21",companyname:"京广速递",shortname:"京广",tel:"0769-88629888",url:"jgsd",code:"jinguangsudikuaijian",hasvali:0,comurl:"http://www.szkke.com/",isavailable:"0",promptinfo:"",testnu:"6600285956",freg:"^[0-9]{10}$",freginfo:"京广速递查询单号一般是由10位数字组成",telcomplaintnum:"0769-88629888",queryurl:"",serversite:"http://www.szkke.com/"},{cid:"340",id:"22",companyname:"配思货运",shortname:"配思",tel:"010-65489928,65489571,65489469,65489456",url:"pshy",code:"peisihuoyunkuaidi",hasvali:null,comurl:"http://www.peisi.cn",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:"http://www.peisi.cn/www/wangdian.asp"},{cid:"37",id:"23",companyname:"中铁物流",shortname:"中铁",tel:"400-000-5566",url:"ztwl",code:"ztky",hasvali:0,comurl:"http://www.ztky.com ",isavailable:"0",promptinfo:"",testnu:"6093086672",freg:"",freginfo:"中铁物流的单号一般由字母或数字组成",telcomplaintnum:"400-650-1118",queryurl:"http://www.ztky.com ",serversite:"http://www.ztky.com/custom/khzq_yywd.aspx"},{cid:"38",id:"24",companyname:"UPS",shortname:"UPS",tel:"400-820-8388",url:"ups",code:"ups",hasvali:0,comurl:"http://www.ups.com/cn",isavailable:"0",promptinfo:"",testnu:"1ZA0F8536742316738",freg:"^[A-Za-z0-9]{7,22}$",freginfo:"标准编码为7到20位数之间的数字，或字母+数字",telcomplaintnum:"800-820-8388",queryurl:"",serversite:"http://www.ups.com/content/cn/zh/locations/dropoff/index.html?WT.svl=PNRO_L1"},{cid:"146",id:"25",companyname:"FedEx-国际件",shortname:"FedEx",tel:"400-886-1888",url:"fedex",code:"fedex",hasvali:0,comurl:"http://fedex.com/cn",isavailable:"0",promptinfo:"",testnu:"9261299995865837450409",freg:"",freginfo:"FedEx-国际单号是由12位纯数字组成",telcomplaintnum:"800-988-1888",queryurl:"",serversite:"http://www.fedex.com/cn/dropoff"},{cid:"40",id:"27",companyname:"DHL-中国件",shortname:"DHL",tel:"800-810-8000",url:"dhl",code:"dhl",hasvali:0,comurl:"http://www.cn.dhl.com",isavailable:"0",promptinfo:"",testnu:"3244675836",freg:"",freginfo:"dhl快递单号由10位或12位纯数字组成",telcomplaintnum:"",queryurl:"",serversite:"http://www.cn.dhl.com/apps/FindCenter/dhldropoff.html"},{cid:"41",id:"28",companyname:"AAE-中国件",shortname:"AAE",tel:"400-610-0400",url:"aae",code:"aae",hasvali:0,comurl:"http://cn.aaeweb.com",isavailable:"0",promptinfo:"",testnu:"4000010055",freg:"^[0-9]{9,10}$",freginfo:"AAE-中国单号是由9位或10位纯数字组成，常以10*、86*开头",telcomplaintnum:"",queryurl:"",serversite:"http://cn.aaeweb.com/network"},{cid:"147",id:"29",companyname:"大田物流",shortname:"大田",tel:"400-626-1166",url:"dtwl",code:"datianwuliu",hasvali:0,comurl:"http://www.dtw.com.cn",isavailable:"0",promptinfo:"",testnu:"6137971090",freg:"^[A-Za-z0-9]{8,20}$",freginfo:"大田物流单号一般是由以6*开头10位纯数字组成",telcomplaintnum:"",queryurl:"",serversite:"http://www.dtw.com.cn/chn/kit/network.htm"},{cid:"1",id:"30",companyname:"德邦物流",shortname:"德邦",tel:"95353",url:"dbwl",code:"debangwuliu",hasvali:0,comurl:"http://www.deppon.com",isavailable:"0",promptinfo:"",testnu:"230624798",freg:"",freginfo:"德邦的货运单号现在是以1或2开头的8位数字组成",telcomplaintnum:"",queryurl:"http://www.deppon.com/wangdian/",serversite:""},{cid:"13",id:"31",companyname:"新邦物流",shortname:"新邦",tel:"4008-000-222",url:"xbwl",code:"xinbangwuliu",hasvali:0,comurl:"http://www.xbwl.cn",isavailable:"0",promptinfo:"",testnu:"0005698",freg:"",freginfo:"新邦物流查询单号一般0开头由8位纯数字组成的",telcomplaintnum:"",queryurl:"http://www.xbwl.cn/NewNetSite.aspx",serversite:""},{cid:"24",id:"32",companyname:"龙邦速递",shortname:"龙邦",tel:"021-59218889",url:"lb",code:"longbanwuliu",hasvali:0,comurl:"http://www.lbex.net",isavailable:"0",promptinfo:"",testnu:"888305364377",freg:"^[A-Za-z0-9]{12}$",freginfo:"由12位数字组成，常见以16*开头，也有字母开头的",telcomplaintnum:"021-59218889",queryurl:"http://122.225.104.195:8089/SearchPaiSongWeb1/index.jsp",serversite:"http://www.lbex.net/site/index.jsp"},{cid:"121",id:"33",companyname:"一邦速递",shortname:"一邦",tel:"000-000-0000",url:"yb",code:"yibangwuliu",hasvali:0,comurl:"http://www.ebon-express.com",isavailable:"1",promptinfo:"快递公司官网已经关闭",testnu:"2240847902",freg:"^[0-9]{10}$",freginfo:"一邦快递单号查询编码由10位数字组合，常见已80*开头",telcomplaintnum:"",queryurl:"",serversite:"http://www.ebon-express.com/wangdian/wangdian!province.action?show=0"},{cid:"11",id:"34",companyname:"速尔快递",shortname:"速尔",tel:"400-158-9888",url:"sewl",code:"suer",hasvali:0,comurl:"http://www.sure56.com",isavailable:"0",promptinfo:"",testnu:"880118395483",freg:"^[0-9]{10,12}$",freginfo:"速尔的快递单号由12位数字组成的",telcomplaintnum:"0769-89339656",queryurl:"http://www.sure56.com/area/service.aspx",serversite:""},{cid:"42",id:"35",companyname:"联昊通",shortname:"联昊通",tel:"0769-88620000",url:"lhtwl",code:"lianhaowuliu",hasvali:0,comurl:"http://www.lhtex.com.cn",isavailable:"0",promptinfo:"",testnu:"231018780470",freg:"^[0-9]{10,12}$",freginfo:"联昊通快递单号由12位或者10位数字编码组成",telcomplaintnum:"0769-88620000,85116666",queryurl:"",serversite:"http://www.lhtex.com.cn/wd.asp"},{cid:"43",id:"36",companyname:"广东邮政",shortname:"广东邮政",tel:"020-38181677",url:"gdyzwl",code:"guangdongyouzhengwuliu",hasvali:null,comurl:"http://www.ep183.cn/",isavailable:"1",promptinfo:"",testnu:"A044813738",freg:"^[A-Za-z0-9]{7,20}$",freginfo:"广东邮政由10位数字和字母组合或者7、8位的纯数字组成",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"44",id:"37",companyname:"中邮物流",shortname:"中邮",tel:"11183",url:"zywl",code:"zhongyouwuliu",hasvali:0,comurl:"http://www.cnpl.com.cn",isavailable:"0",promptinfo:"",testnu:"AA24256934599",freg:"^[A-Za-z0-9]{8,20}$",freginfo:"一般是以A或E开头，字母+数字组成，查询时CNPL无需输入",telcomplaintnum:"",queryurl:"",serversite:"http://www.cnpl.com.cn/itemcontent.jsp?itemId=6"},{cid:"14",id:"38",companyname:"天地华宇",shortname:"华宇",tel:"400-808-6666",url:"tdhy",code:"tiandihuayu",hasvali:0,comurl:"http://www.hoau.net",isavailable:"0",promptinfo:"",testnu:"066169042",freg:"",freginfo:"华宇物流查询单号是由8位数字组成",telcomplaintnum:"400-808-6666",queryurl:"http://www.hoau.net/",serversite:""},{cid:"148",id:"39",companyname:"盛辉物流",shortname:"盛辉",tel:"4008-222-222",url:"sh",code:"shenghuiwuliu",hasvali:0,comurl:"http://www.shenghui56.com",isavailable:"0",promptinfo:"",testnu:"238117137",freg:"^[0-9]{9}$",freginfo:"盛辉物流单号由9位数字编码组成",telcomplaintnum:"4008-222-222",queryurl:"",serversite:"http://www.shenghui56.com/list-4.html"},{cid:"149",id:"40",companyname:"长宇物流",shortname:"长宇",tel:"4007-161-262",url:"cywl",code:"changyuwuliu",hasvali:null,comurl:"http://61.145.121.47/custSearch.jsp",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:"http://www.cyexp.com/Guide3.asp"},{cid:"45",id:"41",companyname:"飞康达",shortname:"飞康达",tel:"010-84223376,84223378",url:"fkd",code:"feikangda",hasvali:0,comurl:"http://www.fkd.com.cn",isavailable:"0",promptinfo:"",testnu:"500054166104",freg:"",freginfo:"飞康达单号查询编码大多以8开头，一般由11位的数字组成",telcomplaintnum:"",queryurl:"",serversite:"http://www.fkd.com.cn/network.asp?id=1"},{cid:"46",id:"42",companyname:"元智捷诚",shortname:"元智捷诚",tel:"400-081-2345",url:"yzjc",code:"yuanzhijiecheng",hasvali:0,comurl:"http://www.yjkd.com",isavailable:"0",promptinfo:"",testnu:"XF012180287",freg:"^[A-Za-z0-9]{10,20}$",freginfo:"元智快递查询单号一般以FD开头，由最多11位数字+字母形式组成",telcomplaintnum:"400-08-12345",queryurl:"",serversite:"http://www.yjkd.com/wd/wangdian.asp"},{cid:"47",id:"43",companyname:"邮政包裹/平邮",shortname:"邮政国内",tel:"11185",url:"yzgn",code:"youzhengguonei",hasvali:0,comurl:"http://yjcx.chinapost.com.cn",isavailable:"0",promptinfo:"",testnu:"9610005849243",freg:"",freginfo:"邮政单号以字母开头+11位数字，常见KA、SB等开头",telcomplaintnum:"11185",queryurl:"",serversite:""},{cid:"48",id:"44",companyname:"国际包裹",shortname:"邮政国际",tel:"11185",url:"yzgj",code:"youzhengguoji",hasvali:0,comurl:"http://intmail.183.com.cn/",isavailable:"0",promptinfo:"",testnu:"CK035278885DE",freg:"^[a-z-A-Z]{2}[0-9]{9}[a-z-A-Z]{2}$",freginfo:"由13位字母和数字组成，开头和结尾是字母，中间是数字 ",telcomplaintnum:"11185",queryurl:"",serversite:""},{cid:"49",id:"45",companyname:"万家物流",shortname:"万家",tel:"4001-156-561",url:"wjwl",code:"wanjiawuliu",hasvali:0,comurl:"http://www.manco-logistics.com/",isavailable:"0",promptinfo:"",testnu:"SJ0407976",freg:"",freginfo:"万家物流单号查询编码通常是由城市编码(英文)+7位数字组成",telcomplaintnum:"021-60448911",queryurl:"http://www.manco-logistics.com/cargosearch.jsp",serversite:"http://www.manco-logistics.com/"},{cid:"188",id:"46",companyname:"远成物流",shortname:"远成",tel:"400-820-1646",url:"ycwl",code:"yuanchengwuliu",hasvali:0,comurl:"http://www.ycgwl.com/",isavailable:"0",promptinfo:"",testnu:"0016058401",freg:"^[A-Za-z0-9]{5,10}$",freginfo:"远成物流查询单号一般是以00开头，由最多10位的数字组成",telcomplaintnum:"400-820-1646",queryurl:"",serversite:"http://www.ycgwl.com/map.asp"},{cid:"50",id:"47",companyname:"信丰物流",shortname:"信丰",tel:"400-830-6333",url:"xfwl",code:"xinfengwuliu",hasvali:0,comurl:"http://www.xf-express.com.cn",isavailable:"0",promptinfo:"",testnu:"137441402465",freg:"^[0-9]{12}$",freginfo:"信丰快递正确的单号由12位纯数字组成，常见已139*开头",telcomplaintnum:"4008 306 333、0769-81518333",queryurl:"",serversite:"http://www.xf-express.com.cn/showarea.aspx?pid=-1=-1"},{cid:"51",id:"48",companyname:"文捷航空",shortname:"文捷",tel:"020-88561502,85871501,31683301",url:"wjhk",code:"wenjiesudi",hasvali:null,comurl:"http://www.wjexpress.com",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"020-36680069、020-86372740、020-88561502",queryurl:"",serversite:""},{cid:"52",id:"49",companyname:"全晨快递",shortname:"全晨",tel:"0769-82026703",url:"qckd",code:"quanchenkuaidi",hasvali:0,comurl:"http://www.qckd.net/",isavailable:"0",promptinfo:"",testnu:"3086275236",freg:"^[0-9]{10}$",freginfo:"全晨单号由10位数字编码组成",telcomplaintnum:"0769-82026701/82026703",queryurl:"",serversite:"http://www.qckd.net/services.asp"},{cid:"53",id:"50",companyname:"佳怡物流",shortname:"佳怡",tel:"400-631-9999",url:"jywl",code:"jiayiwuliu",hasvali:0,comurl:"http://www.jiayi56.com/",isavailable:"0",promptinfo:"",testnu:"37172798",freg:"^[0-9]{8}$",freginfo:"佳怡物流查询单号一般是由8位数字组成",telcomplaintnum:"400-631-9999",queryurl:"",serversite:"http://www.jiayi56.com/products_index.html"},{cid:"17",id:"51",companyname:"优速物流",shortname:"优速",tel:"400-1111-119",url:"yskd",code:"youshuwuliu",hasvali:0,comurl:"http://www.uc56.com",isavailable:"0",promptinfo:"",testnu:"518110315363",freg:"",freginfo:"优速单号由12位数字组成，LP开头的不是优速快递单号",telcomplaintnum:"400-1111-119",queryurl:"http://www.uc56.com/Chinese/UC56ServiceArea.aspx",serversite:"http://www.uc56.com/Chinese/ServiceNetwork.aspx"},{cid:"18",id:"52",companyname:"快捷速递",shortname:"快捷",tel:"4008-333-666",url:"kjkd",code:"kuaijiesudi",hasvali:0,comurl:"http://www.kjkd.com/",isavailable:"0",promptinfo:"",testnu:"536084760465",freg:"",freginfo:"快捷常见单号有13位纯数字组成",telcomplaintnum:"4008333666",queryurl:"http://www.kjkd.com/",serversite:"http://www.kjkd.com/"},{cid:"28",id:"53",companyname:"D速快递",shortname:"D速",tel:"0531-88636363",url:"dskd",code:"dsukuaidi",hasvali:0,comurl:"http://www.d-exp.cn",isavailable:"0",promptinfo:"",testnu:"316J074253086",freg:"",freginfo:"常见的单号以DS开头+9位纯数字+CN结尾共13位",telcomplaintnum:"0531-88626262",queryurl:"",serversite:"http://www.d-exp.cn/Branch/China.aspx"},{cid:"54",id:"54",companyname:"全际通",shortname:"全际通",tel:"400-0179-888",url:"qjt",code:"quanjitong",hasvali:0,comurl:"http://www.quanjt.com",isavailable:"0",promptinfo:"",testnu:"750000000000",freg:"^[0-9]{12}$",freginfo:"全际通物流单号由区号+数字的12位数字编码组成",telcomplaintnum:"021-62966050",queryurl:"",serversite:"http://www.quanjt.com/fuwu/fuwu.do"},{cid:"19",id:"55",companyname:"能达速递",shortname:"能达",tel:"400-6886-765",url:"ndkd",code:"ganzhongnengda",hasvali:0,comurl:"http://www.nd56.com/",isavailable:"0",promptinfo:"",testnu:"886000130608",freg:"^[0-9]{10,12}$",freginfo:"港中能达单号一般以88开头的12位或10位数字",telcomplaintnum:"400-6886-765",queryurl:"http://www.nd56.com/",serversite:"http://www.kuaidi100.com/network/province_19.htm"},{cid:"55",id:"56",companyname:"青岛安捷快递",shortname:"安捷",tel:"400-056-5656",url:"ajkd",code:"anjiekuaidi",hasvali:0,comurl:"http://www.anjelex.com",isavailable:"1",promptinfo:"",testnu:"AN23733449",freg:"^[A-Za-z0-9]{10,20}$",freginfo:"常见的安捷单号由AN+开头8位数字或者12、13位纯数字组成",telcomplaintnum:"4000565656",queryurl:"",serversite:"http://www.anjelex.com/kuaidi.asp"},{cid:"150",id:"57",companyname:"越丰物流",shortname:"越丰",tel:"852-23909969",url:"yfwl",code:"yuefengwuliu",hasvali:0,comurl:"http://www.yfexpress.com.hk",isavailable:"0",promptinfo:"",testnu:"3001941084",freg:"^[0-9]{10}$",freginfo:"常见的越丰物流查询单号编码由10纯数字组成，常见以80*开头",telcomplaintnum:"852-23909969",queryurl:"",serversite:"http://www.yfexpress.com.hk/service.php"},{cid:"56",id:"58",companyname:"DPEX",shortname:"DPEX",tel:"400-920-7011/800-820-7011",url:"dpex",code:"dpex",hasvali:0,comurl:"https://www.dpex.com/",isavailable:"0",promptinfo:"",testnu:"573006666956",freg:"^[A-Za-z0-9]{8,20}$",freginfo:"DPEX快递查询单号通常以5开头，由12位数字组成，部分dpex国际快递有13位数",telcomplaintnum:"400-920-7011/800-820-7011",queryurl:"",serversite:""},{cid:"151",id:"59",companyname:"急先达",shortname:"急先达",tel:"021-59766363",url:"jxd",code:"jixianda",hasvali:0,comurl:"http://www.joust.net.cn/",isavailable:"0",promptinfo:"",testnu:"500617727",freg:"^(500)[0-9]{6}$",freginfo:"急先达单号一般是由以500*开头的9位数字组成",telcomplaintnum:"021-59766363",queryurl:"",serversite:"http://www.joust.cn/Message2.aspx"},{cid:"152",id:"60",companyname:"百福东方",shortname:"百福东方",tel:"400-706-0609",url:"bfdf",code:"baifudongfang",hasvali:0,comurl:"http://www.ees.com.cn",isavailable:"0",promptinfo:"",testnu:"111159484",freg:"",freginfo:"百福东方单号一般是由9位数字组成,常以10开头",telcomplaintnum:"400-706-0609",queryurl:"",serversite:"http://www.ees.com.cn/fuwuwangluo.html"},{cid:"57",id:"61",companyname:"BHT",shortname:"BHT",tel:"010-58633508",url:"bht",code:"bht",hasvali:0,comurl:"http://www.bht-exp.com/",isavailable:"0",promptinfo:"",testnu:"1285539849",freg:"^[A-Za-z0-9]{8,11}$",freginfo:"常见的BHT单号由BHT+开头8位数字或者8位纯数字组成",telcomplaintnum:"010-58633508",queryurl:"",serversite:"http://www.bht-exp.com/iDoc.asp?docID=170"},{cid:"168",id:"62",companyname:"伍圆速递",shortname:"伍圆",tel:"0592—5050535",url:"wy",code:"wuyuansudi",hasvali:null,comurl:"http://www.f5xm.com",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"169",id:"64",companyname:"蓝镖快递",shortname:"蓝镖",tel:"0769-82898999",url:"lanb",code:"lanbiaokuaidi",hasvali:0,comurl:"http://www.bluedart.cn",isavailable:"0",promptinfo:"",testnu:"900000000000",freg:"^[A-Za-z0-9]{8,20}$",freginfo:"蓝镖常见单号以90*开同的13位纯数字组成",telcomplaintnum:"800-988-1888 400-886-1888",queryurl:"",serversite:"http://www.bluedart.cn/p_ser.asp"},{cid:"170",id:"65",companyname:"COE",shortname:"COE",tel:"0755-83575000",url:"coe",code:"coe",hasvali:0,comurl:"http://www.coe.com.hk",isavailable:"0",promptinfo:"",testnu:"610004404886",freg:"",freginfo:"COE单号由10、12位数字组成,常见以区号+8位数字或66+10为数字",telcomplaintnum:"86-755-83575000 ",queryurl:"",serversite:"http://www.coe.com.hk/contact.asp"},{cid:"171",id:"66",companyname:"南京100",shortname:"南京100",tel:"025-84510043",url:"nj",code:"nanjing",hasvali:0,comurl:"http://www.100cskd.com",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"025-84510043 84510044",queryurl:"",serversite:""},{cid:"58",id:"67",companyname:"恒路物流",shortname:"恒路",tel:"400-182-6666",url:"hl",code:"hengluwuliu",hasvali:0,comurl:"http://www.e-henglu.com",isavailable:"0",promptinfo:"",testnu:"01560213",freg:"^[A-Za-z0-9]{7,20}$",freginfo:"恒路物流单号以7-13位的字母加数字组合，常见已8*开头的9位数字单号",telcomplaintnum:"400-182-6666",queryurl:"",serversite:"http://www.e-henglu.com/service_network.htm"},{cid:"172",id:"68",companyname:"金大物流",shortname:"金大",tel:"0755-82262209",url:"jd",code:"jindawuliu",hasvali:0,comurl:"http://www.szkingdom.com.cn",isavailable:"0",promptinfo:"",testnu:"2006785",freg:"^[0-9]{7}$",freginfo:"金大快递正确的单号由7位数字组成",telcomplaintnum:"0755-82262209",queryurl:"",serversite:"http://www.szkingdom.com.cn/Service.asp"},{cid:"173",id:"69",companyname:"华夏龙",shortname:"华夏龙",tel:"400-716-6133",url:"hxl",code:"huaxialongwuliu",hasvali:0,comurl:"http://www.chinadragon56.com",isavailable:"0",promptinfo:"",testnu:"984535",freg:"",freginfo:"华夏龙物流的单号一般由纯数字组成",telcomplaintnum:"400-716-6133 ",queryurl:"",serversite:"http://www.chinadragon56.com/we.aspx?bid=79"},{cid:"59",id:"70",companyname:"运通中港",shortname:"运通",tel:"0769-81156999",url:"ytkd",code:"yuntongkuaidi",hasvali:0,comurl:"http://www.ytkd168.com",isavailable:"0",promptinfo:"",testnu:"657809056",freg:"^[0-9]{9}$",freginfo:"运通通常以61*开头的9位单号",telcomplaintnum:"0769-81156999",queryurl:"",serversite:"http://www.ytkd168.com/Service_search.asp"},{cid:"15",id:"71",companyname:"佳吉快运",shortname:"佳吉",tel:"400-820-5566",url:"jjwl",code:"jiajiwuliu",hasvali:0,comurl:"http://www.jiaji.com",isavailable:"0",promptinfo:"",testnu:"726170665",freg:"",freginfo:"佳吉快运由9位纯数字组成",telcomplaintnum:"400-820-5566",queryurl:"http://www.jiaji.com/website.aspx",serversite:"http://www.kuaidi100.com/network/province_15.htm"},{cid:"120",id:"72",companyname:"盛丰物流",shortname:"盛丰",tel:"0591-83621111",url:"sfwl",code:"shengfengwuliu",hasvali:0,comurl:"http://www.sfwl.com.cn",isavailable:"0",promptinfo:"",testnu:"35147357",freg:"",freginfo:"盛丰物流的单号由字母和数字组成",telcomplaintnum:"0591-83621111",queryurl:"",serversite:"http://www.sfwl.com.cn/sfwl.asp?ClassId=22"},{cid:"174",id:"73",companyname:"源安达",shortname:"源安达",tel:"0769-85157789",url:"yad",code:"yuananda",hasvali:0,comurl:"http://www.yadex.com.cn",isavailable:"0",promptinfo:"",testnu:"75006118366",freg:"",freginfo:"源安达快递单号查询编码一般为11的纯数字组成",telcomplaintnum:"0769-85157789",queryurl:"",serversite:"http://www.yadex.com.cn/station.asp"},{cid:"60",id:"74",companyname:"加运美",shortname:"加运美",tel:"0769-85515555",url:"jymwl",code:"jiayunmeiwuliu",hasvali:0,comurl:"http://www.jym56.cn/",isavailable:"0",promptinfo:"",testnu:"2191409648",freg:"^[0-9]{10}$",freginfo:"加运美快递正确的单号由10位数字组成",telcomplaintnum:"0769-85515555/85166425 ",queryurl:"",serversite:"http://www.tms56.com/fwwdindex.asp"},{cid:"175",id:"75",companyname:"万象物流",shortname:"万象",tel:"400-820-8088",url:"wxwl",code:"wanxiangwuliu",hasvali:0,comurl:"http://www.ewinshine.com",isavailable:"0",promptinfo:"",testnu:"032499209233840",freg:"",freginfo:"万象物流的单号一般由字母和数字组成",telcomplaintnum:"（021）51035766-8062",queryurl:"http://www.ewinshine.com",serversite:""},{cid:"176",id:"76",companyname:"宏品物流",shortname:"宏品",tel:"400-612-1456",url:"hpwl",code:"hongpinwuliu",hasvali:null,comurl:"http://www.hpexpress.com.cn",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"177",id:"77",companyname:"GLS",shortname:"GLS",tel:"877-914-5465",url:"gls",code:"gls",hasvali:0,comurl:"http://www.gls-group.net",isavailable:"1",promptinfo:"",testnu:"93805190173",freg:"",freginfo:"",telcomplaintnum:"877-914-5465",queryurl:"",serversite:"http://www.cn-gls.com/product-inland3.html"},{cid:"178",id:"78",companyname:"上大物流",shortname:"上大",tel:"400-021-9122",url:"shangda",code:"shangda",hasvali:null,comurl:"http://www.sundapost.net",isavailable:"0",promptinfo:"",testnu:"U110173213",freg:"",freginfo:"上大物流的单号一般由数字组成",telcomplaintnum:"400-021-9122",queryurl:"",serversite:"http://www.sundapost.net/cgi-bin/GInfo.dll?DispInfo;w=sundapost;nid=10414"},{cid:"8",id:"79",companyname:"中铁快运",shortname:"中铁",tel:"95572",url:"ztky",code:"zhongtiewuliu",hasvali:0,comurl:"http://www.cre.cn ",isavailable:"0",promptinfo:"",testnu:"K05090731602",freg:"",freginfo:"一般是由字母K或B开头，共14位字母与数字组合",telcomplaintnum:"95572",queryurl:"http://www.cre.cn ",serversite:""},{cid:"61",id:"80",companyname:"原飞航",shortname:"原飞航",tel:"0769-87001100",url:"yfh",code:"yuanfeihangwuliu",hasvali:0,comurl:"http://www.yfhex.com",isavailable:"0",promptinfo:"",testnu:"110000901371",freg:"",freginfo:"原飞航单号由10位数字组成",telcomplaintnum:"0755-29778899 / 29778100",queryurl:"",serversite:"http://www.yfhex.com/Module/Contact/SN_Outlets.aspx"},{cid:"197",id:"81",companyname:"海外环球",shortname:"海外环球",tel:"010-59790107",url:"hwhq",code:"haiwaihuanqiu",hasvali:0,comurl:"http://www.haiwaihuanqiu.com/",isavailable:"0",promptinfo:"",testnu:"10100000000000",freg:"^[A-Za-z0-9]{8,20}$",freginfo:"海外环球常见单号有字母开头的13位数字或者20位纯数字的单号",telcomplaintnum:"010-59790107",queryurl:"",serversite:""},{cid:"191",id:"82",companyname:"三态速递",shortname:"三态",tel:"400-881-8106  ",url:"stsd",code:"santaisudi",hasvali:0,comurl:"http://www.sfcservice.com/",isavailable:"0",promptinfo:"",testnu:"0001354",freg:"^[A-Za-z0-9]{5,20}$",freginfo:"三态常见单号有10位纯数字组成",telcomplaintnum:"400-881-8106",queryurl:"",serversite:""},{cid:"62",id:"83",companyname:"晋越快递",shortname:"晋越",tel:"400-638-9288",url:"jykd",code:"jinyuekuaidi",hasvali:0,comurl:"http://www.byondex.com",isavailable:"0",promptinfo:"",testnu:"501910605146",freg:"",freginfo:"晋越快递的单号一般由12位纯数字组成",telcomplaintnum:"400-638-9288",queryurl:"",serversite:"http://www.byondex.com.cn/ServeNet.Asp"},{cid:"63",id:"85",companyname:"联邦快递",shortname:"联邦",tel:"400-889-1888",url:"lianb",code:"lianbangkuaidi",hasvali:0,comurl:"http://cndxp.apac.fedex.com/dxp.html",isavailable:"0",promptinfo:"",testnu:"120886787472",freg:"^[0-9]{12}$",freginfo:"联邦快递国内单号常见以12*开头12位纯数字组成",telcomplaintnum:"400-889-1888",queryurl:"",serversite:"http://www.fedex.com/cn/dropoff"},{cid:"66",id:"99643",companyname:"飞快达",shortname:"飞快达",tel:"400-716-6666",url:"feikuaida",code:"feikuaida",hasvali:0,comurl:"http://www.fkdex.com",isavailable:"1",promptinfo:"",testnu:"3105201982",freg:"^[0-9]{10}$",freginfo:"飞快达常见单号有10位纯数字组成",telcomplaintnum:"400-716-6666",queryurl:"",serversite:"http://www.fkdex.com:8050/network.asp"},{cid:"23",id:"128693",companyname:"全峰快递",shortname:"全峰",tel:"400-100-0001",url:"qfkd",code:"quanfengkuaidi",hasvali:0,comurl:"http://www.qfkd.com.cn",isavailable:"0",promptinfo:"",testnu:"720193084187",freg:"",freginfo:"全峰快递单号一般由10或者12位数字组成",telcomplaintnum:"",queryurl:"http://www.qfkd.com.cn/quyu.aspx",serversite:"http://www.kuaidi100.com/network/province_23.htm"},{cid:"67",id:"145551",companyname:"如风达",shortname:"如风达",tel:"400-010-6660",url:"rufengda",code:"rufengda",hasvali:0,comurl:"http://www.rufengda.com",isavailable:"0",promptinfo:"",testnu:"6201506740351",freg:"",freginfo:"如风达单号或者是纯数字，或者字母加数字。",telcomplaintnum:"",queryurl:"http://www.rufengda.com",serversite:"http://www.rufengda.com/check/check_network.html"},{cid:"68",id:"158572",companyname:"乐捷递",shortname:"乐捷递",tel:"400-618-1400",url:"lejiedi",code:"lejiedi",hasvali:0,comurl:"http://www.ljd365.com",isavailable:"0",promptinfo:"",testnu:"15082900400001777CDE",freg:"",freginfo:"乐捷递的单号一般由字母和数字组成",telcomplaintnum:"",queryurl:"www.ljd365.com",serversite:"http://www.ljd365.com/fuwucx.asp"},{cid:"69",id:"158573",companyname:"忠信达",shortname:"忠信达",tel:"400-646-6665",url:"zhongxinda",code:"zhongxinda",hasvali:0,comurl:"http://www.zhongxind.cn/index.asp",isavailable:"0",promptinfo:"",testnu:"253120262",freg:"",freginfo:"忠信达快递的单号一般由纯数字组成",telcomplaintnum:"",queryurl:"http://www.zhongxind.cn/index.asp",serversite:"http://www.zhongxind.cn/range.asp"},{cid:"64",id:"225616",companyname:"芝麻开门",shortname:"芝麻开门",tel:"400-105-6056",url:"zhimakaimen",code:"zhimakaimen",hasvali:0,comurl:"http://www.zmkmex.com/ ",isavailable:"0",promptinfo:"",testnu:"2994156174530",freg:"",freginfo:"芝麻开门的单号由数字组成",telcomplaintnum:"400-105-6056",queryurl:"http://www.zmkmex.com/ ",serversite:"http://www.zmkmex.com/Article?id=cbe7ff8cc74b41a0a9d50ae0eaadca58"},{cid:"70",id:"247720",companyname:"赛澳递",shortname:"赛澳递",tel:"4000-345-888",url:"saiaodi",code:"saiaodi",hasvali:0,comurl:"http://www.51cod.com ",isavailable:"0",promptinfo:"",testnu:"JSC101011082067",freg:"",freginfo:"赛澳递是B2C公司的落地配，单号是各落低配的订单号",telcomplaintnum:"4000-345-888",queryurl:"http://www.51cod.com ",serversite:"http://www.51cod.com/network/"},{cid:"71",id:"247731",companyname:"海红网送",shortname:"海红网送",tel:"400-632-9988",url:"haihongwangsong",code:"haihongwangsong",hasvali:0,comurl:"http://www.haihongwangsong.com/index.asp",isavailable:"0",promptinfo:"",testnu:"SD0000236321HH",freg:"",freginfo:"海红网送的单号一般由前后各2位的字母，中间8位纯数字组成",telcomplaintnum:"",queryurl:"http://www.haihongwangsong.com/index.asp",serversite:"http://www.haihongwangsong.com/order.asp"},{cid:"21",id:"257357",companyname:"共速达",shortname:"共速达",tel:"400-111-0005",url:"gongsuda",code:"gongsuda",hasvali:0,comurl:"http://www.gongsuda.com",isavailable:"0",promptinfo:"",testnu:"0005644",freg:"",freginfo:"共速达的单号一般由755开头的11位纯数字组成",telcomplaintnum:"",queryurl:"http://www.gongsuda.com",serversite:"http://www.gongsuda.com/search.aspx"},{cid:"65",id:"259431",companyname:"嘉里大通",shortname:"嘉里大通",tel:"400-610-3188",url:"jialidatong",code:"jialidatong",hasvali:0,comurl:"http://www.kerryeas.com",isavailable:"0",promptinfo:"",testnu:"316A376284420",freg:"^(316)[A-Za-z][0-9]{9}$",freginfo:"嘉里大通的单号一般由13位字母和数字组成",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"192",id:"259443",companyname:"OCS",shortname:"OCS",tel:"400-118-8588",url:"ocs",code:"ocs",hasvali:0,comurl:"http://www.ocschina.com",isavailable:"0",promptinfo:"",testnu:"23012566894",freg:"",freginfo:"OCS国际快递的单号一般由11位纯数字组成",telcomplaintnum:"",queryurl:"http://www.ocschina.com",serversite:"http://www.ocschina.com/office/OfficeMap.aspx"},{cid:"193",id:"259455",companyname:"USPS",shortname:"USPS",tel:"800-275-8777",url:"usps",code:"usps",hasvali:0,comurl:"https://zh.usps.com",isavailable:"0",promptinfo:"",testnu:"LC781413573US",freg:"",freginfo:"USPS单号的记录超过一个月会自动清除",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"194",id:"259467",companyname:"美国快递",shortname:"美国",tel:"888-611-1888",url:"meiguokuaidi",code:"meiguokuaidi",hasvali:0,comurl:"http://www.us-ex.com",isavailable:"0",promptinfo:"",testnu:"US101257404EX",freg:"",freginfo:"美国快递的单号一般由DD开头US结尾，中间9位数字",telcomplaintnum:"",queryurl:"",serversite:"http://www.us-ex.com/ListViewEdit.aspx?ID=65"},{cid:"73",id:"259480",companyname:"成都立即送",shortname:"立即送",tel:"400-028-5666",url:"lijisong",code:"lijisong",hasvali:0,comurl:"http://www.cdljs.com",isavailable:"0",promptinfo:"",testnu:"955730086248",freg:"",freginfo:"立即送的单号由纯数字组成",telcomplaintnum:"400-028-5666",queryurl:"http://www.cdljs.com",serversite:"http://www.cdljs.com/a/yewuyufuwu/yewujieshao/2011/1011/8.html"},{cid:"74",id:"259492",companyname:"银捷速递",shortname:"银捷",tel:"0755-88999000",url:"yinjiesudi",code:"yinjiesudi",hasvali:0,comurl:"www.sjfd-express.com",isavailable:"0",promptinfo:"",testnu:"D150105369641",freg:"",freginfo:"银捷速递的单号一般由9-12位的数字组成，亚马逊的单号以a开头",telcomplaintnum:"",queryurl:"www.sjfd-express.com",serversite:"www.sjfd-express.com"},{cid:"72",id:"259504",companyname:"门对门",shortname:"门对门",tel:"400-700-7676",url:"menduimen",code:"menduimen",hasvali:0,comurl:"http://www.szdod.com",isavailable:"0",promptinfo:"",testnu:"15111673026622",freg:"",freginfo:"门对门是为各B2C配送的落地配，单号是各B2C的订单号",telcomplaintnum:"0512-50169999 ",queryurl:"http://www.szdod.com",serversite:""},{cid:"75",id:"267490",companyname:"递四方",shortname:"递四方",tel:"0755-33933895",url:"disifang",code:"disifang",hasvali:0,comurl:"http://www.4px.com",isavailable:"0",promptinfo:"",testnu:"RF171700114SG",freg:"",freginfo:"递四方的单号一般由前后各2位字母，中间9位数字组成",telcomplaintnum:"",queryurl:"http://www.4px.com",serversite:""},{cid:"76",id:"301203",companyname:"郑州建华",shortname:"郑州建华",tel:"0371-65995266",url:"zhengzhoujianhua",code:"zhengzhoujianhua",hasvali:0,comurl:"http://www.zzjhtd.com/",isavailable:"0",promptinfo:"",testnu:"85203804226",freg:"",freginfo:"郑州建华的单号由字母和数字组成",telcomplaintnum:"0371-65995266/86115588 ",queryurl:"http://www.zzjhtd.com/",serversite:""},{cid:"195",id:"301226",companyname:"河北建华",shortname:"河北建华",tel:"0311-86123186",url:"hebeijianhua",code:"hebeijianhua",hasvali:0,comurl:"http://116.255.133.172/hebeiwebsite/index.jsp",isavailable:"0",promptinfo:"",testnu:"112000000000000000",freg:"",freginfo:"河北建华的单号由字母和数字组成",telcomplaintnum:"0311-85886302",queryurl:"http://116.255.133.172/hebeiwebsite/index.jsp",serversite:""},{cid:"77",id:"301240",companyname:"微特派",shortname:"微特派",tel:"400-6363-000",url:"weitepai",code:"weitepai",hasvali:0,comurl:"http://www.vtepai.com/ ",isavailable:"0",promptinfo:"",testnu:"D661011185417",freg:"",freginfo:"微特派单号一般由数字组成",telcomplaintnum:"400-6363-000",queryurl:"http://www.vtepai.com/ ",serversite:""},{cid:"218",id:"312934",companyname:"DHL-德国件（DHL Deutschland）",shortname:"dhlde",tel:"+49 (0) 180 5 345300-1*",url:"dhlde",code:"dhlde",hasvali:0,comurl:"http://www.dhl.de/en.html",isavailable:"0",promptinfo:"",testnu:"220514910032",freg:"",freginfo:"DHL-德国快递单号一般有12位数字组成",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"219",id:"324832",companyname:"通和天下",shortname:"通和天下",tel:"400-0056-516 ",url:"tonghetianxia",code:"tonghetianxia",hasvali:0,comurl:"http://www.cod56.com",isavailable:"0",promptinfo:"",testnu:"2005761424",freg:"",freginfo:"通和天下的单号一般由200开头的10位数字组成",telcomplaintnum:"400-0056-516 ",queryurl:"http://www.cod56.com",serversite:"http://www.cod56.com/about.asp?id=4"},{cid:"189",id:"335028",companyname:"EMS-国际件",shortname:"EMS-国际件",tel:"11183",url:"emsguoji",code:"emsguoji",hasvali:0,comurl:"http://www.ems.com.cn",isavailable:"0",promptinfo:"",testnu:"BE146871721NL",freg:"",freginfo:"",telcomplaintnum:"11183",queryurl:"http://www.ems.com.cn/mailtracking/cha_xun_lian_jie.html ",serversite:""},{cid:"190",id:"335045",companyname:"FedEx-美国件",shortname:"FedEx",tel:"800-463-3339",url:"fedexus",code:"fedexus",hasvali:0,comurl:"http://www.fedex.com/us/",isavailable:"0",promptinfo:"",testnu:"774905848791",freg:"",freginfo:"fedex美国的单号一般由纯数字组成",telcomplaintnum:"800-463-3339",queryurl:"http://www.fedex.com/us/",serversite:"http://www.fedex.com/us/"},{cid:"78",id:"388549",companyname:"风行天下",shortname:"风行天下",tel:"4000-404-909",url:"fengxingtianxia",code:"fengxingtianxia",hasvali:0,comurl:"http://www.fxtxsy.com",isavailable:"1",promptinfo:"",testnu:"4009055134217",freg:"",freginfo:"风行天下的单号一般由纯数字组成",telcomplaintnum:"13975182167",queryurl:"http://www.fxtxsy.com",serversite:""},{cid:"179",id:"438742",companyname:"康力物流",shortname:"康力",tel:"400-156-5156 ",url:"kangliwuliu",code:"kangliwuliu",hasvali:0,comurl:"http://www.kangliex.com/",isavailable:"0",promptinfo:"",testnu:"1001535569",freg:"",freginfo:"康力物流的单号一般由10位纯数字组成",telcomplaintnum:"400-156-5156 ",queryurl:"http://www.kangliex.com/",serversite:""},{cid:"119",id:"469148",companyname:"跨越速运",shortname:"跨越",tel:"4008-098-098 ",url:"kuayue",code:"kuayue",hasvali:0,comurl:"http://www.ky-express.com/",isavailable:"0",promptinfo:"跨越速运的单号一般有7位纯数字组成",testnu:"4624159",freg:"",freginfo:"跨越速运的单号一般由7位数字组成",telcomplaintnum:"4008-098-098 ",queryurl:"http://www.ky-express.com/",serversite:"http://www.ky-express.com/Chanpin/Default.aspx?article=fuwuwangluo"},{cid:"79",id:"498609",companyname:"海盟速递",shortname:"海盟",tel:"400-080-6369 ",url:"haimengsudi",code:"haimengsudi",hasvali:0,comurl:"http://www.hm-express.com",isavailable:"0",promptinfo:"",testnu:"617098",freg:"",freginfo:"海盟速递的单号一般由10位纯数字组成",telcomplaintnum:"400-080-6369 ",queryurl:"http://www.hm-express.com",serversite:""},{cid:"22",id:"508502",companyname:"圣安物流",shortname:"圣安",tel:"4006-618-169 ",url:"shenganwuliu",code:"shenganwuliu",hasvali:0,comurl:"http://www.sa56.net",isavailable:"0",promptinfo:"",testnu:"8614965",freg:"",freginfo:"圣安物流的单号一般由7开头的7位纯数字组成",telcomplaintnum:"4006-618-169",queryurl:"http://www.sa56.net",serversite:""},{cid:"196",id:"508516",companyname:"一统飞鸿",shortname:"一统飞鸿",tel:"61501533-608",url:"yitongfeihong",code:"yitongfeihong",hasvali:0,comurl:"http://218.97.241.58:8080/yitongfeihongweb/common?action=toindex",isavailable:"0",promptinfo:"",testnu:"214241290",freg:"",freginfo:"",telcomplaintnum:"61501028-608",queryurl:"http://218.97.241.58:8080/yitongfeihongweb/common?action=toi",serversite:"http://218.97.241.58:8080/yitongfeihongweb/servicesaddress.jsp"},{cid:"309",id:"620367",companyname:"中速快递",shortname:"中速",tel:"11183",url:"zhongsukuaidi",code:"zhongsukuaidi",hasvali:0,comurl:"http://www.ems.com.cn/mainservice/ems/zhong_su_guo_ji_kuai_jian.html",isavailable:"0",promptinfo:"",testnu:"CT246590834CN",freg:"",freginfo:"中速快件的单号一般由CT开头CN结尾中间9位数字",telcomplaintnum:"11183",queryurl:"http://www.ems.com.cn/mainservice/ems/zhong_su_guo_ji_kuai_jian.html",serversite:""},{cid:"110",id:"662539",companyname:"新蛋奥硕",shortname:"新蛋奥硕",tel:"400-820-4400",url:"neweggozzo",code:"neweggozzo",hasvali:0,comurl:"http://www.ozzo.com.cn",isavailable:"0",promptinfo:"",testnu:"20643707",freg:"",freginfo:"",telcomplaintnum:"400-820-4400",queryurl:"http://www.ozzo.com.cn",serversite:""},{cid:"111",id:"662553",companyname:"OnTrac",shortname:"OnTrac",tel:"800-334-5000",url:"ontrac",code:"ontrac",hasvali:0,comurl:"http://www.ontrac.com",isavailable:"0",promptinfo:"",testnu:"D10010826799699",freg:"",freginfo:"OnTrac单号一般由字母和数字组成",telcomplaintnum:"800-334-5000",queryurl:"http://www.ontrac.com",serversite:""},{cid:"80",id:"662566",companyname:"七天连锁",shortname:"七天连锁",tel:"400-882-1202",url:"sevendays",code:"sevendays",hasvali:0,comurl:"http://www.92856.cn",isavailable:"0",promptinfo:"",testnu:"6811088969",freg:"",freginfo:"七天连锁物流单号一般由纯数字组成",telcomplaintnum:"400-882-1202",queryurl:"http://www.92856.cn",serversite:"http://www.92856.cn/page/chin/index.php"},{cid:"112",id:"662579",companyname:"明亮物流",shortname:"明亮",tel:"400-035-6568",url:"mingliangwuliu",code:"mingliangwuliu",hasvali:0,comurl:"http://www.szml56.com/",isavailable:"0",promptinfo:"",testnu:"80238530",freg:"",freginfo:"明亮物流的单号由纯数字组成",telcomplaintnum:"13632909217",queryurl:"http://www.szml56.com/",serversite:"http://www.szml56.com/index.php/Map/index/id/205"},{cid:"153",id:"668571",companyname:"凡客配送（作废）",shortname:"凡客",tel:"400-600-6888",url:"vancl",code:"vancl",hasvali:0,comurl:"http://www.vancl.com/",isavailable:"0",promptinfo:"",testnu:"786500075083",freg:"",freginfo:"凡客的订单一般有字母和数字组成",telcomplaintnum:"400-600-6888",queryurl:"",serversite:""},{cid:"187",id:"683545",companyname:"华企快运",shortname:"华企",tel:"400-806-8111",url:"huaqikuaiyun",code:"huaqikuaiyun",hasvali:0,comurl:"13055209678",isavailable:"0",promptinfo:"",testnu:"201000000000",freg:"",freginfo:"",telcomplaintnum:"021-54224687",queryurl:"13055209678",serversite:""},{cid:"81",id:"683546",companyname:"城市100",shortname:"城市100",tel:"400-820-0088",url:"city100",code:"city100",hasvali:0,comurl:"http://www.bjcs100.com/",isavailable:"0",promptinfo:"",testnu:"755730420202",freg:"",freginfo:"",telcomplaintnum:"010-52932770",queryurl:"",serversite:""},{cid:"305",id:"683550",companyname:"红马甲物流",shortname:"红马甲",tel:"0351-5225858",url:"sxhongmajia",code:"sxhongmajia",hasvali:0,comurl:"http://www.hmj.com.cn/",isavailable:"0",promptinfo:"",testnu:"33133243933",freg:"",freginfo:"",telcomplaintnum:"0351- 5225858",queryurl:"http://www.hmj.com.cn/",serversite:"http://www.hmj.com.cn/SinglePage.aspx?typeid=15=43"},{cid:"306",id:"683551",companyname:"穗佳物流",shortname:"穗佳",tel:"400-880-9771",url:"suijiawuliu",code:"suijiawuliu",hasvali:0,comurl:"http://www.suijiawl.com",isavailable:"0",promptinfo:"",testnu:"0026060",freg:"",freginfo:"",telcomplaintnum:"13925121894",queryurl:"http://www.suijiawl.com",serversite:"http://www.suijiawl.com/sj/index.asp"},{cid:"82",id:"683552",companyname:"飞豹快递",shortname:"飞豹",tel:"400-000-5566",url:"feibaokuaidi",code:"feibaokuaidi",hasvali:null,comurl:"http://www.ztky.com/feibao/KJCX.aspx",isavailable:"0",promptinfo:"",testnu:"6013506052",freg:"",freginfo:"",telcomplaintnum:"400-000-5566",queryurl:"http://www.ztky.com/feibao/KJCX.aspx",serversite:"http://www.ztky.com/feibao/FUWL.aspx"},{cid:"83",id:"683554",companyname:"传喜物流",shortname:"传喜",tel:"400-777-5656 ",url:"chuanxiwuliu",code:"chuanxiwuliu",hasvali:0,comurl:"http://www.cxcod.com/",isavailable:"0",promptinfo:"",testnu:"7000000151489",freg:"",freginfo:"",telcomplaintnum:"400-777-5656 ",queryurl:"http://www.cxcod.com/",serversite:"http://www.cxcod.com/Detail.aspx?typeid=3"},{cid:"84",id:"683555",companyname:"捷特快递",shortname:"捷特",tel:"400-820-8585",url:"jietekuaidi",code:"jietekuaidi",hasvali:0,comurl:"http://www.jet185.com/",isavailable:"0",promptinfo:"",testnu:"1114677325",freg:"",freginfo:"",telcomplaintnum:"400-820-8585",queryurl:"http://www.jet185.com/",serversite:"http://www.jet185.com/network/"},{cid:"307",id:"683557",companyname:"隆浪快递",shortname:"隆浪",tel:"021-31171576 61552015",url:"longlangkuaidi",code:"longlangkuaidi",hasvali:0,comurl:"http://www.56l6.com/",isavailable:"0",promptinfo:"",testnu:"201000000000",freg:"",freginfo:"",telcomplaintnum:"021-31257319 31257329 ",queryurl:"http://www.56l6.com/",serversite:"http://www.56L6.com/zdfb.html"},{cid:"262",id:"700054",companyname:"EMS-英文",shortname:"EMS-英文",tel:"11183",url:"emsen",code:"emsen",hasvali:0,comurl:"http://www.ems.com.cn/english.html",isavailable:"1",promptinfo:"",testnu:"EA041608864CN",freg:"",freginfo:"EMS单号开头和结尾2位是字母，中间是9位数字",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"85",id:"717946",companyname:"中天万运",shortname:"中天万运",tel:"400-0056-001",url:"zhongtianwanyun",code:"zhongtianwanyun",hasvali:0,comurl:"http://www.ztwy56.cn/",isavailable:"0",promptinfo:"",testnu:"1111567923",freg:"",freginfo:"",telcomplaintnum:"0531-68850629",queryurl:"http://www.ztwy56.cn/",serversite:""},{cid:"86",id:"789941",companyname:"香港(HongKong Post)",shortname:"香港邮政",tel:"(852) 2921 2222",url:"hkpost",code:"hkpost",hasvali:0,comurl:"http://www.hongkongpost.hk",isavailable:"0",promptinfo:"",testnu:"RC910320193HK",freg:"",freginfo:"",telcomplaintnum:"(852) 2921 2222",queryurl:"http://www.hongkongpost.hk/sim/index.htm",serversite:"http://sc.hongkongpost.com/gb/www.hongkongpost.com/chi/locations/index.htm"},{cid:"283",id:"789942",companyname:"邦送物流",shortname:"邦送",tel:"021-20965696",url:"bangsongwuliu",code:"bangsongwuliu",hasvali:0,comurl:"http://express.banggo.com",isavailable:"0",promptinfo:"",testnu:"600000000000",freg:"",freginfo:"",telcomplaintnum:"021-20965696-823/824",queryurl:"http://express.banggo.com",serversite:"http://express.banggo.com/default/sc/url/parentid/1/id/16"},{cid:"20",id:"850277",companyname:"国通快递",shortname:"国通",tel:"400-111-1123",url:"guotongkuaidi",code:"guotongkuaidi",hasvali:0,comurl:"http://www.gto365.com",isavailable:"0",promptinfo:"",testnu:"3117727152",freg:"",freginfo:"国通快递单号一般由10位纯数字组成",telcomplaintnum:"400-111-1123",queryurl:"http://www.gto365.com/Service/wdcc/",serversite:"http://www.gto365.com/Service/wdcc/"},{cid:"87",id:"850323",companyname:"澳大利亚(Australia Post)",shortname:"auspost",tel:"0061-3-88479045",url:"auspost",code:"auspost",hasvali:0,comurl:"http://auspost.com.au",isavailable:"0",promptinfo:"",testnu:"00093187642222033109",freg:"",freginfo:"",telcomplaintnum:"+61 388479045",queryurl:"http://auspost.com.au/index.html",serversite:""},{cid:"113",id:"850347",companyname:"加拿大(Canada Post)",shortname:"加拿大邮政",tel:"416-979-8822",url:"canpost",code:"canpost",hasvali:0,comurl:"http://www.canadapost.ca",isavailable:"0",promptinfo:"",testnu:"CP259658985CN",freg:"",freginfo:"",telcomplaintnum:"416-979-8822",queryurl:"http://www.canadapost.ca",serversite:""},{cid:"114",id:"850350",companyname:"加拿大邮政",shortname:"加拿大邮政",tel:"",url:"canpostfr",code:"canpostfr",hasvali:0,comurl:"",isavailable:"1",promptinfo:"",testnu:"305000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"115",id:"850380",companyname:"UPS-全球件",shortname:"UPS-全球件",tel:"1-800-742-5877 ",url:"upsen",code:"upsen",hasvali:0,comurl:"http://www.ups.com/",isavailable:"1",promptinfo:"",testnu:"1Z1EY7950316807120",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"116",id:"850390",companyname:"TNT-全球件",shortname:"TNT-全球件",tel:"",url:"tnten",code:"tnten",hasvali:0,comurl:"http://www.tnt.com",isavailable:"0",promptinfo:"",testnu:"GD611170792WW",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"117",id:"850399",companyname:"DHL-全球件",shortname:"DHL",tel:"",url:"dhlen",code:"dhlen",hasvali:0,comurl:"http://www.dhl.com/en.html",isavailable:"0",promptinfo:"",testnu:"1119658676",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"118",id:"850413",companyname:"顺丰-美国件",shortname:"顺丰-美国件",tel:"1-855-901-1133",url:"shunfengen",code:"shunfengen",hasvali:0,comurl:"http://www.sf-express.com/us/en/",isavailable:"1",promptinfo:"",testnu:"595000000000",freg:"",freginfo:"",telcomplaintnum:"1-855-901-1133",queryurl:"",serversite:""},{cid:"341",id:"1022916",companyname:"汇强快递",shortname:"汇强",tel:"",url:"huiqiangkuaidi",code:"huiqiangkuaidi",hasvali:0,comurl:"",isavailable:"1",promptinfo:"该公司已失效",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"161",id:"1022917",companyname:"希优特",shortname:"希优特",tel:"4008400365",url:"xiyoutekuaidi",code:"xiyoutekuaidi",hasvali:0,comurl:"http://www.cod365.com/",isavailable:"0",promptinfo:"",testnu:"60000248046",freg:"",freginfo:"",telcomplaintnum:"4008400365",queryurl:"http://www.cod365.com/",serversite:"http://www.cod365.com/network.asp"},{cid:"162",id:"1022918",companyname:"昊盛物流",shortname:"昊盛",tel:"400-186-5566",url:"haosheng",code:"haoshengwuliu",hasvali:0,comurl:"http://www.hs-express.cn/",isavailable:"0",promptinfo:"",testnu:"5566512325",freg:"",freginfo:"",telcomplaintnum:"400-186-5566",queryurl:"http://www.hs-express.cn/",serversite:"http://www.hs-express.cn/Cpfw.aspx"},{cid:"107",id:"1054763",companyname:"尚橙物流",shortname:"尚橙",tel:"400-890-0101",url:"shangcheng",code:"shangcheng",hasvali:0,comurl:"http://www.suncharms.net/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"400-890-0101",queryurl:"",serversite:""},{cid:"317",id:"1084996",companyname:"亿领速运",shortname:"亿领",tel:"400-1056-400",url:"yilingsuyun",code:"yilingsuyun",hasvali:0,comurl:"http://www.yelee.com.cn/",isavailable:"0",promptinfo:"",testnu:"180000076495",freg:"",freginfo:"",telcomplaintnum:"400-611-1892",queryurl:"http://www.yelee.com.cn/",serversite:""},{cid:"237",id:"1095717",companyname:"大洋物流",shortname:"大洋",tel:"400-820-0088",url:"dayangwuliu",code:"dayangwuliu",hasvali:0,comurl:"http://www.dayang365.cn/",isavailable:"0",promptinfo:"",testnu:"YG00003563523",freg:"",freginfo:"",telcomplaintnum:"400-820-0088",queryurl:"http://www.dayang365.cn/",serversite:""},{cid:"238",id:"1095719",companyname:"递达速运",shortname:"递达",tel:"400-687-8123",url:"didasuyun",code:"didasuyun",hasvali:0,comurl:"http://www.dida.hk/",isavailable:"0",promptinfo:"",testnu:"79101141200",freg:"",freginfo:"",telcomplaintnum:"400-687-8123",queryurl:"http://www.dida.hk/",serversite:""},{cid:"239",id:"1095721",companyname:"易通达",shortname:"易通达",tel:"0898-65339299",url:"yitongda",code:"yitongda",hasvali:0,comurl:"http://www.etd365.com/",isavailable:"0",promptinfo:"",testnu:"JX13700857",freg:"",freginfo:"",telcomplaintnum:"0898-65339299",queryurl:"http://www.etd365.com/",serversite:""},{cid:"240",id:"1095722",companyname:"邮必佳",shortname:"邮必佳",tel:"400-687-8123",url:"youbijia",code:"youbijia",hasvali:0,comurl:"http://www.ubjia.com/",isavailable:"0",promptinfo:"",testnu:"2049139919H001",freg:"",freginfo:"",telcomplaintnum:"400-687-8123",queryurl:"http://www.ubjia.com/",serversite:"http://www.ubjia.com/markets.asp"},{cid:"90",id:"1122166",companyname:"亿顺航",shortname:"亿顺航",tel:"4006-018-268 ",url:"yishunhang",code:"yishunhang",hasvali:0,comurl:"http://www.igoex.com/",isavailable:"0",promptinfo:"",testnu:"6990771336",freg:"",freginfo:"",telcomplaintnum:"4006-018-268 ",queryurl:"http://www.igoex.com/",serversite:""},{cid:"311",id:"1142068",companyname:"飞狐快递",shortname:"飞狐",tel:"010-51389299",url:"feihukuaidi",code:"feihukuaidi",hasvali:0,comurl:"http://www.feihukuaidi.com/",isavailable:"0",promptinfo:"",testnu:"B140426285147",freg:"",freginfo:"",telcomplaintnum:"18701033953",queryurl:"http://www.feihukuaidi.com/",serversite:"http://www.feihukuaidi.com/products3.aspx"},{cid:"312",id:"1142069",companyname:"潇湘晨报",shortname:"潇湘晨报",tel:"",url:"xiaoxiangchenbao",code:"xiaoxiangchenbao",hasvali:0,comurl:"",isavailable:"1",promptinfo:"",testnu:"1500000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"313",id:"1142070",companyname:"巴伦支",shortname:"巴伦支",tel:"400-885-6561",url:"balunzhi",code:"balunzhi",hasvali:0,comurl:"http://cnbd.hendari.com/",isavailable:"0",promptinfo:"",testnu:"023001808697",freg:"",freginfo:"",telcomplaintnum:"400-885-6561",queryurl:"http://cnbd.hendari.com/",serversite:"http://cnbd.hendari.com/Service.aspx"},{cid:"102",id:"1142102",companyname:"Aramex",shortname:"Aramex",tel:"4006318388",url:"aramex",code:"aramex",hasvali:0,comurl:"http://www.aramex.com/",isavailable:"0",promptinfo:"",testnu:"7055636766",freg:"",freginfo:"",telcomplaintnum:"010-80418634",queryurl:"http://www.aramex.com/",serversite:""},{cid:"263",id:"1173069",companyname:"闽盛快递",shortname:"闽盛",tel:"0592-3725988",url:"minshengkuaidi",code:"minshengkuaidi",hasvali:0,comurl:"http://www.xmms-express.com/",isavailable:"0",promptinfo:"",testnu:"800056276",freg:"",freginfo:"",telcomplaintnum:"0592-3705986",queryurl:"http://www.xmms-express.com/",serversite:""},{cid:"264",id:"1173070",companyname:"佳惠尔",shortname:"佳惠尔",tel:"024-23904138",url:"syjiahuier",code:"syjiahuier",hasvali:0,comurl:"http://www.jhekd.com/",isavailable:"0",promptinfo:"",testnu:"GES8000949441",freg:"",freginfo:"",telcomplaintnum:"13304020538",queryurl:"http://www.jhekd.com/",serversite:"http://www.jhekd.com/wdcx.asp"},{cid:"265",id:"1173071",companyname:"民邦速递",shortname:"民邦",tel:"0769-81515303",url:"minbangsudi",code:"minbangsudi",hasvali:0,comurl:"http://www.mbex168.com/",isavailable:"0",promptinfo:"",testnu:"278144634",freg:"",freginfo:"",telcomplaintnum:"0769-81515303",queryurl:"http://www.mbex168.com/",serversite:"http://www.mbex168.com/site_search.jsp"},{cid:"122",id:"1173201",companyname:"上海快通",shortname:"上海快通",tel:"",url:"shanghaikuaitong",code:"shanghaikuaitong",hasvali:0,comurl:"",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"154",id:"1322989",companyname:"北青小红帽",shortname:"北青小红帽",tel:"010-67756666",url:"xiaohongmao",code:"xiaohongmao",hasvali:0,comurl:"http://www.kuaidi100.com/all/xiaohongmao.shtml",isavailable:"0",promptinfo:"",testnu:"XHM0269135",freg:"",freginfo:"",telcomplaintnum:"010-67756666",queryurl:"http://www.kuaidi100.com/all/xiaohongmao.shtml",serversite:""},{cid:"155",id:"1322991",companyname:"GSM",shortname:"GSM",tel:"021-64656011 ",url:"gsm",code:"gsm",hasvali:0,comurl:"http://www.gsmnton.com ",isavailable:"0",promptinfo:"",testnu:"G1000039009",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"314",id:"1364626",companyname:"安能物流",shortname:"安能",tel:"400-104-0088",url:"annengwuliu",code:"annengwuliu",hasvali:0,comurl:"http://www.ane56.com",isavailable:"0",promptinfo:"",testnu:"300102851832",freg:"",freginfo:"",telcomplaintnum:"400-104-0088",queryurl:"",serversite:"http://www.ane56.com/search/searchsite.jsp"},{cid:"266",id:"1365062",companyname:"KCS",shortname:"KCS",tel:"800-858-5590",url:"kcs",code:"kcs",hasvali:0,comurl:"http://www.kcs56.com",isavailable:"0",promptinfo:"",testnu:"2009573414",freg:"",freginfo:"",telcomplaintnum:"800-858-5590",queryurl:"http://www.kcs56.com",serversite:""},{cid:"315",id:"1384981",companyname:"City-Link",shortname:"City-Link",tel:"603-5565 8399",url:"citylink",code:"citylink",hasvali:0,comurl:"http://www.citylinkexpress.com/",isavailable:"0",promptinfo:"",testnu:"156000400107086",freg:"",freginfo:"",telcomplaintnum:"603-5565 8399",queryurl:"http://www.citylinkexpress.com/",serversite:""},{cid:"334",id:"1397942",companyname:"店通快递",shortname:"店通",tel:"021-20917385 66282857",url:"diantongkuaidi",code:"diantongkuaidi",hasvali:0,comurl:"http://www.shdtkd.com.cn/",isavailable:"0",promptinfo:"",testnu:"210000000000",freg:"",freginfo:"",telcomplaintnum:"021-20917385 66282857",queryurl:"http://www.shdtkd.com.cn/",serversite:"http://www.shdtkd.com.cn/cgi-bin/GInfo.dll?Dispkind=shdtkd=%CD%F8%B5%E3%B2%E9%D1%AF"},{cid:"160",id:"1455156",companyname:"凡宇快递",shortname:"凡宇",tel:"4006-580-358 ",url:"fanyukuaidi",code:"fanyukuaidi",hasvali:0,comurl:"http://www.fanyu56.com.cn/",isavailable:"0",promptinfo:"",testnu:"198200177507",freg:"",freginfo:"凡宇快递单号一般由数字组成，部分是转运单号",telcomplaintnum:"4006-580-358",queryurl:"http://www.fanyu56.com.cn/",serversite:""},{cid:"303",id:"1506202",companyname:"平安达腾飞",shortname:"平安达腾飞",tel:"4006-230-009",url:"pingandatengfei",code:"pingandatengfei",hasvali:0,comurl:"http://www.padtf.com/",isavailable:"0",promptinfo:"",testnu:"3560002639",freg:"",freginfo:"",telcomplaintnum:"4006-230-009",queryurl:"http://www.padtf.com/",serversite:"http://www.padtf.com/Product.asp"},{cid:"207",id:"1506273",companyname:"广东通路",shortname:"广东通路",tel:"",url:"guangdongtonglu",code:"guangdongtonglu",hasvali:0,comurl:"",isavailable:"1",promptinfo:"",testnu:"15032863355819",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"94",id:"1561155",companyname:"中睿速递",shortname:"中睿",tel:"400-0375-888",url:"zhongruisudi",code:"zhongruisudi",hasvali:0,comurl:"http://www.zorel.cn/",isavailable:"0",promptinfo:"",testnu:"666581757",freg:"",freginfo:"",telcomplaintnum:"0371-56667177",queryurl:"http://www.zorel.cn/",serversite:"http://www.zorel.cn/Network.aspx"},{cid:"310",id:"1609219",companyname:"快达物流",shortname:"快达",tel:"",url:"kuaidawuliu",code:"kuaidawuliu",hasvali:0,comurl:"",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"26",id:"1609220",companyname:"佳吉快递",shortname:"佳吉",tel:"400-820-5566",url:"jiajikuaidi",code:"jiajikuaidi",hasvali:0,comurl:"http://www.jiaji.com/",isavailable:"0",promptinfo:"",testnu:"729485513",freg:"",freginfo:"",telcomplaintnum:"400-820-5566",queryurl:"http://www.jiaji.com/",serversite:"http://www.kuaidi100.com/network/province_15.htm"},{cid:"267",id:"1721505",companyname:"ADP国际快递",shortname:"ADP",tel:"1588-1330",url:"adp",code:"adp",hasvali:0,comurl:"http://www.adpair.co.kr/",isavailable:"0",promptinfo:"",testnu:"3123651",freg:"",freginfo:"",telcomplaintnum:"1588-1330",queryurl:"http://www.adpair.co.kr/",serversite:""},{cid:"268",id:"1721506",companyname:"颿达国际快递",shortname:"颿达",tel:"0755-27332618",url:"fardarww",code:"fardarww",hasvali:0,comurl:"http://www.fardar.com/",isavailable:"0",promptinfo:"",testnu:"8802855250",freg:"",freginfo:"",telcomplaintnum:"0755-27332618",queryurl:"http://www.fardar.com/",serversite:""},{cid:"269",id:"1721507",companyname:"颿达国际快递-英文",shortname:"颿达国际",tel:"0755-27332618",url:"fandaguoji",code:"fandaguoji",hasvali:0,comurl:"http://www.fardar.com/",isavailable:"0",promptinfo:"",testnu:"5089554400",freg:"",freginfo:"",telcomplaintnum:"0755-27332618",queryurl:"http://www.fardar.com/",serversite:""},{cid:"270",id:"1721508",companyname:"林道国际快递",shortname:"林道",tel:"4008-200-112",url:"shlindao",code:"shlindao",hasvali:0,comurl:"http://www.ldxpress.com/",isavailable:"0",promptinfo:"",testnu:"345595743625",freg:"",freginfo:"",telcomplaintnum:"4008-200-112",queryurl:"http://www.ldxpress.com/",serversite:""},{cid:"271",id:"1721509",companyname:"中外运速递-中文",shortname:"中外运",tel:"010-8041 8611",url:"sinoex",code:"sinoex",hasvali:0,comurl:"http://www.sinoex.com.cn",isavailable:"0",promptinfo:"",testnu:"34013907141",freg:"",freginfo:"",telcomplaintnum:"010-8041 8611",queryurl:"http://www.sinoex.com.cn/index.aspx",serversite:""},{cid:"272",id:"1721510",companyname:"中外运速递",shortname:"中外运速递",tel:"010-8041 8611",url:"zhongwaiyun",code:"zhongwaiyun",hasvali:0,comurl:"http://www.sinoex.com.cn/index.aspx",isavailable:"0",promptinfo:"",testnu:"3970761535",freg:"",freginfo:"",telcomplaintnum:"010-8041 8611",queryurl:"http://www.sinoex.com.cn/index.aspx",serversite:""},{cid:"273",id:"1721511",companyname:"深圳德创物流",shortname:"深圳德创",tel:"4006-989-833",url:"dechuangwuliu",code:"dechuangwuliu",hasvali:0,comurl:"http://www.dc56.cn/",isavailable:"0",promptinfo:"",testnu:"0512098",freg:"",freginfo:"单号一般由8位数字组成",telcomplaintnum:"4006-989-833",queryurl:"http://www.dc56.cn/",serversite:"http://www.dc58.com/?ctr=title=199"},{cid:"274",id:"1723847",companyname:"林道国际快递-英文",shortname:"林道国际快递-英文",tel:"800-820-1470 ",url:"ldxpres",code:"ldxpres",hasvali:0,comurl:"http://www.ldxpress.com/",isavailable:"0",promptinfo:"",testnu:"301000000000",freg:"",freginfo:"",telcomplaintnum:"800-820-1470 ",queryurl:"http://www.ldxpress.com/",serversite:""},{cid:"132",id:"1781833",companyname:"瑞典（Sweden Post）",shortname:"瑞典邮政",tel:"+46 8 23 22 20",url:"ruidianyouzheng",code:"ruidianyouzheng",hasvali:0,comurl:"http://www.posten.se/en",isavailable:"0",promptinfo:"",testnu:"CC193037621SE",freg:"",freginfo:"",telcomplaintnum:"+46 8 23 22 20",queryurl:"http://www.posten.se/en",serversite:""},{cid:"133",id:"1781834",companyname:"PostNord(Posten AB)",shortname:"Posten AB",tel:"+46 771 33 33 10",url:"postenab",code:"postenab",hasvali:0,comurl:"http://www.posten.se/en",isavailable:"0",promptinfo:"",testnu:"RR559718149SE",freg:"",freginfo:"",telcomplaintnum:"+46 771 33 33 10",queryurl:"http://www.posten.se/en",serversite:""},{cid:"134",id:"1781835",companyname:"偌亚奥国际快递",shortname:"偌亚奥",tel:"4008 871 871",url:"nuoyaao",code:"nuoyaao",hasvali:0,comurl:"http://www.royaleinternational.com/",isavailable:"0",promptinfo:"",testnu:"860000000000",freg:"",freginfo:"",telcomplaintnum:"4008 871 871",queryurl:"http://www.royaleinternational.com/",serversite:""},{cid:"135",id:"1781836",companyname:"城际速递",shortname:"城际",tel:"4000-523-525 ",url:"chengjisudi",code:"chengjisudi",hasvali:0,comurl:"http://chengji-express.com",isavailable:"0",promptinfo:"",testnu:"010002108494",freg:"",freginfo:"",telcomplaintnum:"4000-523-525",queryurl:"http://chengji-express.com",serversite:""},{cid:"123",id:"1797966",companyname:"祥龙运通物流",shortname:"祥龙运通",tel:"4008-908-908",url:"xianglongyuntong",code:"xianglongyuntong",hasvali:0,comurl:"http://www.ldl.com.cn",isavailable:"0",promptinfo:"",testnu:"68007554",freg:"",freginfo:"",telcomplaintnum:"4008-908-908",queryurl:"http://www.ldl.com.cn",serversite:""},{cid:"124",id:"1797970",companyname:"品速心达快递",shortname:"品速心达",tel:"400-800-3693 ",url:"pinsuxinda",code:"pinsuxinda",hasvali:0,comurl:"http://www.psxd88.com/",isavailable:"0",promptinfo:"",testnu:"PS886605213",freg:"",freginfo:"",telcomplaintnum:"400-800-3693",queryurl:"http://www.psxd88.com/",serversite:""},{cid:"125",id:"1797971",companyname:"宇鑫物流",shortname:"宇鑫",tel:"0371-66368798",url:"yuxinwuliu",code:"yuxinwuliu",hasvali:0,comurl:"http://www.yx56.cn/",isavailable:"0",promptinfo:"",testnu:"2023033091",freg:"",freginfo:"",telcomplaintnum:"0371-66368798",queryurl:"http://www.yx56.cn/",serversite:""},{cid:"136",id:"1868422",companyname:"陪行物流",shortname:"陪行物流",tel:"400-993-0555",url:"peixingwuliu",code:"peixingwuliu",hasvali:0,comurl:"http://www.peixingexpress.com",isavailable:"0",promptinfo:"",testnu:"PX5940124340713ES",freg:"",freginfo:"",telcomplaintnum:"0594-2321515",queryurl:"http://www.peixingexpress.com",serversite:""},{cid:"137",id:"1868423",companyname:"户通物流",shortname:"户通物流",tel:"400-060-1656",url:"hutongwuliu",code:"hutongwuliu",hasvali:0,comurl:"http://www.cnhtwl.com",isavailable:"0",promptinfo:"",testnu:"1103339",freg:"",freginfo:"",telcomplaintnum:"13026112511",queryurl:"http://www.cnhtwl.com",serversite:""},{cid:"198",id:"1898132",companyname:"西安城联速递",shortname:"西安城联速递",tel:"029-89113508",url:"xianchengliansudi",code:"xianchengliansudi",hasvali:0,comurl:"http://www.city-link.net.cn/",isavailable:"0",promptinfo:"",testnu:"14000000000000",freg:"",freginfo:"",telcomplaintnum:"029-89113508",queryurl:"",serversite:""},{cid:"199",id:"1898133",companyname:"煜嘉物流",shortname:"煜嘉物流",tel:"",url:"yujiawuliu",code:"yujiawuliu",hasvali:0,comurl:"http://www.yujia56.net/",isavailable:"1",promptinfo:"",testnu:"8320765",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"200",id:"1898134",companyname:"一柒国际物流",shortname:"一柒国际物流",tel:"001-(971) 238-9990",url:"yiqiguojiwuliu",code:"yiqiguojiwuliu",hasvali:0,comurl:"http://www.17htb.com/",isavailable:"0",promptinfo:"",testnu:"HT006613984US",freg:"",freginfo:"",telcomplaintnum:"001-(971) 238-9990",queryurl:"http://www.17htb.com/",serversite:""},{cid:"163",id:"1903113",companyname:"Fedex-国际件-中文",shortname:"Fedex-国际件-中文",tel:"400-889-1888",url:"fedexcn",code:"fedexcn",hasvali:0,comurl:"http://www.fedex.com/cn/index.html",isavailable:"1",promptinfo:"",testnu:"660552974937",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"164",id:"1903117",companyname:"联邦快递-英文",shortname:"联邦",tel:"400-889-1888",url:"lianbangkuaidien",code:"lianbangkuaidien",hasvali:0,comurl:"http://cndxp.apac.fedex.com/tracking/track.html",isavailable:"1",promptinfo:"",testnu:"120966607850",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"165",id:"2082056",companyname:"中通（带电话）",shortname:"中通（带电话）",tel:"",url:"zhongtongphone",code:"zhongtongphone",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"180",id:"2234246",companyname:"赛澳递for买卖宝",shortname:"赛澳递for买卖宝",tel:"",url:"saiaodimmb",code:"saiaodimmb",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"181",id:"2234247",companyname:"上海无疆for买卖宝",shortname:"上海无疆for买卖宝",tel:"",url:"shanghaiwujiangmmb",code:"shanghaiwujiangmmb",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"208",id:"2284839",companyname:"新加坡小包(Singapore Post)",shortname:"新加坡邮政",tel:"",url:"singpost",code:"singpost",hasvali:0,comurl:"http://www.singpost.com/",isavailable:"0",promptinfo:"",testnu:"RP412572298SG",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"209",id:"2284841",companyname:"音素快运",shortname:"音素快运",tel:"400-007-1118",url:"yinsu",code:"yinsu",hasvali:0,comurl:"http://www.yskd168.com/",isavailable:"0",promptinfo:"",testnu:"YS6000277072",freg:"",freginfo:"",telcomplaintnum:"400-007-1118",queryurl:"http://www.yskd168.com/",serversite:""},{cid:"210",id:"2284842",companyname:"南方传媒物流",shortname:"南方传媒物流",tel:"",url:"ndwl",code:"ndwl",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"14000000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"211",id:"2284843",companyname:"速呈宅配",shortname:"速呈宅配",tel:"",url:"sucheng",code:"sucheng",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"212",id:"2284844",companyname:"创一快递",shortname:"创一快递",tel:"",url:"chuangyi",code:"chuangyi",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"731081233571",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"213",id:"2284845",companyname:"云南滇驿物流",shortname:"云南滇驿物流",tel:"",url:"dianyi",code:"dianyi",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"214",id:"2284846",companyname:"重庆星程快递",shortname:"重庆星程快递",tel:"",url:"cqxingcheng",code:"cqxingcheng",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"1410000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"215",id:"2284847",companyname:"四川星程快递",shortname:"四川星程快递",tel:"",url:"scxingcheng",code:"scxingcheng",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"1P29497203",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"216",id:"2284848",companyname:"贵州星程快递",shortname:"贵州星程快递",tel:"",url:"gzxingcheng",code:"gzxingcheng",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"14000000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"217",id:"2284849",companyname:"运通中港快递(作废)",shortname:"运通中港快递",tel:"",url:"ytkd",code:"ytkd",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"659142122",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"246",id:"2285484",companyname:"Gati-英文",shortname:"gati官网英文通道",tel:"4000-804-284",url:"gatien",code:"gatien",hasvali:0,comurl:"http://www.gati.com/",isavailable:"0",promptinfo:"",testnu:"640856630",freg:"",freginfo:"",telcomplaintnum:"4000-804-284",queryurl:"http://www.gati.com/",serversite:""},{cid:"247",id:"2285485",companyname:"Gati-中文",shortname:"gati官网中文通道",tel:"4000-804-284 ",url:"gaticn",code:"gaticn",hasvali:0,comurl:"http://www.gaticn.com/",isavailable:"0",promptinfo:"",testnu:"641461918",freg:"",freginfo:"",telcomplaintnum:"4000-804-284",queryurl:"http://www.gaticn.com/",serversite:""},{cid:"248",id:"2285486",companyname:"jcex",shortname:"jcex官网通道",tel:"",url:"jcex",code:"jcex",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"249",id:"2285487",companyname:"派尔快递",shortname:"派尔快递官网通道",tel:"",url:"peex",code:"peex",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"14100000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"250",id:"2285488",companyname:"凯信达",shortname:"凯信达官网通道",tel:"",url:"kxda",code:"kxda",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"251",id:"2285489",companyname:"安达信",shortname:"安达信官网通道",tel:"",url:"kxda",code:"advancing",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"15111471116357",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"252",id:"2285490",companyname:"汇文",shortname:"汇文官网通道",tel:"",url:"huiwen",code:"huiwen",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"2994214416549",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"253",id:"2285491",companyname:"亿翔",shortname:"亿翔官网通道",tel:"",url:"yxexpress",code:"yxexpress",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"755033762873",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"254",id:"2285492",companyname:"东红物流",shortname:"东红合作通道",tel:"4000-081-556",url:"donghong",code:"donghong",hasvali:0,comurl:"http://www.donghong56.com/",isavailable:"0",promptinfo:"",testnu:"285310",freg:"",freginfo:"",telcomplaintnum:"4000-081-556",queryurl:"http://www.donghong56.com/",serversite:""},{cid:"255",id:"2285641",companyname:"飞远配送",shortname:"飞远配送",tel:"4007-031-313",url:"feiyuanvipshop",code:"feiyuanvipshop",hasvali:0,comurl:"http://www.fyps.cn/",isavailable:"0",promptinfo:"",testnu:"15042037484913",freg:"",freginfo:"",telcomplaintnum:"4007-031-313",queryurl:"http://www.fyps.cn/",serversite:""},{cid:"323",id:"2327222",companyname:"好运来",shortname:"好运来",tel:"020-86293333",url:"hlyex",code:"hlyex",hasvali:0,comurl:"http://www.hlyex.com/",isavailable:"0",promptinfo:"",testnu:"2001334326",freg:"",freginfo:"",telcomplaintnum:"020-86293000 ",queryurl:"http://www.hlyex.com/",serversite:""},{cid:"156",id:"2328957",companyname:"Toll",shortname:"Toll Global Express",tel:"",url:"dpexen",code:"dpexen",hasvali:0,comurl:"http://www.dpex.com/",isavailable:"0",promptinfo:"",testnu:"500013037484",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.dpex.com/",serversite:""},{cid:"304",id:"2451036",companyname:"增益速递",shortname:"增益速递",tel:"4008-456-789 ",url:"zengyisudi",code:"zengyisudi",hasvali:0,comurl:"http://www.zeny-express.com/",isavailable:"0",promptinfo:"",testnu:"500054716917",freg:"",freginfo:"",telcomplaintnum:"4008-456-789 ",queryurl:"http://www.zeny-express.com/",serversite:""},{cid:"103",id:"2626662",companyname:"四川快优达速递",shortname:"四川快优达速递",tel:"4006-068-555",url:"kuaiyouda",code:"kuaiyouda",hasvali:0,comurl:"http://www.sckyd.net/",isavailable:"0",promptinfo:"",testnu:"6000440235",freg:"",freginfo:"",telcomplaintnum:"028-85627788",queryurl:"http://www.sckyd.net/",serversite:""},{cid:"241",id:"2729397",companyname:"日昱物流",shortname:"日昱物流",tel:"4008-820-800",url:"riyuwuliu",code:"riyuwuliu",hasvali:0,comurl:"http://www.rywl.cn/",isavailable:"0",promptinfo:"",testnu:"14007338",freg:"",freginfo:"",telcomplaintnum:"4008-820-800",queryurl:"http://www.rywl.cn/",serversite:""},{cid:"301",id:"2733381",companyname:"速通物流",shortname:"速通物流",tel:"",url:"sutongwuliu",code:"sutongwuliu",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"8000002874158",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"2788564",companyname:"晟邦物流",shortname:"晟邦物流",tel:"400-666-6066",url:"nanjingshengbang",code:"nanjingshengbang",hasvali:0,comurl:"http://www.3856.cc/",isavailable:"0",promptinfo:"",testnu:"655730805258",freg:"",freginfo:"",telcomplaintnum:"400-666-6066",queryurl:"http://www.3856.cc/",serversite:""},{cid:"298",id:"2998986",companyname:"爱尔兰(An Post)",shortname:"爱尔兰邮政",tel:"01-7057600 ",url:"anposten",code:"anposten",hasvali:0,comurl:"http://www.anpost.ie/AnPost/ ",isavailable:"0",promptinfo:"",testnu:"CB006606235IE",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.anpost.ie/AnPost/ ",serversite:""},{cid:"236",id:"3078494",companyname:"日本（Japan Post）",shortname:"日本邮政JapanPost",tel:"+81 0570-046111",url:"japanposten",code:"japanposten",hasvali:0,comurl:"http://www.post.japanpost.jp/english/index.html ",isavailable:"0",promptinfo:"",testnu:"EG437752812JP",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.post.japanpost.jp/english/index.html ",serversite:""},{cid:"108",id:"3086599",companyname:"丹麦(Post Denmark)",shortname:"丹麦邮政",tel:"+45 80 20 70 30 ",url:"postdanmarken",code:"postdanmarken",hasvali:0,comurl:"http://www.postdanmark.dk/en/Pages/home.aspx ",isavailable:"0",promptinfo:"",testnu:"CC633268198DK",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.postdanmark.dk/en/Pages/home.aspx ",serversite:""},{cid:"109",id:"3086636",companyname:"巴西(Brazil Post/Correios)",shortname:"巴西邮政Brazil Post",tel:"+55 61 3003 0100",url:"postdanmarken",code:"brazilposten",hasvali:0,comurl:"http://www.correios.com.br/ ",isavailable:"0",promptinfo:"",testnu:"CP295332010BR",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.correios.com.br/ ",serversite:""},{cid:"324",id:"3118858",companyname:"荷兰挂号信(PostNL international registered mail)",shortname:"荷兰邮政",tel:"34819",url:"postnlcn",code:"postnlcn",hasvali:0,comurl:"http://www.postnl.post",isavailable:"0",promptinfo:"",testnu:"RS351167864NL",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.postnl.post",serversite:""},{cid:"325",id:"3118862",companyname:"荷兰挂号信(PostNL international registered mail)",shortname:"荷兰邮政",tel:"34819",url:"PostNL",code:"postnl",hasvali:0,comurl:"http://www.postnl.post/details/",isavailable:"0",promptinfo:"",testnu:"RS335114562NL",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.postnl.post/details/",serversite:""},{cid:"326",id:"3118897",companyname:"乌克兰EMS-中文(EMS Ukraine)",shortname:"乌克兰EMS",tel:"+38 044 234-73-84",url:"emsukrainecn",code:"emsukrainecn",hasvali:0,comurl:"http://dpsz.ua/en",isavailable:"0",promptinfo:"",testnu:"EX008947890SG",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://dpsz.ua/en",serversite:""},{cid:"327",id:"3118903",companyname:"乌克兰EMS(EMS Ukraine)",shortname:"EMS Ukraine",tel:"+38 044 234-73-84",url:"emsukraine",code:"emsukraine",hasvali:0,comurl:"http://dpsz.ua/en",isavailable:"0",promptinfo:"",testnu:"EX008947890SG",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://dpsz.ua/en",serversite:""},{cid:"328",id:"3118910",companyname:"乌克兰邮政包裹",shortname:"乌克兰邮政包裹",tel:"",url:"ukrpostcn",code:"ukrpostcn",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"329",id:"3118913",companyname:"乌克兰小包、大包(UkrPost)",shortname:"UkrPost",tel:"+380 (0) 800-500-440",url:"ukrpost",code:"ukrpost",hasvali:0,comurl:"http://www.ukrposhta.com/",isavailable:"0",promptinfo:"",testnu:"CP650816393UA",freg:"",freginfo:"",telcomplaintnum:"+380 (0) 800-500-440",queryurl:"http://www.ukrposhta.com/",serversite:""},{cid:"98",id:"3125254",companyname:"海红for买卖宝",shortname:"海红for买卖宝",tel:"",url:"haihongmmb",code:"haihongmmb",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"99",id:"3125259",companyname:"FedEx-英国件（FedEx UK)",shortname:"FedEx UK",tel:"+ 44 2476 706 660",url:"fedexuk",code:"fedexuk",hasvali:0,comurl:"http://www.fedex.com/gb/ukservices/",isavailable:"0",promptinfo:"",testnu:"655311953669",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.fedex.com/gb/ukservices/",serversite:""},{cid:"100",id:"3125270",companyname:"FedEx-英国件",shortname:"FedEx-英国件",tel:"+ 44 2476 706 660",url:"fedexukcn",code:"fedexukcn",hasvali:0,comurl:"http://www.fedex.com/gb/ukservices/",isavailable:"0",promptinfo:"",testnu:"2252009793",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.fedex.com/gb/ukservices/",serversite:""},{cid:"101",id:"3125276",companyname:"叮咚快递",shortname:"叮咚快递",tel:"",url:"dingdong",code:"dingdong",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"299",id:"3130655",companyname:"DPD",shortname:"DPD",tel:"+31 20 480 2900",url:"dpd",code:"dpd",hasvali:0,comurl:"http://www.dpd.com/",isavailable:"0",promptinfo:"",testnu:"15505360288183",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.dpd.com/",serversite:""},{cid:"300",id:"3130663",companyname:"UPS Freight",shortname:"UPS Freight",tel:"+1 800-333-7400",url:"upsfreight",code:"upsfreight",hasvali:0,comurl:"http://ltl.upsfreight.com/",isavailable:"0",promptinfo:"",testnu:"260219374",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://ltl.upsfreight.com/",serversite:""},{cid:"138",id:"3135935",companyname:"ABF",shortname:"ABF",tel:"(479) 785-6486",url:"abf",code:"abf",hasvali:0,comurl:"http://www.abfs.com/",isavailable:"0",promptinfo:"",testnu:"23471181",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.abfs.com/",serversite:""},{cid:"139",id:"3135948",companyname:"Purolator",shortname:"Purolator",tel:"-8754",url:"purolator",code:"purolator",hasvali:0,comurl:"http://www.purolator.com/",isavailable:"0",promptinfo:"",testnu:"6909455103",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.purolator.com/",serversite:""},{cid:"88",id:"3139495",companyname:"比利时（Bpost）",shortname:"Bpost",tel:"+32 (0)2 278 50 90",url:"bpost",code:"bpost",hasvali:0,comurl:"http://www.bpostinternational.com/",isavailable:"0",promptinfo:"",testnu:"412015896000000000000032376423",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.bpostinternational.com/",serversite:""},{cid:"89",id:"3140220",companyname:"比利时国际(Bpost international)",shortname:"bpostint",tel:"+32 (0)2 278 50 90",url:"bpostinter",code:"bpostinter",hasvali:0,comurl:"http://www.bpostinternational.com/",isavailable:"0",promptinfo:"",testnu:"229490632892",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.bpostinternational.com/",serversite:""},{cid:"335",id:"3155981",companyname:"LaserShip",shortname:"LaserShip",tel:"+1 (800) 527-3764",url:"lasership",code:"lasership",hasvali:0,comurl:"http://www.lasership.com/",isavailable:"0",promptinfo:"",testnu:"LW13200211",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.lasership.com/",serversite:""},{cid:"336",id:"3155993",companyname:"英国大包、EMS（Parcel Force）",shortname:"Parcel Force",tel:"08448 00 44 66",url:"parcelforce",code:"parcelforce",hasvali:0,comurl:"http://www.parcelforce.com/",isavailable:"0",promptinfo:"",testnu:"EA214606087HK",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.parcelforce.com/",serversite:""},{cid:"337",id:"3155998",companyname:"英国邮政大包EMS",shortname:"英国邮政大包EMS",tel:"08448 00 44 66",url:"parcelforcecn",code:"parcelforcecn",hasvali:0,comurl:"http://www.parcelforce.com/",isavailable:"0",promptinfo:"",testnu:"FH130128771GB",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.parcelforce.com/",serversite:""},{cid:"338",id:"3156002",companyname:"YODEL",shortname:"YODEL",tel:"+44 800 0152 662",url:"yode",code:"yodel",hasvali:0,comurl:"http://www.myyodel.co.uk/",isavailable:"0",promptinfo:"",testnu:"JD0002251443524793",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.myyodel.co.uk/",serversite:""},{cid:"242",id:"3160296",companyname:"DHL-荷兰（DHL Netherlands）",shortname:"DHL Netherlands",tel:"+31 26-324 6700",url:"dhlnetherlands",code:"dhlnetherlands",hasvali:0,comurl:"http://www.dhl.nl",isavailable:"0",promptinfo:"",testnu:"JVGL0590339801852785",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.dhl.nl",serversite:""},{cid:"277",id:"3165626",companyname:"MyHermes",shortname:"MyHermes",tel:"+44 844 543 7000",url:"myhermes",code:"myhermes",hasvali:0,comurl:"https://www.myhermes.co.uk/",isavailable:"0",promptinfo:"",testnu:"9378786254934087",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.myhermes.co.uk/",serversite:""},{cid:"278",id:"3165635",companyname:"DPD Germany",shortname:"DPD Germany",tel:"+49 01806 373 200",url:"dpdgermany",code:"dpdgermany",hasvali:0,comurl:"https://www.dpd.com/de/(portal)/de/(rememberCountry)/0",isavailable:"0",promptinfo:"",testnu:"01505081960609",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.dpd.com/de/(portal)/de/(rememberCountry)/0",serversite:""},{cid:"279",id:"3165646",companyname:"Fastway Ireland",shortname:"Fastway Ireland",tel:"+353 1 4242 900",url:"fastway",code:"fastway",hasvali:0,comurl:"http://www.fastway.ie/index.php",isavailable:"0",promptinfo:"",testnu:"WA0013625940",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.fastway.ie/index.php",serversite:""},{cid:"182",id:"3177500",companyname:"法国大包、EMS-法文（Chronopost France）",shortname:"Chronopost France",tel:"+33 (0) 969 391 391",url:"chronopostfra",code:"chronopostfra",hasvali:0,comurl:"http://www.chronopost.fr/",isavailable:"0",promptinfo:"",testnu:"EY876275007FR",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.chronopost.fr/",serversite:""},{cid:"183",id:"3177508",companyname:"Selektvracht",shortname:"Selektvracht",tel:"+31 0900-2222120",url:"selektvracht",code:"selektvracht",hasvali:0,comurl:"http://www.selektvracht.nl/",isavailable:"0",promptinfo:"",testnu:"3SXLDW00387",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.selektvracht.nl/",serversite:""},{cid:"184",id:"3177511",companyname:"蓝弧快递",shortname:"蓝弧快递",tel:"4000661646",url:"lanhukuaidi",code:"lanhukuaidi",hasvali:0,comurl:"http://www.lanhukd.com/",isavailable:"0",promptinfo:"",testnu:"757000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.lanhukd.com/",serversite:""},{cid:"185",id:"3177517",companyname:"比利时(Belgium Post)",shortname:"Belgium Post",tel:"+32 2 276 22 74",url:"belgiumpost",code:"belgiumpost",hasvali:0,comurl:"http://www.bpost.be/",isavailable:"0",promptinfo:"",testnu:"RA832006770BE",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.bpost.be/",serversite:""},{cid:"221",id:"3194763",companyname:"UPS Mail Innovations",shortname:"UPS Mail Innovations",tel:"+1 800-500-2224",url:"upsmailinno",code:"upsmailinno",hasvali:0,comurl:"http://www.upsmailinnovations.com/",isavailable:"0",promptinfo:"",testnu:"92748999964342543475126127",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.upsmailinnovations.com/",serversite:""},{cid:"222",id:"3194764",companyname:"挪威（Posten Norge）",shortname:"Posten Norge",tel:"+47 21316260",url:"postennorge",code:"postennorge",hasvali:0,comurl:"http://www.posten.no/en/",isavailable:"0",promptinfo:"",testnu:"CD657634775NO",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.posten.no/en/",serversite:""},{cid:"223",id:"3194765",companyname:"瑞士邮政",shortname:"瑞士邮政",tel:"+41848888888",url:"swisspostcn",code:"swisspostcn",hasvali:0,comurl:"https://www.post.ch/de/privat?wt_shortcut=www-swisspost-com&WT.mc_id=shortcut_www-swisspost-com",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"+41848888888",queryurl:"https://www.post.ch/de/privat?wt_shortcut=www-swisspost-com&WT.mc_id=shortcut_www-swisspost-com",serversite:""},{cid:"224",id:"3194766",companyname:"瑞士(Swiss Post)",shortname:"Swiss Post",tel:"+41 848 888 888",url:"swisspost",code:"swisspost",hasvali:0,comurl:"http://www.post.ch/en",isavailable:"0",promptinfo:"",testnu:"RU468581905CH",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.post.ch/en",serversite:""},{cid:"225",id:"3194767",companyname:"英国邮政小包",shortname:"英国邮政小包",tel:"",url:"royalmailcn",code:"royalmailcn",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"226",id:"3194768",companyname:"英国小包（Royal Mail）",shortname:"Royal Mail",tel:"+44 1752387112",url:"royalmail",code:"royalmail",hasvali:0,comurl:"http://www.royalmail.com/",isavailable:"0",promptinfo:"",testnu:"RQ304136228GB",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.royalmail.com/",serversite:""},{cid:"227",id:"3194769",companyname:"DHL Benelux",shortname:"DHL Benelux",tel:"+31 26-324 6700",url:"dhlbenelux",code:"dhlbenelux",hasvali:0,comurl:"http://www.dhl.nl/nl.html",isavailable:"0",promptinfo:"",testnu:"3214528741",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.dhl.nl/nl.html",serversite:""},{cid:"284",id:"3205226",companyname:"Nova Poshta",shortname:"Nova Poshta",tel:"+7 (0) 800 500 609",url:"novaposhta",code:"novaposhta",hasvali:0,comurl:"http://novaposhta.ua/",isavailable:"0",promptinfo:"",testnu:"60000000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://novaposhta.ua/",serversite:""},{cid:"285",id:"3205227",companyname:"DHL-波兰（DHL Poland）",shortname:"DHL Poland",tel:"+48 42 6 345 345",url:"dhlpoland",code:"dhlpoland",hasvali:0,comurl:"http://www.dhl.com.pl/pl.html",isavailable:"0",promptinfo:"",testnu:"13164502259",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.dhl.com.pl/pl.html",serversite:""},{cid:"286",id:"3205228",companyname:"Estes",shortname:"Estes",tel:"1-866-378-3748",url:"estes",code:"estes",hasvali:0,comurl:"http://www.estes-express.com/",isavailable:"0",promptinfo:"",testnu:"2951429029",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.estes-express.com/",serversite:""},{cid:"287",id:"3205229",companyname:"TNT UK",shortname:"TNT UK",tel:"+44 0800 100 600",url:"tntuk",code:"tntuk",hasvali:0,comurl:"http://www.tnt.com/portal/location/en.html",isavailable:"0",promptinfo:"",testnu:"1201877402928",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.tnt.com/portal/location/en.html",serversite:""},{cid:"288",id:"3205230",companyname:"Deltec Courier",shortname:"Deltec Courier",tel:"+44 (0) 20 8569 6767",url:"deltec",code:"deltec",hasvali:0,comurl:"https://www.deltec-courier.com",isavailable:"0",promptinfo:"",testnu:"096492851184",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.deltec-courier.com",serversite:""},{cid:"256",id:"3223274",companyname:"OPEK",shortname:"OPEK",tel:"+48 22 732 79 99",url:"opek",code:"opek",hasvali:0,comurl:"http://www.opek.com.pl/",isavailable:"0",promptinfo:"",testnu:"798543981654",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.opek.com.pl/",serversite:""},{cid:"257",id:"3223275",companyname:"DPD Poland",shortname:"DPD Poland",tel:"+48 801 400 373",url:"dpdpoland",code:"dpdpoland",hasvali:0,comurl:"http://www.dpd.com.pl/",isavailable:"0",promptinfo:"",testnu:"0000005441202U",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.dpd.com.pl/",serversite:""},{cid:"258",id:"3223276",companyname:"Italy SDA",shortname:"Italy SDA",tel:"+39 199 113366",url:"italysad",code:"italysad",hasvali:0,comurl:"http://wwww.sda.it/",isavailable:"0",promptinfo:"",testnu:"D765317000021",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://wwww.sda.it/",serversite:""},{cid:"104",id:"3228276",companyname:"MRW",shortname:"MRW",tel:"+34 902 300 402",url:"mrw",code:"mrw",hasvali:0,comurl:"http://www.mrw.es/",isavailable:"0",promptinfo:"",testnu:"043037043203",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.mrw.es/",serversite:""},{cid:"105",id:"3228277",companyname:"Chronopost Portugal",shortname:"Chronopost Portugal",tel:"+351 707 20 28 28",url:"chronopostport",code:"chronopostport",hasvali:0,comurl:"http://chronopost.pt/",isavailable:"0",promptinfo:"",testnu:"19900000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://chronopost.pt/",serversite:""},{cid:"106",id:"3228278",companyname:"西班牙(Correos de Espa?a)",shortname:"Correos de Espa?a",tel:"+34 902197197",url:"correosdees",code:"correosdees",hasvali:0,comurl:"http://www.correos.es",isavailable:"0",promptinfo:"",testnu:"EK505483520ES",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.correos.es",serversite:""},{cid:"289",id:"3238411",companyname:"Direct Link",shortname:"Direct Link",tel:"+1 (908) 289-0703",url:"directlink",code:"directlink",hasvali:0,comurl:"http://www.directlink.com",isavailable:"0",promptinfo:"",testnu:"RE605820729SE",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.directlink.com",serversite:""},{cid:"290",id:"3238412",companyname:"ELTA Hellenic Post",shortname:"ELTA Hellenic Post",tel:"+30 801 11 83000",url:"eltahell",code:"eltahell",hasvali:0,comurl:"https://www.elta-courier.gr",isavailable:"0",promptinfo:"",testnu:"EE205325675GR",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.elta-courier.gr",serversite:""},{cid:"291",id:"3238413",companyname:"捷克（?eská po?ta）",shortname:"ceskaposta",tel:"+420 840 111 244",url:"ceskaposta",code:"ceskaposta",hasvali:0,comurl:"http://www.ceskaposta.cz/index",isavailable:"0",promptinfo:"",testnu:"EM512005180CZ",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ceskaposta.cz/index",serversite:""},{cid:"292",id:"3238414",companyname:"Siodemka",shortname:"Siodemka",tel:"+48 22 777 77 77",url:"siodemka",code:"siodemka",hasvali:0,comurl:"http://www.siodemka.com/",isavailable:"0",promptinfo:"",testnu:"9730000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.siodemka.com/",serversite:""},{cid:"259",id:"3245372",companyname:"International Seur",shortname:"International Seur",tel:"+34 93 336 85 85",url:"seur",code:"seur",hasvali:0,comurl:"http://www.seur.com/",isavailable:"0",promptinfo:"",testnu:"2015290828470127555960",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.seur.com/",serversite:""},{cid:"260",id:"3245373",companyname:"久易快递",shortname:"久易快递",tel:"021-64206088",url:"jiuyicn",code:"jiuyicn",hasvali:0,comurl:"http://www.jiuyicn.com/",isavailable:"0",promptinfo:"",testnu:"5833526742",freg:"",freginfo:"",telcomplaintnum:"021-64206088",queryurl:"http://www.jiuyicn.com/",serversite:""},{cid:"228",id:"3264010",companyname:"克罗地亚（Hrvatska Posta）",shortname:"Hrvatska Posta",tel:"+385 0800 303 304",url:"hrvatska",code:"hrvatska",hasvali:0,comurl:"http://www.posta.hr/",isavailable:"0",promptinfo:"",testnu:"RC010487565HR",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.posta.hr/",serversite:""},{cid:"229",id:"3264011",companyname:"保加利亚（Bulgarian Posts）",shortname:"Bulgarian Posts",tel:"+3592/949 3280",url:"bulgarian",code:"bulgarian",hasvali:0,comurl:"http://www.bgpost.bg/",isavailable:"0",promptinfo:"",testnu:"YUNDA",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.bgpost.bg/",serversite:""},{cid:"230",id:"3264012",companyname:"Portugal Seur",shortname:"Portugal Seur",tel:"+351 707 50 10 10",url:"portugalseur",code:"portugalseur",hasvali:0,comurl:"http://www.seur.com/",isavailable:"0",promptinfo:"",testnu:"289000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.seur.com/",serversite:""},{cid:"126",id:"3280637",companyname:"EC-Firstclass",shortname:"EC-Firstclass",tel:"+86 4006 988 223",url:"ecfirstclass",code:"ecfirstclass",hasvali:0,comurl:"http://www.ec-firstclass.org/Details.aspx",isavailable:"0",promptinfo:"",testnu:"LTL130320BCA000017",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ec-firstclass.org/Details.aspx",serversite:""},{cid:"127",id:"3280638",companyname:"DTDC India",shortname:"DTDC India",tel:"+91 33004444",url:"dtdcindia",code:"dtdcindia",hasvali:0,comurl:"http://dtdc.com",isavailable:"0",promptinfo:"",testnu:"N95914878",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://dtdc.com",serversite:""},{cid:"128",id:"3280639",companyname:"Safexpress",shortname:"Safexpress",tel:"+91 11 26783281",url:"safexpress",code:"safexpress",hasvali:0,comurl:"http://www.safexpress.com",isavailable:"0",promptinfo:"",testnu:"35627566",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.safexpress.com",serversite:""},{cid:"129",id:"3280640",companyname:"韩国（Korea Post）",shortname:"Korea Post",tel:"+82 2 2195 1114",url:"koreapost",code:"koreapost",hasvali:0,comurl:"http://www.koreapost.go.kr/kpost/main/index.jsp",isavailable:"0",promptinfo:"",testnu:"RR494467118KR",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.koreapost.go.kr/kpost/main/index.jsp",serversite:""},{cid:"295",id:"3312654",companyname:"TNT Australia",shortname:"TNT Australia",tel:"+61 13 11 50",url:"tntau",code:"tntau",hasvali:0,comurl:"https://www.tntexpress.com.au",isavailable:"0",promptinfo:"",testnu:"314055529",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.tntexpress.com.au",serversite:""},{cid:"293",id:"3312655",companyname:"泰国（Thailand Thai Post）",shortname:"Thailand Thai Post",tel:"0 2573 5463",url:"thailand",code:"thailand",hasvali:0,comurl:"http://www.thailandpost.co.th ",isavailable:"0",promptinfo:"",testnu:"EN961764205TH",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.thailandpost.co.th",serversite:""},{cid:"294",id:"3312656",companyname:"SkyNet Malaysia",shortname:"SkyNet Malaysia",tel:"+60 3- 56239090",url:"skynetmalaysia",code:"skynetmalaysia",hasvali:0,comurl:"http://www.skynet.com.my/",isavailable:"0",promptinfo:"",testnu:"201479896870",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.skynet.com.my/",serversite:""},{cid:"296",id:"3312657",companyname:"马来西亚小包（Malaysia Post(Registered)）",shortname:"Malaysia Post(Registered)",tel:"+603 27279100",url:"malaysiapost",code:"malaysiapost",hasvali:0,comurl:"http://www.pos.com.my/",isavailable:"0",promptinfo:"",testnu:"EP002931300MY",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.pos.com.my/",serversite:""},{cid:"297",id:"3312658",companyname:"马来西亚大包、EMS（Malaysia Post(parcel,EMS)）",shortname:"Malaysia Post (parcel,EMS)",tel:"+603 27279100",url:"malaysiaems",code:"malaysiaems",hasvali:0,comurl:"http://www.pos.com.my/",isavailable:"0",promptinfo:"",testnu:"CP306201896MY",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.pos.com.my/",serversite:""},{cid:"330",id:"3321130",companyname:"京东",shortname:"京东",tel:"400-603-3600",url:"jd",code:"jd",hasvali:0,comurl:"http://www.jd-ex.com",isavailable:"0",promptinfo:"",testnu:"11059731415",freg:"",freginfo:"",telcomplaintnum:"400-603-3600",queryurl:"http://www.jd-ex.com",serversite:""},{cid:"201",id:"3331811",companyname:"沙特阿拉伯(Saudi Post)",shortname:"Saudi Post",tel:"+966 9200 05700",url:"saudipost",code:"saudipost",hasvali:0,comurl:"http://www.sp.com.sa",isavailable:"0",promptinfo:"",testnu:"EB070957408BR",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.sp.com.sa",serversite:""},{cid:"202",id:"3331812",companyname:"南非（South African Post Office）",shortname:"South African Post Office",tel:"+27 0860 111 502",url:"southafrican",code:"southafrican",hasvali:0,comurl:"http://www.postoffice.co.za",isavailable:"0",promptinfo:"",testnu:"CN022908044ZA",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.postoffice.co.za",serversite:""},{cid:"203",id:"3331813",companyname:"OCA Argentina",shortname:"OCA Argentina",tel:"+34 800-999-7700",url:"ocaargen",code:"ocaargen",hasvali:0,comurl:"http://www.oca.com.ar/",isavailable:"0",promptinfo:"",testnu:"3990000000000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.oca.com.ar/",serversite:""},{cid:"204",id:"3331814",companyname:"尼日利亚(Nigerian Postal)",shortname:"Nigerian Postal",tel:"234-09-3149531",url:"nigerianpost",code:"nigerianpost",hasvali:0,comurl:"http://www.nipost.gov.ng",isavailable:"0",promptinfo:"",testnu:"EE319286895NG",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.nipost.gov.ng",serversite:""},{cid:"205",id:"3331815",companyname:"智利(Correos Chile)",shortname:"Correos Chile",tel:"+562 600 950 2020",url:"chile",code:"chile",hasvali:0,comurl:"http://www.correos.cl",isavailable:"0",promptinfo:"",testnu:"CP358805067CL",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.correos.cl",serversite:""},{cid:"206",id:"3331816",companyname:"以色列(Israel Post)",shortname:"Israel Post",tel:"+972 2 629 0691",url:"israelpost",code:"israelpost",hasvali:0,comurl:"http://www.israelpost.co.il",isavailable:"0",promptinfo:"",testnu:"EE143917265IL",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.israelpost.co.il",serversite:""},{cid:"231",id:"3362923",companyname:"Toll Priority(Toll Online)",shortname:"Toll Priority",tel:"+61 13 15 31",url:"tollpriority",code:"tollpriority",hasvali:0,comurl:"https://online.toll.com.au",isavailable:"0",promptinfo:"",testnu:"6828047773260003233001",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://online.toll.com.au",serversite:""},{cid:"232",id:"3362925",companyname:"Estafeta",shortname:"Estafeta",tel:"+52 1-800-378-2338",url:"estafeta",code:"estafeta",hasvali:0,comurl:"http://rastreo3.estafeta.com",isavailable:"0",promptinfo:"",testnu:"763326789",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://rastreo3.estafeta.com",serversite:""},{cid:"233",id:"3362926",companyname:"港快速递",shortname:"港快速递",tel:"400-11-33333",url:"gdkd",code:"gdkd",hasvali:0,comurl:"http://www.gksd.com/",isavailable:"0",promptinfo:"",testnu:"200028092916",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.gksd.com/",serversite:""},{cid:"234",id:"3362927",companyname:"墨西哥（Correos de Mexico）",shortname:"Correos de Mexico",tel:"+52 01 800 701 7000",url:"mexico",code:"mexico",hasvali:0,comurl:"http://www.correosdemexico.gob.mx",isavailable:"0",promptinfo:"",testnu:"RP400000695MX",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.correosdemexico.gob.mx",serversite:""},{cid:"235",id:"3362928",companyname:"罗马尼亚（Posta Romanian）",shortname:"Posta Romanian",tel:"+40 021 9393 111",url:"romanian",code:"romanian",hasvali:0,comurl:"http://www.posta-romana.ro/posta-romana.html",isavailable:"0",promptinfo:"",testnu:"CO989187136RO",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.posta-romana.ro/posta-romana.html",serversite:""},{cid:"318",id:"3383409",companyname:"TNT Italy",shortname:"TNT Italy",tel:"+39 199 803 868",url:"tntitaly",code:"tntitaly",hasvali:0,comurl:"http://www.tnt.it",isavailable:"0",promptinfo:"",testnu:"MY33217326",freg:"",freginfo:"",telcomplaintnum:"+39 199 803 868",queryurl:"http://www.tnt.it",serversite:""},{cid:"319",id:"3383410",companyname:"Mexico Multipack",shortname:"Mexico Multipack",tel:"+52 1800 7023200",url:"multipack",code:"multipack",hasvali:0,comurl:"http://www.multipack.com.mx/",isavailable:"0",promptinfo:"",testnu:"166000000000",freg:"",freginfo:"",telcomplaintnum:"+52 1800 7023200",queryurl:"http://www.multipack.com.mx/",serversite:""},{cid:"320",id:"3383411",companyname:"葡萄牙（Portugal CTT）",shortname:"Portugal CTT",tel:"+351 707 26 26 26",url:"portugalctt",code:"portugalctt",hasvali:0,comurl:"http://www.ctt.pt",isavailable:"0",promptinfo:"",testnu:"RD601577564PT",freg:"",freginfo:"",telcomplaintnum:"+351 707 26 26 26",queryurl:"http://www.ctt.pt",serversite:""},{cid:"321",id:"3383412",companyname:"Interlink Express",shortname:"Interlink Express",tel:"+44 8702 200 300",url:"interlink",code:"interlink",hasvali:0,comurl:"http://www.interlinkexpress.com/",isavailable:"0",promptinfo:"",testnu:"6152848856",freg:"",freginfo:"",telcomplaintnum:"+44 8702 200 300",queryurl:"http://www.interlinkexpress.com/",serversite:""},{cid:"322",id:"3383413",companyname:"DPD UK",shortname:"DPD UK",tel:"+44 845 9 300 350",url:"dpduk",code:"dpduk",hasvali:0,comurl:"http://www.dpd.co.uk/",isavailable:"0",promptinfo:"",testnu:"15505411411164",freg:"",freginfo:"",telcomplaintnum:"+44 845 9 300 350",queryurl:"http://www.dpd.co.uk/",serversite:""},{cid:"157",id:"3432857",companyname:"华航快递",shortname:"华航快递",tel:"400-697-0008",url:"hzpl",code:"hzpl",hasvali:0,comurl:"http://www.hz3pl.com",isavailable:"0",promptinfo:"",testnu:"100275942",freg:"",freginfo:"",telcomplaintnum:"400-697-0008",queryurl:"http://www.hz3pl.com",serversite:""},{cid:"158",id:"3432858",companyname:"Gati-KWE",shortname:"Gati-KWE",tel:"+91 1800-180-4284",url:"gatikwe",code:"gatikwe",hasvali:0,comurl:"http://www.gatikwe.com/",isavailable:"0",promptinfo:"",testnu:"413767243",freg:"",freginfo:"",telcomplaintnum:"+91 1800-180-4284",queryurl:"http://www.gatikwe.com/",serversite:""},{cid:"159",id:"3432859",companyname:"Red Express",shortname:"Red Express",tel:"+91 1800-123-2400",url:"redexpress",code:"redexpress",hasvali:0,comurl:"https://www.getsetred.net",isavailable:"0",promptinfo:"",testnu:"0075941",freg:"",freginfo:"",telcomplaintnum:"+91 1800-123-2400",queryurl:"https://www.getsetred.net",serversite:""},{cid:"261",id:"3440002",companyname:"Mexico Senda Express",shortname:"Mexico Senda Express",tel:"+52 1800 833 93 00",url:"mexicodenda",code:"mexicodenda",hasvali:0,comurl:"http://www.sendaexpress.com.mx/rastreo.asp#af",isavailable:"0",promptinfo:"",testnu:"10200000000000",freg:"",freginfo:"",telcomplaintnum:"+52 1800 833 93 00",queryurl:"http://www.sendaexpress.com.mx/rastreo.asp#af",serversite:""},{cid:"331",id:"3487500",companyname:"TCI XPS",shortname:"TCI XPS",tel:"18002000977",url:"tcixps",code:"tcixps",hasvali:0,comurl:"http://www.tcixps.com/",isavailable:"0",promptinfo:"",testnu:"110000000000",freg:"",freginfo:"",telcomplaintnum:"18002000977",queryurl:"http://www.tcixps.com/",serversite:""},{cid:"332",id:"3487501",companyname:"高铁速递",shortname:"高铁速递",tel:"400-999-7777",url:"hre",code:"hre",hasvali:0,comurl:"http://www.hre-e.com/",isavailable:"0",promptinfo:"",testnu:"59100031231",freg:"",freginfo:"",telcomplaintnum:"400-999-7777",queryurl:"http://www.hre-e.com/",serversite:""},{cid:"333",id:"3487502",companyname:"新加坡EMS、大包(Singapore Speedpost)",shortname:"Singapore Speedpost",tel:"+65 6222 5777",url:"speedpost",code:"speedpost",hasvali:0,comurl:"http://www.speedpost.com.sg/",isavailable:"0",promptinfo:"",testnu:"EX011436437SG",freg:"",freginfo:"",telcomplaintnum:"+65 6222 5777",queryurl:"http://www.speedpost.com.sg/",serversite:""},{cid:"186",id:"3489756",companyname:"EMS-国际件-英文",shortname:"EMS-国际件-英文",tel:"",url:"emsinten",code:"emsinten",hasvali:0,comurl:"http://www.ems.com.cn/",isavailable:"0",promptinfo:"",testnu:"EG408834094JP",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"243",id:"3526510",companyname:"Asendia USA",shortname:"Asendia USA",tel:"+1 610 461 3661",url:"asendiausa",code:"asendiausa",hasvali:0,comurl:"http://www.asendiausa.com/",isavailable:"0",promptinfo:"",testnu:"00006675214163582734",freg:"",freginfo:"",telcomplaintnum:"+1 610 461 3661",queryurl:"http://www.asendiausa.com/",serversite:""},{cid:"244",id:"3526511",companyname:"法国大包、EMS-英文(Chronopost France)",shortname:"Chronopost France",tel:"+33 (0) 969 391 391",url:"chronopostfren",code:"chronopostfren",hasvali:0,comurl:"http://www.chronopost.fr/",isavailable:"0",promptinfo:"",testnu:"EY084484098FR",freg:"",freginfo:"",telcomplaintnum:"+33 (0) 969 391 391",queryurl:"http://www.chronopost.fr/",serversite:""},{cid:"245",id:"3526512",companyname:"意大利(Poste Italiane)",shortname:"Poste Italiane Paccocelere",tel:"+39 803 160",url:"italiane",code:"italiane",hasvali:0,comurl:"http://www.poste.it/",isavailable:"0",promptinfo:"",testnu:"CP039849623IT",freg:"",freginfo:"",telcomplaintnum:"+39 803 160",queryurl:"http://www.poste.it/",serversite:""},{cid:"276",id:"3623446",companyname:"冠达快递",shortname:"冠达快递",tel:"400-990-0088",url:"gda",code:"gda",hasvali:0,comurl:"http://www.gda-e.com.cn/",isavailable:"0",promptinfo:"",testnu:"700114079397",freg:"",freginfo:"",telcomplaintnum:"400-990-0088",queryurl:"http://www.gda-e.com.cn/",serversite:""},{cid:"91",id:"3664396",companyname:"出口易",shortname:"出口易",tel:"4006-988-223",url:"chukou1",code:"chukou1",hasvali:0,comurl:"http://www.chukou1.com",isavailable:"0",promptinfo:"",testnu:"SZ32316495",freg:"",freginfo:"",telcomplaintnum:"13360562736",queryurl:"http://www.chukou1.com",serversite:""},{cid:"0",id:"3696400",companyname:"黄马甲",shortname:"黄马甲",tel:"029-96128",url:"huangmajia",code:"huangmajia",hasvali:0,comurl:"http://www.huangmajia.com",isavailable:"0",promptinfo:"",testnu:"032606205642846",freg:"",freginfo:"",telcomplaintnum:"029-96128",queryurl:"http://www.huangmajia.com",serversite:""},{cid:"280",id:"3785532",companyname:"新干线快递",shortname:"新干线快递",tel:"",url:"anlexpress",code:"anlexpress",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"281",id:"3785533",companyname:"飞洋快递",shortname:"飞洋快递",tel:"001-877-387-9799",url:"shipgce",code:"shipgce",hasvali:0,comurl:"http://express.shipgce.com/",isavailable:"0",promptinfo:"",testnu:"DD504013290US",freg:"",freginfo:"",telcomplaintnum:"001-877-387-9799",queryurl:"",serversite:""},{cid:"282",id:"3785534",companyname:"贝海国际速递",shortname:"贝海国际速递",tel:"086-400-082-2200",url:"xlobo",code:"xlobo",hasvali:0,comurl:"http://www.xlobo.com/",isavailable:"0",promptinfo:"",testnu:"DB863228069US",freg:"",freginfo:"",telcomplaintnum:"086-400-082-2200",queryurl:"",serversite:""},{cid:"140",id:"3808754",companyname:"阿联酋(Emirates Post)",shortname:"阿联酋邮政",tel:"600-599-999",url:"emirates",code:"emirates",hasvali:0,comurl:"http://www.epg.gov.ae/",isavailable:"0",promptinfo:"",testnu:"EE041631183AE",freg:"",freginfo:"",telcomplaintnum:"600-599-999",queryurl:"http://www.epg.gov.ae/",serversite:""},{cid:"0",id:"3808755",companyname:"新顺丰（NSF）",shortname:"新顺丰（NSF）",tel:"0064-9-5258288",url:"nsf",code:"nsf",hasvali:0,comurl:"http://www.nsf.co.nz/",isavailable:"0",promptinfo:"",testnu:"91502028659",freg:"",freginfo:"",telcomplaintnum:"0064-9-5258288",queryurl:"http://www.nsf.co.nz/",serversite:""},{cid:"142",id:"3808756",companyname:"巴基斯坦(Pakistan Post)",shortname:"巴基斯坦邮政",tel:"（+92 51）926 00 37",url:"pakistan",code:"pakistan",hasvali:0,comurl:"http://ep.gov.pk/",isavailable:"0",promptinfo:"",testnu:"EE338661704CN",freg:"",freginfo:"",telcomplaintnum:"（+92 51）926 00 37",queryurl:"http://ep.gov.pk/",serversite:""},{cid:"275",id:"3812620",companyname:"世运快递",shortname:"世运快递",tel:"400-666-1111",url:"shiyunkuaidi",code:"shiyunkuaidi",hasvali:0,comurl:"http://www.sehoex.com/",isavailable:"0",promptinfo:"",testnu:"200000000000",freg:"",freginfo:"",telcomplaintnum:"400-666-1111",queryurl:"http://sehoexpress.com/index.asp",serversite:""},{cid:"166",id:"3836842",companyname:"合众速递(UCS）",shortname:"合众速递(UCS）",tel:"024-31515566",url:"ucs",code:"ucs",hasvali:0,comurl:"http://www.ucsus.com",isavailable:"0",promptinfo:"",testnu:"EL900787012HK",freg:"",freginfo:"",telcomplaintnum:"024-31515566",queryurl:"http://www.ucsus.com",serversite:""},{cid:"167",id:"3836843",companyname:"阿富汗(Afghan Post)",shortname:"阿富汗邮政",tel:"+93 20 2104075",url:"afghan",code:"afghan",hasvali:0,comurl:"http://track.afghanpost.gov.af/",isavailable:"0",promptinfo:"",testnu:"CP858622080HK",freg:"",freginfo:"",telcomplaintnum:"+93 20 2104075",queryurl:"http://track.afghanpost.gov.af/",serversite:""},{cid:"308",id:"3852026",companyname:"白俄罗斯(Belpochta)",shortname:"白俄罗斯",tel:"+375 17 293 59 10",url:"belpost",code:"belpost",hasvali:0,comurl:"http://www.belpost.by/",isavailable:"0",promptinfo:"",testnu:"CP045759207BY",freg:"",freginfo:"",telcomplaintnum:"+375 17 293 59 10",queryurl:"http://www.belpost.by/",serversite:""},{cid:"92",id:"3946200",companyname:"全通快运",shortname:"全通快运",tel:"",url:"quantwl",code:"quantwl",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"93",id:"3946201",companyname:"宅急便",shortname:"宅急便",tel:"",url:"zhaijibian",code:"zhaijibian",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"120098239752",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"130",id:"4010763",companyname:"EFS Post",shortname:"efs",tel:"0773-2308246",url:"efs",code:"efs",hasvali:0,comurl:"http://www.efspost.com/ ",isavailable:"0",promptinfo:"",testnu:"EF313486219NZ",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"131",id:"4010767",companyname:"TNT Post",shortname:"tntpostcn",tel:"+31（0）900 0570 ",url:"tntpostcn",code:"tntpostcn",hasvali:0,comurl:"http://parcels-uk.tntpost.com/ ",isavailable:"0",promptinfo:"",testnu:"3SABC123456789 ",freg:"",freginfo:"",telcomplaintnum:"+31（0）900 0570 ",queryurl:"",serversite:""},{cid:"316",id:"4051323",companyname:"英脉物流",shortname:"英脉物流",tel:"400-880-5088",url:"gml",code:"gml",hasvali:0,comurl:"http://www.gml.cn/",isavailable:"0",promptinfo:"",testnu:"151110000059",freg:"",freginfo:"",telcomplaintnum:"400-880-5088",queryurl:"http://www.gml.cn/",serversite:""},{cid:"95",id:"4110138",companyname:"广通速递",shortname:"广通速递",tel:"400-801-5567",url:"gtongsudi",code:"gtongsudi",hasvali:0,comurl:"http://www.gto56.com",isavailable:"0",promptinfo:"",testnu:"2200002356574",freg:"",freginfo:"",telcomplaintnum:"400-801-5567",queryurl:"",serversite:"http://www.gto56.com/ServiceNet/"},{cid:"96",id:"4110170",companyname:"东瀚物流",shortname:"东瀚物流",tel:"400-092-2229",url:"donghanwl",code:"donghanwl",hasvali:0,comurl:"http://www.donghanwl.com/",isavailable:"0",promptinfo:"",testnu:"DH0000108870",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"97",id:"4110206",companyname:"rpx",shortname:"rpx",tel:"",url:"rpx",code:"rpx",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"342",id:"4134425",companyname:"日日顺物流",shortname:"日日顺物流",tel:"400-800-9999",url:"rrs",code:"rrs",hasvali:0,comurl:"http://www.rrs.com/wl/fwwl",isavailable:"0",promptinfo:"",testnu:"6080019489",freg:"",freginfo:"",telcomplaintnum:"400-800-9999",queryurl:"http://www.rrs.com/wl/fwwl",serversite:""},{cid:"343",id:"4134450",companyname:"黑猫雅玛多",shortname:"黑猫雅玛多",tel:"",url:"yamato",code:"yamato",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"410874312166",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"344",id:"4134483",companyname:"华通快运",shortname:"华通快运",tel:"",url:"htongexpress",code:"htongexpress",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"345",id:"4134607",companyname:"吉尔吉斯斯坦(Kyrgyz Post)",shortname:"kyrgyzpost",tel:"",url:"kyrgyzpost",code:"kyrgyzpost",hasvali:0,comurl:"http://www.posta.kg",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.posta.kg",serversite:""},{cid:"346",id:"4134788",companyname:"拉脱维亚(Latvijas Pasts)",shortname:"拉脱维亚",tel:"",url:"latvia",code:"latvia",hasvali:0,comurl:"http://www.pasts.lv",isavailable:"0",promptinfo:"",testnu:"RS069553922LV",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"347",id:"4134832",companyname:"黎巴嫩(Liban Post)",shortname:"黎巴嫩",tel:"+961 1 629628",url:"libanpost",code:"libanpost",hasvali:0,comurl:"http://www.libanpost.com.lb",isavailable:"0",promptinfo:"",testnu:"RB788837634CN",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.libanpost.com.lb",serversite:""},{cid:"348",id:"4134850",companyname:"立陶宛（Lietuvos pa?tas）",shortname:"立陶宛",tel:"+370 700 55 400",url:"lithuania",code:"lithuania",hasvali:0,comurl:"http://www.post.lt",isavailable:"0",promptinfo:"",testnu:"RN007871333LT",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"349",id:"4134864",companyname:"马尔代夫(Maldives Post)",shortname:"马尔代夫",tel:"+960 331 5555",url:"maldives",code:"maldives",hasvali:0,comurl:"https://www.maldivespost.com/store/",isavailable:"0",promptinfo:"",testnu:"CP283371400CN",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.maldivespost.com/store/",serversite:""},{cid:"350",id:"4134881",companyname:"马耳他（Malta Post）",shortname:"马耳他",tel:"800 7 22 44",url:"malta",code:"malta",hasvali:0,comurl:"http://maltapost.com",isavailable:"0",promptinfo:"",testnu:"CF160012216MT",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"351",id:"4134992",companyname:"马其顿(Macedonian Post)",shortname:"马其顿",tel:"",url:"macedonia",code:"macedonia",hasvali:0,comurl:"http://www.posta.com.mk/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.posta.com.mk/",serversite:""},{cid:"352",id:"4135011",companyname:"新西兰（New Zealand Post）",shortname:"New Zealand Post",tel:"",url:"newzealand",code:"newzealand",hasvali:0,comurl:"https://www.nzpost.co.nz",isavailable:"0",promptinfo:"",testnu:"EP318770974NZ",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.nzpost.co.nz/tools/tracking?utm_source=sitebar_ph=sitebar=tracking",serversite:""},{cid:"353",id:"4135102",companyname:"摩尔多瓦(Posta Moldovei)",shortname:"摩尔多瓦",tel:"+373 - 22 270 044",url:"moldova",code:"moldova",hasvali:0,comurl:"http://www.posta.md/",isavailable:"0",promptinfo:"",testnu:"EE975880775US",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.posta.md/ro",serversite:""},{cid:"354",id:"4135131",companyname:"孟加拉国(EMS)",shortname:"孟加拉国(EMS)",tel:"9558006",url:"bangladesh",code:"bangladesh",hasvali:0,comurl:"www.bangladeshpost.gov.b",isavailable:"0",promptinfo:"",testnu:"EA018481807AU",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://globaltracktrace.ptc.post/gtt.web/",serversite:""},{cid:"355",id:"4135231",companyname:"塞尔维亚(PE Post of Serbia)",shortname:"塞尔维亚",tel:"0700 100 300",url:"serbia",code:"serbia",hasvali:0,comurl:"http://www.posta.rs",isavailable:"0",promptinfo:"",testnu:"CC165396756RS",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"356",id:"4135280",companyname:"塞浦路斯(Cyprus Post)",shortname:"塞浦路斯",tel:"77778013",url:"cypruspost",code:"cypruspost",hasvali:0,comurl:"http://www.mcw.gov.cy/mcw/postal/dps.nsf/index_en/index_en",isavailable:"0",promptinfo:"",testnu:"RQ000750137CY",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.mcw.gov.cy/mcw/postal/dps.nsf/page39_en/page39_en?opendocument",serversite:""},{cid:"357",id:"4135306",companyname:"突尼斯EMS(Rapid-Poste)",shortname:"突尼斯",tel:"(+216) 71 888 888 ",url:"tunisia",code:"tunisia",hasvali:0,comurl:"http://www.e-suivi.poste.tn",isavailable:"0",promptinfo:"",testnu:"EE447520659TN",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.rapidposte.poste.tn/an/index.html",serversite:""},{cid:"358",id:"4135328",companyname:"乌兹别克斯坦(Post of Uzbekistan)",shortname:"乌兹别克斯坦",tel:"(99871) 233 57 47",url:"uzbekistan",code:"uzbekistan",hasvali:0,comurl:"http://www.pochta.uz/en/",isavailable:"0",promptinfo:"",testnu:"RQ105168703UZ",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.pochta.uz/en/",serversite:""},{cid:"359",id:"4135437",companyname:"新喀里多尼亚[法国](New Caledonia)",shortname:"新喀里多尼亚[法国]",tel:"",url:"caledonia",code:"caledonia",hasvali:0,comurl:"http://www.opt.nc",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://webtrack.opt.nc/ipswebtracking",serversite:""},{cid:"360",id:"4135450",companyname:"叙利亚(Syrian Post)",shortname:"叙利亚",tel:"",url:"republic",code:"republic",hasvali:0,comurl:"http://www.syrianpost.gov.sy/",isavailable:"0",promptinfo:"",testnu:"CP100527951SY",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"361",id:"4135460",companyname:"亚美尼亚(Haypost-Armenian Postal)",shortname:"亚美尼亚",tel:"",url:"haypost",code:"haypost",hasvali:0,comurl:"http://www.haypost.am",isavailable:"0",promptinfo:"",testnu:"RR162422960AM",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.haypost.am/en/track-and-trace",serversite:""},{cid:"362",id:"4135464",companyname:"也门(Yemen Post)",shortname:"也门",tel:"",url:"yemen",code:"yemen",hasvali:0,comurl:"http://www.post.ye/",isavailable:"0",promptinfo:"",testnu:"EE008515775YE",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"363",id:"4135479",companyname:"印度(India Post)",shortname:"印度",tel:"1800-11-2011",url:"india",code:"india",hasvali:0,comurl:"http://www.indiapost.gov.in",isavailable:"0",promptinfo:"",testnu:"ED730048598IN",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"364",id:"4135533",companyname:"英国(大包,EMS)",shortname:"英国(大包,EMS)",tel:"",url:"england",code:"england",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"365",id:"4135567",companyname:"约旦(Jordan Post)",shortname:"约旦",tel:"-4292044",url:"jordan",code:"jordan",hasvali:0,comurl:"http://www.jordanpost.com.jo/",isavailable:"0",promptinfo:"",testnu:"RR310432598JO",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://194.165.151.253/jordanwebtrack/WebTrack_Submit.aspx",serversite:""},{cid:"366",id:"4135574",companyname:"越南小包(Vietnam Posts)",shortname:"越南",tel:"(+84) 1900 54 54 81",url:"vietnam",code:"vietnam",hasvali:0,comurl:"http://www.vnpost.vn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.vnpost.vn/",serversite:""},{cid:"367",id:"4135624",companyname:"黑山(Po?ta Crne Gore)",shortname:"黑山",tel:"",url:"montenegro",code:"montenegro",hasvali:0,comurl:"http://www.postacg.me",isavailable:"0",promptinfo:"",testnu:"RR035827035ME",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.postacg.me",serversite:""},{cid:"368",id:"4135637",companyname:"哥斯达黎加(Correos de Costa Rica)",shortname:"哥斯达黎加",tel:"",url:"correos",code:"correos",hasvali:0,comurl:"https://www.correos.go.cr",isavailable:"0",promptinfo:"",testnu:"EE046324467CR",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.correos.go.cr",serversite:""},{cid:"369",id:"4148742",companyname:"喜来快递",shortname:"喜来快递",tel:"",url:"xilaikd",code:"xilaikd",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"912006000000348",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"370",id:"4148789",companyname:"格陵兰[丹麦]（TELE Greenland A/S）",shortname:"格陵兰[丹麦]",tel:"",url:"greenland",code:"greenland",hasvali:0,comurl:"http://sp.post.gl",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"371",id:"4148814",companyname:"菲律宾（Philippine Postal）",shortname:"菲律宾",tel:"",url:"phlpost",code:"phlpost",hasvali:0,comurl:"https://www.phlpost.gov.ph",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.phlpost.gov.ph",serversite:""},{cid:"372",id:"4148832",companyname:"厄瓜多尔(Correos del Ecuador)",shortname:"厄瓜多尔",tel:"(593-2) 3829210",url:"ecuador",code:"ecuador",hasvali:0,comurl:"http://www.correosdelecuador.gob.ec/",isavailable:"0",promptinfo:"",testnu:"RR301124849EC",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.correosdelecuador.gob.ec/",serversite:""},{cid:"373",id:"4148887",companyname:"冰岛(Iceland Post)",shortname:"冰岛",tel:"",url:"iceland",code:"iceland",hasvali:0,comurl:"http://www.postur.is/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.postur.is/",serversite:""},{cid:"374",id:"4148947",companyname:"波兰小包(Poczta Polska)",shortname:"波兰",tel:"801 333 444",url:"emonitoring",code:"emonitoring",hasvali:0,comurl:"http://www.poczta-polska.pl/",isavailable:"0",promptinfo:"",testnu:"CP177122241PL",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"375",id:"4148955",companyname:"阿尔巴尼亚(Posta shqipatre)",shortname:"阿尔巴尼亚",tel:"",url:"albania",code:"albania",hasvali:0,comurl:"http://www.postashqiptare.al/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.postashqiptare.al/",serversite:""},{cid:"376",id:"4148964",companyname:"阿鲁巴[荷兰]（Post Aruba）",shortname:"阿鲁巴[荷兰]",tel:"+297 528-7637 ",url:"aruba",code:"aruba",hasvali:0,comurl:"http://www.postaruba.com",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"+297 528-7637 ",queryurl:"http://www.postaruba.com",serversite:""},{cid:"377",id:"4148980",companyname:"埃及（Egypt Post）",shortname:"埃及",tel:"23910011",url:"egypt",code:"egypt",hasvali:0,comurl:"http://www.egyptpost.org/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.egyptpost.org/",serversite:""},{cid:"378",id:"4148988",companyname:"爱尔兰(An Post)",shortname:"爱尔兰",tel:"+353 1850 57 58 59",url:"ireland",code:"ireland",hasvali:0,comurl:"http://www.anpost.ie/AnPost/",isavailable:"0",promptinfo:"",testnu:"EF718226834IE",freg:"",freginfo:"",telcomplaintnum:"+353 1850 57 58 59",queryurl:"http://www.anpost.ie/AnPost/",serversite:""},{cid:"379",id:"4148995",companyname:"爱沙尼亚(Eesti Post)",shortname:"爱沙尼亚",tel:"",url:"omniva",code:"omniva",hasvali:0,comurl:"https://www.omniva.ee/",isavailable:"0",promptinfo:"",testnu:"RR142519770EE",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.omniva.ee/",serversite:""},{cid:"380",id:"4149088",companyname:"云豹国际货运",shortname:"云豹国际货运",tel:"",url:"leopard",code:"leopard",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"75500152137",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"381",id:"4149097",companyname:"中外运空运",shortname:"中外运空运",tel:"",url:"sinoairinex",code:"sinoairinex",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"382",id:"4149106",companyname:"上海昊宏国际货物",shortname:"上海昊宏国际货物",tel:"",url:"hyk",code:"hyk",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"383",id:"4149117",companyname:"城晓国际快递",shortname:"城晓国际快递",tel:"",url:"ckeex",code:"ckeex",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"384",id:"4173404",companyname:"匈牙利（Magyar Posta）",shortname:"匈牙利",tel:"+36 1 421 7296 Search",url:"hungary",code:"hungary",hasvali:0,comurl:"http://posta.hu/international",isavailable:"0",promptinfo:"",testnu:"RR280019352HU",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"385",id:"4173429",companyname:"澳门(Macau Post)",shortname:"澳门",tel:"",url:"macao",code:"macao",hasvali:0,comurl:"http://www.macaupost.gov.mo/",isavailable:"0",promptinfo:"",testnu:"RR120606485MO",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.macaupost.gov.mo/",serversite:""},{cid:"386",id:"4194642",companyname:"台湾（中华邮政）",shortname:"台湾",tel:"",url:"postserv",code:"postserv",hasvali:0,comurl:"http://postserv.post.gov.tw",isavailable:"0",promptinfo:"",testnu:"RA606121105TW",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://postserv.post.gov.tw",serversite:""},{cid:"387",id:"4194657",companyname:"北京EMS",shortname:"北京EMS",tel:"010-8417 9386",url:"bjemstckj",code:"bjemstckj",hasvali:0,comurl:"http://www.bj-cnpl.com/webpage/contactus.asp",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"010-8417 9386",queryurl:"http://www.bj-cnpl.com/webpage/contactus.asp",serversite:""},{cid:"388",id:"4194695",companyname:"快淘快递",shortname:"快淘快递",tel:"400-770-3370",url:"kuaitao",code:"kuaitao",hasvali:0,comurl:"http://www.4007703370.com/",isavailable:"0",promptinfo:"",testnu:"8080007464965",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"389",id:"4194702",companyname:"秘鲁(SERPOST)",shortname:"秘鲁",tel:"511-500",url:"peru",code:"peru",hasvali:0,comurl:"http://www.serpost.com.pe/",isavailable:"0",promptinfo:"",testnu:"RR809298583PE",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.serpost.com.pe/",serversite:""},{cid:"390",id:"4194706",companyname:"印度尼西亚EMS(Pos Indonesia-EMS)",shortname:"印度尼西亚EMS",tel:"+62 21 161",url:"indonesia",code:"indonesia",hasvali:0,comurl:"http://ems.posindonesia.co.id/",isavailable:"0",promptinfo:"",testnu:"RR023946256ID",freg:"",freginfo:"",telcomplaintnum:"+62 21 161",queryurl:"http://ems.posindonesia.co.id/",serversite:""},{cid:"391",id:"4194709",companyname:"哈萨克斯坦(Kazpost)",shortname:"哈萨克斯坦",tel:"8 800 080 08 80",url:"kazpost",code:"kazpost",hasvali:0,comurl:"http://www.kazpost.kz/en/",isavailable:"0",promptinfo:"",testnu:"LN125251682US",freg:"",freginfo:"",telcomplaintnum:"8 800 080 08 80",queryurl:"http://www.kazpost.kz/en/",serversite:""},{cid:"392",id:"4249161",companyname:"立白宝凯物流",shortname:"立白宝凯物流",tel:"020-81258022",url:"lbbk",code:"lbbk",hasvali:0,comurl:"http://bkls.liby.com.cn/",isavailable:"0",promptinfo:"",testnu:"20141022902",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://bkls.liby.com.cn/",serversite:""},{cid:"393",id:"4297981",companyname:"百千诚物流",shortname:"百千诚物流",tel:"0755-2222 2232",url:"bqcwl",code:"bqcwl",hasvali:0,comurl:"WWW.1001000.COM",isavailable:"0",promptinfo:"",testnu:"12345678",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"394",id:"4301342",companyname:"皇家物流",shortname:"皇家物流",tel:"0755-29801942",url:"pfcexpress",code:"pfcexpress",hasvali:0,comurl:"http://www.pfcexpress.com/",isavailable:"0",promptinfo:"",testnu:"6661078367333",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"395",id:"4321222",companyname:"法国(La Poste)",shortname:"法国(小包)",tel:"+33 3631",url:"csuivi",code:"csuivi",hasvali:0,comurl:"http://www.colissimo.fr",isavailable:"0",promptinfo:"",testnu:"LA003738926FR",freg:"",freginfo:"",telcomplaintnum:"+33 3631",queryurl:"http://www.colissimo.fr",serversite:""},{cid:"396",id:"4360715",companyname:"奥地利(Austrian Post)",shortname:"奥地利",tel:"+43 810 010 100",url:"austria",code:"austria",hasvali:0,comurl:"http://www.post.at",isavailable:"0",promptinfo:"",testnu:"CG102697953AT",freg:"",freginfo:"",telcomplaintnum:"0810-010-100",queryurl:"http://www.post.at",serversite:""},{cid:"397",id:"4360719",companyname:"乌克兰小包、大包(UkrPoshta)",shortname:"乌克兰(小包,大包)",tel:"+380 (0) 800-500-440",url:"ukraine",code:"ukraine",hasvali:0,comurl:"http://www.ukrposhta.com/www/upost_en.nsf",isavailable:"0",promptinfo:"",testnu:"RB610689498UA",freg:"",freginfo:"",telcomplaintnum:"+380 (0) 800-500-440",queryurl:"http://www.ukrposhta.com/www/upost_en.nsf",serversite:""},{cid:"398",id:"4360722",companyname:"乌干达(Posta Uganda)",shortname:"乌干达",tel:"",url:"uganda",code:"uganda",hasvali:0,comurl:"http://www.ugapost.co.ug/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ugapost.co.ug/",serversite:""},{cid:"399",id:"4360725",companyname:"阿塞拜疆EMS(EMS AzerExpressPost)",shortname:"阿塞拜疆",tel:"",url:"azerbaijan",code:"azerbaijan",hasvali:0,comurl:"http://www.azems.az/en",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.azems.az/en",serversite:""},{cid:"400",id:"4360727",companyname:"芬兰(Itella Posti Oy)",shortname:"芬兰",tel:"+358 200 71000",url:"finland",code:"finland",hasvali:0,comurl:"http://www.posti.fi/english/",isavailable:"0",promptinfo:"",testnu:"CE052141220FI",freg:"",freginfo:"",telcomplaintnum:"+358 200 71000",queryurl:"http://www.posti.fi/english/",serversite:""},{cid:"401",id:"4360729",companyname:"斯洛伐克(Slovenská Posta)",shortname:"斯洛伐克",tel:"(+421) 48 437 87 77",url:"slovak",code:"slovak",hasvali:0,comurl:"http://www.posta.sk/en",isavailable:"0",promptinfo:"",testnu:"(+421) 48 437 87 77",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.posta.sk/en",serversite:""},{cid:"402",id:"4364376",companyname:"埃塞俄比亚(Ethiopian postal)",shortname:"埃塞俄比亚",tel:"",url:"ethiopia",code:"ethiopia",hasvali:0,comurl:"http://www.ethiopostal.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ethiopostal.com/",serversite:""},{cid:"403",id:"4364378",companyname:"卢森堡(Luxembourg Post)",shortname:"卢森堡",tel:"8002 8004 ",url:"luxembourg",code:"luxembourg",hasvali:0,comurl:"http://www.post.lu/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"8002 8004 ",queryurl:"http://www.post.lu/",serversite:""},{cid:"404",id:"4364381",companyname:"毛里求斯(Mauritius Post)",shortname:"毛里求斯",tel:"208 2851",url:"mauritius",code:"mauritius",hasvali:0,comurl:"http://www.mauritiuspost.mu/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"208 2851",queryurl:"http://www.mauritiuspost.mu/",serversite:""},{cid:"405",id:"4364382",companyname:"文莱(Brunei Postal)",shortname:"文莱",tel:"673-2382888 ",url:"brunei",code:"brunei",hasvali:0,comurl:"http://www.post.gov.bn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"673-2382888 ",queryurl:"http://www.post.gov.bn/",serversite:""},{cid:"406",id:"4374487",companyname:"Quantium",shortname:"Quantium",tel:"",url:"quantium",code:"quantium",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"QS2022049439NZ",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"407",id:"4423947",companyname:"坦桑尼亚(Tanzania Posts)",shortname:"坦桑尼亚",tel:"",url:"tanzania",code:"tanzania",hasvali:0,comurl:"http://www.posta.co.tz",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.posta.co.tz/",serversite:""},{cid:"408",id:"4423949",companyname:"阿曼(Oman Post)",shortname:"阿曼",tel:"24769925",url:"oman",code:"oman",hasvali:0,comurl:"http://www.omanpost.om",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.omanpost.om/tabid/93/Default.aspx",serversite:""},{cid:"409",id:"4423950",companyname:"直布罗陀[英国]( Royal Gibraltar Post)",shortname:"直布罗陀[英国]",tel:"",url:"gibraltar",code:"gibraltar",hasvali:0,comurl:"http://www.post.gi/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.post.gi/products-and-services/track-and-trace/track-trace-results/",serversite:""},{cid:"410",id:"4423953",companyname:"博源恒通",shortname:"博源恒通",tel:"15834177000",url:"byht",code:"byht",hasvali:0,comurl:"http://www.56soft.com",isavailable:"0",promptinfo:"",testnu:"BT0000457415",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"411",id:"4423956",companyname:"越南EMS(VNPost Express)",shortname:"越南EMS",tel:"",url:"vnpost",code:"vnpost",hasvali:0,comurl:"http://www.ems.com.vn/default.aspx",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ems.com.vn/default.aspx",serversite:""},{cid:"412",id:"4423958",companyname:"安迅物流",shortname:"安迅物流",tel:"010-59288730",url:"anxl",code:"anxl",hasvali:0,comurl:"http://www.anxl.com.cn/",isavailable:"0",promptinfo:"",testnu:"515082851025234801",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.anxl.com.cn/",serversite:""},{cid:"413",id:"4423959",companyname:"达方物流",shortname:"达方物流",tel:"400 700 7049",url:"dfpost",code:"dfpost",hasvali:0,comurl:"http://www.dfpost.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"400 700 7049",queryurl:"http://www.dfpost.com/",serversite:""},{cid:"414",id:"4432672",companyname:"兰州伙伴物流",shortname:"兰州伙伴物流",tel:"0931-5345730/32",url:"huoban",code:"huoban",hasvali:0,comurl:"http://www.lzhbwl.com/",isavailable:"0",promptinfo:"",testnu:"JR1400027018",freg:"",freginfo:"",telcomplaintnum:"0931-5345730/32",queryurl:"http://www.lzhbwl.com/",serversite:""},{cid:"415",id:"4432674",companyname:"天纵物流",shortname:"天纵物流",tel:"400-990-8816",url:"tianzong",code:"tianzong",hasvali:0,comurl:"http://www.tianzong56.cn/",isavailable:"0",promptinfo:"",testnu:"300000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"416",id:"4433497",companyname:"波黑(JP BH Posta)",shortname:"波黑",tel:"",url:"bohei",code:"bohei",hasvali:0,comurl:"http://www.posta.ba/pocetna/2/0/0.html",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.posta.ba/pocetna/2/0/0.html",serversite:""},{cid:"417",id:"4433500",companyname:"玻利维亚",shortname:"玻利维亚",tel:"",url:"bolivia",code:"bolivia",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"418",id:"4433501",companyname:"柬埔寨(Cambodia Post)",shortname:"柬埔寨",tel:"",url:"cambodia",code:"cambodia",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"419",id:"4436254",companyname:"巴林(Bahrain Post)",shortname:"巴林",tel:"",url:"bahrain",code:"bahrain",hasvali:0,comurl:"http://mot.gov.bh/en",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://mot.gov.bh/en",serversite:""},{cid:"420",id:"4436257",companyname:"纳米比亚(NamPost)",shortname:"纳米比亚",tel:"+264 61 201 3042",url:"namibia",code:"namibia",hasvali:0,comurl:"https://www.nampost.com.na/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.nampost.com.na/",serversite:""},{cid:"421",id:"4436260",companyname:"卢旺达(Rwanda i-posita)",shortname:"卢旺达",tel:"",url:"rwanda",code:"rwanda",hasvali:0,comurl:"http://i-posita.rw/spip.php?article97",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://i-posita.rw/spip.php?article97",serversite:""},{cid:"422",id:"4436261",companyname:"莱索托(Lesotho Post)",shortname:"莱索托",tel:"",url:"lesotho",code:"lesotho",hasvali:0,comurl:"http://lesothopost.org.ls/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://lesothopost.org.ls/",serversite:""},{cid:"423",id:"4436262",companyname:"肯尼亚(POSTA KENYA)",shortname:"肯尼亚",tel:"",url:"kenya",code:"kenya",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"424",id:"4436266",companyname:"喀麦隆(CAMPOST)",shortname:"喀麦隆",tel:"",url:"cameroon",code:"cameroon",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"425",id:"4436268",companyname:"伯利兹(Belize Postal)",shortname:"伯利兹",tel:"",url:"belize",code:"belize",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"426",id:"4436273",companyname:"巴拉圭(Correo Paraguayo)",shortname:"巴拉圭",tel:"",url:"paraguay",code:"paraguay",hasvali:0,comurl:"http://www.correoparaguayo.gov.py/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.correoparaguayo.gov.py/",serversite:""},{cid:"427",id:"4547765",companyname:"十方通物流",shortname:"十方通物流",tel:"",url:"sfift",code:"sfift",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"1300032142",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"428",id:"4547768",companyname:"飞鹰物流",shortname:"飞鹰物流",tel:"400-6291-666",url:"hnfy",code:"hnfy",hasvali:0,comurl:"http://www.hnfy56.com/",isavailable:"0",promptinfo:"",testnu:"515000056942",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"429",id:"4547770",companyname:"UPS i-parcel",shortname:"UPS i-parcel",tel:"400-078-1183",url:"iparcel",code:"iparcel",hasvali:0,comurl:"http://www.i-parcel.com/en/",isavailable:"0",promptinfo:"",testnu:"AGSEWR40000920304",freg:"",freginfo:"",telcomplaintnum:"400-078-1183",queryurl:"http://www.i-parcel.com/en/",serversite:""},{cid:"430",id:"4547771",companyname:"鑫锐达",shortname:"鑫锐达",tel:"",url:"bjxsrd",code:"bjxsrd",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"090402173868",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"431",id:"4792731",companyname:"麦力快递",shortname:"麦力快递",tel:"400-0000-900",url:"mailikuaidi",code:"mailikuaidi",hasvali:0,comurl:"http://www.mailikuaidi.com/",isavailable:"0",promptinfo:"",testnu:"808003139075",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"339",id:"4792742",companyname:"瑞丰速递",shortname:"瑞丰速递",tel:"400-063-9000",url:"rfsd",code:"rfsd",hasvali:0,comurl:"http://www.rfsd88.com/",isavailable:"0",promptinfo:"",testnu:"8803441415",freg:"",freginfo:"",telcomplaintnum:"400-063-9000",queryurl:"",serversite:""},{cid:"432",id:"4792761",companyname:"美联快递",shortname:"美联快递",tel:"",url:"letseml",code:"letseml",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"ML150909061US",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"433",id:"4792765",companyname:"CNPEX中邮快递",shortname:"CNPEX中邮快递",tel:"",url:"cnpex",code:"cnpex",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"660001535854",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"434",id:"4792770",companyname:"鑫世锐达",shortname:"鑫世锐达",tel:"",url:"xsrd",code:"xsrd",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"435",id:"4843422",companyname:"同舟行物流",shortname:"同舟行物流",tel:"18062512813/18062699168",url:"chinatzx",code:"chinatzx",hasvali:0,comurl:"http://www.chinatzx.com/",isavailable:"0",promptinfo:"",testnu:"20015009",freg:"",freginfo:"",telcomplaintnum:"18062699168",queryurl:"",serversite:""},{cid:"436",id:"4843427",companyname:"秦邦快运",shortname:"秦邦快运",tel:"",url:"qbexpress",code:"qbexpress",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"029202212553",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"437",id:"4843429",companyname:"大达物流",shortname:"大达物流",tel:"400-098-5656",url:"idada",code:"idada",hasvali:0,comurl:"http://www.idada56.com/",isavailable:"0",promptinfo:"",testnu:"03698745",freg:"",freginfo:"",telcomplaintnum:"400-098-5656",queryurl:"http://www.idada56.com/",serversite:""},{cid:"438",id:"4889682",companyname:"skynet",shortname:"skynet",tel:"",url:"skynet",code:"skynet",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"439",id:"4969742",companyname:"红马速递",shortname:"红马速递",tel:"",url:"nedahm",code:"nedahm",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"880000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"440",id:"4969746",companyname:"云南中诚",shortname:"云南中诚",tel:"",url:"czwlyn",code:"czwlyn",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"1511060138579",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"441",id:"4969748",companyname:"万博快递",shortname:"万博快递",tel:"",url:"wanboex",code:"wanboex",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"1508181283202",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"442",id:"4969749",companyname:"腾达速递",shortname:"腾达速递",tel:"",url:"nntengda",code:"nntengda",hasvali:0,comurl:"http://www.nntengda.com",isavailable:"0",promptinfo:"",testnu:"33121263517",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"443",id:"4969751",companyname:"郑州速捷",shortname:"郑州速捷",tel:"",url:"sujievip",code:"sujievip",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"515111311542051501",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"444",id:"4994443",companyname:"UBI Australia",shortname:"UBI Australia",tel:"",url:"gotoubi",code:"gotoubi",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"445",id:"4999566",companyname:"ECMS Express",shortname:"ecmsglobal",tel:"",url:"ecmsglobal",code:"ecmsglobal",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"APELAX1040329689",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"446",id:"5146014",companyname:"速派快递(FastGo)",shortname:"FastGo",tel:"400 886 3278 ",url:"fastgo",code:"fastgo",hasvali:0,comurl:"http://www.fastgo.com.au",isavailable:"0",promptinfo:"",testnu:"AC022150 ",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.fastgo.com.au",serversite:""},{cid:"447",id:"5239760",companyname:"易客满",shortname:"易客满",tel:"86+(400) 086-1756",url:"ecmscn",code:"ecmscn",hasvali:0,comurl:"http://www.trans4e.com/cn/index.html",isavailable:"0",promptinfo:"",testnu:"APECHI1210107905",freg:"",freginfo:"",telcomplaintnum:"86+(400) 086-1756",queryurl:"http://www.trans4e.com/cn/index.html",serversite:""},{cid:"448",id:"5240945",companyname:"俄顺达",shortname:"俄顺达",tel:"0592-5798079",url:"eshunda",code:"eshunda",hasvali:0,comurl:"http://www.007ex.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"0592-5798079",queryurl:"http://www.007ex.com/",serversite:""},{cid:"449",id:"5240960",companyname:"速腾物流",shortname:"速腾物流",tel:"4001136666",url:"suteng",code:"suteng",hasvali:0,comurl:"http://www.ste56.com",isavailable:"0",promptinfo:"",testnu:"9809903615",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ste56.com",serversite:""},{cid:"450",id:"5240969",companyname:"新鹏快递",shortname:"新鹏快递",tel:"",url:"gdxp",code:"gdxp",hasvali:null,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"451",id:"5468864",companyname:"美国韵达",shortname:"美国韵达",tel:"888-408-3332",url:"yundaexus",code:"yundaexus",hasvali:0,comurl:"http://www.yundaex.us/",isavailable:"0",promptinfo:"",testnu:"800000620604",freg:"",freginfo:"",telcomplaintnum:"888-408-3332",queryurl:"http://www.yundaex.us/",serversite:""},{cid:"452",id:"5468987",companyname:"Toll",shortname:"Toll",tel:"",url:"toll",code:"toll",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"453",id:"5468995",companyname:"深圳DPEX",shortname:"Toll",tel:"",url:"深圳DPEX",code:"szdpex",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"5491090",companyname:"百世物流",shortname:"百世物流",tel:"400-8856-561",url:"baishiwuliu",code:"baishiwuliu",hasvali:0,comurl:"http://www.800best.com/",isavailable:"0",promptinfo:"",testnu:"10080799842",freg:"",freginfo:"",telcomplaintnum:"400-8856-561",queryurl:"http://www.800best.com/",serversite:""},{cid:"455",id:"5536903",companyname:"荷兰包裹(PostNL International Parcels)",shortname:"荷兰包裹",tel:"34819",url:"postnlpacle",code:"postnlpacle",hasvali:0,comurl:"http://www.postnl.com/",isavailable:"0",promptinfo:"",testnu:"EA038242134NL",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.postnl.com/",serversite:""},{cid:"456",id:"5536914",companyname:"乐天速递",shortname:"乐天速递",tel:"021-62269059 ",url:"ltexp",code:"ltexp",hasvali:0,comurl:"http://www.ltexp.com.cn ",isavailable:"0",promptinfo:"",testnu:"LT1000323844CA",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ltexp.com.cn ",serversite:""},{cid:"457",id:"5549476",companyname:"智通物流",shortname:"智通物流",tel:"4000561818",url:"ztong",code:"ztong",hasvali:0,comurl:"http://www.ztong56.com",isavailable:"0",promptinfo:"",testnu:"560064792696",freg:"",freginfo:"",telcomplaintnum:"4000561818",queryurl:"http://www.ztong56.com",serversite:""},{cid:"458",id:"5610344",companyname:"鑫通宝物流",shortname:"鑫通宝物流",tel:"13834168880",url:"xtb",code:"xtb",hasvali:0,comurl:"www.xtb56.com",isavailable:"0",promptinfo:"",testnu:"TB0000053304",freg:"",freginfo:"",telcomplaintnum:"13834168880",queryurl:"www.xtb56.com",serversite:""},{cid:"459",id:"5690110",companyname:"airpak expresss",shortname:"airpak expresss",tel:"",url:"airpak",code:"airpak",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"460",id:"5690118",companyname:"荷兰邮政-中国件",shortname:"荷兰邮政-中国件",tel:"34819",url:"postnlchina",code:"postnlchina",hasvali:0,comurl:"http://www.postnl.com/",isavailable:"0",promptinfo:"",testnu:"3STJJG9037471",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.postnl.com/",serversite:""},{cid:"461",id:"5759725",companyname:"法国小包（colissimo）",shortname:"colissimo",tel:"+33 3631",url:"colissimo",code:"colissimo",hasvali:0,comurl:"http://www.colissimo.fr",isavailable:"0",promptinfo:"",testnu:"EY079906788FR",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.colissimo.fr",serversite:""},{cid:"462",id:"5760338",companyname:"PCA Express",shortname:"PCA Express",tel:"",url:"pcaexpress",code:"pcaexpress",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"EAU148011966",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"463",id:"5760369",companyname:"韩润",shortname:"韩润",tel:"400-636-4311",url:"hanrun",code:"hanrun",hasvali:0,comurl:"http://www.hr-sz.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"39",id:"5764964",companyname:"TNT",shortname:"TNT",tel:"800-820-9868",url:"tnt",code:"tnt",hasvali:0,comurl:"http://www.tnt.com.cn",isavailable:"0",promptinfo:"",testnu:"278059110",freg:"^[A-Za-z0-9]{9,20}$",freginfo:"TNT快递货运单上的由9位数字组成的或者省份的首字母+9位数字+WW组成",telcomplaintnum:"800-820-9868",queryurl:"",serversite:"http://www.tnt.com/express/zh_cn/site/home/about_us/0.html"},{cid:"464",id:"5811418",companyname:"中远e环球",shortname:"中远e环球",tel:"",url:"cosco",code:"cosco",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"465",id:"5811424",companyname:"顺达快递",shortname:"顺达快递",tel:"",url:"sundarexpress",code:"sundarexpress",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"466",id:"5811427",companyname:"捷记方舟",shortname:"捷记方舟",tel:"",url:"ajexpress",code:"ajexpress",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"AJ613297AU",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"467",id:"5811430",companyname:"方舟速递",shortname:"方舟速递",tel:"",url:"arkexpress",code:"arkexpress",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"468",id:"5811432",companyname:"明大快递",shortname:"明大快递",tel:"",url:"adaexpress",code:"adaexpress",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"469",id:"5811433",companyname:"长江国际速递",shortname:"长江国际速递",tel:"",url:"changjiang",code:"changjiang",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"CJ000289942CN",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"470",id:"5817124",companyname:"八达通",shortname:"八达通",tel:"",url:"bdatong",code:"bdatong",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"R800311511070035",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"471",id:"5817126",companyname:"美国申通",shortname:"美国申通",tel:"",url:"stoexpress",code:"stoexpress",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"472",id:"5819733",companyname:"泛捷国际速递",shortname:"泛捷国际速递",tel:"",url:"epanex",code:"epanex",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"473",id:"5869052",companyname:"顺捷丰达",shortname:"顺捷丰达",tel:"0755—88999000",url:"shunjiefengda",code:"shunjiefengda",hasvali:0,comurl:"http://www.sjfd-express.com",isavailable:"0",promptinfo:"",testnu:"11535619547637",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.sjfd-express.com",serversite:""},{cid:"474",id:"5873264",companyname:"华赫物流",shortname:"华赫物流",tel:"",url:"nmhuahe",code:"nmhuahe",hasvali:0,comurl:"http://nmhuahe.com",isavailable:"0",promptinfo:"",testnu:"3401884523",freg:"",freginfo:"",telcomplaintnum:"0471-2534162  ",queryurl:"http://nmhuahe.com",serversite:""},{cid:"475",id:"6027634",companyname:"德国(Deutsche Post)",shortname:"德国(Deutsche Post)",tel:"0180 2 3333*",url:"deutschepost",code:"deutschepost",hasvali:0,comurl:"http://www.dpdhl.com/en.html",isavailable:"0",promptinfo:"",testnu:"EA037148565NL",freg:"",freginfo:"",telcomplaintnum:"0180 2 3333*",queryurl:"http://www.dpdhl.com/en.html",serversite:""},{cid:"476",id:"6048728",companyname:"百腾物流",shortname:"百腾物流",tel:"400-9989-256",url:"baitengwuliu",code:"baitengwuliu",hasvali:0,comurl:"http://www.beteng.com",isavailable:"0",promptinfo:"",testnu:"0004287478",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.beteng.com",serversite:""},{cid:"477",id:"6083537",companyname:"品骏快递",shortname:"品骏快递",tel:"400-9789-888",url:"pjbest",code:"pjbest",hasvali:0,comurl:"http://www.pjbest.com/",isavailable:"0",promptinfo:"",testnu:"15111344414116",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"478",id:"6158171",companyname:"全速通",shortname:"全速通",tel:"",url:"quansutong",code:"quansutong",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"479",id:"6177194",companyname:"中技物流",shortname:"中技物流",tel:"",url:"zhongjiwuliu",code:"zhongjiwuliu",hasvali:null,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"480",id:"6179713",companyname:"九曳供应链",shortname:"九曳供应链",tel:"4006-199-939",url:"jiuyescm",code:"jiuyescm",hasvali:0,comurl:"http://jiuyescm.com",isavailable:"0",promptinfo:"",testnu:"JY00082167",freg:"",freginfo:"",telcomplaintnum:"4006-199-939",queryurl:"http://jiuyescm.com",serversite:""},{cid:"481",id:"6205187",companyname:"天翼快递",shortname:"天翼快递",tel:"",url:"tykd",code:"tykd",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"482",id:"6205195",companyname:"德意思",shortname:"德意思",tel:"",url:"dabei",code:"dabei",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"483",id:"6279371",companyname:"城际快递",shortname:"城际快递",tel:"",url:"chengji",code:"chengji",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"484",id:"6281132",companyname:"程光快递",shortname:"程光快递",tel:"",url:"chengguangkuaidi",code:"chengguangkuaidi",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://127.0.0.1:9202/trackinfo/chengguangkuaidi",serversite:""},{cid:"485",id:"6281305",companyname:"佐川急便",shortname:"佐川急便",tel:"",url:"sagawa",code:"sagawa",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"486",id:"6281339",companyname:"蓝天快递",shortname:"蓝天快递",tel:"",url:"lantiankuaidi",code:"lantiankuaidi",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"487",id:"6281340",companyname:"永昌物流",shortname:"永昌物流",tel:"",url:"yongchangwuliu",code:"yongchangwuliu",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"488",id:"6281341",companyname:"笨鸟海淘",shortname:"笨鸟海淘",tel:"4008-890-788",url:"birdex",code:"birdex",hasvali:0,comurl:"http://birdex.cn/",isavailable:"0",promptinfo:"",testnu:"BH1511163890",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"489",id:"6281342",companyname:"一正达速运",shortname:"一正达速运",tel:"",url:"yizhengdasuyun",code:"yizhengdasuyun",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"490",id:"6337156",companyname:"京东订单",shortname:"京东订单",tel:"400-606-5500",url:"jdorder",code:"jdorder",hasvali:0,comurl:"http://m.jd.com",isavailable:"0",promptinfo:"",testnu:"11182464323",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"491",id:"6338318",companyname:"优配速运",shortname:"优配速运",tel:"0531 89977777",url:"sdyoupei",code:"sdyoupei",hasvali:0,comurl:"www.sdyoupei.com",isavailable:"0",promptinfo:"",testnu:"JX13797337",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"www.sdyoupei.com",serversite:""},{cid:"492",id:"6389499",companyname:"TRAKPAK",shortname:"TRAKPAK",tel:"",url:"trakpak",code:"trakpak",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"493",id:"6389500",companyname:"GTS快递",shortname:"GTS",tel:"4000-159-111",url:"gts",code:"gts",hasvali:0,comurl:"http://www.gto315.com",isavailable:"0",promptinfo:"",testnu:"1000089385",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"494",id:"6389501",companyname:"AOL澳通速递",shortname:"AOL澳通速递",tel:"0424047888",url:"aolau",code:"aolau",hasvali:0,comurl:"http://www.aol-au.com/",isavailable:"0",promptinfo:"",testnu:"AT150271152SD",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"495",id:"6452710",companyname:"宜送物流",shortname:"宜送物流",tel:"4008636658",url:"yiex",code:"yiex",hasvali:0,comurl:"http://www.yi-express.com",isavailable:"0",promptinfo:"",testnu:"1531619551",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"496",id:"6458964",companyname:"通达兴物流",shortname:"通达兴物流",tel:"4001-006-609",url:"tongdaxing",code:"tongdaxing",hasvali:0,comurl:"http://www.tongdaxing.com/",isavailable:"0",promptinfo:"",testnu:"200100002541",freg:"",freginfo:"",telcomplaintnum:"4001-006-609",queryurl:"",serversite:""},{cid:"497",id:"6488777",companyname:"香港(HongKong Post)英文",shortname:"香港(HongKong Post)英文",tel:"",url:"hkposten",code:"hkposten",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"RC228951871HK ",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"498",id:"6505056",companyname:"苏宁订单",shortname:"苏宁订单",tel:"4008-365-365",url:"suningorder",code:"suningorder",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"1025331562-0",freg:"",freginfo:"",telcomplaintnum:"4008-365-365",queryurl:"",serversite:""},{cid:"499",id:"6510590",companyname:"飞力士物流",shortname:"飞力士物流",tel:"86-755-83448000",url:"flysman",code:"flysman",hasvali:0,comurl:"http://www.flysman.com.cn",isavailable:"0",promptinfo:"",testnu:"1000159522",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"500",id:"6526029",companyname:"转运四方",shortname:"转运四方",tel:"",url:"zhuanyunsifang",code:"zhuanyunsifang",hasvali:0,comurl:"http://www.transrush.com/",isavailable:"0",promptinfo:"",testnu:"DD151017515477",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"501",id:"6534352",companyname:"logen路坚",shortname:"logen路坚",tel:"",url:"ilogen",code:"ilogen",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"6565867",companyname:"成都东骏物流",shortname:"成都东骏物流",tel:"028-85538888",url:"dongjun",code:"dongjun",hasvali:0,comurl:"http://www.dj56.cc/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"028-85887608",queryurl:"http://www.dj56.cc/",serversite:""},{cid:"503",id:"6565868",companyname:"日本郵便",shortname:"日本郵便",tel:"",url:"japanpost",code:"japanpost",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"EL030197536JP",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"504",id:"6656471",companyname:"佳家通货运",shortname:"佳家通货运",tel:"4008-056-356",url:"jiajiatong56",code:"jiajiatong56",hasvali:0,comurl:"http://www.jiajiatong56.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.jiajiatong56.com/",serversite:""},{cid:"505",id:"6656472",companyname:"吉日优派",shortname:"吉日优派",tel:"400-0531-951",url:"jrypex",code:"jrypex",hasvali:0,comurl:"http://www.jrypex.com",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"159-6531-6532",queryurl:"http://www.jrypex.com",serversite:""},{cid:"506",id:"6656473",companyname:"西安胜峰",shortname:"西安胜峰",tel:"400-029-8171",url:"xaetc",code:"xaetc",hasvali:0,comurl:"http://www.xaetc.cn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"029-68738585",queryurl:"http://www.xaetc.cn/",serversite:""},{cid:"507",id:"6687463",companyname:"CJ物流",shortname:"CJ物流",tel:"",url:"doortodoor",code:"doortodoor",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"508",id:"6697009",companyname:"信天捷快递",shortname:"信天捷快递",tel:"400-718-7518",url:"xintianjie",code:"xintianjie",hasvali:0,comurl:"http:/www.bjxintianjie.com",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"400-718-7518",queryurl:"http:/www.bjxintianjie.com",serversite:""},{cid:"509",id:"6697010",companyname:"泰国138国际物流",shortname:"泰国138国际物流",tel:"66880089916 ",url:"sd138",code:"sd138",hasvali:0,comurl:"http://www.138sd.net/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"66961799756",queryurl:"http://www.138sd.net/",serversite:""},{cid:"510",id:"6697011",companyname:"猴急送",shortname:"猴急送",tel:"400-8888-798",url:"hjs",code:"hjs",hasvali:0,comurl:"http://www.hjs777.com",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"0731-55573559",queryurl:"http://www.hjs777.com",serversite:""},{cid:"511",id:"6697012",companyname:"全信通快递",shortname:"全信通快递",tel:"400-882-6886",url:"quanxintong",code:"quanxintong",hasvali:0,comurl:"http://www.all-express.com.cn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"400-882-6886",queryurl:"http://www.all-express.com.cn/",serversite:""},{cid:"512",id:"6701507",companyname:"amazon-国际订单",shortname:"amazon-国际订单",tel:"400-910-5668 ",url:"amusorder",code:"amusorder",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"400-910-5668 ",queryurl:"",serversite:""},{cid:"513",id:"6730874",companyname:"骏丰国际速递",shortname:"骏丰国际速递",tel:"0773-2218104",url:"junfengguoji",code:"junfengguoji",hasvali:0,comurl:"http://www.peakmorepost.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"0773-2218104",queryurl:"http://www.peakmorepost.com/",serversite:""},{cid:"514",id:"6752220",companyname:"货运皇",shortname:"货运皇",tel:"",url:"kingfreight",code:"kingfreight",hasvali:0,comurl:"http://www.kingfreight.com.au/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.kingfreight.com.au/ ",serversite:""},{cid:"515",id:"6781447",companyname:"远成快运",shortname:"远成快运",tel:"",url:"ycexpress",code:"ycexpress",hasvali:0,comurl:"http://www.ycgky.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ycgky.com/",serversite:""},{cid:"516",id:"6796744",companyname:"速必达",shortname:"速必达",tel:"0752-3270594",url:"subida",code:"subida",hasvali:0,comurl:"http://www.speedex.com.cn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"0752-3262604",queryurl:"http://www.speedex.com.cn/",serversite:""},{cid:"517",id:"6823113",companyname:"特急便物流",shortname:"特急便物流",tel:"",url:"sucmj",code:"sucmj",hasvali:0,comurl:"http://www.sucmj.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.sucmj.com/ ",serversite:""},{cid:"518",id:"6829573",companyname:"亚马逊中国",shortname:"亚马逊中国",tel:"400-910-5669",url:"yamaxunwuliu",code:"yamaxunwuliu",hasvali:0,comurl:"http://www.z-exp.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.z-exp.com/",serversite:""},{cid:"519",id:"6866441",companyname:"锦程物流",shortname:"锦程物流",tel:"400-020-5556",url:"jinchengwuliu",code:"jinchengwuliu",hasvali:0,comurl:"http://www.jc56.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.jc56.com/",serversite:"http://www.jc56.com/GlobalNetwork.html"},{cid:"520",id:"6887562",companyname:"景光物流",shortname:"景光物流",tel:"400-700-1682 ",url:"jgwl",code:"jgwl",hasvali:0,comurl:"http://www.jgwl.cn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.jgwl.cn/",serversite:""},{cid:"521",id:"6887563",companyname:"御风速运",shortname:"御风速运",tel:"400-611-3348",url:"yufeng",code:"yufeng",hasvali:0,comurl:"http://www.shyfwl.cn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"15237189196",queryurl:"http://www.shyfwl.cn/",serversite:""},{cid:"522",id:"6887564",companyname:"至诚通达快递",shortname:"至诚通达快递",tel:"400-151-8918 ",url:"zhichengtongda",code:"zhichengtongda",hasvali:0,comurl:"http://www.zhichengtongda.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"02029816972 ",queryurl:"http://www.zhichengtongda.com/",serversite:""},{cid:"523",id:"6971343",companyname:"日益通速递",shortname:"日益通速递",tel:"400-041-5858 ",url:"rytsd",code:"rytsd",hasvali:0,comurl:"http://www.rytbj.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.rytbj.com/",serversite:""},{cid:"524",id:"6971344",companyname:"航宇快递",shortname:"航宇快递",tel:"021-54478850",url:"hangyu",code:"hangyu",hasvali:0,comurl:"http://www.hyexp.cn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:" 13122417950",queryurl:"http://www.hyexp.cn/",serversite:""},{cid:"525",id:"6971345",companyname:"急顺通",shortname:"急顺通",tel:"0812-6688669",url:"pzhjst",code:"pzhjst",hasvali:0,comurl:"http://www.pzhjst.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"0812-3358333",queryurl:"http://www.pzhjst.com/",serversite:""},{cid:"526",id:"6971346",companyname:"优速通达",shortname:"优速通达",tel:"400-651-8331",url:"yousutongda",code:"yousutongda",hasvali:0,comurl:"http://www.yousutongda8.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.yousutongda8.com/ ",serversite:""},{cid:"0",id:"6987636",companyname:"秦远物流",shortname:"秦远物流",tel:"09-8372888",url:"qinyuan",code:"qinyuan",hasvali:0,comurl:"http://www.chinz56.co.nz/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.chinz56.co.nz/",serversite:""},{cid:"0",id:"6987637",companyname:"澳邮中国快运",shortname:"澳邮中国快运",tel:"400-622-6193",url:"auexpress",code:"auexpress",hasvali:0,comurl:"http://www.auexpress.com.au/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.auexpress.com.au/",serversite:""},{cid:"529",id:"6987638",companyname:"众辉达物流",shortname:"众辉达物流",tel:"400-622-6193",url:"zhdwl",code:"zhdwl",hasvali:0,comurl:"http://www.zhdpt.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.zhdpt.com/",serversite:""},{cid:"0",id:"7020750",companyname:"飞邦快递",shortname:"飞邦快递",tel:"400-016-8756",url:"fbkd",code:"fbkd",hasvali:0,comurl:"http://www.fbkd.net/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.fbkd.net/",serversite:""},{cid:"0",id:"7020751",companyname:"华达快运",shortname:"华达快运",tel:"400-895-1110",url:"huada",code:"huada",hasvali:0,comurl:"http://www.zz-huada.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.zz-huada.com/",serversite:""},{cid:"0",id:"7027601",companyname:"FOX国际快递",shortname:"FOX国际快递",tel:"400-965-8885",url:"fox",code:"fox",hasvali:0,comurl:"http://www.foxglobal.nl/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"0800 5188",queryurl:"http://www.foxglobal.nl/",serversite:""},{cid:"0",id:"7034870",companyname:"环球速运",shortname:"环球速运",tel:"139-1076-0364",url:"huanqiu",code:"huanqiu",hasvali:0,comurl:"http://www.pantoscn.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.pantoscn.com/",serversite:""},{cid:"0",id:"7034871",companyname:"辉联物流",shortname:"辉联物流",tel:"139-1076-0364",url:"huilian",code:"huilian",hasvali:0,comurl:"http://www.pantoscn.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.pantoscn.com/",serversite:""},{cid:"0",id:"7052894",companyname:"A2U速递",shortname:"A2U速递",tel:"03 9877 4330",url:"a2u",code:"a2u",hasvali:0,comurl:"http://www.a2u.com.au/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7072005",companyname:"UEQ快递",shortname:"UEQ快递",tel:"020-37639835",url:"ueq",code:"ueq",hasvali:0,comurl:"http://www.ueq.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ueq.com/",serversite:""},{cid:"0",id:"7072006",companyname:"中加国际快递",shortname:"中加国际快递",tel:"(604) 207-0338",url:"scic",code:"scic",hasvali:0,comurl:"http://scicglobal.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://scicglobal.com/",serversite:""},{cid:"0",id:"7072007",companyname:"易达通",shortname:"易达通",tel:"",url:"yidatong",code:"yidatong",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:"http://www.qexpress.co.nz/"},{cid:"0",id:"7072008",companyname:"宜送",shortname:"宜送",tel:"",url:"yisong",code:"yisong",hasvali:0,comurl:"http://www.yi-express.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7077095",companyname:"捷网俄全通",shortname:"捷网俄全通",tel:"4007287156",url:"ruexp",code:"ruexp",hasvali:0,comurl:"http://www.ruexp.cn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"13641831939",queryurl:"",serversite:""},{cid:"0",id:"7087099",companyname:"华通务达物流",shortname:"华通务达物流",tel:"0351-5603868",url:"htwd",code:"htwd",hasvali:0,comurl:"http://www.htwd56.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7087100",companyname:"申必达",shortname:"申必达",tel:"713-482-1198",url:"speedoex",code:"speedoex",hasvali:0,comurl:"http://www.speedoex.com/cn",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7087101",companyname:"联运快递",shortname:"联运快递",tel:" (02) 8541 8607 ",url:"lianyun",code:"lianyun",hasvali:0,comurl:"http://121.40.93.72/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7087102",companyname:"捷安达",shortname:"捷安达",tel:"03 9544 8304",url:"jieanda",code:"jieanda",hasvali:0,comurl:"http://www.giantpost.com.au/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7087103",companyname:"SHL畅灵国际物流",shortname:"SHL畅灵国际物流",tel:"400-098-5066",url:"shlexp",code:"shlexp",hasvali:0,comurl:"http://www.shlexp.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7087104",companyname:"EWE全球快递",shortname:"EWE全球快递",tel:"(02) 9644 2648",url:"ewe",code:"ewe",hasvali:0,comurl:"https://www.everfast.com.au/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7095219",companyname:"全球快运",shortname:"全球快运",tel:"626-363-4161",url:"abcglobal",code:"abcglobal",hasvali:0,comurl:"http://www.abcglobalexpress.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7095220",companyname:"芒果速递",shortname:"芒果速递",tel:"",url:"mangguo",code:"mangguo",hasvali:0,comurl:"http://mangoex.cn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7095221",companyname:"金海淘",shortname:"金海淘",tel:"626-330-7733",url:"goldhaitao",code:"goldhaitao",hasvali:0,comurl:"http://www.goldhaitao.us/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7095222",companyname:"极光转运",shortname:"极光转运",tel:"0755-86535662 ",url:"jiguang",code:"jiguang",hasvali:0,comurl:"http://www.jiguangus.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7095223",companyname:"富腾达国际货运",shortname:"富腾达国际货运",tel:"09-4432342",url:"ftd",code:"ftd",hasvali:0,comurl:"http://www.ftdlogistics.co.nz/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7095224",companyname:"DCS",shortname:"DCS",tel:"400-678-0856",url:"dcs",code:"dcs",hasvali:0,comurl:"http://www.dcslogistics.us/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7098838",companyname:"成达国际速递",shortname:"成达国际速递",tel:"00852-56078835 ",url:"chengda",code:"chengda",hasvali:0,comurl:"http://www.chengda-express.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7098839",companyname:"中环快递",shortname:"中环快递",tel:"400-007-9988",url:"zhonghuan",code:"zhonghuan",hasvali:0,comurl:"http://www.zhexpress.com.au/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7098840",companyname:"顺邦国际物流",shortname:"顺邦国际物流",tel:"95040391701",url:"shunbang",code:"shunbang",hasvali:0,comurl:"http://shunbangus.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7098841",companyname:"启辰国际速递",shortname:"启辰国际速递",tel:"",url:"qichen",code:"qichen",hasvali:0,comurl:"http://www.qichen.hk/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7099125",companyname:"澳货通",shortname:"澳货通",tel:"",url:"auex",code:"auex",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7099129",companyname:"澳速物流",shortname:"澳速物流",tel:"",url:"aosu",code:"aosu",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7099131",companyname:"澳世速递",shortname:"澳世速递",tel:"",url:"aus",code:"aus",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7120503",companyname:"当当",shortname:"当当",tel:"",url:"dangdang",code:"dangdang",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7130320",companyname:"天马迅达",shortname:"天马迅达",tel:"",url:"tianma",code:"tianma",hasvali:0,comurl:"http://www.expresstochina.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7133278",companyname:"美龙快递",shortname:"美龙快递",tel:"323-208-9848",url:"mjexp",code:"mjexp",hasvali:0,comurl:"http://www.mjexp.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7137931",companyname:"唯品会(vip)",shortname:"唯品会(vip)",tel:"",url:"vipshop",code:"vipshop",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7140116",companyname:"香港骏辉物流",shortname:"香港骏辉物流",tel:"",url:"chunfai",code:"chunfai",hasvali:0,comurl:"http://www.chunfai.hk/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7140118",companyname:"三三国际物流",shortname:"三三国际物流",tel:"",url:"zenzen",code:"zenzen",hasvali:0,comurl:"http://zenzen.hk/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7159377",companyname:"淼信快递",shortname:"淼信快递",tel:"",url:"mxe56",code:"mxe56",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7159378",companyname:"海派通",shortname:"海派通",tel:"021-54723815",url:"hipito",code:"hipito",hasvali:0,comurl:"http://www.hipito.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.hipito.com/",serversite:""},{cid:"0",id:"7162726",companyname:"国美",shortname:"国美",tel:"",url:"gome",code:"gome",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7164764",companyname:"鹏程快递",shortname:"鹏程快递",tel:"0800-166-188",url:"pengcheng",code:"pengcheng",hasvali:0,comurl:"http://www.pcexpress.co.nz/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7164765",companyname:"冠庭国际物流",shortname:"冠庭国际物流",tel:"00852-2318 1213",url:"guanting",code:"guanting",hasvali:0,comurl:"http://www.quantiumsolutions.com/hk-sc/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7169694",companyname:"1号店",shortname:"1号店",tel:"",url:"yhdshop",code:"yhdshop",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7172420",companyname:"金岸物流",shortname:"金岸物流",tel:"626-818-2750",url:"jinan",code:"jinan",hasvali:0,comurl:"http://www.gpl-express.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7172421",companyname:"海带宝",shortname:"海带宝",tel:"400-825-8585",url:"haidaibao",code:"haidaibao",hasvali:0,comurl:"http://www.haidaibao.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7172422",companyname:"澳通华人物流",shortname:"澳通华人物流",tel:"61 8 9457 9339",url:"cllexpress",code:"cllexpress",hasvali:0,comurl:"http://www.cllexpress.com.au/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7172423",companyname:"斑马物流",shortname:"斑马物流",tel:"",url:"banma",code:"banma",hasvali:0,comurl:"http://www.360zebra.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.360zebra.com/program/tracking.aspx",serversite:""},{cid:"0",id:"7172935",companyname:"友家速递",shortname:"友家速递",tel:"",url:"youjia",code:"youjia",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7177446",companyname:"百通物流",shortname:"百通物流",tel:"",url:"buytong",code:"buytong",hasvali:0,comurl:"http://www.buytong.cn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7177586",companyname:"新元快递",shortname:"新元快递",tel:"",url:"xingyuankuaidi",code:"xingyuankuaidi",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7184090",companyname:"amazon-国内订单",shortname:"amazon-国内订单",tel:"",url:"amcnorder",code:"amcnorder",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7200691",companyname:"全速物流",shortname:"全速物流",tel:"400-679-3883",url:"quansu",code:"quansu",hasvali:0,comurl:"http://www.china-quansu.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.china-quansu.com/",serversite:""},{cid:"0",id:"7200692",companyname:"新杰物流",shortname:"新杰物流",tel:"",url:"sunjex",code:"sunjex",hasvali:0,comurl:"http://www.sunjex.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.sunjex.com/",serversite:""},{cid:"0",id:"7200693",companyname:"鲁通快运",shortname:"鲁通快运",tel:"400-055-5656 ",url:"lutong",code:"lutong",hasvali:0,comurl:"http://www.lutongky.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.lutongky.com/ ",serversite:""},{cid:"0",id:"7220326",companyname:"新元国际",shortname:"新元国际",tel:"",url:"xynyc",code:"xynyc",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.xynyc.com/  ",serversite:""},{cid:"0",id:"7220327",companyname:"小C海淘",shortname:"小C海淘",tel:"",url:"xiaocex",code:"xiaocex",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:"http://www.xiaocex.cn"},{cid:"0",id:"7272925",companyname:"航空快递",shortname:"航空快递",tel:"18640151012 ",url:"airgtc",code:"airgtc",hasvali:0,comurl:"http://air-gtc.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://air-gtc.com/",serversite:""},{cid:"0",id:"7272926",companyname:"叮咚澳洲转运",shortname:"叮咚澳洲转运",tel:"010-57853244",url:"dindon",code:"dindon",hasvali:0,comurl:"http://www.dindonexpress.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.dindonexpress.com/",serversite:""},{cid:"0",id:"7314900",companyname:"环球通达 ",shortname:"环球通达",tel:"400-078-1805 ",url:"hqtd",code:"hqtd",hasvali:0,comurl:"http://www.hqtdkd.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.hqtdkd.com/ ",serversite:""},{cid:"0",id:"7332766",companyname:"小米",shortname:"小米",tel:"",url:"xiaomi",code:"xiaomi",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7341826",companyname:"顺丰优选",shortname:"顺丰优选",tel:"",url:"sfbest",code:"sfbest",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7342316",companyname:"好又快物流",shortname:"好又快物流",tel:"400-800-3838 ",url:"haoyoukuai",code:"haoyoukuai",hasvali:0,comurl:"http://www.ff56.com.cn/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ff56.com.cn/ ",serversite:""},{cid:"0",id:"7377858",companyname:"永旺达快递",shortname:"永旺达快递",tel:"400-0607-290 ",url:"yongwangda",code:"yongwangda",hasvali:0,comurl:"http://www.yongwangda8.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"15361282277 ",queryurl:"http://www.yongwangda8.com/ ",serversite:""},{cid:"0",id:"7377859",companyname:"木春货运",shortname:"木春货运",tel:"400-6359-800 ",url:"mchy",code:"mchy",hasvali:0,comurl:"http://www.mcchina-express.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.mcchina-express.com/ ",serversite:""},{cid:"0",id:"7378182",companyname:"程光快递",shortname:"程光快递",tel:"6499482780 ",url:"flyway",code:"flyway",hasvali:0,comurl:"www.flyway.co.nz ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"6499482781 ",queryurl:"www.flyway.co.nz ",serversite:""},{cid:"0",id:"7384055",companyname:"全之鑫物流",shortname:"全之鑫物流",tel:"400-080-5658",url:"qzx56",code:"qzx56",hasvali:0,comurl:"http://www.qzx56.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:" 0371-56078011",queryurl:"http://www.qzx56.com/",serversite:""},{cid:"0",id:"7393483",companyname:"百事亨通",shortname:"百事亨通",tel:"400-185-6666",url:"bsht",code:"bsht",hasvali:0,comurl:"www.bsht-express.com",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"400-185-6666",queryurl:"www.bsht-express.com",serversite:""},{cid:"0",id:"7441573",companyname:"ILYANG",shortname:"ILYANG",tel:"",url:"ilyang",code:"ilyang",hasvali:0,comurl:"http://www.ilyangexpress.com/ ",isavailable:"0",promptinfo:"",testnu:"1740682860",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ilyangexpress.com/ ",serversite:""},{cid:"0",id:"7441681",companyname:"先锋快递",shortname:"先锋快递",tel:"0311-69046652 ",url:"xianfeng",code:"xianfeng",hasvali:0,comurl:"http://xianfengex.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://xianfengex.com/ ",serversite:""},{cid:"0",id:"7505279",companyname:"万家通快递",shortname:"万家通快递",tel:"",url:"timedg",code:"timedg",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7513752",companyname:"美快国际物流",shortname:"美快国际物流",tel:"020-39141092 ",url:"meiquick",code:"meiquick",hasvali:0,comurl:"http://www.meiquick.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.meiquick.com/ ",serversite:""},{cid:"0",id:"7547255",companyname:"泰中物流",shortname:"泰中物流",tel:"",url:"tny",code:"tny",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""}];e.exports=i},"67da":function(e,t,a){"use strict";var i=a("9cfa"),r=a.n(i);r.a},"8de2":function(e,t,a){"use strict";a.r(t);var i=a("48d6"),r=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);t["default"]=r.a},"9cfa":function(e,t,a){},c9f5:function(e,t,a){"use strict";a("8c29");var i=o(a("b0ce")),r=o(a("28f2"));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(r.default))},ffbf:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"express-detail"},[a("view",{staticClass:"express-detail-top"},[e._m(0),a("view",{staticClass:"express-detail-right"},[a("view",{staticClass:"express-detail-title1"},[e._v("快递公司："),a("text",[e._v(e._s(e.name||"--"))])]),a("view",{staticClass:"express-detail-title2"},[e._v("快递单号："+e._s(e.qrCode))]),a("view",{staticClass:"express-detail-title2"},[e._v("管理状态："+e._s(e.context||"--"))])])]),e.flag?a("view",{staticClass:"express-detail-step-wrap"},[a("text",{staticClass:"express-detail-step-nav"},[e._v("快递状态：")]),e._m(1)]):e._e(),e.flag?a("view",{staticClass:"express-detail-status"},e._l(e.statusArray,function(t,i){return a("view",{key:i,class:0==i?"express-detail-status-content express-detail-status-act":"express-detail-status-content"},[t.phoneNumber?a("view",[e._v(e._s(t.time)+" "+e._s(t.context)),a("text",{staticStyle:{color:"#13a3ff"},attrs:{eventid:"19fbbbce-0-"+i},on:{click:function(a){e.callPhone(t.phoneNumber)}}},[e._v(e._s(t.phoneNumber))])]):a("view",[e._v(e._s(t.time)+" "+e._s(t.context))])])})):e._e(),e.noDataFlag?a("view",{staticClass:"express-detail-no-data"},[a("image",{staticClass:"express-detail-no-data-img",attrs:{src:"../../static/images/no-data.png",mode:"aspectFit"}})]):e._e()])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"express-detail-left"},[a("image",{attrs:{src:"../../static/images/package-icon.png",mode:"aspectFit"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"express-detail-step-reward",attrs:{bindtap:"showReward"}},[a("image",{staticClass:"express-detail-step-image",attrs:{mode:"aspectFit",src:"/images/shang-icon2.png"}})])}];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return r})}},[["c9f5","common/runtime","common/vendor"]]]);
});
require('pages/detail/detail.js');


