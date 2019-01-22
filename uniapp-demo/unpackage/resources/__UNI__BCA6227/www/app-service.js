var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20180905_syb_scopedata*/global.__wcc_version__='v0.5vv_20180905_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
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
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
throw e;
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
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
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
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'abb7c276'])
Z([3,'_view data-v-ead272da express-detail'])
Z([[7],[3,'flag']])
Z(z[2])
Z([[7],[3,'noDataFlag']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'abb7c276'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'11616fde'])
Z([3,'_view data-v-5b642c19 express'])
Z([[6],[[7],[3,'history']],[3,'length']])
Z([[7],[3,'showJqMask']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'11616fde'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./pages/detail/detail.vue.wxml','./pages/detail/detail.wxml','/pages/detail/detail.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','/pages/index/index.vue.wxml'];d_[x[0]]={}
d_[x[0]]["abb7c276"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':abb7c276'
r.wxVkey=b
gg.f=$gdc(f_["./pages/detail/detail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
cs.push("./pages/detail/detail.vue.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/detail/detail.vue.wxml:view:15:6")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
cs.push("./pages/detail/detail.vue.wxml:view:21:6")
cs.pop()
}
var fE=_v()
_(oB,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
cs.push("./pages/detail/detail.vue.wxml:view:29:6")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=e_[x[1]].i
_ai(xC,x[2],e_,x[1],1,1)
var oD=_v()
_(r,oD)
cs.push("./pages/detail/detail.wxml:template:1:47")
var fE=_oz(z,1,e,s,gg)
var cF=_gd(x[1],fE,e_,d_)
if(cF){
var hG=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[1],1,59)
cs.pop()
xC.pop()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[x[2]],ic:[]}
d_[x[3]]={}
d_[x[3]]["11616fde"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[3]+':11616fde'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[3]);return}
p_[b]=true
try{
cs.push("./pages/index/index.vue.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/index/index.vue.wxml:view:10:6")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
cs.push("./pages/index/index.vue.wxml:view:24:6")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
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
e_[x[3]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oJ=e_[x[4]].i
_ai(oJ,x[5],e_,x[4],1,1)
var lK=_v()
_(r,lK)
cs.push("./pages/index/index.wxml:template:1:45")
var aL=_oz(z,1,e,s,gg)
var tM=_gd(x[4],aL,e_,d_)
if(tM){
var eN=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[4],1,57)
cs.pop()
oJ.pop()
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[x[5]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/detail/detail"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"我要查物流","navigationBarBackgroundColor":"#13a3ff","backgroundColor":"#f0f0f6"},"networkTimeout":{},"debug":false,"functionalPages":false,"subPackages":[],"workers":"","preloadRule":{},"requiredBackgroundModes":[],"plugins":{},"resizable":false,"navigateToMiniProgramAppIdList":[],"permission":{},"usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');



define('common/manifest.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
!function(r){var e=global.webpackJsonp;global.webpackJsonp=function(n,u,c){for(var l,f,a,p=0,i=[];p<n.length;p++)f=n[p],o[f]&&i.push(o[f][0]),o[f]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(r[l]=u[l]);for(e&&e(n,u,c);i.length;)i.shift()();if(c)for(p=0;p<c.length;p++)a=t(t.s=c[p]);return a};var n={},o={4:0};function t(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=r,t.c=n,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{configurable:!1,enumerable:!0,get:n})},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="/",t.oe=function(r){throw console.error(r),r}}([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
global.webpackJsonp([0],[function(t,e){t.exports=function(t,e,n,r,o){var i,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,a=t.default);var c,u="function"==typeof a?a.options:a;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),r&&(u._scopeId=r),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var f=u.functional,p=f?u.render:u.beforeCreate;f?u.render=function(t,e){return c.call(e),p(t,e)}:u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:i,exports:a,options:u}}},function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(t){}var n;n=function(){"use strict";function t(e,n,r,o){if(r!==o&&void 0!==r)if(null==r||null==o||typeof r!=typeof o)e[n]=r;else if(Array.isArray(r)&&Array.isArray(o))if(r.length===o.length)for(var i=0,a=r.length;i<a;++i)t(e,n+"["+i+"]",r[i],o[i]);else e[n]=r;else if("object"==typeof r&&"object"==typeof o){var s=Object.keys(r),c=Object.keys(o);if(s.length!==c.length)e[n]=r;else{var u=Object.create(null);for(i=0,a=s.length;i<a;++i)u[s[i]]=!0,u[c[i]]=!0;if(Object.keys(u).length!==s.length)e[n]=r;else for(i=0,a=s.length;i<a;++i){var f=s[i];t(e,n+"."+f,r[f],o[f])}}}else r!==o&&(e[n]=r)}function n(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function o(t){return!0===t}function i(t){return"string"==typeof t||"number"==typeof t}function a(t){return null!==t&&"object"==typeof t}var s=Object.prototype.toString;function c(t){return"[object Object]"===s.call(t)}function u(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return null==t?"":"object"==typeof t?JSON.stringify(t,null,2):String(t)}function p(t){var e=parseFloat(t);return isNaN(e)?t:e}function l(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}l("slot,component",!0);var d=l("key,ref,slot,is");function h(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var v=Object.prototype.hasOwnProperty;function y(t,e){return v.call(t,e)}function g(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}var m=/-(\w)/g,_=g(function(t){return t.replace(m,function(t,e){return e?e.toUpperCase():""})}),b=g(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),$=/([^-])([A-Z])/g,w=g(function(t){return t.replace($,"$1-$2").replace($,"$1-$2").toLowerCase()});function x(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function A(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function O(t,e){for(var n in e)t[n]=e[n];return t}function k(t,e,n){}var C=function(t,e,n){return!1},j=function(t){return t};function P(t,e){var n=a(t),r=a(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function S(t,e){for(var n=0;n<t.length;n++)if(P(t[n],e))return n;return-1}function T(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var I="data-server-rendered",D=["component","directive","filter"],E=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],R={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:C,isReservedAttr:C,isUnknownElement:C,getTagNamespace:k,parsePlatformTagName:j,mustUseProp:C,_lifecycleHooks:E},N=Object.freeze({});function M(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var B=/[^\w.$]/;var U=k;function L(t,e,n){if(R.errorHandler)R.errorHandler.call(null,t,e,n);else{if(!W||"undefined"==typeof console)throw t;console.error(t)}}var V,F="__proto__"in{},W="undefined"!=typeof window,H=["mpvue-runtime"].join(),q=(H&&/msie|trident/.test(H),H&&H.indexOf("msie 9.0"),H&&H.indexOf("edge/")>0),J=(H&&H.indexOf("android"),H&&/iphone|ipad|ipod|ios/.test(H)),z=(H&&/chrome\/\d+/.test(H),{}.watch);if(W)try{var K={};Object.defineProperty(K,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,K)}catch(t){}var G=function(){return void 0===V&&(V=!W&&void 0!==e&&"server"===e.process.env.VUE_ENV),V},X=W&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function Z(t){return"function"==typeof t&&/native code/.test(t.toString())}var Q,Y="undefined"!=typeof Symbol&&Z(Symbol)&&"undefined"!=typeof Reflect&&Z(Reflect.ownKeys),tt=function(){var t,e=[],n=!1;function r(){n=!1;var t=e.slice(0);e.length=0;for(var r=0;r<t.length;r++)t[r]()}if("undefined"!=typeof Promise&&Z(Promise)){var o=Promise.resolve(),i=function(t){console.error(t)};t=function(){o.then(r).catch(i),J&&setTimeout(k)}}else t=function(){setTimeout(r,0)};return function(r,o){var i;if(e.push(function(){if(r)try{r.call(o)}catch(t){L(t,o,"nextTick")}else i&&i(o)}),n||(n=!0,t()),!r&&"undefined"!=typeof Promise)return new Promise(function(t,e){i=t})}}();Q="undefined"!=typeof Set&&Z(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var et=0,nt=function(){this.id=et++,this.subs=[]};nt.prototype.addSub=function(t){this.subs.push(t)},nt.prototype.removeSub=function(t){h(this.subs,t)},nt.prototype.depend=function(){nt.target&&nt.target.addDep(this)},nt.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},nt.target=null;var rt=[];var ot=Array.prototype,it=Object.create(ot);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=ot[t];M(it,t,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2)}return o&&a.observeArray(o),a.dep.notify(),i})});var at=Object.getOwnPropertyNames(it),st={shouldConvert:!0},ct=function(t){(this.value=t,this.dep=new nt,this.vmCount=0,M(t,"__ob__",this),Array.isArray(t))?((F?ut:ft)(t,it,at),this.observeArray(t)):this.walk(t)};function ut(t,e,n){t.__proto__=e}function ft(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];M(t,i,e[i])}}function pt(t,e){var n;if(a(t))return y(t,"__ob__")&&t.__ob__ instanceof ct?n=t.__ob__:st.shouldConvert&&!G()&&(Array.isArray(t)||c(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new ct(t)),e&&n&&n.vmCount++,n}function lt(t,e,n,r,o){var i=new nt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!o&&pt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return nt.target&&(i.depend(),u&&u.dep.depend(),Array.isArray(e)&&function t(e){for(var n=void 0,r=0,o=e.length;r<o;r++)(n=e[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&t(n)}(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!=e&&r!=r||(c?c.call(t,e):n=e,u=!o&&pt(e),i.notify())}})}}function dt(t,e,n){if(Array.isArray(t)&&u(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(y(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(lt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function ht(t,e){if(Array.isArray(t)&&u(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||y(t,e)&&(delete t[e],n&&n.dep.notify())}}ct.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)lt(t,e[n],t[e[n]])},ct.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)pt(t[e])};var vt=R.optionMergeStrategies;function yt(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)r=t[n=i[a]],o=e[n],y(t,n)?c(r)&&c(o)&&yt(r,o):dt(t,n,o);return t}function gt(t,e,n){return n?t||e?function(){var r="function"==typeof e?e.call(n):e,o="function"==typeof t?t.call(n):void 0;return r?yt(r,o):o}:void 0:e?t?function(){return yt("function"==typeof e?e.call(this):e,t.call(this))}:e:t}function mt(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function _t(t,e){var n=Object.create(t||null);return e?O(n,e):n}vt.data=function(t,e,n){return n?gt(t,e,n):e&&"function"!=typeof e?t:gt.call(this,t,e)},E.forEach(function(t){vt[t]=mt}),D.forEach(function(t){vt[t+"s"]=_t}),vt.watch=function(t,e){if(t===z&&(t=void 0),e===z&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in O(n,t),e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},vt.props=vt.methods=vt.inject=vt.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return O(n,t),O(n,e),n},vt.provide=gt;var bt=function(t,e){return void 0===e?t:e};function $t(t,e,n){"function"==typeof e&&(e=e.options),function(t){var e=t.props;if(e){var n,r,o={};if(Array.isArray(e))for(n=e.length;n--;)"string"==typeof(r=e[n])&&(o[_(r)]={type:null});else if(c(e))for(var i in e)r=e[i],o[_(i)]=c(r)?r:{type:r};t.props=o}}(e),function(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}(e),function(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"==typeof r&&(e[n]={bind:r,update:r})}}(e);var r=e.extends;if(r&&(t=$t(t,r,n)),e.mixins)for(var o=0,i=e.mixins.length;o<i;o++)t=$t(t,e.mixins[o],n);var a,s={};for(a in t)u(a);for(a in e)y(t,a)||u(a);function u(r){var o=vt[r]||bt;s[r]=o(t[r],e[r],n,r)}return s}function wt(t,e,n,r){if("string"==typeof n){var o=t[e];if(y(o,n))return o[n];var i=_(n);if(y(o,i))return o[i];var a=b(i);return y(o,a)?o[a]:o[n]||o[i]||o[a]}}function xt(t,e,n,r){var o=e[t],i=!y(n,t),a=n[t];if(Ot(Boolean,o.type)&&(i&&!y(o,"default")?a=!1:Ot(String,o.type)||""!==a&&a!==w(t)||(a=!0)),void 0===a){a=function(t,e,n){if(!y(e,"default"))return;var r=e.default;0;if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return"function"==typeof r&&"Function"!==At(e.type)?r.call(t):r}(r,o,t);var s=st.shouldConvert;st.shouldConvert=!0,pt(a),st.shouldConvert=s}return a}function At(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Ot(t,e){if(!Array.isArray(e))return At(e)===At(t);for(var n=0,r=e.length;n<r;n++)if(At(e[n])===At(t))return!0;return!1}var kt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Ct={child:{}};Ct.child.get=function(){return this.componentInstance},Object.defineProperties(kt.prototype,Ct);var jt=function(t){void 0===t&&(t="");var e=new kt;return e.text=t,e.isComment=!0,e};function Pt(t){return new kt(void 0,void 0,void 0,String(t))}function St(t){var e=new kt(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function Tt(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=St(t[r]);return n}var It,Dt=g(function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return{name:t=r?t.slice(1):t,once:n,capture:r,passive:e}});function Et(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function Rt(t,e,n,o,i){if(r(e)){if(y(e,n))return t[n]=e[n],i||delete e[n],!0;if(y(e,o))return t[n]=e[o],i||delete e[o],!0}return!1}function Nt(t){return i(t)?[Pt(t)]:Array.isArray(t)?function t(e,a){var s=[];var c,u,f;for(c=0;c<e.length;c++)n(u=e[c])||"boolean"==typeof u||(f=s[s.length-1],Array.isArray(u)?s.push.apply(s,t(u,(a||"")+"_"+c)):i(u)?Mt(f)?f.text+=String(u):""!==u&&s.push(Pt(u)):Mt(u)&&Mt(f)?s[s.length-1]=Pt(f.text+u.text):(o(e._isVList)&&r(u.tag)&&n(u.key)&&r(a)&&(u.key="__vlist"+a+"_"+c+"__"),s.push(u)));return s}(t):void 0}function Mt(t){return r(t)&&r(t.text)&&!1===t.isComment}function Bt(t,e){return t.__esModule&&t.default&&(t=t.default),a(t)?e.extend(t):t}function Ut(t,e,n){n?It.$once(t,e):It.$on(t,e)}function Lt(t,e){It.$off(t,e)}function Vt(t,e,r){It=t,function(t,e,r,o,i){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=Dt(a),n(s)||(n(c)?(n(s.fns)&&(s=t[a]=Et(s)),r(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)n(t[a])&&o((u=Dt(a)).name,e[a],u.capture)}(e,r||{},Ut,Lt)}function Ft(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(Wt)||(n.default=r),n}function Wt(t){return t.isComment||" "===t.text}function Ht(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?Ht(t[n],e):e[t[n].key]=t[n].fn;return e}var qt=null;function Jt(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=jt),Gt(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new oe(t,r,k),n=!1,null==t.$vnode&&(t._isMounted=!0,Gt(t,"mounted")),t}function zt(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function Kt(t,e){if(e){if(t._directInactive=!1,zt(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Kt(t.$children[n]);Gt(t,"activated")}}function Gt(t,e){var n=t.$options[e];if(n)for(var r=0,o=n.length;r<o;r++)try{n[r].call(t)}catch(n){L(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var Xt=[],Zt=[],Qt={},Yt=!1,te=!1,ee=0;function ne(){var t,e;for(te=!0,Xt.sort(function(t,e){return t.id-e.id}),ee=0;ee<Xt.length;ee++)e=(t=Xt[ee]).id,Qt[e]=null,t.run();var n=Zt.slice(),r=Xt.slice();ee=Xt.length=Zt.length=0,Qt={},Yt=te=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Kt(t[e],!0)}(n),function(t){var e=t.length;for(;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&Gt(r,"updated")}}(r),X&&R.devtools&&X.emit("flush")}var re=0,oe=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++re,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Q,this.newDepIds=new Q,this.expression="","function"==typeof e?this.getter=e:(this.getter=function(t){if(!B.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};oe.prototype.get=function(){var t,e;t=this,nt.target&&rt.push(nt.target),nt.target=t;var n,r=this.vm;try{e=this.getter.call(r,r)}catch(t){if(!this.user)throw t;L(t,r,'getter for watcher "'+this.expression+'"')}finally{this.deep&&(n=e,ie.clear(),function t(e,n){var r,o,i=Array.isArray(e);if((i||a(e))&&Object.isExtensible(e)){if(e.__ob__){var s=e.__ob__.dep.id;if(n.has(s))return;n.add(s)}if(i)for(r=e.length;r--;)t(e[r],n);else for(o=Object.keys(e),r=o.length;r--;)t(e[o[r]],n)}}(n,ie)),nt.target=rt.pop(),this.cleanupDeps()}return e},oe.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},oe.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},oe.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(t){var e=t.id;if(null==Qt[e]){if(Qt[e]=!0,te){for(var n=Xt.length-1;n>ee&&Xt[n].id>t.id;)n--;Xt.splice(n+1,0,t)}else Xt.push(t);Yt||(Yt=!0,tt(ne))}}(this)},oe.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||a(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){L(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},oe.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},oe.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},oe.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||h(this.vm._watchers,this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1}};var ie=new Q;var ae={enumerable:!0,configurable:!0,get:k,set:k};function se(t,e,n){ae.get=function(){return this[e][n]},ae.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ae)}function ce(t){t._watchers=[];var e=t.$options;e.props&&function(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;st.shouldConvert=i;var a=function(i){o.push(i);var a=xt(i,e,n,t);lt(r,i,a),i in t||se(t,"_props",i)};for(var s in e)a(s);st.shouldConvert=!0}(t,e.props),e.methods&&function(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?k:x(e[n],t)}(t,e.methods),e.data?function(t){var e=t.$options.data;c(e=t._data="function"==typeof e?function(t,e){try{return t.call(e)}catch(t){return L(t,e,"data()"),{}}}(e,t):e||{})||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);for(;o--;){var i=n[o];r&&y(r,i)||(void 0,36!==(a=(i+"").charCodeAt(0))&&95!==a&&se(t,"_data",i))}var a;pt(e,!0)}(t):pt(t._data={},!0),e.computed&&function(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"==typeof o?o:o.get;n[r]=new oe(t,i,k,ue),r in t||fe(t,r,o)}}(t,e.computed),e.watch&&e.watch!==z&&function(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)le(t,n,r[o]);else le(t,n,r)}}(t,e.watch)}var ue={lazy:!0};function fe(t,e,n){"function"==typeof n?(ae.get=pe(e),ae.set=k):(ae.get=n.get?!1!==n.cache?pe(e):n.get:k,ae.set=n.set?n.set:k),Object.defineProperty(t,e,ae)}function pe(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),nt.target&&e.depend(),e.value}}function le(t,e,n,r){return c(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}function de(t,e){if(t){for(var n=Object.create(null),r=Y?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){for(var i=r[o],a=t[i],s=e;s;){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}0}return n}}function he(t,e){for(var n in e)t[_(n)]=e[n]}var ve={init:function(t,e,n,o){if(!t.componentInstance||t.componentInstance._isDestroyed)(t.componentInstance=function(t,e,n,o){var i=t.componentOptions,a={_isComponent:!0,parent:e,propsData:i.propsData,_componentTag:i.tag,_parentVnode:t,_parentListeners:i.listeners,_renderChildren:i.children,_parentElm:n||null,_refElm:o||null},s=t.data.inlineTemplate;r(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns);return new i.Ctor(a)}(t,qt,n,o)).$mount(e?t.elm:void 0,e);else if(t.data.keepAlive){var i=t;ve.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions;!function(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==N);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){st.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=xt(u,t.$options.props,e,t)}st.shouldConvert=!0,t.$options.propsData=e}if(n){var f=t.$options._parentListeners;t.$options._parentListeners=n,Vt(t,n,f)}i&&(t.$slots=Ft(o,r.context),t.$forceUpdate())}(e.componentInstance=t.componentInstance,n.propsData,n.listeners,e,n.children)},insert:function(t){var e,n=t.context,r=t.componentInstance;r._isMounted||(r._isMounted=!0,Gt(r,"mounted")),t.data.keepAlive&&(n._isMounted?((e=r)._inactive=!1,Zt.push(e)):Kt(r,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?function t(e,n){if(!(n&&(e._directInactive=!0,zt(e))||e._inactive)){e._inactive=!0;for(var r=0;r<e.$children.length;r++)t(e.$children[r]);Gt(e,"deactivated")}}(e,!0):e.$destroy())}},ye=Object.keys(ve);function ge(t,e,i,s,c){if(!n(t)){var u=i.$options._base;if(a(t)&&(t=u.extend(t)),"function"==typeof t){var f;if(n(t.cid)&&void 0===(t=function(t,e,i){if(o(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;if(o(t.loading)&&r(t.loadingComp))return t.loadingComp;if(!r(t.contexts)){var s=t.contexts=[i],c=!0,u=function(){for(var t=0,e=s.length;t<e;t++)s[t].$forceUpdate()},f=T(function(n){t.resolved=Bt(n,e),c||u()}),p=T(function(e){r(t.errorComp)&&(t.error=!0,u())}),l=t(f,p);return a(l)&&("function"==typeof l.then?n(t.resolved)&&l.then(f,p):r(l.component)&&"function"==typeof l.component.then&&(l.component.then(f,p),r(l.error)&&(t.errorComp=Bt(l.error,e)),r(l.loading)&&(t.loadingComp=Bt(l.loading,e),0===l.delay?t.loading=!0:setTimeout(function(){n(t.resolved)&&n(t.error)&&(t.loading=!0,u())},l.delay||200)),r(l.timeout)&&setTimeout(function(){n(t.resolved)&&p(null)},l.timeout))),c=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(i)}(f=t,u,i)))return function(t,e,n,r,o){var i=jt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}(f,e,i,s,c);e=e||{},De(t),r(e.model)&&function(t,e){var n=t.model&&t.model.prop||"value",o=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var i=e.on||(e.on={});r(i[o])?i[o]=[e.model.callback].concat(i[o]):i[o]=e.model.callback}(t.options,e);var p=function(t,e,o){var i=e.options.props;if(!n(i)){var a={},s=t.attrs,c=t.props;if(r(s)||r(c))for(var u in i){var f=w(u);Rt(a,c,u,f,!0)||Rt(a,s,u,f,!1)}return a}}(e,t);if(o(t.options.functional))return function(t,e,n,o,i){var a={},s=t.options.props;if(r(s))for(var c in s)a[c]=xt(c,s,e||{});else r(n.attrs)&&he(a,n.attrs),r(n.props)&&he(a,n.props);var u=Object.create(o),f=t.options.render.call(null,function(t,e,n,r){return $e(u,t,e,n,r,!0)},{data:n,props:a,children:i,parent:o,listeners:n.on||{},injections:de(t.options.inject,o),slots:function(){return Ft(i,o)}});return f instanceof kt&&(f.functionalContext=o,f.functionalOptions=t.options,n.slot&&((f.data||(f.data={})).slot=n.slot)),f}(t,p,e,i,s);var l=e.on;if(o(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}!function(t){t.hook||(t.hook={});for(var e=0;e<ye.length;e++){var n=ye[e],r=t.hook[n],o=ve[n];t.hook[n]=r?me(o,r):o}}(e);var h=t.options.name||c;return new kt("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,i,{Ctor:t,propsData:p,listeners:l,tag:c,children:s},f)}}}function me(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}var _e=1,be=2;function $e(t,e,a,s,c,u){return(Array.isArray(a)||i(a))&&(c=s,s=a,a=void 0),o(u)&&(c=be),function(t,e,o,i,a){if(r(o)&&r(o.__ob__))return jt();r(o)&&r(o.is)&&(e=o.is);if(!e)return jt();0;Array.isArray(i)&&"function"==typeof i[0]&&((o=o||{}).scopedSlots={default:i[0]},i.length=0);a===be?i=Nt(i):a===_e&&(i=function(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}(i));var s,c;if("string"==typeof e){var u;c=R.getTagNamespace(e),s=R.isReservedTag(e)?new kt(R.parsePlatformTagName(e),o,i,void 0,void 0,t):r(u=wt(t.$options,"components",e))?ge(u,o,t,i,e):new kt(e,o,i,void 0,void 0,t)}else s=ge(e,o,t,i);return r(s)?(c&&function t(e,o){e.ns=o;if("foreignObject"===e.tag)return;if(r(e.children))for(var i=0,a=e.children.length;i<a;i++){var s=e.children[i];r(s.tag)&&n(s.ns)&&t(s,o)}}(s,c),s):jt()}(t,e,a,s,c)}function we(t,e){var n,o,i,s,c;if(Array.isArray(t)||"string"==typeof t)for(n=new Array(t.length),o=0,i=t.length;o<i;o++)n[o]=e(t[o],o);else if("number"==typeof t)for(n=new Array(t),o=0;o<t;o++)n[o]=e(o+1,o);else if(a(t))for(s=Object.keys(t),n=new Array(s.length),o=0,i=s.length;o<i;o++)c=s[o],n[o]=e(t[c],c,o);return r(n)&&(n._isVList=!0),n}function xe(t,e,n,r){var o=this.$scopedSlots[t];if(o)return n=n||{},r&&(n=O(O({},r),n)),o(n)||e;var i=this.$slots[t];return i||e}function Ae(t){return wt(this.$options,"filters",t)||j}function Oe(t,e,n){var r=R.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function ke(t,e,n,r,o){if(n)if(a(n)){var i;Array.isArray(n)&&(n=function(t){for(var e={},n=0;n<t.length;n++)t[n]&&O(e,t[n]);return e}(n));var s=function(a){if("class"===a||"style"===a||d(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||R.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}a in i||(i[a]=n[a],o&&((t.on||(t.on={}))["update:"+a]=function(t){n[a]=t}))};for(var c in n)s(c)}else;return t}function Ce(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?Tt(n):St(n):(Pe(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),"__static__"+t,!1),n)}function je(t,e,n){return Pe(t,"__once__"+e+(n?"_"+n:""),!0),t}function Pe(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&Se(t[r],e+"_"+r,n);else Se(t,e,n)}function Se(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Te(t,e){if(e)if(c(e)){var n=t.on=t.on?O({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}else;return t}var Ie=0;function De(t){var e=t.options;if(t.super){var n=De(t.super);if(n!==t.superOptions){t.superOptions=n;var r=function(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=Ee(n[i],r[i],o[i]));return e}(t);r&&O(t.extendOptions,r),(e=t.options=$t(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function Ee(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function Re(t){this._init(t)}function Ne(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=e++,a.options=$t(n.options,t),a.super=n,a.options.props&&function(t){var e=t.options.props;for(var n in e)se(t.prototype,"_props",n)}(a),a.options.computed&&function(t){var e=t.options.computed;for(var n in e)fe(t.prototype,n,e[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,D.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=O({},a.options),o[r]=a,a}}Re.prototype._init=function(t){var e=this;e._uid=Ie++,e._isVue=!0,t&&t._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(e,t):e.$options=$t(De(e.constructor),t||{},e),e._renderProxy=e,e._self=e,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(e),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Vt(t,e)}(e),function(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=Ft(t.$options._renderChildren,n),t.$scopedSlots=N,t._c=function(e,n,r,o){return $e(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return $e(t,e,n,r,o,!0)};var r=e&&e.data;lt(t,"$attrs",r&&r.attrs,0,!0),lt(t,"$listeners",r&&r.on,0,!0)}(e),Gt(e,"beforeCreate"),function(t){var e=de(t.$options.inject,t);e&&(st.shouldConvert=!1,Object.keys(e).forEach(function(n){lt(t,n,e[n])}),st.shouldConvert=!0)}(e),ce(e),function(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}(e),Gt(e,"created"),e.$options.el&&e.$mount(e.$options.el)},function(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=dt,t.prototype.$delete=ht,t.prototype.$watch=function(t,e,n){if(c(e))return le(this,t,e,n);(n=n||{}).user=!0;var r=new oe(this,t,e,n);return n.immediate&&e.call(this,r.value),function(){r.teardown()}}}(Re),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){if(Array.isArray(t))for(var r=0,o=t.length;r<o;r++)this.$on(t[r],n);else(this._events[t]||(this._events[t]=[])).push(n),e.test(t)&&(this._hasHookEvent=!0);return this},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)this.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(1===arguments.length)return n._events[t]=null,n;for(var s=a.length;s--;)if((i=a[s])===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this._events[t];if(e){e=e.length>1?A(e):e;for(var n=A(arguments,1),r=0,o=e.length;r<o;r++)try{e[r].apply(this,n)}catch(e){L(e,this,'event handler for "'+t+'"')}}return this}}(Re),function(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&Gt(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=qt;qt=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),qt=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Gt(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||h(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Gt(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}(Re),function(t){t.prototype.$nextTick=function(t){return tt(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n.staticRenderFns,i=n._parentVnode;if(e._isMounted)for(var a in e.$slots)e.$slots[a]=Tt(e.$slots[a]);e.$scopedSlots=i&&i.data.scopedSlots||N,o&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;try{t=r.call(e._renderProxy,e.$createElement)}catch(n){L(n,e,"render function"),t=e._vnode}return t instanceof kt||(t=jt()),t.parent=i,t},t.prototype._o=je,t.prototype._n=p,t.prototype._s=f,t.prototype._l=we,t.prototype._t=xe,t.prototype._q=P,t.prototype._i=S,t.prototype._m=Ce,t.prototype._f=Ae,t.prototype._k=Oe,t.prototype._b=ke,t.prototype._v=Pt,t.prototype._e=jt,t.prototype._u=Ht,t.prototype._g=Te}(Re);var Me=[String,RegExp,Array];function Be(t){return t&&(t.Ctor.options.name||t.tag)}function Ue(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:(n=t,"[object RegExp]"===s.call(n)&&t.test(e));var n}function Le(t,e,n){for(var r in t){var o=t[r];if(o){var i=Be(o.componentOptions);i&&!n(i)&&(o!==e&&Ve(o),t[r]=null)}}}function Ve(t){t&&t.componentInstance.$destroy()}var Fe={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Me,exclude:Me},created:function(){this.cache=Object.create(null)},destroyed:function(){for(var t in this.cache)Ve(this.cache[t])},watch:{include:function(t){Le(this.cache,this._vnode,function(e){return Ue(t,e)})},exclude:function(t){Le(this.cache,this._vnode,function(e){return!Ue(t,e)})}},render:function(){var t=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&r(n.componentOptions))return n}}(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Be(e);if(n&&(this.include&&!Ue(this.include,n)||this.exclude&&Ue(this.exclude,n)))return t;var o=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[o]?t.componentInstance=this.cache[o].componentInstance:this.cache[o]=t,t.data.keepAlive=!0}return t}}};!function(t){var e={get:function(){return R}};Object.defineProperty(t,"config",e),t.util={warn:U,extend:O,mergeOptions:$t,defineReactive:lt},t.set=dt,t.delete=ht,t.nextTick=tt,t.options=Object.create(null),D.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,O(t.options.components,Fe),function(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=A(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=$t(this.options,t),this}}(t),Ne(t),function(t){D.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&c(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}(t)}(Re),Object.defineProperty(Re.prototype,"$isServer",{get:G}),Object.defineProperty(Re.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Re.version="2.4.1",Re.mpvueVersion="1.0.12";var We=l("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),He=l("style,class");l("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),l("embed,img,image,input,link,meta",!0);function qe(t){return t&&t.$attrs?t.$attrs.mpcomid:"0"}var Je={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},ze={};var Ke=Object.freeze({createElement:function(t,e){return ze},createElementNS:function(t,e){return ze},createTextNode:function(t){return ze},createComment:function(t){return ze},insertBefore:function(t,e,n){},removeChild:function(t,e){},appendChild:function(t,e){},parentNode:function(t){return ze},nextSibling:function(t){return ze},tagName:function(t){return"div"},setTextContent:function(t,e){return ze},setAttribute:function(t,e,n){return ze}}),Ge={create:function(t,e){Xe(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Xe(t,!0),Xe(e))},destroy:function(t){Xe(t,!0)}};function Xe(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?h(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var Ze=new kt("",{},[]),Qe=["create","activate","update","remove","destroy"];function Ye(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&r(t.data)===r(e.data)&&function(t,e){if("input"!==t.tag)return!0;var n,o=r(n=t.data)&&r(n=n.attrs)&&n.type,i=r(n=e.data)&&r(n=n.attrs)&&n.type;return o===i}(t,e)||o(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&n(e.asyncFactory.error))}function tn(t,e,n){var o,i,a={};for(o=e;o<=n;++o)r(i=t[o].key)&&(a[i]=o);return a}var en=function(t){var e,a,s={},c=t.modules,u=t.nodeOps;for(e=0;e<Qe.length;++e)for(s[Qe[e]]=[],a=0;a<c.length;++a)r(c[a][Qe[e]])&&s[Qe[e]].push(c[a][Qe[e]]);function f(t){var e=u.parentNode(t);r(e)&&u.removeChild(e,t)}function p(t,e,n,i,a){if(t.isRootInsert=!a,!function(t,e,n,i){var a=t.data;if(r(a)){var c=r(t.componentInstance)&&a.keepAlive;if(r(a=a.hook)&&r(a=a.init)&&a(t,!1,n,i),r(t.componentInstance))return d(t,e),o(c)&&function(t,e,n,o){for(var i,a=t;a.componentInstance;)if(a=a.componentInstance._vnode,r(i=a.data)&&r(i=i.transition)){for(i=0;i<s.activate.length;++i)s.activate[i](Ze,a);e.push(a);break}h(n,t.elm,o)}(t,e,n,i),!0}}(t,e,n,i)){var c=t.data,f=t.children,p=t.tag;r(p)?(t.elm=t.ns?u.createElementNS(t.ns,p):u.createElement(p,t),m(t),v(t,f,e),r(c)&&g(t,e),h(n,t.elm,i)):o(t.isComment)?(t.elm=u.createComment(t.text),h(n,t.elm,i)):(t.elm=u.createTextNode(t.text),h(n,t.elm,i))}}function d(t,e){r(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,y(t)?(g(t,e),m(t)):(Xe(t),e.push(t))}function h(t,e,n){r(t)&&(r(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function v(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)p(e[r],n,t.elm,null,!0);else i(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function y(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return r(t.tag)}function g(t,n){for(var o=0;o<s.create.length;++o)s.create[o](Ze,t);r(e=t.data.hook)&&(r(e.create)&&e.create(Ze,t),r(e.insert)&&n.push(t))}function m(t){for(var e,n=t;n;)r(e=n.context)&&r(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;r(e=qt)&&e!==t.context&&r(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function _(t,e,n,r,o,i){for(;r<=o;++r)p(n[r],i,t,e)}function b(t){var e,n,o=t.data;if(r(o))for(r(e=o.hook)&&r(e=e.destroy)&&e(t),e=0;e<s.destroy.length;++e)s.destroy[e](t);if(r(e=t.children))for(n=0;n<t.children.length;++n)b(t.children[n])}function $(t,e,n,o){for(;n<=o;++n){var i=e[n];r(i)&&(r(i.tag)?(w(i),b(i)):f(i.elm))}}function w(t,e){if(r(e)||r(t.data)){var n,o=s.remove.length+1;for(r(e)?e.listeners+=o:e=function(t,e){function n(){0==--n.listeners&&f(t)}return n.listeners=e,n}(t.elm,o),r(n=t.componentInstance)&&r(n=n._vnode)&&r(n.data)&&w(n,e),n=0;n<s.remove.length;++n)s.remove[n](t,e);r(n=t.data.hook)&&r(n=n.remove)?n(t,e):e()}else f(t.elm)}function x(t,e,i,a){if(t!==e){var c=e.elm=t.elm;if(o(t.isAsyncPlaceholder))r(e.asyncFactory.resolved)?k(t.elm,e,i):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,l=e.data;r(l)&&r(f=l.hook)&&r(f=f.prepatch)&&f(t,e);var d=t.children,h=e.children;if(r(l)&&y(e)){for(f=0;f<s.update.length;++f)s.update[f](t,e);r(f=l.hook)&&r(f=f.update)&&f(t,e)}n(e.text)?r(d)&&r(h)?d!==h&&function(t,e,o,i,a){for(var s,c,f,l=0,d=0,h=e.length-1,v=e[0],y=e[h],g=o.length-1,m=o[0],b=o[g],w=!a;l<=h&&d<=g;)n(v)?v=e[++l]:n(y)?y=e[--h]:Ye(v,m)?(x(v,m,i),v=e[++l],m=o[++d]):Ye(y,b)?(x(y,b,i),y=e[--h],b=o[--g]):Ye(v,b)?(x(v,b,i),w&&u.insertBefore(t,v.elm,u.nextSibling(y.elm)),v=e[++l],b=o[--g]):Ye(y,m)?(x(y,m,i),w&&u.insertBefore(t,y.elm,v.elm),y=e[--h],m=o[++d]):(n(s)&&(s=tn(e,l,h)),n(c=r(m.key)?s[m.key]:null)?(p(m,i,t,v.elm),m=o[++d]):Ye(f=e[c],m)?(x(f,m,i),e[c]=void 0,w&&u.insertBefore(t,f.elm,v.elm),m=o[++d]):(p(m,i,t,v.elm),m=o[++d]));l>h?_(t,n(o[g+1])?null:o[g+1].elm,o,d,g,i):d>g&&$(0,e,l,h)}(c,d,h,i,a):r(h)?(r(t.text)&&u.setTextContent(c,""),_(c,null,h,0,h.length-1,i)):r(d)?$(0,d,0,d.length-1):r(t.text)&&u.setTextContent(c,""):t.text!==e.text&&u.setTextContent(c,e.text),r(l)&&r(f=l.hook)&&r(f=f.postpatch)&&f(t,e)}}}function A(t,e,n){if(o(n)&&r(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}var O=l("attrs,style,class,staticClass,staticStyle,key");function k(t,n,i){if(o(n.isComment)&&r(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var a=n.tag,s=n.data,c=n.children;if(r(s)&&(r(e=s.hook)&&r(e=e.init)&&e(n,!0),r(e=n.componentInstance)))return d(n,i),!0;if(r(a)){if(r(c))if(t.hasChildNodes()){for(var u=!0,f=t.firstChild,p=0;p<c.length;p++){if(!f||!k(f,c[p],i)){u=!1;break}f=f.nextSibling}if(!u||f)return!1}else v(n,c,i);if(r(s))for(var l in s)if(!O(l)){g(n,i);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,i,a,c,f){if(!n(e)){var l,d=!1,h=[];if(n(t))d=!0,p(e,h,c,f);else{var v=r(t.nodeType);if(!v&&Ye(t,e))x(t,e,h,a);else{if(v){if(1===t.nodeType&&t.hasAttribute(I)&&(t.removeAttribute(I),i=!0),o(i)&&k(t,e,h))return A(e,h,!0),t;l=t,t=new kt(u.tagName(l).toLowerCase(),{},[],void 0,l)}var g=t.elm,m=u.parentNode(g);if(p(e,h,g._leaveCb?null:m,u.nextSibling(g)),r(e.parent)){for(var _=e.parent;_;)_.elm=e.elm,_=_.parent;if(y(e))for(var w=0;w<s.create.length;++w)s.create[w](Ze,e.parent)}r(m)?$(0,[t],0,0):r(t.tag)&&b(t)}}return A(e,h,d),e.elm}r(t)&&b(t)}}({nodeOps:Ke,modules:[Ge]});function nn(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),o)for(var i=0,a=o.length;i<a;i++)try{r=o[i].call(t,n)}catch(n){L(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return nn(t,e,n)}),r}function rn(t,e,n){if(t){var r,o,i;if(Array.isArray(t))for(r=t.length;r--;)"string"==typeof(o=t[r])&&(e[i=_(o)]={type:null});else if(c(t))for(var a in t)o=t[a],e[i=_(a)]=c(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var u=e[s];u.default&&(u.value=u.default);var f=u.observer;u.observer=function(t,e){n[i]=t,"function"==typeof f&&f.call(n,t,e)}}return e}}function on(t){var e=function t(e,n){void 0===n&&(n=[]);var r=(e||{}).$parent;return r?(n.unshift(qe(r)),r.$parent?t(r,n):n):n}(t).join(","),n=e+(e?",":"")+qe(t),r=Object.assign(function(t){return[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{})).reduce(function(e,n){return e[n]=t[n],e},{})}(t),{$k:n,$kk:n+",",$p:e}),o={};return o["$root."+n]=r,o}var an=function(t,e,n){var r,o,i,a=null,s=0;function c(){s=!1===n.leading?0:Date.now(),a=null,i=t.apply(r,o),a||(r=o=null)}return n||(n={}),function(u,f){var p=Date.now();s||!1!==n.leading||(s=p);var l=e-(p-s);return r=this,o=o?[u,Object.assign(o[1],f)]:[u,f],l<=0||l>e?(clearTimeout(a),a=null,s=p,i=t.apply(r,o),a||(r=o=null)):a||!1===n.trailing||(a=setTimeout(c,l)),i}}(function(t,e){t(e)},50);function sn(t){var e=t.$root.$mp||{},n=e.mpType;void 0===n&&(n="");var r=e.page;if("app"!==n&&r&&"function"==typeof r.setData)return r}return Re.config.mustUseProp=function(){},Re.config.isReservedTag=We,Re.config.isReservedAttr=He,Re.config.getTagNamespace=function(){},Re.config.isUnknownElement=function(){},Re.prototype.__patch__=function(){en.apply(this,arguments),this.$updateDataToMP()},Re.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return Jt(n,void 0,void 0)})}return Jt(this,void 0,void 0)},Re.prototype._initMP=function(t,n){var r=this.$root;r.$mp||(r.$mp={});var o,i,a=r.$mp;if(a.status)return"app"===t?nn(this,"onLaunch",a.appOptions):nn(this,"onLoad",a.query),n();if(a.mpType=t,a.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),a.app=this,a.status="launch",this.globalData.appOptions=a.appOptions=t,nn(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),a.status="show",this.globalData.appOptions=a.appOptions=t,nn(r,"onShow",t)},onHide:function(){a.status="hide",nn(r,"onHide")},onError:function(t){nn(r,"onError",t)},onUniNViewMessage:function(t){nn(r,"onUniNViewMessage",t)}});else if("component"===t)i=(o=r)._mpProps={},Object.keys(o.$options.properties||{}).forEach(function(t){t in o||(se(o,"_mpProps",t),i[t]=void 0)}),pt(i,!0),e.Component({properties:function(t){var e=t.$options.properties,n=t.$options.props,r={};return rn(e,r,t),rn(n,r,t),r}(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){a.status="created",a.page=this},attached:function(){a.status="attached",nn(r,"attached")},ready:function(){a.status="ready",nn(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){nn(r,"moved")},detached:function(){a.status="detached",nn(r,"detached")}});else{var s=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,a.page=this,a.query=t,a.status="load",function(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}(s,r),r.$options&&"function"==typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),nn(r,"onLoad",t)},onShow:function(){r.__wxWebviewId__=this.__wxWebviewId__,a.page=this,a.status="show",nn(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){a.status="ready",nn(r,"onReady"),n()},onHide:function(){a.status="hide",nn(r,"onHide")},onUnload:function(){a.status="unload",nn(r,"onUnload"),a.page=null},onPullDownRefresh:function(){nn(r,"onPullDownRefresh")},onReachBottom:function(){nn(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return nn(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){nn(r,"onPageScroll",t)},onTabItemTap:function(t){nn(r,"onTabItemTap",t)}})}},Re.prototype.$updateDataToMP=function(){var e=sn(this);if(e){var n=on(this);an(e.setData.bind(e),JSON.parse(JSON.stringify(function(e,n){for(var r=Object.keys(e),o={},i=0,a=r.length;i<a;++i){for(var s=r[i],c=s.split("."),u=n[c[0]],f=1,p=c.length;f<p&&void 0!==u;++f)u=u[c[f]];t(o,s,e[s],u)}return o}(n,e.data))))}},Re.prototype._initDataToMP=function(){var t=sn(this);if(t){var e=function t(e,n){void 0===n&&(n={});var r=e.$children;return r&&r.length&&r.forEach(function(e){return t(e,n)}),Object.assign(n,on(e))}(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}},Re.prototype.$handleProxyWithVue=function(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=(t.currentTarget||r).dataset;void 0===o&&(o={});var i=o.comkey;void 0===i&&(i="");var a=o.eventid,s=function(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var o=t.$children[r];if(qe(o)===e)return t=o}return t},t):t}(e,i.split(","));if(s){var c=Je[n]||[n],u=function t(e,n,r){void 0===r&&(r=[]);var o=[];if(!e||!e.tag)return o;var i=e||{},a=i.data;void 0===a&&(a={});var s=i.children;void 0===s&&(s=[]);var c=i.componentInstance;c?Object.keys(c.$slots).forEach(function(e){var i=c.$slots[e];(Array.isArray(i)?i:[i]).forEach(function(e){o=o.concat(t(e,n,r))})}):s.forEach(function(e){o=o.concat(t(e,n,r))});var u=a.attrs,f=a.on;return u&&f&&u.eventid===n?(r.forEach(function(t){var e=f[t];"function"==typeof e?o.push(e):Array.isArray(e)&&(o=o.concat(e))}),o):o}(s._vnode,a,c);if(u.length){var f=function(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s={mp:t,type:e,timeStamp:n,x:o.x,y:o.y,target:Object.assign({},i,o),detail:o,currentTarget:a,stopPropagation:k,preventDefault:k};return r&&r.length&&(Object.assign(s,r[0]),s.touches=r),s}(t);if(1===u.length)return u[0](f);u.forEach(function(t){return t(f)})}}},Re},t.exports=n()}).call(e,n(5))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e;return a(e={data:{$root:{}},onLoad:function(e){var n=new i.default(t);this.$vm=n;var r=n.$root;r.__wxWebviewId__=this.__wxWebviewId__,r.$mp||(r.$mp={});var o=r.$mp;o.mpType="page",o.page=this,o.query=e,o.status="load",n.$mount()},handleProxy:function(t){return c(this).$handleProxyWithVue(t)},onShow:function(){var t=c(this);t.$mp.status="show",s(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=c(this);t.$mp.status="ready",s(t,"onReady")},onHide:function(){var t=c(this);t.$mp.status="hide",s(t,"onHide")},onUnload:function(){var t=c(this);s(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){s(c(this),"onPullDownRefresh")},onReachBottom:function(){s(c(this),"onReachBottom")},onPageScroll:function(t){s(c(this),"onPageScroll",t)},onTabItemTap:function(t){s(c(this),"onTabItemTap",t)}},"onPullDownRefresh",function(){s(c(this),"onPullDownRefresh")}),a(e,"onReachBottom",function(){s(c(this),"onReachBottom")}),a(e,"onShareAppMessage",t.onShareAppMessage?function(t){return s(c(this),"onShareAppMessage",t)}:null),a(e,"onPageScroll",function(t){s(c(this),"onPageScroll",t)}),a(e,"onTabItemTap",function(t){s(c(this),"onTabItemTap",t)}),a(e,"onNavigationBarButtonTap",function(t){s(c(this),"onNavigationBarButtonTap",t)}),a(e,"onBackPress",function(){return s(c(this),"onBackPress")}),a(e,"$getAppWebview",function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}),e};var r,o=n(1),i=(r=o)&&r.__esModule?r:{default:r};function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),o)for(var i=0,a=o.length;i<a;i++)r=o[i].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return s(t,e,n)}),r}function c(t){return t.$vm.$root}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return"function"==typeof t},o=/^on|^create|Sync$|Manager$|^pause/,i=["os","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],a=function(t){return(!o.test(t)||"createBLEConnection"===t)&&!~i.indexOf(t)},s=function(t){return function(){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r(i.success)||r(i.fail)||r(i.complete)?t.apply(void 0,[i].concat(n)):new Promise(function(e,r){t.apply(void 0,[Object.assign({},i,{success:e,fail:r})].concat(n)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}).then(function(t){return[null,t]}).catch(function(t){return[t]})}},c=1e-4,u=750,f=!1,p=0,l=0;function d(t,e){var n,r,o,i;return 0===p&&(n=wx.getSystemInfoSync(),r=n.platform,o=n.pixelRatio,i=n.windowWidth,p=i,l=o,f="ios"===r),0===t?0:(t=t/u*(e||p),0===(t=Math.floor(t+c))?1!==l&&f?.5:1:t)}function h(t){return __requireNativePlugin__(t)}var v={},y={os:{plus:!0}};"undefined"!=typeof Proxy?v=new Proxy({},{get:function(t,e){return y.hasOwnProperty(e)?y[e]:"upx2px"===e?d:"requireNativePlugin"===e?h:wx.hasOwnProperty(e)?a(e)?s(wx[e]):wx[e]:void 0}}):(v.upx2px=d,v.requireNativePlugin=h,Object.keys(y).forEach(function(t){v[t]=y[t]}),Object.keys(wx).forEach(function(t){wx.hasOwnProperty(t)&&(a(t)?v[t]=s(wx[t]):v[t]=wx[t])}));var g=v;e.default=g},,function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},,,function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}},,,,,,,,,,,,,function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(8),i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,f=function(){},p=null,l="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(y(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(y(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function y(t){var e,n,r=document.querySelector("style["+l+'~="'+t.id+'"]');if(r){if(u)return f;r.parentNode.removeChild(r)}if(d){var o=c++;r=s||(s=v()),e=_.bind(null,r,o,!1),n=_.bind(null,r,o,!0)}else r=v(),e=function(t,e){var n=e.css,r=e.media,o=e.sourceMap;r&&t.setAttribute("media",r);p.ssrId&&t.setAttribute(l,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){u=n,p=r||{};var a=o(t,e);return h(a),function(e){for(var n=[],r=0;r<a.length;r++){var s=a[r];(c=i[s.id]).refs--,n.push(c)}e?h(a=o(t,e)):a=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}};var g,m=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function _(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}}]);
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

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([3],[,,,,function(n,e,o){"use strict";var t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},u=c(o(1)),l=c(o(6));function c(n){return n&&n.__esModule?n:{default:n}}u.default.config.productionTip=!1,l.default.mpType="app",new u.default(t({},l.default)).$mount()},,function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(9),u=o.n(t);var l=function(n){o(7)},c=o(0)(u.a,null,l,null,null);e.default=c.exports},function(n,e){},,function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}}}],[4]);
});
require('app.js');


__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],[,,,,,,,,,,function(t,e,s){"use strict";var a=n(s(2)),i=n(s(11));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(13),i=s.n(a),n=s(14);var r=function(t){s(12)},o=s(0)(i.a,n.a,r,null,null);e.default=o.exports},function(t,e){},function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});e.default={data:function(){return{title:"我要查物流",qrCode:"",statusArray:[],history:[],showJqMask:!1,test:""}},components:{},onLoad:function(){},onShow:function(){this.getClipboardVal(),t.getStorageSync("historyArr")&&(this.history=t.getStorageSync("historyArr"),this.history.length>10&&(this.history=this.history.splice(0,10)))},methods:{scanCodeFn:function(){var e=this;t.scanCode({success:function(s){t.showToast({title:"快递单号："+s.result,duration:2e3,icon:"none"}),e.qrCode=s.result,e.searchFn()}})},searchFn:function(){if(!this.qrCode)return t.showToast({title:"请输入快递单号",icon:"none",duration:2e3}),!1;t.navigateTo({url:"/pages/detail/detail?code="+this.qrCode}),this.qrCode=""},callPhone:function(e){t.makePhoneCall({phoneNumber:e})},checkExpress:function(e){this.showJqMask=!1,t.navigateTo({url:"/pages/detail/detail?code="+e}),this.qrCode="",t.setClipboardData({data:"",success:function(){}})},cancelJqMask:function(){this.showJqMask=!1,this.qrCode=""},getClipboardVal:function(){var e=this;t.getClipboardData({success:function(t){/^[0-9]{12,13}$|^[0-9]{12}$|^[0-9]{13}$|^[0-9]{12}$|^[A-Za-z0-9]{11,14}$|^[0-9]{9,12}$|^[0-9]{10,14}$|^[A-Za-z0-9]{10,13}$|^[0-9]{8,11}$|^[0-9]{11,12}$|^[0-9]{10,12}$|^[0-9]{10}$|^[A-Za-z0-9]{7,22}$|^[0-9]{9,10}$|^[A-Za-z0-9]{8,20}$|^[A-Za-z0-9]{12}$|^[0-9]{10}$|^[0-9]{10,12}$|^[0-9]{10,12}$|^[A-Za-z0-9]{7,20}$|^[A-Za-z0-9]{8,20}$|^[0-9]{9}$|^[A-Za-z0-9]{10,20}$|^[a-z-A-Z]{2}[0-9]{9}[a-z-A-Z]{2}$|^[A-Za-z0-9]{5,10}$|^[0-9]{12}$|^[0-9]{10}$|^[0-9]{8}$|^[0-9]{12}$|^[0-9]{10,12}$|^[A-Za-z0-9]{10,20}$|^[0-9]{10}$|^[A-Za-z0-9]{8,20}$|^(500)[0-9]{6}$|^[A-Za-z0-9]{8,11}$|^[A-Za-z0-9]{8,20}$|^[A-Za-z0-9]{7,20}$|^[0-9]{7}$|^[0-9]{9}$|^[0-9]{10}$|^[A-Za-z0-9]{8,20}$|^[A-Za-z0-9]{5,20}$|^[0-9]{12}$|^[0-9]{10}$|^(316)[A-Za-z][0-9]{9}$|^[A-Za-z0-9]{9,20}$/.test(t.data)&&(e.qrCode=t.data,e.showJqMask=!0)}})}}}}).call(e,s(3).default)},function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"express"},[s("image",{staticClass:"express-logo",attrs:{src:"../../static/images/logo.png",mode:"aspectFit"}}),s("view",{staticClass:"express-input-module"},[s("text",{staticClass:"express-input-text"},[t._v("快递单号：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.qrCode,expression:"qrCode"}],staticClass:"uni-input express-input-val",attrs:{type:"text","confirm-type":"search",placeholder:"请输入快递单号",eventid:"af1-0"},domProps:{value:t.qrCode},on:{input:function(e){e.target.composing||(t.qrCode=e.target.value)}}}),s("image",{staticClass:"express-input-qr",attrs:{src:"../../static/images/ss-icon.png",mode:"aspectFit",eventid:"LDa-1"},on:{click:t.scanCodeFn}})]),s("button",{staticClass:"express-button",attrs:{type:"primary",eventid:"2xU-2"},on:{click:t.searchFn}},[t._v("查询")]),t.history.length?s("view",{staticClass:"express-history"},[s("text",{staticClass:"express-history-title"},[t._v("查询记录")]),s("view",{staticClass:"express-history-model"},t._l(t.history,function(e,a){return s("view",{key:a,staticClass:"express-history-item",attrs:{eventid:"CXn-3-"+a},on:{click:function(s){t.checkExpress(e.number)}}},[s("view",{staticClass:"express-history-wrap1"},[s("image",{staticClass:"express-history-img",attrs:{mode:"aspectFit",src:"https://cdn.kuaidi100.com/images/all/56/"+e.codeName+".png"}}),s("view",[s("text",{staticClass:"express-history-company"},[t._v(t._s(e.name))]),s("text",{staticClass:"express-history-number"},[t._v("快递单号："+t._s(e.number))])])])])}))]):t._e(),t.showJqMask?s("view",{staticClass:"express-jq"},[s("view",{staticClass:"express-jq-content"},[s("text",{staticClass:"express-jq-title1"},[t._v("查询剪贴板的单号")]),s("text",{staticClass:"express-jq-title2"},[t._v(t._s(t.qrCode))]),s("view",{staticClass:"express-jq-action"},[s("text",{staticClass:"express-jq-cancel",attrs:{eventid:"NmE-4"},on:{click:t.cancelJqMask}},[t._v("取消")]),s("text",{staticClass:"express-jq-right",attrs:{eventid:"Bbr-5"},on:{click:function(e){t.checkExpress(t.qrCode)}}},[t._v("确定")])])])]):t._e(),s("input",{attrs:{type:"button",onclick:"startRecognize()",value:"创建扫码控件"}}),s("input",{attrs:{type:"button",onclick:"startScan()",value:"开始扫码"}}),s("input",{attrs:{type:"button",onclick:"cancelScan()",value:"取消扫码"}}),s("input",{attrs:{type:"button",onclick:"setFlash()",value:"开启闪光灯"}}),s("div",{attrs:{id:"bcid"}}),s("input",{attrs:{type:"text",id:"text"}})],1)},staticRenderFns:[]};e.a=a}],[10]);
});
require('pages/index/index.js');
__wxRoute = 'pages/detail/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/detail/detail.js';

define('pages/detail/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],[,,,,,,,,,,,,,,,function(e,t,a){"use strict";var i=o(a(2)),r=o(a(16));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(r.default))},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(18),r=a.n(i),o=a(20);var n=function(e){a(17)},l=a(0)(r.a,o.a,n,null,null);t.default=l.exports},function(e,t){},function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i,r=a(19),o=(i=r)&&i.__esModule?i:{default:i};t.default={data:function(){return{statusArray:[],qrCode:"",name:"",context:"",historyArr:[],prevHistory:[],flag:!1,noDataFlag:!1}},components:{},onLoad:function(t){var a=this;e.getStorage({key:"historyArr",success:function(e){a.prevHistory=e.data}}),this.qrCode=t.code,this.qrCode&&this.searchFn()},methods:{searchFn:function(){var t=this;this.statusArray=[],e.request({url:"https://express.xiaoyaozhan.com/express/",method:"GET",data:{text:this.qrCode},header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var i=a.data,r=t;t.flag=!0,"ok"===i.message?(i.data.map(function(e){e.context.match(/\d{11}/)&&(t.phone=e.context.match(/\d{11}/)[0],e.phoneNumber=e.context.match(/\d{11}/)[0],e.context=e.context.replace(/\d{11}/,"")),r.statusArray.push(e)}),r.statusArray.length&&(r.context=r.statusArray[0].context),i.com&&o.default.map(function(e){if(e.code===i.com)return r.codeName=e.code,r.name=e.companyname,!1}),r.statusArray.length>0&&r.flag&&(r.statusArray[0].name=r.name,r.statusArray[0].codeName=r.codeName,r.statusArray[0].number=r.qrCode,r.prevHistory.length>0?(r.prevHistory.map(function(e,t){e.number===r.qrCode&&r.prevHistory.splice(t,1)}),r.prevHistory.unshift(r.statusArray[0]),r.historyArr=r.prevHistory):r.historyArr.push(r.statusArray[0]),e.setStorage({key:"historyArr",data:r.historyArr})),t.noDataFlag=!1):(e.showToast({duration:2e3,icon:"none",title:"查询不到该快递单号信息"}),t.flag=!1,t.noDataFlag=!0)}})},callPhone:function(t){e.makePhoneCall({phoneNumber:t})}}}}).call(t,a(3).default)},function(e,t,a){"use strict";e.exports=[{cid:"5",id:"1",companyname:"申通快递",shortname:"申通",tel:"95543",url:"st",code:"shentong",hasvali:0,comurl:"http://www.sto.cn",isavailable:"0",promptinfo:"系统升级，请到申通官网查询",testnu:"229855869255",freg:"^[0-9]{12,13}$",freginfo:"申通单号由12位数字组成，常见以268*、368*、58*等开头",telcomplaintnum:"95543",queryurl:"http://www.sto.cn/web%20select.asp",serversite:"http://www.kuaidi100.com/network/province_5.htm"},{cid:"9",id:"2",companyname:"EMS",shortname:"EMS",tel:"11183",url:"ems",code:"ems",hasvali:0,comurl:"http://www.ems.com.cn/",isavailable:"0",promptinfo:"",testnu:"5116741128399",freg:"",freginfo:"13位纯数字或者开头和结尾各2位字母中间9位数字",telcomplaintnum:"11183",queryurl:"http://www.11183.com.cn/ems/order/singleQuery_t?mailNum=",serversite:""},{cid:"10",id:"3",companyname:"顺丰速运",shortname:"顺丰",tel:"95338",url:"sf",code:"shunfeng",hasvali:0,comurl:"http://www.sf-express.com",isavailable:"0",promptinfo:"",testnu:"976186294981",freg:"^[0-9]{12}$",freginfo:"顺丰单号由12位数字组成，常以电话区号后3位开头",telcomplaintnum:"0755-83151111",queryurl:"http://www.sf-express.com/cn/sc/delivery_step/enquiry/coverageArea.html",serversite:"http://www.kuaidi100.com/network/province_10.htm"},{cid:"2",id:"4",companyname:"韵达快递",shortname:"韵达",tel:"95546",url:"yd",code:"yunda",hasvali:0,comurl:"http://www.yundaex.com",isavailable:"0",promptinfo:"",testnu:"1201875063322",freg:"^[0-9]{13}$",freginfo:"韵达单号由13位数字组成",telcomplaintnum:"95546",queryurl:"http://ykjcx.yundasys.com/go.php?wen=",serversite:"http://www.kuaidi100.com/network/province_2.htm"},{cid:"4",id:"5",companyname:"圆通速递",shortname:"圆通",tel:"95554",url:"yt",code:"yuantong",hasvali:0,comurl:"http://www.ytoexpress.com/",isavailable:"0",promptinfo:"",testnu:"881443775034378914",freg:"",freginfo:"圆通单号由10位字母数字组成，常见以6*、8*及V*等开头",telcomplaintnum:"95554",queryurl:"http://www.ytoexpress.com/",serversite:"http://www.kuaidi100.com/network/province_4.htm"},{cid:"3",id:"6",companyname:"中通快递",shortname:"中通",tel:"95311",url:"zt",code:"zhongtong",hasvali:0,comurl:"http://www.zto.cn",isavailable:"0",promptinfo:"",testnu:"768404530475",freg:"^[0-9]{12}$",freginfo:"中通单号由12位数字组成，常见以2008**、6**、010等开头",telcomplaintnum:"95311",queryurl:"http://www.zto.cn/SiteInfo/index.aspx",serversite:"http://www.kuaidi100.com/network/province_3.htm"},{cid:"6",id:"7",companyname:"百世快递",shortname:"汇通",tel:"4009 565656",url:"htky",code:"huitongkuaidi",hasvali:0,comurl:"http://www.800bestex.com/",isavailable:"0",promptinfo:"",testnu:"280490671426",freg:"^[A-Za-z0-9]{11,14}$",freginfo:"百世快递单号由12-14位数字字母组成，常见以50*开头",telcomplaintnum:"4009 565656",queryurl:"http://www.800bestex.com/",serversite:"http://www.kuaidi100.com/network/province_6.htm"},{cid:"7",id:"8",companyname:"天天快递",shortname:"天天",tel:"400-188-8888",url:"tt",code:"tiantian",hasvali:0,comurl:"http://www.ttkdex.com",isavailable:"0",promptinfo:"",testnu:"580239318951",freg:"",freginfo:"天天单号由12或14位数字组成，常见以6**、5*、00*等开头",telcomplaintnum:"400-188-8888",queryurl:"http://www.ttkdex.com/ttkdweb/webdistributed/WebBranchInfo.html",serversite:"http://www.kuaidi100.com/network/province_7.htm"},{cid:"12",id:"9",companyname:"宅急送",shortname:"宅急送",tel:"400-6789-000",url:"zjs",code:"zhaijisong",hasvali:0,comurl:"http://www.zjs.com.cn",isavailable:"0",promptinfo:"",testnu:"5977596855",freg:"",freginfo:"宅急送单号由10位数字组成，常见以7**、6**、5**等开头",telcomplaintnum:"400-6789-000",queryurl:"http://www.zjs.com.cn/WS_Business/WS_Bussiness_CityArea.aspx?id=6",serversite:"http://www.kuaidi100.com/network/province_12.htm"},{cid:"29",id:"10",companyname:"鑫飞鸿",shortname:"鑫飞鸿",tel:"021-69781999",url:"xfh",code:"xinhongyukuaidi",hasvali:0,comurl:"http://www.kuaidi100.com/all/xfh.shtml",isavailable:"0",promptinfo:"",testnu:"9494396730",freg:"",freginfo:"鑫飞鸿快递单号一般是由10位数字组成",telcomplaintnum:"tousu@u-link.org",queryurl:"",serversite:""},{cid:"143",id:"11",companyname:"CCES/国通快递",shortname:"CCES",tel:"400-111-1123",url:"cces",code:"cces",hasvali:0,comurl:"http://www.gto365.com",isavailable:"0",promptinfo:"",testnu:"3117726784",freg:"",freginfo:"常见的CCES单号由10位数字组成",telcomplaintnum:"400-111-1123",queryurl:"http://www.gto365.com",serversite:"http://www.kuaidi100.com/network/province_20.htm"},{cid:"30",id:"12",companyname:"全一快递",shortname:"全一",tel:"400-663-1111",url:"qy",code:"quanyikuaidi",hasvali:0,comurl:"http://www.unitop-apex.com/",isavailable:"0",promptinfo:"",testnu:"112268199514",freg:"^[0-9]{9,12}$",freginfo:"旧的为9位数字，被DHL合并后的中外运全一为12位数字",telcomplaintnum:"021-52695805",queryurl:"http://www.unitop-apex.com/",serversite:"http://www.unitop-apex.com/networkquery.aspx"},{cid:"31",id:"13",companyname:"彪记快递",shortname:"彪记",tel:"+886 (02) 2562-3533",url:"bj",code:"biaojikuaidi",hasvali:null,comurl:"http://www.pewkee.com",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:"http://www2.pewkee.com/pewkee/gb2-pewkee/gb2-global_2.php"},{cid:"16",id:"14",companyname:"星晨急便",shortname:"星晨急便",tel:"",url:"xcjb",code:"xingchengjibian",hasvali:1,comurl:"",isavailable:"0",promptinfo:"",testnu:"7038029040",freg:"^[0-9]{10,14}$",freginfo:"星辰急便单号查询编码由10或14位数字组成",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"32",id:"15",companyname:"亚风速递",shortname:"亚风",tel:"4001-000-002",url:"yfsd",code:"yafengsudi",hasvali:0,comurl:"http://www.airfex.net/",isavailable:"0",promptinfo:"",testnu:"50049680024",freg:"^[A-Za-z0-9]{10,13}$",freginfo:"亚风正确的单号由10位数字组成或以字母开头13位组成，常见已常见以59开头或BAT开头",telcomplaintnum:"400-1000-002",queryurl:"",serversite:"http://www.airfex.net/"},{cid:"33",id:"16",companyname:"源伟丰",shortname:"源伟丰",tel:"400-601-2228",url:"ywf",code:"yuanweifeng",hasvali:null,comurl:"http://www.ywfex.com",isavailable:"1",promptinfo:"",testnu:"27458907",freg:"^[0-9]{8,11}$",freginfo:"常见的源伟丰快递单号查询码一般为8-11的纯数字",telcomplaintnum:"0769-81515303、0769-81515300",queryurl:"",serversite:"http://www.ywfex.com/site_search.jsp"},{cid:"25",id:"17",companyname:"全日通",shortname:"全日通",tel:"020-86298999",url:"qrt",code:"quanritongkuaidi",hasvali:0,comurl:"http://www.at-express.com/",isavailable:"0",promptinfo:"",testnu:"660000000000",freg:"^[0-9]{11,12}$",freginfo:"全日通物流单号由区号+数字的12位数字编码组成",telcomplaintnum:"",queryurl:"http://www.at-express.com/servicesarea.html",serversite:"http://www.at-express.com:8080/servicesarea.html"},{cid:"34",id:"18",companyname:"安信达",shortname:"安信达",tel:"400-716-1919",url:"axd",code:"anxindakuaixi",hasvali:0,comurl:"http://www.axdkd.com",isavailable:"0",promptinfo:"",testnu:"201000000000",freg:"^[0-9]{10,12}$",freginfo:"常见的安信达单号由10、12位数字组成",telcomplaintnum:"400-716-1919",queryurl:"http://www.axdkd.com",serversite:"http://www.axdkd.com/index.php?m=content&c=index&a=lists&catid=27"},{cid:"35",id:"19",companyname:"民航快递",shortname:"民航",tel:"400-817-4008",url:"mh",code:"minghangkuaidi",hasvali:0,comurl:"http://www.cae.com.cn",isavailable:"0",promptinfo:"",testnu:"CAE571402125",freg:"",freginfo:"单号通常是以CAE开头的12位英文+数字",telcomplaintnum:"",queryurl:"",serversite:"http://www.cae.com.cn/infodetailshow.aspx?m=20090225165413640027"},{cid:"144",id:"20",companyname:"凤凰快递",shortname:"凤凰",tel:"010-85826200",url:"fhkd",code:"fenghuangkuaidi",hasvali:null,comurl:"http://www.phoenixexp.com",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"36",id:"21",companyname:"京广速递",shortname:"京广",tel:"0769-88629888",url:"jgsd",code:"jinguangsudikuaijian",hasvali:0,comurl:"http://www.szkke.com/",isavailable:"0",promptinfo:"",testnu:"6600285956",freg:"^[0-9]{10}$",freginfo:"京广速递查询单号一般是由10位数字组成",telcomplaintnum:"0769-88629888",queryurl:"",serversite:"http://www.szkke.com/"},{cid:"340",id:"22",companyname:"配思货运",shortname:"配思",tel:"010-65489928,65489571,65489469,65489456",url:"pshy",code:"peisihuoyunkuaidi",hasvali:null,comurl:"http://www.peisi.cn",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:"http://www.peisi.cn/www/wangdian.asp"},{cid:"37",id:"23",companyname:"中铁物流",shortname:"中铁",tel:"400-000-5566",url:"ztwl",code:"ztky",hasvali:0,comurl:"http://www.ztky.com ",isavailable:"0",promptinfo:"",testnu:"6093086672",freg:"",freginfo:"中铁物流的单号一般由字母或数字组成",telcomplaintnum:"400-650-1118",queryurl:"http://www.ztky.com ",serversite:"http://www.ztky.com/custom/khzq_yywd.aspx"},{cid:"38",id:"24",companyname:"UPS",shortname:"UPS",tel:"400-820-8388",url:"ups",code:"ups",hasvali:0,comurl:"http://www.ups.com/cn",isavailable:"0",promptinfo:"",testnu:"1ZA0F8536742316738",freg:"^[A-Za-z0-9]{7,22}$",freginfo:"标准编码为7到20位数之间的数字，或字母+数字",telcomplaintnum:"800-820-8388",queryurl:"",serversite:"http://www.ups.com/content/cn/zh/locations/dropoff/index.html?WT.svl=PNRO_L1"},{cid:"146",id:"25",companyname:"FedEx-国际件",shortname:"FedEx",tel:"400-886-1888",url:"fedex",code:"fedex",hasvali:0,comurl:"http://fedex.com/cn",isavailable:"0",promptinfo:"",testnu:"9261299995865837450409",freg:"",freginfo:"FedEx-国际单号是由12位纯数字组成",telcomplaintnum:"800-988-1888",queryurl:"",serversite:"http://www.fedex.com/cn/dropoff"},{cid:"40",id:"27",companyname:"DHL-中国件",shortname:"DHL",tel:"800-810-8000",url:"dhl",code:"dhl",hasvali:0,comurl:"http://www.cn.dhl.com",isavailable:"0",promptinfo:"",testnu:"3244675836",freg:"",freginfo:"dhl快递单号由10位或12位纯数字组成",telcomplaintnum:"",queryurl:"",serversite:"http://www.cn.dhl.com/apps/FindCenter/dhldropoff.html"},{cid:"41",id:"28",companyname:"AAE-中国件",shortname:"AAE",tel:"400-610-0400",url:"aae",code:"aae",hasvali:0,comurl:"http://cn.aaeweb.com",isavailable:"0",promptinfo:"",testnu:"4000010055",freg:"^[0-9]{9,10}$",freginfo:"AAE-中国单号是由9位或10位纯数字组成，常以10*、86*开头",telcomplaintnum:"",queryurl:"",serversite:"http://cn.aaeweb.com/network"},{cid:"147",id:"29",companyname:"大田物流",shortname:"大田",tel:"400-626-1166",url:"dtwl",code:"datianwuliu",hasvali:0,comurl:"http://www.dtw.com.cn",isavailable:"0",promptinfo:"",testnu:"6137971090",freg:"^[A-Za-z0-9]{8,20}$",freginfo:"大田物流单号一般是由以6*开头10位纯数字组成",telcomplaintnum:"",queryurl:"",serversite:"http://www.dtw.com.cn/chn/kit/network.htm"},{cid:"1",id:"30",companyname:"德邦物流",shortname:"德邦",tel:"95353",url:"dbwl",code:"debangwuliu",hasvali:0,comurl:"http://www.deppon.com",isavailable:"0",promptinfo:"",testnu:"230624798",freg:"",freginfo:"德邦的货运单号现在是以1或2开头的8位数字组成",telcomplaintnum:"",queryurl:"http://www.deppon.com/wangdian/",serversite:""},{cid:"13",id:"31",companyname:"新邦物流",shortname:"新邦",tel:"4008-000-222",url:"xbwl",code:"xinbangwuliu",hasvali:0,comurl:"http://www.xbwl.cn",isavailable:"0",promptinfo:"",testnu:"0005698",freg:"",freginfo:"新邦物流查询单号一般0开头由8位纯数字组成的",telcomplaintnum:"",queryurl:"http://www.xbwl.cn/NewNetSite.aspx",serversite:""},{cid:"24",id:"32",companyname:"龙邦速递",shortname:"龙邦",tel:"021-59218889",url:"lb",code:"longbanwuliu",hasvali:0,comurl:"http://www.lbex.net",isavailable:"0",promptinfo:"",testnu:"888305364377",freg:"^[A-Za-z0-9]{12}$",freginfo:"由12位数字组成，常见以16*开头，也有字母开头的",telcomplaintnum:"021-59218889",queryurl:"http://122.225.104.195:8089/SearchPaiSongWeb1/index.jsp",serversite:"http://www.lbex.net/site/index.jsp"},{cid:"121",id:"33",companyname:"一邦速递",shortname:"一邦",tel:"000-000-0000",url:"yb",code:"yibangwuliu",hasvali:0,comurl:"http://www.ebon-express.com",isavailable:"1",promptinfo:"快递公司官网已经关闭",testnu:"2240847902",freg:"^[0-9]{10}$",freginfo:"一邦快递单号查询编码由10位数字组合，常见已80*开头",telcomplaintnum:"",queryurl:"",serversite:"http://www.ebon-express.com/wangdian/wangdian!province.action?show=0"},{cid:"11",id:"34",companyname:"速尔快递",shortname:"速尔",tel:"400-158-9888",url:"sewl",code:"suer",hasvali:0,comurl:"http://www.sure56.com",isavailable:"0",promptinfo:"",testnu:"880118395483",freg:"^[0-9]{10,12}$",freginfo:"速尔的快递单号由12位数字组成的",telcomplaintnum:"0769-89339656",queryurl:"http://www.sure56.com/area/service.aspx",serversite:""},{cid:"42",id:"35",companyname:"联昊通",shortname:"联昊通",tel:"0769-88620000",url:"lhtwl",code:"lianhaowuliu",hasvali:0,comurl:"http://www.lhtex.com.cn",isavailable:"0",promptinfo:"",testnu:"231018780470",freg:"^[0-9]{10,12}$",freginfo:"联昊通快递单号由12位或者10位数字编码组成",telcomplaintnum:"0769-88620000,85116666",queryurl:"",serversite:"http://www.lhtex.com.cn/wd.asp"},{cid:"43",id:"36",companyname:"广东邮政",shortname:"广东邮政",tel:"020-38181677",url:"gdyzwl",code:"guangdongyouzhengwuliu",hasvali:null,comurl:"http://www.ep183.cn/",isavailable:"1",promptinfo:"",testnu:"A044813738",freg:"^[A-Za-z0-9]{7,20}$",freginfo:"广东邮政由10位数字和字母组合或者7、8位的纯数字组成",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"44",id:"37",companyname:"中邮物流",shortname:"中邮",tel:"11183",url:"zywl",code:"zhongyouwuliu",hasvali:0,comurl:"http://www.cnpl.com.cn",isavailable:"0",promptinfo:"",testnu:"AA24256934599",freg:"^[A-Za-z0-9]{8,20}$",freginfo:"一般是以A或E开头，字母+数字组成，查询时CNPL无需输入",telcomplaintnum:"",queryurl:"",serversite:"http://www.cnpl.com.cn/itemcontent.jsp?itemId=6"},{cid:"14",id:"38",companyname:"天地华宇",shortname:"华宇",tel:"400-808-6666",url:"tdhy",code:"tiandihuayu",hasvali:0,comurl:"http://www.hoau.net",isavailable:"0",promptinfo:"",testnu:"066169042",freg:"",freginfo:"华宇物流查询单号是由8位数字组成",telcomplaintnum:"400-808-6666",queryurl:"http://www.hoau.net/",serversite:""},{cid:"148",id:"39",companyname:"盛辉物流",shortname:"盛辉",tel:"4008-222-222",url:"sh",code:"shenghuiwuliu",hasvali:0,comurl:"http://www.shenghui56.com",isavailable:"0",promptinfo:"",testnu:"238117137",freg:"^[0-9]{9}$",freginfo:"盛辉物流单号由9位数字编码组成",telcomplaintnum:"4008-222-222",queryurl:"",serversite:"http://www.shenghui56.com/list-4.html"},{cid:"149",id:"40",companyname:"长宇物流",shortname:"长宇",tel:"4007-161-262",url:"cywl",code:"changyuwuliu",hasvali:null,comurl:"http://61.145.121.47/custSearch.jsp",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:"http://www.cyexp.com/Guide3.asp"},{cid:"45",id:"41",companyname:"飞康达",shortname:"飞康达",tel:"010-84223376,84223378",url:"fkd",code:"feikangda",hasvali:0,comurl:"http://www.fkd.com.cn",isavailable:"0",promptinfo:"",testnu:"500054166104",freg:"",freginfo:"飞康达单号查询编码大多以8开头，一般由11位的数字组成",telcomplaintnum:"",queryurl:"",serversite:"http://www.fkd.com.cn/network.asp?id=1"},{cid:"46",id:"42",companyname:"元智捷诚",shortname:"元智捷诚",tel:"400-081-2345",url:"yzjc",code:"yuanzhijiecheng",hasvali:0,comurl:"http://www.yjkd.com",isavailable:"0",promptinfo:"",testnu:"XF012180287",freg:"^[A-Za-z0-9]{10,20}$",freginfo:"元智快递查询单号一般以FD开头，由最多11位数字+字母形式组成",telcomplaintnum:"400-08-12345",queryurl:"",serversite:"http://www.yjkd.com/wd/wangdian.asp"},{cid:"47",id:"43",companyname:"邮政包裹/平邮",shortname:"邮政国内",tel:"11185",url:"yzgn",code:"youzhengguonei",hasvali:0,comurl:"http://yjcx.chinapost.com.cn",isavailable:"0",promptinfo:"",testnu:"9610005849243",freg:"",freginfo:"邮政单号以字母开头+11位数字，常见KA、SB等开头",telcomplaintnum:"11185",queryurl:"",serversite:""},{cid:"48",id:"44",companyname:"国际包裹",shortname:"邮政国际",tel:"11185",url:"yzgj",code:"youzhengguoji",hasvali:0,comurl:"http://intmail.183.com.cn/",isavailable:"0",promptinfo:"",testnu:"CK035278885DE",freg:"^[a-z-A-Z]{2}[0-9]{9}[a-z-A-Z]{2}$",freginfo:"由13位字母和数字组成，开头和结尾是字母，中间是数字 ",telcomplaintnum:"11185",queryurl:"",serversite:""},{cid:"49",id:"45",companyname:"万家物流",shortname:"万家",tel:"4001-156-561",url:"wjwl",code:"wanjiawuliu",hasvali:0,comurl:"http://www.manco-logistics.com/",isavailable:"0",promptinfo:"",testnu:"SJ0407976",freg:"",freginfo:"万家物流单号查询编码通常是由城市编码(英文)+7位数字组成",telcomplaintnum:"021-60448911",queryurl:"http://www.manco-logistics.com/cargosearch.jsp",serversite:"http://www.manco-logistics.com/"},{cid:"188",id:"46",companyname:"远成物流",shortname:"远成",tel:"400-820-1646",url:"ycwl",code:"yuanchengwuliu",hasvali:0,comurl:"http://www.ycgwl.com/",isavailable:"0",promptinfo:"",testnu:"0016058401",freg:"^[A-Za-z0-9]{5,10}$",freginfo:"远成物流查询单号一般是以00开头，由最多10位的数字组成",telcomplaintnum:"400-820-1646",queryurl:"",serversite:"http://www.ycgwl.com/map.asp"},{cid:"50",id:"47",companyname:"信丰物流",shortname:"信丰",tel:"400-830-6333",url:"xfwl",code:"xinfengwuliu",hasvali:0,comurl:"http://www.xf-express.com.cn",isavailable:"0",promptinfo:"",testnu:"137441402465",freg:"^[0-9]{12}$",freginfo:"信丰快递正确的单号由12位纯数字组成，常见已139*开头",telcomplaintnum:"4008 306 333、0769-81518333",queryurl:"",serversite:"http://www.xf-express.com.cn/showarea.aspx?pid=-1=-1"},{cid:"51",id:"48",companyname:"文捷航空",shortname:"文捷",tel:"020-88561502,85871501,31683301",url:"wjhk",code:"wenjiesudi",hasvali:null,comurl:"http://www.wjexpress.com",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"020-36680069、020-86372740、020-88561502",queryurl:"",serversite:""},{cid:"52",id:"49",companyname:"全晨快递",shortname:"全晨",tel:"0769-82026703",url:"qckd",code:"quanchenkuaidi",hasvali:0,comurl:"http://www.qckd.net/",isavailable:"0",promptinfo:"",testnu:"3086275236",freg:"^[0-9]{10}$",freginfo:"全晨单号由10位数字编码组成",telcomplaintnum:"0769-82026701/82026703",queryurl:"",serversite:"http://www.qckd.net/services.asp"},{cid:"53",id:"50",companyname:"佳怡物流",shortname:"佳怡",tel:"400-631-9999",url:"jywl",code:"jiayiwuliu",hasvali:0,comurl:"http://www.jiayi56.com/",isavailable:"0",promptinfo:"",testnu:"37172798",freg:"^[0-9]{8}$",freginfo:"佳怡物流查询单号一般是由8位数字组成",telcomplaintnum:"400-631-9999",queryurl:"",serversite:"http://www.jiayi56.com/products_index.html"},{cid:"17",id:"51",companyname:"优速物流",shortname:"优速",tel:"400-1111-119",url:"yskd",code:"youshuwuliu",hasvali:0,comurl:"http://www.uc56.com",isavailable:"0",promptinfo:"",testnu:"518110315363",freg:"",freginfo:"优速单号由12位数字组成，LP开头的不是优速快递单号",telcomplaintnum:"400-1111-119",queryurl:"http://www.uc56.com/Chinese/UC56ServiceArea.aspx",serversite:"http://www.uc56.com/Chinese/ServiceNetwork.aspx"},{cid:"18",id:"52",companyname:"快捷速递",shortname:"快捷",tel:"4008-333-666",url:"kjkd",code:"kuaijiesudi",hasvali:0,comurl:"http://www.kjkd.com/",isavailable:"0",promptinfo:"",testnu:"536084760465",freg:"",freginfo:"快捷常见单号有13位纯数字组成",telcomplaintnum:"4008333666",queryurl:"http://www.kjkd.com/",serversite:"http://www.kjkd.com/"},{cid:"28",id:"53",companyname:"D速快递",shortname:"D速",tel:"0531-88636363",url:"dskd",code:"dsukuaidi",hasvali:0,comurl:"http://www.d-exp.cn",isavailable:"0",promptinfo:"",testnu:"316J074253086",freg:"",freginfo:"常见的单号以DS开头+9位纯数字+CN结尾共13位",telcomplaintnum:"0531-88626262",queryurl:"",serversite:"http://www.d-exp.cn/Branch/China.aspx"},{cid:"54",id:"54",companyname:"全际通",shortname:"全际通",tel:"400-0179-888",url:"qjt",code:"quanjitong",hasvali:0,comurl:"http://www.quanjt.com",isavailable:"0",promptinfo:"",testnu:"750000000000",freg:"^[0-9]{12}$",freginfo:"全际通物流单号由区号+数字的12位数字编码组成",telcomplaintnum:"021-62966050",queryurl:"",serversite:"http://www.quanjt.com/fuwu/fuwu.do"},{cid:"19",id:"55",companyname:"能达速递",shortname:"能达",tel:"400-6886-765",url:"ndkd",code:"ganzhongnengda",hasvali:0,comurl:"http://www.nd56.com/",isavailable:"0",promptinfo:"",testnu:"886000130608",freg:"^[0-9]{10,12}$",freginfo:"港中能达单号一般以88开头的12位或10位数字",telcomplaintnum:"400-6886-765",queryurl:"http://www.nd56.com/",serversite:"http://www.kuaidi100.com/network/province_19.htm"},{cid:"55",id:"56",companyname:"青岛安捷快递",shortname:"安捷",tel:"400-056-5656",url:"ajkd",code:"anjiekuaidi",hasvali:0,comurl:"http://www.anjelex.com",isavailable:"1",promptinfo:"",testnu:"AN23733449",freg:"^[A-Za-z0-9]{10,20}$",freginfo:"常见的安捷单号由AN+开头8位数字或者12、13位纯数字组成",telcomplaintnum:"4000565656",queryurl:"",serversite:"http://www.anjelex.com/kuaidi.asp"},{cid:"150",id:"57",companyname:"越丰物流",shortname:"越丰",tel:"852-23909969",url:"yfwl",code:"yuefengwuliu",hasvali:0,comurl:"http://www.yfexpress.com.hk",isavailable:"0",promptinfo:"",testnu:"3001941084",freg:"^[0-9]{10}$",freginfo:"常见的越丰物流查询单号编码由10纯数字组成，常见以80*开头",telcomplaintnum:"852-23909969",queryurl:"",serversite:"http://www.yfexpress.com.hk/service.php"},{cid:"56",id:"58",companyname:"DPEX",shortname:"DPEX",tel:"400-920-7011/800-820-7011",url:"dpex",code:"dpex",hasvali:0,comurl:"https://www.dpex.com/",isavailable:"0",promptinfo:"",testnu:"573006666956",freg:"^[A-Za-z0-9]{8,20}$",freginfo:"DPEX快递查询单号通常以5开头，由12位数字组成，部分dpex国际快递有13位数",telcomplaintnum:"400-920-7011/800-820-7011",queryurl:"",serversite:""},{cid:"151",id:"59",companyname:"急先达",shortname:"急先达",tel:"021-59766363",url:"jxd",code:"jixianda",hasvali:0,comurl:"http://www.joust.net.cn/",isavailable:"0",promptinfo:"",testnu:"500617727",freg:"^(500)[0-9]{6}$",freginfo:"急先达单号一般是由以500*开头的9位数字组成",telcomplaintnum:"021-59766363",queryurl:"",serversite:"http://www.joust.cn/Message2.aspx"},{cid:"152",id:"60",companyname:"百福东方",shortname:"百福东方",tel:"400-706-0609",url:"bfdf",code:"baifudongfang",hasvali:0,comurl:"http://www.ees.com.cn",isavailable:"0",promptinfo:"",testnu:"111159484",freg:"",freginfo:"百福东方单号一般是由9位数字组成,常以10开头",telcomplaintnum:"400-706-0609",queryurl:"",serversite:"http://www.ees.com.cn/fuwuwangluo.html"},{cid:"57",id:"61",companyname:"BHT",shortname:"BHT",tel:"010-58633508",url:"bht",code:"bht",hasvali:0,comurl:"http://www.bht-exp.com/",isavailable:"0",promptinfo:"",testnu:"1285539849",freg:"^[A-Za-z0-9]{8,11}$",freginfo:"常见的BHT单号由BHT+开头8位数字或者8位纯数字组成",telcomplaintnum:"010-58633508",queryurl:"",serversite:"http://www.bht-exp.com/iDoc.asp?docID=170"},{cid:"168",id:"62",companyname:"伍圆速递",shortname:"伍圆",tel:"0592—5050535",url:"wy",code:"wuyuansudi",hasvali:null,comurl:"http://www.f5xm.com",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"169",id:"64",companyname:"蓝镖快递",shortname:"蓝镖",tel:"0769-82898999",url:"lanb",code:"lanbiaokuaidi",hasvali:0,comurl:"http://www.bluedart.cn",isavailable:"0",promptinfo:"",testnu:"900000000000",freg:"^[A-Za-z0-9]{8,20}$",freginfo:"蓝镖常见单号以90*开同的13位纯数字组成",telcomplaintnum:"800-988-1888 400-886-1888",queryurl:"",serversite:"http://www.bluedart.cn/p_ser.asp"},{cid:"170",id:"65",companyname:"COE",shortname:"COE",tel:"0755-83575000",url:"coe",code:"coe",hasvali:0,comurl:"http://www.coe.com.hk",isavailable:"0",promptinfo:"",testnu:"610004404886",freg:"",freginfo:"COE单号由10、12位数字组成,常见以区号+8位数字或66+10为数字",telcomplaintnum:"86-755-83575000 ",queryurl:"",serversite:"http://www.coe.com.hk/contact.asp"},{cid:"171",id:"66",companyname:"南京100",shortname:"南京100",tel:"025-84510043",url:"nj",code:"nanjing",hasvali:0,comurl:"http://www.100cskd.com",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"025-84510043 84510044",queryurl:"",serversite:""},{cid:"58",id:"67",companyname:"恒路物流",shortname:"恒路",tel:"400-182-6666",url:"hl",code:"hengluwuliu",hasvali:0,comurl:"http://www.e-henglu.com",isavailable:"0",promptinfo:"",testnu:"01560213",freg:"^[A-Za-z0-9]{7,20}$",freginfo:"恒路物流单号以7-13位的字母加数字组合，常见已8*开头的9位数字单号",telcomplaintnum:"400-182-6666",queryurl:"",serversite:"http://www.e-henglu.com/service_network.htm"},{cid:"172",id:"68",companyname:"金大物流",shortname:"金大",tel:"0755-82262209",url:"jd",code:"jindawuliu",hasvali:0,comurl:"http://www.szkingdom.com.cn",isavailable:"0",promptinfo:"",testnu:"2006785",freg:"^[0-9]{7}$",freginfo:"金大快递正确的单号由7位数字组成",telcomplaintnum:"0755-82262209",queryurl:"",serversite:"http://www.szkingdom.com.cn/Service.asp"},{cid:"173",id:"69",companyname:"华夏龙",shortname:"华夏龙",tel:"400-716-6133",url:"hxl",code:"huaxialongwuliu",hasvali:0,comurl:"http://www.chinadragon56.com",isavailable:"0",promptinfo:"",testnu:"984535",freg:"",freginfo:"华夏龙物流的单号一般由纯数字组成",telcomplaintnum:"400-716-6133 ",queryurl:"",serversite:"http://www.chinadragon56.com/we.aspx?bid=79"},{cid:"59",id:"70",companyname:"运通中港",shortname:"运通",tel:"0769-81156999",url:"ytkd",code:"yuntongkuaidi",hasvali:0,comurl:"http://www.ytkd168.com",isavailable:"0",promptinfo:"",testnu:"657809056",freg:"^[0-9]{9}$",freginfo:"运通通常以61*开头的9位单号",telcomplaintnum:"0769-81156999",queryurl:"",serversite:"http://www.ytkd168.com/Service_search.asp"},{cid:"15",id:"71",companyname:"佳吉快运",shortname:"佳吉",tel:"400-820-5566",url:"jjwl",code:"jiajiwuliu",hasvali:0,comurl:"http://www.jiaji.com",isavailable:"0",promptinfo:"",testnu:"726170665",freg:"",freginfo:"佳吉快运由9位纯数字组成",telcomplaintnum:"400-820-5566",queryurl:"http://www.jiaji.com/website.aspx",serversite:"http://www.kuaidi100.com/network/province_15.htm"},{cid:"120",id:"72",companyname:"盛丰物流",shortname:"盛丰",tel:"0591-83621111",url:"sfwl",code:"shengfengwuliu",hasvali:0,comurl:"http://www.sfwl.com.cn",isavailable:"0",promptinfo:"",testnu:"35147357",freg:"",freginfo:"盛丰物流的单号由字母和数字组成",telcomplaintnum:"0591-83621111",queryurl:"",serversite:"http://www.sfwl.com.cn/sfwl.asp?ClassId=22"},{cid:"174",id:"73",companyname:"源安达",shortname:"源安达",tel:"0769-85157789",url:"yad",code:"yuananda",hasvali:0,comurl:"http://www.yadex.com.cn",isavailable:"0",promptinfo:"",testnu:"75006118366",freg:"",freginfo:"源安达快递单号查询编码一般为11的纯数字组成",telcomplaintnum:"0769-85157789",queryurl:"",serversite:"http://www.yadex.com.cn/station.asp"},{cid:"60",id:"74",companyname:"加运美",shortname:"加运美",tel:"0769-85515555",url:"jymwl",code:"jiayunmeiwuliu",hasvali:0,comurl:"http://www.jym56.cn/",isavailable:"0",promptinfo:"",testnu:"2191409648",freg:"^[0-9]{10}$",freginfo:"加运美快递正确的单号由10位数字组成",telcomplaintnum:"0769-85515555/85166425 ",queryurl:"",serversite:"http://www.tms56.com/fwwdindex.asp"},{cid:"175",id:"75",companyname:"万象物流",shortname:"万象",tel:"400-820-8088",url:"wxwl",code:"wanxiangwuliu",hasvali:0,comurl:"http://www.ewinshine.com",isavailable:"0",promptinfo:"",testnu:"032499209233840",freg:"",freginfo:"万象物流的单号一般由字母和数字组成",telcomplaintnum:"（021）51035766-8062",queryurl:"http://www.ewinshine.com",serversite:""},{cid:"176",id:"76",companyname:"宏品物流",shortname:"宏品",tel:"400-612-1456",url:"hpwl",code:"hongpinwuliu",hasvali:null,comurl:"http://www.hpexpress.com.cn",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"177",id:"77",companyname:"GLS",shortname:"GLS",tel:"877-914-5465",url:"gls",code:"gls",hasvali:0,comurl:"http://www.gls-group.net",isavailable:"1",promptinfo:"",testnu:"93805190173",freg:"",freginfo:"",telcomplaintnum:"877-914-5465",queryurl:"",serversite:"http://www.cn-gls.com/product-inland3.html"},{cid:"178",id:"78",companyname:"上大物流",shortname:"上大",tel:"400-021-9122",url:"shangda",code:"shangda",hasvali:null,comurl:"http://www.sundapost.net",isavailable:"0",promptinfo:"",testnu:"U110173213",freg:"",freginfo:"上大物流的单号一般由数字组成",telcomplaintnum:"400-021-9122",queryurl:"",serversite:"http://www.sundapost.net/cgi-bin/GInfo.dll?DispInfo;w=sundapost;nid=10414"},{cid:"8",id:"79",companyname:"中铁快运",shortname:"中铁",tel:"95572",url:"ztky",code:"zhongtiewuliu",hasvali:0,comurl:"http://www.cre.cn ",isavailable:"0",promptinfo:"",testnu:"K05090731602",freg:"",freginfo:"一般是由字母K或B开头，共14位字母与数字组合",telcomplaintnum:"95572",queryurl:"http://www.cre.cn ",serversite:""},{cid:"61",id:"80",companyname:"原飞航",shortname:"原飞航",tel:"0769-87001100",url:"yfh",code:"yuanfeihangwuliu",hasvali:0,comurl:"http://www.yfhex.com",isavailable:"0",promptinfo:"",testnu:"110000901371",freg:"",freginfo:"原飞航单号由10位数字组成",telcomplaintnum:"0755-29778899 / 29778100",queryurl:"",serversite:"http://www.yfhex.com/Module/Contact/SN_Outlets.aspx"},{cid:"197",id:"81",companyname:"海外环球",shortname:"海外环球",tel:"010-59790107",url:"hwhq",code:"haiwaihuanqiu",hasvali:0,comurl:"http://www.haiwaihuanqiu.com/",isavailable:"0",promptinfo:"",testnu:"10100000000000",freg:"^[A-Za-z0-9]{8,20}$",freginfo:"海外环球常见单号有字母开头的13位数字或者20位纯数字的单号",telcomplaintnum:"010-59790107",queryurl:"",serversite:""},{cid:"191",id:"82",companyname:"三态速递",shortname:"三态",tel:"400-881-8106  ",url:"stsd",code:"santaisudi",hasvali:0,comurl:"http://www.sfcservice.com/",isavailable:"0",promptinfo:"",testnu:"0001354",freg:"^[A-Za-z0-9]{5,20}$",freginfo:"三态常见单号有10位纯数字组成",telcomplaintnum:"400-881-8106",queryurl:"",serversite:""},{cid:"62",id:"83",companyname:"晋越快递",shortname:"晋越",tel:"400-638-9288",url:"jykd",code:"jinyuekuaidi",hasvali:0,comurl:"http://www.byondex.com",isavailable:"0",promptinfo:"",testnu:"501910605146",freg:"",freginfo:"晋越快递的单号一般由12位纯数字组成",telcomplaintnum:"400-638-9288",queryurl:"",serversite:"http://www.byondex.com.cn/ServeNet.Asp"},{cid:"63",id:"85",companyname:"联邦快递",shortname:"联邦",tel:"400-889-1888",url:"lianb",code:"lianbangkuaidi",hasvali:0,comurl:"http://cndxp.apac.fedex.com/dxp.html",isavailable:"0",promptinfo:"",testnu:"120886787472",freg:"^[0-9]{12}$",freginfo:"联邦快递国内单号常见以12*开头12位纯数字组成",telcomplaintnum:"400-889-1888",queryurl:"",serversite:"http://www.fedex.com/cn/dropoff"},{cid:"66",id:"99643",companyname:"飞快达",shortname:"飞快达",tel:"400-716-6666",url:"feikuaida",code:"feikuaida",hasvali:0,comurl:"http://www.fkdex.com",isavailable:"1",promptinfo:"",testnu:"3105201982",freg:"^[0-9]{10}$",freginfo:"飞快达常见单号有10位纯数字组成",telcomplaintnum:"400-716-6666",queryurl:"",serversite:"http://www.fkdex.com:8050/network.asp"},{cid:"23",id:"128693",companyname:"全峰快递",shortname:"全峰",tel:"400-100-0001",url:"qfkd",code:"quanfengkuaidi",hasvali:0,comurl:"http://www.qfkd.com.cn",isavailable:"0",promptinfo:"",testnu:"720193084187",freg:"",freginfo:"全峰快递单号一般由10或者12位数字组成",telcomplaintnum:"",queryurl:"http://www.qfkd.com.cn/quyu.aspx",serversite:"http://www.kuaidi100.com/network/province_23.htm"},{cid:"67",id:"145551",companyname:"如风达",shortname:"如风达",tel:"400-010-6660",url:"rufengda",code:"rufengda",hasvali:0,comurl:"http://www.rufengda.com",isavailable:"0",promptinfo:"",testnu:"6201506740351",freg:"",freginfo:"如风达单号或者是纯数字，或者字母加数字。",telcomplaintnum:"",queryurl:"http://www.rufengda.com",serversite:"http://www.rufengda.com/check/check_network.html"},{cid:"68",id:"158572",companyname:"乐捷递",shortname:"乐捷递",tel:"400-618-1400",url:"lejiedi",code:"lejiedi",hasvali:0,comurl:"http://www.ljd365.com",isavailable:"0",promptinfo:"",testnu:"15082900400001777CDE",freg:"",freginfo:"乐捷递的单号一般由字母和数字组成",telcomplaintnum:"",queryurl:"www.ljd365.com",serversite:"http://www.ljd365.com/fuwucx.asp"},{cid:"69",id:"158573",companyname:"忠信达",shortname:"忠信达",tel:"400-646-6665",url:"zhongxinda",code:"zhongxinda",hasvali:0,comurl:"http://www.zhongxind.cn/index.asp",isavailable:"0",promptinfo:"",testnu:"253120262",freg:"",freginfo:"忠信达快递的单号一般由纯数字组成",telcomplaintnum:"",queryurl:"http://www.zhongxind.cn/index.asp",serversite:"http://www.zhongxind.cn/range.asp"},{cid:"64",id:"225616",companyname:"芝麻开门",shortname:"芝麻开门",tel:"400-105-6056",url:"zhimakaimen",code:"zhimakaimen",hasvali:0,comurl:"http://www.zmkmex.com/ ",isavailable:"0",promptinfo:"",testnu:"2994156174530",freg:"",freginfo:"芝麻开门的单号由数字组成",telcomplaintnum:"400-105-6056",queryurl:"http://www.zmkmex.com/ ",serversite:"http://www.zmkmex.com/Article?id=cbe7ff8cc74b41a0a9d50ae0eaadca58"},{cid:"70",id:"247720",companyname:"赛澳递",shortname:"赛澳递",tel:"4000-345-888",url:"saiaodi",code:"saiaodi",hasvali:0,comurl:"http://www.51cod.com ",isavailable:"0",promptinfo:"",testnu:"JSC101011082067",freg:"",freginfo:"赛澳递是B2C公司的落地配，单号是各落低配的订单号",telcomplaintnum:"4000-345-888",queryurl:"http://www.51cod.com ",serversite:"http://www.51cod.com/network/"},{cid:"71",id:"247731",companyname:"海红网送",shortname:"海红网送",tel:"400-632-9988",url:"haihongwangsong",code:"haihongwangsong",hasvali:0,comurl:"http://www.haihongwangsong.com/index.asp",isavailable:"0",promptinfo:"",testnu:"SD0000236321HH",freg:"",freginfo:"海红网送的单号一般由前后各2位的字母，中间8位纯数字组成",telcomplaintnum:"",queryurl:"http://www.haihongwangsong.com/index.asp",serversite:"http://www.haihongwangsong.com/order.asp"},{cid:"21",id:"257357",companyname:"共速达",shortname:"共速达",tel:"400-111-0005",url:"gongsuda",code:"gongsuda",hasvali:0,comurl:"http://www.gongsuda.com",isavailable:"0",promptinfo:"",testnu:"0005644",freg:"",freginfo:"共速达的单号一般由755开头的11位纯数字组成",telcomplaintnum:"",queryurl:"http://www.gongsuda.com",serversite:"http://www.gongsuda.com/search.aspx"},{cid:"65",id:"259431",companyname:"嘉里大通",shortname:"嘉里大通",tel:"400-610-3188",url:"jialidatong",code:"jialidatong",hasvali:0,comurl:"http://www.kerryeas.com",isavailable:"0",promptinfo:"",testnu:"316A376284420",freg:"^(316)[A-Za-z][0-9]{9}$",freginfo:"嘉里大通的单号一般由13位字母和数字组成",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"192",id:"259443",companyname:"OCS",shortname:"OCS",tel:"400-118-8588",url:"ocs",code:"ocs",hasvali:0,comurl:"http://www.ocschina.com",isavailable:"0",promptinfo:"",testnu:"23012566894",freg:"",freginfo:"OCS国际快递的单号一般由11位纯数字组成",telcomplaintnum:"",queryurl:"http://www.ocschina.com",serversite:"http://www.ocschina.com/office/OfficeMap.aspx"},{cid:"193",id:"259455",companyname:"USPS",shortname:"USPS",tel:"800-275-8777",url:"usps",code:"usps",hasvali:0,comurl:"https://zh.usps.com",isavailable:"0",promptinfo:"",testnu:"LC781413573US",freg:"",freginfo:"USPS单号的记录超过一个月会自动清除",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"194",id:"259467",companyname:"美国快递",shortname:"美国",tel:"888-611-1888",url:"meiguokuaidi",code:"meiguokuaidi",hasvali:0,comurl:"http://www.us-ex.com",isavailable:"0",promptinfo:"",testnu:"US101257404EX",freg:"",freginfo:"美国快递的单号一般由DD开头US结尾，中间9位数字",telcomplaintnum:"",queryurl:"",serversite:"http://www.us-ex.com/ListViewEdit.aspx?ID=65"},{cid:"73",id:"259480",companyname:"成都立即送",shortname:"立即送",tel:"400-028-5666",url:"lijisong",code:"lijisong",hasvali:0,comurl:"http://www.cdljs.com",isavailable:"0",promptinfo:"",testnu:"955730086248",freg:"",freginfo:"立即送的单号由纯数字组成",telcomplaintnum:"400-028-5666",queryurl:"http://www.cdljs.com",serversite:"http://www.cdljs.com/a/yewuyufuwu/yewujieshao/2011/1011/8.html"},{cid:"74",id:"259492",companyname:"银捷速递",shortname:"银捷",tel:"0755-88999000",url:"yinjiesudi",code:"yinjiesudi",hasvali:0,comurl:"www.sjfd-express.com",isavailable:"0",promptinfo:"",testnu:"D150105369641",freg:"",freginfo:"银捷速递的单号一般由9-12位的数字组成，亚马逊的单号以a开头",telcomplaintnum:"",queryurl:"www.sjfd-express.com",serversite:"www.sjfd-express.com"},{cid:"72",id:"259504",companyname:"门对门",shortname:"门对门",tel:"400-700-7676",url:"menduimen",code:"menduimen",hasvali:0,comurl:"http://www.szdod.com",isavailable:"0",promptinfo:"",testnu:"15111673026622",freg:"",freginfo:"门对门是为各B2C配送的落地配，单号是各B2C的订单号",telcomplaintnum:"0512-50169999 ",queryurl:"http://www.szdod.com",serversite:""},{cid:"75",id:"267490",companyname:"递四方",shortname:"递四方",tel:"0755-33933895",url:"disifang",code:"disifang",hasvali:0,comurl:"http://www.4px.com",isavailable:"0",promptinfo:"",testnu:"RF171700114SG",freg:"",freginfo:"递四方的单号一般由前后各2位字母，中间9位数字组成",telcomplaintnum:"",queryurl:"http://www.4px.com",serversite:""},{cid:"76",id:"301203",companyname:"郑州建华",shortname:"郑州建华",tel:"0371-65995266",url:"zhengzhoujianhua",code:"zhengzhoujianhua",hasvali:0,comurl:"http://www.zzjhtd.com/",isavailable:"0",promptinfo:"",testnu:"85203804226",freg:"",freginfo:"郑州建华的单号由字母和数字组成",telcomplaintnum:"0371-65995266/86115588 ",queryurl:"http://www.zzjhtd.com/",serversite:""},{cid:"195",id:"301226",companyname:"河北建华",shortname:"河北建华",tel:"0311-86123186",url:"hebeijianhua",code:"hebeijianhua",hasvali:0,comurl:"http://116.255.133.172/hebeiwebsite/index.jsp",isavailable:"0",promptinfo:"",testnu:"112000000000000000",freg:"",freginfo:"河北建华的单号由字母和数字组成",telcomplaintnum:"0311-85886302",queryurl:"http://116.255.133.172/hebeiwebsite/index.jsp",serversite:""},{cid:"77",id:"301240",companyname:"微特派",shortname:"微特派",tel:"400-6363-000",url:"weitepai",code:"weitepai",hasvali:0,comurl:"http://www.vtepai.com/ ",isavailable:"0",promptinfo:"",testnu:"D661011185417",freg:"",freginfo:"微特派单号一般由数字组成",telcomplaintnum:"400-6363-000",queryurl:"http://www.vtepai.com/ ",serversite:""},{cid:"218",id:"312934",companyname:"DHL-德国件（DHL Deutschland）",shortname:"dhlde",tel:"+49 (0) 180 5 345300-1*",url:"dhlde",code:"dhlde",hasvali:0,comurl:"http://www.dhl.de/en.html",isavailable:"0",promptinfo:"",testnu:"220514910032",freg:"",freginfo:"DHL-德国快递单号一般有12位数字组成",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"219",id:"324832",companyname:"通和天下",shortname:"通和天下",tel:"400-0056-516 ",url:"tonghetianxia",code:"tonghetianxia",hasvali:0,comurl:"http://www.cod56.com",isavailable:"0",promptinfo:"",testnu:"2005761424",freg:"",freginfo:"通和天下的单号一般由200开头的10位数字组成",telcomplaintnum:"400-0056-516 ",queryurl:"http://www.cod56.com",serversite:"http://www.cod56.com/about.asp?id=4"},{cid:"189",id:"335028",companyname:"EMS-国际件",shortname:"EMS-国际件",tel:"11183",url:"emsguoji",code:"emsguoji",hasvali:0,comurl:"http://www.ems.com.cn",isavailable:"0",promptinfo:"",testnu:"BE146871721NL",freg:"",freginfo:"",telcomplaintnum:"11183",queryurl:"http://www.ems.com.cn/mailtracking/cha_xun_lian_jie.html ",serversite:""},{cid:"190",id:"335045",companyname:"FedEx-美国件",shortname:"FedEx",tel:"800-463-3339",url:"fedexus",code:"fedexus",hasvali:0,comurl:"http://www.fedex.com/us/",isavailable:"0",promptinfo:"",testnu:"774905848791",freg:"",freginfo:"fedex美国的单号一般由纯数字组成",telcomplaintnum:"800-463-3339",queryurl:"http://www.fedex.com/us/",serversite:"http://www.fedex.com/us/"},{cid:"78",id:"388549",companyname:"风行天下",shortname:"风行天下",tel:"4000-404-909",url:"fengxingtianxia",code:"fengxingtianxia",hasvali:0,comurl:"http://www.fxtxsy.com",isavailable:"1",promptinfo:"",testnu:"4009055134217",freg:"",freginfo:"风行天下的单号一般由纯数字组成",telcomplaintnum:"13975182167",queryurl:"http://www.fxtxsy.com",serversite:""},{cid:"179",id:"438742",companyname:"康力物流",shortname:"康力",tel:"400-156-5156 ",url:"kangliwuliu",code:"kangliwuliu",hasvali:0,comurl:"http://www.kangliex.com/",isavailable:"0",promptinfo:"",testnu:"1001535569",freg:"",freginfo:"康力物流的单号一般由10位纯数字组成",telcomplaintnum:"400-156-5156 ",queryurl:"http://www.kangliex.com/",serversite:""},{cid:"119",id:"469148",companyname:"跨越速运",shortname:"跨越",tel:"4008-098-098 ",url:"kuayue",code:"kuayue",hasvali:0,comurl:"http://www.ky-express.com/",isavailable:"0",promptinfo:"跨越速运的单号一般有7位纯数字组成",testnu:"4624159",freg:"",freginfo:"跨越速运的单号一般由7位数字组成",telcomplaintnum:"4008-098-098 ",queryurl:"http://www.ky-express.com/",serversite:"http://www.ky-express.com/Chanpin/Default.aspx?article=fuwuwangluo"},{cid:"79",id:"498609",companyname:"海盟速递",shortname:"海盟",tel:"400-080-6369 ",url:"haimengsudi",code:"haimengsudi",hasvali:0,comurl:"http://www.hm-express.com",isavailable:"0",promptinfo:"",testnu:"617098",freg:"",freginfo:"海盟速递的单号一般由10位纯数字组成",telcomplaintnum:"400-080-6369 ",queryurl:"http://www.hm-express.com",serversite:""},{cid:"22",id:"508502",companyname:"圣安物流",shortname:"圣安",tel:"4006-618-169 ",url:"shenganwuliu",code:"shenganwuliu",hasvali:0,comurl:"http://www.sa56.net",isavailable:"0",promptinfo:"",testnu:"8614965",freg:"",freginfo:"圣安物流的单号一般由7开头的7位纯数字组成",telcomplaintnum:"4006-618-169",queryurl:"http://www.sa56.net",serversite:""},{cid:"196",id:"508516",companyname:"一统飞鸿",shortname:"一统飞鸿",tel:"61501533-608",url:"yitongfeihong",code:"yitongfeihong",hasvali:0,comurl:"http://218.97.241.58:8080/yitongfeihongweb/common?action=toindex",isavailable:"0",promptinfo:"",testnu:"214241290",freg:"",freginfo:"",telcomplaintnum:"61501028-608",queryurl:"http://218.97.241.58:8080/yitongfeihongweb/common?action=toi",serversite:"http://218.97.241.58:8080/yitongfeihongweb/servicesaddress.jsp"},{cid:"309",id:"620367",companyname:"中速快递",shortname:"中速",tel:"11183",url:"zhongsukuaidi",code:"zhongsukuaidi",hasvali:0,comurl:"http://www.ems.com.cn/mainservice/ems/zhong_su_guo_ji_kuai_jian.html",isavailable:"0",promptinfo:"",testnu:"CT246590834CN",freg:"",freginfo:"中速快件的单号一般由CT开头CN结尾中间9位数字",telcomplaintnum:"11183",queryurl:"http://www.ems.com.cn/mainservice/ems/zhong_su_guo_ji_kuai_jian.html",serversite:""},{cid:"110",id:"662539",companyname:"新蛋奥硕",shortname:"新蛋奥硕",tel:"400-820-4400",url:"neweggozzo",code:"neweggozzo",hasvali:0,comurl:"http://www.ozzo.com.cn",isavailable:"0",promptinfo:"",testnu:"20643707",freg:"",freginfo:"",telcomplaintnum:"400-820-4400",queryurl:"http://www.ozzo.com.cn",serversite:""},{cid:"111",id:"662553",companyname:"OnTrac",shortname:"OnTrac",tel:"800-334-5000",url:"ontrac",code:"ontrac",hasvali:0,comurl:"http://www.ontrac.com",isavailable:"0",promptinfo:"",testnu:"D10010826799699",freg:"",freginfo:"OnTrac单号一般由字母和数字组成",telcomplaintnum:"800-334-5000",queryurl:"http://www.ontrac.com",serversite:""},{cid:"80",id:"662566",companyname:"七天连锁",shortname:"七天连锁",tel:"400-882-1202",url:"sevendays",code:"sevendays",hasvali:0,comurl:"http://www.92856.cn",isavailable:"0",promptinfo:"",testnu:"6811088969",freg:"",freginfo:"七天连锁物流单号一般由纯数字组成",telcomplaintnum:"400-882-1202",queryurl:"http://www.92856.cn",serversite:"http://www.92856.cn/page/chin/index.php"},{cid:"112",id:"662579",companyname:"明亮物流",shortname:"明亮",tel:"400-035-6568",url:"mingliangwuliu",code:"mingliangwuliu",hasvali:0,comurl:"http://www.szml56.com/",isavailable:"0",promptinfo:"",testnu:"80238530",freg:"",freginfo:"明亮物流的单号由纯数字组成",telcomplaintnum:"13632909217",queryurl:"http://www.szml56.com/",serversite:"http://www.szml56.com/index.php/Map/index/id/205"},{cid:"153",id:"668571",companyname:"凡客配送（作废）",shortname:"凡客",tel:"400-600-6888",url:"vancl",code:"vancl",hasvali:0,comurl:"http://www.vancl.com/",isavailable:"0",promptinfo:"",testnu:"786500075083",freg:"",freginfo:"凡客的订单一般有字母和数字组成",telcomplaintnum:"400-600-6888",queryurl:"",serversite:""},{cid:"187",id:"683545",companyname:"华企快运",shortname:"华企",tel:"400-806-8111",url:"huaqikuaiyun",code:"huaqikuaiyun",hasvali:0,comurl:"13055209678",isavailable:"0",promptinfo:"",testnu:"201000000000",freg:"",freginfo:"",telcomplaintnum:"021-54224687",queryurl:"13055209678",serversite:""},{cid:"81",id:"683546",companyname:"城市100",shortname:"城市100",tel:"400-820-0088",url:"city100",code:"city100",hasvali:0,comurl:"http://www.bjcs100.com/",isavailable:"0",promptinfo:"",testnu:"755730420202",freg:"",freginfo:"",telcomplaintnum:"010-52932770",queryurl:"",serversite:""},{cid:"305",id:"683550",companyname:"红马甲物流",shortname:"红马甲",tel:"0351-5225858",url:"sxhongmajia",code:"sxhongmajia",hasvali:0,comurl:"http://www.hmj.com.cn/",isavailable:"0",promptinfo:"",testnu:"33133243933",freg:"",freginfo:"",telcomplaintnum:"0351- 5225858",queryurl:"http://www.hmj.com.cn/",serversite:"http://www.hmj.com.cn/SinglePage.aspx?typeid=15=43"},{cid:"306",id:"683551",companyname:"穗佳物流",shortname:"穗佳",tel:"400-880-9771",url:"suijiawuliu",code:"suijiawuliu",hasvali:0,comurl:"http://www.suijiawl.com",isavailable:"0",promptinfo:"",testnu:"0026060",freg:"",freginfo:"",telcomplaintnum:"13925121894",queryurl:"http://www.suijiawl.com",serversite:"http://www.suijiawl.com/sj/index.asp"},{cid:"82",id:"683552",companyname:"飞豹快递",shortname:"飞豹",tel:"400-000-5566",url:"feibaokuaidi",code:"feibaokuaidi",hasvali:null,comurl:"http://www.ztky.com/feibao/KJCX.aspx",isavailable:"0",promptinfo:"",testnu:"6013506052",freg:"",freginfo:"",telcomplaintnum:"400-000-5566",queryurl:"http://www.ztky.com/feibao/KJCX.aspx",serversite:"http://www.ztky.com/feibao/FUWL.aspx"},{cid:"83",id:"683554",companyname:"传喜物流",shortname:"传喜",tel:"400-777-5656 ",url:"chuanxiwuliu",code:"chuanxiwuliu",hasvali:0,comurl:"http://www.cxcod.com/",isavailable:"0",promptinfo:"",testnu:"7000000151489",freg:"",freginfo:"",telcomplaintnum:"400-777-5656 ",queryurl:"http://www.cxcod.com/",serversite:"http://www.cxcod.com/Detail.aspx?typeid=3"},{cid:"84",id:"683555",companyname:"捷特快递",shortname:"捷特",tel:"400-820-8585",url:"jietekuaidi",code:"jietekuaidi",hasvali:0,comurl:"http://www.jet185.com/",isavailable:"0",promptinfo:"",testnu:"1114677325",freg:"",freginfo:"",telcomplaintnum:"400-820-8585",queryurl:"http://www.jet185.com/",serversite:"http://www.jet185.com/network/"},{cid:"307",id:"683557",companyname:"隆浪快递",shortname:"隆浪",tel:"021-31171576 61552015",url:"longlangkuaidi",code:"longlangkuaidi",hasvali:0,comurl:"http://www.56l6.com/",isavailable:"0",promptinfo:"",testnu:"201000000000",freg:"",freginfo:"",telcomplaintnum:"021-31257319 31257329 ",queryurl:"http://www.56l6.com/",serversite:"http://www.56L6.com/zdfb.html"},{cid:"262",id:"700054",companyname:"EMS-英文",shortname:"EMS-英文",tel:"11183",url:"emsen",code:"emsen",hasvali:0,comurl:"http://www.ems.com.cn/english.html",isavailable:"1",promptinfo:"",testnu:"EA041608864CN",freg:"",freginfo:"EMS单号开头和结尾2位是字母，中间是9位数字",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"85",id:"717946",companyname:"中天万运",shortname:"中天万运",tel:"400-0056-001",url:"zhongtianwanyun",code:"zhongtianwanyun",hasvali:0,comurl:"http://www.ztwy56.cn/",isavailable:"0",promptinfo:"",testnu:"1111567923",freg:"",freginfo:"",telcomplaintnum:"0531-68850629",queryurl:"http://www.ztwy56.cn/",serversite:""},{cid:"86",id:"789941",companyname:"香港(HongKong Post)",shortname:"香港邮政",tel:"(852) 2921 2222",url:"hkpost",code:"hkpost",hasvali:0,comurl:"http://www.hongkongpost.hk",isavailable:"0",promptinfo:"",testnu:"RC910320193HK",freg:"",freginfo:"",telcomplaintnum:"(852) 2921 2222",queryurl:"http://www.hongkongpost.hk/sim/index.htm",serversite:"http://sc.hongkongpost.com/gb/www.hongkongpost.com/chi/locations/index.htm"},{cid:"283",id:"789942",companyname:"邦送物流",shortname:"邦送",tel:"021-20965696",url:"bangsongwuliu",code:"bangsongwuliu",hasvali:0,comurl:"http://express.banggo.com",isavailable:"0",promptinfo:"",testnu:"600000000000",freg:"",freginfo:"",telcomplaintnum:"021-20965696-823/824",queryurl:"http://express.banggo.com",serversite:"http://express.banggo.com/default/sc/url/parentid/1/id/16"},{cid:"20",id:"850277",companyname:"国通快递",shortname:"国通",tel:"400-111-1123",url:"guotongkuaidi",code:"guotongkuaidi",hasvali:0,comurl:"http://www.gto365.com",isavailable:"0",promptinfo:"",testnu:"3117727152",freg:"",freginfo:"国通快递单号一般由10位纯数字组成",telcomplaintnum:"400-111-1123",queryurl:"http://www.gto365.com/Service/wdcc/",serversite:"http://www.gto365.com/Service/wdcc/"},{cid:"87",id:"850323",companyname:"澳大利亚(Australia Post)",shortname:"auspost",tel:"0061-3-88479045",url:"auspost",code:"auspost",hasvali:0,comurl:"http://auspost.com.au",isavailable:"0",promptinfo:"",testnu:"00093187642222033109",freg:"",freginfo:"",telcomplaintnum:"+61 388479045",queryurl:"http://auspost.com.au/index.html",serversite:""},{cid:"113",id:"850347",companyname:"加拿大(Canada Post)",shortname:"加拿大邮政",tel:"416-979-8822",url:"canpost",code:"canpost",hasvali:0,comurl:"http://www.canadapost.ca",isavailable:"0",promptinfo:"",testnu:"CP259658985CN",freg:"",freginfo:"",telcomplaintnum:"416-979-8822",queryurl:"http://www.canadapost.ca",serversite:""},{cid:"114",id:"850350",companyname:"加拿大邮政",shortname:"加拿大邮政",tel:"",url:"canpostfr",code:"canpostfr",hasvali:0,comurl:"",isavailable:"1",promptinfo:"",testnu:"305000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"115",id:"850380",companyname:"UPS-全球件",shortname:"UPS-全球件",tel:"1-800-742-5877 ",url:"upsen",code:"upsen",hasvali:0,comurl:"http://www.ups.com/",isavailable:"1",promptinfo:"",testnu:"1Z1EY7950316807120",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"116",id:"850390",companyname:"TNT-全球件",shortname:"TNT-全球件",tel:"",url:"tnten",code:"tnten",hasvali:0,comurl:"http://www.tnt.com",isavailable:"0",promptinfo:"",testnu:"GD611170792WW",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"117",id:"850399",companyname:"DHL-全球件",shortname:"DHL",tel:"",url:"dhlen",code:"dhlen",hasvali:0,comurl:"http://www.dhl.com/en.html",isavailable:"0",promptinfo:"",testnu:"1119658676",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"118",id:"850413",companyname:"顺丰-美国件",shortname:"顺丰-美国件",tel:"1-855-901-1133",url:"shunfengen",code:"shunfengen",hasvali:0,comurl:"http://www.sf-express.com/us/en/",isavailable:"1",promptinfo:"",testnu:"595000000000",freg:"",freginfo:"",telcomplaintnum:"1-855-901-1133",queryurl:"",serversite:""},{cid:"341",id:"1022916",companyname:"汇强快递",shortname:"汇强",tel:"",url:"huiqiangkuaidi",code:"huiqiangkuaidi",hasvali:0,comurl:"",isavailable:"1",promptinfo:"该公司已失效",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"161",id:"1022917",companyname:"希优特",shortname:"希优特",tel:"4008400365",url:"xiyoutekuaidi",code:"xiyoutekuaidi",hasvali:0,comurl:"http://www.cod365.com/",isavailable:"0",promptinfo:"",testnu:"60000248046",freg:"",freginfo:"",telcomplaintnum:"4008400365",queryurl:"http://www.cod365.com/",serversite:"http://www.cod365.com/network.asp"},{cid:"162",id:"1022918",companyname:"昊盛物流",shortname:"昊盛",tel:"400-186-5566",url:"haosheng",code:"haoshengwuliu",hasvali:0,comurl:"http://www.hs-express.cn/",isavailable:"0",promptinfo:"",testnu:"5566512325",freg:"",freginfo:"",telcomplaintnum:"400-186-5566",queryurl:"http://www.hs-express.cn/",serversite:"http://www.hs-express.cn/Cpfw.aspx"},{cid:"107",id:"1054763",companyname:"尚橙物流",shortname:"尚橙",tel:"400-890-0101",url:"shangcheng",code:"shangcheng",hasvali:0,comurl:"http://www.suncharms.net/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"400-890-0101",queryurl:"",serversite:""},{cid:"317",id:"1084996",companyname:"亿领速运",shortname:"亿领",tel:"400-1056-400",url:"yilingsuyun",code:"yilingsuyun",hasvali:0,comurl:"http://www.yelee.com.cn/",isavailable:"0",promptinfo:"",testnu:"180000076495",freg:"",freginfo:"",telcomplaintnum:"400-611-1892",queryurl:"http://www.yelee.com.cn/",serversite:""},{cid:"237",id:"1095717",companyname:"大洋物流",shortname:"大洋",tel:"400-820-0088",url:"dayangwuliu",code:"dayangwuliu",hasvali:0,comurl:"http://www.dayang365.cn/",isavailable:"0",promptinfo:"",testnu:"YG00003563523",freg:"",freginfo:"",telcomplaintnum:"400-820-0088",queryurl:"http://www.dayang365.cn/",serversite:""},{cid:"238",id:"1095719",companyname:"递达速运",shortname:"递达",tel:"400-687-8123",url:"didasuyun",code:"didasuyun",hasvali:0,comurl:"http://www.dida.hk/",isavailable:"0",promptinfo:"",testnu:"79101141200",freg:"",freginfo:"",telcomplaintnum:"400-687-8123",queryurl:"http://www.dida.hk/",serversite:""},{cid:"239",id:"1095721",companyname:"易通达",shortname:"易通达",tel:"0898-65339299",url:"yitongda",code:"yitongda",hasvali:0,comurl:"http://www.etd365.com/",isavailable:"0",promptinfo:"",testnu:"JX13700857",freg:"",freginfo:"",telcomplaintnum:"0898-65339299",queryurl:"http://www.etd365.com/",serversite:""},{cid:"240",id:"1095722",companyname:"邮必佳",shortname:"邮必佳",tel:"400-687-8123",url:"youbijia",code:"youbijia",hasvali:0,comurl:"http://www.ubjia.com/",isavailable:"0",promptinfo:"",testnu:"2049139919H001",freg:"",freginfo:"",telcomplaintnum:"400-687-8123",queryurl:"http://www.ubjia.com/",serversite:"http://www.ubjia.com/markets.asp"},{cid:"90",id:"1122166",companyname:"亿顺航",shortname:"亿顺航",tel:"4006-018-268 ",url:"yishunhang",code:"yishunhang",hasvali:0,comurl:"http://www.igoex.com/",isavailable:"0",promptinfo:"",testnu:"6990771336",freg:"",freginfo:"",telcomplaintnum:"4006-018-268 ",queryurl:"http://www.igoex.com/",serversite:""},{cid:"311",id:"1142068",companyname:"飞狐快递",shortname:"飞狐",tel:"010-51389299",url:"feihukuaidi",code:"feihukuaidi",hasvali:0,comurl:"http://www.feihukuaidi.com/",isavailable:"0",promptinfo:"",testnu:"B140426285147",freg:"",freginfo:"",telcomplaintnum:"18701033953",queryurl:"http://www.feihukuaidi.com/",serversite:"http://www.feihukuaidi.com/products3.aspx"},{cid:"312",id:"1142069",companyname:"潇湘晨报",shortname:"潇湘晨报",tel:"",url:"xiaoxiangchenbao",code:"xiaoxiangchenbao",hasvali:0,comurl:"",isavailable:"1",promptinfo:"",testnu:"1500000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"313",id:"1142070",companyname:"巴伦支",shortname:"巴伦支",tel:"400-885-6561",url:"balunzhi",code:"balunzhi",hasvali:0,comurl:"http://cnbd.hendari.com/",isavailable:"0",promptinfo:"",testnu:"023001808697",freg:"",freginfo:"",telcomplaintnum:"400-885-6561",queryurl:"http://cnbd.hendari.com/",serversite:"http://cnbd.hendari.com/Service.aspx"},{cid:"102",id:"1142102",companyname:"Aramex",shortname:"Aramex",tel:"4006318388",url:"aramex",code:"aramex",hasvali:0,comurl:"http://www.aramex.com/",isavailable:"0",promptinfo:"",testnu:"7055636766",freg:"",freginfo:"",telcomplaintnum:"010-80418634",queryurl:"http://www.aramex.com/",serversite:""},{cid:"263",id:"1173069",companyname:"闽盛快递",shortname:"闽盛",tel:"0592-3725988",url:"minshengkuaidi",code:"minshengkuaidi",hasvali:0,comurl:"http://www.xmms-express.com/",isavailable:"0",promptinfo:"",testnu:"800056276",freg:"",freginfo:"",telcomplaintnum:"0592-3705986",queryurl:"http://www.xmms-express.com/",serversite:""},{cid:"264",id:"1173070",companyname:"佳惠尔",shortname:"佳惠尔",tel:"024-23904138",url:"syjiahuier",code:"syjiahuier",hasvali:0,comurl:"http://www.jhekd.com/",isavailable:"0",promptinfo:"",testnu:"GES8000949441",freg:"",freginfo:"",telcomplaintnum:"13304020538",queryurl:"http://www.jhekd.com/",serversite:"http://www.jhekd.com/wdcx.asp"},{cid:"265",id:"1173071",companyname:"民邦速递",shortname:"民邦",tel:"0769-81515303",url:"minbangsudi",code:"minbangsudi",hasvali:0,comurl:"http://www.mbex168.com/",isavailable:"0",promptinfo:"",testnu:"278144634",freg:"",freginfo:"",telcomplaintnum:"0769-81515303",queryurl:"http://www.mbex168.com/",serversite:"http://www.mbex168.com/site_search.jsp"},{cid:"122",id:"1173201",companyname:"上海快通",shortname:"上海快通",tel:"",url:"shanghaikuaitong",code:"shanghaikuaitong",hasvali:0,comurl:"",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"154",id:"1322989",companyname:"北青小红帽",shortname:"北青小红帽",tel:"010-67756666",url:"xiaohongmao",code:"xiaohongmao",hasvali:0,comurl:"http://www.kuaidi100.com/all/xiaohongmao.shtml",isavailable:"0",promptinfo:"",testnu:"XHM0269135",freg:"",freginfo:"",telcomplaintnum:"010-67756666",queryurl:"http://www.kuaidi100.com/all/xiaohongmao.shtml",serversite:""},{cid:"155",id:"1322991",companyname:"GSM",shortname:"GSM",tel:"021-64656011 ",url:"gsm",code:"gsm",hasvali:0,comurl:"http://www.gsmnton.com ",isavailable:"0",promptinfo:"",testnu:"G1000039009",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"314",id:"1364626",companyname:"安能物流",shortname:"安能",tel:"400-104-0088",url:"annengwuliu",code:"annengwuliu",hasvali:0,comurl:"http://www.ane56.com",isavailable:"0",promptinfo:"",testnu:"300102851832",freg:"",freginfo:"",telcomplaintnum:"400-104-0088",queryurl:"",serversite:"http://www.ane56.com/search/searchsite.jsp"},{cid:"266",id:"1365062",companyname:"KCS",shortname:"KCS",tel:"800-858-5590",url:"kcs",code:"kcs",hasvali:0,comurl:"http://www.kcs56.com",isavailable:"0",promptinfo:"",testnu:"2009573414",freg:"",freginfo:"",telcomplaintnum:"800-858-5590",queryurl:"http://www.kcs56.com",serversite:""},{cid:"315",id:"1384981",companyname:"City-Link",shortname:"City-Link",tel:"603-5565 8399",url:"citylink",code:"citylink",hasvali:0,comurl:"http://www.citylinkexpress.com/",isavailable:"0",promptinfo:"",testnu:"156000400107086",freg:"",freginfo:"",telcomplaintnum:"603-5565 8399",queryurl:"http://www.citylinkexpress.com/",serversite:""},{cid:"334",id:"1397942",companyname:"店通快递",shortname:"店通",tel:"021-20917385 66282857",url:"diantongkuaidi",code:"diantongkuaidi",hasvali:0,comurl:"http://www.shdtkd.com.cn/",isavailable:"0",promptinfo:"",testnu:"210000000000",freg:"",freginfo:"",telcomplaintnum:"021-20917385 66282857",queryurl:"http://www.shdtkd.com.cn/",serversite:"http://www.shdtkd.com.cn/cgi-bin/GInfo.dll?Dispkind=shdtkd=%CD%F8%B5%E3%B2%E9%D1%AF"},{cid:"160",id:"1455156",companyname:"凡宇快递",shortname:"凡宇",tel:"4006-580-358 ",url:"fanyukuaidi",code:"fanyukuaidi",hasvali:0,comurl:"http://www.fanyu56.com.cn/",isavailable:"0",promptinfo:"",testnu:"198200177507",freg:"",freginfo:"凡宇快递单号一般由数字组成，部分是转运单号",telcomplaintnum:"4006-580-358",queryurl:"http://www.fanyu56.com.cn/",serversite:""},{cid:"303",id:"1506202",companyname:"平安达腾飞",shortname:"平安达腾飞",tel:"4006-230-009",url:"pingandatengfei",code:"pingandatengfei",hasvali:0,comurl:"http://www.padtf.com/",isavailable:"0",promptinfo:"",testnu:"3560002639",freg:"",freginfo:"",telcomplaintnum:"4006-230-009",queryurl:"http://www.padtf.com/",serversite:"http://www.padtf.com/Product.asp"},{cid:"207",id:"1506273",companyname:"广东通路",shortname:"广东通路",tel:"",url:"guangdongtonglu",code:"guangdongtonglu",hasvali:0,comurl:"",isavailable:"1",promptinfo:"",testnu:"15032863355819",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"94",id:"1561155",companyname:"中睿速递",shortname:"中睿",tel:"400-0375-888",url:"zhongruisudi",code:"zhongruisudi",hasvali:0,comurl:"http://www.zorel.cn/",isavailable:"0",promptinfo:"",testnu:"666581757",freg:"",freginfo:"",telcomplaintnum:"0371-56667177",queryurl:"http://www.zorel.cn/",serversite:"http://www.zorel.cn/Network.aspx"},{cid:"310",id:"1609219",companyname:"快达物流",shortname:"快达",tel:"",url:"kuaidawuliu",code:"kuaidawuliu",hasvali:0,comurl:"",isavailable:"1",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"26",id:"1609220",companyname:"佳吉快递",shortname:"佳吉",tel:"400-820-5566",url:"jiajikuaidi",code:"jiajikuaidi",hasvali:0,comurl:"http://www.jiaji.com/",isavailable:"0",promptinfo:"",testnu:"729485513",freg:"",freginfo:"",telcomplaintnum:"400-820-5566",queryurl:"http://www.jiaji.com/",serversite:"http://www.kuaidi100.com/network/province_15.htm"},{cid:"267",id:"1721505",companyname:"ADP国际快递",shortname:"ADP",tel:"1588-1330",url:"adp",code:"adp",hasvali:0,comurl:"http://www.adpair.co.kr/",isavailable:"0",promptinfo:"",testnu:"3123651",freg:"",freginfo:"",telcomplaintnum:"1588-1330",queryurl:"http://www.adpair.co.kr/",serversite:""},{cid:"268",id:"1721506",companyname:"颿达国际快递",shortname:"颿达",tel:"0755-27332618",url:"fardarww",code:"fardarww",hasvali:0,comurl:"http://www.fardar.com/",isavailable:"0",promptinfo:"",testnu:"8802855250",freg:"",freginfo:"",telcomplaintnum:"0755-27332618",queryurl:"http://www.fardar.com/",serversite:""},{cid:"269",id:"1721507",companyname:"颿达国际快递-英文",shortname:"颿达国际",tel:"0755-27332618",url:"fandaguoji",code:"fandaguoji",hasvali:0,comurl:"http://www.fardar.com/",isavailable:"0",promptinfo:"",testnu:"5089554400",freg:"",freginfo:"",telcomplaintnum:"0755-27332618",queryurl:"http://www.fardar.com/",serversite:""},{cid:"270",id:"1721508",companyname:"林道国际快递",shortname:"林道",tel:"4008-200-112",url:"shlindao",code:"shlindao",hasvali:0,comurl:"http://www.ldxpress.com/",isavailable:"0",promptinfo:"",testnu:"345595743625",freg:"",freginfo:"",telcomplaintnum:"4008-200-112",queryurl:"http://www.ldxpress.com/",serversite:""},{cid:"271",id:"1721509",companyname:"中外运速递-中文",shortname:"中外运",tel:"010-8041 8611",url:"sinoex",code:"sinoex",hasvali:0,comurl:"http://www.sinoex.com.cn",isavailable:"0",promptinfo:"",testnu:"34013907141",freg:"",freginfo:"",telcomplaintnum:"010-8041 8611",queryurl:"http://www.sinoex.com.cn/index.aspx",serversite:""},{cid:"272",id:"1721510",companyname:"中外运速递",shortname:"中外运速递",tel:"010-8041 8611",url:"zhongwaiyun",code:"zhongwaiyun",hasvali:0,comurl:"http://www.sinoex.com.cn/index.aspx",isavailable:"0",promptinfo:"",testnu:"3970761535",freg:"",freginfo:"",telcomplaintnum:"010-8041 8611",queryurl:"http://www.sinoex.com.cn/index.aspx",serversite:""},{cid:"273",id:"1721511",companyname:"深圳德创物流",shortname:"深圳德创",tel:"4006-989-833",url:"dechuangwuliu",code:"dechuangwuliu",hasvali:0,comurl:"http://www.dc56.cn/",isavailable:"0",promptinfo:"",testnu:"0512098",freg:"",freginfo:"单号一般由8位数字组成",telcomplaintnum:"4006-989-833",queryurl:"http://www.dc56.cn/",serversite:"http://www.dc58.com/?ctr=title=199"},{cid:"274",id:"1723847",companyname:"林道国际快递-英文",shortname:"林道国际快递-英文",tel:"800-820-1470 ",url:"ldxpres",code:"ldxpres",hasvali:0,comurl:"http://www.ldxpress.com/",isavailable:"0",promptinfo:"",testnu:"301000000000",freg:"",freginfo:"",telcomplaintnum:"800-820-1470 ",queryurl:"http://www.ldxpress.com/",serversite:""},{cid:"132",id:"1781833",companyname:"瑞典（Sweden Post）",shortname:"瑞典邮政",tel:"+46 8 23 22 20",url:"ruidianyouzheng",code:"ruidianyouzheng",hasvali:0,comurl:"http://www.posten.se/en",isavailable:"0",promptinfo:"",testnu:"CC193037621SE",freg:"",freginfo:"",telcomplaintnum:"+46 8 23 22 20",queryurl:"http://www.posten.se/en",serversite:""},{cid:"133",id:"1781834",companyname:"PostNord(Posten AB)",shortname:"Posten AB",tel:"+46 771 33 33 10",url:"postenab",code:"postenab",hasvali:0,comurl:"http://www.posten.se/en",isavailable:"0",promptinfo:"",testnu:"RR559718149SE",freg:"",freginfo:"",telcomplaintnum:"+46 771 33 33 10",queryurl:"http://www.posten.se/en",serversite:""},{cid:"134",id:"1781835",companyname:"偌亚奥国际快递",shortname:"偌亚奥",tel:"4008 871 871",url:"nuoyaao",code:"nuoyaao",hasvali:0,comurl:"http://www.royaleinternational.com/",isavailable:"0",promptinfo:"",testnu:"860000000000",freg:"",freginfo:"",telcomplaintnum:"4008 871 871",queryurl:"http://www.royaleinternational.com/",serversite:""},{cid:"135",id:"1781836",companyname:"城际速递",shortname:"城际",tel:"4000-523-525 ",url:"chengjisudi",code:"chengjisudi",hasvali:0,comurl:"http://chengji-express.com",isavailable:"0",promptinfo:"",testnu:"010002108494",freg:"",freginfo:"",telcomplaintnum:"4000-523-525",queryurl:"http://chengji-express.com",serversite:""},{cid:"123",id:"1797966",companyname:"祥龙运通物流",shortname:"祥龙运通",tel:"4008-908-908",url:"xianglongyuntong",code:"xianglongyuntong",hasvali:0,comurl:"http://www.ldl.com.cn",isavailable:"0",promptinfo:"",testnu:"68007554",freg:"",freginfo:"",telcomplaintnum:"4008-908-908",queryurl:"http://www.ldl.com.cn",serversite:""},{cid:"124",id:"1797970",companyname:"品速心达快递",shortname:"品速心达",tel:"400-800-3693 ",url:"pinsuxinda",code:"pinsuxinda",hasvali:0,comurl:"http://www.psxd88.com/",isavailable:"0",promptinfo:"",testnu:"PS886605213",freg:"",freginfo:"",telcomplaintnum:"400-800-3693",queryurl:"http://www.psxd88.com/",serversite:""},{cid:"125",id:"1797971",companyname:"宇鑫物流",shortname:"宇鑫",tel:"0371-66368798",url:"yuxinwuliu",code:"yuxinwuliu",hasvali:0,comurl:"http://www.yx56.cn/",isavailable:"0",promptinfo:"",testnu:"2023033091",freg:"",freginfo:"",telcomplaintnum:"0371-66368798",queryurl:"http://www.yx56.cn/",serversite:""},{cid:"136",id:"1868422",companyname:"陪行物流",shortname:"陪行物流",tel:"400-993-0555",url:"peixingwuliu",code:"peixingwuliu",hasvali:0,comurl:"http://www.peixingexpress.com",isavailable:"0",promptinfo:"",testnu:"PX5940124340713ES",freg:"",freginfo:"",telcomplaintnum:"0594-2321515",queryurl:"http://www.peixingexpress.com",serversite:""},{cid:"137",id:"1868423",companyname:"户通物流",shortname:"户通物流",tel:"400-060-1656",url:"hutongwuliu",code:"hutongwuliu",hasvali:0,comurl:"http://www.cnhtwl.com",isavailable:"0",promptinfo:"",testnu:"1103339",freg:"",freginfo:"",telcomplaintnum:"13026112511",queryurl:"http://www.cnhtwl.com",serversite:""},{cid:"198",id:"1898132",companyname:"西安城联速递",shortname:"西安城联速递",tel:"029-89113508",url:"xianchengliansudi",code:"xianchengliansudi",hasvali:0,comurl:"http://www.city-link.net.cn/",isavailable:"0",promptinfo:"",testnu:"14000000000000",freg:"",freginfo:"",telcomplaintnum:"029-89113508",queryurl:"",serversite:""},{cid:"199",id:"1898133",companyname:"煜嘉物流",shortname:"煜嘉物流",tel:"",url:"yujiawuliu",code:"yujiawuliu",hasvali:0,comurl:"http://www.yujia56.net/",isavailable:"1",promptinfo:"",testnu:"8320765",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"200",id:"1898134",companyname:"一柒国际物流",shortname:"一柒国际物流",tel:"001-(971) 238-9990",url:"yiqiguojiwuliu",code:"yiqiguojiwuliu",hasvali:0,comurl:"http://www.17htb.com/",isavailable:"0",promptinfo:"",testnu:"HT006613984US",freg:"",freginfo:"",telcomplaintnum:"001-(971) 238-9990",queryurl:"http://www.17htb.com/",serversite:""},{cid:"163",id:"1903113",companyname:"Fedex-国际件-中文",shortname:"Fedex-国际件-中文",tel:"400-889-1888",url:"fedexcn",code:"fedexcn",hasvali:0,comurl:"http://www.fedex.com/cn/index.html",isavailable:"1",promptinfo:"",testnu:"660552974937",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"164",id:"1903117",companyname:"联邦快递-英文",shortname:"联邦",tel:"400-889-1888",url:"lianbangkuaidien",code:"lianbangkuaidien",hasvali:0,comurl:"http://cndxp.apac.fedex.com/tracking/track.html",isavailable:"1",promptinfo:"",testnu:"120966607850",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"165",id:"2082056",companyname:"中通（带电话）",shortname:"中通（带电话）",tel:"",url:"zhongtongphone",code:"zhongtongphone",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"180",id:"2234246",companyname:"赛澳递for买卖宝",shortname:"赛澳递for买卖宝",tel:"",url:"saiaodimmb",code:"saiaodimmb",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"181",id:"2234247",companyname:"上海无疆for买卖宝",shortname:"上海无疆for买卖宝",tel:"",url:"shanghaiwujiangmmb",code:"shanghaiwujiangmmb",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"208",id:"2284839",companyname:"新加坡小包(Singapore Post)",shortname:"新加坡邮政",tel:"",url:"singpost",code:"singpost",hasvali:0,comurl:"http://www.singpost.com/",isavailable:"0",promptinfo:"",testnu:"RP412572298SG",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"209",id:"2284841",companyname:"音素快运",shortname:"音素快运",tel:"400-007-1118",url:"yinsu",code:"yinsu",hasvali:0,comurl:"http://www.yskd168.com/",isavailable:"0",promptinfo:"",testnu:"YS6000277072",freg:"",freginfo:"",telcomplaintnum:"400-007-1118",queryurl:"http://www.yskd168.com/",serversite:""},{cid:"210",id:"2284842",companyname:"南方传媒物流",shortname:"南方传媒物流",tel:"",url:"ndwl",code:"ndwl",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"14000000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"211",id:"2284843",companyname:"速呈宅配",shortname:"速呈宅配",tel:"",url:"sucheng",code:"sucheng",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"212",id:"2284844",companyname:"创一快递",shortname:"创一快递",tel:"",url:"chuangyi",code:"chuangyi",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"731081233571",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"213",id:"2284845",companyname:"云南滇驿物流",shortname:"云南滇驿物流",tel:"",url:"dianyi",code:"dianyi",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"214",id:"2284846",companyname:"重庆星程快递",shortname:"重庆星程快递",tel:"",url:"cqxingcheng",code:"cqxingcheng",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"1410000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"215",id:"2284847",companyname:"四川星程快递",shortname:"四川星程快递",tel:"",url:"scxingcheng",code:"scxingcheng",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"1P29497203",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"216",id:"2284848",companyname:"贵州星程快递",shortname:"贵州星程快递",tel:"",url:"gzxingcheng",code:"gzxingcheng",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"14000000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"217",id:"2284849",companyname:"运通中港快递(作废)",shortname:"运通中港快递",tel:"",url:"ytkd",code:"ytkd",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"659142122",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"246",id:"2285484",companyname:"Gati-英文",shortname:"gati官网英文通道",tel:"4000-804-284",url:"gatien",code:"gatien",hasvali:0,comurl:"http://www.gati.com/",isavailable:"0",promptinfo:"",testnu:"640856630",freg:"",freginfo:"",telcomplaintnum:"4000-804-284",queryurl:"http://www.gati.com/",serversite:""},{cid:"247",id:"2285485",companyname:"Gati-中文",shortname:"gati官网中文通道",tel:"4000-804-284 ",url:"gaticn",code:"gaticn",hasvali:0,comurl:"http://www.gaticn.com/",isavailable:"0",promptinfo:"",testnu:"641461918",freg:"",freginfo:"",telcomplaintnum:"4000-804-284",queryurl:"http://www.gaticn.com/",serversite:""},{cid:"248",id:"2285486",companyname:"jcex",shortname:"jcex官网通道",tel:"",url:"jcex",code:"jcex",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"249",id:"2285487",companyname:"派尔快递",shortname:"派尔快递官网通道",tel:"",url:"peex",code:"peex",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"14100000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"250",id:"2285488",companyname:"凯信达",shortname:"凯信达官网通道",tel:"",url:"kxda",code:"kxda",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"251",id:"2285489",companyname:"安达信",shortname:"安达信官网通道",tel:"",url:"kxda",code:"advancing",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"15111471116357",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"252",id:"2285490",companyname:"汇文",shortname:"汇文官网通道",tel:"",url:"huiwen",code:"huiwen",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"2994214416549",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"253",id:"2285491",companyname:"亿翔",shortname:"亿翔官网通道",tel:"",url:"yxexpress",code:"yxexpress",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"755033762873",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"254",id:"2285492",companyname:"东红物流",shortname:"东红合作通道",tel:"4000-081-556",url:"donghong",code:"donghong",hasvali:0,comurl:"http://www.donghong56.com/",isavailable:"0",promptinfo:"",testnu:"285310",freg:"",freginfo:"",telcomplaintnum:"4000-081-556",queryurl:"http://www.donghong56.com/",serversite:""},{cid:"255",id:"2285641",companyname:"飞远配送",shortname:"飞远配送",tel:"4007-031-313",url:"feiyuanvipshop",code:"feiyuanvipshop",hasvali:0,comurl:"http://www.fyps.cn/",isavailable:"0",promptinfo:"",testnu:"15042037484913",freg:"",freginfo:"",telcomplaintnum:"4007-031-313",queryurl:"http://www.fyps.cn/",serversite:""},{cid:"323",id:"2327222",companyname:"好运来",shortname:"好运来",tel:"020-86293333",url:"hlyex",code:"hlyex",hasvali:0,comurl:"http://www.hlyex.com/",isavailable:"0",promptinfo:"",testnu:"2001334326",freg:"",freginfo:"",telcomplaintnum:"020-86293000 ",queryurl:"http://www.hlyex.com/",serversite:""},{cid:"156",id:"2328957",companyname:"Toll",shortname:"Toll Global Express",tel:"",url:"dpexen",code:"dpexen",hasvali:0,comurl:"http://www.dpex.com/",isavailable:"0",promptinfo:"",testnu:"500013037484",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.dpex.com/",serversite:""},{cid:"304",id:"2451036",companyname:"增益速递",shortname:"增益速递",tel:"4008-456-789 ",url:"zengyisudi",code:"zengyisudi",hasvali:0,comurl:"http://www.zeny-express.com/",isavailable:"0",promptinfo:"",testnu:"500054716917",freg:"",freginfo:"",telcomplaintnum:"4008-456-789 ",queryurl:"http://www.zeny-express.com/",serversite:""},{cid:"103",id:"2626662",companyname:"四川快优达速递",shortname:"四川快优达速递",tel:"4006-068-555",url:"kuaiyouda",code:"kuaiyouda",hasvali:0,comurl:"http://www.sckyd.net/",isavailable:"0",promptinfo:"",testnu:"6000440235",freg:"",freginfo:"",telcomplaintnum:"028-85627788",queryurl:"http://www.sckyd.net/",serversite:""},{cid:"241",id:"2729397",companyname:"日昱物流",shortname:"日昱物流",tel:"4008-820-800",url:"riyuwuliu",code:"riyuwuliu",hasvali:0,comurl:"http://www.rywl.cn/",isavailable:"0",promptinfo:"",testnu:"14007338",freg:"",freginfo:"",telcomplaintnum:"4008-820-800",queryurl:"http://www.rywl.cn/",serversite:""},{cid:"301",id:"2733381",companyname:"速通物流",shortname:"速通物流",tel:"",url:"sutongwuliu",code:"sutongwuliu",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"8000002874158",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"2788564",companyname:"晟邦物流",shortname:"晟邦物流",tel:"400-666-6066",url:"nanjingshengbang",code:"nanjingshengbang",hasvali:0,comurl:"http://www.3856.cc/",isavailable:"0",promptinfo:"",testnu:"655730805258",freg:"",freginfo:"",telcomplaintnum:"400-666-6066",queryurl:"http://www.3856.cc/",serversite:""},{cid:"298",id:"2998986",companyname:"爱尔兰(An Post)",shortname:"爱尔兰邮政",tel:"01-7057600 ",url:"anposten",code:"anposten",hasvali:0,comurl:"http://www.anpost.ie/AnPost/ ",isavailable:"0",promptinfo:"",testnu:"CB006606235IE",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.anpost.ie/AnPost/ ",serversite:""},{cid:"236",id:"3078494",companyname:"日本（Japan Post）",shortname:"日本邮政JapanPost",tel:"+81 0570-046111",url:"japanposten",code:"japanposten",hasvali:0,comurl:"http://www.post.japanpost.jp/english/index.html ",isavailable:"0",promptinfo:"",testnu:"EG437752812JP",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.post.japanpost.jp/english/index.html ",serversite:""},{cid:"108",id:"3086599",companyname:"丹麦(Post Denmark)",shortname:"丹麦邮政",tel:"+45 80 20 70 30 ",url:"postdanmarken",code:"postdanmarken",hasvali:0,comurl:"http://www.postdanmark.dk/en/Pages/home.aspx ",isavailable:"0",promptinfo:"",testnu:"CC633268198DK",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.postdanmark.dk/en/Pages/home.aspx ",serversite:""},{cid:"109",id:"3086636",companyname:"巴西(Brazil Post/Correios)",shortname:"巴西邮政Brazil Post",tel:"+55 61 3003 0100",url:"postdanmarken",code:"brazilposten",hasvali:0,comurl:"http://www.correios.com.br/ ",isavailable:"0",promptinfo:"",testnu:"CP295332010BR",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.correios.com.br/ ",serversite:""},{cid:"324",id:"3118858",companyname:"荷兰挂号信(PostNL international registered mail)",shortname:"荷兰邮政",tel:"34819",url:"postnlcn",code:"postnlcn",hasvali:0,comurl:"http://www.postnl.post",isavailable:"0",promptinfo:"",testnu:"RS351167864NL",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.postnl.post",serversite:""},{cid:"325",id:"3118862",companyname:"荷兰挂号信(PostNL international registered mail)",shortname:"荷兰邮政",tel:"34819",url:"PostNL",code:"postnl",hasvali:0,comurl:"http://www.postnl.post/details/",isavailable:"0",promptinfo:"",testnu:"RS335114562NL",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.postnl.post/details/",serversite:""},{cid:"326",id:"3118897",companyname:"乌克兰EMS-中文(EMS Ukraine)",shortname:"乌克兰EMS",tel:"+38 044 234-73-84",url:"emsukrainecn",code:"emsukrainecn",hasvali:0,comurl:"http://dpsz.ua/en",isavailable:"0",promptinfo:"",testnu:"EX008947890SG",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://dpsz.ua/en",serversite:""},{cid:"327",id:"3118903",companyname:"乌克兰EMS(EMS Ukraine)",shortname:"EMS Ukraine",tel:"+38 044 234-73-84",url:"emsukraine",code:"emsukraine",hasvali:0,comurl:"http://dpsz.ua/en",isavailable:"0",promptinfo:"",testnu:"EX008947890SG",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://dpsz.ua/en",serversite:""},{cid:"328",id:"3118910",companyname:"乌克兰邮政包裹",shortname:"乌克兰邮政包裹",tel:"",url:"ukrpostcn",code:"ukrpostcn",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"329",id:"3118913",companyname:"乌克兰小包、大包(UkrPost)",shortname:"UkrPost",tel:"+380 (0) 800-500-440",url:"ukrpost",code:"ukrpost",hasvali:0,comurl:"http://www.ukrposhta.com/",isavailable:"0",promptinfo:"",testnu:"CP650816393UA",freg:"",freginfo:"",telcomplaintnum:"+380 (0) 800-500-440",queryurl:"http://www.ukrposhta.com/",serversite:""},{cid:"98",id:"3125254",companyname:"海红for买卖宝",shortname:"海红for买卖宝",tel:"",url:"haihongmmb",code:"haihongmmb",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"99",id:"3125259",companyname:"FedEx-英国件（FedEx UK)",shortname:"FedEx UK",tel:"+ 44 2476 706 660",url:"fedexuk",code:"fedexuk",hasvali:0,comurl:"http://www.fedex.com/gb/ukservices/",isavailable:"0",promptinfo:"",testnu:"655311953669",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.fedex.com/gb/ukservices/",serversite:""},{cid:"100",id:"3125270",companyname:"FedEx-英国件",shortname:"FedEx-英国件",tel:"+ 44 2476 706 660",url:"fedexukcn",code:"fedexukcn",hasvali:0,comurl:"http://www.fedex.com/gb/ukservices/",isavailable:"0",promptinfo:"",testnu:"2252009793",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.fedex.com/gb/ukservices/",serversite:""},{cid:"101",id:"3125276",companyname:"叮咚快递",shortname:"叮咚快递",tel:"",url:"dingdong",code:"dingdong",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"299",id:"3130655",companyname:"DPD",shortname:"DPD",tel:"+31 20 480 2900",url:"dpd",code:"dpd",hasvali:0,comurl:"http://www.dpd.com/",isavailable:"0",promptinfo:"",testnu:"15505360288183",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.dpd.com/",serversite:""},{cid:"300",id:"3130663",companyname:"UPS Freight",shortname:"UPS Freight",tel:"+1 800-333-7400",url:"upsfreight",code:"upsfreight",hasvali:0,comurl:"http://ltl.upsfreight.com/",isavailable:"0",promptinfo:"",testnu:"260219374",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://ltl.upsfreight.com/",serversite:""},{cid:"138",id:"3135935",companyname:"ABF",shortname:"ABF",tel:"(479) 785-6486",url:"abf",code:"abf",hasvali:0,comurl:"http://www.abfs.com/",isavailable:"0",promptinfo:"",testnu:"23471181",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.abfs.com/",serversite:""},{cid:"139",id:"3135948",companyname:"Purolator",shortname:"Purolator",tel:"-8754",url:"purolator",code:"purolator",hasvali:0,comurl:"http://www.purolator.com/",isavailable:"0",promptinfo:"",testnu:"6909455103",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.purolator.com/",serversite:""},{cid:"88",id:"3139495",companyname:"比利时（Bpost）",shortname:"Bpost",tel:"+32 (0)2 278 50 90",url:"bpost",code:"bpost",hasvali:0,comurl:"http://www.bpostinternational.com/",isavailable:"0",promptinfo:"",testnu:"412015896000000000000032376423",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.bpostinternational.com/",serversite:""},{cid:"89",id:"3140220",companyname:"比利时国际(Bpost international)",shortname:"bpostint",tel:"+32 (0)2 278 50 90",url:"bpostinter",code:"bpostinter",hasvali:0,comurl:"http://www.bpostinternational.com/",isavailable:"0",promptinfo:"",testnu:"229490632892",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.bpostinternational.com/",serversite:""},{cid:"335",id:"3155981",companyname:"LaserShip",shortname:"LaserShip",tel:"+1 (800) 527-3764",url:"lasership",code:"lasership",hasvali:0,comurl:"http://www.lasership.com/",isavailable:"0",promptinfo:"",testnu:"LW13200211",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.lasership.com/",serversite:""},{cid:"336",id:"3155993",companyname:"英国大包、EMS（Parcel Force）",shortname:"Parcel Force",tel:"08448 00 44 66",url:"parcelforce",code:"parcelforce",hasvali:0,comurl:"http://www.parcelforce.com/",isavailable:"0",promptinfo:"",testnu:"EA214606087HK",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.parcelforce.com/",serversite:""},{cid:"337",id:"3155998",companyname:"英国邮政大包EMS",shortname:"英国邮政大包EMS",tel:"08448 00 44 66",url:"parcelforcecn",code:"parcelforcecn",hasvali:0,comurl:"http://www.parcelforce.com/",isavailable:"0",promptinfo:"",testnu:"FH130128771GB",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.parcelforce.com/",serversite:""},{cid:"338",id:"3156002",companyname:"YODEL",shortname:"YODEL",tel:"+44 800 0152 662",url:"yode",code:"yodel",hasvali:0,comurl:"http://www.myyodel.co.uk/",isavailable:"0",promptinfo:"",testnu:"JD0002251443524793",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.myyodel.co.uk/",serversite:""},{cid:"242",id:"3160296",companyname:"DHL-荷兰（DHL Netherlands）",shortname:"DHL Netherlands",tel:"+31 26-324 6700",url:"dhlnetherlands",code:"dhlnetherlands",hasvali:0,comurl:"http://www.dhl.nl",isavailable:"0",promptinfo:"",testnu:"JVGL0590339801852785",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.dhl.nl",serversite:""},{cid:"277",id:"3165626",companyname:"MyHermes",shortname:"MyHermes",tel:"+44 844 543 7000",url:"myhermes",code:"myhermes",hasvali:0,comurl:"https://www.myhermes.co.uk/",isavailable:"0",promptinfo:"",testnu:"9378786254934087",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.myhermes.co.uk/",serversite:""},{cid:"278",id:"3165635",companyname:"DPD Germany",shortname:"DPD Germany",tel:"+49 01806 373 200",url:"dpdgermany",code:"dpdgermany",hasvali:0,comurl:"https://www.dpd.com/de/(portal)/de/(rememberCountry)/0",isavailable:"0",promptinfo:"",testnu:"01505081960609",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.dpd.com/de/(portal)/de/(rememberCountry)/0",serversite:""},{cid:"279",id:"3165646",companyname:"Fastway Ireland",shortname:"Fastway Ireland",tel:"+353 1 4242 900",url:"fastway",code:"fastway",hasvali:0,comurl:"http://www.fastway.ie/index.php",isavailable:"0",promptinfo:"",testnu:"WA0013625940",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.fastway.ie/index.php",serversite:""},{cid:"182",id:"3177500",companyname:"法国大包、EMS-法文（Chronopost France）",shortname:"Chronopost France",tel:"+33 (0) 969 391 391",url:"chronopostfra",code:"chronopostfra",hasvali:0,comurl:"http://www.chronopost.fr/",isavailable:"0",promptinfo:"",testnu:"EY876275007FR",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.chronopost.fr/",serversite:""},{cid:"183",id:"3177508",companyname:"Selektvracht",shortname:"Selektvracht",tel:"+31 0900-2222120",url:"selektvracht",code:"selektvracht",hasvali:0,comurl:"http://www.selektvracht.nl/",isavailable:"0",promptinfo:"",testnu:"3SXLDW00387",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.selektvracht.nl/",serversite:""},{cid:"184",id:"3177511",companyname:"蓝弧快递",shortname:"蓝弧快递",tel:"4000661646",url:"lanhukuaidi",code:"lanhukuaidi",hasvali:0,comurl:"http://www.lanhukd.com/",isavailable:"0",promptinfo:"",testnu:"757000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.lanhukd.com/",serversite:""},{cid:"185",id:"3177517",companyname:"比利时(Belgium Post)",shortname:"Belgium Post",tel:"+32 2 276 22 74",url:"belgiumpost",code:"belgiumpost",hasvali:0,comurl:"http://www.bpost.be/",isavailable:"0",promptinfo:"",testnu:"RA832006770BE",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.bpost.be/",serversite:""},{cid:"221",id:"3194763",companyname:"UPS Mail Innovations",shortname:"UPS Mail Innovations",tel:"+1 800-500-2224",url:"upsmailinno",code:"upsmailinno",hasvali:0,comurl:"http://www.upsmailinnovations.com/",isavailable:"0",promptinfo:"",testnu:"92748999964342543475126127",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.upsmailinnovations.com/",serversite:""},{cid:"222",id:"3194764",companyname:"挪威（Posten Norge）",shortname:"Posten Norge",tel:"+47 21316260",url:"postennorge",code:"postennorge",hasvali:0,comurl:"http://www.posten.no/en/",isavailable:"0",promptinfo:"",testnu:"CD657634775NO",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.posten.no/en/",serversite:""},{cid:"223",id:"3194765",companyname:"瑞士邮政",shortname:"瑞士邮政",tel:"+41848888888",url:"swisspostcn",code:"swisspostcn",hasvali:0,comurl:"https://www.post.ch/de/privat?wt_shortcut=www-swisspost-com&WT.mc_id=shortcut_www-swisspost-com",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"+41848888888",queryurl:"https://www.post.ch/de/privat?wt_shortcut=www-swisspost-com&WT.mc_id=shortcut_www-swisspost-com",serversite:""},{cid:"224",id:"3194766",companyname:"瑞士(Swiss Post)",shortname:"Swiss Post",tel:"+41 848 888 888",url:"swisspost",code:"swisspost",hasvali:0,comurl:"http://www.post.ch/en",isavailable:"0",promptinfo:"",testnu:"RU468581905CH",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.post.ch/en",serversite:""},{cid:"225",id:"3194767",companyname:"英国邮政小包",shortname:"英国邮政小包",tel:"",url:"royalmailcn",code:"royalmailcn",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"226",id:"3194768",companyname:"英国小包（Royal Mail）",shortname:"Royal Mail",tel:"+44 1752387112",url:"royalmail",code:"royalmail",hasvali:0,comurl:"http://www.royalmail.com/",isavailable:"0",promptinfo:"",testnu:"RQ304136228GB",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.royalmail.com/",serversite:""},{cid:"227",id:"3194769",companyname:"DHL Benelux",shortname:"DHL Benelux",tel:"+31 26-324 6700",url:"dhlbenelux",code:"dhlbenelux",hasvali:0,comurl:"http://www.dhl.nl/nl.html",isavailable:"0",promptinfo:"",testnu:"3214528741",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.dhl.nl/nl.html",serversite:""},{cid:"284",id:"3205226",companyname:"Nova Poshta",shortname:"Nova Poshta",tel:"+7 (0) 800 500 609",url:"novaposhta",code:"novaposhta",hasvali:0,comurl:"http://novaposhta.ua/",isavailable:"0",promptinfo:"",testnu:"60000000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://novaposhta.ua/",serversite:""},{cid:"285",id:"3205227",companyname:"DHL-波兰（DHL Poland）",shortname:"DHL Poland",tel:"+48 42 6 345 345",url:"dhlpoland",code:"dhlpoland",hasvali:0,comurl:"http://www.dhl.com.pl/pl.html",isavailable:"0",promptinfo:"",testnu:"13164502259",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.dhl.com.pl/pl.html",serversite:""},{cid:"286",id:"3205228",companyname:"Estes",shortname:"Estes",tel:"1-866-378-3748",url:"estes",code:"estes",hasvali:0,comurl:"http://www.estes-express.com/",isavailable:"0",promptinfo:"",testnu:"2951429029",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.estes-express.com/",serversite:""},{cid:"287",id:"3205229",companyname:"TNT UK",shortname:"TNT UK",tel:"+44 0800 100 600",url:"tntuk",code:"tntuk",hasvali:0,comurl:"http://www.tnt.com/portal/location/en.html",isavailable:"0",promptinfo:"",testnu:"1201877402928",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.tnt.com/portal/location/en.html",serversite:""},{cid:"288",id:"3205230",companyname:"Deltec Courier",shortname:"Deltec Courier",tel:"+44 (0) 20 8569 6767",url:"deltec",code:"deltec",hasvali:0,comurl:"https://www.deltec-courier.com",isavailable:"0",promptinfo:"",testnu:"096492851184",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.deltec-courier.com",serversite:""},{cid:"256",id:"3223274",companyname:"OPEK",shortname:"OPEK",tel:"+48 22 732 79 99",url:"opek",code:"opek",hasvali:0,comurl:"http://www.opek.com.pl/",isavailable:"0",promptinfo:"",testnu:"798543981654",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.opek.com.pl/",serversite:""},{cid:"257",id:"3223275",companyname:"DPD Poland",shortname:"DPD Poland",tel:"+48 801 400 373",url:"dpdpoland",code:"dpdpoland",hasvali:0,comurl:"http://www.dpd.com.pl/",isavailable:"0",promptinfo:"",testnu:"0000005441202U",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.dpd.com.pl/",serversite:""},{cid:"258",id:"3223276",companyname:"Italy SDA",shortname:"Italy SDA",tel:"+39 199 113366",url:"italysad",code:"italysad",hasvali:0,comurl:"http://wwww.sda.it/",isavailable:"0",promptinfo:"",testnu:"D765317000021",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://wwww.sda.it/",serversite:""},{cid:"104",id:"3228276",companyname:"MRW",shortname:"MRW",tel:"+34 902 300 402",url:"mrw",code:"mrw",hasvali:0,comurl:"http://www.mrw.es/",isavailable:"0",promptinfo:"",testnu:"043037043203",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.mrw.es/",serversite:""},{cid:"105",id:"3228277",companyname:"Chronopost Portugal",shortname:"Chronopost Portugal",tel:"+351 707 20 28 28",url:"chronopostport",code:"chronopostport",hasvali:0,comurl:"http://chronopost.pt/",isavailable:"0",promptinfo:"",testnu:"19900000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://chronopost.pt/",serversite:""},{cid:"106",id:"3228278",companyname:"西班牙(Correos de Espa?a)",shortname:"Correos de Espa?a",tel:"+34 902197197",url:"correosdees",code:"correosdees",hasvali:0,comurl:"http://www.correos.es",isavailable:"0",promptinfo:"",testnu:"EK505483520ES",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.correos.es",serversite:""},{cid:"289",id:"3238411",companyname:"Direct Link",shortname:"Direct Link",tel:"+1 (908) 289-0703",url:"directlink",code:"directlink",hasvali:0,comurl:"http://www.directlink.com",isavailable:"0",promptinfo:"",testnu:"RE605820729SE",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.directlink.com",serversite:""},{cid:"290",id:"3238412",companyname:"ELTA Hellenic Post",shortname:"ELTA Hellenic Post",tel:"+30 801 11 83000",url:"eltahell",code:"eltahell",hasvali:0,comurl:"https://www.elta-courier.gr",isavailable:"0",promptinfo:"",testnu:"EE205325675GR",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.elta-courier.gr",serversite:""},{cid:"291",id:"3238413",companyname:"捷克（?eská po?ta）",shortname:"ceskaposta",tel:"+420 840 111 244",url:"ceskaposta",code:"ceskaposta",hasvali:0,comurl:"http://www.ceskaposta.cz/index",isavailable:"0",promptinfo:"",testnu:"EM512005180CZ",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ceskaposta.cz/index",serversite:""},{cid:"292",id:"3238414",companyname:"Siodemka",shortname:"Siodemka",tel:"+48 22 777 77 77",url:"siodemka",code:"siodemka",hasvali:0,comurl:"http://www.siodemka.com/",isavailable:"0",promptinfo:"",testnu:"9730000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.siodemka.com/",serversite:""},{cid:"259",id:"3245372",companyname:"International Seur",shortname:"International Seur",tel:"+34 93 336 85 85",url:"seur",code:"seur",hasvali:0,comurl:"http://www.seur.com/",isavailable:"0",promptinfo:"",testnu:"2015290828470127555960",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.seur.com/",serversite:""},{cid:"260",id:"3245373",companyname:"久易快递",shortname:"久易快递",tel:"021-64206088",url:"jiuyicn",code:"jiuyicn",hasvali:0,comurl:"http://www.jiuyicn.com/",isavailable:"0",promptinfo:"",testnu:"5833526742",freg:"",freginfo:"",telcomplaintnum:"021-64206088",queryurl:"http://www.jiuyicn.com/",serversite:""},{cid:"228",id:"3264010",companyname:"克罗地亚（Hrvatska Posta）",shortname:"Hrvatska Posta",tel:"+385 0800 303 304",url:"hrvatska",code:"hrvatska",hasvali:0,comurl:"http://www.posta.hr/",isavailable:"0",promptinfo:"",testnu:"RC010487565HR",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.posta.hr/",serversite:""},{cid:"229",id:"3264011",companyname:"保加利亚（Bulgarian Posts）",shortname:"Bulgarian Posts",tel:"+3592/949 3280",url:"bulgarian",code:"bulgarian",hasvali:0,comurl:"http://www.bgpost.bg/",isavailable:"0",promptinfo:"",testnu:"YUNDA",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.bgpost.bg/",serversite:""},{cid:"230",id:"3264012",companyname:"Portugal Seur",shortname:"Portugal Seur",tel:"+351 707 50 10 10",url:"portugalseur",code:"portugalseur",hasvali:0,comurl:"http://www.seur.com/",isavailable:"0",promptinfo:"",testnu:"289000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.seur.com/",serversite:""},{cid:"126",id:"3280637",companyname:"EC-Firstclass",shortname:"EC-Firstclass",tel:"+86 4006 988 223",url:"ecfirstclass",code:"ecfirstclass",hasvali:0,comurl:"http://www.ec-firstclass.org/Details.aspx",isavailable:"0",promptinfo:"",testnu:"LTL130320BCA000017",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ec-firstclass.org/Details.aspx",serversite:""},{cid:"127",id:"3280638",companyname:"DTDC India",shortname:"DTDC India",tel:"+91 33004444",url:"dtdcindia",code:"dtdcindia",hasvali:0,comurl:"http://dtdc.com",isavailable:"0",promptinfo:"",testnu:"N95914878",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://dtdc.com",serversite:""},{cid:"128",id:"3280639",companyname:"Safexpress",shortname:"Safexpress",tel:"+91 11 26783281",url:"safexpress",code:"safexpress",hasvali:0,comurl:"http://www.safexpress.com",isavailable:"0",promptinfo:"",testnu:"35627566",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.safexpress.com",serversite:""},{cid:"129",id:"3280640",companyname:"韩国（Korea Post）",shortname:"Korea Post",tel:"+82 2 2195 1114",url:"koreapost",code:"koreapost",hasvali:0,comurl:"http://www.koreapost.go.kr/kpost/main/index.jsp",isavailable:"0",promptinfo:"",testnu:"RR494467118KR",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.koreapost.go.kr/kpost/main/index.jsp",serversite:""},{cid:"295",id:"3312654",companyname:"TNT Australia",shortname:"TNT Australia",tel:"+61 13 11 50",url:"tntau",code:"tntau",hasvali:0,comurl:"https://www.tntexpress.com.au",isavailable:"0",promptinfo:"",testnu:"314055529",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.tntexpress.com.au",serversite:""},{cid:"293",id:"3312655",companyname:"泰国（Thailand Thai Post）",shortname:"Thailand Thai Post",tel:"0 2573 5463",url:"thailand",code:"thailand",hasvali:0,comurl:"http://www.thailandpost.co.th ",isavailable:"0",promptinfo:"",testnu:"EN961764205TH",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.thailandpost.co.th",serversite:""},{cid:"294",id:"3312656",companyname:"SkyNet Malaysia",shortname:"SkyNet Malaysia",tel:"+60 3- 56239090",url:"skynetmalaysia",code:"skynetmalaysia",hasvali:0,comurl:"http://www.skynet.com.my/",isavailable:"0",promptinfo:"",testnu:"201479896870",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.skynet.com.my/",serversite:""},{cid:"296",id:"3312657",companyname:"马来西亚小包（Malaysia Post(Registered)）",shortname:"Malaysia Post(Registered)",tel:"+603 27279100",url:"malaysiapost",code:"malaysiapost",hasvali:0,comurl:"http://www.pos.com.my/",isavailable:"0",promptinfo:"",testnu:"EP002931300MY",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.pos.com.my/",serversite:""},{cid:"297",id:"3312658",companyname:"马来西亚大包、EMS（Malaysia Post(parcel,EMS)）",shortname:"Malaysia Post (parcel,EMS)",tel:"+603 27279100",url:"malaysiaems",code:"malaysiaems",hasvali:0,comurl:"http://www.pos.com.my/",isavailable:"0",promptinfo:"",testnu:"CP306201896MY",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.pos.com.my/",serversite:""},{cid:"330",id:"3321130",companyname:"京东",shortname:"京东",tel:"400-603-3600",url:"jd",code:"jd",hasvali:0,comurl:"http://www.jd-ex.com",isavailable:"0",promptinfo:"",testnu:"11059731415",freg:"",freginfo:"",telcomplaintnum:"400-603-3600",queryurl:"http://www.jd-ex.com",serversite:""},{cid:"201",id:"3331811",companyname:"沙特阿拉伯(Saudi Post)",shortname:"Saudi Post",tel:"+966 9200 05700",url:"saudipost",code:"saudipost",hasvali:0,comurl:"http://www.sp.com.sa",isavailable:"0",promptinfo:"",testnu:"EB070957408BR",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.sp.com.sa",serversite:""},{cid:"202",id:"3331812",companyname:"南非（South African Post Office）",shortname:"South African Post Office",tel:"+27 0860 111 502",url:"southafrican",code:"southafrican",hasvali:0,comurl:"http://www.postoffice.co.za",isavailable:"0",promptinfo:"",testnu:"CN022908044ZA",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.postoffice.co.za",serversite:""},{cid:"203",id:"3331813",companyname:"OCA Argentina",shortname:"OCA Argentina",tel:"+34 800-999-7700",url:"ocaargen",code:"ocaargen",hasvali:0,comurl:"http://www.oca.com.ar/",isavailable:"0",promptinfo:"",testnu:"3990000000000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.oca.com.ar/",serversite:""},{cid:"204",id:"3331814",companyname:"尼日利亚(Nigerian Postal)",shortname:"Nigerian Postal",tel:"234-09-3149531",url:"nigerianpost",code:"nigerianpost",hasvali:0,comurl:"http://www.nipost.gov.ng",isavailable:"0",promptinfo:"",testnu:"EE319286895NG",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.nipost.gov.ng",serversite:""},{cid:"205",id:"3331815",companyname:"智利(Correos Chile)",shortname:"Correos Chile",tel:"+562 600 950 2020",url:"chile",code:"chile",hasvali:0,comurl:"http://www.correos.cl",isavailable:"0",promptinfo:"",testnu:"CP358805067CL",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.correos.cl",serversite:""},{cid:"206",id:"3331816",companyname:"以色列(Israel Post)",shortname:"Israel Post",tel:"+972 2 629 0691",url:"israelpost",code:"israelpost",hasvali:0,comurl:"http://www.israelpost.co.il",isavailable:"0",promptinfo:"",testnu:"EE143917265IL",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.israelpost.co.il",serversite:""},{cid:"231",id:"3362923",companyname:"Toll Priority(Toll Online)",shortname:"Toll Priority",tel:"+61 13 15 31",url:"tollpriority",code:"tollpriority",hasvali:0,comurl:"https://online.toll.com.au",isavailable:"0",promptinfo:"",testnu:"6828047773260003233001",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://online.toll.com.au",serversite:""},{cid:"232",id:"3362925",companyname:"Estafeta",shortname:"Estafeta",tel:"+52 1-800-378-2338",url:"estafeta",code:"estafeta",hasvali:0,comurl:"http://rastreo3.estafeta.com",isavailable:"0",promptinfo:"",testnu:"763326789",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://rastreo3.estafeta.com",serversite:""},{cid:"233",id:"3362926",companyname:"港快速递",shortname:"港快速递",tel:"400-11-33333",url:"gdkd",code:"gdkd",hasvali:0,comurl:"http://www.gksd.com/",isavailable:"0",promptinfo:"",testnu:"200028092916",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.gksd.com/",serversite:""},{cid:"234",id:"3362927",companyname:"墨西哥（Correos de Mexico）",shortname:"Correos de Mexico",tel:"+52 01 800 701 7000",url:"mexico",code:"mexico",hasvali:0,comurl:"http://www.correosdemexico.gob.mx",isavailable:"0",promptinfo:"",testnu:"RP400000695MX",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.correosdemexico.gob.mx",serversite:""},{cid:"235",id:"3362928",companyname:"罗马尼亚（Posta Romanian）",shortname:"Posta Romanian",tel:"+40 021 9393 111",url:"romanian",code:"romanian",hasvali:0,comurl:"http://www.posta-romana.ro/posta-romana.html",isavailable:"0",promptinfo:"",testnu:"CO989187136RO",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.posta-romana.ro/posta-romana.html",serversite:""},{cid:"318",id:"3383409",companyname:"TNT Italy",shortname:"TNT Italy",tel:"+39 199 803 868",url:"tntitaly",code:"tntitaly",hasvali:0,comurl:"http://www.tnt.it",isavailable:"0",promptinfo:"",testnu:"MY33217326",freg:"",freginfo:"",telcomplaintnum:"+39 199 803 868",queryurl:"http://www.tnt.it",serversite:""},{cid:"319",id:"3383410",companyname:"Mexico Multipack",shortname:"Mexico Multipack",tel:"+52 1800 7023200",url:"multipack",code:"multipack",hasvali:0,comurl:"http://www.multipack.com.mx/",isavailable:"0",promptinfo:"",testnu:"166000000000",freg:"",freginfo:"",telcomplaintnum:"+52 1800 7023200",queryurl:"http://www.multipack.com.mx/",serversite:""},{cid:"320",id:"3383411",companyname:"葡萄牙（Portugal CTT）",shortname:"Portugal CTT",tel:"+351 707 26 26 26",url:"portugalctt",code:"portugalctt",hasvali:0,comurl:"http://www.ctt.pt",isavailable:"0",promptinfo:"",testnu:"RD601577564PT",freg:"",freginfo:"",telcomplaintnum:"+351 707 26 26 26",queryurl:"http://www.ctt.pt",serversite:""},{cid:"321",id:"3383412",companyname:"Interlink Express",shortname:"Interlink Express",tel:"+44 8702 200 300",url:"interlink",code:"interlink",hasvali:0,comurl:"http://www.interlinkexpress.com/",isavailable:"0",promptinfo:"",testnu:"6152848856",freg:"",freginfo:"",telcomplaintnum:"+44 8702 200 300",queryurl:"http://www.interlinkexpress.com/",serversite:""},{cid:"322",id:"3383413",companyname:"DPD UK",shortname:"DPD UK",tel:"+44 845 9 300 350",url:"dpduk",code:"dpduk",hasvali:0,comurl:"http://www.dpd.co.uk/",isavailable:"0",promptinfo:"",testnu:"15505411411164",freg:"",freginfo:"",telcomplaintnum:"+44 845 9 300 350",queryurl:"http://www.dpd.co.uk/",serversite:""},{cid:"157",id:"3432857",companyname:"华航快递",shortname:"华航快递",tel:"400-697-0008",url:"hzpl",code:"hzpl",hasvali:0,comurl:"http://www.hz3pl.com",isavailable:"0",promptinfo:"",testnu:"100275942",freg:"",freginfo:"",telcomplaintnum:"400-697-0008",queryurl:"http://www.hz3pl.com",serversite:""},{cid:"158",id:"3432858",companyname:"Gati-KWE",shortname:"Gati-KWE",tel:"+91 1800-180-4284",url:"gatikwe",code:"gatikwe",hasvali:0,comurl:"http://www.gatikwe.com/",isavailable:"0",promptinfo:"",testnu:"413767243",freg:"",freginfo:"",telcomplaintnum:"+91 1800-180-4284",queryurl:"http://www.gatikwe.com/",serversite:""},{cid:"159",id:"3432859",companyname:"Red Express",shortname:"Red Express",tel:"+91 1800-123-2400",url:"redexpress",code:"redexpress",hasvali:0,comurl:"https://www.getsetred.net",isavailable:"0",promptinfo:"",testnu:"0075941",freg:"",freginfo:"",telcomplaintnum:"+91 1800-123-2400",queryurl:"https://www.getsetred.net",serversite:""},{cid:"261",id:"3440002",companyname:"Mexico Senda Express",shortname:"Mexico Senda Express",tel:"+52 1800 833 93 00",url:"mexicodenda",code:"mexicodenda",hasvali:0,comurl:"http://www.sendaexpress.com.mx/rastreo.asp#af",isavailable:"0",promptinfo:"",testnu:"10200000000000",freg:"",freginfo:"",telcomplaintnum:"+52 1800 833 93 00",queryurl:"http://www.sendaexpress.com.mx/rastreo.asp#af",serversite:""},{cid:"331",id:"3487500",companyname:"TCI XPS",shortname:"TCI XPS",tel:"18002000977",url:"tcixps",code:"tcixps",hasvali:0,comurl:"http://www.tcixps.com/",isavailable:"0",promptinfo:"",testnu:"110000000000",freg:"",freginfo:"",telcomplaintnum:"18002000977",queryurl:"http://www.tcixps.com/",serversite:""},{cid:"332",id:"3487501",companyname:"高铁速递",shortname:"高铁速递",tel:"400-999-7777",url:"hre",code:"hre",hasvali:0,comurl:"http://www.hre-e.com/",isavailable:"0",promptinfo:"",testnu:"59100031231",freg:"",freginfo:"",telcomplaintnum:"400-999-7777",queryurl:"http://www.hre-e.com/",serversite:""},{cid:"333",id:"3487502",companyname:"新加坡EMS、大包(Singapore Speedpost)",shortname:"Singapore Speedpost",tel:"+65 6222 5777",url:"speedpost",code:"speedpost",hasvali:0,comurl:"http://www.speedpost.com.sg/",isavailable:"0",promptinfo:"",testnu:"EX011436437SG",freg:"",freginfo:"",telcomplaintnum:"+65 6222 5777",queryurl:"http://www.speedpost.com.sg/",serversite:""},{cid:"186",id:"3489756",companyname:"EMS-国际件-英文",shortname:"EMS-国际件-英文",tel:"",url:"emsinten",code:"emsinten",hasvali:0,comurl:"http://www.ems.com.cn/",isavailable:"0",promptinfo:"",testnu:"EG408834094JP",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"243",id:"3526510",companyname:"Asendia USA",shortname:"Asendia USA",tel:"+1 610 461 3661",url:"asendiausa",code:"asendiausa",hasvali:0,comurl:"http://www.asendiausa.com/",isavailable:"0",promptinfo:"",testnu:"00006675214163582734",freg:"",freginfo:"",telcomplaintnum:"+1 610 461 3661",queryurl:"http://www.asendiausa.com/",serversite:""},{cid:"244",id:"3526511",companyname:"法国大包、EMS-英文(Chronopost France)",shortname:"Chronopost France",tel:"+33 (0) 969 391 391",url:"chronopostfren",code:"chronopostfren",hasvali:0,comurl:"http://www.chronopost.fr/",isavailable:"0",promptinfo:"",testnu:"EY084484098FR",freg:"",freginfo:"",telcomplaintnum:"+33 (0) 969 391 391",queryurl:"http://www.chronopost.fr/",serversite:""},{cid:"245",id:"3526512",companyname:"意大利(Poste Italiane)",shortname:"Poste Italiane Paccocelere",tel:"+39 803 160",url:"italiane",code:"italiane",hasvali:0,comurl:"http://www.poste.it/",isavailable:"0",promptinfo:"",testnu:"CP039849623IT",freg:"",freginfo:"",telcomplaintnum:"+39 803 160",queryurl:"http://www.poste.it/",serversite:""},{cid:"276",id:"3623446",companyname:"冠达快递",shortname:"冠达快递",tel:"400-990-0088",url:"gda",code:"gda",hasvali:0,comurl:"http://www.gda-e.com.cn/",isavailable:"0",promptinfo:"",testnu:"700114079397",freg:"",freginfo:"",telcomplaintnum:"400-990-0088",queryurl:"http://www.gda-e.com.cn/",serversite:""},{cid:"91",id:"3664396",companyname:"出口易",shortname:"出口易",tel:"4006-988-223",url:"chukou1",code:"chukou1",hasvali:0,comurl:"http://www.chukou1.com",isavailable:"0",promptinfo:"",testnu:"SZ32316495",freg:"",freginfo:"",telcomplaintnum:"13360562736",queryurl:"http://www.chukou1.com",serversite:""},{cid:"0",id:"3696400",companyname:"黄马甲",shortname:"黄马甲",tel:"029-96128",url:"huangmajia",code:"huangmajia",hasvali:0,comurl:"http://www.huangmajia.com",isavailable:"0",promptinfo:"",testnu:"032606205642846",freg:"",freginfo:"",telcomplaintnum:"029-96128",queryurl:"http://www.huangmajia.com",serversite:""},{cid:"280",id:"3785532",companyname:"新干线快递",shortname:"新干线快递",tel:"",url:"anlexpress",code:"anlexpress",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"281",id:"3785533",companyname:"飞洋快递",shortname:"飞洋快递",tel:"001-877-387-9799",url:"shipgce",code:"shipgce",hasvali:0,comurl:"http://express.shipgce.com/",isavailable:"0",promptinfo:"",testnu:"DD504013290US",freg:"",freginfo:"",telcomplaintnum:"001-877-387-9799",queryurl:"",serversite:""},{cid:"282",id:"3785534",companyname:"贝海国际速递",shortname:"贝海国际速递",tel:"086-400-082-2200",url:"xlobo",code:"xlobo",hasvali:0,comurl:"http://www.xlobo.com/",isavailable:"0",promptinfo:"",testnu:"DB863228069US",freg:"",freginfo:"",telcomplaintnum:"086-400-082-2200",queryurl:"",serversite:""},{cid:"140",id:"3808754",companyname:"阿联酋(Emirates Post)",shortname:"阿联酋邮政",tel:"600-599-999",url:"emirates",code:"emirates",hasvali:0,comurl:"http://www.epg.gov.ae/",isavailable:"0",promptinfo:"",testnu:"EE041631183AE",freg:"",freginfo:"",telcomplaintnum:"600-599-999",queryurl:"http://www.epg.gov.ae/",serversite:""},{cid:"0",id:"3808755",companyname:"新顺丰（NSF）",shortname:"新顺丰（NSF）",tel:"0064-9-5258288",url:"nsf",code:"nsf",hasvali:0,comurl:"http://www.nsf.co.nz/",isavailable:"0",promptinfo:"",testnu:"91502028659",freg:"",freginfo:"",telcomplaintnum:"0064-9-5258288",queryurl:"http://www.nsf.co.nz/",serversite:""},{cid:"142",id:"3808756",companyname:"巴基斯坦(Pakistan Post)",shortname:"巴基斯坦邮政",tel:"（+92 51）926 00 37",url:"pakistan",code:"pakistan",hasvali:0,comurl:"http://ep.gov.pk/",isavailable:"0",promptinfo:"",testnu:"EE338661704CN",freg:"",freginfo:"",telcomplaintnum:"（+92 51）926 00 37",queryurl:"http://ep.gov.pk/",serversite:""},{cid:"275",id:"3812620",companyname:"世运快递",shortname:"世运快递",tel:"400-666-1111",url:"shiyunkuaidi",code:"shiyunkuaidi",hasvali:0,comurl:"http://www.sehoex.com/",isavailable:"0",promptinfo:"",testnu:"200000000000",freg:"",freginfo:"",telcomplaintnum:"400-666-1111",queryurl:"http://sehoexpress.com/index.asp",serversite:""},{cid:"166",id:"3836842",companyname:"合众速递(UCS）",shortname:"合众速递(UCS）",tel:"024-31515566",url:"ucs",code:"ucs",hasvali:0,comurl:"http://www.ucsus.com",isavailable:"0",promptinfo:"",testnu:"EL900787012HK",freg:"",freginfo:"",telcomplaintnum:"024-31515566",queryurl:"http://www.ucsus.com",serversite:""},{cid:"167",id:"3836843",companyname:"阿富汗(Afghan Post)",shortname:"阿富汗邮政",tel:"+93 20 2104075",url:"afghan",code:"afghan",hasvali:0,comurl:"http://track.afghanpost.gov.af/",isavailable:"0",promptinfo:"",testnu:"CP858622080HK",freg:"",freginfo:"",telcomplaintnum:"+93 20 2104075",queryurl:"http://track.afghanpost.gov.af/",serversite:""},{cid:"308",id:"3852026",companyname:"白俄罗斯(Belpochta)",shortname:"白俄罗斯",tel:"+375 17 293 59 10",url:"belpost",code:"belpost",hasvali:0,comurl:"http://www.belpost.by/",isavailable:"0",promptinfo:"",testnu:"CP045759207BY",freg:"",freginfo:"",telcomplaintnum:"+375 17 293 59 10",queryurl:"http://www.belpost.by/",serversite:""},{cid:"92",id:"3946200",companyname:"全通快运",shortname:"全通快运",tel:"",url:"quantwl",code:"quantwl",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"93",id:"3946201",companyname:"宅急便",shortname:"宅急便",tel:"",url:"zhaijibian",code:"zhaijibian",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"120098239752",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"130",id:"4010763",companyname:"EFS Post",shortname:"efs",tel:"0773-2308246",url:"efs",code:"efs",hasvali:0,comurl:"http://www.efspost.com/ ",isavailable:"0",promptinfo:"",testnu:"EF313486219NZ",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"131",id:"4010767",companyname:"TNT Post",shortname:"tntpostcn",tel:"+31（0）900 0570 ",url:"tntpostcn",code:"tntpostcn",hasvali:0,comurl:"http://parcels-uk.tntpost.com/ ",isavailable:"0",promptinfo:"",testnu:"3SABC123456789 ",freg:"",freginfo:"",telcomplaintnum:"+31（0）900 0570 ",queryurl:"",serversite:""},{cid:"316",id:"4051323",companyname:"英脉物流",shortname:"英脉物流",tel:"400-880-5088",url:"gml",code:"gml",hasvali:0,comurl:"http://www.gml.cn/",isavailable:"0",promptinfo:"",testnu:"151110000059",freg:"",freginfo:"",telcomplaintnum:"400-880-5088",queryurl:"http://www.gml.cn/",serversite:""},{cid:"95",id:"4110138",companyname:"广通速递",shortname:"广通速递",tel:"400-801-5567",url:"gtongsudi",code:"gtongsudi",hasvali:0,comurl:"http://www.gto56.com",isavailable:"0",promptinfo:"",testnu:"2200002356574",freg:"",freginfo:"",telcomplaintnum:"400-801-5567",queryurl:"",serversite:"http://www.gto56.com/ServiceNet/"},{cid:"96",id:"4110170",companyname:"东瀚物流",shortname:"东瀚物流",tel:"400-092-2229",url:"donghanwl",code:"donghanwl",hasvali:0,comurl:"http://www.donghanwl.com/",isavailable:"0",promptinfo:"",testnu:"DH0000108870",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"97",id:"4110206",companyname:"rpx",shortname:"rpx",tel:"",url:"rpx",code:"rpx",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"342",id:"4134425",companyname:"日日顺物流",shortname:"日日顺物流",tel:"400-800-9999",url:"rrs",code:"rrs",hasvali:0,comurl:"http://www.rrs.com/wl/fwwl",isavailable:"0",promptinfo:"",testnu:"6080019489",freg:"",freginfo:"",telcomplaintnum:"400-800-9999",queryurl:"http://www.rrs.com/wl/fwwl",serversite:""},{cid:"343",id:"4134450",companyname:"黑猫雅玛多",shortname:"黑猫雅玛多",tel:"",url:"yamato",code:"yamato",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"410874312166",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"344",id:"4134483",companyname:"华通快运",shortname:"华通快运",tel:"",url:"htongexpress",code:"htongexpress",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"345",id:"4134607",companyname:"吉尔吉斯斯坦(Kyrgyz Post)",shortname:"kyrgyzpost",tel:"",url:"kyrgyzpost",code:"kyrgyzpost",hasvali:0,comurl:"http://www.posta.kg",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.posta.kg",serversite:""},{cid:"346",id:"4134788",companyname:"拉脱维亚(Latvijas Pasts)",shortname:"拉脱维亚",tel:"",url:"latvia",code:"latvia",hasvali:0,comurl:"http://www.pasts.lv",isavailable:"0",promptinfo:"",testnu:"RS069553922LV",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"347",id:"4134832",companyname:"黎巴嫩(Liban Post)",shortname:"黎巴嫩",tel:"+961 1 629628",url:"libanpost",code:"libanpost",hasvali:0,comurl:"http://www.libanpost.com.lb",isavailable:"0",promptinfo:"",testnu:"RB788837634CN",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.libanpost.com.lb",serversite:""},{cid:"348",id:"4134850",companyname:"立陶宛（Lietuvos pa?tas）",shortname:"立陶宛",tel:"+370 700 55 400",url:"lithuania",code:"lithuania",hasvali:0,comurl:"http://www.post.lt",isavailable:"0",promptinfo:"",testnu:"RN007871333LT",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"349",id:"4134864",companyname:"马尔代夫(Maldives Post)",shortname:"马尔代夫",tel:"+960 331 5555",url:"maldives",code:"maldives",hasvali:0,comurl:"https://www.maldivespost.com/store/",isavailable:"0",promptinfo:"",testnu:"CP283371400CN",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.maldivespost.com/store/",serversite:""},{cid:"350",id:"4134881",companyname:"马耳他（Malta Post）",shortname:"马耳他",tel:"800 7 22 44",url:"malta",code:"malta",hasvali:0,comurl:"http://maltapost.com",isavailable:"0",promptinfo:"",testnu:"CF160012216MT",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"351",id:"4134992",companyname:"马其顿(Macedonian Post)",shortname:"马其顿",tel:"",url:"macedonia",code:"macedonia",hasvali:0,comurl:"http://www.posta.com.mk/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.posta.com.mk/",serversite:""},{cid:"352",id:"4135011",companyname:"新西兰（New Zealand Post）",shortname:"New Zealand Post",tel:"",url:"newzealand",code:"newzealand",hasvali:0,comurl:"https://www.nzpost.co.nz",isavailable:"0",promptinfo:"",testnu:"EP318770974NZ",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.nzpost.co.nz/tools/tracking?utm_source=sitebar_ph=sitebar=tracking",serversite:""},{cid:"353",id:"4135102",companyname:"摩尔多瓦(Posta Moldovei)",shortname:"摩尔多瓦",tel:"+373 - 22 270 044",url:"moldova",code:"moldova",hasvali:0,comurl:"http://www.posta.md/",isavailable:"0",promptinfo:"",testnu:"EE975880775US",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.posta.md/ro",serversite:""},{cid:"354",id:"4135131",companyname:"孟加拉国(EMS)",shortname:"孟加拉国(EMS)",tel:"9558006",url:"bangladesh",code:"bangladesh",hasvali:0,comurl:"www.bangladeshpost.gov.b",isavailable:"0",promptinfo:"",testnu:"EA018481807AU",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://globaltracktrace.ptc.post/gtt.web/",serversite:""},{cid:"355",id:"4135231",companyname:"塞尔维亚(PE Post of Serbia)",shortname:"塞尔维亚",tel:"0700 100 300",url:"serbia",code:"serbia",hasvali:0,comurl:"http://www.posta.rs",isavailable:"0",promptinfo:"",testnu:"CC165396756RS",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"356",id:"4135280",companyname:"塞浦路斯(Cyprus Post)",shortname:"塞浦路斯",tel:"77778013",url:"cypruspost",code:"cypruspost",hasvali:0,comurl:"http://www.mcw.gov.cy/mcw/postal/dps.nsf/index_en/index_en",isavailable:"0",promptinfo:"",testnu:"RQ000750137CY",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.mcw.gov.cy/mcw/postal/dps.nsf/page39_en/page39_en?opendocument",serversite:""},{cid:"357",id:"4135306",companyname:"突尼斯EMS(Rapid-Poste)",shortname:"突尼斯",tel:"(+216) 71 888 888 ",url:"tunisia",code:"tunisia",hasvali:0,comurl:"http://www.e-suivi.poste.tn",isavailable:"0",promptinfo:"",testnu:"EE447520659TN",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.rapidposte.poste.tn/an/index.html",serversite:""},{cid:"358",id:"4135328",companyname:"乌兹别克斯坦(Post of Uzbekistan)",shortname:"乌兹别克斯坦",tel:"(99871) 233 57 47",url:"uzbekistan",code:"uzbekistan",hasvali:0,comurl:"http://www.pochta.uz/en/",isavailable:"0",promptinfo:"",testnu:"RQ105168703UZ",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.pochta.uz/en/",serversite:""},{cid:"359",id:"4135437",companyname:"新喀里多尼亚[法国](New Caledonia)",shortname:"新喀里多尼亚[法国]",tel:"",url:"caledonia",code:"caledonia",hasvali:0,comurl:"http://www.opt.nc",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://webtrack.opt.nc/ipswebtracking",serversite:""},{cid:"360",id:"4135450",companyname:"叙利亚(Syrian Post)",shortname:"叙利亚",tel:"",url:"republic",code:"republic",hasvali:0,comurl:"http://www.syrianpost.gov.sy/",isavailable:"0",promptinfo:"",testnu:"CP100527951SY",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"361",id:"4135460",companyname:"亚美尼亚(Haypost-Armenian Postal)",shortname:"亚美尼亚",tel:"",url:"haypost",code:"haypost",hasvali:0,comurl:"http://www.haypost.am",isavailable:"0",promptinfo:"",testnu:"RR162422960AM",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.haypost.am/en/track-and-trace",serversite:""},{cid:"362",id:"4135464",companyname:"也门(Yemen Post)",shortname:"也门",tel:"",url:"yemen",code:"yemen",hasvali:0,comurl:"http://www.post.ye/",isavailable:"0",promptinfo:"",testnu:"EE008515775YE",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"363",id:"4135479",companyname:"印度(India Post)",shortname:"印度",tel:"1800-11-2011",url:"india",code:"india",hasvali:0,comurl:"http://www.indiapost.gov.in",isavailable:"0",promptinfo:"",testnu:"ED730048598IN",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"364",id:"4135533",companyname:"英国(大包,EMS)",shortname:"英国(大包,EMS)",tel:"",url:"england",code:"england",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"365",id:"4135567",companyname:"约旦(Jordan Post)",shortname:"约旦",tel:"-4292044",url:"jordan",code:"jordan",hasvali:0,comurl:"http://www.jordanpost.com.jo/",isavailable:"0",promptinfo:"",testnu:"RR310432598JO",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://194.165.151.253/jordanwebtrack/WebTrack_Submit.aspx",serversite:""},{cid:"366",id:"4135574",companyname:"越南小包(Vietnam Posts)",shortname:"越南",tel:"(+84) 1900 54 54 81",url:"vietnam",code:"vietnam",hasvali:0,comurl:"http://www.vnpost.vn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.vnpost.vn/",serversite:""},{cid:"367",id:"4135624",companyname:"黑山(Po?ta Crne Gore)",shortname:"黑山",tel:"",url:"montenegro",code:"montenegro",hasvali:0,comurl:"http://www.postacg.me",isavailable:"0",promptinfo:"",testnu:"RR035827035ME",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.postacg.me",serversite:""},{cid:"368",id:"4135637",companyname:"哥斯达黎加(Correos de Costa Rica)",shortname:"哥斯达黎加",tel:"",url:"correos",code:"correos",hasvali:0,comurl:"https://www.correos.go.cr",isavailable:"0",promptinfo:"",testnu:"EE046324467CR",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.correos.go.cr",serversite:""},{cid:"369",id:"4148742",companyname:"喜来快递",shortname:"喜来快递",tel:"",url:"xilaikd",code:"xilaikd",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"912006000000348",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"370",id:"4148789",companyname:"格陵兰[丹麦]（TELE Greenland A/S）",shortname:"格陵兰[丹麦]",tel:"",url:"greenland",code:"greenland",hasvali:0,comurl:"http://sp.post.gl",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"371",id:"4148814",companyname:"菲律宾（Philippine Postal）",shortname:"菲律宾",tel:"",url:"phlpost",code:"phlpost",hasvali:0,comurl:"https://www.phlpost.gov.ph",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.phlpost.gov.ph",serversite:""},{cid:"372",id:"4148832",companyname:"厄瓜多尔(Correos del Ecuador)",shortname:"厄瓜多尔",tel:"(593-2) 3829210",url:"ecuador",code:"ecuador",hasvali:0,comurl:"http://www.correosdelecuador.gob.ec/",isavailable:"0",promptinfo:"",testnu:"RR301124849EC",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.correosdelecuador.gob.ec/",serversite:""},{cid:"373",id:"4148887",companyname:"冰岛(Iceland Post)",shortname:"冰岛",tel:"",url:"iceland",code:"iceland",hasvali:0,comurl:"http://www.postur.is/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.postur.is/",serversite:""},{cid:"374",id:"4148947",companyname:"波兰小包(Poczta Polska)",shortname:"波兰",tel:"801 333 444",url:"emonitoring",code:"emonitoring",hasvali:0,comurl:"http://www.poczta-polska.pl/",isavailable:"0",promptinfo:"",testnu:"CP177122241PL",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"375",id:"4148955",companyname:"阿尔巴尼亚(Posta shqipatre)",shortname:"阿尔巴尼亚",tel:"",url:"albania",code:"albania",hasvali:0,comurl:"http://www.postashqiptare.al/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.postashqiptare.al/",serversite:""},{cid:"376",id:"4148964",companyname:"阿鲁巴[荷兰]（Post Aruba）",shortname:"阿鲁巴[荷兰]",tel:"+297 528-7637 ",url:"aruba",code:"aruba",hasvali:0,comurl:"http://www.postaruba.com",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"+297 528-7637 ",queryurl:"http://www.postaruba.com",serversite:""},{cid:"377",id:"4148980",companyname:"埃及（Egypt Post）",shortname:"埃及",tel:"23910011",url:"egypt",code:"egypt",hasvali:0,comurl:"http://www.egyptpost.org/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.egyptpost.org/",serversite:""},{cid:"378",id:"4148988",companyname:"爱尔兰(An Post)",shortname:"爱尔兰",tel:"+353 1850 57 58 59",url:"ireland",code:"ireland",hasvali:0,comurl:"http://www.anpost.ie/AnPost/",isavailable:"0",promptinfo:"",testnu:"EF718226834IE",freg:"",freginfo:"",telcomplaintnum:"+353 1850 57 58 59",queryurl:"http://www.anpost.ie/AnPost/",serversite:""},{cid:"379",id:"4148995",companyname:"爱沙尼亚(Eesti Post)",shortname:"爱沙尼亚",tel:"",url:"omniva",code:"omniva",hasvali:0,comurl:"https://www.omniva.ee/",isavailable:"0",promptinfo:"",testnu:"RR142519770EE",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.omniva.ee/",serversite:""},{cid:"380",id:"4149088",companyname:"云豹国际货运",shortname:"云豹国际货运",tel:"",url:"leopard",code:"leopard",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"75500152137",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"381",id:"4149097",companyname:"中外运空运",shortname:"中外运空运",tel:"",url:"sinoairinex",code:"sinoairinex",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"382",id:"4149106",companyname:"上海昊宏国际货物",shortname:"上海昊宏国际货物",tel:"",url:"hyk",code:"hyk",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"383",id:"4149117",companyname:"城晓国际快递",shortname:"城晓国际快递",tel:"",url:"ckeex",code:"ckeex",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"384",id:"4173404",companyname:"匈牙利（Magyar Posta）",shortname:"匈牙利",tel:"+36 1 421 7296 Search",url:"hungary",code:"hungary",hasvali:0,comurl:"http://posta.hu/international",isavailable:"0",promptinfo:"",testnu:"RR280019352HU",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"385",id:"4173429",companyname:"澳门(Macau Post)",shortname:"澳门",tel:"",url:"macao",code:"macao",hasvali:0,comurl:"http://www.macaupost.gov.mo/",isavailable:"0",promptinfo:"",testnu:"RR120606485MO",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.macaupost.gov.mo/",serversite:""},{cid:"386",id:"4194642",companyname:"台湾（中华邮政）",shortname:"台湾",tel:"",url:"postserv",code:"postserv",hasvali:0,comurl:"http://postserv.post.gov.tw",isavailable:"0",promptinfo:"",testnu:"RA606121105TW",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://postserv.post.gov.tw",serversite:""},{cid:"387",id:"4194657",companyname:"北京EMS",shortname:"北京EMS",tel:"010-8417 9386",url:"bjemstckj",code:"bjemstckj",hasvali:0,comurl:"http://www.bj-cnpl.com/webpage/contactus.asp",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"010-8417 9386",queryurl:"http://www.bj-cnpl.com/webpage/contactus.asp",serversite:""},{cid:"388",id:"4194695",companyname:"快淘快递",shortname:"快淘快递",tel:"400-770-3370",url:"kuaitao",code:"kuaitao",hasvali:0,comurl:"http://www.4007703370.com/",isavailable:"0",promptinfo:"",testnu:"8080007464965",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"389",id:"4194702",companyname:"秘鲁(SERPOST)",shortname:"秘鲁",tel:"511-500",url:"peru",code:"peru",hasvali:0,comurl:"http://www.serpost.com.pe/",isavailable:"0",promptinfo:"",testnu:"RR809298583PE",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.serpost.com.pe/",serversite:""},{cid:"390",id:"4194706",companyname:"印度尼西亚EMS(Pos Indonesia-EMS)",shortname:"印度尼西亚EMS",tel:"+62 21 161",url:"indonesia",code:"indonesia",hasvali:0,comurl:"http://ems.posindonesia.co.id/",isavailable:"0",promptinfo:"",testnu:"RR023946256ID",freg:"",freginfo:"",telcomplaintnum:"+62 21 161",queryurl:"http://ems.posindonesia.co.id/",serversite:""},{cid:"391",id:"4194709",companyname:"哈萨克斯坦(Kazpost)",shortname:"哈萨克斯坦",tel:"8 800 080 08 80",url:"kazpost",code:"kazpost",hasvali:0,comurl:"http://www.kazpost.kz/en/",isavailable:"0",promptinfo:"",testnu:"LN125251682US",freg:"",freginfo:"",telcomplaintnum:"8 800 080 08 80",queryurl:"http://www.kazpost.kz/en/",serversite:""},{cid:"392",id:"4249161",companyname:"立白宝凯物流",shortname:"立白宝凯物流",tel:"020-81258022",url:"lbbk",code:"lbbk",hasvali:0,comurl:"http://bkls.liby.com.cn/",isavailable:"0",promptinfo:"",testnu:"20141022902",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://bkls.liby.com.cn/",serversite:""},{cid:"393",id:"4297981",companyname:"百千诚物流",shortname:"百千诚物流",tel:"0755-2222 2232",url:"bqcwl",code:"bqcwl",hasvali:0,comurl:"WWW.1001000.COM",isavailable:"0",promptinfo:"",testnu:"12345678",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"394",id:"4301342",companyname:"皇家物流",shortname:"皇家物流",tel:"0755-29801942",url:"pfcexpress",code:"pfcexpress",hasvali:0,comurl:"http://www.pfcexpress.com/",isavailable:"0",promptinfo:"",testnu:"6661078367333",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"395",id:"4321222",companyname:"法国(La Poste)",shortname:"法国(小包)",tel:"+33 3631",url:"csuivi",code:"csuivi",hasvali:0,comurl:"http://www.colissimo.fr",isavailable:"0",promptinfo:"",testnu:"LA003738926FR",freg:"",freginfo:"",telcomplaintnum:"+33 3631",queryurl:"http://www.colissimo.fr",serversite:""},{cid:"396",id:"4360715",companyname:"奥地利(Austrian Post)",shortname:"奥地利",tel:"+43 810 010 100",url:"austria",code:"austria",hasvali:0,comurl:"http://www.post.at",isavailable:"0",promptinfo:"",testnu:"CG102697953AT",freg:"",freginfo:"",telcomplaintnum:"0810-010-100",queryurl:"http://www.post.at",serversite:""},{cid:"397",id:"4360719",companyname:"乌克兰小包、大包(UkrPoshta)",shortname:"乌克兰(小包,大包)",tel:"+380 (0) 800-500-440",url:"ukraine",code:"ukraine",hasvali:0,comurl:"http://www.ukrposhta.com/www/upost_en.nsf",isavailable:"0",promptinfo:"",testnu:"RB610689498UA",freg:"",freginfo:"",telcomplaintnum:"+380 (0) 800-500-440",queryurl:"http://www.ukrposhta.com/www/upost_en.nsf",serversite:""},{cid:"398",id:"4360722",companyname:"乌干达(Posta Uganda)",shortname:"乌干达",tel:"",url:"uganda",code:"uganda",hasvali:0,comurl:"http://www.ugapost.co.ug/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ugapost.co.ug/",serversite:""},{cid:"399",id:"4360725",companyname:"阿塞拜疆EMS(EMS AzerExpressPost)",shortname:"阿塞拜疆",tel:"",url:"azerbaijan",code:"azerbaijan",hasvali:0,comurl:"http://www.azems.az/en",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.azems.az/en",serversite:""},{cid:"400",id:"4360727",companyname:"芬兰(Itella Posti Oy)",shortname:"芬兰",tel:"+358 200 71000",url:"finland",code:"finland",hasvali:0,comurl:"http://www.posti.fi/english/",isavailable:"0",promptinfo:"",testnu:"CE052141220FI",freg:"",freginfo:"",telcomplaintnum:"+358 200 71000",queryurl:"http://www.posti.fi/english/",serversite:""},{cid:"401",id:"4360729",companyname:"斯洛伐克(Slovenská Posta)",shortname:"斯洛伐克",tel:"(+421) 48 437 87 77",url:"slovak",code:"slovak",hasvali:0,comurl:"http://www.posta.sk/en",isavailable:"0",promptinfo:"",testnu:"(+421) 48 437 87 77",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.posta.sk/en",serversite:""},{cid:"402",id:"4364376",companyname:"埃塞俄比亚(Ethiopian postal)",shortname:"埃塞俄比亚",tel:"",url:"ethiopia",code:"ethiopia",hasvali:0,comurl:"http://www.ethiopostal.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ethiopostal.com/",serversite:""},{cid:"403",id:"4364378",companyname:"卢森堡(Luxembourg Post)",shortname:"卢森堡",tel:"8002 8004 ",url:"luxembourg",code:"luxembourg",hasvali:0,comurl:"http://www.post.lu/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"8002 8004 ",queryurl:"http://www.post.lu/",serversite:""},{cid:"404",id:"4364381",companyname:"毛里求斯(Mauritius Post)",shortname:"毛里求斯",tel:"208 2851",url:"mauritius",code:"mauritius",hasvali:0,comurl:"http://www.mauritiuspost.mu/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"208 2851",queryurl:"http://www.mauritiuspost.mu/",serversite:""},{cid:"405",id:"4364382",companyname:"文莱(Brunei Postal)",shortname:"文莱",tel:"673-2382888 ",url:"brunei",code:"brunei",hasvali:0,comurl:"http://www.post.gov.bn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"673-2382888 ",queryurl:"http://www.post.gov.bn/",serversite:""},{cid:"406",id:"4374487",companyname:"Quantium",shortname:"Quantium",tel:"",url:"quantium",code:"quantium",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"QS2022049439NZ",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"407",id:"4423947",companyname:"坦桑尼亚(Tanzania Posts)",shortname:"坦桑尼亚",tel:"",url:"tanzania",code:"tanzania",hasvali:0,comurl:"http://www.posta.co.tz",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.posta.co.tz/",serversite:""},{cid:"408",id:"4423949",companyname:"阿曼(Oman Post)",shortname:"阿曼",tel:"24769925",url:"oman",code:"oman",hasvali:0,comurl:"http://www.omanpost.om",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.omanpost.om/tabid/93/Default.aspx",serversite:""},{cid:"409",id:"4423950",companyname:"直布罗陀[英国]( Royal Gibraltar Post)",shortname:"直布罗陀[英国]",tel:"",url:"gibraltar",code:"gibraltar",hasvali:0,comurl:"http://www.post.gi/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.post.gi/products-and-services/track-and-trace/track-trace-results/",serversite:""},{cid:"410",id:"4423953",companyname:"博源恒通",shortname:"博源恒通",tel:"15834177000",url:"byht",code:"byht",hasvali:0,comurl:"http://www.56soft.com",isavailable:"0",promptinfo:"",testnu:"BT0000457415",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"411",id:"4423956",companyname:"越南EMS(VNPost Express)",shortname:"越南EMS",tel:"",url:"vnpost",code:"vnpost",hasvali:0,comurl:"http://www.ems.com.vn/default.aspx",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ems.com.vn/default.aspx",serversite:""},{cid:"412",id:"4423958",companyname:"安迅物流",shortname:"安迅物流",tel:"010-59288730",url:"anxl",code:"anxl",hasvali:0,comurl:"http://www.anxl.com.cn/",isavailable:"0",promptinfo:"",testnu:"515082851025234801",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.anxl.com.cn/",serversite:""},{cid:"413",id:"4423959",companyname:"达方物流",shortname:"达方物流",tel:"400 700 7049",url:"dfpost",code:"dfpost",hasvali:0,comurl:"http://www.dfpost.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"400 700 7049",queryurl:"http://www.dfpost.com/",serversite:""},{cid:"414",id:"4432672",companyname:"兰州伙伴物流",shortname:"兰州伙伴物流",tel:"0931-5345730/32",url:"huoban",code:"huoban",hasvali:0,comurl:"http://www.lzhbwl.com/",isavailable:"0",promptinfo:"",testnu:"JR1400027018",freg:"",freginfo:"",telcomplaintnum:"0931-5345730/32",queryurl:"http://www.lzhbwl.com/",serversite:""},{cid:"415",id:"4432674",companyname:"天纵物流",shortname:"天纵物流",tel:"400-990-8816",url:"tianzong",code:"tianzong",hasvali:0,comurl:"http://www.tianzong56.cn/",isavailable:"0",promptinfo:"",testnu:"300000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"416",id:"4433497",companyname:"波黑(JP BH Posta)",shortname:"波黑",tel:"",url:"bohei",code:"bohei",hasvali:0,comurl:"http://www.posta.ba/pocetna/2/0/0.html",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.posta.ba/pocetna/2/0/0.html",serversite:""},{cid:"417",id:"4433500",companyname:"玻利维亚",shortname:"玻利维亚",tel:"",url:"bolivia",code:"bolivia",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"418",id:"4433501",companyname:"柬埔寨(Cambodia Post)",shortname:"柬埔寨",tel:"",url:"cambodia",code:"cambodia",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"419",id:"4436254",companyname:"巴林(Bahrain Post)",shortname:"巴林",tel:"",url:"bahrain",code:"bahrain",hasvali:0,comurl:"http://mot.gov.bh/en",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://mot.gov.bh/en",serversite:""},{cid:"420",id:"4436257",companyname:"纳米比亚(NamPost)",shortname:"纳米比亚",tel:"+264 61 201 3042",url:"namibia",code:"namibia",hasvali:0,comurl:"https://www.nampost.com.na/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"https://www.nampost.com.na/",serversite:""},{cid:"421",id:"4436260",companyname:"卢旺达(Rwanda i-posita)",shortname:"卢旺达",tel:"",url:"rwanda",code:"rwanda",hasvali:0,comurl:"http://i-posita.rw/spip.php?article97",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://i-posita.rw/spip.php?article97",serversite:""},{cid:"422",id:"4436261",companyname:"莱索托(Lesotho Post)",shortname:"莱索托",tel:"",url:"lesotho",code:"lesotho",hasvali:0,comurl:"http://lesothopost.org.ls/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://lesothopost.org.ls/",serversite:""},{cid:"423",id:"4436262",companyname:"肯尼亚(POSTA KENYA)",shortname:"肯尼亚",tel:"",url:"kenya",code:"kenya",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"424",id:"4436266",companyname:"喀麦隆(CAMPOST)",shortname:"喀麦隆",tel:"",url:"cameroon",code:"cameroon",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"425",id:"4436268",companyname:"伯利兹(Belize Postal)",shortname:"伯利兹",tel:"",url:"belize",code:"belize",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"426",id:"4436273",companyname:"巴拉圭(Correo Paraguayo)",shortname:"巴拉圭",tel:"",url:"paraguay",code:"paraguay",hasvali:0,comurl:"http://www.correoparaguayo.gov.py/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.correoparaguayo.gov.py/",serversite:""},{cid:"427",id:"4547765",companyname:"十方通物流",shortname:"十方通物流",tel:"",url:"sfift",code:"sfift",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"1300032142",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"428",id:"4547768",companyname:"飞鹰物流",shortname:"飞鹰物流",tel:"400-6291-666",url:"hnfy",code:"hnfy",hasvali:0,comurl:"http://www.hnfy56.com/",isavailable:"0",promptinfo:"",testnu:"515000056942",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"429",id:"4547770",companyname:"UPS i-parcel",shortname:"UPS i-parcel",tel:"400-078-1183",url:"iparcel",code:"iparcel",hasvali:0,comurl:"http://www.i-parcel.com/en/",isavailable:"0",promptinfo:"",testnu:"AGSEWR40000920304",freg:"",freginfo:"",telcomplaintnum:"400-078-1183",queryurl:"http://www.i-parcel.com/en/",serversite:""},{cid:"430",id:"4547771",companyname:"鑫锐达",shortname:"鑫锐达",tel:"",url:"bjxsrd",code:"bjxsrd",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"090402173868",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"431",id:"4792731",companyname:"麦力快递",shortname:"麦力快递",tel:"400-0000-900",url:"mailikuaidi",code:"mailikuaidi",hasvali:0,comurl:"http://www.mailikuaidi.com/",isavailable:"0",promptinfo:"",testnu:"808003139075",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"339",id:"4792742",companyname:"瑞丰速递",shortname:"瑞丰速递",tel:"400-063-9000",url:"rfsd",code:"rfsd",hasvali:0,comurl:"http://www.rfsd88.com/",isavailable:"0",promptinfo:"",testnu:"8803441415",freg:"",freginfo:"",telcomplaintnum:"400-063-9000",queryurl:"",serversite:""},{cid:"432",id:"4792761",companyname:"美联快递",shortname:"美联快递",tel:"",url:"letseml",code:"letseml",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"ML150909061US",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"433",id:"4792765",companyname:"CNPEX中邮快递",shortname:"CNPEX中邮快递",tel:"",url:"cnpex",code:"cnpex",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"660001535854",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"434",id:"4792770",companyname:"鑫世锐达",shortname:"鑫世锐达",tel:"",url:"xsrd",code:"xsrd",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"435",id:"4843422",companyname:"同舟行物流",shortname:"同舟行物流",tel:"18062512813/18062699168",url:"chinatzx",code:"chinatzx",hasvali:0,comurl:"http://www.chinatzx.com/",isavailable:"0",promptinfo:"",testnu:"20015009",freg:"",freginfo:"",telcomplaintnum:"18062699168",queryurl:"",serversite:""},{cid:"436",id:"4843427",companyname:"秦邦快运",shortname:"秦邦快运",tel:"",url:"qbexpress",code:"qbexpress",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"029202212553",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"437",id:"4843429",companyname:"大达物流",shortname:"大达物流",tel:"400-098-5656",url:"idada",code:"idada",hasvali:0,comurl:"http://www.idada56.com/",isavailable:"0",promptinfo:"",testnu:"03698745",freg:"",freginfo:"",telcomplaintnum:"400-098-5656",queryurl:"http://www.idada56.com/",serversite:""},{cid:"438",id:"4889682",companyname:"skynet",shortname:"skynet",tel:"",url:"skynet",code:"skynet",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"439",id:"4969742",companyname:"红马速递",shortname:"红马速递",tel:"",url:"nedahm",code:"nedahm",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"880000000000",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"440",id:"4969746",companyname:"云南中诚",shortname:"云南中诚",tel:"",url:"czwlyn",code:"czwlyn",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"1511060138579",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"441",id:"4969748",companyname:"万博快递",shortname:"万博快递",tel:"",url:"wanboex",code:"wanboex",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"1508181283202",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"442",id:"4969749",companyname:"腾达速递",shortname:"腾达速递",tel:"",url:"nntengda",code:"nntengda",hasvali:0,comurl:"http://www.nntengda.com",isavailable:"0",promptinfo:"",testnu:"33121263517",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"443",id:"4969751",companyname:"郑州速捷",shortname:"郑州速捷",tel:"",url:"sujievip",code:"sujievip",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"515111311542051501",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"444",id:"4994443",companyname:"UBI Australia",shortname:"UBI Australia",tel:"",url:"gotoubi",code:"gotoubi",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"445",id:"4999566",companyname:"ECMS Express",shortname:"ecmsglobal",tel:"",url:"ecmsglobal",code:"ecmsglobal",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"APELAX1040329689",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"446",id:"5146014",companyname:"速派快递(FastGo)",shortname:"FastGo",tel:"400 886 3278 ",url:"fastgo",code:"fastgo",hasvali:0,comurl:"http://www.fastgo.com.au",isavailable:"0",promptinfo:"",testnu:"AC022150 ",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.fastgo.com.au",serversite:""},{cid:"447",id:"5239760",companyname:"易客满",shortname:"易客满",tel:"86+(400) 086-1756",url:"ecmscn",code:"ecmscn",hasvali:0,comurl:"http://www.trans4e.com/cn/index.html",isavailable:"0",promptinfo:"",testnu:"APECHI1210107905",freg:"",freginfo:"",telcomplaintnum:"86+(400) 086-1756",queryurl:"http://www.trans4e.com/cn/index.html",serversite:""},{cid:"448",id:"5240945",companyname:"俄顺达",shortname:"俄顺达",tel:"0592-5798079",url:"eshunda",code:"eshunda",hasvali:0,comurl:"http://www.007ex.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"0592-5798079",queryurl:"http://www.007ex.com/",serversite:""},{cid:"449",id:"5240960",companyname:"速腾物流",shortname:"速腾物流",tel:"4001136666",url:"suteng",code:"suteng",hasvali:0,comurl:"http://www.ste56.com",isavailable:"0",promptinfo:"",testnu:"9809903615",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ste56.com",serversite:""},{cid:"450",id:"5240969",companyname:"新鹏快递",shortname:"新鹏快递",tel:"",url:"gdxp",code:"gdxp",hasvali:null,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"451",id:"5468864",companyname:"美国韵达",shortname:"美国韵达",tel:"888-408-3332",url:"yundaexus",code:"yundaexus",hasvali:0,comurl:"http://www.yundaex.us/",isavailable:"0",promptinfo:"",testnu:"800000620604",freg:"",freginfo:"",telcomplaintnum:"888-408-3332",queryurl:"http://www.yundaex.us/",serversite:""},{cid:"452",id:"5468987",companyname:"Toll",shortname:"Toll",tel:"",url:"toll",code:"toll",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"453",id:"5468995",companyname:"深圳DPEX",shortname:"Toll",tel:"",url:"深圳DPEX",code:"szdpex",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"5491090",companyname:"百世物流",shortname:"百世物流",tel:"400-8856-561",url:"baishiwuliu",code:"baishiwuliu",hasvali:0,comurl:"http://www.800best.com/",isavailable:"0",promptinfo:"",testnu:"10080799842",freg:"",freginfo:"",telcomplaintnum:"400-8856-561",queryurl:"http://www.800best.com/",serversite:""},{cid:"455",id:"5536903",companyname:"荷兰包裹(PostNL International Parcels)",shortname:"荷兰包裹",tel:"34819",url:"postnlpacle",code:"postnlpacle",hasvali:0,comurl:"http://www.postnl.com/",isavailable:"0",promptinfo:"",testnu:"EA038242134NL",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.postnl.com/",serversite:""},{cid:"456",id:"5536914",companyname:"乐天速递",shortname:"乐天速递",tel:"021-62269059 ",url:"ltexp",code:"ltexp",hasvali:0,comurl:"http://www.ltexp.com.cn ",isavailable:"0",promptinfo:"",testnu:"LT1000323844CA",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ltexp.com.cn ",serversite:""},{cid:"457",id:"5549476",companyname:"智通物流",shortname:"智通物流",tel:"4000561818",url:"ztong",code:"ztong",hasvali:0,comurl:"http://www.ztong56.com",isavailable:"0",promptinfo:"",testnu:"560064792696",freg:"",freginfo:"",telcomplaintnum:"4000561818",queryurl:"http://www.ztong56.com",serversite:""},{cid:"458",id:"5610344",companyname:"鑫通宝物流",shortname:"鑫通宝物流",tel:"13834168880",url:"xtb",code:"xtb",hasvali:0,comurl:"www.xtb56.com",isavailable:"0",promptinfo:"",testnu:"TB0000053304",freg:"",freginfo:"",telcomplaintnum:"13834168880",queryurl:"www.xtb56.com",serversite:""},{cid:"459",id:"5690110",companyname:"airpak expresss",shortname:"airpak expresss",tel:"",url:"airpak",code:"airpak",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"460",id:"5690118",companyname:"荷兰邮政-中国件",shortname:"荷兰邮政-中国件",tel:"34819",url:"postnlchina",code:"postnlchina",hasvali:0,comurl:"http://www.postnl.com/",isavailable:"0",promptinfo:"",testnu:"3STJJG9037471",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.postnl.com/",serversite:""},{cid:"461",id:"5759725",companyname:"法国小包（colissimo）",shortname:"colissimo",tel:"+33 3631",url:"colissimo",code:"colissimo",hasvali:0,comurl:"http://www.colissimo.fr",isavailable:"0",promptinfo:"",testnu:"EY079906788FR",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.colissimo.fr",serversite:""},{cid:"462",id:"5760338",companyname:"PCA Express",shortname:"PCA Express",tel:"",url:"pcaexpress",code:"pcaexpress",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"EAU148011966",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"463",id:"5760369",companyname:"韩润",shortname:"韩润",tel:"400-636-4311",url:"hanrun",code:"hanrun",hasvali:0,comurl:"http://www.hr-sz.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"39",id:"5764964",companyname:"TNT",shortname:"TNT",tel:"800-820-9868",url:"tnt",code:"tnt",hasvali:0,comurl:"http://www.tnt.com.cn",isavailable:"0",promptinfo:"",testnu:"278059110",freg:"^[A-Za-z0-9]{9,20}$",freginfo:"TNT快递货运单上的由9位数字组成的或者省份的首字母+9位数字+WW组成",telcomplaintnum:"800-820-9868",queryurl:"",serversite:"http://www.tnt.com/express/zh_cn/site/home/about_us/0.html"},{cid:"464",id:"5811418",companyname:"中远e环球",shortname:"中远e环球",tel:"",url:"cosco",code:"cosco",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"465",id:"5811424",companyname:"顺达快递",shortname:"顺达快递",tel:"",url:"sundarexpress",code:"sundarexpress",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"466",id:"5811427",companyname:"捷记方舟",shortname:"捷记方舟",tel:"",url:"ajexpress",code:"ajexpress",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"AJ613297AU",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"467",id:"5811430",companyname:"方舟速递",shortname:"方舟速递",tel:"",url:"arkexpress",code:"arkexpress",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"468",id:"5811432",companyname:"明大快递",shortname:"明大快递",tel:"",url:"adaexpress",code:"adaexpress",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"469",id:"5811433",companyname:"长江国际速递",shortname:"长江国际速递",tel:"",url:"changjiang",code:"changjiang",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"CJ000289942CN",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"470",id:"5817124",companyname:"八达通",shortname:"八达通",tel:"",url:"bdatong",code:"bdatong",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"R800311511070035",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"471",id:"5817126",companyname:"美国申通",shortname:"美国申通",tel:"",url:"stoexpress",code:"stoexpress",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"472",id:"5819733",companyname:"泛捷国际速递",shortname:"泛捷国际速递",tel:"",url:"epanex",code:"epanex",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"473",id:"5869052",companyname:"顺捷丰达",shortname:"顺捷丰达",tel:"0755—88999000",url:"shunjiefengda",code:"shunjiefengda",hasvali:0,comurl:"http://www.sjfd-express.com",isavailable:"0",promptinfo:"",testnu:"11535619547637",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.sjfd-express.com",serversite:""},{cid:"474",id:"5873264",companyname:"华赫物流",shortname:"华赫物流",tel:"",url:"nmhuahe",code:"nmhuahe",hasvali:0,comurl:"http://nmhuahe.com",isavailable:"0",promptinfo:"",testnu:"3401884523",freg:"",freginfo:"",telcomplaintnum:"0471-2534162  ",queryurl:"http://nmhuahe.com",serversite:""},{cid:"475",id:"6027634",companyname:"德国(Deutsche Post)",shortname:"德国(Deutsche Post)",tel:"0180 2 3333*",url:"deutschepost",code:"deutschepost",hasvali:0,comurl:"http://www.dpdhl.com/en.html",isavailable:"0",promptinfo:"",testnu:"EA037148565NL",freg:"",freginfo:"",telcomplaintnum:"0180 2 3333*",queryurl:"http://www.dpdhl.com/en.html",serversite:""},{cid:"476",id:"6048728",companyname:"百腾物流",shortname:"百腾物流",tel:"400-9989-256",url:"baitengwuliu",code:"baitengwuliu",hasvali:0,comurl:"http://www.beteng.com",isavailable:"0",promptinfo:"",testnu:"0004287478",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.beteng.com",serversite:""},{cid:"477",id:"6083537",companyname:"品骏快递",shortname:"品骏快递",tel:"400-9789-888",url:"pjbest",code:"pjbest",hasvali:0,comurl:"http://www.pjbest.com/",isavailable:"0",promptinfo:"",testnu:"15111344414116",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"478",id:"6158171",companyname:"全速通",shortname:"全速通",tel:"",url:"quansutong",code:"quansutong",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"479",id:"6177194",companyname:"中技物流",shortname:"中技物流",tel:"",url:"zhongjiwuliu",code:"zhongjiwuliu",hasvali:null,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"480",id:"6179713",companyname:"九曳供应链",shortname:"九曳供应链",tel:"4006-199-939",url:"jiuyescm",code:"jiuyescm",hasvali:0,comurl:"http://jiuyescm.com",isavailable:"0",promptinfo:"",testnu:"JY00082167",freg:"",freginfo:"",telcomplaintnum:"4006-199-939",queryurl:"http://jiuyescm.com",serversite:""},{cid:"481",id:"6205187",companyname:"天翼快递",shortname:"天翼快递",tel:"",url:"tykd",code:"tykd",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"482",id:"6205195",companyname:"德意思",shortname:"德意思",tel:"",url:"dabei",code:"dabei",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"483",id:"6279371",companyname:"城际快递",shortname:"城际快递",tel:"",url:"chengji",code:"chengji",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"484",id:"6281132",companyname:"程光快递",shortname:"程光快递",tel:"",url:"chengguangkuaidi",code:"chengguangkuaidi",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://127.0.0.1:9202/trackinfo/chengguangkuaidi",serversite:""},{cid:"485",id:"6281305",companyname:"佐川急便",shortname:"佐川急便",tel:"",url:"sagawa",code:"sagawa",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"486",id:"6281339",companyname:"蓝天快递",shortname:"蓝天快递",tel:"",url:"lantiankuaidi",code:"lantiankuaidi",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"487",id:"6281340",companyname:"永昌物流",shortname:"永昌物流",tel:"",url:"yongchangwuliu",code:"yongchangwuliu",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"488",id:"6281341",companyname:"笨鸟海淘",shortname:"笨鸟海淘",tel:"4008-890-788",url:"birdex",code:"birdex",hasvali:0,comurl:"http://birdex.cn/",isavailable:"0",promptinfo:"",testnu:"BH1511163890",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"489",id:"6281342",companyname:"一正达速运",shortname:"一正达速运",tel:"",url:"yizhengdasuyun",code:"yizhengdasuyun",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"490",id:"6337156",companyname:"京东订单",shortname:"京东订单",tel:"400-606-5500",url:"jdorder",code:"jdorder",hasvali:0,comurl:"http://m.jd.com",isavailable:"0",promptinfo:"",testnu:"11182464323",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"491",id:"6338318",companyname:"优配速运",shortname:"优配速运",tel:"0531 89977777",url:"sdyoupei",code:"sdyoupei",hasvali:0,comurl:"www.sdyoupei.com",isavailable:"0",promptinfo:"",testnu:"JX13797337",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"www.sdyoupei.com",serversite:""},{cid:"492",id:"6389499",companyname:"TRAKPAK",shortname:"TRAKPAK",tel:"",url:"trakpak",code:"trakpak",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"493",id:"6389500",companyname:"GTS快递",shortname:"GTS",tel:"4000-159-111",url:"gts",code:"gts",hasvali:0,comurl:"http://www.gto315.com",isavailable:"0",promptinfo:"",testnu:"1000089385",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"494",id:"6389501",companyname:"AOL澳通速递",shortname:"AOL澳通速递",tel:"0424047888",url:"aolau",code:"aolau",hasvali:0,comurl:"http://www.aol-au.com/",isavailable:"0",promptinfo:"",testnu:"AT150271152SD",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"495",id:"6452710",companyname:"宜送物流",shortname:"宜送物流",tel:"4008636658",url:"yiex",code:"yiex",hasvali:0,comurl:"http://www.yi-express.com",isavailable:"0",promptinfo:"",testnu:"1531619551",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"496",id:"6458964",companyname:"通达兴物流",shortname:"通达兴物流",tel:"4001-006-609",url:"tongdaxing",code:"tongdaxing",hasvali:0,comurl:"http://www.tongdaxing.com/",isavailable:"0",promptinfo:"",testnu:"200100002541",freg:"",freginfo:"",telcomplaintnum:"4001-006-609",queryurl:"",serversite:""},{cid:"497",id:"6488777",companyname:"香港(HongKong Post)英文",shortname:"香港(HongKong Post)英文",tel:"",url:"hkposten",code:"hkposten",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"RC228951871HK ",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"498",id:"6505056",companyname:"苏宁订单",shortname:"苏宁订单",tel:"4008-365-365",url:"suningorder",code:"suningorder",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"1025331562-0",freg:"",freginfo:"",telcomplaintnum:"4008-365-365",queryurl:"",serversite:""},{cid:"499",id:"6510590",companyname:"飞力士物流",shortname:"飞力士物流",tel:"86-755-83448000",url:"flysman",code:"flysman",hasvali:0,comurl:"http://www.flysman.com.cn",isavailable:"0",promptinfo:"",testnu:"1000159522",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"500",id:"6526029",companyname:"转运四方",shortname:"转运四方",tel:"",url:"zhuanyunsifang",code:"zhuanyunsifang",hasvali:0,comurl:"http://www.transrush.com/",isavailable:"0",promptinfo:"",testnu:"DD151017515477",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"501",id:"6534352",companyname:"logen路坚",shortname:"logen路坚",tel:"",url:"ilogen",code:"ilogen",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"6565867",companyname:"成都东骏物流",shortname:"成都东骏物流",tel:"028-85538888",url:"dongjun",code:"dongjun",hasvali:0,comurl:"http://www.dj56.cc/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"028-85887608",queryurl:"http://www.dj56.cc/",serversite:""},{cid:"503",id:"6565868",companyname:"日本郵便",shortname:"日本郵便",tel:"",url:"japanpost",code:"japanpost",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"EL030197536JP",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"504",id:"6656471",companyname:"佳家通货运",shortname:"佳家通货运",tel:"4008-056-356",url:"jiajiatong56",code:"jiajiatong56",hasvali:0,comurl:"http://www.jiajiatong56.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.jiajiatong56.com/",serversite:""},{cid:"505",id:"6656472",companyname:"吉日优派",shortname:"吉日优派",tel:"400-0531-951",url:"jrypex",code:"jrypex",hasvali:0,comurl:"http://www.jrypex.com",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"159-6531-6532",queryurl:"http://www.jrypex.com",serversite:""},{cid:"506",id:"6656473",companyname:"西安胜峰",shortname:"西安胜峰",tel:"400-029-8171",url:"xaetc",code:"xaetc",hasvali:0,comurl:"http://www.xaetc.cn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"029-68738585",queryurl:"http://www.xaetc.cn/",serversite:""},{cid:"507",id:"6687463",companyname:"CJ物流",shortname:"CJ物流",tel:"",url:"doortodoor",code:"doortodoor",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"508",id:"6697009",companyname:"信天捷快递",shortname:"信天捷快递",tel:"400-718-7518",url:"xintianjie",code:"xintianjie",hasvali:0,comurl:"http:/www.bjxintianjie.com",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"400-718-7518",queryurl:"http:/www.bjxintianjie.com",serversite:""},{cid:"509",id:"6697010",companyname:"泰国138国际物流",shortname:"泰国138国际物流",tel:"66880089916 ",url:"sd138",code:"sd138",hasvali:0,comurl:"http://www.138sd.net/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"66961799756",queryurl:"http://www.138sd.net/",serversite:""},{cid:"510",id:"6697011",companyname:"猴急送",shortname:"猴急送",tel:"400-8888-798",url:"hjs",code:"hjs",hasvali:0,comurl:"http://www.hjs777.com",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"0731-55573559",queryurl:"http://www.hjs777.com",serversite:""},{cid:"511",id:"6697012",companyname:"全信通快递",shortname:"全信通快递",tel:"400-882-6886",url:"quanxintong",code:"quanxintong",hasvali:0,comurl:"http://www.all-express.com.cn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"400-882-6886",queryurl:"http://www.all-express.com.cn/",serversite:""},{cid:"512",id:"6701507",companyname:"amazon-国际订单",shortname:"amazon-国际订单",tel:"400-910-5668 ",url:"amusorder",code:"amusorder",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"400-910-5668 ",queryurl:"",serversite:""},{cid:"513",id:"6730874",companyname:"骏丰国际速递",shortname:"骏丰国际速递",tel:"0773-2218104",url:"junfengguoji",code:"junfengguoji",hasvali:0,comurl:"http://www.peakmorepost.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"0773-2218104",queryurl:"http://www.peakmorepost.com/",serversite:""},{cid:"514",id:"6752220",companyname:"货运皇",shortname:"货运皇",tel:"",url:"kingfreight",code:"kingfreight",hasvali:0,comurl:"http://www.kingfreight.com.au/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.kingfreight.com.au/ ",serversite:""},{cid:"515",id:"6781447",companyname:"远成快运",shortname:"远成快运",tel:"",url:"ycexpress",code:"ycexpress",hasvali:0,comurl:"http://www.ycgky.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ycgky.com/",serversite:""},{cid:"516",id:"6796744",companyname:"速必达",shortname:"速必达",tel:"0752-3270594",url:"subida",code:"subida",hasvali:0,comurl:"http://www.speedex.com.cn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"0752-3262604",queryurl:"http://www.speedex.com.cn/",serversite:""},{cid:"517",id:"6823113",companyname:"特急便物流",shortname:"特急便物流",tel:"",url:"sucmj",code:"sucmj",hasvali:0,comurl:"http://www.sucmj.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.sucmj.com/ ",serversite:""},{cid:"518",id:"6829573",companyname:"亚马逊中国",shortname:"亚马逊中国",tel:"400-910-5669",url:"yamaxunwuliu",code:"yamaxunwuliu",hasvali:0,comurl:"http://www.z-exp.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.z-exp.com/",serversite:""},{cid:"519",id:"6866441",companyname:"锦程物流",shortname:"锦程物流",tel:"400-020-5556",url:"jinchengwuliu",code:"jinchengwuliu",hasvali:0,comurl:"http://www.jc56.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.jc56.com/",serversite:"http://www.jc56.com/GlobalNetwork.html"},{cid:"520",id:"6887562",companyname:"景光物流",shortname:"景光物流",tel:"400-700-1682 ",url:"jgwl",code:"jgwl",hasvali:0,comurl:"http://www.jgwl.cn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.jgwl.cn/",serversite:""},{cid:"521",id:"6887563",companyname:"御风速运",shortname:"御风速运",tel:"400-611-3348",url:"yufeng",code:"yufeng",hasvali:0,comurl:"http://www.shyfwl.cn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"15237189196",queryurl:"http://www.shyfwl.cn/",serversite:""},{cid:"522",id:"6887564",companyname:"至诚通达快递",shortname:"至诚通达快递",tel:"400-151-8918 ",url:"zhichengtongda",code:"zhichengtongda",hasvali:0,comurl:"http://www.zhichengtongda.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"02029816972 ",queryurl:"http://www.zhichengtongda.com/",serversite:""},{cid:"523",id:"6971343",companyname:"日益通速递",shortname:"日益通速递",tel:"400-041-5858 ",url:"rytsd",code:"rytsd",hasvali:0,comurl:"http://www.rytbj.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.rytbj.com/",serversite:""},{cid:"524",id:"6971344",companyname:"航宇快递",shortname:"航宇快递",tel:"021-54478850",url:"hangyu",code:"hangyu",hasvali:0,comurl:"http://www.hyexp.cn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:" 13122417950",queryurl:"http://www.hyexp.cn/",serversite:""},{cid:"525",id:"6971345",companyname:"急顺通",shortname:"急顺通",tel:"0812-6688669",url:"pzhjst",code:"pzhjst",hasvali:0,comurl:"http://www.pzhjst.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"0812-3358333",queryurl:"http://www.pzhjst.com/",serversite:""},{cid:"526",id:"6971346",companyname:"优速通达",shortname:"优速通达",tel:"400-651-8331",url:"yousutongda",code:"yousutongda",hasvali:0,comurl:"http://www.yousutongda8.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.yousutongda8.com/ ",serversite:""},{cid:"0",id:"6987636",companyname:"秦远物流",shortname:"秦远物流",tel:"09-8372888",url:"qinyuan",code:"qinyuan",hasvali:0,comurl:"http://www.chinz56.co.nz/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.chinz56.co.nz/",serversite:""},{cid:"0",id:"6987637",companyname:"澳邮中国快运",shortname:"澳邮中国快运",tel:"400-622-6193",url:"auexpress",code:"auexpress",hasvali:0,comurl:"http://www.auexpress.com.au/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.auexpress.com.au/",serversite:""},{cid:"529",id:"6987638",companyname:"众辉达物流",shortname:"众辉达物流",tel:"400-622-6193",url:"zhdwl",code:"zhdwl",hasvali:0,comurl:"http://www.zhdpt.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.zhdpt.com/",serversite:""},{cid:"0",id:"7020750",companyname:"飞邦快递",shortname:"飞邦快递",tel:"400-016-8756",url:"fbkd",code:"fbkd",hasvali:0,comurl:"http://www.fbkd.net/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.fbkd.net/",serversite:""},{cid:"0",id:"7020751",companyname:"华达快运",shortname:"华达快运",tel:"400-895-1110",url:"huada",code:"huada",hasvali:0,comurl:"http://www.zz-huada.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.zz-huada.com/",serversite:""},{cid:"0",id:"7027601",companyname:"FOX国际快递",shortname:"FOX国际快递",tel:"400-965-8885",url:"fox",code:"fox",hasvali:0,comurl:"http://www.foxglobal.nl/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"0800 5188",queryurl:"http://www.foxglobal.nl/",serversite:""},{cid:"0",id:"7034870",companyname:"环球速运",shortname:"环球速运",tel:"139-1076-0364",url:"huanqiu",code:"huanqiu",hasvali:0,comurl:"http://www.pantoscn.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.pantoscn.com/",serversite:""},{cid:"0",id:"7034871",companyname:"辉联物流",shortname:"辉联物流",tel:"139-1076-0364",url:"huilian",code:"huilian",hasvali:0,comurl:"http://www.pantoscn.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.pantoscn.com/",serversite:""},{cid:"0",id:"7052894",companyname:"A2U速递",shortname:"A2U速递",tel:"03 9877 4330",url:"a2u",code:"a2u",hasvali:0,comurl:"http://www.a2u.com.au/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7072005",companyname:"UEQ快递",shortname:"UEQ快递",tel:"020-37639835",url:"ueq",code:"ueq",hasvali:0,comurl:"http://www.ueq.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ueq.com/",serversite:""},{cid:"0",id:"7072006",companyname:"中加国际快递",shortname:"中加国际快递",tel:"(604) 207-0338",url:"scic",code:"scic",hasvali:0,comurl:"http://scicglobal.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://scicglobal.com/",serversite:""},{cid:"0",id:"7072007",companyname:"易达通",shortname:"易达通",tel:"",url:"yidatong",code:"yidatong",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:"http://www.qexpress.co.nz/"},{cid:"0",id:"7072008",companyname:"宜送",shortname:"宜送",tel:"",url:"yisong",code:"yisong",hasvali:0,comurl:"http://www.yi-express.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7077095",companyname:"捷网俄全通",shortname:"捷网俄全通",tel:"4007287156",url:"ruexp",code:"ruexp",hasvali:0,comurl:"http://www.ruexp.cn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"13641831939",queryurl:"",serversite:""},{cid:"0",id:"7087099",companyname:"华通务达物流",shortname:"华通务达物流",tel:"0351-5603868",url:"htwd",code:"htwd",hasvali:0,comurl:"http://www.htwd56.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7087100",companyname:"申必达",shortname:"申必达",tel:"713-482-1198",url:"speedoex",code:"speedoex",hasvali:0,comurl:"http://www.speedoex.com/cn",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7087101",companyname:"联运快递",shortname:"联运快递",tel:" (02) 8541 8607 ",url:"lianyun",code:"lianyun",hasvali:0,comurl:"http://121.40.93.72/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7087102",companyname:"捷安达",shortname:"捷安达",tel:"03 9544 8304",url:"jieanda",code:"jieanda",hasvali:0,comurl:"http://www.giantpost.com.au/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7087103",companyname:"SHL畅灵国际物流",shortname:"SHL畅灵国际物流",tel:"400-098-5066",url:"shlexp",code:"shlexp",hasvali:0,comurl:"http://www.shlexp.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7087104",companyname:"EWE全球快递",shortname:"EWE全球快递",tel:"(02) 9644 2648",url:"ewe",code:"ewe",hasvali:0,comurl:"https://www.everfast.com.au/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7095219",companyname:"全球快运",shortname:"全球快运",tel:"626-363-4161",url:"abcglobal",code:"abcglobal",hasvali:0,comurl:"http://www.abcglobalexpress.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7095220",companyname:"芒果速递",shortname:"芒果速递",tel:"",url:"mangguo",code:"mangguo",hasvali:0,comurl:"http://mangoex.cn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7095221",companyname:"金海淘",shortname:"金海淘",tel:"626-330-7733",url:"goldhaitao",code:"goldhaitao",hasvali:0,comurl:"http://www.goldhaitao.us/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7095222",companyname:"极光转运",shortname:"极光转运",tel:"0755-86535662 ",url:"jiguang",code:"jiguang",hasvali:0,comurl:"http://www.jiguangus.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7095223",companyname:"富腾达国际货运",shortname:"富腾达国际货运",tel:"09-4432342",url:"ftd",code:"ftd",hasvali:0,comurl:"http://www.ftdlogistics.co.nz/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7095224",companyname:"DCS",shortname:"DCS",tel:"400-678-0856",url:"dcs",code:"dcs",hasvali:0,comurl:"http://www.dcslogistics.us/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7098838",companyname:"成达国际速递",shortname:"成达国际速递",tel:"00852-56078835 ",url:"chengda",code:"chengda",hasvali:0,comurl:"http://www.chengda-express.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7098839",companyname:"中环快递",shortname:"中环快递",tel:"400-007-9988",url:"zhonghuan",code:"zhonghuan",hasvali:0,comurl:"http://www.zhexpress.com.au/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7098840",companyname:"顺邦国际物流",shortname:"顺邦国际物流",tel:"95040391701",url:"shunbang",code:"shunbang",hasvali:0,comurl:"http://shunbangus.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7098841",companyname:"启辰国际速递",shortname:"启辰国际速递",tel:"",url:"qichen",code:"qichen",hasvali:0,comurl:"http://www.qichen.hk/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7099125",companyname:"澳货通",shortname:"澳货通",tel:"",url:"auex",code:"auex",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7099129",companyname:"澳速物流",shortname:"澳速物流",tel:"",url:"aosu",code:"aosu",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7099131",companyname:"澳世速递",shortname:"澳世速递",tel:"",url:"aus",code:"aus",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7120503",companyname:"当当",shortname:"当当",tel:"",url:"dangdang",code:"dangdang",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7130320",companyname:"天马迅达",shortname:"天马迅达",tel:"",url:"tianma",code:"tianma",hasvali:0,comurl:"http://www.expresstochina.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7133278",companyname:"美龙快递",shortname:"美龙快递",tel:"323-208-9848",url:"mjexp",code:"mjexp",hasvali:0,comurl:"http://www.mjexp.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7137931",companyname:"唯品会(vip)",shortname:"唯品会(vip)",tel:"",url:"vipshop",code:"vipshop",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7140116",companyname:"香港骏辉物流",shortname:"香港骏辉物流",tel:"",url:"chunfai",code:"chunfai",hasvali:0,comurl:"http://www.chunfai.hk/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7140118",companyname:"三三国际物流",shortname:"三三国际物流",tel:"",url:"zenzen",code:"zenzen",hasvali:0,comurl:"http://zenzen.hk/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7159377",companyname:"淼信快递",shortname:"淼信快递",tel:"",url:"mxe56",code:"mxe56",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7159378",companyname:"海派通",shortname:"海派通",tel:"021-54723815",url:"hipito",code:"hipito",hasvali:0,comurl:"http://www.hipito.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.hipito.com/",serversite:""},{cid:"0",id:"7162726",companyname:"国美",shortname:"国美",tel:"",url:"gome",code:"gome",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7164764",companyname:"鹏程快递",shortname:"鹏程快递",tel:"0800-166-188",url:"pengcheng",code:"pengcheng",hasvali:0,comurl:"http://www.pcexpress.co.nz/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7164765",companyname:"冠庭国际物流",shortname:"冠庭国际物流",tel:"00852-2318 1213",url:"guanting",code:"guanting",hasvali:0,comurl:"http://www.quantiumsolutions.com/hk-sc/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7169694",companyname:"1号店",shortname:"1号店",tel:"",url:"yhdshop",code:"yhdshop",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7172420",companyname:"金岸物流",shortname:"金岸物流",tel:"626-818-2750",url:"jinan",code:"jinan",hasvali:0,comurl:"http://www.gpl-express.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7172421",companyname:"海带宝",shortname:"海带宝",tel:"400-825-8585",url:"haidaibao",code:"haidaibao",hasvali:0,comurl:"http://www.haidaibao.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7172422",companyname:"澳通华人物流",shortname:"澳通华人物流",tel:"61 8 9457 9339",url:"cllexpress",code:"cllexpress",hasvali:0,comurl:"http://www.cllexpress.com.au/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7172423",companyname:"斑马物流",shortname:"斑马物流",tel:"",url:"banma",code:"banma",hasvali:0,comurl:"http://www.360zebra.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.360zebra.com/program/tracking.aspx",serversite:""},{cid:"0",id:"7172935",companyname:"友家速递",shortname:"友家速递",tel:"",url:"youjia",code:"youjia",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7177446",companyname:"百通物流",shortname:"百通物流",tel:"",url:"buytong",code:"buytong",hasvali:0,comurl:"http://www.buytong.cn/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7177586",companyname:"新元快递",shortname:"新元快递",tel:"",url:"xingyuankuaidi",code:"xingyuankuaidi",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7184090",companyname:"amazon-国内订单",shortname:"amazon-国内订单",tel:"",url:"amcnorder",code:"amcnorder",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7200691",companyname:"全速物流",shortname:"全速物流",tel:"400-679-3883",url:"quansu",code:"quansu",hasvali:0,comurl:"http://www.china-quansu.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.china-quansu.com/",serversite:""},{cid:"0",id:"7200692",companyname:"新杰物流",shortname:"新杰物流",tel:"",url:"sunjex",code:"sunjex",hasvali:0,comurl:"http://www.sunjex.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.sunjex.com/",serversite:""},{cid:"0",id:"7200693",companyname:"鲁通快运",shortname:"鲁通快运",tel:"400-055-5656 ",url:"lutong",code:"lutong",hasvali:0,comurl:"http://www.lutongky.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.lutongky.com/ ",serversite:""},{cid:"0",id:"7220326",companyname:"新元国际",shortname:"新元国际",tel:"",url:"xynyc",code:"xynyc",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.xynyc.com/  ",serversite:""},{cid:"0",id:"7220327",companyname:"小C海淘",shortname:"小C海淘",tel:"",url:"xiaocex",code:"xiaocex",hasvali:0,comurl:"",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:"http://www.xiaocex.cn"},{cid:"0",id:"7272925",companyname:"航空快递",shortname:"航空快递",tel:"18640151012 ",url:"airgtc",code:"airgtc",hasvali:0,comurl:"http://air-gtc.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://air-gtc.com/",serversite:""},{cid:"0",id:"7272926",companyname:"叮咚澳洲转运",shortname:"叮咚澳洲转运",tel:"010-57853244",url:"dindon",code:"dindon",hasvali:0,comurl:"http://www.dindonexpress.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.dindonexpress.com/",serversite:""},{cid:"0",id:"7314900",companyname:"环球通达 ",shortname:"环球通达",tel:"400-078-1805 ",url:"hqtd",code:"hqtd",hasvali:0,comurl:"http://www.hqtdkd.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.hqtdkd.com/ ",serversite:""},{cid:"0",id:"7332766",companyname:"小米",shortname:"小米",tel:"",url:"xiaomi",code:"xiaomi",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7341826",companyname:"顺丰优选",shortname:"顺丰优选",tel:"",url:"sfbest",code:"sfbest",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7342316",companyname:"好又快物流",shortname:"好又快物流",tel:"400-800-3838 ",url:"haoyoukuai",code:"haoyoukuai",hasvali:0,comurl:"http://www.ff56.com.cn/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ff56.com.cn/ ",serversite:""},{cid:"0",id:"7377858",companyname:"永旺达快递",shortname:"永旺达快递",tel:"400-0607-290 ",url:"yongwangda",code:"yongwangda",hasvali:0,comurl:"http://www.yongwangda8.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"15361282277 ",queryurl:"http://www.yongwangda8.com/ ",serversite:""},{cid:"0",id:"7377859",companyname:"木春货运",shortname:"木春货运",tel:"400-6359-800 ",url:"mchy",code:"mchy",hasvali:0,comurl:"http://www.mcchina-express.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.mcchina-express.com/ ",serversite:""},{cid:"0",id:"7378182",companyname:"程光快递",shortname:"程光快递",tel:"6499482780 ",url:"flyway",code:"flyway",hasvali:0,comurl:"www.flyway.co.nz ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"6499482781 ",queryurl:"www.flyway.co.nz ",serversite:""},{cid:"0",id:"7384055",companyname:"全之鑫物流",shortname:"全之鑫物流",tel:"400-080-5658",url:"qzx56",code:"qzx56",hasvali:0,comurl:"http://www.qzx56.com/",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:" 0371-56078011",queryurl:"http://www.qzx56.com/",serversite:""},{cid:"0",id:"7393483",companyname:"百事亨通",shortname:"百事亨通",tel:"400-185-6666",url:"bsht",code:"bsht",hasvali:0,comurl:"www.bsht-express.com",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"400-185-6666",queryurl:"www.bsht-express.com",serversite:""},{cid:"0",id:"7441573",companyname:"ILYANG",shortname:"ILYANG",tel:"",url:"ilyang",code:"ilyang",hasvali:0,comurl:"http://www.ilyangexpress.com/ ",isavailable:"0",promptinfo:"",testnu:"1740682860",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.ilyangexpress.com/ ",serversite:""},{cid:"0",id:"7441681",companyname:"先锋快递",shortname:"先锋快递",tel:"0311-69046652 ",url:"xianfeng",code:"xianfeng",hasvali:0,comurl:"http://xianfengex.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://xianfengex.com/ ",serversite:""},{cid:"0",id:"7505279",companyname:"万家通快递",shortname:"万家通快递",tel:"",url:"timedg",code:"timedg",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""},{cid:"0",id:"7513752",companyname:"美快国际物流",shortname:"美快国际物流",tel:"020-39141092 ",url:"meiquick",code:"meiquick",hasvali:0,comurl:"http://www.meiquick.com/ ",isavailable:"0",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"http://www.meiquick.com/ ",serversite:""},{cid:"0",id:"7547255",companyname:"泰中物流",shortname:"泰中物流",tel:"",url:"tny",code:"tny",hasvali:0,comurl:"",isavailable:"",promptinfo:"",testnu:"",freg:"",freginfo:"",telcomplaintnum:"",queryurl:"",serversite:""}]},function(e,t,a){"use strict";var i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"express-detail"},[a("view",{staticClass:"express-detail-top"},[e._m(0),a("view",{staticClass:"express-detail-right"},[a("view",{staticClass:"express-detail-title1"},[e._v("快递公司："),a("text",[e._v(e._s(e.name||"--"))])]),a("view",{staticClass:"express-detail-title2"},[e._v("快递单号："+e._s(e.qrCode))]),a("view",{staticClass:"express-detail-title2"},[e._v("管理状态："+e._s(e.context||"--"))])])]),e.flag?a("view",{staticClass:"express-detail-step-wrap"},[a("text",{staticClass:"express-detail-step-nav"},[e._v("快递状态：")]),e._m(1)]):e._e(),e.flag?a("view",{staticClass:"express-detail-status"},e._l(e.statusArray,function(t,i){return a("view",{key:i,class:0==i?"express-detail-status-content express-detail-status-act":"express-detail-status-content"},[t.phoneNumber?a("view",[e._v("\n\t\t\t\t\t"+e._s(t.time)+" "+e._s(t.context)+" "),a("text",{staticStyle:{color:"#13a3ff"},attrs:{eventid:"Q3P-0-"+i},on:{click:function(a){e.callPhone(t.phoneNumber)}}},[e._v(e._s(t.phoneNumber))])]):a("view",[e._v("\n\t\t\t\t\t"+e._s(t.time)+" "+e._s(t.context)+"\n\t\t\t\t")])])})):e._e(),e.noDataFlag?a("view",{staticClass:"express-detail-no-data"},[a("image",{staticClass:"express-detail-no-data-img",attrs:{src:"../../static/images/no-data.png",mode:"aspectFit"}})]):e._e()])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"express-detail-left"},[t("image",{attrs:{src:"../../static/images/package-icon.png",mode:"aspectFit"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"express-detail-step-reward",attrs:{bindtap:"showReward"}},[t("image",{staticClass:"express-detail-step-image",attrs:{mode:"aspectFit",src:"/images/shang-icon2.png"}})])}]};t.a=i}],[15]);
});
require('pages/detail/detail.js');

